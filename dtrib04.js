/* Direito Tributário — Módulo 04: Repartição das receitas tributárias (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dtrib04 = (function(){
"use strict";

var CARDS = [
  ["Onde está a repartição das receitas tributárias?","Nos <b>arts. 157, 158 e 159</b> da Constituição Federal."],
  ["Por que são os IMPOSTOS que se repartem?","Porque são a espécie que <b>mais se adequa ao mecanismo</b>: os recursos <b>não custeiam nenhuma atividade estatal específica</b> — são tributos não vinculados."],
  ["A repartição é exceção a qual princípio?","À <b>NÃO AFETAÇÃO</b> da receita de impostos. Embora os impostos se sujeitem a esse princípio, a <b>repartição constitucional</b> é exceção expressa."],
  ["Além de impostos, o que mais se reparte?","A <b>CIDE-Combustíveis</b> — parte da arrecadação vai a Estados, DF e Municípios (art. 159, III, c/c § 4º). É <b>contribuição</b>, não imposto."],
  ["Quais impostos da UNIÃO têm receita repartida?","<b>IR · IPI · IOF sobre o ouro · ITR · impostos residuais.</b>"],
  ["Quais impostos da União NÃO são repartidos?","<b>II · IE · IGF · IEG.</b>"],
  ["Quais impostos dos ESTADOS são repartidos?","<b>IPVA</b> e <b>ICMS</b>. O <b>ITCMD não se reparte</b>."],
  ["E os impostos dos MUNICÍPIOS?","<b>Nenhum</b> se reparte — o Município é o fim da linha. IPTU, ISS e ITBI ficam integralmente com ele."],
  ["Por que o DF não reparte suas receitas?","Porque <b>não é dividido em Municípios</b> — não há a quem repassar."],

  ["Quantas são as formas de repartição da União para os ESTADOS/DF?","<b>CINCO.</b>"],
  ["União → Estados/DF: qual a regra do IR?","<b>100% do IRRF</b> sobre os rendimentos pagos pelos <b>Estados/DF, suas autarquias e fundações</b>."],
  ["União → Estados/DF: e os impostos residuais?","<b>20%</b> do produto da arrecadação, se criados."],
  ["União → Estados/DF: qual a regra do IPI?","<b>10%</b>, <b>proporcionalmente às exportações de produtos industrializados</b> pelos Estados/DF."],
  ["União → Estados/DF: qual a fatia da CIDE-Combustíveis?","<b>29%</b>."],
  ["União → Estados/DF: e o IOF sobre o ouro?","<b>30%</b> do IOF sobre o ouro usado como <b>ativo financeiro ou instrumento cambial</b>."],
  ["Quantas são as formas de repartição da União para os MUNICÍPIOS?","<b>TRÊS.</b>"],
  ["União → Municípios: qual a regra do IR?","<b>100% do IRRF</b> sobre os rendimentos pagos pelos <b>Municípios, suas autarquias e fundações</b>."],
  ["União → Municípios: qual a regra do ITR?","<b>50%</b> relativos aos imóveis do Município — ou <b>100%</b> se o Município <b>optar por fiscalizá-lo e cobrá-lo</b>."],
  ["União → Municípios: e o IOF sobre o ouro?","<b>70%</b>, conforme a <b>origem da operação</b>."],
  ["Como fica dividido o IOF sobre o ouro?","<b>30% Estados · 70% Municípios</b> — e nada sobra para a União."],
  ["Por que a União repassa 100% do IRRF dos servidores estaduais e municipais?","Porque a remuneração paga por esses entes e suas autarquias e fundações sofre <b>IRRF</b>, e o <b>produto pertence ao ente que pagou</b> a remuneração."],
  ["PEGADINHA do IRRF: quem NÃO entra?","As <b>empresas públicas</b> e as <b>sociedades de economia mista</b>. A norma alcança só o ente, suas <b>autarquias e fundações</b>. A banca acrescenta EP e SEM para induzir ao erro."],

  ["Quanto a União entrega aos fundos, e sobre o quê?","<b>50%</b> do produto da arrecadação do <b>IR e do IPI</b> (art. 159, I)."],
  ["Como se divide esse repasse de 50%?","<b>21,5% FPE</b> · <b>22,5% FPM</b> · <b>3%</b> ao setor produtivo do <b>Norte, Nordeste e Centro-Oeste</b> · <b>1% FPM em julho</b> · <b>1% FPM em setembro</b> · <b>1% FPM em dezembro</b>."],
  ["Somando tudo, quanto cada fundo recebe?","<b>FPE: 21,5%</b> · <b>FPM: 25,5%</b> (22,5 + 1 + 1 + 1). A soma dos seis itens fecha os <b>50%</b>."],
  ["Quando entram os três 1% extras do FPM?","No <b>1º decêndio</b> de <b>julho</b>, de <b>setembro</b> e de <b>dezembro</b> de cada ano."],
  ["O que a União exclui do cálculo da entrega ao FPE e ao FPM?","A parcela do <b>IR que já pertence</b> a Estados, DF e Municípios sobre <b>rendimentos pagos por eles</b>, suas autarquias e fundações (art. 159, § 1º). Sem isso, o mesmo valor seria repassado duas vezes."],
  ["Quem estabelece as normas de entrega dos fundos?","<b>Lei complementar</b> (art. 161, II)."],
  ["Quem calcula as quotas dos fundos de participação?","O <b>TRIBUNAL DE CONTAS DA UNIÃO</b> (art. 161, parágrafo único)."],

  ["Quantas são as formas de repartição do ESTADO para os MUNICÍPIOS?","<b>QUATRO.</b>"],
  ["Estado → Município: qual a regra do IPVA?","<b>50%</b> do IPVA dos veículos <b>licenciados no território do Município</b>."],
  ["Estado → Município: qual a regra do ICMS?","<b>25%</b> do produto da arrecadação."],
  ["Estado → Município: a repartição em cascata do IPI","<b>25% dos 10%</b> que o Estado recebeu da União a título de IPI."],
  ["Estado → Município: a repartição em cascata da CIDE","<b>25% dos 29%</b> que o Estado recebeu da União a título de CIDE-Combustíveis."],
  ["Exemplo numérico da cascata do IPI","IPI arrecadado de <b>R$ 100.000</b> → a União repassa <b>10% = R$ 10.000</b> ao Estado → o Estado repassa <b>25% disso = R$ 2.500</b> aos Municípios."],
  ["Como se creditam os 25% do ICMS dos Municípios?","<b>No mínimo 65%</b> na proporção do <b>valor adicionado</b> realizado em seus territórios; <b>até 35%</b> conforme <b>lei estadual</b>, observada obrigatoriamente a distribuição de <b>no mínimo 10 pontos percentuais</b> segundo indicadores de melhoria nos resultados de aprendizagem e de equidade."],
  ["Resuma quem NÃO reparte nada","<b>União:</b> II, IE, IGF, IEG. <b>Estados:</b> ITCMD. <b>Municípios:</b> todos os seus — e o <b>DF</b>, que não tem Municípios."],

  ["O que veda o art. 160?","A <b>retenção ou qualquer restrição</b> à entrega e ao emprego dos recursos atribuídos a Estados, DF e Municípios, <b>inclusive adicionais e acréscimos</b> relativos a impostos."],
  ["Quais as duas exceções do art. 160, § 1º?","A União e os Estados <b>podem condicionar</b> a entrega: <b>I)</b> ao <b>pagamento de seus créditos</b>, inclusive de suas autarquias; <b>II)</b> ao cumprimento da <b>aplicação mínima em ações e serviços de saúde</b> (art. 198, § 2º, II e III)."],
  ["O que a EC 113/2021 acrescentou ao art. 160?","O <b>§ 2º</b>: contratos, acordos, convênios, parcelamentos e renegociações de débitos firmados pela União com os entes conterão cláusula autorizando a <b>dedução dos valores devidos</b> das cotas nos <b>Fundos de Participação</b> ou dos <b>precatórios federais</b>."],
  ["O que diz o art. 195, § 1º?","As receitas de Estados, DF e Municípios <b>destinadas à seguridade social</b> constarão dos <b>respectivos orçamentos</b>, <b>não integrando o orçamento da União</b>."],
  ["Qual a relação entre repartição de receitas e federalismo?","Junto com a atribuição de competência, forma a <b>discriminação constitucional de rendas</b> — técnica ligada à <b>autonomia dos entes</b> e, portanto, à <b>cláusula pétrea</b> da forma federativa (art. 60, § 4º)."],
  ["Repartir receita altera a competência tributária?","<b>NÃO</b>. Quem institui o tributo continua sendo o mesmo ente; o que se divide é apenas o <b>produto da arrecadação</b>."],
  ["Reforma tributária: o que muda na repartição?","A <b>EC 132/2023</b> alterou os arts. 158 e 159 e desenhou repartições próprias para o <b>Imposto Seletivo</b>, além de criar, para o <b>IBS</b>, um mecanismo próprio de distribuição operado pelo <b>Comitê Gestor</b>, com longa transição. O resumo de origem é anterior à emenda: confira os percentuais na redação atual da CF antes da prova."]
];

var QS = [
  ["A repartição das receitas tributárias está disciplinada nos arts. 157, 158 e 159 da Constituição Federal.","C","FCC","São os três artigos centrais do tema."],
  ["Os impostos são a espécie tributária que mais se adequa ao mecanismo de repartição porque sua arrecadação não custeia atividade estatal específica.","C","CEBRASPE","São tributos não vinculados."],
  ["A repartição constitucional das receitas tributárias constitui exceção ao princípio da não afetação.","C","FGV","Os impostos se sujeitam à não afetação, mas a repartição é exceção expressa."],
  ["Somente impostos têm sua arrecadação repartida com outros entes federativos.","E","FCC","A <b>CIDE-Combustíveis</b> também é repartida (art. 159, III)."],
  ["Têm receita repartida pela União o imposto de renda, o IPI, o IOF sobre o ouro, o ITR e os impostos residuais.","C","CEBRASPE","Ficam de fora II, IE, IGF e IEG."],
  ["O imposto de importação e o imposto de exportação têm parte de sua arrecadação repartida com os Estados.","E","FGV","II, IE, IGF e IEG não se repartem."],
  ["O ITCMD tem sua arrecadação repartida com os Municípios.","E","FCC","Dos impostos estaduais só IPVA e ICMS se repartem."],
  ["Os Municípios não repartem a arrecadação de seus impostos com nenhum outro ente.","C","CEBRASPE","São o fim da linha da repartição."],
  ["O Distrito Federal reparte suas receitas tributárias com os Municípios nele situados.","E","FGV","O DF não é dividido em Municípios."],
  ["Pertence aos Estados e ao Distrito Federal a totalidade do produto da arrecadação do imposto de renda incidente na fonte sobre rendimentos pagos por eles, suas autarquias e fundações.","C","CF art. 157 I","São os 100% do IRRF."],
  ["Pertence aos Estados a totalidade do IRRF sobre rendimentos pagos por eles, suas autarquias, fundações, empresas públicas e sociedades de economia mista.","E","CEBRASPE","<b>EP e SEM não entram.</b> É a pegadinha mais cobrada do módulo."],
  ["Pertencem aos Estados e ao Distrito Federal vinte por cento do produto da arrecadação dos impostos residuais que a União instituir.","C","CF art. 157 II","Percentual clássico de prova."],
  ["A União entregará aos Estados e ao Distrito Federal dez por cento do produto da arrecadação do IPI, proporcionalmente às exportações de produtos industrializados.","C","CF art. 159 II","Esses 10% ainda serão repartidos em 25% com os Municípios."],
  ["A União entregará aos Estados e ao Distrito Federal vinte e nove por cento do produto da arrecadação da CIDE-Combustíveis.","C","FCC","E o Estado repassa 25% disso aos Municípios."],
  ["Do IOF incidente sobre o ouro utilizado como ativo financeiro, setenta por cento pertencem aos Estados e trinta por cento aos Municípios.","E","FGV","É o inverso: <b>30% aos Estados</b> e <b>70% aos Municípios</b>."],
  ["São três as formas de repartição de receitas da União diretamente para os Municípios.","C","CEBRASPE","IRRF integral, ITR e IOF-ouro."],
  ["Pertencem aos Municípios cinquenta por cento do produto da arrecadação do ITR relativo aos imóveis neles situados.","C","CF art. 158 II","Pode chegar a 100% na hipótese da opção."],
  ["O Município que optar por fiscalizar e cobrar o ITR fará jus à totalidade do produto de sua arrecadação.","C","FGV","É a hipótese de 100% prevista na Constituição."],
  ["A opção do Município por fiscalizar e cobrar o ITR transfere a ele a competência tributária do imposto.","E","CEBRASPE","Transfere apenas a <b>capacidade tributária ativa</b>; a competência continua sendo da União."],
  ["A União entregará cinquenta por cento do produto da arrecadação do imposto de renda e do IPI na forma do art. 159, I.","C","FCC","A soma das seis alíneas fecha exatamente 50%."],
  ["O Fundo de Participação dos Estados e do Distrito Federal recebe vinte e um vírgula cinco por cento da arrecadação do IR e do IPI.","C","CEBRASPE","O FPM, somadas as parcelas, recebe 25,5%."],
  ["Somadas todas as parcelas, o Fundo de Participação dos Municípios recebe vinte e dois vírgula cinco por cento da arrecadação do IR e do IPI.","E","FGV","Recebe <b>25,5%</b>: 22,5% mais três parcelas de 1%."],
  ["Três por cento do produto da arrecadação do IR e do IPI destinam-se a programas de financiamento do setor produtivo das Regiões Norte, Nordeste e Centro-Oeste.","C","CF art. 159 I c","Parcela cobrada com frequência."],
  ["As parcelas adicionais de um por cento destinadas ao FPM são entregues no primeiro decêndio dos meses de julho, setembro e dezembro.","C","FCC","Foram sendo acrescidas por emendas constitucionais sucessivas."],
  ["No cálculo da entrega aos fundos de participação, a União excluirá a parcela da arrecadação do imposto de renda que já pertence aos Estados, ao Distrito Federal e aos Municípios.","C","CF art. 159 § 1º","Do contrário haveria repasse em duplicidade."],
  ["Cabe a decreto do Poder Executivo federal estabelecer normas sobre a entrega dos recursos aos fundos de participação.","E","CEBRASPE","Cabe a <b>lei complementar</b> (art. 161, II)."],
  ["O cálculo das quotas referentes aos fundos de participação é efetuado pelo Tribunal de Contas da União.","C","CF art. 161 p.ú.","Detalhe que aparece em prova com frequência."],
  ["São quatro as formas de repartição de receitas dos Estados para os Municípios.","C","FGV","IPVA, ICMS, IPI recebido da União e CIDE recebida da União."],
  ["Pertencem aos Municípios cinquenta por cento do produto da arrecadação do IPVA relativo aos veículos automotores licenciados em seus territórios.","C","CF art. 158 III","O critério é o licenciamento, não o domicílio do proprietário."],
  ["Pertencem aos Municípios vinte e cinco por cento do produto da arrecadação do ICMS.","C","CF art. 158 IV","É a maior transferência estadual."],
  ["Os Estados entregarão aos Municípios vinte e cinco por cento dos dez por cento do IPI que receberem da União.","C","FCC","Repartição em cascata: 25% de 10%."],
  ["Os Estados entregarão aos Municípios vinte e cinco por cento dos vinte e nove por cento da CIDE-Combustíveis que receberem da União.","C","CEBRASPE","Mesma lógica em cascata."],
  ["Se a União repassar dez mil reais de IPI a determinado Estado, este deverá repassar dois mil e quinhentos reais aos seus Municípios.","C","FGV","25% de R$ 10.000."],
  ["Os vinte e cinco por cento do ICMS pertencentes aos Municípios serão creditados, no mínimo sessenta e cinco por cento, na proporção do valor adicionado realizado em seus territórios.","C","CF art. 158 p.ú.","O restante, até 35%, segue lei estadual."],
  ["A parcela de até trinta e cinco por cento do ICMS distribuída conforme lei estadual deve observar, obrigatoriamente, a distribuição de no mínimo dez pontos percentuais com base em indicadores de melhoria nos resultados de aprendizagem e aumento da equidade.","C","CEBRASPE","Alteração trazida pela EC 108/2020."],
  ["É vedada a retenção ou qualquer restrição à entrega e ao emprego dos recursos atribuídos aos Estados, ao Distrito Federal e aos Municípios.","C","CF art. 160","A vedação alcança adicionais e acréscimos relativos a impostos."],
  ["A União e os Estados podem condicionar a entrega dos recursos ao pagamento de seus créditos, inclusive os de suas autarquias.","C","CF art. 160 § 1º I","É uma das duas exceções admitidas."],
  ["A União pode condicionar a entrega de recursos ao cumprimento da aplicação mínima anual em ações e serviços públicos de saúde.","C","FGV","Remissão ao art. 198, § 2º, II e III."],
  ["A vedação do art. 160 é absoluta, não admitindo qualquer condicionamento à entrega dos recursos.","E","FCC","O § 1º traz duas exceções expressas."],
  ["Os contratos e as renegociações de débitos firmados pela União com os entes federativos conterão cláusula autorizando a dedução dos valores devidos das cotas nos fundos de participação ou dos precatórios federais.","C","EC 113/2021","É o § 2º do art. 160."],
  ["As receitas dos Estados, do Distrito Federal e dos Municípios destinadas à seguridade social integram o orçamento da União.","E","CF art. 195 § 1º","Constarão dos respectivos orçamentos e <b>não</b> integram o da União."],
  ["A repartição do produto da arrecadação transfere ao ente beneficiado a competência para instituir o tributo repartido.","E","CEBRASPE","Reparte-se apenas o produto; a competência é indelegável."],
  ["A repartição de receitas, ao lado da atribuição de competência tributária, compõe a discriminação constitucional de rendas.","C","FGV","Técnica vinculada à cláusula pétrea da forma federativa."],
  ["A EC 132/2023 não produziu qualquer alteração nas regras de repartição de receitas tributárias.","E","FGV","Alterou os arts. 158 e 159 e criou regras próprias para o Imposto Seletivo e para a distribuição do IBS."]
];

var EX = {
S1:{t:"sort", instr:"A receita desse imposto é repartida?",
  buckets:["Repartida","Não repartida"],
  items:[["IR",0],["IPI",0],["ITR",0],["IOF sobre o ouro",0],["Impostos residuais",0],
         ["II",1],["IE",1],["IGF",1],["IEG",1]],
  why:"Dos nove impostos federais, cinco se repartem e quatro não."},

S2:{t:"mc", instr:"A repartição constitucional das receitas é exceção a qual princípio?",
  options:["Não afetação da receita de impostos","Anterioridade nonagesimal",
           "Uniformidade geográfica","Capacidade contributiva"],
  answer:0,
  why:"Os impostos se sujeitam à não afetação, mas a própria CF abre a exceção."},

S3:{t:"multi", instr:"Marque o que a UNIÃO repassa aos ESTADOS e ao DF",
  options:["100% do IRRF sobre rendimentos pagos por eles, autarquias e fundações",
           "20% dos impostos residuais",
           "10% do IPI, proporcionalmente às exportações",
           "29% da CIDE-Combustíveis",
           "30% do IOF sobre o ouro",
           "50% do ITR dos imóveis situados no Estado"],
  answers:[0,1,2,3,4],
  why:"O ITR é repassado aos MUNICÍPIOS, não aos Estados."},

S4:{t:"multi", instr:"Marque quem entra na regra dos 100% do IRRF",
  options:["O próprio Estado ou Município","Suas autarquias","Suas fundações",
           "Suas empresas públicas","Suas sociedades de economia mista"],
  answers:[0,1,2],
  why:"EP e SEM ficam de fora — a banca as acrescenta justamente para induzir ao erro."},

S5:{t:"gap", instr:"Complete a divisão do IOF sobre o ouro",
  before:"Do IOF incidente sobre o ouro como ativo financeiro, 30% pertencem aos Estados e ",
  after:" pertencem aos Municípios, conforme a origem da operação.",
  options:["70%","50%","25%"], answer:0,
  why:"Nada sobra para a União nessa repartição."},

S6:{t:"mc", instr:"Município que opta por fiscalizar e cobrar o ITR fica com:",
  options:["100% da arrecadação, mantida a competência da União",
           "100% da arrecadação, adquirindo a competência do imposto",
           "50% da arrecadação, como na regra geral",
           "Nada — a opção só dispensa a fiscalização federal"],
  answer:0,
  why:"Transfere-se a capacidade tributária ativa, jamais a competência."},

S7:{t:"order", instr:"Ordene os repasses da União aos Estados, do menor percentual para o maior",
  items:["10% do IPI, proporcional às exportações","20% dos impostos residuais",
         "29% da CIDE-Combustíveis","30% do IOF sobre o ouro","100% do IRRF dos seus servidores"],
  why:"10 · 20 · 29 · 30 · 100 — a escada dos cinco repasses."},

S8:{t:"gap", instr:"Complete a entrega aos fundos (art. 159, I)",
  before:"A União entregará ",
  after:" do produto da arrecadação do imposto de renda e do IPI, na forma das alíneas do art. 159, I.",
  options:["50%","49%","25,5%"], answer:0,
  why:"21,5 + 22,5 + 3 + 1 + 1 + 1 fecha exatamente 50%."},

S9:{t:"match", instr:"Ligue cada parcela ao seu destino",
  pairs:[["21,5%","FPE — Fundo de Participação dos Estados e do DF"],
         ["22,5%","FPM — Fundo de Participação dos Municípios"],
         ["3%","Setor produtivo do Norte, Nordeste e Centro-Oeste"]],
  why:"Faltam ainda as três parcelas de 1% para o FPM."},

S10:{t:"multi", instr:"Marque os meses em que o FPM recebe as parcelas extras de 1%",
  options:["Julho","Setembro","Dezembro","Janeiro"],
  answers:[0,1,2],
  why:"Sempre no 1º decêndio do mês."},

S11:{t:"mc", instr:"Somadas todas as parcelas, o FPM recebe quanto do IR e do IPI?",
  options:["25,5%","22,5%","21,5%","24%"],
  answer:0,
  why:"22,5% mais três parcelas de 1% — contra 21,5% do FPE."},

S12:{t:"mc", instr:"Por que a União exclui do cálculo dos fundos a parcela do IR já pertencente aos entes?",
  options:["Para evitar que o mesmo valor seja repassado duas vezes",
           "Porque essa parcela é imune",
           "Porque o IRRF não integra a arrecadação federal",
           "Para compensar a perda da CIDE"],
  answer:0,
  why:"Art. 159, § 1º — o valor já saiu como IRRF integral."},

S13:{t:"sort", instr:"Quem faz o quê nos fundos de participação?",
  buckets:["Lei complementar","Tribunal de Contas da União"],
  items:[["Estabelecer normas sobre a entrega dos recursos",0],
         ["Efetuar o cálculo das quotas",1]],
  why:"Art. 161, II e parágrafo único."},

S14:{t:"multi", instr:"Marque o que o ESTADO repassa aos MUNICÍPIOS",
  options:["50% do IPVA dos veículos licenciados no território",
           "25% do ICMS",
           "25% dos 10% do IPI recebidos da União",
           "25% dos 29% da CIDE recebidos da União",
           "25% do ITCMD"],
  answers:[0,1,2,3],
  why:"O ITCMD não se reparte."},

S15:{t:"gap", instr:"Complete o critério do IPVA",
  before:"Pertencem aos Municípios 50% do IPVA relativo aos veículos automotores ",
  after:" em seus territórios.",
  options:["licenciados","fabricados","de proprietários domiciliados"], answer:0,
  why:"O critério é o licenciamento do veículo."},

S16:{t:"order", instr:"Ordene a cascata do IPI, do primeiro ao último passo",
  items:["A União arrecada o IPI",
         "A União repassa 10% aos Estados, proporcionalmente às exportações",
         "O Estado repassa 25% do que recebeu aos seus Municípios",
         "Sobre R$ 100.000 arrecadados, os Municípios recebem R$ 2.500"],
  why:"A mesma lógica vale para os 29% da CIDE-Combustíveis."},

S17:{t:"sort", instr:"Como se creditam os 25% do ICMS dos Municípios?",
  buckets:["No mínimo 65%","Até 35%"],
  items:[["Na proporção do valor adicionado realizado no território",0],
         ["Conforme lei estadual",1],
         ["Com no mínimo 10 pontos percentuais por indicadores de aprendizagem e equidade",1]],
  why:"A exigência dos 10 pontos veio com a EC 108/2020."},

S18:{t:"sort", instr:"Quem não reparte nada?",
  buckets:["Não reparta nada","Reparte"],
  items:[["Municípios",0],["Distrito Federal",0],
         ["União, quanto ao IR e ao IPI",1],["Estados, quanto ao ICMS e ao IPVA",1]],
  why:"O DF não reparte por não ser dividido em Municípios."},

S19:{t:"multi", instr:"Marque as hipóteses em que se pode condicionar a entrega dos recursos (art. 160, § 1º)",
  options:["Pagamento de créditos da União ou dos Estados, inclusive de suas autarquias",
           "Cumprimento da aplicação mínima em ações e serviços públicos de saúde",
           "Cumprimento do limite de despesa com pessoal da LRF",
           "Adesão a convênio de arrecadação"],
  answers:[0,1],
  why:"São só essas duas — a regra geral é a vedação absoluta à retenção."},

S20:{t:"wordbank", instr:"Monte a vedação do art. 160",
  target:["é","vedada","a","retenção","ou","qualquer","restrição","à","entrega","e","ao","emprego","dos","recursos"],
  extra:["salvo autorização legislativa","mediante convênio","por decreto do Executivo"],
  why:"Inclui adicionais e acréscimos relativos a impostos."},

S21:{t:"mc", instr:"As receitas dos Estados e Municípios destinadas à seguridade social:",
  options:["Constarão dos respectivos orçamentos, não integrando o orçamento da União",
           "Integram obrigatoriamente o orçamento da seguridade social da União",
           "São repassadas ao Fundo Nacional de Saúde",
           "São contabilizadas nos fundos de participação"],
  answer:0,
  why:"Art. 195, § 1º, da CF."},

S22:{t:"mc", instr:"Repartir o produto da arrecadação de um tributo significa:",
  options:["Dividir apenas a receita — a competência continua com quem instituiu",
           "Delegar a competência tributária ao ente beneficiado",
           "Transferir a titularidade do tributo",
           "Criar competência comum sobre o tributo"],
  answer:0,
  why:"Competência é indelegável; reparte-se só o dinheiro."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("A lógica da repartição e o que a União repassa",
      '<div class="box"><span class="bl">Por que se repartem impostos</span>'+
      '<p>Arts. <b>157, 158 e 159</b> da CF. O imposto é a espécie que <b>mais se adequa</b> ao mecanismo, porque sua arrecadação <b>não custeia atividade estatal específica</b> — é tributo não vinculado.</p>'+
      '<p class="mn"><em>A repartição é <b>exceção ao princípio da NÃO AFETAÇÃO</b> da receita de impostos.</em></p>'+
      '<p>Além dos impostos, a <b>CIDE-Combustíveis</b> também é repartida (art. 159, III) — e ela é <b>contribuição</b>, não imposto.</p></div>'+
      '<div class="box trap"><span class="bl">Quem reparte o quê</span>'+
      '<p><b>UNIÃO reparte:</b> IR · IPI · IOF-ouro · ITR · residuais.<br>'+
      '<b>UNIÃO não reparte:</b> <b>II · IE · IGF · IEG</b>.<br>'+
      '<b>ESTADOS repartem:</b> IPVA e ICMS. <b>Não repartem:</b> ITCMD.<br>'+
      '<b>MUNICÍPIOS:</b> nada — são o fim da linha. <b>DF:</b> nada, por não ser dividido em Municípios.</p></div>'+
      '<div class="box"><span class="bl">União → Estados e DF: cinco repasses</span>'+
      '<p><b>100%</b> do <b>IRRF</b> sobre rendimentos pagos por eles, suas <b>autarquias e fundações</b><br>'+
      '<b>20%</b> dos <b>impostos residuais</b>, se criados<br>'+
      '<b>10%</b> do <b>IPI</b>, proporcionalmente às <b>exportações</b> de industrializados<br>'+
      '<b>29%</b> da <b>CIDE-Combustíveis</b><br>'+
      '<b>30%</b> do <b>IOF sobre o ouro</b> (ativo financeiro ou instrumento cambial)</p></div>'+
      '<div class="box"><span class="bl">União → Municípios: três repasses</span>'+
      '<p><b>100%</b> do <b>IRRF</b> sobre rendimentos que pagarem, com autarquias e fundações<br>'+
      '<b>50%</b> do <b>ITR</b> dos imóveis do Município — <b>ou 100%</b> se ele <b>optar por fiscalizar e cobrar</b><br>'+
      '<b>70%</b> do <b>IOF-ouro</b>, conforme a origem da operação</p>'+
      '<p class="mn"><em><b>IOF-ouro: 30% Estados · 70% Municípios.</b> Não sobra nada para a União.</em></p></div>'+
      '<div class="box trap"><span class="bl">A pegadinha do IRRF</span>'+
      '<p>A norma alcança o ente, suas <b>AUTARQUIAS e FUNDAÇÕES</b>. A banca acrescenta <b>empresas públicas e sociedades de economia mista</b> — e a assertiva fica <b>errada</b>.</p>'+
      '<p>E cuidado com o ITR: a opção pela fiscalização transfere <b>capacidade tributária ativa</b>, <b>nunca a competência</b>, que segue da União.</p></div>')
  ],
  V2:[
    sl("Fundos de participação e repasses dos Estados",
      '<div class="box"><span class="bl">Art. 159, I — a União entrega 50% do IR e do IPI</span>'+
      '<p><b>21,5%</b> → <b>FPE</b> (Estados e DF)<br>'+
      '<b>22,5%</b> → <b>FPM</b> (Municípios)<br>'+
      '<b>3%</b> → setor produtivo do <b>Norte, Nordeste e Centro-Oeste</b><br>'+
      '<b>1%</b> → FPM, <b>1º decêndio de JULHO</b><br>'+
      '<b>1%</b> → FPM, <b>1º decêndio de SETEMBRO</b><br>'+
      '<b>1%</b> → FPM, <b>1º decêndio de DEZEMBRO</b></p>'+
      '<p class="mn"><em>Somando: <b>FPE 21,5%</b> · <b>FPM 25,5%</b>. E 21,5 + 22,5 + 3 + 3 = <b>50%</b>.</em></p></div>'+
      '<div class="box tip"><span class="bl">Dois detalhes que caem</span>'+
      '<p><b>§ 1º:</b> a União <b>exclui do cálculo</b> a parcela do IR que já pertence aos entes sobre rendimentos <b>por eles pagos</b> — senão o mesmo valor iria duas vezes.</p>'+
      '<p><b>Art. 161:</b> as normas de entrega são de <b>LEI COMPLEMENTAR</b>; o <b>cálculo das quotas</b> é feito pelo <b>TCU</b>.</p></div>'+
      '<div class="box"><span class="bl">Estados → Municípios: quatro repasses</span>'+
      '<p><b>50%</b> do <b>IPVA</b> dos veículos <b>LICENCIADOS</b> no território<br>'+
      '<b>25%</b> do <b>ICMS</b><br>'+
      '<b>25% dos 10%</b> do <b>IPI</b> recebidos da União<br>'+
      '<b>25% dos 29%</b> da <b>CIDE</b> recebidos da União</p>'+
      '<p class="mn"><em>Cascata: IPI de R$ 100.000 → R$ 10.000 ao Estado → <b>R$ 2.500</b> aos Municípios.</em></p></div>'+
      '<div class="box trap"><span class="bl">Como se creditam os 25% do ICMS</span>'+
      '<p><b>No mínimo 65%</b> na proporção do <b>valor adicionado</b> realizado nos territórios.</p>'+
      '<p><b>Até 35%</b> conforme <b>lei estadual</b>, observada obrigatoriamente a distribuição de <b>no mínimo 10 pontos percentuais</b> segundo indicadores de <b>melhoria nos resultados de aprendizagem e aumento da equidade</b> (EC 108/2020).</p></div>'),
    sl("Vedação à retenção e dispositivos finais",
      '<div class="box"><span class="bl">Art. 160 — a regra</span>'+
      '<p>É <b>vedada a retenção ou qualquer restrição</b> à entrega e ao emprego dos recursos atribuídos a Estados, DF e Municípios, <b>compreendidos adicionais e acréscimos</b> relativos a impostos.</p></div>'+
      '<div class="box tip"><span class="bl">§ 1º — as duas exceções</span>'+
      '<p>A União e os Estados <b>podem condicionar</b> a entrega:</p>'+
      '<p><b>I —</b> ao <b>pagamento de seus créditos</b>, inclusive os de suas autarquias;<br>'+
      '<b>II —</b> à aplicação do <b>mínimo constitucional em ações e serviços de saúde</b> (art. 198, § 2º, II e III).</p></div>'+
      '<div class="box"><span class="bl">§ 2º — EC 113/2021</span>'+
      '<p>Contratos, acordos, ajustes, convênios, parcelamentos e renegociações de débitos firmados pela União com os entes conterão cláusula autorizando a <b>dedução dos valores devidos</b> das cotas nos <b>Fundos de Participação</b> ou dos <b>precatórios federais</b>.</p></div>'+
      '<div class="box"><span class="bl">Art. 195, § 1º</span>'+
      '<p>As receitas de Estados, DF e Municípios <b>destinadas à seguridade social</b> constarão dos <b>respectivos orçamentos</b>, <b>não integrando o orçamento da União</b>.</p></div>'+
      '<div class="box trap"><span class="bl">O que a repartição NÃO faz</span>'+
      '<p>Repartir receita <b>não transfere competência</b>. Quem instituiu o tributo continua sendo o titular; divide-se apenas o <b>produto da arrecadação</b>. Junto com a atribuição de competência, a repartição forma a <b>discriminação constitucional de rendas</b>, ligada à <b>cláusula pétrea</b> da forma federativa.</p></div>'+
      '<div class="box trap"><span class="bl">Reforma tributária — EC 132/2023</span>'+
      '<p>A emenda <b>alterou os arts. 158 e 159</b>, desenhou repartições próprias para o <b>Imposto Seletivo</b> e criou, para o <b>IBS</b>, mecanismo próprio de distribuição operado pelo <b>Comitê Gestor</b>, com transição longa.</p>'+
      '<p>O resumo de origem é de antes da emenda. As estruturas deste módulo seguem válidas, mas <b>confira cada percentual na redação atual da CF</b> antes da prova — é justamente aqui que a desatualização custa questão.</p></div>')
  ]
};

var TEC = [
  ["Caderno CEBRASPE — Direito Tributário 04","https://www.tecconcursos.com.br/s/Q2fk0C","Q2fk0C"],
  ["Caderno FCC — Direito Tributário 04","https://www.tecconcursos.com.br/s/Q2fk0b","Q2fk0b"],
  ["Caderno FGV — Direito Tributário 04","https://www.tecconcursos.com.br/s/Q2fk0n","Q2fk0n"],
  ["Caderno VUNESP — Direito Tributário 04","https://www.tecconcursos.com.br/s/Q2glVH","Q2glVH"]
];
var TECNOTA = "Priorize o caderno da FGV — banca do último certame da Receita Federal. Este é o módulo mais numérico do Direito Tributário: praticamente toda questão se resolve sabendo um percentual e a quem ele se destina. Vale fazer os flashcards em voz alta até os números saírem sem hesitação, e prestar atenção nas duas pegadinhas campeãs — empresas públicas e sociedades de economia mista fora da regra dos 100% do IRRF, e a inversão do IOF-ouro (30% Estados, 70% Municípios). ATENÇÃO À DATA: o resumo de origem é anterior à EC 132/2023, que alterou os arts. 158 e 159 e criou regras próprias para o Imposto Seletivo e para a distribuição do IBS. Confira os percentuais na redação vigente antes da prova — num módulo de números, é aqui que a desatualização custa caro.";

var UNITS = [
  {n:1, title:"A lógica da repartição e os repasses da União", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Quem reparte o quê, e para quem", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · o que se reparte e o que não",  xp:25, data:["S1","S2","T0","T1","T2","T3","T4","T5","T6","T7","T8"]},
    {id:"K3", type:"drill",  title:"Praticar · União → Estados e DF",          xp:25, data:["S3","S4","S5","S7","T9","T10","T11","T12","T13","T14"]},
    {id:"K4", type:"drill",  title:"Praticar · União → Municípios",            xp:25, data:["S6","T15","T16","T17","T18"]},
    {id:"K5", type:"flash",  title:"Flashcards · repasses da União",           xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]}
  ]},
  {n:2, title:"Fundos de participação", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Os 50% do IR e do IPI, e os repasses estaduais", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · FPE, FPM e as parcelas de 1%",  xp:25, data:["S8","S9","S10","S11","T19","T20","T21","T22","T23"]},
    {id:"K8", type:"drill",  title:"Praticar · exclusão do cálculo e o TCU",   xp:25, data:["S12","S13","T24","T25","T26"]},
    {id:"K9", type:"flash",  title:"Flashcards · fundos de participação",      xp:15, data:[22,23,24,25,26,27,28]}
  ]},
  {n:3, title:"Estados para Municípios", cvar:"u3", lessons:[
    {id:"K10",type:"drill",  title:"Praticar · IPVA, ICMS e as cascatas",      xp:25, data:["S14","S15","S16","T27","T28","T29","T30","T31","T32"]},
    {id:"K11",type:"drill",  title:"Praticar · critérios do ICMS e quem nada reparte", xp:25, data:["S17","S18","T33","T34"]},
    {id:"K12",type:"flash",  title:"Flashcards · repasses estaduais",          xp:15, data:[29,30,31,32,33,34,35,36]}
  ]},
  {n:4, title:"Vedação à retenção e dispositivos finais", cvar:"u4", lessons:[
    {id:"K13",type:"drill",  title:"Praticar · art. 160 e suas exceções",      xp:25, data:["S19","S20","T35","T36","T37","T38","T39"]},
    {id:"K14",type:"drill",  title:"Praticar · seguridade, competência e reforma", xp:25, data:["S21","S22","T40","T41","T42","T43"]},
    {id:"K15",type:"flash",  title:"Flashcards · dispositivos finais",         xp:15, data:[37,38,39,40,41,42,43]}
  ]},
  {n:5, title:"Fixação", cvar:"u5", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                  xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                    xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                   xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 04 de Direito Tributário (Radegondes) ---------- */
