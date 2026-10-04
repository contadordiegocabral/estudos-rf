/* Direito Tributário — Módulo 11: Exclusão do crédito tributário — isenção e anistia (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dtrib11 = (function(){
"use strict";

var CARDS = [
  ["O que é a exclusão do crédito tributário?","A situação em que a lei <b>IMPEDE O LANÇAMENTO</b> — o crédito <b>nem chega a ser constituído</b>. São duas hipóteses: <b>isenção</b> e <b>anistia</b> (art. 175)."],
  ["Onde a exclusão entra na cadeia?","<b>Hipótese de incidência → fato gerador → obrigação tributária → ISENÇÃO ou ANISTIA → (não há lançamento).</b> A obrigação chega a nascer; o crédito é que não se forma."],
  ["Isenção × anistia: qual a distinção básica?","<b>ISENÇÃO exclui o TRIBUTO. ANISTIA exclui a MULTA</b> (penalidade). O que muda é a obrigação excluída."],
  ["A exclusão dispensa as obrigações acessórias?","<b>NÃO</b> (art. 175, parágrafo único). Ainda que não se pague a obrigação principal, <b>a acessória subsiste</b> — o isento continua escriturando e declarando."],
  ["Como se interpreta a legislação sobre exclusão?","<b>LITERALMENTE</b> (art. 111) — assim como a suspensão e a outorga de isenção. A <b>extinção NÃO</b> está nessa lista."],

  ["O que é ISENÇÃO?","A <b>dispensa legal do pagamento de tributo devido</b> — decisão política, típico <b>benefício ou incentivo fiscal</b>."],
  ["A isenção pode decorrer de contrato?","<b>NÃO.</b> “<b>Ainda quando prevista em contrato, é sempre decorrente de LEI</b>” (art. 176) — lei que especifique condições, requisitos, tributos alcançados e, sendo caso, o prazo de duração."],
  ["A isenção exige lei específica?","<b>SIM</b> — o <b>art. 150, § 6º, da CF</b> exige <b>lei específica</b> que regule exclusivamente a isenção ou o correspondente tributo. Município que queira isentar do IPTU deve editar lei sobre isenção ou sobre o IPTU."],
  ["A isenção pode ser restrita a uma região?","<b>SIM</b> (art. 176, parágrafo único) — a <b>determinada região do território da entidade tributante</b>, em função de <b>condições a ela peculiares</b>."],
  ["A isenção alcança taxas e contribuições de melhoria? (art. 177)","<b>NÃO</b>, <b>salvo disposição de lei em contrário</b>."],
  ["Por que a isenção não alcança taxas e contribuições de melhoria?","Porque são tributos de <b>caráter CONTRAPRESTACIONAL</b>: há uma atividade estatal que justifica a cobrança. Seria estranho prestar o serviço e não tributá-lo."],
  ["A isenção alcança tributos criados depois? (art. 177, II)","<b>NÃO</b>, <b>salvo disposição de lei em contrário</b> — não é extensiva aos <b>tributos instituídos posteriormente à sua concessão</b>."],
  ["Isento de IPTU precisa pagar a taxa de coleta de lixo?","<b>SIM</b> — salvo disposição de lei em contrário, a isenção <b>não é extensiva às taxas</b> (art. 177, I)."],
  ["A isenção pode ser revogada? (art. 178)","<b>SIM, a qualquer tempo, por lei</b> — <b>SALVO</b> se concedida <b>por PRAZO CERTO</b> e <b>em função de determinadas CONDIÇÕES</b>."],
  ["O que são ISENÇÕES ONEROSAS?","As concedidas <b>por prazo certo E em função de condições</b>. Elas <b>NÃO podem ser livremente revogadas ou modificadas</b> por lei."],
  ["O que é isenção com PRAZO CERTO?","Aquela em que a lei concessiva estabelece um <b>período determinado</b> de fruição do benefício — dois anos, cinco anos."],
  ["O que é isenção CONDICIONADA?","Aquela em que a lei exige do contribuinte uma <b>contraprestação</b> como condição para gozar do incentivo — construir, produzir, empregar."],
  ["Isenção de IPTU por 5 anos sob condição de produzir artesanato regional pode ser suprimida?","<b>NÃO</b>, dentro dos 5 anos, <b>desde que o contribuinte cumpra a condição</b>. É isenção onerosa."],
  ["Quando entra em vigor a lei que extingue ou reduz isenção?","No <b>primeiro dia do exercício seguinte</b> à publicação (art. 104, III), <b>salvo se a lei dispuser de maneira mais favorável</b> ao contribuinte."],
  ["O que é isenção em caráter INDIVIDUAL? (art. 179)","Aquela restrita a <b>determinadas pessoas</b> que preencham requisitos legais. É <b>efetivada por DESPACHO da autoridade administrativa</b>, em requerimento no qual o interessado <b>faça PROVA</b> do preenchimento das condições."],
  ["Exemplo de isenção individual","A <b>isenção de imposto de renda para pessoas com deficiência</b>: o beneficiário precisa <b>comprovar</b> a condição para obter o despacho."],
  ["Tributo lançado por período certo: o que ocorre com a isenção individual? (art. 179, § 1º)","O despacho deve ser <b>RENOVADO antes da expiração de cada período</b>; não sendo, os efeitos <b>cessam automaticamente</b> a partir do <b>primeiro dia do período</b> para o qual o interessado deixou de promover a renovação."],
  ["O despacho que concede isenção individual gera direito adquirido?","<b>NÃO</b> — aplica-se, quando cabível, o <b>art. 155</b> (art. 179, § 2º), o mesmo regime de revogação da moratória individual."],

  ["O que é ANISTIA?","O <b>PERDÃO DE INFRAÇÕES</b> — exclui a <b>penalidade</b>, não o tributo."],
  ["Que infrações a anistia abrange? (art. 180)","<b>EXCLUSIVAMENTE as cometidas ANTERIORMENTE à vigência da lei</b> que a concede."],
  ["Por que a anistia não alcança infrações futuras?","Porque perdoar infração posterior à lei seria <b>estímulo à sua prática</b>. A anistia olha só para trás."],
  ["A que a anistia NÃO se aplica? (art. 180)","<b>I)</b> aos atos <b>qualificados em lei como CRIMES ou CONTRAVENÇÕES</b>, e aos praticados com <b>DOLO, FRAUDE ou SIMULAÇÃO</b> pelo sujeito passivo ou por terceiro em benefício dele; <b>II)</b> <b>salvo disposição em contrário</b>, às infrações resultantes de <b>CONLUIO</b> entre duas ou mais pessoas."],
  ["Qual a diferença entre os incisos I e II do art. 180?","O <b>inciso I é vedação ABSOLUTA</b> (crimes, contravenções, dolo, fraude e simulação). O <b>inciso II admite ressalva</b>: o conluio pode ser anistiado se houver <b>disposição em contrário</b>."],
  ["Como pode ser concedida a anistia? (art. 181)","<b>I)</b> em <b>caráter GERAL</b>; <b>II)</b> <b>limitadamente</b>, nas quatro hipóteses das alíneas."],
  ["Quais as quatro limitações do art. 181, II?","<b>a)</b> às infrações da legislação relativa a <b>determinado tributo</b>; <b>b)</b> às infrações punidas com penalidades pecuniárias <b>até determinado montante</b>, conjugadas ou não com penalidades de outra natureza; <b>c)</b> a <b>determinada região</b> do território, por condições peculiares; <b>d)</b> <b>sob condição do pagamento de tributo no prazo</b> fixado pela lei ou pela autoridade a quem a lei atribuir essa fixação."],
  ["O que é anistia em caráter INDIVIDUAL? (art. 182)","A não concedida em caráter geral, <b>efetivada em cada caso por DESPACHO da autoridade</b>, em requerimento no qual o interessado <b>faça prova</b> do preenchimento das condições e requisitos legais."],
  ["O despacho de anistia individual gera direito adquirido?","<b>NÃO</b> (art. 182, parágrafo único) — aplica-se o <b>art. 155</b>: será <b>revogado de ofício</b> se o beneficiado não satisfazia ou deixou de satisfazer as condições, cobrando-se o crédito <b>com juros de mora</b>, e <b>com penalidade</b> em caso de <b>dolo ou simulação</b>."],
  ["Exemplo de revogação de anistia individual","Estado concede anistia regional; o contribuinte requer e comprova os requisitos; depois se verifica o <b>descumprimento das condições</b> → a anistia é <b>revogada de ofício</b>."],

  ["Qual a divergência doutrinária sobre anistia e remissão?","<b>MAJORITÁRIA:</b> antes do lançamento, tributo → <b>isenção</b> e multa → <b>anistia</b>; depois do lançamento, <b>tudo é REMISSÃO</b>.<br><b>MINORITÁRIA</b> (Luciano Amaro): depois do lançamento, tributo → remissão e multa → <b>ANISTIA</b>; a remissão alcançaria só tributos."],
  ["Qual corrente adotar em prova?","A <b>MAJORITÁRIA</b>, salvo se o enunciado indicar a doutrina de Luciano Amaro: <b>depois do lançamento, a dispensa é REMISSÃO</b>, seja de tributo ou de multa."],
  ["Compare isenção, anistia e remissão","<b>ISENÇÃO:</b> afasta o <b>tributo</b>, antes do lançamento → exclusão. <b>ANISTIA:</b> afasta a <b>multa</b>, antes do lançamento → exclusão. <b>REMISSÃO:</b> perdoa o crédito <b>já constituído</b> → extinção."],
  ["Compare os três regimes do crédito","<b>SUSPENSÃO (art. 151):</b> o Estado fica <b>temporariamente impedido</b> de cobrar. <b>EXTINÇÃO (art. 156):</b> crédito e débito são <b>satisfeitos</b>. <b>EXCLUSÃO (art. 175):</b> o <b>lançamento nem chega a ser realizado</b>."],
  ["Quais os mnemônicos dos três regimes?","<b>Suspensão: DEMORE a LIMPAR</b> (depósito, moratória, reclamações e recursos, liminar, parcelamento). <b>Exclusão: ISA</b> (isenção e anistia). A extinção não tem mnemônico — são onze hipóteses do art. 156."],
  ["Isenção e anistia dependem do quê para serem concedidas?","De <b>LEI ESPECÍFICA</b> (art. 150, § 6º, da CF), que regule exclusivamente a matéria ou o correspondente tributo. Vale para todo benefício fiscal."],
  ["Reforma tributária: muda algo aqui?","A <b>EC 132/2023 não alterou os arts. 175 a 182</b> do CTN. Mas a emenda criou <b>regimes diferenciados e específicos</b> próprios para o IBS e a CBS, com sua lógica de benefícios — confira na redação atual antes da prova."]
];

var QS = [
  ["Excluem o crédito tributário a isenção e a anistia.","C","CTN art. 175","São as duas únicas hipóteses de exclusão."],
  ["A exclusão do crédito tributário impede a constituição do crédito pelo lançamento.","C","FCC","Por isso o lançamento nem chega a ser realizado."],
  ["A exclusão do crédito tributário dispensa o cumprimento das obrigações acessórias dependentes da obrigação principal.","E","CTN art. 175 p.ú.","Não dispensa — a acessória subsiste."],
  ["A isenção exclui o tributo e a anistia exclui a penalidade.","C","FGV","É a distinção básica entre os dois institutos."],
  ["Interpreta-se literalmente a legislação tributária que disponha sobre exclusão do crédito tributário.","C","CTN art. 111","Ao lado da suspensão e da outorga de isenção."],
  ["A isenção, quando prevista em contrato, dispensa a edição de lei.","E","CTN art. 176","“Ainda quando prevista em contrato, é sempre decorrente de LEI.”"],
  ["A lei concessiva de isenção especificará as condições e requisitos exigidos, os tributos a que se aplica e, sendo caso, o prazo de sua duração.","C","CTN art. 176","Requisitos formais da lei isentiva."],
  ["A isenção pode ser restrita a determinada região do território da entidade tributante, em função de condições a ela peculiares.","C","CTN art. 176 p.ú.","Não há vício de isonomia nessa delimitação."],
  ["A concessão de isenção pode ser feita por lei genérica que trate de diversas matérias.","E","CF art. 150 § 6º","Exige-se lei específica que regule exclusivamente a matéria ou o tributo."],
  ["Salvo disposição de lei em contrário, a isenção não é extensiva às taxas e às contribuições de melhoria.","C","CTN art. 177 I","São tributos de caráter contraprestacional."],
  ["A isenção é automaticamente extensiva aos tributos instituídos posteriormente à sua concessão.","E","CTN art. 177 II","Não é extensiva, salvo disposição de lei em contrário."],
  ["Contribuinte isento de IPTU por lei municipal está igualmente dispensado da taxa de coleta de resíduos sólidos.","E","FGV","Salvo disposição de lei em contrário, a isenção não alcança taxas."],
  ["A isenção pode ser revogada ou modificada por lei a qualquer tempo, salvo se concedida por prazo certo e em função de determinadas condições.","C","CTN art. 178","São as chamadas isenções onerosas."],
  ["Isenções onerosas são aquelas concedidas por prazo certo e em função de determinadas condições, não podendo ser livremente suprimidas.","C","FCC","Protegem a confiança do contribuinte que cumpriu a condição."],
  ["Isenção de IPTU concedida por cinco anos sob condição de uso do imóvel para produção de artesanato pode ser suprimida a qualquer tempo por nova lei.","E","FGV","É isenção onerosa — não pode ser suprimida no prazo, cumprida a condição."],
  ["Os dispositivos de lei que extinguem ou reduzem isenções entram em vigor no primeiro dia do exercício seguinte à sua publicação, salvo disposição mais favorável ao contribuinte.","C","CTN art. 104 III","Proteção equivalente à anterioridade."],
  ["A isenção não concedida em caráter geral é efetivada por despacho da autoridade administrativa, em requerimento no qual o interessado faça prova do preenchimento das condições.","C","CTN art. 179","É a isenção individual."],
  ["A isenção individual independe de requerimento do interessado, sendo reconhecida de ofício pela autoridade.","E","CEBRASPE","Exige requerimento com prova do preenchimento dos requisitos."],
  ["Tratando-se de tributo lançado por período certo de tempo, o despacho que concede isenção individual deve ser renovado antes da expiração de cada período.","C","CTN art. 179 § 1º","Casos do IPTU e do IPVA."],
  ["Não renovado o despacho, os efeitos da isenção individual cessam automaticamente a partir do primeiro dia do período para o qual o interessado deixou de promover a continuidade do reconhecimento.","C","CTN art. 179 § 1º","Cessação automática, sem necessidade de ato do Fisco."],
  ["O despacho que concede isenção em caráter individual gera direito adquirido ao beneficiado.","E","CTN art. 179 § 2º","Não gera — aplica-se, quando cabível, o art. 155."],
  ["A anistia abrange exclusivamente as infrações cometidas anteriormente à vigência da lei que a concede.","C","CTN art. 180","Perdoar infração futura seria estímulo à sua prática."],
  ["A anistia pode alcançar infrações cometidas após a vigência da lei que a concede, desde que haja previsão expressa.","E","CTN art. 180","A vedação é absoluta quanto às infrações posteriores."],
  ["A anistia não se aplica aos atos qualificados em lei como crimes ou contravenções.","C","CTN art. 180 I","Nem aos praticados com dolo, fraude ou simulação."],
  ["A anistia aplica-se aos atos praticados com dolo, fraude ou simulação, desde que a lei expressamente o autorize.","E","CTN art. 180 I","O inciso I é vedação absoluta, sem ressalva."],
  ["Salvo disposição em contrário, a anistia não se aplica às infrações resultantes de conluio entre duas ou mais pessoas naturais ou jurídicas.","C","CTN art. 180 II","Aqui, diferentemente do inciso I, há ressalva legal possível."],
  ["A anistia pode ser concedida em caráter geral ou limitadamente às infrações da legislação relativa a determinado tributo.","C","CTN art. 181","São as duas formas do artigo."],
  ["A anistia pode ser limitada às infrações punidas com penalidades pecuniárias até determinado montante, conjugadas ou não com penalidades de outra natureza.","C","CTN art. 181 II b","Limitação por valor."],
  ["A anistia pode ser concedida sob condição do pagamento de tributo no prazo fixado pela lei que a conceder.","C","CTN art. 181 II d","Ou no prazo fixado pela autoridade, se a lei lhe atribuir essa competência."],
  ["A anistia não concedida em caráter geral é efetivada, em cada caso, por despacho da autoridade administrativa.","C","CTN art. 182","Mediante requerimento com prova dos requisitos."],
  ["O despacho que concede anistia em caráter individual gera direito adquirido.","E","CTN art. 182 p.ú.","Não gera — aplica-se o art. 155, com revogação de ofício."],
  ["Revogada a anistia individual, o crédito é cobrado acrescido de juros de mora, com imposição de penalidade nos casos de dolo ou simulação.","C","CTN art. 155","Regime idêntico ao da moratória individual."],
  ["Segundo a doutrina majoritária, a dispensa legal do pagamento após o lançamento configura remissão, e não anistia.","C","FCC","A corrente minoritária de Luciano Amaro admite anistia de penalidades já lançadas."],
  ["A remissão é hipótese de exclusão do crédito tributário.","E","CTN art. 156 IV","É hipótese de <b>extinção</b>."],
  ["A isenção afasta o tributo antes do lançamento e a remissão perdoa o crédito já constituído.","C","FGV","O divisor entre os institutos é sempre o lançamento."],
  ["Na exclusão do crédito tributário, o Estado fica temporariamente impedido de efetuar a cobrança.","E","FCC","Isso é a suspensão; na exclusão o lançamento nem chega a ocorrer."],
  ["A concessão de anistia exige lei específica que regule exclusivamente a matéria ou o correspondente tributo.","C","CF art. 150 § 6º","Vale para todo benefício fiscal."],
  ["A isenção é considerada dispensa legal do pagamento de tributo devido e constitui típico benefício fiscal.","C","FCC","Trata-se de decisão política do ente tributante."],
  ["A anistia alcança tanto as infrações quanto os tributos a elas relativos.","E","CEBRASPE","Alcança exclusivamente as <b>infrações</b> — o tributo permanece devido."],
  ["São hipóteses de suspensão do crédito tributário o depósito integral, a moratória, as reclamações e recursos, a liminar e o parcelamento.","C","CTN art. 151","Mnemônico DEMORE a LIMPAR."],
  ["A isenção concedida por prazo certo e sob condição pode ser revogada se o contribuinte deixar de cumprir a condição estabelecida.","C","FGV","A proteção existe enquanto a condição for cumprida."],
  ["Interpreta-se literalmente a legislação tributária que disponha sobre extinção do crédito tributário.","E","CTN art. 111","A extinção não integra o rol do artigo."]
];

var EX = {
S1:{t:"order", instr:"Ordene a cadeia até a exclusão do crédito",
  items:["Hipótese de incidência","Fato gerador","Obrigação tributária",
         "Isenção ou anistia","O lançamento não é realizado"],
  why:"A obrigação chega a nascer; o crédito é que não se constitui."},

S2:{t:"sort", instr:"Isenção ou anistia?",
  buckets:["Isenção — exclui o TRIBUTO","Anistia — exclui a MULTA"],
  items:[["Dispensa legal do pagamento de tributo devido",0],
         ["Benefício ou incentivo fiscal sobre o tributo",0],
         ["Perdão de infrações",1],
         ["Alcança só fatos anteriores à lei que a concede",1]],
  why:"O que muda é a obrigação excluída."},

S3:{t:"mc", instr:"Contribuinte beneficiado por isenção de IPTU:",
  options:["Continua obrigado às obrigações acessórias",
           "Fica dispensado de todas as obrigações tributárias",
           "Tem o crédito extinto após o lançamento",
           "Deixa de ser sujeito passivo"],
  answer:0,
  why:"Art. 175, parágrafo único — a acessória subsiste."},

S4:{t:"gap", instr:"Complete o art. 176 do CTN",
  before:"A isenção, ainda quando prevista em contrato, é sempre decorrente de ",
  after:" que especifique as condições e requisitos exigidos para a sua concessão.",
  options:["lei","convênio","despacho fundamentado"], answer:0,
  why:"Contrato nenhum substitui a lei isentiva."},

S5:{t:"sort", instr:"Salvo disposição de lei em contrário, a isenção alcança?",
  buckets:["NÃO alcança","Alcança"],
  items:[["Taxas",0],["Contribuições de melhoria",0],
         ["Tributos instituídos após a concessão",0],
         ["O imposto expressamente indicado na lei isentiva",1]],
  why:"Taxas e contribuições de melhoria são contraprestacionais — art. 177."},

S6:{t:"mc", instr:"Isento de IPTU por lei municipal: deve a taxa de coleta de lixo?",
  options:["Sim — salvo disposição de lei em contrário, a isenção não alcança taxas",
           "Não — a isenção é extensiva a todos os tributos municipais",
           "Não — taxa e imposto têm o mesmo regime",
           "Sim, apenas se a taxa for posterior à isenção"],
  answer:0,
  why:"Art. 177, I."},

S7:{t:"multi", instr:"Marque os requisitos da ISENÇÃO ONEROSA (art. 178)",
  options:["Concedida por prazo certo","Concedida em função de determinadas condições",
           "Concedida em caráter individual","Concedida por convênio entre entes"],
  answers:[0,1],
  why:"Os dois requisitos são cumulativos — e tornam a isenção irrevogável no prazo."},

S8:{t:"mc", instr:"Isenção de IPTU por 5 anos sob condição de produzir artesanato regional. Pode ser suprimida antes do prazo?",
  options:["Não, desde que o contribuinte cumpra a condição",
           "Sim, a qualquer tempo por nova lei",
           "Sim, mediante indenização ao contribuinte",
           "Não, em nenhuma hipótese"],
  answer:0,
  why:"É isenção onerosa; descumprida a condição, a proteção cai."},

S9:{t:"gap", instr:"Complete o art. 104, III, do CTN",
  before:"Os dispositivos de lei que extinguem ou reduzem isenções entram em vigor no ",
  after:", salvo se a lei dispuser de maneira mais favorável ao contribuinte.",
  options:["primeiro dia do exercício seguinte","nonagésimo dia","dia da publicação"], answer:0,
  why:"Proteção equivalente à anterioridade anual."},

S10:{t:"multi", instr:"Marque o que é correto sobre a ISENÇÃO INDIVIDUAL (art. 179)",
  options:["É efetivada por despacho da autoridade administrativa",
           "Exige requerimento com prova do preenchimento das condições",
           "Em tributo por período certo, o despacho deve ser renovado a cada período",
           "Gera direito adquirido ao beneficiado"],
  answers:[0,1,2],
  why:"Não gera direito adquirido — aplica-se o art. 155."},

S11:{t:"mc", instr:"Não renovado o despacho da isenção individual em tributo lançado por período certo:",
  options:["Os efeitos cessam automaticamente a partir do 1º dia do período seguinte",
           "A isenção permanece até decisão da autoridade",
           "O contribuinte é notificado para regularizar em 30 dias",
           "A isenção converte-se em anistia"],
  answer:0,
  why:"Cessação automática, sem necessidade de ato do Fisco."},

S12:{t:"gap", instr:"Complete o art. 180 do CTN",
  before:"A anistia abrange exclusivamente as infrações cometidas ",
  after:" à vigência da lei que a concede.",
  options:["anteriormente","posteriormente","concomitantemente"], answer:0,
  why:"Perdoar infração futura seria estímulo à sua prática."},

S13:{t:"multi", instr:"Marque as situações em que a ANISTIA NÃO se aplica (art. 180)",
  options:["Atos qualificados em lei como crimes ou contravenções",
           "Atos praticados com dolo, fraude ou simulação",
           "Infrações resultantes de conluio, salvo disposição em contrário",
           "Infrações punidas com multa de pequeno valor"],
  answers:[0,1,2],
  why:"Multa de pequeno valor é justamente uma das limitações possíveis do art. 181."},

S14:{t:"sort", instr:"Vedação absoluta ou com ressalva?",
  buckets:["Vedação ABSOLUTA (inciso I)","Admite ressalva legal (inciso II)"],
  items:[["Crimes e contravenções",0],["Dolo, fraude ou simulação",0],
         ["Conluio entre duas ou mais pessoas",1]],
  why:"Só o conluio pode ser anistiado, se houver disposição em contrário."},

S15:{t:"multi", instr:"Marque as limitações possíveis da anistia (art. 181, II)",
  options:["Às infrações relativas a determinado tributo",
           "Às infrações punidas com penalidades pecuniárias até certo montante",
           "A determinada região do território, por condições peculiares",
           "Sob condição do pagamento de tributo no prazo fixado",
           "Às infrações cometidas após a vigência da lei"],
  answers:[0,1,2,3],
  why:"Infrações posteriores nunca são anistiáveis."},

S16:{t:"mc", instr:"Anistia individual concedida e depois descumpridas as condições. O que ocorre?",
  options:["Revogação de ofício, com cobrança do crédito acrescido de juros de mora",
           "Manutenção do benefício, por direito adquirido",
           "Conversão da anistia em isenção",
           "Extinção definitiva do crédito"],
  answer:0,
  why:"Art. 182, p.ú., que remete ao art. 155 — com penalidade se houve dolo ou simulação."},

S17:{t:"match", instr:"Ligue cada instituto ao seu efeito e momento",
  pairs:[["Isenção","Afasta o TRIBUTO, antes do lançamento — exclusão"],
         ["Anistia","Afasta a MULTA, antes do lançamento — exclusão"],
         ["Remissão","Perdoa o crédito já constituído — extinção"]],
  why:"O divisor é sempre o lançamento."},

S18:{t:"sort", instr:"Doutrina majoritária: o que se aplica DEPOIS do lançamento?",
  buckets:["ANTES do lançamento","DEPOIS do lançamento"],
  items:[["Isenção, quanto ao tributo",0],["Anistia, quanto à multa",0],
         ["Remissão, quanto ao tributo",1],["Remissão, quanto à multa",1]],
  why:"A corrente minoritária de Luciano Amaro sustenta anistia para a multa já lançada."},

S19:{t:"sort", instr:"Suspensão, extinção ou exclusão?",
  buckets:["Suspensão (art. 151)","Extinção (art. 156)","Exclusão (art. 175)"],
  items:[["Moratória",0],["Parcelamento",0],["Liminar",0],
         ["Pagamento",1],["Remissão",1],["Prescrição e decadência",1],
         ["Isenção",2],["Anistia",2]],
  why:"Fecha a trilogia do Título III — é o quadro mais cobrado do capítulo."},

S20:{t:"multi", instr:"Marque o que se interpreta LITERALMENTE (art. 111)",
  options:["Suspensão do crédito tributário","Exclusão do crédito tributário",
           "Outorga de isenção","Dispensa de obrigações acessórias",
           "Extinção do crédito tributário"],
  answers:[0,1,2,3],
  why:"A extinção é a intrusa — e a troca por “exclusão” é a pegadinha do artigo."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Exclusão e isenção",
      '<div class="box"><span class="bl">O que é excluir</span>'+
      '<p>A lei <b>IMPEDE O LANÇAMENTO</b>: o crédito <b>nem chega a se constituir</b>. Duas hipóteses apenas — <b>ISENÇÃO</b> (exclui o <b>tributo</b>) e <b>ANISTIA</b> (exclui a <b>multa</b>).</p>'+
      '<p><b>Na cadeia:</b> hipótese de incidência → fato gerador → <b>obrigação tributária</b> → <b>isenção ou anistia</b> → <em>sem lançamento</em>. A obrigação <b>nasce</b>; o crédito é que não se forma.</p>'+
      '<p class="mn"><em>A exclusão <b>NÃO dispensa</b> as obrigações acessórias (art. 175, p.ú.), e interpreta-se <b>literalmente</b> (art. 111).</em></p></div>'+
      '<div class="box"><span class="bl">Isenção — art. 176</span>'+
      '<p><b>Dispensa legal do pagamento de tributo devido</b> — decisão política, típico benefício fiscal.</p>'+
      '<p>“<b>Ainda quando prevista em CONTRATO, é sempre decorrente de LEI</b>”, que especifique <b>condições e requisitos</b>, os <b>tributos alcançados</b> e, sendo caso, o <b>prazo de duração</b>.</p>'+
      '<p><b>Lei ESPECÍFICA</b> (art. 150, § 6º, da CF): que regule <b>exclusivamente</b> a isenção ou o correspondente tributo.</p>'+
      '<p><b>Parágrafo único:</b> pode ser restrita a <b>determinada região</b> do território, por condições peculiares.</p></div>'+
      '<div class="box trap"><span class="bl">Art. 177 — o que a isenção NÃO alcança</span>'+
      '<p><b>I)</b> <b>taxas e contribuições de melhoria</b> — são <b>contraprestacionais</b>: há atividade estatal que justifica a cobrança;<br>'+
      '<b>II)</b> <b>tributos instituídos POSTERIORMENTE</b> à sua concessão.</p>'+
      '<p><b>Tudo isso salvo disposição de lei em contrário.</b></p>'+
      '<p class="mn"><em>Isento de IPTU <b>paga</b> a taxa de coleta de lixo.</em></p></div>'+
      '<div class="box"><span class="bl">Art. 178 — revogação e isenções ONEROSAS</span>'+
      '<p>A isenção <b>pode ser revogada ou modificada por lei a qualquer tempo</b> — <b>SALVO</b> se concedida <b>por PRAZO CERTO</b> <b>E</b> <b>em função de CONDIÇÕES</b>. Essas são as <b>isenções onerosas</b>, que <b>não podem ser livremente suprimidas</b>.</p>'+
      '<p><em>Isenção de IPTU por 5 anos sob condição de produzir artesanato regional: <b>protegida no prazo</b>, enquanto a condição for cumprida.</em></p>'+
      '<p class="mn"><em>E o <b>art. 104, III</b>: lei que <b>extingue ou reduz</b> isenção entra em vigor no <b>1º dia do exercício seguinte</b>, salvo disposição mais favorável.</em></p></div>'+
      '<div class="box tip"><span class="bl">Art. 179 — isenção INDIVIDUAL</span>'+
      '<p>Restrita a determinadas pessoas, é <b>efetivada por DESPACHO</b> da autoridade, em <b>requerimento com PROVA</b> do preenchimento das condições. <em>Ex.: isenção de IR para pessoa com deficiência.</em></p>'+
      '<p><b>§ 1º —</b> em tributo lançado por <b>período certo</b> (IPTU, IPVA), o despacho é <b>renovado antes de cada período</b>; não sendo, os efeitos <b>cessam automaticamente</b> a partir do <b>1º dia do período</b> não renovado.</p>'+
      '<p><b>§ 2º —</b> <b>não gera direito adquirido</b>: aplica-se o <b>art. 155</b>.</p></div>'),
    sl("Anistia e o fechamento do Título III",
      '<div class="box"><span class="bl">Art. 180 — a anistia olha para trás</span>'+
      '<p>Abrange <b>EXCLUSIVAMENTE as infrações cometidas ANTERIORMENTE à vigência da lei</b> que a concede. Perdoar infração futura seria <b>estímulo à prática</b>.</p></div>'+
      '<div class="box trap"><span class="bl">A que a anistia não se aplica</span>'+
      '<p><b>I — vedação ABSOLUTA:</b> atos qualificados em lei como <b>CRIMES ou CONTRAVENÇÕES</b>, e os praticados com <b>DOLO, FRAUDE ou SIMULAÇÃO</b> pelo sujeito passivo ou por terceiro em benefício dele.</p>'+
      '<p><b>II — com ressalva:</b> <b>salvo disposição em contrário</b>, às infrações resultantes de <b>CONLUIO</b> entre duas ou mais pessoas.</p>'+
      '<p class="mn"><em>Só o <b>conluio</b> admite ressalva legal. O inciso I não admite nenhuma.</em></p></div>'+
      '<div class="box"><span class="bl">Art. 181 — como se concede</span>'+
      '<p><b>I)</b> em <b>caráter GERAL</b>;<br>'+
      '<b>II) limitadamente:</b> <b>a)</b> às infrações de <b>determinado tributo</b>; <b>b)</b> às punidas com penalidades pecuniárias <b>até determinado montante</b>, conjugadas ou não com penalidades de outra natureza; <b>c)</b> a <b>determinada região</b>, por condições peculiares; <b>d)</b> <b>sob condição do pagamento do tributo no prazo</b> fixado pela lei ou pela autoridade que a lei indicar.</p></div>'+
      '<div class="box"><span class="bl">Art. 182 — anistia INDIVIDUAL</span>'+
      '<p>Efetivada <b>em cada caso por DESPACHO</b> da autoridade, em requerimento com <b>prova</b> dos requisitos. <b>Não gera direito adquirido</b> — aplica-se o <b>art. 155</b>: revogação de ofício, cobrança <b>com juros de mora</b> e <b>penalidade em caso de dolo ou simulação</b>.</p></div>'+
      '<div class="box trap"><span class="bl">A divergência doutrinária</span>'+
      '<p><b>MAJORITÁRIA:</b> antes do lançamento, <b>tributo → isenção</b> e <b>multa → anistia</b>; <b>depois do lançamento, tudo é REMISSÃO</b>.</p>'+
      '<p><b>MINORITÁRIA</b> (Luciano Amaro): depois do lançamento, <b>tributo → remissão</b> e <b>multa → ANISTIA</b>; a remissão alcançaria só tributos.</p>'+
      '<p class="mn"><em>Em prova, adote a <b>majoritária</b> — salvo enunciado que indique o contrário.</em></p></div>'+
      '<div class="box tip"><span class="bl">Fechando o Título III</span>'+
      '<p><b>SUSPENSÃO (art. 151) — DEMORE a LIMPAR:</b> depósito integral · moratória · reclamações e recursos · liminar · parcelamento. O Estado fica <b>temporariamente impedido</b> de cobrar.</p>'+
      '<p><b>EXTINÇÃO (art. 156):</b> onze hipóteses — pagamento, compensação, transação, remissão, prescrição e decadência, conversão de depósito em renda, homologação, consignação, decisão administrativa irreformável, decisão judicial transitada, dação em bens imóveis. Crédito e débito <b>satisfeitos</b>.</p>'+
      '<p><b>EXCLUSÃO (art. 175) — ISA:</b> isenção e anistia. O <b>lançamento nem chega a ocorrer</b>.</p>'+
      '<p>A <b>EC 132/2023 não alterou os arts. 175 a 182</b>, mas criou <b>regimes diferenciados e específicos</b> próprios do IBS e da CBS — confira na redação atual.</p></div>')
  ]
};

var TEC = [
  ["Caderno CEBRASPE — Direito Tributário 11","https://www.tecconcursos.com.br/s/Q2h2hW","Q2h2hW"],
  ["Caderno FCC — Direito Tributário 11","https://www.tecconcursos.com.br/s/Q2h2ho","Q2h2ho"],
  ["Caderno FGV — Direito Tributário 11","https://www.tecconcursos.com.br/s/Q2h2hz","Q2h2hz"],
  ["Caderno VUNESP — Direito Tributário 11","https://www.tecconcursos.com.br/s/Q2h2i5","Q2h2i5"]
];
var TECNOTA = "Priorize o caderno da FGV — banca do último certame da Receita Federal. Este módulo fecha a trilogia do Título III, então o exercício de classificação entre suspensão, extinção e exclusão vale mais do que parece: refaça-o até acertar sem pensar. Guarde três detalhes que decidem questão: a isenção ONEROSA (prazo certo E condição) não pode ser livremente revogada; a anistia só alcança infrações ANTERIORES à lei, e nunca crimes, contravenções, dolo, fraude ou simulação — só o conluio admite ressalva; e nem isenção nem anistia individuais geram direito adquirido. Sobre a divergência doutrinária, a resposta padrão é a majoritária: depois do lançamento, a dispensa é remissão. A EC 132/2023 não alterou os arts. 175 a 182.";

var UNITS = [
  {n:1, title:"Exclusão e isenção", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Arts. 175 a 179 e a anistia dos arts. 180 a 182", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · o que é excluir",            xp:25, data:["S1","S2","S3","T0","T1","T2","T3","T4"]},
    {id:"K3", type:"drill",  title:"Praticar · a lei isentiva e seu alcance", xp:25, data:["S4","S5","S6","T5","T6","T7","T8","T9","T10","T11","T37"]},
    {id:"K4", type:"flash",  title:"Flashcards · exclusão e isenção",       xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12]}
  ]},
  {n:2, title:"Revogação e isenção individual", cvar:"u2", lessons:[
    {id:"K5", type:"drill",  title:"Praticar · isenções onerosas",          xp:25, data:["S7","S8","S9","T12","T13","T14","T15","T40"]},
    {id:"K6", type:"drill",  title:"Praticar · isenção em caráter individual", xp:25, data:["S10","S11","T16","T17","T18","T19","T20"]},
    {id:"K7", type:"flash",  title:"Flashcards · revogação e individual",   xp:15, data:[13,14,15,16,17,18,19,20,21,22]}
  ]},
  {n:3, title:"Anistia", cvar:"u3", lessons:[
    {id:"K8", type:"drill",  title:"Praticar · alcance e vedações",         xp:25, data:["S12","S13","S14","T21","T22","T23","T24","T25","T38"]},
    {id:"K9", type:"drill",  title:"Praticar · formas de concessão",        xp:25, data:["S15","S16","T26","T27","T28","T29","T30","T31","T36"]},
    {id:"K10",type:"flash",  title:"Flashcards · anistia",                  xp:15, data:[23,24,25,26,27,28,29,30,31]}
  ]},
  {n:4, title:"Fechando o Título III", cvar:"u4", lessons:[
    {id:"K11",type:"drill",  title:"Praticar · isenção, anistia e remissão", xp:25, data:["S17","S18","T32","T33","T34"]},
    {id:"K12",type:"drill",  title:"Praticar · os três regimes do crédito", xp:25, data:["S19","S20","T35","T39","T41"]},
    {id:"K13",type:"flash",  title:"Flashcards · a trilogia do crédito",    xp:15, data:[32,33,34,35,36,37,38,39]}
  ]},
  {n:5, title:"Fixação", cvar:"u5", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",               xp:60, data:null},
    {id:"K14", type:"missao", title:"Missão TEC Concursos",                 xp:15, data:null},
    {id:"K15", type:"prova",  title:"Simulado cronometrado",                xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo, art. 175: excluem o crédito tributário a <b>isenção</b> e a <b>anistia</b> — e só essas duas. Mnemônico do Resumo: <b>ISA</b>.</p><p>A distinção que o material dá: se a obrigação excluída se refere a <b>tributo</b>, é isenção; se a <b>multa</b>, é anistia.</p><p class='fb-fonte'>Resumo 11 · <i>Exclusão do crédito tributário — art. 175</i></p>",
1:"<p>Certo — é a função do instituto, nas palavras do Resumo: a exclusão do crédito tributário tem a função de <b>impedir o lançamento</b>, ou seja, impedir a constituição do crédito.</p><p>No fluxo do material: hipótese de incidência → fato gerador → obrigação tributária → <b>isenção ou anistia</b> → o lançamento nem acontece.</p><p class='fb-fonte'>Resumo 11 · <i>Exclusão — definições</i></p>",
2:"<p>Errado. O Resumo frisa: a exclusão do crédito tributário <b>não dispensa o cumprimento das obrigações acessórias</b>.</p><p>Ainda que se deixe de arcar com a obrigação principal, a acessória <b>subsiste</b> — declarar, escriturar, emitir documentos.</p><p class='fb-fonte'>Resumo 11 · <i>CTN — art. 175, parágrafo único</i></p>",
3:"<p>Certo — é o esquema do art. 175 no Resumo:</p><p><b>ISENÇÃO</b> → exclui o <b>tributo</b>.<br><b>ANISTIA</b> → exclui a <b>multa</b> (penalidade).</p><p class='fb-fonte'>Resumo 11 · <i>CTN — art. 175</i></p>",
4:"<p>Certo — Observação 1 da tabela do Resumo: interpreta-se <b>literalmente</b> a legislação tributária que disponha sobre <b>suspensão ou exclusão</b> do crédito tributário (art. 111).</p><p>E, como o material anota entre parênteses, <b>extinção não</b> entra nessa regra.</p><p class='fb-fonte'>Resumo 11 · <i>OBS. 1 — CTN, art. 111</i></p>",
5:"<p>Errado. O art. 176 antecipa justamente esse argumento: a isenção, <b>ainda quando prevista em contrato</b>, é <b>sempre decorrente de lei</b>.</p><p>Contrato nenhum cria isenção; ele apenas reflete a lei que a concedeu.</p><p class='fb-fonte'>Resumo 11 · <i>Isenção — art. 176</i></p>",
6:"<p>Certo, art. 176: a lei especificará as <b>condições e requisitos</b> exigidos para a concessão, os <b>tributos</b> a que se aplica e, sendo caso, o <b>prazo</b> de sua duração.</p><p>O Resumo conceitua a isenção como a <b>dispensa legal do pagamento de tributo devido</b> — uma decisão política, típico benefício ou incentivo fiscal.</p><p class='fb-fonte'>Resumo 11 · <i>CTN — art. 176</i></p>",
7:"<p>Certo, parágrafo único do art. 176: a isenção pode ser restrita a determinada <b>região do território</b> da entidade tributante, em função de <b>condições a ela peculiares</b>.</p><p>Repare no paralelo com a moratória e com a anistia (art. 181, II, <i>c</i>) — o CTN admite o recorte regional nos três.</p><p class='fb-fonte'>Resumo 11 · <i>CTN — art. 176, parágrafo único</i></p>",
8:"<p>Errado. O Resumo lembra o art. 150, § 6º, da CF/88: subsídio, <b>isenção</b>, redução de base de cálculo, crédito presumido, <b>anistia</b> ou remissão só por <b>lei específica</b>.</p><p>Exemplo do material: se o Município quer isentar do IPTU, precisa de lei que regule <b>exclusivamente</b> a isenção ou o próprio IPTU.</p><p class='fb-fonte'>Resumo 11 · <i>CF/88 — art. 150, § 6º</i></p>",
9:"<p>Certo, art. 177, I. E o Resumo explica o porquê: taxas e contribuições de melhoria são tributos de <b>caráter contraprestacional</b> — há uma atividade estatal que justifica a cobrança, e seria estranho prestar o serviço e não tributá-lo.</p><p>Guarde o \"<b>salvo disposição de lei em contrário</b>\": a lei <i>pode</i> isentar taxas, desde que diga isso.</p><p class='fb-fonte'>Resumo 11 · <i>Escopo da isenção — art. 177, I</i></p>",
10:"<p>Errado. Art. 177, II: salvo disposição de lei em contrário, a isenção <b>não é extensiva aos tributos instituídos posteriormente</b> à sua concessão.</p><p>Faz sentido: a lei isentiva não pode alcançar o que ainda nem existia.</p><p class='fb-fonte'>Resumo 11 · <i>CTN — art. 177, II</i></p>",
11:"<p>Errado — é o exemplo do Resumo, com Petrópolis e o cidadão Radegondes.</p><p>Lei municipal de 2023 isenta de IPTU imóveis de até <b>70m²</b>. Ele <b>deve pagar a taxa de coleta de resíduos sólidos</b>, porque, salvo disposição de lei em contrário, a isenção <b>não é extensiva às taxas</b> (art. 177, I).</p><p class='fb-fonte'>Resumo 11 · <i>Art. 177 — exemplo de Petrópolis</i></p>",
12:"<p>Certo, art. 178. Regra: a isenção pode ser revogada ou modificada por lei <b>a qualquer tempo</b>. Exceção: quando concedida <b>por prazo certo E em função de determinadas condições</b>.</p><p>Repare que os dois requisitos da exceção são <b>cumulativos</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Revogação da isenção — art. 178</i></p>",
13:"<p>Certo — é o nome que o Resumo dá a elas: <b>ISENÇÕES ONEROSAS</b>, as concedidas com prazo certo e em função de determinadas condições. O material destaca em caixa: <b>não podem ser livremente suprimidas</b>.</p><p>O material distingue as duas partes: <b>prazo certo</b> é o período fixado na lei para fruir do benefício (ex.: dois anos); <b>condição</b> é a contraprestação exigida do contribuinte (ex.: construir ou produzir algo).</p><p class='fb-fonte'>Resumo 11 · <i>Isenções onerosas — art. 178</i></p>",
14:"<p>Errado — é o exemplo da pessoa jurídica ABC no Resumo.</p><p>Isenção de IPTU por <b>5 anos</b> sob a condição de o imóvel ser usado para <b>produção de artesanato regional</b>: é isenção <b>onerosa</b>, logo <b>não poderá ser suprimida</b> nesse prazo, desde que o contribuinte cumpra a condição.</p><p class='fb-fonte'>Resumo 11 · <i>Art. 178 — exemplo do artesanato</i></p>",
15:"<p>Certo — quadro ATENÇÃO do Resumo, com o art. 104, III, do CTN: os dispositivos de lei que <b>extinguem ou reduzem isenções</b> entram em vigor no <b>1º dia do exercício seguinte</b> à sua publicação, <b>salvo se a lei dispuser de maneira mais favorável ao contribuinte</b>.</p><p class='fb-fonte'>Resumo 11 · <i>ATENÇÃO — CTN, art. 104, III</i></p>",
16:"<p>Certo, art. 179 — é a <b>isenção individual</b>. Explicação do Resumo: quando o art. 179 diz \"quando não concedida em caráter geral\", está se referindo à isenção individual.</p><p>Ela ocorre quando o benefício é restrito a determinadas pessoas que preencham os requisitos legais; essas pessoas precisam <b>comprovar</b> à autoridade que estão entre as alcançadas, e o benefício é <b>efetivado pelo despacho</b>.</p><p>Exemplo do material: isenção de imposto de renda para deficientes físicos — o beneficiário deve comprovar a condição.</p><p class='fb-fonte'>Resumo 11 · <i>Isenção individual — art. 179</i></p>",
17:"<p>Errado. O art. 179 exige <b>requerimento</b> no qual o interessado <b>faça prova</b> do preenchimento das condições e do cumprimento dos requisitos previstos em lei ou contrato.</p><p>Sem requerimento e sem prova, não há despacho — e sem despacho, a isenção individual não se efetiva.</p><p class='fb-fonte'>Resumo 11 · <i>CTN — art. 179</i></p>",
18:"<p>Certo, § 1º do art. 179. Tratando-se de tributo lançado por <b>período certo de tempo</b> — o Resumo exemplifica com <b>IPTU e IPVA</b> —, o despacho deve ser <b>renovado antes da expiração de cada período</b>.</p><p class='fb-fonte'>Resumo 11 · <i>CTN — art. 179, § 1º</i></p>",
19:"<p>Certo, e a consequência é <b>automática</b>: não renovado o despacho, cessam os efeitos da isenção a partir do <b>primeiro dia do período</b> para o qual o interessado deixou de promover a continuidade do reconhecimento.</p><p>Não é preciso ato da Fazenda revogando — o benefício simplesmente deixa de valer.</p><p class='fb-fonte'>Resumo 11 · <i>CTN — art. 179, § 1º</i></p>",
20:"<p>Errado. Pelo art. 179, § 2º, aplica-se à isenção individual o disposto no art. 179, § 1º, e no art. 155: o despacho <b>não gera direito adquirido</b> e a isenção será revogada de ofício quando o beneficiado não satisfazia ou deixou de satisfazer as condições.</p><p>O Resumo traz essa mesma regra de forma expressa para a <b>anistia</b> individual, no parágrafo único do art. 182 — a lógica é a mesma nos dois benefícios.</p><p class='fb-fonte off'>Parcialmente fora do Resumo 11 — o material comenta o \"não gera direito adquirido\" ao tratar do art. 182, parágrafo único (anistia individual); o § 2º do art. 179 vem da letra do CTN.</p>",
21:"<p>Certo, art. 180: a anistia abrange <b>exclusivamente as infrações cometidas anteriormente à vigência</b> da lei que a concede.</p><p>O Resumo dá a razão: se fosse possível perdoar infração cometida <i>depois</i>, seria um <b>estímulo à sua prática</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Anistia — art. 180</i></p>",
22:"<p>Errado — e não há ressalva possível. O art. 180 usa a palavra <b>exclusivamente</b>: só infrações <b>anteriores</b> à vigência da lei.</p><p>Perdoar infração futura equivaleria a autorizá-la.</p><p class='fb-fonte'>Resumo 11 · <i>CTN — art. 180</i></p>",
23:"<p>Certo, art. 180, I. No esquema do Resumo, a anistia <b>não se aplica</b>:</p><p>· aos atos qualificados em lei como <b>crimes ou contravenções</b>;<br>· aos atos praticados com <b>dolo, fraude ou simulação</b>;<br>· às infrações resultantes de <b>conluio</b> (salvo disposição em contrário).</p><p class='fb-fonte'>Resumo 11 · <i>CTN — art. 180, I e II</i></p>",
24:"<p>Errado. A vedação do inciso I aos atos praticados com <b>dolo, fraude ou simulação</b> é <b>absoluta</b> — não admite disposição em contrário.</p><p>A ressalva \"salvo disposição em contrário\" existe apenas para o <b>conluio</b> (inciso II), como mostra o esquema do Resumo.</p><p class='fb-fonte'>Resumo 11 · <i>CTN — art. 180, I x II</i></p>",
25:"<p>Certo, art. 180, II: <b>salvo disposição em contrário</b>, a anistia não se aplica às infrações resultantes de <b>conluio</b> entre duas ou mais pessoas naturais ou jurídicas.</p><p>É a única das três vedações do art. 180 que a lei pode afastar.</p><p class='fb-fonte'>Resumo 11 · <i>CTN — art. 180, II</i></p>",
26:"<p>Certo, art. 181, I e II, <i>a</i>. O Resumo lista as formas limitadas em que a anistia pode vir:</p><p>· às infrações relativas a <b>determinado tributo</b> (ex.: imposto de renda);<br>· às infrações <b>até certo montante</b> (ex.: até R$ 1.000);<br>· a determinada <b>região</b> do território do ente;<br>· ao <b>pagamento do tributo</b> dentro do prazo da lei, ou do prazo fixado pela autoridade administrativa, se a lei lhe atribuir esse dever.</p><p class='fb-fonte'>Resumo 11 · <i>CTN — art. 181</i></p>",
27:"<p>Certo, art. 181, II, <i>b</i>: às infrações punidas com penalidades pecuniárias <b>até determinado montante</b>, <b>conjugadas ou não</b> com penalidades de outra natureza.</p><p>No resumo do material: \"às infrações até certo montante (ex.: até R$ 1.000)\".</p><p class='fb-fonte'>Resumo 11 · <i>CTN — art. 181, II, b</i></p>",
28:"<p>Certo, art. 181, II, <i>d</i>: a anistia pode ser condicionada ao <b>pagamento do tributo no prazo fixado pela lei</b> que a conceder — ou no prazo que a própria lei mandar a <b>autoridade administrativa</b> fixar.</p><p>É a lógica dos programas de regularização: perdoa-se a multa em troca do pagamento do tributo.</p><p class='fb-fonte'>Resumo 11 · <i>CTN — art. 181, II, d</i></p>",
29:"<p>Certo, art. 182. O Resumo remete ao mesmo comentário do art. 179: \"quando não concedida em caráter geral\" significa <b>anistia individual</b>.</p><p>Ela é efetivada, <b>em cada caso</b>, por <b>despacho</b> da autoridade, em requerimento no qual o interessado faça prova do preenchimento das condições e do cumprimento dos requisitos previstos em lei.</p><p class='fb-fonte'>Resumo 11 · <i>Anistia individual — art. 182</i></p>",
30:"<p>Errado. Parágrafo único do art. 182: o despacho <b>não gera direito adquirido</b>, aplicando-se o art. 155.</p><p>Será revogada de ofício sempre que se apure que o beneficiado <b>não satisfazia ou deixou de satisfazer</b> as condições, ou <b>não cumpriu</b> os requisitos para a concessão do favor.</p><p class='fb-fonte'>Resumo 11 · <i>CTN — art. 182, parágrafo único</i></p>",
31:"<p>Certo. Revogada a anistia individual, explica o Resumo, o crédito será cobrado acrescido de <b>juros de mora</b>; além disso, <b>será imposta penalidade nos casos de dolo ou simulação</b>.</p><p>É o exemplo do Estado do RJ no material: anistia regional concedida ao contribuinte Daniel por despacho, depois revogada de ofício por descumprimento das condições legais.</p><p class='fb-fonte'>Resumo 11 · <i>Art. 182, p.ú. c/c art. 155 — exemplo do RJ</i></p>",
32:"<p>Certo — é a <b>doutrina majoritária</b> no quadro de divergência do Resumo.</p><p><b>Antes do lançamento</b>: tributo → isenção; multa → anistia.<br><b>Depois do lançamento</b>: tributo → remissão; multa → <b>remissão</b> também.</p><p>A corrente <b>minoritária</b> (Luciano Amaro, 14ª ed., p. 457, citado no material) sustenta que a multa já lançada é perdoada por <b>anistia</b>, e que a remissão só alcançaria tributos.</p><p class='fb-fonte'>Resumo 11 · <i>Divergência doutrinária</i></p>",
33:"<p>Errado. A remissão está na coluna <b>EXTINÇÃO</b> (art. 156, IV) da tabela do Resumo. A exclusão tem apenas <b>isenção e anistia</b> — mnemônico <b>ISA</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Tabela — Suspensão x Extinção x Exclusão</i></p>",
34:"<p>Certo — é exatamente a linha divisória do quadro de divergência doutrinária do Resumo: o marco é o <b>lançamento</b>.</p><p><b>Antes</b> do lançamento, o tributo é afastado por <b>isenção</b>. <b>Depois</b>, o crédito já constituído é perdoado por <b>remissão</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Divergência doutrinária · OBS. 2</i></p>",
35:"<p>Errado — essa é a definição de <b>SUSPENSÃO</b> na tabela do Resumo.</p><p>Na <b>EXCLUSÃO</b>, segundo o material, \"o lançamento nem chega a ser realizado\". Não é impedimento temporário de cobrar: é o crédito que nem chega a ser constituído.</p><p class='fb-fonte'>Resumo 11 · <i>Tabela — Suspensão x Exclusão</i></p>",
36:"<p>Certo. O art. 150, § 6º, da CF/88, citado no Resumo, arrola expressamente a <b>anistia</b> entre os benefícios que só podem ser concedidos por <b>lei específica</b> — que regule exclusivamente a matéria ou o correspondente tributo.</p><p class='fb-fonte'>Resumo 11 · <i>CF/88 — art. 150, § 6º</i></p>",
37:"<p>Certo — é a definição do Resumo: a isenção é a <b>dispensa legal do pagamento de tributo devido</b>, sendo considerada uma <b>decisão política</b> e, portanto, um típico <b>benefício ou incentivo fiscal</b>.</p><p>Repare no \"tributo devido\": o fato gerador ocorre e a obrigação nasce — o que a lei dispensa é o pagamento.</p><p class='fb-fonte'>Resumo 11 · <i>Isenção — comentário ao art. 176</i></p>",
38:"<p>Errado. No esquema do art. 175 no Resumo, a anistia é o <b>perdão de infrações</b> — exclui a <b>multa</b>, não o tributo.</p><p>Quem afasta o tributo é a <b>isenção</b>.</p><p class='fb-fonte'>Resumo 11 · <i>CTN — art. 175</i></p>",
39:"<p>Certo — coluna SUSPENSÃO da tabela do Resumo (art. 151), mnemônico <b>DEMORE a LIMPAR</b>: depósito integral, moratória, reclamações, recursos, liminar e parcelamento.</p><p class='fb-fonte'>Resumo 11 · <i>Tabela — Suspensão (art. 151)</i></p>",
40:"<p>Certo. A proteção da isenção onerosa é <b>condicionada</b>: no exemplo do Resumo, a isenção de 5 anos não pode ser suprimida <b>caso o contribuinte cumpra a condição</b> de utilizar o imóvel para a produção de artesanato regional.</p><p>Descumprida a condição, cai a razão da proteção.</p><p class='fb-fonte'>Resumo 11 · <i>Art. 178 — isenções onerosas</i></p>",
41:"<p>Errado. A Observação 1 do Resumo é explícita ao excluir a extinção: interpreta-se literalmente a legislação sobre <b>suspensão ou exclusão</b> do crédito tributário — \"<b>extinção não</b>\" (art. 111).</p><p class='fb-fonte'>Resumo 11 · <i>OBS. 1 — CTN, art. 111</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"11", nome:"Exclusão do crédito tributário — isenção e anistia", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
