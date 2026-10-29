<span class="owner">Responsável: Luís Henrique Arruda Luna — Agendamento em plenárias</span>

# Modelagem da tarefa — Agendar participação em plenária

## Tabela de contribuição

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Luís Henrique Arruda Luna](https://github.com/Donnk61) | Definição do recorte e das regras provisórias a validar | [Regras provisórias](#regras-provisorias-do-fluxo) |
| Codex (OpenAI) | Apoio à organização da HTA, CTT e documentação | [Agradecimentos](#agradecimentos) |

<p class="caption">Tabela 1 — Contribuições neste artefato.</p>
<p class="source">Fonte: elaboração para o Grupo 06 (2026).</p>

## Introdução

Este documento modela, de forma preliminar, a tarefa de localizar uma plenária e solicitar uma vaga em uma funcionalidade proposta para o Portal do Senado. O fluxo não descreve uma função existente do portal. Parte da persona [Marina Alves](../../../entrega-2/individual/luis/persona.md) e da dificuldade observada para localizar reuniões no [cenário da Etapa 2](../../../entrega-2/individual/luis/cenario.md); o interesse em inscrever-se em uma plenária é uma hipótese nova, ainda não investigada.

As regras abaixo são decisões de prototipação para tornar a tarefa observável. Precisam ser confirmadas antes de serem apresentadas como requisitos institucionais.

## Regras provisórias do fluxo

1. A lista e os detalhes de plenárias são públicos, sem autenticação para consulta.
2. Cada plenária apresenta tema, data, horário, local, prazo de inscrição e vagas disponíveis.
3. A solicitação não reserva vaga durante o preenchimento. A vaga só é confirmada após o envio e a validação final.
4. Se a última vaga for ocupada antes da validação, o sistema não cria inscrição e informa que as vagas se esgotaram.
5. Nesta versão não há lista de espera. A pessoa pode voltar à lista e escolher outra plenária.
6. Para o protótipo, usar nome e e-mail fictícios; não solicitar senha, CPF ou documento.
7. A confirmação é mostrada na tela com um código fictício. O envio de e-mail não será simulado.

## Tarefa analisada

| Campo | Registro |
| --- | --- |
| Objetivo | Encontrar uma plenária adequada e solicitar uma vaga, compreendendo se a inscrição foi confirmada |
| Usuária de referência | Marina Alves, persona existente; adequação ao novo objetivo ainda precisa ser validada |
| Sistema | Proposta de interface para o Portal do Senado; funcionalidade não existente no portal segundo o escopo deste trabalho |
| Evidência de conclusão | Usuária identifica a plenária e explica corretamente se possui vaga confirmada ou não |
| Fonte da hipótese | Persona, cenário e análise de tarefas da Etapa 2; materiais locais de Etapa 2 em `IHC_2026_2` |

## Análise Hierárquica de Tarefas (HTA)

```text
0. Solicitar uma vaga em uma plenária e compreender o resultado
   Plano 0: executar 1 > 2 > 3; se a inscrição estiver aberta e houver vagas,
            executar 4 > 5. Caso contrário, executar 6.

1. Encontrar a área de plenárias
   1.1. Abrir Participação
   1.2. Selecionar Plenárias

2. Encontrar uma plenária adequada
   2.1. Pesquisar por tema OU percorrer a lista
   2.2. Selecionar uma plenária
   2.3. Conferir tema, data, horário, local e prazo
   Plano 2: repetir 2.1–2.3 até identificar uma opção adequada ou desistir.

3. Consultar disponibilidade
   3.1. Ler número de vagas e estado das inscrições
   3.2. Decidir se deseja continuar
   Plano 3: se aberta e com vagas, executar 4; caso contrário, executar 6.

4. Preparar a solicitação
   4.1. Informar nome e e-mail fictícios
   4.2. Revisar os dados
   4.3. Acionar Confirmar solicitação

5. Compreender a resposta
   5.1. Aguardar validação final da disponibilidade
   5.2. Ler confirmação OU aviso de esgotamento
   Plano 5: se confirmada, identificar plenária e código; se esgotada, executar 6.

6. Lidar com indisponibilidade
   6.1. Entender que nenhuma inscrição foi criada
   6.2. Voltar à lista para escolher outra plenária OU encerrar
```

## Árvore de Tarefas Concorrentes (CTT)

O esboço emprega `>>` para sequência, `[]` para alternativas e `*` para repetição, conforme o uso textual de CTT nos materiais do projeto.

```text
AgendarParticipacao =
    AbrirParticipacao >> AbrirPlenarias >>
    (PesquisarPorTema [] PercorrerLista)* >>
    SelecionarPlenaria >> ConsultarDetalhes >> ConsultarDisponibilidade >>
    [InscricaoAbertaEComVagas >>
        PreencherDados >> RevisarDados >> SolicitarVaga >> ValidarDisponibilidade >>
        [VagaConfirmada >> ExibirConfirmacao
         [] VagasEsgotadas >> ExibirIndisponibilidade >> VoltarALista]
     [] InscricaoFechadaOuSemVagas >> ExibirIndisponibilidade >>
        [EscolherOutraPlenaria >> AbrirPlenarias
         [] Encerrar])
```

| ID | Agente | Tarefa | Tipo |
| --- | --- | --- | --- |
| U1 | Usuária | Abrir Participação e Plenárias | Interativa |
| U2 | Usuária | Pesquisar tema ou percorrer lista | Interativa; alternativa e iterativa |
| S1 | Sistema | Exibir plenárias e disponibilidade | Sistema |
| U3 | Usuária | Selecionar opção e conferir detalhes | Interativa/cognitiva |
| U4 | Usuária | Decidir se continua conforme data, local e vagas | Cognitiva |
| U5 | Usuária | Preencher e revisar dados fictícios | Interativa |
| U6 | Usuária | Solicitar vaga | Interativa |
| S2 | Sistema | Revalidar disponibilidade no envio | Sistema |
| S3 | Sistema | Exibir confirmação ou indisponibilidade | Sistema |
| U7 | Usuária | Interpretar resultado e escolher próximo passo | Cognitiva/interativa |

## Limites e validação necessária

- Marina foi observada consultando reuniões da CCJ, não tentando participar de plenárias. A adequação da persona é uma hipótese.
- Capacidade, prazo, dados exigidos, autenticação, confirmação e lista de espera dependem de decisão do projeto e validação com responsável institucional.
- Esta modelagem é insumo para storyboard e protótipo. Não é evidência de avaliação com usuários.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| --- | --- | --- | --- | --- |
| 0.1 | 24/10/2026 | Modelagem preliminar do fluxo proposto de inscrição em plenária | Luís Henrique Arruda Luna | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |
| 0.2 | 24/10/2026 | Designa Caio Breno de Souza Bezerra como revisor; revisão pendente | Luís Henrique Arruda Luna | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação humano-computador*. Rio de Janeiro: Elsevier, 2010. p. 191–196, 203–205.

[2] GRUPO 06. [Persona Marina Alves](../../../entrega-2/individual/luis/persona.md), [cenário](../../../entrega-2/individual/luis/cenario.md) e [análise de tarefas](../../../entrega-2/individual/luis/analise-tarefas.md). 2026.

[3] GRUPO 06. *ETAPA_2_QUADRO_SENADO_E_PERGUNTAS_AO_PROFESSOR.md* e *PERFIS_DE_USUARIO_PORTAL_SENADO_PARA_VALIDACAO.md*. Materiais locais em `/home/luis/Desktop/IHC_2026_2`, consultados em 24 out. 2026.

## Agradecimentos

O Codex (OpenAI) apoiou a organização da modelagem e a redação inicial. Luís Henrique Arruda Luna responde pelo recorte e pela validação do conteúdo antes da entrega.
