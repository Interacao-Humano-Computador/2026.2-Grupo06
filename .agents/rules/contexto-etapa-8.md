---
trigger: model_decision
description: Contexto completo, arquitetura técnica, padrões CSS/Markdown, método de Fagan, regra de paridade de grupos e plano passo a passo da Etapa 8 (Verificação dos artefatos V1 -> V2, criada por Caio para as Etapas 6 e 7) para replicação fiel na Etapa 4 sob responsabilidade de Bruno Ferreira Dornelas. Carregue sempre que trabalhar na Etapa 8, reinspeções V2, gráficos .v2-grafico, conferência V1 ou verificação da Etapa 4.
---

# Contexto Arquitetural da Etapa 8 — Reinspeção Formal V2 (Padrão Caio → Replicação na Etapa 4)

Este documento consolida toda a engenharia, convenções visuais, regras metodológicas e integrações construídas por Caio Breno nos commits `012dabc` e `99e67bb` para a **Etapa 8 · Verificação dos artefatos** (aplicada inicialmente às Etapas 6 e 7), servindo como guia definitivo para implementar **exatamente o mesmo padrão na Etapa 4** sob autoria de **Bruno Ferreira Dornelas**.

---

## 1. Propósito Metodológico da Etapa 8

- **Calendário no Plano de Ensino (`SALES, 2026`):** Entrega em `22/11/2026`; inspeção da entrega do Grupo +1 em `23/11/2026`; apresentação em `24/11/2026`.
- **Método adotado:** Adaptação da **Inspeção Formal de Fagan (1976)** (*Design and code inspections to reduce errors in program development*, IBM Systems Journal, v. 15, n. 3, p. 182–211, DOI `10.1147/sj.153.0182`) para artefatos de IHC em wiki:
  1. **Visão geral:** delimitar objetivo da etapa, grupo avaliado, inventário de artefatos e commit/versão de referência.
  2. **Preparação:** revisar Plano de Ensino, literatura (*Barbosa e Silva, 2010, Elsevier*) e lista V1 anterior para formular critérios **V2** operacionais e sem ambiguidade.
  3. **Inspeção:** percorrer todos os artefatos publicados no commit fixado, atribuir `Sim`, `Incompleto` ou `Não` por ID, apontar onde procurou e ligar cada constatação às linhas exatas do código-fonte.
  4. **Retrabalho:** listar na tabela de `Acompanhamento` os achados prioritários que demandam ajuste pelos autores.
  5. **Acompanhamento (*Follow-up*):** definir qual evidência objetiva encerrará cada pendência numa revisão futura.

---

## 2. Regra Estrita de Paridade dos Grupos (Commit `99e67bb`)

A reinspeção externa da Etapa 8 acompanha exatamente a divisão das fichas V1 do semestre:

| Tipo de Etapa | Autoinspeção | Inspeção Externa | Grupos da Etapa |
| --- | --- | --- | --- |
| **Etapas PARES** (`2, 4, 6`) | **Grupo 06** (*Portal do Senado Federal*) | **Grupo 05 — Grupo −1** (*SEMOB-DF*) | `grupo-06` + `grupo-05` *(NÃO inclui Grupo 07)* |
| **Etapas ÍMPARES** (`1, 3, 5, 7`) | **Grupo 06** (*Portal do Senado Federal*) | **Grupo 07 — Grupo +1** (*PCI Concursos*) | `grupo-06` + `grupo-07` *(NÃO inclui Grupo 05)* |

- **Consequência direta para a Etapa 4:** Como a Etapa 4 é **par**, ela terá **duas fichas V2**:
  1. `docs/entrega-8/grupo-06/etapa-4.md` (Autoinspeção do Grupo 06 — 5 integrantes: Bruno, Caio, Heitor, Israel e Luís)
  2. `docs/entrega-8/grupo-05/etapa-4.md` (Inspeção externa do Grupo 05 / SEMOB-DF — 7 integrantes: Arthur, Carlos, Gabriel, Igor, Lucas, Rodrigo e Tomás)
