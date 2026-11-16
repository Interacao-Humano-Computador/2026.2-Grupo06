<span class="owner">Responsável: Heitor Pinheiro Gonçalves das Chagas · Autor do item: Heitor Pinheiro Gonçalves das Chagas</span>

# Relato da avaliação de alta fidelidade — Participação em audiência pública interativa

## Tabela de contribuição

A Tabela 1 registra as contribuições neste artefato.

| Integrante / ferramenta | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | Condução das sessões presenciais, gravação, consolidação dos dados observados e redação do relato | [Conteúdo](#1-introducao-objetivos-e-escopo) |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Revisão técnica por pares | [Histórico de versão](#historico-de-versao) |
| Antigravity e Google Gemini | Apoio na análise das transcrições e telas dos vídeos, estruturação das tabelas e conferência de rastreabilidade | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuições neste artefato.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Item de conteúdo da disciplina

**Autor do item:** Heitor Pinheiro Gonçalves das Chagas.

Barbosa e Silva [1, p. 341–343] definem que o relato dos resultados de um **teste de usabilidade** deve apresentar com transparência os objetivos da avaliação, o método efetivamente executado, o perfil dos avaliadores e dos participantes, o desempenho observado em cada tarefa (conclusão, ajuda, erros e tempos), as falas e opiniões dos usuários separadas da interpretação do avaliador, os problemas diagnosticados com localização, justificativa, fator de usabilidade e sugestão de melhoria, além das limitações do estudo. Os autores também orientam que o ensaio do **teste-piloto** serve para calibrar o procedimento e não deve compor as tabelas principais de resultados [1, p. 307–308].

A Figura 1 reproduz a página de referência utilizada para estruturar este relato.

??? note "Figura 1 — Conteúdo do relato do teste de usabilidade (Barbosa e Silva, 2010, p. 343)"

    <figure markdown="span">
      ![Página 343 de Barbosa e Silva com os tópicos esperados no relato dos resultados de um teste de usabilidade.](../../../assets/img/entrega-6/referencias/barbosa-p343.png){ loading=lazy }
      <figcaption>Figura 1 — Conteúdo e estrutura do relato do teste de usabilidade.</figcaption>
    </figure>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 343 [1]).</p>

---

## 1. Introdução, objetivos e escopo

Este documento relata a avaliação formativa por **teste de usabilidade** do protótipo computacional de alta fidelidade do módulo **Eventos Interativos** do portal **e-Cidadania** do Senado Federal. O recorte acompanha a jornada da persona [Letícia Oliveira](../../../entrega-2/individual/heitor/persona.md) no envio de **pergunta técnica direcionada ao relator em audiência pública interativa ao vivo da CRA sobre o PL 1215/2025**.

O relato executa e responde diretamente aos instrumentos definidos na Etapa 6:

- [Planejamento da avaliação de alta fidelidade](../../../entrega-6/individual/heitor/planejamento-avaliacao-alta-fidelidade.md) (objetivos `AF-O1` a `AF-O4`, perguntas `AF-Q1` a `AF-Q5`, tarefas `AF-T1` a `AF-T4` e metas `M0`, `M2`, `M3`, `M5` e `M6`);
- [Planejamento do relato da alta fidelidade](../../../entrega-6/individual/heitor/planejamento-relato-alta-fidelidade.md) (fichas de sessão e tarefa, matriz de problemas `AF-PR` e regras de consolidação);
- [Relato do protótipo de papel](../../../entrega-6/individual/heitor/relato-prototipo-papel.md) (problemas `PPP-01` a `PPP-03` e decisões `RP01`–`RP04`);
- [Vídeos e evidências da alta fidelidade](evidencias.md) (gravações autorizadas e localizadores por tarefa).

<div class="etapa-actions" markdown>

[Vídeos e evidências](evidencias.md){ .md-button .md-button--primary }
[Abrir protótipo avaliado](../../../prototipos/heitor/alta-fidelidade/index.html){ .md-button }

</div>

### Objetivos e rastreabilidade

A Tabela 2 sintetiza os objetivos específicos (`AF-O1` a `AF-O4`) vinculados às perguntas de avaliação, às tarefas e às metas de usabilidade definidas na Etapa 3 [3].

| Objetivo | Descrição operacional | Perguntas vinculadas | Tarefa(s) | Metas vinculadas |
| :---: | --- | :---: | :---: | :---: |
| **AF-O1** | Avaliar a eficácia e a rapidez na localização da audiência ao vivo da CRA e entrada na sala interativa (`AF-S01` → `AF-S02`) | `AF-Q1` | `AF-T1` | `M0` (eficácia) e `M5` (eficiência) |
| **AF-O2** | Avaliar se a diferenciação mandatória entre "Comentário geral" e "Pergunta a Orador" previne envios incorretos (`AF-S03`) | `AF-Q2` | `AF-T2` | `M0` (eficácia) e `M2` (prevenção de erro crítico) |
| **AF-O3** | Avaliar a seleção de relator via menu suspenso real (`AF-S04`), a retenção do rascunho no login gov.br (`AF-S05`) e a edição na revisão (`AF-S06`) | `AF-Q3`, `AF-Q4` | `AF-T2`, `AF-T3` | `M0` (eficácia) e `M3` (segurança e recuperação) |
| **AF-O4** | Avaliar a compreensão do comprovante (`AF-S07`), do protocolo, do status "Em moderação" e a satisfação de uso | `AF-Q5` | `AF-T4` | `M0` (eficácia) e `M6` (satisfação Likert 1–5) |

