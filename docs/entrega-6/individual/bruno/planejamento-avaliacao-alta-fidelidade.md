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

O **DECIDE** estrutura o planejamento (BARBOSA; SILVA, 2010, p. 312–313 [1]). Os objetivos e perguntas vêm da seção 9.2 e Tabela 9.1 (p. 290–293). O teste formativo adota Krug: rodada pequena para encontrar e corrigir problemas [4], facilitador, observadores e roteiro [5–7]. Local, equipe, tarefas legislativas, indicadores e agenda são escolhas do projeto. O piloto complementa o teste com base em Barbosa e Silva.

## D — Determinar os objetivos

Dos quatro aspectos apresentados por Barbosa e Silva (2010, p. 290–293 [1]), selecionamos **dois**: avaliar ideias de design e identificar problemas de interação. Eles correspondem à necessidade desta etapa: verificar as decisões tomadas após o papel e encontrar dificuldades na versão navegável. Não é necessário cobrir as quatro categorias em uma única avaliação.

- **AF-O1 — Avaliar ideias e alternativas de design:** verificar as decisões `PP-A01`–`PP-A04` sobre autoria, comparação de textos, espera e contadores, confrontando achados com evidências históricas do papel. É uma comparação formativa documental, sem teste A/B ou inferência causal de superioridade.
- **AF-O2 — Identificar problemas na interação e na interface:** localizar barreiras na busca, redação, revisão, decisão sobre ajustes e acompanhamento; identificar causas prováveis, impacto, recorrência e melhorias.

O público-alvo são cidadãos adultos interessados em participação legislativa digital, com referência na persona [Letícia Oliveira](../../../entrega-2/individual/heitor/persona.md). Os três participantes avaliarão o mesmo recorte e as mesmas quatro tarefas. Outros serviços, adoção longitudinal e comparação cronometrada com o portal oficial ficam fora do escopo (p. 304 [1]).

## E — Explorar as perguntas

A Tabela 2 relaciona as perguntas de avaliação (`AF-Q1` a `AF-Q7`) aos objetivos, às origens no [relato do papel](relato-prototipo-papel.md) e às evidências que serão coletadas.

| ID | Pergunta de avaliação | Objetivo e origem | Evidência e dados para responder |
| --- | --- | --- | --- |
| **AF-Q1** | A pessoa localiza a ideia pertinente nos resultados, abre seus detalhes e escolhe complementar sem orientação antecipada no enunciado? | `AF-O2`; `PP-Q1`, `PP-C01` | Percurso em `AF-T1`, cliques, conclusão sem ajuda e justificativa |
| **AF-Q2** | Consegue preencher, revisar na prévia e confirmar o envio do complemento, reconhecendo o estado de espera pelo autor e o aviso de notificação por e-mail? | `AF-O1`, `AF-O2`; `PP-A03` | Ações em `AF-T2`, revisão antes do envio e explicação espontânea da tela `AF-X01a` |
| **AF-Q3** | Compara os dois textos completos na tela de retorno do autor e justifica sua decisão (concordar ou não concordar) preservando sua intenção? | `AF-O1`, `AF-O2`; `PP-A02` | Leitura dos quadros em `AF-T3`, escolha entre concordar (`AF-X01b`) ou discordar (`AF-X02`) e justificativa |
| **AF-Q4** | Reconhece a autoria do seu próprio complemento publicado sem confundi-lo com complemento de terceiro e distingue os contadores de apoio (`12.343 / 20.000` vs. `40 apoios`)? | `AF-O1`, `AF-O2`; `PP-A01`, `PP-A04` | Ações e interpretação espontânea da tela `AF-S04` na primeira parte de `AF-T4` |
| **AF-Q5** | Distingue publicação de encaminhamento à CDH, localiza o complemento no `Anexo Consultivo #1` e compreende que o envio para análise não equivale a lei aprovada? | `AF-O1`, `AF-O2`; `PP-A04`, `PP-Q6` | Interpretação espontânea da tela `AF-S05` na segunda parte de `AF-T4`, antes de qualquer explicação do moderador |
| **AF-Q6** | Quais dificuldades de interação, hesitações e níveis de satisfação (`M6`) permanecem no protótipo de alta fidelidade? | `AF-O2`; todas as tarefas | Erros, pedidos de ajuda, falas espontâneas e nota `M6` (`1` a `5`) na entrevista final, por tarefa |
| **AF-Q7** | As soluções de autoria, comparação de textos e estados evidenciam como participar? Quais problemas do papel reaparecem ou deixam de ser observados? | `AF-O1`; diferenciais e alternativas de design (Tabela 9.1); `PP-A01`–`PP-A04` | `AF-T2–AF-T4` e matriz histórica problema → alteração → evidência atual; ausência de ocorrência não prova eliminação |

