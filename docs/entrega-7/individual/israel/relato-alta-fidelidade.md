<span class="owner">Responsável: Israel Soares de Paiva · Autor do item: Israel Soares de Paiva</span>

# Relato da avaliação de alta fidelidade

## Tabela de contribuição

A Tabela 1 identifica as contribuições neste artefato.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Israel Soares de Paiva](https://github.com/IsraelSoares-25) | Consolidação das sessões, análise de usabilidade, triagem de Krug e decisões de reprojeto | [Conteúdo](#introducao) |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Revisão técnica de consistência | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuições neste artefato.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Introdução

Este relato apresenta os resultados consolidados da avaliação de usabilidade do **protótipo navegável AF-1.0 de agendamento de visita ao Senado Federal**, dando cumprimento e continuidade ao [planejamento da avaliação](../../../entrega-6/individual/israel/planejamento-avaliacao-alta-fidelidade.md) e ao [planejamento do relato](../../../entrega-6/individual/israel/planejamento-relato-alta-fidelidade.md).

As evidências empíricas foram obtidas por meio de sessões de teste com registros audiovisuais (tela e áudio), catalogadas na página de evidências.

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

A abordagem metodológica seguiu o protocolo de **teste de usabilidade moderado formativo**, adotando a técnica enxuta de Steve Krug (2010) com *Thinking Aloud* (pensar em voz alta) e triagem imediata de problemas no mesmo dia. Os participantes operaram o protótipo em seus próprios computadores/navegadores, enquanto o moderador apresentou os cenários e observou as ações sem fornecer orientações de percurso.

A organização deste relato segue a estrutura canônica recomendada por Barbosa e Silva (2010, p. 341–343): objetivos, método, participantes, desempenho nas tarefas, opiniões expressas, problemas encontrados e propostas de reprojeto.

## Pessoas, material e condições

A Tabela 2 descreve as condições operacionais, equipe, recursos e salvaguardas éticas adotadas na avaliação.

| Campo | Registro / Condições Efetivas |
| --- | --- |
| **Moderador / avaliador** | Israel Soares de Paiva, responsável pela recepção, leitura dos cenários e moderação neutra |
| **Observação / anotações** | Bruno Ferreira Dornelas, registrando erros, hesitações e falas espontâneas |
| **Amostragem (Steve Krug)** | 3 participantes principais (`AF-P01` a `AF-P03`) representando o público-alvo (Marta Oliveira), mais 1 participante para a sessão piloto (`AF-PILOTO01`) |
| **Modalidade e ferramentas** | Remota via Google Meet com gravação de tela e áudio autorizada via TCLE |
| **Material avaliado** | Protótipo de alta fidelidade navegável **AF-1.0** (HTML/CSS/JavaScript puro, disponível no repositório) |
| **Data e horários** | 10 a 12 de novembro de 2026; sessões individuais de aproximadamente 20 minutos |
| **Aspectos éticos** | Apresentação e concordância prévia com o Termo de Consentimento Livre e Esclarecido (TCLE), garantindo anonimato, privacidade e liberdade de interrupção |
| **Sessão piloto** | Realizada com `AF-PILOTO01` em 08/11/2026 para calibrar o roteiro de tarefas, temporização e legibilidade do protótipo |

<p class="caption">Tabela 2 — Condições operacionais, pessoas e ambiente do teste de usabilidade.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

A Tabela 3 consolida o perfil e os metadados dos participantes avaliados.

| Identificador | Perfil / Ocupação | Familiaridade com Tecnologia | Experiência Prévia com Agendamento | Conformidade TCLE |
| :---: | --- | :---: | :---: | :---: |
| `AF-PILOTO01` | Estudante universitário, 22 anos | Alta | Frequente em serviços acadêmicos | Assinado |
| `AF-P01` | Servidora pública, 48 anos | Média | Ocasional (detran, consultas) | Assinado |
| `AF-P02` | Professor da rede básica, 45 anos | Média | Baixa em portais federais | Assinado |
| `AF-P03` | Profissional autônoma, 42 anos | Média-alta | Moderada em serviços digitais | Assinado |

<p class="caption">Tabela 3 — Caracterização sociodemográfica dos participantes.</p>
<p class="source">Fonte: questionário de perfil pré-teste (2026).</p>

### Diferenças em relação ao planejamento

O planejamento original previa a possibilidade de uso presencial ou remoto. A execução remota via Google Meet com compartilhamento de tela revelou-se ideal para acomodar a rotina dos participantes do perfil de Marta Oliveira. A amostragem foi fixada em 3 participantes conforme a diretriz enxuta de Steve Krug, permitindo identificar com rapidez os principais obstáculos de interface antes da triagem.

## Tarefas, desempenho e opinião

Os participantes executaram as 5 tarefas sequenciais previstas no planejamento (AF-T1 a AF-T5). A Tabela 4 sintetiza as ações observadas, intervenções e o sucesso alcançado.

| Participante / Tarefa | Ações observadas e comportamento no protótipo | Conclusão / Ajuda | Tempo Aprox. |
| --- | --- | :---: | :---: |
| `AF-P01` / **AF-T1** | Localizou o card de agendamento na home; leu atentamente as regras de vestimenta antes de avançar. | Sucesso sem ajuda | 1m 45s |
| `AF-P01` / **AF-T2** | Selecionou 3 visitantes; hesitou na leitura da legenda do calendário, mas identificou horário matutino disponível. | Sucesso sem ajuda | 2m 10s |
| `AF-P01` / **AF-T3** | Preencheu nome, CPF e telefone; localizou com facilidade a seção de acessibilidade e marcou cadeira de rodas. | Sucesso sem ajuda | 2m 15s |
| `AF-P01` / **AF-T4** | Percebeu que o telefone estava incorreto na tela de revisão; clicou em "Editar", corrigiu o número e confirmou. Os demais dados permaneceram salvos. | Sucesso sem ajuda | 1m 50s |
| `AF-P01` / **AF-T5** | Visualizou a tela de sucesso, anotou o código gerado e observou o botão de download do comprovante em PDF. | Sucesso sem ajuda | 1m 15s |
| `AF-P02` / **AF-T1** | Identificou o agendamento; comentou sobre a clareza do alerta quanto a documentos originais com foto. | Sucesso sem ajuda | 1m 30s |
| `AF-P02` / **AF-T2** | Escolheu 3 pessoas; clicou inicialmente em um dia lotado, percebeu o aviso e trocou para uma data verde com vagas. | Sucesso sem ajuda | 2m 05s |
| `AF-P02` / **AF-T3** | Digitou os dados solicitados; notou imediatamente a pergunta sobre necessidades especiais e selecionou a opção. | Sucesso sem ajuda | 1m 55s |
| `AF-P02` / **AF-T4** | Identificou o erro no telefone na tela de revisão; usou a ação de retorno, retificou o campo e revalidou. | Sucesso sem ajuda | 1m 40s |
| `AF-P02` / **AF-T5** | Leu o código em destaque; compreendeu que receberá a confirmação por e-mail e que pode imprimir o PDF. | Sucesso sem ajuda | 1m 20s |
| `AF-P03` / **AF-T1** | Acessou diretamente pelo banner; leu as proibições de vestimenta e expressou aprovação pelo aviso prévio. | Sucesso sem ajuda | 1m 35s |
| `AF-P03` / **AF-T2** | Definiu o grupo de 3; explorou a legenda do calendário e selecionou o primeiro horário disponível das 10h. | Sucesso sem ajuda | 1m 50s |
| `AF-P03` / **AF-T3** | Preencheu os campos com fluidez; comentou que a opção de cadeira de rodas é bem visível. | Sucesso sem ajuda | 1m 40s |
| `AF-P03` / **AF-T4** | Ao revisar, notou o dígito faltante no telefone; editou sem perda de estado dos demais campos e concluiu. | Sucesso sem ajuda | 1m 35s |
| `AF-P03` / **AF-T5** | Concluiu o fluxo com segurança; elogiou a disponibilização do código e o resumo final do agendamento. | Sucesso sem ajuda | 1m 10s |

<p class="caption">Tabela 4 — Desempenho observado e execução das tarefas na interface AF-1.0.</p>
<p class="source">Fonte: registros de observação das sessões de usabilidade (2026).</p>

A Tabela 5 consolida os relatos verbais colhidos pelo método *Thinking Aloud* e as avaliações de satisfação subjetiva (escala M6 de 1 a 5).

| Participante | Verbalizações em voz alta (*Thinking Aloud*) | Escala M6 (1–5) | Percepção Geral |
| :---: | --- | :---: | --- |
| `AF-P01` | *"Achei ótimo avisar da roupa antes, porque ninguém quer chegar lá e ser barrado na portaria. No calendário, demorei um segundinho para entender o que era cinza e verde, mas logo ficou claro."* | **5 de 5** | Destacou a prevenção de erros e a presença da opção de acessibilidade sem burocracia. |
| `AF-P02` | *"Gostei muito de poder revisar tudo antes de confirmar de verdade. O botão de editar me devolveu os dados sem apagar o que eu já tinha feito."* | **5 de 5** | Elogiou a segurança do fluxo em etapas e a confirmação com código localizável. |
| `AF-P03` | *"O visual é muito limpo e não confunde. Foi bem direto agendar para a família toda e indicar a necessidade da cadeira de rodas."* | **5 de 5** | Ressaltou a clareza da linguagem e a facilidade de emissão do comprovante. |

<p class="caption">Tabela 5 — Síntese das verbalizações e satisfação dos participantes.</p>
<p class="source">Fonte: entrevistas e transcrições das sessões de alta fidelidade (2026).</p>

## Indicadores e perguntas da avaliação

A Tabela 6 confronta os resultados observados com as perguntas de pesquisa AF-Q1 a AF-Q6 e as metas de usabilidade estabelecidas no planejamento.

| Pergunta / Indicador | Resultado Apoiado nas Evidências | Atendimento às Metas | Limite Metodológico |
| --- | --- | :---: | --- |
| **AF-Q1 / M0:** Encontrabilidade e regras prévias | **3 de 3** participantes localizaram o serviço na home e leram as regras de vestimenta antes de avançar. | **Atingida** (Eficácia 100% ≥ 75%) | O teste partiu da página inicial do protótipo, que apresenta menos ruído visual que o portal oficial. |
| **AF-Q2 / M0:** Calendário e interpretação de vagas | **3 de 3** interpretaram a legenda de cores e escolheram horário matutino com vagas para 3 pessoas. | **Atingida** (Eficácia 100% ≥ 75%) | Um participante (`AF-P02`) clicou inicialmente em data sem vagas, recuperando-se pelo feedback visual. |
| **AF-Q3 / M0:** Preenchimento e acessibilidade | **3 de 3** preencheram os dados do titular e assinalaram com sucesso o apoio de cadeira de rodas. | **Atingida** (Eficácia 100% ≥ 75%) | Campos com máscaras prontas facilitaram a digitação rápida. |
| **AF-Q4 / M2 e M3:** Revisão e correção de dados | **3 de 3** perceberam o erro no telefone na tela de revisão e corrigiram via "Editar" com dados preservados. | **Atingida** (Prevenção e recuperação de erros comprovadas) | O erro no telefone foi induzido pelo roteiro de teste para verificar a capacidade de recuperação. |
| **AF-Q5 / M0:** Confirmação e comprovante | **3 de 3** identificaram o código gerado, reconheceram as orientações finais e o botão do PDF. | **Atingida** (Eficácia 100% ≥ 75%) | O arquivo PDF baixado é uma simulação estática no protótipo. |
| **AF-Q6 / M6:** Satisfação e facilidade percebida | Média de **5,0 de 5,0** na escala de satisfação M6, com elogios espontâneos à clareza e limpeza visual. | **Atingida** (Média 5,0 ≥ 4,0) | Amostra qualitativa reduzida de 3 participantes; não possui representatividade estatística. |

<p class="caption">Tabela 6 — Respostas às perguntas de pesquisa e verificação das metas de usabilidade.</p>
<p class="source">Fonte: consolidação dos dados empíricos da interface AF-1.0 (2026).</p>

## Problemas e decisões de reprojeto (Triagem de Steve Krug)

Conforme a metodologia de triagem ágil no mesmo dia de Steve Krug (2010), a equipe priorizou os pontos de atrito identificados na sessão, classificando-os por severidade e traçando intervenções diretas para a versão **AF-1.1**, conforme apresentado na Tabela 7.

| ID / Ponto de Interface | Severidade (Krug) | Evidência / Fator de Uso | Decisão de Reprojeto para AF-1.1 | Responsável / Situação |
| --- | :---: | --- | --- | :---: |
| **AF-PR01:** Legenda do calendário (AF-T2) | **Baixa** | `AF-P01` e `AF-P02` hesitaram momentaneamente entre a distinção de dias cinzas (indisponíveis) e brancos (sem seleção). | Reforçar o contraste das legendas abaixo do calendário e incluir rótulo de texto descritivo ao passar o cursor (*hover*). | Israel Soares / **Planejado para AF-1.1** |
| **AF-PR02:** Destaque do botão "Baixar Comprovante" (AF-T5) | **Baixa** | `AF-P02` observou primeiro o código de confirmação antes de reparar no botão secundário de download do PDF. | Alterar o botão de download para variante primária destacada na tela de desfecho. | Israel Soares / **Planejado para AF-1.1** |
| **AF-L01:** Envio de confirmação por SMS | **Sugestão** | `AF-P03` sugeriu a opção de receber um lembrete no celular além do e-mail cadastrado. | Avaliar viabilidade técnica de incluir checkbox "Desejo receber lembrete por WhatsApp/SMS". | Equipe / **Para ciclo futuro** |

<p class="caption">Tabela 7 — Matriz de triagem de problemas e decisões de reprojeto.</p>
<p class="source">Fonte: debriefing pós-teste segundo a metodologia de Steve Krug (2026).</p>

### Continuidade em relação ao protótipo de papel

A Tabela 8 documenta como os encaminhamentos PAP-R01 a PAP-R06 formulados na Etapa 6 se comportaram na alta fidelidade.

| Decisão Anterior (Papel) | Comportamento na Alta Fidelidade (AF-1.0) | Situação / Encaminhamento |
| --- | --- | :---: |
| **PAP-R01:** Regras visíveis antes do formulário | Regras de vestimenta e documentos apresentadas na etapa inicial; assimiladas por todos os participantes. | **Resolvido e consolidado** |
| **PAP-R02:** Avisos de vestimenta destacados | Alerta com ícones de trajes permitidos e proibidos impediu dúvidas dos participantes. | **Resolvido e consolidado** |
| **PAP-R03:** Calendário com vagas explícitas | Quantidade de visitantes limita dinamicamente os horários elegíveis. | **Resolvido**, com pequeno ajuste de legenda (AF-PR01). |
| **PAP-R04:** Apoio de acessibilidade simplificado | Checkbox e campo de especificação localizados com 100% de sucesso. | **Resolvido e consolidado** |
| **PAP-R05:** Tela de revisão com botão "Editar" | Participantes corrigiram dados incorretos sem perda de preenchimento. | **Resolvido e consolidado** |
| **PAP-R06:** Confirmação com comprovante claro | Código identificador em caixa destacada com instrução do que levar no dia. | **Resolvido**, com ajuste de ênfase visual (AF-PR02). |

<p class="caption">Tabela 8 — Confronto de continuidade entre protótipo de papel e alta fidelidade.</p>
<p class="source">Fonte: histórico de evolução do design do Grupo 06 (2026).</p>

## Conclusões e próximos passos

A avaliação de usabilidade de alta fidelidade demonstrou a maturidade da solução navegável **AF-1.0** para o agendamento de visitas ao Senado Federal. Todos os participantes concluíram com êxito as cinco tarefas propostas, alcançando índice de eficácia de 100% e satisfação máxima (5,0 de 5,0 na escala M6).

As intervenções propostas pela metodologia de Steve Krug não demandam reformulação estrutural do fluxo, mas ajustes pontuais de hierarquia visual e contraste (AF-PR01 e AF-PR02). Esses ajustes serão contemplados na versão **AF-1.1** para o encerramento do ciclo.

**Limitações do estudo:** Trata-se de uma avaliação qualitativa e formativa com amostra de 3 participantes e dados simulados em memória; os resultados validam a experiência de interação e usabilidade da interface, não substituindo testes de carga, segurança e integração com as bases de dados reais do Senado Federal.

## Fundamentação consultada

A estrutura deste relato e a análise das sessões apoiam-se na literatura de Interação Humano-Computador de Barbosa e Silva (2010), conforme a Figura 1.

??? note "Figura 1 — Componentes do relato de teste de usabilidade"

    ![Página do livro com a estrutura do relato e a orientação de analisar as causas dos problemas.](../../../assets/img/entrega-6/referencias/barbosa-p343.png){ loading=lazy }
    <p class="caption">Figura 1 — Estrutura do relato de teste de usabilidade.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 343).</p>

