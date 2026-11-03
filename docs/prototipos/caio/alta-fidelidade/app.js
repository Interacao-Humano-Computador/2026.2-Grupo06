/* AF-1.1: estado da sessão em memória; sem credenciais ou submissão real. */
"use strict";
const model = window.IdeaModel;
let state = model.create();
const main = document.querySelector("main");
const esc = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
const button = (label, action, secondary = false) => `<button type="button" class="btn${secondary ? " secondary" : ""}" data-action="${action}">${label}</button>`;
const steps = active => `<ol class="steps" aria-label="Etapas do envio">${["Acesso", "Escrever", "Revisar", "Recebimento"].map((label, i) => `<li class="${i === active ? "active" : i < active ? "completed" : ""}"${i === active ? ' aria-current="step"' : ""}><span class="step-number" aria-hidden="true">${i < active ? "✓" : i + 1}</span>${label}</li>`).join("")}</ol>`;
const aside = `<aside class="card aside"><p class="eyebrow">Para uma boa ideia</p><h2>Clareza em primeiro lugar.</h2><ol><li>Explique o problema que deseja resolver.</li><li>Descreva a mudança que você propõe.</li><li>Confira o texto e mantenha seus dados pessoais fora dele.</li></ol><hr><h3>Você confere antes de enviar</h3><p class="hint">Na próxima etapa, o texto completo aparece para uma última leitura.</p><a class="text-link" href="#orientacoes">Como funciona o envio →</a></aside>`;
const badge = status => `<span class="badge${status === "Publicada para receber apoios" ? " green" : status === "Arquivada" ? " gray" : ""}">${esc(status)}</span>`;

function go(page) {
  if (location.hash === "#" + page) render();
  else location.hash = page;
}

function updateCounters() {
  const title = document.querySelector("#title-count");
  const description = document.querySelector("#description-count");
  if (title) title.textContent = `${state.title.length}/100`;
  if (description) description.textContent = `${state.description.length}/1.000`;
}

