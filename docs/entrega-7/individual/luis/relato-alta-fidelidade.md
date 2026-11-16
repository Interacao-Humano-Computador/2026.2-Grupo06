<span class="owner">Responsável: Luís Henrique Arruda Luna · Autor do item: Luís Henrique Arruda Luna</span>

# Relato da avaliação de alta fidelidade

## Tabela de contribuição

A Tabela 1 identifica as contribuições neste artefato.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Luís Henrique Arruda Luna](https://github.com/Donnk61) | Moderação, consolidação da sessão, resultados e decisões de reprojeto | [Conteúdo](#introducao) |
| [Israel Soares de Paiva](https://github.com/IsraelSoares-25) | Observação da sessão | [Pessoas, material e condições](#pessoas-material-e-condicoes) |
| [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | Gravação da sessão | [Pessoas, material e condições](#pessoas-material-e-condicoes) |
| Claude Code (Anthropic) | Apoio à análise da gravação de tela, à estruturação e à redação | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuições neste artefato.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Introdução

Este relato apresenta os resultados do teste do **protótipo AF-1.0 de solicitação de vaga em plenária**, em continuidade ao [planejamento da avaliação](../../../entrega-6/individual/luis/planejamento-avaliacao-alta-fidelidade.md) e ao [planejamento do relato](../../../entrega-6/individual/luis/planejamento-relato-alta-fidelidade.md). A evidência é uma sessão com uma pessoa, registrada pela câmera da sala e pela tela com webcam.

[Vídeos e localizadores](evidencias.md){ .md-button .md-button--primary }
[Abrir protótipo (Figma)](https://www.figma.com/proto/WpUoWGQ3gN8b8hftT3u27f/IHC-%E2%80%94-Plen%C3%A1rias-Senado-Federal-%7C-Lu%C3%ADs-Henrique?node-id=4-3&p=f&t=pEBXmYVvmmSRJuus-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A3){ .md-button }

## Objetivos e método

**Autor do item:** Luís Henrique Arruda Luna.

Verificar encontrabilidade (AF-O1), prevenção antes de confirmar (AF-O2), compreensão do resultado (AF-O3) e indisponibilidade e recuperação (AF-O4). O recorte é a persona [Marina Alves](../../../entrega-2/individual/luis/persona.md), com os requisitos AF-R01–AF-R09 derivados dos problemas P01–P05 do [relato do papel](../../../entrega-6/individual/luis/relato-prototipo-papel.md).

Foi realizado um **teste de usabilidade moderado presencial**, com verbalização durante o uso e entrevista breve ao final. A pessoa participante controlou o protótipo no notebook; Luís leu os cenários e fez perguntas neutras, sem indicar o caminho.

Barbosa e Silva [1, p. 341–343] orientam relacionar objetivos, método, pessoas, tarefas, desempenho, opinião e problemas. As tabelas deste relato seguem essa estrutura e separam ação observada, fala e interpretação da equipe.

## Protótipo de alta fidelidade

O protótipo avaliado é a versão **AF-1.0**, navegável no Figma. Ele simula a consulta às plenárias, a solicitação de vaga em duas etapas (formulário e revisão), a confirmação com código e o estado da inscrição na lista e nos detalhes. Todo o conteúdo é fictício.

[Abrir o protótipo AF-1.0 no Figma](https://www.figma.com/proto/WpUoWGQ3gN8b8hftT3u27f/IHC-%E2%80%94-Plen%C3%A1rias-Senado-Federal-%7C-Lu%C3%ADs-Henrique?node-id=4-3&p=f&t=pEBXmYVvmmSRJuus-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A3){ .md-button .md-button--primary target="_blank" rel="noopener" }

A Tabela 2 apresenta as telas que podem ser percorridas.

| Tela | O que mostra |
| --- | --- |
| Plenárias | Busca por tema e lista com data, horário, local, prazo e selo de disponibilidade (“6 de 30 vagas disponíveis”, “Sem vagas disponíveis”, “Inscrição confirmada”) |
| Detalhes da plenária | Data, horário, local, disponibilidade, prazo de inscrição, aviso de que a vaga só é confirmada após o envio e botão “Solicitar vaga” |
| Solicitar uma vaga — Etapa 1 de 2 | Nome completo e e-mail, com aviso para usar apenas dados fictícios |
| Revisão da solicitação — Etapa 2 de 2 | Dados do participante e da plenária, e-mail parcialmente mascarado e aviso de que a vaga ainda não está confirmada |
| Inscrição confirmada | Código de confirmação, plenária, data, horário, local e “Voltar às plenárias” |

<p class="caption">Tabela 2 — Telas do protótipo AF-1.0.</p>
<p class="source">Fonte: protótipo AF-1.0 de Luís Henrique Arruda Luna no Figma (2026).</p>

## Requisitos no protótipo avaliado

A Tabela 3 registra a situação dos requisitos AF-R01–AF-R09 conforme o que aparece na gravação. “Observado” indica que o comportamento aparece na tela; não significa que foi validado com outras pessoas.

| ID | Requisito | Situação na sessão |
| --- | --- | --- |
| AF-R01 | Saída “Voltar às plenárias” e estado de solicitação visível | **Observado.** A confirmação tem “Voltar às plenárias” (5:08); a lista mostra o selo “Inscrição confirmada” (5:20) e os detalhes mostram “Você já possui inscrição” (6:25) |
| AF-R02 | Plenária, data, horário e local iguais em todas as telas | **Observado.** “12 de novembro de 2026, 14h, Auditório de demonstração” na lista, nos detalhes, no formulário, na revisão e na confirmação |
| AF-R03 | Confirmação com plenária, data, horário, local e identificador | **Observado.** Código PL-000123, plenária, data e horário e local (5:08) |
| AF-R04 | Um texto por estado | **Observado em parte.** “6 de 30 vagas disponíveis”, “Sem vagas disponíveis”, “Sua vaga ainda não está confirmada” (revisão) e “Inscrição confirmada”. O estado de inscrição não criada não foi exibido |
| AF-R05 | Revisão com uma saída que preserva os dados | **Presente, não usado.** Não houve necessidade de correção na sessão |
| AF-R06 | Plenária sem vagas avisa antes do formulário | **Observado.** Selo “Sem vagas disponíveis” na lista (AF-T4) |
| AF-R07 | Revalidação da vaga ao confirmar | **Não observado.** A revisão avisa que a disponibilidade será verificada novamente, mas a perda da última vaga não foi executada (AF-T5) |
| AF-R08 | Validação de campos vazios e formato de e-mail | **Não observado.** Os campos foram preenchidos sem erro |
| AF-R09 | Conteúdo fictício e aviso de demonstração | **Observado.** Faixa “Protótipo acadêmico — Serviço fictício, sem vínculo operacional com o Senado Federal” e aviso “Use apenas dados fictícios” no formulário. O cabeçalho mantém o nome “Senado Federal” como identificação do contexto |

<p class="caption">Tabela 3 — Requisitos da AF-1.0 e o que a sessão permite afirmar.</p>
<p class="source">Fonte: plano da Etapa 6 e gravação de tela da sessão AF-P01.</p>

## Pessoas, material e condições

A Tabela 4 identifica a sessão. O código AF-P01 distingue a pessoa participante sem indicar sua identidade civil.

| Campo | Registro |
| --- | --- |
| Moderador | Luís Henrique Arruda Luna |
| Observador | Israel Soares de Paiva |
| Gravação | Caio Breno de Souza Bezerra; câmera da sala e captura da tela com webcam |
| Participante | AF-P01: 19 anos, nunca usou o Portal do Senado e não participou da avaliação do papel |
| Modalidade e recursos | Presencial; notebook com navegador Firefox e protótipo navegável no Figma |
| Material | Protótipo AF-1.0 no [Figma](https://www.figma.com/proto/WpUoWGQ3gN8b8hftT3u27f/IHC-%E2%80%94-Plen%C3%A1rias-Senado-Federal-%7C-Lu%C3%ADs-Henrique?node-id=4-3&p=f&t=pEBXmYVvmmSRJuus-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A3) |
| Data e horário | 12/11/2026, às 9h30 |
| Duração dos registros | Câmera da sala: 6 min 5 s; tela com webcam: 6 min 36 s. Os inícios são diferentes |
| Consentimento | TCLE assinado antes da sessão. O termo fica fora do site |
| Piloto | PP-AF01, no mesmo dia, cerca de 20 minutos antes. Nenhum ajuste foi necessário. Seus dados não entram nos resultados |

<p class="caption">Tabela 4 — Pessoa, material e condições efetivas.</p>
<p class="source">Fonte: gravações da sessão e registro de Luís em 15/11/2026.</p>

Os tempos citados neste relato usam o **Vídeo 2 (tela com webcam)** da [página de evidências](evidencias.md).

### Diferenças em relação ao planejamento

O [plano da Etapa 6](../../../entrega-6/individual/luis/planejamento-avaliacao-alta-fidelidade.md) previa sessão remota pelo Google Meet, piloto em 09/11 e sessão principal em 11/11, com até 45 minutos. A execução foi **presencial**, em 12/11, com piloto e sessão no mesmo dia e um percurso de cerca de 6 minutos.

Outras diferenças afetam a interpretação dos resultados:

- **AF-T2 sem o erro preparado.** O formulário começou vazio e a pessoa digitou dados próprios de teste, diferentes do cartão com “marina@exemple.com”. A prevenção (AF-O2 e M2) não foi testada.
- **AF-T5 não executada.** A lista do protótipo mostrava duas plenárias, sem a de saúde digital com a última vaga. A perda da vaga no momento da confirmação não foi testada.
- **M6 coletada só ao final.** Houve uma nota geral; não houve nota por tarefa.

## Tarefas, desempenho e opinião

A Tabela 5 registra as tarefas. “Sem ajuda” significa que não houve indicação de qual controle acionar; não elimina o efeito do cenário lido pelo moderador. Os intervalos são **localizadores**, não tempos de desempenho.

| Tarefa | Ações e evidência no Vídeo 2 | Conclusão e limite |
| --- | --- | --- |
| AF-T1 — encontrar a plenária e reunir informações | **2:24–3:41.** Percorre a lista, identifica a “Plenária sobre educação científica”, abre “Ver detalhes” (3:20) e lê data, horário, local, disponibilidade e prazo | **Sem ajuda.** A entrada já era a página de plenárias do protótipo, não a página inicial do portal |
| AF-T2 — solicitar a vaga | **3:41–5:08.** Preenche nome e e-mail, avança para a revisão (4:51), que mostra o e-mail parcialmente mascarado e o aviso de vaga ainda não confirmada, e confirma | **Sem ajuda** para solicitar e confirmar. O erro preparado não foi aplicado; detecção e correção não foram testadas |
| AF-T3 — explicar o resultado | **5:08–5:20.** Na confirmação, com código PL-000123, volta às plenárias e encontra o selo “Inscrição confirmada” | **Sem ajuda.** A pessoa explicou que a vaga foi confirmada |
| AF-T4 — tentar a plenária sem vagas | **5:20–6:25.** Na lista, reconhece pelo selo “Sem vagas disponíveis” que não é possível se inscrever na plenária sobre orçamento público, sem abrir o formulário | **Sem ajuda.** Os detalhes da plenária sem vagas e a oferta de outras plenárias não foram abertos |
| AF-T5 — perder a última vaga | — | **Não executada.** O cenário não estava disponível na AF-1.0 usada na sessão |

<p class="caption">Tabela 5 — Desempenho por tarefa na AF-1.0.</p>
<p class="source">Fonte: gravação de tela da sessão AF-P01 e registro do moderador.</p>

Ao final do percurso (6:25–6:36), a pessoa reabre a plenária em que já se inscreveu e encontra “Você já possui inscrição” com o código, sem repetir o pedido. Esse episódio favorece AF-R01 e AF-Q5.

A Tabela 6 resume a opinião como **paráfrase**, sem tratá-la como fala literal.

| Momento | Opinião e satisfação | Interpretação e limite |
| --- | --- | --- |
| Entrevista final | Nota geral **5/5**. Não relatou dificuldades no percurso | Avaliação global do percurso; não é nota por tarefa |
| Entrevista final | Sugeriu pedir mais dados na inscrição, como o CPF | Sugestão da pessoa, não um problema observado. Ver AF-PR01 |

<p class="caption">Tabela 6 — Opinião final e satisfação global.</p>
<p class="source">Fonte: entrevista ao final da sessão e registro do moderador.</p>

## Indicadores e perguntas da avaliação

A Tabela 7 responde às perguntas do plano sem confundir “não medido” com resultado zero. Todas as contagens têm denominador de **uma pessoa**.

| Pergunta / indicador | Resultado apoiado no registro | Limite |
| --- | --- | --- |
| AF-Q1 / M0 — encontrabilidade | **1 de 1** chega aos detalhes da plenária certa e reúne as informações sem ajuda | A sessão começa na página de plenárias, não na página inicial |
| AF-Q2 — vagas e indisponibilidade | **1 de 1** reconhece a falta de vagas pelo selo da lista | O que ocorre quando a vaga acaba durante o pedido (AF-T5) não foi testado |
| AF-Q3 / M2 — prevenção | **Não avaliada.** O erro preparado não foi aplicado | Sem tentativa de erro, não há taxa de prevenção |
| AF-Q4 — estado da solicitação | **1 de 1** explica que a vaga foi confirmada | A distinção com “nenhuma inscrição criada” depende de AF-T5 |
| AF-Q5 — próximo passo | **1 de 1** volta à lista, reconhece a inscrição e não repete o pedido | Uma ocorrência, sem passagem de tempo |
| AF-Q6 / M6 — opinião | Nota geral **5/5**; sugestão de pedir CPF | M6 por tarefa **não coletada** |
| M3 — recuperação | **Não avaliada**, pois depende de AF-T5 | — |
| M1, M4 e M5 | **Não avaliadas**, conforme o plano | Duração do vídeo não é tempo ativo de tarefa |

<p class="caption">Tabela 7 — Perguntas, indicadores e limites de cobertura.</p>
<p class="source">Fonte: plano da Etapa 6 e análise do registro da AF-1.0.</p>

## Problemas e decisões de reprojeto

A Tabela 8 separa a sugestão da pessoa das lacunas de procedimento. A prioridade segue o critério do [relato do papel](../../../entrega-6/individual/luis/relato-prototipo-papel.md#problemas): **média** indica cobertura necessária antes de concluir sobre um objetivo; **baixa**, ajuste sem bloqueio demonstrado.

| ID / local | Evidência e consequência | Causa proposta / fator | Decisão e situação |
| --- | --- | --- | --- |
| AF-PR01 / formulário; AF-T2 | Na entrevista final, a pessoa sugere pedir CPF e outros dados. **1 de 1** sugestão | Expectativa de que um serviço público peça documento de identificação. Conflita com AF-R09, que proíbe dados reais no protótipo | **Baixa.** Não adotar no protótipo. Registrar como questão para um serviço real, que exigiria decisão institucional e tratamento conforme a LGPD |
| AF-L01 / formulário; AF-T2 | O formulário começa vazio e a pessoa usa dados próprios de teste. O erro preparado não aparece | Lacuna de procedimento: o estado inicial previsto não foi preparado | **Média.** Repetir AF-T2 com o cartão e o e-mail errado já preenchido. **Pendente** |
| AF-L02 / confirmação; AF-T5 | A lista tem duas plenárias, sem a de saúde digital com a última vaga | Cenário não construído na AF-1.0 usada na sessão | **Média.** Incluir a plenária de saúde digital e a tela de vaga esgotada em nova versão (AF-1.1) e executar AF-T5. **Pendente** |
| AF-L03 / entrevista | A satisfação foi coletada só ao final | Ajuste de condução | **Baixa.** Aplicar M6 após cada tarefa no reteste. **Pendente** |

<p class="caption">Tabela 8 — Sugestão, lacunas e decisões.</p>
<p class="source">Fonte: interpretação do registro com base em Barbosa e Silva (2010, p. 342–343).</p>

A sessão não aponta mudança no fluxo principal. Devem ser mantidos o selo de disponibilidade na lista, a revisão com aviso de vaga ainda não confirmada, o código de confirmação e o estado “Inscrição confirmada” na lista e nos detalhes. Qualquer alteração deve receber nova versão; a AF-1.0 fica preservada para conferência.

### Retomada dos problemas do papel

A Tabela 9 mostra o que aconteceu com cada problema do papel. Estar presente no protótipo não equivale a estar resolvido.

| Problema do papel | Requisito | Situação na AF-1.0 | Tarefa | Recorrência |
| --- | --- | --- | --- | --- |
| P01 — estado após confirmar | AF-R01 | Estado visível na lista e nos detalhes; a pessoa não repete o pedido | AF-T3 | Não recorreu |
| P02 — datas divergentes | AF-R02 | Mesma data, horário e local em todas as telas | AF-T1 e AF-T2 | Não recorreu |
| P03 — confirmação sem dados | AF-R03 | Confirmação com código, plenária, data e local | AF-T3 | Não recorreu |
| P04 — textos de estado | AF-R04 | Estados consistentes nas telas exibidas; estado de inscrição não criada não exibido | AF-T3 a AF-T5 | Não recorreu nas telas exibidas |
| P05 — saídas da revisão | AF-R05 | Saída presente, mas não usada | AF-T2 | Não avaliada |

<p class="caption">Tabela 9 — Acompanhamento dos problemas do papel.</p>
<p class="source">Fonte: Tabela 6 do relato do papel e sessão AF-P01.</p>

Na comparação com o papel, as diferenças de material, pessoa e tarefas também explicam a mudança de desempenho. O resultado não é atribuído apenas ao novo design.

## Conclusões e próximos passos

A pessoa encontrou a plenária, reuniu as informações, solicitou e confirmou a vaga, entendeu o resultado e reconheceu a plenária sem vagas, tudo sem ajuda. Não relatou dificuldades. As correções P01–P03 do papel aparecem no protótipo e não recorreram.

A prevenção de erro (AF-T2 com o e-mail errado) e a perda da última vaga (AF-T5) não foram testadas. Assim, AF-O2 e parte de AF-O4 continuam em aberto. O próximo ciclo deve preparar o estado inicial de AF-T2, construir o cenário de AF-T5 em nova versão e coletar M6 por tarefa.

É **uma pessoa**, em uma sessão curta e com a entrada já na página de plenárias. Não se inferem representatividade, metas alcançadas para o público ou validação de regras institucionais de vagas. **Nenhuma recomendação foi retestada.**

## Fundamentação consultada

A Figura 1 apresenta a fonte da estrutura do relato.

??? note "Figura 1 — Componentes do relato de teste de usabilidade"

    ![Página do livro com a estrutura do relato e a orientação de analisar as causas dos problemas.](../../../assets/img/entrega-6/referencias/barbosa-p343.png){ loading=lazy }
    <p class="caption">Figura 1 — Estrutura do relato de teste de usabilidade.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 343).</p>

## Agradecimentos

Claude Code (Anthropic) apoiou a análise quadro a quadro da gravação de tela, a estruturação e a redação. Os localizadores foram identificados pelas mudanças de tela; as opiniões são paráfrases do registro do moderador. Luís Henrique Arruda Luna responde pelo conteúdo. Revisor: [Bruno Ferreira Dornelas](https://github.com/brunnf).

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `1.0` | 15/11/2026 | Consolidação da sessão, resultados e decisões de reprojeto | [Luís Henrique Arruda Luna](https://github.com/Donnk61) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |
| `1.1` | 15/11/2026 | Registro da nota geral 5/5 e seção de acesso ao protótipo | [Luís Henrique Arruda Luna](https://github.com/Donnk61) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. Seção 10.2.1, p. 341–343.

[2] SALES, André Barros de. *Plano de Ensino FIHC 022026 — Turma 01*, v1. FCTE/UnB, 2026. Cronograma, p. 5 do PDF.

[3] GRUPO 06. [Planejamento da avaliação de alta fidelidade](../../../entrega-6/individual/luis/planejamento-avaliacao-alta-fidelidade.md) e [relato do protótipo de papel](../../../entrega-6/individual/luis/relato-prototipo-papel.md). 2026.
