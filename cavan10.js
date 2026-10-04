/* Contabilidade Avançada — Módulo 10: CPC 36 — Demonstrações Consolidadas (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cavan10 = (function(){
"use strict";

var CARDS = [
  ["Qual é o objetivo do CPC 36 (item 01)?","Estabelecer <b>princípios para a apresentação e elaboração de demonstrações consolidadas</b> quando a entidade <b>controla uma ou mais entidades</b>."],
  ["O que o CPC 36 NÃO trata (item 03)?","Os <b>requisitos contábeis para combinação de negócios</b> e seus efeitos sobre a consolidação, <b>incluindo o ágio por expectativa de rentabilidade futura (goodwill)</b> resultante de combinação de negócios."],
  ["O que são demonstrações consolidadas?","As demonstrações contábeis de <b>grupo econômico</b>, em que <b>ativos, passivos, patrimônio líquido, receitas, despesas e fluxos de caixa</b> da <b>controladora</b> e de suas <b>controladas (não coligadas)</b> são apresentados <b>como se fossem uma única entidade econômica</b>."],
  ["Quem deve avaliar se é controlador (item 05)?","O <b>investidor</b>, <b>independentemente da natureza de seu envolvimento</b> com a investida, deve determinar se é controlador avaliando se <b>controla</b> a investida. Pode ser <b>pessoa física ou jurídica</b>."],
  ["Quando o investidor controla a investida (item 06)?","Quando está <b>exposto a, ou tem direitos sobre, retornos variáveis</b> decorrentes de seu envolvimento com a investida <b>e</b> tem a <b>capacidade de afetar esses retornos</b> por meio de seu <b>poder</b> sobre a investida."],
  ["Quais são os três atributos do controle (item 07)?","<b>Se, e somente se</b>, o investidor possuir <b>todos</b>: (a) <b>poder</b> sobre a investida; (b) <b>exposição a, ou direitos sobre, retornos variáveis</b>; (c) <b>capacidade de utilizar seu poder</b> para <b>afetar o valor de seus retornos</b>."],
  ["O que é controle coletivo (item 09)?","Dois ou mais investidores que <b>devem agir em conjunto</b> para dirigir as atividades relevantes. Como nenhum pode dirigir as atividades sem a cooperação dos demais, <b>nenhum investidor individualmente controla</b> a investida."],
  ["No controle coletivo, quais pronunciamentos cada investidor aplica?","<b>CPC 19</b> (Negócios em Conjunto), <b>CPC 18</b> (Investimento em Coligada, em Controlada e em Empreendimento Controlado em Conjunto) ou <b>CPC 38</b> (Instrumentos Financeiros). <b>Não</b> aplica o método de consolidação."],
  ["Participação MENOR que 20% — como fica no quadro do resumo?","<b>Pouca influência</b> · <b>CPC 38 e 48</b> (Instrumentos Financeiros) · <b>NÃO consolida</b>."],
  ["Participação MAIOR que 20% — como fica no quadro do resumo?","<b>Influência significativa</b> · <b>CPC 18</b> (Coligada) · <b>NÃO consolida</b>."],
  ["Participação MAIOR que 50% — como fica no quadro do resumo?","<b>Controle preponderante</b> · <b>CPC 18 e 36</b> (Controlada) · <b>CONSOLIDA</b>."],
  ["Controle em conjunto — como fica no quadro do resumo?","<b>Participação igual aos demais controladores</b> · <b>CPC 19</b> (Negócios em Conjunto) · <b>NÃO consolida</b>."],
  ["Das quatro situações do quadro, qual é a única que consolida?","Só o <b>controle preponderante</b> — participação <b>maior que 50%</b>, hipótese de <b>controlada</b>. As outras três (pouca influência, influência significativa e controle em conjunto) <b>não consolidam</b>."],
  ["O que é ter poder sobre a investida (item 10)?","Ter <b>direitos existentes</b> que lhe dão a <b>capacidade ATUAL de dirigir as atividades relevantes</b>."],
  ["O que são atividades relevantes?","As atividades que <b>afetam significativamente os retornos</b> da investida."],
  ["Cite os direitos que podem dar poder ao investidor (B15)","<b>Direitos de voto (ou de voto potenciais)</b>; <b>nomear, realocar ou destituir pessoal-chave da administração</b>; <b>nomear ou destituir outra entidade que dirija as atividades relevantes</b>; <b>instruir a investida a realizar transações ou vetar mudanças</b> nelas em benefício do investidor; <b>outros direitos</b>, como os de tomada de decisão previstos em <b>contrato de gestão</b>."],
  ["Que política contábil a controladora usa na consolidação (item 19)?","<b>Políticas contábeis uniformes</b> para <b>transações similares e outros eventos em circunstâncias similares</b>."],
  ["E se um membro do grupo usar políticas contábeis diferentes (B87)?","Devem ser feitos <b>ajustes apropriados às demonstrações contábeis desse membro</b> na elaboração das consolidadas, para <b>garantir a conformidade com as políticas contábeis do grupo</b>."],
  ["Quando começa e quando cessa a consolidação (item 20)?","<b>Inicia</b> a partir da data em que o investidor <b>obtiver o controle</b> da investida e <b>cessa</b> quando o investidor <b>perder o controle</b> da investida."],
  ["Onde se apresenta a participação de não controladores (item 22)?","No <b>balanço patrimonial consolidado</b>, <b>dentro do patrimônio líquido</b>, <b>separadamente</b> do patrimônio líquido dos proprietários da controladora."],
  ["O que é participação de não controlador?","A parte do <b>patrimônio líquido da controlada NÃO atribuível à controladora</b>."],
  ["No exemplo do resumo, A controla 80% de B. O que A apresenta?","No balanço consolidado, os <b>20% do capital de B</b> pertencentes aos <b>não controladores</b>, no <b>PL consolidado</b>, <b>separadamente</b> das parcelas dos acionistas de A (ativos e passivos de A e os 80% do capital de B)."],
  ["Quais os três requisitos da entidade de investimento (item 27)?","(a) <b>obtém recursos de um ou mais investidores</b> para prestar-lhes <b>serviços de gestão de investimento</b>; (b) <b>compromete-se</b> com eles no sentido de que seu <b>propósito comercial é investir recursos exclusivamente</b> para <b>valorização do capital, receitas de investimentos ou ambos</b>; (c) <b>mensura e avalia o desempenho</b> de substancialmente <b>todos</b> os investimentos com base no <b>valor justo</b>."],
  ["Qual o exemplo de entidade de investimento no resumo?","Um <b>fundo de investimento</b>: os investidores aplicam capital e a entidade responsável investe em ações, títulos públicos ou imóveis, gerindo os investimentos para obter retornos aos investidores."],
  ["Como a entidade de investimento trata suas controladas (item 31)?","<b>Não</b> as consolida nem aplica o <b>CPC 15</b> ao obter o controle. Em vez disso, <b>mensura o investimento em controlada ao VALOR JUSTO por meio do RESULTADO</b>, conforme o <b>CPC 38</b>."],
  ["Qual a exceção da exceção (item 32)?","Se a entidade de investimento tiver controlada que <b>não é, por si mesma, entidade de investimento</b> e cuja <b>finalidade principal e atividades são a prestação de serviços relacionados às atividades de investimento</b>, <b>deve consolidar</b> essa controlada conforme os <b>itens 19 a 26</b> e aplicar o <b>CPC 15</b> na aquisição."],
  ["O que diz o item 4B sobre a controladora que é entidade de investimento?","<b>Não deve apresentar demonstrações contábeis consolidadas</b> se estiver obrigada, pelo item 31, a <b>mensurar TODAS as suas controladas ao valor justo por meio do resultado</b>."],
  ["B86, alínea (a) — o que a consolidação faz?","<b>Combinar itens similares</b> de <b>ativos, passivos, patrimônio líquido, receitas, despesas e fluxos de caixa</b> da <b>controladora</b> com os de suas <b>controladas</b>."],
  ["B86, alínea (b) — o que se compensa?","<b>Compensar (eliminar)</b> o <b>valor contábil do investimento da controladora em cada controlada</b> e a <b>parcela da controladora no patrimônio líquido de cada controlada</b>."],
  ["Quem explica como contabilizar o ágio correspondente?","O <b>CPC 15</b> — é a remissão expressa da alínea (b) do item B86."],
  ["B86, alínea (c) — como se eliminam as transações intragrupo?","<b>INTEGRALMENTE</b>: ativos, passivos, patrimônio líquido, receitas, despesas e fluxos de caixa intragrupo. Resultados de transações intragrupo reconhecidos em ativos como <b>estoques e ativos fixos</b> são eliminados <b>integralmente</b>."],
  ["O que o resumo diz sobre prejuízos intragrupo e sobre tributos?","Os <b>prejuízos intragrupo</b> podem indicar <b>redução no valor recuperável de ativos</b>, que exige reconhecimento nas consolidadas. O <b>CPC 32 (Tributos sobre o Lucro)</b> se aplica às <b>diferenças temporárias</b> que surgem da eliminação de lucros e prejuízos intragrupo."],
  ["Qual a resolução rápida do PL consolidado, pelo resumo?","<b>PL Consolidado = PL da controladora + PL da controlada − Investimento da controladora na controlada.</b> No exemplo: <b>50.000 + 100.000 − 80.000 = R$ 70.000</b>."],
  ["Qual o lançamento de ajuste da questão-exemplo Alfa/Beta?","<b>D</b> PL da Cia Beta <b>R$ 80.000</b> · <b>C</b> Investimento (ativo da Cia Alfa) <b>R$ 80.000</b>."],
  ["Na questão-exemplo, como fica o balanço consolidado?","<b>Caixa 150.000</b> · <b>Investimentos 0</b> · <b>Terreno 250.000</b> · <b>Total do Ativo 400.000</b> · <b>Financiamento 330.000</b> · <b>Capital Social 70.000</b>."],
  ["Qual a regra de data das demonstrações (B92 e B93)?","<b>Mesma data-base.</b> Se as datas diferirem, a controlada elabora <b>informações contábeis adicionais</b> na data da controladora, <b>a menos que impraticável</b>; nesse caso usam-se as <b>demonstrações mais recentes, ajustadas</b>. Em <b>qualquer caso</b>, a diferença <b>não deve ser superior a DOIS MESES</b>."],
  ["O que o art. 250 da Lei 6.404/76 manda excluir das consolidadas?","<b>I</b> — as <b>participações de uma sociedade em outra</b>; <b>II</b> — os <b>saldos de quaisquer contas entre as sociedades</b>; <b>III</b> — as parcelas dos <b>resultados do exercício</b>, dos <b>lucros ou prejuízos acumulados</b> e do <b>custo de estoques ou do ativo não circulante</b> que corresponderem a resultados <b>ainda NÃO realizados</b> de negócios entre as sociedades."]
];

var QS = [
  ["O objetivo do CPC 36 é estabelecer princípios para a apresentação e elaboração de demonstrações consolidadas quando a entidade controla uma ou mais entidades.","C","CPC 36, item 01","Literalidade do item 01."],
  ["O CPC 36 trata dos requisitos contábeis para combinação de negócios e de seus efeitos sobre a consolidação, inclusive do goodwill dela resultante.","E","CPC 36, item 03","O item 03 diz exatamente o contrário: <b>não</b> trata."],
  ["Demonstrações consolidadas são as demonstrações contábeis de grupo econômico em que ativos, passivos, patrimônio líquido, receitas, despesas e fluxos de caixa da controladora e de suas controladas são apresentados como se fossem uma única entidade econômica.","C","CEBRASPE","Definição do resumo."],
  ["Nas demonstrações consolidadas são combinados os dados da controladora, de suas controladas e também de suas coligadas.","E","FCC","O resumo é expresso: controladas, <b>não coligadas</b>."],
  ["O investidor, independentemente da natureza de seu envolvimento com a investida, deve determinar se é controlador avaliando se controla a investida.","C","CPC 36, item 05","Literalidade do item 05."],
  ["Somente pessoa jurídica pode ser considerada controladora de uma investida.","E","FGV","O comentário do resumo admite <b>pessoa física ou jurídica</b>."],
  ["O investidor controla a investida quando está exposto a, ou tem direitos sobre, retornos variáveis decorrentes de seu envolvimento com a investida e tem a capacidade de afetar esses retornos por meio de seu poder sobre a investida.","C","CPC 36, item 06","Literalidade do item 06."],
  ["Para a caracterização do controle, o CPC 36 exige que o investidor tenha direito a retornos fixos e previamente garantidos.","E","VUNESP","O item 06 fala de retornos <b>variáveis</b>."],
  ["O investidor controla a investida se possuir pelo menos um dos três atributos listados no item 07 do CPC 36.","E","CEBRASPE","O item 07 diz <b>se, e somente se</b>, possuir <b>todos</b> os atributos."],
  ["São atributos cumulativos do controle: poder sobre a investida; exposição a, ou direitos sobre, retornos variáveis; e a capacidade de utilizar seu poder sobre a investida para afetar o valor de seus retornos.","C","CPC 36, item 07","Os três atributos, na ordem do item."],
  ["Quando dois ou mais investidores devem agir em conjunto para dirigir as atividades relevantes, cada um deles é considerado individualmente controlador da investida.","E","FCC","O item 09 diz que <b>nenhum investidor individualmente controla</b>."],
  ["No controle coletivo, cada investidor deve contabilizar sua participação segundo o CPC 19, o CPC 18 ou o CPC 38, sem aplicar o método de consolidação.","C","CPC 36, item 09","São os três pronunciamentos citados no item."],
  ["Participação maior que 50% caracteriza controle preponderante, atrai o CPC 18 e o CPC 36 e enseja consolidação.","C","FGV","Linha do quadro de participações societárias."],
  ["Participação maior que 20% caracteriza influência significativa, hipótese de coligada regida pelo CPC 18, e também enseja consolidação.","E","VUNESP","Coligada <b>não consolida</b>."],
  ["Participação menor que 20% indica pouca influência, é regida pelo CPC 38 e pelo CPC 48 e não enseja consolidação.","C","CEBRASPE","Primeira linha do quadro."],
  ["No controle em conjunto, com participação igual à dos demais controladores, aplica-se o CPC 19 e não há consolidação.","C","FCC","Quarta linha do quadro."],
  ["O investidor tem poder sobre a investida quando tem direitos existentes que lhe dão a capacidade potencial e futura de dirigir as atividades relevantes.","E","CPC 36, item 10","O item 10 exige capacidade <b>ATUAL</b> de dirigir as atividades relevantes."],
  ["Atividades relevantes são aquelas que afetam de forma pouco significativa os retornos da investida.","E","FGV","São as que afetam <b>significativamente</b> os retornos."],
  ["Direitos de voto, inclusive potenciais, e direitos de nomear, realocar ou destituir membros do pessoal-chave da administração são exemplos de direitos que podem dar poder ao investidor.","C","CPC 36, B15","Alíneas (a) e (b) do item B15."],
  ["A controladora deve elaborar demonstrações consolidadas utilizando políticas contábeis uniformes para transações similares e outros eventos em circunstâncias similares.","C","CPC 36, item 19","Literalidade do item 19."],
  ["Cada controlada pode manter suas próprias políticas contábeis para transações similares, sem qualquer ajuste na elaboração das consolidadas.","E","VUNESP","O B87 exige <b>ajustes apropriados</b> às demonstrações desse membro do grupo."],
  ["Se um membro do grupo utilizar políticas contábeis diferentes daquelas adotadas nas consolidadas para transações similares, devem ser feitos ajustes apropriados às demonstrações contábeis desse membro.","C","CPC 36, B87","Literalidade do B87."],
  ["A consolidação da investida se inicia a partir da data em que o investidor obtiver o controle e cessa quando o investidor perder o controle.","C","CPC 36, item 20","Literalidade do item 20."],
  ["A consolidação da investida cessa somente no encerramento do exercício social em que o controle foi perdido.","E","CEBRASPE","Cessa <b>quando</b> o investidor perde o controle."],
  ["A controladora deve apresentar as participações de não controladores no balanço patrimonial consolidado, dentro do patrimônio líquido, separadamente do patrimônio líquido dos proprietários da controladora.","C","CPC 36, item 22","Literalidade do item 22."],
  ["As participações de não controladores são apresentadas no passivo do balanço patrimonial consolidado.","E","FCC","O item 22 as coloca <b>dentro do patrimônio líquido</b>."],
  ["Participação de não controlador é a parte do patrimônio líquido da controlada não atribuível à controladora.","C","FGV","Conceito do comentário do resumo."],
  ["No exemplo do resumo, em que a Empresa A é controladora com 80% do capital da Empresa B, os 20% dos não controladores são apresentados no patrimônio líquido consolidado, separadamente das parcelas dos acionistas da controladora.","C","VUNESP","Exemplo do item 22."],
  ["A entidade de investimento é a entidade que obtém recursos de um ou mais investidores com o intuito de prestar a esses investidores serviços de gestão de investimento.","C","CPC 36, item 27","Alínea (a) do item 27."],
  ["A entidade de investimento mensura e avalia o desempenho de substancialmente todos os seus investimentos com base no custo histórico.","E","CEBRASPE","A alínea (c) do item 27 exige o <b>valor justo</b>."],
  ["A entidade de investimento não deve consolidar suas controladas nem aplicar o CPC 15 ao obter o controle de outra entidade, devendo mensurar esse investimento ao valor justo por meio do resultado, conforme o CPC 38.","C","CPC 36, item 31","Literalidade do item 31, salvo o item 32."],
  ["Se a entidade de investimento tiver controlada que não é, por si mesma, entidade de investimento e cuja finalidade principal e atividades são a prestação de serviços relacionados às atividades de investimento, deve consolidar essa controlada conforme os itens 19 a 26 e aplicar o CPC 15 na aquisição.","C","CPC 36, item 32","É a exceção da exceção."],
  ["A controladora que é entidade de investimento e está obrigada a mensurar todas as suas controladas ao valor justo por meio do resultado deve, ainda assim, apresentar demonstrações contábeis consolidadas.","E","FCC","O item 4B diz que ela <b>não deve</b> apresentá-las."],
  ["As demonstrações consolidadas devem combinar itens similares de ativos, passivos, patrimônio líquido, receitas, despesas e fluxos de caixa da controladora com os de suas controladas.","C","CPC 36, B86","Alínea (a) do B86."],
  ["As demonstrações consolidadas devem compensar o valor contábil do investimento da controladora em cada controlada e a parcela da controladora no patrimônio líquido de cada controlada.","C","CPC 36, B86","Alínea (b) do B86."],
  ["Conforme a alínea (b) do item B86, é o CPC 32 que explica como contabilizar o ágio correspondente à eliminação do investimento.","E","FGV","A remissão da alínea (b) é ao <b>CPC 15</b>."],
  ["As demonstrações consolidadas devem eliminar integralmente ativos, passivos, patrimônio líquido, receitas, despesas e fluxos de caixa intragrupo relacionados a transações entre entidades do grupo.","C","CPC 36, B86","Alínea (c) do B86."],
  ["Os resultados decorrentes de transações intragrupo reconhecidos em ativos, como estoques e ativos fixos, são eliminados proporcionalmente à participação da controladora.","E","VUNESP","O B86 (c) manda eliminá-los <b>integralmente</b>."],
  ["Os prejuízos intragrupo podem indicar uma redução no valor recuperável de ativos, que exige o seu reconhecimento nas demonstrações consolidadas.","C","CPC 36, B86","Parte final da alínea (c)."],
  ["O CPC 32 (Tributos sobre o Lucro) se aplica às diferenças temporárias que surgem da eliminação de lucros e prejuízos resultantes de transações intragrupo.","C","CPC 36, B86","Remissão final da alínea (c)."],
  ["Na questão-exemplo, com a Cia. Alfa detendo 80% da Cia. Beta, patrimônio líquido de Alfa de R$ 50.000, de Beta de R$ 100.000 e investimento de R$ 80.000, o patrimônio líquido consolidado é de R$ 70.000.","C","FGV","50.000 + 100.000 − 80.000."],
  ["No mesmo exemplo, o patrimônio líquido consolidado é de R$ 150.000.","E","CEBRASPE","Isso seria somar os dois PL <b>sem eliminar</b> o investimento."],
  ["No mesmo exemplo, o lançamento de ajuste da consolidação é a débito do patrimônio líquido da Cia. Beta e a crédito de Investimento, no ativo da Cia. Alfa, por R$ 80.000.","C","FCC","Lançamento de ajuste do resumo."],
  ["No mesmo exemplo, o total do ativo consolidado é de R$ 480.000.","E","VUNESP","O total consolidado é <b>R$ 400.000</b>: os 80.000 do investimento são eliminados."],
  ["As demonstrações contábeis da controladora e das controladas utilizadas na consolidação devem ter a mesma data-base; se as datas diferirem, a controlada deve elaborar informações contábeis adicionais na data da controladora, a menos que seja impraticável.","C","CPC 36, B92","Literalidade do B92."],
  ["Em qualquer caso, a diferença entre a data das demonstrações contábeis da controlada e a das demonstrações consolidadas não deve ser superior a três meses.","E","CPC 36, B93","O limite do B93 é de <b>dois meses</b>."],
  ["Segundo o art. 250 da Lei 6.404/76, serão excluídas das demonstrações financeiras consolidadas as participações de uma sociedade em outra, mantendo-se, porém, os saldos das contas entre as sociedades.","E","Lei 6.404, art. 250","O inciso II manda excluir <b>os saldos de quaisquer contas entre as sociedades</b>."],
  ["Segundo o art. 250, III, da Lei 6.404/76, serão excluídas as parcelas dos resultados do exercício, dos lucros ou prejuízos acumulados e do custo de estoques ou do ativo não circulante que corresponderem a resultados já realizados de negócios entre as sociedades.","E","Lei 6.404, art. 250","O inciso III fala de resultados <b>ainda não realizados</b>."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Objetivo, controle, poder e o quadro das participações",
      '<div class="box"><span class="bl">Objetivo e alcance</span>'+
      '<p><b>Item 01:</b> estabelecer <b>princípios para a apresentação e elaboração de demonstrações consolidadas</b> quando a entidade <b>controla uma ou mais entidades</b>.</p>'+
      '<p><b>Item 03:</b> o CPC 36 <b>NÃO trata</b> dos requisitos contábeis para <b>combinação de negócios</b> e seus efeitos sobre a consolidação, <b>incluindo o ágio por expectativa de rentabilidade futura (goodwill)</b> resultante de combinação de negócios.</p></div>'+
      '<div class="box"><span class="bl">O que são demonstrações consolidadas</span>'+
      '<p>As demonstrações contábeis de <b>grupo econômico</b>, em que <b>ativos, passivos, patrimônio líquido, receitas, despesas e fluxos de caixa</b> da <b>controladora</b> e de suas <b>controladas (não coligadas)</b> são apresentados <b>como se fossem uma única entidade econômica</b>.</p></div>'+
      '<div class="box"><span class="bl">Controle — o teste do item 07</span>'+
      '<p><b>Item 05:</b> o investidor, <b>independentemente da natureza de seu envolvimento</b>, deve determinar se é controlador avaliando se <b>controla</b> a investida — e o comentário do resumo admite <b>pessoa física ou jurídica</b>.</p>'+
      '<p><b>Item 06:</b> controla quando está <b>exposto a, ou tem direitos sobre, retornos VARIÁVEIS</b> e tem a <b>capacidade de afetar esses retornos</b> por meio de seu <b>poder</b>.</p>'+
      '<p><b>Item 07 — se, e somente se, possuir TODOS:</b></p>'+
      '<ul><li>(a) <b>poder</b> sobre a investida;</li>'+
      '<li>(b) <b>exposição a, ou direitos sobre, retornos variáveis</b> decorrentes do envolvimento;</li>'+
      '<li>(c) <b>capacidade de utilizar seu poder</b> sobre a investida para <b>afetar o valor de seus retornos</b>.</li></ul>'+
      '<p class="mn"><em>Exemplo do resumo: “A” compra 60% das ações com direito a voto de “B”, nomeia e destitui o pessoal-chave, influencia decisões estratégicas e recebe 60% dos lucros — “A” controla “B”.</em></p></div>'+
      '<div class="box trap"><span class="bl">Controle coletivo (item 09)</span>'+
      '<p>Dois ou mais investidores que <b>devem agir em conjunto</b> para dirigir as atividades relevantes: como nenhum dirige sem a cooperação dos demais, <b>NENHUM investidor individualmente controla</b> a investida.</p>'+
      '<p>Cada um contabiliza sua participação pelo <b>CPC 19</b> (Negócios em Conjunto), <b>CPC 18</b> (Coligada, Controlada e Empreendimento Controlado em Conjunto) ou <b>CPC 38</b> (Instrumentos Financeiros) — e <b>não</b> aplica o método de consolidação.</p>'+
      '<p class="mn"><em>João e Maria, participações iguais, aprovam orçamento e nomeiam diretores só juntos: controle conjunto, sem consolidação.</em></p></div>'+
      '<div class="box tip"><span class="bl">Quadro das participações societárias</span>'+
      '<ul><li><b>Pouca influência</b> — participação <b>MENOR que 20%</b> — <b>CPC 38 e 48</b> (Instrumentos Financeiros) — <b>NÃO consolida</b>.</li>'+
      '<li><b>Influência significativa</b> — participação <b>MAIOR que 20%</b> — <b>CPC 18</b> (Coligada) — <b>NÃO consolida</b>.</li>'+
      '<li><b>Controle preponderante</b> — participação <b>MAIOR que 50%</b> — <b>CPC 18 e 36</b> (Controlada) — <b>CONSOLIDA</b>.</li>'+
      '<li><b>Controle em conjunto</b> — participação <b>igual aos demais controladores</b> — <b>CPC 19</b> (Negócios em Conjunto) — <b>NÃO consolida</b>.</li></ul>'+
      '<p>Das quatro linhas, <b>só uma consolida</b>. É o gancho favorito da banca.</p></div>'+
      '<div class="box"><span class="bl">Poder e atividades relevantes</span>'+
      '<p><b>Item 10:</b> o investidor tem poder quando tem <b>direitos existentes</b> que lhe dão a <b>capacidade ATUAL de dirigir as atividades relevantes</b>, ou seja, as atividades que <b>afetam significativamente os retornos</b> da investida.</p>'+
      '<p><b>B15 — direitos que podem dar poder:</b> (a) <b>direitos de voto (ou de voto potenciais)</b>; (b) <b>nomear, realocar ou destituir membros do pessoal-chave da administração</b> que possam dirigir as atividades relevantes; (c) <b>nomear ou destituir outra entidade</b> que dirija as atividades relevantes; (d) <b>instruir a investida a realizar transações, ou vetar mudanças</b> nessas transações, em benefício do investidor; (e) <b>outros direitos</b>, como os de tomada de decisão especificados em <b>contrato de gestão</b>.</p></div>')
  ],
  V2:[
    sl("Requisitos contábeis, não controladores e entidade de investimento",
      '<div class="box"><span class="bl">Políticas contábeis uniformes (item 19 e B87)</span>'+
      '<p><b>Item 19:</b> a controladora elabora as consolidadas usando <b>políticas contábeis uniformes</b> para <b>transações similares e outros eventos em circunstâncias similares</b>.</p>'+
      '<p><b>Exemplo do resumo:</b> se a controladora tem <b>4 controladas</b> que realizam a mesma transação — venda de mercadorias —, ela deve usar as <b>mesmas políticas</b> para registrar essas vendas nas consolidadas, garantindo <b>uniformidade e comparabilidade</b>.</p>'+
      '<p><b>B87:</b> se um membro do grupo usar políticas diferentes, devem ser feitos <b>ajustes apropriados às demonstrações contábeis desse membro</b> para garantir conformidade com as políticas do grupo.</p></div>'+
      '<div class="box"><span class="bl">Quando começa e quando acaba (item 20)</span>'+
      '<p>A consolidação <b>inicia</b> a partir da data em que o investidor <b>obtiver o controle</b> e <b>cessa</b> quando o investidor <b>perder o controle</b> — não no fechamento do exercício.</p></div>'+
      '<div class="box"><span class="bl">Participação de não controladores (item 22)</span>'+
      '<p>É a parte do <b>patrimônio líquido da controlada NÃO atribuível à controladora</b>.</p>'+
      '<p>A controladora deve apresentá-la no <b>balanço patrimonial consolidado</b>, <b>DENTRO do patrimônio líquido</b>, <b>SEPARADAMENTE</b> do PL dos proprietários da controladora.</p>'+
      '<p class="mn"><em>Exemplo: “A” tem 80% de “B”. Os 20% dos demais acionistas vão ao PL consolidado, apartados dos ativos e passivos de A e dos 80% do capital de B.</em></p></div>'+
      '<div class="box"><span class="bl">Entidade de investimento (item 27)</span>'+
      '<p>É a entidade que:</p>'+
      '<ul><li><b>obtém recursos de um ou mais investidores</b> com o intuito de prestar-lhes <b>serviços de gestão de investimento</b>;</li>'+
      '<li><b>compromete-se</b> com os investidores de que seu <b>propósito comercial é investir recursos EXCLUSIVAMENTE</b> para <b>retornos de valorização do capital, receitas de investimentos ou ambos</b>;</li>'+
      '<li><b>mensura e avalia o desempenho</b> de substancialmente <b>TODOS</b> os seus investimentos com base no <b>VALOR JUSTO</b>.</li></ul>'+
      '<p class="mn"><em>Exemplo do resumo: um fundo de investimento, que aplica o capital dos investidores em ações, títulos públicos ou imóveis.</em></p></div>'+
      '<div class="box trap"><span class="bl">A exceção e a exceção da exceção</span>'+
      '<p><b>Item 31 — a regra:</b> a entidade de investimento <b>não consolida</b> suas controladas nem aplica o <b>CPC 15</b>; <b>mensura o investimento em controlada ao VALOR JUSTO por meio do RESULTADO</b>, conforme o <b>CPC 38</b>.</p>'+
      '<p><b>Item 32 — a volta:</b> se a controlada <b>não é, por si mesma, entidade de investimento</b> e sua <b>finalidade principal e atividades são a prestação de serviços relacionados às atividades de investimento</b>, então <b>DEVE consolidar</b> essa controlada conforme os <b>itens 19 a 26</b> e aplicar o <b>CPC 15</b> na aquisição.</p>'+
      '<p><b>Item 4B:</b> a controladora que é entidade de investimento <b>não deve apresentar demonstrações consolidadas</b> se estiver obrigada, pelo item 31, a mensurar <b>todas</b> as controladas ao valor justo por meio do resultado.</p></div>')
  ],
  V3:[
    sl("Procedimentos de consolidação, data-base e o art. 250",
      '<div class="box"><span class="bl">B86 — os três procedimentos</span>'+
      '<ul><li><b>(a) Combinar</b> itens similares de <b>ativos, passivos, patrimônio líquido, receitas, despesas e fluxos de caixa</b> da controladora com os de suas controladas.</li>'+
      '<li><b>(b) Compensar (eliminar)</b> o <b>valor contábil do investimento da controladora em cada controlada</b> e a <b>parcela da controladora no PL de cada controlada</b> — o <b>CPC 15</b> explica como contabilizar qualquer <b>ágio</b> correspondente.</li>'+
      '<li><b>(c) Eliminar INTEGRALMENTE</b> ativos, passivos, PL, receitas, despesas e fluxos de caixa <b>intragrupo</b>; resultados de transações intragrupo reconhecidos em ativos como <b>estoques e ativos fixos</b> são eliminados <b>integralmente</b>. <b>Prejuízos intragrupo</b> podem indicar <b>redução no valor recuperável</b> de ativos. O <b>CPC 32 (Tributos sobre o Lucro)</b> se aplica às <b>diferenças temporárias</b> surgidas dessas eliminações.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Questão-exemplo: Cia. Alfa e Cia. Beta (31/12/2023)</span>'+
      '<p><b>Alfa</b> (80% de Beta): Investimentos – Cia Beta <b>80.000</b> · Total do Ativo <b>80.000</b> · Financiamentos <b>30.000</b> · Capital Social <b>50.000</b>.</p>'+
      '<p><b>Beta:</b> Caixa <b>150.000</b> · Terrenos <b>250.000</b> · Total do Ativo <b>400.000</b> · Financiamentos <b>300.000</b> · Capital Social <b>100.000</b>.</p>'+
      '<p><b>Ajuste (alínea b do B86):</b> <b>D</b> PL da Cia Beta R$ 80.000 · <b>C</b> Investimento (ativo da Cia Alfa) R$ 80.000.</p>'+
      '<p><b>Consolidado:</b> Caixa <b>150.000</b> · Investimentos <b>0</b> · Terreno <b>250.000</b> · <b>Total do Ativo 400.000</b> · Financiamento <b>330.000</b> · Capital Social <b>70.000</b>.</p>'+
      '<p class="mn"><em>Resolução rápida: PL Consolidado = PL de Alfa + PL de Beta − Investimento de Alfa em Beta = 50.000 + 100.000 − 80.000 = R$ 70.000.</em></p></div>'+
      '<div class="box"><span class="bl">Data das demonstrações contábeis (B92 e B93)</span>'+
      '<p><b>Regra:</b> controladora e controladas devem usar demonstrações de <b>mesma data-base</b>.</p>'+
      '<p>Se as datas diferirem, a <b>controlada</b> elabora <b>informações contábeis adicionais</b> na data da controladora — <b>a menos que seja impraticável</b>.</p>'+
      '<p><b>Se impraticável (B93):</b> a controladora usa as <b>demonstrações mais recentes da controlada, ajustadas</b> para refletir transações e eventos significativos ocorridos no intervalo. A duração dos períodos e a diferença entre as datas devem ser <b>as mesmas de período para período</b>.</p>'+
      '<p><b>Em QUALQUER caso, a diferença não pode ser superior a DOIS MESES.</b></p>'+
      '<p class="mn"><em>Exemplo: controladora “A” fecha em 31/dez, controlada “B” em 31/out — B elabora informações adicionais em 31/dez (BP, DRE e DFC).</em></p></div>'+
      '<div class="box trap"><span class="bl">Lei 6.404/76, art. 250 — o que é EXCLUÍDO</span>'+
      '<p><b>I</b> — as <b>participações de uma sociedade em outra</b>;</p>'+
      '<p><b>II</b> — os <b>saldos de quaisquer contas entre as sociedades</b>;</p>'+
      '<p><b>III</b> — as parcelas dos <b>resultados do exercício</b>, dos <b>lucros ou prejuízos acumulados</b> e do <b>custo de estoques ou do ativo não circulante</b> que corresponderem a resultados <b>AINDA NÃO REALIZADOS</b> de negócios entre as sociedades.</p>'+
      '<p>O resumo avisa: as bancas <b>exploram bastante o conceito de lucro não realizado</b> — o inciso III. Troque “ainda não realizados” por “realizados” e a assertiva vira errada.</p></div>')
  ]
};

var EX = {
S1:{t:"gap", instr:"Complete o objetivo do CPC 36",
  before:"O objetivo é estabelecer princípios para a apresentação e elaboração de demonstrações consolidadas quando a entidade ",
  after:" uma ou mais entidades.",
  options:["controla","influencia significativamente","detém participação em"], answer:0,
  why:"Item 01 do CPC 36 — o gatilho da consolidação é o controle."},

S2:{t:"multi", instr:"Marque o que é apresentado como se fosse uma única entidade econômica nas demonstrações consolidadas",
  options:["Ativos da controladora e das controladas","Passivos da controladora e das controladas",
           "Patrimônio líquido da controladora e das controladas","Receitas e despesas da controladora e das controladas",
           "Fluxos de caixa da controladora e das controladas",
           "Ativos e passivos das coligadas"],
  answers:[0,1,2,3,4],
  why:"O resumo é expresso: controladora e controladas — não coligadas."},

S3:{t:"multi", instr:"Marque os atributos que o investidor deve possuir, cumulativamente, para controlar a investida (item 07)",
  options:["Poder sobre a investida",
           "Exposição a, ou direitos sobre, retornos variáveis decorrentes do envolvimento com a investida",
           "Capacidade de utilizar seu poder sobre a investida para afetar o valor de seus retornos",
           "Direito a retornos fixos e garantidos",
           "Participação de pelo menos 20% no capital votante"],
  answers:[0,1,2],
  why:"O item 07 diz \"se, e somente se\" o investidor possuir TODOS os três atributos."},

S4:{t:"mc", instr:"Dois investidores devem agir em conjunto para dirigir as atividades relevantes da investida. Quem controla?",
  options:["Nenhum deles individualmente controla a investida",
           "Cada um controla individualmente a investida",
           "Controla aquele que tiver a maior participação",
           "Controla aquele que nomear o pessoal-chave da administração"],
  answer:0,
  why:"Item 09: como nenhum pode dirigir as atividades sem a cooperação dos demais, nenhum controla individualmente."},

S5:{t:"sort", instr:"Consolida ou não consolida, segundo o quadro das participações societárias?",
  buckets:["Consolida","Não consolida"],
  items:[["Controle preponderante — participação MAIOR que 50%",0],
         ["Pouca influência — participação MENOR que 20%",1],
         ["Influência significativa — participação MAIOR que 20%",1],
         ["Controle em conjunto — participação igual aos demais controladores",1]],
  why:"Das quatro linhas do quadro, só a controlada (mais de 50%) consolida."},

S6:{t:"match", instr:"Ligue cada situação do quadro ao pronunciamento que a rege",
  pairs:[["Pouca influência (menos de 20%)","CPC 38 e 48 — Instrumentos Financeiros"],
         ["Influência significativa (mais de 20%)","CPC 18 — Coligada"],
         ["Controle preponderante (mais de 50%)","CPC 18 e 36 — Controlada"],
         ["Controle em conjunto","CPC 19 — Negócios em Conjunto"]],
  why:"Só a linha da controlada leva o CPC 36 e consolida."},

S7:{t:"gap", instr:"Complete o conceito de poder (item 10)",
  before:"O investidor tem poder quando tem direitos existentes que lhe dão a capacidade ",
  after:" de dirigir as atividades relevantes.",
  options:["atual","potencial","futura"], answer:0,
  why:"A troca de \"atual\" por \"potencial\" é a pegadinha clássica do item 10."},

S8:{t:"multi", instr:"Marque os direitos que, pelo item B15, podem dar poder ao investidor",
  options:["Direitos de voto, ou direitos de voto potenciais, da investida",
           "Direitos de nomear, realocar ou destituir membros do pessoal-chave da administração",
           "Direitos de nomear ou destituir outra entidade que dirija as atividades relevantes",
           "Direitos de instruir a investida a realizar transações, ou vetar mudanças nessas transações, em benefício do investidor",
           "Direitos de tomada de decisões especificados em contrato de gestão",
           "Direito de preferência na subscrição de debêntures"],
  answers:[0,1,2,3,4],
  why:"São as cinco alíneas do B15 — (a) a (e)."},

S9:{t:"mc", instr:"Um membro do grupo usa políticas contábeis diferentes das adotadas nas demonstrações consolidadas para transações similares. O que se faz?",
  options:["Fazem-se ajustes apropriados às demonstrações contábeis desse membro do grupo",
           "Mantêm-se os saldos originais, com nota explicativa",
           "Exclui-se esse membro da consolidação",
           "Adotam-se, nas consolidadas, as políticas desse membro"],
  answer:0,
  why:"B87 — para garantir a conformidade com as políticas contábeis do grupo."},

S10:{t:"mc", instr:"Quando se inicia e quando cessa a consolidação da investida (item 20)?",
  options:["Inicia quando o investidor obtém o controle e cessa quando o perde",
           "Inicia na data de aquisição das ações e cessa no fim do exercício social",
           "Inicia no primeiro exercício após a aquisição e cessa na alienação total",
           "Inicia e cessa sempre no encerramento do exercício social"],
  answer:0,
  why:"O marco é o controle, não a data do balanço."},

S11:{t:"gap", instr:"Complete a apresentação da participação de não controladores (item 22)",
  before:"A controladora deve apresentar as participações de não controladores no balanço patrimonial consolidado, dentro do ",
  after:", separadamente do patrimônio líquido dos proprietários da controladora.",
  options:["patrimônio líquido","passivo circulante","passivo não circulante"], answer:0,
  why:"Ela compõe o PL consolidado, mas em linha própria."},

S12:{t:"multi", instr:"Marque os requisitos da entidade de investimento (item 27)",
  options:["Obtém recursos de um ou mais investidores para prestar-lhes serviços de gestão de investimento",
           "Compromete-se a investir recursos exclusivamente para valorização do capital, receitas de investimentos ou ambos",
           "Mensura e avalia o desempenho de substancialmente todos os seus investimentos com base no valor justo",
           "Mensura seus investimentos pelo custo histórico",
           "Consolida todas as suas controladas"],
  answers:[0,1,2],
  why:"O valor justo é o critério de avaliação de desempenho — nunca o custo histórico."},

S13:{t:"mc", instr:"A entidade de investimento obtém o controle de outra entidade. Como mensura esse investimento (item 31)?",
  options:["Ao valor justo por meio do resultado, conforme o CPC 38",
           "Pelo método da equivalência patrimonial, conforme o CPC 18",
           "Pelo custo de aquisição, aplicando o CPC 15",
           "Consolidando integralmente a controlada"],
  answer:0,
  why:"Ela não consolida nem aplica o CPC 15 — salvo o caso do item 32."},

S14:{t:"sort", instr:"A entidade de investimento consolida ou não consolida esta controlada?",
  buckets:["Consolida","Não consolida"],
  items:[["Controlada que não é, por si mesma, entidade de investimento e cujas atividades principais são a prestação de serviços relacionados às atividades de investimento",0],
         ["Controlada em geral, sobre a qual a entidade de investimento obteve o controle",1]],
  why:"Item 31 é a regra (não consolida); item 32 é a exceção da exceção, com os itens 19 a 26 e o CPC 15."},

S15:{t:"match", instr:"Ligue cada alínea do item B86 ao seu procedimento",
  pairs:[["B86 (a)","Combinar itens similares de ativos, passivos, PL, receitas, despesas e fluxos de caixa"],
         ["B86 (b)","Compensar o valor contábil do investimento e a parcela da controladora no PL da controlada"],
         ["B86 (c)","Eliminar integralmente os saldos e resultados intragrupo"]],
  why:"O ágio da alínea (b) é contabilizado conforme o CPC 15; as diferenças temporárias da (c), pelo CPC 32."},

S16:{t:"mc", instr:"Cia. Alfa tem 80% da Cia. Beta. PL de Alfa R$ 50.000; PL de Beta R$ 100.000; Investimento – Cia Beta R$ 80.000. Qual o patrimônio líquido consolidado?",
  options:["R$ 70.000","R$ 150.000","R$ 100.000","R$ 50.000"],
  answer:0,
  why:"PL Consolidado = 50.000 + 100.000 − 80.000 = 70.000."},

S17:{t:"wordbank", instr:"Monte o lançamento de ajuste da consolidação da questão-exemplo",
  target:["D","PL","da","Cia","Beta","80.000","C","Investimento","80.000"],
  extra:["Caixa","Terrenos","Financiamentos","150.000"],
  why:"Elimina-se o investimento no ativo de Alfa contra a parcela de Alfa no PL de Beta."},

S18:{t:"mc", instr:"Quando for impraticável à controlada elaborar informações na data da controladora, qual a diferença máxima entre as datas?",
  options:["Dois meses","Três meses","Um mês","Seis meses"],
  answer:0,
  why:"B93 — em qualquer caso, não superior a dois meses."},

S19:{t:"multi", instr:"Marque o que o art. 250 da Lei 6.404/76 manda EXCLUIR das demonstrações consolidadas",
  options:["As participações de uma sociedade em outra",
           "Os saldos de quaisquer contas entre as sociedades",
           "As parcelas dos resultados do exercício que corresponderem a resultados ainda não realizados de negócios entre as sociedades",
           "As parcelas dos lucros ou prejuízos acumulados que corresponderem a resultados ainda não realizados de negócios entre as sociedades",
           "As parcelas do custo de estoques ou do ativo não circulante que corresponderem a resultados ainda não realizados de negócios entre as sociedades",
           "As participações de não controladores no patrimônio líquido"],
  answers:[0,1,2,3,4],
  why:"A participação de não controladores não é excluída: ela compõe o PL consolidado, em linha separada (item 22 do CPC 36)."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Avançada 10","https://www.tecconcursos.com.br/s/Q2xcEo","Q2xcEo"],
  ["Caderno FCC — Contabilidade Avançada 10","https://www.tecconcursos.com.br/s/Q2xcEv","Q2xcEv"],
  ["Caderno FGV — Contabilidade Avançada 10","https://www.tecconcursos.com.br/s/Q2xcFN","Q2xcFN"],
  ["Caderno VUNESP — Contabilidade Avançada 10","https://www.tecconcursos.com.br/s/Q2xcFk","Q2xcFk"]
];
var TECNOTA = "A banca ganha dinheiro em três fronteiras deste resumo. A primeira é o quadro das participações societárias: das quatro situações, só o controle preponderante (participação MAIOR que 50%, CPC 18 e 36) consolida — coligada com mais de 20%, pouca influência com menos de 20% e controle em conjunto NÃO consolidam. A segunda é a entidade de investimento: o item 31 manda NÃO consolidar e mensurar a controlada ao valor justo por meio do resultado (CPC 38), e o item 32 devolve a consolidação apenas para a controlada que não é entidade de investimento e presta serviços relacionados às atividades de investimento. A terceira é numérica e literal: PL Consolidado = PL da controladora + PL da controlada − Investimento (50.000 + 100.000 − 80.000 = 70.000), a eliminação INTEGRAL — nunca proporcional — dos resultados intragrupo do B86 (c), o limite de DOIS MESES do B93 e o \"ainda não realizados\" do inciso III do art. 250 da Lei 6.404/76, que o próprio resumo aponta como o ponto mais explorado.";

var UNITS = [
  {n:1, title:"Controle, poder e quem consolida", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Objetivo, controle, poder e o quadro das participações", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · objetivo e alcance do CPC 36",   xp:25, data:["S1","S2","T0","T1","T2","T3","T4","T5"]},
    {id:"K3", type:"drill",  title:"Praticar · o teste do controle",            xp:25, data:["S3","S4","S5","S6","T6","T7","T8","T9","T10","T11"]},
    {id:"K4", type:"drill",  title:"Praticar · faixas de participação e poder", xp:25, data:["S7","S8","T12","T13","T14","T15","T16","T17","T18"]},
    {id:"K5", type:"flash",  title:"Flashcards · controle e poder",             xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12]}
  ]},
  {n:2, title:"Requisitos, não controladores e entidade de investimento", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Políticas uniformes, PL de não controladores e entidade de investimento", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · políticas uniformes e marcos",   xp:25, data:["S9","S10","T19","T20","T21","T22","T23"]},
    {id:"K8", type:"drill",  title:"Praticar · participação de não controladores", xp:25, data:["S11","S12","T24","T25","T26","T27"]},
    {id:"K9", type:"drill",  title:"Praticar · a exceção da entidade de investimento", xp:25, data:["S13","S14","T28","T29","T30","T31","T32"]},
    {id:"K10",type:"flash",  title:"Flashcards · requisitos e entidade de investimento", xp:15, data:[13,14,15,16,17,18,19,20,21,22,23,24]}
  ]},
  {n:3, title:"Procedimentos, data-base e art. 250", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"B86, a questão-exemplo Alfa/Beta e a Lei 6.404/76", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · os três procedimentos do B86",   xp:25, data:["S15","S16","T33","T34","T35","T36","T37"]},
    {id:"K13",type:"drill",  title:"Praticar · eliminação e balanço consolidado", xp:25, data:["S17","S18","T38","T39","T40","T41","T42","T43"]},
    {id:"K14",type:"drill",  title:"Praticar · data-base e exclusões do art. 250", xp:25, data:["S19","T44","T45","T46","T47"]},
    {id:"K15",type:"flash",  title:"Flashcards · consolidação na prática",      xp:15, data:[25,26,27,28,29,30,31,32,33,34,35,36]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                   xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                      xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                     xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 10 de Contabilidade Avançada (Radegondes) ---------- */
