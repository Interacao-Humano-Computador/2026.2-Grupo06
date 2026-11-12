<span class="owner">Responsável: Israel Soares de Paiva — Agendamento de visita ao Senado · Autor do item: Israel Soares de Paiva</span>

# Relato Consolidado dos Resultados da Etapa 5 — Agendamento de Visita ao Senado Federal

## Tabela de contribuição

A Tabela 1 registra as contribuições na elaboração e revisão deste artefato.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Israel Soares de Paiva](https://github.com/IsraelSoares-25) | Tabulação das evidências empíricas, síntese analítica da convergência dos dados e matriz de rastreabilidade | [Conteúdo](#introducao) |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Revisão técnica de consistência, conferência dos localizadores nos vídeos e validação metodológica | [Introdução](#introducao) |

<p class="caption">Tabela 1 — Contribuições neste artefato consolidado.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Introdução

Este artefato apresenta a **consolidação dos resultados da Etapa 5** para a funcionalidade de **Agendamento de visita ao Senado Federal** (Programa de Visitação Institucional do Congresso Nacional / Senado Federal), integrando os achados empíricos obtidos na avaliação formativa do [Storyboard](relato-storyboard.md) e da [Análise de Tarefas (HTA e CTT)](relato-analise-tarefas.md).

O objetivo deste relatório consolidado é conectar formalmente as evidências qualitativas e quantitativas coletadas com as partes interessadas às decisões de engenharia de usabilidade que estruturam o [Planejamento da avaliação do protótipo de papel](planejamento-avaliacao-prototipo-papel.md) (Etapa 5) e sua posterior execução na [Etapa 6](../../../entrega-6/individual/israel/relato-prototipo-papel.md). A consolidação segue os preceitos metodológicos de Barbosa e Silva (2010), estabelecendo um fio condutor contínuo e verificável desde a pesquisa preliminar com a persona [Marta Oliveira](../../../entrega-2/individual/israel/persona.md) até a prototipação de alta fidelidade na [Etapa 6](../../../entrega-6/individual/israel/planejamento-avaliacao-alta-fidelidade.md) e [Etapa 7](../../../entrega-7/index.md).

---

## Objetivos e Escopo da Avaliação

A Etapa 5 teve como escopo validar empiricamente as hipóteses de interação antes da construção das interfaces físicas e digitais, contemplando os seguintes objetivos centrais:

1. **Validação da narrativa conceitual (Storyboard):** verificar se a sequência visual de 7 cenas reflete o modelo mental de cidadãos com perfil análogo ao de Marta Oliveira (servidora pública externa, 47 anos, organizando visita em grupo com necessidade de suporte de acessibilidade);
2. **Validação da decomposição e planos (HTA/CTT):** verificar a completude, a ordem e o realismo das tarefas do modelo hierárquico (Tarefas 0 a 7), identificando lacunas operacionais, tratamento de exceções (indisponibilidade de vagas) e recuperação de falhas;
3. **Extração de diretrizes de reprojeto:** consolidar as hipóteses de reprojeto (**RP01–RP05**) e os requisitos de tarefas (**AT-P01–AT-P05**) para alimentar a confecção das 7 telas em papel (**PP-S01 a PP-S07**) e o roteiro de tarefas (**PP-T1 a PP-T5**).

---

## Metodologia e Protocolo Aplicado

A condução das avaliações seguiu o framework **DECIDE** (BARBOSA; SILVA, 2010, p. 312–313) articulado aos princípios éticos da pesquisa com seres humanos regulamentados pelo [Termo de Consentimento Livre e Esclarecido (TCLE)](../../../assets/docs/tcle/tcle-israel-assinado.pdf):

* **Procedimento:** sessões presenciais com participantes reais, combinando entrevista semiestruturada guiada por estímulos visuais (*storyboard* e diagrama horizontal HTA em Mermaid) e protocolo de verbalização contínua (*think-aloud*);
* **Salvaguardas éticas:** leitura e assinatura do TCLE prévio, garantia de sigilo dos dados pessoais (identificação por códigos desidentificados `SB-PART01` e `AT-PART01`), direito de interrupção a qualquer tempo e autorização explícita para registro audiovisual acadêmico;
* **Calibração prévia:** realização de teste-piloto com o participante `PP-PILOTO01` para calibrar o tempo de explicação, o roteiro de perguntas e a legibilidade dos diagramas.

A Tabela 2 sintetiza as sessões realizadas no ciclo da Etapa 5.

| Sessão | Objeto avaliado | Participante / Perfil | Duração | Registro em vídeo |
| :---: | --- | --- | :---: | :---: |
| **Sessão 1** | Storyboard (7 cenas) | `SB-PART01` (Alinhada a Marta Oliveira) | 06 min 35 s | [Vídeo da sessão](relato-storyboard.md#gravacao-da-sessao) |
| **Sessão 2** | Análise de Tarefas (HTA e CTT) | `AT-PART01` (Alinhada a Marta Oliveira) | 07 min 50 s | [Vídeo da sessão](relato-analise-tarefas.md#gravacao-da-sessao) |

<p class="caption">Tabela 2 — Síntese das sessões empíricas da Etapa 5.</p>
<p class="source">Fonte: elaboração do autor (2026).</p>

---

## Síntese dos Resultados da Avaliação do Storyboard

A avaliação do Storyboard demonstrou que a jornada proposta comunica com clareza o propósito da funcionalidade e atende às expectativas de autonomia e segurança da usuária. A Tabela 3 resume as evidências colhidas nas perguntas avaliativas e o impacto no design.

| Pergunta / Tema | Evidência empírica principal | Localizador | Encaminhamento para o Reprojeto |
| --- | --- | :---: | --- |
| **Q1–Q2: Contexto e Sequência** | A participante compreendeu de imediato a jornada de Marta organizando a visita em grupo com parentes. O fluxo entrada → calendário → cadastro → revisão → comprovante foi considerado natural e intuitivo. | `01:12–02:22` | Manter a estrutura modular em etapas sequenciais com barra de progresso visível. |
| **Q3–Q4: Regras de Acesso** | Alerta crítico sobre vestimenta (proibição de bermudas, chinelos, regatas) e documentos exigidos: devem ser informados **antes** da escolha da data para evitar deslocamentos frustrados. | `02:25–03:38` | **RP01 / RP03:** Inserir card destacado de regras de entrada e trajes na primeira tela do fluxo. |
| **Q5–Q6: Calendário e Vagas** | Necessidade de visualização imediata da disponibilidade por cores (verde/vermelho), sem obrigar a pessoa a clicar dia por dia para descobrir se há vagas. | `03:40–04:52` | **RP02:** Adotar calendário mensal interativo com indicação cromática de vagas e cartões móveis de horários. |
| **Q7–Q8: Comprovante e Segurança** | O comprovante com código localizador e resumo das orientações do dia é o principal fator de alívio e confiança para o comparecimento seguro. | `04:55–06:05` | **RP05:** Desenhar tela de confirmação formal com código localizador, botão de download em PDF e aviso de e-mail. |

<p class="caption">Tabela 3 — Evidências do Storyboard e impacto no reprojeto.</p>
<p class="source">Fonte: elaboração do autor (2026).</p>

---

## Síntese dos Resultados da Análise de Tarefas (HTA e CTT)

A inspeção guiada do HTA versão 2.0 e CTT com a participante `AT-PART01` validou a completude da modelagem e a consistência dos planos operacionais:

1. **Adesão ao fluxo real:** A participante confirmou que as tarefas 1 (Acessar e ler regras), 2 (Definir tipo), 3 (Escolher data/horário), 4 (Preencher dados), 5 (Revisar e confirmar) e 6 (Obter confirmação) representam fielmente a sequência de tomada de decisão;
2. **Tratamento de indisponibilidade (Plano 3.1):** A participante destacou como positiva a previsão explícita de retorno ao calendário caso a data desejada esteja lotada, sugerindo a alternância imediata de dias com horários matutinos;
3. **Mecanismo de edição não-destrutiva (Plano 5.2):** Diante da hipótese de erro de digitação na revisão (ex.: telefone ou CPF), o sistema deve permitir alterar o campo específico preservando os demais dados preenchidos;
4. **Requisitos derivados da HTA:**
   * **AT-P01:** Clareza prévia das normas institucionais de vestimenta e identificação;
   * **AT-P02:** Indicação explícita da quantidade de vagas restantes por horário;
   * **AT-P03:** Campos específicos para solicitação de apoio à mobilidade (cadeira de rodas / intérprete de Libras);
   * **AT-P04:** Tela de revisão estruturada em blocos com botão de alteração individual;
   * **AT-P05:** Emissão de protocolo numérico e orientações sobre a portaria de acesso.

---

## Convergência e Encaminhamentos para o Protótipo de Papel

A Tabela 4 apresenta o mapeamento da convergência entre as hipóteses do Storyboard (**RP01–RP05**), os requisitos da HTA (**AT-P01–AT-P05**) e as soluções de interface formalizadas no [Planejamento da avaliação do protótipo de papel](planejamento-avaliacao-prototipo-papel.md).

| Hipótese do Storyboard | Requisito da HTA | Solução no Protótipo de Papel | Tela Física | Tarefa de Teste |
| :---: | :---: | --- | :---: | :---: |
| **RP01** (Encontrabilidade e regras) | **AT-P01** (Normas prévias) | Card de entrada na home e tela explicativa com ícones de trajes permitidos e documentos | `PP-S01`, `PP-S02` | **PP-T1** |
| **RP02** (Visibilidade de vagas) | **AT-P02** (Vagas no calendário) | Calendário com legenda cromática de vagas e cartões móveis de seleção de horários | `PP-S03` | **PP-T2** |
| **RP03** (Cadastro e acessibilidade) | **AT-P03** (Apoio à mobilidade) | Formulário modular com identificação de acompanhantes e opção para cadeira de rodas | `PP-S04` | **PP-T3** |
| **RP04** (Revisão e tolerância a erros) | **AT-P04** (Edição sem perda) | Tela de resumo com blocos de dados e botão "Editar" preservando o preenchimento | `PP-S05` | **PP-T4** |
| **RP05** (Comprovação segura) | **AT-P05** (Protocolo e PDF) | Tela de confirmação com código localizador, orientações do dia e botão "Baixar PDF" | `PP-S06` | **PP-T5** |

<p class="caption">Tabela 4 — Matriz de convergência dos resultados para o protótipo de papel.</p>
<p class="source">Fonte: elaboração do autor (2026).</p>

---

## Rastreabilidade Completa entre Entregas

A Tabela 5 documenta a cadeia de rastreabilidade bidirecional que conecta os artefatos de Israel Soares de Paiva ao longo de todas as etapas do projeto de IHC.

| Etapa | Artefato de Origem / Destino | Papel na Cadeia de Rastreabilidade | Link de Acesso |
| :---: | --- | --- | :---: |
| **Etapa 2** | Entrevista e Observação | Levantamento empírico inicial dos hábitos de visitação e dores de acesso ao Senado | [entrevista-observacao.md](../../../entrega-2/individual/israel/entrevista-observacao.md) |
| **Etapa 2** | Persona — Marta Oliveira | Personagem de referência (47 anos, servidora pública, agendamento em grupo com acessibilidade) | [persona.md](../../../entrega-2/individual/israel/persona.md) |
| **Etapa 2** | Cenário de Interação | Narrativa do contexto de uso real que fundamentou o enredo do storyboard | [cenario.md](../../../entrega-2/individual/israel/cenario.md) |
| **Etapa 2** | Análise de Tarefas (HTA e CTT) | Modelagem hierárquica e formal da tarefa de agendamento de visitação (versão 2.0) | [analise-tarefas.md](../../../entrega-2/individual/israel/analise-tarefas.md) |
| **Etapa 2** | Aspectos Éticos | Princípios de autonomia, beneficência e privacidade que regem o TCLE das sessões | [etica.md](../../../entrega-2/etica.md) |
| **Etapa 3** | Metas de Usabilidade | Metas de eficácia (M0), prevenção de erros (M2), recuperação (M3) e satisfação (M6) | [metas-usabilidade.md](../../../entrega-3/metas-usabilidade.md) |
| **Etapa 3** | Guia de Estilo | Padrões tipográficos, componentes de formulário e paleta de cores para calendários | [guia-de-estilo.md](../../../entrega-3/guia-de-estilo.md) |
| **Etapa 3** | Princípios Gerais de Projeto | Correspondência com o mundo real, visibilidade do estado e projeto para erros | [principios-gerais.md](../../../entrega-3/principios-gerais.md) |
| **Etapa 4** | Hub Individual de Israel | Ponto focal da Etapa 4 com inventário completo dos planejamentos individuais | [israel.md](../../../entrega-4/individual/israel.md) |
| **Etapa 4** | Storyboard | Narrativa visual desenhada em 7 cenas retratando a jornada de Marta Oliveira | [storyboard.md](../../../entrega-4/individual/israel/storyboard.md) |
| **Etapa 4** | Planejamento da Avaliação do Storyboard | Protocolo DECIDE, roteiro com as 8 perguntas avaliativas e teste-piloto | [planejamento-avaliacao-storyboard.md](../../../entrega-4/individual/israel/planejamento-avaliacao-storyboard.md) |
| **Etapa 4** | Planejamento do Relato do Storyboard | Estrutura prevista para tabulação das respostas empíricas e severidade de falhas | [planejamento-relato-resultados-storyboard.md](../../../entrega-4/individual/israel/planejamento-relato-resultados-storyboard.md) |
| **Etapa 4** | Planejamento da Avaliação da HTA | Protocolo DECIDE para validação empírica da modelagem conceitual com usuários | [planejamento-avaliacao-analise-tarefas.md](../../../entrega-4/individual/israel/planejamento-avaliacao-analise-tarefas.md) |
| **Etapa 4** | Planejamento do Relato da HTA | Estrutura para reporte das divergências e refinamento dos modelos de tarefas | [planejamento-relato-resultados-analise-tarefas.md](../../../entrega-4/individual/israel/planejamento-relato-resultados-analise-tarefas.md) |
| **Etapa 4** | Conferência dos Planejamentos | Autoinspeção documental dos critérios pedagógicos da Apresentação 4 | [conferencia-planejamentos.md](../../../entrega-4/individual/israel/conferencia-planejamentos.md) |
| **Etapa 5** | Hub Individual de Israel (Etapa 5) | Visão integrada de todos os relatos e planejamentos de prototipagem em papel | [index.md](index.md) |
| **Etapa 5** | Relato da Avaliação do Storyboard | Resultados detalhados da sessão empírica (06m35s) e formulação de RP01–RP05 | [relato-storyboard.md](relato-storyboard.md) |
| **Etapa 5** | Relato da Avaliação da HTA/CTT | Resultados da inspeção do HTA (07m50s) e formulação de AT-P01–AT-P05 | [relato-analise-tarefas.md](relato-analise-tarefas.md) |
| **Etapa 5** | Planejamento da Avaliação do Papel | Inventário de 7 telas em papel (PP-S01–PP-S07) e 5 tarefas práticas (PP-T1–PP-T5) | [planejamento-avaliacao-prototipo-papel.md](planejamento-avaliacao-prototipo-papel.md) |
| **Etapa 5** | Planejamento do Relato do Papel | Especificação das fichas de teste e critérios de severidade para o teste em papel | [planejamento-relato-prototipo-papel.md](planejamento-relato-prototipo-papel.md) |
| **Etapa 6** | Relato do Protótipo de Papel | Avaliação empírica com o protótipo de papel e identificação de PAP-R01 a PAP-R06 | [relato-prototipo-papel.md](../../../entrega-6/individual/israel/relato-prototipo-papel.md) |
| **Etapa 6** | Planejamento de Alta Fidelidade | Teste de usabilidade lean (Steve Krug, 3-4 participantes, Thinking Aloud) | [planejamento-avaliacao-alta-fidelidade.md](../../../entrega-6/individual/israel/planejamento-avaliacao-alta-fidelidade.md) |
| **Etapa 6** | Planejamento do Relato de Alta Fidelidade | Fichas de teste para 3-4 usuários e matriz de triagem de problemas de Krug | [planejamento-relato-alta-fidelidade.md](../../../entrega-6/individual/israel/planejamento-relato-alta-fidelidade.md) |
| **Etapa 7** | Relato de Alta Fidelidade | Resultados consolidados das sessões de teste com o protótipo AF-1.0 | [entrega-7/index.md](../../../entrega-7/index.md) |

<p class="caption">Tabela 5 — Matriz de rastreabilidade bidirecional dos artefatos de Israel Soares de Paiva.</p>
<p class="source">Fonte: elaboração do autor (2026).</p>

---

## Agradecimentos

Este documento foi elaborado por Israel Soares de Paiva com a colaboração técnica da equipe do Grupo 06 e apoio de inteligência artificial na padronização textual e formatação Markdown. Revisor técnico: [Bruno Ferreira Dornelas](https://github.com/brunnf).

---

## Histórico de Versão

A Tabela 6 documenta a evolução deste artefato consolidado.

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `1.0` | 03/11/2026 | Criação do relato consolidado da Etapa 5: síntese dos achados do Storyboard e da Análise de Tarefas, convergência para o protótipo de papel e matriz de rastreabilidade completa | [Israel Soares de Paiva](https://github.com/IsraelSoares-25) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |

<p class="caption">Tabela 6 — Histórico de versão.</p>
<p class="source">Fonte: elaboração do autor (2026).</p>

---

## Referências Bibliográficas

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010.

[2] KRUG, Steve. *Não me faça pensar: uma abordagem de bom senso à usabilidade na web*. 3. ed. Rio de Janeiro: Alta Books, 2014.

[3] KRUG, Steve. *Rocket Surgery Made Easy: The Do-It-Yourself Guide to Finding and Fixing Usability Problems*. Berkeley: New Riders, 2010.

[4] SALES, André Barros de. *Plano de Ensino FIHC 022026 — Turma 01*, v1. FCTE/UnB, 2026. Cronograma das Etapas 5–7.

[5] SNYDER, Carolyn. *Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces*. San Francisco: Morgan Kaufmann, 2003.
