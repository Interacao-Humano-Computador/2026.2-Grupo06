<span class="owner">Responsável: Caio Breno de Souza Bezerra — Análise de tarefas</span>

# Análise de tarefas

## Tabela de contribuição

A Tabela 1 registra quem atuou neste artefato.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | Definição da tarefa e dos objetivos da análise | [Tarefa analisada](analise-tarefas.md#tarefa-analisada) |
| [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | HTA | [HTA](analise-tarefas.md#analise-hierarquica-de-tarefas-hta) |
| [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | CTT | [CTT](analise-tarefas.md#arvore-de-tarefas-concorrentes-ctt) |

<p class="caption">Tabela 1 — Contribuição neste artefato.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026).</p>

## Introdução

Esta página modela a tarefa do [cenário](cenario.md) em duas técnicas: **Análise Hierárquica de Tarefas (HTA)** e **Árvore de Tarefas Concorrentes (CTT)**. As duas partem da [observação](entrevista-observacao.md#protocolo-de-observacao) da tarefa real no portal e são complementadas pela entrevista. Quando se avalia um sistema existente, a análise de tarefas pode ser bem concreta e descrever o comportamento em detalhe (BARBOSA; SILVA, 2010, p. 191), que é o caso do Portal do Senado.

## Tarefa analisada

Diaper (2003 apud BARBOSA; SILVA, 2010, p. 195) recomenda começar definindo os objetivos da análise, qual evidência objetiva mostra que o objetivo foi atingido e quais são as consequências de não atingi-lo. A Tabela 2 registra essas definições.

| Campo | Registro |
| --- | --- |
| Objetivo do usuário | Levantar as notícias do Senado sobre o setor aeroespacial publicadas no período do anuário |
| Usuário | [Persona](persona.md) do perfil cidadão com consulta pontual |
| Sistema | Portal do Senado Federal, com foco nas notícias e na busca |
| Objetivo da análise | Identificar como o portal atual facilita ou dificulta esse levantamento, para embasar o reprojeto |
| Evidência de sucesso | Notícias do período registradas com título, data e link, sem notícia relevante de fora |
| Consequência da falha | A confirmar na entrevista (pergunta 17) |
| Fonte dos dados | Observação da tarefa e entrevista |

<p class="caption">Tabela 2 — Tarefa analisada e objetivos da análise.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026), com base em BARBOSA; SILVA (2010, p. 195).</p>

## Análise Hierárquica de Tarefas (HTA)

A HTA decompõe o objetivo principal em subobjetivos até chegar às **operações**, a unidade fundamental da técnica. Cada operação é descrita pelo que a dispara (*input*), pelas ações que a realizam e pela condição que indica sua conclusão (*feedback*). As relações entre os subobjetivos formam o **plano**, que pode ser uma sequência fixa, uma regra de seleção ou uma execução em paralelo (BARBOSA; SILVA, 2010, p. 193). A análise é apresentada em diagrama e em tabela, no formato da Tabela 6.3 do livro (BARBOSA; SILVA, 2010, p. 194–195). A Tabela 3 é a legenda da notação.

| Notação | Significado |
| --- | --- |
| `0`, `1`, `1.1`, `1.1.1` | Posição do objetivo na hierarquia; `0` é o objetivo principal |
| `1 > 2` | Plano em sequência: primeiro 1, depois 2 |
| `1 / 2` | Plano com regra de seleção: 1 ou 2, conforme a situação |
| `1 + 2` | Plano em paralelo: 1 e 2, em qualquer ordem ou ao mesmo tempo |
| *input* · *feedback* | O que dispara a operação · o que indica que ela foi concluída |
| Problema · Recomendação | Dificuldade observada naquele ponto · mudança proposta para o reprojeto |

<p class="caption">Tabela 3 — Legenda da notação da HTA.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026), com base em BARBOSA; SILVA (2010, p. 193–195).</p>

!!! info "A preencher após a sessão"
    Diagrama e tabela da HTA, construídos a partir do registro da observação: cada passo vira uma operação, e cada hesitação, erro ou contorno vira um problema com recomendação.

## Árvore de Tarefas Concorrentes (CTT)

A CTT também organiza as tarefas em hierarquia, mas distingue quem executa cada uma e explicita as relações temporais entre elas. Com isso, representa não só a análise da tarefa, mas também uma solução de interação (BARBOSA; SILVA, 2010, p. 203–205). A Tabela 4 é a legenda dos tipos de tarefa, e a Tabela 5, a dos operadores.

| Tipo de tarefa | Quem executa |
| --- | --- |
| Tarefa do usuário | O usuário, fora do sistema (por exemplo, decidir se uma notícia é relevante) |
| Tarefa do sistema | O sistema, sem interagir com o usuário (por exemplo, exibir os resultados da busca) |
| Tarefa interativa | Usuário e sistema em diálogo (por exemplo, digitar um termo e acionar a busca) |
| Tarefa abstrata | Nenhum dos dois diretamente: agrupa outras tarefas para organizar a decomposição |

<p class="caption">Tabela 4 — Tipos de tarefa da CTT.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026), com base em BARBOSA; SILVA (2010, p. 203).</p>

| Operador | Nome | Significado |
| :---: | --- | --- |
| `T1 >> T2` | Ativação | T2 só começa depois que T1 termina |
| `T1 []>> T2` | Ativação com passagem de informação | Além disso, T1 passa a T2 a informação que produziu |
| `T1 [] T2` | Escolha | Ao iniciar uma das tarefas, a outra fica desabilitada |
| `T1 ||| T2` | Concorrência | As tarefas ocorrem em qualquer ordem ou ao mesmo tempo |
| `T1 |[]| T2` | Concorrência com comunicação | Além disso, as tarefas trocam informações |
| `T1 |=| T2` | Independência | Qualquer ordem, mas uma precisa terminar para a outra começar |
| `T1 [> T2` | Desativação | T1 é interrompida por completo por T2 |
| `T1 |> T2` | Suspensão e retomada | T1 é interrompida por T2 e retomada de onde parou |

<p class="caption">Tabela 5 — Operadores temporais da CTT.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026), com base em BARBOSA; SILVA (2010, p. 203–204).</p>

!!! info "A preencher após a sessão"
    Árvore CTT construída a partir do mesmo registro da observação, exportada como imagem e acompanhada da legenda dos ícones de cada tipo de tarefa.

## Agradecimentos

Esta página contou com o apoio de ferramenta de inteligência artificial generativa (Claude, da Anthropic) na estruturação, na redação preliminar e na formatação Markdown. A revisão do conteúdo, a conferência das referências no livro e a coleta de dados que sustenta os modelos são do autor, que segue responsável pelo que está publicado.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `0.1` | 21/09/2026 | Tarefa analisada e legendas da HTA e da CTT | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | A definir |

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. Interação humano-computador. Rio de Janeiro: Elsevier, 2010.