function render() {
  let page = location.hash.slice(1) || "inicio";
  if (["escrever", "revisar"].includes(page) && state.submitted) page = "recebida";
  if (["escrever", "revisar"].includes(page) && !state.authenticated) page = "acesso";
  if (page === "revisar" && (!state.reviewed || model.validate(state.title, state.description))) page = "escrever";
  if (page === "recebida" && !state.submitted) page = "minhas";
  const crumb = `<nav class="crumb" aria-label="Caminho da página"><a href="#inicio">Início</a><span aria-hidden="true">/</span>Participação cidadã<span aria-hidden="true">/</span>Ideia legislativa</nav>`;
  let content;

  if (page === "inicio") {
    content = `<div class="layout"><section class="card"><div class="card-heading"><p class="eyebrow">Participação cidadã</p><h1>Ideia legislativa</h1><p class="lead">Envie uma proposta e acompanhe sua ideia.</p></div><p>Apresente uma sugestão para criar ou alterar leis. Antes de enviar, você poderá conferir o texto completo.</p><div class="actions"><a class="btn" href="#acesso">Enviar ideia legislativa <span aria-hidden="true">→</span></a><a class="btn secondary" href="#minhas">Minhas ideias</a></div><div class="notice"><strong>Depois do envio</strong><p>A ideia passa por avaliação do conteúdo antes de ser publicada para receber apoios. Você pode consultar o estado neste mesmo espaço.</p></div></section><aside class="card aside"><p class="eyebrow">Como participar</p><h2>Envio e acompanhamento</h2><ol><li>Descreva a mudança que deseja propor.</li><li>Confira o texto antes de confirmar.</li><li>Acompanhe o recebimento e as atualizações.</li></ol><hr><a class="text-link" href="#orientacoes">Orientações sobre o envio →</a></aside></div>`;
  } else if (page === "acesso") {
    content = `${steps(0)}<div class="layout"><section class="card"><div class="card-heading"><p class="eyebrow">Comece por aqui</p><h1>Antes de escrever</h1><p class="lead">Um acesso, e você continua direto para sua ideia.</p></div><p>A ideia será avaliada antes de aparecer para receber apoios. Confira se já existe uma proposta semelhante e escreva a mudança que deseja propor.</p><div class="notice"><strong>Acesso de demonstração</strong><p>Este botão representa a entrada na sua conta. Não é necessário informar senha ou documento.</p></div><div class="actions">${button(state.authenticated ? "Continuar para escrever →" : "Continuar com acesso de demonstração →", "authenticate")}</div><p class="hint" style="margin-top:18px">Depois do acesso, você retorna ao formulário.</p></section>${aside}</div>`;
  } else if (page === "escrever") {
    content = `${steps(1)}<div class="layout"><section class="card"><div class="card-heading"><p class="eyebrow">Rascunho · ainda não enviado</p><h1>Qual é a sua ideia?</h1><p class="lead">Uma descrição simples ajuda a entender sua proposta.</p></div><form id="idea-form" novalidate><div id="form-error" role="alert"></div><div class="field"><div class="field-label"><label for="title">Título da ideia</label><small>Obrigatório</small></div><input type="text" id="title" maxlength="100" value="${esc(state.title)}" required aria-describedby="title-help title-count"><div class="field-help"><span id="title-help">Resuma a mudança em uma frase.</span><span id="title-count" class="counter">${state.title.length}/100</span></div></div><div class="field"><div class="field-label"><label for="description">Descrição da ideia</label><small>Obrigatório</small></div><textarea id="description" maxlength="1000" required aria-describedby="description-help description-count">${esc(state.description)}</textarea><div class="field-help"><span id="description-help">Explique a proposta sem incluir telefone, CPF, endereço ou e-mail.</span><span id="description-count" class="counter">${state.description.length}/1.000</span></div></div><div class="form-bottom"><p class="hint">Você poderá conferir tudo na próxima etapa.</p><div class="actions"><button class="btn" type="submit">Revisar ideia <span aria-hidden="true">→</span></button></div></div></form></section>${aside}</div>`;
  } else if (page === "revisar") {
    content = `${steps(2)}<div class="layout"><section class="card"><div class="card-heading"><p class="eyebrow">Última conferência</p><h1>Está tudo certo?</h1><p class="lead">Este é o texto que será enviado.</p></div><div class="review-block"><p class="eyebrow">Sua ideia</p><h2>${esc(state.title)}</h2><p class="review-text">${esc(state.description)}</p></div><div class="notice warning"><strong>Depois de enviar, este texto não poderá ser editado.</strong><p>Confira se ele está completo e sem dados pessoais.</p></div><form id="confirm-form"><label class="check"><input type="checkbox" id="checked" required>Conferi o texto e entendi que não poderei editá-lo após o envio.</label><p id="confirm-error" role="alert"></p><div class="actions"><button class="btn" type="submit">Confirmar envio <span aria-hidden="true">→</span></button>${button("Voltar e corrigir", "edit", true)}</div></form></section><aside class="card aside"><p class="eyebrow">O que acontece depois</p><h2>Primeiro, o recebimento.</h2><p>Você verá uma confirmação com a identificação da ideia e o acesso ao acompanhamento.</p><p class="hint">O conteúdo será avaliado antes da publicação. Enviar uma ideia não significa aprovar uma lei.</p></aside></div>`;
  } else if (page === "recebida") {
    content = `${steps(3)}<div class="layout"><section class="card receipt"><div class="receipt-icon" aria-hidden="true">✓</div><p class="eyebrow">Envio concluído</p><h1>Recebemos sua ideia.</h1><p class="lead">Tudo certo com o recebimento. Você não precisa enviá-la novamente.</p><dl class="metadata"><div class="full"><dt>Ideia enviada</dt><dd>${esc(state.title)}</dd></div><div><dt>Identificador de exemplo</dt><dd><code>DEMO-001</code></dd></div><div><dt>Estado atual</dt><dd>${badge(state.status)}</dd></div><div class="full"><dt>Data do recebimento</dt><dd>${esc(state.date)}</dd></div></dl><div class="actions"><a class="btn" href="#minhas">Acompanhar esta ideia <span aria-hidden="true">→</span></a></div></section><aside class="card next-step"><p class="eyebrow">Próximo passo</p><h2>Acompanhar a avaliação do conteúdo.</h2><p>Antes de ser publicada para apoios, sua ideia será avaliada. As atualizações aparecem no mesmo lugar.</p><p class="note">Recebimento não significa publicação nem aprovação de uma lei.</p></aside></div>`;
  } else if (page === "incerto") {
    content = `<div class="layout"><section class="card"><p class="eyebrow">Verifique antes de repetir</p><h1>Vamos conferir o recebimento?</h1><p class="lead">Não foi possível confirmar o retorno. Isso não significa que o envio falhou.</p><div class="notice warning"><p>Consulte suas ideias para verificar se a proposta já foi recebida antes de tentar novamente.</p></div><div class="actions"><a class="btn" href="#minhas">Consultar minhas ideias →</a></div></section><aside class="card aside"><h2>Procure a mesma ideia</h2><p class="hint">O título e a identificação ajudam a reconhecer o registro do envio.</p></aside></div>`;
  } else if (page === "minhas") {
    const heading = `<div class="page-heading"><div><p class="eyebrow">Seu acompanhamento</p><h1>Minhas ideias</h1><p class="lead">O estado e o próximo passo, no mesmo lugar.</p></div></div>`;
    if (!state.submitted) {
      content = heading + `<section class="empty"><div class="receipt-icon" aria-hidden="true">↗</div><h2>Sua primeira ideia começa aqui.</h2><p>Depois do envio, você poderá acompanhar as atualizações neste espaço.</p><a class="btn" href="#acesso">Escrever uma ideia →</a></section>`;
    } else {
      const published = state.status === "Publicada para receber apoios";
      const archived = state.status === "Arquivada";
      const reviewing = state.status === "Em avaliação";
      const statusTitle = published ? "Sua ideia está publicada para receber apoios." : archived ? "O conteúdo foi arquivado." : reviewing ? "O conteúdo está em avaliação." : "Sua ideia foi recebida.";
      const next = published ? "Acompanhe os apoios e as atualizações nesta página. A publicação não significa aprovação de uma lei." : archived ? "Leia o motivo de exemplo antes de preparar outra proposta: conteúdo fora do escopo de atuação do Senado." : reviewing ? "Aguarde a conclusão da avaliação do conteúdo. A atualização aparecerá neste mesmo espaço." : "Aguarde a avaliação do conteúdo antes da publicação. Não é necessário repetir o envio.";
      content = heading + `<div class="layout"><section class="card"><div class="idea-summary"><div><p class="hint">DEMO-001 · identificação de exemplo</p><h2>${esc(state.title)}</h2></div>${badge(state.status)}</div><div class="status-explainer"><p class="eyebrow">Próximo passo</p><h3>${statusTitle}</h3><p>${next}</p></div><ol class="timeline" aria-label="Etapas da ideia"><li class="${published || archived || reviewing ? "done" : "current"}"><strong>Recebida</strong><p>O envio foi registrado.</p></li><li class="${published || archived ? "done" : reviewing ? "current" : ""}"><strong>Em avaliação do conteúdo</strong><p>Conferência antes da publicação.</p></li><li class="${published || archived ? "current" : ""}"><strong>${archived ? "Arquivada" : "Publicada para receber apoios"}</strong><p>${archived ? "Confira o motivo informado." : "Etapa posterior à avaliação."}</p></li></ol><details class="text-details"><summary>Ler o texto enviado</summary><p class="review-text">${esc(state.description)}</p></details></section><aside class="card aside"><p class="eyebrow">Entenda os estados</p><h2>Cada etapa tem seu significado.</h2><p>Recebida confirma o envio. Publicada indica que a ideia está disponível para apoios.</p><p class="hint">A publicação não equivale à aprovação de uma lei. A avaliação do conteúdo também pode resultar em arquivamento.</p><hr><a class="text-link" href="#orientacoes">Como funciona o envio →</a></aside></div>`;
    }
  } else if (page === "orientacoes") {
    content = `<div class="layout"><section class="card"><div class="card-heading"><p class="eyebrow">Antes e depois do envio</p><h1>Como funciona</h1><p class="lead">Da sua proposta ao acompanhamento.</p></div><ol class="info-list"><li><strong>Escreva e confira.</strong> Explique a mudança que propõe, retire dados pessoais e leia o texto completo antes de confirmar.</li><li><strong>Reconheça o recebimento.</strong> A confirmação identifica a ideia e informa como acompanhar o envio. O texto enviado não poderá ser editado.</li><li><strong>Acompanhe a avaliação.</strong> Antes da publicação, o conteúdo será avaliado. A avaliação não acontece instantaneamente.</li><li><strong>Entenda a atualização.</strong> Publicação permite receber apoios; isso não significa aprovação de lei. O conteúdo também pode ser arquivado.</li></ol><div class="actions"><a class="btn" href="${state.authenticated && !state.submitted ? "#escrever" : state.submitted ? "#minhas" : "#acesso"}">${state.submitted ? "Acompanhar minha ideia" : state.authenticated ? "Voltar ao meu rascunho" : "Começar minha ideia"} →</a></div></section>${aside.replace('<a class="text-link" href="#orientacoes">Como funciona o envio →</a>', '')}</div>`;
  } else {
    go("inicio"); return;
  }

  main.innerHTML = crumb + content;
  updateCounters();
  for (const [id, active] of [["#nav-start", page !== "minhas"], ["#nav-ideas", page === "minhas"]]) {
    const nav = document.querySelector(id);
    if (nav) active ? nav.setAttribute("aria-current", "page") : nav.removeAttribute("aria-current");
  }
  main.focus({ preventScroll: true });
  window.scrollTo(0, 0);
  const titles = { inicio: "Ideia legislativa", acesso: "Antes de escrever", escrever: "Escrever ideia", revisar: "Revisar ideia", recebida: "Ideia recebida", minhas: "Minhas ideias", incerto: "Consultar recebimento", orientacoes: "Como funciona" };
  document.title = `${titles[page]} · Protótipo de Caio`;
}

