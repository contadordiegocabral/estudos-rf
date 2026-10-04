/* Contabilidade Geral — Módulo 10: DRE e DRA (modo direto) */
window.MOD = window.MOD || {};
window.MOD.contab10 = (function(){
"use strict";

var CARDS = [
  ["Qual o objetivo da DRE?","Apresentar o <b>resultado da entidade</b> (também conhecido como <b>rédito</b>), <b>confrontando receitas e despesas</b> para apurar se a empresa obteve <b>Lucro ou Prejuízo no Exercício</b>."],
  ["A DRE é obrigatória por quais normas?","Por <b>ambas</b>: <b>Lei 6.404/76, art. 176, III</b> (“demonstração do resultado do exercício”) e <b>CPC 26, item 10, (b1)</b> (“demonstração do resultado do período”)."],
  ["Qual o CONTEÚDO da DRE definido pela Lei 6.404/76?","Apresentada de forma <b>DEDUTIVA</b>, com os detalhes necessários das <b>Receitas, Despesas, Ganhos e Perdas</b>, apresentando o <b>Lucro ou Prejuízo Líquido do exercício</b> (resultado econômico) e o seu <b>montante por ação do capital social</b>. É <b>obrigatória para todas as entidades</b>."],
  ["Art. 187, I — o que a DRE discriminará?","A <b>receita bruta das vendas e serviços</b>, as <b>deduções das vendas</b>, os <b>abatimentos</b> e os <b>impostos</b>."],
  ["Art. 187, II","A <b>receita líquida das vendas e serviços</b>, o <b>custo das mercadorias e serviços vendidos</b> e o <b>lucro bruto</b>."],
  ["Art. 187, III","As <b>despesas com as vendas</b>, as <b>despesas financeiras, deduzidas das receitas</b>, as <b>despesas gerais e administrativas</b>, e <b>outras despesas operacionais</b>."],
  ["Art. 187, IV","O <b>lucro ou prejuízo operacional</b>, as <b>outras receitas</b> e as <b>outras despesas</b>."],
  ["Art. 187, V","O <b>resultado do exercício antes do Imposto sobre a Renda</b> e a <b>provisão para o imposto</b>."],
  ["Art. 187, VI","As <b>participações</b> de <b>debêntures, empregados, administradores e partes beneficiárias</b>, mesmo na forma de <b>instrumentos financeiros</b>, e de <b>instituições ou fundos de assistência ou previdência de empregados</b>, <b>que não se caracterizem como despesa</b>."],
  ["Art. 187, VII","O <b>lucro ou prejuízo líquido do exercício</b> e o seu <b>montante por ação do capital social</b>."],
  ["Quais são as DEDUÇÕES DA RECEITA BRUTA na estrutura da Lei 6.404/76?","<b>Devoluções de Vendas</b> (ou Vendas Canceladas) · <b>Impostos e Contribuições sobre Vendas</b> (ICMS, ISS, PIS, COFINS) · <b>Abatimentos sobre vendas</b> · <b>Desconto INCONDICIONAL Concedido</b> (Desconto Comercial) · <b>Ajuste a Valor Presente de Vendas</b>."],
  ["Receita bruta menos deduções, e depois?","Receita bruta − deduções = <b>RECEITA LÍQUIDA DE VENDAS</b>; receita líquida − <b>CMV</b> = <b>LUCRO BRUTO</b> (Resultado Operacional Bruto)."],
  ["Quais as despesas operacionais na estrutura da Lei 6.404/76?","<b>De vendas</b> · <b>Administrativas ou gerais</b> · <b>Financeiras líquidas</b> (<b>despesa financeira − receita financeira</b>)."],
  ["Como se chega ao RESULTADO OPERACIONAL e ao LAIR?","Lucro bruto (−) despesas operacionais (−) outras despesas operacionais (+) outras receitas operacionais = <b>RESULTADO OPERACIONAL</b>. Depois (−) outras despesas (+) outras receitas = <b>RESULTADO ANTES DO IR E DA CSLL (LAIR)</b>."],
  ["Do LAIR ao resultado líquido, qual a ordem?","LAIR (−) <b>Provisão para IR e CSLL</b> = <b>LUCRO APÓS IR E CSLL</b>; depois (−) <b>Participações</b> = <b>RESULTADO LÍQUIDO</b> (Lucro ou Prejuízo do exercício)."],
  ["Quais são as cinco PARTICIPAÇÕES da estrutura da DRE?","<b>Debenturistas</b> · <b>Empregados</b> · <b>Administradores</b> · <b>Partes beneficiárias</b> · <b>Fundo de assistência ou previdência de funcionários</b>."],
  ["A Lei das S/A admite exceção ao regime de competência?","<b>Não.</b> A Lei das Sociedades por Ações <b>não admite exceções</b> ao reconhecimento das receitas e despesas pelo <b>regime de competência</b>."],
  ["A DRE distingue Receita de Ganho e Despesa de Perda?","<b>Não faz distinção conceitual.</b> A apresentação separada fundamenta-se na <b>necessidade de tomada de decisão gerencial (econômica)</b>."],
  ["Na Lei 6.404/76, as despesas são classificadas por qual critério?","De acordo com a <b>FUNÇÃO</b> — <b>não</b> de acordo com a natureza. Exemplo: a <b>despesa com depreciação</b> pode ser classificada tanto como <b>Despesa Administrativa</b> quanto como <b>Despesa Comercial</b>."],
  ["O que a Lei 11.941/09 mudou no art. 187, IV?","<b>Deixou de existir</b> a segregação das receitas e despesas em <b>operacionais e não operacionais</b>. A partir do exercício de <b>2008</b>, os normativos fazem referência apenas à segregação das atividades em <b>continuadas e não continuadas</b>."],
  ["Como a Lei exige a apresentação do lucro por ação?","<b>LLE ÷ nº de ações</b> (Lucro Líquido do Exercício) ou <b>PLE ÷ nº de ações</b> (Prejuízo Líquido do Exercício)."],
  ["Havendo IPI na venda, como a DRE começa?","<b>FATURAMENTO BRUTO</b> (−) <b>IPI</b> = <b>RECEITA BRUTA DE VENDAS</b> — e daí segue a estrutura normal. Isso ocorre porque o <b>IPI é imposto “por fora”</b>: não faz parte da Receita Bruta de acordo com a <b>Legislação do Imposto de Renda</b>."],
  ["Onde está o regime de competência na Lei das S/A, e o que diz?","Nas <b>alíneas do § 1º do art. 187</b>: serão computados <b>(a)</b> as receitas e rendimentos <b>ganhos no período, independentemente da sua realização em moeda</b>; e <b>(b)</b> os custos, despesas, encargos e perdas, <b>pagos ou incorridos</b>, correspondentes a essas receitas e rendimentos."],
  ["Definição de RECEITAS (CPCs 00 e 26)","<b>Aumentos nos ativos, ou reduções nos passivos</b>, que resultam em <b>aumentos no patrimônio líquido</b>. <b>Contribuições dos detentores</b> de direitos sobre o patrimônio <b>não são receitas</b>."],
  ["Definição de DESPESAS (CPCs 00 e 26)","<b>Reduções nos ativos, ou aumentos nos passivos</b>, que resultam em <b>reduções no patrimônio líquido</b>. <b>Distribuição aos detentores</b> de direitos sobre o patrimônio <b>não são despesas</b>."],
  ["CPC 00 (R2), item 4.71","Receitas e despesas são os <b>elementos das demonstrações contábeis</b> que se referem ao <b>desempenho financeiro</b> da entidade."],
  ["Qual o objetivo da DRE segundo o CPC 26?","Proporcionar informação acerca do <b>DESEMPENHO</b> da entidade. É <b>Demonstração Contábil obrigatória</b>, e há <b>necessidade de divulgação, de forma separada, da natureza e montante dos itens de Receita e Despesa quando estes são relevantes</b>."],
  ["Por onde começa a estrutura da DRE do CPC 26?","Pela <b>RECEITA (LÍQUIDA)</b> — a estrutura básica do CPC 26 é <b>mais enxuta</b> que a da Lei 6.404/76."],
  ["Como o CPC 26 trata as receitas e despesas financeiras e a equivalência patrimonial?","Após as outras receitas/despesas operacionais vem o <b>(+/−) Resultado de equivalência patrimonial</b> = <b>RESULTADO ANTES DAS RECEITAS E DESPESAS FINANCEIRAS</b>; então (−) despesas financeiras (+) receitas financeiras = <b>RESULTADO ANTES DOS TRIBUTOS SOBRE O LUCRO</b>."],
  ["Em quais dois grupos o CPC 26 segrega a DRE?","<b>Operações Continuadas</b> e <b>Operações Descontinuadas</b>. Depois do <b>Resultado líquido das operações continuadas</b> entra o <b>(+/−) Resultado líquido das operações descontinuadas</b>, chegando ao <b>Resultado líquido do período</b>."],
  ["O que é OPERAÇÃO DESCONTINUADA?","Segundo o <b>CPC 31</b>, é um <b>componente da entidade</b> que tenha sido <b>alienado</b> ou esteja <b>classificado como mantido para venda</b>."],
  ["Item 99 do CPC 26 — classificação da despesa","A entidade deve apresentar uma análise das despesas utilizando classificação baseada <b>na sua natureza, se permitida legalmente</b>, <b>ou</b> na sua <b>função dentro da entidade</b>. Deve eleger o critério que proporcionar informação <b>confiável e mais relevante</b>, obedecidas as determinações legais."],
  ["Item 101 do CPC 26 — subclassificação","As despesas devem ser <b>subclassificadas</b> a fim de destacar componentes do desempenho que possam diferir em termos de <b>frequência</b>, <b>potencial de ganho ou de perda</b> e <b>previsibilidade</b>."],
  ["MÉTODO DA NATUREZA — como é?","As despesas são <b>agregadas na DRE de acordo com sua natureza</b>. A classificação é <b>mais detalhada</b>. Exemplos: <b>depreciação, despesas com transporte, despesas de propaganda, compra de materiais, materiais consumidos, benefício a empregados</b>. Pode ser <b>simples de aplicar</b>, porque <b>não são necessárias alocações de gastos a classificações funcionais</b>."],
  ["MÉTODO DA FUNÇÃO — como é?","Classificam-se as despesas conforme a <b>função</b>, como parte do <b>custo dos produtos e dos serviços vendidos</b> ou, por exemplo, das <b>despesas administrativas</b>. Classificação <b>mais genérica</b>: no mínimo, divulgar o <b>custo dos produtos e serviços vendidos separadamente das outras despesas</b> (ex.: CPV, CMV, despesas com vendas). Pode <b>exigir alocações arbitrárias</b> e <b>considerável julgamento</b>."],
  ["Itens 104 e 105 do CPC 26","A entidade que classificar os gastos por <b>FUNÇÃO</b> deve divulgar <b>informação adicional sobre a NATUREZA</b> da despesa, dado que essa informação é <b>útil ao prever os futuros fluxos de caixa</b>."],
  ["A DRA é demonstração obrigatória na Lei 6.404/76?","<b>Não.</b> É <b>exigida pelas normas internacionais</b> e faz parte do conjunto completo de demonstrações contábeis do <b>Item 10, (b2), do CPC 26</b>. Mas <b>não consta</b> como demonstração obrigatória na Lei 6.404/76."],
  ["O que é RESULTADO ABRANGENTE?","É a <b>mutação que ocorre no Patrimônio Líquido durante um período</b>, resultante de <b>transações e outros eventos que NÃO sejam derivados de transações com os sócios na sua qualidade de proprietários</b>. Compreende <b>todos os componentes da Demonstração do Resultado e da Demonstração de Outros Resultados Abrangentes</b>."],
  ["Qual a estrutura da DRA, e onde ela pode ser apresentada?","<b>Resultado líquido do exercício (obtido na DRE)</b> (+/−) <b>Outros Resultados Abrangentes</b> = <b>Resultado Abrangente do Período</b>. Pode ser apresentada <b>dentro da DMPL</b> ou <b>em relatório próprio</b> — o <b>CPC 26 (R1) sugere</b> que seja <b>adicionada à DMPL</b>."],
  ["O que são OUTROS RESULTADOS ABRANGENTES, e quais os exemplos?","Itens de <b>receitas e despesas que NÃO são reconhecidos na DRE</b>, mas <b>alteram o PL da entidade quantitativamente</b>. Exemplos: <b>Ajustes de Avaliação Patrimonial</b> · <b>Ajustes Acumulados de Conversão</b> · <b>Realização da Reserva de Reavaliação</b> · <b>Ajustes de Exercícios Anteriores</b>."]
];

var QS = [
  ["A DRE tem por objetivo apresentar o resultado da entidade, também conhecido como rédito, confrontando receitas e despesas para apurar se a empresa obteve lucro ou prejuízo no exercício.","C","CEBRASPE","Objetivo da DRE."],
  ["A DRE é demonstração obrigatória exigida pela Lei nº 6.404/76, mas não integra o conjunto completo de demonstrações contábeis do CPC 26.","E","FCC","Integra: <b>item 10, (b1)</b> — demonstração do resultado do período."],
  ["Segundo a Lei nº 6.404/76, a DRE deve ser apresentada de forma dedutiva, com os detalhes necessários das receitas, despesas, ganhos e perdas.","C","FGV","Conteúdo da DRE."],
  ["A DRE apresenta o lucro ou prejuízo líquido do exercício e o seu montante por ação do capital social.","C","VUNESP","Resultado econômico e lucro por ação."],
  ["A DRE é demonstração obrigatória apenas para as companhias abertas.","E","CEBRASPE","É <b>obrigatória para todas as entidades</b>."],
  ["Nos termos do art. 187, I, a demonstração do resultado do exercício discriminará a receita bruta das vendas e serviços, as deduções das vendas, os abatimentos e os impostos.","C","Lei 6.404, art. 187, I","Literalidade."],
  ["Nos termos do art. 187, II, a DRE discriminará a receita líquida das vendas e serviços, o custo das mercadorias e serviços vendidos e o lucro bruto.","C","FCC","Literalidade."],
  ["Conforme o art. 187, III, a DRE discriminará as despesas financeiras acrescidas das receitas financeiras.","E","FGV","O inciso diz <b>despesas financeiras, DEDUZIDAS das receitas</b>."],
  ["O art. 187, IV, refere-se ao lucro ou prejuízo operacional, às outras receitas e às outras despesas.","C","VUNESP","Literalidade."],
  ["O art. 187, V, refere-se ao resultado do exercício antes do Imposto sobre a Renda e à provisão para o imposto.","C","CEBRASPE","Literalidade."],
  ["A DRE discriminará as participações de debêntures, empregados, administradores e partes beneficiárias ainda que se caracterizem como despesa.","E","FCC","O inciso VI alcança as participações <b>que não se caracterizem como despesa</b>."],
  ["O art. 187, VII, exige a discriminação do lucro ou prejuízo líquido do exercício e do seu montante por ação do capital social.","C","FGV","Literalidade."],
  ["São deduções da receita bruta as devoluções de vendas, os impostos e contribuições sobre vendas, os abatimentos sobre vendas, o desconto incondicional concedido e o ajuste a valor presente de vendas.","C","VUNESP","Os cinco itens da estrutura."],
  ["O desconto condicional concedido figura entre as deduções da receita bruta na estrutura da DRE.","E","CEBRASPE","É o desconto <b>INCONDICIONAL</b> concedido (desconto comercial)."],
  ["A receita líquida de vendas menos o custo da mercadoria vendida resulta no lucro bruto, também chamado de resultado operacional bruto.","C","FCC","Segundo degrau da estrutura."],
  ["Na estrutura da DRE da Lei nº 6.404/76, as despesas financeiras líquidas correspondem à receita financeira menos a despesa financeira.","E","FGV","É o inverso: <b>despesa financeira − receita financeira</b>."],
  ["Na estrutura da Lei nº 6.404/76, as despesas operacionais compreendem as de vendas, as administrativas ou gerais e as financeiras líquidas.","C","VUNESP","Os três itens do quadro."],
  ["A partir do resultado operacional, deduzem-se as outras despesas e somam-se as outras receitas para se chegar ao resultado antes do IR e da CSLL.","C","CEBRASPE","LAIR."],
  ["A provisão para IR e CSLL é deduzida depois das participações, chegando-se assim ao resultado líquido do exercício.","E","FCC","A ordem é inversa: LAIR − provisão = lucro após IR e CSLL; só então <b>− participações</b>."],
  ["Entre as participações da estrutura da DRE estão os debenturistas, os empregados, os administradores e as partes beneficiárias, não se incluindo o fundo de assistência ou previdência de funcionários.","E","FGV","O <b>fundo de assistência ou previdência de funcionários</b> é o quinto item da lista."],
  ["A Lei das Sociedades por Ações admite exceções ao reconhecimento das receitas e despesas pelo regime de competência.","E","CEBRASPE","<b>Não admite exceções</b>."],
  ["A DRE não faz distinção conceitual entre receita e ganho, nem entre despesa e perda.","C","FCC","A apresentação separada é gerencial."],
  ["Na Lei nº 6.404/76, as despesas são classificadas de acordo com a sua natureza.","E","FGV","De acordo com a <b>FUNÇÃO</b>."],
  ["A despesa com depreciação pode ser classificada tanto como despesa administrativa quanto como despesa comercial.","C","VUNESP","É o exemplo do método da função."],
  ["A Lei nº 11.941/09 alterou o art. 187, IV, da Lei nº 6.404/76 e fez deixar de existir a segregação das receitas e despesas em operacionais e não operacionais.","C","CEBRASPE","Desde o exercício de 2008."],
  ["Com a incidência de IPI na venda de mercadorias ou produtos, a DRE é estruturada para iniciar pela receita bruta de vendas, da qual se deduz o IPI para se chegar ao faturamento bruto.","E","FCC","Inverteu: inicia pelo <b>FATURAMENTO BRUTO</b>, (−) IPI = <b>receita bruta de vendas</b>."],
  ["O IPI compõe a receita bruta de vendas de acordo com a legislação do Imposto de Renda.","E","FGV","É imposto <b>“por fora”</b>: <b>não</b> faz parte da receita bruta."],
  ["O regime de competência está estabelecido nas alíneas do § 1º do art. 187 da Lei nº 6.404/76.","C","VUNESP","Alíneas a e b."],
  ["Pelo regime de competência, computam-se no resultado as receitas e os rendimentos ganhos no período somente quando realizados em moeda.","E","CEBRASPE","<b>Independentemente</b> da sua realização em moeda."],
  ["Na determinação do resultado do exercício são computados os custos, despesas, encargos e perdas, pagos ou incorridos, correspondentes às receitas e rendimentos do período.","C","Lei 6.404, art. 187, § 1º, b","Literalidade."],
  ["As receitas e despesas são apropriadas ao período em função de sua incorrência, independentemente de seus reflexos no caixa.","C","FCC","É o conceito de regime de competência."],
  ["Segundo o CPC 00 (R2), item 4.71, receitas e despesas são os elementos das demonstrações contábeis que se referem ao desempenho financeiro da entidade.","C","VUNESP","Literalidade do item."],
  ["Receitas são aumentos nos ativos, ou reduções nos passivos, que resultam em aumentos no patrimônio líquido.","C","CEBRASPE","Definição do CPC."],
  ["As contribuições dos detentores de direitos sobre o patrimônio são classificadas como receitas.","E","FCC","A definição as <b>exclui</b> expressamente."],
  ["Despesas são reduções nos ativos, ou reduções nos passivos, que resultam em reduções no patrimônio líquido.","E","FGV","São reduções nos ativos ou <b>AUMENTOS</b> nos passivos."],
  ["A distribuição aos detentores de direitos sobre o patrimônio é considerada despesa.","E","VUNESP","A definição a <b>exclui</b> expressamente."],
  ["Para o CPC 26, o objetivo da DRE é proporcionar informação acerca do desempenho da entidade.","C","CEBRASPE","Objetivo no quadro do CPC 26."],
  ["A estrutura básica da DRE definida pelo CPC 26 é mais detalhada que a da Lei nº 6.404/76, pois começa pela receita bruta de vendas.","E","FGV","É <b>mais enxuta</b> e começa pela <b>receita líquida</b>."],
  ["Na estrutura da DRE do CPC 26, o resultado de equivalência patrimonial é apresentado antes do resultado antes das receitas e despesas financeiras.","C","VUNESP","Fecha o bloco operacional."],
  ["O CPC 26, ao estruturar a DRE, faz uma segregação em operações continuadas e operações descontinuadas.","C","CEBRASPE","Quadro ATENÇÃO do resumo."],
  ["Operação descontinuada é o componente da entidade que tenha sido alienado, não abrangendo aquele que esteja apenas classificado como mantido para venda.","E","FCC","O CPC 31 abrange <b>as duas</b> situações."],
  ["Nos termos do item 99 do CPC 26, a entidade deve apresentar uma análise das despesas utilizando classificação baseada na sua natureza, se permitida legalmente, ou na sua função dentro da entidade.","C","FGV","Literalidade do item 99."],
  ["Nos termos do item 101 do CPC 26, as despesas devem ser subclassificadas a fim de destacar componentes do desempenho que possam diferir em termos de frequência, potencial de ganho ou de perda e previsibilidade.","C","VUNESP","Literalidade do item 101."],
  ["No método da natureza a classificação é mais genérica, devendo a entidade divulgar, no mínimo, o custo dos produtos e serviços vendidos separadamente das outras despesas.","E","CEBRASPE","Isso é o <b>método da função</b>; na natureza a classificação é <b>mais detalhada</b>."],
  ["São exemplos de classificação da despesa pela função a depreciação, as despesas com transporte, as despesas de propaganda e o benefício a empregados.","E","FCC","São exemplos do método da <b>NATUREZA</b>."],
  ["O método da função pode ser simples de aplicar porque não são necessárias alocações de gastos a classificações funcionais.","E","FGV","Essa vantagem é do método da <b>NATUREZA</b>."],
  ["A entidade que classificar os gastos por função deve divulgar informação adicional sobre a natureza da despesa, por ser útil ao prever os futuros fluxos de caixa.","C","VUNESP","Itens 104 e 105 do CPC 26."],
  ["A Demonstração do Resultado Abrangente consta como demonstração contábil obrigatória na Lei nº 6.404/76.","E","CEBRASPE","<b>Não consta</b> — é exigida pelas normas internacionais e pelo CPC 26."],
  ["Resultado abrangente é a mutação que ocorre no patrimônio líquido durante um período, incluídas as mutações derivadas de transações com os sócios na qualidade de proprietários.","E","FCC","Resulta de eventos <b>que NÃO</b> sejam derivados de transações com os sócios nessa qualidade."],
  ["Outros resultados abrangentes são itens de receitas e despesas que não são reconhecidos na DRE, mas alteram quantitativamente o patrimônio líquido da entidade.","C","VUNESP","Quadro da composição da DRA."],
  ["A DRA parte do resultado líquido do exercício obtido na DRE, ajustado pelos outros resultados abrangentes, chegando ao resultado abrangente do período.","C","CEBRASPE","Estrutura da DRA."],
  ["A DRA deve ser apresentada obrigatoriamente em relatório próprio, sendo vedada sua inclusão na Demonstração das Mutações do Patrimônio Líquido.","E","FCC","Pode estar <b>dentro da DMPL</b> — e o CPC 26 (R1) <b>sugere</b> exatamente isso."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("A DRE e a estrutura da Lei nº 6.404/76",
      '<div class="box"><span class="bl">O que é e por que é obrigatória</span>'+
      '<p>A DRE apresenta o <b>resultado da entidade</b> (o <b>rédito</b>), <b>confrontando receitas e despesas</b> para apurar <b>Lucro ou Prejuízo no Exercício</b>.</p>'+
      '<p>É <b>obrigatória nas duas normas</b>: <b>Lei 6.404/76, art. 176, III</b> (“demonstração do resultado do exercício”) e <b>CPC 26, item 10, (b1)</b> (“demonstração do resultado do período”).</p></div>'+
      '<div class="box"><span class="bl">Conteúdo da DRE</span>'+
      '<p>Apresentada de forma <b>DEDUTIVA</b>, detalhando <b>Receitas, Despesas, Ganhos e Perdas</b>.</p>'+
      '<p>Apresenta o <b>Lucro ou Prejuízo líquido do exercício</b> (resultado econômico) e o <b>montante por ação do capital social</b>. É <b>obrigatória para todas as entidades</b>.</p></div>'+
      '<div class="box"><span class="bl">Art. 187 — a lei seca, inciso por inciso</span>'+
      '<ul><li><b>I</b> — receita bruta das vendas e serviços, deduções das vendas, abatimentos e impostos.</li>'+
      '<li><b>II</b> — receita líquida das vendas e serviços, custo das mercadorias e serviços vendidos e lucro bruto.</li>'+
      '<li><b>III</b> — despesas com as vendas, despesas financeiras <b>deduzidas das receitas</b>, despesas gerais e administrativas e outras despesas operacionais.</li>'+
      '<li><b>IV</b> — lucro ou prejuízo operacional, outras receitas e outras despesas.</li>'+
      '<li><b>V</b> — resultado do exercício antes do IR e a provisão para o imposto.</li>'+
      '<li><b>VI</b> — participações de debêntures, empregados, administradores e partes beneficiárias, mesmo na forma de instrumentos financeiros, e de instituições ou fundos de assistência ou previdência de empregados, <b>que não se caracterizem como despesa</b>.</li>'+
      '<li><b>VII</b> — lucro ou prejuízo líquido do exercício e seu montante por ação do capital social.</li></ul>'+
      '<p><b>OBS do resumo:</b> <b>todos</b> os incisos do art. 187 fazem parte da estrutura da DRE.</p></div>'+
      '<div class="box"><span class="bl">Estrutura da DRE (Lei nº 6.404/76)</span>'+
      '<div class="tree"><div class="leaf"><b>RECEITA BRUTA DE VENDAS</b></div>'+
      '<div class="leaf">( − ) <b>Deduções da receita bruta</b>: devoluções de vendas (ou vendas canceladas) · impostos e contribuições sobre vendas (ICMS, ISS, PIS, COFINS) · abatimentos sobre vendas · <b>desconto INCONDICIONAL concedido</b> (comercial) · ajuste a valor presente de vendas</div>'+
      '<div class="leaf">= <b>RECEITA LÍQUIDA DE VENDAS</b></div>'+
      '<div class="leaf">( − ) Custo da Mercadoria Vendida (CMV)</div>'+
      '<div class="leaf">= <b>LUCRO BRUTO</b> (resultado operacional bruto)</div>'+
      '<div class="leaf">( − ) <b>Despesas operacionais</b>: de vendas · administrativas ou gerais · <b>financeiras líquidas</b> (despesa financeira − receita financeira)</div>'+
      '<div class="leaf">( − ) Outras despesas operacionais · ( + ) Outras receitas operacionais</div>'+
      '<div class="leaf">= <b>RESULTADO OPERACIONAL</b></div>'+
      '<div class="leaf">( − ) outras despesas · ( + ) outras receitas</div>'+
      '<div class="leaf">= <b>RESULTADO ANTES DO IR E DA CSLL (LAIR)</b></div>'+
      '<div class="leaf">( − ) Provisão para IR e CSLL → = <b>LUCRO APÓS IR E CSLL</b></div>'+
      '<div class="leaf">( − ) <b>Participações</b>: debenturistas · empregados · administradores · partes beneficiárias · fundo de assistência ou previdência de funcionários</div>'+
      '<div class="leaf">= <b>RESULTADO LÍQUIDO</b> (lucro ou prejuízo do exercício)</div></div>'+
      '<p>Estrutura conforme o <b>Manual de Contabilidade Societária — 3ª edição (FIPECAFI)</b>.</p></div>'+
      '<div class="box tip"><span class="bl">O lucro por ação</span>'+
      '<p>A Lei exige a apresentação do <b>lucro (ou prejuízo) por ação</b>:</p>'+
      '<p class="mn"><em>LLE ÷ nº de ações</em> · <em>PLE ÷ nº de ações</em></p></div>')
  ],
  V2:[
    sl("As observações do resumo, o IPI e o regime de competência",
      '<div class="box"><span class="bl">Observações 1 e 2</span>'+
      '<p><b>1)</b> A Lei das Sociedades por Ações <b>não admite exceções</b> ao reconhecimento das receitas e despesas pelo <b>regime de competência</b>.</p>'+
      '<p><b>2)</b> A DRE <b>não faz distinção conceitual</b> entre <b>Receita e Ganho</b> nem entre <b>Despesa e Perda</b>. A apresentação separada fundamenta-se na <b>necessidade de tomada de decisão gerencial (econômica)</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Observação 3 — função, não natureza</span>'+
      '<p>Na <b>Lei nº 6.404/76</b>, as despesas são classificadas de acordo com a <b>FUNÇÃO</b> — <b>não</b> de acordo com a sua <b>Natureza</b>.</p>'+
      '<p><b>Exemplo do resumo:</b> a <b>despesa com depreciação</b> pode ser classificada tanto como <b>Despesa Administrativa</b> quanto como <b>Despesa Comercial</b>.</p></div>'+
      '<div class="box"><span class="bl">Observação 4 — o que a Lei 11.941/09 apagou</span>'+
      '<p>A <b>Lei 11.941/09</b> alterou o <b>art. 187, IV</b>, e <b>deixou de existir</b> a segregação das receitas e despesas em <b>operacionais e não operacionais</b>.</p>'+
      '<p>A partir do exercício de <b>2008</b>, os normativos fazem referência apenas à segregação das atividades em <b>continuadas e não continuadas</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Observação 5 — quando há IPI</span>'+
      '<p>Havendo incidência de <b>IPI</b> na venda de mercadorias ou produtos (empresas industriais), a divulgação do imposto é importante para análise, e a DRE passa a <b>começar pelo Faturamento Bruto</b>:</p>'+
      '<div class="tree"><div class="leaf"><b>FATURAMENTO BRUTO</b></div>'+
      '<div class="leaf">( − ) <b>IPI</b></div>'+
      '<div class="leaf">= <b>RECEITA BRUTA DE VENDAS</b> → daqui segue a estrutura normal</div></div>'+
      '<p>Isso ocorre porque o <b>IPI é imposto “por fora”</b>: <b>não faz parte da Receita Bruta</b> de acordo com a <b>Legislação do Imposto de Renda</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Regime de competência — § 1º do art. 187</span>'+
      '<p>As alíneas do <b>§ 1º do art. 187</b> estabelecem o <b>REGIME DE COMPETÊNCIA</b>: receitas e despesas são apropriadas ao período em função de sua <b>incorrência</b> (ocorrência do fato gerador), <b>independentemente de seus reflexos no caixa</b>.</p>'+
      '<p><b>a)</b> as receitas e os rendimentos <b>ganhos no período, independentemente da sua realização em moeda</b>; e</p>'+
      '<p><b>b)</b> os custos, despesas, encargos e perdas, <b>pagos ou incorridos</b>, correspondentes a essas receitas e rendimentos.</p></div>')
  ],
  V3:[
    sl("A DRE do CPC 26, a classificação das despesas e a DRA",
      '<div class="box"><span class="bl">Receita e despesa nos CPCs 00 e 26</span>'+
      '<p><b>CPC 00 (R2), item 4.71:</b> receitas e despesas são os <b>elementos das demonstrações contábeis</b> que se referem ao <b>desempenho financeiro</b> da entidade.</p>'+
      '<p><b>RECEITAS:</b> aumentos nos ativos, ou <b>reduções nos passivos</b>, que resultam em <b>aumentos no PL</b>. <b>Contribuições dos detentores</b> de direitos sobre o patrimônio <b>não são receitas</b>.</p>'+
      '<p><b>DESPESAS:</b> reduções nos ativos, ou <b>aumentos nos passivos</b>, que resultam em <b>reduções no PL</b>. <b>Distribuição aos detentores</b> de direitos sobre o patrimônio <b>não são despesas</b>.</p>'+
      '<p><b>Quadro do CPC 26:</b> o objetivo da DRE é proporcionar informação acerca do <b>DESEMPENHO</b> da entidade; é <b>demonstração obrigatória</b>; exige <b>divulgação separada da natureza e montante</b> dos itens de receita e despesa <b>quando relevantes</b>.</p></div>'+
      '<div class="box"><span class="bl">Estrutura da DRE (CPC 26)</span>'+
      '<p>Mais <b>enxuta</b> que a da Lei nº 6.404/76, porque <b>já começa pela Receita Líquida</b>.</p>'+
      '<div class="tree"><div class="leaf">= <b>RECEITA (LÍQUIDA)</b></div>'+
      '<div class="leaf">( − ) Custo da Mercadoria Vendida (CMV)</div>'+
      '<div class="leaf">= <b>LUCRO BRUTO</b> (resultado operacional bruto)</div>'+
      '<div class="leaf">( − ) Despesas operacionais: de vendas · administrativas e gerais</div>'+
      '<div class="leaf">( − ) Outras despesas operacionais · ( + ) Outras receitas operacionais</div>'+
      '<div class="leaf">( +/− ) <b>Resultado de equivalência patrimonial</b></div>'+
      '<div class="leaf">= <b>RESULTADO ANTES DAS RECEITAS E DESPESAS FINANCEIRAS</b></div>'+
      '<div class="leaf">( − ) Despesas financeiras · ( + ) Receitas financeiras</div>'+
      '<div class="leaf">= <b>RESULTADO ANTES DOS TRIBUTOS SOBRE O LUCRO</b></div>'+
      '<div class="leaf">( − ) Despesas com tributos sobre o lucro · ( − ) Participações estatutárias sobre o lucro</div>'+
      '<div class="leaf">= <b>RESULTADO LÍQUIDO DAS OPERAÇÕES CONTINUADAS</b></div>'+
      '<div class="leaf">( +/− ) <b>RESULTADO LÍQUIDO DAS OPERAÇÕES DESCONTINUADAS</b></div>'+
      '<div class="leaf">= <b>RESULTADO LÍQUIDO DO PERÍODO</b> (lucro ou prejuízo do exercício)</div></div>'+
      '<p><b>ATENÇÃO:</b> o CPC 26 segrega a DRE em dois grupos — <b>Operações Continuadas</b> e <b>Operações Descontinuadas</b>. <b>Operação descontinuada</b> (CPC 31) é o <b>componente da entidade</b> que tenha sido <b>alienado</b> ou esteja <b>classificado como mantido para venda</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Classificar e subclassificar a despesa</span>'+
      '<p><b>Item 99 — classificação:</b> a análise das despesas usa classificação baseada <b>na sua natureza, se permitida legalmente</b>, <b>ou</b> na sua <b>função dentro da entidade</b>. A entidade elege o critério que der informação <b>confiável e mais relevante</b>, obedecidas as determinações legais. <b>A Lei 6.404/76 usa o MÉTODO DA FUNÇÃO.</b></p>'+
      '<p><b>Item 101 — subclassificação:</b> para destacar componentes do desempenho que possam diferir em <b>frequência</b>, <b>potencial de ganho ou de perda</b> e <b>previsibilidade</b>.</p>'+
      '<p><b>MÉTODO DA NATUREZA</b> — despesas agregadas conforme sua <b>natureza</b>; classificação <b>mais detalhada</b>; exemplos: <b>depreciação, transporte, propaganda, compra de materiais, materiais consumidos, benefício a empregados</b>. Pode ser <b>simples de aplicar</b> porque <b>não exige alocações a classificações funcionais</b>.</p>'+
      '<p><b>MÉTODO DA FUNÇÃO</b> — despesas conforme a <b>função</b>, como parte do <b>custo dos produtos e serviços vendidos</b> ou, por exemplo, das <b>despesas administrativas</b>; classificação <b>mais genérica</b>; no mínimo divulgar o <b>CPV/CMV separado das outras despesas</b>. Pode dar <b>informação mais relevante</b>, mas exige <b>alocações arbitrárias</b> e <b>considerável julgamento</b>.</p>'+
      '<p><b>Itens 104 e 105:</b> quem classifica por <b>FUNÇÃO</b> deve divulgar informação adicional sobre a <b>NATUREZA</b> da despesa, útil para <b>prever os futuros fluxos de caixa</b>.</p></div>'+
      '<div class="box"><span class="bl">Demonstração do Resultado Abrangente (DRA)</span>'+
      '<p>Exigida pelas <b>normas internacionais</b>, integra o conjunto completo do <b>Item 10, (b2), do CPC 26</b>. <b>Não consta</b> como demonstração obrigatória na <b>Lei 6.404/76</b>.</p>'+
      '<p><b>RESULTADO ABRANGENTE:</b> é a <b>mutação que ocorre no PL durante um período</b>, resultante de transações e outros eventos que <b>NÃO sejam derivados de transações com os sócios na sua qualidade de proprietários</b>. Compreende <b>todos os componentes da Demonstração do Resultado e da Demonstração de Outros Resultados Abrangentes</b>.</p>'+
      '<div class="tree"><div class="leaf">= <b>RESULTADO LÍQUIDO DO EXERCÍCIO</b> (obtido na DRE)</div>'+
      '<div class="leaf">( +/− ) <b>OUTROS RESULTADOS ABRANGENTES</b></div>'+
      '<div class="leaf">= <b>RESULTADO ABRANGENTE DO PERÍODO</b></div></div></div>'+
      '<div class="box tip"><span class="bl">A composição da DRA e a pegadinha da DMPL</span>'+
      '<p><b>Resultado do exercício</b> — receitas e despesas que afetam o resultado do exercício para se obter o <b>Resultado Líquido do Exercício</b>.</p>'+
      '<p><b>Outros Resultados Abrangentes</b> — itens de receitas e despesas que <b>não são reconhecidos na DRE</b>, mas <b>alteram o PL quantitativamente</b>. Exemplos: <b>Ajustes de Avaliação Patrimonial</b> · <b>Ajustes Acumulados de Conversão</b> · <b>Realização da Reserva de Reavaliação</b> · <b>Ajustes de Exercícios Anteriores</b>.</p>'+
      '<p><b>ATENÇÃO!</b> A DRA pode ser apresentada <b>dentro da DMPL</b> ou <b>em relatório próprio</b> — e o <b>CPC 26 (R1) sugere</b> que seja <b>adicionada à DMPL</b>.</p>'+
      '<p class="mn"><em>DRA = RLE (DRE) ± ORA</em></p></div>')
  ]
};

var EX = {
S1:{t:"gap", instr:"Complete a forma de apresentação da DRE",
  before:"A Lei 6.404/76 define que a DRE deve ser apresentada de forma ",
  after:", com os detalhes necessários das receitas, despesas, ganhos e perdas.",
  options:["dedutiva","aditiva","comparativa"], answer:0,
  why:"Forma dedutiva: parte-se da receita bruta e vai-se subtraindo até o resultado líquido."},

S2:{t:"multi", instr:"Marque o que integra o CONTEÚDO da DRE segundo a Lei 6.404/76",
  options:["Apresentação de forma dedutiva","Detalhamento de receitas, despesas, ganhos e perdas",
           "Lucro ou prejuízo líquido do exercício","Montante do resultado por ação do capital social",
           "Obrigatoriedade para todas as entidades",
           "Fluxos de caixa das atividades de financiamento","Mutações das reservas de capital"],
  answers:[0,1,2,3,4],
  why:"Os cinco primeiros formam o quadro de conteúdo da DRE do resumo."},

S3:{t:"match", instr:"Correlacione cada inciso do art. 187 ao seu conteúdo",
  pairs:[["Inciso I","Receita bruta das vendas e serviços, deduções das vendas, abatimentos e impostos"],
         ["Inciso II","Receita líquida, custo das mercadorias e serviços vendidos e lucro bruto"],
         ["Inciso III","Despesas com vendas, despesas financeiras deduzidas das receitas, gerais e administrativas"],
         ["Inciso V","Resultado antes do Imposto sobre a Renda e a provisão para o imposto"],
         ["Inciso VII","Lucro ou prejuízo líquido do exercício e seu montante por ação do capital social"]],
  why:"Todos os incisos do art. 187 fazem parte da estrutura da DRE."},

S4:{t:"sort", instr:"É dedução da receita bruta ou não é?",
  buckets:["Dedução da receita bruta","Não é dedução da receita bruta"],
  items:[["Devoluções de vendas (vendas canceladas)",0],
         ["Impostos e contribuições sobre vendas (ICMS, ISS, PIS, COFINS)",0],
         ["Abatimentos sobre vendas",0],
         ["Desconto incondicional concedido (comercial)",0],
         ["Ajuste a valor presente de vendas",0],
         ["Custo da mercadoria vendida",1],
         ["Despesas administrativas ou gerais",1]],
  why:"O CMV vem depois: receita líquida − CMV = lucro bruto."},

S5:{t:"wordbank", instr:"Monte a primeira parte da estrutura da DRE da Lei 6.404/76",
  target:["RECEITA","BRUTA","menos","DEDUÇÕES","igual","RECEITA","LÍQUIDA","menos","CMV","igual","LUCRO","BRUTO"],
  extra:["FATURAMENTO","IPI","PARTICIPAÇÕES"],
  why:"Lucro bruto é o mesmo que resultado operacional bruto."},

S6:{t:"mc", instr:"Na estrutura da DRE da Lei 6.404/76, o que são as despesas financeiras líquidas?",
  options:["Despesa financeira menos receita financeira",
           "Receita financeira menos despesa financeira",
           "Despesa financeira somada à receita financeira",
           "Apenas a despesa financeira, sem qualquer ajuste"],
  answer:0,
  why:"O art. 187, III, fala em despesas financeiras deduzidas das receitas."},

S7:{t:"mc", instr:"Qual a sequência correta do trecho final da estrutura da DRE da Lei 6.404/76?",
  options:["LAIR → (−) provisão para IR e CSLL → lucro após IR e CSLL → (−) participações → resultado líquido",
           "LAIR → (−) participações → (−) provisão para IR e CSLL → resultado líquido",
           "Resultado operacional → (−) participações → LAIR → resultado líquido",
           "LAIR → (−) provisão para IR e CSLL → resultado líquido → (−) participações"],
  answer:0,
  why:"A provisão para IR e CSLL vem antes das participações."},

S8:{t:"multi", instr:"Marque as PARTICIPAÇÕES que constam da estrutura da DRE",
  options:["Debenturistas","Empregados","Administradores","Partes beneficiárias",
           "Fundo de assistência ou previdência de funcionários",
           "Acionistas controladores","Credores com garantia real"],
  answers:[0,1,2,3,4],
  why:"São as cinco participações do quadro; o art. 187, VI, alcança as que não se caracterizem como despesa."},

S9:{t:"mc", instr:"Na Lei 6.404/76, qual o critério de classificação das despesas?",
  options:["O método da função","O método da natureza",
           "O método da frequência","Livre escolha da entidade, sem restrição legal"],
  answer:0,
  why:"Por isso a depreciação pode ser despesa administrativa ou comercial."},

S10:{t:"mc", instr:"O que a Lei 11.941/09 provocou ao alterar o art. 187, IV, da Lei 6.404/76?",
  options:["Deixou de existir a segregação das receitas e despesas em operacionais e não operacionais",
           "Passou a exigir a segregação entre receitas operacionais e não operacionais",
           "Extinguiu a apresentação do lucro por ação",
           "Passou a admitir exceções ao regime de competência"],
  answer:0,
  why:"Desde o exercício de 2008 fala-se apenas em atividades continuadas e não continuadas."},

S11:{t:"wordbank", instr:"Monte o início da DRE quando há incidência de IPI",
  target:["FATURAMENTO","BRUTO","menos","IPI","igual","RECEITA","BRUTA","DE","VENDAS"],
  extra:["CMV","LUCRO","ICMS"],
  why:"O IPI é imposto por fora: não faz parte da receita bruta na legislação do Imposto de Renda."},

S12:{t:"gap", instr:"Complete a alínea a do § 1º do art. 187",
  before:"Serão computados as receitas e os rendimentos ganhos no período, ",
  after:" da sua realização em moeda.",
  options:["independentemente","na exata medida","apenas depois"], answer:0,
  why:"É o regime de competência: a incorrência manda, não o caixa."},

S13:{t:"sort", instr:"Classifique cada afirmação do resumo sobre a DRE da Lei 6.404/76",
  buckets:["Verdadeiro","Falso"],
  items:[["A Lei das S/A não admite exceções ao regime de competência",0],
         ["A DRE não faz distinção conceitual entre receita e ganho",0],
         ["A DRE não faz distinção conceitual entre despesa e perda",0],
         ["Na Lei 6.404/76 as despesas são classificadas pela natureza",1],
         ["O IPI compõe a receita bruta de vendas",1]],
  why:"A Lei classifica pela função; o IPI é imposto por fora."},

S14:{t:"match", instr:"Correlacione as definições dos CPCs 00 e 26",
  pairs:[["Receitas","Aumentos nos ativos, ou reduções nos passivos, que resultam em aumentos no PL"],
         ["Despesas","Reduções nos ativos, ou aumentos nos passivos, que resultam em reduções no PL"],
         ["Não são receitas","Contribuições dos detentores de direitos sobre o patrimônio"],
         ["Não são despesas","Distribuição aos detentores de direitos sobre o patrimônio"]],
  why:"Item 4.71 do CPC 00 (R2): receitas e despesas se referem ao desempenho financeiro da entidade."},

S15:{t:"sort", instr:"A linha pertence à estrutura da Lei 6.404/76 ou à do CPC 26?",
  buckets:["Estrutura da Lei 6.404/76","Estrutura do CPC 26"],
  items:[["Começa pela receita bruta de vendas",0],
         ["Deduções da receita bruta detalhadas",0],
         ["Despesas financeiras líquidas dentro das despesas operacionais",0],
         ["Participações de debenturistas, empregados, administradores e partes beneficiárias",0],
         ["Começa pela receita líquida",1],
         ["Resultado de equivalência patrimonial",1],
         ["Resultado antes das receitas e despesas financeiras",1],
         ["Resultado líquido das operações descontinuadas",1]],
  why:"A estrutura do CPC 26 é mais enxuta porque já começa pela receita líquida."},

S16:{t:"mc", instr:"Segundo o CPC 31, o que é operação descontinuada?",
  options:["Componente da entidade que tenha sido alienado ou esteja classificado como mantido para venda",
           "Componente da entidade que tenha sido alienado, apenas",
           "Atividade cujo resultado foi negativo em dois exercícios seguidos",
           "Atividade que a entidade deixou de divulgar em notas explicativas"],
  answer:0,
  why:"O CPC 26 segrega a DRE em operações continuadas e descontinuadas."},

S17:{t:"sort", instr:"A característica é do método da natureza ou do método da função?",
  buckets:["Método da natureza","Método da função"],
  items:[["As despesas são agregadas na DRE de acordo com sua natureza",0],
         ["A classificação é mais detalhada",0],
         ["Exemplos: depreciação, transporte, propaganda, materiais consumidos, benefício a empregados",0],
         ["Simples de aplicar: não exige alocações de gastos a classificações funcionais",0],
         ["A classificação é mais genérica",1],
         ["No mínimo, divulgar o custo dos produtos e serviços vendidos separadamente das outras despesas",1],
         ["Exemplos: CPV, CMV, despesas com vendas",1],
         ["Pode exigir alocações arbitrárias e envolver considerável julgamento",1]],
  why:"Itens 104 e 105: quem classifica por função deve divulgar informação adicional sobre a natureza."},

S18:{t:"mc", instr:"Sobre a obrigatoriedade da DRA, qual afirmação está correta?",
  options:["Integra o conjunto completo do item 10 do CPC 26, mas não consta como obrigatória na Lei 6.404/76",
           "É obrigatória na Lei 6.404/76 e facultativa no CPC 26",
           "É obrigatória em ambas as normas",
           "Não é exigida por norma alguma, sendo apenas gerencial"],
  answer:0,
  why:"Item 10, (b2), do CPC 26: demonstração do resultado abrangente do período."},

S19:{t:"multi", instr:"Marque os exemplos de OUTROS RESULTADOS ABRANGENTES dados pelo resumo",
  options:["Ajustes de Avaliação Patrimonial","Ajustes Acumulados de Conversão",
           "Realização da Reserva de Reavaliação","Ajustes de Exercícios Anteriores",
           "Custo da Mercadoria Vendida","Provisão para IR e CSLL"],
  answers:[0,1,2,3],
  why:"Não são reconhecidos na DRE, mas alteram o PL quantitativamente."},

S20:{t:"mc", instr:"Onde a DRA pode ser apresentada?",
  options:["Dentro da DMPL ou em relatório próprio — e o CPC 26 (R1) sugere que seja adicionada à DMPL",
           "Somente em relatório próprio, sendo vedada a inclusão na DMPL",
           "Somente dentro da DMPL",
           "Somente em notas explicativas"],
  answer:0,
  why:"Estrutura: resultado líquido do exercício obtido na DRE, mais ou menos os outros resultados abrangentes."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Contabilidade Geral 10","https://www.tecconcursos.com.br/s/Q2eMsV","Q2eMsV"],
  ["Caderno FCC — Contabilidade Geral 10","https://www.tecconcursos.com.br/s/Q2eMsY","Q2eMsY"],
  ["Caderno FGV — Contabilidade Geral 10","https://www.tecconcursos.com.br/s/Q294o8","Q294o8"],
  ["Caderno VUNESP — Contabilidade Geral 10","https://www.tecconcursos.com.br/s/Q2eMsZ","Q2eMsZ"]
];
var TECNOTA = "Assunto de relevância alta, e a banca ganha dinheiro em três fronteiras. A primeira é a ORDEM da estrutura da Lei 6.404/76: as deduções da receita bruta (inclusive o desconto INCONDICIONAL, nunca o condicional), as despesas financeiras líquidas como despesa financeira menos receita financeira, e a provisão para IR e CSLL sempre ANTES das participações. A segunda é Lei 6.404/76 contra CPC 26: a Lei começa pela receita bruta e classifica a despesa pela FUNÇÃO; o CPC 26 começa pela receita líquida, é mais enxuto, traz a equivalência patrimonial e o bloco financeiro em linha própria e segrega operações continuadas e descontinuadas. A terceira é a troca entre os métodos da subclassificação: natureza é a classificação mais DETALHADA e dispensa alocações funcionais; função é a mais GENÉRICA e exige no mínimo o CPV/CMV separado das outras despesas, com alocações arbitrárias e considerável julgamento. Fecha com a DRA: obrigatória no item 10 (b2) do CPC 26, NÃO obrigatória na Lei 6.404/76, e pode ir dentro da DMPL, como o próprio CPC 26 (R1) sugere.";

var UNITS = [
  {n:1, title:"A DRE e a estrutura da Lei 6.404/76", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Conteúdo, art. 187 e estrutura dedutiva", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · objetivo e conteúdo da DRE",   xp:25, data:["S1","S2","T0","T1","T2","T3","T4"]},
    {id:"K3", type:"drill",  title:"Praticar · os incisos do art. 187",       xp:25, data:["S3","S4","T5","T6","T7","T8","T9"]},
    {id:"K4", type:"drill",  title:"Praticar · a estrutura, degrau por degrau", xp:25, data:["S5","S6","S7","T10","T11","T12","T13"]},
    {id:"K5", type:"flash",  title:"Flashcards · DRE pela Lei das S/A",       xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]}
  ]},
  {n:2, title:"Observações, IPI e regime de competência", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"As observações do resumo e o § 1º do art. 187", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · participações e função",       xp:25, data:["S8","S9","T14","T15","T16","T17","T18"]},
    {id:"K8", type:"drill",  title:"Praticar · Lei 11.941/09 e IPI",          xp:25, data:["S10","S11","T19","T20","T21","T22","T23"]},
    {id:"K9", type:"drill",  title:"Praticar · regime de competência",        xp:25, data:["S12","S13","T24","T25","T26","T27","T28"]},
    {id:"K10",type:"flash",  title:"Flashcards · observações e competência",  xp:15, data:[15,16,17,18,19,20,21,22,23,24,25,26]}
  ]},
  {n:3, title:"CPC 26, classificação das despesas e DRA", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"DRE do CPC 26, métodos da despesa e DRA", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · receita, despesa e estrutura", xp:25, data:["S14","S15","T29","T30","T31","T32","T33","T34"]},
    {id:"K13",type:"drill",  title:"Praticar · continuadas e métodos",        xp:25, data:["S16","S17","T35","T36","T37","T38","T39","T40","T41"]},
    {id:"K14",type:"drill",  title:"Praticar · subclassificação e DRA",       xp:25, data:["S18","S19","S20","T42","T43","T44","T45","T46","T47","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · CPC 26 e resultado abrangente", xp:15, data:[27,28,29,30,31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                  xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                 xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 10 de Contabilidade (Radegondes) ---------- */
var COM={
0:"<p>É a definição de abertura do resumo: a DRE <b>“tem por objetivo apresentar o resultado da entidade (também conhecido como rédito), confrontando receitas e despesas para apurar se a empresa obteve Lucro ou Prejuízo no Exercício”</b>.</p><p>Guarde a palavra <b>rédito</b> — é sinônimo de resultado e a banca gosta de usá-la para assustar.</p><p class='fb-fonte'>Resumo 10 · <i>Demonstração do Resultado do Exercício (DRE)</i></p>",
1:"<p>Errado na segunda metade. O resumo destaca que a DRE é <b>“uma demonstração obrigatória exigida TANTO pela Lei nº 6.404/76, QUANTO pelo CPC 26”</b>.</p><p>Os dois dispositivos que ele transcreve: <b>Lei 6.404/76, art. 176, III</b> — “demonstração do resultado do exercício”; e <b>CPC 26, item 10, (b1)</b> — “demonstração do resultado do período”.</p><p class='fb-fonte'>Resumo 10 · <i>Demonstração do Resultado do Exercício (DRE)</i></p>",
2:"<p>Certo. Do resumo: <b>“a Lei 6.404/76 define o conteúdo da DRE, que deve ser apresentada de forma DEDUTIVA com detalhes necessários das Receitas, Despesas, Ganhos e Perdas”</b>.</p><p>Dedutiva é exatamente o desenho da estrutura: parte-se da receita bruta e vai-se subtraindo até o resultado líquido.</p><p class='fb-fonte'>Resumo 10 · <i>Conteúdo da DRE</i></p>",
3:"<p>Certo. O quadro de conteúdo do resumo diz que a DRE <b>apresenta</b> <b>“o Lucro ou Prejuízo líquido do exercício (Resultado Econômico)”</b> e <b>“o montante por ação do capital social”</b>.</p><p>É a mesma exigência do <b>art. 187, VII</b>, que fecha a lista de incisos.</p><p class='fb-fonte'>Resumo 10 · <i>Conteúdo da DRE</i></p>",
4:"<p>Errado por restringir. O quadro do resumo é categórico: a DRE <b>“é obrigatória para TODAS as entidades”</b>.</p><p>Não há corte por tipo societário nem por abertura de capital — o recorte da assertiva é invenção da banca.</p><p class='fb-fonte'>Resumo 10 · <i>Conteúdo da DRE</i></p>",
5:"<p>Certo, é a literalidade do <b>art. 187, I</b>, transcrito no resumo: <b>“a receita bruta das vendas e serviços, as deduções das vendas, os abatimentos e os impostos”</b>.</p><p>E vale a <b>OBS</b> do resumo: <b>todos</b> os incisos do art. 187 fazem parte da estrutura da DRE.</p><p class='fb-fonte'>Resumo 10 · <i>DRE sob a ótica da Lei 6.404/76</i></p>",
6:"<p>Certo pela letra do <b>art. 187, II</b>: <b>“a receita líquida das vendas e serviços, o custo das mercadorias e serviços vendidos e o lucro bruto”</b>.</p><p>Na estrutura isso vira dois degraus: receita líquida <b>( − ) CMV = LUCRO BRUTO</b> (resultado operacional bruto).</p><p class='fb-fonte'>Resumo 10 · <i>DRE sob a ótica da Lei 6.404/76</i></p>",
7:"<p>Errado por uma palavra. O <b>art. 187, III</b>, fala em <b>“as despesas financeiras, DEDUZIDAS das receitas”</b> — e não acrescidas.</p><p>Na estrutura do resumo a linha aparece como <b>“Financeiras líquidas (despesa financeira – receita financeira)”</b>, dentro das despesas operacionais.</p><p class='fb-fonte'>Resumo 10 · <i>DRE sob a ótica da Lei 6.404/76</i></p>",
8:"<p>Certo, literalidade do <b>art. 187, IV</b>: <b>“o lucro ou prejuízo operacional, as outras receitas e as outras despesas”</b>.</p><p>Guarde que é justamente esse inciso que a <b>Lei 11.941/09</b> alterou, apagando a segregação entre operacional e não operacional.</p><p class='fb-fonte'>Resumo 10 · <i>DRE sob a ótica da Lei 6.404/76</i></p>",
9:"<p>Certo pela letra do <b>art. 187, V</b>: <b>“o resultado do exercício antes do Imposto sobre a Renda e a provisão para o imposto”</b>.</p><p>Na estrutura é o <b>LAIR</b> — resultado antes do IR e da CSLL — seguido da <b>( − ) Provisão para IR e CSLL</b>.</p><p class='fb-fonte'>Resumo 10 · <i>DRE sob a ótica da Lei 6.404/76</i></p>",
10:"<p>Errado justamente no fecho do inciso. O <b>art. 187, VI</b>, alcança as participações <b>“que NÃO se caracterizem como despesa”</b>.</p><p>A lista completa que o resumo transcreve: <b>debêntures, empregados, administradores e partes beneficiárias</b>, mesmo na forma de <b>instrumentos financeiros</b>, e de <b>instituições ou fundos de assistência ou previdência de empregados</b>.</p><p class='fb-fonte'>Resumo 10 · <i>DRE sob a ótica da Lei 6.404/76</i></p>",
11:"<p>Certo, é o <b>art. 187, VII</b> na íntegra: <b>“o lucro ou prejuízo líquido do exercício e o seu montante por ação do capital social”</b>.</p><p>É a mesma exigência que aparece no quadro do resumo sobre o resultado líquido do período: <b>LLE ÷ nº de ações</b> ou <b>PLE ÷ nº de ações</b>.</p><p class='fb-fonte'>Resumo 10 · <i>DRE sob a ótica da Lei 6.404/76</i></p>",
12:"<p>Certo. São exatamente as cinco linhas de <b>( − ) Deduções da receita bruta</b> na estrutura do resumo: <b>devoluções de vendas (ou vendas canceladas)</b>, <b>impostos e contribuições sobre vendas (ICMS, ISS, PIS, COFINS)</b>, <b>abatimentos sobre vendas</b>, <b>desconto INCONDICIONAL concedido (desconto comercial)</b> e <b>ajuste a valor presente de vendas</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Estrutura da DRE de acordo com a Lei nº 6.404/76</i></p>",
13:"<p>Errado por uma palavra, e é a troca preferida da banca. A estrutura do resumo lista o <b>Desconto INCONDICIONAL Concedido (Desconto Comercial)</b> — nunca o condicional.</p><p>Fixe pelo apelido: o que deduz a receita bruta é o <b>desconto comercial</b>, concedido sem condição nenhuma.</p><p class='fb-fonte'>Resumo 10 · <i>Estrutura da DRE de acordo com a Lei nº 6.404/76</i></p>",
14:"<p>Certo, são dois degraus seguidos da estrutura: <b>= RECEITA LÍQUIDA DE VENDAS</b>, depois <b>( − ) Custo da Mercadoria Vendida (CMV)</b>, resultando em <b>= LUCRO BRUTO (RESULTADO OPERACIONAL BRUTO)</b>.</p><p>O próprio quadro registra os dois nomes entre parênteses, então os dois valem.</p><p class='fb-fonte'>Resumo 10 · <i>Estrutura da DRE de acordo com a Lei nº 6.404/76</i></p>",
15:"<p>Errado — a ordem da subtração está invertida. O resumo escreve, dentro das despesas operacionais: <b>“Financeiras líquidas (despesa financeira – receita financeira)”</b>.</p><p>Casa com o <b>art. 187, III</b>: as despesas financeiras são discriminadas <b>deduzidas das receitas</b>. Se invertesse, o que sobraria seria receita, não despesa.</p><p class='fb-fonte'>Resumo 10 · <i>Estrutura da DRE de acordo com a Lei nº 6.404/76</i></p>",
16:"<p>Certo. Na estrutura do resumo, a linha <b>( − ) Despesas operacionais</b> se abre em exatamente três itens: <b>de vendas</b>, <b>administrativas ou gerais</b> e <b>financeiras líquidas (despesa financeira – receita financeira)</b>.</p><p>As <b>outras despesas operacionais</b> e as <b>outras receitas operacionais</b> vêm em linhas separadas, logo abaixo.</p><p class='fb-fonte'>Resumo 10 · <i>Estrutura da DRE de acordo com a Lei nº 6.404/76</i></p>",
17:"<p>Certo. Depois do <b>= RESULTADO OPERACIONAL</b> a estrutura traz <b>( − ) outras despesas</b> e <b>( + ) outras receitas</b>, chegando ao <b>= RESULTADO ANTES DO IR E DA CSLL (LAIR = LUCRO ANTES DO IR)</b>.</p><p>Repare que o resumo usa “outras despesas/receitas operacionais” <b>antes</b> do resultado operacional e “outras despesas/receitas” <b>depois</b> dele — são linhas distintas.</p><p class='fb-fonte'>Resumo 10 · <i>Estrutura da DRE de acordo com a Lei nº 6.404/76</i></p>",
18:"<p>Errado na ordem. Na estrutura do resumo vem primeiro <b>( − ) Provisão para IR e CSLL</b>, resultando em <b>= LUCRO APÓS IR E CSLL</b>; só então entram as <b>( − ) Participações</b>, chegando ao <b>= RESULTADO LÍQUIDO</b>.</p><p>Faz sentido pelo art. 187: o inciso <b>V</b> (provisão para o imposto) precede o inciso <b>VI</b> (participações).</p><p class='fb-fonte'>Resumo 10 · <i>Estrutura da DRE de acordo com a Lei nº 6.404/76</i></p>",
19:"<p>Errado por excluir um item da lista. A estrutura do resumo abre as <b>( − ) Participações</b> em cinco: <b>debenturistas</b>, <b>empregados</b>, <b>administradores</b>, <b>partes beneficiárias</b> e <b>fundo de assistência ou previdência de funcionários</b>.</p><p>O quinto item é o que a banca corta com mais frequência — e ele consta expressamente do <b>art. 187, VI</b> (“instituições ou fundos de assistência ou previdência de empregados”).</p><p class='fb-fonte'>Resumo 10 · <i>Estrutura da DRE de acordo com a Lei nº 6.404/76</i></p>",
20:"<p>Errado. A <b>OBSERVAÇÃO 1</b> do resumo é frontal: <b>“a Lei das Sociedades por Ações NÃO admite exceções ao reconhecimento das receitas e despesas pelo regime de competência”</b>.</p><p>Nada de regime de caixa, nem por analogia: o § 1º do art. 187 manda computar as receitas ganhas <b>independentemente da realização em moeda</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Estrutura da DRE — Observações</i></p>",
21:"<p>Certo, é a <b>OBSERVAÇÃO 2</b>: <b>“a DRE não faz distinção conceitual entre Receita e Ganho e nem entre Despesa e Perda”</b>.</p><p>E o resumo completa o motivo da separação na apresentação: <b>“fundamenta-se em razão da necessidade de tomada de decisão gerencial (econômica)”</b> — é útil para gerir, não é diferença de conceito.</p><p class='fb-fonte'>Resumo 10 · <i>Estrutura da DRE — Observações</i></p>",
22:"<p>Errado — trocou função por natureza. A <b>OBSERVAÇÃO 3</b> é expressa: <b>“na Lei nº 6.404/76, as despesas são classificadas de acordo com a Função (NÃO é de acordo com a sua Natureza)”</b>.</p><p>E o resumo repete o alerta na parte do CPC 26: <b>“a Lei 6.404/76 utiliza o MÉTODO DA FUNÇÃO na classificação das Despesas”</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Estrutura da DRE — Observações</i></p>",
23:"<p>Certo, é o exemplo da <b>OBSERVAÇÃO 3</b>, com estas mesmas palavras: <b>“a despesa com depreciação pode ser classificada tanto como Despesa Administrativa quanto como Despesa Comercial”</b>.</p><p>É a prova de que o critério é a <b>função</b>: a mesma natureza de gasto vai para lugares diferentes conforme o setor que o consome.</p><p class='fb-fonte'>Resumo 10 · <i>Estrutura da DRE — Observações</i></p>",
24:"<p>Certo. A <b>OBSERVAÇÃO 4</b> do resumo: <b>“com a edição da Lei 11.941/09, que alterou o art. 187, inciso IV, da Lei nº 6.404/76, deixou de existir a segregação das receitas e despesas em operacionais e não operacionais”</b>.</p><p>Complemento do mesmo item: <b>“a partir do exercício de 2008, os normativos fazem referência apenas à segregação das atividades em continuadas e não continuadas”</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Estrutura da DRE — Observações</i></p>",
25:"<p>Errado — inverteu as duas contas. A <b>OBSERVAÇÃO 5</b> desenha o início assim: <b>FATURAMENTO BRUTO</b> <b>( − ) IPI</b> <b>= RECEITA BRUTA DE VENDAS</b>, e a partir daí segue a estrutura normal.</p><p>O faturamento bruto é o <b>topo</b> da demonstração, não o resultado da dedução.</p><p class='fb-fonte'>Resumo 10 · <i>Observações — IPI e Faturamento Bruto</i></p>",
26:"<p>Errado. O resumo explica o porquê da conta separada: <b>“esse fato ocorre porque o IPI é um Imposto ‘Por fora’, ou seja, ele NÃO faz parte da Receita Bruta de acordo com a Legislação do Imposto de Renda”</b>.</p><p>Por isso, nas empresas industriais, a DRE começa pelo <b>Faturamento Bruto</b> e só depois de deduzir o IPI se chega à <b>receita bruta de vendas</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Observações — IPI e Faturamento Bruto</i></p>",
27:"<p>Certo. Do resumo: <b>“as alíneas do § 1º do art. 187 estabelecem o REGIME DE COMPETÊNCIA”</b>.</p><p>São duas alíneas: <b>a)</b> as receitas e os rendimentos <b>ganhos no período</b>, independentemente da realização em moeda; <b>b)</b> os custos, despesas, encargos e perdas, <b>pagos ou incorridos</b>, correspondentes a essas receitas e rendimentos.</p><p class='fb-fonte'>Resumo 10 · <i>Regime de Competência</i></p>",
28:"<p>Errado, e é o oposto do texto legal. A alínea <b>a</b> do § 1º do art. 187 computa as receitas e rendimentos ganhos no período <b>“INDEPENDENTEMENTE da sua realização em moeda”</b>.</p><p>O resumo resume a ideia: as receitas e despesas são apropriadas ao período <b>em função de sua incorrência</b> (ocorrência do fato gerador), <b>independentemente de seus reflexos no caixa</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Regime de Competência</i></p>",
29:"<p>Certo pela letra da alínea <b>b</b> do § 1º do art. 187, transcrita no resumo: <b>“os custos, despesas, encargos e perdas, pagos ou incorridos, correspondentes a essas receitas e rendimentos”</b>.</p><p>Note o <b>“pagos OU incorridos”</b>: basta um dos dois, e o que manda no reconhecimento é a incorrência.</p><p class='fb-fonte'>Resumo 10 · <i>Regime de Competência</i></p>",
30:"<p>Certo — é a definição que o resumo dá do regime de competência: <b>“as receitas e despesas serão apropriadas ao período em função de sua incorrência (ocorrência do Fato Gerador), independentemente de seus reflexos no caixa”</b>.</p><p>E vale lembrar a <b>OBSERVAÇÃO 1</b>: a Lei das S/A <b>não admite exceções</b> a esse regime.</p><p class='fb-fonte'>Resumo 10 · <i>Regime de Competência</i></p>",
31:"<p>Certo, é a transcrição do resumo: <b>“CPC 00 (R2), ITEM 4.71: Receitas e despesas são os elementos das demonstrações contábeis que se referem ao desempenho financeiro da entidade”</b>.</p><p>Casa com o objetivo da DRE no CPC 26, que é justamente proporcionar informação acerca do <b>desempenho</b> da entidade.</p><p class='fb-fonte'>Resumo 10 · <i>Demonstração do Resultado do Exercício — CPC 26</i></p>",
32:"<p>Certo, é o quadro <b>RECEITAS</b> do resumo: <b>“são aumentos nos ativos, ou reduções nos passivos, que resultam em aumentos no patrimônio líquido”</b>.</p><p>Repare na simetria com o quadro <b>DESPESAS</b>: reduções nos ativos, ou <b>aumentos</b> nos passivos, que resultam em <b>reduções</b> no PL.</p><p class='fb-fonte'>Resumo 10 · <i>Demonstração do Resultado do Exercício — CPC 26</i></p>",
33:"<p>Errado — a própria definição as exclui. O quadro <b>RECEITAS</b> do resumo termina assim: <b>“Contribuições dos detentores de direitos sobre o patrimônio NÃO são receitas”</b>.</p><p>É o aporte do sócio: aumenta o PL, mas por transação com o proprietário, e não por desempenho da entidade.</p><p class='fb-fonte'>Resumo 10 · <i>Demonstração do Resultado do Exercício — CPC 26</i></p>",
34:"<p>Errado no meio da frase. O quadro <b>DESPESAS</b> diz <b>“reduções nos ativos, ou AUMENTOS nos passivos, que resultam em reduções no patrimônio líquido”</b>.</p><p>Redução de passivo é o que aparece na definição de <b>receita</b>, não de despesa — a banca troca as duas palavras de lugar.</p><p class='fb-fonte'>Resumo 10 · <i>Demonstração do Resultado do Exercício — CPC 26</i></p>",
35:"<p>Errado. O fecho do quadro <b>DESPESAS</b> é expresso: <b>“Distribuição aos detentores de direitos sobre o patrimônio NÃO são despesas”</b>.</p><p>Distribuir dividendo reduz o PL, mas é transação com o sócio na qualidade de proprietário — por isso nem é despesa, nem entra no resultado abrangente.</p><p class='fb-fonte'>Resumo 10 · <i>Demonstração do Resultado do Exercício — CPC 26</i></p>",
36:"<p>Certo. O quadro <b>DRE / CPC 26</b> do resumo diz: <b>“o objetivo é proporcionar informação acerca do DESEMPENHO da entidade”</b>.</p><p>O mesmo quadro traz os outros dois pontos: é <b>demonstração contábil obrigatória</b> e há <b>“necessidade de divulgação, de forma separada, da natureza e montante dos itens de Receita e Despesa quando estes são relevantes”</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Demonstração do Resultado do Exercício — CPC 26</i></p>",
37:"<p>Errado duas vezes. O resumo abre a seção assim: <b>“reparem que a estrutura básica da DRE definida pelo CPC 26 é mais ENXUTA que a da Lei nº 6.404/76, uma vez que ela já começa com a Receita LÍQUIDA”</b>.</p><p>Quem começa pela <b>receita bruta</b> e detalha as deduções é a estrutura da <b>Lei 6.404/76</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Estrutura da DRE de acordo com o CPC 26</i></p>",
38:"<p>Certo. Na estrutura do CPC 26 no resumo, a linha <b>( +/− ) Resultado de equivalência patrimonial</b> fecha o bloco operacional e vem imediatamente antes de <b>= RESULTADO ANTES DAS RECEITAS E DESPESAS FINANCEIRAS</b>.</p><p>Só então entram <b>( − ) Despesas financeiras</b> e <b>( + ) Receitas financeiras</b>, chegando ao <b>RESULTADO ANTES DOS TRIBUTOS SOBRE O LUCRO</b>. É outra diferença em relação à Lei, que põe as financeiras líquidas dentro das despesas operacionais.</p><p class='fb-fonte'>Resumo 10 · <i>Estrutura da DRE de acordo com o CPC 26</i></p>",
39:"<p>Certo, é o quadro <b>ATENÇÃO</b> do resumo: <b>“note que o CPC 26, ao estruturar a DRE, faz uma segregação em dois grupos: Operações Continuadas; e Operações Descontinuadas”</b>.</p><p>Na estrutura isso aparece no fecho: <b>= RESULTADO LÍQUIDO DAS OPERAÇÕES CONTINUADAS</b>, depois <b>( +/− ) RESULTADO LÍQUIDO DAS OPERAÇÕES DESCONTINUADAS</b>, e então o <b>RESULTADO LÍQUIDO DO PERÍODO</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Estrutura da DRE de acordo com o CPC 26</i></p>",
40:"<p>Errado por cortar metade do conceito. O resumo traz: <b>“OPERAÇÃO DESCONTINUADA → Segundo o CPC 31, é um componente da entidade que tenha sido alienado OU esteja classificado como mantido para venda”</b>.</p><p>São <b>duas</b> hipóteses alternativas, e a segunda dispensa a alienação já consumada.</p><p class='fb-fonte'>Resumo 10 · <i>Estrutura da DRE de acordo com o CPC 26</i></p>",
41:"<p>Certo pela letra do <b>item 99</b>, como o resumo transcreve: a entidade deve apresentar uma análise das despesas usando classificação baseada <b>“na sua natureza, se permitida legalmente; ou na sua função dentro da entidade”</b>.</p><p>E o mesmo trecho completa: a entidade <b>“deve eleger o critério que proporcionar informação confiável e mais relevante, obedecidas as determinações legais”</b>. Por isso o resumo avisa em seguida que a <b>Lei 6.404/76 usa o método da FUNÇÃO</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Classificação da Despesa de acordo com o CPC 26</i></p>",
42:"<p>Certo, é o <b>item 101</b> na íntegra: as despesas devem ser subclassificadas <b>“a fim de destacar componentes do desempenho que possam diferir em termos de frequência, potencial de ganho ou de perda e previsibilidade”</b>.</p><p>Guarde os três critérios em bloco — <b>frequência, potencial de ganho ou de perda, previsibilidade</b> — porque a banca troca um deles por “materialidade” ou “relevância”.</p><p class='fb-fonte'>Resumo 10 · <i>Subclassificação da Despesa de acordo com o CPC 26</i></p>",
43:"<p>Errado: o enunciado descreve o <b>MÉTODO DA FUNÇÃO</b>. No quadro do resumo, é lá que se lê <b>“aqui a classificação é mais genérica. No mínimo, a entidade deve divulgar o custo dos produtos e serviços vendidos separadamente das outras despesas”</b>.</p><p>No <b>método da natureza</b> o resumo diz o contrário: <b>“aqui a classificação é mais DETALHADA”</b>, com exemplos como depreciação e materiais consumidos.</p><p class='fb-fonte'>Resumo 10 · <i>Subclassificação da Despesa — método da natureza × método da função</i></p>",
44:"<p>Errado na coluna. Esses são os exemplos do <b>MÉTODO DA NATUREZA</b> no quadro do resumo: <b>“depreciação, despesas com transporte, despesas de propaganda, compra de materiais, materiais consumidos, benefício a empregados”</b>.</p><p>Os exemplos do <b>método da função</b> são outros: <b>CPV, CMV, despesas com vendas</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Subclassificação da Despesa — método da natureza × método da função</i></p>",
45:"<p>Errado, a vantagem está na outra coluna. No <b>método da natureza</b> o resumo registra: <b>“esse método pode ser simples de aplicar porque não são necessárias alocações de gastos a classificações funcionais”</b>.</p><p>Do <b>método da função</b> o resumo diz o oposto: <b>“pode proporcionar informação mais relevante aos usuários (...), mas pode exigir alocações arbitrárias e envolver considerável julgamento”</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Subclassificação da Despesa — método da natureza × método da função</i></p>",
46:"<p>Certo. É o fecho da seção, nos <b>ITENS 104 e 105 do CPC 26</b>: <b>“a entidade que classificar os gastos por FUNÇÃO deve divulgar informação adicional sobre a NATUREZA da despesa, dado que essa informação é útil ao prever os futuros fluxos de caixa”</b>.</p><p>O caminho é de mão única: quem vai pela função <b>complementa</b> com a natureza — e não o contrário.</p><p class='fb-fonte'>Resumo 10 · <i>Subclassificação da Despesa — itens 104 e 105</i></p>",
47:"<p>Errado. O resumo é direto: <b>“ressalta-se que a DRA NÃO consta como Demonstração Contábil obrigatória na Lei 6.404/76”</b>.</p><p>Ela é <b>“uma demonstração exigida pelas normas internacionais, fazendo parte do conjunto completo de demonstrações contábeis estabelecido no Item 10 do CPC 26”</b>, alínea <b>(b2)</b> — demonstração do resultado abrangente do período.</p><p class='fb-fonte'>Resumo 10 · <i>Demonstração do Resultado Abrangente (DRA)</i></p>",
48:"<p>Errado exatamente na exclusão que o conceito faz. No quadro do resumo, o <b>resultado abrangente</b> é a mutação no PL durante um período que <b>“resulta de transações e outros eventos que NÃO sejam derivados de transações com os sócios na sua qualidade de proprietários”</b>.</p><p>Aporte de capital e distribuição de dividendo ficam <b>fora</b>: o quadro de despesas do CPC 26 já avisava que distribuição aos detentores de direitos sobre o patrimônio não é despesa.</p><p class='fb-fonte'>Resumo 10 · <i>Demonstração do Resultado Abrangente (DRA)</i></p>",
49:"<p>Certo. É a coluna <b>Outros Resultados Abrangentes</b> do quadro de composição da DRA: <b>“itens de Receitas e Despesas que NÃO são reconhecidos na DRE, mas alteram o PL da entidade quantitativamente”</b>.</p><p>Os exemplos do resumo: <b>Ajustes de Avaliação Patrimonial</b>, <b>Ajustes Acumulados de Conversão</b>, <b>Realização da Reserva de Reavaliação</b> e <b>Ajustes de Exercícios Anteriores</b>.</p><p class='fb-fonte'>Resumo 10 · <i>DRA — composição e outros resultados abrangentes</i></p>",
50:"<p>Certo, é a estrutura da DRA no resumo, em três linhas: <b>= RESULTADO LÍQUIDO DO EXERCÍCIO (OBTIDO NA DRE)</b>, <b>( +/− ) OUTROS RESULTADOS ABRANGENTES</b>, <b>= RESULTADO ABRANGENTE DO PERÍODO</b>.</p><p>Guarde na forma curta: <b>DRA = resultado líquido da DRE ± ORA</b>.</p><p class='fb-fonte'>Resumo 10 · <i>DRA — estrutura</i></p>",
51:"<p>Errado nas duas afirmações. O quadro <b>ATENÇÃO!</b> do resumo: <b>“a Demonstração do Resultado Abrangente (DRA) pode ser apresentada dentro da Demonstração das Mutações do Patrimônio Líquido (DMPL), ou através de relatório próprio”</b>.</p><p>E ainda: <b>“o Pronunciamento Técnico CPC 26 (R1) SUGERE que a DRA seja adicionada à DMPL”</b> — ou seja, longe de vedar, a norma recomenda.</p><p class='fb-fonte'>Resumo 10 · <i>DRA — Atenção!</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"10", nome:"DRE e DRA", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