- **Repositórios e URLs oficiais:**
  - **Grupo 06:** Pages `https://interacao-humano-computador.github.io/2026.2-Grupo06/` · Repo `https://github.com/Interacao-Humano-Computador/2026.2-Grupo06`
  - **Grupo 05 (−1):** Pages `https://interacao-humano-computador.github.io/2026.2-Grupo05/` · Repo `https://github.com/Interacao-Humano-Computador/2026.2-Grupo05`

---

## 3. Regra Rigorosa de Julgamento Agregado (`Sim` / `Incompleto` / `Não`)

Na Etapa 8, cada ficha tem **uma resposta agregada por critério** cobrindo todos os artefatos daquela etapa no grupo avaliado:
- **`Sim` (`<span class="v2-status v2-sim">Sim</span>`):** a evidência cumpre integralmente a pergunta em **todos** os artefatos/integrantes aplicáveis do recorte.
- **`Incompleto` (`<span class="v2-status v2-incompleto">Incompleto</span>`):** há evidência parcial, contraditória entre dois documentos (ex.: amostra diferente entre plano de avaliação e plano de relato) **ou ao menos um integrante apresenta pendência enquanto outros atendem** (*"Em itens por integrante, um caso pendente impede Sim no agregado"*).
- **`Não` (`<span class="v2-status v2-nao">Não</span>`):** o requisito é aplicável e a evidência essencial está ausente em todo o recorte consultado (ex.: ausência de ata da etapa ou de quadro de cronograma executado).

---

## 4. Anatomia dos 6 Tipos de Página da Etapa 8 (`docs/entrega-8/`)

### 4.1. Lista V2 Oficial — `docs/entrega-8/lista-etapa-4.md`
Estrutura exata espelhada em `docs/entrega-8/lista-etapa-6.md` e `lista-etapa-7.md`:
1. **Faixa superior:** `<span class="owner">Responsável: Bruno Ferreira Dornelas · Grupo 06</span>`
2. **`# Lista de verificação da Etapa 4 · V2`** + `## Tabela de contribuição` (listando Bruno Ferreira Dornelas nas seções `Desenvolvimento do projeto`, `Conteúdo da disciplina`, `Como aplicar` e `Conferência da lista`, mais a ferramenta de IA com link para `index.md#agradecimentos`).
3. **Links rápidos:** `[Etapa 8](index.md) · [Resultados e gráficos](resultados/etapa-4.md) · [Lista V1 da Etapa 4](../verificacao/listas/etapa-4.md)`
4. **`## Como aplicar`:** explica uso idêntico no Grupo 06 e no Grupo 05 (−1) e define `Sim`, `Incompleto` e `Não`.
5. **`## Desenvolvimento do projeto` (`D01` a `D11`):**
   - Mantém exatamente os 11 IDs (`#d01`..`#d11`) com `<div class="etapa8-item" id="d01"></div>` antes de cada `??? question "D01 · ..."`.
   - **Reaproveita os 11 recortes já prontos em `docs/assets/img/entrega-8/fontes/`:**
     `historico.png` (`D01`), `autoria.png` (`D02`), `bibliografia.png` (`D03`), `figuras.png` (`D04`), `introducao.png` (`D05`), `cronograma.png` (`D06`), `atas.png` (`D07`), `gravacao.png` (`D08`), `apresentacao.png` (`D09`), `contribuicao.png` (`D10`), `ia.png` (`D11`).
   - Adapta `**Autor do item:** [Bruno Ferreira Dornelas](https://github.com/brunnf).`, `**Rastreabilidade na V1.** [D01](../verificacao/listas/etapa-4.md#d01) · ...` e `**Aplicação:** [Grupo 05](grupo-05/etapa-4.md#etapa-4-d01) · [Grupo 06](grupo-06/etapa-4.md#etapa-4-d01).`
