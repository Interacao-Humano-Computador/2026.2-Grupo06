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

A abordagem metodológica seguiu o protocolo de **teste de usabilidade moderado formativo**, adotando a técnica enxuta de Steve Krug (2010) com *Thinking Aloud* (pensar em voz alta) e triagem imediata de problemas no mesmo dia. Os participantes operaram o protótipo em seus próprios computadores/navegadores, enquanto o moderador apresentou os cenários e observou as ações sem fornecer orientações de percurso.

A organização deste relato segue a estrutura canônica recomendada por Barbosa e Silva (2010, p. 341–343): objetivos, método, participantes, desempenho nas tarefas, opiniões expressas, problemas encontrados e propostas de reprojeto.

## Pessoas, material e condições

A Tabela 2 descreve as condições operacionais, equipe, recursos, gravações e salvaguardas éticas adotadas na avaliação.

| Campo | Registro / Condições Efetivas |
| --- | --- |
| **Moderador / avaliador** | Israel Soares de Paiva, responsável pela recepção, leitura dos cenários e moderação neutra |
| **Observação / anotações** | Bruno Ferreira Dornelas, registrando erros, hesitações e falas espontâneas |
| **Amostragem (Steve Krug)** | 2 participantes principais (`AF-P01` e `AF-P02`) com gravações integrais publicadas, mais 1 colaborador para calibração piloto prévia (`AF-PILOTO01`) |
| **Gravações em vídeo** | `AF-P01` gravado em 4m 49s ([IHC Prot 1](https://www.youtube.com/watch?v=Ss59Jh5vNkw)); `AF-P02` gravado em 5m 37s ([IHC Prot 2](https://www.youtube.com/watch?v=_DLqNBgA2-w)) |
| **Modalidade e ferramentas** | Remota via Google Meet com gravação de tela e áudio autorizada via TCLE |
| **Material avaliado** | Protótipo de alta fidelidade navegável **AF-1.0** (HTML/CSS/JavaScript puro, disponível no repositório) |
| **Data e horários** | Novembro de 2026; sessões individuais com foco em identificação ágil de problemas |
| **Aspectos éticos** | Apresentação e concordância prévia com o Termo de Consentimento Livre e Esclarecido (TCLE), garantindo anonimato, privacidade e liberdade de interrupção |
| **Sessão piloto** | Realizada com `AF-PILOTO01` antes da coleta principal para calibrar o roteiro de tarefas, temporização e legibilidade do protótipo |

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

O planejamento original da Etapa 6 previa a execução presencial ou remota. A execução remota com compartilhamento de tela facilitou a participação das pessoas no perfil da persona Marta Oliveira. A amostragem iterativa de 2 a 3 usuários seguiu rigorosamente a diretriz de Steve Krug para identificação rápida dos problemas mais severos no mesmo dia, permitindo priorizar correções antes de ciclos subsequentes.

## Tarefas, desempenho e opinião

Os participantes executaram as 5 tarefas sequenciais previstas no planejamento (AF-T1 a AF-T5). A Tabela 4 sintetiza as ações observadas, intervenções e o sucesso alcançado com base nas evidências em vídeo.

| Participante / Tarefa | Minutagem no Vídeo | Ações observadas e comportamento no protótipo | Conclusão / Ajuda |
| --- | :---: | --- | :---: |
| `AF-P01` / **AF-T1** | `00:40–01:30` | Localizou o card de agendamento na home; leu atentamente as regras de vestimenta e documentos antes de avançar. | Sucesso sem ajuda de percurso |
| `AF-P01` / **AF-T2** | `01:30–02:25` | Selecionou 3 visitantes; observou a legenda do calendário e escolheu horário matutino disponível com vagas. | Sucesso sem ajuda de percurso |
| `AF-P01` / **AF-T3** | `02:25–03:15` | Preencheu nome, CPF e telefone; localizou com facilidade a seção de acessibilidade e assinalou apoio para cadeira de rodas. | Sucesso sem ajuda de percurso |
| `AF-P01` / **AF-T4** | `03:15–04:00` | Identificou o erro no telefone na tela de revisão; clicou em "Editar", corrigiu o número e confirmou com dados preservados. | Sucesso sem ajuda de percurso |
| `AF-P01` / **AF-T5** | `04:00–04:30` | Visualizou a tela de sucesso, anotou o código gerado e observou as opções de emissão do comprovante em PDF. | Sucesso sem ajuda de percurso |
| `AF-P02` / **AF-T1** | `00:45–01:40` | Identificou o agendamento; destacou a clareza do alerta quanto à obrigatoriedade de documento oficial com foto. | Sucesso sem ajuda de percurso |
| `AF-P02` / **AF-T2** | `01:40–02:45` | Definiu 3 pessoas; hesitou brevemente em dia lotado, recuperou-se pelo aviso visual e selecionou data verde matutina. | Sucesso sem ajuda de percurso |
| `AF-P02` / **AF-T3** | `02:45–03:45` | Digitou os dados solicitados; notou imediatamente o campo de necessidades especiais e selecionou a opção. | Sucesso sem ajuda de percurso |
| `AF-P02` / **AF-T4** | `03:45–04:35` | Percebeu a falta de dígito no telefone na revisão; acionou a edição, retificou o campo e revalidou com segurança. | Sucesso sem ajuda de percurso |
| `AF-P02` / **AF-T5** | `04:35–05:10` | Leu o código em destaque; compreendeu que receberá a confirmação por e-mail e que pode imprimir o PDF de confirmação. | Sucesso sem ajuda de percurso |

<p class="caption">Tabela 4 — Desempenho observado e localizadores de evidência na interface AF-1.0.</p>
<p class="source">Fonte: registros em vídeo das sessões no YouTube [IHC Prot 1](https://www.youtube.com/watch?v=Ss59Jh5vNkw) e [IHC Prot 2](https://www.youtube.com/watch?v=_DLqNBgA2-w) (2026).</p>

A Tabela 5 consolida os relatos verbais colhidos pelo método *Thinking Aloud* e as avaliações de satisfação subjetiva (escala M6 de 1 a 5).

| Participante / Vídeo | Minutagem | Verbalizações em voz alta (*Thinking Aloud*) | Escala M6 (1–5) | Percepção Geral |
| :---: | :---: | --- | :---: | --- |
| `AF-P01` ([IHC Prot 1](https://www.youtube.com/watch?v=Ss59Jh5vNkw)) | `04:30–04:49` | *"Achei ótimo avisar da roupa antes, porque ninguém quer chegar lá e ser barrado na portaria. No calendário ficou bem claro o que estava livre."* | **5 de 5** | Destacou a prevenção de erros e a presença da opção de acessibilidade sem burocracia. |
| `AF-P02` ([IHC Prot 2](https://www.youtube.com/watch?v=_DLqNBgA2-w)) | `05:10–05:37` | *"Gostei muito de poder revisar tudo antes de confirmar de verdade. O botão de editar me devolveu os dados sem apagar o que eu já tinha feito."* | **5 de 5** | Elogiou a segurança do fluxo em etapas e a confirmação com código localizável. |

<p class="caption">Tabela 5 — Síntese das verbalizações e satisfação dos participantes.</p>
<p class="source">Fonte: entrevistas e falas registradas nas sessões de alta fidelidade (2026).</p>

## Indicadores e perguntas da avaliação

A Tabela 6 confronta os resultados observados com as perguntas de pesquisa AF-Q1 a AF-Q6 e as metas de usabilidade estabelecidas no planejamento.

| Pergunta / Indicador | Resultado Apoiado nas Evidências em Vídeo | Atendimento às Metas | Limite Metodológico |
| --- | --- | :---: | --- |
| **AF-Q1 / M0:** Encontrabilidade e regras prévias | **2 de 2** participantes localizaram o serviço na home e leram as regras de vestimenta antes de avançar. | **Atingida** (Eficácia 100% ≥ 75%) | O teste partiu da página inicial do protótipo, que apresenta menor ruído visual que o portal oficial. |
| **AF-Q2 / M0:** Calendário e interpretação de vagas | **2 de 2** interpretaram a legenda de cores e escolheram horário matutino com vagas para 3 pessoas. | **Atingida** (Eficácia 100% ≥ 75%) | O participante `AF-P02` clicou inicialmente em data lotada (`01:55`), recuperando-se prontamente. |
| **AF-Q3 / M0:** Preenchimento e acessibilidade | **2 de 2** preencheram os dados do titular e assinalaram com sucesso o apoio de cadeira de rodas. | **Atingida** (Eficácia 100% ≥ 75%) | Campos com máscaras e validação imediata facilitaram a digitação rápida. |
| **AF-Q4 / M2 e M3:** Revisão e correção de dados | **2 de 2** perceberam o erro no telefone na tela de revisão e corrigiram via "Editar" com dados preservados. | **Atingida** (Prevenção e recuperação de erros comprovadas) | O erro no telefone foi verificado pelo cenário proposto para validar a resiliência do formulário. |
| **AF-Q5 / M0:** Confirmação e comprovante | **2 de 2** identificaram o código gerado, reconheceram as orientações finais e o botão do PDF. | **Atingida** (Eficácia 100% ≥ 75%) | O comprovante em PDF constitui um modelo demonstrativo integrado à interface. |
| **AF-Q6 / M6:** Satisfação e facilidade percebida | Média de **5,0 de 5,0** na escala de satisfação M6, com elogios espontâneos à clareza e limpeza visual. | **Atingida** (Média 5,0 ≥ 4,0) | Amostra qualitativa enxuta (Krug, 2010); foco em atrito de interface e não em inferência estatística. |

<p class="caption">Tabela 6 — Respostas às perguntas de pesquisa e verificação das metas de usabilidade.</p>
<p class="source">Fonte: consolidação dos dados empíricos da interface AF-1.0 (2026).</p>

## Problemas e decisões de reprojeto (Triagem de Steve Krug)

Conforme a metodologia de triagem ágil no mesmo dia de Steve Krug (2010), a equipe priorizou os pontos de atrito identificados na sessão, classificando-os por severidade e traçando intervenções diretas para a versão **AF-1.1**, conforme apresentado na Tabela 7.

| ID / Ponto de Interface | Severidade (Krug) | Evidência no Vídeo / Fator de Uso | Decisão de Reprojeto para AF-1.1 | Responsável / Situação |
| --- | :---: | --- | --- | :---: |
| **AF-PR01:** Legenda do calendário (AF-T2) | **Baixa** | `AF-P02` hesitou brevemente ao clicar em data cinza (`01:50–02:05 do Vídeo 2`). | Reforçar o contraste das legendas abaixo do calendário e incluir rótulo de texto descritivo ao passar o cursor (*hover*). | Israel Soares / **Planejado para AF-1.1** |
| **AF-PR02:** Destaque do botão "Baixar Comprovante" (AF-T5) | **Baixa** | `AF-P02` observou primeiro o código de confirmação antes de reparar no botão secundário de download do PDF (`04:45 do Vídeo 2`). | Alterar o botão de download para variante primária destacada na tela de desfecho. | Israel Soares / **Planejado para AF-1.1** |
| **AF-L01:** Envio de confirmação por SMS/WhatsApp | **Sugestão** | Participante manifestou interesse em receber lembrete no celular além do e-mail cadastrado. | Avaliar viabilidade técnica de incluir checkbox "Desejo receber lembrete por WhatsApp/SMS". | Equipe / **Para ciclo futuro** |

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

A avaliação de usabilidade de alta fidelidade demonstrou a maturidade da solução navegável **AF-1.0** para o agendamento de visitas ao Senado Federal. Os participantes concluíram com êxito as cinco tarefas propostas, alcançando índice de eficácia de 100% e satisfação máxima (5,0 de 5,0 na escala M6).

As intervenções propostas pela metodologia de Steve Krug não demandam reformulação estrutural do fluxo, mas ajustes pontuais de hierarquia visual e contraste (AF-PR01 e AF-PR02). Esses ajustes serão contemplados na versão **AF-1.1** para o encerramento do ciclo.

**Limitações do estudo:** Trata-se de uma avaliação qualitativa e formativa com amostra enxuta e dados simulados em memória; os resultados validam a experiência de interação e usabilidade da interface, não substituindo testes de carga, segurança e integração com as bases de dados reais do Senado Federal.

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
| `1.1` | 15/11/2026 | Vinculação direta dos registros audiovisuais do YouTube (IHC Prot 1 e IHC Prot 2) e refinamento dos localizadores por tarefa | [Israel Soares de Paiva](https://github.com/IsraelSoares-25) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. Seção 10.2.1, p. 341–343.

[2] KRUG, Steve. *Não me faça pensar (atualizado)*: uma abordagem de bom senso à usabilidade na web e no mobile. Rio de Janeiro: Alta Books, 2014.

[3] SALES, André Barros de. *Plano de Ensino FIHC 022026 — Turma 01*, v1. FCTE/UnB, 2026. Cronograma da Etapa 7, p. 5 do PDF.

[4] GRUPO 06. [Relato do protótipo de papel](../../../entrega-6/individual/israel/relato-prototipo-papel.md), [Planejamento da avaliação da alta fidelidade](../../../entrega-6/individual/israel/planejamento-avaliacao-alta-fidelidade.md) e [Planejamento do relato da alta fidelidade](../../../entrega-6/individual/israel/planejamento-relato-alta-fidelidade.md). 2026.

[5] GRUPO 06. [Evidências e registros audiovisuais da alta fidelidade](evidencias.md). Sessões com [AF-P01 (IHC Prot 1)](https://www.youtube.com/watch?v=Ss59Jh5vNkw) e [AF-P02 (IHC Prot 2)](https://www.youtube.com/watch?v=_DLqNBgA2-w), novembro de 2026.
