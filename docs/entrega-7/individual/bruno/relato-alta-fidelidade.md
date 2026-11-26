<span class="owner">Responsável: Bruno Ferreira Dornelas · Autor do item: Bruno Ferreira Dornelas</span>

# Relato da avaliação de alta fidelidade — complementos de ideias legislativas

## Tabela de contribuição

A Tabela 1 registra as contribuições na preparação deste artefato.

| Integrante / ferramenta | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Planejamento de origem, condução das sessões, análise dos resultados e propostas de reprojeto | [Introdução](#introducao) |
| Codex (OpenAI) e Antigravity | Apoio à organização documental, consolidação das evidências e revisão editorial | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuições neste artefato.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Introdução

Este relato apresenta os resultados da avaliação do protótipo de alta fidelidade de **sugestão e acompanhamento de complementos de ideias legislativas** no Portal e-Cidadania, em continuidade ao [planejamento da avaliação](../../../entrega-6/individual/bruno/planejamento-avaliacao-alta-fidelidade.md) [1] e ao [planejamento do relato](../../../entrega-6/individual/bruno/planejamento-relato-alta-fidelidade.md) [2] publicados na Etapa 6. O documento consolida três sessões presenciais, responde às perguntas de avaliação, confronta as decisões vindas do protótipo de papel [4] e define prioridades de reprojeto.

Os achados estão vinculados aos seis registros audiovisuais organizados em [vídeos e evidências](evidencias.md).

[Abrir protótipo de alta fidelidade](../../../prototipos/bruno/alta-fidelidade/index.html){ .md-button .md-button--primary }
[Vídeos e evidências](evidencias.md){ .md-button }

### Fundamentação do relato

**Autor do item:** Bruno Ferreira Dornelas.

Barbosa e Silva [3, p. 343] orientam relacionar ações na interface, verbalizações e medições para interpretar os problemas observados. O relato do teste de usabilidade reúne objetivos, método, perfis envolvidos, tarefas, indicadores e problemas com local, evidência, fator de usabilidade prejudicado e proposta de correção, conforme a Figura 1.

??? note "Figura 1 — Conteúdo do relato do teste de usabilidade"

    ![Página 343 de Barbosa e Silva, com orientação para análise conjunta das evidências e descrição dos componentes do relato.](../../../assets/img/entrega-6/referencias/barbosa-p343.png){ loading=lazy }
    <p class="caption">Figura 1 — Análise dos dados e conteúdo do relato.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 343 [3]).</p>

## 1. Objetivos e escopo

- **Avaliar decisões de design vindas do papel:** verificar na interface navegável a identificação de autoria, a comparação lado a lado entre texto original e ajuste sugerido, os avisos de espera e a separação entre contadores de apoios [1, 4].
- **Identificar problemas de interação e compreensão:** localizar barreiras na entrada do fluxo, no preenchimento e revisão do formulário, na decisão sobre o ajuste do autor da ideia e no acompanhamento da publicação e do encaminhamento à comissão [1].

O escopo cobre quatro tarefas encadeadas, da localização da ideia legislativa à consulta do anexo consultivo encaminhado à Comissão de Direitos Humanos e Legislação Participativa (CDH). Outros serviços do portal, acompanhamento longitudinal e comparação cronometrada com o portal oficial ficam fora deste recorte. A análise combina inspeção das gravações de tela e ambiente, paráfrases das falas registradas nos vídeos e anotações de observação presencial.

## 2. Pessoas, material e condições

<span id="material-avaliado"></span>

Foram conduzidas três sessões individuais presenciais em **11/11/2026, por volta das 9h**, no **contêiner da EJS (UnB Gama)**. Cada participante conta com dois ângulos de vídeo (tela e ambiente), totalizando **seis vídeos referentes a três avaliações**. A Tabela 2 sintetiza os perfis, o material congelado e as condições efetivas de coleta.

