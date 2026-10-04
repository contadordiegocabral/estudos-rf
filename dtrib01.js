/* Direito Tributário — Módulo 01: Conceito de tributo, espécies e competência (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dtrib01 = (function(){
"use strict";

var CARDS = [
  ["Conceito de tributo — art. 3º do CTN, na letra","Toda <b>prestação pecuniária compulsória</b>, <b>em moeda ou cujo valor nela se possa exprimir</b>, que <b>não constitua sanção de ato ilícito</b>, <b>instituída em lei</b> e <b>cobrada mediante atividade administrativa plenamente vinculada</b>."],
  ["“Prestação pecuniária” — o que significa?","Pagamento <b>em dinheiro</b>. Não se paga tributo com bens (<b>in natura</b>) nem com serviços (<b>in labore</b>)."],
  ["Então nunca se paga tributo com imóvel?","O <b>pagamento</b> é em dinheiro, mas o CTN admite <b>extinguir o crédito</b> por <b>dação em pagamento em bens IMÓVEIS</b> — art. 156, XI, na forma e condições da lei."],
  ["“Em moeda ou cujo valor nela se possa exprimir” — exemplos","<b>Cheque</b>, <b>vale postal</b>, <b>estampilha</b>."],
  ["“Que não constitua sanção de ato ilícito” — a consequência","<b>Tributo é diferente de multa.</b> Multa é punição, sanção — não é tributo."],
  ["“Instituída em lei” — qual lei?","<b>Em regra, lei ordinária.</b> (Há exceções que exigem lei complementar.)"],
  ["“Atividade administrativa plenamente vinculada” — o que quer dizer?","O servidor encarregado de cobrar o tributo <b>deve cobrá-lo</b> — não há juízo de conveniência."],
  ["O que é a natureza jurídica do tributo?","É <b>dizer qual a espécie</b> do tributo. “Tributo” é termo <b>genérico</b> que comporta espécies."],
  ["Natureza jurídica segundo o CTN (art. 4º)","Depende <b>do FATO GERADOR</b>."],
  ["Natureza jurídica segundo o STF","Depende do <b>fato gerador E da DESTINAÇÃO</b>."],
  ["Quantas espécies de tributo pelo CTN (art. 5º)?","<b>Três</b> — teoria <b>tripartite</b>: <b>impostos, taxas e contribuições de melhoria</b>."],
  ["Quantas espécies de tributo pelo STF?","<b>Cinco</b> — teoria <b>pentapartite</b>: impostos, taxas, contribuições de melhoria, <b>empréstimos compulsórios</b> e <b>contribuições especiais</b>."],
  ["Art. 5º do CTN, na letra","“Os tributos são <b>impostos, taxas e contribuições de melhoria</b>.”"],
  ["Como não errar tripartite × pentapartite","<b>CTN = 3</b> (o texto é de 1966, anterior à CF/88). <b>STF = 5</b> (acrescenta empréstimos compulsórios e contribuições especiais, que vieram com a CF)."],
  ["A pegadinha da natureza jurídica","Se a questão citar o <b>CTN</b>, a destinação é <b>irrelevante</b>. Se citar o <b>STF</b>, a <b>destinação conta</b>."],

  ["Conceito de imposto (art. 16 do CTN)","Tributo cuja obrigação tem por fato gerador uma <b>situação INDEPENDENTE de qualquer atividade estatal específica</b> — o contribuinte manifesta <b>riqueza</b>."],
  ["Impostos da UNIÃO — a lista completa","<b>II</b> · <b>IE</b> · <b>IR</b> · <b>IPI</b> · <b>IOF</b> · <b>ITR</b> · <b>IGF</b> · <b>IEG</b> · <b>impostos residuais</b> (art. 154, I, da CF). São <b>nove</b>."],
  ["Impostos dos ESTADOS e do DF","<b>ITCMD</b> (transmissão causa mortis e doação) · <b>IPVA</b> · <b>ICMS</b>. São <b>três</b>."],
  ["Impostos dos MUNICÍPIOS e do DF","<b>IPTU</b> · <b>ISS</b> · <b>ITBI</b> (transmissão inter vivos, por ato oneroso, de bens imóveis). São <b>três</b>."],
  ["Quem pode criar impostos residuais?","<b>Somente a União</b> — são os impostos <b>não especificados</b> pela Constituição."],
  ["Por que o DF aparece duas vezes?","Porque o DF acumula as competências <b>estaduais e municipais</b> — cobra ITCMD, IPVA, ICMS, IPTU, ISS e ITBI."],
  ["Fato gerador das taxas (art. 77 do CTN)","<b>a)</b> o <b>exercício regular do poder de polícia</b> (ex.: taxa de fiscalização); ou <b>b)</b> a <b>utilização, efetiva ou potencial, de serviço público específico e divisível</b>, prestado ao contribuinte ou posto à sua disposição."],
  ["Quem pode cobrar taxas?","<b>União, Estados, DF e Municípios</b> — competência comum."],
  ["Serviço utilizado EFETIVAMENTE × POTENCIALMENTE (art. 79)","<b>Efetivamente:</b> quando <b>por ele usufruído</b> a qualquer título. <b>Potencialmente:</b> quando, sendo de <b>utilização compulsória</b>, seja <b>posto à sua disposição</b>."],
  ["Serviço ESPECÍFICO × DIVISÍVEL (art. 79)","<b>Específico:</b> quando possa ser <b>destacado em unidades autônomas</b>. <b>Divisível:</b> quando <b>suscetível de utilização separadamente</b>."],
  ["Taxa × preço público — o quadro que mais cai","<b>Taxa:</b> é tributo · instituída por <b>lei</b> · <b>compulsória</b> · receita <b>derivada</b> (ex.: taxa de coleta de lixo). <b>Preço público:</b> não é tributo · instituído por <b>contrato</b> · <b>facultativo</b> · receita <b>originária</b> (ex.: tarifa de energia elétrica)."],
  ["Contribuição de melhoria — para que é instituída (art. 81)?","Para fazer face ao <b>custo de obras públicas de que decorra VALORIZAÇÃO IMOBILIÁRIA</b>."],
  ["Qual o fato gerador da contribuição de melhoria?","A <b>VALORIZAÇÃO IMOBILIÁRIA</b> — <b>não</b> a obra pública em si."],
  ["Os dois limites da contribuição de melhoria","<b>Limite total:</b> a <b>despesa realizada</b> pelo ente. <b>Limite individual:</b> o <b>acréscimo de valor</b> que da obra resultar <b>para cada imóvel</b> beneficiado."],
  ["Quem pode cobrar contribuição de melhoria?","<b>União, Estados, DF e Municípios</b>, no âmbito de suas respectivas atribuições."],
  ["Empréstimo compulsório — competência e instrumento","Competência <b>EXCLUSIVA da União</b>, instituído por <b>LEI COMPLEMENTAR</b> (art. 148 da CF)."],
  ["As duas hipóteses do empréstimo compulsório","<b>I —</b> despesas extraordinárias decorrentes de <b>calamidade pública, guerra externa ou sua iminência</b>; <b>II —</b> <b>investimento público de caráter urgente e de relevante interesse nacional</b>, observada a <b>anterioridade anual</b>."],
  ["Qual hipótese do empréstimo compulsório respeita a anterioridade?","Só a do <b>investimento público urgente e de relevante interesse nacional</b>. A de <b>calamidade/guerra</b> é imediata."],
  ["O que é o princípio da anterioridade anual?","É vedado cobrar tributos <b>no mesmo exercício financeiro</b> em que haja sido <b>publicada a lei</b> que os instituiu ou aumentou."],
  ["A destinação do empréstimo compulsório é livre?","<b>Não</b> — a aplicação dos recursos é <b>vinculada à despesa que fundamentou sua instituição</b>."],
  ["Contribuições especiais — qual o critério de identificação?","A <b>FINALIDADE</b> da criação do tributo (art. 149 da CF), com <b>vinculação da receita</b> que deu causa à criação. Foge da teoria do fato gerador."],
  ["As três contribuições exclusivas da União (art. 149)","<b>Sociais</b> · de <b>intervenção no domínio econômico (CIDE)</b> · de <b>interesse das categorias profissionais ou econômicas</b>."],
  ["Qual contribuição especial NÃO é da União?","A <b>COSIP</b> — custeio do serviço de iluminação pública — de <b>Municípios e DF</b> (art. 149-A)."],
  ["Por qual lei se cria contribuição especial?","<b>Lei ordinária.</b>"],
  ["Qual a exceção à competência da União nas contribuições sociais?","Estados, Municípios e DF que adotem <b>regime próprio de previdência</b> podem criar a <b>contribuição para custeio do RPPS</b>, cobrada de <b>ativos, aposentados e pensionistas</b>."],
  ["A contribuição do RPPS pode ser progressiva?","<b>Sim</b> — alíquota progressiva conforme o valor da <b>base de contribuição</b> ou dos <b>proventos</b> de aposentadoria e pensões (art. 149, §1º)."],
  ["Onde se pode cobrar a COSIP?","É <b>facultada</b> a cobrança <b>na fatura de consumo de energia elétrica</b> (art. 149-A, parágrafo único)."],
  ["Contribuições residuais — os três requisitos (art. 195, §4º)","<b>1)</b> <b>lei complementar</b>; <b>2)</b> serem <b>não cumulativas</b>; <b>3)</b> <b>não</b> ter fato gerador ou base de cálculo próprios de <b>outras contribuições</b>."],
  ["Para que servem as contribuições residuais?","Para garantir a <b>manutenção ou expansão da seguridade social</b>."],

  ["Tributo DIRETO × INDIRETO","<b>Direto:</b> quem recolhe é quem <b>sofre o ônus</b> (ex.: <b>IR</b>). <b>Indireto:</b> o ônus é <b>transferido a terceiro</b>, o <b>contribuinte de fato</b> (ex.: <b>ICMS, IPI, ISS</b>)."],
  ["Tributo VINCULADO × NÃO VINCULADO (quanto ao fato gerador)","<b>Vinculado:</b> ligado a uma <b>atividade do poder público</b> (ex.: <b>taxa</b>). <b>Não vinculado:</b> independe dela (ex.: <b>imposto</b>)."],
  ["Cuidado: “vinculado” tem dois sentidos","Quanto ao <b>fato gerador</b>, vinculado = há atividade estatal. Quanto à <b>arrecadação</b>, vinculado = a receita tem destinação amarrada. A banca troca um pelo outro."],
  ["Tributo FISCAL","Finalidade de <b>arrecadar</b> para pagar as contas do governo. Ex.: <b>IR, ICMS, ISS</b>."],
  ["Tributo EXTRAFISCAL","Finalidade de <b>interferir numa situação social ou na economia</b>. Ex.: <b>II, IE, IPI, IOF, CIDE</b>."],
  ["Tributo PARAFISCAL","Finalidade de <b>destinar os recursos a sujeito ativo diferente daquele que expediu a lei</b>. Ex.: contribuições das autarquias que fiscalizam profissões (<b>CRM</b>, CRC)."],
  ["Imposto PROPORCIONAL","A <b>alíquota é fixa</b> e a base de cálculo varia — o valor pago é <b>proporcional à BC</b>. Ex.: 10% sobre 10.000 = 1.000; 10% sobre 2.000 = 200."],
  ["Imposto PROGRESSIVO","A <b>alíquota varia para mais</b> conforme a base de cálculo — quem tem <b>mais renda paga proporcionalmente mais</b>. Ex.: IR de 7,5% sobre 2.000 e 27,5% sobre 10.000."],
  ["Imposto REGRESSIVO","O <b>imposto é fixo</b>, mas a alíquota <b>em relação à renda</b> não — tributa <b>mais agudamente as classes mais pobres</b>."],
  ["Exemplo numérico do imposto regressivo","R$ 400 de ICMS num celular: para quem ganha R$ 2.000 são <b>20% da renda</b>; para quem ganha R$ 10.000 são <b>4%</b>."],
  ["Quais tributos são regressivos?","Os <b>impostos indiretos</b> — <b>ICMS, ISS, IPI</b>."],
  ["Receita ORIGINÁRIA","Auferida com base na exploração do <b>patrimônio do ESTADO</b> — aluguéis, estatais (empresas públicas e sociedades de economia mista), <b>tarifas/preço público</b>. O Estado <b>não usa o poder de império</b>."],
  ["Receita DERIVADA","Auferida com base na exploração do <b>patrimônio do PARTICULAR</b>, entrando nos cofres por <b>coação ao indivíduo</b>. São os <b>tributos</b>."],
  ["Todos os cinco tributos são receita derivada?","<b>Sim</b> — impostos, taxas, contribuições de melhoria, empréstimos compulsórios e contribuições especiais."],

  ["O que é competência tributária?","A <b>atribuição dada pela Constituição</b> aos entes políticos para <b>INSTITUIR</b> tributos — a <b>aptidão para criar</b>."],
  ["A competência tributária pode ser delegada?","<b>NÃO</b> — é <b>indelegável</b> (art. 7º do CTN)."],
  ["O que é capacidade tributária ativa?","A capacidade de <b>arrecadar e fiscalizar</b> tributos, ou de <b>executar leis, serviços, atos ou decisões administrativas</b> em matéria tributária."],
  ["A capacidade tributária ativa pode ser delegada?","<b>SIM</b> — conferida por <b>uma pessoa jurídica de direito público a outra</b> (art. 7º do CTN)."],
  ["Competência × capacidade — a frase que resolve a questão","<b>Instituir não se delega; arrecadar e fiscalizar se delegam.</b>"],
  ["A ressalva do art. 7º do CTN, na letra","A competência tributária é <b>indelegável</b>, <b>salvo</b> atribuição das funções de <b>arrecadar ou fiscalizar</b> tributos, ou de <b>executar leis, serviços, atos ou decisões administrativas</b> em matéria tributária, conferida por uma pessoa jurídica de direito público a outra."],
  ["Qual a exceção à regra de delegar só a pessoa de direito público?","A <b>Súmula 396 do STJ</b>: a <b>Confederação Nacional da Agricultura</b> — pessoa jurídica de <b>direito PRIVADO</b> — tem legitimidade ativa para cobrar a <b>contribuição sindical rural</b>."]
];

var QS = [
  ["Tributo é toda prestação pecuniária compulsória, em moeda ou cujo valor nela se possa exprimir, que não constitua sanção de ato ilícito, instituída em lei e cobrada mediante atividade administrativa plenamente vinculada.","C","FGV","Art. 3º do CTN, literal."],
  ["O tributo pode ser pago em bens in natura ou em serviços in labore.","E","CEBRASPE","A prestação é <b>pecuniária</b> — em dinheiro."],
  ["O CTN admite a extinção do crédito tributário por dação em pagamento em bens imóveis.","C","FCC","Art. 156, XI, na forma e condições da lei."],
  ["A dação em pagamento em bens móveis extingue o crédito tributário na forma do CTN.","E","FGV","O CTN prevê apenas bens <b>imóveis</b>."],
  ["Cheque, vale postal e estampilha são exemplos de valor que se pode exprimir em moeda.","C","VUNESP","Parte do conceito do art. 3º."],
  ["A multa tributária é espécie de tributo, por ser prestação pecuniária compulsória instituída em lei.","E","CEBRASPE","O tributo <b>não constitui sanção de ato ilícito</b>; a multa é sanção."],
  ["A cobrança do tributo se dá mediante atividade administrativa plenamente vinculada, sem juízo de conveniência do servidor.","C","FGV","Parte final do art. 3º."],
  ["Segundo o CTN, a natureza jurídica específica do tributo é determinada pelo fato gerador da respectiva obrigação.","C","FCC","Art. 4º do CTN."],
  ["Segundo o STF, a natureza jurídica do tributo depende do fato gerador e também da destinação da arrecadação.","C","FGV","Base da teoria pentapartite."],
  ["Nos termos do art. 5º do CTN, os tributos são impostos, taxas, contribuições de melhoria e contribuições especiais.","E","VUNESP","O art. 5º traz apenas <b>três</b> espécies; as contribuições especiais vieram com a CF/88."],
  ["A teoria pentapartite, adotada pelo STF, acrescenta às espécies do CTN os empréstimos compulsórios e as contribuições especiais.","C","CEBRASPE","Cinco espécies."],
  ["Imposto é o tributo cuja obrigação tem por fato gerador uma situação independente de qualquer atividade estatal específica relativa ao contribuinte.","C","FGV","Art. 16 do CTN."],
  ["Os impostos residuais podem ser criados pela União, pelos Estados e pelo Distrito Federal.","E","FCC","<b>Somente a União</b> — art. 154, I, da CF."],
  ["II, IE, IR, IPI, IOF, ITR, IGF e IEG são impostos de competência da União.","C","FGV","Oito nominados, mais os residuais."],
  ["O ITCMD, o IPVA e o ICMS são impostos de competência dos Estados e do Distrito Federal.","C","VUNESP","Três impostos estaduais."],
  ["O IPTU, o ISS e o ITBI são impostos de competência dos Municípios e do Distrito Federal.","C","CEBRASPE","O DF acumula as competências municipais."],
  ["O ITR é imposto de competência dos Municípios.","E","FGV","É imposto <b>da União</b>, ainda que sua fiscalização possa ser delegada."],
  ["As taxas podem ser cobradas pela União, pelos Estados, pelo Distrito Federal e pelos Municípios.","C","FCC","Art. 77 do CTN — competência comum."],
  ["São fatos geradores das taxas o exercício regular do poder de polícia e a utilização, efetiva ou potencial, de serviço público específico e divisível.","C","FGV","Art. 77 do CTN."],
  ["A taxa só pode ser cobrada quando o serviço público for efetivamente utilizado pelo contribuinte.","E","VUNESP","Admite-se a utilização <b>potencial</b>, quando o serviço é de utilização compulsória e posto à disposição."],
  ["Considera-se específico o serviço público que possa ser destacado em unidades autônomas de intervenção, de utilidade ou de necessidade públicas.","C","CEBRASPE","Art. 79 do CTN."],
  ["Considera-se divisível o serviço público suscetível de utilização separadamente por parte de cada usuário.","C","FCC","Art. 79 do CTN."],
  ["A taxa é instituída por contrato e tem caráter facultativo.","E","FGV","Isso descreve o <b>preço público</b>; a taxa é instituída por <b>lei</b> e é compulsória."],
  ["A taxa é classificada como receita derivada e o preço público, como receita originária.","C","VUNESP","Distinção clássica."],
  ["A tarifa de energia elétrica é exemplo de taxa.","E","CEBRASPE","É <b>preço público</b> — não é tributo."],
  ["A contribuição de melhoria é instituída para fazer face ao custo de obras públicas de que decorra valorização imobiliária.","C","FGV","Art. 81 do CTN."],
  ["O fato gerador da contribuição de melhoria é a realização da obra pública.","E","FCC","O fato gerador é a <b>valorização imobiliária</b> decorrente da obra."],
  ["A contribuição de melhoria tem como limite total a despesa realizada e como limite individual o acréscimo de valor que da obra resultar para cada imóvel beneficiado.","C","FGV","Os dois limites do art. 81."],
  ["Os empréstimos compulsórios são de competência exclusiva da União e instituídos por lei complementar.","C","VUNESP","Art. 148 da CF."],
  ["Os empréstimos compulsórios podem ser instituídos por medida provisória em caso de calamidade pública.","E","CEBRASPE","Exigem <b>lei complementar</b>, e matéria de LC não pode ser tratada por MP."],
  ["O empréstimo compulsório para atender a despesas extraordinárias decorrentes de calamidade pública ou guerra externa deve observar a anterioridade anual.","E","FGV","A anterioridade só alcança o do <b>investimento público urgente</b>."],
  ["A aplicação dos recursos provenientes de empréstimo compulsório é vinculada à despesa que fundamentou sua instituição.","C","FCC","Art. 148, parágrafo único, da CF."],
  ["Pelo princípio da anterioridade anual, é vedado cobrar tributos no mesmo exercício financeiro em que haja sido publicada a lei que os instituiu ou aumentou.","C","VUNESP","Conceito."],
  ["O critério de identificação das contribuições especiais é a finalidade da sua criação.","C","FGV","Art. 149 da CF — foge da teoria do fato gerador."],
  ["Compete exclusivamente à União instituir contribuições sociais, de intervenção no domínio econômico e de interesse das categorias profissionais ou econômicas.","C","CEBRASPE","Art. 149 da CF."],
  ["A contribuição para o custeio do serviço de iluminação pública é de competência da União.","E","FCC","É dos <b>Municípios e do DF</b> — art. 149-A."],
  ["É facultada a cobrança da COSIP na fatura de consumo de energia elétrica.","C","FGV","Art. 149-A, parágrafo único."],
  ["Estados, Municípios e o DF que adotem regime próprio de previdência podem instituir contribuição para o custeio do RPPS, cobrada de ativos, aposentados e pensionistas.","C","VUNESP","Exceção à competência da União."],
  ["A contribuição para custeio do RPPS não admite alíquota progressiva.","E","CEBRASPE","Admite progressividade conforme a base de contribuição ou os proventos — art. 149, §1º."],
  ["As contribuições especiais são criadas, em regra, por lei complementar.","E","FGV","Por <b>lei ordinária</b>."],
  ["As contribuições residuais da seguridade social exigem lei complementar, devem ser não cumulativas e não podem ter fato gerador ou base de cálculo próprios de outras contribuições.","C","FCC","Art. 195, §4º, da CF."],
  ["No tributo direto, a pessoa obrigada ao recolhimento é a que sofre o ônus do tributo.","C","FGV","Exemplo clássico: o imposto de renda."],
  ["O ICMS, o IPI e o ISS são exemplos de tributos diretos.","E","VUNESP","São tributos <b>indiretos</b> — o ônus é transferido ao contribuinte de fato."],
  ["Quanto ao fato gerador, a taxa é tributo vinculado e o imposto, não vinculado.","C","CEBRASPE","A taxa decorre de atividade estatal."],
  ["São exemplos de tributos extrafiscais o II, o IE, o IPI, o IOF e a CIDE.","C","FGV","Finalidade de intervir na economia."],
  ["Tributo parafiscal é aquele cuja finalidade é arrecadar para pagar as contas correntes do governo.","E","FCC","Essa é a finalidade <b>fiscal</b>; o parafiscal destina a receita a sujeito ativo diverso do que editou a lei."],
  ["As contribuições cobradas pelos conselhos que fiscalizam atividades profissionais são exemplo de tributo parafiscal.","C","FGV","Ex.: CRM, CRC."],
  ["No imposto proporcional a alíquota é fixa e o valor devido varia conforme a base de cálculo.","C","VUNESP","Ex.: 10% sobre 10.000 e sobre 2.000."],
  ["No imposto progressivo a alíquota varia para mais conforme a base de cálculo.","C","CEBRASPE","Ex.: faixas do imposto de renda."],
  ["Os impostos indiretos são considerados regressivos porque tributam mais agudamente as classes de menor renda.","C","FGV","O imposto é fixo; o peso sobre a renda não."],
  ["R$ 400 de ICMS sobre um celular representam 20% da renda de quem ganha R$ 2.000 e 4% da renda de quem ganha R$ 10.000.","C","FCC","Demonstração da regressividade."],
  ["As receitas originárias decorrem da exploração do patrimônio do Estado, sem que ele se revista do poder de império.","C","FGV","Aluguéis, estatais, tarifas."],
  ["As receitas derivadas decorrem da exploração do patrimônio do particular e ingressam por coação ao indivíduo.","C","VUNESP","São os tributos."],
  ["A receita proveniente de contrato de aluguel de imóvel do Estado é receita derivada.","E","CEBRASPE","É receita <b>originária</b>."],
  ["Competência tributária é a atribuição dada pela Constituição Federal aos entes políticos para instituir tributos.","C","FGV","Aptidão para criar."],
  ["A competência tributária é delegável de uma pessoa jurídica de direito público a outra.","E","FCC","É <b>indelegável</b>; delegam-se apenas arrecadação e fiscalização."],
  ["A capacidade tributária ativa compreende as funções de arrecadar e fiscalizar tributos e de executar leis, serviços, atos ou decisões administrativas em matéria tributária.","C","FGV","Art. 7º do CTN."],
  ["Segundo a Súmula 396 do STJ, a Confederação Nacional da Agricultura tem legitimidade ativa para a cobrança da contribuição sindical rural.","C","VUNESP","Exceção: pessoa jurídica de direito privado recebendo capacidade tributária ativa."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("O conceito de tributo e as espécies",
      '<div class="box"><span class="bl">Art. 3º do CTN — decore por partes</span>'+
      '<p class="mn"><em>Tributo é toda prestação <b>pecuniária compulsória</b>, em <b>moeda ou cujo valor nela se possa exprimir</b>, que <b>não constitua sanção de ato ilícito</b>, <b>instituída em lei</b> e cobrada mediante <b>atividade administrativa plenamente vinculada</b>.</em></p>'+
      '<ul><li><b>Pecuniária</b> → em dinheiro. Não se paga com bens (<b>in natura</b>) nem serviços (<b>in labore</b>).</li>'+
      '<li><b>Compulsória</b> → obrigatória.</li>'+
      '<li><b>Em moeda ou valor que nela se exprima</b> → cheque, vale postal, estampilha.</li>'+
      '<li><b>Não sanção de ato ilícito</b> → <b>tributo ≠ multa</b>.</li>'+
      '<li><b>Instituída em lei</b> → em regra, <b>lei ordinária</b>.</li>'+
      '<li><b>Atividade plenamente vinculada</b> → o servidor <b>deve</b> cobrar.</li></ul></div>'+
      '<div class="box trap"><span class="bl">A ressalva do imóvel</span>'+
      '<p>O <b>pagamento</b> é em dinheiro, mas o crédito pode ser <b>extinto por dação em pagamento em bens IMÓVEIS</b> (art. 156, XI). <b>Móveis, não.</b></p></div>'+
      '<div class="box"><span class="bl">Natureza jurídica = qual espécie</span>'+
      '<p><b>CTN (art. 4º):</b> depende do <b>FATO GERADOR</b>.<br><b>STF:</b> depende do <b>fato gerador E da DESTINAÇÃO</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Tripartite × pentapartite</span>'+
      '<p><b>CTN, art. 5º — TRÊS:</b> impostos · taxas · contribuições de melhoria.</p>'+
      '<p><b>STF — CINCO:</b> as três acima <b>+ empréstimos compulsórios + contribuições especiais</b>.</p>'+
      '<p class="mn"><em>O CTN é de 1966; as duas espécies novas vieram com a CF/88. Daí a diferença.</em></p></div>')
  ],
  V2:[
    sl("As cinco espécies, uma a uma",
      '<div class="box"><span class="bl">IMPOSTOS (art. 16)</span>'+
      '<p>Fato gerador é uma situação <b>INDEPENDENTE de qualquer atividade estatal</b> — o contribuinte manifesta <b>riqueza</b>.</p>'+
      '<p><b>União (9):</b> II · IE · IR · IPI · IOF · ITR · IGF · IEG · <b>residuais</b>.<br>'+
      '<b>Estados e DF (3):</b> ITCMD · IPVA · ICMS.<br>'+
      '<b>Municípios e DF (3):</b> IPTU · ISS · ITBI.</p>'+
      '<p>Só a <b>União</b> cria <b>impostos residuais</b>. O <b>DF</b> aparece duas vezes porque acumula competências estadual e municipal.</p></div>'+
      '<div class="box"><span class="bl">TAXAS (arts. 77 e 79)</span>'+
      '<p>Cobradas por <b>todos os entes</b>. Dois fatos geradores: <b>exercício regular do poder de polícia</b>; ou <b>utilização, efetiva ou potencial, de serviço público específico e divisível</b>.</p>'+
      '<p><b>Efetiva</b> = usufruída. <b>Potencial</b> = de utilização <b>compulsória</b> e posta à disposição.<br>'+
      '<b>Específico</b> = destacável em <b>unidades autônomas</b>. <b>Divisível</b> = utilizável <b>separadamente</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Taxa × preço público</span>'+
      '<ul><li><b>Taxa:</b> é tributo · <b>lei</b> · <b>compulsória</b> · receita <b>DERIVADA</b> · ex.: coleta de lixo.</li>'+
      '<li><b>Preço público:</b> não é tributo · <b>contrato</b> · <b>facultativo</b> · receita <b>ORIGINÁRIA</b> · ex.: tarifa de energia.</li></ul></div>'+
      '<div class="box"><span class="bl">CONTRIBUIÇÃO DE MELHORIA (art. 81)</span>'+
      '<p>Custeia <b>obra pública de que decorra VALORIZAÇÃO IMOBILIÁRIA</b>. O <b>fato gerador é a valorização</b>, não a obra.</p>'+
      '<p><b>Limite total</b> = despesa realizada. <b>Limite individual</b> = acréscimo de valor para <b>cada imóvel</b>.</p></div>'+
      '<div class="box"><span class="bl">EMPRÉSTIMOS COMPULSÓRIOS (art. 148)</span>'+
      '<p><b>Só a União</b>, por <b>LEI COMPLEMENTAR</b>. Duas hipóteses: <b>calamidade pública / guerra externa ou sua iminência</b> (imediato); ou <b>investimento público urgente e de relevante interesse nacional</b> (<b>respeita a anterioridade anual</b>). A aplicação é <b>vinculada à despesa</b> que o fundamentou.</p></div>'+
      '<div class="box"><span class="bl">CONTRIBUIÇÕES ESPECIAIS (art. 149)</span>'+
      '<p>Identificam-se pela <b>FINALIDADE</b>, com <b>receita vinculada</b>. Criadas por <b>lei ordinária</b>.</p>'+
      '<ul><li><b>União, exclusivamente:</b> <b>sociais</b>, <b>CIDE</b>, <b>interesse das categorias profissionais ou econômicas</b>.</li>'+
      '<li><b>Municípios e DF:</b> <b>COSIP</b> (art. 149-A), cobrável na <b>fatura de energia</b>.</li>'+
      '<li><b>Exceção:</b> entes com <b>RPPS</b> instituem a contribuição de seus <b>ativos, aposentados e pensionistas</b>, que <b>pode ser progressiva</b>.</li></ul>'+
      '<p><b>Residuais</b> (art. 195, §4º): <b>lei complementar</b> + <b>não cumulativas</b> + <b>sem FG ou BC de outras contribuições</b>.</p></div>')
  ],
  V3:[
    sl("Classificações doutrinárias",
      '<div class="box"><span class="bl">Quanto à transferência do encargo</span>'+
      '<p><b>DIRETO:</b> quem recolhe <b>sofre o ônus</b> — <b>IR</b>. <b>INDIRETO:</b> o ônus vai ao <b>contribuinte de fato</b> — <b>ICMS, IPI, ISS</b>.</p></div>'+
      '<div class="box"><span class="bl">Quanto ao fato gerador</span>'+
      '<p><b>VINCULADO:</b> há atividade estatal — <b>taxa</b>. <b>NÃO VINCULADO:</b> não há — <b>imposto</b>.</p></div>'+
      '<div class="box trap"><span class="bl">A palavra “vinculado” tem dois sentidos</span>'+
      '<p>Quanto ao <b>FATO GERADOR</b>: vinculado = existe contraprestação estatal.<br>'+
      'Quanto à <b>ARRECADAÇÃO</b>: vinculado = a receita tem destinação amarrada.<br>'+
      'Um imposto é <b>não vinculado</b> quanto ao FG, mas pode ter arrecadação vinculada. A banca aposta nessa confusão.</p></div>'+
      '<div class="box"><span class="bl">Quanto à finalidade</span>'+
      '<ul><li><b>FISCAL</b> — arrecadar: <b>IR, ICMS, ISS</b>.</li>'+
      '<li><b>EXTRAFISCAL</b> — intervir na economia ou no social: <b>II, IE, IPI, IOF, CIDE</b>.</li>'+
      '<li><b>PARAFISCAL</b> — destinar a <b>sujeito ativo diverso</b> de quem editou a lei: contribuições dos conselhos profissionais (<b>CRM, CRC</b>).</li></ul></div>'+
      '<div class="box"><span class="bl">Proporcional, progressivo e regressivo</span>'+
      '<p><b>Proporcional:</b> <b>alíquota fixa</b>, BC variável → 10% de 10.000 = 1.000; 10% de 2.000 = 200.<br>'+
      '<b>Progressivo:</b> <b>alíquota cresce</b> com a BC → IR de 7,5% e de 27,5%.<br>'+
      '<b>Regressivo:</b> o <b>imposto é fixo</b>, mas o peso <b>sobre a renda</b> cai conforme a renda sobe → R$ 400 de ICMS são <b>20%</b> de uma renda de 2.000 e <b>4%</b> de uma de 10.000. Os <b>indiretos</b> (ICMS, ISS, IPI) são regressivos.</p></div>'+
      '<div class="box tip"><span class="bl">Receita originária × derivada</span>'+
      '<p><b>ORIGINÁRIA:</b> exploração do patrimônio <b>DO ESTADO</b> — aluguéis, estatais, <b>tarifas</b>. O Estado <b>não usa o poder de império</b>.</p>'+
      '<p><b>DERIVADA:</b> exploração do patrimônio <b>DO PARTICULAR</b>, por <b>coação</b> — são <b>todos os tributos</b>.</p></div>')
  ],
  V4:[
    sl("Competência tributária × capacidade tributária ativa",
      '<div class="box"><span class="bl">Competência tributária</span>'+
      '<p>Atribuição dada pela <b>Constituição</b> aos entes políticos para <b>INSTITUIR</b> tributos — a <b>aptidão para criar</b>.</p></div>'+
      '<div class="box"><span class="bl">Capacidade tributária ativa</span>'+
      '<p>Capacidade de <b>ARRECADAR e FISCALIZAR</b>, ou de <b>executar leis, serviços, atos ou decisões administrativas</b> em matéria tributária.</p></div>'+
      '<div class="box trap"><span class="bl">Art. 7º do CTN — a regra e a ressalva</span>'+
      '<p>A competência tributária é <b>INDELEGÁVEL</b>, <b>salvo</b> a atribuição das funções de <b>arrecadar ou fiscalizar</b> tributos, ou de executar leis, serviços, atos ou decisões administrativas, conferida <b>por uma pessoa jurídica de direito público a outra</b>.</p>'+
      '<p class="mn"><em>Instituir não se delega. Arrecadar e fiscalizar se delegam.</em></p></div>'+
      '<div class="box tip"><span class="bl">A exceção que já caiu</span>'+
      '<p><b>Súmula 396 do STJ:</b> a <b>Confederação Nacional da Agricultura</b> tem legitimidade ativa para a cobrança da <b>contribuição sindical rural</b>. Ou seja: uma pessoa jurídica de <b>direito PRIVADO</b> recebendo capacidade tributária ativa.</p></div>')
  ],
  V5:[
    sl("A reforma tributária no mapa das espécies",
      '<div class="box trap"><span class="bl">Fora do resumo 01</span>'+
      '<p>Este tópico <b>não está</b> no resumo do Radegondes, que é anterior à reforma. Ele foi acrescentado porque a EC 132/2023 mexe no quadro de impostos que você acabou de decorar — confira no material atualizado antes de dar por fechado.</p></div>'+
      '<div class="box"><span class="bl">EC 132/2023 — o que ela criou</span>'+
      '<p>A emenda não revogou o art. 3º nem o art. 5º do CTN. Ela <b>acrescentou tributos</b> ao desenho constitucional e vai <b>extinguir</b> cinco dos antigos.</p>'+
      '<ul>'+
      '<li><b>IBS</b> — Imposto sobre Bens e Serviços (art. 156-A). Competência <b>compartilhada</b> entre Estados, DF e Municípios. Substitui <b>ICMS + ISS</b>.</li>'+
      '<li><b>CBS</b> — Contribuição sobre Bens e Serviços (art. 195, V). Competência da <b>União</b>. Substitui <b>PIS + Cofins</b>.</li>'+
      '<li><b>IS</b> — Imposto Seletivo (art. 153, VIII). Competência da <b>União</b>, sobre bens e serviços <b>prejudiciais à saúde ou ao meio ambiente</b>. Extrafiscal puro.</li>'+
      '</ul></div>'+
      '<div class="box trap"><span class="bl">A pegadinha da espécie</span>'+
      '<p>Mesmo incidindo sobre a mesma coisa, <b>IBS é IMPOSTO</b> e <b>CBS é CONTRIBUIÇÃO</b>. É o exemplo perfeito do art. 4º do CTN não bastar: o que separa as duas é a <b>competência</b> e a <b>destinação</b>, não o fato gerador.</p>'+
      '<p>O <b>IBS é o único imposto de competência compartilhada</b> da Constituição, gerido pelo <b>Comitê Gestor</b>. Isso quebra a regra de que cada imposto pertence a um ente.</p></div>'+
      '<div class="box tip"><span class="bl">O que NÃO mudou</span>'+
      '<p>O conceito de tributo (art. 3º), as cinco espécies, a diferença entre competência e capacidade (art. 7º) e as classificações doutrinárias seguem <b>iguais</b>. A reforma mexe no <b>quadro de impostos</b>, não na teoria geral.</p></div>'),
    sl("O calendário da transição — e onde estamos",
      '<div class="box"><span class="bl">Ano a ano</span>'+
      '<ul>'+
      '<li><b>2026</b> — fase de <b>teste</b>: IBS a <b>0,1%</b> e CBS a <b>0,9%</b>, compensáveis com PIS/Cofins. Quem cumpre as obrigações acessórias fica dispensado do recolhimento.</li>'+
      '<li><b>2027</b> — <b>PIS e Cofins são extintos</b>; a CBS passa a ser cobrada de fato; entra o <b>Imposto Seletivo</b>; o <b>IPI vai a zero</b>, salvo para a Zona Franca de Manaus.</li>'+
      '<li><b>2029 a 2032</b> — ICMS e ISS caem <b>10% ao ano</b> e o IBS sobe na mesma medida.</li>'+
      '<li><b>2033</b> — ICMS e ISS <b>extintos</b>; o sistema novo em regime pleno.</li>'+
      '</ul></div>'+
      '<div class="box trap"><span class="bl">Cuidado com a data da prova</span>'+
      '<p>Em <b>2026</b>, ICMS, ISS, PIS, Cofins e IPI <b>continuam existindo e sendo cobrados</b>. Uma questão que disser que o ICMS já foi extinto está <b>errada</b>.</p>'+
      '<p>A regulamentação veio pela <b>LC 214/2025</b> — é a lei que a banca cita quando quer detalhe de IBS/CBS.</p></div>'+
      '<div class="box tip"><span class="bl">Três marcas do modelo novo</span>'+
      '<p><b>Não cumulatividade plena</b> (crédito de tudo que for adquirido) · <b>cobrança no destino</b> (a receita fica onde está o consumidor) · <b>base ampla</b> sobre bens e serviços, no lugar de cinco tributos com regras distintas.</p></div>')
  ]
};

var EX = {
S1:{t:"wordbank", instr:"Monte o conceito de tributo do art. 3º do CTN",
  target:["prestação","pecuniária","compulsória","que","não","constitua","sanção","de","ato","ilícito","instituída","em","lei"],
  extra:["facultativa","in natura","sanção de ato ilícito"],
  why:"Cobrada mediante atividade administrativa plenamente vinculada."},

S2:{t:"multi", instr:"Marque o que integra o conceito de tributo do art. 3º",
  options:["Prestação pecuniária compulsória","Em moeda ou cujo valor nela se possa exprimir",
           "Que não constitua sanção de ato ilícito","Instituída em lei",
           "Cobrada mediante atividade administrativa plenamente vinculada",
           "Cobrada mediante atividade administrativa discricionária",
           "Que possa ser paga em bens ou serviços"],
  answers:[0,1,2,3,4],
  why:"As duas últimas invertem o conceito."},

S3:{t:"sort", instr:"O crédito tributário pode ser extinto por dação em pagamento de quais bens?",
  buckets:["Sim, o CTN prevê","Não previsto"],
  items:[["Bens imóveis",0],["Bens móveis",1],["Prestação de serviços",1]],
  why:"Art. 156, XI, na forma e condições estabelecidas em lei."},

S4:{t:"match", instr:"Ligue cada fonte ao critério da natureza jurídica do tributo",
  pairs:[["CTN, art. 4º","Depende do fato gerador"],
         ["STF","Depende do fato gerador e da destinação"]],
  why:"É o que sustenta a teoria pentapartite."},

S5:{t:"sort", instr:"A espécie consta do art. 5º do CTN ou só da teoria do STF?",
  buckets:["Art. 5º do CTN (tripartite)","Acrescentada pelo STF (pentapartite)"],
  items:[["Impostos",0],["Taxas",0],["Contribuições de melhoria",0],
         ["Empréstimos compulsórios",1],["Contribuições especiais",1]],
  why:"O CTN é de 1966; as duas últimas vieram com a CF/88."},

S6:{t:"gap", instr:"Complete o conceito de imposto do art. 16",
  before:"Imposto é o tributo cuja obrigação tem por fato gerador uma situação ",
  after:" de qualquer atividade estatal específica.",
  options:["independente","dependente","vinculada"], answer:0,
  why:"Por isso o imposto é tributo não vinculado quanto ao fato gerador."},

S7:{t:"sort", instr:"De quem é a competência para instituir cada imposto?",
  buckets:["União","Estados e DF","Municípios e DF"],
  items:[["II e IE",0],["IR",0],["IPI",0],["IOF",0],["ITR",0],["IGF",0],
         ["ITCMD",1],["IPVA",1],["ICMS",1],
         ["IPTU",2],["ISS",2],["ITBI",2]],
  why:"O DF aparece nos dois últimos porque acumula competências estadual e municipal."},

S8:{t:"mc", instr:"Quem pode instituir impostos residuais?",
  options:["Somente a União","A União e os Estados",
           "Todos os entes federativos","Somente os Estados e o DF"],
  answer:0,
  why:"Art. 154, I, da CF — impostos não especificados pela Constituição."},

S9:{t:"multi", instr:"Marque os fatos geradores possíveis de uma taxa",
  options:["O exercício regular do poder de polícia",
           "A utilização efetiva de serviço público específico e divisível",
           "A utilização potencial de serviço público de utilização compulsória posto à disposição",
           "A valorização de imóvel decorrente de obra pública",
           "A manifestação de riqueza pelo contribuinte"],
  answers:[0,1,2],
  why:"A quarta é da contribuição de melhoria; a quinta, do imposto."},

S10:{t:"match", instr:"Ligue cada atributo do serviço público à sua definição (art. 79)",
  pairs:[["Utilizado efetivamente","Quando por ele usufruído a qualquer título"],
         ["Utilizado potencialmente","Quando, sendo de utilização compulsória, seja posto à sua disposição"],
         ["Específico","Quando possa ser destacado em unidades autônomas"],
         ["Divisível","Quando suscetível de utilização separadamente"]],
  why:"Quatro definições literais do CTN."},

S11:{t:"sort", instr:"Classifique cada característica",
  buckets:["Taxa","Preço público"],
  items:[["É tributo",0],["Instituída por lei",0],["Caráter compulsório",0],
         ["Receita derivada",0],["Taxa de coleta de lixo",0],
         ["Não é tributo",1],["Instituído por contrato",1],["Caráter facultativo",1],
         ["Receita originária",1],["Tarifa de energia elétrica",1]],
  why:"Quadro comparativo que a banca adora inverter."},

S12:{t:"mc", instr:"Qual o fato gerador da contribuição de melhoria?",
  options:["A valorização imobiliária decorrente da obra pública",
           "A realização da obra pública em si",
           "O custo total da obra","O exercício do poder de polícia"],
  answer:0,
  why:"Sem valorização não há fato gerador, ainda que a obra tenha sido feita."},

S13:{t:"match", instr:"Ligue cada limite da contribuição de melhoria",
  pairs:[["Limite total","A despesa realizada pelo ente"],
         ["Limite individual","O acréscimo de valor que da obra resultar para cada imóvel beneficiado"]],
  why:"Art. 81 do CTN."},

S14:{t:"multi", instr:"Marque o que é correto sobre os empréstimos compulsórios",
  options:["Competência exclusiva da União","Instituídos por lei complementar",
           "Cabíveis em caso de calamidade pública ou guerra externa e sua iminência",
           "Cabíveis para investimento público urgente e de relevante interesse nacional",
           "Aplicação dos recursos vinculada à despesa que fundamentou a instituição",
           "Podem ser instituídos por medida provisória"],
  answers:[0,1,2,3,4],
  why:"Matéria de lei complementar não pode ser tratada por medida provisória."},

S15:{t:"sort", instr:"A hipótese de empréstimo compulsório respeita a anterioridade anual?",
  buckets:["Respeita","Não respeita"],
  items:[["Investimento público urgente e de relevante interesse nacional",0],
         ["Calamidade pública",1],["Guerra externa ou sua iminência",1]],
  why:"A urgência da calamidade e da guerra afasta a espera pelo exercício seguinte."},

S16:{t:"sort", instr:"De quem é a competência para cada contribuição especial?",
  buckets:["União, exclusivamente","Municípios e DF"],
  items:[["Contribuições sociais",0],["CIDE",0],
         ["Contribuição de interesse das categorias profissionais ou econômicas",0],
         ["COSIP",1]],
  why:"A COSIP é a exceção do art. 149-A."},

S17:{t:"multi", instr:"Requisitos das contribuições residuais da seguridade social (art. 195, §4º)",
  options:["Lei complementar","Serem não cumulativas",
           "Não ter fato gerador ou base de cálculo próprios de outras contribuições",
           "Lei ordinária","Destinação livre da arrecadação"],
  answers:[0,1,2],
  why:"Três requisitos cumulativos."},

S18:{t:"sort", instr:"Classifique quanto à transferência do encargo",
  buckets:["Direto","Indireto"],
  items:[["Imposto de Renda",0],["ICMS",1],["IPI",1],["ISS",1]],
  why:"No indireto o ônus vai ao contribuinte de fato."},

S19:{t:"sort", instr:"Classifique quanto à finalidade",
  buckets:["Fiscal","Extrafiscal","Parafiscal"],
  items:[["IR",0],["ICMS",0],["II e IE",1],["IOF",1],["CIDE",1],
         ["Contribuição cobrada pelo CRM",2]],
  why:"Extrafiscal intervém na economia; parafiscal destina a receita a outro sujeito ativo."},

S20:{t:"match", instr:"Ligue cada tipo de imposto ao seu comportamento",
  pairs:[["Proporcional","Alíquota fixa, valor devido varia com a base de cálculo"],
         ["Progressivo","Alíquota varia para mais conforme a base de cálculo"],
         ["Regressivo","Imposto fixo, cujo peso sobre a renda cai conforme a renda sobe"]],
  why:"Os impostos indiretos são os regressivos."},

S21:{t:"mc", instr:"R$ 400 de ICMS num celular. Para quem ganha R$ 2.000 e para quem ganha R$ 10.000, o peso na renda é de:",
  options:["20% e 4%","4% e 20%","20% e 20%","4% e 4%"],
  answer:0,
  why:"É a demonstração da regressividade dos tributos indiretos."},

S22:{t:"sort", instr:"A receita é originária ou derivada?",
  buckets:["Originária","Derivada"],
  items:[["Aluguel de imóvel do Estado",0],["Tarifa de energia elétrica",0],
         ["Receita de empresa estatal",0],
         ["Impostos",1],["Taxas",1],["Contribuições de melhoria",1],
         ["Empréstimos compulsórios",1],["Contribuições especiais",1]],
  why:"Na originária o Estado não se reveste do poder de império."},

S23:{t:"sort", instr:"Competência tributária ou capacidade tributária ativa?",
  buckets:["Competência tributária","Capacidade tributária ativa"],
  items:[["Aptidão para instituir tributos",0],["Indelegável",0],
         ["Atribuída pela Constituição aos entes políticos",0],
         ["Arrecadar e fiscalizar tributos",1],
         ["Executar leis, serviços, atos ou decisões administrativas",1],
         ["Delegável de uma pessoa jurídica de direito público a outra",1]],
  why:"Instituir não se delega; arrecadar e fiscalizar se delegam."},

S24:{t:"mc", instr:"Segundo a Súmula 396 do STJ, quem tem legitimidade ativa para cobrar a contribuição sindical rural?",
  options:["A Confederação Nacional da Agricultura","A Receita Federal do Brasil",
           "Os Municípios onde estão os imóveis rurais","O INCRA"],
  answer:0,
  why:"É a exceção: pessoa jurídica de direito privado com capacidade tributária ativa."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Direito Tributário 01","https://www.tecconcursos.com.br/s/Q2fExp","Q2fExp"],
  ["Caderno FCC — Direito Tributário 01","https://www.tecconcursos.com.br/s/Q2fEx1","Q2fEx1"],
  ["Caderno FGV — Direito Tributário 01","https://www.tecconcursos.com.br/s/Q2fEy3","Q2fEy3"],
  ["Caderno VUNESP — Direito Tributário 01","https://www.tecconcursos.com.br/s/Q2glTL","Q2glTL"]
];
var TECNOTA = "Priorize o caderno da FGV: foi a banca do último certame da Receita Federal e ela cobra o CTN quase na literalidade. Este módulo é puro decorar com entendimento — as listas de competência, o quadro taxa × preço público e o art. 7º voltam em praticamente toda prova tributária.";

var UNITS = [
  {n:1, title:"Conceito de tributo e espécies", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Art. 3º, natureza jurídica e as teorias", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · o conceito do art. 3º",       xp:25, data:["S1","S2","T0","T1","T5","T6"]},
    {id:"K3", type:"drill",  title:"Praticar · dação e pagamento",           xp:25, data:["S3","S4","T2","T3","T4"]},
    {id:"K4", type:"drill",  title:"Praticar · tripartite × pentapartite",   xp:25, data:["S5","S6","T7","T8","T9","T10","T11"]},
    {id:"K5", type:"flash",  title:"Flashcards · conceito e espécies",       xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]}
  ]},
  {n:2, title:"As cinco espécies", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Impostos, taxas, melhoria, compulsórios e especiais", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · competência dos impostos",    xp:25, data:["S7","S8","T12","T13","T14","T15","T16"]},
    {id:"K8", type:"drill",  title:"Praticar · taxas e preço público",       xp:25, data:["S9","S10","S11","T17","T18","T19","T20","T21","T22","T23","T24"]},
    {id:"K9", type:"drill",  title:"Praticar · melhoria e compulsórios",     xp:25, data:["S12","S13","S14","S15","T25","T26","T27","T28","T29","T30","T31","T32"]},
    {id:"K10",type:"drill",  title:"Praticar · contribuições especiais",     xp:25, data:["S16","S17","T33","T34","T35","T36","T37","T38","T39","T40"]},
    {id:"K11",type:"flash",  title:"Flashcards · as cinco espécies",         xp:15, data:[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]},
    {id:"K23",type:"teoria", title:"A reforma tributária: IBS, CBS e Imposto Seletivo", xp:10, data:"V5"}
  ]},
  {n:3, title:"Classificações doutrinárias", cvar:"u3", lessons:[
    {id:"K12",type:"teoria", title:"Direto, vinculado, fiscal e regressivo", xp:10, data:"V3"},
    {id:"K13",type:"drill",  title:"Praticar · encargo e fato gerador",      xp:25, data:["S18","T41","T42","T43"]},
    {id:"K14",type:"drill",  title:"Praticar · finalidade",                  xp:25, data:["S19","T44","T45","T46"]},
    {id:"K15",type:"drill",  title:"Praticar · progressivo e regressivo",    xp:25, data:["S20","S21","T47","T48","T49","T50"]},
    {id:"K16",type:"drill",  title:"Praticar · originária × derivada",       xp:25, data:["S22","T51","T52","T53"]},
    {id:"K17",type:"flash",  title:"Flashcards · classificações",            xp:15, data:[44,45,46,47,48,49,50,51,52,53,54,55,56,57]}
  ]},
  {n:4, title:"Competência e capacidade", cvar:"u4", lessons:[
    {id:"K18",type:"teoria", title:"Art. 7º do CTN e a Súmula 396",          xp:10, data:"V4"},
    {id:"K19",type:"drill",  title:"Praticar · competência × capacidade",    xp:25, data:["S23","S24","T54","T55","T56","T57"]},
    {id:"K20",type:"flash",  title:"Flashcards · competência e capacidade",  xp:15, data:[58,59,60,61,62,63,64]}
  ]},
  {n:5, title:"Fixação", cvar:"u5", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                xp:60, data:null},
    {id:"K21", type:"missao", title:"Missão TEC Concursos",                  xp:15, data:null},
    {id:"K22", type:"prova",  title:"Simulado cronometrado",                 xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 01 de Direito Tributário (Radegondes) ---------- */
