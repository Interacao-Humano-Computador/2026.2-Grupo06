<div align="center">

<img src="docs/assets/img/marca/senado-icon.png" alt="Marca do Senado Federal" width="96">

# 2026.2 — Grupo 06

**Avaliação e reprojeto do Portal do Senado Federal**

Interação Humano-Computador · FCTE/UnB · 2026.2

</div>

Documentação do projeto de Interação Humano-Computador do Grupo 06, Faculdade de Ciências e Tecnologias em Engenharia da Universidade de Brasília, semestre 2026.2. O site avaliado no projeto é o [Portal do Senado Federal](https://www12.senado.leg.br/).

**Site do grupo:** [https://interacao-humano-computador.github.io/2026.2-Grupo06/](https://interacao-humano-computador.github.io/2026.2-Grupo06/)

Professor: André Barros de Sales.

## Equipe

| Integrante | GitHub |
| --- | --- |
| Bruno Ferreira Dornelas | [brunnf](https://github.com/brunnf) |
| Caio Breno de Souza Bezerra | [CaioBezerra-Dev](https://github.com/CaioBezerra-Dev) |
| Heitor Pinheiro Gonçalves das Chagas | [Heitorovski01](https://github.com/Heitorovski01) |
| Israel Soares de Paiva | [IsraelSoares-25](https://github.com/IsraelSoares-25) |
| Luis Henrique Arruda Luna | [Donnk61](https://github.com/Donnk61) |

## Identidade visual

A documentação segue a identidade gráfica do Senado Federal. As cores foram conferidas na folha de estilo de produção do portal e ficam centralizadas em `docs/assets/css/extra.css`.

| Papel | Cor | Onde aparece |
| --- | --- | --- |
| Azul escuro institucional | `#00305C` | Cabeçalho, rodapé, cabeçalhos de tabela |
| Azul primário | `#007DB8` | Barra de navegação, links de destaque, ícones |
| Azul secundário | `#005B9E` | Links do corpo de texto, estados ativos |
| Amarelo institucional | `#FAA731` | Filete da navegação e do rodapé, aba ativa, botão principal, foco de teclado |
| Neutros | `#F1F1F1` e `#CCCCCC` | Fundo da página e bordas |

A marca oficial fica em `docs/assets/img/marca/`: `senado-icon.png` (símbolo, usado como logo do cabeçalho e favicon) e `senado.svg` (assinatura horizontal em branco, para fundo escuro).

## Estrutura

```text
docs/                 páginas do GitHub Pages
  entrega-1/          planejamento (Entrega 1)
  atas/               atas de reunião
  apresentacoes/      vídeos de cada etapa
  guia/               template, legendas, ABNT, acessibilidade
  proximas/           âncoras das etapas 2 a 8 e final
  assets/             imagens, CSS e JavaScript
overrides/            ajustes do tema Material
.github/workflows/    publicação automática
mkdocs.yml            navegação e tema
```

A lógica do site é documental: cada artefato vive em Markdown, reutiliza o mesmo contrato (histórico, autor, revisor, legendas e referências) e é publicado pelo Material for MkDocs. O modo alto contraste e o controle de fonte ficam no tema, não em cada página.

## Como rodar localmente

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Guia completo: [docs/guia/como-contribuir.md](docs/guia/como-contribuir.md).

## Publicação

O workflow `.github/workflows/pages.yml` gera o site a cada push em `main` e envia o resultado à branch `gh-pages`. No repositório, em **Settings → Pages**, escolha Deploy from a branch e selecione `gh-pages`.

## Licença

Material acadêmico da disciplina. O conteúdo dos artefatos pertence aos autores do grupo.
