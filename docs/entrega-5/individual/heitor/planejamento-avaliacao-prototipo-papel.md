<span class="owner">Responsável: Heitor Pinheiro Gonçalves das Chagas — Participação em Evento Interativo (e-Cidadania) · Autor do item: Heitor Pinheiro Gonçalves das Chagas</span>

# Planejamento da avaliação do protótipo de papel — Participação em audiência pública interativa

## Tabela de contribuição

A Tabela 1 registra as contribuições neste planejamento individual.

| Integrante / ferramenta | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | Planejamento DECIDE, definição das telas, tarefas, critérios de conclusão e agenda | [Conteúdo](#contextualizacao) |
| Antigravity (IA generativa) | Apoio à estruturação das tabelas e à redação | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuições no planejamento da avaliação do protótipo de papel.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Introdução

Este documento planeja a avaliação formativa, por **prototipação em papel**, da proposta de reprojeto do módulo **Eventos Interativos** do e-Cidadania (Senado Federal) para a tarefa de **enviar uma pergunta técnica direcionada a um orador durante uma audiência pública ao vivo**.

O planejamento integra a **Etapa 5 (entrega em 25/10/2026)**. A construção do protótipo, o piloto, as sessões e o relato dos resultados pertencem à **Etapa 6 (entrega em 03/11/2026)**. A organização dos dados está no [planejamento do relato dos resultados](planejamento-relato-prototipo-papel.md).

## Contextualização

O reprojeto dá continuidade aos artefatos anteriores de Heitor:

- persona [Letícia Oliveira](../../../entrega-2/individual/heitor/persona.md) e [cenário](../../../entrega-2/individual/heitor/cenario.md) (Etapa 2);
- [análise de tarefas (HTA)](../../../entrega-4/individual/heitor/analise-tarefas.md) e [storyboard](../../../entrega-4/individual/heitor/storyboard.md) (Etapa 4);
- [relato do storyboard](relato-storyboard.md) e [relato da análise de tarefas](relato-analise-tarefas.md) (Etapa 5).

O portal atual oferece uma **caixa única de texto** em que perguntas e comentários se misturam, sem forma de indicar o orador destinatário. As hipóteses de melhoria RP01–RP04, definidas no storyboard, orientam as telas a seguir. Os achados dos relatos da Etapa 5 devem confirmar, ajustar ou descartar cada hipótese antes da construção das folhas (ver [Rastreabilidade](#rastreabilidade-relatos-hipoteses-e-telas)).

Todas as interações usam **dados fictícios**. Nenhuma manifestação real é enviada ao Senado.

## Item de conteúdo da disciplina

**Autor do item:** Heitor Pinheiro Gonçalves das Chagas.

Barbosa e Silva (2010, p. 358–360) descrevem a prototipação em papel como um método de avaliação em que a pessoa participante **executa tarefas** sobre telas desenhadas em papel. Um avaliador faz o papel de "computador": troca as folhas e posiciona os elementos móveis em resposta às ações da pessoa. Outro avaliador observa e registra as dificuldades. O método permite encontrar problemas de interação antes de qualquer implementação, com baixo custo e ciclos rápidos de correção. As Figuras 1 e 2 reproduzem os trechos utilizados.

O planejamento segue o framework **DECIDE** (BARBOSA; SILVA, 2010, p. 312–313): determinar objetivos, explorar perguntas, escolher métodos, identificar questões práticas, decidir sobre questões éticas e avaliar/interpretar os dados.

## D — Determinar os objetivos

**Objetivo geral:** verificar se a interface proposta em papel permite que uma cidadã com o perfil de Letícia encontre a audiência ao vivo, registre sua manifestação como **pergunta direcionada a um orador**, conclua o envio com autenticação e entenda o estado da pergunta após o envio.

| ID | Objetivo específico | Hipótese / HTA |
| :---: | --- | --- |
| PP-O1 | Avaliar a localização da audiência em andamento e o acesso à sala interativa | RP01; HTA 1.1–1.3 |
| PP-O2 | Avaliar se a separação entre "Comentário" e "Pergunta a Orador" é percebida e usada sem ajuda | RP02; HTA 2.1–2.2 (ponto crítico) |
| PP-O3 | Avaliar a escolha do orador destinatário e a recuperação de uma escolha errada | RP02; HTA 2.3 |
| PP-O4 | Avaliar a autenticação gov.br e a revisão antes do envio | HTA 3.1–3.2 |
| PP-O5 | Avaliar se o retorno de recebimento e o estado "em moderação" são compreendidos | RP03–RP04; HTA 4.1–4.2 |

<p class="caption">Tabela 2 — Objetivos da avaliação do protótipo de papel.</p>
<p class="source">Fonte: elaboração do autor (2026), com base na HTA e no storyboard da Etapa 4.</p>

## E — Explorar as perguntas

A Tabela 3 relaciona cada objetivo às perguntas e às evidências que serão observadas.

| ID | Pergunta de avaliação | Objetivo / tarefa | Evidência a registrar |
| :---: | --- | :---: | --- |
| PP-Q1 | A participante encontra a audiência da CRA em andamento a partir da página de Eventos Interativos, sem ajuda? | PP-O1 / T1 | Caminho percorrido, hesitações, pedidos de ajuda |
| PP-Q2 | Antes de digitar, ela percebe que precisa escolher entre "Comentário" e "Pergunta a Orador"? | PP-O2 / T2 | Ordem das ações, comentários em voz alta, escolha feita |
| PP-Q3 | Os rótulos "Pergunta a Orador" e "Comentário" são entendidos da mesma forma que a equipe pretende? | PP-O2 / T2 | Explicação da participante com as próprias palavras |
| PP-Q4 | A lista de oradores permite identificar o relator e corrigir uma escolha errada? | PP-O3 / T3 | Escolha correta, uso de "alterar destinatário" |
| PP-Q5 | A autenticação gov.br no meio do fluxo preserva o texto digitado e não interrompe a tarefa? | PP-O4 / T2–T3 | Reação ao pedido de login, expectativa sobre o texto |
| PP-Q6 | Depois do envio, a participante sabe dizer o que acontece com a pergunta e onde acompanhar? | PP-O5 / T4 | Interpretação do estado "em moderação" e do comprovante |

<p class="caption">Tabela 3 — Perguntas de avaliação e evidências.</p>
<p class="source">Fonte: elaboração do autor (2026).</p>

## C — Escolher os métodos

O método é a **avaliação por prototipação em papel com execução de tarefas** (BARBOSA; SILVA, 2010, p. 358–360), combinada com **pensar em voz alta** durante as tarefas e uma **entrevista curta pós-teste**.

Procedimento previsto:

1. A participante recebe uma tarefa por vez, em cartão impresso;
2. Ela aponta com o dedo ou caneta o elemento que quer acionar e escreve no campo de texto quando necessário;
3. O "computador" troca a folha ou coloca o elemento móvel correspondente, sem explicar a interface;
4. O observador anota ações, dúvidas, erros, pedidos de ajuda e falhas da simulação;
5. Ao final, a entrevista pós-teste retoma pontos não esclarecidos.

**Modalidade:** presencial, na FCTE/UnB, com a câmera apontada apenas para a mesa e as folhas, mediante autorização.

## I — Identificar e administrar questões práticas

### Participantes, recrutamento e papéis

- **Perfil:** jovens adultos que participam de coletivos, movimentos sociais ou entidades estudantis e que acompanham ou têm interesse em audiências públicas (perfil de Letícia Oliveira);
- **Recrutamento:** convite por conveniência em grupos acadêmicos e comunitários; participantes das sessões de storyboard e HTA podem ser convidados, com essa condição registrada no relato;
- **Quantidade:** **1 participante no piloto** e **2 a 3 participantes nas sessões principais**. A quantidade é adequada a uma avaliação formativa, voltada a encontrar problemas e não a medir desempenho com validade estatística. Não se afirmará representatividade da população.

A Tabela 4 define os papéis. O "computador" e o observador são pessoas diferentes (BARBOSA; SILVA, 2010, p. 360).

| Papel | Responsabilidade | Responsável |
| --- | --- | --- |
| Facilitador e "computador" | Entregar as tarefas, trocar folhas e elementos móveis, conduzir a entrevista final | [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) |
| Observador | Preencher a ficha de observação por tarefa e controlar o tempo | Integrante do Grupo 06 a confirmar antes do piloto |
| Participante do piloto | Ensaiar o procedimento; dados não entram no relato | PP-PILOTO-H01 |
| Participantes principais | Executar as tarefas T1–T4 | PP-H01 a PP-H03 |

<p class="caption">Tabela 4 — Papéis na avaliação do protótipo de papel.</p>
<p class="source">Fonte: elaboração do autor (2026).</p>

### Inventário de telas e elementos móveis

A Tabela 5 lista o material a desenhar à mão antes do piloto.

| ID | Folha / elemento móvel | Conteúdo representado | HTA / hipótese |
| :---: | --- | --- | :---: |
| PP-S01 | Página "Eventos Interativos" | Filtros por situação ("Em andamento") e por comissão; cartões de eventos com selo "AO VIVO" | 1.1–1.2; RP01 |
| PP-S02 | Sala da audiência da CRA (PL 1215/2025) | Área do vídeo, pauta resumida, lista de oradores da mesa, botão "Participar" | 1.3; RP01 |
| PP-S03 | Painel de participação | Escolha obrigatória "Pergunta a Orador" ou "Comentário" **antes** do campo de texto | 2.1–2.2; RP02 |
| PP-S04 | Formulário de pergunta | Campo "Destinatário" (lista), campo de texto com contador de caracteres, botão "Revisar" | 2.3; RP02 |
| PP-M01 | Lista suspensa de oradores (móvel) | Relator, presidente da comissão e convidados, com cargo ao lado do nome | 2.3 |
| PP-S05 | Login gov.br | Tela simplificada com aviso "Seu texto será mantido" | 3.1 |
| PP-S06 | Revisão antes do envio | Tipo, destinatário e texto, com botões "Editar" e "Confirmar envio à mesa" | 3.2 |
| PP-S07 | Confirmação de recebimento | Número de protocolo, estado "Em moderação", explicação do que acontece depois, botão "Copiar link para o grupo" | 4.1–4.2; RP03–RP04 |
| PP-M02 | Mensagem de erro (móvel) | "Escolha um destinatário para enviar uma pergunta a orador" | Prevenção de erro |
| PP-M03 | Mudança de estado (móvel) | Selo "Lida pela mesa" sobre a PP-S07, para a tarefa T4 | 4.1; RP04 |

<p class="caption">Tabela 5 — Inventário de telas e elementos móveis.</p>
<p class="source">Fonte: elaboração do autor (2026).</p>

### Tarefas, dados fictícios e critérios de conclusão

Os enunciados são entregues à participante. Os critérios de conclusão ficam só com a equipe.

| ID | Enunciado entregue à participante | Estado inicial | Critério de conclusão (equipe) |
| :---: | --- | --- | --- |
| T1 | "Seu coletivo avisou que está acontecendo agora uma audiência da Comissão de Agricultura sobre o PL 1215/2025. Entre na sala dessa audiência." | PP-S01 | Chega à PP-S02 da audiência correta |
| T2 | "O coletivo quer saber do relator como ficam os prazos do crédito emergencial. Envie essa pergunta para ele." | PP-S02 | Escolhe "Pergunta a Orador", seleciona o relator, passa pelo login e confirma o envio |
| T3 | "Você percebeu que mandou para a pessoa errada da mesa. Antes de confirmar, corrija." (aplicada na PP-S06, com o destinatário errado já preenchido) | PP-S06 com destinatário errado | Usa "Editar" e altera o destinatário sem reescrever o texto |
| T4 | "Explique para o seu grupo o que aconteceu com a sua pergunta e como eles podem fazer o mesmo." | PP-S07 (depois PP-M03) | Explica corretamente o estado "Em moderação" ou "Lida" e indica onde está a opção de pergunta a orador |

<p class="caption">Tabela 6 — Tarefas, estados iniciais e critérios de conclusão.</p>
<p class="source">Fonte: elaboração do autor (2026).</p>

**Dados fictícios:** login gov.br de teste ("cidadã de teste"), texto-base da pergunta impresso para quem preferir não redigir. Nenhum CPF ou senha real é solicitado.

**Reinício:** se a participante ficar sem saída por mais de 2 minutos, o facilitador oferece ajuda gradual (primeiro uma pergunta neutra, depois uma dica). Toda ajuda é registrada como intervenção.

### Teste piloto

O piloto será feito **antes das sessões principais**, com uma pessoa que não participa da amostra, para:

1. verificar se os enunciados são claros e não induzem a resposta;
2. ensaiar a troca das folhas e a posição dos elementos móveis;
3. testar a ficha de observação e a câmera;
4. cronometrar a sessão (meta de 30 a 40 minutos).

!!! warning "Resultados do piloto"
    Os resultados do teste piloto servem apenas para ajustar o material e o procedimento. **Não serão apresentados no relato dos resultados da avaliação.** Os ajustes feitos depois do piloto serão registrados.

### Agenda proposta (Etapa 6)

As datas são propostas e dependem de confirmação dos participantes e do observador.

| Atividade | Data | Horário | Local |
| --- | :---: | :---: | --- |
| Ajustar telas a partir dos relatos da Etapa 5 | 27/10/2026 | 19h–21h | — |
| Desenhar e recortar folhas e elementos móveis | 28/10/2026 | 14h–18h | — |
| Teste piloto (PP-PILOTO-H01) | 29/10/2026 | 16h–16h40 | FCTE/UnB |
| Ajustes pós-piloto | 29/10/2026 | 17h–18h | FCTE/UnB |
| Sessões PP-H01 a PP-H03 | 30/10/2026 | 14h–17h (40 min cada, 20 min de intervalo) | FCTE/UnB |
| Consolidação das fichas e vídeos | 31/10/2026 | 14h–18h | — |
| Redação do relato | 01–02/11/2026 | — | — |
| Entrega da Etapa 6 | 03/11/2026 | até 23h59 | Repositório |

<p class="caption">Tabela 7 — Agenda proposta para a execução.</p>
<p class="source">Fonte: elaboração do autor (2026), com base no cronograma do plano de ensino.</p>

### Recursos e orçamento

- **Material:** papel sulfite, cartolina, canetas, post-its para os elementos móveis, tesoura e fita;
- **Equipamento:** celular em suporte para gravação, cronômetro, fichas impressas;
- **Pessoas:** facilitador e observador;
- **Custo estimado:** cerca de R$ 15,00 em material, com recursos próprios.

## D — Decidir como lidar com as questões éticas

A avaliação segue os [aspectos éticos do projeto](../../../entrega-2/etica.md) e a Resolução CNS nº 510/2016:

- **TCLE** lido e assinado antes do início, explicando objetivo, procedimento, duração, riscos mínimos e direito de desistir a qualquer momento sem justificativa;
- **Gravação:** autorização pedida **antes** de ligar a câmera, em campo separado do TCLE. A gravação mostra apenas as mãos e as folhas, e o vídeo é publicado como não listado só com essa autorização;
- **Anonimato:** códigos PP-H01 a PP-H03 nos registros públicos. Nome e contato ficam fora do repositório;
- **Avalia-se a interface, não a pessoa:** isso é dito no início e repetido se houver dificuldade;
- **Dados fictícios:** nenhum dado pessoal real é digitado ou escrito nas folhas.

## E — Avaliar, interpretar e apresentar os dados

Para cada tarefa serão registrados: conclusão (sem ajuda, com ajuda, não concluída), tempo aproximado, erros, intervenções, falas relevantes e falhas da simulação. Os problemas serão descritos com a tela, a tarefa, a consequência, o princípio afetado e a prioridade. A análise responde às perguntas PP-Q1–PP-Q6 e separa o que foi observado do que é interpretação da equipe. A estrutura completa está no [planejamento do relato](planejamento-relato-prototipo-papel.md).

## Rastreabilidade: relatos, hipóteses e telas

| Origem | Hipótese / decisão | Tela | Tarefa / pergunta |
| --- | --- | :---: | :---: |
| Storyboard QD02; HTA 1.1–1.3 | RP01 — localizar a audiência ao vivo | PP-S01, PP-S02 | T1 / PP-Q1 |
| Storyboard QD03–QD04; HTA 2.2–2.3 | RP02 — separar pergunta de comentário e escolher orador | PP-S03, PP-S04, PP-M01 | T2, T3 / PP-Q2–Q4 |
| HTA 3.1–3.2 | Manter o texto durante o login e revisar antes do envio | PP-S05, PP-S06 | T2, T3 / PP-Q5 |
| Storyboard QD05–QD06; HTA 4.1–4.2 | RP03–RP04 — retorno de recebimento e estado da pergunta | PP-S07, PP-M03 | T4 / PP-Q6 |

<p class="caption">Tabela 8 — Rastreabilidade entre artefatos anteriores, hipóteses, telas e tarefas.</p>
<p class="source">Fonte: elaboração do autor (2026). Atualizar após a consolidação dos relatos da Etapa 5.</p>

## Agradecimentos

O Antigravity (IA generativa) apoiou a organização das tabelas e a redação deste planejamento. As decisões sobre objetivos, telas, tarefas e agenda, e a responsabilidade pelo conteúdo, são de Heitor Pinheiro Gonçalves das Chagas.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `0.1` | 24/10/2026 | Planejamento DECIDE inicial do protótipo de papel: objetivos, perguntas, telas, tarefas, papéis, piloto, agenda e ética | [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | A solicitar |

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. p. 307–313, 358–362.

[2] BRASIL. Conselho Nacional de Saúde. *Resolução nº 510, de 7 de abril de 2016*. Brasília: CNS, 2016.

[3] SALES, André Barros de. *Plano de Ensino FIHC 022026 — Turma 01*, v1. Brasília: FCTE/UnB, 2026. Cronograma das Etapas 5 e 6.

[4] SENADO FEDERAL. *Portal e-Cidadania: Eventos Interativos*. Disponível em: <https://www12.senado.leg.br/ecidadania/principalaudiencia>. Acesso em: 24 out. 2026.

## Apêndice A — Trechos do livro

??? note "Figura 1 — Prototipação em papel (Barbosa e Silva, 2010, p. 358)"
    ![Página 358: descrição do método de prototipação em papel.](../../../assets/img/entrega-5/referencias/barbosa-papel-p358.png)
    <p class="caption">Figura 1 — Método de prototipação em papel.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 358).</p>

??? note "Figura 2 — Papéis dos avaliadores (Barbosa e Silva, 2010, p. 360)"
    ![Página 360: um avaliador simula o sistema e outro observa o uso.](../../../assets/img/entrega-5/referencias/barbosa-papel-p360.png)
    <p class="caption">Figura 2 — Equipe e coleta na prototipação em papel.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 360).</p>

??? note "Figura 3 — Framework DECIDE (Barbosa e Silva, 2010, p. 312–313)"
    ![Atividades do DECIDE descritas por Barbosa e Silva.](../../../assets/img/referencias/barbosa-decide-p312-313.png)
    <p class="caption">Figura 3 — Organização da avaliação pelo DECIDE.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 312–313).</p>
