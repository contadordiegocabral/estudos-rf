/* Contabilidade Geral — Módulo 09: Balanço patrimonial, passivo contingente, provisão, PL e CPC 08 (modo direto) */
window.MOD = window.MOD || {};
window.MOD.contab09 = (function(){
"use strict";

var CARDS = [
  ["O que é o Balanço Patrimonial?","Uma demonstração <b>ESTÁTICA</b> — um <b>retrato do patrimônio</b> da entidade naquele determinado momento. Contém informações sobre a <b>posição patrimonial e financeira</b>."],
  ["Como se estrutura o Balanço Patrimonial?","<b>ATIVO:</b> Ativo Circulante · Ativo Não Circulante (<b>Realizável a Longo Prazo</b>, <b>Investimentos</b>, <b>Imobilizado</b>, <b>Intangível</b>). <b>PASSIVO:</b> Passivo Circulante · Passivo Não Circulante. <b>PL:</b> Capital Social, Reservas de Capital, Ajustes de Avaliação Patrimonial, Reservas de Lucros, (-) Ações em Tesouraria, (-) Prejuízos Acumulados."],
  ["Quais contas NÃO aparecem no Balanço Patrimonial?","As de <b>receitas</b> e de <b>despesas</b> — elas aparecem na <b>DRE</b>. É o <b>AVISO</b> do resumo, que lembra que o que se deve dominar é a <b>classificação das contas</b> apresentadas pela banca."],
  ["Quais são os três subgrupos do ativo circulante?","<b>1) Disponibilidades</b> · <b>2) Direitos Realizáveis no Curso do Exercício Social Subsequente</b> · <b>3) Aplicações de Recursos em Despesas do Exercício Seguinte</b>."],
  ["Quais contas de DISPONIBILIDADES mais aparecem em prova?","<b>Caixa e Equivalentes de Caixa</b> · <b>Bancos Conta Movimento</b> · <b>Numerário (dinheiro) em trânsito</b> · <b>Aplicações Financeiras de Liquidez Imediata</b>."],
  ["Quais contas compõem os direitos realizáveis no exercício seguinte?","<b>Duplicatas a Receber (Clientes)</b> · <b>(-) PECLD</b> · <b>Notas Promissórias a Receber</b> · <b>Empréstimos a Receber</b> · <b>Adiantamento a Fornecedores</b> · <b>Tributos/Impostos a Recuperar</b> · <b>Estoques</b> · <b>(-) Perdas Estimadas com Estoques</b> · <b>Investimento Temporário</b>."],
  ["Que contas ficam nas aplicações de recursos em despesas do exercício seguinte?","<b>Despesas Antecipadas</b> · <b>Aluguel pago antecipadamente</b> · <b>Prêmio de Seguros a Vencer</b>."],
  ["O que o ANC Realizável a Longo Prazo compreende?","Os <b>direitos realizáveis após o término do exercício seguinte</b>; e os <b>direitos derivados de vendas, adiantamentos ou empréstimos a coligadas, controladas, diretores, acionistas ou participantes no lucro</b> que <b>não constituírem negócios usuais</b> na exploração do objeto da companhia."],
  ["Onde se classificam Imposto Diferido e Crédito Fiscal?","No <b>ANC Realizável a Longo Prazo</b> — Imposto Diferido pelo <b>CPC 26, item 56</b>; Crédito Fiscal é o <b>Ativo Fiscal Diferido</b>."],
  ["Quais contas mais aparecem no subgrupo INVESTIMENTOS?","<b>Investimento Permanente</b> · <b>Investimentos em Controladas</b> · <b>Investimentos em Coligadas</b> · <b>Ágio por rentabilidade futura (Goodwill)</b> · <b>Propriedade para Investimento</b> · <b>Obras de Arte</b>."],
  ["O que é Propriedade para Investimento?","A propriedade mantida para <b>auferir aluguel</b> ou para <b>valorização do capital</b>, <b>ou para ambas</b> — <b>CPC 28, item 05</b>."],
  ["Quais contas mais aparecem no IMOBILIZADO?","<b>Máquinas e Equipamentos</b> · <b>Móveis e Utensílios</b> · <b>Terrenos</b> · <b>Veículos</b> · <b>(-) Depreciação Acumulada</b> · <b>Instalações</b> · <b>Benfeitoria em Propriedade de Terceiros</b>."],
  ["Quais contas mais aparecem no INTANGÍVEL?","<b>Marcas e Patentes</b> · <b>Softwares</b> · <b>Direitos autorais</b> · <b>Fundo de Comércio Adquirido</b> · <b>(-) Amortização Acumulada</b>."],
  ["Como se classifica o INVESTIMENTO, pelo esquema do resumo?","<b>Temporário de curto prazo</b> → <b>Ativo Circulante</b>. <b>Temporário de longo prazo</b> → <b>ANC Realizável a Longo Prazo</b>. <b>Permanente</b> (controladas, coligadas) → <b>ANC Investimentos</b>."],

  ["O que separa o Passivo Circulante do Passivo Não Circulante?","Apenas o <b>vencimento</b>: <b>no exercício seguinte</b> → <b>PC</b>; <b>após o exercício seguinte</b> → <b>PNC</b>. As contas listadas são <b>as mesmas</b> nos dois grupos."],
  ["Quais contas do PASSIVO EXIGÍVEL mais aparecem em prova?","<b>Fornecedores</b> · <b>Duplicatas a pagar</b> · <b>Contas a Pagar</b> · <b>Aluguéis a pagar</b> · <b>Salários a pagar</b> · <b>Dividendos a pagar</b> · <b>Empréstimos/Financiamentos</b> · <b>Tributos/Impostos a recolher</b> · <b>Provisão</b> · <b>Duplicatas Descontadas</b> · <b>Adiantamento de Clientes</b> · <b>Debêntures</b>."],
  ["Quais são as contas RETIFICADORAS do passivo exigível?","<b>(-) Juros Passivos a Transcorrer</b> e <b>(-) Encargos Financeiros a Transcorrer</b>."],
  ["Quando o empréstimo deve ser contabilizado?","<b>TOME NOTA:</b> a doutrina contábil determina que o empréstimo só deva ser contabilizado <b>quando do RECEBIMENTO dos recursos</b> pela empresa."],
  ["Empréstimo de R$ 10 milhões em 01/01/2022, R$ 5 milhões recebidos na data e o resto em 01/01/2023, pagamento semestral por 5 anos a partir de 01/01/2024 — qual o aumento do PC e do PNC na contratação?","<b>PC = ZERO</b> (o pagamento só começa em 2024) e <b>PNC = R$ 5 milhões</b> (só esse valor havia sido recebido)."],
  ["O que é passivo contingente e por que não é reconhecido? (CPC 25, item 13)","São <b>obrigações POSSÍVEIS</b> (ainda há de ser confirmado se existe obrigação presente) <b>OU obrigações PRESENTES</b> que não satisfazem os critérios de reconhecimento, porque <b>não é provável</b> a saída de recursos <b>OU</b> porque não pode ser feita <b>estimativa suficientemente confiável</b> do valor."],
  ["Exemplo do passivo contingente do resumo","Funcionário pede <b>R$ 10.000</b> por horas extras, julgamento em março do ano seguinte, advogados avaliam a perda como <b>POSSÍVEL</b> → o valor <b>NÃO deve ser reconhecido no BP</b>."],
  ["Como o CPC 25 define PROVISÃO?","<b>Passivo de prazo ou valor incertos</b> — <b>CPC 25, item 10</b>."],
  ["Por que as provisões são reconhecidas como passivo, e onde são divulgadas?","Porque são <b>obrigações presentes</b> e porque é <b>provável</b> que uma <b>saída de recursos</b> seja necessária para liquidar a obrigação — presumindo-se <b>estimativa confiável</b>. É <b>reconhecida no BP</b> e <b>divulgada em notas explicativas</b>. Exemplo: provisão para os <b>custos de descontinuidade de poço de petróleo</b>, na medida em que a entidade é obrigada a retificar danos já causados."],
  ["Empréstimo obtido de um dos sócios — onde se classifica?","<b>Diferentemente da regra do ativo</b>, a empresa <b>poderá classificar no Passivo Circulante</b>, a depender do prazo."],

  ["O que é o Patrimônio Líquido?","O <b>valor contábil pertencente aos acionistas (ou sócios)</b>, representado pela <b>diferença entre o valor dos Ativos e dos Passivos</b>. Também chamado de <b>Riqueza Líquida</b>: <b>PL = A – P</b>."],
  ["Como se chega ao Capital Integralizado?","<b>(+) Capital Social Subscrito</b> <b>(–) Capital a integralizar</b> <b>(=) Capital Integralizado</b>."],
  ["Quais são as RESERVAS DE CAPITAL?","<b>Ágio na emissão de ações</b> · <b>Alienação de Partes Beneficiárias</b> · <b>Alienação de Bônus de Subscrição</b>."],
  ["Quais são as RESERVAS DE LUCROS?","<b>Reserva Legal</b> · <b>Reserva Estatutária</b> · <b>Reserva para Contingências</b> · <b>Reserva de Lucros a Realizar</b> · <b>Reserva de Incentivos Fiscais</b>."],
  ["Quais contas do PL somam ou subtraem, e quais só subtraem?","<b>(+ ou -)</b> Ajuste de Avaliação Patrimonial e Ajuste Acumulado de Conversão. <b>(-)</b> Ações em Tesouraria e <b>(-)</b> Prejuízos Acumulados."],
  ["Lançamento do desconto de duplicatas de R$ 100.000 com juros de 12%","<b>D</b> Disponibilidades R$ 88.000 (AC) · <b>D</b> Juros a apropriar R$ 12.000 (<b>retificadora do passivo exigível</b>) · <b>C</b> Duplicatas Descontadas R$ 100.000 (<b>passivo exigível</b>)."],
  ["No desconto, a empresa baixa a conta Duplicatas a Receber?","<b>Não.</b> Ela <b>só será baixada após o pagamento pelo cliente ao banco</b>. A apropriação mensal dos juros é <b>D</b> Despesa de Juros R$ 1.000 · <b>C</b> Juros a apropriar R$ 1.000."],
  ["Cliente pagou × cliente NÃO pagou a duplicata ao banco","<b>Pagou:</b> D Duplicatas Descontadas · C <b>Duplicatas a Receber</b>. <b>Não pagou:</b> D Duplicatas Descontadas · C <b>Disponibilidades</b>."],
  ["Os dois lançamentos da despesa com salários de R$ 30.000","<b>Competência</b> (final do mês trabalhado): D Despesa com salários · C Salários a Pagar (passivo exigível). <b>Pagamento</b> (início do mês seguinte): D Salários a pagar · C Caixa/Bancos."],
  ["Os três lançamentos do adiantamento de salário de R$ 30.000","<b>1)</b> D Adiantamento (AC) · C Caixa/Bancos (AC). <b>2)</b> D Despesa com salários · C Salários a Pagar. <b>3)</b> D Salários a pagar · <b>C Adiantamento</b> (baixa do AC)."],
  ["Debêntures de R$ 10.000 com PRÊMIO de R$ 2.400 — qual o lançamento?","<b>D</b> Caixa R$ 12.400 · <b>C</b> Debêntures a Pagar R$ 10.000 · <b>C</b> Prêmio de Debêntures a Apropriar R$ 2.400 — ambos os créditos no <b>Passivo Exigível</b>."],
  ["Debêntures de R$ 10.000 com GASTOS de R$ 2.400 — qual o lançamento?","<b>D</b> Caixa R$ 7.600 · <b>D</b> Gastos com a emissão de Debêntures R$ 2.400 (<b>retificadora do passivo</b>) · <b>C</b> Debêntures a Pagar R$ 10.000."],
  ["O que é prêmio na emissão de debêntures, e quando vai ao resultado?","São valores recebidos <b>acima do valor nominal</b> determinado para a liquidação — um <b>excedente de capital</b>. Vai ao resultado <b>mensalmente</b>, pelo <b>Regime de Competência</b>: D Prêmio de Debêntures a Apropriar R$ 200 · C Prêmio de Debêntures R$ 200."],
  ["Ações de R$ 10.000 com ÁGIO de R$ 2.400 — qual o lançamento?","<b>D</b> Bancos R$ 12.400 · <b>C</b> Capital Social R$ 10.000 (PL) · <b>C</b> Ágio na Emissão de Ações — <b>Reserva de Capital</b> R$ 2.400 (PL)."],
  ["Ações de R$ 10.000 com GASTOS de R$ 2.400 — qual o lançamento?","<b>D</b> Caixa R$ 7.600 · <b>D</b> Gastos na emissão de Ações R$ 2.400 (<b>retificadora do PL</b>) · <b>C</b> Capital Social R$ 10.000."],
  ["O quadro do CPC 08, em uma linha","<b>AÇÕES</b> (item 05, títulos patrimoniais, capital próprio): gastos = <b>redutora do PL</b>, prêmios = <b>Reserva de Capital no PL</b>. <b>DEBÊNTURES</b> (item 13, títulos de dívida, recursos de terceiros): gastos = <b>redutora do Passivo</b>, prêmios = <b>Passivo Exigível</b>."]
];

var QS = [
  ["O balanço patrimonial é uma demonstração estática, um retrato do patrimônio da entidade naquele determinado momento, e contém informações sobre a posição patrimonial e financeira.","C","CEBRASPE","Conceito do resumo."],
  ["O balanço patrimonial é uma demonstração dinâmica, que evidencia o fluxo da riqueza gerada ao longo do período.","E","FCC","O resumo o define como demonstração <b>estática</b>."],
  ["As contas de receitas e de despesas integram o balanço patrimonial.","E","FGV","Aparecem na <b>DRE</b>, não no BP."],
  ["O ativo não circulante é composto por realizável a longo prazo, investimentos, imobilizado e intangível.","C","VUNESP","Quadro do BP."],
  ["São subgrupos do ativo circulante as disponibilidades, os direitos realizáveis no curso do exercício social subsequente e as aplicações de recursos em despesas do exercício seguinte.","C","CEBRASPE","Os três subgrupos do quadro."],
  ["Bancos conta movimento e numerário em trânsito são exemplos de disponibilidades.","C","FCC","Constam da lista de disponibilidades."],
  ["A PECLD e as perdas estimadas com estoques figuram no ativo circulante precedidas de sinal negativo, como contas redutoras.","C","FGV","Aparecem como (-) no quadro."],
  ["Tributos e impostos a recuperar são classificados no passivo circulante.","E","VUNESP","São <b>direito</b>: ativo circulante."],
  ["Adiantamento a fornecedores e adiantamento de clientes são ambos classificados no ativo circulante.","E","CEBRASPE","Adiantamento de <b>clientes</b> é passivo exigível."],
  ["O realizável a longo prazo compreende os direitos realizáveis após o término do exercício seguinte.","C","FCC","Observação 1 do resumo."],
  ["Os direitos derivados de empréstimos a diretores e acionistas que não constituírem negócios usuais na exploração do objeto da companhia são classificados no ativo circulante.","E","FGV","Vão para o <b>Realizável a Longo Prazo</b>."],
  ["Imposto diferido e crédito fiscal (ativo fiscal diferido) são classificados no ativo não circulante realizável a longo prazo.","C","VUNESP","Constam da lista do RLP."],
  ["Propriedade para investimento é a propriedade mantida para auferir aluguel ou para valorização do capital, ou para ambas.","C","CPC 28, item 05","Literalidade citada no resumo."],
  ["Benfeitoria em propriedade de terceiros é conta do intangível.","E","CEBRASPE","Consta da lista do <b>imobilizado</b>."],
  ["Marcas e patentes, softwares, direitos autorais e depreciação acumulada compõem o intangível.","E","FCC","No intangível a redutora é a <b>amortização</b> acumulada."],
  ["O investimento temporário de curto prazo é classificado no ativo circulante e o de longo prazo, no ativo não circulante realizável a longo prazo.","C","FGV","Esquema do INVESTIMENTO."],
  ["O investimento permanente em controladas e coligadas é classificado no ativo não circulante realizável a longo prazo.","E","VUNESP","Vai para o <b>ANC Investimentos</b>."],

  ["As contas relacionadas no passivo circulante e no passivo não circulante são as mesmas; o que define o grupo é o vencimento no exercício seguinte ou após ele.","C","CEBRASPE","As duas colunas do quadro são idênticas."],
  ["Duplicatas descontadas são classificadas no ativo circulante, como conta redutora de duplicatas a receber.","E","FCC","Constam do <b>passivo exigível</b>."],
  ["Juros passivos a transcorrer e encargos financeiros a transcorrer são contas retificadoras do passivo exigível.","C","FGV","Aparecem como (-) nas duas colunas."],
  ["A provisão é conta do patrimônio líquido.","E","VUNESP","Consta das listas de <b>PC e PNC</b>."],
  ["Debêntures e adiantamento de clientes integram o passivo exigível.","C","CEBRASPE","Constam das duas colunas."],
  ["A doutrina contábil determina que o empréstimo deve ser contabilizado na data da assinatura do contrato, ainda que os recursos não tenham sido recebidos.","E","FCC","Só quando do <b>recebimento</b> dos recursos."],
  ["Empréstimo de R$ 10 milhões contratado em 01/01/2022, com R$ 5 milhões recebidos na data e o restante em 01/01/2023 e pagamento em parcelas semestrais por cinco anos a partir de 01/01/2024: na contratação, o aumento do passivo circulante foi zero.","C","FGV","O pagamento só começa em 2024."],
  ["No mesmo exemplo, o aumento do passivo não circulante em 01/01/2022 foi de R$ 10 milhões.","E","VUNESP","Foi de <b>R$ 5 milhões</b> — só isso havia sido recebido."],
  ["No mesmo exemplo, o aumento do passivo não circulante em 01/01/2022 foi de R$ 5 milhões.","C","CEBRASPE","Valor efetivamente recebido na data."],
  ["Os passivos contingentes não são reconhecidos como passivo porque são obrigações possíveis ou obrigações presentes que não satisfazem os critérios de reconhecimento.","C","CPC 25, item 13","Esquema do resumo."],
  ["Ação trabalhista de R$ 10.000 por horas extras não pagas, com julgamento previsto para março do ano seguinte e chance de perda avaliada pelos advogados como possível: o valor deve ser reconhecido no balanço patrimonial.","E","FCC","Obrigação <b>possível</b> — não se reconhece."],
  ["Uma obrigação presente para a qual não se possa fazer estimativa suficientemente confiável do valor deve ser reconhecida como provisão.","E","FGV","É <b>passivo contingente</b>, não reconhecido."],
  ["O CPC 25 define provisão como passivo de prazo ou valor incertos.","C","CPC 25, item 10","Literalidade citada no resumo."],
  ["A provisão é reconhecida no balanço patrimonial e divulgada em notas explicativas.","C","VUNESP","Quadro da provisão."],
  ["As provisões são reconhecidas como passivo porque são obrigações presentes e porque é provável que uma saída de recursos que incorporam benefícios econômicos seja necessária para liquidar a obrigação.","C","CEBRASPE","Observação 1 do resumo."],
  ["Assim como ocorre no ativo, o empréstimo obtido de um dos sócios da empresa deve ser obrigatoriamente classificado no passivo não circulante.","E","FCC","<b>Diferentemente</b> do ativo: pode ir ao PC, conforme o prazo."],

  ["O patrimônio líquido corresponde ao valor contábil pertencente aos acionistas ou sócios e é representado pela diferença entre o valor dos ativos e dos passivos.","C","FGV","Conceito do resumo."],
  ["O patrimônio líquido, também conhecido por riqueza líquida, corresponde à soma dos ativos e dos passivos.","E","VUNESP","<b>PL = A – P</b>, e não A + P."],
  ["O capital social subscrito, deduzido do capital a integralizar, resulta no capital integralizado.","C","CEBRASPE","Quadro do PL."],
  ["Ágio na emissão de ações, alienação de partes beneficiárias e alienação de bônus de subscrição são reservas de lucros.","E","FCC","São <b>reservas de capital</b>."],
  ["Reserva legal, reserva estatutária, reserva para contingências, reserva de lucros a realizar e reserva de incentivos fiscais são reservas de lucros.","C","FGV","Quadro do PL."],
  ["A reserva legal é constituída com 5% do lucro líquido do exercício e não pode exceder 20% do capital social.","C","Lei 6.404, art. 193","Percentuais fora do resumo."],
  ["Ações em tesouraria e prejuízos acumulados são contas redutoras do patrimônio líquido.","C","VUNESP","Aparecem com (-) no quadro."],
  ["Na operação de desconto de duplicatas de R$ 100.000 com juros de 12%, registra-se a débito de disponibilidades R$ 88.000, a débito de juros a apropriar R$ 12.000 e a crédito de duplicatas descontadas R$ 100.000.","C","CEBRASPE","Lançamento 2 do resumo."],
  ["Na operação de desconto de duplicatas, a empresa efetua de imediato a baixa da conta duplicatas a receber.","E","FCC","Só após o <b>pagamento do cliente ao banco</b>."],
  ["Quando o cliente paga a duplicata ao banco, o lançamento é a débito de duplicatas descontadas e a crédito de disponibilidades.","E","FGV","Nesse caso o crédito é em <b>duplicatas a receber</b>."],
  ["A despesa com salários é reconhecida ao final do mês trabalhado, a débito de despesa com salários e a crédito de salários a pagar.","C","VUNESP","Lançamento 1 do resumo."],
  ["No adiantamento de salário de R$ 30.000, o pagamento dos salários no mês seguinte é registrado a débito de salários a pagar e a crédito de adiantamento.","C","CEBRASPE","Lançamento 3 do resumo."],
  ["Emitidas debêntures de R$ 10.000 com prêmio de R$ 2.400, o prêmio de debêntures a apropriar é registrado no patrimônio líquido.","E","FCC","É <b>passivo exigível</b>."],
  ["Emitidas ações de R$ 10.000 com gastos de colocação de R$ 2.400, os gastos na emissão de ações são registrados como conta retificadora do patrimônio líquido.","C","FGV","Exemplo 02 das ações."],
  ["Segundo o CPC 08, os prêmios recebidos na emissão de ações são contabilizados no passivo exigível.","E","CPC 08, item 05","Vão para a <b>reserva de capital</b>, no PL."],
  ["Segundo o CPC 08, os gastos com a emissão de debêntures são conta redutora do passivo e os prêmios recebidos na emissão de debêntures são contabilizados no passivo exigível.","C","CPC 08, item 13","Coluna das debêntures no quadro."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("O balanço patrimonial e as contas que mais aparecem em prova",
      '<div class="box"><span class="bl">O que é o BP</span>'+
      '<p>Demonstração <b>ESTÁTICA</b> — um <b>retrato do patrimônio</b> da entidade naquele determinado momento. Traz informações sobre a <b>posição patrimonial e financeira</b>.</p>'+
      '<p><b>AVISO do resumo:</b> ao resolver questão de BP, o que se deve dominar é a <b>classificação das contas</b> apresentadas pela banca. E atenção: <b>receitas e despesas não aparecem no BP</b>, mas sim na <b>DRE</b>.</p></div>'+
      '<div class="box"><span class="bl">A estrutura</span>'+
      '<div class="tree"><div class="leaf"><b>ATIVO:</b> Ativo Circulante · Ativo Não Circulante (Realizável a Longo Prazo · Investimentos · Imobilizado · Intangível)</div>'+
      '<div class="leaf"><b>PASSIVO:</b> Passivo Circulante · Passivo Não Circulante</div>'+
      '<div class="leaf"><b>PATRIMÔNIO LÍQUIDO:</b> Capital Social · Reservas de Capital · Ajustes de Avaliação Patrimonial · Reservas de Lucros · (-) Ações em Tesouraria · (-) Prejuízos Acumulados</div></div></div>'+
      '<div class="box"><span class="bl">Ativo circulante — os três subgrupos</span>'+
      '<p><b>1) Disponibilidades:</b> Caixa e Equivalentes de Caixa · Bancos Conta Movimento · Numerário (dinheiro) em trânsito · Aplicações Financeiras de Liquidez Imediata.</p>'+
      '<p><b>2) Direitos Realizáveis no Curso do Exercício Social Subsequente:</b> Duplicatas a Receber (Clientes) · <b>(-) PECLD</b> · Notas Promissórias a Receber · Empréstimos a Receber · Adiantamento a Fornecedores · Tributos/Impostos a Recuperar · Estoques · <b>(-) Perdas Estimadas com Estoques</b> · Investimento Temporário.</p>'+
      '<p><b>3) Aplicações de Recursos em Despesas do Exercício Seguinte:</b> Despesas Antecipadas · Aluguel pago antecipadamente · Prêmio de Seguros a Vencer.</p></div>'+
      '<div class="box"><span class="bl">Ativo não circulante — os quatro subgrupos</span>'+
      '<p><b>Realizável a Longo Prazo:</b> Duplicatas a receber a LP · Adiantamento a Fornecedores a LP · Seguros a vencer a LP · Despesas Antecipadas de LP · Empréstimo para Coligada/Controlada · Empréstimo para diretores/acionistas · <b>Imposto Diferido (CPC 26, item 56)</b> · Crédito Fiscal (Ativo Fiscal Diferido) · Investimento Temporário.</p>'+
      '<p><b>Investimentos:</b> Investimento Permanente · Investimentos em Controladas · Investimentos em Coligadas · Ágio por rentabilidade futura (Goodwill) · Propriedade para Investimento · Obras de Arte.</p>'+
      '<p><b>Imobilizado:</b> Máquinas e Equipamentos · Móveis e Utensílios · Terrenos · Veículos · <b>(-) Depreciação Acumulada</b> · Instalações · Benfeitoria em Propriedade de Terceiros.</p>'+
      '<p><b>Intangível:</b> Marcas e Patentes · Softwares · Direitos autorais · Fundo de Comércio Adquirido · <b>(-) Amortização Acumulada</b>.</p></div>'+
      '<div class="box tip"><span class="bl">As duas OBSERVAÇÕES do resumo</span>'+
      '<p><b>1)</b> O RLP compreende os <b>direitos realizáveis após o término do exercício seguinte</b>; e os <b>direitos derivados de vendas, adiantamentos ou empréstimos a sociedades coligadas ou controladas, diretores, acionistas ou participantes no lucro</b> da companhia, que <b>não constituírem negócios usuais</b> na exploração do objeto da companhia.</p>'+
      '<p><b>2)</b> <b>CPC 28, item 05:</b> propriedade para investimento é a propriedade mantida para <b>auferir aluguel</b> ou para <b>valorização do capital</b>, <b>ou para ambas</b>.</p></div>'+
      '<div class="box trap"><span class="bl">O esquema do INVESTIMENTO</span>'+
      '<p><b>TEMPORÁRIO</b> — se for de <b>curto prazo</b> → <b>ATIVO CIRCULANTE</b>; se for de <b>longo prazo</b> → <b>ANC REALIZÁVEL A LONGO PRAZO</b>.</p>'+
      '<p><b>PERMANENTE</b> (exemplos: controladas, coligadas) → <b>ANC INVESTIMENTOS</b>.</p>'+
      '<p class="mn"><em>Investimento temporário é a única conta que aparece nas duas listas: AC e RLP. O que decide é o prazo.</em></p></div>')
  ],
  V2:[
    sl("Passivo exigível, passivo contingente e provisão",
      '<div class="box"><span class="bl">Passivo exigível — o que muda é só o vencimento</span>'+
      '<p>No quadro do resumo, as colunas do <b>Passivo Circulante</b> e do <b>Passivo Não Circulante</b> trazem <b>exatamente as mesmas contas</b>. A diferença está no pé da tabela: <b>PC quando vencerem no exercício seguinte</b> · <b>PNC quando vencerem após o exercício seguinte</b>.</p></div>'+
      '<div class="box"><span class="bl">As contas</span>'+
      '<div class="chips"><span class="chip">Fornecedores</span><span class="chip">Duplicatas a pagar</span><span class="chip">Contas a Pagar</span><span class="chip">Aluguéis a pagar</span><span class="chip">Salários a pagar</span><span class="chip">Dividendos a pagar</span><span class="chip">Empréstimos / Financiamentos</span><span class="chip">Tributos a recolher</span><span class="chip">Provisão</span><span class="chip">Duplicatas Descontadas</span><span class="chip">Adiantamento de Clientes</span><span class="chip">Debêntures</span></div>'+
      '<p><b>Retificadoras:</b> <b>(-) Juros Passivos a Transcorrer</b> e <b>(-) Encargos Financeiros a Transcorrer</b>.</p></div>'+
      '<div class="box trap"><span class="bl">TOME NOTA! — o empréstimo entra com o dinheiro</span>'+
      '<p>A doutrina contábil determina que o empréstimo <b>só deva ser contabilizado quando do RECEBIMENTO dos recursos</b> pela empresa.</p>'+
      '<p><b>EXEMPLO:</b> em <b>01/01/2022</b> a empresa tomou empréstimo de <b>R$ 10 milhões</b>, sendo <b>R$ 5 milhões recebidos em 01/01/2022</b> e o restante em <b>01/01/2023</b>. O pagamento será em <b>parcelas semestrais ao longo de cinco anos, a partir de 01/01/2024</b>. Na data da contratação:</p>'+
      '<ul><li><b>Passivo circulante: ZERO</b> — o pagamento só começa em 2024.</li>'+
      '<li><b>Passivo não circulante: R$ 5 milhões</b> — só esse valor havia sido recebido.</li></ul></div>'+
      '<div class="box"><span class="bl">Passivo contingente — CPC 25, item 13</span>'+
      '<p><b>NÃO</b> são reconhecidos como passivo porque são:</p>'+
      '<ul><li><b>OBRIGAÇÕES POSSÍVEIS</b> — ainda há de ser confirmado se a entidade tem ou não uma <b>obrigação presente</b> que possa conduzir a uma saída de recursos que incorporam benefícios econômicos; <b>OU</b></li>'+
      '<li><b>OBRIGAÇÕES PRESENTES</b> que não satisfazem os critérios de reconhecimento do CPC 25 porque <b>não é provável</b> que seja necessária saída de recursos, <b>ou</b> porque <b>não pode ser feita estimativa suficientemente confiável</b> do valor da obrigação.</li></ul>'+
      '<p><b>EXEMPLO:</b> funcionário entra na justiça pedindo <b>R$ 10.000</b> por horas extras não pagas; julgamento em março do ano seguinte; advogados consideram as chances de perda <b>POSSÍVEIS</b>. Os R$ 10.000 <b>NÃO devem ser reconhecidos no BP</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Provisão — CPC 25, itens 10, 14 e 19</span>'+
      '<p><b>Definição (item 10):</b> <b>passivo de prazo ou valor incertos</b>.</p>'+
      '<p>É reconhecida como passivo porque <b>é obrigação presente</b>, porque <b>é provável que seja necessária uma saída de recursos</b> e porque se pode fazer <b>estimativa confiável</b> do valor. É <b>reconhecida no BP e divulgada em notas explicativas</b>.</p>'+
      '<p><b>Exemplo:</b> provisão para os <b>custos de descontinuidade de poço de petróleo</b>, na medida em que a entidade é obrigada a retificar danos já causados.</p>'+
      '<p><b>Observação 2:</b> <b>diferentemente da regra do ativo</b>, se a empresa pegar empréstimo com um dos sócios, <b>poderá classificar no Passivo Circulante</b>, a depender do prazo.</p></div>')
  ],
  V3:[
    sl("Patrimônio líquido, os principais lançamentos e o CPC 08",
      '<div class="box"><span class="bl">Patrimônio líquido</span>'+
      '<p>Corresponde ao <b>valor contábil pertencente aos acionistas (ou sócios)</b> e é representado pela <b>diferença entre o valor dos Ativos e dos Passivos</b>.</p>'+
      '<p><b>ATENÇÃO!</b> O PL, também conhecido por <b>Riqueza Líquida</b>, é o montante dos ativos deduzido dos passivos: <b>PL = A – P</b>.</p></div>'+
      '<div class="box"><span class="bl">A estrutura do PL</span>'+
      '<ul><li><b>(+) Capital Social Subscrito</b> → <b>(–) Capital a integralizar</b> → <b>(=) Capital Integralizado</b>.</li>'+
      '<li><b>(+) Reservas de Capital:</b> Ágio na emissão de ações · Alienação de Partes Beneficiárias · Alienação de Bônus de Subscrição.</li>'+
      '<li><b>(+) Reservas de Lucros:</b> Reserva Legal · Reserva Estatutária · Reserva para Contingências · Reserva de Lucros a Realizar · Reserva de Incentivos Fiscais.</li>'+
      '<li><b>(+ ou -)</b> Ajuste de Avaliação Patrimonial · <b>(+ ou -)</b> Ajuste Acumulado de Conversão.</li>'+
      '<li><b>(-)</b> Ações em Tesouraria · <b>(-)</b> Prejuízos Acumulados.</li></ul></div>'+
      '<div class="box"><span class="bl">Desconto de duplicatas</span>'+
      '<p><b>1) Venda a prazo:</b> D Duplicatas a Receber (Clientes) R$ 100.000 (ativo) · C Receita de Vendas R$ 100.000 (resultado).</p>'+
      '<p><b>2) Desconto com juros de 12%:</b> D Disponibilidades R$ 88.000 (AC) · D Juros a apropriar R$ 12.000 (<b>retificadora do passivo exigível</b>) · C Duplicatas Descontadas R$ 100.000 (<b>passivo exigível</b>).</p>'+
      '<p><b>3) Apropriação mensal dos juros:</b> D Despesa de Juros R$ 1.000 (resultado) · C Juros a apropriar R$ 1.000.</p>'+
      '<p><b>OBS.:</b> a empresa <b>não baixa duplicatas a receber</b> no lançamento 2 — ela <b>só será baixada após o pagamento pelo cliente ao banco</b>.</p>'+
      '<p><b>Cliente pagou ao banco:</b> D Duplicatas Descontadas · C <b>Duplicatas a Receber</b>. <b>Cliente NÃO pagou:</b> D Duplicatas Descontadas · C <b>Disponibilidades</b>.</p></div>'+
      '<div class="box"><span class="bl">Salários e adiantamento de salário</span>'+
      '<p><b>Despesa com salários — competência</b> (final do mês trabalhado): D Despesa com salários R$ 30.000 (resultado) · C Salários a Pagar R$ 30.000 (passivo exigível). <b>Pagamento</b> (início do mês seguinte): D Salários a pagar · C Caixa/Bancos.</p>'+
      '<p><b>Adiantamento de salário:</b> <b>1)</b> D Adiantamento R$ 30.000 (AC) · C Caixa/Bancos R$ 30.000 (AC). <b>2)</b> D Despesa com salários · C Salários a Pagar. <b>3)</b> D Salários a pagar · <b>C Adiantamento</b> (baixa do AC) — o caixa já saiu no lançamento 1.</p></div>'+
      '<div class="box"><span class="bl">Debêntures e ações — os quatro lançamentos</span>'+
      '<p><b>Debêntures com PRÊMIO de R$ 2.400 sobre R$ 10.000:</b> D Caixa R$ 12.400 · C Debêntures a Pagar R$ 10.000 · C Prêmio de Debêntures a Apropriar R$ 2.400 — os dois créditos no <b>passivo exigível</b>.</p>'+
      '<p><b>Debêntures com GASTOS de R$ 2.400:</b> D Caixa R$ 7.600 · D Gastos com a emissão de Debêntures R$ 2.400 (<b>retificadora do passivo</b>) · C Debêntures a Pagar R$ 10.000.</p>'+
      '<p><b>Ações com ÁGIO de R$ 2.400:</b> D Bancos R$ 12.400 · C Capital Social R$ 10.000 (PL) · C Ágio na Emissão de Ações — <b>Reserva de Capital</b> R$ 2.400 (PL).</p>'+
      '<p><b>Ações com GASTOS de R$ 2.400:</b> D Caixa R$ 7.600 · D Gastos na emissão de Ações R$ 2.400 (<b>retificadora do PL</b>) · C Capital Social R$ 10.000.</p>'+
      '<p><b>ATENÇÃO!</b> O prêmio na emissão de debêntures <b>não vai de imediato ao resultado</b>: vai <b>mensalmente</b>, pelo <b>Regime de Competência</b> — D Prêmio de Debêntures a Apropriar R$ 200 (↓ passivo) · C Prêmio de Debêntures R$ 200 (↑ resultado).</p></div>'+
      '<div class="box trap"><span class="bl">O quadro do CPC 08 — custos de transação e prêmios</span>'+
      '<p><b>AÇÕES (item 05)</b> são <b>títulos patrimoniais</b> — captação de recursos <b>para o capital próprio</b>. Gastos com a emissão de ações = <b>conta REDUTORA DO PL</b>. Prêmios recebidos na emissão de ações = <b>Reserva de Capital → PL</b>.</p>'+
      '<p><b>DEBÊNTURES (item 13)</b> são <b>títulos de dívida</b> — captação de recursos <b>de terceiros</b>. Gastos com a emissão de debêntures = <b>conta redutora do PASSIVO</b>. Prêmios recebidos na emissão de debêntures = <b>PASSIVO EXIGÍVEL</b>.</p>'+
      '<p class="mn"><em>Gasto sempre reduz o grupo que captou; prêmio sempre fica no grupo que captou — PL nas ações, passivo nas debêntures.</em></p></div>')
  ]
};

var EX = {
S1:{t:"mc", instr:"O que o resumo diz sobre a natureza do balanço patrimonial?",
  options:["É uma demonstração estática — um retrato do patrimônio naquele momento",
           "É uma demonstração dinâmica, que mede o fluxo do período",
           "É uma demonstração de fluxos de caixa por natureza",
           "É uma demonstração exclusivamente financeira, sem informação patrimonial"],
  answer:0,
  why:"Ele contém informações sobre a posição patrimonial e financeira da entidade."},

S2:{t:"sort", instr:"Classifique cada conta no grupo do ativo",
  buckets:["Ativo Circulante","Ativo Não Circulante"],
  items:[["Bancos Conta Movimento",0],["Numerário (dinheiro) em trânsito",0],
         ["Tributos/Impostos a Recuperar",0],["Prêmio de Seguros a Vencer",0],
         ["Imposto Diferido (CPC 26, item 56)",1],["Obras de Arte",1],
         ["Benfeitoria em Propriedade de Terceiros",1],["Fundo de Comércio Adquirido",1]],
  why:"As quatro primeiras constam das listas do AC; as quatro últimas, das do ANC."},

S3:{t:"multi", instr:"Marque as contas que o resumo lista como DISPONIBILIDADES",
  options:["Caixa e Equivalentes de Caixa","Bancos Conta Movimento",
           "Numerário (dinheiro) em trânsito","Aplicações Financeiras de Liquidez Imediata",
           "Duplicatas a Receber (Clientes)","Estoques","Despesas Antecipadas"],
  answers:[0,1,2,3],
  why:"As três últimas estão nos subgrupos 2 e 3 do ativo circulante."},

S4:{t:"sort", instr:"Distribua as contas nos quatro subgrupos do ativo não circulante",
  buckets:["Realizável a Longo Prazo","Investimentos","Imobilizado","Intangível"],
  items:[["Empréstimo para diretores, acionistas",0],["Crédito Fiscal (Ativo Fiscal Diferido)",0],
         ["Investimentos em Coligadas",1],["Ágio por rentabilidade futura (Goodwill)",1],
         ["Propriedade para Investimento",1],
         ["Móveis e Utensílios",2],["(-) Depreciação Acumulada",2],
         ["Marcas e Patentes",3],["(-) Amortização Acumulada",3]],
  why:"Depreciação acumulada é do imobilizado; amortização acumulada, do intangível."},

S5:{t:"gap", instr:"Complete a observação 1 do resumo",
  before:"O ANC Realizável a Longo Prazo compreende os direitos realizáveis ",
  after:" o término do exercício seguinte.",
  options:["após","até","no curso de"], answer:0,
  why:"E também os direitos derivados de vendas, adiantamentos ou empréstimos a coligadas, controladas, diretores, acionistas ou participantes no lucro que não constituírem negócios usuais."},

S6:{t:"mc", instr:"Pelo CPC 28, item 05, propriedade para investimento é a propriedade mantida para:",
  options:["Auferir aluguel ou para valorização do capital, ou para ambas",
           "Uso na produção ou no fornecimento de mercadorias",
           "Venda no curso ordinário dos negócios",
           "Uso administrativo pela própria entidade"],
  answer:0,
  why:"É a única definição de CPC 28 que o resumo traz, na observação 2."},

S7:{t:"sort", instr:"Pelo esquema do INVESTIMENTO, onde entra cada caso?",
  buckets:["Ativo Circulante","ANC Realizável a Longo Prazo","ANC Investimentos"],
  items:[["Investimento temporário de curto prazo",0],
         ["Investimento temporário de longo prazo",1],
         ["Investimento permanente em controladas",2],
         ["Investimento permanente em coligadas",2]],
  why:"O temporário se divide pelo prazo; o permanente vai sempre para Investimentos."},

S8:{t:"multi", instr:"Marque as contas que o resumo lista no PASSIVO EXIGÍVEL",
  options:["Fornecedores","Salários a pagar","Dividendos a pagar","Provisão",
           "Duplicatas Descontadas","Adiantamento de Clientes","Debêntures",
           "Adiantamento a Fornecedores","Tributos/Impostos a Recuperar"],
  answers:[0,1,2,3,4,5,6],
  why:"Adiantamento a fornecedores e tributos a recuperar são contas do ativo."},

S9:{t:"gap", instr:"Complete o critério do quadro do passivo exigível",
  before:"As contas vão para o passivo circulante quando vencerem ",
  after:", e para o passivo não circulante quando vencerem após ele.",
  options:["no exercício seguinte","no próprio exercício","em até três meses"], answer:0,
  why:"As duas colunas do quadro trazem as mesmas contas — só o vencimento decide."},

S10:{t:"mc", instr:"Empréstimo de R$ 10 milhões em 01/01/2022, com R$ 5 milhões recebidos na data e o resto em 01/01/2023, pagamento em parcelas semestrais por cinco anos a partir de 01/01/2024. Qual o aumento em 01/01/2022?",
  options:["PC zero e PNC R$ 5 milhões","PC zero e PNC R$ 10 milhões",
           "PC R$ 5 milhões e PNC R$ 5 milhões","PC R$ 10 milhões e PNC zero"],
  answer:0,
  why:"O empréstimo só se contabiliza quando do recebimento, e o pagamento só começa em 2024."},

S11:{t:"sort", instr:"Reconhece no BP ou não reconhece?",
  buckets:["Reconhece (provisão)","Não reconhece (passivo contingente)"],
  items:[["Obrigação presente, saída de recursos provável e estimativa confiável",0],
         ["Custos de descontinuidade de poço de petróleo por danos já causados",0],
         ["Obrigação possível, ainda a confirmar se existe obrigação presente",1],
         ["Obrigação presente cuja saída de recursos não é provável",1],
         ["Obrigação presente sem estimativa suficientemente confiável do valor",1],
         ["Ação trabalhista de R$ 10.000 com chance de perda possível",1]],
  why:"CPC 25, item 13 — as duas hipóteses de passivo contingente."},

S12:{t:"mc", instr:"Como o CPC 25, item 10, define provisão?",
  options:["Passivo de prazo ou valor incertos","Obrigação possível de valor estimável",
           "Passivo de prazo certo e valor incerto","Retificadora do ativo de valor incerto"],
  answer:0,
  why:"Definição literal citada pelo resumo."},

S13:{t:"multi", instr:"Marque o que caracteriza a PROVISÃO no quadro do resumo",
  options:["É uma obrigação presente",
           "É provável que seja necessária uma saída de recursos",
           "Uma estimativa confiável deve ser realizada acerca do valor da obrigação",
           "É reconhecida no BP e divulgada em notas explicativas",
           "É uma obrigação apenas possível",
           "Não é reconhecida no balanço patrimonial"],
  answers:[0,1,2,3],
  why:"As duas últimas descrevem o passivo contingente, não a provisão."},

S14:{t:"sort", instr:"Reserva de capital ou reserva de lucros?",
  buckets:["Reserva de Capital","Reserva de Lucros"],
  items:[["Ágio na emissão de ações",0],["Alienação de Partes Beneficiárias",0],
         ["Alienação de Bônus de Subscrição",0],
         ["Reserva Legal",1],["Reserva Estatutária",1],
         ["Reserva para Contingências",1],["Reserva de Lucros a Realizar",1],
         ["Reserva de Incentivos Fiscais",1]],
  why:"O resumo separa as duas listas no quadro do PL."},

S15:{t:"multi", instr:"Marque as contas que REDUZEM o patrimônio líquido no quadro do resumo",
  options:["(–) Capital a integralizar","(-) Ações em Tesouraria","(-) Prejuízos Acumulados",
           "Capital Social Subscrito","Reservas de Capital","Reservas de Lucros"],
  answers:[0,1,2],
  why:"O capital a integralizar é deduzido do subscrito para chegar ao integralizado."},

S16:{t:"wordbank", instr:"Monte o lançamento do desconto de duplicatas de R$ 100.000 com juros de 12%",
  target:["D","Disponibilidades","88.000","D","Juros","a","apropriar","12.000","C","Duplicatas","Descontadas","100.000"],
  extra:["Duplicatas a Receber","Receita de Vendas","Despesa de Juros"],
  why:"Duplicatas a receber não é baixada aqui — só após o pagamento pelo cliente ao banco."},

S17:{t:"match", instr:"Correlacione cada situação ao seu lançamento",
  pairs:[["Cliente pagou a duplicata ao banco","D Duplicatas Descontadas · C Duplicatas a Receber"],
         ["Cliente NÃO pagou a duplicata","D Duplicatas Descontadas · C Disponibilidades"],
         ["Competência da despesa com salários","D Despesa com salários · C Salários a Pagar"],
         ["Pagamento dos salários após adiantamento","D Salários a pagar · C Adiantamento"],
         ["Apropriação mensal do prêmio de debêntures","D Prêmio de Debêntures a Apropriar · C Prêmio de Debêntures"]],
  why:"Nos dois desfechos do desconto o débito é o mesmo; o que muda é o crédito — duplicatas a receber se o cliente pagou, disponibilidades se não pagou."},

S18:{t:"match", instr:"Correlacione, pelo quadro do CPC 08",
  pairs:[["Gastos com a emissão de AÇÕES","Conta redutora do PL"],
         ["Prêmios recebidos na emissão de AÇÕES","Reserva de Capital, no PL"],
         ["Gastos com a emissão de DEBÊNTURES","Conta redutora do Passivo"],
         ["Prêmios recebidos na emissão de DEBÊNTURES","Passivo Exigível"]],
  why:"O gasto reduz o grupo que captou e o prêmio fica no grupo que captou: PL nas ações (títulos patrimoniais), passivo nas debêntures (títulos de dívida)."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Contabilidade Geral 09","https://www.tecconcursos.com.br/s/Q2eCNN","Q2eCNN"],
  ["Caderno FCC — Contabilidade Geral 09","https://www.tecconcursos.com.br/s/Q2eCNd","Q2eCNd"],
  ["Caderno FGV — Contabilidade Geral 09","https://www.tecconcursos.com.br/s/Q294o9","Q294o9"],
  ["Caderno VUNESP — Contabilidade Geral 09","https://www.tecconcursos.com.br/s/Q2eCNx","Q2eCNx"]
];
var TECNOTA = "O próprio resumo avisa onde a banca ganha dinheiro: na CLASSIFICAÇÃO DAS CONTAS. Três fronteiras respondem pela maioria dos erros. Primeira, a conta que troca de grupo conforme o prazo ou a natureza: investimento temporário (curto prazo no AC, longo prazo no RLP) contra investimento permanente em controladas e coligadas (sempre ANC Investimentos), depreciação acumulada (imobilizado) contra amortização acumulada (intangível), e adiantamento A fornecedores (ativo) contra adiantamento DE clientes (passivo exigível). Segunda, a linha entre passivo contingente e provisão: obrigação POSSÍVEL, ou presente sem saída provável de recursos, ou presente sem estimativa confiável, não é reconhecida — é o exemplo dos R$ 10.000 da ação trabalhista com perda possível; provisão é passivo de prazo ou valor incertos (CPC 25, item 10), reconhecida no BP e divulgada em notas explicativas. Terceira, o CPC 08: o gasto sempre REDUZ o grupo que captou (redutora do PL nas ações, redutora do passivo nas debêntures) e o prêmio sempre FICA no grupo que captou (reserva de capital no PL nas ações, passivo exigível nas debêntures). Fecha com o TOME NOTA do empréstimo: o passivo nasce com o recebimento do dinheiro, e não com a assinatura — por isso o exemplo dos R$ 10 milhões dá PC zero e PNC R$ 5 milhões.";

var UNITS = [
  {n:1, title:"Balanço patrimonial e classificação das contas", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"O BP, os grupos e as contas de prova",      xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · o BP e seus grupos",             xp:25, data:["S1","S2","T0","T1","T2","T3","T4","T5"]},
    {id:"K3", type:"drill",  title:"Praticar · ativo circulante e RLP",         xp:25, data:["S3","S4","S5","T6","T7","T8","T9","T10"]},
    {id:"K4", type:"drill",  title:"Praticar · investimentos e intangível",     xp:25, data:["S6","S7","T11","T12","T13","T14","T15","T16"]},
    {id:"K5", type:"flash",  title:"Flashcards · BP e classificação das contas",xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13]}
  ]},
  {n:2, title:"Passivo exigível, contingente e provisão", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Passivo exigível, passivo contingente e provisão", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · contas do passivo exigível",     xp:25, data:["S8","S9","T17","T18","T19","T20","T21"]},
    {id:"K8", type:"drill",  title:"Praticar · o empréstimo e o recebimento",   xp:25, data:["S10","S11","T22","T23","T24","T25","T26"]},
    {id:"K9", type:"drill",  title:"Praticar · contingente × provisão",         xp:25, data:["S12","S13","T27","T28","T29","T30","T31","T32"]},
    {id:"K10",type:"flash",  title:"Flashcards · passivo, contingente e provisão", xp:15, data:[14,15,16,17,18,19,20,21,22,23]}
  ]},
  {n:3, title:"Patrimônio líquido, lançamentos e CPC 08", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"PL, os principais lançamentos e o CPC 08",  xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · composição do PL",               xp:25, data:["S14","S15","T33","T34","T35","T36","T37","T38","T39"]},
    {id:"K13",type:"drill",  title:"Praticar · desconto de duplicatas e salários", xp:25, data:["S16","S17","T40","T41","T42","T43","T44"]},
    {id:"K14",type:"drill",  title:"Praticar · debêntures, ações e CPC 08",     xp:25, data:["S18","T45","T46","T47","T48"]},
    {id:"K15",type:"flash",  title:"Flashcards · PL, lançamentos e CPC 08",     xp:15, data:[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                   xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                     xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                    xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 09 de Contabilidade (Radegondes) ---------- */
var COM={
0:"<p>Certo, é a abertura do resumo: o BP <b>“é uma demonstração ESTÁTICA, ou seja, um retrato do patrimônio da entidade naquele determinado momento”</b>.</p><p>E ele completa: <b>“ele contém informações sobre a posição patrimonial e financeira da entidade”</b> — as duas palavras que a banca gosta de trocar por uma só.</p><p class='fb-fonte'>Resumo 09 · <i>Balanço Patrimonial (BP)</i></p>",
1:"<p>Errado por uma palavra: o resumo define o BP como demonstração <b>ESTÁTICA</b>, não dinâmica.</p><p>A imagem que ele usa é a do <b>retrato</b> — o patrimônio naquele determinado momento. Fluxo de período é outra demonstração; o BP é a foto.</p><p class='fb-fonte'>Resumo 09 · <i>Balanço Patrimonial (BP)</i></p>",
2:"<p>Errado. É o <b>AVISO</b> expresso do resumo: <b>“lembrando que as contas de receitas e despesas NÃO aparecem no BP, mas sim na DRE”</b>.</p><p>Guarde o par: o BP mostra <b>ativo, passivo e PL</b>; receita e despesa são da <b>DRE</b>. Quando a banca joga uma conta de resultado no meio do quadro de contas, é esse o teste.</p><p class='fb-fonte'>Resumo 09 · <i>Balanço Patrimonial — Aviso</i></p>",
3:"<p>Certo, é exatamente o quadro do BP no resumo: sob o <b>Ativo Não Circulante</b> ele lista <b>Realizável a Longo Prazo</b>, <b>Investimentos</b>, <b>Imobilizado</b> e <b>Intangível</b>.</p><p>Do outro lado, o passivo tem só dois grupos — <b>Circulante</b> e <b>Não Circulante</b> — e abaixo deles o <b>Patrimônio Líquido</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Balanço Patrimonial (BP)</i></p>",
4:"<p>Certo. São os três títulos numerados da coluna <b>ATIVO CIRCULANTE</b> no quadro de contas que mais aparecem em provas: <b>1) Disponibilidades</b>; <b>2) Direitos Realizáveis no Curso do Exercício Social Subsequente</b>; <b>3) Aplicações de Recursos em Despesas do Exercício Seguinte</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Exemplos de contas contábeis que mais aparecem em provas</i></p>",
5:"<p>Certo, as duas estão na lista de <b>Disponibilidades</b> do resumo, ao lado de <b>Caixa e Equivalentes de Caixa</b> e das <b>Aplicações Financeiras de Liquidez Imediata</b>.</p><p>São quatro contas apenas — vale memorizar a lista fechada, porque a banca costuma incluir uma quinta que não pertence ao subgrupo.</p><p class='fb-fonte'>Resumo 09 · <i>Contas de prova — Ativo Circulante</i></p>",
6:"<p>Certo. No quadro do resumo, dentro dos <b>direitos realizáveis no curso do exercício social subsequente</b>, as duas aparecem com sinal negativo: <b>“(-) Perdas Estimadas com Crédito de Liquidação Duvidosa (PECLD)”</b> e <b>“(-) Perdas Estimadas com Estoques”</b>.</p><p>O sinal é a dica: estão no ativo, mas <b>reduzindo</b> o grupo.</p><p class='fb-fonte'>Resumo 09 · <i>Contas de prova — Ativo Circulante</i></p>",
7:"<p>Errado no grupo. <b>Tributos/Impostos a Recuperar</b> está na lista do <b>ativo circulante</b>, entre os direitos realizáveis no curso do exercício social subsequente.</p><p>Cuidado com o par que a banca embaralha: <b>a recuperar</b> é <b>direito</b> (ativo); <b>a recolher</b> é <b>obrigação</b> (passivo exigível, e este sim aparece nas duas colunas do passivo).</p><p class='fb-fonte'>Resumo 09 · <i>Contas de prova — Ativo Circulante</i></p>",
8:"<p>Errado — e é uma das trocas mais rentáveis do resumo. <b>Adiantamento a Fornecedores</b> está na lista do <b>ativo circulante</b> (e a LP, no RLP); <b>Adiantamento de Clientes</b> está na lista do <b>passivo exigível</b>, nas duas colunas.</p><p>A preposição resolve: se a empresa <b>adianta a</b> alguém, ela tem direito; se <b>recebe de</b> alguém, ela tem obrigação.</p><p class='fb-fonte'>Resumo 09 · <i>Contas de prova · Passivo Exigível</i></p>",
9:"<p>Certo, é a <b>observação 1</b> do resumo: o ANC Realizável a Longo Prazo compreende <b>“os direitos realizáveis após o término do exercício seguinte”</b>.</p><p>A observação tem uma segunda parte, que a banca também cobra: os direitos derivados de <b>vendas, adiantamentos ou empréstimos a coligadas, controladas, diretores, acionistas ou participantes no lucro</b> da companhia, <b>quando não constituírem negócios usuais</b> na exploração do objeto social.</p><p class='fb-fonte'>Resumo 09 · <i>Observações — ANC Realizável a Longo Prazo</i></p>",
10:"<p>Errado no grupo. Pela <b>observação 1</b>, esses direitos vão para o <b>ANC Realizável a Longo Prazo</b>, e não para o circulante — mesmo que o vencimento seja curto.</p><p>É a parte da observação que fala dos direitos derivados de vendas, adiantamentos ou empréstimos a <b>coligadas, controladas, diretores, acionistas ou participantes no lucro</b>, <b>“que não constituírem negócios usuais na exploração do objeto da companhia”</b>. A lista do RLP no quadro confirma: <b>Empréstimo para diretores, acionistas</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Observações — ANC Realizável a Longo Prazo</i></p>",
11:"<p>Certo. As duas contas estão na lista de <b>Realizável a Longo Prazo</b> do resumo: <b>Imposto Diferido (CPC 26, item 56)</b> e <b>Crédito Fiscal (Ativo Fiscal Diferido)</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Contas de prova — Ativo Não Circulante</i></p>",
12:"<p>Certo, é a <b>observação 2</b> do resumo, literal: <b>“o item 05 do CPC 28 (Propriedade para Investimento) dispõe que Propriedade para investimento é a propriedade mantida para auferir aluguel ou para valorização do capital ou para ambas”</b>.</p><p>Por isso ela figura no subgrupo <b>Investimentos</b> do ANC, e não no imobilizado: não é usada pela entidade, é mantida para render.</p><p class='fb-fonte'>Resumo 09 · <i>Observações — CPC 28, item 05</i></p>",
13:"<p>Errado no subgrupo: <b>Benfeitoria em Propriedade de Terceiros</b> é a última conta da lista de <b>Imobilizado</b> do resumo.</p><p>No <b>intangível</b> o resumo lista outras cinco: <b>Marcas e Patentes</b>, <b>Softwares</b>, <b>Direitos autorais</b>, <b>Fundo de Comércio Adquirido</b> e <b>(-) Amortização Acumulada</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Contas de prova — Imobilizado e Intangível</i></p>",
14:"<p>Errado por uma conta. As três primeiras estão certas, mas a redutora do <b>intangível</b> é a <b>(-) Amortização Acumulada</b>. A <b>(-) Depreciação Acumulada</b> está na lista do <b>Imobilizado</b>.</p><p>O par que fecha a questão: <b>deprecia-se o imobilizado</b>, <b>amortiza-se o intangível</b> — e cada uma aparece com sinal negativo no seu próprio subgrupo.</p><p class='fb-fonte'>Resumo 09 · <i>Contas de prova — Imobilizado e Intangível</i></p>",
15:"<p>Certo, é o esquema <b>INVESTIMENTO</b> do resumo: o <b>temporário</b>, <b>“se for de curto prazo”</b>, vai ao <b>ATIVO CIRCULANTE</b>; <b>“se for de longo prazo”</b>, ao <b>ANC REALIZÁVEL A LONGO PRAZO</b>.</p><p>Repare que <b>Investimento Temporário</b> é a conta que aparece nas <b>duas</b> listas do quadro — a do AC e a do RLP. O que decide é o prazo.</p><p class='fb-fonte'>Resumo 09 · <i>Investimento</i></p>",
16:"<p>Errado no grupo. Pelo esquema, o investimento <b>PERMANENTE</b> — cujos exemplos são justamente <b>controladas</b> e <b>coligadas</b> — vai para o <b>ANC INVESTIMENTOS</b>.</p><p>O Realizável a Longo Prazo só recebe investimento quando ele é <b>temporário de longo prazo</b>. Permanente nunca cai no RLP.</p><p class='fb-fonte'>Resumo 09 · <i>Investimento</i></p>",
17:"<p>Certo, e é a chave para ler o quadro do <b>Passivo Exigível</b>: as colunas do <b>Passivo Circulante</b> e do <b>Passivo Não Circulante</b> trazem <b>a mesma lista de contas</b>.</p><p>O critério vem no pé da tabela: <b>“quando vencerem no exercício seguinte”</b> → circulante; <b>“quando vencerem após o exercício seguinte”</b> → não circulante. Nenhuma dessas contas é exclusiva de um dos dois grupos.</p><p class='fb-fonte'>Resumo 09 · <i>Passivo Exigível</i></p>",
18:"<p>Errado no grupo. <b>Duplicatas Descontadas</b> consta da lista do <b>Passivo Exigível</b>, nas duas colunas do quadro.</p><p>O lançamento do resumo confirma: no desconto, <b>“C – Duplicatas Descontadas R$ 100.000 (Passivo Exigível)”</b>. E a OBS. avisa que a empresa <b>não baixa duplicatas a receber</b> nessa hora — logo, não há retificação de ativo alguma.</p><p class='fb-fonte'>Resumo 09 · <i>Passivo Exigível · Principais Lançamentos</i></p>",
19:"<p>Certo. Nas duas colunas do quadro, o resumo lista com sinal negativo <b>“(-) Juros Passivos a Transcorrer”</b> e <b>“(-) Encargos Financeiros a Transcorrer”</b>.</p><p>O lançamento do desconto mostra a mesma ideia na prática: <b>“D – Juros a apropriar R$ 12.000 (Retificadora do Passivo Exigível)”</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Passivo Exigível</i></p>",
20:"<p>Errado no grupo. <b>Provisão</b> está listada no quadro do <b>Passivo Exigível</b>, tanto no circulante quanto no não circulante.</p><p>O resumo reforça na seção própria: o CPC 25 a define como <b>passivo</b> de prazo ou valor incertos, e ela <b>“é reconhecida no BP”</b>. No patrimônio líquido o que existe são capital, reservas, ajustes, ações em tesouraria e prejuízos acumulados.</p><p class='fb-fonte'>Resumo 09 · <i>Passivo Exigível · Provisão</i></p>",
21:"<p>Certo, as duas constam das colunas do <b>Passivo Exigível</b>. <b>Debêntures</b> aparece na lista e a seção de lançamentos confirma: na captação via debêntures <b>“a entidade deverá reconhecer um Passivo Exigível correspondente”</b>.</p><p><b>Adiantamento de Clientes</b> também está lá — é dinheiro recebido antes da entrega, ou seja, obrigação.</p><p class='fb-fonte'>Resumo 09 · <i>Passivo Exigível</i></p>",
22:"<p>Errado no marco temporal. O <b>TOME NOTA!</b> do resumo diz o contrário: <b>“a doutrina contábil determina que o empréstimo só deva ser contabilizado quando do RECEBIMENTO dos recursos pela empresa”</b>.</p><p>Assinar contrato não gera passivo; receber o dinheiro, sim. É por isso que no exemplo dos <b>R$ 10 milhões</b> apenas os <b>R$ 5 milhões</b> efetivamente recebidos entram no balanço de 01/01/2022.</p><p class='fb-fonte'>Resumo 09 · <i>Passivo Exigível — Tome Nota!</i></p>",
23:"<p>Certo, é o exemplo do resumo com os mesmos números. Ele conclui que, na data da contratação, o aumento <b>“no passivo circulante foi ZERO, pois o pagamento será a partir de 2024”</b>.</p><p>São dois filtros somados: o <b>recebimento</b> define <b>quanto</b> entra; o <b>vencimento</b> define <b>onde</b> entra. Nada vence no exercício seguinte a 2022, então o PC não se move.</p><p class='fb-fonte'>Resumo 09 · <i>Passivo Exigível — exemplo do empréstimo</i></p>",
24:"<p>Errado no valor. O resumo é expresso: o aumento no passivo não circulante <b>“foi de R$ 5 milhões, pois, na data da contratação do empréstimo (01/01/2022), a sociedade só havia recebido R$ 5 milhões”</b>.</p><p>Os outros R$ 5 milhões só serão contabilizados em <b>01/01/2023</b>, quando entrarem no caixa. R$ 10 milhões é o valor do contrato, não o do passivo.</p><p class='fb-fonte'>Resumo 09 · <i>Passivo Exigível — exemplo do empréstimo</i></p>",
25:"<p>Certo, literal: <b>“no passivo não circulante foi de R$ 5 milhões, pois, na data da contratação do empréstimo (01/01/2022), a sociedade só havia recebido R$ 5 milhões”</b>.</p><p>Vai ao <b>não circulante</b> porque o pagamento começa em 01/01/2024, em parcelas semestrais ao longo de cinco anos — nada vence no exercício seguinte.</p><p class='fb-fonte'>Resumo 09 · <i>Passivo Exigível — exemplo do empréstimo</i></p>",
26:"<p>Certo, é o esquema do <b>CPC 25, item 13</b> reproduzido no resumo. Os passivos contingentes não são reconhecidos porque são <b>obrigações POSSÍVEIS</b> — ainda há de ser confirmado se a entidade tem ou não obrigação presente — <b>OU</b> <b>obrigações PRESENTES</b> que não satisfazem os critérios de reconhecimento.</p><p>Na segunda hipótese, o resumo dá as duas razões: <b>não é provável</b> que seja necessária saída de recursos, <b>ou</b> <b>não pode ser feita estimativa suficientemente confiável</b> do valor.</p><p class='fb-fonte'>Resumo 09 · <i>Passivo Contingente</i></p>",
27:"<p>Errado — é o exemplo do resumo, com estes mesmos números, e ele conclui o oposto. Funcionário pede <b>R$ 10.000</b> por horas extras, julgamento em março do ano seguinte, e os advogados consideram as chances de perda <b>POSSÍVEIS</b>.</p><p>Nas palavras do material: <b>“nesse caso, o valor de R$ 10.000 NÃO deve ser reconhecido no BP, visto que se trata de uma obrigação possível (passivo contingente)”</b>. Guarde a palavra-chave <b>possível</b> — ela é o gatilho do não reconhecimento.</p><p class='fb-fonte'>Resumo 09 · <i>Passivo Contingente — exemplo</i></p>",
28:"<p>Errado. Essa é justamente a segunda hipótese de <b>passivo contingente</b> do <b>CPC 25, item 13</b>: obrigação presente que não satisfaz os critérios de reconhecimento porque <b>“não pode ser feita uma estimativa suficientemente confiável do valor da obrigação”</b> — e por isso <b>não se reconhece</b>.</p><p>A provisão exige o contrário: o quadro do resumo pede que <b>“uma estimativa confiável deve ser realizada acerca do valor da obrigação”</b>. Sem estimativa confiável, não há provisão.</p><p class='fb-fonte'>Resumo 09 · <i>Passivo Contingente · Provisão</i></p>",
29:"<p>Certo, é a frase de abertura da seção: <b>“o pronunciamento técnico CPC 25 (item 10) define provisão como passivo de prazo ou valor incertos”</b>.</p><p>Duas incertezas, e basta uma: o <b>prazo</b> pode ser incerto, o <b>valor</b> pode ser incerto — mas a obrigação é <b>presente</b> e a saída de recursos é <b>provável</b>. É isso que a separa do passivo contingente.</p><p class='fb-fonte'>Resumo 09 · <i>Provisão — CPC 25, item 10</i></p>",
30:"<p>Certo, é a última linha do quadro da provisão no resumo: ela <b>“é reconhecida no BP e divulgada em notas explicativas”</b>.</p><p>O exemplo que ele dá no mesmo quadro: <b>provisão para os custos de descontinuidade de poço de petróleo</b>, na medida em que a entidade é obrigada a retificar danos já causados. Contraste com o passivo contingente, que não entra no balanço.</p><p class='fb-fonte'>Resumo 09 · <i>Provisão</i></p>",
31:"<p>Certo, é a <b>observação 1</b> da seção: as provisões são reconhecidas como passivo <b>“(presumindo-se que possa ser feita uma estimativa confiável)”</b> porque <b>“são obrigações presentes”</b> e porque <b>“é provável que uma saída de recursos que incorporam benefícios econômicos seja necessária para liquidar a obrigação”</b>.</p><p>São os três requisitos do quadro: obrigação presente + saída provável + estimativa confiável.</p><p class='fb-fonte'>Resumo 09 · <i>Provisão — Observações</i></p>",
32:"<p>Errado já no começo: o resumo abre a <b>observação 2</b> exatamente marcando a diferença — <b>“DIFERENTEMENTE da regra do ativo, caso a empresa pegue um empréstimo com um dos sócios, ela poderá classificar no Passivo Circulante, a depender do prazo”</b>.</p><p>No ativo, o empréstimo <b>a</b> sócio ou diretor que não seja negócio usual vai obrigatoriamente ao <b>RLP</b>. No passivo não há essa amarra: vale o <b>prazo</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Provisão — Observações</i></p>",
33:"<p>Certo, é a definição do resumo: o PL <b>“corresponde ao valor contábil pertencente aos acionistas (ou sócios) e é representado pela diferença entre o valor dos Ativos e dos Passivos”</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Patrimônio Líquido</i></p>",
34:"<p>Errado na operação. O quadro <b>ATENÇÃO!</b> do resumo fecha a questão: o PL, <b>“também conhecido por Riqueza Líquida, pode ser associado ao montante dos ativos DEDUZIDO dos passivos”</b>, e ele escreve a fórmula: <b>PL = A – P</b>.</p><p>O nome <b>riqueza líquida</b> está certo; o que a banca inverteu foi o sinal. Soma de ativo com passivo não significa nada no balanço.</p><p class='fb-fonte'>Resumo 09 · <i>Patrimônio Líquido — Atenção!</i></p>",
35:"<p>Certo, é a primeira linha do quadro do PL, com os sinais que o resumo usa: <b>“(+) Capital Social Subscrito”</b> → <b>“( – ) Capital a integralizar”</b> → <b>“( = ) Capital Integralizado”</b>.</p><p>Ou seja, o <b>capital a integralizar</b> é conta <b>redutora</b> dentro do PL: é a parte que os sócios prometeram e ainda não entregaram.</p><p class='fb-fonte'>Resumo 09 · <i>Patrimônio Líquido</i></p>",
36:"<p>Errado na etiqueta: essas três são as <b>Reservas de CAPITAL</b> do quadro — <b>ágio na emissão de ações</b>, <b>alienação de partes beneficiárias</b> e <b>alienação de bônus de subscrição</b>.</p><p>As <b>Reservas de LUCROS</b> são outras cinco: <b>legal</b>, <b>estatutária</b>, <b>para contingências</b>, <b>de lucros a realizar</b> e <b>de incentivos fiscais</b>. A pista está na origem: reserva de capital vem de aporte dos sócios, reserva de lucros vem do resultado.</p><p class='fb-fonte'>Resumo 09 · <i>Patrimônio Líquido</i></p>",
37:"<p>Certo. É a lista integral de <b>Reservas de Lucros</b> do quadro do PL, na ordem em que o resumo escreve: <b>Reserva Legal</b>, <b>Reserva Estatutária</b>, <b>Reserva para Contingências</b>, <b>Reserva de Lucros a Realizar</b> e <b>Reserva de Incentivos Fiscais</b>.</p><p>Cuidado para não confundir a <b>reserva para contingências</b> (PL, reserva de lucros) com <b>provisão</b> e <b>passivo contingente</b>, que são assunto do passivo.</p><p class='fb-fonte'>Resumo 09 · <i>Patrimônio Líquido</i></p>",
38:"<p>Certo, mas por fora do resumo. Ele apenas <b>lista</b> a <b>Reserva Legal</b> entre as reservas de lucros do quadro do PL — não traz o percentual de constituição nem o limite.</p><p>Para a prova, memorize os dois números junto com a lista do quadro: <b>5%</b> do lucro líquido do exercício, até o limite de <b>20%</b> do capital social.</p><p class='fb-fonte off'>Não consta do Resumo 09 — percentuais do art. 193 da Lei 6.404/76. O resumo cita a Reserva Legal apenas como item da lista de Reservas de Lucros.</p>",
39:"<p>Certo, e o resumo sinaliza isso com o próprio sinal: no quadro do PL aparecem <b>“(-) Ações em Tesouraria”</b> e <b>“(-) Prejuízos Acumulados”</b>.</p><p>Vale distinguir das duas contas de sinal duplo, que podem somar ou subtrair: <b>Ajuste de Avaliação Patrimonial</b> e <b>Ajuste Acumulado de Conversão</b>, ambas marcadas com <b>(+ ou -)</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Patrimônio Líquido</i></p>",
40:"<p>Certo, é o <b>lançamento 2</b> da operação de desconto de duplicatas, com os mesmos valores do resumo: <b>D – Disponibilidades R$ 88.000</b> (Ativo Circulante) · <b>D – Juros a apropriar R$ 12.000</b> (Retificadora do Passivo Exigível) · <b>C – Duplicatas Descontadas R$ 100.000</b> (Passivo Exigível).</p><p>A empresa recebe <b>88.000</b> porque os <b>12%</b> de juros ficam com o banco, e a apropriação mensal desses juros é <b>D Despesa de Juros R$ 1.000 · C Juros a apropriar R$ 1.000</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Lançamentos em uma operação de desconto de duplicatas</i></p>",
41:"<p>Errado no momento da baixa. A <b>OBS.</b> do resumo é direta: <b>“note que a empresa não efetua a baixa da conta duplicatas a receber no momento da operação de desconto (lançamento 2), pois ela só será baixada após o pagamento pelo cliente ao banco”</b>.</p><p>Faz sentido: o cliente continua devendo. A empresa trocou prazo por dinheiro com o banco, assumindo um passivo — <b>Duplicatas Descontadas</b> — e mantendo o direito no ativo.</p><p class='fb-fonte'>Resumo 09 · <i>Desconto de duplicatas — OBS.</i></p>",
42:"<p>Errado — a banca trocou os dois desfechos do quadro. Se o <b>cliente PAGOU</b> a duplicata ao banco: <b>D – Duplicatas Descontadas</b> · <b>C – Duplicatas a Receber</b>.</p><p>O crédito em <b>Disponibilidades</b> é o outro caso: <b>cliente NÃO pagou</b> a duplicata, e então é a empresa que arca — <b>D – Duplicatas Descontadas</b> · <b>C – Disponibilidades</b>. Em ambos o débito é o mesmo; o que muda é o crédito.</p><p class='fb-fonte'>Resumo 09 · <i>Desconto de duplicatas — cliente pagou / não pagou</i></p>",
43:"<p>Certo, é o <b>lançamento 1</b> de despesas com salários do resumo, feito <b>“na data de competência da despesa (final do mês trabalhado)”</b>: <b>D - Despesa com salários R$ 30.000</b> (Resultado) · <b>C - Salários a Pagar R$ 30.000</b> (Passivo Exigível).</p><p>O pagamento vem só no <b>início do mês seguinte ao trabalhado</b>: D Salários a pagar · C Caixa (ou Bancos).</p><p class='fb-fonte'>Resumo 09 · <i>Despesas com salários</i></p>",
44:"<p>Certo, e é o detalhe que separa o adiantamento do salário comum. No <b>lançamento 3</b> do resumo: <b>D - Salários a pagar R$ 30.000</b> (baixa do Passivo Exigível) · <b>C - Adiantamento R$ 30.000</b> (baixa do Ativo Circulante).</p><p>O caixa já havia saído no <b>lançamento 1</b> (D Adiantamento · C Caixa), então no pagamento não se credita caixa de novo — credita-se o <b>adiantamento</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Adiantamento de salário</i></p>",
45:"<p>Errado no grupo. No <b>Exemplo 01</b> das debêntures, o resumo lança <b>“C – Prêmio de Debêntures a Apropriar R$ 2.400 (↑ Passivo Exigível)”</b>, junto com <b>C – Debêntures a Pagar R$ 10.000</b> e <b>D – Caixa R$ 12.400</b>.</p><p>Prêmio em <b>PL</b> é o caso das <b>ações</b>, onde o ágio vai para a <b>reserva de capital</b>. Debênture é título de dívida: tudo fica no passivo.</p><p class='fb-fonte'>Resumo 09 · <i>Captação de recursos com debêntures — Exemplo 01</i></p>",
46:"<p>Certo, é o <b>Exemplo 02</b> das ações: <b>D – Caixa R$ 7.600</b> · <b>D – Gastos na emissão de Ações R$ 2.400 (↓ Retificadora do PL)</b> · <b>C – Capital Social R$ 10.000</b>.</p><p>Note que o capital social é reconhecido pelos <b>R$ 10.000</b> cheios; o gasto de colocação não reduz o capital, ele entra como <b>conta retificadora do próprio PL</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Captação de recursos com ações — Exemplo 02</i></p>",
47:"<p>Errado no grupo. No quadro do <b>CPC 08</b>, coluna das <b>AÇÕES</b> (item 05), os prêmios recebidos na emissão de ações se <b>“contabiliza na Reserva de Capital → PL”</b>.</p><p>No <b>PL</b> porque ação é <b>título patrimonial</b> e a captação é <b>para o capital próprio</b>. Passivo exigível é o destino do prêmio das <b>debêntures</b>, que são título de dívida.</p><p class='fb-fonte'>Resumo 09 · <i>CPC 08 — Ações × Debêntures</i></p>",
48:"<p>Certo, são as duas linhas da coluna <b>DEBÊNTURES</b> (item 13) do quadro do CPC 08: gastos com a emissão de debêntures são <b>“conta redutora do Passivo”</b> e os prêmios recebidos na emissão de debêntures <b>“contabiliza no Passivo Exigível”</b>.</p><p>O atalho do quadro: o <b>gasto REDUZ</b> o grupo que captou e o <b>prêmio FICA</b> no grupo que captou — nas debêntures, os dois no <b>passivo</b>; nas ações, os dois no <b>PL</b>.</p><p class='fb-fonte'>Resumo 09 · <i>CPC 08 — Ações × Debêntures</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"09", nome:"Balanço patrimonial, provisão, PL e CPC 08", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