<p class="caption">Tabela 2 — Perguntas de avaliação da alta fidelidade.</p>
<p class="source">Fonte: elaboração do projeto (2026), com base em Barbosa e Silva (2010, Tabela 9.1, p. 293 [1]).</p>

**Origem das perguntas:** `AF-Q1–AF-Q6` adaptam a Tabela 9.1 sobre operar o sistema, atingir objetivos, erros, satisfação, significado dos elementos e próxima ação. `AF-Q7` adapta a pergunta sobre evidenciar os diferenciais da solução, aplicando-a às decisões de reprojeto. São perguntas analíticas para a equipe, não um questionário a ser lido durante a navegação.

## C — Escolher os métodos

Será aplicado um **teste de usabilidade moderado, preferencialmente presencial**, qualitativo e formativo, fundamentado em Krug [4–7]. A pessoa controla o navegador; contagens e tempos apoiam o diagnóstico, sem estimativa populacional.

### Fundamentação das decisões e papéis

- **Participantes:** Krug (2000, cap. 9, p. 146 [4]) recomenda três, no máximo quatro, por rodada, para encontrar problemas relevantes, corrigi-los e voltar a testar. Não se somam testes de outros recortes.
- **Facilitador/moderador:** o roteiro de Krug [5] fundamenta a condução da sessão. **Bruno** também lê os enunciados (“locutor”); não há exigência de duas pessoas para essas funções.
- **Observadores:** Krug [6] orienta anotar dificuldades, selecionar três problemas sérios por sessão e discuti-los depois. **Luís Henrique** é o observador proposto; Caio e Israel poderão acompanhar. Ao menos um observador é uma decisão operacional local, não um mínimo prescrito por Krug.
- **Registro:** [5] fundamenta verbalização, gravação autorizada e perguntas dos observadores ao final. No presencial, observadores acompanham preferencialmente a transmissão de tela em outro ambiente; se não houver essa estrutura, ficam discretamente afastados, em silêncio, sem cercar ou instruir a pessoa. Essa disposição na mesma sala é adaptação local. Encaminham dúvidas ao facilitador ao final. O observador principal registra tarefa, versão, horário e intervenção.
- **Consolidação:** discutir problemas e decidir correções segue [6–7]. A escala alta/média/baixa e as fichas são instrumentos locais.

### Verificação das decisões de design

Para `AF-O1`, confrontar o relato e as fotografias do papel com a nova coleta, sem solicitar preferência entre versões não apresentadas. A avaliação de ideias pode ser não comparativa (BARBOSA; SILVA, p. 291 [1]); aqui a experiência atual é o dado principal e o histórico informa quais problemas motivaram cada decisão. Não atribuir diferenças exclusivamente ao reprojeto.

## I — Identificar e administrar questões práticas

### Ambiente e modalidade

**Preferência presencial:** sala silenciosa na FCTE/UnB ou outro local reservado, a confirmar no agendamento. Participante e facilitador compartilham a mesa, com o participante operando o computador. Reservar tela legível, energia, navegador, captura local de tela/áudio e fichas. Não é necessário laboratório especializado. Registrar local e condições efetivamente utilizados.

**Alternativa remota:** somente se houver impedimento para o encontro presencial, usar Google Meet com compartilhamento de tela e áudio, verificar captura disponível e manter observadores silenciosos. Registrar a modalidade por participante e as limitações de comparar sessões com contextos diferentes.

### Perfil, recrutamento e quantidade de participantes

- **Amostra principal:** **3 pessoas distintas (`AF-P01`, `AF-P02`, `AF-P03`)**, em sessões individuais. Krug [4, p. 146] fundamenta a rodada formativa pequena; não há garantia de saturação ou porcentagem de problemas encontrados.
- **Piloto:** uma quarta pessoa (`PP-AF01`), distinta da amostra principal, conforme Barbosa e Silva (p. 307–308 [1]).
- **Recrutamento:** convite voluntário por contatos acadêmicos/comunitários a adultos interessados em participação pública digital. Registrar familiaridade digital, experiência no tema e participação anterior. Evitar quem construiu o protótipo. Conveniência e aprendizado prévio são limitações. Esses critérios são a aplicação local do público-alvo.
- **Abrangência:** todos executam `AF-T1–AF-T4`; não há divisão em subgrupos. Usar computador com navegador, teclado e mouse; celular não integra esta rodada, salvo mudança documentada após o piloto.
- **Preparação:** congelar URL/commit, preparar dados fictícios, cartões, fichas, TCLE e gravador de tela/áudio disponível à equipe. Validar captura local de tela e áudio no piloto. Reiniciar estados entre sessões.
- **Recursos:** R$ 0,00 de orçamento adicional, recursos próprios e participação voluntária. Pausar cronômetro em falhas técnicas e reagendar se impedirem observar a interação. Equipe e horários são propostas sujeitas à confirmação.

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

