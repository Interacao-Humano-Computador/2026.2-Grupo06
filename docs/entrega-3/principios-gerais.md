<span class="owner">Responsável: Israel Soares de Paiva — Princípios gerais do projeto</span>

# Princípios gerais do projeto

## Tabela de contribuição

A Tabela 1 registra quem atuou neste artefato.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Israel Soares de Paiva](https://github.com/IsraelSoares-25) | Escolha dos princípios, critério de seleção e justificativa para o Portal do Senado | [Princípios adotados](principios-gerais.md#principios-adotados) |
| [Luís Henrique Luna de Arruda](https://github.com/Donnk61) | Explicação dos oito tópicos dos princípios gerais, que serve de base para esta página | [Tópicos dos princípios gerais](topicos-principios.md) |
| Claude (Anthropic) | Rascunho do texto e formatação Markdown | [Agradecimentos](principios-gerais.md#agradecimentos) |

<p class="caption">Tabela 1 — Contribuição neste artefato.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026).</p>

## Introdução

No desenvolvimento de sistemas interativos, a definição e a aplicação de **princípios e diretrizes de Interação Humano-Computador (IHC)** desempenham um papel central na garantia da qualidade de uso, da usabilidade e da experiência do usuário (UX). Onde princípios costumam representar objetivos gerais e de alto nível; diretrizes, regras gerais comumente observadas na prática; e padrões, soluções específicas a certos contextos bem delimitados, envolvendo certos usuários desempenhando determinadas tarefas.

## O que a lista pede

A lista de verificação pede que o projeto declare quais princípios gerais serão utilizados (SALES, 2026). Esta página responde a essa pergunta em três partes: o critério de escolha, os princípios adotados com a justificativa e os que ficaram de fora.

**Autor do item:** Israel Soares de Paiva

## Fonte adotada

Os princípios vêm da seção 10.2, *Princípios e Diretrizes Gerais*, do livro *Interação Humano-Computador e Experiência do Usuário* (BARBOSA et al., 2021, p. 238–248), capítulo distribuído na disciplina. O livro organiza os princípios em nove subseções, que o plano da disciplina agrupa em oito tópicos (ver [Tópicos dos princípios gerais](topicos-principios.md#o-que-a-lista-pede)).

## Critério de seleção

Nem todo princípio pesa igual em todo projeto. O grupo escolheu os princípios a partir de três perguntas:

1. **O problema apareceu na observação?** O princípio ajuda a explicar uma dificuldade vista na sessão com a participante P5 na Etapa 2 ([cenário de Marina Alves](../entrega-2/individual/luis/cenario.md)).
2. **O princípio se aplica a um portal público de consulta?** O portal atende pessoas com níveis muito diferentes de familiaridade com o processo legislativo.
3. **O princípio gera diretriz verificável?** Dá para checar, em uma tela, se ele foi ou não seguido.

## Princípios adotados

A Tabela 2 resume a escolha. Os detalhes de cada princípio vêm em seguida.

| Nº | Princípio | Tópico em [Tópicos dos princípios gerais](topicos-principios.md) | Por que entra no projeto |
| :---: | --- | :---: | --- |
| 1 | Correspondência com as expectativas dos usuários | 1 | P5 procurou a reunião por um caminho diferente do que o portal oferece |
| 2 | Simplicidade nas estruturas das tarefas | 2 | Chegar a uma reunião exigiu vários passos intermediários |
| 3 | Equilíbrio entre controle e liberdade do usuário | 3 | Sem caminho indicado, P5 foi e voltou entre links internos |
| 4 | Consistência e padronização | 4 | Notícia, tramitação e reunião aparecem com estruturas diferentes |
| 5 | Antecipação das necessidades do usuário | 5 | A notícia não levava à reunião e à pauta |
| 6 | Visibilidade e reconhecimento | 6 | A página da reunião da CCJ mostrou o que é bom manter |
| 7 | Conteúdo relevante e expressão adequada | 7 | Siglas sem nome por extenso dificultaram o reconhecimento |

<p class="caption">Tabela 2 — Princípios adotados pelo Grupo 06.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026), com base em BARBOSA et al. (2021, p. 238–247).</p>

### 1. Correspondência com as expectativas dos usuários

**Ideia central.** A interface deve usar mapeamentos naturais e a linguagem do usuário, não a do sistema (BARBOSA et al., 2021, p. 238–239).

**Por que no portal.** O caminho que P5 imaginou (a partir de uma notícia, em **Especiais → Grandes Coberturas**) não era o caminho que o portal oferece (**Atividade legislativa → Comissões**).

**Como orienta o projeto.** Os nomes de menus e seções devem refletir o que o cidadão procura, e a navegação deve aceitar mais de uma porta de entrada para o mesmo conteúdo.

### 2. Simplicidade nas estruturas das tarefas

**Ideia central.** Reduzir o planejamento e a resolução de problemas que a tarefa exige do usuário (BARBOSA et al., 2021, p. 239).

**Por que no portal.** Chegar a uma reunião já realizada exigiu passar pela comissão, pela lista de reuniões e só então pela pauta, e P5 levou cerca de oito minutos.

**Como orienta o projeto.** Tarefas frequentes, como achar uma reunião, uma tramitação ou uma votação, devem ter o menor número possível de passos e um caminho claro.

### 3. Equilíbrio entre controle e liberdade do usuário

**Ideia central.** Dar controle sem sobrecarregar com opções, usar restrições que indiquem o caminho certo e oferecer saídas claras. Quanto mais inexperiente o usuário, mais apoio e menos alternativas (BARBOSA et al., 2021, p. 239–241).

**Por que no portal.** Sem um caminho indicado, P5 seguiu links internos (mensagem legislativa, tramitação, multimídia, eventos) e voltou várias vezes até encontrar **Comissões**. O público do portal inclui pessoas pouco familiarizadas com o processo legislativo.

**Como orienta o projeto.** Cada página deve destacar o próximo passo mais provável e permitir voltar ao ponto de partida sem se perder.

### 4. Consistência e padronização

**Ideia central.** Ações, resultados, layout e terminologia padronizados, coerentes com o modelo conceitual do sistema e com as expectativas do usuário (BARBOSA et al., 2021, p. 241–242).

**Por que no portal.** Uma notícia, uma tramitação e uma reunião tratam do mesmo assunto em páginas com estruturas diferentes, e P5 não conseguiu confirmar se estava na página de uma reunião.

**Como orienta o projeto.** Tipos de conteúdo parecidos devem ter a mesma estrutura de página, e elementos com comportamentos diferentes devem ter aparências diferentes. Este princípio é a base do Guia de Estilo do projeto (itens 15 a 17).

### 5. Antecipação das necessidades do usuário

**Ideia central.** Prever o que o usuário vai precisar e oferecer a informação e a ferramenta de cada passo, sem esperar que ele as procure (BARBOSA et al., 2021, p. 243–244).

**Por que no portal.** P5 chegou a uma notícia da Comissão de Justiça e dali não alcançou a reunião. Uma ligação da notícia para a reunião e a pauta teria antecipado o próximo passo.

**Como orienta o projeto.** Conteúdos relacionados (notícia, reunião, pauta, tramitação) devem apontar uns para os outros.

### 6. Visibilidade e reconhecimento

**Ideia central.** Tornar visível o que é possível fazer, mostrar o estado do sistema depois de cada ação e deixar claro onde o usuário está e por onde passou (BARBOSA et al., 2021, p. 244–245).

**Por que no portal.** Este princípio explica um acerto: na página da reunião da CCJ, os itens numerados e o resultado ao lado da pauta deixaram claro o que tinha sido decidido, segundo P5. Ele também apoia a correção de pontos em que o usuário se perde.

**Como orienta o projeto.** O projeto deve preservar o que já funciona bem e levar esse padrão a outras páginas, com indicação clara de localização na navegação.

### 7. Conteúdo relevante e expressão adequada

**Ideia central.** Dizer só o necessário, com rótulos claros e sem ambiguidade, texto legível e cor sempre acompanhada de uma pista secundária (BARBOSA et al., 2021, p. 246–247).

**Por que no portal.** P5 não conhecia a sigla CCJ e sabia só "mais ou menos" o que era uma comissão. Rótulos com siglas, sem o nome por extenso, dificultam o reconhecimento para quem está aprendendo o processo legislativo.

**Como orienta o projeto.** Siglas devem aparecer com o nome por extenso, e os rótulos devem usar termos que o cidadão reconheça.

## Princípios não priorizados

Dois pontos dos oito tópicos não entram como princípios orientadores deste projeto. Eles continuam válidos e explicados na página do Luís.

| Princípio | Motivo |
| --- | --- |
| Promoção da eficiência do usuário (parte do tópico 4) | Seus recursos principais (atalhos, aceleradores e valores padrão configuráveis) servem a usuários frequentes. O público observado usa o portal de forma ocasional e tem pouca familiaridade com ele. |
| Projeto para erros (tópico 8) | A dificuldade observada foi de navegação, não de preenchimento de formulários ou de operações irreversíveis. O tema volta a ser considerado se a avaliação encontrar fluxos com entrada de dados. |

<p class="caption">Tabela 3 — Princípios não priorizados e motivo.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026).</p>

## Como os princípios serão usados

Os sete princípios adotados orientam três partes do trabalho:

- **Metas de usabilidade (itens 13 e 14):** cada princípio ajuda a alcançar uma ou mais metas e é a ligação entre a observação e a razão da escolha das metas.
- **Guia de Estilo (itens 15 a 17):** os princípios de consistência e padronização, de visibilidade e reconhecimento e de conteúdo relevante e expressão adequada viram regras concretas de aparência e de texto.
- **Avaliação do site:** os princípios servem de critério para apontar, em cada tela, o que está de acordo e o que está em desacordo.

## Agradecimentos

O Claude (Anthropic) ajudou a redigir o rascunho e a formatar a página em Markdown, a partir da página [Tópicos dos princípios gerais](topicos-principios.md). A escolha dos princípios, a revisão do conteúdo e a responsabilidade pelo texto publicado são de Israel Soares de Paiva.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `0.1` | 03/10/2026 | Abertura da página, sem o conteúdo do item 11 | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) |

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. Interação humano-computador. Rio de Janeiro: Elsevier, 2010.

[2] SALES, André Barros de. Plano de Ensino FIHC 022026 — Turma 01. Brasília: FCTE/UnB, 2026.
