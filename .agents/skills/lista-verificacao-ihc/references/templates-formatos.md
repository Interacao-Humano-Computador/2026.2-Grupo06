# Templates e Formatos de Saída para Listas de Verificação de IHC

Esta referência documenta os **3 formatos oficiais** usados pelo Grupo 06 e por Bruno Ferreira Dornelas, garantindo conformidade simultânea com os contratos de `docs/guia/template-artefato.md`, `docs/guia/figuras-tabelas-referencias.md`, `docs/guia/autoria-revisao-versoes.md` e com o modelo individual em PDF da pasta `contexto/`.

---

## Dados Fixos de Autoria e Equipe (Grupo 06 — FCTE/UnB 2026.2)

- **Autor padrão dos itens:** `[Bruno Ferreira Dornelas](https://github.com/brunnf)` (Matrícula: `242015138`)
- **Disciplina:** Interação Humano-Computador — FCTE/FGA · Universidade de Brasília (UnB)
- **Professor:** André Barros de Sales
- **Demais integrantes do Grupo 06 (para coluna `Revisor(es)` — nunca repetir o próprio autor como revisor!):**
  - `[Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev)`
  - `[Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01)`
  - `[Israel Soares de Paiva](https://github.com/IsraelSoares-25)`
  - `[Luís Henrique Marques](https://github.com/luishenriquemarques)`

---

## Formato A1 — MkDocs Lista Recolhida (`??? question`) — Padrão Preferencial para Listas Novas no Site

Usado em `docs/verificacao/listas/etapa-*.md` e `docs/entrega-8/lista-etapa-*.md`. Mantém a página escaneável mesmo com dezenas de recortes de livro, pois cada item recolhe sua fundamentação e figura dentro de `??? question`.

```markdown
<span class="owner">Responsável: Bruno Ferreira Dornelas · Autor dos itens: Bruno Ferreira Dornelas</span>

# Lista de verificação — [Tema ou Etapa X]

## Tabela de contribuição

A Tabela 1 registra quem atuou neste artefato.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Elaboração dos itens autocontidos, recortes destacados da literatura e critérios de inspeção | [Itens de verificação](#itens-de-verificacao) |
| [Nome da ferramenta de IA, se aplicável] | Apoio na formatação Markdown e revisão ortográfica | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuição neste artefato.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026).</p>

## Introdução

Esta página reúne a lista de verificação de **[Tema / Etapa]**, composta por **N itens autocontidos** fundamentados na bibliografia da disciplina. Cada enunciado explicita integralmente os elementos exigidos para que qualquer avaliador julgue **Sim**, **Não** ou **Incompleto** sem precisar recorrer ao livro-texto durante a inspeção.

## Itens de verificação

### 1. [Subtema ou Categoria]

??? question "ID-01 — [Pergunta 100% autocontida, enumerando (1)...(n) e definindo termos técnicos no próprio enunciado]?"

    **Autor do item:** [Bruno Ferreira Dornelas](https://github.com/brunnf)

    **Referência:** BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. Cap. X, Seção X.Y, p. NNN.

    **Trecho destacado em amarelo:** *"[Transcrição fiel do trecho marcado na página]"* (BARBOSA; SILVA, 2010, p. NNN). A Figura 1 apresenta o recorte da página original com o trecho destacado.

    **Como verificar:**

    - **Sim:** o artefato apresenta explicitamente todos os elementos exigidos no enunciado (`(1)...(n)`).
    - **Incompleto:** o artefato aborda o tópico parcialmente, omitindo um ou mais subitens obrigatórios ou sem justificativa técnica.
    - **Não:** o artefato não contempla o item avaliado.

    <figure markdown="span">
      ![Página NNN do livro Interação Humano-Computador de Barbosa e Silva com marcação amarela sobre o parágrafo que define o critério avaliado.](../../assets/img/referencias/id01_tema.png)
      <figcaption>Figura 1 — Fundamentação do item ID-01 em Barbosa e Silva (2010, p. NNN).</figcaption>
    </figure>
    <p class="source">Fonte: BARBOSA; SILVA (2010, p. NNN).</p>

## Agradecimentos

O [nome exato da ferramenta, se aplicável] apoiou a organização e a formatação Markdown desta lista. A responsabilidade técnica pela seleção dos trechos, redação dos critérios e revisão das referências é do autor.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `1.0` | DD/MM/2026 | Criação da lista de verificação com itens autocontidos e recortes destacados | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Nome do Revisor](https://github.com/usuario) |

<p class="caption">Tabela 2 — Histórico de versão.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026).</p>

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010.

[2] SALES, André Barros de. *Plano de Ensino FIHC 022026 — Turma 01*. Brasília: FCTE/UnB, 2026.
```

