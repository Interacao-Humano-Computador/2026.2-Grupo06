# Roteiro de aplicação — Teste presencial de alta fidelidade

**Recorte:** complementos de ideias legislativas · **Responsável:** Bruno Ferreira Dornelas.

## Tabela de contribuição

| Integrante / ferramenta | Contribuição | Seção |
| --- | --- | --- |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Responsabilidade pelo recorte, planejamento adotado e preparação do roteiro, cartões e fichas | [Uso](#como-usar) |
| Codex (OpenAI) | Apoio à integração dos acessos ao protótipo | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuições.</p>
<p class="source">Fonte: elaboração do projeto (2026).</p>

## Como usar

Instrumento do [planejamento DECIDE](planejamento-avaliacao-alta-fidelidade.md), com **3 sessões individuais** (`AF-P01`, `AF-P02`, `AF-P03`) e um piloto separado (`PP-AF01`). Duração: até **50 minutos**, intervalo de **10 minutos** e reunião final da equipe de **30 minutos**. Os dois objetivos são avaliar as decisões de design e identificar problemas de interação/interface.

**Falas em bloco de citação são para leitura.** Todo o restante é orientação interna. Entregue somente um cartão de tarefa por vez; mantenha os critérios e a ficha do observador fora da vista do participante. Não preencha resultados antes da coleta.

### De onde vêm as decisões

Krug [1] fundamenta a rodada de três pessoas. O roteiro oficial [2] fundamenta a sequência de abertura, caracterização, primeira impressão, tarefas e encerramento, a verbalização e a facilitação neutra. Suas instruções aos observadores [3] fundamentam notas, três problemas prioritários por sessão e discussão conjunta. As falas abaixo são redação operacional para este projeto, não transcrição ou tradução integral de Krug.

Os cenários legislativos, códigos, divisão de minutos, classificação M0/M2/M6, posição do observador na mesma sala quando necessário e publicação acadêmica são adaptações locais. O piloto separado segue Barbosa e Silva [4, p. 307–308]. As perguntas analíticas `AF-Q1–AF-Q7` do planejamento derivam da Tabela 9.1 [4, p. 293].

## Acesso ao protótipo

[Abrir protótipo navegável AF-1.0](../../../prototipos/bruno/alta-fidelidade/index.html){ .md-button .md-button--primary }
[Abrir protótipo no Figma](https://www.figma.com/proto/LAUZecEX9cr4fXp9ddwuhg?node-id=5-2263&starting-point-node-id=5%3A2263){ .md-button }

Consultar o [funcionamento do protótipo e os controles de simulação](roteiro-teste-alta-fidelidade.md#preparacao-e-funcionamento) e o [painel do moderador](../../../prototipos/bruno/alta-fidelidade/moderador.html) na preparação da sessão.

## Preparação da equipe — antes de receber a pessoa

- [ ] Executar o piloto e registrar ajustes; não incorporar seus dados à amostra principal.
- [ ] Confirmar sala reservada, mesa, energia, computador, navegador e gravação local de tela/áudio.
- [ ] Registrar versão/commit e reiniciar dados; manter a mesma versão nos três testes.
- [ ] Conferir `AF-S01a`, `AF-S01b`, `AF-S02`, `AF-S03`, `AF-S04`, `AF-S05` e estados de espera/discordância.
- [ ] Preparar cartões, TCLE e uma ficha do observador por participante.
- [ ] Conferir os textos de contribuição e ajuste abaixo com os estados do protótipo antes de congelar a versão.
- [ ] Fechar contas reais, abas pessoais e notificações; deixar página neutra na tela.
- [ ] Testar áudio e captura sem gravar dados de terceiros.

**Facilitador:** Bruno; conduz e lê os enunciados. **Observador principal:** Luís Henrique, a confirmar; outros integrantes podem acompanhar. A pessoa participante opera mouse e teclado. Preferir observadores em outro ambiente com transmissão de tela; quando inviável, acomodá-los discretamente, sem cercar a pessoa e sem interferir.

## Roteiro do facilitador

### 1. Recepção, apresentação e consentimento — 5 minutos

> Olá! Eu sou Bruno e vou acompanhar esta sessão. Estamos avaliando um protótipo acadêmico de participação legislativa. Queremos descobrir o que precisa melhorar; dificuldades durante o uso são informações úteis para o projeto.

> A atividade dura até 50 minutos. Você pode pedir uma pausa, deixar de responder ou encerrar quando quiser, sem prejuízo. [Nome do observador] fará anotações sobre a interface e o percurso.

> Antes de começar, vamos conferir o termo de consentimento e suas autorizações para participar, gravar tela e áudio e divulgar o registro para fins acadêmicos. Há alguma dúvida sobre o termo?

**Interno:** explicar o destino real do registro: link não listado no YouTube pode ser acessado e compartilhado por quem tiver o link; não prometer acesso restrito apenas à equipe. Confirmar cada autorização prevista no TCLE antes da gravação. Se houver recusa, não gravar/publicar; esclarecer alternativas com a pessoa e adequar o procedimento antes de prosseguir. Não captar nome completo ou assinatura no vídeo.

> Use apenas os dados fictícios dos cartões. Não precisamos de senha, CPF ou conta pessoal. Durante a navegação, conte o que está procurando e o que espera que aconteça. Vou evitar dar instruções sobre o caminho para conseguir observar o uso. Podemos começar?

**Interno:** iniciar gravação somente após autorização. Anunciar código da sessão, data e versão, sem nome civil.

### 2. Caracterização — 5 minutos

Perguntar e registrar sem dados identificadores:

> Que tipos de atividade você costuma realizar pela internet?

> Você já utilizou algum serviço público digital ou participou de uma consulta ou proposta legislativa? Como foi?

> Você já viu este protótipo ou participou de alguma etapa anterior deste projeto?

**Observador:** registrar familiaridade, experiência no domínio, exposição anterior, dispositivo e condições da sala. Não exigir opinião política.

### 3. Primeira impressão — 3 minutos

Abrir `AF-S01a`, sem executar a busca pela pessoa.

> Olhando esta página, o que você entende que é possível fazer aqui? Por enquanto, apenas observe e comente sua impressão.

**Observador:** separar expectativas iniciais de interpretações posteriores; marcar minuto de início. Não corrigir a resposta.

### 4. Execução das tarefas — 25 minutos no conjunto

> Vou entregar uma situação de cada vez. Faça o que faria usando esse serviço. Quando considerar que terminou, me avise.

Entregar e ler **Cartão 1**, depois os demais. Não entregar esta página interna. A busca está permitida, pois é parte do recorte. Iniciar tempo após leitura e esclarecimento do contexto, quando a pessoa começa a agir; parar quando declarar conclusão ou a tentativa for encerrada. Separar tempo de sondagem posterior e pausas técnicas. São regras operacionais locais.

**AF-T1 — critério interno:** localizar a ideia pertinente, abrir seus detalhes e escolher complementar sem indicação do botão. Observar criação de ideia duplicada, apoio no lugar de complemento, desvios e pedidos de ajuda (`AF-Q1`). Não dizer antecipadamente “clique em sugerir complemento”.

**AF-T2 — critério interno:** preencher/selecionar dados, conferir a prévia, confirmar envio e compreender espera pelo autor e aviso por e-mail (`AF-Q2`). Observar se a pessoa revisa por iniciativa própria. Entregar o cartão de dados apenas nesta tarefa. Não antecipar a resposta esperada sobre a espera.

**AF-T3 — critério interno:** apresentar `AF-S03`; registrar leitura dos dois textos, escolha e justificativa (`AF-Q3`). Concordar **ou discordar** pode ser sucesso. Registrar o ramo não percorrido como não avaliado; não obrigar a pessoa a escolher a opção considerada preferível pela equipe.

**AF-T4 — transição a ler antes do cartão:**

> Agora vamos usar uma situação independente da decisão anterior. Imagine que uma contribuição sua foi publicada. Vou preparar esse estado para você consultar.

**Interno:** abrir `AF-S04`. Essa fala apresenta o cenário; não conta como reconhecimento espontâneo do estado de publicação. Observar se a pessoa identifica autoria própria, separa os contadores de 12.343 apoios da ideia e 40 do complemento, e compreende a tela (`AF-Q4`).

**Fala para mudar ao segundo momento:**

> Considere que algum tempo passou. A página foi atualizada. Continue a consulta e conte o que entende que aconteceu.

**Interno:** abrir `AF-S05` sem mencionar CDH, anexo ou lei aprovada. Observar se localiza o Anexo Consultivo #1 e distingue encaminhamento para análise de aprovação de lei (`AF-Q5`). Registrar os dois momentos separadamente.

### Intervenções durante qualquer tarefa

- **Silêncio prolongado:** “O que você está pensando neste momento?”
- **Pedido de confirmação:** “O que você esperaria que acontecesse?”
- **Pessoa declara término:** “Conte o que aconteceu e o que você faria em seguida.”
- **Dificuldade ou frustração:** “Você prefere continuar, fazer uma pausa ou seguir para a próxima situação?”
- **Necessidade de preparar a tarefa seguinte:** “Vou encerrar esta tentativa e preparar outra situação. Isso não é uma avaliação sua.”

Não elogiar acertos, apontar controles ou explicar estados antes de recolher a interpretação. Se uma dica for indispensável, registrar exatamente a fala e a resposta anterior; não classificar compreensão induzida como espontânea. Uma pergunta neutra é **sondagem**, não ajuda operacional; registrar ambas separadamente. Uma ação observada só depois da sondagem não deve ser descrita como inteiramente espontânea.

Não insistir apenas para obter conclusão. Falha técnica é diferente de dificuldade de interface: pausar, registrar e, se necessário, reagendar. Se acabar o tempo, marcar as tarefas não iniciadas como **Não avaliadas**.

### 5. Entrevista final — 10 minutos

Retomar os acontecimentos reais, sem ensinar antes de colher respostas:

> Qual parte foi mais difícil ou deixou dúvida? Você consegue mostrar onde isso aconteceu?

> Na resposta do autor, como você entendeu a diferença entre os textos? O que pesou na sua decisão?

> Nas telas de acompanhamento, o que ficou claro e o que você precisou interpretar com mais esforço?

> Há algo que você mudaria para conseguir realizar essas atividades com mais facilidade?

Recolher M6 **uma vez para cada tarefa efetivamente tentada**, citando a atividade correspondente:

> Pensando na tarefa de [atividade], de 1 a 5, quão satisfeito ou satisfeita você ficou com a experiência? Um significa muito insatisfeito e cinco, muito satisfeito. Por que escolheu essa nota?

**Interno:** registrar tarefa, nota e justificativa; não tratar a escala como instrumento de Krug. Não calcular satisfação para tarefa não tentada. Consultar as questões anotadas pelo observador e selecionar perguntas neutras. `AF-Q7` é respondida pela equipe com estes dados e o histórico do papel; não pedir comparação com versão que a pessoa não utilizou.

### 6. Encerramento — 2 minutos

> Encerramos as atividades. Há alguma pergunta que você gostaria de fazer? Obrigado pela participação; seus comentários vão ajudar a revisar o protótipo.

Esclarecer dúvidas pendentes após a coleta. Parar e salvar a gravação com código/versão; não deixar filmando a conversa de despedida.

## Cartões para o participante

**Imprimir esta seção separadamente e recortar; entregar um cartão por vez.** Não incluir as orientações internas ou os critérios de sucesso. Os quatro enunciados reproduzem o planejamento.

### Cartão 1 — Procurar uma oportunidade de participação

Você quer contribuir para que pessoas ocupadas durante o dia possam usar bibliotecas comunitárias à noite. Procure o que já existe no portal e escolha como participar.

### Cartão 2 — Enviar uma contribuição

Envie a sua contribuição sobre o atendimento noturno para essa ideia e verifique o que acontece após confirmar o envio.

**Dados fictícios:** você está representando Letícia Oliveira. Título: **Atendimento noturno**. Texto e justificativa: **Proponho que as bibliotecas comunitárias ofereçam atendimento noturno para permitir o acesso de pessoas que trabalham ou estudam durante o dia.**

### Cartão 3 — Examinar a resposta

O autor da ideia respondeu sobre a sua contribuição. Compare os textos apresentados e decida como prosseguir.

### Cartão 4 — Acompanhar a contribuição

Consulte novamente a ideia legislativa para ver como ficou a sua contribuição agora e, depois da atualização de tempo, explique o que aconteceu com a proposta.

## Ficha do observador — duplicar por sessão

**Código:** __________ **Data/local:** __________ **Início/fim:** __________

**Versão/commit e URL:** __________ **Navegador/dispositivo:** __________

**Facilitador:** __________ **Observadores:** __________

**Familiaridade digital/legislativa:** __________ **Exposição prévia:** __________

**Consentimentos conferidos:** participação [ ] · gravação [ ] · divulgação [ ]

**Arquivo de gravação:** __________ **Falhas técnicas/pausas:** __________

Observar em silêncio. Registrar comportamentos verificáveis, não suposições sobre capacidade da pessoa. Exemplo de formato, não resultado: “abriu X, voltou e pediu ajuda”, em vez de “não sabe usar”. Não preencher ausência de registro como ausência de problema.

### Registro por tarefa

A Tabela 2 resume a execução. Em T4, distinguir os dois momentos antes de consolidar a conclusão.

| Tarefa | Início/fim no vídeo | Tempo ativo / pausas | M0 | Erros, hesitações e ajuda | M6 / justificativa | Evidências |
| --- | --- | --- | --- | --- | --- | --- |
| T1 | | | | | | |
| T2 | | | | | | |
| T3 | | | | | | |
| T4 — autoria/apoios | | | | | | |
| T4 — encaminhamento | | | | | | |

<p class="caption">Tabela 2 — Registro por tarefa (uma nota M6 consolidada para T4).</p>
<p class="source">Fonte: adaptação operacional do planejamento do projeto (2026).</p>

**M0:** concluída sem ajuda · concluída com ajuda · não concluída · não avaliada. Exigir os dois momentos de T4 para classificar a tarefa inteira como concluída. **M2:** anotar cada erro observável e contexto; hesitação isolada não é automaticamente erro. Tempo com verbalização não é benchmark de desempenho.

### Evidências durante a interação

Preencher a Tabela 3 com uma linha por ocorrência; acrescentar linhas conforme necessário.

| ID (ex.: AF-P01-EV01) | Tarefa/tela/minuto | Ação e resposta da interface | Fala literal ou paráfrase identificada | Espontânea, sondagem ou ajuda? Transcrever intervenção | Pergunta AF-Q / impacto |
| --- | --- | --- | --- | --- | --- |
| | | | | | |
| | | | | | |
| | | | | | |

<p class="caption">Tabela 3 — Evidências localizáveis.</p>
<p class="source">Fonte: planejamento do relato do projeto (2026).</p>

**Focos:** T1 → Q1; T2 → Q2; T3 → Q3; T4/autoria → Q4; T4/encaminhamento → Q5; dificuldades e satisfação → Q6. Q7 usa essas evidências para verificar as decisões do papel.

### Intervalo de 10 minutos — três problemas prioritários

Cada observador seleciona até três problemas mais sérios e vincula evidências. Se identificar menos, não inventar problemas para completar a lista.

1. Problema/local: __________ Evidência: __________ Impacto: __________
2. Problema/local: __________ Evidência: __________ Impacto: __________
3. Problema/local: __________ Evidência: __________ Impacto: __________

Conferir gravação, salvar ficha e reiniciar dados. Não alterar o design no intervalo sem registrar mudança de versão e separar a análise.

## Reunião após as três sessões — 30 minutos

Reunir as listas dos observadores [3], agrupar problemas repetidos e decidir correções. Usar as matrizes do [planejamento do relato](planejamento-relato-alta-fidelidade.md).

- Registrar problema, evidências por participante, tela, impacto e quantidade de pessoas efetivamente expostas.
- Prioridade **alta:** bloqueio, perda da intenção ou interpretação errada de autoria/apoios/aprovação; **média:** retrabalho ou hesitação relevante; **baixa:** ajuste visual complementar. Escala do projeto.
- Relacionar `PP-A01–PP-A04` à alteração e à nova evidência, sem concluir eliminação só porque o problema não apareceu.
- Definir responsável e correção; sem nova coleta, registrar **corrigida, não reavaliada**.
- Responder Q1–Q7 e informar limites de amostra, aprendizado prévio, simulação e contexto. O piloto permanece separado.

## Agradecimentos

O Codex (OpenAI) apoiou a integração dos links do protótipo e do painel do moderador neste roteiro. Bruno Ferreira Dornelas mantém a responsabilidade acadêmica.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `1.0` | 09/11/2026 | Roteiro presencial, cartões e ficha do observador alinhados ao DECIDE revisado | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.1` | 10/11/2026 | Inclusão dos acessos ao protótipo HTML, Figma e painel do moderador | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |

<p class="caption">Tabela 4 — Histórico de versão.</p>
<p class="source">Fonte: elaboração do projeto (2026).</p>

## Referências

[1] KRUG, Steve. *Don’t Make Me Think!*. 1. ed., 2000. cap. 9, p. 146. [Trecho oficial](https://sensible.com/downloads/DMMTchapter09_for_personal_use_only.pdf).

[2] KRUG, Steve. *Usability test script — Web sites*. Reproduzido de *Rocket Surgery Made Easy*, 2010. p. 1–6 do roteiro. [Documento oficial](https://sensible.com/downloads/test-script-web.pdf).

[3] KRUG, Steve. *Instructions for Usability Test Observers*. Reproduzido de *Rocket Surgery Made Easy*, 2010. p. 1–2. [Documento oficial](https://sensible.com/downloads/instructions-for-observers.pdf).

[4] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. p. 290–293, 307–308, 312–313, 341–343.

[5] GRUPO 06. [Planejamento da avaliação](planejamento-avaliacao-alta-fidelidade.md) e [planejamento do relato](planejamento-relato-alta-fidelidade.md). Revisão de 09/11/2026.

Fontes on-line consultadas em 9 nov. 2026.
