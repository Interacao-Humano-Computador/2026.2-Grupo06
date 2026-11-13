'use strict';
const M=window.PrototypeModel;
const labels={draft:'Rascunho / início',author:'Aguardando o autor',response:'Resposta do autor disponível',moderation:'Aguardando moderação',disagreed:'Discordância / decisão em aberto',published:'Publicado · 12.343 apoios à ideia / 40 ao complemento',forwarded:'Encaminhado à CDH · 20.000 / 40'};
const $=s=>document.querySelector(s);
function update(){const s=M.read(localStorage);$('#current-stage').textContent=labels[s.stage];for(const [action,required] of [['author','author'],['publish','moderation'],['forward','published']])document.querySelector(`[data-sim="${action}"]`).disabled=s.stage!==required;}
function apply(action){try{const s=M.transition(M.read(localStorage),action);if(action==='reset')s.resetAt=Date.now();localStorage.setItem(M.KEY,JSON.stringify(s));$('#feedback').textContent='Cenário atualizado. Confira a aba do protótipo.';update();}catch(error){$('#feedback').textContent=error.message;}}
let pending;
function confirmReplacement(action){pending=action;$('#confirm-dialog').showModal();}
document.addEventListener('click',e=>{const action=e.target.closest('[data-sim]')?.dataset.sim;if(action==='fixture')confirmReplacement(action);else if(action)apply(action);});
$('#reset').onclick=()=>confirmReplacement('reset');
$('#confirm-replace').onclick=()=>{apply(pending);$('#confirm-dialog').close();};$('#cancel-replace').onclick=()=>$('#confirm-dialog').close();
window.addEventListener('storage',e=>{if(e.key===M.KEY)update();});
let accumulated=0,started=0,running=false;
function drawTime(){const seconds=Math.floor((accumulated+(running?performance.now()-started:0))/1000);$('#timer').textContent=String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0');}
$('#timer-toggle').onclick=()=>{if(running)accumulated+=performance.now()-started;else started=performance.now();running=!running;$('#timer-toggle').textContent=running?'Pausar':'Continuar';drawTime();};
$('#timer-reset').onclick=()=>{accumulated=0;started=performance.now();drawTime();};
$('#print').onclick=()=>window.print();setInterval(drawTime,250);update();
