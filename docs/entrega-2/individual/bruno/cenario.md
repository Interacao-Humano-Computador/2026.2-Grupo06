<span class="owner">Responsável: Bruno Ferreira Dornelas — Cenário</span>

# Cenário

## Tabela de contribuição

A Tabela 1 registra quem atuou neste artefato.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Identificação do cenário | [Identificação](cenario.md#identificacao) |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Perguntas exploradas pelo cenário | [Perguntas](cenario.md#perguntas-exploradas) |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Narrativa e análise do cenário | [Narrativa](cenario.md#narrativa) |

<p class="caption">Tabela 1 — Contribuição neste artefato.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026).</p>

## Introdução

Este é um **cenário de problema**: ele conta como a [persona](persona.md) tenta descobrir hoje, no Portal do Senado Federal, se um projeto de lei que viu circular nas redes sociais foi aprovado. A narrativa se apoia no perfil de cidadã leiga da participante e nas tarefas levantadas na [sessão de entrevista e observação](entrevista-observacao.md), e segue a [estrutura dos cenários do grupo](../../cenarios.md#estrutura-dos-cenarios).

## Identificação

A Tabela 2 identifica o cenário.

| Campo | Registro |
| --- | --- |
| Título | O badge "Em tramitação" não diz se a lei já vale |
| Ator | [Mariana Costa](persona.md), assistente administrativa, 23 anos, cursando Administração (cidadã leiga) |
| Objetivo principal | Saber se um projeto de lei sobre jornada de trabalho já foi aprovado, e o que ele muda na prática |
| Situação inicial | Mariana está no computador do escritório durante o expediente. Viu mensagens no WhatsApp sobre um projeto de lei e quer confirmar na fonte oficial antes de comentar com os colegas |
| Tipo | Cenário de problema: situação atual, antes do reprojeto |
| Sistema envolvido | Portal do Senado Federal, com foco na busca geral e na página de detalhes da matéria |
| Tarefa modelada | [Análise de tarefas (HTA e CTT)](analise-tarefas.md) |

<p class="caption">Tabela 2 — Identificação do cenário.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026).</p>

## Perguntas exploradas

Como no Exemplo 6.5 do livro, as perguntas abaixo expressam o que o cenário precisa esclarecer. Na narrativa, o número de cada pergunta aparece entre colchetes logo depois do trecho que a responde (BARBOSA; SILVA, 2010, p. 189–190).

1. O que leva a persona a acessar o portal e em que contexto isso acontece?
2. Por onde ela chega ao site do Senado?
3. Que termos ela usa para buscar?
4. Como ela interpreta a lista de resultados misturada entre notícias, proposições e pronunciamentos?
5. O que ela faz na página da matéria para entender o status do projeto?
6. Como ela sabe se o objetivo foi alcançado — se a lei já vale ou não?
7. O que ela faz com a informação depois de terminar a busca?
8. Quem mais se interessa pelo resultado da consulta?
9. Em que pontos o portal atrapalha ou força a persona a contornar algo?

## Narrativa

A narrativa é um cenário de problema: conta a atividade como ela existe hoje, antes de qualquer reprojeto (BARBOSA; SILVA, 2010, p. 184). O número entre colchetes aponta a pergunta da lista acima, como no Exemplo 6.5 (p. 190). O caminho até a lista de resultados e o comportamento na página da matéria refletem o funcionamento real da busca do portal. O que Mariana faz com a informação depois da sessão vem do perfil levantado na entrevista; as limitações do que foi observado estão na [página da sessão](entrevista-observacao.md).

**O badge "Em tramitação" não diz se a lei já vale**

Atores: Mariana Costa (cidadã leiga)

No meio do expediente, Mariana recebe no WhatsApp uma sequência de mensagens do grupo da família sobre um projeto de lei que mudaria a jornada de trabalho [1] [8]. Algumas pessoas dizem que já foi aprovado; outras, que ainda não. Ela quer confirmar antes de opinar [1]. Abre o Chrome no computador do escritório, não sabe o endereço do Senado de cor e digita "senado projeto jornada de trabalho" no Google [2] [3]. Clica no primeiro resultado institucional [2].

A página inicial do portal carrega com um menu de navegação horizontal fixo no topo e quatro atalhos principais — "Conheça os Senadores", "Veja as ações institucionais", "Acompanhe a atividade legislativa" e "Transparência e prestação de contas" — e um botão de lupa com o rótulo "Buscar" à direita [9]. Mariana não vê um campo de texto aberto; clica na lupa, e um overlay se expande por toda a largura do cabeçalho com o campo "Buscar" e a instrução "Aperte o Enter para buscar ou Esc para fechar" [4]. Ela digita "jornada de trabalho" e aperta Enter [3].