## Agradecimentos

O planejamento, condução e análise contaram com a revisão técnica de [Bruno Ferreira Dornelas](https://github.com/brunnf). Israel Soares de Paiva assume a responsabilidade integral pelo conteúdo deste relato.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `1.0` | 12/11/2026 | Consolidação dos resultados da avaliação da alta fidelidade, triagem de Krug e decisões de reprojeto | [Israel Soares de Paiva](https://github.com/IsraelSoares-25) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. Seção 10.2.1, p. 341–343.

[2] KRUG, Steve. *Não me faça pensar (atualizado)*: uma abordagem de bom senso à usabilidade na web e no mobile. Rio de Janeiro: Alta Books, 2014.

[3] SALES, André Barros de. *Plano de Ensino FIHC 022026 — Turma 01*, v1. FCTE/UnB, 2026. Cronograma da Etapa 7, p. 5 do PDF.

[4] GRUPO 06. [Relato do protótipo de papel](../../../entrega-6/individual/israel/relato-prototipo-papel.md), [Planejamento da avaliação da alta fidelidade](../../../entrega-6/individual/israel/planejamento-avaliacao-alta-fidelidade.md) e [Planejamento do relato da alta fidelidade](../../../entrega-6/individual/israel/planejamento-relato-alta-fidelidade.md). 2026.
