// Local preview of the MkDocs build. No dependencies or remote requests.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../site');
const prefix = '/2026.2-Grupo06';
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.pdf':'application/pdf','.mp4':'video/mp4','.drawio':'application/xml','.txt':'text/plain; charset=utf-8','.woff2':'font/woff2','.ico':'image/x-icon'};
const server = http.createServer((req,res) => {
  let pathname;
  try { pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname); }
  catch { res.writeHead(400);res.end('Invalid URL');return; }
  if (pathname === '/') {res.writeHead(302,{Location:prefix+'/entrega-4/'});res.end();return;}
  if (pathname === prefix) {res.writeHead(302,{Location:prefix+'/'});res.end();return;}
  if (pathname.startsWith(prefix+'/')) pathname=pathname.slice(prefix.length);
  let target=path.resolve(root,'.'+pathname);
  if (target !== root && !target.startsWith(root+path.sep)) {res.writeHead(403);res.end();return;}
  try {
    if (fs.statSync(target).isDirectory()) {
      if (!pathname.endsWith('/')) {res.writeHead(302,{Location:req.url.split('?')[0]+'/'});res.end();return;}
      target=path.join(target,'index.html');
    }
    const stat=fs.statSync(target);
    if (!stat.isFile()) throw new Error('not a file');
    const headers={'Content-Type':types[path.extname(target)]||'application/octet-stream','Content-Length':stat.size,'Cache-Control':'no-store'};
    if (target.endsWith('.drawio')) headers['Content-Disposition']='attachment; filename="storyboard-caio.drawio"';
    res.writeHead(200,headers);
    if(req.method==='HEAD')res.end();else fs.createReadStream(target).pipe(res);
  } catch {res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Página não encontrada.');}
});
const port=Number(process.env.PORT||3187);
const base='http://127.0.0.1:'+port+prefix;
async function checkPreview() {
  const routes=['/entrega-2/individual/caio/perfil-2/perfil-usuario/','/entrega-2/individual/caio/perfil-2/persona/','/entrega-2/individual/caio/perfil-2/analise-tarefas/','/entrega-4/','/entrega-4/caio/','/entrega-4/caio/avaliacao/','/entrega-4/caio/relatos/'];
  for (const route of routes) {
    const response=await fetch(base+route);
    if (!response.ok) throw new Error(route+': HTTP '+response.status);
    console.log('HTTP '+response.status+' '+route);
  }
}
server.on('error',async error=>{
  if(error.code!=='EADDRINUSE')throw error;
  try {await checkPreview();console.log('A prévia já está rodando em '+base+'/entrega-4/');}
  catch(problem) {console.error('Porta ocupada; falha na verificação:',problem.message);process.exitCode=1;}
});
server.listen(port,'127.0.0.1',async()=>{
  console.log('Prévia local: '+base+'/entrega-4/');
  try {await checkPreview();}catch(error){console.error(error.message);}
});
