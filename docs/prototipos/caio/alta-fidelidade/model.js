(function (root) {
  "use strict";
  const sample = { title: "Orientações claras nos serviços", description: "Explicar documentos e etapas em linguagem simples." };
  const create = () => ({ authenticated: false, title: "", description: "", reviewed: false, submitted: false, status: "Recebida", date: "11/11/2026", timePassed: false });
  function personalData(text) {
    return /\b(?:cpf|rg|telefone|celular|contato|endereço|endereco)\s*[:\-]|\b\d{3}\.?\d{3}\.?\d{3}[-.]?\d{2}\b|\b(?:\(?\d{2}\)?\s*)?\d{4,5}[-\s]?\d{4}\b|[\w.+-]+@[\w.-]+\.[a-z]{2,}|\[telefone fictício\]/i.test(text);
  }
  function validate(title, description) {
    if (!title.trim() || !description.trim()) return "Preencha o título e a descrição para revisar sua ideia.";
    if (title.trim().length > 100 || description.trim().length > 1000) return "Use até 100 caracteres no título e 1.000 na descrição deste protótipo.";
    if (personalData(title + " " + description)) return "Retire dados pessoais do texto, como telefone, CPF, endereço ou e-mail, antes de continuar.";
    return "";
  }
  function submit(state, confirmed) {
    if (state.submitted) return { ...state };
    if (!state.authenticated || !state.reviewed || !confirmed || validate(state.title, state.description)) throw new Error("Revise o texto e confirme a conferência antes de enviar.");
    return { ...state, submitted: true, status: "Recebida" };
  }
  function prepare(kind) {
    const state = { ...create(), authenticated: true, ...sample };
    if (kind === "clean") return state;
    if (kind === "draft") { state.description += " Contato: [telefone fictício]"; return state; }
    state.reviewed = true; state.submitted = true;
    if (kind === "reviewing") state.status = "Em avaliação";
    if (kind === "published") { state.status = "Publicada para receber apoios"; state.timePassed = true; }
    if (kind === "archived") state.status = "Arquivada";
    return state;
  }
  const api = { create, validate, personalData, submit, prepare, sample };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.IdeaModel = api;
})(typeof window !== "undefined" ? window : {});
