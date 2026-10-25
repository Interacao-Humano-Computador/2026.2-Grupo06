<span class="owner">Responsável: Luís Henrique Arruda Luna — Agendamento em plenárias</span>

# Planejamento da avaliação do protótipo de papel

## Tabela de contribuição

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Luís Henrique Arruda Luna](https://github.com/Donnk61) | Definição do recorte e das condições práticas a confirmar | [Objetivos](#d--determinar-os-objetivos) |
| Codex (OpenAI) | Apoio à estruturação do plano DECIDE e dos instrumentos | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuições neste planejamento.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Introdução

Este plano prepara uma avaliação formativa de uma proposta de agendamento para participação em plenárias do Senado, funcionalidade que ainda não existe no portal segundo o escopo informado para este trabalho. A interface será tratada como proposta, sem pressupor regras institucionais ainda não confirmadas. A atividade pertence à Etapa 5; a sessão e o relato de resultados ficam para a Etapa 6.

O recorte parte de [Marina Alves](../../../entrega-2/individual/luis/persona.md), que teve dificuldade para encontrar reuniões no portal, mas compreendeu a página da reunião depois de localizá-la. Isso sustenta investigar descoberta e compreensão; não permite concluir que Marina ou outros usuários necessitem reservar vaga.

## Item de conteúdo da disciplina

**Autor do item:** Luís Henrique Arruda Luna.

A avaliação seguirá o DECIDE: determinar objetivos, explorar perguntas, escolher métodos, identificar questões práticas, decidir questões éticas e avaliar/analisar/apresentar os dados (BARBOSA; SILVA, 2010, p. 312–313). A prototipação em papel permite testar tarefas e respostas simuladas antes da implementação (p. 358–362).

## D — Determinar os objetivos

- **PL-O1 — Encontrabilidade:** verificar se a pessoa encontra plenárias e entende quais permitem inscrição.
- **PL-O2 — Vagas e estado:** investigar se compreende disponibilidade, limite, indisponibilidade e o resultado de sua solicitação.
- **PL-O3 — Confiança e recuperação:** identificar dúvidas sobre dados solicitados, confirmação, repetição de envio e próximos passos.

## E — Explorar perguntas

| ID | Pergunta | Evidência a observar |
| --- | --- | --- |
| PL-Q1 | A pessoa encontra uma plenária adequada sem receber um link direto? | Caminho, filtros, retornos e tempo observado |
| PL-Q2 | Entende quantas vagas estão disponíveis e o que ocorre quando acabam? | Interpretação espontânea dos estados e escolhas |
| PL-Q3 | Consegue solicitar uma vaga e reconhecer se a solicitação foi concluída? | Campos usados, erros, confirmação e explicação final |
| PL-Q4 | Entende se há vaga garantida, espera ou apenas pedido recebido? | Interpretação das mensagens; regra ainda precisa ser definida |
| PL-Q5 | Que informação ou controle gera dúvida, hesitação ou receio? | Comentários, pedidos de ajuda e pontos de abandono |

## Especificação textual das telas e cartões

As descrições abaixo são o roteiro para desenhar as folhas do protótipo. O conteúdo da plenária, datas, vagas, locais e código são **fictícios**. Não desenhar logotipos ou textos que façam parecer que o serviço já existe no portal.

| ID | Tela/cartão | Conteúdo que deve aparecer | Ações / observações para desenho |
| --- | --- | --- | --- |
| PP-S01 | Lista de plenárias | Título “Plenárias”; campo “Buscar por tema”; cartão “Educação científica — 12/11, 14h — 6 de 30 vagas — inscrições até 10/11”; cartão “Orçamento público — 18/11, 10h — sem vagas” | Botões “Ver detalhes”; incluir “Participação” como caminho de navegação. |
| PP-S02 | Detalhes com vagas | “Plenária sobre educação científica”; “12 de novembro, às 14h”; local fictício “Auditório de demonstração”; “6 de 30 vagas disponíveis”; “Inscrições até 10 de novembro”; aviso “A vaga só será confirmada após o envio e a validação” | Botões “Solicitar vaga” e “Voltar às plenárias”. |
| PP-S03 | Formulário | Título “Solicitar uma vaga”; campos “Nome completo” e “E-mail”; orientação para usar dados fictícios; caixa “Revisei os dados acima” | Botões “Continuar” e “Cancelar”. Não pedir CPF, senha ou documento. |
| PP-S04 | Revisão da solicitação | Nome e e-mail parcialmente mascarado; plenária, data e horário; aviso “Sua vaga ainda não está confirmada”; aviso de que a disponibilidade será validada ao enviar | Botões “Confirmar solicitação” e “Voltar para corrigir”. |
| PP-S05 | Confirmação | “Inscrição confirmada”; plenária, data e horário; “Código: PL-000123” | Botão “Voltar às plenárias”. Só mostrar se o operador simular validação positiva. |
| PP-S06 | Sem vagas antes do formulário | “Esta plenária está sem vagas disponíveis”; “Nenhuma inscrição foi criada” | Botão “Ver outras plenárias”. Usar para a opção que já aparece esgotada na lista. |
| PP-S07 | Última vaga ocupada durante o envio | “Não foi possível confirmar a inscrição”; “As vagas se esgotaram antes da confirmação. Nenhuma inscrição foi criada.” | Botão “Ver outras plenárias”. Exibir depois de confirmar, no cenário de concorrência. |

Cartões móveis para o operador trocar durante a sessão:

| Cartão | Texto/estado | Quando usar |
| --- | --- | --- |
| PP-C01 | “6 de 30 vagas disponíveis” | Estado inicial da plenária de educação científica. |
| PP-C02 | “1 de 30 vagas disponíveis” | Início do cenário especial da última vaga. |
| PP-C03 | “Sem vagas disponíveis” | Plenária esgotada desde a consulta inicial. |
| PP-C04 | “Inscrições encerradas em 10 de novembro” | Variante de prazo encerrado, somente se mantida no teste. |
| PP-C05 | “Vagas esgotadas antes da confirmação” | Trocar para este cartão após o envio no cenário da última vaga; encaminhar para PP-S07. |
| PP-C06 | Dados de teste: “Marina Alves”, “marina@example.com” | Entregar à pessoa para preencher PP-S03; endereço fictício, não enviar. |
| PP-C07 | “Código PL-000123” | Anexar a PP-S05 após validação positiva. |

**Transições do protótipo:** `PP-S01 → PP-S02 → PP-S03 → PP-S04 → PP-S05` no caminho de sucesso; `PP-S01 → PP-S06` se a plenária já estiver sem vagas; `PP-S04 → PP-S07` se a última vaga for ocupada antes da validação. O operador não deve confirmar a vaga ao abrir detalhes nem ao começar o formulário. O cenário PP-S07 é uma execução separada, iniciada com PP-C02.

## C — Escolher os métodos

Teste moderado de tarefas com protótipo de papel, observação e verbalização do raciocínio. Após cada tarefa, perguntas abertas investigarão o entendimento sem sugerir a resposta. A equipe deve distinguir fala, ação observada, interpretação e recomendação.

## I — Identificar questões práticas

**Participante:** pessoa adulta que consulta serviços públicos digitais; recrutamento por conveniência, descrevendo a limitação de uma amostra pequena. A adequação de Marina como participante depende de disponibilidade e consentimento; não está confirmada.

**Tarefas preliminares (validar após definir as regras):**

1. Encontrar uma plenária de interesse e consultar data, local/modalidade e condições de participação.
2. Verificar disponibilidade e iniciar solicitação de uma vaga usando dados fictícios.
3. Interpretar a confirmação apresentada.
4. Em um cenário separado, tentar outra plenária sem vagas e explicar as opções disponíveis.

Os estados e dados serão fictícios. O protótipo deverá incluir listagem, detalhes, disponibilidade, formulário, confirmação, estado sem vagas e, se a regra for aprovada, lista de espera ou alternativa equivalente. Não apresentar lista de espera, cancelamento, prioridade ou garantia de vaga como regra real antes de confirmação institucional.

**Equipe:** moderador, operador do protótipo e observador/registrador, com papéis separados sempre que possível. O operador troca folhas conforme transições predefinidas e não improvisa regras. O piloto deve verificar clareza das tarefas, transições, duração e ficha de registro; dados do piloto ficam fora dos resultados principais.

**Agenda:** data, horário, local/modalidade e participante serão definidos após confirmação de disponibilidade. Realizar piloto antes da sessão, reservar tempo para ajustes e concluir análise antes da entrega da Etapa 6. Não há agendamento confirmado neste plano.

## D — Decidir questões éticas

Obter consentimento antes da sessão e autorização específica para gravação. Usar dados fictícios, não coletar documentos ou informações pessoais desnecessárias e permitir interrupção ou desistência. Guardar TCLE e gravações fora da área pública; publicar apenas evidências anonimizadas autorizadas. A ausência de serviço real deve ser explicada à pessoa participante.

## E — Avaliar, analisar e apresentar os dados

Registrar tarefa, estado inicial, sequência de ações, conclusão, hesitações, erros, pedidos de ajuda, falhas de simulação e falas relevantes com localizadores. Analisar por pergunta de avaliação e gravidade, sem generalizar além da amostra. Separar problemas observados de hipóteses e recomendações. O formato de apresentação será o relato individual da Etapa 6.

## Decisões pendentes antes do piloto

- regra de concorrência/reserva de vaga e momento em que uma vaga é considerada ocupada;
- comportamento quando a última vaga é disputada;
- existência ou não de lista de espera, cancelamento e confirmação posterior;
- dados mínimos, autenticação e canal de confirmação;
- perfil e recrutamento da pessoa participante, data e modalidade da sessão;
- storyboard e análise de tarefas da proposta para rastrear as tarefas do protótipo.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| --- | --- | --- | --- | --- |
| 0.1 | 24/10/2026 | Plano preliminar para funcionalidade proposta, com perguntas, tarefas e decisões em aberto | Luís Henrique Arruda Luna | Pendente |
| 0.2 | 24/10/2026 | Especifica telas, cartões e transições do protótipo de papel | Luís Henrique Arruda Luna | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) (designado; pendente) |

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. p. 307–313, 358–362.

[2] GRUPO 06. [Persona Marina Alves](../../../entrega-2/individual/luis/persona.md), [cenário](../../../entrega-2/individual/luis/cenario.md) e [análise de tarefas](../../../entrega-2/individual/luis/analise-tarefas.md). 2026.

## Agradecimentos

O Codex (OpenAI) apoiou a organização e a redação inicial do plano. Luís Henrique Arruda Luna responde pelo recorte e pela validação do conteúdo antes da entrega.

## Revisão

Revisor designado: [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev). Revisão pendente.
