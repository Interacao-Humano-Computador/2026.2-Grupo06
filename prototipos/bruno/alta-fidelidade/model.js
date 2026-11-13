/* Estado fictício, compartilhado apenas entre abas deste navegador/origem. */
(function (root) {
  'use strict';
  const KEY = 'ihc-grupo06-bruno-af-1.0';
  const original = 'Incentivar o atendimento noturno nas bibliotecas comunitárias para permitir o acesso de pessoas que trabalham ou estudam durante o dia.';
  const suffix = 'conforme a demanda da comunidade e as condições de cada biblioteca.';
  const fresh = () => ({version:'AF-1.0', signedIn:false, stage:'draft', title:'', text:'', reason:'', acceptedText:'', ideaSupported:false, otherSupported:false});
  function read(storage) {try {return {...fresh(), ...JSON.parse(storage.getItem(KEY) || '{}')};} catch {return fresh();}}
  function adjusted(text) {return (text.trim().replace(/[.!?]+$/, '') || original.replace(/\.$/, '')) + ', ' + suffix;}
  function transition(s, action, payload = {}) {
    const n = {...s};
    switch(action) {
      case 'login': n.signedIn = true; break;
      case 'logout': n.signedIn = false; break;
      case 'draft': if (!['draft','disagreed'].includes(s.stage)) throw Error('O complemento já foi enviado.'); Object.assign(n, {title:payload.title, text:payload.text, stage:'draft'}); break;
      case 'submit': if (s.stage !== 'draft' || !s.signedIn || !s.title.trim() || !s.text.trim()) throw Error('Preencha e revise o complemento antes de enviar.'); n.stage='author'; break;
      case 'author': if(s.stage!=='author') throw Error('A resposta só pode chegar após o envio.'); n.stage='response'; break;
      case 'accept': if(s.stage!=='response') throw Error('Não há ajuste aguardando sua decisão.'); n.stage='moderation'; n.acceptedText=adjusted(s.text); break;
      case 'disagree': if(s.stage!=='response' || !payload.reason?.trim()) throw Error('Registre o motivo da discordância.'); n.stage='disagreed'; n.reason=payload.reason.trim(); break;
      case 'publish': if(s.stage!=='moderation') throw Error('A publicação exige concordância com o texto.'); n.stage='published'; break;
      case 'forward': if(s.stage!=='published') throw Error('Publique o complemento antes do encaminhamento.'); n.stage='forwarded'; break;
      case 'fixture': return {...fresh(),signedIn:true,stage:'published',title:'Atendimento noturno',text:original,acceptedText:adjusted(original)};
      case 'reset': return fresh();
      case 'supportIdea': n.ideaSupported=true; break;
      case 'supportOther': n.otherSupported=!s.otherSupported; break;
      default: throw Error('Ação desconhecida.');
    }
    return n;
  }
  const api={KEY,original,suffix,fresh,read,adjusted,transition};
  if(typeof module!=='undefined') module.exports=api; else root.PrototypeModel=api;
})(typeof window!=='undefined'?window:globalThis);
