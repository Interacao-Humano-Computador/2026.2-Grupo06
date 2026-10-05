<span class="owner">Responsável: Bruno Ferreira Dornelas — Análise de tarefas</span>

# Análise de tarefas

## Tabela de contribuição

A Tabela 1 registra quem atuou neste artefato.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Definição da tarefa e dos objetivos da análise | [Tarefa analisada](analise-tarefas.md#tarefa-analisada) |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | HTA | [HTA](analise-tarefas.md#analise-hierarquica-de-tarefas-hta) |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | CTT | [CTT](analise-tarefas.md#arvore-de-tarefas-concorrentes-ctt) |
| ChatGPT (OpenAI GPT-4o) | Estruturação do texto, redação preliminar e formatação Markdown | [Agradecimentos](analise-tarefas.md#agradecimentos) |
| Codex (OpenAI) | Correções de consistência e rastreabilidade| [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuição neste artefato.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026).</p>

## Introdução

Esta página modela a tarefa do [cenário de Lucas Mendes](cenario.md), persona derivada de P1. A HTA e a CTT representam o percurso registrado na [Tabela 5 da sessão](entrevista-observacao.md#registro-da-observacao), realizada em 27/09/2026. A modelagem foi conferida com esse registro textual; esta revisão não representa uma nova sessão ou validação com o participante.

## Tarefa analisada

A Tabela 2 explicita objetivo, resultado e fonte da análise (BARBOSA; SILVA, 2010, p. 195).

| Campo | Registro |
| --- | --- |
| Objetivo do usuário | Compreender a situação da proposta sobre jornada 6×1 e seu possível impacto sobre familiares e colegas |
| Persona / participante de origem | [Lucas Mendes](persona.md) / P1 |
| Sistema | Senado Notícias, busca do portal e página de proposição; Google como ponto de entrada externo |
| Objetivo da análise | Identificar obstáculos à escolha da proposição correta e à interpretação de sua situação |
| Evidência de sucesso | Identificar a proposição pertinente e explicar sua situação sem confundir proposta, aprovação e vigência; P1 não alcançou essa condição |
| Resultado registrado | P1 escolheu o PL 5253/2026, não compreendeu a situação e encerrou a tentativa sem resposta. A correspondência desse PL com a PEC procurada não foi demonstrada |
| Alternativa relatada | Recorrer a notícia de outro veículo; compartilhamento externo não foi observado nesta tarefa |
| Fonte | Entrevista e Tabela 5 do registro da observação; não se atribuem a P1 caminhos apenas inspecionados pelo autor |

<p class="caption">Tabela 2 — Objetivo e limites da tarefa analisada.</p>
<p class="source">Fonte: sessão de P1 registrada pelo Grupo 06 (2026).</p>

## Análise Hierárquica de Tarefas (HTA)

A HTA organiza objetivos, subobjetivos, operações e planos. A referência é Barbosa e Silva (2010, p. 192–195). A árvore abaixo está orientada de cima para baixo. Os números indicam a hierarquia, e os planos indicam a sequência; as setas da árvore expressam decomposição, não fluxo temporal.

| Notação | Significado |
| --- | --- |
| `0`, `1`, `1.1` | Objetivo geral, subobjetivo e operação |
| `plano: 1 → 2 → 3 → 4` | Sequência de execução adotada neste modelo |
| Retângulo de borda contínua | Objetivo ou operação da decomposição |
| Linha entre pai e filho | Decomposição hierárquica |
| *input* / *feedback* | Condição inicial e resposta percebida, inclusive quando insuficiente para atingir o objetivo |

<p class="caption">Tabela 3 — Legenda da representação da HTA.</p>
<p class="source">Fonte: adaptação gráfica do grupo a partir de BARBOSA; SILVA (2010, p. 193–195).</p>

Não se usam bordas grossas ou tracejadas como categorias de evidência nesta versão. A origem dos passos e as dificuldades estão na Tabela 4. A tentativa registrada termina sem sucesso; executar as operações não significa alcançar o objetivo 0.

```mermaid
flowchart TD
    T0["0. Compreender a situação da proposta sobre jornada<br/>plano: 1 → 2 → 3 → 4"]
    T1["1. Chegar à informação do Senado<br/>plano: 1.1 → 1.2"]
    T2["2. Buscar uma proposição<br/>plano: 2.1 → 2.2"]
    T3["3. Selecionar resultado<br/>plano: 3.1 → 3.2"]
    T4["4. Tentar interpretar a situação<br/>plano: 4.1 → 4.2 → 4.3 → 4.4"]
    T11["1.1 Pesquisar no Google"]
    T12["1.2 Acessar notícia do Senado"]
    T21["2.1 Localizar e abrir a busca"]
    T22["2.2 Pesquisar jornada de trabalho"]
    T31["3.1 Examinar resultados"]
    T32["3.2 Selecionar o PL 5253/2026"]
    T41["4.1 Ler resumo da proposta"]
    T42["4.2 Examinar situação atual"]
    T43["4.3 Examinar tramitação"]
    T44["4.4 Encerrar sem resposta"]
    T0 --> T1
    T0 --> T2
    T0 --> T3
    T0 --> T4
    T1 --> T11
    T1 --> T12
    T2 --> T21
    T2 --> T22
    T3 --> T31
    T3 --> T32
    T4 --> T41
    T4 --> T42
    T4 --> T43
    T4 --> T44
```

<p class="caption">Figura 1 — HTA da tentativa registrada de P1.</p>
<p class="source">Fonte: Grupo 06, a partir da Tabela 5 da sessão; organização baseada em BARBOSA; SILVA (2010, p. 194–195).</p>

| Objetivo / operação | Input, feedback e origem | Problema / necessidade derivada |
| --- | --- | --- |
| 0. Compreender a situação | Input: dúvida sobre jornada 6×1. Feedback esperado: resposta compreensível sobre a proposição correta; não obtido | Distinguir documento escolhido, situação da proposta e eventual vigência da norma |
| 1. Chegar à informação do Senado | Plano 1.1 → 1.2 | A entrada real é pelo Senado Notícias |
| 1.1 Pesquisar no Google | Input: dúvida e endereço desconhecido. Ação: buscar “senado jornada de trabalho”. Feedback: resultados. Observação, passo 1 | Apoiar acesso por assunto |
| 1.2 Acessar notícia | Input: resultado institucional. Feedback: notícia do Senado aberta. Observação, passo 2 | Manter contexto na passagem da notícia para a proposição |
| 2. Buscar uma proposição | Plano 2.1 → 2.2 | Descoberta do mecanismo de busca |
| 2.1 Localizar e abrir busca | Input: notícia aberta. Feedback: campo de busca acessível. Observação, passo 3, com hesitação | Tornar a busca identificável |
| 2.2 Pesquisar assunto | Input: campo aberto. Ação: pesquisar “jornada de trabalho”. Feedback: lista de resultados. Observação, passo 4 | Apresentar resultados compreensíveis por tipo |
| 3. Selecionar resultado | Plano 3.1 → 3.2 | Dificuldade de reconhecer a proposição pertinente |
| 3.1 Examinar resultados | Input: lista. Feedback: candidato julgado relevante. Observação, passo 4, com hesitação | Explicar os tipos de documento e distinguir notícia de proposição |
| 3.2 Selecionar PL | Input: resultado escolhido. Feedback: página do PL 5253/2026. Observação, passo 5 | Seleção observada não comprova correspondência à PEC desejada |
| 4. Tentar interpretar situação | Plano 4.1 → 4.2 → 4.3 → 4.4, conforme a tentativa registrada | A sequência termina em abandono |
| 4.1 Ler resumo | Input: página da proposição. Feedback: conteúdo da proposta, sem resposta sobre seu estado atual. Observação, passo 6 | Distinguir conteúdo e situação atual |
| 4.2 Examinar situação atual | Input: busca por situação. Feedback: “AGUARDANDO DESPACHO”, não compreendido. Observação, passo 7 | Explicar o significado do estado em linguagem acessível |
| 4.3 Examinar tramitação | Input: dúvida persistente. Feedback: histórico não compreendido. Observação, passo 8 | Tornar o histórico interpretável para iniciantes |
| 4.4 Encerrar sem resposta | Input: informação insuficiente para o participante. Feedback: fim da tentativa. Observação, passo 9 | Registrar a falha sem pressupor que a notícia externa foi acessada |

<p class="caption">Tabela 4 — Operações, evidências e necessidades da HTA.</p>
<p class="source">Fonte: registro da observação de P1. As necessidades são interpretações de design, ainda não avaliadas.</p>

## Árvore de Tarefas Concorrentes (CTT)

A CTT distingue tarefas abstratas, do usuário, interativas e do sistema, relacionando-as temporalmente (BARBOSA; SILVA, 2010, p. 203–205). A modelagem cobre a mesma tentativa da HTA. Respostas de carregamento do sistema são explicitadas para representar a interação; não constituem medições adicionais.

| Tipo / representação gráfica adotada | Significado |
| --- | --- |
| Abstrata / retângulo tracejado | Agrupa subtarefas |
| Usuário / caixa arredondada | Leitura, interpretação ou decisão |
| Interativa / retângulo contínuo | Ação do usuário sobre a interface |
| Sistema / hexágono | Resposta da aplicação |

<p class="caption">Tabela 5 — Tipos de tarefa e convenção visual local.</p>
<p class="source">Fonte: tipos de BARBOSA; SILVA (2010, p. 203); formas gráficas adaptadas pelo grupo para Mermaid, não os ícones originais da CTT.</p>

| Operador | Significado |
| --- | --- |
| `T1 >> T2` | T2 é habilitada após o término de T1 |
| `T1 []>> T2` | Habilitação com passagem de informação de T1 para T2 |

<p class="caption">Tabela 6 — Operadores utilizados nesta CTT.</p>
<p class="source">Fonte: BARBOSA; SILVA (2010, p. 203–204).</p>

```text
Verificar = ChegarAoSenado >> BuscarProposicao >> SelecionarResultado >> InterpretarSituacao
ChegarAoSenado = PesquisarNoGoogle []>> ExibirResultadosGoogle >> AcessarNoticia []>> CarregarNoticia
BuscarProposicao = AbrirBusca >> InformarTermo []>> ExibirResultadosPortal
SelecionarResultado = ExaminarResultados >> SelecionarPL []>> CarregarProposicao
InterpretarSituacao = AbrirResumo []>> ExibirResumo >> LerResumo >> ExaminarSituacao >> AbrirTramitacao []>> ExibirTramitacao >> LerTramitacao >> DecidirEncerrar >> FecharPagina
```

<p class="caption">Figura 2 — CTT textual da tentativa de P1.</p>
<p class="source">Fonte: elaboração a partir do registro da sessão.</p>

| Tarefas | Tipo | Correspondência na HTA |
| --- | --- | --- |
| Verificar, ChegarAoSenado, BuscarProposicao, SelecionarResultado, InterpretarSituacao | Abstrata | 0, 1, 2, 3 e 4 |
| PesquisarNoGoogle, AcessarNoticia | Interativa | 1.1 e 1.2 |
| AbrirBusca, InformarTermo | Interativa | 2.1 e 2.2 |
| ExaminarResultados | Usuário | 3.1 |
| SelecionarPL | Interativa | 3.2 |
| AbrirResumo, AbrirTramitacao, FecharPagina | Interativa | 4.1, 4.3 e 4.4 |
| LerResumo, ExaminarSituacao, LerTramitacao, DecidirEncerrar | Usuário | 4.1, 4.2, 4.3 e 4.4 |
| ExibirResultadosGoogle, CarregarNoticia, ExibirResultadosPortal, CarregarProposicao, ExibirResumo, ExibirTramitacao | Sistema | Respostas às operações correspondentes |

<p class="caption">Tabela 7 — Tipos das tarefas e correspondência com a HTA.</p>
<p class="source">Fonte: elaboração do Grupo 06 a partir da sessão.</p>

A Figura 3 representa a decomposição da CTT. A expressão na caixa de cada tarefa abstrata informa a ordem e os operadores da Figura 2; as arestas indicam somente a hierarquia. A sequência modela esta tentativa e não proíbe outros percursos no portal.

```mermaid
flowchart TD
    V["Verificar<br/>C >> B >> S >> I"]
    C["C: ChegarAoSenado<br/>C1 &#91;&#93;>> C2 >> C3 &#91;&#93;>> C4"]
    B["B: BuscarProposicao<br/>B1 >> B2 &#91;&#93;>> B3"]
    S["S: SelecionarResultado<br/>S1 >> S2 &#91;&#93;>> S3"]
    I["I: InterpretarSituacao<br/>I1 &#91;&#93;>> I2 >> I3 >> I4 >> I5 &#91;&#93;>> I6 >> I7 >> I8 >> I9"]
    C1["C1: PesquisarNoGoogle"]
    C2{{"C2: ExibirResultadosGoogle"}}
    C3["C3: AcessarNoticia"]
    C4{{"C4: CarregarNoticia"}}
    B1["B1: AbrirBusca"]
    B2["B2: InformarTermo"]
    B3{{"B3: ExibirResultadosPortal"}}
    S1(["S1: ExaminarResultados"])
    S2["S2: SelecionarPL"]
    S3{{"S3: CarregarProposicao"}}
    I1["I1: AbrirResumo"]
    I2{{"I2: ExibirResumo"}}
    I3(["I3: LerResumo"])
    I4(["I4: ExaminarSituacao"])
    I5["I5: AbrirTramitacao"]
    I6{{"I6: ExibirTramitacao"}}
    I7(["I7: LerTramitacao"])
    I8(["I8: DecidirEncerrar"])
    I9["I9: FecharPagina"]
    V --> C
    V --> B
    V --> S
    V --> I
    C --> C1
    C --> C2
    C --> C3
    C --> C4
    B --> B1
    B --> B2
    B --> B3
    S --> S1
    S --> S2
    S --> S3
    I --> I1
    I --> I2
    I --> I3
    I --> I4
    I --> I5
    I --> I6
    I --> I7
    I --> I8
    I --> I9
    classDef abstrata stroke-dasharray: 6 4
    class V,C,B,S,I abstrata
```

<p class="caption">Figura 3 — Decomposição da CTT, com convenções gráficas do grupo.</p>
<p class="source">Fonte: sessão de P1; tipos e operadores de BARBOSA; SILVA (2010, p. 203–204).</p>

## Agradecimentos

Esta página contou com o apoio do ChatGPT (OpenAI GPT-4o) na estruturação, na redação preliminar e na formatação Markdown. A revisão do conteúdo, a verificação do comportamento real do portal e a conferência das referências no livro são do autor, que segue responsável pelo que está publicado.


## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `0.1` | 21/09/2026 | Tarefa analisada e legendas da HTA e da CTT | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |
| `1.0` | 26/09/2026 | HTA e CTT a partir do perfil da persona | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |
| `1.1` | 03/10/2026 | Nomeia a ferramenta de IA nos agradecimentos e na tabela de contribuição | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | [Luís Henrique Luna de Arruda](https://github.com/Donnk61) |
| `1.2` | 05/10/2026 | Alinha HTA e CTT à sequência registrada de P1, explicita origem das operações e convenções gráficas | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. Interação humano-computador. Rio de Janeiro: Elsevier, 2010.

[2] PATERNÒ, Fabio. Model-based design and evaluation of interactive applications. London: Springer, 2000.
