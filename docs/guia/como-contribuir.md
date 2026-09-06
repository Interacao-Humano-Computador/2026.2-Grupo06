<span class="owner">Responsável: Caio Breno de Souza Bezerra — Infraestrutura</span>

# Como contribuir

## Tabela de contribuição

A Tabela 1 registra quem fez o quê neste artefato.

| Integrante | Contribuição | Artefato / atividade | Gravação |
| --- | --- | --- | --- |
| [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | Fluxo de publicação no GitHub Pages | [Esta página](como-contribuir.md) | [Ata 01](../atas/ata-01.md) |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Revisão deste fluxo | [Esta página](como-contribuir.md) | [Ata 01](../atas/ata-01.md) |
| [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | Acompanhou a definição da infraestrutura na reunião de planejamento | [Ata 01](../atas/ata-01.md) | [Ata 01](../atas/ata-01.md) |
| [Israel Soares de Paiva](https://github.com/IsraelSoares-25) | Acompanhou a definição da infraestrutura na reunião de planejamento | [Ata 01](../atas/ata-01.md) | [Ata 01](../atas/ata-01.md) |
| [Luis Henrique Arruda Luna](https://github.com/Donnk61) | Acompanhou a definição da infraestrutura na reunião de planejamento | [Ata 01](../atas/ata-01.md) | [Ata 01](../atas/ata-01.md) |

<p class="caption">Tabela 1 — Contribuição neste artefato.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026).</p>

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
| Caio Breno | `docs/entrega-1/sites-avaliados.md`, `docs/entrega-1/site-escolhido.md`, `docs/equipe.md`, `docs/guia/`, tema e workflow |
| Israel Soares | `docs/entrega-1/processo-design.md` |
| Heitor Pinheiro | `docs/entrega-1/ferramentas.md` |
| Bruno Ferreira | `docs/atas/`, `docs/apresentacoes/` e `docs/verificacao/` |

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
| `1.2` | 05/09/2026 | Recoloca a tabela de contribuição no início do artefato | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |

## Referências

[1] SALES, André Barros de. Plano de Ensino FIHC 022026 — Turma 01. Brasília: FCTE/UnB, 2026.
