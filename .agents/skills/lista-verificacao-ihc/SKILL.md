---
name: lista-verificacao-ihc
description: Cria, revisa e exporta listas de verificação (checklists de inspeção) de Interação Humano-Computador (IHC) com itens 100% autocontidos de fácil compreensão, autoria explícita do item (Bruno Ferreira Dornelas), referência ABNT exata e recorte da página do livro com destaque amarelo no trecho utilizado. Ative esta skill sempre que o usuário pedir para elaborar, corrigir, expandir ou exportar listas de verificação, itens de inspeção, checklists de etapas/artefatos de IHC ou recortes de páginas de referência com marcação.
---

# Criação de Listas de Verificação de IHC (`lista-verificacao-ihc`)

Esta skill padroniza a elaboração de **listas de verificação (*checklists* de inspeção)** na disciplina de Interação Humano-Computador (FCTE/UnB — Grupo 06), consolidando o estilo autoral de **Bruno Ferreira Dornelas** tanto para páginas do site **MkDocs Material** (`docs/verificacao/`, `docs/entrega-*/`) quanto para **documentos PDF autônomos** nos moldes das listas em `contexto/`.

---

## Os 4 Pilares Obrigatórios de Todo Item de Verificação

Nenhum item pode ser entregue sem cumprir simultaneamente estes quatro requisitos:

1. **Enunciado 100% autocontido e de fácil compreensão:**
   - Uma pessoa avaliadora **deve conseguir julgar o artefato lendo exclusivamente o enunciado do item**, sem precisar consultar o livro-texto para descobrir quais são os subitens, operadores, categorias ou definições mencionados.
   - Enumere todos os elementos obrigatórios `(1)...(n)`, defina termos técnicos entre parênteses/travessões (`— isto é, ...`) e explicite símbolos e condições de aplicabilidade dentro da própria pergunta.
   - Consulte os padrões de redação e comparações *Errado vs. Certo* em [exemplos-itens-autocontidos.md](./examples/exemplos-itens-autocontidos.md).

2. **Autoria explícita em CADA item (`Autor do item`):**
   - Todo item deve exibir explicitamente o campo de autoria atribuído a **Bruno Ferreira Dornelas** (salvo instrução expressa do usuário indicando outro integrante):
     - No MkDocs: `**Autor do item:** [Bruno Ferreira Dornelas](https://github.com/brunnf)`
     - Em PDF/documento autônomo: `Autor do item: Bruno Ferreira Dornelas` (Matrícula: `242015138` no cabeçalho).

3. **Referência bibliográfica exata (ABNT NBR 6023) fiel à edição do recorte:**
   - Informe obra completa, capítulo, seção, tabela/quadro (quando aplicável) e página(s) impressa(s) exata(s).
   - **Proibição de mistura de edições:** O livro completo em `contexto/Simone_Barbosa_and_Bruno_Silva_Auth_Interação_Humano_computador.pdf` é a edição **Elsevier, 2010** (`BARBOSA, S. D. J.; SILVA, B. S. da`). Nunca cite a edição *Autopublicação, 2021* quando a imagem recortada vier do PDF de 2010! Veja o catálogo completo e o mapa de páginas em [acervo-contexto.md](./references/acervo-contexto.md).

4. **Foto legível da página do livro marcando em amarelo o trecho exato:**
   - Todo item deve trazer o recorte real da página da obra de onde saiu o critério, mantendo parágrafos vizinhos e cabeçalho/número de página (quando próximos) para comprovar proveniência, com **marcação amarela estilo marca-texto** exatamente sobre o trecho fundamentador.
   - Se o trecho atravessar duas páginas, gere dois recortes (`Figura Na` e `Figura Nb` ou sequência contínua) e cite o intervalo de páginas (`p. X–Y`).

---

## Fluxo de Trabalho Passo a Passo