<p class="caption">Tabela 2 — Objetivos específicos da avaliação de alta fidelidade e vínculo com tarefas e metas.</p>
<p class="source">Fonte: planejamento da avaliação da Etapa 6 [4] e metas de usabilidade [3].</p>

### Escopo e versão do protótipo avaliada

O fluxo avaliado abrange as telas `AF-S01` a `AF-S07` implementadas na rota `#eventos` do protótipo navegável em HTML/CSS/JavaScript disponível em [docs/prototipos/heitor/alta-fidelidade/index.html](../../../prototipos/heitor/alta-fidelidade/index.html), utilizando dados fictícios em memória (*Letícia Oliveira — Cidadã Teste*, protocolo `CRA-2026-0842`, sem conexão real ao Senado Federal ou à autenticação oficial gov.br). Ficam fora do escopo desta avaliação as metas longitudinais `M1` (aprendizado em sessões repetidas) e `M4` (recordação após 7 dias), conforme já delimitado no planejamento [4].

A Tabela 3 identifica tecnicamente o protótipo avaliado a partir do observado nas gravações.

| Campo | Registro da versão avaliada |
| --- | --- |
| Artefato no repositório | [docs/prototipos/heitor/alta-fidelidade/index.html](../../../prototipos/heitor/alta-fidelidade/index.html) (`app.js`, `data.js`, `styles.css`) |
| Versão / identificador da coleta | Protótipo HTML/CSS/JS executado localmente (`http://127.0.0.1:5500/.../prototipo-alta-fidelidade/index.html`). Hash exato do commit não exibido nas gravações. |
| Data de congelamento para o teste | Não informada nos registros audiovisuais (vídeos publicados em 15/11/2026). |
| Alterações entre sessões | Sem alterações visíveis entre `AF-H01`, `AF-H02` e `AF-H03` (as três sessões exibem a mesma interface inicial e fluxo de Eventos Interativos). |

<p class="caption">Tabela 3 — Identificação técnica do protótipo de alta fidelidade avaliado.</p>
<p class="source">Fonte: inspeção dos registros audiovisuais e do repositório (2026).</p>

---

### Referência permanente do protótipo

