<span class="owner">Responsável: Caio Breno de Souza Bezerra — Infraestrutura</span>

# Template padrão de artefato

## Tabela de contribuição

A Tabela 1 registra quem atuou neste artefato.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | Modelo reutilizável de artefato do GitHub Pages | [Arquivo-espelho](template-artefato.md#arquivo-espelho) |

<p class="caption">Tabela 1 — Contribuição neste artefato.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026).</p>

Copie o bloco abaixo para um arquivo novo em `docs/`. Troque os campos entre colchetes.

A tabela de contribuição fica no início de cada artefato, só com quem atuou naquela página e com hiperligação da seção correspondente. A Entrega 1 também concentra o quadro da etapa na [Apresentação da Etapa 1](../apresentacoes/etapa-01.md).

```markdown
<span class="owner">Responsável: [Nome — papel] · Autor do item: [Nome]</span>

# [Título do artefato]

## Tabela de contribuição

A Tabela 1 registra quem atuou neste artefato.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Nome](https://github.com/usuario) | Primeira atividade | [Seção da página](./arquivo.md#secao) |
| [Nome](https://github.com/usuario) | Segunda atividade | [Outra seção](./arquivo.md#outra) |

<p class="caption">Tabela 1 — Contribuição neste artefato.</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026).</p>

## Introdução

[Um parágrafo dizendo o que é o artefato, por que existe e o que o leitor vai encontrar.]

## [Seção de conteúdo]

[Escreva o conteúdo. Toda tabela e toda imagem precisam de número, legenda, fonte e uma frase no texto que as chame.]

<figure markdown="span">
  ![Descrição alternativa útil, sem repetir a legenda.](../assets/img/exemplo.png)
  <figcaption>Figura N — [Título da figura].</figcaption>
</figure>
<p class="source">Fonte: [SOBRENOME, ano, p. X] ou elaboração própria (2026).</p>

No texto: “A Figura N mostra…”.

<p class="caption">Tabela N — [Título da tabela].</p>
<p class="source">Fonte: elaboração do Grupo 06 (2026).</p>

No texto: “A Tabela N sintetiza…”.

## Item de conteúdo da disciplina

**Autor do item:** [Nome]

[Parágrafo com citação (SOBRENOME, ano, p. X).]

<figure markdown="span">
  ![Foto do trecho do livro ou do material usado.](../assets/img/referencias/exemplo.png)
  <figcaption>Figura N — Recorte da referência usada neste item.</figcaption>
</figure>
<p class="source">Fonte: SOBRENOME (ano, p. X).</p>

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `1.0` | DD/MM/2026 | Criação do artefato | [Nome](https://github.com/usuario) | [Nome](https://github.com/usuario) |

## Referências

[1] SOBRENOME, Nome. Título. Local: Editora, ano.
```

## Arquivo-espelho

O mesmo contrato está em pedaços reutilizáveis:

- `docs/includes/historico.md`
- `docs/includes/contribuicao.md` — modelo da tabela no início de cada artefato

Depois de copiar, acrescente a página em `mkdocs.yml` na seção correta da `nav`.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `1.0` | 04/09/2026 | Publicação do template reutilizável | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) |
| `1.1` | 05/09/2026 | Tira a tabela de contribuição de cada página e aponta a da entrega | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | [Heitor Pinheiro Gonçalves das Chagas](https://github.com/Heitorovski01) |
| `1.2` | 05/09/2026 | Aponta a contribuição para a apresentação da etapa | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |
| `1.3` | 05/09/2026 | Devolve a tabela de contribuição para o início de cada artefato | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |
| `1.4` | 05/09/2026 | Restringe a tabela a quem atuou no artefato e tira a coluna de gravação | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |

## Referências

[1] ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 6023: informação e documentação — referências — elaboração. Rio de Janeiro: ABNT, 2018.

[2] SALES, André Barros de. Plano de Ensino FIHC 022026 — Turma 01. Brasília: FCTE/UnB, 2026.
