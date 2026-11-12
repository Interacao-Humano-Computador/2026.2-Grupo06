/**
 * Dados realistas de 2026 e ícones SVG (traço 2px, 24x24) do protótipo de alta fidelidade
 * Portal do Senado Federal — Grupo 06 (IHC 2026.2)
 */
window.SENADO_DATA = (function () {
  "use strict";

  const ICONS = {
    info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    vlibras: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6"/><path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>',
    contrast: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 3v18a9 9 0 0 0 0-18z" fill="currentColor"/></svg>',
    menu: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    user: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    "chevron-down": '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>',
    "chevron-right": '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>',
    close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
    warning: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    error: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    clock: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    calendar: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    document: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    gavel: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 13l-7.5 7.5a2.12 2.12 0 0 1-3-3L11 10"/><path d="M16 16l6-6"/><path d="M8 8l6-6"/><path d="M9 7l8 8"/><path d="M21 11l-8-8"/></svg>',
    vote: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
    live: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49"/><path d="M7.76 16.24a6 6 0 0 1 0-8.49"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 19.07a10 10 0 0 1 0-14.14"/></svg>',
    share: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
    copy: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    filter: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
    play: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
    pause: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>',
    captions: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M10 10H8a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h2"/><path d="M18 10h-2a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h2"/></svg>',
    transcript: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    "arrow-left": '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
    "arrow-right": '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    shield: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    news: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>',
    users: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    help: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    accessibility: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="5" r="2"/><path d="m5 8 7 1 7-1"/><path d="m12 9 0 6"/><path d="m9 21 3-6 3 6"/></svg>'
  };

  const GLOSSARY = {
    proposicao: {
      term: "Proposição",
      definition: "Qualquer texto legislativo oficial apresentado ao Senado para criar, alterar ou revogar leis (por exemplo, Projeto de Lei ou PEC)."
    },
    tramitacao: {
      term: "Tramitação",
      definition: "Caminho oficial que a proposta percorre entre comissões temáticas e o Plenário antes de ser aprovada definitivamente ou arquivada."
    },
    relator: {
      term: "Relator(a)",
      definition: "Senador ou senadora designado(a) para estudar o projeto, conduzir audiências e escrever o parecer que será votado pela comissão."
    },
    parecer: {
      term: "Parecer",
      definition: "Documento técnico e opinativo em que o relator recomenda aprovar, ajustar (com emendas) ou rejeitar a proposta."
    },
    "mesa-diretora": {
      term: "Mesa Diretora",
      definition: "Equipe que dirige os trabalhos da sessão ou audiência pública, organiza as falas dos oradores e lê as perguntas enviadas pelo cidadão."
    },
    "ordem-do-dia": {
      term: "Ordem do Dia",
      definition: "Lista oficial das propostas priorizadas para discussão e votação em uma reunião ou sessão plenária."
    },
    avulso: {
      term: "Avulso",
      definition: "Arquivo oficial completo contendo o texto integral, a justificativa do autor e os anexos iniciais da proposição."
    }
  };

  const HOME_SHORTCUTS = [
    {
      id: "sc-proposicoes",
      title: "Acompanhar proposições",
      desc: "Busque projetos de lei, ementas, relatores e histórico completo de tramitação.",
      route: "busca?q=jornada+de+trabalho&tipo=proposicao",
      icon: "document"
    },
    {
      id: "sc-comissoes",
      title: "Comissões e pautas",
      desc: "Veja agendas de hoje, deliberações por item, vídeos legendados e notas taquigráficas.",
      route: "comissoes",
      icon: "gavel"
    },
    {
      id: "sc-consulta",
      title: "Votar em Consultas",
      desc: "Manifeste seu voto direto (SIM ou NÃO) no PL 1215/2025 com comprovante digital.",
      route: "consulta",
      icon: "vote"
    },
    {
      id: "sc-eventos",
      title: "Eventos Interativos",
      desc: "Envie comentários e perguntas aos oradores nas audiências públicas ao vivo.",
      route: "eventos",
      icon: "live"
    }
  ];

  const PROPOSICOES = [
    {
      id: "PL-5253-2026",
      codigo: "PL 5253/2026",
      tipoSigla: "PL",
      titulo: "PL 5253/2026 — Transição gradual da jornada de trabalho para 40 horas semanais",
      ementa: "Altera a Consolidação das Leis do Trabalho para instituir a transição gradual da jornada máxima semanal de 44 para 40 horas, sem redução salarial, e cria incentivos fiscais para micro e pequenas empresas.",
      autor: "Sen. Marina Campos (REDE-SP)",
      relator: "Sen. Rodrigo Paiva (PSD-MG)",
      origem: "Senado Federal",
      comissaoAtual: "CCJ — Comissão de Constituição e Justiça",
      apresentacao: "18/08/2026",
      atualizacao: "12/10/2026",
      isoDate: "2026-10-12",
      situacaoCategoria: "andamento",
      situacaoLabel: "Em tramitação na CCJ",
      situacaoTone: "warning",
      situacaoExplicacao: "Esta proposição recebeu parecer favorável do relator na Comissão de Constituição e Justiça (CCJ), mas ainda não foi votada nem transformada em lei. Após a CCJ, seguirá para votação em Plenário e revisão na Câmara dos Deputados.",
      avisoLegal: "Matéria em tramitação: parecer favorável ou aprovação em comissão não equivale a lei em vigor.",
      pdfTamanho: "428 KB",
      votosSim: 13815,
      votosNao: 4605,
      timeline: [
        {
          data: "12/10/2026",
          orgao: "CCJ — Comissão de Constituição e Justiça",
          descricao: "Incluído na pauta preliminar com parecer favorável e duas emendas de ajuste para microempresas.",
          atual: true
        },
        {
          data: "01/10/2026",
          orgao: "CCJ — Comissão de Constituição e Justiça",
          descricao: "Relator Sen. Rodrigo Paiva apresentou parecer pela constitucionalidade e aprovação com emendas."
        },
        {
          data: "16/09/2026",
          orgao: "CAS — Comissão de Assuntos Sociais",
          descricao: "Aprovado parecer favorável em caráter terminativo parcial após audiência com sindicatos e confederações."
        },
        {
          data: "29/08/2026",
          orgao: "Mesa Diretora do Senado",
          descricao: "Matéria distribuída para análise conjunta da CAS e da CCJ."
        },
        {
          data: "18/08/2026",
          orgao: "Protocolo Legislativo",
          descricao: "Projeto de Lei apresentado pela Sen. Marina Campos e publicado no avulso oficial."
        }
      ],
      textos: [
        { titulo: "Avulso inicial do PL 5253/2026", tipo: "PDF oficial", tamanho: "428 KB", data: "18/08/2026" },
        { titulo: "Parecer nº 84/2026 na CCJ (Sen. Rodrigo Paiva)", tipo: "PDF oficial", tamanho: "312 KB", data: "01/10/2026" },
        { titulo: "Quadro comparativo: CLT atual × texto proposto", tipo: "Documento acessível (HTML/PDF)", tamanho: "195 KB", data: "02/10/2026" }
      ],
      votacoes: [
        {
          data: "16/09/2026",
          colegiado: "CAS — Comissão de Assuntos Sociais",
          resultado: "Aprovado o parecer do relator",
          sim: 14,
          nao: 3,
          abstencao: 1
        }
      ]
    },
    {
      id: "PL-1215-2025",
      codigo: "PL 1215/2025",
      tipoSigla: "PL",
      titulo: "PL 1215/2025 — Crédito emergencial para cooperativas da agricultura familiar",
      ementa: "Institui linha permanente de crédito emergencial com juros subsidiados e carência de até 24 meses para cooperativas e produtores da agricultura familiar atingidos por secas ou enchentes.",
      autor: "Sen. Carlos Silva (MDB-RS)",
      relator: "Sen. Carlos Silva (MDB-RS)",
      origem: "Senado Federal",
      comissaoAtual: "CRA — Comissão de Agricultura e Reforma Agrária",
      apresentacao: "04/11/2025",
      atualizacao: "11/10/2026",
      isoDate: "2026-10-11",
      situacaoCategoria: "andamento",
      situacaoLabel: "Em audiência pública na CRA",
      situacaoTone: "warning",
      situacaoExplicacao: "A proposta encontra-se em discussão aberta com a sociedade na Comissão de Agricultura e Reforma Agrária (CRA). Perguntas enviadas na audiência ao vivo orientam ajustes finais do texto.",
      avisoLegal: "Matéria em tramitação: o projeto ainda será votado na CRA e no Plenário antes de produzir efeitos legais.",
      pdfTamanho: "512 KB",
      votosSim: 14280,
      votosNao: 3190,
      timeline: [
        {
          data: "11/10/2026",
          orgao: "CRA — Comissão de Agricultura e Reforma Agrária",
          descricao: "Audiência Pública Interativa em andamento para ouvir cooperativas rurais e o Ministério do Desenvolvimento Agrário.",
          atual: true
        },
        {
          data: "25/09/2026",
          orgao: "CRA — Comissão de Agricultura e Reforma Agrária",
          descricao: "Aprovado requerimento de participação cidadã no portal e-Cidadania e Eventos Interativos."
        },
        {
          data: "12/08/2026",
          orgao: "CAE — Comissão de Assuntos Econômicos",
          descricao: "Parecer favorável com adequação orçamentária para o exercício de 2027."
        },
        {
          data: "04/11/2025",
          orgao: "Protocolo Legislativo",
          descricao: "Apresentado no Senado Federal e encaminhado às comissões."
        }
      ],
      textos: [
        { titulo: "Avulso inicial do PL 1215/2025", tipo: "PDF oficial", tamanho: "512 KB", data: "04/11/2025" },
        { titulo: "Relatório preliminar na CRA", tipo: "PDF oficial", tamanho: "284 KB", data: "05/10/2026" }
      ],
      votacoes: [
        {
          data: "12/08/2026",
          colegiado: "CAE — Comissão de Assuntos Econômicos",
          resultado: "Aprovado parecer econômico",
          sim: 19,
          nao: 2,
          abstencao: 0
        }
      ]
    },
    {
      id: "PEC-45-2026",
      codigo: "PEC 45/2026",
      tipoSigla: "PEC",
      titulo: "PEC 45/2026 — Fim da escala 6x1 e direito à desconexão digital na jornada de trabalho",
      ementa: "Altera o art. 7º da Constituição Federal para vedar escalas habituais sem dois dias consecutivos de descanso semanal remunerado e garantir o direito à desconexão digital fora da jornada de trabalho.",
      autor: "Sen. Paulo Tavares (PT-BA) e outros",
      relator: "Aguardando designação na CCJ",
      origem: "Senado Federal",
      comissaoAtual: "CCJ — Comissão de Constituição e Justiça",
      apresentacao: "02/09/2026",
      atualizacao: "09/10/2026",
      isoDate: "2026-10-09",
      situacaoCategoria: "andamento",
      situacaoLabel: "Aguardando designação de relator",
      situacaoTone: "info",
      situacaoExplicacao: "Uma Proposta de Emenda à Constituição (PEC) exige exame prévio de admissibilidade na CCJ e, posteriormente, aprovação por três quintos dos senadores em dois turnos de votação.",
      avisoLegal: "Matéria em tramitação inicial: texto ainda sujeito a análise de admissibilidade constitucional.",
      pdfTamanho: "366 KB",
      votosSim: 29410,
      votosNao: 8120,
      timeline: [
        {
          data: "09/10/2026",
          orgao: "CCJ — Comissão de Constituição e Justiça",
          descricao: "Encerrado o prazo inicial para recebimento de sugestões legislativas da sociedade.",
          atual: true
        },
        {
          data: "02/09/2026",
          orgao: "Plenário do Senado",
          descricao: "Leitura da PEC 45/2026 com 31 assinaturas e despacho para a CCJ."
        }
      ],
      textos: [
        { titulo: "Texto original da PEC 45/2026", tipo: "PDF oficial", tamanho: "366 KB", data: "02/09/2026" }
      ],
      votacoes: []
    },
    {
      id: "PL-3410-2025",
      codigo: "PL 3410/2025",
      tipoSigla: "PL",
      titulo: "PL 3410/2025 — Jornada de trabalho protegida para profissionais de enfermagem e saúde",
      ementa: "Regulamenta a jornada máxima semanal e os intervalos de repouso em unidades de urgência e emergência do SUS, articulada com políticas de proteção contra sobrecarga laboral.",
      autor: "Sen. Beatriz Nogueira (PSB-PE)",
      relator: "Sen. Eduardo Rocha (MDB-GO)",
      origem: "Senado Federal",
      comissaoAtual: "Enviado à Câmara dos Deputados",
      apresentacao: "14/05/2025",
      atualizacao: "05/10/2026",
      isoDate: "2026-10-05",
      situacaoCategoria: "aprovado",
      situacaoLabel: "Aprovado no Senado",
      situacaoTone: "success",
      situacaoExplicacao: "O Senado concluiu a votação deste projeto em 05/10/2026 e o encaminhou para revisão da Câmara dos Deputados antes de seguir à sanção presidencial.",
      avisoLegal: "Aprovado no Senado, mas ainda aguarda análise final da Câmara dos Deputados para virar lei.",
      pdfTamanho: "390 KB",
      votosSim: 9840,
      votosNao: 1120,
      timeline: [
        {
          data: "05/10/2026",
          orgao: "Mesa Diretora / Câmara dos Deputados",
          descricao: "Remetido oficialmente à Câmara dos Deputados após aprovação em Plenário.",
          atual: true
        },
        {
          data: "24/09/2026",
          orgao: "CCJ — Comissão de Constituição e Justiça",
          descricao: "Aprovado o parecer final pela juridicidade e encaminhamento à Ordem do Dia."
        }
      ],
      textos: [
        { titulo: "Redação final aprovada no Senado", tipo: "PDF oficial", tamanho: "390 KB", data: "05/10/2026" }
      ],
      votacoes: [
        {
          data: "05/10/2026",
          colegiado: "Plenário do Senado",
          resultado: "Aprovado em turno único",
          sim: 64,
          nao: 5,
          abstencao: 2
        }
      ]
    },
    {
      id: "PL-2890-2026",
      codigo: "PL 2890/2026",
      tipoSigla: "PL",
      titulo: "PL 2890/2026 — Capacitação profissional durante a transição de jornada de trabalho industrial",
      ementa: "Autoriza convênios entre o Sistema S e indústrias de médio porte para incluir horas de qualificação tecnológica dentro da jornada de trabalho semanal.",
      autor: "Sen. Renato Mendes (PP-PR)",
      relator: "Sen. Cláudia Silveira (PSD-SC)",
      origem: "Senado Federal",
      comissaoAtual: "CAE — Comissão de Assuntos Econômicos",
      apresentacao: "10/06/2026",
      atualizacao: "28/09/2026",
      isoDate: "2026-09-28",
      situacaoCategoria: "andamento",
      situacaoLabel: "Em tramitação na CAE",
      situacaoTone: "warning",
      situacaoExplicacao: "A matéria aguarda pedido de vista coletivo concedido na Comissão de Assuntos Econômicos antes de seguir à CCJ.",
      avisoLegal: "Matéria em tramitação: não produz efeitos jurídicos enquanto não for aprovada pelas duas Casas.",
      pdfTamanho: "274 KB",
      votosSim: 4120,
      votosNao: 1980,
      timeline: [
        {
          data: "28/09/2026",
          orgao: "CAE — Comissão de Assuntos Econômicos",
          descricao: "Concedida vista coletiva pelo prazo regimental de duas sessões ordinárias.",
          atual: true
        }
      ],
      textos: [
        { titulo: "Avulso inicial do PL 2890/2026", tipo: "PDF oficial", tamanho: "274 KB", data: "10/06/2026" }
      ],
      votacoes: []
    },
    {
      id: "PL-1984-2024",
      codigo: "PL 1984/2024",
      tipoSigla: "PL",
      titulo: "PL 1984/2024 — Banco de horas sazonal na jornada de trabalho rural",
      ementa: "Dispunha sobre compensação anual de jornada de trabalho em colheitas temporárias sem acordo coletivo prévio.",
      autor: "Sen. Augusto Prado (PL-GO)",
      relator: "Sen. Marcos Souza (UNIÃO-MT)",
      origem: "Senado Federal",
      comissaoAtual: "Arquivo do Senado",
      apresentacao: "09/04/2024",
      atualizacao: "14/03/2025",
      isoDate: "2025-03-14",
      situacaoCategoria: "arquivado",
      situacaoLabel: "Arquivado",
      situacaoTone: "error",
      situacaoExplicacao: "Proposição rejeitada na Comissão de Assuntos Sociais e arquivada definitivamente após esgotado o prazo de recurso ao Plenário.",
      avisoLegal: "Matéria arquivada: não está mais em análise e não gerou alteração na legislação.",
      pdfTamanho: "215 KB",
      votosSim: 890,
      votosNao: 7450,
      timeline: [
        {
          data: "14/03/2025",
          orgao: "Secretaria-Geral da Mesa",
          descricao: "Arquivamento definitivo publicado após rejeição conclusiva em comissão.",
          atual: true
        }
      ],
      textos: [
        { titulo: "Parecer contrário na CAS", tipo: "PDF oficial", tamanho: "215 KB", data: "02/03/2025" }
      ],
      votacoes: []
    },
    {
      id: "MPV-1312-2026",
      codigo: "MPV 1312/2026",
      tipoSigla: "MPV",
      titulo: "MPV 1312/2026 — Incentivo temporário para adaptação ergonômica e jornada de trabalho híbrida",
      ementa: "Institui crédito presumido para empresas que implantarem planos de acessibilidade e controle transparente de jornada de trabalho híbrida.",
      autor: "Poder Executivo",
      relator: "Sen. Fernando Alves (MDB-SP)",
      origem: "Poder Executivo",
      comissaoAtual: "Comissão Mista da MPV 1312/2026",
      apresentacao: "03/09/2026",
      atualizacao: "07/10/2026",
      isoDate: "2026-10-07",
      situacaoCategoria: "andamento",
      situacaoLabel: "Em tramitação em Comissão Mista",
      situacaoTone: "warning",
      situacaoExplicacao: "Medida Provisória vigente provisoriamente que precisa ser aprovada pelo Congresso Nacional dentro do prazo constitucional.",
      avisoLegal: "Matéria em análise no Congresso: texto final ainda pode receber emendas até a votação em Plenário.",
      pdfTamanho: "340 KB",
      votosSim: 5300,
      votosNao: 2110,
      timeline: [
        {
          data: "07/10/2026",
          orgao: "Comissão Mista",
          descricao: "Relator recebeu 18 emendas parlamentares e agendou leitura de relatório.",
          atual: true
        }
      ],
      textos: [
        { titulo: "Texto da Medida Provisória 1312/2026", tipo: "PDF oficial", tamanho: "340 KB", data: "03/09/2026" }
      ],
      votacoes: []
    }
  ];

  const NOTICIAS = [
    {
      id: "not-01",
      titulo: "CCJ pauta parecer sobre redução gradual da jornada de trabalho para 40 horas",
      resumo: "Relator Sen. Rodrigo Paiva detalha transição de quatro anos prevista no PL 5253/2026 e regras de apoio às microempresas.",
      categoria: "Comissões",
      data: "12/10/2026",
      isoDate: "2026-10-12",
      proposicaoId: "PL-5253-2026"
    },
    {
      id: "not-02",
      titulo: "CRA abre audiência pública interativa sobre crédito emergencial para agricultura familiar",
      resumo: "Cidadãos já podem acompanhar a transmissão ao vivo e enviar perguntas diretas ao relator do PL 1215/2025.",
      categoria: "Ao vivo hoje",
      data: "11/10/2026",
      isoDate: "2026-10-11",
      proposicaoId: "PL-1215-2025"
    },
    {
      id: "not-03",
      titulo: "Portal do Senado integra e-Cidadania com consulta direta e modo de alto contraste nativo",
      resumo: "Atualização segue padrões WCAG 2.1 AA e amplia a compatibilidade com leitores de tela e VLibras em todas as páginas.",
      categoria: "Acessibilidade",
      data: "09/10/2026",
      isoDate: "2026-10-09",
      proposicaoId: null
    },
    {
      id: "not-04",
      titulo: "CCJ aprova normas de linguagem cidadã e resumo explicativo em projetos de lei",
      resumo: "Decisão busca facilitar o acompanhamento da jornada de trabalho legislativa e garantir explicação clara do andamento das matérias.",
      categoria: "CCJ",
      data: "08/10/2026",
      isoDate: "2026-10-08",
      proposicaoId: null
    },
    {
      id: "not-05",
      titulo: "Comissão de Assuntos Sociais debate impactos da jornada de trabalho na saúde mental",
      resumo: "Especialistas da Fundacentro apresentaram estudos sobre redução de afastamentos e pausas de desconexão digital.",
      categoria: "Trabalho e Saúde",
      data: "06/10/2026",
      isoDate: "2026-10-06",
      proposicaoId: "PEC-45-2026"
    },
    {
      id: "not-06",
      titulo: "Plenário aprova jornada de trabalho protegida para profissionais da saúde no SUS",
      resumo: "Texto do PL 3410/2025 segue agora para apreciação da Câmara dos Deputados após consenso entre lideranças.",
      categoria: "Plenário",
      data: "05/10/2026",
      isoDate: "2026-10-05",
      proposicaoId: "PL-3410-2025"
    },
    {
      id: "not-07",
      titulo: "Audiências regionais discutem capacitação técnica vinculada à nova jornada de trabalho",
      resumo: "Senadores da CAE recolhem contribuições sobre o PL 2890/2026 em polos industriais do Sul e Sudeste.",
      categoria: "Economia",
      data: "28/09/2026",
      isoDate: "2026-09-28",
      proposicaoId: "PL-2890-2026"
    },
    {
      id: "not-08",
      titulo: "Biblioteca do Senado publica estudo comparativo sobre jornada de trabalho na OCDE",
      resumo: "Levantamento técnico reúne dados de 22 países e está disponível gratuitamente em formato acessível.",
      categoria: "Estudos",
      data: "19/09/2026",
      isoDate: "2026-09-19",
      proposicaoId: "PL-5253-2026"
    }
  ];

  const SENADORES = [
    {
      id: "sen-marina",
      nome: "Sen. Marina Campos (REDE-SP)",
      cargo: "Autora do PL 5253/2026 e titular da Comissão de Assuntos Sociais",
      tema: "jornada de trabalho e proteção laboral",
      isoDate: "2026-10-12"
    },
    {
      id: "sen-rodrigo",
      nome: "Sen. Rodrigo Paiva (PSD-MG)",
      cargo: "Relator na Comissão de Constituição e Justiça (CCJ)",
      tema: "jornada de trabalho, constitucionalidade e microempresas",
      isoDate: "2026-10-10"
    },
    {
      id: "sen-carlos",
      nome: "Sen. Carlos Silva (MDB-RS)",
      cargo: "Relator do PL 1215/2025 na Comissão de Agricultura e Reforma Agrária (CRA)",
      tema: "agricultura familiar e crédito emergencial",
      isoDate: "2026-10-11"
    },
    {
      id: "sen-marcos",
      nome: "Sen. Marcos Souza (UNIÃO-MT)",
      cargo: "Presidente da Comissão de Agricultura e Reforma Agrária (CRA)",
      tema: "condução de audiências públicas e desenvolvimento agrário",
      isoDate: "2026-10-11"
    }
  ];

  const COMISSOES = {
    CCJ: {
      sigla: "CCJ",
      nomeCompleto: "Comissão de Constituição e Justiça",
      presidente: "Sen. Davi Alencar (PSD-AP)",
      competencia: "Analisa a constitucionalidade, juridicidade e técnica legislativa das proposições em tramitação no Senado.",
      reunioes: [
        {
          id: "ccj-2026-10-08",
          tipo: "realizada",
          data: "08/10/2026",
          isoDate: "2026-10-08",
          horario: "10h00 às 13h15",
          titulo: "28ª Reunião Ordinária Deliberativa da CCJ",
          local: "Plenário 3, Ala Senador Alexandre Costa",
          videoTitulo: "Gravação integral — 28ª Reunião da CCJ (08/10/2026)",
          videoDuracao: "03:15:40",
          legendas: "CCJ (08/10/2026) — Sen. Rodrigo Paiva: \"A transição da jornada de trabalho prevista no PL 5253/2026 preserva empregos e garante segurança jurídica.\"",
          transcricao: [
            "[10:04] Pres. Sen. Davi Alencar: Declaro aberta a 28ª Reunião Ordinária da Comissão de Constituição e Justiça.",
            "[10:22] Relator Sen. Rodrigo Paiva: Apresento a leitura do item 2, PL 5253/2026 sobre jornada de trabalho gradual de 40 horas.",
            "[11:05] Pres. Sen. Davi Alencar: Concedida vista coletiva ao item 2; item 1 aprovado por unanimidade."
          ],
          pauta: [
            {
              itemNum: "Item 1",
              proposicaoId: "PL-3410-2025",
              titulo: "PL 4108/2026 — Diretrizes de linguagem cidadã e acessibilidade digital em portais públicos",
              relator: "Sen. Helena Viana",
              deliberacao: "Aprovado por unanimidade (18 votos SIM)",
              tone: "success"
            },
            {
              itemNum: "Item 2",
              proposicaoId: "PL-5253-2026",
              titulo: "PL 5253/2026 — Transição gradual da jornada de trabalho para 40 horas semanais",
              relator: "Sen. Rodrigo Paiva",
              deliberacao: "Parecer lido; concedida vista coletiva até 15/10/2026",
              tone: "warning"
            },
            {
              itemNum: "Item 3",
              proposicaoId: "PEC-45-2026",
              titulo: "PEC 45/2026 — Limites à escala 6x1 e direito à desconexão digital na jornada de trabalho",
              relator: "Aguardando designação",
              deliberacao: "Adiado por acordo de lideranças para designação de relatoria",
              tone: "info"
            }
          ],
          noticiasIds: ["not-01", "not-04"]
        },
        {
          id: "ccj-2026-10-01",
          tipo: "realizada",
          data: "01/10/2026",
          isoDate: "2026-10-01",
          horario: "10h00 às 12h40",
          titulo: "27ª Reunião Ordinária Deliberativa da CCJ",
          local: "Plenário 3, Ala Senador Alexandre Costa",
          videoTitulo: "Gravação integral — 27ª Reunião da CCJ (01/10/2026)",
          videoDuracao: "02:40:12",
          legendas: "CCJ (01/10/2026) — Discussão preliminar sobre impacto fiscal e constitucionalidade de propostas trabalhistas.",
          transcricao: [
            "[10:08] Pres. Sen. Davi Alencar: Iniciamos a deliberação dos itens extrapauta.",
            "[10:55] Sen. Rodrigo Paiva: Protocolo formalmente o parecer favorável ao PL 5253/2026."
          ],
          pauta: [
            {
              itemNum: "Item 1",
              proposicaoId: "PL-5253-2026",
              titulo: "PL 5253/2026 — Leitura inicial do relatório de constitucionalidade",
              relator: "Sen. Rodrigo Paiva",
              deliberacao: "Relatório protocolado; aberto prazo regimental de emendas",
              tone: "info"
            },
            {
              itemNum: "Item 2",
              proposicaoId: "PL-3410-2025",
              titulo: "PL 3410/2025 — Jornada de trabalho protegida na saúde (redação final)",
              relator: "Sen. Eduardo Rocha",
              deliberacao: "Aprovado por maioria (16 SIM, 2 NÃO)",
              tone: "success"
            }
          ],
          noticiasIds: ["not-06"]
        },
        {
          id: "ccj-2026-10-22",
          tipo: "futura",
          data: "22/10/2026",
          isoDate: "2026-10-22",
          horario: "10h00 (previsto)",
          titulo: "29ª Reunião Ordinária da CCJ (Pauta Prevista)",
          local: "Plenário 3, Ala Senador Alexandre Costa",
          videoTitulo: "Transmissão programada para 22/10/2026 às 10h00",
          videoDuracao: "Programada",
          legendas: "As legendas ocultas e a tradução em Libras serão ativadas automaticamente no início da reunião.",
          transcricao: [
            "Pauta aberta para leitura prévia dos cidadãos. Notas taquigráficas disponíveis ao término da sessão."
          ],
          pauta: [
            {
              itemNum: "Item 1",
              proposicaoId: "PL-5253-2026",
              titulo: "PL 5253/2026 — Retorno de vista coletiva e votação do parecer",
              relator: "Sen. Rodrigo Paiva",
              deliberacao: "Deliberação pendente (prevista para 22/10/2026)",
              tone: "info"
            },
            {
              itemNum: "Item 2",
              proposicaoId: "PEC-45-2026",
              titulo: "PEC 45/2026 — Designação de relatoria e calendário de audiências",
              relator: "Presidência da CCJ",
              deliberacao: "Deliberação pendente (item informativo)",
              tone: "info"
            }
          ],
          noticiasIds: ["not-01", "not-05"]
        }
      ]
    },
    CRA: {
      sigla: "CRA",
      nomeCompleto: "Comissão de Agricultura e Reforma Agrária",
      presidente: "Sen. Marcos Souza (UNIÃO-MT)",
      competencia: "Delibera sobre política agrícola, crédito rural, reforma agrária e apoio a cooperativas da agricultura familiar.",
      reunioes: [
        {
          id: "cra-2026-10-11",
          tipo: "realizada",
          data: "11/10/2026",
          isoDate: "2026-10-11",
          horario: "14h00 (Em andamento / Interativa)",
          titulo: "Audiência Pública Interativa — Crédito emergencial (PL 1215/2025)",
          local: "Plenário 7, Ala Senador Alexandre Costa",
          videoTitulo: "Ao vivo — Audiência Pública da CRA sobre PL 1215/2025",
          videoDuracao: "AO VIVO",
          legendas: "CRA (Ao vivo) — Sen. Carlos Silva: \"As perguntas enviadas pelo portal garantem que o crédito chegue às cooperativas dentro da safra.\"",
          transcricao: [
            "[14:02] Pres. Sen. Marcos Souza: Abrimos a participação cidadã no portal Eventos Interativos.",
            "[14:15] Relator Sen. Carlos Silva: Explico os critérios de carência para pequenas propriedades afetadas pela estiagem."
          ],
          pauta: [
            {
              itemNum: "Único",
              proposicaoId: "PL-1215-2025",
              titulo: "PL 1215/2025 — Política Nacional de Crédito Emergencial para Agricultura Familiar",
              relator: "Sen. Carlos Silva",
              deliberacao: "Audiência interativa em curso (recebendo perguntas de cidadãos)",
              tone: "warning"
            }
          ],
          noticiasIds: ["not-02"]
        },
        {
          id: "cra-2026-10-29",
          tipo: "futura",
          data: "29/10/2026",
          isoDate: "2026-10-29",
          horario: "14h00 (previsto)",
          titulo: "Reunião Deliberativa da CRA — Votação do parecer do PL 1215/2025",
          local: "Plenário 7, Ala Senador Alexandre Costa",
          videoTitulo: "Transmissão agendada para 29/10/2026 às 14h00",
          videoDuracao: "Programada",
          legendas: "Legendas em tempo real disponíveis durante a transmissão.",
          transcricao: ["As notas taquigráficas serão publicadas após a reunião."],
          pauta: [
            {
              itemNum: "Item 1",
              proposicaoId: "PL-1215-2025",
              titulo: "PL 1215/2025 — Votação do parecer consolidado após audiência pública",
              relator: "Sen. Carlos Silva",
              deliberacao: "Deliberação pendente (votação prevista para 29/10/2026)",
              tone: "info"
            }
          ],
          noticiasIds: ["not-02"]
        }
      ]
    }
  };

  const CONSULTA = {
    proposicaoId: "PL-1215-2025",
    codigo: "PL 1215/2025",
    titulo: "PL 1215/2025 — Crédito emergencial para cooperativas da agricultura familiar",
    ementa: "Institui linha permanente de crédito emergencial com juros subsidiados e carência de até 24 meses para cooperativas e produtores da agricultura familiar atingidos por secas ou enchentes.",
    prazo: "Aberta até 30/11/2026",
    initialSim: 14280,
    initialNao: 3190
  };

  const EVENTOS = [
    {
      id: "cra-pl-1215-2025",
      comissaoSigla: "CRA",
      comissaoCompleta: "CRA — Comissão de Agricultura e Reforma Agrária",
      status: "AO VIVO",
      statusLabel: "Ao vivo agora",
      statusTone: "live",
      titulo: "Audiência Pública: Crédito emergencial para agricultura familiar (PL 1215/2025)",
      proposicaoCodigo: "PL 1215/2025",
      proposicaoId: "PL-1215-2025",
      dataHorario: "Hoje, 11/10/2026 • 14h00 às 16h30",
      local: "Plenário 7 — Transmissão interativa",
      participantes: 418,
      pautaResumo: "Debate sobre prazos de carência, taxas subsidiadas e acesso rápido de cooperativas rurais ao crédito emergencial.",
      oradores: [
        {
          id: "sen-carlos-silva",
          nome: "Sen. Carlos Silva",
          cargoCurto: "Relator do projeto",
          cargoDetalhado: "Relator — Senador responsável pelo parecer do PL 1215/2025",
          organizacao: "Senado Federal (MDB-RS)"
        },
        {
          id: "sen-marcos-souza",
          nome: "Sen. Marcos Souza",
          cargoCurto: "Presidente da CRA",
          cargoDetalhado: "Presidente da CRA — Senador que conduz a audiência pública",
          organizacao: "Senado Federal (UNIÃO-MT)"
        },
        {
          id: "dra-helena-costa",
          nome: "Dra. Helena Costa",
          cargoCurto: "Convidada técnica",
          cargoDetalhado: "Convidada — Ministério do Desenvolvimento Agrário e Agricultura Familiar",
          organizacao: "Ministério do Desenvolvimento Agrário"
        }
      ],
      perguntasRecentes: [
        {
          autor: "Cooperativa Vale Verde (SC)",
          tipo: "Pergunta a Orador",
          destinatario: "Sen. Carlos Silva — Relator",
          texto: "Cooperativas sem certidão digital atualizada poderão apresentar protocolo simplificado durante estado de emergência?",
          status: "Lida pela mesa"
        },
        {
          autor: "Associação AgroSul (PR)",
          tipo: "Comentário geral",
          destinatario: "Plenário da audiência",
          texto: "Apoiamos a extensão da carência de 12 para 24 meses nas regiões atingidas por enchentes.",
          status: "Registrado na pauta"
        }
      ]
    },
    {
      id: "ccj-pl-5253-2026",
      comissaoSigla: "CCJ",
      comissaoCompleta: "CCJ — Comissão de Constituição e Justiça",
      status: "AGENDADA",
      statusLabel: "Inscrições abertas",
      statusTone: "info",
      titulo: "Audiência Pública: Impactos jurídicos da redução da jornada de trabalho (PL 5253/2026)",
      proposicaoCodigo: "PL 5253/2026",
      proposicaoId: "PL-5253-2026",
      dataHorario: "15/10/2026 • 10h00 às 12h30",
      local: "Plenário 3 — Transmissão interativa",
      participantes: 192,
      pautaResumo: "Oitiva com representantes trabalhistas, confederações empresariais e Ministério do Trabalho antes da votação na CCJ.",
      oradores: [
        {
          id: "sen-rodrigo-paiva",
          nome: "Sen. Rodrigo Paiva",
          cargoCurto: "Relator do projeto",
          cargoDetalhado: "Relator — Senador responsável pelo parecer na CCJ",
          organizacao: "Senado Federal (PSD-MG)"
        },
        {
          id: "sen-marina-campos",
          nome: "Sen. Marina Campos",
          cargoCurto: "Autora do PL 5253/2026",
          cargoDetalhado: "Autora — Senadora propositora da transição gradual de jornada",
          organizacao: "Senado Federal (REDE-SP)"
        }
      ],
      perguntasRecentes: []
    },
    {
      id: "cas-telemedicina-2026",
      comissaoSigla: "CAS",
      comissaoCompleta: "CAS — Comissão de Assuntos Sociais",
      status: "ENCERRADA",
      statusLabel: "Encerrada (vídeo disponível)",
      statusTone: "success",
      titulo: "Seminário: Telemedicina, prontuário acessível e rede SUS em municípios rurais",
      proposicaoCodigo: "REQ 92/2026",
      proposicaoId: "PL-3410-2025",
      dataHorario: "06/10/2026 • 09h30 às 12h00",
      local: "Plenário 9 — Arquivo em vídeo e transcrição",
      participantes: 310,
      pautaResumo: "Avaliação da conectividade em unidades básicas de saúde e ampliação da telessaúde.",
      oradores: [
        {
          id: "sen-beatriz-nogueira",
          nome: "Sen. Beatriz Nogueira",
          cargoCurto: "Pres. da subcomissão",
          cargoDetalhado: "Presidente da Subcomissão de Saúde Digital",
          organizacao: "Senado Federal (PSB-PE)"
        }
      ],
      perguntasRecentes: []
    }
  ];

  return {
    ICONS,
    GLOSSARY,
    HOME_SHORTCUTS,
    PROPOSICOES,
    NOTICIAS,
    SENADORES,
    COMISSOES,
    CONSULTA,
    EVENTOS
  };
})();
