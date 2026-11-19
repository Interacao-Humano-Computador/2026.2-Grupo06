# Exemplos Reais de Itens Autocontidos (Padrão Bruno Ferreira Dornelas)

O princípio central de toda lista de verificação gerada por esta skill é a **autocontenção total (*fácil compreensão*)**:

> **Teste de Ouro da Autocontenção:**
> *Se um inspetor abrir apenas o artefato avaliado e ler unicamente a pergunta do item, ele consegue responder com certeza absoluta (`Sim / Não / Incompleto` ou `Conforme / Não Conforme / Não se Aplica`) **sem precisar abrir o livro de IHC para descobrir quais são os subitens, símbolos, regras ou conceitos citados**?*
> - Se a resposta for **não**, o item está **errado** e precisa ser reescrito!

---

## As 5 Técnicas para Tornar Qualquer Item 100% Autocontido

1. **Enumeração explícita `(1)...(n)` dentro da pergunta:** Nunca escreva *"contém todos os elementos previstos por Barbosa e Silva"*. Liste explicitamente `(1) ...`, `(2) ...`, `(n) ...`.
2. **Definição embutida de termos técnicos (`— isto é, ...`):** Se o item mencionar *regra $P \times C$*, *persona servida*, *protótipo de baixa fidelidade*, *affordance* ou *protocolo think-aloud*, explique o significado em linguagem simples entre parênteses ou travessões no próprio enunciado.
3. **Tradução de símbolos e notações:** Em modelos formais (HTA, CTT, MoLIC), escreva o símbolo **e** seu significado lado a lado (ex.: `escolha []`, `paralelismo sem troca de informação |||`, `ativação com passagem de informação []>>`).
4. **Condicionalidade explícita para itens dependentes de método:** Quando um critério só vale para determinado método ou formato, inicie com *"Caso o artefato utilize [método X], ele registra [...]; caso contrário, assinalar Não se Aplica."*
5. ** Atomicidade (uma obrigação verificável por item):** Não misture dois assuntos desconexos na mesma pergunta (ex.: ética do TCLE + paleta tipográfica do guia de estilo). Se a resposta puder ser "sim para metade e não para outra metade" por misturar temas distintos, divida em dois itens.

---

## Comparações *Errado (Dependente do Livro)* vs. *Certo (Autocontido — Padrão Bruno)*

### Exemplo 1 — Personas (Barbosa & Silva, 2010, Cap. 6, p. 177–178)

- **ERRADO (obriga a consultar o livro):**
  > *As personas documentadas contêm todas as características recomendadas por Courage e Baxter em Barbosa e Silva (2010, p. 178)?*
  *(Por que falha: o avaliador não sabe de cor quais são as 7 características de Courage e Baxter.)*

- **CERTO (autocontido e fácil de compreender):**
  > **Item 04 — Elementos estruturais completos da persona**
  > Cada persona descrita no artefato apresenta de forma explícita os sete elementos de caracterização: **(1) identidade** (nome, sobrenome, idade e foto representativa), **(2) status** (papel da persona no projeto, como primária ou secundária), **(3) objetivos** (o que ela deseja alcançar de fato, além das tarefas mecânicas), **(4) habilidades e experiência** (familiaridade prática e com tecnologia), **(5) tarefas** (atividades críticas realizadas com frequência, importância e duração), **(6) relacionamentos** (com quem interage no contexto de uso) e **(7) requisitos e expectativas** (do que ela precisa e como espera que o sistema funcione)?
  > - **Autor do item:** Bruno Ferreira Dornelas
  > - **Fonte (ABNT):** BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. Cap. 6, Seção 6.2, p. 177–178.

---

### Exemplo 2 — Elenco de Personas (Barbosa & Silva, 2010, Cap. 6, p. 179–180)

- **ERRADO (jargão opaco):**
  > *O elenco classifica corretamente as personas em primária, secundária, suplementar, cliente, servida e negativa?*
  *(Por que falha: um avaliador pode confundir persona suplementar, servida e cliente sem a definição ao lado.)*

- **CERTO (definições embutidas no próprio enunciado):**
  > **Item 03 — Classificação fundamentada dos papéis no elenco de personas**
  > Ao classificar os integrantes do elenco de personas, o artefato emprega as categorias coerentes com a relação de cada perfil com o sistema — distinguindo claramente entre **primária** (foco principal do design da interface, cujas necessidades não são atendidas por uma interface feita para outra persona), **secundária** (usa a interface da primária, mas requer ajustes ou recursos específicos adicionais), **suplementar** (satisfeita integralmente pela combinação das interfaces já projetadas), **cliente** (quem adquire/contrata o sistema sem necessariamente operá-lo), **servida** (afetada indiretamente pelo sistema sem interagir diretamente com ele) e **negativa** (quem o sistema explicitamente não pretende atender)?
  > - **Autor do item:** Bruno Ferreira Dornelas
  > - **Fonte (ABNT):** BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. Cap. 6, Seção 6.2, p. 179–180.

