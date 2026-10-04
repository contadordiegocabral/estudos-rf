/* Direito Administrativo — Módulo 01: Origem do Estado, sistemas administrativos, conceitos iniciais e fontes (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dadm01 = (function(){
"use strict";

var CARDS = [
  ["Quais são os elementos indissociáveis de que surge o Estado?","<b>3 elementos</b>: <b>povo</b>, <b>território</b> e <b>governo soberano</b>."],
  ["Quantos e quais são os sistemas administrativos?","<b>2</b>: o <b>sistema francês</b> (ou do <b>contencioso administrativo</b>) e o <b>sistema inglês</b> (ou de <b>jurisdição única</b>)."],
  ["Qual sistema administrativo é adotado no Brasil?","O <b>sistema inglês</b>, também chamado de <b>jurisdição única</b>."],
  ["No sistema francês, o Poder Judiciário pode intervir nas funções administrativas?","<b>Não</b>. É justamente o traço do sistema francês: o Judiciário <b>não</b> pode intervir nas funções administrativas."],
  ["Como também é conhecido o sistema francês?","Como <b>sistema do contencioso administrativo</b>."],
  ["O que significa “contencioso administrativo”?","Que as controvérsias no âmbito administrativo <b>não podem ser levadas ao Judiciário</b> e que o <b>tribunal administrativo profere decisões com força de coisa julgada</b>."],
  ["Quais as duas jurisdições da dualidade de jurisdição do sistema francês?","A <b>jurisdição administrativa</b> (formada pelos <b>tribunais administrativos</b>) e a <b>jurisdição comum</b> (formada pelos <b>órgãos do Poder Judiciário</b>)."],
  ["Qual foi um dos fundamentos do surgimento do contencioso administrativo?","O <b>reforço ao princípio da separação dos poderes</b>."],
  ["Com que princípio a dogmática administrativa se comprometeu ao se estruturar?","Com a <b>preservação do princípio da autoridade</b> — e <b>não</b> com a promoção das conquistas liberais e democráticas. (caiu no CESPE TJ PA 2019)"],
  ["No sistema inglês, o Poder Judiciário pode intervir nas funções administrativas?","<b>Sim</b> — e qualquer controvérsia havida no âmbito administrativo <b>pode ser levada à apreciação do Judiciário</b>."],
  ["Como também é conhecido o sistema inglês?","Como <b>sistema de jurisdição única</b>."],
  ["No sistema de jurisdição única existe contencioso administrativo?","<b>Não</b> existe o <b>contencioso administrativo do regime francês</b>."],
  ["No sistema de jurisdição única, quem profere decisões com força de coisa julgada?","O <b>Judiciário</b> — e ele é o <b>único competente</b> para isso."],

  ["Quantos sentidos do direito administrativo devemos ter sempre em mente?","<b>4</b>: <b>amplo</b>, <b>estrito</b>, <b>subjetivo</b> e <b>objetivo</b>."],
  ["O que compreende o sentido AMPLO?","As <b>funções administrativas e políticas</b>."],
  ["O que compreende o sentido ESTRITO?","<b>Apenas</b> as <b>funções administrativas</b>."],
  ["Sentido SUBJETIVO — quais os outros nomes e o que compreende?","Também chamado de <b>orgânico</b> ou <b>formal</b>. Compreende os <b>órgãos</b>, as <b>entidades</b> e os <b>agentes públicos</b>."],
  ["Sentido OBJETIVO — quais os outros nomes e o que compreende?","Também chamado de <b>funcional</b> ou <b>material</b>. Compreende as <b>atividades em si</b> — ex.: <b>poder de polícia</b>, <b>fomento</b>, <b>intervenção</b>."],
  ["Em sentido subjetivo, o que a expressão “administração pública” designa?","Os <b>entes que exercem a atividade administrativa</b>."],
  ["Qual a consequência do critério formal (subjetivo) adotado pelo Brasil?","Somente é administração pública <b>aquilo determinado como tal pelo ordenamento jurídico brasileiro</b>, <b>independentemente da atividade exercida</b>."],
  ["Qual é o objeto do direito administrativo?","O <b>estudo da função administrativa</b>; a <b>atividade jurídica NÃO contenciosa</b>; e o <b>estudo do aparato estatal de execução de políticas públicas</b>."],
  ["O que exprime a força do direito alemão no direito administrativo pátrio?","A <b>forma de aplicação do princípio da segurança jurídica</b>."],
  ["A que ramos o direito administrativo se liga?","É <b>proximamente relacionado ao direito constitucional</b> e possui <b>interfaces</b> com os direitos <b>processual, penal, tributário, do trabalho, civil e empresarial</b>."],
  ["O exercício do poder de polícia reflete qual sentido da administração pública?","O <b>sentido OBJETIVO</b> — a própria <b>atividade administrativa</b> exercida pelo Estado."],
  ["Função de governo × função administrativa","A <b>função de governo</b> estabelece as <b>diretrizes políticas</b> (mais próxima do objeto do <b>direito constitucional</b>); a <b>função administrativa</b> <b>executa</b> essas diretrizes (objeto do <b>direito administrativo</b>)."],
  ["“Administração pública” em sentido amplo engloba o quê?","As <b>funções administrativas</b> e as <b>funções de governo</b>."],
  ["Administração pública em sentido FORMAL relaciona-se a quê?","À <b>pessoa que executa</b> atividades da administração. (FGV – TJ AM 2013)"],
  ["Administração pública em sentido MATERIAL relaciona-se a quê?","À <b>atividade administrativa desempenhada pelo Estado</b>. (FGV – TJ AM 2013)"],

  ["Critério do SERVIÇO PÚBLICO — como define o direito administrativo?","Como as <b>regras de organização e gestão dos serviços públicos</b>."],
  ["Critério da PUISSANCE PUBLIQUE — como define o direito administrativo?","Como as <b>prerrogativas presentes nos atos de império</b>, <b>mas não nos atos de gestão</b>."],
  ["Critério TELEOLÓGICO — como define o direito administrativo?","Como o <b>conjunto de princípios que REGULAM A ATIVIDADE DO ESTADO</b>."],
  ["Critério da ADMINISTRAÇÃO PÚBLICA — como define o direito administrativo?","Como o <b>conjunto de princípios que REGEM A ADMINISTRAÇÃO PÚBLICA</b>."],
  ["O que a banca mistura de propósito nos critérios?","As definições do <b>critério teleológico</b> com as do <b>critério da Administração Pública</b>."],
  ["Como a escola da puissance publique se distingue da escola do serviço público?","Por conceituar o direito administrativo pela <b>coerção</b> e pelas <b>prerrogativas inerentes aos atos de império</b>, <b>diferenciando-os dos atos de gestão</b>."],
  ["O que é “direito administrativo do espetáculo”?","A <b>proliferação de institutos e interpretações</b> vinculados à produção de <b>cenário imaginário destinado a produzir entretenimento dos indivíduos</b>, <b>antes</b> da efetiva implantação de valores fundamentais. (CESPE TJ PA 2019)"],
  ["O que são fontes do direito administrativo?","<b>Todos os elementos de onde surgem as normas de direito administrativo</b>."],
  ["Fonte primária × fonte secundária","<b>Primária: as LEIS.</b> <b>Secundárias: jurisprudência, doutrina e costumes.</b>"],
  ["Quais são as quatro fontes do direito administrativo?","<b>Lei</b>, <b>doutrina</b>, <b>jurisprudência</b> e <b>costumes</b>. (FGV – COMPESA 2014)"],
  ["Quais as principais fontes FORMAIS, segundo a doutrina majoritária?","A <b>Constituição</b>, a <b>lei</b> e os <b>atos normativos da administração pública</b>. (CESPE – SEFAZ RS 2018)"],
  ["Decodifique: fontes inorganizadas, atividades opinativas e atividades interpretativas","<b>Inorganizadas = costumes</b> · <b>opinativas = doutrina</b> · <b>interpretativas = jurisprudências</b>."]
];

var QS = [
  ["A origem do Estado surge a partir da formação de três elementos indissociáveis: povo, território e governo soberano.","C","CEBRASPE","Os três elementos do resumo."],
  ["São elementos indissociáveis da origem do Estado o povo, o território e a soberania popular.","E","FCC","O terceiro elemento é o <b>governo soberano</b>."],
  ["Existem dois sistemas administrativos: o francês, também chamado de contencioso administrativo, e o inglês, também chamado de jurisdição única.","C","FGV","Os dois sistemas e seus apelidos."],
  ["O sistema francês também é conhecido como sistema de jurisdição única.","E","VUNESP","Jurisdição única é o <b>sistema inglês</b>."],
  ["O Brasil adota o sistema francês, ou do contencioso administrativo.","E","AOCP","O Brasil adota o <b>sistema inglês</b>."],
  ["O sistema administrativo adotado no Brasil é o inglês, de jurisdição única.","C","IBFC","Indicação expressa do resumo."],
  ["No sistema francês, o Poder Judiciário não pode intervir nas funções administrativas.","C","FUNDATEC","Traço definidor do sistema francês."],
  ["No sistema do contencioso administrativo, as controvérsias havidas no âmbito administrativo podem ser levadas à apreciação do Poder Judiciário.","E","FCC","No contencioso, elas <b>não podem</b> ser levadas ao Judiciário."],
  ["No sistema francês, o tribunal administrativo profere decisões com força de coisa julgada.","C","FGV","É o significado do contencioso administrativo."],
  ["Na dualidade de jurisdição do sistema francês, a jurisdição comum é formada pelos tribunais administrativos e a jurisdição administrativa, pelos órgãos do Poder Judiciário.","E","AOCP","Inverteu: administrativa = tribunais administrativos; comum = órgãos do Judiciário."],
  ["A dualidade de jurisdição do sistema francês é formada pela jurisdição administrativa e pela jurisdição comum.","C","VUNESP","As duas jurisdições do resumo."],
  ["O surgimento do contencioso administrativo teve como um dos seus fundamentos o reforço ao princípio da separação dos poderes.","C","IBFC","Observação 01 do resumo."],
  ["A dogmática administrativa se estruturou a partir de premissas teóricas comprometidas com a preservação do princípio da autoridade.","C","CEBRASPE","Observação 02 — caiu no CESPE TJ PA 2019."],
  ["A dogmática administrativa se estruturou a partir de premissas teóricas comprometidas com a promoção das conquistas liberais e democráticas, e não com a preservação do princípio da autoridade.","E","CEBRASPE","Inverteu a observação 02 do resumo."],
  ["No sistema inglês, o Poder Judiciário pode intervir nas funções administrativas.","C","VUNESP","Traço definidor do sistema inglês."],
  ["No sistema de jurisdição única subsiste o contencioso administrativo do regime francês, embora com competência reduzida.","E","AOCP","Nele <b>não existe</b> o contencioso administrativo do regime francês."],
  ["No sistema de jurisdição única, o Poder Judiciário é o único competente para proferir decisões com força de coisa julgada.","C","IBFC","Literal do resumo."],
  ["No sistema adotado no Brasil, as controvérsias decididas em definitivo no âmbito administrativo não podem ser levadas ao Poder Judiciário.","E","FUNDATEC","<b>Qualquer</b> controvérsia administrativa pode ser levada ao Judiciário."],

  ["Para conceituar o direito administrativo é preciso ter em mente quatro sentidos: amplo, estrito, subjetivo e objetivo.","C","CEBRASPE","Os quatro sentidos do resumo."],
  ["O direito administrativo em sentido amplo compreende apenas as funções administrativas.","E","FCC","Isso é o sentido <b>estrito</b>; o amplo abrange também as funções políticas."],
  ["O sentido amplo compreende as funções administrativas e políticas.","C","FGV","Definição do resumo."],
  ["O sentido estrito compreende apenas as funções administrativas.","C","VUNESP","Definição do resumo."],
  ["O sentido subjetivo, também chamado de orgânico ou formal, compreende os órgãos, as entidades e os agentes públicos.","C","AOCP","Definição do resumo."],
  ["O sentido objetivo, também chamado de funcional ou material, compreende os órgãos, as entidades e os agentes públicos.","E","IBFC","O objetivo compreende as <b>atividades em si</b>."],
  ["Poder de polícia, fomento e intervenção são exemplos de direito administrativo em sentido objetivo, funcional ou material.","C","FUNDATEC","Exemplos do próprio resumo."],
  ["Em sentido objetivo, administração pública designa os entes que exercem a atividade administrativa.","E","CEBRASPE","Isso é o sentido <b>subjetivo</b>."],
  ["Sob a perspectiva do critério formal (subjetivo) adotado pelo Brasil, somente é administração pública aquilo determinado como tal pelo ordenamento jurídico brasileiro, independentemente da atividade exercida.","C","FCC","Observação 02 do resumo."],
  ["Pelo critério formal adotado no Brasil, é administração pública toda entidade que exerça atividade materialmente administrativa, ainda que o ordenamento jurídico não a tenha definido como tal.","E","FGV","O critério é justamente o oposto: vale o que o ordenamento determinar."],
  ["O objeto do direito administrativo é o estudo da função administrativa, a atividade jurídica não contenciosa e o estudo do aparato estatal de execução de políticas públicas.","C","VUNESP","Observação 03 do resumo."],
  ["O objeto do direito administrativo é a atividade jurídica contenciosa.","E","AOCP","O resumo diz atividade jurídica <b>não contenciosa</b>."],
  ["Exprime a força do direito alemão, no direito administrativo pátrio, a forma de aplicação do princípio da segurança jurídica.","C","IBFC","Observação 04 do resumo."],
  ["O direito administrativo não possui interfaces com o direito tributário nem com o direito do trabalho, limitando-se à relação com o direito constitucional.","E","FUNDATEC","O resumo lista interfaces com processual, penal, tributário, do trabalho, civil e empresarial."],
  ["O exercício do poder de polícia reflete o sentido subjetivo da administração pública.","E","FCC","Reflete o sentido <b>objetivo</b>."],
  ["As funções de governo estão mais próximas ao objeto do direito constitucional, enquanto a função administrativa é objeto do direito administrativo.","C","FGV","Observação 07 do resumo."],
  ["A função administrativa tem como um de seus objetivos estabelecer diretrizes políticas, enquanto a função de governo se volta para a tarefa de executar essas diretrizes.","E","VUNESP","Inverteu: governo estabelece, administração executa."],
  ["A expressão administração pública, quando tomada em sentido amplo, engloba as funções administrativas e as funções de governo.","C","AOCP","Observação 09 do resumo."],
  ["Administração pública, em sentido formal, relaciona-se à pessoa que executa atividades da administração.","C","IBFC","Item I da questão-definição da FGV."],
  ["Administração pública, em sentido material, relaciona-se à pessoa que executa atividades da administração.","E","FUNDATEC","Em sentido material é a <b>atividade</b> administrativa desempenhada pelo Estado."],

  ["Pelo critério do serviço público, o direito administrativo são regras de organização e gestão dos serviços públicos.","C","CEBRASPE","Critério 01 do quadro do resumo."],
  ["Pelo critério da puissance publique, o direito administrativo são as prerrogativas presentes nos atos de império, mas não nos atos de gestão.","C","FGV","Critério 02 do quadro do resumo."],
  ["Pelo critério teleológico, o direito administrativo é o conjunto de princípios que regulam a atividade do Estado.","C","VUNESP","Critério 03 do quadro do resumo."],
  ["Pelo critério teleológico, o direito administrativo é o conjunto de princípios que regem a Administração Pública.","E","AOCP","Essa é a definição do critério da <b>Administração Pública</b>."],
  ["Pelo critério da administração pública, o direito administrativo é o conjunto de princípios que regulam a atividade do Estado.","E","IBFC","Essa é a definição do critério <b>teleológico</b>."],
  ["A escola da puissance publique distingue-se da escola do serviço público por conceituar o direito administrativo pela coerção e pelas prerrogativas inerentes aos atos de império, diferenciando-os dos atos de gestão.","C","FUNDATEC","Observação 02 dos critérios."],
  ["A expressão “direito administrativo do espetáculo” indica a proliferação de institutos e interpretações vinculados à produção de cenário imaginário destinado a produzir entretenimento dos indivíduos, antes da efetiva implantação de valores fundamentais.","C","CEBRASPE","Observação 03 — caiu no CESPE TJ PA 2019."],
  ["São fontes do direito administrativo todos os elementos de onde surgem as normas de direito administrativo.","C","FGV","Conceito do resumo."],
  ["A jurisprudência é fonte primária do direito administrativo, ao lado da lei.","E","VUNESP","A jurisprudência é fonte <b>secundária</b>."],
  ["As leis são fonte primária do direito administrativo; jurisprudência, doutrina e costumes são fontes secundárias.","C","AOCP","Quadro de fontes do resumo."],
  ["São quatro as fontes do direito administrativo: lei, doutrina, jurisprudência e os costumes.","C","IBFC","Questão-exemplo da FGV – COMPESA 2014."],
  ["Segundo a doutrina majoritária, as principais fontes formais do direito administrativo são a Constituição, a lei e os costumes.","E","FUNDATEC","São a Constituição, a lei e os <b>atos normativos da administração pública</b>."],
  ["No direito administrativo, as fontes inorganizadas correspondem à doutrina, e as atividades opinativas, aos costumes.","E","CEBRASPE","Inverteu: inorganizadas = costumes; opinativas = doutrina."],
  ["As atividades interpretativas, como fontes que influem na produção do direito positivo, correspondem à doutrina.","E","FCC","Atividades interpretativas = <b>jurisprudências</b>."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Origem do Estado e os dois sistemas administrativos",
      '<div class="box"><span class="bl">Origem do Estado</span>'+
      '<p>O Estado surge da formação de <b>3 elementos indissociáveis</b>:</p>'+
      '<div class="chips"><span class="chip">Povo</span><span class="chip">Território</span><span class="chip">Governo soberano</span></div>'+
      '<p>Guarde o terceiro pela palavra certa: é <b>governo soberano</b> — não “soberania popular”, não “povo soberano”.</p></div>'+
      '<div class="box"><span class="bl">São 2 sistemas administrativos</span>'+
      '<div class="tree"><div class="leaf"><b>Sistema francês</b> — ou do <b>contencioso administrativo</b></div>'+
      '<div class="leaf"><b>Sistema inglês</b> — ou de <b>jurisdição única</b> · <b>adotado no Brasil</b></div></div></div>'+
      '<div class="box"><span class="bl">Sistema francês (contencioso administrativo)</span>'+
      '<p>O <b>Poder Judiciário NÃO pode intervir</b> nas funções administrativas. “Contencioso administrativo” quer dizer duas coisas:</p>'+
      '<ul><li>as controvérsias no âmbito administrativo <b>não podem ser levadas ao Judiciário</b>;</li>'+
      '<li>o <b>tribunal administrativo</b> profere decisões <b>com força de coisa julgada</b>.</li></ul>'+
      '<p>Daí a <b>dualidade de jurisdição</b>: a <b>jurisdição administrativa</b> (formada pelos <b>tribunais administrativos</b>) e a <b>jurisdição comum</b> (formada pelos <b>órgãos do Poder Judiciário</b>).</p></div>'+
      '<div class="box"><span class="bl">Sistema inglês (jurisdição única) — o nosso</span>'+
      '<p>O <b>Judiciário PODE intervir</b> nas funções administrativas. Nele <b>não existe</b> o contencioso administrativo do regime francês; <b>qualquer</b> controvérsia havida no âmbito administrativo pode ser levada à apreciação do Judiciário, que é o <b>único competente</b> para proferir decisões com força de coisa julgada.</p></div>'+
      '<div class="box tip"><span class="bl">As duas OBSERVAÇÕES do resumo</span>'+
      '<p><b>01.</b> O surgimento do contencioso administrativo teve como um dos seus fundamentos o <b>reforço ao princípio da separação dos poderes</b>.</p>'+
      '<p><b>02.</b> A dogmática administrativa se estruturou a partir de premissas teóricas comprometidas com a <b>preservação do princípio da AUTORIDADE</b>, e <b>não</b> com a promoção das conquistas liberais e democráticas. <i>(caiu no CESPE TJ PA 2019)</i></p></div>'+
      '<div class="box trap"><span class="bl">Onde a banca troca as palavras</span>'+
      '<p>Ela inverte os <b>apelidos</b> (“francês = jurisdição única”), inverte quem <b>pode</b> intervir, inverte a <b>composição</b> das duas jurisdições e inverte a observação 02 (autoridade × conquistas liberais).</p></div>')
  ],
  V2:[
    sl("Os quatro sentidos e o objeto do direito administrativo",
      '<div class="box"><span class="bl">Sempre 4 sentidos</span>'+
      '<div class="fn3"><div class="fn"><b>Amplo</b><br>funções administrativas <b>e políticas</b></div>'+
      '<div class="fn"><b>Estrito</b><br><b>apenas</b> as funções administrativas</div>'+
      '<div class="fn"><b>Subjetivo</b> (orgânico/formal)<br><b>órgãos, entidades e agentes públicos</b></div>'+
      '<div class="fn"><b>Objetivo</b> (funcional/material)<br>as <b>atividades em si</b>: poder de polícia, fomento, intervenção</div></div>'+
      '<p class="mn"><em>Subjetivo = QUEM · Objetivo = O QUE</em></p></div>'+
      '<div class="box"><span class="bl">Administração pública nos dois sentidos</span>'+
      '<p>Em <b>sentido subjetivo</b>, administração pública designa os <b>entes que exercem a atividade administrativa</b>. O <b>exercício do poder de polícia</b>, por sua vez, reflete o <b>sentido objetivo</b> — a própria <b>atividade</b> administrativa exercida pelo Estado.</p>'+
      '<p>Da <b>questão-definição</b> (FGV – TJ AM 2013): em sentido <b>formal</b>, administração pública é a <b>pessoa que executa</b> as atividades; em sentido <b>material</b>, é a <b>atividade administrativa desempenhada pelo Estado</b>.</p></div>'+
      '<div class="box"><span class="bl">O critério formal (subjetivo) adotado pelo Brasil</span>'+
      '<p>Somente é administração pública <b>aquilo determinado como tal pelo ordenamento jurídico brasileiro</b>, <b>independentemente da atividade exercida</b>. O rótulo do ordenamento manda; a atividade, não.</p></div>'+
      '<div class="box"><span class="bl">O objeto do direito administrativo</span>'+
      '<ul><li>o <b>estudo da função administrativa</b>;</li>'+
      '<li>a <b>atividade jurídica NÃO contenciosa</b>;</li>'+
      '<li>o <b>estudo do aparato estatal de execução de políticas públicas</b>.</li></ul>'+
      '<p>É um ramo <b>proximamente relacionado ao direito constitucional</b>, com <b>interfaces</b> nos direitos <b>processual, penal, tributário, do trabalho, civil e empresarial</b>. E o que exprime a <b>força do direito alemão</b> entre nós é a <b>forma de aplicação do princípio da segurança jurídica</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Governo × administração</span>'+
      '<p>A <b>função de governo</b> <b>estabelece diretrizes políticas</b> e está mais próxima do objeto do <b>direito constitucional</b>. A <b>função administrativa</b> <b>executa</b> essas diretrizes e é o objeto do <b>direito administrativo</b>.</p>'+
      '<p>Em <b>sentido amplo</b>, a expressão “administração pública” engloba as <b>duas</b>: funções administrativas <b>e</b> funções de governo. A banca troca quem estabelece e quem executa.</p></div>')
  ],
  V3:[
    sl("Critérios de definição e fontes do direito administrativo",
      '<div class="box"><span class="bl">Os 4 critérios que mais aparecem em provas</span>'+
      '<ul><li><b>Serviço público</b> — regras de <b>organização e gestão dos serviços públicos</b>.</li>'+
      '<li><b>Puissance publique</b> — as <b>prerrogativas presentes nos atos de império</b>, mas <b>não nos atos de gestão</b>.</li>'+
      '<li><b>Teleológico</b> — conjunto de princípios que <b>REGULAM A ATIVIDADE DO ESTADO</b>.</li>'+
      '<li><b>Administração pública</b> — conjunto de princípios que <b>REGEM A ADMINISTRAÇÃO PÚBLICA</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Aviso expresso do resumo</span>'+
      '<p><b>“As bancas vão misturar as definições do critério teleológico com o critério da Administração Pública.”</b> Decore pelo objeto de cada um: <b>teleológico → atividade do Estado</b>; <b>administração pública → a própria Administração Pública</b>.</p>'+
      '<p>E a <b>puissance publique</b> se distingue da <b>escola do serviço público</b> porque conceitua o direito administrativo pela <b>coerção</b> e pelas <b>prerrogativas inerentes aos atos de império</b>, <b>diferenciando-os dos atos de gestão</b>.</p></div>'+
      '<div class="box tip"><span class="bl">“Direito administrativo do espetáculo”</span>'+
      '<p>Expressão que indica a <b>proliferação de institutos e interpretações</b> vinculados à produção de <b>cenário imaginário destinado a produzir entretenimento dos indivíduos</b>, <b>antes</b> da efetiva implantação de valores fundamentais. <i>(caiu no CESPE TJ PA 2019)</i></p></div>'+
      '<div class="box"><span class="bl">Fontes do direito administrativo</span>'+
      '<p>São <b>todos os elementos de onde surgem as normas</b> de direito administrativo.</p>'+
      '<div class="tree"><div class="leaf"><b>Fonte primária:</b> <b>Leis</b></div>'+
      '<div class="leaf"><b>Fontes secundárias:</b> <b>jurisprudência, doutrina e costumes</b></div></div>'+
      '<p>As <b>quatro fontes</b> cobradas pela FGV (COMPESA 2014): <b>lei, doutrina, jurisprudência e costumes</b>. E as principais fontes <b>formais</b>, segundo a doutrina majoritária (CESPE – SEFAZ RS 2018): a <b>Constituição</b>, a <b>lei</b> e os <b>atos normativos da administração pública</b>.</p></div>'+
      '<div class="box trap"><span class="bl">O vocabulário disfarçado do CESPE</span>'+
      '<p>Na ABIN 2018 a banca escreveu assim, e o resumo traduz:</p>'+
      '<ul><li><b>Fontes inorganizadas = costumes</b></li>'+
      '<li><b>Atividades opinativas = doutrina</b></li>'+
      '<li><b>Atividades interpretativas = jurisprudências</b></li></ul>'+
      '<p>Quem troca “inorganizadas” por doutrina cai na pegadinha.</p></div>')
  ]
};

var EX = {
S1:{t:"multi", instr:"Marque os elementos indissociáveis de que surge o Estado",
  options:["Povo","Território","Governo soberano","Constituição escrita","Moeda própria","Separação dos poderes"],
  answers:[0,1,2],
  why:"São três: povo, território e governo soberano."},

S2:{t:"sort", instr:"Cada característica é de qual sistema administrativo?",
  buckets:["Sistema francês","Sistema inglês"],
  items:[["O Judiciário não pode intervir nas funções administrativas",0],
         ["Contencioso administrativo",0],
         ["Dualidade de jurisdição",0],
         ["O tribunal administrativo profere decisões com força de coisa julgada",0],
         ["O Judiciário pode intervir nas funções administrativas",1],
         ["Jurisdição única",1],
         ["Adotado no Brasil",1],
         ["O Judiciário é o único competente para a coisa julgada",1]],
  why:"Francês = contencioso administrativo; inglês = jurisdição única, o nosso."},

S3:{t:"mc", instr:"Qual sistema administrativo é adotado no Brasil?",
  options:["O sistema inglês, de jurisdição única","O sistema francês, do contencioso administrativo",
           "Um sistema misto, com dualidade de jurisdição","O sistema alemão da segurança jurídica"],
  answer:0,
  why:"O resumo é expresso: sistema inglês, adotado no Brasil."},

S4:{t:"wordbank", instr:"Monte a frase que define o sistema francês",
  target:["No","sistema","francês","o","Poder","Judiciário","não","pode","intervir","nas","funções","administrativas"],
  extra:["inglês","única","sempre"],
  why:"No sistema inglês é o contrário: o Judiciário pode intervir."},

S5:{t:"gap", instr:"Complete a frase sobre o contencioso administrativo",
  before:"No sistema francês, o tribunal ",
  after:" profere decisões com força de coisa julgada.",
  options:["administrativo","judiciário","de contas"], answer:0,
  why:"É exatamente o que significa contencioso administrativo."},

S6:{t:"match", instr:"Correlacione as duas jurisdições do sistema francês",
  pairs:[["Jurisdição administrativa","Formada pelos tribunais administrativos"],
         ["Jurisdição comum","Formada pelos órgãos do Poder Judiciário"]],
  why:"A banca gosta de inverter essa composição."},

S7:{t:"mc", instr:"O surgimento do contencioso administrativo teve como um de seus fundamentos:",
  options:["O reforço ao princípio da separação dos poderes",
           "O enfraquecimento do princípio da separação dos poderes",
           "A promoção das conquistas liberais e democráticas",
           "A aplicação do princípio da segurança jurídica"],
  answer:0,
  why:"Observação 01 do resumo."},

S8:{t:"mc", instr:"A dogmática administrativa se estruturou a partir de premissas teóricas comprometidas com:",
  options:["A preservação do princípio da autoridade",
           "A promoção das conquistas liberais e democráticas",
           "A dualidade de jurisdição","O reforço da jurisdição única"],
  answer:0,
  why:"Observação 02 — e não com a promoção das conquistas liberais e democráticas (CESPE TJ PA 2019)."},

S9:{t:"match", instr:"Correlacione cada sentido ao seu conteúdo",
  pairs:[["Sentido amplo","Funções administrativas e políticas"],
         ["Sentido estrito","Apenas as funções administrativas"],
         ["Sentido subjetivo (orgânico/formal)","Órgãos, entidades e agentes públicos"],
         ["Sentido objetivo (funcional/material)","As atividades em si"]],
  why:"Subjetivo é QUEM; objetivo é O QUE."},

S10:{t:"sort", instr:"Classifique cada item no sentido correspondente",
  buckets:["Sentido subjetivo","Sentido objetivo"],
  items:[["Órgãos públicos",0],["Entidades",0],["Agentes públicos",0],
         ["Os entes que exercem a atividade administrativa",0],
         ["Poder de polícia",1],["Fomento",1],["Intervenção",1],
         ["A própria atividade administrativa exercida pelo Estado",1]],
  why:"O exercício do poder de polícia reflete o sentido objetivo."},

S11:{t:"multi", instr:"Marque os exemplos que o resumo dá do sentido objetivo (funcional/material)",
  options:["Poder de polícia","Fomento","Intervenção",
           "Agentes públicos","Entidades da administração indireta"],
  answers:[0,1,2],
  why:"Os três últimos itens do quadro de sentidos são atividades; agentes e entidades são sentido subjetivo."},

S12:{t:"gap", instr:"Complete o critério formal (subjetivo) adotado pelo Brasil",
  before:"Somente é administração pública aquilo determinado como tal pelo ordenamento jurídico brasileiro, independentemente da ",
  after:" exercida.",
  options:["atividade","autoridade","jurisdição"], answer:0,
  why:"Observação 02: vale o rótulo do ordenamento, não a atividade."},

S13:{t:"multi", instr:"Marque o que o resumo aponta como objeto do direito administrativo",
  options:["O estudo da função administrativa",
           "A atividade jurídica não contenciosa",
           "O estudo do aparato estatal de execução de políticas públicas",
           "A atividade jurídica contenciosa",
           "O estabelecimento de diretrizes políticas"],
  answers:[0,1,2],
  why:"É atividade jurídica NÃO contenciosa; diretrizes políticas são função de governo."},

S14:{t:"mc", instr:"O que exprime a força do direito alemão no direito administrativo pátrio?",
  options:["A forma de aplicação do princípio da segurança jurídica",
           "A dualidade de jurisdição","O critério da puissance publique",
           "A forma de aplicação do princípio da separação dos poderes"],
  answer:0,
  why:"Observação 04 do resumo."},

S15:{t:"sort", instr:"Função de governo ou função administrativa?",
  buckets:["Função de governo","Função administrativa"],
  items:[["Estabelecer diretrizes políticas",0],
         ["Está mais próxima do objeto do direito constitucional",0],
         ["Executar as diretrizes políticas",1],
         ["É objeto do direito administrativo",1]],
  why:"Em sentido amplo, administração pública engloba as duas."},

S16:{t:"match", instr:"Correlacione cada critério à sua definição",
  pairs:[["Serviço público","Regras de organização e gestão dos serviços públicos"],
         ["Puissance publique","Prerrogativas dos atos de império, mas não dos atos de gestão"],
         ["Teleológico","Conjunto de princípios que regulam a atividade do Estado"],
         ["Administração pública","Conjunto de princípios que regem a Administração Pública"]],
  why:"O resumo avisa que as bancas misturam os dois últimos."},

S17:{t:"mc", instr:"Conjunto de princípios que REGULAM A ATIVIDADE DO ESTADO. Qual o critério?",
  options:["Teleológico","Administração pública","Serviço público","Puissance publique"],
  answer:0,
  why:"Reger a Administração Pública é o critério da administração pública; regular a atividade do Estado é o teleológico."},

S18:{t:"sort", instr:"Classifique cada fonte do direito administrativo",
  buckets:["Fonte primária","Fonte secundária"],
  items:[["Leis",0],["Jurisprudência",1],["Doutrina",1],["Costumes",1]],
  why:"As quatro fontes: lei, doutrina, jurisprudência e costumes — só a lei é primária."},

S19:{t:"match", instr:"Traduza o vocabulário que o CESPE usou (ABIN 2018)",
  pairs:[["Fontes inorganizadas","Costumes"],
         ["Atividades opinativas","Doutrina"],
         ["Atividades interpretativas","Jurisprudências"]],
  why:"Trocar inorganizadas por doutrina é o erro que a banca espera."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Direito Administrativo 01","https://www.tecconcursos.com.br/s/Q1TQxq","Q1TQxq"],
  ["Caderno FCC — Direito Administrativo 01","https://www.tecconcursos.com.br/s/Q1u7Je","Q1u7Je"],
  ["Caderno FGV — Direito Administrativo 01","https://www.tecconcursos.com.br/s/Q1u7Jj","Q1u7Jj"],
  ["Caderno VUNESP — Direito Administrativo 01","https://www.tecconcursos.com.br/s/Q1u7Jr","Q1u7Jr"],
  ["Caderno AOCP — Direito Administrativo 01","https://www.tecconcursos.com.br/s/Q22Zcw","Q22Zcw"],
  ["Caderno IBFC — Direito Administrativo 01","https://www.tecconcursos.com.br/s/Q27OUy","Q27OUy"],
  ["Caderno FUNDATEC — Direito Administrativo 01","https://www.tecconcursos.com.br/s/Q27XQ5","Q27XQ5"]
];
var TECNOTA = "Módulo curto e quase todo de memória, e é aí que a banca ganha dinheiro: ela não discute, ela troca a palavra. Três fronteiras respondem pela maioria dos erros. A primeira é a dos sistemas administrativos — francês é o contencioso administrativo (Judiciário NÃO intervém, tribunal administrativo com força de coisa julgada, dualidade de jurisdição) e inglês é a jurisdição única, o nosso; a banca inverte os apelidos e inverte a composição das duas jurisdições. A segunda é a dos quatro sentidos: subjetivo/orgânico/formal são órgãos, entidades e agentes (QUEM), objetivo/funcional/material são as atividades em si (O QUE) — poder de polícia, fomento e intervenção. A terceira é a que o próprio resumo denuncia: \"as bancas vão misturar as definições do critério teleológico com o critério da Administração Pública\" — teleológico regula a ATIVIDADE DO ESTADO, o outro rege a ADMINISTRAÇÃO PÚBLICA. Feche com as fontes: primária é só a lei; jurisprudência, doutrina e costumes são secundárias, e no vocabulário do CESPE inorganizadas = costumes, opinativas = doutrina, interpretativas = jurisprudências.";

var UNITS = [
  {n:1, title:"Origem do Estado e sistemas administrativos", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Povo, território, governo soberano e os dois sistemas", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · origem do Estado e os dois sistemas", xp:25, data:["S1","S2","T0","T1","T2","T3","T4","T5"]},
    {id:"K3", type:"drill",  title:"Praticar · sistema francês e contencioso",       xp:25, data:["S3","S4","S5","S6","T6","T7","T8","T9","T10"]},
    {id:"K4", type:"drill",  title:"Praticar · jurisdição única e observações",      xp:25, data:["S7","S8","T11","T12","T13","T14","T15","T16","T17"]},
    {id:"K5", type:"flash",  title:"Flashcards · Estado e sistemas administrativos", xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12]}
  ]},
  {n:2, title:"Conceitos e sentidos do direito administrativo", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Os quatro sentidos e o objeto da matéria",       xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · os quatro sentidos",                  xp:25, data:["S9","S10","T18","T19","T20","T21","T22","T23"]},
    {id:"K8", type:"drill",  title:"Praticar · subjetivo, objetivo e critério formal",xp:25, data:["S11","S12","S13","T24","T25","T26","T27","T28","T29"]},
    {id:"K9", type:"drill",  title:"Praticar · objeto, interfaces e governo",         xp:25, data:["S14","S15","T30","T31","T32","T33","T34","T35","T36","T37"]},
    {id:"K10",type:"flash",  title:"Flashcards · conceitos e sentidos",              xp:15, data:[13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]}
  ]},
  {n:3, title:"Critérios de definição e fontes", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Os quatro critérios e as fontes",                xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · os quatro critérios",                 xp:25, data:["S16","S17","T38","T39","T40","T41","T42"]},
    {id:"K13",type:"drill",  title:"Praticar · escolas e o espetáculo",              xp:25, data:["S18","T43","T44","T45","T46"]},
    {id:"K14",type:"drill",  title:"Praticar · fontes primárias e secundárias",      xp:25, data:["S19","T47","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · critérios e fontes",                xp:15, data:[28,29,30,31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                        xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                           xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                          xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 01 de Direito Administrativo (Radegondes) ---------- */