[Roteiro de aplicação presencial: falas, cartões e ficha do observador](roteiro-teste-presencial.md).

A sequência de Krug [5] inclui abertura, caracterização, primeira impressão, tarefas, perguntas finais e encerramento. Ler instruções consistentes, pedir pensamento em voz alta, explicar que o site é avaliado e permitir pausas. Começar em página neutra, apresentar um cenário por vez e não ensinar caminhos. Encerrar tentativas sem informação nova ou com frustração. Retomar dúvidas e perguntas dos observadores ao final.

**Aplicação ao recorte — até 50 minutos por pessoa**, com 10 minutos entre sessões (duração de referência em [6]; distribuição local):

1. **Abertura e consentimento (5 min):** confirmar autorização, papéis e limites de uso da gravação.
2. **Caracterização (5 min):** registrar experiência digital, familiaridade com participação legislativa e exposição anterior ao protótipo.
3. **Primeira impressão (3 min):** abrir `AF-S01a` e registrar o que entende que pode fazer.
4. **Tarefas (25 min):** aplicar a Tabela 3; manter busca habilitada porque integra `AF-T1`, adaptando a restrição de busca do roteiro original [5]. Registrar ação espontânea antes de perguntar sobre compreensão.
5. **Entrevista final (10 min):** retomar a compreensão das decisões de design (`AF-Q7`) e dificuldades (`AF-Q1–AF-Q6`); colher M6 por tarefa com justificativa. A escala é do projeto, não um instrumento padronizado de Krug.
6. **Encerramento (2 min):** esclarecer dúvidas e agradecer.

**Regras locais:** entregar apenas o enunciado, sem critérios de sucesso. Solicitar verbalização quando houver silêncio, sem indicar a solução. Registrar toda ajuda. Se uma tarefa impedir a seguinte, registrar o insucesso e preparar o próximo estado, anotando a intervenção. Discordar em `AF-T3` é válido; em `AF-T4`, apresentar explicitamente um cenário independente de publicação, sem supor que discordância produziu publicação. No segundo momento de `AF-T4`, informar apenas passagem de tempo, sem antecipar o significado da CDH.

**Piloto (`PP-AF01`):** executar o protocolo completo com pessoa não envolvida na preparação. Verificar estados, cartões, captura, duração e suficiência dos registros para responder às perguntas; corrigir e fixar versão. Analisar brevemente os dados, mas mantê-los fora dos resultados principais (BARBOSA; SILVA, p. 307–308 [1]).

**Entre sessões e após a rodada:** usar o intervalo para notas, seleção de três problemas sérios por observador e reinício. Após a terceira sessão, discutir e escolher correções com evidências, seguindo [6]. Reservar 30 minutos para essa reunião é estimativa local. Manter a mesma versão durante a rodada; se defeito bloqueador exigir alteração, separar resultados por versão.

### Cronograma e agenda proposta até a Etapa 7

A Tabela 4 define a agenda prevista para construção, piloto, coleta e redação do relato da Etapa 7 (entrega em **15/11/2026**).

