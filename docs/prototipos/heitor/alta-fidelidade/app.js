/**
 * Lógica interativa do Protótipo de Alta Fidelidade — Portal do Senado Federal (Grupo 06)
 * Rotas hash (#home, #busca, #proposicao, #comissoes, #consulta, #eventos, #acessibilidade),
 * controle de acessibilidade (Alto Contraste Alt+C, fonte, VLibras, atalhos Alt+1..4) e fluxo AF-S01..AF-S07.
 */
(function () {
  "use strict";

  const DATA = window.SENADO_DATA;
  const DEFAULT_USER = {
    loggedIn: false,
    name: "Letícia Oliveira",
    roleLabel: "Cidadã Teste",
    cpfMask: "***.482.191-**"
  };

  const state = {
    route: "home",
    simState: "normal",
    highContrast: false,
    fontScale: 1,
    vlibrasOpen: false,
    vlibrasText: "Olá! O intérprete virtual VLibras traduz os conteúdos legislativos para Libras.",
    user: { ...DEFAULT_USER },
    search: {
      q: "jornada de trabalho",
      tab: "todos",
      period: "todos",
      tipo: "todos",
      situacao: "todos",
      sort: "recentes",
      page: 1,
      pageSize: 5,
      filtersOpenMobile: false
    },
    proposicao: {
      id: "PL-5253-2026",
      tab: "resumo",
      glossaryKey: null,
      statusHelpOpen: false,
      linkCopied: false
    },
    comissoes: {
      sigla: "CCJ",
      tipo: "realizada",
      meetingId: "ccj-2026-10-08",
      dateFilter: "",
      playing: false,
      captionsOn: true,
      transcriptOpen: false
    },
    consulta: {
      pendingVote: null,
      voted: null,
      protocol: "",
      timestamp: "",
      simCount: DATA.CONSULTA.initialSim,
      naoCount: DATA.CONSULTA.initialNao,
      sharedCopied: false
    },
    eventos: {
      filterComissao: "todas",
      filterStatus: "todos",
      selectedEventId: "cra-pl-1215-2025",
      step: "list",
      draft: {
        tipo: "",
        oradorId: "",
        texto: "",
        inlineError: ""
      },
      submission: {
        protocol: "CRA-2026-0842",
        submittedAt: "",
        status: "moderacao",
        linkCopied: false
      }
    }
  };

  let lastModalOpener = null;
  let openDropdownName = null;
  let suppressHashRender = null;

  /* ---------- Utilitários seguros ---------- */

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function icon(name, sizeClass) {
    const cls = sizeClass ? `ico ${sizeClass}` : "ico ico-sm";
    return `<span class="${cls}" aria-hidden="true">${DATA.ICONS[name] || DATA.ICONS.info}</span>`;
  }

  function badgeHtml(label, tone, iconName) {
    const chosenIcon =
      iconName ||
      (tone === "success"
        ? "check"
        : tone === "error"
          ? "error"
          : tone === "live"
            ? "live"
            : tone === "warning"
              ? "warning"
              : "info");
    return `<span class="badge badge-${escapeHtml(tone || "info")}">${icon(chosenIcon)}<span>${escapeHtml(label)}</span></span>`;
  }

  function bannerHtml(tone, title, text, extraHtml) {
    const iconName =
      tone === "success" ? "check" : tone === "error" ? "error" : tone === "warning" ? "warning" : "info";
    return `
      <div class="feedback-banner feedback-banner-${escapeHtml(tone)}" role="${tone === "error" ? "alert" : "status"}">
        <span class="feedback-banner-icon">${icon(iconName, "ico")}</span>
        <div class="feedback-banner-body">
          ${title ? `<strong>${escapeHtml(title)}</strong> ` : ""}${text ? `<span>${escapeHtml(text)}</span>` : ""}
          ${extraHtml || ""}
        </div>
      </div>
    `;
  }

  function formatNumber(n) {
    return Number(n || 0).toLocaleString("pt-BR");
  }

  function announce(message) {
    const live = document.getElementById("sr-live");
    if (!live) return;
    live.textContent = "";
    window.setTimeout(function () {
      live.textContent = message;
    }, 30);
  }

  function copyToClipboard(text, fallbackMessage) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(function () {});
    }
    announce(fallbackMessage || "Link copiado para a área de transferência.");
  }

  function highlightTermsAndGlossary(text) {
    let html = escapeHtml(text);
    const terms = [
      { key: "proposicao", regex: /\b(proposi(?:ç|c)[ãa]o|projeto de lei)\b/gi },
      { key: "tramitacao", regex: /\b(tramita(?:ç|c)[ãa]o|transi(?:ç|c)[ãa]o)\b/gi },
      { key: "relator", regex: /\b(relator(?:a)?)\b/gi },
      { key: "parecer", regex: /\b(parecer)\b/gi }
    ];
    terms.forEach(function (entry) {
      html = html.replace(entry.regex, function (match) {
        return `<button type="button" class="glossary-term" data-glossary="${entry.key}" title="Ver explicação em linguagem simples">${match}</button>`;
      });
    });
    return html;
  }

  /* ---------- Navegação e Roteador ---------- */

  function parseHash() {
    const raw = (window.location.hash || "#home").replace(/^#/, "");
    const parts = raw.split("?");
    const route = parts[0] || "home";
    const params = new URLSearchParams(parts[1] || "");

    const validRoutes = ["home", "busca", "proposicao", "comissoes", "consulta", "eventos", "acessibilidade"];
    state.route = validRoutes.includes(route) ? route : "home";

    if (route === "busca") {
      state.search.q = params.has("q") ? (params.get("q") || "") : "";
      state.search.tab = "todos";
      state.search.tipo = "todos";
      state.search.period = params.get("periodo") === "mes" ? "30d" : "todos";
      if (params.has("tipo")) {
        const tipo = params.get("tipo");
        const tabMap = {
          proposicao: "proposicoes",
          noticia: "noticias",
          reuniao: "reunioes",
          senador: "senadores"
        };
        if (tabMap[tipo]) state.search.tab = tabMap[tipo];
        else if (["PL", "PEC", "MPV"].includes(tipo)) state.search.tipo = tipo;
      }
      if (params.has("tab")) state.search.tab = params.get("tab") || "todos";
      state.search.page = 1;
    }

    if (route === "proposicao" && params.get("id")) {
      const targetId = params.get("id");
      if (DATA.PROPOSICOES.some((p) => p.id === targetId)) {
        state.proposicao.id = targetId;
        state.proposicao.glossaryKey = null;
        state.proposicao.statusHelpOpen = false;
      }
    }

    if (route === "comissoes" && params.get("sigla")) {
      const sigla = params.get("sigla").toUpperCase();
      if (DATA.COMISSOES[sigla]) {
        state.comissoes.sigla = sigla;
        state.comissoes.meetingId = DATA.COMISSOES[sigla].reunioes[0].id;
      }
    }

    if (route === "eventos" && params.get("step")) {
      const st = params.get("step");
      if (["list", "room", "form", "auth", "review", "receipt"].includes(st)) {
        state.eventos.step = st;
      }
    }
  }

  function navigate(target) {
    const clean = String(target || "home").replace(/^#/, "");
    closeAllDropdowns();
    closeMobileDrawer();
    const nextHash = `#${clean}`;
    if (window.location.hash !== nextHash) {
      suppressHashRender = nextHash;
      window.location.hash = nextHash;
    }
    parseHash();
    render();
    const main = document.getElementById("main-content");
    if (main) main.scrollIntoView({ behavior: "auto", block: "start" });
  }

  /* ---------- Controles Globais (Ícones, A11y, Menus, Modal) ---------- */

  function renderStaticIcons() {
    document.querySelectorAll("[data-icon]").forEach(function (el) {
      const key = el.getAttribute("data-icon");
      el.innerHTML = DATA.ICONS[key] || DATA.ICONS.info;
    });
  }

  function syncAccessibilityUI() {
    document.documentElement.classList.toggle("hc", state.highContrast);
    document.documentElement.style.setProperty("--font-scale", String(state.fontScale));

    const badge = document.getElementById("contrast-state-badge");
    const btnContrast = document.getElementById("btn-contrast");
    if (badge) badge.textContent = state.highContrast ? "Ligado" : "Desligado";
    if (btnContrast) btnContrast.setAttribute("aria-pressed", String(state.highContrast));

    const btnResetFont = document.getElementById("btn-font-reset");
    if (btnResetFont) btnResetFont.textContent = `${Math.round(state.fontScale * 100)}%`;

    const vlibrasWidget = document.getElementById("vlibras-widget");
    const btnVlibras = document.getElementById("btn-vlibras");
    const vlibrasCaption = document.getElementById("vlibras-caption");
    if (vlibrasWidget) vlibrasWidget.hidden = !state.vlibrasOpen;
    if (btnVlibras) btnVlibras.setAttribute("aria-expanded", String(state.vlibrasOpen));
    if (vlibrasCaption) vlibrasCaption.textContent = state.vlibrasText;

    const authBtn = document.getElementById("btn-header-auth");
    const authLabel = document.getElementById("header-auth-label");
    if (authBtn) authBtn.classList.toggle("is-authenticated", state.user.loggedIn);
    if (authLabel) {
      authLabel.textContent = state.user.loggedIn ? `${state.user.name} (gov.br)` : "Entrar com gov.br";
    }

    document.querySelectorAll("[data-sim]").forEach(function (btn) {
      const sim = btn.getAttribute("data-sim");
      const active = sim === "hc" ? state.highContrast : sim === state.simState;
      btn.setAttribute("aria-pressed", String(active));
    });

    document.querySelectorAll("[data-nav]").forEach(function (btn) {
      const nav = btn.getAttribute("data-nav") || "";
      const navRoute = nav.split("?")[0];
      if (btn.closest(".evaluator-panel")) {
        btn.setAttribute("aria-current", navRoute === state.route ? "page" : "false");
      }
    });
  }

  function toggleHighContrast(forceValue) {
    state.highContrast = typeof forceValue === "boolean" ? forceValue : !state.highContrast;
    syncAccessibilityUI();
    announce(state.highContrast ? "Modo de alto contraste ativado." : "Modo de alto contraste desativado.");
    if (state.route === "acessibilidade") render();
  }

  function changeFontScale(deltaOrReset) {
    if (deltaOrReset === "reset") {
      state.fontScale = 1;
    } else {
      const next = Math.round((state.fontScale + deltaOrReset) * 10) / 10;
      state.fontScale = Math.max(0.9, Math.min(1.4, next));
    }
    syncAccessibilityUI();
    announce(`Tamanho da fonte ajustado para ${Math.round(state.fontScale * 100)} por cento.`);
  }

  function openVlibras(customMessage) {
    state.vlibrasOpen = true;
    if (customMessage) state.vlibrasText = customMessage;
    syncAccessibilityUI();
    announce("Painel de tradução VLibras aberto.");
  }

  function closeAllDropdowns() {
    openDropdownName = null;
    document.querySelectorAll(".nav-trigger[data-menu]").forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
    });
    document.querySelectorAll(".nav-submenu").forEach(function (menu) {
      menu.hidden = true;
    });
  }

  function toggleDropdown(menuName) {
    const willOpen = openDropdownName !== menuName;
    closeAllDropdowns();
    if (!willOpen) return;
    openDropdownName = menuName;
    const trigger = document.querySelector(`.nav-trigger[data-menu="${menuName}"]`);
    const panel = document.getElementById(`submenu-${menuName}`);
    if (trigger) trigger.setAttribute("aria-expanded", "true");
    if (panel) panel.hidden = false;
  }

  function openMobileDrawer() {
    const drawer = document.getElementById("mobile-drawer");
    const btn = document.getElementById("btn-mobile-menu");
    if (drawer) drawer.hidden = false;
    if (btn) btn.setAttribute("aria-expanded", "true");
    const closeBtn = document.getElementById("btn-close-mobile-menu");
    if (closeBtn) closeBtn.focus();
  }

  function closeMobileDrawer() {
    const drawer = document.getElementById("mobile-drawer");
    const btn = document.getElementById("btn-mobile-menu");
    if (drawer && !drawer.hidden) {
      drawer.hidden = true;
      if (btn) btn.setAttribute("aria-expanded", "false");
    }
  }

  function openModal(options) {
    const dialog = document.getElementById("app-modal");
    const titleEl = document.getElementById("modal-title");
    const bodyEl = document.getElementById("modal-body");
    const footerEl = document.getElementById("modal-footer");
    if (!dialog || !titleEl || !bodyEl || !footerEl) return;

    lastModalOpener = document.activeElement;
    titleEl.textContent = options.title || "Aviso";
    bodyEl.innerHTML = options.bodyHtml || "";
    footerEl.innerHTML = options.footerHtml || "";

    if (!dialog.open) {
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    }
    if (typeof options.onMount === "function") {
      options.onMount(dialog, bodyEl, footerEl);
    }
  }

  function closeModal() {
    const dialog = document.getElementById("app-modal");
    if (!dialog) return;
    if (typeof dialog.close === "function" && dialog.open) dialog.close();
    else dialog.removeAttribute("open");
    if (lastModalOpener && typeof lastModalOpener.focus === "function") {
      lastModalOpener.focus();
    }
  }

  function openHeaderAuthModal() {
    if (state.user.loggedIn) {
      openModal({
        title: "Sessão identificada (gov.br)",
        bodyHtml: `
          ${bannerHtml("success", "Sessão ativa:", `${state.user.name} (${state.user.roleLabel}) — CPF ${state.user.cpfMask}`)}
          <p class="meta-text" style="margin-top: var(--space-2);">
            Sua identificação permite registrar votos nas Consultas Públicas e acompanhar perguntas em audiências ao vivo.
          </p>
        `,
        footerHtml: `
          <button type="button" class="btn-secondary" id="modal-signout-btn">Encerrar sessão</button>
          <button type="button" class="btn-primary" id="modal-keep-btn">Continuar navegando</button>
        `,
        onMount: function () {
          document.getElementById("modal-signout-btn").addEventListener("click", function () {
            state.user.loggedIn = false;
            syncAccessibilityUI();
            closeModal();
            render();
            announce("Sessão gov.br encerrada.");
          });
          document.getElementById("modal-keep-btn").addEventListener("click", closeModal);
        }
      });
      return;
    }

    openModal({
      title: "Entrar com gov.br (simulação de avaliação)",
      bodyHtml: `
        ${bannerHtml("info", "Ambiente seguro:", "Simulação de login único gov.br para testes de usabilidade sem coleta real de CPF ou senha.")}
        <div class="card card-muted" style="margin-top: var(--space-2);">
          <p><strong>Perfil de teste:</strong> ${escapeHtml(DEFAULT_USER.name)} (${escapeHtml(DEFAULT_USER.roleLabel)})</p>
          <p class="meta-text">CPF simulado: ${escapeHtml(DEFAULT_USER.cpfMask)} • Nível Prata gov.br</p>
        </div>
      `,
      footerHtml: `
        <button type="button" class="btn-secondary" id="modal-cancel-auth">Cancelar</button>
        <button type="button" class="btn-primary" id="modal-confirm-auth">${icon("shield")}<span>Entrar como ${escapeHtml(DEFAULT_USER.name)}</span></button>
      `,
      onMount: function () {
        document.getElementById("modal-cancel-auth").addEventListener("click", closeModal);
        document.getElementById("modal-confirm-auth").addEventListener("click", function () {
          state.user.loggedIn = true;
          syncAccessibilityUI();
          closeModal();
          render();
          announce("Login gov.br realizado como Letícia Oliveira.");
        });
      }
    });
  }

  /* ---------- Estados Simulados (Carregando, Erro, Vazio) ---------- */

  function renderSimulatedStateShell(screenTitle) {
    if (state.simState === "loading") {
      return `
        <section class="stack-4" aria-busy="true" aria-label="Carregando conteúdo">
          <div class="feedback-banner feedback-banner-info">
            <span class="feedback-banner-icon">${icon("clock", "ico")}</span>
            <div class="feedback-banner-body"><strong>Carregando ${escapeHtml(screenTitle)}...</strong> Aguarde enquanto buscamos os dados legislativos atualizados.</div>
          </div>
          <div class="card stack-3">
            <div class="skeleton-line lg"></div>
            <div class="skeleton-line md"></div>
            <div class="skeleton-line sm"></div>
          </div>
          <div class="grid-12">
            <div class="col-6 card stack-2"><div class="skeleton-line md"></div><div class="skeleton-line sm"></div><div class="skeleton-line md"></div></div>
            <div class="col-6 card stack-2"><div class="skeleton-line md"></div><div class="skeleton-line sm"></div><div class="skeleton-line md"></div></div>
          </div>
        </section>
      `;
    }

    if (state.simState === "error") {
      return `
        <section class="stack-4">
          <div class="feedback-banner feedback-banner-error" role="alert">
            <span class="feedback-banner-icon">${icon("error", "ico")}</span>
            <div class="feedback-banner-body">
              <strong>Não foi possível carregar "${escapeHtml(screenTitle)}" no momento.</strong>
              O serviço de dados legislativos apresentou instabilidade temporária. Nenhum dado digitado foi perdido.
              <div style="margin-top: var(--space-2); display: flex; flex-wrap: wrap; gap: var(--space-1);">
                <button type="button" class="btn-primary" id="btn-retry-sim">Tentar novamente</button>
                <button type="button" class="btn-secondary" data-nav="home">Voltar à Página inicial</button>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (state.simState === "empty") {
      return `
        <section class="card stack-3">
          <h1>Nenhum registro encontrado para "${escapeHtml(screenTitle)}"</h1>
          <p>Não há itens correspondentes aos filtros ou ao termo informado no momento.</p>
          <div style="display:flex; flex-wrap:wrap; gap: var(--space-2);">
            <button type="button" class="btn-primary" id="btn-retry-sim">Restaurar visualização padrão</button>
            <button type="button" class="btn-secondary" data-nav="busca?q=jornada+de+trabalho">Ver proposições recentes</button>
          </div>
        </section>
      `;
    }

    return null;
  }

  /* ---------- Breadcrumb ---------- */

  function renderBreadcrumb() {
    const wrap = document.getElementById("breadcrumb-wrap");
    const el = document.getElementById("breadcrumb");
    if (!el) return;

    if (state.route === "home") {
      if (wrap) wrap.hidden = true;
      el.innerHTML = "";
      return;
    }
    if (wrap) wrap.hidden = false;

    const crumbs = [{ label: "Início", nav: "home" }];
    if (state.route === "busca") {
      crumbs.push({ label: "Busca e resultados", current: true });
    } else if (state.route === "proposicao") {
      const prop = DATA.PROPOSICOES.find((p) => p.id === state.proposicao.id) || DATA.PROPOSICOES[0];
      crumbs.push({ label: "Proposições", nav: "busca?q=&tab=proposicoes" });
      crumbs.push({ label: prop.codigo, current: true });
    } else if (state.route === "comissoes") {
      const com = DATA.COMISSOES[state.comissoes.sigla];
      crumbs.push({ label: "Comissões", nav: "comissoes" });
      crumbs.push({ label: `${com.sigla} — ${com.nomeCompleto}`, current: true });
    } else if (state.route === "consulta") {
      crumbs.push({ label: "Participe", nav: "eventos" });
      crumbs.push({ label: `Consulta Pública — ${DATA.CONSULTA.codigo}`, current: true });
    } else if (state.route === "eventos") {
      crumbs.push({ label: "Participe", nav: "consulta" });
      crumbs.push({ label: "Eventos Interativos", current: true });
    } else if (state.route === "acessibilidade") {
      crumbs.push({ label: "Acessibilidade e Alto Contraste", current: true });
    }

    el.innerHTML = crumbs
      .map(function (c, index) {
        const sep = index > 0 ? `<span aria-hidden="true">/</span>` : "";
        if (c.current) {
          return `${sep}<span aria-current="page">${escapeHtml(c.label)}</span>`;
        }
        return `${sep}<a href="#${escapeHtml(c.nav)}" data-nav="${escapeHtml(c.nav)}">${escapeHtml(c.label)}</a>`;
      })
      .join("");
  }

  /* ---------- Tela 1: Página Inicial ---------- */

  function renderHome() {
    const simShell = renderSimulatedStateShell("Página inicial");
    if (simShell) return simShell;

    const newsList = DATA.NOTICIAS.slice(0, 5);

    return `
      <section class="stack-4">
        <header class="page-intro">
          <h1>Portal do Senado Federal</h1>
          <p>Acompanhe propostas em tramitação, reuniões das comissões e consultas abertas ao cidadão.</p>
        </header>

        <section class="stack-2" aria-labelledby="home-shortcuts-heading">
          <h2 id="home-shortcuts-heading" class="sr-only">Principais tarefas</h2>
          <div class="grid-12">
            ${DATA.HOME_SHORTCUTS.map(function (sc) {
              return `
                <article class="col-3 card card-interactive shortcut-card" data-nav="${escapeHtml(sc.route)}" tabindex="0" role="link" aria-label="${escapeHtml(sc.title)}">
                  <div class="shortcut-card-top">
                    <span style="color: var(--color-primary);">${icon(sc.icon, "ico")}</span>
                  </div>
                  <h3>${escapeHtml(sc.title)}</h3>
                  <p>${escapeHtml(sc.desc)}</p>
                </article>
              `;
            }).join("")}
          </div>
        </section>

        <section class="grid-12" aria-label="Notícias e participação">
          <div class="col-8 card stack-3">
            <div class="section-header-row">
              <h2>Últimas notícias</h2>
              <a href="#busca?q=&tab=noticias" data-nav="busca?q=&tab=noticias">Ver todas</a>
            </div>
            <ul class="news-list">
              ${newsList
                .map(function (n) {
                  const navTarget = n.proposicaoId ? `proposicao?id=${n.proposicaoId}` : "comissoes";
                  return `
                    <li class="news-item">
                      <time class="news-date" datetime="${escapeHtml(n.isoDate)}">${escapeHtml(n.data)}</time>
                      <a href="#${escapeHtml(navTarget)}" class="news-link" data-nav="${escapeHtml(navTarget)}">${escapeHtml(n.titulo)}</a>
                    </li>
                  `;
                })
                .join("")}
            </ul>
          </div>

          <aside class="col-4 card card-accent stack-3" aria-label="Participe agora">
            <h2>Participe agora</h2>

            <div class="participate-card-item">
              <span class="aux-text">Consulta Pública · ${escapeHtml(DATA.CONSULTA.prazo)}</span>
              <strong>${escapeHtml(DATA.CONSULTA.codigo)} — Crédito para agricultura familiar</strong>
              <button type="button" class="btn-primary" style="margin-top: 6px;" data-nav="consulta">
                ${icon("vote")}<span>Votar SIM ou NÃO</span>
              </button>
            </div>

            <div class="participate-card-item">
              <div>${badgeHtml("Ao vivo agora", "live")}</div>
              <strong>CRA: Audiência pública do PL 1215/2025</strong>
              <button type="button" class="btn-secondary" style="margin-top: 6px;" data-nav="eventos">
                Entrar na audiência
              </button>
            </div>
          </aside>
        </section>
      </section>
    `;
  }

  /* ---------- Tela 2: Busca e Resultados ---------- */

  function buildSearchCorpus() {
    const props = DATA.PROPOSICOES.map(function (p) {
      return {
        kind: "proposicoes",
        kindLabel: "Proposição",
        tipoSigla: p.tipoSigla,
        situacaoCategoria: p.situacaoCategoria,
        id: p.id,
        title: p.titulo,
        summary: p.ementa,
        meta: `${p.comissaoAtual} • Atualizado em ${p.atualizacao}`,
        badge: { label: p.situacaoLabel, tone: p.situacaoTone },
        isoDate: p.isoDate,
        nav: `proposicao?id=${p.id}`,
        searchText: `${p.codigo} ${p.titulo} ${p.ementa} ${p.autor} ${p.relator} ${p.comissaoAtual}`.toLowerCase()
      };
    });

    const news = DATA.NOTICIAS.map(function (n) {
      return {
        kind: "noticias",
        kindLabel: "Notícia",
        tipoSigla: "NOT",
        situacaoCategoria: "todos",
        id: n.id,
        title: n.titulo,
        summary: n.resumo,
        meta: `Agência Senado • ${n.data}`,
        badge: { label: n.categoria, tone: n.categoria === "Ao vivo hoje" ? "live" : "info" },
        isoDate: n.isoDate,
        nav: n.proposicaoId ? `proposicao?id=${n.proposicaoId}` : "comissoes",
        searchText: `${n.titulo} ${n.resumo} ${n.categoria}`.toLowerCase()
      };
    });

    const meetings = Object.values(DATA.COMISSOES).flatMap(function (com) {
      return com.reunioes.map(function (r) {
        return {
          kind: "reunioes",
          kindLabel: "Reunião",
          tipoSigla: "REU",
          situacaoCategoria: "todos",
          id: r.id,
          title: `${r.titulo} (${com.sigla} — ${com.nomeCompleto})`,
          summary: r.pauta.map((item) => item.titulo).join(" | "),
          meta: `${r.data} • ${r.local}`,
          badge: { label: r.tipo === "realizada" ? "Realizada" : "Futura", tone: r.tipo === "realizada" ? "success" : "info" },
          isoDate: r.isoDate,
          nav: `comissoes?sigla=${com.sigla}`,
          searchText: `${r.titulo} ${com.sigla} ${com.nomeCompleto} ${r.pauta.map((i) => i.titulo).join(" ")}`.toLowerCase()
        };
      });
    });

    const senators = DATA.SENADORES.map(function (s) {
      return {
        kind: "senadores",
        kindLabel: "Senador(a)",
        tipoSigla: "SEN",
        situacaoCategoria: "todos",
        id: s.id,
        title: s.nome,
        summary: `${s.cargo} — Atuação em ${s.tema}.`,
        meta: "Senado Federal • Mandato em exercício",
        badge: { label: "Senador(a) em exercício", tone: "info" },
        isoDate: s.isoDate,
        nav: "busca?q=jornada+de+trabalho&tab=proposicoes",
        searchText: `${s.nome} ${s.cargo} ${s.tema}`.toLowerCase()
      };
    });

    return [...props, ...news, ...meetings, ...senators];
  }

  function filterSearchItems(corpus, includeTab) {
    const q = state.search.q.trim().toLowerCase();
    const tokens = q ? q.split(/\s+/).filter(Boolean) : [];

    return corpus.filter(function (item) {
      if (includeTab && state.search.tab !== "todos" && item.kind !== state.search.tab) return false;
      if (tokens.length > 0 && !tokens.every((t) => item.searchText.includes(t))) return false;
      if (state.search.period === "7d" && item.isoDate < "2026-10-05") return false;
      if (state.search.period === "30d" && item.isoDate < "2026-09-12") return false;
      if (state.search.period === "2026" && !item.isoDate.startsWith("2026")) return false;
      if (state.search.tipo !== "todos") {
        if (item.kind !== "proposicoes" || item.tipoSigla !== state.search.tipo) return false;
      }
      if (state.search.situacao !== "todos") {
        if (item.kind !== "proposicoes" || item.situacaoCategoria !== state.search.situacao) return false;
      }
      return true;
    });
  }

  function renderBusca() {
    const simShell = renderSimulatedStateShell("Busca e resultados");
    if (simShell) return simShell;

    const corpus = buildSearchCorpus();
    const baseFiltered = filterSearchItems(corpus, false);
    const counts = {
      todos: baseFiltered.length,
      proposicoes: baseFiltered.filter((i) => i.kind === "proposicoes").length,
      noticias: baseFiltered.filter((i) => i.kind === "noticias").length,
      reunioes: baseFiltered.filter((i) => i.kind === "reunioes").length,
      senadores: baseFiltered.filter((i) => i.kind === "senadores").length
    };

    const filtered = filterSearchItems(corpus, true).slice();
    filtered.sort(function (a, b) {
      if (state.search.sort === "relevancia") {
        const order = { proposicoes: 0, reunioes: 1, noticias: 2, senadores: 3 };
        const diff = order[a.kind] - order[b.kind];
        if (diff !== 0) return diff;
      }
      return b.isoDate.localeCompare(a.isoDate);
    });

    const pageSize = state.search.pageSize;
    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    if (state.search.page > totalPages) state.search.page = totalPages;
    const startIdx = (state.search.page - 1) * pageSize;
    const pageItems = filtered.slice(startIdx, startIdx + pageSize);

    const tabs = [
      { id: "todos", label: "Todos" },
      { id: "proposicoes", label: "Proposições" },
      { id: "noticias", label: "Notícias" },
      { id: "reunioes", label: "Reuniões" },
      { id: "senadores", label: "Senadores" }
    ];

    const periodChips = [
      { id: "todos", label: "Todo o período" },
      { id: "7d", label: "Últimos 7 dias" },
      { id: "30d", label: "Últimos 30 dias" },
      { id: "2026", label: "Ano de 2026" }
    ];

    const tipoChips = [
      { id: "todos", label: "Todos os tipos" },
      { id: "PL", label: "PL (Projeto de Lei)" },
      { id: "PEC", label: "PEC" },
      { id: "MPV", label: "MPV" }
    ];

    const sitChips = [
      { id: "todos", label: "Qualquer situação" },
      { id: "andamento", label: "Em tramitação" },
      { id: "aprovado", label: "Aprovado no Senado" },
      { id: "arquivado", label: "Arquivado" }
    ];

    return `
      <section class="stack-4">
        <header class="stack-2">
          <h1>Busca no Portal do Senado</h1>
          <form id="page-search-form" class="search-form" role="search" aria-label="Refinar busca">
            <label for="page-search-input" class="sr-only">Termo da busca</label>
            <input id="page-search-input" class="input-control" type="search" value="${escapeHtml(state.search.q)}" placeholder="Ex.: jornada de trabalho, PL 5253/2026, agricultura familiar" />
            <button type="submit" class="btn-primary">${icon("search")}<span>Buscar</span></button>
          </form>
          <p class="meta-text" aria-live="polite">
            <strong>${escapeHtml(filtered.length)}</strong> ${filtered.length === 1 ? "resultado encontrado" : "resultados encontrados"}
            ${state.search.q.trim() ? `para "<strong>${escapeHtml(state.search.q.trim())}</strong>"` : "em todo o acervo de 2026"}.
          </p>
        </header>

        <div class="tabs-bar" role="tablist" aria-label="Categorias de resultado">
          ${tabs
            .map(function (t) {
              const selected = state.search.tab === t.id;
              return `
                <button type="button" class="tab-btn" role="tab" aria-selected="${String(selected)}" data-search-tab="${t.id}">
                  <span>${escapeHtml(t.label)}</span>
                  <span class="tab-count">${counts[t.id]}</span>
                </button>
              `;
            })
            .join("")}
        </div>

        <div class="grid-12">
          <aside class="col-3 stack-3" aria-label="Filtros da busca">
            <button type="button" class="btn-secondary mobile-filter-toggle" id="btn-toggle-mobile-filters" aria-expanded="${String(state.search.filtersOpenMobile)}">
              ${icon("filter")}<span>${state.search.filtersOpenMobile ? "Ocultar filtros" : "Mostrar filtros"}</span>
            </button>

            <div class="filter-panel stack-4 ${state.search.filtersOpenMobile ? "" : "is-collapsed-mobile"}" id="busca-filter-panel">
              <div style="display:flex; justify-content:space-between; align-items:center; gap:var(--space-1);">
                <h2 class="h4">Filtros</h2>
                <button type="button" class="btn-tertiary" id="btn-clear-filters">Limpar</button>
              </div>

              <div class="filter-group">
                <h3>Período</h3>
                <div class="filter-shortcuts">
                  ${periodChips
                    .map(
                      (c) => `<button type="button" class="chip-btn ${state.search.period === c.id ? "is-active" : ""}" data-filter-period="${c.id}">${escapeHtml(c.label)}</button>`
                    )
                    .join("")}
                </div>
              </div>

              <div class="filter-group">
                <h3>Tipo de proposição</h3>
                <div class="filter-shortcuts">
                  ${tipoChips
                    .map(
                      (c) => `<button type="button" class="chip-btn ${state.search.tipo === c.id ? "is-active" : ""}" data-filter-tipo="${c.id}">${escapeHtml(c.label)}</button>`
                    )
                    .join("")}
                </div>
              </div>

              <div class="filter-group">
                <h3>Situação</h3>
                <div class="filter-shortcuts">
                  ${sitChips
                    .map(
                      (c) => `<button type="button" class="chip-btn ${state.search.situacao === c.id ? "is-active" : ""}" data-filter-sit="${c.id}">${escapeHtml(c.label)}</button>`
                    )
                    .join("")}
                </div>
              </div>
            </div>
          </aside>

          <div class="col-9 stack-3">
            <div class="results-toolbar">
              <span class="meta-text">Página <strong>${state.search.page}</strong> de <strong>${totalPages}</strong></span>
              <div style="display:flex; align-items:center; gap:var(--space-1);">
                <label for="search-sort-select" class="meta-text">Ordenar por:</label>
                <select id="search-sort-select" class="select-control" style="width:auto; min-width:190px;">
                  <option value="recentes" ${state.search.sort === "recentes" ? "selected" : ""}>Mais recentes (2026)</option>
                  <option value="relevancia" ${state.search.sort === "relevancia" ? "selected" : ""}>Mais relevantes</option>
                </select>
              </div>
            </div>

            ${
              pageItems.length === 0
                ? `<div class="card stack-3">
                    <h2>Nenhum resultado encontrado</h2>
                    <p>Não encontramos registros para a combinação atual de busca e filtros.</p>
                    <div>
                      <button type="button" class="btn-primary" id="btn-clear-filters-empty">Limpar filtros e buscar novamente</button>
                    </div>
                  </div>`
                : `<div class="stack-2">
                    ${pageItems
                      .map(function (item) {
                        return `
                          <article class="card card-interactive result-card" data-nav="${escapeHtml(item.nav)}" tabindex="0" role="link">
                            <div class="result-card-meta">
                              <span class="meta-text" style="font-weight:600;">${escapeHtml(item.kindLabel)}</span>
                              ${badgeHtml(item.badge.label, item.badge.tone)}
                            </div>
                            <h3 class="result-card-title">
                              <a href="#${escapeHtml(item.nav)}" data-nav="${escapeHtml(item.nav)}">${escapeHtml(item.title)}</a>
                            </h3>
                            <p class="meta-text">${escapeHtml(item.summary)}</p>
                            <p class="aux-text">${escapeHtml(item.meta)}</p>
                          </article>
                        `;
                      })
                      .join("")}
                  </div>`
            }

            ${
              pageItems.length > 0 && state.search.page === totalPages
                ? `<div class="period-end-banner" role="status">
                    ${icon("info")}<span>Você chegou ao final dos resultados para o período e filtros selecionados.</span>
                  </div>`
                : ""
            }

            ${
              totalPages > 1
                ? `<nav class="pagination" aria-label="Paginação dos resultados">
                    <span class="meta-text">Página <strong>${state.search.page}</strong> de <strong>${totalPages}</strong></span>
                    <div class="pagination-controls">
                      <button type="button" class="page-btn" data-page="${state.search.page - 1}" ${state.search.page <= 1 ? "disabled" : ""}>
                        ${icon("arrow-left")}<span>Anterior</span>
                      </button>
                      ${Array.from({ length: totalPages }, function (_, idx) {
                        const p = idx + 1;
                        return `<button type="button" class="page-btn" data-page="${p}" aria-current="${p === state.search.page ? "page" : "false"}">${p}</button>`;
                      }).join("")}
                      <button type="button" class="page-btn" data-page="${state.search.page + 1}" ${state.search.page >= totalPages ? "disabled" : ""}>
                        <span>Próxima</span>${icon("arrow-right")}
                      </button>
                    </div>
                  </nav>`
                : ""
            }
          </div>
        </div>
      </section>
    `;
  }

  /* ---------- Tela 3: Ficha da Proposição ---------- */

  function renderProposicao() {
    const simShell = renderSimulatedStateShell("Ficha da proposição");
    if (simShell) return simShell;

    const prop = DATA.PROPOSICOES.find((p) => p.id === state.proposicao.id) || DATA.PROPOSICOES[0];
    const activeGlossary = state.proposicao.glossaryKey ? DATA.GLOSSARY[state.proposicao.glossaryKey] : null;
    const totalVotes = prop.votosSim + prop.votosNao;
    const simPct = totalVotes ? Math.round((prop.votosSim / totalVotes) * 100) : 0;

    return `
      <section class="stack-4">
        <header class="card stack-3">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:var(--space-2); flex-wrap:wrap;">
            <div class="stack-2" style="flex:1; min-width:260px;">
              <div style="display:flex; flex-wrap:wrap; gap:var(--space-1); align-items:center;">
                ${badgeHtml(prop.situacaoLabel, prop.situacaoTone)}
                <button type="button" class="btn-tertiary" id="btn-toggle-status-help" aria-expanded="${String(state.proposicao.statusHelpOpen)}">
                  ${icon("help")}<span>O que isso significa?</span>
                </button>
              </div>
              <h1>${escapeHtml(prop.titulo)}</h1>
            </div>
            <div style="display:flex; gap:var(--space-1); flex-wrap:wrap;">
              <button type="button" class="btn-secondary" id="btn-copy-prop-link">
                ${icon(state.proposicao.linkCopied ? "check" : "copy")}<span>${state.proposicao.linkCopied ? "Link copiado!" : "Copiar link"}</span>
              </button>
              <button type="button" class="btn-secondary" id="btn-prop-vlibras">
                ${icon("vlibras")}<span>Ouvir/Libras</span>
              </button>
            </div>
          </div>

          ${
            state.proposicao.statusHelpOpen
              ? bannerHtml("info", "Explicação em linguagem cidadã:", prop.situacaoExplicacao)
              : ""
          }

          <div class="subtle-note" role="note">
            ${icon("warning")}<span><strong>Validade jurídica:</strong> ${escapeHtml(prop.avisoLegal)}</span>
          </div>

          <div class="stack-1">
            <h2 class="h4">Ementa</h2>
            <p class="reading-measure">${highlightTermsAndGlossary(prop.ementa)}</p>
            <p class="aux-text">Clique nos termos sublinhados para abrir o glossário em linguagem simples.</p>
          </div>

          ${
            activeGlossary
              ? `<div class="glossary-box" role="region" aria-label="Definição do termo ${escapeHtml(activeGlossary.term)}">
                  <div style="display:flex; justify-content:space-between; align-items:center; gap:var(--space-1);">
                    <strong>Glossário cidadão — ${escapeHtml(activeGlossary.term)}</strong>
                    <button type="button" class="btn-tertiary" id="btn-close-glossary" aria-label="Fechar explicação">Fechar (Esc)</button>
                  </div>
                  <p class="meta-text" style="margin-top:var(--space-1);">${escapeHtml(activeGlossary.definition)}</p>
                </div>`
              : ""
          }
        </header>

        <div class="grid-12">
          <div class="col-8 stack-3">
            <div class="tabs-bar" role="tablist" aria-label="Seções da proposição">
              ${[
                { id: "resumo", label: "Resumo e tramitação" },
                { id: "textos", label: "Textos e PDFs", count: prop.textos.length },
                { id: "votacoes", label: "Votações registradas", count: prop.votacoes.length }
              ]
                .map(function (t) {
                  return `<button type="button" class="tab-btn" role="tab" aria-selected="${String(state.proposicao.tab === t.id)}" data-prop-tab="${t.id}">
                    <span>${escapeHtml(t.label)}</span>
                    ${typeof t.count === "number" ? `<span class="tab-count">${t.count}</span>` : ""}
                  </button>`;
                })
                .join("")}
            </div>

            ${
              state.proposicao.tab === "resumo"
                ? `<section class="card stack-3" aria-labelledby="timeline-heading">
                    <h2 id="timeline-heading">Linha do tempo da tramitação (do mais recente ao mais antigo)</h2>
                    <ol class="timeline">
                      ${prop.timeline
                        .map(function (ev) {
                          return `
                            <li class="timeline-item ${ev.atual ? "is-current" : ""}">
                              <div class="stack-1">
                                <div style="display:flex; gap:var(--space-1); flex-wrap:wrap; align-items:center;">
                                  <span class="timeline-date">${escapeHtml(ev.data)}</span>
                                  ${ev.atual ? badgeHtml("Etapa atual", "info") : ""}
                                  <span class="meta-text" style="color:var(--color-secondary); font-weight:600;">${escapeHtml(ev.orgao)}</span>
                                </div>
                                <p class="reading-measure">${escapeHtml(ev.descricao)}</p>
                              </div>
                            </li>
                          `;
                        })
                        .join("")}
                    </ol>
                  </section>`
                : ""
            }

            ${
              state.proposicao.tab === "textos"
                ? `<section class="card stack-3">
                    <h2>Documentos oficiais para leitura e download</h2>
                    <div class="stack-2">
                      ${prop.textos
                        .map(function (doc, index) {
                          return `
                            <div class="card card-muted" style="display:flex; justify-content:space-between; align-items:center; gap:var(--space-2); flex-wrap:wrap;">
                              <div class="stack-1">
                                <strong>${escapeHtml(doc.titulo)}</strong>
                                <span class="meta-text">${escapeHtml(doc.tipo)} • ${escapeHtml(doc.tamanho)} • Publicado em ${escapeHtml(doc.data)}</span>
                              </div>
                              <button type="button" class="btn-secondary" data-download-doc="${index}">
                                ${icon("document")}<span>Abrir documento (${escapeHtml(doc.tamanho)})</span>
                              </button>
                            </div>
                          `;
                        })
                        .join("")}
                    </div>
                  </section>`
                : ""
            }

            ${
              state.proposicao.tab === "votacoes"
                ? `<section class="card stack-3">
                    <h2>Votações nominais em comissões e Plenário</h2>
                    ${
                      prop.votacoes.length === 0
                        ? `<p class="meta-text">Esta matéria ainda não passou por votação nominal concluída.</p>`
                        : prop.votacoes
                            .map(function (v) {
                              return `
                                <div class="card card-muted stack-2">
                                  <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:var(--space-1);">
                                    <strong>${escapeHtml(v.colegiado)}</strong>
                                    <span class="meta-text">${escapeHtml(v.data)}</span>
                                  </div>
                                  <div>${badgeHtml(v.resultado, "success")}</div>
                                  <p class="meta-text">Placar parlamentar: <strong>${v.sim} SIM</strong> • <strong>${v.nao} NÃO</strong> • ${v.abstencao} abstenções</p>
                                </div>
                              `;
                            })
                            .join("")
                    }
                  </section>`
                : ""
            }
          </div>

          <aside class="col-4 stack-3" aria-label="Ficha técnica da proposição">
            <div class="card stack-2">
              <h2 class="h3">Ficha técnica</h2>
              <dl class="metadata-dl">
                <div><dt>Autoria</dt><dd>${escapeHtml(prop.autor)}</dd></div>
                <div><dt>Relatoria atual</dt><dd>${escapeHtml(prop.relator)}</dd></div>
                <div><dt>Colegiado atual</dt><dd>${escapeHtml(prop.comissaoAtual)}</dd></div>
                <div><dt>Apresentação</dt><dd>${escapeHtml(prop.apresentacao)}</dd></div>
                <div><dt>Última movimentação</dt><dd>${escapeHtml(prop.atualizacao)}</dd></div>
                <div><dt>Texto completo (Avulso)</dt><dd>PDF acessível (${escapeHtml(prop.pdfTamanho)})</dd></div>
              </dl>
              <button type="button" class="btn-secondary" data-download-doc="0">
                ${icon("document")}<span>Baixar avulso em PDF (${escapeHtml(prop.pdfTamanho)})</span>
              </button>
            </div>

            <div class="card card-accent stack-2">
              <h3 class="h4">Opine no e-Cidadania</h3>
              <p class="meta-text">Consulta pública vinculada já soma ${formatNumber(totalVotes)} manifestações (${simPct}% SIM).</p>
              <button type="button" class="btn-primary" data-nav="consulta">
                ${icon("vote")}<span>Ir para votação na Consulta Pública</span>
              </button>
              <button type="button" class="btn-secondary" data-nav="eventos">
                ${icon("live")}<span>Ver audiências ao vivo</span>
              </button>
            </div>
          </aside>
        </div>
      </section>
    `;
  }

  /* ---------- Tela 4: Comissões e Reunião da CCJ ---------- */

  function renderComissoes() {
    const simShell = renderSimulatedStateShell("Comissões e reuniões");
    if (simShell) return simShell;

    const com = DATA.COMISSOES[state.comissoes.sigla] || DATA.COMISSOES.CCJ;
    const meetingsByType = com.reunioes.filter(function (m) {
      if (m.tipo !== state.comissoes.tipo) return false;
      if (state.comissoes.dateFilter.trim()) {
        return m.data.includes(state.comissoes.dateFilter.trim()) || m.isoDate.includes(state.comissoes.dateFilter.trim());
      }
      return true;
    });
    const selectedMeeting =
      meetingsByType.find((m) => m.id === state.comissoes.meetingId) || meetingsByType[0] || com.reunioes[0];

    const relatedNews = (selectedMeeting.noticiasIds || [])
      .map((id) => DATA.NOTICIAS.find((n) => n.id === id))
      .filter(Boolean);

    return `
      <section class="stack-4">
        <header style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:var(--space-2);">
          <div class="page-intro">
            <span class="meta-text">Comissão Permanente</span>
            <h1>${escapeHtml(com.sigla)} — ${escapeHtml(com.nomeCompleto)}</h1>
            <p>${escapeHtml(com.competencia)} Presidência: <strong>${escapeHtml(com.presidente)}</strong>.</p>
          </div>
          <div style="display:flex; gap:var(--space-1); flex-wrap:wrap;" role="group" aria-label="Selecionar comissão">
            <button type="button" class="${state.comissoes.sigla === "CCJ" ? "btn-primary" : "btn-secondary"}" data-comissao-sigla="CCJ">
              CCJ — Constituição e Justiça
            </button>
            <button type="button" class="${state.comissoes.sigla === "CRA" ? "btn-primary" : "btn-secondary"}" data-comissao-sigla="CRA">
              CRA — Agricultura e Reforma Agrária
            </button>
          </div>
        </header>

        <div class="grid-12">
          <aside class="col-4 stack-3" aria-label="Agenda e seleção de reuniões">
            <div class="card stack-3">
              <h2 class="h3">Reuniões da ${escapeHtml(com.sigla)}</h2>
              <div style="display:flex; gap:var(--space-1);" role="group" aria-label="Alternar realizadas e futuras">
                <button type="button" class="${state.comissoes.tipo === "realizada" ? "btn-primary" : "btn-secondary"}" style="flex:1;" data-comissao-tipo="realizada">
                  Realizadas
                </button>
                <button type="button" class="${state.comissoes.tipo === "futura" ? "btn-primary" : "btn-secondary"}" style="flex:1;" data-comissao-tipo="futura">
                  Futuras
                </button>
              </div>

              <div class="field-group">
                <label for="comissao-date-filter" class="field-label">Filtrar por data</label>
                <input id="comissao-date-filter" class="input-control" type="text" value="${escapeHtml(state.comissoes.dateFilter)}" placeholder="Ex.: 08/10/2026" />
              </div>

              <div class="meeting-list" role="list" aria-label="Datas de reunião">
                ${
                  meetingsByType.length === 0
                    ? `<p class="meta-text">Nenhuma reunião encontrada para este filtro.</p>`
                    : meetingsByType
                        .map(function (m) {
                          const selected = m.id === selectedMeeting.id;
                          return `
                            <button type="button" class="meeting-date-btn" aria-current="${selected ? "true" : "false"}" data-meeting-id="${escapeHtml(m.id)}">
                              <strong>${escapeHtml(m.data)} • ${escapeHtml(m.horario)}</strong>
                              <span class="meta-text">${escapeHtml(m.titulo)}</span>
                            </button>
                          `;
                        })
                        .join("")
                }
              </div>
            </div>
          </aside>

          <div class="col-8 stack-4">
            <section class="card stack-3" aria-label="Detalhes da reunião selecionada">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:var(--space-1);">
                ${badgeHtml(selectedMeeting.tipo === "realizada" ? "Reunião realizada" : "Reunião futura / pauta prevista", selectedMeeting.tipo === "realizada" ? "success" : "info")}
                <span class="meta-text">${escapeHtml(selectedMeeting.local)}</span>
              </div>
              <h2>${escapeHtml(selectedMeeting.titulo)}</h2>
              <p class="meta-text" style="display:inline-flex; align-items:center; gap:6px;">${icon("calendar")} <span>${escapeHtml(selectedMeeting.data)} • ${escapeHtml(selectedMeeting.horario)}</span></p>

              <div class="video-player-mock">
                <div class="video-stage">
                  <div class="stack-1" style="padding: var(--space-2);">
                    <span class="badge badge-info" style="align-self:center;">${escapeHtml(selectedMeeting.videoDuracao)}</span>
                    <strong>${escapeHtml(selectedMeeting.videoTitulo)}</strong>
                    <span class="aux-text" style="color: #E2EAF4;">Estado: ${state.comissoes.playing ? "Reproduzindo áudio e vídeo" : "Pausado (use os botões ou tecla Espaço)"}</span>
                  </div>
                  ${
                    state.comissoes.captionsOn
                      ? `<div class="video-caption-overlay" aria-live="polite">${escapeHtml(selectedMeeting.legendas)}</div>`
                      : ""
                  }
                </div>
                <div class="video-controls-bar">
                  <button type="button" class="video-ctrl-btn" id="btn-video-play">
                    ${icon(state.comissoes.playing ? "pause" : "play")}<span>${state.comissoes.playing ? "Pausar" : "Reproduzir"}</span>
                  </button>
                  <button type="button" class="video-ctrl-btn" id="btn-video-cc" aria-pressed="${String(state.comissoes.captionsOn)}">
                    ${icon("captions")}<span>Legendas (CC): ${state.comissoes.captionsOn ? "Ativas" : "Ocultas"}</span>
                  </button>
                  <button type="button" class="video-ctrl-btn" id="btn-video-transcript" aria-expanded="${String(state.comissoes.transcriptOpen)}">
                    ${icon("transcript")}<span>Notas taquigráficas</span>
                  </button>
                  <button type="button" class="video-ctrl-btn" id="btn-video-vlibras">
                    ${icon("vlibras")}<span>VLibras</span>
                  </button>
                </div>
              </div>

              ${
                state.comissoes.transcriptOpen
                  ? `<div class="card card-muted stack-1" role="region" aria-label="Transcrição da reunião">
                      <strong>Notas taquigráficas e transcrição completa</strong>
                      ${selectedMeeting.transcricao.map((line) => `<p class="meta-text">${escapeHtml(line)}</p>`).join("")}
                    </div>`
                  : ""
              }

              <div class="stack-2">
                <h3>Pauta e deliberações item a item</h3>
                <div class="stack-2">
                  ${selectedMeeting.pauta
                    .map(function (item) {
                      return `
                        <article class="card card-muted agenda-item">
                          <div class="stack-1" style="flex:1; min-width:240px;">
                            <div style="display:flex; gap:var(--space-1); align-items:center; flex-wrap:wrap;">
                              <strong>${escapeHtml(item.itemNum)}</strong>
                              <span class="meta-text">Relatoria: ${escapeHtml(item.relator)}</span>
                            </div>
                            <h4 style="font-size:1rem;"><a href="#proposicao?id=${escapeHtml(item.proposicaoId)}" data-nav="proposicao?id=${escapeHtml(item.proposicaoId)}">${escapeHtml(item.titulo)}</a></h4>
                          </div>
                          <div>${badgeHtml(item.deliberacao, item.tone)}</div>
                        </article>
                      `;
                    })
                    .join("")}
                </div>
              </div>
            </section>

            ${
              relatedNews.length > 0
                ? `<section class="stack-2">
                    <h3>Notícias relacionadas desta comissão</h3>
                    <div class="grid-12">
                      ${relatedNews
                        .map(
                          (n) => `<article class="col-6 card card-interactive stack-1" data-nav="${n.proposicaoId ? `proposicao?id=${n.proposicaoId}` : "busca"}" tabindex="0" role="link">
                            <span class="aux-text">${escapeHtml(n.data)}</span>
                            <strong>${escapeHtml(n.titulo)}</strong>
                          </article>`
                        )
                        .join("")}
                    </div>
                  </section>`
                : ""
            }
          </div>
        </div>
      </section>
    `;
  }

  /* ---------- Tela 5A: Consulta Pública (Voto direto SIM/NÃO) ---------- */

  function openConsultaVoteModal(choice) {
    state.consulta.pendingVote = choice;

    function renderConfirmBody() {
      const govNotice = state.user.loggedIn
        ? `Identificação ativa como <strong>${escapeHtml(state.user.name)}</strong> (${escapeHtml(state.user.cpfMask)}). Seu voto será contabilizado imediatamente.`
        : `Ao continuar, faremos uma identificação simulada via <strong>gov.br</strong> mantendo seu voto <strong>${escapeHtml(choice)}</strong> preservado automaticamente.`;

      return `
        <div class="stack-3">
          ${bannerHtml("info", `Você está registrando voto ${choice} no ${DATA.CONSULTA.codigo}`, DATA.CONSULTA.titulo)}
          <p class="meta-text">${govNotice}</p>
        </div>
      `;
    }

    openModal({
      title: `Confirmar voto ${choice}`,
      bodyHtml: renderConfirmBody(),
      footerHtml: `
        <button type="button" class="btn-secondary" id="modal-vote-cancel">Cancelar</button>
        <button type="button" class="btn-primary" id="modal-vote-next">
          ${icon(state.user.loggedIn ? "check" : "shield")}
          <span>${state.user.loggedIn ? `Confirmar voto ${choice}` : "Continuar para gov.br"}</span>
        </button>
      `,
      onMount: function (_dialog, bodyEl, footerEl) {
        document.getElementById("modal-vote-cancel").addEventListener("click", closeModal);
        document.getElementById("modal-vote-next").addEventListener("click", function () {
          if (state.user.loggedIn) {
            finalizeConsultaVote(choice);
            closeModal();
            return;
          }

          bodyEl.innerHTML = `
            <div class="stack-3">
              ${bannerHtml("success", `✔ Seu voto ${choice} está preservado:`, `Após entrar com gov.br, o voto será registrado no ${DATA.CONSULTA.codigo} sem precisar escolher novamente.`)}
              <div class="card card-muted stack-1">
                <strong>Conta gov.br simulada</strong>
                <span class="meta-text">${escapeHtml(DEFAULT_USER.name)} (${escapeHtml(DEFAULT_USER.roleLabel)}) • CPF ${escapeHtml(DEFAULT_USER.cpfMask)}</span>
              </div>
            </div>
          `;
          footerEl.innerHTML = `
            <button type="button" class="btn-secondary" id="modal-gov-back">Voltar</button>
            <button type="button" class="btn-primary" id="modal-gov-login">${icon("shield")}<span>Entrar e confirmar voto ${escapeHtml(choice)}</span></button>
          `;
          document.getElementById("modal-gov-back").addEventListener("click", function () {
            openConsultaVoteModal(choice);
          });
          document.getElementById("modal-gov-login").addEventListener("click", function () {
            state.user.loggedIn = true;
            syncAccessibilityUI();
            finalizeConsultaVote(choice);
            closeModal();
          });
        });
      }
    });
  }

  function finalizeConsultaVote(choice) {
    if (state.consulta.voted === "SIM") state.consulta.simCount -= 1;
    if (state.consulta.voted === "NAO") state.consulta.naoCount -= 1;
    if (choice === "SIM") state.consulta.simCount += 1;
    else state.consulta.naoCount += 1;

    state.consulta.voted = choice;
    state.consulta.pendingVote = null;
    state.consulta.protocol = "ECID-2026-90412";
    state.consulta.timestamp = "11/10/2026 às 14h28";
    state.consulta.sharedCopied = false;
    render();
    announce(`Voto ${choice} confirmado no ${DATA.CONSULTA.codigo}. Comprovante ${state.consulta.protocol} gerado.`);
  }

  function renderConsulta() {
    const simShell = renderSimulatedStateShell("Consulta pública");
    if (simShell) return simShell;

    const total = state.consulta.simCount + state.consulta.naoCount;
    const simPct = Math.round((state.consulta.simCount / total) * 1000) / 10;
    const naoPct = Math.round((100 - simPct) * 10) / 10;

    return `
      <section class="stack-4 narrow-measure">
        <header class="card stack-2">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:var(--space-1);">
            ${badgeHtml("Consulta pública aberta", "info")}
            <span class="meta-text">${escapeHtml(DATA.CONSULTA.prazo)}</span>
          </div>
          <h1>${escapeHtml(DATA.CONSULTA.titulo)}</h1>
          <p class="reading-measure">${escapeHtml(DATA.CONSULTA.ementa)}</p>
          <div>
            <a href="#proposicao?id=${escapeHtml(DATA.CONSULTA.proposicaoId)}" data-nav="proposicao?id=${escapeHtml(DATA.CONSULTA.proposicaoId)}">Ver tramitação completa do PL 1215/2025</a>
          </div>
        </header>

        <section class="card stack-3" aria-labelledby="voto-direto-heading">
          <h2 id="voto-direto-heading">Dê sua opinião</h2>

          ${
            state.consulta.voted
              ? `<div class="stack-3" role="status">
                  ${bannerHtml("success", `Voto ${state.consulta.voted} registrado!`, `Participante: ${state.user.name} • ${state.consulta.timestamp}.`)}
                  <div class="protocol-box">
                    <div class="stack-1">
                      <strong>Protocolo oficial: ${escapeHtml(state.consulta.protocol)}</strong>
                      <span class="meta-text">Consulta Pública · ${escapeHtml(DATA.CONSULTA.codigo)}</span>
                    </div>
                    <button type="button" class="btn-primary" id="btn-share-consulta">
                      ${icon(state.consulta.sharedCopied ? "check" : "share")}<span>${state.consulta.sharedCopied ? "Link copiado!" : "Copiar comprovante"}</span>
                    </button>
                  </div>
                  <div style="display:flex; flex-wrap:wrap; gap:var(--space-2); align-items:center;">
                    <button type="button" class="btn-secondary" data-vote-choice="${state.consulta.voted === "SIM" ? "NAO" : "SIM"}">
                      Alterar voto para ${state.consulta.voted === "SIM" ? "NÃO" : "SIM"}
                    </button>
                    <button type="button" class="btn-secondary" data-nav="eventos">Ir para audiência ao vivo</button>
                  </div>
                </div>`
              : `<div class="vote-grid">
                  <button type="button" class="btn-vote btn-vote-sim" data-vote-choice="SIM">
                    ${icon("check")}<span>Votar SIM (A favor)</span>
                  </button>
                  <button type="button" class="btn-vote btn-vote-nao" data-vote-choice="NAO">
                    ${icon("close")}<span>Votar NÃO (Contra)</span>
                  </button>
                </div>`
          }
        </section>

        <section class="card stack-3" aria-labelledby="resultado-parcial-heading">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:var(--space-1);">
            <h2 id="resultado-parcial-heading">Resultado parcial</h2>
            <span class="meta-text">Total: <strong>${formatNumber(total)}</strong> votos</span>
          </div>

          <div class="poll-bar-wrap">
            <div style="display:flex; justify-content:space-between;">
              <strong>SIM (A favor)</strong>
              <span><strong>${formatNumber(state.consulta.simCount)} votos</strong> (${simPct.toFixed(1)}%)</span>
            </div>
            <div class="poll-bar-track" role="progressbar" aria-valuenow="${Math.round(simPct)}" aria-valuemin="0" aria-valuemax="100" aria-label="Votos SIM">
              <div class="poll-bar-fill-sim" style="width:${simPct}%;"></div>
            </div>
          </div>

          <div class="poll-bar-wrap">
            <div style="display:flex; justify-content:space-between;">
              <strong>NÃO (Contra)</strong>
              <span><strong>${formatNumber(state.consulta.naoCount)} votos</strong> (${naoPct.toFixed(1)}%)</span>
            </div>
            <div class="poll-bar-track" role="progressbar" aria-valuenow="${Math.round(naoPct)}" aria-valuemin="0" aria-valuemax="100" aria-label="Votos NÃO">
              <div class="poll-bar-fill-nao" style="width:${naoPct}%;"></div>
            </div>
          </div>
        </section>

        ${
          !state.consulta.voted
            ? `<div class="mobile-vote-bottom-bar" role="region" aria-label="Barra rápida de voto no celular">
                <button type="button" class="btn-vote btn-vote-sim" data-vote-choice="SIM">${icon("check")}<span>SIM</span></button>
                <button type="button" class="btn-vote btn-vote-nao" data-vote-choice="NAO">${icon("close")}<span>NÃO</span></button>
              </div>`
            : ""
        }
      </section>
    `;
  }

  /* ---------- Tela 5B: Eventos Interativos (AF-S01 .. AF-S07) ---------- */

  function renderEventos() {
    const simShell = renderSimulatedStateShell("Eventos Interativos");
    if (simShell) return simShell;

    const currentEvent =
      DATA.EVENTOS.find((e) => e.id === state.eventos.selectedEventId) || DATA.EVENTOS[0];

    if (state.eventos.step === "list") {
      const filteredEvents = DATA.EVENTOS.filter(function (ev) {
        if (state.eventos.filterComissao !== "todas" && ev.comissaoSigla !== state.eventos.filterComissao) return false;
        if (state.eventos.filterStatus !== "todos" && ev.status !== state.eventos.filterStatus) return false;
        return true;
      });

      return `
        <section class="stack-4">
          <header class="page-intro">
            <h1>Eventos Interativos e Audiências Públicas</h1>
            <p>Acompanhe transmissões das comissões e envie comentários ou perguntas aos oradores.</p>
          </header>

          <div class="card stack-2">
            <div style="display:flex; flex-wrap:wrap; gap:var(--space-2); align-items:flex-end;">
              <div class="field-group" style="min-width:200px; flex:1;">
                <label for="ev-filter-comissao" class="field-label">Comissão</label>
                <select id="ev-filter-comissao" class="select-control">
                  <option value="todas" ${state.eventos.filterComissao === "todas" ? "selected" : ""}>Todas as comissões</option>
                  <option value="CRA" ${state.eventos.filterComissao === "CRA" ? "selected" : ""}>CRA — Agricultura e Reforma Agrária</option>
                  <option value="CCJ" ${state.eventos.filterComissao === "CCJ" ? "selected" : ""}>CCJ — Constituição e Justiça</option>
                  <option value="CAS" ${state.eventos.filterComissao === "CAS" ? "selected" : ""}>CAS — Assuntos Sociais</option>
                </select>
              </div>
              <div class="field-group" style="min-width:200px; flex:1;">
                <label for="ev-filter-status" class="field-label">Situação</label>
                <select id="ev-filter-status" class="select-control">
                  <option value="todos" ${state.eventos.filterStatus === "todos" ? "selected" : ""}>Todas as situações</option>
                  <option value="AO VIVO" ${state.eventos.filterStatus === "AO VIVO" ? "selected" : ""}>Ao vivo agora</option>
                  <option value="AGENDADA" ${state.eventos.filterStatus === "AGENDADA" ? "selected" : ""}>Agendadas / Inscrições abertas</option>
                  <option value="ENCERRADA" ${state.eventos.filterStatus === "ENCERRADA" ? "selected" : ""}>Encerradas (gravação)</option>
                </select>
              </div>
            </div>
          </div>

          <div class="stack-2">
            ${
              filteredEvents.length === 0
                ? `<div class="card stack-2"><p>Nenhum evento encontrado com os filtros selecionados.</p><div><button type="button" class="btn-secondary" id="btn-reset-ev-filters">Mostrar todos os eventos</button></div></div>`
                : filteredEvents
                    .map(function (ev) {
                      return `
                        <article class="card stack-2">
                          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:var(--space-1);">
                            <div style="display:flex; gap:var(--space-1); flex-wrap:wrap; align-items:center;">
                              ${badgeHtml(ev.statusLabel, ev.statusTone)}
                              <span class="meta-text" style="font-weight:600;">${escapeHtml(ev.comissaoCompleta)}</span>
                            </div>
                            <span class="meta-text">${escapeHtml(ev.dataHorario)}</span>
                          </div>
                          <h2 class="h3">${escapeHtml(ev.titulo)}</h2>
                          <p class="meta-text">${escapeHtml(ev.pautaResumo)}</p>
                          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:var(--space-2);">
                            <span class="aux-text">${ev.participantes} acompanhando • ${escapeHtml(ev.local)}</span>
                            <button type="button" class="${ev.status === "AO VIVO" ? "btn-primary" : "btn-secondary"}" data-open-event="${escapeHtml(ev.id)}">
                              ${ev.status === "AO VIVO" ? "Entrar na audiência ao vivo" : "Abrir evento"}
                            </button>
                          </div>
                        </article>
                      `;
                    })
                    .join("")
            }
          </div>
        </section>
      `;
    }

    const stepHeader = `
      <header class="stack-2">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:var(--space-1);">
          <button type="button" class="btn-secondary" id="btn-ev-back-list">${icon("arrow-left")}<span>Todos os eventos</span></button>
          ${badgeHtml(currentEvent.statusLabel, currentEvent.statusTone)}
        </div>
        <h1>${escapeHtml(currentEvent.titulo)}</h1>
        <p class="meta-text">${escapeHtml(currentEvent.comissaoCompleta)} • ${escapeHtml(currentEvent.dataHorario)}</p>
      </header>
    `;

    if (state.eventos.step === "room") {
      return `
        <section class="stack-4">
          ${stepHeader}
          <div class="grid-12">
            <div class="col-8 stack-3">
              <div class="video-player-mock">
                <div class="video-stage">
                  <div class="stack-1" style="padding:var(--space-2);">
                    <strong>${escapeHtml(currentEvent.proposicaoCodigo)} — Transmissão da ${escapeHtml(currentEvent.comissaoSigla)}</strong>
                    <span class="aux-text" style="color:#E2EAF4;">${currentEvent.participantes} participantes acompanhando • Legendas e VLibras</span>
                  </div>
                  <div class="video-caption-overlay">
                    "O prazo de carência estendido visa proteger cooperativas da agricultura familiar afetadas por perdas climáticas." — Sen. Carlos Silva
                  </div>
                </div>
                <div class="video-controls-bar">
                  <button type="button" class="btn-primary" id="btn-ev-start-participate" style="background: var(--color-accent); color:#002B49; border-color:var(--color-accent);">
                    ${icon("transcript")}<span>Enviar comentário ou pergunta</span>
                  </button>
                  <button type="button" class="video-ctrl-btn" id="btn-ev-vlibras">${icon("vlibras")}<span>VLibras</span></button>
                </div>
              </div>

              <div class="card stack-2">
                <h2 class="h3">Participações recentes</h2>
                ${
                  currentEvent.perguntasRecentes.length === 0
                    ? `<p class="meta-text">Nenhuma pergunta publicada ainda.</p>`
                    : currentEvent.perguntasRecentes
                        .map(
                          (q) => `<div class="card card-muted stack-1">
                            <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:var(--space-1);">
                              <strong>${escapeHtml(q.autor)}</strong>
                              ${badgeHtml(q.status, q.status.includes("Lida") ? "success" : "info")}
                            </div>
                            <span class="aux-text">${escapeHtml(q.tipo)} → ${escapeHtml(q.destinatario)}</span>
                            <p class="meta-text">${escapeHtml(q.texto)}</p>
                          </div>`
                        )
                        .join("")
                }
              </div>
            </div>

            <aside class="col-4 card stack-2" style="align-self:start;">
              <h2 class="h3">Oradores e Mesa Diretora</h2>
              <div class="stack-2">
                ${currentEvent.oradores
                  .map(
                    (o) => `<div class="speaker-list-item stack-1">
                      <strong>${escapeHtml(o.nome)}</strong>
                      <span class="meta-text">${escapeHtml(o.cargoDetalhado)}</span>
                    </div>`
                  )
                  .join("")}
              </div>
            </aside>
          </div>
        </section>
      `;
    }

    if (state.eventos.step === "form") {
      const draft = state.eventos.draft;
      const textareaDisabled = !draft.tipo;
      const selectedSpeaker = currentEvent.oradores.find((o) => o.id === draft.oradorId);

      return `
        <section class="stack-4 narrow-measure">
          ${stepHeader}
          <div class="card stack-4">
            <h2>Enviar participação cidadã</h2>

            ${
              draft.inlineError
                ? bannerHtml("error", "Corrija antes de continuar:", draft.inlineError)
                : ""
            }

            <fieldset class="stack-2" style="border:none; padding:0; margin:0;">
              <legend class="field-label">1. Tipo de participação (escolha antes de digitar)</legend>
              <div class="grid-12">
                <label class="col-6 radio-card ${draft.tipo === "comentario" ? "is-selected" : ""}">
                  <input type="radio" name="ev-tipo" value="comentario" ${draft.tipo === "comentario" ? "checked" : ""} />
                  <span>
                    <strong>Comentário geral</strong>
                    <span class="meta-text" style="display:block;">Registro geral para a audiência.</span>
                  </span>
                </label>
                <label class="col-6 radio-card ${draft.tipo === "pergunta" ? "is-selected" : ""}">
                  <input type="radio" name="ev-tipo" value="pergunta" ${draft.tipo === "pergunta" ? "checked" : ""} />
                  <span>
                    <strong>Pergunta a Orador</strong>
                    <span class="meta-text" style="display:block;">Direcionada a um orador da mesa.</span>
                  </span>
                </label>
              </div>
            </fieldset>

            ${
              draft.tipo === "pergunta"
                ? `<div class="field-group">
                    <label for="ev-speaker-select" class="field-label">2. Destinatário obrigatório</label>
                    <select id="ev-speaker-select" class="select-control" aria-invalid="${String(Boolean(draft.inlineError && !draft.oradorId))}">
                      <option value="">-- Selecione um orador da mesa --</option>
                      ${currentEvent.oradores
                        .map(
                          (o) => `<option value="${escapeHtml(o.id)}" ${draft.oradorId === o.id ? "selected" : ""}>${escapeHtml(o.nome)} — ${escapeHtml(o.cargoDetalhado)}</option>`
                        )
                        .join("")}
                    </select>
                    ${
                      selectedSpeaker
                        ? `<p class="aux-text">Selecionado: <strong>${escapeHtml(selectedSpeaker.nome)}</strong></p>`
                        : ""
                    }
                  </div>`
                : ""
            }

            <div class="field-group">
              <label for="ev-question-textarea" class="field-label">${draft.tipo === "pergunta" ? "3." : "2."} Mensagem (até 500 caracteres)</label>
              <textarea id="ev-question-textarea" class="textarea-control" maxlength="500" ${textareaDisabled ? "disabled" : ""} placeholder="${
                textareaDisabled
                  ? "Selecione primeiro Comentário geral ou Pergunta a Orador acima..."
                  : "Escreva sua pergunta ou comentário..."
              }">${escapeHtml(draft.texto)}</textarea>
              <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:var(--space-1);">
                <span class="aux-text">${
                  textareaDisabled
                    ? "Escolha o tipo de participação acima para liberar o texto."
                    : "Seu rascunho permanece salvo durante o login."
                }</span>
                <span class="aux-text" id="ev-char-counter">${draft.texto.length}/500</span>
              </div>
            </div>

            <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:var(--space-2);">
              <button type="button" class="btn-secondary" id="btn-ev-back-room">Voltar à sala</button>
              <div style="display:flex; gap:var(--space-1); flex-wrap:wrap;">
                <button type="button" class="btn-secondary" id="btn-ev-fill-sample">Preencher exemplo</button>
                <button type="button" class="btn-primary" id="btn-ev-continue-auth">Continuar</button>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (state.eventos.step === "auth") {
      const draft = state.eventos.draft;
      const speaker = currentEvent.oradores.find((o) => o.id === draft.oradorId);

      return `
        <section class="stack-4 narrow-measure">
          ${stepHeader}
          <div class="card stack-4">
            <h2>Identificação via gov.br</h2>

            ${bannerHtml(
              "success",
              "✔ Seu texto e o destinatário serão mantidos",
              "Após entrar no gov.br, você segue direto para a revisão final."
            )}

            <div class="card card-muted stack-1">
              <p class="meta-text"><strong>Tipo:</strong> ${draft.tipo === "pergunta" ? "Pergunta a Orador" : "Comentário geral"}</p>
              ${speaker ? `<p class="meta-text"><strong>Destinatário:</strong> ${escapeHtml(speaker.nome)} (${escapeHtml(speaker.cargoCurto)})</p>` : ""}
              <p class="meta-text"><strong>Texto:</strong> "${escapeHtml(draft.texto)}"</p>
            </div>

            <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:var(--space-2);">
              <button type="button" class="btn-secondary" id="btn-ev-auth-back">Voltar</button>
              <button type="button" class="btn-primary" id="btn-ev-auth-confirm">
                ${icon("shield")}<span>Entrar como ${escapeHtml(DEFAULT_USER.name)} (gov.br)</span>
              </button>
            </div>
          </div>
        </section>
      `;
    }

    if (state.eventos.step === "review") {
      const draft = state.eventos.draft;
      const speaker = currentEvent.oradores.find((o) => o.id === draft.oradorId);

      return `
        <section class="stack-4 narrow-measure">
          ${stepHeader}
          <div class="card stack-4">
            <h2>Revise sua participação antes de enviar</h2>

            <dl class="card card-muted metadata-dl">
              <div><dt>Participante</dt><dd>${escapeHtml(state.user.name)}</dd></div>
              <div><dt>Tipo</dt><dd>${draft.tipo === "pergunta" ? "Pergunta a Orador" : "Comentário geral"}</dd></div>
              ${
                draft.tipo === "pergunta"
                  ? `<div><dt>Destinatário</dt><dd>${speaker ? `${escapeHtml(speaker.nome)} — ${escapeHtml(speaker.cargoDetalhado)}` : "Não selecionado"}</dd></div>`
                  : ""
              }
              <div><dt>Mensagem</dt><dd>${escapeHtml(draft.texto)}</dd></div>
            </dl>

            <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:var(--space-2);">
              <button type="button" class="btn-secondary" id="btn-ev-review-edit">
                ${icon("arrow-left")}<span>Editar destinatário ou texto</span>
              </button>
              <button type="button" class="btn-primary" id="btn-ev-submit-final">
                ${icon("check")}<span>Confirmar e enviar</span>
              </button>
            </div>
          </div>
        </section>
      `;
    }

    const sub = state.eventos.submission;
    const draft = state.eventos.draft;
    const speaker = currentEvent.oradores.find((o) => o.id === draft.oradorId);

    return `
      <section class="stack-4 narrow-measure">
        ${stepHeader}
        <div class="card stack-4" role="status">
          ${bannerHtml("success", "Participação registrada!", `Protocolo oficial ${sub.protocol} gerado.`)}

          <div class="protocol-box">
            <div class="stack-1">
              <strong>Protocolo: ${escapeHtml(sub.protocol)}</strong>
              <span class="meta-text">Enviado em ${escapeHtml(sub.submittedAt || "11/10/2026 às 14h34")}</span>
            </div>
            <div>
              ${
                sub.status === "lida"
                  ? badgeHtml("✔ Lida pela mesa", "success", "check")
                  : badgeHtml("● Em moderação", "warning", "clock")
              }
            </div>
          </div>

          <div class="card card-muted stack-1">
            <p class="meta-text"><strong>Destino:</strong> ${draft.tipo === "pergunta" ? "Pergunta a Orador" : "Comentário geral"}${speaker ? ` → ${escapeHtml(speaker.nome)}` : ""}</p>
            <p class="meta-text">"${escapeHtml(draft.texto)}"</p>
          </div>

          <div style="display:flex; flex-wrap:wrap; gap:var(--space-2);">
            <button type="button" class="btn-primary" id="btn-ev-copy-group">
              ${icon(sub.linkCopied ? "check" : "share")}<span>${sub.linkCopied ? "Link copiado!" : "Copiar link para o grupo"}</span>
            </button>
            <button type="button" class="btn-secondary" id="btn-ev-toggle-status">
              ${sub.status === "moderacao" ? "Simular leitura pela mesa" : "Voltar para Em moderação"}
            </button>
            <button type="button" class="btn-secondary" id="btn-ev-new-submission">Enviar outra</button>
          </div>
        </div>
      </section>
    `;
  }

  /* ---------- Tela 6: Acessibilidade e Alto Contraste ---------- */

  function renderAcessibilidade() {
    const simShell = renderSimulatedStateShell("Acessibilidade e alto contraste");
    if (simShell) return simShell;

    const screensChecklist = [
      { route: "home", title: "1. Página inicial", note: "Atalhos principais e notícias" },
      { route: "busca?q=jornada+de+trabalho", title: "2. Busca e resultados", note: "Abas, filtros e paginação" },
      { route: "proposicao?id=PL-5253-2026", title: "3. Ficha da proposição", note: "Glossário cidadão e linha do tempo" },
      { route: "comissoes", title: "4. Comissões (CCJ / CRA)", note: "Pauta, legendas e transcrição" },
      { route: "consulta", title: "5A. Consulta pública", note: "Voto SIM/NÃO no PL 1215/2025" },
      { route: "eventos", title: "5B. Eventos Interativos", note: "Audiência ao vivo com envio de pergunta" }
    ];

    return `
      <section class="stack-4">
        <header class="page-intro">
          <h1>Acessibilidade e Alto Contraste</h1>
          <p>Atalhos por teclado, ampliação de fonte, VLibras e tema de alto contraste (#000000 / #FFFF00) disponíveis em todo o portal.</p>
          <div style="display:flex; flex-wrap:wrap; gap:var(--space-2); padding-top: var(--space-1);">
            <button type="button" class="btn-primary" id="btn-a11y-toggle-hc">
              ${icon("contrast")}<span>${state.highContrast ? "Desativar Alto Contraste (Alt+C)" : "Ativar Alto Contraste (Alt+C)"}</span>
            </button>
            <button type="button" class="btn-secondary" id="btn-a11y-vlibras">${icon("vlibras")}<span>Testar VLibras</span></button>
          </div>
        </header>

        <div class="grid-12">
          <section class="col-6 card stack-3">
            <h2>Atalhos de teclado</h2>
            <ul class="stack-2 meta-text" style="padding-left:20px;">
              <li><strong>Alt + 1:</strong> Conteúdo principal.</li>
              <li><strong>Alt + 2:</strong> Menu de navegação.</li>
              <li><strong>Alt + 3:</strong> Busca no cabeçalho.</li>
              <li><strong>Alt + 4:</strong> Rodapé.</li>
              <li><strong>Alt + C:</strong> Alternar Alto Contraste (${state.highContrast ? "Alto Contraste LIGADO" : "Desligado"}).</li>
              <li><strong>Esc:</strong> Fechar janelas e glossário.</li>
            </ul>
          </section>

          <section class="col-6 card stack-3">
            <h2>Telas do portal</h2>
            <div class="stack-1">
              ${screensChecklist
                .map(
                  (item) => `<div class="card card-muted" style="display:flex; justify-content:space-between; align-items:center; gap:var(--space-2);">
                    <div>
                      <strong>${escapeHtml(item.title)}</strong>
                      <div class="aux-text">${escapeHtml(item.note)}</div>
                    </div>
                    <button type="button" class="btn-secondary" data-nav="${escapeHtml(item.route)}">Abrir</button>
                  </div>`
                )
                .join("")}
            </div>
          </section>
        </div>
      </section>
    `;
  }

  /* ---------- Renderizador Principal e Bind de Eventos de Tela ---------- */

  function render() {
    const main = document.getElementById("main-content");
    if (!main) return;

    syncAccessibilityUI();
    renderBreadcrumb();

    const views = {
      home: renderHome,
      busca: renderBusca,
      proposicao: renderProposicao,
      comissoes: renderComissoes,
      consulta: renderConsulta,
      eventos: renderEventos,
      acessibilidade: renderAcessibilidade
    };

    const renderer = views[state.route] || renderHome;
    main.innerHTML = renderer();
    bindMainListeners();
  }

  function bindMainListeners() {
    const retryBtn = document.getElementById("btn-retry-sim");
    if (retryBtn) {
      retryBtn.addEventListener("click", function () {
        state.simState = "normal";
        render();
        announce("Conteúdo restaurado para o estado normal.");
      });
    }

    document.querySelectorAll("[data-nav]").forEach(function (el) {
      if (el.dataset.navBound) return;
      el.dataset.navBound = "true";
      el.addEventListener("click", function (ev) {
        if (ev.target && ev.target.closest("a[data-nav]") && el !== ev.target.closest("a[data-nav]")) {
          return;
        }
        ev.preventDefault();
        navigate(el.getAttribute("data-nav"));
      });
      if (el.tagName === "ARTICLE") {
        el.addEventListener("keydown", function (ev) {
          if (ev.key === "Enter" || ev.key === " ") {
            ev.preventDefault();
            navigate(el.getAttribute("data-nav"));
          }
        });
      }
    });

    /* Tela 2: Busca */
    const pageSearchForm = document.getElementById("page-search-form");
    if (pageSearchForm) {
      pageSearchForm.addEventListener("submit", function (ev) {
        ev.preventDefault();
        const input = document.getElementById("page-search-input");
        state.search.q = input ? input.value : "";
        state.search.page = 1;
        render();
      });
    }

    document.querySelectorAll("[data-search-tab]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.search.tab = btn.getAttribute("data-search-tab");
        state.search.page = 1;
        render();
      });
    });

    const toggleMobileFilters = document.getElementById("btn-toggle-mobile-filters");
    if (toggleMobileFilters) {
      toggleMobileFilters.addEventListener("click", function () {
        state.search.filtersOpenMobile = !state.search.filtersOpenMobile;
        render();
      });
    }

    function clearSearchFilters() {
      state.search.period = "todos";
      state.search.tipo = "todos";
      state.search.situacao = "todos";
      state.search.tab = "todos";
      state.search.page = 1;
      render();
      announce("Filtros da busca limpos.");
    }

    const clearBtn = document.getElementById("btn-clear-filters");
    if (clearBtn) clearBtn.addEventListener("click", clearSearchFilters);
    const clearEmptyBtn = document.getElementById("btn-clear-filters-empty");
    if (clearEmptyBtn) {
      clearEmptyBtn.addEventListener("click", function () {
        state.search.q = "jornada de trabalho";
        clearSearchFilters();
      });
    }

    document.querySelectorAll("[data-filter-period]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.search.period = btn.getAttribute("data-filter-period");
        state.search.page = 1;
        render();
      });
    });
    document.querySelectorAll("[data-filter-tipo]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.search.tipo = btn.getAttribute("data-filter-tipo");
        state.search.page = 1;
        render();
      });
    });
    document.querySelectorAll("[data-filter-sit]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.search.situacao = btn.getAttribute("data-filter-sit");
        state.search.page = 1;
        render();
      });
    });

    const sortSelect = document.getElementById("search-sort-select");
    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        state.search.sort = sortSelect.value;
        state.search.page = 1;
        render();
      });
    }

    document.querySelectorAll("[data-page]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const nextPage = Number(btn.getAttribute("data-page"));
        if (Number.isFinite(nextPage) && nextPage >= 1) {
          state.search.page = nextPage;
          render();
          announce(`Página ${nextPage} carregada.`);
        }
      });
    });

    /* Tela 3: Proposição */
    document.querySelectorAll("[data-glossary]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const key = btn.getAttribute("data-glossary");
        state.proposicao.glossaryKey = state.proposicao.glossaryKey === key ? null : key;
        render();
      });
    });

    const closeGlossaryBtn = document.getElementById("btn-close-glossary");
    if (closeGlossaryBtn) {
      closeGlossaryBtn.addEventListener("click", function () {
        state.proposicao.glossaryKey = null;
        render();
      });
    }

    const statusHelpBtn = document.getElementById("btn-toggle-status-help");
    if (statusHelpBtn) {
      statusHelpBtn.addEventListener("click", function () {
        state.proposicao.statusHelpOpen = !state.proposicao.statusHelpOpen;
        render();
      });
    }

    const copyPropBtn = document.getElementById("btn-copy-prop-link");
    if (copyPropBtn) {
      copyPropBtn.addEventListener("click", function () {
        copyToClipboard(window.location.href, "Link oficial da proposição copiado.");
        state.proposicao.linkCopied = true;
        render();
      });
    }

    const propVlibras = document.getElementById("btn-prop-vlibras");
    if (propVlibras) {
      propVlibras.addEventListener("click", function () {
        const prop = DATA.PROPOSICOES.find((p) => p.id === state.proposicao.id) || DATA.PROPOSICOES[0];
        openVlibras(`Traduzindo em Libras: ${prop.codigo} — ${prop.ementa}`);
      });
    }

    document.querySelectorAll("[data-prop-tab]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.proposicao.tab = btn.getAttribute("data-prop-tab");
        render();
      });
    });

    document.querySelectorAll("[data-download-doc]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const prop = DATA.PROPOSICOES.find((p) => p.id === state.proposicao.id) || DATA.PROPOSICOES[0];
        const idx = Number(btn.getAttribute("data-download-doc")) || 0;
        const doc = prop.textos[idx] || prop.textos[0];
        openModal({
          title: doc.titulo,
          bodyHtml: `
            ${bannerHtml("info", "Documento legislativo acessível:", `${doc.tipo} • ${doc.tamanho} • Publicado em ${doc.data}`)}
            <p class="reading-measure" style="margin-top:var(--space-2);">
              Pré-visualização do texto integral de <strong>${escapeHtml(prop.codigo)}</strong>: ${escapeHtml(prop.ementa)}
            </p>
          `,
          footerHtml: `<button type="button" class="btn-primary" id="modal-close-doc">Fechar visualização</button>`,
          onMount: function () {
            document.getElementById("modal-close-doc").addEventListener("click", closeModal);
          }
        });
      });
    });

    /* Tela 4: Comissões */
    document.querySelectorAll("[data-comissao-sigla]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const sigla = btn.getAttribute("data-comissao-sigla");
        state.comissoes.sigla = sigla;
        state.comissoes.meetingId = DATA.COMISSOES[sigla].reunioes[0].id;
        state.comissoes.tipo = DATA.COMISSOES[sigla].reunioes[0].tipo;
        render();
      });
    });

    document.querySelectorAll("[data-comissao-tipo]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.comissoes.tipo = btn.getAttribute("data-comissao-tipo");
        const com = DATA.COMISSOES[state.comissoes.sigla];
        const firstMatch = com.reunioes.find((m) => m.tipo === state.comissoes.tipo);
        if (firstMatch) state.comissoes.meetingId = firstMatch.id;
        render();
      });
    });

    const dateFilterInput = document.getElementById("comissao-date-filter");
    if (dateFilterInput) {
      dateFilterInput.addEventListener("input", function () {
        state.comissoes.dateFilter = dateFilterInput.value;
        render();
        const refocused = document.getElementById("comissao-date-filter");
        if (refocused) {
          refocused.focus();
          refocused.setSelectionRange(refocused.value.length, refocused.value.length);
        }
      });
    }

    document.querySelectorAll("[data-meeting-id]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.comissoes.meetingId = btn.getAttribute("data-meeting-id");
        state.comissoes.playing = false;
        render();
      });
    });

    const btnPlay = document.getElementById("btn-video-play");
    if (btnPlay) {
      btnPlay.addEventListener("click", function () {
        state.comissoes.playing = !state.comissoes.playing;
        render();
        announce(state.comissoes.playing ? "Reprodução da reunião iniciada." : "Reprodução pausada.");
      });
    }

    const btnCC = document.getElementById("btn-video-cc");
    if (btnCC) {
      btnCC.addEventListener("click", function () {
        state.comissoes.captionsOn = !state.comissoes.captionsOn;
        render();
      });
    }

    const btnTrans = document.getElementById("btn-video-transcript");
    if (btnTrans) {
      btnTrans.addEventListener("click", function () {
        state.comissoes.transcriptOpen = !state.comissoes.transcriptOpen;
        render();
      });
    }

    const btnVidVlibras = document.getElementById("btn-video-vlibras");
    if (btnVidVlibras) {
      btnVidVlibras.addEventListener("click", function () {
        openVlibras("Intérprete VLibras sincronizado com a transmissão da comissão.");
      });
    }

    /* Tela 5A: Consulta Pública */
    document.querySelectorAll("[data-vote-choice]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openConsultaVoteModal(btn.getAttribute("data-vote-choice"));
      });
    });

    const shareConsultaBtn = document.getElementById("btn-share-consulta");
    if (shareConsultaBtn) {
      shareConsultaBtn.addEventListener("click", function () {
        copyToClipboard(
          `Votei ${state.consulta.voted} no ${DATA.CONSULTA.codigo} pelo Portal do Senado (${state.consulta.protocol}).`,
          "Comprovante copiado para compartilhamento."
        );
        state.consulta.sharedCopied = true;
        render();
      });
    }

    /* Tela 5B: Eventos Interativos (AF-S01 .. AF-S07) */
    const evFilterCom = document.getElementById("ev-filter-comissao");
    if (evFilterCom) {
      evFilterCom.addEventListener("change", function () {
        state.eventos.filterComissao = evFilterCom.value;
        render();
      });
    }

    const evFilterSt = document.getElementById("ev-filter-status");
    if (evFilterSt) {
      evFilterSt.addEventListener("change", function () {
        state.eventos.filterStatus = evFilterSt.value;
        render();
      });
    }

    const resetEvFilters = document.getElementById("btn-reset-ev-filters");
    if (resetEvFilters) {
      resetEvFilters.addEventListener("click", function () {
        state.eventos.filterComissao = "todas";
        state.eventos.filterStatus = "todos";
        render();
      });
    }

    document.querySelectorAll("[data-open-event]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.eventos.selectedEventId = btn.getAttribute("data-open-event");
        state.eventos.step = "room";
        render();
      });
    });

    const btnEvBackList = document.getElementById("btn-ev-back-list");
    if (btnEvBackList) {
      btnEvBackList.addEventListener("click", function () {
        state.eventos.step = "list";
        render();
      });
    }

    const btnStartPart = document.getElementById("btn-ev-start-participate");
    if (btnStartPart) {
      btnStartPart.addEventListener("click", function () {
        state.eventos.step = "form";
        state.eventos.draft.inlineError = "";
        render();
      });
    }

    const btnEvVlibras = document.getElementById("btn-ev-vlibras");
    if (btnEvVlibras) {
      btnEvVlibras.addEventListener("click", function () {
        openVlibras("Tradução em Libras ativada para a Audiência Pública da CRA sobre o PL 1215/2025.");
      });
    }

    document.querySelectorAll('input[name="ev-tipo"]').forEach(function (radio) {
      radio.addEventListener("change", function () {
        state.eventos.draft.tipo = radio.value;
        if (radio.value === "comentario") {
          state.eventos.draft.oradorId = "";
        }
        state.eventos.draft.inlineError = "";
        render();
        const ta = document.getElementById("ev-question-textarea");
        if (ta && !ta.disabled) ta.focus();
      });
    });

    const speakerSel = document.getElementById("ev-speaker-select");
    if (speakerSel) {
      speakerSel.addEventListener("change", function () {
        state.eventos.draft.oradorId = speakerSel.value;
        state.eventos.draft.inlineError = "";
      });
    }

    const evTextarea = document.getElementById("ev-question-textarea");
    if (evTextarea) {
      evTextarea.addEventListener("input", function () {
        state.eventos.draft.texto = evTextarea.value;
        const counter = document.getElementById("ev-char-counter");
        if (counter) counter.textContent = `${evTextarea.value.length}/500 caracteres`;
      });
    }

    const btnFillSample = document.getElementById("btn-ev-fill-sample");
    if (btnFillSample) {
      btnFillSample.addEventListener("click", function () {
        if (!state.eventos.draft.tipo) state.eventos.draft.tipo = "pergunta";
        state.eventos.draft.texto =
          "Gostaria de saber do senhor relator como serão garantidos os prazos do crédito emergencial para cooperativas da agricultura familiar.";
        state.eventos.draft.inlineError = "";
        render();
        announce("Texto de exemplo preenchido.");
      });
    }

    const btnBackRoom = document.getElementById("btn-ev-back-room");
    if (btnBackRoom) {
      btnBackRoom.addEventListener("click", function () {
        state.eventos.step = "room";
        render();
      });
    }

    const btnContinueAuth = document.getElementById("btn-ev-continue-auth");
    if (btnContinueAuth) {
      btnContinueAuth.addEventListener("click", function () {
        const draft = state.eventos.draft;
        if (!draft.tipo) {
          draft.inlineError = "Escolha se deseja enviar um Comentário geral ou uma Pergunta a Orador.";
          render();
          return;
        }
        if (draft.tipo === "pergunta" && !draft.oradorId) {
          draft.inlineError = "Escolha um destinatário para enviar uma pergunta a orador";
          render();
          const sel = document.getElementById("ev-speaker-select");
          if (sel) sel.focus();
          return;
        }
        if (!draft.texto.trim()) {
          draft.inlineError = "Escreva sua mensagem antes de continuar.";
          render();
          const ta = document.getElementById("ev-question-textarea");
          if (ta) ta.focus();
          return;
        }
        draft.inlineError = "";
        state.eventos.step = state.user.loggedIn ? "review" : "auth";
        render();
      });
    }

    const btnEvAuthBack = document.getElementById("btn-ev-auth-back");
    if (btnEvAuthBack) {
      btnEvAuthBack.addEventListener("click", function () {
        state.eventos.step = "form";
        render();
      });
    }

    const btnEvAuthConfirm = document.getElementById("btn-ev-auth-confirm");
    if (btnEvAuthConfirm) {
      btnEvAuthConfirm.addEventListener("click", function () {
        state.user.loggedIn = true;
        state.eventos.step = "review";
        syncAccessibilityUI();
        render();
        announce("Autenticado com sucesso. Texto e destinatário mantidos na tela de revisão.");
      });
    }

    const btnReviewEdit = document.getElementById("btn-ev-review-edit");
    if (btnReviewEdit) {
      btnReviewEdit.addEventListener("click", function () {
        state.eventos.step = "form";
        render();
      });
    }

    const btnSubmitFinal = document.getElementById("btn-ev-submit-final");
    if (btnSubmitFinal) {
      btnSubmitFinal.addEventListener("click", function () {
        state.eventos.submission = {
          protocol: "CRA-2026-0842",
          submittedAt: "11/10/2026 às 14h34",
          status: "moderacao",
          linkCopied: false
        };
        state.eventos.step = "receipt";
        render();
        announce("Participação enviada com protocolo CRA-2026-0842.");
      });
    }

    const btnCopyGroup = document.getElementById("btn-ev-copy-group");
    if (btnCopyGroup) {
      btnCopyGroup.addEventListener("click", function () {
        copyToClipboard(
          `Acompanhe minha participação na CRA (${state.eventos.submission.protocol}) sobre o PL 1215/2025: ${window.location.href}`,
          "Link copiado para o grupo."
        );
        state.eventos.submission.linkCopied = true;
        render();
      });
    }

    const btnToggleModStatus = document.getElementById("btn-ev-toggle-status");
    if (btnToggleModStatus) {
      btnToggleModStatus.addEventListener("click", function () {
        state.eventos.submission.status =
          state.eventos.submission.status === "moderacao" ? "lida" : "moderacao";
        render();
        announce(
          state.eventos.submission.status === "lida"
            ? "Status atualizado para Lida pela mesa."
            : "Status alterado para Em moderação."
        );
      });
    }

    const btnNewSubmission = document.getElementById("btn-ev-new-submission");
    if (btnNewSubmission) {
      btnNewSubmission.addEventListener("click", function () {
        state.eventos.draft = { tipo: "", oradorId: "", texto: "", inlineError: "" };
        state.eventos.step = "form";
        render();
      });
    }

    /* Tela 6: Acessibilidade */
    const btnA11yHc = document.getElementById("btn-a11y-toggle-hc");
    if (btnA11yHc) btnA11yHc.addEventListener("click", function () { toggleHighContrast(); });

    const btnA11yVlibras = document.getElementById("btn-a11y-vlibras");
    if (btnA11yVlibras) {
      btnA11yVlibras.addEventListener("click", function () {
        openVlibras("VLibras demonstrado na página de Acessibilidade do Senado Federal.");
      });
    }
  }

  /* ---------- Inicialização de Eventos Globais ---------- */

  function bindGlobalChrome() {
    document.querySelectorAll("[data-skip]").forEach(function (link) {
      link.addEventListener("click", function (ev) {
        ev.preventDefault();
        const target = link.getAttribute("data-skip");
        const map = {
          main: "#main-content",
          nav: "#primary-nav",
          search: "#universal-search-input",
          footer: "#site-footer"
        };
        const el = document.querySelector(map[target] || "#main-content");
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
          el.focus();
        }
      });
    });

    document.getElementById("btn-a11y-page")?.addEventListener("click", function () {
      navigate("acessibilidade");
    });
    document.getElementById("btn-contrast")?.addEventListener("click", function () {
      toggleHighContrast();
    });
    document.getElementById("btn-vlibras")?.addEventListener("click", function () {
      if (state.vlibrasOpen) {
        state.vlibrasOpen = false;
        syncAccessibilityUI();
      } else {
        openVlibras();
      }
    });
    document.getElementById("btn-close-vlibras")?.addEventListener("click", function () {
      state.vlibrasOpen = false;
      syncAccessibilityUI();
    });
    document.getElementById("btn-font-dec")?.addEventListener("click", function () { changeFontScale(-0.1); });
    document.getElementById("btn-font-reset")?.addEventListener("click", function () { changeFontScale("reset"); });
    document.getElementById("btn-font-inc")?.addEventListener("click", function () { changeFontScale(0.1); });

    document.getElementById("btn-header-auth")?.addEventListener("click", openHeaderAuthModal);
    document.getElementById("btn-mobile-menu")?.addEventListener("click", openMobileDrawer);
    document.getElementById("btn-close-mobile-menu")?.addEventListener("click", closeMobileDrawer);

    document.getElementById("universal-search-form")?.addEventListener("submit", function (ev) {
      ev.preventDefault();
      const input = document.getElementById("universal-search-input");
      const query = input ? input.value.trim() : "";
      state.search.q = query;
      state.search.tab = "todos";
      state.search.page = 1;
      navigate(`busca?q=${encodeURIComponent(query)}`);
    });

    document.querySelectorAll(".nav-trigger[data-menu]").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        toggleDropdown(trigger.getAttribute("data-menu"));
      });
    });

    document.addEventListener("click", function (ev) {
      if (!ev.target.closest("#primary-nav")) {
        closeAllDropdowns();
      }
    });

    document.getElementById("btn-modal-close")?.addEventListener("click", closeModal);
    document.getElementById("app-modal")?.addEventListener("click", function (ev) {
      if (ev.target && ev.target.id === "app-modal") closeModal();
    });

    /* Controles do avaliador (rodapé) */
    document.querySelectorAll("[data-sim]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const sim = btn.getAttribute("data-sim");
        if (sim === "hc") {
          toggleHighContrast();
          return;
        }
        state.simState = sim;
        render();
        announce(`Estado da tela alterado para ${sim}.`);
      });
    });

    document.querySelectorAll("[data-scenario]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const sc = btn.getAttribute("data-scenario");
        state.simState = "normal";
        if (sc === "reset") {
          state.user = { ...DEFAULT_USER };
          state.highContrast = false;
          state.fontScale = 1;
          state.consulta.voted = null;
          state.consulta.simCount = DATA.CONSULTA.initialSim;
          state.consulta.naoCount = DATA.CONSULTA.initialNao;
          state.eventos.draft = { tipo: "", oradorId: "", texto: "", inlineError: "" };
          state.eventos.step = "list";
          navigate("home");
          announce("Protótipo reiniciado para o estado inicial.");
          return;
        }
        if (sc === "af-t1") {
          state.user.loggedIn = false;
          state.eventos.filterComissao = "todas";
          state.eventos.filterStatus = "todos";
          state.eventos.step = "list";
          navigate("eventos?step=list");
        } else if (sc === "af-t2") {
          state.user.loggedIn = false;
          state.eventos.selectedEventId = "cra-pl-1215-2025";
          state.eventos.draft = { tipo: "", oradorId: "", texto: "", inlineError: "" };
          state.eventos.step = "form";
          navigate("eventos?step=form");
        } else if (sc === "af-t3") {
          state.user.loggedIn = true;
          state.eventos.selectedEventId = "cra-pl-1215-2025";
          state.eventos.draft = {
            tipo: "pergunta",
            oradorId: "sen-carlos-silva",
            texto: "Gostaria de saber do senhor relator como serão garantidos os prazos do crédito emergencial para cooperativas da agricultura familiar.",
            inlineError: ""
          };
          state.eventos.step = "review";
          navigate("eventos?step=review");
        } else if (sc === "af-t4") {
          state.user.loggedIn = true;
          state.eventos.selectedEventId = "cra-pl-1215-2025";
          state.eventos.draft = {
            tipo: "pergunta",
            oradorId: "sen-marcos-souza",
            texto: "Como ficam os prazos do crédito emergencial para a agricultura familiar no PL 1215/2025?",
            inlineError: ""
          };
          state.eventos.submission = {
            protocol: "CRA-2026-0842",
            submittedAt: "11/10/2026 às 14h34",
            status: "moderacao",
            linkCopied: false
          };
          state.eventos.step = "receipt";
          navigate("eventos?step=receipt");
        }
      });
    });

    /* Atalhos de teclado globais (Alt+1..4, Alt+C, Esc) */
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") {
        closeAllDropdowns();
        closeMobileDrawer();
        if (state.route === "proposicao" && state.proposicao.glossaryKey) {
          state.proposicao.glossaryKey = null;
          render();
        }
        return;
      }

      if (!ev.altKey) return;
      const key = ev.key.toLowerCase();
      if (key === "1") {
        ev.preventDefault();
        document.getElementById("main-content")?.focus();
      } else if (key === "2") {
        ev.preventDefault();
        document.getElementById("primary-nav")?.focus();
      } else if (key === "3") {
        ev.preventDefault();
        document.getElementById("universal-search-input")?.focus();
      } else if (key === "4") {
        ev.preventDefault();
        document.getElementById("site-footer")?.focus();
      } else if (key === "c") {
        ev.preventDefault();
        toggleHighContrast();
      }
    });

    window.addEventListener("hashchange", function () {
      if (suppressHashRender && window.location.hash === suppressHashRender) {
        suppressHashRender = null;
        return;
      }
      suppressHashRender = null;
      closeAllDropdowns();
      closeMobileDrawer();
      parseHash();
      render();
    });
  }

  function init() {
    renderStaticIcons();
    bindGlobalChrome();
    parseHash();
    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
