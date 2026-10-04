/* AFO — Módulo 11: Suprimento de fundos */
window.MOD = window.MOD || {};
window.MOD.m11 = (function(){
"use strict";

var CARDS = [
  ["O que é o suprimento de fundos?","<b>Adiantamento de valores a um servidor para futura prestação de contas.</b> Também conhecido como <b>regime de adiantamento</b>."],
  ["Qual a finalidade do suprimento de fundos?","Realizar despesas que, <b>pela excepcionalidade</b>, <b>não possam subordinar-se ao processo normal de aplicação</b>, atendendo a situações atípicas que exijam <b>pronto pagamento em espécie</b>."],
  ["Qual a lógica por trás do SF?","O processo tradicional de realização de despesas é <b>demorado</b>, sobretudo quando exige prévia licitação. O SF é <b>exceção ao procedimento licitatório</b>, para situações que não podem aguardar o processo normal."],
  ["Despesas de caráter repetitivo podem ser pagas por SF?","<b>Não.</b> São consideradas <b>previsíveis</b>, o que afasta a <b>excepcionalidade</b> que justifica o suprimento."],
  ["O SF depende de empenho?","<b>Sim.</b> A entrega de numerário ao servidor será <b>sempre precedida de empenho na dotação própria</b> (art. 68 da Lei 4.320/64)."],
  ["De quem é a decisão de conceder o SF?","Fica <b>a critério do ordenador de despesa e sob sua inteira responsabilidade</b>."],
  ["O SF é despesa orçamentária?","<b>Sim</b>, é despesa orçamentária — mas <b>não é despesa pelo enfoque patrimonial</b> no momento da concessão."],
  ["Quais os três estágios percorridos pela concessão do SF?","Os três estágios da <b>despesa orçamentária</b>: <b>empenho, liquidação e pagamento</b>."],
  ["Quais os três momentos (fases) do SF?","<b>Concessão, aplicação e prestação de contas.</b> São <b>momentos/fases</b>, e <b>não estágios</b> — não confunda com empenho/liquidação/pagamento."],
  ["Por que o SF não é despesa pelo enfoque patrimonial na concessão?","Porque no momento da concessão <b>não ocorre redução no Patrimônio Líquido</b> — apenas se troca disponibilidade por um direito."],
  ["Quando ocorre a redução do PL no SF?","<b>Somente no momento da prestação de contas</b>, por meio do reconhecimento de uma <b>VPD</b> (Variação Patrimonial Diminutiva)."],
  ["Quais os efeitos patrimoniais da liquidação da despesa com SF?","<b>Aumento do ativo e aumento do passivo</b>: registra-se um passivo (obrigação de curto prazo de adiantar ao servidor) e incorpora-se um ativo (direito de receber o bem/serviço ou a devolução do numerário)."],
  ["Servidor recebeu R$ 1.000 de SF em 2019 e gastou 60% só em 2020. Houve VPD de R$ 1.000 em 2019?","<b>Não.</b> Em 2019 houve apenas a <b>concessão</b> (despesa orçamentária empenhada, liquidada e paga). A <b>VPD</b> só é reconhecida com a <b>prestação de contas</b>."],
  ["Em que casos o SF é aplicável? (1º)","Para atender <b>despesas eventuais, inclusive em viagem e com serviços especiais, que exijam pronto pagamento</b>."],
  ["Em que casos o SF é aplicável? (2º)","Quando a despesa deva ser feita em <b>caráter sigiloso</b>, conforme se classificar em regulamento."],
  ["Em que casos o SF é aplicável? (3º)","Para atender <b>despesas de pequeno vulto</b>, assim entendidas aquelas cujo valor, <b>em cada caso</b>, não ultrapasse limite estabelecido em <b>ato normativo próprio</b>."],
  ["1ª vedação ao SF","Não se concederá a <b>responsável por dois suprimentos</b>. Ou seja: <b>é permitida a concessão de até dois</b> suprimentos simultâneos."],
  ["2ª vedação ao SF","Não se concederá a <b>servidor que tenha a seu cargo a guarda ou a utilização do material a adquirir</b> — <b>salvo quando não houver na repartição outro servidor</b>."],
  ["3ª vedação ao SF","Não se concederá a <b>responsável por suprimento de fundos que, esgotado o prazo, não tenha prestado contas</b> de sua aplicação."],
  ["4ª vedação ao SF","Não se concederá a <b>servidor declarado em alcance</b>."],
  ["O que é servidor declarado “em alcance”?","Aquele que <b>não prestou contas</b> do suprimento <b>ou</b> cujas <b>contas tenham sido impugnadas</b>."],
  ["Qual vedação tem exceção expressa?","A do servidor que tem a <b>guarda ou utilização do material a adquirir</b>: pode receber <b>quando não houver na repartição outro servidor</b>."],
  ["O suprido é obrigado a prestar contas?","<b>Sim.</b> Não o fazendo no prazo assinalado pelo ordenador de despesa, procede-se <b>automaticamente à tomada de contas</b>, sem prejuízo das providências administrativas para apuração de responsabilidades."],
  ["De quem é a responsabilidade pela aplicação do SF após a aprovação das contas?","Da <b>autoridade que o concedeu</b>."],
  ["Qual o prazo de comprovação do valor aplicado até 31/12?","A importância aplicada até <b>31 de dezembro</b> será comprovada <b>até 15 de janeiro do ano seguinte</b>."],
  ["Restituição de SF recolhida no <b>mesmo</b> exercício da concessão","Constitui <b>anulação de despesa</b> — a importância reverte à dotação."],
  ["Restituição de SF recolhida <b>após o encerramento</b> do exercício da concessão","Constitui <b>receita orçamentária</b> do ano em que se efetivar o recolhimento."],
  ["Quais restituições seguem essa regra?","As decorrentes de <b>falta de aplicação, parcial ou total</b>, ou de <b>aplicação indevida</b>."],
  ["Qual o dispositivo que fundamenta a regra das restituições?","<b>Art. 38 da Lei nº 4.320/1964:</b> reverte à dotação a despesa anulada no exercício; anulada após o encerramento, considera-se <b>receita do ano em que se efetivar o recolhimento</b>."],
  ["Qual o conceito legal do regime de adiantamento (art. 68)?","Aplicável aos casos <b>expressamente definidos em lei</b>, consiste na <b>entrega de numerário a servidor</b>, <b>sempre precedida de empenho na dotação própria</b>, para realizar despesas que <b>não possam subordinar-se ao processo normal de aplicação</b>."],
  ["O que diz o art. 69 da Lei 4.320/64?","<b>Não se fará adiantamento a servidor em alcance nem a responsável por dois adiantamentos.</b>"],
  ["Como o pagamento por adiantamento se situa no art. 65?","O pagamento é efetuado por <b>tesouraria ou pagadoria</b>, por <b>estabelecimentos bancários credenciados</b> e, em <b>casos excepcionais</b>, por meio de <b>adiantamento</b>."],
  ["Como o SF é operacionalizado no âmbito federal?","Em regra, por meio do <b>Cartão de Pagamento do Governo Federal (CPGF)</b>, instituído pelo <b>Decreto nº 5.355/2005</b>."],
  ["SF × licitação","O SF é <b>exceção à realização de procedimento licitatório</b>: destina-se justamente às situações que não comportam o processo normal de aplicação."],
  ["Resumo do fluxo contábil do SF","<b>Concessão</b> → despesa orçamentária (empenho, liquidação, pagamento) e aumento de ativo/passivo, <b>sem VPD</b>. <b>Prestação de contas</b> → reconhecimento da <b>VPD</b> e redução do PL."]
];

var QS = [
  ["O suprimento de fundos caracteriza-se por ser um adiantamento de valores a um servidor para futura prestação de contas.","C","CESPE","Por isso também é chamado de regime de adiantamento."],
  ["O suprimento de fundos é também conhecido como regime de adiantamento.","C","FCC","Arts. 68 e 69 da Lei nº 4.320/1964."],
  ["O regime de adiantamento tem a finalidade de realizar despesas que não possam subordinar-se ao processo normal de aplicação.","C","FGV","Redação do art. 68 da Lei nº 4.320/1964."],
  ["A entrega de numerário ao servidor, no regime de adiantamento, dispensa o prévio empenho na dotação própria.","E","CESPE","Será <b>sempre precedida de empenho</b> na dotação própria."],
  ["A concessão de suprimento de fundos fica a critério do ordenador de despesa e sob sua inteira responsabilidade.","C","VUNESP","É decisão discricionária, mas vinculada às hipóteses legais."],
  ["Despesas de caráter repetitivo podem ser objeto de concessão de suprimento de fundos, desde que de pequeno valor.","E","FCC","Despesas repetitivas são <b>previsíveis</b>, o que afasta a excepcionalidade que justifica o suprimento."],
  ["O suprimento de fundos constitui exceção à realização de procedimento licitatório.","C","CESPE","Destina-se a situações atípicas que exigem pronto pagamento e não podem aguardar o processo normal."],
  ["O suprimento de fundos constitui despesa orçamentária.","C","FGV","Mas não constitui despesa pelo enfoque patrimonial no momento da concessão."],
  ["O suprimento de fundos constitui despesa tanto pelo enfoque orçamentário quanto pelo enfoque patrimonial no momento da concessão.","E","CESPE","Pelo enfoque patrimonial não há despesa na concessão: <b>não ocorre redução no Patrimônio Líquido</b>."],
  ["A concessão do recurso ao suprido percorre os três estágios da despesa orçamentária: empenho, liquidação e pagamento.","C","FCC","Todos ocorrem no ato da concessão."],
  ["O suprimento de fundos possui três estágios: concessão, aplicação e prestação de contas.","E","VUNESP","São três <b>momentos ou fases</b>, e não estágios. Os estágios são empenho, liquidação e pagamento."],
  ["A redução do patrimônio líquido decorrente do suprimento de fundos ocorre no momento da concessão do adiantamento.","E","CESPE","Ocorre apenas na <b>prestação de contas</b>, com o reconhecimento da VPD."],
  ["A variação patrimonial diminutiva relativa ao suprimento de fundos é reconhecida no momento da prestação de contas.","C","FGV","É o que impede o reconhecimento da despesa patrimonial já na concessão."],
  ["Na liquidação da despesa com suprimento de fundos, sob o enfoque patrimonial, observam-se aumento no ativo e aumento no passivo.","C","FCC","Passivo: obrigação de adiantar ao servidor. Ativo: direito de receber o bem/serviço ou a devolução do numerário."],
  ["Na liquidação da despesa com suprimento de fundos há redução do ativo e redução do passivo.","E","CESPE","Há <b>aumento</b> de ambos — é o gabarito clássico dessa questão."],
  ["Servidor que recebeu R$ 1.000 de suprimento de fundos em determinado exercício e só aplicou o valor no exercício seguinte teve reconhecida, no exercício da concessão, uma variação patrimonial diminutiva de R$ 1.000.","E","CESPE","No exercício da concessão houve apenas despesa orçamentária. A VPD só surge com a prestação de contas."],
  ["O suprimento de fundos pode ser utilizado para atender a despesas eventuais, inclusive em viagem e com serviços especiais, que exijam pronto pagamento.","C","FCC","Primeira hipótese de aplicabilidade."],
  ["O suprimento de fundos é admitido quando a despesa deva ser feita em caráter sigiloso, conforme se classificar em regulamento.","C","FGV","Segunda hipótese de aplicabilidade."],
  ["São despesas de pequeno vulto, para fins de suprimento de fundos, aquelas cujo valor, em cada caso, não ultrapasse limite estabelecido em ato normativo próprio.","C","VUNESP","Terceira hipótese. Note o “em cada caso”."],
  ["O suprimento de fundos pode ser concedido para o pagamento de despesas ordinárias e continuadas do órgão, desde que autorizado pelo ordenador.","E","CESPE","Contraria a excepcionalidade: despesas ordinárias e continuadas seguem o processo normal de aplicação."],
  ["Não se concederá suprimento de fundos a responsável por dois suprimentos.","C","FCC","Ou seja, é permitida a concessão de <b>até dois</b> suprimentos."],
  ["É vedada a concessão de mais de um suprimento de fundos ao mesmo servidor.","E","FGV","A vedação alcança o <b>responsável por dois</b> suprimentos — até dois são permitidos."],
  ["Não se concederá suprimento de fundos a servidor que tenha a seu cargo a guarda ou a utilização do material a adquirir, salvo quando não houver na repartição outro servidor.","C","CESPE","É a única vedação com exceção expressa."],
  ["A vedação ao servidor que tem a guarda do material a adquirir é absoluta, não comportando exceção.","E","VUNESP","Comporta exceção: <b>quando não houver na repartição outro servidor</b>."],
  ["Não se concederá suprimento de fundos a responsável por suprimento que, esgotado o prazo, não tenha prestado contas de sua aplicação.","C","FCC","Terceira vedação."],
  ["Não se concederá suprimento de fundos a servidor declarado em alcance.","C","CESPE","Quarta vedação, que dialoga com o art. 69 da Lei nº 4.320/1964."],
  ["Servidor declarado em alcance é aquele que não prestou contas do suprimento ou cujas contas tenham sido impugnadas.","C","FGV","Conceito cobrado em conjunto com as vedações."],
  ["Não se fará adiantamento a servidor em alcance nem a responsável por dois adiantamentos.","C","FCC","Literalidade do art. 69 da Lei nº 4.320/1964."],
  ["O servidor que receber suprimento de fundos é obrigado a prestar contas de sua aplicação.","C","CESPE","Não o fazendo no prazo, procede-se automaticamente à tomada de contas."],
  ["Não prestadas as contas no prazo assinalado pelo ordenador de despesa, procede-se automaticamente à tomada de contas do suprido.","C","VUNESP","Sem prejuízo das providências administrativas para apuração das responsabilidades."],
  ["A responsabilidade pela aplicação do suprimento de fundos, após sua aprovação na respectiva prestação de contas, permanece com o servidor suprido.","E","CESPE","Passa a ser da <b>autoridade que o concedeu</b>."],
  ["A importância aplicada até 31 de dezembro será comprovada até 15 de janeiro do ano seguinte.","C","FCC","Prazo específico de comprovação na virada do exercício."],
  ["As restituições de suprimento de fundos por falta de aplicação, recolhidas no mesmo exercício em que foi concedido, constituem anulação de despesa.","C","FGV","A importância reverte à dotação."],
  ["As restituições de suprimento de fundos recolhidas após o encerramento do exercício em que foi concedido constituem receita orçamentária.","C","CESPE","Art. 38 da Lei nº 4.320/1964 — considera-se receita do ano em que se efetivar o recolhimento."],
  ["A restituição de suprimento de fundos recolhida no exercício seguinte ao da concessão constitui anulação de despesa daquele exercício.","E","VUNESP","Constitui <b>receita orçamentária</b>. A anulação de despesa só cabe dentro do mesmo exercício."],
  ["A regra das restituições aplica-se tanto à falta de aplicação, parcial ou total, quanto à aplicação indevida dos recursos.","C","FCC","São as duas hipóteses previstas."],
  ["O regime de adiantamento é aplicável aos casos expressamente definidos em lei.","C","CESPE","Art. 68 da Lei nº 4.320/1964, parte inicial."],
  ["Segundo a Lei nº 4.320/1964, o pagamento pode ser efetuado, em casos excepcionais, por meio de adiantamento.","C","FGV","Art. 65 — ao lado da tesouraria, da pagadoria e dos estabelecimentos bancários credenciados."],
  ["No âmbito federal, o suprimento de fundos é operacionalizado, em regra, por meio do Cartão de Pagamento do Governo Federal.","C","FCC","Instituído pelo Decreto nº 5.355/2005."],
  ["O suprimento de fundos dispensa a prestação de contas quando o valor concedido for de pequeno vulto.","E","CESPE","A prestação de contas é obrigatória em qualquer hipótese — é da essência do regime de adiantamento."]
];

var FEY = {
  u1:{ask:"Explique o que é o suprimento de fundos, sua finalidade e por que ele existe.",
    hint:"Diga o outro nome que ele tem, a que situações atende, o que exige antes da entrega do numerário e de quem é a decisão.",
    ref:"O suprimento de fundos, também conhecido como regime de adiantamento, caracteriza-se por ser um adiantamento de valores a um servidor para futura prestação de contas. Nos termos do art. 68 da Lei nº 4.320/1964, é aplicável aos casos de despesas expressamente definidos em lei e consiste na entrega de numerário a servidor, sempre precedida de empenho na dotação própria, para o fim de realizar despesas que não possam subordinar-se ao processo normal de aplicação. Sua razão de ser está em que o processo tradicional de realização de despesas é demorado, sobretudo quando exige prévia licitação, ao passo que o administrador público vivencia situações atípicas que exigem pronto pagamento em espécie e não podem aguardar o rito comum; o suprimento é, portanto, exceção à realização de procedimento licitatório. Justamente por isso, despesas de caráter repetitivo não são passíveis de concessão de suprimento de fundos, pois são consideradas previsíveis e não se reveste de excepcionalidade. A concessão fica a critério do ordenador de despesa e sob sua inteira responsabilidade."},
  u2:{ask:"Explique o tratamento contábil do suprimento de fundos: estágios, momentos e enfoques orçamentário e patrimonial.",
    hint:"Separe os três estágios da despesa orçamentária dos três momentos do SF. Depois diga por que não há despesa patrimonial na concessão e o que ocorre na liquidação.",
    ref:"O suprimento de fundos constitui despesa orçamentária, e sua concessão percorre os três estágios da despesa orçamentária: empenho, liquidação e pagamento, todos realizados no ato da concessão. Não se confundem com esses estágios os três momentos ou fases do suprimento de fundos, que são a concessão, a aplicação e a prestação de contas. Sob o enfoque patrimonial, contudo, o suprimento de fundos não representa despesa no momento da concessão, porque nele não ocorre redução do patrimônio líquido: na liquidação, ao mesmo tempo em que se registra um passivo, correspondente à obrigação de curto prazo de pagar ou adiantar ao servidor, há a incorporação de um ativo, correspondente ao direito de receber o bem ou serviço objeto do gasto a ser efetuado pelo suprido ou a devolução do numerário adiantado; observam-se, portanto, aumento no ativo e aumento no passivo. A redução do patrimônio líquido só ocorre no momento da prestação de contas, por meio do reconhecimento de uma variação patrimonial diminutiva."},
  u3:{ask:"Explique a aplicabilidade do suprimento de fundos e as vedações à sua concessão.",
    hint:"São três hipóteses de cabimento e quatro vedações. Diga qual delas tem exceção e o que significa estar “em alcance”.",
    ref:"O suprimento de fundos é aplicável em três hipóteses: para atender despesas eventuais, inclusive em viagem e com serviços especiais, que exijam pronto pagamento; quando a despesa deva ser feita em caráter sigiloso, conforme se classificar em regulamento; e para atender despesas de pequeno vulto, assim entendidas aquelas cujo valor, em cada caso, não ultrapasse o limite estabelecido em ato normativo próprio. Em contrapartida, não se concederá suprimento de fundos a responsável por dois suprimentos, o que significa que é permitida a concessão de até dois; a servidor que tenha a seu cargo a guarda ou a utilização do material a adquirir, salvo quando não houver na repartição outro servidor, única vedação que comporta exceção expressa; a responsável por suprimento de fundos que, esgotado o prazo, não tenha prestado contas de sua aplicação; e a servidor declarado em alcance, assim entendido aquele que não prestou contas do suprimento ou cujas contas tenham sido impugnadas. No mesmo sentido, o art. 69 da Lei nº 4.320/1964 dispõe que não se fará adiantamento a servidor em alcance nem a responsável por dois adiantamentos."},
  u4:{ask:"Explique a prestação de contas do suprimento de fundos e o regime das restituições.",
    hint:"Obrigação do suprido, consequência da omissão, de quem é a responsabilidade após a aprovação, o prazo da virada do exercício e as duas classificações da restituição.",
    ref:"O servidor que receber suprimento de fundos é obrigado a prestar contas de sua aplicação, procedendo-se automaticamente à tomada de contas se não o fizer no prazo assinalado pelo ordenador de despesa, sem prejuízo das providências administrativas para apuração das responsabilidades. A responsabilidade pela aplicação do suprimento de fundos, após sua aprovação na respectiva prestação de contas, é da autoridade que o concedeu. A importância aplicada até 31 de dezembro será comprovada até 15 de janeiro do ano seguinte. Quanto às restituições decorrentes de falta de aplicação, parcial ou total, ou de aplicação indevida, sua classificação depende do momento do recolhimento: se recolhidas no mesmo exercício em que foi concedido o suprimento, constituem anulação de despesa, revertendo a importância à dotação; se recolhidas após o encerramento do exercício da concessão, constituem receita orçamentária, na forma do art. 38 da Lei nº 4.320/1964, que considera receita do ano em que se efetivar o recolhimento a anulação ocorrida após o encerramento do exercício."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  w1:[
    sl("Suprimento de fundos — o conceito",
      '<p>Caracteriza-se por ser um <span class="key">adiantamento de valores a um servidor para futura prestação de contas</span>. É o mesmo que <b>regime de adiantamento</b>.</p>'+
      '<div class="box"><span class="bl">Lei nº 4.320/1964, art. 68</span><p>“O regime de adiantamento é aplicável aos casos de despesas <b>expressamente definidos em lei</b> e consiste na <b>entrega de numerário a servidor</b>, <b>sempre precedida de empenho na dotação própria</b>, para o fim de realizar despesas que <b>não possam subordinar-se ao processo normal de aplicação</b>.”</p></div>'+
      '<div class="box tip"><span class="bl">Os quatro pilares que caem juntos</span>'+
      '<ul><li>Também conhecido como <b>regime de adiantamento</b>;</li>'+
      '<li>Consiste na <b>entrega de numerário a servidor</b>;</li>'+
      '<li>Será <b>sempre precedida de empenho</b> na dotação própria;</li>'+
      '<li>Fica <b>a critério do ordenador de despesa e sob sua inteira responsabilidade</b>.</li></ul></div>'),
    sl("Qual a lógica do suprimento de fundos?",
      '<p>O processo tradicional de realização de despesas é <b>demorado</b>, principalmente quando se exige <b>prévia licitação</b>. O administrador, porém, vive situações que exigem <b>ações imediatas</b>.</p>'+
      '<div class="box"><span class="bl">A finalidade</span><p>Atender a <b>situações atípicas que exijam pronto pagamento em espécie</b>, que não podem aguardar o processo normal. É, portanto, <b>exceção à realização de procedimento licitatório</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Despesas repetitivas estão fora</span><p>As despesas de <b>caráter repetitivo não são passíveis</b> de concessão de suprimento de fundos: são consideradas <b>previsíveis</b>, o que retira a <b>excepcionalidade</b> que justifica o instituto.</p></div>'+
      '<div class="box tip"><span class="bl">Onde mais isso aparece</span><p>O art. 65 da Lei nº 4.320/1964 lista o <b>adiantamento</b> como forma <b>excepcional</b> de pagamento, ao lado da tesouraria, da pagadoria e dos estabelecimentos bancários credenciados. No âmbito federal, o SF é operacionalizado, em regra, pelo <b>Cartão de Pagamento do Governo Federal (CPGF)</b>, do Decreto nº 5.355/2005.</p></div>')
  ],
  w2:[
    sl("Estágios × momentos — a confusão preferida da banca",
      '<div class="chips">'+
      '<div class="chip"><span class="cn">3 ESTÁGIOS da despesa orçamentária</span><span class="cd"><b>Empenho · Liquidação · Pagamento</b> — todos ocorrem <b>no ato da concessão</b>.</span></div>'+
      '<div class="chip"><span class="cn">3 MOMENTOS (fases) do SF</span><span class="cd"><b>Concessão · Aplicação · Prestação de contas</b>.</span></div></div>'+
      '<div class="box trap"><span class="bl">O item falso clássico</span><p>“O suprimento de fundos possui três <b>estágios</b>: concessão, aplicação e prestação de contas.” → <b>ERRADO</b>. São <b>momentos/fases</b>. Os estágios são empenho, liquidação e pagamento.</p></div>'),
    sl("Enfoque orçamentário × enfoque patrimonial",
      '<div class="box"><span class="bl">Enfoque orçamentário</span><p>O SF <b>é despesa orçamentária</b>. A concessão percorre integralmente os três estágios: empenho, liquidação e pagamento.</p></div>'+
      '<div class="box trap"><span class="bl">Enfoque patrimonial</span><p>O SF <b>não</b> representa despesa pelo enfoque patrimonial <b>no momento da concessão</b>, pois <b>não ocorre redução no Patrimônio Líquido</b>.</p></div>'+
      '<div class="box"><span class="bl">Na liquidação</span><p>Ao mesmo tempo em que se registra um <b>passivo</b> (o órgão reconhece obrigação de curto prazo para pagar/adiantar ao servidor), há a <b>incorporação de um ativo</b> (direito de receber o bem ou serviço objeto do gasto, ou a devolução do numerário adiantado).</p>'+
      '<p>Efeitos: <b>aumento no ativo e aumento no passivo</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Quando o PL cai</span><p>A redução do PL só ocorre na <b>prestação de contas</b>, com o reconhecimento de uma <b>VPD</b> — Variação Patrimonial Diminutiva.</p></div>'),
    sl("A questão numérica que cai pronta",
      '<div class="prompt"><span class="vlab">Questão-exemplo · CESPE</span>'+
      '<p>Servidor recebeu <b>R$ 1.000</b> a título de suprimento de fundos em <b>2019</b> e gastou <b>60%</b> desse valor apenas em <b>2020</b>, tendo apresentado a prestação de contas. O valor não utilizado foi devolvido no momento da prestação de contas.</p>'+
      '<p><b>Item:</b> “Foram registradas uma despesa orçamentária e uma variação patrimonial diminutiva, no valor de R$ 1.000, em 2019.” → <b>ERRADO</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Por quê</span><p>Na concessão, a despesa orçamentária é <b>empenhada, liquidada e paga</b>. A <b>VPD</b> só é registrada com a <b>prestação de contas</b> do suprido. Em 2019 houve apenas a concessão — logo, <b>sem VPD</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Padrão de cobrança</span><p>Toda vez que o enunciado colocar concessão em um exercício e prestação de contas em outro, ele está testando <b>onde nasce a VPD</b>. A resposta é sempre: na <b>prestação de contas</b>.</p></div>')
  ],
  w3:[
    sl("Aplicabilidade — as três hipóteses",
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">1</span><span class="nm">Despesas eventuais</span></div><div class="fn-b"><p><b>Inclusive em viagem e com serviços especiais</b>, que exijam <b>pronto pagamento</b>.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">2</span><span class="nm">Caráter sigiloso</span></div><div class="fn-b"><p>Quando a despesa <b>deva ser feita em caráter sigiloso</b>, conforme se classificar em <b>regulamento</b>.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">3</span><span class="nm">Pequeno vulto</span></div><div class="fn-b"><p>Aquelas cujo valor, <b>em cada caso</b>, não ultrapasse <b>limite estabelecido em ato normativo próprio</b>.</p></div></div></div>'+
      '<div class="box trap"><span class="bl">Duas armadilhas de redação</span>'+
      '<ul><li>Trocar “<b>em cada caso</b>” por “no total do exercício” — o limite é por despesa.</li>'+
      '<li>Incluir despesas <b>ordinárias e continuadas</b> entre as hipóteses. Elas seguem o processo normal de aplicação.</li></ul></div>')
  ],
  w4:[
    sl("Vedações — as quatro proibições",
      '<div class="box"><span class="bl">Não se concederá suprimento de fundos</span>'+
      '<ul><li>A <b>responsável por dois suprimentos</b>;</li>'+
      '<li>A servidor que tenha a seu cargo a <b>guarda ou a utilização do material a adquirir</b>;</li>'+
      '<li>A responsável por suprimento de fundos que, <b>esgotado o prazo, não tenha prestado contas</b> de sua aplicação;</li>'+
      '<li>A <b>servidor declarado em alcance</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Duas leituras que valem ponto</span>'+
      '<ul><li>“Responsável por dois suprimentos” significa que é <b>permitida a concessão de até dois</b>.</li>'+
      '<li>A vedação da <b>guarda do material</b> é a <b>única com exceção</b>: cabe o suprimento <b>quando não houver na repartição outro servidor</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Servidor em alcance</span><p>É aquele que <b>não prestou contas</b> do suprimento <b>ou</b> cujas <b>contas tenham sido impugnadas</b>.</p></div>'+
      '<div class="box"><span class="bl">Lei nº 4.320/1964, art. 69</span><p>“Não se fará adiantamento a <b>servidor em alcance</b> nem a <b>responsável por dois adiantamentos</b>.”</p></div>'),
    sl("Prestação de contas",
      '<div class="box"><span class="bl">A obrigação</span><p>O servidor que receber suprimento de fundos é <b>obrigado a prestar contas</b> de sua aplicação.</p></div>'+
      '<div class="box trap"><span class="bl">Se não prestar</span><p>Procede-se <b>automaticamente à tomada de contas</b> se não o fizer no prazo assinalado pelo <b>ordenador de despesa</b>, <b>sem prejuízo</b> das providências administrativas para apuração das responsabilidades.</p></div>'+
      '<div class="box"><span class="bl">Quem responde depois</span><p>A responsabilidade pela aplicação do suprimento de fundos, <b>após sua aprovação na respectiva prestação de contas</b>, é da <b>autoridade que o concedeu</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Prazo da virada de exercício</span><p>A importância aplicada até <b>31 de dezembro</b> será comprovada até <b>15 de janeiro</b> do ano seguinte.</p></div>'),
    sl("Restituição do suprimento de fundos",
      '<p>As restituições por <span class="key">falta de aplicação, parcial ou total, ou aplicação indevida</span> constituirão:</p>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Mesmo exercício da concessão</span><span class="cd"><b>Anulação de despesa</b> — a importância reverte à dotação.</span></div>'+
      '<div class="chip"><span class="cn">Após o encerramento do exercício</span><span class="cd"><b>Receita orçamentária</b> do ano em que se efetivar o recolhimento.</span></div></div>'+
      '<div class="box"><span class="bl">Lei nº 4.320/1964, art. 38</span><p>“Reverte à dotação a importância de despesa anulada no exercício; quando a anulação ocorrer após o encerramento deste, considerar-se-á <b>receita do ano em que se efetivar o recolhimento</b>.”</p></div>'+
      '<div class="box trap"><span class="bl">O erro plantado</span><p>Dizer que a devolução feita no exercício seguinte é <b>anulação de despesa</b>. Passada a virada do exercício, é <b>receita orçamentária</b>.</p></div>')
  ]
};

var EX = {
b1:{t:"gap", instr:"Complete a frase",
  before:"O suprimento de fundos é um ", after:" a um servidor para futura prestação de contas.",
  options:["adiantamento de valores","empréstimo consignado","repasse definitivo"], answer:0,
  why:"Daí o outro nome do instituto: <b>regime de adiantamento</b>."},

b2:{t:"wordbank", instr:"Monte a finalidade legal do regime de adiantamento (art. 68)",
  target:["realizar","despesas","que","não","possam","subordinar-se","ao","processo","normal","de","aplicação"],
  extra:["licitatório","repetitivas","previsíveis"],
  why:"É a expressão que o examinador confere palavra por palavra."},

b3:{t:"multi", instr:"Marque o que é verdadeiro sobre o suprimento de fundos",
  options:["Também é conhecido como regime de adiantamento",
           "Consiste na entrega de numerário a servidor",
           "Será sempre precedida de empenho na dotação própria",
           "Fica a critério do ordenador de despesa e sob sua inteira responsabilidade",
           "Dispensa o empenho prévio quando o valor for de pequeno vulto",
           "Independe de prestação de contas posterior"],
  answers:[0,1,2,3],
  why:"O empenho prévio e a prestação de contas são da essência do instituto."},

b4:{t:"mc", instr:"Por que despesas de caráter repetitivo não podem ser pagas por suprimento de fundos?",
  options:["Porque são previsíveis, o que afasta a excepcionalidade do instituto",
           "Porque sempre ultrapassam o limite de pequeno vulto",
           "Porque exigem caráter sigiloso",
           "Porque não percorrem os estágios da despesa"],
  answer:0,
  why:"O SF é exceção ao processo normal — e à licitação —, reservado ao que não se pode prever."},

b5:{t:"gap", instr:"Complete a frase",
  before:"O suprimento de fundos atende a situações atípicas que exijam ",
  after:", sendo exceção à realização de procedimento licitatório.",
  options:["pronto pagamento em espécie","pagamento parcelado","empenho estimativo"],
  answer:0,
  why:"A urgência é o que justifica fugir do rito comum."},

b6:{t:"match", instr:"Correlacione o conjunto ao seu conteúdo",
  pairs:[["3 estágios da despesa orçamentária","Empenho, liquidação e pagamento"],
         ["3 momentos do suprimento de fundos","Concessão, aplicação e prestação de contas"]]},

b7:{t:"order", instr:"Ordene os três momentos (fases) do suprimento de fundos",
  items:["Concessão","Aplicação","Prestação de contas"],
  why:"São <b>momentos</b>, e não estágios. A VPD nasce apenas no terceiro."},

b8:{t:"mc", instr:"“O suprimento de fundos possui três estágios: concessão, aplicação e prestação de contas.” Esse enunciado:",
  options:["Está errado — esses são momentos/fases, não estágios",
           "Está certo — é a definição do MCASP",
           "Está errado — os momentos são empenho, liquidação e pagamento",
           "Está certo, desde que haja prévio empenho"],
  answer:0,
  why:"Os <b>estágios</b> são empenho, liquidação e pagamento."},

b9:{t:"sort", instr:"O suprimento de fundos é despesa sob qual enfoque, no momento da concessão?",
  buckets:["É despesa","Não é despesa"],
  items:[["Enfoque orçamentário",0],["Enfoque patrimonial",1]],
  why:"Na concessão não há redução do Patrimônio Líquido."},

b10:{t:"gap", instr:"Complete a frase",
  before:"O suprimento de fundos não é despesa pelo enfoque patrimonial na concessão porque não ocorre ",
  after:".",
  options:["redução no Patrimônio Líquido","aumento do ativo","registro de passivo"],
  answer:0,
  why:"Troca-se disponibilidade por um direito — o PL não se altera."},

b11:{t:"mc", instr:"Na liquidação da despesa com suprimento de fundos, no enfoque patrimonial, observam-se:",
  options:["Aumento no ativo e aumento no passivo","Redução no ativo e redução no passivo",
           "Aumento no ativo e redução no passivo","Redução do patrimônio líquido"],
  answer:0,
  why:"Passivo: obrigação de adiantar ao servidor. Ativo: direito de receber o bem/serviço ou a devolução do numerário."},

b12:{t:"gap", instr:"Complete a frase",
  before:"A redução do Patrimônio Líquido só ocorre no momento da ",
  after:", por meio do reconhecimento de uma VPD.",
  options:["prestação de contas","concessão","aplicação"], answer:0,
  why:"Variação Patrimonial Diminutiva — o coração da questão numérica do módulo."},

b13:{t:"multi", instr:"Servidor recebeu R$ 1.000 de SF no ano 1 e aplicou 60% só no ano 2. Marque o que é correto",
  options:["No ano 1 houve despesa orçamentária de R$ 1.000",
           "No ano 1 não houve reconhecimento de VPD",
           "A VPD é reconhecida com a prestação de contas",
           "No ano 1 a concessão percorreu empenho, liquidação e pagamento",
           "No ano 1 houve VPD de R$ 1.000",
           "No ano 1 houve redução do Patrimônio Líquido"],
  answers:[0,1,2,3],
  why:"É exatamente o item que a CESPE deu como <b>errado</b>: despesa orçamentária <b>e</b> VPD no ano da concessão."},

b14:{t:"multi", instr:"Marque as hipóteses de aplicabilidade do suprimento de fundos",
  options:["Despesas eventuais, inclusive em viagem e com serviços especiais, que exijam pronto pagamento",
           "Despesas que devam ser feitas em caráter sigiloso, conforme se classificar em regulamento",
           "Despesas de pequeno vulto, cujo valor em cada caso não ultrapasse limite de ato normativo próprio",
           "Despesas ordinárias e continuadas do órgão",
           "Despesas com pessoal e encargos sociais"],
  answers:[0,1,2],
  why:"São exatamente três hipóteses. Despesas ordinárias seguem o processo normal de aplicação."},

b15:{t:"gap", instr:"Complete a frase",
  before:"São de pequeno vulto as despesas cujo valor, ", after:", não ultrapasse limite estabelecido em ato normativo próprio.",
  options:["em cada caso","no total do exercício","por servidor suprido"],
  answer:0,
  why:"O limite é aferido <b>por despesa</b>, não pelo acumulado."},

b16:{t:"sort", instr:"Cabe suprimento de fundos nessa situação?",
  buckets:["Cabe SF","Não cabe SF"],
  items:[["Despesa eventual em viagem, com pronto pagamento",0],
         ["Despesa de caráter sigiloso classificada em regulamento",0],
         ["Despesa de pequeno vulto dentro do limite normativo",0],
         ["Conta mensal de energia elétrica da repartição",1],
         ["Contrato continuado de limpeza predial",1]],
  why:"A repetição torna a despesa previsível e afasta a excepcionalidade."},

b17:{t:"multi", instr:"Marque as vedações à concessão de suprimento de fundos",
  options:["A responsável por dois suprimentos",
           "A servidor que tenha a seu cargo a guarda ou a utilização do material a adquirir",
           "A responsável por suprimento que, esgotado o prazo, não tenha prestado contas",
           "A servidor declarado em alcance",
           "A servidor ocupante de cargo em comissão",
           "A servidor com menos de dois anos de efetivo exercício"],
  answers:[0,1,2,3],
  why:"São exatamente quatro. As duas últimas não existem na norma."},

b18:{t:"mc", instr:"A vedação relativa ao “responsável por dois suprimentos” significa que:",
  options:["É permitida a concessão de até dois suprimentos",
           "É permitido apenas um suprimento por servidor",
           "São permitidos no máximo três suprimentos",
           "A concessão é ilimitada, desde que haja prestação de contas"],
  answer:0,
  why:"A vedação alcança quem <b>já responde por dois</b>."},

b19:{t:"gap", instr:"Complete a frase",
  before:"Não se concederá SF a servidor que tenha a guarda ou a utilização do material a adquirir, ",
  after:".",
  options:["salvo quando não houver na repartição outro servidor","sem qualquer exceção",
           "salvo autorização do Tribunal de Contas"],
  answer:0,
  why:"É a única vedação com exceção expressa."},

b20:{t:"mc", instr:"Servidor declarado em alcance é aquele que:",
  options:["Não prestou contas do suprimento ou teve suas contas impugnadas",
           "Recebeu suprimento acima do limite de pequeno vulto",
           "Responde a processo disciplinar por qualquer motivo",
           "Tem a guarda do material a adquirir"],
  answer:0,
  why:"Conceito que o art. 69 da Lei nº 4.320/1964 pressupõe."},

b21:{t:"wordbank", instr:"Monte a regra do art. 69 da Lei nº 4.320/1964",
  target:["não","se","fará","adiantamento","a","servidor","em","alcance"],
  extra:["sigiloso","eventual","pequeno"],
  why:"Nem a servidor em alcance, nem a responsável por dois adiantamentos."},

b22:{t:"multi", instr:"Marque o que é correto sobre a prestação de contas do SF",
  options:["O suprido é obrigado a prestar contas da aplicação",
           "Não prestadas as contas no prazo, procede-se automaticamente à tomada de contas",
           "O prazo é assinalado pelo ordenador de despesa",
           "A tomada de contas não prejudica as providências para apuração de responsabilidades",
           "A prestação de contas é dispensada nas despesas de pequeno vulto",
           "A tomada de contas depende de autorização do Tribunal de Contas"],
  answers:[0,1,2,3],
  why:"A prestação de contas é obrigatória em qualquer hipótese."},

b23:{t:"mc", instr:"Após a aprovação da prestação de contas, a responsabilidade pela aplicação do SF é:",
  options:["Da autoridade que o concedeu","Do servidor suprido",
           "Do órgão de controle interno","Solidária entre suprido e ordenador"],
  answer:0,
  why:"Aprovadas as contas, a responsabilidade se desloca para quem concedeu."},

b24:{t:"gap", instr:"Complete a frase",
  before:"A importância aplicada até 31 de dezembro será comprovada até ", after:" do ano seguinte.",
  options:["15 de janeiro","31 de janeiro","20 de fevereiro"], answer:0,
  why:"Prazo específico da virada de exercício."},

b25:{t:"match", instr:"Correlacione o momento do recolhimento à classificação da restituição",
  pairs:[["Recolhida no mesmo exercício da concessão","Anulação de despesa"],
         ["Recolhida após o encerramento do exercício","Receita orçamentária"]]},

b26:{t:"sort", instr:"Classifique a restituição do suprimento de fundos",
  buckets:["Anulação de despesa","Receita orçamentária"],
  items:[["Devolução em novembro do mesmo ano da concessão",0],
         ["Devolução em dezembro do ano da concessão",0],
         ["Devolução em março do ano seguinte",1],
         ["Devolução dois exercícios depois da concessão",1]],
  why:"O corte é o <b>encerramento do exercício</b> em que o suprimento foi concedido."},

b27:{t:"gap", instr:"Complete a frase",
  before:"Reverte à dotação a importância de despesa anulada no exercício; anulada após o encerramento deste, considerar-se-á ",
  after:" do ano em que se efetivar o recolhimento.",
  options:["receita","despesa extraorçamentária","restos a pagar"], answer:0,
  why:"Art. 38 da Lei nº 4.320/1964 — o fundamento da regra das restituições."},

b28:{t:"multi", instr:"Marque o que a Lei nº 4.320/1964 dispõe sobre o adiantamento",
  options:["É aplicável aos casos de despesas expressamente definidos em lei",
           "Consiste na entrega de numerário a servidor",
           "É sempre precedido de empenho na dotação própria",
           "O pagamento pode ser efetuado, em casos excepcionais, por meio de adiantamento",
           "Dispensa a indicação da dotação orçamentária",
           "Pode ser concedido a responsável por dois adiantamentos"],
  answers:[0,1,2,3],
  why:"Arts. 65, 68 e 69. As duas últimas contrariam expressamente a lei."},

b29:{t:"order", instr:"Ordene o fluxo completo do suprimento de fundos",
  items:["Empenho na dotação própria",
         "Liquidação e pagamento ao suprido (concessão)",
         "Aplicação dos recursos pelo servidor",
         "Prestação de contas e reconhecimento da VPD",
         "Eventual restituição do saldo não aplicado"],
  why:"Os três estágios se esgotam na concessão; a VPD só aparece na prestação de contas."},

b30:{t:"mc", instr:"No âmbito federal, o suprimento de fundos é operacionalizado, em regra, por meio:",
  options:["Do Cartão de Pagamento do Governo Federal (CPGF)","De cheque nominativo ao suprido",
           "De transferência ao fundo do órgão","De ordem bancária de crédito a terceiros"],
  answer:0,
  why:"Instituído pelo Decreto nº 5.355/2005."}
};

for(var i=0;i<QS.length;i++) EX["d"+i]={t:"ce", qi:i};

var KIT = {
  u1:{tema:"Suprimento de fundos — conceito e finalidade",
    bases:["Lei nº 4.320/1964, art. 68 — regime de adiantamento",
           "Lei nº 4.320/1964, art. 65 — pagamento em casos excepcionais por adiantamento",
           "Decreto nº 93.872/1986, art. 45 — suprimento de fundos",
           "Decreto nº 5.355/2005 — Cartão de Pagamento do Governo Federal",
           "MCASP — suprimento de fundos"],
    ouro:["adiantamento de valores a um servidor","futura prestação de contas","regime de adiantamento",
          "entrega de numerário a servidor","sempre precedida de empenho na dotação própria",
          "não possam subordinar-se ao processo normal de aplicação","pronto pagamento em espécie",
          "exceção à realização de procedimento licitatório","a critério do ordenador de despesa"],
    abertura:"O suprimento de fundos, também denominado regime de adiantamento, consiste, nos termos do art. 68 da Lei nº 4.320/1964, na entrega de numerário a servidor, sempre precedida de empenho na dotação própria, para o fim de realizar despesas que não possam subordinar-se ao processo normal de aplicação, ficando sua concessão a critério do ordenador de despesa e sob sua inteira responsabilidade.",
    evite:"Não descreva o suprimento como entrega de numerário <b>sem empenho</b> nem o admita para despesas de <b>caráter repetitivo</b>: a previsibilidade afasta a excepcionalidade que o justifica."},
  u2:{tema:"Tratamento contábil — estágios, momentos e VPD",
    bases:["Lei nº 4.320/1964, arts. 58, 63 e 62 — empenho, liquidação e pagamento",
           "MCASP — enfoques orçamentário e patrimonial da despesa",
           "MCASP — variação patrimonial diminutiva (VPD)",
           "NBC TSP — regime de competência patrimonial"],
    ouro:["despesa orçamentária","não é despesa pelo enfoque patrimonial",
          "empenho, liquidação e pagamento","concessão, aplicação e prestação de contas",
          "momentos, e não estágios","redução no Patrimônio Líquido",
          "variação patrimonial diminutiva","aumento no ativo e aumento no passivo"],
    abertura:"O suprimento de fundos constitui despesa orçamentária, percorrendo sua concessão os três estágios de empenho, liquidação e pagamento, sem que represente, nesse momento, despesa sob o enfoque patrimonial, dado que não há redução do patrimônio líquido, a qual somente ocorre na prestação de contas, com o reconhecimento da variação patrimonial diminutiva.",
    evite:"Não chame concessão, aplicação e prestação de contas de <b>estágios</b>. São <b>momentos ou fases</b> — e o examinador pontua exatamente essa palavra."},
  u3:{tema:"Aplicabilidade e vedações",
    bases:["Decreto nº 93.872/1986, art. 45 — hipóteses de aplicabilidade e vedações",
           "Lei nº 4.320/1964, art. 69 — servidor em alcance e dois adiantamentos",
           "MCASP — despesas de pequeno vulto"],
    ouro:["despesas eventuais, inclusive em viagem e com serviços especiais","pronto pagamento",
          "caráter sigiloso, conforme se classificar em regulamento","despesas de pequeno vulto",
          "em cada caso","limite estabelecido em ato normativo próprio",
          "responsável por dois suprimentos","guarda ou a utilização do material a adquirir",
          "salvo quando não houver na repartição outro servidor","servidor declarado em alcance"],
    abertura:"O suprimento de fundos é cabível para atender despesas eventuais, inclusive em viagem e com serviços especiais, que exijam pronto pagamento; despesas que devam ser feitas em caráter sigiloso, conforme se classificar em regulamento; e despesas de pequeno vulto, assim entendidas aquelas cujo valor, em cada caso, não ultrapasse o limite estabelecido em ato normativo próprio.",
    evite:"Não afirme que é vedada a concessão de <b>mais de um</b> suprimento ao mesmo servidor. A vedação alcança o <b>responsável por dois</b> — até dois são permitidos."},
  u4:{tema:"Prestação de contas e restituições",
    bases:["Decreto nº 93.872/1986, art. 46 — prestação de contas e tomada de contas",
           "Decreto nº 93.872/1986, art. 47 — responsabilidade após a aprovação",
           "Lei nº 4.320/1964, art. 38 — anulação de despesa e receita do exercício",
           "Lei nº 4.320/1964, art. 93 — responsabilidade por dinheiros públicos"],
    ouro:["obrigado a prestar contas de sua aplicação","tomada de contas automática",
          "prazo assinalado pelo ordenador de despesa","apuração das responsabilidades",
          "autoridade que o concedeu","comprovada até 15 de janeiro do ano seguinte",
          "falta de aplicação, parcial ou total","aplicação indevida",
          "anulação de despesa","receita orçamentária"],
    abertura:"O servidor que receber suprimento de fundos é obrigado a prestar contas de sua aplicação, procedendo-se automaticamente à tomada de contas se não o fizer no prazo assinalado pelo ordenador de despesa, sem prejuízo das providências administrativas para apuração das responsabilidades, cabendo à autoridade concedente a responsabilidade pela aplicação após a aprovação das respectivas contas.",
    evite:"Não classifique a devolução feita em exercício posterior como <b>anulação de despesa</b>. Passada a virada do exercício, a restituição é <b>receita orçamentária</b>, na forma do art. 38 da Lei nº 4.320/1964."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. Tema curto e muito literal — e com forte apelo contábil, o que favorece o cargo de Contador. Cada distinção nomeada é ponto.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre o suprimento de fundos, disserte necessariamente sobre:</p>'+
  '<ol><li>o conceito, a finalidade e os requisitos de concessão do instituto;</li>'+
  '<li>as hipóteses de aplicabilidade e as vedações à sua concessão;</li>'+
  '<li>o tratamento contábil do suprimento sob os enfoques orçamentário e patrimonial, bem como o regime das restituições.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>O suprimento de fundos, também denominado <b>regime de adiantamento</b>, caracteriza-se por ser um <b>adiantamento de valores a um servidor para futura prestação de contas</b>. Nos termos do <b>art. 68 da Lei nº 4.320/1964</b>, é aplicável aos casos de despesas <b>expressamente definidos em lei</b> e consiste na <b>entrega de numerário a servidor</b>, <b>sempre precedida de empenho na dotação própria</b>, para o fim de realizar despesas que <b>não possam subordinar-se ao processo normal de aplicação</b>. Sua razão de ser reside em que o processo tradicional de realização da despesa é moroso, notadamente quando exige prévia licitação, ao passo que a Administração se depara com situações atípicas que exigem <b>pronto pagamento em espécie</b>; o instituto constitui, assim, <b>exceção à realização de procedimento licitatório</b>. Justamente por isso, as despesas de <b>caráter repetitivo</b> não são passíveis de concessão, por serem previsíveis e, portanto, desprovidas da excepcionalidade que o justifica. A concessão fica <b>a critério do ordenador de despesa e sob sua inteira responsabilidade</b>, e o art. 65 da mesma lei arrola o adiantamento como forma <b>excepcional</b> de pagamento.</p>'+
  '<p>Quanto à <b>aplicabilidade</b>, o suprimento é cabível em três hipóteses: para atender <b>despesas eventuais, inclusive em viagem e com serviços especiais, que exijam pronto pagamento</b>; quando a despesa deva ser feita em <b>caráter sigiloso</b>, conforme se classificar em regulamento; e para atender <b>despesas de pequeno vulto</b>, assim entendidas aquelas cujo valor, <b>em cada caso</b>, não ultrapasse o limite estabelecido em ato normativo próprio. As <b>vedações</b>, por sua vez, são quatro: não se concederá suprimento a <b>responsável por dois suprimentos</b> — donde se conclui que é permitida a concessão de até dois —; a servidor que tenha a seu cargo a <b>guarda ou a utilização do material a adquirir</b>, <b>salvo quando não houver na repartição outro servidor</b>, única vedação com exceção expressa; a responsável por suprimento que, <b>esgotado o prazo, não tenha prestado contas</b> de sua aplicação; e a <b>servidor declarado em alcance</b>, assim entendido aquele que não prestou contas do suprimento ou cujas contas foram impugnadas. No mesmo sentido, o <b>art. 69</b> da Lei nº 4.320/1964 veda o adiantamento a servidor em alcance e a responsável por dois adiantamentos.</p>'+
  '<p>Sob o <b>enfoque orçamentário</b>, o suprimento de fundos <b>constitui despesa orçamentária</b>, e sua concessão percorre os três estágios de <b>empenho, liquidação e pagamento</b>, que não se confundem com os três <b>momentos</b> do instituto — <b>concessão, aplicação e prestação de contas</b>. Sob o <b>enfoque patrimonial</b>, contudo, a concessão <b>não</b> representa despesa, porquanto dela <b>não resulta redução do patrimônio líquido</b>: na liquidação registra-se um <b>passivo</b>, correspondente à obrigação de curto prazo de adiantar ao servidor, e incorpora-se simultaneamente um <b>ativo</b>, correspondente ao direito de receber o bem ou serviço ou a devolução do numerário, de modo que se observam <b>aumento no ativo e aumento no passivo</b>. A redução do patrimônio líquido ocorre apenas na <b>prestação de contas</b>, com o reconhecimento de uma <b>variação patrimonial diminutiva</b>. O suprido é obrigado a prestar contas, procedendo-se <b>automaticamente à tomada de contas</b> se não o fizer no prazo assinalado pelo ordenador, e a responsabilidade pela aplicação, após aprovadas as contas, é da <b>autoridade concedente</b>; a importância aplicada até 31 de dezembro será comprovada até <b>15 de janeiro</b> do ano seguinte.</p>'+
  '<p>Por fim, as <b>restituições</b> decorrentes de falta de aplicação, parcial ou total, ou de aplicação indevida, constituirão <b>anulação de despesa</b> se recolhidas no mesmo exercício da concessão, revertendo à dotação, e <b>receita orçamentária</b> se recolhidas após o encerramento desse exercício, na forma do <b>art. 38 da Lei nº 4.320/1964</b>.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> os dois nomes do instituto, a literalidade do art. 68 com o <b>empenho prévio</b>, a exclusão das despesas repetitivas e a responsabilidade do ordenador.</li>'+
  '<li><b>Item 2:</b> as três hipóteses (com “em cada caso”) e as quatro vedações, destacando a leitura do “até dois” e a única exceção.</li>'+
  '<li><b>Item 3:</b> estágios × momentos, o par ativo/passivo na liquidação, a VPD só na prestação de contas e as duas classificações da restituição com o art. 38.</li>'+
  '<li><b>Fecho:</b> citar o art. 38 fecha o raciocínio patrimonial e orçamentário do tema.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Responda item a item, com o dispositivo entre parênteses em vez de parágrafo explicativo.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>Em determinado tribunal, o ordenador de despesa praticou os seguintes atos:</p>'+
  '<ol><li>concedeu suprimento de fundos de R$ 4.000 ao servidor encarregado do almoxarifado para aquisição de material de expediente, havendo outros servidores disponíveis na repartição;</li>'+
  '<li>concedeu suprimento de fundos para o pagamento da conta mensal de telefonia do prédio-sede;</li>'+
  '<li>concedeu, em 10 de dezembro, suprimento de R$ 3.000 a servidor que aplicou R$ 1.800 até 31 de dezembro, prestou contas em 12 de janeiro e devolveu R$ 1.200 em 20 de fevereiro do ano seguinte;</li>'+
  '<li>manteve, após a aprovação das contas do item 3, a responsabilidade pela aplicação exclusivamente com o servidor suprido.</li></ol>'+
  '<p><b>Pergunta-se:</b> avalie a regularidade dos atos, classifique a devolução do item 3 e indique os registros contábeis pertinentes.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1. Suprimento ao encarregado do almoxarifado.</b> <b>Irregular.</b> Não se concede suprimento de fundos a servidor que tenha a seu cargo <b>a guarda ou a utilização do material a adquirir</b>. A exceção — inexistência de outro servidor na repartição — não se configurou, pois havia outros servidores disponíveis.</p>'+
  '<p><b>2. Suprimento para conta de telefonia.</b> <b>Irregular.</b> Trata-se de despesa de <b>caráter repetitivo</b> e, portanto, <b>previsível</b>, que não se reveste da excepcionalidade exigida. Despesas dessa natureza devem seguir o <b>processo normal de aplicação</b>, sendo empenhadas na modalidade <b>estimativa</b> (art. 60, § 2º, da Lei nº 4.320/1964).</p>'+
  '<p><b>3. Concessão, comprovação e devolução.</b> A <b>concessão</b> de R$ 3.000 constituiu <b>despesa orçamentária</b>, percorrendo empenho, liquidação e pagamento; na liquidação houve <b>aumento de ativo e de passivo</b>, sem VPD. A <b>prestação de contas</b>, em 12 de janeiro, observou o prazo, pois a importância aplicada até 31 de dezembro deve ser comprovada até <b>15 de janeiro</b> do ano seguinte; nesse momento reconhece-se a <b>VPD de R$ 1.800</b>, com a correspondente <b>redução do patrimônio líquido</b>. A <b>devolução de R$ 1.200</b>, feita em 20 de fevereiro — portanto <b>após o encerramento do exercício da concessão</b> —, constitui <b>receita orçamentária</b>, e não anulação de despesa, na forma do <b>art. 38 da Lei nº 4.320/1964</b>.</p>'+
  '<p><b>4. Responsabilidade após a aprovação das contas.</b> <b>Incorreto.</b> A responsabilidade pela aplicação do suprimento de fundos, <b>após sua aprovação na respectiva prestação de contas</b>, é da <b>autoridade que o concedeu</b>, e não do servidor suprido.</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>Validar o <b>1</b> invocando a exceção da guarda do material. Ela só vale se <b>não houver outro servidor</b> na repartição.</li>'+
  '<li>Aceitar o <b>2</b> por ser “despesa de pequeno vulto”. O valor não salva a operação: falta <b>excepcionalidade</b>.</li>'+
  '<li>Chamar a devolução do <b>3</b> de <b>anulação de despesa</b>. Feita em exercício posterior, é <b>receita orçamentária</b>.</li>'+
  '<li>Reconhecer a VPD já na concessão. Ela nasce apenas na <b>prestação de contas</b>, e no valor <b>efetivamente aplicado</b>.</li></ul></div>';

var TEC = [["CESPE","Q3cRoH"],["FCC","Q3cRof"],["FGV","Q3cRpB"],["VUNESP","Q3cRpu"]];

var UNITS = [
  {n:1, title:"Conceito e finalidade", cvar:"u1", lessons:[
    {id:"s1", type:"teoria", title:"Conceito e lógica do SF",           xp:10, data:"w1"},
    {id:"s2", type:"drill",  title:"Praticar · conceito",               xp:20, data:["b1","b2","b3","d0","d1","d2","d3"]},
    {id:"s3", type:"drill",  title:"Praticar · finalidade e licitação",  xp:20, data:["b4","b5","d4","d5","d6"]},
    {id:"s4", type:"flash",  title:"Flashcards · conceito",             xp:15, data:[0,1,2,3,4,5]},
    {id:"s5", type:"feynman",title:"Explique o suprimento de fundos",   xp:30, data:"u1"}
  ]},
  {n:2, title:"Tratamento contábil", cvar:"u2", lessons:[
    {id:"s7", type:"teoria", title:"Estágios, momentos e enfoques",     xp:10, data:"w2"},
    {id:"s8", type:"drill",  title:"Praticar · estágios × momentos",    xp:20, data:["b6","b7","b8","d9","d10"]},
    {id:"s9", type:"drill",  title:"Praticar · enfoque patrimonial",    xp:25, data:["b9","b10","b11","d7","d8","d11","d12"]},
    {id:"s10",type:"drill",  title:"Praticar · VPD e liquidação",       xp:25, data:["b12","b13","d13","d14","d15"]},
    {id:"s11",type:"flash",  title:"Flashcards · contabilidade do SF",  xp:15, data:[6,7,8,9,10,11,12]},
    {id:"s12",type:"feynman",title:"Explique o tratamento contábil",    xp:30, data:"u2"}
  ]},
  {n:3, title:"Aplicabilidade e vedações", cvar:"u3", lessons:[
    {id:"s14",type:"teoria", title:"As três hipóteses de cabimento",    xp:10, data:"w3"},
    {id:"s15",type:"drill",  title:"Praticar · aplicabilidade",         xp:20, data:["b14","b15","b16","d16","d17","d18","d19"]},
    {id:"s16",type:"teoria", title:"Vedações e prestação de contas",    xp:10, data:"w4"},
    {id:"s17",type:"drill",  title:"Praticar · vedações",               xp:25, data:["b17","b18","b19","d20","d21","d22","d23"]},
    {id:"s18",type:"drill",  title:"Praticar · alcance e art. 69",      xp:20, data:["b20","b21","d24","d25","d26","d27"]},
    {id:"s19",type:"flash",  title:"Flashcards · cabimento e vedações", xp:15, data:[13,14,15,16,17,18,19,20,21]},
    {id:"s20",type:"feynman",title:"Explique cabimento e vedações",     xp:30, data:"u3"}
  ]},
  {n:4, title:"Prestação de contas e restituições", cvar:"u4", lessons:[
    {id:"s22",type:"drill",  title:"Praticar · prestação de contas",    xp:20, data:["b22","b23","b24","d28","d29","d30","d31","d39"]},
    {id:"s23",type:"drill",  title:"Praticar · restituições",           xp:25, data:["b25","b26","b27","d32","d33","d34","d35"]},
    {id:"s24",type:"drill",  title:"Praticar · a Lei 4.320 e o CPGF",   xp:25, data:["b28","b29","b30","d36","d37","d38"]},
    {id:"s25",type:"flash",  title:"Flashcards · contas e restituições", xp:15, data:[22,23,24,25,26,27,28,29,30,31,32,33,34]},
    {id:"s26",type:"feynman",title:"Explique contas e restituições",    xp:30, data:"u4"}
  ]},
  {n:5, title:"Aplicação e prova", cvar:"u1", lessons:[
    {id:"s28",type:"leitura",title:"Discursiva resolvida",              xp:25, data:"disc"},
    {id:"s29",type:"leitura",title:"Estudo de caso resolvido",          xp:25, data:"caso"},
    {id:"srev",type:"review",title:"Revisão geral das unidades",        xp:60, data:null},
    {id:"s30",type:"missao", title:"Missão TEC Concursos",              xp:15, data:null},
    {id:"s31",type:"prova",  title:"Simulado cronometrado",             xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo — é a frase de abertura do Resumo: o suprimento de fundos caracteriza-se por ser um <b>adiantamento de valores a um servidor</b> para <b>futura prestação de contas</b>.</p><p>Os dois elementos cobram-se juntos: primeiro o dinheiro sai (adiantamento), depois vem a comprovação (prestação de contas). É o inverso do fluxo normal da despesa.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Suprimento de Fundos (SF)</i></p>",
1:"<p>Certo. O esquema do Resumo abre com isso: o suprimento de fundos <b>também é conhecido como Regime de Adiantamento</b>.</p><p>Guarde os dois nomes — as bancas alternam entre eles no mesmo edital, e algumas questões trazem só \"regime de adiantamento\" para testar se você reconhece o instituto.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Suprimento de Fundos — esquema</i></p>",
2:"<p>Certo — é inclusive a alternativa-gabarito de uma das QUESTÕES-EXEMPLO do Resumo sobre o regime de adiantamento.</p><p>No esquema do material: a finalidade do SF é <b>realizar despesas que, pela excepcionalidade, não possam subordinar-se ao processo normal de aplicação</b>. A palavra-chave é <b>excepcionalidade</b>.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Suprimento de Fundos — QUESTÃO-EXEMPLO</i></p>",
3:"<p>Errado. O esquema do Resumo é expresso: a entrega de numerário a servidor <b>será sempre precedida de empenho na dotação própria</b>.</p><p>Nada de dispensa: o SF é <b>despesa orçamentária</b> e, como tal, passa pelos três estágios — empenho, liquidação e pagamento — já no ato da concessão.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Suprimento de Fundos — esquema</i></p>",
4:"<p>Certo, literal do esquema do Resumo: o SF fica <b>a critério do ordenador de despesa</b> e sob sua <b>inteira responsabilidade</b>.</p><p>Isso conversa com a regra da prestação de contas: é o ordenador quem assinala o prazo, e a responsabilidade pela aplicação, após aprovadas as contas, é <b>da autoridade que concedeu</b>.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Suprimento de Fundos — esquema</i></p>",
5:"<p>Errado. O Resumo é direto: as despesas que tenham <b>caráter repetitivo NÃO são passíveis</b> de concessão de suprimento de fundos.</p><p>A razão dada pelo material: sendo repetitivas, são <b>previsíveis</b>, e aí não se justifica a <b>excepcionalidade</b> que fundamenta o instituto. O valor pequeno não salva a assertiva.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Qual a lógica do SF?</i></p>",
6:"<p>Certo. No quadro <b>QUAL A LÓGICA DO SF?</b>, o Resumo afirma que a finalidade é atender situações atípicas que exijam <b>pronto pagamento em espécie</b>, ou seja, o SF é <b>exceção à realização de procedimento licitatório</b>.</p><p>O raciocínio do material: o processo tradicional da despesa é demorado, sobretudo com licitação prévia, e há situações que exigem ação imediata.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Qual a lógica do SF?</i></p>",
7:"<p>Certo. OBSERVAÇÃO 01 do Resumo: o SF <b>é uma despesa orçamentária</b> — mas <b>não é despesa pelo enfoque patrimonial</b>.</p><p>Essa é a distinção que o módulo inteiro explora. Orçamentariamente há despesa desde a concessão; patrimonialmente, nada ainda, porque não houve redução do PL.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>OBSERVAÇÃO 01</i></p>",
8:"<p>Errado na <b>segunda metade</b>. Pelas OBSERVAÇÕES 01 e 04 do Resumo, o SF é despesa <b>orçamentária</b>, mas <b>não</b> representa despesa pelo <b>enfoque patrimonial</b>.</p><p>O motivo dado pelo material: no momento da <b>concessão não ocorre redução no Patrimônio Líquido</b>. A redução só vem depois, com a prestação de contas.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>OBSERVAÇÕES 01 e 04</i></p>",
9:"<p>Certo. OBSERVAÇÃO 02 do Resumo: a concessão do recurso ao suprido percorre os <b>3 estágios da despesa orçamentária</b> — <b>empenho, liquidação e pagamento</b>.</p><p>Não confunda com a OBSERVAÇÃO 03: o SF tem também <b>3 momentos/fases</b> (concessão, aplicação e prestação de contas), que <b>não são estágios</b>.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>OBSERVAÇÃO 02</i></p>",
10:"<p>Errado na <b>palavra</b>. A OBSERVAÇÃO 03 do Resumo faz questão de grifar: concessão, aplicação e prestação de contas são <b>momentos/fases</b> do SF — <b>não são estágios</b>.</p><p>Os <b>estágios</b> são os da despesa orçamentária: empenho, liquidação e pagamento (OBSERVAÇÃO 02). São <b>3 e 3</b>, e a banca troca uma lista pela outra.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>OBSERVAÇÃO 03</i></p>",
11:"<p>Errado no <b>momento</b>. Pela OBSERVAÇÃO 04, no ato da <b>concessão não ocorre redução no Patrimônio Líquido</b> — por isso o SF não é despesa sob o enfoque patrimonial.</p><p>A OBSERVAÇÃO 05 dá o momento certo: a redução no PL <b>só ocorre na prestação de contas</b>, pelo reconhecimento de uma <b>VPD (Variação Patrimonial Diminutiva)</b>.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>OBSERVAÇÕES 04 e 05</i></p>",
12:"<p>Certo pela OBSERVAÇÃO 05 do Resumo: a redução no PL só ocorre no momento da <b>prestação de contas</b>, por meio do reconhecimento de uma <b>VPD</b>.</p><p>Fixe a linha do tempo do material: concessão → despesa orçamentária (empenho, liquidação, pagamento); prestação de contas → VPD e redução do PL.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>OBSERVAÇÃO 05</i></p>",
13:"<p>Certo — é a alternativa-gabarito da QUESTÃO-EXEMPLO do Resumo: <b>aumento no ativo e aumento no passivo</b>.</p><p>O comentário do material explica: na liquidação registra-se um <b>passivo</b> (obrigação de curto prazo de adiantar ao servidor) e, ao mesmo tempo, incorpora-se um <b>ativo</b> (direito de receber o bem ou serviço, ou a devolução do numerário adiantado).</p><p class='fb-fonte'>AFO — Resumo 11 · <i>OBSERVAÇÃO 06 / QUESTÃO-EXEMPLO</i></p>",
14:"<p>Errado — <b>inverteu os sinais</b>. Pela OBSERVAÇÃO 06 do Resumo, na liquidação da despesa com SF há <b>aumento</b> de ativo e <b>aumento</b> de passivo, e não reduções.</p><p>Repare que, justamente por serem duas variações de mesmo valor e sinais compensados, o <b>PL não se altera</b> — mais uma confirmação de que ali ainda não há despesa patrimonial.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>OBSERVAÇÃO 06</i></p>",
15:"<p>Errado — é a QUESTÃO-EXEMPLO do Resumo, com gabarito <b>ERRADO</b> e estes mesmos números (R$ 1.000 concedidos em 2019, 60% gastos apenas em 2020).</p><p>O comentário do material: na concessão, a despesa orçamentária é empenhada, liquidada e paga; <b>só com a prestação de contas</b> há o efetivo registro da <b>VPD</b>. Em 2019 houve apenas a concessão, logo não há VPD nesse exercício.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>QUESTÃO-EXEMPLO — VPD do suprimento</i></p>",
16:"<p>Certo — é a primeira hipótese do quadro de aplicabilidade do Resumo, e a alternativa-gabarito de uma das QUESTÕES-EXEMPLO: <b>despesas eventuais, inclusive em viagem e com serviços especiais, que exijam pronto pagamento</b>.</p><p>As outras duas hipóteses do quadro: despesa em <b>caráter sigiloso</b> e despesas de <b>pequeno vulto</b>.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Aplicabilidade do Suprimento de Fundos</i></p>",
17:"<p>Certo. É a segunda hipótese do quadro do Resumo: o SF é aplicável <b>quando a despesa deva ser feita em caráter sigiloso, conforme se classificar em regulamento</b>.</p><p>Repare na remissão: quem define o que é sigiloso é o <b>regulamento</b>, não o servidor no caso concreto.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Aplicabilidade do Suprimento de Fundos</i></p>",
18:"<p>Certo. Terceira hipótese do quadro do Resumo: <b>despesas de pequeno vulto</b> são aquelas cujo valor, <b>em cada caso</b>, não ultrapasse <b>limite estabelecido em ato normativo próprio</b>.</p><p>Duas marcas importantes: a aferição é <b>caso a caso</b>, e o limite não está na lei, mas em <b>ato normativo próprio</b> — por isso o material não fixa percentual nem valor.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Aplicabilidade do Suprimento de Fundos</i></p>",
19:"<p>Errado. O quadro <b>QUAL A LÓGICA DO SF?</b> exclui exatamente esse caso: despesas de <b>caráter repetitivo não são passíveis</b> de suprimento de fundos, porque são <b>previsíveis</b> e não têm a excepcionalidade exigida.</p><p>As hipóteses admitidas são apenas três: despesas <b>eventuais</b> (inclusive viagem e serviços especiais) com pronto pagamento, despesa <b>sigilosa</b> e despesa de <b>pequeno vulto</b>. Autorização do ordenador não amplia a lista.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Qual a lógica do SF? / Aplicabilidade</i></p>",
20:"<p>Certo — primeira vedação do Resumo: não se concederá suprimento de fundos <b>a responsável por dois suprimentos</b>.</p><p>Leia com o comentário que o material coloca logo abaixo: <b>é permitida a concessão de até dois suprimentos</b>. O terceiro é que está barrado.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Vedações ao Suprimento de Fundos</i></p>",
21:"<p>Errado por <b>apertar demais a vedação</b>. O Resumo esclarece a regra: como não se concede a responsável por <b>dois</b> suprimentos, <b>é permitida a concessão de até dois suprimentos</b> ao mesmo servidor.</p><p>Ou seja, o segundo é legítimo; o impedimento surge quando o servidor já responde por dois. Conte sempre até dois.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Vedações ao Suprimento de Fundos</i></p>",
22:"<p>Certo, com a ressalva na medida certa. O Resumo veda o SF <b>a servidor que tenha a seu cargo a guarda ou a utilização do material a adquirir</b>, e abre a <b>exceção</b>: <b>quando não houver na repartição outro servidor</b>.</p><p>A lógica é de segregação de funções: quem guarda o material não deve ser quem compra — salvo se não houver alternativa na repartição.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Vedações ao Suprimento de Fundos</i></p>",
23:"<p>Errado. Essa é a <b>única vedação do Resumo que traz exceção expressa</b>: a proibição ao servidor que tem a guarda ou utilização do material a adquirir cede <b>quando não houver na repartição outro servidor</b>.</p><p>As demais vedações (responsável por dois suprimentos, quem não prestou contas no prazo e servidor em alcance) vêm sem ressalva no material.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Vedações ao Suprimento de Fundos</i></p>",
24:"<p>Certo — terceira vedação do Resumo: não se concederá SF a <b>responsável por suprimento de fundos que, esgotado o prazo, não tenha prestado contas</b>.</p><p>Observe o detalhe temporal: a vedação depende de o <b>prazo já estar esgotado</b>. Antes disso, a prestação de contas ainda é tempestiva.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Vedações ao Suprimento de Fundos</i></p>",
25:"<p>Certo — quarta vedação do Resumo: não se concederá suprimento de fundos <b>a servidor declarado em alcance</b>.</p><p>A nota de rodapé do material define: <b>servidor em alcance</b> é aquele que não prestou contas do suprimento ou cujas contas tenham sido <b>impugnadas</b>.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Vedações ao Suprimento de Fundos</i></p>",
26:"<p>Certo — é exatamente a definição que o Resumo dá em nota: servidor <b>declarado em alcance</b> é aquele que <b>não tenha prestado contas</b> do suprimento, <b>ou</b> cujas contas <b>tenham sido impugnadas</b>.</p><p>São duas hipóteses alternativas. Prestar contas não basta: se elas forem impugnadas, o servidor também está em alcance.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Vedações — servidor em alcance</i></p>",
27:"<p>Certo — a assertiva apenas junta duas das vedações do Resumo, usando o outro nome do instituto (adiantamento).</p><p>No quadro do material: não se concederá suprimento de fundos <b>a servidor declarado em alcance</b> nem <b>a responsável por dois suprimentos</b>. Lembre que até dois são permitidos.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Vedações ao Suprimento de Fundos</i></p>",
28:"<p>Certo. No quadro <b>EXPLICANDO MELHOR</b> do Resumo: o servidor que receber suprimento de fundos <b>é obrigado a prestar contas de sua aplicação</b>.</p><p>É a contrapartida do adiantamento — o dinheiro sai antes, a comprovação vem depois. Sem ela, entra a tomada de contas.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>EXPLICANDO MELHOR — prestação de contas</i></p>",
29:"<p>Certo, literal do Resumo: não prestadas as contas no <b>prazo assinalado pelo ordenador de despesa</b>, procede-se <b>automaticamente à tomada de contas</b>.</p><p>E o material completa: isso ocorre <b>sem prejuízo das providências administrativas</b> para apuração das responsabilidades. Quem fixa o prazo é o ordenador.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>EXPLICANDO MELHOR — tomada de contas</i></p>",
30:"<p>Errado — <b>trocou o responsável</b>. Segundo o Resumo, a responsabilidade pela aplicação do suprimento de fundos, <b>após sua aprovação na respectiva prestação de contas</b>, é <b>da autoridade que o concedeu</b>.</p><p>Combina com o esquema do módulo: o SF fica <b>a critério do ordenador de despesa e sob sua inteira responsabilidade</b>. Aprovadas as contas, a conta é dele.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>EXPLICANDO MELHOR — responsabilidade</i></p>",
31:"<p>Certo, com as datas do Resumo: a importância aplicada até <b>31 de dezembro</b> será comprovada até <b>15 de janeiro</b> do ano seguinte.</p><p>É um dos poucos prazos numéricos do módulo — decore o par <b>31/12 → 15/01</b>, porque a banca costuma trocar por 31 de janeiro ou 15 de fevereiro.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>EXPLICANDO MELHOR — prazo de comprovação</i></p>",
32:"<p>Certo. Regra da <b>Restituição do Suprimento de Fundos</b> no Resumo: recolhidas <b>no mesmo exercício</b> em que foi concedido, as restituições constituem <b>anulação de despesa</b>.</p><p>Faz sentido contabilmente: dentro do mesmo exercício, desfaz-se a despesa que havia sido registrada na concessão.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Restituição do Suprimento de Fundos</i></p>",
33:"<p>Certo — é a outra metade do quadro do Resumo: recolhidas <b>após o encerramento do exercício</b> em que foi concedido, as restituições constituem <b>receita orçamentária</b>.</p><p>Fixe o par: <b>mesmo exercício → anulação de despesa</b>; <b>exercício posterior → receita orçamentária</b>. Não há terceira hipótese no material.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Restituição do Suprimento de Fundos</i></p>",
34:"<p>Errado — <b>inverteu o quadro</b>. Recolhimento em exercício posterior ao da concessão gera <b>receita orçamentária</b>, e não anulação de despesa.</p><p>A <b>anulação de despesa</b> fica reservada ao recolhimento feito <b>no mesmo exercício</b> da concessão. O marco que decide é o <b>encerramento do exercício</b>.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Restituição do Suprimento de Fundos</i></p>",
35:"<p>Certo. O Resumo abre a regra exatamente assim: as restituições <b>por falta de aplicação, parcial ou total, ou aplicação indevida</b> constituirão anulação de despesa ou receita orçamentária, conforme o exercício do recolhimento.</p><p>Ou seja, o critério é <b>quando</b> o valor volta aos cofres, e não o motivo da devolução — sobra não usada e gasto indevido seguem a mesma regra.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>Restituição do Suprimento de Fundos</i></p>",
36:"<p>Certo. O instituto é excepcional e só cabe nas hipóteses previstas — no Resumo, as três do quadro de <b>aplicabilidade</b>: despesas eventuais com pronto pagamento (inclusive viagem e serviços especiais), despesa sigilosa e despesa de pequeno vulto.</p><p>A ideia de <b>rol taxativo</b> casa com a lógica do material: o SF é <b>exceção</b> ao processo normal da despesa e à licitação.</p><p class='fb-fonte off'>Não consta do AFO — Resumo 11 — a fórmula \"casos expressamente definidos em lei\" é do art. 68 da Lei nº 4.320/64; o material apresenta as hipóteses em quadro, sem transcrever o dispositivo.</p>",
37:"<p>Certo. A afirmação é compatível com todo o módulo: o SF é <b>exceção</b> ao processo normal da despesa, para situações atípicas que exijam <b>pronto pagamento em espécie</b>.</p><p>Só não perca o encadeamento do Resumo: mesmo excepcional, a entrega de numerário <b>é sempre precedida de empenho na dotação própria</b> e percorre os três estágios da despesa orçamentária.</p><p class='fb-fonte off'>Não consta do AFO — Resumo 11 — a previsão do pagamento por adiantamento em casos excepcionais está no art. 65 da Lei nº 4.320/64, não transcrito no material.</p>",
38:"<p>Certo quanto ao dado de prática federal, mas fora do resumo. O material trata do SF pelos conceitos, pelas hipóteses de cabimento, pelas vedações e pelo tratamento contábil — não pelo meio de pagamento.</p><p>Do que o Resumo cobra, retenha o que vale para qualquer forma de operacionalização: concessão precedida de <b>empenho</b>, percurso pelos <b>três estágios</b> da despesa orçamentária e <b>prestação de contas</b> obrigatória.</p><p class='fb-fonte off'>Não consta do AFO — Resumo 11 — o Cartão de Pagamento do Governo Federal não é mencionado no material.</p>",
39:"<p>Errado. O Resumo não abre exceção alguma: o servidor que receber suprimento de fundos <b>é obrigado a prestar contas de sua aplicação</b>.</p><p>Não prestadas as contas no prazo assinalado pelo ordenador, procede-se <b>automaticamente à tomada de contas</b>, sem prejuízo das providências administrativas para apuração de responsabilidades. O pequeno vulto é hipótese de <b>cabimento</b> do SF, não de dispensa de contas.</p><p class='fb-fonte'>AFO — Resumo 11 · <i>EXPLICANDO MELHOR — prestação de contas</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"11", nome:"Suprimento de fundos", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, PROVA_POOL:PROVA_POOL};
})();
