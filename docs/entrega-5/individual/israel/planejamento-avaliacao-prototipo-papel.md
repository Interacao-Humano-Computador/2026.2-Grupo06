<span class="owner">Responsável: Israel Soares de Paiva — Agendamento de visita ao Senado · Autor do item: Israel Soares de Paiva</span>

# Planejamento da avaliação do protótipo de papel — Agendamento de visita ao Senado

## Tabela de contribuição

A Tabela 1 registra as contribuições neste planejamento individual.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Israel Soares de Paiva](https://github.com/IsraelSoares-25) | Elaboração do planejamento da avaliação pelo framework DECIDE e especificação das tarefas | [Conteúdo](#contextualizacao) |
| Google Gemini | Apoio na estruturação do protocolo, redação e formatação Markdown | [Agradecimentos](#agradecimentos) |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Revisão técnica de consistência e alinhamento com a Etapa 5 | [Introdução](#introducao) |

<p class="caption">Tabela 1 — Contribuições no planejamento da avaliação.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Introdução

Este documento planeja a avaliação formativa de usabilidade da proposta de interface em **protótipo de papel** para a funcionalidade de **Agendamento de visita ao Senado Federal**, no escopo do projeto da disciplina de Interação Humano-Computador. A avaliação analisa como a pessoa usuária interage com as telas e componentes desenhados em folhas de papel, tendo suas ações e feedbacks operados manualmente pelo avaliador (simulador do sistema).

O planejamento integra a **Etapa 5, com entrega em 25/10/2026**. A execução prática da avaliação, os testes com os participantes e a publicação do relato dos resultados correspondem à **Etapa 6, prevista para 03/11/2026**, conforme o [cronograma do projeto](../../../entrega-1/cronograma.md). O planejamento detalhado de como os dados serão compilados e apresentados consta no [Planejamento do relato dos resultados](planejamento-relato-prototipo-papel.md).

## Contextualização

O reprojeto parte das necessidades e barreiras identificadas na [persona Marta Oliveira](../../../entrega-2/individual/israel/persona.md), no [cenário de agendamento de visita](../../../entrega-2/individual/israel/cenario.md), na modelagem da [HTA e CTT](../../../entrega-2/individual/israel/analise-tarefas.md) e no [Storyboard do Agendamento](../../../entrega-4/individual/israel/planejamento-avaliacao-storyboard.md). 

A avaliação do protótipo de papel visa simular o fluxo reprojetado antes de qualquer linha de código em alta fidelidade. As telas e elementos móveis serão propostas de design para sanar gargalos históricos do portal, tais como:
1. Encontrabilidade deficiente do serviço de visitação a partir da página principal;
2. Falta de visibilidade prévia das regras de trajes, horários e documentos exigidos na portaria do Congresso Nacional;
3. Calendário opaco sem indicação imediata de vagas disponíveis por data e horário;
4. Falta de confirmação imediata e geração de comprovante completo para download/impressão e envio por e-mail.

Todas as interações ocorrerão em ambiente controlado com dados fictícios. Nenhuma reserva real ou envio ao banco de dados do Senado Federal será executado.

## Item de conteúdo da disciplina

**Autor do item:** Israel Soares de Paiva.

A prototipação em papel é um método clássico e eficaz de avaliação formativa de IHC, permitindo inspecionar e refinar o design de interface a baixo custo e em ciclos ágeis (BARBOSA; SILVA, 2010, p. 358–362; NIELSEN, 2003; SNYDER, 2003). O participante manipula representações físicas de telas, menus e cartões móveis desenhados à mão ou impressos, enquanto um dos avaliadores atua como o "computador", trocando as folhas e exibindo mensagens em resposta aos toques e escolhas do usuário.

A organização deste planejamento adota a estrutura metodológica do framework **DECIDE** (BARBOSA; SILVA, 2010, p. 312–313):
* **D**eterminar os objetivos da avaliação;
* **E**xplorar as perguntas a serem respondidas;
* **C**hoose (escolher) os métodos de avaliação;
* **I**dentificar e administrar as questões práticas;
* **D**ecidir como lidar com as questões éticas;
* **E**valuate (avaliar), interpretar e apresentar os dados.

## D — Determinar os objetivos

**Objetivo geral:** avaliar se a proposta de interface em papel para o agendamento de visitação institucional permite ao cidadão localizar o serviço, escolher data/horário com clareza de vagas, compreender as exigências de acesso, preencher dados com segurança e receber o comprovante de agendamento.

**Objetivos específicos:**
* **PP-O1 (Encontrabilidade e acesso):** verificar se o cidadão localiza com facilidade a entrada para o agendamento de visitas na página inicial do portal.
* **PP-O2 (Transparência de vagas no calendário):** avaliar se a representação visual do calendário comunica prontamente os dias e horários com vagas disponíveis, prevenindo tentativas frustradas.
* **PP-O3 (Regras de visitação e acessibilidade):** verificar se o usuário nota e assimila com clareza as orientações sobre vestimenta permitida, documentos exigidos e se consegue solicitar suporte de acessibilidade.
* **PP-O4 (Preenchimento, revisão e recuperação):** examinar a facilidade de preenchimento dos dados do responsável e acompanhantes, bem como a eficiência da tela de conferência para detectar e corrigir erros antes da submissão.
* **PP-O5 (Confirmação e comprovação):** analisar se a tela final de sucesso transmite segurança, exibindo o código localizador, instruções claras para o dia da visita e opção de comprovante em PDF.

## E — Explorar as perguntas

A Tabela 2 operacionaliza os objetivos em perguntas investigativas e especifica as evidências a serem observadas durante as sessões.

| ID | Pergunta de avaliação | Tarefa / HTA | Evidência necessária |
| --- | --- | --- | --- |
| PP-Q1 | O participante localiza o serviço de agendamento de visita a partir da home sem hesitações? | PP-T1; HTA 1.1–1.2 | Caminho percorrido, cliques espontâneos e dúvidas manifestadas |
| PP-Q2 | As informações sobre regras de vestimenta e identificação são compreendidas antes do preenchimento? | PP-T1; HTA 1.3 | Leitura dos avisos, comentários em voz alta e perguntas feitas ao avaliador |
| PP-Q3 | O calendário em papel comunica de forma evidente os dias com vagas abertas e os dias esgotados? | PP-T2; HTA 3.1–3.3 | Interpretação da legenda de cores/símbolos, seleção da data e escolha do horário |
| PP-Q4 | O usuário consegue preencher os dados dos visitantes e registrar necessidades de acessibilidade com facilidade? | PP-T3; HTA 4.1–4.3 | Preenchimento dos campos, localização do checklist de acessibilidade e ausência de bloqueios |
| PP-Q5 | A tela de revisão permite conferir os dados e corrigir equívocos antes do envio final? | PP-T4; HTA 5.1–5.3 | Ação diante de um dado incorreto provocado, uso do botão de edição e confirmação |
| PP-Q6 | A confirmação e o comprovante geram segurança de que o agendamento foi efetivado com sucesso? | PP-T5; HTA 6.1–6.3 | Reação à mensagem de sucesso, anotação do código localizador e busca pelo download/e-mail |

<p class="caption">Tabela 2 — Objetivos, perguntas e evidências da avaliação.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## C — Escolher os métodos

O método selecionado é a **avaliação formativa por prototipagem em papel com execução de tarefas orientadas por cenários**, combinada com a técnica do **pensar em voz alta (*think-aloud*)** e **entrevista pós-teste** (BARBOSA; SILVA, 2010, p. 358–362).

Durante o teste:
1. O usuário recebe tarefas contextualizadas e simula os toques apontando o dedo ou uma caneta sobre as folhas de papel;
2. O operador troca as folhas, insere cartões móveis (ex.: caixas de diálogo, mensagens de erro, opções de horário) simulando o comportamento interativo do sistema;
3. O observador registra as hesitações, pausas, comentários espontâneos e erros cometidos pelo participante.

**Modalidade proposta:** **remota síncrona** via Google Meet, utilizando câmera superior direcionada para as folhas do protótipo e áudio bidirecional (com possibilidade de realização presencial na FGA/UnB, caso acordado com os participantes). Na modalidade remota, o participante indica o controle verbalmente pelo rótulo/posição ou aciona o cursor, e o operador manipula as folhas no plano da câmera, com gravação audiovisual autorizada.

## I — Identificar e administrar questões práticas

### Recrutamento, participantes e papéis

Prevê-se o recrutamento de **1 participante principal** com perfil alinhado à persona Marta Oliveira (cidadã/servidora externa com familiaridade cotidiana com internet, mas baixa familiaridade com vocabulário legislativo), além de **1 participante distinto para a sessão piloto**. O recrutamento é voluntário por conveniência, sem exigência de vinculação partidária ou política.

A Tabela 3 estabelece a divisão de papéis da equipe na condução da avaliação.

| Papel | Responsabilidade | Responsável |
| --- | --- | --- |
| Operador do papel (simulador) | Apresentar os enunciados, simular manualmente as respostas do sistema nas folhas e coordenar a entrevista pós-teste | [Israel Soares de Paiva](https://github.com/IsraelSoares-25) |
| Observador / Anotador | Registrar ações, percursos, tempos aproximados, erros e intervenções em ficha padronizada | Integrante da equipe a confirmar |
| Participante principal | Executar as tarefas interagindo com o protótipo de papel | PAP-VIS01 (cidadão recrutado) |
| Participante do piloto | Testar a fluidez do procedimento, legibilidade das folhas e tempo de simulação | PP-PILOTO01 (participante prévio) |
| Revisor do artefato | Conferir a conformidade metodológica e a rastreabilidade com os planos anteriores | [Bruno Ferreira Dornelas](https://github.com/brunnf) |

<p class="caption">Tabela 3 — Papéis definidos para a avaliação do protótipo de papel.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

### Materiais e inventário de telas a preparar

A Tabela 4 apresenta o inventário das folhas e cartões móveis que deverão ser desenhados e recortados antes da sessão piloto.

| ID | Folha / Cartão a preparar | Elementos representados | Relação com a HTA |
| --- | --- | --- | --- |
| PP-S01 | Página inicial do Portal do Senado (reprojetada) | Cabeçalho, barra de busca com sugestões e card em destaque "Visite o Senado / Agendar Visita" | HTA 1.1 e 1.2 |
| PP-S02 | Página do Programa de Visitação | Regras resumidas com ícones (vestimenta, identificação, regras de entrada) e botão "Iniciar Agendamento" | HTA 1.3 |
| PP-S03 | Tela de modalidade e quantidade | Opções "Individual/Família" e "Grupo", campo de quantidade de pessoas e botão "Avançar" | HTA 2.1 e 2.2 |
| PP-S04 | Calendário interativo de datas e horários | Visão mensal com dias destacados em verde (com vagas), vermelho (lotado) e cinza; cartões móveis de horários | HTA 3.1, 3.2 e 3.3 |
| PP-S05 | Formulário de dados dos visitantes | Campos de nome, CPF, e-mail e telefone do responsável; campos de acompanhantes; seção de acessibilidade | HTA 4.1, 4.2 e 4.3 |
| PP-S06 | Tela de revisão de dados | Card de resumo consolidado com botão "Editar" por bloco e botão destacado "Confirmar Agendamento" | HTA 5.1, 5.2 e 5.3 |
| PP-S07 | Tela de confirmação e comprovante | Mensagem de sucesso, código localizador em destaque, botão "Baixar Comprovante (PDF)" e aviso de envio por e-mail | HTA 6.1, 6.2 e 6.3 |
| PP-X01 | Cartão móvel: Alerta de data lotada | "Infelizmente as vagas para esta data estão esgotadas. Selecione outro dia no calendário." | Tratamento de exceção HTA 3.1 |
| PP-X02 | Cartão móvel: Alerta de pendência em campo | "Por favor, informe ao menos o nome completo do responsável." | Validação HTA 4.1 |

<p class="caption">Tabela 4 — Inventário de telas e cartões do protótipo em papel.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

### Roteiro das tarefas da pessoa usuária

As tarefas a seguir serão apresentadas sequencialmente ao participante, sem induzir a resposta correta:

* **PP-T1 (Localização do serviço e regras):** *"Você combinou com seus colegas e familiares de fazer uma visita guiada ao Senado Federal. Entre no Portal do Senado, encontre onde se agenda a visita e verifique se há regras específicas de trajes e documentos para o dia."*
* **PP-T2 (Escolha de modalidade, data e horário):** *"Agora que você viu as regras, inicie o agendamento para 3 pessoas da sua família, consultando o calendário e escolhendo um dia e horário matutino que possua vagas abertas."*
* **PP-T3 (Preenchimento de dados e acessibilidade):** *"Preencha os dados do responsável pelo grupo (utilize os dados fictícios fornecidos na ficha) e indique que um dos acompanhantes necessita de cadeira de rodas / suporte de mobilidade."*
* **PP-T4 (Revisão e correção de equívoco):** *"Na tela de revisão, confira os dados. Imagine que você percebeu que digitou o telefone com um dígito errado. Corrija o dado e finalize o agendamento."*
* **PP-T5 (Confirmação e comprovante):** *"Verifique o resultado final do agendamento, anote o código localizador e descubra como você levará o comprovante para a entrada no dia da visita."*

### Teste-piloto e separação dos dados

O teste-piloto será realizado antes da sessão oficial com um participante de perfil análogo. O objetivo do piloto é:
1. Validar a clareza e a neutralidade dos enunciados das tarefas;
2. Ensaiar a velocidade de manipulação das folhas e cartões pelo operador;
3. Verificar a legibilidade das telas sob a iluminação e câmera do Google Meet;
4. Cronometrar a duração total prevista (25 a 35 minutos).

> [!IMPORTANT]
> **Separação estrita dos dados do piloto:** os dados e eventuais erros observados durante a execução do piloto **não** serão computados nos resultados quantitativos ou qualitativos da avaliação principal. Seus achados servirão exclusivamente para corrigir o material e o procedimento antes da gravação oficial da Etapa 6.

### Cronograma e orçamento

A Tabela 5 detalha o cronograma proposto para a execução na Etapa 6.

| Atividade | Data prevista | Horário |
| --- | --- | --- |
| Desenho e recorte das folhas e cartões do protótipo | 28/10/2026 | 14h00 – 18h00 |
| Execução da sessão piloto com PP-PILOTO01 | 29/10/2026 | 19h00 – 19h40 |
| Ajuste das folhas e materiais a partir do piloto | 30/10/2026 | 10h00 – 12h00 |
| Sessão de avaliação oficial com PAP-VIS01 | 30/10/2026 | 19h30 – 20h15 |
| Tabulação das fichas e compilação das evidências | 31/10/2026 | 14h00 – 18h00 |
| Redação final do relato dos resultados (Etapa 6) | 01/11/2026 | 10h00 – 16h00 |
| Entrega da Etapa 6 no repositório | 03/11/2026 | Até 23h59 |

<p class="caption">Tabela 5 — Cronograma previsto para a execução da avaliação.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

**Orçamento:** recursos materiais próprios dos integrantes (papel sulfite, canetas hidrográficas, tesoura, suporte de câmera e computador). Custo financeiro adicional estimado: R$ 0,00.

## D — Decidir como lidar com as questões éticas

A avaliação segue rigorosamente as diretrizes éticas estabelecidas no documento de [Aspectos Éticos do projeto](../../../entrega-2/etica.md):
* **Termo de Consentimento Livre e Esclarecido (TCLE):** lido e assinado eletronicamente antes do início da sessão, informando os objetivos acadêmicos, a garantia de que o sistema é o objeto de teste (e não a capacidade do participante) e a liberdade de interromper a sessão a qualquer instante;
* **Preservação de identidade:** o participante é codificado como PAP-VIS01, mantendo dados pessoais e contatos desvinculados dos registros públicos;
* **Uso da imagem e voz:** a gravação audiovisual só ocorre mediante autorização expressa no termo e restringe-se aos integrantes da disciplina;
* **Dados fictícios:** nenhum dado pessoal sensível real (como senhas, dados bancários ou números de documentos verídicos) será solicitado.

## E — Avaliar, interpretar e apresentar os dados

A compilação dos dados registrará:
1. **Desempenho operacional:** se as tarefas foram concluídas com autonomia, com intervenção moderada ou se não foram concluídas;
2. **Tempo por tarefa:** estimativa aproximada de tempo para identificar gargalos de leitura ou incompreensão de telas;
3. **Mapeamento de problemas de usabilidade:** descrição do problema, tela onde ocorreu, severidade (alta, média, baixa) e fator de usabilidade prejudicado (facilidade de aprendizado, eficiência, prevenção de erros ou satisfação);
4. **Respostas às perguntas investigativas:** confronto direto entre as falas/ações observadas e as perguntas PP-Q1–PP-Q6.

Os resultados consolidados alimentarão o [Relato dos resultados do protótipo de papel](planejamento-relato-prototipo-papel.md) na Etapa 6, fornecendo subsídios diretos para a construção do protótipo de alta fidelidade na etapa seguinte.

## Agradecimentos

Esta página contou com o apoio do Google Gemini na formatação Markdown, estruturação do protocolo DECIDE e organização das tabelas. A definição dos fluxos e a responsabilidade pelo planejamento são do autor.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `1.0` | 23/10/2026 | Elaboração inicial do planejamento da avaliação do protótipo de papel para o Agendamento de Visita | [Israel Soares de Paiva](https://github.com/IsraelSoares-25) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010.

[2] NIELSEN, Jakob. *Paper Prototyping: Getting User Data Before You Code*. Nielsen Norman Group, 2003. Disponível em: <https://www.nngroup.com/articles/paper-prototyping/>.

[3] SNYDER, Carolyn. *Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces*. San Francisco: Morgan Kaufmann, 2003.

