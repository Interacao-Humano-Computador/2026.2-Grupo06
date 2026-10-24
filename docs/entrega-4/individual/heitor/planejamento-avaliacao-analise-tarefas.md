<span class="owner">Responsável: Heitor Pinheiro Gonçalves das Chagas — Participação em Evento Interativo (e-Cidadania) · Autor do item: Heitor Pinheiro Gonçalves das Chagas</span>

# Planejamento da avaliação da análise de tarefas

## Tabela de contribuição

A Tabela 1 registra as atividades e os responsáveis neste artefato.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | Planejamento da avaliação pelo framework DECIDE, modelo e diagrama da HTA | [Planejamento da avaliação](#d-determinar-os-objetivos) |
| [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | Revisão técnica da notação e conformidade do planejamento | [Histórico de versão](#historico-de-versao) |
| Google Gemini e Claude (Anthropic) | Apoio na estruturação do texto, diagramação de tabelas e vetores SVG | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuição no planejamento da avaliação da análise de tarefas.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Introdução

Este artefato apresenta o planejamento da avaliação formativa da **Análise Hierárquica de Tarefas (HTA)** desenvolvida para a tarefa de **enviar pergunta técnica direcionada a um orador em audiência pública interativa ao vivo sobre a regulamentação do PL 1215/2025** no módulo **Eventos Interativos** do **e-Cidadania** (Senado Federal), com a persona **Letícia Oliveira** (sintetizada a partir da coleta empírica da Etapa 2).

Nesta Etapa 4, o foco recai exclusivamente sobre o **planejamento** da avaliação do modelo conceitual: não há resultados coletados, falas de usuários ou validações empíricas simuladas. O planejamento organiza o método de investigação por validação de modelo com entrevista semiestruturada, o cronograma, o teste piloto, as salvaguardas éticas e os instrumentos necessários. A execução ocorrerá em 24/10/2026 e os resultados consolidados serão relatados na Etapa 5 (entrega em 25/10/2026), conforme especificado no [planejamento do relato dos resultados da HTA](planejamento-relato-analise-tarefas.md).

## Contextualização

O objeto avaliado é a análise de tarefas de [Letícia Oliveira](../../../entrega-2/individual/heitor/analise-tarefas.md), complementada pelo [perfil de usuário](../../../entrega-2/individual/heitor/persona.md) e pelo [cenário de interação](../../../entrega-2/individual/heitor/cenario.md) elaborados na Etapa 2.

A tarefa foi refatorada para a participação cidadã em **Eventos Interativos**, modalidade síncrona do e-Cidadania que viabiliza o envio de perguntas e posicionamentos técnicos a senadores e palestrantes durante audiências públicas. Na audiência da Comissão de Agricultura e Reforma Agrária (CRA) que debate a regulamentação do **PL 1215/2025** (aquisição de alimentos e crédito emergencial para a agricultura familiar), a participante precisa submeter um questionamento técnico direcionado ao relator da matéria.

Na inspeção técnica do portal atual (verificada em 24/10/2026 em `senado.leg.br/ecidadania/principalaudiencia`), constatou-se que o sistema oferece apenas uma caixa genérica de texto para "perguntas e comentários", exigindo que o cidadão insira o destinatário no próprio corpo da mensagem, sem mecanismos estruturados de categorização ou direcionamento a oradores. A modelagem investiga essa lacuna e propõe alternativas de reprojeto ergonômico.

## Item de conteúdo da disciplina

**Autor do item:** Heitor Pinheiro Gonçalves das Chagas.

Segundo Barbosa e Silva (2010, p. 191–192), a análise de tarefas tem por objetivo entender o trabalho realizado, seus objetivos e as eventuais disparidades entre a prescrição formal e a prática cotidiana. A HTA decompõe um objetivo geral em subtarefas e operações, vinculadas por planos que especificam a ordem e as condições de execução (p. 192–195). Uma das fases indispensáveis da HTA é a **verificação da validade da decomposição junto às partes interessadas** (p. 196, reproduzida na Figura 2 deste documento).

A avaliação é estruturada segundo o framework **DECIDE** (BARBOSA; SILVA, 2010, p. 312–313, Figura 1), contemplando:
- **D** — Determinar os objetivos gerais;
- **E** — Explorar as perguntas a serem respondidas;
- **C** — Escolher os métodos de avaliação;
- **I** — Identificar e administrar as questões práticas;
- **D** — Decidir como lidar com as questões éticas;
- **E** — Avaliar, interpretar e apresentar os dados.

## D — Determinar os objetivos

**Objetivo geral:** verificar empiricamente se o modelo hierárquico da HTA representa com fidelidade o percurso cognitivo e motor de cidadãos com o perfil de Letícia Oliveira ao enviarem perguntas técnicas a oradores em audiências interativas do e-Cidadania, identificando omissões, sequências inadequadas e avaliando a hipótese do ponto crítico na operação 2.2 e as propostas de reprojeto nas operações 2.2, 2.3 e 4.1.

Os objetivos específicos alinham-se às quatro dimensões de avaliação descritas por Barbosa e Silva (2010):

1. **Apropriação da tecnologia:** verificar como cidadãos e lideranças comunitárias encaixam as audiências interativas do e-Cidadania na sua rotina de participação política e acompanhamento legislativo;
2. **Conformidade com um padrão:** avaliar se o fluxo de envio respeita padrões ergonômicos e convenções da web pública (acessibilidade, visibilidade e clareza);
3. **Comparação de alternativas:** levantar dados para comparar, na Etapa 5, a caixa genérica de texto atual com alternativas de reprojeto estruturado no protótipo de papel;
4. **Identificação de problemas:** confrontar a árvore de subtarefas, operações e planos com a prática do usuário para revelar incongruências de modelagem.

- **Para quem é importante:** para cidadãos e lideranças sociais que dependem da clareza do portal, e para a equipe de desenvolvimento, que usará este modelo como base para os protótipos de baixa e média fidelidade.
- **Por que é importante:** validar o modelo antes do desenvolvimento de protótipos previne retrabalho e assegura que o reprojeto resolva os gargalos reais de usabilidade.

## E — Explorar as perguntas

A Tabela 2 sintetiza as perguntas norteadoras da avaliação da HTA articuladas aos objetivos e às evidências esperadas.

| ID | Objetivo | Pergunta norteadora | Evidência pretendida |
| :---: | :---: | --- | --- |
| AT-Q1 | Dimensão 4 | A decomposição nas 4 subtarefas (Acessar a audiência, Estruturar/direcionar manifestação, Autenticar/submeter e Monitorar triagem) reflete a estrutura lógica real da tarefa? | Confirmação ou contestação da árvore e dos nós principais |
| AT-Q2 | Dimensão 1 | O Plano 1 expressa adequadamente a realidade (busca e filtro via portal 1.1>1.2>1.3 vs. link direto recebido em grupo de mensagens 1.4)? | Frequência de uso do atalho por mensagens instantâneas e hábitos de navegação |
| AT-Q3 | Dimensão 4 | A operação 2.2 (alterar categoria de comentário geral para pergunta a orador) é reconhecida como um ponto crítico e potencial barreira de affordance na interface atual? | Relato de dificuldade, receio de dispersão no chat e percepção de controle |
| AT-Q4 | Dimensão 4 | Há passos intermediários executados pelo participante que não foram contemplados na HTA (ou operações redundantes)? | Sugestão de inclusão/exclusão de nós operacionais |
| AT-Q5 | Dimensões 2 e 3 | Como o participante espera diferenciar comentários gerais de perguntas a oradores específicos e quais controles visuais seriam mais intuitivos? | Subsídios de layout espacial para o futuro protótipo de papel |

<p class="caption">Tabela 2 — Perguntas de avaliação da HTA e evidências pretendidas.</p>
<p class="source">Fonte: elaboração do autor (2026).</p>

### Roteiro estruturado de perguntas para a sessão

Para orientar a condução da entrevista semiestruturada com o participante durante a apresentação da HTA, utiliza-se o roteiro detalhado na Tabela 3.

| Nº | Foco na HTA | Pergunta formulada ao participante | Objetivo da pergunta | Resposta esperada |
| :---: | :--- | --- | --- | --- |
| **P01** | Contextualização | Você já acompanhou ou participou de alguma audiência pública interativa no e-Cidadania ou outro portal governamental? Como costuma acessar? | Validar a adequação do participante ao perfil de Letícia Oliveira. | Resposta aberta qualitativa. |
| **P02** | Subtarefas gerais | Observando a árvore da HTA, a divisão nas quatro etapas (Acessar a audiência, Estruturar/direcionar manifestação, Autenticar/submeter e Monitorar triagem) reflete a sua linha de raciocínio ao enviar uma pergunta ao vivo? | Validar a completude do objetivo 0 e a clareza das subtarefas 1 a 4. | Escala binária (Sim/Não) com justificativa. |
| **P03** | Planos e atalhos | Em relação ao Plano 1, quando você recebe um link de transmissão no WhatsApp/Telegram (1.4), costuma abri-lo direto ou prefere buscar pelo portal e filtrar eventos (1.1 a 1.3)? | Validar a representação da alternância lógica no Plano 1. | Escolha de preferência com relato de hábito. |
| **P04** | Ponto crítico (2.2) | Ao formular uma pergunta para ser lida pelos senadores ou palestrantes, você já sentiu receio ou dificuldade sobre onde indicar que se trata de uma pergunta direcionada e não só um comentário solto no chat (operação 2.2)? | Confirmar a percepção da necessidade da proposta de reprojeto. | Escala Likert de 1 a 5 (1 = Muito fácil a 5 = Muito difícil). |
| **P05** | Completude | Existe alguma ação indispensável que você realiza e que não está nesta árvore, ou alguma operação que parece desnecessária? | Mapear lacunas e calibrar o nível de detalhamento do modelo. | Resposta aberta de acréscimo ou supressão. |

<p class="caption">Tabela 3 — Roteiro de perguntas da entrevista de validação da HTA.</p>
<p class="source">Fonte: elaboração do autor (2026).</p>

## C — Escolher os métodos

O método selecionado é a **investigação por entrevista semiestruturada apoiada no modelo de tarefas**, acompanhada de conferência técnica de notação (BARBOSA; SILVA, 2010, p. 196, p. 272–280).

- **Justificativa técnica:** a validação de modelo não exige observação em laboratório com software rodando, pois o objetivo é averiguar se as intenções, objetivos e operações descritas no modelo batem com a prática real de quem realiza a tarefa. A entrevista permite flexibilidade para aprofundar hesitações e explorar operações ausentes.
- **Restrições operacionais:**
  - *Prazo:* a avaliação cabe no intervalo entre a apresentação da Etapa 4 e a entrega da Etapa 5 (25/10/2026);
  - *Orçamento:* custo zero, utilizando infraestrutura já disponível (laboratório da FCTE/UnB e notebook do avaliador);
  - *Equipamentos:* notebook do avaliador para exibição do diagrama ampliado, roteiro impresso e gravação de áudio em celular;
  - *Experiência do avaliador:* estudante de Engenharia de Software capacitado em técnicas de entrevista e observação na Etapa 2.

**Transição metodológica para a Etapa 5:** a validação do modelo de análise de tarefas (HTA) e a leitura do storyboard servem como insumo para a concepção das alternativas de design. Conforme preconiza o plano de ensino da disciplina, esses modelos conceituais orientam diretamente a criação e a avaliação do **método de prototipação em papel**, cujo planejamento e testes serão executados na Etapa 5.

## I — Identificar e administrar questões práticas

### Participantes e recrutamento

- **Perfil dos participantes:** cidadãos entre 18 e 30 anos que atuam em movimentos sociais ou coletivos universitários, que já participaram ou têm interesse em consultas legislativas e audiências públicas, e usam computador pessoal com frequência — o perfil sintetizado na persona Letícia Oliveira.
- **Estratégia de recrutamento:** convite direto à participante P3 da Etapa 2 (garantindo continuidade longitudinal) e, por indicação em rede (snowballing), a outros integrantes de coletivos e estudantes da FCTE/UnB.
- **Quantidade e justificativa:** **3 participantes** (dado fechado de planejamento). Nielsen (2000) e Krug (2014) demonstram que 3 a 5 participantes são suficientes para revelar a grande maioria dos problemas qualitativos de interação e validar modelos conceituais em ciclos formativos ágeis. Como se trata de validação conceitual e não de teste estatístico, 3 participantes cabem perfeitamente no cronograma da disciplina.

### Modalidade e ambiente

- **Modalidade:** sessões presenciais no Laboratório de Informática da FCTE/UnB, com projeção dos diagramas em alta resolução.
- **Duração prevista:** 40 minutos por sessão (5 min de acolhimento e TCLE, 15 min de discussão da HTA, 15 min de Storyboard e 5 min de encerramento).

### Cronograma de execução da avaliação

A Tabela 4 fixa as datas, horários e locais fechados das sessões de avaliação. O teste piloto é executado estritamente antes das sessões oficiais.

| Atividade | Avaliador | Participante / Perfil | Data | Horário (Brasília) | Local / Plataforma |
| :--- | :--- | :--- | :---: | :---: | :--- |
| **Teste piloto** | Heitor Pinheiro | Estudante da FCTE/UnB (fora da amostra oficial) | 24/10/2026 | 15h30–16h10 | Presencial (FCTE/UnB) |
| **Sessão 1** | Heitor Pinheiro | P1 — Liderança comunitária (perfil Letícia) | 24/10/2026 | 16h30–17h10 | Presencial (FCTE/UnB) |
| **Sessão 2** | Heitor Pinheiro | P2 — Integrante de movimento social (perfil Letícia) | 24/10/2026 | 17h30–18h10 | Presencial (FCTE/UnB) |
| **Sessão 3** | Heitor Pinheiro | P3 — Participante da Etapa 2 / Coletivo estudantil | 24/10/2026 | 18h30–19h10 | Presencial (FCTE/UnB) |

<p class="caption">Tabela 4 — Cronograma oficial de execução das avaliações.</p>
<p class="source">Fonte: elaboração do autor (2026).</p>

### Teste piloto

O teste piloto consiste em um ensaio prévio e em pequena escala da sessão de avaliação, destinado a verificar se os instrumentos de coleta, o roteiro de perguntas, os diagramas visuais, os equipamentos de gravação e a gestão do tempo operam conforme o planejado (BARBOSA; SILVA, 2010, p. 278, p. 307–308).

O ensaio piloto ocorrerá em **24/10/2026, das 15h30 às 16h10, na FCTE/UnB**, com um estudante de perfil próximo que não faz parte da amostra oficial.

!!! warning "Uso exclusivo do resultado do teste piloto"
    **O resultado do teste piloto servirá exclusivamente para calibrar os instrumentos, a linguagem das perguntas e o ambiente de teste; portanto, os dados e achados do teste piloto NÃO serão apresentados nem contabilizados no relato final dos resultados da avaliação.**

### Papel do avaliador durante a sessão

Durante as sessões, o avaliador (Heitor Pinheiro) deverá:
1. **Anotar divergências e sugestões:** registrar cada hesitação, contradição ou operação ausente, associando-a imediatamente ao identificador da operação da HTA (ex.: 2.2);
2. **Priorizar problemas:** classificar preliminarmente os atritos observados por ordem de gravidade para alimentar o plano de reprojeto do protótipo de papel;
3. **Não induzir respostas:** formular questões neutras ("Como você procede quando chega nesta etapa?") em vez de perguntas tendenciosas ("Você clica aqui, certo?");
4. **Respeitar o ritmo do participante:** permitir pausas para análise do diagrama e conceder tempo hábil para reflexão espontânea.

## D — Decidir como lidar com questões éticas

Em respeito irrestrito à Resolução CNS nº 510/2016 e às diretrizes éticas da disciplina de IHC da FCTE/UnB, os participantes serão tratados com dignidade e resguardados contra qualquer prejuízo direto ou indireto.

- **Foco no artefato:** o participante é informado de que a avaliação recai sobre a adequação dos modelos de IHC e da interface pública, e nunca sobre suas competências ou habilidades pessoais;
- **Voluntariedade e liberdade de desistência:** a participação é livre e espontânea, podendo ser encerrada a qualquer instante sem qualquer penalidade acadêmica ou constrangimento;
- **Anonimato rigoroso:** os participantes são identificados nos relatórios públicos unicamente por códigos alfanuméricos (P1, P2, P3);
- **Permissão de gravação:** **o avaliador solicitará formalmente a autorização verbal e escrita do participante antes de iniciar qualquer gravação de áudio, vídeo ou tela**, mantendo os arquivos brutos sob guarda segura e restrita.

??? note "Modelo do Termo de Consentimento Livre e Esclarecido (TCLE) e Solicitação de Gravação"
    **TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO (TCLE)**
    
    **Projeto de Ensino e Pesquisa:** Avaliação e Reprojeto de IHC do Portal e-Cidadania do Senado Federal  
    **Instituição:** Faculdade de Ciências e Tecnologias em Engenharia (FCTE) — Universidade de Brasília (UnB)  
    **Disciplina:** Interação Humano-Computador (2026.2) — Professor Responsável: Dr. André Barros de Sales  
    **Avaliador Responsável:** Heitor Pinheiro Gonçalves das Chagas  

    **1. Objetivos da Avaliação:** Você está sendo convidado(a) a participar de uma sessão de validação da Análise Hierárquica de Tarefas (HTA) referente à participação em audiências públicas e eventos interativos no Portal e-Cidadania. O objetivo é aprimorar a qualidade de uso, a estruturação e o direcionamento de perguntas técnicas na interface pública do Senado Federal.

    **2. Procedimentos:** A atividade terá duração média de 40 minutos. O avaliador exibirá o diagrama hierárquico e conduzirá uma entrevista semiestruturada. Não se trata de uma avaliação das suas habilidades, mas sim da clareza dos artefatos de IHC.

    **3. Riscos e Benefícios:** Os riscos são mínimos, equivalentes aos de atividades rotineiras no computador. Não há qualquer custo financeiro ou risco à sua integridade moral ou física. O benefício é contribuir diretamente para o design de soluções de governo eletrônico mais acessíveis e eficientes.

    **4. Confidencialidade e Voluntariedade:** Sua participação é estritamente voluntária. É garantido o direito de recusar perguntas ou interromper a sessão a qualquer instante. Seus dados serão mantidos em sigilo e publicados somente de forma anonimizada (ex.: Participante P1).

    **5. Consentimento para Gravação:** Para viabilizar a conferência fidedigna dos relatos, solicita-se autorização para gravação de áudio/vídeo da sessão. **O avaliador solicitará autorização imediata antes de ligar o gravador.**

    ---
    **Declaração de Consentimento:**  
    Eu, ______________________________________________________, concordo voluntariamente em participar deste estudo acadêmico de IHC.  
    [ &nbsp; ] AUTORIZO a gravação de áudio/vídeo da sessão.  
    [ &nbsp; ] NÃO AUTORIZO a gravação audiovisual (apenas anotações manuais).  

    Brasília-DF, 24 de outubro de 2026.  
    Assinatura do Participante: ____________________________________________________  
    Assinatura do Avaliador Responsável: __________________________________________

## E — Avaliar, interpretar e apresentar os dados

Os dados obtidos na validação da HTA serão interpretados considerando a ressalva metodológica de Barbosa e Silva (2010): os resultados de uma avaliação indicam tendências de problemas, e não a certeza absoluta de que ocorrerão em todas as situações de uso; igualmente, a ausência de problemas não comprova alta qualidade de uso geral, apenas que o escopo avaliado não os manifestou.

A análise considerará os quatro critérios de validade:
- **Confiabilidade:** a consistência da categorização de problemas observados;
- **Validade interna:** garantia de que o avaliador não induziu respostas nos tópicos críticos;
- **Validade externa:** representatividade dos achados para a comunidade de cidadãos mobilizados;
- **Validade ecológica:** verossimilhança das discussões em relação ao ambiente cotidiano de participação cidadã.

A consolidação detalhada e os componentes do relatório final estão estruturados no [planejamento do relato dos resultados da análise de tarefas](planejamento-relato-analise-tarefas.md).

## Modelo da Análise Hierárquica de Tarefas (HTA)

Segundo Barbosa e Silva (2010, p. 195–196), a elaboração e o exame de uma Análise Hierárquica de Tarefas estruturam-se em etapas essenciais: definição dos objetivos da análise, obtenção de consenso sobre medidas de sucesso, identificação de fontes de dados, decomposição exaustiva e mutuamente exclusiva de objetivos em subobjetivos e operações, representação gráfica e tabular, especificação dos planos e validação com os envolvidos.

### Definição da tarefa, consenso e medidas de sucesso

A Tabela 5 consolida os objetivos, as partes interessadas, as métricas consensuais de desempenho mensurável e as consequências de falha da tarefa principal analisada, conforme preconizado por Barbosa e Silva (2010, p. 195–196).

| Dimensão metodológica | Especificação no projeto |
| --- | --- |
| **Objetivo da análise HTA** | **Modificar e aperfeiçoar um sistema existente** (módulo Eventos Interativos do e-Cidadania), diagnosticando atritos de usabilidade no envio e direcionamento de perguntas técnicas em audiências públicas ao vivo para fundamentar o reprojeto no método de prototipação em papel (Etapa 5). |
| **Objetivo do usuário** | Enviar questionamento técnico fundamentado direcionado a orador em audiência pública da CRA sobre a regulamentação do PL 1215/2025 para qualificar o debate legislativo. |
| **Partes interessadas (stakeholders)** | Cidadãos mobilizados e lideranças comunitárias (persona Letícia Oliveira), analistas de IHC/avaliadores (Heitor Pinheiro) e equipe gestora do Senado Federal / CRA. |
| **Medidas de sucesso mensuráveis acordadas** | • **Tempo máximo para concluir:** $\le 3$ minutos (180 s) entre a abertura da audiência e a confirmação de envio da pergunta;<br>• **Frequência de erros ao parametrizar o direcionamento ao orador:** **meta de 0 erros** na interface reprojetada. A medição na interface atual fica **a coletar na Etapa 5**, com a hipótese da operação 2.2 declarada como hipótese a verificar;<br>• **Taxa de eficácia de autenticação:** 100% de sucesso na confirmação do envio via gov.br. |
| **Evidência objetiva de sucesso** | Pergunta listada com status equivalente a "aprovada para leitura", vinculada ao orador escolhido, e exibição do comprovante visual de submissão na tela. |
| **Consequência da falha** | Pergunta técnica tratada como comentário geral disperso sem leitura pela mesa, perda de incidência política da comunidade camponesa e frustração da participação cidadã. |
| **Fontes de dados e métodos de aquisição** | Análise de tarefas e cenário da persona Letícia Oliveira, inspeção documental e comportamental do módulo de Eventos Interativos do e-Cidadania (acesso em 24 out. 2026). |

<p class="caption">Tabela 5 — Definição da tarefa, consenso sobre medidas de sucesso e fontes de dados.</p>
<p class="source">Fonte: elaboração do autor (2026), com base em Barbosa e Silva (2010, p. 195–196).</p>

### Decomposição de objetivos: critérios de exclusividade e exaustão

A decomposição do Objetivo 0 nos subobjetivos 1 a 4 atende estritamente às diretrizes de Barbosa e Silva (2010, p. 195–196):
- **Mutuamente exclusivos:** os subobjetivos 1 (*Acessar a audiência interativa*), 2 (*Estruturar e direcionar a manifestação*), 3 (*Autenticar e submeter à mesa*) e 4 (*Monitorar triagem e orientar o coletivo*) delimitam fronteiras operacionais bem definidas, sem redundâncias ou sobreposições funcionais no mesmo nível hierárquico;
- **Exaustivos:** a execução sequencial desses quatro subobjetivos define completamente o escopo da tarefa global; se o participante executá-los conforme os planos, o objetivo 0 estará integralmente atingido sem depender de etapas não documentadas.

### Representação da decomposição e planos de execução

A representação da HTA é realizada em duas visões complementares (BARBOSA; SILVA, 2010, p. 195–196): o **diagrama hierárquico em árvore** (Figura 1) e a **tabela estruturada de detalhamento** (Tabela 6).

A Figura 1 apresenta o diagrama em árvore da HTA da tarefa de envio de pergunta técnica em audiência pública no e-Cidadania.

<div class="hta-diagram">
  <svg viewBox="0 0 1200 620" role="img" aria-labelledby="hta-title hta-desc">
    <title id="hta-title">Diagrama da HTA: enviar pergunta técnica a orador em audiência pública no e-Cidadania</title>
    <desc id="hta-desc">Objetivo 0 com plano 1 > 2 > 3 > 4, dividido em: 1 Acessar a audiência interativa (1.1 a 1.4); 2 Estruturar e direcionar manifestação (2.1 a 2.3); 3 Autenticar e submeter à mesa (3.1 e 3.2); 4 Monitorar triagem e orientar o coletivo (4.1 e 4.2). Operação 2.2 destacada como ponto crítico e proposta de reprojeto.</desc>

    <!-- Conectores do objetivo 0 às subtarefas -->
    <g stroke="#4a5a6a" stroke-width="2" fill="none">
      <line x1="600" y1="92" x2="600" y2="116"/>
      <line x1="150" y1="116" x2="1050" y2="116"/>
      <line x1="150" y1="116" x2="150" y2="140"/>
      <line x1="450" y1="116" x2="450" y2="140"/>
      <line x1="750" y1="116" x2="750" y2="140"/>
      <line x1="1050" y1="116" x2="1050" y2="140"/>
      <!-- Hastes das operações -->
      <polyline points="30,210 30,424"/>
      <line x1="30" y1="283" x2="45" y2="283"/><line x1="30" y1="330" x2="45" y2="330"/><line x1="30" y1="377" x2="45" y2="377"/><line x1="30" y1="424" x2="45" y2="424"/>
      <polyline points="330,210 330,377"/>
      <line x1="330" y1="283" x2="345" y2="283"/><line x1="330" y1="330" x2="345" y2="330"/><line x1="330" y1="377" x2="345" y2="377"/>
      <polyline points="630,210 630,330"/>
      <line x1="630" y1="283" x2="645" y2="283"/><line x1="630" y1="330" x2="645" y2="330"/>
      <polyline points="930,210 930,330"/>
      <line x1="930" y1="283" x2="945" y2="283"/><line x1="930" y1="330" x2="945" y2="330"/>
    </g>

    <!-- Objetivo 0 -->
    <rect x="330" y="20" width="540" height="72" rx="8" fill="#00305c"/>
    <text x="600" y="50" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="700">0. Enviar pergunta técnica direcionada a orador em audiência no e-Cidadania</text>
    <text x="600" y="76" text-anchor="middle" fill="#faa731" font-size="14" font-family="IBM Plex Mono, monospace">plano 0: 1 &gt; 2 &gt; 3 &gt; 4</text>

    <!-- Subtarefas -->
    <g font-size="14" font-weight="700" text-anchor="middle">
      <rect x="15" y="140" width="270" height="70" rx="8" fill="#e6eef5" stroke="#005b9e" stroke-width="2"/>
      <text x="150" y="168" fill="#00305c">1. Acessar audiência interativa</text>
      <rect x="315" y="140" width="270" height="70" rx="8" fill="#e6eef5" stroke="#005b9e" stroke-width="2"/>
      <text x="450" y="168" fill="#00305c">2. Estruturar e direcionar</text>
      <rect x="615" y="140" width="270" height="70" rx="8" fill="#e6eef5" stroke="#005b9e" stroke-width="2"/>
      <text x="750" y="168" fill="#00305c">3. Autenticar e submeter</text>
      <rect x="915" y="140" width="270" height="70" rx="8" fill="#e6eef5" stroke="#005b9e" stroke-width="2"/>
      <text x="1050" y="168" fill="#00305c">4. Monitorar e orientar</text>
    </g>
    <g font-size="12" text-anchor="middle" fill="#005b9e" font-family="IBM Plex Mono, monospace">
      <text x="150" y="194">plano 1: 1.1 &gt; 1.2 &gt; 1.3 / 1.4</text>
      <text x="450" y="194">plano 2: 2.1 &gt; 2.2 &gt; 2.3</text>
      <text x="750" y="194">plano 3: 3.1 &gt; 3.2</text>
      <text x="1050" y="194">plano 4: 4.1 (&gt; 4.2)</text>
    </g>

    <!-- Operações -->
    <g font-size="12.5" fill="#1b1b1b">
      <!-- Coluna 1 -->
      <rect x="45" y="260" width="240" height="46" rx="6" fill="#ffffff" stroke="#4a5a6a" stroke-width="1.5"/>
      <line x1="45" y1="306" x2="285" y2="306" stroke="#00305c" stroke-width="3"/>
      <text x="57" y="288">1.1 Acessar "Eventos Interativos"</text>
      <rect x="45" y="307" width="240" height="46" rx="6" fill="#ffffff" stroke="#4a5a6a" stroke-width="1.5"/>
      <line x1="45" y1="353" x2="285" y2="353" stroke="#00305c" stroke-width="3"/>
      <text x="57" y="335">1.2 Filtrar eventos CRA em andamento</text>
      <rect x="45" y="354" width="240" height="46" rx="6" fill="#ffffff" stroke="#4a5a6a" stroke-width="1.5"/>
      <line x1="45" y1="400" x2="285" y2="400" stroke="#00305c" stroke-width="3"/>
      <text x="57" y="382">1.3 Abrir audiência do PL 1215/2025</text>
      <rect x="45" y="401" width="240" height="46" rx="6" fill="#ffffff" stroke="#4a5a6a" stroke-width="1.5" stroke-dasharray="6 4"/>
      <line x1="45" y1="447" x2="285" y2="447" stroke="#00305c" stroke-width="3"/>
      <text x="57" y="429">1.4 Abrir link direto da transmissão</text>

      <!-- Coluna 2 -->
      <rect x="345" y="260" width="240" height="46" rx="6" fill="#ffffff" stroke="#4a5a6a" stroke-width="1.5"/>
      <line x1="345" y1="306" x2="585" y2="306" stroke="#00305c" stroke-width="3"/>
      <text x="357" y="288">2.1 Redigir questionamento no campo</text>
      <rect x="345" y="307" width="240" height="46" rx="6" fill="#fff5f5" stroke="#b91c1c" stroke-width="3"/>
      <line x1="345" y1="353" x2="585" y2="353" stroke="#00305c" stroke-width="3"/>
      <text x="357" y="335" font-weight="700" fill="#b91c1c">2.2 Mudar para "Pergunta a Orador" ⚠</text>
      <rect x="345" y="354" width="240" height="46" rx="6" fill="#ffffff" stroke="#4a5a6a" stroke-width="1.5"/>
      <line x1="345" y1="400" x2="585" y2="400" stroke="#00305c" stroke-width="3"/>
      <text x="357" y="382">2.3 Selecionar orador destinatário</text>

      <!-- Coluna 3 -->
      <rect x="645" y="260" width="240" height="46" rx="6" fill="#ffffff" stroke="#4a5a6a" stroke-width="1.5"/>
      <line x1="645" y1="306" x2="885" y2="306" stroke="#00305c" stroke-width="3"/>
      <text x="657" y="288">3.1 Autenticar civilmente via gov.br</text>
      <rect x="645" y="307" width="240" height="46" rx="6" fill="#ffffff" stroke="#4a5a6a" stroke-width="1.5"/>
      <line x1="645" y1="353" x2="885" y2="353" stroke="#00305c" stroke-width="3"/>
      <text x="657" y="335">3.2 Revisar dados e confirmar envio</text>

      <!-- Coluna 4 -->
      <rect x="945" y="260" width="240" height="46" rx="6" fill="#ffffff" stroke="#4a5a6a" stroke-width="1.5"/>
      <line x1="945" y1="306" x2="1185" y2="306" stroke="#00305c" stroke-width="3"/>
      <text x="957" y="288">4.1 Acompanhar status no painel</text>
      <rect x="945" y="307" width="240" height="46" rx="6" fill="#ffffff" stroke="#4a5a6a" stroke-width="1.5" stroke-dasharray="6 4"/>
      <line x1="945" y1="353" x2="1185" y2="353" stroke="#00305c" stroke-width="3"/>
      <text x="957" y="335">4.2 Enviar alerta/instrução ao grupo</text>
    </g>

    <!-- Legenda -->
    <g font-size="13" fill="#1b1b1b">
      <rect x="15" y="490" width="1170" height="114" rx="8" fill="#ffffff" stroke="#cccccc"/>
      <text x="35" y="516" font-weight="700" fill="#00305c">Legenda</text>
      <rect x="35" y="530" width="40" height="22" rx="4" fill="#00305c"/>
      <text x="83" y="546">Objetivo geral</text>
      <rect x="200" y="530" width="40" height="22" rx="4" fill="#e6eef5" stroke="#005b9e" stroke-width="2"/>
      <text x="248" y="546">Subtarefa e plano</text>
      <rect x="385" y="530" width="40" height="22" rx="4" fill="#ffffff" stroke="#4a5a6a" stroke-width="1.5"/>
      <line x1="385" y1="552" x2="425" y2="552" stroke="#00305c" stroke-width="3"/>
      <text x="433" y="546">Operação prevista/observada</text>
      <rect x="630" y="530" width="40" height="22" rx="4" fill="#ffffff" stroke="#4a5a6a" stroke-width="1.5" stroke-dasharray="6 4"/>
      <text x="678" y="546">Operação relatada / opcional</text>
      <rect x="880" y="530" width="40" height="22" rx="4" fill="#fff5f5" stroke="#b91c1c" stroke-width="3"/>
      <text x="928" y="546">Ponto crítico / proposta reprojeto</text>
      <text x="35" y="586" font-size="12" fill="#4a5a6a" font-family="IBM Plex Mono, monospace">"&gt;" sequência · "/" alternativa · "( )" opcional · 2.2, 2.3 e 4.1 integram proposta de reprojeto</text>
    </g>
  </svg>
</div>

<p class="caption">Figura 1 — Diagrama da Análise Hierárquica de Tarefas (HTA) de Letícia Oliveira.</p>
<p class="source">Fonte: elaboração do autor (2026), com base no e-Cidadania (acesso em 24 out. 2026) e na notação de Barbosa e Silva (2010, p. 193–194).</p>

A Tabela 6 detalha cada objetivo, subtarefa e operação no formato da Tabela 6.3 de Barbosa e Silva (2010, p. 194–195), especificando *input*, *ação*, *feedback*, problemas da interface atual e propostas de reprojeto.

| Objetivos / subtarefas / operações | Plano / relação lógica | Especificação (&lt;input, ação, feedback&gt;), problemas e recomendações |
| --- | --- | --- |
| **0. Enviar pergunta técnica direcionada a orador em audiência no e-Cidadania** | **Plano 0:** 1 > 2 > 3 > 4 (sequência fixa) | **Input:** transmissão ao vivo da audiência da CRA sobre o PL 1215/2025 e demanda do coletivo camponês para enviar questionamento técnico à mesa.<br>**Ação:** cumprir o percurso de acesso à sala da audiência, redação e direcionamento da pergunta, autenticação civil e acompanhamento da triagem.<br>**Feedback:** confirmação visual do envio com identificação do destinatário e status de moderação. |
| **1. Acessar a audiência interativa** | **Plano 1:** fazer (1.1 > 1.2 > 1.3) ou 1.4 (seleção) | **Input:** dispositivo conectado à internet e motivação para participar do debate.<br>**Ação:** navegar pelo portal até a audiência ou utilizar atalho direto.<br>**Feedback:** página da audiência pública aberta, com transmissão de vídeo e coluna de participação carregadas. |
| &nbsp;&nbsp;1.1 Acessar o módulo "Eventos Interativos" <span class="badge-op">Operação</span> | Sequencial fixa | **Input:** página inicial do e-Cidadania aberta no navegador.<br>**Ação:** clicar na opção "Evento Interativo" no menu principal.<br>**Feedback:** página de pesquisa e listagem de audiências carregada (`principalaudiencia`). Observado no portal atual. |
| &nbsp;&nbsp;1.2 Filtrar eventos da CRA em andamento <span class="badge-op">Operação</span> | Sequencial fixa | **Input:** painel de filtros visível na listagem de eventos.<br>**Ação:** selecionar a situação "Em andamento" e indicar a sigla "CRA" (Comissão de Agricultura e Reforma Agrária).<br>**Feedback:** lista de eventos filtrada exibindo a audiência da CRA em andamento. Observado no portal atual. |
| &nbsp;&nbsp;1.3 Abrir a página da audiência sobre o PL 1215/2025 <span class="badge-op">Operação</span> | Sequencial fixa | **Input:** card da audiência pública sobre crédito e alimentos da agricultura familiar retornado na busca.<br>**Ação:** clicar no título do evento interativo.<br>**Feedback:** sala de transmissão carregada com vídeo ao vivo e painel de perguntas. Observado no portal atual. |
| &nbsp;&nbsp;1.4 Acessar link direto recebido em grupo de mensagens <span class="badge-op">Operação</span> | Seleção alternativa a 1.1 > 1.2 > 1.3 | **Input:** notificação ou mensagem no WhatsApp/Telegram contendo link direto da transmissão.<br>**Ação:** clicar no link compartilhado no grupo do movimento social.<br>**Feedback:** página da audiência carregada diretamente. Relatada na entrevista como atalho rotineiro. |
| **2. Estruturar e direcionar a manifestação** | **Plano 2:** 2.1 > 2.2 > 2.3 (sequência fixa) | **Input:** coluna de participação aberta e questionamento técnico formulado.<br>**Ação:** digitar o texto, definir a tipologia como pergunta a orador e vincular ao palestrante.<br>**Feedback:** dados parametrizados na interface de submissão. |
| &nbsp;&nbsp;2.1 Redigir o questionamento técnico no campo de texto <span class="badge-op">Operação</span> | Entrada de dados | **Input:** campo de texto visível na coluna de participação.<br>**Ação:** digitar o questionamento técnico fundamentado sobre os impactos do PL 1215/2025.<br>**Feedback:** texto exibido na caixa de edição. Observado no portal atual (onde o usuário precisa escrever no corpo do texto o nome do destinatário devido à ausência de campos próprios). |
| &nbsp;&nbsp;2.2 Alterar a categoria de "Comentário Geral" para "Pergunta a Orador" <span class="badge-op">Operação</span> | Seleção / Proposta de reprojeto | **Input:** controle seletor de modalidade de participação visível acima ou junto à caixa de texto.<br>**Ação:** selecionar a opção "Pergunta a Orador" (em vez do envio padrão como comentário genérico).<br>**Feedback:** interface exibe campos adicionais para escolha do destinatário. ⚠ **Ponto crítico e proposta de reprojeto:** no portal atual essa separação não existe, fazendo com que perguntas técnicas concorram em volume com comentários livres e corram risco de não serem triadas para leitura da mesa.<br><span class="badge-rec">Recomendação de reprojeto</span> Inserir controles explícitos (radio buttons ou abas visíveis) separando "Apenas comentar" e "Perguntar a um convidado/senador". |
| &nbsp;&nbsp;2.3 Selecionar o senador/palestrante destinatário e o tópico em menu suspenso <span class="badge-op">Operação</span> | Seleção / Proposta de reprojeto | **Input:** menu suspenso alimentado com a lista de autoridades e convidados presentes na audiência da CRA.<br>**Ação:** selecionar o nome do relator/palestrante a quem a pergunta se destina.<br>**Feedback:** autoridade selecionada exibida como destinatária da mensagem. Proposta de reprojeto (no portal atual é digitado no texto livre). |
| **3. Autenticar e submeter à mesa** | **Plano 3:** 3.1 > 3.2 (sequência fixa) | **Input:** pergunta redigida e direcionada ao orador.<br>**Ação:** autenticar credenciais civis e submeter os dados.<br>**Feedback:** mensagem submetida à fila de triagem da mesa. |
| &nbsp;&nbsp;3.1 Autenticar a identidade civil por credenciais gov.br <span class="badge-op">Operação</span> | Interação / segurança | **Input:** solicitação de identificação do cidadão participante.<br>**Ação:** fornecer credenciais gov.br para validação da identidade.<br>**Feedback:** perfil do cidadão autenticado e validado para manifestação oficial. Observado no portal atual. |
| &nbsp;&nbsp;3.2 Revisar os dados e confirmar o envio <span class="badge-op">Operação</span> | Confirmação | **Input:** diálogo de confirmação com resumo da pergunta e orador destinatário.<br>**Ação:** conferir os parâmetros e acionar o botão "Confirmar envio à mesa".<br>**Feedback:** comprovante de envio emitido na tela e campo limpo. Observado / previsto. |
| **4. Monitorar triagem e orientar o coletivo** | **Plano 4:** 4.1 (> 4.2) (sequência fixa com passo final opcional) | **Input:** pergunta submetida e necessidade de acompanhar sua tramitação na audiência.<br>**Ação:** verificar o status no painel e orientar a base comunitária.<br>**Feedback:** acompanhamento do status e orientação transmitida aos pares. |
| &nbsp;&nbsp;4.1 Acompanhar a mudança de status no painel <span class="badge-op">Operação</span> | Monitoramento / Proposta de reprojeto | **Input:** painel de acompanhamento pessoal de manifestações.<br>**Ação:** verificar a evolução de status da pergunta (ex.: "Em moderação" $\rightarrow$ "Aprovada para leitura pela mesa").<br>**Feedback:** indicador visual de status atualizado. Proposta de reprojeto: no portal atual o sistema exibe apenas confirmação geral e marcação no vídeo quando lida, sem painel estruturado de status pessoal para o autor. |
| &nbsp;&nbsp;4.2 Enviar alerta ao grupo ensinando a ativar "Pergunta a Orador" <span class="badge-op">Operação</span> | Opcional / compensatória | **Input:** consciência de que o direcionamento exige selecionar a opção de pergunta a orador.<br>**Ação:** redigir e enviar mensagem nos grupos de WhatsApp/Telegram orientando os companheiros de movimento sobre como direcionar perguntas ao relator da CRA.<br>**Feedback:** mensagem de orientação colaborativa entregue aos membros do coletivo. Relatada na entrevista. |

<p class="caption">Tabela 6 — Análise Hierárquica de Tarefas (HTA) da participação de Letícia Oliveira (Tabela 6.3 de Barbosa e Silva).</p>
<p class="source">Fonte: elaboração do autor (2026), a partir da inspeção do e-Cidadania (acesso em 24 out. 2026); formato de Barbosa e Silva (2010, p. 194–195).</p>

## Agradecimentos

Em consonância com as recomendações de integridade acadêmica da Sociedade Brasileira de Computação (SBC) e as diretrizes do Plano de Ensino da FCTE/UnB, registra-se a declaração formal do uso de ferramentas de Inteligência Artificial Generativa (Google Gemini e Claude, da Anthropic):
- **Onde as ferramentas foram empregadas:** na assistência à redação do framework DECIDE, na estruturação de tabelas Markdown e no código dos gráficos vetoriais SVG (diagrama da árvore HTA);
- **Facilidades:** alta agilidade na conversão para o padrão MkDocs Material e na renderização dos componentes vetoriais responsivos;
- **Dificuldades e controle de qualidade:** tendência dos modelos a confundir o planejamento prospectivo da Etapa 4 com a execução da Etapa 5 e imprecisões no alinhamento fino das caixas SVG. Toda a concepção dos roteiros e validação técnica foram realizadas integralmente pelo autor.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| 0.1 | 13/10/2026 | Estruturação inicial do planejamento DECIDE da avaliação da HTA (Letícia Oliveira — PL 1215/2025) | [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |
| 1.0 | 13/10/2026 | Conclusão do planejamento DECIDE com cronograma fechado, teste piloto, roteiro de perguntas (P01–P05), TCLE, diagrama SVG e tabela HTA | [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |
| 2.0 | 24/10/2026 | Refatoração do escopo da tarefa para Participação em Evento Interativo (e-Cidadania), modelagem de reprojeto (2.2, 2.3, 4.1) e remarcação das gravações para 24/10/2026 | [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) (pendente) |

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. p. 191–196, 272–280, 307–313.

[2] BRASIL. Conselho Nacional de Saúde. *Resolução nº 510, de 7 de abril de 2016*. Brasília: CNS, 2016.

[3] KRUG, Steve. *Não me faça pensar: atualizado*. 3. ed. Rio de Janeiro: Alta Books, 2014.

[4] NIELSEN, Jakob. *Why you only need to test with 5 users*. Nielsen Norman Group, 2000. Disponível em: <https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/>. Acesso em: 13 out. 2026.

[5] PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. *Design de interação: além da interação humano-computador*. 3. ed. Porto Alegre: Bookman, 2013.

[6] SALES, André Barros de. *Plano de Ensino FIHC 022026 — Turma 01*. Brasília: FCTE/UnB, 2026.

[7] SENADO FEDERAL. *Portal e-Cidadania: eventos interativos e audiências públicas*. Disponível em: <https://www12.senado.leg.br/ecidadania/principalaudiencia>. Acesso em: 24 out. 2026.

## Apêndice A — Trechos do livro

As figuras abaixo fundamentam a aplicação do framework DECIDE, a validação da HTA com partes interessadas, a notação adotada e o teste piloto.

??? note "Figura 2 — Framework DECIDE (Barbosa e Silva, 2010, p. 312–313)"
    ![Atividades interligadas do DECIDE descritas por Barbosa e Silva.](../../../assets/img/referencias/barbosa-decide-p312-313.png)
    <p class="caption">Figura 2 — Organização da avaliação pelo DECIDE.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 312–313).</p>

??? note "Figura 3 — Verificação da decomposição na HTA (Barbosa e Silva, 2010, p. 196)"
    ![Página 196 com os passos da HTA, incluindo verificar a decomposição com as partes interessadas.](../../../assets/img/referencias/barbosa-validacao-hta-p196.png)
    <p class="caption">Figura 3 — Coleta, decomposição e verificação na HTA.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 196).</p>

??? note "Figura 4 — Elementos e planos da HTA (Barbosa e Silva, 2010, p. 193)"
    ![Página 193 com a Figura 6.1 e explicações sobre planos e operações da HTA.](../../../assets/img/referencias/barbosa-notacao-p193.png)
    <p class="caption">Figura 4 — Elementos do diagrama HTA e especificação de operações.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 193, Figura 6.1).</p>

??? note "Figura 5 — Métodos de avaliação de IHC (Barbosa e Silva, 2010, p. 272–280)"
    ![Métodos de investigação e entrevista em IHC.](../../../assets/img/referencias/barbosa-investigacao-p301.png)
    <p class="caption">Figura 5 — Métodos de avaliação e investigação em IHC.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 272–280, p. 301).</p>

??? note "Figura 6 — Definição e finalidade do teste piloto (Barbosa e Silva, 2010, p. 278, p. 307–308)"
    ![Definição do teste piloto, calibração de instrumentos e descarte dos dados no resultado final.](../../../assets/img/referencias/barbosa-piloto-p307.png)
    <p class="caption">Figura 6 — Definição e finalidade do teste piloto.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 278, p. 307).</p>
