const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const model = require('../docs/prototipos/caio/alta-fidelidade/model.js');

test('impede envio sem acesso, revisão, confirmação ou retirada de dados pessoais', () => {
  const ready = { ...model.create(), ...model.sample, authenticated: true, reviewed: true };
  for (const state of [
    { ...ready, authenticated: false },
    { ...ready, reviewed: false },
    { ...ready, description: ready.description + ' Contato: [telefone fictício]' },
    { ...ready, title: 'CPF: 123.456.789-09' },
    { ...ready, description: '' },
  ]) assert.throws(() => model.submit(state, true));
  assert.throws(() => model.submit(ready, false));
  assert.equal(model.submit(ready, true).status, 'Recebida');
});

test('a revisão bloqueia exemplos de contato e mantém textos de proposta válidos', () => {
  for (const value of ['Contato: [telefone fictício]', 'nome@exemplo.test', 'Telefone: (61) 99999-9999', 'CPF: 123.456.789-09']) {
    assert.ok(model.validate(model.sample.title, value));
  }
  assert.equal(model.validate(model.sample.title, model.sample.description), '');
});

test('a segunda confirmação preserva o mesmo registro, sem duplicar ou regredir o estado', () => {
  const state = model.prepare('published');
  assert.deepEqual(model.submit(state, true), state);
  assert.equal(state.status, 'Publicada para receber apoios');
});

test('retorno incerto preserva a ideia consultável e reinício limpa o contexto anterior', () => {
  const uncertain = model.prepare('uncertain');
  assert.equal(uncertain.submitted, true);
  assert.equal(uncertain.status, 'Recebida');
  assert.equal(uncertain.title, model.sample.title);
  const fresh = model.create();
  assert.equal(fresh.submitted, false);
  assert.equal(fresh.title, '');
  assert.equal(fresh.description, '');
});

// Exercises the actual page controller without requiring a browser installation.
function harness() {
  const events = {};
  const elements = {};
  for (const name of ['main', '.lab', '#lab-message', '#title', '#description', '#form-error', '#checked', '#confirm-error', '#title-count', '#description-count', '#nav-start', '#nav-ideas']) {
    elements[name] = {
      innerHTML: '', textContent: '', value: '', checked: false,
      addEventListener: (type, callback) => { events[name + ':' + type] = callback; },
      id: name.slice(1), attributes: {},
      setAttribute(name, value) { this.attributes[name] = value; },
      removeAttribute(name) { delete this.attributes[name]; },
      focus() {},
    };
  }
  const callbacks = {};
  let hash = '#inicio';
  const location = {};
  Object.defineProperty(location, 'hash', { get: () => hash, set: value => { hash = value.startsWith('#') ? value : '#' + value; callbacks.hashchange(); } });
  const context = { window: { IdeaModel: model, scrollTo() {}, addEventListener: (name, callback) => { callbacks[name] = callback; } }, document: { querySelector: name => elements[name] }, location };
  vm.runInNewContext(fs.readFileSync(require.resolve('../docs/prototipos/caio/alta-fidelidade/app.js'), 'utf8'), context);
  const click = (owner, data) => events[owner + ':click']({ target: { closest: () => ({ dataset: data }) } });
  const submit = id => events['main:submit']({ preventDefault() {}, target: { id } });
  const input = (id, value) => { elements['#' + id].value = value; events['main:input']({ target: elements['#' + id] }); };
  return { elements, location, click, submit, input };
}

test('percurso principal conclui com rascunho limpo, sem acionar correção ou incidente', () => {
  const h = harness();
  h.location.hash = '#acesso';
  h.click('main', { action: 'authenticate' });
  assert.equal(h.location.hash, '#escrever');
  h.input('title', model.sample.title);
  h.input('description', model.sample.description);
  assert.equal(h.elements['#title-count'].textContent, model.sample.title.length + '/100');
  h.location.hash = '#orientacoes';
  assert.match(h.elements.main.innerHTML, /Voltar ao meu rascunho/);
  h.location.hash = '#escrever';
  h.submit('idea-form');
  assert.equal(h.location.hash, '#revisar');
  h.elements['#checked'].checked = true;
  h.submit('confirm-form');
  assert.equal(h.location.hash, '#recebida');
  h.location.hash = '#minhas';
  assert.match(h.elements.main.innerHTML, /Orientações claras nos serviços/);
  assert.equal(h.elements['#form-error'].innerHTML, '');
});

test('fluxo real da página bloqueia contato, permite correção e chega ao acompanhamento', () => {
  const h = harness();
  h.click('.lab', { lab: 'draft' });
  h.elements['#title'].value = model.sample.title;
  h.elements['#description'].value = model.sample.description + ' Contato: [telefone fictício]';
  h.submit('idea-form');
  assert.match(h.elements['#form-error'].innerHTML, /Retire dados pessoais/);
  assert.equal(h.location.hash, '#escrever');
  h.elements['#description'].value = model.sample.description;
  h.submit('idea-form');
  assert.equal(h.location.hash, '#revisar');
  h.elements['#checked'].checked = true;
  h.submit('confirm-form');
  assert.equal(h.location.hash, '#recebida');
  assert.match(h.elements.main.innerHTML, /DEMO-001/);
  h.location.hash = '#minhas';
  assert.match(h.elements.main.innerHTML, /Orientações claras nos serviços/);
  assert.match(h.elements.main.innerHTML, /<li class="current"><strong>Recebida/);
  h.click('.lab', { lab: 'reviewing' });
  assert.match(h.elements.main.innerHTML, /<li class="current"><strong>Em avaliação do conteúdo/);
  h.click('.lab', { lab: 'published' });
  assert.match(h.elements.main.innerHTML, /Publicada para receber apoios/);
  h.location.hash = '#revisar';
  assert.match(h.elements.main.innerHTML, /Recebemos sua ideia/);
});

test('texto digitado é apresentado como conteúdo, sem criar elementos HTML', () => {
  const h = harness();
  h.click('.lab', { lab: 'draft' });
  h.elements['#title'].value = '<img src=x onerror=alert(1)>';
  h.elements['#description'].value = 'Descrição válida para a avaliação.';
  h.submit('idea-form');
  assert.match(h.elements.main.innerHTML, /&lt;img src=x onerror=alert\(1\)&gt;/);
  assert.doesNotMatch(h.elements.main.innerHTML, /<img src=x/);
});
