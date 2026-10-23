<span class="owner">Responsável: Israel Soares — Cenário</span>

# Cenário

## Tabela de contribuição

A Tabela 1 registra quem atuou neste artefato.

| Integrante | Contribuição | Artefato / atividade |
| --- | --- | --- |
| [Israel Soares](https://github.com/IsraelSoares-25) | Identificação do cenário e adaptação para agendamento de visita | [Identificação](cenario.md#identificacao) |
| [Israel Soares](https://github.com/IsraelSoares-25) | Perguntas exploradas pelo cenário | [Perguntas](cenario.md#perguntas-exploradas) |
| [Israel Soares](https://github.com/IsraelSoares-25) | Narrativa e análise do cenário | [Narrativa](cenario.md#narrativa) |
| Google Gemini | Redação preliminar e formatação Markdown | [Agradecimentos](cenario.md#agradecimentos) |
| [Bruno Ferreira Dornelas](https://github.com/brunnf) | Conferência da origem dos dados e alinhamento metodológico | [Introdução](#introducao) |
| Codex (OpenAI) | Apoio à conferência e redação das ressalvas | [Introdução](#introducao) |

<p class="caption">Tabela 1 — Contribuição neste artefato.</p>
<p class="source">Fonte: elaboração do autor (2026).</p>

## Introdução

Este é um **cenário de problema**: ele narra a experiência da persona [Marta Oliveira](persona.md) ao interagir com o Portal do Senado Federal com o objetivo de realizar o **Agendamento de visita ao Senado Federal** para um grupo de colegas e familiares. A narrativa retrata as decisões, expectativas e barreiras enfrentadas pela usuária durante a busca pelo serviço, a seleção de opções no calendário e a conclusão do agendamento, contextualizando os pontos críticos que fundamentam a [Análise de Tarefas](analise-tarefas.md) e as futuras propostas de reprojeto.

## Identificação

A Tabela 2 identifica o cenário de interação.

| Campo | Registro |
| --- | --- |
| Título | Marta agenda uma visita institucional ao Senado Federal |
| Ator | [Marta Oliveira](persona.md), servidora pública que deseja agendar uma visita guiada às dependências do Senado |
| Objetivo principal | Concluir com sucesso o agendamento de visita institucional ao Senado Federal para uma data e horário específicos |
| Situação inicial | Marta está no computador pessoal, em busca de maior visibilidade para preencher dados e conferir datas, pois nunca realizou um agendamento de visita institucional pelo portal |
| Tipo | Cenário de problema: situação antes do reprojeto da interface e do fluxo |
| Sistema envolvido | Portal do Senado Federal (mecanismo de busca, seções institucionais e módulo de Visitação/Agendamento de Visita) |
| Tarefa modelada | [Análise de tarefas (HTA e CTT)](analise-tarefas.md) |

<p class="caption">Tabela 2 — Identificação do cenário.</p>
<p class="source">Fonte: elaboração do autor (2026).</p>

## Perguntas exploradas

As perguntas a seguir orientam a narrativa e expressam as principais decisões de design a serem tratadas. No texto da narrativa, o número de cada pergunta é indicado entre colchetes logo após o trecho correspondente.

1. O que motiva a necessidade de realizar o agendamento da visita ao Senado?
2. Por onde Marta busca acessar a funcionalidade de agendamento no portal?
3. Que termos ela emprega na busca e como a interface reage às suas tentativas?
4. Quais dificuldades ela vivencia ao tentar escolher a modalidade de visita, a data e os horários disponíveis?
5. Como ela procede no preenchimento dos dados dos participantes e na consulta às regras da visitação (horários, vestimenta e identificação)?
6. Como ela recebe a confirmação e o que espera como comprovante da visita agendada?

## Narrativa

**Marta agenda uma visita institucional ao Senado Federal**

Atores: Marta Oliveira (servidora pública)

Marta está planejando um passeio cívico com familiares que estão visitando a cidade e combinou também com dois colegas de trabalho de conhecerem juntos o Palácio do Congresso Nacional e entenderem de perto a rotina dos senadores [1]. Como a atividade requer reserva prévia de vagas e atenção aos detalhes de acesso, Marta prefere ligar seu computador em vez de usar o celular que utiliza habitualmente [1] [2]. 

Ao carregar a página inicial do Portal do Senado, ela procura visualmente por uma opção destacada como "Visite o Senado" ou "Agendar Visita", mas encontra uma profusão de notícias e links sobre matérias legislativas que não evidenciam os serviços ao cidadão [2]. Decide então recorrer ao campo de busca principal do portal e digita termos cotidianos, como "visita guiada", "visitar o senado" e "agendar visita" [3]. Os primeiros resultados devolvem notícias antigas sobre visitações e notas institucionais, gerando dúvida sobre qual link efetivamente direciona para o sistema de agendamento em funcionamento [3].

Após selecionar um resultado institucional, Marta finalmente atinge a página do Programa de Visitação [2]. Ali, ela se depara com a etapa de definir a modalidade (visita individual ou em grupo) e precisa escolher uma data no calendário [4]. O calendário, no entanto, apresenta legendas pouco claras sobre quais dias ainda possuem vagas e quais horários estão totalmente lotados, obrigando Marta a clicar em várias opções até encontrar um horário matutino compatível com a agenda de todos [4]. 

Ao avançar para a tela de dados, ela preenche suas informações como responsável (nome, CPF, telefone e e-mail) e os nomes dos acompanhantes, mas sente falta de um aviso evidente, logo no início da tela, sobre as regras de vestimenta (proibições de certos trajes) e documentos obrigatórios para a portaria [5]. Antes de submeter o formulário, Marta revisa com cautela os dados inseridos e clica no botão de confirmação [5].

A tela seguinte apresenta a confirmação de que o agendamento foi processado, exibindo um código localizador e um resumo dos dados [6]. Marta respira aliviada, mas procura de imediato uma forma de salvar e imprimir o comprovante em PDF e espera receber uma mensagem com todas as instruções por e-mail, garantindo que nenhum acompanhante seja barrado no dia do evento [6].

## Análise do cenário

A análise da jornada de Marta aponta aspectos críticos que necessitam de intervenção no reprojeto do portal:

- **Encontrabilidade do serviço:** a opção de agendamento de visitação institucional precisa ter visibilidade destacada na página inicial (ex.: área de serviços ao cidadão) e o buscador deve priorizar termos comuns ("visita", "conhecer o congresso", "agendar visita");
- **Transparência de vagas no calendário:** o componente de calendário deve sinalizar de forma imediata (por cores e legendas nítidas) os dias e horários com vagas disponíveis, evitando tentativas frustradas por tentativa e erro;
- **Instruções e regras visíveis no momento oportuno:** informações cruciais sobre vestimenta permitida, documentos exigidos na recepção e regras de acessibilidade devem ser apresentadas de forma clara antes e durante o preenchimento dos dados;
- **Comprovação e comunicação proativa:** geração imediata de comprovante para download/impressão e envio automático de e-mail de confirmação contendo o código de agendamento e orientações completas para o visitante.

## Agradecimentos

Esta página contou com o apoio do Google Gemini na formatação Markdown e na redação preliminar da narrativa. A revisão do conteúdo e a adaptação do cenário para a funcionalidade oficial de agendamento de visita ao Senado são de responsabilidade do autor.

## Histórico de versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | --- | --- | --- |
| `0.1` | 27/09/2026 | Estrutura inicial do artefato | [Israel Soares](https://github.com/IsraelSoares-25) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |
| `0.2` | 27/09/2026 | Narrativa e análise preenchidas a partir da sessão com a persona Marta Oliveira | [Israel Soares](https://github.com/IsraelSoares-25) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |
| `0.3` | 27/09/2026 | Ajusta o título para descrever a situação de busca de espaço | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |
| `0.4` | 03/10/2026 | Nomeia a ferramenta de IA nos agradecimentos e na tabela de contribuição | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) | [Luís Henrique Luna de Arruda](https://github.com/Donnk61) |
| `1.0` | 05/10/2026 | Explicita a origem reconstruída do cenário e o limite de confirmação do serviço | [Bruno Ferreira Dornelas](https://github.com/brunnf) | [Caio Breno de Souza Bezerra](https://github.com/CaioBezerra-Dev) |
| `2.0` | 22/10/2026 | Adaptação integral do cenário para a funcionalidade de Agendamento de Visita ao Senado Federal | [Israel Soares](https://github.com/IsraelSoares-25) | [Bruno Ferreira Dornelas](https://github.com/brunnf) |

## Referências

[1] BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. Interação humano-computador. Rio de Janeiro: Elsevier, 2010.
