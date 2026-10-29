<span class="owner">Responsável: Luís Henrique Arruda Luna — Inspeção documental da modelagem</span>

# Inspeção documental da HTA e da CTT

## Tabela de contribuição

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Luís Henrique Arruda Luna](https://github.com/Donnk61) | Solicitação da inspeção documental do próprio recorte | [Critérios e achados](#criterios-e-achados) |
| Codex (OpenAI) | Apoio à conferência de cobertura e à documentação dos achados | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuições neste artefato.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Objetivo e limite

Esta inspeção analítica confere consistência e cobertura da [modelagem da tarefa](modelagem-tarefas.md) antes do desenho e de uma eventual avaliação com participante. Não é sessão com usuário, não contém falas observadas e não substitui o relato da avaliação exigido quando houver coleta.

## Critérios e achados

| Critério | Resultado da inspeção | Evidência / encaminhamento |
| --- | --- | --- |
| O objetivo e a condição de conclusão são observáveis? | Parcialmente atendido | A pessoa deve explicar se a vaga foi confirmada; incluir no storyboard e no roteiro de avaliação. |
| A tarefa inclui caminho desde a entrada até o resultado? | Atendido na proposta | HTA cobre descoberta, seleção, disponibilidade, solicitação e resposta. |
| Há alternativa quando a busca não funciona ou a opção não serve? | Atendido na proposta | HTA prevê repetição e CTT prevê busca ou percurso pela lista. |
| O caso sem vagas está representado? | Atendido na proposta | Há estado de indisponibilidade antes do formulário e depois da tentativa de envio. |
| Há tratamento para mudança de disponibilidade durante o fluxo? | Atendido como hipótese | Validação final evita tratar uma solicitação concorrente como vaga confirmada. A regra de concorrência precisa ser confirmada. |
| O encerramento diferencia pedido de inscrição confirmada? | Atendido na proposta | Somente a resposta positiva da validação leva à tela de confirmação. |
| Os requisitos de negócio têm fonte institucional? | Não atendido | Todas as regras de inscrição são decisões provisórias, sem fonte institucional no material consultado. |
| A persona foi validada para esta tarefa? | Não atendido | A Etapa 2 observa consulta de reunião, não inscrição em plenária. Necessário validar perfil/objetivo. |

## Revisões recomendadas antes do protótipo

1. Confirmar se “plenária” é o termo esperado pelo público e se o serviço terá inscrição pública.
2. Confirmar quando uma vaga é considerada ocupada e o que acontece em envios simultâneos.
3. Confirmar os dados mínimos, necessidade de autenticação e modo de comprovar a inscrição.
4. Manter no protótipo uma resposta explícita para vagas esgotadas e não simular confirmação antes da validação.
5. Após o storyboard estar pronto, fazer inspeção conjunta cena a cena e atualizar esta página; depois, testar com participante e elaborar o relato empírico separado.

## Resultado

A estrutura cobre o caminho principal e as duas indisponibilidades relevantes para o protótipo. O modelo está **apto para orientar um primeiro storyboard**, condicionado à identificação visual das regras como hipóteses. A inspeção não permite afirmar que o fluxo atende às necessidades dos usuários ou às regras do Senado.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| --- | --- | --- | --- | --- |
| 0.1 | 24/10/2026 | Inspeciona cobertura e lacunas da modelagem preliminar | Luís Henrique Arruda Luna, com apoio de Codex | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |
| 0.2 | 24/10/2026 | Designa Caio Breno de Souza Bezerra como revisor; revisão pendente | Luís Henrique Arruda Luna | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |

## Referências

[1] GRUPO 06. [Modelagem da tarefa — Agendar participação em plenária](modelagem-tarefas.md).

[2] GRUPO 06. [Persona Marina Alves](../../../entrega-2/individual/luis/persona.md), [cenário](../../../entrega-2/individual/luis/cenario.md) e [análise de tarefas](../../../entrega-2/individual/luis/analise-tarefas.md). 2026.

## Agradecimentos

O Codex (OpenAI) apoiou a conferência e a redação da inspeção. Luís Henrique Arruda Luna responde pela validação do conteúdo e pelas decisões de continuidade do projeto.
