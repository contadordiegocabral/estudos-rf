/* Contabilidade Geral — Módulo 04: Estoques e operações com mercadorias (CPC 16) (modo direto) */
window.MOD = window.MOD || {};
window.MOD.contab04 = (function(){
"use strict";

var CARDS = [
  ["Qual a principal receita e o principal custo da entidade comercial?","As mercadorias geram a <b>Receita Bruta de Vendas</b> (a mais importante fonte de receita) e respondem pelo <b>Custo da Mercadoria Vendida (CMV)</b>, o principal custo."],
  ["Como a Lei 6.404/76 (art. 183, II) manda avaliar mercadorias e produtos do comércio?","Pelo <b>custo de aquisição ou produção</b>, <b>deduzido de provisão para ajustá-lo ao valor de mercado, quando este for inferior</b>."],
  ["Como o CPC 16 (item 9) manda mensurar os estoques?","Pelo <b>valor de custo</b> ou pelo <b>valor realizável líquido</b> — <b>dos dois, o MENOR</b>."],
  ["O que é WRITE DOWN?","Técnica utilizada para <b>reduzir o valor dos estoques ao Valor Realizável Líquido</b>, porque os custos podem <b>não ser recuperáveis</b> se os itens estiverem <b>danificados</b>, <b>obsoletos</b> ou se seus <b>preços de venda tiverem diminuído</b>."],
  ["Estoque de R$ 2.000 com 20 bolsas vendidas a R$ 120; promoção reduz o preço a R$ 90. Qual o custo unitário após o ajuste?","Custo inicial unitário = <b>2.000 / 20 = R$ 100</b>. VRL = <b>R$ 90</b>. Dos dois, o menor: <b>R$ 90</b>. Estoque ajustado = <b>90 × 20 = R$ 1.800</b>."],
  ["No mesmo exemplo, vendidas cinco bolsas, qual o saldo do estoque?","Sobram <b>15 unidades a R$ 90</b> = <b>R$ 1.350</b>."],
  ["Lançamento do ajuste ao valor realizável líquido","<b>D</b> Despesa com perda para redução ao VRL (<b>despesa operacional</b>) R$ 10 · <b>C</b> Perdas por redução ao VRL em estoques (<b>retificadora do ativo</b>) R$ 10."],
  ["O que o valor de custo do estoque deve incluir?","<b>Todos os custos de aquisição e de transformação</b>, bem como <b>outros custos incorridos para trazer os estoques à sua condição e localização atuais</b>."],
  ["Quais as parcelas somadas no custo de aquisição dos estoques?","<b>Preço de compra</b> + <b>tributos (exceto os recuperáveis)</b> + <b>transporte</b> + <b>seguro e manuseio</b>."],
  ["O que se DEDUZ depois de somar as parcelas do custo de aquisição?","Os <b>descontos comerciais (incondicionais)</b> e os <b>abatimentos</b>."],
  ["Itens NÃO incluídos no custo dos estoques","<b>Valor ANORMAL de desperdício</b> de materiais, mão de obra e insumos · <b>tributos recuperáveis</b> · <b>gastos com armazenamento</b> (exceto se necessários ao processo produtivo) · <b>despesas administrativas</b> que não contribuem para trazer o estoque ao local · <b>despesas de comercialização</b> (ex.: divulgação)."],
  ["Livraria: 500 livros por R$ 35.000, frete de R$ 3.000 e folhetos de divulgação de R$ 5.000. Qual o custo de aquisição?","<b>35.000 + 3.000 = R$ 38.000</b>. Os <b>gastos com divulgação NÃO fazem parte</b> do custo do estoque — são despesas."],
  ["No mesmo exemplo, qual o custo unitário do livro?","<b>38.000 / 500 = R$ 76</b>."],
  ["Preços de venda do livro: jan R$ 100, fev R$ 80, mar R$ 70, abr R$ 85. Em que mês o estoque é mensurado pelo VRL?","Somente em <b>março</b>, porque só nele o <b>VRL (R$ 70)</b> é <b>inferior ao custo (R$ 76)</b>."],
  ["No mesmo exemplo, qual o CMV de cada mês e o total?","Jan <b>76 × 100 = 7.600</b> · Fev <b>76 × 50 = 3.800</b> · Mar <b>70 × 200 = 14.000</b> · Abr <b>76 × 40 = 3.040</b> · <b>CMV total = R$ 28.440</b>."],
  ["Mercadoria destinada à comercialização ou à industrialização — e o IPI?","O IPI <b>NÃO fará parte</b> da base de cálculo do ICMS."],
  ["Mercadoria destinada ao ativo fixo ou ao uso e consumo do comprador — e o IPI?","O IPI <b>FARÁ parte</b> da base de cálculo do ICMS."],
  ["O que caracteriza o INVENTÁRIO PERIÓDICO?","A empresa <b>não controla</b> seus estoques ao longo do período: o controle é feito por <b>levantamento físico ao final de cada período</b>. O saldo só é conhecido com a <b>contagem física</b>."],
  ["Como se calcula o CMV no inventário periódico?","<b>CMV = ESTOQUE INICIAL + COMPRAS − ESTOQUE FINAL</b>."],
  ["O que caracteriza o INVENTÁRIO PERMANENTE?","Controle <b>contínuo</b>, por meio de <b>fichas de controle</b>. O valor do estoque <b>pode ser conhecido a qualquer momento</b> pelo saldo da conta de mercadorias, e o resultado das vendas é calculado de imediato."],
  ["Quais os métodos de controle de estoques no inventário permanente?","<b>PEPS</b> (primeira que entra é a primeira que sai) · <b>UEPS</b> (última que entra é a primeira que sai) · <b>Custo Médio Ponderado Móvel</b>."],
  ["Em ambiente inflacionário, como fica o PEPS?","O <b>CMV do PEPS é o MENOR</b> de todos os métodos; logo, o <b>lucro do PEPS é o MAIOR</b> de todos."],
  ["Por que o fisco proíbe o UEPS?","Porque é o método de <b>menor lucro</b> — e, portanto, de <b>menor base de cálculo</b> para a cobrança do tributo. <b>UEPS é proibido pela legislação fiscal.</b>"],
  ["As três desigualdades da economia inflacionária","<b>CMV:</b> PEPS &lt; custo médio &lt; UEPS · <b>LUCRO:</b> PEPS &gt; custo médio &gt; UEPS · <b>ESTOQUE FINAL:</b> PEPS &gt; custo médio &gt; UEPS."],
  ["E se a questão disser que a economia é deflacionária?","Basta utilizar o <b>raciocínio inverso</b>."],
  ["PEPS: 20 cadernos a R$ 16; venda de 8; compra de 30 a R$ 24; venda de 18. Qual o CMV?","Vendidas <b>26</b> unidades (8 + 18), mensuradas pelos custos das <b>primeiras</b> aquisições: <b>(20 × 16) + (6 × 24) = R$ 464</b>."],
  ["Máscaras: 6 caixas por R$ 180 em 31/12; compra de 10 caixas a R$ 40 em 05/01. Qual o primeiro custo médio ponderado?","Custo unitário inicial = <b>180 / 6 = R$ 30</b>. <b>CMP 01 = (180 + 400) / 16 = R$ 36,25</b>."],
  ["No mesmo exemplo, após a venda de 8 caixas e a compra de 12 a R$ 42, qual o segundo CMP?","<b>CMP 02 = [(8 × 36,25) + (12 × 42)] / 20 = (290 + 504) / 20 = R$ 39,70</b>."],
  ["No mesmo exemplo, qual o estoque final em 31/01/23 após a venda de 6 caixas?","Ficaram <b>14 caixas</b>: <b>14 × 39,70 = R$ 555,80</b>."],
  ["Que outras formas de mensuração do custo o CPC 16 admite?","O <b>custo-padrão</b> e o <b>método de varejo</b> (itens <b>21 e 22</b>), que podem ser usados <b>por conveniência se os resultados se aproximarem do custo</b>."],
  ["O que o custo-padrão leva em consideração?","Os <b>níveis normais</b> de utilização dos <b>materiais e bens de consumo</b>, da <b>mão de obra</b> e da <b>eficiência na utilização da capacidade produtiva</b>."],
  ["Como se determina o custo no método de varejo?","Pela <b>REDUÇÃO do preço de venda na percentagem apropriada da margem bruta</b> — elimina-se a margem de lucro para chegar ao estoque a preço de custo."],
  ["Lançamento da compra de mercadorias de R$ 100 SEM impostos","<b>D</b> Estoques R$ 100 · <b>C</b> Caixa/Bancos R$ 100."],
  ["Lançamento da compra de R$ 100 com 18% de ICMS (por dentro, recuperável)","<b>D</b> Estoques R$ 82 · <b>D</b> ICMS a Recuperar R$ 18 · <b>C</b> Caixa/Bancos R$ 100."],
  ["Lançamento da compra de R$ 100 com 18% de ICMS (recuperável) e 10% de IPI (por fora, não recuperável)","<b>D</b> Estoques R$ 92 (<b>82 da mercadoria + 10 de IPI</b>) · <b>D</b> ICMS a Recuperar R$ 18 · <b>C</b> Caixa/Bancos R$ 110."],
  ["Venda de R$ 100 com CMV de R$ 60, SEM impostos — lançamentos e lucro bruto","<b>D</b> Caixa/Bancos 100 · <b>C</b> Receita Bruta de Vendas 100 · <b>D</b> CMV 60 · <b>C</b> Estoques 60. <b>LB = (100 − 0) − 60 = R$ 40</b>."],
  ["A mesma venda COM 18% de ICMS — o que muda e qual o lucro bruto?","Entra <b>D</b> ICMS sobre Vendas 18 (<b>dedução da receita bruta na DRE</b>) · <b>C</b> ICMS a Recolher 18 (<b>passivo</b>). <b>LB = (100 − 18) − 60 = R$ 22</b>."],
  ["Fórmula do Lucro Bruto (LB) ou Resultado com Mercadorias (RCM)","<b>LB = Receita LÍQUIDA de Vendas − CMV</b>, ou seja, <b>LB = (Receita Bruta − Deduções) − CMV</b>."],
  ["Frete: o quadro do resumo","<b>Nas vendas:</b> <b>despesa na DRE</b>. <b>Nas compras:</b> se pago pelo <b>fornecedor</b>, <b>NÃO integra</b> o custo do estoque; se pago pelo <b>comprador</b>, <b>INTEGRA</b> o custo do estoque."],
  ["Frete e seguro entram na base de cálculo do IPI e do ICMS?","<b>Em regra, sim.</b> Mas se o transporte e o seguro forem realizados por <b>transportadora contratada pelo cliente (comprador)</b>, tais valores <b>NÃO integrarão</b> a base de cálculo do IPI e do ICMS."]
];

var QS = [
  ["As mercadorias geram a mais importante fonte de receita da entidade comercial, a receita bruta de vendas, e respondem por seu principal custo, o custo da mercadoria vendida.","C","CEBRASPE","Considerações do resumo sobre operações com mercadorias."],
  ["Segundo o art. 183, II, da Lei 6.404/76, as mercadorias e os produtos do comércio da companhia são avaliados pelo custo de aquisição ou produção, deduzido de provisão para ajustá-lo ao valor de mercado, quando este for inferior.","C","Lei 6.404, art. 183","Literalidade do inciso II."],
  ["Nos termos do item 9 do CPC 16, os estoques devem ser mensurados pelo valor de custo ou pelo valor realizável líquido, dos dois o maior.","E","CPC 16, item 9","Dos dois, o <b>menor</b>."],
  ["O write down é a técnica utilizada para reduzir o valor dos estoques ao valor realizável líquido.","C","FGV","Conceito importante do resumo."],
  ["Estoque de R$ 2.000 composto por 20 bolsas: o custo inicial unitário da bolsa é de R$ 100.","C","VUNESP","2.000 dividido por 20."],
  ["No mesmo exemplo, com o preço de venda reduzido de R$ 120 para R$ 90 em razão de promoção, o custo unitário do estoque após o ajuste é de R$ 120.","E","FCC","Dos dois o menor: o custo unitário passa a <b>R$ 90</b>."],
  ["No mesmo exemplo, vendidas cinco bolsas, o estoque remanescente é de R$ 1.350.","C","CEBRASPE","15 unidades a R$ 90."],
  ["O ajuste ao valor realizável líquido é registrado a débito de perdas por redução ao VRL em estoques e a crédito de despesa com perda para redução ao VRL.","E","FGV","O lançamento do resumo é o <b>inverso</b>: D despesa · C conta retificadora do ativo."],
  ["O valor de custo do estoque deve incluir todos os custos de aquisição e de transformação, bem como outros custos incorridos para trazer os estoques à sua condição e localização atuais.","C","CPC 16","Regra geral do custo."],
  ["Compõem o custo de aquisição dos estoques o preço de compra, os tributos, o transporte, o seguro e o manuseio.","E","VUNESP","Faltou a ressalva: tributos <b>exceto os recuperáveis</b>."],
  ["Do somatório das parcelas do custo de aquisição deduzem-se os descontos comerciais incondicionais e os abatimentos.","C","FCC","Esquema do resumo."],
  ["Os gastos com armazenamento nunca integram o custo dos estoques.","E","FGV","Integram <b>se forem necessários ao processo produtivo</b>."],
  ["O valor anormal de desperdício de materiais, mão de obra e outros insumos de produção integra o custo dos estoques.","E","CEBRASPE","Está na lista dos itens <b>não incluídos</b>."],
  ["Livraria que adquiriu 500 livros por R$ 35.000, com frete de R$ 3.000 e folhetos de divulgação de R$ 5.000, apura custo de aquisição de R$ 43.000.","E","FCC","Divulgação é despesa: <b>35.000 + 3.000 = 38.000</b>."],
  ["No mesmo exemplo, o custo unitário do livro é de R$ 76.","C","FGV","38.000 divididos por 500 unidades."],
  ["No mesmo exemplo, com preços de venda de R$ 100 em janeiro, R$ 80 em fevereiro, R$ 70 em março e R$ 85 em abril, somente em março o estoque é mensurado pelo valor realizável líquido.","C","VUNESP","Só em março o VRL (70) é inferior ao custo (76)."],
  ["No mesmo exemplo, vendidas 200 unidades em março, o CMV do mês é de R$ 15.200.","E","CEBRASPE","Em março vale o VRL: <b>70 × 200 = 14.000</b>."],
  ["No mesmo exemplo, o CMV total dos quatro meses é de R$ 28.440.","C","FCC","7.600 + 3.800 + 14.000 + 3.040."],
  ["Se a mercadoria destinar-se à comercialização ou à industrialização, o IPI não fará parte da base de cálculo do ICMS.","C","FGV","Quadro IPI x ICMS."],
  ["Se a mercadoria se destinar ao ativo fixo ou ao uso e consumo do comprador, o IPI não fará parte da base de cálculo do ICMS.","E","VUNESP","Nesse caso o IPI <b>fará parte</b> da base de cálculo do ICMS."],
  ["No inventário periódico, o valor do estoque existente pode ser conhecido a qualquer momento mediante a verificação do saldo da conta de mercadorias.","E","CEBRASPE","Essa é a característica do inventário <b>permanente</b>."],
  ["No inventário periódico, o custo das mercadorias vendidas corresponde ao estoque inicial mais as compras, menos o estoque final.","C","FCC","Fórmula do resumo."],
  ["No inventário periódico, o CMV é igual ao estoque final mais as compras, menos o estoque inicial.","E","FGV","Inverteu os estoques: CMV = <b>EI</b> + compras − <b>EF</b>."],
  ["No inventário permanente o controle dos estoques é contínuo, por meio de fichas de controle.","C","VUNESP","Conceito."],
  ["São métodos de controle de estoques no inventário permanente o PEPS, o UEPS e o custo médio ponderado móvel.","C","CEBRASPE","Os três métodos do resumo."],
  ["Em ambiente inflacionário, o custo da mercadoria vendida apurado pelo método PEPS é o maior de todos os métodos.","E","FCC","É o <b>menor</b> de todos."],
  ["Em ambiente inflacionário, o lucro apurado pelo método PEPS é o maior de todos os métodos.","C","FGV","Consequência do menor CMV."],
  ["A legislação fiscal proíbe o método UEPS porque é o método que apura o menor lucro, reduzindo a base de cálculo do tributo.","C","VUNESP","Justificativa do resumo."],
  ["Em economia inflacionária, o CMV pelo PEPS é menor que o CMV pelo custo médio, que por sua vez é menor que o CMV pelo UEPS.","C","CEBRASPE","Primeira desigualdade do quadro."],
  ["Em economia inflacionária, o estoque final apurado pelo UEPS é o maior de todos os métodos.","E","FCC","O maior estoque final é o do <b>PEPS</b>."],
  ["Se a economia for deflacionária, aplica-se o mesmo raciocínio válido para a economia inflacionária.","E","FGV","Basta utilizar o raciocínio <b>inverso</b>."],
  ["Papelaria com 20 cadernos a R$ 16, que vende 8 unidades, compra 30 a R$ 24 e vende outras 18, apura CMV de R$ 464 pelo método PEPS.","C","VUNESP","(20 × 16) + (6 × 24)."],
  ["Entidade com seis caixas de máscaras em estoque avaliado em R$ 180 tinha custo unitário de R$ 36,25 em 31/12/22.","E","CEBRASPE","O unitário inicial era <b>R$ 30</b> (180/6)."],
  ["No mesmo exemplo, após a compra de dez caixas por R$ 40 cada em 05/01, o primeiro custo médio ponderado é de R$ 36,25.","C","FCC","(180 + 400) dividido por 16."],
  ["No mesmo exemplo, após a venda de oito caixas e a compra de doze caixas por R$ 42 em 18/01, o segundo custo médio ponderado é de R$ 42.","E","FGV","CMP 02 = (290 + 504)/20 = <b>R$ 39,70</b>."],
  ["No mesmo exemplo, o estoque final em 31/01/23 é de R$ 555,80, correspondente a 14 caixas a R$ 39,70.","C","VUNESP","Gabarito do exemplo."],
  ["Nos termos dos itens 21 e 22 do CPC 16 (R1), o custo-padrão e o método de varejo podem ser usados por conveniência se os resultados se aproximarem do custo.","C","CPC 16, itens 21 e 22","Outras formas de mensuração."],
  ["O custo-padrão leva em consideração os níveis normais de utilização dos materiais e bens de consumo, da mão de obra e da eficiência na utilização da capacidade produtiva.","C","CEBRASPE","Item 21 do CPC 16."],
  ["No método de varejo, o custo do estoque é determinado pelo acréscimo ao preço de venda da percentagem apropriada da margem bruta.","E","FCC","É pela <b>redução</b> do preço de venda na percentagem da margem bruta."],
  ["Na compra de mercadorias por R$ 100 com incidência de 18% de ICMS recuperável, registram-se débito de estoques de R$ 82, débito de ICMS a recuperar de R$ 18 e crédito de caixa de R$ 100.","C","FGV","Lançamento 2 do resumo."],
  ["Na compra de mercadorias por R$ 100 com 18% de ICMS recuperável e 10% de IPI não recuperável, os estoques são debitados em R$ 82.","E","VUNESP","São <b>R$ 92</b>: 82 da mercadoria + 10 de IPI."],
  ["No mesmo lançamento, o crédito em caixa/bancos é de R$ 110.","C","CEBRASPE","100 da mercadoria + 10 de IPI."],
  ["Na venda de mercadorias por R$ 100 com CMV de R$ 60, sem incidência de impostos, o lucro bruto é de R$ 40.","C","FCC","(100 − 0) − 60."],
  ["Na mesma venda, com incidência de 18% de ICMS, o lucro bruto continua a ser de R$ 40.","E","FGV","Passa a <b>R$ 22</b>: (100 − 18) − 60."],
  ["O ICMS sobre vendas é dedução da receita bruta na DRE, e o ICMS a recolher é conta de passivo.","C","VUNESP","Lançamento da venda com impostos."],
  ["O lucro bruto, ou resultado com mercadorias, corresponde à receita bruta de vendas menos o CMV.","E","CEBRASPE","É a receita <b>líquida</b> de vendas menos o CMV."],
  ["Em regra, o transporte e o seguro integrarão a base de cálculo do IPI e do ICMS.","C","FCC","Regra geral do resumo."],
  ["Caso o transporte e o seguro sejam realizados por transportadora contratada pelo cliente comprador, tais valores não integrarão a base de cálculo do IPI e do ICMS.","C","FGV","Exceção expressa."],
  ["Se o frete for de responsabilidade do comprador, não irá compor o valor dos estoques.","E","VUNESP","Se pago pelo comprador, <b>integra</b> o custo do estoque."],
  ["O frete pago pelo fornecedor integra o custo do estoque do comprador.","E","CEBRASPE","Se pago pelo fornecedor, <b>não integra</b> o custo do estoque."],
  ["O frete nas vendas é tratado como despesa na DRE.","C","FCC","Quadro do frete."],
  ["As comissões de vendas são tratadas como custo do estoque.","E","FGV","São <b>despesas comerciais na DRE</b>."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Mensuração dos estoques, write down e custo de aquisição",
      '<div class="box"><span class="bl">Operações com mercadorias</span>'+
      '<p>As mercadorias são o objeto de comercialização da empresa: geram a mais importante fonte de receita, a <b>Receita Bruta de Vendas</b>, e respondem pelo principal custo, o <b>Custo da Mercadoria Vendida (CMV)</b>. Daí a necessidade de saber <b>mensurar o custo do estoque</b>.</p></div>'+
      '<div class="box"><span class="bl">Lei 6.404/76 × CPC 16</span>'+
      '<p><b>Art. 183, II:</b> mercadorias, produtos do comércio, matérias-primas, produtos em fabricação e bens em almoxarifado pelo <b>custo de aquisição ou produção</b>, <b>deduzido de provisão para ajustá-lo ao valor de mercado, quando este for inferior</b>.</p>'+
      '<p><b>CPC 16, item 9:</b> os estoques devem ser mensurados pelo <b>valor de custo</b> ou pelo <b>valor realizável líquido</b> — <b>dos dois, o MENOR</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Write down</span>'+
      '<p>Técnica para <b>reduzir o valor dos estoques ao VRL</b>, porque os custos podem <b>não ser recuperáveis</b> se os itens estiverem <b>danificados</b>, <b>obsoletos</b> ou se seus <b>preços de venda tiverem diminuído</b>.</p>'+
      '<p><b>Exemplo:</b> estoque de <b>2.000</b> com <b>20 bolsas</b> vendidas a <b>120</b>; custo unitário = <b>2.000/20 = 100</b>. A promoção baixa o preço a <b>90</b> → dos dois o menor: custo unitário ajustado = <b>90</b>, estoque = <b>90 × 20 = 1.800</b>. Vendidas 5, sobram <b>15 × 90 = 1.350</b>.</p>'+
      '<p><b>D</b> Despesa com perda para redução ao VRL (despesa operacional) <b>R$ 10</b> · <b>C</b> Perdas por redução ao VRL em estoques (retificadora do ativo) <b>R$ 10</b>.</p></div>'+
      '<div class="box"><span class="bl">Custo de aquisição dos estoques</span>'+
      '<p>Inclui <b>todos os custos de aquisição e de transformação</b> e os <b>outros custos incorridos para trazer os estoques à sua condição e localização atuais</b>.</p>'+
      '<p class="chips"><span class="chip">Preço de compra</span><span class="chip">Tributos, exceto os recuperáveis</span><span class="chip">Transporte</span><span class="chip">Seguro e manuseio</span></p>'+
      '<p>Somado tudo isso, <b>deduzem-se</b>: <b>descontos comerciais (incondicionais)</b> e <b>abatimentos</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Itens NÃO incluídos no custo dos estoques</span>'+
      '<ul><li>Valor <b>ANORMAL</b> de desperdício de materiais, mão de obra e outros insumos;</li>'+
      '<li>os <b>tributos recuperáveis</b>;</li>'+
      '<li><b>gastos com armazenamento</b>, <b>exceto</b> se forem necessários ao processo produtivo;</li>'+
      '<li><b>despesas administrativas</b> que não contribuem para trazer o estoque ao seu local;</li>'+
      '<li><b>despesas de comercialização</b> (ex.: divulgação).</li></ul></div>'+
      '<div class="box tip"><span class="bl">O exemplo da livraria</span>'+
      '<p>500 livros por <b>35.000</b>, frete de <b>3.000</b> e folhetos de divulgação de <b>5.000</b>. Custo de aquisição = <b>35.000 + 3.000 = 38.000</b> (divulgação é <b>despesa</b>). Custo unitário = <b>38.000/500 = 76</b>.</p>'+
      '<p>Preços de venda: jan <b>100</b> · fev <b>80</b> · mar <b>70</b> · abr <b>85</b>. Só em <b>março</b> o VRL (70) fica <b>abaixo</b> do custo (76) — e só nele o estoque é mensurado pelo VRL.</p>'+
      '<p class="mn"><em>CMV: 76×100 = 7.600 · 76×50 = 3.800 · 70×200 = 14.000 · 76×40 = 3.040 → total 28.440</em></p></div>')
  ],
  V2:[
    sl("IPI × ICMS, inventários e métodos de controle",
      '<div class="box"><span class="bl">IPI × ICMS</span>'+
      '<p>Mercadoria destinada à <b>comercialização ou industrialização</b>: o IPI <b>NÃO</b> fará parte da base de cálculo do ICMS.</p>'+
      '<p>Mercadoria destinada ao <b>ativo fixo ou ao uso e consumo</b> do comprador: o IPI <b>FARÁ</b> parte da base de cálculo do ICMS.</p></div>'+
      '<div class="box"><span class="bl">Inventário periódico</span>'+
      '<p>A empresa <b>não controla</b> os estoques ao longo do período: o controle vem do <b>levantamento físico ao final de cada período</b>. O saldo <b>não</b> pode ser conhecido a qualquer momento — precisa de <b>contagem física</b>.</p>'+
      '<p class="mn"><em>CMV = ESTOQUE INICIAL + COMPRAS − ESTOQUE FINAL</em></p></div>'+
      '<div class="box"><span class="bl">Inventário permanente</span>'+
      '<p>Controle <b>contínuo</b>, por <b>fichas de controle</b>: o valor do estoque <b>pode ser conhecido a qualquer momento</b> pelo saldo da conta de mercadorias, e o resultado das vendas sai de imediato.</p>'+
      '<p class="chips"><span class="chip">PEPS</span><span class="chip">UEPS</span><span class="chip">Custo Médio Ponderado Móvel</span></p></div>'+
      '<div class="box trap"><span class="bl">Economia inflacionária — e o UEPS proibido</span>'+
      '<p><b>CMV (PEPS) &lt; CMV (custo médio) &lt; CMV (UEPS)</b></p>'+
      '<p><b>LUCRO (PEPS) &gt; LUCRO (custo médio) &gt; LUCRO (UEPS)</b></p>'+
      '<p><b>ESTOQUE FINAL (PEPS) &gt; EF (custo médio) &gt; EF (UEPS)</b></p>'+
      '<p>Mercadoria comprada há dez anos custa bem menos que a de hoje — por isso o PEPS tem o <b>menor CMV</b> e o <b>maior lucro</b>. E o fisco <b>proíbe o UEPS</b>, o de <b>menor lucro</b>, porque reduziria a base de cálculo do tributo. Se a economia for <b>deflacionária</b>, raciocínio <b>inverso</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Exemplo PEPS — os cadernos</span>'+
      '<p>20 cadernos a <b>16</b>; venda de <b>8</b> a 30; compra de <b>30</b> a <b>24</b>; venda de <b>18</b> a 35. Vendidas <b>26</b> unidades, mensuradas pelos custos das <b>primeiras</b> entradas:</p>'+
      '<p class="mn"><em>CMV = (20 × 16) + (6 × 24) = 464</em></p></div>'+
      '<div class="box tip"><span class="bl">Exemplo custo médio ponderado móvel — as máscaras</span>'+
      '<p>31/12: <b>6</b> caixas por <b>180</b> → <b>30</b> cada. 05/01: compra de <b>10</b> a <b>40</b> = 400 → <b>CMP 01 = (180 + 400)/16 = 36,25</b>.</p>'+
      '<p>10/01: venda de <b>8</b> → ficam <b>8</b> caixas. 18/01: compra de <b>12</b> a <b>42</b> → <b>CMP 02 = [(8 × 36,25) + (12 × 42)]/20 = (290 + 504)/20 = 39,70</b>.</p>'+
      '<p>25/01: venda de <b>6</b> → ficam <b>14</b> caixas. <b>Estoque final = 14 × 39,70 = 555,80</b>.</p></div>')
  ],
  V3:[
    sl("Outras formas de mensuração, lançamentos, RCM e frete",
      '<div class="box"><span class="bl">Outras formas de mensuração do custo</span>'+
      '<p><b>CPC 16 (R1), itens 21 e 22:</b> o <b>custo-padrão</b> e o <b>método de varejo</b> podem ser usados <b>por conveniência se os resultados se aproximarem do custo</b>.</p>'+
      '<p><b>Custo-padrão:</b> considera os <b>níveis normais</b> de utilização dos materiais e bens de consumo, da mão de obra e da <b>eficiência na utilização da capacidade produtiva</b>. Os valores são pré-definidos e comparados com o custo real.</p>'+
      '<p><b>Método de varejo:</b> usado no varejo, para grande quantidade de itens que mudam rapidamente e têm margens semelhantes. O custo é determinado pela <b>REDUÇÃO do preço de venda na percentagem apropriada da margem bruta</b> — elimina-se a margem de lucro para chegar ao estoque a preço de custo.</p></div>'+
      '<div class="box"><span class="bl">Compra de mercadorias de R$ 100 — os três lançamentos</span>'+
      '<p><b>1) Sem impostos:</b> <b>D</b> Estoques 100 · <b>C</b> Caixa/Bancos 100.</p>'+
      '<p><b>2) Com 18% de ICMS</b> (imposto <b>por dentro</b>, recuperável): <b>D</b> Estoques <b>82</b> · <b>D</b> ICMS a Recuperar <b>18</b> · <b>C</b> Caixa/Bancos 100.</p>'+
      '<p><b>3) Com 18% de ICMS e 10% de IPI</b> (por fora, <b>não recuperável</b>): <b>D</b> Estoques <b>92</b> (82 da mercadoria + 10 de IPI) · <b>D</b> ICMS a Recuperar 18 · <b>C</b> Caixa/Bancos <b>110</b>.</p>'+
      '<p>Lembre: o IPI <b>não</b> entra na base de cálculo do ICMS se a mercadoria for destinada à comercialização ou industrialização.</p></div>'+
      '<div class="box"><span class="bl">Venda de R$ 100 com CMV de R$ 60</span>'+
      '<p><b>Sem impostos:</b> <b>D</b> Caixa/Bancos 100 · <b>C</b> Receita Bruta de Vendas 100 · <b>D</b> CMV 60 · <b>C</b> Estoques 60.</p>'+
      '<p><b>Com impostos:</b> acrescenta-se <b>D</b> ICMS sobre Vendas <b>18</b> (<b>dedução da receita bruta na DRE</b>) · <b>C</b> ICMS a Recolher <b>18</b> (conta de <b>passivo</b>).</p></div>'+
      '<div class="box tip"><span class="bl">Lucro bruto (LB) ou Resultado com Mercadorias (RCM)</span>'+
      '<p><b>LB = Receita LÍQUIDA de Vendas − CMV = (Receita Bruta − Deduções) − CMV</b>.</p>'+
      '<p><b>Sem impostos:</b> (100 − 0) − 60 = <b>40</b>. <b>Com 18% de ICMS:</b> (100 − 18) − 60 = <b>22</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Frete, seguro e comissões</span>'+
      '<p>Em regra, o <b>transporte e o seguro integram</b> a base de cálculo do IPI e do ICMS. Mas se forem realizados por <b>transportadora contratada pelo cliente (comprador)</b>, <b>não integram</b> essa base.</p>'+
      '<p><b>Nas vendas:</b> o frete é <b>despesa na DRE</b>. <b>Nas compras:</b> pago pelo <b>fornecedor</b>, <b>NÃO integra</b> o custo do estoque; pago pelo <b>comprador</b>, <b>INTEGRA</b> o custo do estoque.</p>'+
      '<p>As <b>comissões de vendas</b> são <b>despesas comerciais na DRE</b>.</p></div>')
  ]
};

var EX = {
S1:{t:"mc", instr:"Pelo item 9 do CPC 16, como devem ser mensurados os estoques?",
  options:["Pelo valor de custo ou pelo valor realizável líquido, dos dois o menor",
           "Pelo valor de custo ou pelo valor realizável líquido, dos dois o maior",
           "Sempre pelo custo de aquisição ou de produção",
           "Sempre pelo valor de mercado na data do balanço"],
  answer:0,
  why:"Dos dois, o MENOR — é a regra de mensuração do CPC 16."},

S2:{t:"match", instr:"Correlacione cada norma ou conceito ao seu enunciado",
  pairs:[["Lei 6.404/76, art. 183, II","Custo de aquisição ou produção, deduzido de provisão para ajustá-lo ao valor de mercado, quando este for inferior"],
         ["CPC 16, item 9","Valor de custo ou valor realizável líquido, dos dois o menor"],
         ["Write down","Técnica para reduzir o valor dos estoques ao valor realizável líquido"]],
  why:"O write down aparece quando os itens estão danificados, obsoletos ou o preço de venda caiu."},

S3:{t:"mc", instr:"Estoque de R$ 2.000 com 20 bolsas vendidas a R$ 120. Em maio, promoção reduz o preço de venda a R$ 90. Qual o custo total do estoque após o ajuste?",
  options:["R$ 1.800","R$ 2.000","R$ 2.400","R$ 1.350"],
  answer:0,
  why:"Custo unitário inicial 2.000/20 = 100; VRL 90; dos dois o menor: 90 × 20 = 1.800."},

S4:{t:"mc", instr:"No mesmo exemplo, vendidas cinco bolsas no mês, qual o saldo do estoque?",
  options:["R$ 1.350","R$ 1.500","R$ 1.700","R$ 1.800"],
  answer:0,
  why:"Sobram 15 unidades a R$ 90."},

S5:{t:"wordbank", instr:"Monte o lançamento do ajuste ao valor realizável líquido",
  target:["D","Despesa","com","perda","para","redução","ao","VRL","C","Perdas","por","redução","ao","VRL","em","estoques"],
  extra:["Estoques","CMV","ICMS"],
  why:"A despesa é operacional; a conta credora é retificadora do ativo."},

S6:{t:"multi", instr:"Marque o que COMPÕE o custo de aquisição dos estoques",
  options:["Preço de compra","Tributos não recuperáveis","Transporte","Seguro e manuseio",
           "Tributos recuperáveis","Despesas com divulgação do produto",
           "Valor anormal de desperdício de materiais"],
  answers:[0,1,2,3],
  why:"Tributos recuperáveis, divulgação e desperdício anormal estão na lista dos itens não incluídos."},

S7:{t:"sort", instr:"Integra ou não integra o custo dos estoques?",
  buckets:["Integra","Não integra"],
  items:[["Frete do transporte das mercadorias pago pelo comprador",0],
         ["Seguro e manuseio na aquisição",0],
         ["Gasto com armazenamento necessário ao processo produtivo",0],
         ["Tributos recuperáveis",1],
         ["Despesa administrativa que não contribui para trazer o estoque ao seu local",1],
         ["Folhetos de divulgação do produto",1],
         ["Valor anormal de desperdício de materiais",1]],
  why:"O armazenamento só entra se for necessário ao processo produtivo."},

S8:{t:"mc", instr:"Livraria adquiriu 500 livros por R$ 35.000, pagou frete de R$ 3.000 e folhetos de divulgação de R$ 5.000. Qual o custo unitário do livro?",
  options:["R$ 76","R$ 86","R$ 80","R$ 70"],
  answer:0,
  why:"Custo de aquisição = 35.000 + 3.000 = 38.000; a divulgação é despesa. 38.000/500 = 76."},

S9:{t:"mc", instr:"No mesmo exemplo, vendidos 100 livros em janeiro (preço R$ 100), 50 em fevereiro (R$ 80), 200 em março (R$ 70) e 40 em abril (R$ 85), qual o CMV total?",
  options:["R$ 28.440","R$ 29.640","R$ 26.600","R$ 27.360"],
  answer:0,
  why:"Só em março o VRL (70) é inferior ao custo (76): 7.600 + 3.800 + 14.000 + 3.040."},

S10:{t:"gap", instr:"Complete a frase",
  before:"Somadas as parcelas do custo de aquisição, deduzem-se os descontos comerciais ",
  after:" e os abatimentos.",
  options:["incondicionais","condicionais","financeiros"], answer:0,
  why:"São os descontos incondicionais, obtidos no próprio documento de compra."},

S11:{t:"gap", instr:"Complete a frase",
  before:"Se a mercadoria destinar-se à comercialização ou à industrialização, o IPI ",
  after:" da base de cálculo do ICMS.",
  options:["não fará parte","fará parte","será excluído do preço"], answer:0,
  why:"Só entra na base do ICMS quando a mercadoria vai para o ativo fixo ou para uso e consumo."},

S12:{t:"sort", instr:"Conforme o destino da mercadoria, o IPI entra ou não na base de cálculo do ICMS?",
  buckets:["IPI entra na BC do ICMS","IPI NÃO entra na BC do ICMS"],
  items:[["Mercadoria destinada ao ativo fixo do comprador",0],
         ["Mercadoria destinada ao uso e consumo do comprador",0],
         ["Mercadoria destinada à comercialização",1],
         ["Mercadoria destinada à industrialização",1]],
  why:"Quadro IPI x ICMS do resumo."},

S13:{t:"wordbank", instr:"Monte a fórmula do CMV no inventário periódico",
  target:["CMV","=","Estoque","Inicial","+","Compras","−","Estoque","Final"],
  extra:["×","÷","Vendas"],
  why:"No periódico o CMV só aparece depois da contagem física do estoque final."},

S14:{t:"match", instr:"Correlacione cada sistema ou método à sua característica",
  pairs:[["Inventário periódico","Controle por levantamento físico ao final de cada período"],
         ["Inventário permanente","Controle contínuo por fichas, com o saldo conhecido a qualquer momento"],
         ["Custo-padrão","Considera os níveis normais de materiais, mão de obra e eficiência na capacidade produtiva"],
         ["Método de varejo","Custo obtido pela redução do preço de venda na percentagem da margem bruta"]],
  why:"Custo-padrão e método de varejo são os itens 21 e 22 do CPC 16."},

S15:{t:"sort", instr:"Em economia inflacionária, classifique cada afirmação",
  buckets:["PEPS","UEPS"],
  items:[["Menor CMV de todos os métodos",0],
         ["Maior lucro de todos os métodos",0],
         ["Maior estoque final de todos os métodos",0],
         ["Maior CMV de todos os métodos",1],
         ["Menor lucro de todos os métodos",1],
         ["Proibido pela legislação fiscal",1]],
  why:"O fisco proíbe o UEPS justamente porque é o método de menor lucro."},

S16:{t:"mc", instr:"Papelaria com 20 cadernos a R$ 16 vende 8 unidades, compra 30 a R$ 24 e vende outras 18. Qual o CMV pelo PEPS?",
  options:["R$ 464","R$ 624","R$ 416","R$ 536"],
  answer:0,
  why:"26 unidades vendidas pelos custos das primeiras entradas: (20 × 16) + (6 × 24)."},

S17:{t:"mc", instr:"Seis caixas em estoque por R$ 180 em 31/12; 05/01 compra de 10 a R$ 40; 10/01 venda de 8; 18/01 compra de 12 a R$ 42; 25/01 venda de 6. Qual o estoque final pelo custo médio ponderado móvel?",
  options:["R$ 555,80","R$ 507,50","R$ 576,50","R$ 588,00"],
  answer:0,
  why:"CMP 01 = (180+400)/16 = 36,25; CMP 02 = (290+504)/20 = 39,70; 14 × 39,70 = 555,80."},

S18:{t:"mc", instr:"Compra de mercadorias por R$ 100 com 18% de ICMS recuperável e 10% de IPI não recuperável. Qual o valor debitado em Estoques e o crédito em Caixa?",
  options:["Estoques R$ 92 e Caixa R$ 110","Estoques R$ 82 e Caixa R$ 100",
           "Estoques R$ 110 e Caixa R$ 110","Estoques R$ 100 e Caixa R$ 110"],
  answer:0,
  why:"82 da mercadoria + 10 de IPI, que é por fora e não recuperável; o ICMS de 18 vai para ICMS a Recuperar."},

S19:{t:"mc", instr:"Venda de mercadorias por R$ 100 com CMV de R$ 60. Qual o lucro bruto sem impostos e com 18% de ICMS?",
  options:["R$ 40 e R$ 22","R$ 40 e R$ 40","R$ 22 e R$ 40","R$ 60 e R$ 42"],
  answer:0,
  why:"LB = (Receita Bruta − Deduções) − CMV: (100 − 0) − 60 e (100 − 18) − 60."},

S20:{t:"match", instr:"Correlacione o tratamento do frete, do seguro e das comissões",
  pairs:[["Frete nas vendas","Despesa na DRE"],
         ["Frete nas compras pago pelo comprador","Integra o custo do estoque"],
         ["Frete nas compras pago pelo fornecedor","Não integra o custo do estoque"],
         ["Transporte e seguro por transportadora contratada pelo comprador","Não integram a base de cálculo do IPI e do ICMS"],
         ["Comissões de vendas","Despesas comerciais na DRE"]],
  why:"Em regra o transporte e o seguro integram a base do IPI e do ICMS — a exceção é a transportadora contratada pelo cliente."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Contabilidade Geral 04","https://www.tecconcursos.com.br/s/Q2ZWUd","Q2ZWUd"],
  ["Caderno FCC — Contabilidade Geral 04","https://www.tecconcursos.com.br/s/Q2ZWUi","Q2ZWUi"],
  ["Caderno FGV — Contabilidade Geral 04","https://www.tecconcursos.com.br/s/Q294o4","Q294o4"],
  ["Caderno VUNESP — Contabilidade Geral 04","https://www.tecconcursos.com.br/s/Q2ZWV4","Q2ZWV4"]
];
var TECNOTA = "Módulo de cálculo puro e de altíssima incidência. Quatro contas respondem pela maioria das questões: o custo de aquisição (frete entra, divulgação não), o CMV com VRL mês a mês, o PEPS pelas primeiras entradas e o custo médio ponderado móvel recalculado a cada compra. Somem-se a isso o ICMS por dentro (Estoques 82) contra o IPI por fora (Estoques 92) e a diferença entre lucro bruto de 40 e de 22 na mesma venda.";

var UNITS = [
  {n:1, title:"Mensuração e custo de aquisição", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Lei 6.404 × CPC 16, write down e custo de aquisição", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · dos dois o menor",              xp:25, data:["S1","S2","T0","T1","T2","T3"]},
    {id:"K3", type:"drill",  title:"Praticar · write down e as bolsas",        xp:25, data:["S3","S4","S5","T4","T5","T6","T7"]},
    {id:"K4", type:"drill",  title:"Praticar · o que entra no custo e o exemplo da livraria", xp:25, data:["S6","S7","S8","S9","S10","T8","T9","T10","T11","T12","T13","T14","T15","T16","T17"]},
    {id:"K5", type:"flash",  title:"Flashcards · mensuração e custo",          xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]}
  ]},
  {n:2, title:"IPI × ICMS, inventários e métodos", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Periódico, permanente, PEPS, UEPS e média móvel", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · IPI na base do ICMS",           xp:25, data:["S11","S12","T18","T19"]},
    {id:"K8", type:"drill",  title:"Praticar · periódico, permanente e outras formas", xp:25, data:["S13","S14","T20","T21","T22","T23","T36","T37","T38"]},
    {id:"K9", type:"drill",  title:"Praticar · PEPS, UEPS e média ponderada",  xp:25, data:["S15","S16","S17","T24","T25","T26","T27","T28","T29","T30","T31","T32","T33","T34","T35"]},
    {id:"K10",type:"flash",  title:"Flashcards · inventários e métodos",       xp:15, data:[15,16,17,18,19,20,21,22,23,24,25,26,27,28]}
  ]},
  {n:3, title:"Lançamentos, RCM e frete", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Compras, vendas, lucro bruto e frete",     xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · compras com ICMS e IPI",        xp:25, data:["S18","T39","T40","T41"]},
    {id:"K13",type:"drill",  title:"Praticar · venda, ICMS e lucro bruto",     xp:25, data:["S19","T42","T43","T44","T45"]},
    {id:"K14",type:"drill",  title:"Praticar · frete, seguro e comissões",     xp:25, data:["S20","T46","T47","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · lançamentos e frete",         xp:15, data:[29,30,31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                  xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                    xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                   xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 04 de Contabilidade (Radegondes) ---------- */
var COM={
0:"<p>Certo — é a abertura do resumo: <b>“as mercadorias são objeto de comercialização das empresas, elas geram a mais importante fonte de Receita da entidade comercial, que é a Receita Bruta de Vendas, e responde por seu principal Custo, que é o Custo da Mercadoria Vendida”</b>.</p><p>Daí a conclusão do material: é preciso saber <b>mensurar o custo desse estoque</b>, comparando a Lei 6.404/76 com o CPC 16.</p><p class='fb-fonte'>Resumo 04 · <i>Operações com Mercadorias</i></p>",
1:"<p>Certo pela literalidade do <b>art. 183, II</b>, transcrito no resumo: os direitos que tiverem por objeto <b>mercadorias e produtos do comércio</b>, <b>matérias-primas</b>, <b>produtos em fabricação</b> e <b>bens em almoxarifado</b> vão <b>“pelo custo de aquisição ou produção, deduzido de provisão para ajustá-lo ao valor de mercado, quando este for inferior”</b>.</p><p>Guarde o gatilho: a provisão só aparece quando o <b>valor de mercado é INFERIOR</b> ao custo.</p><p class='fb-fonte'>Resumo 04 · <i>Operações com Mercadorias — Lei nº 6.404/76</i></p>",
2:"<p>Errado por uma palavra. O <b>item 9</b> transcrito no resumo diz: <b>“os estoques objeto deste pronunciamento devem ser mensurados pelo valor de custo ou pelo valor realizável líquido, DOS DOIS O MENOR”</b>.</p><p>O quadro <b>MENSURAÇÃO DOS ESTOQUES</b> do material fecha as duas colunas com a mesma frase: <b>valor de custo</b> × <b>valor realizável líquido</b>, <b>dos dois, o menor</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Mensuração dos Estoques — CPC 16, item 9</i></p>",
3:"<p>Certo. É o <b>CONCEITO IMPORTANTE</b> do resumo: o write down <b>“é uma técnica utilizada para reduzir o valor dos Estoques para o Valor Realizável Líquido”</b>.</p><p>A razão que o material dá: <b>“os custos dos estoques podem não ser recuperáveis se eles estiverem danificados, obsoletos ou se seus preços de venda tiverem diminuído”</b> — foi exatamente o caso das bolsas em promoção.</p><p class='fb-fonte'>Resumo 04 · <i>Conceito Importante — Write Down</i></p>",
4:"<p>Certo, é a primeira linha do exemplo do resumo: <b>“o Custo Inicial unitário da bolsa era de R$ 100 (R$ 2.000/20)”</b>, contra um preço de venda de R$ 120.</p><p>Repare que o custo unitário sai do <b>estoque dividido pela quantidade</b> — nada a ver com o preço de venda.</p><p class='fb-fonte'>Resumo 04 · <i>Write Down — exemplo das bolsas</i></p>",
5:"<p>Errado. R$ 120 era o <b>preço de venda antigo</b>. Com a promoção, o VRL caiu para <b>R$ 90</b>, e o resumo aplica a regra: <b>“Custo Inicial do Estoque = R$ 100 · Valor Realizável Líquido (VRL) = R$ 90 · dos dois, o MENOR”</b>.</p><p>Resultado do material: <b>“Custo Unitário do Estoque após o ajuste = R$ 90”</b> e <b>“Custo Total do Estoque após o Ajuste = R$ 1.800 (R$ 90 x 20)”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Write Down — exemplo das bolsas</i></p>",
6:"<p>Certo, com os números do próprio resumo: <b>“se a empresa vendeu 5 bolsas, então o estoque passou a contar com 15 unidades a R$ 90, perfazendo um total de R$ 1.350”</b>.</p><p>O ajuste ao VRL vem <b>antes</b> da baixa pela venda — por isso as unidades remanescentes já saem valorizadas a R$ 90.</p><p class='fb-fonte'>Resumo 04 · <i>Write Down — exemplo das bolsas</i></p>",
7:"<p>Errado: inverteu o débito com o crédito. O lançamento do resumo é <b>D – Despesa com perda para redução ao VRL</b> (Despesa Operacional) · <b>C – Perdas por redução ao VRL em estoques</b> (Retificadora do Ativo), no valor de <b>R$ 10</b>.</p><p>A lógica é a mesma da PECLD: a <b>despesa</b> é debitada no resultado e a conta <b>retificadora do ativo</b> é creditada.</p><p class='fb-fonte'>Resumo 04 · <i>Write Down — lançamento</i></p>",
8:"<p>Certo — é a regra geral de custo do resumo: <b>“o valor de custo do estoque deve incluir todos os custos de aquisição e de transformação, bem como outros custos incorridos para trazer os estoques à sua condição e localização atuais”</b>.</p><p>É essa frase que justifica o frete entrar e a divulgação ficar de fora.</p><p class='fb-fonte'>Resumo 04 · <i>Custo de Aquisição dos Estoques</i></p>",
9:"<p>Errado por uma ressalva omitida. O esquema do resumo soma <b>preço de compra</b> + <b>TRIBUTOS (exceto os recuperáveis)</b> + <b>transporte</b> + <b>seguro e manuseio</b>.</p><p>Os <b>tributos recuperáveis</b> aparecem, do outro lado, na lista dos <b>itens NÃO incluídos no custo dos estoques</b> — é o caso do ICMS a recuperar dos lançamentos de compra.</p><p class='fb-fonte'>Resumo 04 · <i>Custo de Aquisição dos Estoques</i></p>",
10:"<p>Certo. Depois de somar as quatro parcelas, o resumo diz: <b>“tudo isso é somado para depois deduzirmos os: descontos comerciais (incondicionais) e abatimentos”</b>.</p><p>Atenção ao adjetivo do material: os descontos que reduzem o custo são os <b>incondicionais</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Custo de Aquisição dos Estoques</i></p>",
11:"<p>Errado pelo advérbio “nunca”. A lista de <b>itens não incluídos</b> do resumo diz: <b>“gastos com armazenamento, EXCETO se forem necessários ao processo produtivo”</b>.</p><p>Havendo necessidade para o processo produtivo, o gasto com armazenamento <b>entra</b> no custo do estoque.</p><p class='fb-fonte'>Resumo 04 · <i>Itens não incluídos no custo dos estoques</i></p>",
12:"<p>Errado. O primeiro item da lista de exclusões do resumo é o <b>“valor ANORMAL de desperdício de materiais, mão de obra e outros insumos de produção”</b>.</p><p>Repare no adjetivo, que é onde a banca mexe: o desperdício <b>anormal</b> é despesa; o normal é que se incorpora ao custo.</p><p class='fb-fonte'>Resumo 04 · <i>Itens não incluídos no custo dos estoques</i></p>",
13:"<p>Errado — R$ 43.000 soma os folhetos. O exemplo do resumo é expresso no quadro <b>ATENÇÃO</b>: <b>“gastos com divulgação não fazem parte do custo do estoque (são despesas)”</b>.</p><p>A conta dele: <b>“Custo de aquisição = R$ 35.000 + Frete R$ 3.000 → R$ 38.000”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Custo de Aquisição — exemplo da livraria</i></p>",
14:"<p>Certo, é a conta literal do resumo: <b>“Custo Unitário = R$ 38.000 / 500 unidades → Custo Unitário = R$ 76”</b>.</p><p>O divisor são as <b>500 unidades</b> adquiridas, e o dividendo é o custo de aquisição <b>com frete e sem divulgação</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Custo de Aquisição — exemplo da livraria</i></p>",
15:"<p>Certo. O resumo compara mês a mês: <b>“ao analisarmos os preços de venda praticados percebemos que apenas em março o VRL (R$ 70) é inferior ao custo (R$ 76). Ou seja, somente em março os estoques serão mensurados pelo VRL”</b>.</p><p>Em janeiro (100), fevereiro (80) e abril (85) o preço de venda ficou <b>acima</b> dos R$ 76 — nesses meses vale o <b>custo</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Custo de Aquisição — exemplo da livraria</i></p>",
16:"<p>Errado: R$ 15.200 é 200 unidades a R$ 76, o custo. Mas março é justamente o mês em que o <b>VRL (R$ 70)</b> é menor.</p><p>A linha do resumo: <b>“CMV em MARÇO → R$ 70 x 200 = R$ 14.000”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Custo de Aquisição — exemplo da livraria</i></p>",
17:"<p>Certo, é o fechamento do exemplo, com os quatro meses do resumo: <b>janeiro 76 × 100 = 7.600</b> · <b>fevereiro 76 × 50 = 3.800</b> · <b>março 70 × 200 = 14.000</b> · <b>abril 76 × 40 = 3.040</b>.</p><p>Soma: <b>“CMV TOTAL = R$ 28.440”</b>. Só o mês de março usa o VRL.</p><p class='fb-fonte'>Resumo 04 · <i>Custo de Aquisição — exemplo da livraria</i></p>",
18:"<p>Certo, é a primeira frase da seção: <b>“se a mercadoria destinar-se à comercialização ou à industrialização o IPI não fará parte da base de cálculo do ICMS”</b>.</p><p>É a mesma observação que o resumo repete nos lançamentos de compra, ao separar os R$ 82 de mercadoria dos R$ 10 de IPI.</p><p class='fb-fonte'>Resumo 04 · <i>IPI x ICMS</i></p>",
19:"<p>Errado — é a outra metade do quadro. O resumo continua: <b>“contudo, se a mercadoria se destinar ao ativo fixo ou uso e consumo do comprador, o IPI FARÁ parte da base de cálculo do ICMS”</b>.</p><p>Decore pela finalidade: mercadoria que <b>segue circulando</b> (revenda ou industrialização) → IPI fora da base; mercadoria que <b>para na empresa</b> (ativo fixo, consumo) → IPI dentro da base.</p><p class='fb-fonte'>Resumo 04 · <i>IPI x ICMS</i></p>",
20:"<p>Errado: essa é a marca do inventário <b>permanente</b>. No periódico, diz o resumo, <b>“o valor de estoque existente NÃO pode ser conhecido a qualquer momento mediante a verificação do saldo da conta de mercadorias, pois é necessário realizar a contagem física”</b>.</p><p>A frase idêntica, mas na afirmativa, está na seção do <b>inventário permanente</b> — é ali que a banca troca os dois.</p><p class='fb-fonte'>Resumo 04 · <i>Inventário Periódico</i></p>",
21:"<p>Certo, é a fórmula do resumo: <b>“CMV = ESTOQUE INICIAL + COMPRAS – ESTOQUE FINAL”</b>.</p><p>Ela existe porque, sem controle contínuo, o CMV só pode ser <b>deduzido por diferença</b>, depois do levantamento físico do estoque final.</p><p class='fb-fonte'>Resumo 04 · <i>Inventário Periódico</i></p>",
22:"<p>Errado: inverteu os estoques. A fórmula do resumo é <b>CMV = ESTOQUE INICIAL + COMPRAS − ESTOQUE FINAL</b>.</p><p>O <b>inicial soma</b> (era mercadoria disponível para venda) e o <b>final subtrai</b> (ficou em estoque, não foi vendido).</p><p class='fb-fonte'>Resumo 04 · <i>Inventário Periódico</i></p>",
23:"<p>Certo pela definição do resumo: <b>“aqui o controle dos estoques é contínuo, por meio de fichas de controle, o que possibilita o cálculo do resultado (lucro ou prejuízo) das vendas de mercadorias, já que sabemos de imediato o valor do custo das mercadorias vendidas”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Inventário Permanente</i></p>",
24:"<p>Certo. São exatamente os três métodos que o resumo lista no inventário permanente: <b>PEPS</b> (primeira mercadoria que entra é a primeira que sai) · <b>UEPS</b> (última que entra é a primeira que sai) · <b>Custo Médio Ponderado Móvel</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Inventário Permanente — métodos</i></p>",
25:"<p>Errado, é o oposto. Quadro <b>ATENÇÃO!</b> do resumo: <b>“em um ambiente inflacionário (que é o normal do nosso dia a dia), o custo da mercadoria vendida (CMV), no método PEPS, é o MENOR de todos os métodos. Logo, o lucro do método PEPS será o MAIOR de todos”</b>.</p><p>O raciocínio que ele dá: <b>“uma mercadoria comprada há mais de 10 anos, em regra, possui um custo muito inferior a uma mercadoria comprada nos dias de hoje”</b> — e o PEPS baixa primeiro as mais antigas, que são as mais baratas.</p><p class='fb-fonte'>Resumo 04 · <i>Inventário Permanente — Atenção!</i></p>",
26:"<p>Certo, é a segunda linha do quadro <b>ECONOMIA INFLACIONÁRIA</b> do resumo: <b>LUCRO (PEPS) &gt; LUCRO (CUSTO MÉDIO) &gt; LUCRO (UEPS)</b>.</p><p>Ela é consequência direta da primeira linha: se o <b>CMV do PEPS é o menor</b> de todos, o <b>lucro do PEPS é o maior</b> de todos. O próprio quadro <b>ATENÇÃO!</b> do material encadeia as duas ideias: <b>“o CMV, no método PEPS, é o menor de todos os métodos. Logo, o lucro do método PEPS será o maior de todos”</b>.</p><p>E é essa mesma lógica que explica a proibição do UEPS pelo fisco, o método de <b>menor lucro</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Economia Inflacionária</i></p>",
27:"<p>Certo, e a justificativa é a do resumo: <b>“por isso, o Fisco proíbe o método que possui menor lucro (UEPS), já que a base de cálculo para a cobrança do tributo será menor, ou seja, o fisco proíbe o método UEPS”</b>.</p><p>O material destaca a conclusão em caixa própria: <b>“UEPS: proibido pela legislação fiscal!”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Inventário Permanente — UEPS proibido</i></p>",
28:"<p>Certo, é a primeira linha do quadro <b>ECONOMIA INFLACIONÁRIA</b>, literalmente: <b>CMV (PEPS) &lt; CMV (CUSTO MÉDIO) &lt; CMV (UEPS)</b>.</p><p>Guarde as três linhas juntas: <b>CMV</b> cresce do PEPS ao UEPS, enquanto <b>lucro</b> e <b>estoque final</b> decrescem.</p><p class='fb-fonte'>Resumo 04 · <i>Economia Inflacionária</i></p>",
29:"<p>Errado — é o PEPS que tem o maior estoque final. Terceira linha do quadro do resumo: <b>ESTOQUE FINAL (PEPS) &gt; ESTOQUE FINAL (CUSTO MÉDIO) &gt; ESTOQUE FINAL (UEPS)</b>.</p><p>Faz sentido: se o PEPS baixa as compras <b>mais antigas e baratas</b>, o que sobra no estoque são as <b>mais recentes e caras</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Economia Inflacionária</i></p>",
30:"<p>Errado. O aviso do resumo é expresso: <b>“ATENÇÃO: se a questão mencionar que a economia é deflacionária, basta utilizar o raciocínio INVERSO”</b>.</p><p>Em deflação, portanto, o CMV do PEPS passa a ser o maior e o lucro do PEPS, o menor.</p><p class='fb-fonte'>Resumo 04 · <i>Economia Inflacionária — Atenção</i></p>",
31:"<p>Certo, é o exemplo dos cadernos de capa dura do resumo, com os mesmos números: <b>“note que foram vendidas 26 unidades (8 + 18)”</b> e, pelo PEPS, mensuram-se essas vendas pelos custos das <b>primeiras</b> aquisições.</p><p>A conta dele: <b>“CMV = (20un x R$ 16) + (6un x R$ 24) → CMV = R$ 464”</b>. As 20 primeiras a R$ 16 esgotam o estoque inicial; as 6 restantes saem da compra a R$ 24.</p><p class='fb-fonte'>Resumo 04 · <i>Inventário Permanente — exemplo PEPS</i></p>",
32:"<p>Errado: R$ 36,25 é o <b>primeiro custo médio ponderado</b>, calculado só depois da compra de 05/01. Em 31/12/22, diz a solução do resumo, <b>“a entidade tinha 06 caixas por R$ 30 cada (R$ 180/6)”</b>.</p><p>Guarde a ordem: primeiro o unitário do saldo anterior (R$ 30), depois a ponderação com a nova compra.</p><p class='fb-fonte'>Resumo 04 · <i>Custo Médio Ponderado Móvel — exemplo das máscaras</i></p>",
33:"<p>Certo, é a conta literal do resumo: <b>“CMP 01 = (180 + 400) / 16 (qtd total de caixas) → CMP 01 = R$ 36,25”</b>.</p><p>R$ 400 é a compra de <b>10 caixas a R$ 40</b> em 05/01, e 16 é a quantidade total (6 + 10). O custo médio é <b>ponderado pelas quantidades</b>, nunca a média simples entre R$ 30 e R$ 40.</p><p class='fb-fonte'>Resumo 04 · <i>Custo Médio Ponderado Móvel — exemplo das máscaras</i></p>",
34:"<p>Errado — R$ 42 é apenas o preço da compra de 18/01. O novo custo médio pondera o <b>saldo remanescente</b> com a <b>nova compra</b>, como faz o resumo: <b>“CMP 02 = [(08 x R$ 36,25) + (12 x R$ 42)] / 20 → (290 + 504) / 20 → CMP 02 = R$ 39,70”</b>.</p><p>As 8 caixas são o que restou depois da venda de 10/01.</p><p class='fb-fonte'>Resumo 04 · <i>Custo Médio Ponderado Móvel — exemplo das máscaras</i></p>",
35:"<p>Certo — é o gabarito B do exemplo. Depois da venda de 6 caixas em 25/01, o resumo conclui: <b>“Quantidade Total de Caixas que ficou no estoque = 14 · Estoque Final = 14 x R$ 39,70 · Estoque Final = R$ 555,80”</b>.</p><p>Note que as <b>vendas não alteram</b> o custo médio: só mudam a quantidade. Quem recalcula o CMP é a <b>compra</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Custo Médio Ponderado Móvel — exemplo das máscaras</i></p>",
36:"<p>Certo. O resumo abre a seção assim: <b>“nos termos do CPC 16 (R1), itens 21 e 22, existem outras formas para mensuração do custo de estoque, tais como o custo-padrão ou o método de varejo. Essas formas podem ser usadas por conveniência se os resultados se aproximarem do custo”</b>.</p><p>A condição é essa: só valem se o resultado <b>se aproximar do custo</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Outras Formas de Mensuração do Custo</i></p>",
37:"<p>Certo pela transcrição do <b>item 21</b> no resumo: <b>“o custo-padrão leva em consideração os níveis normais de utilização dos materiais e bens de consumo, da mão-de-obra e da eficiência na utilização da capacidade produtiva”</b>.</p><p>O material explica melhor: os valores são <b>pré-definidos</b> pela contabilidade e, ao longo do período, comparados com o <b>custo real</b> para análise das variações.</p><p class='fb-fonte'>Resumo 04 · <i>Outras Formas de Mensuração — custo-padrão</i></p>",
38:"<p>Errado no verbo. O <b>item 22</b> transcrito no resumo diz que <b>“o custo do estoque deve ser determinado pela REDUÇÃO do seu preço de venda na percentagem apropriada da margem bruta”</b>.</p><p>A explicação do material: dos estoques valorizados a preços de venda <b>elimina-se a margem de lucro</b>, apurando-se assim os estoques finais a <b>preço de custo</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Outras Formas de Mensuração — método de varejo</i></p>",
39:"<p>Certo, é o <b>lançamento 2</b> da seção de lançamentos do resumo, para compra de R$ 100 com <b>18% de ICMS (imposto por dentro, recuperável)</b>: <b>D – Estoques R$ 82</b> · <b>D – ICMS a Recuperar R$ 18</b> · <b>C – Caixa/Bancos R$ 100</b>.</p><p>Por dentro significa que o ICMS <b>já está no preço</b>: dos R$ 100 pagos, R$ 18 viram crédito e só R$ 82 são custo do estoque.</p><p class='fb-fonte'>Resumo 04 · <i>Principais Lançamentos Contábeis — compras</i></p>",
40:"<p>Errado: são <b>R$ 92</b>. O <b>lançamento 3</b> do resumo explicita a composição: <b>“D – Estoques R$ 92 (R$ 82 da mercadoria + R$ 10 de IPI)”</b> · <b>D – ICMS a Recuperar R$ 18</b> · <b>C – Caixa/Bancos R$ 110</b>.</p><p>O IPI é <b>por fora e não recuperável</b>, então <b>entra no custo do estoque</b>; o ICMS é recuperável e sai do custo.</p><p class='fb-fonte'>Resumo 04 · <i>Principais Lançamentos Contábeis — compras</i></p>",
41:"<p>Certo. No lançamento 3 do resumo o desembolso é de <b>R$ 110</b>: os R$ 100 da mercadoria (com o ICMS por dentro) mais os <b>R$ 10 de IPI por fora</b>.</p><p>A observação do material fecha o raciocínio: <b>“vale lembrar que o IPI não entra na Base de Cálculo do ICMS se a mercadoria for destinada à comercialização ou industrialização”</b>, e é por isso que o ICMS continua sendo 18% de 100.</p><p class='fb-fonte'>Resumo 04 · <i>Principais Lançamentos Contábeis — compras</i></p>",
42:"<p>Certo, é a conta do resumo na venda <b>sem</b> incidência de impostos: <b>“LB = (Receita Bruta – Deduções) – CMV → LB = (R$ 100 – R$ 0) – R$ 60 → LB = R$ 40”</b>.</p><p>Sem deduções, receita líquida e receita bruta coincidem.</p><p class='fb-fonte'>Resumo 04 · <i>Lançamentos — venda sem impostos e Lucro Bruto</i></p>",
43:"<p>Errado. Com o ICMS de R$ 18 como <b>dedução da receita bruta</b>, o resumo refaz a conta: <b>“LB = (R$ 100 – R$ 18) – 60 → LB = R$ 22”</b>.</p><p>Mesma venda, mesmo CMV: o que derruba o lucro bruto de <b>40 para 22</b> é a <b>dedução</b> do ICMS sobre vendas.</p><p class='fb-fonte'>Resumo 04 · <i>Lançamentos — venda com impostos e Lucro Bruto</i></p>",
44:"<p>Certo, é como o resumo identifica as duas contas no lançamento da venda: <b>“D – ICMS sobre Vendas R$ 18 (Dedução da Receita Bruta na DRE)”</b> · <b>“C – ICMS a Recolher R$ 18 (Conta de Passivo)”</b>.</p><p>Não confunda com o <b>ICMS a Recuperar</b> da compra, que é conta de <b>ativo</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Lançamentos — venda com impostos</i></p>",
45:"<p>Errado por uma palavra. A fórmula do resumo é <b>“LB = Receita LÍQUIDA de Vendas – CMV”</b>, ou, abrindo, <b>“LB = (Receita Bruta – Deduções) – CMV”</b>.</p><p>A diferença é a que aparece no próprio exemplo: partindo da receita bruta daria 40; partindo da receita líquida, com o ICMS de 18 deduzido, dá <b>22</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Lucro Bruto (LB) ou Resultado com Mercadorias (RCM)</i></p>",
46:"<p>Certo, é a regra geral da seção: <b>“em regra, o transporte e o seguro integrarão a base de cálculo do IPI e do ICMS”</b>.</p><p>Guarde essa regra junto com a exceção que vem na frase seguinte do resumo, a da transportadora contratada pelo próprio comprador.</p><p class='fb-fonte'>Resumo 04 · <i>Tratamento a ser dado ao Frete e ao Seguro</i></p>",
47:"<p>Certo, é a exceção literal do resumo: <b>“caso o transporte e o seguro sejam realizados por uma transportadora contratada pelo cliente (comprador), tais valores não integrarão a base de cálculo do IPI e do ICMS”</b>.</p><p>Não confunda os dois planos: esse valor pode <b>ficar fora da base de cálculo</b> dos tributos e, ainda assim, <b>compor o custo do estoque</b> do comprador.</p><p class='fb-fonte'>Resumo 04 · <i>Tratamento a ser dado ao Frete e ao Seguro</i></p>",
48:"<p>Errado. O resumo afirma o contrário: <b>“vale lembrar que se o frete for de responsabilidade do comprador, irá compor o valor dos estoques”</b>.</p><p>O quadro do material resume: <b>nas compras</b>, frete pago pelo <b>comprador</b> → <b>integra</b> o custo do estoque; pago pelo <b>fornecedor</b> → <b>não integra</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Tratamento a ser dado ao Frete e ao Seguro</i></p>",
49:"<p>Errado. Pelo quadro do resumo, nas compras o frete <b>pago pelo fornecedor NÃO integra o custo do estoque</b> — quem suporta o gasto é o vendedor, e para ele o frete nas vendas é <b>despesa na DRE</b>.</p><p>Só integra o estoque do comprador o frete que seja de <b>responsabilidade do comprador</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Tratamento a ser dado ao Frete e ao Seguro</i></p>",
50:"<p>Certo, é a primeira coluna do quadro do resumo: <b>frete NAS VENDAS → DESPESA NA DRE</b>.</p><p>Guarde o par: frete <b>na venda</b> é despesa de quem vende; frete <b>na compra</b>, se pago pelo comprador, é <b>custo do estoque</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Tratamento a ser dado ao Frete e ao Seguro</i></p>",
51:"<p>Errado. A observação final do resumo é direta: <b>“as comissões de vendas são tratadas como Despesas Comerciais na DRE”</b>.</p><p>Faz sentido pela regra do custo: comissão de venda é <b>despesa de comercialização</b>, e o material já havia listado as despesas de comercialização entre os <b>itens não incluídos no custo dos estoques</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Frete e Seguro — comissões de vendas</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"04", nome:"Estoques e operações com mercadorias (CPC 16)", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
