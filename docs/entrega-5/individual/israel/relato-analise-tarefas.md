<span class="owner">Responsável: Israel Soares de Paiva — Agendamento de visita ao Senado · Autor do item: Israel Soares de Paiva</span>

# Relato da avaliação da análise de tarefas — Marta Oliveira

## Tabela de contribuição

A Tabela 1 identifica as contribuições neste artefato.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Israel Soares de Paiva](https://github.com/IsraelSoares-25) | Preparação da discussão dos modelos, análise das operações e conferência técnica | [Conteúdo](#objetivos-e-escopo) |
| Google Gemini | Apoio na estruturação das tabelas e formatação Markdown | [Agradecimentos](#agradecimentos) |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Revisão técnica da notação de HTA/CTT e conformidade com a Etapa 5 | [Introdução](#introducao) |

<p class="caption">Tabela 1 — Contribuições neste artefato.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Introdução

Este artefato apresenta o relato da avaliação da Análise de Tarefas para a funcionalidade de **Agendamento de visita ao Senado Federal**, em conformidade com o [Planejamento da avaliação](../../../entrega-4/individual/israel/planejamento-avaliacao-analise-tarefas.md) e o [Planejamento do relato dos resultados](../../../entrega-4/individual/israel/planejamento-relato-resultados-analise-tarefas.md). A avaliação toma como base os modelos estruturados na [Análise de Tarefas (HTA e CTT versão 2.0)](../../../entrega-2/individual/israel/analise-tarefas.md), protagonizados pela persona [Marta Oliveira](../../../entrega-2/individual/israel/persona.md).

**Situação documental:** relato organizado com a discussão dos modelos em linguagem acessível com a participante, conferência técnica da equipe sobre a notação (HTA e CTT) e propostas de refinamento para o [Protótipo de papel](planejamento-avaliacao-prototipo-papel.md).

## Objetivos e escopo

A avaliação objetivou:
1. Verificar se a decomposição hierárquica do objetivo `0. Agendar visita ao Senado Federal` em seus 7 ramos e 17 sub-objetivos reflete a prática real do cidadão;
2. Avaliar se os planos formais (sequência `>`, seleção `/`, paralelismo `+` e iteração `*`) espelham as decisões e restrições temporais do usuário;
3. Identificar operações ausentes, termos confusos ou pontos de atrito cognitivo no fluxo;
4. Realizar a conferência técnica da conformidade com a literatura de IHC (BARBOSA; SILVA, 2010; PATERNÒ, 2000; ANNETT; DUNCAN, 1967).

A atividade investigou a modelagem conceitual do trabalho do usuário, servindo como alicerce para as decisões de design da interface física em papel.

## Método, pessoas e material

A Tabela 2 descreve os aspectos metodológicos e metadados da sessão de avaliação. A avaliação combinou o relato espontâneo inicial da participante com uma inspeção guiada (*walkthrough*) dos blocos da HTA e da CTT traduzidos para linguagem natural, preservando a conferência técnica sob responsabilidade da equipe (BARBOSA; SILVA, 2010, p. 191–195).

| Campo | Registro |
| --- | --- |
| Procedimento | Relato espontâneo prévio da tarefa seguido de *walkthrough* dos blocos de operações e conferência técnica |
| Blocos em linguagem comum | Acessar e ler regras → Definir tipo e quantidade → Escolher data/horário → Preencher dados e acessibilidade → Revisar e confirmar → Obter comprovante → Alterar/cancelar |
| Moderador | [Israel Soares de Paiva](https://github.com/IsraelSoares-25) |
| Código da sessão | `AT-PART01` |
| Pessoa participante | Uma cidadã alinhada ao perfil de Marta Oliveira (com demanda de agendamento presencial cívico) |
| Observador | Integrante do Grupo 06 |
| Revisor | [Bruno Ferreira Dornelas](https://github.com/brunnf) |
| Modalidade e ambiente | Remota via Google Meet com gravação de tela e áudio autorizados |
| Materiais de apoio | Diagrama HTA (`flowchart LR`), tabela de operações com input/feedback, especificação CTT e roteiro |
| Cuidados éticos | TCLE lido e assinado previamente; dados pessoais preservados sob código |
| Sessão piloto | Realizada com `PP-PILOTO01` para calibrar o tempo de explicação dos blocos |

<p class="caption">Tabela 2 — Método e metadados da avaliação da análise de tarefas.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Discussão dos modelos em linguagem comum

A Tabela 3 reúne as perguntas apresentadas à participante (AT-Q1 a AT-Q7) e a síntese das respostas obtidas sobre o fluxo das tarefas.

| ID / Operação de referência | Pergunta do entrevistador | Síntese da resposta da participante | Localizador no vídeo |
| --- | --- | --- | :---: |
| **AT-Q1** / Objetivo 0 e Tarefa 6 | O que você pretende alcançar ao realizar esse agendamento e como tem certeza de que a tarefa terminou? | *"Quero garantir vagas para o meu grupo no dia em que todos podem ir. Para mim, a tarefa termina quando vejo o comprovante com o código na tela e recebo o e-mail confirmando o horário. Sem o comprovante, não considero agendado."* | `Pendente` |
| **AT-Q2** / Tarefas 1 a 6 | Olhando essas etapas organizadas, você acha que falta alguma coisa importante ou que alguma é desnecessária? | *"A divisão faz todo sentido. O que precisa ficar muito claro logo no início (etapa 1) são as regras de trajes e os documentos exigidos. Não adianta agendar tudo e na hora descobrir que alguém não pode entrar por causa da roupa."* | `Pendente` |
| **AT-Q3** / Planos 1, 2 e 3 | A ordem das ações parece natural para você? O que precisa vir antes de quê? | *"Sim. Primeiro você vê as regras, escolhe se é individual ou grupo, e depois escolhe o dia no calendário. A ordem está correta porque a quantidade de vagas disponíveis depende de quantas pessoas vão comigo."* | `Pendente` |
| **AT-Q4** / Tarefa 4 (4.1–4.3) | O que você precisa ter em mãos para preencher os dados? Como avalia o pedido de acessibilidade? | *"Preciso do meu CPF, telefone e dos nomes dos acompanhantes. Achei excelente ter a opção de acessibilidade separada, porque se alguém do grupo for idoso ou usar cadeira de rodas, o Senado precisa preparar o atendimento antes."* | `Pendente` |
| **AT-Q5** / Tarefa 5 (5.1–5.3) | O que acontece se você perceber que digitou algum dado errado na revisão? | *"Eu espero clicar em 'corrigir' naquele bloco e ajustar só o dado errado, sem que o site apague todo o restante do formulário. A revisão serve exatamente para isso antes do clique final."* | `Pendente` |
| **AT-Q6** / Exceções e Tarefa 7 | E se você não puder comparecer no dia marcado, como esperaria resolver? | *"Eu esperaria entrar no site com meu CPF e código de agendamento para cancelar ou trocar a data com facilidade, liberando as vagas para outros cidadãos."* | `Pendente` |
| **AT-Q7** / Vocabulário geral | Algum termo ou nome usado nas etapas pareceu difícil de entender? | *"Não, os nomes estão bem diretos. O importante é não usar palavras difíceis do Congresso, como 'tramitação' ou 'sessão deliberativa', e sim termos simples como 'visitação', 'agendamento' e 'comprovante'."* | `Pendente` |

<p class="caption">Tabela 3 — Discussão dos modelos de tarefas com a participante.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Conferência técnica dos modelos (CT01–CT06)

A Tabela 4 documenta a conferência técnica interna realizada pela equipe de avaliadores para atestar a conformidade com as normas metodológicas de IHC (BARBOSA; SILVA, 2010; PATERNÒ, 2000).

| Critério | Evidência na modelagem (v2.0) | Avaliação técnica da equipe |
| --- | --- | --- |
| **CT01 — Hierarquia e planos HTA** | Objetivo raiz 0, 7 tarefas principais, 17 subtarefas e planos explícitos em cada nível | **Conforme.** A árvore cobre o fluxo completo e os planos estabelecem sequências (`>`), condicionais e retornos em caso de lotação. |
| **CT02 — Input, operação e feedback** | Tabela 4 da HTA especificando *input*, ação e *feedback* perceptível por linha | **Conforme.** Cada operação possui gatilho disparador e retorno observável pelo usuário ou emitido pelo sistema. |
| **CT03 — Tipos de tarefas na CTT** | Classificação em tarefas de usuário, interação, aplicação (sistema) e abstratas | **Conforme.** Tabela 6 da CTT distingue claramente tarefas cognitivas da usuária e processamentos internos do servidor. |
| **CT04 — Operadores temporais da CTT** | Uso dos operadores `>>`, `[]>>`, `[]` e `[>` na notação textual e diagrama | **Conforme.** Relações de passagem de informação (`[]>>`) e interrupção sob demanda (`[>`) modeladas formalmente. |
| **CT05 — Coerência com Storyboard e Cenário** | Mapeamento direto entre as 7 cenas do Storyboard e os ramos 1 a 6 da HTA | **Conforme.** Rastreabilidade total com a narrativa de Marta Oliveira e os quadros visuais. |
| **CT06 — Tratamento de exceções** | Ramo 7 dedicado a alteração/cancelamento e retornos no plano 3 em caso de vagas lotadas | **Conforme.** O modelo não trata apenas o percurso ideal (*happy path*), prevendo exceções reais de uso. |

<p class="caption">Tabela 4 — Conferência técnica dos modelos HTA e CTT.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026), com base em Barbosa e Silva (2010).</p>

## Síntese e encaminhamentos para o protótipo de papel

A Tabela 5 consolida as diretrizes técnicas derivadas da avaliação dos modelos para implementação no [Protótipo de papel](planejamento-avaliacao-prototipo-papel.md).

| ID | Base na HTA / CTT | Proposta de design para o papel | Condição observável de sucesso | Prioridade |
| :---: | --- | --- | --- | :---: |
| **AT-P01** | HTA 1.3 / CTT ConsultarRegras | Destacar regras de trajes e documentação em card visual antes da seleção de calendário | Usuário lê e comenta sobre as regras antes de avançar | Alta |
| **AT-P02** | HTA 3.1–3.3 / CTT EscolherDataEHorario | Calendário interativo com legenda de disponibilidade evidente por cores | Usuário identifica imediatamente dias com vagas sem precisar clicar em dias esgotados | Alta |
| **AT-P03** | HTA 4.3 / CTT InformarAcessibilidade | Seção explícita de acessibilidade com opções de mobilidade reduzida e Libras | Usuário localiza e marca suporte especializado de forma intuitiva | Média |
| **AT-P04** | HTA 5.1–5.3 / CTT RevisarEConfirmar | Tela de resumo com opção de edição por módulo sem perda de estado | Usuário corrige dado pontual com retorno seguro para a tela de revisão | Alta |
| **AT-P05** | HTA 6.1–6.3 / CTT ObterConfirmacao | Emissão imediata de código localizador e botão destacado de download do comprovante em PDF | Usuário declara verbalmente que a tarefa foi finalizada com sucesso ao visualizar o código | Alta |

<p class="caption">Tabela 5 — Propostas de reprojeto derivadas da análise de tarefas.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Gravação e registros complementares

* **Vídeo da sessão:** o link para a gravação audiovisual (categoria não listada) será adicionado nesta seção após a revisão final do arquivo;
* **Registros de notas:** as anotações do observador e transcrições literais permanecem arquivadas para fins acadêmicos e auditoria da disciplina.

## Agradecimentos

Esta página contou com o apoio do Google Gemini na formatação Markdown, na estruturação das matrizes de conformidade e na redação preliminar do conteúdo. A responsabilidade pelas análises e propostas de reprojeto é do autor.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `1.0` | 23/10/2026 | Elaboração do relato da avaliação da análise de tarefas para Agendamento de Visita | [Israel Soares de Paiva](https://github.com/IsraelSoares-25) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |

## Referências

[1] ANNETT, John; DUNCAN, Keith D. *Task analysis and training design*. Occupational Psychology, v. 41, p. 211-221, 1967.

[2] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010.

[3] PATERNÒ, Fabio. *Model-based design and evaluation of interactive applications*. London: Springer, 2000.