> **Regras cruciais do MkDocs neste repositório (`docs/guia/figuras-tabelas-referencias.md`):**
> 1. Toda `<figure markdown="span">` dentro de `??? question` precisa estar **indentada com 4 espaços**!
> 2. O texto do atributo `alt` (`![...]`) **não pode ser igual** ao texto de `<figcaption>`. O `alt` descreve visualmente a imagem para leitores de tela; o `<figcaption>` titula e numera (`Figura 1 — ...`).
> 3. Sempre chame a figura no texto imediatamente antes (`"A Figura 1 apresenta..."`).
> 4. Numeração de figuras (`Figura 1`, `Figura 2`, ...) e tabelas (`Tabela 1`, `Tabela 2`, ...) é **única e contínua** em toda a página.

---

## Formato A2 — MkDocs Seções Abertas + Tabela de Inspeção (`docs/verificacao/grupo-06/etapa-*/`)

Usado quando a página combina a **definição dos itens** com o **resultado de autoverificação/inspeção** na mesma página:

```markdown
### Item 01 — [Título curto do critério]

- **Autor do item:** [Bruno Ferreira Dornelas](https://github.com/brunnf)
- **Pergunta de verificação:** [Pergunta autocontida completa terminando em interrogação?]
- **Critério de avaliação:** **Sim** quando [...]; **Incompleto** quando [...]; **Não** quando [...].
- **Fundamentação teórica:** Segundo Barbosa e Silva (2010, p. NNN), *"[citação curta ou síntese fiel]"*. A Figura 1 exibe a página original com o trecho destacado em amarelo.

<figure markdown="span">
  ![Recorte da página NNN de Barbosa e Silva com destaque amarelo sobre a definição do critério.](../../../assets/img/referencias/item01_etapaX.png)
  <figcaption>Figura 1 — Trecho de referência para o Item 01.</figcaption>
</figure>
<p class="source">Fonte: BARBOSA; SILVA (2010, p. NNN).</p>
```

*(Observação: se os itens estiverem abertos fora de blocos recolhidos `???` e houver 3 ou mais capturas na mesma página, agrupe as figuras em bloco `??? note "Figura N — ..."` ou no `## Apêndice A`, conforme a regra de `docs/guia/figuras-tabelas-referencias.md`.)*

---

## Formato B — Lista de Verificação Autônoma em PDF (`exportar_lista_pdf.py`)

Usado quando o usuário pedir um **arquivo PDF individual/autônomo** nos moldes dos PDFs da pasta `contexto/` (cabeçalho UnB/FGA, caixa de metadados, opções `( ) Conforme  ( ) Não Conforme  ( ) Não se Aplica`, **`Autor do item: Bruno Ferreira Dornelas`** explícito em cada item, citação ABNT e recorte destacado da página do livro).

Crie um arquivo JSON UTF-8 seguindo este esquema e passe para `./scripts/exportar_lista_pdf.py`:

```json
{
  "universidade": "Universidade de Brasília — UnB · Faculdade de Ciências e Tecnologias em Engenharia (FCTE/FGA)",
  "disciplina": "Interação Humano-Computador",
  "professor": "André Barros de Sales",
  "grupo": "06",
  "autor_padrao": "Bruno Ferreira Dornelas",
  "matricula": "242015138",
  "titulo": "LISTA DE VERIFICAÇÃO — ANÁLISE HIERÁRQUICA DE TAREFAS (HTA)",
  "opcoes_resposta": "(   ) Conforme      (   ) Não Conforme      (   ) Não se Aplica",
  "instrucoes": "Instruções: Avalie cada item de maneira independente apenas pelo seu enunciado autocontido, assinalando Conforme, Não Conforme ou Não se Aplica.",
  "itens": [
    {
      "secao": "Seção 1 — Decomposição de Objetivos e Planos",
      "id": "Item 01",
      "titulo": "Decomposição de objetivos de alto nível em subobjetivos",
      "autor": "Bruno Ferreira Dornelas",
      "pergunta": "O diagrama e/ou tabela HTA parte de um objetivo de alto nível claramente formulado no nível 0 (o que o usuário deseja alcançar, e não apenas cliques de interface) e o decompõe em subobjetivos menores identificando quais etapas são mais críticas ou propensas a erros?",
      "como_verificar": "Conforme se houver objetivo 0 explícito decomposto em subobjetivos coerentes; Não Conforme se listar apenas passos mecânicos sem objetivo de alto nível ou sem decomposição.",
      "referencia": "BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. Interação humano-computador. Rio de Janeiro: Elsevier, 2010. Cap. 6, Seção 6.4.1, p. 193.",
      "trecho_destacado": "A HTA examina primeiramente os objetivos de alto nível (por exemplo, marcar uma reunião), decompondo-os em subobjetivos...",
      "imagem": "./imagens/item01_hta.png",
      "legenda": "Figura 1 — Barbosa e Silva (2010, Cap. 6, p. 193): decomposição de objetivos de alto nível em subobjetivos na HTA."
    }
  ],
  "referencias_finais": [
    "BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. Interação humano-computador. Rio de Janeiro: Elsevier, 2010."
  ]
}
```