main.addEventListener("click", event => {
  const element = event.target.closest("[data-action]");
  if (!element) return;
  if (element.dataset.action === "authenticate") { state.authenticated = true; go("escrever"); }
  if (element.dataset.action === "edit") { state.reviewed = false; go("escrever"); }
});

main.addEventListener("input", event => {
  if (event.target.id === "title") state.title = event.target.value;
  if (event.target.id === "description") state.description = event.target.value;
  if (["title", "description"].includes(event.target.id)) {
    state.reviewed = false;
    event.target.removeAttribute("aria-invalid");
    updateCounters();
  }
});

main.addEventListener("submit", event => {
  event.preventDefault();
  if (event.target.id === "idea-form") {
    state.title = document.querySelector("#title").value;
    state.description = document.querySelector("#description").value;
    const error = model.validate(state.title, state.description);
    if (error) {
      document.querySelector("#form-error").innerHTML = `<p class="notice error">${esc(error)}</p>`;
      const field = document.querySelector(!state.title.trim() || model.personalData(state.title) ? "#title" : "#description");
      field.setAttribute("aria-invalid", "true");
      field.focus();
      return;
    }
    state.reviewed = true; go("revisar");
  }
  if (event.target.id === "confirm-form") {
    try { state = model.submit(state, document.querySelector("#checked").checked); go("recebida"); }
    catch (error) { document.querySelector("#confirm-error").textContent = error.message; }
  }
});

document.querySelector(".lab").addEventListener("click", event => {
  const element = event.target.closest("[data-lab]");
  if (!element) return;
  const kind = element.dataset.lab;
  state = kind === "reset" ? model.create() : model.prepare(kind);
  const target = { clean: "escrever", draft: "escrever", receipt: "recebida", uncertain: "incerto", reviewing: "minhas", published: "minhas", archived: "minhas", reset: "inicio" }[kind];
  document.querySelector("#lab-message").textContent = "Contexto preparado. Feche estes controles antes de iniciar a tarefa.";
  go(target);
});

window.addEventListener("hashchange", render);
render();