6. **`## Conteúdo da disciplina` (`E4-01` a `E4-NN`):**
   - Consolida e refina em perguntas operacionais fechadas os critérios V1 da Etapa 4 (`E4-C02`..`E4-C13` do Plano de Ensino + `E4-C14`..`E4-C23` elaborados pelo grupo em `docs/verificacao/listas/etapa-4.md`), cobrindo os 4 artefatos/escopos da Etapa 4:
     - **Entrega e cobertura:** disponibilidade de Storyboards, Análises de Tarefas, Planejamentos da Avaliação (Storyboard e Análise de Tarefas) e Planejamentos dos Relatos em número compatível com a equipe (`E4-C10`).
     - **Modelagem de Tarefas e Storyboard:** notação/planos e tríade *input–ação–feedback* + exclusividade/exaustão e medidas de sucesso na HTA (ou operadores equivalentes quando CTT), e rastreabilidade formal entre os quadros do Storyboard e as tarefas especificadas (`E4-C09`, `E4-C14`, `E4-C15`, `E4-C16`, `E4-C18`, `E4-C19`).
     - **Planejamento da Avaliação (DECIDE):** articulação das 6 atividades do DECIDE, objetivos na fase conceitual, escolha fundamentada do método, recrutamento/amostra justificada, logística/cronograma/local/orçamento, diretrizes de conduta neutra do avaliador, teste-piloto anterior com participante distinto e descarte dos dados, e ética/TCLE com autorização de gravação (`E4-C02`..`E4-C06`, `E4-C08`, `E4-C11`, `E4-C12`, `E4-C17`, `E4-C22`, `E4-C23`).
     - **Planejamento dos Relatos:** estrutura dos 7 componentes de consolidação de Barbosa e Silva, instrumentos de anotação do avaliador, escala objetiva de severidade/priorização e explicitação dos limites de generalização (`E4-C07`, `E4-C13`, `E4-C20`, `E4-C21`).
   - **Padrão de cada item V2:**
     ```markdown
     <div class="etapa8-item" id="e4-01"></div>

     ??? question "E4-01 · [Pergunta objetiva e autocontida]?"

         **Autor do item:** [Bruno Ferreira Dornelas](https://github.com/brunnf).

         **O que conferir.** [Evidência esperada nos artefatos e fronteira entre Sim, Incompleto e Não.]

         **Rastreabilidade na V1.** [E4-C10](../verificacao/listas/etapa-4.md#e4-c10) · [mantido / refinado / consolidado].

         ![Barbosa e Silva (2010), p. NNN. Trecho grifado para o critério.](../assets/img/entrega-8/fontes/arquivo.png){ loading=lazy }

         <p class="source">Fonte: Barbosa e Silva (2010), p. NNN. O grifo indica o trecho usado no critério.</p>

         **Aplicação:** [Grupo 05](grupo-05/etapa-4.md#etapa-4-e4-01) · [Grupo 06](grupo-06/etapa-4.md#etapa-4-e4-01).
     ```
   - **Recortes de referência já existentes em `docs/assets/img/entrega-8/fontes/` que podem ser reutilizados:**
     `decide.png` (p. 313), `decide-pratica.png` (p. 313), `piloto.png` e `piloto-separacao.png` (p. 307), `etica.png` e `etica-divulgacao.png` (p. 141), `relato-consolidacao.png` e `relato-interpretacao.png` (p. 312). Novos recortes específicos de Etapa 4 (cronograma da Etapa 4 no Plano de Ensino, HTA p. 193/196, Storyboard Vianna p. 135 / Preece p. 263, postura na entrevista p. 146) devem ser gerados com `.agents/skills/lista-verificacao-ihc/scripts/destacar_trecho_pdf.py` e salvos em `docs/assets/img/entrega-8/fontes/`.
7. **`## Conferência da lista`:** explica que a exigência de autor, fonte e recorte grifado (antigos itens meta `E4-C04`/`E4-C11` quanto à lista) é auditada na própria lista V2.
8. **`## Histórico de versão` (`v2.0`) e `## Referências` (`Sales, 2026`; `Barbosa e Silva, 2010`; demais obras citadas).**

---

