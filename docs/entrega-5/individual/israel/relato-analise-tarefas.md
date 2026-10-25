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

A Tabela 3 reúne o roteiro de perguntas aplicado à participante — dividido em momento prévio (ANTES), avaliação central da decomposição do HTA e consolidação pós-apresentação (DEPOIS) — acompanhado da síntese das respostas obtidas.

| Bloco | ID | Pergunta do entrevistador | Síntese da resposta da participante | Localizador no vídeo |
| :---: | :---: | --- | --- | :---: |
| **ANTES** | **ANT-01** | Conte como você faria para agendar uma visita a um lugar como o Senado Federal, do início ao fim. | *"Eu entraria no site pelo computador, procuraria a opção de visitação, veria quais dias e horários têm vaga aberta, preencheria meus dados e os dados de quem vai comigo e esperaria receber um comprovante por e-mail para levar no dia."* | `Pendente` |
| **ANTES** | **ANT-02** | O que você precisaria saber ou ter em mãos antes de agendar? | *"Precisaria saber a data em que o grupo pode ir, o documento de identificação (CPF) meu e dos acompanhantes, e principalmente as regras de roupa permitida e horários de entrada para não ter problemas na portaria."* | `Pendente` |
| **AVALIAÇÃO HTA** | **HTA-01** | As tarefas e subtarefas do modelo correspondem ao que o cidadão realmente faz para agendar uma visita? | *"Sim, correspondem perfeitamente. A divisão entre ver regras, escolher o tipo de visita, selecionar dia/horário no calendário, colocar os dados, revisar e pegar o comprovante é exatamente o percurso real."* | `Pendente` |
| **AVALIAÇÃO HTA** | **HTA-02** | A ordem das tarefas e as condições descritas nos planos são realistas? | *"A ordem é muito realista. Primeiro você precisa saber se é individual ou grupo para que o sistema mostre as vagas certas. E ter a revisão antes de confirmar evita enviar dados errados."* | `Pendente` |
| **AVALIAÇÃO HTA** | **HTA-03** | Existem tarefas importantes que não aparecem no modelo? | *"Acho que o modelo está bem completo. Sugiro apenas reforçar a checagem das regras de vestimenta antes mesmo de escolher a data, para o visitante já estar ciente logo de início."* | `Pendente` |
| **AVALIAÇÃO HTA** | **HTA-04** | As situações de erro e de exceção foram consideradas? | *"Sim, vi que o modelo prevê o que fazer quando não tem vaga no dia (voltar e escolher outra data) e também prevê corrigir dados na revisão e a opção de alterar ou cancelar depois."* | `Pendente` |
| **AVALIAÇÃO HTA** | **HTA-05** | O nível de detalhamento do HTA é adequado e compreensível? | *"Está no nível ideal. Não fica detalhando clique por clique que cansa, mas mostra com clareza cada decisão importante que a gente precisa tomar."* | `Pendente` |
| **DEPOIS** | **DEP-01** | Você realiza essa tarefa dessa forma? | *"Sim, é exatamente a forma como eu realizaria se fosse agendar uma visita com a minha família ou com colegas de trabalho."* | `Pendente` |
| **DEPOIS** | **DEP-02** | Existe alguma etapa faltando, desnecessária ou fora de ordem? | *"Não achei nenhuma desnecessária. Todas as etapas têm uma razão clara de existir e estão na sequência natural."* | `Pendente` |
| **DEPOIS** | **DEP-03** | O que você faria se a data ou o horário que deseja não estivessem disponíveis? | *"Eu voltaria para o calendário para olhar outro dia que tivesse horário livre, de preferência em outro fim de semana ou num horário próximo que atendesse a todos."* | `Pendente` |
| **DEPOIS** | **DEP-04** | O que você faria se precisasse alterar ou cancelar o agendamento? | *"Eu procuraria no site uma opção de 'consultar/alterar agendamento' e colocaria o código que recebi no comprovante ou meu CPF para mudar a data ou cancelar a vaga."* | `Pendente` |
| **DEPOIS** | **DEP-05** | Algum termo ou etapa do modelo ficou difícil de entender? | *"Não, todos os termos usados na explicação estão em linguagem simples e clara, sem burocracia ou jargões do Congresso."* | `Pendente` |

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

* **Vídeo da sessão:** o link para a gravação audiovisual (categoria não listada) será adicionado nesta seção após a revisão final do arquivo [Link do Vídeo](https://www.youtube.com/watch?v=zd0pS4sMXu4);
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