| Atividade | Data e horário propostos | Responsável |
| --- | --- | --- |
| Implementar o protótipo de alta fidelidade `AF-1.0` incorporando `PP-A01` a `PP-A04` | `05/11` a `07/11/2026`, `19h–21h` | Bruno Ferreira Dornelas |
| Confirmar participante do piloto (`PP-AF01`), três participantes principais (`AF-P01–AF-P03`) e observadores | Piloto: antes do ensaio de `09/11`; principais: até `10/11/2026`, `18h` | Bruno e Luís Henrique |
| Realizar o teste-piloto preferencialmente presencial (`PP-AF01`) | `09/11/2026`, `19h–19h50` | Bruno, observador e `PP-AF01` |
| Ajustar o protótipo (`AF-1.1`, se necessário) e congelar versão para o teste | `10/11/2026`, `19h–20h` | Bruno Ferreira Dornelas |
| Conduzir três sessões individuais (`AF-P01`, `AF-P02`, `AF-P03`) | `11/11/2026`, `18h–18h50`, `19h–19h50` e `20h–20h50` | Bruno, observadores e um participante por sessão |
| Discutir problemas prioritários e ações de correção | `11/11/2026`, `21h–21h30` | Bruno e observadores |
| Transcrever gravação, analisar métricas e redigir o relato da avaliação de alta fidelidade | `12/11` e `13/11/2026`, `19h–21h` | Bruno e observadores |
| Revisão cruzada do relato e gravação da apresentação da Etapa 7 | `14/11/2026`, `14h–18h` (entrega em `15/11`) | Luís Henrique (revisão) e Bruno |

<p class="caption">Tabela 4 — Agenda proposta para a avaliação de alta fidelidade (Etapa 7).</p>
<p class="source">Fonte: planejamento do projeto (2026).</p>

## D — Decidir como lidar com questões éticas

O teste seguirá o [protocolo ético do Grupo 06](../../../entrega-2/etica.md) e as diretrizes de Barbosa e Silva (2010, p. 138–142, 313 [1]):
- **Consentimento livre e esclarecido (TCLE):** obtenção de aceite prévio específico para participação voluntária, gravação de áudio e captura da tela do protótipo, além de divulgação acadêmica por link não listado no YouTube.
- **Anonimato e privacidade:** identificação exclusiva pelos códigos **`PP-AF01`** (piloto) e **`AF-P01`, `AF-P02`, `AF-P03`** (participantes principais), sem exibição de rosto, nome completo, CPF, e-mail real ou abas pessoais do navegador da pessoa (orientar abertura do protótipo em janela limpa/anônima antes de iniciar a gravação).
- **Guarda e descarte:** o termo assinado e a chave de identificação permanecerão restritos aos avaliadores fora do repositório público, com exclusão dos arquivos brutos em até 30 dias após o encerramento do semestre letivo. A pessoa poderá pausar, recusar perguntas ou encerrar a sessão a qualquer momento sem prejuízo.

## E — Avaliar, interpretar e apresentar os dados

As execuções de `AF-T1` a `AF-T4` serão analisadas combinando medidas de desempenho e evidências qualitativas, vinculadas às [metas de usabilidade definidas na Etapa 3](../../../entrega-3/metas-usabilidade.md), conforme a Tabela 5.

| Meta / indicador | Definição operacional e medida nesta avaliação | Critério de interpretação e limite |
| --- | --- | --- |
| **M0 — Eficácia (conclusão correta)** | Classificação de cada tarefa (`AF-T1` a `AF-T4`) em: `Concluída sem ajuda`, `Concluída com ajuda`, `Não concluída` ou `Não avaliada`, acompanhada do tempo ativo de execução (em segundos). | Reportar contagem absoluta (ex.: `3/4` tarefas concluídas sem ajuda por `AF-P01`), acrescentando contagem por tarefa (ex.: 2/3 participantes), sem extrapolar para o público. |
| **M2 — Prevenção de erro e compreensão de autoria/estados** | Número de cliques equivocados (como tentar apoiar o próprio complemento por confusão de autoria em `AF-S04`, `PP-A01`, ou enviar sem revisar) e verificação da leitura correta dos contadores e do anexo em `AF-S05`. | Desejado: `0` ocorrências de confusão sobre autoria do próprio complemento em `AF-S04` e reconhecimento espontâneo do Anexo Consultivo em `AF-S05`. |
| **M6 — Satisfação subjetiva por tarefa** | Nota de `1` (*muito insatisfeito*) a `5` (*muito satisfeito*) informada por cada participante na entrevista final, retomando cada tarefa, acompanhada de justificativa verbal. | Relatar a nota individual e a justificativa associada à tela correspondente; não calcular média populacional. |
| **M1, M3, M4 e M5** | Aprendizado entre sessões repetidas (`M1`), recuperação de falha técnica induzida (`M3`), recordação após 7 dias (`M4`) e comparação cronometrada com o portal oficial (`M5`). | **Não avaliadas** neste protocolo, pois a funcionalidade de complementos é inédita no portal e a coleta ocorre em sessão única. |

<p class="caption">Tabela 5 — Medidas e metas de usabilidade aplicáveis ao teste de alta fidelidade.</p>
<p class="source">Fonte: adaptação das metas da Etapa 3 ao recorte de complementos (2026).</p>

