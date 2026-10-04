/* Contabilidade Avançada — Módulo 09: CPC 48 — Instrumentos Financeiros (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cavan09 = (function(){
"use strict";

var CARDS = [
  ["O que são instrumentos financeiros?","<b>Ativos financeiros</b>, <b>passivos financeiros</b> ou <b>acordos contratualmente estabelecidos entre as partes</b>, que criam <b>direitos e obrigações financeiras</b> para uma empresa."],
  ["Qual o exemplo de instrumento financeiro que o resumo dá?","A <b>ação emitida por uma empresa</b>: ao emitir, ela <b>vende parte da propriedade</b> aos investidores, que se tornam acionistas e têm direito a <b>receber dividendos</b> (fluxos de caixa) ou <b>vender as ações no futuro</b>."],
  ["Qual o objetivo do CPC 48 (item 01)?","<b>Estabelecer princípios</b> para os <b>relatórios financeiros de ativos e passivos financeiros</b>, que devem apresentar informações <b>pertinentes e úteis</b> aos usuários das demonstrações contábeis para avaliação dos <b>valores, época e incerteza dos fluxos de caixa FUTUROS</b> da entidade."],
  ["Quais as três formas de mensuração subsequente de ativo financeiro?","<b>Custo amortizado</b> · <b>valor justo por meio de outros resultados abrangentes (ORA)</b> · <b>valor justo por meio do resultado</b>."],
  ["Com base em que a entidade classifica os ativos financeiros (item 4.1.1)?","Com base <b>tanto</b> no <b>modelo de negócios da entidade</b> para a gestão dos ativos financeiros <b>quanto</b> nas <b>características de fluxo de caixa contratual</b> do ativo financeiro. São os <b>dois</b> critérios, somados."],
  ["Quais as duas condições da mensuração ao CUSTO AMORTIZADO (item 4.1.2)?","<b>Ambas</b>: (a) ativo mantido em modelo de negócios cujo objetivo seja <b>manter ativos financeiros com o fim de receber fluxos de caixa contratuais</b>; e (b) os <b>termos contratuais</b> derem origem, <b>em datas especificadas</b>, a fluxos de caixa que constituam <b>exclusivamente pagamentos de principal e juros</b> sobre o principal em aberto."],
  ["Exemplo do custo amortizado no resumo","A Cia. RAD adquiriu <b>R$ 100.000</b> em títulos do tesouro nacional que remuneram <b>juros semestrais de 6%</b> (fluxos de caixa em datas especificadas) e pretende <b>mantê-los para receber esses juros</b> → mensura pelo <b>custo amortizado</b>."],
  ["Quais as duas condições da mensuração ao VALOR JUSTO POR MEIO DE ORA (item 4.1.2A)?","<b>Ambas</b>: (a) objetivo do modelo de negócios atingido <b>tanto pelo recebimento de fluxos de caixa contratuais quanto pela venda</b> de ativos financeiros; e (b) os termos contratuais derem origem, <b>em datas especificadas</b>, a fluxos de caixa de <b>principal e juros</b>."],
  ["Exemplo do valor justo por meio de ORA no resumo","Mesmos <b>R$ 100.000</b> em títulos com <b>juros semestrais de 6%</b>, mas a Cia. RAD <b>vende o título sempre que há valorização no valor justo</b>, para <b>realizar</b> o investimento e <b>reinvestir</b> em outros ativos financeiros → <b>valor justo por meio de ORA</b>."],
  ["Quando se mensura ao VALOR JUSTO POR MEIO DO RESULTADO (item 4.1.4)?","<b>Sempre que não</b> for mensurado ao <b>custo amortizado</b> (4.1.2) nem ao <b>valor justo por meio de ORA</b> (4.1.2A). É uma classificação <b>RESIDUAL</b>."],
  ["Qual o objetivo do instrumento mensurado a valor justo por meio do resultado?","A <b>geração de caixa por meio da VENDA</b> desses ativos (item <b>B4.1.5</b>)."],
  ["Os três objetivos do quadro de mensuração","<b>Custo amortizado:</b> manter o ativo financeiro para <b>receber fluxos de caixa</b>. <b>Valor justo por ORA:</b> <b>receber</b> os fluxos de caixa contratuais <b>ou vender</b> o ativo. <b>Valor justo por resultado:</b> <b>geração de caixa pela venda</b> do ativo."],

  ["Quais as duas espécies de instrumento financeiro ajustadas a valor justo?","Os mensurados a <b>Valor Justo por meio do Resultado</b> e os mensurados a <b>Valor Justo por meio de Outros Resultados Abrangentes (ORA)</b>."],
  ["Para onde vai o ajuste a valor justo no VALOR JUSTO POR MEIO DO RESULTADO?","Apropriado <b>ao resultado</b> da entidade — o ajuste vai <b>diretamente ao resultado</b>."],
  ["Para onde vai o ajuste a valor justo no VALOR JUSTO POR MEIO DE ORA?","Apropriado no <b>Patrimônio Líquido</b>, na conta <b>Ajuste de Avaliação Patrimonial</b>, e seus efeitos são evidenciados na <b>Demonstração dos Resultados Abrangentes (DRA)</b>."],
  ["Exemplo 01 do quadro ATENÇÃO!","Ativo classificado como <b>valor justo por meio de resultado</b>; se depois o <b>valor contábil for inferior ao valor de mercado (valor justo)</b>, a empresa reconhece um <b>ganho em conta de resultado</b>."],
  ["Exemplo 02 do quadro ATENÇÃO!","Companhia aberta adquire uma <b>LTN</b> classificada a <b>valor justo por meio de ORA</b>: após o reconhecimento inicial, avalia a LTN pelo <b>valor justo</b> e reconhece o efeito em <b>ajustes de avaliação patrimonial</b>, no <b>patrimônio líquido</b>."],
  ["Como é a MENSURAÇÃO INICIAL (item 5.1.1)?","Ao <b>VALOR JUSTO</b>, <b>mais ou menos</b> os <b>custos de transação</b> diretamente atribuíveis à <b>aquisição ou à emissão</b> do ativo ou passivo financeiro."],
  ["Qual a exceção da mensuração inicial?","As <b>contas a receber de clientes</b> (item <b>5.1.3</b>, conforme o <b>CPC 47</b>), mensuradas pelo seu <b>PREÇO DE TRANSAÇÃO</b> quando <b>não contiverem componente de financiamento significativo</b> (ou quando aplicado o <b>expediente prático do item 63 do CPC 47</b>)."],
  ["E os custos de transação no valor justo por meio do resultado?","<b>NÃO são contabilizados</b> no reconhecimento inicial do instrumento financeiro mensurado a <b>valor justo por meio do resultado</b> (item 5.1.1)."],
  ["Onde vão os ganhos/perdas do confronto entre valor justo e preço da transação?","Em <b>contas de RESULTADO</b>, no reconhecimento inicial (<b>CPC 48, item B5.1.2A</b>)."],
  ["Quando não se exige a divulgação do valor justo?","Quando o <b>valor contábil for aproximação razoável do valor justo</b> — ex.: <b>contas a receber de clientes</b> e <b>a pagar a fornecedores de curto prazo</b> (<b>CPC 40, item 29</b>)."],
  ["O que diz o item 5.2.1 (mensuração subsequente)?","Após o reconhecimento inicial, a entidade deve mensurar o <b>ativo financeiro</b> conforme os itens 4.1.1 a 4.1.5: <b>ao custo amortizado</b>; <b>ao valor justo por meio de ORA</b>; ou <b>ao valor justo por meio do resultado</b>."],

  ["Características do CUSTO AMORTIZADO","<b>NÃO é ajustado a valor justo</b>. Os juros são reconhecidos <b>no resgate do título</b> e contabilizados como <b>Receita Financeira</b>. O <b>principal</b> se mantém pelo <b>valor de aquisição ajustado às perdas prováveis</b>, quando for o caso."],
  ["Exemplo do custo amortizado: R$ 800.000, 2% ao mês, valor justo de R$ 820.000 em 31/12/2023","<b>1º passo:</b> juros = 800.000 × 2% = <b>R$ 16.000</b> → D Títulos Mens. ao Custo Amortizado · C Receita Financeira. <b>2º passo:</b> <b>não há ajuste a valor justo</b>. <b>DRE = R$ 16.000</b> · <b>BP = R$ 816.000</b>."],
  ["Características do VALOR JUSTO POR MEIO DE ORA","<b>É ajustado a valor justo</b>. Os juros são reconhecidos com o <b>rendimento do título (mensalmente)</b>, como <b>Receita Financeira</b>. A <b>diferença entre o valor atualizado e o valor justo</b> vai para <b>Ajuste de Avaliação Patrimonial (AAP)</b>, no <b>PL</b>."],
  ["Exemplo do ORA: R$ 600.000, 1% ao mês, valor justo de R$ 604.000 em 31/12/2023","Juros = 600.000 × 1% = <b>R$ 6.000</b> (D Títulos Mens. a VJ por ORA · C Receita Financeira). Valor atualizado seria <b>606.000</b>, mas o valor justo é <b>604.000</b> → <b>AAP negativo de R$ 2.000</b>. <b>DRE = R$ 6.000</b> · <b>BP = R$ 604.000</b>."],
  ["Lançamento do ajuste no exemplo do ORA","<b>D</b> – Ajuste de Avaliação Patrimonial R$ 2.000 (<b>PL</b>) · <b>C</b> – Títulos Mens. a Valor Justo por meio de ORA R$ 2.000 (<b>Ativo</b>)."],
  ["Características do VALOR JUSTO POR MEIO DO RESULTADO","<b>É ajustado a valor justo</b>. Os juros são reconhecidos com o <b>rendimento do título (mensalmente)</b>, como <b>Receita Financeira</b>. A <b>diferença entre o valor atualizado e o valor justo</b> é registrada no <b>RESULTADO</b>."],
  ["Exemplo do VJ por resultado: R$ 1.000.000, 1,5% ao mês, valor justo de R$ 1.018.000 em 31/12/2023","Juros = 1.000.000 × 1,5% = <b>R$ 15.000</b>. Valor atualizado seria <b>1.015.000</b>, mas o valor justo é <b>1.018.000</b> → <b>ajuste positivo de R$ 3.000 no resultado</b>. <b>DRE = R$ 18.000</b> (15.000 + 3.000) · <b>BP = R$ 1.018.000</b>."],
  ["Lançamento do ajuste no exemplo do VJ por resultado","<b>D</b> – Títulos Mens. a Valor Justo por meio do Resultado R$ 3.000 (<b>Ativo</b>) · <b>C</b> – Receita Financeira R$ 3.000 (<b>Resultado</b>)."],
  ["O quadro final: o que vai no BP e o que vai na DRE?","<b>Custo Amortizado:</b> BP = custo de aquisição + rendimentos · DRE = rendimentos. <b>VJ por ORA:</b> BP = valor justo · DRE = rendimentos. <b>VJ por Resultado:</b> BP = valor justo · DRE = rendimentos <b>+ ajuste a valor justo</b>."],
  ["Art. 183, I, da Lei 6.404/76 — como se avaliam as aplicações em instrumentos financeiros?","As aplicações em instrumentos financeiros, <b>inclusive derivativos</b>, e em direitos e títulos de créditos, no <b>AC ou no RLP</b>: <b>(a)</b> pelo <b>valor justo</b>, quando <b>destinadas à negociação ou disponíveis para venda</b>; <b>(b)</b> pelo <b>valor de custo de aquisição ou valor de emissão</b>, atualizado e ajustado ao <b>valor provável de realização, quando este for inferior</b>, nas demais aplicações."],
  ["Classificação antiga (Lei 6.404/76) × nova (CPC 48)","<b>Disponíveis para venda</b> → mensurados a <b>Valor Justo por meio de ORA</b>. <b>Destinados a negociação</b> → mensurados a <b>Valor Justo por meio do Resultado</b>. <b>Mantidos até o vencimento</b> → mensurados ao <b>Custo Amortizado</b>."],
  ["O que são investimentos em participações societárias?","<b>Aquisições de parte do capital de uma empresa</b>, por compra de <b>ações ou quotas</b>, com o objetivo de obter retorno por <b>dividendos, valorização das ações ou participação nos lucros</b> da investida. Podem ser <b>temporárias</b> ou <b>permanentes</b>."],
  ["Investimento TEMPORÁRIO × PERMANENTE","<b>Temporário:</b> compra ações para <b>vender após algum tempo</b>, lucrando com a valorização → <b>Ativo Circulante</b> ou <b>ANC Realizável a Longo Prazo</b> → <b>CPC 48</b>. <b>Permanente:</b> ações adquiridas com <b>intenção de permanência</b> → <b>ANC Investimento</b> → <b>CPC 18</b>."],
  ["Sem intenção de permanência, aplica-se a equivalência patrimonial?","<b>NÃO</b>. Se o investimento não tem intenção de permanência, <b>não se aplica o Método de Equivalência Patrimonial</b> — trata-se de <b>mero instrumento financeiro</b>."]
];

var QS = [
  ["Os instrumentos financeiros são ativos financeiros, passivos financeiros ou acordos contratualmente estabelecidos entre as partes, que criam direitos e obrigações financeiras para uma empresa.","C","CEBRASPE","Conceito do resumo."],
  ["A ação emitida por uma empresa é exemplo de instrumento financeiro: ao emiti-la, a empresa vende aos investidores uma parte da propriedade da empresa.","C","FCC","Exemplo do resumo."],
  ["O objetivo do CPC 48 é estabelecer princípios para os relatórios financeiros de ativos financeiros e passivos financeiros.","C","FGV","Item 01 do CPC 48."],
  ["O CPC 48 visa a informações úteis para a avaliação dos valores, época e incerteza dos fluxos de caixa passados da entidade.","E","VUNESP","São os fluxos de caixa <b>futuros</b>."],
  ["A entidade deve classificar os ativos financeiros como subsequentemente mensurados ao custo amortizado, ao valor justo por meio de outros resultados abrangentes ou ao valor justo por meio do resultado.","C","CPC 48, item 4.1.1","As três possibilidades."],
  ["A classificação do ativo financeiro toma por base o modelo de negócios da entidade ou, alternativamente, as características de fluxo de caixa contratual do ativo.","E","CPC 48, item 4.1.1","O item usa <b>tanto</b> um <b>quanto</b> o outro — são os dois critérios."],
  ["O ativo financeiro deve ser mensurado ao custo amortizado se ambas as condições do item 4.1.2 forem atendidas.","C","CEBRASPE","O item exige as duas condições."],
  ["Mensura-se ao custo amortizado o ativo financeiro mantido dentro de modelo de negócios cujo objetivo seja manter ativos financeiros com o fim de receber fluxos de caixa contratuais.","C","FCC","Condição (a) do item 4.1.2."],
  ["Para o custo amortizado, exige-se que os termos contratuais do ativo dêem origem, em datas especificadas, a fluxos de caixa que constituam exclusivamente pagamentos de principal e juros sobre o valor do principal em aberto.","C","FGV","Condição (b) do item 4.1.2."],
  ["Basta que o ativo financeiro seja mantido com o fim de receber fluxos de caixa contratuais para ser mensurado ao custo amortizado, sendo dispensável examinar os termos contratuais.","E","VUNESP","O item 4.1.2 exige <b>ambas</b> as condições."],
  ["A Companhia RAD adquiriu R$ 100.000 em títulos do tesouro nacional que remuneram juros semestrais de 6% e tem por objetivo mantê-los para receber esses juros; nesse caso, deve mensurar o instrumento ao valor justo por meio do resultado.","E","CEBRASPE","No exemplo do resumo a mensuração é ao <b>custo amortizado</b>."],
  ["Mensura-se ao valor justo por meio de outros resultados abrangentes o ativo mantido dentro de modelo de negócios cujo objetivo seja atingido tanto pelo recebimento de fluxos de caixa contratuais quanto pela venda de ativos financeiros.","C","FCC","Condição (a) do item 4.1.2A."],
  ["Se a Companhia RAD vende esse tipo de título sempre que há valorização em seu valor justo, para realizar o investimento e reinvestir em outros ativos financeiros, deve mensurá-lo ao valor justo por meio de outros resultados abrangentes.","C","FGV","Exemplo do resumo."],
  ["A mensuração ao valor justo por meio do resultado é residual: aplica-se quando o ativo não for mensurado ao custo amortizado nem ao valor justo por meio de outros resultados abrangentes.","C","CPC 48, item 4.1.4","Classificação residual."],
  ["O objetivo dos instrumentos financeiros mensurados ao valor justo por meio do resultado é a geração de caixa por meio da venda desses ativos.","C","VUNESP","Item B4.1.5, citado no resumo."],
  ["No custo amortizado, os objetivos são receber os fluxos de caixa contratuais ou vender o ativo financeiro.","E","CEBRASPE","Esse é o objetivo do <b>valor justo por meio de ORA</b>."],

  ["Existem duas espécies de instrumentos financeiros ajustados a valor justo: os mensurados a valor justo por meio do resultado e os mensurados a valor justo por meio de outros resultados abrangentes.","C","FCC","Quadro ATENÇÃO! do resumo."],
  ["Os instrumentos financeiros mensurados ao valor justo por meio do resultado terão eventuais ajustes a valor justo apropriados ao resultado da entidade.","C","FGV","Regra do quadro ATENÇÃO!."],
  ["Os instrumentos financeiros mensurados ao valor justo por meio de outros resultados abrangentes terão eventuais ajustes a valor justo apropriados ao resultado do exercício.","E","VUNESP","Vão ao <b>PL</b>, em Ajuste de Avaliação Patrimonial."],
  ["O ajuste a valor justo dos instrumentos mensurados por meio de ORA é registrado na conta ajuste de avaliação patrimonial, no patrimônio líquido, e seus efeitos são evidenciados na Demonstração dos Resultados Abrangentes.","C","CEBRASPE","Quadro ATENÇÃO! do resumo."],
  ["Se um ativo financeiro classificado como mensurado ao valor justo por meio de resultado tiver valor contábil inferior ao seu valor de mercado, a empresa deverá reconhecer um ganho em conta de resultado.","C","FCC","Exemplo 01 do quadro ATENÇÃO!."],
  ["Companhia aberta que adquire uma LTN classificada como mensurada ao valor justo por meio de ORA deve, após o reconhecimento inicial, avaliá-la pelo valor justo, reconhecendo o efeito na conta ajustes de avaliação patrimonial, do patrimônio líquido.","C","FGV","Exemplo 02 do quadro ATENÇÃO!."],
  ["No reconhecimento inicial, a entidade deve mensurar o ativo financeiro ou o passivo financeiro ao seu valor justo, mais ou menos os custos de transação diretamente atribuíveis à aquisição ou à emissão.","C","CPC 48, item 5.1.1","Regra da mensuração inicial."],
  ["Os custos de transação integram a mensuração inicial também do instrumento financeiro mensurado ao valor justo por meio do resultado.","E","VUNESP","Nesse caso os custos de transação <b>não</b> são contabilizados."],
  ["As contas a receber de clientes que não contenham componente de financiamento significativo devem ser mensuradas, no reconhecimento inicial, pelo seu preço de transação.","C","CEBRASPE","Item 5.1.3, conforme o CPC 47."],
  ["No reconhecimento inicial, os ganhos ou perdas decorrentes do confronto entre o valor justo do instrumento e o preço da transação devem ser evidenciados diretamente no patrimônio líquido.","E","CPC 48, item B5.1.2A","Devem ser evidenciados em <b>contas de resultado</b>."],
  ["Caso o valor contábil seja uma aproximação razoável do valor justo, como nas contas a receber de clientes e a pagar a fornecedores de curto prazo, não se exigirá das entidades a divulgação do valor justo.","C","CPC 40, item 29","Quadro ATENÇÃO! da mensuração inicial."],
  ["Após o reconhecimento inicial, a entidade deve mensurar o ativo financeiro ao custo amortizado, ao valor justo por meio de outros resultados abrangentes ou ao valor justo por meio do resultado.","C","CPC 48, item 5.2.1","Mensuração subsequente."],
  ["A mensuração pelo preço de transação no reconhecimento inicial aplica-se a todos os ativos financeiros.","E","FGV","É exceção restrita às <b>contas a receber de clientes</b>."],
  ["Dizer que o instrumento financeiro está mensurado a valor justo por meio do resultado significa que eventual ajuste a valor justo deve ser apropriado diretamente ao resultado.","C","CEBRASPE","Comentário do resumo ao item 4.1.4."],
  ["Os instrumentos financeiros mensurados ao custo amortizado também são ajustados a valor justo no balanço patrimonial.","E","FCC","Títulos ao custo amortizado <b>não</b> sofrem ajuste a valor justo."],

  ["A Companhia RAD aplicou R$ 800.000 em títulos do Tesouro Nacional mensurados ao custo amortizado, com juros de 2% ao mês; a receita financeira de juros reconhecida em 31/12/2023 é de R$ 16.000.","C","FGV","800.000 × 2%."],
  ["No mesmo exemplo, o reconhecimento dos juros é feito a débito de títulos mensurados ao custo amortizado e a crédito de receita financeira.","C","VUNESP","1º passo do exemplo."],
  ["No mesmo exemplo, com valor justo de R$ 820.000 em 31/12/2023, o título deve ser atualizado no balanço patrimonial para R$ 820.000.","E","CEBRASPE","Custo amortizado não sofre ajuste a valor justo: saldo de <b>816.000</b>."],
  ["No exemplo dos R$ 800.000 ao custo amortizado, o efeito na DRE é de R$ 16.000 e o saldo no balanço patrimonial é de R$ 816.000.","C","FCC","Conclusão do resumo."],
  ["No instrumento mensurado ao custo amortizado, os juros são reconhecidos no resgate do título e contabilizados como receita financeira, e o valor do principal se mantém pelo valor de aquisição ajustado às perdas prováveis, quando for o caso.","C","FGV","Quadro das características do custo amortizado."],
  ["A Companhia RAD aplicou R$ 600.000 em títulos mensurados ao valor justo por meio de ORA, com juros de 1% ao mês; a receita financeira reconhecida em 31/12/2023 é de R$ 6.000.","C","VUNESP","600.000 × 1%."],
  ["No mesmo exemplo, com valor justo de R$ 604.000, o saldo do título no balanço patrimonial é de R$ 606.000.","E","CEBRASPE","O saldo é o <b>valor justo de 604.000</b>."],
  ["No exemplo dos R$ 600.000, faz-se um ajuste de avaliação patrimonial negativo de R$ 2.000, a débito de ajuste de avaliação patrimonial e a crédito de títulos mensurados ao valor justo por meio de ORA.","C","FCC","Lançamento do resumo."],
  ["No exemplo dos R$ 600.000 mensurados ao valor justo por meio de ORA, o efeito na DRE é de R$ 6.000.","C","FGV","Apenas os juros transitam pelo resultado."],
  ["A Companhia RAD aplicou R$ 1.000.000 em títulos mensurados ao valor justo por meio do resultado, com juros de 1,5% ao mês e valor justo de R$ 1.018.000; o efeito na DRE é de R$ 18.000, sendo R$ 15.000 de juros e R$ 3.000 de ajuste a valor justo.","C","VUNESP","Conclusão do resumo."],
  ["No mesmo exemplo, o saldo do título no balanço patrimonial é de R$ 1.015.000.","E","CEBRASPE","É o <b>valor justo de 1.018.000</b>."],
  ["No exemplo dos R$ 1.000.000, o ajuste de R$ 3.000 é registrado a débito de títulos mensurados ao valor justo por meio do resultado e a crédito de receita financeira.","C","FCC","Lançamento do resumo."],
  ["No quadro do resumo, o instrumento mensurado ao custo amortizado é registrado no balanço patrimonial pelo custo de aquisição mais rendimentos e, na DRE, apenas pelos rendimentos.","C","FGV","Quadro final."],
  ["No quadro do resumo, o instrumento mensurado ao valor justo por meio de ORA é registrado na DRE pelos rendimentos mais o ajuste a valor justo.","E","VUNESP","Na DRE do ORA entram só os <b>rendimentos</b>; rendimentos + ajuste é o <b>valor justo por meio do resultado</b>."],
  ["Pelo art. 183, I, da Lei nº 6.404/76, as aplicações em instrumentos financeiros, inclusive derivativos, e em direitos e títulos de créditos classificados no ativo circulante ou no realizável a longo prazo são avaliadas pelo valor justo quando se tratar de aplicações destinadas à negociação ou disponíveis para venda.","C","Lei 6.404, art. 183, I","Alínea a."],
  ["Os títulos antes classificados como disponíveis para venda correspondem, no CPC 48, aos mensurados a valor justo por meio do resultado.","E","CEBRASPE","Disponíveis para venda correspondem ao <b>valor justo por meio de ORA</b>."],
  ["Pelo art. 183, I, da Lei nº 6.404/76, as demais aplicações e os direitos e títulos de crédito são avaliados pelo valor de custo de aquisição ou valor de emissão, atualizado conforme disposições legais ou contratuais, ajustado ao valor provável de realização, quando este for inferior.","C","Lei 6.404, art. 183, I","Alínea b."],
  ["Os títulos classificados como mantidos até o vencimento correspondem, no CPC 48, aos mensurados ao custo amortizado.","C","FCC","Quadro de equivalência das classificações."],
  ["Os investimentos em participações societárias podem ser classificados como temporários ou permanentes.","C","FGV","Duas espécies."],
  ["O investimento temporário, em que a empresa adquire ações com a intenção de vender após algum tempo, é classificado no ativo não circulante investimento e regido pelo CPC 18.","E","VUNESP","Temporário vai ao <b>AC ou ANC RLP</b> e é regido pelo <b>CPC 48</b>."],
  ["Se o investimento de uma empresa em outra não tem intenção de permanência, não se aplica sobre ele o método de equivalência patrimonial, por se tratar de mero instrumento financeiro.","C","CEBRASPE","Quadro ATENÇÃO! do resumo."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("O CPC 48, a classificação e os três objetivos",
      '<div class="box"><span class="bl">O que são instrumentos financeiros</span>'+
      '<p><b>Ativos financeiros</b>, <b>passivos financeiros</b> ou <b>acordos contratualmente estabelecidos entre as partes</b>, que criam <b>direitos e obrigações financeiras</b> para uma empresa.</p>'+
      '<p><b>Exemplo do resumo:</b> a <b>ação emitida</b> por uma empresa — ela vende parte da propriedade aos investidores, que passam a ter direito a <b>receber dividendos</b> ou <b>vender as ações no futuro</b>.</p></div>'+
      '<div class="box"><span class="bl">Objetivo do CPC 48 (item 01)</span>'+
      '<p><b>Estabelecer princípios</b> para os <b>relatórios financeiros de ativos e passivos financeiros</b>, que devem apresentar informações <b>pertinentes e úteis</b> aos usuários das demonstrações contábeis para a avaliação dos <b>valores, época e incerteza dos fluxos de caixa FUTUROS</b> da entidade.</p></div>'+
      '<div class="box"><span class="bl">Classificação — item 4.1.1</span>'+
      '<p>A entidade classifica os ativos financeiros como mensurados ao <b>custo amortizado</b>, ao <b>valor justo por meio de outros resultados abrangentes</b> ou ao <b>valor justo por meio do resultado</b>.</p>'+
      '<p>Com base <b>TANTO</b> no <b>modelo de negócios da entidade</b> para a gestão dos ativos financeiros <b>QUANTO</b> nas <b>características do fluxo de caixa contratual</b> — no esquema do resumo, os dois critérios estão ligados por um <b>E</b>, não por um “ou”.</p></div>'+
      '<div class="box tip"><span class="bl">As três portas de entrada</span>'+
      '<p><b>Custo amortizado (4.1.2)</b> — <b>ambas</b> as condições: (a) modelo de negócios com o objetivo de <b>manter ativos financeiros para receber fluxos de caixa contratuais</b>; (b) termos contratuais que dão origem, <b>em datas especificadas</b>, a fluxos de caixa <b>exclusivamente de principal e juros</b> sobre o principal em aberto.</p>'+
      '<p><b>Valor justo por meio de ORA (4.1.2A)</b> — <b>ambas</b>: (a) objetivo atingido <b>tanto pelo recebimento de fluxos de caixa contratuais quanto pela venda</b> de ativos financeiros; (b) a mesma condição dos fluxos de principal e juros.</p>'+
      '<p><b>Valor justo por meio do resultado (4.1.4)</b> — <b>residual</b>: só quando o ativo <b>não</b> for mensurado ao custo amortizado nem ao valor justo por meio de ORA.</p></div>'+
      '<div class="box"><span class="bl">Os exemplos da Companhia RAD</span>'+
      '<p><b>R$ 100.000</b> em títulos do tesouro nacional com <b>juros semestrais de 6%</b> (fluxos em datas especificadas):</p>'+
      '<ul><li>objetivo de <b>manter o título para receber esses juros</b> → <b>custo amortizado</b>;</li>'+
      '<li>a empresa <b>vende sempre que há valorização no valor justo</b>, para realizar o investimento e <b>reinvestir</b> → <b>valor justo por meio de ORA</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Quadro dos objetivos — o que a banca troca</span>'+
      '<p><b>Custo amortizado:</b> o objetivo é <b>manter</b> o ativo financeiro para <b>receber fluxos de caixa</b>.</p>'+
      '<p><b>Valor justo por ORA:</b> os objetivos são <b>receber</b> os fluxos de caixa contratuais <b>OU vender</b> o ativo financeiro.</p>'+
      '<p><b>Valor justo por resultado:</b> o objetivo é a <b>geração de caixa por meio da VENDA</b> do ativo financeiro (item <b>B4.1.5</b>).</p>'+
      '<p>A troca clássica é colar o “receber ou vender” no custo amortizado.</p></div>')
  ],
  V2:[
    sl("Onde vai o ajuste, mensuração inicial e mensuração subsequente",
      '<div class="box trap"><span class="bl">ATENÇÃO! — as duas espécies ajustadas a valor justo</span>'+
      '<p>Só <b>duas</b> são ajustadas a valor justo: as mensuradas a <b>Valor Justo por meio de Resultado</b> e as mensuradas a <b>Valor Justo por meio de Outros Resultados Abrangentes (ORA)</b>.</p>'+
      '<p><b>Valor justo por resultado:</b> ajustes apropriados <b>ao resultado</b> da entidade.</p>'+
      '<p><b>Valor justo por ORA:</b> ajustes apropriados no <b>Patrimônio Líquido</b>, na conta <b>Ajuste de Avaliação Patrimonial</b> — e os efeitos aparecem na <b>Demonstração dos Resultados Abrangentes (DRA)</b>.</p></div>'+
      '<div class="box"><span class="bl">Os dois exemplos do quadro</span>'+
      '<p><b>Exemplo 01:</b> ativo classificado a <b>valor justo por meio de resultado</b>; se o <b>valor contábil ficar inferior ao valor de mercado</b> (valor justo), reconhece-se <b>ganho em conta de resultado</b>.</p>'+
      '<p><b>Exemplo 02:</b> companhia aberta adquire uma <b>LTN</b> classificada a <b>valor justo por meio de ORA</b>: após o reconhecimento inicial, avalia pelo <b>valor justo</b> e leva o efeito a <b>ajustes de avaliação patrimonial</b>, no <b>PL</b>.</p></div>'+
      '<div class="box"><span class="bl">Mensuração inicial — item 5.1.1</span>'+
      '<p>A entidade mensura o ativo ou o passivo financeiro ao seu <b>VALOR JUSTO</b>, <b>mais ou menos</b> os <b>custos de transação</b> diretamente atribuíveis à <b>aquisição ou à emissão</b>.</p>'+
      '<p><b>EXCETO</b> as <b>contas a receber de clientes</b> (item <b>5.1.3</b>, conforme o <b>CPC 47</b>), mensuradas pelo <b>PREÇO DE TRANSAÇÃO</b> quando não contiverem <b>componente de financiamento significativo</b> — ou quando aplicado o <b>expediente prático do item 63 do CPC 47</b>.</p>'+
      '<p class="mn"><em>OBS. do resumo: os custos de transação NÃO são contabilizados no reconhecimento inicial do instrumento mensurado a valor justo por meio do resultado.</em></p></div>'+
      '<div class="box tip"><span class="bl">ATENÇÃO! — dois detalhes que aparecem em prova</span>'+
      '<p><b>1)</b> No reconhecimento inicial, os <b>ganhos ou perdas</b> do confronto entre o <b>valor justo</b> do instrumento e o <b>preço da transação</b> devem ser evidenciados em <b>contas de RESULTADO</b> (<b>CPC 48, item B5.1.2A</b>).</p>'+
      '<p><b>2)</b> Se o <b>valor contábil for aproximação razoável do valor justo</b> — contas a receber de clientes e a pagar a fornecedores de <b>curto prazo</b> —, <b>não se exige</b> a divulgação do valor justo (<b>CPC 40, item 29</b>).</p></div>'+
      '<div class="box"><span class="bl">Mensuração subsequente — item 5.2.1</span>'+
      '<p>Após o reconhecimento inicial, o <b>ativo financeiro</b> é mensurado, conforme os itens 4.1.1 a 4.1.5: <b>(a)</b> ao custo amortizado; <b>(b)</b> ao valor justo por meio de outros resultados abrangentes; ou <b>(c)</b> ao valor justo por meio do resultado.</p></div>')
  ],
  V3:[
    sl("As três contas da Companhia RAD, a Lei 6.404/76 e as participações societárias",
      '<div class="box"><span class="bl">O roteiro que as bancas seguem</span>'+
      '<p>Em todos os três exemplos o resumo avisa que a banca faz <b>duas perguntas</b>: qual o <b>efeito total na DRE</b> em 31/12/2023 e qual o <b>valor apresentado no BP</b>.</p>'+
      '<p><b>1º passo:</b> reconhecer a <b>receita financeira de juros</b>. <b>2º passo:</b> verificar se o título <b>sofre ajuste a valor justo</b>.</p></div>'+
      '<div class="box"><span class="bl">Custo amortizado — R$ 800.000, 2% ao mês, valor justo 820.000</span>'+
      '<p>Juros = 800.000 × 2% = <b>R$ 16.000</b> → <b>D</b> Títulos Mens. ao Custo Amortizado · <b>C</b> Receita Financeira.</p>'+
      '<p>Títulos ao custo amortizado <b>NÃO são ajustados a valor justo</b> no BP: <b>DRE = 16.000</b> · <b>BP = 816.000</b> (e não 820.000).</p>'+
      '<p>No quadro: <b>não é ajustado a valor justo</b> · os juros são reconhecidos <b>no resgate do título</b> como <b>receita financeira</b> · o <b>principal</b> se mantém pelo <b>valor de aquisição ajustado às perdas prováveis</b>, quando for o caso.</p></div>'+
      '<div class="box"><span class="bl">Valor justo por ORA — R$ 600.000, 1% ao mês, valor justo 604.000</span>'+
      '<p>Juros = 600.000 × 1% = <b>R$ 6.000</b> → <b>D</b> Títulos Mens. a VJ por meio de ORA · <b>C</b> Receita Financeira.</p>'+
      '<p>O valor atualizado seria <b>606.000</b>, mas o valor justo da tabela é <b>604.000</b> → <b>AAP negativo de R$ 2.000</b>: <b>D</b> Ajuste de Avaliação Patrimonial 2.000 (PL) · <b>C</b> Títulos Mens. a VJ por meio de ORA 2.000 (Ativo).</p>'+
      '<p><b>DRE = 6.000</b> (só os juros) · <b>BP = 604.000</b>.</p></div>'+
      '<div class="box"><span class="bl">Valor justo por resultado — R$ 1.000.000, 1,5% ao mês, valor justo 1.018.000</span>'+
      '<p>Juros = 1.000.000 × 1,5% = <b>R$ 15.000</b>. O valor atualizado seria <b>1.015.000</b>, mas o valor justo é <b>1.018.000</b> → <b>ajuste positivo de R$ 3.000 no resultado</b>: <b>D</b> Títulos Mens. a VJ por meio do Resultado 3.000 · <b>C</b> Receita Financeira 3.000.</p>'+
      '<p><b>DRE = 18.000</b> (15.000 de juros + 3.000 de ajuste) · <b>BP = 1.018.000</b>.</p></div>'+
      '<div class="box tip"><span class="bl">O quadro final: BP × DRE</span>'+
      '<p><b>Custo Amortizado:</b> BP = <b>custo de aquisição + rendimentos</b> · DRE = <b>rendimentos</b>.</p>'+
      '<p><b>Valor Justo por ORA:</b> BP = <b>valor justo</b> · DRE = <b>rendimentos</b>.</p>'+
      '<p><b>Valor Justo por Resultado:</b> BP = <b>valor justo</b> · DRE = <b>rendimentos + ajuste a valor justo</b>.</p></div>'+
      '<div class="box"><span class="bl">Lei 6.404/76, art. 183, I — e a tradução das classificações</span>'+
      '<p>As aplicações em instrumentos financeiros, <b>inclusive derivativos</b>, e em direitos e títulos de créditos, no <b>AC ou no RLP</b>: <b>(a)</b> pelo <b>valor justo</b>, quando <b>destinadas à negociação ou disponíveis para venda</b>; <b>(b)</b> pelo <b>valor de custo de aquisição ou valor de emissão</b>, atualizado conforme disposições legais ou contratuais e <b>ajustado ao valor provável de realização, quando este for inferior</b>, nas demais aplicações.</p>'+
      '<p><b>Antiga → nova:</b> <b>disponíveis para venda</b> → <b>VJ por meio de ORA</b> · <b>destinados a negociação</b> → <b>VJ por meio do resultado</b> · <b>mantidos até o vencimento</b> → <b>custo amortizado</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Participações societárias — temporária ou permanente</span>'+
      '<p>São <b>aquisições de parte do capital</b> de uma empresa, por <b>ações ou quotas</b>, visando retorno por <b>dividendos, valorização das ações ou participação nos lucros</b>.</p>'+
      '<p><b>Temporário:</b> compra para <b>vender após algum tempo</b>, lucrando com a valorização → <b>Ativo Circulante</b> ou <b>ANC Realizável a Longo Prazo</b> → <b>CPC 48</b>.</p>'+
      '<p><b>Permanente:</b> ações adquiridas com <b>intenção de permanência</b> → <b>ANC Investimento</b> → <b>CPC 18</b>.</p>'+
      '<p><b>ATENÇÃO!</b> Sem intenção de permanência, <b>não se aplica o Método de Equivalência Patrimonial</b> — é <b>mero instrumento financeiro</b>.</p></div>')
  ]
};

var EX = {
S1:{t:"gap", instr:"Complete o conceito de instrumento financeiro",
  before:"Os instrumentos financeiros são ativos financeiros, passivos financeiros ou acordos contratualmente estabelecidos entre as partes, que criam ",
  after:" para uma empresa.",
  options:["direitos e obrigações financeiras","apenas obrigações de pagamento","garantias reais de dívida"], answer:0,
  why:"Conceito do resumo. O exemplo dele é a ação emitida pela empresa."},

S2:{t:"mc", instr:"Qual é o objetivo do CPC 48, conforme o item 01?",
  options:["Estabelecer princípios para os relatórios financeiros de ativos e passivos financeiros, com informações úteis à avaliação dos valores, época e incerteza dos fluxos de caixa futuros da entidade",
           "Definir as alíquotas de tributação dos rendimentos de aplicações financeiras",
           "Padronizar o plano de contas das instituições financeiras",
           "Estabelecer o método de equivalência patrimonial para investimentos permanentes"],
  answer:0,
  why:"Fluxos de caixa FUTUROS — a banca troca por passados."},

S3:{t:"multi", instr:"Marque as bases da classificação dos ativos financeiros (item 4.1.1)",
  options:["O modelo de negócios da entidade para a gestão dos ativos financeiros",
           "As características de fluxo de caixa contratual do ativo financeiro",
           "O prazo de vencimento do título","A forma jurídica do emissor do título",
           "A intenção do acionista controlador"],
  answers:[0,1],
  why:"O esquema do resumo liga os dois critérios por um E — são cumulativos."},

S4:{t:"sort", instr:"A que mensuração corresponde cada objetivo do modelo de negócios?",
  buckets:["Custo amortizado","Valor justo por meio de ORA"],
  items:[["Manter ativos financeiros com o fim de receber fluxos de caixa contratuais",0],
         ["Objetivo atingido tanto pelo recebimento de fluxos de caixa quanto pela venda de ativos financeiros",1],
         ["Receber os fluxos de caixa contratuais ou vender o ativo financeiro",1],
         ["A Cia. RAD adquire títulos de juros semestrais de 6% para receber esses juros",0],
         ["A Cia. RAD vende o título sempre que há valorização no valor justo, para reinvestir",1]],
  why:"A troca clássica é colar o receber OU vender no custo amortizado."},

S5:{t:"mc", instr:"Quando o ativo financeiro é mensurado ao valor justo por meio do resultado (item 4.1.4)?",
  options:["Sempre que não for mensurado ao custo amortizado nem ao valor justo por meio de ORA — é classificação residual",
           "Sempre que houver fluxos de caixa em datas especificadas",
           "Sempre que o título for título público federal",
           "Sempre que a entidade mantiver o ativo até o vencimento"],
  answer:0,
  why:"Residual, e o eventual ajuste a valor justo vai direto ao resultado."},

S6:{t:"match", instr:"Correlacione cada mensuração ao seu objetivo, conforme o quadro do resumo",
  pairs:[["Custo amortizado","Manter o ativo financeiro para receber fluxos de caixa"],
         ["Valor justo por meio de ORA","Receber os fluxos de caixa contratuais ou vender o ativo financeiro"],
         ["Valor justo por meio do resultado","A geração de caixa por meio da venda do ativo financeiro"]],
  why:"O objetivo do valor justo por meio do resultado está no item B4.1.5."},

S7:{t:"sort", instr:"Para onde vai o ajuste a valor justo em cada caso?",
  buckets:["Resultado","Patrimônio Líquido — Ajuste de Avaliação Patrimonial"],
  items:[["Instrumento mensurado a valor justo por meio de resultado",0],
         ["Instrumento mensurado a valor justo por meio de ORA",1],
         ["Ativo a valor justo por meio de resultado com valor contábil inferior ao valor de mercado",0],
         ["LTN classificada como mensurada a valor justo por meio de ORA",1],
         ["Efeitos evidenciados na Demonstração dos Resultados Abrangentes (DRA)",1]],
  why:"Só essas duas espécies são ajustadas a valor justo."},

S8:{t:"gap", instr:"Complete a regra da mensuração inicial (item 5.1.1)",
  before:"No reconhecimento inicial, a entidade deve mensurar o ativo financeiro ou o passivo financeiro ao seu ",
  after:", mais ou menos os custos de transação diretamente atribuíveis à aquisição ou à emissão.",
  options:["valor justo","valor presente","custo histórico de emissão"], answer:0,
  why:"Exceto as contas a receber de clientes, que vão pelo preço de transação."},

S9:{t:"mc", instr:"Como ficam os custos de transação no instrumento mensurado a valor justo por meio do resultado?",
  options:["Não são contabilizados no reconhecimento inicial",
           "São somados ao valor justo no reconhecimento inicial",
           "São deduzidos do valor justo no reconhecimento inicial",
           "São registrados no patrimônio líquido"],
  answer:0,
  why:"OBS. do resumo ao item 5.1.1."},

S10:{t:"mc", instr:"Como se mensuram, no reconhecimento inicial, as contas a receber de clientes sem componente de financiamento significativo?",
  options:["Pelo seu preço de transação","Pelo valor justo mais os custos de transação",
           "Pelo valor justo menos a perda estimada","Pelo valor presente dos fluxos contratuais"],
  answer:0,
  why:"Exceção do item 5.1.3, conforme o CPC 47 (ou o expediente prático do item 63)."},

S11:{t:"multi", instr:"Marque o que o resumo afirma nos quadros ATENÇÃO! da mensuração inicial",
  options:["Os ganhos ou perdas do confronto entre o valor justo e o preço da transação vão a contas de resultado (item B5.1.2A)",
           "Quando o valor contábil é aproximação razoável do valor justo, não se exige a divulgação do valor justo (CPC 40, item 29)",
           "Contas a receber de clientes e a pagar a fornecedores de curto prazo são exemplos dessa aproximação razoável",
           "Os custos de transação entram no reconhecimento inicial do instrumento a valor justo por meio do resultado",
           "As contas a receber de clientes são mensuradas pelo valor justo mais os custos de transação"],
  answers:[0,1,2],
  why:"As duas últimas invertem justamente as duas ressalvas do resumo."},

S12:{t:"match", instr:"Correlacione o item do CPC 48 ao seu conteúdo",
  pairs:[["Item 4.1.1","Classificação com base no modelo de negócios e nos fluxos de caixa contratuais"],
         ["Item 4.1.2","Condições da mensuração ao custo amortizado"],
         ["Item 4.1.2A","Condições da mensuração ao valor justo por meio de ORA"],
         ["Item 4.1.4","Mensuração residual ao valor justo por meio do resultado"],
         ["Item 5.1.1","Mensuração inicial: valor justo mais ou menos custos de transação"],
         ["Item 5.2.1","Mensuração subsequente do ativo financeiro"]]},

S13:{t:"mc", instr:"Cia. RAD: R$ 800.000 em títulos ao CUSTO AMORTIZADO, juros de 2% ao mês, valor justo de R$ 820.000 em 31/12/2023. Qual o efeito na DRE e o saldo no BP?",
  options:["DRE de R$ 16.000 e BP de R$ 816.000","DRE de R$ 16.000 e BP de R$ 820.000",
           "DRE de R$ 36.000 e BP de R$ 820.000","DRE de R$ 20.000 e BP de R$ 820.000"],
  answer:0,
  why:"Juros de 800.000 × 2% = 16.000, e o custo amortizado não sofre ajuste a valor justo."},

S14:{t:"mc", instr:"Cia. RAD: R$ 600.000 em títulos a VALOR JUSTO POR MEIO DE ORA, juros de 1% ao mês, valor justo de R$ 604.000 em 31/12/2023. Qual o efeito na DRE e o saldo no BP?",
  options:["DRE de R$ 6.000 e BP de R$ 604.000","DRE de R$ 6.000 e BP de R$ 606.000",
           "DRE de R$ 4.000 e BP de R$ 604.000","DRE de R$ 8.000 e BP de R$ 606.000"],
  answer:0,
  why:"O valor atualizado seria 606.000; o ajuste de 2.000 vai ao AAP, no PL, e não à DRE."},

S15:{t:"mc", instr:"Cia. RAD: R$ 1.000.000 em títulos a VALOR JUSTO POR MEIO DO RESULTADO, juros de 1,5% ao mês, valor justo de R$ 1.018.000 em 31/12/2023. Qual o efeito na DRE e o saldo no BP?",
  options:["DRE de R$ 18.000 e BP de R$ 1.018.000","DRE de R$ 15.000 e BP de R$ 1.015.000",
           "DRE de R$ 15.000 e BP de R$ 1.018.000","DRE de R$ 3.000 e BP de R$ 1.018.000"],
  answer:0,
  why:"15.000 de juros mais 3.000 de ajuste a valor justo no resultado."},

S16:{t:"wordbank", instr:"Monte o lançamento do ajuste no exemplo dos R$ 600.000 mensurados a valor justo por meio de ORA",
  target:["D","Ajuste","de","Avaliação","Patrimonial","2.000","C","Títulos","Mens.","a","Valor","Justo","por","meio","de","ORA","2.000"],
  extra:["Receita","Financeira","6.000"],
  why:"O valor atualizado seria 606.000 e o valor justo é 604.000: AAP negativo de 2.000."},

S17:{t:"match", instr:"Correlacione, pelo quadro final do resumo, cada mensuração ao valor registrado",
  pairs:[["Custo amortizado — no BP","Custo de aquisição mais rendimentos"],
         ["Custo amortizado — na DRE","Apenas os rendimentos"],
         ["Valor justo por meio de ORA — no BP","Valor justo, com a diferença lançada em AAP no PL"],
         ["Valor justo por meio do resultado — na DRE","Rendimentos mais o ajuste a valor justo"]]},

S18:{t:"sort", instr:"Pelo art. 183, I, da Lei 6.404/76, como se avalia cada aplicação?",
  buckets:["Valor justo (alínea a)","Valor de custo de aquisição ou de emissão (alínea b)"],
  items:[["Aplicações destinadas à negociação",0],["Aplicações disponíveis para venda",0],
         ["Aplicações mantidas até o vencimento",1],
         ["Demais aplicações e os direitos e títulos de crédito, ajustados ao valor provável de realização quando inferior",1]],
  why:"O caput fala das aplicações em instrumentos financeiros, inclusive derivativos, no AC ou no RLP."},

S19:{t:"match", instr:"Correlacione a classificação antiga (Lei 6.404/76) à nova (CPC 48)",
  pairs:[["Disponíveis para venda","Mensurados a valor justo por meio de outros resultados abrangentes"],
         ["Destinados a negociação","Mensurados a valor justo por meio do resultado"],
         ["Mantidos até o vencimento","Mensurados ao custo amortizado"]]},

S20:{t:"sort", instr:"Classifique cada característica da participação societária",
  buckets:["Investimento temporário","Investimento permanente"],
  items:[["Adquire ações com a intenção de vender após algum tempo, para lucrar com a valorização",0],
         ["Classificado no Ativo Circulante ou no ANC Realizável a Longo Prazo",0],
         ["Regido pelo CPC 48 (Instrumentos Financeiros)",0],
         ["Ações adquiridas com a intenção de permanência",1],
         ["Classificado no Ativo Não Circulante Investimento",1],
         ["Regido pelo CPC 18 (Investimentos em Coligadas e Controladas)",1]],
  why:"Sem intenção de permanência não se aplica o método de equivalência patrimonial: é mero instrumento financeiro."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Avançada 09","https://www.tecconcursos.com.br/s/Q30EDC","Q30EDC"],
  ["Caderno FCC — Contabilidade Avançada 09","https://www.tecconcursos.com.br/s/Q30EDd","Q30EDd"],
  ["Caderno FGV — Contabilidade Avançada 09","https://www.tecconcursos.com.br/s/Q30EDq","Q30EDq"],
  ["Caderno VUNESP — Contabilidade Avançada 09","https://www.tecconcursos.com.br/s/Q30EEF","Q30EEF"]
];
var TECNOTA = "Três fronteiras respondem por quase todo o erro neste assunto. A primeira é o destino do ajuste a valor justo: no valor justo por meio do resultado ele vai ao resultado; no valor justo por meio de ORA vai ao Ajuste de Avaliação Patrimonial, no PL, com efeito na DRA — e o custo amortizado simplesmente não sofre ajuste. A segunda são as três contas da Companhia RAD, que a banca copia: 800.000 a 2% ao mês dão DRE de 16.000 e BP de 816.000 (nunca os 820.000 do valor justo); 600.000 a 1% dão DRE de 6.000 e BP de 604.000, com AAP negativo de 2.000; 1.000.000 a 1,5% dão DRE de 18.000 (15.000 de juros mais 3.000 de ajuste) e BP de 1.018.000. A terceira é a mensuração inicial: valor justo mais ou menos os custos de transação, que porém não entram no instrumento mensurado a valor justo por meio do resultado, e a exceção das contas a receber de clientes, pelo preço de transação. Guarde ainda que a classificação do item 4.1.1 soma modelo de negócios E fluxos de caixa contratuais, e que o valor justo por meio do resultado é residual.";

var UNITS = [
  {n:1, title:"CPC 48, classificação e objetivos", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Conceito, objetivo e as três mensurações", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · conceito e objetivo do CPC 48", xp:25, data:["S1","S2","T0","T1","T2","T3"]},
    {id:"K3", type:"drill",  title:"Praticar · classificação e custo amortizado", xp:25, data:["S3","S4","T4","T5","T6","T7","T8","T9"]},
    {id:"K4", type:"drill",  title:"Praticar · ORA, resultado e objetivos", xp:25, data:["S5","S6","T10","T11","T12","T13","T14","T15"]},
    {id:"K5", type:"flash",  title:"Flashcards · CPC 48 e classificação", xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11]}
  ]},
  {n:2, title:"Ajuste a valor justo e mensuração", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Onde vai o ajuste, inicial e subsequente", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · destino do ajuste a valor justo", xp:25, data:["S7","S8","T16","T17","T18","T19","T20","T21"]},
    {id:"K8", type:"drill",  title:"Praticar · mensuração inicial", xp:25, data:["S9","S10","T22","T23","T24","T25"]},
    {id:"K9", type:"drill",  title:"Praticar · ressalvas e mensuração subsequente", xp:25, data:["S11","S12","T26","T27","T28","T29","T30"]},
    {id:"K10",type:"flash",  title:"Flashcards · ajuste, inicial e subsequente", xp:15, data:[12,13,14,15,16,17,18,19,20,21,22]}
  ]},
  {n:3, title:"As três contas, a Lei 6.404/76 e as participações", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Companhia RAD, art. 183 e participações societárias", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · custo amortizado na prática", xp:25, data:["S13","S14","T31","T32","T33","T34","T35","T36"]},
    {id:"K13",type:"drill",  title:"Praticar · ORA e valor justo por resultado", xp:25, data:["S15","S16","S17","T37","T38","T39","T40","T41","T42","T43"]},
    {id:"K14",type:"drill",  title:"Praticar · Lei 6.404/76 e participações", xp:25, data:["S18","S19","S20","T44","T45","T46","T47","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · exemplos, Lei 6.404 e CPC 18", xp:15, data:[23,24,25,26,27,28,29,30,31,32,33,34,35,36]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                  xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                 xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 09 de Contabilidade Avançada (Radegondes) ---------- */
