/* Direito Administrativo — Módulo 06: Organização da Administração Pública (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dadm06 = (function(){
"use strict";

var CARDS = [
  ["O que é entidade e como se dividem as entidades públicas?","<b>Entidade</b> é a <b>pessoa jurídica, pública ou privada, que possui personalidade jurídica</b>. A entidade pública divide-se em <b>política</b> (possui <b>autonomia política</b> = capacidade de legislar; <b>somente U, E, DF e M</b>) e <b>administrativa</b> (<b>não pode legislar</b>; possui apenas <b>autonomia administrativa</b> — ex.: autarquias e fundações públicas)."],
  ["O que é órgão público?","É uma <b>unidade com atribuição específica</b> dentro da organização do Estado, ou seja, o <b>centro de competência instituído na estrutura interna da entidade</b>. <b>Não possui personalidade jurídica</b>; por isso, respondem pelos seus atos o <b>ente federativo que o criou</b>."],
  ["Algum órgão público tem capacidade processual?","Em regra, <b>não</b>. <b>EXCEÇÃO:</b> os órgãos <b>autônomos</b> e <b>independentes</b> possuem capacidade processual para <b>impetração de mandado de segurança</b> na defesa de suas <b>prerrogativas e competências</b>."],
  ["Classificação dos órgãos quanto à estrutura e quanto à atuação funcional","<b>Estrutura:</b> <b>simples ou unitários</b> (<b>não</b> possuem subdivisões) × <b>compostos</b> (possuem subdivisões). <b>Atuação funcional:</b> <b>singulares ou unipessoais</b> (decisões tomadas por <b>uma só pessoa</b>) × <b>colegiados ou pluripessoais</b> (<b>decisões conjuntas</b>)."],
  ["Classificação dos órgãos quanto à posição estatal","<b>Independentes</b> → previstos na <b>CF</b>, <b>sem subordinação</b> a outro órgão. <b>Autônomos</b> → subordinados <b>apenas aos independentes</b>. <b>Superiores</b> → possuem atribuições de <b>direção</b>. <b>Subalternos</b> → apenas <b>execução</b> e <b>reduzido poder decisório</b>."],
  ["As três teorias das relações do Estado com seus agentes","<b>Teoria do mandato</b> → os agentes eram <b>mandatários</b> do Estado. <b>Teoria da representação</b> → os agentes eram <b>representantes</b> do Estado. <b>Teoria do órgão</b> → a pessoa jurídica <b>manifesta sua vontade por meio dos órgãos que a compõem</b> — é a <b>teoria adotada no Brasil</b>."],
  ["O que muda com a teoria do órgão?","Substitui-se a ideia de <b>representação</b> pela ideia de <b>imputação</b>. A representação considerava que o Estado <b>outorgava a responsabilidade ao agente</b>; com a imputação, os atos praticados pelos órgãos são <b>imputados ao Estado</b>. <b>Apenas a teoria do órgão</b> imputa a vontade do órgão à pessoa jurídica em que ele se encontra inserido."],
  ["Centralização × descentralização × desconcentração","<b>Centralização:</b> o Estado executa as tarefas <b>diretamente</b>, por intermédio da <b>Administração Direta</b>. <b>Descentralização:</b> o Estado <b>distribui funções para outra pessoa</b>, física ou jurídica — <b>não há hierarquia</b>. <b>Desconcentração:</b> a entidade <b>se desmembra em órgãos</b>, organizados <b>em hierarquia</b>, <b>dentro de uma mesma pessoa jurídica</b>; é <b>técnica administrativa</b> para melhorar o desempenho."],
  ["Descentralização por serviços (funcional, técnica, outorga)","O Estado transfere <b>a titularidade E a execução</b> do serviço. <b>Depende de lei.</b> <b>Prazo indeterminado.</b> <b>Controle finalístico.</b> Exemplo: <b>criação de entidades da Administração Indireta</b>."],
  ["Descentralização por colaboração (ou delegação)","O Estado transfere <b>apenas a execução</b> do serviço. Pode ser por <b>contrato</b> ou por <b>ato unilateral</b>: <b>prazo determinado</b> por meio de contrato (ex.: <b>concessão de serviço</b>) e <b>prazo indeterminado</b> por meio de ato (ex.: <b>autorização de serviço</b>). <b>Controle amplo e rígido.</b>"],
  ["Descentralização territorial","O Estado transfere <b>competências administrativas</b> para <b>entidade geograficamente delimitada</b>. Exemplo: <b>criação de Territórios Federais</b>."],

  ["Administração Direta — conceito e composição","É o <b>conjunto de órgãos</b> que integram as <b>pessoas políticas</b> do Estado (U, E, DF, M), aos quais foi atribuída competência para o exercício de atividades administrativas de forma <b>centralizada</b>. <b>Federal</b> → Presidência e Ministérios · <b>Estadual e Distrital</b> → Governador e Secretarias · <b>Municipal</b> → Prefeito e Secretarias."],
  ["Administração Indireta — conceito e categorias","É o <b>conjunto de pessoas jurídicas</b> (<b>desprovidas de autonomia política</b>) que, <b>vinculadas</b> à Administração Direta, têm competência para o exercício de atividades administrativas de forma <b>descentralizada</b>. Todas são dotadas de <b>personalidade jurídica própria</b>: <b>autarquias</b>, <b>fundações públicas</b>, <b>empresas públicas</b>, <b>sociedades de economia mista</b> e <b>consórcios públicos</b> (que integram a Adm. Indireta dos <b>entes consorciados</b>)."],
  ["Supervisão ministerial (tutela administrativa)","É a <b>vinculação</b> — <b>não é subordinação</b> — entre a Administração Direta e a Indireta. Objetivos: verificar os <b>resultados</b> das entidades descentralizadas, verificar a <b>harmonização</b> de suas atividades com a política do Governo e verificar a <b>eficiência</b> de sua gestão e a <b>manutenção de sua autonomia</b>."],
  ["Autarquia — conceito, criação e extinção","É a <b>pessoa jurídica de direito público criada diretamente por lei</b>. <b>Criação e extinção: diretamente por lei</b> (de iniciativa do Poder Executivo). A Administração Indireta existe em <b>todos os entes federados</b> e pode ser integrada por entidades vinculadas a <b>qualquer dos três Poderes</b> — o <b>Poder Judiciário pode constituir</b> autarquias e fundações."],
  ["Autarquia — objeto e regime jurídico","<b>Objeto:</b> <b>atividades típicas de Estado</b>, <b>sem fins lucrativos</b>. <b>Regime jurídico: direito público.</b>"],
  ["Autarquia — prerrogativas","<b>Prazos processuais especiais</b> · <b>prescrição quinquenal</b> · <b>precatórios</b> · <b>inscrição de seus créditos em dívida ativa</b> · <b>imunidade tributária</b> · <b>não sujeição à falência</b>. As <b>dívidas passivas</b> prescrevem em <b>cinco anos</b> contados da data do ato ou fato do qual se originaram."],
  ["Autarquia — patrimônio e pessoal","<b>Patrimônio: bens públicos</b> — <b>impenhorabilidade</b>, <b>imprescritibilidade</b> e <b>restrições à alienação</b>. <b>Pessoal: regime jurídico único</b>, igual ao da <b>Administração Direta</b>."],
  ["Autarquia — foro judicial","<b>Autarquias federais</b> → <b>Justiça Federal</b>. <b>Autarquias estaduais e municipais</b> → <b>Justiça Estadual</b>. É por isso que os processos judiciais de uma <b>agência executiva estadual</b> correm na <b>justiça estadual comum</b>: ela é uma <b>autarquia estadual</b>."],
  ["PEGADINHA dos precatórios das autarquias","Os débitos judiciais das autarquias <b>NÃO</b> seguem a mesma ordem cronológica dos precatórios do ente federativo que as criou. As autarquias possuem <b>autonomia financeira</b>, de forma que <b>cada autarquia gere sua própria lista de precatórios</b>."],
  ["Autarquias de regime especial","Possuem <b>maior autonomia</b> que as demais e seus <b>dirigentes possuem estabilidade</b>. Podem ser qualificadas em <b>Agências Executivas</b> ou <b>Agências Reguladoras</b>."],
  ["Agência executiva — quem qualifica e quais os requisitos","O <b>Poder Executivo</b> poderá qualificar como <b>Agência Executiva</b> a <b>autarquia ou fundação</b> que tenha cumprido os requisitos: <b>I</b> — ter um <b>plano estratégico de reestruturação em andamento</b>; <b>II</b> — ter celebrado <b>Contrato de Gestão</b> com o respectivo <b>Ministério supervisor</b>."],
  ["Agências reguladoras — conceito","São <b>autarquias em regime especial</b> que possuem a função de <b>fiscalizar, regular e normatizar</b> a prestação de <b>serviços públicos transferidos à iniciativa privada</b>, na forma da lei, com intenção de <b>reduzir gastos</b> e buscar <b>maior eficiência</b> na execução de tais atividades."],
  ["Agências reguladoras — autonomia, controle e hierarquia","Possuem autonomia <b>funcional, decisória, administrativa e financeira</b> — <b>maior autonomia</b> em relação à Administração Direta. Submetem-se ao <b>controle externo do Poder Legislativo e do Tribunal de Contas</b>. Embora sob <b>supervisão ministerial</b>, <b>não compõem a hierarquia administrativa</b>: caracterizam-se pela <b>ausência de tutela ou de subordinação hierárquica</b> (art. 3º da Lei 13.848). <b>Mas não possuem independência em relação aos Poderes</b> Executivo, Legislativo e Judiciário."],
  ["Dirigentes das agências reguladoras","São <b>escolhidos pelo Presidente da República</b> e <b>aprovados pelo Senado Federal</b>. Possuem <b>mandato fixo</b> (estabilidade durante os mandatos) e <b>não podem sofrer exoneração ad nutum</b> (sem contraditório e ampla defesa)."],
  ["Espécies de agências reguladoras e o que podem fazer","Duas espécies: as que exercem <b>poder de polícia</b> (ex.: <b>ANVISA</b>) e as que <b>regulam atividades delegadas à iniciativa privada</b>, mediante <b>concessão, permissão ou autorização</b> (ex.: <b>ANATEL</b>, <b>ANEEL</b>). Na função regulatória podem: <b>editar normas</b>, <b>fiscalizar as concessionárias</b>, <b>revisar e fixar tarifas</b>, <b>aplicar sanções</b>, <b>solucionar conflitos</b> entre empresas e clientes e <b>solucionar reclamações dos consumidores</b>."],

  ["Fundações públicas — espécies, criação e extinção","Podem ser <b>de direito privado</b> ou <b>de direito público</b>. <b>Criação e extinção:</b> <b>autorização em lei + registro em cartório</b> se for <b>de direito privado</b>; <b>diretamente por lei</b> se for <b>de direito público</b>."],
  ["Fundação pública — objeto e regime jurídico","<b>Objeto:</b> atividades que <b>beneficiam a coletividade</b>, <b>sem fins lucrativos</b> (ex.: <b>hospitais</b>). <b>Regime jurídico:</b> <b>direito público ou privado</b>, conforme a espécie."],
  ["Fundação pública — prerrogativas e as custas processuais","<b>De direito público</b> → <b>mesmas prerrogativas das autarquias</b> (ex.: <b>isenção das custas processuais</b>). <b>De direito privado</b> → <b>não</b> possui isenção das custas processuais. <b>STJ, REsp 1.409.199/SC:</b> a isenção das custas processuais <b>somente se aplica às entidades com personalidade de direito público</b>."],
  ["Fundação pública — patrimônio","<b>Bens públicos</b> se for de <b>direito público</b>. <b>Bens privados</b> se for de <b>direito privado</b> — sendo que os <b>bens empregados na prestação de serviços públicos possuem prerrogativas de bens públicos</b>."],
  ["Fundação pública — pessoal","<b>Regime jurídico único</b> se for de <b>direito público</b>. <b>Regime jurídico único ou celetista</b> se for de <b>direito privado</b> (há <b>divergência doutrinária</b>). Em qualquer caso, <b>ingresso por meio de concurso público</b>."],
  ["Fundação pública — controle do Ministério Público","<b>Fundação Pública Federal</b> → <b>MP Federal</b>, <b>independentemente de sede</b>. <b>Fundação Pública Estadual</b> → <b>MP Estadual</b>, <b>de acordo com a sede</b>. <b>Fundação Privada</b> → <b>MP Estadual</b>, <b>de acordo com a sede</b>."],
  ["Fundação pública — foro judicial e contratos","<b>De direito público</b> → <b>igual às autarquias</b>. <b>De direito privado</b> → para a <b>doutrina</b>, <b>Justiça Estadual</b>; para a <b>jurisprudência</b>, <b>Justiça Federal</b>. <b>ATENÇÃO:</b> os contratos das fundações públicas <b>de direito privado</b> são regidos pela <b>Lei de Licitações</b>."],
  ["EP e SEM — natureza, criação e subsidiárias","Tanto a <b>empresa pública</b> quanto a <b>sociedade de economia mista</b> são <b>pessoas jurídicas de direito privado</b>, integrantes da <b>Administração Indireta</b>, criadas por <b>autorização legal</b>. <b>Criação e extinção: autorização em lei + registro em cartório.</b> <b>Subsidiárias:</b> dependem de <b>autorização legislativa</b>, que <b>pode ser genérica</b>, na própria lei que autorizou a criação da matriz."],
  ["EP e SEM — objeto","<b>Atividades econômicas, com intuito de lucro.</b> Pode ser <b>intervenção direta no domínio econômico</b> (nos casos de <b>segurança nacional</b> ou <b>relevante interesse coletivo</b>; ou <b>monopólio</b>) ou <b>prestação de serviços públicos</b>. A exploração direta de atividade econômica pelo Estado é <b>excepcional</b> (art. 173 da CF)."],
  ["EP e SEM — regime jurídico misto e as sujeições ao direito público","<b>Personalidade jurídica: direito privado.</b> <b>Regime jurídico: misto</b> — <b>mais de direito privado</b> nas <b>exploradoras de atividade empresarial</b> e <b>mais de direito público</b> nas <b>prestadoras de serviço público</b>. <b>Sujeições ao direito público:</b> <b>controle pelo Tribunal de Contas</b>, <b>concurso público</b> e <b>licitação na atividade-meio</b>."],
  ["EP e SEM — patrimônio e pessoal","<b>Patrimônio: bens privados</b>; contudo, nas <b>prestadoras de serviço público</b>, os bens empregados na prestação dos serviços possuem <b>prerrogativas de bens públicos</b>. <b>Pessoal: celetista</b>, <b>sem estabilidade</b>, <b>porém a demissão exige motivação</b>. <b>Não cabe ao Legislativo aprovar o nome de dirigentes</b>. É possível <b>mandado de segurança</b> contra atos dos dirigentes <b>em licitações</b>."],
  ["EP e SEM — falência, execução e precatórios","<b>Não se sujeitam</b> à <b>falência</b> nem à <b>execução</b>. As obrigações não adimplidas das estatais <b>NÃO</b> são executadas por <b>precatórios</b>: aplica-se o <b>regime jurídico próprio das empresas privadas</b>, inclusive quanto aos direitos e obrigações civis, comerciais, trabalhistas e tributários (art. 173, § 1º, II, da CF)."],
  ["EP × SEM — forma jurídica e composição do capital","<b>Forma jurídica:</b> <b>SEM</b> → <b>Sociedade Anônima</b> (obrigatoriamente; ainda que de capital fechado, adota as normas da <b>CVM</b> sobre escrituração e demonstrações financeiras — Lei 13.303/2016); <b>EP</b> → <b>qualquer forma admitida em direito</b>. <b>Capital:</b> <b>SEM</b> → <b>misto</b>, público (<b>majoritário</b>) + privado; <b>EP</b> → <b>exclusivamente público</b>, podendo participar mais de uma entidade pública."],
  ["EP × SEM — foro judicial e o capital unipessoal/pluripessoal","<b>SEM Federal</b> → <b>Justiça Estadual</b>, exceto se a União atuar como <b>assistente ou oponente</b>. <b>EP Federal</b> → <b>Justiça Federal</b>. <b>EP ou SEM estadual ou municipal</b> → <b>Justiça Estadual</b>. <b>Ações trabalhistas</b> → <b>Justiça do Trabalho</b>. As EP podem ser <b>unipessoais</b> (100% do capital da PJ instituidora) ou <b>pluripessoais</b> (capital repartido com outras PJs) — mas <b>todo o capital de EP deve ser público</b>."]
];

var QS = [
  ["Entidade é a pessoa jurídica, pública ou privada, que possui personalidade jurídica.","C","CEBRASPE","Conceito de abertura do resumo."],
  ["As entidades administrativas possuem autonomia política, ou seja, capacidade de legislar.","E","FCC","Quem possui autonomia política são as entidades <b>políticas</b>; as administrativas <b>não podem legislar</b>."],
  ["As entidades políticas são pessoas jurídicas de direito público interno, como a União, os Estados, o Distrito Federal e os Municípios; já as autarquias e as fundações públicas são entidades administrativas, sem autonomia política.","C","FGV","Questão-definição do resumo."],
  ["Órgão público é o centro de competência instituído na estrutura interna da entidade e, por não possuir personalidade jurídica, responde pelos seus atos o ente federativo que o criou.","C","VUNESP","Conceito de órgão."],
  ["A administração direta é composta por órgãos dotados de personalidade jurídica que desempenham funções administrativas próprias.","E","CEBRASPE","Os órgãos <b>não possuem</b> personalidade jurídica — questão-pegadinha do resumo."],
  ["Nenhum órgão público possui capacidade processual.","E","AOCP","Os órgãos <b>autônomos e independentes</b> têm capacidade processual para impetrar mandado de segurança."],
  ["Os órgãos independentes estão previstos na Constituição Federal e não se subordinam a outro órgão, enquanto os autônomos subordinam-se apenas aos independentes.","C","IBFC","Classificação quanto à posição estatal."],
  ["Órgãos simples ou unitários são aqueles que possuem subdivisões.","E","FUNDATEC","Os simples ou unitários <b>não</b> possuem subdivisões; com subdivisões são os <b>compostos</b>."],
  ["Das três teorias que explicam as relações do Estado com seus agentes, a adotada no Brasil é a teoria do órgão.","C","FCC","A pessoa jurídica manifesta sua vontade por meio dos órgãos que a compõem."],
  ["Embora apresentem diferenças, as teorias do mandato, da representação e do órgão têm como traço comum a imputação da vontade do órgão público à pessoa jurídica em que aquele se encontra inserido.","E","CEBRASPE","<b>Apenas</b> a teoria do órgão faz essa imputação — questão-pegadinha do resumo."],
  ["Na centralização, o Estado executa as tarefas diretamente, por intermédio da Administração Direta.","C","VUNESP","Conceito de centralização."],
  ["Na descentralização, o Estado distribui funções para outra pessoa, física ou jurídica, havendo entre elas relação de hierarquia.","E","AOCP","Na descentralização <b>não há hierarquia</b>."],
  ["A desconcentração ocorre quando a entidade se desmembra em órgãos organizados em hierarquia, dentro de uma mesma pessoa jurídica.","C","IBFC","Técnica administrativa para melhorar o desempenho da entidade."],
  ["A descentralização distribui funções dentro da mesma pessoa jurídica, e a desconcentração, para outra pessoa jurídica.","E","FUNDATEC","Inverteu o quadro do resumo."],
  ["Na descentralização por serviços, o Estado transfere a titularidade e a execução do serviço, a medida depende de lei, o prazo é indeterminado e o controle é finalístico.","C","CEBRASPE","Ex.: criação de entidades da Administração Indireta."],
  ["Na descentralização por colaboração, o Estado transfere a titularidade e a execução do serviço.","E","FCC","Por colaboração transfere-se <b>apenas a execução</b>; titularidade e execução é a por <b>serviços</b>."],
  ["A concessão de serviço público é exemplo de descentralização por colaboração formalizada por contrato, com prazo determinado, enquanto a autorização de serviço se dá por ato, com prazo indeterminado.","C","FGV","Quadro da descentralização por colaboração."],
  ["A criação de Territórios Federais é exemplo de descentralização territorial.","C","AOCP","Transferência de competências administrativas para entidade geograficamente delimitada."],
  ["A criação de secretaria municipal de defesa do meio ambiente por prefeito municipal configura caso de descentralização administrativa.","E","CEBRASPE","Configura <b>desconcentração</b> administrativa."],
  ["A fusão do Ministério do Trabalho e Emprego com o Ministério da Previdência Social é exemplo de concentração administrativa.","C","CEBRASPE","Questão-exemplo do resumo."],
  ["O desmembramento regular das atividades de uma delegacia especializada, de maneira que passem a existir duas delegacias distintas, denomina-se desconcentração administrativa, consistente em distribuição interna de competências.","C","FGV","Gabarito da questão-exemplo do resumo."],
  ["Os consórcios públicos não integram a Administração Indireta.","E","AOCP","Integram a Administração Indireta dos <b>entes consorciados</b>."],
  ["Todas as entidades da Administração Indireta são dotadas de personalidade jurídica própria e desprovidas de autonomia política.","C","IBFC","Conceito de Administração Indireta."],
  ["A autarquia é pessoa jurídica de direito privado, criada por autorização em lei e registro em cartório.","E","FUNDATEC","É pessoa jurídica de <b>direito público</b> criada <b>diretamente por lei</b>."],
  ["Sobre a autarquia, sua extinção, assim como sua criação, somente pode ocorrer por meio de lei de iniciativa do Poder Executivo.","C","VUNESP","Criação e extinção diretamente por lei."],
  ["No tocante à constituição de entidades da Administração Indireta, o Poder Judiciário não pode constituir fundações e autarquias.","E","VUNESP","A Administração Indireta pode ser integrada por entidades vinculadas a <b>qualquer dos três Poderes</b>."],
  ["As dívidas passivas das autarquias prescrevem em cinco anos contados da data do ato ou fato do qual se originaram.","C","VUNESP","Prescrição quinquenal."],
  ["Os débitos judiciais das autarquias são pagos por meio da mesma ordem cronológica dos precatórios do ente federativo responsável por sua criação.","E","VUNESP","Cada autarquia gere <b>sua própria lista</b> de precatórios — questão-pegadinha do resumo."],
  ["Os processos judiciais das autarquias federais correm na Justiça Federal, e os das autarquias estaduais e municipais, na Justiça Estadual.","C","FCC","Foro judicial das autarquias."],
  ["As autarquias de regime especial possuem autonomia menor do que as demais autarquias.","E","FGV","Possuem <b>maior</b> autonomia, e seus dirigentes têm estabilidade."],
  ["Para que o Poder Executivo qualifique uma autarquia ou fundação como agência executiva, é preciso que ela tenha um plano estratégico de reestruturação em andamento e que tenha celebrado contrato de gestão com o respectivo ministério supervisor.","C","AOCP","Requisitos I e II do quadro ATENÇÃO."],
  ["As agências reguladoras são autarquias em regime especial que possuem a função de fiscalizar, regular e normatizar a prestação de serviços públicos transferidos à iniciativa privada.","C","IBFC","Conceito do resumo."],
  ["Por estarem submetidas à supervisão ministerial, as agências reguladoras compõem a hierarquia administrativa.","E","art. 3º da Lei 13.848","Caracterizam-se pela <b>ausência de tutela ou de subordinação hierárquica</b>."],
  ["As agências reguladoras são autarquias em regime especial, o que lhes confere maior autonomia administrativa e financeira, contudo não possuem independência em relação aos Poderes Executivo, Legislativo e Judiciário.","C","CEBRASPE","Independência administrativa, sim; em relação aos Poderes, não."],
  ["Os dirigentes das agências reguladoras são escolhidos pelo Presidente da República, aprovados pelo Senado Federal, possuem mandato fixo e podem ser exonerados ad nutum.","E","FUNDATEC","<b>Não podem</b> sofrer exoneração ad nutum, sem contraditório e ampla defesa."],
  ["No exercício da função regulatória, as agências reguladoras podem editar normas, revisar e fixar tarifas, aplicar sanções e solucionar conflitos entre as empresas e os clientes.","C","VUNESP","Lista de competências do resumo."],
  ["A supervisão ministerial, também chamada tutela administrativa, é a relação de subordinação entre a Administração Direta e a Administração Indireta.","E","FCC","É <b>vinculação</b>, e não subordinação."],
  ["As fundações públicas podem ser de direito público ou de direito privado, sendo que as de direito público são criadas diretamente por lei.","C","FGV","Quadro das fundações públicas."],
  ["A fundação pública de direito privado é criada diretamente por lei.","E","AOCP","Exige <b>autorização em lei + registro em cartório</b>."],
  ["As fundações públicas de direito privado não fazem jus à isenção das custas processuais.","C","STJ, REsp 1.409.199/SC","A isenção só alcança entidades com personalidade de direito público."],
  ["O controle do Ministério Público sobre fundação pública federal é exercido pelo Ministério Público Estadual, de acordo com a sede da entidade.","E","IBFC","Fundação pública <b>federal</b> → <b>MP Federal</b>, independentemente de sede."],
  ["Na fundação pública de direito privado, os bens empregados na prestação de serviços públicos possuem prerrogativas de bens públicos.","C","FUNDATEC","Quadro do patrimônio das fundações."],
  ["Tanto a empresa pública quanto a sociedade de economia mista são pessoas jurídicas de direito privado, integrantes da Administração Indireta, criadas por autorização legal com registro em cartório.","C","CEBRASPE","Conceito comum às duas estatais."],
  ["A criação de subsidiárias de empresa pública dispensa autorização legislativa.","E","FCC","Depende de autorização legislativa, que <b>pode ser genérica</b> na lei que autorizou a matriz."],
  ["O regime jurídico das estatais é misto: mais de direito privado nas exploradoras de atividade empresarial e mais de direito público nas prestadoras de serviço público.","C","FGV","Quadro do regime jurídico."],
  ["No caso de uma sociedade anônima cuja criação foi autorizada por lei, em que o Estado detém o controle acionário, dispensa-se o procedimento de licitação para contratação de obras, compras e serviços, uma vez que não possui capital integralmente público.","E","VUNESP","EP e SEM submetem-se ao regime de licitação da Lei 13.303 — questão-pegadinha do resumo."],
  ["Os empregados das empresas estatais não gozam de estabilidade, devendo, porém, sua demissão ser devidamente motivada.","C","VUNESP","Pessoal celetista, sem estabilidade, com demissão motivada."],
  ["Cabe mandado de segurança contra ato praticado em licitação promovida por empresas estatais.","C","VUNESP","Trata-se de ato de autoridade, não de ato de gestão."],
  ["O regime jurídico constitucional das empresas estatais prevê que as obrigações não adimplidas de responsabilidade das empresas estatais deverão ser executadas mediante o regime constitucional de precatórios.","E","VUNESP","Aplica-se o regime jurídico próprio das empresas privadas — questão-pegadinha do resumo."],
  ["As sociedades de economia mista são constituídas obrigatoriamente sob a forma de sociedade anônima, enquanto a empresa pública pode adotar qualquer forma admitida em direito, com capital exclusivamente público.","C","AOCP","Quadro da forma jurídica e da composição do capital."],
  ["Uma sociedade de economia mista federal tem seus processos judiciais julgados pela Justiça Federal.","E","IBFC","SEM Federal → <b>Justiça Estadual</b>, exceto se a União atuar como assistente ou oponente."],
  ["As empresas públicas, entidades dotadas de personalidade jurídica de direito privado, cuja criação é autorizada por lei, possuem patrimônio próprio e podem ser unipessoais ou pluripessoais.","C","CEBRASPE","Questão-definição do resumo."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Entidade, órgão e as três formas de organizar a máquina",
      '<div class="box"><span class="bl">Entidade — política ou administrativa</span>'+
      '<p><b>Entidade</b> é a <b>pessoa jurídica, pública ou privada, que possui personalidade jurídica</b>. Toda a atividade administrativa do Estado se desenvolve, <b>direta ou indiretamente</b>, por meio da atuação de <b>entidades públicas</b>, <b>órgãos</b> e seus respectivos <b>agentes</b>.</p>'+
      '<div class="tree"><div class="leaf"><b>ENTIDADE POLÍTICA</b> — possui <b>autonomia política</b> (capacidade de legislar). <b>Somente U, E, DF e M.</b></div>'+
      '<div class="leaf"><b>ENTIDADE ADMINISTRATIVA</b> — <b>não pode legislar</b>; possui apenas <b>autonomia administrativa</b>.</div></div>'+
      '<p><b>Questão-definição do resumo (CESPE/CNJ):</b> as entidades políticas são pessoas jurídicas de direito público interno (União, Estados, DF e Municípios); as entidades administrativas integram a administração pública, mas <b>não têm autonomia política</b>, como as <b>autarquias</b> e as <b>fundações públicas</b>. [CERTO]</p></div>'+
      '<div class="box"><span class="bl">Órgão público</span>'+
      '<p>É uma <b>unidade com atribuição específica</b> dentro da organização do Estado — o <b>centro de competência instituído na estrutura interna da entidade</b>.</p>'+
      '<ul><li><b>Não possui personalidade jurídica</b> nem, em regra, <b>capacidade processual</b>.</li>'+
      '<li>Respondem pelos seus atos <b>o ente federativo que o criou</b>.</li>'+
      '<li><b>EXCEÇÃO:</b> os órgãos <b>autônomos</b> e <b>independentes</b> possuem capacidade processual para <b>impetração de mandado de segurança</b> na defesa de suas <b>prerrogativas e competências</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">QUESTÃO-PEGADINHA do resumo</span>'+
      '<p>“A administração direta é composta por órgãos <b>dotados de personalidade jurídica</b> que desempenham funções administrativas próprias.” <b>[ERRADO]</b></p>'+
      '<p>Quem tem personalidade jurídica é a <b>entidade</b>; o órgão é apenas <b>centro de competência</b> dentro dela.</p></div>'+
      '<div class="box tip"><span class="bl">Classificação dos órgãos</span>'+
      '<div class="tree"><div class="leaf"><b>Quanto à estrutura</b> — <b>simples ou unitários</b> (<b>não</b> possuem subdivisões) · <b>compostos</b> (possuem subdivisões).</div>'+
      '<div class="leaf"><b>Quanto à atuação funcional</b> — <b>singulares ou unipessoais</b> (decisões tomadas por <b>uma só pessoa</b>) · <b>colegiados ou pluripessoais</b> (<b>decisões conjuntas</b>).</div>'+
      '<div class="leaf"><b>Quanto à posição estatal</b> — <b>independentes</b> (previstos na <b>CF</b>, sem subordinação a outro órgão) · <b>autônomos</b> (subordinados <b>apenas aos independentes</b>) · <b>superiores</b> (atribuições de <b>direção</b>) · <b>subalternos</b> (apenas <b>execução</b> e reduzido poder decisório).</div></div></div>'+
      '<div class="box"><span class="bl">Centralização × descentralização × desconcentração</span>'+
      '<p><b>CENTRALIZAÇÃO</b> — o Estado executa as tarefas <b>diretamente</b>, por intermédio da <b>Administração Direta</b>.</p>'+
      '<p><b>DESCENTRALIZAÇÃO</b> — o Estado <b>distribui funções para outra pessoa</b>, física ou jurídica. <b>Não há hierarquia.</b> Três modalidades:</p>'+
      '<div class="tree"><div class="leaf"><b>Por serviços</b> (funcional, técnica, outorga) — transfere <b>a titularidade E a execução</b>. <b>Depende de lei</b> · <b>prazo indeterminado</b> · <b>controle finalístico</b>. Ex.: <b>criação de entidades da Administração Indireta</b>.</div>'+
      '<div class="leaf"><b>Por colaboração</b> (ou delegação) — transfere <b>apenas a execução</b>. Pode ser por <b>contrato</b> (prazo <b>determinado</b> — ex.: <b>concessão de serviço</b>) ou por <b>ato unilateral</b> (prazo <b>indeterminado</b> — ex.: <b>autorização de serviço</b>). <b>Controle amplo e rígido</b>.</div>'+
      '<div class="leaf"><b>Territorial</b> — transfere <b>competências administrativas</b> para <b>entidade geograficamente delimitada</b>. Ex.: <b>criação de Territórios Federais</b>.</div></div>'+
      '<p><b>DESCONCENTRAÇÃO</b> — a entidade <b>se desmembra em órgãos</b>, organizados <b>em hierarquia</b>. É <b>técnica administrativa</b> para melhorar o desempenho e ocorre <b>dentro de uma mesma pessoa jurídica</b>.</p>'+
      '<p class="mn"><em>DESCENTRALIZAÇÃO distribui funções para OUTRA pessoa jurídica. DESCONCENTRAÇÃO distribui funções DENTRO da mesma pessoa jurídica.</em></p></div>'+
      '<div class="box trap"><span class="bl">Os exemplos que a banca usa — e as teorias do Estado-agente</span>'+
      '<ul><li>Delegacia especializada <b>desmembrada em duas</b> delegacias distintas → <b>desconcentração administrativa</b>, consistente em <b>distribuição interna de competências</b>.</li>'+
      '<li><b>Criação de secretaria municipal</b> de defesa do meio ambiente pelo prefeito → <b>desconcentração</b> administrativa.</li>'+
      '<li><b>Fusão</b> do Ministério do Trabalho e Emprego com o Ministério da Previdência Social → <b>concentração</b> administrativa.</li></ul>'+
      '<p><b>Teorias das relações do Estado com seus agentes:</b> <b>mandato</b> (os agentes eram <b>mandatários</b>) · <b>representação</b> (eram <b>representantes</b>) · <b>órgão</b> (a pessoa jurídica <b>manifesta sua vontade por meio dos órgãos</b> que a compõem) — <b>adotada no Brasil</b>.</p>'+
      '<p><b>PEGADINHA:</b> as três teorias <b>não</b> têm em comum a imputação. <b>Apenas a teoria do órgão</b> imputa a vontade do órgão à pessoa jurídica: “substitui-se a ideia de <b>representação</b> pela ideia de <b>imputação</b>”. Na representação, o Estado outorgava a responsabilidade <b>ao agente</b>; na imputação, os atos dos órgãos são imputados <b>ao Estado</b>.</p></div>')
  ],
  V2:[
    sl("Administração Direta, Administração Indireta, autarquias e agências",
      '<div class="box"><span class="bl">Administração Direta × Administração Indireta</span>'+
      '<p><b>ADMINISTRAÇÃO DIRETA</b> — <b>conjunto de órgãos</b> que integram as <b>pessoas políticas</b> do Estado (U, E, DF, M), aos quais foi atribuída competência para atividades administrativas de forma <b>centralizada</b>.</p>'+
      '<div class="chips"><span class="chip">Federal → Presidência e Ministérios</span><span class="chip">Estadual → Governador e Secretarias</span><span class="chip">Distrital → Governador e Secretarias</span><span class="chip">Municipal → Prefeito e Secretarias</span></div>'+
      '<p><b>ADMINISTRAÇÃO INDIRETA</b> — <b>conjunto de pessoas jurídicas</b> (<b>desprovidas de autonomia política</b>) que, <b>vinculadas</b> à Administração Direta, exercem atividades administrativas de forma <b>descentralizada</b>. Todas têm <b>personalidade jurídica própria</b>:</p>'+
      '<div class="chips"><span class="chip">Autarquias</span><span class="chip">Fundações Públicas</span><span class="chip">Empresas Públicas</span><span class="chip">Sociedades de Economia Mista</span><span class="chip">Consórcios Públicos</span></div>'+
      '<p>O <b>consórcio público</b> integra a Administração Indireta dos <b>entes consorciados</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Supervisão ministerial (tutela administrativa)</span>'+
      '<p>É a <b>vinculação</b> — <b>NÃO é subordinação</b> — entre a Administração Direta e a Indireta. Objetivos:</p>'+
      '<ul><li>Verificar os <b>resultados</b> das entidades descentralizadas.</li>'+
      '<li>Verificar a <b>harmonização</b> de suas atividades com a política do Governo.</li>'+
      '<li>Verificar a <b>eficiência de sua gestão</b> e a <b>manutenção de sua autonomia</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">Autarquia — a ficha completa</span>'+
      '<div class="tree"><div class="leaf"><b>Conceito:</b> pessoa jurídica de <b>direito público</b> criada <b>diretamente por lei</b>.</div>'+
      '<div class="leaf"><b>Criação e extinção:</b> <b>diretamente por lei</b> (de iniciativa do Poder Executivo).</div>'+
      '<div class="leaf"><b>Objeto:</b> <b>atividades típicas de Estado</b>, <b>sem fins lucrativos</b>.</div>'+
      '<div class="leaf"><b>Regime jurídico:</b> <b>direito público</b>.</div>'+
      '<div class="leaf"><b>Prerrogativas:</b> prazos processuais especiais · <b>prescrição quinquenal</b> · precatórios · inscrição de créditos em <b>dívida ativa</b> · <b>imunidade tributária</b> · <b>não sujeição à falência</b>.</div>'+
      '<div class="leaf"><b>Patrimônio:</b> <b>bens públicos</b> (impenhorabilidade, imprescritibilidade e restrições à alienação).</div>'+
      '<div class="leaf"><b>Pessoal:</b> <b>regime jurídico único</b>, igual ao da Administração Direta.</div>'+
      '<div class="leaf"><b>Foro judicial:</b> <b>Justiça Federal</b> (federais) e <b>Justiça Estadual</b> (estaduais e municipais).</div></div>'+
      '<p>As <b>dívidas passivas</b> das autarquias prescrevem em <b>cinco anos</b> contados da data do ato ou fato do qual se originaram. E o <b>Poder Judiciário pode constituir</b> fundações e autarquias: a Administração Indireta existe em <b>todos os entes federados</b> e pode ser integrada por entidades vinculadas a <b>qualquer dos três Poderes</b>.</p></div>'+
      '<div class="box trap"><span class="bl">QUESTÃO-PEGADINHA dos precatórios</span>'+
      '<p>“Os débitos judiciais das autarquias são pagos por meio da <b>mesma ordem cronológica dos precatórios do ente federativo</b> responsável por sua criação.” <b>[ERRADO]</b></p>'+
      '<p>As autarquias possuem <b>autonomia financeira</b>, de forma que <b>não</b> se submetem à mesma ordem dos precatórios do ente que as criou: <b>cada autarquia será responsável por gerir sua própria lista de precatórios</b>.</p></div>'+
      '<div class="box"><span class="bl">Autarquias de regime especial e agências executivas</span>'+
      '<p><b>Autarquias de regime especial</b> possuem <b>maior autonomia</b> que as demais e seus <b>dirigentes possuem estabilidade</b>. Podem ser qualificadas em <b>Agências Executivas</b> ou <b>Agências Reguladoras</b>.</p>'+
      '<p><b>ATENÇÃO!</b> O <b>Poder Executivo</b> poderá qualificar como <b>Agência Executiva</b> a <b>autarquia ou fundação</b> que tenha cumprido os requisitos: <b>I</b> — ter um <b>plano estratégico de reestruturação em andamento</b>; <b>II</b> — ter celebrado <b>Contrato de Gestão</b> com o respectivo <b>Ministério supervisor</b>.</p>'+
      '<p>Por serem autarquias, os processos judiciais de uma <b>agência executiva estadual</b> são de competência da <b>justiça estadual comum</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Agências reguladoras</span>'+
      '<p>São <b>autarquias em regime especial</b> com a função de <b>fiscalizar, regular e normatizar</b> a prestação de <b>serviços públicos transferidos à iniciativa privada</b>, na forma da lei, com intenção de <b>reduzir gastos</b> e buscar <b>maior eficiência</b>. Foram criadas na esteira do <b>Programa Nacional de Desestatização</b>.</p>'+
      '<ul><li>Autonomia <b>funcional, decisória, administrativa e financeira</b> — <b>maior autonomia</b> que a Administração Direta.</li>'+
      '<li><b>Controle externo</b> do <b>Poder Legislativo</b> e do <b>Tribunal de Contas</b>.</li>'+
      '<li>Embora sob <b>supervisão ministerial</b>, <b>não compõem a hierarquia administrativa</b>: <b>ausência de tutela ou de subordinação hierárquica</b> (art. 3º da Lei 13.848).</li>'+
      '<li><b>Dirigentes:</b> escolhidos pelo <b>Presidente da República</b> e aprovados pelo <b>Senado Federal</b>; <b>mandato fixo</b> (estabilidade durante os mandatos); <b>não podem sofrer exoneração ad nutum</b>.</li>'+
      '<li><b>Duas espécies:</b> as que exercem <b>poder de polícia</b> (ex.: <b>ANVISA</b>) e as que <b>regulam atividades delegadas</b> à iniciativa privada mediante <b>concessão, permissão ou autorização</b> (ex.: <b>ANATEL</b>, <b>ANEEL</b>).</li>'+
      '<li><b>Na função regulatória podem:</b> editar normas · fiscalizar as concessionárias · <b>revisar e fixar tarifas</b> · aplicar sanções · solucionar conflitos entre empresas e clientes · solucionar reclamações dos consumidores.</li></ul>'+
      '<p class="mn"><em>Elas têm independência ADMINISTRATIVA, mas NÃO têm independência em relação aos Poderes Executivo, Legislativo e Judiciário.</em></p></div>')
  ],
  V3:[
    sl("Fundações públicas, empresas públicas e sociedades de economia mista",
      '<div class="box"><span class="bl">Fundações públicas — de direito público ou de direito privado</span>'+
      '<div class="tree"><div class="leaf"><b>Criação e extinção:</b> <b>autorização em lei + registro em cartório</b> se de <b>direito privado</b>; <b>diretamente por lei</b> se de <b>direito público</b>.</div>'+
      '<div class="leaf"><b>Objeto:</b> atividades que <b>beneficiam a coletividade</b>, <b>sem fins lucrativos</b> (ex.: <b>hospitais</b>).</div>'+
      '<div class="leaf"><b>Regime jurídico:</b> <b>direito público ou privado</b>.</div>'+
      '<div class="leaf"><b>Prerrogativas:</b> de <b>direito público</b> → <b>as mesmas das autarquias</b> (ex.: <b>isenção das custas processuais</b>); de <b>direito privado</b> → <b>não</b> possui isenção das custas processuais.</div>'+
      '<div class="leaf"><b>Patrimônio:</b> <b>bens públicos</b> (direito público) · <b>bens privados</b> (direito privado), <b>sendo que os bens empregados na prestação de serviços públicos possuem prerrogativas de bens públicos</b>.</div>'+
      '<div class="leaf"><b>Pessoal:</b> <b>regime jurídico único</b> (direito público) · <b>regime jurídico único ou celetista</b> (direito privado — <b>há divergência doutrinária</b>). Sempre com <b>ingresso por concurso público</b>.</div></div>'+
      '<p><b>ATENÇÃO:</b> os contratos das fundações públicas <b>de direito privado</b> são regidos pela <b>Lei de Licitações</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Fundações — controle do MP e foro judicial</span>'+
      '<ul><li><b>Fundação Pública Federal</b> → <b>MP Federal</b>, <b>independentemente de sede</b>.</li>'+
      '<li><b>Fundação Pública Estadual</b> → <b>MP Estadual</b>, <b>de acordo com a sede</b>.</li>'+
      '<li><b>Fundação Privada</b> → <b>MP Estadual</b>, <b>de acordo com a sede</b>.</li></ul>'+
      '<p><b>Foro judicial:</b> de <b>direito público</b> → <b>igual às autarquias</b>; de <b>direito privado</b> → para a <b>doutrina</b>, <b>Justiça Estadual</b>; para a <b>jurisprudência</b>, <b>Justiça Federal</b>.</p>'+
      '<p><b>JURISPRUDÊNCIA (STJ, REsp 1.409.199/SC):</b> as <b>fundações públicas de direito privado não fazem jus à isenção das custas processuais</b>. A isenção somente se aplica às entidades com <b>personalidade de direito público</b>.</p></div>'+
      '<div class="box"><span class="bl">Empresas públicas (EP) e sociedades de economia mista (SEM)</span>'+
      '<div class="tree"><div class="leaf"><b>Natureza:</b> ambas são <b>pessoas jurídicas de direito privado</b>, integrantes da <b>Administração Indireta</b>, criadas por <b>autorização legal</b>.</div>'+
      '<div class="leaf"><b>Criação e extinção:</b> <b>autorização em lei + registro em cartório</b>.</div>'+
      '<div class="leaf"><b>Subsidiárias:</b> dependem de <b>autorização legislativa</b>, que <b>pode ser genérica</b>, na lei que autorizou a criação da matriz.</div>'+
      '<div class="leaf"><b>Objeto:</b> <b>atividades econômicas, com intuito de lucro</b> — <b>intervenção direta no domínio econômico</b> (segurança nacional ou relevante interesse coletivo; ou monopólio) ou <b>prestação de serviços públicos</b>. A exploração direta de atividade econômica pelo Estado é <b>excepcional</b> (art. 173 da CF).</div>'+
      '<div class="leaf"><b>Regime jurídico: MISTO</b> — <b>mais de direito privado</b> nas <b>exploradoras de atividade empresarial</b> e <b>mais de direito público</b> nas <b>prestadoras de serviço público</b>.</div>'+
      '<div class="leaf"><b>Sujeições ao direito público:</b> <b>controle pelo Tribunal de Contas</b> · <b>concurso público</b> · <b>licitação na atividade-meio</b>.</div>'+
      '<div class="leaf"><b>Patrimônio:</b> <b>bens privados</b>; contudo, nas <b>prestadoras de serviço público</b>, os bens empregados na prestação possuem <b>prerrogativas de bens públicos</b>.</div>'+
      '<div class="leaf"><b>Pessoal:</b> <b>celetista</b>, <b>sem estabilidade</b>, <b>porém a demissão exige motivação</b>. <b>Não cabe ao Legislativo aprovar o nome de dirigentes.</b> É possível <b>mandado de segurança</b> contra atos dos dirigentes <b>em licitações</b>.</div>'+
      '<div class="leaf"><b>Falência e execução:</b> <b>não se sujeitam</b>.</div></div></div>'+
      '<div class="box tip"><span class="bl">O par que a banca cobra: forma, capital e foro</span>'+
      '<ul><li><b>Forma jurídica:</b> <b>SEM</b> → <b>Sociedade Anônima</b> · <b>EP</b> → <b>qualquer forma admitida em direito</b>.</li>'+
      '<li><b>Composição do capital:</b> <b>SEM</b> → <b>misto</b>, público (<b>majoritário</b>) + privado · <b>EP</b> → <b>exclusivamente público</b>, podendo participar <b>mais de uma entidade pública</b>.</li>'+
      '<li><b>Foro judicial:</b> <b>SEM Federal</b> = <b>Justiça Estadual</b>, exceto se a União atuar como <b>assistente ou oponente</b> · <b>EP Federal</b> = <b>Justiça Federal</b> · <b>EP ou SEM estadual ou municipal</b> = <b>Justiça Estadual</b>. <b>Ações trabalhistas</b> → <b>Justiça do Trabalho</b>.</li></ul>'+
      '<p>Pela <b>Lei 13.303/2016</b>, a SEM é constituída <b>obrigatoriamente</b> sob a forma de sociedade anônima e, <b>ainda que de capital fechado</b>, deve adotar as normas da <b>CVM</b> sobre escrituração e elaboração de demonstrações financeiras.</p>'+
      '<p>As EP podem ser <b>unipessoais</b> (100% do capital social pertence à PJ instituidora — ex.: 100% da União) ou <b>pluripessoais</b> (capital repartido com outras PJs — ex.: 51% União, 40% Estado de São Paulo e 9% outra EP). <b>Todo o capital de EP deve ser PÚBLICO.</b></p></div>'+
      '<div class="box trap"><span class="bl">As duas QUESTÕES-PEGADINHA das estatais</span>'+
      '<p><b>1)</b> “As obrigações não adimplidas de responsabilidade das empresas estatais deverão ser executadas mediante o <b>regime constitucional de precatórios</b>.” <b>[ERRADO]</b> — aplica-se o <b>regime jurídico próprio das empresas privadas</b>, inclusive quanto aos direitos e obrigações <b>civis, comerciais, trabalhistas e tributários</b> (art. 173, § 1º, II, da CF).</p>'+
      '<p><b>2)</b> Sociedade anônima criada por autorização de lei, com controle acionário do Estado, <b>dispensaria licitação</b> porque não tem capital integralmente público? <b>[ERRADO]</b> — tanto as <b>EP</b> quanto as <b>SEM</b> submetem-se ao regime de licitação da <b>Lei 13.303</b> (art. 28).</p>'+
      '<p>E note o que é <b>CERTO</b> na mesma questão: essa sociedade <b>detém personalidade jurídica de direito privado</b> e tem a finalidade de <b>prestar serviço público</b>, podendo, em <b>caráter excepcional</b>, explorar atividade econômica.</p></div>')
  ]
};

var EX = {
S1:{t:"match", instr:"Correlacione cada figura da organização administrativa ao seu conceito",
  pairs:[["Entidade","Pessoa jurídica, pública ou privada, que possui personalidade jurídica"],
         ["Entidade política","Possui autonomia política (capacidade de legislar) — somente U, E, DF e M"],
         ["Entidade administrativa","Não pode legislar; possui apenas autonomia administrativa"],
         ["Órgão público","Centro de competência instituído na estrutura interna da entidade, sem personalidade jurídica"]],
  why:"O órgão é centro de competência dentro da entidade — quem tem personalidade jurídica é a entidade."},

S2:{t:"mc", instr:"Quais órgãos possuem capacidade processual, e para quê?",
  options:["Os órgãos autônomos e independentes, para impetração de mandado de segurança na defesa de suas prerrogativas e competências",
           "Todos os órgãos públicos, para qualquer ação judicial",
           "Os órgãos superiores e subalternos, para ações de cobrança",
           "Nenhum órgão público, em nenhuma hipótese"],
  answer:0,
  why:"É a EXCEÇÃO do resumo: em regra os órgãos não têm capacidade processual."},

S3:{t:"sort", instr:"Centralização, descentralização ou desconcentração?",
  buckets:["Centralização","Descentralização","Desconcentração"],
  items:[["O Estado executa as tarefas diretamente, por intermédio da Administração Direta",0],
         ["O Estado distribui funções para outra pessoa, física ou jurídica, sem hierarquia",1],
         ["Criação de entidades da Administração Indireta",1],
         ["Criação de Territórios Federais",1],
         ["A entidade se desmembra em órgãos, organizados em hierarquia",2],
         ["Criação de secretaria municipal de defesa do meio ambiente pelo prefeito",2],
         ["Desmembramento de uma delegacia especializada em duas delegacias distintas",2]],
  why:"Descentralização distribui funções para OUTRA pessoa jurídica; desconcentração, DENTRO da mesma pessoa jurídica."},

S4:{t:"match", instr:"Correlacione cada modalidade de descentralização à sua marca",
  pairs:[["Por serviços (funcional, técnica, outorga)","Transfere titularidade e execução; depende de lei; prazo indeterminado; controle finalístico"],
         ["Por colaboração (ou delegação)","Transfere apenas a execução; por contrato ou ato unilateral; controle amplo e rígido"],
         ["Territorial","Transfere competências administrativas para entidade geograficamente delimitada"]],
  why:"Só a descentralização por serviços transfere a titularidade — e é a que cria as entidades da Administração Indireta."},

S5:{t:"multi", instr:"Marque as afirmações corretas sobre a descentralização por colaboração",
  options:["O Estado transfere apenas a execução do serviço",
           "Pode ser por contrato ou por ato unilateral",
           "Por contrato, o prazo é determinado — ex.: concessão de serviço",
           "Por ato, o prazo é indeterminado — ex.: autorização de serviço",
           "O controle é amplo e rígido",
           "O Estado transfere a titularidade do serviço",
           "Depende sempre de lei e tem prazo indeterminado"],
  answers:[0,1,2,3,4],
  why:"As duas últimas descrevem a descentralização por SERVIÇOS."},

S6:{t:"gap", instr:"Complete a frase sobre as relações do Estado com seus agentes",
  before:"A teoria adotada no Brasil, segundo a qual a pessoa jurídica manifesta sua vontade por meio dos órgãos que a compõem, é a teoria ",
  after:".",
  options:["do órgão","do mandato","da representação"], answer:0,
  why:"Apenas a teoria do órgão imputa a vontade do órgão à pessoa jurídica — substitui-se a representação pela imputação."},

S7:{t:"sort", instr:"Administração Direta ou Administração Indireta?",
  buckets:["Administração Direta","Administração Indireta"],
  items:[["Presidência e Ministérios",0],
         ["Governador e Secretarias",0],
         ["Prefeito e Secretarias",0],
         ["Autarquias",1],
         ["Fundações Públicas",1],
         ["Empresas Públicas",1],
         ["Sociedades de Economia Mista",1],
         ["Consórcios Públicos",1]],
  why:"A Direta é conjunto de ÓRGÃOS das pessoas políticas; a Indireta é conjunto de PESSOAS JURÍDICAS vinculadas a ela."},

S8:{t:"mc", instr:"Como se dão a criação e a extinção de uma autarquia?",
  options:["Diretamente por lei","Por autorização em lei e registro em cartório",
           "Por decreto do chefe do Executivo","Por contrato de gestão com o ministério supervisor"],
  answer:0,
  why:"Autorização em lei + registro em cartório é o caminho das fundações de direito privado e das estatais."},

S9:{t:"multi", instr:"Marque as prerrogativas das autarquias listadas no resumo",
  options:["Prazos processuais especiais",
           "Prescrição quinquenal",
           "Precatórios",
           "Inscrição de seus créditos em dívida ativa",
           "Imunidade tributária",
           "Não sujeição à falência",
           "Sujeição ao regime celetista sem estabilidade",
           "Dispensa de concurso público"],
  answers:[0,1,2,3,4,5],
  why:"As duas últimas são do regime das empresas públicas e sociedades de economia mista — e nem lá há dispensa de concurso."},

S10:{t:"match", instr:"Correlacione cada item da ficha da autarquia",
  pairs:[["Objeto","Atividades típicas de Estado, sem fins lucrativos"],
         ["Regime jurídico","Direito público"],
         ["Patrimônio","Bens públicos — impenhorabilidade, imprescritibilidade e restrições à alienação"],
         ["Pessoal","Regime jurídico único, igual ao da Administração Direta"],
         ["Foro judicial","Justiça Federal para as federais; Justiça Estadual para as estaduais e municipais"]],
  why:"Autarquia é direito público de ponta a ponta — inclusive nos precatórios, que ela gere em lista própria."},

S11:{t:"wordbank", instr:"Monte o conceito de agência reguladora",
  target:["São","autarquias","em","regime","especial","com","a","função","de","fiscalizar","regular","e","normatizar","a","prestação","de","serviços","públicos","transferidos","à","iniciativa","privada"],
  extra:["fundações","de","direito","privado","monopolizar","titularidade"],
  why:"Agência reguladora é autarquia em regime especial — logo, pessoa jurídica de direito público criada por lei."},

S12:{t:"sort", instr:"A agência exerce poder de polícia ou regula atividade delegada à iniciativa privada?",
  buckets:["Exerce poder de polícia","Regula atividade delegada à iniciativa privada"],
  items:[["ANVISA",0],["ANATEL",1],["ANEEL",1]],
  why:"São as duas espécies do resumo: a delegação se dá mediante concessão, permissão ou autorização."},

S13:{t:"sort", instr:"Fundação pública de direito público ou de direito privado?",
  buckets:["De direito público","De direito privado"],
  items:[["Criada diretamente por lei",0],
         ["Autorização em lei + registro em cartório",1],
         ["Patrimônio formado por bens públicos",0],
         ["Patrimônio formado por bens privados",1],
         ["Possui isenção das custas processuais",0],
         ["Não faz jus à isenção das custas processuais",1],
         ["Pessoal em regime jurídico único ou celetista, com divergência doutrinária",1]],
  why:"STJ, REsp 1.409.199/SC: a isenção das custas processuais só alcança entidades com personalidade de direito público."},

S14:{t:"match", instr:"Correlacione a fundação ao Ministério Público que a controla",
  pairs:[["Fundação Pública Federal","MP Federal, independentemente de sede"],
         ["Fundação Pública Estadual","MP Estadual, de acordo com a sede"],
         ["Fundação Privada","MP Estadual, de acordo com a sede"]],
  why:"Só a federal foge do MP Estadual — e ela foge independentemente de onde esteja a sede."},

S15:{t:"mc", instr:"Qual a forma jurídica obrigatória da sociedade de economia mista?",
  options:["Sociedade anônima","Qualquer forma admitida em direito",
           "Sociedade limitada","Fundação de direito privado"],
  answer:0,
  why:"Qualquer forma admitida em direito é a da empresa pública; a SEM é obrigatoriamente S/A, pela Lei 13.303/2016."},

S16:{t:"sort", instr:"A característica é da empresa pública (EP) ou da sociedade de economia mista (SEM)?",
  buckets:["Empresa pública","Sociedade de economia mista"],
  items:[["Capital exclusivamente público, podendo participar mais de uma entidade pública",0],
         ["Capital misto: público majoritário + privado",1],
         ["Qualquer forma admitida em direito",0],
         ["Obrigatoriamente sociedade anônima",1],
         ["Quando federal, processos na Justiça Federal",0],
         ["Quando federal, processos na Justiça Estadual, salvo se a União atuar como assistente ou oponente",1]],
  why:"Guarde o cruzamento: a EP tem capital só público mas vai para a Justiça Federal; a SEM tem capital misto e fica na Justiça Estadual."},

S17:{t:"multi", instr:"Marque as sujeições ao direito público das empresas públicas e sociedades de economia mista",
  options:["Controle pelo Tribunal de Contas",
           "Concurso público",
           "Licitação na atividade-meio",
           "Execução de suas obrigações por precatórios",
           "Sujeição à falência",
           "Aprovação do nome dos dirigentes pelo Poder Legislativo"],
  answers:[0,1,2],
  why:"As três últimas são exatamente o que NÃO se aplica às estatais."},

S18:{t:"gap", instr:"Complete a frase sobre a execução das obrigações das estatais",
  before:"As obrigações não adimplidas de responsabilidade das empresas estatais deverão ser executadas mediante ",
  after:", conforme o art. 173, § 1º, II, da CF.",
  options:["o regime jurídico próprio das empresas privadas","o regime constitucional de precatórios","a lista de precatórios do ente criador"],
  answer:0,
  why:"Precatório é prerrogativa de autarquia e fundação de direito público, não de estatal."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Direito Administrativo 06","https://www.tecconcursos.com.br/s/Q1TnF7","Q1TnF7"],
  ["Caderno FCC — Direito Administrativo 06","https://www.tecconcursos.com.br/s/Q1w5IF","Q1w5IF"],
  ["Caderno FGV — Direito Administrativo 06","https://www.tecconcursos.com.br/s/Q1w5IG","Q1w5IG"],
  ["Caderno VUNESP — Direito Administrativo 06","https://www.tecconcursos.com.br/s/Q1w5IQ","Q1w5IQ"],
  ["Caderno AOCP — Direito Administrativo 06","https://www.tecconcursos.com.br/s/Q23KvB","Q23KvB"],
  ["Caderno IBFC — Direito Administrativo 06","https://www.tecconcursos.com.br/s/Q27UCL","Q27UCL"],
  ["Caderno FUNDATEC — Direito Administrativo 06","https://www.tecconcursos.com.br/s/Q27XQO","Q27XQO"]
];
var TECNOTA = "O próprio resumo avisa que este assunto tem relevância altíssima e pede reestudo em até 72h. Três fronteiras respondem pela maioria dos erros. A primeira é o par descentralização/desconcentração: descentralização distribui funções para OUTRA pessoa jurídica e não há hierarquia; desconcentração distribui DENTRO da mesma pessoa jurídica, em hierarquia — daí a secretaria municipal criada pelo prefeito e o desmembramento da delegacia serem desconcentração, e a fusão de dois ministérios ser concentração. Dentro da descentralização, a banca troca as modalidades: por serviços transfere titularidade E execução, depende de lei, prazo indeterminado e controle finalístico; por colaboração transfere APENAS a execução, com controle amplo e rígido, prazo determinado por contrato (concessão) e indeterminado por ato (autorização). A segunda é a coluna do direito público contra a do direito privado: autarquia é criada diretamente por lei, tem bens públicos, regime jurídico único, prescrição quinquenal de cinco anos e precatórios — mas em lista própria, porque tem autonomia financeira; fundação de direito privado nasce de autorização em lei mais registro em cartório e NÃO tem isenção das custas processuais (STJ, REsp 1.409.199/SC); EP e SEM são de direito privado, não se sujeitam à falência nem a precatórios (art. 173, § 1º, II, da CF), mas se sujeitam a Tribunal de Contas, concurso público e licitação na atividade-meio (Lei 13.303, art. 28). A terceira é o cruzamento EP × SEM, que a banca inverte de propósito: EP tem capital exclusivamente público e qualquer forma admitida em direito, e a federal é julgada na Justiça FEDERAL; SEM tem capital misto com público majoritário, é obrigatoriamente sociedade anônima, e a federal é julgada na Justiça ESTADUAL, salvo se a União atuar como assistente ou oponente. Fecham a lista dois detalhes das agências: elas não compõem a hierarquia administrativa (ausência de tutela ou subordinação — art. 3º da Lei 13.848) e seus dirigentes têm mandato fixo, sem exoneração ad nutum — mas independência administrativa não é independência em relação aos Poderes.";

var UNITS = [
  {n:1, title:"Entidade, órgão e descentralização", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Entidade, órgão e as três formas de organizar a máquina", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · entidade e órgãos públicos", xp:25, data:["S1","S2","T0","T1","T2","T3","T4","T5","T6","T7"]},
    {id:"K3", type:"drill",  title:"Praticar · teoria do órgão e centralização", xp:25, data:["S6","S3","T8","T9","T10","T11","T12","T13"]},
    {id:"K4", type:"drill",  title:"Praticar · modalidades e exemplos da banca", xp:25, data:["S4","S5","T14","T15","T16","T17","T18","T19","T20"]},
    {id:"K5", type:"flash",  title:"Flashcards · conceitos iniciais", xp:15, data:[0,1,2,3,4,5,6,7,8,9,10]}
  ]},
  {n:2, title:"Administração Direta, Indireta e autarquias", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Da Administração Direta às agências reguladoras", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · Direta, Indireta e criação da autarquia", xp:25, data:["S7","S8","T21","T22","T23","T24","T25"]},
    {id:"K8", type:"drill",  title:"Praticar · prerrogativas, patrimônio e foro", xp:25, data:["S9","S10","T26","T27","T28","T29"]},
    {id:"K9", type:"drill",  title:"Praticar · agências executivas e reguladoras", xp:25, data:["S11","S12","T30","T31","T32","T33","T34","T35","T36"]},
    {id:"K10",type:"flash",  title:"Flashcards · Administração Indireta e autarquias", xp:15, data:[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]}
  ]},
  {n:3, title:"Fundações, empresas públicas e SEM", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Fundações públicas e as estatais", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · fundações públicas", xp:25, data:["S13","S14","T37","T38","T39","T40","T41"]},
    {id:"K13",type:"drill",  title:"Praticar · natureza e regime das estatais", xp:25, data:["S15","S16","T42","T43","T44","T45"]},
    {id:"K14",type:"drill",  title:"Praticar · pessoal, capital e foro das estatais", xp:25, data:["S17","S18","T46","T47","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · fundações, EP e SEM", xp:15, data:[26,27,28,29,30,31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo", xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos", xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado", xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 06 de Direito Administrativo (Radegondes) ---------- */
