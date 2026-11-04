<span class="owner">Responsável: Luís Henrique Arruda Luna — Avaliação de alta fidelidade · Autor do item: Luís Henrique Arruda Luna</span>

# Planejamento da avaliação de alta fidelidade — Inscrição em plenárias

## Tabela de contribuição

A Tabela 1 registra a contribuição neste artefato.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Luís Henrique Arruda Luna](https://github.com/Donnk61) | Recorte da avaliação e responsabilidade pelo conteúdo | [Conteúdo](#introducao) |
| Claude Code (Anthropic) | Apoio à estruturação do DECIDE, das tarefas, das medidas e à redação | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuição neste artefato.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Introdução

Este plano prepara o teste de usabilidade da proposta de **solicitar uma vaga para participar de uma plenária**, funcionalidade que não existe no Portal do Senado. Ele parte do [relato do protótipo de papel](relato-prototipo-papel.md), que testou só o caminho de sucesso. Por isso, o foco agora são os estados sem vagas, a perda da última vaga e a interpretação da confirmação.

O relato desta avaliação será entregue na **Etapa 7, em 15/11/2026**. Este documento e o [planejamento do relato](planejamento-relato-alta-fidelidade.md) compõem a Etapa 6.

**Situação do protótipo:** a versão AF-1.0 ainda não foi construída. A [Tabela 2](#requisitos-do-prototipo-af-10) lista o que ela precisa cumprir antes do piloto.

## Fundamentação

**Autor do item:** Luís Henrique Arruda Luna.

No teste de usabilidade, pessoas executam tarefas enquanto a equipe registra desempenho e opinião (BARBOSA; SILVA, 2010, p. 341–343). O DECIDE organiza as decisões da avaliação em seis atividades (p. 312–313), e o piloto ensaia o procedimento antes da coleta (p. 307–308). As Figuras 1 a 3, no [Apêndice A](#apendice-a-fundamentacao), trazem esses trechos.

## Requisitos do protótipo AF-1.0 { #requisitos-do-prototipo-af-10 }

A Tabela 2 transforma os resultados do papel em requisitos da versão a ser testada.

| ID | Origem | Requisito | Avaliado em |
| --- | --- | --- | --- |
| AF-R01 | P01 | O aviso de resultado tem “Voltar às plenárias”, e a lista e os detalhes mostram que a vaga já foi solicitada | AF-T3 |
| AF-R02 | P02 | Plenária, data, horário e local vêm de um único dado e são iguais em todas as telas | AF-T1 e AF-T2 |
| AF-R03 | P03 | A confirmação mostra plenária, data, horário, local e identificador fictício | AF-T3 |
| AF-R04 | P04 | Cada estado tem um único texto: disponível, em revisão, confirmada e sem vagas | AF-T3 a AF-T5 |
| AF-R05 | P05 | A revisão tem uma só saída, “Voltar para corrigir”, que preserva os dados | AF-T2 |
| AF-R06 | Tarefa 4 do papel, AT-Q6 | A plenária sem vagas avisa antes do formulário e oferece outras plenárias | AF-T4 |
| AF-R07 | AT-Q7, storyboard, PP-S07 | A vaga é revalidada ao confirmar. Se acabar, a tela diz que nenhuma inscrição foi criada e oferece outras plenárias | AF-T5 |
| AF-R08 | AF-T2 | O formulário valida campos vazios e formato de e-mail | AF-T2 |
| AF-R09 | Plano do papel | Todo conteúdo é fictício, com aviso de demonstração. Sem marca oficial do Senado e sem envio real de dados | Todas |

<p class="caption">Tabela 2 — Requisitos da versão AF-1.0.</p>
<p class="source">Fonte: Tabela 6 do relato do papel e relatos da Etapa 5.</p>

**Regra provisória para o teste:** a vaga é ocupada no momento da confirmação, e não há lista de espera nem cancelamento. Essa regra serve só para simular o protótipo. Ela não representa uma decisão institucional, e o teste não a valida.

## D — Determinar os objetivos

- **AF-O1 — Encontrabilidade:** verificar se a pessoa chega à plenária sem link direto e reúne as informações para decidir.
- **AF-O2 — Prevenção:** verificar se a revisão ajuda a perceber e corrigir um dado errado antes de confirmar.
- **AF-O3 — Resultado:** verificar se a pessoa entende o estado da solicitação e o próximo passo.
- **AF-O4 — Indisponibilidade e recuperação:** verificar se entende a falta de vagas, sabe que nada foi criado e encontra outra opção.

Público: pessoas adultas que consultam serviços públicos digitais, próximas da persona [Marina Alves](../../../entrega-2/individual/luis/persona.md). O interesse em se inscrever em plenárias continua sendo uma hipótese.

## E — Explorar as perguntas

A Tabela 3 liga as perguntas às tarefas e aos dados. AF-Q2 e AF-Q4 retomam PL-Q2 e PL-Q4, que ficaram sem resposta no papel.

| Pergunta | Tarefa | Dados para responder |
| --- | --- | --- |
| AF-Q1 — A pessoa encontra a plenária sem link direto e reúne as informações necessárias? | AF-T1 | Caminho, retornos, ajuda e informações citadas |
| AF-Q2 — Entende as vagas e o que ocorre quando acabam? | AF-T1, AF-T4 e AF-T5 | Explicação espontânea sobre vagas e escolhas feitas |
| AF-Q3 — Percebe e corrige um dado errado antes de confirmar? | AF-T2 | Detecção, correção e dado efetivado |
| AF-Q4 — Distingue pedido em revisão, vaga confirmada e nenhuma inscrição criada? | AF-T3 e AF-T5 | Explicação com as próprias palavras |
| AF-Q5 — Sabe o que fazer depois do resultado, sem repetir o pedido? | AF-T3 a AF-T5 | Próxima ação e tentativas repetidas |
| AF-Q6 — Que dúvidas e opiniões ajudam a melhorar as telas? | Todas | Falas, M6, justificativas e sugestões por tela |

<p class="caption">Tabela 3 — Perguntas de avaliação e evidências.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## C — Escolher os métodos

O método será o **teste de usabilidade moderado, remoto e formativo**, com verbalização do raciocínio e entrevista curta no final. Ele foi escolhido porque os objetivos dependem de observar a pessoa agindo e explicando o resultado. No papel, a opinião “bem completo” não mostrou se ela entendia as vagas ou a confirmação.

A pessoa participante controla o protótipo e compartilha a tela no Google Meet. O moderador lê os enunciados, não indica o caminho e faz perguntas neutras. O protótipo responde sozinho, eliminando o operador de folhas. A equipe só prepara o estado inicial de cada tarefa.

## I — Identificar as questões práticas

### Pessoas e recrutamento

Serão **uma pessoa principal (AF-P01) e outra para o piloto (PP-AF01)**, adultas e voluntárias, por conveniência. Essa quantidade é a viável para o recorte individual dentro do prazo. Ela permite encontrar problemas, mas não representa o público do portal.

A preferência é por alguém que não tenha participado do papel, pois PART-PP01 já conhece o fluxo. Se isso não for possível, a exposição anterior será registrada. Na abertura, registrar familiaridade digital, uso do portal, dispositivo e necessidades de leitura, sem coletar opinião política.

Papéis propostos, a confirmar: Luís modera; uma pessoa do grupo observa e preenche as fichas; outra confere a gravação. Na sessão do papel, a mesma pessoa acumulou moderação e operação, o que este plano evita.

### Tarefas e critérios

A Tabela 4 separa o enunciado lido à pessoa do critério reservado à equipe. O estado de cada tarefa é preparado antes de a tela ser compartilhada.

| ID e enunciado | Estado inicial e dados | Critério de conclusão |
| --- | --- | --- |
| AF-T1 — “Você quer acompanhar de perto um debate sobre educação científica. Mostre como procuraria essa plenária e me diga se é possível participar.” | Página inicial simulada, sem link direto. Plenárias: educação científica (6 de 30), orçamento público (sem vagas) e saúde digital (4 de 20) | Chega aos detalhes da plenária certa e informa data, local, prazo e vagas, sem ajuda |
| AF-T2 — “Solicite uma vaga usando os dados deste cartão. Siga quando achar adequado.” | Cartão com “Marina Alves” e “marina@example.com”. Formulário preenchido com o e-mail errado “marina@exemple.com” | Percebe o erro, corrige por “Voltar para corrigir” e confirma uma vez com o dado do cartão |
| AF-T3 — “Me explique o que aconteceu com seu pedido e o que você faria agora.” | Tela de resultado da solicitação confirmada | Diz que a vaga foi confirmada, cita plenária e data, volta à lista e reconhece o estado, sem repetir o pedido |
| AF-T4 — “Agora tente participar da plenária sobre orçamento público.” | Lista com o estado anterior preservado | Reconhece a falta de vagas antes do formulário, diz que nada foi criado e identifica outra opção |
| AF-T5 — “Solicite uma vaga na plenária sobre saúde digital, com os dados do cartão. Depois, escolha o que fazer.” | Reinício. Plenária com 1 de 20 vagas; a última vaga é ocupada ao confirmar | Explica que a vaga acabou e nada foi criado, e chega a outra plenária com vagas, sem ajuda |

<p class="caption">Tabela 4 — Tarefas, estados iniciais e critérios de conclusão.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

O erro em AF-T2 é preparado para testar a prevenção. Se a pessoa não perceber o erro, a tarefa segue e será contada como erro crítico. AF-T3 usa uma confirmação correta preparada, para não depender do resultado de AF-T2. Depois de cada tarefa, aplicar a pergunta M6 antes de discutir o que aconteceu.

### Piloto

O piloto com PP-AF01 ensaia enunciados, estados, compartilhamento de tela, reinícios, fichas e tempo. Ele também define o limite de duração por tarefa, conforme as [metas da Etapa 3](../../../entrega-3/metas-usabilidade.md#regras-de-medicao). Os dados ficam em registro separado e não entram nos resultados. Os ajustes são registrados, e a versão é fixada antes da sessão principal.

### Agenda e recursos

A Tabela 5 é uma proposta em horário de Brasília. Pessoas e horários ainda precisam ser confirmados.

| Atividade | Data e horário propostos | Responsável e produto |
| --- | --- | --- |
| Definir a regra provisória e construir AF-1.0 | 04–08/11 | Luís; protótipo publicado |
| Confirmar pessoas, termos e sala | até 08/11 | Luís; convites e TCLE |
| Piloto PP-AF01 | 09/11, 20h–20h45 | Luís e observador; ficha separada |
| Ajustar e fixar a versão | 10/11, 20h–21h | Luís; versão e commit do teste |
| Sessão AF-P01 | 11/11, 20h–20h45 | Luís e observador; gravação e fichas |
| Analisar e redigir o relato | 12–13/11, 20h–21h30 | Luís; relato preliminar |
| Revisar e gravar a apresentação | 14/11, 20h–21h | Luís e [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |
| Entrega, inspeção e apresentação da Etapa 7 | 15/11, 16/11 e 17/11 | Marcos do plano de ensino |

<p class="caption">Tabela 5 — Agenda proposta da avaliação e do relato.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

A sessão dura até **45 minutos**: abertura, termo e perfil (8), cinco tarefas com M6 (25), entrevista (7) e folga (5). Será realizada no Google Meet, cada pessoa em local silencioso. Recursos: computador, navegador, internet, áudio, compartilhamento de tela, cartão de dados e fichas. Orçamento adicional previsto: **R$ 0**. Se a conexão impedir a observação, a sessão será interrompida e remarcada, com o registro do ocorrido.

## D — Decidir as questões éticas

Seguir o [procedimento ético do grupo](../../../entrega-2/etica.md) (BARBOSA; SILVA, 2010, p. 138–142, 313), com assinatura do [TCLE](../../../assets/docs/tcle/tcle-modelo.pdf) antes da sessão. O termo deve autorizar separadamente participação, voz e imagem, compartilhamento de tela e disponibilização do vídeo. O moderador explica que o link não listado permite acesso a quem o tiver.

Antes de gravar, pedir que a pessoa use um nome de exibição neutro ou desligue a câmera, se preferir, pois o nome e o rosto ficaram visíveis na gravação do papel. Explicar que o serviço não existe, que os dados são fictícios e que é possível pausar, recusar perguntas ou desistir sem prejuízo. O termo e o contato ficam fora do repositório, e o site usa apenas o código AF-P01.

## E — Avaliar, interpretar e apresentar os dados

Registrar por tarefa: versão, estado inicial, ações, erros, ajuda, conclusão, tempo, falas, M6 e minuto do vídeo. O tempo começa ao fim do enunciado e termina quando a pessoa declara a conclusão, desconsiderando falhas técnicas. Falar durante o uso e a modalidade remota limitam a comparação dos tempos.

A Tabela 6 liga as [metas da Etapa 3](../../../entrega-3/metas-usabilidade.md#metas-que-o-projeto-deve-alcancar) a este protocolo. As metas M2 e M3 foram definidas para outras tarefas, por isso as definições abaixo valem só para este recorte.

| Meta | Medida neste protocolo |
| --- | --- |
| M0 — eficácia | Conclusão correta sem ajuda por tarefa, com contagem e denominador |
| M2 — prevenção | Erro crítico: confirmar com e-mail diferente do cartão, ou concluir que tem vaga quando a inscrição não foi criada. Tentativas corrigidas são contadas à parte |
| M3 — recuperação | Em AF-T5, entende o incidente e chega a outra plenária com vagas sem ajuda e sem erro crítico |
| M6 — satisfação | Nota de 1 a 5 e justificativa após cada tarefa, com a pergunta das metas. Resposta ausente não é zero |
| M1, M4 e M5 | Não avaliadas: não há tentativas equivalentes, retorno após sete dias nem comparação com sistema atual. O tempo será apenas descritivo |

<p class="caption">Tabela 6 — Medidas definidas antes da coleta.</p>
<p class="source">Fonte: metas de usabilidade da Etapa 3, adaptadas ao recorte.</p>

A análise separa ação, fala e interpretação, e usa a severidade definida no [relato do papel](relato-prototipo-papel.md#problemas). A interface não muda durante uma sessão. Toda correção recebe nova versão e fica “não retestada” até nova execução. Com uma pessoa, os resultados são indícios formativos e não permitem declarar metas alcançadas para o público. O [planejamento do relato](planejamento-relato-alta-fidelidade.md) traz as fichas.

## Agradecimentos

Claude Code (Anthropic) apoiou a estruturação e a redação deste plano. Luís Henrique Arruda Luna responde pelo conteúdo.

## Histórico de versão

A Tabela 7 registra a versão deste artefato.

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `0.1` | 03/11/2026 | Elabora o plano da avaliação de alta fidelidade | [Luís Henrique Arruda Luna](https://github.com/Donnk61) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) (designado; pendente) |

<p class="caption">Tabela 7 — Histórico de versão.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. p. 138–142, 307–313, 341–343.

[2] SALES, André Barros de. *Plano de Ensino FIHC 022026 — Turma 01*, v1. FCTE/UnB, 2026. Cronograma, p. 5 do PDF.

[3] GRUPO 06. [Metas de usabilidade](../../../entrega-3/metas-usabilidade.md) e [relato do protótipo de papel](relato-prototipo-papel.md). 2026.

## Apêndice A — Fundamentação { #apendice-a-fundamentacao }

As Figuras 1 a 3 fundamentam o método, o planejamento e o piloto.

??? note "Figura 1 — Preparação e coleta no teste de usabilidade"

    ![Trecho sobre preparação e coleta no teste de usabilidade.](../../../assets/img/entrega-6/referencias/barbosa-p342.png){ loading=lazy }
    <p class="caption">Figura 1 — Preparação e coleta no teste de usabilidade.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 342).</p>

??? note "Figura 2 — Atividades do DECIDE"

    ![Trecho sobre as atividades do DECIDE.](../../../assets/img/entrega-6/referencias/barbosa-p313.png){ loading=lazy }
    <p class="caption">Figura 2 — Atividades do DECIDE.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 313).</p>

??? note "Figura 3 — Teste-piloto do procedimento"

    ![Trecho sobre o teste-piloto do procedimento.](../../../assets/img/entrega-6/referencias/barbosa-p307.png){ loading=lazy }
    <p class="caption">Figura 3 — Teste-piloto do procedimento.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 307).</p>
