<span class="owner">Responsável: Israel Soares de Paiva — Agendamento de visita ao Senado · Autor do item: Israel Soares de Paiva</span>

# Storyboard — Marta agenda visita institucional ao Senado Federal

## Tabela de contribuição

A Tabela 1 registra as contribuições na concepção, elaboração e revisão deste artefato.

| Integrante / ferramenta | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Israel Soares de Paiva](https://github.com/IsraelSoares-25) | Desenho manual dos sete quadros (`QD01–QD07`), roteiro narrativo, hipóteses de melhoria e rastreabilidade com a HTA | [Storyboard](#storyboard-desenho) · [Roteiro](#sequencia-narrativa-do-storyboard) · [Rastreabilidade](#transcricao-acessivel-e-rastreabilidade-formal-com-a-hta) |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Revisão técnica de consistência entre os quadros desenhados, o roteiro textual e a HTA | [Histórico de versão](#historico-de-versao) |
| Google Gemini e Antigravity (Google DeepMind) | Apoio na estruturação das tabelas e padronização Markdown | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuições neste artefato.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Introdução

Este storyboard acompanha a persona [Marta Oliveira](../../../entrega-2/individual/israel/persona.md), servidora pública de 47 anos, que deseja programar uma visita cívica com colegas ao Palácio do Congresso Nacional para conhecer o Senado Federal.

Na fase conceitual do ciclo de engenharia de usabilidade, este storyboard de baixa fidelidade cumpre duas finalidades complementares (VIANNA et al., 2012, p. 135–136; PREECE; ROGERS; SHARP, 2005, p. 263–264; BARBOSA; SILVA, 2010, p. 294, 301): **(1) comunicar o conceito da solução** às pessoas usuárias e partes interessadas em linguagem visual narrativa, contextualizando motivação, busca, escolha de horário, revisão e confirmação; e **(2) visualizar o encadeamento da proposta para inspecionar pontos em aberto** antes de investir na construção do protótipo de papel na Etapa 5. A narrativa articula-se diretamente à [Análise Hierárquica de Tarefas (HTA)](../../../entrega-2/individual/israel/analise-tarefas.md) e orienta o [Planejamento da avaliação do storyboard](planejamento-avaliacao-storyboard.md).

## Recorte do reprojeto e hipóteses de melhoria

No portal atual do Senado Federal, a encontrabilidade do serviço de visitação é prejudicada pela predominância de pautas legislativas na página inicial e pelo vocabulário institucional, além da falta de visibilidade imediata sobre como funciona o agendamento, quais horários estão livres e se a reserva foi efetivamente confirmada.

A Tabela 2 apresenta as cinco hipóteses de melhoria (**RP01 a RP05**) delimitadas para comunicação e teste nos sete quadros (`QD01–QD07`).

| ID | Melhoria proposta | Quadros e base na HTA | Hipótese investigada na avaliação |
| :---: | --- | --- | --- |
| **RP01** | Recuperação direta do serviço de visitação a partir da página inicial e da busca por palavras cotidianas (`"visita senado"`) | `QD02–QD03` · HTA `1.1–1.2` | A cidadã consegue localizar a área de agendamento usando termos próprios do dia a dia, sem depender de jargão legislativo |
| **RP02** | Resumo inicial objetivo `"Como funciona"` em três etapas visíveis (`1. Tipo de visita`, `2. Dia e horário`, `3. Receba e-mail`) | `QD04` · HTA `1.3` e `2.1–2.2` | A explicação prévia reduz o risco de desistência e orienta a escolha da modalidade de visita (individual ou grupo) |
| **RP03** | Grade semanal de calendário (`D S T Q Q S S`) exibindo diretamente as faixas de horário livres (ex.: `09:00`, `10:00`, `14:00`) | `QD05` · HTA `3.1–3.3` | A visitante identifica rapidamente um dia e horário livres compatíveis com sua rotina (`Quarta, às 10h`) |
| **RP04** | Tela dedicada de conferência prévia dos dados e do horário selecionado (`Quarta-10`) antes do acionamento de `"Confirma"` | `QD06` · HTA `4.1`, `5.1` e `5.3` | A revisão explícita transmite controle e previne submissões com horário ou dados equivocados |
| **RP05** | Dupla confirmação imediata do agendamento: aviso visual na tela (`Agendamento confirmado`) aliado ao envio de comprovante por e-mail | `QD07` · HTA `6.1` e `6.3` | O recebimento simultâneo na tela e no celular elimina a incerteza sobre a efetivação da reserva |

<p class="caption">Tabela 2 — Escopo das melhorias e hipóteses investigadas nos quadros QD01–QD07.</p>
<p class="source">Fonte: elaboração do autor (2026), com base na HTA v2.0.</p>

## Storyboard (Desenho) { #storyboard-desenho }

A Figura 1 apresenta os sete quadros estáticos desenhados à mão (`QD01–QD07`) em traços esquemáticos de baixa fidelidade (*stick figures* e esboços de tela), numerados sequencialmente e acompanhados de legendas curtas e balões de fala para leitura contínua do gatilho inicial até a confirmação por e-mail.

<figure markdown="span">
  ![Fotografia do storyboard manual em sete quadros numerados de QD01 a QD07 retratando Marta tomando café em casa pela manhã, decidindo levar colegas ao Senado, buscando visita senado no portal, lendo como funciona e escolhendo o tipo de visita, selecionando quarta-feira às 10h no calendário, conferindo os dados antes de confirmar e recebendo confirmação na tela e no e-mail pelo celular.](../../../assets/img/storyboard/israel/storyboardIsrael.jpeg){ loading=lazy }
  <figcaption>Figura 1 — Storyboard manual da jornada de agendamento de visita ao Senado Federal (QD01–QD07).</figcaption>
</figure>
<p class="source">Fonte: elaboração manual de Israel Soares de Paiva (2026).</p>

## Sequência narrativa do Storyboard { #sequencia-narrativa-do-storyboard }

O roteiro escrito abaixo detalha cada seção da história ilustrada na Figura 1, explicitando cenário ambiental, protagonista/atores, falas, resposta esboçada na interface e enquadramento visual:

- **Quadro 1 (`QD01`) — Motivação matinal em casa:** De manhã, na mesa de sua casa (com janela ao sol, xícara de café, leitura, planta e relógio de parede), Marta toma café, lê e lembra da vontade de conhecer o Senado Federal. *Atores:* Marta Oliveira (sozinha). *Enquadramento:* plano médio frontal mostrando o ambiente doméstico completo.
- **Quadro 2 (`QD02`) — Decisão de levar colegas e abertura do portal:** Marta decide organizar a ida com colegas do trabalho e senta-se diante do computador doméstico com a página inicial (`PORTAL`) aberta, perguntando-se: *"Quero levar o pessoal para ver o Senado. Onde eu agendo?"*. *Atores:* Marta (colegas mencionados na motivação) e Portal do Senado. *Enquadramento:* plano médio com Marta à esquerda e o monitor à direita.
- **Quadro 3 (`QD03`) — Busca com vocabulário cotidiano:** Diante da página inicial, Marta recorre à busca usando palavras simples do dia a dia, sem termos técnicos (*"Vou buscar do meu jeito: 'visita senado'"*), digitando `VISITA SENADO` junto ao botão de busca. *Atores:* Marta e mecanismo de busca do portal. *Enquadramento:* plano médio destacando o balão de fala e a caixa de busca na tela.
- **Quadro 4 (`QD04`) — Localização das instruções e escolha do tipo de visita:** Após quase desistir na navegação inicial, Marta alcança a área de agendamento, lê o resumo `"Como funciona: 1. Tipo de visita / 2. Dia e o horário / 3. Receba email"` e seleciona o tipo de visita para o grupo. *Atores:* Marta e página de visitação. *Enquadramento:* plano médio com foco na lista numerada exibida no monitor.
- **Quadro 5 (`QD05`) — Consulta de disponibilidade e escolha de horário:** A tela apresenta a grade semanal (`D S T Q Q S S`) com horários livres à direita (`09:00`, `10:00`, `14:00`). Marta identifica uma vaga compatível e comemora: *"Quarta, às 10h está livre. É essa!"*. *Atores:* Marta e calendário de agendamento. *Enquadramento:* plano médio aproximando o calendário semanal e a reação da personagem.
- **Quadro 6 (`QD06`) — Conferência prévia dos dados:** Antes de concluir a submissão, Marta visualiza a tela `DADOS` exibindo o resumo `QUARTA-10` ao lado do botão `CONFIRMA` e afirma: *"Vou conferir antes de confirmar"*. *Atores:* Marta e tela de revisão. *Enquadramento:* plano médio com destaque para o resumo e o botão de confirmação no monitor.
- **Quadro 7 (`QD07`) — Confirmação na tela e comprovante no e-mail:** O monitor exibe o selo de verificação `AGENDAMENTO CONFIRMADO` enquanto Marta olha o celular com o ícone de mensagem recebida e conclui aliviada: *"Chegou no email! Agora tenho certeza!"*. *Atores:* Marta, tela de confirmação do portal e notificação de e-mail no smartphone. *Enquadramento:* plano médio duplo combinando o monitor confirmado à esquerda e Marta segurando o celular em destaque à direita.

## Transcrição acessível e rastreabilidade formal com a HTA

A Tabela 3 estabelece o cruzamento formal entre cada quadro desenhado na Figura 1 (`QD01–QD07`), o ambiente/atores, o enquadramento adotado, as operações correspondentes da [Análise Hierárquica de Tarefas (HTA v2.0)](../../../entrega-2/individual/israel/analise-tarefas.md) e as questões investigadas no [Planejamento da avaliação](planejamento-avaliacao-storyboard.md).

| Quadro | Legenda e fala no desenho | Cenário e atores | Enquadramento | Operação na HTA | Questões no DECIDE |
| :---: | --- | --- | --- | --- | --- |
| **`QD01`** | *"De manhã, em casa, Marta toma café e lê, lembra à vontade de visitar o Senado."* | Sala/copa da residência pela manhã; Marta sozinha | Plano médio frontal do ambiente doméstico | Contexto motivacional prévio (gatilho/*input* do Objetivo `0`) | `SB-Q1`, `SB-Q5` |
| **`QD02`** | *"Marta decide levar colegas para conhecer o Senado."* Fala: *"Quero levar o pessoal para ver o Senado. Onde eu agendo?"* | Estação com computador em casa; Marta (mencionando colegas) e tela `PORTAL` | Plano médio (personagem + monitor) | `HTA 1.1` (*Abrir o portal do Senado*) e início de `1.2` | `SB-Q1`, `SB-Q2`, `SB-Q4` |
| **`QD03`** | *"Busca palavras do dia a dia, sem usar termos técnicos."* Fala: *"Vou buscar do meu jeito: 'visita senado'"* | Computador em casa; Marta interagindo com o campo `VISITA SENADO` / `BUS[CAR]` | Plano médio com foco na busca do monitor | `HTA 1.2` (*Localizar a opção de visitação institucional* — ponto crítico) | `SB-Q2`, `SB-Q8` |
| **`QD04`** | *"Quase desiste, mas encontra o agendamento e escolhe o tipo de visita."* Tela: `Como funciona: 1. Tipo de visita / 2. Dia e o horário / 3. Receba email` | Computador em casa; Marta lendo instruções e selecionando modalidade | Plano médio destacando o quadro explicativo no monitor | `HTA 1.3` (*Ler informações da visita*) e `HTA 2.1–2.2` (*Definir tipo/grupo*) | `SB-Q2`, `SB-Q3`, `SB-Q6` |
| **`QD05`** | *"Ela vê os horários."* Fala: *"Quarta, às 10h está livre. É essa!"* Tela: `D S T Q Q S S` · `09:00 / 10:00 / 14:00` | Computador em casa; Marta diante da grade de dias e horários | Plano médio com destaque na grade semanal | `HTA 3.1, 3.2 e 3.3` (*Consultar datas disponíveis e selecionar dia e horário*) | `SB-Q2`, `SB-Q3`, `SB-Q7` |
| **`QD06`** | *"Conferindo os dados."* Fala: *"Vou conferir antes de confirmar."* Tela: `DADOS` · `[QUARTA-10]` `[CONFIRMA]` | Computador em casa; Marta revisando o resumo preenchido | Plano médio com foco na tela de revisão e confirmação | `HTA 4.1` (*Dados informados*) e `HTA 5.1, 5.3` (*Conferir resumo e confirmar*) | `SB-Q2`, `SB-Q3`, `SB-Q7` |
| **`QD07`** | Tela: `[✓] Agendamento confirmado`. Fala com celular em mãos: *"Chegou no email! Agora tenho certeza!"* | Casa; Marta entre o monitor confirmado e o smartphone recebendo e-mail | Plano médio combinado com close no celular e no monitor | `HTA 6.1` (*Visualizar confirmação na tela*) e `HTA 6.3` (*Verificar e-mail*) | `SB-Q3`, `SB-Q4`, `SB-Q6`, `SB-Q7` |

<p class="caption">Tabela 3 — Roteiro, cenário, enquadramento e rastreabilidade formal entre os quadros QD01–QD07, a HTA v2.0 e as questões avaliativas.</p>
<p class="source">Fonte: elaboração do autor (2026), a partir da Figura 1 e da HTA v2.0.</p>

**Escopo representado e sub-ramos da HTA fora do storyboard estático.** Os quadros `QD01–QD07` cobrem o caminho principal de sucesso do agendamento (`HTA 1` a `6`). Por se tratar de narrativa sintética de baixa fidelidade, detalhes granulares de formulário — como listagem nominal individualizada de acompanhantes (`HTA 4.2`), solicitação condicional de recursos de acessibilidade (`HTA 4.3`), edição de campo incorreto (`HTA 5.2`), impressão em PDF (`HTA 6.2`), detalhamento de regras de vestimenta na portaria e o ramo pós-agendamento sob demanda **`HTA 7` (*Alterar ou cancelar o agendamento*)** — não possuem quadro desenhado próprio, sendo investigados diretamente por perguntas abertas (`SB-Q3`, `SB-Q6`) e na validação dedicada da HTA, para incorporação nas telas do protótipo de papel na Etapa 5.

## Agradecimentos

Esta página contou com o apoio do Google Gemini e do Antigravity (Google DeepMind) na formatação Markdown e na estruturação da matriz de rastreabilidade entre os quadros `QD01–QD07` e a HTA. O desenho manual, a concepção do roteiro e a responsabilidade acadêmica pelo conteúdo são do autor.

## Histórico de versão

A Tabela 4 registra o histórico de versões deste artefato.

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `1.0` | 25/10/2026 | Concepção da narrativa de 7 cenas do Storyboard de Agendamento de Visita, hipóteses de melhoria e rastreabilidade formal com a HTA | [Israel Soares de Paiva](https://github.com/IsraelSoares-25) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |
| `1.1` | 26/11/2026 | Padronização da Figura 1 (legenda, fonte e chamada textual), explicitação da finalidade exploratória e alinhamento integral de RP01–RP05, roteiro, ambientes, enquadramentos e Tabela 3 aos quadros reais `QD01–QD07` | [Israel Soares de Paiva](https://github.com/IsraelSoares-25) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |

<p class="caption">Tabela 4 — Histórico de versão.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. p. 191–196, 294, 301.

[2] PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. *Design de interação: além da interação homem-computador*. Tradução de Viviane Possamai. Porto Alegre: Bookman, 2005. Cap. 8, p. 263–264.

[3] VIANNA, Maurício; VIANNA, Ysmar; ADLER, Isabel K.; LUCENA, Brenda de F.; RUSSO, Beatriz. *Design Thinking: inovação em negócios*. Rio de Janeiro: MJV Press, 2012. p. 135–137.