var COM={
0:"<p>Certo, é a definição de abertura do resumo: <b>entidade é a pessoa jurídica, pública ou privada, que possui personalidade jurídica</b>.</p><p>O material completa a moldura: <b>toda a atividade administrativa do Estado se desenvolve, direta ou indiretamente, por meio da atuação de entidades públicas, órgãos e seus respectivos agentes</b>. Guarde o contraste que vem na linha seguinte: a <b>entidade</b> tem personalidade jurídica; o <b>órgão</b>, não.</p><p class='fb-fonte'>Resumo 06 · <i>Entidade</i></p>",
1:"<p>Errado — trocou as duas espécies. No resumo: as <b>entidades políticas</b> são as que <b>possuem autonomia política, isto é, capacidade de legislar</b>; as <b>entidades administrativas</b> são as que <b>não possuem autonomia política, ou seja, não podem legislar</b>.</p><p>O quadro do material fecha em duas linhas: <b>POLÍTICA</b> — possui autonomia política, <b>somente U, E, DF e M</b>; <b>ADMINISTRATIVA</b> — <b>não pode legislar; possui apenas autonomia administrativa</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Entidade</i></p>",
2:"<p>Certo, é a <b>QUESTÃO-DEFINIÇÃO</b> do resumo, com este mesmo enunciado: as entidades políticas são pessoas jurídicas de direito público interno (União, Estados, DF e Municípios) e as entidades administrativas <b>integram a administração pública, mas não têm autonomia política, como as autarquias e as fundações públicas</b>. [CERTO]</p><p>É a régua para separar quem legisla de quem só administra.</p><p class='fb-fonte'>Resumo 06 · <i>Entidade — questão-definição</i></p>",
3:"<p>Certo nas duas partes. O resumo define o órgão como <b>uma unidade com atribuição específica dentro da organização do Estado, ou seja, é o centro de competência instituído na estrutura interna da entidade</b>.</p><p>E logo depois: <b>os órgãos públicos não possuem personalidade jurídica ou capacidade processual, dessa maneira respondem pelos seus atos o ente federativo que o criou</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Órgão</i></p>",
4:"<p>Errado. É a <b>QUESTÃO-PEGADINHA</b> do resumo, com este mesmo enunciado do CESPE/PM AL 2021, e o gabarito dele é <b>ERRADO</b>.</p><p>O defeito está em <b>dotados de personalidade jurídica</b>: os órgãos públicos <b>não possuem personalidade jurídica</b>. Quem tem personalidade jurídica é a <b>entidade</b>; o órgão é apenas o <b>centro de competência instituído na estrutura interna</b> dela.</p><p class='fb-fonte'>Resumo 06 · <i>Órgão — questão-pegadinha</i></p>",
5:"<p>Errado pelo <b>nenhum</b>. A regra é a da assertiva, mas o resumo registra uma <b>EXCEÇÃO</b> expressa: <b>os órgãos autônomos e independentes possuem capacidade processual para impetração de mandado de segurança na defesa de suas prerrogativas e competências</b>.</p><p>Repare que a exceção é dupla: só vale para essas duas posições estatais e só para <b>mandado de segurança</b> em defesa de prerrogativas e competências próprias.</p><p class='fb-fonte'>Resumo 06 · <i>Administração Direta — Órgãos Públicos</i></p>",
6:"<p>Certo, é a letra do quadro de classificação <b>quanto à posição estatal</b>: <b>órgãos independentes — previstos na CF, sem subordinação a outro órgão</b>; <b>órgãos autônomos — subordinados apenas aos independentes</b>.</p><p>Complete a escada para não cair na troca: <b>superiores</b> possuem <b>atribuições de direção</b> e <b>subalternos</b> ficam com <b>apenas execução e reduzido poder decisório</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Classificação dos Órgãos — quanto à posição estatal</i></p>",
7:"<p>Errado — invertido. No resumo, quanto à <b>estrutura</b>: <b>órgãos simples ou unitários não possuem subdivisões</b>; <b>órgãos compostos possuem subdivisões</b>.</p><p>Atalho pelo nome: <b>unitário</b> é uma unidade só, indivisível; <b>composto</b> é composto de partes.</p><p class='fb-fonte'>Resumo 06 · <i>Classificação dos Órgãos — quanto à estrutura</i></p>",
8:"<p>Certo. O resumo lista três teorias e aponta a vencedora: <b>Teoria do Mandato</b> (os agentes eram mandatários do Estado), <b>Teoria da Representação</b> (os agentes eram representantes do Estado) e <b>Teoria do Órgão</b> (<b>a pessoa jurídica manifesta sua vontade por meio dos órgãos que a compõem</b>) — e fecha: <b>essa é a teoria adotada no Brasil</b>.</p><p>A frase do material que ajuda a fixar: <b>o órgão é parte do corpo da entidade e, assim, todas as suas manifestações de vontade são consideradas como da própria entidade</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Teorias Aplicáveis às Relações do Estado com seus Agentes</i></p>",
9:"<p>Errado. É a <b>QUESTÃO-PEGADINHA</b> do resumo, com este mesmo enunciado do CESPE/TC DF 2021, e o comentário dele é direto: <b>apenas a Teoria do Órgão imputa a vontade do órgão à Pessoa Jurídica em que se encontra inserido</b>.</p><p>O resumo explica a virada: com a teoria do órgão <b>substitui-se a ideia de representação pela ideia de imputação</b>. A <b>representação</b> considerava que o Estado <b>outorgava a responsabilidade ao agente</b>, e não à pessoa jurídica; com a <b>imputação</b>, os atos praticados pelos órgãos <b>são imputados ao Estado</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Teorias — questão-pegadinha</i></p>",
10:"<p>Certo, é o conceito literal: <b>CENTRALIZAÇÃO — o Estado executa as tarefas diretamente, por intermédio da Administração Direta</b>.</p><p>Ponha ao lado a definição vizinha para não confundir: na <b>descentralização</b>, o Estado <b>distribui funções para outra pessoa, física ou jurídica</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Centralização x Descentralização x Desconcentração</i></p>",
11:"<p>Errado no final. O resumo define: <b>DESCENTRALIZAÇÃO — o Estado distribui funções para outra pessoa, física ou jurídica</b>, e acrescenta em seguida, na mesma linha: <b>não há hierarquia</b>.</p><p>Hierarquia é a marca da <b>desconcentração</b>, em que a entidade <b>se desmembra em órgãos, organizados em hierarquia</b>. Na descentralização, o que existe é <b>vinculação</b> — a supervisão ministerial, que o próprio resumo diz não ser subordinação.</p><p class='fb-fonte'>Resumo 06 · <i>Centralização x Descentralização x Desconcentração</i></p>",
12:"<p>Certo nas três notas do resumo sobre a <b>DESCONCENTRAÇÃO</b>: <b>ocorre quando a entidade se desmembra em órgãos, organizados em hierarquia</b>; <b>é uma técnica administrativa para melhorar o desempenho da entidade</b>; e <b>ocorre dentro de uma mesma pessoa jurídica</b>.</p><p>Guarde o quadro comparativo: <b>descentralização</b> distribui funções para <b>outra</b> pessoa jurídica; <b>desconcentração</b>, <b>dentro da mesma</b> pessoa jurídica.</p><p class='fb-fonte'>Resumo 06 · <i>Desconcentração</i></p>",
13:"<p>Errado — a assertiva trocou as colunas do quadro do resumo. Nele: <b>DESCENTRALIZAÇÃO — distribui funções para outra pessoa jurídica</b>; <b>DESCONCENTRAÇÃO — distribui funções dentro da mesma pessoa jurídica</b>.</p><p>Esse é o par que responde por mais erros no assunto. Fixe pelo prefixo: <b>des-CENTRO</b> manda para fora do centro, para outra pessoa; <b>des-CONCENTRAÇÃO</b> espalha por dentro, entre órgãos, em hierarquia.</p><p class='fb-fonte'>Resumo 06 · <i>Descentralização x Desconcentração</i></p>",
14:"<p>Certo, é o quadro inteiro da <b>DESCENTRALIZAÇÃO POR SERVIÇOS</b> (também chamada funcional, técnica ou por outorga): <b>o Estado transfere a titularidade e a execução do serviço</b>; <b>depende de lei</b>; <b>prazo indeterminado</b>; <b>controle finalístico</b>.</p><p>O exemplo do material é o que fecha a lógica: <b>criação de entidades da Administração Indireta</b>. Se é por lei e transfere a titularidade, é por serviços.</p><p class='fb-fonte'>Resumo 06 · <i>Descentralização por Serviços</i></p>",
15:"<p>Errado por uma palavra: <b>titularidade</b>. Na <b>DESCENTRALIZAÇÃO POR COLABORAÇÃO</b> (ou delegação), <b>o Estado transfere apenas a execução do serviço</b>.</p><p>Quem transfere <b>titularidade e execução</b> é a descentralização <b>por serviços</b>, que depende de lei e tem prazo indeterminado. Na colaboração o controle é <b>amplo e rígido</b> — justamente porque a titularidade permanece com o Estado.</p><p class='fb-fonte'>Resumo 06 · <i>Descentralização por Colaboração</i></p>",
16:"<p>Certo, e é exatamente o desdobramento que o resumo faz da descentralização por colaboração: <b>prazo determinado por meio de contrato (ex.: concessão de serviço)</b> e <b>prazo indeterminado por meio de ato (ex.: autorização de serviço)</b>.</p><p>Memorize o par ligado à forma: <b>contrato → prazo determinado → concessão</b>; <b>ato unilateral → prazo indeterminado → autorização</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Descentralização por Colaboração</i></p>",
17:"<p>Certo pela letra do quadro: <b>DESCENTRALIZAÇÃO TERRITORIAL — o Estado transfere competências administrativas para entidade geograficamente delimitada. Exemplo: criação de Territórios Federais</b>.</p><p>É a terceira modalidade, ao lado da <b>por serviços</b> e da <b>por colaboração</b>. A palavra-chave aqui é <b>geograficamente delimitada</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Descentralização Territorial</i></p>",
18:"<p>Errado. É a <b>QUESTÃO-EXEMPLO</b> do resumo, com este mesmo enunciado do CESPE/CGM JP 2018, e o gabarito é <b>CERTO</b> para <b>desconcentração administrativa</b> — logo, dizer <b>descentralização</b> torna a assertiva errada.</p><p>A razão é a do quadro: criar uma secretaria é criar um <b>órgão</b>, dentro da <b>mesma pessoa jurídica</b> (o município), em <b>hierarquia</b>. Não há pessoa jurídica nova, então não há descentralização.</p><p class='fb-fonte'>Resumo 06 · <i>Centralização x Descentralização x Desconcentração — questão-exemplo</i></p>",
19:"<p>Certo, é a <b>QUESTÃO-EXEMPLO</b> do resumo, com este mesmo enunciado do CESPE/TCE PA 2016 e gabarito <b>CERTO</b>: a fusão de dois ministérios é exemplo de <b>concentração administrativa</b>.</p><p>Pense no movimento contrário ao da desconcentração: se desmembrar a entidade em órgãos é <b>desconcentrar</b>, reunir dois órgãos em um só é <b>concentrar</b> — e tudo isso <b>dentro da mesma pessoa jurídica</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Centralização x Descentralização x Desconcentração — questão-exemplo</i></p>",
20:"<p>Certo, e é a <b>QUESTÃO-EXEMPLO</b> da FGV que o resumo traz por inteiro: a DRFAC é desmembrada e passam a existir a DRFA e a DRFC. O gabarito é a letra <b>d) desconcentração administrativa, consistente em distribuição interna de competências</b>.</p><p>As duas expressões do gabarito são o que a banca quer ver: <b>desconcentração</b> e <b>distribuição interna de competências</b> — ou seja, dentro da mesma pessoa jurídica, em hierarquia.</p><p class='fb-fonte'>Resumo 06 · <i>Desconcentração — questão-exemplo</i></p>",
21:"<p>Errado. O resumo lista os <b>consórcios públicos</b> entre as categorias da Administração Indireta, com a ressalva: <b>integra a Adm Indireta dos entes consorciados</b>.</p><p>A lista completa, que aparece duas vezes no material, é: <b>autarquias, fundações públicas, empresas públicas, sociedades de economia mista e consórcios públicos</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Administração Indireta</i></p>",
22:"<p>Certo nas duas partes. O resumo define a Administração Indireta como o <b>conjunto de pessoas jurídicas (desprovidas de autonomia política)</b> que, <b>vinculadas à Administração Direta</b>, têm competência para atividades administrativas <b>de forma descentralizada</b>.</p><p>E acrescenta que ela compreende as categorias de entidades <b>todas dotadas de personalidade jurídica própria</b>. Autonomia política só as entidades <b>políticas</b> têm — U, E, DF e M.</p><p class='fb-fonte'>Resumo 06 · <i>Administração Indireta</i></p>",
23:"<p>Errado em dois pontos. O resumo abre o quadro das autarquias assim: <b>é a pessoa jurídica de direito público criada diretamente por lei</b>, e repete no item seguinte: <b>criação e extinção: diretamente por lei</b>.</p><p>Direito privado e <b>autorização em lei + registro em cartório</b> são o caminho das <b>fundações públicas de direito privado</b> e das <b>empresas públicas e sociedades de economia mista</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Autarquias</i></p>",
24:"<p>Certo, é a <b>QUESTÃO-DEFINIÇÃO</b> do resumo, com este enunciado da VUNESP 2018 e gabarito <b>CERTO</b>.</p><p>Encaixa com o quadro: <b>criação e extinção: diretamente por lei</b>. A simetria é a lógica do ponto — se a autarquia nasce por lei, só por lei morre.</p><p class='fb-fonte'>Resumo 06 · <i>Autarquias — questão-definição</i></p>",
25:"<p>Errado. O resumo traz a questão da VUNESP 2018 em sentido oposto, com gabarito <b>CERTO</b>: <b>o Poder Judiciário poderá constituir fundações e autarquias</b>.</p><p>O comentário do material explica: <b>a administração indireta — existente em todos os entes federados — pode ser integrada por entidades vinculadas a qualquer dos três Poderes</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Autarquias — questão-definição</i></p>",
26:"<p>Certo, é a questão da VUNESP 2018 que o resumo reproduz com gabarito <b>CERTO</b>, e está na lista de prerrogativas como <b>prescrição quinquenal</b>.</p><p>Repare no marco inicial, que a banca costuma trocar: <b>a data do ato ou fato do qual se originaram</b> a dívida — e o prazo é de <b>cinco anos</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Autarquias — prerrogativas</i></p>",
27:"<p>Errado. É a <b>QUESTÃO-PEGADINHA</b> do resumo, com este mesmo enunciado da VUNESP 2018 e gabarito <b>ERRADO</b>.</p><p>O comentário do material resolve: <b>as Autarquias possuem autonomia financeira, de forma que não se submete a mesma ordem dos precatórios do ente federativo que as criaram. Assim, cada Autarquia será responsável por gerir sua própria lista de precatórios</b>.</p><p>Ou seja: precatório <b>sim</b> — está nas prerrogativas —, mas em <b>lista própria</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Autarquias — questão-pegadinha</i></p>",
28:"<p>Certo pela letra do quadro: <b>foro judicial — Justiça Federal (federais) e Justiça Estadual (estaduais e municipais)</b>.</p><p>O resumo usa essa regra em uma questão do CESPE/TCE MG 2018: os processos judiciais de uma <b>agência executiva estadual</b> são de competência da <b>justiça estadual comum</b>, <b>por se tratar de uma autarquia estadual</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Autarquias — foro judicial</i></p>",
29:"<p>Errado — invertido. O resumo diz das <b>autarquias de regime especial</b>: <b>possui maior autonomia que as demais</b> e <b>os dirigentes possuem estabilidade</b>.</p><p>São elas que podem ser qualificadas em <b>Agências Executivas</b> ou <b>Agências Reguladoras</b>. Sobre as reguladoras, o material reforça: <b>possuem maior autonomia em relação à Administração Direta</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Autarquias — regime especial</i></p>",
30:"<p>Certo, é o quadro <b>ATENÇÃO!</b> do resumo: <b>o Poder Executivo poderá qualificar como Agência Executiva a autarquia ou fundação que tenha cumprido os seguintes requisitos: I — ter um plano estratégico de reestruturação em andamento; II — ter celebrado Contrato de Gestão com o respectivo Ministério supervisor</b>.</p><p>Duas trocas que a banca tenta: dizer que o plano já deve estar <b>concluído</b> (é <b>em andamento</b>) e que o contrato é com o <b>Tribunal de Contas</b> (é com o <b>Ministério supervisor</b>).</p><p class='fb-fonte'>Resumo 06 · <i>Autarquias — Atenção! (Agências Executivas)</i></p>",
31:"<p>Certo, é a definição literal: <b>são autarquias em regime especial que possuem a função de fiscalizar, regular e normatizar a prestação de serviços públicos transferidos à iniciativa privada, na forma da lei, com intenção de reduzir gastos e buscar maior eficiência na execução de tais atividades</b>.</p><p>O resumo lembra o contexto histórico numa questão da VUNESP 2018: foi com o <b>Programa Nacional de Desestatização</b>, para <b>regular o serviço público exercido por entes privados</b>, que se criaram as <b>agências reguladoras</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Agências Reguladoras</i></p>",
32:"<p>Errado. O resumo afirma o contrário, em duas linhas seguidas: <b>embora sob supervisão ministerial, não compõem a hierarquia administrativa</b> e <b>é caracterizada pela ausência de tutela ou de subordinação hierárquica (art. 3º, lei 13.848)</b>.</p><p>A questão-exemplo da FGV/TCU 2022 reúne tudo no gabarito: <b>autarquia em regime especial, que é caracterizada pela ausência de tutela ou de subordinação hierárquica, pela autonomia funcional, decisória, administrativa e financeira e pela investidura a termo de seus dirigentes e estabilidade durante os mandatos</b>, com <b>controle externo exercido pelo Congresso Nacional, com auxílio do Tribunal de Contas da União</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Agências Reguladoras</i></p>",
33:"<p>Certo, é a questão do CESPE/EMAP 2018 que o resumo reproduz com gabarito <b>CERTO</b>, e o comentário dele é a chave: <b>as agências reguladoras possuem independência administrativa, contudo, não possuem independência em relação aos Poderes</b>.</p><p>As duas coisas convivem: autonomia <b>funcional, decisória, administrativa e financeira</b>, maior que a da Administração Direta, e ao mesmo tempo <b>controle externo do Poder Legislativo e do Tribunal de Contas</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Agências Reguladoras</i></p>",
34:"<p>Errado só no fecho. O resumo diz dos dirigentes das agências reguladoras: <b>são escolhidos pelo Presidente da República e aprovados pelo Senado Federal</b>; <b>possuem mandato fixo (estabilidade durante os mandatos)</b>; e <b>não podem sofrer exoneração ad nutum (sem contraditório e ampla defesa)</b>.</p><p>É o oposto do que ocorre nos cargos em comissão. A estabilidade durante o mandato é justamente o que dá sentido ao <b>regime especial</b> da autarquia.</p><p class='fb-fonte'>Resumo 06 · <i>Agências Reguladoras — dirigentes</i></p>",
35:"<p>Certo, é a lista do resumo sobre o que as agências podem fazer <b>no exercício da função regulatória</b>: <b>editar normas; exercer fiscalização sobre as empresas concessionárias; revisar e fixar tarifas; aplicar sanções; solucionar conflitos entre as empresas e os clientes; solucionar reclamações dos consumidores</b>.</p><p>Repare nas duas competências que mais surpreendem quem lê rápido: <b>revisar e fixar tarifas</b> e <b>solucionar conflitos</b> — a agência não apenas normatiza, ela decide.</p><p class='fb-fonte'>Resumo 06 · <i>Agências Reguladoras — função regulatória</i></p>",
36:"<p>Errado por uma palavra. No quadro <b>Recapitulando</b>, o resumo define a <b>SUPERVISÃO MINISTERIAL (ou tutela administrativa)</b> como a <b>vinculação (não é subordinação) entre a Administração Direta e Indireta</b>.</p><p>Os objetivos que o material lista confirmam o caráter de vinculação: verificar os <b>resultados</b> das entidades descentralizadas, a <b>harmonização</b> de suas atividades com a política do Governo e a <b>eficiência de sua gestão e a manutenção de sua autonomia</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Supervisão Ministerial (ou Tutela Administrativa)</i></p>",
37:"<p>Certo nas duas partes. O resumo abre o tema assim: <b>as Fundações Públicas podem ser de Direito Privado ou de Direito Público</b>. E no item de criação: <b>autorização em lei + registro em cartório se for de direito privado; ou diretamente por lei se for de direito público</b>.</p><p>Esse é o eixo de quase toda questão sobre fundações: descubra primeiro se ela é de <b>direito público</b> (aí vale o regime das autarquias) ou de <b>direito privado</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Fundações Públicas</i></p>",
38:"<p>Errado. Criação <b>diretamente por lei</b> é o caminho da fundação pública <b>de direito público</b>. A de <b>direito privado</b> exige <b>autorização em lei + registro em cartório</b>.</p><p>Guarde a simetria com as demais entidades: <b>direito público</b> (autarquia e fundação pública de direito público) nasce <b>por lei</b>; <b>direito privado</b> (fundação de direito privado, empresa pública, sociedade de economia mista) nasce de <b>autorização em lei mais registro em cartório</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Fundações Públicas — criação e extinção</i></p>",
39:"<p>Certo, é a <b>JURISPRUDÊNCIA RELEVANTE</b> destacada no resumo — <b>STJ, REsp 1.409.199/SC</b>: <b>as fundações públicas de direito privado não fazem jus à isenção das custas processuais. A isenção das custas processuais somente se aplica para as entidades com personalidade de direito público</b>.</p><p>No quadro de prerrogativas, o material já antecipa: <b>se for de direito público, as mesmas que as autarquias (ex.: isenção das custas processuais); se for de direito privado, não possui isenção das custas processuais</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Fundações Públicas — Jurisprudência Relevante</i></p>",
40:"<p>Errado. O quadro do <b>controle do Ministério Público</b> é explícito: <b>se for Fundação Pública Federal => MP Federal, independentemente de sede</b>.</p><p>O critério da <b>sede</b> vale para as outras duas: <b>Fundação Pública Estadual => MP Estadual, de acordo com a sede</b>; <b>Fundação Privada => MP Estadual, de acordo com a sede</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Fundações Públicas — Controle do Ministério Público</i></p>",
41:"<p>Certo, é a ressalva que o resumo faz no item <b>Patrimônio</b> das fundações: <b>bens privados (se for de direito privado) => sendo que os bens empregados na prestação de serviços públicos possuem prerrogativas de bens públicos</b>.</p><p>A mesma ressalva reaparece nas estatais: nas <b>prestadoras de serviço público</b>, os bens empregados na prestação dos serviços <b>possuem prerrogativas de bens públicos</b>. É a lógica da continuidade do serviço público.</p><p class='fb-fonte'>Resumo 06 · <i>Fundações Públicas — patrimônio</i></p>",
42:"<p>Certo, e é a frase de abertura do tema no resumo: <b>tanto a EP quanto a SEM são pessoas jurídicas de direito privado, integrantes da Administração Indireta do Estado, criadas por autorização legal</b>. No item seguinte: <b>criação e extinção: autorização em lei + registro em cartório</b>.</p><p>A distinção entre <b>autorizada por lei</b> e <b>criada por lei</b> é a fronteira que separa as estatais das autarquias — nestas, a lei já cria.</p><p class='fb-fonte'>Resumo 06 · <i>Empresas Públicas (EP) + Sociedades de Economia Mista (SEM)</i></p>",
43:"<p>Errado. O resumo é direto no item <b>Subsidiárias</b>: <b>depende de autorização legislativa; pode ser genérica, na lei que autorizou a criação da matriz</b>.</p><p>Note a nuance que a banca explora: a autorização é <b>obrigatória</b>, mas pode ser <b>genérica</b> — ou seja, não precisa de uma lei específica para cada subsidiária, e sim de previsão na lei da matriz.</p><p class='fb-fonte'>Resumo 06 · <i>EP + SEM — subsidiárias</i></p>",
44:"<p>Certo, é a letra do item <b>Regime jurídico</b>: <b>Misto — + de direito privado nas exploradoras de atividade empresarial; + de direito público nas prestadoras de serviço público</b>.</p><p>Esse gradiente explica o resto do quadro: é por serem prestadoras de serviço público que algumas estatais têm <b>bens com prerrogativas de bens públicos</b>, embora a <b>personalidade jurídica</b> seja sempre de <b>direito privado</b>.</p><p class='fb-fonte'>Resumo 06 · <i>EP + SEM — regime jurídico</i></p>",
45:"<p>Errado. É a <b>QUESTÃO-PEGADINHA</b> do resumo, com este mesmo enunciado da VUNESP 2018 e gabarito <b>ERRADO</b>. O comentário dele encerra: <b>tanto as empresas públicas quanto as sociedades de economia mista submetem-se ao regime de licitação previsto na lei 13.303 (art. 28)</b>.</p><p>O quadro do material já dizia: entre as <b>sujeições ao direito público</b> das estatais estão <b>controle pelo Tribunal de Contas</b>, <b>concurso público</b> e <b>licitação na atividade-meio</b>.</p><p class='fb-fonte'>Resumo 06 · <i>EP + SEM — questão-pegadinha (licitação)</i></p>",
46:"<p>Certo, é a questão da VUNESP 2018 reproduzida no resumo com gabarito <b>CERTO</b>, e coincide com o item <b>Pessoal</b> do quadro: <b>celetista. Sem estabilidade. Porém, a demissão exige motivação</b>.</p><p>No mesmo item vêm duas notas que a banca também cobra: <b>não cabe ao Legislativo aprovar o nome de dirigentes</b> das estatais e <b>é possível mandado de segurança contra atos dos dirigentes em licitações</b>.</p><p class='fb-fonte'>Resumo 06 · <i>EP + SEM — pessoal</i></p>",
47:"<p>Certo, é a questão da VUNESP 2018 com gabarito <b>CERTO</b> no resumo. O comentário do material dá a razão: <b>como se trata de um ato de autoridade integrante da administração pública (indireta, no caso) e não um ato de gestão, caberá, sim, mandado de segurança</b>.</p><p>E o contraponto, que é onde a banca inverte: <b>não cabe Mandado de Segurança contra o ato de gestão</b>, conforme o art. 1º, § 2º, da Lei nº 12.016.</p><p class='fb-fonte'>Resumo 06 · <i>EP + SEM — mandado de segurança</i></p>",
48:"<p>Errado. É a <b>QUESTÃO-PEGADINHA</b> do resumo, com este mesmo enunciado da VUNESP 2018 e gabarito <b>ERRADO</b>. O comentário dele: <b>as obrigações não adimplidas de responsabilidade das empresas estatais deverão ser executadas mediante regime jurídico próprio das empresas privadas, conforme art. 173, § 1º, II, da CF</b>.</p><p>O dispositivo transcrito no material fala da <b>sujeição ao regime jurídico próprio das empresas privadas, inclusive quanto aos direitos e obrigações civis, comerciais, trabalhistas e tributários</b>. Precatório é prerrogativa de <b>autarquia</b>, não de estatal — e o quadro confirma: as estatais <b>não se sujeitam a falência e execução</b>.</p><p class='fb-fonte'>Resumo 06 · <i>EP + SEM — questão-pegadinha (precatórios)</i></p>",
49:"<p>Certo nas duas metades. <b>Forma jurídica:</b> <b>SEM => Sociedade Anônima; EP => qualquer forma admitida em direito</b>. <b>Composição do capital:</b> <b>EP => exclusivamente público, podendo participar mais de uma entidade pública</b>.</p><p>O resumo reforça a parte da SEM com a questão da VUNESP 2018 sobre a <b>Lei Federal nº 13.303/2016</b>: as sociedades de economia mista são constituídas <b>obrigatoriamente</b> sob a forma de sociedade anônima e, <b>ainda que sob a modalidade de capital fechado, devem adotar as normas da Comissão de Valores Mobiliários</b> sobre escrituração e elaboração de demonstrações financeiras. [CERTO]</p><p class='fb-fonte'>Resumo 06 · <i>EP + SEM — forma jurídica e composição do capital</i></p>",
50:"<p>Errado — e este é o cruzamento que a banca mais inverte. No quadro de <b>foro judicial</b>: <b>SEM Federal = Justiça Estadual, exceto se a União atuar como assistente ou oponente</b>; <b>EP Federal = Justiça Federal</b>.</p><p>Complete a regra: <b>EP ou SEM estadual ou municipal = Justiça Estadual</b>, e a observação do material — <b>ações trabalhistas => Justiça do Trabalho</b>.</p><p class='fb-fonte'>Resumo 06 · <i>EP + SEM — foro judicial</i></p>",
51:"<p>Certo, é a <b>QUESTÃO-DEFINIÇÃO</b> do resumo, com este enunciado do CESPE/TCE PA 2016 e gabarito <b>CERTO</b>.</p><p>O comentário do material explica com os números dele: <b>unipessoal</b> significa que <b>100% do capital social pertence à PJ instituidora</b> (ex.: 100% do capital de tal EP pertence à União); <b>pluripessoal</b> significa capital <b>repartido com outras PJs</b> (ex.: 51% à União, 40% ao Estado de São Paulo e 9% a outra EP). E o aviso final: <b>todo o capital de EP deve ser PÚBLICO</b>.</p><p class='fb-fonte'>Resumo 06 · <i>EP + SEM — questão-definição (unipessoal e pluripessoal)</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"06", nome:"Organização da Administração Pública", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
