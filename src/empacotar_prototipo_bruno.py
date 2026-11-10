"""Atualiza o roteiro HTML e cria um pacote portátil do protótipo de Bruno."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import re
import markdown

ROOT = Path(__file__).resolve().parents[1]
PROTOTYPE = ROOT / 'docs/prototipos/bruno/alta-fidelidade'
SOURCE = ROOT / 'docs/entrega-6/individual/bruno/roteiro-teste-alta-fidelidade.md'
body = markdown.markdown(SOURCE.read_text(encoding='utf-8'), extensions=['tables', 'toc', 'pymdownx.details'])
body = body.replace('../../../prototipos/bruno/alta-fidelidade/', '')
body = body.replace('../../../assets/img/entrega-6/referencias/barbosa-p343.png', 'assets/barbosa-p343.png')
# Links aos artefatos acadêmicos continuam consultáveis na versão pública do projeto.
site = re.search(r'^site_url:\s*(.*?)\s*$', (ROOT / 'mkdocs.yml').read_text(encoding='utf-8'), re.M)[1].strip('"\'').rstrip('/')
body = body.replace('href="roteiro-teste-presencial.md"', 'href="'+site+'/entrega-6/individual/bruno/roteiro-teste-presencial/"')
body = re.sub(r'href="\.\./\.\./\.\./([^"#]+)\.md(#[^"]*)?"', lambda m: 'href="'+site+'/'+m[1]+'/'+(m[2] or '')+'"', body)
html = '''<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Roteiro do teste — complementos de ideias legislativas</title><link rel="stylesheet" href="styles.css"><style>.guide{max-width:960px;margin:auto;padding:32px 24px;background:white}.guide h2{margin-top:40px;border-bottom:1px solid #d5dce1;padding-bottom:10px}.guide h3{margin-top:28px}.guide table{width:100%;border-collapse:collapse;font-size:.85rem;display:block;overflow-x:auto}.guide td,.guide th{border:1px solid #d5dce1;padding:10px;text-align:left;min-width:100px}.guide blockquote{margin:18px 0;padding:18px 24px;background:#edf3f8;border-left:4px solid #005b97}.guide img{max-width:100%;height:auto}.caption,.source{font-size:.78rem;color:#60676c}.owner{font-size:.8rem;color:#60676c}.guide li{margin:10px 0}</style></head><body><main class="guide"><div class="actions"><a class="button" href="index.html">Abrir protótipo</a><a class="button secondary" href="moderador.html">Painel do moderador</a><button class="button ghost" onclick="window.print()">Imprimir / salvar como PDF</button></div>'''+body+'</main></body></html>'
(PROTOTYPE/'roteiro.html').write_text(html,encoding='utf-8')
(PROTOTYPE/'assets/barbosa-p343.png').write_bytes((ROOT/'docs/assets/img/entrega-6/referencias/barbosa-p343.png').read_bytes())
out=ROOT/'output/prototipo-bruno'
out.mkdir(parents=True,exist_ok=True)
with ZipFile(out/'prototipo-complementos-AF-1.0.zip','w',ZIP_DEFLATED) as archive:
    for path in sorted(PROTOTYPE.rglob('*')):
        if path.is_file(): archive.write(path, path.relative_to(PROTOTYPE))
print(out/'prototipo-complementos-AF-1.0.zip')