var COM={
0:"<p>O resumo abre o art. 3º quebrado em pedaços, e é assim que ele deve ser decorado: <b>pecuniária</b> = em dinheiro · <b>compulsória</b> = obrigatória · <b>em moeda ou cujo valor nela se possa exprimir</b> (cheque, vale postal, estampilha) · <b>que não constitua sanção de ato ilícito</b> · <b>instituída em lei</b> (em regra, lei ordinária) · <b>cobrada mediante atividade administrativa plenamente vinculada</b>.</p><p>Enunciado literal e inteiro é CERTO. Leia procurando qual dos seis pedaços foi adulterado.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito de Tributo</i></p>",
1:"<p>Caixa <b>ATENÇÃO!</b> do resumo: o pagamento do tributo deve ser feito <b>em dinheiro</b> — não se pode pagá-lo por meio de <b>bens (in natura)</b> nem de <b>serviços (in labore)</b>.</p><p>A ressalva vem logo a seguir e é a próxima questão: o CTN permite quitar com <b>imóvel</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito de Tributo — Atenção!</i></p>",
2:"<p>O resumo traz o artigo na literalidade: <b>CTN, art. 156, XI</b> — extinguem o crédito tributário a <b>dação em pagamento em bens imóveis</b>, <b>na forma e condições estabelecidas em lei</b>.</p><p>Guarde as duas amarras: só <b>imóveis</b>, e só <b>na forma da lei</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito de Tributo — Atenção!</i></p>",
3:"<p>O art. 156, XI, citado no resumo, fala <b>apenas em bens imóveis</b>. Móveis não estão lá.</p><p>Fixe pelo contraste do próprio resumo: paga-se em <b>dinheiro</b>, não em bens nem em serviços; a única abertura é o <b>imóvel</b> em dação.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito de Tributo — Atenção!</i></p>",
4:"<p>São os exemplos que o próprio resumo dá para o elemento “em moeda ou cujo valor nela se possa exprimir”: <b>cheque</b>, <b>vale postal</b> e <b>estampilha</b>.</p><p>Continua sendo dinheiro — apenas representado por um título ou selo. Nada a ver com pagar em bens.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito de Tributo</i></p>",
5:"<p>É o quarto elemento do art. 3º: tributo é a prestação <b>que NÃO constitua sanção de ato ilícito</b>.</p><p>A multa nasce do ilícito e existe para puni-lo; o tributo não. Por isso multa não é tributo, por mais que também seja pecuniária, compulsória e instituída em lei.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito de Tributo</i></p>",
6:"<p>Último elemento do art. 3º, na frase do resumo: <b>o servidor encarregado de cobrar os tributos deve cobrá-lo</b>.</p><p>“Plenamente vinculada” é isso — não há espaço para escolher cobrar ou não.</p><p class='fb-fonte'>Resumo 01 · <i>Conceito de Tributo</i></p>",
7:"<p>Quadro do resumo: <b>conforme o CTN (art. 4º)</b>, a natureza jurídica do tributo depende do <b>fato gerador</b>.</p><p>Natureza jurídica, no vocabulário do resumo, significa simplesmente <b>qual é a espécie</b> do tributo.</p><p class='fb-fonte'>Resumo 01 · <i>Natureza Jurídica do Tributo</i></p>",
8:"<p>O outro lado do mesmo quadro: <b>conforme o STF</b>, a natureza jurídica depende do <b>fato gerador E da destinação</b>.</p><p>Regra de leitura: a questão disse <b>“CTN”</b>? só fato gerador. Disse <b>“STF”</b>? fato gerador + destinação. É esse acréscimo que sustenta a teoria pentapartite.</p><p class='fb-fonte'>Resumo 01 · <i>Natureza Jurídica do Tributo</i></p>",
9:"<p>O resumo transcreve o artigo: <b>CTN, art. 5º — os tributos são impostos, taxas e contribuições de melhoria.</b> São <b>três</b>, a teoria tripartite.</p><p>As cinco espécies só aparecem <b>conforme o STF</b>, não no art. 5º.</p><p class='fb-fonte'>Resumo 01 · <i>Espécies de Tributos</i></p>",
10:"<p>O esquema do resumo lista as <b>cinco</b> espécies do STF: impostos · taxas · contribuições de melhoria · <b>empréstimos compulsórios</b> · <b>contribuições especiais</b>.</p><p>As três primeiras vêm do CTN; as duas últimas são o acréscimo da teoria pentapartite.</p><p class='fb-fonte'>Resumo 01 · <i>Espécies de Tributos</i></p>",
11:"<p>Quadro do resumo, <b>CTN art. 16</b>: o imposto <b>tem por fato gerador uma situação independente de qualquer atividade estatal</b>.</p><p>A explicação que o resumo dá: são tributos ligados a uma atividade <b>do contribuinte</b>, que de alguma maneira <b>manifesta riqueza</b> — o exemplo dele é o Imposto de Renda.</p><p class='fb-fonte'>Resumo 01 · <i>Impostos</i></p>",
12:"<p>Caixa <b>ATENÇÃO!</b> do resumo: <b>somente a União</b> pode criar impostos não especificados pela Constituição — os chamados <b>impostos residuais</b> (art. 154, I, CF).</p><p>Por isso eles aparecem na lista da União, e em nenhuma outra.</p><p class='fb-fonte'>Resumo 01 · <i>Impostos — Atenção!</i></p>",
13:"<p>A lista da União no resumo tem <b>nove</b>: <b>II · IE · IR · IPI · IOF · ITR · IGF · IEG · impostos residuais</b>.</p><p>O quadro final agrupa assim: União (9) · Estados e DF (3) · Municípios e DF (3).</p><p class='fb-fonte'>Resumo 01 · <i>Impostos</i></p>",
14:"<p>Os <b>três</b> dos Estados e do DF, no quadro do resumo: <b>ITCMD</b> (transmissão causa mortis e doação) · <b>IPVA</b> · <b>ICMS</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Impostos</i></p>",
15:"<p>Os <b>três</b> dos Municípios e do DF: <b>IPTU</b> · <b>ISS</b> · <b>ITBI</b>.</p><p>O resumo abre o ITBI por extenso, e vale reler: transmissão <b>inter vivos</b>, <b>a qualquer título</b>, por <b>ato oneroso</b>, de bens imóveis — o que o separa do ITCMD, que é causa mortis ou doação.</p><p class='fb-fonte'>Resumo 01 · <i>Impostos</i></p>",
16:"<p>No quadro do resumo o <b>ITR</b> está na lista da <b>União</b>.</p><p>O que pode ser transferido a outro ente é a <b>capacidade tributária ativa</b> — arrecadar e fiscalizar —, e não a competência para instituir. O resumo fecha exatamente com essa distinção.</p><p class='fb-fonte'>Resumo 01 · <i>Impostos</i> + <i>Competência × Capacidade</i></p>",
17:"<p><b>CTN, art. 77</b>, no esquema do resumo: as taxas <b>são cobradas pela União, pelos Estados, pelo DF ou pelos Municípios</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Taxas</i></p>",
18:"<p>Os <b>dois</b> fatos geradores da taxa, conforme o resumo: o <b>exercício regular do poder de polícia</b> (exemplo dele: taxa de fiscalização); e a <b>utilização, efetiva ou potencial, de serviço público específico e divisível, prestado ao contribuinte ou posto à sua disposição</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Taxas — CTN art. 77</i></p>",
19:"<p>O art. 79 aparece desmembrado no resumo. Utilizados pelo contribuinte <b>efetivamente</b>, quando por ele <b>usufruídos a qualquer título</b>; <b>potencialmente</b>, quando, <b>sendo de utilização compulsória</b>, sejam <b>postos à sua disposição</b>.</p><p>Ou seja: a utilização potencial basta — desde que o serviço seja de utilização compulsória.</p><p class='fb-fonte'>Resumo 01 · <i>Taxas — CTN art. 79</i></p>",
20:"<p>Do mesmo quadro do art. 79: os serviços consideram-se <b>específicos</b> quando possam ser <b>destacados em unidades autônomas</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Taxas — CTN art. 79</i></p>",
21:"<p>E <b>divisíveis</b> quando <b>suscetíveis de utilização separadamente</b>.</p><p>Par para não trocar: <b>específico</b> = dá para destacar qual é o serviço · <b>divisível</b> = dá para separar quanto cada um usou. A taxa exige os dois.</p><p class='fb-fonte'>Resumo 01 · <i>Taxas — CTN art. 79</i></p>",
22:"<p>O resumo avisa: <b>“o examinador vai tentar confundir taxa com preço público”</b>, e traz o quadro comparativo linha a linha:</p><ul><li><b>Taxa</b>: é tributo · instituída por <b>lei</b> · caráter <b>compulsório</b> · receita <b>derivada</b> · ex.: taxa de coleta de lixo.</li><li><b>Preço público</b>: não é tributo · instituído por <b>contrato</b> · caráter <b>facultativo</b> · receita <b>originária</b> · ex.: tarifa de energia elétrica.</li></ul><p>O enunciado descreve o preço público.</p><p class='fb-fonte'>Resumo 01 · <i>Taxas — Quadro comparativo</i></p>",
23:"<p>Está no quadro comparativo: a <b>taxa</b> é classificada como receita <b>derivada</b>; o <b>preço público</b>, como receita <b>originária</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Taxas — Quadro comparativo</i></p>",
24:"<p>A <b>tarifa de energia elétrica</b> é o exemplo que o próprio quadro dá para <b>preço público</b> — e preço público <b>não é tributo</b>.</p><p>O exemplo de taxa, no mesmo quadro, é a <b>taxa de serviço de coleta de lixo</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Taxas — Quadro comparativo</i></p>",
25:"<p><b>CTN, art. 81</b>, como o resumo transcreve: a contribuição de melhoria é instituída para <b>fazer face ao custo de obras públicas de que decorra valorização imobiliária</b>.</p><p>O esquema acrescenta que pode ser cobrada por <b>União, Estados, DF ou Municípios</b>, no âmbito de suas respectivas atribuições.</p><p class='fb-fonte'>Resumo 01 · <i>Contribuição de Melhoria</i></p>",
26:"<p>Caixa <b>ATENÇÃO!</b> do resumo, direta: <b>o fato gerador da contribuição de melhoria é a valorização imobiliária, e não a obra pública em si</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Contribuição de Melhoria — Atenção!</i></p>",
27:"<p>Os <b>dois limites</b> do art. 81, como o resumo os separa: <b>limite total</b> = a <b>despesa total realizada</b> pelo ente · <b>limite individual</b> = o <b>acréscimo de valor que da obra resultar para cada imóvel beneficiado</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Contribuição de Melhoria</i></p>",
28:"<p>Observações 1 e 2 do resumo: os empréstimos compulsórios são de competência <b>EXCLUSIVA da União</b> e serão instituídos mediante <b>LEI COMPLEMENTAR</b> (CF, art. 148).</p><p>O resumo define a espécie assim: é um <b>empréstimo forçado</b>, mas <b>a devolução é garantida</b> pelo próprio Governo.</p><p class='fb-fonte'>Resumo 01 · <i>Empréstimos Compulsórios</i></p>",
29:"<p>A observação 2 do resumo é categórica: os empréstimos compulsórios serão instituídos mediante <b>LEI COMPLEMENTAR</b>. Medida provisória não serve, qualquer que seja a urgência alegada.</p><p class='fb-fonte'>Resumo 01 · <i>Empréstimos Compulsórios</i></p>",
30:"<p>No esquema do resumo, a anterioridade aparece <b>em apenas um</b> dos dois braços:</p><ul><li>despesas extraordinárias de <b>calamidade pública, guerra externa ou sua iminência</b> — sem essa observação;</li><li><b>investimento público de caráter urgente e de relevante interesse nacional</b> — “<b>observado o princípio da Anterioridade Anual</b>”.</li></ul><p class='fb-fonte'>Resumo 01 · <i>Empréstimos Compulsórios</i></p>",
31:"<p>Observação 3 do resumo: a <b>aplicação dos recursos</b> provenientes de empréstimo compulsório <b>será vinculada à despesa que fundamentou sua instituição</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Empréstimos Compulsórios</i></p>",
32:"<p>Definição literal do resumo: o princípio da anterioridade anual dispõe que é <b>vedado cobrar tributos no mesmo exercício financeiro em que haja sido publicada a lei que os instituiu ou aumentou</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Empréstimos Compulsórios</i></p>",
33:"<p>Como o resumo apresenta a espécie: a contribuição especial <b>foge da teoria do fato gerador</b> usada para classificar impostos, taxas e contribuições de melhoria. O <b>critério de identificação é a finalidade</b> da criação do tributo (art. 149, CF), <b>sendo necessária a vinculação da receita</b> que deu causa à sua criação.</p><p class='fb-fonte'>Resumo 01 · <i>Contribuições Especiais</i></p>",
34:"<p>Esquema do <b>art. 149</b> no resumo — compete <b>exclusivamente à União</b> instituir contribuições: <b>sociais</b> · <b>de intervenção no domínio econômico (CIDE)</b> · <b>de interesse das categorias profissionais ou econômicas</b>.</p><p>O quadro de competências do resumo traz as duas ressalvas: a <b>COSIP</b>, dos Municípios e do DF, e a contribuição <b>previdenciária dos próprios servidores</b>, que os demais entes podem instituir.</p><p class='fb-fonte'>Resumo 01 · <i>Contribuições Especiais</i></p>",
35:"<p>Observação 2 do resumo: os <b>Municípios e o DF</b> poderão instituir contribuição, na forma das respectivas leis, para o <b>custeio do serviço de iluminação pública (COSIP)</b> — <b>CF, art. 149-A</b>.</p><p>No quadro de competências ela é a única linha que não é da União.</p><p class='fb-fonte'>Resumo 01 · <i>Contribuições Especiais</i></p>",
36:"<p>Observação 2 do bloco seguinte: é <b>facultada</b> a cobrança da COSIP na <b>fatura de consumo de energia elétrica</b> — <b>CF, art. 149-A, parágrafo único</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Contribuições Especiais</i></p>",
37:"<p>Observação 1 do resumo: a competência é da União, <b>exceto</b> quando Estados, Municípios e DF <b>adotem regime de previdência própria</b>, podendo então criar a contribuição para cobrar dos <b>servidores ativos, dos aposentados e dos pensionistas</b> — a “Contribuição para custeio de regime próprio de previdência social”.</p><p class='fb-fonte'>Resumo 01 · <i>Contribuições Especiais</i></p>",
38:"<p>Observação 1 do resumo, logo abaixo do quadro: a contribuição para custeio do <b>RPPS poderá ter alíquota progressiva</b> de acordo com o <b>valor da base de contribuição</b> ou dos <b>proventos de aposentadoria e de pensões</b> — <b>CF, art. 149, §1º</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Contribuições Especiais</i></p>",
39:"<p>Observação 1: a contribuição especial é criada por meio de <b>lei ordinária</b>.</p><p>A exigência de lei complementar aparece em outro tópico do resumo — o das <b>contribuições residuais</b> do art. 195, §4º —, e é só lá.</p><p class='fb-fonte'>Resumo 01 · <i>Contribuições Especiais</i></p>",
40:"<p>Os <b>três</b> requisitos do <b>art. 195, §4º</b>, como o resumo lista: <b>mediante lei complementar</b> · <b>sejam não cumulativas</b> · <b>não tenham fato gerador ou base de cálculo próprio de outras contribuições</b>.</p><p>Repare no fecho: o impedimento é quanto a <b>outras contribuições</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Contribuições Residuais</i></p>",
41:"<p>Quadro do resumo, classificação <b>quanto à transferência do encargo a terceiros</b>: no <b>tributo direto</b>, a <b>pessoa obrigada ao recolhimento é a que sofre o ônus</b>. Exemplo do resumo: <b>Imposto de Renda</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Classificações Doutrinárias</i></p>",
42:"<p>No mesmo quadro: no <b>tributo indireto</b> o ônus é <b>transferido a terceiros (contribuinte de fato)</b>, e os exemplos que o resumo dá são exatamente <b>ICMS, IPI e ISS</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Classificações Doutrinárias</i></p>",
43:"<p>Classificação <b>quanto ao fato gerador</b>: <b>vinculado</b> = o tributo está vinculado a uma <b>atividade do Poder Público</b> (exemplo do resumo: a <b>taxa</b>, que decorre de uma fiscalização); <b>não vinculado</b> = não está (exemplo: o <b>imposto</b> — comprar um carro é manifestação de riqueza do contribuinte, e por isso ele paga IPVA).</p><p class='fb-fonte'>Resumo 01 · <i>Classificações Doutrinárias</i></p>",
44:"<p>Quadro <b>quanto à finalidade</b>: <b>extrafiscal</b> é aquele cuja finalidade é <b>interferir numa situação social ou na economia</b>. Os exemplos do resumo são precisamente <b>II, IE, IPI, IOF e CIDE</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Classificações Doutrinárias</i></p>",
45:"<p>O enunciado descreve o <b>tributo fiscal</b> — “a finalidade é arrecadar a fim de pagar as contas do governo”, com exemplos IR, ICMS e ISS.</p><p>O <b>parafiscal</b> é o terceiro da coluna: a finalidade é <b>destinar os recursos arrecadados para sujeito ativo diferente daquele que expediu a lei</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Classificações Doutrinárias</i></p>",
46:"<p>É o exemplo do resumo para o tributo <b>parafiscal</b>: as contribuições cobradas pelas <b>autarquias que fiscalizam as atividades profissionais</b> — ele cita o <b>CRM</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Classificações Doutrinárias</i></p>",
47:"<p>Quadro do resumo: no <b>proporcional</b> a <b>alíquota é fixa, mas a base de cálculo não</b>; logo o valor pago é proporcional à BC. Os exemplos são os mesmos da questão: alíquota de <b>10%</b> sobre BC de <b>R$ 10.000</b> = R$ 1.000; sobre <b>R$ 2.000</b> = R$ 200.</p><p class='fb-fonte'>Resumo 01 · <i>Proporcionais, Progressivos e Regressivos</i></p>",
48:"<p>No <b>progressivo</b>, segundo o resumo, a <b>alíquota varia para mais conforme a base de cálculo</b> — “as pessoas com maiores rendimentos pagam um imposto maior”. Os exemplos: remuneração de R$ 2.000 a <b>7,5%</b> de IR = R$ 150; de R$ 10.000 a <b>27,5%</b> = R$ 2.750.</p><p class='fb-fonte'>Resumo 01 · <i>Proporcionais, Progressivos e Regressivos</i></p>",
49:"<p>Obs. 2 do resumo, literal: <b>os impostos indiretos (ICMS, ISS, IPI) são regressivos</b>. E a obs. 1 explica o mecanismo: <b>o imposto é fixo, mas a alíquota em relação à renda da pessoa não</b> — “esse sistema tributa de forma mais aguda as classes mais pobres”.</p><p class='fb-fonte'>Resumo 01 · <i>Proporcionais, Progressivos e Regressivos</i></p>",
50:"<p>É o exemplo desenvolvido no resumo: quem tem renda de <b>R$ 2.000</b> e paga <b>R$ 400</b> de ICMS no celular compromete <b>20%</b> da renda; quem tem <b>R$ 10.000</b> e paga os mesmos R$ 400 perde apenas <b>4%</b>.</p><p>Guarde o raciocínio, não o número: mesmo imposto, peso desigual.</p><p class='fb-fonte'>Resumo 01 · <i>Explicando melhor os impostos regressivos</i></p>",
51:"<p>Quadro do resumo: as <b>receitas originárias</b> são auferidas com base na <b>exploração do patrimônio do Estado</b>, por meio de <b>aluguéis</b> ou de <b>empresas estatais</b> (empresas públicas e sociedades de economia mista).</p><p>A caixa <b>ATENÇÃO!</b> completa: nas originárias o Estado <b>não se reveste do poder de império</b> para coagir as pessoas a pagarem.</p><p class='fb-fonte'>Resumo 01 · <i>Receita Originária × Derivada</i></p>",
52:"<p>Do mesmo quadro: as <b>derivadas</b> são auferidas com base na <b>exploração do patrimônio do particular</b> e entram nos cofres públicos <b>por meio de coação ao indivíduo</b>, tendo em vista os interesses da coletividade.</p><p>O exemplo do resumo abrange as cinco espécies: impostos, taxas, contribuições de melhoria, empréstimos compulsórios e contribuições especiais.</p><p class='fb-fonte'>Resumo 01 · <i>Receita Originária × Derivada</i></p>",
53:"<p>É o <b>Exemplo 01</b> da coluna das <b>originárias</b> no resumo: “a receita proveniente de um contrato de aluguel”.</p><p>O Exemplo 02 é a <b>tarifa (preço público)</b> pela exploração de atividade econômica pelo Estado — que casa com o quadro taxa × preço público.</p><p class='fb-fonte'>Resumo 01 · <i>Receita Originária × Derivada</i></p>",
54:"<p>Definição do resumo: competência tributária é a <b>atribuição dada pela Constituição Federal aos entes políticos</b> (União, Estados, DF, Municípios) <b>para instituir os tributos</b>. No esquema ele resume em cinco palavras: <b>é a aptidão para instituir tributos</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Competência Tributária</i></p>",
55:"<p><b>CTN, art. 7º</b>, transcrito no resumo: a competência tributária é <b>indelegável</b>, <b>salvo</b> atribuição das funções de <b>arrecadar ou fiscalizar</b> tributos, ou de <b>executar leis, serviços, atos ou decisões administrativas</b> em matéria tributária, <b>conferida por uma pessoa jurídica de direito público a outra</b>.</p><p>O quadro comparativo fecha: instituir <b>não</b> pode ser delegado; a capacidade <b>pode</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Competência Tributária — CTN art. 7º</i></p>",
56:"<p>Definição do resumo: a capacidade tributária ativa é a capacidade para <b>arrecadar e fiscalizar</b> tributos <b>ou</b> de <b>executar leis, serviços, atos ou decisões administrativas</b> em matéria tributária, conferida por uma pessoa jurídica de direito público a outra.</p><p class='fb-fonte'>Resumo 01 · <i>Capacidade Tributária Ativa</i></p>",
57:"<p>Caixa <b>ATENÇÃO!</b> do resumo: em regra a capacidade tributária ativa só pode ser delegada a <b>pessoas jurídicas de direito público</b> — e a exceção que já caiu em provas é a <b>Súmula 396 do STJ</b>: “a Confederação Nacional da Agricultura tem legitimidade ativa para a cobrança da contribuição sindical rural”.</p><p>O resumo sublinha o ponto: a CNA é <b>pessoa jurídica de direito privado</b> e ainda assim recebe a delegação.</p><p class='fb-fonte'>Resumo 01 · <i>Capacidade Tributária Ativa — Atenção!</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"01", nome:"Conceito de tributo, espécies e competência", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
