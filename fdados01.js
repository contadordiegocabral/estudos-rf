/* Fluência em Dados — Módulo 01: Dados, Big Data, ciência de dados e arquiteturas (modo direto) */
window.MOD = window.MOD || {};
window.MOD.fdados01 = (function(){
"use strict";

var CARDS = [
  ["Dado, informação e conhecimento — a escada","<b>Dado</b> é o registro bruto, sem contexto. <b>Informação</b> é o dado <b>contextualizado</b> e organizado. <b>Conhecimento</b> é a informação <b>aplicada</b>, que permite decidir."],
  ["O que são dados estruturados?","Os que seguem um <b>modelo rígido e predefinido</b>, em linhas e colunas — tabelas de bancos relacionais, planilhas."],
  ["O que são dados semiestruturados?","Os que têm <b>alguma marcação ou hierarquia</b>, mas sem esquema rígido — <b>JSON</b>, <b>XML</b>, logs."],
  ["O que são dados não estruturados?","Os <b>sem modelo predefinido</b> — texto livre, e-mails, imagens, áudio, vídeo. São a <b>maior parte</b> dos dados existentes."],
  ["Os TRÊS Vs clássicos do Big Data","<b>VOLUME</b> (quantidade) · <b>VELOCIDADE</b> (rapidez de geração e processamento) · <b>VARIEDADE</b> (diversidade de formatos)."],
  ["Como a definição clássica de Big Data se completa?","São dados de volume, velocidade e variedade tais que <b>demandam formas inovadoras de processamento</b> — os modelos tradicionais não dão conta."],
  ["Quais Vs foram acrescentados depois?","<b>VERACIDADE</b> (confiabilidade do dado) e <b>VALOR</b> (retorno que a análise gera). Alguns autores somam <b>variabilidade</b> e <b>visualização</b>."],
  ["Cuidado com a pegadinha dos Vs","A banca monta alternativas com palavras que <b>começam com V mas não são os Vs</b>: variança, viscosidade, volatilidade, vocabulário, validade. Os três originais são <b>volume, velocidade e variedade</b>."],
  ["O que é ciência de dados?","O campo <b>interdisciplinar</b> que extrai conhecimento de dados combinando <b>estatística</b>, <b>computação</b> e <b>conhecimento do domínio</b> do negócio."],
  ["Ciência de dados × Big Data","<b>Big Data</b> descreve a <b>característica dos dados</b> (volume, velocidade, variedade). <b>Ciência de dados</b> é a <b>disciplina que os analisa</b>. Big Data é o problema; ciência de dados, o método."],
  ["O que é analytics?","O uso <b>sistemático de dados e análise quantitativa</b> para apoiar a <b>tomada de decisão</b>."],
  ["Os quatro tipos de análise","<b>Descritiva</b>: o que aconteceu. <b>Diagnóstica</b>: por que aconteceu. <b>Preditiva</b>: o que vai acontecer. <b>Prescritiva</b>: o que fazer a respeito."],
  ["Qual análise tem maior valor e maior dificuldade?","A <b>prescritiva</b>. A escada vai da descritiva (mais simples, menor valor) à prescritiva (mais complexa, maior valor)."],
  ["O que é aprendizado de máquina?","O campo em que algoritmos <b>aprendem padrões a partir dos dados</b>, sem serem explicitamente programados para cada regra."],
  ["Aprendizado SUPERVISIONADO","Treina com dados <b>rotulados</b> — cada exemplo traz a resposta certa. Tarefas: <b>classificação</b> (classe) e <b>regressão</b> (valor numérico)."],
  ["Aprendizado NÃO SUPERVISIONADO","Treina com dados <b>sem rótulo</b>, buscando estrutura oculta. Tarefas: <b>agrupamento (clustering)</b>, <b>regras de associação</b> e <b>redução de dimensionalidade</b>."],
  ["Aprendizado POR REFORÇO","O agente aprende por <b>tentativa e erro</b>, recebendo <b>recompensas ou punições</b> do ambiente."],
  ["O que é o k-NN (k vizinhos mais próximos)?","Algoritmo <b>supervisionado</b> de classificação: calcula a <b>distância</b> do ponto novo a todos os pontos de treino e atribui a <b>classe mais frequente entre os k vizinhos mais próximos</b>."],
  ["Como resolver uma questão de k-NN na prova","<b>1)</b> calcule a distância euclidiana do ponto a cada ponto de treino; <b>2)</b> escolha os <b>k menores</b>; <b>3)</b> veja qual <b>classe é maioria</b>. Com k=3 e duas classes, vence quem tiver 2 ou 3 votos."],
  ["O que é uma regra de associação?","Uma relação do tipo <b>X ⇒ Y</b>: quem compra X tende a comprar Y. Mede-se por <b>suporte</b> e <b>confiança</b>."],
  ["Fórmula do SUPORTE","<b>sup(X ⇒ Y) = sup(X ∪ Y) / N</b> — a proporção de <b>todas as transações</b> em que X e Y aparecem juntos."],
  ["Fórmula da CONFIANÇA","<b>conf(X ⇒ Y) = sup(X ∪ Y) / sup(X)</b> — entre as transações que têm <b>X</b>, quantas também têm Y. O denominador é <b>X</b>, não Y e não N."],
  ["O que é o algoritmo Apriori?","Algoritmo clássico de <b>mineração de regras de associação</b>, que encontra conjuntos de itens frequentes eliminando os que não atingem o suporte mínimo."],
  ["O que é processamento de linguagem natural (PLN)?","A área que faz o computador <b>entender e gerar linguagem humana</b> — classificação de texto, extração de entidades, tradução, modelagem de tópicos."],
  ["O que é modelagem de tópicos?","Técnica de PLN <b>não supervisionada</b> que descobre os <b>assuntos latentes</b> de uma coleção de documentos. Principais: <b>LDA</b>, <b>LSA</b> e <b>NMF</b>."],
  ["Quando preferir a NMF na modelagem de tópicos?","Quando a prioridade for <b>interpretabilidade e inspeção dos resultados</b> — a <b>fatoração de matrizes não negativas</b> produz representação <b>esparsa e não negativa</b>, mais fácil de ler."],

  ["O que é o CRISP-DM?","O modelo de referência que descreve o <b>ciclo de vida de um projeto de mineração de dados</b> em <b>SEIS fases</b>."],
  ["As seis fases do CRISP-DM, na ordem","<b>1</b> Entendimento do negócio · <b>2</b> Entendimento dos dados · <b>3</b> <b>Preparação dos dados</b> · <b>4</b> Modelagem · <b>5</b> Avaliação · <b>6</b> Implantação (entrega)."],
  ["Qual a TERCEIRA fase do CRISP-DM?","A <b>preparação dos dados</b> — pergunta cobrada literalmente em prova."],
  ["O CRISP-DM é linear?","<b>Não</b> — é <b>iterativo e cíclico</b>. Pode-se voltar a fases anteriores, e o ciclo recomeça após a implantação."],
  ["Qual fase consome mais tempo em um projeto de dados?","A <b>preparação dos dados</b> — limpeza, tratamento de faltantes, padronização e criação de atributos derivados."],
  ["O que é pré-processamento de dados?","<b>Limpeza</b>, <b>adequação de formato</b>, <b>exclusão de brancos</b>, tratamento de <b>outliers</b> e <b>inclusão de atributos derivados</b> — tudo o que prepara o dado para a análise."],
  ["Papéis em projetos de dados — Cientista de Dados","Formula hipóteses, escolhe e treina os <b>modelos estatísticos e de aprendizado de máquina</b>, interpreta os resultados."],
  ["Papéis em projetos de dados — Engenheiro de Dados","Constrói e mantém a <b>infraestrutura e os pipelines</b>: ingestão, armazenamento e transformação dos dados."],
  ["Papéis em projetos de dados — Analista de Dados","Explora os dados e produz <b>relatórios, painéis e indicadores</b> para o negócio."],
  ["Papéis em projetos de dados — Administrador (steward) de dados","Zela pela <b>qualidade, definição e conformidade</b> do dado dentro da governança."],
  ["O que é governança de dados?","O conjunto de <b>políticas, papéis, processos e padrões</b> que asseguram a <b>qualidade, segurança, disponibilidade e conformidade</b> dos dados como ativo da organização."],
  ["Os três tipos de governança de dados","<b>CENTRALIZADA</b>: decisões concentradas em uma área. <b>COMPARTILHADA</b>: responsabilidade distribuída entre áreas. <b>COLEGIADA</b>: decisões tomadas por um <b>comitê</b> com representantes de várias áreas."],
  ["O que governança de dados NÃO é?","Não é a tecnologia nem a ferramenta — é o <b>arranjo de decisão</b>: quem decide o quê sobre os dados, e sob quais regras."],

  ["O que é Business Intelligence (BI)?","O conjunto de <b>processos e tecnologias</b> que transformam dados operacionais em <b>informação para decisão gerencial</b>."],
  ["Os quatro componentes da arquitetura de um sistema de BI","<b>Data Warehouse</b> · <b>Análise de negócio</b> · <b>Business Process Management</b> (gestão de processos de negócio) · <b>Interfaces do usuário</b>."],
  ["O que é um Data Warehouse?","Repositório <b>central, integrado, histórico e orientado a assunto</b>, com dados já <b>tratados e estruturados</b> para análise. É <b>não volátil</b>."],
  ["O que é um Data Mart?","Um <b>subconjunto do Data Warehouse</b>, voltado a <b>um departamento ou assunto específico</b> — vendas, fiscal, RH."],
  ["O que é um Data Lake?","Repositório que armazena dados em seu <b>formato bruto e original</b> — estruturados, semiestruturados e não estruturados — sem esquema definido na entrada."],
  ["Data Warehouse × Data Lake — a diferença essencial","<b>DW:</b> esquema <b>na escrita</b> (schema on write), dado <b>já tratado</b>, estruturado. <b>Lake:</b> esquema <b>na leitura</b> (schema on read), dado <b>bruto</b>, qualquer formato."],
  ["O que é ETL?","<b>Extract, Transform, Load</b> — extrai, <b>transforma ANTES</b> e só então carrega no destino. É o padrão do <b>Data Warehouse</b>."],
  ["O que é ELT?","<b>Extract, Load, Transform</b> — extrai, <b>carrega bruto</b> e transforma <b>depois</b>, já no destino. É o padrão do <b>Data Lake</b>."],
  ["Quando preferir ETL (Data Warehouse)?","Com <b>volumes menores</b>, <b>dados sensíveis</b>, fontes majoritariamente <b>relacionais</b> e <b>casos de uso conhecidos</b> — a transformação prévia dá <b>mais controle</b> e ajuda na <b>conformidade com privacidade</b>."],
  ["Quando preferir ELT (Data Lake)?","Com <b>grandes volumes</b>, dados <b>semiestruturados e não estruturados</b>, casos de uso <b>ainda não definidos</b> e <b>menor latência até a carga</b>."],
  ["Que ferramenta usar para limpar, padronizar formatos, excluir brancos e criar atributos derivados?","Uma ferramenta de <b>ETL</b> — é ela que faz o <b>pré-processamento</b> antes da carga."],
  ["O que é OLTP?","<b>Online Transaction Processing</b> — os sistemas <b>operacionais do dia a dia</b>, com muitas transações curtas de escrita. Dado <b>atual e detalhado</b>."],
  ["O que é OLAP?","<b>Online Analytical Processing</b> — a <b>análise multidimensional</b> sobre dados históricos, em cubos, para consultas gerenciais. Dado <b>histórico e agregado</b>."],
  ["As quatro operações OLAP","<b>Drill down</b> (mais detalhe) · <b>Roll up</b> (mais agregação) · <b>Slice</b> (fatia uma dimensão) · <b>Dice</b> (recorta várias dimensões)."],

  ["O que é a arquitetura LAMBDA?","Arquitetura de Big Data com <b>DOIS caminhos</b>: uma <b>camada de lote (batch)</b>, precisa e completa, e uma <b>camada de velocidade (speed/streaming)</b>, rápida e aproximada — unidas na <b>camada de serviço</b>."],
  ["O que é a arquitetura KAPPA?","Arquitetura com <b>UM ÚNICO caminho</b>: tudo é tratado como <b>fluxo (streaming)</b>. Simplifica a Lambda ao <b>eliminar a divisão</b> entre lote e velocidade."],
  ["Lambda × Kappa — como não errar","<b>Lambda tem DOIS caminhos</b> (lote + velocidade). <b>Kappa tem UM</b> (só streaming). A banca inverte os nomes."],
  ["O que é computação em nuvem?","O fornecimento de <b>recursos de TI sob demanda</b> pela rede, com <b>pagamento pelo uso</b> e <b>elasticidade</b>."],
  ["Os três modelos de serviço em nuvem","<b>IaaS</b> (infraestrutura) · <b>PaaS</b> (plataforma) · <b>SaaS</b> (software). Quanto mais se sobe, <b>menos o cliente gerencia</b>."],
  ["Os modelos de implantação em nuvem","<b>Pública</b>, <b>privada</b>, <b>híbrida</b> e <b>comunitária</b>."],
  ["O que são bancos NoSQL?","Bancos <b>não relacionais</b>, com <b>esquema flexível</b>, pensados para <b>escala horizontal</b> e grandes volumes."],
  ["Os quatro modelos de NoSQL","<b>Chave-valor</b> (Redis) · <b>Documento</b> (MongoDB) · <b>Colunar</b> (Cassandra, HBase) · <b>Grafos</b> (Neo4j)."],
  ["O que diz o teorema CAP?","Um sistema distribuído só garante <b>DOIS</b> de três atributos: <b>C</b>onsistência · <b>A</b>vailability (disponibilidade) · <b>P</b>artition tolerance (tolerância a partições)."],
  ["A pegadinha do CAP","O <b>A</b> é de <b>Availability (disponibilidade)</b> e o <b>P</b> de <b>Partition tolerance</b> — <b>não</b> de atomicidade nem de performance. A banca troca exatamente por essas duas."],
  ["No MongoDB, como exibir o resultado de um find de forma legível?","Com o método <b>pretty()</b>."],
  ["Quais as linguagens de ciência de dados citadas no edital?","<b>Python</b> e <b>R</b>."],
  ["Em R, como somar um fator com NA convertendo corretamente?","<b>sum(as.numeric(as.character(x)), na.rm = TRUE)</b> — em fatores é preciso passar por <b>as.character</b> antes de <b>as.numeric</b>, senão soma-se o <b>código interno do nível</b>, não o valor."],
  ["Em R, o que faz o pivot_wider?","<b>Alarga</b> a tabela: transforma <b>valores de uma coluna em novas colunas</b>. Onde não houver correspondência, preenche com <b>NA</b>."],
  ["Em Python, o que faz a fatia [::-1]?","<b>Inverte</b> a sequência."],
  ["Em Python, como pegar os elementos de posição par?","Com a fatia <b>[::2]</b> — índices 0, 2, 4… Lembre que a indexação começa em <b>zero</b>."]
];

var QS = [
  ["Dado é o registro bruto, sem contexto, enquanto informação é o dado contextualizado e organizado.","C","FGV","Base da escada dado-informação-conhecimento."],
  ["Arquivos JSON e XML são exemplos de dados não estruturados.","E","FGV","São <b>semiestruturados</b> — têm marcação e hierarquia, mas não esquema rígido."],
  ["Textos livres, imagens, áudio e vídeo são exemplos de dados não estruturados.","C","FGV","Correspondem à maior parte dos dados existentes."],
  ["A definição clássica de Big Data faz referência a três Vs fundamentais: variedade, velocidade e volume.","C","FGV","Questão SEFAZ-AM/2022 — os três Vs originais."],
  ["Os três Vs fundamentais do Big Data são valor, variança e veracidade.","E","FGV","Alternativa-armadilha: os originais são <b>volume, velocidade e variedade</b>."],
  ["Veracidade e valor são Vs acrescentados às definições posteriores de Big Data.","C","FGV","Veracidade trata da confiabilidade; valor, do retorno da análise."],
  ["Big Data e ciência de dados são sinônimos.","E","FGV","Big Data descreve a <b>característica dos dados</b>; ciência de dados é a <b>disciplina que os analisa</b>."],
  ["A ciência de dados combina estatística, computação e conhecimento do domínio do negócio.","C","FGV","Campo interdisciplinar por definição."],
  ["A análise descritiva responde ao que aconteceu, e a preditiva, ao que provavelmente acontecerá.","C","FGV","A diagnóstica explica o porquê e a prescritiva indica o que fazer."],
  ["A análise prescritiva é a de menor complexidade e menor valor agregado.","E","FGV","É a de <b>maior</b> complexidade e <b>maior</b> valor."],
  ["No aprendizado supervisionado, o algoritmo é treinado com dados rotulados.","C","FGV","Classificação e regressão são suas tarefas típicas."],
  ["Agrupamento (clustering) é tarefa típica do aprendizado supervisionado.","E","FGV","É <b>não supervisionado</b> — não há rótulo."],
  ["Regras de associação e redução de dimensionalidade são tarefas de aprendizado não supervisionado.","C","FGV","Buscam estrutura oculta nos dados."],
  ["No aprendizado por reforço, o agente aprende por tentativa e erro, a partir de recompensas e punições.","C","FGV","Terceiro grande paradigma."],
  ["O k-vizinhos mais próximos atribui ao ponto novo a classe mais frequente entre os k pontos de treino mais próximos.","C","FGV","Algoritmo supervisionado baseado em distância."],
  ["Aplicando k-NN com k igual a 3, se dois dos três vizinhos mais próximos forem da classe B e um da classe A, a classe prevista é B.","C","FGV","Vence a maioria simples entre os k vizinhos."],
  ["A confiança de uma regra de associação X ⇒ Y é dada por sup(X ∪ Y) dividido por sup(X).","C","FGV","Questão SEFAZ-AM/2022 — o denominador é o suporte de <b>X</b>."],
  ["A confiança de uma regra de associação X ⇒ Y é dada por sup(X ∩ Y) dividido por sup(Y).","E","FGV","Alternativa-armadilha: o denominador é <b>sup(X)</b>."],
  ["O suporte de uma regra de associação é a proporção do total de transações em que X e Y ocorrem juntos.","C","FGV","Diferente da confiança, cujo denominador é sup(X)."],
  ["O Apriori é um algoritmo de mineração de regras de associação.","C","FGV","Elimina conjuntos que não atingem o suporte mínimo."],
  ["A modelagem de tópicos é uma técnica de aprendizado supervisionado de processamento de linguagem natural.","E","FGV","É <b>não supervisionada</b> — descobre assuntos latentes sem rótulos."],
  ["A fatoração de matrizes não negativas (NMF) é apropriada quando se deseja maior interpretabilidade e inspeção dos resultados, por produzir representação esparsa e não negativa.","C","FGV","Questão TJ-DFT/2022."],
  ["O CRISP-DM descreve o ciclo de vida de projetos de mineração de dados em seis fases.","C","FGV","Modelo de referência da área."],
  ["A terceira fase do CRISP-DM corresponde à preparação dos dados.","C","FGV","Questão SEFAZ-AM/2022 — entendimento do negócio, entendimento dos dados, preparação."],
  ["A primeira fase do CRISP-DM é o entendimento dos dados.","E","FGV","A primeira é o <b>entendimento do negócio</b>."],
  ["O CRISP-DM é um modelo estritamente linear, sem retorno a fases anteriores.","E","FGV","É <b>iterativo e cíclico</b>."],
  ["A preparação dos dados costuma ser a fase que mais consome tempo em um projeto de dados.","C","FGV","Limpeza, faltantes, padronização e atributos derivados."],
  ["Para limpar dados, adequar formatos, excluir brancos e incluir novos atributos derivados antes da mineração, deve-se usar uma ferramenta de ETL.","C","FGV","Questão TJ-DFT/2022 — é o pré-processamento."],
  ["O engenheiro de dados é o responsável por construir e manter os pipelines e a infraestrutura de dados.","C","FGV","O cientista foca nos modelos; o analista, nos relatórios."],
  ["Governança de dados é o conjunto de políticas, papéis, processos e padrões que asseguram qualidade, segurança e conformidade dos dados.","C","FGV","Trata o dado como ativo organizacional."],
  ["São tipos de governança de dados a centralizada, a compartilhada e a colegiada.","C","FGV","Os três tipos citados no edital."],
  ["Na governança colegiada, as decisões sobre dados são tomadas por um comitê com representantes de várias áreas.","C","FGV","Distinta da centralizada e da compartilhada."],
  ["São componentes da arquitetura de um sistema de BI o data warehouse, a análise de negócio, o business process management e as interfaces do usuário.","C","FGV","Questão SEFAZ-AM/2022 — quatro componentes."],
  ["O data warehouse é um repositório volátil que armazena apenas dados correntes das operações.","E","FGV","É <b>não volátil</b>, integrado, <b>histórico</b> e orientado a assunto."],
  ["O data mart é um subconjunto do data warehouse voltado a um departamento ou assunto específico.","C","FGV","Recorte temático do DW."],
  ["O data lake armazena dados em seu formato bruto e original, inclusive semiestruturados e não estruturados.","C","FGV","Esquema aplicado na leitura."],
  ["No data warehouse o esquema é aplicado na leitura, e no data lake, na escrita.","E","FGV","É o inverso: <b>DW schema on write</b>, <b>lake schema on read</b>."],
  ["No ETL a transformação ocorre antes da carga no destino.","C","FGV","Padrão associado ao data warehouse."],
  ["No ELT os dados são carregados brutos e transformados posteriormente, já no destino.","C","FGV","Padrão associado ao data lake."],
  ["Para uma organização com dados sensíveis, volume moderado a pequeno e fontes majoritariamente relacionais, o armazém de dados com ETL é adequado porque a transformação prévia dá maior controle.","C","FGV","Questão CGU/2022 — controle e conformidade com privacidade."],
  ["O OLTP destina-se à análise multidimensional de dados históricos.","E","FGV","Isso é o <b>OLAP</b>; o OLTP trata das transações operacionais."],
  ["São operações OLAP o drill down, o roll up, o slice e o dice.","C","FGV","Navegação pelo cubo multidimensional."],
  ["A arquitetura Lambda divide o processamento em uma camada de lote e uma camada de velocidade.","C","FGV","Unidas depois na camada de serviço."],
  ["A arquitetura Kappa caracteriza-se pela divisão do processamento em dois caminhos, de lote e de velocidade.","E","FGV","Questão SEFAZ-AM/2022 — a Kappa tem <b>um único</b> caminho, de streaming."],
  ["A arquitetura Kappa trata todos os dados como fluxo, eliminando a divisão entre lote e velocidade.","C","FGV","Simplificação da Lambda."],
  ["São modelos de serviço em computação em nuvem o IaaS, o PaaS e o SaaS.","C","FGV","Quanto mais alto o modelo, menos o cliente gerencia."],
  ["São modelos de bancos NoSQL o chave-valor, o documento, o colunar e o de grafos.","C","FGV","MongoDB é documento; Cassandra, colunar; Neo4j, grafos."],
  ["No teorema CAP, as letras correspondem a consistência, atomicidade e performance.","E","FGV","Questão SEFAZ-AM/2022 — são <b>consistência, disponibilidade (availability) e tolerância a partições</b>."],
  ["Pelo teorema CAP, um sistema distribuído pode garantir simultaneamente, no máximo, dois dos três atributos.","C","FGV","Base do desenho de bancos distribuídos."],
  ["No MongoDB, o método utilizado para exibir o resultado de uma consulta find de forma formatada é o pretty.","C","FGV","Questão TJ-RO/2021."],
  ["As linguagens de programação para ciência de dados previstas no edital da Receita Federal são Python e R.","C","FGV","Constam expressamente do conteúdo programático."],
  ["Em R, para somar os valores numéricos de um fator que contém NA, o comando correto é sum(as.numeric(as.character(x)), na.rm = TRUE).","C","FGV","Questão TJ-DFT/2022 — sem as.character somam-se os códigos dos níveis."],
  ["Em R, aplicar as.numeric diretamente sobre um fator retorna os valores originais dos rótulos.","E","FGV","Retorna o <b>código interno do nível</b>, não o rótulo."],
  ["Em R, a função pivot_wider transforma valores de uma coluna em novas colunas, preenchendo com NA onde não houver correspondência.","C","FGV","Questão TCU/2022."],
  ["Em Python, a fatia [::-1] inverte a sequência.","C","FGV","Base de várias questões de código."],
  ["Em Python, aplicando [::2] sobre a lista invertida de [1,2,3,4,5,6], obtêm-se os elementos 6, 4 e 2.","C","FGV","Questão TCU/2022 — invertida é [6,5,4,3,2,1]; índices 0, 2 e 4."],
  ["Em Python, a indexação de listas começa em 1.","E","FGV","Começa em <b>zero</b> — origem de metade dos erros em questões de código."],
  ["O pré-processamento de dados inclui limpeza, adequação de formato, exclusão de brancos e criação de atributos derivados.","C","FGV","É onde mora a maior parte do esforço do projeto."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Dados, Big Data e os tipos de análise",
      '<div class="box"><span class="bl">A escada</span>'+
      '<p><b>Dado</b> → registro bruto, sem contexto. <b>Informação</b> → dado <b>contextualizado</b>. <b>Conhecimento</b> → informação <b>aplicada</b> à decisão.</p></div>'+
      '<div class="box"><span class="bl">Como o dado se apresenta</span>'+
      '<ul><li><b>Estruturado</b> — modelo rígido, linhas e colunas (tabelas, planilhas).</li>'+
      '<li><b>Semiestruturado</b> — marcação ou hierarquia sem esquema rígido (<b>JSON</b>, <b>XML</b>, logs).</li>'+
      '<li><b>Não estruturado</b> — sem modelo (texto livre, imagem, áudio, vídeo). É a <b>maioria</b> dos dados.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Os Vs do Big Data</span>'+
      '<p class="mn"><em>Os TRÊS originais: <b>VOLUME · VELOCIDADE · VARIEDADE</b></em></p>'+
      '<p>São dados cuja escala <b>demanda formas inovadoras de processamento</b>. Depois vieram <b>veracidade</b> (confiabilidade) e <b>valor</b> (retorno).</p>'+
      '<p>A banca monta alternativas com palavras que só <b>parecem</b> Vs: variança, viscosidade, volatilidade, vocabulário, validade. Se não for volume, velocidade ou variedade, desconfie.</p></div>'+
      '<div class="box tip"><span class="bl">Big Data × ciência de dados</span>'+
      '<p><b>Big Data</b> descreve a <b>característica dos dados</b>. <b>Ciência de dados</b> é a <b>disciplina que os analisa</b>, cruzando <b>estatística + computação + domínio do negócio</b>. Um é o problema; a outra, o método.</p></div>'+
      '<div class="box"><span class="bl">Os quatro tipos de análise</span>'+
      '<p><b>Descritiva</b> (o que aconteceu) → <b>Diagnóstica</b> (por quê) → <b>Preditiva</b> (o que vai acontecer) → <b>Prescritiva</b> (o que fazer).</p>'+
      '<p>A escada sobe em <b>complexidade e valor</b> ao mesmo tempo: a prescritiva é a mais difícil e a mais valiosa.</p></div>')
  ],
  V2:[
    sl("Aprendizado de máquina, associação e PLN",
      '<div class="box"><span class="bl">Os três paradigmas</span>'+
      '<ul><li><b>SUPERVISIONADO</b> — dados <b>rotulados</b>. Tarefas: <b>classificação</b> e <b>regressão</b>.</li>'+
      '<li><b>NÃO SUPERVISIONADO</b> — <b>sem rótulo</b>. Tarefas: <b>agrupamento</b>, <b>regras de associação</b>, <b>redução de dimensionalidade</b>.</li>'+
      '<li><b>POR REFORÇO</b> — tentativa e erro, com <b>recompensas e punições</b>.</li></ul>'+
      '<p class="mn"><em>Tem rótulo? Supervisionado. Procura grupos ou padrões escondidos? Não supervisionado.</em></p></div>'+
      '<div class="box tip"><span class="bl">k-NN — como resolver na prova</span>'+
      '<p>É <b>supervisionado</b>. Passo a passo: <b>1)</b> distância euclidiana do ponto novo a cada ponto de treino; <b>2)</b> selecione os <b>k menores</b>; <b>3)</b> <b>maioria vence</b>.</p>'+
      '<p>Com <b>k = 3</b> e duas classes, ganha quem tiver <b>2 ou 3 votos</b> — nunca dá empate.</p></div>'+
      '<div class="box trap"><span class="bl">Suporte × confiança</span>'+
      '<p class="mn"><em>sup(X ⇒ Y) = sup(X ∪ Y) / <b>N</b><br>conf(X ⇒ Y) = sup(X ∪ Y) / <b>sup(X)</b></em></p>'+
      '<p>A diferença está toda no <b>denominador</b>: o suporte divide por <b>todas</b> as transações; a confiança, só pelas que <b>têm X</b>. A banca oferece <b>sup(Y)</b> e <b>N²</b> como iscas.</p>'+
      '<p>O <b>Apriori</b> é o algoritmo clássico de mineração dessas regras.</p></div>'+
      '<div class="box"><span class="bl">Processamento de linguagem natural</span>'+
      '<p>Faz o computador <b>entender e gerar linguagem humana</b>. A <b>modelagem de tópicos</b> é <b>não supervisionada</b> e descobre assuntos latentes: <b>LDA</b>, <b>LSA</b> e <b>NMF</b>.</p>'+
      '<p>Quando o enunciado pedir <b>interpretabilidade e inspeção dos resultados</b>, a resposta é <b>NMF</b> — representação <b>esparsa e não negativa</b>.</p></div>')
  ],
  V3:[
    sl("Ciclo de vida, papéis e governança",
      '<div class="box"><span class="bl">CRISP-DM — as seis fases</span>'+
      '<p class="mn"><em>1 Entendimento do NEGÓCIO → 2 Entendimento dos DADOS → 3 PREPARAÇÃO dos dados → 4 MODELAGEM → 5 AVALIAÇÃO → 6 IMPLANTAÇÃO</em></p>'+
      '<p>É <b>iterativo e cíclico</b> — volta-se a fases anteriores e o ciclo recomeça após a entrega.</p></div>'+
      '<div class="box trap"><span class="bl">A pergunta que cai</span>'+
      '<p>“Qual a <b>terceira</b> fase?” → <b>Preparação dos dados</b>. Conte na mão: negócio, dados, preparação. E lembre que a <b>primeira é o NEGÓCIO</b>, não os dados.</p></div>'+
      '<div class="box"><span class="bl">Pré-processamento</span>'+
      '<p><b>Limpeza</b>, <b>adequação de formato</b>, <b>exclusão de brancos</b>, tratamento de <b>outliers</b> e <b>criação de atributos derivados</b>. É a fase que <b>mais consome tempo</b>, e a ferramenta é de <b>ETL</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Quem faz o quê</span>'+
      '<ul><li><b>Cientista de dados</b> — hipóteses, modelos, interpretação.</li>'+
      '<li><b>Engenheiro de dados</b> — pipelines e infraestrutura.</li>'+
      '<li><b>Analista de dados</b> — relatórios, painéis, indicadores.</li>'+
      '<li><b>Steward / administrador de dados</b> — qualidade, definição e conformidade.</li></ul></div>'+
      '<div class="box"><span class="bl">Governança de dados</span>'+
      '<p><b>Políticas, papéis, processos e padrões</b> que asseguram <b>qualidade, segurança, disponibilidade e conformidade</b>. Não é ferramenta — é <b>arranjo de decisão</b>.</p>'+
      '<p><b>Três tipos (edital):</b> <b>CENTRALIZADA</b> (uma área decide) · <b>COMPARTILHADA</b> (responsabilidade distribuída) · <b>COLEGIADA</b> (<b>comitê</b> com várias áreas).</p></div>')
  ],
  V4:[
    sl("BI, repositórios, arquiteturas e NoSQL",
      '<div class="box"><span class="bl">Arquitetura de BI — quatro componentes</span>'+
      '<p><b>Data Warehouse</b> · <b>Análise de negócio</b> · <b>Business Process Management</b> · <b>Interfaces do usuário</b>.</p></div>'+
      '<div class="box trap"><span class="bl">DW × Data Mart × Data Lake</span>'+
      '<ul><li><b>Data Warehouse</b> — central, <b>integrado, histórico, orientado a assunto e NÃO volátil</b>. Dado <b>tratado</b>.</li>'+
      '<li><b>Data Mart</b> — <b>recorte</b> do DW por departamento ou assunto.</li>'+
      '<li><b>Data Lake</b> — dado <b>bruto</b>, qualquer formato, sem esquema na entrada.</li></ul>'+
      '<p class="mn"><em>DW = schema on WRITE · Lake = schema on READ</em></p></div>'+
      '<div class="box"><span class="bl">ETL × ELT — e quando escolher cada um</span>'+
      '<p><b>ETL</b>: transforma <b>antes</b> de carregar → padrão do <b>Data Warehouse</b>.<br><b>ELT</b>: carrega bruto e transforma <b>depois</b> → padrão do <b>Data Lake</b>.</p>'+
      '<p><b>Prefira ETL/DW</b> quando houver <b>dados sensíveis</b>, <b>volume moderado a pequeno</b>, fontes <b>relacionais</b> e <b>casos de uso conhecidos</b> — a transformação prévia dá <b>controle</b> e ajuda na <b>privacidade</b>.</p>'+
      '<p><b>Prefira ELT/Lake</b> com <b>grandes volumes</b>, dados <b>semi e não estruturados</b> e casos de uso <b>ainda indefinidos</b>.</p></div>'+
      '<div class="box"><span class="bl">OLTP × OLAP</span>'+
      '<p><b>OLTP</b>: transações operacionais, dado <b>atual e detalhado</b>. <b>OLAP</b>: análise <b>multidimensional</b>, dado <b>histórico e agregado</b>. Operações: <b>drill down</b>, <b>roll up</b>, <b>slice</b>, <b>dice</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Lambda × Kappa · e o teorema CAP</span>'+
      '<p><b>LAMBDA = DOIS caminhos</b> (camada de <b>lote</b> + camada de <b>velocidade</b>, unidas na camada de serviço).<br>'+
      '<b>KAPPA = UM caminho</b> (tudo é <b>streaming</b>).</p>'+
      '<p><b>CAP:</b> <b>C</b>onsistência · <b>A</b>vailability (<b>disponibilidade</b>) · <b>P</b>artition tolerance (<b>tolerância a partições</b>). Só se garantem <b>dois dos três</b>. A banca troca o A por <b>atomicidade</b> e o P por <b>performance</b>.</p></div>'+
      '<div class="box tip"><span class="bl">NoSQL, Python e R</span>'+
      '<p><b>Quatro modelos:</b> chave-valor (Redis) · documento (<b>MongoDB</b>) · colunar (Cassandra) · grafos (Neo4j). No MongoDB, <b>pretty()</b> formata o resultado do <b>find</b>.</p>'+
      '<p><b>Python:</b> índice começa em <b>0</b>; <b>[::-1]</b> inverte; <b>[::2]</b> pega as posições pares.<br>'+
      '<b>R:</b> em fator com NA, use <b>sum(as.numeric(as.character(x)), na.rm = TRUE)</b> — sem o <b>as.character</b> você soma o código do nível. <b>pivot_wider</b> alarga a tabela e preenche com <b>NA</b>.</p></div>')
  ]
};

var EX = {
S1:{t:"order", instr:"Ordene a escada do conhecimento",
  items:["Dado","Informação","Conhecimento"],
  why:"Dado bruto → contextualizado → aplicado à decisão."},

S2:{t:"sort", instr:"Classifique o tipo de dado",
  buckets:["Estruturado","Semiestruturado","Não estruturado"],
  items:[["Tabela de banco relacional",0],["Planilha",0],
         ["JSON",1],["XML",1],["Arquivo de log",1],
         ["Texto livre",2],["Imagem",2],["Áudio e vídeo",2]],
  why:"Semiestruturado tem marcação, mas não esquema rígido."},

S3:{t:"multi", instr:"Marque os TRÊS Vs clássicos do Big Data",
  options:["Volume","Velocidade","Variedade",
           "Variança","Viscosidade","Volatilidade","Vocabulário"],
  answers:[0,1,2],
  why:"Veracidade e valor vieram depois; as demais são iscas da banca."},

S4:{t:"match", instr:"Ligue cada tipo de análise à sua pergunta",
  pairs:[["Descritiva","O que aconteceu?"],["Diagnóstica","Por que aconteceu?"],
         ["Preditiva","O que vai acontecer?"],["Prescritiva","O que devo fazer?"]],
  why:"A complexidade e o valor sobem juntos até a prescritiva."},

S5:{t:"sort", instr:"Classifique o paradigma de aprendizado",
  buckets:["Supervisionado","Não supervisionado","Por reforço"],
  items:[["Classificação",0],["Regressão",0],["k-NN",0],
         ["Agrupamento (clustering)",1],["Regras de associação",1],
         ["Redução de dimensionalidade",1],["Modelagem de tópicos",1],
         ["Aprendizado por tentativa e erro com recompensas",2]],
  why:"A pergunta-chave é: existe rótulo nos dados de treino?"},

S6:{t:"mc", instr:"Com k-NN e k=3, o ponto novo tem vizinhos das classes A, B e B. Qual a classe prevista?",
  options:["B","A","Empate, indefinida","Depende da distância do vizinho A"],
  answer:0,
  why:"Maioria simples entre os k vizinhos mais próximos."},

S7:{t:"wordbank", instr:"Monte a fórmula da CONFIANÇA de uma regra de associação",
  target:["sup","(","X","∪","Y",")","/","sup","(","X",")"],
  extra:["N","sup(Y)","N²"],
  why:"O denominador é o suporte de X — a isca da banca é sup(Y)."},

S8:{t:"sort", instr:"Qual métrica tem cada denominador?",
  buckets:["Suporte","Confiança"],
  items:[["Divide pelo total de transações (N)",0],
         ["Divide pelo suporte de X",1]],
  why:"Suporte olha o todo; confiança olha só quem tem X."},

S9:{t:"mc", instr:"Para modelagem de tópicos com prioridade em interpretabilidade e inspeção dos resultados, a técnica apropriada é:",
  options:["NMF, pela representação esparsa e não negativa",
           "LDA, pela captura de informação sintática",
           "LSA, pela distância média dos tópicos",
           "ESA, pela definição explícita de tópicos a priori"],
  answer:0,
  why:"Questão TJ-DFT/2022 — valores não negativos são mais fáceis de ler."},

S10:{t:"order", instr:"Ordene as seis fases do CRISP-DM",
  items:["Entendimento do negócio","Entendimento dos dados","Preparação dos dados","Modelagem","Avaliação","Implantação"],
  why:"A terceira é a preparação dos dados — pergunta literal de prova."},

S11:{t:"mc", instr:"A terceira fase do CRISP-DM corresponde:",
  options:["à preparação dos dados","ao entendimento do negócio",
           "ao entendimento dos dados","à modelagem"],
  answer:0,
  why:"Questão SEFAZ-AM/2022."},

S12:{t:"mc", instr:"Para limpar dados, adequar formatos, excluir brancos e criar atributos derivados antes da mineração, usa-se:",
  options:["ETL","OLAP","Apriori","Data Lake"],
  answer:0,
  why:"Questão TJ-DFT/2022 — é o pré-processamento, anterior à carga."},

S13:{t:"match", instr:"Ligue cada papel à sua função",
  pairs:[["Cientista de dados","Formula hipóteses e treina os modelos"],
         ["Engenheiro de dados","Constrói e mantém pipelines e infraestrutura"],
         ["Analista de dados","Produz relatórios, painéis e indicadores"],
         ["Steward de dados","Zela pela qualidade, definição e conformidade"]],
  why:"Papéis distintos, cobrados por associação."},

S14:{t:"match", instr:"Ligue cada tipo de governança de dados",
  pairs:[["Centralizada","Decisões concentradas em uma única área"],
         ["Compartilhada","Responsabilidade distribuída entre as áreas"],
         ["Colegiada","Decisões tomadas por comitê com representantes de várias áreas"]],
  why:"Os três tipos citados expressamente no edital."},

S15:{t:"multi", instr:"Marque os componentes da arquitetura de um sistema de BI",
  options:["Data warehouse","Análise de negócio","Business process management",
           "Interfaces do usuário","Data lake","Ciência de dados"],
  answers:[0,1,2,3],
  why:"Questão SEFAZ-AM/2022 — quatro componentes."},

S16:{t:"sort", instr:"Data Warehouse ou Data Lake?",
  buckets:["Data Warehouse","Data Lake"],
  items:[["Dado já tratado e estruturado",0],["Esquema na escrita (schema on write)",0],
         ["Integrado, histórico e não volátil",0],["Padrão ETL",0],
         ["Dado bruto, no formato original",1],["Esquema na leitura (schema on read)",1],
         ["Aceita semiestruturados e não estruturados",1],["Padrão ELT",1]],
  why:"A diferença essencial é quando o esquema é aplicado."},

S17:{t:"mc", instr:"Organização com dados sensíveis, volume moderado a pequeno e fontes majoritariamente relacionais. Qual a proposta adequada?",
  options:["Armazém de dados, pois o ETL transforma antes da carga e dá maior controle",
           "Lago de dados, pois dispensa hardware especializado",
           "Lago de dados, por ter menor latência até a carga",
           "Armazém de dados, por permitir dados não estruturados"],
  answer:0,
  why:"Questão CGU/2022 — controle e conformidade com privacidade."},

S18:{t:"sort", instr:"OLTP ou OLAP?",
  buckets:["OLTP","OLAP"],
  items:[["Transações operacionais do dia a dia",0],["Dado atual e detalhado",0],
         ["Análise multidimensional em cubos",1],["Dado histórico e agregado",1],
         ["Drill down, roll up, slice e dice",1]],
  why:"OLTP registra; OLAP analisa."},

S19:{t:"sort", instr:"Arquitetura Lambda ou Kappa?",
  buckets:["Lambda","Kappa"],
  items:[["Dois caminhos de processamento",0],["Camada de lote e camada de velocidade",0],
         ["Um único caminho",1],["Tudo tratado como fluxo (streaming)",1],
         ["Elimina a divisão entre lote e velocidade",1]],
  why:"Questão SEFAZ-AM/2022 — a banca inverte os dois nomes."},

S20:{t:"multi", instr:"No teorema CAP, as letras correspondem a:",
  options:["Consistência","Availability (disponibilidade)","Partition tolerance (tolerância a partições)",
           "Atomicidade","Performance"],
  answers:[0,1,2],
  why:"Questão SEFAZ-AM/2022 — atomicidade e performance são as iscas."},

S21:{t:"match", instr:"Ligue cada modelo NoSQL ao seu exemplo",
  pairs:[["Chave-valor","Redis"],["Documento","MongoDB"],
         ["Colunar","Cassandra"],["Grafos","Neo4j"]],
  why:"Quatro modelos cobrados por associação."},

S22:{t:"mc", instr:"No MongoDB, o método que exibe o resultado do find de forma formatada é:",
  options:["pretty","format","organize","tidy"],
  answer:0,
  why:"Questão TJ-RO/2021."},

S23:{t:"mc", instr:"Em R, para somar os valores de um fator que contém NA, o comando correto é:",
  options:["sum(as.numeric(as.character(x)), na.rm = TRUE)",
           "sum(x)",
           "sum(as.numeric(x), na.rm = TRUE)",
           "sum(as.numeric(x), na.rm = FALSE)"],
  answer:0,
  why:"Questão TJ-DFT/2022 — sem as.character somam-se os códigos dos níveis."},

S24:{t:"mc", instr:"Em Python, aplicando [::-1] e depois [::2] sobre [1,2,3,4,5,6], o resultado é:",
  options:["6, 4, 2","5, 3, 1","1, 3, 5","2, 4, 6"],
  answer:0,
  why:"Questão TCU/2022 — invertida fica [6,5,4,3,2,1]; índices 0, 2 e 4."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Monte seu caderno no TEC — Fluência em Dados (FGV)","https://www.tecconcursos.com.br/questoes/filtro","filtro"],
  ["Banco de questões: ciência de dados, Big Data e BI","https://www.tecconcursos.com.br/questoes/filtro","filtro"]
];
var TECNOTA = "Esta matéria foi montada a partir do conteúdo programático do edital da Receita Federal (FGV) e de questões reais com gabarito comentado — SEFAZ-AM, TCU, CGU, TJ-DFT e TJ-RO, todas de banca FGV. Não há resumo de curso por trás, então trate a teoria como mapa do edital e complemente com questões: no TEC, filtre por “Fluência em Dados” e por banca FGV, e busque também provas de outros órgãos com o mesmo perfil de conteúdo.";

var UNITS = [
  {n:1, title:"Dados, Big Data e tipos de análise", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"A escada do dado, os Vs e a analytics", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · dado, informação e formatos", xp:25, data:["S1","S2","T0","T1","T2"]},
    {id:"K3", type:"drill",  title:"Praticar · os Vs do Big Data",         xp:25, data:["S3","T3","T4","T5","T6","T7"]},
    {id:"K4", type:"drill",  title:"Praticar · tipos de análise",          xp:25, data:["S4","T8","T9"]},
    {id:"K5", type:"flash",  title:"Flashcards · dados e Big Data",        xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12]}
  ]},
  {n:2, title:"Aprendizado de máquina e PLN", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Paradigmas, k-NN, associação e tópicos", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · os três paradigmas",        xp:25, data:["S5","T10","T11","T12","T13"]},
    {id:"K8", type:"drill",  title:"Praticar · k-NN",                      xp:25, data:["S6","T14","T15"]},
    {id:"K9", type:"drill",  title:"Praticar · suporte e confiança",       xp:25, data:["S7","S8","T16","T17","T18","T19"]},
    {id:"K10",type:"drill",  title:"Praticar · modelagem de tópicos",      xp:25, data:["S9","T20","T21"]},
    {id:"K11",type:"flash",  title:"Flashcards · aprendizado e PLN",       xp:15, data:[13,14,15,16,17,18,19,20,21,22,23,24,25]}
  ]},
  {n:3, title:"Ciclo de vida, papéis e governança", cvar:"u3", lessons:[
    {id:"K12",type:"teoria", title:"CRISP-DM, quem faz o quê e governança", xp:10, data:"V3"},
    {id:"K13",type:"drill",  title:"Praticar · as seis fases",             xp:25, data:["S10","S11","T22","T23","T24","T25","T26"]},
    {id:"K14",type:"drill",  title:"Praticar · pré-processamento e papéis", xp:25, data:["S12","S13","T27","T28"]},
    {id:"K15",type:"drill",  title:"Praticar · governança de dados",       xp:25, data:["S14","T29","T30","T31"]},
    {id:"K16",type:"flash",  title:"Flashcards · ciclo e governança",      xp:15, data:[26,27,28,29,30,31,32,33,34,35,36,37,38]}
  ]},
  {n:4, title:"BI, repositórios, arquiteturas e NoSQL", cvar:"u4", lessons:[
    {id:"K17",type:"teoria", title:"DW, lake, ETL, Lambda, Kappa e CAP",   xp:10, data:"V4"},
    {id:"K18",type:"drill",  title:"Praticar · BI e repositórios",         xp:25, data:["S15","S16","T32","T33","T34","T35","T36"]},
    {id:"K19",type:"drill",  title:"Praticar · ETL × ELT e OLAP",          xp:25, data:["S17","S18","T37","T38","T39","T40","T41"]},
    {id:"K20",type:"drill",  title:"Praticar · Lambda, Kappa e CAP",       xp:25, data:["S19","S20","T42","T43","T44","T45","T46","T47","T48"]},
    {id:"K21",type:"drill",  title:"Praticar · NoSQL, Python e R",         xp:25, data:["S21","S22","S23","S24","T49","T50","T51","T52","T53","T54","T55","T56","T57"]},
    {id:"K22",type:"flash",  title:"Flashcards · arquiteturas e código",   xp:15, data:[39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68]}
  ]},
  {n:5, title:"Fixação", cvar:"u5", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",              xp:60, data:null},
    {id:"K23", type:"missao", title:"Missão TEC Concursos",                xp:15, data:null},
    {id:"K24", type:"prova",  title:"Simulado cronometrado",               xp:100, data:null}
  ]}
];

