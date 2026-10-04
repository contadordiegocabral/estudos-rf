/* Contabilidade Geral — Módulo 12: Demonstração dos Fluxos de Caixa (CPC 03) (modo direto) */
window.MOD = window.MOD || {};
window.MOD.contab12 = (function(){
"use strict";

var CARDS = [
  ["A DFC integra o conjunto completo de demonstrações contábeis? Quem está dispensado?","<b>Integra</b> o conjunto completo das <b>sociedades por ações</b>. Mas o <b>art. 176, § 6º, da Lei 6.404/76</b> dispensa da elaboração e publicação a <b>companhia fechada</b> com <b>PL, na data do balanço, inferior a R$ 2.000.000</b>."],
  ["Qual norma regulamenta a forma de elaboração e apresentação da DFC?","O <b>Pronunciamento Técnico CPC 03 (R2)</b> — Demonstração dos Fluxos de Caixa, editado pelo <b>Comitê de Pronunciamentos Contábeis</b>."],
  ["Qual o objetivo do CPC 03?","Requerer a prestação de informações acerca das <b>alterações históricas de caixa e equivalentes de caixa</b> da entidade, por meio de demonstração dos fluxos de caixa advindos das atividades <b>operacionais</b>, <b>de investimento</b> e <b>de financiamento</b>."],
  ["As duas fórmulas da variação do caixa","<b>∆Caixa = SF − SI</b> (saldo final menos saldo inicial) e <b>∆Caixa = AO + AI + AF</b> (operacional + investimento + financiamento)."],
  ["Uma única transação pode ficar em mais de uma atividade?","<b>Sim.</b> Exemplo do resumo: desembolso para pagamento de <b>empréstimo com juros</b> — a parte dos <b>juros</b> pode ser <b>operacional</b> e a parte do <b>principal</b> deve ser <b>financiamento</b>."],
  ["Quais demonstrações são utilizadas para preparar a DFC?","A <b>DRE do período em análise</b> e os <b>Balanços Patrimoniais</b> do <b>período em análise</b> e do <b>período anterior</b>."],
  ["O que compreende CAIXA, para o CPC 03?","<b>Numerário em espécie</b> e <b>depósitos bancários disponíveis</b>."],
  ["O que são EQUIVALENTES DE CAIXA?","<b>Aplicações financeiras de curto prazo</b>, de <b>alta liquidez</b>, <b>prontamente conversíveis em montante conhecido de caixa</b> e sujeitas a <b>insignificante risco de mudança de valor</b>. Pelo <b>item 07</b>, normalmente vencimento de <b>três meses ou menos a contar da data da AQUISIÇÃO</b>."],
  ["O que são FLUXOS DE CAIXA?","As <b>entradas e saídas de caixa e equivalentes de caixa</b>."],
  ["Definição de ATIVIDADES OPERACIONAIS","São as <b>principais atividades geradoras de receita</b> da entidade e <b>outras atividades que não são de investimento e tampouco de financiamento</b>."],
  ["Definição de ATIVIDADES DE INVESTIMENTO","São as atividades referentes à <b>aquisição e à venda de ativos de longo prazo</b> e de <b>outros investimentos não incluídos nos equivalentes de caixa</b>."],
  ["Definição de ATIVIDADES DE FINANCIAMENTO","São aquelas que resultam em <b>mudanças no tamanho e na composição do capital próprio (PL)</b> e no <b>capital de terceiros (passivo)</b> da entidade."],
  ["Item 08 do CPC 03 — empréstimos bancários e saldos a descoberto","Empréstimos bancários são <b>geralmente atividades de financiamento</b>. Mas <b>saldos bancários a descoberto</b> (cheques especiais ou contas correntes garantidas) liquidados em <b>curto lapso temporal</b> compõem a <b>gestão de caixa</b> e são <b>incluídos em caixa e equivalentes de caixa</b>, com a função de <b>REDUZIR</b> o grupo. Característica: os saldos <b>flutuam de devedor para credor</b>."],

  ["Por que o fluxo de caixa operacional é indicador chave?","Para saber se a entidade <b>tem gerado caixa suficiente</b> para <b>pagar empréstimos</b>, <b>manter a capacidade operacional</b>, <b>pagar dividendos</b> e <b>fazer novos investimentos</b> <b>sem recorrer a fontes externas de financiamento</b>."],
  ["Exemplos de fluxos das ATIVIDADES OPERACIONAIS","<b>(+)</b> recebimentos pela <b>venda de mercadorias e prestação de serviços</b>; <b>(+)</b> recebimentos de <b>royalties, honorários, comissões</b> e outras receitas; <b>(−)</b> pagamentos a <b>fornecedores</b>; <b>(−)</b> pagamentos a <b>empregados</b>; <b>(+/−)</b> recebimentos e pagamentos por <b>seguradora de prêmios e sinistros</b>."],
  ["Item 14 — ativos mantidos para aluguel a terceiros","A <b>venda de item do imobilizado</b> é <b>investimento</b>. Mas pagamentos para <b>produzir ou adquirir ativos mantidos para aluguel a terceiros que, em sequência, são vendidos</b> são <b>OPERACIONAIS</b> — e os <b>recebimentos de aluguéis</b> e das <b>vendas subsequentes</b> desses ativos também."],
  ["Item 15 — títulos e empréstimos para negociação","Títulos e empréstimos mantidos para <b>negociação imediata ou futura</b> são <b>semelhantes a estoques adquiridos para revenda</b>; logo, a compra e a venda deles são <b>ATIVIDADES OPERACIONAIS</b>."],
  ["Antecipações de caixa e empréstimos feitos por instituição financeira","São comumente classificados como <b>ATIVIDADES OPERACIONAIS</b>, porque se referem à <b>principal atividade geradora de receita</b> dessas entidades."],
  ["A regra de entrada das atividades de investimento","<b>Somente desembolsos que resultam em ativo</b> são passíveis de classificação como atividades de investimento."],
  ["Exemplos de fluxos das ATIVIDADES DE INVESTIMENTO","<b>(−)</b> aquisição e <b>(+)</b> venda de <b>imobilizado, intangíveis e ativos de longo prazo</b>; <b>(−)</b> aquisição e <b>(+)</b> venda de <b>instrumentos patrimoniais</b> (participação em outras empresas); <b>(−)</b> adiantamentos e <b>empréstimos feitos a terceiros</b>; <b>(+)</b> recebimentos pela <b>liquidação desses adiantamentos ou empréstimos concedidos</b>."],
  ["ATENÇÃO — aquisição de ativo a prazo","<b>Pagamento a prazo</b> para aquisição de ativo <b>NÃO influencia</b> o fluxo de caixa da atividade de <b>investimento</b> — não houve desembolso."],
  ["Por que divulgar separadamente o fluxo de financiamento?","Porque é <b>útil na previsão de fluxos futuros de caixa</b> por parte dos <b>fornecedores de capital à entidade</b>."],
  ["Exemplos de fluxos das ATIVIDADES DE FINANCIAMENTO","<b>(+)</b> caixa pela <b>emissão de ações</b> ou outros instrumentos patrimoniais; <b>(−)</b> pagamentos a investidores para <b>adquirir ou resgatar ações da entidade</b>; <b>(+)</b> caixa pela <b>emissão de debêntures</b> e <b>empréstimos de curto e longo prazo</b>; <b>(−)</b> <b>resgate de debêntures</b> e <b>amortização de empréstimos</b>; <b>(+)</b> <b>integralização de capital pelos sócios em dinheiro</b>; <b>(−)</b> pagamento de <b>dividendos e JSCP</b>."],
  ["ATENÇÃO — integralização de capital com bens","<b>Integralização de capital com bens</b> (terrenos, veículos) <b>NÃO influencia o fluxo de caixa</b>."],
  ["Empréstimos: CONCEDIDOS × OBTIDOS","<b>Concedidos</b> → atividade de <b>INVESTIMENTO</b>. <b>Obtidos</b> → atividade de <b>FINANCIAMENTO</b>."],
  ["Ações: DE OUTRAS EMPRESAS × DA PRÓPRIA EMPRESA","<b>De outras empresas</b> → <b>INVESTIMENTO</b> (a empresa investe seu dinheiro). <b>Da própria empresa</b> → <b>FINANCIAMENTO</b> (ela é financiada pelos acionistas que adquirem as ações). O <b>mesmo raciocínio vale para as debêntures</b>."],
  ["Item 34A — a classificação PRINCIPAL de juros e dividendos","O CPC 03 <b>encoraja fortemente</b>: <b>juros recebidos e pagos</b> e <b>dividendos e JSCP recebidos</b> → <b>OPERACIONAL</b>; <b>dividendos e JSCP pagos</b> → <b>FINANCIAMENTO</b>. Alternativa diferente <b>deve ser seguida de nota</b> evidenciando o fato."],
  ["Item 33 — a classificação ALTERNATIVA","<b>Juros pagos</b> → <b>FINANCIAMENTO</b>, porque são <b>custos de obtenção de recursos financeiros</b>. <b>Juros, dividendos e JSCP recebidos</b> → <b>INVESTIMENTO</b>, porque são <b>retornos sobre investimentos</b>."],
  ["Item 34 — a alternativa para os dividendos pagos","<b>Dividendos e JSCP pagos</b> podem ser classificados como <b>OPERACIONAL</b>, a fim de auxiliar os usuários a determinar a <b>capacidade de a entidade pagar dividendos e JSCP utilizando os fluxos de caixa operacionais</b>."],
  ["Como se classificam os JSCP?","Os <b>Juros Sobre Capital Próprio</b> possuem a <b>mesma classificação dada aos dividendos</b>."],
  ["Item 35 — IR e CSLL na DFC","Os fluxos de caixa de <b>IR e CSLL</b> devem ser <b>divulgados separadamente</b> e classificados como <b>atividades OPERACIONAIS</b>, <b>a menos que possam ser identificados especificamente como atividades de financiamento e de investimento</b>."],

  ["Item 20 — o que o método indireto ajusta no lucro líquido?","Ajusta o <b>lucro líquido ou prejuízo</b> quanto aos efeitos de: <b>1)</b> variações nos <b>estoques</b> e nas <b>contas operacionais a receber e a pagar</b>; <b>2)</b> <b>itens que não afetam o caixa</b>; <b>3)</b> todos os <b>outros itens tratados como fluxos de investimento e de financiamento</b> (ex.: venda de terreno)."],
  ["Quais os itens que NÃO afetam o caixa, na lista do item 20?","<b>Depreciação</b>; <b>provisões</b>; <b>tributos diferidos</b>; <b>ganhos e perdas cambiais não realizados</b>; <b>resultado de equivalência patrimonial</b>."],
  ["Qual a ideia do método indireto?","Descobrir <b>quanto de dinheiro há em caixa partindo de outra demonstração elaborada pelo regime de competência</b>. Exemplo do resumo: veículo vendido à vista por <b>R$ 50.000</b> com <b>depreciação de R$ 10.000</b> → lucro por competência <b>R$ 40.000</b>, mas os <b>R$ 10.000 não saíram do caixa</b>."],
  ["1º passo do método indireto — o Lucro Ajustado","Parte-se do <b>Lucro Líquido do Exercício</b> na DRE: <b>(+)</b> Depreciação/Amortização/Exaustão · <b>(+/−)</b> Resultado de Equivalência Patrimonial · <b>(+/−)</b> Resultado da Venda de <b>Investimentos</b>, de <b>Imobilizado</b> e de <b>Intangíveis</b> <b>( = ) Lucro Ajustado</b>."],
  ["2º passo do método indireto","Do <b>Lucro Ajustado</b>: <b>(−)</b> aumento de contas operacionais do <b>ativo</b> · <b>(+)</b> diminuição de contas operacionais do <b>ativo</b> · <b>(+)</b> aumento de contas operacionais do <b>passivo exigível</b> · <b>(−)</b> diminuição de contas operacionais do <b>passivo exigível</b> <b>( = ) Caixa Líquido gerado/consumido pelas Atividades Operacionais</b>."],
  ["Por que a depreciação SOMA e a equivalência patrimonial positiva SUBTRAI?","O resultado <b>negativo de depreciação não impacta o caixa</b> (não sai dinheiro), então se <b>soma (+)</b>. O resultado <b>positivo de equivalência patrimonial não impacta o caixa</b> (não entra dinheiro), então se <b>subtrai (−)</b>. É o ajuste do regime de <b>competência</b> para o de <b>caixa</b>."],
  ["Por que subtrair o resultado positivo da venda de investimentos, imobilizado e intangível?","Porque eles <b>impactam o caixa, porém NÃO fazem parte da atividade operacional</b> — por isso também se <b>subtraem (−)</b> do lucro líquido."],
  ["O efeito de ativo e passivo sobre o caixa no 2º ajuste","<b>ATIVO — efeito inverso:</b> aumento do ativo <b>reduz</b> o caixa; redução do ativo <b>aumenta</b> o caixa (comprar estoque tira dinheiro; receber de clientes traz). <b>PASSIVO — efeito direto:</b> aumento do passivo <b>aumenta</b> o caixa; redução do passivo <b>reduz</b> o caixa (contratar empréstimo traz dinheiro)."],
  ["Fluxo de caixa em moeda estrangeira (itens 25 e 26)","Deve ser registrado na <b>MOEDA FUNCIONAL</b> da entidade, aplicando-se ao montante em moeda estrangeira a <b>taxa de câmbio observada na DATA DA OCORRÊNCIA DO FLUXO DE CAIXA</b>. <b>Moeda funcional</b> é a moeda do <b>ambiente econômico principal no qual a entidade opera</b> (CPC 02, item 08)."]
];

var QS = [
  ["A Demonstração dos Fluxos de Caixa integra o conjunto completo de demonstrações contábeis das sociedades por ações.","C","CEBRASPE","Conceito de contextualização do resumo."],
  ["A companhia fechada com patrimônio líquido, na data do balanço, inferior a R$ 2.000.000 não é obrigada à elaboração e publicação da DFC.","C","Lei 6.404/76, art. 176, § 6º","Dispensa legal."],
  ["A companhia fechada está dispensada de elaborar a DFC quando seu patrimônio líquido, na data do balanço, for inferior a R$ 1.000.000.","E","FCC","O limite é de <b>R$ 2.000.000</b>."],
  ["O objetivo do CPC 03 é requerer a prestação de informações acerca das alterações históricas de caixa e equivalentes de caixa da entidade, por meio de demonstração dos fluxos de caixa advindos das atividades operacionais, de investimento e de financiamento.","C","FGV","Objetivo literal do pronunciamento."],
  ["A variação do caixa corresponde ao saldo inicial menos o saldo final.","E","VUNESP","Inverteu: <b>∆Caixa = SF − SI</b>."],
  ["A variação do caixa equivale à soma dos fluxos das atividades operacionais, de investimento e de financiamento.","C","CEBRASPE","<b>∆Caixa = AO + AI + AF</b>."],
  ["No desembolso de caixa para pagamento de empréstimo com juros, a parte dos juros deve ser classificada como atividade de financiamento e a parte do principal, como atividade operacional.","E","FCC","Inverteu: juros podem ser <b>operacional</b> e o principal é <b>financiamento</b>."],
  ["A DFC é elaborada com base na DRE do período em análise e nos balanços patrimoniais do período em análise e do período anterior.","C","FGV","As três demonstrações de apoio."],
  ["Equivalentes de caixa são aplicações financeiras de longo prazo, de alta liquidez, prontamente conversíveis em montante conhecido de caixa e sujeitas a insignificante risco de mudança de valor.","E","VUNESP","São de <b>curto prazo</b>."],
  ["Um investimento normalmente qualifica-se como equivalente de caixa somente quando tem vencimento de curto prazo, por exemplo, três meses ou menos, a contar da data da aquisição.","C","CPC 03, item 07","Marco inicial é a <b>aquisição</b>."],
  ["Atividades operacionais são as atividades referentes à aquisição e à venda de ativos de longo prazo e de outros investimentos não incluídos nos equivalentes de caixa.","E","CEBRASPE","Essa é a definição de atividades <b>de investimento</b>."],
  ["Atividades de investimento são as referentes à aquisição e à venda de ativos de longo prazo e de outros investimentos não incluídos nos equivalentes de caixa.","C","FCC","Definição do CPC 03."],
  ["Atividades de financiamento são aquelas que resultam em mudanças no tamanho e na composição do capital próprio e no capital de terceiros da entidade.","C","FGV","Definição do CPC 03."],
  ["Empréstimos bancários são geralmente considerados como atividades operacionais.","E","CPC 03, item 08","São geralmente atividades de <b>financiamento</b>."],
  ["Saldos bancários a descoberto decorrentes de cheques especiais ou contas correntes garantidas liquidados em curto lapso temporal são incluídos como componente de caixa e equivalentes de caixa, reduzindo o montante do grupo.","C","VUNESP","Compõem a gestão de caixa da entidade."],
  ["Os saldos bancários a descoberto, quando incluídos em caixa e equivalentes de caixa, aumentam o montante do grupo.","E","CEBRASPE","Entram com a função de <b>reduzir</b> o grupo."],

  ["O montante dos fluxos de caixa das atividades operacionais é indicador chave para saber se a entidade tem gerado caixa suficiente para pagar empréstimos, manter a capacidade operacional, pagar dividendos e fazer novos investimentos sem recorrer a fontes externas de financiamento.","C","FCC","Função informacional do fluxo operacional."],
  ["Recebimentos de caixa decorrentes de royalties, honorários e comissões são fluxos de caixa das atividades de investimento.","E","FGV","São exemplos de fluxos <b>operacionais</b>."],
  ["Recebimentos de caixa pela venda de mercadorias e pela prestação de serviços e pagamentos de caixa a fornecedores e a empregados são exemplos de fluxos das atividades operacionais.","C","VUNESP","Exemplos do CPC 03."],
  ["Recebimentos e pagamentos de caixa por seguradora de prêmios e sinistros são exemplos de fluxos das atividades operacionais.","C","CEBRASPE","Último exemplo da lista do resumo."],
  ["Os fluxos de caixa relativos à venda de item do imobilizado são fluxos de caixa provenientes das atividades de investimento.","C","CPC 03, item 14","Regra geral do item 14."],
  ["Pagamentos em caixa para a produção ou a aquisição de ativos mantidos para aluguel a terceiros que, em sequência, são vendidos são fluxos de caixa das atividades de investimento.","E","FCC","São fluxos das atividades <b>operacionais</b>."],
  ["Os recebimentos de aluguéis e das vendas subsequentes de ativos mantidos para aluguel a terceiros são fluxos de caixa das atividades operacionais.","C","FGV","Parte final do item 14."],
  ["Os fluxos de caixa advindos da compra e da venda de títulos e empréstimos mantidos para fins de negociação imediata ou futura são classificados como atividades de investimento.","E","CPC 03, item 15","São <b>operacionais</b> — assemelham-se a estoques para revenda."],
  ["As antecipações de caixa e os empréstimos feitos por instituições financeiras são comumente classificados como atividades operacionais.","C","VUNESP","Referem-se à principal atividade geradora de receita dessas entidades."],
  ["Somente desembolsos que resultam em ativo são passíveis de classificação como atividades de investimento.","C","CEBRASPE","Regra de entrada da atividade de investimento."],
  ["A aquisição de instrumentos patrimoniais, isto é, de participação em outras empresas, é fluxo de caixa das atividades de financiamento.","E","FCC","É atividade de <b>investimento</b>."],
  ["O pagamento a prazo para aquisição de ativo influencia o fluxo de caixa da atividade de investimento no momento da aquisição.","E","FGV","Quadro ATENÇÃO: <b>não influencia</b> o fluxo de caixa."],
  ["O caixa recebido pela emissão de debêntures e por empréstimos de curto e longo prazo é fluxo de caixa das atividades de investimento.","E","VUNESP","É atividade de <b>financiamento</b>."],
  ["A integralização de capital pelos sócios em dinheiro é fluxo de caixa das atividades operacionais.","E","CEBRASPE","É atividade de <b>financiamento</b>."],
  ["A integralização de capital com bens, como terrenos e veículos, não influencia o fluxo de caixa.","C","FCC","Quadro ATENÇÃO das atividades de financiamento."],
  ["Empréstimos concedidos são atividade de financiamento e empréstimos obtidos são atividade de investimento.","E","FGV","Inverteu: concedidos = <b>investimento</b>; obtidos = <b>financiamento</b>."],
  ["A aquisição de ações de outras empresas é atividade de investimento, e a emissão de ações da própria empresa é atividade de financiamento.","C","VUNESP","Quadro de classificações importantes."],
  ["O CPC 03 encoraja fortemente as entidades a classificarem os juros recebidos ou pagos e os dividendos e JSCP recebidos como fluxos das atividades operacionais, e os dividendos e JSCP pagos como fluxos das atividades de financiamento.","C","CPC 03, item 34A","Classificação principal."],
  ["Pela classificação principal do CPC 03, os dividendos e os juros sobre o capital próprio pagos são fluxos de caixa das atividades operacionais.","E","CEBRASPE","Na principal são <b>financiamento</b>; operacional é a alternativa do item 34."],
  ["Alternativamente, os juros pagos podem ser classificados como fluxos de caixa de financiamento, porque são custos de obtenção de recursos financeiros.","C","CPC 03, item 33","Alternativa expressa do item 33."],
  ["Alternativamente, os juros, os dividendos e os juros sobre o capital próprio recebidos podem ser classificados como fluxos de caixa de financiamento, porque são retornos sobre investimentos.","E","FCC","A alternativa os põe em <b>investimento</b>."],
  ["Alternativamente, os dividendos e os juros sobre o capital próprio pagos podem ser classificados como componente dos fluxos de caixa das atividades operacionais.","C","CPC 03, item 34","Para auxiliar o usuário a avaliar a capacidade de pagar dividendos com o caixa operacional."],
  ["Os juros sobre o capital próprio possuem classificação distinta da dada aos dividendos.","E","FGV","Têm a <b>mesma</b> classificação dos dividendos."],
  ["Os fluxos de caixa referentes ao imposto de renda e à contribuição social sobre o lucro líquido devem ser divulgados separadamente e classificados como fluxos das atividades operacionais, a menos que possam ser identificados especificamente como atividades de financiamento e de investimento.","C","CPC 03, item 35","Literalidade do item 35."],

  ["No método indireto, o fluxo de caixa líquido advindo das atividades operacionais é determinado ajustando o lucro líquido ou prejuízo.","C","CPC 03, item 20","Ponto de partida do método indireto."],
  ["Depreciação, provisões, tributos diferidos, ganhos e perdas cambiais não realizados e resultado de equivalência patrimonial são exemplos de itens que não afetam o caixa.","C","VUNESP","Lista do item 20."],
  ["No método indireto, a despesa de depreciação deve ser subtraída do lucro líquido do exercício.","E","CEBRASPE","Deve ser <b>somada</b>: não houve saída de caixa."],
  ["No método indireto, o resultado positivo de equivalência patrimonial deve ser subtraído do lucro líquido do exercício.","C","FCC","Não entrou dinheiro no caixa."],
  ["No método indireto, o resultado positivo da venda de imobilizado deve ser somado ao lucro líquido do exercício.","E","FGV","Deve ser <b>subtraído</b>: impacta o caixa, mas não é atividade operacional."],
  ["No segundo ajuste do método indireto, o aumento de contas operacionais do ativo é subtraído do lucro ajustado.","C","VUNESP","Aumento do ativo reduz o caixa."],
  ["No segundo ajuste do método indireto, o aumento de contas operacionais do passivo exigível é subtraído do lucro ajustado.","E","CEBRASPE","É <b>somado</b>: aumento do passivo aumenta o caixa."],
  ["Um aumento do ativo reduz o caixa e uma redução do ativo aumenta o caixa.","C","FCC","Efeito inverso do ativo."],
  ["Um aumento do passivo reduz o caixa.","E","FGV","Efeito <b>direto</b>: aumento do passivo <b>aumenta</b> o caixa."],
  ["Na venda à vista de um veículo por R$ 50.000 com despesa de depreciação contabilizada de R$ 10.000, o lucro apurado pelo regime de competência é de R$ 40.000, embora os R$ 10.000 de depreciação não tenham saído do caixa.","C","VUNESP","Exemplo do resumo."],
  ["Os fluxos de caixa advindos de transações em moeda estrangeira devem ser registrados na moeda funcional da entidade, aplicando-se ao montante em moeda estrangeira a taxa de câmbio observada na data da ocorrência do fluxo de caixa.","C","CPC 03, itens 25 e 26","Regra literal."],
  ["Os fluxos de caixa em moeda estrangeira são convertidos pela taxa de câmbio da data do balanço.","E","CEBRASPE","É a taxa da <b>data da ocorrência do fluxo de caixa</b>."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("DFC, CPC 03 e as definições que abrem a prova",
      '<div class="box"><span class="bl">Contextualização</span>'+
      '<p>A <b>DFC</b> integra o conjunto completo de demonstrações contábeis das <b>sociedades por ações</b>. O <b>art. 176, § 6º, da Lei 6.404/76</b> dispensa da elaboração e publicação a <b>companhia fechada</b> com <b>patrimônio líquido, na data do balanço, inferior a R$ 2.000.000</b>.</p>'+
      '<p>A forma de elaboração e apresentação vem do <b>CPC 03 (R2)</b>.</p></div>'+
      '<div class="box"><span class="bl">Objetivo e as duas fórmulas</span>'+
      '<p><b>Objetivo do CPC 03:</b> requerer informações sobre as <b>alterações históricas de caixa e equivalentes de caixa</b>, por meio da demonstração dos fluxos advindos das atividades <b>operacionais</b>, <b>de investimento</b> e <b>de financiamento</b>.</p>'+
      '<p class="mn"><em>∆Caixa = SF − SI</em></p>'+
      '<p class="mn"><em>∆Caixa = AO + AI + AF</em></p>'+
      '<p><b>Quais demonstrações preparam a DFC:</b> a <b>DRE do período</b> em análise e os <b>Balanços Patrimoniais</b> do <b>período</b> e do <b>período anterior</b>.</p></div>'+
      '<div class="box tip"><span class="bl">OBSERVAÇÃO — uma transação, duas atividades</span>'+
      '<p>Uma única transação pode incluir fluxos classificados em <b>mais de uma atividade</b>. Exemplo do resumo: desembolso para pagar <b>empréstimo com juros</b> — a parte dos <b>juros</b> pode ser <b>operacional</b> e a parte do <b>principal</b> deve ser <b>financiamento</b>.</p></div>'+
      '<div class="box"><span class="bl">Definições importantes</span>'+
      '<ul><li><b>Caixa:</b> numerário em espécie e depósitos bancários disponíveis.</li>'+
      '<li><b>Equivalente de caixa:</b> aplicações financeiras de <b>curto prazo</b>, de <b>alta liquidez</b>, prontamente conversíveis em <b>montante conhecido de caixa</b> e sujeitas a <b>insignificante risco de mudança de valor</b>. Pelo <b>item 07</b>: normalmente <b>três meses ou menos a contar da data da AQUISIÇÃO</b>.</li>'+
      '<li><b>Fluxos de caixa:</b> as entradas e saídas de caixa e equivalentes de caixa.</li>'+
      '<li><b>Atividades operacionais:</b> as <b>principais atividades geradoras de receita</b> e outras que <b>não são de investimento nem de financiamento</b>.</li>'+
      '<li><b>Atividades de investimento:</b> aquisição e venda de <b>ativos de longo prazo</b> e de outros investimentos <b>não incluídos nos equivalentes de caixa</b>.</li>'+
      '<li><b>Atividades de financiamento:</b> as que resultam em <b>mudanças no tamanho e na composição do capital próprio (PL) e do capital de terceiros (passivo)</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">ATENÇÃO — item 08 e os saldos bancários a descoberto</span>'+
      '<p><b>Empréstimos bancários</b> são <b>geralmente atividades de financiamento</b>. <b>Mas</b> os <b>saldos bancários a descoberto</b> decorrentes de <b>cheques especiais</b> ou <b>contas correntes garantidas</b>, liquidados em <b>curto lapso temporal</b>, compõem <b>parte integral da gestão de caixa</b> — e por isso são <b>incluídos como componente de caixa e equivalentes de caixa</b>, com a função de <b>REDUZIR</b> o montante do grupo.</p>'+
      '<p>A característica desses arranjos: os saldos <b>frequentemente flutuam de devedor para credor</b>.</p></div>')
  ],
  V2:[
    sl("As três atividades, as classificações importantes e o IR/CSLL",
      '<div class="box"><span class="bl">Atividades operacionais</span>'+
      '<p>O montante do fluxo operacional é <b>indicador chave</b> para saber se a entidade gera caixa suficiente para <b>pagar empréstimos</b>, <b>manter a capacidade operacional</b>, <b>pagar dividendos</b> e <b>fazer novos investimentos</b> <b>sem recorrer a fontes externas de financiamento</b>.</p>'+
      '<p><b>Exemplos:</b> <b>(+)</b> venda de mercadorias e prestação de serviços · <b>(+)</b> royalties, honorários, comissões e outras receitas · <b>(−)</b> pagamentos a fornecedores · <b>(−)</b> pagamentos a empregados · <b>(+/−)</b> recebimentos e pagamentos por <b>seguradora de prêmios e sinistros</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Os três casos que a banca disfarça (itens 14 e 15)</span>'+
      '<ul><li><b>Ativos mantidos para aluguel a terceiros</b> que, em sequência, são vendidos: os <b>pagamentos para produzir/adquirir</b>, os <b>recebimentos de aluguéis</b> e as <b>vendas subsequentes</b> são <b>OPERACIONAIS</b> — embora a venda de item do imobilizado, em regra, seja <b>investimento</b>.</li>'+
      '<li><b>Títulos e empréstimos para negociação imediata ou futura</b>: são <b>semelhantes a estoques adquiridos para revenda</b> → <b>OPERACIONAIS</b>.</li>'+
      '<li><b>Antecipações de caixa e empréstimos feitos por instituição financeira</b>: é a <b>principal atividade geradora de receita</b> dela → <b>OPERACIONAL</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">Atividades de investimento e de financiamento</span>'+
      '<p><b>Investimento — regra de entrada:</b> <b>somente desembolsos que resultam em ativo</b>. Exemplos: <b>(−/+)</b> aquisição e venda de <b>imobilizado, intangíveis e ativos de longo prazo</b> · <b>(−/+)</b> aquisição e venda de <b>instrumentos patrimoniais</b> · <b>(−)</b> adiantamentos e <b>empréstimos feitos a terceiros</b> · <b>(+)</b> recebimentos pela <b>liquidação</b> desses empréstimos concedidos.</p>'+
      '<p><b>Financiamento</b> (divulgação separada é <b>útil na previsão de fluxos futuros</b> pelos fornecedores de capital): <b>(+)</b> emissão de <b>ações</b> · <b>(−)</b> pagamentos para <b>adquirir ou resgatar ações da entidade</b> · <b>(+)</b> emissão de <b>debêntures</b> e empréstimos de <b>curto e longo prazo</b> · <b>(−)</b> resgate de debêntures e <b>amortização de empréstimos</b> · <b>(+)</b> <b>integralização de capital em dinheiro</b> · <b>(−)</b> pagamento de <b>dividendos e JSCP</b>.</p></div>'+
      '<div class="box trap"><span class="bl">ATENÇÃO — os dois que NÃO influenciam o caixa</span>'+
      '<p><b>Pagamento a prazo</b> para aquisição de ativo <b>não influencia</b> o fluxo de caixa da atividade de <b>investimento</b>.</p>'+
      '<p><b>Integralização de capital com bens</b> (terrenos, veículos) <b>não influencia</b> o fluxo de caixa.</p></div>'+
      '<div class="box tip"><span class="bl">Classificações importantes — o jogo de palavras</span>'+
      '<p><b>EMPRÉSTIMOS:</b> <b>concedidos</b> → <b>Investimento</b> · <b>obtidos</b> → <b>Financiamento</b>.</p>'+
      '<p><b>AÇÕES:</b> <b>de outras empresas</b> → <b>Investimento</b> · <b>da própria empresa</b> → <b>Financiamento</b>.</p>'+
      '<p>A ideia: comprar ações de outra empresa é <b>investir</b> seu dinheiro; emitir as próprias ações para captar dinheiro é ser <b>financiada</b> pelos acionistas. O <b>mesmo raciocínio vale para as debêntures</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Juros e dividendos — itens 34A, 33 e 34</span>'+
      '<ul><li><b>Juros recebidos:</b> principal <b>Operacional</b> · alternativa <b>Investimento</b> (retorno sobre investimento).</li>'+
      '<li><b>Juros pagos:</b> principal <b>Operacional</b> · alternativa <b>Financiamento</b> (custo de obtenção de recursos).</li>'+
      '<li><b>Dividendos recebidos:</b> principal <b>Operacional</b> · alternativa <b>Investimento</b>.</li>'+
      '<li><b>Dividendos pagos:</b> principal <b>Financiamento</b> · alternativa <b>Operacional</b> (auxilia o usuário a verificar a capacidade de pagar dividendos com o caixa operacional).</li></ul>'+
      '<p>A classificação principal é a do <b>item 34A</b>, <b>fortemente encorajada</b>; a alternativa vem dos <b>itens 33 e 34</b> e <b>deve ser seguida de nota</b> evidenciando o fato. Os <b>JSCP têm a mesma classificação dos dividendos</b>.</p></div>'+
      '<div class="box"><span class="bl">IR e CSLL — item 35</span>'+
      '<p>Devem ser <b>divulgados separadamente</b> e classificados como <b>atividades operacionais</b>, <b>exceto</b> se puderem ser <b>identificados especificamente</b> como atividades de <b>financiamento ou de investimento</b>.</p></div>')
  ],
  V3:[
    sl("Método indireto e fluxo de caixa em moeda estrangeira",
      '<div class="box"><span class="bl">Item 20 — o que se ajusta</span>'+
      '<p>No <b>método indireto</b>, o fluxo de caixa líquido das atividades operacionais é determinado <b>ajustando o lucro líquido ou prejuízo</b> quanto aos efeitos de:</p>'+
      '<ul><li>variações nos <b>estoques</b> e nas <b>contas operacionais a receber e a pagar</b>;</li>'+
      '<li><b>itens que não afetam o caixa</b>: <b>depreciação</b>, <b>provisões</b>, <b>tributos diferidos</b>, <b>ganhos e perdas cambiais não realizados</b> e <b>resultado de equivalência patrimonial</b>;</li>'+
      '<li>todos os <b>outros itens</b> tratados como fluxos de <b>investimento</b> (ex.: venda de terreno) e de <b>financiamento</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Qual a ideia do método indireto</span>'+
      '<p>Descobrir <b>quanto de dinheiro há em caixa partindo de uma demonstração elaborada pelo regime de competência</b>.</p>'+
      '<p><b>Exemplo do resumo:</b> veículo vendido à vista por <b>R$ 50.000</b> com despesa de depreciação de <b>R$ 10.000</b> → lucro por competência de <b>R$ 40.000</b>; mas os <b>R$ 10.000 de depreciação não saíram do caixa</b>. Daí o ajuste, partindo da <b>DRE</b> do último exercício e dos <b>dois últimos Balanços Patrimoniais</b>.</p></div>'+
      '<div class="box"><span class="bl">Os dois passos</span>'+
      '<p><b>1º passo — Lucro Líquido do Exercício (DRE):</b></p>'+
      '<ul><li><b>( + )</b> Depreciação / Amortização / Exaustão</li>'+
      '<li><b>(+ ou −)</b> Resultado de Equivalência Patrimonial</li>'+
      '<li><b>(+ ou −)</b> Resultado da Venda de Investimentos</li>'+
      '<li><b>(+ ou −)</b> Resultado da Venda de Imobilizado</li>'+
      '<li><b>(+ ou −)</b> Resultado da Venda de Intangíveis</li>'+
      '<li><b>( = ) Lucro Ajustado</b></li></ul>'+
      '<p><b>2º passo — a partir do Lucro Ajustado (Balanço Patrimonial):</b></p>'+
      '<ul><li><b>( − )</b> Aumento de Contas Operacionais do Ativo</li>'+
      '<li><b>( + )</b> Diminuição de Contas Operacionais do Ativo</li>'+
      '<li><b>( + )</b> Aumento de Contas Operacionais do Passivo Exigível</li>'+
      '<li><b>( − )</b> Diminuição de Contas Operacionais do Passivo Exigível</li>'+
      '<li><b>( = ) Caixa Líquido (gerado/consumido) pelas Atividades Operacionais</b></li></ul></div>'+
      '<div class="box trap"><span class="bl">OBSERVAÇÕES — o sinal é tudo</span>'+
      '<p>O resultado <b>negativo de depreciação não impacta o caixa</b> → ao resolver a questão, <b>SOME (+)</b>. O resultado <b>positivo de equivalência patrimonial não impacta o caixa</b> → <b>SUBTRAIA (−)</b>. É o ajuste da <b>competência</b> para o <b>caixa</b>.</p>'+
      '<p>O resultado <b>positivo da venda de investimentos, imobilizado e intangível</b> <b>impacta o caixa, porém não é atividade operacional</b> → também se <b>SUBTRAI (−)</b>.</p>'+
      '<p><b>ATIVO — efeito inverso:</b> aumento do ativo <b>reduz</b> o caixa; redução do ativo <b>aumenta</b> o caixa. Comprar mais estoque tira dinheiro; receber de clientes reduz Clientes e aumenta o caixa.</p>'+
      '<p><b>PASSIVO — efeito direto:</b> aumento do passivo <b>aumenta</b> o caixa; redução do passivo <b>reduz</b> o caixa. Contratar empréstimo faz entrar dinheiro.</p></div>'+
      '<div class="box"><span class="bl">Fluxo de caixa em moeda estrangeira — itens 25 e 26</span>'+
      '<p>Devem ser <b>registrados na MOEDA FUNCIONAL</b> da entidade, aplicando-se ao montante em moeda estrangeira as <b>taxas de câmbio</b> entre a moeda funcional e a moeda estrangeira <b>observadas na DATA DA OCORRÊNCIA DO FLUXO DE CAIXA</b>.</p>'+
      '<p><b>Moeda funcional</b> é a moeda do <b>ambiente econômico principal no qual a entidade opera</b> (CPC 02, item 08).</p></div>')
  ]
};

var EX = {
S1:{t:"gap", instr:"Complete a fórmula da variação do caixa",
  before:"Variação do Caixa = ",
  after:" − Saldo Inicial.",
  options:["Saldo Final","Saldo Médio","Saldo do período anterior"], answer:0,
  why:"∆Caixa = SF − SI. A outra forma de ver a mesma coisa é ∆Caixa = AO + AI + AF."},

S2:{t:"mc", instr:"Quem está dispensado da elaboração e publicação da DFC?",
  options:["A companhia fechada com patrimônio líquido, na data do balanço, inferior a R$ 2.000.000",
           "A companhia aberta com patrimônio líquido inferior a R$ 2.000.000",
           "A companhia fechada com patrimônio líquido inferior a R$ 1.000.000",
           "Nenhuma sociedade por ações está dispensada"],
  answer:0,
  why:"Art. 176, § 6º, da Lei 6.404/76 — o limite é de dois milhões de reais."},

S3:{t:"multi", instr:"Marque os requisitos do EQUIVALENTE DE CAIXA",
  options:["Ser aplicação financeira de curto prazo (três meses ou menos, da data da aquisição)",
           "Ter alta liquidez",
           "Ser prontamente conversível em montante conhecido de caixa",
           "Estar sujeita a insignificante risco de mudança de valor",
           "Ter vencimento superior a doze meses",
           "Ser mantida para investimento de longo prazo"],
  answers:[0,1,2,3],
  why:"O item 07 do CPC 03 conta o prazo a partir da data da AQUISIÇÃO."},

S4:{t:"match", instr:"Correlacione cada atividade à sua definição no CPC 03",
  pairs:[["Atividades operacionais","Principais atividades geradoras de receita e outras que não são de investimento nem de financiamento"],
         ["Atividades de investimento","Aquisição e venda de ativos de longo prazo e de outros investimentos não incluídos nos equivalentes de caixa"],
         ["Atividades de financiamento","Resultam em mudanças no tamanho e na composição do capital próprio e do capital de terceiros"],
         ["Fluxos de caixa","Entradas e saídas de caixa e equivalentes de caixa"]]},

S5:{t:"mc", instr:"No desembolso para pagamento de empréstimo com juros, como se classificam as duas parcelas?",
  options:["Juros podem ser atividade operacional; o principal deve ser atividade de financiamento",
           "Juros devem ser financiamento; o principal, operacional",
           "Tudo em atividade de financiamento, obrigatoriamente",
           "Tudo em atividade operacional, obrigatoriamente"],
  answer:0,
  why:"É a OBSERVAÇÃO do resumo: uma única transação pode incluir fluxos de mais de uma atividade."},

S6:{t:"wordbank", instr:"Monte o tratamento dos saldos bancários a descoberto",
  target:["saldos","bancários","a","descoberto","são","incluídos","como","componente","de","caixa","e","equivalentes","de","caixa","reduzindo","o","montante","do","grupo"],
  extra:["passivo","circulante","excluídos","aumentando"],
  why:"Item 08 do CPC 03: eles compõem parte integral da gestão de caixa da entidade."},

S7:{t:"sort", instr:"Classifique cada fluxo de caixa",
  buckets:["Operacional","Investimento","Financiamento"],
  items:[["Recebimento pela venda de mercadorias e prestação de serviços",0],
         ["Recebimento de royalties, honorários e comissões",0],
         ["Pagamento a empregados",0],
         ["Aquisição de ativo imobilizado e de intangíveis",1],
         ["Venda de instrumentos patrimoniais de outras empresas",1],
         ["Adiantamentos e empréstimos feitos a terceiros",1],
         ["Caixa recebido pela emissão de debêntures",2],
         ["Pagamento de dividendos e JSCP",2],
         ["Integralização de capital pelos sócios em dinheiro",2]],
  why:"Somente desembolsos que resultam em ativo entram em investimento."},

S8:{t:"match", instr:"Correlacione as contas do quadro CLASSIFICAÇÕES IMPORTANTES",
  pairs:[["Empréstimos concedidos","Atividade de investimento"],
         ["Empréstimos obtidos","Atividade de financiamento"],
         ["Ações de outras empresas","Atividade de investimento"],
         ["Ações da própria empresa","Atividade de financiamento"]]},

S9:{t:"mc", instr:"Como se classificam os fluxos da compra e venda de títulos e empréstimos mantidos para negociação imediata ou futura?",
  options:["Atividades operacionais, pois são semelhantes a estoques adquiridos para revenda",
           "Atividades de investimento, pois são ativos financeiros",
           "Atividades de financiamento, pois alteram o capital de terceiros",
           "Não são registrados na DFC"],
  answer:0,
  why:"Item 15 do CPC 03. Mesma lógica das antecipações e empréstimos feitos por instituições financeiras."},

S10:{t:"multi", instr:"Marque as situações que NÃO influenciam o fluxo de caixa",
  options:["Pagamento a prazo para aquisição de ativo",
           "Integralização de capital com bens, como terrenos e veículos",
           "Pagamento à vista de ativo imobilizado",
           "Recebimento de caixa pela emissão de ações",
           "Amortização em dinheiro de empréstimo obtido"],
  answers:[0,1],
  why:"São os dois quadros ATENÇÃO: sem desembolso ou sem entrada de dinheiro, não há fluxo de caixa."},

S11:{t:"sort", instr:"Classificação PRINCIPAL do item 34A: operacional ou financiamento?",
  buckets:["Atividade operacional","Atividade de financiamento"],
  items:[["Juros recebidos",0],["Juros pagos",0],["Dividendos recebidos",0],
         ["JSCP recebidos",0],["Dividendos pagos",1],["JSCP pagos",1]],
  why:"O item 34A encoraja fortemente essa classificação; alternativa diferente deve ser seguida de nota."},

S12:{t:"match", instr:"Correlacione cada item do CPC 03 à sua regra",
  pairs:[["Juros pagos — alternativa do item 33","Atividade de financiamento, porque são custos de obtenção de recursos financeiros"],
         ["Juros e dividendos recebidos — alternativa do item 33","Atividade de investimento, porque são retornos sobre investimentos"],
         ["Dividendos e JSCP pagos — alternativa do item 34","Atividade operacional, para auxiliar o usuário a avaliar a capacidade de pagá-los com o caixa operacional"],
         ["IR e CSLL — item 35","Divulgados separadamente e classificados como operacionais, salvo identificação específica em financiamento ou investimento"]]},

S13:{t:"mc", instr:"No método indireto, de que ponto se parte para chegar ao fluxo de caixa operacional?",
  options:["Do lucro líquido ou prejuízo do exercício, ajustado",
           "Do saldo final de caixa e equivalentes de caixa",
           "Do total dos recebimentos de clientes no período",
           "Do patrimônio líquido do período anterior"],
  answer:0,
  why:"Item 20 do CPC 03. O ajuste vai da competência ao caixa, com base na DRE e nos dois últimos balanços."},

S14:{t:"multi", instr:"Marque os ITENS QUE NÃO AFETAM O CAIXA na lista do item 20",
  options:["Depreciação","Provisões","Tributos diferidos",
           "Ganhos e perdas cambiais não realizados",
           "Resultado de equivalência patrimonial",
           "Pagamento de fornecedores em dinheiro",
           "Recebimento de clientes em dinheiro"],
  answers:[0,1,2,3,4],
  why:"Os dois últimos são exatamente movimentações de caixa."},

S15:{t:"sort", instr:"No 1º passo, somar ou subtrair do lucro líquido?",
  buckets:["Somar (+)","Subtrair (−)"],
  items:[["Depreciação",0],["Amortização",0],["Exaustão",0],
         ["Resultado positivo de equivalência patrimonial",1],
         ["Resultado positivo da venda de imobilizado",1],
         ["Resultado positivo da venda de investimentos",1]],
  why:"A depreciação não tirou dinheiro do caixa; a equivalência positiva não trouxe; a venda de imobilizado trouxe, mas não é atividade operacional."},

S16:{t:"sort", instr:"No 2º passo, cada variação aumenta ou reduz o caixa?",
  buckets:["Aumenta o caixa","Reduz o caixa"],
  items:[["Aumento de conta operacional do ativo",1],
         ["Diminuição de conta operacional do ativo",0],
         ["Aumento de conta operacional do passivo exigível",0],
         ["Diminuição de conta operacional do passivo exigível",1]],
  why:"Ativo tem efeito inverso; passivo tem efeito direto."},

S17:{t:"gap", instr:"Complete a regra do fluxo de caixa em moeda estrangeira",
  before:"Os fluxos de caixa advindos de transações em moeda estrangeira devem ser registrados na moeda ",
  after:" da entidade.",
  options:["funcional","de apresentação","de origem da transação"], answer:0,
  why:"Moeda funcional é a do ambiente econômico principal no qual a entidade opera (CPC 02, item 08)."},

S18:{t:"mc", instr:"Qual taxa de câmbio se aplica ao montante em moeda estrangeira?",
  options:["A observada na data da ocorrência do fluxo de caixa",
           "A taxa de fechamento da data do balanço",
           "A taxa média do exercício",
           "A taxa da data de assinatura do contrato"],
  answer:0,
  why:"CPC 03 (R2), itens 25 e 26."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Contabilidade Geral 12","https://www.tecconcursos.com.br/s/Q2ei8z","Q2ei8z"],
  ["Caderno FCC — Contabilidade Geral 12","https://www.tecconcursos.com.br/s/Q2ei9E","Q2ei9E"],
  ["Caderno FGV — Contabilidade Geral 12","https://www.tecconcursos.com.br/s/Q294oW","Q294oW"],
  ["Caderno VUNESP — Contabilidade Geral 12","https://www.tecconcursos.com.br/s/Q2ei9S","Q2ei9S"]
];
var TECNOTA = "O resumo abre dizendo que DFC é assunto praticamente certo em todas as provas de todas as bancas, e a banca ganha dinheiro em três fronteiras. A primeira é o quadro de CLASSIFICAÇÕES IMPORTANTES: empréstimos concedidos são investimento e obtidos são financiamento; ações de outras empresas são investimento e ações da própria empresa são financiamento — e o mesmo vale para as debêntures. A segunda é a tabela de juros e dividendos: pelo item 34A tudo é operacional, menos os dividendos e JSCP pagos, que são financiamento; a alternativa dos itens 33 e 34 inverte isso e exige nota, e os JSCP seguem sempre a classificação dos dividendos. A terceira é o sinal no método indireto: a depreciação soma, a equivalência patrimonial positiva e o resultado positivo da venda de imobilizado, investimentos e intangíveis subtraem, o aumento do ativo reduz o caixa e o aumento do passivo aumenta. Guarde ainda os quatro números e marcos que o resumo repete: PL inferior a R$ 2.000.000 dispensa a companhia fechada, três meses ou menos a contar da data da aquisição para o equivalente de caixa, os R$ 50.000 e R$ 10.000 do exemplo do veículo, e a taxa de câmbio da data da ocorrência do fluxo de caixa.";

var UNITS = [
  {n:1, title:"DFC, CPC 03 e definições", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Objetivo, fórmulas e definições do CPC 03", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · obrigatoriedade e fórmulas",    xp:25, data:["S1","S2","T0","T1","T2","T3","T4"]},
    {id:"K3", type:"drill",  title:"Praticar · caixa e equivalentes",          xp:25, data:["S3","S4","T5","T6","T7","T8","T9","T10"]},
    {id:"K4", type:"drill",  title:"Praticar · definições e saldo a descoberto", xp:25, data:["S5","S6","T11","T12","T13","T14","T15"]},
    {id:"K5", type:"flash",  title:"Flashcards · CPC 03 e definições",         xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12]}
  ]},
  {n:2, title:"As três atividades e as classificações", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Operacional, investimento, financiamento, juros e IR/CSLL", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · atividades operacionais",       xp:25, data:["S7","S8","T16","T17","T18","T19","T20","T21","T22"]},
    {id:"K8", type:"drill",  title:"Praticar · investimento e financiamento",  xp:25, data:["S9","S10","T23","T24","T25","T26","T27","T28","T29","T30","T31"]},
    {id:"K9", type:"drill",  title:"Praticar · juros, dividendos e IR/CSLL",   xp:25, data:["S11","S12","T32","T33","T34","T35","T36","T37","T38","T39"]},
    {id:"K10",type:"flash",  title:"Flashcards · classificação dos fluxos",    xp:15, data:[13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]}
  ]},
  {n:3, title:"Método indireto e moeda estrangeira", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Os dois passos do método indireto e o câmbio", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · o que se ajusta no lucro",      xp:25, data:["S13","S14","T40","T41","T42","T43"]},
    {id:"K13",type:"drill",  title:"Praticar · o sinal de cada ajuste",        xp:25, data:["S15","S16","T44","T45","T46","T47"]},
    {id:"K14",type:"drill",  title:"Praticar · exemplo e moeda estrangeira",   xp:25, data:["S17","S18","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · método indireto e câmbio",    xp:15, data:[31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                 xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                    xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                   xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 12 de Contabilidade (Radegondes) ---------- */
var COM={
0:"<p>Certo. É a primeira frase do resumo: <b>“a Demonstração dos Fluxos de Caixa (DFC) integra o conjunto completo de demonstrações contábeis das sociedades por ações”</b>.</p><p>Integrar o conjunto completo não significa que todas elaborem: o próprio resumo emenda a dispensa da companhia fechada com PL inferior a R$ 2.000.000.</p><p class='fb-fonte'>Resumo 12 · <i>DFC — Contextualização</i></p>",
1:"<p>Certo pela letra do dispositivo transcrito no resumo: a <b>lei 6.404/76, em seu art. 176, § 6º</b>, dispõe que <b>“a companhia fechada com patrimônio líquido, na data do balanço, inferior a R$ 2.000.000 (dois milhões de reais) não será obrigada à elaboração e publicação da demonstração dos fluxos de caixa”</b>.</p><p>Guarde os três elementos: <b>companhia fechada</b> · <b>PL na data do balanço</b> · <b>inferior a dois milhões</b>.</p><p class='fb-fonte'>Resumo 12 · <i>DFC — Contextualização</i></p>",
2:"<p>Errado por um número. O resumo traz <b>R$ 2.000.000 (dois milhões de reais)</b>, não um milhão.</p><p>É a troca de valor mais comum neste ponto. Confira também os outros dois filtros do § 6º: tem de ser <b>companhia fechada</b> e o PL é medido <b>na data do balanço</b>.</p><p class='fb-fonte'>Resumo 12 · <i>DFC — Contextualização</i></p>",
3:"<p>Certo — é o objetivo do CPC 03 no resumo: <b>“requerer a prestação de informações acerca das alterações históricas de caixa (e equivalentes de caixa) da entidade por meio de demonstração dos fluxos de caixa advindos das atividades operacionais, de investimento e de financiamento”</b>.</p><p>Repare que o objeto é <b>caixa E equivalentes de caixa</b>, e não apenas o caixa.</p><p class='fb-fonte'>Resumo 12 · <i>CPC 03 — Demonstração dos Fluxos de Caixa</i></p>",
4:"<p>Errado. Inverteu os termos da subtração. O resumo é direto: <b>“Variação do Caixa = Saldo Final – Saldo Inicial”</b>, ou <b>∆Caixa = SF − SI</b>.</p><p>Guarde as duas fórmulas juntas, porque a banca alterna entre elas: <b>∆Caixa = SF − SI</b> e <b>∆Caixa = AO + AI + AF</b>.</p><p class='fb-fonte'>Resumo 12 · <i>CPC 03 — variação do caixa</i></p>",
5:"<p>Certo. É a segunda fórmula do resumo: <b>“Variação do Caixa = Ativ. Operacional + Ativ. de Investimento + Ativ. de Financiamento”</b>, isto é, <b>∆Caixa = AO + AI + AF</b>.</p><p>As duas fórmulas conversam: o que se apura pelas três atividades tem de fechar com <b>SF − SI</b>.</p><p class='fb-fonte'>Resumo 12 · <i>CPC 03 — variação do caixa</i></p>",
6:"<p>Errado — inverteu as duas parcelas. Na <b>OBSERVAÇÃO</b> do resumo, no desembolso para pagamento de empréstimo com juros: <b>“a parte dos juros pode ser classificada como atividade operacional; e a parte do principal deve ser classificada como atividade de financiamento”</b>.</p><p>Note ainda a diferença de força dos verbos: os juros <b>podem</b> ser operacionais; o principal <b>deve</b> ser financiamento. É esse exemplo que prova a regra de que <b>uma única transação pode incluir fluxos de caixa classificados em mais de uma atividade</b>.</p><p class='fb-fonte'>Resumo 12 · <i>CPC 03 — Observação (uma transação, mais de uma atividade)</i></p>",
7:"<p>Certo. O resumo responde à pergunta <b>“quais demonstrações são utilizadas para preparar a DFC?”</b> assim: <b>“na Demonstração do Resultado do Exercício (DRE) do período em análise; e nos Balanços Patrimoniais do período em análise e do período anterior”</b>.</p><p>São <b>dois</b> balanços, porque o método indireto compara saldos para achar as variações.</p><p class='fb-fonte'>Resumo 12 · <i>Quais demonstrações são utilizadas para preparar a DFC</i></p>",
8:"<p>Errado por uma palavra: o resumo define equivalentes de caixa como <b>“aplicações financeiras de CURTO prazo, de alta liquidez, que são prontamente conversíveis em montante conhecido de caixa e que estão sujeitas a um insignificante risco de mudança de valor”</b>.</p><p>O esquema do resumo lista os cinco traços: <b>aplicação financeira</b> · <b>curto prazo (três meses ou menos)</b> · <b>alta liquidez</b> · <b>prontamente conversível em dinheiro</b> · <b>insignificante risco de mudança de valor</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Definições importantes — equivalente de caixa</i></p>",
9:"<p>Certo, e a assertiva reproduz o marco temporal certo. O resumo anota: <b>“o item 07 do CPC 03 dispõe que um investimento normalmente qualifica-se como equivalente de caixa somente quando tem vencimento de curto prazo, por exemplo, três meses ou menos, a contar da data da AQUISIÇÃO”</b>.</p><p>Aqui a banca costuma trocar o marco inicial: a contagem é da <b>aquisição</b>, não da data do balanço.</p><p class='fb-fonte'>Resumo 12 · <i>Definições importantes — equivalente de caixa</i></p>",
10:"<p>Errado. A assertiva descreve as <b>atividades de investimento</b>, que o resumo define como <b>“as atividades referentes à aquisição e à venda de ativos de longo prazo e de outros investimentos não incluídos nos equivalentes de caixa”</b>.</p><p>As <b>operacionais</b> são <b>“as principais atividades geradoras de receita da entidade e outras atividades que não são de investimento e tampouco de financiamento”</b> — definição residual: o que não é investimento nem financiamento cai em operacional.</p><p class='fb-fonte'>Resumo 12 · <i>Definições importantes — atividades operacionais e de investimento</i></p>",
11:"<p>Certo, é a definição literal do resumo para as <b>atividades de investimento</b>: <b>“são as atividades referentes à aquisição e à venda de ativos de longo prazo e de outros investimentos não incluídos nos equivalentes de caixa”</b>.</p><p>A ressalva final importa: se o investimento <b>está</b> nos equivalentes de caixa, ele não vira atividade de investimento — é o próprio caixa.</p><p class='fb-fonte'>Resumo 12 · <i>Definições importantes — atividades de investimento</i></p>",
12:"<p>Certo pela definição do resumo: atividades de financiamento <b>“são aquelas que resultam em mudanças no tamanho e na composição do capital próprio (PL) e no capital de terceiros (passivo) da entidade”</b>.</p><p>Os dois lados aparecem: <b>capital próprio</b> (emissão de ações, integralização, dividendos pagos) e <b>capital de terceiros</b> (debêntures, empréstimos obtidos e sua amortização).</p><p class='fb-fonte'>Resumo 12 · <i>Definições importantes — atividades de financiamento</i></p>",
13:"<p>Errado. O quadro <b>ATENÇÃO!</b> do resumo diz o contrário: <b>“o item 08 do CPC 03 assevera que empréstimos bancários são geralmente considerados como atividades de FINANCIAMENTO”</b>.</p><p>A parte operacional do item 08 é a exceção seguinte: os <b>saldos bancários a descoberto</b> liquidados em curto lapso temporal, que compõem a <b>gestão de caixa</b> e entram no próprio grupo de caixa e equivalentes.</p><p class='fb-fonte'>Resumo 12 · <i>Atenção! — item 08 e saldos bancários a descoberto</i></p>",
14:"<p>Certo, e nos dois pontos. O resumo: <b>“saldos bancários a descoberto, decorrentes de empréstimos obtidos por meio de instrumentos como cheques especiais ou contas correntes garantidas que são liquidados em curto lapso temporal compõem parte integral da gestão de caixa da entidade. Nessas circunstâncias, saldos bancários a descoberto são incluídos como componente de caixa e equivalentes de caixa”</b>.</p><p>E ele fecha explicando a função: <b>“com a função de reduzir o montante do grupo”</b>. Uma característica desses arranjos é que <b>os saldos flutuam de devedor para credor</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Atenção! — saldos bancários a descoberto</i></p>",
15:"<p>Errado no efeito. O resumo é expresso: os saldos bancários a descoberto são incluídos em caixa e equivalentes <b>“com a função de REDUZIR o montante do grupo”</b>.</p><p>Faz sentido: é dívida de curtíssimo prazo (cheque especial, conta garantida) dentro da gestão de caixa — entra no grupo, mas como <b>parcela negativa</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Atenção! — saldos bancários a descoberto</i></p>",
16:"<p>Certo. É a abertura da seção no resumo: <b>“o montante dos fluxos de caixa advindos das atividades operacionais é um indicador chave para saber se a entidade tem gerado fluxo de caixa suficiente para pagar empréstimos, manter a capacidade operacional, pagar dividendos e fazer novos investimentos sem recorrer a fontes externas de financiamento”</b>.</p><p>São quatro usos e uma condição: fazer tudo isso <b>sem recorrer a fontes externas</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades operacionais</i></p>",
17:"<p>Errado. Está na lista de exemplos de fluxos <b>operacionais</b> do resumo: <b>“(+) recebimentos de caixa decorrentes de royalties, honorários, comissões e outras receitas”</b>.</p><p>A lista completa do resumo é curta e vale decorar: venda de mercadorias e prestação de serviços · royalties, honorários e comissões · pagamentos a fornecedores · pagamentos a empregados · recebimentos e pagamentos por <b>seguradora de prêmios e sinistros</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades operacionais — exemplos</i></p>",
18:"<p>Certo — são os quatro primeiros exemplos da lista do resumo: <b>“(+) recebimentos de caixa pela venda de mercadorias e pela prestação de serviços”</b>, <b>“(-) pagamentos de caixa a fornecedores de mercadorias e serviços”</b> e <b>“(-) pagamentos de caixa a empregados”</b>.</p><p>Isso é o coração do fluxo operacional: entra da atividade-fim, sai para quem a viabiliza.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades operacionais — exemplos</i></p>",
19:"<p>Certo. É o último exemplo da lista do resumo: <b>“(+) recebimentos e (-) pagamentos de caixa por seguradora de prêmios e sinistros”</b>.</p><p>A lógica é a mesma dos empréstimos feitos por instituição financeira: para a seguradora, prêmios e sinistros <b>são a atividade-fim</b>, logo operacionais.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades operacionais — exemplos</i></p>",
20:"<p>Certo, é a regra geral do item 14 tal como o resumo a transcreve: <b>“os fluxos de caixa relativos à venda de item do imobilizado são fluxos de caixa provenientes de atividades de investimento”</b>.</p><p>Mas leia até o fim do item: vem logo em seguida a exceção dos <b>ativos mantidos para aluguel a terceiros</b> que, em sequência, são vendidos — esses viram <b>operacionais</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades operacionais — item 14</i></p>",
21:"<p>Errado — é exatamente a exceção do item 14. O resumo: <b>“pagamentos em caixa para a produção ou a aquisição de ativos mantidos para aluguel a terceiros que, em sequência, são vendidos são fluxos de caixa advindos das ATIVIDADES OPERACIONAIS”</b>.</p><p>O esquema do resumo resume assim: <b>ATIVOS MANTIDOS PARA ALUGUEL A TERCEIROS → FLUXO DE CAIXA DAS ATIVIDADES OPERACIONAIS</b>. O ativo funciona como um estoque da operação de aluguel.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades operacionais — item 14</i></p>",
22:"<p>Certo, e a assertiva pega a parte final do item 14 no resumo: <b>“os recebimentos de aluguéis e das vendas subsequentes de tais ativos são também fluxos de caixa das atividades operacionais”</b>.</p><p>Então o ciclo inteiro do ativo mantido para aluguel — aquisição, aluguéis e venda subsequente — fica em <b>operacional</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades operacionais — item 14</i></p>",
23:"<p>Errado. O item 15, no resumo: a entidade pode manter títulos e empréstimos para negociação imediata ou futura, <b>“os quais, no caso, são semelhantes a estoques adquiridos especificamente para revenda. Dessa forma, os fluxos de caixa advindos da compra e venda desses títulos são classificados como ATIVIDADES OPERACIONAIS”</b>.</p><p>O esquema do resumo põe lado a lado os dois casos do item 15: <b>títulos e empréstimos para negociação</b> → operacional por serem semelhantes a estoques; <b>empréstimo feito por instituição financeira</b> → operacional por ser a principal atividade da entidade.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades operacionais — item 15</i></p>",
24:"<p>Certo pela literalidade do resumo: <b>“as antecipações de caixa e os empréstimos feitos por instituições financeiras são comumente classificados como atividades operacionais, uma vez que se referem à principal atividade geradora de receita dessas entidades”</b>.</p><p>Compare com a regra geral do quadro de classificações: <b>empréstimo concedido</b> é atividade de <b>investimento</b> — salvo quando emprestar <b>é</b> o negócio da entidade.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades operacionais — item 15</i></p>",
25:"<p>Certo. É a frase que abre a seção no resumo: <b>“somente desembolsos que resultam em ativo são passíveis de classificação como atividades de investimento”</b>.</p><p>É dessa regra que sai o quadro <b>ATENÇÃO!</b> seguinte: <b>pagamento a prazo</b> para aquisição de ativo não influencia o fluxo de caixa de investimento, porque não houve desembolso.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades de investimento</i></p>",
26:"<p>Errado. Na lista do resumo, dentro das atividades de <b>investimento</b>: <b>“(-) aquisição de instrumentos patrimoniais (participação em outras empresas)”</b> e <b>“(+) venda de instrumentos patrimoniais”</b>.</p><p>O quadro de classificações importantes explica o critério: <b>ações de outras empresas → investimento</b>; <b>ações da própria empresa → financiamento</b>. Comprar participação é investir o próprio dinheiro.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades de investimento — exemplos</i></p>",
27:"<p>Errado. Quadro <b>ATENÇÃO!</b> do resumo, em uma linha: <b>“pagamento a prazo para aquisição de ativo não influencia o fluxo de caixa da atividade de Investimento”</b>.</p><p>Casa com a regra de entrada da seção: <b>somente desembolsos</b> que resultam em ativo entram em investimento. Sem saída de caixa, não há fluxo a registrar — o efeito virá quando a parcela for paga.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades de investimento — Atenção!</i></p>",
28:"<p>Errado no grupo. Está na lista das atividades de <b>financiamento</b> do resumo: <b>“(+) caixa recebido pela emissão de debêntures, empréstimos de curto e longo prazo”</b>.</p><p>E a contrapartida também é de financiamento: <b>“(-) resgate (pagamento) de Debêntures, amortização (pagamento) de empréstimos”</b>. O critério é o do quadro: emitir para captar recursos é ser <b>financiado</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades de financiamento — exemplos</i></p>",
29:"<p>Errado no grupo. O resumo lista entre as atividades de <b>financiamento</b>: <b>“(+) integralização de capital pelos sócios (em dinheiro)”</b>.</p><p>Faz sentido pela definição: financiamento é o que muda o <b>tamanho e a composição do capital próprio (PL)</b> — e integralizar capital é exatamente isso. Repare no parêntese: tem de ser <b>em dinheiro</b>, porque com bens não há fluxo de caixa algum.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades de financiamento — exemplos</i></p>",
30:"<p>Certo. Quadro <b>ATENÇÃO!</b> das atividades de financiamento: <b>“Integralização de Capital com Bens (terrenos, veículos) não influencia o fluxo de caixa”</b>.</p><p>Guarde os dois quadros ATENÇÃO como par, porque a banca cobra os dois juntos: <b>aquisição de ativo a prazo</b> e <b>integralização com bens</b> — nenhum dos dois passa pelo caixa.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades de financiamento — Atenção!</i></p>",
31:"<p>Errado — inverteu. No quadro <b>EMPRÉSTIMOS</b> do resumo: <b>CONCEDIDOS → Atividade de Investimento</b>; <b>OBTIDOS → Atividade de Financiamento</b>.</p><p>O resumo avisa que essas contas <b>“costumam nos confundir devido ao jogo de palavras”</b>. Ancore no verbo: se a empresa <b>concede</b>, o dinheiro sai para formar um direito, logo <b>investe</b>; se <b>obtém</b>, ela está sendo <b>financiada</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Classificações importantes — empréstimos</i></p>",
32:"<p>Certo, é o quadro <b>AÇÕES</b> do resumo: <b>DE OUTRAS EMPRESAS → Atividade de Investimento</b>; <b>DA PRÓPRIA EMPRESA → Atividade de Financiamento</b>.</p><p>A explicação dele: <b>“se a empresa adquire ações de outra empresa ela está investindo seu dinheiro na compra de tais ações. Por outro lado, se a empresa faz uma emissão de suas ações para captar dinheiro junto a terceiros, então ela será financiada pelos acionistas que vão adquirir tais ações”</b>. E o resumo completa: <b>“o mesmo raciocínio vale para as Debêntures”</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Classificações importantes — ações</i></p>",
33:"<p>Certo, é a <b>OBSERVAÇÃO 1</b> do resumo: <b>“o item 34A do CPC 03 encoraja fortemente as entidades a classificarem os juros, recebidos ou pagos, e os dividendos e juros sobre o capital próprio recebidos como fluxos de caixa das atividades operacionais, e os dividendos e juros sobre o capital próprio pagos como fluxos de caixa das atividades de financiamento”</b>.</p><p>A regra de bolso da tabela: na classificação <b>principal</b> tudo é <b>operacional</b>, com uma única saída — <b>dividendos e JSCP pagos</b>, que são <b>financiamento</b>. O resumo ainda avisa: <b>“alternativa diferente deve ser seguida de nota evidenciando esse fato”</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Observações — itens 33, 34 e 34A</i></p>",
34:"<p>Errado — trocou a coluna da tabela. Na <b>CLASSIFICAÇÃO PRINCIPAL</b> (item 34A), <b>DIVIDENDOS PAGOS → Atividade de Financiamento</b>.</p><p>Operacional para os dividendos pagos é a <b>CLASSIFICAÇÃO ALTERNATIVA</b> do <b>item 34</b>, e o resumo dá o motivo: <b>“a fim de auxiliar os usuários a determinar a capacidade de a entidade pagar dividendos e juros sobre o capital próprio utilizando os fluxos de caixa operacionais”</b>. E os <b>JSCP seguem a mesma classificação dos dividendos</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Observações — esquema dos itens 33, 34 e 34A</i></p>",
35:"<p>Certo, com a justificativa correta. <b>OBSERVAÇÃO 2</b> do resumo: <b>“o item 33 do CPC 03 dispõe que alternativamente, os juros pagos e os juros, os dividendos e os juros sobre o capital próprio recebidos podem ser classificados, respectivamente, como fluxos de caixa de financiamento e fluxos de caixa de investimento, porque são custos de obtenção de recursos financeiros ou retornos sobre investimentos”</b>.</p><p>Na tabela do resumo: <b>JUROS PAGOS → alternativa: Atividade de Financiamento, porque são custos de obtenção de recursos</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Observações — item 33</i></p>",
36:"<p>Errado no grupo, embora o motivo esteja certo. Na alternativa do <b>item 33</b>, o que é <b>recebido</b> (juros, dividendos e JSCP) vai para <b>atividade de INVESTIMENTO</b>, <b>“porque são retornos sobre investimentos”</b>. Financiamento, na alternativa, é o destino dos <b>juros PAGOS</b>, <b>“porque são custos de obtenção de recursos financeiros”</b>.</p><p>O par da tabela é fácil de fixar: <b>recebi → investimento</b> (retorno); <b>paguei juros → financiamento</b> (custo do dinheiro).</p><p class='fb-fonte'>Resumo 12 · <i>Observações — esquema dos itens 33, 34 e 34A</i></p>",
37:"<p>Certo. É a <b>OBSERVAÇÃO 3</b> do resumo: <b>“o item 34 do CPC 03 dispõe que alternativamente, os dividendos e os juros sobre o capital próprio pagos podem ser classificados como componente dos fluxos de caixa das atividades operacionais, a fim de auxiliar os usuários a determinar a capacidade de a entidade pagar dividendos e juros sobre o capital próprio utilizando os fluxos de caixa operacionais”</b>.</p><p>Não confunda com a principal: no <b>item 34A</b>, dividendos e JSCP pagos são <b>financiamento</b>. Aqui é a coluna da <b>alternativa</b>, e ela exige <b>nota</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Observações — item 34</i></p>",
38:"<p>Errado. A observação final do esquema do resumo é categórica: <b>“os Juros Sobre Capital Próprio (JSCP) possuem a MESMA classificação dada aos dividendos”</b>.</p><p>Então: <b>JSCP recebidos</b> acompanham os dividendos recebidos (principal operacional, alternativa investimento) e <b>JSCP pagos</b> acompanham os dividendos pagos (principal financiamento, alternativa operacional).</p><p class='fb-fonte'>Resumo 12 · <i>Observações — esquema dos itens 33, 34 e 34A</i></p>",
39:"<p>Certo, palavra por palavra. O resumo: <b>“o item 35 do CPC 03 estabelece que os fluxos de caixa referentes ao imposto de renda (IR) e contribuição social sobre o lucro líquido (CSLL) devem ser divulgados separadamente e devem ser classificados como fluxos de caixa das atividades operacionais, a menos que possam ser identificados especificamente como atividades de financiamento e de investimento”</b>.</p><p>O esquema do resumo separa as três ideias: <b>divulgados separadamente</b> · <b>classificados como operacional</b> · <b>exceto se identificados especificamente</b> como financiamento ou investimento. A banca costuma suprimir a exceção.</p><p class='fb-fonte'>Resumo 12 · <i>Imposto de renda e contribuição social sobre o lucro líquido</i></p>",
40:"<p>Certo. É o caput do item 20 como o resumo o traz: <b>“no método indireto, o fluxo de caixa líquido advindo das atividades operacionais é determinado ajustando o lucro líquido ou prejuízo”</b> quanto aos efeitos de três grupos de itens.</p><p>Os três grupos: <b>1)</b> variações nos <b>estoques</b> e nas <b>contas operacionais a receber e a pagar</b>; <b>2)</b> <b>itens que não afetam o caixa</b>; <b>3)</b> todos os outros itens tratados como fluxos de <b>investimento</b> (ex.: venda de terreno) e de <b>financiamento</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Fluxo de caixa operacional pelo método indireto — item 20</i></p>",
41:"<p>Certo — é exatamente a lista de <b>“itens que não afetam o caixa”</b> do item 20 no resumo: <b>depreciação</b>; <b>provisões</b>; <b>tributos diferidos</b>; <b>ganhos e perdas cambiais não realizados</b>; <b>resultado de equivalência patrimonial</b>.</p><p>São cinco. Vale decorar na ordem, porque a banca gosta de inserir na lista algo que <b>afeta</b> o caixa, como pagamento a fornecedores.</p><p class='fb-fonte'>Resumo 12 · <i>Método indireto — itens que não afetam o caixa</i></p>",
42:"<p>Errado no sinal. A <b>OBSERVAÇÃO 1</b> do resumo: <b>“o resultado negativo (-) de depreciação não impacta o caixa, ou seja, não sai dinheiro do caixa, por isso, quando estivermos resolvendo a questão, devemos SOMAR (+) este valor para ajustar o regime de competência ao regime de caixa”</b>.</p><p>No 1º passo do esquema, a linha é <b>“( + ) Depreciação/Amortização/Exaustão”</b>. A despesa reduziu o lucro sem reduzir o caixa, então se devolve.</p><p class='fb-fonte'>Resumo 12 · <i>Método indireto — Observações (sinais do ajuste)</i></p>",
43:"<p>Certo, e pelo motivo do resumo: <b>“o resultado positivo (+) de equivalência patrimonial não impacta o caixa, ou seja, não entra dinheiro no caixa, por isso, quando estivermos resolvendo a questão, devemos subtrair (-) este valor para ajustar o regime de competência ao regime de caixa”</b>.</p><p>É o espelho da depreciação: aumentou o lucro sem entrar dinheiro, então sai do ajuste. No esquema do 1º passo a linha aparece como <b>“(+ ou -) Resultado de Equivalência Patrimonial”</b>, e o sinal depende de o resultado ser positivo ou negativo.</p><p class='fb-fonte'>Resumo 12 · <i>Método indireto — Observações (sinais do ajuste)</i></p>",
44:"<p>Errado no sinal. <b>OBSERVAÇÃO 2</b> do resumo: <b>“o resultado positivo (+) da Venda de Investimentos, imobilizado e intangível impactam o caixa, porém não fazem parte da Atividade Operacional. Nesses casos, também devemos SUBTRAIR (-) estes valores”</b>.</p><p>Repare na diferença de motivo em relação à depreciação: aqui o dinheiro <b>entrou</b>, mas entrou na atividade de <b>investimento</b> — por isso sai do fluxo operacional e é mostrado no grupo próprio.</p><p class='fb-fonte'>Resumo 12 · <i>Método indireto — Observações (venda de investimentos e imobilizado)</i></p>",
45:"<p>Certo. É a primeira linha do <b>2º passo</b> no esquema do resumo: <b>“( – ) Aumento de Contas Operacionais do Ativo”</b>, aplicada sobre o <b>Lucro Ajustado</b>.</p><p>A razão está na <b>OBSERVAÇÃO 3</b>: <b>“aumento do ativo - reduz o caixa”</b>. O exemplo do resumo: <b>“se você compra mais estoques, então sai dinheiro do caixa”</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Método indireto — 2º passo e Observação 3</i></p>",
46:"<p>Errado no sinal. No <b>2º passo</b> do esquema do resumo: <b>“( + ) Aumento de Contas Operacionais do Passivo Exigível”</b> e <b>“( – ) Diminuição de Contas Operacionais do Passivo Exigível”</b>.</p><p>A <b>OBSERVAÇÃO 4</b> dá a chave: o passivo tem <b>efeito direto</b> no caixa — <b>“aumento do Passivo - Aumenta o Caixa”</b>. O exemplo é o do empréstimo: <b>“se você contrata um empréstimo, então entra dinheiro no caixa”</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Método indireto — 2º passo e Observação 4</i></p>",
47:"<p>Certo. <b>OBSERVAÇÃO 3</b> do resumo, sobre o 2º ajuste: <b>“um aumento ou uma redução do Ativo provoca um efeito INVERSO no caixa: aumento do ativo - reduz o caixa; redução do Ativo - aumenta o caixa”</b>.</p><p>Os dois exemplos dele: comprar estoque aumenta <b>Estoques</b> e reduz o caixa; <b>“o recebimento de clientes reduz a conta Clientes (ativo) e aumenta o caixa”</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Método indireto — Observação 3</i></p>",
48:"<p>Errado. Para o passivo o efeito é <b>direto</b>, não inverso. <b>OBSERVAÇÃO 4</b> do resumo: <b>“aumento do Passivo - Aumenta o Caixa; redução do Passivo - Reduz o Caixa”</b>.</p><p>Fixe o par: <b>ativo → efeito inverso</b>; <b>passivo → efeito direto</b>. É a troca de sinal que a banca mais explora no método indireto.</p><p class='fb-fonte'>Resumo 12 · <i>Método indireto — Observação 4</i></p>",
49:"<p>Certo — é o exemplo do resumo, com os mesmos números. Ele explica a ideia do método indireto assim: <b>“se você vende à vista um veículo por R$ 50.000, mas tem uma despesa de depreciação contabilizada por R$ 10.000, então seu lucro apurado pelo regime de competência é de R$ 40.000, porém os R$ 10.000 de depreciação não saíram do caixa”</b>.</p><p>É por isso que existe o método indireto: partir da <b>DRE do último exercício</b> e dos <b>dois últimos Balanços Patrimoniais</b> para fazer os ajustes e descobrir quanto de fato há no caixa.</p><p class='fb-fonte'>Resumo 12 · <i>Método indireto — qual a ideia</i></p>",
50:"<p>Certo, é a regra dos <b>itens 25 e 26 do CPC 03 (R2)</b> no resumo: <b>“os Fluxos de Caixa advindos de transações em Moeda Estrangeira devem ser registrados na Moeda Funcional da entidade pela aplicação, ao montante em moeda estrangeira, das taxas de câmbio entre a moeda funcional e moeda estrangeira observadas na data da ocorrência do Fluxo de Caixa”</b>.</p><p>O resumo lembra ainda que <b>moeda funcional</b> é <b>“a moeda do ambiente econômico principal no qual a entidade opera”</b> (CPC 02, item 08).</p><p class='fb-fonte'>Resumo 12 · <i>Fluxo de caixa em moeda estrangeira</i></p>",
51:"<p>Errado na data da taxa. O esquema do resumo é de duas linhas: <b>registrado na Moeda Funcional</b> e <b>“aplica-se a taxa de câmbio na DATA DA OCORRÊNCIA DO FLUXO DE CAIXA”</b>.</p><p>Faz sentido pelo objeto da demonstração: a DFC mostra <b>quando o dinheiro entrou ou saiu</b>, então a conversão acompanha a data do próprio fluxo, e não a data do balanço.</p><p class='fb-fonte'>Resumo 12 · <i>Fluxo de caixa em moeda estrangeira</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"12", nome:"Demonstração dos Fluxos de Caixa (CPC 03)", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
