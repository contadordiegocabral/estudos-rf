/* Contabilidade Geral — Módulo 03: Ativo circulante, PECLD e despesas antecipadas (modo direto) */
window.MOD = window.MOD || {};
window.MOD.contab03 = (function(){
"use strict";

var CARDS = [
  ["O que compreende o ativo circulante?","Os <b>bens e direitos conversíveis em dinheiro</b> ao longo do <b>exercício social subsequente</b> — ou do <b>ciclo operacional</b>, caso este seja <b>maior</b> que o exercício social."],
  ["O que o art. 179 da Lei 6.404/76 classifica no ativo circulante?","As <b>disponibilidades</b>; os <b>direitos realizáveis no curso do exercício social subsequente</b>; e as <b>aplicações de recursos em despesas do exercício seguinte</b>."],
  ["Em que ordem as contas do ativo são dispostas?","Em ordem <b>DECRESCENTE de grau de liquidez</b> — art. 178, §1º, da Lei 6.404/76. Por isso as <b>disponibilidades</b> são o primeiro subgrupo."],
  ["O que está dentro do conceito de DISPONIBILIDADES?","<b>Dinheiro em caixa ou em banco</b>; <b>depósitos bancários à vista</b>; <b>numerários em trânsito</b>; <b>cheques sem restrição de uso imediato</b>; <b>aplicações financeiras de liquidez imediata</b> (equivalentes de caixa)."],
  ["O que NÃO compõe as disponibilidades?","Qualquer depósito com <b>restrição ou vinculação</b>: <b>depósitos bloqueados</b>, <b>vinculados</b> ou com <b>restrição de movimentação por cláusula contratual</b>."],
  ["Quais as duas exceções que ENTRAM nas disponibilidades?","As <b>contas especiais para pagamentos específicos</b> (ex.: dividendos a pagar a acionistas) e as <b>contas especiais de cobrança</b> — ambas em “Depósitos Bancários à Vista”."],
  ["Qual a primeira conta do ativo, no topo da lista?","<b>Caixa e Equivalentes de Caixa</b> — é a de <b>maior liquidez</b>."],
  ["O que é CAIXA?","O <b>numerário em espécie</b> (dinheiro propriamente dito) e os <b>depósitos bancários disponíveis</b>."],
  ["O que são EQUIVALENTES DE CAIXA?","<b>Aplicações financeiras de curto prazo</b> (em regra <b>até 3 meses</b>), de <b>alta liquidez</b>, <b>prontamente conversíveis em caixa</b> e sujeitas a <b>insignificante risco de mudança de valor</b>."],
  ["Para que servem os equivalentes de caixa?","Para atender a <b>compromissos de caixa de curto prazo</b> — <b>não</b> são mantidos para <b>investimento</b>."],
  ["O que é saldo bancário a descoberto?","Saldo decorrente de <b>empréstimos obtidos e liquidados em curto lapso temporal</b> — o <b>cheque especial</b>."],
  ["Como tratar o saldo bancário a descoberto?","É <b>incluído como componente de caixa e equivalentes de caixa</b>, mas com a função de <b>DEDUZIR</b> o montante do grupo."],
  ["Exemplo: disponibilidades 20.000, aplicações resgatáveis em 60 dias 15.000, poupança 30.000, cheque especial 8.000. Qual o caixa e equivalentes?","<b>20.000 + 15.000 + 30.000 − 8.000 = R$ 57.000</b>."],

  ["O que representam as Contas a Receber?","Um <b>direito</b> (ativo), que surge normalmente de <b>vendas a prazo</b> ou da <b>prestação de serviços</b>."],
  ["Lançamento da venda com parte à vista e parte a prazo","<b>D</b> Caixa/Bancos (parte à vista) · <b>D</b> Clientes (parte a prazo) · <b>C</b> Receita Bruta de Vendas (total) — conta de resultado."],
  ["Lançamento do CMV na venda","<b>D</b> CMV (conta de resultado — despesa) · <b>C</b> Estoque (↓ ativo), pelo <b>valor de custo</b>."],
  ["Lançamento do ICMS sobre vendas","<b>D</b> ICMS sobre Vendas (conta de resultado — <b>dedução da receita bruta</b>) · <b>C</b> ICMS a Recolher (<b>passivo</b>)."],
  ["O que é a PECLD?","<b>Perdas Estimadas com Créditos de Liquidação Duvidosa</b> — conta <b>retificadora</b> do <b>Ativo Circulante</b> ou do <b>ANC Realizável a Longo Prazo</b>. Tem natureza <b>credora</b>."],
  ["Por que se constitui a PECLD?","Porque a empresa sabe, pelo <b>histórico</b>, que <b>parte das vendas a prazo não será recebida</b> — o “calote”."],
  ["Qual o fundamento conceitual da PECLD?","Ajustar os <b>benefícios econômicos futuros</b> ao que <b>realmente se espera receber</b> — o <b>real valor</b> do ativo."],
  ["Como se calcula o valor da PECLD?","Aplicando um <b>percentual de estimativa de inadimplência</b> sobre o <b>saldo de duplicatas a receber</b>."],
  ["Lançamento da CONSTITUIÇÃO da PECLD","<b>D</b> Despesa com PECLD (despesa <b>operacional</b> na DRE) · <b>C</b> PECLD (conta patrimonial <b>redutora do ativo</b>)."],
  ["Lançamento da duplicata INCOBRÁVEL (efetivação da perda)","<b>D</b> PECLD · <b>C</b> Duplicatas a Receber. Não passa pelo resultado — a despesa já foi reconhecida na constituição."],
  ["Lançamento da COMPLEMENTAÇÃO da PECLD","<b>D</b> Despesa com PECLD · <b>C</b> PECLD — mesmo lançamento da constituição."],
  ["Lançamento da REVERSÃO da PECLD","<b>D</b> PECLD · <b>C</b> Receita com Reversão da PECLD (conta de resultado — <b>receita</b> na DRE). Ocorre quando a <b>perda foi menor que o estimado</b>."],
  ["E quando a duplicata incobrável é MAIOR que a PECLD constituída?","<b>D</b> PECLD (pelo saldo existente) · <b>D</b> Perdas com Clientes (despesa operacional na DRE, pelo excesso) · <b>C</b> Duplicatas a Receber."],
  ["Exemplo: venda de 300.000, 20% à vista, inadimplência estimada em 3%. Qual a PECLD?","A base são as <b>duplicatas a receber</b>: 80% de 300.000 = <b>240.000</b>. <b>PECLD = 240.000 × 3% = R$ 7.200</b>."],

  ["O que são despesas antecipadas?","Um <b>direito</b> da empresa: ela <b>paga antecipadamente</b> por serviço ou mercadoria a ser recebido no <b>futuro</b>. O <b>fato gerador ainda não ocorreu</b> — <b>não são despesas incorridas</b>."],
  ["Quatro exemplos clássicos de despesa antecipada","<b>Prêmio de seguros a apropriar/a vencer</b>; <b>aluguéis antecipados</b>; <b>assinatura de periódicos</b>; <b>salários pagos antecipadamente</b>."],
  ["Lançamento do pagamento antecipado do prêmio de seguros","<b>D</b> Prêmio de Seguros a Apropriar (<b>ativo</b> — despesa antecipada) · <b>C</b> Caixa/Bancos."],
  ["Lançamento do reconhecimento mensal da despesa de seguros","<b>D</b> Despesa de Seguros (resultado) · <b>C</b> Prêmio de Seguros a Apropriar (↓ ativo)."],
  ["Seguro de R$ 90.000 por 12 meses contratado em 01/07 — qual a despesa mensal?","<b>90.000 ÷ 12 = R$ 7.500</b> por mês, a partir de 31/07."],
  ["Aluguel de R$ 96.000 por 24 meses pago em 02/09, com ocupação a partir de 01/12 — quando começa a apropriação?","Em <b>dezembro</b> — o fato gerador começa com a <b>ocupação</b>, não com o pagamento. Apropriação mensal de <b>96.000 ÷ 24 = R$ 4.000</b>."],
  ["Nesse exemplo, como segregar o saldo restante de R$ 92.000?","<b>AC = 4.000 × 12 = R$ 48.000</b> · <b>ANC (Realizável a Longo Prazo) = R$ 44.000</b>."],
  ["Lei 6.404/76 × CPC 26 — o critério do ativo circulante","<b>Lei 6.404/76:</b> AC são os direitos realizáveis <b>no curso do exercício social subsequente</b>. <b>CPC 26 (item 66):</b> AC são os realizáveis <b>até 12 meses após a data do balanço</b>."],
  ["Por que essa diferença importa na prova?","Com balanço em <b>30/06/X1</b>, pelo <b>CPC 26</b> vai ao <b>AC</b> o que vencer até <b>30/06/X2</b> e ao <b>ANC</b> o que vencer <b>a partir de 30/07/X2</b>. Leia o enunciado para saber qual critério usar."]
];

var QS = [
  ["O ativo circulante compreende os bens e direitos conversíveis em dinheiro ao longo do exercício social subsequente ou do ciclo operacional, se este for maior.","C","CEBRASPE","Conceito."],
  ["São classificados no ativo circulante as disponibilidades, os direitos realizáveis no exercício social subsequente e as aplicações de recursos em despesas do exercício seguinte.","C","FCC","Art. 179 da Lei 6.404/76."],
  ["As contas do ativo são dispostas em ordem crescente de grau de liquidez.","E","FGV","Em ordem <b>decrescente</b> — art. 178, §1º."],
  ["As disponibilidades são o primeiro subgrupo do ativo circulante.","C","VUNESP","Por serem as de maior liquidez."],
  ["Numerários em trânsito e cheques sem restrição de uso imediato integram as disponibilidades.","C","CEBRASPE","Constam do conceito."],
  ["Depósitos bancários bloqueados ou vinculados integram o saldo das disponibilidades.","E","FCC","Qualquer restrição ou vinculação <b>afasta</b> a conta das disponibilidades."],
  ["Contas especiais para pagamento de dividendos a acionistas compõem as disponibilidades, em depósitos bancários à vista.","C","FGV","Exceção expressa."],
  ["Contas especiais de cobrança não compõem as disponibilidades por terem destinação específica.","E","VUNESP","São a <b>outra exceção</b> que compõe as disponibilidades."],
  ["Caixa compreende o numerário em espécie e os depósitos bancários disponíveis.","C","CEBRASPE","Definição."],
  ["Equivalentes de caixa são aplicações financeiras de curto prazo, em regra até três meses, de alta liquidez e sujeitas a insignificante risco de mudança de valor.","C","FCC","Definição do CPC 03 (R2)."],
  ["Os equivalentes de caixa são mantidos com a finalidade de investimento de longo prazo.","E","FGV","São mantidos para <b>compromissos de caixa de curto prazo</b>."],
  ["Saldos bancários a descoberto decorrentes de cheque especial são incluídos em caixa e equivalentes de caixa, deduzindo o montante do grupo.","C","VUNESP","Função redutora."],
  ["Com disponibilidades de R$ 20.000, aplicações resgatáveis em 60 dias de R$ 15.000, poupança de R$ 30.000 e cheque especial de R$ 8.000, o caixa e equivalentes de caixa é de R$ 57.000.","C","CEBRASPE","20 + 15 + 30 − 8."],
  ["No mesmo exemplo, o caixa e equivalentes de caixa seria de R$ 65.000.","E","FCC","Isso ignoraria a dedução do saldo a descoberto."],
  ["As contas a receber representam um direito e surgem normalmente de vendas a prazo ou da prestação de serviços.","C","FGV","Conceito."],
  ["Na venda de estoque de R$ 60.000 por R$ 100.000, com 20% à vista, o lançamento da receita é a débito de caixa em R$ 20.000, a débito de clientes em R$ 80.000 e a crédito de receita bruta de vendas em R$ 100.000.","C","VUNESP","Receita pelo valor total."],
  ["No mesmo exemplo, a baixa do estoque é registrada a débito de CMV e a crédito de estoque em R$ 60.000.","C","CEBRASPE","Pelo valor de custo."],
  ["O ICMS sobre vendas é registrado a débito de conta de resultado, como dedução da receita bruta, e a crédito de ICMS a recolher, no passivo.","C","FCC","Lançamento padrão."],
  ["A PECLD é conta retificadora do ativo e possui natureza credora.","C","FGV","Retifica o AC ou o ANC Realizável a Longo Prazo."],
  ["A PECLD é conta do passivo, pois representa uma obrigação futura.","E","VUNESP","É conta <b>retificadora do ativo</b>, não obrigação."],
  ["A PECLD retifica apenas contas do ativo circulante.","E","CEBRASPE","Pode retificar também o <b>ANC Realizável a Longo Prazo</b>."],
  ["O valor da PECLD é calculado aplicando-se um percentual de inadimplência estimada sobre o saldo de duplicatas a receber.","C","FCC","Base de cálculo."],
  ["A PECLD ajusta os benefícios econômicos futuros àquilo que realmente se espera receber.","C","FGV","Fundamento conceitual."],
  ["A constituição da PECLD é registrada a débito de despesa com PECLD e a crédito de PECLD, conta redutora de ativo.","C","VUNESP","A despesa é operacional na DRE."],
  ["A contabilização da duplicata incobrável, dentro do valor estimado, é registrada a débito de PECLD e a crédito de duplicatas a receber.","C","CEBRASPE","Não transita pelo resultado."],
  ["A efetivação da perda dentro do valor estimado gera nova despesa no resultado do período.","E","FCC","A despesa já foi reconhecida na <b>constituição</b> da PECLD."],
  ["A reversão da PECLD é registrada a débito de PECLD e a crédito de receita com reversão da PECLD.","C","FGV","Ocorre quando a perda foi menor que a estimada."],
  ["Quando a duplicata incobrável supera a PECLD constituída, a diferença é registrada a débito de perdas com clientes.","C","VUNESP","Despesa operacional na DRE."],
  ["A complementação da PECLD utiliza o mesmo lançamento da constituição.","C","CEBRASPE","D despesa com PECLD · C PECLD."],
  ["Vendido estoque por R$ 300.000 com 20% à vista e inadimplência estimada em 3%, a PECLD constituída é de R$ 9.000.","E","FCC","A base são as duplicatas: 240.000 × 3% = <b>7.200</b>."],
  ["No mesmo exemplo, a PECLD constituída é de R$ 7.200.","C","FGV","240.000 × 3%."],
  ["No mesmo exemplo, o valor lançado em duplicatas a receber é de R$ 240.000.","C","VUNESP","80% de 300.000."],
  ["As despesas antecipadas representam um direito da empresa, pois o fato gerador ocorrerá no futuro.","C","CEBRASPE","Não são despesas incorridas."],
  ["Prêmios de seguros a vencer, aluguéis antecipados e assinaturas de periódicos são exemplos de despesas antecipadas.","C","FCC","Exemplos clássicos."],
  ["Salários pagos antecipadamente são classificados como despesa do período do pagamento.","E","FGV","São <b>despesa antecipada</b>, no ativo, até o fato gerador."],
  ["O pagamento antecipado de prêmio de seguros é registrado a débito de prêmio de seguros a apropriar, no ativo, e a crédito de caixa.","C","VUNESP","Lançamento padrão."],
  ["O reconhecimento mensal da despesa de seguros é registrado a débito de despesa de seguros e a crédito de prêmio de seguros a apropriar.","C","CEBRASPE","Baixa do direito."],
  ["Seguro de R$ 90.000 com cobertura de um ano contratado em 01/07/2023 gera despesa mensal de R$ 7.500.","C","FCC","90.000 dividido por 12."],
  ["No mesmo exemplo, a primeira apropriação da despesa ocorre em 31/07/2023.","C","FGV","Ao final do primeiro mês de cobertura."],
  ["Aluguel de R$ 96.000 por 24 meses pago em 02/09/22, com ocupação a partir de 01/12/22, começa a ser apropriado em setembro de 2022.","E","VUNESP","Começa em <b>dezembro</b> — o fato gerador é a ocupação."],
  ["No mesmo exemplo, a apropriação mensal é de R$ 4.000.","C","CEBRASPE","96.000 dividido por 24."],
  ["No mesmo exemplo, após a apropriação de dezembro, o saldo restante de R$ 92.000 é segregado em R$ 48.000 no ativo circulante e R$ 44.000 no ativo não circulante.","C","FCC","12 meses no circulante."],
  ["Segundo a Lei nº 6.404/76, são classificados no ativo circulante os direitos realizáveis no curso do exercício social subsequente.","C","FGV","Art. 179."],
  ["Segundo o CPC 26, são classificados no ativo circulante os direitos realizáveis até doze meses após a data do balanço.","C","VUNESP","Item 66."],
  ["Com balanço levantado em 30/06/X1, o CPC 26 classifica no ativo circulante o que vencer até 30/06/X2.","C","CEBRASPE","E no ANC o que vencer a partir de 30/07/X2."],
  ["Os critérios da Lei 6.404/76 e do CPC 26 para o ativo circulante são idênticos.","E","FCC","Um usa o exercício social subsequente; o outro, doze meses da data do balanço."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Ativo circulante, disponibilidades e equivalentes de caixa",
      '<div class="box"><span class="bl">O ativo circulante</span>'+
      '<p>Bens e direitos <b>conversíveis em dinheiro</b> ao longo do <b>exercício social subsequente</b> — ou do <b>ciclo operacional</b>, se este for <b>maior</b>. O <b>art. 179</b> classifica nele as <b>disponibilidades</b>, os <b>direitos realizáveis no exercício seguinte</b> e as <b>aplicações em despesas do exercício seguinte</b>.</p>'+
      '<p>As contas do ativo vêm em ordem <b>DECRESCENTE de liquidez</b> (art. 178, §1º) — por isso as disponibilidades abrem o grupo.</p></div>'+
      '<div class="box"><span class="bl">Disponibilidades</span>'+
      '<p>Dinheiro em caixa ou em banco · depósitos bancários <b>à vista</b> · numerários <b>em trânsito</b> · cheques <b>sem restrição de uso imediato</b> · aplicações de <b>liquidez imediata</b>.</p></div>'+
      '<div class="box trap"><span class="bl">O que sai e o que entra</span>'+
      '<p><b>NÃO entra</b> nada com <b>restrição ou vinculação</b>: depósitos bloqueados, vinculados, ou com restrição por cláusula contratual.</p>'+
      '<p><b>ENTRAM, por exceção</b>, em “Depósitos Bancários à Vista”: as <b>contas especiais para pagamentos específicos</b> (dividendos a acionistas) e as <b>contas especiais de cobrança</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Caixa × equivalentes de caixa</span>'+
      '<p><b>Caixa:</b> numerário em espécie e depósitos bancários disponíveis.</p>'+
      '<p><b>Equivalentes:</b> aplicações de <b>curto prazo</b> (em regra <b>até 3 meses</b>), de <b>alta liquidez</b>, prontamente conversíveis e de <b>insignificante risco</b> de mudança de valor. <b>Não</b> são mantidos para investimento.</p>'+
      '<p><b>Saldo bancário a descoberto</b> (cheque especial) entra no grupo, mas <b>DEDUZINDO</b>.</p>'+
      '<p class="mn"><em>20.000 + 15.000 + 30.000 − 8.000 = 57.000</em></p></div>')
  ],
  V2:[
    sl("Contas a receber e PECLD",
      '<div class="box"><span class="bl">A venda, passo a passo</span>'+
      '<p><b>Receita:</b> <b>D</b> Caixa/Bancos (parte à vista) · <b>D</b> Clientes (parte a prazo) · <b>C</b> Receita Bruta de Vendas (<b>valor total</b>).</p>'+
      '<p><b>Baixa do estoque:</b> <b>D</b> CMV · <b>C</b> Estoque (pelo <b>custo</b>).</p>'+
      '<p><b>ICMS:</b> <b>D</b> ICMS sobre Vendas (<b>dedução da receita bruta</b>) · <b>C</b> ICMS a Recolher (<b>passivo</b>).</p></div>'+
      '<div class="box"><span class="bl">O que é a PECLD</span>'+
      '<p><b>Perdas Estimadas com Créditos de Liquidação Duvidosa</b> — conta <b>retificadora</b> do <b>AC</b> ou do <b>ANC Realizável a Longo Prazo</b>, de natureza <b>CREDORA</b>. Ajusta os benefícios econômicos futuros ao que <b>realmente se espera receber</b>.</p>'+
      '<p><b>Cálculo:</b> percentual de inadimplência estimada <b>sobre o saldo de duplicatas a receber</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Os seis lançamentos da PECLD</span>'+
      '<ol><li><b>Venda a prazo:</b> D Duplicatas a Receber · C Receita de Vendas.</li>'+
      '<li><b>Constituição:</b> D Despesa com PECLD · C PECLD.</li>'+
      '<li><b>Duplicata incobrável:</b> D PECLD · C Duplicatas a Receber — <b>não passa pelo resultado</b>.</li>'+
      '<li><b>Complementação:</b> D Despesa com PECLD · C PECLD.</li>'+
      '<li><b>Reversão</b> (perda menor que a estimada): D PECLD · C Receita com Reversão da PECLD.</li>'+
      '<li><b>Incobrável maior que a PECLD:</b> D PECLD · <b>D Perdas com Clientes</b> · C Duplicatas a Receber.</li></ol></div>'+
      '<div class="box tip"><span class="bl">A conta que a banca erra de propósito</span>'+
      '<p>Venda de <b>300.000</b> com <b>20% à vista</b> e inadimplência de <b>3%</b>: a base <b>não</b> é a venda, são as <b>duplicatas</b> — 80% de 300.000 = <b>240.000</b>. <b>PECLD = 7.200</b>, e não 9.000.</p></div>')
  ],
  V3:[
    sl("Despesas antecipadas e o corte circulante/não circulante",
      '<div class="box"><span class="bl">Conceito</span>'+
      '<p>A empresa <b>paga antes</b> por serviço ou mercadoria a receber no futuro. É um <b>DIREITO no ativo</b> — o fato gerador ainda não ocorreu, então <b>não é despesa incorrida</b>.</p>'+
      '<p><b>Exemplos clássicos:</b> prêmio de seguros a apropriar/a vencer · aluguéis antecipados · assinatura de periódicos · salários pagos antecipadamente.</p></div>'+
      '<div class="box"><span class="bl">Os dois lançamentos</span>'+
      '<p><b>Pagamento:</b> <b>D</b> Prêmio de Seguros a Apropriar (ativo) · <b>C</b> Caixa/Bancos.</p>'+
      '<p><b>Apropriação mensal:</b> <b>D</b> Despesa de Seguros (resultado) · <b>C</b> Prêmio de Seguros a Apropriar.</p>'+
      '<p><b>Exemplo:</b> R$ 90.000 por 12 meses a partir de 01/07 → <b>R$ 7.500/mês</b>, primeira apropriação em <b>31/07</b>.</p></div>'+
      '<div class="box trap"><span class="bl">A armadilha do aluguel</span>'+
      '<p>R$ 96.000 por <b>24 meses</b> pagos em <b>02/09</b>, com ocupação a partir de <b>01/12</b>. A apropriação começa <b>em dezembro</b> — o fato gerador é a <b>ocupação</b>, não o pagamento. Mensal: <b>4.000</b>.</p>'+
      '<p>Depois de dezembro sobram <b>92.000</b>, que se <b>segregam</b>: <b>AC = 4.000 × 12 = 48.000</b> · <b>ANC (Realizável a Longo Prazo) = 44.000</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Lei 6.404/76 × CPC 26</span>'+
      '<p><b>Lei 6.404/76 (art. 179):</b> AC são os direitos realizáveis <b>no curso do exercício social subsequente</b>.</p>'+
      '<p><b>CPC 26 (item 66):</b> AC são os realizáveis <b>até 12 meses após a data do balanço</b>.</p>'+
      '<p>Com balanço em <b>30/06/X1</b>, o CPC 26 põe no AC o que vence até <b>30/06/X2</b> e no ANC o que vence a partir de <b>30/07/X2</b>. Leia o enunciado antes de segregar.</p></div>')
  ]
};

var EX = {
S1:{t:"gap", instr:"Complete a ordem das contas do ativo",
  before:"As contas do ativo são dispostas em ordem ",
  after:" de grau de liquidez.",
  options:["decrescente","crescente","alfabética"], answer:0,
  why:"Art. 178, §1º, da Lei 6.404/76 — por isso as disponibilidades abrem o grupo."},

S2:{t:"multi", instr:"Marque o que integra as DISPONIBILIDADES",
  options:["Dinheiro em caixa ou em banco","Depósitos bancários à vista",
           "Numerários em trânsito","Cheques sem restrição de uso imediato",
           "Aplicações financeiras de liquidez imediata",
           "Depósitos bancários bloqueados","Depósitos vinculados por cláusula contratual"],
  answers:[0,1,2,3,4],
  why:"Qualquer restrição ou vinculação afasta a conta das disponibilidades."},

S3:{t:"sort", instr:"Compõe ou não compõe as disponibilidades?",
  buckets:["Compõe","Não compõe"],
  items:[["Conta especial para pagamento de dividendos a acionistas",0],
         ["Conta especial de cobrança",0],
         ["Depósito bloqueado",1],["Depósito vinculado",1],
         ["Depósito com restrição de movimentação por cláusula contratual",1]],
  why:"As duas primeiras são as exceções expressas."},

S4:{t:"sort", instr:"Classifique cada característica",
  buckets:["Caixa","Equivalente de caixa"],
  items:[["Numerário em espécie",0],["Depósitos bancários disponíveis",0],
         ["Aplicação financeira de curto prazo, em regra até três meses",1],
         ["Alta liquidez, prontamente conversível em dinheiro",1],
         ["Insignificante risco de mudança de valor",1]],
  why:"Os equivalentes não são mantidos para investimento."},

S5:{t:"mc", instr:"Como se trata o saldo bancário a descoberto decorrente de cheque especial?",
  options:["É incluído em caixa e equivalentes, deduzindo o montante do grupo",
           "É classificado no passivo circulante, fora do grupo",
           "É somado ao caixa e equivalentes","É registrado em contas de compensação"],
  answer:0,
  why:"Compõe a gestão de caixa de curto prazo."},

S6:{t:"mc", instr:"Disponibilidades R$ 20.000; aplicações resgatáveis em 60 dias R$ 15.000; poupança R$ 30.000; cheque especial R$ 8.000. Qual o caixa e equivalentes de caixa?",
  options:["R$ 57.000","R$ 65.000","R$ 73.000","R$ 50.000"],
  answer:0,
  why:"20 + 15 + 30 − 8."},

S7:{t:"wordbank", instr:"Monte o lançamento da venda de R$ 100.000 com 20% à vista",
  target:["D","Caixa","20.000","D","Clientes","80.000","C","Receita","Bruta","de","Vendas","100.000"],
  extra:["CMV","Estoque","PECLD"],
  why:"A receita é reconhecida pelo valor total, não só pela parte recebida."},

S8:{t:"match", instr:"Ligue cada operação da venda ao seu lançamento",
  pairs:[["Baixa do estoque","D CMV · C Estoque"],
         ["ICMS sobre a venda","D ICMS sobre Vendas · C ICMS a Recolher"],
         ["Receita da venda","D Caixa e Clientes · C Receita Bruta de Vendas"]],
  why:"O ICMS sobre vendas é dedução da receita bruta."},

S9:{t:"mc", instr:"A PECLD é conta de qual natureza e onde figura?",
  options:["Retificadora do ativo, de natureza credora","Do passivo, de natureza credora",
           "Do ativo, de natureza devedora","Do patrimônio líquido, de natureza credora"],
  answer:0,
  why:"Retifica o AC ou o ANC Realizável a Longo Prazo."},

S10:{t:"gap", instr:"Complete a base de cálculo da PECLD",
  before:"O valor da perda estimada é calculado aplicando-se um percentual de inadimplência sobre o saldo de ",
  after:".",
  options:["duplicatas a receber","receita bruta de vendas","estoques"], answer:0,
  why:"Por isso a parte recebida à vista não entra na base."},

S11:{t:"match", instr:"Ligue cada situação da PECLD ao seu lançamento",
  pairs:[["Constituição","D Despesa com PECLD · C PECLD"],
         ["Duplicata incobrável dentro do estimado","D PECLD · C Duplicatas a Receber"],
         ["Reversão","D PECLD · C Receita com Reversão da PECLD"],
         ["Incobrável maior que a PECLD","D PECLD · D Perdas com Clientes · C Duplicatas a Receber"]],
  why:"A efetivação da perda dentro do estimado não passa pelo resultado."},

S12:{t:"mc", instr:"Estoque de R$ 100.000 vendido por R$ 300.000, sendo 20% à vista, com inadimplência estimada em 3%. Qual a PECLD?",
  options:["R$ 7.200","R$ 9.000","R$ 3.000","R$ 6.000"],
  answer:0,
  why:"Base: 80% de 300.000 = 240.000. Depois, 3%."},

S13:{t:"multi", instr:"Marque os exemplos clássicos de despesa antecipada",
  options:["Prêmio de seguros a apropriar","Aluguéis antecipados",
           "Assinatura de periódicos","Salários pagos antecipadamente",
           "Duplicatas a receber","Depreciação acumulada"],
  answers:[0,1,2,3],
  why:"Todas representam direito no ativo, porque o fato gerador é futuro."},

S14:{t:"match", instr:"Ligue cada momento do prêmio de seguros ao seu lançamento",
  pairs:[["Pagamento antecipado","D Prêmio de Seguros a Apropriar · C Caixa/Bancos"],
         ["Apropriação mensal","D Despesa de Seguros · C Prêmio de Seguros a Apropriar"]],
  why:"No pagamento nasce um direito; na apropriação ele é baixado."},

S15:{t:"mc", instr:"Seguro de R$ 90.000 com cobertura de um ano contratado em 01/07/2023. Qual a despesa mensal e quando é a primeira apropriação?",
  options:["R$ 7.500, em 31/07/2023","R$ 7.500, em 01/07/2023",
           "R$ 90.000, em 31/07/2023","R$ 3.750, em 31/07/2023"],
  answer:0,
  why:"90.000 dividido por 12, ao final do primeiro mês de cobertura."},

S16:{t:"mc", instr:"Aluguel de R$ 96.000 por 24 meses pago em 02/09/22, com ocupação a partir de 01/12/22. Quando começa a apropriação?",
  options:["Em dezembro de 2022, com a ocupação","Em setembro de 2022, com o pagamento",
           "Em janeiro de 2023","Apenas ao final dos 24 meses"],
  answer:0,
  why:"O fato gerador da despesa é a ocupação da sala."},

S17:{t:"mc", instr:"No mesmo exemplo, como se segrega o saldo de R$ 92.000 após dezembro?",
  options:["R$ 48.000 no ativo circulante e R$ 44.000 no não circulante",
           "R$ 92.000 integralmente no ativo circulante",
           "R$ 44.000 no circulante e R$ 48.000 no não circulante",
           "R$ 92.000 integralmente no não circulante"],
  answer:0,
  why:"12 meses × R$ 4.000 ficam no circulante."},

S18:{t:"match", instr:"Ligue cada norma ao seu critério de ativo circulante",
  pairs:[["Lei nº 6.404/76","Direitos realizáveis no curso do exercício social subsequente"],
         ["CPC 26 (item 66)","Direitos realizáveis até 12 meses após a data do balanço"]],
  why:"Com balanço em 30/06/X1, o CPC 26 leva ao AC o que vence até 30/06/X2."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Contabilidade Geral 03","https://www.tecconcursos.com.br/s/Q2ZRab","Q2ZRab"],
  ["Caderno FCC — Contabilidade Geral 03","https://www.tecconcursos.com.br/s/Q2ZRaf","Q2ZRaf"],
  ["Caderno FGV — Contabilidade Geral 03","https://www.tecconcursos.com.br/s/Q294oH","Q294oH"],
  ["Caderno VUNESP — Contabilidade Geral 03","https://www.tecconcursos.com.br/s/Q2ZRai","Q2ZRai"]
];
var TECNOTA = "Módulo de cálculo curto e de alto retorno. Duas armadilhas respondem pela maioria dos erros: a base da PECLD são as duplicatas a receber (não a venda total) e a despesa antecipada só começa a ser apropriada quando o fato gerador começa — no aluguel, a ocupação, e não o pagamento.";

var UNITS = [
  {n:1, title:"Ativo circulante e disponibilidades", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Liquidez, disponibilidades e equivalentes", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · ativo circulante e liquidez", xp:25, data:["S1","S2","T0","T1","T2","T3","T4"]},
    {id:"K3", type:"drill",  title:"Praticar · o que entra e o que sai",     xp:25, data:["S3","S4","T5","T6","T7","T8","T9","T10"]},
    {id:"K4", type:"drill",  title:"Praticar · saldo a descoberto",          xp:25, data:["S5","S6","T11","T12","T13"]},
    {id:"K5", type:"flash",  title:"Flashcards · disponibilidades",          xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12]}
  ]},
  {n:2, title:"Contas a receber e PECLD", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"A venda, o CMV e os seis lançamentos da PECLD", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · a venda e o CMV",             xp:25, data:["S7","S8","T14","T15","T16","T17"]},
    {id:"K8", type:"drill",  title:"Praticar · natureza da PECLD",           xp:25, data:["S9","S10","T18","T19","T20","T21","T22"]},
    {id:"K9", type:"drill",  title:"Praticar · lançamentos e cálculo",       xp:25, data:["S11","S12","T23","T24","T25","T26","T27","T28","T29","T30","T31"]},
    {id:"K10",type:"flash",  title:"Flashcards · contas a receber e PECLD",  xp:15, data:[13,14,15,16,17,18,19,20,21,22,23,24,25,26]}
  ]},
  {n:3, title:"Despesas antecipadas", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Direito no ativo e o corte AC/ANC",      xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · conceito e exemplos",         xp:25, data:["S13","S14","T32","T33","T34","T35","T36"]},
    {id:"K13",type:"drill",  title:"Praticar · apropriação mensal",          xp:25, data:["S15","S16","T37","T38","T39","T40"]},
    {id:"K14",type:"drill",  title:"Praticar · segregação AC e ANC",         xp:25, data:["S17","S18","T41","T42","T43","T44","T45"]},
    {id:"K15",type:"flash",  title:"Flashcards · despesas antecipadas",      xp:15, data:[27,28,29,30,31,32,33,34,35]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                  xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                 xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 03 de Contabilidade (Radegondes) ---------- */
var COM={
0:"<p>Conceito do resumo: o ativo circulante <b>“compreende os bens e os direitos conversíveis em moeda (dinheiro) ao longo do exercício social subsequente OU do ciclo operacional, caso este tenha duração maior que o exercício social”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Ativo Circulante</i></p>",
1:"<p>Esquema do <b>art. 179 da Lei 6.404/76</b> no resumo, com os três subgrupos do AC: <b>disponibilidades</b> · <b>direitos realizáveis no curso do exercício social subsequente</b> · <b>aplicações de recursos em despesas do exercício seguinte</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Ativo Circulante — art. 179</i></p>",
2:"<p>Do resumo: as contas do ativo <b>“são dispostas em ordem DECRESCENTE de grau de liquidez, conforme previsto no §1º do artigo 178 da Lei 6.404/76”</b>.</p><p>Da mais líquida para a menos líquida — por isso caixa vem no topo.</p><p class='fb-fonte'>Resumo 03 · <i>Disponibilidades</i></p>",
3:"<p>Consequência que o resumo tira da ordem decrescente: <b>“por isso, as disponibilidades serão o PRIMEIRO subgrupo do ativo circulante”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Disponibilidades</i></p>",
4:"<p>Lista do resumo do que está dentro do conceito de disponibilidades: <b>dinheiro em caixa ou em banco</b> · <b>depósitos bancários disponíveis</b> · <b>numerários em trânsito</b> · <b>cheques sem restrição de uso imediato</b> · <b>aplicações financeiras de liquidez imediata</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Disponibilidades</i></p>",
5:"<p>Caixa <b>ATENÇÃO!</b> do resumo: <b>“qualquer depósito que contenha algum tipo de restrição ou vinculação NÃO irá compor o saldo das disponibilidades”</b>.</p><p>Os exemplos dele: depósitos <b>bloqueados</b>, <b>vinculados</b> e com restrição de movimentação por cláusula contratual.</p><p class='fb-fonte'>Resumo 03 · <i>Disponibilidades — Atenção!</i></p>",
6:"<p>Primeira das duas <b>EXCEÇÕES</b> do resumo, que entram em “depósitos bancários à vista”: <b>“contas especiais para pagamentos específicos (ex.: dividendos a pagar a acionistas)”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Disponibilidades — exceções</i></p>",
7:"<p>É a segunda exceção do resumo: <b>“contas especiais de cobrança (a ideia aqui é facilitar o pagamento por seus clientes)”</b> — elas <b>compõem</b> as disponibilidades.</p><p class='fb-fonte'>Resumo 03 · <i>Disponibilidades — exceções</i></p>",
8:"<p>Quadro comparativo do resumo, coluna <b>CAIXA</b>: <b>“compreende numerário em espécie (dinheiro propriamente dito)”</b> e <b>“são depósitos bancários disponíveis”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Caixa e Equivalentes de Caixa</i></p>",
9:"<p>Coluna <b>EQUIVALENTE DE CAIXA</b> do quadro: <b>aplicações financeiras de curto prazo (em regra, até 3 meses)</b> · <b>alta liquidez, prontamente conversíveis em caixa</b> · <b>sujeitas a insignificante risco de mudança de valor</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Caixa e Equivalentes de Caixa</i></p>",
10:"<p>Caixa <b>ATENÇÃO!</b> do resumo: <b>“os equivalentes de caixa NÃO são mantidos para investimentos (ou depósitos), uma vez que possuem a finalidade de atender a compromissos de caixa de CURTO PRAZO (3 meses ou menos)”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Caixa e Equivalentes — Atenção!</i></p>",
11:"<p><b>DEFINIÇÃO PERTINENTE</b> do resumo: saldos bancários a descoberto são <b>“saldos decorrentes de empréstimos obtidos e que serão liquidados em curto lapso temporal (ex.: cheque especial)”</b>, e <b>“são incluídos como componente de caixa e equivalentes de caixa, porém com a função de DEDUZIR (diminuir) o montante do grupo”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Saldo Bancário a Descoberto</i></p>",
12:"<p>É o <b>EXEMPLO</b> do resumo, com os mesmos números: <b>20.000 + 15.000 + 30.000 – 8.000 = R$ 57.000</b>.</p><p>Repare que as aplicações <b>resgatáveis em 60 dias</b> entram (menos de 3 meses) e o cheque especial <b>subtrai</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Saldo Bancário a Descoberto — exemplo</i></p>",
13:"<p>R$ 65.000 seria a soma sem a dedução. O resumo é explícito: o saldo a descoberto entra <b>com a função de deduzir</b>. A conta dele fecha em <b>R$ 57.000</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Saldo Bancário a Descoberto — exemplo</i></p>",
14:"<p>Do resumo: <b>“as contas a receber representam um direito (Ativo) e surgem normalmente de vendas a prazo ou da prestação de serviços efetuados pela empresa”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Contas a Receber (Clientes)</i></p>",
15:"<p>É o <b>EXEMPLO</b> do resumo, lançamento 1: <b>D – Caixa/Bancos R$ 20.000</b> · <b>D – Clientes R$ 80.000</b> · <b>C – Receita Bruta de Vendas R$ 100.000</b>.</p><p>A receita é registrada pelo <b>valor total</b>, independentemente de quanto entrou em caixa.</p><p class='fb-fonte'>Resumo 03 · <i>Contas a Receber — exemplo</i></p>",
16:"<p>Lançamento 2 do mesmo exemplo: <b>D – CMV R$ 60.000</b> (conta de resultado — despesa) · <b>C – Estoque R$ 60.000</b>.</p><p>A baixa é pelo <b>custo</b>, não pelo preço de venda.</p><p class='fb-fonte'>Resumo 03 · <i>Contas a Receber — exemplo</i></p>",
17:"<p>Caixa <b>ATENÇÃO!</b> do resumo, com alíquota de 18%: <b>D – ICMS sobre Vendas R$ 18.000</b>, que ele identifica como <b>“conta de resultado — DEDUÇÃO DA RECEITA BRUTA”</b> · <b>C – ICMS a Recolher R$ 18.000</b> (conta de passivo).</p><p class='fb-fonte'>Resumo 03 · <i>Contas a Receber — Atenção!</i></p>",
18:"<p>Do resumo: a PECLD <b>“é uma conta retificadora do Ativo Circulante ou do Ativo Não Circulante Realizável a Longo Prazo. Desta forma, possui NATUREZA CREDORA”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>PECLD</i></p>",
19:"<p>É <b>retificadora do ativo</b>, não passivo. O resumo explica o porquê: as empresas a constituem <b>“de acordo com seu histórico, pois sabem que parte das vendas a prazo não serão recebidas. É o famoso calote”</b> — ela ajusta o <b>direito</b>, não cria obrigação.</p><p class='fb-fonte'>Resumo 03 · <i>PECLD</i></p>",
20:"<p>A frase do resumo cita os <b>dois</b> grupos: retificadora <b>“do Ativo Circulante OU do Ativo Não Circulante Realizável a Longo Prazo”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>PECLD</i></p>",
21:"<p>Do resumo: <b>“o valor da Perda Estimada é calculado mediante a aplicação de um percentual sobre o saldo de DUPLICATAS A RECEBER (clientes). O percentual refere-se a uma estimativa de inadimplência (calote)”</b>.</p><p>A base é o <b>saldo a receber</b>, nunca a venda total.</p><p class='fb-fonte'>Resumo 03 · <i>PECLD</i></p>",
22:"<p>Fundamento que o resumo dá: <b>“o conceito está relacionado ao real valor que se espera no Ativo, ou seja, os benefícios econômicos futuros devem ser AJUSTADOS àquilo que realmente se tem a expectativa de receber”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>PECLD</i></p>",
23:"<p>Lançamento 2 da lista do resumo: <b>D – Despesa com PECLD</b> (conta de resultado — <b>despesa operacional na DRE</b>) · <b>C – PECLD</b> (conta patrimonial — <b>redutora de ativo</b>).</p><p class='fb-fonte'>Resumo 03 · <i>Lançamentos da PECLD</i></p>",
24:"<p>Lançamento 3 — <b>contabilização da duplicata incobrável (efetivação da perda — “calote”)</b>: <b>D – PECLD</b> · <b>C – Duplicatas a receber</b>.</p><p>Nenhuma conta de resultado entra: a despesa já foi lá atrás.</p><p class='fb-fonte'>Resumo 03 · <i>Lançamentos da PECLD</i></p>",
25:"<p>Olhe o lançamento 3 do resumo: <b>D PECLD · C Duplicatas a receber</b>. São duas contas <b>patrimoniais</b> — nenhuma despesa nova.</p><p>A despesa foi reconhecida no lançamento 2, na <b>constituição</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Lançamentos da PECLD</i></p>",
26:"<p>Lançamento 5 do resumo — <b>reversão da PECLD (a perda foi menor que o estimado)</b>: <b>D – PECLD</b> · <b>C – Receita com reversão da PECLD</b> (conta de resultado — receita na DRE).</p><p class='fb-fonte'>Resumo 03 · <i>Lançamentos da PECLD</i></p>",
27:"<p>Lançamento 6 — <b>quando a duplicata incobrável é maior que a PECLD constituída</b>: <b>D – PECLD</b> · <b>D – Perdas com Clientes</b> (conta de resultado — despesa operacional na DRE) · <b>C – Duplicata a receber</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Lançamentos da PECLD</i></p>",
28:"<p>Lançamento 4 do resumo — <b>complementação da PECLD</b>: <b>D – Despesa com PECLD</b> · <b>C – PECLD</b>. É o mesmo par da constituição.</p><p class='fb-fonte'>Resumo 03 · <i>Lançamentos da PECLD</i></p>",
29:"<p>R$ 9.000 seria 3% sobre os R$ 300.000 da venda inteira. O resumo é expresso: <b>“esse percentual é aplicado sobre o valor das DUPLICATAS A RECEBER”</b>.</p><p>A conta dele: <b>PECLD = 240.000 × 3% = 7.200</b>.</p><p class='fb-fonte'>Resumo 03 · <i>PECLD — exemplo</i></p>",
30:"<p>É a conta do <b>EXEMPLO</b> do resumo, literal: <b>PECLD = 240.000 × 3% → PECLD = R$ 7.200</b>.</p><p class='fb-fonte'>Resumo 03 · <i>PECLD — exemplo</i></p>",
31:"<p>Do mesmo exemplo: <b>D – Duplicatas a Receber R$ 240.000</b>, que o resumo anota como <b>“80% a prazo”</b> — o restante, R$ 60.000, entrou em caixa.</p><p class='fb-fonte'>Resumo 03 · <i>PECLD — exemplo</i></p>",
32:"<p>Do resumo: as despesas antecipadas <b>“representam um direito da empresa, pois ela paga de forma antecipada por um serviço a ser prestado no futuro, ou seja, os fatos geradores ocorrerão no futuro. NÃO são ainda despesas incorridas”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Despesa Antecipada</i></p>",
33:"<p>Os <b>exemplos clássicos</b> que o resumo diz serem cobrados em prova: <b>prêmio de seguros a apropriar/a vencer</b> · <b>aluguéis antecipados</b> · <b>assinatura de periódicos (jornais e revistas)</b> · <b>salários pagos antecipadamente</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Despesa Antecipada</i></p>",
34:"<p><b>Salários pagos antecipadamente</b> é o quarto exemplo da lista de <b>despesas antecipadas</b> do resumo — fica no <b>ativo</b> até o fato gerador ocorrer.</p><p class='fb-fonte'>Resumo 03 · <i>Despesa Antecipada</i></p>",
35:"<p>Lançamento 1 do resumo: <b>D – Prêmio de Seguros a apropriar</b> (ativo — despesa antecipada) · <b>C – Caixa/Bancos</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Despesa Antecipada — lançamentos</i></p>",
36:"<p>Lançamento 2 — <b>reconhecimento da despesa conforme ocorrência do fato gerador (mensal)</b>: <b>D – Despesa de Seguros</b> (conta de resultado) · <b>C – Prêmio de Seguros a apropriar</b> (baixa do ativo).</p><p class='fb-fonte'>Resumo 03 · <i>Despesa Antecipada — lançamentos</i></p>",
37:"<p>É o <b>EXEMPLO 01</b> do resumo, da <b>Cia. RAD</b>: <b>“ao final de cada mês, considera-se a despesa incorrida no valor de 1/12 do montante pago, ou seja, 90.000/12 = R$ 7.500”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Despesa Antecipada — exemplo 01</i></p>",
38:"<p>Do mesmo exemplo: <b>“em 31/07/2023, devemos fazer o 1º lançamento de reconhecimento da despesa”</b> — D Prêmio de Seguros R$ 7.500 · C Prêmio de seguros a vencer R$ 7.500.</p><p>A cobertura começou em 01/07, então o primeiro mês fecha em 31/07.</p><p class='fb-fonte'>Resumo 03 · <i>Despesa Antecipada — exemplo 01</i></p>",
39:"<p><b>EXEMPLO 02</b> do resumo: o pagamento foi em <b>02/09/22</b>, mas ele é claro — <b>“os R$ 96.000 pagos serão utilizados (consumidos) durante 24 meses A PARTIR DA DATA DA OCUPAÇÃO (01/12/22 — início da ocorrência do fato gerador da despesa)”</b>.</p><p>Pagar não é incorrer.</p><p class='fb-fonte'>Resumo 03 · <i>Despesa Antecipada — exemplo 02</i></p>",
40:"<p>Do mesmo exemplo: <b>“a apropriação mensal da despesa será no valor de R$ 96.000/24, sendo R$ 4.000 apropriados em dezembro”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Despesa Antecipada — exemplo 02</i></p>",
41:"<p>A segregação que o resumo faz do saldo restante de R$ 92.000: <b>“AC = R$ 4.000 × 12 = R$ 48.000”</b> e <b>“ANC (ARLP) → R$ 44.000”</b>.</p><p>Doze meses no circulante; o que passa disso vai para o realizável a longo prazo.</p><p class='fb-fonte'>Resumo 03 · <i>Despesa Antecipada — exemplo 02</i></p>",
42:"<p>Caixa <b>ATENÇÃO!</b> final do resumo: <b>“o art. 179 da Lei 6.404/76 classifica no Ativo Circulante os direitos realizáveis no curso do EXERCÍCIO SOCIAL SUBSEQUENTE”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>AC — Lei 6.404 × CPC 26</i></p>",
43:"<p>Do mesmo bloco: <b>“contudo, o item 66 do CPC 26 classifica no AC os direitos realizáveis até 12 MESES APÓS A DATA DO BALANÇO”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>AC — Lei 6.404 × CPC 26</i></p>",
44:"<p>É o exemplo literal do resumo: <b>“se o balanço for levantado em 30/06/X1, então será classificado no AC o que vencer até 30/06/X2 e no ANC o que vencer a partir de 30/07/X2”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>AC — Lei 6.404 × CPC 26</i></p>",
45:"<p>O resumo separa os dois critérios em duas linhas e ainda avisa: <b>“devemos ficar atentos ao enunciado da questão para segregarmos as contas em AC e ANC”</b>.</p><p>Em suma, pelo resumo: <b>Lei 6.404</b> → exercício social subsequente · <b>CPC 26</b> → 12 meses da data do balanço.</p><p class='fb-fonte'>Resumo 03 · <i>AC — Lei 6.404 × CPC 26</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"03", nome:"Ativo circulante, PECLD e despesas antecipadas", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
