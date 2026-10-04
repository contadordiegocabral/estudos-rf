/* Contabilidade Pública — Módulo 11: Demonstração das Variações Patrimoniais (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cpub11 = (function(){
"use strict";

var CARDS = [
  ["O que diz o art. 104 da Lei 4.320/64?","A DVP <b>evidenciará as alterações verificadas no patrimônio</b>, <b>resultantes ou independentes da execução orçamentária</b>, e <b>indicará o resultado patrimonial do exercício</b>."],
  ["O que significa “independentes da execução orçamentária”?","Que as alterações são reconhecidas com o <b>fato gerador</b>, sem depender das fases de execução da <b>receita</b> (lançamento, arrecadação, recolhimento) nem da <b>despesa</b> (empenho, liquidação, pagamento)."],
  ["Exemplos de alteração independente da execução orçamentária","<b>Rendimentos de aplicação financeira</b>, <b>atualização cambial da dívida</b> e <b>depreciação</b> de um bem."],
  ["Como se apura o resultado patrimonial?","Pelo <b>confronto entre as variações patrimoniais quantitativas aumentativas (VPA) e diminutivas (VPD)</b>. O valor apurado passa a compor o <b>saldo patrimonial do BP</b>."],
  ["DVP × Balanço Patrimonial — a pegadinha","A <b>DVP</b> demonstra o <b>RESULTADO patrimonial</b>. O <b>BP</b> demonstra o <b>SALDO patrimonial</b>."],
  ["A DVP equivale a qual demonstração do setor privado?","À <b>DRE</b> — mas com diferença essencial: a DRE apura <b>lucro ou prejuízo</b> como indicador de desempenho; no setor público o resultado patrimonial <b>NÃO é indicador de desempenho</b>."],
  ["Então o que o resultado patrimonial mede?","O <b>quanto o serviço público ofertado promoveu alterações quantitativas</b> dos elementos patrimoniais."],
  ["O que a DVP permite analisar?","Como as <b>políticas adotadas provocaram alterações no patrimônio público</b>, considerando a finalidade de atender às demandas da sociedade."],
  ["Com quais classes do PCASP a DVP é elaborada?","<b>Classe 3</b> (variações patrimoniais <b>diminutivas</b>) e <b>Classe 4</b> (variações patrimoniais <b>aumentativas</b>)."],
  ["Itens de VPA e VPD podem ser compensados?","<b>Não</b> — exceto quando <b>exigido ou permitido por norma específica</b>."],
  ["Quando as contas intraorçamentárias devem ser excluídas?","Nas contas de <b>nível de consolidação 2</b>, para fins de <b>consolidação no âmbito de cada ente</b> — evitando dupla contagem."],
  ["E quando NÃO há exclusão das intraorçamentárias?","Quando a DVP se referir <b>apenas às contas de um órgão, uma entidade ou uma empresa pública</b>."],
  ["O que a NBC TSP exige que a DVP inclua?","<b>a)</b> receita = <b>VPA</b>; <b>b)</b> despesa = <b>VPD</b>; <b>c)</b> parcela do resultado de <b>coligadas e empreendimento controlado em conjunto</b> pela <b>equivalência patrimonial</b>; <b>d)</b> <b>ganhos ou perdas antes dos tributos</b> reconhecidos na alienação de ativos ou pagamento de passivos de <b>operações em descontinuidade</b>; <b>e)</b> <b>resultado do período</b>."],

  ["O que as notas explicativas da DVP devem divulgar?","<b>Separadamente</b>, a <b>natureza e os valores dos itens relevantes</b> que compõem as <b>VPA</b> e as <b>VPD</b>."],
  ["O que vai em nota mesmo sem ser relevante?","<b>Redução ao valor recuperável</b> do imobilizado e suas <b>reversões</b>; <b>baixas</b> de itens do imobilizado e de <b>investimento</b>; <b>reestruturações</b> das atividades e <b>reversões de provisões para reestruturação</b>; <b>unidades operacionais descontinuadas</b>; <b>constituição ou reversão de provisões</b>."],
  ["Onde divulgar dividendos distribuídos aos proprietários?","Na <b>DVP</b>, na <b>DMPL</b> <b>ou</b> nas <b>notas explicativas</b> — o valor distribuído e o <b>valor por ação</b>."],
  ["Quais os dois métodos de classificação das VPD?","Quanto à <b>natureza</b> ou quanto à <b>função</b> dentro da entidade — escolhendo o critério de <b>representação fidedigna</b> e <b>mais relevante</b>."],
  ["Qual método é obrigatório no Brasil?","O da <b>natureza</b>, porque a estrutura do <b>PCASP detalha as VPD pela natureza</b>. Publicar também a análise por <b>função é facultativo</b>."],
  ["Exemplos do método da NATUREZA","<b>Depreciações</b>, <b>consumo de materiais</b>, <b>despesas com transporte</b>, <b>benefícios a empregados</b> e <b>despesas de publicidade</b>."],
  ["Como é o método da FUNÇÃO?","As VPD são classificadas pelo <b>programa ou propósito</b> para o qual foram incorridas — despesas com saúde, com educação, outras — apresentando separadamente as <b>principais funções</b> da entidade."],
  ["Vantagem e custo do método da função","Pode proporcionar <b>informação mais relevante</b>, mas a alocação às funções pode exigir <b>alocações arbitrárias</b> e <b>considerável julgamento</b>."],
  ["“Natureza da despesa” e “classificação funcional” da norma são as da execução orçamentária?","<b>Não se confundem</b> com os termos correspondentes usados na execução orçamentária."],
  ["Quais os grupos de VPA na estrutura da DVP?","<b>Impostos, taxas e contribuições de melhoria</b> · <b>Contribuições</b> · <b>Exploração e venda de bens, serviços e direitos</b> · <b>VPA financeiras</b> · <b>Transferências e delegações recebidas</b> · <b>Valorização e ganhos com ativos</b> · <b>Desincorporação de passivos</b> · <b>Outras VPA</b>."],
  ["Quais os grupos de VPD na estrutura da DVP?","<b>Pessoal e encargos</b> · <b>Benefícios previdenciários e assistenciais</b> · <b>Uso de bens, serviços e consumo de capital fixo</b> · <b>VPD financeiras</b> · <b>Transferências e delegações concedidas</b> · <b>Desvalorização e perdas de ativos</b> · <b>Incorporação de passivos</b> · <b>Tributárias</b> · <b>CMV, CPV e Custo dos Serviços Prestados</b> · <b>Outras VPD</b>."],
  ["Como fecha a DVP?","<b>Resultado Patrimonial do Período (III) = Total das VPA (I) – Total das VPD (II)</b>."],

  ["VPA — exemplos que mais caem","<b>Doações recebidas</b> (imóvel ou dinheiro), <b>transferências financeiras recebidas</b>, <b>obtenção de desconto</b>, <b>valor bruto da exploração de bens e direitos</b>, <b>valorização e ganhos com ativos</b>, <b>prescrição de passivos</b>, <b>atualização cambial com diminuição da dívida</b>, <b>rendimentos de aplicação financeira</b>, <b>recebimento por serviços prestados</b>, <b>cancelamento de dívidas</b>."],
  ["VPD — exemplos que mais caem","<b>Doações concedidas</b>, <b>transferências financeiras concedidas</b>, <b>juros e encargos da dívida</b>, <b>baixa de ativo por obsolescência</b>, <b>perda de ativo</b> (furto), <b>redução ao valor recuperável</b>, <b>atualização cambial com aumento da dívida</b>, <b>depreciação/amortização/exaustão</b>, <b>apropriação de seguros contratados</b>, <b>consumo de material de escritório</b>."],
  ["Quando ocorrem a VPA e a VPD?","Com o <b>FATO GERADOR</b> — independem da <b>arrecadação</b> da receita ou do <b>empenho</b> da despesa."],
  ["VPA e VPD — efeito no patrimônio líquido","<b>VPA</b> → <b>aumenta</b> o PL. <b>VPD</b> → <b>reduz</b> o PL."],
  ["O que é a fase “em liquidação”?","Fase criada pelo <b>MCASP</b>, que ocorre no momento do <b>fato gerador</b> — <b>depois do empenho e antes da liquidação</b>."],
  ["Operação de crédito afeta o resultado patrimonial?","<b>Não</b> — entra dinheiro no <b>ativo</b> e cria uma <b>obrigação</b> no passivo: é apenas <b>permuta</b>, variação <b>qualitativa</b>, não quantitativa."],
  ["Empenho, liquidação e pagamento de imóvel afeta o resultado patrimonial?","<b>Não</b> — é <b>fato permutativo</b>: diminui o ativo <b>caixa</b> e aumenta o ativo <b>imobilizado</b>. Variação <b>qualitativa</b>."],
  ["Recebimento de depósito de caução afeta o resultado patrimonial?","<b>Não</b> — aumenta o <b>ativo</b> (caixa) e aumenta o <b>passivo</b> (obrigação de devolver). Fato <b>permutativo</b>."],
  ["Quando reconhecer uma provisão — e qual o efeito?","Quando for <b>PROVÁVEL</b> a saída de recursos para liquidar a obrigação. Reconhece-se a <b>provisão (passivo)</b> em contrapartida de uma <b>VPD</b> — logo, <b>afeta</b> o resultado patrimonial."],
  ["Redução ao valor recuperável gera o quê?","Uma <b>VPD</b>. O <b>valor recuperável</b> é o <b>MAIOR</b> montante entre o <b>valor justo líquido de despesa de venda</b> e o <b>valor em uso</b>."],
  ["Ativo de R$ 950 mil, venda líquida R$ 820 mil, uso R$ 845 mil — qual a VPD?","Valor recuperável = <b>R$ 845 mil</b> (o maior). VPD = <b>950 – 845 = R$ 105 mil</b>."],
  ["Compromisso de doação é ativo?","<b>Não</b> — a entidade recebedora é <b>incapaz de controlar o acesso do transferente</b> aos benefícios econômicos futuros do item compromissado. Logo, <b>não se reconhece VPA</b>."],
  ["O que são transações com contraprestação?","Aquelas em que a entidade <b>recebe ativos (ou tem passivos extintos) e entrega valor em troca</b>. Em <b>regra não impactam</b> o resultado patrimonial — mas há exceções, como o <b>recebimento de aluguel</b>, que é <b>VPA</b>."],
  ["Lançamento de impostos gera VPA de quanto?","Do <b>valor lançado integralmente</b> — o fato gerador (em regra o lançamento) é o que importa, e não quanto foi arrecadado."],
  ["Empenho e liquidação de pessoal geram VPD de quanto?","Do <b>valor liquidado integralmente</b> — o fato gerador (em regra a liquidação) é o que importa, e não quanto foi pago ou inscrito em RP."],
  ["Questão-modelo: impostos lançados 80.000 (metade arrecadada), pessoal 60.000, veículo doado 72.000 com 12.000 de depreciação","<b>80.000 − 60.000 + 72.000 − 12.000 = R$ 80.000</b> positivo."],
  ["O truque das questões de DVP","Procure os <b>fatos geradores</b>, não os estágios orçamentários. E risque tudo que for <b>permutativo</b>: operação de crédito, compra de imóvel, caução."]
];

var QS = [
  ["A Demonstração das Variações Patrimoniais evidenciará as alterações verificadas no patrimônio, resultantes ou independentes da execução orçamentária.","C","FUNDATEC","Art. 104 da Lei 4.320/64."],
  ["A DVP está prevista no art. 103 da Lei nº 4.320/64.","E","CESPE","O art. 103 é do Balanço Financeiro; a DVP está no <b>art. 104</b>."],
  ["A DVP indicará o resultado patrimonial do exercício.","C","FCC","Parte final do art. 104."],
  ["O Balanço Patrimonial demonstrará o resultado patrimonial do exercício.","E","FGV","O BP demonstra o <b>saldo</b> patrimonial; o resultado é da <b>DVP</b>."],
  ["A expressão independentes da execução orçamentária significa que as variações são reconhecidas com o fato gerador.","C","VUNESP","Sem depender das fases de receita ou despesa."],
  ["Rendimentos de aplicação financeira, atualização cambial da dívida e depreciação são exemplos de alterações independentes da execução orçamentária.","C","FUNDATEC","Exemplos do MCASP."],
  ["O resultado patrimonial é apurado pelo confronto entre as variações patrimoniais qualitativas aumentativas e diminutivas.","E","CESPE","Pelo confronto entre as variações <b>quantitativas</b>."],
  ["O valor do resultado patrimonial apurado na DVP passa a compor o saldo patrimonial do Balanço Patrimonial.","C","FCC","Integração entre as demonstrações."],
  ["No setor público, o resultado patrimonial é o principal indicador de desempenho da entidade.","E","FGV","<b>Não</b> é indicador de desempenho — mede alterações quantitativas do patrimônio."],
  ["A DVP tem função semelhante à Demonstração do Resultado do Exercício do setor privado.","C","VUNESP","Com a ressalva quanto ao papel do resultado."],
  ["A DVP será elaborada utilizando-se as classes 3 e 4 do PCASP.","C","FUNDATEC","VPD e VPA."],
  ["A DVP será elaborada utilizando-se as classes 5 e 6 do PCASP.","E","CESPE","Essas são as classes orçamentárias."],
  ["Os itens de VPA e VPD não devem ser compensados, exceto quando exigido ou permitido por norma específica.","C","FCC","Mesma lógica da NBC TSP 11."],
  ["As contas intraorçamentárias devem ser excluídas para fins de consolidação das demonstrações no âmbito de cada ente.","C","FGV","Para evitar dupla contagem."],
  ["Se a DVP se referir apenas às contas de um órgão, ainda assim as contas intraorçamentárias devem ser excluídas.","E","VUNESP","Nesse caso <b>não</b> há exclusão."],
  ["A DVP deve incluir a parcela do resultado de coligadas e empreendimento controlado em conjunto mensurada pelo método da equivalência patrimonial.","C","FUNDATEC","Alínea c da NBC TSP."],
  ["A DVP deve apresentar os ganhos ou perdas antes dos tributos reconhecidos na alienação de ativos relativos a operações em descontinuidade.","C","CESPE","Alínea d da NBC TSP."],
  ["As notas explicativas da DVP devem divulgar separadamente a natureza e os valores dos itens relevantes que compõem as VPA e as VPD.","C","FCC","Regra geral das notas da DVP."],
  ["A constituição ou reversão de provisões só vai para nota explicativa quando os valores forem relevantes.","E","FGV","Pode ser apresentada <b>ainda que</b> os valores não sejam relevantes."],
  ["A redução ao valor recuperável do imobilizado e suas reversões podem ser apresentadas em notas explicativas ainda que não relevantes.","C","VUNESP","Consta do rol expresso."],
  ["Os dividendos distribuídos e o respectivo valor por ação podem ser divulgados na DVP, na DMPL ou nas notas explicativas.","C","FUNDATEC","Três alternativas admitidas."],
  ["A NBC TSP 11 incentiva a análise das VPD pelo método da natureza ou pelo método da função.","C","CESPE","Dois métodos alternativos."],
  ["No Brasil, é obrigatória para todos os entes a utilização do método da função na apresentação das VPD.","E","FCC","Obrigatório é o método da <b>natureza</b>."],
  ["É facultado ao ente publicar, adicionalmente, análise das VPD segundo o método da função.","C","FGV","Faculdade prevista no MCASP."],
  ["Depreciações, consumo de materiais, despesas com transporte e benefícios a empregados são exemplos do método da natureza.","C","VUNESP","Agregação pela natureza do gasto."],
  ["No método da função, as VPD são classificadas conforme o programa ou propósito para o qual foram incorridas.","C","FUNDATEC","Despesas com saúde, educação e outras."],
  ["O método da função dispensa julgamento porque a alocação segue critérios objetivos.","E","CESPE","Pode exigir <b>alocações arbitrárias</b> e considerável julgamento."],
  ["Os termos natureza da despesa e classificação funcional utilizados na NBC TSP 11 equivalem aos da execução orçamentária.","E","FCC","A norma adverte que <b>não se confundem</b>."],
  ["Impostos, taxas e contribuições de melhoria integram o grupo das variações patrimoniais aumentativas.","C","FGV","Primeiro grupo da estrutura."],
  ["Desincorporação de passivos é grupo das variações patrimoniais diminutivas.","E","VUNESP","É <b>VPA</b>; a <b>incorporação</b> de passivos é que é VPD."],
  ["Uso de bens, serviços e consumo de capital fixo é grupo das variações patrimoniais diminutivas.","C","FUNDATEC","Inclui a depreciação."],
  ["O resultado patrimonial do período corresponde ao total das VPA menos o total das VPD.","C","CESPE","Fechamento da DVP."],
  ["Transferências e delegações concedidas integram as variações patrimoniais aumentativas.","E","FCC","São <b>VPD</b>; as <b>recebidas</b> é que são VPA."],
  ["Doações recebidas de imóvel ou dinheiro constituem variação patrimonial aumentativa.","C","FGV","Transação sem contraprestação."],
  ["A obtenção de desconto é variação patrimonial diminutiva.","E","VUNESP","É <b>VPA</b>; os <b>juros e encargos da dívida</b> é que são VPD."],
  ["A prescrição de passivos é variação patrimonial aumentativa.","C","FUNDATEC","Extingue obrigação, aumentando o PL."],
  ["A atualização cambial que aumenta a dívida é variação patrimonial diminutiva.","C","CESPE","A que diminui a dívida é VPA."],
  ["A baixa de ativo por obsolescência e a perda de ativo por furto são variações patrimoniais diminutivas.","C","FCC","Desvalorização e perdas de ativos."],
  ["As VPA são operações que causam aumento no patrimônio líquido e as VPD, redução.","C","FGV","Efeito no PL."],
  ["A fase despesas em liquidação foi criada pelo MCASP e ocorre antes do empenho.","E","VUNESP","Ocorre <b>depois do empenho e antes da liquidação</b>, no momento do fato gerador."],
  ["O ingresso de recursos decorrente de operação de crédito não afeta a apuração do resultado patrimonial.","C","FUNDATEC","É fato permutativo — variação qualitativa."],
  ["O empenho, a liquidação e o pagamento de imóvel afetam o resultado patrimonial do exercício.","E","CESPE","Fato permutativo: sai caixa, entra imobilizado."],
  ["O recebimento de depósitos de caução não afeta a apuração do resultado patrimonial.","C","FCC","Aumenta ativo e passivo na mesma medida."],
  ["Uma provisão deve ser reconhecida quando for provável a saída de recursos para liquidar a obrigação, em contrapartida de uma VPD.","C","FGV","Afeta o resultado patrimonial."],
  ["A redução ao valor recuperável de ativos ocasiona uma variação patrimonial aumentativa.","E","VUNESP","Ocasiona uma <b>VPD</b>."],
  ["O valor recuperável é o maior montante entre o valor justo líquido de despesa de venda e o valor em uso.","C","FUNDATEC","Definição."],
  ["Ativo com valor contábil de R$ 950 mil, valor de venda líquido de R$ 820 mil e valor em uso de R$ 845 mil gera VPD de R$ 105 mil.","C","CESPE","950 menos o maior entre 820 e 845."],
  ["No exemplo acima, a redução ao valor recuperável seria de R$ 130 mil.","E","FCC","Isso usaria o menor valor; o correto é o <b>maior</b>."],
  ["O compromisso de doação se encaixa na definição de ativo e deve gerar o reconhecimento de VPA.","E","FGV","A entidade é incapaz de controlar o acesso do transferente aos benefícios futuros."],
  ["Transações com contraprestação são aquelas em que a entidade recebe ativos ou tem passivos extintos e entrega um valor em troca.","C","VUNESP","Definição."],
  ["Em regra as transações com contraprestação não impactam o resultado patrimonial, mas há exceções como o recebimento de aluguel de um ativo.","C","FUNDATEC","O aluguel é VPA."],
  ["Lançados impostos de R$ 80.000 com arrecadação de metade, a VPA reconhecida é de R$ 40.000.","E","CESPE","A VPA é de <b>R$ 80.000</b> — o fato gerador é o lançamento."],
  ["Empenhadas e liquidadas despesas de pessoal de R$ 60.000, com metade paga e metade em restos a pagar, a VPD é de R$ 60.000.","C","FCC","O fato gerador é a liquidação."],
  ["Recebido veículo em doação de R$ 72.000 com R$ 12.000 de depreciação no exercício, há VPA de R$ 72.000 e VPD de R$ 12.000.","C","FGV","Dois eventos distintos."],
  ["Com impostos lançados de R$ 80.000 (metade arrecadada), pessoal de R$ 60.000 e veículo doado de R$ 72.000 com R$ 12.000 de depreciação, o resultado patrimonial é positivo em R$ 80.000.","C","VUNESP","80 − 60 + 72 − 12."],
  ["A aprovação da lei orçamentária anual afeta o resultado patrimonial do período.","E","FUNDATEC","Não há fato gerador de VPA nem de VPD."],
  ["A DVP permite a análise de como as políticas adotadas provocaram alterações no patrimônio público.","C","CESPE","Finalidade analítica da demonstração."],
  ["Custo das mercadorias vendidas, custo dos produtos vendidos e custo dos serviços prestados são grupos das variações patrimoniais diminutivas.","C","FCC","Constam da estrutura da DVP."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("O que é a DVP e para que serve",
      '<div class="box"><span class="bl">Art. 104 da Lei 4.320/64</span>'+
      '<p class="mn"><em>A DVP evidenciará as <b>alterações verificadas no patrimônio</b>, <b>resultantes ou independentes da execução orçamentária</b>, e indicará o <b>resultado patrimonial do exercício</b>.</em></p></div>'+
      '<div class="box"><span class="bl">“Independentes da execução orçamentária”</span>'+
      '<p>As alterações são reconhecidas com o <b>FATO GERADOR</b> — sem depender das fases da <b>receita</b> (lançamento, arrecadação, recolhimento) nem da <b>despesa</b> (empenho, liquidação, pagamento).</p>'+
      '<p>Exemplos: <b>rendimentos de aplicação financeira</b>, <b>atualização cambial da dívida</b>, <b>depreciação</b>.</p></div>'+
      '<div class="box trap"><span class="bl">A troca que mais cai</span>'+
      '<p><b>DVP</b> → <b>RESULTADO</b> patrimonial. <b>Balanço Patrimonial</b> → <b>SALDO</b> patrimonial. O valor apurado na DVP <b>passa a compor</b> o saldo patrimonial do BP.</p></div>'+
      '<div class="box tip"><span class="bl">DVP × DRE</span>'+
      '<p>A DVP é a <b>“DRE do setor público”</b>. Mas enquanto a DRE apura <b>lucro ou prejuízo</b> como indicador de desempenho, o <b>resultado patrimonial NÃO é indicador de desempenho</b>: mede o <b>quanto o serviço público ofertado promoveu alterações quantitativas</b> no patrimônio.</p></div>'+
      '<div class="box"><span class="bl">Elaboração</span>'+
      '<p><b>Classe 3 (VPD)</b> e <b>Classe 4 (VPA)</b> do PCASP. VPA e VPD <b>não se compensam</b>, salvo norma específica.</p>'+
      '<p><b>Intraorçamentárias:</b> excluídas no <b>nível de consolidação 2</b> para consolidar no ente; <b>não</b> excluídas quando a DVP for de <b>um único órgão, entidade ou empresa pública</b>.</p></div>')
  ],
  V2:[
    sl("Notas, dividendos e os métodos de classificação das VPD",
      '<div class="box"><span class="bl">O que a NBC TSP exige na DVP</span>'+
      '<ul><li><b>a)</b> receita = <b>VPA</b>; <b>b)</b> despesa = <b>VPD</b>;</li>'+
      '<li><b>c)</b> parcela do resultado de <b>coligadas e controlado em conjunto</b> pela <b>equivalência patrimonial</b>;</li>'+
      '<li><b>d)</b> <b>ganhos ou perdas antes dos tributos</b> na alienação de ativos ou pagamento de passivos de <b>operações em descontinuidade</b>;</li>'+
      '<li><b>e)</b> <b>resultado do período</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">Notas explicativas</span>'+
      '<p>Divulgar <b>separadamente</b> a <b>natureza e os valores</b> dos itens <b>relevantes</b> de VPA e VPD.</p>'+
      '<p><b>Mesmo sem relevância</b>, podem ir em nota: <b>redução ao valor recuperável</b> e suas <b>reversões</b>, <b>baixas</b> do imobilizado e de investimento, <b>reestruturações</b> e <b>reversões de provisões para reestruturação</b>, <b>unidades descontinuadas</b>, <b>constituição ou reversão de provisões</b>.</p></div>'+
      '<div class="box"><span class="bl">Dividendos</span>'+
      '<p>Entidade com <b>capital em ações</b> divulga o valor distribuído e o <b>valor por ação</b> na <b>DVP</b>, na <b>DMPL</b> <b>ou</b> em <b>notas</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Natureza × função</span>'+
      '<p><b>Natureza:</b> VPD agregadas pelo que são — depreciações, consumo de materiais, transporte, benefícios a empregados, publicidade.</p>'+
      '<p><b>Função:</b> VPD classificadas pelo <b>programa ou propósito</b> — saúde, educação, outras. Pode ser <b>mais relevante</b>, mas exige <b>alocações arbitrárias</b> e julgamento.</p>'+
      '<p>Como o <b>PCASP detalha as VPD pela natureza</b>, esse método é <b>OBRIGATÓRIO</b> para todos os entes; a análise por <b>função é facultativa</b>. E os termos <b>não se confundem</b> com os da execução orçamentária.</p></div>')
  ],
  V3:[
    sl("Estrutura da DVP e exemplos de VPA e VPD",
      '<div class="box"><span class="bl">Variações Patrimoniais Aumentativas</span>'+
      '<ul><li>Impostos, taxas e contribuições de melhoria</li><li>Contribuições</li>'+
      '<li>Exploração e venda de bens, serviços e direitos</li><li>VPA financeiras</li>'+
      '<li>Transferências e delegações <b>recebidas</b></li><li>Valorização e ganhos com ativos</li>'+
      '<li><b>Desincorporação</b> de passivos</li><li>Outras VPA</li></ul></div>'+
      '<div class="box"><span class="bl">Variações Patrimoniais Diminutivas</span>'+
      '<ul><li>Pessoal e encargos</li><li>Benefícios previdenciários e assistenciais</li>'+
      '<li>Uso de bens, serviços e <b>consumo de capital fixo</b></li><li>VPD financeiras</li>'+
      '<li>Transferências e delegações <b>concedidas</b></li><li>Desvalorização e perdas de ativos</li>'+
      '<li><b>Incorporação</b> de passivos</li><li>Tributárias</li><li>CMV, CPV e Custo dos Serviços Prestados</li><li>Outras VPD</li></ul>'+
      '<p class="mn"><em>Resultado Patrimonial (III) = Total das VPA (I) − Total das VPD (II)</em></p></div>'+
      '<div class="box tip"><span class="bl">Pares que a banca inverte</span>'+
      '<p><b>VPA:</b> doações recebidas · transferências recebidas · obtenção de desconto · prescrição de passivos · atualização cambial que <b>diminui</b> a dívida · rendimentos de aplicação · cancelamento de dívidas.</p>'+
      '<p><b>VPD:</b> doações concedidas · transferências concedidas · juros e encargos da dívida · baixa por obsolescência · perda por furto · redução ao valor recuperável · atualização cambial que <b>aumenta</b> a dívida · depreciação, amortização e exaustão · consumo de material.</p></div>')
  ],
  V4:[
    sl("O que afeta e o que não afeta o resultado patrimonial",
      '<div class="box"><span class="bl">A regra</span>'+
      '<p>VPA e VPD ocorrem com o <b>FATO GERADOR</b> — independem de <b>arrecadação</b> ou <b>empenho</b>. <b>VPA aumenta o PL</b>; <b>VPD reduz o PL</b>.</p>'+
      '<p>A fase <b>“em liquidação”</b>, criada pelo MCASP, ocorre no momento do fato gerador — <b>depois do empenho e antes da liquidação</b>.</p></div>'+
      '<div class="box trap"><span class="bl">NÃO afeta — os três permutativos</span>'+
      '<ul><li><b>Operação de crédito</b>: entra caixa, nasce obrigação. Permuta.</li>'+
      '<li><b>Compra de imóvel</b> (empenho, liquidação e pagamento): sai caixa, entra imobilizado. Permuta.</li>'+
      '<li><b>Depósito de caução recebido</b>: entra caixa, nasce obrigação de devolver. Permuta.</li></ul>'+
      '<p>E também o <b>compromisso de doação</b>, que <b>não é ativo</b> — a entidade não controla o acesso do transferente aos benefícios futuros.</p></div>'+
      '<div class="box"><span class="bl">AFETA</span>'+
      '<ul><li><b>Provisão</b> quando a saída de recursos for <b>provável</b> → passivo em contrapartida de <b>VPD</b>.</li>'+
      '<li><b>Redução ao valor recuperável</b> → <b>VPD</b>. Valor recuperável = <b>MAIOR</b> entre o <b>valor justo líquido de despesa de venda</b> e o <b>valor em uso</b>.</li>'+
      '<li><b>Aluguel recebido</b> → <b>VPA</b>, exceção entre as transações com contraprestação.</li></ul>'+
      '<p><b>Exemplo:</b> ativo de 950 mil, venda líquida 820, uso 845 → recuperável 845 → <b>VPD de 105 mil</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Como resolver a questão de cálculo</span>'+
      '<p>Impostos <b>lançados</b> de 80.000 com metade arrecadada → <b>VPA de 80.000</b>. Pessoal <b>liquidado</b> de 60.000 com metade em RP → <b>VPD de 60.000</b>. Veículo doado de 72.000 com 12.000 de depreciação → <b>VPA 72.000</b> e <b>VPD 12.000</b>.</p>'+
      '<p class="mn"><em>80.000 − 60.000 + 72.000 − 12.000 = 80.000 positivo</em></p></div>')
  ]
};

var EX = {
S1:{t:"gap", instr:"Complete o art. 104 da Lei 4.320/64",
  before:"A DVP evidenciará as alterações verificadas no patrimônio, resultantes ou independentes da execução orçamentária, e indicará o ",
  after:" do exercício.",
  options:["resultado patrimonial","saldo patrimonial","superávit financeiro"], answer:0,
  why:"O <b>saldo</b> patrimonial é do Balanço Patrimonial."},

S2:{t:"match", instr:"Ligue cada demonstração ao que ela indica",
  pairs:[["DVP","Resultado patrimonial"],["Balanço Patrimonial","Saldo patrimonial"],
         ["Balanço Financeiro","Resultado financeiro"],["Balanço Orçamentário","Resultado orçamentário"]],
  why:"Os quatro resultados e seus demonstrativos."},

S3:{t:"multi", instr:"Marque as alterações independentes da execução orçamentária",
  options:["Rendimentos de aplicação financeira","Atualização cambial da dívida","Depreciação de um bem",
           "Arrecadação de impostos","Empenho de despesa de pessoal"],
  answers:[0,1,2],
  why:"As duas últimas decorrem da execução orçamentária."},

S4:{t:"mc", instr:"No setor público, o resultado patrimonial é:",
  options:["Um medidor das alterações quantitativas dos elementos patrimoniais",
           "O principal indicador de desempenho da entidade",
           "Equivalente ao superávit financeiro","O saldo da conta DDR"],
  answer:0,
  why:"Diferença essencial em relação à DRE do setor privado."},

S5:{t:"mc", instr:"Com quais classes do PCASP a DVP é elaborada?",
  options:["Classes 3 e 4","Classes 5 e 6","Classes 1 e 2","Classes 7 e 8"],
  answer:0,
  why:"Classe 3 = VPD; classe 4 = VPA."},

S6:{t:"sort", instr:"As contas intraorçamentárias devem ser excluídas?",
  buckets:["Excluir","Não excluir"],
  items:[["Consolidação das demonstrações no âmbito do ente (nível 2)",0],
         ["DVP referente apenas às contas de um órgão",1],
         ["DVP referente apenas a uma empresa pública",1]],
  why:"A exclusão existe para evitar dupla contagem na consolidação."},

S7:{t:"multi", instr:"Segundo a NBC TSP, o que a DVP deve incluir?",
  options:["Receita, correspondente às VPA","Despesa, correspondente às VPD",
           "Parcela do resultado de coligadas pela equivalência patrimonial",
           "Ganhos ou perdas antes dos tributos de operações em descontinuidade",
           "Resultado do período","A previsão da receita da LOA"],
  answers:[0,1,2,3,4],
  why:"A última é orçamentária."},

S8:{t:"multi", instr:"O que pode ir em nota explicativa da DVP mesmo sem ser relevante?",
  options:["Redução ao valor recuperável do imobilizado e suas reversões",
           "Baixas de itens do imobilizado e de investimento",
           "Reestruturações das atividades e reversões de provisões para reestruturação",
           "Unidades operacionais descontinuadas",
           "Constituição ou reversão de provisões",
           "O valor total da dotação atualizada"],
  answers:[0,1,2,3,4],
  why:"A última é do Balanço Orçamentário."},

S9:{t:"multi", instr:"Onde divulgar os dividendos distribuídos e o valor por ação?",
  options:["Na DVP","Na DMPL","Nas notas explicativas","No Balanço Orçamentário"],
  answers:[0,1,2],
  why:"Três alternativas admitidas pela norma."},

S10:{t:"sort", instr:"Classifique cada característica pelo método de apresentação das VPD",
  buckets:["Natureza","Função"],
  items:[["Depreciações, consumo de materiais, publicidade",0],
         ["Obrigatório para todos os entes no Brasil",0],
         ["Estrutura seguida pelo próprio PCASP",0],
         ["Despesas com saúde, com educação, outras",1],
         ["Classificação pelo programa ou propósito",1],
         ["Pode exigir alocações arbitrárias",1]],
  why:"A publicação pelo método da função é facultativa e adicional."},

S11:{t:"gap", instr:"Complete a regra brasileira",
  before:"Como a estrutura do PCASP detalha as VPD conforme a abordagem da natureza, a utilização do método da natureza é ",
  after:" para todos os entes.",
  options:["obrigatória","facultativa","vedada"], answer:0,
  why:"A análise pela função é facultativa e adicional."},

S12:{t:"mc", instr:"O método da função pode proporcionar informação mais relevante, mas:",
  options:["Pode exigir alocações arbitrárias e considerável julgamento",
           "É vedado no setor público","Dispensa qualquer nota explicativa",
           "Substitui obrigatoriamente o método da natureza"],
  answer:0,
  why:"Custo de julgamento do método."},

S13:{t:"sort", instr:"O grupo é de VPA ou de VPD?",
  buckets:["VPA","VPD"],
  items:[["Impostos, taxas e contribuições de melhoria",0],["Exploração e venda de bens, serviços e direitos",0],
         ["Transferências e delegações recebidas",0],["Valorização e ganhos com ativos",0],
         ["Desincorporação de passivos",0],["Pessoal e encargos",1],
         ["Uso de bens, serviços e consumo de capital fixo",1],["Transferências e delegações concedidas",1],
         ["Desvalorização e perdas de ativos",1],["Incorporação de passivos",1]],
  why:"Des<b>incorporação</b> é VPA; <b>incorporação</b> é VPD."},

S14:{t:"wordbank", instr:"Monte a fórmula do resultado patrimonial",
  target:["Total","das","VPA","−","Total","das","VPD"],
  extra:["Receitas Arrecadadas","Despesas Empenhadas","+"],
  why:"É o que fecha a DVP."},

S15:{t:"sort", instr:"Classifique cada evento",
  buckets:["VPA","VPD"],
  items:[["Doações recebidas",0],["Obtenção de desconto",0],["Prescrição de passivos",0],
         ["Rendimentos de aplicação financeira",0],["Atualização cambial com diminuição da dívida",0],
         ["Juros e encargos da dívida",1],["Baixa de ativo por obsolescência",1],
         ["Perda de ativo por furto",1],["Depreciação, amortização e exaustão",1],
         ["Consumo de material de escritório",1]],
  why:"Repare nos pares espelhados: recebidas × concedidas, aumenta × diminui a dívida."},

S16:{t:"multi", instr:"Marque o que é verdadeiro sobre VPA e VPD",
  options:["Ocorrem com o fato gerador","Independem da arrecadação da receita",
           "Independem do empenho da despesa","As VPA aumentam o patrimônio líquido",
           "As VPD reduzem o patrimônio líquido",
           "Só são reconhecidas após o pagamento"],
  answers:[0,1,2,3,4],
  why:"A última contraria o regime de competência patrimonial."},

S17:{t:"gap", instr:"Complete o conceito da fase em liquidação",
  before:"A fase despesas em liquidação foi criada pelo MCASP e ocorre no momento do fato gerador, ",
  after:".",
  options:["depois do empenho e antes da liquidação","antes do empenho","depois do pagamento"], answer:0,
  why:"É onde o patrimonial se descola do orçamentário."},

S18:{t:"sort", instr:"Afeta ou não afeta o RESULTADO PATRIMONIAL?",
  buckets:["Afeta","Não afeta"],
  items:[["Reconhecimento de provisão por perda provável",0],
         ["Redução ao valor recuperável de ativo",0],
         ["Recebimento de aluguel de um ativo",0],
         ["Ingresso de recursos de operação de crédito",1],
         ["Empenho, liquidação e pagamento de imóvel",1],
         ["Recebimento de depósito de caução",1],
         ["Compromisso de doação a ser recebida",1]],
  why:"Os permutativos só mudam a qualidade do patrimônio, não a quantidade."},

S19:{t:"mc", instr:"Por que a operação de crédito não afeta o resultado patrimonial?",
  options:["Porque há apenas permuta entre elementos patrimoniais — variação qualitativa",
           "Porque não há fato gerador","Porque é receita extraorçamentária",
           "Porque só afeta o Balanço Orçamentário"],
  answer:0,
  why:"Entra caixa no ativo e nasce obrigação no passivo."},

S20:{t:"gap", instr:"Complete o conceito de valor recuperável",
  before:"O valor recuperável é o ",
  after:" montante entre o valor justo líquido de despesa de venda e o valor em uso.",
  options:["maior","menor","médio"], answer:0,
  why:"Erro clássico: usar o menor e calcular a VPD errada."},

S21:{t:"mc", instr:"Ativo com valor contábil de R$ 950 mil, valor de venda líquido de R$ 820 mil e valor em uso de R$ 845 mil. Qual a VPD?",
  options:["R$ 105 mil","R$ 130 mil","R$ 25 mil","Não há VPD"],
  answer:0,
  why:"Recuperável = 845 (o maior). 950 − 845 = 105."},

S22:{t:"mc", instr:"Por que o compromisso de doação não gera VPA?",
  options:["Porque a entidade recebedora é incapaz de controlar o acesso do transferente aos benefícios econômicos futuros",
           "Porque doações nunca são VPA","Porque falta autorização orçamentária",
           "Porque o valor não é relevante"],
  answer:0,
  why:"Não se encaixa na definição de ativo."},

S23:{t:"sort", instr:"Qual o valor da variação reconhecida?",
  buckets:["Pelo valor lançado ou liquidado (integral)","Pelo valor arrecadado ou pago"],
  items:[["Impostos lançados de R$ 80.000 com metade arrecadada",0],
         ["Pessoal liquidado de R$ 60.000 com metade em restos a pagar",0]],
  why:"O que conta é o fato gerador, não o estágio orçamentário."},

S24:{t:"mc", instr:"Impostos lançados R$ 80.000 (metade arrecadada); pessoal empenhado e liquidado R$ 60.000 (metade em RP); veículo recebido em doação R$ 72.000 com R$ 12.000 de depreciação. Resultado patrimonial?",
  options:["Positivo em R$ 80.000","Positivo em R$ 40.000",
           "Positivo em R$ 20.000","Positivo em R$ 90.000"],
  answer:0,
  why:"80.000 − 60.000 + 72.000 − 12.000. A LOA é ruído."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Pública 11","https://www.tecconcursos.com.br/s/Q2qYoK","Q2qYoK"],
  ["Caderno FCC — Contabilidade Pública 11","https://www.tecconcursos.com.br/s/Q2qYog","Q2qYog"],
  ["Caderno FGV — Contabilidade Pública 11","https://www.tecconcursos.com.br/s/Q2qYor","Q2qYor"],
  ["Caderno VUNESP — Contabilidade Pública 11","https://www.tecconcursos.com.br/s/Q2qYpD","Q2qYpD"]
];
var TECNOTA = "A DVP é onde o regime de competência patrimonial encosta no orçamentário — e é exatamente aí que as bancas montam a armadilha. Em toda questão de cálculo, marque primeiro os fatos geradores e risque os permutativos (operação de crédito, compra de imóvel, caução). Feito isso, a conta é trivial.";

var UNITS = [
  {n:1, title:"O que é a DVP", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Art. 104, fato gerador e elaboração",    xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · o art. 104",                  xp:25, data:["S1","S2","T0","T1","T2","T3"]},
    {id:"K3", type:"drill",  title:"Praticar · resultado patrimonial",       xp:25, data:["S3","S4","T4","T5","T6","T7","T8","T9"]},
    {id:"K4", type:"drill",  title:"Praticar · elaboração e consolidação",   xp:25, data:["S5","S6","T10","T11","T12","T13","T14"]},
    {id:"K5", type:"flash",  title:"Flashcards · conceito e elaboração",     xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12]}
  ]},
  {n:2, title:"Notas, dividendos e métodos", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"O que a norma exige e natureza × função", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · conteúdo e notas",            xp:25, data:["S7","S8","T15","T16","T17","T18","T19"]},
    {id:"K8", type:"drill",  title:"Praticar · dividendos e métodos",        xp:25, data:["S9","S10","T20","T21","T22","T23"]},
    {id:"K9", type:"drill",  title:"Praticar · o método obrigatório",        xp:25, data:["S11","S12","T24","T25","T26","T27"]},
    {id:"K10",type:"flash",  title:"Flashcards · notas e métodos",           xp:15, data:[13,14,15,16,17,18,19,20,21,22]}
  ]},
  {n:3, title:"Estrutura, VPA e VPD", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Os grupos da DVP e os pares espelhados", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · os grupos da DVP",            xp:25, data:["S13","S14","T28","T29","T30","T31","T32"]},
    {id:"K13",type:"drill",  title:"Praticar · exemplos de VPA e VPD",       xp:25, data:["S15","S16","T33","T34","T35","T36","T37","T38"]},
    {id:"K14",type:"drill",  title:"Praticar · fato gerador e o PL",         xp:25, data:["S17","S19","T39","T40","T41"]},
    {id:"K15",type:"flash",  title:"Flashcards · estrutura e exemplos",      xp:15, data:[23,24,25,26,27,28,29,30]}
  ]},
  {n:4, title:"O que afeta o resultado patrimonial", cvar:"u4", lessons:[
    {id:"K16",type:"teoria", title:"Permutativos, provisões e cálculo",      xp:10, data:"V4"},
    {id:"K17",type:"drill",  title:"Praticar · permutativos",                xp:25, data:["S18","S22","T42","T43","T44"]},
    {id:"K18",type:"drill",  title:"Praticar · provisão e valor recuperável", xp:25, data:["S20","S21","T45","T46","T47","T48","T49"]},
    {id:"K19",type:"drill",  title:"Praticar · cálculo do resultado",        xp:25, data:["S23","S24","T50","T51","T52","T53","T54","T55","T56","T57"]},
    {id:"K20",type:"flash",  title:"Flashcards · o que afeta o resultado",   xp:15, data:[31,32,33,34,35,36,37,38,39,40,41]}
  ]},
  {n:5, title:"Fixação", cvar:"u5", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                xp:60, data:null},
    {id:"K21", type:"missao", title:"Missão TEC Concursos",                  xp:15, data:null},
    {id:"K22", type:"prova",  title:"Simulado cronometrado",                 xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo — é a literalidade do art. 104 da Lei nº 4.320/64, como o Resumo transcreve: a DVP <b>evidenciará as alterações verificadas no patrimônio, resultantes ou independentes da execução orçamentária</b>, e indicará o resultado patrimonial do exercício.</p><p>O esquema do material separa os dois casos: resultantes da execução orçamentária (ex.: arrecadação de receitas) e independentes dela (ex.: depreciação de um bem).</p><p class='fb-fonte'>Resumo 11 · <i>Demonstração das Variações Patrimoniais — art. 104</i></p>",
1:"<p>Errado no dispositivo. O Resumo funda a DVP no <b>art. 104</b> da Lei nº 4.320/64, e não no art. 103.</p><p>O quadro do material fixa a estrutura do art. 104 em três blocos: evidenciará as alterações verificadas no patrimônio; resultantes ou independentes da execução orçamentária; e indicará o resultado patrimonial do exercício.</p><p class='fb-fonte'>Resumo 11 · <i>Demonstração das Variações Patrimoniais — art. 104</i></p>",
2:"<p>Certo. A parte final do art. 104 é exatamente esta, segundo o Resumo: a DVP <b>indicará o resultado patrimonial do exercício</b>.</p><p>Guarde com o quadro NÃO CONFUNDA do material: a <b>DVP demonstrará o resultado patrimonial</b>; o <b>Balanço Patrimonial demonstrará o saldo patrimonial</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Demonstração das Variações Patrimoniais — art. 104</i></p>",
3:"<p>Errado — é o quadro <b>ATENÇÃO</b> do Resumo, com o gabarito ao lado de cada frase: <i>O Balanço Patrimonial demonstrará o resultado patrimonial</i> (ERRADO); <i>A Demonstração das Variações Patrimoniais demonstrará o resultado patrimonial</i> (CERTO).</p><p>O BP demonstra o <b>saldo patrimonial</b>. O resultado apurado na DVP é que vai compor esse saldo.</p><p class='fb-fonte'>Resumo 11 · <i>ATENÇÃO / NÃO CONFUNDA — DVP x Balanço Patrimonial</i></p>",
4:"<p>Certo. O Resumo explica que <b>independentes da execução orçamentária</b> significa que as alterações no patrimônio serão reconhecidas <b>com o acontecimento do fato gerador</b>.</p><p>Ou seja, não se exigem as fases de execução: nem <b>lançamento, arrecadação e recolhimento</b> da receita para reconhecer a VPA, nem <b>empenho, liquidação e pagamento</b> da despesa para reconhecer a VPD.</p><p class='fb-fonte'>Resumo 11 · <i>Demonstração das Variações Patrimoniais — EXPLICANDO MELHOR</i></p>",
5:"<p>Certo — são os três exemplos que o próprio Resumo lista para alterações patrimoniais <b>independentes da execução orçamentária</b>: <b>Rendimentos de Aplicação Financeira</b>, <b>Atualização Cambial da Dívida</b> e <b>Depreciação de um bem</b>.</p><p>Nenhum deles passa por lançamento/arrecadação ou empenho/liquidação: todos nascem do <b>fato gerador</b> e já impactam o patrimônio.</p><p class='fb-fonte'>Resumo 11 · <i>Demonstração das Variações Patrimoniais — EXPLICANDO MELHOR</i></p>",
6:"<p>Errado por uma palavra: o confronto é entre as variações patrimoniais <b>quantitativas</b> aumentativas (VPA) e diminutivas (VPD), não qualitativas.</p><p>A distinção é o coração do tema. As variações <b>qualitativas</b> (permutativas) não afetam o resultado — é o caso, no Resumo, da operação de crédito, da compra de imóvel e do depósito de caução, que apenas trocam elementos patrimoniais.</p><p class='fb-fonte'>Resumo 11 · <i>Demonstração das Variações Patrimoniais — apuração do resultado</i></p>",
7:"<p>Certo. O Resumo diz que o resultado patrimonial do período é apurado na DVP pelo confronto entre VPA e VPD, e que o <b>valor apurado passa a compor o saldo patrimonial do Balanço Patrimonial</b> do exercício.</p><p>É a ponte entre as duas demonstrações: a DVP produz o resultado, o BP o acolhe dentro do saldo patrimonial.</p><p class='fb-fonte'>Resumo 11 · <i>Demonstração das Variações Patrimoniais — apuração do resultado</i></p>",
8:"<p>Errado. O Resumo faz exatamente a ressalva contrária: a <b>DRE</b> do setor privado apura lucro ou prejuízo líquido, esse sim <b>um dos principais indicadores de desempenho</b>; já no setor público o resultado patrimonial <b>não é indicador de desempenho</b>.</p><p>Ele é, nas palavras do material, um <b>medidor do quanto o serviço público ofertado promoveu alterações quantitativas</b> dos elementos patrimoniais.</p><p class='fb-fonte'>Resumo 11 · <i>DVP x DRE</i></p>",
9:"<p>Certo. O Resumo afirma que a DVP tem <b>função semelhante à Demonstração do Resultado do Exercício (DRE)</b> do setor privado.</p><p>Semelhante, não idêntica: a DRE apura lucro ou prejuízo líquido como indicador de desempenho; no setor público o resultado patrimonial não cumpre esse papel, mas mede o quanto o serviço ofertado alterou quantitativamente o patrimônio.</p><p class='fb-fonte'>Resumo 11 · <i>DVP x DRE</i></p>",
10:"<p>Certo. A DVP será elaborada utilizando-se as <b>classes 3 (variações patrimoniais diminutivas)</b> e <b>4 (variações patrimoniais aumentativas)</b> do PCASP.</p><p>Guarde a numeração pelo par: <b>3 é VPD, 4 é VPA</b>. As classes 1 e 2 ficam com o Balanço Patrimonial e a classe 6 aparece no quadro dos ativos e passivos financeiros e permanentes.</p><p class='fb-fonte'>Resumo 11 · <i>Elaboração da DVP</i></p>",
11:"<p>Errado nas classes. A DVP usa as classes <b>3 e 4</b> do PCASP — classe 3 para as VPD e classe 4 para as VPA.</p><p>Troca clássica de números. Fixe: BP com classes 1 e 2; DVP com classes 3 e 4.</p><p class='fb-fonte'>Resumo 11 · <i>Elaboração da DVP</i></p>",
12:"<p>Certo, na literalidade do Resumo: os itens de VPA e VPD <b>não devem ser compensados</b>, <b>exceto quando exigido ou permitido por norma específica</b>.</p><p>A regra é a não compensação; a exceção depende de norma expressa. Quem apresenta só o líquido esconde a dimensão real das variações do período.</p><p class='fb-fonte'>Resumo 11 · <i>Elaboração da DVP</i></p>",
13:"<p>Certo. Havendo contas intraorçamentárias (<b>nível de consolidação 2</b>), elas devem ser <b>excluídas</b> para fins de consolidação das demonstrações contábeis <b>no âmbito de cada ente</b>.</p><p>O motivo está no EXPLICANDO MELHOR do Resumo: são operações dentro do mesmo orçamento, como a transferência de recursos de um departamento para outro da mesma entidade — se não forem excluídas, acabam <b>contabilizadas mais de uma vez</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Elaboração da DVP — contas intraorçamentárias</i></p>",
14:"<p>Errado — o Resumo prevê justamente a exceção. Se a DVP se referir <b>apenas às contas de um órgão, uma entidade ou uma empresa pública</b>, <b>não há exclusão</b> das contas intraorçamentárias.</p><p>A exclusão serve à <b>consolidação</b>. Sem consolidação, não há duplicidade a eliminar, e as intraorçamentárias permanecem.</p><p class='fb-fonte'>Resumo 11 · <i>Elaboração da DVP — contas intraorçamentárias</i></p>",
15:"<p>Certo — item (c) da lista da NBC TSP que o Resumo reproduz: a DVP deve incluir a <b>parcela do resultado de coligadas e empreendimento controlado em conjunto</b> mensurada pelo <b>método da equivalência patrimonial</b>.</p><p>A lista completa dos valores do período: (a) receita, correspondente às VPA; (b) despesa, correspondente às VPD; (c) a parcela por equivalência patrimonial; (d) ganhos ou perdas antes dos tributos em operações em descontinuidade; e (e) resultado do período.</p><p class='fb-fonte'>Resumo 11 · <i>Elaboração da DVP — itens da NBC TSP</i></p>",
16:"<p>Certo — item (d) da mesma lista: <b>ganhos ou perdas antes dos tributos</b> reconhecidos na <b>alienação de ativos ou pagamento de passivos</b> relativos a <b>operações em descontinuidade</b>.</p><p>Atenção a <b>antes dos tributos</b>: é assim que o Resumo enuncia, e a banca gosta de trocar por <i>líquidos de tributos</i>.</p><p class='fb-fonte'>Resumo 11 · <i>Elaboração da DVP — itens da NBC TSP</i></p>",
17:"<p>Certo. A DVP deverá ser acompanhada de notas explicativas, <b>divulgando separadamente a natureza e os valores dos itens relevantes</b> que compõem as VPA e as VPD.</p><p>Natureza, no exemplo do Resumo, são rubricas como impostos, transferências, ganhos e perdas. O padrão, portanto, é a <b>relevância</b> — com as exceções do quadro ATENÇÃO, que entram em nota ainda que não relevantes.</p><p class='fb-fonte'>Resumo 11 · <i>Notas Explicativas</i></p>",
18:"<p>Errado pelo <b>só quando relevantes</b>. A <b>constituição ou reversão de provisões</b> está na lista do quadro ATENÇÃO de circunstâncias que <b>poderão ser apresentadas em notas explicativas ainda que seus valores não sejam relevantes</b>.</p><p>Na mesma lista o Resumo traz: redução ao valor recuperável no ativo imobilizado e suas reversões, baixas de itens do imobilizado, baixas de investimento, reestruturações das atividades, reversões de provisões para gastos de reestruturação e unidades operacionais descontinuadas.</p><p class='fb-fonte'>Resumo 11 · <i>Notas Explicativas — ATENÇÃO</i></p>",
19:"<p>Certo — abre a lista do quadro ATENÇÃO. A <b>redução ao valor recuperável no ativo imobilizado</b> e as <b>reversões</b> dessas reduções podem ser apresentadas em notas explicativas <b>ainda que seus valores não sejam relevantes</b>.</p><p>São itens que dizem muito sobre a qualidade dos ativos da entidade, e por isso escapam do filtro geral da relevância.</p><p class='fb-fonte'>Resumo 11 · <i>Notas Explicativas — ATENÇÃO</i></p>",
20:"<p>Certo, e com as três opções exatas do Resumo. Quando a entidade distribui dividendos ou item similar aos proprietários e possui capital representado por ações, deve divulgar o valor distribuído no período e o <b>respectivo valor por ação</b> na <b>DVP</b>, na <b>DMPL</b> <b>ou</b> nas <b>notas explicativas</b>.</p><p>É alternativa, não cumulativa: basta uma das três localizações.</p><p class='fb-fonte'>Resumo 11 · <i>Distribuição de Dividendos</i></p>",
21:"<p>Certo. A NBC TSP 11 <b>incentiva</b> a apresentação de análise das VPD por dois métodos alternativos: quanto à <b>natureza</b> ou quanto à sua <b>função</b> dentro da entidade.</p><p>O critério de escolha, segundo a norma, é o que proporcionar informação que seja <b>representação fidedigna</b> e seja <b>mais relevante</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Classificação das Variações Patrimoniais Diminutivas</i></p>",
22:"<p>Errado — inverteu os métodos. Como a estrutura do <b>PCASP detalha as VPD conforme a abordagem da natureza</b>, é o <b>método da natureza</b> que é <b>obrigatório</b> para todos os entes.</p><p>O <b>método da função</b> é apenas <b>facultativo</b>: o quadro ATENÇÃO diz que o ente pode publicar, <b>adicionalmente</b>, análise segundo esse método.</p><p class='fb-fonte'>Resumo 11 · <i>Classificação das VPD — ATENÇÃO</i></p>",
23:"<p>Certo — quadro ATENÇÃO do Resumo: sendo obrigatória a utilização do método da natureza para todos os entes, é <b>facultado publicar, adicionalmente, análise segundo o método da função</b>.</p><p>Repare no <b>adicionalmente</b>: a função não substitui a natureza, soma-se a ela.</p><p class='fb-fonte'>Resumo 11 · <i>Classificação das VPD — ATENÇÃO</i></p>",
24:"<p>Certo — são quatro dos cinco exemplos do Resumo para o <b>método da natureza</b>: <b>depreciações</b>, <b>consumo de materiais</b>, <b>despesas com transporte</b>, <b>benefícios a empregados</b> e despesas de publicidade.</p><p>Note o padrão: nomeiam <b>o que</b> foi gasto. O exemplo de apresentação no material traz linhas como <i>Despesas com benefícios a empregados</i> e <i>Despesas com depreciações e amortizações</i>.</p><p class='fb-fonte'>Resumo 11 · <i>Método da natureza</i></p>",
25:"<p>Certo. Segundo o método da função, as VPD são classificadas de acordo com o <b>programa ou o propósito para o qual foram incorridas</b>, apresentando-se separadamente as despesas associadas às principais funções empreendidas pela entidade.</p><p>O exemplo do Resumo é uma entidade com funções de saúde e educação: a DVP mostra <i>Despesas com saúde</i>, <i>Despesas com educação</i> e <i>Outras despesas</i>. A natureza diz <b>o que</b> se gastou; a função, <b>para que</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Método da função</i></p>",
26:"<p>Errado — o Resumo diz o contrário. O método da função pode proporcionar informação mais relevante aos usuários, <b>mas a alocação de despesas às funções pode exigir alocações arbitrárias e envolver considerável capacidade de julgamento</b>.</p><p>É justamente esse o preço do método: mais útil para o usuário, mais subjetivo na montagem.</p><p class='fb-fonte'>Resumo 11 · <i>Método da função</i></p>",
27:"<p>Errado. A norma ressalva expressamente que, para essa finalidade, os termos <b>natureza da despesa</b> e <b>classificação funcional</b> <b>não se confundem</b> com os termos correspondentes utilizados na <b>execução orçamentária</b>.</p><p>São planos distintos: aqui se fala de apresentação das VPD na DVP, lógica patrimonial; lá, de classificação orçamentária da despesa.</p><p class='fb-fonte'>Resumo 11 · <i>Classificação das Variações Patrimoniais Diminutivas</i></p>",
28:"<p>Certo — é a primeira linha do bloco de VPA na estrutura da DVP do Resumo: <b>Impostos, Taxas e Contribuições de Melhoria</b>.</p><p>O bloco segue com Contribuições; Exploração e Venda de Bens, Serviços e Direitos; VPA Financeiras; Transferências e Delegações <b>Recebidas</b>; Valorização e Ganhos com Ativos; <b>Desincorporação de Passivos</b>; e Outras VPA.</p><p class='fb-fonte'>Resumo 11 · <i>Estrutura da Demonstração das Variações Patrimoniais</i></p>",
29:"<p>Errado no lado da demonstração. <b>Desincorporação de Passivos</b> é grupo das <b>variações patrimoniais aumentativas</b> na estrutura da DVP.</p><p>O raciocínio ajuda: desincorporar passivo é tirar obrigação do balanço, o que <b>aumenta</b> o patrimônio líquido. Quem está do lado das VPD é a <b>Incorporação de Passivos</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Estrutura da Demonstração das Variações Patrimoniais</i></p>",
30:"<p>Certo — <b>Uso de Bens, Serviços e Consumo de Capital Fixo</b> é o terceiro grupo de VPD na estrutura do Resumo.</p><p>O bloco das VPD é este: Pessoal e Encargos; Benefícios Previdenciários e Assistenciais; Uso de Bens, Serviços e Consumo de Capital Fixo; VPD Financeiras; Transferências e Delegações Concedidas; Desvalorização e Perdas de Ativos; Incorporação de Passivos; Tributárias; Custo das Mercadorias Vendidas; Custo dos Produtos Vendidos; Custo dos Serviços Prestados; e Outras VPD.</p><p class='fb-fonte'>Resumo 11 · <i>Estrutura da Demonstração das Variações Patrimoniais</i></p>",
31:"<p>Certo. A última linha da estrutura do Resumo é explícita: <b>RESULTADO PATRIMONIAL DO PERÍODO (III) = (I – II)</b>, sendo (I) o total das VPA e (II) o total das VPD.</p><p>Foi assim que o material resolveu a questão-exemplo: 80.000 – 60.000 + 72.000 – 12.000 = <b>R$ 80.000</b> positivos.</p><p class='fb-fonte'>Resumo 11 · <i>Estrutura da Demonstração das Variações Patrimoniais</i></p>",
32:"<p>Errado — inverteu o sentido da transferência. <b>Transferências e Delegações Concedidas</b> figuram entre as <b>VPD</b>; as <b>Recebidas</b> é que são VPA.</p><p>O mesmo par aparece na tabela de exemplos do Resumo: <i>Transferências Financeiras Recebidas</i> na coluna VPA e <i>Transferências Financeiras Concedidas</i> na coluna VPD. Quem entrega, diminui o patrimônio.</p><p class='fb-fonte'>Resumo 11 · <i>Estrutura da DVP / Exemplos de VPA e VPD</i></p>",
33:"<p>Certo — abre a coluna de VPA na tabela de exemplos, com os dois casos do material: <b>Doações Recebidas (ex.: imóvel, dinheiro)</b>.</p><p>A contrapartida na coluna VPD são as <b>Doações Concedidas</b>. E cuidado com o caso da OBSERVAÇÃO 10: o mero <b>compromisso</b> de doação não gera VPA, porque não se encaixa na definição de ativo.</p><p class='fb-fonte'>Resumo 11 · <i>Exemplos de VPA e VPD</i></p>",
34:"<p>Errado de lado. <b>Obtenção de Desconto</b> está na coluna das <b>VPA</b> na tabela de exemplos do Resumo.</p><p>Faz sentido: quem obtém desconto paga menos do que devia, e o patrimônio líquido aumenta. Na coluna VPD, o par correspondente são os <b>Juros e Encargos da Dívida</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Exemplos de VPA e VPD</i></p>",
35:"<p>Certo — <b>Prescrição de Passivos</b> consta da coluna VPA da tabela de exemplos.</p><p>A lógica é a mesma da desincorporação de passivos: prescrita a obrigação, ela sai do passivo e o patrimônio líquido aumenta. Do lado oposto da mesma linha o Resumo põe a <b>Redução ao valor recuperável de ativos</b>, que é VPD.</p><p class='fb-fonte'>Resumo 11 · <i>Exemplos de VPA e VPD</i></p>",
36:"<p>Certo — a tabela de exemplos separa as duas pontas: <b>Atualização cambial com diminuição da dívida</b> é VPA; <b>Atualização cambial com aumento da dívida</b> é <b>VPD</b>.</p><p>E note que essa é uma das alterações <b>independentes da execução orçamentária</b> citadas no início do Resumo: acontece com o fato gerador, sem passar por empenho ou liquidação.</p><p class='fb-fonte'>Resumo 11 · <i>Exemplos de VPA e VPD</i></p>",
37:"<p>Certo — ambas estão na coluna VPD da tabela do Resumo: <b>Baixa de ativo por obsolescência</b> e <b>Perda de Ativo (ex.: furto)</b>.</p><p>A coluna traz ainda Doações Concedidas, Transferências Financeiras Concedidas, Juros e Encargos da Dívida, Redução ao valor recuperável de ativos, Depreciação/Amortização/Exaustão, Apropriação de seguros contratados e Consumo de Material de Escritório.</p><p class='fb-fonte'>Resumo 11 · <i>Exemplos de VPA e VPD</i></p>",
38:"<p>Certo — OBSERVAÇÕES 2 e 3 do Resumo: as <b>VPA são operações que causam aumento no Patrimônio Líquido</b> e as <b>VPD, operações que causam redução no Patrimônio Líquido</b>.</p><p>Completando com a OBSERVAÇÃO 1: tanto a VPA quanto a VPD ocorrem <b>com o fato gerador</b>, independentemente da execução orçamentária (arrecadação da receita ou empenho da despesa).</p><p class='fb-fonte'>Resumo 11 · <i>Observações Pertinentes — 1 a 3</i></p>",
39:"<p>Errado no momento. A fase <b>despesas em liquidação</b> realmente foi <b>criada pelo MCASP</b>, mas ocorre no momento do <b>fato gerador</b>, que é <b>depois do empenho e antes da liquidação</b>.</p><p>A assertiva acerta a origem e erra a posição na sequência. Guarde a ordem: empenho → <b>em liquidação</b> → liquidação → pagamento.</p><p class='fb-fonte'>Resumo 11 · <i>Observações Pertinentes — 4</i></p>",
40:"<p>Certo — OBSERVAÇÃO 5. O ingresso de recursos decorrente de <b>operação de crédito não afeta</b> a apuração do resultado patrimonial do exercício na DVP.</p><p>A explicação do Resumo: a operação de crédito é similar à contratação de empréstimo — entra dinheiro no caixa (ativo) e se cria uma obrigação (passivo). Há apenas <b>permuta entre elementos patrimoniais</b>, ou seja, variação patrimonial <b>qualitativa</b>, não quantitativa.</p><p class='fb-fonte'>Resumo 11 · <i>Observações Pertinentes — 5</i></p>",
41:"<p>Errado — OBSERVAÇÃO 6 diz o oposto: empenho, liquidação e pagamento de <b>imóvel não afetam</b> a apuração do resultado patrimonial na DVP.</p><p>A aquisição de imóvel é <b>fato permutativo</b>: diminui o ativo caixa e aumenta o ativo imobilizado. Variação apenas <b>qualitativa</b>. Compare com a questão-exemplo do Resumo 10, em que a compra do veículo mexeu na composição do ativo sem gerar resultado.</p><p class='fb-fonte'>Resumo 11 · <i>Observações Pertinentes — 6</i></p>",
42:"<p>Certo — OBSERVAÇÃO 7. O recebimento de <b>depósitos de caução não afeta</b> a apuração do resultado patrimonial: trata-se de <b>fato permutativo</b> (variação qualitativa).</p><p>O Resumo detalha o lançamento: aumenta o ativo (entra dinheiro no caixa) e aumenta o passivo (obrigação de devolver o depósito). Dois aumentos que se anulam no patrimônio líquido.</p><p class='fb-fonte'>Resumo 11 · <i>Observações Pertinentes — 7</i></p>",
43:"<p>Certo — OBSERVAÇÃO 8. A provisão deve ser reconhecida quando for <b>PROVÁVEL</b> que seja necessária uma saída de recursos para liquidar a obrigação; nesse caso, reconhece-se a provisão (<b>passivo</b>) em contrapartida de uma <b>VPD</b>.</p><p>O exemplo do Resumo: perda de ação judicial considerada <b>provável</b> pelo jurídico do ente, com saída financeira estimada de <b>R$ 50 mil</b>. Registra-se a provisão contra VPD — e isso <b>afeta o resultado patrimonial</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Observações Pertinentes — 8</i></p>",
44:"<p>Errado no sinal. A redução ao valor recuperável de ativos ocasiona uma <b>VPD</b>, não uma VPA.</p><p>Ela aparece duas vezes no Resumo do mesmo lado: na coluna VPD da tabela de exemplos e na OBSERVAÇÃO 9. O ativo vale menos do que o registrado, logo o patrimônio líquido diminui.</p><p class='fb-fonte'>Resumo 11 · <i>Observações Pertinentes — 9</i></p>",
45:"<p>Certo, na definição da OBSERVAÇÃO 9: o valor recuperável é o <b>maior</b> montante entre o <b>valor justo líquido de despesa de venda</b> e o <b>valor em uso</b>.</p><p>No exemplo do material, entre R$ 820 mil (venda, líquido das despesas de comercialização) e R$ 845 mil (se continuar em uso), prevalece o <b>maior</b>: R$ 845 mil. Trocar <i>maior</i> por <i>menor</i> é o erro mais cobrado aqui.</p><p class='fb-fonte'>Resumo 11 · <i>Observações Pertinentes — 9</i></p>",
46:"<p>Certo — é o exemplo numérico do Resumo, com estes mesmos valores. Ativo com valor contábil de <b>R$ 950 mil</b>, valor de venda líquido de <b>R$ 820 mil</b> e valor em uso de <b>R$ 845 mil</b>.</p><p>O valor recuperável é o <b>maior</b> dos dois, R$ 845 mil. A redução ao valor recuperável é <b>950 – 845 = R$ 105 mil</b>, reconhecida como <b>VPD de R$ 105.000</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Observações Pertinentes — 9</i></p>",
47:"<p>Errado no número, porque usa o montante errado. R$ 130 mil sairia de 950 – 820, ou seja, do valor de <b>venda</b> — o <b>menor</b> dos dois.</p><p>O valor recuperável é o <b>maior</b> entre valor justo líquido de despesa de venda e valor em uso, logo R$ 845 mil. A redução correta é <b>950 – 845 = R$ 105 mil</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Observações Pertinentes — 9</i></p>",
48:"<p>Errado nos dois pontos. Nos termos do MCASP, como registra a OBSERVAÇÃO 10, o <b>compromisso de doação NÃO se encaixa na definição de ativo</b>, porque a entidade recebedora é <b>incapaz de controlar o acesso do transferente</b> aos benefícios econômicos futuros incorporados no item compromissado.</p><p>O exemplo do Resumo: antigo colaborador comprometeu-se a doar <b>R$ 75 mil</b> assim que recebesse o serviço, que estava em fase de liquidação. O órgão <b>não poderá reconhecer VPA</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Observações Pertinentes — 10</i></p>",
49:"<p>Certo — definição da OBSERVAÇÃO 11: transações com contraprestação são aquelas em que a entidade <b>recebe ativos (ou tem passivos extintos)</b> e <b>entrega um valor em troca</b> (dinheiro, bens, serviços).</p><p>Contraste com as transações <b>sem</b> contraprestação, como a doação de imóvel: ali a entidade recebe sem entregar nada em troca, e o lançamento é débito no ativo contra <b>VPA</b>.</p><p class='fb-fonte'>Resumo 11 · <i>Observações Pertinentes — 11</i></p>",
50:"<p>Certo, com a ressalva do Resumo. Em regra as transações com contraprestação <b>não impactam o resultado patrimonial</b> — são trocas de valores equivalentes —, <b>porém existem exceções</b>, e o material cita o <b>recebimento de aluguel de um ativo</b>, que representa uma <b>VPA</b>.</p><p>Guarde a exceção pelo exemplo: é exatamente esse aluguel que a OBSERVAÇÃO 11 nomeia.</p><p class='fb-fonte'>Resumo 11 · <i>Observações Pertinentes — 11</i></p>",
51:"<p>Errado no valor: a VPA é de <b>R$ 80.000</b>, o total lançado, e não a metade arrecadada.</p><p>É o segundo evento da questão-exemplo do Resumo. O resultado patrimonial depende do <b>fato gerador</b> — que, em regra, ocorre com o <b>lançamento</b> —, <b>independentemente da execução orçamentária</b> (a arrecadação). Arrecadar metade muda o caixa, não a VPA.</p><p class='fb-fonte'>Resumo 11 · <i>Questão-exemplo — resolução</i></p>",
52:"<p>Certo, e pelo mesmo motivo do caso anterior, só que do lado da despesa: a VPD é de <b>R$ 60.000</b>, o valor integral.</p><p>Na resolução do Resumo, o resultado patrimonial depende do fato gerador — que, em regra, ocorre com a <b>liquidação</b> —, independentemente da execução orçamentária (o empenho ou o pagamento). Metade paga e metade em restos a pagar não altera a VPD.</p><p class='fb-fonte'>Resumo 11 · <i>Questão-exemplo — resolução</i></p>",
53:"<p>Certo — é o quarto evento da questão-exemplo, com estes mesmos números: recebimento de veículo em doação de <b>R$ 72.000</b>, com <b>R$ 12.000</b> de depreciação registrados durante o exercício.</p><p>Duas variações no mesmo bem: <b>VPA de R$ 72.000</b> pela doação recebida e <b>VPD de R$ 12.000</b> pela depreciação — esta última, lembre, independente da execução orçamentária.</p><p class='fb-fonte'>Resumo 11 · <i>Questão-exemplo — resolução</i></p>",
54:"<p>Certo — é o fechamento da questão-exemplo do Resumo: <b>80.000 – 60.000 + 72.000 – 12.000 = R$ 80.000</b>, resultado patrimonial positivo. Gabarito C.</p><p>Repare no que <b>não</b> entrou na conta: a aprovação da LOA de R$ 100.000, a arrecadação de metade dos impostos e o pagamento de metade da folha. Nada disso é fato gerador de variação quantitativa.</p><p class='fb-fonte'>Resumo 11 · <i>Questão-exemplo — resolução</i></p>",
55:"<p>Errado — o primeiro passo da resolução da questão-exemplo é taxativo: a <b>aprovação da LOA não afeta o resultado patrimonial</b>.</p><p>Na questão do material a LOA vinha com R$ 100.000, sendo 80% em categoria econômica corrente e 20% de capital, e não entrou em nenhuma linha da DVP. Previsão e fixação são atos orçamentários, sem fato gerador patrimonial.</p><p class='fb-fonte'>Resumo 11 · <i>Questão-exemplo — resolução</i></p>",
56:"<p>Certo, na literalidade do Resumo: a DVP <b>permite a análise de como as políticas adotadas provocaram alterações no patrimônio público</b>, considerando-se a finalidade de atender às demandas da sociedade.</p><p>Casa com a ideia anterior do material: no setor público o resultado patrimonial não é indicador de desempenho, mas medidor do quanto o serviço ofertado promoveu alterações quantitativas nos elementos patrimoniais.</p><p class='fb-fonte'>Resumo 11 · <i>DVP x DRE</i></p>",
57:"<p>Certo — os três aparecem em sequência no bloco de VPD da estrutura da DVP: <b>Custo das Mercadorias Vendidas</b>, <b>Custo dos Produtos Vendidos</b> e <b>Custo dos Serviços Prestados</b>.</p><p>Vêm logo depois de <i>Tributárias</i> e antes de <i>Outras Variações Patrimoniais Diminutivas</i>, que encerra o bloco somado no Total das VPD (II).</p><p class='fb-fonte'>Resumo 11 · <i>Estrutura da Demonstração das Variações Patrimoniais</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"11", nome:"Demonstração das Variações Patrimoniais", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
