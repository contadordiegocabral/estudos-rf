/* Contabilidade Geral — Módulo 11: Demonstração do Valor Adicionado (CPC 09) (modo direto) */
window.MOD = window.MOD || {};
window.MOD.contab11 = (function(){
"use strict";

var CARDS = [
  ["Qual demonstração o art. 176, V, da Lei 6.404/76 exige?","A <b>demonstração do valor adicionado</b> — <b>“se companhia aberta”</b>. Ou seja, <b>apenas a S.A. de capital aberto</b> é obrigada a elaborar e apresentar a DVA."],
  ["O que o art. 188, II, manda a DVA indicar, no mínimo?","O <b>valor da riqueza gerada</b> pela companhia; a sua <b>distribuição entre os elementos que contribuíram</b> para gerá-la; e a <b>parcela da riqueza NÃO distribuída</b>."],
  ["Quais elementos o art. 188, II, arrola como participantes da geração da riqueza?","<b>Empregados</b>, <b>financiadores</b>, <b>acionistas</b>, <b>governo</b> e <b>outros</b>."],
  ["Qual norma estabelece os critérios de elaboração e apresentação da DVA?","O <b>CPC 09</b>."],
  ["De qual demonstração saem os dados da DVA?","<b>Principalmente da DRE</b> — demonstração do resultado do exercício."],
  ["A DVA é elemento de qual conjunto de informações?","É <b>um dos componentes do Balanço Social</b>."],
  ["Qual a finalidade da DVA?","<b>Evidenciar a riqueza criada pela entidade e a sua distribuição</b>, durante determinado período."],
  ["Em que se baseia a DVA Consolidada?","Nas <b>Demonstrações Consolidadas</b> — e <b>NÃO</b> na soma das DVA das entidades envolvidas. A banca tenta justamente essa troca."],
  ["Quais os cinco grupos mínimos de detalhamento da distribuição da riqueza?","<b>Pessoal e encargos</b> · <b>Impostos, taxas e contribuições</b> · <b>Juros e aluguéis</b> · <b>Juros sobre o capital próprio e dividendos</b> · <b>Lucros retidos/prejuízos do exercício</b>."],
  ["Em que tipo de conceito a DVA está fundamentada?","Em conceitos <b>MACROeconômicos</b>."],
  ["O que a DVA busca apresentar em relação ao PIB?","A <b>parcela de contribuição que a empresa tem na formação do PIB</b>, <b>eliminando a dupla-contagem</b>."],
  ["O que mais a DVA apresenta, além da contribuição ao PIB?","<b>Quanto a entidade agrega de valor aos insumos adquiridos de terceiros</b> e que são <b>consumidos ou vendidos</b> durante determinado período."],
  ["Em que se baseia o modelo econômico e em que se baseia o modelo contábil?","<b>Modelo econômico:</b> na <b>PRODUÇÃO</b> (é assim que a economia calcula o PIB). <b>Modelo contábil:</b> na <b>realização da receita</b> — o <b>regime contábil de competência</b>."],
  ["Quando os conceitos econômico e contábil de valor adicionado convergem?","Quando <b>não existirem estoques inicial e final</b> — ambos iguais a <b>ZERO</b>, isto é, tudo o que a entidade produziu ela vendeu."],
  ["Como se obtém o valor adicionado bruto?","<b>VAB = item 1 (Receitas) − item 2 (Insumos adquiridos de terceiros)</b>. É o <b>3º item</b> da DVA."],
  ["O que são as retenções e em que item da DVA ficam?","Ficam no <b>item 4</b> e são representadas pelas contas de <b>depreciação, amortização e exaustão</b>."],
  ["Como se obtém o valor adicionado líquido produzido pela entidade?","<b>VAL = item 3 (VAB) − item 4 (retenções)</b>. É o <b>5º item</b> da DVA."],
  ["Como se obtém o valor adicionado total a distribuir?","<b>Item 7 = item 5 (VAL) + item 6 (VA recebido em transferência)</b>."],
  ["Onde começa e onde termina cada parte da DVA?","<b>1ª parte — formação da riqueza:</b> do <b>item 1 ao item 7</b>. <b>2ª parte — distribuição da riqueza:</b> <b>apenas o item 8</b>."],
  ["Qual o quadro ATENÇÃO da estrutura da DVA?","<b>O total do item 8 deve ser exatamente igual ao total do item 7.</b>"],
  ["Quais os quatro subitens do item 1 (Receitas)?","<b>1.1</b> Venda de mercadorias, produtos e serviços · <b>1.2</b> Outras receitas · <b>1.3</b> Receitas relativas à construção de ativos próprios · <b>1.4</b> Provisão para crédito de liquidação duvidosa."],
  ["As receitas do item 1 da DVA são líquidas ou brutas de tributos?","<b>Brutas</b>: incluem os tributos incidentes sobre a receita — <b>IPI, ICMS, PIS e COFINS</b>. A venda corresponde ao <b>ingresso bruto</b> ou <b>faturamento bruto</b>."],
  ["Qual o exemplo de “outras receitas” (item 1.2) dado pelo resumo?","O <b>resultado na venda de imobilizado</b> — e, como no item anterior, <b>inclui os tributos</b> incidentes sobre essa receita."],
  ["O que entra no item 1.3 da DVA?","Os <b>gastos acumulados com a construção de ativos para uso próprio</b> pela empresa."],
  ["O que entra no item 1.4 da DVA?","Os valores relativos à <b>constituição E à reversão da PCLD</b> — provisão para créditos de liquidação duvidosa."],
  ["Item 09 do CPC 09 — estoques de longa maturação","Os <b>juros incorporados</b> a esses estoques devem ser destacados como <b>DISTRIBUIÇÃO da riqueza</b> (item <b>8.3.1</b>) <b>no momento em que os estoques forem baixados</b>. Não são “outras receitas”."],
  ["Quais os subitens do item 2 (Insumos adquiridos de terceiros)?","<b>2.1</b> Custo dos produtos, das mercadorias e dos serviços vendidos · <b>2.2</b> Materiais, energia, serviços de terceiros e outros · <b>2.3</b> Perda/recuperação de valores ativos · <b>2.4</b> Outras."],
  ["Os insumos adquiridos de terceiros incluem gastos com pessoal próprio?","<b>NÃO.</b> O item 2 <b>não inclui gastos com pessoal próprio</b> — mas <b>inclui os tributos</b> (IPI, ICMS, PIS e COFINS)."],
  ["Como tratar os tributos das compras de insumos na DVA?","Devem ser considerados os tributos <b>incluídos no momento das compras, recuperáveis ou não</b>. Esse procedimento é <b>DIFERENTE das práticas utilizadas na DRE</b>."],
  ["O que entra em “perda e recuperação de valores ativos” (2.3)?","Valores relativos a <b>ajustes por avaliação de valor de mercado</b> de <b>estoques, imobilizados, investimentos</b> etc."],
  ["O que é o valor adicionado recebido em transferência?","A <b>riqueza que NÃO foi criada pela própria entidade</b>, e sim <b>por terceiros</b>, e que <b>a ela é transferida</b> — receitas financeiras, equivalência patrimonial, dividendos, aluguel, royalties etc."],
  ["Quais os três subitens do item 6 da DVA?","<b>6.1</b> Resultado de equivalência patrimonial · <b>6.2</b> Receitas financeiras · <b>6.3</b> Outras (aluguel, dividendos, royalties, doações)."],
  ["Como entra a equivalência patrimonial negativa no item 6?","O REP <b>pode ser receita ou despesa</b>. <b>Sendo despesa, o valor é apresentado negativo</b>."],
  ["As receitas financeiras do item 6.2 incluem variação cambial?","Sim — <b>abarcam todas as receitas financeiras, incluindo as variações cambiais ATIVAS</b>."],
  ["Quais os três subitens de 8.1 — Pessoal?","<b>8.1.1</b> Remuneração direta · <b>8.1.2</b> Benefícios · <b>8.1.3</b> FGTS."],
  ["Onde vai o INSS retido e onde vai o INSS patronal?","<b>INSS retido (do empregado)</b> → <b>Pessoal – remuneração direta (8.1.1)</b>. <b>INSS patronal (do empregador)</b> → <b>Impostos, taxas e contribuições – federais (8.2.1)</b>."],
  ["O que entra em 8.3 — remuneração do capital de terceiros?","<b>Juros:</b> despesas financeiras e <b>variações cambiais passivas</b>. <b>Aluguéis:</b> pagos ou creditados a terceiros e <b>arrendamento operacional</b>. <b>Outras:</b> royalties, franquias, direitos autorais."],
  ["Quais JSCP e dividendos entram em 8.4?","<b>Apenas os distribuídos com base no lucro DO EXERCÍCIO</b>. <b>Desconsidere</b> os distribuídos com base em <b>lucros acumulados de exercícios anteriores</b> — já foram tratados como lucros retidos no exercício em que foram gerados."],
  ["Ativos construídos pela empresa para uso próprio (item 19) — como aparecem na DVA?","<b>Valor contábil integral</b> → <b>Receita (1.3)</b>. <b>Serviços de terceiros e materiais</b> → <b>Insumos (2.2)</b>. <b>Mão de obra</b> → <b>distribuição da riqueza (8.1)</b>."],
  ["Substituição tributária progressiva (item 26) × regressiva (item 27) na DVA","<b>Progressiva:</b> o substituto <b>inclui o “imposto antecipado” no faturamento bruto</b> e depois o <b>apresenta como dedução</b> desse faturamento. <b>Regressiva:</b> <b>com</b> direito a crédito → impostos sobre vendas pelo <b>valor total</b>; <b>sem</b> crédito → <b>custo dos estoques</b>."]
];

var QS = [
  ["Segundo a Lei nº 6.404/76, apenas a sociedade anônima de capital aberto é obrigada a elaborar e apresentar a demonstração do valor adicionado.","C","CEBRASPE","O art. 176, V, condiciona a DVA à companhia aberta."],
  ["O art. 176 da Lei nº 6.404/76 exige a demonstração do valor adicionado de toda sociedade anônima, aberta ou fechada.","E","FCC","O inciso V diz <b>“se companhia aberta”</b>."],
  ["A demonstração do valor adicionado indicará, no mínimo, o valor da riqueza gerada pela companhia, a sua distribuição entre os elementos que contribuíram para a geração dessa riqueza e a parcela da riqueza não distribuída.","C","Lei 6.404, art. 188, II","Literalidade do dispositivo."],
  ["A demonstração do valor adicionado evidencia a riqueza gerada pela companhia e a sua distribuição, mas não precisa indicar a parcela da riqueza não distribuída.","E","FGV","A parcela <b>não distribuída</b> integra o conteúdo mínimo."],
  ["O CPC 09 estabelece os critérios para elaboração e apresentação da demonstração do valor adicionado.","C","VUNESP","É a base normativa da DVA."],
  ["A demonstração do valor adicionado representa um dos componentes do Balanço Social.","C","CEBRASPE","Assim o resumo a apresenta."],
  ["Os dados para a elaboração da DVA são obtidos, principalmente, a partir do balanço patrimonial.","E","FCC","São obtidos principalmente da <b>DRE</b>."],
  ["A DVA Consolidada deve basear-se na soma das DVA das entidades envolvidas.","E","FGV","Deve basear-se nas <b>Demonstrações Consolidadas</b>."],
  ["A distribuição da riqueza criada deve ser detalhada, minimamente, em pessoal e encargos; impostos, taxas e contribuições; juros e aluguéis; juros sobre o capital próprio e dividendos; e lucros retidos ou prejuízos do exercício.","C","VUNESP","São os cinco grupos mínimos."],
  ["A demonstração do valor adicionado está fundamentada em conceitos microeconômicos.","E","CEBRASPE","Está fundamentada em conceitos <b>macroeconômicos</b>."],
  ["A DVA busca apresentar, eliminando a dupla-contagem, a parcela de contribuição que a empresa tem na formação do produto interno bruto.","C","FCC","CPC 09, itens 10 a 13."],
  ["Para o cálculo do produto interno bruto, a ciência econômica baseia-se no regime contábil de competência, enquanto a contabilidade se baseia na produção.","E","FGV","Está invertido: a economia baseia-se na <b>produção</b>; a contabilidade, na <b>realização da receita</b>."],
  ["As diferenças entre o valor adicionado do modelo econômico e o do modelo contábil serão tanto menores quanto maiores forem as diferenças entre os estoques inicial e final do período.","E","VUNESP","Tanto menores quanto <b>menores</b> forem essas diferenças."],
  ["O conceito econômico e o conceito contábil de valor adicionado irão convergir quando não existirem estoques inicial e final.","C","CEBRASPE","Tudo o que produziu, vendeu."],

  ["O valor adicionado bruto corresponde à diferença entre as receitas e os insumos adquiridos de terceiros.","C","FCC","Item 3 = item 1 − item 2."],
  ["As retenções, que ocupam o item 4 da DVA, são representadas pelas contas de depreciação, amortização e exaustão.","C","FGV","Definição do resumo."],
  ["O valor adicionado líquido produzido pela entidade resulta da soma do valor adicionado bruto com as retenções.","E","VUNESP","Resulta da <b>subtração</b>: item 5 = item 3 − item 4."],
  ["O valor adicionado total a distribuir corresponde ao valor adicionado líquido produzido pela entidade somado ao valor adicionado recebido em transferência.","C","CEBRASPE","Item 7 = item 5 + item 6."],
  ["A primeira parte da DVA, que apresenta a formação da riqueza, vai do item 1 ao item 8 da demonstração.","E","FCC","Vai do item 1 ao <b>item 7</b>; o item 8 é a segunda parte."],
  ["O total do item 8 da DVA pode ser inferior ao total do item 7, pois parte da riqueza não é distribuída.","E","FGV","O quadro ATENÇÃO exige totais <b>exatamente iguais</b>."],
  ["No item 1 da DVA, a venda de mercadorias, produtos e serviços corresponde ao ingresso bruto ou faturamento bruto, pois inclui os tributos incidentes sobre essas receitas.","C","VUNESP","ICMS, IPI, PIS e COFINS entram."],
  ["As receitas registradas no item 1 da DVA são apresentadas líquidas de ICMS, IPI, PIS e COFINS.","E","CEBRASPE","O item 1 <b>inclui</b> esses tributos."],
  ["A provisão para créditos de liquidação duvidosa compõe o item 1 da DVA, abrangendo os valores relativos à sua constituição e à sua reversão.","C","FCC","Subitem 1.4."],
  ["O resultado na venda de imobilizado, por não decorrer da atividade de venda de mercadorias, não integra o item 1 da DVA.","E","FGV","É justamente o exemplo de <b>outras receitas</b> (1.2) do resumo."],
  ["Os gastos acumulados com a construção de ativos para uso próprio da empresa compõem as receitas da DVA.","C","VUNESP","Subitem 1.3."],
  ["No caso de estoques de longa maturação, os juros a eles incorporados devem ser considerados como outras receitas no item 1 da DVA.","E","CEBRASPE","Não: são destacados como <b>distribuição da riqueza</b> na baixa do estoque."],
  ["Os juros incorporados a estoques de longa maturação devem ser destacados como distribuição da riqueza no momento em que os respectivos estoques forem baixados.","C","CPC 09, item 09","Literalidade do item transcrito no resumo."],
  ["Os insumos adquiridos de terceiros incluem os gastos com pessoal próprio da entidade.","E","FCC","O item 2 <b>não inclui</b> gastos com pessoal próprio."],
  ["Na apuração dos insumos adquiridos de terceiros, devem ser considerados os tributos incluídos no momento das compras, recuperáveis ou não, procedimento diferente das práticas utilizadas na DRE.","C","FGV","Observação expressa do resumo."],
  ["A perda e a recuperação de valores ativos, item 2.3 da DVA, incluem valores relativos a ajustes por avaliação de valor de mercado de estoques, imobilizados e investimentos.","C","VUNESP","Definição do quadro."],
  ["O valor adicionado recebido em transferência representa a riqueza criada pela própria entidade e transferida a terceiros.","E","CEBRASPE","É a riqueza <b>não criada</b> pela entidade, criada por terceiros e <b>a ela</b> transferida."],
  ["Compõem o valor adicionado recebido em transferência o resultado de equivalência patrimonial, as receitas financeiras e outras receitas, como aluguel, dividendos, royalties e doações.","C","FCC","Subitens 6.1, 6.2 e 6.3."],
  ["Quando o resultado de equivalência patrimonial for despesa, o valor será apresentado negativo no item 6 da DVA.","C","FGV","O REP pode ser receita ou despesa."],
  ["As receitas financeiras do item 6 da DVA não abrangem as variações cambiais ativas.","E","VUNESP","Abarcam <b>todas</b> as receitas financeiras, <b>inclusive</b> as variações cambiais ativas."],

  ["O item 8.1 da DVA, referente a pessoal, é subdividido em remuneração direta, benefícios e FGTS.","C","CEBRASPE","Estrutura detalhada do item 8."],
  ["Salário, 13º salário, honorários da administração, férias, comissões e hora-extra compõem a remuneração direta, no item 8.1.1 da DVA.","C","FCC","Lista do quadro de pessoal."],
  ["Assistência médica, alimentação, transporte e planos de aposentadoria são classificados como remuneração direta na DVA.","E","FGV","São <b>benefícios</b> (8.1.2)."],
  ["O FGTS, no item 8.1.3 da DVA, corresponde aos valores depositados em conta vinculada do empregado.","C","VUNESP","Definição do quadro."],
  ["O INSS retido do empregado é classificado em impostos, taxas e contribuições federais, no item 8.2.1 da DVA.","E","CEBRASPE","O INSS <b>retido</b> vai para pessoal – remuneração direta (8.1.1)."],
  ["O INSS patronal é classificado em impostos, taxas e contribuições federais, no item 8.2.1 da DVA.","C","FCC","É o outro lado do quadro do INSS."],
  ["A contribuição sindical patronal não figura entre os tributos federais do item 8.2.1 da DVA.","E","FGV","O resumo a lista ao lado de IRPJ, CSSL, IPI, CIDE, PIS e COFINS."],
  ["As despesas financeiras e as variações cambiais passivas são apresentadas como juros, na remuneração do capital de terceiros.","C","VUNESP","Item 8.3.1."],
  ["Os aluguéis pagos ou creditados a terceiros e o arrendamento operacional compõem a remuneração do capital próprio.","E","CEBRASPE","Compõem a remuneração do capital <b>de terceiros</b> (8.3.2)."],
  ["Royalties, franquias e direitos autorais, mesmo originados em capital intelectual, podem ser apresentados como outras remunerações do capital de terceiros.","C","FCC","Item 8.3.3."],
  ["Na remuneração do capital próprio, devem ser incluídos os juros sobre o capital próprio e os dividendos distribuídos com base em lucros acumulados de exercícios anteriores.","E","FGV","Esses devem ser <b>desconsiderados</b>: só entram os baseados no lucro do exercício."],
  ["Os lucros retidos incluem os valores do lucro do exercício destinados à formação das reservas e, no caso de prejuízo, o valor é apresentado de forma negativa.","C","VUNESP","Quadro 8.4 do resumo."],
  ["A participação dos não controladores nos lucros retidos deve constar da DVA individual da controladora.","E","CEBRASPE","É usada <b>somente</b> na consolidação das demonstrações contábeis."],
  ["Quando a realização de ativo reavaliado ou avaliado ao valor justo ocorrer pelo processo normal de depreciação, deve-se incluir esse valor como outras receitas na DVA e reconhecer os respectivos tributos na linha própria de impostos, taxas e contribuições.","C","CPC 09, item 17","Caso especial transcrito no resumo."],
  ["Os ajustes de exercícios anteriores devem ser adaptados na DVA relativa ao período mais antigo apresentado para fins de comparação, como se a nova prática contábil estivesse sempre em uso ou o erro fosse corrigido.","C","CPC 09, item 18","Literalidade do item."],
  ["Na DVA, os ativos construídos pela empresa para uso próprio têm o valor contábil integral considerado como receita, os gastos com serviços de terceiros e materiais como insumos, e a mão de obra como distribuição da riqueza.","C","FCC","Item 19 do CPC 09: 1.3, 2.2 e 8.1."],
  ["Na substituição tributária progressiva, o substituto tributário deve excluir o imposto antecipado do faturamento bruto, apresentando-o diretamente na receita bruta.","E","FGV","Deve <b>incluí-lo no faturamento bruto</b> e depois apresentá-lo como <b>dedução</b>."],
  ["Na substituição tributária regressiva, se o comerciante não fizer jus ao crédito do tributo, o valor recolhido deve ser tratado como receita de vendas.","E","VUNESP","Deve ser tratado como <b>custo dos estoques</b>."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("A DVA na Lei 6.404/76, no CPC 09 e as características da informação",
      '<div class="box"><span class="bl">O que a lei diz</span>'+
      '<p><b>Art. 176, V:</b> ao fim de cada exercício social a diretoria fará elaborar, <b>“se companhia aberta”</b>, a <b>demonstração do valor adicionado</b>. Logo: <b>apenas a S.A. de capital aberto</b> é obrigada a elaborar e apresentar a DVA.</p>'+
      '<p><b>Art. 188, II</b> — a DVA indicará, <b>no mínimo</b>: o <b>valor da riqueza gerada</b> pela companhia · a sua <b>distribuição entre os elementos que contribuíram</b> para gerá-la (<b>empregados, financiadores, acionistas, governo e outros</b>) · e a <b>parcela da riqueza NÃO distribuída</b>.</p></div>'+
      '<div class="box"><span class="bl">O que o CPC 09 acrescenta</span>'+
      '<p>O <b>CPC 09</b> estabelece os critérios para <b>elaboração e apresentação</b> da DVA, que <b>representa um dos componentes do Balanço Social</b> e tem por finalidade <b>evidenciar a riqueza criada pela entidade e a sua distribuição</b>, durante determinado período.</p>'+
      '<p>Os dados para sua elaboração são obtidos <b>principalmente a partir da DRE</b>.</p></div>'+
      '<div class="box trap"><span class="bl">A troca preferida da banca</span>'+
      '<p>A <b>DVA Consolidada</b> deve basear-se nas <b>Demonstrações Consolidadas</b>. A banca inverte e diz que ela se baseia na <b>soma das DVA das entidades envolvidas</b> — <b>não caia nessa</b>.</p></div>'+
      '<div class="box"><span class="bl">Os cinco grupos mínimos da distribuição</span>'+
      '<p><span class="chips"><span class="chip">Pessoal e encargos</span><span class="chip">Impostos, taxas e contribuições</span><span class="chip">Juros e aluguéis</span><span class="chip">JSCP e dividendos</span><span class="chip">Lucros retidos/prejuízos do exercício</span></span></p></div>'+
      '<div class="box tip"><span class="bl">Características da informação (CPC 09, itens 10 a 13)</span>'+
      '<p>A DVA está fundamentada em conceitos <b>MACROeconômicos</b> e busca apresentar, <b>eliminando a dupla-contagem</b>, a <b>parcela de contribuição da empresa na formação do PIB</b>. Mostra também <b>quanto a entidade agrega de valor aos insumos adquiridos de terceiros</b> consumidos ou vendidos no período.</p>'+
      '<p><b>Modelo econômico</b> → baseia-se na <b>PRODUÇÃO</b> · <b>Modelo contábil</b> → baseia-se na <b>realização da receita</b>, isto é, no <b>regime de competência</b>. Como produzir e vender ocorrem em momentos diferentes, os valores calculados <b>divergem</b> em cada período.</p>'+
      '<p class="mn"><em>As diferenças são tanto MENORES quanto MENORES forem as diferenças entre estoque inicial e final — e os conceitos CONVERGEM quando ambos os estoques são ZERO: tudo que produziu, vendeu.</em></p></div>')
  ],
  V2:[
    sl("Estrutura da DVA e a formação da riqueza (itens 1 a 7)",
      '<div class="box"><span class="bl">Estrutura resumida — decore a espinha</span>'+
      '<div class="tree">'+
      '<p class="leaf"><b>1 –</b> RECEITAS</p>'+
      '<p class="leaf"><b>2 –</b> INSUMOS ADQUIRIDOS DE TERCEIROS</p>'+
      '<p class="leaf"><b>3 –</b> VALOR ADICIONADO BRUTO <b>= (1 − 2)</b></p>'+
      '<p class="leaf"><b>4 –</b> DEPRECIAÇÃO, AMORTIZAÇÃO E EXAUSTÃO (retenções)</p>'+
      '<p class="leaf"><b>5 –</b> VALOR ADICIONADO LÍQUIDO PRODUZIDO PELA ENTIDADE <b>= (3 − 4)</b></p>'+
      '<p class="leaf"><b>6 –</b> VALOR ADICIONADO RECEBIDO EM TRANSFERÊNCIA</p>'+
      '<p class="leaf"><b>7 –</b> VALOR ADICIONADO TOTAL A DISTRIBUIR <b>= (5 + 6)</b></p>'+
      '<p class="leaf"><b>8 –</b> DISTRIBUIÇÃO DO VALOR ADICIONADO</p></div>'+
      '<p><b>1ª parte</b> = formação da riqueza, <b>itens 1 a 7</b> · <b>2ª parte</b> = distribuição da riqueza, <b>apenas o item 8</b>.</p></div>'+
      '<div class="box trap"><span class="bl">ATENÇÃO</span>'+
      '<p><b>O total do item 8 deve ser exatamente igual ao total do item 7.</b> Nada de item 8 menor porque “parte da riqueza não foi distribuída” — os <b>lucros retidos</b> estão dentro do próprio item 8.</p></div>'+
      '<div class="box"><span class="bl">Item 1 — RECEITAS (inclui IPI, ICMS, PIS e COFINS)</span>'+
      '<ul><li><b>1.1 Venda de mercadorias, produtos e serviços</b> — corresponde ao <b>ingresso bruto</b> ou <b>faturamento bruto</b>, porque <b>inclui os tributos</b> incidentes sobre essas receitas.</li>'+
      '<li><b>1.2 Outras receitas</b> — igualmente com tributos. Exemplo do resumo: <b>resultado na venda de imobilizado</b>.</li>'+
      '<li><b>1.3 Receitas relativas à construção de ativos próprios</b> — <b>gastos acumulados</b> com a construção de ativos para uso próprio.</li>'+
      '<li><b>1.4 Provisão para créditos de liquidação duvidosa</b> — inclui a <b>constituição E a reversão</b> da PCLD.</li></ul></div>'+
      '<div class="box tip"><span class="bl">CPC 09, item 09 — estoques de longa maturação</span>'+
      '<p>Os <b>juros incorporados</b> ao estoque <b>não</b> são “outras receitas”: devem ser destacados como <b>distribuição da riqueza</b> (item <b>8.3.1</b>) <b>no momento em que o estoque for baixado</b>.</p>'+
      '<p><b>Exemplo do resumo:</b> fabricante de equipamentos de longo prazo obtém <b>empréstimo bancário diretamente relacionado à construção do estoque</b>; a construção demora <b>36 meses</b>. Os juros aparecem em 8.3.1 <b>na baixa</b>.</p></div>'+
      '<div class="box"><span class="bl">Item 2 — INSUMOS ADQUIRIDOS DE TERCEIROS</span>'+
      '<p><b>Inclui os tributos</b> (IPI, ICMS, PIS, COFINS) e <b>NÃO inclui gastos com pessoal próprio</b>.</p>'+
      '<ul><li><b>2.1 Custo dos produtos, das mercadorias e dos serviços vendidos</b></li>'+
      '<li><b>2.2 Materiais, energia, serviços de terceiros e outros</b></li>'+
      '<li><b>2.3 Perda e recuperação de valores ativos</b> — ajustes por <b>avaliação de valor de mercado</b> de estoques, imobilizados, investimentos etc.</li>'+
      '<li><b>2.4 Outras (especificar)</b></li></ul>'+
      '<p>Em 2.1 e 2.2, devem ser considerados os <b>tributos incluídos no momento das compras, recuperáveis ou não</b> — procedimento <b>diferente das práticas utilizadas na DRE</b>.</p></div>'+
      '<div class="box"><span class="bl">Itens 3 a 7 — do bruto ao total a distribuir</span>'+
      '<p><b>3 VAB = 1 − 2</b> · <b>4 retenções</b> = depreciação, amortização e exaustão · <b>5 VAL = 3 − 4</b> · <b>7 = 5 + 6</b>.</p>'+
      '<p><b>Item 6 — valor adicionado recebido em transferência:</b> riqueza que <b>NÃO foi criada pela própria entidade</b>, e sim <b>por terceiros</b>, e que <b>a ela é transferida</b>.</p>'+
      '<ul><li><b>6.1 Resultado de equivalência patrimonial</b> — pode ser receita ou despesa; <b>sendo despesa, apresenta-se negativo</b>.</li>'+
      '<li><b>6.2 Receitas financeiras</b> — <b>todas</b>, inclusive as <b>variações cambiais ativas</b>.</li>'+
      '<li><b>6.3 Outras</b> — <b>dividendos de investimentos avaliados pelo custo</b>, aluguéis, direitos de franquia, royalties, doações.</li></ul></div>')
  ],
  V3:[
    sl("Distribuição da riqueza (item 8) e os casos especiais",
      '<div class="box"><span class="bl">Os quatro componentes do item 8</span>'+
      '<p><span class="chips"><span class="chip">8.1 Pessoal</span><span class="chip">8.2 Impostos, taxas e contribuições</span><span class="chip">8.3 Remuneração de capital de terceiros</span><span class="chip">8.4 Remuneração de capital próprio</span></span></p>'+
      '<p><b>8.1 Pessoal:</b> <b>remuneração direta</b> (salário, 13º, honorários da administração, férias, comissões, hora-extra, participação de empregado) · <b>benefícios</b> (assistência médica, alimentação, transporte, planos de aposentadoria) · <b>FGTS</b> (valores depositados em conta vinculada do empregado).</p></div>'+
      '<div class="box trap"><span class="bl">O INSS partido em dois</span>'+
      '<p><b>INSS RETIDO (do empregado)</b> → <b>Pessoal – remuneração direta</b>, item <b>8.1.1</b>.</p>'+
      '<p><b>INSS PATRONAL (do empregador)</b> → <b>Impostos, taxas e contribuições – federais</b>, item <b>8.2.1</b>.</p>'+
      '<p><b>8.2 federais:</b> IRPJ, CSSL, IPI, CIDE, PIS, COFINS e <b>contribuição sindical patronal</b>. <b>Estaduais:</b> devidos ao Estado. <b>Municipais:</b> devidos ao Município.</p></div>'+
      '<div class="box"><span class="bl">8.3 — remuneração do CAPITAL DE TERCEIROS</span>'+
      '<ul><li><b>Juros</b> — despesas financeiras e <b>variações cambiais passivas</b>.</li>'+
      '<li><b>Aluguéis</b> — pagos ou creditados a terceiros e <b>arrendamento operacional</b>.</li>'+
      '<li><b>Outras</b> — remunerações que configurem transferência de riqueza, <b>mesmo as originadas em capital intelectual</b> (royalties, franquias, direitos autorais).</li></ul></div>'+
      '<div class="box"><span class="bl">8.4 — remuneração do CAPITAL PRÓPRIO</span>'+
      '<ul><li><b>JSCP e dividendos</b> — <b>apenas</b> os valores distribuídos <b>com base no lucro DO EXERCÍCIO</b>. <b>Desconsidere</b> o JSCP e o dividendo distribuídos com base em <b>lucros acumulados de exercícios anteriores</b>: já foram tratados como <b>lucros retidos</b> no exercício em que foram gerados.</li>'+
      '<li><b>Lucros retidos ou prejuízo do exercício</b> — inclui o lucro do exercício destinado à <b>formação das reservas</b> (inclusive o JSCP quando tiver esse tratamento). <b>Prejuízo: valor negativo.</b></li>'+
      '<li><b>Participação dos não controladores nos lucros retidos</b> — <b>somente</b> para consolidação das demonstrações contábeis.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Casos especiais (CPC 09, itens 16 a 27)</span>'+
      '<p><b>Item 17 — depreciação de itens reavaliados ou avaliados ao valor justo:</b> quando a realização do ativo ocorre pelo <b>processo normal de depreciação</b>, a DVA é afetada; inclui-se o valor como <b>“outras receitas”</b> e reconhecem-se os tributos na <b>linha própria de impostos, taxas e contribuições</b>.</p>'+
      '<p><b>Item 18 — ajustes de exercícios anteriores:</b> devem ser <b>adaptados na DVA do período MAIS ANTIGO apresentado</b> para fins de comparação, como se a nova prática estivesse sempre em uso ou o erro fosse corrigido.</p>'+
      '<p><b>Item 19 — ativos construídos para uso próprio:</b> equivale à produção vendida para a própria entidade. <b>Valor contábil integral → Receita (1.3)</b> · <b>serviços de terceiros e materiais → Insumos (2.2)</b> · <b>mão de obra → distribuição (8.1)</b>.</p>'+
      '<p><b>Item 23:</b> a DVA é elaborada a partir da DRE, mas tem <b>interface com a DLPA</b> na parte em que as movimentações dizem respeito à distribuição do resultado do exercício.</p></div>'+
      '<div class="box trap"><span class="bl">Substituição tributária — progressiva × regressiva</span>'+
      '<p><b>Item 26 — PROGRESSIVA:</b> antecipa-se o pagamento do tributo que só será devido na operação seguinte. Do ponto de vista do <b>substituto</b> (normalmente <b>fabricante ou importador</b>), deve-se <b>incluir o “imposto antecipado” no faturamento bruto</b> e depois <b>apresentá-lo como dedução</b> desse faturamento para se chegar à receita bruta. <b>Exemplo:</b> a fábrica vende <b>50 veículos</b> à concessionária e recolhe o ICMS próprio e o da concessionária, antes do fato gerador dela.</p>'+
      '<p><b>Item 27 — REGRESSIVA:</b> o <b>comerciante (substituto)</b> opera com <b>produtor rural (substituído)</b> e responde pelo recolhimento. <b>Com</b> direito ao crédito na operação seguinte → os impostos sobre as vendas entram pelo <b>valor total</b>. <b>Sem</b> direito ao crédito → o valor recolhido é <b>custo dos estoques</b>. <b>Exemplo:</b> produtor rural vende <b>500 kg de peixes</b> a estabelecimento comercial.</p>'+
      '<p class="mn"><em>Referência: o MOMENTO DO PAGAMENTO. Regressiva ← pagamento → Progressiva.</em></p></div>')
  ]
};

var EX = {
S1:{t:"mc", instr:"Segundo a Lei nº 6.404/76, quem é obrigado a elaborar e apresentar a DVA?",
  options:["Apenas a sociedade anônima de capital aberto","Toda sociedade anônima, aberta ou fechada",
           "Toda sociedade empresária","Apenas as companhias fechadas de grande porte"],
  answer:0,
  why:"O art. 176, V, condiciona a demonstração à companhia aberta."},

S2:{t:"multi", instr:"Marque o que o art. 188, II, manda a DVA indicar, no mínimo",
  options:["O valor da riqueza gerada pela companhia",
           "A distribuição da riqueza entre os elementos que contribuíram para gerá-la",
           "A parcela da riqueza não distribuída",
           "A projeção da riqueza a ser gerada no exercício seguinte",
           "O valor de mercado das ações da companhia"],
  answers:[0,1,2],
  why:"Entre os elementos, o dispositivo arrola empregados, financiadores, acionistas, governo e outros."},

S3:{t:"gap", instr:"Complete a origem dos dados da DVA",
  before:"Os dados para a elaboração da DVA são obtidos, principalmente, a partir da ",
  after:".",
  options:["DRE","DFC","DMPL"], answer:0,
  why:"A DVA é estruturada para ser elaborada a partir da demonstração do resultado do exercício."},

S4:{t:"mc", instr:"A DVA Consolidada deve basear-se em quê?",
  options:["Nas Demonstrações Consolidadas","Na soma das DVA das entidades envolvidas",
           "Na média das DVA das controladas","Apenas na DVA da controladora"],
  answer:0,
  why:"O resumo avisa: a banca tenta te enganar com a soma das DVA. Não caia nessa."},

S5:{t:"sort", instr:"Cada afirmação pertence a qual modelo de cálculo do valor adicionado?",
  buckets:["Modelo econômico","Modelo contábil"],
  items:[["Baseia-se na produção",0],
         ["É o que a ciência econômica usa para calcular o PIB",0],
         ["Baseia-se na realização da receita",1],
         ["Baseia-se no regime contábil de competência",1]],
  why:"Como produzir e vender ocorrem em momentos diferentes, os dois valores divergem em cada período."},

S6:{t:"wordbank", instr:"Monte a conclusão do resumo sobre a convergência dos dois modelos",
  target:["os","conceitos","irão","convergir","quando","não","existirem","estoques","inicial","e","final"],
  extra:["dupla-contagem","produção","competência"],
  why:"Convergir significa que tudo o que a entidade produziu ela vendeu: estoques inicial e final iguais a zero."},

S7:{t:"match", instr:"Correlacione cada item da DVA à sua fórmula",
  pairs:[["3 – Valor adicionado bruto","Item 1 − Item 2"],
         ["5 – Valor adicionado líquido produzido pela entidade","Item 3 − Item 4"],
         ["7 – Valor adicionado total a distribuir","Item 5 + Item 6"]],
  why:"O item 4 são as retenções: depreciação, amortização e exaustão."},

S8:{t:"sort", instr:"Cada conta vai para o item 1 (Receitas) ou para o item 2 (Insumos adquiridos de terceiros)?",
  buckets:["Item 1 – Receitas","Item 2 – Insumos de terceiros"],
  items:[["Venda de mercadorias, produtos e serviços",0],
         ["Resultado na venda de imobilizado",0],
         ["Receitas relativas à construção de ativos próprios",0],
         ["Provisão para créditos de liquidação duvidosa",0],
         ["Custo dos produtos, das mercadorias e dos serviços vendidos",1],
         ["Materiais, energia e serviços de terceiros",1],
         ["Perda e recuperação de valores ativos",1]],
  why:"Os dois itens incluem os tributos (IPI, ICMS, PIS e COFINS); o item 2 é que não inclui gastos com pessoal próprio."},

S9:{t:"mc", instr:"As retenções, item 4 da DVA, são representadas por quais contas?",
  options:["Depreciação, amortização e exaustão","Provisões e perdas estimadas",
           "Reservas de lucros e reserva legal","Impostos, taxas e contribuições federais"],
  answer:0,
  why:"Subtraídas do valor adicionado bruto, chegam ao valor adicionado líquido produzido pela entidade."},

S10:{t:"multi", instr:"Marque o que compõe o valor adicionado RECEBIDO EM TRANSFERÊNCIA (item 6)",
  options:["Resultado de equivalência patrimonial","Receitas financeiras, inclusive variações cambiais ativas",
           "Dividendos de investimentos avaliados pelo custo","Aluguéis, direitos de franquia e royalties recebidos",
           "Doações recebidas","Custo das mercadorias vendidas","Depreciação do período"],
  answers:[0,1,2,3,4],
  why:"É a riqueza que não foi criada pela entidade, e sim por terceiros, e que a ela é transferida."},

S11:{t:"gap", instr:"Complete o quadro ATENÇÃO da estrutura da DVA",
  before:"O total do item 8 deve ser exatamente ",
  after:" ao total do item 7.",
  options:["igual","inferior","superior"], answer:0,
  why:"Os lucros retidos e o prejuízo do exercício estão dentro do próprio item 8, por isso os totais fecham."},

S12:{t:"mc", instr:"Estoque de longa maturação com juros de empréstimo a ele incorporados. Como esses juros aparecem na DVA?",
  options:["Como distribuição da riqueza (item 8.3.1), no momento da baixa do estoque",
           "Como outras receitas (item 1.2), no momento da capitalização dos juros",
           "Como insumo adquirido de terceiros (item 2.2)",
           "Como retenção (item 4), ao longo dos 36 meses de construção"],
  answer:0,
  why:"CPC 09, item 09: os juros são destacados como distribuição da riqueza quando o estoque for baixado."},

S13:{t:"sort", instr:"Na distribuição da riqueza, cada verba vai para qual grupo?",
  buckets:["8.1 Pessoal","8.2 Impostos, taxas e contribuições"],
  items:[["Salário, 13º salário, férias e hora-extra",0],
         ["Assistência médica, alimentação e transporte",0],
         ["FGTS depositado em conta vinculada do empregado",0],
         ["INSS retido do empregado",0],
         ["INSS patronal",1],
         ["IRPJ e CSSL",1],
         ["Contribuição sindical patronal",1]],
  why:"O INSS se parte em dois: o retido vai para remuneração direta (8.1.1) e o patronal para federais (8.2.1)."},

S14:{t:"match", instr:"Correlacione cada subitem da remuneração de capital ao seu conteúdo",
  pairs:[["Juros (8.3.1)","Despesas financeiras e variações cambiais passivas"],
         ["Aluguéis (8.3.2)","Aluguéis pagos ou creditados a terceiros e arrendamento operacional"],
         ["Outras (8.3.3)","Royalties, franquias e direitos autorais"],
         ["Participação dos não controladores nos lucros retidos","Somente para consolidação das demonstrações"]],
  why:"Os três primeiros remuneram o capital de terceiros; o último só aparece na consolidação."},

S15:{t:"mc", instr:"Quais JSCP e dividendos entram na remuneração do capital próprio?",
  options:["Apenas os distribuídos com base no lucro do exercício",
           "Apenas os distribuídos com base em lucros acumulados de exercícios anteriores",
           "Todos, independentemente da origem do lucro",
           "Nenhum, pois integram o item 7 da DVA"],
  answer:0,
  why:"Os baseados em lucros acumulados já foram tratados como lucros retidos no exercício em que foram gerados."},

S16:{t:"multi", instr:"Marque o que o resumo lista como REMUNERAÇÃO DIRETA (item 8.1.1)",
  options:["Salário","13º salário","Honorários da administração","Férias","Comissões","Hora-extra",
           "Participação de empregado","Plano de aposentadoria","FGTS"],
  answers:[0,1,2,3,4,5,6],
  why:"Plano de aposentadoria é benefício (8.1.2) e o FGTS tem linha própria (8.1.3)."},

S17:{t:"wordbank", instr:"Monte o tratamento do imposto antecipado na substituição tributária progressiva",
  target:["incluir","o","imposto","antecipado","no","faturamento","bruto","e","depois","apresentá-lo","como","dedução"],
  extra:["custo","dos","estoques"],
  why:"É o item 26 do CPC 09, do ponto de vista do substituto tributário — normalmente fabricante ou importador."},

S18:{t:"match", instr:"Correlacione cada caso especial do CPC 09 ao seu tratamento na DVA",
  pairs:[["Item 17 – realização de ativo reavaliado pela depreciação","Incluir como outras receitas e reconhecer os tributos na linha de impostos, taxas e contribuições"],
         ["Item 18 – ajustes de exercícios anteriores","Adaptar na DVA do período mais antigo apresentado para comparação"],
         ["Item 19 – ativo construído para uso próprio","Valor integral em receitas (1.3), materiais e serviços em insumos (2.2) e mão de obra em pessoal (8.1)"],
         ["Item 27 – ST regressiva sem direito a crédito","Tratar o valor recolhido como custo dos estoques"]],
  why:"Com direito a crédito, na regressiva os impostos sobre vendas entram pelo valor total."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Contabilidade Geral 11","https://www.tecconcursos.com.br/s/Q2eaLA","Q2eaLA"],
  ["Caderno FCC — Contabilidade Geral 11","https://www.tecconcursos.com.br/s/Q2eaLE","Q2eaLE"],
  ["Caderno FGV — Contabilidade Geral 11","https://www.tecconcursos.com.br/s/Q294oY","Q294oY"],
  ["Caderno VUNESP — Contabilidade Geral 11","https://www.tecconcursos.com.br/s/Q2eaLP","Q2eaLP"]
];
var TECNOTA = "A banca ganha dinheiro em três fronteiras deste resumo. A primeira é a estrutura: quem é obrigada a apresentar a DVA (só a S.A. de capital aberto), em que a DVA Consolidada se baseia (nas Demonstrações Consolidadas, e não na soma das DVA das entidades) e as quatro contas do encadeamento 3 = 1 − 2, 5 = 3 − 4, 7 = 5 + 6, com o total do item 8 exatamente igual ao total do item 7. A segunda é o corte formação × distribuição: itens 1 a 7 formam a riqueza, só o item 8 a distribui — e é aí que moram o INSS retido (8.1.1) contra o INSS patronal (8.2.1) e os juros de estoques de longa maturação, que vão para 8.3.1 na baixa do estoque, nunca para outras receitas. A terceira é a inclusão dos tributos: tanto as receitas (item 1) quanto os insumos (item 2) entram COM IPI, ICMS, PIS e COFINS, recuperáveis ou não, em procedimento diferente do da DRE — e o item 2 não inclui gastos com pessoal próprio.";

var UNITS = [
  {n:1, title:"Conceitos, obrigatoriedade e características", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Lei 6.404/76, CPC 09 e o PIB", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · quem apresenta e o que indica", xp:25, data:["S1","S2","T0","T1","T2","T3","T4"]},
    {id:"K3", type:"drill",  title:"Praticar · finalidade, dados e consolidação", xp:25, data:["S3","S4","T5","T6","T7","T8","T9"]},
    {id:"K4", type:"drill",  title:"Praticar · modelo contábil × modelo econômico", xp:25, data:["S5","S6","T10","T11","T12","T13"]},
    {id:"K5", type:"flash",  title:"Flashcards · conceitos e características", xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13]}
  ]},
  {n:2, title:"Estrutura e formação da riqueza", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Os itens 1 a 7, linha por linha", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · o encadeamento dos itens", xp:25, data:["S7","S8","T14","T15","T16","T17","T18","T19"]},
    {id:"K8", type:"drill",  title:"Praticar · receitas e retenções", xp:25, data:["S9","S10","T20","T21","T22","T23","T24","T25"]},
    {id:"K9", type:"drill",  title:"Praticar · insumos e transferência", xp:25, data:["S11","S12","T26","T27","T28","T29","T30","T31","T32","T33"]},
    {id:"K10",type:"flash",  title:"Flashcards · estrutura, receitas e insumos", xp:15, data:[14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]}
  ]},
  {n:3, title:"Distribuição da riqueza e casos especiais", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"O item 8 e os itens 16 a 27 do CPC 09", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · pessoal e o INSS partido em dois", xp:25, data:["S13","S14","T34","T35","T36","T37","T38","T39"]},
    {id:"K13",type:"drill",  title:"Praticar · capital de terceiros e capital próprio", xp:25, data:["S15","S16","T40","T41","T42","T43","T44","T45"]},
    {id:"K14",type:"drill",  title:"Praticar · casos especiais e substituição tributária", xp:25, data:["S17","S18","T46","T47","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · transferência, distribuição e casos especiais", xp:15, data:[30,31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                  xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                 xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 11 de Contabilidade (Radegondes) ---------- */
var COM={
0:"<p>Certo. O resumo transcreve o <b>art. 176, V, da Lei 6.404/76</b> — a diretoria fará elaborar, <b>“se companhia aberta, demonstração do valor adicionado”</b> — e conclui em seguida: <b>“apenas Sociedade Anônima de Capital Aberto é obrigada a elaborar e apresentar a DVA”</b>.</p><p>No esquema do resumo essa é a caixa da direita: <b>“Apenas S.A. de Capital Aberto é obrigada a elaborar e apresentar”</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Conceitos Iniciais</i></p>",
1:"<p>Errado por uma palavra: <b>toda</b>. O inciso V do art. 176 é condicional — <b>“se companhia aberta”</b>.</p><p>A companhia <b>fechada</b> não está obrigada. Guarde a frase do resumo: <b>apenas S.A. de capital ABERTO</b> elabora e apresenta a DVA.</p><p class='fb-fonte'>Resumo 11 · <i>Conceitos Iniciais</i></p>",
2:"<p>Certo — é a literalidade do <b>art. 188, II</b>, transcrito no resumo: a DVA indicará, no mínimo, <b>“o valor da riqueza gerada pela companhia, a sua distribuição entre os elementos que contribuíram para a geração dessa riqueza, tais como empregados, financiadores, acionistas, governo e outros, bem como a parcela da riqueza não distribuída”</b>.</p><p>São <b>três</b> informações mínimas, e a terceira — a <b>parcela não distribuída</b> — é a que a banca costuma apagar.</p><p class='fb-fonte'>Resumo 11 · <i>Conceitos Iniciais</i></p>",
3:"<p>Errado justamente na parte que a banca cortou. O art. 188, II, fecha com <b>“bem como a parcela da riqueza NÃO distribuída”</b> — ela integra o conteúdo mínimo.</p><p>No esquema do resumo, a terceira caixa do “indicará no mínimo” é exatamente <b>“Parcela da riqueza NÃO distribuída”</b>. Na DVA ela aparece nos <b>lucros retidos</b> do item 8.4.</p><p class='fb-fonte'>Resumo 11 · <i>Conceitos Iniciais</i></p>",
4:"<p>Certo. Do resumo: <b>“o CPC 09 estabelece os critérios para elaboração e apresentação da DVA”</b>.</p><p>A Lei 6.404/76 diz <b>quem</b> apresenta e o <b>conteúdo mínimo</b>; o CPC 09 diz <b>como</b> se elabora e se apresenta.</p><p class='fb-fonte'>Resumo 11 · <i>Demonstração do Valor Adicionado (DVA)</i></p>",
5:"<p>Certo. O resumo abre a seção dizendo que a DVA <b>“representa um dos elementos do Balanço Social”</b> e repete no quadro: <b>“Representa um dos componentes do Balanço Social”</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Demonstração do Valor Adicionado (DVA)</i></p>",
6:"<p>Errado na demonstração de origem. O resumo é expresso: <b>“os dados para sua elaboração são obtidos, principalmente, a partir da Demonstração do Resultado do Exercício (DRE)”</b>.</p><p>Faz sentido: a DVA parte das <b>receitas</b> e dos <b>custos e despesas</b>, que são contas de resultado. Nos casos especiais, o resumo só admite uma <b>interface com a DLPA</b> na parte da distribuição do resultado — nunca o balanço patrimonial como fonte principal.</p><p class='fb-fonte'>Resumo 11 · <i>Demonstração do Valor Adicionado (DVA)</i></p>",
7:"<p>Errado — e o resumo antecipa esta pegadinha com todas as letras: <b>“temos que ter um cuidado, pois a banca pode tentar te enganar dizendo que a DVA Consolidada deve basear-se na soma das DVA’s das entidades envolvidas, NÃO caia nessa”</b>.</p><p>O correto: <b>“a elaboração da DVA Consolidada deve basear-se nas Demonstrações Consolidadas”</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Demonstração do Valor Adicionado (DVA)</i></p>",
8:"<p>Certo — são os cinco grupos do quadro <b>DISTRIBUIÇÃO DA RIQUEZA</b> do resumo: <b>Pessoal e Encargos</b> · <b>Impostos, Taxas e Contribuições</b> · <b>Juros e Aluguéis</b> · <b>Juros sobre o Capital Próprio e Dividendos</b> · <b>Lucros retidos/Prejuízos do exercício</b>.</p><p>É o detalhamento <b>mínimo</b> exigido, que na estrutura detalhada reaparece como os subitens 8.1 a 8.4.</p><p class='fb-fonte'>Resumo 11 · <i>Demonstração do Valor Adicionado (DVA)</i></p>",
9:"<p>Errado por um prefixo: é <b>MACROeconômico</b>. O resumo: <b>“a DVA está fundamentada em conceitos Macroeconômicos”</b>, e o quadro repete <b>“Fundamentada em Conceitos Macroeconômicos”</b>.</p><p>Faz sentido pelo que vem depois: ela mede a <b>contribuição da empresa para a formação do PIB</b> — agregado macro, não microeconômico.</p><p class='fb-fonte'>Resumo 11 · <i>Características das Informações da DVA</i></p>",
10:"<p>Certo, com as duas expressões exatas do resumo: a DVA busca apresentar, <b>“eliminando a dupla-contagem, a parcela de contribuição que a empresa tem na formação do Produto Interno Bruto (PIB)”</b>.</p><p>No mesmo trecho está a outra metade da definição: ela apresenta <b>“o quanto a entidade agrega de valor aos insumos adquiridos de terceiros e que são consumidos ou vendidos durante determinado período de tempo”</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Características das Informações da DVA</i></p>",
11:"<p>Errado — está <b>invertido</b>. Do resumo: <b>“a ciência econômica, para cálculo do PIB, baseia-se na PRODUÇÃO, enquanto a contabilidade utiliza o conceito contábil da realização da receita, isto é, baseia-se no regime contábil de competência”</b>.</p><p>Fixe pelo quadro: <b>MODELO ECONÔMICO → PRODUÇÃO</b> · <b>MODELO CONTÁBIL → REGIME CONTÁBIL DE COMPETÊNCIA</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Características das Informações da DVA</i></p>",
12:"<p>Errado numa palavra só: <b>maiores</b>. O resumo diz o contrário — <b>“essas diferenças serão tanto menores quanto MENORES forem as diferenças entre os estoques inicial e final para o período considerado”</b>.</p><p>A conclusão do trecho confirma o sentido: o conceito econômico e o contábil <b>convergem quando não existirem estoques inicial e final</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Características das Informações da DVA</i></p>",
13:"<p>Certo, na literalidade do resumo: <b>“o conceito econômico e o conceito contábil irão convergir quando não existirem estoques inicial e final”</b>.</p><p>O “explicando melhor” do material traduz: <b>“convergir os modelos significa dizer que tudo que a entidade produziu (Modelo Econômico) ela vendeu (Modelo Contábil), ou seja, os Estoques Inicial e Final são iguais a ZERO”</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Características das Informações da DVA</i></p>",
14:"<p>Certo. Na estrutura do resumo: <b>“3 – VALOR ADICIONADO BRUTO = (1 – 2)”</b>, isto é, <b>Receitas</b> menos <b>Insumos adquiridos de terceiros</b>.</p><p>O resumo ainda repete em texto: o VAB <b>“é o 3º item da DVA e representa o resultado da subtração entre os itens 1 e 2”</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Valor Adicionado Bruto</i></p>",
15:"<p>Certo. Do resumo: <b>“as retenções ficam no item 4 da DVA e são representadas pelas contas de depreciação, amortização e exaustão”</b>.</p><p>Na estrutura resumida a linha 4 aparece exatamente assim: <b>“4 – DEPRECIAÇÃO, AMORTIZAÇÃO E EXAUSTÃO”</b>. É o que se subtrai do VAB para chegar ao valor adicionado líquido.</p><p class='fb-fonte'>Resumo 11 · <i>Retenções</i></p>",
16:"<p>Errado na operação: não é soma, é <b>subtração</b>. O resumo: o valor adicionado líquido <b>“fica no item 5 da DVA e representa o resultado da SUBTRAÇÃO entre os itens 3 e 4”</b>.</p><p>Pelo diagrama do material: <b>3. VALOR ADICIONADO BRUTO − 4. RETENÇÕES (deprec/amort/exaust) = 5. VALOR ADICIONADO LÍQUIDO</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Valor Adicionado Líquido</i></p>",
17:"<p>Certo. Do resumo: o valor adicionado total a distribuir <b>“fica no item 7 da DVA e representa o resultado da SOMA entre os itens 5 e 6”</b> — <b>7 = (5 + 6)</b>.</p><p>Pelo diagrama: <b>5. VALOR ADICIONADO LÍQUIDO + 6. VALOR ADICIONADO RECEBIDO EM TRANSFERÊNCIA = 7. VALOR ADICIONADO TOTAL A DISTRIBUIR</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Valor Adicionado Total a Distribuir</i></p>",
18:"<p>Errado no item final: a primeira parte vai do item 1 ao <b>item 7</b>, não ao 8. O resumo marca os dois blocos com setas: <b>“1ª Parte da DVA → Formação da riqueza (vai do item 1 até o item 7)”</b> e <b>“2ª Parte da DVA → Distribuição da riqueza (apenas o item 8)”</b>.</p><p>Este é o corte mais cobrado do assunto: <b>formar</b> a riqueza é 1 a 7; <b>distribuir</b> é só o 8.</p><p class='fb-fonte'>Resumo 11 · <i>Segunda Parte da DVA – Distribuição da Riqueza</i></p>",
19:"<p>Errado, e contra o quadro <b>ATENÇÃO</b> do resumo: <b>“o total do item 8 deve ser exatamente igual ao total do item 7”</b>.</p><p>A justificativa da assertiva se desmonta sozinha: a riqueza <b>não distribuída</b> aos sócios também aparece dentro do item 8, na linha <b>8.4.3 – Lucros retidos / Prejuízo do exercício</b>. Nada sobra fora do item 8.</p><p class='fb-fonte'>Resumo 11 · <i>Estrutura da DVA — Atenção</i></p>",
20:"<p>Certo, na letra do quadro de <b>RECEITAS</b>: a venda de mercadorias, produtos e serviços <b>“corresponde ao Ingresso Bruto ou Faturamento Bruto, pois inclui os valores dos tributos incidentes sobre essas receitas (ICMS, IPI, PIS e COFINS)”</b>.</p><p>Na estrutura detalhada, a própria linha 1 vem rotulada: <b>“1 – RECEITAS (inclui tributos incidentes sobre a receita: IPI, ICMS, PIS e COFINS)”</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Primeira Parte da DVA – Formação da Riqueza</i></p>",
21:"<p>Errado — é o oposto. A linha 1 da estrutura detalhada diz <b>“1 – RECEITAS (inclui tributos incidentes sobre a receita: IPI, ICMS, PIS e COFINS)”</b>, e o quadro explica que por isso a venda equivale ao <b>ingresso bruto</b> ou <b>faturamento bruto</b>.</p><p>Guarde o contraste que a banca explora: na <b>DRE</b> você está acostumado a deduzir os tributos da receita bruta; na <b>DVA</b> eles <b>entram</b> no item 1 (e também no item 2).</p><p class='fb-fonte'>Resumo 11 · <i>Primeira Parte da DVA – Formação da Riqueza</i></p>",
22:"<p>Certo. A <b>PCLD</b> é o subitem <b>1.4</b> da estrutura detalhada, e o quadro do resumo detalha: <b>“Inclui valores relativos à Constituição e Reversão da PCLD”</b>.</p><p>Repare que são os <b>dois</b> movimentos — constituir e reverter —, e ambos dentro do item 1, o das receitas.</p><p class='fb-fonte'>Resumo 11 · <i>Primeira Parte da DVA – Formação da Riqueza</i></p>",
23:"<p>Errado: é exatamente o exemplo que o resumo dá para <b>“Outras Receitas”</b>, o subitem <b>1.2</b> — <b>“da mesma forma que o item anterior inclui os tributos incidentes sobre essas receitas. Exemplo: Resultado na Venda de Imobilizado”</b>.</p><p>Ou seja: entra no item 1, e entra <b>com</b> os tributos.</p><p class='fb-fonte'>Resumo 11 · <i>Primeira Parte da DVA – Formação da Riqueza</i></p>",
24:"<p>Certo. É o subitem <b>1.3 – Receitas relativas à construção de ativos próprios</b>, que o quadro define como <b>“gastos acumulados com a construção de ativos para uso próprio pela empresa”</b>.</p><p>O caso especial do <b>item 19 do CPC 09</b> explica a lógica: essa construção <b>“equivale à produção vendida para a própria entidade, por isso seu valor contábil integral deve ser considerado como Receita (item 1.3 da DVA)”</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Primeira Parte da DVA – Formação da Riqueza</i></p>",
25:"<p>Errado, e o <b>item 09 do CPC 09</b>, transcrito no resumo, fecha a questão: <b>“no caso de estoques de longa maturação, os juros a eles incorporados deverão ser destacados como distribuição da riqueza no momento em que os respectivos estoques forem baixados; dessa forma, NÃO há que se considerar esse valor como outras receitas”</b>.</p><p>No exemplo do material — empréstimo bancário ligado à construção de estoque, com <b>36 meses</b> de construção —, os juros vão para o item <b>8.3.1</b> na <b>baixa</b> do estoque.</p><p class='fb-fonte'>Resumo 11 · <i>Primeira Parte da DVA – CPC 09, item 09</i></p>",
26:"<p>Certo, na literalidade do <b>item 09 do CPC 09</b> citado no resumo: os juros incorporados a estoques de longa maturação <b>“deverão ser destacados como distribuição da riqueza no momento em que os respectivos estoques forem baixados”</b>.</p><p>O exemplo do material localiza a linha: fabricante de equipamentos de longo prazo, empréstimo <b>diretamente relacionado à construção do estoque</b>, <b>36 meses</b> de obra — os juros aparecem em <b>8.3.1</b>, e não em outras receitas.</p><p class='fb-fonte'>Resumo 11 · <i>Primeira Parte da DVA – CPC 09, item 09</i></p>",
27:"<p>Errado. Na estrutura detalhada, a linha 2 vem com a ressalva entre parênteses: <b>“2 – INSUMOS ADQUIRIDOS DE TERCEIROS (inclui os valores dos tributos: IPI, ICMS, PIS e COFINS) e (NÃO inclui gastos com pessoal próprio)”</b>.</p><p>O quadro repete no subitem 2.1: <b>“Não inclui gastos com pessoal próprio”</b>. E faz sentido — o pessoal próprio não é terceiro: ele aparece na <b>distribuição</b> da riqueza, no item <b>8.1</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Insumos Adquiridos de Terceiros</i></p>",
28:"<p>Certo, com a observação literal do resumo, repetida em 2.1 e 2.2: <b>“devem ser considerados os tributos incluídos no momento das compras, recuperáveis ou não. Esse procedimento é diferente das práticas utilizadas na DRE”</b>.</p><p>É o contraste que a banca explora: na DRE você segrega o tributo recuperável; na <b>DVA</b>, não — entra tudo, <b>recuperável ou não</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Insumos Adquiridos de Terceiros</i></p>",
29:"<p>Certo. O quadro do resumo define <b>“perda e recuperação de valores ativos”</b> como o que <b>“inclui valores relativos a ajustes por avaliação de valor de mercado de estoques, imobilizados, investimentos, etc.”</b>.</p><p>Guarde a composição do item 2 pelo texto do resumo: <b>(1)</b> custo dos produtos, das mercadorias e dos serviços vendidos; <b>(2)</b> materiais, energia, serviços de terceiros e outros; e <b>(3)</b> perda e recuperação de valores ativos.</p><p class='fb-fonte'>Resumo 11 · <i>Insumos Adquiridos de Terceiros</i></p>",
30:"<p>Errado — a assertiva inverteu quem cria e quem recebe. O resumo define o item 6 como a riqueza <b>“que NÃO tenha sido criada pela própria entidade, e sim por terceiros, e que a ela é transferida”</b>.</p><p>Os exemplos do material deixam claro o sentido do fluxo: <b>receitas financeiras, equivalência patrimonial, dividendos, aluguel, royalties</b> — riqueza que <b>chega</b> à entidade. Riqueza que <b>sai</b> para terceiros é o item <b>8.3</b>, remuneração do capital de terceiros.</p><p class='fb-fonte'>Resumo 11 · <i>Valor Adicionado Recebido em Transferência</i></p>",
31:"<p>Certo — são os três subitens da estrutura detalhada: <b>6.1 Resultado de Equivalência Patrimonial</b> · <b>6.2 Receitas Financeiras</b> · <b>6.3 Outras (aluguel, dividendos, royalties, doações)</b>.</p><p>O quadro do resumo detalha 6.3: <b>“dividendos relativos a investimentos avaliados pelo Custo, aluguéis, direitos de franquia, Royalties, Doações”</b>. Atenção ao “avaliados pelo Custo” — se fosse equivalência patrimonial, o resultado iria para 6.1.</p><p class='fb-fonte'>Resumo 11 · <i>Valor Adicionado Recebido em Transferência</i></p>",
32:"<p>Certo, pelo quadro do resumo: o resultado de equivalência patrimonial <b>“pode ser Receita ou Despesa com Equivalência Patrimonial. Sendo despesa, o valor será apresentado negativo”</b>.</p><p>É a mesma técnica usada no item 8.4.3, em que o <b>prejuízo do exercício</b> também é apresentado com <b>valor negativo</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Valor Adicionado Recebido em Transferência</i></p>",
33:"<p>Errado por exclusão indevida. O quadro do resumo é abrangente: as receitas financeiras <b>“abarcam todas as receitas financeiras, incluindo as variações cambiais ativas”</b>.</p><p>Guarde o par simétrico: <b>variação cambial ATIVA</b> → item 6.2, valor adicionado recebido em transferência; <b>variação cambial PASSIVA</b> → item 8.3.1, juros na remuneração do capital de terceiros.</p><p class='fb-fonte'>Resumo 11 · <i>Valor Adicionado Recebido em Transferência</i></p>",
34:"<p>Certo. Na estrutura detalhada: <b>8.1 PESSOAL</b> → <b>8.1.1 Remuneração direta</b> · <b>8.1.2 Benefícios</b> · <b>8.1.3 FGTS</b>. O quadro <b>8.1 – PESSOAL</b> do resumo traz as mesmas três linhas.</p><p class='fb-fonte'>Resumo 11 · <i>Segunda Parte da DVA – 8.1 Pessoal</i></p>",
35:"<p>Certo — é a lista do quadro de pessoal do resumo para <b>remuneração direta</b>: <b>“salário, 13º salário, honorários da administração, férias, comissões, hora-extra, participação de empregado, etc.”</b>.</p><p>Repare que <b>honorários da administração</b> e <b>participação de empregado</b> estão aqui, em 8.1.1, e não em remuneração de capital próprio.</p><p class='fb-fonte'>Resumo 11 · <i>Segunda Parte da DVA – 8.1 Pessoal</i></p>",
36:"<p>Errado na subdivisão: esses são os <b>BENEFÍCIOS</b>, subitem <b>8.1.2</b>. O quadro do resumo lista em benefícios <b>“assistência médica, alimentação, transporte, planos de aposentadoria, etc.”</b>.</p><p>A <b>remuneração direta</b> (8.1.1) é a outra linha: salário, 13º, honorários da administração, férias, comissões, hora-extra e participação de empregado. Todas dentro de <b>8.1 Pessoal</b> — o que muda é o subitem.</p><p class='fb-fonte'>Resumo 11 · <i>Segunda Parte da DVA – 8.1 Pessoal</i></p>",
37:"<p>Certo, na definição do quadro: <b>FGTS</b> são os <b>“valores depositados em conta vinculada do empregado”</b>, e ele tem linha própria — <b>8.1.3</b> —, ao lado de remuneração direta e benefícios.</p><p class='fb-fonte'>Resumo 11 · <i>Segunda Parte da DVA – 8.1 Pessoal</i></p>",
38:"<p>Errado no destino. O quadro <b>COMO TRATAR O INSS NA DISTRIBUIÇÃO DA RIQUEZA?</b> parte o INSS em dois: <b>“INSS RETIDO (do empregado) → Pessoal – Remuneração direta (item 8.1.1 da DVA)”</b>.</p><p>O que vai para <b>impostos, taxas e contribuições – federais (8.2.1)</b> é o <b>INSS PATRONAL (do empregador)</b>. Fixe a lógica: o retido é parte do salário do empregado, então é <b>pessoal</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Segunda Parte da DVA – Como tratar o INSS</i></p>",
39:"<p>Certo — é o outro lado do quadro do INSS: <b>“INSS PATRONAL (do empregador) → Impostos, Taxas e Contribuições – Federais (item 8.2.1 da DVA)”</b>.</p><p>Par completo para a prova: <b>retido do empregado</b> → 8.1.1 (pessoal) · <b>patronal do empregador</b> → 8.2.1 (federais).</p><p class='fb-fonte'>Resumo 11 · <i>Segunda Parte da DVA – Como tratar o INSS</i></p>",
40:"<p>Errado: ela figura, sim. O quadro <b>8.2 – IMPOSTOS, TAXAS E CONTRIBUIÇÕES</b> do resumo define os federais como os <b>“tributos devidos à União (IRPJ, CSSL, IPI, CIDE, PIS, COFINS e Contribuição sindical Patronal)”</b>.</p><p>As outras duas linhas do quadro são simples: <b>estaduais</b> = tributos devidos ao Estado; <b>municipais</b> = tributos devidos ao Município.</p><p class='fb-fonte'>Resumo 11 · <i>Segunda Parte da DVA – 8.2 Impostos, Taxas e Contribuições</i></p>",
41:"<p>Certo. O quadro <b>8.3 – REMUNERAÇÃO DO CAPITAL DE TERCEIROS</b> define <b>Juros</b> como <b>“Despesas Financeiras, Variações Cambiais Passivas”</b>.</p><p>Contraste que rende questão: a variação cambial <b>passiva</b> é distribuição de riqueza (8.3.1); a variação cambial <b>ativa</b> é riqueza <b>recebida em transferência</b> (item 6.2).</p><p class='fb-fonte'>Resumo 11 · <i>Segunda Parte da DVA – 8.3 Remuneração do Capital de Terceiros</i></p>",
42:"<p>Errado na troca de capital: aluguéis são remuneração do capital <b>DE TERCEIROS</b>. O quadro 8.3 define <b>Aluguéis</b> como <b>“aluguéis pagos ou creditados a terceiros e Arrendamento Operacional”</b> — subitem <b>8.3.2</b>.</p><p>O capital <b>próprio</b> (8.4) é outra coisa: JSCP, dividendos, lucros retidos ou prejuízo do exercício e participação dos não controladores nos lucros retidos.</p><p class='fb-fonte'>Resumo 11 · <i>Segunda Parte da DVA – 8.3 Remuneração do Capital de Terceiros</i></p>",
43:"<p>Certo, na letra do quadro 8.3, linha <b>Outras</b>: <b>“outras remunerações que configurem transferência de riqueza, mesmo as originadas em capital intelectual (royalties, franquias, direitos autorais)”</b> — subitem <b>8.3.3</b>.</p><p>Cuidado com o espelho: <b>royalties recebidos</b> ficam no item 6.3 (recebido em transferência); <b>royalties pagos</b> ficam aqui, em 8.3.3.</p><p class='fb-fonte'>Resumo 11 · <i>Segunda Parte da DVA – 8.3 Remuneração do Capital de Terceiros</i></p>",
44:"<p>Errado — é exatamente o que o resumo manda <b>desconsiderar</b>. O quadro <b>8.4</b> diz: <b>“devem ser incluídos apenas os valores distribuídos com base no Lucro do Exercício”</b> e <b>“desconsiderar o JSCP e o Dividendo distribuídos com base em Lucros Acumulados de exercícios anteriores, pois já foram tratados como Lucros Retidos no exercício em que foram gerados”</b>.</p><p>A razão é evitar contar a mesma riqueza duas vezes — mesma preocupação da <b>dupla-contagem</b> que abre as características da DVA.</p><p class='fb-fonte'>Resumo 11 · <i>Segunda Parte da DVA – 8.4 Remuneração do Capital Próprio</i></p>",
45:"<p>Certo, nas duas partes. O quadro 8.4 define <b>Lucros Retidos ou Prejuízo do Exercício</b> como o que <b>“inclui os valores do Lucro do Exercício destinado à formação das reservas (inclusive o JSCP quando tiverem esse tratamento)”</b> e acrescenta: <b>“no caso de prejuízo, apresentar com valor negativo”</b>.</p><p>É nesta linha que aparece a <b>parcela da riqueza não distribuída</b> exigida pelo art. 188, II — e é por isso que o total do item 8 fecha igual ao do item 7.</p><p class='fb-fonte'>Resumo 11 · <i>Segunda Parte da DVA – 8.4 Remuneração do Capital Próprio</i></p>",
46:"<p>Errado. Tanto a estrutura detalhada quanto o quadro 8.4 restringem a linha: <b>“8.4.4 – Participação dos Não controladores nos Lucros retidos (só para consolidação)”</b> — <b>“usada somente para Consolidação das Demonstrações Contábeis”</b>.</p><p>Na DVA <b>individual</b> não há não controladores a destacar; a linha só nasce quando se consolida.</p><p class='fb-fonte'>Resumo 11 · <i>Segunda Parte da DVA – 8.4 Remuneração do Capital Próprio</i></p>",
47:"<p>Certo, pelo <b>item 17 do CPC 09</b> transcrito no resumo: quando a realização do ativo reavaliado ou avaliado ao valor justo ocorre <b>“pelo processo normal de depreciação”</b>, a DVA é afetada e, <b>“no momento da realização da reavaliação ou da avaliação ao valor justo, deve-se incluir esse valor como ‘outras receitas’ na DVA, bem como se reconhecem os respectivos tributos na linha própria de impostos, taxas e contribuições”</b>.</p><p>São <b>dois</b> lados: receita no item 1.2 e tributo no item 8.2.</p><p class='fb-fonte'>Resumo 11 · <i>Casos Especiais – depreciação de itens reavaliados ou ao valor justo</i></p>",
48:"<p>Certo — literalidade do <b>item 18 do CPC 09</b> no resumo: os ajustes de exercícios anteriores <b>“devem ser adaptados na DVA relativa ao período mais antigo apresentado pra fins de comparação, como se a nova prática contábil estivesse sempre em uso ou o erro fosse corrigido”</b>.</p><p>A palavra que a banca troca é <b>“mais antigo”</b> — tentam escrever “mais recente”.</p><p class='fb-fonte'>Resumo 11 · <i>Casos Especiais – ajustes de exercícios anteriores</i></p>",
49:"<p>Certo, nos três destinos do <b>item 19 do CPC 09</b>, como o resumo os lista: a construção <b>“equivale à produção vendida para a própria entidade, por isso seu valor contábil integral deve ser considerado como Receita (item 1.3 da DVA)”</b> · <b>“gastos com serviços de terceiros e materiais são apropriados como Insumos (item 2.2 da DVA)”</b> · <b>“a mão-de-obra é considerada como distribuição dessa riqueza (item 8.1 da DVA)”</b>.</p><p>Coerente com a regra geral: pessoal próprio nunca é insumo de terceiros.</p><p class='fb-fonte'>Resumo 11 · <i>Casos Especiais – ativos construídos pela empresa para uso próprio</i></p>",
50:"<p>Errado: o resumo manda fazer o contrário no <b>item 26 do CPC 09</b> — do ponto de vista do substituto tributário (normalmente <b>fabricante ou importador</b>), <b>“deve-se incluir o valor do ‘imposto antecipado’ no faturamento bruto e depois apresentá-lo como dedução desse faturamento para se chegar à receita bruta”</b>.</p><p>No exemplo do material, a fábrica vende <b>50 veículos</b> à concessionária e recolhe o ICMS próprio <b>e</b> o da concessionária, antes de ocorrer o fato gerador dela.</p><p class='fb-fonte'>Resumo 11 · <i>Casos Especiais – substituição tributária progressiva</i></p>",
51:"<p>Errado no destino do valor. O <b>item 27 do CPC 09</b>, no resumo, dá duas situações: se o comerciante <b>tem</b> direito ao crédito na operação seguinte, <b>“o valor dos impostos incidentes sobre as vendas deve ser considerado pelo valor total, uma vez que foi recolhido pelo próprio comerciante”</b>; e <b>“se o comerciante não fizer jus ao crédito do tributo, o valor recolhido deve ser tratado como CUSTO DOS ESTOQUES”</b>.</p><p>Exemplo do material: produtor rural (substituído) vende <b>500 Kg de peixes</b> ao estabelecimento comercial (substituto). Mnemônico do resumo: tomando o <b>momento do pagamento</b> como referência, a <b>regressiva</b> paga depois e a <b>progressiva</b> paga antes.</p><p class='fb-fonte'>Resumo 11 · <i>Casos Especiais – substituição tributária regressiva</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"11", nome:"Demonstração do Valor Adicionado (CPC 09)", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
