/* AFO — Módulo 02: Espécies e modelos de orçamento */
window.MOD = window.MOD || {};
window.MOD.m02 = (function(){
"use strict";

var CARDS = [
  ["Quais são as seis espécies (técnicas) de orçamento do resumo?","<b>Tradicional</b>, <b>por desempenho</b>, <b>programa</b>, <b>base zero</b>, <b>participativo</b> e <b>incremental</b>."],
  ["Uma técnica orçamentária substitui integralmente a anterior?","<b>Nem sempre.</b> Normalmente <b>só uma parte das orientações é incorporada</b> pela técnica mais atual."],
  ["O que é o orçamento tradicional?","Também chamado <b>orçamento clássico</b>. Era um <b>simples quadro demonstrativo das receitas e despesas</b> públicas — <b>apenas uma peça contábil</b>."],
  ["Qual a ênfase de classificação do orçamento tradicional?","Nas <b>unidades administrativas</b> (classificação institucional — <i>quem</i> é o responsável pela despesa) e nos <b>elementos</b> (<i>objeto</i> do gasto)."],
  ["O que o orçamento tradicional buscava explicar?","Apenas o <b>objeto do gasto</b> — o custo da Administração Pública. <b>Não levava em conta as necessidades da coletividade.</b>"],
  ["Que aspecto prevalece no orçamento tradicional?","O <b>aspecto jurídico (controle)</b> se sobrepõe ao <b>aspecto econômico</b>."],
  ["Qual a função precípua do orçamento tradicional?","O <b>controle político do Legislativo sobre o Executivo</b>."],
  ["O que é o orçamento por desempenho?","Uma <b>evolução do orçamento tradicional</b>. Visava instrumentalizar a ação gerencial com <b>propósitos</b> para os créditos solicitados, apresentando os <b>custos necessários</b> ao alcance desses propósitos."],
  ["Que tipo de informação o orçamento por desempenho apresenta?","Informações <b>quantitativas</b> (não qualitativas) que <b>mensuram os resultados</b>."],
  ["Com o que se preocupa o orçamento por desempenho?","Com os <b>objetivos finais (resultado) do gasto</b> — e não com o <b>objeto</b> do gasto."],
  ["Qual a grande limitação do orçamento por desempenho?","<b>Não é vinculado ao planejamento.</b> É essa a característica que o separa do orçamento-programa."],
  ["Como o orçamento por desempenho classifica a despesa?","De acordo com o <b>objetivo final (resultado) do gasto</b>."],
  ["O que é o orçamento-programa?","A <b>modalidade atualmente em uso</b> pelos entes públicos brasileiros e a <b>legalmente exigida</b> no Brasil. É considerado um <b>instrumento de planejamento</b>."],
  ["Onde surgiu o orçamento-programa?","Nos <b>EUA</b>, com o nome de <b>PPBS</b> — <i>Planning Programming Budgeting System</i>."],
  ["Como o orçamento-programa se difundiu?","A partir de esforços da <b>ONU</b> e da <b>CEPAL</b> (Comissão Econômica para a América Latina)."],
  ["Quais as características do orçamento-programa?","<b>Organização dos componentes do planejamento</b>; <b>lógica empresarial</b> (eficiência, eficácia e efetividade); <b>definição prévia e clara dos objetivos e metas</b> governamentais."],
  ["Tradicional × programa — antiguidade e natureza","<b>Tradicional:</b> mais antigo, apenas peça contábil para explicar o <b>objeto</b> do gasto. <b>Programa:</b> mais atual, usa <b>indicadores</b> para aferir e acompanhar <b>resultados</b>."],
  ["Tradicional × programa — classificação e integração","<b>Tradicional:</b> classificação em <b>unidades administrativas e elementos</b>. <b>Programa:</b> <b>integração entre planejamento e orçamento</b>."],
  ["Tradicional × programa — função do controle","<b>Tradicional:</b> classificações apenas para <b>instrumentalizar o controle das despesas</b>. <b>Programa:</b> o controle visa à <b>avaliação da eficiência, eficácia e efetividade</b>."],
  ["O que é o Orçamento Base Zero (OBZ)?","Técnica que <b>não considera os valores previstos no orçamento anterior</b> e <b>não fixa de antemão um valor orçamentário inicial</b>."],
  ["Em que cenário o OBZ é mais útil?","Em fases de <b>recessão econômica</b> — e é <b>adequado às situações em que as despesas públicas são limitadas por um teto de gastos</b>."],
  ["Qual a ênfase do OBZ?","No <b>planejamento</b> e na <b>recorrente revisão de despesas</b>."],
  ["O que o OBZ exige dos gestores?","A cada novo exercício, a <b>justificativa detalhada dos recursos solicitados</b>."],
  ["Qual o foco do OBZ?","A <b>tomada de decisão sobre despesas</b>, facilitando o processo de <b>revisão da decisão</b> a respeito da alocação dos recursos públicos."],
  ["O que é o orçamento participativo?","Técnica orçamentária que <b>contempla a participação da população no processo decisório</b>, por meio de <b>audiências públicas</b>."],
  ["O orçamento participativo é obrigatório?","<b>No âmbito dos municípios, sim</b> — é de observância obrigatória."],
  ["O que é condição obrigatória para a aprovação do orçamento anual pela câmara municipal?","A <b>realização de debates, audiências e consultas públicas</b>."],
  ["O orçamento participativo substitui o orçamento-programa?","<b>Não.</b> Ele <b>coexiste</b> com o orçamento-programa e pode ser empregado <b>em conjunto</b> com outras técnicas."],
  ["O que é o orçamento incremental?","Orçamento feito por meio de <b>ajustes marginais</b> nos itens de receitas e despesas — <b>repetição do orçamento anterior acrescido da variação de preços</b> do período."],
  ["OBZ × incremental — a oposição que mais cai","<b>OBZ:</b> <b>não considera</b> os valores do orçamento anterior. <b>Incremental:</b> parte do orçamento anterior e apenas o <b>“incrementa”</b>."],
  ["Quais são os três modelos de orçamento?","<b>Misto</b>, <b>legislativo</b> e <b>executivo</b>."],
  ["O que é o orçamento misto?","Modelo em que <b>Executivo e Legislativo trabalham em conjunto</b>. É o <b>adotado atualmente no Brasil</b> (CF/88)."],
  ["Como funciona o modelo misto, etapa a etapa?","<b>1)</b> Executivo <b>elabora</b>; <b>2)</b> Legislativo <b>discute e vota</b>; <b>3)</b> Executivo <b>executa</b>; <b>4)</b> Legislativo <b>controla e avalia</b>."],
  ["O que é o orçamento legislativo?","Modelo em que o <b>Legislativo faz quase tudo</b> — só <b>não executa</b>, o que fica a cargo do Executivo. Adotado em <b>países parlamentaristas</b>."],
  ["O que é o orçamento executivo?","Modelo em que o <b>Executivo faz tudo</b>: elabora, vota, executa e ele mesmo controla e avalia. Adotado em <b>países com regimes autoritários</b>."],
  ["Espécie × modelo — não confunda","<b>Espécies (técnicas)</b> dizem respeito ao <b>método</b> de elaborar o orçamento (tradicional, programa, OBZ…). <b>Modelos</b> dizem respeito a <b>qual Poder faz o quê</b> (misto, legislativo, executivo)."]
];

var QS = [
  ["O orçamento tradicional, também conhecido como orçamento clássico, era considerado uma simples peça contábil.","C","CESPE","Um quadro demonstrativo das receitas e despesas públicas."],
  ["O orçamento tradicional possuía ênfase na classificação em unidades administrativas e elementos.","C","FCC","Institucional (quem gasta) e elemento (objeto do gasto)."],
  ["O orçamento tradicional buscava explicar o objeto do gasto e levava em conta as necessidades da coletividade.","E","FGV","<b>Não</b> levava em conta as necessidades da coletividade — apenas explicava o objeto do gasto."],
  ["No orçamento tradicional, o aspecto econômico do orçamento se sobrepõe ao aspecto jurídico.","E","CESPE","É o inverso: o <b>aspecto jurídico (controle)</b> se sobrepõe ao econômico."],
  ["A função precípua do orçamento tradicional é o controle político do Legislativo sobre o Executivo.","C","VUNESP","Daí as classificações voltadas apenas a instrumentalizar o controle das despesas."],
  ["O orçamento por desempenho constitui uma evolução do orçamento tradicional.","C","FCC","Visava instrumentalizar a ação gerencial, apresentando propósitos e custos."],
  ["O orçamento por desempenho apresenta informações qualitativas que mensuram os resultados.","E","CESPE","Apresenta informações <b>quantitativas</b>."],
  ["O orçamento por desempenho preocupa-se com os objetivos finais do gasto, e não com o objeto do gasto.","C","FGV","Por isso a despesa é classificada segundo o resultado."],
  ["O orçamento por desempenho é vinculado ao planejamento governamental.","E","CESPE","<b>Não é vinculado ao planejamento</b> — é precisamente o que o distingue do orçamento-programa."],
  ["No orçamento por desempenho, a classificação da despesa é feita de acordo com o objetivo final do gasto.","C","FCC","Enquanto no tradicional se classifica por unidade administrativa e elemento."],
  ["O orçamento-programa é a modalidade orçamentária atualmente em uso pelos entes públicos brasileiros.","C","VUNESP","E é o orçamento legalmente exigido no Brasil."],
  ["O orçamento-programa surgiu nos Estados Unidos com o nome de PPBS — Planning Programming Budgeting System.","C","CESPE","Difundiu-se a partir de esforços da ONU e da CEPAL."],
  ["O orçamento-programa difundiu-se a partir de esforços da Organização das Nações Unidas e da Comissão Econômica para a América Latina.","C","FGV","ONU e CEPAL."],
  ["O orçamento-programa é considerado um instrumento de planejamento.","C","FCC","Possui organização dos componentes do planejamento e definição prévia e clara de objetivos e metas."],
  ["O orçamento-programa é caracterizado pela lógica empresarial, com busca de eficiência, eficácia e efetividade.","C","CESPE","Traço que o separa do orçamento meramente contábil."],
  ["No orçamento-programa, o controle limita-se a instrumentalizar a fiscalização das despesas.","E","VUNESP","O controle visa à <b>avaliação da eficiência, eficácia e efetividade</b>."],
  ["O orçamento-programa utiliza indicadores para aferir e acompanhar os resultados.","C","FGV","Item do quadro comparativo com o orçamento tradicional."],
  ["A integração entre planejamento e orçamento é característica do orçamento tradicional.","E","CESPE","É característica do orçamento-<b>programa</b>."],
  ["Nem sempre uma técnica orçamentária é integralmente substituída por outra mais atual, sendo normalmente incorporada apenas parte das orientações.","C","FCC","Observação expressa do material."],
  ["O orçamento base zero não considera os valores previstos no orçamento anterior.","C","CESPE","Nem fixa de antemão um valor orçamentário inicial."],
  ["O orçamento base zero fixa de antemão um valor orçamentário inicial, a ser ajustado pela variação de preços.","E","FGV","Isso descreve o orçamento <b>incremental</b>. O OBZ não fixa valor inicial."],
  ["O orçamento base zero é muito útil em fases de recessão econômica.","C","FCC","E adequado a situações em que as despesas são limitadas por teto de gastos."],
  ["O orçamento base zero é adequado às situações em que as despesas públicas são limitadas por um teto de gastos.","C","CESPE","Justamente por exigir revisão recorrente das despesas."],
  ["O orçamento base zero possui ênfase no planejamento e na recorrente revisão de despesas.","C","VUNESP","Seu foco é a tomada de decisão sobre despesas."],
  ["O orçamento base zero exige dos gestores, a cada novo exercício, a justificativa detalhada dos recursos solicitados.","C","FGV","Nada é herdado do exercício anterior."],
  ["O orçamento base zero dificulta o processo de revisão da decisão a respeito da alocação dos recursos públicos.","E","CESPE","Ao contrário: <b>facilita</b> esse processo de revisão."],
  ["O orçamento participativo contempla a participação da população no processo decisório por meio de audiências públicas.","C","FCC","É técnica que pode ser empregada em conjunto com outras."],
  ["No âmbito dos municípios, o orçamento participativo é de observância obrigatória.","C","CESPE","A realização de debates, audiências e consultas públicas é condição para a aprovação do orçamento pela câmara."],
  ["O orçamento participativo é incompatível com o orçamento-programa, devendo substituí-lo.","E","FGV","O orçamento participativo <b>coexiste</b> com o orçamento-programa."],
  ["A realização de debates, audiências e consultas públicas é condição obrigatória para a aprovação do orçamento anual pela câmara municipal.","C","VUNESP","Decorre da gestão democrática prevista no Estatuto da Cidade."],
  ["O orçamento incremental é feito por meio de ajustes marginais nos itens de receitas e despesas.","C","CESPE","Repetição do orçamento anterior acrescido da variação de preços do período."],
  ["O orçamento incremental corresponde à repetição do orçamento anterior acrescido da variação de preços ocorrida no período.","C","FCC","Daí a ideia de “dar uma incrementada” no orçamento anterior."],
  ["O orçamento incremental exige a justificativa detalhada de todos os recursos solicitados a cada exercício.","E","FGV","Essa exigência é do <b>orçamento base zero</b>."],
  ["No modelo de orçamento misto, os Poderes Executivo e Legislativo trabalham em conjunto.","C","CESPE","Executivo elabora e executa; Legislativo vota, controla e avalia."],
  ["O modelo de orçamento adotado atualmente no Brasil, pela Constituição de 1988, é o misto.","C","FCC","Reflete a alternância entre Executivo e Legislativo nas quatro etapas do ciclo."],
  ["No modelo de orçamento legislativo, o Poder Legislativo faz quase tudo, cabendo a execução ao Poder Executivo.","C","VUNESP","Adotado em países parlamentaristas."],
  ["O modelo de orçamento legislativo é o adotado em países com regimes autoritários.","E","FGV","É adotado em países <b>parlamentaristas</b>. O modelo dos regimes autoritários é o <b>executivo</b>."],
  ["No modelo de orçamento executivo, o Poder Executivo elabora, vota, executa, controla e avalia o orçamento.","C","CESPE","Adotado em países com regimes autoritários."],
  ["O modelo de orçamento executivo é o adotado no Brasil, uma vez que o Poder Executivo elabora e executa o orçamento.","E","FCC","O Brasil adota o modelo <b>misto</b>: o Legislativo vota, controla e avalia."],
  ["As espécies de orçamento dizem respeito ao método de elaboração, ao passo que os modelos indicam qual Poder desempenha cada etapa.","C","FGV","Distinção que organiza todo o módulo."]
];

var FEY = {
  n1:{ask:"Explique o orçamento tradicional e o orçamento por desempenho, apontando o que os separa.",
    hint:"Diga o outro nome do tradicional, o que ele enfatiza e qual sua função precípua. Depois mostre o avanço do orçamento por desempenho — e o limite que ele não superou.",
    ref:"O orçamento tradicional, também conhecido como orçamento clássico, era um simples quadro demonstrativo das receitas e despesas públicas, isto é, apenas uma peça contábil. Possuía ênfase na classificação em unidades administrativas, correspondente à classificação institucional, que identifica o responsável pela despesa, e em elementos, que identificam o objeto do gasto. Buscava explicar apenas o objeto do gasto, ou seja, o custo da Administração Pública, sem levar em conta as necessidades da coletividade, e adotava classificações suficientes apenas para instrumentalizar o controle das despesas; nele, o aspecto jurídico, de controle, sobrepõe-se ao aspecto econômico, e sua função precípua é o controle político do Legislativo sobre o Executivo. O orçamento por desempenho representa uma evolução do tradicional: visava instrumentalizar a ação gerencial, apresentando propósitos para os créditos orçamentários solicitados e os custos necessários ao alcance desses propósitos. Apresenta informações quantitativas que mensuram os resultados, preocupa-se com os objetivos finais do gasto, e não com o seu objeto, e classifica a despesa de acordo com esse objetivo final. Sua limitação decisiva, contudo, é não ser vinculado ao planejamento — e é exatamente isso que o separa do orçamento-programa."},
  n2:{ask:"Explique o orçamento-programa e compare-o com o orçamento tradicional.",
    hint:"Origem, difusão, características e o quadro comparativo linha a linha.",
    ref:"O orçamento-programa representa uma evolução dos orçamentos e é a modalidade orçamentária atualmente em uso pelos entes públicos brasileiros, sendo o orçamento legalmente exigido no Brasil. Surgiu nos Estados Unidos com o nome de PPBS, sigla de Planning Programming Budgeting System, e difundiu-se a partir de esforços da Organização das Nações Unidas e da Comissão Econômica para a América Latina. É considerado um instrumento de planejamento, pois possui organização dos componentes do planejamento e definição prévia e clara dos objetivos e metas governamentais, sendo caracterizado pela lógica empresarial, isto é, pela busca da eficiência, da eficácia e da efetividade. Comparado ao tradicional, é o mais atual; enquanto aquele é apenas uma peça contábil destinada a explicar o objeto do gasto, este utiliza indicadores para aferir e acompanhar os resultados; enquanto aquele classifica em unidades administrativas e elementos, este promove a integração entre planejamento e orçamento; enquanto aquele não levava em conta as necessidades da coletividade e servia apenas para instrumentalizar o controle das despesas, neste o controle visa à avaliação da eficiência, da eficácia e da efetividade."},
  n3:{ask:"Explique o orçamento base zero, o participativo e o incremental.",
    hint:"OBZ e incremental são opostos — diga por quê. No participativo, fale da obrigatoriedade municipal e da coexistência com o programa.",
    ref:"O orçamento base zero é a técnica que não considera os valores previstos no orçamento anterior e não fixa de antemão um valor orçamentário inicial, exigindo dos gestores, a cada novo exercício, a justificativa detalhada dos recursos solicitados. Tem foco na tomada de decisão sobre despesas e facilita o processo de revisão da decisão a respeito da alocação dos recursos públicos, possuindo ênfase no planejamento e na recorrente revisão de despesas; por isso é muito útil em fases de recessão econômica e adequado às situações em que as despesas públicas são limitadas por um teto de gastos. O orçamento incremental é o seu oposto: feito por meio de ajustes marginais nos itens de receitas e despesas, corresponde à repetição do orçamento anterior acrescido da variação de preços ocorrida no período. Já o orçamento participativo é técnica que contempla a participação da população no processo decisório por meio de audiências públicas, sendo, no âmbito dos municípios, de observância obrigatória, de modo que a realização de debates, audiências e consultas públicas é condição obrigatória para a aprovação do orçamento anual pela câmara municipal; não substitui as demais técnicas, podendo ser empregado em conjunto com elas e coexistindo com o orçamento-programa."},
  n4:{ask:"Explique os três modelos de orçamento e identifique o adotado no Brasil.",
    hint:"Diga quem faz o quê em cada modelo e a que tipo de regime cada um corresponde.",
    ref:"Os modelos de orçamento dizem respeito à repartição das etapas do processo orçamentário entre os Poderes, e são três. No modelo misto, os Poderes Executivo e Legislativo trabalham em conjunto: o Executivo elabora o orçamento, o Legislativo o discute e vota, o Executivo procede à sua execução e o Legislativo controla e avalia essa execução; é o modelo adotado atualmente no Brasil pela Constituição de 1988, e corresponde exatamente à alternância das quatro etapas do ciclo orçamentário. No modelo legislativo, o Poder Legislativo faz quase tudo, cabendo apenas a execução ao Poder Executivo; é adotado em países parlamentaristas. No modelo executivo, o Poder Executivo faz tudo — elabora, vota, executa e ele próprio controla e avalia —, sendo adotado em países com regimes autoritários. Não se confundem, portanto, espécies e modelos: as espécies, ou técnicas, dizem respeito ao método de elaboração do orçamento, enquanto os modelos indicam qual Poder desempenha cada etapa."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  v1:[
    sl("O mapa das seis espécies",
      '<div class="box"><span class="bl">Uma linha para cada uma</span>'+
      '<ul><li><b>Tradicional</b> — é considerado uma <b>simples peça contábil</b>.</li>'+
      '<li><b>Por desempenho</b> — <b>não é vinculado ao planejamento</b>.</li>'+
      '<li><b>Programa</b> — nosso modelo atual; <b>instrumento de planejamento</b>.</li>'+
      '<li><b>Base zero</b> — <b>não considera os valores previstos no orçamento anterior</b>.</li>'+
      '<li><b>Participativo</b> — contempla a <b>participação da população</b> no processo decisório.</li>'+
      '<li><b>Incremental</b> — dá uma “incrementada” (ajustes) no <b>orçamento anterior</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Atenção</span><p><b>Nem sempre</b> uma técnica é integralmente substituída por outra mais atual. Normalmente <b>só uma parte das orientações é incorporada</b>.</p></div>'),
    sl("Orçamento tradicional (clássico)",
      '<p>Era um <span class="key">simples quadro demonstrativo das receitas e despesas públicas</span> — <b>apenas uma peça contábil</b>. Possuía ênfase na classificação em <b>unidades administrativas</b> (classificação institucional: <i>quem</i> é o responsável pela despesa) e em <b>elementos</b> (<i>objeto</i> do gasto).</p>'+
      '<div class="box"><span class="bl">As cinco marcas do tradicional</span>'+
      '<ul><li>Buscava apenas explicar o <b>objeto do gasto</b> (custo da Administração Pública);</li>'+
      '<li><b>Não levava em conta as necessidades da coletividade</b>;</li>'+
      '<li>Adotava classificações suficientes apenas para <b>instrumentalizar o controle das despesas</b>;</li>'+
      '<li>O <b>aspecto jurídico (controle)</b> se sobrepõe ao <b>aspecto econômico</b>;</li>'+
      '<li>Função precípua: o <b>controle político do Legislativo sobre o Executivo</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Inversão frequente</span><p>A banca escreve que o <b>aspecto econômico se sobrepõe ao jurídico</b>, ou que o tradicional <b>levava em conta</b> as necessidades da coletividade. Ambas <b>erradas</b>.</p></div>'),
    sl("Orçamento por desempenho",
      '<p>É uma <b>evolução do orçamento tradicional</b>. Visava instrumentalizar a <span class="key">ação gerencial</span>, apresentando <b>propósitos</b> para os créditos orçamentários solicitados e os <b>custos necessários</b> ao alcance desses propósitos.</p>'+
      '<div class="box"><span class="bl">As quatro marcas</span>'+
      '<ul><li>Apresenta informações <b>quantitativas</b> (não qualitativas) que <b>mensuram os resultados</b>;</li>'+
      '<li>Preocupa-se com os <b>objetivos finais (resultado)</b> do gasto — <b>não</b> com o objeto do gasto;</li>'+
      '<li>A <b>classificação da despesa</b> é feita de acordo com o <b>objetivo final</b> do gasto;</li>'+
      '<li><b>Não é vinculado ao planejamento</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">O detalhe que decide a questão</span><p>Se o enunciado disser que a técnica mede resultados <b>mas não se vincula ao planejamento</b>, é <b>orçamento por desempenho</b>. Se disser que <b>integra planejamento e orçamento</b>, é <b>orçamento-programa</b>.</p></div>')
  ],
  v2:[
    sl("Orçamento-programa",
      '<p>Representa a <b>evolução</b> dos orçamentos e é a <span class="key">modalidade orçamentária atualmente em uso pelos entes públicos brasileiros</span>.</p>'+
      '<div class="box"><span class="bl">Origem e difusão</span><p>Surgiu nos <b>EUA</b> com o nome de <b>PPBS</b> — <i>Planning Programming Budgeting System</i> —, difundido a partir de esforços da <b>ONU</b> e da <b>CEPAL</b> (Comissão Econômica para a América Latina).</p></div>'+
      '<div class="box"><span class="bl">As quatro marcas</span>'+
      '<ul><li>É o orçamento <b>legalmente exigido no Brasil</b>;</li>'+
      '<li>Possui <b>organização dos componentes do planejamento</b>;</li>'+
      '<li>É caracterizado pela <b>lógica empresarial</b> — busca da <b>eficiência, eficácia e efetividade</b>;</li>'+
      '<li>Possui <b>definição prévia e clara dos objetivos e metas</b> governamentais.</li></ul></div>'),
    sl("Quadro comparativo — tradicional × programa",
      '<div class="box trap"><span class="bl">Linha a linha</span>'+
      '<ul><li><b>Mais antigo</b> × <b>mais atual</b>;</li>'+
      '<li>Apenas <b>peça contábil</b> para explicar o <b>objeto</b> do gasto × utiliza <b>indicadores</b> para aferir e acompanhar os <b>resultados</b>;</li>'+
      '<li>Classificação em <b>unidades administrativas e elementos</b> × <b>integração entre planejamento e orçamento</b>;</li>'+
      '<li><b>Não levava em conta</b> as necessidades da coletividade × caracterizado pela <b>lógica empresarial</b> (eficiência, eficácia e efetividade);</li>'+
      '<li>Apenas para <b>instrumentalizar o controle das despesas</b> × o controle visa à <b>avaliação da eficiência, eficácia e efetividade</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Atalho de prova</span><p>Palavras como <b>objeto do gasto</b>, <b>unidades administrativas</b> e <b>controle</b> puxam para o <b>tradicional</b>. Palavras como <b>indicadores</b>, <b>resultados</b>, <b>metas</b> e <b>efetividade</b> puxam para o <b>programa</b>.</p></div>')
  ],
  v3:[
    sl("Orçamento Base Zero (OBZ)",
      '<p>É <span class="key">muito útil em fases de recessão econômica</span> e, por isso, <b>adequado às situações em que as despesas públicas são limitadas por um teto de gastos</b>. Possui ênfase no <b>planejamento</b> e na <b>recorrente revisão de despesas</b>.</p>'+
      '<div class="box"><span class="bl">As cinco marcas</span>'+
      '<ul><li>Tem foco na <b>tomada de decisão sobre despesas</b>;</li>'+
      '<li><b>Facilita</b> o processo de <b>revisão da decisão</b> sobre a alocação dos recursos públicos;</li>'+
      '<li>Exige dos gestores, a cada novo exercício, a <b>justificativa detalhada dos recursos solicitados</b>;</li>'+
      '<li><b>Não fixa de antemão</b> um valor orçamentário inicial;</li>'+
      '<li><b>Não considera</b> os valores previstos no orçamento anterior.</li></ul></div>'+
      '<div class="box trap"><span class="bl">A troca que a banca faz</span><p>Dizer que o OBZ <b>dificulta</b> a revisão da alocação. Ele <b>facilita</b> — esse é justamente seu propósito.</p></div>'),
    sl("Orçamento participativo e incremental",
      '<div class="box"><span class="bl">Participativo</span>'+
      '<ul><li>Contempla a <b>participação da população no processo decisório</b> por meio de <b>audiências públicas</b>;</li>'+
      '<li>No âmbito dos <b>municípios</b>, é de <b>observância obrigatória</b>;</li>'+
      '<li><b>Coexiste</b> com o orçamento-programa — pode ser empregado <b>em conjunto</b> com outras técnicas;</li>'+
      '<li>A realização de <b>debates, audiências e consultas públicas</b> é <b>condição obrigatória</b> para a aprovação do orçamento anual pela câmara municipal.</li></ul></div>'+
      '<div class="box"><span class="bl">Incremental</span><p>Orçamento feito por meio de <b>ajustes marginais</b> nos itens de receitas e despesas: a <b>repetição do orçamento anterior acrescido da variação de preços</b> ocorrida no período. Dá uma “incrementada” no anterior.</p></div>'+
      '<div class="box trap"><span class="bl">OBZ × incremental</span>'+
      '<ul><li><b>OBZ:</b> parte do <b>zero</b>, ignora o orçamento anterior, exige justificativa detalhada.</li>'+
      '<li><b>Incremental:</b> parte do <b>anterior</b> e ajusta pela variação de preços.</li></ul>'+
      '<p>Toda questão que oponha as duas está testando <b>esta</b> frase.</p></div>')
  ],
  v4:[
    sl("Os três modelos de orçamento",
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">M</span><span class="nm">Misto</span></div><div class="fn-b"><p>Executivo e Legislativo <b>trabalham em conjunto</b>. <b>Adotado no Brasil</b> (CF/88).</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">L</span><span class="nm">Legislativo</span></div><div class="fn-b"><p>O Legislativo <b>faz quase tudo</b>; só <b>não executa</b>. Adotado em países <b>parlamentaristas</b>.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">E</span><span class="nm">Executivo</span></div><div class="fn-b"><p>O Executivo <b>faz tudo</b>: elabora, vota, executa e controla. Adotado em <b>regimes autoritários</b>.</p></div></div></div>'+
      '<div class="box"><span class="bl">O modelo misto, etapa a etapa</span>'+
      '<ul><li><b>1.</b> O Poder <b>Executivo</b> elabora o orçamento;</li>'+
      '<li><b>2.</b> O Poder <b>Legislativo</b> discute e vota;</li>'+
      '<li><b>3.</b> O Poder <b>Executivo</b> procede à execução;</li>'+
      '<li><b>4.</b> O Poder <b>Legislativo</b> controla e avalia a execução.</li></ul>'+
      '<p>É exatamente a alternância das quatro etapas do <b>ciclo orçamentário</b> (módulo 05).</p></div>'),
    sl("Espécie × modelo — não confunda",
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Espécies (técnicas)</span><span class="cd"><b>Como</b> o orçamento é elaborado: tradicional, desempenho, programa, base zero, participativo, incremental.</span></div>'+
      '<div class="chip"><span class="cn">Modelos</span><span class="cd"><b>Quem</b> faz cada etapa: misto, legislativo, executivo.</span></div></div>'+
      '<div class="box trap"><span class="bl">Duas trocas frequentes</span>'+
      '<ul><li>Dizer que o modelo <b>legislativo</b> é o dos regimes autoritários. É o <b>executivo</b>.</li>'+
      '<li>Dizer que o Brasil adota o modelo <b>executivo</b> porque o Executivo elabora e executa. O Brasil adota o <b>misto</b>: o Legislativo vota, controla e avalia.</li></ul></div>')
  ]
};

var EX = {
p1:{t:"match", instr:"Correlacione a espécie à sua marca registrada",
  pairs:[["Tradicional","Simples peça contábil"],
         ["Por desempenho","Não é vinculado ao planejamento"],
         ["Programa","Instrumento de planejamento; modelo atual"],
         ["Base zero","Não considera os valores do orçamento anterior"]]},

p2:{t:"match", instr:"Correlacione a espécie à sua marca registrada (parte 2)",
  pairs:[["Participativo","Participação da população no processo decisório"],
         ["Incremental","Ajustes marginais sobre o orçamento anterior"]]},

p3:{t:"gap", instr:"Complete a frase",
  before:"O orçamento tradicional, também conhecido como orçamento clássico, era ",
  after:" das receitas e despesas públicas.",
  options:["um simples quadro demonstrativo","um instrumento de planejamento","um sistema de indicadores"],
  answer:0,
  why:"Apenas uma peça contábil."},

p4:{t:"multi", instr:"Marque as características do orçamento tradicional",
  options:["Buscava apenas explicar o objeto do gasto",
           "Não levava em conta as necessidades da coletividade",
           "Adotava classificações suficientes apenas para instrumentalizar o controle das despesas",
           "O aspecto jurídico sobrepõe-se ao aspecto econômico",
           "Possui como função precípua o controle político do Legislativo sobre o Executivo",
           "Utiliza indicadores para aferir resultados",
           "Promove a integração entre planejamento e orçamento"],
  answers:[0,1,2,3,4],
  why:"As duas últimas são do orçamento-<b>programa</b>."},

p5:{t:"mc", instr:"No orçamento tradicional, a ênfase da classificação recai sobre:",
  options:["Unidades administrativas e elementos","Programas e ações",
           "Funções e subfunções","Resultados e indicadores"], answer:0,
  why:"Institucional (quem gasta) e elemento (objeto do gasto)."},

p6:{t:"gap", instr:"Complete a frase",
  before:"No orçamento tradicional, o aspecto ", after:" do orçamento se sobrepõe ao aspecto econômico.",
  options:["jurídico (controle)","econômico","gerencial"], answer:0,
  why:"A inversão dessa frase é erro plantado com frequência."},

p7:{t:"multi", instr:"Marque as características do orçamento por desempenho",
  options:["Apresenta informações quantitativas que mensuram os resultados",
           "Preocupa-se com os objetivos finais do gasto",
           "A classificação da despesa é feita conforme o objetivo final do gasto",
           "Não é vinculado ao planejamento",
           "Apresenta informações qualitativas",
           "Preocupa-se com o objeto do gasto"],
  answers:[0,1,2,3],
  why:"Quantitativas, não qualitativas; resultado, não objeto."},

p8:{t:"mc", instr:"O que separa o orçamento por desempenho do orçamento-programa?",
  options:["O por desempenho não é vinculado ao planejamento",
           "O por desempenho não mede resultados",
           "O por desempenho classifica por unidade administrativa",
           "O por desempenho é o legalmente exigido no Brasil"],
  answer:0,
  why:"Ambos olham para o resultado; só o programa integra planejamento e orçamento."},

p9:{t:"gap", instr:"Complete a frase",
  before:"O orçamento-programa surgiu nos EUA com o nome de ", after:".",
  options:["PPBS — Planning Programming Budgeting System","OBZ — Orçamento Base Zero",
           "PPA — Plano Plurianual"], answer:0,
  why:"Difundido a partir de esforços da ONU e da CEPAL."},

p10:{t:"mc", instr:"O orçamento-programa difundiu-se a partir de esforços de quais organismos?",
  options:["ONU e CEPAL","OCDE e FMI","Banco Mundial e BID","OIT e OMC"], answer:0,
  why:"CEPAL = Comissão Econômica para a América Latina."},

p11:{t:"multi", instr:"Marque as características do orçamento-programa",
  options:["É o orçamento legalmente exigido no Brasil",
           "Possui organização dos componentes do planejamento",
           "É caracterizado pela lógica empresarial — eficiência, eficácia e efetividade",
           "Possui definição prévia e clara dos objetivos e metas governamentais",
           "É apenas uma peça contábil",
           "Não leva em conta as necessidades da coletividade"],
  answers:[0,1,2,3],
  why:"As duas últimas descrevem o orçamento tradicional."},

p12:{t:"sort", instr:"A característica é do orçamento tradicional ou do orçamento-programa?",
  buckets:["Tradicional","Programa"],
  items:[["Mais antigo",0],["Peça contábil para explicar o objeto do gasto",0],
         ["Classificação em unidades administrativas e elementos",0],
         ["Serve apenas para instrumentalizar o controle das despesas",0],
         ["Utiliza indicadores para aferir e acompanhar resultados",1],
         ["Integração entre planejamento e orçamento",1],
         ["Lógica empresarial: eficiência, eficácia e efetividade",1],
         ["O controle visa à avaliação da eficiência, eficácia e efetividade",1]],
  why:"Objeto/unidades/controle → tradicional. Indicadores/metas/efetividade → programa."},

p13:{t:"wordbank", instr:"Monte a definição do orçamento base zero",
  target:["não","considera","os","valores","previstos","no","orçamento","anterior"],
  extra:["repete","acrescido","variação"],
  why:"E tampouco fixa de antemão um valor orçamentário inicial."},

p14:{t:"multi", instr:"Marque as características do orçamento base zero",
  options:["Tem foco na tomada de decisão sobre despesas",
           "Facilita o processo de revisão da alocação dos recursos públicos",
           "Exige, a cada exercício, a justificativa detalhada dos recursos solicitados",
           "Não fixa de antemão um valor orçamentário inicial",
           "Parte do orçamento anterior acrescido da variação de preços",
           "Dificulta a revisão da decisão sobre alocação"],
  answers:[0,1,2,3],
  why:"A quinta é do incremental; a sexta inverte o propósito do OBZ."},

p15:{t:"gap", instr:"Complete a frase",
  before:"O orçamento base zero é muito útil em fases de ",
  after:", sendo adequado a situações em que as despesas são limitadas por um teto de gastos.",
  options:["recessão econômica","expansão econômica","estabilidade de preços"],
  answer:0,
  why:"É a técnica da revisão recorrente de despesas."},

p16:{t:"mc", instr:"Qual técnica corresponde à repetição do orçamento anterior acrescido da variação de preços do período?",
  options:["Orçamento incremental","Orçamento base zero",
           "Orçamento por desempenho","Orçamento participativo"], answer:0,
  why:"Ajustes marginais nos itens de receitas e despesas."},

p17:{t:"sort", instr:"A afirmação vale para o OBZ ou para o incremental?",
  buckets:["Base zero","Incremental"],
  items:[["Ignora os valores do orçamento anterior",0],
         ["Exige justificativa detalhada a cada exercício",0],
         ["Não fixa valor orçamentário inicial",0],
         ["Faz ajustes marginais sobre o ano anterior",1],
         ["Repete o orçamento anterior corrigido por preços",1]],
  why:"São técnicas opostas — e toda questão que as confronta testa exatamente isso."},

p18:{t:"multi", instr:"Marque o que é correto sobre o orçamento participativo",
  options:["Contempla a participação da população no processo decisório",
           "Realiza-se por meio de audiências públicas",
           "No âmbito dos municípios é de observância obrigatória",
           "Coexiste com o orçamento-programa",
           "Substitui o orçamento-programa",
           "É incompatível com outras técnicas orçamentárias"],
  answers:[0,1,2,3],
  why:"Pode ser empregado <b>em conjunto</b> com outras técnicas."},

p19:{t:"gap", instr:"Complete a frase",
  before:"A realização de debates, audiências e consultas públicas é ",
  after:" para a aprovação do orçamento anual pela câmara municipal.",
  options:["condição obrigatória","mera faculdade","exigência apenas em anos eleitorais"],
  answer:0,
  why:"No âmbito municipal, o orçamento participativo é de observância obrigatória."},

p20:{t:"order", instr:"Ordene as etapas do modelo de orçamento misto",
  items:["O Poder Executivo elabora o orçamento",
         "O Poder Legislativo discute e vota",
         "O Poder Executivo procede à execução",
         "O Poder Legislativo controla e avalia a execução"],
  why:"É a mesma alternância das quatro etapas do ciclo orçamentário."},

p21:{t:"match", instr:"Correlacione o modelo ao regime em que é adotado",
  pairs:[["Misto","Brasil, sob a CF/88"],
         ["Legislativo","Países parlamentaristas"],
         ["Executivo","Países com regimes autoritários"]]},

p22:{t:"mc", instr:"No modelo de orçamento legislativo, o Poder Legislativo:",
  options:["Faz quase tudo, exceto a execução","Faz tudo, inclusive a execução",
           "Apenas vota o orçamento","Apenas controla e avalia"], answer:0,
  why:"A execução fica a cargo do Executivo. É o modelo dos países parlamentaristas."},

p23:{t:"mc", instr:"O modelo de orçamento adotado atualmente no Brasil é o:",
  options:["Misto","Legislativo","Executivo","Participativo"], answer:0,
  why:"Executivo e Legislativo trabalham em conjunto, nos termos da CF/88."},

p24:{t:"sort", instr:"O item é uma espécie (técnica) ou um modelo de orçamento?",
  buckets:["Espécie / técnica","Modelo"],
  items:[["Tradicional",0],["Por desempenho",0],["Programa",0],["Base zero",0],
         ["Participativo",0],["Incremental",0],
         ["Misto",1],["Legislativo",1],["Executivo",1]],
  why:"Espécies dizem <b>como</b> se elabora; modelos dizem <b>quem</b> faz cada etapa."},

p25:{t:"wordbank", instr:"Monte a característica central do orçamento-programa",
  target:["integração","entre","planejamento","e","orçamento"],
  extra:["unidades","administrativas","elementos"],
  why:"É justamente o que falta ao orçamento por desempenho."},

p26:{t:"mc", instr:"“Nem sempre uma técnica é integralmente substituída por outra mais atual.” O que costuma ocorrer?",
  options:["Só uma parte das orientações é incorporada",
           "A técnica anterior é revogada por lei",
           "As técnicas passam a ser aplicadas alternadamente",
           "A técnica mais antiga volta a vigorar após dez anos"],
  answer:0,
  why:"Observação expressa do resumo — e item verdadeiro sempre que aparecer."},

p27:{t:"multi", instr:"Marque o que caracteriza o modelo de orçamento executivo",
  options:["O Poder Executivo elabora o orçamento",
           "O Poder Executivo vota o orçamento",
           "O Poder Executivo executa o orçamento",
           "O próprio Executivo controla e avalia",
           "O Legislativo discute e vota",
           "É o modelo adotado no Brasil"],
  answers:[0,1,2,3],
  why:"É o modelo dos regimes autoritários — no Brasil vigora o <b>misto</b>."},

p28:{t:"gap", instr:"Complete a frase",
  before:"O orçamento por desempenho apresenta informações ", after:" que mensuram os resultados.",
  options:["quantitativas","qualitativas","descritivas"], answer:0,
  why:"A troca por “qualitativas” é a pegadinha do tópico."},

p29:{t:"order", instr:"Ordene as espécies da mais antiga à mais atual",
  items:["Orçamento tradicional (clássico)","Orçamento por desempenho","Orçamento-programa"],
  why:"O por desempenho evolui do tradicional; o programa evolui de ambos."},

p30:{t:"mc", instr:"Qual técnica orçamentária é considerada um instrumento de planejamento e é legalmente exigida no Brasil?",
  options:["Orçamento-programa","Orçamento por desempenho",
           "Orçamento base zero","Orçamento tradicional"], answer:0,
  why:"Surgido como PPBS nos EUA e difundido por ONU e CEPAL."}
};

for(var i=0;i<QS.length;i++) EX["q"+i]={t:"ce", qi:i};

var KIT = {
  n1:{tema:"Orçamento tradicional e por desempenho",
    bases:["Lei nº 4.320/1964, arts. 2º e 13 — classificação institucional e por elementos",
           "Doutrina — orçamento clássico e orçamento de desempenho",
           "MTO/SOF — evolução das técnicas orçamentárias",
           "CF/1988, art. 70 — controle e avaliação"],
    ouro:["simples peça contábil","quadro demonstrativo das receitas e despesas",
          "unidades administrativas e elementos","objeto do gasto",
          "não levava em conta as necessidades da coletividade",
          "aspecto jurídico se sobrepõe ao econômico",
          "controle político do Legislativo sobre o Executivo",
          "informações quantitativas","objetivos finais do gasto","não vinculado ao planejamento"],
    abertura:"O orçamento tradicional, também denominado clássico, constituía simples quadro demonstrativo das receitas e despesas públicas, com ênfase na classificação em unidades administrativas e elementos, buscando explicar apenas o objeto do gasto e tendo como função precípua o controle político do Poder Legislativo sobre o Poder Executivo.",
    evite:"Não afirme que, no orçamento tradicional, o aspecto <b>econômico</b> se sobrepõe ao jurídico, nem que ele considerava as necessidades da coletividade."},
  n2:{tema:"Orçamento-programa",
    bases:["Lei nº 4.320/1964, art. 2º, § 1º — quadros demonstrativos por programa",
           "Decreto-Lei nº 200/1967, arts. 7º e 16 — planejamento e programação",
           "CF/1988, art. 165, § 1º — PPA por programas",
           "Doutrina — PPBS, ONU e CEPAL"],
    ouro:["modalidade atualmente em uso no Brasil","orçamento legalmente exigido",
          "instrumento de planejamento","PPBS","Planning Programming Budgeting System",
          "ONU e CEPAL","organização dos componentes do planejamento",
          "lógica empresarial","eficiência, eficácia e efetividade",
          "definição prévia e clara dos objetivos e metas","indicadores",
          "integração entre planejamento e orçamento"],
    abertura:"O orçamento-programa, modalidade atualmente em uso pelos entes públicos brasileiros e legalmente exigida no país, representa a evolução das técnicas orçamentárias, sendo caracterizado pela integração entre planejamento e orçamento, pela definição prévia e clara de objetivos e metas governamentais e pela lógica empresarial de busca da eficiência, da eficácia e da efetividade.",
    evite:"Não atribua ao orçamento-programa a classificação por <b>unidades administrativas e elementos</b> como traço definidor — essa é a marca do tradicional."},
  n3:{tema:"Base zero, participativo e incremental",
    bases:["Doutrina — Orçamento Base Zero (Peter Pyhrr)",
           "Lei nº 10.257/2001 (Estatuto da Cidade), art. 44 — gestão orçamentária participativa",
           "CF/1988, art. 29, XII — cooperação das associações no planejamento municipal",
           "LC nº 101/2000, art. 48, § 1º — incentivo à participação popular e audiências públicas"],
    ouro:["não considera os valores previstos no orçamento anterior",
          "não fixa de antemão um valor orçamentário inicial",
          "justificativa detalhada dos recursos solicitados","recorrente revisão de despesas",
          "recessão econômica","teto de gastos","participação da população no processo decisório",
          "audiências públicas","observância obrigatória nos municípios","coexiste com o orçamento-programa",
          "ajustes marginais","variação de preços ocorrida no período"],
    abertura:"O orçamento base zero é a técnica que não considera os valores previstos no orçamento anterior nem fixa de antemão um valor orçamentário inicial, exigindo dos gestores, a cada novo exercício, a justificativa detalhada dos recursos solicitados, razão pela qual se mostra particularmente útil em fases de recessão econômica e em contextos de limitação das despesas por teto de gastos.",
    evite:"Não confunda base zero com incremental: aquele <b>ignora</b> o orçamento anterior; este o <b>repete</b> acrescido da variação de preços."},
  n4:{tema:"Modelos de orçamento",
    bases:["CF/1988, arts. 165 a 169 — processo orçamentário brasileiro",
           "CF/1988, art. 84, XXIII — iniciativa das leis orçamentárias",
           "CF/1988, arts. 70 e 71 — controle externo",
           "Doutrina — modelos legislativo, executivo e misto"],
    ouro:["Executivo e Legislativo trabalham em conjunto","adotado no Brasil",
          "elabora, discute e vota, executa, controla e avalia",
          "o Legislativo faz quase tudo, salvo a execução","países parlamentaristas",
          "o Executivo faz tudo","regimes autoritários"],
    abertura:"Quanto aos modelos, o Brasil adota, sob a Constituição de 1988, o modelo misto, em que os Poderes Executivo e Legislativo trabalham em conjunto: o Executivo elabora o orçamento, o Legislativo o discute e vota, o Executivo procede à execução e o Legislativo controla e avalia essa execução.",
    evite:"Não inverta os modelos: o <b>legislativo</b> é dos países parlamentaristas e o <b>executivo</b> é dos regimes autoritários — e o Brasil não adota nenhum dos dois."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. Tema conceitual: o espelho premia quem <b>contrasta</b> as técnicas em vez de apenas listá-las.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre as espécies e os modelos de orçamento público, disserte necessariamente sobre:</p>'+
  '<ol><li>o orçamento tradicional e o orçamento por desempenho, apontando a evolução e o limite deste último;</li>'+
  '<li>o orçamento-programa, sua origem e suas características, comparando-o com o tradicional;</li>'+
  '<li>as técnicas base zero, participativa e incremental e os três modelos de orçamento, identificando o adotado no Brasil.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>O <b>orçamento tradicional</b>, também conhecido como <b>clássico</b>, consistia em <b>simples quadro demonstrativo das receitas e despesas públicas</b>, sendo, por isso, tido como mera <b>peça contábil</b>. Possuía ênfase na classificação em <b>unidades administrativas</b> — a classificação institucional, que responde a <i>quem</i> é o responsável pela despesa — e em <b>elementos</b>, que identificam o <i>objeto</i> do gasto. Buscava explicar apenas esse objeto, isto é, o custo da Administração Pública, sem <b>levar em conta as necessidades da coletividade</b>, e adotava classificações suficientes apenas para <b>instrumentalizar o controle das despesas</b>, de modo que nele o <b>aspecto jurídico, de controle, sobrepõe-se ao aspecto econômico</b>; sua <b>função precípua</b> é o <b>controle político do Legislativo sobre o Executivo</b>. O <b>orçamento por desempenho</b> representa a primeira evolução desse modelo: visava instrumentalizar a <b>ação gerencial</b>, apresentando <b>propósitos</b> para os créditos orçamentários solicitados e os <b>custos necessários</b> ao alcance desses propósitos, valendo-se de informações <b>quantitativas</b> que mensuram resultados e classificando a despesa segundo o <b>objetivo final do gasto</b>. Seu <b>limite decisivo</b>, contudo, é <b>não ser vinculado ao planejamento</b>.</p>'+
  '<p>É precisamente esse limite que o <b>orçamento-programa</b> supera. Modalidade <b>atualmente em uso pelos entes públicos brasileiros</b> e <b>legalmente exigida</b> no país, surgiu nos Estados Unidos com o nome de <b>PPBS</b> — <i>Planning Programming Budgeting System</i> —, difundindo-se a partir de esforços da <b>ONU</b> e da <b>CEPAL</b>. Caracteriza-se pela <b>organização dos componentes do planejamento</b>, pela <b>definição prévia e clara dos objetivos e metas governamentais</b> e pela <b>lógica empresarial</b>, traduzida na busca da <b>eficiência, da eficácia e da efetividade</b>. Comparado ao tradicional, enquanto este é apenas peça contábil voltada ao objeto do gasto, aquele utiliza <b>indicadores</b> para aferir e acompanhar <b>resultados</b>; enquanto este classifica por unidades administrativas e elementos, aquele promove a <b>integração entre planejamento e orçamento</b>; e enquanto naquele o controle servia apenas para instrumentalizar a fiscalização das despesas, neste o controle <b>visa à avaliação da eficiência, eficácia e efetividade</b>. Registre-se que <b>nem sempre</b> uma técnica é integralmente substituída por outra mais atual, sendo comum que apenas <b>parte das orientações</b> seja incorporada.</p>'+
  '<p>Ao lado dessas, o <b>orçamento base zero</b> é a técnica que <b>não considera os valores previstos no orçamento anterior</b> nem <b>fixa de antemão um valor orçamentário inicial</b>, exigindo dos gestores, a cada exercício, a <b>justificativa detalhada dos recursos solicitados</b>; tem foco na <b>tomada de decisão sobre despesas</b> e <b>facilita</b> a revisão da alocação dos recursos, mostrando-se útil em fases de <b>recessão econômica</b> e adequado a contextos de <b>teto de gastos</b>. Em sentido oposto, o <b>orçamento incremental</b> é feito por <b>ajustes marginais</b>, correspondendo à <b>repetição do orçamento anterior acrescido da variação de preços</b> do período. Já o <b>orçamento participativo</b> contempla a <b>participação da população no processo decisório</b>, por meio de <b>audiências públicas</b>, sendo, no âmbito dos <b>municípios</b>, de <b>observância obrigatória</b> — a realização de debates, audiências e consultas públicas é <b>condição para a aprovação do orçamento anual pela câmara municipal</b> —, e <b>coexiste</b> com o orçamento-programa.</p>'+
  '<p>Por fim, os <b>modelos</b> não se confundem com as espécies: aquelas dizem respeito ao <b>método</b> de elaboração; estes, a <b>qual Poder desempenha cada etapa</b>. No modelo <b>misto</b>, Executivo e Legislativo trabalham em conjunto — o Executivo elabora, o Legislativo discute e vota, o Executivo executa e o Legislativo controla e avalia —, e é o <b>adotado no Brasil</b> pela Constituição de 1988. No modelo <b>legislativo</b>, o Legislativo faz quase tudo, salvo a execução, próprio dos <b>países parlamentaristas</b>. No modelo <b>executivo</b>, o Executivo faz tudo, inclusive controlar-se a si mesmo, típico de <b>regimes autoritários</b>.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> as cinco marcas do tradicional (com o aspecto jurídico sobre o econômico) e o par “mede resultados, mas não se vincula ao planejamento”.</li>'+
  '<li><b>Item 2:</b> PPBS, ONU e CEPAL, as quatro características e ao menos três linhas do quadro comparativo.</li>'+
  '<li><b>Item 3:</b> a oposição base zero × incremental, a obrigatoriedade municipal do participativo e os três modelos com seus regimes.</li>'+
  '<li><b>Fecho:</b> distinguir expressamente <b>espécie</b> de <b>modelo</b> organiza a resposta e costuma render o ponto de redação.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Responda item a item, nomeando a técnica ou o modelo e justificando em uma frase.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>Quatro entes descrevem, em seus relatórios de gestão, o modo como elaboram e executam seus orçamentos:</p>'+
  '<ol><li>o <b>Município A</b> informa que, a cada exercício, repete as dotações do ano anterior corrigidas pela inflação do período, sem revisão de mérito;</li>'+
  '<li>o <b>Município B</b> informa que, diante de um teto de gastos, passou a exigir de cada secretaria a justificativa detalhada de todos os recursos solicitados, desconsiderando os valores do exercício anterior;</li>'+
  '<li>o <b>Município C</b> aprovou sua lei orçamentária sem realizar debates, audiências ou consultas públicas, sob o argumento de que já adota o orçamento-programa;</li>'+
  '<li>o <b>Estado D</b> apresenta um quadro de receitas e despesas classificado apenas por unidade administrativa e por elemento, sem indicadores de resultado.</li></ol>'+
  '<p><b>Pergunta-se:</b> identifique a técnica orçamentária de cada caso, avalie a regularidade do item 3 e indique qual modelo de orçamento vigora no Brasil.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1. Município A — orçamento incremental.</b> Trata-se da técnica feita por <b>ajustes marginais</b> nos itens de receitas e despesas, correspondente à repetição do orçamento anterior acrescido da <b>variação de preços</b> do período. Não há vício em si, mas a técnica não promove revisão de mérito da alocação.</p>'+
  '<p><b>2. Município B — orçamento base zero.</b> A exigência de <b>justificativa detalhada dos recursos solicitados</b> a cada exercício, com desconsideração dos valores do orçamento anterior e sem fixação prévia de valor inicial, é a marca do OBZ, <b>adequado às situações em que as despesas públicas são limitadas por um teto de gastos</b> e útil em fases de recessão.</p>'+
  '<p><b>3. Município C — irregular.</b> O <b>orçamento participativo</b> é, no âmbito dos <b>municípios</b>, de <b>observância obrigatória</b>, e a realização de <b>debates, audiências e consultas públicas</b> é <b>condição obrigatória</b> para a aprovação do orçamento anual pela câmara municipal. O argumento é improcedente porque o orçamento participativo <b>coexiste</b> com o orçamento-programa, podendo ser empregado em conjunto com ele — não são excludentes.</p>'+
  '<p><b>4. Estado D — orçamento tradicional (clássico).</b> A classificação exclusiva por <b>unidade administrativa</b> e por <b>elemento</b>, voltada a explicar o <b>objeto do gasto</b> e desacompanhada de indicadores de resultado, revela mera <b>peça contábil</b>, em que o aspecto jurídico de controle se sobrepõe ao econômico. O padrão hoje exigido é o <b>orçamento-programa</b>, com integração entre planejamento e orçamento.</p>'+
  '<p><b>5. Modelo vigente.</b> O Brasil adota, sob a CF/1988, o modelo <b>misto</b>: o Executivo elabora, o Legislativo discute e vota, o Executivo executa e o Legislativo controla e avalia.</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>Trocar <b>1</b> e <b>2</b>: quem <b>repete</b> é o incremental; quem <b>zera</b> é o base zero.</li>'+
  '<li>Aceitar o argumento do <b>3</b>. Participativo e programa <b>coexistem</b>.</li>'+
  '<li>Chamar o <b>4</b> de “orçamento por desempenho”. Sem indicadores de resultado e com foco no objeto do gasto, é <b>tradicional</b>.</li>'+
  '<li>Dizer que o Brasil adota o modelo <b>executivo</b> porque o Executivo elabora e executa. É <b>misto</b>.</li></ul></div>';

var TEC = [["CESPE","Q3bemD"],["FCC","Q3bemH"],["FGV","Q3bemK"],["VUNESP","Q3bemY"]];

var UNITS = [
  {n:1, title:"Tradicional e por desempenho", cvar:"u1", lessons:[
    {id:"t1", type:"teoria", title:"Mapa das espécies e o tradicional", xp:10, data:"v1"},
    {id:"t2", type:"drill",  title:"Praticar · mapa das espécies",     xp:20, data:["p1","p2","p26","q18"]},
    {id:"t3", type:"drill",  title:"Praticar · orçamento tradicional", xp:25, data:["p3","p4","p5","p6","q0","q1","q2","q3","q4"]},
    {id:"t4", type:"drill",  title:"Praticar · por desempenho",        xp:25, data:["p7","p8","p28","q5","q6","q7","q8","q9"]},
    {id:"t5", type:"flash",  title:"Flashcards · tradicional e desempenho", xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11]},
    {id:"t6", type:"feynman",title:"Explique tradicional e desempenho", xp:30, data:"n1"}
  ]},
  {n:2, title:"Orçamento-programa", cvar:"u2", lessons:[
    {id:"t8", type:"teoria", title:"Programa e quadro comparativo",    xp:10, data:"v2"},
    {id:"t9", type:"drill",  title:"Praticar · origem e difusão",      xp:20, data:["p9","p10","q11","q12"]},
    {id:"t10",type:"drill",  title:"Praticar · características",       xp:25, data:["p11","p25","p30","q10","q13","q14","q15"]},
    {id:"t11",type:"drill",  title:"Praticar · tradicional × programa", xp:25, data:["p12","p29","q16","q17"]},
    {id:"t12",type:"flash",  title:"Flashcards · orçamento-programa",  xp:15, data:[12,13,14,15,16,17,18]},
    {id:"t13",type:"feynman",title:"Explique o orçamento-programa",    xp:30, data:"n2"}
  ]},
  {n:3, title:"Base zero, participativo e incremental", cvar:"u3", lessons:[
    {id:"t15",type:"teoria", title:"OBZ, participativo e incremental", xp:10, data:"v3"},
    {id:"t16",type:"drill",  title:"Praticar · orçamento base zero",   xp:25, data:["p13","p14","p15","q19","q20","q21","q22","q23","q24","q25"]},
    {id:"t17",type:"drill",  title:"Praticar · OBZ × incremental",     xp:25, data:["p16","p17","q30","q31","q32"]},
    {id:"t18",type:"drill",  title:"Praticar · orçamento participativo", xp:25, data:["p18","p19","q26","q27","q28","q29"]},
    {id:"t19",type:"flash",  title:"Flashcards · OBZ e demais técnicas", xp:15, data:[19,20,21,22,23,24,25,26,27,28,29]},
    {id:"t20",type:"feynman",title:"Explique OBZ, participativo e incremental", xp:30, data:"n3"}
  ]},
  {n:4, title:"Modelos de orçamento", cvar:"u4", lessons:[
    {id:"t22",type:"teoria", title:"Misto, legislativo e executivo",   xp:10, data:"v4"},
    {id:"t23",type:"drill",  title:"Praticar · o modelo misto",        xp:20, data:["p20","p23","q33","q34"]},
    {id:"t24",type:"drill",  title:"Praticar · legislativo e executivo", xp:25, data:["p21","p22","p27","q35","q36","q37","q38"]},
    {id:"t25",type:"drill",  title:"Praticar · espécie × modelo",      xp:25, data:["p24","q39"]},
    {id:"t26",type:"flash",  title:"Flashcards · modelos",             xp:15, data:[30,31,32,33,34,35]},
    {id:"t27",type:"feynman",title:"Explique os modelos de orçamento", xp:30, data:"n4"}
  ]},
  {n:5, title:"Aplicação e prova", cvar:"u1", lessons:[
    {id:"t29",type:"leitura",title:"Discursiva resolvida",             xp:25, data:"disc"},
    {id:"t30",type:"leitura",title:"Estudo de caso resolvido",         xp:25, data:"caso"},
    {id:"trev",type:"review",title:"Revisão geral das unidades",       xp:60, data:null},
    {id:"t31",type:"missao", title:"Missão TEC Concursos",             xp:15, data:null},
    {id:"t32",type:"prova",  title:"Simulado cronometrado",            xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo. É a definição do Resumo: o orçamento tradicional é também conhecido como <b>orçamento clássico</b> e era um simples quadro demonstrativo das receitas e despesas públicas, ou seja, <b>apenas uma peça contábil</b>.</p><p>No quadro das espécies, é exatamente a frase-chave do tradicional: \"considerado uma simples peça contábil\". Compare com o orçamento-programa, que é o \"instrumento de planejamento\".</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Tradicional</i></p>",
1:"<p>Certo. O Resumo diz que o orçamento tradicional possuía ênfase na classificação em <b>unidades administrativas</b> (classificação institucional — quem é o responsável por tal despesa?) e <b>elementos</b> (objeto do gasto).</p><p>No quadro comparativo, essa é a linha que o opõe ao orçamento-programa, que possui <b>integração entre planejamento e orçamento</b>.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Tradicional</i></p>",
2:"<p>Errado na segunda parte. A primeira está certa: o tradicional buscava apenas explicar o <b>objeto do gasto</b> (custo da Administração Pública). Mas ele <b>não levava em conta as necessidades da coletividade</b>.</p><p>O esquema do Resumo põe as duas ideias lado a lado justamente para a banca juntar uma certa com uma errada.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Tradicional</i></p>",
3:"<p>Errado — inverteu a ordem. No tradicional, o <b>aspecto jurídico (controle)</b> do orçamento se sobrepõe ao <b>aspecto econômico</b>.</p><p>Faz sentido com o resto do esquema: adotava classificações suficientes apenas para instrumentalizar o <b>controle das despesas</b>, e sua função precípua era o controle político do Legislativo sobre o Executivo.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Tradicional</i></p>",
4:"<p>Certo. É a última linha do esquema do Resumo: o orçamento tradicional possui como <b>função precípua o controle político do Legislativo sobre o Executivo</b>.</p><p>Tudo nele gira em torno do controle: o aspecto jurídico (controle) se sobrepõe ao econômico e as classificações servem apenas para instrumentalizar o controle das despesas.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Tradicional</i></p>",
5:"<p>Certo. O Resumo abre a seção assim: o orçamento por desempenho <b>é uma evolução do orçamento tradicional</b>.</p><p>Ele visava instrumentalizar a ação gerencial com propósitos para os créditos orçamentários solicitados, apresentando os <b>custos necessários</b> para o alcance de tais propósitos.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento por Desempenho</i></p>",
6:"<p>Errado por uma palavra. O Resumo diz que o orçamento por desempenho apresenta informações <b>quantitativas</b> que mensuram os resultados — e grifa entre parênteses: <b>(não é qualitativa)</b>.</p><p>É a troca que o próprio esquema antecipa. Guarde: desempenho = números que medem o resultado.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento por Desempenho</i></p>",
7:"<p>Certo. No esquema do Resumo: preocupa-se com os <b>objetivos finais (resultado)</b> do gasto — e, entre parênteses, <b>não é objeto do gasto</b>.</p><p>Esse é o contraste com o tradicional, que buscava apenas explicar o <b>objeto do gasto</b>. Objeto = tradicional; objetivo/resultado = desempenho.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento por Desempenho</i></p>",
8:"<p>Errado. O Resumo repete duas vezes, no quadro das espécies e no esquema: o orçamento por desempenho <b>não é vinculado ao planejamento</b>.</p><p>A vinculação ao planejamento é o que marca o <b>orçamento-programa</b>, considerado um instrumento de planejamento e que possui organização dos componentes do planejamento.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Espécies de Orçamento / Orçamento por Desempenho</i></p>",
9:"<p>Certo. Linha do esquema do Resumo: no orçamento por desempenho, <b>a classificação da despesa é feita de acordo com o objetivo final (resultado) do gasto</b>.</p><p>Contraste com o tradicional, cuja classificação era em unidades administrativas e elementos (objeto do gasto).</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento por Desempenho</i></p>",
10:"<p>Certo. O Resumo diz que o orçamento-programa representa uma evolução dos orçamentos e é <b>a modalidade orçamentária atualmente em uso pelos entes públicos brasileiros</b>.</p><p>No quadro das espécies: \"Nosso modelo atual\". No esquema: \"É o orçamento <b>legalmente exigido</b> no Brasil\".</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Programa</i></p>",
11:"<p>Certo. O Resumo registra que o orçamento-programa <b>surgiu nos EUA com o nome de PPBS</b> (Planning Programming Budgeting System).</p><p>Guarde a origem e a difusão juntas: nasceu nos EUA e se difundiu a partir de esforços da <b>ONU e da CEPAL</b>.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Programa</i></p>",
12:"<p>Certo. Segundo o Resumo, o orçamento-programa foi difundido a partir de esforços da <b>ONU</b> e da <b>CEPAL</b> (Comissão Econômica para a América Latina).</p><p>A origem, por sua vez, é americana: surgiu nos EUA com o nome de PPBS.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Programa</i></p>",
13:"<p>Certo. No quadro das espécies do Resumo: orçamento-programa — \"Nosso modelo atual. Considerado um <b>instrumento de planejamento</b>\".</p><p>Por isso possui organização dos componentes do planejamento e definição prévia e clara dos objetivos e metas governamentais. É o oposto do orçamento por desempenho, que não é vinculado ao planejamento.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Espécies de Orçamento</i></p>",
14:"<p>Certo. Linha do esquema do Resumo: o orçamento-programa é caracterizado pela <b>lógica empresarial</b> (busca da <b>eficiência, eficácia e efetividade</b>).</p><p>O quadro comparativo usa o mesmo trio para o controle: no programa, o controle visa a avaliação da eficiência, eficácia e efetividade.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Programa</i></p>",
15:"<p>Errado — trocou as colunas do quadro comparativo. Servir \"apenas para instrumentalizar o controle das despesas\" é característica do <b>orçamento tradicional</b>.</p><p>No orçamento-programa, <b>o controle visa a avaliação da eficiência, eficácia e efetividade</b>.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Quadro comparativo</i></p>",
16:"<p>Certo. No quadro comparativo do Resumo, o orçamento-programa <b>utiliza indicadores para aferir e acompanhar os resultados</b>.</p><p>Na mesma linha, o tradicional era apenas uma peça contábil para explicar o objeto do gasto.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Quadro comparativo</i></p>",
17:"<p>Errado — trocou as colunas. No quadro comparativo, a <b>integração entre planejamento e orçamento</b> é do <b>orçamento-programa</b>.</p><p>Na mesma linha, o tradicional tinha classificação em unidades administrativas e elementos.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Quadro comparativo</i></p>",
18:"<p>Certo. É o quadro <b>ATENÇÃO!</b> do Resumo: nem sempre uma técnica é integralmente substituída por outra mais atual; normalmente só <b>uma parte das orientações é incorporada</b>.</p><p>Por isso a banca pode cobrar que as espécies coexistem — o orçamento participativo, por exemplo, coexiste com o orçamento-programa.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Espécies de Orçamento — ATENÇÃO</i></p>",
19:"<p>Certo. No quadro das espécies e no esquema do OBZ, o Resumo diz que ele <b>não considera os valores previstos no orçamento anterior</b>.</p><p>É o oposto do incremental, que dá uma \"incrementada\" (realiza ajustes) no orçamento anterior.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Base Zero (OBZ)</i></p>",
20:"<p>Errado duas vezes. O OBZ <b>não fixa de antemão um valor orçamentário inicial</b>. E o ajuste pela variação de preços é característica do <b>orçamento incremental</b>.</p><p>O incremental é a repetição do orçamento anterior acrescido da variação de preços; o OBZ não considera os valores do anterior e exige justificativa detalhada a cada exercício.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Base Zero / Orçamento Incremental</i></p>",
21:"<p>Certo. O Resumo diz: o Orçamento Base Zero (OBZ) é <b>muito útil em fases de recessão econômica</b>.</p><p>Por isso mesmo é adequado às situações em que as despesas públicas são limitadas por um <b>teto de gastos</b>.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Base Zero (OBZ)</i></p>",
22:"<p>Certo. Segundo o Resumo, por ser útil em fases de recessão, o OBZ é <b>adequado às situações em que as despesas públicas são limitadas por um teto de gastos</b>.</p><p>A lógica: como não parte dos valores do orçamento anterior e exige justificativa de cada recurso, ajuda a caber no limite.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Base Zero (OBZ)</i></p>",
23:"<p>Certo. Literal do Resumo: o OBZ possui <b>ênfase no planejamento</b> e na <b>recorrente revisão de despesas</b>.</p><p>No esquema, isso aparece como foco na tomada de decisão sobre despesas e facilitação do processo de revisão da alocação dos recursos públicos.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Base Zero (OBZ)</i></p>",
24:"<p>Certo. Linha do esquema do Resumo: o OBZ <b>exige dos gestores, a cada novo exercício, a justificativa detalhada dos recursos solicitados</b>.</p><p>É a consequência de não considerar os valores do orçamento anterior nem fixar de antemão um valor inicial: tudo começa do zero.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Base Zero (OBZ)</i></p>",
25:"<p>Errado — é o contrário. O esquema do Resumo diz que o OBZ <b>facilita</b> o processo de revisão da decisão a respeito da alocação dos recursos públicos.</p><p>Coerente com a ênfase na <b>recorrente revisão de despesas</b> e com o foco na tomada de decisão sobre despesas.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Base Zero (OBZ)</i></p>",
26:"<p>Certo. É a primeira característica listada no Resumo: contempla a participação da população no processo decisório <b>por meio de audiências públicas</b>.</p><p>Lembre também que é uma técnica que pode ser empregada em conjunto com outras, como o orçamento-programa.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Participativo</i></p>",
27:"<p>Certo. Característica listada no Resumo: <b>no âmbito dos municípios</b>, o orçamento participativo é de <b>observância obrigatória</b>.</p><p>Ligado a isso: debates, audiências e consultas públicas são condição obrigatória para a aprovação do orçamento anual pela câmara municipal.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Participativo</i></p>",
28:"<p>Errado. O Resumo diz que o orçamento participativo é uma técnica que <b>pode ser empregada em conjunto</b> com outras, como o orçamento-programa, e que ele <b>coexiste</b> com o orçamento-programa.</p><p>Casa com o ATENÇÃO das espécies: nem sempre uma técnica é integralmente substituída por outra.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Participativo</i></p>",
29:"<p>Certo. Literal do Resumo: a realização de debates, audiências e consultas públicas é <b>condição obrigatória</b> para a aprovação do orçamento anual pela <b>câmara municipal</b>.</p><p>Por isso se diz que, no âmbito dos municípios, o orçamento participativo é de observância obrigatória.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Participativo</i></p>",
30:"<p>Certo. Definição do Resumo: o orçamento incremental é feito através de <b>ajustes marginais</b> nos itens de receitas e despesas.</p><p>O mnemônico do material: ele dá uma <b>\"incrementada\"</b> (realiza ajustes) no orçamento anterior.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Incremental</i></p>",
31:"<p>Certo. O Resumo define: é a <b>repetição do orçamento anterior acrescido da variação de preços</b> ocorrida no período.</p><p>É o polo oposto do OBZ, que não considera os valores previstos no orçamento anterior.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Incremental</i></p>",
32:"<p>Errado — trocou as espécies. Exigir a justificativa detalhada dos recursos solicitados a cada novo exercício é característica do <b>Orçamento Base Zero</b>.</p><p>O incremental apenas repete o orçamento anterior acrescido da variação de preços — dá uma \"incrementada\" no anterior, sem rediscutir tudo.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Incremental / OBZ</i></p>",
33:"<p>Certo. O Resumo diz: no modelo de orçamento misto os <b>Poderes Executivo e Legislativo trabalham em conjunto</b>.</p><p>A sequência do material: 1. Executivo elabora; 2. Legislativo discute e vota; 3. Executivo executa; 4. Legislativo controla e avalia.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Misto</i></p>",
34:"<p>Certo. Segundo o Resumo, o misto <b>é o tipo de orçamento adotado atualmente no Brasil (na CF/88)</b>.</p><p>No esquema dos modelos: misto — Brasil; legislativo — países parlamentaristas; executivo — países com regimes autoritários.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Modelos de Orçamento</i></p>",
35:"<p>Certo. Literal do Resumo: no orçamento legislativo, o Poder Legislativo <b>faz quase tudo</b>, só não faz a execução, que fica a cargo do <b>Poder Executivo</b>.</p><p>É adotado em <b>países parlamentaristas</b>.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Legislativo</i></p>",
36:"<p>Errado — trocou os modelos. O orçamento legislativo é adotado em <b>países parlamentaristas</b>.</p><p>O adotado em países com <b>regimes autoritários</b> é o <b>executivo</b>, em que o Executivo faz tudo. No Brasil, o modelo é o misto.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Modelos de Orçamento</i></p>",
37:"<p>Certo. O Resumo diz: no orçamento executivo, o Poder Executivo <b>faz tudo</b> — elabora, vota, executa e (ele mesmo) controla e avalia tudo.</p><p>Adotado em países com regimes autoritários.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Orçamento Executivo</i></p>",
38:"<p>Errado. O Brasil adota o <b>orçamento misto</b> (CF/88). O fato de o Executivo elaborar e executar não basta: no misto, o <b>Legislativo discute e vota</b> e depois <b>controla e avalia</b> a execução.</p><p>No executivo, é o próprio Executivo que vota, controla e avalia — modelo de países com regimes autoritários.</p><p class='fb-fonte'>AFO — Resumo 02 · <i>Modelos de Orçamento</i></p>",
39:"<p>Certo. O Resumo separa as duas classificações em seções distintas: as <b>espécies</b> (tradicional, desempenho, programa, OBZ, participativo, incremental) descrevem como o orçamento é concebido, e os <b>modelos</b> (misto, legislativo, executivo) dizem qual Poder faz cada etapa.</p><p>Nos modelos, o critério é sempre quem elabora, vota, executa e controla.</p><p class='fb-fonte off'>Não consta do AFO — Resumo 02 — o material apresenta as espécies e os modelos em seções separadas, mas não define o critério das espécies como \"método de elaboração\".</p>",
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"02", nome:"Espécies e modelos de orçamento", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, PROVA_POOL:PROVA_POOL};
})();