/* ---------- comentários completos, por índice de QS ---------- */
var COM={
0:"<p>A escada da área, do mais cru ao mais maduro: <b>dado</b> (registro bruto, sem contexto) → <b>informação</b> (dado contextualizado e organizado) → <b>conhecimento</b> (informação aplicada, com experiência) → <b>sabedoria</b> (conhecimento usado para decidir).</p><p>Chamam de pirâmide <b>DIKW</b>. O dado “38” não diz nada; “38 °C de febre” é informação.</p>",
1:"<p><b>JSON</b> e <b>XML</b> são <b>semiestruturados</b>: têm marcação e hierarquia (chaves, tags), mas não dependem de esquema rígido definido antes.</p><p>A escala completa: <b>estruturado</b> = tabela de banco relacional, CSV · <b>semiestruturado</b> = JSON, XML, YAML, e-mail · <b>não estruturado</b> = texto livre, imagem, áudio, vídeo.</p>",
2:"<p><b>Não estruturado</b> = sem modelo predefinido: texto corrido, imagem, áudio, vídeo, PDF digitalizado.</p><p>Estima-se que representem a <b>maior parte</b> dos dados das organizações — daí o peso do processamento de linguagem natural e da visão computacional.</p>",
3:"<p>Os <b>três Vs originais</b>, de Doug Laney (2001): <b>Volume</b> (quantidade), <b>Velocidade</b> (ritmo de geração e processamento) e <b>Variedade</b> (formatos diferentes).</p><p>Mnemônico simples: <b>V-V-V</b> — quanto, quão rápido, de quantos jeitos.</p>",
4:"<p>Alternativa-armadilha clássica: monta uma tripla com palavras que <b>existem</b> no assunto, mas não são as três originais.</p><p>Os originais são <b>volume, velocidade e variedade</b>. “Variança” nem faz parte do vocabulário de Big Data — quando aparecer uma palavra estranha na tripla, é sinal de que o item é falso.</p>",
5:"<p>Os Vs <b>acrescentados</b> depois: <b>Veracidade</b> (confiabilidade e qualidade do dado) e <b>Valor</b> (retorno que a análise gera). Alguns autores somam <b>Variabilidade</b> e <b>Visualização</b>.</p><p>Na prova: se a questão pedir “os Vs fundamentais/originais”, são três. Se pedir “os Vs do Big Data” sem qualificar, veracidade e valor entram.</p>",
6:"<p>Não são sinônimos. <b>Big Data</b> descreve uma <b>característica dos dados</b> (volume, velocidade, variedade); <b>ciência de dados</b> é a <b>disciplina</b> que extrai conhecimento deles.</p><p>Dá para fazer ciência de dados com uma planilha pequena, e dá para ter Big Data parado sem nenhuma análise. Um não implica o outro.</p>",
7:"<p>Ciência de dados é o cruzamento de <b>três</b> campos: <b>estatística/matemática</b>, <b>computação</b> e <b>conhecimento do domínio</b> do negócio.</p><p>É o famoso diagrama de Venn de Drew Conway. Faltando o domínio, sai modelo tecnicamente correto e inútil na prática.</p>",
8:"<p>As <b>quatro análises</b>, em ordem crescente de complexidade e valor:</p><ul><li><b>Descritiva</b> — o que aconteceu?</li><li><b>Diagnóstica</b> — por que aconteceu?</li><li><b>Preditiva</b> — o que provavelmente acontecerá?</li><li><b>Prescritiva</b> — o que devo fazer?</li></ul><p>Decore a ordem: descreve, diagnostica, prediz, prescreve.</p>",
9:"<p>Invertido. A <b>prescritiva</b> é a de <b>maior</b> complexidade e <b>maior</b> valor agregado — ela não só prevê, como recomenda a ação (otimização, simulação).</p><p>A de <b>menor</b> complexidade é a <b>descritiva</b>. Complexidade e valor crescem juntos na escada.</p>",
10:"<p><b>Supervisionado</b> = dados <b>rotulados</b>: cada exemplo de treino já vem com a resposta certa.</p><p>Suas duas tarefas: <b>classificação</b> (rótulo categórico — fraude/não fraude) e <b>regressão</b> (valor contínuo — preço, receita).</p>",
11:"<p><b>Clustering</b> é <b>não supervisionado</b>: não existe rótulo, o algoritmo descobre grupos pela semelhança entre os pontos.</p><p>Não confunda com <b>classificação</b>, que também separa em grupos — mas em grupos <b>já conhecidos e rotulados</b>. A pergunta-chave é: existe resposta certa no treino?</p>",
12:"<p>Tarefas <b>não supervisionadas</b>: <b>agrupamento</b>, <b>regras de associação</b>, <b>redução de dimensionalidade</b> (PCA, NMF) e <b>detecção de anomalias</b>.</p><p>Todas buscam <b>estrutura oculta</b> nos dados, sem gabarito prévio.</p>",
13:"<p><b>Aprendizado por reforço</b>: um <b>agente</b> interage com um <b>ambiente</b>, escolhe <b>ações</b> e recebe <b>recompensas</b> ou punições, aprendendo a política que maximiza o retorno acumulado.</p><p>É o terceiro paradigma, ao lado do supervisionado e do não supervisionado. Casos típicos: jogos, robótica, precificação dinâmica.</p>",
14:"<p><b>k-NN</b> — supervisionado, baseado em <b>distância</b>. Para classificar um ponto novo, olha os <b>k</b> vizinhos mais próximos e adota a classe <b>majoritária</b>.</p><p>Detalhes que caem: é <b>preguiçoso</b> (não constrói modelo, guarda os dados) · exige <b>normalizar</b> as variáveis · <b>k ímpar</b> evita empate.</p>",
15:"<p>Maioria simples: <b>2 votos em B</b> contra 1 em A, com k = 3 → classe <b>B</b>.</p><p>Repare por que se usa k ímpar em problemas binários: com k = 2 e um voto para cada lado, haveria empate a resolver por critério adicional.</p>",
16:"<p><b>Confiança(X ⇒ Y) = sup(X ∪ Y) / sup(X)</b>.</p><p>Leia como probabilidade condicional: “dentre as transações que têm X, que fração também tem Y?”. Por isso o denominador é o suporte de <b>X</b> — o antecedente.</p>",
17:"<p>Dois erros no mesmo item: o denominador é <b>sup(X)</b>, não sup(Y); e o numerador usa a <b>união</b> dos itens na transação, não a interseção.</p><p>Dividir por sup(Y) daria a regra invertida (Y ⇒ X). A direção da seta manda no denominador.</p>",
18:"<p><b>Suporte</b> = proporção do <b>total</b> de transações em que X e Y aparecem juntos. É popularidade da regra.</p><p>O trio completo: <b>suporte</b> (frequência) · <b>confiança</b> (precisão condicional) · <b>lift</b> (quantas vezes a regra é melhor que o acaso — acima de 1, há associação positiva).</p>",
19:"<p><b>Apriori</b> — mineração de <b>regras de associação</b>. O princípio que dá nome: se um conjunto é infrequente, <b>todos os seus superconjuntos</b> também são, e podem ser descartados sem teste.</p><p>É isso que torna viável varrer milhões de combinações. Caso clássico: análise de cesta de compras.</p>",
20:"<p><b>Modelagem de tópicos</b> (LDA, NMF) é <b>não supervisionada</b>: descobre assuntos latentes num conjunto de textos sem nenhum rótulo prévio.</p><p>Compare com <b>classificação de texto</b>, que é supervisionada porque parte de documentos já etiquetados. Mesmo insumo, paradigmas opostos.</p>",
21:"<p><b>NMF</b> — fatoração de matrizes <b>não negativas</b>. Como só admite valores ≥ 0, os componentes viram somas de partes, e não combinações com cancelamento.</p><p>Daí a <b>interpretabilidade</b>: cada tópico é uma lista de palavras que somam, legível por humano. É a vantagem sobre o PCA, que produz componentes com sinais negativos e difíceis de explicar.</p>",
22:"<p><b>CRISP-DM</b> — Cross Industry Standard Process for Data Mining, <b>seis fases</b>:</p><ol><li>Entendimento do <b>negócio</b></li><li>Entendimento dos <b>dados</b></li><li><b>Preparação</b> dos dados</li><li><b>Modelagem</b></li><li><b>Avaliação</b></li><li><b>Implantação</b></li></ol><p>Decore a ordem — a banca pergunta pela posição de uma fase específica.</p>",
23:"<p>Contando a partir do negócio: 1ª entendimento do <b>negócio</b>, 2ª entendimento dos <b>dados</b>, <b>3ª preparação dos dados</b>.</p><p>A armadilha é começar a contar pelos dados. O CRISP-DM sempre parte do <b>problema de negócio</b>, nunca da base.</p>",
24:"<p>A primeira é o <b>entendimento do negócio</b>: definir o objetivo, os critérios de sucesso e as restrições <b>antes</b> de olhar qualquer dado.</p><p>É a fase que evita o erro mais caro da área — construir um modelo excelente para a pergunta errada.</p>",
25:"<p>O CRISP-DM é <b>iterativo e cíclico</b>: as setas voltam. Da avaliação se retorna ao entendimento do negócio; da modelagem, à preparação dos dados.</p><p>Se o enunciado disser “estritamente linear”, “em cascata” ou “sem retorno”, é falso.</p>",
26:"<p>A <b>preparação dos dados</b> costuma consumir a maior parte do tempo do projeto — as estimativas mais citadas falam em <b>60% a 80%</b>.</p><p>O que cabe nela: limpeza, tratamento de <b>faltantes</b>, padronização de formatos, remoção de duplicatas, integração de fontes e criação de <b>atributos derivados</b>.</p>",
27:"<p><b>ETL</b> — <b>Extract, Transform, Load</b>. É a ferramenta do pré-processamento: extrai das fontes, <b>transforma</b> (limpa, padroniza, deriva atributos) e carrega no destino.</p><p>O verbo do meio é o que responde a questão: limpar, adequar formato e criar atributo derivado é <b>transformação</b>.</p>",
28:"<p>Os três papéis que a banca separa:</p><ul><li><b>Engenheiro de dados</b> — constrói e mantém <b>pipelines</b> e infraestrutura. Garante que o dado chegue.</li><li><b>Cientista de dados</b> — <b>modelos</b>, estatística, machine learning.</li><li><b>Analista de dados</b> — <b>relatórios</b>, dashboards, análise descritiva.</li></ul><p>Sem engenheiro não há dado; sem cientista não há previsão; sem analista ninguém entende.</p>",
29:"<p><b>Governança de dados</b> = políticas, <b>papéis</b>, processos e padrões que asseguram <b>qualidade, segurança e conformidade</b>, tratando o dado como <b>ativo organizacional</b>.</p><p>Papéis típicos: <b>data owner</b> (responde pelo dado), <b>data steward</b> (cuida do dia a dia), <b>data custodian</b> (guarda técnica).</p>",
30:"<p>Os <b>três tipos</b> do conteúdo programático: <b>centralizada</b> · <b>compartilhada</b> · <b>colegiada</b>.</p><p>A diferença está em <b>quem decide</b>: um núcleo único, as áreas junto com o núcleo, ou um comitê com representação de todas.</p>",
31:"<p><b>Colegiada</b> = decisões tomadas por um <b>comitê</b> com representantes de várias áreas. Ganha em legitimidade e visão do todo; perde em velocidade.</p><p>Contraste: a <b>centralizada</b> decide rápido e padroniza, mas fica distante do negócio; a <b>compartilhada</b> divide a responsabilidade entre núcleo e áreas.</p>",
32:"<p>Os <b>quatro componentes</b> da arquitetura de BI cobrados pela FGV: <b>data warehouse</b> · <b>análise de negócio</b> (business analytics) · <b>business process management</b> · <b>interfaces do usuário</b>.</p><p>Leia como um fluxo: onde o dado mora → o que se faz com ele → como isso vira processo → como o usuário vê.</p>",
33:"<p>As <b>quatro características</b> do DW, de Inmon: <b>orientado a assunto</b> · <b>integrado</b> · <b>não volátil</b> · <b>variável no tempo</b> (histórico).</p><p>O item errou em duas: disse <b>volátil</b> e <b>apenas dados correntes</b>. O DW é exatamente o contrário — guarda a série histórica e não sofre alteração depois da carga.</p>",
34:"<p><b>Data mart</b> = recorte do DW para um <b>departamento ou assunto</b> específico (vendas, RH, arrecadação).</p><p>Duas escolas: <b>Inmon</b> (top-down — constrói o DW corporativo e dele derivam os marts) e <b>Kimball</b> (bottom-up — constrói marts que se integram no DW).</p>",
35:"<p><b>Data lake</b> = dados no formato <b>bruto e original</b>, de qualquer tipo, com o esquema aplicado só na <b>leitura</b> (<i>schema on read</i>).</p><p>Vantagem: flexibilidade total. Risco: sem governança vira <b>data swamp</b> — pântano de dados que ninguém sabe usar.</p>",
36:"<p>Invertido:</p><ul><li><b>Data warehouse</b> → <b>schema on write</b>: o esquema é definido e validado <b>na carga</b>.</li><li><b>Data lake</b> → <b>schema on read</b>: o esquema é aplicado <b>na consulta</b>.</li></ul><p>Casa com o par ETL/ELT: DW transforma antes de carregar; lake carrega bruto e transforma depois.</p>",
37:"<p><b>ETL</b>: a <b>T</b> vem antes da <b>L</b> — transforma e só então carrega. Chega ao destino já limpo, padronizado e conformado.</p><p>É o padrão do <b>data warehouse</b>, e é o que dá mais <b>controle</b> e previsibilidade sobre o que entra.</p>",
38:"<p><b>ELT</b>: carrega <b>bruto</b> e transforma <b>no destino</b>, aproveitando o poder de processamento do próprio repositório.</p><p>É o padrão do <b>data lake</b> e da nuvem. Ganha em velocidade de ingestão e flexibilidade; exige governança forte para não virar pântano.</p>",
39:"<p>Três premissas do enunciado apontam para o <b>DW com ETL</b>: dados <b>sensíveis</b>, volume <b>moderado a pequeno</b> e fontes <b>relacionais</b>.</p><p>A razão decisiva é a <b>transformação prévia</b>: ela permite mascarar, anonimizar e validar <b>antes</b> de o dado repousar no destino — o que atende melhor a exigências de privacidade. Um lake guardaria o dado sensível em estado bruto.</p>",
40:"<p>Trocou os dois:</p><ul><li><b>OLTP</b> — transações <b>operacionais</b>, muitas escritas curtas, dado <b>corrente</b>, modelo <b>normalizado</b>.</li><li><b>OLAP</b> — análise <b>multidimensional</b> de dados <b>históricos</b>, leituras complexas, modelo <b>dimensional</b> (estrela, floco de neve).</li></ul><p>T de <b>T</b>ransação, A de <b>A</b>nálise.</p>",
41:"<p>As <b>operações OLAP</b> no cubo:</p><ul><li><b>Drill down</b> — desce ao detalhe (ano → mês).</li><li><b>Roll up</b> — sobe ao agregado (mês → ano).</li><li><b>Slice</b> — fatia fixando <b>uma</b> dimensão.</li><li><b>Dice</b> — recorta um subcubo fixando <b>várias</b>.</li><li><b>Pivot</b> — gira o cubo, trocando os eixos.</li></ul><p>Slice = uma faca; dice = cubinhos.</p>",
42:"<p><b>Arquitetura Lambda</b> — <b>dois</b> caminhos: camada de <b>lote</b> (batch, precisa e lenta) e camada de <b>velocidade</b> (speed, rápida e aproximada), unidas na camada de <b>serviço</b>.</p><p>Preço que se paga: a mesma lógica precisa ser implementada <b>duas vezes</b>, em dois motores diferentes.</p>",
43:"<p>Trocou os nomes. Quem divide em <b>dois caminhos</b> é a <b>Lambda</b>. A <b>Kappa</b> tem um <b>único</b> caminho, de <b>streaming</b>.</p><p>Ordem histórica que ajuda: primeiro veio a Lambda (dupla), depois a Kappa a simplificou. Kappa = um só K, um só caminho.</p>",
44:"<p><b>Kappa</b>: tudo é <b>fluxo</b>. O reprocessamento histórico se faz relendo o log de eventos desde o início, em vez de manter uma camada de lote separada.</p><p>Vantagem: <b>uma</b> base de código. Limitação: depende de um log durável e reproduzível (tipicamente Kafka).</p>",
45:"<p>Os <b>três modelos de serviço</b> (NIST): <b>IaaS</b> (infraestrutura) · <b>PaaS</b> (plataforma) · <b>SaaS</b> (software).</p><p>Quanto mais alto, <b>menos</b> o cliente gerencia. Analogia da pizza: IaaS = você assa em casa · PaaS = pede massa pronta · SaaS = come na pizzaria.</p>",
46:"<p>Os <b>quatro modelos NoSQL</b>:</p><ul><li><b>Chave-valor</b> — Redis, DynamoDB.</li><li><b>Documento</b> — MongoDB, CouchDB.</li><li><b>Colunar</b> (família de colunas) — Cassandra, HBase.</li><li><b>Grafos</b> — Neo4j.</li></ul><p>Grafos para relacionamento (rede social, fraude); colunar para escrita massiva; documento para JSON.</p>",
47:"<p><b>CAP</b> = <b>C</b>onsistency · <b>A</b>vailability (disponibilidade) · <b>P</b>artition tolerance.</p><p>A armadilha põe palavras plausíveis do mundo de banco de dados — “atomicidade” é do <b>ACID</b>, e “performance” não está em nenhum dos dois acrônimos.</p>",
48:"<p><b>Teorema de Brewer</b>: na presença de partição de rede, garantem-se no máximo <b>dois</b> dos três atributos.</p><p>Como a partição é um fato da vida em sistema distribuído, a escolha real é entre <b>CP</b> (consistente, pode ficar indisponível) e <b>AP</b> (disponível, pode devolver dado desatualizado).</p>",
49:"<p>No MongoDB, <b>.pretty()</b> formata o resultado do <b>find()</b> com indentação legível.</p><p>Encadeamentos vizinhos que já caíram: <b>.limit(n)</b>, <b>.sort({campo: 1})</b> para crescente e <b>.count()</b>.</p>",
50:"<p>O edital da Receita Federal cita expressamente <b>Python</b> e <b>R</b>.</p><p>Divisão prática: <b>Python</b> domina produção e machine learning (pandas, scikit-learn); <b>R</b> domina estatística e visualização acadêmica (tidyverse, ggplot2). A FGV cobra sintaxe dos dois.</p>",
51:"<p>Em R, o <b>fator</b> guarda internamente <b>códigos inteiros</b> dos níveis, não os valores que você vê. Por isso é preciso passar por <b>as.character()</b> antes de <b>as.numeric()</b>.</p><p>E <b>na.rm = TRUE</b> é obrigatório: sem ele, um único <b>NA</b> faz a soma inteira retornar NA.</p>",
52:"<p><b>as.numeric()</b> direto sobre fator devolve o <b>código do nível</b> (1, 2, 3...), na ordem alfabética dos rótulos — não o rótulo.</p><p>Um fator com os valores 10, 20 e 30 retorna 1, 2 e 3. É o erro silencioso mais conhecido do R, e por isso cai tanto.</p>",
53:"<p><b>pivot_wider()</b> (tidyr) leva os dados do formato <b>longo</b> para o <b>largo</b>: valores de uma coluna viram <b>novas colunas</b>, com <b>NA</b> onde não houver correspondência.</p><p>A inversa é <b>pivot_longer()</b>. Nomes antigos, ainda citados: spread e gather.</p>",
54:"<p>A fatia em Python é <b>[início:fim:passo]</b>. Com passo <b>−1</b> e os outros campos vazios, ela percorre a sequência de trás para frente: <b>[::-1]</b> <b>inverte</b>.</p><p>Vale para lista, tupla e string. O fim é sempre <b>exclusivo</b>.</p>",
55:"<p>Duas etapas: invertida, [1,2,3,4,5,6] vira <b>[6,5,4,3,2,1]</b>; o passo <b>2</b> pega os índices <b>0, 2 e 4</b> → <b>6, 4 e 2</b>.</p><p>Faça sempre nessa ordem — primeiro o que a fatia interna produz, depois a de fora. Tentar resolver de cabeça, em um passo só, é onde o erro aparece.</p>",
56:"<p>Em Python a indexação começa em <b>zero</b>: o primeiro elemento é <b>[0]</b> e o último é <b>[-1]</b>.</p><p>Consequência direta: numa lista de n elementos, o último índice válido é <b>n − 1</b>. Em <b>R</b>, ao contrário, a indexação começa em <b>1</b> — e a banca gosta de misturar os dois na mesma prova.</p>",
57:"<p><b>Pré-processamento</b> = limpeza, adequação de formato, tratamento de brancos e faltantes, e criação de <b>atributos derivados</b>. É a fase 3 do CRISP-DM e a que mais consome tempo.</p><p>Some as técnicas que a FGV cita junto: <b>normalização</b>, <b>padronização</b>, <b>discretização</b> e <b>codificação</b> de variáveis categóricas (one-hot).</p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"01", nome:"Dados, Big Data, ciência de dados e arquiteturas", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