### Passo 1 — Definir escopo e formato de saída
1. Identifique o artefato ou etapa de IHC a ser verificado (ex.: *Perfil de Usuário, Personas, Elenco de Personas, Cenários, HTA, CTT, Guia de Estilo, Storyboard, Protótipo em Papel, Planejamento DECIDE, Relato de Avaliação, Protótipo de Alta Fidelidade / Teste de Usabilidade*).
2. Escolha o formato de saída apropriado conforme [templates-formatos.md](./references/templates-formatos.md):
   - **Formato A1 (MkDocs `??? question`):** padrão para listas em `docs/verificacao/listas/` e `docs/entrega-8/`.
   - **Formato A2 (MkDocs seções abertas + tabela de inspeção):** padrão para `docs/verificacao/grupo-06/etapa-*/`.
   - **Formato B (PDF acadêmico autônomo UnB/FGA):** gerado via [exportar_lista_pdf.py](./scripts/exportar_lista_pdf.py) quando o usuário pedir PDF individual.
3. Para listas com **15 ou mais itens**, organize os itens em **seções temáticas numeradas** (ou *Parte A — Artefato* e *Parte B — Planejamento/Avaliação*).

### Passo 2 — Localizar a fundamentação primária nos PDFs de `contexto/`
1. Consulte primeiro [acervo-contexto.md](./references/acervo-contexto.md) para identificar o livro, o capítulo e o deslocamento entre página impressa e página do PDF.
2. Sempre confirme o texto exato no PDF antes de redigir os itens (**nunca invente citações ou páginas de memória**). Use `C:\Python314\python.exe` com [destacar_trecho_pdf.py](./scripts/destacar_trecho_pdf.py):
   ```powershell
   # Buscar termo em PDF digital:
   C:\Python314\python.exe .agents\skills\lista-verificacao-ihc\scripts\destacar_trecho_pdf.py --pdf "Simone_Barbosa" --buscar "termo desejado"

   # Ler texto completo de uma página específica (funciona em PDFs digitais e escaneados via OCR):
   C:\Python314\python.exe .agents\skills\lista-verificacao-ihc\scripts\destacar_trecho_pdf.py --pdf "cap 8" --ler-pagina 5
   ```
3. Se a lista verificar uma etapa da disciplina, inclua também os itens exigidos pelo **Plano de Ensino** (`SALES, André Barros de. Plano de Ensino FIHC 022026 — Turma 01. Brasília: FCTE/UnB, 2026`) caso haja exigências formais da entrega.

### Passo 3 — Redigir os itens autocontidos
Para cada critério identificado na leitura:
1. Formule uma **pergunta fechada terminada em `?`** que contenha **toda** a informação necessária para respondê-la.
2. Aplique o **Teste da Autocontenção** de [exemplos-itens-autocontidos.md](./examples/exemplos-itens-autocontidos.md): se houver lista de elementos no livro, traga `(1)...(n)` para o enunciado; se houver jargão ou operador simbólico, explique-o entre parênteses; se o item depender do método escolhido pelo grupo, torne a condição explícita.
3. Escreva a rubrica objetiva de julgamento (`Sim` / `Incompleto` / `Não` no MkDocs; ou critério `Conforme` / `Não Conforme` / `Não se Aplica` no formato autônomo).
4. Preencha `Autor do item: Bruno Ferreira Dornelas`, a referência ABNT completa e a transcrição fiel do trecho que será marcado.

### Passo 4 — Gerar os recortes com destaque amarelo
Execute [destacar_trecho_pdf.py](./scripts/destacar_trecho_pdf.py) com `C:\Python314\python.exe` para cada item:
```powershell
C:\Python314\python.exe .agents\skills\lista-verificacao-ihc\scripts\destacar_trecho_pdf.py `
  --pdf "Simone_Barbosa" `
  --pagina 198 `
  --incluir-cabecalho `
  --trecho "A HTA examina primeiramente os objetivos de alto nível (por exemplo, marcar uma reunião), decompondo-os em subobjetivos" `
  --saida "docs/assets/img/referencias/hta_item01.png"
