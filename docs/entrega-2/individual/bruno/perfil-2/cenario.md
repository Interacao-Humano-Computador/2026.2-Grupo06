<span class="owner">Responsável: Bruno Ferreira Dornelas — Cenário 2</span>

# Cenário

## Tabela de contribuição

A Tabela 1 registra quem atuou neste artefato.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Identificação, perguntas exploradas e narrativa do cenário | [Narrativa](cenario.md#narrativa) |
| ChatGPT (OpenAI GPT-4o) | Estruturação do texto, redação preliminar e formatação Markdown | [Agradecimentos](cenario.md#agradecimentos) |

<p class="caption">Tabela 1 — Contribuição neste artefato.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026).</p>

## Introdução

Este é um **cenário de problema**: ele conta como a [persona](persona.md) tenta pesquisar proposições legislativas sobre um tema acadêmico no Portal do Senado Federal e acessa o inteiro teor do texto. A narrativa apoia-se no perfil elicitado por [análise documental e de similares](perfil-usuario.md) e segue a [estrutura dos cenários do grupo](../../../cenarios.md#estrutura-dos-cenarios).

## Identificação

A Tabela 2 identifica o cenário.

| Campo | Registro |
| --- | --- |
| Título | O filtro "Tipo de proposição" não separa PL de PEC na busca temática |
| Ator | [Lucas Mendes](persona.md), estudante de Direito, 22 anos, bolsista de IC |
| Objetivo principal | Encontrar proposições sobre segurança pública urbana e baixar o inteiro teor do texto para o TCC |
| Situação inicial | No laboratório de informática da universidade, com 40 minutos livres entre aulas, Lucas abre o portal para levantar os projetos de lei do último mandato relacionados ao seu tema |
| Tipo | Cenário de problema: situação atual, antes do reprojeto |
| Sistema envolvido | Portal do Senado Federal, com foco na busca avançada de matérias e na página de detalhes da proposição |
| Tarefa modelada | [Análise de tarefas (HTA e CTT)](analise-tarefas.md) |

<p class="caption">Tabela 2 — Identificação do cenário.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026).</p>

## Perguntas exploradas

Como no Exemplo 6.5 do livro, as perguntas abaixo expressam o que o cenário precisa esclarecer. Na narrativa, o número de cada pergunta aparece entre colchetes (BARBOSA; SILVA, 2010, p. 189–190).

1. O que motiva a pesquisa e em que contexto ela ocorre?
2. Como a persona chega ao portal e abre a busca?
3. Que estratégia de busca ela usa (palavra-chave livre vs. busca avançada)?
4. Como ela lida com a mistura de tipos de resultado (PL, PEC, pronunciamentos)?
5. Como ela localiza e acessa o inteiro teor do texto?
6. Como ela sabe se a versão baixada é a mais atual?
7. O que ela faz com o material encontrado?
8. Quem se beneficia do resultado da pesquisa?
9. Em que pontos o portal cria barreiras para o pesquisador?

## Narrativa

A narrativa é um cenário de problema (BARBOSA; SILVA, 2010, p. 184). O número entre colchetes aponta a pergunta da lista acima. O comportamento do portal descrito aqui foi inferido a partir da análise documental e da inspeção de similares; limitações estão em [Perfil do usuário](perfil-usuario.md).

**O filtro "Tipo de proposição" não separa PL de PEC na busca temática**

Atores: Lucas Mendes (estudante/pesquisador)

Com a orientadora pedindo uma lista de proposições sobre segurança pública apresentadas entre 2019 e 2024, Lucas abre o portal no computador do laboratório [1] [8]. Ele já sabe que a lupa fica no canto superior direito, clica nela e o campo de busca se expande [2]. Digita "segurança pública urbana" e aperta Enter [3].

A página de resultados carrega com seis abas. Ele clica em "Proposições (1.243)" para filtrar só matérias legislativas [3]. A lista mistura PLs, PECs, PDLs e MPVs numa ordem que não parece cronológica [4] [9]. Ele tenta usar o botão "Filtros" e seleciona o período 2019–2024, mas o campo "Tipo" lista siglas sem descrição — ele não sabe se "PDL" entra no escopo do TCC ou não [4] [9]. Marca apenas "PL" e "PEC" e aplica o filtro. A lista cai para 87 resultados [4].

Percorre os títulos e abre uma proposição que parece central para o tema [5]. A página exibe o título formal, a ementa e o cartão "Situação Atual". Ele desce até a seção "Texto" e vê três links: "Texto original", "Texto substitutivo" e "Redação final" [5]. Clica em "Redação final" esperando o texto aprovado, mas recebe uma mensagem de erro — o arquivo não existe porque a proposição ainda está em tramitação e não há redação final [5] [6]. Tenta "Texto substitutivo" e o PDF abre [5]. Não há indicação de data nem de versão no nome do arquivo, então ele não sabe se aquele substitutivo é o mais recente ou um intermediário [6] [9].

Lucas copia a referência bibliográfica da proposição, salva o PDF na pasta do TCC e abre a próxima da lista [7] [8]. O processo se repete por 30 minutos. Em três das doze proposições abertas ele não encontra o texto completo — a seção "Texto" existe mas os links estão quebrados ou apontam para o Diário do Senado sem ancoragem na página correta [9].

## Análise do cenário

Como no Exemplo 6.4 (BARBOSA; SILVA, 2010, p. 185):

- o campo "Tipo" nos filtros usa siglas sem rótulo explicativo; o pesquisador que não domina todas as categorias (PDL, PLS, MPV) não sabe o que incluir ou excluir;
- a seção "Texto" exibe links para versões do texto sem indicar data, número de emenda ou se aquela versão é a vigente;
- links quebrados para o inteiro teor forçam o pesquisador a sair do portal e buscar o Diário do Senado manualmente;
- a ordem padrão dos resultados de proposições não é cronológica, dificultando o levantamento por período.

## Agradecimentos

Esta página contou com o apoio do ChatGPT (OpenAI GPT-4o) na estruturação, na redação preliminar e na formatação Markdown. A revisão do conteúdo e a fundamentação no perfil elicitado são do autor, que segue responsável pelo que está publicado.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `1.0` | 26/09/2026 | Cenário de problema do perfil estudante/pesquisador | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |
| `1.1` | 03/10/2026 | Nomeia a ferramenta de IA nos agradecimentos e na tabela de contribuição | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. Interação humano-computador. Rio de Janeiro: Elsevier, 2010.
