/* Contabilidade Pública — Módulo 05: Variações patrimoniais (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cpub05 = (function(){
"use strict";

var CARDS = [
  ["Como se chamam receita e despesa na ótica patrimonial?","<b>Receita → VPA</b> (Variação Patrimonial Aumentativa). <b>Despesa → VPD</b> (Variação Patrimonial Diminutiva)."],
  ["VPA — hipótese (a) do MCASP","Nas <b>transações com contribuintes e terceiros</b>, quando estes <b>efetuarem o pagamento ou assumirem compromisso firme de efetivá-lo</b>."],
  ["Quais as três situações da hipótese (a)?","<b>1)</b> ocorrência de <b>fato gerador de natureza tributária</b>; <b>2)</b> <b>investidura na propriedade de bens</b> anteriormente pertencentes à entidade; <b>3)</b> <b>fruição de serviços</b> por ela prestados."],
  ["VPA — hipótese (b) do MCASP","Quando da <b>extinção, parcial ou total, de um passivo</b>, <b>qualquer que seja o motivo</b>, <b>sem o desaparecimento concomitante de um ativo de valor igual ou maior</b>."],
  ["Exemplo da hipótese (b)","Um banco <b>perdoa uma dívida</b> do Estado sem que este desembolse recurso algum → o passivo some sem ativo sair → <b>VPA</b>."],
  ["VPA — hipótese (c) do MCASP","Pela <b>geração natural de novos ativos independentemente da intervenção de terceiros</b>."],
  ["Exemplo da hipótese (c)","<b>Juros de aplicações financeiras</b> — o ativo cresce sozinho, sem transação com terceiro."],
  ["VPA — hipótese (d) do MCASP","No <b>recebimento efetivo de doações e subvenções</b>."],
  ["Em quantos momentos a VPA pode ser reconhecida?","Em <b>três</b>: <b>antes</b>, <b>depois</b> ou <b>no momento</b> da <b>ARRECADAÇÃO</b> da receita orçamentária."],
  ["Exemplo de VPA ANTES da arrecadação","O <b>IPTU</b>: fato gerador em 1º de janeiro. Reconhecem-se ali o direito e a VPA; a arrecadação vem depois."],
  ["Lançamento da VPA do IPTU no fato gerador","<b>D</b> — Créditos Tributários a Receber (Ativo)<br><b>C</b> — Impostos sobre Patrimônio e a Renda (VPA)"],
  ["Esse lançamento é fato permutativo ou modificativo?","<b>Modificativo</b> — a VPA <b>aumenta o resultado patrimonial</b>."],
  ["E o lançamento na arrecadação do IPTU?","<b>D</b> — Caixa e Equivalentes (Ativo)<br><b>C</b> — Créditos Tributários a Receber (Ativo)<br>É <b>fato permutativo</b>: troca de um direito por caixa."],
  ["Exemplo de VPA DEPOIS da arrecadação","<b>Recebimento antecipado</b> de valores da <b>venda a termo de serviços</b> — a receita orçamentária entra antes do fato gerador."],
  ["Lançamento do recebimento antecipado","<b>D</b> — Caixa e Equivalentes (Ativo)<br><b>C</b> — <b>VPA Diferida</b> (Passivo)<br>É variação patrimonial <b>qualitativa</b>, não quantitativa."],
  ["E quando o serviço é finalmente prestado?","<b>D</b> — VPA Diferida (baixa do Passivo)<br><b>C</b> — Valor bruto de exploração de bens e direitos e prestação de serviços (VPA)"],
  ["Exemplo de VPA NO MOMENTO da arrecadação","Recebimento de valores da <b>venda de serviços concomitantemente com a prestação</b> — receita orçamentária e fato gerador juntos."],
  ["Lançamento orçamentário da arrecadação","<b>D</b> — Receita a Realizar<br><b>C</b> — Receita Realizada"],
  ["VPD — hipótese (a) do MCASP","Quando <b>deixar de existir o correspondente valor ativo, por transferência de sua propriedade para terceiro</b>."],
  ["VPD — hipótese (b) do MCASP","<b>Diminuição ou extinção do valor econômico de um ativo.</b>"],
  ["VPD — hipótese (c) do MCASP","Pelo <b>surgimento de um passivo, sem o correspondente ativo</b>."],
  ["Em quantos momentos a VPD pode ser reconhecida?","Em <b>três</b>: <b>antes</b>, <b>depois</b> ou <b>no momento</b> da <b>LIQUIDAÇÃO</b> da despesa orçamentária."],
  ["A VPA se compara à arrecadação; a VPD, a quê?","À <b>LIQUIDAÇÃO</b>. É o par que a banca troca: VPA ↔ arrecadação, VPD ↔ liquidação."],
  ["Exemplo de VPD ANTES da liquidação","O <b>13º salário</b>: a VPD é reconhecida <b>a cada mês trabalhado</b>, mas empenho, liquidação e pagamento só ocorrem no mês do pagamento."],
  ["Lançamento da VPD do 13º ao fim do mês","<b>D</b> — Remuneração a Pessoal Ativo Civil (VPD)<br><b>C</b> — Pessoal a Pagar – 13º Salário (Passivo)"],
  ["Exemplo de VPD DEPOIS da liquidação","O <b>suprimento de fundos</b>: empenhado, liquidado e pago no ato da concessão; a VPD só aparece na <b>prestação de contas do suprido</b>."],
  ["Lançamento patrimonial na liquidação do suprimento","<b>D</b> — Adiantamentos Concedidos a Pessoal e a Terceiros (Ativo)<br><b>C</b> — Suprimento de Fundos a Pagar (Passivo)"],
  ["O detalhe do suprimento que despenca em prova","Na liquidação, no enfoque patrimonial, <b>ao mesmo tempo</b> em que se registra um <b>passivo</b> há a <b>incorporação de um ativo</b> — por isso ainda <b>não há VPD</b>."],
  ["Lançamento na prestação de contas do suprido","<b>D</b> — Variação Patrimonial Diminutiva (VPD)<br><b>C</b> — Adiantamentos Concedidos a Pessoal e a Terceiros (Ativo)"],
  ["Exemplo de VPD NO MOMENTO da liquidação","<b>Manutenção de estradas</b>: conforme a empresa executa, a prefeitura liquida — despesa orçamentária e fato gerador registrados juntos."],
  ["Lançamento patrimonial nessa liquidação","<b>D</b> — Variação Patrimonial Diminutiva (VPD)<br><b>C</b> — Demais Obrigações a Curto Prazo (Passivo)"],
  ["O que é o empenho e como se formaliza?","<b>Primeiro estágio</b> da despesa, formalizado pela <b>Nota de Empenho</b>, da qual devem constar o <b>nome do credor</b> e o <b>valor da despesa</b>."],
  ["O que é a liquidação?","A <b>verificação do direito adquirido pelo credor</b>, tendo por base os <b>documentos comprobatórios</b> do respectivo crédito — na prática, conferir se o material foi entregue ou o serviço prestado."],
  ["O que é o pagamento?","A <b>entrega de numerário ao credor</b> por cheque nominativo, ordem de pagamento ou crédito em conta — e <b>só pode ocorrer após a regular liquidação</b>."],
  ["Sequência orçamentária do crédito, do empenho ao pagamento","Crédito Disponível → Crédito Empenhado a Liquidar → Crédito Empenhado em Liquidação → Crédito Empenhado Liquidado a Pagar → Crédito Empenhado Liquidado Pago."],
  ["O quadro que resume o módulo","<b>VPA</b> se posiciona em relação à <b>arrecadação</b>: antes (IPTU), no momento (venda à vista de serviço) ou depois (recebimento antecipado). <b>VPD</b> se posiciona em relação à <b>liquidação</b>: antes (13º salário), no momento (manutenção de estradas) ou depois (suprimento de fundos)."]
];

var QS = [
  ["Se o objetivo do registro for evidenciar impacto no patrimônio, a receita é denominada variação patrimonial aumentativa e a despesa, variação patrimonial diminutiva.","C","FUNDATEC","VPA e VPD."],
  ["Considera-se realizada a VPA nas transações com contribuintes e terceiros, quando estes efetuarem o pagamento ou assumirem compromisso firme de efetivá-lo.","C","CESPE","Hipótese (a) do MCASP."],
  ["A hipótese (a) de realização da VPA alcança a ocorrência de fato gerador de natureza tributária, a investidura na propriedade de bens anteriormente pertencentes à entidade e a fruição de serviços por ela prestados.","C","FCC","As três situações da alínea."],
  ["Considera-se realizada a VPA quando da extinção, parcial ou total, de um passivo, desde que haja o desaparecimento concomitante de ativo de valor igual ou maior.","E","FGV","É justamente o contrário: <b>sem</b> o desaparecimento concomitante de ativo de valor igual ou maior."],
  ["O perdão de dívida concedido por instituição financeira ao Estado, sem desembolso, configura variação patrimonial aumentativa.","C","VUNESP","Extingue passivo sem sair ativo — hipótese (b)."],
  ["Considera-se realizada a VPA pela geração natural de novos ativos independentemente da intervenção de terceiros.","C","FUNDATEC","Hipótese (c)."],
  ["Os juros de aplicações financeiras não configuram variação patrimonial aumentativa, por não decorrerem de transação com terceiros.","E","CESPE","Configuram VPA pela <b>geração natural de novos ativos</b>."],
  ["O recebimento efetivo de doações e subvenções configura variação patrimonial aumentativa.","C","FCC","Hipótese (d)."],
  ["O reconhecimento da variação patrimonial aumentativa pode ocorrer antes, depois ou no momento da arrecadação da receita orçamentária.","C","FGV","São os três momentos possíveis."],
  ["O reconhecimento da VPA deve coincidir necessariamente com a arrecadação da receita orçamentária.","E","VUNESP","Pode ocorrer antes ou depois."],
  ["No caso do IPTU, cujo fato gerador ocorre em 1º de janeiro, o reconhecimento do direito e da VPA deve ser feito no momento da arrecadação.","E","FUNDATEC","Deve ser feito no <b>fato gerador</b> — VPA antes da arrecadação."],
  ["No reconhecimento da VPA do IPTU, debita-se Créditos Tributários a Receber e credita-se a conta de VPA.","C","CESPE","D — Ativo; C — VPA."],
  ["O reconhecimento da VPA do IPTU no fato gerador constitui fato permutativo.","E","FCC","É fato <b>modificativo</b> — aumenta o resultado patrimonial."],
  ["Na arrecadação do IPTU previamente lançado, debita-se Caixa e credita-se Créditos Tributários a Receber, em fato permutativo.","C","FGV","Troca de direito por caixa, sem alterar o PL."],
  ["No recebimento antecipado de valores provenientes de venda a termo de serviços, a VPA ocorre em momento posterior à arrecadação da receita orçamentária.","C","VUNESP","A receita orçamentária entra antes do fato gerador."],
  ["No recebimento antecipado, debita-se Caixa e credita-se Variação Patrimonial Aumentativa Diferida, classificada no passivo.","C","FUNDATEC","Há obrigação de prestar o serviço."],
  ["O recebimento antecipado de valores por venda a termo de serviços constitui variação patrimonial quantitativa.","E","CESPE","É variação <b>qualitativa</b> — troca de direito por obrigação, sem alterar o PL."],
  ["Prestado o serviço antes recebido, baixa-se a VPA Diferida do passivo em contrapartida a conta de VPA.","C","FCC","É quando o fato gerador finalmente ocorre."],
  ["Considera-se realizada a VPD quando deixar de existir o correspondente valor ativo, por transferência de sua propriedade para terceiro.","C","FGV","Hipótese (a) do MCASP."],
  ["Considera-se realizada a VPD pela diminuição ou extinção do valor econômico de um ativo.","C","VUNESP","Hipótese (b) — é o caso da depreciação e do impairment."],
  ["Considera-se realizada a VPD pelo surgimento de um passivo, sem o correspondente ativo.","C","FUNDATEC","Hipótese (c)."],
  ["Considera-se realizada a VPD pelo surgimento de um passivo acompanhado da incorporação de ativo de igual valor.","E","CESPE","Aí há fato <b>permutativo</b>, não VPD — é exatamente o caso do suprimento de fundos na liquidação."],
  ["O reconhecimento da variação patrimonial diminutiva pode ocorrer antes, depois ou no momento da liquidação da despesa orçamentária.","C","FCC","O marco da VPD é a <b>liquidação</b>."],
  ["O reconhecimento da variação patrimonial diminutiva toma por referência o empenho da despesa orçamentária.","E","FGV","Toma por referência a <b>liquidação</b>."],
  ["O décimo terceiro salário deve ser reconhecido como VPD a cada mês trabalhado, ainda que o empenho, a liquidação e o pagamento ocorram apenas no mês do pagamento.","C","VUNESP","VPD antes da liquidação."],
  ["No reconhecimento mensal da VPD do décimo terceiro salário, debita-se a conta de VPD de remuneração e credita-se Pessoal a Pagar.","C","FUNDATEC","D — VPD; C — Passivo."],
  ["Na concessão de suprimento de fundos, a despesa orçamentária é empenhada, liquidada e paga no ato da concessão.","C","CESPE","Por isso a VPD fica para depois."],
  ["Na concessão de suprimento de fundos, a VPD é reconhecida no momento da liquidação da despesa orçamentária.","E","FCC","Só na <b>prestação de contas do suprido</b> — VPD depois da liquidação."],
  ["Na liquidação da despesa com suprimento de fundos, no enfoque patrimonial, registra-se um passivo e, ao mesmo tempo, incorpora-se um ativo.","C","FGV","Suprimento de Fundos a Pagar contra Adiantamentos Concedidos."],
  ["Na prestação de contas do suprido, debita-se a VPD e credita-se Adiantamentos Concedidos a Pessoal e a Terceiros.","C","VUNESP","É quando o ativo se converte em despesa patrimonial."],
  ["Quando a liquidação ocorre concomitantemente com a prestação do serviço, a despesa orçamentária e o fato gerador da VPD são contabilizados juntos.","C","FUNDATEC","Exemplo da manutenção de estradas."],
  ["Na liquidação concomitante à prestação do serviço, debita-se a VPD e credita-se Demais Obrigações a Curto Prazo.","C","CESPE","D — VPD; C — Passivo."],
  ["O empenho é o primeiro estágio da despesa e será formalizado mediante a emissão da nota de empenho, da qual deve constar o nome do credor e o valor da despesa.","C","FCC","Requisitos da nota de empenho."],
  ["A liquidação consiste na verificação do direito adquirido pelo credor, tendo por base os documentos comprobatórios do respectivo crédito.","C","FGV","É a conferência da entrega do material ou da prestação do serviço."],
  ["O pagamento consiste na entrega de numerário ao credor e pode ser efetuado antes da liquidação, desde que haja empenho prévio.","E","VUNESP","Só pode ser efetuado <b>após a regular liquidação</b> da despesa."],
  ["O pagamento pode ser efetuado por cheque nominativo, ordem de pagamento ou crédito em conta.","C","FUNDATEC","Formas previstas."],
  ["No empenho da dotação, debita-se Crédito Disponível e credita-se Crédito Empenhado a Liquidar.","C","CESPE","Primeiro passo da sequência orçamentária."],
  ["Na liquidação, debita-se Crédito Empenhado em Liquidação e credita-se Crédito Empenhado Liquidado a Pagar.","C","FCC","Sequência do controle orçamentário."],
  ["No pagamento, debita-se Crédito Empenhado Liquidado a Pagar e credita-se Crédito Empenhado Liquidado Pago.","C","FGV","Última etapa do controle orçamentário."],
  ["A arrecadação da receita orçamentária é registrada debitando-se Receita a Realizar e creditando-se Receita Realizada.","C","VUNESP","Lançamento de natureza orçamentária."],
  ["O marco de comparação da VPA é a liquidação, e o da VPD, a arrecadação.","E","FUNDATEC","Está invertido: <b>VPA ↔ arrecadação</b> e <b>VPD ↔ liquidação</b>."],
  ["A depreciação de um bem público configura variação patrimonial diminutiva por diminuição do valor econômico de um ativo.","C","CESPE","Hipótese (b) da VPD."],
  ["A alienação de um bem público, com transferência de propriedade a terceiro, pode gerar variação patrimonial diminutiva.","C","FCC","Hipótese (a) — deixa de existir o valor ativo correspondente."],
  ["O mesmo fato pode gerar VPA em um exercício e receita orçamentária em outro.","C","FGV","É o que ocorre quando lançamento e arrecadação caem em exercícios diferentes."],
  ["Toda VPA corresponde necessariamente a uma receita orçamentária, e vice-versa.","E","VUNESP","Não há correspondência obrigatória — os dois registros são independentes."],
  ["A VPA diferida é classificada no ativo, por representar direito da entidade.","E","FUNDATEC","É classificada no <b>passivo</b> — representa a obrigação de prestar o serviço."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Quando se considera realizada uma VPA",
      '<div class="box"><span class="bl">As quatro hipóteses do MCASP</span>'+
      '<ul><li><b>a)</b> Nas <b>transações com contribuintes e terceiros</b>, quando estes <b>efetuarem o pagamento ou assumirem compromisso firme de efetivá-lo</b> — pela ocorrência de <b>fato gerador tributário</b>, pela <b>investidura na propriedade de bens</b> antes pertencentes à entidade, ou pela <b>fruição de serviços</b> por ela prestados.</li>'+
      '<li><b>b)</b> Quando da <b>extinção, parcial ou total, de um passivo</b>, qualquer que seja o motivo, <b>sem o desaparecimento concomitante de um ativo de valor igual ou maior</b>.</li>'+
      '<li><b>c)</b> Pela <b>geração natural de novos ativos independentemente da intervenção de terceiros</b>.</li>'+
      '<li><b>d)</b> No <b>recebimento efetivo de doações e subvenções</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Como fixar cada uma</span>'+
      '<p><b>(b)</b> é o <b>perdão de dívida</b>: o passivo some e nada sai do ativo.<br>'+
      '<b>(c)</b> é o <b>juro da aplicação</b>: o ativo cresce sozinho, sem terceiro.<br>'+
      '<b>(d)</b> é a <b>doação recebida</b>.</p></div>'+
      '<div class="box trap"><span class="bl">O “sem” da alínea (b)</span>'+
      '<p>A banca troca por “<b>com</b> o desaparecimento concomitante de ativo”. Se sai ativo de valor igual ou maior, não há ganho patrimonial — logo, <b>não é VPA</b>.</p></div>'),
    sl("Os três momentos da VPA — sempre contra a ARRECADAÇÃO",
      '<div class="box"><span class="bl">A regra</span>'+
      '<p>O reconhecimento da VPA pode ocorrer <b>antes</b>, <b>depois</b> ou <b>no momento</b> da <b>arrecadação</b> da receita orçamentária.</p></div>'+
      '<div class="box"><span class="bl">ANTES — o IPTU</span>'+
      '<p>Fato gerador em <b>1º de janeiro</b>. Ali já se reconhecem o direito e a VPA:</p>'+
      '<p class="mono"><b>D</b> — Créditos Tributários a Receber (Ativo)<br><b>C</b> — Impostos sobre Patrimônio e a Renda (VPA)</p>'+
      '<p>Isso é <b>fato modificativo</b> — aumenta o resultado patrimonial.</p>'+
      '<p>Na arrecadação, depois:</p>'+
      '<p class="mono"><b>D</b> — Caixa e Equivalentes<br><b>C</b> — Créditos Tributários a Receber</p>'+
      '<p>Aqui é <b>fato permutativo</b> — troca de direito por caixa.</p></div>'+
      '<div class="box"><span class="bl">DEPOIS — o recebimento antecipado</span>'+
      '<p>Venda a termo de serviços: o dinheiro entra antes do fato gerador.</p>'+
      '<p class="mono"><b>D</b> — Caixa e Equivalentes (Ativo)<br><b>C</b> — <b>VPA Diferida</b> (Passivo)</p>'+
      '<p>É variação patrimonial <b>qualitativa</b>, não quantitativa: troca-se a entrada de caixa por uma <b>obrigação de prestar o serviço</b>. Quando o serviço é prestado:</p>'+
      '<p class="mono"><b>D</b> — VPA Diferida (baixa do Passivo)<br><b>C</b> — Valor bruto de exploração de bens e direitos e prestação de serviços (VPA)</p></div>'+
      '<div class="box tip"><span class="bl">NO MOMENTO — a venda à vista de serviço</span>'+
      '<p>Recebimento concomitante com a prestação: receita orçamentária e fato gerador juntos.</p>'+
      '<p class="mono"><b>D</b> — Caixa e Equivalentes (Ativo)<br><b>C</b> — Valor bruto de exploração… (VPA)</p>'+
      '<p>E o registro orçamentário, em qualquer dos três casos: <b>D</b> — Receita a Realizar / <b>C</b> — Receita Realizada.</p></div>')
  ],
  V2:[
    sl("Quando se considera realizada uma VPD",
      '<div class="box"><span class="bl">As três hipóteses do MCASP</span>'+
      '<ul><li><b>a)</b> Quando <b>deixar de existir o correspondente valor ativo, por transferência de sua propriedade para terceiro</b>.</li>'+
      '<li><b>b)</b> <b>Diminuição ou extinção do valor econômico de um ativo.</b></li>'+
      '<li><b>c)</b> Pelo <b>surgimento de um passivo, sem o correspondente ativo</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Onde cada uma aparece</span>'+
      '<p><b>(a)</b> alienação e doação de bens.<br><b>(b)</b> <b>depreciação</b>, amortização, exaustão e redução ao valor recuperável.<br><b>(c)</b> obrigação assumida sem nada entrar.</p></div>'+
      '<div class="box trap"><span class="bl">O “sem o correspondente ativo” da alínea (c)</span>'+
      '<p>Se o passivo nasce <b>junto com</b> a incorporação de um ativo, o fato é <b>permutativo</b> — não há VPD. É exatamente o que acontece na liquidação do <b>suprimento de fundos</b>.</p></div>'),
    sl("Os três momentos da VPD — sempre contra a LIQUIDAÇÃO",
      '<div class="box"><span class="bl">A regra</span>'+
      '<p>O reconhecimento da VPD pode ocorrer <b>antes</b>, <b>depois</b> ou <b>no momento</b> da <b>liquidação</b> da despesa orçamentária.</p></div>'+
      '<div class="box"><span class="bl">ANTES — o 13º salário</span>'+
      '<p>A VPD é reconhecida <b>a cada mês trabalhado</b>; empenho, liquidação e pagamento só no mês do pagamento.</p>'+
      '<p class="mono"><b>D</b> — Remuneração a Pessoal Ativo Civil (VPD)<br><b>C</b> — Pessoal a Pagar – 13º Salário (Passivo)</p></div>'+
      '<div class="box"><span class="bl">DEPOIS — o suprimento de fundos</span>'+
      '<p>Empenhado, liquidado e pago <b>no ato da concessão</b>. Na liquidação, o registro patrimonial é:</p>'+
      '<p class="mono"><b>D</b> — Adiantamentos Concedidos a Pessoal e a Terceiros (Ativo)<br><b>C</b> — Suprimento de Fundos a Pagar (Passivo)</p>'+
      '<p>Só na <b>prestação de contas do suprido</b> nasce a VPD:</p>'+
      '<p class="mono"><b>D</b> — Variação Patrimonial Diminutiva (VPD)<br><b>C</b> — Adiantamentos Concedidos a Pessoal e a Terceiros (Ativo)</p></div>'+
      '<div class="box tip"><span class="bl">NO MOMENTO — a manutenção de estradas</span>'+
      '<p>Conforme a empresa executa, a prefeitura liquida: despesa orçamentária e fato gerador juntos.</p>'+
      '<p class="mono"><b>D</b> — Variação Patrimonial Diminutiva (VPD)<br><b>C</b> — Demais Obrigações a Curto Prazo (Passivo)</p></div>')
  ],
  V3:[
    sl("Os estágios da despesa e a trilha do crédito",
      '<div class="box"><span class="bl">Os três estágios</span>'+
      '<ul><li><b>Empenho</b> — <b>1º estágio</b>, formalizado pela <b>Nota de Empenho</b>, da qual devem constar o <b>nome do credor</b> e o <b>valor da despesa</b>.</li>'+
      '<li><b>Liquidação</b> — <b>verificação do direito adquirido pelo credor</b>, com base nos <b>documentos comprobatórios</b>: confere-se se o material foi entregue ou o serviço prestado.</li>'+
      '<li><b>Pagamento</b> — <b>entrega de numerário</b> por cheque nominativo, ordem de pagamento ou crédito em conta, e <b>só após a regular liquidação</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">A trilha do crédito, no controle orçamentário</span>'+
      '<p class="mono">Crédito Disponível → Crédito Empenhado a Liquidar → Crédito Empenhado em Liquidação → Crédito Empenhado Liquidado a Pagar → Crédito Empenhado Liquidado Pago</p></div>'),
    sl("O quadro final — VPA contra arrecadação, VPD contra liquidação",
      '<div class="box trap"><span class="bl">O par que a banca inverte</span>'+
      '<p><b>VPA</b> se posiciona sempre em relação à <b>ARRECADAÇÃO</b>.<br><b>VPD</b> se posiciona sempre em relação à <b>LIQUIDAÇÃO</b>.</p></div>'+
      '<div class="box"><span class="bl">Os seis exemplos, na ordem</span>'+
      '<ul><li><b>VPA antes</b> da arrecadação → <b>IPTU</b></li>'+
      '<li><b>VPA no momento</b> → <b>venda de serviço à vista</b></li>'+
      '<li><b>VPA depois</b> → <b>recebimento antecipado</b> (venda a termo)</li>'+
      '<li><b>VPD antes</b> da liquidação → <b>13º salário</b></li>'+
      '<li><b>VPD no momento</b> → <b>manutenção de estradas</b></li>'+
      '<li><b>VPD depois</b> → <b>suprimento de fundos</b></li></ul></div>'+
      '<div class="box tip"><span class="bl">Por que isso importa</span>'+
      '<p>Não há correspondência obrigatória entre VPA e receita orçamentária, nem entre VPD e despesa orçamentária. São <b>dois registros independentes</b> do mesmo fato — e a prova vive de perguntar em que exercício cada um cai.</p></div>')
  ]
};

var EX = {
S1:{t:"multi", instr:"Marque as hipóteses de realização da VPA (MCASP)",
  options:["Transações com contribuintes e terceiros, quando pagarem ou assumirem compromisso firme",
           "Extinção de passivo sem desaparecimento concomitante de ativo de valor igual ou maior",
           "Geração natural de novos ativos independentemente da intervenção de terceiros",
           "Recebimento efetivo de doações e subvenções",
           "Surgimento de um passivo sem o correspondente ativo",
           "Diminuição do valor econômico de um ativo"],
  answers:[0,1,2,3],
  why:"As duas últimas são hipóteses da <b>VPD</b>."},

S2:{t:"gap", instr:"Complete a hipótese (b) da VPA",
  before:"Considera-se realizada a VPA quando da extinção, parcial ou total, de um passivo, qualquer que seja o motivo, ",
  after:" o desaparecimento concomitante de um ativo de valor igual ou maior.",
  options:["sem","com","independentemente d"], answer:0,
  why:"Se sai ativo de valor igual ou maior, não há ganho patrimonial."},

S3:{t:"multi", instr:"A hipótese (a) da VPA alcança quais situações?",
  options:["Ocorrência de fato gerador de natureza tributária",
           "Investidura na propriedade de bens anteriormente pertencentes à entidade",
           "Fruição de serviços prestados pela entidade",
           "Recebimento de doações","Juros de aplicações financeiras"],
  answers:[0,1,2],
  why:"Doações são a alínea (d); juros, a alínea (c)."},

S4:{t:"sort", instr:"Classifique cada caso na hipótese correta da VPA",
  buckets:["(b) extinção de passivo","(c) geração natural","(d) doações e subvenções"],
  items:[["Banco perdoa dívida do Estado sem desembolso",0],
         ["Juros de aplicações financeiras",1],
         ["Rendimento de investimento sem intervenção de terceiro",1],
         ["Recebimento efetivo de doação",2],["Subvenção recebida",2]],
  why:"Cada exemplo tem uma alínea própria."},

S5:{t:"sort", instr:"A VPA ocorre antes, no momento ou depois da arrecadação?",
  buckets:["Antes da arrecadação","No momento da arrecadação","Depois da arrecadação"],
  items:[["IPTU — fato gerador em 1º de janeiro",0],
         ["Venda de serviço com recebimento concomitante à prestação",1],
         ["Recebimento antecipado de venda a termo de serviços",2]],
  why:"O marco da VPA é sempre a <b>arrecadação</b>."},

S6:{t:"sort", instr:"Fato modificativo ou permutativo?",
  buckets:["Modificativo","Permutativo"],
  items:[["Reconhecimento da VPA do IPTU no fato gerador",0],
         ["Arrecadação do IPTU já lançado",1],
         ["Recebimento antecipado com VPA diferida no passivo",1]],
  why:"Modificativo altera o PL; permutativo só troca elementos."},

S7:{t:"multi", instr:"Marque as hipóteses de realização da VPD (MCASP)",
  options:["Deixar de existir o valor ativo por transferência de propriedade a terceiro",
           "Diminuição ou extinção do valor econômico de um ativo",
           "Surgimento de um passivo, sem o correspondente ativo",
           "Extinção de passivo sem baixa de ativo","Recebimento de subvenções"],
  answers:[0,1,2],
  why:"As duas últimas são da <b>VPA</b>."},

S8:{t:"gap", instr:"Complete a hipótese (c) da VPD",
  before:"Considera-se realizada a VPD pelo surgimento de um passivo, ",
  after:".",
  options:["sem o correspondente ativo","com o correspondente ativo","independentemente do ativo"], answer:0,
  why:"Com ativo correspondente o fato é <b>permutativo</b>."},

S9:{t:"sort", instr:"A VPD ocorre antes, no momento ou depois da liquidação?",
  buckets:["Antes da liquidação","No momento da liquidação","Depois da liquidação"],
  items:[["13º salário, reconhecido a cada mês trabalhado",0],
         ["Manutenção de estradas, liquidada conforme execução",1],
         ["Suprimento de fundos, com VPD na prestação de contas",2]],
  why:"O marco da VPD é sempre a <b>liquidação</b>."},

S10:{t:"match", instr:"Ligue cada exemplo ao seu lançamento patrimonial",
  pairs:[["13º salário do mês","D VPD de remuneração / C Pessoal a Pagar"],
         ["Liquidação do suprimento de fundos","D Adiantamentos Concedidos / C Suprimento de Fundos a Pagar"],
         ["Prestação de contas do suprido","D VPD / C Adiantamentos Concedidos"],
         ["Liquidação da manutenção de estradas","D VPD / C Demais Obrigações a Curto Prazo"]],
  why:"Repare que só um deles <b>não</b> gera VPD: a liquidação do suprimento."},

S11:{t:"mc", instr:"Por que a liquidação do suprimento de fundos não gera VPD?",
  options:["Porque registra um passivo e, ao mesmo tempo, incorpora um ativo",
           "Porque o empenho ainda não ocorreu",
           "Porque não há documento comprobatório",
           "Porque a despesa é extraorçamentária"],
  answer:0,
  why:"Fato permutativo — a VPD só vem na prestação de contas."},

S12:{t:"order", instr:"Ordene os eventos do suprimento de fundos",
  items:["Empenho da dotação orçamentária",
         "Liquidação — nasce o ativo Adiantamentos Concedidos e o passivo Suprimento de Fundos a Pagar",
         "Pagamento — saída do recurso financeiro",
         "Prestação de contas do suprido — reconhecimento da VPD"],
  why:"A VPD é o <b>último</b> evento, já no exercício seguinte, muitas vezes."},

S13:{t:"match", instr:"Ligue cada estágio da despesa ao seu conceito",
  pairs:[["Empenho","Ato formalizado pela nota de empenho, com nome do credor e valor"],
         ["Liquidação","Verificação do direito adquirido pelo credor pelos documentos comprobatórios"],
         ["Pagamento","Entrega de numerário ao credor, só após a regular liquidação"]],
  why:"Conceitos da Lei 4.320/64."},

S14:{t:"order", instr:"Ordene a trilha do crédito no controle orçamentário",
  items:["Crédito Disponível","Crédito Empenhado a Liquidar","Crédito Empenhado em Liquidação",
         "Crédito Empenhado Liquidado a Pagar","Crédito Empenhado Liquidado Pago"],
  why:"É a sequência que aparece nos lançamentos de natureza orçamentária."},

S15:{t:"sort", instr:"Qual o marco de cada variação?",
  buckets:["VPA — marco na arrecadação","VPD — marco na liquidação"],
  items:[["IPTU reconhecido no fato gerador",0],["Recebimento antecipado de serviços",0],
         ["13º salário reconhecido mensalmente",1],["Suprimento de fundos",1]],
  why:"Inverter os dois marcos é o erro mais comum do módulo."},

S16:{t:"mc", instr:"A Variação Patrimonial Aumentativa Diferida é classificada:",
  options:["No passivo, por representar obrigação de prestar o serviço",
           "No ativo, por representar direito da entidade",
           "No patrimônio líquido","Em conta de compensação"],
  answer:0,
  why:"Por isso o recebimento antecipado é variação <b>qualitativa</b>."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Pública 05","https://www.tecconcursos.com.br/s/Q2pDqg","Q2pDqg"],
  ["Caderno FCC — Contabilidade Pública 05","https://www.tecconcursos.com.br/s/Q2pDrO","Q2pDrO"],
  ["Caderno FGV — Contabilidade Pública 05","https://www.tecconcursos.com.br/s/Q2pDqu","Q2pDqu"],
  ["Caderno VUNESP — Contabilidade Pública 05","https://www.tecconcursos.com.br/s/Q2pDrT","Q2pDrT"]
];
var TECNOTA = "O autor sugere <b>20 questões</b>. Este é um dos assuntos em que a banca cobra <b>lançamento contábil</b> — vale resolver de caneta na mão, escrevendo o débito e o crédito antes de olhar as alternativas.";

var UNITS = [
  {n:1, title:"Variação Patrimonial Aumentativa", cvar:"u1", lessons:[
    {id:"V1", type:"teoria", title:"As quatro hipóteses e os três momentos", xp:10, data:"V1"},
    {id:"V2", type:"drill",  title:"Praticar · quando há VPA",           xp:25, data:["S1","S2","S3","S4","T0","T1","T2","T3","T4","T5","T6","T7"]},
    {id:"V3", type:"drill",  title:"Praticar · os três momentos",        xp:25, data:["S5","T8","T9","T10","T14","T15"]},
    {id:"V4", type:"drill",  title:"Praticar · lançamentos da VPA",      xp:25, data:["S6","S16","T11","T12","T13","T16","T17"]},
    {id:"V5", type:"flash",  title:"Flashcards · VPA",                   xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]}
  ]},
  {n:2, title:"Variação Patrimonial Diminutiva", cvar:"u3", lessons:[
    {id:"V6", type:"teoria", title:"As três hipóteses e os três momentos", xp:10, data:"V2"},
    {id:"V7", type:"drill",  title:"Praticar · quando há VPD",           xp:25, data:["S7","S8","T18","T19","T20","T21","T41","T42"]},
    {id:"V8", type:"drill",  title:"Praticar · os três momentos",        xp:25, data:["S9","T22","T23","T24","T25","T30"]},
    {id:"V9", type:"drill",  title:"Praticar · suprimento de fundos",    xp:25, data:["S10","S11","S12","T26","T27","T28","T29","T31"]},
    {id:"V10",type:"flash",  title:"Flashcards · VPD",                   xp:15, data:[18,19,20,21,22,23,24,25,26,27,28,29,30]}
  ]},
  {n:3, title:"Estágios e o quadro final", cvar:"u2", lessons:[
    {id:"V11",type:"teoria", title:"Empenho, liquidação, pagamento e o resumo", xp:10, data:"V3"},
    {id:"V12",type:"drill",  title:"Praticar · estágios da despesa",     xp:25, data:["S13","S14","T32","T33","T34","T35","T36","T37","T38","T39"]},
    {id:"V13",type:"drill",  title:"Praticar · VPA × VPD",               xp:25, data:["S15","T40","T43","T44","T45"]},
    {id:"V14",type:"flash",  title:"Flashcards · estágios e resumo",     xp:15, data:[31,32,33,34,35]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Vrev",type:"review",title:"Revisão geral do módulo",            xp:60, data:null},
    {id:"V15",type:"missao", title:"Missão TEC Concursos",               xp:15, data:null},
    {id:"V16",type:"prova",  title:"Simulado cronometrado",              xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo — é o esquema de abertura do Resumo: se o objetivo do registro contábil for evidenciar impacto no <b>PATRIMÔNIO</b>, chamamos a despesa de <b>Variação Patrimonial Diminutiva (VPD)</b> e a receita de <b>Variação Patrimonial Aumentativa (VPA)</b>.</p><p>O outro lado do quadro: na natureza <b>orçamentária</b>, receitas só são reconhecidas quando <b>arrecadadas</b> e despesas quando <b>empenhadas</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Variações patrimoniais</i></p>",
1:"<p>Certo — é a alínea <b>a</b> do MCASP, transcrita no Resumo: considera-se realizada a VPA nas transações com <b>contribuintes e terceiros</b>, quando estes efetuarem o pagamento <b>ou assumirem compromisso firme de efetivá-lo</b>.</p><p>Guarde o <b>ou</b>: não é preciso caixa. O compromisso firme já basta para a VPA — é o que sustenta o reconhecimento do IPTU no fato gerador.</p><p class='fb-fonte'>Resumo 05 · <i>Reconhecimento da VPA — alínea a</i></p>",
2:"<p>Certo — são as três situações que a própria alínea <b>a</b> lista: ocorrência de <b>fato gerador de natureza tributária</b>, <b>investidura na propriedade de bens anteriormente pertencentes à entidade</b> e <b>fruição de serviços por esta prestados</b>.</p><p>No comentário, o Resumo reescreve: aquisição da propriedade de bens que antes eram da entidade e utilização de serviços prestados por ela.</p><p class='fb-fonte'>Resumo 05 · <i>Reconhecimento da VPA — alínea a</i></p>",
3:"<p>Errado por uma palavra invertida. A alínea <b>b</b> exige a extinção do passivo, qualquer que seja o motivo, <b>SEM</b> o desaparecimento concomitante de ativo de valor igual ou maior.</p><p>É intuitivo: se some um ativo equivalente, não houve ganho patrimonial nenhum. O exemplo do Resumo é o perdão de dívida <b>sem desembolso</b> de recurso pelo Estado.</p><p class='fb-fonte'>Resumo 05 · <i>Reconhecimento da VPA — alínea b</i></p>",
4:"<p>Certo — é exatamente o exemplo da alínea <b>b</b> no Resumo: uma <b>instituição financeira perdoa uma dívida (passivo) do Estado</b> sem que este precise desembolsar nenhum recurso financeiro (ativo).</p><p>Extinguiu-se o passivo sem sumir ativo de valor igual ou maior; logo, <b>ocorre VPA</b>. Note que não há receita orçamentária alguma nessa operação.</p><p class='fb-fonte'>Resumo 05 · <i>Reconhecimento da VPA — alínea b, exemplo do perdão de dívida</i></p>",
5:"<p>Certo — é a alínea <b>c</b>: considera-se realizada a VPA pela <b>geração natural de novos ativos independentemente da intervenção de terceiros</b>.</p><p>O Resumo explica: de forma <b>espontânea</b>, sem transação, negociação ou interferência externa. O exemplo dado é o dos <b>juros de aplicações financeiras</b>, que são VPA por geração natural de rendimentos.</p><p class='fb-fonte'>Resumo 05 · <i>Reconhecimento da VPA — alínea c</i></p>",
6:"<p>Errado — o Resumo usa justamente os <b>juros de aplicações financeiras</b> como exemplo de VPA.</p><p>Eles se enquadram na alínea <b>c</b>: <b>geração natural de novos ativos independentemente da intervenção de terceiros</b>. A ausência de transação com terceiro, longe de afastar a VPA, é o que caracteriza essa hipótese.</p><p class='fb-fonte'>Resumo 05 · <i>Reconhecimento da VPA — alínea c</i></p>",
7:"<p>Certo — é a alínea <b>d</b>, que o próprio Resumo chama de autoexplicativa: considera-se realizada a VPA no <b>recebimento efetivo de doações e subvenções</b>.</p><p>Repare na palavra <b>efetivo</b>: aqui a hipótese se liga ao recebimento, diferentemente da alínea <b>a</b>, em que o compromisso firme já basta.</p><p class='fb-fonte'>Resumo 05 · <i>Reconhecimento da VPA — alínea d</i></p>",
8:"<p>Certo — é o quadro <b>ATENÇÃO!</b>: o reconhecimento da VPA pode ocorrer em <b>3 momentos</b> — <b>antes, depois ou no momento da ARRECADAÇÃO</b> da receita orçamentária.</p><p>Os três exemplos do Resumo: <b>antes</b>, o IPTU (fato gerador em 1º de janeiro); <b>depois</b>, o recebimento antecipado por venda a termo de serviços; <b>no momento</b>, a venda de serviços concomitante à prestação.</p><p class='fb-fonte'>Resumo 05 · <i>ATENÇÃO! — os 3 momentos da VPA</i></p>",
9:"<p>Errado pelo <b>necessariamente</b>. O quadro ATENÇÃO! é expresso: o reconhecimento da VPA pode ocorrer <b>antes, depois ou no momento</b> da arrecadação da receita orçamentária.</p><p>São regimes distintos correndo em paralelo: a VPA segue o <b>fato gerador</b>; a receita orçamentária segue a <b>arrecadação</b>. Coincidem apenas em um dos três cenários do material.</p><p class='fb-fonte'>Resumo 05 · <i>ATENÇÃO! — os 3 momentos da VPA</i></p>",
10:"<p>Errado no marco. No exemplo de <b>VPA antes da arrecadação</b>, o Resumo é claro: o reconhecimento do direito e da VPA deve ser feito <b>no momento do fato gerador</b> (1º de janeiro), e <b>não</b> no momento da arrecadação, que ocorrerá futuramente.</p><p>Na arrecadação só há troca de um direito por caixa — <b>fato permutativo</b>, sem nova VPA.</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo de VPA antes da arrecadação — IPTU</i></p>",
11:"<p>Certo — é o lançamento 1 do exemplo do IPTU, no momento do fato gerador (1º de janeiro):</p><p><b>D</b> – Créditos Tributários a Receber (Ativo)<br><b>C</b> – Impostos Sobre Patrimônio e a Renda (VPA)</p><p>Natureza da informação <b>patrimonial</b>: registra no Balanço Patrimonial. Nasce o direito e, em contrapartida, a VPA.</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo de VPA antes da arrecadação — lançamentos</i></p>",
12:"<p>Errado — trocou a classificação. O Resumo diz que, nesse caso, o registro da VPA <b>aumenta o resultado patrimonial</b>, constituindo um <b>fato modificativo</b>.</p><p>O fato <b>permutativo</b> é o outro, o da arrecadação: D Caixa / C Créditos Tributários a Receber — troca de um direito por caixa, sem alterar o patrimônio líquido.</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo de VPA antes da arrecadação — IPTU</i></p>",
13:"<p>Certo — é o lançamento 2 do exemplo do IPTU, no momento da arrecadação:</p><p><b>D</b> – Caixa e Equivalentes de Caixa em Moeda Nacional (Ativo)<br><b>C</b> – Créditos Tributários a Receber (Ativo)</p><p>Como resume o material: há <b>troca de um direito por caixa</b>, constituindo <b>fato permutativo</b>. Em paralelo, na ótica orçamentária, D Receita a Realizar / C Receita Realizada.</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo de VPA antes da arrecadação — lançamentos</i></p>",
14:"<p>Certo — é o exemplo de <b>VPA depois da arrecadação</b>: no recebimento antecipado de valores por <b>venda a termo de serviços</b>, a receita orçamentária é registrada <b>antes</b> da ocorrência do fato gerador.</p><p>Logo, a VPA ocorre em momento <b>posterior</b> à arrecadação — só quando o serviço for efetivamente prestado é que o fato gerador se consuma.</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo de VPA depois da arrecadação</i></p>",
15:"<p>Certo — é o lançamento 1 do recebimento antecipado:</p><p><b>D</b> – Caixa e Equivalentes de Caixa em Moeda Nacional (Ativo)<br><b>C</b> – Variação Patrimonial Aumentativa Diferida (<b>Passivo</b> → recebimento antecipado)</p><p>O dinheiro entra, mas ainda não é VPA de resultado: enquanto o serviço não for prestado, é <b>obrigação de prestar</b>, e por isso figura no passivo.</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo de VPA depois da arrecadação — lançamentos</i></p>",
16:"<p>Errado por uma palavra. O Resumo diz que há troca de um direito (entrada antecipada dos valores) por uma <b>obrigação de prestar o serviço</b>, constituindo uma variação patrimonial <b>qualitativa (não quantitativa)</b>.</p><p>O material grifa o parêntese exatamente porque a banca insiste nessa troca. Entrou caixa e nasceu passivo de igual valor — o patrimônio líquido não se altera.</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo de VPA depois da arrecadação</i></p>",
17:"<p>Certo — é o lançamento 2, feito quando o serviço é prestado e ocorre o fato gerador da VPA, com impacto no resultado da entidade:</p><p><b>D</b> – Variação Patrimonial Aumentativa Diferida (baixa do Passivo)<br><b>C</b> – Valor bruto de exploração de bens e direitos e prestação de serviços (VPA)</p><p>Só aqui o diferido vira resultado.</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo de VPA depois da arrecadação — lançamentos</i></p>",
18:"<p>Certo — é a alínea <b>a</b> das hipóteses de VPD no MCASP: considera-se realizada quando <b>deixar de existir o correspondente valor ativo, por transferência de sua propriedade para terceiro</b>.</p><p>Guarde as três alíneas juntas: saída do ativo por transferência (a), <b>diminuição ou extinção do valor econômico</b> do ativo (b) e <b>surgimento de passivo sem o correspondente ativo</b> (c).</p><p class='fb-fonte'>Resumo 05 · <i>Reconhecimento da VPD — alínea a</i></p>",
19:"<p>Certo — é a alínea <b>b</b>: <b>diminuição ou extinção do valor econômico de um ativo</b>.</p><p>Repare que aqui o ativo não precisa sair do patrimônio; basta que perca valor. É o critério que diferencia essa alínea da <b>a</b>, em que há transferência de propriedade para terceiro.</p><p class='fb-fonte'>Resumo 05 · <i>Reconhecimento da VPD — alínea b</i></p>",
20:"<p>Certo — é a alínea <b>c</b>, na letra do Resumo: considera-se realizada a VPD <b>pelo surgimento de um passivo, sem o correspondente ativo</b>.</p><p>Repare no paralelo com a VPA: lá, a alínea <b>b</b> exige extinção de passivo <b>sem</b> desaparecimento de ativo equivalente. Nos dois casos, o que gera resultado é a ponta que fica sozinha.</p><p class='fb-fonte'>Resumo 05 · <i>Reconhecimento da VPD — alínea c</i></p>",
21:"<p>Errado — a alínea <b>c</b> exige o surgimento de passivo <b>sem o correspondente ativo</b>. Se o passivo vem acompanhado da incorporação de ativo de igual valor, não há VPD.</p><p>O quadro <b>DESPENCA</b> do Resumo mostra exatamente essa situação: na liquidação do suprimento de fundos registra-se o passivo (Suprimento de Fundos a Pagar) e, ao mesmo tempo, incorpora-se o ativo (Adiantamentos Concedidos) — e a VPD só vem depois.</p><p class='fb-fonte'>Resumo 05 · <i>Reconhecimento da VPD — alínea c; quadro DESPENCA</i></p>",
22:"<p>Certo — é o quadro <b>ATENÇÃO!</b> da VPD: o reconhecimento pode ocorrer em <b>3 momentos</b> — antes, depois ou no momento da <b>LIQUIDAÇÃO</b> da despesa orçamentária.</p><p>Os exemplos do material: <b>antes</b>, o 13º salário; <b>depois</b>, o suprimento de fundos; <b>no momento</b>, a liquidação concomitante à prestação do serviço.</p><p class='fb-fonte'>Resumo 05 · <i>ATENÇÃO! — os 3 momentos da VPD</i></p>",
23:"<p>Errado no marco de comparação. O quadro ATENÇÃO! fixa a <b>LIQUIDAÇÃO</b> da despesa orçamentária como referência da VPD — antes, depois ou no momento dela.</p><p>O <b>empenho</b> é o marco do reconhecimento <b>orçamentário</b> da despesa, não do patrimonial. Troca de eixo clássica: empenho é orçamento; liquidação, em regra, é fato gerador.</p><p class='fb-fonte'>Resumo 05 · <i>ATENÇÃO! — os 3 momentos da VPD</i></p>",
24:"<p>Certo — é o exemplo de <b>VPD antes da liquidação</b>. O <b>13º salário</b>, a ser pago no fim do ano, deve ser reconhecido <b>a cada mês trabalhado</b>, com VPD reconhecida mensalmente.</p><p>Enquanto isso, <b>empenho, liquidação e pagamento</b> da despesa orçamentária só acontecem no <b>mês do pagamento</b>. Patrimônio e orçamento andam em tempos diferentes.</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo de VPD antes da liquidação — 13º salário</i></p>",
25:"<p>Certo — é o lançamento 1 do exemplo, no final do mês trabalhado (dia 30):</p><p><b>D</b> – Remuneração a Pessoal Ativo Civil – Abrangidos pelo RPPS (VPD)<br><b>C</b> – Pessoal a Pagar – 13º Salário (Passivo)</p><p>Natureza da informação <b>patrimonial</b>. Nasce o passivo mês a mês, muito antes de qualquer empenho.</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo de VPD antes da liquidação — lançamentos</i></p>",
26:"<p>Certo — é o exemplo de <b>VPD após a liquidação</b>. Na concessão de <b>suprimento de fundos</b> (adiantamento de valores a um servidor), a despesa orçamentária é <b>empenhada, liquidada e paga no ato da concessão</b>.</p><p>No material, tudo isso ocorre em <b>01 de dezembro de 2023</b>; a VPD só aparece na prestação de contas, em <b>15 de janeiro de 2024</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo de VPD após a liquidação — suprimento de fundos</i></p>",
27:"<p>Errado no momento. No suprimento de fundos, o efetivo registro da VPD só ocorre com a <b>prestação de contas do suprido</b> — ou seja, a VPD ocorre <b>DEPOIS</b> da liquidação, como o Resumo escreve em caixa alta.</p><p>Na liquidação há apenas passivo e ativo nascendo juntos (Suprimento de Fundos a Pagar contra Adiantamentos Concedidos), o que, pela alínea <b>c</b>, não gera VPD.</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo de VPD após a liquidação — suprimento de fundos</i></p>",
28:"<p>Certo — é literalmente o quadro <b>DESPENCA</b> do Resumo: na liquidação da despesa com suprimento de fundos, no enfoque patrimonial, ao mesmo tempo em que ocorre o registro de um <b>passivo</b> (Suprimento de Fundos a Pagar), há também a <b>incorporação de um ativo</b> (Adiantamentos Concedidos a Pessoal e a Terceiros).</p><p>É justamente por isso que ainda não há VPD nesse momento.</p><p class='fb-fonte'>Resumo 05 · <i>Quadro DESPENCA — suprimento de fundos</i></p>",
29:"<p>Certo — é o lançamento 2 do exemplo, no momento da prestação de contas (15 de janeiro de 2024):</p><p><b>D</b> – Variação Patrimonial Diminutiva (VPD)<br><b>C</b> – Adiantamentos Concedidos a Pessoal e a Terceiros (Ativo)</p><p>Agora sim o ativo desaparece sem contrapartida e o resultado patrimonial é atingido.</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo de VPD após a liquidação — lançamentos</i></p>",
30:"<p>Certo — é o exemplo de <b>VPD no momento da liquidação</b>: quando a liquidação ocorre <b>concomitantemente com a prestação do serviço</b>, a despesa orçamentária e o fato gerador da VPD são <b>contabilizados juntos</b>.</p><p>O caso do material: prefeitura que contrata empresa para <b>manutenção de estradas municipais</b> e liquida a despesa conforme o serviço é executado.</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo de VPD no momento da liquidação</i></p>",
31:"<p>Certo — é o lançamento patrimonial da liquidação nesse exemplo:</p><p><b>D</b> – Variação Patrimonial Diminutiva (VPD)<br><b>C</b> – Demais Obrigações a Curto Prazo (Passivo)</p><p>E, na ótica orçamentária, ao mesmo tempo: D Crédito Empenhado a Liquidar / C Crédito Empenhado Liquidado a Pagar.</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo de VPD no momento da liquidação — lançamentos</i></p>",
32:"<p>Certo — é o quadro dos estágios da despesa: o <b>empenho</b> é o <b>1º estágio</b> e será formalizado mediante a emissão de documento denominado <b>Nota de Empenho</b>, do qual deve constar o <b>nome do credor</b> e o <b>valor da despesa</b>.</p><p>Os três estágios, na ordem do material: <b>empenho, liquidação e pagamento</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Estágios da execução da despesa orçamentária</i></p>",
33:"<p>Certo — definição literal do quadro: a <b>liquidação</b> consiste na verificação do <b>direito adquirido pelo credor</b>, tendo por base os <b>documentos comprobatórios</b> do respectivo crédito.</p><p>O Resumo traduz em linguagem de prova: grosso modo, a liquidação ocorre quando a Administração <b>verifica se o material foi entregue</b> (ou se o serviço foi realizado).</p><p class='fb-fonte'>Resumo 05 · <i>Estágios da execução da despesa — liquidação</i></p>",
34:"<p>Errado na parte final. O quadro do Resumo encerra dizendo que o pagamento <b>só pode ser efetuado após a regular liquidação da despesa</b>.</p><p>Empenho prévio não dispensa nada: a ordem dos estágios é <b>empenho, liquidação e pagamento</b>, e é na liquidação que se verifica o direito adquirido pelo credor. Sem ela, não se paga.</p><p class='fb-fonte'>Resumo 05 · <i>Estágios da execução da despesa — pagamento</i></p>",
35:"<p>Certo — são exatamente os meios listados no quadro: o pagamento consiste na entrega de <b>numerário ao credor</b> por meio de <b>cheque nominativo</b>, <b>ordens de pagamento</b> ou <b>crédito em conta</b>.</p><p>Lembre da condição que vem colada a essa frase: só pode ser efetuado <b>após a regular liquidação</b> da despesa.</p><p class='fb-fonte'>Resumo 05 · <i>Estágios da execução da despesa — pagamento</i></p>",
36:"<p>Certo — é o lançamento orçamentário do empenho da dotação, repetido nos três exemplos de VPD do Resumo:</p><p><b>D</b> – Crédito Disponível<br><b>C</b> – Crédito Empenhado a Liquidar</p><p>Natureza da informação <b>orçamentária</b>: registra no Balanço Orçamentário. O crédito deixa de estar disponível e passa a estar comprometido.</p><p class='fb-fonte'>Resumo 05 · <i>Lançamentos orçamentários — empenho</i></p>",
37:"<p>Certo — é o lançamento 2.2 do exemplo do 13º salário, na liquidação:</p><p><b>D</b> – Crédito Empenhado em Liquidação<br><b>C</b> – Crédito Empenhado Liquidado a Pagar</p><p>Natureza <b>orçamentária</b>. A cadeia do material vai de Crédito Disponível a Crédito Empenhado a Liquidar, depois em Liquidação, Liquidado a Pagar e, por fim, Liquidado Pago.</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo do 13º salário — lançamentos da liquidação</i></p>",
38:"<p>Certo — é o lançamento orçamentário do pagamento, item 2.3 do exemplo do 13º salário:</p><p><b>D</b> – Crédito Empenhado Liquidado a Pagar<br><b>C</b> – Crédito Empenhado Liquidado Pago</p><p>Em paralelo, na ótica patrimonial: D Pessoal a Pagar – 13º Salário (Passivo) / C Caixa e Equivalentes de Caixa (Ativo).</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo do 13º salário — lançamentos do pagamento</i></p>",
39:"<p>Certo — é o lançamento orçamentário da arrecadação que o Resumo repete em todos os exemplos de VPA:</p><p><b>D</b> – Receita a Realizar<br><b>C</b> – Receita Realizada</p><p>Natureza da informação <b>orçamentária</b>: registra no Balanço Orçamentário. Ele aparece tanto no IPTU quanto no recebimento antecipado e na venda concomitante.</p><p class='fb-fonte'>Resumo 05 · <i>Lançamentos orçamentários — arrecadação</i></p>",
40:"<p>Errado — inverteu os dois marcos. Nos quadros ATENÇÃO!, a <b>VPA</b> se compara com a <b>ARRECADAÇÃO</b> da receita orçamentária e a <b>VPD</b>, com a <b>LIQUIDAÇÃO</b> da despesa orçamentária.</p><p>Fixe o par: receita → arrecadação; despesa → liquidação. E, em ambos, o reconhecimento pode se dar <b>antes, depois ou no momento</b> desse marco.</p><p class='fb-fonte'>Resumo 05 · <i>ATENÇÃO! — marcos da VPA e da VPD</i></p>",
41:"<p>Certo — o caso se enquadra na alínea <b>b</b> das hipóteses de VPD: <b>diminuição ou extinção do valor econômico de um ativo</b>. Na depreciação o bem permanece no patrimônio, mas perde valor.</p><p>Compare com a alínea <b>a</b>, que exige que o ativo deixe de existir <b>por transferência de sua propriedade para terceiro</b> — hipótese diferente.</p><p class='fb-fonte off'>Não consta do Resumo 05 — o material não cita a depreciação nominalmente; o enquadramento decorre da alínea b do MCASP nele transcrita.</p>",
42:"<p>Certo — é a alínea <b>a</b> das hipóteses de VPD: considera-se realizada quando <b>deixar de existir o correspondente valor ativo, por transferência de sua propriedade para terceiro</b>.</p><p>É exatamente o que ocorre na alienação: o bem sai do patrimônio do ente e passa ao adquirente.</p><p class='fb-fonte'>Resumo 05 · <i>Reconhecimento da VPD — alínea a</i></p>",
43:"<p>Certo — é a consequência direta do quadro ATENÇÃO!: a VPA pode ser reconhecida <b>antes</b> da arrecadação da receita orçamentária.</p><p>O exemplo do Resumo é o <b>IPTU</b>: fato gerador em <b>1º de janeiro</b>, com reconhecimento do direito e da VPA nessa data, enquanto a arrecadação <b>ocorrerá futuramente</b> — podendo cair em exercício distinto.</p><p class='fb-fonte'>Resumo 05 · <i>ATENÇÃO! e exemplo do IPTU</i></p>",
44:"<p>Errado — não há essa correspondência obrigatória. O próprio Resumo traz VPA que não é receita orçamentária: o <b>perdão de dívida</b> concedido por instituição financeira ao Estado, <b>sem desembolso</b>, extingue passivo e gera VPA sem qualquer arrecadação.</p><p>Na outra ponta, o <b>recebimento antecipado</b> por venda a termo registra receita orçamentária <b>antes</b> de existir VPA — que só vem com a prestação do serviço.</p><p class='fb-fonte'>Resumo 05 · <i>Alínea b e exemplo de VPA depois da arrecadação</i></p>",
45:"<p>Errado na classificação. No lançamento do recebimento antecipado, a <b>Variação Patrimonial Aumentativa Diferida</b> é creditada como <b>Passivo</b> — o Resumo anota entre parênteses: <i>Passivo → recebimento antecipado</i>.</p><p>O que a entidade tem não é direito, e sim <b>obrigação de prestar o serviço</b>. Por isso o material classifica a operação como variação patrimonial <b>qualitativa</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo de VPA depois da arrecadação — lançamentos</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"05", nome:"Variações patrimoniais", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