var COM={
0:"<p>Certo. Abertura do resumo: <b>“a origem do Estado surge a partir da formação de 3 elementos indissociáveis: 1. Povo; 2. Território; e 3. Governo soberano”</b>.</p><p>O esquema do material repete os três em caixa própria — <b>povo · território · governo soberano</b>. Indissociáveis: falta um, não há Estado.</p><p class='fb-fonte'>Resumo 01 · <i>Origem do Estado</i></p>",
1:"<p>Errado por uma palavra. O terceiro elemento do resumo é <b>governo soberano</b>, e não “soberania popular”.</p><p>A troca é de gabarito: a lista é <b>povo</b>, <b>território</b> e <b>governo soberano</b>. Leia o terceiro item sempre inteiro.</p><p class='fb-fonte'>Resumo 01 · <i>Origem do Estado</i></p>",
2:"<p>Certo, com os dois apelidos no lugar certo: <b>“existem 2 sistemas administrativos: 1. Sistema francês (ou do contencioso administrativo); e 2. Sistema inglês (ou de jurisdição única) [adotado no Brasil]”</b>.</p><p>Guarde o par: <b>francês → contencioso</b>; <b>inglês → jurisdição única</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Sistemas Administrativos</i></p>",
3:"<p>Errado — trocou o apelido. O sistema francês é o do <b>contencioso administrativo</b>. <b>Jurisdição única</b> é o apelido do <b>sistema inglês</b>.</p><p>É a inversão mais barata da banca neste assunto, porque o candidato decora os dois nomes soltos e não o par.</p><p class='fb-fonte'>Resumo 01 · <i>Sistemas Administrativos</i></p>",
4:"<p>Errado. O resumo marca expressamente qual é o nosso: <b>“Sistema inglês (ou de jurisdição única) [adotado no Brasil]”</b>.</p><p>No quadro comparativo ele repete, na coluna do sistema inglês: <b>“Adotado no Brasil”</b>. O francês nunca foi o nosso.</p><p class='fb-fonte'>Resumo 01 · <i>Sistemas Administrativos</i></p>",
5:"<p>Certo, literal do resumo e do quadro comparativo: o <b>sistema inglês</b>, também conhecido como <b>sistema de jurisdição única</b>, é o <b>adotado no Brasil</b>.</p><p>Consequência direta que o material tira: aqui <b>não existe</b> o contencioso administrativo do regime francês.</p><p class='fb-fonte'>Resumo 01 · <i>Sistema Inglês</i></p>",
6:"<p>Certo — é a primeira linha da definição: o sistema francês <b>“é aquele em que o Poder Judiciário NÃO pode intervir nas funções administrativas”</b>.</p><p>O quadro comparativo do resumo repete a frase na coluna do sistema francês. No inglês, a coluna ao lado diz o oposto: <b>“o Judiciário pode intervir nas funções administrativas”</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Sistema Francês</i></p>",
7:"<p>Errado — é justamente o contrário. O resumo explica o que significa contencioso administrativo: <b>“as controvérsias no âmbito administrativo NÃO podem ser levadas ao Judiciário”</b>.</p><p>Quem pode levar qualquer controvérsia administrativa ao Judiciário é o <b>sistema inglês</b>, de jurisdição única — o nosso.</p><p class='fb-fonte'>Resumo 01 · <i>Sistema Francês</i></p>",
8:"<p>Certo. É a segunda metade do significado de contencioso administrativo no resumo: <b>“o tribunal Administrativo profere decisões com força de coisa julgada”</b>.</p><p>Contraste que a banca explora: no sistema inglês, <b>o Judiciário é o único competente</b> para proferir decisões com força de coisa julgada.</p><p class='fb-fonte'>Resumo 01 · <i>Sistema Francês</i></p>",
9:"<p>Errado — inverteu a composição. No resumo, a <b>dualidade de jurisdição</b> é assim: <b>“1. A jurisdição administrativa (formada pelos tribunais administrativos); e 2. A jurisdição comum (formada pelos órgãos do Poder Judiciário)”</b>.</p><p>A assertiva trocou as duas de lugar. Administrativa fica com os tribunais administrativos; comum, com o Judiciário.</p><p class='fb-fonte'>Resumo 01 · <i>Sistema Francês</i></p>",
10:"<p>Certo. O resumo registra que, no sistema francês, <b>“existe uma dualidade de jurisdição”</b>, formada pela <b>jurisdição administrativa</b> e pela <b>jurisdição comum</b>.</p><p>Só cuidado com o passo seguinte, que é onde a banca erra de propósito: administrativa = <b>tribunais administrativos</b>; comum = <b>órgãos do Poder Judiciário</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Sistema Francês</i></p>",
11:"<p>Certo pela <b>OBSERVAÇÃO 01</b> do resumo: <b>“o surgimento do contencioso administrativo teve como um dos seus fundamentos o reforço ao princípio da separação dos poderes”</b>.</p><p>A lógica: se o Judiciário não entra nas funções administrativas, cada poder fica no seu campo.</p><p class='fb-fonte'>Resumo 01 · <i>Sistema Francês — Observações</i></p>",
12:"<p>Certo, e é a <b>OBSERVAÇÃO 02</b> que o resumo sinaliza como já cobrada: <b>“a dogmática administrativa se estruturou a partir de premissas teóricas comprometidas com a preservação do princípio da autoridade, e não com a promoção das conquistas liberais e democráticas”</b>.</p><p>O material anota entre parênteses: <b>isso caiu na prova do CESPE TJ PA 2019</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Sistema Francês — Observações</i></p>",
13:"<p>Errado — está invertido. A observação 02 do resumo diz o oposto: comprometidas com a <b>preservação do princípio da AUTORIDADE</b>, e <b>não</b> com a promoção das conquistas liberais e democráticas.</p><p>Fixe pela ordem da frase original: primeiro vem <b>autoridade</b> (o que é), depois vem <b>conquistas liberais e democráticas</b> (o que não é). Essa é a versão que caiu no CESPE TJ PA 2019.</p><p class='fb-fonte'>Resumo 01 · <i>Sistema Francês — Observações</i></p>",
14:"<p>Certo — primeira linha do sistema inglês no resumo: <b>“é aquele em que o Poder Judiciário PODE intervir nas funções administrativas”</b>.</p><p>É a coluna direita do quadro comparativo, a mesma que traz <b>“adotado no Brasil”</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Sistema Inglês</i></p>",
15:"<p>Errado, e não há meio-termo. O resumo: <b>“no sistema de jurisdição única NÃO existe o contencioso administrativo do regime francês”</b>.</p><p>Não é contencioso reduzido nem mitigado: <b>não existe</b>. Daí decorre que qualquer controvérsia administrativa pode ir ao Judiciário.</p><p class='fb-fonte'>Resumo 01 · <i>Sistema Inglês</i></p>",
16:"<p>Certo pela letra do resumo: <b>“o Judiciário é o único competente para proferir decisões com força de coisa julgada”</b>.</p><p>Contraste que fecha o assunto: no <b>sistema francês</b>, quem profere decisão com força de coisa julgada é o <b>tribunal administrativo</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Sistema Inglês</i></p>",
17:"<p>Errado. O resumo não abre exceção: <b>“qualquer controvérsia havida no âmbito administrativo pode ser levada à apreciação do Judiciário”</b>.</p><p>A palavra do material é <b>qualquer</b>. Decisão administrativa definitiva não fecha a porta do Judiciário — isso seria o contencioso administrativo do regime <b>francês</b>, que aqui não existe.</p><p class='fb-fonte'>Resumo 01 · <i>Sistema Inglês</i></p>",
18:"<p>Certo. O resumo abre o tópico exatamente assim: <b>“muitos são os conceitos de Direito Administrativo formulado pelos autores modernos. Contudo, sempre precisaremos ter em mente 4 sentidos”</b> — <b>amplo</b>, <b>estrito</b>, <b>subjetivo/orgânico/formal</b> e <b>objetivo/funcional/material</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito de Direito Administrativo</i></p>",
19:"<p>Errado — essa é a definição do sentido <b>estrito</b>. No resumo, o <b>sentido amplo</b> <b>“compreende as funções administrativas e políticas”</b>; o <b>sentido estrito</b> <b>“compreende apenas as funções administrativas”</b>.</p><p>A palavra que denuncia a troca é <b>apenas</b>: ela pertence ao estrito.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito de Direito Administrativo</i></p>",
20:"<p>Certo, literal: o sentido amplo <b>“compreende as funções administrativas e políticas”</b>.</p><p>Combina com a <b>OBSERVAÇÃO 09</b> do resumo: <b>“a expressão ‘administração pública’, quando tomada em sentido amplo, engloba as funções administrativas e as funções de governo”</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito de Direito Administrativo</i></p>",
21:"<p>Certo pela letra do resumo: o sentido estrito <b>“compreende apenas as funções administrativas”</b>.</p><p>O par de contraste é o sentido <b>amplo</b>, que <b>“compreende as funções administrativas e políticas”</b>. A palavra que separa os dois é <b>apenas</b>: onde ela aparecer, o sentido é o <b>estrito</b>; quando entrarem também as funções políticas (ou, na linguagem da observação 09 do resumo, as <b>funções de governo</b>), o sentido é o <b>amplo</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito de Direito Administrativo</i></p>",
22:"<p>Certo, inclusive nos três nomes. O resumo escreve <b>“sentido subjetivo/orgânico/formal”</b> e diz que ele <b>“compreende os órgãos, entidades e agentes públicos”</b>.</p><p>Atalho para a prova: <b>subjetivo é QUEM</b> — órgãos, entidades, agentes.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito de Direito Administrativo</i></p>",
23:"<p>Errado: os nomes estão certos, o conteúdo é do outro sentido. O <b>objetivo/funcional/material</b> <b>“compreende as atividades em si”</b> — o resumo exemplifica com <b>poder de polícia, fomento e intervenção</b>.</p><p>Órgãos, entidades e agentes públicos são o <b>sentido subjetivo/orgânico/formal</b>. <b>Objetivo é O QUE; subjetivo é QUEM.</b></p><p class='fb-fonte'>Resumo 01 · <i>Conceito de Direito Administrativo</i></p>",
24:"<p>Certo — são os exemplos do próprio resumo para o sentido objetivo: <b>“compreende as atividades em si. Exemplo: poder de polícia, fomento, intervenção”</b>.</p><p>A <b>OBSERVAÇÃO 06</b> reforça: <b>“o exercício do poder de polícia reflete o sentido objetivo da administração pública, o qual se refere à própria atividade administrativa exercida pelo Estado”</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito de Direito Administrativo</i></p>",
25:"<p>Errado no sentido apontado. A <b>OBSERVAÇÃO 01</b> do resumo é expressa: <b>“em sentido SUBJETIVO, administração pública designa os entes que exercem a atividade administrativa”</b>.</p><p>Ente que exerce é <b>quem</b> — logo, subjetivo. Em sentido objetivo entraria a <b>atividade</b>, não o ente.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito — Observações</i></p>",
26:"<p>Certo, é a <b>OBSERVAÇÃO 02</b> palavra por palavra: <b>“sob a perspectiva do critério formal (subjetivo) adotado pelo Brasil, somente é administração pública aquilo determinado como tal pelo ordenamento jurídico brasileiro, independentemente da atividade exercida”</b>.</p><p>Manda o rótulo do ordenamento; a atividade exercida não decide nada.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito — Observações</i></p>",
27:"<p>Errado — virou o critério do avesso. Pela observação 02 do resumo, <b>somente é administração pública aquilo determinado como tal pelo ordenamento jurídico brasileiro</b>, e isso vale <b>independentemente da atividade exercida</b>.</p><p>Ou seja: exercer atividade materialmente administrativa <b>não</b> transforma ninguém em administração pública, se o ordenamento não disser que é.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito — Observações</i></p>",
28:"<p>Certo, e são os três itens da <b>OBSERVAÇÃO 03</b> do resumo sobre o objeto do direito administrativo: <b>“é o estudo da função administrativa; é a atividade jurídica não contenciosa; é o estudo do aparato estatal de execução de políticas públicas”</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito — Observações</i></p>",
29:"<p>Errado por uma partícula. A <b>OBSERVAÇÃO 03</b> do resumo diz que o objeto do direito administrativo <b>“é a atividade jurídica NÃO contenciosa”</b>. Retirar o “não” inverte o item.</p><p>Faz sentido no nosso sistema: aqui vige a <b>jurisdição única</b>, e o resumo já havia registrado que nela <b>não existe o contencioso administrativo do regime francês</b>. Os outros dois itens da mesma observação: <b>estudo da função administrativa</b> e <b>estudo do aparato estatal de execução de políticas públicas</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito — Observações</i></p>",
30:"<p>Certo, é a <b>OBSERVAÇÃO 04</b>: <b>“exprime a força do direito alemão, no direito administrativo pátrio, a forma de aplicação do princípio da segurança jurídica”</b>.</p><p>Fixe o par: <b>alemão → segurança jurídica</b>. Não confunda com o francês, que entra no assunto pelo <b>contencioso administrativo</b> e pela <b>puissance publique</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito — Observações</i></p>",
31:"<p>Errado. A <b>OBSERVAÇÃO 05</b> lista justamente essas interfaces: o direito administrativo <b>“é um ramo do direito proximamente relacionado ao direito constitucional e possui interfaces com os direitos processual, penal, tributário, do trabalho, civil e empresarial”</b>.</p><p>A relação próxima com o constitucional é verdadeira; o erro está em <b>excluir</b> as demais interfaces.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito — Observações</i></p>",
32:"<p>Errado no sentido. A <b>OBSERVAÇÃO 06</b> é direta: <b>“o exercício do poder de polícia reflete o sentido OBJETIVO da administração pública, o qual se refere à própria atividade administrativa exercida pelo Estado”</b>.</p><p>Poder de polícia é <b>atividade</b> — e atividade é sentido objetivo/funcional/material. É um dos três exemplos que o resumo dá para esse sentido, ao lado de <b>fomento</b> e <b>intervenção</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito — Observações</i></p>",
33:"<p>Certo, é a <b>OBSERVAÇÃO 07</b> do resumo, literal: <b>“as funções de governo estão mais próximas ao objeto do direito constitucional, enquanto a função administrativa é objeto do direito administrativo”</b>.</p><p>A observação 08 completa o desenho e é a que a banca inverte: a <b>função de governo</b> <b>estabelece diretrizes políticas</b>; a <b>função administrativa</b> se volta para <b>executar</b> essas diretrizes. Governo aponta o rumo, administração cumpre.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito — Observações</i></p>",
34:"<p>Errado — inverteu quem faz o quê. Pela <b>OBSERVAÇÃO 08</b>: <b>“a função de governo tem como um de seus objetivos estabelecer diretrizes políticas, enquanto a função administrativa se volta para a tarefa de executar essas diretrizes”</b>.</p><p><b>Governo estabelece; administração executa.</b> Na dúvida, lembre que as funções de governo estão mais perto do direito constitucional.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito — Observações</i></p>",
35:"<p>Certo pela <b>OBSERVAÇÃO 09</b>: <b>“a expressão ‘administração pública’, quando tomada em sentido amplo, engloba as funções administrativas e as funções de governo”</b>.</p><p>Casa com a definição do sentido amplo no quadro dos quatro sentidos: <b>funções administrativas e políticas</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito — Observações</i></p>",
36:"<p>Certo. É o item I da <b>QUESTÃO-DEFINIÇÃO</b> que o resumo transcreve (FGV – TJ AM 2013), com gabarito <b>CERTO</b>: <b>“Administração Pública, em sentido formal, relaciona-se à pessoa que executa atividades da administração”</b>.</p><p>Formal é sinônimo de <b>subjetivo/orgânico</b> — e subjetivo é <b>quem</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Questão-definição (FGV – TJ AM 2013)</i></p>",
37:"<p>Errado — essa é a definição do sentido <b>formal</b>. O item II da questão-definição do resumo diz: <b>“Administração Pública, em sentido material, relaciona-se à atividade administrativa desempenhada pelo Estado”</b>.</p><p>Material = <b>atividade</b>; formal = <b>pessoa</b>. A assertiva deu a resposta do item I no lugar do item II.</p><p class='fb-fonte'>Resumo 01 · <i>Questão-definição (FGV – TJ AM 2013)</i></p>",
38:"<p>Certo. É o critério <b>01</b> do quadro <b>“critérios adotados que mais aparecem em provas”</b>: <b>“SERVIÇO PÚBLICO — o direito administrativo são regras de organização e gestão dos serviços públicos”</b>.</p><p>Guarde o par de palavras <b>organização e gestão</b>, porque é por ele que se distingue da <b>puissance publique</b>: a observação 02 do resumo diz que esta última conceitua o direito administrativo pela <b>coerção</b> e pelas <b>prerrogativas inerentes aos atos de império</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Critérios adotados para definir o Direito Administrativo</i></p>",
39:"<p>Certo, com a ressalva que importa. Critério <b>02</b> do quadro: <b>“PUISSANCE PUBLIQUE — o direito administrativo são as prerrogativas presente nos atos de império, mas não nos atos de gestão”</b>.</p><p>A <b>OBSERVAÇÃO 02</b> reforça: essa escola se distingue da do serviço público pela <b>coerção</b> e pelas prerrogativas <b>inerentes aos atos de império</b>, diferenciando-os dos <b>atos de gestão</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Critérios adotados para definir o Direito Administrativo</i></p>",
40:"<p>Certo. Critério <b>03</b> do quadro: <b>“TELEOLÓGICO — o direito administrativo é o conjunto de princípios que regulam a atividade do Estado”</b>.</p><p>Fixe pelo objeto: teleológico → <b>atividade do Estado</b>. O critério da <b>Administração Pública</b> é o que rege a <b>Administração Pública</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Critérios adotados para definir o Direito Administrativo</i></p>",
41:"<p>Errado — é a troca que o resumo avisa que vem. A <b>OBSERVAÇÃO 01</b> dos critérios diz: <b>“as bancas vão misturar as definições do critério teleológico com o critério da Administração Pública”</b>.</p><p>Reger a <b>Administração Pública</b> é o critério <b>04</b>. O <b>teleológico</b> é o conjunto de princípios que <b>regulam a atividade do Estado</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Critérios — Observações</i></p>",
42:"<p>Errado, e é a mesma mistura anunciada pelo resumo, agora na outra direção. O critério <b>04 (ADMINISTRAÇÃO PÚBLICA)</b> é o conjunto de princípios que <b>regem a Administração Pública</b>.</p><p>Regular a <b>atividade do Estado</b> é o critério <b>TELEOLÓGICO</b>. Decore os dois pelo complemento, não pelo nome.</p><p class='fb-fonte'>Resumo 01 · <i>Critérios — Observações</i></p>",
43:"<p>Certo, é a <b>OBSERVAÇÃO 02</b> dos critérios, quase literal: <b>“a escola da puissance publique distingue-se da escola do serviço público por conceituar o direito administrativo pela coerção e pelas prerrogativas inerentes aos atos de império, diferenciando-os dos atos de gestão”</b>.</p><p>As duas palavras-chave da puissance publique: <b>coerção</b> e <b>atos de império</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Critérios — Observações</i></p>",
44:"<p>Certo, e a definição é a do resumo palavra por palavra: a expressão <b>“direito administrativo do espetáculo”</b> é <b>“utilizada para indicar a proliferação de institutos e interpretações vinculados à produção de cenário imaginário destinado a produzir entretenimento dos indivíduos, antes da efetiva implantação de valores fundamentais”</b>.</p><p>O material marca a origem: <b>caiu na prova do CESPE TJ PA 2019</b>. Repare na ordem — o cenário imaginário vem <b>antes</b> dos valores fundamentais.</p><p class='fb-fonte'>Resumo 01 · <i>Critérios — Observações</i></p>",
45:"<p>Certo. É o conceito de abertura do tópico: fontes do direito administrativo <b>“são todos os elementos de onde surgem as normas de direito administrativo”</b>.</p><p>Do conceito o resumo passa direto ao quadro: <b>fonte primária → leis</b>; <b>fontes secundárias → jurisprudência, doutrina e costumes</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Fontes do Direito Administrativo</i></p>",
46:"<p>Errado. No quadro de fontes do resumo, a <b>fonte primária</b> é só uma: as <b>leis</b>. A <b>jurisprudência</b> aparece na linha das <b>fontes secundárias</b>, junto com <b>doutrina</b> e <b>costumes</b>.</p><p>Lembrete útil: as <b>quatro</b> fontes cobradas pela FGV (COMPESA 2014) são <b>lei, doutrina, jurisprudência e costumes</b> — mas só a lei é primária.</p><p class='fb-fonte'>Resumo 01 · <i>Fontes do Direito Administrativo</i></p>",
47:"<p>Certo, é o quadro de fontes do resumo nas suas duas linhas: <b>“Fonte Primária — Leis”</b> e <b>“Fonte Secundária — Jurisprudência, doutrina e costumes”</b>.</p><p>Repare que a divisão é <b>uma contra três</b>: só a <b>lei</b> é primária. É por aí que a banca monta o erro, promovendo a jurisprudência (ou a doutrina, ou os costumes) à condição de fonte primária.</p><p class='fb-fonte'>Resumo 01 · <i>Fontes do Direito Administrativo</i></p>",
48:"<p>Certo. É a <b>QUESTÃO-EXEMPLO</b> que o resumo transcreve (FGV – COMPESA 2014), gabarito <b>CERTO</b> na alternativa <b>“Lei, doutrina, jurisprudência e os costumes”</b>.</p><p>São as mesmas quatro do quadro de fontes, redistribuídas: <b>lei</b> na primária, as outras três na secundária.</p><p class='fb-fonte'>Resumo 01 · <i>Fontes — Questão-exemplo</i></p>",
49:"<p>Errado no terceiro item. A questão-exemplo do resumo (CESPE – SEFAZ RS 2018) tem como gabarito <b>CERTO</b> a alternativa <b>“a Constituição, a lei e os atos normativos da administração pública”</b>.</p><p>Costumes existem como fonte, mas <b>secundária</b> — e não entram nessa lista de principais fontes <b>formais</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Fontes — Questão-exemplo</i></p>",
50:"<p>Errado — trocou os dois rótulos. O resumo traduz o vocabulário do CESPE (ABIN 2018) assim: <b>“fontes inorganizadas = Costumes”</b>, <b>“atividades opinativas = Doutrina”</b> e <b>“atividades interpretativas = Jurisprudências”</b>.</p><p>Inorganizadas são os <b>costumes</b> (não têm forma escrita organizada); opinativas são a <b>doutrina</b> (quem opina).</p><p class='fb-fonte'>Resumo 01 · <i>Fontes — Questão-exemplo</i></p>",
51:"<p>Errado. Pela tradução do resumo, <b>atividades interpretativas = Jurisprudências</b>. <b>Doutrina</b> corresponde às <b>atividades opinativas</b>.</p><p>A dica está no verbo: quem <b>interpreta</b> e aplica é o juiz — jurisprudência; quem <b>opina</b> é o doutrinador. E o que não tem organização escrita, os <b>costumes</b>, são as <b>fontes inorganizadas</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Fontes — Questão-exemplo</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"01", nome:"Origem do Estado, sistemas administrativos e fontes", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
