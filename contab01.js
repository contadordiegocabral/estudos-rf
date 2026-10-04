/* Contabilidade Geral — Módulo 01: Conceito, objeto, finalidade, origem e aplicação, teoria das contas */
window.MOD = window.MOD || {};
window.MOD.contab01 = (function(){
"use strict";

var CARDS = [
  ["O que é a Contabilidade?","Uma <b>ciência social</b> que tem a função de <b>controlar, registrar e estudar</b> o patrimônio das entidades."],
  ["Qual o objeto de estudo da Contabilidade?","O <b>patrimônio</b> — o conjunto de <b>bens, direitos e obrigações</b>."],
  ["Qual o objetivo da Contabilidade?","<b>Controlar o patrimônio.</b>"],
  ["Qual a finalidade da Contabilidade?","<b>Fornecer informações úteis aos usuários</b> para a <b>tomada de decisão</b>."],
  ["Qual o campo de aplicação da Contabilidade?","<b>Todas as entidades que possuem patrimônio</b> — as entidades <b>econômico-administrativas</b>, também chamadas de <b>aziendas</b>."],
  ["Pegadinha clássica: a administração dos recursos escassos é objetivo da Contabilidade?","<b>Não.</b> É objetivo da <b>Economia</b>. O objetivo da Contabilidade é <b>controlar o patrimônio</b>."],
  ["Quem são os usuários da informação contábil?","<b>Internos</b> (sócios, administradores, empregados) e <b>externos</b> (investidores, credores, governo, fornecedores)."],
  ["Contabilidade gerencial — para que serve?","Fornecer informações aos <b>tomadores de decisão internos</b> à organização."],
  ["Contabilidade financeira — para que serve?","<b>Controlar o patrimônio</b> e prestar <b>informações aos usuários externos</b>."],
  ["Contabilidade de custos — para que serve?","Gerar informações que permitam o <b>planejamento das ações no ambiente operacional</b>."],
  ["Quais são as quatro técnicas contábeis?","<b>Escrituração</b> · <b>Elaboração das demonstrações contábeis</b> · <b>Auditoria</b> · <b>Análise das demonstrações contábeis</b>."],
  ["Técnica contábil — escrituração","É o <b>registro dos lançamentos contábeis</b>."],
  ["Técnica contábil — elaboração das demonstrações","Produz os <b>gráficos que espelham a situação econômico-financeira</b> da entidade."],
  ["Técnica contábil — auditoria","É a <b>verificação da veracidade dos registros</b>."],
  ["Técnica contábil — análise das demonstrações","É o <b>estudo das demonstrações contábeis</b> para <b>extrair informações</b>."],
  ["Qual a equação fundamental da Contabilidade?","<b>PL = Ativo − Passivo</b> — o patrimônio líquido é a diferença entre os elementos positivos e os negativos."],
  ["O que são os elementos positivos e negativos do patrimônio?","<b>Positivos:</b> bens e direitos → formam o <b>Ativo</b>. <b>Negativos:</b> obrigações → formam o <b>Passivo</b>."],
  ["O balanço patrimonial é uma demonstração estática ou dinâmica?","<b>Estática</b> — é um <b>retrato do patrimônio</b> naquele determinado momento."],
  ["Qual a regra de equilíbrio do balanço?","<b>Ativo total = Passivo + PL.</b> O lado esquerdo tem de ser igual ao direito."],
  ["Situação líquida positiva (superavitária)","<b>A &gt; P</b> — o ativo é maior que o passivo, e o PL é positivo."],
  ["Situação líquida negativa","<b>A &lt; P</b> — também chamada de <b>passivo a descoberto</b>."],
  ["Situação líquida nula","<b>A = P</b> — o PL é igual a zero."],
  ["Quando ocorre PL = Ativo?","Na <b>abertura da empresa</b>, quando ainda <b>não há obrigações</b> (passivo igual a zero). A situação líquida é positiva."],
  ["O que é passivo a descoberto?","É o <b>PL negativo</b>: a soma de bens e direitos <b>não cobre</b> a soma das obrigações — o passivo supera o ativo."],
  ["Como fica a equação no passivo a descoberto?","<b>Passivo = Ativo + Patrimônio Líquido</b> — o PL migra para o <b>lado esquerdo</b> do balanço."],
  ["Como se define Ativo?","<b>Recurso econômico controlado pela entidade como resultado de eventos passados.</b> É composto pelos bens e direitos."],
  ["Como se define Passivo?","<b>Obrigação presente da entidade de transferir um recurso econômico</b> como resultado de eventos passados."],
  ["Como se define Patrimônio Líquido?","A <b>participação residual nos ativos</b> da entidade <b>após a dedução de todos os seus passivos</b>."],
  ["Quais os grupos do Ativo (art. 179, Lei 6.404/76)?","<b>Circulante</b> (disponibilidades; direitos realizáveis no curso do exercício social subsequente; aplicações em despesas do exercício seguinte) e <b>Não circulante</b> (<b>realizável a longo prazo</b>, <b>investimentos</b>, <b>imobilizado</b>, <b>intangível</b>)."],
  ["O que separa passivo circulante de não circulante?","O <b>vencimento</b>: no <b>exercício seguinte</b> → circulante; <b>após</b> o exercício seguinte → não circulante."],
  ["O que são contas retificadoras?","<b>Contas redutoras do saldo do grupo a que pertencem</b> — aparecem com sinal negativo, como <b>(−) Depreciação Acumulada</b> e <b>(−) PECLD</b>."],
  ["Exemplo de retificadora: Veículos 80.000 e Depreciação Acumulada 10.000","O ativo vale <b>70.000</b> — a depreciação acumulada <b>reduz</b> o imobilizado."],
  ["Retificadoras do ativo mais cobradas","<b>(−) PECLD</b> (no circulante) · <b>(−) Depreciação Acumulada</b> (no imobilizado) · <b>(−) Amortização Acumulada</b> (no intangível)."],
  ["Retificadoras do passivo mais cobradas","<b>(−) Juros Passivos a Transcorrer</b> e <b>(−) Encargos Financeiros a Transcorrer</b>."],
  ["Ativo contingente entra no balanço?","<b>Não.</b> É um <b>possível</b> ativo, dependente de eventos futuros incertos fora do controle da entidade — <b>apenas divulgado em notas explicativas</b>. Numa listagem de contas, ignore-o."],
  ["Contas do PL — as principais","<b>(+)</b> Capital social subscrito · Reservas de capital · Reservas de lucros · <b>(±)</b> Ajuste de avaliação patrimonial · Ajuste acumulado de conversão · <b>(−)</b> Ações em tesouraria · Prejuízos acumulados."],
  ["Capital subscrito, integralizado e a integralizar","<b>Subscrito</b>: o que os sócios se comprometem a entregar. <b>Integralizado</b>: o que já entregaram. <b>A integralizar</b>: o que ainda falta — é conta <b>retificadora</b> do capital subscrito."],
  ["Exemplos de reservas de capital","<b>Ágio na emissão de ações</b> · <b>alienação de partes beneficiárias</b> · <b>alienação de bônus de subscrição</b>."],
  ["Exemplos de reservas de lucros","<b>Legal</b> · <b>estatutária</b> · <b>para contingências</b> · <b>de lucros a realizar</b> · <b>de incentivos fiscais</b>."],
  ["Origem e aplicação de recursos — onde está cada uma?","<b>Origem</b>: lado <b>direito</b> do balanço (Passivo + PL) — contas <b>credoras</b>. <b>Aplicação</b>: lado <b>esquerdo</b> (Ativo) — contas <b>devedoras</b>."],
  ["Sinônimos de Ativo","<b>Patrimônio bruto</b> · <b>capital aplicado</b> · <b>aplicação de recursos</b>. O <b>capital total à disposição da empresa</b> equivale ao <b>ativo total</b>."],
  ["Sinônimos de Passivo","<b>Capital de terceiros</b> · <b>passivo exigível</b> · <b>recursos de terceiros</b> · <b>capital alheio</b>."],
  ["Sinônimos de Patrimônio Líquido","<b>Capital próprio</b> · <b>passivo não exigível</b> · <b>recursos próprios</b> · <b>situação líquida</b> · <b>riqueza líquida</b>."],
  ["O que é a teoria das contas?","O conjunto de pensamentos contábeis que busca <b>organizar a escrituração</b>. São três: <b>personalista</b>, <b>materialista</b> e <b>patrimonialista</b>."],
  ["Teoria personalista — como classifica as contas?","Como <b>pessoas</b>: <b>agentes consignatários</b> (bens), <b>agentes correspondentes</b> (direitos e obrigações) e <b>agentes proprietários</b> (PL, receitas e despesas)."],
  ["Teoria materialista — como classifica as contas?","Em <b>integrais</b> (bens, direitos e obrigações) e <b>diferenciais</b> (PL, receitas e despesas)."],
  ["Teoria patrimonialista — como classifica as contas?","Em <b>contas patrimoniais</b> (bens, direitos, obrigações e PL) e <b>contas de resultado</b> (receitas e despesas)."],
  ["Qual teoria a Contabilidade adota atualmente?","A <b>patrimonialista</b> — é a que divide em contas <b>patrimoniais</b> e de <b>resultado</b>."]
];

var QS = [
  ["A Contabilidade é uma ciência social que tem por função controlar, registrar e estudar o patrimônio das entidades.","C","CESPE","Conceito inicial — ciência social, não exata."],
  ["O objeto de estudo da Contabilidade é o patrimônio, entendido como o conjunto de bens, direitos e obrigações.","C","FCC","Objeto = patrimônio."],
  ["O objetivo da Contabilidade é fornecer informações úteis aos usuários para a tomada de decisão.","E","FGV","Isso é a <b>finalidade</b>. O <b>objetivo</b> é <b>controlar o patrimônio</b>."],
  ["A finalidade da Contabilidade é fornecer informações úteis aos usuários da informação para a tomada de decisão.","C","CESPE","Finalidade — não confunda com o objetivo."],
  ["Um dos objetivos da Contabilidade é a administração dos recursos escassos.","E","VUNESP","A administração dos recursos escassos é objetivo da <b>Economia</b>."],
  ["O campo de aplicação da Contabilidade abrange todas as entidades que possuem patrimônio, também chamadas de entidades econômico-administrativas ou aziendas.","C","FCC","Inclui entidades com e sem fins lucrativos."],
  ["A Contabilidade aplica-se apenas às entidades com fins lucrativos.","E","CESPE","Aplica-se a <b>toda</b> entidade que tenha patrimônio."],
  ["A contabilidade gerencial tem por objetivo fornecer informações aos tomadores de decisão internos à organização.","C","FGV","Público interno — por isso não segue rigidamente as normas societárias."],
  ["A contabilidade financeira tem por objetivo o controle do patrimônio e a prestação de informações aos usuários externos.","C","FCC","É a contabilidade societária, voltada ao usuário externo."],
  ["A contabilidade de custos tem por objetivo gerar informações que permitam o planejamento das ações no ambiente operacional.","C","CESPE","Custos nasce na indústria e serve ao planejamento operacional."],
  ["São técnicas contábeis a escrituração, a elaboração das demonstrações contábeis, a auditoria e a análise das demonstrações contábeis.","C","VUNESP","São exatamente quatro."],
  ["A escrituração é a técnica contábil que verifica a veracidade dos registros.","E","FGV","Quem verifica a veracidade é a <b>auditoria</b>. A escrituração <b>registra</b> os lançamentos."],
  ["A análise das demonstrações contábeis é a técnica que estuda as demonstrações para extrair informações.","C","FCC","Índices de liquidez, endividamento e rentabilidade nascem daqui."],
  ["A consolidação das demonstrações contábeis é uma das quatro técnicas contábeis.","E","CESPE","As quatro são escrituração, elaboração, auditoria e análise."],
  ["A equação fundamental da Contabilidade estabelece que o patrimônio líquido é igual ao ativo menos o passivo.","C","CESPE","PL = A − P."],
  ["Os elementos positivos do patrimônio são os bens e os direitos, e os negativos, as obrigações.","C","FCC","Positivos formam o ativo; negativos, o passivo."],
  ["O balanço patrimonial é uma demonstração dinâmica, pois evidencia o fluxo de recursos do período.","E","FGV","O balanço é <b>estático</b> — um retrato em determinado momento. Dinâmica é a DRE."],
  ["No balanço patrimonial, o ativo total deve ser igual à soma do passivo com o patrimônio líquido.","C","VUNESP","É a regra do equilíbrio patrimonial."],
  ["Quando o ativo é maior que o passivo, a situação líquida é positiva ou superavitária.","C","CESPE","A > P → PL positivo."],
  ["Quando o ativo é menor que o passivo, há situação líquida negativa, também denominada passivo a descoberto.","C","FCC","A < P → PL negativo."],
  ["Quando o ativo é igual ao passivo, a situação líquida é nula.","C","FGV","A = P → PL = 0."],
  ["A situação em que o patrimônio líquido é igual ao ativo ocorre quando a entidade não possui obrigações, típica do início das atividades.","C","CESPE","Passivo igual a zero — situação líquida positiva."],
  ["Na hipótese de passivo a descoberto, a equação patrimonial passa a ser Passivo = Ativo + Patrimônio Líquido.","C","VUNESP","O PL negativo migra para o lado esquerdo do balanço."],
  ["No passivo a descoberto, o patrimônio líquido permanece no lado direito do balanço patrimonial.","E","FCC","Migra para o <b>lado esquerdo</b>, junto ao ativo."],
  ["Ativo é um recurso econômico controlado pela entidade como resultado de eventos passados.","C","CESPE","Definição da estrutura conceitual — note “controlado”, não “de propriedade”."],
  ["Passivo é uma obrigação presente da entidade de transferir um recurso econômico como resultado de eventos passados.","C","FGV","Definição da estrutura conceitual."],
  ["Patrimônio líquido é a participação residual nos ativos da entidade após a dedução de todos os seus passivos.","C","FCC","Por isso é residual — não se mede diretamente."],
  ["O ativo não circulante compõe-se de realizável a longo prazo, investimentos, imobilizado e intangível.","C","CESPE","Art. 179 da Lei 6.404/76."],
  ["As despesas antecipadas classificam-se no ativo circulante quando referentes ao exercício seguinte.","C","VUNESP","São as aplicações de recursos em despesas do exercício seguinte."],
  ["Os estoques classificam-se no ativo não circulante, por não serem realizáveis em dinheiro.","E","FGV","Estoques são <b>ativo circulante</b> — direitos realizáveis no curso do exercício social subsequente."],
  ["O critério de classificação do passivo entre circulante e não circulante é o vencimento da obrigação.","C","FCC","No exercício seguinte, circulante; depois dele, não circulante."],
  ["Contas retificadoras são contas redutoras do saldo do grupo a que pertencem.","C","CESPE","Aparecem com sinal negativo na estrutura."],
  ["A depreciação acumulada é conta retificadora do ativo imobilizado.","C","VUNESP","Reduz o valor contábil do imobilizado."],
  ["As perdas estimadas com créditos de liquidação duvidosa são conta retificadora do passivo circulante.","E","FCC","São retificadora do <b>ativo circulante</b>, reduzindo as contas a receber."],
  ["Se o ativo de uma companhia é composto por Veículos de R$ 80.000 e Depreciação Acumulada de R$ 10.000, o ativo total é de R$ 70.000.","C","FGV","A retificadora subtrai do grupo."],
  ["Os juros passivos a transcorrer são conta retificadora do passivo.","C","CESPE","Reduzem o valor da obrigação até que o prazo transcorra."],
  ["O ativo contingente deve ser reconhecido no balanço patrimonial quando sua realização for provável.","E","VUNESP","O ativo contingente <b>não é evidenciado no balanço</b> — apenas divulgado em notas explicativas."],
  ["O ativo contingente é um possível ativo cuja existência será confirmada apenas pela ocorrência de eventos futuros incertos não totalmente sob controle da entidade.","C","FCC","Por isso não é um ativo propriamente dito."],
  ["O capital social subscrito compreende o montante que os sócios se comprometem a entregar à entidade.","C","CESPE","Subscrever é prometer; integralizar é entregar."],
  ["O capital a integralizar é a parcela do capital social já entregue pelos sócios.","E","FGV","É a parcela <b>ainda não entregue</b> — e funciona como conta retificadora."],
  ["São reservas de capital o ágio na emissão de ações e a alienação de bônus de subscrição.","C","FCC","Não transitam pelo resultado."],
  ["A reserva legal e a reserva para contingências são espécies de reservas de lucros.","C","VUNESP","Junto com estatutária, lucros a realizar e incentivos fiscais."],
  ["As ações em tesouraria e os prejuízos acumulados são contas redutoras do patrimônio líquido.","C","CESPE","Aparecem com sinal negativo no PL."],
  ["A origem de recursos é representada pelo lado esquerdo do balanço patrimonial.","E","FGV","A origem está no lado <b>direito</b> (Passivo + PL). O esquerdo é a <b>aplicação</b> (Ativo)."],
  ["O ativo representa a aplicação de recursos e é composto por contas de natureza devedora.","C","FCC","Aplicação → devedora; origem → credora."],
  ["Capital de terceiros, passivo exigível e capital alheio são sinônimos de passivo.","C","CESPE","Recursos que vieram de fora e serão devolvidos."],
  ["Capital próprio, passivo não exigível e situação líquida são sinônimos de patrimônio líquido.","C","VUNESP","Também riqueza líquida."],
  ["Patrimônio bruto e capital aplicado são sinônimos de patrimônio líquido.","E","FCC","São sinônimos de <b>ativo</b>."],
  ["O capital total à disposição da empresa corresponde ao ativo total.","C","FGV","Capital próprio mais capital de terceiros é igual ao ativo."],
  ["Na teoria personalista, as contas são classificadas em agentes consignatários, agentes correspondentes e agentes proprietários.","C","CESPE","Consignatários = bens; correspondentes = direitos e obrigações; proprietários = PL, receitas e despesas."],
  ["Na teoria materialista, as contas dividem-se em integrais e diferenciais.","C","FCC","Integrais = bens, direitos e obrigações; diferenciais = PL, receitas e despesas."],
  ["Na teoria patrimonialista, as contas dividem-se em patrimoniais e de resultado.","C","VUNESP","Patrimoniais = bens, direitos, obrigações e PL; resultado = receitas e despesas."],
  ["A teoria das contas atualmente adotada pela Contabilidade é a materialista.","E","FGV","É a <b>patrimonialista</b>."],
  ["Na teoria personalista, o patrimônio líquido é classificado entre os agentes consignatários.","E","CESPE","O PL está entre os <b>agentes proprietários</b>. Consignatários são os <b>bens</b>."]
];

var FEY = {
  U1:{ask:"Explique o que é a Contabilidade: objeto, objetivo, finalidade, campo de aplicação e técnicas.",
    hint:"Comece pela natureza de ciência social e as três funções; separe objetivo de finalidade; depois o campo de aplicação e as quatro técnicas.",
    ref:"A Contabilidade é uma ciência social que tem por função controlar, registrar e estudar o patrimônio das entidades. Seu objeto de estudo é o patrimônio, entendido como o conjunto de bens, direitos e obrigações; seu objetivo é controlar esse patrimônio; e sua finalidade é fornecer informações úteis aos usuários — internos e externos — para a tomada de decisão. Não se confunda o objetivo com a administração dos recursos escassos, que é objetivo da Economia. Seu campo de aplicação abrange todas as entidades que possuem patrimônio, as chamadas entidades econômico-administrativas ou aziendas, com ou sem fins lucrativos. Quanto às ramificações, a contabilidade financeira volta-se ao controle do patrimônio e à prestação de informações aos usuários externos; a gerencial produz informações para os tomadores de decisão internos; e a de custos gera informações que permitem o planejamento das ações no ambiente operacional. Para atingir seus fins, a Contabilidade vale-se de quatro técnicas: a escrituração, que é o registro dos lançamentos contábeis; a elaboração das demonstrações contábeis, que espelham a situação econômico-financeira da entidade; a auditoria, que verifica a veracidade dos registros; e a análise das demonstrações contábeis, que as estuda para extrair informações."},
  U2:{ask:"Explique a equação patrimonial e os estados patrimoniais possíveis, inclusive o passivo a descoberto.",
    hint:"Elementos positivos e negativos, a equação PL = A − P, o equilíbrio do balanço e as quatro situações líquidas.",
    ref:"O patrimônio compõe-se de elementos positivos — bens e direitos, que formam o ativo — e de elementos negativos — as obrigações, que formam o passivo. A diferença entre eles é o patrimônio líquido, do que resulta a equação fundamental da Contabilidade: patrimônio líquido igual a ativo menos passivo. Essa estrutura é representada no balanço patrimonial, demonstração estática que retrata o patrimônio em determinado momento e que deve estar sempre equilibrado, de modo que o ativo total seja igual à soma do passivo com o patrimônio líquido. A situação líquida pode assumir quatro configurações: é positiva ou superavitária quando o ativo é maior que o passivo; é negativa quando o ativo é menor que o passivo, hipótese denominada passivo a descoberto; é nula quando ativo e passivo se igualam; e há ainda a situação em que o patrimônio líquido é igual ao próprio ativo, típica do início das atividades, quando não existem obrigações. No passivo a descoberto, como o passivo supera o ativo, o patrimônio líquido torna-se negativo e migra para o lado esquerdo do balanço, passando a equação a ser expressa como passivo igual a ativo mais patrimônio líquido, de modo a preservar o equilíbrio entre os dois lados."},
  U3:{ask:"Explique a composição do ativo, do passivo e do patrimônio líquido, com os grupos e as contas retificadoras.",
    hint:"As definições conceituais dos três; os grupos do art. 179; o critério do vencimento no passivo; as retificadoras; e o ativo contingente.",
    ref:"Ativo é um recurso econômico controlado pela entidade como resultado de eventos passados, sendo composto pelos bens e direitos e dividido em circulante e não circulante. O ativo circulante reúne as disponibilidades, os direitos realizáveis no curso do exercício social subsequente e as aplicações de recursos em despesas do exercício seguinte; o ativo não circulante, na forma do art. 179 da Lei nº 6.404/1976, compreende o realizável a longo prazo, os investimentos, o imobilizado e o intangível. Passivo é uma obrigação presente da entidade de transferir um recurso econômico como resultado de eventos passados, dividindo-se em circulante e não circulante conforme a obrigação vença no exercício seguinte ou após ele. Patrimônio líquido é a participação residual nos ativos da entidade após a dedução de todos os seus passivos, e compreende o capital social subscrito — desdobrado em integralizado e a integralizar —, as reservas de capital, as reservas de lucros, os ajustes de avaliação patrimonial e acumulado de conversão, e, como parcelas redutoras, as ações em tesouraria e os prejuízos acumulados. Merecem atenção as contas retificadoras, redutoras do saldo do grupo a que pertencem, tais como as perdas estimadas com créditos de liquidação duvidosa no circulante, a depreciação acumulada no imobilizado, a amortização acumulada no intangível e os juros e encargos financeiros a transcorrer no passivo. Por fim, o ativo contingente, por ser apenas um possível ativo cuja existência será confirmada por eventos futuros incertos não totalmente sob controle da entidade, não é evidenciado no balanço, sendo apenas divulgado em notas explicativas."},
  U4:{ask:"Explique a origem e a aplicação de recursos e as três teorias das contas.",
    hint:"Os dois lados do balanço com suas naturezas e sinônimos; depois personalista, materialista e patrimonialista, dizendo qual vigora.",
    ref:"No balanço patrimonial, o lado direito — passivo e patrimônio líquido — representa a origem dos recursos, com contas de natureza credora, e o lado esquerdo — o ativo — representa a aplicação desses recursos, com contas de natureza devedora. Daí decorrem os sinônimos consagrados: o ativo é também chamado de patrimônio bruto, capital aplicado ou aplicação de recursos, correspondendo o capital total à disposição da empresa ao ativo total; o passivo é chamado de capital de terceiros, passivo exigível, recursos de terceiros ou capital alheio; e o patrimônio líquido, de capital próprio, passivo não exigível, recursos próprios, situação líquida ou riqueza líquida. Quanto à teoria das contas, que é o conjunto de pensamentos contábeis voltado a organizar a escrituração, existem três correntes. A teoria personalista trata as contas como pessoas, classificando-as em agentes consignatários, que representam os bens, agentes correspondentes, que representam os direitos e as obrigações, e agentes proprietários, que representam o patrimônio líquido, as receitas e as despesas. A teoria materialista classifica as contas em integrais, que abrangem bens, direitos e obrigações, e diferenciais, que abrangem o patrimônio líquido, as receitas e as despesas. Por fim, a teoria patrimonialista, adotada atualmente pela Contabilidade, divide as contas em patrimoniais — bens, direitos, obrigações e patrimônio líquido — e de resultado — receitas e despesas."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("O que a Contabilidade é, e para quê",
      '<div class="box"><span class="bl">Definição</span><p>A Contabilidade é uma <b>ciência social</b> cuja função é <b>controlar, registrar e estudar</b> o patrimônio das entidades.</p></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Objeto de estudo</span><span class="cd">O <b>patrimônio</b> — bens, direitos e obrigações.</span></div>'+
      '<div class="chip"><span class="cn">Objetivo</span><span class="cd"><b>Controlar</b> o patrimônio.</span></div>'+
      '<div class="chip"><span class="cn">Finalidade</span><span class="cd">Fornecer <b>informações úteis</b> aos usuários para a <b>tomada de decisão</b>.</span></div>'+
      '<div class="chip"><span class="cn">Campo de aplicação</span><span class="cd">Toda <b>entidade econômico-administrativa</b> (azienda) que tenha patrimônio.</span></div>'+
      '</div>'+
      '<div class="box trap"><span class="bl">A pegadinha mais repetida</span><p>“Um dos objetivos da Contabilidade é a <b>administração dos recursos escassos</b>” — <b>errado</b>. Isso é objetivo da <b>Economia</b>.</p><p>E não troque <b>objetivo</b> (controlar) por <b>finalidade</b> (informar).</p></div>'),
    sl("As três contabilidades e as quatro técnicas",
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Financeira</span><span class="cd">Controle do patrimônio e informação aos <b>usuários externos</b>.</span></div>'+
      '<div class="chip"><span class="cn">Gerencial</span><span class="cd">Informação aos tomadores de decisão <b>internos</b>.</span></div>'+
      '<div class="chip"><span class="cn">De custos</span><span class="cd">Informação para o <b>planejamento operacional</b>.</span></div>'+
      '</div>'+
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">1</span><span class="nm">Escrituração</span></div><div class="fn-b"><p>O <b>registro</b> dos lançamentos contábeis.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">2</span><span class="nm">Elaboração das demonstrações</span></div><div class="fn-b"><p>Os <b>gráficos</b> que espelham a situação econômico-financeira.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">3</span><span class="nm">Auditoria</span></div><div class="fn-b"><p>A <b>verificação da veracidade</b> dos registros.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">4</span><span class="nm">Análise das demonstrações</span></div><div class="fn-b"><p>O <b>estudo</b> das demonstrações para <b>extrair informações</b>.</p></div></div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">Ordem lógica</span><p><b>Registra</b> → <b>demonstra</b> → <b>confere</b> → <b>analisa</b>. Quem confere é a auditoria; quem extrai conclusões é a análise.</p></div>')
  ],
  V2:[
    sl("A equação fundamental",
      '<div class="box"><span class="bl">Como se chega nela</span><p>Do lado <b>esquerdo</b>, os elementos <b>positivos</b>: bens e direitos → <b>Ativo</b>. Do lado <b>direito</b>, os <b>negativos</b>: obrigações → <b>Passivo</b>. A diferença é o <b>Patrimônio Líquido</b>.</p></div>'+
      '<div class="tree"><div class="tree-root">PL = Ativo − Passivo</div>'+
      '<div class="leaf">Reescrita para o balanço: <b>Ativo = Passivo + PL</b>.</div>'+
      '<div class="leaf">O balanço é <b>estático</b> — um <b>retrato</b> do patrimônio naquele momento.</div>'+
      '<div class="leaf">O lado esquerdo <b>sempre</b> se iguala ao direito.</div></div>'+
      '<div class="box tip"><span class="bl">A estrutura básica</span>'+
      '<ul><li><b>Ativo circulante</b> e <b>ativo não circulante</b> (realizável a longo prazo, investimentos, imobilizado, intangível)</li>'+
      '<li><b>Passivo circulante</b> e <b>passivo não circulante</b></li>'+
      '<li><b>Patrimônio líquido</b>: capital social, reservas de capital, ajustes de avaliação patrimonial, reservas de lucros, (−) ações em tesouraria, (−) prejuízos acumulados</li></ul></div>'),
    sl("Os quatro estados patrimoniais",
      '<div class="tl"><div class="tl-w">A &gt; P</div><div class="tl-t">Situação líquida <b>positiva</b> (superavitária) — o caso normal.</div></div>'+
      '<div class="tl"><div class="tl-w">A &lt; P</div><div class="tl-t">Situação líquida <b>negativa</b>, também chamada de <b>passivo a descoberto</b>.</div></div>'+
      '<div class="tl"><div class="tl-w">A = P</div><div class="tl-t">Situação líquida <b>nula</b> — o PL é zero.</div></div>'+
      '<div class="tl"><div class="tl-w">A = PL</div><div class="tl-t">Situação líquida <b>positiva</b> sem obrigações — ocorre na <b>abertura</b> da empresa.</div></div>'+
      '<div class="box trap"><span class="bl">Passivo a descoberto — a equação vira</span>'+
      '<p>Se Passivo = 1.000 e Ativo = 500, então PL = 500 − 1.000 = <b>−500</b>. Para o balanço continuar equilibrado, o PL negativo <b>vai para o lado esquerdo</b>:</p>'+
      '<p class="mn"><em>Passivo = Ativo + Patrimônio Líquido</em></p>'+
      '<p>Item que mantenha o PL à direita no passivo a descoberto é <b>falso</b>.</p></div>')
  ],
  V3:[
    sl("Ativo — definição e grupos",
      '<div class="box"><span class="bl">Definição</span><p><b>Recurso econômico controlado pela entidade como resultado de eventos passados.</b> Note: <b>controlado</b>, não necessariamente “de propriedade”.</p></div>'+
      '<div class="tree"><div class="tree-root">ATIVO — art. 179 da Lei 6.404/76</div>'+
      '<div class="leaf"><b>Circulante:</b> disponibilidades · direitos realizáveis no <b>curso do exercício social subsequente</b> · aplicações de recursos em <b>despesas do exercício seguinte</b>.</div>'+
      '<div class="leaf"><b>Não circulante:</b> <b>realizável a longo prazo</b> · <b>investimentos</b> · <b>imobilizado</b> · <b>intangível</b>.</div></div>'+
      '<div class="box tip"><span class="bl">Contas que mais caem</span>'+
      '<ul><li><b>Circulante:</b> caixa e equivalentes, bancos conta movimento, aplicações de liquidez imediata, duplicatas a receber, clientes, <b>(−) PECLD</b>, estoques, tributos a recuperar, despesas antecipadas.</li>'+
      '<li><b>Investimentos:</b> participação em coligada/controlada, ágio por rentabilidade futura (goodwill), propriedade para investimento, obras de arte.</li>'+
      '<li><b>Imobilizado:</b> máquinas, móveis e utensílios, terrenos, veículos, <b>(−) depreciação acumulada</b>.</li>'+
      '<li><b>Intangível:</b> marcas e patentes, softwares, direitos autorais, fundo de comércio adquirido, <b>(−) amortização acumulada</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Ativo contingente na lista de contas</span><p><b>Ignore-o.</b> É apenas um <b>possível</b> ativo, dependente de evento futuro incerto fora do controle da entidade — <b>não entra no balanço</b>, só em <b>nota explicativa</b>.</p></div>'),
    sl("Passivo, patrimônio líquido e as retificadoras",
      '<div class="box"><span class="bl">Passivo</span><p><b>Obrigação presente de transferir um recurso econômico</b> como resultado de eventos passados. O que separa circulante de não circulante é o <b>vencimento</b>: no exercício seguinte, ou depois dele.</p></div>'+
      '<div class="box"><span class="bl">Patrimônio líquido</span><p><b>Participação residual nos ativos</b> após deduzidos <b>todos</b> os passivos.</p>'+
      '<ul><li><b>(+)</b> Capital social subscrito — (−) capital a integralizar = capital integralizado</li>'+
      '<li><b>(+)</b> Reservas de capital: ágio na emissão de ações, alienação de partes beneficiárias e de bônus de subscrição</li>'+
      '<li><b>(+)</b> Reservas de lucros: legal, estatutária, para contingências, de lucros a realizar, de incentivos fiscais</li>'+
      '<li><b>(±)</b> Ajuste de avaliação patrimonial · ajuste acumulado de conversão</li>'+
      '<li><b>(−)</b> Ações em tesouraria · prejuízos acumulados</li></ul></div>'+
      '<div class="box trap"><span class="bl">Contas retificadoras — reduzem o próprio grupo</span>'+
      '<p><b>No ativo:</b> (−) PECLD · (−) depreciação acumulada · (−) amortização acumulada.<br><b>No passivo:</b> (−) juros passivos a transcorrer · (−) encargos financeiros a transcorrer.<br><b>No PL:</b> (−) capital a integralizar · (−) ações em tesouraria · (−) prejuízos acumulados.</p>'+
      '<p><b>Exemplo de prova:</b> Veículos 80.000 e Depreciação Acumulada 10.000 → ativo total de <b>70.000</b>.</p></div>')
  ],
  V4:[
    sl("Origem e aplicação — os dois lados",
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Lado esquerdo · ATIVO</span><span class="cd"><b>Aplicação</b> de recursos · contas <b>devedoras</b> · onde o dinheiro <b>está</b>.</span></div>'+
      '<div class="chip"><span class="cn">Lado direito · PASSIVO + PL</span><span class="cd"><b>Origem</b> de recursos · contas <b>credoras</b> · de onde o dinheiro <b>veio</b>.</span></div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">Os sinônimos que a banca usa para confundir</span>'+
      '<ul><li><b>Ativo:</b> patrimônio bruto · capital aplicado · aplicação de recursos</li>'+
      '<li><b>Passivo:</b> capital de terceiros · passivo exigível · recursos de terceiros · capital alheio</li>'+
      '<li><b>PL:</b> capital próprio · passivo <b>não</b> exigível · recursos próprios · situação líquida · riqueza líquida</li></ul>'+
      '<p><b>Capital total à disposição da empresa = ativo total.</b></p></div>'+
      '<div class="box trap"><span class="bl">O par que mais troca de lugar</span><p><b>Patrimônio bruto</b> é <b>ativo</b>, não PL. E <b>passivo exigível</b> é passivo; <b>passivo não exigível</b> é PL.</p></div>'),
    sl("As três teorias das contas",
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">P</span><span class="nm">Personalista</span></div><div class="fn-b">'+
      '<p>Trata cada conta como uma <b>pessoa</b> — daí o nome.</p>'+
      '<ul><li><b>Agentes consignatários</b> — bens</li><li><b>Agentes correspondentes</b> — direitos e obrigações</li><li><b>Agentes proprietários</b> — PL, receitas e despesas</li></ul></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">M</span><span class="nm">Materialista</span></div><div class="fn-b">'+
      '<ul><li><b>Contas integrais</b> — bens, direitos e obrigações</li><li><b>Contas diferenciais</b> — PL, receitas e despesas</li></ul></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">Pa</span><span class="nm">Patrimonialista</span></div><div class="fn-b">'+
      '<ul><li><b>Contas patrimoniais</b> — bens, direitos, obrigações e PL</li><li><b>Contas de resultado</b> — receitas e despesas</li></ul>'+
      '<p><b>É a teoria adotada atualmente</b> pela Contabilidade.</p></div></div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">Como não esquecer</span><p>A diferença está em <b>onde fica o PL</b>. Na <b>materialista</b>, o PL vai com receitas e despesas (diferenciais). Na <b>patrimonialista</b>, o PL fica com bens, direitos e obrigações (patrimoniais). Na <b>personalista</b>, o PL é do <b>proprietário</b>.</p></div>')
  ]
};

var EX = {
S1:{t:"match", instr:"Ligue cada elemento ao seu conceito",
  pairs:[["Objeto de estudo","O patrimônio"],["Objetivo","Controlar o patrimônio"],
         ["Finalidade","Informar para a tomada de decisão"],["Campo de aplicação","Entidades econômico-administrativas"]],
  why:"Objetivo <b>controla</b>; finalidade <b>informa</b>."},

S2:{t:"gap", instr:"Complete a definição",
  before:"A Contabilidade é uma ",
  after:" que controla, registra e estuda o patrimônio das entidades.",
  options:["ciência social","ciência exata","técnica auxiliar da administração"], answer:0,
  why:"Ciência social — não exata."},

S3:{t:"mc", instr:"A administração dos recursos escassos é objetivo de qual ciência?",
  options:["Economia","Contabilidade","Administração","Estatística"],
  answer:0,
  why:"A Contabilidade tem por objetivo <b>controlar o patrimônio</b>."},

S4:{t:"sort", instr:"Classifique cada ramo da Contabilidade",
  buckets:["Usuário externo","Usuário interno","Ambiente operacional"],
  items:[["Contabilidade financeira",0],["Contabilidade gerencial",1],["Contabilidade de custos",2]],
  why:"Financeira informa para fora; gerencial, para dentro; custos planeja a operação."},

S5:{t:"multi", instr:"Marque as quatro técnicas contábeis",
  options:["Escrituração","Elaboração das demonstrações contábeis","Auditoria","Análise das demonstrações contábeis",
           "Consolidação","Orçamentação","Perícia judicial"],
  answers:[0,1,2,3],
  why:"São exatamente quatro."},

S6:{t:"match", instr:"Ligue a técnica ao que ela faz",
  pairs:[["Escrituração","Registrar os lançamentos"],["Elaboração","Espelhar a situação econômico-financeira"],
         ["Auditoria","Verificar a veracidade dos registros"],["Análise","Extrair informações das demonstrações"]],
  why:"Registra → demonstra → confere → analisa."},

S7:{t:"wordbank", instr:"Monte a equação fundamental da Contabilidade",
  target:["Patrimônio","Líquido","=","Ativo","−","Passivo"],
  extra:["+","Receita","Despesa"],
  why:"O PL é a <b>diferença</b> entre o ativo e o passivo."},

S8:{t:"gap", instr:"Complete a regra do equilíbrio",
  before:"No balanço patrimonial, o ativo total deve ser igual a ",
  after:".",
  options:["passivo + patrimônio líquido","passivo − patrimônio líquido","patrimônio líquido"], answer:0,
  why:"Lado esquerdo igual ao lado direito, sempre."},

S9:{t:"mc", instr:"O balanço patrimonial é uma demonstração:",
  options:["Estática — retrato do patrimônio em um momento","Dinâmica — fluxo do período",
           "Prospectiva — projeção do exercício seguinte","Comparativa por natureza"],
  answer:0,
  why:"Dinâmica é a DRE, que mostra o movimento do período."},

S10:{t:"sort", instr:"Classifique cada estado patrimonial",
  buckets:["Situação líquida positiva","Situação líquida negativa","Situação líquida nula"],
  items:[["Ativo maior que o passivo",0],["Ativo igual ao PL, sem obrigações",0],
         ["Passivo a descoberto",1],["Ativo menor que o passivo",1],["Ativo igual ao passivo",2]],
  why:"A situação de abertura (A = PL) também é <b>positiva</b>."},

S11:{t:"gap", instr:"Complete a equação do passivo a descoberto",
  before:"Em caso de passivo a descoberto, a equação torna-se ",
  after:".",
  options:["Passivo = Ativo + Patrimônio Líquido","Ativo = Passivo + Patrimônio Líquido","Ativo = Passivo − Patrimônio Líquido"], answer:0,
  why:"O PL negativo migra para o <b>lado esquerdo</b> do balanço."},

S12:{t:"mc", instr:"Passivo de R$ 1.000 e ativo de R$ 500. Qual o patrimônio líquido?",
  options:["− R$ 500","R$ 500","R$ 1.500","Zero"],
  answer:0,
  why:"PL = 500 − 1.000 = −500 — passivo a descoberto."},

S13:{t:"match", instr:"Ligue cada elemento à sua definição conceitual",
  pairs:[["Ativo","Recurso econômico controlado como resultado de eventos passados"],
         ["Passivo","Obrigação presente de transferir recurso econômico"],
         ["Patrimônio líquido","Participação residual nos ativos após deduzidos os passivos"]],
  why:"Repare que o ativo é <b>controlado</b>, não necessariamente próprio."},

S14:{t:"multi", instr:"Marque os grupos do ativo não circulante (art. 179)",
  options:["Realizável a longo prazo","Investimentos","Imobilizado","Intangível",
           "Disponibilidades","Despesas antecipadas do exercício seguinte"],
  answers:[0,1,2,3],
  why:"Os dois últimos são do <b>circulante</b>."},

S15:{t:"sort", instr:"Circulante ou não circulante?",
  buckets:["Ativo circulante","Ativo não circulante"],
  items:[["Caixa e equivalentes de caixa",0],["Duplicatas a receber",0],["Estoques",0],
         ["Despesas antecipadas do exercício seguinte",0],
         ["Investimento em controlada",1],["Marcas e patentes",1],["Terrenos",1],
         ["Duplicatas a receber de longo prazo",1]],
  why:"O corte é o <b>exercício social subsequente</b>."},

S16:{t:"mc", instr:"O que separa o passivo circulante do não circulante?",
  options:["O vencimento da obrigação","O valor da obrigação",
           "A natureza do credor","A existência de garantia"],
  answer:0,
  why:"Vence no exercício seguinte → circulante; depois dele → não circulante."},

S17:{t:"multi", instr:"Marque as contas retificadoras",
  options:["(−) Perdas estimadas com créditos de liquidação duvidosa",
           "(−) Depreciação acumulada","(−) Amortização acumulada",
           "(−) Juros passivos a transcorrer","(−) Ações em tesouraria",
           "Duplicatas a receber","Fornecedores"],
  answers:[0,1,2,3,4],
  why:"Retificadora <b>reduz</b> o saldo do grupo a que pertence."},

S18:{t:"mc", instr:"Ativo composto só por Veículos R$ 80.000 e Depreciação Acumulada R$ 10.000. Ativo total:",
  options:["R$ 70.000","R$ 90.000","R$ 80.000","R$ 10.000"],
  answer:0,
  why:"A depreciação acumulada é <b>redutora</b> do imobilizado."},

S19:{t:"mc", instr:"Numa listagem de contas do balanço, o “ativo contingente” deve ser:",
  options:["Ignorado — não é evidenciado no balanço","Somado ao ativo circulante",
           "Somado ao ativo não circulante","Deduzido do passivo"],
  answer:0,
  why:"É apenas <b>divulgado em notas explicativas</b>."},

S20:{t:"order", instr:"Ordene o desdobramento do capital social",
  items:["Capital social subscrito — o que os sócios se comprometeram a entregar",
         "(−) Capital a integralizar — o que ainda não entregaram",
         "(=) Capital integralizado — o que efetivamente entregaram"],
  why:"Subscrever é prometer; integralizar é entregar."},

S21:{t:"sort", instr:"Reserva de capital ou de lucros?",
  buckets:["Reserva de capital","Reserva de lucros"],
  items:[["Ágio na emissão de ações",0],["Alienação de partes beneficiárias",0],
         ["Alienação de bônus de subscrição",0],
         ["Reserva legal",1],["Reserva estatutária",1],["Reserva para contingências",1],
         ["Reserva de incentivos fiscais",1]],
  why:"As de <b>capital</b> não passam pelo resultado; as de <b>lucros</b> vêm do lucro do exercício."},

S22:{t:"sort", instr:"Origem ou aplicação de recursos?",
  buckets:["Aplicação — lado esquerdo","Origem — lado direito"],
  items:[["Ativo",0],["Contas devedoras",0],
         ["Passivo",1],["Patrimônio líquido",1],["Contas credoras",1]],
  why:"Esquerda: onde o dinheiro <b>está</b>. Direita: de onde <b>veio</b>."},

S23:{t:"sort", instr:"De quem é cada sinônimo?",
  buckets:["Ativo","Passivo","Patrimônio líquido"],
  items:[["Patrimônio bruto",0],["Capital aplicado",0],
         ["Capital de terceiros",1],["Passivo exigível",1],["Capital alheio",1],
         ["Capital próprio",2],["Passivo não exigível",2],["Situação líquida",2],["Riqueza líquida",2]],
  why:"Cuidado com <b>patrimônio bruto</b> (ativo) e <b>passivo não exigível</b> (PL)."},

S24:{t:"gap", instr:"Complete a identidade",
  before:"O capital total à disposição da empresa equivale ao ",
  after:".",
  options:["ativo total","patrimônio líquido","passivo exigível"], answer:0,
  why:"Capital próprio mais capital de terceiros é igual ao ativo."},

S25:{t:"match", instr:"Ligue cada teoria à sua classificação de contas",
  pairs:[["Personalista","Agentes consignatários, correspondentes e proprietários"],
         ["Materialista","Contas integrais e diferenciais"],
         ["Patrimonialista","Contas patrimoniais e de resultado"]],
  why:"A diferença está em <b>onde fica o PL</b>."},

S26:{t:"sort", instr:"Teoria personalista — classifique cada elemento",
  buckets:["Agentes consignatários","Agentes correspondentes","Agentes proprietários"],
  items:[["Bens",0],["Direitos",1],["Obrigações",1],["Patrimônio líquido",2],["Receitas",2],["Despesas",2]],
  why:"Consignatário guarda o <b>bem</b>; correspondente <b>deve ou tem a receber</b>; proprietário é o <b>dono</b>."},

S27:{t:"mc", instr:"Qual teoria das contas é adotada atualmente pela Contabilidade?",
  options:["Patrimonialista","Materialista","Personalista","Reditualista"],
  answer:0,
  why:"Divide em <b>patrimoniais</b> e <b>de resultado</b>."},

S28:{t:"multi", instr:"Na teoria patrimonialista, são contas patrimoniais:",
  options:["Bens","Direitos","Obrigações","Patrimônio líquido","Receitas","Despesas"],
  answers:[0,1,2,3],
  why:"Receitas e despesas são contas de <b>resultado</b>."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var KIT = {
  U1:{tema:"Conceito, objeto, finalidade e técnicas",
    bases:["Estrutura Conceitual para Relatório Financeiro (CPC 00 R2)",
           "Lei nº 6.404/1976 — Lei das Sociedades por Ações",
           "Resolução CFC nº 1.374/2011 — estrutura conceitual",
           "NBC TG Estrutura Conceitual"],
    ouro:["ciência social","controlar, registrar e estudar o patrimônio",
          "conjunto de bens, direitos e obrigações","controlar o patrimônio",
          "informações úteis para a tomada de decisão","entidades econômico-administrativas",
          "aziendas","usuários internos e externos","escrituração","elaboração das demonstrações contábeis",
          "auditoria","análise das demonstrações contábeis"],
    abertura:"A Contabilidade é a ciência social que tem por função controlar, registrar e estudar o patrimônio das entidades, tendo por objeto o próprio patrimônio, por objetivo o seu controle e por finalidade fornecer informações úteis aos usuários para a tomada de decisão.",
    evite:"Não troque <b>objetivo</b> (controlar) por <b>finalidade</b> (informar), nem atribua à Contabilidade a administração dos recursos escassos, que é da Economia."},
  U2:{tema:"Equação patrimonial e estados patrimoniais",
    bases:["Lei nº 6.404/1976, art. 178 — estrutura do balanço",
           "CPC 26 (R1) — apresentação das demonstrações contábeis",
           "Estrutura Conceitual — definições de ativo, passivo e PL"],
    ouro:["elementos positivos e negativos","patrimônio líquido igual a ativo menos passivo",
          "demonstração estática","ativo total igual a passivo mais patrimônio líquido",
          "situação líquida positiva ou superavitária","passivo a descoberto",
          "situação líquida nula","Passivo igual a Ativo mais Patrimônio Líquido"],
    abertura:"Da oposição entre os elementos positivos do patrimônio — bens e direitos, que formam o ativo — e os negativos — as obrigações, que formam o passivo — resulta a equação fundamental da Contabilidade, segundo a qual o patrimônio líquido corresponde à diferença entre o ativo e o passivo.",
    evite:"No passivo a descoberto, não mantenha o PL do lado direito: ele migra para o esquerdo e a equação passa a ser Passivo = Ativo + PL."},
  U3:{tema:"Ativo, passivo, patrimônio líquido e retificadoras",
    bases:["Lei nº 6.404/1976, arts. 178, 179, 180, 182 e 183",
           "CPC 25 — provisões, passivos e ativos contingentes",
           "Estrutura Conceitual — recurso econômico controlado",
           "CPC 27 — imobilizado · CPC 04 — intangível"],
    ouro:["recurso econômico controlado pela entidade","resultado de eventos passados",
          "obrigação presente de transferir um recurso econômico","participação residual nos ativos",
          "realizável a longo prazo, investimentos, imobilizado e intangível",
          "curso do exercício social subsequente","contas retificadoras",
          "perdas estimadas com créditos de liquidação duvidosa","depreciação acumulada",
          "capital social subscrito","capital a integralizar","ações em tesouraria",
          "não é evidenciado no balanço, apenas divulgado em notas explicativas"],
    abertura:"Ativo é o recurso econômico controlado pela entidade como resultado de eventos passados; passivo, a obrigação presente de transferir recurso econômico decorrente de eventos passados; e patrimônio líquido, a participação residual nos ativos após a dedução de todos os passivos.",
    evite:"Não reconheça o <b>ativo contingente</b> no balanço, e não esqueça de subtrair as retificadoras ao somar um grupo."},
  U4:{tema:"Origem e aplicação de recursos e teoria das contas",
    bases:["Lei nº 6.404/1976, art. 178 — os dois lados do balanço",
           "Doutrina contábil — escolas personalista, materialista e patrimonialista",
           "Vicenzo Masi — escola patrimonialista"],
    ouro:["origem de recursos","aplicação de recursos","contas devedoras","contas credoras",
          "patrimônio bruto","capital de terceiros","passivo exigível","capital próprio",
          "passivo não exigível","situação líquida","agentes consignatários",
          "agentes correspondentes","agentes proprietários","contas integrais e diferenciais",
          "contas patrimoniais e de resultado"],
    abertura:"No balanço patrimonial, o lado direito — passivo e patrimônio líquido — representa a origem dos recursos, de natureza credora, e o lado esquerdo — o ativo — a sua aplicação, de natureza devedora.",
    evite:"Não classifique <b>patrimônio bruto</b> como PL: é sinônimo de <b>ativo</b>. E lembre que a teoria vigente é a <b>patrimonialista</b>."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — provas de Contador</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. Tema conceitual: o espelho procura cada definição pelo nome exato.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre os fundamentos da Contabilidade, disserte necessariamente sobre:</p>'+
  '<ol><li>o objeto, o objetivo, a finalidade e o campo de aplicação da Contabilidade, bem como suas técnicas;</li>'+
  '<li>a equação patrimonial e os estados patrimoniais possíveis;</li>'+
  '<li>a origem e a aplicação de recursos e as teorias das contas.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>A Contabilidade é <b>ciência social</b> cuja função é <b>controlar, registrar e estudar</b> o patrimônio das entidades. Seu <b>objeto</b> de estudo é o <b>patrimônio</b> — conjunto de bens, direitos e obrigações; seu <b>objetivo</b> é <b>controlá-lo</b>; e sua <b>finalidade</b>, <b>fornecer informações úteis</b> aos usuários, internos e externos, <b>para a tomada de decisão</b>. Não se lhe atribui a administração dos recursos escassos, objetivo próprio da <b>Economia</b>. Seu <b>campo de aplicação</b> alcança todas as <b>entidades econômico-administrativas</b>, ou aziendas, que possuam patrimônio, com ou sem fins lucrativos. Ramifica-se em contabilidade <b>financeira</b>, voltada ao controle patrimonial e ao usuário externo; <b>gerencial</b>, voltada ao tomador de decisão interno; e <b>de custos</b>, que subsidia o planejamento operacional. Para atingir seus fins emprega quatro <b>técnicas contábeis</b>: a <b>escrituração</b>, registro dos lançamentos; a <b>elaboração das demonstrações contábeis</b>, que espelham a situação econômico-financeira; a <b>auditoria</b>, que verifica a veracidade dos registros; e a <b>análise das demonstrações</b>, que delas extrai informações.</p>'+
  '<p>Do confronto entre os <b>elementos positivos</b> do patrimônio — bens e direitos, que compõem o <b>ativo</b> — e os <b>negativos</b> — as obrigações, que compõem o <b>passivo</b> — resulta a <b>equação fundamental</b>: <b>PL = Ativo − Passivo</b>, reescrita, para fins de balanço, como <b>Ativo = Passivo + PL</b>. O <b>balanço patrimonial</b> é demonstração <b>estática</b>, retrato do patrimônio em determinado momento, e deve permanecer sempre <b>equilibrado</b>. Quatro são os <b>estados patrimoniais</b>: <b>situação líquida positiva</b> ou superavitária, quando A &gt; P; <b>situação líquida negativa</b>, quando A &lt; P, também denominada <b>passivo a descoberto</b>; <b>situação líquida nula</b>, quando A = P; e a hipótese em que <b>PL = Ativo</b>, típica da <b>abertura</b> da entidade, quando inexistem obrigações — também positiva. No <b>passivo a descoberto</b>, sendo o passivo superior ao ativo, o patrimônio líquido torna-se negativo e é apresentado no <b>lado esquerdo</b> do balanço, de modo que a equação assume a forma <b>Passivo = Ativo + Patrimônio Líquido</b>.</p>'+
  '<p>Quanto à <b>origem e à aplicação de recursos</b>, o <b>lado direito</b> do balanço — passivo e patrimônio líquido — evidencia a <b>origem</b>, com contas de natureza <b>credora</b>, ao passo que o <b>lado esquerdo</b> — o ativo — evidencia a <b>aplicação</b>, com contas <b>devedoras</b>. Daí os sinônimos consagrados: o ativo é <b>patrimônio bruto</b>, <b>capital aplicado</b> ou aplicação de recursos, correspondendo o <b>capital total à disposição da empresa</b> ao <b>ativo total</b>; o passivo é <b>capital de terceiros</b>, <b>passivo exigível</b> ou capital alheio; e o patrimônio líquido, <b>capital próprio</b>, <b>passivo não exigível</b>, <b>situação líquida</b> ou riqueza líquida. Por fim, a <b>teoria das contas</b> — conjunto de pensamentos voltado a organizar a escrituração — comporta três correntes: a <b>personalista</b>, que trata as contas como pessoas, dividindo-as em <b>agentes consignatários</b> (bens), <b>correspondentes</b> (direitos e obrigações) e <b>proprietários</b> (PL, receitas e despesas); a <b>materialista</b>, que as divide em <b>integrais</b> (bens, direitos e obrigações) e <b>diferenciais</b> (PL, receitas e despesas); e a <b>patrimonialista</b>, <b>adotada atualmente</b>, que as separa em <b>patrimoniais</b> (bens, direitos, obrigações e PL) e <b>de resultado</b> (receitas e despesas).</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> distinguir objetivo de finalidade, nomear as aziendas e listar as <b>quatro</b> técnicas com o que cada uma faz.</li>'+
  '<li><b>Item 2:</b> a equação nas duas formas, o caráter estático do balanço e os <b>quatro</b> estados, com a equação invertida do passivo a descoberto.</li>'+
  '<li><b>Item 3:</b> as naturezas devedora e credora, os sinônimos de cada lado e as três teorias, dizendo qual vigora.</li>'+
  '<li><b>Fecho:</b> citar que o ativo é <b>controlado</b>, e não necessariamente próprio, mostra domínio da estrutura conceitual.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — provas de Contador</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Responda item a item, justificando o tratamento.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>A Companhia RAD S.A. apresentou, em 31/12, as seguintes contas e saldos, em reais:</p>'+
  '<ul><li>Caixa e equivalentes de caixa — 30.000</li>'+
  '<li>Duplicatas a receber — 50.000 · (−) PECLD — 5.000</li>'+
  '<li>Estoques — 40.000</li>'+
  '<li>Veículos — 80.000 · (−) Depreciação acumulada — 10.000</li>'+
  '<li>Marcas e patentes — 15.000</li>'+
  '<li>Ativo contingente (ação judicial com êxito possível) — 60.000</li>'+
  '<li>Fornecedores, vencíveis em 90 dias — 70.000</li>'+
  '<li>Financiamento, vencível em 4 anos — 120.000</li>'+
  '<li>Capital social subscrito — 100.000 · (−) Capital a integralizar — 40.000</li></ul>'+
  '<p><b>Pergunta-se:</b> apure o ativo total, o passivo total e o patrimônio líquido, e classifique a situação patrimonial.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1. Ativo total.</b> Somam-se os bens e direitos, <b>deduzidas as retificadoras</b>, e <b>exclui-se o ativo contingente</b>, que não é evidenciado no balanço (CPC 25) — apenas divulgado em nota explicativa. Assim: 30.000 + (50.000 − 5.000) + 40.000 + (80.000 − 10.000) + 15.000 = <b>R$ 200.000</b>. Desse total, <b>R$ 115.000</b> são circulante (caixa, duplicatas líquidas de PECLD e estoques) e <b>R$ 85.000</b>, não circulante (imobilizado líquido de 70.000 e intangível de 15.000).</p>'+
  '<p><b>2. Passivo total.</b> O critério é o <b>vencimento</b>: fornecedores em 90 dias são <b>passivo circulante</b> (70.000) e o financiamento em 4 anos, <b>passivo não circulante</b> (120.000). Passivo total = <b>R$ 190.000</b>.</p>'+
  '<p><b>3. Patrimônio líquido.</b> Pela equação fundamental, PL = Ativo − Passivo = 200.000 − 190.000 = <b>R$ 10.000</b>. O resultado confere com a composição direta do PL: capital subscrito de 100.000 menos capital a integralizar de 40.000 resulta em capital integralizado de 60.000 — o que indica que a diferença de R$ 50.000 corresponde a <b>prejuízos acumulados</b> ou outras parcelas redutoras, a serem identificadas no fechamento.</p>'+
  '<p><b>4. Situação patrimonial.</b> Sendo o <b>ativo maior que o passivo</b> (200.000 &gt; 190.000), a situação líquida é <b>positiva (superavitária)</b>, ainda que por margem estreita. Não há passivo a descoberto, e o balanço mantém-se equilibrado: Ativo (200.000) = Passivo (190.000) + PL (10.000).</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>Somar o <b>ativo contingente</b> ao ativo — ele fica de fora.</li>'+
  '<li>Somar as <b>retificadoras</b> em vez de subtraí-las: o ativo viraria 230.000.</li>'+
  '<li>Classificar o financiamento de 4 anos no <b>circulante</b> por ser dívida bancária.</li>'+
  '<li>Esquecer que o <b>capital a integralizar</b> também é redutor, e não um direito no ativo.</li></ul></div>';

var TEC = [
  ["Caderno CEBRASPE — Contabilidade Geral 01","https://www.tecconcursos.com.br/s/Q2ZFhf","Q2ZFhf"],
  ["Caderno FCC — Contabilidade Geral 01","https://www.tecconcursos.com.br/s/Q2ZFi5","Q2ZFi5"],
  ["Caderno FGV — Contabilidade Geral 01","https://www.tecconcursos.com.br/s/Q294nt","Q294nt"],
  ["Caderno VUNESP — Contabilidade Geral 01","https://www.tecconcursos.com.br/s/Q2ZFiO","Q2ZFiO"]
];
var TECNOTA = "São os cadernos do próprio resumo, um por banca. Para a Receita Federal e o ISS Curitiba, comece pelo da <b>FGV</b>; para o TJPR, pelo da <b>FUNDATEC</b> — e, na falta dele, o da FCC é o mais próximo em estilo.";

var UNITS = [
  {n:1, title:"O que é a Contabilidade", cvar:"u3", lessons:[
    {id:"C1", type:"teoria", title:"Conceito, objeto, finalidade e técnicas", xp:10, data:"V1"},
    {id:"C2", type:"drill",  title:"Praticar · objeto, objetivo e finalidade", xp:25, data:["S1","S2","S3","T0","T1","T2","T3","T4"]},
    {id:"C3", type:"drill",  title:"Praticar · campo de aplicação e ramos",   xp:25, data:["S4","T5","T6","T7","T8","T9"]},
    {id:"C4", type:"drill",  title:"Praticar · as quatro técnicas",           xp:25, data:["S5","S6","T10","T11","T12","T13"]},
    {id:"C5", type:"flash",  title:"Flashcards · fundamentos",                xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},
    {id:"C6", type:"feynman",title:"Explique o que é a Contabilidade",        xp:30, data:"U1"}
  ]},
  {n:2, title:"Equação patrimonial", cvar:"u1", lessons:[
    {id:"C8", type:"teoria", title:"A equação e os estados patrimoniais",     xp:10, data:"V2"},
    {id:"C9", type:"drill",  title:"Praticar · a equação fundamental",        xp:25, data:["S7","S8","S9","T14","T15","T16","T17"]},
    {id:"C10",type:"drill",  title:"Praticar · os quatro estados",            xp:25, data:["S10","T18","T19","T20","T21"]},
    {id:"C11",type:"drill",  title:"Praticar · passivo a descoberto",         xp:25, data:["S11","S12","T22","T23"]},
    {id:"C12",type:"flash",  title:"Flashcards · equação e estados",          xp:15, data:[15,16,17,18,19,20,21,22,23,24]},
    {id:"C13",type:"feynman",title:"Explique a equação patrimonial",          xp:30, data:"U2"}
  ]},
  {n:3, title:"Ativo, passivo e patrimônio líquido", cvar:"u2", lessons:[
    {id:"C15",type:"teoria", title:"Os grupos e as retificadoras",            xp:10, data:"V3"},
    {id:"C16",type:"drill",  title:"Praticar · as três definições",           xp:25, data:["S13","T24","T25","T26"]},
    {id:"C17",type:"drill",  title:"Praticar · os grupos do ativo",           xp:25, data:["S14","S15","T27","T28","T29"]},
    {id:"C18",type:"drill",  title:"Praticar · passivo e retificadoras",      xp:25, data:["S16","S17","S18","T30","T31","T32","T33","T34","T35"]},
    {id:"C19",type:"drill",  title:"Praticar · ativo contingente e PL",       xp:25, data:["S19","S20","S21","T36","T37","T38","T39","T40","T41","T42"]},
    {id:"C20",type:"flash",  title:"Flashcards · ativo, passivo e PL",        xp:15, data:[25,26,27,28,29,30,31,32,33,34,35,36,37,38]},
    {id:"C21",type:"feynman",title:"Explique ativo, passivo e PL",            xp:30, data:"U3"}
  ]},
  {n:4, title:"Origem, aplicação e teoria das contas", cvar:"u4", lessons:[
    {id:"C23",type:"teoria", title:"Os dois lados e as três teorias",         xp:10, data:"V4"},
    {id:"C24",type:"drill",  title:"Praticar · origem e aplicação",           xp:25, data:["S22","S24","T43","T44"]},
    {id:"C25",type:"drill",  title:"Praticar · os sinônimos",                 xp:25, data:["S23","T45","T46","T47","T48"]},
    {id:"C26",type:"drill",  title:"Praticar · as três teorias",              xp:25, data:["S25","S26","S27","S28","T49","T50","T51","T52","T53"]},
    {id:"C27",type:"flash",  title:"Flashcards · origem e teoria das contas", xp:15, data:[39,40,41,42,43,44,45,46,47]},
    {id:"C28",type:"feynman",title:"Explique a teoria das contas",            xp:30, data:"U4"}
  ]},
  {n:5, title:"Aplicação e prova", cvar:"u3", lessons:[
    {id:"C30",type:"leitura",title:"Discursiva resolvida",                    xp:25, data:"disc"},
    {id:"C31",type:"leitura",title:"Estudo de caso resolvido",                xp:25, data:"caso"},
    {id:"Crev",type:"review",title:"Revisão geral das unidades",              xp:60, data:null},
    {id:"C32",type:"missao", title:"Missão TEC Concursos",                    xp:15, data:null},
    {id:"C33",type:"prova",  title:"Simulado cronometrado",                   xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 01 de Contabilidade (Radegondes) ---------- */
var COM={
0:"<p>Primeira frase do resumo: <b>a Contabilidade é uma Ciência Social que tem a função de controlar, registrar e estudar o patrimônio das entidades</b>.</p><p>O esquema destaca os três verbos como <b>funções</b>: <b>controlar · registrar · estudar</b>. E o rótulo que ele repete é <b>ciência social</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Conceitos Iniciais da Contabilidade</i></p>",
1:"<p>Quadro <b>objeto de estudo</b> do resumo: <b>o patrimônio é o conjunto de bens, direitos e obrigações</b>.</p><p>E ele separa os lados: <b>bens e direitos</b> são a parte <b>positiva</b> do patrimônio; as <b>obrigações</b>, a parte <b>negativa</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Objeto de Estudo da Contabilidade</i></p>",
2:"<p>O quadro “recapitulando” do resumo separa as três coisas, e é o único jeito de não errar:</p><ul><li><b>Objeto de estudo</b> → o <b>patrimônio</b> (bens, direitos e obrigações).</li><li><b>Objetivo</b> → <b>controlar o patrimônio</b>.</li><li><b>Finalidade</b> → <b>fornecer informações úteis aos usuários para a tomada de decisão</b>.</li></ul><p>O enunciado pôs no lugar do objetivo o que é a finalidade.</p><p class='fb-fonte'>Resumo 01 · <i>Objetivo, Finalidade e Campo de Aplicação</i></p>",
3:"<p>Aqui a palavra está no lugar certo: pelo resumo, <b>a finalidade da Contabilidade é fornecer informações úteis aos usuários da informação para a tomada de decisão</b>.</p><p>Compare com a questão anterior — muda uma palavra e muda o gabarito.</p><p class='fb-fonte'>Resumo 01 · <i>Objetivo, Finalidade e Campo de Aplicação</i></p>",
4:"<p>Esta é a caixa <b>PEGADINHA</b> do resumo, com o enunciado idêntico ao da questão. A correção que ele dá: <b>a administração dos recursos escassos é o objetivo da Economia</b>.</p><p>O objetivo da Contabilidade continua sendo <b>controlar o patrimônio</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Objetivo, Finalidade e Campo de Aplicação — Pegadinha</i></p>",
5:"<p>Campo de aplicação, na frase do resumo: <b>a Contabilidade se aplica a todas as entidades que possuem patrimônio, também conhecidas como entidades econômico-administrativas (ou aziendas)</b>.</p><p>No quadro resumo dele, os <b>usuários da informação</b> aparecem como <b>internos e externos</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Campo de Aplicação da Contabilidade</i></p>",
6:"<p>O critério do resumo é <b>ter patrimônio</b>, e não ter lucro: aplica-se a <b>todas</b> as entidades que possuem patrimônio.</p><p>Por isso o item erra ao restringir às entidades com fins lucrativos.</p><p class='fb-fonte'>Resumo 01 · <i>Campo de Aplicação da Contabilidade</i></p>",
7:"<p>Quadro <b>conceitos importantes</b> do resumo: a <b>contabilidade gerencial</b> tem por objetivo <b>fornecer informações aos tomadores de decisão — pessoas internas à organização</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Conceitos Importantes</i></p>",
8:"<p>No mesmo quadro: a <b>contabilidade financeira</b> tem por objetivo <b>o controle do patrimônio e a prestação de informações aos usuários externos</b>.</p><p>Par para fixar: gerencial → <b>interno</b>; financeira → <b>externo</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Conceitos Importantes</i></p>",
9:"<p>Terceira coluna do quadro: a <b>contabilidade de custos</b> tem por objetivo <b>gerar informações que permitam o planejamento das ações no ambiente operacional</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Conceitos Importantes</i></p>",
10:"<p>O resumo abre o tópico dizendo que <b>são 4 as técnicas contábeis</b>, e define cada uma:</p><ul><li><b>Escrituração</b> — o registro dos lançamentos contábeis.</li><li><b>Elaboração das demonstrações</b> — os gráficos que espelham a situação econômico-financeira.</li><li><b>Auditoria</b> — a verificação da veracidade dos registros.</li><li><b>Análise das demonstrações</b> — o estudo das demonstrações para extrair informações.</li></ul><p class='fb-fonte'>Resumo 01 · <i>Técnicas Contábeis</i></p>",
11:"<p>Trocou duas definições do quadro. Quem faz a <b>verificação da veracidade dos registros</b> é a <b>auditoria</b>; a <b>escrituração</b> é o <b>registro dos lançamentos contábeis</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Técnicas Contábeis</i></p>",
12:"<p>Definição literal do resumo: a análise das demonstrações contábeis é o <b>estudo das demonstrações contábeis para extrair informações</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Técnicas Contábeis</i></p>",
13:"<p>A consolidação não está entre as quatro. No quadro do resumo as técnicas são <b>escrituração</b>, <b>elaboração das demonstrações contábeis</b>, <b>auditoria</b> e <b>análise das demonstrações contábeis</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Técnicas Contábeis</i></p>",
14:"<p>É a <b>equação fundamental da Contabilidade</b>, como o resumo a escreve: <b>Patrimônio Líquido (PL) = Ativo (A) – Passivo (P)</b>.</p><p>Ela nasce do gráfico do patrimônio: elementos positivos de um lado, negativos do outro, e o PL é a diferença entre ambos.</p><p class='fb-fonte'>Resumo 01 · <i>Equação Patrimonial</i></p>",
15:"<p>Do gráfico do patrimônio no resumo: <b>elementos positivos</b> = bens e direitos, que representam o <b>ativo</b>; <b>elementos negativos</b> = obrigações, que representam o <b>passivo</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Equação Patrimonial</i></p>",
16:"<p>O resumo apresenta o balanço com a palavra exata: é uma <b>demonstração estática</b>, ou seja, <b>um retrato do patrimônio da entidade naquele determinado momento</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Equação Patrimonial</i></p>",
17:"<p>Observação do resumo logo abaixo do balanço: <b>o balanço patrimonial deve estar equilibrado, por isso o lado esquerdo deve ser igual ao lado direito</b> — <b>Ativo Total = Passivo + PL</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Equação Patrimonial</i></p>",
18:"<p>Primeira linha do quadro <b>estado patrimonial</b>: <b>A &gt; P</b> → situação líquida <b>positiva (superavitária)</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Equação Patrimonial</i></p>",
19:"<p>Segunda linha do quadro: <b>A &lt; P</b> → situação líquida <b>negativa</b>, também chamada de <b>passivo a descoberto</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Equação Patrimonial</i></p>",
20:"<p>Terceira linha: <b>A = P</b> → situação líquida <b>nula</b>.</p><p>As quatro situações do quadro, em ordem: positiva · negativa · nula · e a específica em que <b>A = PL</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Equação Patrimonial</i></p>",
21:"<p>Quarta linha do quadro: <b>A = PL</b> — “aqui a situação líquida também é positiva, pois <b>não há obrigações</b> (passivo é igual a zero)”. O resumo acrescenta: é a <b>situação que ocorre na abertura da empresa</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Equação Patrimonial</i></p>",
22:"<p>Caixa <b>ATENÇÃO</b> do resumo: no caso de passivo a descoberto, a equação fundamental será <b>Passivo = Ativo + Patrimônio Líquido</b>.</p><p>O “explicando melhor” dá o exemplo: Passivo = 1.000 e Ativo = 500 → PL = 500 – 1.000 = <b>–500</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Equação Patrimonial — Atenção</i></p>",
23:"<p>O resumo é explícito: <b>em caso de passivo a descoberto, o PL ficará do lado esquerdo do balanço</b>, e a equação passa a ser Passivo = Ativo + PL.</p><p>A observação final confirma: nesse caso <b>Ativo Total + PL deve ser igual ao Passivo</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Equação Patrimonial — Explicando melhor</i></p>",
24:"<p>Definição do resumo: <b>ativo é um recurso econômico controlado pela entidade como resultado de eventos passados</b>. Ele é composto pelos bens e direitos, dividido em <b>circulante</b> e <b>não circulante</b>.</p><p>Os exemplos de direito com potencial de gerar benefício que o resumo lista: receber <b>caixa</b>; receber <b>produtos ou serviços</b>; direitos sobre <b>bens corpóreos</b> (imobilizado, estoques); e <b>utilizar propriedade intelectual</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Ativo</i></p>",
25:"<p>Definição do resumo: <b>passivo é uma obrigação (dívida) presente da entidade de transferir um recurso econômico como resultado de eventos passados</b>. Também se divide em <b>circulante</b> e <b>não circulante</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Passivo</i></p>",
26:"<p>O resumo chega ao PL pela subtração — <b>PL = Ativo – Passivo</b>, “a diferença entre ambos é representada pelo Patrimônio Líquido” —, que é exatamente o que a expressão <b>participação residual</b> quer dizer.</p><p class='fb-fonte'>Resumo 01 · <i>Equação Patrimonial</i></p>",
27:"<p>Esquema do <b>art. 179 da Lei 6.404/76</b> no resumo: o ativo <b>não circulante</b> tem quatro partes — <b>realizável a longo prazo</b> · <b>investimentos</b> · <b>imobilizado</b> · <b>intangível</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Ativo — art. 179</i></p>",
28:"<p>No esquema do ativo circulante, o resumo usa esta expressão: <b>aplicações de recursos em despesas do exercício seguinte</b>. Na lista de contas, o grupo aparece como <b>despesas antecipadas</b>, <b>aluguel pago antecipadamente</b> e <b>prêmio de seguros a vencer</b>.</p><p>No não circulante ele registra a versão longa: <b>despesas antecipadas de LP</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Ativo</i></p>",
29:"<p>Na lista de contas do resumo, <b>estoques</b> está no <b>ativo circulante</b>, no grupo dos <b>direitos realizáveis no curso do exercício social subsequente</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Ativo</i></p>",
30:"<p>O critério está no rodapé do quadro do passivo: <b>quando vencerem no exercício seguinte</b> → circulante; <b>quando vencerem após o exercício seguinte</b> → não circulante.</p><p class='fb-fonte'>Resumo 01 · <i>Passivo</i></p>",
31:"<p>Frase do resumo: as contas com sinal negativo na frente <b>são chamadas de contas retificadoras</b>, o que significa que são <b>contas redutoras do saldo do grupo a qual pertencem</b>.</p><p>Nas listas dele aparecem com “(-)”: depreciação acumulada, amortização acumulada, PECLD, juros passivos a transcorrer, encargos financeiros a transcorrer, capital a integralizar, ações em tesouraria e prejuízos acumulados.</p><p class='fb-fonte'>Resumo 01 · <i>Ativo — Contas Retificadoras</i></p>",
32:"<p>Na lista do resumo, <b>(-) Depreciação Acumulada</b> aparece dentro do <b>imobilizado</b>, e é o exemplo que ele usa para explicar o que é uma retificadora.</p><p class='fb-fonte'>Resumo 01 · <i>Ativo</i></p>",
33:"<p>Na lista de contas do resumo, <b>(-) Perdas Estimadas com Crédito de Liquidação Duvidosa (PECLD)</b> está no <b>ativo circulante</b>, junto de Duplicatas a Receber e Clientes — e não no passivo.</p><p class='fb-fonte'>Resumo 01 · <i>Ativo</i></p>",
34:"<p>É o exemplo da <b>Companhia RAD S.A.</b>, do próprio resumo: ativo composto só por <b>Veículos de R$ 80.000</b> e <b>Depreciação Acumulada de R$ 10.000</b>. Como a depreciação é retificadora, o ativo total é <b>R$ 70.000</b> (80.000 – 10.000).</p><p class='fb-fonte'>Resumo 01 · <i>Ativo — exemplo</i></p>",
35:"<p>No quadro do passivo, <b>(-) Juros Passivos a Transcorrer</b> e <b>(-) Encargos Financeiros a Transcorrer</b> aparecem com o sinal negativo, tanto no circulante quanto no não circulante.</p><p>É a prova de que existe retificadora <b>dos dois lados</b> do balanço.</p><p class='fb-fonte'>Resumo 01 · <i>Passivo</i></p>",
36:"<p>Caixa <b>ATENÇÃO</b> do resumo, escrita para esse tipo de questão: se a banca incluir “Ativo Contingente” numa listagem de contas, <b>essa conta deve ser ignorada</b>. Ele é explícito: <b>não é evidenciado no balanço, apenas divulgado em notas explicativas</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Ativo — Atenção</i></p>",
37:"<p>Definição do resumo: é um <b>possível ativo que resulta de eventos passados e cuja existência será confirmada apenas pela ocorrência ou não de um ou mais eventos futuros incertos não totalmente sob controle da entidade</b>.</p><p>E a conclusão dele: por isso <b>não é um ativo propriamente dito</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Ativo — Atenção</i></p>",
38:"<p>Bloco do PL no resumo: o <b>capital social subscrito</b> compreende <b>o montante que os sócios se comprometem a entregar para a entidade</b>, e divide-se em <b>capital integralizado</b> e <b>capital a integralizar</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Capital Social Subscrito</i></p>",
39:"<p>Invertido. Pelo resumo, <b>capital integralizado</b> é a parcela <b>efetivamente entregue</b> pelos sócios; <b>capital a integralizar</b> é a parcela <b>ainda não entregue</b>.</p><p>Na estrutura do PL ele aparece como <b>( – ) Capital a integralizar</b>, logo abaixo do subscrito.</p><p class='fb-fonte'>Resumo 01 · <i>Capital Social Subscrito</i></p>",
40:"<p>Lista do resumo para <b>(+) Reservas de Capital</b>: <b>ágio na emissão de ações</b> · <b>alienação de partes beneficiárias</b> · <b>alienação de bônus de subscrição</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Patrimônio Líquido</i></p>",
41:"<p>Lista do resumo para <b>(+) Reservas de Lucros</b>, com cinco itens: <b>reserva legal</b> · <b>estatutária</b> · <b>para contingências</b> · <b>de lucros a realizar</b> · <b>de incentivos fiscais</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Patrimônio Líquido</i></p>",
42:"<p>Na estrutura do PL montada pelo resumo, as duas últimas linhas vêm com sinal negativo: <b>(-) Ações em Tesouraria</b> e <b>(-) Prejuízos Acumulados</b>.</p><p>Ele registra ainda duas contas que podem ser positivas ou negativas: <b>ajuste de avaliação patrimonial</b> e <b>ajuste acumulado de conversão</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Patrimônio Líquido</i></p>",
43:"<p>Invertido. O resumo define: <b>origem</b> → é representada pelo <b>lado direito</b> do balanço (Passivo + PL); <b>aplicação</b> → é representada pelo <b>lado esquerdo</b> (Ativo).</p><p class='fb-fonte'>Resumo 01 · <i>Origem e Aplicação de Recursos</i></p>",
44:"<p>No gráfico do resumo, o lado esquerdo é a <b>aplicação de recursos — contas devedoras</b>, e o direito, a <b>origem de recursos — contas credoras</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Origem e Aplicação de Recursos</i></p>",
45:"<p>Tabela de <b>sinônimos</b> do resumo, coluna do <b>passivo</b>: <b>capital de terceiros</b> · <b>passivo exigível</b> · <b>recursos de terceiros</b> · <b>capital alheio</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Sinônimos</i></p>",
46:"<p>Mesma tabela, coluna do <b>patrimônio líquido</b>: <b>capital próprio</b> · <b>passivo não exigível</b> · <b>recursos próprios</b> · <b>situação líquida</b> · <b>riqueza líquida</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Sinônimos</i></p>",
47:"<p>Trocou de coluna. Na tabela do resumo, <b>patrimônio bruto</b>, <b>capital aplicado</b> e <b>aplicação de recursos</b> são sinônimos de <b>ATIVO</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Sinônimos</i></p>",
48:"<p>Linha final da tabela de sinônimos, literal: <b>Capital Total à disposição da empresa = Ativo Total</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Sinônimos</i></p>",
49:"<p>O resumo define teoria das contas como <b>o conjunto de pensamentos contábeis que busca organizar a escrituração</b>, e apresenta três. Na <b>personalista</b>, “cada conta representa uma pessoa, por isso o nome”:</p><ul><li><b>Agentes consignatários</b> → bens</li><li><b>Agentes correspondentes</b> → direitos e obrigações</li><li><b>Agentes proprietários</b> → PL, receitas e despesas</li></ul><p class='fb-fonte'>Resumo 01 · <i>Teoria das Contas</i></p>",
50:"<p>Na <b>materialista</b>, conforme o esquema do resumo, as contas são classificadas em <b>integrais</b> (bens, direitos e obrigações) e <b>diferenciais</b> (PL, receitas e despesas).</p><p class='fb-fonte'>Resumo 01 · <i>Teoria das Contas</i></p>",
51:"<p>Na <b>patrimonialista</b>, as contas dividem-se em <b>patrimoniais</b> (bens, direitos, obrigações e PL) e <b>de resultado</b> (receitas e despesas).</p><p class='fb-fonte'>Resumo 01 · <i>Teoria das Contas</i></p>",
52:"<p>O resumo diz qual é a adotada, dentro do próprio esquema: é a <b>teoria patrimonialista</b> — a que classifica as contas em <b>patrimoniais e de resultado</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Teoria das Contas</i></p>",
53:"<p>Trocou o grupo. No esquema da personalista, o <b>PL</b> está entre os <b>agentes proprietários</b>, junto com receitas e despesas; os <b>agentes consignatários</b> são os <b>bens</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Teoria das Contas</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"01", nome:"Conceito, objeto e teoria das contas", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