var COM={
0:"<p>Certo pela literalidade do resumo: os instrumentos financeiros <b>“são ativos financeiros, passivos financeiros ou acordos contratualmente estabelecidos entre as partes, que criam direitos e obrigações financeiras para uma empresa”</b>.</p><p>Guarde os três núcleos: <b>ativo financeiro</b>, <b>passivo financeiro</b> e <b>acordo contratual</b> — e a consequência, que é criar <b>direitos e obrigações financeiras</b>.</p><p class='fb-fonte'>Resumo 09 · <i>CPC 48 — O que são instrumentos financeiros</i></p>",
1:"<p>Certo — é o <b>EXEMPLO</b> do próprio resumo: <b>“quando uma empresa emite ações, ela está vendendo uma parte da propriedade da empresa para os investidores”</b>.</p><p>O resumo completa: os investidores tornam-se acionistas e têm direito a <b>receber dividendos</b> (receber fluxos de caixa) ou a <b>vender as ações no futuro</b>, sendo elas negociadas em bolsas de valores.</p><p class='fb-fonte'>Resumo 09 · <i>CPC 48 — O que são instrumentos financeiros</i></p>",
2:"<p>Certo. É a primeira linha do <b>item 01</b> transcrito no resumo: o objetivo é <b>estabelecer princípios</b> para os <b>relatórios financeiros de ativos financeiros e passivos financeiros</b>.</p><p>O esquema do resumo desmembra o resto: informações <b>pertinentes e úteis</b> aos usuários das demonstrações contábeis, para a avaliação dos <b>valores, época e incerteza dos fluxos de caixa futuros</b> da entidade.</p><p class='fb-fonte'>Resumo 09 · <i>Objetivo do CPC 48</i></p>",
3:"<p>Errado por <b>uma palavra</b>: o item 01 fala dos fluxos de caixa <b>FUTUROS</b> da entidade, não dos passados.</p><p>Faz sentido pelo próprio desenho do pronunciamento: o que se quer é permitir ao usuário avaliar <b>valores, época e incerteza</b> — e incerteza só existe olhando para frente.</p><p class='fb-fonte'>Resumo 09 · <i>Objetivo do CPC 48</i></p>",
4:"<p>Certo pela letra do <b>item 4.1.1</b>: a entidade deve classificar ativos financeiros como subsequentemente mensurados <b>ao custo amortizado</b>, <b>ao valor justo por meio de outros resultados abrangentes</b> ou <b>ao valor justo por meio do resultado</b>.</p><p>São essas três, e só essas três — o mesmo trio reaparece no <b>item 5.2.1</b>, da mensuração subsequente.</p><p class='fb-fonte'>Resumo 09 · <i>Classificação — item 4.1.1</i></p>",
5:"<p>Errado na conjunção. O item 4.1.1 classifica <b>“com base TANTO (a) no modelo de negócios da entidade para a gestão dos ativos financeiros; QUANTO (b) nas características de fluxo de caixa contratual do ativo financeiro”</b>.</p><p>No esquema do resumo, os dois critérios estão unidos por um <b>E</b> bem visível. São <b>cumulativos</b>, nunca alternativos — é a troca que a banca mais repete neste tópico.</p><p class='fb-fonte'>Resumo 09 · <i>Classificação — item 4.1.1</i></p>",
6:"<p>Certo. O <b>item 4.1.2</b> começa exatamente assim: o ativo financeiro deve ser mensurado ao custo amortizado <b>“se AMBAS as seguintes condições forem atendidas”</b>.</p><p>O comentário do resumo repete as duas com o visto: <b>objetivo de manter ativos financeiros com o fim de receber fluxos de caixa contratuais</b>; <b>e</b> termos contratuais que dão origem, em datas especificadas, a fluxos de caixa.</p><p class='fb-fonte'>Resumo 09 · <i>Mensuração ao custo amortizado</i></p>",
7:"<p>Certo — é a condição <b>(a)</b> do item 4.1.2: o ativo <b>“for mantido dentro de modelo de negócios cujo objetivo seja manter ativos financeiros com o fim de receber fluxos de caixa contratuais”</b>.</p><p>No quadro dos objetivos, o resumo resume isso em uma linha: no custo amortizado, o objetivo é <b>manter o ativo financeiro para receber fluxos de caixa</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Mensuração ao custo amortizado</i></p>",
8:"<p>Certo — é a condição <b>(b)</b> do item 4.1.2, literal: os termos contratuais devem dar origem, <b>“em datas especificadas, a fluxos de caixa que constituam, exclusivamente, pagamentos de principal e juros sobre o valor do principal em aberto”</b>.</p><p>Repare no <b>exclusivamente</b>: é ele que segura a condição.</p><p class='fb-fonte'>Resumo 09 · <i>Mensuração ao custo amortizado</i></p>",
9:"<p>Errado. O item 4.1.2 exige <b>AMBAS</b> as condições — a do <b>modelo de negócios</b> e a dos <b>termos contratuais</b>. Dispensar uma delas derruba a classificação.</p><p>É o mesmo raciocínio do item 4.1.1, que soma <b>modelo de negócios E características do fluxo de caixa contratual</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Mensuração ao custo amortizado</i></p>",
10:"<p>Errado no destino. Esse é o <b>EXEMPLO</b> do resumo e ele conclui pelo <b>custo amortizado</b>: <b>“a Companhia RAD deverá mensurar o instrumento financeiro pelo custo amortizado”</b>.</p><p>As duas condições estão lá: os títulos remuneram <b>juros semestrais de 6%</b> (fluxos de caixa em datas especificadas) e a Cia. RAD <b>tem por objetivo manter o título para receber esses juros</b>. Falta o elemento da venda, que levaria a outra classificação.</p><p class='fb-fonte'>Resumo 09 · <i>Mensuração ao custo amortizado — exemplo</i></p>",
11:"<p>Certo — condição <b>(a)</b> do <b>item 4.1.2A</b>: o ativo deve ser mantido em modelo de negócios <b>“cujo objetivo seja atingido tanto pelo recebimento de fluxos de caixa contratuais quanto pela venda de ativos financeiros”</b>.</p><p>O comentário do resumo traduz: <b>objetivo de receber fluxos de caixa contratuais OU de vender o ativo financeiro</b>. É esse “ou vender” que separa o ORA do custo amortizado.</p><p class='fb-fonte'>Resumo 09 · <i>Mensuração ao valor justo por meio de outros resultados abrangentes</i></p>",
12:"<p>Certo — é o <b>EXEMPLO</b> do resumo, com esta mesma descrição: a Cia. RAD <b>“vende este tipo de título sempre que há valorização em seu valor justo, de forma que o investimento seja realizado (transformado em dinheiro no caixa) e ela reinvista em outros ativos financeiros”</b>.</p><p>Conclusão dele: mensuração <b>ao valor justo por meio de outros resultados abrangentes</b>. Compare com o exemplo anterior: mesmos R$ 100.000 e mesmos juros de 6% ao semestre; só o <b>modelo de negócios</b> mudou.</p><p class='fb-fonte'>Resumo 09 · <i>Mensuração ao valor justo por meio de ORA — exemplo</i></p>",
13:"<p>Certo. O <b>item 4.1.4</b> manda mensurar ao valor justo por meio do resultado <b>“a menos que seja mensurado ao custo amortizado de acordo com o item 4.1.2 ou ao valor justo por meio de outros resultados abrangentes de acordo com o item 4.1.2A”</b>.</p><p>O comentário do resumo dá o nome: <b>“a classificação de um Instrumento Financeiro como mensurado a Valor Justo por meio do resultado é RESIDUAL”</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Mensuração ao valor justo por meio do resultado</i></p>",
14:"<p>Certo, e o resumo indica a fonte: <b>“o objetivo dos instrumentos financeiros mensurados ao valor justo por meio do resultado é a geração de caixa por meio da venda destes ativos (item B4.1.5)”</b>.</p><p>No quadro dos objetivos é a terceira coluna: <b>geração de caixa por meio da venda do ativo financeiro</b> — aqui a venda é o fim, não uma alternativa.</p><p class='fb-fonte'>Resumo 09 · <i>Objetivos da mensuração dos instrumentos financeiros</i></p>",
15:"<p>Errado — a assertiva troca as colunas do quadro. <b>Receber os fluxos de caixa contratuais OU vender o ativo financeiro</b> são os objetivos do <b>valor justo por meio de outros resultados abrangentes</b>.</p><p>No <b>custo amortizado</b> o objetivo é um só: <b>manter o ativo financeiro para receber fluxos de caixa</b>. Se entra a venda no objetivo, saiu do custo amortizado.</p><p class='fb-fonte'>Resumo 09 · <i>Objetivos da mensuração dos instrumentos financeiros</i></p>",
16:"<p>Certo pelo quadro <b>ATENÇÃO!</b> do resumo: <b>“existem duas espécies de instrumentos financeiros que são ajustados a valor justo: os mensurados a Valor Justo por meio de Resultado; e os mensurados a Valor Justo por meio de Outros Resultados Abrangentes (ORA)”</b>.</p><p>Consequência prática: o <b>custo amortizado</b> fica fora — ele <b>não</b> é ajustado a valor justo.</p><p class='fb-fonte'>Resumo 09 · <i>Objetivos da mensuração — ATENÇÃO!</i></p>",
17:"<p>Certo: <b>“os Instrumentos financeiros mensurados ao Valor Justo por meio de Resultado terão eventuais ajustes a valor justo apropriados ao resultado da entidade”</b>.</p><p>O comentário do item 4.1.4 diz a mesma coisa por outras palavras: o eventual ajuste a valor justo <b>é apropriado diretamente ao resultado</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Objetivos da mensuração — ATENÇÃO!</i></p>",
18:"<p>Errado no destino do ajuste. No ORA, diz o resumo, os ajustes são <b>“apropriados no Patrimônio Líquido, na conta Ajuste de Avaliação Patrimonial”</b>, e seus efeitos são evidenciados na <b>Demonstração dos Resultados Abrangentes (DRA)</b>.</p><p>O par para memorizar: <b>valor justo por RESULTADO → resultado</b>; <b>valor justo por ORA → AAP no PL e DRA</b>. A banca vive invertendo essa dupla.</p><p class='fb-fonte'>Resumo 09 · <i>Objetivos da mensuração — ATENÇÃO!</i></p>",
19:"<p>Certo, e nas três partes: <b>conta Ajuste de Avaliação Patrimonial</b>, <b>no Patrimônio Líquido</b>, com efeitos evidenciados na <b>Demonstração dos Resultados Abrangentes (DRA)</b> — é a redação do quadro ATENÇÃO!.</p><p>No exemplo numérico do resumo isso aparece como um <b>AAP negativo de R$ 2.000</b>, que não passa pela DRE.</p><p class='fb-fonte'>Resumo 09 · <i>Objetivos da mensuração — ATENÇÃO!</i></p>",
20:"<p>Certo — é o <b>EXEMPLO 01</b> do quadro ATENÇÃO!: classificado o ativo como mensurado ao valor justo por meio de resultado, <b>“caso se verifique, posteriormente, que o valor contábil do ativo é inferior ao seu valor de mercado (valor justo), a empresa deverá reconhecer um ganho em conta de resultado”</b>.</p><p>Valor contábil abaixo do valor justo significa ativo subavaliado: o ajuste é positivo e, nesta classificação, vai ao <b>resultado</b>.</p><p class='fb-fonte'>Resumo 09 · <i>ATENÇÃO! — exemplo 01</i></p>",
21:"<p>Certo — é o <b>EXEMPLO 02</b> do resumo, com a mesma LTN: a companhia deve, após o reconhecimento inicial, <b>“avaliar a LTN pelo seu valor justo, reconhecendo o efeito contábil dessa avaliação na conta ajustes de avaliação patrimonial, do patrimônio líquido”</b>.</p><p>Compare com o exemplo 01: mesma mecânica de ajuste, destino diferente, porque ali a classificação era <b>por meio do resultado</b> e aqui é <b>por meio de ORA</b>.</p><p class='fb-fonte'>Resumo 09 · <i>ATENÇÃO! — exemplo 02</i></p>",
22:"<p>Certo pela letra do <b>item 5.1.1</b>: no reconhecimento inicial a entidade mensura o ativo ou o passivo financeiro <b>“ao seu valor justo, mais ou menos (…) os custos de transação que sejam diretamente atribuíveis à aquisição ou à emissão”</b>.</p><p>O esquema do resumo fixa a fórmula: <b>Valor Justo + ou – Custos de Transação</b>, com a ressalva do instrumento a valor justo por meio do resultado e a exceção das contas a receber de clientes.</p><p class='fb-fonte'>Resumo 09 · <i>Mensuração inicial</i></p>",
23:"<p>Errado. A <b>OBS.</b> do resumo é expressa: <b>“os custos de transação NÃO são contabilizados no reconhecimento inicial do instrumento financeiro mensurado a valor justo por meio do resultado (item 5.1.1)”</b>.</p><p>Repare que o próprio item 5.1.1 já traz essa exclusão quando fala do ativo ou passivo <b>“que não seja ao valor justo por meio do resultado”</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Mensuração inicial — OBS.</i></p>",
24:"<p>Certo. É a exceção do <b>item 5.1.3</b>, tratada no resumo: a entidade deve mensurar contas a receber de clientes <b>“ao seu preço de transação se as contas a receber de clientes não contiverem componente de financiamento significativo de acordo com o CPC 47”</b>.</p><p>O resumo lembra ainda a alternativa: <b>quando a entidade aplicar o expediente prático do item 63 do CPC 47</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Mensuração inicial — contas a receber (item 5.1.3)</i></p>",
25:"<p>Errado por trocar a conta de destino. O quadro <b>ATENÇÃO!</b> do resumo é claro: no reconhecimento inicial, <b>“os ganhos ou perdas decorrentes do confronto entre o valor justo do instrumento e o preço da transação deve ser evidenciado em contas de resultado (CPC 48: item B5.1.2A)”</b>.</p><p>Não confunda com o ajuste <b>subsequente</b> dos instrumentos a valor justo por meio de ORA, que aí sim vai ao <b>AAP</b>, no PL.</p><p class='fb-fonte'>Resumo 09 · <i>Mensuração inicial — ATENÇÃO! (item B5.1.2A)</i></p>",
26:"<p>Certo — segundo item do quadro <b>ATENÇÃO!</b>: <b>“caso o valor contábil seja uma aproximação razoável do valor justo, como, por exemplo, contas a receber de clientes e a pagar a fornecedores de curto prazo, não se exigirá das entidades a divulgação do valor justo (CPC 40: item 29)”</b>.</p><p>Os dois exemplos da regra são os do próprio resumo, e ambos são de <b>curto prazo</b> — é o que torna o valor contábil uma aproximação aceitável.</p><p class='fb-fonte'>Resumo 09 · <i>Mensuração inicial — ATENÇÃO! (CPC 40, item 29)</i></p>",
27:"<p>Certo pela letra do <b>item 5.2.1</b>: após o reconhecimento inicial, a entidade deve mensurar o ativo financeiro, de acordo com os itens 4.1.1 a 4.1.5, <b>(a)</b> ao custo amortizado; <b>(b)</b> ao valor justo por meio de outros resultados abrangentes; ou <b>(c)</b> ao valor justo por meio do resultado.</p><p>É o mesmo trio do item 4.1.1: a classificação define, desde o início, como será a mensuração subsequente.</p><p class='fb-fonte'>Resumo 09 · <i>Mensuração subsequente de ativo financeiro</i></p>",
28:"<p>Errado por <b>extensão indevida</b>. O preço de transação é a <b>exceção</b> do item 5.1.3, reservada às <b>contas a receber de clientes</b> conforme definidas no CPC 47.</p><p>A regra geral do item 5.1.1 continua sendo o <b>valor justo mais ou menos os custos de transação</b> — com a ressalva de que, no instrumento a valor justo por meio do resultado, os custos de transação não entram.</p><p class='fb-fonte'>Resumo 09 · <i>Mensuração inicial — contas a receber (item 5.1.3)</i></p>",
29:"<p>Certo. É o comentário do resumo ao item 4.1.4: <b>“dizer que o instrumento financeiro está mensurado a valor justo por meio do resultado significa que eventual ajuste a valor justo deve ser apropriado diretamente ao resultado”</b>.</p><p>No exemplo numérico da Cia. RAD isso vale R$ 3.000 de ajuste que entram na DRE ao lado dos R$ 15.000 de juros.</p><p class='fb-fonte'>Resumo 09 · <i>Mensuração ao valor justo por meio do resultado</i></p>",
30:"<p>Errado. O quadro das características é taxativo: o instrumento mensurado ao custo amortizado <b>“não é ajustado a Valor Justo”</b>.</p><p>No exemplo do resumo, o título de R$ 800.000 tinha valor justo de <b>R$ 820.000</b> em 31/12/2023 e nem assim foi atualizado: o saldo no BP ficou em <b>R$ 816.000</b>, que é o custo de aquisição mais os rendimentos.</p><p class='fb-fonte'>Resumo 09 · <i>Características do custo amortizado</i></p>",
31:"<p>Certo — é o <b>1º PASSO</b> do exemplo: <b>“Reconhecimento da Receita Financeira de Juros = R$ 800.000 × 2% = R$ 16.000”</b>.</p><p>A aplicação foi em <b>01/12/2023</b> e a apuração em <b>31/12/2023</b>: um mês de juros a 2%.</p><p class='fb-fonte'>Resumo 09 · <i>Características do custo amortizado — exemplo</i></p>",
32:"<p>Certo, é o lançamento do resumo: <b>D – Títulos Mens. ao Custo Amortizado R$ 16.000 (Ativo)</b> · <b>C – Receita Financeira R$ 16.000 (Resultado)</b>.</p><p>Os juros aumentam o próprio título no ativo e passam pelo resultado como <b>receita financeira</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Características do custo amortizado — exemplo</i></p>",
33:"<p>Errado — é exatamente a pegadinha do exemplo. A conclusão do resumo: <b>“o título não foi atualizado no Balanço Patrimonial (BP) para R$ 820.000, pois Instrumentos Financeiros Mensurados ao Custo Amortizado não sofrem Ajuste a Valor Justo. Logo, seu saldo no BP será de R$ 816.000”</b>.</p><p>O valor justo de R$ 820.000 aparece na tabela só para testar se você vai usá-lo. No custo amortizado, ele não é usado.</p><p class='fb-fonte'>Resumo 09 · <i>Características do custo amortizado — conclusão</i></p>",
34:"<p>Certo, nos dois números da conclusão do resumo: a operação <b>“impactou a DRE da Companhia RAD em R$ 16.000”</b> e o saldo no BP <b>“será de R$ 816.000”</b>.</p><p>A conta do BP: 800.000 de custo de aquisição + 16.000 de rendimentos. É a linha do quadro final — <b>custo de aquisição + rendimentos</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Características do custo amortizado — conclusão</i></p>",
35:"<p>Certo nas três características do quadro do resumo: <b>não é ajustado a Valor Justo</b>; <b>“os juros são reconhecidos no resgate do título e contabilizados como Receita Financeira”</b>; e <b>“o valor do principal se mantém pelo valor de aquisição ajustado às perdas prováveis, quando for o caso”</b>.</p><p>Contraste com as outras duas mensurações, em que o resumo diz que os juros são reconhecidos <b>com o rendimento do título (mensalmente)</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Características do custo amortizado — quadro</i></p>",
36:"<p>Certo — <b>1º PASSO</b> do exemplo do ORA: <b>“Reconhecimento da Receita Financeira de Juros = R$ 600.000 × 1% = R$ 6.000”</b>, com <b>D – Títulos Mens. a Valor Justo por meio de ORA</b> e <b>C – Receita Financeira</b>.</p><p>Aqui os juros são reconhecidos <b>com o rendimento do título, mensalmente</b>, como manda o quadro das características do ORA.</p><p class='fb-fonte'>Resumo 09 · <i>Características do valor justo por meio de ORA — exemplo</i></p>",
37:"<p>Errado. O resumo explica passo a passo: <b>“note que o valor atualizado dos títulos deveria ser de R$ 606.000, porém Instrumentos Financeiros Mensurados a Valor Justo por meio de ORA sofrem Ajuste a Valor Justo (na tabela, o valor justo está em R$ 604.000)”</b>.</p><p>Logo, o saldo no BP é de <b>R$ 604.000</b> — o valor justo da tabela — com um <b>Ajuste de Avaliação Patrimonial negativo de R$ 2.000</b>. Os R$ 606.000 são justamente o número que a banca oferece como isca.</p><p class='fb-fonte'>Resumo 09 · <i>Características do valor justo por meio de ORA — conclusão</i></p>",
38:"<p>Certo, é o lançamento do resumo: <b>D – Ajuste de Avaliação Patrimonial R$ 2.000 (PL)</b> · <b>C – Títulos Mens. a Valor Justo por meio de ORA R$ 2.000 (Ativo)</b>.</p><p>O ajuste é <b>negativo</b> porque o valor atualizado (606.000) está acima do valor justo (604.000). Ele arruma o ativo sem tocar na DRE.</p><p class='fb-fonte'>Resumo 09 · <i>Características do valor justo por meio de ORA — explicando melhor</i></p>",
39:"<p>Certo: <b>“esta operação impactou a Demonstração do Resultado do Exercício (DRE) da Companhia RAD em R$ 6.000 (juros), mas o saldo no BP será de 604.000”</b>.</p><p>Só os <b>juros</b> passam pelo resultado. O ajuste a valor justo de R$ 2.000 fica no <b>PL</b>, em AAP, com efeito na DRA. É a linha do quadro final: no ORA, a DRE recebe apenas os <b>rendimentos</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Características do valor justo por meio de ORA — conclusão</i></p>",
40:"<p>Certo, é a conclusão literal do resumo: a operação <b>“impactou a DRE da Companhia RAD em R$ 18.000 (15.000 dos juros + 3.000 de Ajuste a Valor Justo no Resultado)”</b>.</p><p>Os juros saem de 1.000.000 × 1,5% = <b>15.000</b>; o valor atualizado seria 1.015.000 e o valor justo da tabela é 1.018.000, daí o <b>ajuste positivo de 3.000</b> — que, nesta classificação, vai ao <b>resultado</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Características do valor justo por meio do resultado — conclusão</i></p>",
41:"<p>Errado — R$ 1.015.000 é apenas o <b>valor atualizado</b> pelos juros. O resumo conclui: <b>“o título foi reconhecido no Balanço Patrimonial (BP) por R$ 1.018.000, pois Instrumentos Financeiros Mensurados a Valor Justo por meio do resultado sofrem Ajuste a Valor Justo”</b>.</p><p>Repare no padrão das duas espécies ajustadas a valor justo: o saldo no BP é sempre o <b>valor justo da tabela</b>. O que muda é onde entra a diferença.</p><p class='fb-fonte'>Resumo 09 · <i>Características do valor justo por meio do resultado — conclusão</i></p>",
42:"<p>Certo, é o lançamento do resumo: <b>D – Títulos Mens. a Valor Justo por meio do Resultado R$ 3.000 (Ativo)</b> · <b>C – Receita Financeira R$ 3.000 (Resultado)</b>.</p><p>Compare com o exemplo do ORA: lá a contrapartida do ajuste foi <b>Ajuste de Avaliação Patrimonial</b>, no PL; aqui é <b>Receita Financeira</b>, no resultado.</p><p class='fb-fonte'>Resumo 09 · <i>Características do valor justo por meio do resultado — explicando melhor</i></p>",
43:"<p>Certo pelo quadro final do resumo: no <b>Custo Amortizado</b>, o valor registrado no BP é <b>“Custo de Aquisição + Rendimentos”</b> e o valor registrado na DRE é <b>“Rendimentos”</b>.</p><p>É o exemplo dos R$ 800.000 em forma de regra: BP de 816.000 (800.000 + 16.000) e DRE de 16.000.</p><p class='fb-fonte'>Resumo 09 · <i>Quadro — instrumentos financeiros: BP × DRE</i></p>",
44:"<p>Errado — a assertiva sobe uma linha no quadro. <b>Rendimentos + Ajuste a Valor Justo</b> na DRE é a linha do <b>Valor Justo por meio do Resultado</b>.</p><p>No <b>Valor Justo por meio de ORA</b> o quadro registra <b>valor justo</b> no BP e <b>apenas rendimentos</b> na DRE — porque o ajuste vai ao AAP, no PL. Confirma o exemplo: DRE de 6.000 e BP de 604.000.</p><p class='fb-fonte'>Resumo 09 · <i>Quadro — instrumentos financeiros: BP × DRE</i></p>",
45:"<p>Certo pela letra do <b>art. 183, I, “a”</b>, transcrito no resumo: as aplicações em instrumentos financeiros, <b>inclusive derivativos</b>, e em direitos e títulos de créditos classificados no <b>ativo circulante ou no realizável a longo prazo</b> são avaliadas <b>“pelo seu valor justo, quando se tratar de aplicações destinadas à negociação ou disponíveis para venda”</b>.</p><p>O esquema do resumo opõe essa hipótese à outra: <b>quando mantido até o vencimento</b>, o critério é o <b>valor de custo de aquisição ou valor de emissão</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Instrumentos financeiros na Lei nº 6.404/76</i></p>",
46:"<p>Errado, as classificações estão cruzadas. No quadro de equivalência do resumo, <b>disponíveis para venda</b> passam a <b>mensurados a valor justo por meio de OUTROS RESULTADOS ABRANGENTES (ORA)</b>.</p><p>Quem virou <b>valor justo por meio do resultado</b> foram os <b>destinados a negociação</b> — e os <b>mantidos até o vencimento</b> viraram <b>custo amortizado</b>. Decore as três linhas na ordem do quadro.</p><p class='fb-fonte'>Resumo 09 · <i>Classificação antiga × classificação nova</i></p>",
47:"<p>Certo pela letra do <b>art. 183, I, “b”</b>: <b>“pelo valor de custo de aquisição ou valor de emissão, atualizado conforme disposições legais ou contratuais, ajustado ao valor provável de realização, quando este for inferior, no caso das demais aplicações e os direitos e títulos de crédito”</b>.</p><p>Guarde o gatilho do ajuste: só se o <b>valor provável de realização for INFERIOR</b>. Não há reavaliação para cima nesta alínea.</p><p class='fb-fonte'>Resumo 09 · <i>Instrumentos financeiros na Lei nº 6.404/76</i></p>",
48:"<p>Certo — terceira linha do quadro de equivalência do resumo: <b>mantidos até o vencimento</b> → <b>mensurados ao custo amortizado</b>.</p><p>A lógica casa com o item 4.1.2: quem fica com o título até o fim quer <b>receber os fluxos de caixa contratuais</b>, e por isso não ajusta o título a valor justo.</p><p class='fb-fonte'>Resumo 09 · <i>Classificação antiga × classificação nova</i></p>",
49:"<p>Certo. O resumo define os investimentos em participações societárias como <b>“aquisições de uma parte do capital de uma empresa, por meio da compra de ações ou quotas”</b>, visando retorno por <b>dividendos, valorização das ações ou participação nos lucros</b> da investida, e conclui: <b>“essas participações societárias podem ser classificadas como: (1) Temporárias; ou (2) Permanentes”</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Investimentos em participações societárias</i></p>",
50:"<p>Errado nos dois pontos. No esquema do resumo, o <b>investimento temporário</b> — em que <b>“a empresa adquire ações com a intenção de vender após algum tempo, pois o intuito é lucrar com a valorização delas”</b> — é classificado no <b>Ativo Circulante</b> ou no <b>ANC Realizável a Longo Prazo</b> e é regido pelo <b>CPC 48</b>.</p><p>O <b>ANC Investimento</b> e o <b>CPC 18</b> são do investimento <b>PERMANENTE</b>, aquele adquirido com <b>intenção de permanência</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Investimentos em participações societárias</i></p>",
51:"<p>Certo pelo quadro <b>ATENÇÃO!</b> do resumo: <b>“se o investimento de uma determinada empresa em outra não tem intenção de permanência, então sobre esse tal investimento não será aplicado o Método de Equivalência Patrimonial (trata-se, pois, de mero instrumento financeiro)”</b>.</p><p>A chave é a <b>intenção de permanência</b>: sem ela, o caso é de <b>CPC 48</b>, e não de CPC 18.</p><p class='fb-fonte'>Resumo 09 · <i>Investimentos em participações societárias — ATENÇÃO!</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"09", nome:"CPC 48 — Instrumentos Financeiros", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