A busca leva para uma página separada (`senado.leg.br/busca`) com seis abas: **Tudo** (ativa por padrão), **Notícias** (5.736), **Proposições** (746), **Senadores** (16), **Pronunciamentos** (3.198), **Legislação** (1.142) e um menu "Mais" [4]. Na aba "Tudo", os resultados misturam notícias da Agência Senado, discursos em plenário e projetos de lei, cada um com um badge laranja "Em tramitação" e a identificação em código — "PL 5253/2026", "PEC 438/2023" — seguida do nome do senador autor e da ementa jurídica [4] [9]. Mariana não sabe o que distingue um PL de uma PEC [3]. Ela não usa os botões "Classificar por" e "Filtros" porque não entende o que "fase da instrução" ou "relator" significam [9]. Percorre a lista e clica no resultado cujo título parece mais próximo do que viu nas mensagens [4].

Abre a página do projeto, que traz no topo o título formal ("Projeto de Lei nº 5253, de 2026"), o autor e uma ementa técnica. Logo abaixo, uma caixa "Entenda a proposta" recolhida, gerada por IA, com "O que é" e "O que diz o autor". Mariana a abre e lê um resumo em linguagem mais simples — mas a caixa descreve o texto inicial do projeto, não o estado atual da tramitação [5]. Na sequência, um cartão "Situação Atual" exibe o badge amarelo **"Em tramitação"**, o campo "Último local" — "Plenário do Senado Federal (Secretaria Legislativa do Senado Federal)" — e "Último estado" — **"AGUARDANDO DESPACHO"** — com a data [5] [9]. Ela não sabe se "aguardando despacho" quer dizer que o projeto está prestes a ser votado ou que ficará parado por meses [5] [6].

Rola a página, abre a seção "Tramitação" e vê uma tabela com o código do órgão ("PLEN"), a situação ("AGUARDANDO DESPACHO") e uma nota técnica ("Autuado o Projeto de Lei nº 5253/2026. O projeto vai à publicação.") [5] [9]. Não há explicação de onde o projeto está na fila de votação nem um indicador de quantas etapas faltam. Ela fecha a aba [6] e manda para o grupo do WhatsApp o link de uma matéria de portal jornalístico que leu antes, porque o Senado não deu a resposta que ela precisava [7] [8].

## Análise do cenário

Como no Exemplo 6.4, estes pontos são problemáticos e o reprojeto precisa considerá-los (BARBOSA; SILVA, 2010, p. 185):

- o campo de busca não é visível por padrão; ele fica oculto atrás de um botão de lupa, o que atrasa quem entra no portal para pesquisar;
- a lista de resultados na aba "Tudo" mistura notícias, pronunciamentos e proposições sem distinção visual entre os tipos; quem não conhece as siglas PL, PEC e PLP não sabe o que está abrindo;
- os botões "Classificar por" e "Filtros" existem, mas os critérios disponíveis — fase da instrução, relator — exigem conhecimento regimental que o cidadão leigo não tem;
- o cartão "Situação Atual" exibe o badge "Em tramitação" e o estado "AGUARDANDO DESPACHO" sem explicar o que cada etapa significa ou em que ponto do ciclo legislativo o projeto está;
- a seção "Entenda a proposta", gerada por IA, descreve o texto inicial, não o estado atual; uma cidadã leiga que a abre achando que encontrará a resposta sobre aprovação sai frustrada.

Como no Exemplo 6.5, pensar nas perguntas mostra lacunas (BARBOSA; SILVA, 2010, p. 190–191). A pergunta 6 fica sem resposta no portal: Mariana não consegue saber se a lei já vale. A pergunta 7 mostra que a tarefa falhou: a referência que ela compartilhou veio de um veículo externo, não do portal oficial. Esses dois pontos concentram o maior potencial de melhoria no reprojeto.

## Agradecimentos

Esta página contou com o apoio de ferramenta de inteligência artificial generativa na estruturação, na redação preliminar e na formatação Markdown. A revisão do conteúdo, a observação do comportamento real do portal e a coleta que sustenta a narrativa são do autor, que segue responsável pelo que está publicado.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `0.1` | 21/09/2026 | Identificação do cenário e perguntas exploradas | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |
| `0.2` | 26/09/2026 | Narrativa e análise a partir do perfil da sessão | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |
| `1.0` | 26/09/2026 | Narrativa revisada com o comportamento real do portal verificado; análise do cenário alinhada às perguntas exploradas | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. Interação humano-computador. Rio de Janeiro: Elsevier, 2010.
