<span class="owner">Responsável: Heitor Pinheiro Gonçalves das Chagas — Participação em Evento Interativo (e-Cidadania) · Autor do item: Heitor Pinheiro Gonçalves das Chagas</span>

# Planejamento da avaliação de alta fidelidade — Participação em audiência pública interativa

## Tabela de contribuição

A Tabela 1 registra as contribuições no planejamento da avaliação de alta fidelidade.

| Integrante / ferramenta | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | Planejamento completo pelo framework DECIDE, tarefas, métricas ligadas às metas M0–M6 e agenda | [Conteúdo](#d-determinar-os-objetivos) |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Revisão técnica por pares | [Histórico de versão](#historico-de-versao) |
| Antigravity e Google Gemini | Apoio na estruturação das tabelas e conferência bibliográfica | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuições neste artefato.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Introdução

Este artefato estabelece o planejamento metodológico para a avaliação formativa por **teste de usabilidade** do protótipo de alta fidelidade do módulo **Eventos Interativos** do portal **e-Cidadania** do Senado Federal. O recorte investiga a tarefa da persona [Letícia Oliveira](../../../entrega-2/individual/heitor/persona.md) ao **enviar uma pergunta técnica direcionada a orador em audiência pública interativa ao vivo da CRA sobre o PL 1215/2025**.

O planejamento integra a **Etapa 6 (03/11/2026)**, servindo de roteiro obrigatório para as sessões de teste cuja execução e análise serão relatadas na **Etapa 7 (15/11/2026)**, conforme o plano de ensino [1]. O protótipo navegável correspondente estará disponível no caminho previsto [docs/prototipos/heitor/alta-fidelidade/index.html](../../../prototipos/heitor/alta-fidelidade/index.html) (A preencher na Etapa 7).

### Convenção de identificadores (AF vs. PP e PPP)

Para assegurar clareza e rastreabilidade na leitura do projeto, este documento adota a seguinte convenção:

- **AF (Alta Fidelidade):** prefixo que identifica todos os elementos vinculados ao ciclo avaliativo do protótipo computacional de alta fidelidade a ser testado na Etapa 7:
    - **`AF-O1` a `AF-O4`:** **O**bjetivos específicos da avaliação em **A**lta **F**idelidade;
    - **`AF-Q1` a `AF-Q5`:** Perguntas de avaliação (*Questions*) a serem respondidas no teste em **A**lta **F**idelidade;
    - **`AF-T1` a `AF-T4`:** **T**arefas do teste de usabilidade em **A**lta **F**idelidade;
    - **`AF-S01` a `AF-S07`:** Telas (*Screens*) do protótipo interativo de **A**lta **F**idelidade;
    - **`AF-H01` a `AF-H03`:** Participantes voluntários das sessões conduzidas por **H**eitor em **A**lta **F**idelidade (`PP-AF-H01` no piloto);
    - **`AF-PR01` em diante:** **Pr**oblemas de usabilidade detectados na **A**lta **F**idelidade;
- **PP / PPP:** prefixos do ciclo anterior referindo-se a **P**rotótipo de **P**apel (`PP-O`, `PP-Q`, `PP-S`, `PP-M`, `PP-H`) e **P**roblemas no **P**rotótipo de **P**apel (`PPP-01` a `PPP-03`), documentados no [relato do protótipo de papel](relato-prototipo-papel.md).

## Fundamentação

**Autor do item:** Heitor Pinheiro Gonçalves das Chagas.

Barbosa e Silva (2010, p. 312–313, 341–343) ensinam que o **teste de usabilidade** é um método de observação direta no qual pessoas que representam o público-alvo utilizam o sistema para realizar um conjunto de tarefas típicas em ambiente controlado ou representativo. O método permite coletar medidas objetivas de desempenho (tempo, taxas de sucesso, erros) e percepções subjetivas de satisfação, fornecendo diagnósticos precisos sobre onde e por que a interface facilita ou dificulta a interação. O planejamento é estruturado segundo as seis atividades do framework **DECIDE** (BARBOSA; SILVA, 2010, p. 312–313):
1. **D** — Determinar os objetivos gerais e específicos da avaliação;
2. **E** — Explorar as perguntas a serem respondidas;
3. **C** — Escolher os métodos de avaliação;
4. **I** — Identificar e administrar questões práticas (participantes, tarefas, ambiente, agenda);
5. **D** — Decidir como lidar com as questões éticas;
6. **E** — Avaliar, interpretar e apresentar os dados.

As Figuras 1 a 3 do [Apêndice A](#apendice-a-fundamentacao-bibliografica) reproduzem a fundamentação bibliográfica.

---

## D — Determinar os objetivos

O objetivo geral consiste em avaliar, por meio de um protótipo de alta fidelidade computacional e interativo, se a interface reprojetada permite que uma cidadã com o perfil de Letícia localize com rapidez a audiência da CRA ao vivo, diferencie compulsoriamente sua manifestação como pergunta técnica a orador, selecione o relator da matéria, mantenha seus dados seguros durante a autenticação gov.br e compreenda o comprovante e status "Em moderação".

A Tabela 2 apresenta os objetivos específicos (`AF-O1` a `AF-O4`), articulados às [metas de usabilidade do projeto](../../../entrega-3/metas-usabilidade.md) e às decisões herdadas do [protótipo de papel](relato-prototipo-papel.md).

| ID | Objetivo específico | Decisão de reprojeto / HTA | Metas de usabilidade vinculadas |
| :---: | --- | :---: | :---: |
| **AF-O1** | Avaliar a eficácia e rapidez na localização da audiência ao vivo e entrada na sala interativa | RP01; HTA 1.1–1.3 | M0 (eficácia) e M5 (eficiência) |
| **AF-O2** | Avaliar se a diferenciação mandatória entre "Comentário geral" e "Pergunta a Orador" previne envios incorretos à mesa | RP02; HTA 2.1–2.2 | M0 (eficácia) e M2 (prevenção de erro crítico) |
| **AF-O3** | Avaliar a seleção do relator via menu suspenso real e a persistência do rascunho após login gov.br e revisão | RP02; HTA 2.3 e 3.1–3.2 | M0 (eficácia) e M3 (segurança/recuperação de contexto) |
| **AF-O4** | Avaliar a compreensão do comprovante com número de protocolo, status "Em moderação" e a satisfação geral de uso | RP03–RP04; HTA 4.1–4.2 | M0 (eficácia) e M6 (satisfação do usuário) |

<p class="caption">Tabela 2 — Objetivos específicos da avaliação de alta fidelidade.</p>
<p class="source">Fonte: elaboração do autor (2026), com base nas metas da Etapa 3 e no reprojeto da Etapa 5.</p>

---

## E — Explorar as perguntas de avaliação

A Tabela 3 consolida as perguntas de avaliação (`AF-Q1` a `AF-Q5`) e os dados que serão coletados para respondê-las.

| ID | Pergunta de avaliação | Tarefa / Foco | Indicadores e dados observáveis |
| :---: | --- | :---: | --- |
| **AF-Q1** | A participante localiza a audiência ao vivo da CRA no módulo de Eventos Interativos sem ajuda operacional? | AF-T1 / RP01 | Caminho percorrido, cliques errados, tempo ativo e conclusão autônoma (M0) |
| **AF-Q2** | A seleção obrigatória de "Pergunta a Orador" impede que o texto seja submetido como comentário comum? | AF-T2 / RP02 | Tentativas de digitação antes de marcar a opção, erro crítico evitado (M2) |
| **AF-Q3** | O menu suspenso interativo permite selecionar e alterar o relator da matéria com facilidade? | AF-T2 e AF-T3 | Uso do seletor dropdown, reversão de escolha na tela de revisão (M0, M3) |
| **AF-Q4** | A simulação da autenticação gov.br mantém o texto redigido intacto sem perda de dados ou hesitação? | AF-T2 / HTA 3.1 | Preservação do formulário, falas sobre confiança na retenção dos dados |
| **AF-Q5** | O protocolo identificável e o status "Em moderação" transmitem segurança documental e satisfação? | AF-T4 / RP03–04 | Interpretação verbal do status, cópia do link e nota Likert 1 a 5 (M6) |

<p class="caption">Tabela 3 — Perguntas de avaliação e indicadores empíricos.</p>
<p class="source">Fonte: elaboração do autor (2026).</p>

---

## C — Escolher os métodos

O método selecionado é o **teste de usabilidade moderado** (BARBOSA; SILVA, 2010, p. 341–343), complementado pela técnica de **pensar em voz alta** (*think aloud*) durante a interação e por uma **entrevista pós-teste** apoiada em questionário de satisfação (escala de 1 a 5).

### Justificativa da escolha
Diferentemente do protótipo de papel — que depende de um operador humano simulando transições com folhas e cartões —, o protótipo de alta fidelidade implementa comportamentos de software reais no navegador:
1. Validações dinâmicas de campos (ex.: bloqueio físico do campo de texto até a escolha do tipo de manifestação);
2. Abertura e rolagem natural de listas suspensas (*dropdown menus*);
3. Persistência de estado de formulário em memória de sessão durante o fluxo de autenticação;
4. Medição fidedigna de tempos de resposta e reações motoras com teclado e mouse em ambiente web.

A modalidade será **remota síncrona via Google Meet**, com compartilhamento de tela e áudio do participante, ou presencial em laboratório da FCTE/UnB, garantindo ambiente silencioso e sem interrupções.

---

## I — Identificar e administrar questões práticas

### Participantes, recrutamento e papéis
- **Perfil do público:** jovens adultos (18 a 30 anos), estudantes universitários ou militantes de movimentos sociais e organizações da sociedade civil que tenham interesse ou hábito de acompanhar debates legislativos online, condizente com a persona Letícia Oliveira;
- **Recrutamento:** convite voluntário em comunidades acadêmicas da UnB e coletivos estudantis, sem seleção por preferência partidária ou ideológica;
- **Amostra:** **1 participante para o teste-piloto (`PP-AF-H01`)** e **2 a 3 participantes para as sessões oficiais (`AF-H01` a `AF-H03`)**. Trata-se de uma avaliação qualitativa formativa para descoberta e correção de problemas de IHC, não exigindo generalização estatística populacional;
- **Papéis:**
  - **Moderador/facilitador:** [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01), responsável pela recepção, orientações iniciais, leitura dos cartões de tarefas e condução da entrevista final;
  - **Observador/anotador:** integrante do Grupo 06 a confirmar, responsável pelo cronômetro e preenchimento da ficha por tarefa;
  - **Responsável técnico/gravação:** integrante a confirmar, responsável pelo enquadramento e salvamento do vídeo no Google Meet.

### Tarefas do teste de usabilidade

A Tabela 4 apresenta os enunciados lidos aos participantes, as condições iniciais e os critérios objetivos de sucesso para as tarefas `AF-T1` a `AF-T4`.

| ID | Enunciado lido à participante | Estado inicial e dados | Critério objetivo de conclusão (equipe) |
| :---: | --- | --- | --- |
| **AF-T1** | *"Seu coletivo avisou que está acontecendo uma audiência da CRA sobre o PL 1215/2025 neste momento. Entre na sala dessa audiência para participar."* | Página inicial de Eventos Interativos (`AF-S01`) | Aplica filtros ou busca e acessa com sucesso a sala da CRA (`AF-S02`) sem ajuda. |
| **AF-T2** | *"O coletivo quer que você envie uma pergunta sobre crédito emergencial ao relator da matéria. Formule e envie essa pergunta para ele."* | Sala da audiência (`AF-S02`); texto fictício pré-definido | Marca "Pergunta a Orador", escolhe o relator no seletor, autentica-se e confirma o envio. |
| **AF-T3** | *"Antes de submeter, você percebeu que havia marcado a autoridade errada da mesa. Mostre como alteraria o destinatário sem perder o texto."* | Tela de revisão (`AF-S06`) com destinatário incorreto pré-carregado | Aciona "Editar", altera o relator no menu suspenso e revalida a revisão mantendo o texto. |
| **AF-T4** | *"A mensagem foi enviada. Explique o que aconteceu com sua manifestação e envie o comprovante para seu grupo no aplicativo de mensagens."* | Tela de confirmação (`AF-S07`) | Identifica o protocolo, interpreta o status "Em moderação" e aciona o botão de cópia de link. |

<p class="caption">Tabela 4 — Tarefas, condições iniciais e critérios de sucesso.</p>
<p class="source">Fonte: elaboração do autor (2026).</p>

**Dados fictícios padronizados:** usuário de demonstração *"Letícia Oliveira — Cidadã Teste"*, texto-base da pergunta: *"Gostaria de saber do senhor relator como serão garantidos os prazos do crédito emergencial para cooperativas da agricultura familiar."* Nenhum documento pessoal ou senha real é exigido.

### Teste-piloto
O ensaio-piloto será realizado com o participante `PP-AF-H01` **em data anterior à coleta oficial**, com os seguintes objetivos:
1. Testar o link e o carregamento do protótipo de alta fidelidade em navegadores distintos;
2. Verificar se os enunciados das tarefas são perfeitamente compreendidos sem ambiguidades;
3. Checar a qualidade do áudio e da gravação no Google Meet;
4. Treinar a sincronia entre a moderação e as anotações do observador;
5. Calibrar o tempo total da sessão (meta entre 30 e 40 minutos).

Os resultados do teste-piloto servirão exclusivamente para ajustes do artefato e do roteiro, sendo relatados em seção própria e descartados da análise final de desempenho.

### Agenda proposta para a Etapa 7

A Tabela 5 organiza o cronograma planejado para a execução da avaliação e elaboração do relato, em consonância com os marcos da Etapa 7 do plano de ensino [1].

| Atividade | Data / Horário propostos | Local / Ambiente | Responsável |
| --- | :---: | :---: | --- |
| Ajuste fino do protótipo navegável AF-1.0 | 05/11/2026, 19h–21h | Local / VS Code | Heitor Pinheiro |
| Recrutamento e agendamento dos participantes | 06–07/11/2026 | Remoto | Heitor Pinheiro |
| Realização do Teste-Piloto (`PP-AF-H01`) | 08/11/2026, 16h–17h | Google Meet / FCTE | Equipe de avaliação |
| Ajustes no protótipo e nas fichas pós-piloto | 09/11/2026, 14h–16h | Local | Heitor Pinheiro |
| Sessões principais de teste (`AF-H01` a `AF-H03`) | 10–11/11/2026, 14h–18h | Google Meet / FCTE | Heitor e observador |
| Tabulação das medidas e compilação dos dados | 12/11/2026, 19h–22h | Local | Heitor Pinheiro |
| Redação do Relato da Avaliação de Alta Fidelidade | 13–14/11/2026 | Local / MkDocs | Heitor Pinheiro |
| Revisão por pares técnica | 14/11/2026, até 22h | Remoto | Bruno Ferreira |
| **Entrega formal da Etapa 7 no repositório** | **15/11/2026, até 23h59** | Repositório oficial | Heitor Pinheiro |
| Inspeção e apresentação da Etapa 7 | 16/11 e 17/11/2026 | FCTE/UnB | Grupo 06 |

<p class="caption">Tabela 5 — Agenda proposta para o teste de alta fidelidade e entrega da Etapa 7.</p>
<p class="source">Fonte: elaboração do autor (2026), baseada no cronograma do Plano de Ensino da disciplina.</p>

### Recursos e orçamento
- **Equipamentos:** computadores portáteis com conexão estável à internet, navegadores web modernos (Chrome, Firefox ou Edge), microfone e fone de ouvido;
- **Plataforma de software:** protótipo estático HTML/CSS/JS hospedado localmente no repositório MkDocs e sala virtual Google Meet;
- **Orçamento financeiro:** **R$ 0,00** (utilização exclusiva de infraestrutura própria dos estudantes e softwares livres/acadêmicos).

---

## D — Decidir como lidar com as questões éticas

O teste de usabilidade segue rigorosamente os princípios da Resolução CNS nº 510/2016 e as diretrizes do documento de [Aspectos Éticos do projeto](../../../entrega-2/etica.md):
- **Termo de Consentimento Livre e Esclarecido (TCLE):** lido e assinado previamente por cada participante, detalhando objetivos, procedimentos, duração aproximada, garantia de ausência de riscos físicos e o direito irrevogável de interromper ou desistir da participação a qualquer instante sem qualquer prejuízo ou necessidade de justificativa;
- **Autorização de gravação:** consentimento formal explícito colhido antes de acionar a gravação de áudio e tela. Os vídeos serão mantidos como **Não Listados** no YouTube e acessíveis unicamente para fins de avaliação docente na disciplina;
- **Anonimato e proteção de dados:** os voluntários serão identificados apenas pelos códigos `AF-H01`, `AF-H02` e `AF-H03`. Nomes, contatos e arquivos de consentimento serão guardados em armazenamento privado fora do repositório público;
- **Avaliação do sistema:** será enfatizado oralmente que o objeto de teste é a interface e não a competência ou inteligência da pessoa usuária;
- **Dados simulados:** nenhuma informação pessoal real (CPF, senhas de banco ou contas gov.br reais) será manuseada.

---

## E — Avaliar, interpretar e apresentar os dados

### Medidas e metas de usabilidade definidas antes da coleta
A Tabela 6 sintetiza os indicadores quantitativos que serão extraídos das sessões, articulados às metas definidas na Etapa 3.

| Meta de usabilidade | Indicador mensurado | Faixa inaceitável | Faixa aceitável | Faixa ideal |
| --- | --- | :---: | :---: | :---: |
| **M0 — Eficácia** | Taxa de conclusão correta das tarefas sem intervenção do moderador | Abaixo de 80% | 80% a 99% | 100% |
| **M2 — Prevenção de erro** | Número de submissões críticas de perguntas enviadas por engano como comentários comuns | 1 ou mais envios incorretos | 0 envios incorretos, com hesitação corrigida antes do envio | 0 envios incorretos e 0 tentativas |
| **M3 — Recuperação** | Sucesso no retorno da autenticação gov.br e reversão de destinatário incorreto em AF-T3 | Menos de 80% de recuperação | 80% a 99% de recuperação autônoma | 100% de recuperação autônoma |
| **M5 — Eficiência** | Tempo ativo medido na conclusão autônoma do percurso de envio (AF-T1 a AF-T4) | Superior a 180 s (3 min) | 120 s a 180 s | Inferior a 120 s (2 min) |
| **M6 — Satisfação** | Resposta pós-teste à pergunta *"Quão satisfeito(a) você ficou com a realização desta tarefa?"* (escala Likert de 1 a 5) | Média inferior a 3,5 | Média de 3,5 a 4,4 | Média de 4,5 a 5,0 |

<p class="caption">Tabela 6 — Indicadores e faixas de aceitação para o teste de usabilidade.</p>
<p class="source">Fonte: adaptado de Barbosa e Silva (2010, p. 105–106) e das Metas de Usabilidade da Etapa 3.</p>

*Nota sobre metas não avaliadas:* as metas M1 (aprendizado em tentativas repetidas) e M4 (recordação após 7 dias) não integram este protocolo por demandarem sessões longitudinais independentes não previstas no escopo temporal da etapa.

### Procedimento de registro e critérios de severidade
Durante a execução, o observador preencherá a ficha por tarefa, cronometrando o tempo ativo (descontando eventuais problemas de conexão ou pausas técnicas) e registrando intervenções. Os problemas encontrados serão classificados conforme a severidade estabelecida no [planejamento do relato](planejamento-relato-alta-fidelidade.md):
- **Alta:** impede a realização do objetivo ou gera submissão de pergunta sem destinatário;
- **Média:** ocasiona atraso significativo ou necessidade de orientação neutra para prosseguir;
- **Baixa:** atrito estético, hesitação momentânea ou comentário cosmético sobre o layout.

---

## Agradecimentos

O Antigravity e o Google Gemini apoiaram na estruturação das tabelas de métricas, na formatação Markdown e na revisão da coerência metodológica com o framework DECIDE. A formulação técnica das tarefas e a responsabilidade pelo planejamento são de Heitor Pinheiro Gonçalves das Chagas. Revisor técnico: [Bruno Ferreira Dornelas](https://github.com/brunnf).

## Histórico de versão

A Tabela 7 registra o histórico deste documento.

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `0.1` | 03/11/2026 | Elaboração inicial do planejamento da avaliação de alta fidelidade pelo framework DECIDE | [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |

<p class="caption">Tabela 7 — Histórico de versão.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Referências

[1] SALES, André Barros de. *Plano de Ensino FIHC 022026 — Turma 01*, v1. FCTE/UnB, 2026. Cronograma da Etapa 7, p. 5 do PDF.

[2] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. p. 105–106, 312–313, 341–343.

[3] BRASIL. Conselho Nacional de Saúde. *Resolução nº 510, de 7 de abril de 2016*. Brasília: CNS, 2016.

[4] GRUPO 06. [Metas de Usabilidade](../../../entrega-3/metas-usabilidade.md) e [Relato da avaliação do protótipo de papel](relato-prototipo-papel.md). 2026.

---

## Apêndice A — Fundamentação bibliográfica

As Figuras 1 a 3 apresentam as páginas do livro-texto de referência que fundamentam o método de teste de usabilidade, o framework DECIDE e o teste-piloto.

??? note "Figura 1 — Planejamento e condução de testes de usabilidade (Barbosa e Silva, 2010, p. 342)"

    ![Página 342: preparação e coleta de dados em teste de usabilidade.](../../../assets/img/entrega-6/referencias/barbosa-p342.png){ loading=lazy }
    <p class="caption">Figura 1 — Preparação e condução de teste de usabilidade.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 342).</p>

??? note "Figura 2 — Atividades do framework DECIDE (Barbosa e Silva, 2010, p. 313)"

    ![Página 313: síntese das atividades do framework DECIDE.](../../../assets/img/entrega-6/referencias/barbosa-p313.png){ loading=lazy }
    <p class="caption">Figura 2 — Atividades do framework DECIDE.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 313).</p>

??? note "Figura 3 — Realização e papel do teste-piloto (Barbosa e Silva, 2010, p. 307)"

    ![Página 307: diretrizes para condução do teste-piloto.](../../../assets/img/entrega-6/referencias/barbosa-p307.png){ loading=lazy }
    <p class="caption">Figura 3 — Diretrizes para teste-piloto.</p>
    <p class="source">Fonte: Barbosa e Silva (2010, p. 307).</p>

