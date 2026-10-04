/* Contabilidade Avançada — Módulo 06: CPC 01 — Redução ao Valor Recuperável de Ativos (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cavan06 = (function(){
"use strict";

var CARDS = [
  ["Do que trata o Pronunciamento Técnico CPC 01?","Da <b>Redução ao Valor Recuperável de Ativos</b> — o teste de <b>recuperabilidade</b> (impairment)."],
  ["O que é valor recuperável de um ativo ou de uma UGC?","É o <b>MAIOR</b> montante entre o seu <b>valor justo líquido de despesa de venda</b> e o seu <b>valor em uso</b> — o maior valor que a empresa espera receber ao <b>vender</b> o ativo ou ao <b>usá-lo</b>."],
  ["Equipamento com valor justo líquido de despesa de venda de R$ 90.000 e valor em uso de R$ 110.000. Qual o valor recuperável?","<b>R$ 110.000</b> — é o <b>maior</b> dos dois."],
  ["Qual o objetivo do CPC 01 (item 01)?","Estabelecer procedimentos para <b>assegurar que os ativos estejam registrados contabilmente por valor que não exceda seus valores de recuperação</b>."],
  ["Quando um ativo está registrado por valor que excede seu valor de recuperação, e o que o CPC 01 exige?","Quando o <b>valor contábil exceder o montante a ser recuperado pelo uso ou pela venda</b>. Aí o ativo é <b>sujeito ao reconhecimento de perdas</b> e a entidade deve reconhecer <b>ajuste para perdas por desvalorização</b>. O CPC também especifica <b>quando reverter</b> e as <b>divulgações requeridas</b>."],
  ["Veículo registrado por R$ 50.000 cujo valor de mercado é R$ 30.000. Qual o ajuste?","Ajuste para perdas por desvalorização de <b>R$ 20.000</b> — o valor contábil excede o valor de recuperação (R$ 30.000)."],
  ["A que o CPC 01 NÃO se aplica (primeira parte da lista)?","<b>Estoques</b> (CPC 16) · <b>ativos de contrato</b> e <b>ativos resultantes de custos para obter ou cumprir contratos</b> (CPC 47) · <b>ativos fiscais diferidos</b> (CPC 32) · <b>ativos advindos de planos de benefícios a empregados</b> (CPC 33)."],
  ["A que o CPC 01 NÃO se aplica (segunda parte da lista)?","<b>Ativos financeiros</b> do CPC 48 · <b>propriedade para investimento mensurada ao valor justo</b> · <b>ativos biológicos</b> do CPC 29 mensurados ao valor justo líquido de despesas de vender · <b>custos de aquisição diferidos e intangíveis de direitos contratuais de Cia. de seguros</b> (CPC 11) · <b>ativos mantidos para venda</b> (CPC 31)."],
  ["O que é valor contábil (item 06)?","O montante pelo qual o ativo está <b>reconhecido no balanço depois da dedução</b> de toda respectiva <b>depreciação, amortização ou exaustão acumulada</b> e <b>ajuste para perdas</b>."],
  ["Máquina comprada por R$ 100.000, depreciação anual de R$ 5.000 por 5 anos e perda por desvalorização de R$ 5.000. Qual o valor contábil?","<b>R$ 70.000</b> — 100.000 − 25.000 (depreciação acumulada) − 5.000 (ajuste para perdas)."],
  ["O que é unidade geradora de caixa?","O <b>MENOR grupo identificável de ativos</b> que gera entradas de caixa <b>em grande parte independentes</b> das entradas de caixa de outros ativos ou grupos de ativos. Exemplo: <b>cada loja</b> de uma rede de varejo."],
  ["O que são ativos corporativos?","Ativos, <b>exceto o goodwill</b>, que contribuem, <b>mesmo que indiretamente</b>, para os fluxos de caixa futuros <b>tanto da UGC sob revisão quanto de outras UGC</b>."],
  ["O que é valor justo (item 06)?","O <b>preço que seria recebido pela venda de um ativo</b> ou <b>pago pela transferência de um passivo</b> em uma <b>transação não forçada</b> entre <b>participantes do mercado</b> na <b>data de mensuração</b>."],
  ["O que é perda por desvalorização? Exemplo do resumo.","O montante pelo qual o <b>valor contábil</b> de um ativo ou de UGC <b>excede seu valor recuperável</b>. Terreno de valor contábil R$ 1.000.000 cujo valor de mercado caiu para R$ 800.000 → perda de <b>R$ 200.000</b>."],
  ["O que é vida útil (item 06)?","<b>(a)</b> o <b>período de tempo</b> durante o qual a entidade espera utilizar um ativo; <b>ou (b)</b> o <b>número de unidades de produção</b> ou de unidades semelhantes que a entidade espera obter do ativo."],
  ["O que é valor em uso, e como se calcula o valor presente?","É o <b>valor presente dos fluxos de caixa futuros esperados</b> que devem advir de um ativo ou de UGC. <b>Juros simples:</b> VP = VF ÷ (1 + i·t). <b>Juros compostos:</b> VP = VF ÷ (1 + i)<sup>t</sup>."],

  ["Quando a entidade deve avaliar se há indicação de desvalorização (item 09)?","<b>Ao fim de cada período de reporte</b>. Se houver alguma indicação, deve <b>estimar o valor recuperável</b> do ativo."],
  ["O que é período de reporte?","O período que a empresa usa para <b>relatar suas informações financeiras e contábeis</b> — aquele em que são preparadas as demonstrações (BP, DRE, DFC). No Brasil, normalmente <b>anual</b>, com algumas empresas optando por relatórios trimestrais ou semestrais."],
  ["O que se testa anualmente, independentemente de existir ou não indicação de desvalorização (item 10)?","O <b>ativo intangível com vida útil indefinida</b> · o <b>ativo intangível ainda não disponível para uso</b> · o <b>goodwill</b> em combinação de negócios."],
  ["Em que momento do ano o teste do intangível pode ser feito?","<b>A qualquer momento no período de um ano</b>, desde que executado, <b>todo ano, no mesmo período</b>. Intangíveis <b>diferentes</b> podem ser testados em <b>períodos diferentes</b>."],
  ["E o intangível reconhecido inicialmente durante o ano corrente?","Deve ter a redução ao valor recuperável testada <b>antes do fim do ano corrente</b>."],
  ["Quadro ATENÇÃO! sobre o goodwill","O Goodwill <b>não sofre amortização</b>, mas <b>está sujeito ao Teste de Recuperabilidade anual</b>."],
  ["O que é goodwill e como se calcula?","É o <b>valor excedente pago</b> pela aquisição de uma empresa ou pela participação nela, porque o comprador <b>espera valorização futura</b>. <b>Goodwill = Valor Pago − Valor Justo</b> (em regra, valor de mercado)."],
  ["Cia. A adquire 100% da Cia. B por R$ 1.000.000; o valor justo do PL de B é R$ 800.000. Qual o goodwill?","<b>R$ 200.000</b>."],
  ["Fontes EXTERNAS de informação — indicações (a) e (b)","<b>(a)</b> indicações observáveis de que o valor do ativo <b>diminuiu significativamente</b> no período, <b>mais do que se esperaria</b> da passagem do tempo ou do uso normal; <b>(b)</b> mudanças significativas com <b>efeito adverso</b>, ocorridas ou a ocorrer em futuro próximo, no ambiente <b>tecnológico, de mercado, econômico ou legal</b>."],
  ["Fontes EXTERNAS de informação — indicações (c) e (d)","<b>(c)</b> as <b>taxas de juros de mercado aumentaram</b> no período, e isso provavelmente afetará a <b>taxa de desconto</b> do valor em uso e <b>diminuirá materialmente</b> o valor recuperável; <b>(d)</b> o <b>valor contábil do PL da entidade é maior do que o valor de suas ações no mercado</b>."],
  ["Fontes INTERNAS de informação — indicações (e), (f) e (g)","<b>(e)</b> evidência de <b>obsolescência ou dano físico</b>; <b>(f)</b> mudanças significativas com efeito adverso na <b>extensão ou maneira de uso</b> — ativo <b>inativo ou ocioso</b>, planos de <b>descontinuidade ou reestruturação</b>, planos de <b>baixa antecipada</b>, reavaliação da vida útil como <b>finita em vez de indefinida</b>; <b>(g)</b> <b>relatório interno</b> indicando desempenho econômico <b>pior que o esperado</b>."],
  ["Dividendo de controlada ou coligada — indicação (h)","A investidora reconhece dividendo e há evidência de que: o <b>valor contábil do investimento nas demonstrações separadas excede os valores contábeis dos ativos líquidos da investida nas consolidadas</b> (incluindo eventual goodwill); <b>ou</b> o <b>dividendo excede o total de lucro abrangente</b> da investida no período em que é declarado."],
  ["Momento dos testes (item 98) — qual a ordem?","Primeiro o <b>ativo</b> individual com indicação, e só <b>depois</b> a <b>UGC que contém o ágio</b>. Do mesmo modo, primeiro a <b>UGC</b> com indicação, e só depois o <b>grupo de unidades</b> que contenha o ágio."],

  ["Item 19: é sempre necessário determinar os dois montantes?","Não. <b>Se qualquer um deles exceder o valor contábil</b>, o ativo <b>não tem desvalorização</b> e <b>não é necessário estimar o outro</b>. Exemplo: contábil R$ 100.000, valor justo líquido R$ 120.000, valor em uso R$ 80.000 → sem desvalorização."],
  ["Esquema: o que decorre da comparação valor contábil × valor recuperável?","Contábil <b>MAIOR</b> que o recuperável → <b>perda por desvalorização</b>. Contábil <b>MENOR</b> que o recuperável → <b>nenhum ajuste</b>, ou <b>reversão</b> caso existam <b>perdas já reconhecidas</b>."],
  ["Lançamento da perda por desvalorização","<b>D</b> Perdas por desvalorização do Ativo (<b>Despesas</b>) · <b>C</b> Perdas por desvalorização de Ativos (<b>conta retificadora do ativo</b>)."],
  ["Lançamento da reversão da perda por desvalorização","<b>D</b> Perdas por desvalorização de Ativos (conta retificadora do ativo) · <b>C</b> Reversão de perdas por desvalorização (<b>Receitas</b>)."],
  ["Ativo REAVALIADO — onde se reconhecem a perda e a reversão (item 120)?","Em <b>outros resultados abrangentes</b>, sob o título de <b>reserva de reavaliação</b> (no PL). <b>Perda:</b> D Reserva de Reavaliação (↓ PL) · C Perdas por desvalorização de Ativo Reavaliado. <b>Reversão:</b> D Perdas por desvalorização de Ativo Reavaliado · C Reserva de Reavaliação (↑ PL)."],
  ["Item 39: o que as estimativas de fluxos de caixa futuros DEVEM incluir?","<b>(a)</b> projeções de <b>entradas</b> de caixa do <b>uso contínuo</b> do ativo; <b>(b)</b> projeções de <b>saídas</b> necessariamente incorridas para gerar essas entradas — <b>inclusive as saídas para preparar o ativo para uso</b>; <b>(c)</b> se houver, <b>fluxos líquidos a receber (ou pagar) na baixa</b> do ativo ao término da vida útil."],
  ["Equipamento que produz 10.000 camisas por ano a R$ 10 cada, taxa de 10% ao ano. Qual o valor em uso?","Fluxo futuro de <b>R$ 100.000</b>. VP = 100.000 ÷ (1,1)<sup>1</sup> = <b>R$ 90.909,09</b>."],
  ["Item 43: o que as estimativas NÃO devem incluir, para evitar dupla contagem?","<b>(a)</b> entradas de caixa advindas de <b>ativos que geram entradas em grande parte independentes</b> das do ativo sob revisão (ex.: contas a receber); <b>(b)</b> <b>saídas referentes a obrigações já reconhecidas como passivos</b> (contas a pagar, passivos de planos de pensão e provisões)."],
  ["Exemplo da provisão judicial — como evitar a dupla contagem?","Ação estimada em <b>R$ 60.000</b> e provisionada (passivo no balanço). Mesmo com desfecho desfavorável de <b>R$ 70.000</b>, as estimativas de fluxos futuros <b>não devem incluir a saída dos R$ 60.000 já reconhecidos como passivo</b>."],
  ["Item 117: qual o limite da reversão de perda por desvalorização?","O aumento do valor contábil atribuível à reversão <b>não deve exceder o valor contábil que teria sido determinado</b> (líquido de depreciação, amortização ou exaustão) <b>caso nenhuma perda tivesse sido reconhecida em anos anteriores</b>. Não vale para o <b>goodwill</b>."],
  ["Terreno comprado por R$ 100.000 em 31/12/2020, com perdas de R$ 10.000 em 2021 e R$ 10.000 em 2022. Em 2023 o mercado se recupera em R$ 40.000. Qual a reversão?","Valor contábil máximo após a reversão: <b>R$ 100.000</b>. Logo, a empresa reverte apenas as perdas anteriores e reconhece <b>receita de reversão de R$ 20.000</b>."],
  ["Goodwill: reconhece perda? Reconhece reversão?","<b>Perda por desvalorização: SIM. Reversão de perda: NÃO.</b> Ágio de R$ 20.000 com perda de R$ 2.000 em 31/12/2022 fica em R$ 18.000 — e, mesmo com a melhora das expectativas em 2023, <b>não há reconhecimento de receita de reversão</b>."],
  ["Questão-exemplo: moto de R$ 20.000 (03/01/2015), uso por 4 anos e doação. Em 31/12/2016, valor em uso R$ 9.000 e valor líquido de venda R$ 11.000 com pintura de R$ 1.500. Qual o valor contábil em 01/01/2017?","Contábil antes do teste: 20.000 − 10.000 = <b>R$ 10.000</b>. Recuperável = maior entre 9.000 e (11.000 − 1.500) = <b>R$ 9.500</b>. Perda de <b>R$ 500</b> → <b>Valor Contábil = R$ 9.500</b>."]
];

var QS = [
  ["O Pronunciamento Técnico CPC 01 trata da redução ao valor recuperável de ativos.","C","CPC 01","Tema do pronunciamento."],
  ["Valor recuperável de um ativo ou de unidade geradora de caixa é o menor montante entre o seu valor justo líquido de despesa de venda e o seu valor em uso.","E","CEBRASPE","É o <b>maior</b> montante entre os dois."],
  ["Se o valor justo líquido de despesa de venda de um equipamento é de R$ 90.000 e o seu valor em uso é de R$ 110.000, o valor recuperável do equipamento é de R$ 110.000.","C","FCC","O maior dos dois."],
  ["O objetivo do CPC 01 é estabelecer procedimentos que a entidade deve aplicar para assegurar que seus ativos estejam registrados contabilmente por valor que não exceda seus valores de recuperação.","C","CPC 01, item 01","Literalidade do item 01."],
  ["Um ativo está registrado contabilmente por valor que excede seu valor de recuperação se o montante a ser recuperado pelo uso ou pela venda exceder o seu valor contábil.","E","FGV","Inverteu: é o <b>valor contábil</b> que excede o montante recuperável."],
  ["Veículo registrado contabilmente por R$ 50.000 cujo valor de mercado é de apenas R$ 30.000 demanda o reconhecimento de ajuste para perdas por desvalorização de R$ 20.000.","C","VUNESP","50.000 − 30.000."],
  ["O CPC 01 deve ser aplicado na contabilização de ajuste para perdas por desvalorização de todos os ativos, inclusive dos estoques.","E","CEBRASPE","Estoques são a <b>primeira exceção</b> do alcance — vão para o CPC 16."],
  ["Ativos fiscais diferidos e ativos advindos de planos de benefícios a empregados estão fora do alcance do CPC 01.","C","FCC","Alíneas (c) e (d) do item 02."],
  ["Propriedade para investimento mensurada ao valor justo está dentro do alcance do CPC 01.","E","FGV","Está <b>excluída</b> — alínea (f) do item 02."],
  ["Ativos não circulantes classificados como mantidos para venda, na forma do CPC 31, estão excluídos do alcance do CPC 01.","C","VUNESP","Alínea (i) do item 02."],
  ["Valor contábil é o montante pelo qual o ativo está reconhecido no balanço depois da dedução de toda respectiva depreciação, amortização ou exaustão acumulada e ajuste para perdas.","C","CPC 01, item 06","Definição literal."],
  ["Máquina adquirida por R$ 100.000, com depreciação anual de R$ 5.000 ao longo de cinco anos e perda por desvalorização de R$ 5.000, tem valor contábil de R$ 70.000.","C","CEBRASPE","100.000 − 25.000 − 5.000."],
  ["Unidade geradora de caixa é o maior grupo identificável de ativos que gera entradas de caixa em grande parte independentes das entradas de caixa de outros ativos.","E","FCC","É o <b>menor</b> grupo identificável."],
  ["Ativos corporativos são ativos, inclusive o ágio por expectativa de rentabilidade futura, que contribuem indiretamente para os fluxos de caixa futuros de mais de uma unidade geradora de caixa.","E","FGV","A definição diz <b>exceto</b> o goodwill."],
  ["Valor justo é o preço que seria recebido pela venda de um ativo ou que seria pago pela transferência de um passivo em uma transação não forçada entre participantes do mercado na data de mensuração.","C","VUNESP","Definição literal do item 06."],
  ["Perda por desvalorização é o montante pelo qual o valor contábil de um ativo ou de unidade geradora de caixa excede seu valor recuperável.","C","CPC 01, item 06","Definição literal."],
  ["Vida útil é exclusivamente o período de tempo durante o qual a entidade espera utilizar um ativo.","E","CEBRASPE","Pode ser também o <b>número de unidades de produção</b> que a entidade espera obter."],
  ["Valor em uso é o valor presente de fluxos de caixa futuros esperados que devem advir de um ativo ou de unidade geradora de caixa.","C","FCC","Definição literal do item 06."],

  ["A entidade deve avaliar, ao fim de cada período de reporte, se há alguma indicação de que um ativo possa ter sofrido desvalorização e, havendo indicação, deve estimar o valor recuperável do ativo.","C","CPC 01, item 09","Literalidade do item 09."],
  ["No Brasil, o período de reporte normalmente é anual, podendo algumas empresas optar por relatórios trimestrais ou semestrais.","C","FGV","Comentário do resumo."],
  ["O teste de redução ao valor recuperável de ativo intangível com vida útil indefinida é exigido apenas quando houver indicação de desvalorização.","E","VUNESP","É devido <b>independentemente</b> de haver indicação, no mínimo anualmente."],
  ["A entidade deve testar, no mínimo anualmente, a redução ao valor recuperável de ativo intangível ainda não disponível para uso.","C","CEBRASPE","Item 10, alínea (a)."],
  ["O teste de redução ao valor recuperável do ativo intangível pode ser executado a qualquer momento no período de um ano, desde que seja executado, todo ano, no mesmo período.","C","FCC","Item 10, alínea (a)."],
  ["Ativos intangíveis diferentes devem ter o valor recuperável testado obrigatoriamente no mesmo período do ano.","E","FGV","<b>Podem</b> ser testados em períodos diferentes."],
  ["Ativo intangível reconhecido inicialmente durante o ano corrente pode ter o teste de redução ao valor recuperável realizado até o fim do ano seguinte.","E","VUNESP","Deve ser testado <b>antes do fim do ano corrente</b>."],
  ["O goodwill não sofre amortização, mas está sujeito ao teste de recuperabilidade anual.","C","CEBRASPE","Quadro ATENÇÃO! do resumo."],
  ["Se a Cia. A adquire 100% de participação na Cia. B por R$ 1.000.000 e o valor justo do patrimônio líquido de B é de R$ 800.000, o goodwill é de R$ 200.000.","C","FCC","Valor pago − valor justo."],
  ["Constitui indicação externa de desvalorização o aumento das taxas de juros de mercado no período que provavelmente afetará a taxa de desconto utilizada no cálculo do valor em uso e diminuirá materialmente o valor recuperável do ativo.","C","FGV","Item 12, alínea (c)."],
  ["É indicação de desvalorização o fato de o valor das ações da entidade no mercado ser maior do que o valor contábil do seu patrimônio líquido.","E","VUNESP","É o contrário: o <b>valor contábil do PL</b> maior do que o valor das ações no mercado."],
  ["Evidência disponível de obsolescência ou de dano físico de um ativo é fonte interna de informação sobre possível desvalorização.","C","CEBRASPE","Item 12, alínea (e)."],
  ["Evidência proveniente de relatório interno indicando que o desempenho econômico de um ativo será pior que o esperado é classificada como fonte externa de informação.","E","FCC","É fonte <b>interna</b> — alínea (g)."],
  ["Planos para baixa de ativo antes da data anteriormente esperada e a reavaliação da vida útil do ativo como finita, em vez de indefinida, são indicações internas de desvalorização.","C","FGV","Item 12, alínea (f)."],
  ["Reconhecido dividendo de investimento em controlada, é indicação de desvalorização o fato de o dividendo exceder o total de lucro abrangente da controlada no período em que é declarado.","C","VUNESP","Item 12, alínea (h)."],
  ["Ao testar unidade geradora de caixa à qual o goodwill foi alocado, havendo indicação de desvalorização de um ativo dentro dessa unidade, a entidade deve testar primeiramente a unidade e só depois o ativo.","E","CPC 01, item 98","A ordem é inversa: primeiro o <b>ativo</b>, depois a UGC que contém o ágio."],

  ["Nem sempre é necessário determinar o valor justo líquido de despesas de venda e o valor em uso: se qualquer um desses montantes exceder o valor contábil do ativo, este não tem desvalorização e não é necessário estimar o outro valor.","C","CPC 01, item 19","Literalidade do item 19."],
  ["Equipamento com valor contábil de R$ 100.000, valor justo líquido de despesa de venda de R$ 120.000 e valor em uso de R$ 80.000 sofre perda por desvalorização de R$ 20.000.","E","FCC","O valor justo líquido já <b>excede</b> o contábil — não há desvalorização."],
  ["Se o valor contábil for maior que o valor recuperável, há perda por desvalorização.","C","FGV","Esquema do resumo."],
  ["Se o valor contábil for menor que o valor recuperável, nenhum ajuste será feito — salvo reversão, caso existam perdas já reconhecidas.","C","VUNESP","Esquema do resumo."],
  ["A perda por desvalorização é registrada a débito de perdas por desvalorização do ativo, conta de despesa, e a crédito de perdas por desvalorização de ativos, conta retificadora do ativo.","C","CEBRASPE","Lançamento do resumo."],
  ["A reversão da perda é registrada a débito de reversão de perdas por desvalorização, conta de receita, e a crédito de perdas por desvalorização de ativos.","E","FCC","Inverteu: <b>D</b> a retificadora do ativo · <b>C</b> a receita de reversão."],
  ["A reversão de perda por desvalorização sobre ativo reavaliado deve ser reconhecida em outros resultados abrangentes, sob o título de reserva de reavaliação.","C","CPC 01, item 120","Literalidade do item 120."],
  ["A perda por desvalorização de ativo reavaliado é registrada a débito de reserva de reavaliação e a crédito de perdas por desvalorização de ativo reavaliado.","C","VUNESP","Diminui o PL, não o resultado."],
  ["As estimativas de fluxos de caixa futuros devem incluir as projeções de saídas de caixa necessariamente incorridas para gerar as entradas advindas do uso contínuo do ativo, inclusive as saídas de caixa para preparar o ativo para uso.","C","CPC 01, item 39","Item 39, alínea (b)."],
  ["As estimativas de fluxos de caixa futuros não devem incluir os fluxos de caixa líquidos a serem recebidos quando da baixa do ativo ao término de sua vida útil.","E","FCC","<b>Devem</b> incluir, se houver — alínea (c) do item 39."],
  ["Equipamento que gera fluxo de caixa futuro de R$ 100.000 em um ano, a uma taxa de desconto de 10% ao ano, tem valor em uso de R$ 90.909,09.","C","FGV","100.000 ÷ 1,1."],
  ["Para evitar a dupla contagem, as estimativas de fluxos de caixa futuros não devem incluir entradas de caixa advindas de ativos que geram outras entradas de caixa que são, em grande parte, independentes das entradas de caixa do ativo sob revisão.","C","VUNESP","Item 43, alínea (a)."],
  ["As estimativas de fluxos de caixa futuros devem incluir as saídas de caixa referentes a obrigações já reconhecidas como passivos, tais como contas a pagar e provisões.","E","CEBRASPE","<b>Não</b> devem incluir — é exatamente a dupla contagem que o item 43 veda."],
  ["O aumento do valor contábil de um ativo atribuível à reversão de perda por desvalorização não deve exceder o valor contábil que teria sido determinado caso nenhuma perda por desvalorização tivesse sido reconhecida para o ativo em anos anteriores.","C","CPC 01, item 117","Literalidade do item 117."],
  ["Terreno adquirido por R$ 100.000, com perdas por desvalorização de R$ 10.000 em 2021 e de R$ 10.000 em 2022, cujo mercado se recupera em R$ 40.000 em 2023, admite reversão de R$ 40.000, elevando o valor contábil a R$ 120.000.","E","FCC","O teto é o valor contábil original de <b>R$ 100.000</b> — reversão de apenas <b>R$ 20.000</b>."],
  ["O goodwill está sujeito ao reconhecimento de perda por desvalorização, mas não à reversão dessa perda.","C","FGV","Quadro final do resumo: perda SIM, reversão NÃO."],
  ["Moto adquirida em 03/01/2015 por R$ 20.000, com intenção de uso por quatro anos e posterior doação: em 31/12/2016, com valor em uso de R$ 9.000 e valor líquido de venda de R$ 11.000 sujeito a pintura de R$ 1.500, o valor recuperável é de R$ 9.500.","C","VUNESP","Maior entre 9.000 e 11.000 − 1.500."],
  ["No mesmo caso da moto, o valor contábil em 01/01/2017 é de R$ 9.000.","E","CEBRASPE","É <b>R$ 9.500</b>: 20.000 − 10.000 de depreciação − 500 de perda."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("CPC 01: objetivo, alcance e definições",
      '<div class="box"><span class="bl">O que significa valor recuperável</span>'+
      '<p>O CPC 01 trata da <b>Redução ao Valor Recuperável de Ativos</b>. <b>Valor recuperável</b> de um ativo (ou de uma UGC) é o <b>MAIOR</b> montante entre o seu <b>valor justo líquido de despesa de venda</b> e o seu <b>valor em uso</b> — ou seja, o <b>maior valor que a empresa espera receber ao vender o ativo ou usá-lo</b>.</p>'+
      '<p class="mn"><em>Valor justo líquido R$ 90.000 × valor em uso R$ 110.000 → recuperável = R$ 110.000</em></p></div>'+
      '<div class="box"><span class="bl">Objetivo (item 01)</span>'+
      '<p>Assegurar que os ativos estejam registrados contabilmente por valor que <b>não exceda seus valores de recuperação</b>. O ativo excede seu valor de recuperação quando o <b>valor contábil ultrapassa o montante a ser recuperado pelo uso ou pela venda</b> — e aí a entidade deve reconhecer <b>ajuste para perdas por desvalorização</b>. O pronunciamento também diz <b>quando reverter</b> o ajuste e estabelece as <b>divulgações requeridas</b>.</p>'+
      '<p><b>Exemplo:</b> veículo registrado por <b>R$ 50.000</b> com valor de mercado de <b>R$ 30.000</b> → perda de <b>R$ 20.000</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Alcance — a quem o CPC 01 NÃO se aplica</span>'+
      '<ul><li><b>Estoques</b> (CPC 16)</li>'+
      '<li><b>Ativos de contrato</b> e <b>ativos resultantes de custos para obter ou cumprir contratos</b> (CPC 47)</li>'+
      '<li><b>Ativos fiscais diferidos</b> (CPC 32)</li>'+
      '<li><b>Ativos advindos de planos de benefícios a empregados</b> (CPC 33)</li>'+
      '<li><b>Ativos financeiros</b> no alcance do CPC 48</li>'+
      '<li><b>Propriedade para investimento mensurada ao valor justo</b></li>'+
      '<li><b>Ativos biológicos</b> mensurados ao valor justo líquido de despesas de vender (CPC 29)</li>'+
      '<li><b>Custos de aquisição diferidos</b> e <b>intangíveis de direitos contratuais de Cia. de seguros</b> (CPC 11)</li>'+
      '<li><b>Ativos classificados como mantidos para venda</b> (CPC 31)</li></ul></div>'+
      '<div class="box"><span class="bl">Definições do item 06 — parte 1</span>'+
      '<p><b>Valor contábil:</b> montante pelo qual o ativo está reconhecido no balanço <b>depois da dedução</b> de toda depreciação, amortização ou exaustão <b>acumulada</b> e <b>ajuste para perdas</b>. Máquina de <b>100.000</b>, depreciação de <b>5.000</b> por ano em <b>5 anos</b> (25.000) e perda de <b>5.000</b> → valor contábil <b>70.000</b>.</p>'+
      '<p><b>Unidade geradora de caixa:</b> o <b>MENOR grupo identificável</b> de ativos que gera entradas de caixa <b>em grande parte independentes</b> das entradas de outros ativos. Cada <b>loja</b> de uma rede de varejo é uma UGC.</p>'+
      '<p><b>Ativos corporativos:</b> ativos, <b>EXCETO o goodwill</b>, que contribuem, mesmo indiretamente, para os fluxos futuros <b>da UGC sob revisão e de outras UGC</b>.</p>'+
      '<p><b>Valor justo:</b> preço que seria <b>recebido pela venda</b> de um ativo ou <b>pago pela transferência</b> de um passivo em <b>transação não forçada</b> entre participantes do mercado na <b>data de mensuração</b>.</p></div>'+
      '<div class="box"><span class="bl">Definições do item 06 — parte 2</span>'+
      '<p><b>Perda por desvalorização:</b> montante pelo qual o <b>valor contábil excede o valor recuperável</b>. Terreno de <b>1.000.000</b> cujo mercado cai para <b>800.000</b> → perda de <b>200.000</b>.</p>'+
      '<p><b>Vida útil:</b> (a) o <b>período de tempo</b> de uso esperado; <b>ou</b> (b) o <b>número de unidades de produção</b> que a entidade espera obter. Máquina de produção com vida útil estimada em <b>10 anos</b>.</p>'+
      '<p><b>Valor em uso:</b> o <b>valor presente</b> dos fluxos de caixa futuros esperados do ativo ou da UGC.</p></div>'+
      '<div class="box tip"><span class="bl">Valor presente — a fórmula</span>'+
      '<p><b>Juros simples:</b> VP = Valor Futuro ÷ (1 + i·t).</p>'+
      '<p><b>Juros compostos:</b> VP = Valor Futuro ÷ (1 + i)<sup>t</sup>.</p>'+
      '<p>Onde <b>i</b> é a taxa de desconto e <b>t</b> é o tempo transcorrido.</p></div>')
  ],
  V2:[
    sl("Quando testar: indicações, intangível e goodwill",
      '<div class="box"><span class="bl">Identificação do ativo desvalorizado (item 09)</span>'+
      '<p>A entidade deve avaliar <b>ao fim de cada período de reporte</b> se há alguma indicação de que um ativo possa ter sofrido desvalorização. <b>Havendo indicação</b>, deve <b>estimar o valor recuperável</b> do ativo.</p>'+
      '<p><b>Período de reporte</b> é aquele em que são preparadas as demonstrações contábeis (BP, DRE, DFC). No Brasil, normalmente <b>anual</b> — algumas empresas optam por relatórios trimestrais ou semestrais.</p></div>'+
      '<div class="box"><span class="bl">Teste anual obrigatório (item 10)</span>'+
      '<p><b>Independentemente de existir, ou não, qualquer indicação</b>, a entidade deve testar anualmente:</p>'+
      '<div class="chips"><span class="chip">Intangível com vida útil indefinida</span><span class="chip">Intangível não disponível para uso</span><span class="chip">Goodwill em combinação de negócios</span></div>'+
      '<p>O teste do intangível pode ser feito <b>a qualquer momento no período de um ano</b>, desde que <b>todo ano no mesmo período</b>. Intangíveis <b>diferentes</b> podem ser testados em <b>períodos diferentes</b>. Mas se o intangível foi reconhecido <b>no ano corrente</b>, deve ser testado <b>antes do fim do ano corrente</b>.</p></div>'+
      '<div class="box trap"><span class="bl">ATENÇÃO! — o goodwill</span>'+
      '<p>O Goodwill <b>NÃO sofre amortização</b>, mas <b>está sujeito ao Teste de Recuperabilidade anual</b>.</p>'+
      '<p><b>Goodwill = Valor Pago − Valor Justo</b> (em regra, valor de mercado). É o excedente pago porque o comprador <b>espera valorização futura</b>. Cia. A paga <b>1.000.000</b> por 100% da Cia. B, cujo PL a valor justo é <b>800.000</b> → goodwill de <b>200.000</b>.</p></div>'+
      '<div class="box"><span class="bl">As três famílias de indicação (item 12)</span>'+
      '<div class="tree"><div class="leaf"><b>Fontes EXTERNAS</b> — (a) indicações observáveis de queda significativa de valor no período, <b>mais do que se esperaria</b> da passagem do tempo ou do uso normal; (b) mudanças significativas com <b>efeito adverso</b> no ambiente <b>tecnológico, de mercado, econômico ou legal</b>; (c) <b>aumento das taxas de juros de mercado</b> que afete a <b>taxa de desconto</b> e diminua materialmente o valor recuperável; (d) <b>valor contábil do PL maior do que o valor das ações no mercado</b>.</div>'+
      '<div class="leaf"><b>Fontes INTERNAS</b> — (e) <b>obsolescência ou dano físico</b>; (f) mudanças adversas na <b>extensão ou maneira de uso</b>: ativo <b>inativo ou ocioso</b>, planos de <b>descontinuidade ou reestruturação</b>, planos de <b>baixa antecipada</b>, reavaliação da vida útil como <b>finita em vez de indefinida</b>; (g) <b>relatório interno</b> indicando desempenho econômico <b>pior que o esperado</b>.</div>'+
      '<div class="leaf"><b>Dividendo de controlada ou coligada</b> — (h) reconhecido o dividendo, há evidência de que o <b>valor contábil do investimento nas demonstrações separadas excede os ativos líquidos da investida nas consolidadas</b> (incluindo goodwill), <b>ou</b> de que o <b>dividendo excede o total de lucro abrangente</b> da investida no período em que é declarado.</div></div>'+
      '<p><b>Exemplo:</b> A detém <b>70%</b> de B; ativos líquidos de B nas consolidadas = <b>1.000.000</b>; valor contábil do investimento nas demonstrações separadas de A = <b>1.500.000</b> → há indicação a avaliar.</p></div>'+
      '<div class="box tip"><span class="bl">Momento dos testes (item 98) — a ordem</span>'+
      '<p>Na UGC à qual o <b>goodwill</b> foi alocado, se houver indicação de desvalorização de <b>um ativo dentro dela</b>, testa-se <b>PRIMEIRO o ativo</b> e reconhece-se sua desvalorização, <b>antes</b> de testar a UGC que contém o ágio.</p>'+
      '<p>Do mesmo modo: havendo indicação quanto a <b>uma UGC</b> dentro de um <b>grupo de unidades</b> que contenha o ágio, testa-se <b>primeiro a UGC</b> e só depois o <b>grupo</b>.</p>'+
      '<p class="mn"><em>Do menor para o maior: ativo → UGC → grupo de unidades</em></p></div>')
  ],
  V3:[
    sl("Mensuração, lançamentos e reversão",
      '<div class="box"><span class="bl">Mensuração (itens 18 e 19)</span>'+
      '<p>O valor recuperável é o <b>maior valor</b> entre o valor justo líquido de despesas de venda e o valor em uso — e as exigências valem igualmente para um <b>ativo individual</b> ou para uma <b>UGC</b>.</p>'+
      '<p><b>Item 19:</b> nem sempre é necessário determinar os dois. <b>Se qualquer um deles exceder o valor contábil</b>, o ativo <b>não tem desvalorização</b> e <b>não é necessário estimar o outro</b>.</p>'+
      '<p><b>Exemplo:</b> valor contábil <b>100.000</b>, valor justo líquido <b>120.000</b>, valor em uso <b>80.000</b> → o valor justo líquido já supera o contábil, <b>não há desvalorização</b>.</p></div>'+
      '<div class="box"><span class="bl">O esquema da comparação</span>'+
      '<div class="tree"><div class="leaf">Valor contábil <b>MAIOR</b> que o valor recuperável → <b>perda por desvalorização</b>.</div>'+
      '<div class="leaf">Valor contábil <b>MENOR</b> que o valor recuperável → <b>nenhum ajuste</b> será feito; <b>ou</b> será feita uma <b>reversão</b>, caso existam <b>perdas já reconhecidas</b>.</div></div></div>'+
      '<div class="box"><span class="bl">Os lançamentos</span>'+
      '<p><b>Perda por desvalorização:</b> <b>D</b> Perdas por desvalorização do Ativo (<b>Despesas</b>) · <b>C</b> Perdas por desvalorização de Ativos (<b>conta retificadora do ativo</b>).</p>'+
      '<p><b>Reversão:</b> <b>D</b> Perdas por desvalorização de Ativos (retificadora do ativo) · <b>C</b> Reversão de perdas por desvalorização (<b>Receitas</b>).</p></div>'+
      '<div class="box trap"><span class="bl">ATENÇÃO! — ativo REAVALIADO (item 120)</span>'+
      '<p>A perda e a reversão de ativo reavaliado <b>não passam pelo resultado</b>: vão a <b>outros resultados abrangentes</b>, na conta de <b>reserva de reavaliação</b> (no PL).</p>'+
      '<p><b>Perda:</b> <b>D</b> Reserva de Reavaliação (↓ PL) · <b>C</b> Perdas por desvalorização de Ativo Reavaliado (retificadora do ativo).</p>'+
      '<p><b>Reversão:</b> <b>D</b> Perdas por desvalorização de Ativo Reavaliado · <b>C</b> Reserva de Reavaliação (↑ PL).</p></div>'+
      '<div class="box"><span class="bl">Fluxos de caixa futuros (itens 39 e 43)</span>'+
      '<p><b>DEVEM incluir:</b> (a) projeções de <b>entradas</b> do <b>uso contínuo</b> do ativo; (b) projeções de <b>saídas</b> necessariamente incorridas para gerar essas entradas, <b>inclusive as saídas para preparar o ativo para uso</b>; (c) se houver, <b>fluxos líquidos a receber (ou pagar) na baixa</b> ao término da vida útil.</p>'+
      '<p><b>NÃO devem incluir</b> (para evitar <b>dupla contagem</b>): (a) entradas de <b>ativos que geram entradas independentes</b> das do ativo sob revisão (ex.: contas a receber); (b) <b>saídas de obrigações já reconhecidas como passivos</b> (contas a pagar, passivos de planos de pensão, provisões).</p>'+
      '<p><b>Exemplo:</b> equipamento que produz <b>10.000</b> camisas por ano a <b>R$ 10</b> → fluxo futuro de <b>100.000</b>. A <b>10%</b> ao ano, valor em uso = 100.000 ÷ (1,1)<sup>1</sup> = <b>R$ 90.909,09</b>.</p>'+
      '<p><b>Exemplo da provisão:</b> ação estimada em <b>60.000</b> e provisionada; desfecho desfavorável de <b>70.000</b>. As estimativas <b>não incluem a saída dos 60.000</b> já reconhecidos como passivo.</p></div>'+
      '<div class="box tip"><span class="bl">Reversão (item 117) e o goodwill</span>'+
      '<p>O aumento do valor contábil atribuível à reversão <b>não deve exceder o valor contábil que teria sido determinado</b> (líquido de depreciação, amortização ou exaustão) <b>caso nenhuma perda tivesse sido reconhecida em anos anteriores</b>.</p>'+
      '<p><b>Exemplo 01:</b> terreno por <b>100.000</b> em 31/12/2020; perda de <b>10.000</b> em 31/12/2021 (→ 90.000) e outra de <b>10.000</b> em 31/12/2022 (→ 80.000). Em 2023 o mercado se recupera em <b>40.000</b>, mas o teto é <b>100.000</b>: reverte-se apenas <b>20.000</b> de receita de reversão.</p>'+
      '<p><b>Exemplo 02 — goodwill:</b> ágio de <b>20.000</b> em 01/01/2022; perda de <b>2.000</b> em 31/12/2022 (→ 18.000). Em 2023 as expectativas melhoram, mas <b>não há reversão nem receita</b>, porque é <b>goodwill</b>.</p>'+
      '<p class="mn"><em>Goodwill: perda SIM · reversão NÃO</em></p></div>'+
      '<div class="box"><span class="bl">Questão-exemplo — a moto</span>'+
      '<p>Moto de <b>20.000</b> em 03/01/2015, uso por <b>4 anos</b> e doação (<b>valor residual zero</b>). Após 2 anos, valor contábil = 20.000 − 10.000 = <b>10.000</b>.</p>'+
      '<p>Em 31/12/2016: valor em uso <b>9.000</b>; valor líquido de venda <b>11.000</b> com pintura de <b>1.500</b> → valor justo líquido de <b>9.500</b>. Recuperável = <b>9.500</b> (o maior).</p>'+
      '<p>Perda de <b>500</b>. <b>Valor Contábil = 20.000 − 10.000 − 500 = R$ 9.500</b>.</p></div>')
  ]
};

var EX = {
S1:{t:"gap", instr:"Complete a definição de valor recuperável",
  before:"Valor recuperável de um ativo ou de unidade geradora de caixa é o ",
  after:" montante entre o seu valor justo líquido de despesa de venda e o seu valor em uso.",
  options:["maior","menor","médio"], answer:0,
  why:"É o maior valor que a empresa espera receber ao vender o ativo ou usá-lo."},

S2:{t:"mc", instr:"Equipamento com valor justo líquido de despesa de venda de R$ 90.000 e valor em uso de R$ 110.000. Qual o valor recuperável?",
  options:["R$ 110.000","R$ 90.000","R$ 200.000","R$ 20.000"],
  answer:0,
  why:"O maior dos dois montantes — exemplo do resumo."},

S3:{t:"multi", instr:"Marque tudo que está FORA do alcance do CPC 01",
  options:["Estoques","Ativos fiscais diferidos","Ativos advindos de planos de benefícios a empregados",
           "Propriedade para investimento mensurada ao valor justo","Ativos classificados como mantidos para venda",
           "Máquinas e equipamentos do imobilizado","Ágio por expectativa de rentabilidade futura (goodwill)"],
  answers:[0,1,2,3,4],
  why:"O imobilizado e o goodwill estão justamente dentro do alcance — o goodwill tem teste anual obrigatório."},

S4:{t:"match", instr:"Correlacione cada definição do item 06",
  pairs:[["Valor contábil","Montante reconhecido no balanço após dedução da depreciação acumulada e do ajuste para perdas"],
         ["Unidade geradora de caixa","Menor grupo identificável de ativos que gera entradas de caixa em grande parte independentes"],
         ["Ativos corporativos","Ativos, exceto o goodwill, que contribuem mesmo indiretamente para os fluxos de mais de uma UGC"],
         ["Valor em uso","Valor presente dos fluxos de caixa futuros esperados do ativo ou da UGC"],
         ["Perda por desvalorização","Montante pelo qual o valor contábil excede o valor recuperável"]]},

S5:{t:"mc", instr:"Máquina adquirida por R$ 100.000 há 5 anos, com depreciação anual de R$ 5.000 e perda por desvalorização de R$ 5.000. Qual o valor contábil?",
  options:["R$ 70.000","R$ 75.000","R$ 80.000","R$ 95.000"],
  answer:0,
  why:"100.000 − 25.000 de depreciação acumulada − 5.000 de ajuste para perdas."},

S6:{t:"sort", instr:"Cada frase descreve corretamente a definição?",
  buckets:["Como está no CPC 01","Trocado pela banca"],
  items:[["Unidade geradora de caixa é o MENOR grupo identificável de ativos",0],
         ["Vida útil pode ser o número de unidades de produção que a entidade espera obter",0],
         ["Valor justo pressupõe transação NÃO FORÇADA entre participantes do mercado",0],
         ["Ativos corporativos INCLUEM o goodwill",1],
         ["Valor recuperável é o MENOR entre valor justo líquido e valor em uso",1],
         ["Vida útil é APENAS o período de tempo de uso esperado",1]],
  why:"As três últimas são as trocas que o resumo antecipa: extensão indevida, inversão do maior pelo menor e restrição indevida."},

S7:{t:"multi", instr:"Marque o que deve ser testado anualmente, independentemente de haver indicação de desvalorização",
  options:["Ativo intangível com vida útil indefinida","Ativo intangível ainda não disponível para uso",
           "Goodwill em combinação de negócios","Todo o ativo imobilizado da entidade",
           "Estoques de mercadorias para revenda"],
  answers:[0,1,2],
  why:"Item 10 do CPC 01. Os estoques estão fora do alcance e o imobilizado só é testado havendo indicação."},

S8:{t:"sort", instr:"Classifique cada indicação de possível desvalorização",
  buckets:["Fonte EXTERNA","Fonte INTERNA"],
  items:[["Indicações observáveis de queda significativa do valor do ativo no período",0],
         ["Mudanças adversas no ambiente tecnológico, de mercado, econômico ou legal",0],
         ["Aumento das taxas de juros de mercado que afeta a taxa de desconto",0],
         ["Valor contábil do patrimônio líquido maior que o valor das ações no mercado",0],
         ["Evidência de obsolescência ou de dano físico do ativo",1],
         ["Ativo que se torna inativo ou ocioso, ou plano de baixa antecipada",1],
         ["Relatório interno indicando desempenho econômico pior que o esperado",1]],
  why:"O relatório interno é a pegadinha mais cobrada: é fonte INTERNA, alínea (g)."},

S9:{t:"gap", instr:"Complete o quadro ATENÇÃO! do resumo",
  before:"O Goodwill não sofre ",
  after:", mas está sujeito ao Teste de Recuperabilidade anual.",
  options:["amortização","depreciação","exaustão"], answer:0,
  why:"Por não ter vida útil definida, não se amortiza — testa-se todo ano."},

S10:{t:"mc", instr:"Cia. A adquire 100% de participação na Cia. B por R$ 1.000.000; o valor justo do PL de B é de R$ 800.000. Qual o goodwill?",
  options:["R$ 200.000","R$ 800.000","R$ 1.000.000","R$ 1.800.000"],
  answer:0,
  why:"Goodwill = Valor Pago − Valor Justo."},

S11:{t:"match", instr:"Ligue cada indicação à sua família no item 12",
  pairs:[["Fonte externa","Valor contábil do PL da entidade maior do que o valor de suas ações no mercado"],
         ["Fonte interna","Reavaliação da vida útil do ativo como finita, em vez de indefinida"],
         ["Dividendo de controlada ou coligada","O dividendo excede o total de lucro abrangente da investida no período em que é declarado"]]},

S12:{t:"mc", instr:"Ao testar UGC à qual o goodwill foi alocado, havendo indicação de desvalorização de um ativo dentro dela, qual a ordem?",
  options:["Testar primeiro o ativo e reconhecer sua desvalorização, depois testar a UGC que contém o ágio",
           "Testar primeiro a UGC que contém o ágio, depois o ativo",
           "Testar os dois simultaneamente, rateando a perda",
           "Testar apenas a UGC, porque o ágio absorve a perda do ativo"],
  answer:0,
  why:"Item 98 — do menor para o maior: ativo, UGC, grupo de unidades."},

S13:{t:"mc", instr:"Equipamento com valor contábil de R$ 100.000, valor justo líquido de despesa de venda de R$ 120.000 e valor em uso de R$ 80.000. Qual a conclusão?",
  options:["Não há desvalorização, e não é necessário estimar o outro valor",
           "Há perda por desvalorização de R$ 20.000","Há perda por desvalorização de R$ 40.000",
           "É obrigatório estimar os dois montantes antes de concluir"],
  answer:0,
  why:"Item 19: se qualquer um dos montantes exceder o valor contábil, não há desvalorização."},

S14:{t:"sort", instr:"O que decorre da comparação do valor contábil com o valor recuperável?",
  buckets:["Valor contábil MAIOR que o recuperável","Valor contábil MENOR que o recuperável"],
  items:[["Temos perda por desvalorização",0],
         ["Nenhum ajuste será feito",1],
         ["Será feita uma reversão, caso existam perdas já reconhecidas",1]],
  why:"É o esquema do resumo, logo depois do item 117."},

S15:{t:"wordbank", instr:"Monte o lançamento da perda por desvalorização",
  target:["D","Perdas","por","desvalorização","do","Ativo","C","Perdas","por","desvalorização","de","Ativos"],
  extra:["Reserva","de","Reavaliação","Reversão"],
  why:"Débito em conta de despesa; crédito na conta retificadora do ativo."},

S16:{t:"match", instr:"Correlacione cada situação ao seu lançamento",
  pairs:[["Perda por desvalorização","D Perdas por desvalorização do Ativo (despesa) · C Perdas por desvalorização de Ativos"],
         ["Reversão da perda","D Perdas por desvalorização de Ativos · C Reversão de perdas por desvalorização (receita)"],
         ["Perda de ativo REAVALIADO","D Reserva de Reavaliação · C Perdas por desvalorização de Ativo Reavaliado"],
         ["Reversão de perda de ativo REAVALIADO","D Perdas por desvalorização de Ativo Reavaliado · C Reserva de Reavaliação"]]},

S17:{t:"multi", instr:"Marque o que as estimativas de fluxos de caixa futuros DEVEM incluir",
  options:["Projeções de entradas de caixa advindas do uso contínuo do ativo",
           "Projeções de saídas necessariamente incorridas para gerar essas entradas, inclusive as de preparar o ativo para uso",
           "Fluxos de caixa líquidos a receber ou pagar na baixa do ativo ao término da vida útil",
           "Entradas advindas de ativos que geram entradas independentes das do ativo sob revisão",
           "Saídas referentes a obrigações já reconhecidas como passivos, como contas a pagar e provisões"],
  answers:[0,1,2],
  why:"As duas últimas ficam de fora justamente para evitar a dupla contagem (item 43)."},

S18:{t:"mc", instr:"Terreno por R$ 100.000, com perdas de R$ 10.000 em 2021 e R$ 10.000 em 2022. Em 2023 o mercado se recupera em R$ 40.000. Qual a reversão possível?",
  options:["R$ 20.000, com valor contábil de R$ 100.000","R$ 40.000, com valor contábil de R$ 120.000",
           "R$ 10.000, com valor contábil de R$ 90.000","Nenhuma, porque a reversão é vedada"],
  answer:0,
  why:"Item 117: o teto é o valor contábil que existiria se nenhuma perda tivesse sido reconhecida."},

S19:{t:"mc", instr:"Equipamento que produz 10.000 camisas por ano a R$ 10 cada, taxa de desconto de 10% ao ano. Qual o valor em uso?",
  options:["R$ 90.909,09","R$ 100.000,00","R$ 110.000,00","R$ 10.000,00"],
  answer:0,
  why:"VP = 100.000 ÷ (1,1) elevado a 1."},

S20:{t:"mc", instr:"Moto de R$ 20.000 (03/01/2015), uso por 4 anos e doação. Em 31/12/2016: valor em uso R$ 9.000; valor líquido de venda R$ 11.000, com pintura de R$ 1.500. Qual o valor contábil em 01/01/2017?",
  options:["R$ 9.500","R$ 9.000","R$ 10.000","R$ 11.000"],
  answer:0,
  why:"Contábil 10.000; recuperável 9.500 (maior entre 9.000 e 11.000 − 1.500); perda de 500."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Avançada 06","https://www.tecconcursos.com.br/s/Q2xI9D","Q2xI9D"],
  ["Caderno FCC — Contabilidade Avançada 06","https://www.tecconcursos.com.br/s/Q2xI9H","Q2xI9H"],
  ["Caderno FGV — Contabilidade Avançada 06","https://www.tecconcursos.com.br/s/Q2xI9K","Q2xI9K"],
  ["Caderno VUNESP — Contabilidade Avançada 06","https://www.tecconcursos.com.br/s/Q2xI9P","Q2xI9P"]
];
var TECNOTA = "A banca ganha dinheiro em três fronteiras deste resumo. A primeira é a palavra MAIOR na definição de valor recuperável: quem troca por menor erra o exemplo do equipamento (90.000 × 110.000 → 110.000) e a moto (9.000 × 9.500 → 9.500, perda de 500). A segunda é o goodwill, que NÃO sofre amortização mas tem teste anual obrigatório, reconhece perda por desvalorização e NÃO admite reversão — é o exemplo do ágio de 20.000 com perda de 2.000 que fica em 18.000 para sempre. A terceira é o teto do item 117: o terreno de 100.000 que caiu para 80.000 e recuperou 40.000 só admite reversão de 20.000. Guarde ainda duas trocas de rótulo: o relatório interno de desempenho pior que o esperado é fonte INTERNA, e a comparação da alínea (d) é o valor contábil do PL MAIOR do que o valor das ações no mercado.";

var UNITS = [
  {n:1, title:"CPC 01: objetivo, alcance e definições", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Valor recuperável, alcance e as definições do item 06", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · valor recuperável e objetivo", xp:25, data:["S1","S2","T0","T1","T2","T3","T4","T5"]},
    {id:"K3", type:"drill",  title:"Praticar · alcance e valor contábil",     xp:25, data:["S3","S4","T6","T7","T8","T9","T10","T11"]},
    {id:"K4", type:"drill",  title:"Praticar · UGC, valor justo e vida útil", xp:25, data:["S5","S6","T12","T13","T14","T15","T16","T17"]},
    {id:"K5", type:"flash",  title:"Flashcards · conceitos do CPC 01",        xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}
  ]},
  {n:2, title:"Quando testar: indicações e goodwill", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Período de reporte, teste anual e as três famílias de indicação", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · momento da avaliação e teste anual", xp:25, data:["S7","S8","T18","T19","T20","T21","T22"]},
    {id:"K8", type:"drill",  title:"Praticar · goodwill",                      xp:25, data:["S9","S10","T23","T24","T25","T26","T27"]},
    {id:"K9", type:"drill",  title:"Praticar · fontes externas, internas e dividendo", xp:25, data:["S11","S12","T28","T29","T30","T31","T32","T33"]},
    {id:"K10",type:"flash",  title:"Flashcards · indicações e goodwill",       xp:15, data:[16,17,18,19,20,21,22,23,24,25,26,27,28]}
  ]},
  {n:3, title:"Mensuração, lançamentos e reversão", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Comparação, lançamentos, fluxos de caixa e o teto do item 117", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · mensuração e o esquema da comparação", xp:25, data:["S13","S14","T34","T35","T36","T37","T38","T39"]},
    {id:"K13",type:"drill",  title:"Praticar · lançamentos e fluxos de caixa",  xp:25, data:["S15","S16","S17","T40","T41","T42","T43","T44","T45"]},
    {id:"K14",type:"drill",  title:"Praticar · reversão, goodwill e a moto",    xp:25, data:["S18","S19","S20","T46","T47","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · mensuração e reversão",        xp:15, data:[29,30,31,32,33,34,35,36,37,38,39,40,41]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                  xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                     xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                    xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 06 de Contabilidade Avançada (Radegondes) ---------- */
