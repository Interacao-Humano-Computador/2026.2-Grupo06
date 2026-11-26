// model.js — textos, dados e regras do protótipo (tudo fictício).
// Para mudar um texto, o calendário, os horários ou os dados de exemplo, edite só este arquivo.
// O app.js apenas lê o objeto Model e monta as telas.

const Model = {
  banner: { esquerda: "Protótipo acadêmico, dados fictícios", direita: "SEM VÍNCULO OFICIAL" },

  // Para usar um logotipo seu, coloque o arquivo na pasta e preencha o "src" (ex.: "logo.png").
  // Enquanto "src" estiver vazio, o cabeçalho mostra só o nome em texto.
  marca: { nome: "SENADO", subtitulo: "Visitação e cidadania", logo: { src: "senado.svg", alt: "Senado Federal" } },

  busca: {
    rotulo: "Buscar no portal",
    tituloSugestoes: "Sugestões de busca",
    // Cartões M01 do protótipo de papel
    sugestoes: ["visita", "visita ao Senado", "agendar visita guiada", "visitação institucional"],
    aviso: "Busca simulada: este protótipo não retorna resultados."
  },

  menu: ["Notícias", "Senadores", "Legislação", "Serviços"],
  menuAcessibilidade: "Acessibilidade",
  avisoForaDoEscopo: "Esta seção está fora do escopo deste protótipo.",

  rodape: {
    esquerda: ["Visitação institucional", "Experiência acadêmica"],
    direita: "Informações e reservas fictícias"
  },

  comum: {
    avancar: "Avançar",
    voltar: "Voltar",
    salvarEVoltar: "Salvar e voltar à revisão",
    passoDe: (n, total) => `Passo ${n} de ${total}`
  },

  // ---------- S01 · Página inicial ----------
  inicio: {
    chamada: "Um espaço de todos",
    titulo: "Cidadania começa com participação.",
    destaque: {
      sobretitulo: "Conheça por dentro",
      titulo: "Visite o Senado",
      texto: "Conheça os espaços, a história e o trabalho do Legislativo em uma visita guiada gratuita.",
      botao: "Agendar visita",
      detalhes: ["Gratuita", "Presencial", "Brasília, DF"],
      painelTitulo: "Portas abertas.",
      painelTexto: ["Um encontro com a democracia.", "Uma experiência para todos."]
    },
    noticiasTitulo: "Últimas notícias",
    noticiasNota: "Informações ilustrativas para este protótipo"
  },

  noticias: [
    { categoria: "Cidadania",     titulo: "Educação para a cidadania aproxima a sociedade do Parlamento", rodape: "Conteúdo fictício · 04 nov 2026" },
    { categoria: "Visitação",     titulo: "Descubra a história dos espaços de participação democrática",  rodape: "Conteúdo fictício · 04 nov 2026" },
    { categoria: "Acessibilidade", titulo: "Visitas com apoio para diferentes necessidades",              rodape: "Conteúdo fictício · 04 nov 2026" }
  ],

  // ---------- S02 · Programa de Visitação ----------
  programa: {
    titulo: "Programa de Visitação",
    subtitulo: "Planeje sua visita. A gente cuida das boas-vindas.",
    listaTitulo: "Antes de agendar",
    itens: [
      { icone: "vestimenta",     titulo: "Vestimenta adequada",         texto: "Não é permitida a entrada com bermuda ou regata." },
      { icone: "documento",      titulo: "Documento oficial com foto",  texto: "Todos os visitantes devem apresentar um documento oficial com foto." },
      { icone: "relogio",        titulo: "Chegue com antecedência",     texto: "Apresente-se 30 minutos antes do horário agendado." },
      { icone: "acessibilidade", titulo: "Apoio de acessibilidade",     texto: "Informe no agendamento se precisar de apoio para a visita." }
    ],
    lateral: {
      titulo: "Uma visita, novas perspectivas.",
      duracaoRotulo: "Duração estimada",
      duracao: "50 minutos",
      entrada: "Entrada gratuita",
      local: ["Brasília, Distrito Federal", "Atendimento em português"]
    },
    botao: "Iniciar agendamento",
    notas: ["Leva cerca de 5 minutos.", "Use apenas dados fictícios nesta simulação."],
    voltar: "Voltar ao início"
  },

  // ---------- Os 5 passos (barra de progresso e cabeçalhos) ----------
  passos: [
    { rotulo: "Modalidade",     titulo: "Quem vem com você?",           subtitulo: "Escolha o tipo de visita e informe o total de pessoas, incluindo você." },
    { rotulo: "Data e horário", titulo: "Escolha a data e o horário",   subtitulo: "Roteiro demonstrativo: 05 de novembro, às 09:00. Vagas fictícias." },
    { rotulo: "Visitantes",     titulo: "Dados dos visitantes",         subtitulo: "Simulação: selecione o campo de nome para usar os dados de exemplo." },
    { rotulo: "Revisão",        titulo: "Revise seu agendamento",       subtitulo: "Confira os dados. Você pode editar cada bloco antes de confirmar." },
    { rotulo: "Confirmação",    titulo: "Agendamento confirmado!",      subtitulo: "Tudo pronto para a sua visita. Guarde o localizador abaixo." }
  ],

  // ---------- S03 · Passo 1: modalidade e quantidade ----------
  modalidade: {
    tipoTitulo: "Tipo de visita",
    opcoes: [
      { valor: "individual", rotulo: "Individual", descricao: "Uma pessoa" },
      { valor: "grupo",      rotulo: "Grupo",      descricao: "Duas ou mais pessoas" }
    ],
    quantidadeTitulo: "Quantidade de pessoas",
    quantidadeAjuda: "Inclua o responsável. Contador ilustrativo neste roteiro.",
    sufixo: "pessoas no total",
    grupoPadrao: 3,
    grupoMin: 2,
    grupoMax: 10,
    // No roteiro do protótipo, só "Grupo" avança (o botão fica desabilitado em "Individual").
    // Mude para true se quiser que a visita individual também siga o fluxo.
    permitirIndividual: false,
    avancarIndividual: "Escolha Grupo",
    lateralTitulo: "Sua visita começa aqui",
    lateralGrupo: n => [
      `Roteiro acadêmico: grupo de ${n} pessoas.`,
      n === 3
        ? "Os controles de quantidade são ilustrativos. A navegação usa este exemplo."
        : `Você alterou o exemplo: o agendamento segue com ${n} pessoas.`
    ],
    lateralIndividual: [
      "Roteiro acadêmico: grupo de 3 pessoas.",
      "Selecione Grupo para seguir o exemplo demonstrado."
    ],
    lateralIndividualLivre: ["Visita individual: uma pessoa."]
  },

  // ---------- S04 · Passo 2: calendário com legenda de vagas ----------
  calendario: {
    mes: "Novembro 2026",
    nomeMes: "novembro",
    ano: 2026,
    mesNumero: 11,
    diasNoMes: 30,
    primeiroDiaDaSemana: 0, // 0 = domingo (01/11/2026 cai num domingo)
    nota: "Calendário demonstrativo",
    diasSemana: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
    nomesDiasSemana: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],

    // Todo dia que não aparece aqui é "indisponivel".
    situacao: { 4: "lotado", 5: "vagas", 11: "lotado", 18: "lotado", 25: "lotado" },

    // Cartões M02–M04 do protótipo de papel
    horarios: {
      5: [
        { hora: "09:00", vagas: 12 },
        { hora: "10:00", vagas: 5, nota: "ilustrativo" },
        { hora: "11:00", vagas: 0 }
      ]
    },

    legenda: { vagas: "Com vagas", lotado: "Lotado", indisponivel: "Indisponível" },
    simbolos: { vagas: "●", lotado: "×", indisponivel: "—" },

    painelTitulo: "Selecione um dia",
    painelTexto: "Os horários aparecem aqui após a seleção de uma data com vagas.",
    tituloDia: (dia, semana) => `${String(dia).padStart(2, "0")} de novembro, ${semana}`,
    horariosTitulo: "Escolha um horário",
    // Rótulo de cada horário: "09:00 · 12 vagas", "10:00 · 5 vagas (ilustrativo)", "11:00 · esgotado"
    rotuloHorario: (h, total) => {
      if (h.vagas === 0) return `${h.hora} · esgotado`;
      const vagas = `${h.vagas} ${h.vagas === 1 ? "vaga" : "vagas"}`;
      if (h.vagas < total) return `${h.hora} · ${vagas} (insuficiente para ${total} pessoas)`;
      return `${h.hora} · ${vagas}${h.nota ? ` (${h.nota})` : ""}`;
    },

    // Cartão X01 do protótipo de papel
    alertaLotadoTitulo: "Dia sem vagas",
    alertaLotado: "Vagas esgotadas. Selecione outro dia no calendário.",
    alertaIndisponivel: "Este dia está indisponível. Selecione um dia com vagas (●).",
    erroSemSelecao: "Selecione a data e um horário com vagas."
  },

  // ---------- S05 · Passo 3: dados dos visitantes e acessibilidade ----------
  visitantes: {
    responsavelTitulo: "Responsável pela visita",
    campos: {
      nome:     { rotulo: "Nome completo *", placeholder: "Selecione para preencher" },
      cpf:      { rotulo: "CPF",             placeholder: "000.000.000-00" },
      email:    { rotulo: "E-mail",          placeholder: "ana@example.com" },
      telefone: { rotulo: "Telefone",        placeholder: "(61) 9 9999-999" }
    },
    // Ao focar o campo de nome (com tudo vazio), estes dados são preenchidos.
    // O telefone tem 1 dígito a menos DE PROPÓSITO: é o erro da tarefa de correção (tela S06).
    exemplo: { nome: "Ana Lima", cpf: "000.000.000-00", email: "ana@example.com", telefone: "(61) 9 9999-999" },

    acompanhantesTitulo: "Acompanhantes",
    acompanhantesNota: n => `Exemplo para ${n} pessoas; inclui a responsável.`,
    semAcompanhantes: "Nenhum acompanhante nesta visita.",
    nomesAcompanhantes: [
      "Beatriz Lima", "Carlos Lima", "Daniela Lima", "Eduardo Lima", "Fernanda Lima",
      "Gabriel Lima", "Helena Lima", "Igor Lima", "Júlia Lima"
    ],

    acessibilidadeTitulo: "Acessibilidade",
    acessibilidadeAjuda: "Selecione um apoio neste exemplo.",
    apoios: [
      { id: "cadeira", rotulo: "Cadeira de rodas / mobilidade reduzida", resumo: "Cadeira de rodas / mobilidade reduzida" },
      { id: "libras",  rotulo: "Libras",                                 resumo: "Libras" },
      { id: "outro",   rotulo: "Outro",                                  resumo: "Outro apoio · a combinar com a equipe" }
    ],
    acessibilidadeRodape: "A equipe poderá entrar em contato.",
    notaObrigatorio: "* Campo obrigatório. Não insira dados pessoais reais.",

    // Cartão X02 do protótipo de papel
    erroNome: "Por favor, informe ao menos o nome completo do responsável."
  },

  // ---------- S06 · Passo 4: revisão antes de enviar ----------
  revisao: {
    visita: "Visita",
    responsavel: "Responsável",
    acessibilidade: "Acessibilidade",
    editar: "Editar",
    semApoio: "Nenhum apoio solicitado",
    cpfNaoInformado: "CPF não informado",
    emailNaoInformado: "e-mail não informado",
    telefoneNaoInformado: "Telefone não informado",
    telefoneIncompleto: "Telefone incompleto. Edite e inclua o dígito que falta.",

    lateralTitulo: "Quase tudo pronto.",
    lateralTexto: [
      "A reserva só é concluída após a confirmação.",
      "Confira especialmente o telefone: ele será usado se houver mudanças na visita."
    ],

    // Painel de correção (cartão M07 do protótipo de papel)
    corrigirTitulo: "Corrigir telefone",
    corrigirTexto: "O número precisa de mais um dígito.",
    corrigirRotulo: "Telefone de exemplo",
    corrigirPlaceholder: "(61) 9 9999-9999",
    corrigirBotao: "Usar telefone corrigido",
    outrosDados: "Editar outros dados do responsável",
    corrigirErro: "Digite o telefone completo, com DDD e 9 dígitos: (61) 9 9999-9999.",
    corrigirOk: "Telefone atualizado.",

    confirmar: "Confirmar agendamento",
    enviando: "Enviando agendamento…", // cartão M08
    atrasoEnvioMs: 900,
    erroConfirmar: "Corrija o telefone antes de confirmar."
  },

  // ---------- S07 · Passo 5: confirmação e comprovante ----------
  confirmacao: {
    prefixoLocalizador: "VIS",
    rotuloLocalizador: "Seu localizador",
    data: "Data",
    horario: "Horário",
    visitantes: "Visitantes",
    baixar: "Baixar comprovante (PDF)",
    baixarNota: "Download demonstrativo",
    emailNota: email => [`Uma cópia seria enviada para ${email}.`, "Nesta simulação, nenhum e-mail é enviado."],
    emailNaoInformado: ["Nenhum e-mail informado.", "Nesta simulação, nenhum e-mail é enviado."],
    lateralTitulo: "No dia da visita",
    // Cada item pode ser um texto ou uma função que recebe { chegada }.
    lateralItens: [
      ctx => `Chegue às ${ctx.chegada}: 30 minutos antes.`,
      "Leve documento oficial com foto de todos os visitantes.",
      "Não use bermuda ou regata.",
      "Apresente este comprovante na recepção de visitantes."
    ],
    alterar: "Alterar / cancelar agendamento",
    inicio: "Voltar ao início",

    comprovante: {
      faixa: "Protótipo acadêmico, dados fictícios",
      titulo: "Comprovante de agendamento",
      visita: "Visita guiada ao Senado",
      responsavel: "Responsável",
      documento: "Documento oficial com foto obrigatório para todos.",
      chegada: "Chegue com 30 minutos de antecedência.",
      nota: "Prévia do comprovante. O download de PDF é simulado neste protótipo.",
      fechar: "Fechar comprovante"
    },

    opcoes: {
      titulo: "Alterar ou cancelar",
      localizador: "Localizador",
      texto: "Escolha como deseja continuar nesta simulação.",
      manter: "Manter agendamento",
      alterar: "Alterar visita",
      cancelar: "Cancelar agendamento"
    },

    // Janela exibida depois de "Cancelar agendamento"
    cancelado: {
      titulo: "Agendamento cancelado",
      texto: ["O cancelamento é apenas demonstrativo.", "Nenhuma reserva real foi alterada."],
      etiqueta: "Cancelado",
      novo: "Novo agendamento"
    }
  }
};