A versão disponível no projeto corresponde ao [código preservado no commit `4ccc653`](https://github.com/Interacao-Humano-Computador/2026.2-Grupo06/tree/4ccc65364ee9465255cd1d7dd5e7f79f15b382b8/docs/prototipos/heitor/alta-fidelidade). A comparação com o diretório atual não apresenta alterações. O [protótipo navegável](../../../prototipos/heitor/alta-fidelidade/index.html) permite reproduzir o fluxo; o link permanente preserva o código de referência. O commit identifica a versão do repositório, mas não comprova, sozinho, qual cópia local foi aberta durante a coleta.

## 2. Método, ambiente, papéis e desvios

O método planejado é o **teste de usabilidade moderado** (BARBOSA; SILVA, 2010, p. 341–343 [1]), combinado com **pensar em voz alta** (*think aloud*) durante a execução das tarefas e **entrevista pós-teste**.

A Tabela 4 registra as condições efetivas de execução das sessões observadas nos três vídeos.

| Aspecto | Execução efetiva registrada |
| --- | --- |
| Status de realização das sessões | **3 sessões principais realizadas** (`AF-H01`, `AF-H02`, `AF-H03`). |
| Datas e horários | Data e horários exatos da coleta presencial não informados nas gravações; vídeos publicados no YouTube em **15/11/2026**. |
| Modalidade e local | **Presencial** (gravação por câmera de celular em formato vertical enquadrando a tela do notebook sobre carteira verde de sala de aula). |
| Dispositivo e navegador utilizados | Notebook prata Windows (ASUS VivoBook) com **Google Chrome** em tela cheia/local (`127.0.0.1:5500`) nas três sessões. |
| Papéis da equipe | **Moderador e cinegrafista:** Heitor Pinheiro Gonçalves das Chagas. Não há registro visual ou sonoro de observador/anotador distinto nas gravações. |
| Controle da interface e coleta de opinião | Cada participante operou diretamente o mouse/touchpad e o teclado do notebook, narrando em voz alta (*think aloud*). Ao final, respondeu verbalmente a perguntas qualitativas sobre facilidade, botões/cores e sugestões de melhoria (sem aplicação de nota numérica 1–5). |
| Salvaguardas éticas (CNS 510/2016) | Leitura prévia do TCLE declarada pelo moderador e concordância verbal explícita gravada na abertura das três sessões (`AF-H01`: `00:08`; `AF-H02`: `00:06`; `AF-H03`: `00:08`). Termos e identidades mantidos fora do repositório. |

<p class="caption">Tabela 4 — Método, equipe, ambiente e condições éticas efetivas.</p>
<p class="source">Fonte: inspeção das gravações `AF-H01`, `AF-H02` e `AF-H03` (2026).</p>

### Desvios em relação ao planejado

A Tabela 5 confronta o [planejamento da Etapa 6](../../../entrega-6/individual/heitor/planejamento-avaliacao-alta-fidelidade.md) com o que ocorreu nas gravações e explicita o impacto de cada diferença na análise.

| Aspecto | Previsto na Etapa 6 | Executado na Etapa 7 | Efeito na análise |
| --- | --- | --- | --- |
| Teste-piloto (`PP-AF-H01`) | 08/11/2026, ensaio completo antes das sessões principais | Realizado em **12/11/2026, presencialmente, na FCTE/UnB** (`04:00`), sem vídeo publicado. | Ensaio presencial permitiu calibrar a condução antes da coleta principal; resultados mantidos fora das tabelas principais. |
| Amostra principal | 2 a 3 participantes (`AF-H01` a `AF-H03`) | **3 participantes** (`AF-H01`, `AF-H02`, `AF-H03`), dentro da meta amostral. | Amostra qualitativa formativa completa para o escopo previsto. |
| Modalidade e agenda | 10–11/11/2026, Google Meet ou FCTE/UnB | Presencial (câmera sobre notebook); vídeos publicados em 15/11/2026. | Preserva observação direta do uso real no navegador; data/hora exatas da gravação não constam no vídeo. |
| Equipe de avaliação | Moderador (Heitor), observador e responsável técnico | Heitor atuou na moderação e gravação; sem observador distinto registrado. | Análise pós-teste apoiada integralmente nas gravações em vídeo. |
| Apresentação das tarefas (`AF-T1`–`AF-T4`) | Cartões individuais por tarefa, incluindo cenário específico de erro para `AF-T3` (editar destinatário) | Enunciado unificado na abertura (entrar no evento ao vivo e enviar pergunta ao orador), sem cartão específico de `AF-T3`. | **`AF-T3` não foi executada por nenhum participante (`0/3`)**; não deve ser tratada como falha do usuário. |
| Cronometragem e instrumento M6 | Tempo ativo isolado por cronômetro e nota M6 (1–5) | Intervalos extraídos das minutagens dos vídeos; entrevista final qualitativa sem pergunta numérica (1–5). | Tempos apresentados como intervalos aproximados de vídeo; **nota M6 registrada como "não coletado"**. |

<p class="caption">Tabela 5 — Comparação entre o planejamento da Etapa 6 e a execução efetiva.</p>
<p class="source">Fonte: planejamento da Etapa 6 [4] e análise dos vídeos (2026).</p>

---

## 3. Participantes e teste-piloto

### Participantes principais (`AF-H01` a `AF-H03`)

Em cumprimento à Resolução CNS nº 510/2016 [5] e aos [aspectos éticos do projeto](../../../entrega-2/etica.md), os voluntários são identificados apenas pelos códigos `AF-H01`, `AF-H02` e `AF-H03`. Nenhum nome civil, contato ou arquivo de TCLE é publicado no repositório. Os três participantes situam-se na faixa etária de **18 a 25 anos** e possuem **pouca familiaridade** prévia com o módulo avaliado.

A Tabela 6 apresenta o registro desidentificado dos participantes principais.

| Código | Faixa etária | Familiaridade digital e com e-Cidadania | Dispositivo / navegador | Registro em vídeo | Conformidade TCLE |
| :---: | :---: | :---: | :---: | :---: | :---: |
| `AF-H01` | 18 a 25 anos | Pouca familiaridade | Notebook Windows / Google Chrome | [`AF-H01` (`03:45`)](evidencias.md#af-h01-sessao-principal-1) | Confirmado (`00:08–00:15`) |
| `AF-H02` | 18 a 25 anos | Pouca familiaridade | Notebook Windows / Google Chrome | [`AF-H02` (`03:50`)](evidencias.md#af-h02-sessao-principal-2) | Confirmado (`00:06–00:16`) |
| `AF-H03` | 18 a 25 anos | Pouca familiaridade | Notebook Windows / Google Chrome | [`AF-H03` (`02:51`)](evidencias.md#af-h03-sessao-principal-3) | Confirmado (`00:08–00:15`) |

<p class="caption">Tabela 6 — Registro desidentificado dos participantes principais.</p>
<p class="source">Fonte: dados informados pelo avaliador e gravações `AF-H01`, `AF-H02` e `AF-H03` (2026).</p>

### Teste-piloto (`PP-AF-H01`)

Conforme Barbosa e Silva [1, p. 307–308] e o critério `E7-C10`, o teste-piloto ensaia o protocolo e permanece fora das tabelas principais. A Tabela 7 registra as condições do ensaio piloto.

| Campo | Registro do teste-piloto (`PP-AF-H01`) |
| --- | --- |
| Realização, data e modalidade | **12/11/2026**, presencial, na **FCTE/UnB**. |
| Duração e registro audiovisual | **`04:00`** (4 min 00 s); sem link de vídeo publicado no repositório. |
| Problemas operacionais ou ajustes aplicados | Não informados. |

<p class="caption">Tabela 7 — Registro separado do teste-piloto (`PP-AF-H01`).</p>
<p class="source">Fonte: inventário da coleta (2026).</p>

---

## 4. Desempenho por tarefa

O fluxo investigado corresponde às quatro tarefas do [planejamento da avaliação](../../../entrega-6/individual/heitor/planejamento-avaliacao-alta-fidelidade.md):
- **AF-T1:** localizar a audiência ao vivo da CRA sobre o PL 1215/2025 e entrar na sala (`AF-S01` → `AF-S02`);
- **AF-T2:** marcar "Pergunta a Orador" (`AF-S03`), escolher o orador/relator (`AF-S04`), autenticar-se no gov.br mantendo o texto (`AF-S05`) e confirmar;
- **AF-T3:** na tela de revisão (`AF-S06`), acionar "Editar" para alterar o destinatário sem perder o texto;
- **AF-T4:** na confirmação (`AF-S07`), compreender o protocolo `CRA-2026-0842` e o status "Em moderação", além de acionar a cópia do link.

A Tabela 8 detalha o desempenho observado por participante e tarefa a partir dos vídeos.

| Participante / Tarefa | Percurso observado | Conclusão e ajuda | Erros / recuperação | Duração aproximada no vídeo | Minutagem no vídeo |
| :---: | --- | :---: | --- | :---: | :---: |
| `AF-H01` / **AF-T1** | Procurou na barra superior, localizou o card `Eventos Interativos`, filtrou comissão `CRA` e status `Ao vivo agora` e entrou na audiência do PL 1215/2025. | **Sem ajuda** | Nenhum erro de navegação; breve varredura inicial no menu superior. | ~60 s (`00:38–01:38`) | [`00:38–01:38`](https://youtu.be/jldUpuqbMEw?t=38) |
| `AF-H01` / **AF-T2** | Clicou em enviar comentário/pergunta, selecionou `Pergunta ao Orador`, escolheu `Sen. Marcos Souza`, digitou `"Quanto de crédito será destinado?"`, avançou ao gov.br e entrou como Letícia Oliveira. | **Sem ajuda** | Nenhum erro crítico (não tentou enviar como comentário geral). | ~69 s (`01:39–02:48`) | [`01:39–02:48`](https://youtu.be/jldUpuqbMEw?t=99) |
| `AF-H01` / **AF-T3** | Conferiu os dados na tela de revisão e clicou diretamente em `Confirmar e enviar` (não recebeu instrução para editar destinatário). | **Não executada** | Não se aplica (cenário de edição não aplicado). | ~7 s na revisão (`02:48–02:55`) | [`02:48–02:55`](https://youtu.be/jldUpuqbMEw?t=168) |
| `AF-H01` / **AF-T4** | Identificou o protocolo `CRA-2026-0842` e o status `Em moderação`; clicou em `Simular leitura pela mesa` (`Lida pela mesa`). Não clicou em `Copiar link`. | **Concluída parcialmente (sem ajuda)** | Não acionou o botão de copiar link (objetivo não pedido explicitamente na abertura). | ~29 s (`02:55–03:24`) | [`02:55–03:24`](https://youtu.be/jldUpuqbMEw?t=175) |
| `AF-H02` / **AF-T1** | Notou duas entradas possíveis (`Eventos Interativos` e card ao vivo na página inicial), optou pelo primeiro e entrou na audiência da CRA (418 acompanhando). | **Sem ajuda** | Hesitação verbal breve diante das duas opções na home (`00:49–00:58`). | ~36 s (`00:41–01:17`) | [`00:41–01:17`](https://youtu.be/0ipF1z_tyuA?t=41) |
| `AF-H02` / **AF-T2** | Selecionou `Pergunta ao Orador`, escolheu o relator `Sen. Carlos Silva`, redigiu `"Como você pretende fiscalizar o uso do crédito?"` e entrou via gov.br como Letícia. | **Sem ajuda** | Nenhum erro crítico. | ~71 s (`01:17–02:28`) | [`01:17–02:28`](https://youtu.be/0ipF1z_tyuA?t=77) |
| `AF-H02` / **AF-T3** | Conferiu os dados na revisão e clicou diretamente em `Confirmar e enviar`. | **Não executada** | Não se aplica (cenário de edição não aplicado). | ~8 s na revisão (`02:28–02:36`) | [`02:28–02:36`](https://youtu.be/0ipF1z_tyuA?t=148) |
| `AF-H02` / **AF-T4** | Interpretou inicialmente `Em moderação` como não enviado (`02:36`); moderador esclareceu (`02:45–02:50`). Clicou em `Simular leitura`, depois em `Copiar link para o grupo` e testou abrir o link em outra aba. | **Com ajuda** (esclarecimento de `Em moderação`) | Confusão inicial no significado de `Em moderação`, corrigida após fala do moderador. | ~54 s (`02:36–03:30`) | [`02:36–03:30`](https://youtu.be/0ipF1z_tyuA?t=156) |
| `AF-H03` / **AF-T1** | Clicou no card `Eventos Interativos` e entrou diretamente na audiência marcada como `Ao vivo agora`. | **Sem ajuda** | Nenhum erro de percurso. | ~18 s (`00:38–00:56`) | [`00:38–00:56`](https://www.youtube.com/watch?v=P8xakOufASA&t=38s) |
| `AF-H03` / **AF-T2** | Observou os oradores e `Libras`, selecionou `Pergunta ao Orador`, escolheu `Sen. Carlos Silva`, escreveu `"o que você pensa sobre esse tema?"` e entrou pelo gov.br como Letícia Oliveira. | **Sem ajuda** | Nenhum erro crítico. | ~54 s (`00:56–01:50`) | [`00:56–01:50`](https://www.youtube.com/watch?v=P8xakOufASA&t=56s) |
| `AF-H03` / **AF-T3** | Verificou destinatário e texto na revisão e clicou diretamente em `Confirmar`. | **Não executada** | Não se aplica (cenário de edição não aplicado). | ~11 s na revisão (`01:43–01:54`) | [`01:43–01:54`](https://www.youtube.com/watch?v=P8xakOufASA&t=103s) |
| `AF-H03` / **AF-T4** | Explicou espontaneamente `Em moderação` (*"tá em aceitação pelos moderadores"*), clicou em `Simular leitura`, copiou o link para o grupo e testou enviar um `Comentário geral` adicional. | **Sem ajuda** | Nenhum erro. | ~27 s (`01:54–02:21`) | [`01:54–02:21`](https://www.youtube.com/watch?v=P8xakOufASA&t=114s) |

<p class="caption">Tabela 8 — Desempenho individual observado nas tarefas `AF-T1` a `AF-T4`.</p>
<p class="source">Fonte: análise direta das gravações `AF-H01`, `AF-H02` e `AF-H03` (2026).</p>

A Tabela 9 consolida os resultados quantitativos por tarefa sempre com **denominador explícito**.

| Tarefa | Pessoas expostas ($N$) | Conclusão sem ajuda ($x/N$) | Conclusão com ajuda ($x/N$) | Não executada ($x/N$) | Erros críticos M2 ($x/N$) | Intervalo observado no vídeo |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **AF-T1** | 3 | `3/3` (100%) | `0/3` | `0/3` | — | ~18 s a ~60 s (média ~38 s) |
| **AF-T2** | 3 | `3/3` (100%) | `0/3` | `0/3` | `0/3` envios incorretos | ~54 s a ~71 s (média ~65 s) |
| **AF-T3** | 0 (instrução não aplicada) | `0/3` | `0/3` | `3/3` | — | Não aplicável |
| **AF-T4** | 3 | `1/3` integral (`AF-H03`); `1/3` parcial sem cópia de link (`AF-H01`) | `1/3` (`AF-H02`, esclarecimento de `Em moderação`) | `0/3` | — | ~27 s a ~54 s (média ~37 s) |

<p class="caption">Tabela 9 — Síntese quantitativa por tarefa com denominador explícito.</p>
<p class="source">Fonte: consolidação da Tabela 8 (2026).</p>

---

## 5. Satisfação (M6) e falas em voz alta

Na entrevista pós-teste das três sessões, o moderador recolheu impressões qualitativas sobre facilidade do fluxo, tamanho dos botões, cores e melhorias, mas **não aplicou a pergunta numérica da escala Likert de 1 a 5 (meta M6)**. A Tabela 10 explicita essa lacuna sem imputar notas.

| Participante | Nota M6 (1–5) | Percepção qualitativa relatada na entrevista | Minutagem |
| :---: | :---: | --- | :---: |
| `AF-H01` | **Não coletado** | *"Gostei bastante. Eu achei bem intuitivo, bem simples de mexer."* / *"Não, eu gosto do jeito que tá. Achei bom."* | [`03:24–03:45`](https://youtu.be/jldUpuqbMEw?t=204) |
| `AF-H02` | **Não coletado** | *"Eu achei bem fácil, sim."* / *"É, não. Acho que tá tudo legal, bonitinho assim."* | [`03:30–03:50`](https://youtu.be/0ipF1z_tyuA?t=210) |
| `AF-H03` | **Não coletado** | *"Achei, achei ótimo. Ficou bem fácil, bem intuitivo."* / *"Ficou ótimo. Bem bom de ler e as cores ficaram boas."* (sugeriu ícone vermelho no card da home) | [`02:21–02:51`](https://www.youtube.com/watch?v=P8xakOufASA&t=141s) |

<p class="caption">Tabela 10 — Registro da coleta de satisfação (M6) e síntese da entrevista pós-teste.</p>
<p class="source">Fonte: entrevistas finais registradas nos vídeos (2026).</p>

Em atendimento a Barbosa e Silva [1, p. 342–343] e ao critério `E7-C06`, a Tabela 11 separa as **falas observadas** da **interpretação do avaliador**.

| Participante / Tarefa | Minutagem | Fala observada (*think aloud* ou entrevista) | Interpretação do avaliador |
| :---: | :---: | --- | --- |
| `AF-H01` / `AF-T1` | `00:46–01:06` | *"Aqui nessa barra de cima não tem nada. Aqui um pouco mais para baixo tem esse quadrado de evento interativo..."* | O participante buscou primeiro no menu superior antes de localizar os atalhos centrais da página inicial. |
| `AF-H01` / `AF-T2` | `02:29–02:48` | *"Seu texto e destinatário serão mantidos... Relatório aqui do que eu fiz. Vou entrar."* | O aviso na tela gov.br e o resumo do rascunho comunicaram a preservação dos dados antes do login. |
| `AF-H02` / `AF-T1` | `00:49–00:58` | *"Vejo duas coisas que parecem ser coisas ao vivos. Tem esse eventos interativos e tem esse aqui ao vivo. Agora eu vou escolher esse aqui porque é o que tava primeiro."* | A coexistência do card `Eventos Interativos` e do bloco inferior `Participe agora` gerou dúvida breve sobre qual entrada priorizar. |
| `AF-H02` / `AF-T4` | `02:36–02:45` | *"Ah, tá em moderação, então ele não foi enviado ainda. OK, entendi."* | O rótulo `"Em moderação"` isolado induziu a participante a pensar que o envio não havia sido concluído até a intervenção do moderador. |
| `AF-H02` / `AF-T4` | `02:54–03:22` | *"Copiar link para o grupo. Parece um botão bem chamativo..."* / *"Será que eu posso abrir aqui ver o link? Ah, lá tem o link lá. Legal."* | O destaque visual do botão de compartilhamento despertou confiança e levou a usuária a validar o link copiado. |
| `AF-H03` / `AF-T4` | `01:54–02:03` | *"Eu acredito que aqui seja porque tá em aceitação pelos moderadores da transmissão ao vivo."* | O participante inferiu corretamente o fluxo de triagem pela mesa a partir do status `"Em moderação"`. |
| `AF-H03` / Entrevista | `02:36–02:48` | *"Eu acredito que aqui na primeira página podia ter um simbolozinho vermelho aqui nessa parte que ajudaria a perceber que é um evento ao vivo, mas vendo aqui embaixo agora, eu vi que tem um vermelhinho aqui..."* | A ausência de indicador "AO VIVO" no card superior `Eventos Interativos` reduz a saliência imediata frente ao bloco inferior. |

<p class="caption">Tabela 11 — Separação entre falas observadas em voz alta e interpretação do avaliador.</p>
<p class="source">Fonte: transcrições conferidas das sessões (2026).</p>

---

## 6. Matriz de problemas e decisões de reprojeto

A Tabela 12 consolida os problemas identificados (`AF-PR01` a `AF-PR04`). Nenhuma correção foi aplicada nem retestada após as três gravações; todas permanecem com situação **Pendente (não retestado)**.

| ID | Local (tela / componente) | Tarefa | Evidência empírica e minutagem | Frequência ($x/N$) | Descrição e fator de usabilidade | Hipótese de causa | Severidade | Sugestão de correção | Situação pós-teste |
| :---: | --- | :---: | --- | :---: | --- | --- | :---: | --- | :---: |
| **AF-PR01** | `AF-S01` / Página inicial (atalho `Eventos Interativos` vs. bloco `Participe agora`) | `AF-T1` | `AF-H01` (`00:46`), `AF-H02` (`00:49–00:58`), `AF-H03` (`02:36–02:48`) | `3/3` | Hesitação inicial entre dois caminhos possíveis ou ausência de sinalização "AO VIVO" no card superior de `Eventos Interativos` (encontrabilidade e saliência visual). | O card superior não possui selo vermelho de transmissão ativa, enquanto o bloco inferior exibe o indicador. | **Baixa** | Incluir selo `● AO VIVO` dinâmico no card `Eventos Interativos` quando houver audiência ativa. | Pendente (**não retestado**) |
| **AF-PR02** | `AF-S07` / Badge `Em moderação` no comprovante | `AF-T4` | `AF-H02` (`02:36–02:50`) | `1/3` | Participante interpretou `"Em moderação"` como *"não foi enviado ainda"*, exigindo esclarecimento do moderador (compreensão de estado e feedback). | O rótulo curto sem explicação imediata ao lado do selo permite ambiguidade entre "envio pendente" e "enviado aguardando leitura". | **Média** | Adicionar microtexto explicativo junto ao selo: *"Sua pergunta já foi registrada e aguarda conferência da mesa."* | Pendente (**não retestado**) |
| **AF-PR03** | `AF-S06` / Botão `Editar destinatário ou texto` | `AF-T3` | `AF-H01` (`02:48`), `AF-H02` (`02:28`), `AF-H03` (`01:43`) | `3/3` não executaram | Nenhum participante acionou a edição na revisão porque o cenário específico de destinatário errado não foi apresentado separadamente (cobertura da meta `M3`). | Enunciado único na abertura da sessão, sem cartão isolado para `AF-T3`. | **Média** | Executar rodada complementar aplicando o cartão específico de `AF-T3` para validar a edição de destinatário. | Pendente (**não retestado**) |
| **AF-PR04** | `AF-S07` / Botão `Copiar link para o grupo` | `AF-T4` | `AF-H01` (`03:05–03:24`) | `1/3` não acionou | `AF-H01` simulou a leitura pela mesa, mas encerrou sem clicar no botão de copiar link (clareza de próximo passo). | A instrução inicial focou apenas no envio da pergunta ao orador, sem mencionar compartilhamento com o coletivo. | **Baixa** | Manter destaque do botão e incluir explicitamente o compartilhamento do comprovante no cartão da tarefa `AF-T4`. | Pendente (**não retestado**) |

<p class="caption">Tabela 12 — Matriz de problemas de usabilidade (`AF-PR01` a `AF-PR04`) e decisões de reprojeto.</p>
<p class="source">Fonte: consolidação das gravações `AF-H01` a `AF-H03` (2026).</p>

---

## 7. Respostas às perguntas de avaliação (AF-Q1 a AF-Q5)

A Tabela 13 confronta os resultados observados (com denominador explícito) com as perguntas `AF-Q1` a `AF-Q5` e com as faixas definidas no planejamento [4].

| Pergunta | Metas e faixas do planejamento | Resultado observado (com denominador) | Situação frente às metas |
| --- | --- | --- | :---: |
| **AF-Q1** — A participante localiza a audiência ao vivo da CRA sem ajuda operacional? | `M0` (aceitável $\ge 80\%$, ideal $100\%$); `M5` ($\le 180$ s) | **`3/3` (100%)** entraram na sala da CRA sem ajuda operacional; intervalos observados entre ~18 s e ~60 s (todos $\le 180$ s). | **Atingida** (`M0` e `M5` dentro da faixa ideal) |
| **AF-Q2** — A seleção obrigatória de "Pergunta a Orador" impede submissão como comentário comum? | `M0`; `M2` ($0$ envios incorretos) | **`3/3` (100%)** marcaram `Pergunta ao Orador` antes de digitar, com **`0/3`** envios incorretos como comentário geral. | **Atingida** (`M0` e `M2` na faixa ideal) |
| **AF-Q3** — O menu suspenso permite selecionar e alterar o relator com facilidade? | `M0`; `M3` ($\ge 80\%$ de recuperação) | **`3/3`** selecionaram o orador no menu suspenso sem dificuldade em `AF-T2`; **`0/3`** executaram a edição na revisão (`AF-T3` não aplicada na condução). | **Parcial / Inconclusiva para `M3`** (seleção atingida; edição não avaliada) |
| **AF-Q4** — A simulação gov.br mantém o texto redigido intacto sem perda ou hesitação? | `M0`; `M3` (preservação do contexto) | **`3/3` (100%)** atravessaram a tela gov.br mantendo destinatário e texto intactos na revisão, sem perda de dados nem hesitação bloqueante. | **Atingida** (`M0` e `M3` de retenção) |
| **AF-Q5** — O protocolo e o status "Em moderação" transmitem segurança documental e satisfação? | `M0`; `M6` (média $\ge 3{,}5$) | **`2/3`** compreenderam ou validaram o comprovante com cópia de link (`AF-H03` autônomo; `AF-H02` após esclarecimento do moderador; `AF-H01` não copiou o link). **Nota numérica M6: não coletada (`0/3`)**; relatos qualitativos positivos nas 3 entrevistas. | **Parcial** (`M6` numérica não avaliada por falta de dado) |

<p class="caption">Tabela 13 — Respostas às perguntas de avaliação comparadas às metas de usabilidade.</p>
<p class="source">Fonte: consolidação analítica das sessões `AF-H01` a `AF-H03` (2026).</p>

---

## 8. Continuidade a partir do protótipo de papel (PPP-01 a PPP-03)

A Tabela 14 rastreia os três problemas do [relato do protótipo de papel](../../../entrega-6/individual/heitor/relato-prototipo-papel.md) (`PPP-01` a `PPP-03`) até o comportamento observado nos vídeos da alta fidelidade.

| ID no papel | Problema diagnosticado no papel | Implementação na alta fidelidade (`app.js`) | Comportamento observado nas sessões AF | Situação |
| :---: | --- | --- | --- | :---: |
| **PPP-01** (`PP-S03` / T2) | Breve hesitação ao notar campo de texto inativo antes da escolha do tipo | Rótulo numerado *"1. Tipo de participação (escolha antes de digitar)"*, cartões clicáveis e instrução no campo | **`3/3`** marcaram diretamente `Pergunta ao Orador` antes de digitar, sem tentar escrever no campo bloqueado. | **Superado na amostra observada** |
| **PPP-02** (`PP-M01` / T2) | Espaço compacto na etiqueta recortada para leitura do cargo completo | `<select>` nativo (`#ev-speaker-select`) com nome e cargo completo do orador | **`3/3`** abriram o seletor e escolheram o orador desejado sem relatar dificuldade de leitura. | **Superado na amostra observada** |
| **PPP-03** (`PP-S05` / T2) | Dúvida pontual se a transição para gov.br apagaria o rascunho | Banner verde *"Seu texto e o destinatário serão mantidos"*, resumo do rascunho e estado em memória | **`3/3`** avançaram pelo login gov.br com confiança (`AF-H01` leu o aviso em `02:29`) e verificaram os dados mantidos na revisão. | **Superado na amostra observada** |

<p class="caption">Tabela 14 — Continuidade dos problemas do protótipo de papel (`PPP-01`–`PPP-03`) na alta fidelidade.</p>
<p class="source">Fonte: relato do papel [6] e gravações `AF-H01` a `AF-H03` (2026).</p>

---

## 9. Limitações do estudo

A leitura dos achados deste relato deve respeitar os seguintes limites metodológicos e técnicos:

1. **Amostra pequena e qualitativa:** a avaliação contou com 3 participantes presenciais (`AF-H01` a `AF-H03`), sendo adequada para identificar problemas de interação e fluxo, mas insuficiente para generalização estatística populacional;
2. **Dados fictícios e simulação em memória:** o protótipo utiliza persona e dados simulados (*Letícia Oliveira — Cidadã Teste*, protocolo fixo `CRA-2026-0842`), sem integração real com o portal e-Cidadania, moderação da CRA ou autenticação gov.br em produção;
3. **Versão avaliada e ausência de reteste:** os resultados referem-se exclusivamente à versão HTML executada localmente nas gravações (Tabela 3). As quatro melhorias listadas na Tabela 12 (`AF-PR01` a `AF-PR04`) permanecem **não retestadas**;
4. **Lacunas específicas da coleta:** (a) a tarefa `AF-T3` (edição de destinatário na revisão) não foi aplicada como cartão separado e teve `0/3` execuções; (b) a nota numérica da escala Likert `M6` (1–5) não foi solicitada nas entrevistas pós-teste; (c) o teste-piloto (`PP-AF-H01`) ocorreu presencialmente na FCTE/UnB em 12/11/2026 (`04:00`), mas não possui link de gravação publicado.

---

## Agradecimentos

O Antigravity e o Google Gemini apoiaram na transcrição conferida dos três vídeos, na estruturação das tabelas e na conferência da rastreabilidade com a Etapa 6. A condução das sessões, a análise crítica dos dados e a responsabilidade pelo conteúdo pertencem integralmente a Heitor Pinheiro Gonçalves das Chagas. Revisor técnico: [Bruno Ferreira Dornelas](https://github.com/brunnf).

## Histórico de versão

A Tabela 15 registra o histórico deste artefato.

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `1.0` | 15/11/2026 | Estruturação completa do relato da avaliação de alta fidelidade de Heitor conforme planejamento da Etapa 6 | [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |
| `1.1` | 15/11/2026 | Preenchimento integral dos resultados a partir da análise dos três vídeos (`AF-H01` a `AF-H03`), explicitando lacunas reais (`AF-T3`, `M6`, piloto e perfis não coletados) | [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |

<p class="caption">Tabela 15 — Histórico de versão.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. p. 105–106, 307–308, 312–313, 341–343, 361–362.

[2] SALES, André Barros de. *Plano de Ensino FIHC 022026 — Turma 01*, v1. FCTE/UnB, 2026. Cronograma da Etapa 7, p. 5, 8–9 do PDF.

[3] GRUPO 06. [Metas de Usabilidade](../../../entrega-3/metas-usabilidade.md). 2026.

[4] GRUPO 06. [Planejamento da avaliação de alta fidelidade](../../../entrega-6/individual/heitor/planejamento-avaliacao-alta-fidelidade.md) e [Planejamento do relato da alta fidelidade](../../../entrega-6/individual/heitor/planejamento-relato-alta-fidelidade.md). 2026.

[5] BRASIL. Conselho Nacional de Saúde. *Resolução nº 510, de 7 de abril de 2016*. Brasília: CNS, 2016.

[6] GRUPO 06. [Relato da avaliação do protótipo de papel](../../../entrega-6/individual/heitor/relato-prototipo-papel.md). 2026.
