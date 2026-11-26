<span class="owner">Responsável: Israel Soares de Paiva · Autor do item: Israel Soares de Paiva</span>

# Relato da avaliação de alta fidelidade

## Tabela de contribuição

A Tabela 1 identifica as contribuições neste artefato.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Israel Soares de Paiva](https://github.com/IsraelSoares-25) | Consolidação das sessões, análise de usabilidade, triagem de Krug e decisões de reprojeto | [Conteúdo](#introducao) |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Revisão técnica de consistência | [Histórico de versão](#historico-de-versao) |
| [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | Conferência dos vídeos, dos resultados por tarefa e dos desvios do procedimento | [Desempenho e opinião](#tarefas-desempenho-e-opiniao) |
| Codex (OpenAI) | Apoio à conferência e à documentação dos ajustes | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuições neste artefato.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Introdução

Este relato apresenta os resultados consolidados da avaliação de usabilidade do **protótipo navegável AF-1.0 de agendamento de visita ao Senado Federal**, dando cumprimento e continuidade ao [planejamento da avaliação](../../../entrega-6/individual/israel/planejamento-avaliacao-alta-fidelidade.md) e ao [planejamento do relato](../../../entrega-6/individual/israel/planejamento-relato-alta-fidelidade.md).

As evidências empíricas foram obtidas por meio de sessões de teste com gravação de tela e áudio disponibilizadas no YouTube, catalogadas com minutagens detalhadas na página de evidências.

<div class="etapa-actions" markdown>

[Vídeos e localizadores](evidencias.md){ .md-button .md-button--primary }
[Protótipo avaliado](../../../prototipos/israel/alta-fidelidade/index.html){ .md-button }

</div>

## Objetivos e método

**Autor do item:** Israel Soares de Paiva.

O objetivo geral foi avaliar empiricamente se a interface navegável AF-1.0 soluciona os problemas observados nas etapas anteriores e viabiliza um agendamento seguro, claro e autônomo. Foram investigados cinco objetivos operacionais:
* **AF-O1:** Encontrabilidade do serviço e assimilação prévia das regras de visitação (documentos e vestimenta);
* **AF-O2:** Seleção intuitiva de quantidade de visitantes, data e horário com base na legenda de vagas do calendário;
* **AF-O3:** Preenchimento dos dados do responsável e correta localização e marcação do suporte de acessibilidade (cadeira de rodas);
* **AF-O4:** Capacidade de revisar os dados, perceber incongruências (telefone incorreto) e acionar a correção sem perda dos dados digitados;
* **AF-O5:** Reconhecimento do código de confirmação gerado e compreensão de como portar o comprovante no dia da visita.

O recorte tem como base a [persona Marta Oliveira](../../../entrega-2/individual/israel/persona.md) e retoma diretamente os encaminhamentos **PAP-R01 a PAP-R06** formulados no [relato do protótipo de papel](../../../entrega-6/individual/israel/relato-prototipo-papel.md#analise-do-reprojeto).

A abordagem metodológica seguiu o protocolo de **teste de usabilidade moderado formativo**, adotando a técnica enxuta de Steve Krug (2010) com *Thinking Aloud* (pensar em voz alta) e triagem imediata de problemas no mesmo dia. As pessoas operaram o protótipo no navegador, no mesmo ambiente que o moderador. O moderador apresentou um cenário contínuo de agendamento e conduziu a entrevista depois do uso.

A organização deste relato segue a estrutura canônica recomendada por Barbosa e Silva (2010, p. 341–343): objetivos, método, participantes, desempenho nas tarefas, opiniões expressas, problemas encontrados e propostas de reprojeto.

## Pessoas, material e condições

A Tabela 2 descreve as condições operacionais, equipe, recursos, gravações e salvaguardas éticas adotadas na avaliação.

| Campo | Registro / Condições Efetivas |
| --- | --- |
| **Moderador / avaliador** | Israel Soares de Paiva, responsável pela recepção, leitura dos cenários e moderação neutra |
| **Observação / anotações** | Bruno Ferreira Dornelas, registrando erros, hesitações e falas espontâneas |
| **Amostragem (Steve Krug)** | 2 participantes principais (`AF-P01` e `AF-P02`) com gravações integrais publicadas, mais 1 colaborador para calibração piloto prévia (`AF-PILOTO01`) |
| **Gravações em vídeo** | `AF-P01` gravado em 4m 49s ([IHC Prot 1](https://www.youtube.com/watch?v=Ss59Jh5vNkw)); `AF-P02` gravado em 5m 37s ([IHC Prot 2](https://www.youtube.com/watch?v=_DLqNBgA2-w)) |
| **Modalidade e ferramentas** | Presencial, com participante e moderador na mesma bancada. Gravação de tela, áudio e duas perspectivas de câmera |
| **Material avaliado** | Protótipo de alta fidelidade navegável **AF-1.0** (HTML/CSS/JavaScript puro, disponível no repositório) |
| **Data e horários** | O [primeiro relato, registrado em 12/11/2026](https://github.com/Interacao-Humano-Computador/2026.2-Grupo06/blob/02c7792/docs/entrega-7/individual/israel/relato-alta-fidelidade.md), situa a coleta entre 10 e 12/11. Os vídeos foram publicados em 15/11. O dia e o horário de cada sessão não aparecem nas gravações |
| **Aspectos éticos** | O relato registra concordância com o TCLE antes da coleta. A abertura de [AF-P01, 00:09–00:17](https://youtu.be/Ss59Jh5vNkw?t=9), menciona autorização de gravação e divulgação. A de [AF-P02, 00:14–00:21](https://youtu.be/_DLqNBgA2-w?t=14), menciona a gravação e o uso de link não listado. Os termos assinados ficam sob guarda privada |
| **Sessão piloto** | Realizada com `AF-PILOTO01` em 08/11, conforme o primeiro relato, para calibrar o roteiro de tarefas, temporização e legibilidade do protótipo |

<p class="caption">Tabela 2 — Condições operacionais, pessoas e ambiente do teste de usabilidade.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

A Tabela 3 consolida o perfil e os metadados dos participantes avaliados.

| Identificador | Perfil / Ocupação | Familiaridade com Tecnologia | Experiência Prévia com Agendamento | Registro em Vídeo | Conformidade TCLE |
| :---: | --- | :---: | :---: | :---: | :---: |
| `AF-PILOTO01` | Estudante universitário, 22 anos | Alta | Frequente em serviços acadêmicos | Sem gravação externa | Assinado |
| `AF-P01` | Servidora pública, 48 anos | Média | Ocasional (detran, consultas) | [IHC Prot 1 (4m 49s)](https://www.youtube.com/watch?v=Ss59Jh5vNkw) | Assinado |
| `AF-P02` | Professor da rede básica, 45 anos | Média | Baixa em portais federais | [IHC Prot 2 (5m 37s)](https://www.youtube.com/watch?v=_DLqNBgA2-w) | Assinado |

<p class="caption">Tabela 3 — Caracterização sociodemográfica dos participantes e correspondência audiovisual.</p>
<p class="source">Fonte: questionário de perfil pré-teste e gravações no YouTube (2026).</p>

### Diferenças em relação ao planejamento

O [plano da Etapa 6](../../../entrega-6/individual/israel/planejamento-avaliacao-alta-fidelidade.md#pessoas-local-e-recursos) previa **uma pessoa na sessão principal e outra no piloto**. O [modelo do relato](../../../entrega-6/individual/israel/planejamento-relato-alta-fidelidade.md#amostra-do-relato) considerava ampliar a rodada para três ou quatro pessoas. A execução teve **duas pessoas na avaliação principal**, `AF-P01` e `AF-P02`, com o piloto `AF-PILOTO01` em separado. Assim, as comparações das perguntas AF-Q1–AF-Q6 consideram somente as sessões principais e indicam a cobertura por tarefa. Com duas observações, as proporções da Tabela 6 descrevem a rodada e servem à triagem de problemas.

O plano previa Google Meet na logística. Os vídeos mostram as duas sessões presenciais, com captura de tela e da sala. A equipe apresentou um cenário contínuo, sem cartões separados por tarefa. A entrevista colheu opiniões e sugestões. As gravações não registram uma nota numérica M6. Os intervalos abaixo localizam os episódios de cada tarefa dentro do percurso.

## Tarefas, desempenho e opinião

A Tabela 4 identifica as cinco tarefas no percurso gravado. Cada intervalo aponta a um trecho de vídeo e serve para localizar a evidência.

| Participante / tarefa | Minutagem | Ações observadas e condições da execução |
| --- | :---: | --- |
| AF-P01 / AF-T1 | [00:50–01:01](https://youtu.be/Ss59Jh5vNkw?t=50) | Encontrou “Agendar visita” e passou pela página de regras. Não verbalizou requisitos específicos antes de iniciar |
| AF-P01 / AF-T2 | [01:01–01:16](https://youtu.be/Ss59Jh5vNkw?t=61) | Escolheu grupo de três pessoas, dia 5 e horário das 9h. Considerou as 10h antes da seleção final |
| AF-P01 / AF-T3 | [01:16–01:37](https://youtu.be/Ss59Jh5vNkw?t=76) | Usou os dados simulados e explorou as opções de acessibilidade. A revisão ficou sem apoio marcado após a exploração |
| AF-P01 / AF-T4 | [01:37–01:45](https://youtu.be/Ss59Jh5vNkw?t=97) | A revisão mostrou o telefone incompleto. A pessoa abriu “Editar” e usou o controle para corrigir o telefone |
| AF-P01 / AF-T5 | [01:45–01:57](https://youtu.be/Ss59Jh5vNkw?t=105) | Chegou à confirmação com código e PDF, comentou o comprovante e escolheu “Voltar ao início” |
| AF-P02 / AF-T1 | [00:41–00:57](https://youtu.be/_DLqNBgA2-w?t=41) | Encontrou “Agendar visita”, viu as orientações e mencionou vestimenta e documento com foto |
| AF-P02 / AF-T2 | [00:57–01:16](https://youtu.be/_DLqNBgA2-w?t=57) | Definiu três pessoas e escolheu o dia 5 às 9h, com 12 vagas |
| AF-P02 / AF-T3 | [01:16–01:32](https://youtu.be/_DLqNBgA2-w?t=76) | Preencheu com dados fictícios e selecionou “Outro” na área de acessibilidade |
| AF-P02 / AF-T4 | [01:32–01:57](https://youtu.be/_DLqNBgA2-w?t=92) | Identificou a mensagem de telefone incompleto, acionou “Editar”, usou o telefone corrigido e confirmou |
| AF-P02 / AF-T5 | [01:57–02:15](https://youtu.be/_DLqNBgA2-w?t=117) | Identificou a confirmação, o botão de comprovante e o aviso de envio de cópia por e-mail |

<p class="caption">Tabela 4 — Desempenho observado e localizadores na AF-1.0.</p>
<p class="source">Fonte: gravações IHC Prot 1 e IHC Prot 2, conferidas em 26/11/2026.</p>

A Tabela 5 sintetiza a entrevista de cada pessoa. Os relatos abaixo são paráfrases das falas vinculadas aos vídeos.

| Participante | Minutagem | Percepção registrada | Nota M6 (1–5) |
| --- | :---: | --- | --- |
| AF-P01 | [02:09–04:29](https://youtu.be/Ss59Jh5vNkw?t=129) | Considerou a entrada fácil e o percurso intuitivo. Sugeriu dar mais destaque e melhorar a posição dos avisos de erro | Não aferida |
| AF-P02 | [02:14–05:24](https://youtu.be/_DLqNBgA2-w?t=134) | Considerou as informações claras, mencionou a correção do telefone e explicou que o código e o comprovante dão segurança | Não aferida |

<p class="caption">Tabela 5 — Opiniões e cobertura da escala de satisfação.</p>
<p class="source">Fonte: entrevistas das duas sessões de alta fidelidade (2026).</p>

## Indicadores e perguntas da avaliação

A Tabela 6 confronta as perguntas AF-Q1–AF-Q6 com a cobertura da coleta. As proporções se referem às duas sessões principais. O piloto ficou fora das contagens.

| Pergunta / indicador | Resultado observado | Alcance |
| --- | --- | --- |
| **AF-Q1 / M0** · Encontrar o serviço e ler as regras | 2 de 2 encontraram a entrada. AF-P02 verbalizou vestimenta e documento com foto | Encontrabilidade observada nos dois casos. Compreensão específica das regras confirmada em um |
| **AF-Q2 / M0** · Calendário e vagas | 2 de 2 escolheram três pessoas e um horário matutino com vagas. Na entrevista, as duas pessoas indicaram que entenderam a legenda | Escolha bem-sucedida nas duas sessões. A rodada não aplicou um cenário separado de indisponibilidade |
| **AF-Q3 / M0** · Dados e acessibilidade | 2 de 2 usaram a área de acessibilidade. As seleções finais não confirmaram o apoio de cadeira de rodas previsto no critério do plano | Cobertura parcial. Localizar e explorar o controle foi observado |
| **AF-Q4 / M2 e M3** · Revisão e correção | 2 de 2 usaram “Editar” e corrigiram o telefone de demonstração antes de confirmar | Recuperação observada com o erro simulado. Conclusão restrita às condições do formulário demonstrativo |
| **AF-Q5 / M0** · Confirmação e comprovante | 2 de 2 chegaram à confirmação. AF-P02 explicou na entrevista o uso do código, da data e do comprovante | Reconhecimento da confirmação observado. O aviso de e-mail representa uma simulação |
| **AF-Q6 / M6** · Satisfação | As duas entrevistas registraram opiniões favoráveis. Não há notas de 1 a 5 nos registros consultados | Opinião qualitativa documentada. Meta numérica de M6 não aferida |

<p class="caption">Tabela 6 — Respostas às perguntas e limites por indicador.</p>
<p class="source">Fonte: Tabelas 4 e 5 e critérios do plano da avaliação (2026).</p>

## Problemas e decisões de reprojeto { #problemas-e-decisoes-de-reprojeto-triagem-de-steve-krug }

A Tabela 7 organiza propostas de triagem para a próxima versão. As gravações mostram a AF-1.0 e nenhuma dessas mudanças foi retestada nelas.

| ID / ponto | Evidência | Prioridade | Encaminhamento |
| --- | --- | --- | --- |
| AF-PR01 · Calendário | AF-P01 verbalizou dois horários antes de selecionar 9h ([01:07–01:16](https://youtu.be/Ss59Jh5vNkw?t=67)). Concluiu a escolha | Baixa | Manter horário, vagas e seleção em texto. Conferir contraste e leitura da legenda em uma tarefa de indisponibilidade |
| AF-PR02 · Comprovante | Os dois participantes chegaram à tela com o botão de PDF. AF-P02 destacou seu valor na entrevista ([04:02](https://youtu.be/_DLqNBgA2-w?t=242)) | Baixa | Manter o acesso no mesmo bloco do localizador. Verificar se leitores diferentes o encontrariam sem explicação |
| AF-PR03 · Aviso do telefone | AF-P01 relatou que um aviso periférico poderia passar despercebido e sugeriu uma posição mais destacada ([03:47–04:29](https://youtu.be/Ss59Jh5vNkw?t=227)) | Média | Associar a mensagem ao campo e dar destaque ao aviso na revisão. Testar legibilidade, ausência de dependência de cor e recuperação |

<p class="caption">Tabela 7 — Evidências e propostas para nova rodada.</p>
<p class="source">Fonte: gravações das duas sessões e triagem formativa do recorte (2026).</p>

### Continuidade em relação ao protótipo de papel

A Tabela 8 liga as decisões do [relato do papel](../../../entrega-6/individual/israel/relato-prototipo-papel.md) à AF-1.0.

| Decisão no papel | Resultado na AF-1.0 |
| --- | --- |
| PAP-R01 · Entrada do agendamento | As duas pessoas encontraram a entrada do serviço |
| PAP-R02 · Regras antes do agendamento | A tela aparece nas duas sessões. AF-P02 verbalizou trajes e documento |
| PAP-R03 · Vagas por data e horário | As duas pessoas escolheram uma opção com vagas. Falta observar um cenário em que a data desejada esteja lotada |
| PAP-R04 · Seção de acessibilidade | As duas pessoas interagiram com a seção. A rodada não confirmou a escolha final do apoio de cadeira de rodas |
| PAP-R05 · Correção na revisão | As duas pessoas corrigiram o telefone simulado pelo controle “Editar” |
| PAP-R06 · Confirmação e comprovante | As duas chegaram à confirmação. AF-P02 explicou o uso do comprovante |
| PAP-PR01 · Destino após a confirmação | A AF-1.0 mostra “Voltar ao início” separado de “Alterar / cancelar agendamento”. AF-P01 usou o retorno. O caminho de alteração ou cancelamento ficou fora do teste |

<p class="caption">Tabela 8 — Continuidade do papel para a AF-1.0.</p>
<p class="source">Fonte: relato do papel e gravações das duas sessões (2026).</p>

## Conclusões e próximos passos

As duas pessoas encontraram o serviço, selecionaram um horário com vagas, corrigiram o telefone de demonstração e chegaram à confirmação. As entrevistas indicaram facilidade de navegação. Em uma sessão, a pessoa pediu maior destaque nos avisos de erro. O resultado orienta o ajuste de legibilidade e a avaliação de um cenário explícito de indisponibilidade ou de necessidade de acessibilidade.

A amostra de duas pessoas descreve o cenário gravado. Os dados e as confirmações foram simulados. A coleta não aferiu satisfação numérica, atendimento real, envio de e-mail ou recuperação em todos os tipos de erro. As propostas da Tabela 7 precisam de nova rodada para verificar recorrência.

## Fundamentação consultada

A estrutura deste relato e a análise das sessões apoiam-se na literatura de Interação Humano-Computador de Barbosa e Silva (2010), conforme a Figura 1.

??? note "Figura 1 — Componentes do relato de teste de usabilidade"

    ![Página do livro com a estrutura do relato e a orientação de analisar as causas dos problemas.](../../../assets/img/entrega-6/referencias/barbosa-p343.png){ loading=lazy }
    <p class="caption">Figura 1 — Estrutura do relato de teste de usabilidade.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 343).</p>

## Agradecimentos

O relato apoia-se na fundamentação metodológica de Barbosa e Silva (2010) e Steve Krug (2010). Codex (OpenAI) e a transcrição local com Faster-Whisper apoiaram a comparação entre o plano, os vídeos e o relato para a versão 2.0. Israel Soares de Paiva conduziu a avaliação.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `1.0` | 12/11/2026 | Consolidação dos resultados da avaliação da alta fidelidade, triagem de Krug e decisões de reprojeto | [Israel Soares de Paiva](https://github.com/IsraelSoares-25) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |
| `1.1` | 15/11/2026 | Vinculação direta dos registros audiovisuais do YouTube (IHC Prot 1 e IHC Prot 2) e refinamento dos localizadores por tarefa | [Israel Soares de Paiva](https://github.com/IsraelSoares-25) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |
| `2.0` | 26/11/2026 | Confere modalidade, localizadores, denominadores, opinião e diferenças entre o plano e as sessões realizadas (E7-07, E7-11 e E7-15) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | [Israel Soares de Paiva](https://github.com/IsraelSoares-25) (designado) |
| `2.1` | 26/11/2026 | Recupera a data do piloto e o intervalo indicado no primeiro relato da coleta (D06) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | [Israel Soares de Paiva](https://github.com/IsraelSoares-25) (designado) |

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. Seção 10.2.1, p. 341–343.

[2] KRUG, Steve. *Não me faça pensar (atualizado)*: uma abordagem de bom senso à usabilidade na web e no mobile. Rio de Janeiro: Alta Books, 2014.

[3] SALES, André Barros de. *Plano de Ensino FIHC 022026 — Turma 01*, v1. FCTE/UnB, 2026. Cronograma da Etapa 7, p. 5 do PDF.

[4] GRUPO 06. [Relato do protótipo de papel](../../../entrega-6/individual/israel/relato-prototipo-papel.md), [Planejamento da avaliação da alta fidelidade](../../../entrega-6/individual/israel/planejamento-avaliacao-alta-fidelidade.md) e [Planejamento do relato da alta fidelidade](../../../entrega-6/individual/israel/planejamento-relato-alta-fidelidade.md). 2026.

[5] GRUPO 06. [Evidências e registros audiovisuais da alta fidelidade](evidencias.md). Sessões com [AF-P01 (IHC Prot 1)](https://www.youtube.com/watch?v=Ss59Jh5vNkw) e [AF-P02 (IHC Prot 2)](https://www.youtube.com/watch?v=_DLqNBgA2-w), novembro de 2026.
