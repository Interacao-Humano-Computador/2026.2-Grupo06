<span class="owner">Responsável: Heitor Pinheiro Gonçalves das Chagas — Guia de estilo · Autor dos itens: Heitor Pinheiro Gonçalves das Chagas</span>

# Guia de estilo

## Tabela de contribuição

A Tabela 1 registra quem atuou neste artefato.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | Abertura inicial da página com o esqueleto do artefato | [Estrutura](guia-de-estilo.md#estrutura) |
| [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | Fundamentação bibliográfica dos itens 15 e 16, obtenção dos trechos do livro e estruturação do guia | [Itens de conteúdo](guia-de-estilo.md#itens-de-conteudo-da-disciplina) |

<p class="caption">Tabela 1 — Contribuição neste artefato.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026).</p>

## Introdução

Este documento apresenta o **Guia de Estilo** do Portal do Senado Federal, correspondente aos itens oficiais **15, 16 e 17** da Entrega 3 da disciplina de Interação Humano-Computador [1]. 

No modelo de ciclo de vida de Engenharia de Usabilidade proposto por Mayhew (1999), adotado pelo Grupo 06 em seu [Processo de Design](../entrega-1/processo-design.md), a fase de **Análise de Requisitos** tem como um de seus principais produtos a elaboração do guia de estilo. Esse documento sintetiza e operacionaliza as diretrizes, princípios de IHC e metas de usabilidade derivados da análise de tarefas, do perfil de usuário e das possibilidades e limitações técnicas da [plataforma](plataforma.md), garantindo que as decisões de design sejam mantidas e reflitam no produto final de forma consistente (BARBOSA; SILVA, 2010, p. 109–110, 282).

---

## Itens de conteúdo da disciplina

### O que é um Guia de Estilo (Item 15)

**Autor do item:** [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01)

Segundo Barbosa e Silva (2010, p. 282), é prática comum, sobretudo em projetos de grande escala, reunir os princípios e as diretrizes adotados em um documento formal intitulado **guia de estilo**. Esse documento atua como o registro central das principais decisões de design concebidas pela equipe, impedindo que se dispersem ao longo do ciclo de vida e assegurando que sejam fielmente incorporadas à interface final. 

Além disso, os autores destacam que os guias de estilo desempenham um papel fundamental como ferramenta de comunicação entre os designers de interação, desenvolvedores e mantenedores do sistema, permitindo que soluções consolidadas sejam consultadas e reaproveitadas em extensões e versões futuras. 

Conforme apontado por Mayhew (1999), um guia de estilo pode abranger quatro escopos: de *plataforma* (sistema operacional e hardware), *corporativo* (padronização entre produtos de uma mesma instituição), *família de produtos* ou de um *produto específico* — escopo este adotado neste projeto, focado nas particularidades do Portal do Senado Federal.

A Figura 1 reproduz o trecho da literatura (Seção 8.4, p. 282) que fundamenta a definição e a importância do guia de estilo.

??? note "Figura 1 — Definição e escopo de Guias de Estilo na literatura de IHC"

    <figure markdown="span">
      ![Trecho da seção 8.4 de Barbosa e Silva (2010, p. 282) explicando o conceito, objetivos e escopos de guias de estilo.](../assets/img/referencias/barbosa-guia-estilo-definicao-p282.png)
      <figcaption>Figura 1 — Definição e escopo de Guias de Estilo na literatura de IHC.</figcaption>
    </figure>
    <p class="source">Fonte: BARBOSA; SILVA (2010, p. 282), recorte do livro.</p>

---

### Estrutura do Guia de Estilo (Item 16)

**Autor do item:** [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01)

Para garantir abrangência e rigor técnico, Barbosa e Silva (2010, p. 283) sintetizam a estrutura clássica proposta por Marcus (1992) e Mayhew (1999) para a composição de guias de estilo. Essa estrutura organiza as decisões de design em seis seções fundamentais:

1. **Introdução:** define o objetivo do guia, sua organização interna, o público-alvo (programadores, gerentes, equipe de suporte), diretrizes de uso tanto na produção quanto na manutenção e procedimentos para mantê-lo atualizado;
2. **Resultados de análise:** registra a descrição do ambiente de trabalho do usuário (condições físicas, contextuais e técnicas de uso identificadas no perfil do usuário e na plataforma);
3. **Elementos de interface:** padroniza a disposição espacial e grid de tela, comportamento de janelas e modais, tipografia institucional, símbolos não tipográficos (ícones e marcas), paleta de cores e animações/transições;
4. **Elementos de interação:** especifica os estilos de interação suportados (menus, busca, links), a justificativa da seleção dos estilos predominantes e aceleradores (teclas de atalho e acessibilidade);
5. **Elementos de ação:** padroniza os mecanismos de preenchimento de campos em formulários, elementos de seleção (dropdowns, checkboxes, rádios) e mecanismos de ativação (botões e acionadores);
6. **Vocabulário e padrões:** estabelece a terminologia oficial e compreensível para os termos de domínio, os tipos de telas para as tarefas comuns e as sequências de diálogos (mensagens de confirmação, avisos de erro e feedback).

Adicionalmente, Mayhew (1999) recomenda explicitar o *design rationale* (a justificativa de cada decisão), assegurando o rastreamento direto entre os problemas levantados nas etapas anteriores e os elementos de interface projetados.

A Figura 2 ilustra o trecho da literatura (Seção 8.4, p. 283) que estabelece essa divisão estrutural.

??? note "Figura 2 — Estrutura de Guia de Estilo segundo Marcus (1992) e Mayhew (1999)"

    <figure markdown="span">
      ![Trecho de Barbosa e Silva (2010, p. 283) com a estrutura em 6 tópicos para guias de estilo.](../assets/img/referencias/barbosa-guia-estilo-estrutura-p283.png)
      <figcaption>Figura 2 — Estrutura de Guia de Estilo segundo Marcus (1992) e Mayhew (1999).</figcaption>
    </figure>
    <p class="source">Fonte: BARBOSA; SILVA (2010, p. 283), recorte do livro.</p>

---

## Estrutura

A seguir, apresentam-se as decisões de design do Portal do Senado Federal organizadas segundo os seis eixos normativos da literatura.

### 1. Introdução

#### Objetivo do guia de estilo
A preencher no Passo 2.

#### Organização e conteúdo do guia de estilo
A preencher no Passo 2.

#### Público-alvo
Programadores, gerentes, equipe de suporte e conteudistas do Prodasen. A detalhar no Passo 2.

#### Como utilizar o guia
Diretrizes de aplicação em novas telas e em tarefas de manutenção. A preencher no Passo 2.

#### Como manter o guia
Mecanismos de evolução do guia conforme atualizações de acessibilidade e design system. A preencher no Passo 2.

---

### 2. Resultados de análise

#### Descrição do ambiente de trabalho do usuário
A preencher com base no [Perfil do Usuário](../entrega-2/perfil-usuario.md) e nas [Características da Plataforma](plataforma.md).

---

### 3. Elementos de interface

#### Disposição espacial e grid
A preencher com grid responsivo do Senado.

#### Janelas
A preencher com comportamento de modais e navegação.

#### Tipografia
A preencher com fontes institucionais e escala tipográfica.

#### Símbolos não tipográficos
A preencher com iconografia institucional e de acessibilidade.

#### Cores
A preencher com a paleta institucional (azul, amarelo, tons neutros e alto contraste).

#### Animações
A preencher com regras de transição suave (máx. 250ms).

---

### 4. Elementos de interação

#### Estilos de interação
A preencher com estilos dominantes no portal (menus, busca, hiperlinks).

#### Seleção de um estilo
A justificar com base nas tarefas dos usuários.

#### Aceleradores (teclas de atalho)
A preencher com os atalhos de acessibilidade oficiais do portal.

---

### 5. Elementos de ação

#### Preenchimento de campos
A preencher com padrões de inputs de formulários e caixas de busca.

#### Seleção
A preencher com componentes de filtros de tramitação e buscas facetadas.

#### Ativação
A preencher com padrões visuais e comportamentais de botões.

---

### 6. Vocabulário e padrões

#### Terminologia
A preencher com o glossário legislativo amigável ao cidadão.

#### Tipos de tela
A preencher com telas típicas de consulta, detalhes de matérias e tramitação.

#### Sequências de diálogos
A preencher com padrões de feedback, mensagens de sucesso e erros.

---

## Correspondência com o site avaliado

A preencher no Passo 2, demonstrando a correspondência direta entre as decisões acima e as páginas do Portal do Senado Federal (<https://www12.senado.leg.br/>).

---

## Agradecimentos

A equipe agradece o apoio de ferramentas de inteligência artificial generativa na organização do texto, na revisão bibliográfica e na formatação Markdown deste artefato. A fundamentação teórica, o levantamento das referências, as decisões de design e a revisão crítica foram feitos integralmente pelos integrantes, que seguem responsáveis pelo conteúdo.

---

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `0.1` | 03/10/2026 | Abertura da página, sem o conteúdo dos itens 15, 16 e 17 | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |
| `1.0` | 05/10/2026 | Implementação da fundamentação teórica dos itens 15 e 16, inclusão dos trechos bibliográficos (Figuras 1 e 2) e estruturação do guia | [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |

---

## Bibliografia

[1] SALES, André Barros de. Plano de Ensino FIHC 022026 — Turma 01. Brasília: FCTE/UnB, 2026.

[2] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010.

[3] MARCUS, Aaron. *Graphic Design for Electronic Displays*. New York: ACM Press, 1992.

[4] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.

[5] SENADO FEDERAL. *Portal do Senado Federal*. Disponível em: <https://www12.senado.leg.br/>. Acesso em: 3 out. 2026.