| Campo | Registro efetivo |
| --- | --- |
| Moderador e observador | Moderação: Bruno Ferreira Dornelas · Observação e anotações: Caio Breno de Souza Bezerra |
| Participantes (`N = 3`) | Participantes 1, 2 e 3: estudantes de engenharia, de 20 a 21 anos, com alta familiaridade tecnológica e familiaridade parcial com participação legislativa |
| Contato prévio | Conheciam o site do Senado e o envio de ideias legislativas, mas não tinham contato prévio com o protótipo de complementos |
| Data, horário e local | 11/11/2026, por volta das 9h, presencial, no contêiner da EJS, UnB Gama |
| Ambiente e navegador | Notebook (com mouse externo na sessão 2) executando o protótipo em HTML no Microsoft Edge |
| Versão avaliada e congelamento | Código HTML congelado em **10/11/2026** no [commit `a389cd0`](https://github.com/Interacao-Humano-Computador/2026.2-Grupo06/tree/a389cd0b5afb5006efdb691cbe9d58e7df151052/docs/prototipos/bruno/alta-fidelidade), idêntico ao [protótipo navegável publicado](../../../prototipos/bruno/alta-fidelidade/index.html), sem alterações entre sessões ou após a coleta |
| Duração das gravações | Participante 1: tela 6min40s / ambiente 6min39s · Participante 2: tela 6min10s / ambiente 6min11s · Participante 3: tela 7min38s / ambiente 7min33s |
| Consentimento ético | Os três participantes autorizaram expressamente a participação, a gravação de tela e ambiente e a divulgação pública dos vídeos como não listados ([TCLE Participante 1](../../../assets/docs/tcle/tcle-bruno-etapa7-P1-assinado.pdf) · [TCLE Participante 3](../../../assets/docs/tcle/tcle-bruno-etapa7-P3-assinado.pdf); demais registros sob guarda privada) |
| Teste-piloto | Não realizado, por esquecimento; nenhum dado de ensaio compõe a amostra |

<p class="caption">Tabela 2 — Pessoas, material avaliado e condições efetivas das sessões.</p>
<p class="source">Fonte: registros da coleta presencial, repositório do projeto e página de evidências (2026).</p>

### Teste-piloto

O teste-piloto previsto no planejamento não foi realizado antes das três sessões principais, por esquecimento na preparação do encontro matutino. Por essa razão, não há dados de piloto a separar da amostra principal, e eventuais ajustes na forma de apresentar o cenário e conduzir os gatilhos de simulação não passaram por ensaio prévio.

### Diferenças entre planejamento e execução

A Tabela 3 confronta o protocolo previsto na versão `1.1` dos planejamentos da Etapa 6 (09/11/2026) com a aplicação realizada em 11/11/2026 e indica o efeito de cada mudança na interpretação dos resultados.

| Aspecto | Planejado (Etapa 6, `v1.1`) | Realizado em 11/11/2026 e efeito na análise |
| --- | --- | --- |
| Horário e local | Sessões às 18h, 19h e 20h, em sala a definir | Realizadas por volta das 9h, no contêiner da EJS (UnB Gama), conforme disponibilidade dos participantes e da equipe |
| Observação | Luís Henrique sugerido como observador | Caio Breno acompanhou presencialmente as três sessões e registrou anotações utilizadas na consolidação |
| Teste-piloto | Ensaio prévio separado da coleta principal | Não realizado por esquecimento; registrado como limitação de preparo do roteiro |
| Apresentação das tarefas | Enunciados entregues um por vez | Visão geral do fluxo apresentada na abertura e apoio na ativação de estados simulados; considerado na classificação de busca e acompanhamento |
| Avaliação de satisfação | Nota de 1 a 5 ao fim de cada tarefa | Coletada uma nota global de 1 a 5 ao final da sessão (`4/5`, `5/5` e `4,5/5`), associando comentários qualitativos às tarefas |
| Medições quantitativas | Tempo ativo por tarefa e contagem total de erros | Classificação de conclusão por tarefa, intervalos localizadores nos vídeos e registro qualitativo dos episódios de dúvida ou recuperação |
| Gravação | Tela e áudio sem exibição de rosto | Gravação sincronizada em dois ângulos (tela e câmera de ambiente), mediante autorização de participação, gravação e divulgação dos três participantes |

<p class="caption">Tabela 3 — Diferenças entre planejamento e execução.</p>
<p class="source">Fonte: comparação entre os planos da Etapa 6 [1–2] e os registros da coleta (2026).</p>

## 3. Tarefas, desempenho e opinião

As quatro tarefas cobriram:

1. **Busca da ideia:** localizar a ideia sobre horário noturno em bibliotecas, abrir seus detalhes e acionar a opção de sugerir complemento.
2. **Envio do complemento:** redigir proposta e justificativa, conferir a prévia, marcar a confirmação de revisão e enviar a contribuição.
3. **Decisão sobre o ajuste:** comparar o texto enviado com o ajuste sugerido pelo autor da ideia e registrar concordância ou discordância.
4. **Acompanhamento da contribuição:** consultar o complemento publicado (autoria e contadores de apoio) e verificar o encaminhamento consultivo à CDH com o anexo de contribuições.

Cada tarefa foi classificada em **concluída sem ajuda** (operação executada sem orientação sobre quais controles acionar) ou **indício de conclusão com ajuda** (resultado alcançado após instrução prévia do caminho na abertura ou apoio para acionar estados simulados). Os intervalos da Tabela 4 são localizadores na gravação de tela de cada sessão, não medidas de tempo ativo.

| Participante / tarefa | Intervalo (tela) e evidência | Ações observadas e compreensão | Classificação |
| --- | --- | --- | --- |
| **Participante 1** · Busca da ideia | `01:13–01:34` · [Evidências P1](evidencias.md#participante-1) | Abre os detalhes da ideia de bibliotecas e entra na sugestão de complemento após a apresentação geral do fluxo na abertura; na entrevista relata demora inicial para notar o acesso | Indício de conclusão com ajuda |
| **Participante 1** · Envio do complemento | `01:34–03:00` · [Tela 02:40](https://youtu.be/8syZ8h5umsc?t=160) | Preenche título (*“Uso noturno”*) e justificativa, revisa na prévia e confirma o envio sem intervenção na operação do formulário | Concluída sem ajuda |
| **Participante 1** · Decisão sobre o ajuste | `03:19–03:53` · [Tela 03:20](https://youtu.be/8syZ8h5umsc?t=200) | Após simulação da resposta do autor, examina a comparação entre as duas redações e escolhe concordar sem orientação sobre qual decisão tomar | Concluída sem ajuda |
| **Participante 1** · Acompanhamento | `03:53–05:12` · [Tela 04:57](https://youtu.be/8syZ8h5umsc?t=297) | Visualiza o complemento publicado (`04:40`) e a meta atingida com encaminhamento (`05:00`) com apoio na simulação; moderador complementa a explicação sobre tramitação legislativa e o anexo não chega a ser aberto | Indício de conclusão com ajuda |
| **Participante 2** · Busca da ideia | `02:02–02:35` · [Tela 02:28](https://youtu.be/MOw51y1hty0?t=148) | Localiza a ideia de bibliotecas, observa o complemento existente e aciona a opção de sugerir novo complemento após o enquadramento inicial | Indício de conclusão com ajuda |
| **Participante 2** · Envio do complemento | `02:35–03:53` · [Tela 03:22](https://youtu.be/MOw51y1hty0?t=202) · [03:42](https://youtu.be/MOw51y1hty0?t=222) | Redige argumento sobre trabalhadores diurnos, identifica erro no título durante a prévia, retorna para editar, marca a caixa obrigatória e conclui o envio sozinho | Concluída sem ajuda |
| **Participante 2** · Decisão sobre o ajuste | `03:58–04:20` · [Tela 04:04](https://youtu.be/MOw51y1hty0?t=244) | Compara os textos lado a lado, justifica verbalmente que nem toda biblioteca tem condições de abrir à noite e registra concordância | Concluída sem ajuda |
| **Participante 2** · Acompanhamento | `04:20–05:08` · [Tela 04:56](https://youtu.be/MOw51y1hty0?t=296) · [Entrevista 05:33](https://youtu.be/MOw51y1hty0?t=333) | Reconhece a própria contribuição com 40 apoios (`04:46`) e chega ao estado encaminhado à CDH, mas interpreta inicialmente como votação e relata dúvida sobre mínimo de apoios antes de reler a tela | Indício de conclusão com ajuda |
| **Participante 3** · Busca da ideia | `02:29–02:59` · [Tela 02:42](https://youtu.be/bbDlreTH3uw?t=162) | Distingue complementar de criar nova ideia, localiza o card por rolagem após a explicação inicial e abre o fluxo de complemento | Indício de conclusão com ajuda |
| **Participante 3** · Envio do complemento | `02:59–03:24` e `03:44–03:52` · [Tela 03:13](https://youtu.be/bbDlreTH3uw?t=193) | Preenche sequências de teste para experimentar os controles, marca a confirmação e envia sem ajuda; na entrevista aponta que o checkbox de confirmação é pequeno e pouco destacado (`06:34`) | Concluída sem ajuda |
| **Participante 3** · Decisão sobre o ajuste | `03:24–04:01` · [Tela 03:34](https://youtu.be/bbDlreTH3uw?t=214) · [Entrevista 05:53](https://youtu.be/bbDlreTH3uw?t=353) | Explora espontaneamente o ramo de discordância, reenvia o texto e depois concorda com o ajuste; ao final pergunta se o autor pode responder novamente após uma discordância | Concluída sem ajuda |
| **Participante 3** · Acompanhamento | `04:01–05:15` · [Tela 04:35](https://youtu.be/bbDlreTH3uw?t=275) · [05:05](https://youtu.be/bbDlreTH3uw?t=305) | Testa o botão de apoio nos complementos publicados, abre o anexo consultivo encaminhado à CDH (`04:50–05:05`) e reconhece as duas contribuições reunidas no documento | Indício de conclusão com ajuda |

<p class="caption">Tabela 4 — Desempenho e evidências por participante e tarefa.</p>
<p class="source">Fonte: análise das gravações de tela e ambiente das três sessões (2026).</p>

### Síntese individual e satisfação global

<span id="participante-1"></span>

- **Participante 1 — Nota global `4/5`** ([registros e falas](evidencias.md#participante-1), participação, gravação e divulgação autorizadas): considerou o fluxo intuitivo e elogiou a tela de revisão antes do envio (`05:39–06:27`), mas apontou que o botão de acesso ao complemento na página da ideia precisa de maior destaque visual.

<span id="participante-2"></span>

- **Participante 2 — Nota global `5/5`** ([registros e falas](evidencias.md#participante-2), participação, gravação e divulgação autorizadas): destacou a fluidez do percurso e usou a prévia para recuperar um erro de digitação no título; ressalvou dúvida inicial sobre a relação entre número mínimo de apoios e encaminhamento à CDH (`05:33–06:08`), esclarecida parcialmente após releitura.

<span id="participante-3"></span>

- **Participante 3 — Nota global `4,5/5`** ([registros e falas](evidencias.md#participante-3), participação, gravação e divulgação autorizadas): único participante a exercitar o ramo de discordância e abrir o anexo consultivo completo; avaliou positivamente o fluxo, ressalvando o baixo destaque visual da caixa de confirmação na prévia (`06:34–07:06`) e a dúvida sobre nova rodada de resposta do autor após discordar (`05:53–06:21`).

### Consolidação dos indicadores

A Tabela 5 resume as taxas de conclusão no formato **`x/N`**, onde `x` é o número de participantes na categoria e `N = 3` é o total exposto a cada tarefa.

| Tarefa | Expostos (`N`) | Concluída sem ajuda | Indício de conclusão com ajuda | Não concluída | Não avaliada | Síntese |
| --- | :---: | :---: | :---: | :---: | :---: | --- |
| Busca da ideia | 3 | `0/3` | `3/3` | `0/3` | `0/3` | Entrada realizada após enquadramento inicial do fluxo; descoberta espontânea requer novo teste com enunciado neutro |
| Envio do complemento | 3 | `3/3` | `0/3` | `0/3` | `0/3` | Preenchimento, prévia e envio operados sem auxílio; P2 recuperou erro no título durante a revisão |
| Decisão sobre o ajuste | 3 | `3/3` | `0/3` | `0/3` | `0/3` | Decisão registrada sem instrução de escolha; P2 justificou pelo mérito do texto e P3 exercitou discordância e reenvio |
| Acompanhamento da contribuição | 3 | `0/3` | `3/3` | `0/3` | `0/3` | Publicação e estado na CDH consultados com mediação das simulações; abertura do anexo observada em `1/3` (P3) |

<p class="caption">Tabela 5 — Conclusão das tarefas e ajuda recebida (N = 3).</p>
<p class="source">Fonte: consolidação das três sessões presenciais (2026).</p>

## 4. Análise das perguntas e das decisões do papel

### Perguntas da avaliação

A Tabela 6 responde às sete perguntas definidas nos planejamentos da Etapa 6 [1–2].

| Pergunta de avaliação | Resposta apoiada nos dados | Evidência principal e encaminhamento |
| --- | --- | --- |
| **Q1.** Localizar a ideia e acessar a opção de complementar | `3/3` acessaram com orientação inicial do percurso; P1 pediu maior destaque visual para a entrada | [P1, entrevista 05:39](https://youtu.be/8syZ8h5umsc?t=339) · Destacar chamada na página da ideia e retestar sem nomear o botão na abertura |
| **Q2.** Redigir, revisar, enviar e reconhecer espera e e-mail | `3/3` concluíram o envio sem ajuda; a prévia permitiu a P2 corrigir o título, mas o aviso de notificação por e-mail não foi verbalizado espontaneamente | [P2, tela 03:11–03:42](https://youtu.be/MOw51y1hty0?t=191) · Sondar compreensão do estado de espera antes de acionar a simulação |
| **Q3.** Comparar os textos e compreender a continuidade após concordar ou discordar | `3/3` operaram a decisão sem ajuda; P2 fundamentou a concordância no destaque comparativo e P3 percorreu discordância e reenvio, mas teve dúvida sobre nova resposta do autor | [P2, 04:04](https://youtu.be/MOw51y1hty0?t=244) · [P3, 05:53](https://youtu.be/bbDlreTH3uw?t=353) · Explicitar na tela a regra de encerramento ou revisão após discordar |
| **Q4.** Reconhecer autoria própria e distinguir contadores | P2 reconheceu seus 40 apoios (`04:46`) e P3 interagiu com o contador de terceiros (`04:35`), porém a independência frente à meta de 20 mil apoios da ideia ainda gerou dúvida final em P2 | [P2, 04:46](https://youtu.be/MOw51y1hty0?t=286) · [P3, 04:35](https://youtu.be/bbDlreTH3uw?t=275) · Explicar juntos a meta da ideia principal e o papel consultivo dos apoios ao complemento |
| **Q5.** Distinguir publicação de encaminhamento e localizar o anexo | `3/3` chegaram ao estado encaminhado com mediação das simulações e `1/3` (P3) abriu o anexo; P2 associou inicialmente o encaminhamento à votação parlamentar | [P2, 04:53](https://youtu.be/MOw51y1hty0?t=293) · [P3, 05:05](https://youtu.be/bbDlreTH3uw?t=305) · Reforçar no topo do estado encaminhado que se trata de subsídio consultivo à comissão |
| **Q6.** Dificuldades percebidas e satisfação geral | Satisfação global alta (`4/5`, `5/5` e `4,5/5`), acompanhada de quatro ressalvas objetivas de interface e compreensão | Entrevistas finais de P1, P2 e P3 e Tabela 8 · Manter nota global combinada a sondagens curtas por etapa |
| **Q7.** Efeito das decisões herdadas do protótipo de papel | Revisão, comparação lado a lado e ramo de discordância funcionaram operacionalmente; a semântica legislativa do encaminhamento segue como principal ponto de atenção | Tabela 7 e [relato do papel](../../../entrega-6/individual/bruno/relato-prototipo-papel.md) [4] |

<p class="caption">Tabela 6 — Respostas às perguntas da avaliação.</p>
<p class="source">Fonte: planos da Etapa 6 [1–2] e evidências das três sessões (2026).</p>

### Verificação das decisões do protótipo de papel

A Tabela 7 confronta as quatro decisões de reprojeto originadas no protótipo de papel [4] com o comportamento observado na alta fidelidade.

| Problema de origem no papel | Decisão implementada na alta fidelidade | Evidência observada nas sessões | Situação após a Etapa 7 |
| --- | --- | --- | --- |
| Autoria ambígua no complemento publicado | Exibir identificação da autora e rótulo de contribuição própria | P2 reconheceu o card publicado como sua contribuição (`04:46`) e P3 diferenciou o card próprio do complemento de terceiros (`04:35`) | Atendida na identificação visual; manter sondagem específica na próxima rodada |
| Comparação incompleta e ausência do ramo de discordância | Exibir redação original e ajuste lado a lado e habilitar fluxo de discordância | P2 usou o trecho destacado para justificar o aceite (`04:04`); P3 registrou discordância, reenviou e concluiu (`03:24–04:01`) | Viabilidade operacional confirmada; esclarecer regra de continuidade após discordar |
| Espera e notificação por e-mail pouco explícitas | Informar envio de aviso por e-mail e permitir consulta de andamento | Transição operada nas três sessões com simulação mediada; nenhum participante comentou espontaneamente o aviso por e-mail | Recurso presente na tela, mas compreensão espontânea ainda não comprovada |
| Relação confusa entre apoios e encaminhamento legislativo | Separar contadores e reunir contribuições em anexo consultivo à CDH | P3 abriu o anexo com os dois complementos (`05:05`), mas P2 ainda hesitou sobre meta mínima de apoios e votação (`04:53`, `05:33`) | Exige ajuste prioritário de microtexto e hierarquia na tela de encaminhamento |

<p class="caption">Tabela 7 — Continuidade entre o protótipo de papel e a alta fidelidade.</p>
<p class="source">Fonte: relato do protótipo de papel [4] e resultados da Etapa 7 (2026).</p>

## 5. Problemas e decisões de reprojeto

A Tabela 8 consolida os quatro problemas identificados nas sessões, convergentes entre a análise dos vídeos e as anotações presenciais do observador Caio Breno. A frequência indica participantes que manifestaram o problema em relação aos expostos à respectiva tela ou ramo. Todas as melhorias têm **implementação proposta sob responsabilidade de Bruno Ferreira Dornelas**, **sem aplicação no código nem reteste nesta etapa**.

| ID e local | Fator de usabilidade | Problema observado e hipótese de causa | Evidência e frequência | Prioridade | Proposta de reprojeto e status |
| --- | --- | --- | --- | :---: | --- |
| **AF-B01** · Acompanhamento (encaminhamento à CDH) | Compreensão dos estados do sistema | P2 interpretou o encaminhamento à CDH como ida direta à votação parlamentar e teve dúvida sobre mínimo de apoios exigido para o complemento. *Hipótese:* proximidade entre a meta de 20 mil apoios da ideia e o contador próprio sem resumo unificado da regra. | [Tela 04:53](https://youtu.be/MOw51y1hty0?t=293) e [entrevista 05:33](https://youtu.be/MOw51y1hty0?t=333) (`1/3` com relato explícito; P1 também recebeu explicação do moderador) | **Alta** | Explicitar em bloco único que a meta de 20 mil apoios pertence à ideia principal e que os complementos seguem juntos em anexo consultivo para análise da comissão, não aprovação automática · *Proposta, não reavaliada* |
| **AF-B02** · Página de detalhes da ideia (busca) | Facilidade de localização | P1 relatou demora inicial para localizar a ação de sugerir complemento e sugeriu maior destaque visual. *Hipótese:* competição visual com o cabeçalho e o contador principal de apoio à ideia. | [Entrevista 05:39–06:27](https://youtu.be/8syZ8h5umsc?t=339) (`1/3` entre os expostos) | **Média** | Destacar a chamada contextual de sugerir complemento logo abaixo do resumo da ideia e retestar a descoberta com enunciado neutro · *Proposta, não reavaliada* |
| **AF-B03** · Resposta do autor (ramo de discordância) | Previsibilidade e continuidade do fluxo | P3 perguntou na entrevista se o autor pode enviar nova proposta de ajuste após uma discordância; a explicação verbal de encerramento divergiu da opção de revisão ainda aberta no protótipo. *Hipótese:* falta de instrução explícita sobre o desfecho definitivo da recusa. | [Entrevista 05:53–06:21](https://youtu.be/bbDlreTH3uw?t=353) (`1/1` entre quem explorou o ramo de discordância) | **Média** | Definir regra única para a recusa do ajuste e alinhar rótulos da tela, mensagem de confirmação e roteiro · *Proposta, não reavaliada* |
| **AF-B04** · Prévia de revisão do complemento | Visibilidade e prevenção de erros | P3 avaliou a caixa obrigatória de confirmação de leitura como pequena e próxima da cor de fundo, podendo passar despercebida antes do clique em enviar. *Hipótese:* baixo destaque visual do controle em relação ao botão primário. | [Tela 03:13](https://youtu.be/bbDlreTH3uw?t=193) e [entrevista 06:34](https://youtu.be/bbDlreTH3uw?t=394) (`1/3` com queixa explícita) | **Média** | Ampliar a área clicável e o contraste do bloco de confirmação próximo ao botão de envio · *Proposta, não reavaliada* |

<p class="caption">Tabela 8 — Problemas identificados e propostas de reprojeto.</p>
<p class="source">Fonte: registros audiovisuais das três sessões e anotações da observação presencial (2026).</p>

**Escala de priorização:** prioridade **alta** aplica-se a falhas de interpretação sobre autoria, apoios ou efeito legislativo da participação; **média**, a atritos de localização, visibilidade de controles ou dúvidas de continuidade sem bloqueio da tarefa.

**Verificação técnica complementar (`76` vs. `75` apoios no teste 3):** na gravação do Participante 3, o complemento de acessibilidade exibe `76` apoios na página da ideia (`04:35`) e `75` ao abrir o anexo (`05:05`), sem reação verbal do participante. A inspeção do código congelado em `a389cd0` mostrou que ambos os estados leem a mesma variável, indicando provável clique intermediário no botão de apoiar/retirar apoio durante a exploração livre, razão pela qual o episódio não foi classificado como defeito confirmado.

## 6. Conclusões e limites

A avaliação cumpriu o objetivo formativo de testar o percurso completo em alta fidelidade e verificar as soluções trazidas do protótipo de papel. Os três participantes concluíram **sem ajuda** o envio do complemento (`3/3`) e a decisão sobre o ajuste (`3/3`), e alcançaram **com mediação de percurso/simulação** a busca inicial (`3/3`) e o acompanhamento até o encaminhamento à CDH (`3/3`), atribuindo notas globais de **4/5**, **5/5** e **4,5/5**. A etapa de revisão permitiu recuperação real de erro de digitação no segundo teste, a comparação lado a lado sustentou justificativa de mérito e o ramo de discordância mais o anexo consultivo mostraram-se navegáveis no terceiro teste.

Os resultados devem ser interpretados dentro dos limites metodológicos desta rodada: amostra restrita a três estudantes de engenharia (20 a 21 anos) com alta familiaridade digital, ausência de teste-piloto, apresentação antecipada do fluxo na abertura, estados intermediários acionados por simulação e uso de texto de teste pelo Participante 3. Para uma próxima iteração, recomenda-se aplicar as quatro melhorias propostas na Tabela 8 (começando pela clareza do encaminhamento consultivo à CDH), conduzir piloto separado e apresentar apenas o objetivo do cenário para medir descoberta espontânea e compreensão autônoma dos contadores. O [vídeo de apresentação da Etapa 7](../../../apresentacoes/etapa-07.md#bruno-ferreira-dornelas) sintetiza este relato.

## Agradecimentos

Utilizei o Codex (OpenAI) e o Antigravity como apoio à organização documental, à consolidação das evidências audiovisuais e à revisão editorial deste relato. Assumo integralmente a responsabilidade acadêmica pelo conteúdo.

## Histórico de versão

A Tabela 9 registra o histórico de versões deste relato.

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `1.0` | 13/11/2026 | Estrutura inicial do relato para três participantes | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.1` | 13/11/2026 | Registro preliminar do Participante 1 e nomes descritivos | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.2` | 13/11/2026 | Vídeos, localizadores e análise preliminar do Participante 2 | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.3` | 13/11/2026 | Vídeos e análise preliminar do Participante 3 | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.4` | 13/11/2026 | Consolidação dos três testes, indicadores e prioridades | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.5` | 13/11/2026 | Confirmação das notas de P1 e P2 e alinhamento aos planos | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.6` | 13/11/2026 | Confirmação da nota de P3 e consistência com a Etapa 6 | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.7` | 15/11/2026 | Atualização de dados de participantes, aplicação e revisão | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.8` | 15/11/2026 | Confirmação da autorização de divulgação dos vídeos | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.9` | 15/11/2026 | Padronização da voz narrativa e revisão editorial | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.10` | 15/11/2026 | Ajuste descritivo dos dados da coleta | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.11` | 15/11/2026 | Reclassificação da execução das tarefas e limitações | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.12` | 15/11/2026 | Ajuste na classificação da decisão sobre o ajuste | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.13` | 15/11/2026 | Inclusão do vídeo de apresentação individual | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.14` | 15/11/2026 | Ajuste nas chamadas de tabelas, contagens e link do protótipo | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.15` | 15/11/2026 | Identificação da versão testada e vínculo com o repositório | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.16` | 25/11/2026 | Consolidação de tabelas redundantes, data de congelamento do commit e revisão editorial | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.17` | 26/11/2026 | Vincula na Tabela 2 os PDFs dos TCLEs assinados dos Participantes 1 e 3 | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |

<p class="caption">Tabela 9 — Histórico de versão.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Referências

[1] GRUPO 06. [Planejamento da avaliação de alta fidelidade](../../../entrega-6/individual/bruno/planejamento-avaliacao-alta-fidelidade.md). Versão 1.9, de 15/11/2026; versão 1.1, de 09/11/2026, usada como referência da comparação histórica.

[2] GRUPO 06. [Planejamento do relato de alta fidelidade](../../../entrega-6/individual/bruno/planejamento-relato-alta-fidelidade.md). Versão 1.9, de 15/11/2026; versão 1.1, de 09/11/2026, usada como referência da comparação histórica.

[3] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. p. 343.

[4] GRUPO 06. [Relato da avaliação do protótipo de papel](../../../entrega-6/individual/bruno/relato-prototipo-papel.md) e [roteiro do teste presencial](../../../entrega-6/individual/bruno/roteiro-teste-presencial.md). 2026.
