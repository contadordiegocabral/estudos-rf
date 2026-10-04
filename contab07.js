/* Contabilidade Geral — Módulo 07: Passivo exigível, duplicatas descontadas, empréstimos e debêntures (modo direto) */
window.MOD = window.MOD || {};
window.MOD.contab07 = (function(){
"use strict";

var CARDS = [
  ["Como o art. 180 da Lei 6.404/76 divide as obrigações da companhia?","No <b>passivo circulante</b> quando se vencerem <b>no exercício seguinte</b>; no <b>passivo não circulante</b> se tiverem vencimento em <b>prazo maior</b> — observado o <b>ciclo operacional</b> da entidade."],
  ["As mesmas contas podem figurar no PC e no PNC?","<b>Sim.</b> O quadro-resumo repete as mesmas contas nas duas colunas. O que decide é o <b>vencimento</b>: no exercício seguinte (<b>PC</b>) ou <b>após</b> o exercício seguinte (<b>PNC</b>)."],
  ["Cite contas do quadro-resumo do passivo exigível","<b>Fornecedores</b> · <b>duplicatas a pagar</b> · <b>notas promissórias a pagar</b> · <b>contas a pagar</b> · <b>dividendos a pagar</b> · <b>empréstimos</b> · <b>financiamentos</b> · <b>tributos/impostos a recolher</b> · <b>provisões</b> · <b>duplicatas descontadas</b> · <b>adiantamento de clientes</b> · <b>receitas diferidas</b> · <b>debêntures</b>."],
  ["Quais as duas contas do quadro que aparecem com sinal negativo?","<b>(–) Juros a Apropriar</b> e <b>(–) Encargos Financeiros a Transcorrer</b> — são <b>retificadoras</b> do passivo exigível."],
  ["Por que as duplicatas descontadas ficam no passivo exigível?","Porque são uma <b>espécie de empréstimo bancário</b>."],
  ["O que é uma duplicata?","Documento emitido <b>junto da nota fiscal</b> por quem vende mercadoria ou presta serviço. Funciona como <b>título de crédito</b>: representa o compromisso do comprador de pagar no futuro, e fica em <b>Duplicatas a Receber (Ativo)</b>."],
  ["Para que a empresa usa as duplicatas descontadas?","Como <b>garantia</b> para obter <b>empréstimo bancário</b> — ela não quer aguardar o momento futuro do recebimento e trata a operação como <b>simples adiantamento do dinheiro futuro</b>."],
  ["No exemplo do resumo, quanto o banco entrega pela duplicata de R$ 100.000?","<b>R$ 95.000</b> — o banco empresta <b>mediante um desconto</b>, ajustado a <b>valor presente</b>. Daí o nome <b>duplicatas descontadas</b>."],
  ["Depois do desconto, quem passa a ser devedor do banco?","O <b>comprador (cliente)</b> das mercadorias da empresa “X”."],
  ["Onde vão os custos de transação da operação de desconto?","Em conta <b>retificadora de passivo</b> chamada <b>Juros a Apropriar</b> (ou <b>Encargos Financeiros a Transcorrer</b>), apropriados como despesa pelo <b>regime de competência</b>."],
  ["Lançamento 1 da operação: a venda da mercadoria","<b>D</b> Duplicatas a Receber (Clientes) R$ 100.000 (Ativo) · <b>C</b> Receita de Vendas R$ 100.000 (Resultado)."],
  ["Lançamento do desconto de duplicatas de R$ 100.000 com juros de R$ 12.000","<b>D</b> Disponibilidades R$ 88.000 (AC) · <b>D</b> Juros a Apropriar R$ 12.000 (retificadora do passivo) · <b>C</b> Duplicatas Descontadas R$ 100.000 (Passivo Exigível)."],
  ["Lançamento da apropriação mensal dos juros do desconto","<b>D</b> Despesa de Juros R$ 1.000 (Resultado) · <b>C</b> Juros a Apropriar R$ 1.000 (retificadora do Passivo Exigível)."],
  ["Duplicatas a Receber é baixada no momento do desconto?","<b>Não.</b> Ela só será baixada <b>após o pagamento pelo cliente</b>. Se o título não for quitado até o vencimento, o <b>banco cobrará da entidade</b>.<br><b>Cliente pagou ao banco:</b> D Duplicatas Descontadas · C Duplicatas a Receber.<br><b>Cliente NÃO pagou:</b> D Duplicatas Descontadas · C Disponibilidades."],

  ["Empréstimo × financiamento","<b>Empréstimo:</b> captação de recursos <b>sem destinação específica</b>. <b>Financiamento:</b> captação <b>com destinação específica</b> (ex.: financiamento de um imóvel)."],
  ["O que dizem os itens 11 e 12 do CPC 08 sobre empréstimos?","O valor captado de empréstimos deve ser <b>líquido de custos de transação</b>, e os custos incorridos (<b>juros</b>) devem ser <b>apropriados ao longo do contrato</b>."],
  ["Lançamento do empréstimo de R$ 100.000 com juros de R$ 12.000","<b>D</b> Bancos R$ 100.000 (Ativo) · <b>D</b> Juros a Apropriar R$ 12.000 (retificadora do passivo) · <b>C</b> Empréstimos a Pagar R$ 112.000 (Passivo Exigível)."],
  ["Lançamento da apropriação mensal dos juros do empréstimo","<b>D</b> Juros Passivos R$ 1.000 (Despesa) · <b>C</b> Juros a Apropriar R$ 1.000 (retificadora do Passivo Exigível)."],
  ["Lançamento do pagamento do empréstimo","<b>D</b> Empréstimos a Pagar R$ 112.000 · <b>C</b> Bancos R$ 112.000 — pelo <b>valor total</b>, e não pelos R$ 100.000 captados."],
  ["CPC 26, item 74 — quebra de covenant","Quebrado o acordo contratual (<b>covenant</b>) de empréstimo de <b>longo prazo</b>, o passivo deve ser classificado como <b>CIRCULANTE</b>, mesmo que o credor tenha concordado, <b>após</b> a data do balanço, em não exigir o pagamento antecipado."],
  ["Por que a quebra do covenant joga o passivo para o circulante?","Porque, <b>à data do balanço</b>, a entidade <b>não tem o direito incondicional de diferir</b> a sua liquidação durante pelo menos <b>doze meses</b> após essa data."],
  ["CPC 26, item 75 — quando o passivo fica no não circulante?","Se o credor tiver concordado, <b>ATÉ</b> a data do balanço, em proporcionar uma <b>dilação de prazo</b>, a terminar pelo menos <b>doze meses após</b> a data do balanço."],
  ["O que é ativo qualificável? (CPC 20, item 05)","Ativo que, <b>necessariamente, demanda um período de tempo substancial</b> para ficar pronto para seu <b>uso ou venda pretendidos</b>."],
  ["Quais ativos podem ser qualificáveis? (CPC 20, item 7)","<b>Estoques</b> · <b>plantas industriais para manufatura</b> · <b>usinas de geração de energia</b> · <b>ativos intangíveis</b> · <b>propriedades para investimentos</b> · <b>plantas portadoras</b>."],
  ["O que NÃO são ativos qualificáveis?","<b>Ativos financeiros</b> · <b>estoques que são manufaturados</b> · <b>ativos que estão prontos para seu uso (ou venda)</b>."],
  ["CPC 20, item 8 — a regra dos custos de empréstimos","A entidade deve <b>CAPITALIZAR</b> os custos de empréstimos <b>diretamente atribuíveis</b> à aquisição, construção ou produção de ativo qualificável, <b>como parte do custo do ativo</b>; os <b>outros</b> custos de empréstimos são <b>despesa no período em que são incorridos</b>."],
  ["Exemplo do CPC 20: empréstimo de R$ 50.000 em 02/01/2021, juros de R$ 200/mês, construção de 03/01/2021 a 31/12/2021, uso a partir de 01/03/2022","<b>De 03/01/2021 a 31/12/2021</b> (período de construção): juros de <b>R$ 2.400</b> <b>ativados</b> no Imobilizado. <b>A partir de 01/01/2022</b>: o restante, <b>R$ 2.400</b>, vira <b>despesa financeira</b>."],

  ["O que são debêntures?","<b>Títulos de crédito emitidos por Sociedades Anônimas</b> para captação de recursos de <b>terceiros</b>. A Cia. emite, o terceiro compra, e fica assegurado o direito <b>contra a emissora</b> de receber o dinheiro de volta <b>com juros</b> ao final do prazo."],
  ["Debênture pode virar ação?","<b>Sim</b> — existe a possibilidade de <b>conversão das debêntures em ações</b> da entidade."],
  ["Onde as debêntures são registradas?","São <b>títulos negociáveis</b> registrados no <b>passivo circulante</b> <b>ou</b> no <b>não circulante</b>."],
  ["Lançamento da emissão de debêntures de R$ 10.000 com prêmio de R$ 1.200","<b>D</b> Caixa (ou Bancos) R$ 11.200 (↑ Ativo) · <b>C</b> Debêntures a Pagar R$ 10.000 (↑ Passivo Exigível) · <b>C</b> Prêmio de Debêntures a Apropriar R$ 1.200 (↑ Passivo Exigível)."],
  ["O que é prêmio na emissão de debêntures?","Valores recebidos na emissão <b>ACIMA do valor nominal</b> determinado para a liquidação — ou seja, um <b>excedente de capital</b>."],
  ["Quando o prêmio de debêntures vai para o resultado?","<b>Não de imediato.</b> Vai <b>mensalmente</b>, pelo <b>Regime de Competência</b>, com baixas parciais na conta do Passivo Exigível até a completa baixa: <b>D</b> Prêmio de Debêntures a Apropriar R$ 100 · <b>C</b> Prêmio de Debêntures R$ 100 (↑ Resultado)."],
  ["ATENÇÃO — como a FGV vê o lançamento do prêmio","Em regra o crédito em conta de resultado ocorre nas <b>receitas</b>. Mas a <b>FGV</b> entende que o prêmio é apropriado ao resultado como <b>redutor das despesas financeiras</b> — deve-se <b>creditar as despesas</b>. O resumo anota que <b>CESPE e FCC</b> ainda não cobraram esse lançamento."],
  ["CPC 08, item 05 — capital próprio","Custos de transação na captação por <b>emissão de títulos patrimoniais</b> (AÇÕES): contabilizados <b>de forma destacada, em conta redutora do patrimônio líquido</b>, <b>deduzidos os eventuais efeitos fiscais</b>; e os <b>prêmios recebidos</b> vão para <b>reserva de capital</b>."],
  ["CPC 08, item 13 — recursos de terceiros","Custos de transação na captação por <b>instrumento de dívida</b> (empréstimos, financiamentos, debêntures, notas comerciais ou outros valores mobiliários): contabilizados como <b>redução do valor justo inicialmente reconhecido</b> do instrumento, para <b>evidenciação do valor líquido recebido</b> — conta <b>redutora do Passivo</b>."],
  ["Emissão de R$ 10.000 com custos de transação de R$ 2.400 — debêntures e ações","<b>DEBÊNTURES:</b> D Caixa 7.600 · D Gastos com a Emissão de Debêntures 2.400 (retificadora do <b>Passivo</b>) · C Debêntures a Pagar <b>10.000</b>.<br><b>AÇÕES:</b> D Caixa 7.600 · D Gastos com a Emissão de Ações 2.400 (retificadora do <b>PL</b>) · C Capital Social <b>10.000</b>."],
  ["Emite ou investe em debêntures?","<b>Empresa EMITE debêntures → registra no PASSIVO.</b> <b>Empresa INVESTE em debêntures → registra no ATIVO</b> (investimento que rende juros em títulos de outra empresa)."],
  ["CPC 26, item 56 — impostos diferidos","Quando a entidade apresenta separadamente circulante e não circulante, os impostos diferidos ativos (passivos) <b>NÃO</b> devem ser classificados como circulantes: vão ao <b>ANC</b> (se direito) ou ao <b>PNC</b> (se obrigação), <b>independentemente do prazo</b>."]
];

var QS = [
  ["As obrigações da companhia serão classificadas no passivo circulante quando se vencerem no exercício seguinte, e no passivo não circulante se tiverem vencimento em prazo maior, observado o ciclo operacional da entidade.","C","Lei 6.404, art. 180","Literalidade do art. 180."],
  ["Conforme o art. 180 da Lei 6.404/76, as obrigações que se vencerem no exercício seguinte são classificadas no passivo não circulante.","E","CEBRASPE","Essas são as do <b>passivo circulante</b>."],
  ["Contas como fornecedores, empréstimos e debêntures somente podem figurar no passivo não circulante.","E","FCC","O quadro-resumo repete as mesmas contas nas duas colunas — o que decide é o <b>vencimento</b>."],
  ["Juros a Apropriar e Encargos Financeiros a Transcorrer figuram no quadro do passivo exigível com sinal negativo, por serem contas retificadoras.","C","FGV","São as duas retificadoras do grupo."],
  ["Adiantamento de clientes e receitas diferidas são contas do ativo, pois representam valores já recebidos pela entidade.","E","VUNESP","O quadro-resumo as lista no <b>passivo exigível</b>."],
  ["As duplicatas descontadas são classificadas no ativo circulante, pois representam o direito de receber do cliente.","E","CEBRASPE","São <b>passivo exigível</b> — espécie de empréstimo bancário."],
  ["As duplicatas descontadas são uma espécie de empréstimo bancário.","C","FCC","Por isso vão ao passivo exigível."],
  ["A duplicata é documento emitido junto da nota fiscal por quem vende mercadoria ou presta serviço e funciona como título de crédito.","C","FGV","Conceito do resumo."],
  ["O direito de receber representado pela duplicata é registrado no balanço patrimonial na conta Duplicatas a Receber, no ativo.","C","VUNESP","É o direito a dinheiro futuro."],
  ["No desconto de duplicatas, a empresa entrega a duplicata ao banco como forma de garantia de pagamento do empréstimo.","C","CEBRASPE","A operação é tratada como adiantamento do dinheiro futuro."],
  ["No exemplo do resumo, o banco empresta os R$ 100.000 integralmente, sem desconto, porque a duplicata é a garantia da operação.","E","FCC","O banco empresta <b>R$ 95.000</b>, mediante desconto ajustado a valor presente."],
  ["Após a operação de desconto, o comprador das mercadorias passa a ser devedor do banco.","C","FGV","É o efeito descrito no resumo."],
  ["Os custos de transação diretamente associados à operação de desconto são reconhecidos integralmente como despesa no momento do desconto.","E","VUNESP","Vão para <b>Juros a Apropriar</b>, retificadora do passivo, e se apropriam por competência."],
  ["Na operação de desconto de duplicatas de R$ 100.000 com juros de R$ 12.000, lança-se a débito de disponibilidades R$ 88.000, a débito de juros a apropriar R$ 12.000 e a crédito de duplicatas descontadas R$ 100.000.","C","CEBRASPE","Lançamento 2 do resumo."],
  ["No momento da operação de desconto, a empresa efetua a baixa da conta duplicatas a receber.","E","FCC","A baixa só ocorre <b>após o pagamento pelo cliente</b>."],
  ["Se o cliente paga a duplicata ao banco, a empresa lança a débito de duplicatas descontadas e a crédito de duplicatas a receber.","C","FGV","É uma das duas saídas possíveis."],
  ["Se o cliente não paga a duplicata, a empresa nada registra, pois a cobrança é do banco contra o cliente.","E","VUNESP","O banco cobrará da <b>entidade</b>: D Duplicatas Descontadas · C Disponibilidades."],
  ["A apropriação mensal das despesas com juros do desconto é registrada a débito de despesa de juros e a crédito de juros a apropriar, no valor de R$ 1.000.","C","CEBRASPE","Lançamento 3 do resumo."],

  ["O empréstimo é caracterizado pela captação de recursos com destinação específica.","E","FCC","Empréstimo é <b>sem</b> destinação específica; com destinação é <b>financiamento</b>."],
  ["O financiamento é caracterizado pela captação de recursos com destinação específica, como o financiamento de um imóvel.","C","FGV","É o exemplo do resumo."],
  ["Conforme os itens 11 e 12 do CPC 08, o valor captado de empréstimos deve ser líquido de custos de transação.","C","CPC 08, itens 11 e 12","Regra citada no resumo."],
  ["Os custos incorridos com juros do empréstimo devem ser reconhecidos integralmente no resultado do período da captação.","E","VUNESP","Devem ser <b>apropriados ao longo do contrato</b>."],
  ["No empréstimo de R$ 100.000 com juros de R$ 12.000, lança-se a débito de bancos R$ 100.000, a débito de juros a apropriar R$ 12.000 e a crédito de empréstimos a pagar R$ 112.000.","C","CEBRASPE","Lançamento 1 do resumo."],
  ["A apropriação mensal das despesas com juros do empréstimo é registrada a débito de juros passivos R$ 1.000 e a crédito de juros a apropriar R$ 1.000.","C","FCC","Lançamento 2 do resumo."],
  ["No pagamento do empréstimo do exemplo, lança-se a débito de empréstimos a pagar R$ 100.000 e a crédito de bancos R$ 100.000.","E","FGV","O pagamento é pelo total: <b>R$ 112.000</b>."],
  ["Quebrado o acordo contratual de um empréstimo de longo prazo, o passivo deve ser classificado como circulante, mesmo que o credor tenha concordado, após a data do balanço, em não exigir o pagamento antecipado.","C","CPC 26, item 74","Literalidade do item 74."],
  ["Na quebra de covenant, se o credor concordar, após a data do balanço, em não exigir o pagamento antecipado, o passivo permanece classificado no não circulante.","E","VUNESP","Vai para o <b>circulante</b> — o acordo posterior ao balanço não altera a classificação."],
  ["A quebra do covenant leva o passivo ao circulante porque, à data do balanço, a entidade tem o direito incondicional de diferir a liquidação por pelo menos doze meses.","E","CEBRASPE","É o oposto: ela <b>não tem</b> esse direito incondicional."],
  ["O passivo deve ser classificado como não circulante se o credor tiver concordado, até a data do balanço, em proporcionar dilação de prazo a terminar pelo menos doze meses após a data do balanço.","C","CPC 26, item 75","Literalidade do item 75."],
  ["Ativo qualificável é o ativo que, necessariamente, demanda um período de tempo substancial para ficar pronto para seu uso ou venda pretendidos.","C","CPC 20, item 05","Definição do item 05."],
  ["Ativos financeiros e ativos que já estão prontos para seu uso ou venda podem ser considerados ativos qualificáveis.","E","FCC","O resumo os lista justamente entre os que <b>NÃO</b> são qualificáveis."],
  ["Estoques, plantas industriais para manufatura, usinas de geração de energia, ativos intangíveis, propriedades para investimentos e plantas portadoras podem ser considerados ativos qualificáveis.","C","CPC 20, item 7","Lista do item 7."],
  ["A entidade deve capitalizar os custos de empréstimos diretamente atribuíveis à aquisição, construção ou produção de ativo qualificável como parte do custo do ativo, reconhecendo os outros custos de empréstimos como despesa no período em que são incorridos.","C","CPC 20, item 8","Literalidade do item 8."],
  ["No exemplo do resumo, com empréstimo de R$ 50.000 obtido em 02/01/2021 e juros mensais de R$ 200, os juros do período de construção do ativo, de 03/01/2021 a 31/12/2021, no total de R$ 2.400, serão contabilizados no ativo imobilizado.","C","FGV","Custos ativados no período de construção."],
  ["No mesmo exemplo, os juros a partir de 01/01/2022, no valor de R$ 2.400, também devem ser capitalizados, pois o ativo só passou a ser utilizado em 01/03/2022.","E","VUNESP","A partir de 01/01/2022 o restante dos juros é <b>despesa financeira</b>."],

  ["Debêntures são títulos de crédito emitidos por sociedades anônimas para captação de recursos de terceiros.","C","CEBRASPE","Conceito do resumo."],
  ["As debêntures não admitem conversão em ações da entidade emissora.","E","FCC","O resumo registra <b>a possibilidade de conversão</b> em ações."],
  ["As debêntures são títulos negociáveis registrados exclusivamente no passivo não circulante.","E","FGV","Passivo <b>circulante ou</b> não circulante."],
  ["Emitidas debêntures no valor de R$ 10.000 com prêmio na emissão de R$ 1.200, lança-se a débito de caixa R$ 11.200, a crédito de debêntures a pagar R$ 10.000 e a crédito de prêmio de debêntures a apropriar R$ 1.200.","C","VUNESP","Exemplo 01 do resumo."],
  ["O prêmio na emissão de debêntures corresponde a valores recebidos abaixo do valor nominal determinado para a liquidação.","E","CEBRASPE","É o valor recebido <b>ACIMA</b> do valor nominal — um excedente de capital."],
  ["O prêmio na emissão de debêntures é reconhecido integralmente no resultado da entidade no momento da emissão.","E","FCC","É reconhecido <b>mensalmente</b>, pelo regime de competência."],
  ["A apropriação mensal do prêmio é registrada a débito de prêmio de debêntures a apropriar e a crédito de prêmio de debêntures, conta de resultado.","C","FGV","Baixa parcial do passivo exigível."],
  ["Para a banca FGV, o valor do prêmio registrado em conta do passivo é apropriado ao resultado como redutor das despesas financeiras.","C","VUNESP","É o quadro ATENÇÃO do resumo."],
  ["Os custos de transação incorridos na emissão de títulos patrimoniais devem ser contabilizados, de forma destacada, em conta redutora do patrimônio líquido, sem a dedução de eventuais efeitos fiscais.","E","CEBRASPE","O item 05 manda deduzir os <b>eventuais efeitos fiscais</b>."],
  ["Os prêmios recebidos na emissão de ações devem ser reconhecidos em conta do passivo exigível.","E","FCC","Vão para <b>reserva de capital</b>, no PL. No passivo ficam os prêmios de <b>debêntures</b>."],
  ["Os custos de transação incorridos na captação por meio de instrumento de dívida devem ser contabilizados como redução do valor justo inicialmente reconhecido do instrumento financeiro emitido, para evidenciação do valor líquido recebido.","C","CPC 08, item 13","Literalidade do item 13."],
  ["Os custos de transação com a emissão de debêntures são registrados em conta redutora do patrimônio líquido.","E","FGV","São redutora do <b>Passivo</b>; a redutora do PL é a da emissão de <b>ações</b>."],
  ["Emitidas debêntures de R$ 10.000 com custos de transação de R$ 2.400, lança-se a débito de caixa R$ 7.600, a débito de gastos com a emissão de debêntures R$ 2.400 e a crédito de debêntures a pagar R$ 10.000.","C","VUNESP","Exemplo 01 do CPC 08 no resumo."],
  ["Na emissão de ações de R$ 10.000 com gastos de colocação de R$ 2.400, a conta capital social é creditada por R$ 7.600.","E","CEBRASPE","Capital Social é creditado por <b>R$ 10.000</b>; os gastos vão em conta retificadora do PL."],
  ["Se a empresa A investe seu dinheiro em debêntures da empresa B, na empresa A essas debêntures serão classificadas no passivo.","E","FCC","Serão classificadas no <b>ativo</b> — quem emite registra no passivo; quem investe, no ativo."],
  ["Quando a entidade apresenta separadamente ativos e passivos circulantes e não circulantes, os impostos diferidos ativos e passivos não devem ser classificados como circulantes, ficando no não circulante independentemente do prazo.","C","CPC 26, item 56","Item 56 e o comentário do resumo."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Passivo exigível e duplicatas descontadas",
      '<div class="box"><span class="bl">O corte do art. 180</span>'+
      '<p>As obrigações vão ao <b>passivo circulante</b> quando se vencerem <b>no exercício seguinte</b>, e ao <b>passivo não circulante</b> se tiverem vencimento em <b>prazo maior</b> — sempre <b>observado o ciclo operacional</b> da entidade (<b>art. 180 da Lei 6.404/76</b>).</p></div>'+
      '<div class="box"><span class="bl">O quadro-resumo das principais contas</span>'+
      '<p><b>As duas colunas do resumo trazem as MESMAS contas.</b> O que muda é só o vencimento: <b>no exercício seguinte</b> (PC) ou <b>após o exercício seguinte</b> (PNC).</p>'+
      '<p class="chips"><span class="chip">Fornecedores</span><span class="chip">Duplicatas a pagar</span><span class="chip">Notas promissórias a pagar</span><span class="chip">Contas a pagar</span><span class="chip">Dividendos a pagar</span><span class="chip">Empréstimos</span><span class="chip">Financiamentos</span><span class="chip">Tributos a recolher</span><span class="chip">Provisões</span><span class="chip">Duplicatas descontadas</span><span class="chip">Adiantamento de clientes</span><span class="chip">Receitas diferidas</span><span class="chip">Debêntures</span></p>'+
      '<p>Duas entram com <b>sinal negativo</b>, porque são <b>retificadoras</b>: <b>(–) Juros a Apropriar</b> e <b>(–) Encargos Financeiros a Transcorrer</b>.</p></div>'+
      '<div class="box"><span class="bl">Da duplicata à duplicata descontada</span>'+
      '<p>A <b>duplicata</b> é emitida <b>junto da nota fiscal</b> por quem vende mercadoria ou presta serviço. É um <b>título de crédito</b>: o vendedor tem em mãos o compromisso do comprador de pagar no futuro, e registra isso em <b>Duplicatas a Receber (Ativo)</b>.</p>'+
      '<p>A empresa “X” não quer esperar o recebimento futuro de <b>R$ 100.000</b>. Vai ao banco, pede empréstimo e <b>entrega a duplicata como garantia</b>, tratando a operação como <b>simples adiantamento do dinheiro futuro</b>. O banco empresta <b>mediante um desconto</b> — <b>R$ 95.000</b>, ajustado a <b>valor presente</b>. Daí o nome. Nesse momento, o <b>cliente passa a ser devedor do banco</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Os três avisos do quadro</span>'+
      '<ul><li><b>Corresponde a um empréstimo</b> — logo, <b>passivo exigível</b>, nunca ativo.</li>'+
      '<li>Se o cliente não pagar as duplicatas ao banco, <b>a empresa será cobrada</b>.</li>'+
      '<li><b>Juros a Apropriar</b> (ou <b>Encargos Financeiros a Transcorrer</b>) é conta <b>retificadora do Passivo Exigível</b>, apropriada como despesa pelo <b>regime de competência</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">Os três lançamentos</span>'+
      '<p><b>1. Venda:</b> <b>D</b> Duplicatas a Receber R$ 100.000 · <b>C</b> Receita de Vendas R$ 100.000.</p>'+
      '<p><b>2. Desconto</b> (juros de R$ 12.000): <b>D</b> Disponibilidades R$ 88.000 · <b>D</b> Juros a Apropriar R$ 12.000 · <b>C</b> Duplicatas Descontadas R$ 100.000.</p>'+
      '<p><b>3. Apropriação mensal:</b> <b>D</b> Despesa de Juros R$ 1.000 · <b>C</b> Juros a Apropriar R$ 1.000.</p></div>'+
      '<div class="box tip"><span class="bl">A OBS. que decide a questão</span>'+
      '<p>A empresa <b>NÃO baixa duplicatas a receber</b> no lançamento 2. Ela só será baixada <b>após o pagamento pelo cliente</b>.</p>'+
      '<p><b>Cliente pagou a duplicata ao banco:</b> D Duplicatas Descontadas · <b>C Duplicatas a Receber</b>.</p>'+
      '<p><b>Cliente NÃO pagou:</b> D Duplicatas Descontadas · <b>C Disponibilidades</b> — o banco cobra da entidade.</p></div>')
  ],
  V2:[
    sl("Empréstimos, financiamentos, covenant e ativo qualificável",
      '<div class="box"><span class="bl">Empréstimo × financiamento</span>'+
      '<p><b>Empréstimo:</b> captação de recursos <b>SEM destinação específica</b>.</p>'+
      '<p><b>Financiamento:</b> captação <b>COM destinação específica</b> (ex.: financiamento de um imóvel).</p>'+
      '<p>Pelos <b>itens 11 e 12 do CPC 08</b>, o valor captado deve ser <b>líquido de custos de transação</b>, e os custos incorridos (<b>juros</b>) devem ser <b>apropriados ao longo do contrato</b>.</p></div>'+
      '<div class="box"><span class="bl">Os três lançamentos do empréstimo</span>'+
      '<p><b>1. Captação</b> de R$ 100.000 com juros de R$ 12.000: <b>D</b> Bancos R$ 100.000 · <b>D</b> Juros a Apropriar R$ 12.000 · <b>C</b> Empréstimos a Pagar <b>R$ 112.000</b>.</p>'+
      '<p><b>2. Apropriação mensal:</b> <b>D</b> Juros Passivos R$ 1.000 · <b>C</b> Juros a Apropriar R$ 1.000.</p>'+
      '<p><b>3. Pagamento:</b> <b>D</b> Empréstimos a Pagar R$ 112.000 · <b>C</b> Bancos R$ 112.000.</p></div>'+
      '<div class="box trap"><span class="bl">CPC 26 — a quebra do covenant</span>'+
      '<p><b>Item 74:</b> quebrado o <b>covenant</b> de empréstimo de longo prazo, o passivo é <b>CIRCULANTE</b> mesmo que o credor tenha concordado, <b>APÓS</b> a data do balanço, em não exigir o pagamento antecipado. A razão: <b>à data do balanço</b>, a entidade <b>NÃO tem o direito incondicional de diferir</b> a liquidação por pelo menos <b>doze meses</b>.</p>'+
      '<p><b>Item 75:</b> é <b>NÃO circulante</b> se o credor concordou <b>ATÉ</b> a data do balanço em dar <b>dilação de prazo</b>, a terminar pelo menos <b>doze meses após</b> essa data.</p>'+
      '<p class="mn"><em>Acordo ATÉ o balanço → PNC · acordo APÓS o balanço → PC</em></p></div>'+
      '<div class="box"><span class="bl">CPC 20 — ativo qualificável</span>'+
      '<p><b>Item 05:</b> ativo que, <b>necessariamente, demanda período de tempo substancial</b> para ficar pronto para seu <b>uso ou venda pretendidos</b>.</p>'+
      '<div class="tree"><div class="leaf"><b>PODEM ser (item 7):</b> estoques · plantas industriais para manufatura · usinas de geração de energia · ativos intangíveis · propriedades para investimentos · plantas portadoras.</div>'+
      '<div class="leaf"><b>NÃO são:</b> ativos financeiros · estoques que são manufaturados · ativos que estão prontos para seu uso (ou venda).</div></div>'+
      '<p><b>Item 8:</b> <b>capitalizar</b> os custos de empréstimos <b>diretamente atribuíveis</b> à aquisição, construção ou produção do ativo qualificável, como <b>parte do custo do ativo</b>; os <b>outros</b> custos são <b>despesa no período em que incorridos</b>.</p></div>'+
      '<div class="box tip"><span class="bl">O exemplo da máquina, com os números do resumo</span>'+
      '<p>Empréstimo de <b>R$ 50.000</b> em <b>02/01/2021</b>, prazo de dois anos, juros de <b>R$ 200/mês</b>. Construção iniciada em <b>03/01/2021</b>, concluída em <b>31/12/2021</b>; uso a partir de <b>01/03/2022</b>.</p>'+
      '<p><b>03/01/2021 a 31/12/2021</b> (construção) → juros de <b>R$ 2.400 ATIVADOS</b> no Imobilizado.</p>'+
      '<p><b>A partir de 01/01/2022</b> → o restante, <b>R$ 2.400</b>, vira <b>despesa financeira</b>. O marco é a <b>conclusão</b>, não a data em que o ativo começou a ser usado.</p></div>')
  ],
  V3:[
    sl("Debêntures, prêmio na emissão e o CPC 08",
      '<div class="box"><span class="bl">Debêntures</span>'+
      '<p><b>Títulos de crédito emitidos por Sociedades Anônimas</b> para captação de recursos de <b>terceiros</b>. É como um empréstimo que a Cia. faz junto a terceiros: ela emite, o terceiro compra, e fica assegurado o direito <b>contra a emissora</b> de receber o dinheiro de volta <b>com juros</b> ao final do prazo. Existe ainda a <b>possibilidade de conversão em ações</b>.</p>'+
      '<p>São <b>títulos negociáveis registrados no passivo circulante OU no não circulante</b>.</p></div>'+
      '<div class="box"><span class="bl">Prêmio na emissão</span>'+
      '<p><b>O que é:</b> valores recebidos na emissão <b>ACIMA do valor nominal</b> determinado para a liquidação — um <b>excedente de capital</b>.</p>'+
      '<p><b>Emissão</b> de R$ 10.000 com prêmio de R$ 1.200: <b>D</b> Caixa R$ 11.200 · <b>C</b> Debêntures a Pagar R$ 10.000 · <b>C</b> Prêmio de Debêntures a Apropriar R$ 1.200 (<b>↑ Passivo Exigível</b>).</p>'+
      '<p><b>OBS.:</b> o prêmio <b>não</b> vai de imediato ao resultado. Vai <b>mensalmente</b>, pelo <b>Regime de Competência</b>, com baixas parciais até a completa baixa: <b>D</b> Prêmio de Debêntures a Apropriar R$ 100 · <b>C</b> Prêmio de Debêntures R$ 100 (<b>↑ Resultado</b>).</p></div>'+
      '<div class="box trap"><span class="bl">ATENÇÃO — a divergência de banca</span>'+
      '<p>Em regra, o crédito em conta de resultado ocorre nas <b>receitas</b>. Mas a <b>FGV</b> entende que o prêmio registrado no passivo é apropriado ao resultado como <b>REDUTOR DAS DESPESAS FINANCEIRAS</b> — ou seja, deve-se <b>creditar as despesas</b>.</p>'+
      '<p>O resumo anota: <b>CESPE e FCC ainda não foram vistas cobrando esse lançamento</b>.</p></div>'+
      '<div class="box"><span class="bl">CPC 08 — item 05 × item 13</span>'+
      '<p><b>Item 05 — capital próprio (AÇÕES, títulos patrimoniais):</b> os custos de transação vão, <b>de forma destacada, em conta redutora do patrimônio líquido</b>, <b>deduzidos os eventuais efeitos fiscais</b>; os <b>prêmios recebidos</b> vão para <b>reserva de capital</b>.</p>'+
      '<p><b>Item 13 — recursos de terceiros (instrumento de dívida: empréstimos, financiamentos, debêntures, notas comerciais ou outros valores mobiliários):</b> os custos de transação são <b>redução do valor justo inicialmente reconhecido</b> do instrumento emitido, para <b>evidenciação do valor líquido recebido</b> — <b>conta redutora do Passivo</b>; os <b>prêmios</b> ficam no <b>Passivo Exigível</b>.</p>'+
      '<p><b>Os dois exemplos, com R$ 10.000 e gastos de R$ 2.400:</b><br><b>DEBÊNTURES:</b> D Caixa 7.600 · D Gastos com a Emissão de Debêntures 2.400 (<b>retificadora do Passivo</b>) · C Debêntures a Pagar <b>10.000</b>.<br><b>AÇÕES:</b> D Caixa 7.600 · D Gastos com a Emissão de Ações 2.400 (<b>retificadora do PL</b>) · C Capital Social <b>10.000</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Emite ou investe?</span>'+
      '<p>Se a empresa “A” <b>investe</b> (aplica seu dinheiro) em debêntures da empresa “B”, em “A” essas debêntures são <b>ATIVO</b> — é investimento que rende juros em títulos de outra empresa.</p>'+
      '<p class="mn"><em>EMITE → PASSIVO · INVESTE → ATIVO</em></p></div>'+
      '<div class="box"><span class="bl">CPC 26, item 56 — impostos diferidos</span>'+
      '<p>Quando a entidade apresenta separadamente circulante e não circulante, os impostos diferidos ativos (passivos) <b>NÃO</b> devem ser classificados como circulantes.</p>'+
      '<p>Comentário do resumo: vão ao <b>ANC</b> (se direito) ou ao <b>PNC</b> (se obrigação), <b>independentemente do prazo</b>.</p></div>')
  ]
};

var EX = {
S1:{t:"gap", instr:"Complete o critério do art. 180 da Lei 6.404/76",
  before:"As obrigações serão classificadas no passivo circulante quando se vencerem no ",
  after:", e no passivo não circulante se tiverem vencimento em prazo maior.",
  options:["exercício seguinte","exercício corrente","mês seguinte ao balanço"], answer:0,
  why:"E sempre observado o ciclo operacional da entidade."},

S2:{t:"sort", instr:"Retificadora do passivo exigível ou obrigação do passivo exigível?",
  buckets:["Retificadora","Obrigação"],
  items:[["Juros a Apropriar",0],["Encargos Financeiros a Transcorrer",0],
         ["Duplicatas Descontadas",1],["Debêntures",1],
         ["Adiantamento de Clientes",1],["Dividendos a Pagar",1]],
  why:"No quadro-resumo, só as duas primeiras aparecem com sinal negativo."},

S3:{t:"mc", instr:"Como se classificam as duplicatas descontadas e por quê?",
  options:["No passivo exigível, porque correspondem a uma espécie de empréstimo bancário",
           "No ativo circulante, porque representam o direito de receber do cliente",
           "Em conta retificadora do patrimônio líquido",
           "Em conta de resultado, como despesa financeira do período"],
  answer:0,
  why:"A duplicata entra só como garantia; o que a empresa tem é uma dívida com o banco."},

S4:{t:"wordbank", instr:"Monte o lançamento do desconto de duplicatas de R$ 100.000 com juros de R$ 12.000",
  target:["D","Disponibilidades","88.000","D","Juros","a","Apropriar","12.000","C","Duplicatas","Descontadas","100.000"],
  extra:["Duplicatas a Receber","Receita de Vendas","95.000"],
  why:"O passivo nasce pelos R$ 100.000; o desconto fica destacado na retificadora."},

S5:{t:"match", instr:"Correlacione cada momento da operação de desconto ao seu lançamento",
  pairs:[["Venda da mercadoria","D Duplicatas a Receber · C Receita de Vendas"],
         ["Apropriação mensal dos juros","D Despesa de Juros · C Juros a Apropriar"],
         ["Cliente pagou a duplicata ao banco","D Duplicatas Descontadas · C Duplicatas a Receber"],
         ["Cliente NÃO pagou a duplicata","D Duplicatas Descontadas · C Disponibilidades"]],
  why:"Duplicatas a receber só é baixada depois do pagamento pelo cliente."},

S6:{t:"mc", instr:"No exemplo do resumo, a empresa “X” tem duplicata de R$ 100.000 e vai ao banco. Quanto recebe, e por quê?",
  options:["R$ 95.000, porque o banco empresta mediante um desconto ajustado a valor presente",
           "R$ 100.000, porque a duplicata é a garantia integral da operação",
           "R$ 88.000, porque os juros de R$ 12.000 são retidos na fonte",
           "R$ 112.000, porque os juros são somados ao valor da duplicata"],
  answer:0,
  why:"É daí que vem o nome duplicatas descontadas."},

S7:{t:"sort", instr:"Captação com ou sem destinação específica?",
  buckets:["Empréstimo","Financiamento"],
  items:[["Captação de recursos sem destinação específica",0],
         ["Captação de recursos com destinação específica",1],
         ["Recursos tomados para a compra de um imóvel determinado",1],
         ["Recursos tomados para reforço genérico do caixa",0]],
  why:"O resumo usa exatamente o financiamento de um imóvel como exemplo."},

S8:{t:"wordbank", instr:"Monte o lançamento da captação do empréstimo de R$ 100.000 com juros de R$ 12.000",
  target:["D","Bancos","100.000","D","Juros","a","Apropriar","12.000","C","Empréstimos","a","Pagar","112.000"],
  extra:["100.000 a pagar","Juros Passivos","Disponibilidades"],
  why:"A obrigação é registrada pelo total de R$ 112.000, com os juros na retificadora."},

S9:{t:"mc", instr:"A entidade quebra o covenant de um empréstimo de longo prazo. Após a data do balanço, o credor concorda em não exigir o pagamento antecipado. Como classificar o passivo?",
  options:["Circulante, pois à data do balanço não havia direito incondicional de diferir a liquidação por pelo menos doze meses",
           "Não circulante, pois o credor renunciou à exigência antes do encerramento das demonstrações",
           "Circulante apenas na parte dos juros, ficando o principal no não circulante",
           "Não circulante, pois o prazo original do contrato permanece inalterado"],
  answer:0,
  why:"CPC 26, item 74 — o acordo posterior ao balanço não muda a classificação."},

S10:{t:"gap", instr:"Complete o item 75 do CPC 26",
  before:"O passivo deve ser classificado como não circulante se o credor tiver concordado, ",
  after:" a data do balanço, em proporcionar uma dilação de prazo a terminar pelo menos doze meses após a data do balanço.",
  options:["até","após","independentemente de"], answer:0,
  why:"Acordo ATÉ o balanço leva ao PNC; acordo APÓS o balanço mantém no PC."},

S11:{t:"multi", instr:"Marque o que PODE ser considerado ativo qualificável pelo CPC 20",
  options:["Estoques","Plantas industriais para manufatura","Usinas de geração de energia",
           "Ativos intangíveis","Propriedades para investimentos","Plantas portadoras",
           "Ativos financeiros","Ativos que estão prontos para seu uso ou venda"],
  answers:[0,1,2,3,4,5],
  why:"Os dois últimos estão na lista do que NÃO é ativo qualificável, junto dos estoques que são manufaturados."},

S12:{t:"mc", instr:"Empréstimo de R$ 50.000 em 02/01/2021, juros de R$ 200/mês; construção da máquina de 03/01/2021 a 31/12/2021; uso a partir de 01/03/2022. Qual o tratamento dos juros?",
  options:["R$ 2.400 ativados no imobilizado até 31/12/2021 e R$ 2.400 como despesa financeira a partir de 01/01/2022",
           "R$ 4.800 integralmente ativados, pois o empréstimo financiou o ativo qualificável",
           "R$ 2.400 ativados até 01/03/2022 e o restante como despesa financeira",
           "R$ 4.800 integralmente como despesa financeira, pois juros nunca compõem o custo do ativo"],
  answer:0,
  why:"O período de capitalização é o de construção do ativo qualificável."},

S13:{t:"mc", instr:"O que é prêmio na emissão de debêntures, e quando vai ao resultado?",
  options:["Valor recebido ACIMA do valor nominal; vai ao resultado mensalmente, pelo regime de competência",
           "Valor recebido ABAIXO do valor nominal; vai ao resultado na data da emissão",
           "Valor recebido ACIMA do valor nominal; vai integralmente ao resultado na data da emissão",
           "Valor recebido ACIMA do valor nominal; vai à reserva de capital, no patrimônio líquido"],
  answer:0,
  why:"É um excedente de capital que fica no Passivo Exigível e sofre baixas parciais."},

S14:{t:"wordbank", instr:"Monte o lançamento da emissão de debêntures de R$ 10.000 com prêmio de R$ 1.200",
  target:["D","Caixa","11.200","C","Debêntures","a","Pagar","10.000","C","Prêmio","de","Debêntures","a","Apropriar","1.200"],
  extra:["Capital Social","Reserva de Capital","8.800"],
  why:"O prêmio aumenta o Passivo Exigível, não o patrimônio líquido."},

S15:{t:"sort", instr:"CPC 08 — cada regra é do item 05 (ações) ou do item 13 (dívida)?",
  buckets:["Ações — títulos patrimoniais (item 05)","Debêntures — títulos de dívida (item 13)"],
  items:[["Custos de transação em conta redutora do patrimônio líquido, deduzidos os efeitos fiscais",0],
         ["Prêmios recebidos reconhecidos em conta de reserva de capital",0],
         ["Custos de transação como redução do valor justo inicialmente reconhecido do instrumento",1],
         ["Prêmios recebidos contabilizados no Passivo Exigível",1],
         ["Captação de recursos para o capital próprio",0],
         ["Captação de recursos de terceiros",1]],
  why:"Ações são títulos patrimoniais; debêntures são títulos de dívida."},

S16:{t:"mc", instr:"Emissão de debêntures de R$ 10.000 com custos de transação de R$ 2.400. Qual o lançamento?",
  options:["D Caixa 7.600 · D Gastos com a Emissão de Debêntures 2.400 (retificadora do Passivo) · C Debêntures a Pagar 10.000",
           "D Caixa 7.600 · D Gastos com a Emissão de Debêntures 2.400 (retificadora do PL) · C Debêntures a Pagar 10.000",
           "D Caixa 7.600 · C Debêntures a Pagar 7.600",
           "D Caixa 10.000 · C Debêntures a Pagar 10.000 · D Despesa Financeira 2.400 · C Caixa 2.400"],
  answer:0,
  why:"A dívida é reconhecida por 10.000 e os custos ficam destacados na retificadora do passivo."},

S17:{t:"sort", instr:"Onde as debêntures são registradas?",
  buckets:["Passivo","Ativo"],
  items:[["Empresa que EMITE as debêntures",0],
         ["Companhia que capta recursos de terceiros emitindo o título",0],
         ["Empresa que INVESTE em debêntures de outra empresa",1],
         ["Entidade que aplica seu dinheiro em títulos que rendem juros de outra empresa",1]],
  why:"Quadro ATENÇÃO do resumo: emite → passivo; investe → ativo."},

S18:{t:"mc", instr:"Pelo item 56 do CPC 26, como se classificam os impostos diferidos ativos e passivos?",
  options:["No ativo não circulante ou no passivo não circulante, independentemente do prazo",
           "Sempre no ativo circulante ou no passivo circulante",
           "No circulante, se realizáveis ou exigíveis em até doze meses",
           "Em conta redutora do patrimônio líquido"],
  answer:0,
  why:"ANC se for direito, PNC se for obrigação — o prazo é irrelevante."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Contabilidade Geral 07","https://www.tecconcursos.com.br/s/Q2ZgLH","Q2ZgLH"],
  ["Caderno FCC — Contabilidade Geral 07","https://www.tecconcursos.com.br/s/Q2ZgLu","Q2ZgLu"],
  ["Caderno FGV — Contabilidade Geral 07","https://www.tecconcursos.com.br/s/Q294oO","Q294oO"],
  ["Caderno VUNESP — Contabilidade Geral 07","https://www.tecconcursos.com.br/s/Q2ZgM2","Q2ZgM2"]
];
var TECNOTA = "Módulo de lançamentos, e é nos lançamentos que a banca ganha dinheiro. Três fronteiras respondem pela maioria dos erros. A primeira é a OBS. das duplicatas descontadas: no desconto não se baixa duplicatas a receber, e a contrapartida depois depende de quem pagou — cliente pagou ao banco, C Duplicatas a Receber; cliente não pagou, C Disponibilidades. A segunda é o valor do passivo com juros a apropriar: no empréstimo de R$ 100.000 com juros de R$ 12.000, Empréstimos a Pagar nasce por R$ 112.000 e o pagamento sai por R$ 112.000, com os R$ 12.000 na retificadora. A terceira é o par item 05 × item 13 do CPC 08: custos de transação de AÇÕES são redutora do PL e o prêmio vai à reserva de capital; custos de transação de DEBÊNTURES são redutora do Passivo e o prêmio fica no Passivo Exigível — em ambos os exemplos do resumo, com R$ 10.000 e gastos de R$ 2.400, o crédito é de R$ 10.000 e o caixa, de R$ 7.600. Guarde ainda os dois marcos temporais: no covenant, acordo ATÉ o balanço leva ao PNC e acordo APÓS o balanço mantém no PC; no CPC 20, a capitalização dos juros vai só até a conclusão da construção (R$ 2.400 até 31/12/2021), e não até a data em que o ativo começou a ser usado.";

var UNITS = [
  {n:1, title:"Passivo exigível e duplicatas descontadas", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Art. 180, quadro-resumo e o desconto de duplicatas", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · o corte PC/PNC e as retificadoras", xp:25, data:["S1","S2","T0","T1","T2","T3","T4"]},
    {id:"K3", type:"drill",  title:"Praticar · o que são duplicatas descontadas",  xp:25, data:["S3","S4","T5","T6","T7","T8","T9","T10","T11"]},
    {id:"K4", type:"drill",  title:"Praticar · lançamentos e quem paga o título",  xp:25, data:["S5","S6","T12","T13","T14","T15","T16","T17"]},
    {id:"K5", type:"flash",  title:"Flashcards · passivo exigível e duplicatas descontadas", xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13]}
  ]},
  {n:2, title:"Empréstimos, financiamentos e CPC 20", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Captação, covenant e ativo qualificável",       xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · empréstimo, financiamento e juros",  xp:25, data:["S7","S8","T18","T19","T20","T21","T22","T23","T24"]},
    {id:"K8", type:"drill",  title:"Praticar · a quebra do covenant",               xp:25, data:["S9","S10","T25","T26","T27","T28"]},
    {id:"K9", type:"drill",  title:"Praticar · ativo qualificável e capitalização", xp:25, data:["S11","S12","T29","T30","T31","T32","T33","T34"]},
    {id:"K10",type:"flash",  title:"Flashcards · empréstimos e CPC 20",             xp:15, data:[14,15,16,17,18,19,20,21,22,23,24,25,26]}
  ]},
  {n:3, title:"Debêntures e CPC 08", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Debêntures, prêmio na emissão e custos de transação", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · debêntures e prêmio na emissão",     xp:25, data:["S13","S14","T35","T36","T37","T38","T39","T40"]},
    {id:"K13",type:"drill",  title:"Praticar · CPC 08 — item 05 × item 13",         xp:25, data:["S15","S16","T41","T42","T43","T44","T45","T46"]},
    {id:"K14",type:"drill",  title:"Praticar · emite, investe e impostos diferidos",xp:25, data:["S17","S18","T47","T48","T49","T50"]},
    {id:"K15",type:"flash",  title:"Flashcards · debêntures e CPC 08",              xp:15, data:[27,28,29,30,31,32,33,34,35,36,37,38]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                       xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                          xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                         xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 07 de Contabilidade (Radegondes) ---------- */
var COM={
0:"<p>Literalidade do <b>art. 180 da Lei 6.404/76</b>, como o resumo o transcreve: as obrigações <b>“serão classificadas no passivo circulante quando se vencerem no exercício seguinte, e no passivo não circulante se tiverem vencimento em prazo maior, observado o ciclo operacional da entidade”</b>.</p><p>Repare nos três elementos: <b>vencimento no exercício seguinte</b> → PC · <b>prazo maior</b> → PNC · e o <b>ciclo operacional</b> como ressalva.</p><p class='fb-fonte'>Resumo 07 · <i>Passivo Exigível</i></p>",
1:"<p>Errado por <b>inversão</b>. O que se vence <b>no exercício seguinte</b> é <b>passivo CIRCULANTE</b>. O não circulante fica com o que vence em <b>prazo maior</b>.</p><p>O rodapé do quadro-resumo é a régua: <b>“quando vencerem no exercício seguinte”</b> (PC) contra <b>“quando vencerem após o exercício seguinte”</b> (PNC).</p><p class='fb-fonte'>Resumo 07 · <i>Passivo Exigível — art. 180</i></p>",
2:"<p>Errado pela palavra <b>somente</b>. Olhe o quadro-resumo do resumo: as <b>duas colunas trazem a mesma lista de contas</b> — fornecedores, duplicatas a pagar, notas promissórias, contas a pagar, dividendos a pagar, empréstimos, financiamentos, tributos a recolher, provisões, duplicatas descontadas, adiantamento de clientes, receitas diferidas e debêntures.</p><p>A conta não define o grupo. O que define é o <b>vencimento</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Quadro-resumo com as principais contas do passivo exigível</i></p>",
3:"<p>Certo. No quadro-resumo, só duas contas aparecem com o sinal negativo à frente: <b>(–) Juros a Apropriar</b> e <b>(–) Encargos Financeiros a Transcorrer</b>.</p><p>O próprio resumo reforça depois, no quadro das duplicatas descontadas: <b>“Juros a Apropriar (Encargos Financeiros a Transcorrer) é uma conta retificadora do Passivo Exigível”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Quadro-resumo do passivo exigível</i></p>",
4:"<p>Errado no grupo. <b>Adiantamento de Clientes</b> e <b>Receitas Diferidas (antecipadas)</b> estão listadas no quadro-resumo entre as <b>contas do passivo exigível</b>, nas duas colunas.</p><p>Faz sentido: a entidade recebeu o dinheiro mas ainda deve a entrega — é obrigação, não direito.</p><p class='fb-fonte'>Resumo 07 · <i>Quadro-resumo do passivo exigível</i></p>",
5:"<p>Errado. Quem fica no ativo é a conta <b>Duplicatas a Receber</b>. As <b>Duplicatas Descontadas</b>, diz o resumo, <b>“são uma espécie de empréstimo bancário e, por isso, são classificadas no Passivo Exigível”</b>.</p><p>A duplicata entra na operação apenas como <b>garantia</b>; o que a empresa passa a ter é uma <b>dívida com o banco</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Duplicatas Descontadas</i></p>",
6:"<p>Certo — é a frase de abertura do tópico e o primeiro item do quadro: <b>“corresponde a um empréstimo”</b>.</p><p>Guarde o encadeamento do resumo: empréstimo bancário → passivo exigível → e, se o cliente não pagar o banco, <b>a empresa será cobrada</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Duplicatas Descontadas</i></p>",
7:"<p>Certo, na letra do resumo: <b>“a duplicata é um documento emitido junto da nota fiscal por uma empresa que vende uma mercadoria (ou presta um serviço). Ela funciona como um título de crédito”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Duplicatas Descontadas — explicando melhor</i></p>",
8:"<p>Certo. O resumo fecha o raciocínio: <b>“a empresa possui o direito de receber um dinheiro futuro e registra isso no balanço patrimonial na conta Duplicatas a Receber (Ativo)”</b>.</p><p>Não confunda com <b>Duplicatas Descontadas</b>, que é passivo. São contas diferentes e coexistem até o cliente pagar.</p><p class='fb-fonte'>Resumo 07 · <i>Duplicatas Descontadas — explicando melhor</i></p>",
9:"<p>Certo. É o exemplo da empresa <b>“X”</b>: ela não quer aguardar o momento futuro do recebimento, <b>“vai ao banco solicitar um empréstimo e, como forma de garantia de pagamento do empréstimo, entrega a duplicata, tratando a operação como um simples adiantamento do dinheiro futuro”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Duplicatas Descontadas — explicando melhor</i></p>",
10:"<p>Errado no valor, e é exatamente aí que está o nome da operação. O resumo: <b>“o banco empresta o dinheiro para a empresa, mediante um desconto (exemplo: R$ 95.000) ajustado a valor presente, por isso o nome duplicatas descontadas”</b>.</p><p>Duplicata de <b>R$ 100.000</b> → banco entrega <b>R$ 95.000</b>. O desconto é a remuneração da antecipação.</p><p class='fb-fonte'>Resumo 07 · <i>Duplicatas Descontadas — explicando melhor</i></p>",
11:"<p>Certo, e é a frase final do exemplo: <b>“nesse momento, o comprador (cliente) das mercadorias da empresa ‘X’ passa a ser devedor do banco”</b>.</p><p>Mas atenção ao outro lado, que o resumo também diz: se o cliente não pagar, <b>a empresa será cobrada</b>. A garantia continua sendo dela.</p><p class='fb-fonte'>Resumo 07 · <i>Duplicatas Descontadas — explicando melhor</i></p>",
12:"<p>Errado no momento do reconhecimento. Pelo resumo, <b>“os custos de transação diretamente associados à operação de desconto devem ser apresentados em conta retificadora de passivo denominada Juros a Apropriar (ou Encargos Financeiros a Transcorrer), que serão apropriados como despesa de acordo com o regime de competência”</b>.</p><p>Nada de despesa integral na largada: ela vai sendo apropriada mês a mês, R$ 1.000 por vez no exemplo.</p><p class='fb-fonte'>Resumo 07 · <i>Duplicatas Descontadas</i></p>",
13:"<p>Certo — é o <b>lançamento 2</b> do resumo, com os mesmos números: <b>D – Disponibilidades R$ 88.000</b> (AC) · <b>D – Juros a apropriar R$ 12.000</b> (retificadora do Passivo Exigível) · <b>C – Duplicatas Descontadas R$ 100.000</b> (Passivo Exigível).</p><p>Note que o passivo nasce pelos <b>R$ 100.000</b> e o que entra em caixa é o líquido, <b>R$ 88.000</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Lançamentos em uma operação de desconto de duplicatas</i></p>",
14:"<p>Errado — e esta é a <b>OBS.</b> que o resumo destaca justamente para evitar o erro: <b>“note que a empresa não efetua a baixa da conta duplicatas a receber no momento da operação de desconto (lançamento 2), pois ela só será baixada após o pagamento pelo cliente”</b>.</p><p>Por isso, depois do desconto, convivem no balanço <b>Duplicatas a Receber</b> (ativo) e <b>Duplicatas Descontadas</b> (passivo).</p><p class='fb-fonte'>Resumo 07 · <i>Desconto de duplicatas — OBS.</i></p>",
15:"<p>Certo. É um dos dois desfechos que o resumo põe no quadro <b>“OU”</b>: <b>cliente pagou a duplicata ao banco → D Duplicatas Descontadas · C Duplicatas a Receber</b>.</p><p>Aqui é que a duplicata a receber finalmente sai do ativo.</p><p class='fb-fonte'>Resumo 07 · <i>Desconto de duplicatas — cliente pagou / não pagou</i></p>",
16:"<p>Errado. O resumo avisa: <b>“se o título não for quitado pelo cliente até o vencimento, o banco cobrará da entidade”</b>. A empresa registra <b>D Duplicatas Descontadas · C Disponibilidades</b> — sai dinheiro do caixa dela.</p><p>Compare os dois desfechos: quem pagou define a <b>contrapartida</b>. Cliente pagou → C Duplicatas a Receber. Cliente não pagou → C Disponibilidades.</p><p class='fb-fonte'>Resumo 07 · <i>Desconto de duplicatas — cliente pagou / não pagou</i></p>",
17:"<p>Certo — <b>lançamento 3</b> do resumo: <b>D – Despesa de Juros R$ 1.000</b> (Resultado) · <b>C – Juros a apropriar R$ 1.000</b> (retificadora do Passivo Exigível).</p><p>É o regime de competência em ação: os R$ 12.000 do desconto viram despesa em parcelas de R$ 1.000.</p><p class='fb-fonte'>Resumo 07 · <i>Lançamentos em uma operação de desconto de duplicatas</i></p>",
18:"<p>Errado — trocou os dois conceitos. Pelo resumo, <b>“o empréstimo é caracterizado pela captação de recursos SEM destinação específica. Já o financiamento é caracterizado pela captação de recursos COM destinação específica (exemplo: financiamento de um imóvel)”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Empréstimos e Financiamentos</i></p>",
19:"<p>Certo, com o exemplo do próprio resumo: financiamento é captação <b>com destinação específica</b>, e ele cita o <b>financiamento de um imóvel</b>.</p><p>O par para memorizar: <b>sem destinação = empréstimo · com destinação = financiamento</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Empréstimos e Financiamentos</i></p>",
20:"<p>Certo. O resumo invoca os <b>itens 11 e 12 do CPC 08</b>: <b>“o valor captado de empréstimos deve ser líquido de custos de transação, e os custos incorridos (juros) devem ser apropriados ao longo do contrato”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Empréstimos e Financiamentos — CPC 08, itens 11 e 12</i></p>",
21:"<p>Errado na segunda metade da regra. Os custos incorridos (juros) <b>“devem ser apropriados ao longo do contrato”</b>, e não de uma vez no período da captação.</p><p>Na prática é o <b>lançamento 2</b> do resumo: <b>D – Juros passivos R$ 1.000 · C – Juros a apropriar R$ 1.000</b>, mês a mês.</p><p class='fb-fonte'>Resumo 07 · <i>Empréstimos e Financiamentos — CPC 08, itens 11 e 12</i></p>",
22:"<p>Certo — <b>lançamento 1</b> do resumo, literal: <b>D – Bancos R$ 100.000</b> (Ativo) · <b>D – Juros a apropriar R$ 12.000</b> (retificadora do Passivo Exigível) · <b>C – Empréstimos a pagar R$ 112.000</b> (Passivo Exigível).</p><p>Compare com o desconto de duplicatas: lá o passivo nasceu por R$ 100.000 e o caixa recebeu R$ 88.000; aqui o caixa recebe R$ 100.000 e o passivo nasce por R$ 112.000.</p><p class='fb-fonte'>Resumo 07 · <i>Lançamentos em uma operação de empréstimo com juros</i></p>",
23:"<p>Certo — <b>lançamento 2</b> do resumo: <b>D – Juros passivos R$ 1.000</b> (Despesa) · <b>C – Juros a apropriar R$ 1.000</b> (retificadora do Passivo Exigível).</p><p>Note o nome da conta de despesa neste tópico: no empréstimo o resumo escreve <b>Juros passivos</b>; no desconto de duplicatas, <b>Despesa de Juros</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Lançamentos em uma operação de empréstimo com juros</i></p>",
24:"<p>Errado no valor. O <b>lançamento 3</b> do resumo é pelo total da obrigação: <b>D – Empréstimos a pagar R$ 112.000 · C – Bancos R$ 112.000</b>.</p><p>Os R$ 100.000 foram só o que entrou em Bancos na captação. A dívida registrada, e paga, é de <b>R$ 112.000</b> — capital mais os R$ 12.000 de juros.</p><p class='fb-fonte'>Resumo 07 · <i>Lançamentos em uma operação de empréstimo com juros</i></p>",
25:"<p>Certo pela letra do <b>item 74 do CPC 26</b> transcrito no resumo: quebrado o covenant de um empréstimo de longo prazo, <b>“o passivo deve ser classificado como circulante mesmo que o credor tenha concordado, após a data do balanço, em não exigir pagamento antecipado como consequência da quebra do covenant”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 26 — item 74</i></p>",
26:"<p>Errado. É justamente a hipótese que o item 74 resolve em sentido contrário: concordância do credor <b>APÓS</b> a data do balanço <b>não salva</b> o passivo — ele vai para o <b>circulante</b>.</p><p>A régua temporal do resumo: acordo <b>ATÉ</b> a data do balanço (item 75) → <b>não circulante</b>; acordo <b>APÓS</b> a data do balanço (item 74) → <b>circulante</b>.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 26 — itens 74 e 75</i></p>",
27:"<p>Errado por uma palavra invertida. A justificativa do item 74 é a oposta: <b>“o passivo deve ser classificado como circulante porque, à data do balanço, a entidade NÃO tem o direito incondicional de diferir a sua liquidação durante pelo menos doze meses após essa data”</b>.</p><p>Se tivesse esse direito incondicional, o passivo seria não circulante.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 26 — item 74</i></p>",
28:"<p>Certo pela letra do <b>item 75</b>: <b>“entretanto, o passivo deve ser classificado como não circulante se o credor tiver concordado, ATÉ a data do balanço, em proporcionar uma dilação de prazo, a terminar pelo menos doze meses após a data do balanço”</b>.</p><p>Duas condições cumulativas: acordo <b>até</b> o balanço <b>e</b> dilação que termine <b>pelo menos doze meses após</b> o balanço.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 26 — item 75</i></p>",
29:"<p>Certo, na definição do <b>item 05 do CPC 20</b>: <b>“ativo qualificável é um ativo que, necessariamente, demanda um período de tempo substancial para ficar pronto para seu uso ou venda pretendidos”</b>.</p><p>As duas palavras que a banca gosta de apagar são <b>necessariamente</b> e <b>substancial</b>.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 20 — o que é um ativo qualificável</i></p>",
30:"<p>Errado. O resumo tem uma lista fechada do que <b>NÃO</b> são ativos qualificáveis, e os dois estão nela: <b>ativos financeiros</b>, <b>estoques que são manufaturados</b> e <b>ativos que estão prontos para seu uso (ou venda)</b>.</p><p>A lógica é a da própria definição: se já está pronto, não demanda período substancial para ficar pronto.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 20 — não são ativos qualificáveis</i></p>",
31:"<p>Certo — é a lista do <b>item 7 do CPC 20</b>, na íntegra: <b>estoques · plantas industriais para manufatura · usinas de geração de energia · ativos intangíveis · propriedades para investimentos · plantas portadoras</b>.</p><p>Repare no detalhe: <b>estoques</b> podem ser qualificáveis, mas os <b>estoques que são manufaturados</b> estão na lista do que não é.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 20 — item 7</i></p>",
32:"<p>Certo pela letra do <b>item 8</b>: <b>“a entidade deve capitalizar os custos de empréstimos que são diretamente atribuíveis à aquisição, construção ou produção de ativo qualificável como parte do custo do ativo. A entidade deve reconhecer os outros custos de empréstimos como despesa no período em que são incorridos”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 20 — item 8</i></p>",
33:"<p>Certo — é o <b>EXEMPLO</b> do resumo, com os mesmos números: <b>“de 03/01/2021 até 31/12/2021 (período de construção do ativo) => os custos do empréstimo deverão ser ativados, ou seja, a apropriação dos juros nesse período (R$ 2.400) será contabilizada no Ativo Imobilizado (Qualificável)”</b>.</p><p>Doze meses de construção × R$ 200 de juros mensais = <b>R$ 2.400</b>.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 20 — exemplo da máquina</i></p>",
34:"<p>Errado no marco final da capitalização. O resumo é expresso: <b>“a partir de 01/01/2022 => o restante dos juros (R$ 2.400) será contabilizado como despesa financeira”</b>.</p><p>O que encerra a capitalização é a <b>conclusão da construção</b>, em <b>31/12/2021</b> — e não a data em que o ativo começou a ser utilizado (01/03/2022).</p><p class='fb-fonte'>Resumo 07 · <i>CPC 20 — exemplo da máquina</i></p>",
35:"<p>Certo, na definição do resumo: <b>“são títulos de créditos emitidos por Sociedades Anônimas para captação de recursos (dinheiro) de terceiros”</b>.</p><p>Ele compara com um empréstimo: a Cia. emite, o terceiro compra e <b>“fica assegurado o direito contra a emissora (Cia) de receber seu dinheiro de volta com juros ao final do prazo estipulado no título”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Debêntures</i></p>",
36:"<p>Errado. O resumo diz o contrário, e em frase própria: <b>“além disso, existe a possibilidade de conversão das debêntures em ações da entidade”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Debêntures</i></p>",
37:"<p>Errado pela palavra <b>exclusivamente</b>. O quadro do resumo é claro: <b>“debêntures são títulos negociáveis registrados no passivo circulante, ou no não circulante”</b>.</p><p>Vale aqui a mesma régua do art. 180: quem decide o grupo é o <b>vencimento</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Debêntures — quadro</i></p>",
38:"<p>Certo — é o <b>EXEMPLO 01</b> do resumo, com os mesmos valores: <b>D – Caixa (ou Bancos) R$ 11.200</b> (↑ Ativo) · <b>C – Debêntures a Pagar R$ 10.000</b> (↑ Passivo Exigível) · <b>C – Prêmio de Debêntures a Apropriar R$ 1.200</b> (↑ Passivo Exigível).</p><p>Guarde que <b>as duas</b> contas credoras são de <b>passivo exigível</b>. O prêmio de debêntures não vai ao PL.</p><p class='fb-fonte'>Resumo 07 · <i>Debêntures — contabilização da captação de recursos</i></p>",
39:"<p>Errado por uma palavra: é <b>acima</b>, não abaixo. O resumo define: prêmio na emissão são <b>“valores recebidos na emissão de debêntures acima do valor nominal determinado para a liquidação. Ou seja, é um excedente de capital”</b>.</p><p>No exemplo, valor nominal de R$ 10.000 e caixa de R$ 11.200 — o excedente de <b>R$ 1.200</b> é o prêmio.</p><p class='fb-fonte'>Resumo 07 · <i>O que é prêmio na emissão de debêntures?</i></p>",
40:"<p>Errado no momento. A <b>OBS.</b> do resumo: <b>“note que o prêmio na emissão de debêntures da entidade não será reconhecido de imediato em seu resultado, mas sim mensalmente, de acordo com o Regime de Competência, ou seja, ao longo do tempo, dando baixas parciais nessa conta do Passivo Exigível até sua completa baixa”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Debêntures — OBS. sobre o prêmio</i></p>",
41:"<p>Certo — é o lançamento mensal do resumo: <b>D – Prêmio de Debêntures a Apropriar R$ 100</b> (↓ Passivo Exigível) · <b>C – Prêmio de Debêntures R$ 100</b> (↑ Resultado).</p><p>O passivo vai sendo baixado em parcelas até a completa baixa, pelo regime de competência.</p><p class='fb-fonte'>Resumo 07 · <i>Debêntures — apropriação do prêmio</i></p>",
42:"<p>Certo, e é o quadro <b>ATENÇÃO</b> do resumo: <b>“em regra, o lançamento a crédito em conta de resultado ocorre nas receitas. Contudo, a banca FGV entende que o valor do prêmio registrado em conta do passivo será apropriado ao resultado como redutor das despesas financeiras, ou seja, deve-se creditar as despesas”</b>.</p><p>O resumo ainda ressalva: <b>“ainda não vimos as bancas CESPE e FCC cobrarem esse lançamento”</b>. Ou seja, é posição de <b>FGV</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Debêntures — ATENÇÃO (entendimento da FGV)</i></p>",
43:"<p>Errado por uma supressão. O <b>item 05 do CPC 08</b>, no quadro do resumo, manda contabilizar os custos de transação de títulos patrimoniais <b>“de forma destacada, em conta redutora de patrimônio líquido, DEDUZIDOS os eventuais efeitos fiscais”</b>.</p><p>Os efeitos fiscais entram na conta; a assertiva os retirou.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 08 — item 05 (captação para o capital próprio)</i></p>",
44:"<p>Errado no grupo. Pelo quadro do resumo, <b>prêmios recebidos na emissão de AÇÕES</b> se contabilizam na <b>Reserva de Capital, no PL</b> — o item 05 fala em <b>“conta de reserva de capital”</b>.</p><p>Quem vai para o <b>Passivo Exigível</b> é o prêmio recebido na emissão de <b>DEBÊNTURES</b>. Esse é o par que a banca embaralha.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 08 — prêmios em ações × prêmios em debêntures</i></p>",
45:"<p>Certo pela letra do <b>item 13 do CPC 08</b>, transcrito no quadro: os custos de transação na captação por instrumento de dívida <b>“devem ser contabilizados como redução do valor justo inicialmente reconhecido do instrumento financeiro emitido, para evidenciação do valor líquido recebido”</b>.</p><p>O resumo lembra que o instrumento de dívida abrange <b>empréstimos, financiamentos, debêntures, notas comerciais ou outros valores mobiliários</b>.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 08 — item 13 (captação de recursos de terceiros)</i></p>",
46:"<p>Errado — trocou o grupo. O resumo resume o par assim: <b>“o item 05 trata dos custos de transação com a emissão de AÇÕES (títulos patrimoniais) (Conta Redutora do PL)”</b> e <b>“o item 13 trata dos custos de transação com a emissão de DEBÊNTURES (recursos de terceiros) (Conta redutora do Passivo)”</b>.</p><p>Debênture é <b>título de dívida</b>: seus custos de emissão retificam o <b>Passivo</b>.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 08 — item 05 × item 13</i></p>",
47:"<p>Certo — é o <b>Exemplo 01</b> do CPC 08 no resumo: <b>D – Caixa (ou Bancos) R$ 7.600</b> (↑ Ativo) · <b>D – Gastos com a emissão de DEBÊNTURES R$ 2.400</b> (↓ Retificadora do Passivo) · <b>C – Debêntures a Pagar R$ 10.000</b> (↑ Passivo Exigível).</p><p>O crédito é pelo valor da dívida, <b>R$ 10.000</b>; os gastos ficam <b>destacados</b> na retificadora, e o caixa mostra o <b>líquido recebido</b>.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 08 — Exemplo 01 (debêntures)</i></p>",
48:"<p>Errado no valor do crédito. No <b>Exemplo 02</b> do resumo: <b>D – Caixa (ou Bancos) R$ 7.600</b> · <b>D – Gastos com a emissão de AÇÕES R$ 2.400</b> (↓ Retificadora do PL) · <b>C – Capital Social R$ 10.000</b> (↑ PL).</p><p>O capital social é creditado pelo <b>valor da emissão</b>, R$ 10.000. Os R$ 2.400 não reduzem a conta de capital: ficam <b>destacados</b> em conta redutora do PL. Estrutura idêntica à do exemplo das debêntures, só mudando o grupo retificado.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 08 — Exemplo 02 (ações)</i></p>",
49:"<p>Errado — é o quadro <b>ATENÇÃO!</b> do resumo: <b>“se a empresa ‘A’ investe (aplica seu dinheiro) em Debêntures da empresa ‘B’, então na empresa ‘A’ as Debêntures serão classificadas no Ativo. Nesse caso, trata-se de um investimento que rende juros em títulos de outra empresa”</b>.</p><p>O esquema do resumo em duas linhas: <b>empresa EMITE debêntures → registra no PASSIVO</b> · <b>empresa INVESTE em debêntures → registra no ATIVO</b>.</p><p class='fb-fonte'>Resumo 07 · <i>ATENÇÃO! — emite × investe em debêntures</i></p>",
50:"<p>Certo pela letra do <b>item 56 do CPC 26</b>: <b>“na situação em que a entidade apresente separadamente seus ativos e passivos circulantes e não circulantes, os impostos diferidos ativos (passivos) NÃO devem ser classificados como ativos circulantes (passivos circulantes)”</b>.</p><p>E o comentário do resumo completa: serão classificados no <b>Ativo Não Circulante</b> (se for um direito) ou no <b>Passivo Não Circulante</b> (se for uma obrigação), <b>“independentemente do prazo”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 26 — item 56 (impostos diferidos)</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"07", nome:"Passivo exigível, duplicatas descontadas, empréstimos e debêntures", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
