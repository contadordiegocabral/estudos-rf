/* Contabilidade Geral — Módulo 08: Patrimônio líquido, reservas de capital e de lucros (modo direto) */
window.MOD = window.MOD || {};
window.MOD.contab08 = (function(){
"use strict";

var CARDS = [
  ["O que representa o patrimônio líquido no balanço patrimonial?","A <b>diferença entre o valor dos ativos e o dos passivos</b> — é o <b>valor contábil pertencente aos acionistas ou sócios</b>."],
  ["Em quais 6 contas o PL pode ser dividido (art. 178, § 2º, III, da Lei 6.404/76)?","<b>Capital Social</b> · <b>Reservas de Capital</b> · <b>Ajustes de Avaliação Patrimonial</b> · <b>Reservas de Lucros</b> · <b>Ações em Tesouraria</b> · <b>Prejuízos Acumulados</b>."],
  ["Quais contas do PL têm natureza CREDORA (parte positiva)?","Em regra <b>todas</b> as contas do PL. No quadro do resumo: <b>Capital Social Integralizado</b> · <b>Reservas de Capital</b> · <b>Reservas de Lucros</b> · <b>Lucros Acumulados</b>."],
  ["Quais contas do PL têm natureza DEVEDORA (retificadoras do PL)?","<b>Capital Social a Realizar (a integralizar)</b> · <b>Gastos com a Emissão de Ações</b> · <b>Ações em Tesouraria</b> · <b>Prejuízos Acumulados</b>."],
  ["O que é o capital social subscrito e como se divide?","É o <b>montante que os sócios se comprometem a entregar</b> à entidade. Divide-se em <b>Capital Integralizado</b> (parcela <b>efetivamente entregue</b> pelos sócios) e <b>Capital a Integralizar</b> (parcela <b>ainda não entregue</b>)."],
  ["O que diz o art. 182 da Lei 6.404/76 sobre a conta capital social?","Ela <b>discriminará o montante subscrito</b> e, <b>por dedução, a parcela ainda não realizada</b>: Subscrito <b>−</b> a Integralizar <b>=</b> Integralizado. <b>ATENÇÃO:</b> o valor que deve compor o saldo da conta é o <b>capital realizado</b>."],
  ["O que é capital social AUTORIZADO?","É um <b>limite de capital</b> dentro do qual a <b>Assembleia Geral</b> ou o <b>Conselho de Administração</b> pode autorizar um <b>aumento de capital social de forma independente</b> — <b>sem precisar de reforma estatutária</b>."],
  ["Alfa, constituída em 02/06/2023, capital subscrito de R$ 100.000 em quotas iguais; X integralizou em dinheiro, Y entrou com veículo de R$ 30.000 e deixou o resto para 90 dias. Qual o PL na constituição?","<b>R$ 80.000</b>: Subscrito 100.000 <b>−</b> a Integralizar 20.000 <b>=</b> Integralizado 80.000."],
  ["O que são reservas de capital?","São <b>receitas que NÃO transitam pelo resultado do exercício</b> e que ficam no <b>patrimônio líquido</b> da entidade."],
  ["Quais contas se classificam como reservas de capital?","<b>Ágio na emissão de ações</b> · <b>Alienação de Partes Beneficiárias</b> · <b>Alienação de Bônus de Subscrição</b>. São só essas três."],
  ["O que são bônus de subscrição?","<b>Títulos emitidos pela empresa</b> que dão <b>direito de preferência na subscrição de aumento de capital social autorizado</b>."],
  ["O que são partes beneficiárias?","<b>Títulos criados a qualquer tempo</b> pelas sociedades anônimas de <b>capital FECHADO</b>, para <b>captar recursos e beneficiar algumas partes</b>, com participação de <b>no máximo 10% do lucro</b> da empresa (acionistas, fundadores, empregados, clientes)."],
  ["Para que as reservas de capital SOMENTE poderão ser utilizadas (art. 200)?","<b>Absorção de prejuízos</b> que ultrapassarem os lucros acumulados e as reservas de lucros · <b>resgate, reembolso ou compra de ações</b> · <b>resgate de partes beneficiárias</b> · <b>incorporação ao capital social</b> · <b>pagamento de dividendo a ações preferenciais</b>, quando essa vantagem lhes for assegurada."],
  ["O que é a conta Gastos com Emissão de Ações?","Conta <b>retificadora do PL</b> que representa os <b>custos necessários para a emissão de ações</b>. Depois é compensada como contrapartida de uma <b>Reserva de Capital</b> ou de <b>redução do Capital Social</b>."],
  ["O que é o ágio na emissão de ações?","A <b>diferença positiva</b> entre o <b>valor recebido na venda de uma ação</b> e o seu <b>valor patrimonial</b> — a <b>contribuição do subscritor que ultrapassar o valor nominal</b>. O <b>CPC 08 chama de “prêmio”</b>."],
  ["Onde se contabiliza o ágio na emissão de ações?","Em conta de <b>Reserva de Capital</b>, dentro do <b>patrimônio líquido</b>, denominada <b>ágio na emissão de ações</b> — quando a ação é vendida por valor superior ao nominal ou ao a ela atribuído."],
  ["500.000 novas ações com VN de R$ 1,00, custo de emissão de R$ 20.000, integralizadas por R$ 550.000. Qual o aumento do PL e o lançamento?","<b>500.000 − 20.000 + 50.000 = R$ 530.000</b>. <b>D</b> Caixa 530.000 · <b>D</b> Gastos com emissão de ações 20.000 · <b>C</b> Ágio na Emissão de Ações 50.000 · <b>C</b> Capital Social 500.000."],
  ["O que dispõe o CPC 08, item 06, e como fica o lançamento?","O <b>prêmio (ágio) deve ser utilizado para absorver os custos de transação</b>. O lançamento correto: <b>D</b> Caixa 530.000 · <b>C</b> Ágio na Emissão de Ações 30.000 · <b>C</b> Capital Social 500.000."],
  ["O que diz o item 05 do CPC 08?","Os custos de transação na captação por <b>emissão de títulos patrimoniais</b> devem ser contabilizados <b>de forma destacada, em conta redutora do patrimônio líquido</b>, <b>deduzidos os eventuais efeitos fiscais</b>; e os <b>prêmios recebidos</b> vão para <b>reserva de capital</b>."],
  ["O que diz o item 13 do CPC 08?","Os custos de transação na captação por <b>instrumento de dívida</b> (empréstimos, financiamentos, debêntures, notas comerciais) devem ser contabilizados como <b>redução do valor justo inicialmente reconhecido</b> do instrumento financeiro emitido, para <b>evidenciação do valor líquido recebido</b>."],
  ["Emissão de R$ 10.000 com custos de R$ 2.400 — compare debêntures e ações","<b>Debêntures:</b> D Caixa 7.600 · D Gastos com a emissão de DEBÊNTURES 2.400 (<b>retificadora do Passivo</b>) · C Debêntures a Pagar 10.000. <b>Ações:</b> D Caixa 7.600 · D Gastos com a emissão de AÇÕES 2.400 (<b>retificadora do PL</b>) · C Capital Social 10.000."],
  ["Ações × debêntures — a linha que o CPC 08 traça","<b>Ações</b> são <b>títulos patrimoniais</b>: custos vão a <b>redutora do PL</b> e prêmios a <b>Reserva de Capital no PL</b>. <b>Debêntures</b> são <b>títulos de dívida</b>: custos vão a <b>redutora do Passivo</b> e prêmios ao <b>Passivo Exigível</b>."],
  ["O que são reservas de lucros e qual o lançamento de constituição?","Contas constituídas <b>com origem nos lucros da empresa</b> para <b>utilização posterior</b>. <b>D</b> Lucros Acumulados (↓ PL) · <b>C</b> Reserva de Lucros (↑ PL)."],
  ["Como se registra a reversão de saldo não utilizado de reserva de lucros, e que tipo de fato é?","De <b>forma inversa</b>: <b>D</b> Reserva de Lucros · <b>C</b> Lucros Acumulados. <b>ATENÇÃO:</b> constituição e reversão são <b>fato PERMUTATIVO</b> — entre contas do próprio PL."],
  ["Quais são as reservas de lucros, e quais as bancas mais cobram?","<b>Legal · Estatutária · para Contingências · de Incentivos Fiscais · de Retenção de Lucros · de Lucros a Realizar · Especial para Dividendos Obrigatórios · de Lucros Específica</b>. As mais cobradas: <b>Contingências, Incentivos Fiscais, Legal e Lucros a Realizar</b>."],
  ["O que é a reserva para contingências (art. 195)?","A <b>assembleia-geral</b> poderá, <b>por proposta dos órgãos da administração</b>, destinar parte do <b>lucro líquido</b> à formação de reserva para <b>compensar, em exercício futuro, a diminuição do lucro decorrente de perda julgada PROVÁVEL, cujo valor possa ser estimado</b>."],
  ["Qual o objetivo da reserva para contingências?","<b>Equalizar a distribuição de dividendos</b> quando se prevê <b>prejuízo ou diminuição no lucro líquido</b> decorrentes de <b>fatos extraordinários futuros</b>."],
  ["NÃO CONFUNDA: reserva para contingências × provisão para contingências × passivo contingente","<b>Reserva</b> para contingências: conta do <b>Patrimônio Líquido</b>. <b>Provisão</b> para contingências: conta do <b>Passivo Exigível</b>. <b>Passivo contingente</b>: <b>não é reconhecido em nenhuma classe</b>."],
  ["O que é a reserva de incentivos fiscais (art. 195-A)?","A assembleia geral poderá destinar a ela a <b>parcela do lucro líquido decorrente de doações ou subvenções governamentais para investimentos</b>, que <b>poderá ser excluída da base de cálculo do dividendo obrigatório</b>."],
  ["Reserva legal — finalidade, usos e limite obrigatório","Finalidade: <b>assegurar a integridade do capital social</b>. Só pode ser usada para <b>compensar prejuízos</b> ou <b>aumentar o capital</b>. <b>Antes de qualquer outra destinação, 5% do LLE</b> serão aplicados nela, e ela <b>não excederá 20% do capital social</b> (limite obrigatório)."],
  ["Qual o limite FACULTATIVO da reserva legal (art. 193, § 1º)?","A companhia <b>poderá deixar de constituir</b> a reserva legal no exercício em que o <b>saldo dela + as reservas de capital excederem 30% do capital social</b>: <b>RL + RC > 30% do CS</b>."],
  ["O que é a reserva de lucros a realizar (art. 197)? E o exemplo do resumo?","No exercício em que o <b>dividendo obrigatório ultrapassar a parcela realizada do LLE</b>, a assembleia-geral poderá destinar o <b>excesso</b> à RLR — evitando pagar dividendos sobre lucro que não entrou no caixa. Exemplo: LL 100.000, realizado 40.000, dividendos obrigatórios 50.000 → <b>RLR = R$ 10.000</b>."],
  ["Como se calcula o lucro realizado financeiramente?","<b>(+)</b> Lucro Líquido do Exercício <b>(−)</b> Resultado positivo de equivalência patrimonial <b>(−)</b> Lucro com realização financeira de Longo Prazo <b>=</b> <b>Lucro realizado financeiramente</b>."],
  ["Quais são os lucros NÃO realizados (art. 197, § 1º)?","O <b>resultado positivo com equivalência patrimonial</b> e o <b>lucro, rendimento ou ganhos líquidos cuja realização financeira se dê no longo prazo</b> (ex.: vendas de longo prazo)."],
  ["Reserva legal × reserva de lucros a realizar — finalidades","<b>Reserva Legal:</b> compensar prejuízo · aumentar o capital social. <b>Reserva de Lucros a Realizar:</b> compensar prejuízo · <b>pagar dividendos</b>."],
  ["O que são ajustes de avaliação patrimonial (art. 182, § 3º)?","As <b>contrapartidas de aumentos ou diminuições de valor atribuídos a elementos do ativo e do passivo em decorrência da sua avaliação a valor justo</b>, <b>enquanto não computadas no resultado do exercício</b> em obediência ao regime de competência."],
  ["O que são ações em tesouraria e como aparecem no balanço?","Conta <b>retificadora do PL</b> das <b>ações adquiridas pela própria empresa</b>. A empresa <b>não pode adquirir ações não integralizadas</b>. Devem ser <b>destacadas como dedução da conta do PL que registrar a origem dos recursos aplicados na sua aquisição</b>."],
  ["CPC 08 (R1), item 09: como tratar os custos de transação na aquisição de ações próprias?","Como <b>acréscimo do custo de aquisição</b> dessas ações. Exemplo: aquisição por 100.000 + custos de 15.000 → <b>D</b> Ações em tesouraria <b>115.000</b> · <b>C</b> Caixa <b>115.000</b>."]
];

var QS = [
  ["No balanço patrimonial, a diferença entre o valor dos ativos e o dos passivos representa o patrimônio líquido, que é o valor contábil pertencente aos acionistas ou sócios.","C","CEBRASPE","Conceito."],
  ["O patrimônio líquido pode ser dividido em capital social, reservas de capital, ajustes de avaliação patrimonial, reservas de lucros, ações em tesouraria e prejuízos acumulados.","C","Lei 6.404/76, art. 178, § 2º, III","As seis contas do esquema."],
  ["Em regra, as contas do patrimônio líquido possuem natureza devedora.","E","FGV","Em regra, natureza <b>credora</b>."],
  ["Ações em tesouraria e prejuízos acumulados são contas de natureza devedora, retificadoras do patrimônio líquido.","C","VUNESP","Representam a parte negativa."],
  ["A conta Gastos com a Emissão de Ações possui natureza credora e representa a parte positiva do patrimônio líquido.","E","CEBRASPE","É de natureza <b>devedora</b>, retificadora do PL."],
  ["O capital social a realizar (a integralizar) é conta de natureza devedora, que representa a parte negativa do patrimônio líquido.","C","FCC","Consta do quadro comparativo."],
  ["O capital social subscrito compreende o montante que os sócios se comprometem a entregar para a entidade.","C","FGV","Conceito."],
  ["O capital integralizado é a parcela do capital social ainda não entregue pelos sócios à entidade.","E","VUNESP","Inverteu: essa é a definição do capital <b>a integralizar</b>."],
  ["A conta do capital social discriminará o montante subscrito e, por dedução, a parcela ainda não realizada.","C","Lei 6.404/76, art. 182","Literalidade."],
  ["Em relação ao patrimônio líquido, o valor que deve compor o saldo da conta de Capital Social é o capital subscrito.","E","FCC","É o capital <b>realizado</b>."],
  ["Capital social autorizado é o limite de capital dentro do qual a assembleia geral ou o conselho de administração pode autorizar um aumento de capital social de forma independente.","C","FGV","Sem reforma estatutária."],
  ["O aumento de capital social dentro do limite do capital autorizado depende de prévia reforma estatutária.","E","VUNESP","É justamente o que o capital autorizado <b>dispensa</b>."],
  ["A empresa Alfa foi constituída com capital social subscrito de R$ 100.000, em quotas iguais entre dois sócios; um integralizou sua parte em dinheiro e o outro entregou um veículo de R$ 30.000, deixando o restante para 90 dias. No momento da constituição, o patrimônio líquido é de R$ 80.000.","C","CEBRASPE","100.000 − 20.000 a integralizar."],
  ["No mesmo exemplo, o patrimônio líquido no momento da constituição é de R$ 100.000, valor do capital subscrito.","E","FCC","Deduz-se a parcela ainda não realizada: <b>80.000</b>."],
  ["No mesmo exemplo, o capital social a integralizar é de R$ 20.000.","C","FGV","Parte do Sr. Y que ficou para 90 dias."],
  ["Reservas de capital são receitas que transitam pelo resultado do exercício antes de serem levadas ao patrimônio líquido.","E","CEBRASPE","<b>NÃO</b> transitam pelo resultado."],
  ["Classificam-se como reservas de capital o ágio na emissão de ações, a alienação de partes beneficiárias e a alienação de bônus de subscrição.","C","FCC","São essas três contas."],
  ["A reserva legal e a reserva para contingências são espécies de reservas de capital.","E","FGV","São reservas de <b>lucros</b>."],
  ["Bônus de subscrição são títulos emitidos pela empresa que dão direito de preferência na subscrição de aumento de capital social autorizado.","C","VUNESP","Conceito."],
  ["Partes beneficiárias são títulos que podem ser criados a qualquer tempo pelas sociedades anônimas de capital aberto.","E","CEBRASPE","Sociedades anônimas de capital <b>fechado</b>."],
  ["As partes beneficiárias asseguram participação de, no máximo, 20% do lucro da empresa.","E","FCC","No máximo <b>10%</b> do lucro."],
  ["As reservas de capital somente poderão ser utilizadas, entre outras hipóteses, para a absorção de prejuízos que ultrapassarem os lucros acumulados e as reservas de lucros e para a incorporação ao capital social.","C","Lei 6.404/76, art. 200","Duas das cinco hipóteses."],
  ["As reservas de capital podem ser utilizadas para o pagamento de dividendo a ações ordinárias, quando essa vantagem lhes for assegurada.","E","VUNESP","Ações <b>preferenciais</b>."],
  ["A conta Gastos com Emissão de Ações é retificadora do patrimônio líquido e, posteriormente, é compensada como contrapartida de uma reserva de capital ou de redução do capital social.","C","CEBRASPE","Tratamento do resumo."],
  ["O ágio na emissão de ações é a diferença positiva entre o valor recebido na venda de uma ação e o seu valor patrimonial, correspondendo à contribuição do subscritor que ultrapassar o valor nominal.","C","FCC","Conceito; o CPC 08 chama de prêmio."],
  ["O ágio na emissão de ações é registrado em conta de receita e transita pelo resultado do exercício.","E","FGV","É contabilizado em <b>reserva de capital</b>, no PL."],
  ["Emitidas 500.000 novas ações com valor nominal de R$ 1,00, integralizadas por R$ 550.000, com custo de emissão de R$ 20.000, o aumento do patrimônio líquido é de R$ 530.000.","C","VUNESP","500.000 − 20.000 + 50.000."],
  ["No mesmo exemplo, o ágio na emissão de ações é de R$ 50.000.","C","CEBRASPE","550.000 − 500.000 de valor nominal."],
  ["No mesmo exemplo, o aumento do patrimônio líquido é de R$ 550.000.","E","FCC","Ignora os <b>20.000</b> de gastos com a emissão, que reduzem o PL."],
  ["O prêmio (ágio) recebido na emissão de ações deve ser utilizado para absorver os custos de transação.","C","CPC 08, item 06","Regra da OBS do resumo."],
  ["Aplicado o item 06 do CPC 08 ao exemplo das 500.000 ações, o ágio reconhecido em reserva de capital é de R$ 30.000.","C","FGV","50.000 − 20.000 de custos absorvidos."],
  ["Os custos de transação incorridos na captação de recursos por meio da emissão de títulos patrimoniais devem ser contabilizados, de forma destacada, em conta redutora do patrimônio líquido, deduzidos os eventuais efeitos fiscais.","C","CPC 08, item 05","Literalidade do quadro."],
  ["Os custos de transação incorridos na captação de recursos por meio da contratação de instrumento de dívida devem ser contabilizados em conta redutora do patrimônio líquido.","E","CPC 08, item 13","Vão como <b>redução do valor justo inicialmente reconhecido</b> do instrumento financeiro emitido."],
  ["Emitidas debêntures no valor de R$ 10.000, com custos de transação de R$ 2.400, a conta Gastos com a Emissão de Debêntures é retificadora do patrimônio líquido.","E","CEBRASPE","É retificadora do <b>Passivo</b>."],
  ["Reservas de lucros são contas constituídas com origem nos lucros da empresa para utilização posterior.","C","FGV","Conceito."],
  ["A constituição de uma reserva de lucros é registrada a débito de lucros acumulados e a crédito da reserva de lucros.","C","VUNESP","Lançamento padrão."],
  ["A constituição de uma reserva de lucros é fato modificativo, pois reduz o patrimônio líquido.","E","CEBRASPE","É fato <b>permutativo</b> — entre contas do próprio PL."],
  ["A reserva especial para dividendos obrigatórios e a reserva de retenção de lucros são espécies de reservas de capital.","E","FCC","São espécies de reservas de <b>lucros</b>."],
  ["A assembleia-geral poderá, por proposta dos órgãos da administração, destinar parte do lucro líquido à formação de reserva com a finalidade de compensar, em exercício futuro, a diminuição do lucro decorrente de perda julgada provável, cujo valor possa ser estimado.","C","Lei 6.404/76, art. 195","Reserva para contingências."],
  ["A reserva para contingências é conta do passivo exigível.","E","FGV","É conta do <b>patrimônio líquido</b>; do passivo exigível é a <b>provisão</b> para contingências."],
  ["O passivo contingente não é reconhecido em nenhuma classe.","C","VUNESP","Quadro NÃO CONFUNDA."],
  ["O objetivo da reserva para contingências é equalizar a distribuição de dividendos quando se prevê prejuízo ou diminuição no lucro líquido decorrentes de fatos extraordinários futuros.","C","CEBRASPE","Objetivo do esquema."],
  ["A assembleia geral poderá destinar para a reserva de incentivos fiscais a parcela do lucro líquido decorrente de doações ou subvenções governamentais para investimentos, que poderá ser excluída da base de cálculo do dividendo obrigatório.","C","Lei 6.404/76, art. 195-A","Literalidade."],
  ["A reserva legal somente poderá ser utilizada para compensar prejuízos, sendo vedado seu uso para aumentar o capital social.","E","FCC","Também pode ser usada para <b>aumentar o capital</b>."],
  ["Antes de qualquer outra destinação, 10% do lucro líquido do exercício serão aplicados na constituição da reserva legal, que não excederá de 20% do capital social.","E","FGV","São <b>5%</b> do LLE."],
  ["A companhia poderá deixar de constituir a reserva legal no exercício em que o saldo dessa reserva, acrescido do montante das reservas de capital, exceder de 30% do capital social.","C","Lei 6.404/76, art. 193, § 1º","Limite facultativo."],
  ["No exercício em que o montante do dividendo obrigatório ultrapassar a parcela realizada do lucro líquido do exercício, a assembleia-geral poderá destinar o excesso à constituição de reserva de lucros a realizar.","C","VUNESP","Art. 197."],
  ["Com lucro líquido de R$ 100.000, lucro líquido realizado de R$ 40.000 e dividendos obrigatórios de R$ 50.000, a reserva de lucros a realizar é de R$ 60.000.","E","CEBRASPE","É de <b>R$ 10.000</b> — apenas o excesso sobre a parcela realizada."],
  ["São considerados lucros não realizados o resultado positivo com equivalência patrimonial e o lucro, rendimento ou ganhos líquidos cuja realização financeira se dê no longo prazo.","C","Lei 6.404/76, art. 197, § 1º","As duas hipóteses do esquema."],
  ["Serão classificadas como ajustes de avaliação patrimonial, enquanto não computadas no resultado do exercício em obediência ao regime de competência, as contrapartidas de aumentos ou diminuições de valor atribuídos a elementos do ativo e do passivo em decorrência da sua avaliação a valor justo.","C","Lei 6.404/76, art. 182, § 3º","Literalidade."],
  ["Na operação de aquisição de ações em tesouraria a empresa pode adquirir ações ainda não integralizadas.","E","FCC","O resumo é expresso: <b>não pode</b>."],
  ["Adquiridas ações de emissão própria por R$ 100.000, com custos de transação de R$ 15.000, registra-se a débito de ações em tesouraria R$ 100.000 e a débito de despesa R$ 15.000.","E","FGV","Os custos são <b>acréscimo do custo de aquisição</b>: ações em tesouraria por <b>115.000</b>."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Patrimônio líquido e capital social subscrito",
      '<div class="box"><span class="bl">O que é o patrimônio líquido</span>'+
      '<p>No balanço patrimonial, a <b>diferença entre o valor dos ativos e o dos passivos</b> — o <b>valor contábil pertencente aos acionistas ou sócios</b>.</p>'+
      '<p>Pelo <b>art. 178, § 2º, III</b>, da Lei 6.404/76, ele se divide em <b>6 contas</b>: <b>Capital Social</b> · <b>Reservas de Capital</b> · <b>Ajustes de Avaliação Patrimonial</b> · <b>Reservas de Lucros</b> · <b>Ações em Tesouraria</b> · <b>Prejuízos Acumulados</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Natureza das contas — o quadro do resumo</span>'+
      '<p>Em regra as contas do PL são de <b>natureza CREDORA</b>. Algumas, porém, são <b>DEVEDORAS</b> (retificadoras do PL).</p>'+
      '<ul><li><b>Credora (+):</b> Capital Social Integralizado · Reservas de Capital · Reservas de Lucros · Lucros Acumulados.</li>'+
      '<li><b>Devedora (−):</b> Capital Social a Realizar (a integralizar) · Gastos com a Emissão de Ações · Ações em Tesouraria · Prejuízos Acumulados.</li></ul></div>'+
      '<div class="box"><span class="bl">Capital social subscrito</span>'+
      '<p>É o <b>montante que os sócios se comprometem a entregar</b> à entidade. <b>Capital Integralizado</b> é a parcela <b>efetivamente entregue</b>; <b>Capital a Integralizar</b> é a parcela <b>ainda não entregue</b>.</p>'+
      '<p>Pelo <b>art. 182</b>, a conta do capital social <b>discriminará o montante subscrito</b> e, <b>por dedução, a parcela ainda não realizada</b>:</p>'+
      '<p class="mn"><em>Capital Social Subscrito (−) Capital Social a Integralizar (=) Capital Social Integralizado</em></p>'+
      '<p><b>ATENÇÃO:</b> o valor que deve compor o saldo da conta de Capital Social é o <b>capital realizado</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Capital social autorizado</span>'+
      '<p>É um <b>limite de capital</b> dentro do qual a <b>Assembleia Geral</b> ou o <b>Conselho de Administração</b> pode autorizar um aumento de capital social <b>de forma independente</b>, <b>sem precisar de reforma estatutária</b>.</p></div>'+
      '<div class="box trap"><span class="bl">O exemplo da empresa Alfa</span>'+
      '<p>Constituída em <b>02/06/2023</b> por dois sócios, capital <b>subscrito de R$ 100.000</b> em quotas iguais. O <b>Sr. X</b> integralizou sua parte em <b>dinheiro</b>; o <b>Sr. Y</b> entrou com um <b>veículo de R$ 30.000</b> e deixou o restante para <b>90 dias</b>.</p>'+
      '<p>PL na constituição: <b>100.000 − 20.000 = R$ 80.000</b>. Gabarito: <b>B</b>. A banca oferece 100.000 justamente para quem esquece a dedução.</p></div>')
  ],
  V2:[
    sl("Reservas de capital, gastos e ágio na emissão de ações e o CPC 08",
      '<div class="box"><span class="bl">Reservas de capital</span>'+
      '<p>São <b>receitas que NÃO transitam pelo resultado do exercício</b> e que ficam no <b>patrimônio líquido</b>. Só <b>três</b> contas entram aqui:</p>'+
      '<ul><li><b>Ágio na emissão de ações</b></li><li><b>Alienação de Partes Beneficiárias</b></li><li><b>Alienação de Bônus de Subscrição</b></li></ul>'+
      '<p><b>Bônus de subscrição:</b> títulos que dão <b>direito de preferência na subscrição de aumento de capital social autorizado</b>.</p>'+
      '<p><b>Partes beneficiárias:</b> títulos criados a qualquer tempo pelas S.A. de <b>capital FECHADO</b>, para captar recursos e beneficiar partes (acionistas, fundadores, empregados, clientes), com participação de <b>no máximo 10% do lucro</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Art. 200 — para que as reservas de capital SOMENTE podem ser usadas</span>'+
      '<ul><li><b>Absorção de prejuízos</b> que ultrapassarem os lucros acumulados e as reservas de lucros</li>'+
      '<li><b>Resgate, reembolso ou compra de ações</b></li><li><b>Resgate de partes beneficiárias</b></li>'+
      '<li><b>Incorporação ao capital social</b></li>'+
      '<li><b>Pagamento de dividendo a ações PREFERENCIAIS</b>, quando essa vantagem lhes for assegurada</li></ul></div>'+
      '<div class="box"><span class="bl">Gastos com emissão de ações e ágio</span>'+
      '<p><b>Gastos com Emissão de Ações:</b> conta <b>retificadora do PL</b> com os custos necessários à emissão; depois é compensada contra uma <b>Reserva de Capital</b> ou <b>redução do Capital Social</b>.</p>'+
      '<p><b>Ágio</b> (o CPC 08 chama de <b>“prêmio”</b>): a <b>diferença positiva</b> entre o valor recebido na venda da ação e o seu <b>valor patrimonial</b> — a contribuição do subscritor que <b>ultrapassar o valor nominal</b>. Vai para <b>Reserva de Capital</b>, no PL.</p></div>'+
      '<div class="box trap"><span class="bl">O exemplo das 500.000 ações</span>'+
      '<p><b>500.000</b> novas ações de <b>VN R$ 1,00</b>, custo de emissão de <b>R$ 20.000</b>, integralizadas por <b>R$ 550.000</b>:</p>'+
      '<p class="mn"><em>Capital Social 500.000 (−) Gasto com emissão 20.000 (+) Ágio 50.000 = R$ 530.000 de aumento no PL</em></p>'+
      '<p><b>Lançamento:</b> D Caixa 530.000 · D Gastos com emissão de ações 20.000 · C Ágio na Emissão de Ações 50.000 · C Capital Social 500.000.</p>'+
      '<p><b>OBS — CPC 08, item 06:</b> o <b>prêmio (ágio) deve absorver os custos de transação</b>. O lançamento correto fica: <b>D Caixa 530.000 · C Ágio 30.000 · C Capital Social 500.000</b>.</p></div>'+
      '<div class="box tip"><span class="bl">CPC 08 — item 05 × item 13</span>'+
      '<p><b>Item 05 (capital próprio — AÇÕES, títulos patrimoniais):</b> custos de transação em <b>conta redutora do patrimônio líquido</b>, de forma destacada, <b>deduzidos os eventuais efeitos fiscais</b>; <b>prêmios</b> recebidos em <b>reserva de capital</b>.</p>'+
      '<p><b>Item 13 (recursos de terceiros — DEBÊNTURES, títulos de dívida):</b> custos de transação como <b>redução do valor justo inicialmente reconhecido</b> do instrumento financeiro emitido, para evidenciar o <b>valor líquido recebido</b> — ou seja, <b>conta redutora do Passivo</b>; <b>prêmios</b> no <b>Passivo Exigível</b>.</p>'+
      '<p><b>Emissão de 10.000 com custos de 2.400:</b><br><b>Debêntures</b> → D Caixa 7.600 · D Gastos com a emissão de Debêntures 2.400 (↓ Passivo) · C Debêntures a Pagar 10.000.<br><b>Ações</b> → D Caixa 7.600 · D Gastos com a emissão de Ações 2.400 (↓ PL) · C Capital Social 10.000.</p></div>')
  ],
  V3:[
    sl("Reservas de lucros, avaliação patrimonial e ações em tesouraria",
      '<div class="box"><span class="bl">Reservas de lucros</span>'+
      '<p>Contas constituídas <b>com origem nos lucros</b> da empresa, para <b>utilização posterior</b>.</p>'+
      '<p><b>Constituição:</b> D Lucros Acumulados (↓ PL) · C Reserva de Lucros (↑ PL). <b>Reversão do saldo não utilizado:</b> o inverso.</p>'+
      '<p><b>ATENÇÃO:</b> constituição e reversão são <b>fato PERMUTATIVO</b> — só mexem em contas do próprio PL.</p>'+
      '<p><b>As espécies:</b> Legal · Estatutária · para Contingências · de Incentivos Fiscais · de Retenção de Lucros · de Lucros a Realizar · Especial para Dividendos Obrigatórios · de Lucros Específica. O resumo aprofunda as <b>quatro</b> que as bancas mais cobram: <b>Contingências, Incentivos Fiscais, Legal e Lucros a Realizar</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Reserva para contingências (art. 195) — e o NÃO CONFUNDA</span>'+
      '<p>A <b>assembleia-geral</b>, por proposta dos órgãos da administração, destina parte do <b>lucro líquido</b> para <b>compensar, em exercício futuro, a diminuição do lucro decorrente de perda julgada PROVÁVEL, cujo valor possa ser estimado</b>.</p>'+
      '<p><b>Objetivo:</b> <b>equalizar a distribuição de dividendos</b> quando se prevê prejuízo ou diminuição do lucro líquido por <b>fatos extraordinários futuros</b>.</p>'+
      '<ul><li><b>Reserva</b> para contingências → <b>Patrimônio Líquido</b></li>'+
      '<li><b>Provisão</b> para contingências → <b>Passivo Exigível</b></li>'+
      '<li><b>Passivo contingente</b> → <b>não é reconhecido em nenhuma classe</b></li></ul></div>'+
      '<div class="box"><span class="bl">Incentivos fiscais (art. 195-A) e reserva legal</span>'+
      '<p><b>Incentivos fiscais:</b> a assembleia geral pode destinar a <b>parcela do lucro líquido decorrente de doações ou subvenções governamentais para investimentos</b>, que <b>poderá ser excluída da base de cálculo do dividendo obrigatório</b>.</p>'+
      '<p><b>Reserva legal:</b> finalidade de <b>assegurar a integridade do capital social</b>; só pode ser usada para <b>compensar prejuízos</b> ou <b>aumentar o capital</b>. <b>Antes de qualquer outra destinação, 5% do LLE</b>, e <b>não excederá 20% do capital social</b> — o <b>limite obrigatório</b>.</p>'+
      '<p><b>ATENÇÃO (art. 193, § 1º):</b> a companhia <b>poderá deixar de constituir</b> a reserva legal quando <b>RL + RC > 30% do CS</b> — o <b>limite facultativo</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Reserva de lucros a realizar (art. 197)</span>'+
      '<p>No exercício em que o <b>dividendo obrigatório ultrapassar a parcela realizada do LLE</b>, a assembleia-geral pode destinar o <b>excesso</b> à RLR — para não pagar dividendos sobre lucro que <b>ainda não entrou no caixa</b>.</p>'+
      '<p class="mn"><em>LL 100.000 · LL realizado 40.000 · dividendos obrigatórios 50.000 → RLR = R$ 10.000</em></p>'+
      '<p><b>Lucro realizado:</b> (+) LLE (−) resultado positivo de equivalência patrimonial (−) lucro com realização financeira de longo prazo.</p>'+
      '<p><b>Lucros não realizados (art. 197, § 1º):</b> resultado positivo com <b>equivalência patrimonial</b> e lucro, rendimento ou ganhos líquidos cuja <b>realização financeira se dê no longo prazo</b> (ex.: vendas de longo prazo).</p>'+
      '<p><b>Lançamentos:</b> constituição D Lucros Acumulados · C RLR; reversão (quando o lucro se realiza) D RLR · C Lucros Acumulados; distribuição D Lucros Acumulados · C Dividendos a Pagar.</p>'+
      '<p><b>Finalidades — RL × RLR:</b> a <b>Legal</b> compensa prejuízo e <b>aumenta o capital</b>; a <b>RLR</b> compensa prejuízo e <b>paga dividendos</b>.</p></div>'+
      '<div class="box"><span class="bl">Avaliação patrimonial e ações em tesouraria</span>'+
      '<p><b>Ajustes de avaliação patrimonial (art. 182, § 3º):</b> as <b>contrapartidas de aumentos ou diminuições de valor atribuídos a elementos do ativo e do passivo em decorrência da avaliação a valor justo</b>, <b>enquanto não computadas no resultado</b> em obediência ao regime de competência.</p>'+
      '<p><b>Ações em tesouraria (art. 182, § 5º):</b> conta <b>retificadora do PL</b>, das ações adquiridas pela <b>própria empresa</b>. Ela <b>não pode adquirir ações não integralizadas</b>, e as ações devem ser <b>destacadas como dedução da conta do PL que registrar a origem dos recursos</b> aplicados na aquisição. Lançamento: <b>D Ações em Tesouraria · C Caixa</b>.</p>'+
      '<p><b>CPC 08 (R1), item 09:</b> os custos de transação na aquisição de ações próprias são <b>acréscimo do custo de aquisição</b> — 100.000 + 15.000 → <b>D Ações em tesouraria 115.000 · C Caixa 115.000</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Síntese — as contas do patrimônio líquido</span>'+
      '<p><b>(+)</b> Capital Social Subscrito <b>(−)</b> Capital a integralizar <b>(=)</b> Capital Integralizado · <b>(+)</b> Reservas de Capital · <b>(+)</b> Reservas de Lucros · <b>(+ ou −)</b> Ajuste de Avaliação Patrimonial · <b>(+ ou −)</b> Ajuste Acumulado de Conversão (diferença cambial) · <b>(−)</b> Ações em Tesouraria · <b>(−)</b> Prejuízos Acumulados.</p></div>')
  ]
};

var EX = {
S1:{t:"gap", instr:"Complete a regra do art. 182 da Lei 6.404/76",
  before:"A conta do capital social discriminará o montante subscrito e, por dedução, a parcela ainda não ",
  after:".",
  options:["realizada","subscrita","autorizada"], answer:0,
  why:"Subscrito − a Integralizar = Integralizado. O saldo da conta é o capital realizado."},

S2:{t:"sort", instr:"Classifique cada conta pela natureza no patrimônio líquido",
  buckets:["Natureza credora (+)","Natureza devedora (−)"],
  items:[["Capital Social Integralizado",0],["Reservas de Capital",0],
         ["Reservas de Lucros",0],["Lucros Acumulados",0],
         ["Capital Social a Realizar",1],["Gastos com a Emissão de Ações",1],
         ["Ações em Tesouraria",1],["Prejuízos Acumulados",1]],
  why:"Em regra o PL é credor; as quatro da direita são retificadoras."},

S3:{t:"multi", instr:"Marque as contas em que o patrimônio líquido se divide pelo art. 178, § 2º, III",
  options:["Capital Social","Reservas de Capital","Ajustes de Avaliação Patrimonial",
           "Reservas de Lucros","Ações em Tesouraria","Prejuízos Acumulados",
           "Provisão para Contingências","Debêntures a Pagar"],
  answers:[0,1,2,3,4,5],
  why:"São seis contas. Provisão e debêntures são do passivo."},

S4:{t:"mc", instr:"Alfa foi constituída com capital subscrito de R$ 100.000, em quotas iguais entre X e Y. X integralizou em dinheiro; Y entrou com um veículo de R$ 30.000 e deixou o restante para 90 dias. Qual o patrimônio líquido na constituição?",
  options:["R$ 80.000","R$ 100.000","R$ 50.000","R$ 30.000"],
  answer:0,
  why:"100.000 subscrito − 20.000 a integralizar = 80.000. Gabarito B do resumo."},

S5:{t:"gap", instr:"Complete o conceito",
  before:"O limite de capital dentro do qual a assembleia geral ou o conselho de administração pode autorizar aumento de capital sem reforma estatutária é o capital social ",
  after:".",
  options:["autorizado","integralizado","subscrito"], answer:0,
  why:"O capital autorizado dispensa a reforma estatutária."},

S6:{t:"mc", instr:"Qual valor deve compor o saldo da conta de Capital Social no patrimônio líquido?",
  options:["O capital realizado","O capital subscrito","O capital autorizado","O capital a integralizar"],
  answer:0,
  why:"É o quadro ATENÇÃO do resumo."},

S7:{t:"multi", instr:"Marque o que se classifica como RESERVA DE CAPITAL",
  options:["Ágio na emissão de ações","Alienação de Partes Beneficiárias",
           "Alienação de Bônus de Subscrição","Reserva Legal",
           "Reserva para Contingências","Reserva de Lucros a Realizar"],
  answers:[0,1,2],
  why:"Só essas três. As demais são reservas de lucros."},

S8:{t:"mc", instr:"Sobre as partes beneficiárias, qual a afirmação correta?",
  options:["Podem ser criadas a qualquer tempo pelas S.A. de capital fechado, com participação de no máximo 10% do lucro",
           "Podem ser criadas a qualquer tempo pelas S.A. de capital aberto, com participação de no máximo 10% do lucro",
           "Dão direito de preferência na subscrição de aumento de capital autorizado",
           "Asseguram participação de no máximo 20% do lucro da empresa"],
  answer:0,
  why:"Capital fechado e 10% do lucro. O direito de preferência é do bônus de subscrição."},

S9:{t:"multi", instr:"Marque as hipóteses em que as reservas de capital podem ser utilizadas (art. 200)",
  options:["Absorção de prejuízos que ultrapassarem os lucros acumulados e as reservas de lucros",
           "Resgate, reembolso ou compra de ações","Resgate de partes beneficiárias",
           "Incorporação ao capital social",
           "Pagamento de dividendo a ações preferenciais, quando essa vantagem lhes for assegurada",
           "Pagamento de dividendo a ações ordinárias","Distribuição de participação a empregados"],
  answers:[0,1,2,3,4],
  why:"São cinco hipóteses, e o dividendo é o das ações preferenciais."},

S10:{t:"mc", instr:"Onde se contabiliza o ágio na emissão de ações?",
  options:["Em conta de Reserva de Capital, no patrimônio líquido",
           "Em conta de receita, no resultado do exercício",
           "Em conta de Reserva de Lucros, no patrimônio líquido",
           "Em conta redutora do patrimônio líquido"],
  answer:0,
  why:"O CPC 08 chama o ágio de prêmio, e o prêmio de ações vai para reserva de capital."},

S11:{t:"mc", instr:"500.000 novas ações com valor nominal de R$ 1,00, custo de emissão de R$ 20.000, integralizadas por R$ 550.000. Qual o aumento do patrimônio líquido?",
  options:["R$ 530.000","R$ 550.000","R$ 500.000","R$ 480.000"],
  answer:0,
  why:"500.000 − 20.000 de gastos + 50.000 de ágio."},

S12:{t:"wordbank", instr:"Monte o lançamento correto do exemplo pelo item 06 do CPC 08",
  target:["D","Caixa","530.000","C","Ágio","na","Emissão","de","Ações","30.000","C","Capital","Social","500.000"],
  extra:["Gastos","20.000","50.000"],
  why:"O prêmio absorve os custos de transação: 50.000 − 20.000 = 30.000 de ágio."},

S13:{t:"sort", instr:"CPC 08 — item 05 ou item 13?",
  buckets:["Item 05 — ações (capital próprio)","Item 13 — debêntures (terceiros)"],
  items:[["Custos de transação em conta redutora do patrimônio líquido",0],
         ["Prêmios recebidos reconhecidos em reserva de capital",0],
         ["Títulos patrimoniais",0],
         ["Custos como redução do valor justo inicialmente reconhecido do instrumento",1],
         ["Prêmios recebidos contabilizados no passivo exigível",1],
         ["Títulos de dívida",1]],
  why:"Ações reduzem o PL; debêntures reduzem o passivo."},

S14:{t:"match", instr:"Ligue cada emissão de R$ 10.000 com custos de R$ 2.400 ao seu lançamento",
  pairs:[["Debêntures","D Caixa 7.600 · D Gastos com a emissão de Debêntures 2.400 · C Debêntures a Pagar 10.000"],
         ["Ações","D Caixa 7.600 · D Gastos com a emissão de Ações 2.400 · C Capital Social 10.000"]],
  why:"Nos dois casos o caixa entra por 7.600; muda onde o gasto retifica."},

S15:{t:"match", instr:"Correlacione cada reserva de lucros ao seu conteúdo",
  pairs:[["Reserva para Contingências","Compensar, em exercício futuro, a diminuição do lucro decorrente de perda julgada provável"],
         ["Reserva de Incentivos Fiscais","Parcela do lucro líquido decorrente de doações ou subvenções governamentais para investimentos"],
         ["Reserva Legal","Assegurar a integridade do capital social; 5% do LLE, até 20% do capital"],
         ["Reserva de Lucros a Realizar","Excesso do dividendo obrigatório sobre a parcela realizada do lucro líquido"]],
  why:"São as quatro que o resumo diz serem as mais cobradas."},

S16:{t:"sort", instr:"Reserva de capital ou reserva de lucros?",
  buckets:["Reserva de capital","Reserva de lucros"],
  items:[["Ágio na emissão de ações",0],["Alienação de Partes Beneficiárias",0],
         ["Alienação de Bônus de Subscrição",0],["Reserva Legal",1],
         ["Reserva Estatutária",1],["Reserva para Contingências",1],
         ["Reserva de Retenção de Lucros",1],["Reserva Especial para Dividendos Obrigatórios",1]],
  why:"Quadro comparativo do resumo: só três contas na coluna da esquerda."},

S17:{t:"gap", instr:"Complete a regra da reserva legal",
  before:"Antes de qualquer outra destinação, ",
  after:" do lucro líquido do exercício serão aplicados na constituição da reserva legal, que não excederá de 20% do capital social.",
  options:["5%","10%","20%","30%"], answer:0,
  why:"5% é o percentual; 20% do capital social é o limite obrigatório."},

S18:{t:"mc", instr:"Quando a companhia poderá deixar de constituir a reserva legal (art. 193, § 1º)?",
  options:["Quando a reserva legal somada às reservas de capital exceder 30% do capital social",
           "Quando a reserva legal sozinha exceder 30% do capital social",
           "Quando a reserva legal somada às reservas de lucros exceder 20% do capital social",
           "Quando houver prejuízo acumulado no exercício"],
  answer:0,
  why:"RL + RC > 30% do CS — é o limite facultativo."},

S19:{t:"mc", instr:"Lucro líquido de R$ 100.000, lucro líquido realizado de R$ 40.000 e dividendos obrigatórios de R$ 50.000. Qual a reserva de lucros a realizar?",
  options:["R$ 10.000","R$ 60.000","R$ 50.000","R$ 40.000"],
  answer:0,
  why:"Só o excesso do dividendo obrigatório sobre a parcela realizada: 50.000 − 40.000."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Contabilidade Geral 08","https://www.tecconcursos.com.br/s/Q2ZnAD","Q2ZnAD"],
  ["Caderno FCC — Contabilidade Geral 08","https://www.tecconcursos.com.br/s/Q2ZnAM","Q2ZnAM"],
  ["Caderno FGV — Contabilidade Geral 08","https://www.tecconcursos.com.br/s/Q294oQ","Q294oQ"],
  ["Caderno VUNESP — Contabilidade Geral 08","https://www.tecconcursos.com.br/s/Q2ZnAg","Q2ZnAg"]
];
var TECNOTA = "Módulo de listas fechadas e de dois cálculos curtos — e é exatamente aí que a banca ganha dinheiro. Primeira fronteira: subscrito × realizado. O saldo da conta Capital Social é o capital REALIZADO, e no exemplo da Alfa o PL na constituição é R$ 80.000 (100.000 − 20.000), nunca os 100.000 subscritos. Segunda: reserva de CAPITAL tem apenas três contas (ágio, alienação de partes beneficiárias, alienação de bônus de subscrição) — tudo o mais é reserva de LUCROS, e trocar reserva legal ou contingências de coluna é a pegadinha mais frequente. Terceira: os números da reserva legal, 5% do LLE e teto de 20% do capital social como limite obrigatório, contra RL + RC > 30% do CS como limite facultativo. Feche com o CPC 08: item 05 manda os custos das AÇÕES para conta redutora do PL e os prêmios para reserva de capital, enquanto o item 13 manda os custos das DEBÊNTURES para redução do valor justo do instrumento; e o item 06 faz o prêmio absorver os custos, o que transforma o ágio de R$ 50.000 em R$ 30.000 no exemplo das 500.000 ações.";

var UNITS = [
  {n:1, title:"Patrimônio líquido e capital social", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"As seis contas, a natureza e o capital subscrito", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · estrutura e natureza das contas", xp:25, data:["S1","S2","T0","T1","T2","T3","T4"]},
    {id:"K3", type:"drill",  title:"Praticar · subscrito, integralizado e autorizado", xp:25, data:["S3","S5","T5","T6","T7","T8","T9"]},
    {id:"K4", type:"drill",  title:"Praticar · o exemplo da Alfa",               xp:25, data:["S4","S6","T10","T11","T12","T13"]},
    {id:"K5", type:"flash",  title:"Flashcards · PL e capital social",           xp:15, data:[0,1,2,3,4,5,6,7]}
  ]},
  {n:2, title:"Reservas de capital, ágio e CPC 08", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Reservas de capital, gastos com emissão e o CPC 08", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · as três contas e seus títulos",    xp:25, data:["S7","S8","T14","T15","T16","T17","T18","T19","T20"]},
    {id:"K8", type:"drill",  title:"Praticar · art. 200 e gastos com emissão",    xp:25, data:["S9","S10","S14","T21","T22","T23","T24","T25"]},
    {id:"K9", type:"drill",  title:"Praticar · ágio, item 06 e itens 05 × 13",    xp:25, data:["S11","S12","S13","T26","T27","T28","T29","T30","T31","T32","T33"]},
    {id:"K10",type:"flash",  title:"Flashcards · reservas de capital e CPC 08",   xp:15, data:[8,9,10,11,12,13,14,15,16,17,18,19,20,21]}
  ]},
  {n:3, title:"Reservas de lucros, AAP e ações em tesouraria", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Reservas de lucros, valor justo e tesouraria", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · espécies e fato permutativo",       xp:25, data:["S15","S16","T34","T35","T36","T37","T38"]},
    {id:"K13",type:"drill",  title:"Praticar · contingências e reserva legal",     xp:25, data:["S17","S18","T39","T40","T41","T42","T43","T44","T45"]},
    {id:"K14",type:"drill",  title:"Praticar · lucros a realizar e tesouraria",    xp:25, data:["S19","T46","T47","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · reservas de lucros e tesouraria", xp:15, data:[22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                  xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                 xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 08 de Contabilidade (Radegondes) ---------- */
var COM={
0:"<p>Certo, é a abertura do resumo: <b>“no balanço patrimonial, a diferença entre o valor dos ativos e o dos passivos representa o Patrimônio Líquido, que é o valor contábil pertencente aos acionistas ou sócios”</b>.</p><p>Guarde os dois lados da frase: é <b>resíduo</b> (ativo − passivo) e é <b>valor contábil</b> dos sócios — não valor de mercado.</p><p class='fb-fonte'>Resumo 08 · <i>Patrimônio Líquido</i></p>",
1:"<p>Certo. É o esquema do resumo com as <b>6 contas</b> do PL, com base no <b>art. 178, § 2º, inciso III</b>, da Lei 6.404/76.</p><p>Na ordem do esquema: <b>Capital Social · Reservas de Capital · Ajustes de Avaliação Patrimonial · Reservas de Lucros · Ações em Tesouraria · Prejuízos Acumulados</b>. Repare que as duas últimas são as <b>negativas</b> do grupo.</p><p class='fb-fonte'>Resumo 08 · <i>Patrimônio Líquido</i></p>",
2:"<p>Errado por uma palavra. O resumo diz: <b>“em regra, as contas do Patrimônio Líquido possuem natureza CREDORA”</b>.</p><p>A ressalva vem em seguida — <b>existem algumas contas que possuem natureza devedora (retificadoras do PL)</b> —, mas a regra é a credora, não a devedora.</p><p class='fb-fonte'>Resumo 08 · <i>Patrimônio Líquido — natureza das contas</i></p>",
3:"<p>Certo. Ambas estão na coluna <b>NATUREZA DEVEDORA</b> do quadro do resumo, a que <b>“representam a parte negativa (−)”</b>.</p><p>A coluna devedora completa tem quatro contas: <b>Capital Social a Realizar</b>, <b>Gastos com a Emissão de Ações</b>, <b>Ações em Tesouraria</b> e <b>Prejuízos Acumulados</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Patrimônio Líquido — natureza das contas</i></p>",
4:"<p>Errado — trocou de coluna. No quadro do resumo, <b>Gastos com a Emissão de Ações</b> está na <b>NATUREZA DEVEDORA</b>, a que representa a <b>parte negativa (−)</b> do PL.</p><p>Coerente com o resto do material: mais adiante o resumo repete que é <b>“uma conta retificadora do PL que representa os custos necessários para a emissão de ações”</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Patrimônio Líquido — natureza das contas</i></p>",
5:"<p>Certo. É a primeira linha da coluna devedora do quadro: <b>Capital Social a Realizar (a integralizar)</b>, contra <b>Capital Social Integralizado</b> na coluna credora.</p><p>Faz sentido pela equação do art. 182: o capital a integralizar entra <b>deduzindo</b> o subscrito.</p><p class='fb-fonte'>Resumo 08 · <i>Patrimônio Líquido — natureza das contas</i></p>",
6:"<p>Certo, é a definição literal do resumo: o capital social subscrito <b>“compreende o montante que os sócios se comprometem a entregar para entidade”</b>.</p><p>E ele é dividido em <b>(1) Capital Integralizado</b> e <b>(2) Capital a Integralizar</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Capital Social Subscrito</i></p>",
7:"<p>Errado — as duas definições do esquema estão invertidas. No resumo, <b>Capital Integralizado</b> é <b>“a parcela do capital social efetivamente entregue pelos sócios”</b>.</p><p>A parcela <b>“ainda não entregue pelos sócios à entidade”</b> é o <b>Capital a Integralizar</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Capital Social Subscrito</i></p>",
8:"<p>Certo pela letra do art. 182, como o resumo transcreve: <b>“a conta do capital social discriminará o montante subscrito e, por dedução, a parcela ainda não realizada”</b>.</p><p>Na prática é a equação do material: <b>Capital Social Subscrito (−) Capital Social a Integralizar (=) Capital Social Integralizado</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Capital Social Subscrito — art. 182</i></p>",
9:"<p>Errado por uma palavra, e é o quadro <b>ATENÇÃO!</b> do resumo: <b>“em relação ao patrimônio líquido de uma entidade, o valor que deve compor o saldo da conta de Capital Social é o capital REALIZADO”</b>.</p><p>O subscrito aparece na conta, sim, mas com a parcela não realizada <b>deduzida</b> — o que sobra no saldo é o realizado.</p><p class='fb-fonte'>Resumo 08 · <i>Capital Social Subscrito — Atenção!</i></p>",
10:"<p>Certo. É a resposta do resumo à pergunta <b>“O QUE É CAPITAL SOCIAL AUTORIZADO?”</b>: <b>“é um limite de Capital dentro do qual a Assembleia Geral ou o Conselho de Administração pode autorizar um aumento de capital social de forma independente (sem precisar da reforma estatutária)”</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Capital Social Subscrito — capital autorizado</i></p>",
11:"<p>Errado — é exatamente o oposto. O resumo define o capital autorizado como o limite em que o aumento se dá <b>“de forma independente (SEM precisar da reforma estatutária)”</b>.</p><p>Guarde o par: <b>dentro</b> do capital autorizado, Assembleia Geral ou Conselho de Administração resolvem sozinhos; <b>acima</b> dele é que se discute estatuto.</p><p class='fb-fonte'>Resumo 08 · <i>Capital Social Subscrito — capital autorizado</i></p>",
12:"<p>Certo, é o <b>EXEMPLO</b> da empresa <b>Alfa</b> (constituída em 02/06/2023 pelos sócios Sr. X e Sr. Y), com o gabarito <b>B</b>.</p><p>A conta do resumo, linha a linha: <b>Capital Social Subscrito 100.000 (−) Capital Social a Integralizar 20.000 (=) Capital Social Integralizado 80.000</b>. O veículo de R$ 30.000 do Sr. Y já entrou; só os R$ 20.000 dos 90 dias ficaram de fora.</p><p class='fb-fonte'>Resumo 08 · <i>Capital Social Subscrito — exemplo</i></p>",
13:"<p>Errado — R$ 100.000 é a alternativa <b>a</b> do exemplo, feita para quem para no subscrito. O gabarito é <b>B: R$ 80.000</b>.</p><p>O resumo justifica pelo art. 182: a conta discrimina o subscrito <b>e, por dedução, a parcela ainda não realizada</b>. Enquanto os R$ 20.000 não entram, o PL é de <b>R$ 80.000</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Capital Social Subscrito — exemplo</i></p>",
14:"<p>Certo. É a linha do meio da solução do resumo: <b>“( – ) Capital Social a Integralizar ___ 20.000”</b>.</p><p>Conferindo pelos sócios: cada quota é de R$ 50.000; o Sr. Y integralizou R$ 30.000 em veículo e deixou <b>R$ 20.000</b> para 90 dias.</p><p class='fb-fonte'>Resumo 08 · <i>Capital Social Subscrito — exemplo</i></p>",
15:"<p>Errado no ponto central. O resumo define reservas de capital como <b>“receitas que NÃO transitam pelo resultado do exercício e que ficam no Patrimônio Líquido da entidade”</b>.</p><p>É o que separa reserva de capital de receita comum: ela entra direto no PL, sem passar pela DRE.</p><p class='fb-fonte'>Resumo 08 · <i>Reservas de Capital</i></p>",
16:"<p>Certo, e é a lista fechada do resumo: serão classificadas como reservas de capital as contas que registrarem <b>ágio na emissão de ações</b>, <b>alienação de Partes Beneficiárias</b> e <b>alienação de Bônus de Subscrição</b>.</p><p>O quadro comparativo do material repete essas três de um lado e as reservas de lucros do outro — decore pelas três, que são poucas.</p><p class='fb-fonte'>Resumo 08 · <i>Reservas de Capital</i></p>",
17:"<p>Errado — trocou a coluna do <b>QUADRO COMPARATIVO</b> do resumo. <b>Reserva Legal</b> e <b>Reserva para Contingências</b> estão na coluna <b>RESERVA DE LUCROS</b>.</p><p>Na coluna <b>RESERVA DE CAPITAL</b> só há três contas: <b>ágio na emissão de ações</b>, <b>alienação de partes beneficiárias</b> e <b>alienação de bônus de subscrição</b>. Se o nome tem “reserva de” seguido de uma finalidade, é reserva de lucros.</p><p class='fb-fonte'>Resumo 08 · <i>Quadro comparativo — Reserva de Capital × Reserva de Lucros</i></p>",
18:"<p>Certo, é a definição do resumo: <b>“bônus de subscrição são títulos emitidos pela empresa que dão direito de preferência na subscrição de aumento de capital social autorizado”</b>.</p><p>Repare o gancho com o tópico anterior: o direito de preferência opera dentro do <b>capital autorizado</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Reservas de Capital — bônus de subscrição</i></p>",
19:"<p>Errado por uma palavra. No resumo, partes beneficiárias são títulos criados a qualquer tempo pelas <b>“sociedades anônimas de capital FECHADO”</b>.</p><p>O resto da definição é o que a banca costuma deixar certo para disfarçar: finalidade de <b>captar recursos e beneficiar algumas partes</b>, com participação de <b>no máximo 10% do lucro</b> (acionistas, fundadores, empregados, clientes).</p><p class='fb-fonte'>Resumo 08 · <i>Reservas de Capital — partes beneficiárias</i></p>",
20:"<p>Errado no número. O resumo é expresso: participação de <b>no máximo 10% do lucro da empresa</b>.</p><p>Os 20% que a assertiva traz pertencem a outro tópico deste mesmo resumo — são o teto da <b>reserva legal</b> em relação ao capital social. Não misture os dois percentuais.</p><p class='fb-fonte'>Resumo 08 · <i>Reservas de Capital — partes beneficiárias</i></p>",
21:"<p>Certo. As duas hipóteses citadas estão no esquema do resumo, que remete à <b>Lei nº 6.404/76: Art. 200</b>.</p><p>A lista completa das utilizações: <b>absorção de prejuízos que ultrapassarem os lucros acumulados e as reservas de lucros</b> · <b>resgate, reembolso ou compra de ações</b> · <b>resgate de partes beneficiárias</b> · <b>incorporação ao capital social</b> · <b>pagamento de dividendo a ações preferenciais, quando essa vantagem lhes for assegurada</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Utilização das reservas de capital — art. 200</i></p>",
22:"<p>Errado na espécie de ação. O esquema do resumo fala em <b>“pagamento de dividendo a ações PREFERENCIAIS, quando essa vantagem lhes for assegurada”</b>.</p><p>É a troca de palavra mais barata deste tópico: preferenciais por ordinárias. As outras quatro hipóteses do art. 200 seguem valendo.</p><p class='fb-fonte'>Resumo 08 · <i>Utilização das reservas de capital — art. 200</i></p>",
23:"<p>Certo, é a definição do resumo: <b>“é uma conta retificadora do PL que representa os custos necessários para a emissão de ações. Posteriormente são compensadas como contrapartida de uma Reserva de Capital ou redução do Capital Social”</b>.</p><p>E o esquema ao lado fecha: os <b>custos de transação</b> são reconhecidos no BP <b>como redutor do PL</b>, na conta <b>Gastos com a emissão de Ações</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Gastos com Emissão de Ações</i></p>",
24:"<p>Certo, é o conceito do resumo: o ágio <b>“é a diferença positiva entre o valor recebido na venda de uma ação e o seu valor patrimonial, ou seja, é a contribuição do subscritor de ações que ultrapassar o valor nominal”</b>.</p><p>Guarde o apelido: <b>o CPC 08 chama o ágio de “prêmio”</b>. Quando a prova falar em prêmio na emissão de ações, está falando de ágio.</p><p class='fb-fonte'>Resumo 08 · <i>Ágio na Emissão de Ações</i></p>",
25:"<p>Errado — não passa pelo resultado. O bloco <b>EXPLICANDO MELHOR</b> do resumo é claro: quando a ação é vendida por valor superior ao nominal ou ao a ela atribuído, <b>“essa diferença é contabilizada na conta Reserva de Capital, dentro do patrimônio líquido, denominada ágio na emissão de ações”</b>.</p><p>Coerente com a definição de reservas de capital: são receitas que <b>não transitam pelo resultado do exercício</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Ágio na Emissão de Ações</i></p>",
26:"<p>Certo, é o <b>EXEMPLO</b> do resumo com estes mesmos números: <b>Capital Social 500.000 (−) Gasto com emissão de ações 20.000 (+) Ágio na emissão de ações 50.000 = 530.000</b>.</p><p>O material conclui: <b>“tivemos um aumento de R$ 530.000 no patrimônio líquido da sociedade empresária, provocado pela emissão de 500.000 novas ações”</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Ágio na Emissão de Ações — exemplo</i></p>",
27:"<p>Certo. As ações têm valor nominal de <b>R$ 1,00</b> — logo, capital social de <b>R$ 500.000</b> — e foram integralizadas por <b>R$ 550.000</b>. A diferença é o <b>ágio de R$ 50.000</b>, na linha <b>“( + ) Ágio na emissão de ações 50.000”</b> do exemplo.</p><p class='fb-fonte'>Resumo 08 · <i>Ágio na Emissão de Ações — exemplo</i></p>",
28:"<p>Errado. R$ 550.000 é o valor pelo qual as ações foram <b>integralizadas</b>, não o aumento do PL.</p><p>Faltou deduzir os <b>R$ 20.000</b> de gasto com a emissão, que é conta <b>retificadora do PL</b>. A conta do resumo fecha em <b>530.000</b>: 500.000 − 20.000 + 50.000.</p><p class='fb-fonte'>Resumo 08 · <i>Ágio na Emissão de Ações — exemplo</i></p>",
29:"<p>Certo. É a <b>OBS</b> do resumo: <b>“o CPC 08, item 06, dispõe que o prêmio (ágio) deve ser utilizado para absorver os custos de transação”</b>.</p><p>Por isso o material apresenta dois lançamentos para o mesmo exemplo e chama o segundo de <b>“o lançamento correto”</b>: D Caixa 530.000 · C Ágio na Emissão de Ações <b>30.000</b> · C Capital Social 500.000.</p><p class='fb-fonte'>Resumo 08 · <i>Ágio na Emissão de Ações — OBS do CPC 08, item 06</i></p>",
30:"<p>Certo, é o cálculo embutido no lançamento correto do resumo: o ágio de <b>50.000</b> absorve os <b>20.000</b> de custos de transação e sobra <b>R$ 30.000</b> em reserva de capital.</p><p>Compare os dois lançamentos do material: no primeiro aparecem <b>D Gastos com emissão 20.000</b> e <b>C Ágio 50.000</b>; no segundo, nenhuma conta de gastos e <b>C Ágio 30.000</b>. O aumento do PL é o mesmo, R$ 530.000.</p><p class='fb-fonte'>Resumo 08 · <i>Ágio na Emissão de Ações — OBS do CPC 08, item 06</i></p>",
31:"<p>Certo pela letra do <b>item 05</b>, na coluna <b>CAPTAÇÃO DE RECURSOS PARA O CAPITAL PRÓPRIO</b> do quadro do resumo: os custos <b>“devem ser contabilizados, de forma destacada, em conta redutora de patrimônio líquido, deduzidos os eventuais efeitos fiscais, e os prêmios recebidos devem ser reconhecidos em conta de reserva de capital”</b>.</p><p>O resumo traduz: o item 05 trata das <b>AÇÕES</b>, que são <b>títulos patrimoniais</b>.</p><p class='fb-fonte'>Resumo 08 · <i>CPC 08 — item 05</i></p>",
32:"<p>Errado — esse é o tratamento do <b>item 05</b> (ações). Para instrumento de dívida, o <b>item 13</b> manda contabilizar os custos <b>“como redução do valor justo inicialmente reconhecido do instrumento financeiro emitido, para evidenciação do valor líquido recebido”</b>.</p><p>A tradução do resumo: item 13 trata das <b>DEBÊNTURES</b> (recursos de terceiros), em <b>conta redutora do Passivo</b>; e os prêmios recebidos nessa emissão vão para o <b>Passivo Exigível</b>, não para reserva de capital.</p><p class='fb-fonte'>Resumo 08 · <i>CPC 08 — item 13</i></p>",
33:"<p>Errado no grupo retificado. No <b>Exemplo 01</b> do resumo, os R$ 2.400 de custos de transação das debêntures entram como <b>“D – Gastos com a emissão de DEBÊNTURES R$ 2.400 (↓ Retificadora do Passivo)”</b>.</p><p>Compare com o <b>Exemplo 02</b>, de mesmo valor: nas <b>ações</b>, o gasto de 2.400 é <b>“↓ Retificadora do PL”</b>. Em ambos o caixa entra por <b>R$ 7.600</b> — o que muda é onde o gasto deduz.</p><p class='fb-fonte'>Resumo 08 · <i>CPC 08 — exemplos 01 e 02</i></p>",
34:"<p>Certo, é a definição do resumo: reservas de lucros <b>“são contas constituídas com origem nos lucros da empresa para utilização posterior”</b>.</p><p>Daí o lançamento de constituição: <b>D – Lucros Acumulados (↓ PL) · C – Reserva de Lucros (↑ PL)</b> — a origem é sempre o lucro já apurado.</p><p class='fb-fonte'>Resumo 08 · <i>Reservas de Lucros</i></p>",
35:"<p>Certo. É o lançamento de constituição do resumo: <b>D – Lucros Acumulados (↓ Patrimônio Líquido)</b> · <b>C – Reserva de Lucros (↑ Patrimônio Líquido)</b>.</p><p>A reversão do saldo não utilizado é o inverso: <b>D – Reserva de Lucros · C – Lucros Acumulados</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Reservas de Lucros — lançamentos</i></p>",
36:"<p>Errado na classificação do fato, e o resumo avisa em quadro <b>ATENÇÃO</b>: <b>“note que a constituição e a reversão de uma Reserva de Lucros é um fato PERMUTATIVO (entre contas do próprio PL)”</b>.</p><p>Olhe o lançamento: debita Lucros Acumulados e credita a reserva — as duas dentro do PL. O total do patrimônio líquido <b>não muda</b>, então não há fato modificativo.</p><p class='fb-fonte'>Resumo 08 · <i>Reservas de Lucros — Atenção!</i></p>",
37:"<p>Errado — as duas estão na coluna <b>RESERVA DE LUCROS</b> do quadro comparativo do resumo.</p><p>O esquema lista oito espécies de reserva de lucros: <b>Legal · Estatutária · para Contingências · de Incentivos Fiscais · de Retenção de Lucros · de Lucros a Realizar · Especial para Dividendos Obrigatórios · de Lucros Específica</b>. Reserva de capital são só três, e nenhuma delas tem esse nome.</p><p class='fb-fonte'>Resumo 08 · <i>Reservas de Lucros — espécies</i></p>",
38:"<p>Certo, é a transcrição do <b>art. 195</b> no resumo, com as duas condições que a banca gosta de mexer: perda julgada <b>PROVÁVEL</b> e de <b>valor que possa ser estimado</b>.</p><p>O resumo resume assim: é a reserva constituída no PL <b>“com o objetivo de segregar uma parcela de lucros, correspondente a prováveis perdas extraordinárias futuras, que deverão diminuir o resultado em exercícios futuros”</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Reservas para Contingências</i></p>",
39:"<p>Errado — é o quadro <b>NÃO CONFUNDA!</b> do resumo, que separa três coisas: <b>RESERVA para Contingências</b> é <b>conta do Patrimônio Líquido</b>; <b>PROVISÃO para Contingências</b> é <b>conta do Passivo Exigível</b>; e <b>PASSIVO CONTINGENTE</b> <b>“não é reconhecido em nenhuma classe”</b>.</p><p>O nome quase igual é justamente a armadilha: reserva no PL, provisão no passivo.</p><p class='fb-fonte'>Resumo 08 · <i>Reservas para Contingências — Não confunda!</i></p>",
40:"<p>Certo pela terceira coluna do quadro <b>NÃO CONFUNDA!</b>: o passivo contingente <b>“não é reconhecido em nenhuma classe”</b>.</p><p>Complete o trio para a prova: <b>reserva</b> para contingências no <b>PL</b>, <b>provisão</b> para contingências no <b>passivo exigível</b>, <b>passivo contingente</b> em <b>nenhuma classe</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Reservas para Contingências — Não confunda!</i></p>",
41:"<p>Certo. É o esquema <b>OBJETIVO DA RESERVA PARA CONTINGÊNCIAS</b> do resumo: <b>“equalizar a distribuição de dividendos quando se prevê prejuízo ou diminuição no lucro líquido, decorrentes de fatos extraordinários futuros”</b>.</p><p>Ou seja: retém lucro hoje para não faltar amanhã — é a lógica da compensação em exercício futuro do art. 195.</p><p class='fb-fonte'>Resumo 08 · <i>Reservas para Contingências — objetivo</i></p>",
42:"<p>Certo pela letra do <b>art. 195-A</b>, como o resumo transcreve: a assembleia geral poderá, por proposta dos órgãos de administração, destinar a essa reserva <b>“a parcela do lucro líquido decorrente de doações ou subvenções governamentais para investimentos, que poderá ser excluída da base de cálculo do dividendo obrigatório”</b>.</p><p>Duas marcas para reconhecer a questão: origem em <b>doações ou subvenções governamentais para investimentos</b> e a possibilidade de <b>excluir da base do dividendo obrigatório</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Reserva de Incentivos Fiscais</i></p>",
43:"<p>Errado por ter cortado uma das duas finalidades. O resumo diz que a reserva legal <b>“somente poderá ser utilizada para compensar prejuízos OU aumentar o capital”</b>.</p><p>O quadro comparativo do material repete: <b>Reserva Legal</b> → compensar prejuízo · <b>aumentar o capital social</b>; <b>Reserva de Lucros a Realizar</b> → compensar prejuízo · pagar dividendos.</p><p class='fb-fonte'>Resumo 08 · <i>Reserva Legal</i></p>",
44:"<p>Errado no percentual. O resumo é expresso: <b>“antes de qualquer outra destinação, 5% do lucro líquido do exercício (LLE) serão aplicados na constituição da reserva legal, que não excederá de 20% do capital social”</b>.</p><p>Os 20% da assertiva estão certos — é o <b>limite obrigatório</b>. Errou só o 10%, que deveria ser <b>5%</b>. A banca troca um número e mantém o outro.</p><p class='fb-fonte'>Resumo 08 · <i>Reserva Legal</i></p>",
45:"<p>Certo, é o quadro <b>ATENÇÃO</b> do resumo sobre o <b>art. 193, § 1º</b>: a companhia <b>poderá (facultativo)</b> deixar de constituir a reserva legal no exercício em que o saldo dela, <b>acrescido do montante das reservas de capital</b>, exceder <b>30% do capital social</b>.</p><p>A tradução do material: <b>RL + RC > 30% do CS</b> — é o <b>limite facultativo</b>, que não se confunde com o <b>limite obrigatório</b> de 20% do capital social.</p><p class='fb-fonte'>Resumo 08 · <i>Reserva Legal — Atenção! (limite facultativo)</i></p>",
46:"<p>Certo pela letra do <b>art. 197</b> no resumo. E o material explica a razão: <b>“a ideia é evitar que a companhia pague dividendos sobre lucros que ainda não entraram no caixa”</b>.</p><p>Quando o lucro se realiza, a empresa <b>reverte</b> a RLR (D – Reserva de Lucros a Realizar · C – Lucros Acumulados) e paga os dividendos no período seguinte.</p><p class='fb-fonte'>Resumo 08 · <i>Reserva de Lucros a Realizar</i></p>",
47:"<p>Errado no valor. É o exemplo do resumo, e a RLR é apenas o <b>excesso</b>: <b>“montante do dividendo obrigatório que ultrapassou a parcela realizada do lucro líquido”</b>.</p><p>Com os números do material — <b>LL 100.000</b>, <b>LL realizado 40.000</b>, <b>dividendos obrigatórios 50.000</b> —, a reserva de lucros a realizar é de <b>R$ 10.000</b> (50.000 − 40.000). Os R$ 60.000 seriam a parte não realizada do lucro, que não é a base da reserva.</p><p class='fb-fonte'>Resumo 08 · <i>Reserva de Lucros a Realizar — exemplo</i></p>",
48:"<p>Certo. São as duas hipóteses do esquema <b>SÃO CONSIDERADOS LUCROS NÃO REALIZADOS (LNR)</b>, que o resumo vincula ao <b>art. 197, § 1º</b>: <b>resultado positivo com equivalência patrimonial</b> e <b>lucro, rendimento ou ganhos líquidos cuja realização financeira se dê no longo prazo</b> (ex.: vendas de longo prazo).</p><p>São exatamente as duas subtrações da fórmula do material: <b>(+) LLE (−) resultado positivo de equivalência patrimonial (−) lucro com realização financeira de longo prazo = lucro realizado financeiramente</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Reserva de Lucros a Realizar — lucros não realizados</i></p>",
49:"<p>Certo pela letra do <b>art. 182, § 3º</b>, transcrita no resumo. O esquema condensa: são <b>“as contrapartidas de aumentos ou diminuições de valor atribuídos a elementos do ativo e do passivo, em decorrência da sua avaliação a valor justo”</b>.</p><p>Duas marcas da conta: ela é transitória — vale <b>enquanto não computadas no resultado</b> pelo regime de competência — e no PL aparece como conta de sinal <b>(+ ou −)</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Ajustes de Avaliação Patrimonial</i></p>",
50:"<p>Errado — o resumo diz o contrário: <b>“na operação de aquisição de ações em tesouraria a empresa NÃO pode adquirir ações não integralizadas”</b> (art. 182, § 5º).</p><p>Reforce o resto do conceito: é <b>conta retificadora do PL</b> das ações adquiridas pela própria empresa, que devem ser <b>destacadas no balanço como dedução da conta do patrimônio líquido que registrar a origem dos recursos aplicados na sua aquisição</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Ações em Tesouraria</i></p>",
51:"<p>Errado — os custos não vão para despesa. O resumo invoca o <b>CPC 08 (R1), item 09</b>: os custos de transação na aquisição de ações de emissão da própria entidade <b>“devem ser tratados como acréscimo do custo de aquisição de tais ações”</b>.</p><p>Com os números do <b>EXEMPLO</b> do material: 100.000 + 15.000 → <b>D – Ações em tesouraria R$ 115.000</b> · <b>C – Caixa R$ 115.000</b>. Um único lançamento, sem despesa nenhuma.</p><p class='fb-fonte'>Resumo 08 · <i>Ações em Tesouraria — exemplo</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"08", nome:"Patrimônio líquido, reservas de capital e de lucros", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
