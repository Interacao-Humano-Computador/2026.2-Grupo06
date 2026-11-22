<span class="owner">Responsável: Heitor Pinheiro Gonçalves das Chagas · Grupo 06</span>

# Proposta de complementação das listas de verificação V2 · Etapas 1 e 2

## Tabela de contribuição

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | Revisão comparativa entre as listas V2 das Etapas 1 e 2 e as oito listas consolidadas de referência, definição de recomendações e conferência metodológica | [Documento completo](#escopo-e-fontes-comparadas) |
| Antigravity e Google Gemini | Apoio à comparação semântica dos 136 critérios consolidados, construção da matriz de rastreabilidade e redação estruturada da proposta | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuição neste artefato.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

[Etapa 8](index.md) · [Lista da Etapa 1 · V2](lista-etapa-1.md) · [Lista da Etapa 2 · V2](lista-etapa-2.md)

## Introdução

Este relatório analisa a possibilidade de complementar as listas de verificação **V2** já elaboradas para as **Etapas 1 e 2** no âmbito da **Etapa 8** do projeto de Interação Humano-Computador (Grupo 06 — Portal do Senado Federal), tomando como base comparativa as oito listas consolidadas de referência elaboradas por Bruno Ferreira Dornelas e Heitor Pinheiro Gonçalves das Chagas.

O objetivo é identificar **lacunas reais de cobertura metodológica ou exigências comprovadas da disciplina** que justifiquem novos itens ou ajustes pontuais de redação, **sem recriar as listas oficiais**, **sem importar critérios indiscriminadamente** e **sem atribuir resultados de conformidade aos artefatos avaliados**. Nenhuma lista oficial foi alterada nesta rodada.

---

## 1. Escopo e fontes comparadas

### 1.1 Listas oficiais V2 avaliadas (alvo da proposta)

O vínculo das listas V2 com a Etapa 8 foi confirmado simultaneamente pelo conteúdo dos arquivos, pelos cabeçalhos internos e pela navegação declarada em `mkdocs.yml` (seção `Etapa 8`). Não houve ambiguidade entre conjuntos concorrentes.

| Lista oficial V2 | Caminho absoluto | Estrutura atual | Escopo de aplicação na Etapa 8 |
| --- | --- | --- | --- |
| Lista de verificação da Etapa 1 · V2 | `C:/Users/heito/2026.2-Grupo06/docs/entrega-8/lista-etapa-1.md` | 24 itens (`D01`–`D11`; `E1-01`–`E1-13`) | Autoinspeção do Grupo 06 e inspeção externa do Grupo 07 (+1) |
| Lista de verificação da Etapa 2 · V2 | `C:/Users/heito/2026.2-Grupo06/docs/entrega-8/lista-etapa-2.md` | 27 itens (`D01`–`D11`; `E2-01`–`E2-16`) | Autoinspeção do Grupo 06 e inspeção externa do Grupo 05 (−1) |

<p class="caption">Tabela 2 — Listas oficiais V2 comparadas.</p>
<p class="source">Fonte: repositório 2026.2-Grupo06 (2026).</p>

### 1.2 Listas consolidadas de referência e documentos auxiliares analisados

Todos os arquivos abaixo pertencem à pasta `C:/Users/heito/Documents/Listas de verificacao/Listas_Markdown/Consolidadas/`:

1. `README.md` e `Relatório de consolidação.md` (metadados, rastreabilidade de origem, correções conceituais e alertas bibliográficos).
2. `Lista DECIDE Consolidada.md` (`DEC-01` a `DEC-14` — 14 critérios).
3. `Lista Métodos de Avaliação Consolidada.md` (`MAV-01` a `MAV-16` — 16 critérios).
4. `Lista Perfil de Usuário Consolidada.md` (`PER-01` a `PER-46` — 46 critérios).
5. `Lista Personas Consolidada.md` (`PSN-01` a `PSN-13` — 13 critérios).
6. `Lista Elenco de Personas Consolidada.md` (`ELP-01` a `ELP-08` — 8 critérios).
7. `Lista Cenários Consolidada.md` (`CEN-01` a `CEN-20` — 20 critérios).
8. `Lista HTA Consolidada.md` (`HTA-01` a `HTA-10` — 10 critérios).
9. `Lista CTT Consolidada.md` (`CTT-01` a `CTT-09` — 9 critérios).

Total de critérios consolidados comparados: **136 critérios**.

### 1.3 Artefatos do projeto e referências internas consultados para confirmar o escopo real

- **Navegação, método e padrão V2:** `mkdocs.yml`, `docs/entrega-8/index.md`, `docs/entrega-8/lista-etapa-6.md`, `docs/entrega-8/lista-etapa-7.md`, `docs/guia/template-artefato.md`.
- **Artefatos da Etapa 1:** `docs/equipe.md`, `docs/entrega-1/cronograma.md`, `docs/entrega-1/heatmap.md`, `docs/entrega-1/sites-avaliados.md`, `docs/entrega-1/site-escolhido.md`, `docs/entrega-1/processo-design.md`, `docs/entrega-1/ferramentas.md`, `docs/entrega-1/lista-verificacao.md`, `docs/verificacao/grupo-06/etapa-1/lista-verificacao.md` e `docs/verificacao/grupo-07/etapa-1/lista-verificacao.md`.
- **Artefatos da Etapa 2:** `docs/entrega-2/perfil-usuario.md`, `docs/entrega-2/etica.md`, `docs/entrega-2/tecnicas-coleta.md`, `docs/entrega-2/elenco-personas.md`, `docs/entrega-2/cenarios.md`, `docs/entrega-2/analise-tarefas.md`, páginas individuais de referência (`docs/entrega-2/individual/heitor/persona.md`, `cenario.md`, `analise-tarefas.md`), `docs/verificacao/grupo-06/etapa-2/lista-verificacao.md` e `docs/verificacao/grupo-05/etapa-2/lista-verificacao.md`.

### 1.4 Confirmação da associação assunto → etapa e notas de escopo

- **Etapa 1 (`DECIDE` e `Métodos de Avaliação`):** Associação **confirmada parcialmente**. Na Etapa 1, os integrantes planejaram e executaram avaliações individuais dos sites candidatos com **DECIDE** e **Avaliação Heurística** (Nielsen), sem participação direta de usuários e sem Percurso Cognitivo. Por isso:
  - Critérios de **recrutamento e ética com usuários** (`DEC-11`, `DEC-12`) e de **Percurso Cognitivo** (`MAV-16`) ou **consolidação multiavaliador** (`MAV-14`) não se aplicam às inspeções individuais da Etapa 1 do Grupo 06, sendo mais aderentes às **Etapas 4, 5 e 6** (planejamentos de avaliação com usuários/protótipos), salvo se o grupo inspecionado externamente (Grupo 07) tiver adotado essas práticas já na Etapa 1.
- **Etapa 2 (`Perfil de Usuário`, `Personas`, `Elenco de Personas`, `Cenários`, `HTA` e `CTT`):** Associação **confirmada com ressalvas de técnica e fase**:
  - No **Perfil de Usuário**, o Grupo 06 adotou **entrevistas semiestruturadas**, **observação de tarefa com relato em voz alta** e **análise documental**, não utilizando **questionários** (`PER-33`–`PER-37`) nem **brainstorming de necessidades e desejos** (`PER-38`–`PER-46`). Contudo, a ficha V1 do Grupo 05 (`docs/verificacao/grupo-05/etapa-2/lista-verificacao.md`) indica uso de brainstorming naquele grupo — razão pela qual `PER-38`–`PER-46` foram classificados como `pendente de evidência` para decisão sobre inclusão de bloco condicional.
  - Em **Cenários**, os artefatos da Etapa 2 são **cenários de análise / situação existente** (Barbosa & Silva, 2010), não cenários de design conceitual ou validação de protótipos. Logo, `CEN-12`, `CEN-13`, `CEN-15`–`CEN-18` (Preece et al., 2005) são **não aplicáveis** à Etapa 2 e pertencem às etapas posteriores de design conceitual e prototipação (Etapas 4–6).
  - Em **CTT**, o uso na Etapa 2 é diagnóstico de tarefas existentes, tornando `CTT-04` (solução de design da interação) complementar/opcional nesta etapa.

---

## 2. Resumo da cobertura por etapa e assunto

A Tabela 3 consolida a classificação dos **136 critérios** analisados segundo as seis categorias estabelecidas.

| Etapa / Assunto | Total | Já coberto | Parcialmente coberto | Ausente e necessário | Complementar opcional | Não aplicável | Pendente de evidência |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Etapa 1 — DECIDE** | 14 | 1 | 7 | 4 | 0 | 2 | 0 |
| **Etapa 1 — Métodos de Avaliação** | 16 | 2 | 2 | 6 | 4 | 2 | 0 |
| **Subtotal Etapa 1** | **30** | **3** | **9** | **10** | **4** | **4** | **0** |
| **Etapa 2 — Perfil de Usuário** | 46 | 13 | 7 | 7 | 5 | 5 | 9 |
| **Etapa 2 — Personas** | 13 | 5 | 4 | 3 | 1 | 0 | 0 |
| **Etapa 2 — Elenco de Personas** | 8 | 2 | 1 | 2 | 3 | 0 | 0 |
| **Etapa 2 — Cenários** | 20 | 7 | 1 | 2 | 4 | 6 | 0 |
| **Etapa 2 — HTA** | 10 | 3 | 1 | 4 | 2 | 0 | 0 |
| **Etapa 2 — CTT** | 9 | 2 | 5 | 1 | 1 | 0 | 0 |
| **Subtotal Etapa 2** | **106** | **32** | **19** | **19** | **16** | **11** | **9** |
| **Total Geral** | **136** | **35** | **28** | **29** | **20** | **15** | **9** |

<p class="caption">Tabela 3 — Síntese quantitativa da cobertura dos 136 critérios consolidados frente às listas V2 das Etapas 1 e 2.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

**Síntese qualitativa das lacunas:**

- **Etapa 1:** Os requisitos do plano de ensino (`D01`–`D11`, `E1-01`–`E1-10`) estão bem estruturados, mas os três itens de avaliação (`E1-11`, `E1-12`, `E1-13`) verificam apenas a presença genérica das seis letras do DECIDE, os três fatores de severidade e o nome/categoria do método. Faltam verificações objetivas sobre **delimitação de escopo**, **perguntas alinhadas ao objetivo**, **justificativa metodológica e caráter formativo/somativo**, **questões práticas**, **confiabilidade e validades**, **estrutura do relato** e **elementos mínimos da Avaliação Heurística** (heurísticas adotadas, 4 campos por violação, escala 1–4 e justificativa do número de avaliadores).
- **Etapa 2:** A lista V2 cobre bem os atributos de perfil (`E2-02`/`E2-03`), ética básica (`E2-04`–`E2-06`), elementos estruturais de personas (`E2-09`), elementos de cenários (`E2-10`/`E2-11`) e notação básica de HTA/CTT (`E2-13`–`E2-16`). As lacunas mais críticas concentram-se em: (1) **qualidade metodológica das entrevistas** (`PER-28`–`PER-32`), técnica usada por todos os integrantes sem verificação específica; (2) **usuários primários/secundários e stakeholders indiretos** (`PER-18`/`PER-19`); (3) **qualidade conceitual dos objetivos de personas** (condições finais vs. tarefas e ausência de falsos objetivos — `PSN-11`/`PSN-12`); (4) **representatividade do elenco por papel e critério de Cooper** (`ELP-01`/`ELP-02`/`ELP-06`); (5) **natureza narrativa e distinção situação atual vs. proposta nos cenários** (`CEN-01`/`CEN-02`); (6) **rigor lógico e validação da HTA** (`HTA-03`–`HTA-05`, `HTA-10`); e (7) **regra hierárquica pai/filho e correção semântica dos operadores CTT** (`CTT-02`, `CTT-05`–`CTT-09`).

---

## 3. Matriz rastreável completa (136 critérios)

Legenda de arquivos consolidados:
`DEC` = `Lista DECIDE Consolidada.md` · `MAV` = `Lista Métodos de Avaliação Consolidada.md` · `PER` = `Lista Perfil de Usuário Consolidada.md` · `PSN` = `Lista Personas Consolidada.md` · `ELP` = `Lista Elenco de Personas Consolidada.md` · `CEN` = `Lista Cenários Consolidada.md` · `HTA` = `Lista HTA Consolidada.md` · `CTT` = `Lista CTT Consolidada.md`.

### 3.1 Etapa 1 — DECIDE e Métodos de Avaliação (30 critérios)

| ID e arquivo | Item V2 relacionado | Classificação | Justificativa | Recomendação |
| --- | --- | --- | --- | --- |
| `DEC-01` (`DEC`) | `E1-11` | Parcialmente coberto | `E1-11` exige "determinar os objetivos", mas não verifica escolha entre os 4 objetivos de IHC nem justificativa ("por quê" e "para quem"). | Propor novo item `E1-14` (unido a `DEC-02` e `MAV-06`) para não sobrecarregar `E1-11`. |
| `DEC-02` (`DEC`) | Nenhum | Ausente e necessário | Nenhum item verifica a delimitação de telas/fluxos/tarefas/perfis avaliados e sua justificativa vinculada aos objetivos. | Incluir no novo item `E1-14`. |
| `DEC-03` (`DEC`) | `E1-11` | Parcialmente coberto | `E1-11` cita apenas "explorar as perguntas", sem checar especificidade nem aderência ao objetivo de apropriação de tecnologia (condicional). | Incluir no novo item condicional `E1-15` (unificando `DEC-03`–`DEC-06`). |
| `DEC-04` (`DEC`) | `E1-11` | Parcialmente coberto | Idem para o objetivo condicional de comparação de alternativas de design. | Incluir no novo item condicional `E1-15`. |
| `DEC-05` (`DEC`) | `E1-11` | Parcialmente coberto | Idem para conformidade com padrões (condicional; ocorre no projeto em verificações WCAG/e-MAG). | Incluir no novo item condicional `E1-15`. |
| `DEC-06` (`DEC`) | `E1-11` | Parcialmente coberto | Idem para identificação de problemas de interação e interface (condicional; ocorre em todos os sites candidatos). | Incluir no novo item condicional `E1-15`. |
| `DEC-07` (`DEC`) | `E1-13` | Já coberto | `E1-13` verifica explicitamente nomeação da técnica e classificação nos três grupos (investigação, observação de uso ou inspeção). | Manter `E1-13` sem alteração. |
| `DEC-08` (`DEC`) | `E1-11`, `E1-13` | Ausente e necessário | Nenhum item exige justificar a adequação do método aos objetivos/perguntas considerando restrições práticas (prazo, recursos, experiência). | Propor novo item `E1-16` (junto com `MAV-02` e `MAV-03`). |
| `DEC-09` (`DEC`) | `E1-11` | Parcialmente coberto | `E1-04` cobre o cronograma do projeto, mas não o cronograma das etapas da avaliação; `E1-11` cita "questões práticas" apenas genericamente. | Propor novo item `E1-17` (junto com `DEC-10`). |
| `DEC-10` (`DEC`) | `E1-11` | Parcialmente coberto | `E1-11` não detalha verificação de equipamentos, ambiente, equipe e materiais de apoio (Etapa I do DECIDE). | Incluir no novo item `E1-17`. |
| `DEC-11` (`DEC`) | Nenhum | Não aplicável | Recrutamento de usuários aplica-se apenas a métodos com participação direta de usuários; na Etapa 1 o Grupo 06 realizou inspeções puras. Mais aderente às Etapas 4–6. | Não incluir na Etapa 1 (registrar nota condicional caso o Grupo 07 utilize usuários). |
| `DEC-12` (`DEC`) | Nenhum | Não aplicável | TCLE e proteção ética de participantes não se aplicam a inspeções sem usuários na Etapa 1 (já cobertos na Etapa 2 em `E2-04`–`E2-06` e aplicáveis às Etapas 4–6). | Não incluir na Etapa 1 (nota condicional se houver usuários). |
| `DEC-13` (`DEC`) | `E1-11` | Ausente e necessário | Confiabilidade e validades (interna, externa e ecológica) compõem a Etapa E do DECIDE e estão completamente ausentes da lista V2. | Propor novo item `E1-18`. |
| `DEC-14` (`DEC`) | `E1-06`, `E1-11` | Ausente e necessário | `E1-06` só confirma presença de resumo e PDFs; nenhum item verifica se o relato consolidado contém os 7 tópicos metodológicos esperados. | Propor novo item `E1-19` (absorvendo `MAV-15`). |
| `MAV-01` (`MAV`) | `E1-13` | Já coberto | `E1-13` já verifica identificação e classificação correta do método nas três categorias. | Manter `E1-13`. |
| `MAV-02` (`MAV`) | `E1-13` | Ausente e necessário | `E1-13` não verifica coerência/justificativa do método em função do objetivo da avaliação. | Incluir no novo item `E1-16`. |
| `MAV-03` (`MAV`) | Nenhum | Ausente e necessário | Nenhum item verifica a indicação do caráter formativo ou somativo da avaliação e sua compatibilidade com o método e estágio do sistema. | Incluir no novo item `E1-16`. |
| `MAV-04` (`MAV`) | Nenhum | Complementar opcional | Explicitar resultado qualitativo/quantitativo qualifica o planejamento, mas decorre parcialmente do método escolhido (já Complementar na consolidada). | Manter como sugestão opcional (Seção 6). |
| `MAV-05` (`MAV`) | Nenhum | Ausente e necessário | Condicional à Avaliação Heurística (usada na Etapa 1). Informar o número de avaliadores (3–5 ou justificativa) é essencial para validade metodológica sem penalizar inspeção acadêmica individual justificada. | Propor novo item condicional `E1-20`. |
| `MAV-06` (`MAV`) | `E1-11` | Parcialmente coberto | Preparação (domínio/perfis e delimitação prévia de telas) sobrepõe-se à delimitação de escopo do DECIDE (`DEC-02`). | Absorver no novo item `E1-14`. |
| `MAV-07` (`MAV`) | `E1-12` | Ausente e necessário | Condicional à AH. Sem explicitar o conjunto de heurísticas/diretrizes utilizado (ex.: 10 de Nielsen e extensões), não há critério objetivo de inspeção. | Propor novo item condicional `E1-21`. |
| `MAV-08` (`MAV`) | Nenhum | Complementar opcional | Independência entre avaliadores e dupla passagem elevam o rigor da AH, mas na Etapa 1 a inspeção de seleção é individual e exploratória. | Manter como sugestão opcional (Seção 6). |
| `MAV-09` (`MAV`) | Nenhum | Complementar opcional | Explicitar percurso por diretriz ou por tela é boa prática de sistematicidade, não bloqueante na seleção de site da Etapa 1. | Manter como sugestão opcional (Seção 6). |
| `MAV-10` (`MAV`) | Nenhum | Complementar opcional | Limite de 1–2 horas por sessão previne fadiga, mas é opcional para inspeções exploratórias da Etapa 1. | Manter como sugestão opcional (Seção 6). |
| `MAV-11` (`MAV`) | `E1-12` | Ausente e necessário | Condicional à AH. Sem registrar heurística violada, local exato, severidade e justificativa/sugestão, os problemas não são rastreáveis nem acionáveis. | Propor novo item condicional `E1-22`. |
| `MAV-12` (`MAV`) | `E1-12` | Já coberto | `E1-12` verifica explicitamente frequência, impacto e persistência no julgamento de severidade. | Manter núcleo de `E1-12`. |
| `MAV-13` (`MAV`) | `E1-12` | Parcialmente coberto | `E1-12` menciona "escala de Nielsen" no texto auxiliar, mas não verifica o uso consistente da escala padronizada 1–4 (e 0 na consolidação). | Ajustar `E1-12` para incluir a escala padronizada (Seção 5). |
| `MAV-14` (`MAV`) | Nenhum | Não aplicável | Reunião de consolidação entre múltiplos avaliadores não se aplica às inspeções individuais por site candidato do Grupo 06 na Etapa 1. | Não incluir na Etapa 1 (nota condicional caso outro grupo faça AH em equipe no mesmo site). |
| `MAV-15` (`MAV`) | `E1-06` | Ausente e necessário | Condicional à AH. Estrutura do relato consolidado da AH garante que os achados sustentem a escolha do site e o reprojeto. | Absorver no novo item `E1-19` (junto com `DEC-14`). |
| `MAV-16` (`MAV`) | Nenhum | Não aplicável | Percurso Cognitivo não foi utilizado na Etapa 1 do Grupo 06; mais aderente a avaliações de protótipos/design (Etapas 4–6). | Não incluir na Etapa 1 (nota condicional caso o Grupo 07 tenha adotado a técnica). |

<p class="caption">Tabela 4 — Matriz rastreável dos 30 critérios consolidados associados à Etapa 1.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

### 3.2 Etapa 2 — Perfil de Usuário (46 critérios)

| ID e arquivo | Item V2 relacionado | Classificação | Justificativa | Recomendação |
| --- | --- | --- | --- | --- |
| `PER-01` (`PER`) | `E2-02`, `E2-03` | Já coberto | `E2-02` lista explicitamente idade, sexo e status socioeconômico; `E2-03` agrupa por idade. | Manter sem alteração. |
| `PER-02` (`PER`) | `E2-02` | Já coberto | `E2-02` inclui "experiência no cargo" (condicional a perfis ocupacionais presentes no Portal do Senado). | Manter sem alteração. |
| `PER-03` (`PER`) | `E2-02` | Já coberto | `E2-02` inclui "informações sobre a empresa/organização" (condicional a perfis organizacionais). | Manter sem alteração. |
| `PER-04` (`PER`) | `E2-02` | Já coberto | `E2-02` inclui "educação" dentre os atributos de Hackos e Redish. | Manter sem alteração. |
| `PER-05` (`PER`) | `E2-02` | Complementar opcional | Letramento, leitura e estilo de aprendizado aprofundam "educação", mas já são classificados como Complementares na consolidada. | Manter como sugestão opcional (Seção 6). |
| `PER-06` (`PER`) | `E2-02`, `E2-03` | Já coberto | `E2-02` cobre experiência com computadores e `E2-03` agrupa por experiência. | Manter sem alteração. |
| `PER-07` (`PER`) | `E2-02` | Já coberto | `E2-02` inclui explicitamente experiência com o produto/ferramentas semelhantes. | Manter sem alteração. |
| `PER-08` (`PER`) | `E2-02` | Já coberto | `E2-02` inclui explicitamente "tecnologia disponível". | Manter sem alteração. |
| `PER-09` (`PER`) | `E2-02` | Já coberto | `E2-02` inclui explicitamente "treinamento". | Manter sem alteração. |
| `PER-10` (`PER`) | `E2-02`, `E2-03` | Já coberto | `E2-02` e `E2-03` cobrem explicitamente atitudes e valores (tecnófilos/tecnófobos). | Manter sem alteração. |
| `PER-11` (`PER`) | `E2-02` | Já coberto | `E2-02` inclui explicitamente "conhecimento do domínio". | Manter sem alteração. |
| `PER-12` (`PER`) | `E2-02` | Parcialmente coberto | `E2-02` lista "objetivos", mas não verifica o registro de *como esses objetivos são alcançados atualmente*. | Ajustar `E2-02` (Seção 5). |
| `PER-13` (`PER`) | `E2-02`, `E2-03` | Parcialmente coberto | `E2-02` lista "tarefas" e `E2-03` "tarefas primárias", mas sem verificar distinção entre primárias/secundárias e frequência. | Ajustar `E2-02` (Seção 5). |
| `PER-14` (`PER`) | `E2-02` | Já coberto | `E2-02` inclui explicitamente "gravidade dos erros". | Manter sem alteração. |
| `PER-15` (`PER`) | Nenhum | Complementar opcional | Motivação para o trabalho é condicional a sistemas laborais; no Portal do Senado (público/cívico misto), é complementar aos perfis ocupacionais. | Manter como sugestão opcional (Seção 6). |
| `PER-16` (`PER`) | `E2-02` | Já coberto | `E2-02` inclui explicitamente "idiomas/jargões". | Manter sem alteração. |
| `PER-17` (`PER`) | Nenhum | Complementar opcional | Estudo prévio do domínio é boa prática preparatória; no projeto, a Etapa 1 já realiza diagnóstico exploratório do portal escolhido. | Manter como sugestão opcional (Seção 6). |
| `PER-18` (`PER`) | Nenhum | Ausente e necessário | Nenhum item verifica a distinção entre usuários finais primários (uso regular) e secundários (uso ocasional) no perfil de usuário (`E2-08` trata apenas de personas). | Propor novo item `E2-17` (junto com `PER-19`). |
| `PER-19` (`PER`) | Nenhum | Ausente e necessário | Nenhum item verifica o mapeamento de stakeholders indiretos (afetados, decisores e definidores de processos), essencial em portal público institucional. | Incluir no novo item `E2-17`. |
| `PER-20` (`PER`) | Nenhum | Complementar opcional | Embora o Portal do Senado seja sistema existente, o acesso acadêmico a equipes internas de manutenção/suporte do órgão é restrito; melhor como opcional. | Manter como sugestão opcional (Seção 6). |
| `PER-21` (`PER`) | `E2-01` | Ausente e necessário | `E2-01` exige duas técnicas fundamentadas, mas não verifica se a escolha considerou logística, disponibilidade de tempo e localização das fontes. | Ajustar `E2-01` para incorporar a justificativa logística (Seção 5). |
| `PER-22` (`PER`) | Nenhum | Complementar opcional | Uso de fontes complementares (logs, normas, análise competitiva) já é Complementar na consolidada. | Manter como sugestão opcional (Seção 6). |
| `PER-23` (`PER`) | `E2-04` | Já coberto | `E2-04` verifica explicitamente os quatro princípios éticos (autonomia, beneficência, não maleficência, justiça e equidade). | Manter sem alteração. |
| `PER-24` (`PER`) | `E2-06` | Parcialmente coberto | `E2-06` cobre cláusulas do TCLE, mas não explicita o esclarecimento prévio sobre tempo aproximado, análise dos dados e abertura para dúvidas. | Ajustar `E2-06` (Seção 5). |
| `PER-25` (`PER`) | `E2-06` | Parcialmente coberto | `E2-06` cobre modelo de TCLE e registro de consentimento, mas não menciona entrega de via ao participante nem responsável legal para menores de 18 anos. | Ajustar `E2-06` (Seção 5). |
| `PER-26` (`PER`) | `E2-05`, `E2-06`, `E2-07` | Parcialmente coberto | `E2-05`–`E2-07` cobrem autorização de gravação e desidentificação, mas não explicitam restrição aos dados brutos nem omissão de identificadores indiretos em todas as mídias. | Ajustar `E2-05` (Seção 5). |
| `PER-27` (`PER`) | `E2-06` | Parcialmente coberto | `E2-06` inclui recusa/desistência sem penalidade, mas omite pausas e protocolo de interrupção pelo pesquisador em caso de constrangimento/desconforto/exaustão. | Ajustar `E2-06` (Seção 5). |
| `PER-28` (`PER`) | `E2-01` | Ausente e necessário | Condicional a entrevistas (usadas por todos os integrantes na Etapa 2). Nenhum item verifica definição e justificativa da modalidade (estruturada, semiestruturada, não estruturada). | Propor novo item condicional `E2-18` (junto com `PER-29`). |
| `PER-29` (`PER`) | `E2-07` | Ausente e necessário | Condicional a entrevistas. Nenhum item verifica o equilíbrio adequado entre perguntas abertas (exploratórias) e fechadas (filtros/comparação) no roteiro. | Incluir no novo item condicional `E2-18`. |
| `PER-30` (`PER`) | `E2-07` | Ausente e necessário | Condicional a entrevistas. Perguntas tendenciosas, compostas ou com jargões invalidam a coleta empírica; nenhum item V2 verifica qualidade redacional do roteiro. | Propor novo item condicional `E2-19`. |
| `PER-31` (`PER`) | `E2-07` | Ausente e necessário | Condicional a entrevistas. Nenhum item verifica a estrutura das 5 fases da sessão (apresentação, aquecimento, principal, desaquecimento, conclusão) nem a postura neutra do entrevistador. | Propor novo item condicional `E2-20`. |
| `PER-32` (`PER`) | `E2-07` | Parcialmente coberto | `E2-07` verifica o registro individual da entrevista/observação, mas não verifica análise sistemática intraparticipante/interparticipante nem triangulação. | Propor novo item condicional `E2-21`. |
| `PER-33` (`PER`) | Nenhum | Não aplicável | Sequenciamento de questionários não se aplica ao Grupo 06 (não utilizou questionários na Etapa 2); condicional apenas se o grupo inspecionado usar a técnica. | Não incluir por padrão (registrar dúvida na Seção 7). |
| `PER-34` (`PER`) | Nenhum | Não aplicável | Instruções e clareza de questionários não se aplicam ao escopo atual do Grupo 06. | Idem `PER-33`. |
| `PER-35` (`PER`) | Nenhum | Não aplicável | Formatos de resposta, escalas e faixas sem sobreposição em questionários não se aplicam ao escopo atual do Grupo 06. | Idem `PER-33`. |
| `PER-36` (`PER`) | Nenhum | Não aplicável | Opções neutras/alternativas em questionários não se aplicam ao escopo atual do Grupo 06. | Idem `PER-33`. |
| `PER-37` (`PER`) | Nenhum | Não aplicável | Extensão e priorização de perguntas fechadas em questionários não se aplicam ao escopo atual do Grupo 06. | Idem `PER-33`. |
| `PER-38` (`PER`) | Nenhum | Pendente de evidência | Brainstorming não foi usado pelo Grupo 06, mas há indício na ficha V1 de que o Grupo 05 (−1) o empregou na Etapa 2. Depende de confirmar artefato do Grupo 05 e decisão sobre bloco condicional. | Decidir inclusão condicional após conferência do Grupo 05 (Seção 7). |
| `PER-39` (`PER`) | Nenhum | Pendente de evidência | Composição de 8–12 participantes no brainstorming — mesma pendência de `PER-38`. | Idem `PER-38`. |
| `PER-40` (`PER`) | Nenhum | Pendente de evidência | Pergunta inicial focada no "sistema ideal" — mesma pendência de `PER-38`. | Idem `PER-38`. |
| `PER-41` (`PER`) | Nenhum | Pendente de evidência | Regras da sessão de brainstorming (não censura, foco em necessidades, duplicidades) — mesma pendência de `PER-38`. | Idem `PER-38`. |
| `PER-42` (`PER`) | Nenhum | Pendente de evidência | Papel e condução do moderador no brainstorming — mesma pendência de `PER-38`. | Idem `PER-38`. |
| `PER-43` (`PER`) | Nenhum | Pendente de evidência | Infraestrutura de registro e papel do secretário/escriba — mesma pendência de `PER-38`. | Idem `PER-38`. |
| `PER-44` (`PER`) | Nenhum | Pendente de evidência | Priorização dos cinco itens essenciais — mesma pendência de `PER-38`. | Idem `PER-38`. |
| `PER-45` (`PER`) | Nenhum | Pendente de evidência | Análise e síntese percentual dos resultados do brainstorming — mesma pendência de `PER-38`. | Idem `PER-38`. |
| `PER-46` (`PER`) | Nenhum | Pendente de evidência | Sessão-piloto do brainstorming — mesma pendência de `PER-38`. | Idem `PER-38`. |

<p class="caption">Tabela 5 — Matriz rastreável dos 46 critérios consolidados de Perfil de Usuário (Etapa 2).</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

### 3.3 Etapa 2 — Personas, Elenco de Personas, Cenários, HTA e CTT (60 critérios)

| ID e arquivo | Item V2 relacionado | Classificação | Justificativa | Recomendação |
| --- | --- | --- | --- | --- |
| `PSN-01` (`PSN`) | `E2-09` | Já coberto | `E2-09` verifica rastreabilidade com dados coletados e invenção apenas de nome e detalhes pessoais. | Manter sem alteração. |
| `PSN-02` (`PSN`) | `E2-09` | Ausente e necessário | `E2-09` não verifica especificidade/concretude nem ausência de abstrações genéricas ("usuário médio", "usuário 1"). | Incorporar no ajuste de `E2-09` (Seção 5). |
| `PSN-03` (`PSN`) | `E2-09` | Já coberto | `E2-09` exige explicitamente o elemento (1) identidade. | Manter sem alteração. |
| `PSN-04` (`PSN`) | `E2-08`, `E2-09` | Já coberto | `E2-08` e `E2-09` verificam o elemento (2) status funcional. | Manter sem alteração. |
| `PSN-05` (`PSN`) | `E2-09` | Já coberto | `E2-09` exige o elemento (4) habilidades. | Manter sem alteração. |
| `PSN-06` (`PSN`) | `E2-09` | Parcialmente coberto | `E2-09` lista "tarefas", mas não verifica explicitação de frequência, importância e duração (sem passo a passo operacional). | Ajustar `E2-09` (Seção 5). |
| `PSN-07` (`PSN`) | `E2-09` | Já coberto | `E2-09` exige o elemento (6) relacionamentos. | Manter sem alteração. |
| `PSN-08` (`PSN`) | `E2-09` | Parcialmente coberto | `E2-09` lista "requisitos", mas não verifica presença de citações diretas (falas entre aspas) ilustrando as necessidades. | Ajustar `E2-09` (Seção 5). |
| `PSN-09` (`PSN`) | `E2-09` | Parcialmente coberto | `E2-09` lista "expectativas", mas não explicita a verificação do modelo mental da persona. | Ajustar `E2-09` (Seção 5). |
| `PSN-10` (`PSN`) | `E2-09` | Parcialmente coberto | `E2-09` lista "objetivos", sem verificar abrangência além do uso restrito do produto (pessoais, práticos, organizacionais). | Propor novo item `E2-22` (unido a `PSN-11` e `PSN-12`). |
| `PSN-11` (`PSN`) | `E2-09` | Ausente e necessário | Confundir objetivos com tarefas intermediárias compromete a validade conceitual da persona; critério ausente na V2. | Incluir no novo item `E2-22`. |
| `PSN-12` (`PSN`) | `E2-09` | Ausente e necessário | Falsos objetivos (meios técnicos, botões, plataformas) distorcem o design centrado no usuário; critério ausente na V2. | Incluir no novo item `E2-22`. |
| `PSN-13` (`PSN`) | Nenhum | Complementar opcional | Estratificação em objetivos de experiência, finais e de vida (Cooper et al., 2007) é recomendação complementar, salvo exigência expressa do professor. | Manter como sugestão opcional (Seção 6) e registrar dúvida (Seção 7). |
| `ELP-01` (`ELP`) | `E2-08` | Ausente e necessário | `E2-08` não verifica se cada papel de usuário distinto mapeado no perfil possui ao menos uma persona correspondente no elenco. | Propor novo item `E2-23` (junto com `ELP-02`). |
| `ELP-02` (`ELP`) | `E2-08` | Ausente e necessário | `E2-08` não verifica cobertura da diversidade dos principais grupos de usuários (evitando colapso em persona genérica). | Incluir no novo item `E2-23`. |
| `ELP-03` (`ELP`) | `E2-08` | Já coberto | `E2-08` verifica explicitamente a faixa de 3 a 12 personas. | Manter sem alteração. |
| `ELP-04` (`ELP`) | `E2-08` | Complementar opcional | Memorabilidade e distinção cognitiva entre personas complementam a contagem numérica (já Complementar na consolidada). | Manter como sugestão opcional (Seção 6). |
| `ELP-05` (`ELP`) | `E2-08` | Já coberto | `E2-08` verifica explicitamente a presença de ao menos uma persona primária. | Manter sem alteração. |
| `ELP-06` (`ELP`) | `E2-08` | Parcialmente coberto | `E2-08` exige justificativa do status primária/secundária, mas não explicita o critério de exclusividade de interface de Cooper (1999). | Ajustar `E2-08` (Seção 5). |
| `ELP-07` (`ELP`) | Nenhum | Complementar opcional | Recomendação de aproximadamente três personas primárias não é obrigatória para sistemas de interface única ou escopo restrito. | Manter como sugestão opcional (Seção 6). |
| `ELP-08` (`ELP`) | Nenhum | Complementar opcional | Antipersonas são condicionais à necessidade de delimitação de escopo; ausentes no elenco atual do Grupo 06. | Manter como sugestão opcional (Seção 6) e registrar dúvida (Seção 7). |
| `CEN-01` (`CEN`) | `E2-10`, `E2-11` | Ausente e necessário | `E2-10` e `E2-11` checam elementos estruturais e cabeçalho, mas não verificam se o cenário é narrativa concreta e informal (e não especificação técnica). | Propor novo item `E2-24` (junto com `CEN-02`). |
| `CEN-02` (`CEN`) | `E2-10` | Ausente e necessário | Distinguir situação existente (análise atual na Etapa 2) de situação proposta evita mistura entre diagnóstico e solução prematura. | Incluir no novo item `E2-24`. |
| `CEN-03` (`CEN`) | Nenhum | Complementar opcional | Explicitar os quatro papéis de Bødker (2000) é aprofundamento opcional. | Manter como sugestão opcional (Seção 6). |
| `CEN-04` (`CEN`) | `E2-11` | Já coberto | `E2-11` verifica exatamente título conciso, atores e situação inicial. | Manter núcleo de `E2-11`. |
| `CEN-05` (`CEN`) | `E2-11` | Parcialmente coberto | `E2-11` cita vínculo com persona, mas não verifica explicitação das características pessoais relevantes dos atores no cenário. | Ajustar `E2-11` (Seção 5). |
| `CEN-06` (`CEN`) | `E2-10` | Já coberto | `E2-10` exige explicitamente o elemento ambiente/contexto. | Manter sem alteração. |
| `CEN-07` (`CEN`) | `E2-10` | Já coberto | `E2-10` exige explicitamente o elemento objetivos. | Manter sem alteração. |
| `CEN-08` (`CEN`) | `E2-10` | Já coberto | `E2-10` exige explicitamente o elemento planejamento. | Manter sem alteração. |
| `CEN-09` (`CEN`) | `E2-10` | Já coberto | `E2-10` exige explicitamente o elemento ações. | Manter sem alteração. |
| `CEN-10` (`CEN`) | `E2-10` | Já coberto | `E2-10` exige explicitamente o elemento eventos. | Manter sem alteração. |
| `CEN-11` (`CEN`) | `E2-10` | Já coberto | `E2-10` exige explicitamente o elemento avaliação. | Manter sem alteração. |
| `CEN-12` (`CEN`) | Nenhum | Não aplicável | Cenários positivos de solução proposta (Preece et al.) pertencem ao design conceitual (Etapas 4–6), não aos cenários de análise da Etapa 2. | Não incluir na Etapa 2 (remeter às Etapas 4–6). |
| `CEN-13` (`CEN`) | Nenhum | Não aplicável | Cenários negativos de solução proposta pertencem ao design conceitual (Etapas 4–6). | Idem `CEN-12`. |
| `CEN-14` (`CEN`) | Nenhum | Complementar opcional | Situações de exceção (eventos raros/extremos) enriquecem a análise, mas são complementares ao fluxo principal. | Manter como sugestão opcional (Seção 6). |
| `CEN-15` (`CEN`) | Nenhum | Não aplicável | Alocação de tarefas humano–sistema em solução proposta pertence ao design conceitual (Etapas 4–6). | Idem `CEN-12`. |
| `CEN-16` (`CEN`) | Nenhum | Não aplicável | Apoio direto ao esboço de telas e componentes não integra o escopo da Etapa 2 (Etapas 4–6). | Idem `CEN-12`. |
| `CEN-17` (`CEN`) | Nenhum | Não aplicável | Integração com storyboard e protótipos de baixa fidelidade pertence às etapas de prototipação (Etapas 4–6). | Idem `CEN-12`. |
| `CEN-18` (`CEN`) | Nenhum | Não aplicável | Uso como scripts para avaliação de protótipos pertence às etapas de avaliação de protótipos (Etapas 4–6). | Idem `CEN-12`. |
| `CEN-19` (`CEN`) | Nenhum | Complementar opcional | Envolvimento de stakeholders na verificação dos cenários é boa prática complementar dependente de acesso em contexto acadêmico. | Manter como sugestão opcional (Seção 6). |
| `CEN-20` (`CEN`) | `D01` | Complementar opcional | Aprimoramento iterativo é boa prática de processo ao longo de múltiplos ciclos (já Complementar na consolidada). | Manter como sugestão opcional (Seção 6). |
| `HTA-01` (`HTA`) | `D05`, `E2-12`, `E2-14` | Já coberto | Objetivo/escopo (`D05`), fundamentação (`E2-12`) e propósito da HTA (`E2-14`) já cobrem a declaração do objetivo geral. | Manter sem alteração. |
| `HTA-02` (`HTA`) | Nenhum | Complementar opcional | Métricas mensuráveis de desempenho acordadas com stakeholders são complementares em análises exploratórias iniciais. | Manter como sugestão opcional (Seção 6). |
| `HTA-03` (`HTA`) | `E2-12` | Ausente e necessário | Nenhum item verifica as fontes empíricas ou documentais que embasaram a decomposição HTA, deixando brecha para modelagem por suposição. | Propor novo item `E2-25`. |
| `HTA-04` (`HTA`) | `E2-14`, `E2-15` | Ausente e necessário | Nenhum item verifica que a HTA parte de objetivos (estados finais observáveis) e não de listas de ações mecânicas. | Propor novo item `E2-26` (junto com `HTA-05`). |
| `HTA-05` (`HTA`) | `E2-15` | Ausente e necessário | Exclusividade mútua e exaustividade dos subobjetivos são requisitos centrais de correção lógica da HTA e não constam na V2. | Incluir no novo item `E2-26`. |
| `HTA-06` (`HTA`) | `E2-15` | Já coberto | `E2-15` verifica explicitamente planos com sequência fixa, seleção/decisão e paralelismo. | Manter sem alteração. |
| `HTA-07` (`HTA`) | `E2-14` | Já coberto | `E2-14` verifica explicitamente inputs, ações e feedbacks nas operações da HTA. | Manter sem alteração. |
| `HTA-08` (`HTA`) | Nenhum | Complementar opcional | Regra de parada `p × c` fundamenta a granularidade, mas é frequentemente implícita em modelos acadêmicos menores. | Manter como sugestão opcional (Seção 6). |
| `HTA-09` (`HTA`) | `E2-13` | Parcialmente coberto | `E2-13` exige diagrama, legenda e tabela HTA, mas não verifica a consistência de numeração e nomes entre o diagrama e a tabela. | Ajustar `E2-13` (Seção 5). |
| `HTA-10` (`HTA`) | Nenhum | Ausente e necessário | Validação da decomposição junto às partes interessadas (Passo 5 de Diaper) é indispensável para confiabilidade da HTA e está ausente na V2. | Propor novo item `E2-27` (com nota na Seção 7 sobre aceitação de validação via observação direta vs. retorno ao participante). |
| `CTT-01` (`CTT`) | `E2-16` | Já coberto | `E2-16` verifica explicitamente os quatro tipos de tarefas (usuário, sistema, interativa, abstrata). | Manter núcleo de `E2-16`. |
| `CTT-02` (`CTT`) | `E2-16` | Ausente e necessário | `E2-16` não verifica a regra hierárquica pai/filho (tarefa pai só concluída quando subtarefas filhas forem realizadas conforme suas relações). | Propor novo item `E2-28`. |
| `CTT-03` (`CTT`) | `E2-16` | Já coberto | `E2-16` verifica a presença dos operadores temporais padronizados da notação CTT entre tarefas irmãs. | Manter núcleo de `E2-16`. |
| `CTT-04` (`CTT`) | Nenhum | Complementar opcional | Expressão de solução de design da interação é complementar na Etapa 2 (foco em análise da situação atual). | Manter como sugestão opcional (Seção 6). |
| `CTT-05` (`CTT`) | `E2-16` | Parcialmente coberto | `E2-16` lista `>>` e `[]>>`, mas não verifica a correção semântica da distinção entre ativação simples e com passagem de informação. | Propor novo item condicional `E2-29` (unificando `CTT-05`–`CTT-09`). |
| `CTT-06` (`CTT`) | `E2-16` | Parcialmente coberto | `E2-16` cita `[]`, mas não verifica se as tarefas conectadas são efetivamente alternativas mutuamente exclusivas. | Incluir no novo item condicional `E2-29`. |
| `CTT-07` (`CTT`) | `E2-16` | Parcialmente coberto | `E2-16` cita `|[]|`, mas omite `|||` e não verifica a distinção semântica entre concorrência sem e com comunicação. | Incluir no novo item condicional `E2-29`. |
| `CTT-08` (`CTT`) | `E2-16` | Parcialmente coberto | `E2-16` não cita `|=|` nem verifica distinção entre tarefas independentes (ordem livre sem intercalação) e concorrentes (`|||`). | Incluir no novo item condicional `E2-29`. |
| `CTT-09` (`CTT`) | `E2-16` | Parcialmente coberto | `E2-16` cita `[>` e `|>`, mas não verifica a distinção semântica entre interrupção definitiva (`[>`) e suspensão com retomada (`|>`). | Incluir no novo item condicional `E2-29`. |

<p class="caption">Tabela 6 — Matriz rastreável dos 60 critérios consolidados de Personas, Elenco, Cenários, HTA e CTT (Etapa 2).</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

---

## 4. Acréscimos necessários propostos

Todos os itens abaixo seguem o padrão V2 das listas oficiais (pergunta objetiva respondível com `Sim / Incompleto / Não`, bloco `O que conferir` e rastreabilidade), distinguindo **requisito metodológico** de **exigência do plano de ensino**. Os recortes de imagem deverão ser anexados apenas quando as alterações forem aprovadas e aplicadas às listas oficiais.

### 4.1 Etapa 1 — Destino: `docs/entrega-8/lista-etapa-1.md` (seção `Conteúdo da disciplina`) — 9 acréscimos

#### `E1-14` — Objetivos gerais, justificativa e delimitação de escopo da avaliação
- **Texto exato proposto:**
  > **E1-14 · O planejamento da avaliação define explicitamente ao menos um dos quatro objetivos gerais de IHC, justifica sua relevância (por quê e para quem) e delimita o escopo avaliado?**
  >
  > **O que conferir.** Nos planejamentos individuais dos sites candidatos, verifique: (1) indicação de ao menos um dos quatro objetivos da literatura (apropriação de tecnologia, comparação de alternativas de design, conformidade com padrão ou identificação de problemas na interação/interface); (2) explicitação de por que e para quem a avaliação é relevante; e (3) delimitação justificada de páginas, fluxos, tarefas e perfis considerados na inspeção.
- **Condição de aplicabilidade:** Sempre aplicável aos planejamentos de avaliação dos sites candidatos.
- **Evidência esperada:** Seção de objetivos e escopo nos planejamentos individuais ou na página consolidada de sites avaliados.
- **Origem:** `DEC-01`, `DEC-02`, `MAV-06` (`Lista DECIDE Consolidada.md`; `Lista Métodos de Avaliação Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** `E1-11` confirma apenas a presença genérica das seis etapas do DECIDE. Sem objetivos tipificados, destinatários e recorte explícito de telas/fluxos, a inspeção perde direcionamento e critério de completude.

#### `E1-15` — Perguntas específicas alinhadas ao(s) objetivo(s) selecionado(s)
- **Texto exato proposto:**
  > **E1-15 · As perguntas de avaliação formuladas são específicas, respondíveis e diretamente alinhadas ao(s) objetivo(s) selecionado(s) no planejamento?**
  >
  > **O que conferir.** Confira a coerência entre cada objetivo declarado em `E1-14` e as perguntas da Etapa E do DECIDE (ex.: para identificação de problemas, perguntas sobre dificuldades de interação, localização, frequência e gravidade considerando os perfis esperados; para conformidade com padrão, perguntas vinculadas a WCAG/e-MAG ou convenções do domínio). Perguntas genéricas ou desconectadas do objetivo tornam o item Incompleto.
- **Condição de aplicabilidade:** Condicional aos objetivos efetivamente selecionados em `E1-14` (na Etapa 1, ocorre para identificação de problemas e, quando adotado, conformidade com padrões).
- **Evidência esperada:** Lista de perguntas objetivas e respondíveis vinculadas aos objetivos declarados.
- **Origem:** `DEC-03`, `DEC-04`, `DEC-05`, `DEC-06` (`Lista DECIDE Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** Evita que a Etapa E do DECIDE seja preenchida com questões vagas ou desalinhadas ao escopo, operacionalizando os quatro itens condicionais sem criar quatro perguntas separadas que ficariam em grande parte fora de escopo na Etapa 1.

#### `E1-16` — Justificativa da adequação do método, restrições práticas e natureza formativa/somativa
- **Texto exato proposto:**
  > **E1-16 · O planejamento justifica a adequação do método de avaliação aos objetivos, às restrições práticas do projeto e ao caráter formativo ou somativo da avaliação?**
  >
  > **O que conferir.** Verifique se o documento argumenta por que o método escolhido (ex.: Avaliação Heurística) responde às perguntas definidas, levando em conta prazo, recursos e experiência dos avaliadores, e se indica o caráter formativo (durante o design) ou somativo (sistema em produção/concluído) compatível com o método.
- **Condição de aplicabilidade:** Sempre aplicável.
- **Evidência esperada:** Argumentação explícita na etapa de escolha de métodos (Etapa C do DECIDE).
- **Origem:** `DEC-08`, `MAV-02`, `MAV-03` (`Lista DECIDE Consolidada.md`; `Lista Métodos de Avaliação Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** `E1-13` verifica apenas a classificação do método; sem justificar aderência ao objetivo, às restrições e ao momento do sistema, escolhas metodologicamente incompatíveis passariam sem detecção.

#### `E1-17` — Cronograma e questões práticas da avaliação
- **Texto exato proposto:**
  > **E1-17 · O planejamento especifica o cronograma das etapas da avaliação e administra as questões práticas de infraestrutura, equipe e materiais de apoio?**
  >
  > **O que conferir.** Na Etapa I do DECIDE de cada avaliação, confira: (1) previsão das etapas avaliativas (preparação, coleta/inspeção, interpretação/consolidação e relato) com prazos ou duração estimada; e (2) identificação de recursos/equipamentos (navegador, captura de tela, validadores), equipe responsável, custos/orçamento e materiais de apoio (checklists, fichas ou roteiros).
- **Condição de aplicabilidade:** Sempre aplicável.
- **Evidência esperada:** Tabela ou seção de questões práticas e cronograma específico da avaliação (distinto do cronograma macro do semestre verificado em `E1-04`).
- **Origem:** `DEC-09`, `DEC-10` (`Lista DECIDE Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** Operacionaliza a Etapa I do DECIDE, garantindo que a avaliação planejada seja exequível e reprodutível.

#### `E1-18` — Critérios de confiabilidade e validades do estudo
- **Texto exato proposto:**
  > **E1-18 · O planejamento estabelece como serão verificadas ou ponderadas a confiabilidade e as validades (interna, externa e ecológica) dos dados da avaliação?**
  >
  > **O que conferir.** Na Etapa E final do DECIDE, localize a análise ou critérios adotados para tratar confiabilidade (reprodutibilidade dos achados), validade interna (rigor sem vieses na coleta), validade externa (alcance de generalização) e validade ecológica (aderência às condições reais de uso), registrando eventuais limitações da inspeção.
- **Condição de aplicabilidade:** Sempre aplicável.
- **Evidência esperada:** Subseção específica sobre confiabilidade e validades na etapa de avaliação e interpretação dos dados.
- **Origem:** `DEC-13` (`Lista DECIDE Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** Elemento explícito da Etapa E do DECIDE em Barbosa & Silva (2010), totalmente ausente em `E1-11`; sua omissão impede avaliar o rigor das conclusões que fundamentam a escolha do site.

#### `E1-19` — Estrutura do relato final consolidado da avaliação
- **Texto exato proposto:**
  > **E1-19 · Os relatórios de avaliação dos sites candidatos apresentam estrutura completa com objetivos, escopo, método, perfil/quantidade de avaliadores, lista de problemas priorizados e recomendações?**
  >
  > **O que conferir.** Nos relatórios individuais ou síntese publicada, confirme a presença de: (1) objetivos e escopo avaliado; (2) método e diretrizes/heurísticas adotadas; (3) número e perfil dos avaliadores (e usuários, se houver); (4) síntese e interpretação dos dados; (5) lista de problemas encontrados classificados por severidade; e (6) recomendações de melhoria ou reprojeto.
- **Condição de aplicabilidade:** Sempre aplicável (na Avaliação Heurística, cobre integralmente `MAV-15`).
- **Evidência esperada:** Relatórios finais dos sites candidatos contendo os seis blocos mínimos.
- **Origem:** `DEC-14`, `MAV-15` (`Lista DECIDE Consolidada.md`; `Lista Métodos de Avaliação Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** `E1-06` verifica apenas a existência dos arquivos; `E1-19` assegura que os relatórios efetivamente entregam insumos completos e comparáveis para a decisão do site escolhido.

#### `E1-20` — Quantidade de avaliadores na Avaliação Heurística (condicional)
- **Texto exato proposto:**
  > **E1-20 · Na Avaliação Heurística, o documento informa a quantidade de avaliadores (faixa recomendada de 3 a 5) ou justifica explicitamente a adoção de número distinto?**
  >
  > **O que conferir.** Aplicável quando a Avaliação Heurística for adotada. Confirme o registro explícito do número de avaliadores envolvidos em cada inspeção; caso tenha sido realizada por um único avaliador (como em inspeções individuais de seleção de site), verifique se a limitação metodológica está declarada e justificada.
- **Condição de aplicabilidade:** Condicional — aplicável quando o método adotado for Avaliação Heurística (ocorre na Etapa 1).
- **Evidência esperada:** Indicação numérica dos avaliadores e justificativa fundamentada caso esteja fora da faixa de 3 a 5.
- **Origem:** `MAV-05` (`Lista Métodos de Avaliação Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** A cobertura de problemas na Avaliação Heurística depende diretamente do número de avaliadores (Nielsen, 1992); exigir declaração e justificativa garante honestidade metodológica sem penalizar o formato acadêmico individual.

#### `E1-21` — Conjunto explícito de heurísticas ou diretrizes adotado (condicional)
- **Texto exato proposto:**
  > **E1-21 · Na Avaliação Heurística, o documento explicita o conjunto de heurísticas ou diretrizes utilizado na inspeção e eventuais extensões do domínio?**
  >
  > **O que conferir.** Aplicável quando a Avaliação Heurística for adotada. Confirme a listagem ou referência explícita ao conjunto adotado (ex.: as 10 heurísticas de Nielsen) e a indicação de eventuais diretrizes complementares (ex.: WCAG/e-MAG) utilizadas na inspeção do site candidato.
- **Condição de aplicabilidade:** Condicional — aplicável quando o método adotado for Avaliação Heurística (ocorre na Etapa 1).
- **Evidência esperada:** Lista das heurísticas/diretrizes de referência nos planejamentos e relatórios.
- **Origem:** `MAV-07` (`Lista Métodos de Avaliação Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** Sem declarar o conjunto de heurísticas, não existe critério objetivo contra o qual a interface foi inspecionada.

#### `E1-22` — Registro padronizado de cada violação na Avaliação Heurística (condicional)
- **Texto exato proposto:**
  > **E1-22 · Na Avaliação Heurística, cada problema identificado registra a heurística violada, o local exato na interface, a severidade atribuída e a justificativa do problema?**
  >
  > **O que conferir.** Aplicável quando a Avaliação Heurística for adotada. Nas tabelas ou fichas de achados, verifique se cada violação aponta: (1) heurística/diretriz violada; (2) página/tela e elemento exato da ocorrência; (3) grau de severidade; e (4) explicação objetiva de por que constitui problema (admitindo-se sugestão de correção).
- **Condição de aplicabilidade:** Condicional — aplicável quando o método adotado for Avaliação Heurística (ocorre na Etapa 1).
- **Evidência esperada:** Fichas ou tabelas de violações contendo os quatro campos mínimos para todos os achados relatados.
- **Origem:** `MAV-11` (`Lista Métodos de Avaliação Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** Garante rastreabilidade, reprodutibilidade e utilidade prática dos problemas reportados; `E1-12` verifica apenas os critérios de severidade, não a completude do registro de cada violação.

---

### 4.2 Etapa 2 — Destino: `docs/entrega-8/lista-etapa-2.md` (seção `Conteúdo da disciplina`) — 13 acréscimos

#### `E2-17` — Mapeamento de usuários finais (primários/secundários) e demais stakeholders
- **Texto exato proposto:**
  > **E2-17 · O levantamento do perfil de usuário distingue usuários finais primários e secundários e identifica os demais stakeholders indiretos afetados pelo sistema?**
  >
  > **O que conferir.** No artefato de Perfil do Usuário (ou Técnicas de Coleta), verifique: (1) classificação dos usuários finais em **primários** (uso regular) e **secundários** (uso ocasional), com critérios de representatividade; e (2) mapeamento de stakeholders indiretos (quem é afetado pelo sistema, quem decide objetivos/funcionalidades e quem define os processos apoiados).
- **Condição de aplicabilidade:** Sempre aplicável.
- **Evidência esperada:** Seção ou tabela diferenciando usuários primários/secundários e listando stakeholders indiretos com seus papéis.
- **Origem:** `PER-18`, `PER-19` (`Lista Perfil de Usuário Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** `E2-08` verifica apenas personas primárias/secundárias; sem mapear usuários primários/secundários e stakeholders indiretos já no levantamento de perfil, o elenco de personas e os requisitos podem omitir grupos críticos ou restrições institucionais.

#### `E2-18` — Definição da modalidade de entrevista e seleção de perguntas abertas/fechadas (condicional)
- **Texto exato proposto:**
  > **E2-18 · Quando entrevistas são utilizadas, o roteiro define e justifica a modalidade adotada e equilibra adequadamente perguntas abertas e fechadas?**
  >
  > **O que conferir.** Aplicável quando a técnica de entrevista for empregada na Etapa 2. Confirme: (1) indicação e justificativa da estrutura (estruturada, semiestruturada ou não estruturada); e (2) predomínio de perguntas abertas para exploração de percepções/comportamentos, com uso controlado de perguntas fechadas para filtros ou dados objetivos.
- **Condição de aplicabilidade:** Condicional — aplicável quando entrevistas forem usadas na coleta (ocorre na Etapa 2 do Grupo 06).
- **Evidência esperada:** Declaração justificada da modalidade de entrevista em `tecnicas-coleta.md` e roteiro com distinção coerente entre perguntas abertas e fechadas.
- **Origem:** `PER-28`, `PER-29` (`Lista Perfil de Usuário Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** Todos os integrantes realizaram entrevistas semiestruturadas, mas a lista V2 atual não possui qualquer critério de qualidade metodológica para o instrumento de entrevista.

#### `E2-19` — Qualidade redacional e ausência de viés no roteiro de entrevista (condicional)
- **Texto exato proposto:**
  > **E2-19 · As perguntas do roteiro de entrevista usam linguagem simples e neutra, evitando jargões técnicos, indução de respostas, perguntas excessivamente longas e perguntas compostas?**
  >
  > **O que conferir.** Aplicável quando entrevistas forem empregadas. Examine os roteiros publicados e verifique se as questões são diretas, compreensíveis ao perfil entrevistado, livres de pressuposições que induzam resposta e formuladas de modo unidimensional (sem agrupar múltiplas perguntas independentes em um único enunciado).
- **Condição de aplicabilidade:** Condicional — aplicável quando entrevistas forem usadas (ocorre na Etapa 2).
- **Evidência esperada:** Roteiro de entrevista revisado com perguntas curtas, neutras e desdobradas.
- **Origem:** `PER-30` (`Lista Perfil de Usuário Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** Perguntas enviesadas, técnicas demais ou compostas distorcem diretamente os dados empíricos que alimentam perfil, personas e cenários.

#### `E2-20` — Estrutura em cinco fases e postura neutra na condução das entrevistas (condicional)
- **Texto exato proposto:**
  > **E2-20 · O planejamento das entrevistas organiza a sessão nas cinco fases previstas na literatura e orienta a postura neutra do entrevistador?**
  >
  > **O que conferir.** Aplicável quando entrevistas forem empregadas. Verifique se o planejamento ou roteiro contempla as fases de **apresentação**, **aquecimento**, **parte principal**, **desaquecimento** e **conclusão**, além de orientações explícitas para o entrevistador evitar influenciar respostas por expressões, entonação ou sugestões.
- **Condição de aplicabilidade:** Condicional — aplicável quando entrevistas forem usadas (ocorre na Etapa 2).
- **Evidência esperada:** Roteiro estruturado nas cinco etapas e diretrizes explícitas de neutralidade na condução.
- **Origem:** `PER-31` (`Lista Perfil de Usuário Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** A condução sem fases de aquecimento/desaquecimento e sem controle de neutralidade compromete o rapport e introduz viés do entrevistador na coleta.

#### `E2-21` — Análise sistemática e triangulação dos dados das entrevistas (condicional)
- **Texto exato proposto:**
  > **E2-21 · Os dados das entrevistas passam por análise sistemática (intraparticipante e/ou interparticipante) e, quando viável, triangulação com outras técnicas de coleta?**
  >
  > **O que conferir.** Aplicável quando entrevistas forem empregadas. Confira no artefato de Perfil do Usuário ou síntese da coleta se há comparação entre respostas do mesmo participante (análise intraparticipante para detectar contradições), síntese de padrões entre diferentes participantes (análise interparticipante) e cruzamento com observação direta ou análise documental.
- **Condição de aplicabilidade:** Condicional — aplicável quando entrevistas forem usadas (ocorre na Etapa 2).
- **Evidência esperada:** Seção metodológica ou síntese comparativa evidenciando cruzamento intra/interparticipante e triangulação.
- **Origem:** `PER-32` (`Lista Perfil de Usuário Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** `E2-07` verifica apenas o registro individual das sessões; `E2-21` assegura que os relatos individuais foram efetivamente analisados e triangulados para sustentar o perfil consolidado.

#### `E2-22` — Qualidade conceitual dos objetivos das personas
- **Texto exato proposto:**
  > **E2-22 · Os objetivos de cada persona vão além do uso restrito do sistema, estão redigidos como condições finais distintas de tarefas e estão livres de falsos objetivos?**
  >
  > **O que conferir.** Abra a seção de objetivos de cada persona e confirme três aspectos: (1) abrangência além da interface (motivações pessoais, práticas ou organizacionais); (2) formulação como estados finais desejados, sem confusão com tarefas intermediárias; e (3) ausência de falsos objetivos (meios técnicos, plataformas ou elementos de interface, como "ter botão X" ou "rodar no navegador").
- **Condição de aplicabilidade:** Sempre aplicável.
- **Evidência esperada:** Lista de objetivos em cada persona expressando exclusivamente fins humanos genuínos, separados da seção de tarefas.
- **Origem:** `PSN-10`, `PSN-11`, `PSN-12` (`Lista Personas Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** `E2-09` checa apenas a presença do bloco "objetivos". Confundir objetivos com tarefas ou inserir falsos objetivos é um dos erros conceituais mais graves em IHC, pois antecipa soluções técnicas e distorce o design.

#### `E2-23` — Representatividade por papel de usuário e diversidade do elenco de personas
- **Texto exato proposto:**
  > **E2-23 · O elenco de personas contempla ao menos uma persona por papel de usuário distinto mapeado no perfil e reflete a diversidade dos principais grupos?**
  >
  > **O que conferir.** Compare o artefato de Perfil do Usuário com o Elenco de Personas. Confirme se cada papel distinto identificado possui representação correspondente no elenco e se as personas abrangem variações relevantes (experiência, habilidades, contexto de uso), evitando reduzir o público a uma única persona genérica.
- **Condição de aplicabilidade:** Sempre aplicável.
- **Evidência esperada:** Matriz ou justificativa de correspondência entre os papéis/grupos do perfil de usuário e as personas do elenco.
- **Origem:** `ELP-01`, `ELP-02` (`Lista Elenco de Personas Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** `E2-08` verifica apenas a faixa numérica (3–12) e o status; um elenco pode ter 5 personas e ainda assim deixar descoberto um papel essencial mapeado no perfil.

#### `E2-24` — Natureza narrativa e distinção entre situação existente e proposta nos cenários
- **Texto exato proposto:**
  > **E2-24 · Os cenários são redigidos como narrativas concretas e informais e deixam explícito se retratam uma situação existente ou uma situação proposta?**
  >
  > **O que conferir.** Examine os cenários publicados e verifique: (1) estilo narrativo fluido, acessível e rico em detalhes contextuais (evitando listas frias ou especificações técnicas formais); e (2) declaração explícita na introdução ou cabeçalho de que os cenários da Etapa 2 retratam a situação atual/existente (ou indicação clara caso algum cenário descreva proposta futura).
- **Condição de aplicabilidade:** Sempre aplicável.
- **Evidência esperada:** Texto narrativo em linguagem natural e identificação explícita da natureza (atual/existente vs. proposta) de cada cenário.
- **Origem:** `CEN-01`, `CEN-02` (`Lista Cenários Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** Garante a função comunicativa própria do artefato cenário e impede ambiguidade entre diagnóstico do portal atual e proposição de redesign.

#### `E2-25` — Fontes de informação e aquisição de dados na HTA
- **Texto exato proposto:**
  > **E2-25 · A Análise Hierárquica de Tarefas (HTA) registra explicitamente as fontes empíricas ou documentais que embasaram a decomposição das tarefas?**
  >
  > **O que conferir.** Na página consolidada e nas páginas individuais de análise de tarefas, confirme a indicação de como o fluxo real da tarefa foi levantado (ex.: observação direta na entrevista, gravação de tela, análise documental ou cenários embasados em coleta), evitando decomposições baseadas apenas em suposições do projetista.
- **Condição de aplicabilidade:** Sempre aplicável.
- **Evidência esperada:** Referência explícita às sessões de coleta, observações ou fontes que originaram cada HTA.
- **Origem:** `HTA-03` (`Lista HTA Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** Sem rastreabilidade às fontes de aquisição de dados, a HTA perde validade empírica e pode refletir o modelo mental da equipe em vez da prática real dos usuários.

#### `E2-26` — Formulação por estados finais e decomposição mutuamente exclusiva e exaustiva na HTA
- **Texto exato proposto:**
  > **E2-26 · Cada HTA inicia pela definição de objetivos (estados finais observáveis) e decompõe os níveis em subobjetivos mutuamente exclusivos e exaustivos?**
  >
  > **O que conferir.** Nos diagramas e tabelas HTA, verifique: (1) se o objetivo raiz e os nós superiores expressam resultados/estados finais desejados (e não ações mecânicas isoladas); e (2) se, em cada decomposição, os subobjetivos não se sobrepõem (mutuamente exclusivos) e cobrem integralmente o objetivo pai sem etapas omitidas (exaustivos).
- **Condição de aplicabilidade:** Sempre aplicável.
- **Evidência esperada:** Árvores HTA com nós superiores orientados a objetivos e decomposições sem redundância nem lacunas lógicas.
- **Origem:** `HTA-04`, `HTA-05` (`Lista HTA Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** Define a correção lógica e funcional da HTA segundo Barbosa & Silva (2010) e Diaper (2003); ausente na V2 atual.

#### `E2-27` — Validação da decomposição HTA junto às partes interessadas
- **Texto exato proposto:**
  > **E2-27 · Há evidência de verificação ou validação da decomposição HTA e dos planos junto a usuários reais ou especialistas do domínio?**
  >
  > **O que conferir.** Procure registro de confirmação da fidelidade do modelo HTA com participantes/stakeholders (ex.: validação pós-modelagem, revisão com entrevistado ou conferência direta contra percurso observado gravado, explicitando limitações quando não houver nova sessão de retorno).
- **Condição de aplicabilidade:** Sempre aplicável (ver nota na Seção 7 sobre aceitação de evidência de validação em contexto acadêmico).
- **Evidência esperada:** Registro de validação com usuário/especialista ou documentação clara da conferência empírica realizada.
- **Origem:** `HTA-10` (`Lista HTA Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** Corresponde à etapa de validação da decomposição na HTA (Passo 5 de Diaper); sua ausência impede verificar a fidelidade do modelo frente à atividade real.

#### `E2-28` — Consistência hierárquica pai/filho nos diagramas CTT
- **Texto exato proposto:**
  > **E2-28 · Nos diagramas CTT, a organização hierárquica respeita a regra pai/filho, de modo que cada tarefa pai só se conclui quando suas subtarefas filhas são realizadas conforme suas relações?**
  >
  > **O que conferir.** Inspecione cada ramo das árvores CTT individuais e verifique se as tarefas filhas realmente compõem a realização semântica da tarefa pai (sem saltos de abstração, tarefas órfãs ou subtarefas desconectadas do objetivo do nó superior).
- **Condição de aplicabilidade:** Condicional — aplicável sempre que CTT for adotada como técnica de análise de tarefas (ocorre em todos os integrantes do Grupo 06 na Etapa 2).
- **Evidência esperada:** Árvores CTT com decomposição pai/filho logicamente consistente em todos os níveis.
- **Origem:** `CTT-02` (`Lista CTT Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** `E2-16` verifica apenas tipos de nós e presença de operadores entre irmãs, não a validade estrutural da hierarquia pai/filho.

#### `E2-29` — Correção semântica dos operadores temporais nos diagramas CTT (condicional)
- **Texto exato proposto:**
  > **E2-29 · Os operadores temporais empregados entre tarefas irmãs nos diagramas CTT respeitam a semântica correta da notação para cada relação modelada?**
  >
  > **O que conferir.** Para cada tipo de relação efetivamente presente nos diagramas CTT, confira o uso correto do operador: ativação simples (`>>`) vs. ativação com passagem de informação (`[]>>`); escolha mutuamente exclusiva (`[]`); concorrência simples (`|||`) vs. concorrência com comunicação (`|[]|`); tarefas independentes em ordem livre sem intercalação (`|=|`); e desativação definitiva (`[>`) vs. suspensão com retomada (`|>`).
- **Condição de aplicabilidade:** Condicional aos operadores temporais que ocorrem no diagrama CTT inspecionado.
- **Evidência esperada:** Emprego semanticamente preciso de todos os operadores temporais usados nos diagramas CTT, sem trocas conceituais (ex.: usar `|||` no lugar de `|=|`, ou `[>` no lugar de `|>`).
- **Origem:** `CTT-05`, `CTT-06`, `CTT-07`, `CTT-08`, `CTT-09` (`Lista CTT Consolidada.md`).
- **Justificativa de necessidade (requisito metodológico):** `E2-16` checa apenas a presença de operadores; unificar `CTT-05`–`CTT-09` em um único item condicional verifica a correção semântica real sem multiplicar itens que ficariam `Não se aplica` em diagramas mais simples.

---

## 5. Ajustes recomendados para itens com cobertura parcial

Os ajustes abaixo aperfeiçoam itens existentes preservando integralmente sua autoria original, rastreabilidade V1 e requisitos do plano de ensino.

### 5.1 Etapa 1 (`docs/entrega-8/lista-etapa-1.md`) — 1 ajuste

#### Ajuste em `E1-12` (incorporando `MAV-13`)
- **Redação atual:**
  > **E1-12 · Na inspeção dos sites candidatos, a severidade dos problemas de usabilidade considera frequência, impacto e persistência?**
  > **O que conferir.** Confira nas avaliações heurísticas ou inspeções dos sites candidatos se o julgamento de severidade dos problemas encontrados (escala de Nielsen) leva em conta: (1) a frequência com que o problema ocorre; (2) o impacto do problema, se ocorrer; e (3) a persistência do problema.
- **Redação proposta:**
  > **E1-12 · Na inspeção dos sites candidatos, a severidade dos problemas considera frequência, impacto e persistência e utiliza a escala padronizada de Nielsen (1 a 4, admitindo 0 na consolidação)?**
  > **O que conferir.** Confira nas avaliações heurísticas ou inspeções dos sites candidatos se o julgamento de severidade leva em conta: (1) frequência, (2) impacto e (3) persistência; e se classifica cada problema de forma consistente na escala de Nielsen (1 – cosmético, 2 – pequeno, 3 – grande, 4 – catastrófico; e 0 – não é problema, quando houver consolidação).
- **Requisito preservado e adicionado:** Preserva integralmente o item de Caio (`MAV-12`) e acrescenta a verificação objetiva da escala padronizada (`MAV-13`) sem duplicar o tema em novo item.

### 5.2 Etapa 2 (`docs/entrega-8/lista-etapa-2.md`) — 8 ajustes

#### 1. Ajuste em `E2-01` (incorporando `PER-21`)
- **Redação atual:**
  > **E2-01 · O levantamento do perfil e dos requisitos dos usuários combina no mínimo duas técnicas de coleta fundamentadas na literatura?**
  > **O que conferir.** Confirme se a definição do perfil de usuário e dos requisitos emprega ao menos duas técnicas distintas (ex.: entrevistas semiestruturadas, observação de tarefa/investigação contextual, questionários, brainstorming, análise documental), apresentando autor do item, referência bibliográfica e imagem do trecho da fonte.
- **Redação proposta:**
  > **E2-01 · O levantamento do perfil e dos requisitos dos usuários combina no mínimo duas técnicas de coleta fundamentadas na literatura e justificadas conforme a disponibilidade e logística das fontes?**
  > **O que conferir.** Confirme se a definição do perfil e dos requisitos emprega ao menos duas técnicas distintas (ex.: entrevistas semiestruturadas, observação de tarefa/investigação contextual, questionários, brainstorming, análise documental), apresentando autor do item, referência bibliográfica, imagem do trecho da fonte e justificativa da escolha considerando disponibilidade de tempo, acesso e localização dos participantes.
- **Requisito preservado e adicionado:** Preserva a exigência do plano de ensino (mínimo duas técnicas, autor, referência e foto) e adiciona a viabilidade logística das fontes (`PER-21`).

#### 2. Ajuste em `E2-02` (incorporando `PER-12` e `PER-13`)
- **Redação atual:**
  > **O que conferir.** Confira no artefato de Perfil do Usuário a cobertura dos atributos de Hackos e Redish (1998 apud Barbosa e Silva, 2010, p. 134–135): dados demográficos (idade, sexo, status socioeconômico), experiência no cargo, informações sobre a empresa/organização, educação, experiência com computadores e com o produto, tecnologia disponível, treinamento, atitudes e valores, conhecimento do domínio, objetivos, tarefas, gravidade dos erros e idiomas/jargões, acompanhados de referência e foto do livro.
- **Redação proposta (manter a pergunta de `E2-02` inalterada; refinar `O que conferir`):**
  > **O que conferir.** Confira no artefato de Perfil do Usuário a cobertura dos atributos de Hackos e Redish (1998 apud Barbosa e Silva, 2010, p. 134–135): dados demográficos (idade, sexo, status socioeconômico), experiência no cargo, informações sobre a empresa/organização (quando aplicável), educação, experiência com computadores e com o produto, tecnologia disponível, treinamento, atitudes e valores, conhecimento do domínio, objetivos (incluindo como são alcançados atualmente), tarefas (distinguindo primárias e secundárias, com frequência e familiaridade), gravidade dos erros e idiomas/jargões, acompanhados de referência e foto do livro.
- **Requisito preservado e adicionado:** Preserva o item de Bruno e torna verificáveis os detalhes de `PER-12` e `PER-13` sem fragmentar os 16 atributos em itens isolados.

#### 3. Ajuste em `E2-05` (incorporando `PER-26`)
- **Redação atual:**
  > **E2-05 · A coleta de dados solicita e registra permissão explícita para gravar voz, tela ou imagem antes do início da gravação?**
  > **O que conferir.** Verifique no documento de ética e nos registros individuais das entrevistas se a permissão de captação audiovisual foi solicitada antes do início da gravação, especificando o escopo autorizado (áudio, tela e/ou imagem) e preservando fora do site público qualquer mídia não autorizada para divulgação.
- **Redação proposta:**
  > **E2-05 · A coleta solicita permissão explícita antes de gravar voz, tela ou imagem e garante confidencialidade e anonimato em todas as mídias e dados publicados?**
  > **O que conferir.** Verifique no documento de ética e nos registros individuais: (1) solicitação prévia de autorização discriminando áudio, tela e/ou imagem; (2) restrição dos dados brutos à equipe mediante consentimento; e (3) preservação do anonimato em todas as mídias publicadas (textos, imagens, áudios e vídeos), omitindo nomes e dados identificadores indiretos.
- **Requisito preservado e adicionado:** Preserva a exigência de autorização prévia de gravação e adiciona as garantias operacionais de anonimato em todas as mídias e dados brutos (`PER-26`).

#### 4. Ajuste em `E2-06` (incorporando `PER-24`, `PER-25` e `PER-27`)
- **Redação atual:**
  > **O que conferir.** Confirme a disponibilidade do modelo de Termo de Consentimento Livre e Esclarecido (TCLE) contendo objetivos, procedimentos, riscos/desconfortos, garantia de confidencialidade e anonimato e direito de recusa ou desistência a qualquer momento sem penalidades, além do quadro ou registro que comprove a aplicação aos participantes (mantendo dados civis sensíveis protegidos).
- **Redação proposta (manter a pergunta de `E2-06` inalterada; refinar `O que conferir`):**
  > **O que conferir.** Confirme: (1) esclarecimento prévio aos participantes (objetivos, o que ocorrerá, tempo aproximado, uso/análise dos dados e abertura para dúvidas); (2) modelo de TCLE contendo procedimentos, riscos/desconfortos, confidencialidade/anonimato, entrega de via ao participante, previsão de responsável legal caso haja menores de 18 anos, direito de recusa/desistência sem penalidades e protocolo de pausa ou interrupção pelo pesquisador em caso de constrangimento, desconforto ou exaustão; e (3) quadro ou registro comprovando a aplicação aos participantes (sem expor dados civis sensíveis).
- **Requisito preservado e adicionado:** Preserva o item de Israel e a dispensa de exposição pública de assinaturas civis, incorporando transparência prévia (`PER-24`), entrega de via/menores (`PER-25`) e protocolo de interrupção por desconforto (`PER-27`).

#### 5. Ajuste em `E2-08` (incorporando `ELP-06`)
- **Redação atual:**
  > **O que conferir.** Verifique no artefato de Elenco de Personas a definição conceitual com referência e imagem do livro, a quantidade adequada ao projeto (3 a 12 personas, com ao menos uma primária) e a justificativa do status de cada persona (primária ou secundária) em função dos objetivos de design.
- **Redação proposta (manter a pergunta de `E2-08` inalterada; refinar `O que conferir`):**
  > **O que conferir.** Verifique no artefato de Elenco de Personas a definição conceitual com referência e imagem do livro, a quantidade adequada (3 a 12 personas, com ao menos uma primária) e a justificativa do status de cada persona — confirmando, para cada persona primária, o critério de Cooper (1999) de que suas necessidades demandam interface própria/exclusiva que não seria adequadamente atendida pela interface projetada para outra persona.
- **Requisito preservado e adicionado:** Preserva o item de Caio e operacionaliza objetivamente o critério teórico de persona primária (`ELP-06`).

#### 6. Ajuste em `E2-09` (incorporando `PSN-02`, `PSN-06`, `PSN-08` e `PSN-09`)
- **Redação atual:**
  > **O que conferir.** Abra as páginas individuais de personas e confirme a presença dos oito elementos de Courage e Baxter (2005 apud Barbosa e Silva, 2010, p. 177): (1) identidade, (2) status, (3) objetivos, (4) habilidades, (5) tarefas, (6) relacionamentos, (7) requisitos e (8) expectativas, verificando se apenas o nome e detalhes pessoais foram inventados sobre a base empírica ou documental.
- **Redação proposta (manter a pergunta de `E2-09` inalterada; refinar `O que conferir`):**
  > **O que conferir.** Abra as páginas individuais de personas e confirme: (a) concretude e especificidade da descrição, evitando abstrações genéricas ("usuário médio" ou "usuário 1"); (b) presença dos oito elementos de Courage e Baxter (2005 apud Barbosa e Silva, 2010, p. 177) — (1) identidade (nome, dados demográficos e foto), (2) status, (3) objetivos, (4) habilidades, (5) tarefas básicas/críticas com frequência, importância e duração (sem passo a passo operacional), (6) relacionamentos, (7) requisitos acompanhados de citações diretas entre aspas e (8) expectativas e modelo mental; e (c) rastreabilidade empírica/documental, inventando apenas nome e detalhes pessoais.
- **Requisito preservado e adicionado:** Preserva o item de Caio e acrescenta os critérios internos essenciais de concretude (`PSN-02`), atributos de tarefas (`PSN-06`), citações (`PSN-08`) e modelo mental (`PSN-09`) sem multiplicar itens para cada subelemento.

#### 7. Ajuste em `E2-11` (incorporando `CEN-05`)
- **Redação atual:**
  > **O que conferir.** Abra os cenários individuais e o quadro síntese do grupo. Confirme se cada cenário apresenta: (1) título conciso que descreve a situação ou barreira enfrentada; (2) os atores que participam (vinculados à persona correspondente); e (3) uma breve descrição da situação inicial em que os atores se encontram.
- **Redação proposta (manter a pergunta de `E2-11` inalterada; refinar `O que conferir`):**
  > **O que conferir.** Abra os cenários individuais e o quadro síntese do grupo. Confirme se cada cenário apresenta: (1) título conciso que descreve a situação ou barreira enfrentada; (2) os atores participantes, explicitando características pessoais relevantes à situação e mantendo coerência nominal e comportamental com as personas criadas; e (3) uma breve descrição da situação inicial em que os atores se encontram.
- **Requisito preservado e adicionado:** Preserva o item de Bruno (`CEN-04`) e explicita a verificação de características pessoais e aderência às personas (`CEN-05`).

#### 8. Ajuste em `E2-13` (incorporando `HTA-09`)
- **Redação atual:**
  > **O que conferir.** Abra as páginas individuais de análise de tarefas de todos os integrantes. Confirme se cada um modelou sua tarefa tanto em HTA (contendo representação gráfica/diagrama, legenda notacional e tabela detalhada) quanto em uma segunda técnica da literatura (como CTT ou GOMS/KLM).
- **Redação proposta (manter a pergunta de `E2-13` inalterada; refinar `O que conferir`):**
  > **O que conferir.** Abra as páginas individuais de análise de tarefas de todos os integrantes. Confirme se cada um modelou sua tarefa tanto em HTA — contendo diagrama hierárquico, legenda notacional e tabela detalhada com **numeração e nomes consistentes entre si** — quanto em uma segunda técnica da literatura (como CTT ou GOMS/KLM).
- **Requisito preservado e adicionado:** Preserva a exigência de dupla modelagem do plano de ensino e adiciona a verificação de consistência entre diagrama e tabela (`HTA-09`).

---

## 6. Sugestões complementares opcionais (não obrigatórias)

Os 20 critérios abaixo representam aprofundamentos ou boas práticas metodológicas úteis, mas **não indispensáveis** para a validade básica das listas V2 das Etapas 1 e 2. Recomenda-se **não incluí-los agora** (ou adotar apenas se o grupo desejar maior rigor editorial):

- **Etapa 1 (4 itens opcionais):**
  - `MAV-04` (explicitar natureza qualitativa/quantitativa dos resultados esperados);
  - `MAV-08` (inspeção independente e dupla passagem pela interface na AH);
  - `MAV-09` (declaração explícita da estratégia de percurso por diretriz ou por tela na AH);
  - `MAV-10` (limite de 1 a 2 horas por sessão de inspeção na AH).
- **Etapa 2 (16 itens opcionais):**
  - **Perfil de Usuário (5):** `PER-05` (letramento, habilidades de leitura e estilo de aprendizado), `PER-15` (motivação laboral — restrita a perfis ocupacionais), `PER-17` (estudo prévio do domínio — já abordado na Etapa 1), `PER-20` (papéis de manutenção/suporte em sistema existente — acesso restrito no Senado) e `PER-22` (uso de fontes complementares como logs e análise competitiva).
  - **Personas (1):** `PSN-13` (estratificação explícita em objetivos de experiência, finais e de vida).
  - **Elenco de Personas (3):** `ELP-04` (memorabilidade e distinção cognitiva entre personas), `ELP-07` (referência de cerca de três personas primárias) e `ELP-08` (inclusão de antipersonas para delimitação de escopo).
  - **Cenários (4):** `CEN-03` (explicitação dos papéis de Bødker), `CEN-14` (situações de exceção / eventos raros), `CEN-19` (envolvimento de stakeholders na validação dos cenários) e `CEN-20` (aprimoramento iterativo mediante feedback).
  - **HTA (2):** `HTA-02` (métricas mensuráveis de desempenho acordadas com stakeholders) e `HTA-08` (explicitação do critério de parada `p × c`).
  - **CTT (1):** `CTT-04` (expressão da solução de design da interação no CTT — mais adequado a etapas de design).

---

## 7. Observações sobre as listas V2 existentes, dúvidas abertas e limitações bibliográficas

### 7.1 Problemas pontuais observados nas listas V2 existentes (sem alteração nesta rodada)

- **Links de âncora deslocados na Tabela 1 de `docs/entrega-8/lista-etapa-2.md` (linhas 12–13):**
  - Na linha de Bruno Ferreira Dornelas, o link `[E2-12](#e2-12)` aponta para o item de Análise de Tarefas, embora o critério de estrutura básica dos cenários de autoria dele seja **`E2-11`** (`#e2-11`).
  - Na linha de Caio Breno de Souza Bezerra, o link `[E2-10](#e2-10)` aponta para Cenários, omitindo os links para os itens de personas de sua autoria (**`E2-08`** e **`E2-09`**).
  - *Recomendação:* corrigir esses links quando a lista oficial da Etapa 2 for atualizada.
- **Preservação de requisitos do plano de ensino:** Nenhum item de `D01`–`D11`, `E1-01`–`E1-13` ou `E2-01`–`E2-16` apresentou contradição com o plano de ensino; todos devem ser preservados.

### 7.2 Dúvidas que dependem de decisão antes de editar as listas oficiais

1. **Bloco condicional de Brainstorming (`PER-38`–`PER-46`) e Questionários (`PER-33`–`PER-37`) na Etapa 2:** Como `lista-etapa-2.md` será usada também na inspeção externa do **Grupo 05 (−1)** — cuja ficha V1 indica uso de brainstorming na Etapa 2 —, o grupo deseja incluir **um bloco condicional enxuto** (2 a 3 itens agregados para brainstorming e, opcionalmente, 1 a 2 para questionários) que possa ser marcado como `Não se aplica` no Grupo 06 e avaliado no Grupo 05, ou manter a Etapa 2 restrita às técnicas comuns e entrevistas?
2. **Critérios condicionais da Etapa 1 para o Grupo 07 (+1):** Caso o Grupo 07 tenha utilizado participação de usuários (`DEC-11`/`DEC-12`), múltiplos avaliadores no mesmo site (`MAV-14`) ou Percurso Cognitivo (`MAV-16`) na Etapa 1, o grupo prefere manter esses itens fora da lista V2 da Etapa 1 (documentando na ficha se ocorrerem) ou incluí-los já como itens condicionais?
3. **Exigências específicas do professor não verificáveis no plano de ensino resumido:** Confirmar se o professor exigiu formalmente na Etapa 2 (a) presença obrigatória de **antipersonas** (`ELP-08`), (b) divisão explícita em **três níveis de objetivos** (`PSN-13`) e (c) **validação pós-modelagem da HTA** com retorno ao usuário (`HTA-10`) ou se aceita conferência contra a gravação/observação direta da entrevista.

### 7.3 Limitações da verificação bibliográfica

- **Obras originais indisponíveis em texto integral:** Os livros Barbosa & Silva (2010), Barbosa et al. (2021) e Preece, Rogers & Sharp (2005), bem como o PDF integral de Sales (2026), não estão disponíveis em texto integral no ambiente de análise (há apenas recortes de imagem em `docs/assets/img/referencias/` e `docs/assets/img/entrega-8/fontes/`).
- **Divergência editorial não resolvida (2010 vs. 2021):** Conforme registrado no `Relatório de consolidação.md`, as listas de origem de Bruno atribuem a `Barbosa et al. (2021)` capítulos e páginas (Cap. 6, p. 177–205; Cap. 11–12, p. 264–286) que coincidem com a paginação de `Barbosa & Silva (2010)` citada por Heitor. Antes de inserir novas citações e recortes nas listas oficiais V2, é necessário conferir a edição exata das imagens disponíveis no repositório e evitar referenciar páginas não verificadas.
- **Imagens das listas consolidadas ausentes:** Os arquivos de imagem citados nos Markdowns originais de `listas_markdown/` não constam na pasta `Consolidadas/`. Qualquer novo item aprovado para `lista-etapa-1.md` ou `lista-etapa-2.md` precisará de recorte de imagem próprio (ou reutilização de recorte já existente em `docs/assets/img/`) para cumprir a regra de controle de qualidade da seção `Conferência da lista`.

---

## Agradecimentos

O Antigravity e o Google Gemini apoiaram a comparação sistemática dos 136 critérios consolidados frente às listas V2 das Etapas 1 e 2, a verificação de aplicabilidade contra os artefatos publicados do Grupo 06 e a estruturação da matriz de rastreabilidade. Heitor Pinheiro Gonçalves das Chagas responde pela revisão crítica, validação das recomendações e decisão editorial final.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `1.0` | 21/11/2026 | Elaboração da proposta de complementação das listas de verificação V2 das Etapas 1 e 2 a partir das oito listas consolidadas (136 critérios). | [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | A definir |

## Referências

1. SALES, André Barros de. *Plano de Ensino FIHC 022026 — Turma 01*. v1. Brasília: FCTE/UnB, 2026. *(Referência conforme citada nos artefatos do repositório; texto integral do PDF não consultado diretamente nesta rodada.)*

2. BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. *(Paginação conforme recortes do repositório e listas consolidadas; obra integral não consultada diretamente nesta rodada.)*

3. BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. *Interação Humano-Computador e Experiência do Usuário*. Autopublicação, 2021. *(Referência preservada conforme registrada nas listas consolidadas; paginação sujeita à conferência editorial descrita na Seção 7.3.)*

4. PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. *Design de Interação: além da interação homem-computador*. Porto Alegre: Bookman, 2005. *(Referência preservada conforme registrada em `Lista Cenários Consolidada.md`; obra integral não consultada diretamente nesta rodada.)*
