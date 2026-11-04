<span class="owner">Responsável: Bruno Ferreira Dornelas — Complementos de ideias legislativas · Autor do item: Bruno Ferreira Dornelas</span>

# Planejamento da avaliação do protótipo de alta fidelidade

## Tabela de contribuição

A Tabela 1 registra as contribuições neste artefato.

| Integrante / ferramenta | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Definição do DECIDE, tarefas, métricas, piloto e agenda da alta fidelidade | [Introdução](#introducao) |
| Antigravity (Google DeepMind) | Apoio à consulta bibliográfica, rastreabilidade com o relato do papel e redação | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuições no planejamento da avaliação de alta fidelidade.</p>
<p class="source">Fonte: elaboração do projeto (2026).</p>

## Introdução

Este documento planeja a avaliação do **protótipo de alta fidelidade (`AF-1.0`)** para a funcionalidade de **sugerir e acompanhar complementos de ideias legislativas**, incorporando as decisões de reprojeto `PP-A01` a `PP-A04` identificadas no [relato da avaliação do protótipo de papel](relato-prototipo-papel.md#problemas-corrigidos-e-pendentes). O planejamento integra a Etapa 6 (entrega em `03/11/2026`), enquanto a execução do teste de usabilidade e a consolidação dos resultados pertencem à **Etapa 7 (entrega em `15/11/2026`)**, conforme estruturado no [planejamento do relato de alta fidelidade](planejamento-relato-alta-fidelidade.md).

## Item de conteúdo da disciplina

**Autor do item:** Bruno Ferreira Dornelas.

Barbosa e Silva (2010, Seção 10.2.1, p. 341–343 [1]) definem o **teste de usabilidade** como método de observação no qual participantes representativos realizam tarefas em uma versão executável ou navegável da interface, permitindo medir desempenho (conclusão, erros, tempo) e colher opinião e satisfação. O planejamento abaixo segue o framework **DECIDE** (BARBOSA; SILVA, 2010, p. 312–313 [1]) e inclui a realização obrigatória de **teste-piloto** prévio (p. 307–308 [1]). As Figuras 1 a 3 no [Apêndice A](#apendice-a-fundamentacao) reproduzem os trechos de referência.

## D — Determinar os objetivos

A avaliação formativa do protótipo de alta fidelidade busca verificar se as correções decorrentes do protótipo de papel eliminam as dúvidas de autoria e acompanhamento e permitem realizar o fluxo completo com autonomia:

- **AF-O1 (Execução e prevenção de erro):** verificar se a pessoa localiza uma ideia existente, abre seus detalhes, redige, revisa e envia um complemento preservando sua intenção inicial.
- **AF-O2 (Decisão sobre ajustes e responsabilidades):** verificar se a pessoa compara os textos completo original e ajustado pelo autor, toma uma decisão informada (concordar ou discordar) e reconhece de quem depende cada etapa de espera, incluindo o aviso de notificação por e-mail (`PP-A02` e `PP-A03`).
- **AF-O3 (Compreensão da autoria, dos contadores separados e do encaminhamento):** verificar se a pessoa distingue seu próprio complemento publicado (`Autora: Letícia Oliveira — Seu complemento`) de contribuições de terceiros (`PP-A01`), diferencia os apoios da ideia principal dos apoios próprios do complemento (`PP-A04`) e compreende o encaminhamento como anexo consultivo à CDH sem confundi-lo com aprovação automática de lei.

O público-alvo mantém como referência cidadãos adultos interessados em participação legislativa digital, representados pela persona [Letícia Oliveira](../../../entrega-2/individual/heitor/persona.md).

## E — Explorar as perguntas

A Tabela 2 relaciona as perguntas de avaliação (`AF-Q1` a `AF-Q6`) aos objetivos, às origens no [relato do papel](relato-prototipo-papel.md) e às evidências que serão coletadas.

| ID | Pergunta de avaliação | Objetivo e origem | Evidência e dados para responder |
| --- | --- | --- | --- |
| **AF-Q1** | A pessoa localiza a ideia pertinente nos resultados, abre seus detalhes e escolhe complementar sem orientação antecipada no enunciado? | `AF-O1`; `PP-Q1`, `PP-C01` | Percurso em `AF-T1`, cliques, conclusão sem ajuda e justificativa |
| **AF-Q2** | Consegue preencher, revisar na prévia e confirmar o envio do complemento, reconhecendo o estado de espera pelo autor e o aviso de notificação por e-mail? | `AF-O1`, `AF-O2`; `PP-A03` | Ações em `AF-T2`, revisão antes do envio e explicação espontânea da tela `AF-X01a` |
| **AF-Q3** | Compara os dois textos completos na tela de retorno do autor e justifica sua decisão (concordar ou não concordar) preservando sua intenção? | `AF-O2`; `PP-A02` | Leitura dos quadros em `AF-T3`, escolha entre concordar (`AF-X01b`) ou discordar (`AF-X02`) e justificativa |
| **AF-Q4** | Reconhece a autoria do seu próprio complemento publicado sem confundi-lo com complemento de terceiro e distingue os contadores de apoio (`12.343 / 20.000` vs. `40 apoios`)? | `AF-O3`; `PP-A01`, `PP-A04` | Ações e interpretação espontânea da tela `AF-S04` na primeira parte de `AF-T4` |
| **AF-Q5** | Distingue publicação de encaminhamento à CDH, localiza o complemento no `Anexo Consultivo #1` e compreende que o envio para análise não equivale a lei aprovada? | `AF-O3`; `PP-A04`, `PP-Q6` | Interpretação espontânea da tela `AF-S05` na segunda parte de `AF-T4`, antes de qualquer explicação do moderador |
| **AF-Q6** | Quais dificuldades de interação, hesitações e níveis de satisfação (`M6`) permanecem no protótipo de alta fidelidade? | `AF-O1–AF-O3`; todas as tarefas | Erros, pedidos de ajuda, falas espontâneas e nota `M6` (`1` a `5`) pós-tarefa |

<p class="caption">Tabela 2 — Perguntas de avaliação da alta fidelidade.</p>
<p class="source">Fonte: elaboração do projeto (2026), com base em Barbosa e Silva (2010, Tabela 9.1, p. 302 [1]).</p>

## C — Escolher os métodos

Será aplicado o **teste de usabilidade moderado remoto** (BARBOSA; SILVA, 2010, p. 341–343 [1]), realizado via Google Meet com compartilhamento de tela pelo próprio participante. Diferentemente do protótipo de papel — em que o avaliador trocava recortes manualmente —, na alta fidelidade a pessoa interage diretamente pelo navegador com os controles clicáveis, campos de formulário e estados navegáveis da interface, enquanto verbaliza seu raciocínio (*think-aloud*).

- **Papel do moderador (Bruno):** apresentar um enunciado por vez, observar o compartilhamento de tela sem mover o cursor nem antecipar o significado das telas de espera (`AF-X01a`/`AF-X01b`) ou de encaminhamento (`AF-S05`), e conduzir as perguntas pós-tarefa.
- **Papel dos observadores (pelo menos 1 integrante do grupo, a confirmar entre Luís Henrique, Caio Breno e Israel Soares):** registrar tempos por tarefa, cliques, desvios, falas verificáveis e eventuais pedidos de ajuda.
- **Ambiente controlado:** o protótipo executa localmente ou em página estática do repositório, utilizando dados fictícios (`Letícia Oliveira`), sem comunicação com servidores ou contas reais do Senado Federal.

## I — Identificar e administrar questões práticas

### Perfil, recrutamento e quantidade de participantes

- **Quantidade prevista:** **1 participante principal (`AF-P01`)** e **1 pessoa distinta para o teste-piloto (`PP-AF01`)**, dimensionados conforme o escopo individual da disciplina, mantendo a recomendação de Nielsen (2000 apud BARBOSA; SILVA, 2010, p. 307 [1]) de `5` participantes como meta global no consolidado dos cinco integrantes do Grupo 06.
- **Perfil e recrutamento:** pessoa adulta com ensino médio ou superior em andamento/concluído, acesso regular a computador ou celular e interesse em temas coletivos ou serviços públicos digitais. Registrar se a pessoa participou de etapa anterior (como `PP-P01` ou `P01`) para documentar eventual aprendizado prévio; a amostra individual é exploratória e não possui representatividade estatística.
- **Equipamentos e orçamento:** computador ou smartphone com navegador atualizado, conexão à internet, microfone e Google Meet para gravação da tela compartilhada. Orçamento previsto: **R$ 0,00** (recursos próprios da equipe). Caso ocorra queda de conexão ou travamento da tela compartilhada, pausar o cronômetro da tarefa e registrar a ocorrência separadamente.

### Tarefas, dados de teste e critérios de conclusão

Os enunciados da Tabela 3 serão entregues **um por vez**, sem antecipar no texto de `AF-T1` o nome do botão de sugerir complemento (corrigindo o viés de instrução identificado em `PP-EV02`).

| ID e enunciado entregue à pessoa | Estado inicial e dados fornecidos | Critério observável de conclusão |
| --- | --- | --- |
| **AF-T1** — *“Você quer contribuir para que pessoas ocupadas durante o dia possam usar bibliotecas comunitárias à noite. Procure o que já existe no portal e escolha como participar.”* | Tela inicial de busca (`AF-S01a`), sem autenticação ativa; tema: `"Bibliotecas comunitárias"` | Pesquisa o tema, clica para abrir a ideia `"Incentivo às bibliotecas comunitárias"` (`AF-S01b`), examina os detalhes e complementos e escolhe participar sugerindo um complemento |
| **AF-T2** — *“Envie a sua contribuição sobre o atendimento noturno para essa ideia e verifique o que acontece após confirmar o envio.”* | Ideia selecionada (`AF-S01b` → login simulado `gov.br` → formulário `AF-S02`); título `"Atendimento noturno"` e justificativa fornecidos no cartão de apoio | Preenche/seleciona título e justificativa, confere a prévia, confirma o envio e explica espontaneamente na tela `AF-X01a` que aguarda análise do autor e receberá aviso por e-mail |
| **AF-T3** — *“O autor da ideia respondeu sobre a sua contribuição. Compare os textos apresentados e decida como prosseguir.”* | Tela de retorno do autor (`AF-S03`) com os dois textos completos preenchidos lado a lado | Lê e compara o texto enviado e o ajuste sugerido pelo autor (`"...conforme a demanda da comunidade e as condições de cada biblioteca"`), escolhe concordar (`AF-X01b`) ou não concordar (`AF-X02`) e justifica sua decisão |
| **AF-T4** — *“Consulte novamente a ideia legislativa para ver como ficou a sua contribuição agora e, depois da atualização de tempo, explique o que aconteceu com a proposta.”* | **Momento 1:** tela `AF-S04` (complemento publicado com `40 apoios` e ideia com `12.343 / 20.000`).<br>**Momento 2:** acionamento do estado `AF-S05` (meta de `20.000 apoios` atingida e envio à CDH) | **Momento 1:** reconhece o card como sendo de sua própria autoria (`Seu complemento publicado`) e distingue os `12.343` apoios da ideia dos `40` apoios do complemento.<br>**Momento 2:** localiza o `Anexo Consultivo #1` em `AF-S05` e explica que o envio à CDH inicia análise pelos senadores, sem significar lei aprovada |

<p class="caption">Tabela 3 — Tarefas, estados iniciais e critérios de conclusão para a alta fidelidade.</p>
<p class="source">Fonte: elaboração do projeto (2026), a partir de `PP-A01`–`PP-A04` do relato do papel.</p>

### Roteiro da sessão e teste-piloto

A sessão terá duração prevista de **30 a 40 minutos**:
1. **Abertura, TCLE e caracterização (5 min):** confirmação das autorizações de gravação de tela e áudio, perfil e familiaridade digital.
2. **Instrução de compartilhamento de tela (3 min):** verificação de legibilidade e orientação para pensar em voz alta.
3. **Execução das tarefas `AF-T1` a `AF-T4` (20 min):** ao término de cada tarefa, aplicar a pergunta de satisfação **`M6`** (*“De 1 a 5, quão satisfeito(a) você ficou com a experiência de realizar esta tarefa e por quê?”*) e colher a explicação espontânea dos estados antes de passar à tarefa seguinte.
4. **Entrevista pós-teste e encerramento (7 min):** revisão de dúvidas gerais, comparação entre os estados e agradecimento.

**Teste-piloto (`PP-AF01`):** Antes da coleta principal com `AF-P01`, será realizado um teste-piloto completo com **uma pessoa distinta (`PP-AF01`)** que não tenha participado da construção do protótipo (BARBOSA; SILVA, 2010, p. 307–308 [1]). O piloto verificará o funcionamento dos links e transições da interface `AF-1.0`, a clareza dos textos completos em `AF-S03`, do selo de autoria em `AF-S04` e do anexo em `AF-S05`, além do cronômetro de tarefas. Os dados do piloto serão registrados separadamente e não comporão a amostra principal.

### Cronograma e agenda proposta até a Etapa 7

A Tabela 4 define a agenda prevista para construção, piloto, coleta e redação do relato da Etapa 7 (entrega em **15/11/2026**).

| Atividade | Data e horário propostos | Responsável |
| --- | --- | --- |
| Implementar o protótipo de alta fidelidade `AF-1.0` incorporando `PP-A01` a `PP-A04` | `05/11` a `07/11/2026`, `19h–21h` | Bruno Ferreira Dornelas |
| Confirmar participante do piloto (`PP-AF01`), participante principal (`AF-P01`) e observadores | Até `08/11/2026`, `18h` | Bruno e Luís Henrique |
| Realizar o teste-piloto remoto (`PP-AF01`) no Google Meet | `09/11/2026`, `19h–19h40` | Bruno, observador e `PP-AF01` |
| Ajustar o protótipo (`AF-1.1`, se necessário) e congelar versão para o teste | `10/11/2026`, `19h–20h` | Bruno Ferreira Dornelas |
| Conduzir a sessão principal de teste de usabilidade (`AF-P01`) | `11/11/2026`, `19h–19h40` | Bruno, observadores e `AF-P01` |
| Transcrever gravação, analisar métricas e redigir o relato da avaliação de alta fidelidade | `12/11` e `13/11/2026`, `19h–21h` | Bruno e observadores |
| Revisão cruzada do relato e gravação da apresentação da Etapa 7 | `14/11/2026`, `14h–18h` (entrega em `15/11`) | Luís Henrique (revisão) e Bruno |

<p class="caption">Tabela 4 — Agenda proposta para a avaliação de alta fidelidade (Etapa 7).</p>
<p class="source">Fonte: planejamento do projeto (2026).</p>

## D — Decidir como lidar com questões éticas

O teste seguirá o [protocolo ético do Grupo 06](../../../entrega-2/etica.md) e as diretrizes de Barbosa e Silva (2010, p. 138–142, 313 [1]):
- **Consentimento livre e esclarecido (TCLE):** obtenção de aceite prévio específico para participação voluntária, gravação de áudio e captura da tela compartilhada com o protótipo, além de divulgação acadêmica por link não listado no YouTube.
- **Anonimato e privacidade:** identificação exclusiva pelos códigos **`PP-AF01`** (piloto) e **`AF-P01`** (participante principal), sem exibição de rosto, nome completo, CPF, e-mail real ou abas pessoais do navegador da pessoa (orientar abertura do protótipo em janela limpa/anônima antes de iniciar a gravação).
- **Guarda e descarte:** o termo assinado e a chave de identificação permanecerão restritos aos avaliadores fora do repositório público, com exclusão dos arquivos brutos em até 30 dias após o encerramento do semestre letivo. A pessoa poderá pausar, recusar perguntas ou encerrar a sessão a qualquer momento sem prejuízo.

## E — Avaliar, interpretar e apresentar os dados

As execuções de `AF-T1` a `AF-T4` serão analisadas combinando medidas de desempenho e evidências qualitativas, vinculadas às [metas de usabilidade definidas na Etapa 3](../../../entrega-3/metas-usabilidade.md), conforme a Tabela 5.

| Meta / indicador | Definição operacional e medida nesta avaliação | Critério de interpretação e limite |
| --- | --- | --- |
| **M0 — Eficácia (conclusão correta)** | Classificação de cada tarefa (`AF-T1` a `AF-T4`) em: `Concluída sem ajuda`, `Concluída com ajuda`, `Não concluída` ou `Não avaliada`, acompanhada do tempo ativo de execução (em segundos). | Reportar contagem absoluta (ex.: `3/4` tarefas concluídas sem ajuda por `AF-P01`), sem converter 1 participante em percentual populacional. |
| **M2 — Prevenção de erro e compreensão de autoria/estados** | Número de cliques equivocados (como tentar apoiar o próprio complemento por confusão de autoria em `AF-S04`, `PP-A01`, ou enviar sem revisar) e verificação da leitura correta dos contadores e do anexo em `AF-S05`. | Desejado: `0` ocorrências de confusão sobre autoria do próprio complemento em `AF-S04` e reconhecimento espontâneo do Anexo Consultivo em `AF-S05`. |
| **M6 — Satisfação subjetiva por tarefa** | Nota de `1` (*muito insatisfeito*) a `5` (*muito satisfeito*) informada por `AF-P01` após cada tarefa, acompanhada de justificativa verbal. | Relatar a nota individual e a justificativa associada à tela correspondente; não calcular média populacional. |
| **M1, M3, M4 e M5** | Aprendizado entre sessões repetidas (`M1`), recuperação de falha técnica induzida (`M3`), recordação após 7 dias (`M4`) e comparação cronometrada com o portal oficial (`M5`). | **Não avaliadas** neste protocolo, pois a funcionalidade de complementos é inédita no portal e a coleta ocorre em sessão única. |

<p class="caption">Tabela 5 — Medidas e metas de usabilidade aplicáveis ao teste de alta fidelidade.</p>
<p class="source">Fonte: adaptação das metas da Etapa 3 ao recorte de complementos (2026).</p>

**Regras de interpretação e priorização:**
- Separar rigorosamente o comportamento espontâneo da pessoa daquelas respostas obtidas após qualquer intervenção ou esclarecimento do moderador.
- Classificar os problemas observados em prioridade **alta** (impede conclusão da tarefa, compromete a preservação da intenção da proponente ou gera interpretação incorreta de autoria, apoios ou aprovação legislativa), **média** (provoca hesitação, retrabalho ou dúvida sanada na própria tela) ou **baixa** (ajuste cosmético ou de rotulagem complementar).
- Toda alteração realizada após a sessão sem novo teste com usuário permanecerá registrada como **“corrigida, não reavaliada”**. A estrutura detalhada das tabelas e fichas do relatório final encontra-se no [planejamento do relato de alta fidelidade](planejamento-relato-alta-fidelidade.md).

## Agradecimentos

O assistente Antigravity (Google DeepMind) apoiou a organização estrutural do DECIDE, o vínculo rastreável com os achados do protótipo de papel (`PP-A01` a `PP-A04`) e a revisão textual. A definição metodológica e a responsabilidade acadêmica pelo artefato são de Bruno Ferreira Dornelas, com revisão de Luís Henrique Arruda Luna.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `1.0` | 03/11/2026 | Elaboração do planejamento da avaliação do protótipo de alta fidelidade a partir dos achados `PP-A01`–`PP-A04` do relato em papel | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |

<p class="caption">Tabela 6 — Histórico de versão.</p>
<p class="source">Fonte: elaboração do projeto (2026).</p>

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação humano-computador**. Rio de Janeiro: Elsevier, 2010. Aspectos éticos, p. 138–142; Planejamento da avaliação, teste-piloto e DECIDE, p. 305–313; Teste de usabilidade, p. 341–343.

[2] SALES, André Barros de. **Plano de Ensino FIHC 022026 — Turma 01**, v1. Brasília: FCTE/UnB, 2026. Cronograma das Etapas 6 e 7, p. 5 do PDF.

[3] GRUPO 06. [Relato da avaliação do protótipo de papel — Complementos de ideias legislativas](relato-prototipo-papel.md) e [Metas de usabilidade da Etapa 3](../../../entrega-3/metas-usabilidade.md). 2026.

<span id="apendice-a-fundamentacao"></span>

## Apêndice A — Fundamentação

As Figuras 1 a 3 reproduzem os trechos de Barbosa e Silva (2010 [1]) que fundamentam a preparação do teste de usabilidade, as atividades do DECIDE e o teste-piloto.

??? note "Figura 1 — Preparação e coleta de dados no teste de usabilidade"

    ![Preparação e coleta no teste de usabilidade.](../../../assets/img/entrega-6/referencias/barbosa-p342.png){ loading=lazy }
    <p class="caption">Figura 1 — Preparação e coleta no teste de usabilidade.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 342 [1]).</p>

??? note "Figura 2 — Síntese das seis atividades do framework DECIDE"

    ![Atividades do DECIDE.](../../../assets/img/entrega-6/referencias/barbosa-p313.png){ loading=lazy }
    <p class="caption">Figura 2 — Atividades do framework DECIDE.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 313 [1]).</p>

??? note "Figura 3 — Objetivo e condução do teste-piloto antes da coleta principal"

    ![Teste-piloto do procedimento.](../../../assets/img/entrega-6/referencias/barbosa-p307.png){ loading=lazy }
    <p class="caption">Figura 3 — Teste-piloto do procedimento de avaliação.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 307 [1]).</p>

