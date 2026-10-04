/* Contabilidade Avançada — Módulo 02: CPC 12 — Ajuste a Valor Presente (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cavan02 = (function(){
"use strict";

var CARDS = [
  ["O que é o ajuste a valor presente?","É <b>trazer a valores atuais (presente) algo que seria recebido ou pago no futuro</b>."],
  ["Qual a fórmula de valor presente usada no resumo?","<b>Valor Presente = Valor Futuro ÷ (1 + i)<sup>t</sup></b>, em que <b>i</b> é a taxa de desconto e <b>t</b> o prazo. Com duas parcelas, soma-se <b>1ª parcela ÷ (1+i)<sup>t</sup> + 2ª parcela ÷ (1+i)<sup>t</sup></b>."],
  ["Venda de estoque por R$ 100.000 em duas parcelas iguais de R$ 50.000 (ao final de 2 e de 3 anos), desconto composto de 10% ao ano. Qual o valor presente?","<b>50.000/(1,10)<sup>2</sup> + 50.000/(1,10)<sup>3</sup> = 41.322 + 37.565 = R$ 78.887</b>."],
  ["Nesse mesmo exemplo, qual é o ajuste a valor presente?","<b>AVP = Receita Bruta de Vendas – Valor Presente</b> → <b>100.000 – 78.887 = R$ 21.113</b>."],
  ["Como o resumo lança essa venda?","<b>D</b> Clientes (Ativo) R$ 100.000 · <b>C</b> Ajuste a Valor Presente de Clientes (<b>retificadora do ativo</b>) R$ 21.113 · <b>C</b> Receita Líquida com Vendas (DRE) R$ 78.887."],
  ["Onde o AVP aparece na DRE?","Como <b>dedução da receita bruta</b> — o valor presente é que vira <b>Receita Líquida de Vendas</b>."],
  ["Qual o objetivo do CPC 12 (item 01)?","<b>Estabelecer os requisitos básicos a serem observados quando da apuração do ajuste a valor presente de elementos do ativo e do passivo</b> quando da elaboração de demonstrações contábeis."],
  ["Item 04 — reconhecimento × mensuração","<b>Reconhecimento</b> = decisão de <b>QUANDO registrar</b>. <b>Mensuração</b> = decisão de <b>POR QUANTO registrar</b>. O CPC 12 trata essencialmente de <b>mensuração</b>, não alcançando com detalhes o reconhecimento."],
  ["Item 05 — quando se aplica a mensuração contábil a valor presente?","No <b>reconhecimento inicial</b> de ativos e passivos. Só em <b>situações excepcionais</b> — como a <b>renegociação de dívida</b> em que novos termos são estabelecidos (ex.: dívida de 5 anos a 10% a.a. passa a 10 anos a 8% a.a.) — o AVP é aplicado como <b>nova medição</b>, situação <b>rara</b> e sujeita a julgamento."],
  ["Item 06 — valor presente e valor justo são sinônimos?","<b>Não.</b> A aplicação do conceito de AVP <b>nem sempre equipara</b> o ativo ou o passivo ao seu valor justo. Ainda assim, <b>em algumas circunstâncias podem coincidir</b>."],
  ["No exemplo do veículo financiado a cliente especial com taxa fora de mercado, qual valor prevalece?","<b>Prevalece contabilmente o valor calculado a valor presente</b>, inferior ao valor justo, por representar melhor o <b>efetivo custo de aquisição</b>. O vendedor reconhece a contrapartida do AVP do recebível como <b>redução da receita</b>."],
  ["Quadro — as definições de valor presente e valor justo","<b>Valor presente:</b> estimativa do <b>valor corrente de um fluxo de caixa futuro</b>, no curso normal das operações da entidade. <b>Valor justo:</b> valor pelo qual um ativo pode ser negociado, ou um passivo liquidado, entre <b>partes interessadas, conhecedoras do negócio e independentes entre si</b>, sem fatores de pressão ou transação compulsória."],
  ["Quadro — o que muda com o tempo, o VP ou o VJ?","O <b>valor presente</b> tem relação com a <b>taxa de juros do contrato</b> e <b>não sofre alteração</b>. O <b>valor justo</b> demonstra o <b>valor de mercado</b> (em regra) e <b>pode sofrer alteração</b> com o tempo, em decorrência das condições do mercado."],
  ["Cia. Alfa: venda a prazo de R$ 10.000 em parcela única para 3 anos (à vista seria R$ 7.513, taxa da transação 10%). Qual o valor justo ao final do 1º ano, com taxa de mercado de 12%?","Faltam <b>2 anos</b>: <b>10.000/(1,12)<sup>2</sup> = 10.000/1,2544 = R$ 7.971,93</b>. Se a questão quisesse o <b>valor presente</b>, usaria a taxa da transação (10%) e a resposta seria <b>R$ 8.264</b>."],
  ["Questão-exemplo do lucro bruto: 90% de um estoque de R$ 40.000 vendidos por R$ 70.000 em duas parcelas iguais (30 e 60 dias), taxa de 3% ao mês","<b>VP = 35.000/(1,03)<sup>1</sup> + 35.000/(1,03)<sup>2</sup> = 33.980,58 + 32.990,85 = R$ 66.971,43</b>. <b>AVP = 70.000 – 66.971,43 = R$ 3.028,56</b>. <b>CMV = 90% de 40.000 = R$ 36.000</b>. <b>Lucro Bruto = R$ 30.971,43</b>."],
  ["ATENÇÃO — passado o primeiro ano, qual taxa rege o reconhecimento da receita financeira?","A <b>taxa de juros da transação na data de sua origem</b>, <b>independentemente</b> da taxa de juros de mercado em períodos subsequentes."],

  ["Item 07 — qual é a questão mais relevante para aplicar o conceito de valor presente?","<b>Não</b> é a <b>enumeração minuciosa</b> de quais ativos ou passivos são abarcados pela norma, mas o <b>estabelecimento de diretrizes gerais e de metas a serem alcançadas</b>."],
  ["Item 07, diretriz (a)","Transação que dá origem a <b>ativo, passivo, receita, despesa ou outra mutação do patrimônio líquido</b> cuja contrapartida é um ativo ou passivo com <b>liquidação financeira em data diferente da data do reconhecimento</b> desses elementos."],
  ["Item 07, diretrizes (b) e (c)","<b>(b)</b> reconhecimento periódico de mudanças de <b>valor, utilidade ou substância</b> de ativos ou passivos similares emprega <b>método de alocação de descontos</b>. <b>(c)</b> <b>conjunto particular de fluxos de caixa estimados</b> claramente associado a um ativo ou a um passivo."],
  ["Item 09 — como se mensuram ativos e passivos monetários com juros embutidos?","Ativos e passivos monetários com juros <b>implícitos ou explícitos</b> embutidos devem ser mensurados pelo <b>valor presente no reconhecimento inicial</b>, por ser este o <b>valor de custo original dentro da filosofia de valor justo</b>. Uma vez ajustado o item não monetário, ele <b>não deve mais sofrer ajustes subsequentes</b> quanto aos juros embutidos."],
  ["O que é ativo monetário?","Qualquer ativo <b>mantido na forma de dinheiro ou facilmente conversível em dinheiro</b>: <b>dinheiro em caixa</b>, <b>depósitos bancários</b>, <b>aplicações financeiras de curto prazo</b>. <b>Devem</b> ser mensurados pelo valor presente no reconhecimento inicial."],
  ["O que é ativo não monetário?","Ativo <b>não prontamente conversível em dinheiro</b> ou de <b>valor monetário incerto</b>: <b>equipamentos</b>, <b>veículos</b>, <b>estoques</b>, <b>adiantamento em dinheiro</b>, <b>patentes</b>, <b>marcas registradas</b>, <b>direitos autorais</b>. <b>Nem todo</b> ativo não monetário está sujeito ao AVP."],
  ["Qual o exemplo de item não monetário que, pela sua natureza, não se ajusta a valor presente?","O <b>adiantamento em dinheiro para recebimento ou pagamento em bens e serviços</b> (item 09) — não há necessidade de considerar o tempo de espera até a aquisição do bem."],
  ["Item 10 — o que prevalece, a regra geral ou a específica?","Havendo <b>Pronunciamento específico do CPC</b> disciplinando o AVP de determinado ativo ou passivo, <b>ele deve ser observado</b>: a <b>regra específica sempre prevalece à regra geral</b>. Caso especial: <b>Imposto de Renda Diferido Ativo e Passivo</b>, que <b>não são passíveis de AVP</b>."],
  ["Os financiamentos do BNDES sofrem ajuste a valor presente?","<b>Não</b> estão sujeitos ao AVP os financiamentos do BNDES <b>contratados com taxas de juros diferentes das taxas praticadas pelo mercado em geral</b> para outras modalidades de empréstimos."],
  ["E o contrato de mútuo sem data de vencimento?","Muitos mútuos entre <b>partes relacionadas</b> não têm data prevista de vencimento, o que <b>impossibilita o cálculo do AVP</b>. No mútuo <b>on demand</b>, considera-se que o <b>vencimento é à vista, a critério do credor</b> — também sem AVP. <b>Mútuo</b> é o acordo formal de empréstimo de dinheiro ou bens, com devolução acrescida dos juros acordados em prazo determinado."],
  ["Os quatro itens que NÃO devem ser ajustados a valor presente","<b>1)</b> Adiantamento em dinheiro · <b>2)</b> Imposto de Renda Diferido Ativo ou Passivo · <b>3)</b> Financiamentos do BNDES contratados com taxas diferentes das praticadas pelo mercado · <b>4)</b> Contratos de mútuo sem data de vencimento."],
  ["Item 13 — risco e incerteza na taxa de desconto","As <b>incertezas inerentes</b> ao fluxo de caixa são <b>obrigatoriamente levadas em consideração</b> na mensuração, e o <b>“preço” que participantes do mercado cobram para assumir esses riscos</b> — o <b>prêmio pelo risco</b> — <b>deve ser igualmente avaliado</b>."],
  ["Em que momento o AVP deve ser calculado?","No <b>momento inicial da operação</b>, considerando os <b>fluxos de caixa</b> (valor, data e todos os termos e condições contratados) e a <b>taxa de desconto aplicável à transação na data de sua ocorrência</b>. Empréstimo de 100.000 para 2 anos a 10% a.a.: <b>100.000/1,21 = R$ 82.644,62</b>. Depois do registro inicial, aplica-se o <b>método da taxa efetiva de juros</b>, e a apropriação dos juros deve <b>restabelecer os R$ 100.000 até o vencimento</b> — o AVP <b>não muda o valor contratado</b>."],

  ["Item 21 — o que deve ser ajustado a valor presente?","Os elementos integrantes do <b>ativo e do passivo</b> decorrentes de operações de <b>LONGO prazo</b>, <b>ou de curto prazo quando houver efeito relevante</b>, com base em <b>taxas de desconto que reflitam as melhores avaliações do mercado</b> quanto ao <b>valor do dinheiro no tempo</b> e aos <b>riscos específicos</b> do ativo e do passivo <b>em suas datas originais</b>."],
  ["Estoque de R$ 80.000 vendido em 02/01/21 por R$ 100.000 em duas parcelas: 5% em 60 dias (não material) e o restante em 24 meses, taxa única de 10%. Qual o AVP?","Ajusta-se só a 2ª parcela: <b>VP = 95.000/(1 + 0,10)<sup>1</sup> = 95.000/1,1 = R$ 86.363,63</b>. <b>AVP = 95.000 – 86.363,63 = R$ 8.636,37</b>. A 1ª parcela de R$ 5.000 é de <b>curto prazo sem efeito relevante</b>."],
  ["Nesse exemplo, como fica a DRE?","<b>(+)</b> Receita Bruta de Vendas 100.000 · <b>(–)</b> Ajuste a Valor Presente (8.636,37) · <b>(=)</b> Receita Líquida de Vendas 91.363,63 · <b>(–)</b> CMV (80.000) · <b>(=)</b> <b>Lucro Bruto R$ 11.363,63</b>."],
  ["Item 22 — como se quantifica o AVP?","Em <b>base exponencial (juros compostos) “pro rata die”</b> (proporcionalmente ao dia), <b>a partir da origem de cada transação</b>, sendo os efeitos <b>apropriados nas contas a que se vinculam</b>."],
  ["Item 23 — como se apropriam as reversões do AVP?","Como <b>receitas ou despesas financeiras</b>, a não ser que a entidade possa <b>devidamente fundamentar</b> que o <b>financiamento feito a seus clientes faz parte de suas atividades operacionais</b> — aí as reversões vão para <b>receita operacional</b>. É o caso de quem opera em dois segmentos distintos: <b>(i) venda de produtos e serviços</b> e <b>(ii) financiamento das vendas a prazo</b>, sendo relevantes o ajuste e sua evidenciação."],
  ["Exemplo 01 do item 23: serviço a prazo de 24 meses por R$ 130.000, sendo o preço à vista R$ 100.000. Qual o lançamento?","<b>D</b> Clientes R$ 130.000 (Ativo Não Circulante) · <b>C</b> Ajuste a Valor Presente de Clientes R$ 30.000 (<b>retificadora do ANC</b>) · <b>C</b> Receita Líquida de Serviços R$ 100.000 (DRE) — o valor que seria praticado à vista."],
  ["Nesse exemplo, quando os R$ 30.000 impactam o resultado?","<b>Não</b> impactam na data da venda: só <b>ao longo do período entre a venda e o recebimento</b>, mensalmente, respeitando a <b>competência</b>. Lançamento da reversão: <b>D</b> Ajuste a Valor Presente – Clientes · <b>C</b> Receita Financeira (resultado)."],
  ["Item 29 — efeitos fiscais na taxa de desconto","A taxa a ser aplicada <b>não deve ser líquida de efeitos fiscais</b> e, sim, <b>antes dos impostos</b> — ou seja, deve ser <b>bruta de efeitos fiscais</b>, sem considerar a eventual economia de impostos."],
  ["Item 32 — operação comercial que se caracterize como de financiamento","O <b>valor consignado na documentação fiscal</b> deve ser <b>adequadamente decomposto</b> para efeito contábil: os <b>juros embutidos</b> devem ser <b>expurgados do custo de aquisição das mercadorias</b> e <b>apropriados pela fluência do prazo</b>. Compra de matérias-primas por 200.000 em 24 prestações (à vista, 180.000): <b>D</b> Estoques 180.000 · <b>D</b> AVP de Fornecedores 20.000 (retificadora do passivo) · <b>C</b> Fornecedores 200.000. Mensalmente: <b>D</b> Despesa Financeira · <b>C</b> AVP de Fornecedores."],
  ["Mudança de prática contábil","O reconhecimento do AVP <b>caracteriza-se como mudança de prática contábil</b>: deve ser considerada de forma <b>retrospectiva</b> para todos os períodos apresentados, com os ajustes contabilizados na conta de <b>lucros (ou prejuízos) acumulados</b>, <b>líquidos dos efeitos tributários</b>, e demonstrados como se tivessem sido contabilizados no <b>início do período mais antigo apresentado</b>."],
  ["AVP no saldo de ICMS","<b>Regra geral:</b> não se aplica AVP a <b>saldos credores de ICMS disponíveis para compensação imediata</b>. <b>Aplica-se</b> nos <b>parcelamentos de ICMS como incentivo fiscal</b>, em que o ICMS a pagar é diferido para longo prazo <b>sem juros ou sem atualização monetária</b>, ou <b>com juros bem aquém das condições normais de mercado</b>. Obrigação de 100.000 a 5% a.a. paga em 24 meses, mercado a 10% a.a.: <b>VF = 100.000 × 1,1025 = 110.250</b> e <b>VP = 110.250/(1,1)<sup>2</sup> = R$ 91.115,70</b>."]
];

var QS = [
  ["O ajuste a valor presente consiste em trazer a valores atuais algo que seria recebido ou pago no futuro.","C","CEBRASPE","Conceito do resumo."],
  ["Na venda de estoque por R$ 100.000 em duas parcelas iguais de R$ 50.000, a primeira recebível ao final de 2 anos e a segunda em 3 anos, com taxa de desconto composto de 10% ao ano, o valor presente é de R$ 78.887.","C","FCC","41.322 + 37.565."],
  ["No mesmo exemplo, o ajuste a valor presente é de R$ 21.113.","C","FGV","100.000 − 78.887."],
  ["No mesmo exemplo, o ajuste a valor presente corresponde a R$ 78.887, que é o valor presente das duas parcelas.","E","VUNESP","R$ 78.887 é o <b>valor presente</b>; o AVP é a <b>diferença</b>, R$ 21.113."],
  ["O ajuste a valor presente é registrado como dedução da receita bruta na demonstração do resultado.","C","CEBRASPE","Dedução da receita bruta na DRE."],
  ["No lançamento dessa venda, debita-se Clientes por R$ 78.887 e credita-se Receita Líquida com Vendas por R$ 100.000.","E","FCC","Inverteu: <b>D Clientes 100.000</b> e <b>C Receita Líquida com Vendas 78.887</b>."],
  ["A conta Ajuste a Valor Presente de Clientes é retificadora do ativo.","C","FGV","Natureza credora, redutora do direito."],
  ["O objetivo do CPC 12 é estabelecer os requisitos básicos a serem observados quando da apuração do ajuste a valor presente de elementos do ativo e do passivo na elaboração de demonstrações contábeis.","C","CPC 12, item 01","Literalidade do item 01."],
  ["O CPC 12 trata essencialmente de questões de reconhecimento, não alcançando com detalhes questões de mensuração.","E","CPC 12, item 04","Inverteu: trata essencialmente de <b>mensuração</b>."],
  ["A dimensão contábil do reconhecimento envolve a decisão de quando registrar, ao passo que a da mensuração envolve a decisão de por quanto registrar.","C","CEBRASPE","Item 04."],
  ["A mensuração contábil a valor presente deve ser aplicada no reconhecimento inicial de ativos e passivos.","C","CPC 12, item 05","Regra do item 05."],
  ["Na renegociação de dívida em que novos termos são estabelecidos, o ajuste a valor presente deve ser aplicado como se fosse nova medição de ativos e passivos, situação rara e sujeita a julgamento de quem prepara e audita as demonstrações.","C","FCC","Exceção do item 05."],
  ["A aplicação do conceito de ajuste a valor presente sempre equipara o ativo ou o passivo a seu valor justo, razão pela qual valor presente e valor justo são sinônimos.","E","CPC 12, item 06","O item 06 diz o contrário: <b>nem sempre equipara</b> e <b>não são sinônimos</b>."],
  ["O valor justo pode sofrer alteração com o passar do tempo em decorrência das condições do mercado, enquanto o valor presente tem relação com a taxa de juros do contrato e não sofre alteração.","C","FGV","Quadro comparativo."],
  ["Como valor presente e valor justo não são sinônimos, eles nunca coincidem.","E","VUNESP","O resumo admite que <b>em algumas circunstâncias podem coincidir</b>."],
  ["No exemplo da compra financiada de veículo por cliente especial, com taxa não de mercado, prevalece contabilmente o valor justo, superior ao valor presente.","E","CEBRASPE","Prevalece o <b>valor presente</b>, inferior ao valor justo."],
  ["Venda a prazo de R$ 10.000 em parcela única com vencimento em três anos, à vista por R$ 7.513 e taxa de transação de 10%: apurado o valor justo ao final do primeiro ano, quando a taxa de mercado passou a 12%, as contas a receber equivalem a R$ 7.971,93.","C","FCC","10.000 ÷ 1,2544."],
  ["No mesmo caso, para apurar o valor presente ao final do primeiro ano deveria ser utilizada a taxa de mercado de 12%.","E","FGV","Para o <b>valor presente</b> usa-se a taxa da <b>transação</b> (10%), o que levaria a R$ 8.264."],
  ["Passado o primeiro ano, o reconhecimento da receita financeira deve respeitar a taxa de juros de mercado vigente no período, ainda que diferente da taxa da transação.","E","VUNESP","Caixa ATENÇÃO!: respeita a taxa da transação na <b>data de sua origem</b>."],
  ["Vendidos 90% de um estoque de R$ 40.000 por R$ 70.000 em duas parcelas iguais, recebíveis em 30 e 60 dias, com taxa de desconto de 3% ao mês, o lucro bruto é de R$ 30.971,43.","C","CEBRASPE","66.971,43 − 36.000."],

  ["Para a aplicação do conceito de valor presente, a questão mais relevante é a enumeração minuciosa de quais ativos e passivos são abarcados pela norma.","E","CPC 12, item 07","O item 07 diz o oposto: o relevante é o <b>estabelecimento de diretrizes gerais e de metas</b>."],
  ["Está sujeita ao AVP a transação que dá origem a ativo, passivo, receita, despesa ou outra mutação do patrimônio líquido cuja contrapartida é um ativo ou um passivo com liquidação financeira em data diferente da data do reconhecimento desses elementos.","C","CPC 12, item 07","Diretriz (a)."],
  ["É diretriz do item 07 o reconhecimento periódico de mudanças de valor, utilidade ou substância de ativos ou passivos similares que empregue método de alocação de descontos.","C","FCC","Diretriz (b)."],
  ["É diretriz do item 07 o conjunto particular de fluxos de caixa estimados claramente associado a um ativo ou a um passivo.","C","FGV","Diretriz (c)."],
  ["Ativos e passivos monetários com juros implícitos ou explícitos embutidos devem ser mensurados pelo seu valor presente quando do seu reconhecimento inicial.","C","CPC 12, item 09","Por ser este o valor de custo original dentro da filosofia de valor justo."],
  ["Uma vez ajustado o item não monetário, ele deve ser submetido a ajustes subsequentes a cada exercício no que respeita à figura dos juros embutidos.","E","VUNESP","O item 09 é expresso: <b>não deve mais ser submetido</b> a ajustes subsequentes quanto a juros embutidos."],
  ["Dinheiro em caixa, depósitos bancários e aplicações financeiras de curto prazo são exemplos de ativo monetário; equipamentos, veículos, estoques e patentes, de ativo não monetário.","C","CEBRASPE","Quadro comparativo."],
  ["Todo ativo não monetário está sujeito ao efeito do ajuste a valor presente.","E","FCC","<b>Nem todo</b> ativo ou passivo não monetário está sujeito ao AVP."],
  ["O adiantamento em dinheiro para recebimento ou pagamento em bens e serviços é exemplo de item não monetário que, pela sua natureza, não está sujeito ao ajuste a valor presente.","C","CPC 12, item 09","Exemplo expresso do item 09."],
  ["Havendo Pronunciamento específico do CPC que discipline a mensuração de determinado ativo ou passivo com base no ajuste a valor presente, prevalece a regra geral do CPC 12.","E","FGV","O item 10 diz que a <b>regra específica sempre prevalece à regra geral</b>."],
  ["O Imposto de Renda Diferido Ativo e o Imposto de Renda Diferido Passivo devem ser ajustados a valor presente, por serem elementos monetários de longo prazo.","E","CPC 12, item 10","Conforme as normas internacionais, <b>não são passíveis de AVP</b>."],
  ["Os financiamentos do BNDES contratados com taxas de juros diferentes das praticadas pelo mercado em geral estão sujeitos ao ajuste a valor presente.","E","VUNESP","O resumo os lista entre os que <b>não</b> se ajustam a valor presente."],
  ["Os contratos de mútuo sem data prevista de vencimento impossibilitam o cálculo do AVP, e no mútuo exigível a qualquer momento considera-se que o vencimento é à vista, a critério do credor.","C","CEBRASPE","Contrato de mútuo sem data de vencimento."],
  ["Ao utilizar informações com base no fluxo de caixa e no valor presente, as incertezas inerentes são levadas em consideração, mas o prêmio pelo risco que os participantes do mercado cobrariam para assumi-las não precisa ser avaliado.","E","CPC 12, item 13","O item 13 manda avaliar <b>igualmente</b> o prêmio pelo risco."],
  ["O ajuste a valor presente deve ser calculado no momento inicial da operação, considerando os fluxos de caixa da operação e a taxa de desconto aplicável à transação na data de sua ocorrência.","C","FCC","Momento de contabilização do AVP."],
  ["Empréstimo de R$ 100.000 concedido para pagamento em 2 anos, com taxa de desconto de 10% ao ano, é registrado inicialmente por R$ 82.644,62.","C","FGV","100.000 ÷ 1,21."],
  ["Para refletir os efeitos contábeis posteriores ao registro inicial, o CPC 12 prevê o método da taxa efetiva de juros, e a apropriação dos juros deve restabelecer o valor contratado até a data do vencimento.","C","CEBRASPE","O AVP não muda o valor contratado entre as partes."],

  ["Os elementos integrantes do ativo e do passivo decorrentes de operações de longo prazo, ou de curto prazo quando houver efeito relevante, devem ser ajustados a valor presente.","C","CPC 12, item 21","Literalidade do item 21."],
  ["Somente as operações de longo prazo são ajustadas a valor presente, sendo vedado o ajuste de operações de curto prazo.","E","VUNESP","As de <b>curto prazo</b> também se ajustam <b>quando houver efeito relevante</b>."],
  ["O ajuste do item 21 usa taxas de desconto que reflitam as melhores avaliações do mercado quanto ao valor do dinheiro no tempo e os riscos específicos do ativo e do passivo nas datas de encerramento do balanço.","E","FCC","O item 21 fala das <b>datas originais</b> do ativo e do passivo, não das datas de balanço."],
  ["Estoque de R$ 80.000 vendido por R$ 100.000 em duas parcelas, 5% em 60 dias sem efeito relevante e R$ 95.000 em 24 meses com taxa de 10%: o valor presente é de R$ 86.363,63 e o ajuste a valor presente, de R$ 8.636,37.","C","FGV","95.000 ÷ 1,1."],
  ["No mesmo exemplo, a parcela de R$ 5.000 recebível em 60 dias também deve ser trazida a valor presente.","E","CEBRASPE","Foi considerada <b>não material</b>, de curto prazo e sem efeito relevante."],
  ["No mesmo exemplo, o lucro bruto é de R$ 11.363,63.","C","FCC","91.363,63 − 80.000."],
  ["A quantificação do ajuste a valor presente deve ser realizada em base linear, pro rata die, a partir da origem de cada transação.","E","CPC 12, item 22","Em base <b>exponencial</b> (juros compostos), pro rata die."],
  ["As reversões dos ajustes a valor presente dos ativos e passivos monetários qualificáveis devem ser apropriadas como receitas ou despesas financeiras.","C","CPC 12, item 23","Regra do item 23."],
  ["A entidade que fundamente devidamente que o financiamento feito a seus clientes faz parte de suas atividades operacionais apropria as reversões do AVP como receita operacional.","C","FGV","Exceção do item 23."],
  ["Em serviço prestado a prazo de 24 meses por R$ 130.000, sendo o preço à vista de R$ 100.000, registra-se D Clientes R$ 130.000, C Ajuste a Valor Presente de Clientes R$ 30.000 e C Receita Líquida de Serviços R$ 100.000.","C","VUNESP","Exemplo 01 do item 23."],
  ["No mesmo exemplo, os R$ 30.000 impactam integralmente o resultado na data da venda.","E","CEBRASPE","Não impactam na data da venda: são apropriados <b>mensalmente</b> como receita financeira, pela competência."],
  ["Para fins de desconto a valor presente de ativos e passivos, a taxa a ser aplicada deve ser líquida de efeitos fiscais.","E","CPC 12, item 29","Deve ser aplicada <b>antes dos impostos</b>, bruta de efeitos fiscais."],
  ["Na compra de matérias-primas por R$ 200.000 em 24 prestações, cujo valor à vista seria de R$ 180.000, registra-se D Estoques R$ 180.000, D AVP de Fornecedores R$ 20.000 e C Fornecedores R$ 200.000.","C","FCC","Item 32 — juros embutidos expurgados do custo de aquisição."],
  ["O reconhecimento do ajuste a valor presente caracteriza-se como mudança de prática contábil, cujos ajustes são contabilizados diretamente no resultado do exercício em que a mudança ocorre.","E","FGV","Os ajustes vão para <b>lucros (ou prejuízos) acumulados</b>, líquidos dos efeitos tributários, de forma retrospectiva."],
  ["Como regra geral, aplica-se o ajuste a valor presente aos saldos credores de ICMS disponíveis para compensação imediata.","E","VUNESP","Como regra geral <b>não</b> se aplica; o AVP incide nos <b>parcelamentos incentivados</b> de longo prazo."],
  ["Obrigação tributária de R$ 100.000 com juros de 5% ao ano, sem correção monetária, em parcela única ao final de 24 meses, com taxa de mercado de 10% ao ano: o valor presente inicial é de R$ 91.115,70.","C","CEBRASPE","VF = 110.250; depois 110.250 ÷ 1,21."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("O que é o AVP, alcance e valor presente × valor justo",
      '<div class="box"><span class="bl">O conceito e a fórmula</span>'+
      '<p>O <b>CPC 12</b> trata do <b>Ajuste a Valor Presente</b>. Ajustar a valor presente é <b>trazer a valores atuais algo que seria recebido ou pago no futuro</b>.</p>'+
      '<p class="fn3"><span class="fn"><b>Valor Presente = Valor Futuro ÷ (1 + i)<sup>t</sup></b></span> — <b>i</b> é a taxa de desconto e <b>t</b>, o prazo. Havendo duas parcelas, soma-se o valor presente de cada uma.</p>'+
      '<p><b>AVP = Receita Bruta de Vendas – Valor Presente</b>, e o AVP é <b>dedução da receita bruta</b> na DRE.</p></div>'+
      '<div class="box tip"><span class="bl">O exemplo que abre o resumo</span>'+
      '<p>Em <b>30/06/2023</b> a ABC vendeu o estoque por <b>R$ 100.000</b> em duas parcelas iguais de <b>R$ 50.000</b> — a 1ª ao final de <b>2 anos</b>, a 2ª em <b>3 anos</b> — com desconto composto de <b>10% ao ano</b>.</p>'+
      '<p class="mn"><em>VP = 50.000/(1,10)<sup>2</sup> + 50.000/(1,10)<sup>3</sup> = 41.322 + 37.565 = <b>78.887</b></em></p>'+
      '<p><b>AVP = 100.000 – 78.887 = R$ 21.113</b>. Lançamento: <b>D</b> Clientes 100.000 · <b>C</b> AVP de Clientes 21.113 (<b>retificadora do ativo</b>) · <b>C</b> Receita Líquida com Vendas 78.887.</p></div>'+
      '<div class="box"><span class="bl">Objetivo e alcance</span>'+
      '<p><b>Item 01:</b> estabelecer os <b>requisitos básicos</b> a serem observados quando da <b>apuração do AVP de elementos do ativo e do passivo</b>.</p>'+
      '<p><b>Item 04:</b> o Pronunciamento trata essencialmente de <b>mensuração</b> — <b>reconhecimento</b> é “<b>quando registrar</b>”; <b>mensuração</b> é “<b>por quanto registrar</b>”.</p>'+
      '<p><b>Item 05:</b> a mensuração a valor presente aplica-se no <b>reconhecimento inicial</b>. Só em situações <b>excepcionais</b> — a <b>renegociação de dívida</b> com novos termos (de 5 anos a 10% para 10 anos a 8%) — o AVP funciona como <b>nova medição</b>; são casos <b>raros</b> e de julgamento.</p></div>'+
      '<div class="box trap"><span class="bl">Valor presente NÃO é valor justo</span>'+
      '<p><b>Item 06:</b> a aplicação do AVP <b>nem sempre equipara</b> o ativo ou o passivo ao valor justo; por isso <b>não são sinônimos</b> — embora <b>em algumas circunstâncias possam coincidir</b>.</p>'+
      '<p>No <b>veículo financiado a cliente especial</b> com taxa fora de mercado, <b>prevalece o valor presente</b>, inferior ao valor justo, por representar melhor o <b>efetivo custo de aquisição</b>; o vendedor reconhece a contrapartida como <b>redução da receita</b>.</p>'+
      '<div class="chips"><span class="chip">VP: valor corrente do fluxo de caixa futuro</span><span class="chip">VJ: valor de mercado, em regra</span><span class="chip">VP: taxa do contrato, não se altera</span><span class="chip">VJ: altera-se com o mercado</span></div></div>'+
      '<div class="box"><span class="bl">Questão-exemplo: o lucro bruto</span>'+
      '<p>Estoque de <b>40.000</b>; em 30/06/2023 vendeu <b>90%</b> por <b>70.000</b> em duas parcelas iguais (<b>30 e 60 dias</b>), taxa de <b>3% ao mês</b>.</p>'+
      '<p class="mn"><em>VP = 35.000/(1,03)<sup>1</sup> + 35.000/(1,03)<sup>2</sup> = 33.980,58 + 32.990,85 = <b>66.971,43</b></em></p>'+
      '<p><b>AVP = 70.000 – 66.971,43 = 3.028,56</b> · <b>CMV = 90% × 40.000 = 36.000</b> · <b>Lucro Bruto = 66.971,43 – 36.000 = R$ 30.971,43</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Questão-exemplo: valor justo × valor presente</span>'+
      '<p>Cia. Alfa: venda a prazo de <b>10.000</b> em parcela única para <b>3 anos</b>; à vista seria <b>7.513</b>; taxa da transação <b>10%</b> (igual à de mercado na data). Ao final do <b>1º ano</b> a taxa de mercado vai a <b>12%</b> e a questão pede o <b>valor justo</b> — faltam <b>2 anos</b>:</p>'+
      '<p class="mn"><em>VJ = 10.000/(1,12)<sup>2</sup> = 10.000/1,2544 = <b>7.971,93</b></em></p>'+
      '<p>Se pedisse o <b>valor presente</b>, usaria a taxa da <b>transação</b> (10%) e a resposta seria <b>8.264</b>. E o <b>ATENÇÃO!</b> do resumo: passado o primeiro ano, a <b>receita financeira</b> respeita a <b>taxa da transação na data de sua origem</b>, seja qual for a taxa de mercado depois.</p></div>')
  ],
  V2:[
    sl("Mensuração, monetário × não monetário e o que não se ajusta",
      '<div class="box"><span class="bl">Item 07 — diretrizes, não lista</span>'+
      '<p>A questão mais relevante <b>não é a enumeração minuciosa</b> de quais ativos ou passivos a norma abarca, mas o <b>estabelecimento de diretrizes gerais e de metas</b>. Devem ser ajustados os que apresentarem uma ou mais destas características:</p>'+
      '<div class="tree">'+
      '<div class="leaf"><b>(a)</b> transação que dá origem a <b>ativo, passivo, receita, despesa ou outra mutação do PL</b> cuja contrapartida é ativo ou passivo com <b>liquidação financeira em data diferente da data do reconhecimento</b>;</div>'+
      '<div class="leaf"><b>(b)</b> reconhecimento periódico de mudanças de <b>valor, utilidade ou substância</b> de ativos ou passivos similares que <b>empregue método de alocação de descontos</b>;</div>'+
      '<div class="leaf"><b>(c)</b> <b>conjunto particular de fluxos de caixa estimados</b> claramente associado a um ativo ou a um passivo.</div>'+
      '</div></div>'+
      '<div class="box"><span class="bl">Item 09 — monetário × não monetário</span>'+
      '<p><b>Ativos e passivos monetários com juros implícitos ou explícitos embutidos</b> devem ser mensurados pelo <b>valor presente no reconhecimento inicial</b>, por ser este o <b>valor de custo original dentro da filosofia de valor justo</b>. Em contrapartida ajusta-se o <b>custo do ativo não monetário</b>, ou a conta de receita/despesa, conforme a situação — e, <b>uma vez ajustado o item não monetário, não há novos ajustes</b> quanto aos juros embutidos.</p>'+
      '<p><b>Monetário:</b> mantido em dinheiro ou <b>facilmente conversível</b> — dinheiro em caixa, depósitos bancários, aplicações de curto prazo.</p>'+
      '<p><b>Não monetário:</b> <b>não prontamente conversível</b> ou de <b>valor monetário incerto</b> — equipamentos, veículos, estoques, adiantamento em dinheiro, patentes, marcas registradas, direitos autorais.</p></div>'+
      '<div class="box trap"><span class="bl">Os quatro que NÃO se ajustam a valor presente</span>'+
      '<p><b>1)</b> <b>Adiantamento em dinheiro</b> (item 09) — não há por que considerar o tempo de espera até a entrega do bem.</p>'+
      '<p><b>2)</b> <b>Imposto de Renda Diferido Ativo ou Passivo</b> (item 10).</p>'+
      '<p><b>3)</b> <b>Financiamentos do BNDES</b> contratados com taxas de juros <b>diferentes das praticadas pelo mercado</b>.</p>'+
      '<p><b>4)</b> <b>Contratos de mútuo sem data de vencimento</b> — o <b>on demand</b> tem <b>vencimento à vista, a critério do credor</b>, o que impossibilita o cálculo.</p>'+
      '<p>E lembre do <b>item 10</b>: havendo pronunciamento específico, a <b>regra específica sempre prevalece à regra geral</b>.</p></div>'+
      '<div class="box"><span class="bl">Item 13 — risco e incerteza na taxa</span>'+
      '<p>As <b>incertezas inerentes</b> ao fluxo de caixa são <b>obrigatoriamente</b> levadas em consideração na mensuração. Do mesmo modo, o <b>“preço” que os participantes do mercado cobram para assumir esses riscos</b> — o <b>prêmio pelo risco</b> — <b>deve ser igualmente avaliado</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Quando calcular, e o que vem depois</span>'+
      '<p>O AVP é calculado no <b>momento inicial da operação</b>, com os <b>fluxos de caixa</b> (valor, data, termos e condições) e a <b>taxa de desconto aplicável à transação na data de sua ocorrência</b>.</p>'+
      '<p class="mn"><em>Empréstimo de 100.000 para 2 anos a 10% a.a. → 100.000/1,21 = <b>82.644,62</b></em></p>'+
      '<p>Depois do registro inicial vale o <b>método da taxa efetiva de juros</b>. E o mecanismo <b>não pode mudar o valor contratado</b>: a apropriação dos juros tem de <b>restabelecer os R$ 100.000 até o vencimento</b>.</p></div>')
  ],
  V3:[
    sl("Itens 21 a 32, mudança de prática e o AVP no ICMS",
      '<div class="box"><span class="bl">Item 21 — a regra de ouro</span>'+
      '<p>Os elementos do <b>ativo</b> e do <b>passivo</b> decorrentes de operações de <b>LONGO prazo</b>, <b>ou de curto prazo quando houver efeito relevante</b>, devem ser ajustados a valor presente com base em <b>taxas de desconto que reflitam as melhores avaliações do mercado</b> quanto ao <b>valor do dinheiro no tempo</b> e aos <b>riscos específicos</b> do ativo e do passivo <b>em suas datas originais</b>.</p>'+
      '<p>Daí a <b>aplicabilidade</b>: o AVP serve às operações que possam ser consideradas <b>atividades de financiamento</b>, e não às liquidadas em <b>curto espaço de tempo</b> cujo efeito <b>não seja material</b>.</p></div>'+
      '<div class="box tip"><span class="bl">O exemplo do item 21</span>'+
      '<p>Estoque de <b>80.000</b>; em <b>02/01/21</b> vendeu tudo por <b>100.000</b> em duas parcelas: <b>5%</b> em 60 dias (<b>não material</b>) e o restante em 24 meses, taxa única de <b>10%</b>. Ajusta-se só a 2ª parcela:</p>'+
      '<p class="mn"><em>VP = 95.000/(1 + 0,10)<sup>1</sup> = 95.000/1,1 = <b>86.363,63</b> → AVP = 95.000 – 86.363,63 = <b>8.636,37</b></em></p>'+
      '<p><b>DRE:</b> Receita Bruta 100.000 · (–) AVP (8.636,37) · (=) Receita Líquida <b>91.363,63</b> · (–) CMV (80.000) · (=) <b>Lucro Bruto 11.363,63</b>.</p></div>'+
      '<div class="box"><span class="bl">Itens 22, 23 e 29</span>'+
      '<p><b>Item 22:</b> a quantificação do AVP é feita em <b>base exponencial</b> (juros compostos) <b>“pro rata die”</b> (proporcionalmente ao dia), <b>a partir da origem de cada transação</b>, com os efeitos apropriados nas contas a que se vinculam.</p>'+
      '<p><b>Item 23:</b> as <b>reversões</b> do AVP de ativos e passivos monetários qualificáveis são <b>receitas ou despesas financeiras</b> — <b>exceto</b> se a entidade <b>fundamentar</b> que o <b>financiamento a seus clientes faz parte de suas atividades operacionais</b> (caso de quem opera em dois segmentos: <b>venda</b> e <b>financiamento das vendas a prazo</b>), quando então vão para <b>receita operacional</b>.</p>'+
      '<p><b>Item 29:</b> a taxa <b>não deve ser líquida de efeitos fiscais</b> — deve ser aplicada <b>antes dos impostos</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Os dois lançamentos que a banca adora</span>'+
      '<p><b>Serviço a prazo (item 23, exemplo 01):</b> 24 meses por <b>130.000</b>, à vista <b>100.000</b>. <b>D</b> Clientes 130.000 (ANC) · <b>C</b> AVP de Clientes 30.000 (<b>retificadora do ANC</b>) · <b>C</b> Receita Líquida de Serviços 100.000. Os 30.000 <b>não</b> impactam o resultado na data da venda: mês a mês, <b>D</b> AVP – Clientes · <b>C</b> <b>Receita Financeira</b>.</p>'+
      '<p><b>Compra a prazo (item 32):</b> matérias-primas por <b>200.000</b> em 24 prestações, à vista <b>180.000</b>. Os <b>juros embutidos</b> são <b>expurgados do custo de aquisição</b> e apropriados <b>pela fluência do prazo</b>: <b>D</b> Estoques 180.000 · <b>D</b> AVP de Fornecedores 20.000 (retificadora do passivo) · <b>C</b> Fornecedores 200.000. Mensalmente: <b>D</b> Despesa Financeira · <b>C</b> AVP de Fornecedores.</p></div>'+
      '<div class="box"><span class="bl">Mudança de prática contábil</span>'+
      '<p>O reconhecimento do AVP <b>é mudança de prática contábil</b>: aplica-se de forma <b>retrospectiva</b> a todos os períodos apresentados, com os ajustes na conta de <b>lucros (ou prejuízos) acumulados</b>, <b>líquidos dos efeitos tributários</b>, demonstrados como se tivessem sido contabilizados no <b>início do período mais antigo apresentado</b>.</p></div>'+
      '<div class="box tip"><span class="bl">AVP no saldo de ICMS</span>'+
      '<p><b>Regra geral:</b> <b>não</b> se aplica AVP a <b>saldos credores de ICMS disponíveis para compensação imediata</b>. <b>Aplica-se</b> nos <b>parcelamentos de ICMS como incentivo fiscal</b>, com o ICMS a pagar diferido para longo prazo <b>sem juros ou sem atualização monetária</b>, ou <b>com juros bem aquém das condições normais de mercado</b> (ex.: 3% a.a. contra mercado de 15% a.a.).</p>'+
      '<p>O roteiro é duplo: primeiro achar o <b>desembolso efetivo de caixa</b> (valor futuro pela <b>taxa concedida</b>), depois <b>trazer a valor presente pela taxa de mercado</b>.</p>'+
      '<p class="mn"><em>VF = 100.000 × (1,05)<sup>2</sup> = 110.250 → VP = 110.250/(1,1)<sup>2</sup> = <b>91.115,70</b></em></p></div>')
  ]
};

var EX = {
S1:{t:"mc", instr:"Segundo o resumo, o que é o ajuste a valor presente?",
  options:["Trazer a valores atuais algo que seria recebido ou pago no futuro",
           "Atualizar o ativo pelo valor de mercado na data do balanço",
           "Corrigir monetariamente as contas a receber pela inflação do período",
           "Reconhecer a receita somente quando o dinheiro entra em caixa"],
  answer:0,
  why:"É a definição que abre o resumo do CPC 12."},

S2:{t:"wordbank", instr:"Monte a definição de ajuste a valor presente",
  target:["trazer","a","valores","atuais","algo","que","seria","recebido","ou","pago","no","futuro"],
  extra:["valor","justo","mercado","compulsória"],
  why:"O AVP olha para o fluxo de caixa futuro, não para o valor de mercado."},

S3:{t:"mc", instr:"Venda por R$ 100.000 em duas parcelas de R$ 50.000, recebíveis ao final de 2 e de 3 anos, com desconto composto de 10% ao ano. Qual o ajuste a valor presente?",
  options:["R$ 21.113","R$ 78.887","R$ 41.322","R$ 100.000"],
  answer:0,
  why:"VP = 41.322 + 37.565 = 78.887. O AVP é a diferença: 100.000 − 78.887."},

S4:{t:"wordbank", instr:"Monte o lançamento dessa venda, na ordem do resumo",
  target:["D","Clientes","100.000","C","Ajuste","a","Valor","Presente","de","Clientes","21.113","C","Receita","Líquida","com","Vendas","78.887"],
  extra:["CMV","Estoque","Receita","Financeira"],
  why:"Clientes entra pelo valor nominal; o AVP retifica o ativo; a receita líquida é o valor presente."},

S5:{t:"match", instr:"Correlacione os conceitos do resumo",
  pairs:[["Reconhecimento","Decisão de QUANDO registrar"],
         ["Mensuração","Decisão de POR QUANTO registrar"],
         ["Valor presente","Estimativa do valor corrente de um fluxo de caixa futuro"],
         ["Valor justo","Demonstra o valor de mercado, em regra"]],
  why:"O CPC 12 trata essencialmente de mensuração."},

S6:{t:"gap", instr:"Complete a regra do item 05",
  before:"A mensuração contábil a valor presente deve ser aplicada no ",
  after:" de ativos e passivos.",
  options:["reconhecimento inicial","encerramento de cada exercício","vencimento do título"], answer:0,
  why:"Só em situações excepcionais, como a renegociação de dívida, o AVP funciona como nova medição."},

S7:{t:"mc", instr:"Cia. Alfa: venda a prazo de R$ 10.000 em parcela única para 3 anos, à vista por R$ 7.513, taxa da transação de 10%. Ao final do 1º ano a taxa de mercado vai a 12%. Qual o valor justo das contas a receber?",
  options:["R$ 7.971,93","R$ 8.264","R$ 7.513","R$ 8.800"],
  answer:0,
  why:"Faltam 2 anos e usa-se a taxa de mercado: 10.000/1,2544. Com a taxa da transação, daria 8.264."},

S8:{t:"mc", instr:"Vendidos 90% de um estoque de R$ 40.000 por R$ 70.000 em duas parcelas iguais (30 e 60 dias), taxa de 3% ao mês. Qual o lucro bruto?",
  options:["R$ 30.971,43","R$ 34.000","R$ 32.981","R$ 24.000"],
  answer:0,
  why:"Receita líquida 66.971,43 menos CMV de 36.000 (90% de 40.000)."},

S9:{t:"multi", instr:"Marque as características do item 07 que sujeitam o item aos procedimentos do CPC 12",
  options:["Transação cuja contrapartida tem liquidação financeira em data diferente da data do reconhecimento",
           "Reconhecimento periódico de mudanças de valor, utilidade ou substância que emprega método de alocação de descontos",
           "Conjunto particular de fluxos de caixa estimados claramente associado a um ativo ou a um passivo",
           "Enumeração minuciosa, no pronunciamento, de cada ativo e passivo abarcado",
           "Transação liquidada à vista, na própria data do reconhecimento"],
  answers:[0,1,2],
  why:"O item 07 é de diretrizes gerais e metas, não de lista fechada."},

S10:{t:"sort", instr:"Classifique cada item conforme o quadro comparativo do resumo",
  buckets:["Ativo monetário","Ativo não monetário"],
  items:[["Dinheiro em caixa",0],["Depósitos bancários",0],
         ["Aplicações financeiras de curto prazo",0],
         ["Equipamentos",1],["Veículos",1],["Estoques",1],
         ["Adiantamento em dinheiro",1],["Patentes e marcas registradas",1]],
  why:"Os monetários devem ser mensurados a valor presente no reconhecimento inicial; nem todo não monetário se sujeita ao AVP."},

S11:{t:"multi", instr:"Marque o que NÃO deve ser ajustado a valor presente",
  options:["Adiantamento em dinheiro",
           "Imposto de Renda Diferido Ativo ou Passivo",
           "Financiamentos do BNDES contratados com taxas diferentes das praticadas pelo mercado",
           "Contratos de mútuo sem data de vencimento",
           "Contas a receber de longo prazo com juros embutidos",
           "Fornecedores a prazo com juros embutidos"],
  answers:[0,1,2,3],
  why:"São exatamente os quatro itens do quadro do resumo."},

S12:{t:"gap", instr:"Complete a regra do item 10",
  before:"Quando houver Pronunciamento específico do CPC disciplinando a mensuração a valor presente, a regra ",
  after:" sempre prevalece.",
  options:["específica","geral","mais favorável ao contribuinte"], answer:0,
  why:"Caso especial: o IR Diferido Ativo e Passivo não é passível de AVP."},

S13:{t:"mc", instr:"Em que momento o AVP deve ser calculado, e o que rege os efeitos posteriores?",
  options:["No momento inicial da operação, aplicando-se depois o método da taxa efetiva de juros",
           "No encerramento de cada exercício, pela taxa de mercado vigente",
           "Apenas na data do vencimento do título",
           "No momento inicial, sem qualquer apropriação posterior de juros"],
  answer:0,
  why:"A apropriação dos juros deve restabelecer o valor contratado até o vencimento — o AVP não muda o que foi contratado."},

S14:{t:"mc", instr:"Segundo o item 21, o que deve ser ajustado a valor presente?",
  options:["Os elementos do ativo e do passivo de operações de longo prazo, ou de curto prazo quando houver efeito relevante",
           "Somente os elementos do ativo de operações de longo prazo",
           "Somente as operações de curto prazo com efeito relevante",
           "Todos os elementos do ativo e do passivo, sem exceção"],
  answer:0,
  why:"E com taxas que reflitam as melhores avaliações do mercado nas datas originais do ativo e do passivo."},

S15:{t:"mc", instr:"Estoque de R$ 80.000 vendido por R$ 100.000 em duas parcelas: 5% em 60 dias (sem efeito relevante) e R$ 95.000 em 24 meses, taxa de 10%. Qual o AVP?",
  options:["R$ 8.636,37","R$ 13.636,37","R$ 9.090,91","R$ 5.000"],
  answer:0,
  why:"VP = 95.000/1,1 = 86.363,63. A parcela de 5.000 não é ajustada, por ser curto prazo sem efeito relevante."},

S16:{t:"sort", instr:"Como se apropria a reversão do ajuste a valor presente?",
  buckets:["Receita financeira","Receita operacional"],
  items:[["Empresa de serviços que concede, em caráter especial, prazo de 24 meses a um cliente",0],
         ["Regra geral do item 23 para ativos e passivos monetários qualificáveis",0],
         ["Varejista cujas vendas a prazo integram a estratégia operacional",1],
         ["Entidade que fundamenta que o financiamento a clientes faz parte de suas atividades operacionais",1]],
  why:"A regra é receita ou despesa financeira; a exceção exige fundamentar o financiamento como atividade operacional."},

S17:{t:"wordbank", instr:"Monte o lançamento da compra de matérias-primas por R$ 200.000 em 24 prestações, cujo valor à vista seria R$ 180.000",
  target:["D","Estoques","180.000","D","AVP","de","Fornecedores","20.000","C","Fornecedores","200.000"],
  extra:["Despesa","Financeira","Clientes"],
  why:"Os juros embutidos são expurgados do custo de aquisição e apropriados pela fluência do prazo."},

S18:{t:"mc", instr:"Obrigação tributária de R$ 100.000 com juros de 5% ao ano, sem correção monetária, em parcela única ao final de 24 meses. Taxa de mercado de 10% ao ano. Qual o valor presente inicial?",
  options:["R$ 91.115,70","R$ 110.250,00","R$ 100.000,00","R$ 82.644,63"],
  answer:0,
  why:"Primeiro o valor futuro pela taxa concedida (110.250), depois o valor presente pela taxa de mercado."},

S19:{t:"gap", instr:"Complete a regra dos efeitos fiscais (item 29)",
  before:"A taxa a ser aplicada não deve ser líquida de efeitos fiscais: deve ser aplicada ",
  after:" dos impostos.",
  options:["antes","depois","na proporção"], answer:0,
  why:"A taxa é bruta de efeitos fiscais — desconsidera a eventual economia de impostos."},

S20:{t:"gap", instr:"Complete a regra do item 22",
  before:"A quantificação do ajuste a valor presente deve ser realizada em base ",
  after:" pro rata die, a partir da origem de cada transação.",
  options:["exponencial","linear","simples"], answer:0,
  why:"Base exponencial é juros compostos; pro rata die é proporcionalmente ao dia."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Avançada 02","https://www.tecconcursos.com.br/s/Q2yFMb","Q2yFMb"],
  ["Caderno FCC — Contabilidade Avançada 02","https://www.tecconcursos.com.br/s/Q2yFMi","Q2yFMi"],
  ["Caderno FGV — Contabilidade Avançada 02","https://www.tecconcursos.com.br/s/Q2yFMm","Q2yFMm"],
  ["Caderno VUNESP — Contabilidade Avançada 02","https://www.tecconcursos.com.br/s/Q2yFMr","Q2yFMr"]
];
var TECNOTA = "A banca ganha dinheiro em três fronteiras deste resumo. A primeira é confundir valor presente com o próprio ajuste: no exemplo da venda de R$ 100.000 em duas parcelas de R$ 50.000 a 10% ao ano, o valor presente é R$ 78.887 e o AVP é a diferença, R$ 21.113. A segunda é a troca entre valor presente e valor justo — na Cia. Alfa, o valor justo ao final do 1º ano usa a taxa de mercado (12%), dando R$ 7.971,93, enquanto o valor presente usaria a taxa da transação (10%) e daria R$ 8.264; e, para a receita financeira, vale sempre a taxa da data de origem. A terceira é a lista do que não se ajusta a valor presente: adiantamento em dinheiro, IR diferido ativo ou passivo, financiamentos do BNDES com taxas fora do mercado e mútuo sem data de vencimento — mais o item 21, que também alcança operações de curto prazo quando houver efeito relevante.";

var UNITS = [
  {n:1, title:"O AVP, alcance e valor justo", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Conceito, fórmula, alcance e VP × VJ", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · conceito, fórmula e lançamento", xp:25, data:["S1","S2","T0","T1","T2","T3","T4","T5","T6"]},
    {id:"K3", type:"drill",  title:"Praticar · objetivo, alcance e valor justo", xp:25, data:["S3","S4","S5","S6","T7","T8","T9","T10","T11","T12"]},
    {id:"K4", type:"drill",  title:"Praticar · as duas questões-exemplo",       xp:25, data:["S7","S8","T13","T14","T15","T16","T17","T18","T19"]},
    {id:"K5", type:"flash",  title:"Flashcards · conceito, alcance e valor justo", xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}
  ]},
  {n:2, title:"Mensuração e exclusões", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Itens 07 a 13 e o que não se ajusta",      xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · diretrizes do item 07",         xp:25, data:["S9","S10","T20","T21","T22","T23","T24","T25"]},
    {id:"K8", type:"drill",  title:"Praticar · monetário e exclusões",         xp:25, data:["S11","S12","T26","T27","T28","T29","T30","T31","T32"]},
    {id:"K9", type:"drill",  title:"Praticar · risco, momento inicial e taxa efetiva", xp:25, data:["S13","T33","T34","T35","T36"]},
    {id:"K10",type:"flash",  title:"Flashcards · mensuração e exclusões",      xp:15, data:[16,17,18,19,20,21,22,23,24,25,26,27,28]}
  ]},
  {n:3, title:"Itens 21 a 32 e o ICMS", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Item 21, reversões, item 32 e ICMS",       xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · item 21 e o cálculo do AVP",    xp:25, data:["S14","S15","T37","T38","T39","T40","T41","T42"]},
    {id:"K13",type:"drill",  title:"Praticar · reversões e pro rata die",      xp:25, data:["S16","S20","T43","T44","T45","T46"]},
    {id:"K14",type:"drill",  title:"Praticar · efeitos fiscais, item 32 e ICMS", xp:25, data:["S17","S18","S19","T47","T48","T49","T50","T51","T52"]},
    {id:"K15",type:"flash",  title:"Flashcards · itens 21 a 32 e ICMS",        xp:15, data:[29,30,31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                  xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                     xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                    xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 02 de Contabilidade Avançada (Radegondes) ---------- */
