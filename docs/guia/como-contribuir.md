<span class="owner">Responsável: Caio Breno de Souza Bezerra — Infraestrutura</span>

# Como contribuir

## Introdução

Este guia é o caminho mais curto para publicar o próprio artefato sem quebrar o site.

## 1. Atualize o repositório

```bash
git clone https://github.com/Interacao-Humano-Computador/2026.2-Grupo06.git
cd 2026.2-Grupo06
git pull origin main
```

Crie uma branch com o seu nome e o artefato:

```bash
git checkout -b docs/israel-processo-design
```

## 2. Rode o site na sua máquina

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Abra <http://127.0.0.1:8000/2026.2-Grupo06/>. Se a porta 8000 estiver ocupada, o terminal mostra outra.

## 3. Edite só a sua página

| Você é | Arquivo principal |
| --- | --- |
| Luis Henrique Arruda Luna | `docs/entrega-1/cronograma.md` e `docs/entrega-1/heatmap.md` |
| Caio Breno | `docs/equipe.md`, `docs/guia/`, `docs/entrega-1/sites-avaliados.md` e `docs/entrega-1/site-escolhido.md` |
| Israel Soares | `docs/entrega-1/processo-design.md` |
| Heitor Pinheiro | `docs/entrega-1/ferramentas.md` |
| Bruno Ferreira | `docs/atas/`, `docs/apresentacoes/`, `docs/verificacao/` e tabelas de contribuição |

Imagens novas vão para `docs/assets/img/`, em pasta óbvia (`referencias/`, `equipe/`, `evidencias/`).

## 4. Antes de abrir o pull request

- [ ] Copiou o [template](template-artefato.md)
- [ ] Preencheu histórico, autor e revisor — revisor diferente do autor
- [ ] Tabelas e figuras têm número, legenda, fonte e chamada no texto
- [ ] Referências numeradas, com link quando for site
- [ ] `mkdocs build --strict` termina sem erro

```bash
mkdocs build --strict
git add docs/
git commit -m "docs: descreva o motivo da mudança"
git push -u origin HEAD
```

Abra o pull request no GitHub. O Caio ou o revisor do artefato faz o merge em `main`. O workflow publica o site sozinho.

## 5. Nomes no Git

Use nome e sobrenome reconhecíveis. O plano de ensino cobra isso para individualizar a nota.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `1.0` | 04/09/2026 | Fluxo de contribuição da infraestrutura | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |
| `1.1` | 05/09/2026 | Atualização dos arquivos principais por integrante | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |

## Referências

[1] SALES, André Barros de. Plano de Ensino FIHC 022026 — Turma 01. Brasília: FCTE/UnB, 2026.
