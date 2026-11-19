# Acervo da Pasta `contexto/` — Mapeamento Bibliográfico e Dissecação das Listas

Este documento cataloga todos os **15 arquivos PDF** presentes em `contexto/` (5 obras/capítulos de referência e 10 listas de verificação autorais de Bruno Ferreira Dornelas), servindo como índice rápido de páginas, edições, citações ABNT e padrões já consolidados.

---

## 1. Regra Crítica de Fidelidade de Edição (Barbosa 2010 vs. Barbosa et al. 2021)

> **ATENÇÃO MÁXIMA:** Na pasta `contexto/`, o livro completo disponível em PDF é a **1ª edição de 2010 (Editora Elsevier)**, com 10 capítulos:
> `Simone_Barbosa_and_Bruno_Silva_Auth_Interação_Humano_computador.pdf`.
>
> Nas listas antigas em `contexto/`, alguns itens usaram prints dessa edição de **2010** (reconhecível pelo logotipo da árvore da **ELSEVIER** no topo esquerdo das páginas ímpares e pelo rodapé/cabeçalho `Capítulo X | ...`), mas citaram no texto a edição de **2021** (*Autopublicação*).
>
> **Regra obrigatória desta skill:**
> - Se o recorte de imagem (`PNG`) sair de `Simone_Barbosa_and_Bruno_Silva_Auth_Interação_Humano_computador.pdf`, a referência **DEVE obrigatoriamente citar a edição de 2010 (Elsevier)** e o número da página impressa visível nesse PDF:
>   `BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. Interação humano-computador. Rio de Janeiro: Elsevier, 2010.`
> - Só cite `BARBOSA, S. D. J. et al. Interação Humano-Computador e Experiência do Usuário. Autopublicação, 2021` se o print vier comprovadamente de um PDF da edição de 2021 fornecido à parte.

---

## 2. Catálogo dos 5 Livros e Capítulos de Referência em `contexto/`

### 2.1. Barbosa & Silva (2010) — *Interação Humano-Computador* (Livro completo digital)
- **Arquivo:** `Simone_Barbosa_and_Bruno_Silva_Auth_Interação_Humano_computador.pdf` (388 páginas PDF)
- **Tipo:** Digital com camada de texto (possui ligaturas `ﬁ`/`ﬂ` e hifenização de quebra de linha — tratadas automaticamente por `destacar_trecho_pdf.py`). Layout de página simples.
- **Cabeçalho impresso:** No topo das páginas (`Capítulo X | Título   <pág>` nas ímpares; `<pág>   Interação Humano-Computador` nas pares). Use `--incluir-cabecalho` sempre que o trecho estiver no terço superior/médio.
- **Referência ABNT exata:**
  `BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. Interação humano-computador. Rio de Janeiro: Elsevier, 2010. (Série SBC).`
- **Mapa de Capítulos e Conversão `Página Impressa ↔ Página do PDF`:**