var COM={
0:"<p>Certo. É a definição que abre o resumo: <b>“o ajuste a valor presente nada mais é do que você trazer a valores atuais (presente) algo que seria recebido ou pago no futuro”</b>.</p><p>Guarde a fórmula que o resumo usa em todos os exemplos: <b>Valor Presente = Valor Futuro ÷ (1 + i)<sup>t</sup></b>, com <b>i</b> igual à taxa de desconto e <b>t</b> ao prazo.</p><p class='fb-fonte'>Resumo 02 · <i>CPC 12 — o que é o ajuste a valor presente</i></p>",
1:"<p>Certo, e é o exemplo da sociedade empresária <b>ABC</b>, com os mesmos números.</p><p>Duas parcelas de <b>R$ 50.000</b>, uma em 2 anos e outra em 3, a <b>10% ao ano</b>: <b>50.000/(1,10)<sup>2</sup> + 50.000/(1,10)<sup>3</sup> = 41.322 + 37.565 = R$ 78.887</b>. O resumo comenta que o valor presente fica <b>um pouco menor</b> que o valor de venda a prazo.</p><p class='fb-fonte'>Resumo 02 · <i>CPC 12 — exemplo da Cia. ABC</i></p>",
2:"<p>Certo pela conta literal do resumo: <b>Ajuste a Valor Presente = Receita Bruta de Vendas – Valor Presente</b>, ou seja, <b>100.000 – 78.887 = R$ 21.113</b>.</p><p>Essa diferença é a <b>dedução da receita bruta na DRE</b>.</p><p class='fb-fonte'>Resumo 02 · <i>CPC 12 — exemplo da Cia. ABC</i></p>",
3:"<p>Errado — trocou o valor presente pelo ajuste. Os <b>R$ 78.887</b> são o <b>valor presente</b> das duas parcelas; o <b>AVP</b> é a <b>diferença</b> entre o valor de venda e esse valor presente.</p><p>No exemplo: <b>100.000 – 78.887 = R$ 21.113</b>. É a troca mais barata que a banca pode fazer neste assunto.</p><p class='fb-fonte'>Resumo 02 · <i>CPC 12 — exemplo da Cia. ABC</i></p>",
4:"<p>Certo. O resumo repete a informação em todos os exemplos: a diferença entre o valor presente e o valor de venda <b>“representa o ajuste a valor presente (dedução da receita bruta na DRE)”</b>.</p><p>Na DRE do exemplo do item 21 isso aparece em linha própria: Receita Bruta 100.000, <b>(–) Ajuste a Valor Presente (8.636,37)</b>, (=) Receita Líquida 91.363,63.</p><p class='fb-fonte'>Resumo 02 · <i>CPC 12 — o que é o ajuste a valor presente</i></p>",
5:"<p>Errado — os valores estão invertidos. O lançamento do resumo é: <b>D – Clientes (Ativo) R$ 100.000</b> · <b>C – Ajuste a Valor Presente de Clientes (Retificadora do Ativo) R$ 21.113</b> · <b>C – Receita Líquida com Vendas (DRE) R$ 78.887</b>.</p><p>A lógica: o direito entra pelo <b>valor nominal</b> que será cobrado do cliente, e a receita entra pelo <b>valor presente</b>.</p><p class='fb-fonte'>Resumo 02 · <i>CPC 12 — exemplo da Cia. ABC</i></p>",
6:"<p>Certo. O próprio lançamento do resumo identifica a conta entre parênteses: <b>“C – Ajuste a Valor Presente de Clientes (Retificadora do Ativo)”</b>.</p><p>Quando o direito é de longo prazo, o resumo escreve <b>“Retificadora do ANC”</b> — é o caso do exemplo dos R$ 130.000 de serviços. A natureza não muda: conta <b>credora, redutora do ativo</b>.</p><p class='fb-fonte'>Resumo 02 · <i>CPC 12 — exemplo da Cia. ABC</i></p>",
7:"<p>Certo, é a transcrição do <b>item 01</b>: <b>“o objetivo deste Pronunciamento é estabelecer os requisitos básicos a serem observados quando da apuração do Ajuste a Valor Presente de elementos do ativo e do passivo quando da elaboração de demonstrações contábeis”</b>.</p><p>Repare que o objetivo alcança <b>ativo e passivo</b>, não só recebíveis.</p><p class='fb-fonte'>Resumo 02 · <i>Objetivo do CPC 12 — item 01</i></p>",
8:"<p>Errado — a assertiva <b>inverteu</b> os dois termos. O <b>item 04</b> diz que o Pronunciamento <b>“trata essencialmente de questões de mensuração, não alcançando com detalhes questões de reconhecimento”</b>.</p><p>O comentário do resumo fecha: o CPC 12 se concentra no <b>“por quanto registrar”</b>, deixando o <b>“quando registrar”</b> para outros pronunciamentos.</p><p class='fb-fonte'>Resumo 02 · <i>Alcance — item 04</i></p>",
9:"<p>Certo, literal do <b>item 04</b>: a dimensão do <b>“reconhecimento” envolve a decisão de “quando registrar”</b> ao passo que a da <b>“mensuração” envolve a decisão de “por quanto registrar”</b>.</p><p>É o par que resolve qualquer questão de alcance do CPC 12: ele é norma de <b>mensuração</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Alcance — item 04</i></p>",
10:"<p>Certo pelo <b>item 05</b>: determina-se que <b>“a mensuração contábil a valor presente seja aplicada no reconhecimento inicial de ativos e passivos”</b>.</p><p>A exceção vem logo depois, e é tratada como <b>rara</b>: a <b>renegociação de dívida</b> com novos termos, em que o AVP é aplicado como se fosse <b>nova medição</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Alcance — item 05</i></p>",
11:"<p>Certo, é a exceção do <b>item 05</b>: nessas situações o AVP é aplicado <b>“como se fosse nova medição de ativos e passivos”</b>, e o item ressalta que são <b>“raras e são matéria para julgamento daqueles que preparam e auditam demonstrações contábeis”</b>.</p><p>O exemplo do resumo: dívida a pagar em <b>5 anos a 10% ao ano</b> renegociada para <b>10 anos a 8% ao ano</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Alcance — item 05</i></p>",
12:"<p>Errado nas duas afirmações, e o <b>item 06</b> é expresso: <b>“é necessário observar que a aplicação do conceito de ajuste a valor presente NEM SEMPRE equipara o ativo ou o passivo a seu valor justo. Por isso, valor presente e valor justo NÃO são sinônimos”</b>.</p><p>A palavra <b>sempre</b> é o que derruba a assertiva.</p><p class='fb-fonte'>Resumo 02 · <i>Alcance — item 06</i></p>",
13:"<p>Certo — são as duas últimas linhas do quadro comparativo do resumo. O <b>valor presente</b> <b>“tem relação com a Taxa de Juros do contrato, não sofre alteração”</b>; o <b>valor justo</b> <b>“pode sofrer alteração com o passar do tempo em decorrência das condições do mercado”</b>.</p><p>É exatamente por isso que, na Cia. Alfa, a mudança da taxa de 10% para 12% altera o <b>valor justo</b>, e não o valor presente da transação.</p><p class='fb-fonte'>Resumo 02 · <i>Valor Presente x Valor Justo</i></p>",
14:"<p>Errado no <b>nunca</b>. O resumo, depois de repetir o quadro comparativo, registra: <b>“em algumas circunstâncias o valor justo e o valor presente podem coincidir”</b>.</p><p>Não serem sinônimos significa que <b>nem sempre</b> coincidem — não que jamais coincidam.</p><p class='fb-fonte'>Resumo 02 · <i>Valor Presente x Valor Justo</i></p>",
15:"<p>Errado — inverteu qual valor prevalece. No exemplo do <b>item 06</b>, a compra financiada por <b>cliente especial</b> com <b>taxa não de mercado</b> leva o ativo, no comprador, a valor <b>inferior</b> ao valor justo, e <b>“nesse caso, prevalece contabilmente o valor calculado a valor presente, inferior ao valor justo, por representar melhor o efetivo custo de aquisição para o comprador”</b>.</p><p>Do outro lado, o vendedor reconhece a contrapartida do AVP do recebível como <b>redução da receita</b>, evidenciando venda abaixo do praticado no mercado.</p><p class='fb-fonte'>Resumo 02 · <i>Alcance — item 06</i></p>",
16:"<p>Certo, é a resolução da questão-exemplo da <b>Cia. Alfa</b> (gabarito B). Como a questão pede o <b>valor justo</b> ao final do 1º ano, usa-se a <b>taxa de mercado (12%)</b> e o prazo que <b>ainda falta</b>, de 2 anos:</p><p><b>10.000/(1,12)<sup>2</sup> = 10.000/1,2544 = R$ 7.971,93</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Valor Presente x Valor Justo — questão-exemplo</i></p>",
17:"<p>Errado na taxa. A observação do resumo é literal: <b>“se a questão quisesse o Valor Presente, deveríamos utilizar a taxa de desconto considerada na transação (10%). Nesse caso, acharíamos a alternativa C como resposta”</b> — isto é, <b>R$ 8.264</b>.</p><p>O par de memória: <b>valor justo</b> → taxa de <b>mercado</b> do momento; <b>valor presente</b> → taxa da <b>transação</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Valor Presente x Valor Justo — questão-exemplo</i></p>",
18:"<p>Errado, e é o caixa <b>ATENÇÃO!</b> do resumo, palavra por palavra: <b>“no caso de aplicação da técnica de ajuste a valor presente, passado o primeiro ano, o reconhecimento da receita financeira deve respeitar a taxa de juros da transação na data de sua origem, independentemente da taxa de juros de mercado em períodos subsequentes”</b>.</p><p>A taxa de mercado serve para apurar <b>valor justo</b>, não para apropriar a <b>receita financeira</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Valor Presente x Valor Justo — Atenção!</i></p>",
19:"<p>Certo — é o gabarito <b>C</b> da questão-exemplo do resumo, com os mesmos números.</p><p>Duas parcelas de <b>35.000</b> a <b>3% ao mês</b>: <b>VP = 33.980,58 + 32.990,85 = 66.971,43</b>; <b>AVP = 70.000 – 66.971,43 = 3.028,56</b>; <b>CMV = 90% de 40.000 = 36.000</b>. Logo, <b>Lucro Bruto = 66.971,43 – 36.000 = R$ 30.971,43</b>.</p><p>Repare que <b>despesa de aluguel (10.000)</b> e <b>despesa financeira (5.000)</b> ficam <b>abaixo</b> do lucro bruto e não entram nessa conta.</p><p class='fb-fonte'>Resumo 02 · <i>Questão-exemplo — lucro bruto</i></p>",
20:"<p>Errado, e o <b>item 07</b> diz o contrário com todas as letras: a questão mais relevante <b>“não é a enumeração minuciosa de quais ativos ou passivos são abarcados pela norma, mas o estabelecimento de diretrizes gerais e de metas a serem alcançadas”</b>.</p><p>O exemplo do resumo ilustra: o CPC 12 não lista quais empréstimos ajustar, mas dá <b>diretrizes</b> sobre qual taxa usar e como estimar o valor presente.</p><p class='fb-fonte'>Resumo 02 · <i>Mensuração — item 07</i></p>",
21:"<p>Certo, é a letra <b>(a)</b> do item 07: transação que dá origem a ativo, passivo, receita, despesa ou outra mutação do PL <b>“cuja contrapartida é um ativo ou um passivo com liquidação financeira (recebimento ou pagamento) em data diferente da data do reconhecimento desses elementos”</b>.</p><p>É a diretriz que explica por que a venda a prazo se ajusta e a venda à vista, não.</p><p class='fb-fonte'>Resumo 02 · <i>Mensuração — item 07</i></p>",
22:"<p>Certo, é a letra <b>(b)</b>: <b>“reconhecimento periódico de mudanças de valor, utilidade ou substância de ativos ou passivos similares emprega método de alocação de descontos”</b>.</p><p>Guarde as três letras do item 07 em bloco: <b>(a)</b> liquidação em data diferente do reconhecimento · <b>(b)</b> método de alocação de descontos · <b>(c)</b> conjunto particular de fluxos de caixa estimados.</p><p class='fb-fonte'>Resumo 02 · <i>Mensuração — item 07</i></p>",
23:"<p>Certo, é a letra <b>(c)</b> do item 07: <b>“conjunto particular de fluxos de caixa estimados claramente associado a um ativo ou a um passivo”</b>.</p><p>O adjetivo que a banca gosta de retirar é <b>claramente associado</b> — sem essa associação, não há a característica.</p><p class='fb-fonte'>Resumo 02 · <i>Mensuração — item 07</i></p>",
24:"<p>Certo pelo <b>item 09</b>: <b>“ativos e passivos monetários com juros implícitos ou explícitos embutidos devem ser mensurados pelo seu valor presente quando do seu reconhecimento inicial, por ser este o valor de custo original dentro da filosofia de valor justo (fair value)”</b>.</p><p>Note que o item alcança tanto os juros <b>implícitos</b> quanto os <b>explícitos</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Mensuração — item 09</i></p>",
25:"<p>Errado — é justamente o que o item 09 proíbe: <b>“a esse respeito, uma vez ajustado o item não monetário, NÃO deve mais ser submetido a ajustes subsequentes no que respeita à figura de juros embutidos”</b>.</p><p>O ajuste do item não monetário é <b>uma vez só</b>, na contrapartida do reconhecimento inicial.</p><p class='fb-fonte'>Resumo 02 · <i>Mensuração — item 09</i></p>",
26:"<p>Certo — é o <b>quadro comparativo</b> do resumo. <b>Ativo monetário</b>: aquele <b>“mantido na forma de dinheiro ou que seja facilmente conversível em dinheiro”</b> — dinheiro em caixa, depósitos bancários, aplicações financeiras de curto prazo. <b>Ativo não monetário</b>: o que <b>“não seja prontamente conversível em dinheiro ou que tenha um valor monetário incerto”</b> — equipamentos, veículos, estoques, adiantamento em dinheiro, patentes, marcas registradas, direitos autorais.</p><p>O resumo resume a diferença na <b>facilidade de conversão em dinheiro</b> e na <b>maneira como o valor é determinado</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Mensuração — quadro comparativo ativo monetário e não monetário</i></p>",
27:"<p>Errado no <b>todo</b>. A linha final do quadro é expressa: <b>“nem todo ativo não monetário está sujeito ao efeito do ajuste a valor presente”</b>, e o item 09 repete: <b>“nem todo ativo ou passivo não monetário está sujeito ao efeito do ajuste a valor presente”</b>.</p><p>Os <b>monetários</b>, sim, devem ser mensurados a valor presente no reconhecimento inicial.</p><p class='fb-fonte'>Resumo 02 · <i>Mensuração — item 09</i></p>",
28:"<p>Certo, é o exemplo que o próprio item 09 dá: <b>“um item não monetário que, pela sua natureza, não está sujeito ao ajuste a valor presente é o adiantamento em dinheiro para recebimento ou pagamento em bens e serviços”</b>.</p><p>No exemplo do resumo — adiantamento para compra de equipamento — <b>não há necessidade de considerar o tempo de espera</b> até a aquisição; quando o bem é entregue, o adiantamento é baixado contra o registro do equipamento.</p><p class='fb-fonte'>Resumo 02 · <i>Mensuração — item 09</i></p>",
29:"<p>Errado — inverteu a hierarquia. O <b>item 10</b> manda observar o pronunciamento específico e afirma: <b>“a regra específica sempre prevalece à regra geral”</b>.</p><p>O caso especial citado é o do <b>Imposto de Renda Diferido Ativo e Passivo</b>, objeto de pronunciamento próprio e <b>não passível de AVP</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Mensuração — item 10</i></p>",
30:"<p>Errado. O <b>item 10</b> diz que o IR Diferido Ativo e Passivo, <b>“conforme previsto nas Normas Internacionais de Contabilidade, NÃO são passíveis de ajuste a valor presente, o que deve ser observado desde a implementação deste Pronunciamento”</b>.</p><p>O caixa <b>ATENÇÃO!</b> do resumo lista as duas exclusões desse trecho: <b>adiantamento em dinheiro</b> (item 09) e <b>IR Diferido Ativo ou Passivo</b> (item 10).</p><p class='fb-fonte'>Resumo 02 · <i>Mensuração — item 10 e Atenção!</i></p>",
31:"<p>Errado — está na lista do que <b>não</b> se ajusta. O resumo é direto: <b>“não estão sujeitos ao Ajuste a Valor Presente (AVP) os financiamentos do BNDES contratados com taxas de juros diferentes das taxas praticadas pelo mercado em geral para outras modalidades de empréstimos”</b>.</p><p>A razão do exemplo: as taxas do BNDES seguem as condições específicas do projeto e podem ser inferiores às de empréstimos em geral.</p><p class='fb-fonte'>Resumo 02 · <i>Financiamentos do BNDES</i></p>",
32:"<p>Certo. O resumo explica que muitos mútuos entre <b>partes relacionadas</b> <b>“não possuem data prevista para vencimento, o que impossibilita o cálculo do AVP”</b>, e que no mútuo <b>on demand</b> <b>“considera-se que o vencimento é à vista, a critério do credor”</b>.</p><p><b>Mútuo</b>, na definição do resumo, é o acordo formal em que uma parte empresta dinheiro ou bens e a outra devolve o valor com os <b>juros acordados em prazo determinado</b> — sem prazo, não há base para estimar o valor presente.</p><p class='fb-fonte'>Resumo 02 · <i>Contrato de mútuo sem data de vencimento</i></p>",
33:"<p>Errado na segunda metade. O <b>item 13</b> exige as duas coisas: as incertezas <b>“são obrigatoriamente levadas em consideração para efeito de mensuração”</b> e o <b>“preço” que participantes do mercado estão dispostos a “cobrar” para assumir riscos</b> — <b>“o prêmio pelo risco”</b> — <b>“deve ser igualmente avaliado”</b>.</p><p>No exemplo do resumo, a dívida de <b>R$ 100.000</b> a pagar em dois anos é mensurada em <b>R$ 90.000</b> justamente porque esse valor reflete <b>as incertezas e o prêmio pelo risco</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Risco e incerteza: taxa de desconto — item 13</i></p>",
34:"<p>Certo, é a regra da seção do resumo: o AVP <b>“deve ser calculado no momento inicial da operação, considerando os fluxos de caixa da correspondente operação (valor, data e todos os termos e as condições contratados), bem como a taxa de desconto aplicável à transação, na data de sua ocorrência”</b>.</p><p>Fixe o par: <b>momento inicial</b> e <b>taxa da data da ocorrência</b> — não a taxa de mercado futura.</p><p class='fb-fonte'>Resumo 02 · <i>Momento em que deverá ser contabilizado o AVP</i></p>",
35:"<p>Certo, é o exemplo do resumo com os mesmos números: <b>100.000/(1 + 0,10)<sup>2</sup> = 100.000/1,21 = R$ 82.644,62</b>.</p><p>A empresa <b>“registrará esse valor no momento inicial da operação em sua contabilidade, ao invés do valor nominal de R$ 100.000”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Momento em que deverá ser contabilizado o AVP</i></p>",
36:"<p>Certo nas duas partes. O resumo diz que <b>“o CPC 12 prevê a adoção do método de taxa efetiva de juros no registro inicial da operação a fim de refletir os efeitos contábeis depois do registro inicial”</b>, de modo que os juros embutidos (receita ou despesa financeira) sigam essa taxa efetiva.</p><p>E completa: <b>“o mecanismo do AVP não pode mudar o valor contratado entre as partes”</b> — no exemplo, <b>“a apropriação dos juros deverá restabelecer esse valor”</b> de R$ 100.000 até o vencimento.</p><p class='fb-fonte'>Resumo 02 · <i>Momento em que deverá ser contabilizado o AVP</i></p>",
37:"<p>Certo, é a transcrição do <b>item 21</b>: <b>“os elementos integrantes do ativo e do passivo decorrentes de operações de longo prazo, ou de curto prazo quando houver efeito relevante, devem ser ajustados a valor presente”</b>.</p><p>O esquema do resumo desenha os dois ramos: <b>operações de LONGO prazo</b> e <b>operações de CURTO prazo</b>, estas <b>quando houver efeito relevante</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Diretrizes mais específicas — item 21</i></p>",
38:"<p>Errado — a assertiva apagou metade do item 21. As operações de <b>curto prazo</b> também entram, <b>quando houver efeito relevante</b>.</p><p>O exemplo do resumo mostra os dois lados: a parcela de <b>R$ 5.000</b> a 60 dias foi considerada <b>não material</b> e não se ajustou, mas a de <b>R$ 95.000</b> em 24 meses foi trazida a valor presente. O critério é a <b>relevância</b>, não o prazo isolado.</p><p class='fb-fonte'>Resumo 02 · <i>Diretrizes mais específicas — item 21</i></p>",
39:"<p>Errado no marco temporal da taxa. O <b>item 21</b> exige taxas de desconto que reflitam as melhores avaliações do mercado quanto ao valor do dinheiro no tempo e aos riscos específicos do ativo e do passivo <b>“em suas datas originais”</b>, e não nas datas de encerramento do balanço.</p><p>Casa com o <b>ATENÇÃO!</b> do resumo: passado o primeiro ano, a receita financeira respeita a <b>taxa da transação na data de sua origem</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Diretrizes mais específicas — item 21</i></p>",
40:"<p>Certo, com os números do exemplo do resumo: <b>VP = 95.000/(1 + 0,10)<sup>1</sup> = 95.000/1,1 = 86.363,63</b> e <b>AVP = 95.000 – 86.363,63 = 8.636,37</b>.</p><p>Só a <b>segunda</b> parcela é ajustada, porque a primeira (5% de R$ 100.000) é de <b>curto prazo sem efeito relevante</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Diretrizes mais específicas — item 21</i></p>",
41:"<p>Errado. O enunciado do resumo é explícito: <b>“a parcela da venda de curto prazo (60 dias) foi considerada não material. Ou seja, os 5% de R$100.000 foi considerado sem efeitos relevantes”</b>.</p><p>Por isso <b>“devemos trazer apenas o valor de R$95.000 a valor presente”</b>. Ajustar os R$ 5.000 é o erro que a banca quer que você cometa.</p><p class='fb-fonte'>Resumo 02 · <i>Diretrizes mais específicas — item 21</i></p>",
42:"<p>Certo — é a DRE do exemplo, linha por linha: Receita Bruta de Vendas <b>100.000</b>, (–) Ajuste a Valor Presente <b>(8.636,37)</b>, (=) Receita Líquida de Vendas <b>91.363,63</b>, (–) CMV <b>(80.000)</b>, (=) Lucro Bruto <b>R$ 11.363,63</b>.</p><p>O estoque vendido era de <b>R$ 80.000</b>, e foi vendido por inteiro.</p><p class='fb-fonte'>Resumo 02 · <i>Diretrizes mais específicas — item 21</i></p>",
43:"<p>Errado por uma palavra. O <b>item 22</b> manda quantificar o AVP <b>“em base exponencial ‘pro rata die’, a partir da origem de cada transação, sendo os seus efeitos apropriados nas contas a que se vinculam”</b>.</p><p>O comentário do resumo traduz: <b>base exponencial = juros compostos</b>; <b>pro rata die = proporcionalmente ao dia</b>. No exemplo, o empréstimo de R$ 50.000 quitado ao final do 2º ano tem o ajuste calculado <b>pro rata die</b>, pelos dias que faltavam.</p><p class='fb-fonte'>Resumo 02 · <i>Diretrizes mais específicas — item 22</i></p>",
44:"<p>Certo, é a regra do <b>item 23</b>: <b>“as reversões dos ajustes a valor presente dos ativos e passivos monetários qualificáveis devem ser apropriadas como receitas ou despesas financeiras”</b>.</p><p>O esquema do resumo põe assim: a reversão do AVP do saldo de clientes é <b>RECEITA FINANCEIRA</b>, <b>exceto</b> se a entidade fundamentar que o financiamento a clientes faz parte de suas atividades operacionais.</p><p class='fb-fonte'>Resumo 02 · <i>Diretrizes mais específicas — item 23</i></p>",
45:"<p>Certo, é a exceção do item 23: <b>“a não ser que a entidade possa devidamente fundamentar que o financiamento feito a seus clientes faça parte de suas atividades operacionais, quando então as reversões serão apropriadas como receita operacional”</b>.</p><p>O item dá a hipótese típica: a entidade opera em <b>dois segmentos distintos</b> — <b>(i) venda de produtos e serviços</b> e <b>(ii) financiamento das vendas a prazo</b> — desde que relevantes o ajuste e sua evidenciação. É o exemplo do <b>varejo</b> no resumo.</p><p class='fb-fonte'>Resumo 02 · <i>Diretrizes mais específicas — item 23</i></p>",
46:"<p>Certo, é o <b>EXEMPLO 01</b> do item 23, com os mesmos valores: <b>D – Clientes R$ 130.000 (Ativo Não Circulante)</b> · <b>C – Ajuste a Valor Presente de Clientes R$ 30.000 (Retificadora do ANC)</b> · <b>C – Receita Líquida de Serviços R$ 100.000 (DRE)</b>.</p><p>O preço a prazo era <b>30% superior</b> ao de R$ 100.000 à vista, e o resumo trata a diferença como <b>“mero financiamento”</b>: a receita é reconhecida pelo valor que seria praticado <b>à vista</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Diretrizes mais específicas — item 23</i></p>",
47:"<p>Errado. O resumo avisa: <b>“note que o valor de R$ 30.000 não impacta o resultado na data da venda, mas apenas ao longo do período compreendido entre a data da venda e o recebimento do direito de longo prazo”</b>.</p><p>Respeitando a <b>competência</b>, a entidade reconhece <b>mensalmente</b>: <b>D – Ajuste a Valor Presente – Clientes</b> (retificadora do ANC) · <b>C – Receita Financeira</b> (resultado).</p><p class='fb-fonte'>Resumo 02 · <i>Diretrizes mais específicas — item 23</i></p>",
48:"<p>Errado — está ao contrário do <b>item 29</b>: <b>“para fins de desconto a valor presente de ativos e passivos, a taxa a ser aplicada NÃO deve ser líquida de efeitos fiscais e, sim, ANTES dos impostos”</b>.</p><p>O comentário do resumo fecha: a taxa <b>não</b> considera a eventual economia de impostos, ou seja, deve ser <b>bruta de efeitos fiscais</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Efeitos fiscais — item 29</i></p>",
49:"<p>Certo, é o lançamento do exemplo do <b>item 32</b>: <b>D – Estoques R$ 180.000 (Ativo)</b> · <b>D – AVP de Fornecedores R$ 20.000 (Retificadora do Passivo)</b> · <b>C – Fornecedores R$ 200.000 (Passivo)</b>.</p><p>A regra que o sustenta: <b>“juros embutidos devem ser expurgados do custo de aquisição das mercadorias e devem ser apropriados pela fluência do prazo”</b>. Mês a mês: <b>D – Despesa Financeira</b> · <b>C – AVP de Fornecedores</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Operação comercial que se caracterize como de financiamento — item 32</i></p>",
50:"<p>Errado na conta de destino dos ajustes. O resumo diz que as mudanças de prática contábil <b>“deveriam ser consideradas de forma retrospectiva para todos os períodos apresentados, e os ajustes contabilizados na conta de lucros (ou prejuízos) acumulados, líquidos dos efeitos tributários”</b>.</p><p>E ainda: devem ser demonstrados <b>“como se tivessem sido contabilizados no início do período mais antigo”</b> apresentado. Nada de resultado do exercício.</p><p class='fb-fonte'>Resumo 02 · <i>Mudança de prática contábil</i></p>",
51:"<p>Errado — inverteu a regra geral. O resumo: <b>“como regra geral NÃO se aplica o AVP para saldos credores de ICMS que estão disponíveis para compensação imediata”</b>.</p><p>O AVP entra nos <b>parcelamentos de ICMS como incentivo fiscal</b>, em que o saldo a pagar é diferido para longo prazo <b>sem juros ou sem atualização monetária</b>, ou <b>com juros bem aquém das condições normais de mercado</b> — no exemplo, 3% ao ano contra mercado de 15% ao ano.</p><p class='fb-fonte'>Resumo 02 · <i>Ajuste a valor presente no saldo de ICMS</i></p>",
52:"<p>Certo, é o gabarito <b>D</b> da questão-exemplo, em dois passos, como o resumo resolve.</p><p><b>1) Valor futuro pela taxa concedida (5%):</b> 100.000 × (1,05)<sup>2</sup> = 100.000 × 1,1025 = <b>110.250</b>, o saldo a ser pago após 2 anos. <b>2) Valor presente pela taxa de mercado (10%):</b> 110.250/(1,1)<sup>2</sup> = <b>R$ 91.115,70</b>.</p><p>Quem desconta direto os R$ 100.000 cai em R$ 82.644,63, que é a pegadinha da alternativa E.</p><p class='fb-fonte'>Resumo 02 · <i>Ajuste a valor presente no saldo de ICMS — questão-exemplo</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"02", nome:"CPC 12 — Ajuste a Valor Presente", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