### 4.2. Fichas de Reinspeção — `docs/entrega-8/grupo-06/etapa-4.md` e `grupo-05/etapa-4.md`
Estrutura exata espelhada em `grupo-06/etapa-6.md` e `grupo-05/etapa-6.md`:
1. **`## Recorte consultado`:** Projeto, data/hora de Brasília da consulta ao GitHub Pages e link para a árvore do repositório fixada no hash do commit (`tree/<SHA>`).
2. **`## Critérios e respostas { #etapa-4 }`:**
   - Linha resumo: `**X Sim · Y Incompleto · Z Não** · N itens verificados`
   - Tabela dentro de `<div class="etapa8-resultados" markdown="1">`:
     ```markdown
     | Critério | Resposta | Constatação | Evidência |
     | --- | :---: | --- | --- |
     | <span id="etapa-4-d01"></span>[D01](../lista-etapa-4.md#d01) | <span class="v2-status v2-sim">Sim</span> | Síntese objetiva citando exemplos reais verificados. | [Bruno · Storyboard](https://interacao-humano-computador.github.io/2026.2-Grupo06/...#historico-de-versao) ([L180–186](https://github.com/Interacao-Humano-Computador/2026.2-Grupo06/blob/<SHA>/docs/...#L180-L186)) |
     ```
   - Link logo após `</div>`: `[Conferir as respostas da inspeção V1](../conferencia-anterior.md#grupo-06-etapa-4).` (e `#grupo-05-etapa-4`).
3. **`## Acompanhamento`:** Tabela `| Achado | Ajuste a registrar | Evidência para encerrar |` com 2 a 4 pendências prioritárias para retrabalho futuro.
4. **`## Recortes das evidências`:** `<figure class="etapa8-evidencia" markdown="1">` com captura real salva em `docs/assets/img/entrega-8/inspecao/`.
5. **`## Artefatos consultados`:** Tabela inventariando todos os integrantes/fluxos da Etapa 4 (Storyboard, Análise de Tarefas, Plano da Avaliação Storyboard, Plano do Relato Storyboard, Plano da Avaliação Tarefas, Plano do Relato Tarefas) com link da página publicada + versão vigente linkada à linha do histórico no commit.

---

### 4.3. Página de Resultados e Gráficos — `docs/entrega-8/resultados/etapa-4.md`
Usa o sistema CSS puro de `docs/assets/css/etapa-8.css` (zero JavaScript ou imagens estáticas):
- **Legenda:** `<p class="v2-legenda"><span class="v2-status v2-sim">Sim</span> <span class="v2-status v2-incompleto">Incompleto</span> <span class="v2-status v2-nao">Não</span></p>`
- **Gráfico de distribuição por grupo (`--total` = total de itens da lista V2 da Etapa 4):**
  ```html
  <div class="v2-grafico">
    <div class="v2-barra-linha"><a href="../../grupo-05/etapa-4/">Grupo 05</a><div class="v2-escala" role="img" aria-label="X Sim, Y Incompleto, Z Não"><div class="v2-partes" style="--total:27"><span class="v2-parte v2-sim" style="--qtd:X">X</span><span class="v2-parte v2-incompleto" style="--qtd:Y">Y</span><span class="v2-parte v2-nao" style="--qtd:Z">Z</span></div></div></div>
    <div class="v2-barra-linha"><a href="../../grupo-06/etapa-4/">Grupo 06</a><div class="v2-escala" role="img" aria-label="X Sim, Y Incompleto, Z Não"><div class="v2-partes" style="--total:27"><span class="v2-parte v2-sim" style="--qtd:X">X</span><span class="v2-parte v2-incompleto" style="--qtd:Y">Y</span><span class="v2-parte v2-nao" style="--qtd:Z">Z</span></div></div></div>
  </div>
  ```
- **Tabela `### Contagens e percentuais`** + **Gráfico e tabela `## Frequência dos achados`** (por sub-bloco temático, somando `Incompleto` e `Não` das duas fichas, onde `--total` nas barras é o maior valor de pendências entre os blocos da página para escalonamento visual proporcional!) + **`## Leitura dos resultados`** (3–4 tópicos analíticos comparando Grupo 06 e Grupo 05).

---