| Capítulo | Título e Temas Principais para Listas de Verificação | Pág. Impressa | Pág. no PDF | Offset (`PDF - Impressa`) |
| :---: | --- | :---: | :---: | :---: |
| **Cap. 1** | **Introdução** — Visões de sistemas interativos, objetos de estudo em IHC, benefícios | 1–15 | 9–23 | `+8` |
| **Cap. 2** | **Conceitos Básicos** — Interface, interação, affordance, qualidade em IHC (usabilidade, UX, acessibilidade, comunicabilidade) | 17–41 | 24–48 | `+7` |
| **Cap. 3** | **Abordagens Teóricas em IHC** — Hick-Hyman, Fitts, Gestalt, Engenharia Cognitiva (Norman), Engenharia Semiótica | 43–89 | 49–95 | `+6` |
| **Cap. 4** | **Processos de Design de IHC** — Ciclo de vida (estrela de Hix & Hartson, Mayhew, Design Contextual, Design Centrado na Comunicação, Métodos Ágeis) | 91–129 | 97–135 | `+6` |
| **Cap. 5** | **Identificação de Necessidades dos Usuários e Requisitos de IHC** — Que dados coletar, de quem coletar, aspectos éticos e TCLE, entrevistas, questionários, grupos de foco, brainstorming, ordenação de cartões, observação | 131–171 | 137–177 | `+6` |
| **Cap. 6** | **Organização do Espaço de Problema** — Perfil de usuário (p. 174–176), Personas e Elenco de Personas (p. 176–182), Cenários (p. 182–190), Análise de Tarefas: HTA (p. 191–197), GOMS (p. 197–202), CTT (p. 202–205) | 173–205 | 178–210 | `+5` |
| **Cap. 7** | **Design de IHC** — Cenários de interação, modelagem de interação (MoLIC), design da interface, wireframes, protótipos de baixa e alta fidelidade, sistema de ajuda | 207–261 | 212–266 | `+5` |
| **Cap. 8** | **Princípios e Diretrizes para o Design de IHC** — Correspondência com expectativas, simplicidade, equilíbrio, consistência, eficiência, antecipação, padrões de design e **Guias de Estilo** (p. 280–284) | 263–284 | 268–289 | `+5` |
| **Cap. 9** | **Planejamento da Avaliação de IHC** — Por que/o que/quando/onde avaliar, tipos de métodos (investigação, inspeção, observação), perfil de recrutamento, teste-piloto, ética e **Framework DECIDE** (p. 312–313) | 285–313 | 290–318 | `+5` |
| **Cap. 10** | **Métodos de Avaliação de IHC** — Avaliação Heurística (p. 316–322), Percurso Cognitivo (p. 322–330), Inspeção Semiótica / MIS (p. 330–340), **Teste de Usabilidade** (p. 341–344), Avaliação de Comunicabilidade / MAC (p. 344–358), **Prototipação em Papel** (p. 358–362), Resumo Comparativo (p. 362–365) | 315–365 | 320–370 | `+5` |

---

### 2.2. Vianna et al. (2012) — *Design Thinking: Inovação em Negócios*
- **Arquivo:** `Livro_Design_Thinking_-_Inovao_Negcios.pdf` (85 páginas PDF)
- **Tipo:** Digital com camada de texto, diagramado em **spreads duplos horizontais** (2 páginas impressas por folha do PDF: página par à esquerda, página ímpar à direita). `destacar_trecho_pdf.py` detecta e recorta automaticamente apenas a metade esquerda ou direita onde está o trecho!
- **Numeração impressa:** Fica no **rodapé** de cada página (`126 | Prototipação`, `Prototipação | 135`). Use `--pagina-inteira` ou aumente `--margem-v` caso queira exibir o número impresso no rodapé.
- **Referência ABNT exata:**
  `VIANNA, Maurício; VIANNA, Ysmar; ADLER, Isabel K.; LUCENA, Brenda de F.; RUSSO, Beatriz. Design Thinking: inovação em negócios. Rio de Janeiro: MJV Press, 2012.`
- **Páginas-chave mais usadas nas listas de IHC:**
  - **Prototipação (visão geral, níveis de fidelidade e contextualização):** PDF p. 62–65 (págs. impressas 120–127; destaque para p. 122–126 sobre protótipo em papel e níveis de fidelidade/contextualização).
  - **Protótipo em Papel:** PDF p. 65–66 (págs. impressas 126–129).
  - **Modelo de Volume / Encenação:** PDF p. 67–68 (págs. impressas 130–133).
  - **Storyboard (*O que é? / Quando usar? / Como aplicar?* e exemplos de quadros):** PDF p. 69–70 (págs. impressas 134–137; p. 135 está na metade direita do PDF p. 69; p. 136–137 estão no PDF p. 70).

---

### 2.3. Preece, Rogers & Sharp (2005) — *Design de Interação* (Cap. 8 — duas versões no acervo)
- **Arquivos:**
  1. `Design de interação cap 8.pdf` (45 páginas PDF — contém apenas o Capítulo 8, págs. impressas 259–297 + encarte colorido).
  2. `Design de interação  - StoryBoard.pdf` (85 páginas PDF — atenção à grafia NFD e espaço duplo antes do hífen no nome do arquivo! Contém Capa [PDF p. 1], Sumário completo da obra [PDF p. 2–7], Capítulo 8 completo [PDF p. 8–52, págs. impressas 259–297], Referências [PDF p. 53–65] e Índice Remissivo [PDF p. 69–85]).