var COM={
0:"<p>Certo. É a abertura do resumo: <b>“o Pronunciamento Técnico CPC 01 trata da Redução ao Valor Recuperável de Ativos”</b>.</p><p>É o assunto do módulo todo — o chamado <b>teste de recuperabilidade</b> (impairment), que compara o <b>valor contábil</b> com o <b>valor recuperável</b>.</p><p class='fb-fonte'>Resumo 06 · <i>CPC 01</i></p>",
1:"<p>Errado <b>por uma palavra</b>. O resumo diz <b>MAIOR</b>, e não menor: valor recuperável é o <b>maior montante</b> entre o <b>valor justo líquido de despesa de venda</b> e o <b>valor em uso</b>.</p><p>A explicação que o material dá ajuda a não esquecer: o valor recuperável representa <b>“o maior valor que a empresa espera receber ao vender o ativo ou usá-lo”</b>. Se a empresa pode escolher entre vender e usar, ela fica com a alternativa que rende mais.</p><p class='fb-fonte'>Resumo 06 · <i>CPC 01 — O que significa valor recuperável de ativos</i></p>",
2:"<p>Certo — é o <b>EXEMPLO</b> do resumo, com estes mesmos números.</p><p>Valor justo líquido de despesa de venda de <b>R$ 90.000</b> e valor em uso de <b>R$ 110.000</b>: o valor recuperável é <b>R$ 110.000</b>, <b>“pois é o maior valor entre o valor justo líquido de despesa de venda (R$ 90.000) e o valor em uso (R$ 110.000)”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>CPC 01 — exemplo do equipamento</i></p>",
3:"<p>Certo pela letra do <b>item 01</b>, transcrito no resumo: o objetivo é <b>“estabelecer procedimentos que a entidade deve aplicar para assegurar que seus ativos estejam registrados contabilmente por valor que não exceda seus valores de recuperação”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Objetivo do CPC 01</i></p>",
4:"<p>Errado — a banca <b>inverteu os termos</b> da comparação. O item 01 diz que o ativo está registrado por valor que excede seu valor de recuperação <b>“se o seu VALOR CONTÁBIL exceder o montante a ser recuperado pelo uso ou pela venda do ativo”</b>.</p><p>Na assertiva, quem excede é o montante recuperável — o que descreveria justamente a situação em que <b>não há</b> desvalorização.</p><p class='fb-fonte'>Resumo 06 · <i>Objetivo do CPC 01</i></p>",
5:"<p>Certo — é o <b>EXEMPLO</b> do resumo para o item 01: veículo registrado contabilmente por <b>R$ 50.000</b> cujo valor de mercado é de apenas <b>R$ 30.000</b>.</p><p>Como o montante a ser recuperado pelo uso ou pela venda é <b>menor</b> que o valor contábil, <b>“a empresa deveria reconhecer um ajuste para perdas por desvalorização no valor de R$ 20.000”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Objetivo do CPC 01 — exemplo do veículo</i></p>",
6:"<p>Errado. O item 02 manda aplicar o CPC 01 <b>“na contabilização de ajuste para perdas por desvalorização de todos os ativos, EXCETO”</b> — e a primeira exceção da lista é justamente <b>estoques</b>, que seguem o <b>CPC 16</b>.</p><p>Estoque tem regra própria: não se testa impairment pelo CPC 01.</p><p class='fb-fonte'>Resumo 06 · <i>Alcance</i></p>",
7:"<p>Certo. Constam da lista de exceções do item 02: <b>“(c) ativos fiscais diferidos (ver CPC 32)”</b> e <b>“(d) ativos advindos de planos de benefícios a empregados (ver CPC 33)”</b>.</p><p>O <b>COMENTÁRIO</b> do resumo repete as duas na lista do que o CPC 01 <b>não</b> alcança.</p><p class='fb-fonte'>Resumo 06 · <i>Alcance</i></p>",
8:"<p>Errado. A alínea <b>(f)</b> do item 02 exclui expressamente a <b>“propriedade para investimento que seja mensurada ao valor justo”</b>.</p><p>A lógica é a mesma dos ativos biológicos mensurados ao valor justo líquido de despesas de vender, também excluídos: quem já está mensurado a valor justo não precisa do teste de recuperabilidade.</p><p class='fb-fonte'>Resumo 06 · <i>Alcance</i></p>",
9:"<p>Certo — é a alínea <b>(i)</b>, a última da lista: <b>“ativos não circulantes (ou grupos de ativos disponíveis para venda) classificados como mantidos para venda em consonância com o CPC 31”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Alcance</i></p>",
10:"<p>Certo pela literalidade da definição do <b>item 06</b>: valor contábil é <b>“o montante pelo qual o ativo está reconhecido no balanço depois da dedução de toda respectiva depreciação, amortização ou exaustão acumulada e ajuste para perdas”</b>.</p><p>Repare que o ajuste para perdas <b>também</b> entra na dedução — é o que faz a conta do exemplo da máquina fechar em R$ 70.000.</p><p class='fb-fonte'>Resumo 06 · <i>Definições — valor contábil</i></p>",
11:"<p>Certo — é o <b>EXEMPLO</b> do resumo, com os mesmos valores. Máquina comprada por <b>R$ 100.000</b>, depreciação anual de <b>R$ 5.000</b>: após 5 anos a depreciação acumulada é de <b>R$ 25.000</b> (5.000 × 5).</p><p>Somando a perda por desvalorização de <b>R$ 5.000</b>, <b>“o valor contábil dela será de R$ 70.000, que é o montante pelo qual o ativo será reconhecido no balanço depois da dedução de toda depreciação (R$ 25.000) e ajuste para perdas (R$ 5.000)”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Definições — valor contábil</i></p>",
12:"<p>Errado <b>por uma palavra</b>: é o <b>MENOR</b> grupo identificável de ativos, não o maior. O item 06 define UGC como <b>“o menor grupo identificável de ativos que gera entradas de caixa, entradas essas que são em grande parte independentes das entradas de caixa de outros ativos ou outros grupos de ativos”</b>.</p><p>O exemplo do resumo fixa a ideia: numa rede de varejo, <b>cada loja</b> é uma UGC, porque gera as próprias entradas e não depende das demais.</p><p class='fb-fonte'>Resumo 06 · <i>Definições — unidade geradora de caixa</i></p>",
13:"<p>Errado por <b>extensão indevida</b>. A definição do item 06 é expressa: ativos corporativos são ativos <b>“EXCETO ágio por expectativa de rentabilidade futura (goodwill)”</b>, que contribuem, mesmo indiretamente, para os fluxos de caixa futuros tanto da UGC sob revisão quanto de outras UGC.</p><p>O exemplo do resumo é o <b>prédio</b> que gera aluguel para a UGC do imóvel e ainda beneficia a loja instalada nele.</p><p class='fb-fonte'>Resumo 06 · <i>Definições — ativos corporativos</i></p>",
14:"<p>Certo pela letra do <b>item 06</b>: valor justo é <b>“o preço que seria recebido pela venda de um ativo ou que seria pago pela transferência de um passivo em uma transação não forçada entre participantes do mercado na data de mensuração”</b>.</p><p>Guarde os três marcadores que a banca gosta de trocar: <b>transação não forçada</b>, <b>participantes do mercado</b> e <b>data de mensuração</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Definições — valor justo</i></p>",
15:"<p>Certo, literalmente: <b>“perda por desvalorização é o montante pelo qual o valor contábil de um ativo ou de unidade geradora de caixa excede seu valor recuperável”</b>.</p><p>O exemplo do resumo é o terreno de valor contábil <b>R$ 1.000.000</b> cujo zoneamento urbano mudou e reduziu o valor de mercado para <b>R$ 800.000</b>: perda de <b>R$ 200.000</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Definições — perda por desvalorização</i></p>",
16:"<p>Errado por <b>restringir indevidamente</b>. A definição do item 06 tem <b>duas</b> alíneas: vida útil é <b>“(a) o período de tempo durante o qual a entidade espera utilizar um ativo; OU (b) o número de unidades de produção ou de unidades semelhantes que a entidade espera obter do ativo”</b>.</p><p>O exemplo do resumo usa a primeira: máquina de produção com vida útil estimada em <b>10 anos</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Definições — vida útil</i></p>",
17:"<p>Certo pela letra do <b>item 06</b>: valor em uso é <b>“o valor presente de fluxos de caixa futuros esperados que devem advir de um ativo ou de unidade geradora de caixa”</b>.</p><p>O resumo lembra que <b>valor presente</b> vem da matemática financeira: em juros <b>simples</b>, VP = Valor Futuro ÷ (1 + i·t); em juros <b>compostos</b>, VP = Valor Futuro ÷ (1 + i)<b>ᵗ</b>, onde <b>i</b> é a taxa de desconto e <b>t</b> é o tempo transcorrido.</p><p class='fb-fonte'>Resumo 06 · <i>Definições — valor em uso</i></p>",
18:"<p>Certo pela literalidade do <b>item 09</b>: <b>“a entidade deve avaliar ao fim de cada período de reporte, se há alguma indicação de que um ativo possa ter sofrido desvalorização. Se houver alguma indicação, a entidade deve estimar o valor recuperável do ativo”</b>.</p><p>São dois passos em sequência: primeiro a <b>avaliação de indícios</b>, e só depois, havendo indício, a <b>estimativa do valor recuperável</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Identificação de ativo que pode estar desvalorizado</i></p>",
19:"<p>Certo — é o <b>COMENTÁRIO</b> do resumo sobre o item 09: <b>“no Brasil, o período de reporte normalmente é anual, com algumas empresas optando por relatórios trimestrais ou semestrais, dependendo das exigências regulatórias e da política de divulgação adotada pela empresa”</b>.</p><p>Período de reporte é aquele em que são preparadas as demonstrações contábeis — balanço patrimonial, DRE, DFC.</p><p class='fb-fonte'>Resumo 06 · <i>Identificação de ativo que pode estar desvalorizado</i></p>",
20:"<p>Errado justamente na condição. O <b>item 10</b> abre dizendo <b>“INDEPENDENTEMENTE DE EXISTIR, OU NÃO, qualquer indicação de redução ao valor recuperável”</b>, a entidade deve testar, <b>no mínimo anualmente</b>, o intangível com <b>vida útil indefinida</b>.</p><p>Só o ativo comum depende de indício (item 09). O intangível com vida útil indefinida, o intangível <b>não disponível para uso</b> e o <b>goodwill</b> têm teste anual obrigatório.</p><p class='fb-fonte'>Resumo 06 · <i>Teste no ativo intangível e no goodwill</i></p>",
21:"<p>Certo — é a alínea <b>(a)</b> do item 10: testar, <b>no mínimo anualmente</b>, a redução ao valor recuperável de ativo intangível com vida útil indefinida <b>ou de ativo intangível ainda não disponível para uso</b>, comparando o seu <b>valor contábil</b> com seu <b>valor recuperável</b>.</p><p>O esquema do resumo põe os dois casos lado a lado sob o título <b>“a entidade deve testar anualmente”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Teste no ativo intangível e no goodwill</i></p>",
22:"<p>Certo pela letra da alínea (a) do item 10: <b>“esse teste de redução ao valor recuperável pode ser executado a qualquer momento no período de um ano, desde que seja executado, todo ano, no mesmo período”</b>.</p><p>Não há data fixa — há <b>consistência</b>: escolhido o mês, ele se repete todo ano.</p><p class='fb-fonte'>Resumo 06 · <i>Teste no ativo intangível e no goodwill</i></p>",
23:"<p>Errado — o resumo diz o oposto: <b>“ativos intangíveis diferentes PODEM ter o valor recuperável testado em períodos diferentes”</b>.</p><p>A exigência de <b>mesmo período todo ano</b> é para <b>cada</b> intangível, e não entre intangíveis distintos. A banca aproveita a semelhança das duas frases para trocar uma pela outra.</p><p class='fb-fonte'>Resumo 06 · <i>Teste no ativo intangível e no goodwill</i></p>",
24:"<p>Errado no <b>prazo</b>. A ressalva do item 10 é expressa: <b>“se tais ativos intangíveis foram inicialmente reconhecidos durante o ano corrente, devem ter a redução ao valor recuperável testada ANTES DO FIM DO ANO CORRENTE”</b>.</p><p>Não há prorrogação para o exercício seguinte.</p><p class='fb-fonte'>Resumo 06 · <i>Teste no ativo intangível e no goodwill</i></p>",
25:"<p>Certo — é o quadro <b>ATENÇÃO!</b> do resumo, repetido duas vezes no material: <b>“o Goodwill não sofre amortização, mas está sujeito ao Teste de Recuperabilidade anual”</b>.</p><p>E o teste dele também é da lista do item 10, alínea (b): testar <b>anualmente</b> o ágio pago por expectativa de rentabilidade futura em <b>combinação de negócios</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Teste no ativo intangível e no goodwill — Atenção!</i></p>",
26:"<p>Certo — é o <b>EXEMPLO</b> do resumo, com estes mesmos valores. A fórmula que ele dá é <b>Goodwill = Valor Pago − Valor Justo</b> (em regra, valor de mercado).</p><p>Cia. A adquire 100% da Cia. B por <b>R$ 1.000.000</b>; o valor justo do PL de B é <b>R$ 800.000</b> → <b>goodwill de R$ 200.000</b>. O resumo explica o porquê: o comprador paga mais <b>“porque ele espera que haja uma valorização futura”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>O que é Goodwill</i></p>",
27:"<p>Certo pela letra da alínea <b>(c)</b> do item 12, que o resumo lista entre as <b>fontes EXTERNAS</b>: <b>“as taxas de juros de mercado ou outras taxas de mercado de retorno sobre investimentos aumentaram durante o período, e esses aumentos provavelmente afetarão a taxa de desconto utilizada no cálculo do valor em uso de um ativo e diminuirão materialmente o valor recuperável do ativo”</b>.</p><p>Faz sentido: taxa de desconto maior derruba o valor presente, ou seja, o <b>valor em uso</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Fontes externas de informação</i></p>",
28:"<p>Errado — a comparação está <b>invertida</b>. A alínea <b>(d)</b> do item 12 aponta como indicação o caso em que <b>“o valor contábil do patrimônio líquido da entidade é MAIOR do que o valor de suas ações no mercado”</b>.</p><p>É intuitivo: se o mercado paga menos pela empresa do que o PL registrado, há sinal de que os ativos estão contabilizados acima do que se recupera.</p><p class='fb-fonte'>Resumo 06 · <i>Fontes externas de informação</i></p>",
29:"<p>Certo — é a alínea <b>(e)</b>, a primeira da lista de <b>fontes INTERNAS</b> do item 12: <b>“evidência disponível de obsolescência ou de dano físico de um ativo”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Fontes internas de informação</i></p>",
30:"<p>Errado no <b>rótulo</b>. O resumo põe essa hipótese entre as <b>fontes INTERNAS</b> de informação, alínea <b>(g)</b>: <b>“evidência disponível, proveniente de relatório interno, que indique que o desempenho econômico de um ativo é ou será pior que o esperado”</b>.</p><p>O nome entrega: <b>relatório interno</b> é fonte interna. Externas são as que vêm do ambiente — mercado, tecnologia, economia, lei, taxas de juros e valor das ações.</p><p class='fb-fonte'>Resumo 06 · <i>Fontes internas de informação</i></p>",
31:"<p>Certo — são exemplos da alínea <b>(f)</b>, das fontes <b>internas</b>. O resumo lista, nessa alínea: <b>“o ativo que se torna inativo ou ocioso, planos para descontinuidade ou reestruturação da operação à qual um ativo pertence, planos para baixa de ativo antes da data anteriormente esperada e reavaliação da vida útil de ativo como finita ao invés de indefinida”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Fontes internas de informação</i></p>",
32:"<p>Certo — é a segunda evidência da alínea <b>(h)</b> do item 12: <b>“o dividendo excede o total de lucro abrangente da controlada, empreendimento controlado em conjunto ou coligada no período em que o dividendo é declarado”</b>.</p><p>A outra evidência da mesma alínea é o <b>valor contábil do investimento nas demonstrações separadas</b> exceder os <b>valores contábeis dos ativos líquidos da investida nas consolidadas</b>, incluindo eventual goodwill — o exemplo do resumo é a empresa A, com 70% de B, registrando <b>R$ 1.500.000</b> de investimento contra <b>R$ 1.000.000</b> de ativos líquidos consolidados.</p><p class='fb-fonte'>Resumo 06 · <i>Dividendo de controlada ou coligada</i></p>",
33:"<p>Errado na <b>ordem</b>. O <b>item 98</b> é expresso: <b>“a entidade deve testar primeiramente o ativo para redução ao valor recuperável e reconhecer qualquer desvalorização para aquele ativo, ANTES de realizar o teste na unidade geradora de caixa que contém o ágio”</b>.</p><p>O exemplo do resumo é a empresa de eletrônicos com as UGC de smartphones e de laptops: se a máquina de produção está com valor de mercado inferior ao contábil, testa-se <b>a máquina</b> primeiro. A mesma lógica sobe um degrau: primeiro a <b>UGC</b>, depois o <b>grupo de unidades</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Momento dos testes de redução ao valor recuperável</i></p>",
34:"<p>Certo pela letra do <b>item 19</b>: <b>“nem sempre é necessário determinar o valor justo líquido de despesas de venda de um ativo e seu valor em uso. Se qualquer um desses montantes exceder o valor contábil do ativo, este não tem desvalorização e, portanto, não é necessário estimar o outro valor”</b>.</p><p>Economia de trabalho: basta <b>um</b> dos dois superar o valor contábil para encerrar o teste.</p><p class='fb-fonte'>Resumo 06 · <i>Mensuração do valor recuperável</i></p>",
35:"<p>Errado — é o <b>EXEMPLO</b> do item 19 no resumo, e a conclusão dele é a oposta. Valor contábil <b>R$ 100.000</b>, valor justo líquido <b>R$ 120.000</b> e valor em uso <b>R$ 80.000</b>.</p><p>O resumo resolve assim: o valor recuperável é <b>R$ 120.000</b> (o maior), <b>“no entanto, o valor contábil (R$ 100.000) é inferior ao valor justo líquido de despesas de venda, indicando que o ativo NÃO POSSUI DESVALORIZAÇÃO”</b> — e nem seria necessário estimar o valor em uso.</p><p class='fb-fonte'>Resumo 06 · <i>Mensuração do valor recuperável — exemplo do item 19</i></p>",
36:"<p>Certo — é o esquema do resumo: <b>se o valor contábil for MAIOR que o valor recuperável, temos perda por desvalorização</b>.</p><p>É a própria definição do item 06: perda por desvalorização é <b>“o montante pelo qual o valor contábil de um ativo ou de UGC excede seu valor recuperável”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Mensuração do valor recuperável — esquema</i></p>",
37:"<p>Certo, e a assertiva reproduz o esquema inteiro. Quando o valor contábil é <b>MENOR</b> que o valor recuperável, o resumo aponta duas saídas: <b>“nenhum ajuste será feito”</b> ou <b>“será feita uma reversão, caso existam perdas já reconhecidas”</b>.</p><p>Ou seja: sem perda anterior, nada se lança; com perda anterior, reverte-se — respeitando o teto do item 117.</p><p class='fb-fonte'>Resumo 06 · <i>Mensuração do valor recuperável — esquema</i></p>",
38:"<p>Certo — é o <b>LANÇAMENTO DAS PERDAS POR DESVALORIZAÇÃO</b> do resumo, literal: <b>D – Perdas por desvalorização do Ativo (Despesas)</b> · <b>C – Perdas por desvalorização de Ativos (conta retificadora do ativo)</b>.</p><p>Débito no resultado, crédito na retificadora — o ativo não é baixado diretamente.</p><p class='fb-fonte'>Resumo 06 · <i>Lançamentos</i></p>",
39:"<p>Errado: o lançamento está <b>invertido</b>. O <b>LANÇAMENTO DE REVERSÃO</b> do resumo é <b>D – Perdas por desvalorização de Ativos (conta retificadora do ativo)</b> · <b>C – Reversão de perdas por desvalorização (Receitas)</b>.</p><p>A conta de <b>receita</b> vai a <b>crédito</b>; quem é debitada é a retificadora do ativo, que assim diminui e devolve valor ao ativo.</p><p class='fb-fonte'>Resumo 06 · <i>Lançamentos</i></p>",
40:"<p>Certo pela letra do <b>item 120</b>, transcrito no quadro <b>ATENÇÃO!</b> do resumo: <b>“a reversão de perda por desvalorização sobre ativo reavaliado deve ser reconhecida em outros resultados abrangentes sob o título de reserva de reavaliação”</b>.</p><p>E vale para os dois lados: o resumo completa que <b>“a perda por desvalorização de Ativo REAVALIADO deve ser reconhecida em outros resultados abrangentes (na conta de reserva de reavaliação no PL)”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Lançamentos — Atenção! item 120</i></p>",
41:"<p>Certo — é o <b>LANÇAMENTO DAS PERDAS DE ATIVO REAVALIADO</b> do resumo: <b>D – Reserva de Reavaliação (diminui o PL)</b> · <b>C – Perdas por desvalorização de Ativo Reavaliado (conta retificadora do ativo)</b>.</p><p>Guarde o contraste que a banca explora: no ativo <b>comum</b>, a perda é <b>despesa</b>; no ativo <b>reavaliado</b>, ela <b>reduz o PL</b> pela reserva de reavaliação. Na reversão, inverte-se: D a retificadora · C Reserva de Reavaliação (aumenta o PL).</p><p class='fb-fonte'>Resumo 06 · <i>Lançamentos — ativo reavaliado</i></p>",
42:"<p>Certo pela letra da alínea <b>(b)</b> do <b>item 39</b>: as estimativas devem incluir <b>“projeções de saídas de caixa que são necessariamente incorridas para gerar as entradas de caixa advindas do uso contínuo do ativo (INCLUINDO as saídas de caixa para preparar o ativo para uso) e que podem ser diretamente atribuídas ou alocadas, em base consistente e razoável, ao ativo”</b>.</p><p>O exemplo do resumo é o imóvel alugado: as despesas de <b>manutenção, pintura, reparos e limpeza</b> entram na estimativa, porque são necessárias para gerar o aluguel.</p><p class='fb-fonte'>Resumo 06 · <i>Composição das estimativas de fluxos de caixa futuros</i></p>",
43:"<p>Errado — o item 39 diz o contrário na alínea <b>(c)</b>: as estimativas devem incluir <b>“se houver, fluxos de caixa líquidos a serem recebidos (ou pagos) quando da baixa do ativo ao término de sua vida útil”</b>.</p><p>O exemplo do resumo é a transportadora: ao estimar os fluxos futuros, ela <b>deve</b> considerar os ganhos líquidos da venda ou descarte dos <b>caminhões</b> no fim da vida útil.</p><p class='fb-fonte'>Resumo 06 · <i>Composição das estimativas de fluxos de caixa futuros</i></p>",
44:"<p>Certo — é o <b>EXEMPLO</b> do COMENTÁRIO 01 do item 39, com os mesmos números. Equipamento que produz <b>10.000</b> camisas por ano a <b>R$ 10</b> a unidade → fluxo de caixa futuro de <b>R$ 100.000</b> por ano.</p><p>Trazendo a valor presente a uma taxa de <b>10%</b> (0,10): <b>“valor em uso (valor presente) do Ativo = 100.000 / (1,1) = R$ 90.909,09”</b>. Estimar fluxo futuro não basta — o valor em uso é o <b>valor presente</b> dele.</p><p class='fb-fonte'>Resumo 06 · <i>Composição das estimativas de fluxos de caixa futuros — exemplo das camisas</i></p>",
45:"<p>Certo pela letra da alínea <b>(a)</b> do <b>item 43</b>, cuja finalidade o próprio texto declara: <b>“para evitar a dupla contagem”</b>. Ficam fora as entradas advindas de ativos que geram outras entradas <b>“em grande parte independentes das entradas de caixa do ativo sob revisão (por exemplo, ativos financeiros como contas a receber)”</b>.</p><p>No exemplo do resumo, ao estimar fluxos das <b>contas a receber</b> não se somam as entradas de uma <b>máquina alugada</b> — seriam contadas duas vezes.</p><p class='fb-fonte'>Resumo 06 · <i>Composição das estimativas de fluxos de caixa futuros — item 43</i></p>",
46:"<p>Errado, e por inversão do próprio item 43: as estimativas <b>NÃO</b> devem incluir <b>“saídas de caixa que se referem a obrigações que já foram reconhecidas como passivos (por exemplo, contas a pagar, passivos de planos de pensão e provisões)”</b>.</p><p>É o exemplo da <b>provisão judicial</b> do resumo: ação estimada em <b>R$ 60.000</b> e provisionada; mesmo com desfecho desfavorável de <b>R$ 70.000</b>, não se inclui a saída dos <b>R$ 60.000</b> já reconhecidos, senão <b>“a mesma obrigação seria contabilizada duas vezes”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Composição das estimativas de fluxos de caixa futuros — item 43</i></p>",
47:"<p>Certo pela literalidade do <b>item 117</b>: <b>“o aumento do valor contábil de um ativo, exceto o ágio por expectativa de rentabilidade futura (goodwill), atribuível à reversão de perda por desvalorização não deve exceder o valor contábil que teria sido determinado (líquido de depreciação, amortização ou exaustão), caso nenhuma perda por desvalorização tivesse sido reconhecida para o ativo em anos anteriores”</b>.</p><p>A reversão <b>devolve</b> o que foi perdido; ela não reavalia o ativo para cima.</p><p class='fb-fonte'>Resumo 06 · <i>Reversão de perda por desvalorização</i></p>",
48:"<p>Errado no <b>valor</b>. É o <b>EXEMPLO 01</b> do resumo: terreno por <b>R$ 100.000</b> em 31/12/2020; perda de <b>R$ 10.000</b> em 31/12/2021 (valor contábil de 90.000) e outra de <b>R$ 10.000</b> em 31/12/2022 (valor contábil de 80.000).</p><p>Em 2023, mesmo com recuperação de <b>R$ 40.000</b>, <b>“o valor contábil máximo após a reversão da perda por desvalorização seria R$ 100.000. Ou seja, a empresa somente poderia reverter as perdas dos anos anteriores e reconhecer uma receita de reversão de perdas por desvalorização de R$ 20.000”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Reversão de perda por desvalorização — exemplo 01</i></p>",
49:"<p>Certo — é o quadro final do resumo, em duas linhas: <b>Goodwill reconhece perda por desvalorização? SIM. Reconhece reversão de perda por desvalorização? NÃO.</b></p><p>O <b>EXEMPLO 02</b> mostra o efeito: ágio de <b>R$ 20.000</b> em 01/01/2022, perda de <b>R$ 2.000</b> em 31/12/2022 (contábil de 18.000). Em 2023 as expectativas de rentabilidade melhoram, mas a empresa <b>“não poderá reverter a perda por desvalorização anteriormente reconhecida, já que se trata de um Goodwill. Nesse caso, não há reconhecimento de receita de reversão de perdas”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Reversão de perda por desvalorização — exemplo 02</i></p>",
50:"<p>Certo — é a <b>QUESTÃO-EXEMPLO</b> do resumo. Ele resolve pelo conceito: o valor recuperável é o <b>MAIOR</b> valor entre o <b>valor em uso (R$ 9.000)</b> e o <b>valor justo líquido de despesas de venda (R$ 11.000 − R$ 1.500)</b>.</p><p>Logo, <b>“o valor recuperável da moto é de R$ 9.500”</b>. Repare que a pintura de R$ 1.500 é <b>despesa de venda</b> e por isso <b>reduz</b> o valor justo — não se usa os R$ 11.000 brutos.</p><p class='fb-fonte'>Resumo 06 · <i>Definições — Questão-exemplo (moto)</i></p>",
51:"<p>Errado: o gabarito da questão-exemplo é <b>R$ 9.500</b> (letra B), e não R$ 9.000. O R$ 9.000 é apenas o <b>valor em uso</b>, que perdeu a comparação para o valor justo líquido de R$ 9.500.</p><p>A conta do resumo, passo a passo: moto de <b>R$ 20.000</b> com uso por 4 anos e doação ao fim (<b>valor residual zero</b>) → após 2 anos, valor contábil de <b>R$ 10.000</b>. Recuperável de <b>R$ 9.500</b> → desvalorização de <b>R$ 500</b>. <b>“Valor Contábil = R$ 20.000 − R$ 10.000 − R$ 500 = R$ 9.500”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Definições — Questão-exemplo (moto)</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"06", nome:"CPC 01 — Redução ao valor recuperável de ativos", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
