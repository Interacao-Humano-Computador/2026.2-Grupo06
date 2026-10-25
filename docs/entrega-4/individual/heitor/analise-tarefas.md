<span class="owner">Responsável: Heitor Pinheiro Gonçalves das Chagas — Participação em Evento Interativo (e-Cidadania) · Autor do item: Heitor Pinheiro Gonçalves das Chagas</span>

# Análise de tarefas — Participação em audiência pública interativa

## Tabela de contribuição

A Tabela 1 registra as contribuições na concepção, modelagem e documentação desta análise de tarefas.

| Integrante / ferramenta | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | Modelagem da HTA, definição de planos, operações e especificação de reprojeto | [Conteúdo](#analise-hierarquica-de-tarefas-hta) |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Revisão por pares dos artefatos individuais da Etapa 4 | [Histórico de versão](#historico-de-versao) |
| Claude (Anthropic) e Google Gemini | Apoio na codificação vetorial do diagrama SVG e formatação estrutural | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuições neste artefato.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Introdução

Este artefato apresenta a modelagem da **Análise Hierárquica de Tarefas (HTA — *Hierarchical Task Analysis*)** da persona [Letícia Oliveira](../../../entrega-2/individual/heitor/persona.md), desenvolvida para a tarefa de **enviar pergunta técnica direcionada a orador em audiência pública interativa ao vivo sobre a regulamentação do PL 1215/2025** no módulo **Eventos Interativos** do portal **e-Cidadania** (Senado Federal).

A modelagem decorre do refinamento metodológico da tarefa da [Etapa 2](../../../entrega-2/individual/heitor/analise-tarefas.md), incorporando os comportamentos observados durante a sessão de teste empírico com a participante P3 e a inspeção técnica do sistema real em funcionamento (`senado.leg.br/ecidadania/principalaudiencia`). O objetivo é mapear o percurso cognitivo e motor da cidadã, diagnosticar a falha de affordance da interface atual (caixa única indiferenciada de comentários) e subsidiar as soluções de design testadas no [Storyboard](storyboard.md) e no futuro protótipo de papel.

## Definição da tarefa, consenso e medidas de sucesso

Conforme orientam Diaper (2003) e Barbosa e Silva (2010, p. 195–196), a análise de tarefas deve explicitar com clareza o objetivo da análise, as partes interessadas (*stakeholders*), as métricas mensuráveis de desempenho acordadas e as consequências de eventuais falhas. A Tabela 2 sintetiza essas dimensões metodológicas.

| Dimensão metodológica | Especificação no projeto |
| --- | --- |
| **Objetivo da análise HTA** | **Modificar e aperfeiçoar um sistema existente** (módulo Eventos Interativos do e-Cidadania), diagnosticando atritos de usabilidade no envio e direcionamento de perguntas técnicas em audiências públicas ao vivo para fundamentar o reprojeto no método de prototipação em papel (Etapa 5). |
| **Objetivo do usuário** | Enviar questionamento técnico fundamentado direcionado a orador em audiência pública da CRA sobre a regulamentação do PL 1215/2025 para qualificar o debate legislativo. |
| **Partes interessadas (stakeholders)** | Cidadãos mobilizados e lideranças comunitárias (persona Letícia Oliveira), analistas de IHC/avaliadores (Heitor Pinheiro) e equipe gestora do Senado Federal / CRA. |
| **Medidas de sucesso mensuráveis acordadas** | • **Tempo máximo para concluir:** $\le 3$ minutos (180 s) entre a abertura da audiência e a confirmação de envio da pergunta;<br>• **Frequência de erros ao parametrizar o direcionamento ao orador:** **meta de 0 erros** na interface reprojetada. A medição na interface atual fica como hipótese a verificar na avaliação empírica;<br>• **Taxa de eficácia de autenticação:** 100% de sucesso na confirmação do envio via gov.br. |
| **Evidência objetiva de sucesso** | Pergunta listada com status equivalente a "aprovada para leitura", vinculada ao orador escolhido, e exibição do comprovante visual de submissão na tela. |
| **Consequência da falha** | Pergunta técnica tratada como comentário geral disperso sem leitura pela mesa, perda de incidência política da comunidade camponesa e frustração da participação cidadã. |
| **Fontes de dados e métodos de aquisição** | Análise de tarefas e cenário da persona Letícia Oliveira, inspeção documental e comportamental do módulo de Eventos Interativos do e-Cidadania (acesso em 24 out. 2026). |

<p class="caption">Tabela 2 — Definição da tarefa, consenso sobre medidas de sucesso e fontes de dados.</p>
<p class="source">Fonte: elaboração do autor (2026), com base em Barbosa e Silva (2010, p. 195–196).</p>

## Critérios de exclusividade e exaustão

A decomposição do Objetivo Geral 0 nos subobjetivos 1 a 4 respeita rigorosamente os princípios de completude de Barbosa e Silva (2010, p. 195–196):
* **Mutuamente exclusivos:** os subobjetivos 1 (*Acessar a audiência interativa*), 2 (*Estruturar e direcionar a manifestação*), 3 (*Autenticar e submeter à mesa*) e 4 (*Monitorar triagem e orientar o coletivo*) possuem fronteiras operacionais estritas, sem sobreposições ou ambiguidades funcionais no mesmo nível hierárquico;
* **Exaustivos:** a execução sequencial desses quatro subobjetivos define com completude todo o ciclo da tarefa; ao cumpri-los, o objetivo global é integralmente alcançado sem necessidade de passos ocultos.

## Análise Hierárquica de Tarefas (HTA)

A HTA é estruturada na visão em árvore hierárquica (Figura 1) e no detalhamento tabular (Tabela 3).

### Diagrama hierárquico em árvore

A Figura 1 reproduz a árvore da HTA. Na notação canônica (BARBOSA; SILVA, 2010, p. 193), as **operações** (unidades fundamentais que não se decompõem) são representadas por retângulos com um traço espesso horizontal na base, e as regras de ordenação lógica são formalizadas nos planos.

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
<p class="source">Fonte: elaboração do autor (2026), com base no e-Cidadania (acesso em 24 out. 2026) e na notação canônica de Barbosa e Silva (2010, p. 193–194).</p>

### Especificação detalhada das operações

A Tabela 3 detalha a especificação das operações seguindo rigorosamente o modelo da Tabela 6.3 de Barbosa e Silva (2010, p. 194–195), explicitando a trinca `<input, ação, feedback>`, além de diagnosticar os problemas de usabilidade da interface atual e apontar as recomendações de reprojeto.

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

<p class="caption">Tabela 3 — Análise Hierárquica de Tarefas (HTA) da participação de Letícia Oliveira (Tabela 6.3 de Barbosa e Silva).</p>
<p class="source">Fonte: elaboração do autor (2026), a partir da inspeção do e-Cidadania (acesso em 24 out. 2026); formato de Barbosa e Silva (2010, p. 194–195).</p>

## Relação e rastreabilidade com o Storyboard

A Tabela 4 documenta a correspondência 1:1 entre as operações desta análise de tarefas e as cenas do [Storyboard de Letícia Oliveira](storyboard.md).

| Subtarefa / Operações HTA | Quadro do Storyboard | Ação retratada na cena |
| :---: | :---: | --- |
| **Op. 1.1** *(Acessar Eventos Interativos)* | **QD01 — Contexto** | Letícia assiste à transmissão ao vivo e recebe convocação no celular |
| **Op. 1.2 e 1.3** *(Filtrar CRA e abrir audiência)* | **QD02 — Acesso e busca** | Filtra audiências da CRA no e-Cidadania e clica no botão "Participar" |
| **Op. 2.1 e 2.2** *(Redigir e diagnosticar ponto crítico)* | **QD03 — Conflito** | Depara-se com caixa única sem opção de escolher o orador destinatário |
| **Op. 2.3, 3.1 e 3.2** *(Reprojeto e envio)* | **QD04 — Reprojeto** | Seleciona "Pergunta a Orador", escolhe o relator e autentica via gov.br |
| **Op. 4.1 e 4.2** *(Monitoramento e orientação)* | **QD05 — Desfecho** | Pergunta em moderação e envio de instrução pelo celular ao coletivo |
| **Op. 4.3** *(Conclusão com sucesso)* | **QD06 — Conclusão** | Recebimento confirmado pelo relator e sucesso na participação |

<p class="caption">Tabela 4 — Rastreabilidade entre a HTA e o Storyboard de Letícia Oliveira.</p>
<p class="source">Fonte: elaboração do autor (2026).</p>

## Fundamentação teórica

**Autor do item:** Heitor Pinheiro Gonçalves das Chagas.

A Análise Hierárquica de Tarefas foi concebida originariamente por Annett e Duncan (1967) para analisar competências, cargas cognitivas e desempenho em tarefas complexas. No domínio de IHC, Barbosa e Silva (2010, p. 191–196) a consolidam como um instrumento de engenharia que:

1. **Evita a dispersão de requisitos:** ao decompor metas amplas em operações com disparadores e critérios objetivos de término, assegura que a interface responda a necessidades reais de trabalho;
2. **Localiza pontos de atrito ergonômico:** a operação 2.2 evidencia uma barreira de *affordance* onde o sistema atual não apoia a intenção comunicativa do cidadão;
3. **Fundamenta a avaliação e o reprojeto:** serve de base para o [Planejamento da Avaliação da HTA](planejamento-avaliacao-analise-tarefas.md) (DECIDE) e para a validação empírica que culminará na prototipação em papel na Etapa 5.

## Continuidade no projeto

Este artefato orienta diretamente o [Planejamento da Avaliação da Análise de Tarefas](planejamento-avaliacao-analise-tarefas.md) e o [Planejamento do Relato](planejamento-relato-analise-tarefas.md). A verificação da decomposição com participantes voluntários permitirá validar as regras dos planos e calibrar as operações antes do desenho detalhado do protótipo de papel.

## Agradecimentos

A modelagem HTA, a definição dos operadores lógicos e as recomendações ergonômicas de reprojeto foram concebidas por Heitor Pinheiro Gonçalves das Chagas. O suporte computacional de Claude (Anthropic) e Google Gemini foi empregado na estilização visual dos elementos vetoriais SVG e na padronização Markdown. A revisão humana por pares deste artefato é de responsabilidade de [Bruno Ferreira Dornelas](https://github.com/brunnf).

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| 1.0 | 13/10/2026 | Decomposição HTA inicial em 4 subtarefas e 11 operações integrada ao planejamento DECIDE | [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |
| 1.1 | 24/10/2026 | Criação da página individual autônoma; inclusão do diagrama HTA completo com notação canônica de operações e planos, Tabela 6.3 de especificações e matriz de rastreabilidade com o Storyboard | [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |

## Referências

[1] ANNETT, John; DUNCAN, Keith D. Task analysis and training design. *Occupational Psychology*, v. 41, p. 211–221, 1967.

[2] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. p. 191–196.

[3] SENADO FEDERAL. *Portal e-Cidadania: Eventos Interativos*. Disponível em: <https://www12.senado.leg.br/ecidadania/principalaudiencia>. Acesso em: 24 out. 2026.

[4] SALES, André Barros de. *Plano de Ensino FIHC 022026 — Turma 01*, v1. FCTE/UnB, 2026. Cronograma das Etapas 4 e 5.

[5] GRUPO 06. [Storyboard de Letícia Oliveira](storyboard.md); [Planejamento da Avaliação da HTA](planejamento-avaliacao-analise-tarefas.md); [Persona Letícia Oliveira](../../../entrega-2/individual/heitor/persona.md). 2026.
