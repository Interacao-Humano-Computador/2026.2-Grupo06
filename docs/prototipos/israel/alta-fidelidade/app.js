// app.js — comportamento do protótipo.
// Lê os textos e dados do model.js (objeto Model), guarda o estado da reserva
// e desenha a tela atual dentro de <main id="app">. Não há dependências externas.

(() => {
  'use strict';

  const M = Model;
  const C = M.comum;

  /* =====================================================================
     Estado
     ===================================================================== */

  function novoEstado() {
    return {
      tela: 'inicio',            // 'inicio' | 'programa' | 'agendar'
      passo: 1,                  // 1..5 (só vale quando tela === 'agendar')
      modo: 'grupo',             // 'grupo' | 'individual'
      grupo: M.modalidade.grupoPadrao,
      diaClicado: null,          // dia que o usuário tocou por último
      dia: null,                 // dia escolhido (só dias com vagas)
      horario: null,             // "09:00"
      resp: { nome: '', cpf: '', email: '', telefone: '' },
      exemploUsado: false,
      apoios: [],                // ids de M.visitantes.apoios
      edicao: null,              // { passos: [1, 2], i: 0 } quando vindo de "Editar"
      corrigindo: false,         // painel "Corrigir telefone" aberto
      valorCorrigir: '',
      erroData: '',
      erroNome: '',
      erroCorrigir: '',
      erroRevisao: '',
      enviando: false,
      localizador: null,
      cancelado: false,
      modal: null,               // 'comprovante' | 'opcoes' | 'cancelado'
      focoPendente: null
    };
  }

  let state = novoEstado();
  let timerEnvio = null;
  let timerAviso = null;

  /* =====================================================================
     Utilidades
     ===================================================================== */

  const ICONES = {
    seta: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    esq: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    lupa: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    alerta: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.5v.5"/></svg>',
    vestimenta: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3L3 6l2.5 4L8 9v12h8V9l2.5 1L21 6l-5-3a4 4 0 01-8 0z"/></svg>',
    documento: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6.5 16c.6-1.6 4.4-1.6 5 0M14 10h4M14 14h4"/></svg>',
    relogio: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    acessibilidade: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="4.5" r="1.8"/><path d="M6 8.5l6 1.2 6-1.2M12 9.7V14l-3 6.5M12 14l3 6.5"/></svg>'
  };

  // Cria elementos sem usar innerHTML com texto do usuário.
  function h(tag, props, ...filhos) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(props || {})) {
      if (v === false || v == null) continue;
      if (k === 'class') el.className = v;
      else if (k === 'foco') el.dataset.foco = v;
      else if (k.startsWith('on')) el.addEventListener(k.slice(2).toLowerCase(), v);
      else if (v === true) el.setAttribute(k, '');
      else el.setAttribute(k, v);
    }
    filhos.flat(Infinity).forEach(f => {
      if (f == null || f === false) return;
      el.append(f.nodeType ? f : document.createTextNode(String(f)));
    });
    return el;
  }

  function ico(nome) {
    const s = h('span', { class: 'ic' });
    s.innerHTML = ICONES[nome]; // só SVGs fixos deste arquivo
    return s;
  }

  const pad = n => String(n).padStart(2, '0');
  const normalizar = t => (t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const total = () => (state.modo === 'individual' ? 1 : state.grupo);
  const pessoasTxt = n => `${n} ${n === 1 ? 'pessoa' : 'pessoas'}`;
  const dataTxt = d => (d ? `${pad(d)}/${pad(M.calendario.mesNumero)}/${M.calendario.ano}` : '');
  const podeNavegar = () => !state.enviando;

  function situacaoDia(d) { return M.calendario.situacao[d] || 'indisponivel'; }
  function diaDaSemana(d) {
    const c = M.calendario;
    return c.nomesDiasSemana[(c.primeiroDiaDaSemana + d - 1) % 7];
  }

  function statusTelefone(t) {
    const d = (t || '').replace(/\D/g, '');
    if (!d) return 'vazio';
    if (d.length === 11) return 'ok';
    if (d.length === 10 && d[2] !== '9') return 'ok'; // fixo
    return 'incompleto';
  }
  function formatarTelefone(t) {
    const d = (t || '').replace(/\D/g, '');
    if (d.length === 11) return `(${d.slice(0, 2)}) ${d[2]} ${d.slice(3, 7)}-${d.slice(7)}`;
    if (d.length === 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    return t;
  }

  function horaMenos30(hora) {
    const [hh, mm] = hora.split(':').map(Number);
    const t = (((hh * 60 + mm - 30) % 1440) + 1440) % 1440;
    return `${pad(Math.floor(t / 60))}:${pad(t % 60)}`;
  }

  function gerarLocalizador() {
    const c = M.calendario, k = M.confirmacao;
    return `${k.prefixoLocalizador}-${c.ano}-${pad(c.mesNumero)}${pad(state.dia)}`;
  }

  // Se mudou o tamanho do grupo e o horário escolhido já não comporta, desfaz a escolha.
  function sanearHorario() {
    if (!state.dia || !state.horario) return;
    const lista = M.calendario.horarios[state.dia] || [];
    const hh = lista.find(x => x.hora === state.horario);
    if (!hh || hh.vagas === 0 || hh.vagas < total()) state.horario = null;
  }

  function focar(id) {
    const el = document.querySelector(`[data-foco="${id}"]`);
    if (el) el.focus({ preventScroll: false });
  }

  function mostrarAviso(msg) {
    const el = document.getElementById('aviso');
    el.textContent = msg;
    el.classList.add('mostra');
    clearTimeout(timerAviso);
    timerAviso = setTimeout(() => el.classList.remove('mostra'), 3000);
  }

  /* =====================================================================
     Cabeçalho (banner, marca, busca, menu) e rodapé
     ===================================================================== */

  function montarTopo() {
    const m = M.marca;

    const marca = h('a', {
      href: '#', class: 'marca',
      'aria-label': `${m.nome}, ${m.subtitulo}. Ir para o início`,
      onClick: e => { e.preventDefault(); irInicio(); }
    },
      m.logo && m.logo.src
        ? h('img', { class: 'marca-logo', src: m.logo.src, alt: m.logo.alt })
        : h('span', { class: 'marca-nome' }, m.nome),
      h('span', { class: 'marca-sub' }, m.subtitulo));

    document.getElementById('topo').replaceChildren(
      h('div', { class: 'banner' },
        h('div', { class: 'envolve banner-in' },
          h('span', { class: 'banner-esq' }, M.banner.esquerda),
          h('span', { class: 'banner-dir' }, M.banner.direita))),
      h('header', { class: 'cabecalho' },
        h('div', { class: 'envolve cab-in' }, marca, montarBusca())),
      h('nav', { class: 'menu', 'aria-label': C.ariaMenu },
        h('div', { class: 'envolve menu-in' },
          h('ul', {}, M.menu.map(t =>
            h('li', {}, h('button', { type: 'button', class: 'menu-link', onClick: () => mostrarAviso(M.avisoForaDoEscopo) }, t)))),
          h('button', { type: 'button', class: 'menu-link acess', onClick: () => mostrarAviso(M.avisoForaDoEscopo) }, M.menuAcessibilidade))));

    const r = M.rodape;
    document.getElementById('rodape').replaceChildren(
      h('div', { class: 'envolve rodape-in' },
        h('div', { class: 'rodape-esq' }, r.esquerda.map(t => h('span', {}, t))),
        h('span', {}, r.direita)));
  }

  function montarBusca() {
    const campo = h('input', {
      id: 'campo-busca', type: 'search', placeholder: M.busca.rotulo, 'aria-label': M.busca.rotulo,
      autocomplete: 'off', 'aria-controls': 'caixa-sugestoes', 'aria-expanded': 'false'
    });
    const itens = M.busca.sugestoes.map(s =>
      h('li', {}, h('button', { type: 'button', onClick: () => escolherSugestao(s) }, s)));
    const caixa = h('div', { id: 'caixa-sugestoes', class: 'sugestoes', hidden: true },
      h('p', { class: 'sugestoes-tit' }, M.busca.tituloSugestoes),
      h('ul', {}, itens));
    const form = h('form', { class: 'busca-form', role: 'search', onSubmit: e => { e.preventDefault(); executarBusca(campo.value); } },
      campo,
      h('button', { type: 'submit', class: 'busca-btn', 'aria-label': C.buscar }, ico('lupa')));
    const raiz = h('div', { class: 'busca' }, form, caixa);

    function abrir(aberto) {
      caixa.hidden = !aberto;
      campo.setAttribute('aria-expanded', String(aberto));
    }
    function filtrar() {
      const q = normalizar(campo.value);
      let visiveis = 0;
      itens.forEach(li => {
        const mostra = !q || normalizar(li.textContent).includes(q);
        li.hidden = !mostra;
        if (mostra) visiveis++;
      });
      abrir(visiveis > 0);
    }
    function botoesVisiveis() {
      return itens.filter(li => !li.hidden).map(li => li.firstChild);
    }

    campo.addEventListener('focus', filtrar);
    campo.addEventListener('input', filtrar);
    campo.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { const b = botoesVisiveis()[0]; if (b) { e.preventDefault(); b.focus(); } }
      if (e.key === 'Escape') abrir(false);
    });
    caixa.addEventListener('keydown', e => {
      const bs = botoesVisiveis(); const i = bs.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); (bs[i + 1] || bs[0]).focus(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); if (i <= 0) campo.focus(); else bs[i - 1].focus(); }
      if (e.key === 'Escape') { abrir(false); campo.focus(); }
    });
    document.addEventListener('click', e => { if (!raiz.contains(e.target)) abrir(false); });

    function escolherSugestao(texto) { campo.value = texto; abrir(false); executarBusca(texto); }
    function executarBusca(q) {
      q = (q || '').trim();
      if (!q) { campo.focus(); return; }
      abrir(false);
      if (normalizar(q).includes('visit')) { campo.value = ''; irPrograma(); }
      else mostrarAviso(M.busca.aviso);
    }
    return raiz;
  }

  /* =====================================================================
     Peças reutilizáveis das telas
     ===================================================================== */

  function migalhas(itens) {
    return h('nav', { 'aria-label': C.ariaMigalhas },
      h('ol', { class: 'migalhas' }, itens.map((it, i) => {
        const ultimo = i === itens.length - 1;
        if (ultimo) return h('li', {}, h('span', { 'aria-current': 'page' }, it.rotulo));
        return h('li', {}, h('button', { type: 'button', onClick: it.ir }, it.rotulo));
      })));
  }

  function migalhasAgendar() {
    return migalhas([
      { rotulo: 'Início', ir: irInicio },
      { rotulo: 'Visitação', ir: irPrograma },
      { rotulo: 'Agendamento' }
    ]);
  }

  function barraDePassos() {
    const clicavel = n => n < state.passo && state.passo < 5 && !state.edicao && !state.enviando;
    return h('nav', { 'aria-label': C.ariaProgresso },
      h('ol', { class: 'passos' }, M.passos.map((p, i) => {
        const n = i + 1;
        const feito = n < state.passo, atual = n === state.passo;
        const rotulo = h('span', { class: 'passo-rot' }, p.rotulo);
        let conteudo;
        if (feito) conteudo = [ico('check'), rotulo];
        else conteudo = [h('span', { class: 'passo-num' }, pad(n)), rotulo];
        const corpo = clicavel(n)
          ? h('button', { type: 'button', onClick: () => irParaPasso(n) }, conteudo)
          : h('span', {}, conteudo);
        return h('li', { class: 'passo' + (feito ? ' feito' : '') + (atual ? ' atual' : ''), 'aria-current': atual ? 'step' : false }, corpo);
      })));
  }

  function cabecalhoPasso(n, comSelo) {
    const p = M.passos[n - 1];
    const titulo = h('h1', { class: 'titulo', tabindex: '-1', 'data-titulo': '' }, p.titulo);
    return [
      h('p', { class: 'eyebrow' }, C.passoDe(n, 5)),
      comSelo ? h('div', { class: 'titulo-confirma' }, h('span', { class: 'selo' }, ico('check')), titulo) : titulo,
      h('p', { class: 'lead' }, p.subtitulo)
    ];
  }

  // Linha de botões Voltar / Avançar.
  function acoes({ rotuloAvancar, semSeta, desabilitado, ocupado }) {
    return h('div', { class: 'acoes' },
      h('button', { type: 'button', class: 'btn btn-sec', foco: 'voltar', disabled: ocupado, onClick: voltar }, ico('esq'), C.voltar),
      h('button', {
        type: 'button', class: 'btn btn-primario', foco: 'avancar',
        'aria-disabled': desabilitado ? 'true' : false, 'aria-busy': ocupado ? 'true' : false,
        onClick: () => { if (desabilitado || ocupado) return; (state.passo === 4 ? confirmar : avancar)(); }
      }, ocupado
        ? [h('span', { class: 'giro', 'aria-hidden': 'true' }), M.revisao.enviando]
        : [rotuloAvancar, semSeta ? null : ico('seta')]));
  }

  const rotuloAvancarPasso = () =>
    state.edicao && state.edicao.i === state.edicao.passos.length - 1 ? C.salvarEVoltar : C.avancar;

  function erroCampo(id, texto) {
    return h('p', { class: 'erro-campo', id }, ico('alerta'), h('span', {}, texto));
  }

  /* =====================================================================
     Telas
     ===================================================================== */

  function vistaAtual() {
    if (state.tela === 'inicio') return vistaInicio();
    if (state.tela === 'programa') return vistaPrograma();
    return vistaAgendar();
  }

  // ---- S01 · Início ----
  function vistaInicio() {
    const i = M.inicio, d = i.destaque;
    return h('div', { class: 'pagina' },
      h('p', { class: 'eyebrow' }, i.chamada),
      h('h1', { class: 'titulo', tabindex: '-1', 'data-titulo': '' }, i.titulo),
      h('section', { class: 'heroi', 'aria-label': d.titulo },
        h('div', { class: 'heroi-esq' },
          h('p', { class: 'sobre' }, d.sobretitulo),
          h('h2', {}, d.titulo),
          h('p', { class: 'texto' }, d.texto),
          h('button', { type: 'button', class: 'btn btn-amarelo', foco: 'agendar', onClick: irPrograma }, d.botao, ico('seta')),
          h('p', { class: 'detalhes' }, d.detalhes.map(t => h('span', {}, t)))),
        h('div', { class: 'painel-escuro' },
          h('p', { class: 'painel-titulo' }, d.painelTitulo),
          h('div', { class: 'barra' }),
          d.painelTexto.map(t => h('p', { class: 'painel-texto' }, t)))),
      h('h2', { class: 'secao-tit' }, i.noticiasTitulo),
      h('p', { class: 'secao-sub' }, i.noticiasNota),
      h('div', { class: 'noticias' }, M.noticias.map(n =>
        h('article', { class: 'noticia' },
          h('p', { class: 'cat' }, n.categoria),
          h('h3', {}, n.titulo),
          h('p', { class: 'rodape-card' }, n.rodape)))));
  }

  // ---- S02 · Programa de Visitação ----
  function vistaPrograma() {
    const p = M.programa, l = p.lateral;
    return h('div', { class: 'pagina' },
      migalhas([{ rotulo: 'Início', ir: irInicio }, { rotulo: 'Visitação' }]),
      h('h1', { class: 'titulo', tabindex: '-1', 'data-titulo': '' }, p.titulo),
      h('p', { class: 'lead' }, p.subtitulo),
      h('div', { class: 'grade' },
        h('div', {},
          h('h2', { class: 'sub-tit' }, p.listaTitulo),
          p.itens.map(it =>
            h('div', { class: 'item-prog' },
              h('span', { class: 'icone' }, ico(it.icone)),
              h('div', {}, h('h3', {}, it.titulo), h('p', {}, it.texto)))),
          h('div', { class: 'acoes' },
            h('button', { type: 'button', class: 'link-voltar', onClick: irInicio }, ico('esq'), p.voltar))),
        h('div', {},
          h('aside', { class: 'lateral' },
            h('h2', {}, l.titulo),
            h('p', { class: 'rotulo' }, l.duracaoRotulo),
            h('p', { class: 'valor' }, l.duracao),
            h('p', { class: 'grande' }, l.entrada),
            l.local.map(t => h('p', { class: 'meta' }, t))),
          h('button', { type: 'button', class: 'btn btn-primario btn-largo', style: 'margin-top:24px', foco: 'iniciar', onClick: iniciarAgendamento }, p.botao, ico('seta')),
          h('div', { class: 'nota', style: 'margin-top:16px' }, p.notas.map(t => h('p', {}, t))))));
  }

  // ---- Agendamento: casca comum aos 5 passos ----
  function vistaAgendar() {
    const corpo = [vistaModalidade, vistaData, vistaVisitantes, vistaRevisao, vistaConfirmacao][state.passo - 1]();
    return h('div', { class: 'pagina' }, migalhasAgendar(), barraDePassos(), corpo);
  }

  // ---- Passo 1 · Modalidade ----
  function vistaModalidade() {
    const mm = M.modalidade;
    const grupo = state.modo === 'grupo';
    const bloqueado = !grupo && !mm.permitirIndividual;
    const noMin = !grupo || state.grupo <= mm.grupoMin;
    const noMax = !grupo || state.grupo >= mm.grupoMax;

    const opcoes = h('div', { class: 'opcoes', role: 'radiogroup', 'aria-label': mm.tipoTitulo },
      mm.opcoes.map(o => {
        const sel = state.modo === o.valor;
        return h('button', {
          type: 'button', class: 'opcao' + (sel ? ' sel' : ''), role: 'radio', 'aria-checked': String(sel),
          foco: 'modo-' + o.valor, onClick: () => escolherModo(o.valor)
        },
          h('span', { class: 'opcao-topo' }, h('span', { class: 'radio' + (sel ? ' on' : ''), 'aria-hidden': 'true' }), o.rotulo),
          h('span', { class: 'opcao-desc' }, o.descricao));
      }));

    const contador = h('div', { class: 'contador' },
      h('button', { type: 'button', class: 'btn-qtd', 'aria-label': C.diminuir, 'aria-disabled': noMin ? 'true' : false, foco: 'menos', onClick: () => mudarPessoas(-1) }, '−'),
      h('output', { class: 'qtd', 'aria-live': 'polite' }, String(total())),
      h('button', { type: 'button', class: 'btn-qtd', 'aria-label': C.aumentar, 'aria-disabled': noMax ? 'true' : false, foco: 'mais', onClick: () => mudarPessoas(1) }, '+'),
      h('span', { class: 'qtd-sufixo' }, mm.sufixo));

    const textoLateral = grupo ? mm.lateralGrupo(state.grupo)
      : (mm.permitirIndividual ? mm.lateralIndividualLivre : mm.lateralIndividual);

    return [
      ...cabecalhoPasso(1),
      h('div', { class: 'grade' },
        h('section', { class: 'cartao' },
          h('h2', {}, mm.tipoTitulo), opcoes,
          h('h3', { class: 'grupo-tit' }, mm.quantidadeTitulo),
          h('p', { class: 'nota' }, mm.quantidadeAjuda),
          contador),
        h('aside', { class: 'lateral' }, h('h2', {}, mm.lateralTitulo), textoLateral.map(t => h('p', {}, t)))),
      acoes({ rotuloAvancar: bloqueado ? mm.avancarIndividual : rotuloAvancarPasso(), semSeta: bloqueado, desabilitado: bloqueado })
    ];
  }

  // ---- Passo 2 · Data e horário ----
  function vistaData() {
    const c = M.calendario;

    const celulas = [];
    for (let i = 0; i < c.primeiroDiaDaSemana; i++) celulas.push(h('span', { class: 'dia vazio', 'aria-hidden': 'true' }));
    for (let d = 1; d <= c.diasNoMes; d++) {
      const s = situacaoDia(d);
      const sel = state.diaClicado === d;
      celulas.push(h('button', {
        type: 'button', class: `dia ${s}` + (sel ? ' sel' : ''), 'aria-pressed': String(sel), foco: 'dia-' + d,
        'aria-label': `${diaDaSemana(d)}, ${d} de ${c.nomeMes} de ${c.ano}: ${c.legenda[s]}`,
        onClick: () => escolherDia(d)
      }, h('span', { class: 'dia-num' }, String(d)), h('span', { class: 'dia-simbolo', 'aria-hidden': 'true' }, c.simbolos[s])));
    }

    const calendario = h('section', { class: 'cartao', 'aria-label': c.mes },
      h('div', { class: 'cal-cab' }, h('h2', {}, c.mes), h('span', { class: 'nota' }, c.nota)),
      h('div', { class: 'cal-semana', 'aria-hidden': 'true' }, c.diasSemana.map(t => h('span', {}, t))),
      h('div', { class: 'cal-grade' }, celulas),
      h('div', { class: 'legenda' }, ['vagas', 'lotado', 'indisponivel'].map(s =>
        h('span', { class: s }, h('b', { 'aria-hidden': 'true' }, c.simbolos[s]), c.legenda[s]))));

    return [
      ...cabecalhoPasso(2),
      h('div', { class: 'grade cal' }, calendario, h('div', {}, painelDia(), state.erroData && h('div', { class: 'alerta erro alerta-baixo', role: 'alert' }, state.erroData))),
      acoes({ rotuloAvancar: rotuloAvancarPasso() })
    ];
  }

  function painelDia() {
    const c = M.calendario;
    const d = state.diaClicado;
    if (!d) {
      return h('section', { class: 'cartao' }, h('h2', {}, c.painelTitulo), h('p', { class: 'nota nota-grande' }, c.painelTexto));
    }
    const s = situacaoDia(d);
    if (s !== 'vagas') {
      return h('section', { class: 'painel-alerta', role: 'alert' },
        h('h2', {}, h('span', { 'aria-hidden': 'true' }, '! '), s === 'lotado' ? c.alertaLotadoTitulo : c.alertaIndisponivelTitulo),
        h('p', {}, s === 'lotado' ? c.alertaLotado : c.alertaIndisponivel));
    }
    const tot = total();
    return h('section', { class: 'cartao' },
      h('h2', {}, c.tituloDia(d, diaDaSemana(d))),
      h('p', { class: 'nota nota-grande' }, c.horariosTitulo),
      h('div', { role: 'radiogroup', 'aria-label': c.horariosTitulo },
        (c.horarios[d] || []).map(hh => {
          const indisp = hh.vagas === 0 || hh.vagas < tot;
          const sel = state.dia === d && state.horario === hh.hora;
          return h('button', {
            type: 'button', class: 'horario' + (sel ? ' sel' : ''), role: 'radio', 'aria-checked': String(sel),
            'aria-disabled': indisp ? 'true' : false, foco: 'hora-' + hh.hora.replace(':', ''),
            onClick: () => { if (!indisp) escolherHorario(hh.hora); }
          }, c.rotuloHorario(hh, tot));
        })));
  }

  // ---- Passo 3 · Visitantes ----
  function vistaVisitantes() {
    const v = M.visitantes, f = v.campos;
    const campo = (chave, tipo, extra) => {
      const invalido = chave === 'nome' && state.erroNome;
      return h('div', { class: 'campo' },
        h('label', { for: 'campo-' + chave }, f[chave].rotulo),
        h('input', Object.assign({
          id: 'campo-' + chave, type: tipo, value: state.resp[chave], placeholder: f[chave].placeholder,
          autocomplete: 'off', foco: 'campo-' + chave,
          'aria-invalid': invalido ? 'true' : false, 'aria-describedby': invalido ? 'erro-nome' : false,
          'aria-required': chave === 'nome' ? 'true' : false,
          onInput: e => { state.resp[chave] = e.target.value; if (chave === 'nome' && state.erroNome) limparErroNome(); }
        }, extra || {})));
    };

    const acompanhantes = Math.max(total() - 1, 0);
    const nomes = v.nomesAcompanhantes.slice(0, acompanhantes);

    const esquerda = h('div', { class: 'pilha' },
      h('section', { class: 'cartao' },
        h('h2', {}, v.responsavelTitulo),
        campo('nome', 'text', { onFocus: preencherExemplo }),
        h('div', { class: 'linha3' },
          campo('cpf', 'text', { inputmode: 'numeric' }),
          campo('email', 'email', { inputmode: 'email' }),
          campo('telefone', 'tel', { inputmode: 'tel' }))),
      h('section', { class: 'acomp' },
        h('h2', {}, v.acompanhantesTitulo),
        nomes.length
          ? [h('p', { class: 'nomes' }, nomes.map(n => h('span', {}, n))), h('p', { class: 'nota' }, v.acompanhantesNota(total()))]
          : h('p', { class: 'nomes' }, v.semAcompanhantes)),
      state.erroNome && h('div', { class: 'alerta erro alerta-baixo', id: 'erro-nome', role: 'alert' }, state.erroNome));

    const direita = h('div', {},
      h('aside', { class: 'cartao' },
        h('h2', {}, v.acessibilidadeTitulo),
        h('p', { class: 'nota' }, v.acessibilidadeAjuda),
        v.apoios.map(a =>
          h('label', { class: 'check' },
            h('input', { type: 'checkbox', checked: state.apoios.includes(a.id), onChange: e => alternarApoio(a.id, e.target.checked) }),
            h('span', {}, a.rotulo))),
        h('p', { class: 'nota nota-pequena' }, v.acessibilidadeRodape)),
      h('p', { class: 'nota', style: 'margin-top:28px' }, v.notaObrigatorio));

    return [
      ...cabecalhoPasso(3),
      h('div', { class: 'grade' }, esquerda, direita),
      acoes({ rotuloAvancar: rotuloAvancarPasso() })
    ];
  }

  // ---- Passo 4 · Revisão ----
  function vistaRevisao() {
    const r = M.revisao, resp = state.resp;
    const tel = statusTelefone(resp.telefone);

    const bloco = (id, titulo, corpo, aoEditar) =>
      h('section', { class: 'bloco', 'aria-label': titulo },
        h('div', { class: 'bloco-corpo' }, h('h2', {}, titulo), corpo),
        h('button', { type: 'button', class: 'btn btn-sec btn-editar', foco: 'editar-' + id, 'aria-label': `${r.editar} ${titulo.toLowerCase()}`, onClick: aoEditar }, r.editar));

    const n = total();
    const visita = bloco('visita', r.visita, [
      h('p', { class: 'dado' }, state.dia && state.horario ? `${dataTxt(state.dia)} · ${state.horario}` : M.calendario.erroSemSelecao),
      h('p', { class: 'sub' }, `${pessoasTxt(n)} · ${state.modo === 'grupo' ? 'Grupo' : 'Individual'}`)
    ], editarVisita);

    const responsavel = bloco('responsavel', r.responsavel, [
      h('p', { class: 'nome' }, resp.nome || '—'),
      h('p', { class: 'sub' }, `${resp.cpf ? 'CPF ' + resp.cpf : r.cpfNaoInformado} · ${resp.email || r.emailNaoInformado}`),
      h('p', { class: 'fone' + (tel === 'incompleto' ? ' erro' : '') }, resp.telefone || r.telefoneNaoInformado),
      tel === 'incompleto' && h('div', { class: 'alerta erro' }, ico('alerta'), r.telefoneIncompleto)
    ], editarResponsavel);

    const apoios = M.visitantes.apoios.filter(a => state.apoios.includes(a.id)).map(a => a.resumo);
    const acess = bloco('acessibilidade', r.acessibilidade,
      h('p', { class: 'sub sub-solto' }, apoios.length ? apoios.join(', ') : r.semApoio), editarAcessibilidade);

    const lateral = state.corrigindo
      ? h('aside', { class: 'lateral-borda' },
        h('h2', {}, r.corrigirTitulo),
        h('p', { class: 'nota nota-grande' }, r.corrigirTexto),
        h('div', { class: 'campo', style: 'margin-top:24px' },
          h('label', { for: 'campo-corrigir' }, r.corrigirRotulo),
          h('input', {
            id: 'campo-corrigir', type: 'tel', inputmode: 'tel', autocomplete: 'off', foco: 'fone-corrigir',
            placeholder: r.corrigirPlaceholder, value: state.valorCorrigir,
            'aria-invalid': state.erroCorrigir ? 'true' : false, 'aria-describedby': state.erroCorrigir ? 'erro-corrigir' : false,
            onInput: e => { state.valorCorrigir = e.target.value; },
            onKeydown: e => { if (e.key === 'Enter') { e.preventDefault(); usarTelefone(); } }
          }),
          state.erroCorrigir && erroCampo('erro-corrigir', state.erroCorrigir)),
        h('button', { type: 'button', class: 'btn btn-primario btn-largo', onClick: usarTelefone }, r.corrigirBotao),
        h('p', { style: 'margin-top:16px' }, h('button', { type: 'button', class: 'link-botao', onClick: editarOutrosDados }, r.outrosDados)))
      : h('aside', { class: 'lateral' }, h('h2', {}, r.lateralTitulo), r.lateralTexto.map(t => h('p', {}, t)));

    return [
      ...cabecalhoPasso(4),
      h('div', { class: 'grade' },
        h('div', {}, visita, responsavel, acess,
          state.erroRevisao && h('div', { class: 'alerta erro msg-confirmar', id: 'msg-confirmar', role: 'alert', tabindex: '-1', foco: 'msg-confirmar' }, ico('alerta'), state.erroRevisao)),
        lateral),
      acoes({ rotuloAvancar: r.confirmar, semSeta: true, ocupado: state.enviando })
    ];
  }

  // ---- Passo 5 · Confirmação ----
  function vistaConfirmacao() {
    const k = M.confirmacao;
    const cancel = state.cancelado;
    const n = total();
    const email = state.resp.email.trim();

    const titulo = h('h1', { class: 'titulo', tabindex: '-1', 'data-titulo': '' }, cancel ? k.cancelado.titulo : M.passos[4].titulo);

    const recibo = h('section', { class: 'recibo' },
      h('p', { class: 'et' }, k.rotuloLocalizador, cancel && h('span', { class: 'pilula' }, k.cancelado.etiqueta)),
      h('p', { class: 'codigo' + (cancel ? ' riscado' : '') }, state.localizador),
      h('div', { class: 'trio' }, [[k.data, dataTxt(state.dia)], [k.horario, state.horario], [k.visitantes, pessoasTxt(n)]].map(([rot, val]) =>
        h('div', {}, h('span', { class: 'et' }, rot), h('strong', {}, val)))),
      !cancel && h('div', { class: 'baixar' },
        h('button', { type: 'button', class: 'btn btn-primario', foco: 'baixar', onClick: () => abrirModal('comprovante') }, k.baixar),
        h('span', { class: 'nota' }, k.baixarNota)));

    const lateral = h('aside', { class: 'lateral' },
      h('h2', {}, k.lateralTitulo),
      h('ul', { class: 'lista-pontos' }, k.lateralItens.map(it =>
        h('li', {}, typeof it === 'function' ? it({ chegada: horaMenos30(state.horario) }) : it))));

    return [
      h('p', { class: 'eyebrow' }, C.passoDe(5, 5)),
      h('div', { class: 'titulo-confirma' }, h('span', { class: 'selo' + (cancel ? ' cancelado' : '') }, ico(cancel ? 'alerta' : 'check')), titulo),
      h('p', { class: 'lead lead-confirma' }, cancel ? k.cancelado.texto.join(' ') : M.passos[4].subtitulo),
      h('div', { class: 'grade' },
        h('div', {}, recibo, !cancel && h('div', { class: 'email-nota' }, (email ? k.emailNota(email) : k.emailNaoInformado).map(t => h('p', {}, t)))),
        lateral),
      h('div', { class: 'acoes' },
        cancel
          ? h('button', { type: 'button', class: 'btn btn-sec', onClick: irInicio }, k.inicio)
          : h('button', { type: 'button', class: 'btn btn-sec', foco: 'alterar', onClick: () => abrirModal('opcoes') }, k.alterar),
        cancel
          ? h('button', { type: 'button', class: 'btn btn-primario', onClick: novoAgendamento }, k.cancelado.novo)
          : h('button', { type: 'button', class: 'btn btn-primario', onClick: irInicio }, k.inicio))
    ];
  }

  /* =====================================================================
     Janelas (comprovante, alterar/cancelar, cancelado)
     ===================================================================== */

  let modalDesenhado = null;
  let focoAoFechar = null;

  function janelaComprovante() {
    const c = M.confirmacao.comprovante;
    const n = total();
    return h('div', { class: 'janela janela-comp', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'janela-titulo' },
      h('div', { class: 'janela-faixa' }, c.faixa),
      h('div', { class: 'janela-corpo' },
        h('h2', { id: 'janela-titulo', class: 'janela-titulo', tabindex: '-1' }, c.titulo),
        h('p', { class: 'comp-cod' }, state.localizador),
        h('p', { class: 'comp-visita' }, c.visita),
        h('p', { class: 'comp-quando' }, `${dataTxt(state.dia)} · ${state.horario}`),
        h('p', { class: 'comp-pessoas' }, pessoasTxt(n)),
        h('p', { class: 'comp-linhas' },
          h('span', {}, `${c.responsavel}: ${state.resp.nome}`), h('span', {}, c.documento), h('span', {}, c.chegada)),
        h('p', { class: 'nota nota-pequena' }, c.nota),
        h('div', { class: 'janela-acoes' }, h('button', { type: 'button', class: 'btn btn-primario', onClick: fecharModal }, c.fechar))));
  }

  function janelaOpcoes() {
    const o = M.confirmacao.opcoes;
    return h('div', { class: 'janela', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'janela-titulo' },
      h('div', { class: 'janela-corpo' },
        h('h2', { id: 'janela-titulo', class: 'janela-titulo', tabindex: '-1' }, o.titulo),
        h('p', { class: 'janela-texto' }, `${o.localizador} ${state.localizador}`),
        h('p', { class: 'janela-texto' }, o.texto),
        h('div', { class: 'janela-acoes' },
          h('button', { type: 'button', class: 'btn btn-primario', onClick: alterarVisita }, o.alterar),
          h('button', { type: 'button', class: 'btn btn-sec', onClick: cancelarAgendamento }, o.cancelar),
          h('button', { type: 'button', class: 'btn btn-sec', onClick: fecharModal }, o.manter))));
  }

  function janelaCancelado() {
    const k = M.confirmacao.cancelado;
    return h('div', { class: 'janela', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'janela-titulo' },
      h('div', { class: 'janela-corpo' },
        h('h2', { id: 'janela-titulo', class: 'janela-titulo', tabindex: '-1' }, k.titulo),
        k.texto.map(t => h('p', { class: 'janela-texto' }, t)),
        h('div', { class: 'janela-acoes' }, h('button', { type: 'button', class: 'btn btn-primario', onClick: novoAgendamento }, k.novo))));
  }

  function renderJanela() {
    const raiz = document.getElementById('janela');
    const fundo = ['topo', 'app', 'rodape'].map(id => document.getElementById(id));
    if (state.modal === modalDesenhado) return;
    modalDesenhado = state.modal;

    if (!state.modal) {
      raiz.replaceChildren();
      fundo.forEach(el => { el.inert = false; });
      document.body.style.overflow = '';
      return;
    }
    const conteudo = { comprovante: janelaComprovante, opcoes: janelaOpcoes, cancelado: janelaCancelado }[state.modal]();
    raiz.replaceChildren(h('div', { class: 'sobreposicao', onClick: e => { if (e.target === e.currentTarget) fecharModal(); } }, conteudo));
    fundo.forEach(el => { el.inert = true; });
    document.body.style.overflow = 'hidden';
    const t = raiz.querySelector('.janela-titulo');
    if (t) t.focus();
  }

  function abrirModal(nome) {
    const ativo = document.activeElement;
    if (!state.modal) focoAoFechar = ativo && ativo.dataset ? ativo.dataset.foco : null;
    state.modal = nome;
    render();
  }

  function fecharModal() {
    state.modal = null;
    render();
    if (focoAoFechar) focar(focoAoFechar);
    focoAoFechar = null;
  }

  /* =====================================================================
     Ações
     ===================================================================== */

  function irInicio() {
    if (!podeNavegar()) return;
    state.modal = null;
    state.tela = 'inicio';
    render({ navegou: true });
  }

  function irPrograma() {
    if (!podeNavegar()) return;
    state.modal = null;
    state.tela = 'programa';
    render({ navegou: true });
  }

  function iniciarAgendamento() {
    if (!podeNavegar()) return;
    reiniciarReserva();
    state.tela = 'agendar';
    state.passo = 1;
    render({ navegou: true });
  }

  function novoAgendamento() {
    state.modal = null;
    iniciarAgendamento();
  }

  function reiniciarReserva() {
    clearTimeout(timerEnvio);
    const tela = state.tela;
    state = novoEstado();
    state.tela = tela;
  }

  function irParaPasso(n) {
    if (!podeNavegar()) return;
    state.passo = n;
    state.corrigindo = false;
    render({ navegou: true });
  }

  function escolherModo(v) {
    state.modo = v;
    sanearHorario();
    render();
  }

  function mudarPessoas(delta) {
    const mm = M.modalidade;
    if (state.modo !== 'grupo') return;
    const novo = Math.min(mm.grupoMax, Math.max(mm.grupoMin, state.grupo + delta));
    if (novo !== state.grupo) { state.grupo = novo; sanearHorario(); }
    render();
  }

  function escolherDia(d) {
    state.diaClicado = d;
    state.erroData = '';
    if (situacaoDia(d) === 'vagas') {
      if (state.dia !== d) { state.dia = d; state.horario = null; }
    } else {
      state.dia = null;
      state.horario = null;
    }
    render();
  }

  function escolherHorario(hora) {
    state.horario = hora;
    state.erroData = '';
    render();
  }

  function preencherExemplo() {
    if (state.exemploUsado) return;
    if (!Object.values(state.resp).every(x => !x.trim())) return;
    state.resp = Object.assign({}, M.visitantes.exemplo);
    state.exemploUsado = true;
    Object.keys(state.resp).forEach(k => {
      const el = document.getElementById('campo-' + k);
      if (el) el.value = state.resp[k];
    });
    limparErroNome();
  }

  function limparErroNome() {
    state.erroNome = '';
    const erro = document.getElementById('erro-nome');
    if (erro) erro.remove();
    const campo = document.getElementById('campo-nome');
    if (campo) { campo.removeAttribute('aria-invalid'); campo.removeAttribute('aria-describedby'); }
  }

  function alternarApoio(id, marcado) {
    const i = state.apoios.indexOf(id);
    if (marcado && i < 0) state.apoios.push(id);
    if (!marcado && i >= 0) state.apoios.splice(i, 1);
  }

  function validarPasso(n) {
    if (n === 1) return state.modo === 'grupo' || M.modalidade.permitirIndividual;
    if (n === 2) {
      if (state.dia && state.horario) return true;
      state.erroData = M.calendario.erroSemSelecao;
      render();
      return false;
    }
    if (n === 3) {
      if (state.resp.nome.trim()) return true;
      state.erroNome = M.visitantes.erroNome;
      state.focoPendente = 'campo-nome';
      render();
      return false;
    }
    return true;
  }

  function avancar() {
    if (!podeNavegar() || !validarPasso(state.passo)) return;
    const e = state.edicao;
    if (e) {
      if (e.i < e.passos.length - 1) { e.i += 1; state.passo = e.passos[e.i]; }
      else { state.edicao = null; state.passo = 4; }
    } else {
      state.passo += 1;
    }
    state.corrigindo = false;
    render({ navegou: true });
  }

  function voltar() {
    if (!podeNavegar()) return;
    if (state.edicao) { state.edicao = null; state.passo = 4; }
    else if (state.passo === 1) { state.tela = 'programa'; }
    else { state.passo -= 1; }
    state.corrigindo = false;
    render({ navegou: true });
  }

  // Botões "Editar" da revisão
  function editarVisita() {
    if (!podeNavegar()) return;
    state.edicao = { passos: [1, 2], i: 0 };
    state.passo = 1;
    state.corrigindo = false;
    render({ navegou: true });
  }
  function editarOutrosDados() {
    if (!podeNavegar()) return;
    state.edicao = { passos: [3], i: 0 };
    state.passo = 3;
    state.corrigindo = false;
    render({ navegou: true });
  }
  function editarAcessibilidade() { editarOutrosDados(); }
  function editarResponsavel() {
    if (!podeNavegar()) return;
    if (statusTelefone(state.resp.telefone) === 'incompleto') {
      state.corrigindo = true;
      state.erroCorrigir = '';
      state.focoPendente = 'fone-corrigir';
      render();
    } else {
      editarOutrosDados();
    }
  }

  function usarTelefone() {
    const campo = document.getElementById('campo-corrigir');
    const valor = (campo ? campo.value : state.valorCorrigir).trim();
    state.valorCorrigir = valor;
    if (statusTelefone(valor) !== 'ok') {
      state.erroCorrigir = M.revisao.corrigirErro;
      state.focoPendente = 'fone-corrigir';
      render();
      return;
    }
    state.resp.telefone = formatarTelefone(valor);
    state.corrigindo = false;
    state.erroCorrigir = '';
    state.valorCorrigir = '';
    state.erroRevisao = '';
    state.focoPendente = 'editar-responsavel';
    mostrarAviso(M.revisao.corrigirOk);
    render();
  }

  function confirmar() {
    if (!podeNavegar()) return;
    if (statusTelefone(state.resp.telefone) === 'incompleto') {
      state.erroRevisao = M.revisao.erroConfirmar;
      state.focoPendente = 'msg-confirmar';
      render();
      return;
    }
    if (!state.dia || !state.horario) {
      state.passo = 2;
      state.edicao = null;
      state.erroData = M.calendario.erroSemSelecao;
      render({ navegou: true });
      return;
    }
    state.erroRevisao = '';
    state.enviando = true;
    render();
    timerEnvio = setTimeout(() => {
      state.enviando = false;
      state.localizador = gerarLocalizador();
      state.cancelado = false;
      state.passo = 5;
      render({ navegou: true });
    }, M.revisao.atrasoEnvioMs);
  }

  function alterarVisita() {
    state.modal = null;
    state.localizador = null;
    state.cancelado = false;
    state.edicao = null;
    state.passo = 1;
    focoAoFechar = null;
    render({ navegou: true });
  }

  function cancelarAgendamento() {
    state.cancelado = true;
    state.modal = 'cancelado';
    render();
  }

  /* =====================================================================
     Desenho da tela
     ===================================================================== */

  function atualizarTitulo() {
    const base = 'Protótipo acadêmico';
    let t;
    if (state.tela === 'inicio') t = M.inicio.destaque.titulo;
    else if (state.tela === 'programa') t = M.programa.titulo;
    else t = state.cancelado && state.passo === 5 ? M.confirmacao.cancelado.titulo : M.passos[state.passo - 1].titulo;
    document.title = `${t} · ${base}`;
  }

  function render({ navegou = false } = {}) {
    const ativo = document.activeElement;
    const foco = ativo && ativo.dataset ? ativo.dataset.foco : null;
    document.getElementById('app').replaceChildren(vistaAtual());
    atualizarTitulo();
    if (navegou) {
      window.scrollTo(0, 0);
      const t = document.querySelector('#app [data-titulo]');
      if (t) t.focus({ preventScroll: true });
    } else if (state.focoPendente) {
      focar(state.focoPendente);
    } else if (foco) {
      focar(foco);
    }
    state.focoPendente = null;
    renderJanela();
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && state.modal) fecharModal();
  });

  montarTopo();
  render({ navegou: false });
})();