---

### Exemplo 3 — Modelagem CTT (*ConcurTaskTrees*) (Barbosa & Silva, 2010, Cap. 6, p. 203–205)

- **ERRADO (exige decorar tabela de operadores):**
  > *Os operadores temporais da notação CTT foram aplicados corretamente entre as tarefas irmãs da árvore?*

- **CERTO (explicita símbolos e significados na própria pergunta):**
  > **Item 06 — Coerência semântica dos operadores temporais entre tarefas irmãs no CTT**
  > As relações temporais entre tarefas irmãs (da esquerda para a direita na árvore CTT) utilizam os operadores adequados ao fluxo real da atividade: **`T1 [] T2` (escolha exclusiva)**, **`T1 ||| T2` (execução concorrente independente)**, **`T1 |[]| T2` (concorrência com troca de informação)**, **`T1 [> T2` (desativação/interrupção definitiva de T1 por T2)**, **`T1 |> T2` (suspensão e retomada)**, **`T*` (iteração/repetição)**, **`[T]` (tarefa opcional)**, **`T1 >> T2` (ativação sequencial simples)** ou **`T1 []>> T2` (ativação sequencial passando dados de T1 para T2)**, sem omitir conectores entre tarefas do mesmo nível?
  > - **Autor do item:** Bruno Ferreira Dornelas
  > - **Fonte (ABNT):** BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. Cap. 6, Seção 6.4.3, Tabela 6.1, p. 204.

---

### Exemplo 4 — Storyboard (Vianna et al., 2012, p. 135; Preece, Rogers & Sharp, 2005, p. 263)

- **ERRADO (subjetivo e vago):**
  > *O storyboard foi construído seguindo boas práticas de prototipação de baixa fidelidade?*

- **CERTO (objetivo, visualmente verificável e direto):**
  > **Item 02 — Sequência narrativa em quadros mostrando progressão da tarefa em contexto**
  > O storyboard representa visualmente uma história encadeada por meio de uma série de quadros estáticos (desenhos, colagens, fotografias ou esboços), evidenciando **(1) o contexto/cenário inicial do usuário**, **(2) a progressão passo a passo da interação com o produto/solução proposta** e **(3) o desfecho da tarefa**, permitindo compreender a ideia sem depender de explicações externas?
  > - **Autor do item:** Bruno Ferreira Dornelas
  > - **Fonte (ABNT):** VIANNA, Maurício et al. *Design Thinking: inovação em negócios*. Rio de Janeiro: MJV Press, 2012. p. 135; PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. *Design de interação: além da interação homem-computador*. Porto Alegre: Bookman, 2005. Cap. 8, p. 263.

---

### Exemplo 5 — Planejamento de Avaliação pelo Framework DECIDE (Barbosa & Silva, 2010, Cap. 9, p. 312–313)

- **ERRADO (agrupa 6 dimensões num único item genérico):**
  > *O planejamento da avaliação segue o framework DECIDE?*

- **CERTO (desdobra cada letra ou explicita os pontos verificáveis de cada etapa):**
  > **Item 04 — Questões práticas e operacionais da avaliação (letra P / etapa prática do DECIDE)**
  > O planejamento da avaliação aborda explicitamente as questões práticas de execução antes das sessões: **(1) quantidade e perfil de recrutamento dos participantes/avaliadores**, **(2) cronograma e tempo estimado por sessão**, **(3) orçamento ou custos envolvidos (ainda que custo zero justificado)** e **(4) equipamentos, ambiente físico/remoto e materiais de apoio necessários (roteiros, gravadores, protótipo e termos)**?
  > - **Autor do item:** Bruno Ferreira Dornelas
  > - **Fonte (ABNT):** BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. Cap. 9, Seção 9.8, p. 312–313.

---

### Exemplo 6 — Teste-Piloto em Protótipo / Avaliação de Usabilidade (Barbosa & Silva, 2010, Cap. 9, p. 308–309; Cap. 10, p. 343)

- **CERTO (autocontido e operacional):**
  > **Item 11 — Planejamento e verificação do teste-piloto antes das sessões oficiais**
  > O documento prevê (no planejamento) ou comprova (no relato) a realização de um **teste-piloto** — isto é, uma sessão prévia completa de ensaio que não entra na contagem final de resultados — com a finalidade explícita de verificar se **(1) o roteiro de tarefas e perguntas é compreensível**, **(2) os equipamentos de gravação e o protótipo funcionam sem falhas impeditivas** e **(3) a duração estimada da sessão é realista**?
  > - **Autor do item:** Bruno Ferreira Dornelas
  > - **Fonte (ABNT):** BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. Cap. 9, Seção 9.7, p. 308–309.

