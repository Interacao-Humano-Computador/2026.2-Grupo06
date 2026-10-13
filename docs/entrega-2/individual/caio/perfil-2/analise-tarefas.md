<span class="owner">Responsável: Caio Breno de Souza Bezerra — Perfil de usuário 2</span>

# Análise de tarefas — Preparar e enviar uma ideia

## Tabela de contribuição

A Tabela 1 registra a elaboração desta proposta, ainda sujeita à revisão humana.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | Responsável pelo novo recorte e pela revisão da proposta | [Conteúdo](#introducao) |
| Codex (OpenAI) | Pesquisa documental, organização, modelagem e redação preliminar | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuições neste artefato.</p>
<p class="source">Fonte: registro da elaboração (2026).</p>

## Introdução

A análise decompõe o objetivo de [Camila](persona.md) no [cenário de revisão](cenario.md). A HTA organiza objetivos, operações e planos; a CTT explicita tipos de tarefa e relações temporais (BARBOSA; SILVA, 2010, p. 192–195, 203–205). Os modelos são documentais e propostos: não representam cliques observados nem telas autenticadas verificadas.

## Tarefa analisada

**Objetivo 0:** encaminhar uma ideia própria com conteúdo revisado e compreender o resultado da submissão. **Entrada:** intenção de propor uma melhoria, rascunho e possibilidade de autenticação própria. **Término:** envio reconhecido como recebido, com entendimento de que há etapa posterior de avaliação. Publicação, apoios e decisão legislativa pertencem a processos posteriores.

A revisão é uma operação da pessoa. Não se afirma que o portal disponha de rascunho persistente, pré-visualização, confirmação adicional ou detecção automática de dados pessoais.

## Análise Hierárquica de Tarefas (HTA)

A hierarquia textual abaixo e as tabelas representam o mesmo modelo. Os números identificam objetivos e operações; o plano define como executar seus filhos. A representação textual evita depender de uma imagem para ler a análise.

```text
0 Encaminhar uma ideia revisada e compreender o resultado
  1 Preparar a participação
    1.1 Examinar regras e verificar ideia própria equivalente aberta
    1.2 Preparar o conteúdo da proposta
  2 Revisar o compromisso
    2.1 Conferir intenção, regras e informação pessoal no texto
    2.2 Corrigir o conteúdo, quando necessário
    2.3 Decidir se o texto está pronto para submissão
  3 Submeter a proposta
    3.1 Obter acesso autenticado
    3.2 Informar o conteúdo revisado no serviço
    3.3 Conferir o conteúdo informado e efetivar o envio
  4 Interpretar o resultado
    4.1 Verificar o retorno disponível sobre o envio
    4.2 Distinguir recebimento das etapas posteriores
```

### Planos da HTA

A Tabela 2 estabelece sequência, decisões e condições de parada. `>` indica sequência; os números completos evitam ambiguidade entre níveis.

| Objetivo | Plano | Condição / alternativa |
| --- | --- | --- |
| 0 | `1 > 2 > 3 > 4` | Percurso do cenário. Se desistir antes do envio, registrar objetivo não concluído; não forçar submissão |
| 1 | `1.1 > 1.2` | Diante de ideia própria equivalente aberta, não repetir o envio; rever objetivo ou encerrar |
| 2 | `2.1 > [2.2 quando necessário] > 2.3` | Se ainda houver problema, voltar a 2.1; avançar apenas quando decidir que está pronto |
| 3 | `3.1 > 3.2 > 3.3` | Se já autenticada, verificar acesso em 3.1. Sem acesso, parar. Se a conferência revelar problema, corrigir antes de efetivar |
| 4 | `4.1 > 4.2` | Sem evidência de recebimento, resultado indeterminado; investigar antes de tentar reenviar |

<p class="caption">Tabela 2 — Planos de execução e alternativas.</p>
<p class="source">Fonte: elaboração a partir de E01–E08; conceito de planos de BARBOSA; SILVA (2010, p. 193).</p>

### Operações, entradas e condições de atingimento

A Tabela 3 segue a estrutura entrada–ação–feedback discutida por Barbosa e Silva (2010, p. 193–195). “Feedback” é a condição de atingimento da operação; não designa uma mensagem de interface que já tenha sido observada.

| ID | Entrada | Ação | Condição de atingimento | Base |
| --- | --- | --- | --- | --- |
| 1.1 | Intenção de participação e orientações públicas | Examinar condições e eventual ideia própria equivalente | Regras pertinentes consideradas; ausência de duplicação impeditiva | E03–E06 |
| 1.2 | Problema e intenção | Preparar proposta fora do portal | Rascunho expressa a melhoria desejada | Decisão sobre E01 |
| 2.1 | Rascunho e regras | Reler conteúdo e identificar informação inadequada | Itens a corrigir identificados ou revisão sem ressalvas | Decisão sobre E05–E06 |
| 2.2 | Problema identificado | Alterar o rascunho | Problema removido sem perder a intenção | Operação recomendada antes do envio |
| 2.3 | Texto revisto | Decidir prosseguir ou adiar | Decisão consciente sobre o compromisso | Decisão sobre E06 |
| 3.1 | Identidade própria e acesso ao serviço | Autenticar ou verificar sessão | Acesso autorizado disponível | E02; diálogo interno não modelado |
| 3.2 | Conteúdo e acesso | Informar a proposta | Conteúdo representado para submissão | E01; campos não especificados |
| 3.3 | Conteúdo informado | Conferir correspondência e enviar | Ação de envio realizada uma vez | E01 e E06; não implica recebimento comprovado |
| 4.1 | Envio realizado | Examinar retorno disponível | Recebimento reconhecido ou incerteza registrada | Condição analítica, mensagem não verificada |
| 4.2 | Retorno e regras | Interpretar o estado e a próxima etapa | Explica diferença entre envio e avaliação posterior | E04, E07–E08 |

<p class="caption">Tabela 3 — Especificação das operações.</p>
<p class="source">Fonte: modelagem documental do projeto; BARBOSA; SILVA (2010, p. 193–195).</p>

## Árvore de Tarefas Concorrentes (CTT)

A expressão textual organiza a decomposição da CTT. Os tipos são: **A**, abstrata; **U**, pessoa fora do sistema; **I**, interação; **S**, processamento do sistema. `>>` significa ativação sequencial e `[]>>` acrescenta passagem de informação (BARBOSA; SILVA, 2010, p. 203–204). A tabela tipa as folhas; os quatro objetivos intermediários e a raiz são abstratos.

```text
EncaminharIdeia(A) = Preparar(A) >> Revisar(A) >> Submeter(A) >> Interpretar(A)
Preparar(A) = ExaminarOrientacoes(I) >> PrepararTexto(U)
Revisar(A) = ConferirTexto(U) >> ResolverRevisao(A) >> DecidirProsseguir(U)
ResolverRevisao(A) = CorrigirTexto(U) [] ManterTexto(U)
Submeter(A) = ObterAcesso(I) >> InformarConteudo(I) >> ConferirEEnviar(I)
Interpretar(A) = DisponibilizarRetorno(S) []>> ExaminarRetorno(I) >> InterpretarEstado(U)
```

`[]` representa escolha: corrigir ou manter o texto, conforme a conferência. A expressão cobre um ciclo de revisão e o percurso com envio; a repetição, o adiamento e as condições de falha são definidos na HTA. Não se declara que essa expressão simplificada cubra todos os comportamentos da plataforma. Disponibilizar retorno abstrai uma resposta do serviço, sem afirmar mecanismo interno ou execução automática da moderação.

A Tabela 4 mantém a correspondência entre modelos.

| Folha CTT | Tipo | Operação HTA / interpretação |
| --- | --- | --- |
| ExaminarOrientacoes | I | 1.1; consulta às regras e verificação pertinente |
| PrepararTexto | U | 1.2; preparação externa |
| ConferirTexto | U | 2.1; revisão mental |
| CorrigirTexto / ManterTexto | U | 2.2 condicional; decisão de manter não exige edição |
| DecidirProsseguir | U | 2.3 |
| ObterAcesso | I | 3.1; autenticação tratada como unidade |
| InformarConteudo | I | 3.2 |
| ConferirEEnviar | I | 3.3; revisão da informação e ativação do envio |
| DisponibilizarRetorno | S | Condição externa necessária a 4.1; implementação não verificada |
| ExaminarRetorno | I | 4.1 |
| InterpretarEstado | U | 4.2 |

<p class="caption">Tabela 4 — Tipos e correspondência entre CTT e HTA.</p>
<p class="source">Fonte: elaboração; categorias de BARBOSA; SILVA (2010, p. 203–205).</p>

## Relação com os requisitos e a avaliação

O ponto central de segurança é evitar submeter conteúdo que a pessoa ainda precisa corrigir. A [Etapa 3](../../../../entrega-3/metas-usabilidade.md) prioriza segurança e aprendizado; a [plataforma](../../../../entrega-3/plataforma.md) alerta para transições entre endereços. O [guia de estilo](../../../../entrega-3/guia-de-estilo.md) oferece referências de rótulos, ajuda, ativação e feedback para um futuro reprojeto. Suas propostas não comprovam a existência desses componentes no formulário atual.

A [Etapa 4](../../../../entrega-4/caio/index.md) relaciona as operações aos quadros e planeja investigar compreensão, cobertura e alternativas. A avaliação conceitual não demonstrará cumprimento quantitativo das metas M0–M6. Uma execução posterior em protótipo exigirá critérios próprios e dados fictícios.

## Agradecimentos

A pesquisa documental, a modelagem e a redação preliminar tiveram apoio de Codex (OpenAI). O conteúdo é uma proposta sob responsabilidade de Caio; a revisão humana e a validação com pessoas usuárias estão pendentes. Não foram realizadas entrevistas, sessões autenticadas ou submissões reais nesta elaboração.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| --- | --- | --- | --- | --- |
| 0.1 | 13/10/2026 | Proposta documental do segundo perfil de Caio e seus artefatos | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev), com apoio de Codex | Pendente |

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010.

[2] GRUPO 06. [Análise documental — Proponente de ideia legislativa](analise-documental.md), 2026.