- **Tipo:** **Escaneado (sem camada de texto)**. `destacar_trecho_pdf.py` aplica OCR automático via `RapidOCR`. Layout de página simples, com número da página impressa no **topo** (`262   DESIGN DE INTERAÇÃO`).
- **Referência ABNT exata:**
  `PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. Design de interação: além da interação homem-computador. Tradução de Viviane Possamai. Porto Alegre: Bookman, 2005.`
- **Mapeamento rápido do Capítulo 8 (`Design de interação cap 8.pdf`):**
  - PDF p. 1 → Pág. impressa 259 (Abertura do Cap. 8: *Design, Prototipação e Construção*)
  - PDF p. 2–3 → Págs. impressas 260–261 (O que é um protótipo e por que prototipar)
  - PDF p. 4 → Pág. impressa 262 (Prototipação de baixa-fidelidade)
  - PDF p. 5–6 → Págs. impressas 263–264 (*Storyboard*, esboços/*sketching*, prototipação com cartões de índice e *Mágico de Oz*)
  - PDF p. 7–9 → Págs. impressas 265–267 (Prototipação de alta-fidelidade, vantagens/desvantagens — Tabela 8.1 na p. 267 / PDF p. 9, compromissos na prototipação)
  - PDF p. 13–24 → Págs. impressas 271–282 (Design conceitual, modelos conceituais, metáforas de interface, cenários e protótipos no design)
  - PDF p. 41–43 → Págs. impressas 294–296 (Resumo, Questões e Pontos-chave do Cap. 8)
  *(No arquivo `Design de interação  - StoryBoard.pdf`, basta somar `+7` ao número da página do PDF de `cap 8`: ex. pág. impressa 263 = PDF p. 5 em `cap 8` = PDF p. 12 em `StoryBoard.pdf`).*

---

### 2.4. Santa-Rosa & Moraes — *Avaliação e Projeto no Design de Interfaces* (Cap. 9: Teste de Usabilidade)
- **Arquivo:** `04 Teste_de_usabilidade.pdf` (19 páginas PDF)
- **Tipo:** **Escaneado em spreads duplos** (2 páginas impressas por folha do PDF: págs. impressas 144–181). Sem camada de texto embutida (usa OCR automático via `RapidOCR` em `destacar_trecho_pdf.py`).
- **Referência ABNT exata:**
  `SANTA-ROSA, José Guilherme; MORAES, Anamaria de. Avaliação e projeto no design de interfaces. Rio de Janeiro: 2AB, 2008. Cap. 9 (Teste de usabilidade), p. 144-181.` *(Conferir ano da tiragem se citar trecho específico).*
- **Mapeamento rápido de páginas (`PDF ↔ Páginas Impressas Esquerda/Direita`):**
  - PDF p. 1 → p. 144 (esq.) / p. 145 (dir.) — Abertura do Cap. 9: *Teste de usabilidade*
  - PDF p. 2–5 → p. 146–153 — Definição, objetivos, diferenças entre teste formativo e somativo, quando realizar
  - PDF p. 6–10 → p. 154–163 — Planejamento do teste, recrutamento e quantidade de participantes, elaboração de tarefas e roteiro, ambiente/equipamentos e teste-piloto
  - PDF p. 11–15 → p. 164–173 — Condução da sessão, papel do moderador/observador, protocolo *think-aloud* (pensar em voz alta), ética e acolhimento do participante
  - PDF p. 16–19 → p. 174–181 — Coleta de métricas, tabulação, classificação de severidade, análise e relatório de recomendações

---

## 3. Síntese das 10 Listas de Verificação Autorais de Bruno em `contexto/`

Abaixo está o inventário completo das **10 listas de verificação** (totalizando **145 itens**) criadas por Bruno Ferreira Dornelas e dissecadas para construir esta skill:

| # | Arquivo em `contexto/` | Tema / Artefato Avaliado | Itens | Estrutura e Padrões Notáveis Extraídos |
| :---: | --- | --- | :---: | --- |
| 1 | `Grupo6BrunoFerreiraVerifacaçãoListaPerfilUsuario.pdf` | Coleta de Dados e Perfil de Usuário | **42** | Organizada em **6 seções temáticas** (*Que dados coletar* [1–15], *De quem coletar* [16–20], *Aspectos éticos* [21–25], *Entrevistas* [26–30], *Questionários* [31–34], *Brainstorming* [35–42]). Excelente modelo para listas extensas (15+ itens). |
| 2 | `Grupo6BrunoFerreiraDornelasVerificacaoPrototipoPapel (1).pdf` | Protótipo em Papel + Planejamento da Avaliação | **20** | Dividida em **Parte A** (Artefato Protótipo em Papel, Itens 1–3, combinando Barbosa & Silva, Vianna et al. e Preece et al.) e **Parte B** (Planejamento da Avaliação, Itens 4–20). Usa `Figura Na` e `Figura Nb` quando um trecho cruza duas páginas. |
| 3 | `Grupo6BrunoFerreiraDornelasVerificacaoListaMetodosdeAvaliacao (1).pdf` | Escolha e Aplicação de Métodos de Avaliação | **13** | Demonstra **itens condicionais exemplares** (*"Se o método adotado for Percurso Cognitivo, o artefato..."*; *"Caso contrário, marcar Não se Aplica"*), enumerando todas as perguntas do método no próprio enunciado. |
| 4 | `Grupo6BrunoFerreiraDornelasVerificacaoListaPersonas.pdf` | Construção de Personas | **12** | Explicita os componentes obrigatórios da persona (identidade, status, objetivos, habilidades, tarefas, relacionamentos, requisitos e expectativas) direto na pergunta. *Lição aprendida:* nos itens 7–9 desta lista antiga, o destaque amarelo manual deslocou um bullet para baixo — motivo pelo qual esta skill exige busca programática + conferência visual com `read_file`. |
| 5 | `LVGrupo6BrunoFerreiraStoryBord01.pdf` | Storyboard | **12** | Lista multifonte combinando **Vianna et al. (2012, p. 135–137)** e **Preece, Rogers & Sharp (2005, Cap. 8, p. 263–264, 295)**. |
| 6 | `Grupo6BrunoFerreiraDornelasVerifacaçãoListaDECIDE.pdf` | Planejamento da Avaliação (Framework DECIDE) | **10** | Mapeia sistematicamente cada letra do acrônimo **D-E-C-I-D-E** + teste-piloto + recrutamento + ética em perguntas diretas e independentes. |
| 7 | `Grupo6BrunoFerreiraDornelasVerificacaoCenarios.pdf` | Cenários de Análise e Interação | **10** | Enumera todos os elementos estruturais de cenários (ambiente/contexto, atores, objetivos, planejamento, ações, eventos e avaliação) dentro dos enunciados. |
| 8 | `Grupo6BrunoFerreiraDornelasVerificacaoCTT (1).pdf` | Modelagem de Tarefas em CTT (*ConcurTaskTrees*) | **9** | Exemplo áureo de **autocontenção técnica**: explica no próprio texto do item cada categoria de tarefa (abstrata, usuário, interação, aplicação) e cada operador temporal (`[]`, `|||`, `|[]|`, `[>`, `|>`, `*`, `[T]`, `>>`, `[]>>`). |
| 9 | `Grupo6BrunoFerreiraDornelasVerificacaoHTA.pdf` | Análise Hierárquica de Tarefas (HTA) | **9** | Detalha objetivo `0`, decomposição em subobjetivos, critério de parada $P \times C$, planos (sequência fixa, seleção, ciclos, paralelo), representação gráfica/tabular e revisão com especialistas. |
| 10 | `Grupo6BrunoFerreiraDornelasVerificacaoElencoPersonas.pdf` | Elenco de Personas | **8** | Distingue os 6 tipos de personas (primária, secundária, suplementar, cliente, servida e negativa) definindo cada tipo entre parênteses no próprio enunciado. |