```
- **Dicas de parâmetros de `destacar_trecho_pdf.py`:**
  - Repita `--trecho "..."` se precisar destacar duas frases na mesma página.
  - Use `--incluir-cabecalho` em livros com numeração no topo (*Barbosa & Silva*, *Preece et al.*) e `--incluir-rodape` em livros com numeração na base (*Vianna et al.*), quando o trecho estiver próximo da margem correspondente.
  - Em PDFs de página dupla (*Vianna et al.*, *Santa-Rosa & Moraes*), `--lado auto` já recorta apenas a página esquerda ou direita automaticamente; se necessário, force `--lado esq` ou `--lado dir`.
  - Para destacar quadros/diagramas sem texto contínuo, use `--bbox x0,y0,x1,y1` (valores entre `0.0` e `1.0`).

### Passo 5 — Verificação visual OBRIGATÓRIA de cada imagem gerada
> **REGRA INEGOCIÁVEL:** Chame a ferramenta `read_file` sobre **100% dos arquivos `.png` gerados** antes de dar a tarefa por concluída!

Em cada imagem aberta com `read_file`, confira:
1. O marca-texto amarelo cobre **exatamente** as linhas pretendidas (sem deslocamento vertical ou corte de palavras)?
2. O texto preto permanece nítido e o entorno da página dá contexto suficiente?
3. O número da página impressa e a edição visível no cabeçalho/rodapé batem exatamente com a página citada na referência ABNT?
Se qualquer resposta for "não", ajuste `--trecho`, `--pagina`, `--margem-v` ou `--bbox` e gere novamente.

### Passo 6 — Montar o artefato final (MkDocs e/ou PDF)
- **Para páginas MkDocs (`docs/`):**
  - Siga rigorosamente o template de [templates-formatos.md](./references/templates-formatos.md): faixa `<span class="owner">`, `Tabela de contribuição`, `Introdução`, blocos de itens com `<figure markdown="span">` (atributo `alt` descritivo **diferente** do `<figcaption>`, chamada `"A Figura N apresenta..."` no texto e `<p class="source">Fonte: ...</p>`), `Agradecimentos` (nomeando a ferramenta de IA caso aplicável), `Histórico de versão` (revisor diferente do autor!) e `Referências` numeradas `[1]`, `[2]`.
  - Se criar uma página nova em `docs/`, adicione-a em `mkdocs.yml` na seção apropriada de `nav`.
- **Para PDF autônomo:**
  - Monte o arquivo JSON UTF-8 seguindo o esquema do Formato B em [templates-formatos.md](./references/templates-formatos.md) e gere o PDF com:
    ```powershell
    C:\Python314\python.exe .agents\skills\lista-verificacao-ihc\scripts\exportar_lista_pdf.py `
      --json "caminho/especificacao.json" `
      --saida "caminho/ListaVerificacao.pdf"
    ```
  - Inspecione as páginas do PDF gerado com `read_file` para confirmar paginação, acentuação e enquadramento das figuras.

### Passo 7 — Checklist final de validação antes de entregar
- [ ] Todos os itens são **autocontidos** (zero dependência de abrir o livro para saber o que verificar)?
- [ ] Todos os itens exibem explicitamente **Bruno Ferreira Dornelas** como **Autor do item**?
- [ ] Todas as imagens `.png` foram inspecionadas com `read_file` e têm o trecho correto marcado em amarelo?
- [ ] A edição citada na ABNT coincide com o PDF da captura (`Elsevier, 2010` para `Simone_Barbosa...pdf`)?
- [ ] Se houve edição em `docs/`, o build do site passa sem quebras (`c:\Dev\IHC\2026.2-Grupo06\.venv\Scripts\mkdocs.exe build`)?