var COM={
0:"<p>Frase de abertura do resumo: <b>“conforme os artigos 157, 158 e 159 da Constituição...”</b>. São os três que organizam todo o tema.</p><p>Divida assim: <b>157</b> União→Estados · <b>158</b> União→Municípios e Estados→Municípios · <b>159</b> fundos e CIDE.</p><p class='fb-fonte'>Resumo 04 · <i>Repartição das Receitas Tributárias</i></p>",
1:"<p>A razão que o resumo dá: <b>os impostos são a espécie que mais se adequa ao mecanismo de repartição, já que os recursos arrecadados não são utilizados para custear nenhuma atividade estatal específica</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Repartição das Receitas Tributárias</i></p>",
2:"<p>Do resumo: <b>“embora os impostos estejam sujeitos ao princípio da não afetação, a repartição constitucional das receitas tributárias constitui EXCEÇÃO a esse princípio”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Repartição das Receitas Tributárias</i></p>",
3:"<p>Ressalva do resumo: <b>“além dos impostos, a CIDE-Combustíveis também tem parte de sua arrecadação dividida com os Estados, DF e Municípios”</b> — CF, art. 159, III, c/c §4º.</p><p class='fb-fonte'>Resumo 04 · <i>Repartição das Receitas Tributárias</i></p>",
4:"<p>Quadro do resumo — impostos que <b>possuem</b> receitas repartidas:</p><ul><li><b>União</b>: IR · IOF sobre o ouro · impostos residuais · ITR · IPI</li><li><b>Estados</b>: IPVA · ICMS</li><li><b>Municípios</b>: não possuem receitas repartidas</li></ul><p class='fb-fonte'>Resumo 04 · <i>Impostos com receitas repartidas</i></p>",
5:"<p>No quadro final do resumo, os que <b>NÃO</b> se repartem na União são <b>II, IE, IGF e IEG</b>.</p><p>Repare na lógica: são justamente os extrafiscais de guerra e de emergência, mais o IGF, que nunca foi criado.</p><p class='fb-fonte'>Resumo 04 · <i>Impostos cujas receitas não são repartidas</i></p>",
6:"<p>Mesmo quadro: nos Estados, o que <b>não</b> se reparte é o <b>ITCMD</b>. Só IPVA e ICMS descem para os Municípios.</p><p class='fb-fonte'>Resumo 04 · <i>Impostos cujas receitas não são repartidas</i></p>",
7:"<p>Quadro do resumo, na linha dos Municípios: <b>“TODOS”</b> — nenhum imposto municipal tem receita repartida.</p><p class='fb-fonte'>Resumo 04 · <i>Impostos cujas receitas não são repartidas</i></p>",
8:"<p>Caixa <b>ATENÇÃO!</b> do resumo: <b>“o Distrito Federal, por não ser dividido em Municípios, não tem suas receitas tributárias repartidas”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Impostos com receitas repartidas — Atenção!</i></p>",
9:"<p>Forma 1 das cinco da União para os Estados/DF: <b>100% do IR sobre os rendimentos pagos pelos Estados/DF, suas autarquias e fundações</b>.</p><p>A caixa ATENÇÃO! do resumo explica o porquê: é o IRRF sobre a remuneração dos servidores, e <b>o produto pertence a quem paga a remuneração</b>.</p><p class='fb-fonte'>Resumo 04 · <i>União → Estados/DF</i></p>",
10:"<p>É a caixa <b>PEGADINHA</b> do resumo, com esse enunciado exato: <b>“as bancas vão dizer que a União transferirá 100% do IR sobre os rendimentos pagos pelos Estados ou Municípios, suas autarquias, fundações, EMPRESAS PÚBLICAS E SOCIEDADES DE ECONOMIA MISTA. (ERRADO)”</b>.</p><p>A norma alcança só <b>autarquias e fundações</b>.</p><p class='fb-fonte'>Resumo 04 · <i>União → Estados/DF — Pegadinha</i></p>",
11:"<p>Forma 2 das cinco: <b>20% dos impostos residuais (se criados)</b>.</p><p>O parêntese é do resumo — nunca foram instituídos, mas a regra existe e cai.</p><p class='fb-fonte'>Resumo 04 · <i>União → Estados/DF</i></p>",
12:"<p>Forma 3: <b>10% do IPI proporcionalmente às exportações de produtos industrializados pelos Estados/DF</b>.</p><p>Guarde o “proporcionalmente às exportações” — e lembre que esses 10% ainda descem 25% para os Municípios.</p><p class='fb-fonte'>Resumo 04 · <i>União → Estados/DF</i></p>",
13:"<p>Forma 4: <b>29% da CIDE-Combustível</b>.</p><p>É o único caso do quadro que não é imposto, e por isso aparece na ressalva do início do resumo.</p><p class='fb-fonte'>Resumo 04 · <i>União → Estados/DF</i></p>",
14:"<p>Esquema <b>IOF SOBRE O OURO</b> do resumo: <b>30% para os Estados · 70% para os Municípios</b>.</p><p>O enunciado inverteu. Decore pelo tamanho: o Município, que é onde a operação acontece, fica com a fatia maior.</p><p class='fb-fonte'>Resumo 04 · <i>IOF sobre o ouro</i></p>",
15:"<p>Do resumo: <b>“há 03 formas de repartição tributária da União para os Municípios”</b> — 100% do IRRF, 50% do ITR e 70% do IOF-ouro.</p><p>Contraste com as <b>05</b> formas da União para os Estados/DF.</p><p class='fb-fonte'>Resumo 04 · <i>União → Municípios</i></p>",
16:"<p>Forma 2 das três: <b>50% do ITR relativos aos imóveis do município</b>, com a ressalva que o próprio resumo põe entre parênteses.</p><p class='fb-fonte'>Resumo 04 · <i>União → Municípios</i></p>",
17:"<p>A ressalva, nas palavras do resumo: <b>“os municípios poderão arrecadar 100% do ITR se optarem por fiscalizá-lo e cobrá-lo”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>União → Municípios</i></p>",
18:"<p>O que a opção transfere é a <b>capacidade tributária ativa</b> — fiscalizar e cobrar. A <b>competência</b> para instituir o ITR continua da União e é <b>indelegável</b> pelo art. 7º do CTN.</p><p class='fb-fonte'>Resumo 04 · <i>União → Municípios</i> + <i>Resumo 03 · Competência × Capacidade</i></p>",
19:"<p>Esquema do <b>art. 159, I</b>: <b>“a União entregará 50% do produto da arrecadação do IR e do IPI”</b>, distribuídos nas seis linhas do quadro — 21,5% + 22,5% + 3% + 1% + 1% + 1%.</p><p class='fb-fonte'>Resumo 04 · <i>União → Fundos de Participação</i></p>",
20:"<p>Observação 2 do resumo: <b>“note que o FPE recebe 21,5% e o FPM recebe 25,5% da arrecadação do IR e do IPI”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Fundos — Observação 2</i></p>",
21:"<p>O quadro mostra <b>22,5%</b> na linha principal do FPM, mas a observação 2 soma tudo: <b>o FPM recebe 25,5%</b> — 22,5% mais as três parcelas de 1% (julho, setembro e dezembro).</p><p>A banca cobra a linha isolada esperando que você esqueça as parcelas adicionais.</p><p class='fb-fonte'>Resumo 04 · <i>Fundos — Observação 2</i></p>",
22:"<p>Terceira linha do quadro: <b>3% ao setor produtivo das Regiões Norte, Nordeste e Centro-Oeste</b>.</p><p class='fb-fonte'>Resumo 04 · <i>União → Fundos de Participação</i></p>",
23:"<p>As três últimas linhas do quadro do resumo: <b>1% ao FPM no 1º decêndio de julho</b>, <b>1% no 1º decêndio de setembro</b> e <b>1% no 1º decêndio de dezembro</b>.</p><p class='fb-fonte'>Resumo 04 · <i>União → Fundos de Participação</i></p>",
24:"<p>Observação 1 do resumo: ao entregar recursos ao FPE, a União <b>excluirá do cálculo a parcela da arrecadação do IR pertencente a Estados, DF e Municípios sobre rendimentos pagos por eles, suas autarquias e fundações</b> (art. 159, §1º).</p><p>Sem isso, o mesmo dinheiro seria repassado duas vezes.</p><p class='fb-fonte'>Resumo 04 · <i>Fundos — Observação 1</i></p>",
25:"<p>Observação 3 do resumo: <b>“cabe à Lei Complementar estabelecer normas sobre a entrega dos recursos para os Fundos de Participação”</b> — CF, art. 161, II.</p><p class='fb-fonte'>Resumo 04 · <i>Fundos — Observação 3</i></p>",
26:"<p>É o parágrafo único do art. 161: o <b>TCU</b> efetua o cálculo das quotas referentes aos fundos de participação.</p><p class='fb-fonte off'>Não consta do Resumo 04 — ele para na observação 3 sobre a lei complementar</p>",
27:"<p>Do resumo: <b>“há 04 formas de repartição tributária do Estado para os Municípios”</b> — 50% do IPVA, 25% do ICMS, 25% dos 10% do IPI e 25% dos 29% da CIDE.</p><p class='fb-fonte'>Resumo 04 · <i>Estados → Municípios</i></p>",
28:"<p>Forma 1 das quatro: <b>50% do IPVA dos veículos LICENCIADOS em seu território</b>.</p><p>O critério é o <b>licenciamento</b>, e é aí que a banca troca por “domicílio do proprietário”.</p><p class='fb-fonte'>Resumo 04 · <i>Estados → Municípios</i></p>",
29:"<p>Forma 2: <b>25% do ICMS</b>. É a maior transferência estadual, e o resumo dedica um quadro só aos critérios de crédito desses 25%.</p><p class='fb-fonte'>Resumo 04 · <i>Estados → Municípios</i></p>",
30:"<p>Forma 3: <b>25% dos 10% que os Estados receberam da União a título de IPI</b>.</p><p>A OBS do resumo lembra: esses 10% são <b>proporcionais às exportações</b> de produtos industrializados pelo Estado.</p><p class='fb-fonte'>Resumo 04 · <i>Estados → Municípios</i></p>",
31:"<p>Forma 4: <b>25% dos 29% que os Estados receberam da União a título de CIDE-Combustível</b>.</p><p>Mesma lógica em cascata da forma 3.</p><p class='fb-fonte'>Resumo 04 · <i>Estados → Municípios</i></p>",
32:"<p>É o <b>EXEMPLO</b> do resumo, com os mesmos números: a União transfere <b>10% de R$ 100.000 = R$ 10.000</b> ao Estado; o Estado transfere <b>25% desses R$ 10.000 = R$ 2.500</b> aos Municípios.</p><p class='fb-fonte'>Resumo 04 · <i>Estados → Municípios — exemplo</i></p>",
33:"<p>Quadro do <b>art. 158, parágrafo único</b>: dos 25% do ICMS, <b>65%, no mínimo, na proporção do valor adicionado</b> realizado em seus territórios.</p><p class='fb-fonte'>Resumo 04 · <i>Critérios de crédito do ICMS</i></p>",
34:"<p>Segunda linha do mesmo quadro: <b>até 35%, de acordo com o que dispuser lei estadual, observada obrigatoriamente a distribuição de, no mínimo, 10 pontos percentuais</b>.</p><p>Os 10 pontos vinculados a indicadores de aprendizagem vieram com a <b>EC 108/2020</b> — o resumo registra o mínimo, sem citar a emenda.</p><p class='fb-fonte'>Resumo 04 · <i>Critérios de crédito do ICMS</i></p>",
35:"<p>É o <b>art. 160</b> da CF: vedada a retenção ou qualquer restrição à entrega e ao emprego dos recursos atribuídos aos Estados, DF e Municípios, <b>neles compreendidos adicionais e acréscimos relativos a impostos</b>.</p><p class='fb-fonte off'>Não consta do Resumo 04 — confira o art. 160 na Constituição</p>",
36:"<p>Primeira exceção do art. 160, parágrafo único: a União e os Estados podem condicionar a entrega ao <b>pagamento de seus créditos, inclusive de suas autarquias</b>.</p><p class='fb-fonte off'>Não consta do Resumo 04</p>",
37:"<p>Segunda exceção do art. 160, parágrafo único: condicionar ao <b>cumprimento da aplicação mínima em ações e serviços públicos de saúde</b> (art. 198, §2º, II e III).</p><p class='fb-fonte off'>Não consta do Resumo 04</p>",
38:"<p>Não é absoluta: o parágrafo único do art. 160 traz <b>duas</b> exceções — pagamento de créditos e aplicação mínima em saúde.</p><p class='fb-fonte off'>Não consta do Resumo 04</p>",
39:"<p>É o §2º do art. 160, acrescido pela EC 113/2021: os contratos e renegociações de débitos com a União conterão cláusula autorizando a <b>dedução dos valores devidos das cotas nos fundos de participação ou dos precatórios federais</b>.</p><p class='fb-fonte off'>Não consta do Resumo 04</p>",
40:"<p>Art. 195, §1º, da CF: as receitas dos Estados, DF e Municípios destinadas à seguridade social <b>constarão dos respectivos orçamentos e NÃO integram o orçamento da União</b>.</p><p class='fb-fonte off'>Não consta do Resumo 04</p>",
41:"<p>Reparte-se o <b>produto da arrecadação</b>, não a competência. Como o Resumo 03 fixa, a competência tributária é <b>indelegável</b> (art. 7º do CTN) — o Estado que recebe 20% do imposto residual não passa a poder instituí-lo.</p><p class='fb-fonte'>Resumo 03 · <i>Competência Tributária</i></p>",
42:"<p>“Discriminação constitucional de rendas” é o nome doutrinário que junta as duas metades: a <b>atribuição de competência</b> (Resumo 03) e a <b>repartição de receitas</b> (este resumo).</p><p class='fb-fonte off'>O termo não aparece no Resumo 04, mas as duas metades que ele nomeia, sim</p>",
43:"<p>A <b>EC 132/2023</b> mexeu nos arts. 158 e 159 e criou regras próprias de distribuição para o <b>IBS</b> e para o <b>Imposto Seletivo</b>.</p><p class='fb-fonte off'>Não consta do Resumo 04 — o resumo é anterior à reforma tributária</p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"04", nome:"Repartição das receitas tributárias", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