var COM={
0:"<p>Certo — é a transcrição do <b>item 01</b> no resumo: <b>“o objetivo deste Pronunciamento é estabelecer princípios para a apresentação e elaboração de demonstrações consolidadas quando a entidade controla uma ou mais entidades”</b>.</p><p>O esquema do resumo divide a frase em duas caixas: <b>o que se faz</b> (apresentar e elaborar demonstrações consolidadas) e <b>quando se faz</b> (quando a entidade <b>controla</b> uma ou mais entidades). O gatilho é o <b>controle</b>, não a simples participação.</p><p class='fb-fonte'>Resumo 10 · <i>Objetivo do CPC 36</i></p>",
1:"<p>Errado — a assertiva afirma justamente o que o resumo nega. Pelo <b>item 03</b>, o CPC 36 <b>“não trata dos requisitos contábeis para combinação de negócios e seus efeitos sobre a consolidação, incluindo ágio por expectativa de rentabilidade futura (goodwill) resultante de combinação de negócios”</b>.</p><p>Guarde a divisão de trabalho que o próprio resumo usa depois: o CPC 36 cuida da <b>consolidação</b>; quem <b>explica como contabilizar o ágio</b> é o <b>CPC 15</b>, na remissão da alínea (b) do item B86.</p><p class='fb-fonte'>Resumo 10 · <i>CPC 36</i></p>",
2:"<p>Certo — é a definição do resumo, palavra por palavra: demonstrações consolidadas são <b>“as demonstrações contábeis de grupo econômico, em que os ativos, passivos, patrimônio líquido, receitas, despesas e fluxos de caixa da controladora e de suas controladas (não coligadas) são apresentados como se fossem uma única entidade econômica”</b>.</p><p>Repare no rol: são <b>seis</b> elementos, e os <b>fluxos de caixa</b> entram junto. A ideia-chave é a <b>única entidade econômica</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Objetivo do CPC 36</i></p>",
3:"<p>Errado por uma palavra acrescentada: <b>coligadas</b>. A definição do resumo traz o parêntese de propósito — controladora e suas controladas <b>“(não coligadas)”</b>.</p><p>O quadro das participações societárias fecha o raciocínio: a <b>coligada</b> (participação maior que 20%, influência significativa) é regida pelo <b>CPC 18</b> e <b>NÃO consolida</b>. Só a <b>controlada</b> entra na consolidação.</p><p class='fb-fonte'>Resumo 10 · <i>Objetivo do CPC 36</i></p>",
4:"<p>Certo pela letra do <b>item 05</b>: <b>“o investidor, independentemente da natureza de seu envolvimento com a entidade (investida), deve determinar se é controlador avaliando se controla a investida”</b>.</p><p>O comentário do resumo traduz: não importa o rótulo jurídico do envolvimento — o que se examina é se há <b>controle</b>. E o exemplo dele é direto: quem adquire a maioria das ações passa a ter controle sobre as decisões estratégicas, a escolha de diretores e as políticas financeiras.</p><p class='fb-fonte'>Resumo 10 · <i>Controle — item 05</i></p>",
5:"<p>Errado. O comentário do resumo ao item 05 é expresso: <b>“o investidor, SEJA ELE UMA PESSOA FÍSICA OU JURÍDICA, deve analisar se possui controle sobre a empresa na qual investiu para determinar sua condição de controlador”</b>.</p><p>O exemplo dado é justamente de <b>pessoa física</b>: alguém adquire a maioria das ações de uma empresa e passa a influenciar sua gestão, a escolha de diretores e as políticas financeiras — será considerado o controlador da investida.</p><p class='fb-fonte'>Resumo 10 · <i>Controle — item 05</i></p>",
6:"<p>Certo — literalidade do <b>item 06</b>: o investidor controla a investida quando <b>“está exposto a, ou tem direitos sobre, retornos variáveis decorrentes de seu envolvimento com a investida e tem a capacidade de afetar esses retornos por meio de seu poder sobre a investida”</b>.</p><p>O exemplo do resumo dá os números: <b>“A” adquiriu 60% das ações com direito a voto de “B”</b>, pode nomear, realocar ou destituir o pessoal-chave, influencia decisões estratégicas e operacionais e tem direito a <b>60% dos lucros</b>. Logo, “A” controla “B”.</p><p class='fb-fonte'>Resumo 10 · <i>Controle — item 06</i></p>",
7:"<p>Errado no adjetivo. O item 06 fala de retornos <b>VARIÁVEIS</b>, e o item 07 repete: <b>“exposição a, ou direitos sobre, retornos variáveis decorrentes de seu envolvimento com a investida”</b>.</p><p>Retorno fixo e garantido é o oposto da lógica do controle: é justamente porque o retorno <b>oscila</b> que interessa saber se o investidor tem <b>poder para afetar o valor desse retorno</b>. Troca de “variáveis” por “fixos” é assertiva errada.</p><p class='fb-fonte'>Resumo 10 · <i>Controle — itens 06 e 07</i></p>",
8:"<p>Errado — o item 07 é cumulativo, e não alternativo. O resumo transcreve: <b>“o investidor controla a investida SE, E SOMENTE SE, o investidor possuir TODOS os atributos seguintes”</b>.</p><p>São três: <b>(a) poder sobre a investida</b>; <b>(b) exposição a, ou direitos sobre, retornos variáveis</b> decorrentes do envolvimento; <b>(c) a capacidade de utilizar seu poder sobre a investida para afetar o valor de seus retornos</b>. Faltando um, não há controle.</p><p class='fb-fonte'>Resumo 10 · <i>Controle — item 07</i></p>",
9:"<p>Certo, e na ordem exata do <b>item 07</b>: <b>(a) poder sobre a investida</b>; <b>(b) exposição a, ou direitos sobre, retornos variáveis decorrentes de seu envolvimento com a investida</b>; <b>(c) a capacidade de utilizar seu poder sobre a investida para afetar o valor de seus retornos</b>.</p><p>A palavra que a banca esconde ou troca é o <b>“se, e somente se”</b> do caput: os três atributos são exigidos <b>em conjunto</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Controle — item 07</i></p>",
10:"<p>Errado, e é exatamente a inversão do <b>item 09</b>. O resumo transcreve: <b>“como nenhum investidor pode dirigir as atividades sem a cooperação dos demais, NENHUM investidor individualmente controla a investida”</b>.</p><p>O exemplo do material: <b>João e Maria</b>, com participações iguais numa empresa de alimentos, aprovam orçamento e nomeiam diretores apenas em conjunto. Há controle <b>conjunto</b>, e não dois controladores individuais.</p><p class='fb-fonte'>Resumo 10 · <i>Controle — item 09</i></p>",
11:"<p>Certo. O comentário do resumo ao item 09 conclui: <b>“nesse caso, cada investidor não deve aplicar o método de consolidação, pois eles devem contabilizar sua participação na investida de acordo com os Pronunciamentos Técnicos”</b> — e lista os três.</p><p>Decore a lista do material: <b>CPC 19</b> (Negócios em Conjunto), <b>CPC 18</b> (Investimento em Coligada, em Controlada e em Empreendimento Controlado em Conjunto) e <b>CPC 38</b> (Instrumentos Financeiros: Reconhecimento e Mensuração).</p><p class='fb-fonte'>Resumo 10 · <i>Controle — item 09</i></p>",
12:"<p>Certo — é a terceira linha do quadro <b>PARTICIPAÇÕES SOCIETÁRIAS</b> do resumo: <b>Controle Preponderante</b> · participação <b>MAIOR que 50%</b> · <b>CPC 18 e 36 (Controlada)</b> · <b>Consolida</b>.</p><p>Guarde que essa é a <b>única</b> das quatro linhas do quadro em que aparece a palavra “Consolida”. As outras três dizem “Não Consolida”.</p><p class='fb-fonte'>Resumo 10 · <i>Participações Societárias</i></p>",
13:"<p>Errado na consequência. No quadro do resumo, participação <b>MAIOR que 20%</b> é <b>influência significativa</b>, regida pelo <b>CPC 18 (Coligada)</b> — e a coluna final diz <b>“Não Consolida”</b>.</p><p>A própria definição de demonstrações consolidadas já avisava: controladora e suas controladas <b>“(não coligadas)”</b>. Coligada entra por <b>equivalência patrimonial</b>, não por consolidação.</p><p class='fb-fonte'>Resumo 10 · <i>Participações Societárias</i></p>",
14:"<p>Certo — primeira linha do quadro do resumo: <b>Pouca Influência</b> · participação <b>MENOR que 20%</b> · <b>CPC 38 e 48 (Instrumentos Financeiros)</b> · <b>Não Consolida</b>.</p><p>É a única linha em que o resumo cita o <b>CPC 48</b> ao lado do CPC 38. Se a assertiva trouxer esses dois pronunciamentos juntos, está falando da faixa de <b>menos de 20%</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Participações Societárias</i></p>",
15:"<p>Certo — quarta linha do quadro: <b>Controle em Conjunto</b> · <b>participação igual aos demais controladores</b> · <b>CPC 19 (Negócios em Conjunto)</b> · <b>Não Consolida</b>.</p><p>É o quadro confirmando o item 09 e o exemplo de <b>João e Maria</b>: quando nenhum investidor dirige as atividades relevantes sozinho, não se aplica o método de consolidação.</p><p class='fb-fonte'>Resumo 10 · <i>Participações Societárias</i></p>",
16:"<p>Errado por uma palavra. O <b>item 10</b> exige <b>“direitos existentes que lhe dão a capacidade ATUAL de dirigir as atividades relevantes”</b> — não capacidade potencial nem futura.</p><p>O comentário do resumo reforça: são direitos que conferem a <b>capacidade atual de exercer controle sobre as atividades relevantes</b>, isto é, a capacidade de <b>guiar as decisões e as operações</b> da investida de forma significativa. Troque “atual” por “potencial” e a assertiva cai.</p><p class='fb-fonte'>Resumo 10 · <i>Poder — item 10</i></p>",
17:"<p>Errado no advérbio. Pelo <b>item 10</b>, atividades relevantes são <b>“as atividades que afetam SIGNIFICATIVAMENTE os retornos da investida”</b>.</p><p>O comentário do resumo repete a ideia: são as atividades que têm <b>impacto significativo nos resultados financeiros</b> da investida. Atividade de impacto irrelevante não serve para caracterizar poder — e, sem poder, não há controle (item 07, alínea a).</p><p class='fb-fonte'>Resumo 10 · <i>Poder — item 10</i></p>",
18:"<p>Certo — são as alíneas <b>(a)</b> e <b>(b)</b> do <b>item B15</b> tal como o resumo as lista: <b>“direitos na forma de direitos de voto (ou direitos de voto potenciais) da investida”</b> e <b>“direitos de nomear, realocar ou destituir membros do pessoal-chave da administração da investida que tenham a capacidade de dirigir as atividades relevantes”</b>.</p><p>As outras três do rol: <b>(c)</b> nomear ou destituir outra entidade que dirija as atividades relevantes; <b>(d)</b> instruir a investida a realizar transações, ou vetar mudanças nelas, em benefício do investidor; <b>(e)</b> outros direitos, como os de tomada de decisão previstos em <b>contrato de gestão</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Poder — item B15</i></p>",
19:"<p>Certo pela letra do <b>item 19</b>: <b>“a controladora deve elaborar demonstrações consolidadas utilizando políticas contábeis uniformes para transações similares e outros eventos em circunstâncias similares”</b>.</p><p>O exemplo do resumo é o das <b>4 controladas</b> que realizam a mesma transação — venda de mercadorias: a controladora precisa usar as <b>mesmas políticas contábeis</b> para registrar essas vendas, garantindo <b>uniformidade e comparabilidade</b> nas demonstrações do grupo.</p><p class='fb-fonte'>Resumo 10 · <i>Requisitos Contábeis para Consolidação</i></p>",
20:"<p>Errado — o resumo prevê exatamente o remédio contrário. Pelo <b>B87</b>, se um membro do grupo usar políticas diferentes, <b>“devem ser feitos ajustes apropriados às demonstrações contábeis desse membro do grupo na elaboração das demonstrações consolidadas para garantir a conformidade com as políticas contábeis do grupo”</b>.</p><p>Quem se ajusta é <b>o membro do grupo</b>, e não as consolidadas. O objetivo, diz o exemplo das 4 controladas, é a <b>comparabilidade</b> das informações do grupo.</p><p class='fb-fonte'>Resumo 10 · <i>Requisitos Contábeis para Consolidação — B87</i></p>",
21:"<p>Certo — transcrição do <b>B87</b>: se um membro do grupo utilizar políticas contábeis diferentes daquelas adotadas nas consolidadas para transações similares e eventos em circunstâncias similares, <b>“devem ser feitos ajustes apropriados às demonstrações contábeis desse membro do grupo”</b>.</p><p>É o par natural do item 19: a regra manda usar <b>políticas uniformes</b>; o B87 diz o que fazer quando alguém do grupo sai da linha.</p><p class='fb-fonte'>Resumo 10 · <i>Requisitos Contábeis para Consolidação — B87</i></p>",
22:"<p>Certo pela letra do <b>item 20</b>: <b>“a consolidação da investida se inicia a partir da data em que o investidor obtiver o controle da investida e cessa quando o investidor perder o controle da investida”</b>.</p><p>O marco, dos dois lados, é o <b>controle</b> — coerente com todo o resumo, que faz do controle o gatilho da consolidação desde o item 01.</p><p class='fb-fonte'>Resumo 10 · <i>Requisitos Contábeis para Consolidação — item 20</i></p>",
23:"<p>Errado no marco temporal. O <b>item 20</b> diz que a consolidação <b>“cessa QUANDO o investidor perder o controle da investida”</b> — e não no encerramento do exercício social em que a perda ocorreu.</p><p>Leia a frase nas duas pontas: começa <b>na data em que obtém</b> o controle, cessa <b>quando perde</b> o controle. A data do balanço não entra nessa conta.</p><p class='fb-fonte'>Resumo 10 · <i>Requisitos Contábeis para Consolidação — item 20</i></p>",
24:"<p>Certo — literalidade do <b>item 22</b>: <b>“uma controladora deve apresentar as participações de não controladores no balanço patrimonial consolidado, DENTRO DO PATRIMÔNIO LÍQUIDO, SEPARADAMENTE do patrimônio líquido dos proprietários da controladora”</b>.</p><p>O esquema do resumo resume em uma linha: a participação dos não controladores <b>“irá compor o PL do Balanço Consolidado, SEPARADAMENTE, do PL dos Proprietários”</b>. Dois requisitos, então: <b>dentro</b> do PL e em linha <b>apartada</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Participação de Não Controladores</i></p>",
25:"<p>Errado no grupo. O item 22 é expresso: a participação de não controladores vai <b>dentro do PATRIMÔNIO LÍQUIDO</b> do balanço consolidado, não no passivo.</p><p>O esquema do resumo repete: ela <b>“irá compor o PL do Balanço Consolidado, SEPARADAMENTE, do PL dos Proprietários”</b>. A separação é <b>dentro</b> do PL — é o que permite identificar claramente o valor que pertence aos acionistas não controladores.</p><p class='fb-fonte'>Resumo 10 · <i>Participação de Não Controladores</i></p>",
26:"<p>Certo — é a definição que o comentário do resumo dá ao item 22: <b>“participação de não controlador é a parte do patrimônio líquido da controlada NÃO atribuível à controladora”</b>.</p><p>No exemplo do material, a Empresa “A” detém <b>80%</b> do capital da Empresa “B”; a participação de não controladores é justamente a fatia de <b>20%</b> do capital de B que não pertence a A.</p><p class='fb-fonte'>Resumo 10 · <i>Participação de Não Controladores</i></p>",
27:"<p>Certo — é o exemplo do resumo com os mesmos percentuais. A controladora “A”, com <b>80%</b> do capital de “B”, deve apresentar no balanço consolidado as participações dos acionistas que não lhe pertencem (<b>20% do capital da Empresa B</b>).</p><p>E o material detalha a separação: essas participações ficam no <b>PL consolidado</b>, apartadas das parcelas dos acionistas da controladora — que são os ativos e passivos da Empresa A e os <b>80% do capital da Empresa B</b>. É isso que permite <b>identificar claramente o valor que pertence aos não controladores</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Participação de Não Controladores — exemplo</i></p>",
28:"<p>Certo — alínea <b>(a)</b> do <b>item 27</b>: a entidade de investimento <b>“obtém recursos de um ou mais investidores com o intuito de prestar a esses investidores serviços de gestão de investimento”</b>.</p><p>As outras duas alíneas completam o teste: <b>(b)</b> compromete-se com os investidores de que seu propósito comercial é <b>investir recursos exclusivamente</b> para retornos de <b>valorização do capital, receitas de investimentos ou ambos</b>; <b>(c)</b> <b>mensura e avalia o desempenho</b> de substancialmente todos os seus investimentos com base no <b>valor justo</b>. O exemplo do resumo é o <b>fundo de investimento</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Determinação se a Entidade é Entidade de Investimento</i></p>",
29:"<p>Errado no critério. A alínea <b>(c)</b> do item 27 exige que a entidade <b>“mensura e avalia o desempenho de substancialmente todos os seus investimentos com base no VALOR JUSTO”</b> — não no custo histórico.</p><p>O valor justo é a marca dessa entidade de ponta a ponta: é também por isso que o <b>item 31</b> manda mensurar o investimento em controlada <b>ao valor justo por meio do resultado</b>, conforme o CPC 38, em vez de consolidar.</p><p class='fb-fonte'>Resumo 10 · <i>Determinação se a Entidade é Entidade de Investimento</i></p>",
30:"<p>Certo pela letra do <b>item 31</b>: <b>“salvo conforme descrito no item 32, a entidade de investimento não deve consolidar as suas controladas nem deve aplicar o Pronunciamento Técnico CPC 15 quando obtiver o controle de outra entidade. Em vez disso, a entidade de investimento deve mensurar esse investimento em controlada ao valor justo por meio do resultado, de acordo com o Pronunciamento Técnico CPC 38”</b>.</p><p>Três informações para levar: <b>não consolida</b>, <b>não aplica o CPC 15</b> e <b>mensura ao valor justo por meio do resultado (CPC 38)</b>. A ressalva é o item 32.</p><p class='fb-fonte'>Resumo 10 · <i>Entidade de Investimento: Exceção à Consolidação</i></p>",
31:"<p>Certo — é a “exceção da exceção” do <b>item 32</b>: se a entidade de investimento tiver controlada que <b>não é, por si mesma, entidade de investimento</b> e cuja <b>finalidade principal e atividades são a prestação de serviços relacionados com as atividades de investimento</b>, <b>“essa entidade deve consolidar essa controlada de acordo com os itens 19 a 26 deste Pronunciamento Técnico e aplicar os requisitos do Pronunciamento Técnico CPC 15 quando da aquisição de qualquer controlada desse tipo”</b>.</p><p>O exemplo do resumo: a entidade de investimento “A” tem a controlada “B”, que não é entidade de investimento, mas <b>presta serviços de gestão de investimentos para “A”</b> — então “A” <b>consolida</b> “B”.</p><p class='fb-fonte'>Resumo 10 · <i>Entidade de Investimento: Exceção à Consolidação — item 32</i></p>",
32:"<p>Errado — o resumo diz o oposto. Pelo <b>item 4B</b>, <b>“a controladora que é entidade de investimento não deve apresentar demonstrações contábeis consolidadas se estiver obrigada, de acordo com o item 31 deste pronunciamento, a mensurar todas as suas controladas ao valor justo por meio do resultado”</b>.</p><p>A lógica fecha com o item 31: se <b>todas</b> as controladas vão ao <b>valor justo por meio do resultado</b>, não há o que consolidar. A obrigação de consolidar só reaparece na hipótese do <b>item 32</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Entidade de Investimento: Exceção à Consolidação — item 4B</i></p>",
33:"<p>Certo — alínea <b>(a)</b> do <b>B86</b>: as demonstrações consolidadas devem <b>“combinar itens similares de ativos, passivos, patrimônio líquido, receitas, despesas e fluxos de caixa da controladora com os de suas controladas”</b>.</p><p>O exemplo do resumo: a Empresa “A”, controladora das Empresas “B” e “C”, combina os saldos de ativos, passivos, PL, receitas e despesas de B e C com os seus próprios, para que os <b>stakeholders</b> vejam o grupo econômico <b>como uma entidade única</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Procedimentos de Consolidação — B86 (a)</i></p>",
34:"<p>Certo — alínea <b>(b)</b> do <b>B86</b>: <b>“compensar (eliminar) o valor contábil do investimento da controladora em cada controlada e a parcela da controladora no patrimônio líquido de cada controlada”</b>.</p><p>O exemplo numérico do resumo: “A” tem <b>80%</b> de “B”, com investimento registrado de <b>R$ 1.000.000</b>; o PL de “B” é de <b>R$ 2.000.000</b>, dos quais <b>R$ 1.600.000</b> pertencem a “A”. Na consolidação, eliminam-se o investimento de <b>1.000.000</b> e a parcela de <b>1.600.000</b>, para <b>evitar a duplicação</b> de valores.</p><p class='fb-fonte'>Resumo 10 · <i>Procedimentos de Consolidação — B86 (b)</i></p>",
35:"<p>Errado no pronunciamento. A remissão que o resumo transcreve na alínea (b) do B86 é ao <b>CPC 15</b>: <b>“o Pronunciamento Técnico CPC 15 explica como contabilizar qualquer ágio correspondente”</b>.</p><p>O <b>CPC 32 (Tributos sobre o Lucro)</b> aparece em outro lugar do mesmo item: na alínea <b>(c)</b>, aplicando-se às <b>diferenças temporárias</b> que surgem da eliminação de lucros e prejuízos de transações intragrupo. Não confunda os dois endereços.</p><p class='fb-fonte'>Resumo 10 · <i>Procedimentos de Consolidação — B86 (b) e (c)</i></p>",
36:"<p>Certo — alínea <b>(c)</b> do <b>B86</b>: as consolidadas devem <b>“eliminar integralmente ativos e passivos, patrimônio líquido, receitas, despesas e fluxos de caixa intragrupo relacionados a transações entre entidades do grupo”</b>.</p><p>O exemplo do resumo: a controladora “A” vende estoque para a controlada “B”, que reconhece o ativo; na consolidação essa transação é <b>eliminada</b> — o estoque sai dos ativos de B e não é considerado ativo na consolidada, para <b>evitar a duplicação de valores</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Procedimentos de Consolidação — B86 (c)</i></p>",
37:"<p>Errado na extensão da eliminação. A alínea (c) do B86 é categórica: <b>“resultados decorrentes de transações intragrupo que sejam reconhecidos em ativos, tais como estoques e ativos fixos, são eliminados INTEGRALMENTE”</b>.</p><p>Não há eliminação proporcional à participação da controladora neste ponto — é <b>tudo</b>. Proporcionalidade é a ideia que a banca enxerta para derrubar o candidato; o texto do resumo repete “integralmente” duas vezes na mesma alínea.</p><p class='fb-fonte'>Resumo 10 · <i>Procedimentos de Consolidação — B86 (c)</i></p>",
38:"<p>Certo — está na parte final da alínea <b>(c)</b> do B86, como o resumo transcreve: <b>“os prejuízos intragrupo podem indicar uma redução no valor recuperável de ativos, que exige o seu reconhecimento nas demonstrações consolidadas”</b>.</p><p>Repare no verbo: <b>“podem indicar”</b>. O prejuízo intragrupo é um <b>sinal</b> de perda por redução ao valor recuperável, não uma presunção automática.</p><p class='fb-fonte'>Resumo 10 · <i>Procedimentos de Consolidação — B86 (c)</i></p>",
39:"<p>Certo — é a remissão final da alínea (c) do B86 no resumo: <b>“o Pronunciamento Técnico CPC 32 (Tributos sobre o Lucro) se aplica a diferenças temporárias, que surgem da eliminação de lucros e prejuízos resultantes de transações intragrupo”</b>.</p><p>Guarde o par de remissões do B86 para não trocar uma pela outra: <b>ágio → CPC 15</b> (alínea b) · <b>diferenças temporárias → CPC 32</b> (alínea c).</p><p class='fb-fonte'>Resumo 10 · <i>Procedimentos de Consolidação — B86 (c)</i></p>",
40:"<p>Certo — é a <b>QUESTÃO-EXEMPLO</b> do resumo, com os mesmos números. Gabarito <b>B</b>, R$ 70.000.</p><p>O material dá a resolução rápida: <b>“PL Consolidado = PL da Cia Alfa + PL da Cia Beta – Investimento de Alfa em Beta”</b>, ou seja, <b>50.000 + 100.000 – 80.000 = 70.000</b>.</p><p>Pelo caminho longo, o ajuste da alínea (b) do B86 elimina o investimento contra a parcela de Alfa no PL de Beta, e o Capital Social consolidado passa de 150.000 para <b>70.000</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Procedimentos de Consolidação — questão-exemplo</i></p>",
41:"<p>Errado: R$ 150.000 é a <b>soma crua</b> dos dois patrimônios líquidos (50.000 + 100.000), <b>sem</b> a eliminação exigida pela alínea (b) do B86.</p><p>O resumo anota que o investimento de <b>R$ 80.000</b> representa <b>80% do PL de Beta, que é R$ 100.000</b>, e que ele <b>“deve ser excluído da consolidação”</b>. Daí: <b>50.000 + 100.000 – 80.000 = R$ 70.000</b>. Deixar 150.000 é <b>duplicar</b> valores — exatamente o que a consolidação existe para evitar.</p><p class='fb-fonte'>Resumo 10 · <i>Procedimentos de Consolidação — questão-exemplo</i></p>",
42:"<p>Certo — é o <b>lançamento de ajuste</b> transcrito no resumo: <b>D – PL da Cia Beta R$ 80.000</b> · <b>C – Investimento (ativo da cia Alfa) R$ 80.000</b>.</p><p>No quadro de consolidação do material isso aparece como <b>“Crédito: 80.000”</b> na linha Investimentos – Cia Beta (que zera) e <b>“Débito: 80.000”</b> na linha Capital Social, que cai de 150.000 para <b>70.000</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Procedimentos de Consolidação — questão-exemplo</i></p>",
43:"<p>Errado. R$ 480.000 seria somar os totais das duas colunas (80.000 de Alfa + 400.000 de Beta) <b>sem</b> a eliminação. O quadro do resumo mostra o <b>Total do Ativo consolidado em R$ 400.000</b>, porque o crédito de 80.000 zera a conta Investimentos – Cia Beta.</p><p>O consolidado do material, linha por linha: <b>Caixa 150.000</b> · <b>Investimentos 0</b> · <b>Terreno 250.000</b> · <b>Total do Ativo 400.000</b> · <b>Financiamento 330.000</b> · <b>Capital Social 70.000</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Procedimentos de Consolidação — questão-exemplo</i></p>",
44:"<p>Certo pela letra do <b>B92</b>: as demonstrações da controladora e das controladas usadas na consolidação <b>“devem ter a mesma data-base”</b>; se o final do período diferir, <b>“a controlada deve elaborar, para fins de consolidação, informações contábeis adicionais de mesma data que as demonstrações contábeis da controladora (...), a menos que seja impraticável fazê-lo”</b>.</p><p>O exemplo do resumo: controladora “A” fecha em <b>31 de dezembro</b> e a controlada “B”, em <b>31 de outubro</b>; “B” precisa elaborar informações adicionais com data de <b>31 de dezembro</b> — BP, DRE e DFC.</p><p class='fb-fonte'>Resumo 10 · <i>Data das Demonstrações Contábeis — B92</i></p>",
45:"<p>Errado no prazo. O <b>B93</b> fixa o limite em <b>DOIS MESES</b>: <b>“em qualquer caso, a diferença entre a data das demonstrações contábeis da controlada e a das demonstrações consolidadas não deve ser superior a dois meses”</b>. O esquema do resumo repete o número na caixa final.</p><p>Complete a regra: sendo impraticável, a controladora usa as <b>demonstrações mais recentes da controlada, ajustadas</b> para refletir transações e eventos significativos do intervalo, e a duração dos períodos e a diferença entre as datas devem ser <b>as mesmas de período para período</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Data das Demonstrações Contábeis — B93</i></p>",
46:"<p>Errado justamente na parte que a assertiva “salva”. O <b>art. 250 da Lei 6.404/76</b>, transcrito no resumo, manda excluir das consolidadas, no <b>inciso II</b>, <b>“os saldos de quaisquer contas entre as sociedades”</b> — eles não são mantidos.</p><p>O rol completo do artigo: <b>I</b> — as participações de uma sociedade em outra; <b>II</b> — os saldos de quaisquer contas entre as sociedades; <b>III</b> — as parcelas dos resultados do exercício, dos lucros ou prejuízos acumulados e do custo de estoques ou do ativo não circulante que corresponderem a resultados <b>ainda não realizados</b> de negócios entre as sociedades.</p><p class='fb-fonte'>Resumo 10 · <i>Consolidação segundo a Lei 6.404/76 — art. 250</i></p>",
47:"<p>Errado por uma palavra, e é a que o resumo mais destaca. O <b>inciso III do art. 250</b> fala de resultados <b>“ainda NÃO realizados”</b> de negócios entre as sociedades — não de resultados já realizados.</p><p>O material abre o tópico avisando: <b>“aqui vale a pena dedicarmos uma atenção especial ao que está previsto no artigo 250, pois as bancas exploram bastante o conceito de Lucro não realizado (Inciso III do art. 250)”</b>. O que já se realizou perante terceiros permanece; o que é <b>lucro interno do grupo</b> sai.</p><p class='fb-fonte'>Resumo 10 · <i>Consolidação segundo a Lei 6.404/76 — art. 250</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"10", nome:"CPC 36 — Demonstrações Consolidadas", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