**Regras de interpretação e priorização:**
- Após cada sessão, cada observador seleciona três problemas prioritários; ao fim da rodada, reunir e discutir as listas conforme Krug [6]. Vincular a decisão de correção à tarefa, participante e evidência.
- Responder `AF-Q1–AF-Q7`, distinguindo teste, entrevista e comparação histórica. Para cada tarefa, informar participantes efetivamente expostos; não usar três como denominador quando alguém não a executou.
- Relacionar `PP-A01–PP-A04` em matriz problema anterior → mudança → evidência nova → conclusão limitada.
- Separar rigorosamente o comportamento espontâneo da pessoa daquelas respostas obtidas após qualquer intervenção ou esclarecimento do moderador.
- Classificar os problemas observados em prioridade **alta** (impede conclusão da tarefa, compromete a preservação da intenção da proponente ou gera interpretação incorreta de autoria, apoios ou aprovação legislativa), **média** (provoca hesitação, retrabalho ou dúvida sanada na própria tela) ou **baixa** (ajuste cosmético ou de rotulagem complementar).
- Toda alteração realizada após a sessão sem novo teste com usuário permanecerá registrada como **“corrigida, não reavaliada”**. A estrutura detalhada das tabelas e fichas do relatório final encontra-se no [planejamento do relato de alta fidelidade](planejamento-relato-alta-fidelidade.md).

## Agradecimentos

O assistente Antigravity (Google DeepMind) apoiou a organização estrutural do DECIDE, o vínculo rastreável com os achados do protótipo de papel (`PP-A01` a `PP-A04`) e a revisão textual. A definição metodológica e a responsabilidade acadêmica pelo artefato são de Bruno Ferreira Dornelas, com revisão de Luís Henrique Arruda Luna.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `1.0` | 03/11/2026 | Elaboração do planejamento da avaliação do protótipo de alta fidelidade a partir dos achados `PP-A01`–`PP-A04` do relato em papel | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |
| `1.1` | 09/11/2026 | Três participantes com Krug; protocolo preferencialmente presencial; dois objetivos selecionados de Barbosa e Silva; sete perguntas e agenda revisadas | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Luís Henrique Arruda Luna](https://github.com/Donnk61) |

<p class="caption">Tabela 6 — Histórico de versão.</p>
<p class="source">Fonte: elaboração do projeto (2026).</p>

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação humano-computador**. Rio de Janeiro: Elsevier, 2010. Aspectos éticos, p. 138–142; Objetivos e perguntas, p. 290–293; planejamento, piloto e DECIDE, p. 304–313; Teste de usabilidade, p. 341–343.

[2] SALES, André Barros de. **Plano de Ensino FIHC 022026 — Turma 01**, v1. Brasília: FCTE/UnB, 2026. Cronograma das Etapas 6 e 7, p. 5 do PDF.

[3] GRUPO 06. [Relato da avaliação do protótipo de papel — Complementos de ideias legislativas](relato-prototipo-papel.md) e [Metas de usabilidade da Etapa 3](../../../entrega-3/metas-usabilidade.md). 2026.

[4] KRUG, Steve. **Don’t Make Me Think! A Common Sense Approach to Web Usability**. 1. ed. 2000. cap. 9, p. 146. Trecho disponibilizado pelo autor: [quantidade por rodada](https://sensible.com/downloads/DMMTchapter09_for_personal_use_only.pdf). Acesso em: 9 nov. 2026. A paginação refere-se à primeira edição em inglês.

[5] KRUG, Steve. **Usability test script — Web sites**. Reproduzido de *Rocket Surgery Made Easy*, 2010. p. 1–6 do roteiro. [Roteiro oficial](https://sensible.com/downloads/test-script-web.pdf). Acesso em: 9 nov. 2026.

[6] KRUG, Steve. **Instructions for Usability Test Observers**. Reproduzido de *Rocket Surgery Made Easy*, 2010. p. 1–2 do documento. [Instruções oficiais](https://sensible.com/downloads/instructions-for-observers.pdf). Acesso em: 9 nov. 2026.

[7] KRUG, Steve. **Rocket Surgery Made Easy: The Do-It-Yourself Guide to Finding and Fixing Usability Problems**. New Riders, 2010. Abertura, p. 6–8. [Trecho oficial](https://sensible.com/downloads/rsme-samplechapter.pdf). Acesso em: 9 nov. 2026.

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

