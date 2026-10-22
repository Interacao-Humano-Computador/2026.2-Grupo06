> **Atualização de 22/10/2026:** este documento registra a preparação anterior. O estado atual está em [LEIA-ME-ETAPA5.md](LEIA-ME-ETAPA5.md); o storyboard já foi substituído pelo desenho manual e a estrutura atual do grupo foi integrada da main.

# Prévia local — revisão de 13/10/2026

Base: cópia atualizada de `/home/caio/Documentos/2026.2-Grupo06`, commit `f68e757` de 12/10. Origem preservada. Trabalho salvo na branch local `caio/etapa-4-perfil-e-planejamento`, a pedido de Caio; sem push ou publicação. Os acréscimos estão em `/home/caio/Documentos/ihc/2026.2-Grupo06`.

## Abrir

- Novo perfil: http://127.0.0.1:3187/2026.2-Grupo06/entrega-2/individual/caio/perfil-2/perfil-usuario/
- Persona: http://127.0.0.1:3187/2026.2-Grupo06/entrega-2/individual/caio/perfil-2/persona/
- Etapa 4: http://127.0.0.1:3187/2026.2-Grupo06/entrega-4/

## Alterações

Cinco artefatos no segundo perfil de Caio, seguindo a organização documental de Bruno: análise documental, perfil, persona Camila Nogueira, cenário e HTA/CTT textuais. Recorte: preparar, revisar e enviar uma ideia legislativa. O perfil original de Renata e a amostra de cinco sessões foram preservados.

Integração nos quatro índices coletivos da etapa 2. Etapa 4 em três páginas para Caio: roteiro e tarefas, avaliações, relatos. Navegação por grupos recolhíveis, usando o tema existente. Textos e tabelas abertos; referências visuais em anexos finais nas páginas trabalhadas. Apresentação 4 em Registros, como as anteriores.

Foram consideradas a escolha do Senado e o processo de Mayhew da etapa 1; os perfis, personas, cenários e tarefas do grupo; o segundo perfil de Bruno; plataforma, metas, princípios e guia de estilo da etapa 3; padrões de autoria e listas de verificação. A prioridade de segurança no uso orienta a revisão antes do envio. Não foi realizada nova validação das entrevistas ou de toda a interface do Senado.

## Pendências explícitas

- Montagem/exportação dos desenhos em editor online especializado. O navegador integrado não disponibilizou uma sessão; roteiro textual não é storyboard concluído. Não foi gerada imagem com IA.
- Revisão humana e definição coletiva da prioridade de Camila no elenco.
- Demais trabalhos individuais, ata/cronograma executado do grupo e gravação da apresentação.
- Recrutamento, confirmação das datas propostas, piloto e avaliações futuras. Sem resultados fabricados.

O checklist da etapa 4 aponta as evidências e pendências item a item. A revisão metodológica propõe condições de coleta, não declara sessões realizadas.

## Reconstruir e servir

```bash
cd /home/caio/Documentos/ihc/2026.2-Grupo06
/home/caio/Documentos/2026.2-Grupo06/.venv/bin/python -m mkdocs build --strict
PORT=3187 node src/server.js
```

Backup anterior à sincronização: `/tmp/ihc-antes-sincronizacao-1310`. Material rejeitado anterior: `/home/caio/Documentos/ihc/revisao-anterior-etapa4`, fora do site.

## Retomar o trabalho

Esta pasta agora é um repositório Git com o histórico da origem e a branch `caio/etapa-4-perfil-e-planejamento`. Continue nela; a pasta original em Documentos não foi alterada. `origin` aponta para o GitHub do grupo, mas nenhum push foi executado.

Na última pesquisa, foram identificadas integrações oficiais de Boords (API) e Canva (MCP). Caio preferiu usar navegador para um editor especializado. O navegador externo não está conectado; a opção Configurações → Uso do computador não foi encontrada pelo usuário. Chrome está instalado, mas isso não confirma conexão com o agente. Não repetir essa orientação como se a opção já tivesse sido verificada no aplicativo. Não substituir o storyboard por imagens geradas com IA.

Próximo passo: disponibilizar um editor acessível ao agente, montar os quadros Q1–Q8 com recursos do editor, exportar, creditar e inserir a figura no anexo final. Conferir a correspondência dos desenhos com HTA e atualizar os itens 9 e 10 da lista. O item 10 exige também os trabalhos dos demais integrantes. Revisão humana, atas, vídeo e avaliações reais não devem ser declarados concluídos sem evidência.