### 4.4. Páginas Compartilhadas a Integrar
Quando a Etapa 4 V2 estiver concluída, atualizar de forma cirúrgica (sem sobrescrever os dados de Caio das Etapas 6 e 7):
1. **`docs/entrega-8/index.md`:** adicionar card da `Lista V2 da Etapa 4` em `.etapa8-acessos`, linha da Etapa 4 na tabela `Listas V1 vs. V2`, links `[Etapa 4](grupo-06/etapa-4.md)` e `[Etapa 4](grupo-05/etapa-4.md)` na tabela `Escopo e versões`, atualizar contagem total de respostas e registrar contribuição de Bruno Ferreira Dornelas.
2. **`docs/entrega-8/inspecao.md`:** adicionar as 2 linhas da Etapa 4 (`Grupo 06` e `Grupo 05`) na tabela geral `Contagens e percentuais`, somar os blocos da Etapa 4 em `Frequência dos achados` (ajustando `--total` das barras CSS para o novo máximo!), incluir bullets da Etapa 4 em `Leitura dos resultados` e registrar contribuição de Bruno.
3. **`docs/entrega-8/conferencia-anterior.md`:** adicionar linhas da Etapa 4 no quadro resumo (`Grupo 06 · Etapa 4` — 23 itens respondidos em `13/10/2026`; `Grupo 05 · Etapa 4` — 23 itens respondidos em `14/10/2026`) e adicionar as duas seções completas `<div class="etapa8-historico" markdown="1">` cotejando cada resposta V1 com a evidência atual e apontando para `#etapa-4-...`.
4. **`docs/entrega-8/grupo-06/index.md` e `docs/entrega-8/grupo-05/index.md`:** incluir seção `## Etapa 4` apontando para `etapa-4.md` (e para a ficha V1 correspondente).
5. **`docs/verificacao/listas/etapa-4.md`:** adicionar no topo `!!! warning "V1 desatualizada"` apontando para `../../entrega-8/lista-etapa-4.md` e incluir `**Rastreabilidade na V2.**` em cada pergunta V1, igual a `etapa-6.md` e `etapa-7.md`.
6. **`docs/entrega-4/index.md` e `docs/verificacao/index.md`:** adicionar botão/link para a Lista V2 e reinspeção da Etapa 4.
7. **`mkdocs.yml`:**
   - Em `Etapa 8 · Verificação dos artefatos`: incluir `- Etapa 4: entrega-8/lista-etapa-4.md`, `- Etapa 4: entrega-8/resultados/etapa-4.md`, `- Etapa 4: entrega-8/grupo-06/etapa-4.md` e `- Etapa 4: entrega-8/grupo-05/etapa-4.md`.
   - Em `Verificação -> Listas de verificação`: atualizar rótulo de `Etapa 4` para `Etapa 4 · V1: verificacao/listas/etapa-4.md`.
   *(Nota: `overrides/partials/nav.html` já aplica menu expansível automático a `Resultados e gráficos` dentro da aba Etapa 8.)*

---

## 5. Roteiro de Execução por Etapas (Acordado com Bruno)

- [x] **Etapa 0 (Concluída em 19/11/2026):** Criação da lista V1 não preenchida em `docs/verificacao/listas/etapa-4.md` (`D01`–`D11` + `E4-C02`–`E4-C13` com recortes amarelos dos 2 prints oficiais do Prof. André + `E4-C14`–`E4-C23` elaborados pelo grupo) e limpeza das duplicações em `docs/verificacao/grupo-06/etapa-4/lista-verificacao.md`.
- [ ] **Etapa 1:** Construir `docs/entrega-8/lista-etapa-4.md` (Lista V2 oficial da Etapa 4, autor Bruno Ferreira Dornelas), gerar novos recortes grifados necessários em `docs/assets/img/entrega-8/fontes/` (inspecionando cada PNG com `read_file`) e amarrar `Rastreabilidade na V2` em `docs/verificacao/listas/etapa-4.md`.
- [ ] **Etapa 2:** Realizar a autoinspeção V2 completa dos artefatos de `docs/entrega-4/` do Grupo 06 e publicar `docs/entrega-8/grupo-06/etapa-4.md` (com links duplos Pages + linhas `Lxx–Lyy` no commit e recorte de evidência).
- [ ] **Etapa 3:** Consultar o repositório `2026.2-Grupo05` no commit de referência, inspecionar toda a Etapa 4 do SEMOB-DF e publicar `docs/entrega-8/grupo-05/etapa-4.md`.
- [ ] **Etapa 4:** Construir `docs/entrega-8/resultados/etapa-4.md` e integrar contagens, gráficos, conferência V1 (`conferencia-anterior.md`), índices e `mkdocs.yml`, validando obrigatoriamente com `.venv\Scripts\mkdocs.exe build --strict` (mesmo comando do GitHub Actions `.github/workflows/pages.yml`).

