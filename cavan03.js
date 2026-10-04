/* Contabilidade Avançada — Módulo 03: CPC 46 — Mensuração do Valor Justo (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cavan03 = (function(){
"use strict";

var CARDS = [
  ["O que significa mensuração do valor justo?","<b>Mensurar</b> é medir, calcular, estimar. Mensurar o valor justo é <b>estimar o preço</b> pelo qual uma <b>transação não forçada</b> para a <b>venda do ativo</b> ou para a <b>transferência do passivo</b> ocorreria entre <b>participantes do mercado</b> na <b>data de mensuração</b>, sob <b>condições atuais de mercado</b>."],
  ["Quais são os três objetivos do CPC 46 (item 01)?","(a) <b>definir valor justo</b>; (b) estabelecer <b>em um único Pronunciamento</b> a <b>estrutura para a mensuração</b> do valor justo; e (c) estabelecer <b>divulgações</b> sobre mensurações do valor justo."],
  ["O valor justo é mensuração de que tipo?","É uma mensuração <b>baseada em mercado</b> — e <b>NÃO</b> uma mensuração <b>específica da entidade</b> (item 02)."],
  ["Valor justo é sempre igual a valor de mercado?","<b>Não.</b> O resumo é expresso: se não houver <b>mercado ativo</b> ou informações sobre transações recentes semelhantes, a empresa usa <b>outras técnicas</b> — <b>“em algumas situações o valor justo será diferente do valor de mercado”</b>."],
  ["Quando o preço de um ativo ou passivo idêntico não é observável, como deve ser a técnica de avaliação?","Ela deve <b>MAXIMIZAR o uso de dados observáveis relevantes</b> e <b>MINIMIZAR o uso de dados não observáveis</b> (item 03)."],
  ["Exemplo do resumo para preço não observável","A <b>mansão histórica</b>: sua <b>singularidade</b> impede achar transações recentes de vendas semelhantes, então se usa outra técnica — o <b>custo de reposição</b>, que considera os <b>custos de construção</b>."],
  ["A intenção da entidade importa na mensuração do valor justo?","<b>Não.</b> Quadro <b>ATENÇÃO!</b> do resumo: a intenção da entidade de <b>manter um ativo</b> ou de <b>liquidar um passivo</b> <b>não é relevante</b> ao mensurar o valor justo."],
  ["Com quais premissas o valor justo é mensurado?","Com as premissas que os <b>participantes do mercado</b> utilizariam ao <b>precificar</b> o ativo ou o passivo, <b>incluindo premissas sobre risco</b> (item 03)."],
  ["A que o CPC 46 NÃO se aplica (item 06)?","<b>(a)</b> pagamento baseado em ações do <b>CPC 10</b>; <b>(b)</b> arrendamentos do <b>CPC 06</b>; <b>(c)</b> mensurações <b>parecidas</b> com valor justo mas que <b>não são</b> valor justo — o <b>valor realizável líquido</b> do <b>CPC 16</b> (Estoques) e o <b>valor em uso</b> do <b>CPC 01</b>."],
  ["Qual a definição de valor justo do item 09?","O <b>preço que seria recebido pela venda de um ativo</b> ou que <b>seria pago pela transferência de um passivo</b> em uma <b>transação não forçada</b> entre <b>participantes do mercado</b> na <b>data de mensuração</b>."],
  ["Exemplo do resumo para a definição","O <b>edifício</b>: a empresa deve considerar o <b>preço que seria recebido</b> caso o edifício fosse <b>vendido no mercado</b>, em transação <b>não forçada</b> — esse é o valor justo dele para fins contábeis."],
  ["O que é uma transação não forçada?","A que <b>presume exposição ao mercado</b> por um <b>período antes da data de mensuração</b>, para permitir <b>atividades de marketing usuais e habituais</b>. Todas as partes concordam <b>voluntariamente</b>, <b>sem coerção, chantagem ou manipulação</b> — <b>não</b> é feita sob pressão."],
  ["Quais características do ativo ou passivo entram na mensuração (item 11)?","<b>(a)</b> a <b>condição</b> e a <b>localização</b> do ativo; e <b>(b)</b> as <b>restrições</b>, se houver, <b>para a venda ou o uso</b> do ativo — desde que os <b>participantes do mercado</b> também as considerem ao precificar."],
  ["Exemplo do resumo para as características","O <b>imóvel em área valorizada</b> da cidade: a mensuração leva em conta a <b>localização privilegiada</b> e a <b>demanda</b> da região. Num <b>passivo</b>, entram <b>taxas de juros</b>, <b>prazos de pagamento</b> e <b>risco associado</b>."],
  ["Onde se presume que ocorre a transação (item 16)?","<b>(a)</b> no <b>mercado principal</b> para o ativo ou passivo; ou <b>(b)</b> na <b>ausência de mercado principal</b>, no <b>mercado mais vantajoso</b>."],
  ["O que é mercado principal, na conta do resumo?","É onde ocorre o <b>MAIOR VOLUME de atividades</b> — não onde o preço é maior."],
  ["O que significa mercado mais vantajoso (apêndice “A”)?","O mercado que <b>MAXIMIZA o valor que seria recebido</b> para <b>vender o ativo</b>; ou que <b>MINIMIZA o valor que seria pago</b> para <b>transferir o passivo</b>."],
  ["Exemplo do resumo: entidade norte-americana, fábrica na China, 80% vendidos no Brasil. EUA R$50, Brasil R$60, China R$30, Inglaterra R$70. Qual o valor justo?","<b>R$60</b> — o <b>mercado principal</b> é o <b>Brasil</b>, onde ocorre o maior volume de atividades."],
  ["No mesmo exemplo, e se NÃO houvesse mercado principal?","O valor justo seria o do <b>mercado mais vantajoso</b>: <b>R$70</b>, o preço da <b>Inglaterra</b>."],
  ["O item 24 chama o valor justo de quê?","De <b>PREÇO DE SAÍDA</b>: preço recebido pela venda do ativo ou pago pela transferência do passivo, em <b>transação não forçada</b>, no <b>mercado principal (ou mais vantajoso)</b>, na <b>data de mensuração</b>, nas <b>condições atuais de mercado</b>."],
  ["O valor justo depende de o preço ser observável?","<b>Não</b> — o item 24 diz <b>“independentemente de esse preço ser diretamente observável ou estimado utilizando-se outra técnica de avaliação”</b>."],
  ["Que condições o item 61 impõe à escolha da técnica de avaliação?","Ser <b>apropriada nas circunstâncias</b> e haver <b>dados suficientes disponíveis</b>, <b>maximizando</b> dados <b>observáveis relevantes</b> e <b>minimizando</b> os <b>não observáveis</b>."],
  ["Quais são as três técnicas de avaliação do item 62?","<b>(i) abordagem de mercado</b>; <b>(ii) abordagem de custo</b>; e <b>(iii) abordagem de receita</b>. Os principais aspectos estão nos <b>itens B5 a B11</b>."],
  ["Abordagem de MERCADO — o que mensura?","<b>Preços e outras informações relevantes geradas por transações de mercado</b> envolvendo ativos e passivos <b>idênticos ou similares</b> (ex.: um negócio). <b>Inclui a precificação por matriz</b>."],
  ["Abordagem de CUSTO — o que mensura?","O <b>valor que seria exigido para substituir a capacidade de serviço</b> do ativo — ou seja, o <b>custo de substituição (ou reposição)</b>."],
  ["Abordagem de RECEITA — o que mensura?","<b>Converte valores futuros</b> (ex.: fluxos de caixa ou receitas e despesas) em um <b>valor único atual</b> — ou seja, <b>descontado</b>."],
  ["Exemplo do resumo para a abordagem de custo","A <b>máquina</b>: o valor justo é estimado pelo <b>custo necessário para substituir o ativo</b> — o <b>custo de substituição/reposição atual</b> (item <b>B8</b>), isto é, o custo de <b>adquirir uma máquina nova equivalente</b> na data de mensuração."],
  ["O que é precificação por matriz (item B7)?","<b>Técnica matemática</b> usada principalmente para avaliar alguns <b>instrumentos financeiros</b>, como <b>títulos de dívida</b>, <b>sem se basear exclusivamente</b> em preços cotados dos títulos específicos, mas na <b>relação dos títulos com outros títulos cotados de referência</b>. É consistente com a <b>abordagem de mercado</b>."],
  ["Exemplo do resumo para precificação por matriz","Os <b>títulos de dívida “A”, “B” e “C”</b>: para avaliar o título de uma empresa, considera-se o <b>preço de outros títulos de empresas comparáveis já cotados</b>, levando em conta <b>risco, prazo e liquidez</b>."],
  ["Para que serve a hierarquia do valor justo (item 72)?","Para <b>aumentar a consistência e a comparabilidade</b> nas mensurações do valor justo e nas <b>divulgações</b> correspondentes. Ela classifica em <b>três níveis</b> as <b>informações (inputs)</b> aplicadas nas técnicas de avaliação."],
  ["Qual nível tem prioridade mais alta e qual a mais baixa?","<b>Mais ALTA</b>: <b>Nível 1</b> — preços cotados (<b>não ajustados</b>) em <b>mercados ativos</b> para ativos ou passivos <b>idênticos</b>. <b>Mais BAIXA</b>: <b>Nível 3</b> — <b>dados não observáveis</b>."],
  ["Informações de Nível 1 — definição (item 76)","<b>Preços cotados (não ajustados)</b> em <b>mercados ativos</b> para ativos ou passivos <b>IDÊNTICOS</b> a que a entidade <b>possa ter acesso</b> na <b>data de mensuração</b>."],
  ["Por que o Nível 1 não se ajusta?","Porque o <b>preço cotado em mercado ativo</b> oferece a <b>evidência mais confiável</b> do valor justo e deve ser usado <b>sem ajuste</b> sempre que disponível (<b>item 77</b>) — só se ajusta em <b>algumas circunstâncias</b> (item 79). <b>Exemplo:</b> a <b>cotação de ações na bolsa</b>."],
  ["Informações de Nível 2 — definição (item 81)","Informações <b>observáveis</b> para o ativo ou passivo, <b>direta ou indiretamente</b>, <b>exceto</b> os <b>preços cotados incluídos no Nível 1</b>. Podem <b>requerer algum nível de ajuste</b>."],
  ["Que fontes o resumo dá para o Nível 2?","<b>Preços de transações similares em mercados ativos</b> · <b>dados de mercado menos líquidos</b> · <b>informações sobre preços de insumos e custos de produção</b>, entre outros."],
  ["Exemplo do resumo de Nível 2","A <b>Unidade Geradora de Caixa</b>: um <b>múltiplo de rendimentos</b> (ou medida de desempenho similar) obtido de <b>dados de mercado observáveis</b> — múltiplos de preços em <b>transações observadas envolvendo negócios comparáveis</b> (item <b>B35, “h”</b>)."],
  ["Informações de Nível 3 — definição (item 86)","<b>Dados NÃO observáveis</b> para o ativo ou passivo. São <b>menos confiáveis</b>, baseadas em <b>suposições e modelos</b> que variam de empresa para empresa."],
  ["Exemplo do resumo de Nível 3","Também a <b>Unidade Geradora de Caixa</b>: a <b>previsão financeira dos fluxos de caixa futuros</b> (ou o resultado do período) usando os <b>dados próprios da entidade</b>, salvo informação disponível de que os participantes do mercado usariam premissas diferentes (item <b>B36, “e”</b>)."],
  ["O que a mensuração do valor justo requer que a entidade determine (item B2)?","<b>(a)</b> o <b>ativo ou passivo específico</b> objeto da mensuração (consistente com sua <b>unidade de contabilização</b>); <b>(b)</b> para <b>ativo não financeiro</b>, a <b>premissa de avaliação apropriada</b> (consistente com seu <b>melhor uso possível</b>); <b>(c)</b> o <b>mercado principal (ou mais vantajoso)</b>; <b>(d)</b> as <b>técnicas de avaliação apropriadas</b>."],
  ["Na alínea “d”, o que a entidade tem de considerar?","A <b>disponibilidade de dados</b> com os quais se possam desenvolver informações que representem as <b>premissas dos participantes do mercado</b>, e o <b>nível da hierarquia</b> de valor justo no qual se <b>classificam os dados</b>."],
  ["Exemplo da alínea “a” do B2","O <b>portfólio</b> com derivativos, debêntures e títulos públicos: a entidade <b>não pode</b> mensurar o valor justo do <b>portfólio como um todo</b> — deve selecionar <b>individualmente cada ativo</b> como objeto da mensuração."],
  ["Exemplo da alínea “b” do B2","O <b>terreno</b>: o valor justo considera o <b>melhor uso possível</b>. Com localização estratégica, valeria <b>mais</b> como base para um <b>edifício comercial</b> do que como <b>terreno vago</b>."],
  ["Exemplo da alínea “c” do B2","A <b>entidade francesa</b> com fábrica na China e <b>80% vendidos no Brasil</b>: França R$70, Brasil R$30, China R$40. O mercado principal é o <b>Brasil</b> (maior volume), então o valor justo é <b>R$30</b> — só na <b>ausência</b> de mercado principal se usaria o mais vantajoso."],
  ["Lei 6.404/76, art. 183, §1º — as quatro classes","<b>Matérias-primas e bens em almoxarifado:</b> preço pelo qual possam ser <b>repostos, mediante compra no mercado</b>. <b>Bens ou direitos destinados à venda:</b> <b>preço líquido de realização</b> mediante venda no mercado, <b>deduzidos impostos e demais despesas necessárias para a venda, e a margem de lucro</b>. <b>Investimentos:</b> valor líquido pelo qual possam ser <b>alienados a terceiros</b>. <b>Instrumentos financeiros:</b> valor obtido em <b>mercado ativo</b>, em <b>transação não compulsória entre partes independentes</b>."],
  ["Instrumento financeiro sem mercado ativo — as três saídas do ATENÇÃO!","<b>1)</b> valor obtido em mercado ativo com a negociação de <b>outro instrumento financeiro de natureza, prazo e risco similares</b>; <b>2)</b> <b>valor presente líquido dos fluxos de caixa futuros</b> para instrumentos de natureza, prazo e risco similares; ou <b>3)</b> valor obtido por <b>modelos matemático-estatísticos de precificação</b>."]
];

var QS = [
  ["Mensurar o valor justo significa estimar o preço pelo qual uma transação não forçada para a venda do ativo ou para a transferência do passivo ocorreria entre participantes do mercado na data de mensuração, sob condições atuais de mercado.","C","CEBRASPE","Conceito de mensuração do valor justo."],
  ["São objetivos do CPC 46 definir valor justo, estabelecer em um único pronunciamento a estrutura para a mensuração do valor justo e estabelecer divulgações sobre mensurações do valor justo.","C","CPC 46, item 01","As três alíneas do item 01."],
  ["O valor justo é uma mensuração específica da entidade, e não uma mensuração baseada em mercado.","E","FCC","Inverteu: é mensuração <b>baseada em mercado</b>."],
  ["Como o valor justo reflete as condições atuais do mercado, ele coincide necessariamente com o valor de mercado do ativo.","E","FGV","O resumo admite que <b>em algumas situações o valor justo será diferente do valor de mercado</b>."],
  ["Quando o preço para um ativo ou passivo idêntico não é observável, a entidade deve utilizar técnica de avaliação que maximize o uso de dados não observáveis e minimize o uso de dados observáveis relevantes.","E","VUNESP","Inverteu: <b>maximiza observáveis</b> e <b>minimiza não observáveis</b>."],
  ["Na mensuração do valor justo de uma mansão histórica, para a qual não se encontram transações recentes de vendas semelhantes, a entidade pode utilizar o método do custo de reposição.","C","CEBRASPE","É o exemplo do resumo."],
  ["A intenção da entidade de manter um ativo ou de liquidar um passivo é relevante ao mensurar o valor justo.","E","FCC","Quadro ATENÇÃO!: <b>não é relevante</b>."],
  ["O valor justo é mensurado utilizando-se as premissas que os participantes do mercado utilizariam ao precificar o ativo ou o passivo, incluindo premissas sobre risco.","C","FGV","Item 03, segunda parte."],
  ["Os requisitos de mensuração e divulgação do CPC 46 aplicam-se às transações de pagamento baseadas em ações dentro do alcance do CPC 10.","E","VUNESP","Estão <b>excluídas</b> pelo item 06, alínea (a)."],
  ["As transações de arrendamento dentro do alcance do CPC 06 estão fora dos requisitos de mensuração e divulgação do CPC 46.","C","CEBRASPE","Item 06, alínea (b)."],
  ["O valor realizável líquido de que trata o CPC 16 (Estoques) e o valor em uso de que trata o CPC 01 são mensurações de valor justo sujeitas ao CPC 46.","E","FCC","São mensurações <b>parecidas</b> com valor justo, mas <b>não representam</b> valor justo — item 06, alínea (c)."],
  ["Valor justo é o preço que seria recebido pela venda de um ativo ou que seria pago pela transferência de um passivo em uma transação não forçada entre participantes do mercado na data de mensuração.","C","CPC 46, item 09","Literalidade da definição."],
  ["Valor justo é o preço que seria pago pela aquisição de um ativo ou recebido pela assunção de um passivo em transação não forçada entre participantes do mercado.","E","FGV","Trocou os polos: é <b>recebido pela venda</b> do ativo e <b>pago pela transferência</b> do passivo — preço de <b>saída</b>."],
  ["A transação não forçada presume exposição ao mercado por um período antes da data de mensuração, para permitir atividades de marketing usuais e habituais.","C","VUNESP","Conceito do resumo."],
  ["Transação não forçada é aquela realizada sob pressão de liquidação imediata, desde que haja concordância das partes.","E","CEBRASPE","Ela <b>não é realizada sob pressão</b>: há total consentimento e acordo mútuo."],
  ["Ao mensurar o valor justo, a entidade deve considerar as características do ativo ou passivo, como a condição e a localização do ativo e as restrições para a sua venda ou uso, se os participantes do mercado as levarem em conta ao precificar.","C","CPC 46, item 11","As duas alíneas do item 11."],
  ["As características do ativo entram na mensuração do valor justo sempre que a própria entidade as considerar relevantes, ainda que os participantes do mercado não as levem em consideração.","E","FCC","O filtro é o dos <b>participantes do mercado</b>, não o da entidade."],
  ["A mensuração do valor justo destina-se a um ativo ou passivo em particular.","C","FGV","Primeira frase do item 11."],
  ["A mensuração do valor justo presume que a transação para a venda do ativo ou transferência do passivo ocorre no mercado principal ou, na ausência de mercado principal, no mercado mais vantajoso.","C","CPC 46, item 16","As duas alíneas do item 16."],
  ["Havendo mercado principal para o ativo, a entidade deve mensurar o valor justo pelo mercado mais vantajoso.","E","VUNESP","O mais vantajoso só entra na <b>ausência</b> de mercado principal."],
  ["Mercado mais vantajoso é o que maximiza o valor que seria recebido para vender o ativo ou minimiza o valor que seria pago para transferir o passivo.","C","CEBRASPE","Apêndice A."],
  ["Mercado mais vantajoso é o que minimiza o valor que seria recebido para vender o ativo.","E","FCC","É o que <b>maximiza</b> o valor recebido na venda do ativo."],
  ["Entidade norte-americana com principal fábrica na China vende 80% dos produtos no Brasil; o preço de venda seria R$50 nos Estados Unidos, R$60 no Brasil, R$30 na China e R$70 na Inglaterra. O valor justo será contabilizado por R$60.","C","FGV","Mercado principal é o Brasil, onde há o maior volume."],
  ["No mesmo exemplo, o mercado principal é a Inglaterra, por ser o de maior preço.","E","VUNESP","Mercado principal é o de <b>maior volume de atividades</b>, não o de maior preço."],
  ["No mesmo exemplo, na ausência de mercado principal o valor justo seria contabilizado por R$70.","C","CEBRASPE","Mercado mais vantajoso — preço na Inglaterra."],
  ["Valor justo é o preço que seria recebido pela venda de um ativo ou pago pela transferência de um passivo no mercado principal, nas condições atuais de mercado, ou seja, um preço de saída.","C","CPC 46, item 24","O item 24 qualifica o valor justo como preço de saída."],
  ["O valor justo só pode ser mensurado quando o preço for diretamente observável no mercado.","E","FCC","O item 24 diz <b>independentemente</b> de o preço ser diretamente observável <b>ou estimado</b>."],
  ["Três técnicas de avaliação amplamente utilizadas para mensurar o valor justo são a abordagem de mercado, a abordagem de custo e a abordagem de receita.","C","CPC 46, item 62","Itens B5 a B11 resumem os aspectos principais."],
  ["A abordagem de custo é a técnica que mensura preços e outras informações relevantes geradas por transações de mercado envolvendo ativos e passivos idênticos ou similares.","E","FGV","Essa é a abordagem de <b>mercado</b>."],
  ["A abordagem de receita converte valores futuros, como fluxos de caixa ou receitas e despesas, em um valor único atual, descontado.","C","VUNESP","Quadro das três técnicas."],
  ["A abordagem de custo mensura o valor que seria exigido para substituir a capacidade de serviço do ativo, ou seja, o custo de substituição ou reposição.","C","CEBRASPE","Quadro das três técnicas e item B8."],
  ["A precificação por matriz é técnica de avaliação consistente com a abordagem de receita.","E","FCC","É consistente com a abordagem de <b>mercado</b> — item B7."],
  ["A precificação por matriz avalia títulos de dívida baseando-se exclusivamente nos preços cotados desses títulos específicos.","E","FGV","Justamente o contrário: baseia-se na <b>relação com outros títulos cotados de referência</b>."],
  ["A hierarquia de valor justo classifica em três níveis as informações aplicadas nas técnicas de avaliação utilizadas na mensuração do valor justo.","C","CPC 46, item 72","Níveis 1, 2 e 3."],
  ["A hierarquia de valor justo dá a mais alta prioridade a dados não observáveis e a mais baixa prioridade a preços cotados em mercados ativos para ativos ou passivos idênticos.","E","CEBRASPE","Inverteu os extremos: prioridade máxima é do <b>Nível 1</b>."],
  ["A hierarquia de valor justo foi estabelecida para aumentar a consistência e a comparabilidade nas mensurações do valor justo e nas divulgações correspondentes.","C","FCC","Finalidade declarada no item 72."],
  ["Informações de Nível 1 são preços cotados, não ajustados, em mercados ativos para ativos ou passivos idênticos a que a entidade possa ter acesso na data de mensuração.","C","CPC 46, item 76","Literalidade do item 76."],
  ["Informações de Nível 1 são os preços cotados em mercados ativos para ativos ou passivos similares.","E","FGV","O Nível 1 exige ativos ou passivos <b>idênticos</b>."],
  ["O preço cotado em mercado ativo oferece a evidência mais confiável do valor justo e deve ser utilizado sem ajuste sempre que disponível.","C","VUNESP","Item 77."],
  ["Informações de Nível 2 são informações observáveis para o ativo ou passivo, direta ou indiretamente, exceto os preços cotados incluídos no Nível 1.","C","CPC 46, item 81","Literalidade do item 81."],
  ["As informações de Nível 2 nunca requerem qualquer ajuste para serem utilizadas na mensuração do valor justo.","E","CEBRASPE","O resumo diz que elas <b>podem requerer algum nível de ajuste</b>."],
  ["Informações de Nível 3 são dados não observáveis para o ativo ou passivo, considerados menos confiáveis.","C","FCC","Item 86 e comentário do resumo."],
  ["A previsão financeira dos fluxos de caixa futuros elaborada com os dados próprios da entidade é exemplo de informação de Nível 2.","E","FGV","É exemplo de <b>Nível 3</b> — item B36, alínea “e”."],
  ["Preços de transações similares em mercados ativos e dados de mercado menos líquidos são exemplos de fontes de informações de Nível 2.","C","VUNESP","Lista do resumo para o Nível 2."],
  ["A mensuração do valor justo requer que a entidade determine o ativo ou passivo específico objeto da mensuração, de forma consistente com a sua unidade de contabilização.","C","CPC 46, item B2","Alínea (a) do item B2."],
  ["Para um ativo não financeiro, a premissa de avaliação apropriada para a mensuração é determinada de forma consistente com o seu valor de liquidação forçada.","E","VUNESP","É consistente com o seu <b>melhor uso possível</b>."],
  ["Ao mensurar o valor justo de um portfólio composto por derivativos, debêntures e títulos públicos, a entidade deve mensurar o portfólio como um todo, e não cada ativo separadamente.","E","CEBRASPE","O exemplo da alínea (a) diz o oposto: cada ativo <b>individualmente</b>."],
  ["Dos instrumentos financeiros, considera-se valor justo o preço pelo qual possam ser repostos, mediante compra no mercado.","E","Lei 6.404, art. 183, §1º","Esse é o critério das <b>matérias-primas e bens em almoxarifado</b>."],
  ["Dos bens ou direitos destinados à venda, considera-se valor justo o preço líquido de realização mediante venda no mercado, deduzidos os impostos e demais despesas necessárias para a venda, e a margem de lucro.","C","Lei 6.404, art. 183, §1º","Segunda linha da tabela."],
  ["Na ausência de mercado ativo para determinado instrumento financeiro, considera-se valor justo, entre outras hipóteses, o valor presente líquido dos fluxos de caixa futuros para instrumentos financeiros de natureza, prazo e risco similares.","C","FCC","Segunda hipótese do quadro ATENÇÃO!"]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("O que é valor justo, para que serve o CPC 46 e onde ele não entra",
      '<div class="box"><span class="bl">Mensurar o valor justo</span>'+
      '<p><b>Mensurar</b> é medir, calcular, estimar. Mensurar o valor justo é <b>estimar o preço</b> pelo qual uma <b>transação não forçada</b> para a <b>venda do ativo</b> ou a <b>transferência do passivo</b> ocorreria <b>entre participantes do mercado</b> na <b>data de mensuração</b>, sob <b>condições atuais de mercado</b>.</p>'+
      '<p><b>Objetivo do CPC 46 (item 01):</b> (a) <b>definir</b> valor justo; (b) estabelecer <b>em um único Pronunciamento</b> a <b>estrutura</b> para a mensuração; (c) estabelecer <b>divulgações</b> sobre as mensurações.</p></div>'+
      '<div class="box tip"><span class="bl">Baseada em mercado — mas não é valor de mercado</span>'+
      '<p>O valor justo é mensuração <b>baseada em mercado</b>, e <b>não</b> mensuração <b>específica da entidade</b> (item 02). Reflete oferta e demanda, riscos e expectativas futuras.</p>'+
      '<p>Porém, sem <b>mercado ativo</b> ou informações sobre transações recentes semelhantes, a empresa usa <b>outras técnicas</b>. Daí a frase do resumo: <b>em algumas situações o valor justo será diferente do valor de mercado</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Quando o preço não é observável (item 03)</span>'+
      '<p>A técnica escolhida deve <b>MAXIMIZAR</b> o uso de <b>dados observáveis relevantes</b> e <b>MINIMIZAR</b> o uso de <b>dados não observáveis</b>.</p>'+
      '<p><b>Exemplo:</b> a <b>mansão histórica</b>. Sua singularidade impede comparação com vendas recentes semelhantes, então se recorre ao <b>custo de reposição</b>, que olha os <b>custos de construção</b>.</p>'+
      '<p><b>ATENÇÃO!</b> A <b>intenção da entidade</b> de <b>manter um ativo</b> ou de <b>liquidar um passivo</b> <b>NÃO é relevante</b> ao mensurar o valor justo. O que vale são as <b>premissas dos participantes do mercado</b>, <b>inclusive sobre risco</b>.</p></div>'+
      '<div class="box"><span class="bl">Alcance — o que fica fora (item 06)</span>'+
      '<ul><li>pagamento <b>baseado em ações</b> do <b>CPC 10</b>;</li>'+
      '<li><b>arrendamentos</b> do <b>CPC 06</b>;</li>'+
      '<li>mensurações <b>parecidas</b> com valor justo que <b>não são</b> valor justo: o <b>valor realizável líquido</b> do <b>CPC 16</b> (Estoques) e o <b>valor em uso</b> do <b>CPC 01</b> (Redução ao Valor Recuperável).</li></ul></div>'+
      '<div class="box"><span class="bl">Definição (item 09) e transação não forçada</span>'+
      '<p><b>Valor justo</b> é o preço que <b>seria RECEBIDO pela VENDA de um ativo</b> ou que <b>seria PAGO pela TRANSFERÊNCIA de um passivo</b>, em <b>transação não forçada</b> entre <b>participantes do mercado</b> na <b>data de mensuração</b>.</p>'+
      '<p><b>Exemplo:</b> o <b>edifício</b> no ativo — vale o <b>preço que seria recebido</b> se fosse vendido no mercado, em transação não forçada.</p>'+
      '<p><b>Transação não forçada:</b> presume <b>exposição ao mercado</b> por um <b>período antes da data de mensuração</b>, para permitir <b>atividades de marketing usuais e habituais</b>. Todas as partes concordam <b>voluntariamente</b>, <b>sem coerção, chantagem ou manipulação</b> — <b>não</b> se realiza sob pressão.</p></div>'+
      '<div class="box"><span class="bl">Ativo ou passivo em particular (item 11)</span>'+
      '<p>A mensuração destina-se a um <b>ativo ou passivo em particular</b>. Entram as <b>características</b> dele, <b>se os participantes do mercado</b> também as considerarem ao precificar: <b>(a)</b> a <b>condição</b> e a <b>localização</b> do ativo; <b>(b)</b> as <b>restrições</b>, se houver, <b>para a venda ou o uso</b>.</p>'+
      '<p><b>Exemplos do resumo:</b> o <b>imóvel em área valorizada</b> (localização privilegiada e demanda da região) e o <b>passivo financeiro</b> (taxas de juros, prazos de pagamento e risco associado).</p></div>')
  ],
  V2:[
    sl("Onde a transação ocorre, o preço de saída e as três técnicas",
      '<div class="box"><span class="bl">Transação — item 16</span>'+
      '<p>Presume-se que a venda do ativo ou a transferência do passivo ocorre:</p>'+
      '<ul><li><b>(a)</b> no <b>MERCADO PRINCIPAL</b> para o ativo ou passivo; ou</li>'+
      '<li><b>(b)</b> na <b>AUSÊNCIA de mercado principal</b>, no <b>MERCADO MAIS VANTAJOSO</b>.</li></ul>'+
      '<p><b>Mercado principal</b> é onde ocorre o <b>MAIOR VOLUME de atividades</b>.</p>'+
      '<p><b>Mercado mais vantajoso</b> (apêndice “A”): <b>MAXIMIZA</b> o valor que seria <b>recebido para vender o ativo</b>; ou <b>MINIMIZA</b> o valor que seria <b>pago para transferir o passivo</b>.</p></div>'+
      '<div class="box trap"><span class="bl">O exemplo numérico que a banca adora</span>'+
      '<p>Entidade <b>norte-americana</b>, principal fábrica na <b>China</b>, <b>80% dos produtos vendidos no Brasil</b>. Preços de venda: <b>EUA R$50</b> · <b>Brasil R$60</b> · <b>China R$30</b> · <b>Inglaterra R$70</b>.</p>'+
      '<p>O parâmetro é o <b>mercado principal</b> — o do <b>maior volume de atividades</b>, isto é, o <b>Brasil</b>. Logo, <b>valor justo = R$60</b>.</p>'+
      '<p class="mn"><em>Na ausência de mercado principal → mais vantajoso → R$70 (Inglaterra)</em></p>'+
      '<p>Não caia no maior preço: <b>a Inglaterra não é o mercado principal</b>, é o mais vantajoso.</p></div>'+
      '<div class="box tip"><span class="bl">Preço de saída — item 24</span>'+
      '<p>Valor justo é o preço <b>recebido pela venda</b> do ativo ou <b>pago pela transferência</b> do passivo, em <b>transação não forçada</b>, no <b>mercado principal (ou mais vantajoso)</b>, na <b>data de mensuração</b>, nas <b>condições atuais de mercado</b> — ou seja, um <b>PREÇO DE SAÍDA</b>.</p>'+
      '<p>E isso <b>independentemente</b> de o preço ser <b>diretamente observável</b> ou <b>estimado</b> por outra técnica de avaliação.</p></div>'+
      '<div class="box"><span class="bl">Técnicas de avaliação — itens 61 e 62</span>'+
      '<p>A técnica deve ser <b>apropriada nas circunstâncias</b> e haver <b>dados suficientes disponíveis</b>, sempre <b>maximizando</b> dados observáveis relevantes e <b>minimizando</b> não observáveis.</p>'+
      '<p>As <b>três</b> amplamente utilizadas (aspectos nos <b>itens B5 a B11</b>):</p>'+
      '<ul><li><b>Abordagem de MERCADO:</b> mensura <b>preços e outras informações relevantes geradas por transações de mercado</b> envolvendo ativos e passivos <b>idênticos ou similares</b> (ex.: um negócio). <b>Inclui a precificação por matriz</b>.</li>'+
      '<li><b>Abordagem de CUSTO:</b> mensura o <b>valor exigido para substituir a capacidade de serviço</b> do ativo — o <b>custo de substituição (ou reposição)</b>.</li>'+
      '<li><b>Abordagem de RECEITA:</b> <b>converte valores futuros</b> (fluxos de caixa, receitas e despesas) em um <b>valor único atual</b>, <b>descontado</b>.</li></ul>'+
      '<p><b>Exemplo:</b> a <b>máquina</b> mensurada pela <b>abordagem de custo</b> — o custo de <b>adquirir uma máquina nova equivalente</b> na data de mensuração (item <b>B8</b>).</p></div>'+
      '<div class="box trap"><span class="bl">Precificação por matriz — item B7</span>'+
      '<p><b>Técnica matemática</b> usada principalmente para <b>instrumentos financeiros</b> como <b>títulos de dívida</b>. Ela <b>NÃO se baseia exclusivamente</b> nos preços cotados dos títulos específicos: baseia-se na <b>relação dos títulos com outros títulos cotados de referência</b>.</p>'+
      '<p><b>Exemplo:</b> para avaliar o título de dívida de uma empresa, considera-se o <b>preço de títulos de empresas comparáveis já cotados</b>, pesando <b>risco, prazo e liquidez</b>. É o esquema dos <b>títulos “A”, “B” e “C”</b>.</p>'+
      '<p>Guarde o vínculo: <b>precificação por matriz → abordagem de MERCADO</b>.</p></div>')
  ],
  V3:[
    sl("Hierarquia do valor justo, o roteiro do B2 e a Lei 6.404/76",
      '<div class="box"><span class="bl">Hierarquia — item 72</span>'+
      '<p>Para aumentar a <b>consistência</b> e a <b>comparabilidade</b> nas mensurações e nas <b>divulgações</b>, o CPC 46 classifica em <b>três níveis</b> as <b>informações (inputs)</b> aplicadas nas técnicas de avaliação.</p>'+
      '<p><b>Prioridade mais ALTA</b> → <b>Nível 1</b>: preços cotados (<b>não ajustados</b>) em <b>mercados ativos</b> para ativos ou passivos <b>IDÊNTICOS</b>. <b>Prioridade mais BAIXA</b> → <b>Nível 3</b>: <b>dados não observáveis</b>.</p></div>'+
      '<div class="box"><span class="bl">Os três níveis, um por um</span>'+
      '<div class="tree">'+
      '<div class="leaf"><b>Nível 1 (item 76):</b> <b>preços cotados não ajustados</b> em <b>mercados ativos</b> para ativos ou passivos <b>idênticos</b> a que a entidade <b>possa ter acesso</b> na data de mensuração. É a <b>evidência mais confiável</b> e vai <b>sem ajuste</b> sempre que disponível (item 77); só se ajusta em <b>algumas circunstâncias</b> (item 79). <b>Exemplo:</b> a <b>cotação de ações na bolsa</b>.</div>'+
      '<div class="leaf"><b>Nível 2 (item 81):</b> informações <b>observáveis</b> para o ativo ou passivo, <b>direta ou indiretamente</b>, <b>exceto</b> os preços cotados do Nível 1. <b>Podem requerer algum ajuste</b>. Fontes: <b>preços de transações similares em mercados ativos</b>, <b>dados de mercado menos líquidos</b>, <b>preços de insumos e custos de produção</b>. <b>Exemplo:</b> na <b>UGC</b>, o <b>múltiplo de rendimentos</b> obtido de <b>negócios comparáveis</b> (B35, “h”).</div>'+
      '<div class="leaf"><b>Nível 3 (item 86):</b> <b>dados NÃO observáveis</b>, <b>menos confiáveis</b>, apoiados em <b>suposições e modelos</b> que variam de empresa para empresa. <b>Exemplo:</b> na <b>UGC</b>, a <b>previsão de fluxos de caixa futuros</b> com os <b>dados próprios da entidade</b> (B36, “e”).</div>'+
      '</div></div>'+
      '<div class="box tip"><span class="bl">O roteiro do item B2</span>'+
      '<p>A mensuração do valor justo requer que a entidade determine <b>todos</b> estes itens:</p>'+
      '<ul><li><b>(a)</b> o <b>ativo ou passivo específico</b> objeto da mensuração, consistente com sua <b>unidade de contabilização</b> — no <b>portfólio</b> de derivativos, debêntures e títulos públicos, mensura-se <b>cada ativo separadamente</b>, nunca o conjunto;</li>'+
      '<li><b>(b)</b> para <b>ativo não financeiro</b>, a <b>premissa de avaliação apropriada</b>, consistente com o seu <b>MELHOR USO POSSÍVEL</b> — o <b>terreno</b> com localização estratégica vale mais como base de um <b>edifício comercial</b> do que como <b>terreno vago</b>;</li>'+
      '<li><b>(c)</b> o <b>mercado principal (ou mais vantajoso)</b> — a <b>entidade francesa</b> com fábrica na China e <b>80% vendidos no Brasil</b>: França R$70, Brasil R$30, China R$40 → mercado principal é o <b>Brasil</b>, então o valor justo é <b>R$30</b>;</li>'+
      '<li><b>(d)</b> as <b>técnicas de avaliação apropriadas</b>, considerando a <b>disponibilidade de dados</b> e o <b>nível da hierarquia</b> em que os dados se classificam.</li></ul></div>'+
      '<div class="box"><span class="bl">Valor justo na Lei nº 6.404/76 — art. 183, § 1º</span>'+
      '<p><b>Matérias-primas e bens em almoxarifado:</b> o preço pelo qual possam ser <b>REPOSTOS, mediante compra no mercado</b>.</p>'+
      '<p><b>Bens ou direitos destinados à venda:</b> o <b>preço líquido de realização</b> mediante venda no mercado, <b>deduzidos os impostos e demais despesas necessárias para a venda, e a margem de lucro</b>.</p>'+
      '<p><b>Investimentos:</b> o <b>valor líquido</b> pelo qual possam ser <b>alienados a terceiros</b>.</p>'+
      '<p><b>Instrumentos financeiros:</b> o valor obtido em <b>mercado ativo</b>, decorrente de <b>transação não compulsória realizada entre partes independentes</b>.</p></div>'+
      '<div class="box trap"><span class="bl">ATENÇÃO! Instrumento financeiro sem mercado ativo</span>'+
      '<p>Considera-se valor justo:</p>'+
      '<ol><li>o valor obtido em mercado ativo com a negociação de <b>outro instrumento financeiro de natureza, prazo e risco similares</b>;</li>'+
      '<li>o <b>valor presente líquido dos fluxos de caixa futuros</b> para instrumentos financeiros de <b>natureza, prazo e risco similares</b>; ou</li>'+
      '<li>o valor obtido por <b>modelos matemático-estatísticos de precificação</b> de instrumentos financeiros.</li></ol></div>')
  ]
};

var EX = {
S1:{t:"multi", instr:"Marque os objetivos do CPC 46 (item 01)",
  options:["Definir valor justo",
           "Estabelecer em um único pronunciamento a estrutura para a mensuração do valor justo",
           "Estabelecer divulgações sobre mensurações do valor justo",
           "Fixar as alíquotas de tributos sobre a mais-valia",
           "Definir a vida útil dos ativos imobilizados"],
  answers:[0,1,2],
  why:"As três alíneas do item 01 — definir, estruturar em um único pronunciamento e divulgar."},

S2:{t:"gap", instr:"Complete a natureza da mensuração",
  before:"O valor justo é uma mensuração baseada em ",
  after:", e não uma mensuração específica da entidade.",
  options:["mercado","custo histórico","valor em uso"], answer:0,
  why:"Item 02. Por isso a intenção da entidade não interfere na mensuração."},

S3:{t:"gap", instr:"Complete o item 03",
  before:"Quando o preço para um ativo ou passivo idêntico não é observável, a entidade utiliza técnica de avaliação que ",
  after:" o uso de dados observáveis relevantes.",
  options:["maximiza","minimiza","ignora"], answer:0,
  why:"Maximiza observáveis relevantes e minimiza não observáveis — nessa ordem."},

S4:{t:"mc", instr:"A intenção da entidade de manter o ativo ou de liquidar o passivo, ao mensurar o valor justo:",
  options:["Não é relevante","É relevante e prevalece sobre as premissas de mercado",
           "É relevante apenas para ativos não financeiros",
           "É relevante apenas quando não há mercado ativo"],
  answer:0,
  why:"Quadro ATENÇÃO! do resumo. Valem as premissas dos participantes do mercado, inclusive sobre risco."},

S5:{t:"sort", instr:"Está dentro ou fora do alcance do CPC 46?",
  buckets:["Fora do alcance","Dentro do alcance"],
  items:[["Pagamento baseado em ações do CPC 10",0],
         ["Transações de arrendamento do CPC 06",0],
         ["Valor realizável líquido do CPC 16 (Estoques)",0],
         ["Valor em uso do CPC 01 (Redução ao Valor Recuperável)",0],
         ["Valor justo de um edifício mantido no ativo",1],
         ["Valor justo de investimento em ações cotadas em bolsa",1]],
  why:"Item 06. As três primeiras exclusões são expressas; VRL e valor em uso apenas se parecem com valor justo."},

S6:{t:"wordbank", instr:"Monte a definição de valor justo do item 09",
  target:["preço","que","seria","recebido","pela","venda","de","um","ativo","ou","pago","pela","transferência","de","um","passivo"],
  extra:["aquisição","assunção","forçada"],
  why:"É um preço de SAÍDA: recebido na venda do ativo, pago na transferência do passivo."},

S7:{t:"mc", instr:"O que caracteriza uma transação não forçada?",
  options:["Presume exposição ao mercado por um período antes da data de mensuração, para permitir atividades de marketing usuais e habituais",
           "É realizada sob pressão de liquidação imediata",
           "Ocorre sempre entre partes relacionadas",
           "Dispensa o consentimento de uma das partes"],
  answer:0,
  why:"Todas as partes concordam voluntariamente, sem coerção, chantagem ou manipulação."},

S8:{t:"multi", instr:"Marque as características do ativo que o item 11 manda considerar",
  options:["A condição do ativo","A localização do ativo",
           "As restrições para a venda ou o uso do ativo",
           "A intenção da entidade de manter o ativo",
           "O custo histórico de aquisição do ativo"],
  answers:[0,1,2],
  why:"E somente se os participantes do mercado também as considerarem ao precificar."},

S9:{t:"mc", instr:"Entidade norte-americana, fábrica principal na China, 80% dos produtos vendidos no Brasil. Preço de venda: EUA R$50, Brasil R$60, China R$30, Inglaterra R$70. Qual o valor justo?",
  options:["R$60, o preço no Brasil","R$70, o preço na Inglaterra",
           "R$50, o preço nos Estados Unidos","R$30, o preço na China"],
  answer:0,
  why:"O parâmetro é o mercado principal — o de maior volume de atividades, que é o Brasil."},

S10:{t:"mc", instr:"No mesmo exemplo, na AUSÊNCIA de mercado principal, qual seria o valor justo?",
  options:["R$70, o preço na Inglaterra","R$60, o preço no Brasil",
           "R$30, o preço na China","A média dos quatro preços"],
  answer:0,
  why:"Sem mercado principal, vale o mercado mais vantajoso, que maximiza o valor recebido na venda."},

S11:{t:"gap", instr:"Complete o conceito do apêndice “A”",
  before:"Mercado mais vantajoso é o que ",
  after:" o valor que seria recebido para vender o ativo.",
  options:["maximiza","minimiza","estabiliza"], answer:0,
  why:"E, no passivo, o que MINIMIZA o valor que seria pago para transferi-lo."},

S12:{t:"match", instr:"Correlacione cada técnica de avaliação ao que ela mensura",
  pairs:[["Abordagem de mercado","Preços e informações relevantes geradas por transações com ativos e passivos idênticos ou similares"],
         ["Abordagem de custo","Valor exigido para substituir a capacidade de serviço do ativo — custo de substituição"],
         ["Abordagem de receita","Converte valores futuros em um valor único atual, descontado"]],
  why:"Item 62, com os aspectos detalhados nos itens B5 a B11."},

S13:{t:"mc", instr:"Sobre a precificação por matriz (item B7), é correto afirmar:",
  options:["É técnica consistente com a abordagem de mercado e baseia-se na relação dos títulos com outros títulos cotados de referência",
           "É técnica consistente com a abordagem de receita e desconta fluxos de caixa futuros",
           "Baseia-se exclusivamente nos preços cotados dos títulos específicos avaliados",
           "É técnica consistente com a abordagem de custo e apura o custo de reposição do título"],
  answer:0,
  why:"Técnica matemática usada principalmente para títulos de dívida, sem se basear só nos preços do próprio título."},

S14:{t:"sort", instr:"Classifique cada informação no nível da hierarquia",
  buckets:["Nível 1","Nível 2","Nível 3"],
  items:[["Preços cotados não ajustados em mercados ativos para ativos idênticos",0],
         ["Cotação de ações de uma empresa na bolsa de valores",0],
         ["Preços de transações similares em mercados ativos",1],
         ["Dados de mercado menos líquidos",1],
         ["Múltiplo de rendimentos obtido de negócios comparáveis",1],
         ["Dados não observáveis para o ativo ou passivo",2],
         ["Previsão de fluxos de caixa futuros com dados próprios da entidade",2]],
  why:"Itens 76, 81 e 86. Nível 1 exige ativos IDÊNTICOS; o Nível 2 pode requerer ajuste."},

S15:{t:"match", instr:"Correlacione cada nível ao seu exemplo no resumo",
  pairs:[["Nível 1","Cotação de ações na bolsa de valores"],
         ["Nível 2","Múltiplo de rendimentos da UGC obtido de dados de mercado observáveis (B35, “h”)"],
         ["Nível 3","Previsão de fluxos de caixa futuros da UGC com dados próprios da entidade (B36, “e”)"]],
  why:"A mesma Unidade Geradora de Caixa ilustra o Nível 2 e o Nível 3 — muda a origem do dado."},

S16:{t:"mc", instr:"Na hierarquia do valor justo (item 72), a prioridade mais alta e a mais baixa cabem, respectivamente, a:",
  options:["Preços cotados não ajustados em mercados ativos para ativos idênticos; dados não observáveis",
           "Dados não observáveis; preços cotados em mercados ativos",
           "Informações observáveis indiretamente; preços cotados em mercados ativos",
           "Custo de reposição; preços cotados em mercados ativos"],
  answer:0,
  why:"Nível 1 no topo, Nível 3 na base. A hierarquia existe para dar consistência e comparabilidade."},

S17:{t:"multi", instr:"Marque o que a entidade deve determinar na mensuração do valor justo (item B2)",
  options:["O ativo ou passivo específico objeto da mensuração",
           "Para ativo não financeiro, a premissa de avaliação apropriada, consistente com o melhor uso possível",
           "O mercado principal, ou mais vantajoso, para o ativo ou passivo",
           "As técnicas de avaliação apropriadas, considerando a disponibilidade de dados e o nível da hierarquia",
           "A intenção da administração quanto à alienação do ativo"],
  answers:[0,1,2,3],
  why:"São as quatro alíneas do item B2. A intenção da entidade continua irrelevante."},

S18:{t:"match", instr:"Correlacione cada classe do art. 183, § 1º, da Lei 6.404/76 ao seu valor justo",
  pairs:[["Matérias-primas e bens em almoxarifado","Preço pelo qual possam ser repostos, mediante compra no mercado"],
         ["Bens ou direitos destinados à venda","Preço líquido de realização, deduzidos impostos, demais despesas da venda e a margem de lucro"],
         ["Investimentos","Valor líquido pelo qual possam ser alienados a terceiros"],
         ["Instrumentos financeiros","Valor obtido em mercado ativo, em transação não compulsória entre partes independentes"]],
  why:"A banca troca a linha das matérias-primas pela dos bens destinados à venda."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Avançada 03","https://www.tecconcursos.com.br/s/Q2ySVZ","Q2ySVZ"],
  ["Caderno FCC — Contabilidade Avançada 03","https://www.tecconcursos.com.br/s/Q2ySVr","Q2ySVr"],
  ["Caderno FGV — Contabilidade Avançada 03","https://www.tecconcursos.com.br/s/Q2ySVy","Q2ySVy"],
  ["Caderno VUNESP — Contabilidade Avançada 03","https://www.tecconcursos.com.br/s/Q2ySWH","Q2ySWH"]
];
var TECNOTA = "Assunto de definições, e é nas definições que a banca ganha dinheiro. Três fronteiras respondem pela maioria dos erros. A primeira é mercado principal × mercado mais vantajoso: no exemplo do resumo (EUA R$50, Brasil R$60, China R$30, Inglaterra R$70, com 80% vendidos no Brasil), o valor justo é R$60 porque o mercado principal é o do maior VOLUME, e só na ausência dele se vai aos R$70 da Inglaterra. A segunda é a hierarquia: Nível 1 exige preços cotados não ajustados em mercados ativos para ativos IDÊNTICOS, o Nível 2 são observáveis que podem requerer ajuste e o Nível 3 são não observáveis — e a mesma UGC serve de exemplo para os dois últimos, mudando só a origem do dado. A terceira é o alcance do item 06 e o quadro do art. 183, § 1º, da Lei 6.404/76: valor realizável líquido do CPC 16 e valor em uso do CPC 01 NÃO são valor justo, e o preço de reposição é das matérias-primas, não dos instrumentos financeiros. Fecha com o ATENÇÃO! que a banca repete: a intenção da entidade de manter o ativo ou liquidar o passivo é irrelevante.";

var UNITS = [
  {n:1, title:"Conceito, alcance e definição de valor justo", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"O que é valor justo, objetivo e alcance do CPC 46", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · objetivo e mensuração baseada em mercado", xp:25, data:["S1","S2","S3","T0","T1","T2","T3","T4","T5"]},
    {id:"K3", type:"drill",  title:"Praticar · intenção irrelevante e alcance",           xp:25, data:["S4","S5","T6","T7","T8","T9","T10","T11"]},
    {id:"K4", type:"drill",  title:"Praticar · definição e transação não forçada",        xp:25, data:["S6","S7","S8","T12","T13","T14","T15","T16","T17"]},
    {id:"K5", type:"flash",  title:"Flashcards · conceito, alcance e definição",          xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13]}
  ]},
  {n:2, title:"Mercado, preço de saída e técnicas de avaliação", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Mercado principal, preço de saída e as três abordagens", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · mercado principal e mais vantajoso",       xp:25, data:["S9","S10","T18","T19","T20","T21","T22","T23"]},
    {id:"K8", type:"drill",  title:"Praticar · preço de saída e as três técnicas",        xp:25, data:["S11","S12","T24","T25","T26","T27","T28"]},
    {id:"K9", type:"drill",  title:"Praticar · precificação por matriz",                  xp:25, data:["S13","T29","T30","T31","T32"]},
    {id:"K10",type:"flash",  title:"Flashcards · mercado, preço e técnicas",              xp:15, data:[14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]}
  ]},
  {n:3, title:"Hierarquia, roteiro do B2 e Lei 6.404/76", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Os três níveis, o item B2 e o art. 183, § 1º",        xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · os três níveis da hierarquia",             xp:25, data:["S14","S15","T33","T34","T35","T36","T37","T38"]},
    {id:"K13",type:"drill",  title:"Praticar · prioridade e níveis 2 e 3",                xp:25, data:["S16","T39","T40","T41","T42","T43","T44"]},
    {id:"K14",type:"drill",  title:"Praticar · item B2 e Lei 6.404/76",                   xp:25, data:["S17","S18","T45","T46","T47","T48","T49"]},
    {id:"K15",type:"flash",  title:"Flashcards · hierarquia, B2 e Lei 6.404/76",          xp:15, data:[29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                             xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                               xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                              xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 03 de Contabilidade Avançada (Radegondes) ---------- */
var COM={
0:"<p>Certo. É a resposta do resumo à pergunta <b>“o que significa mensuração do valor justo?”</b>: mensurar é <b>medir, calcular, estimar</b>, e mensurar o valor justo é <b>“estimar o preço pelo qual uma transação não forçada para a venda do ativo ou para a transferência do passivo ocorreria entre participantes do mercado na data de mensuração sob condições atuais de mercado”</b>.</p><p>O esquema dele empilha exatamente esses cinco elementos: <b>transação não forçada</b> · <b>venda do ativo ou transferência do passivo</b> · <b>participantes do mercado</b> · <b>data de mensuração</b> · <b>condições atuais de mercado</b>.</p><p class='fb-fonte'>Resumo 03 · <i>CPC 46</i></p>",
1:"<p>Certo pela literalidade do <b>item 01</b> transcrito no resumo: <b>(a) definir valor justo</b>; <b>(b) estabelecer em um único Pronunciamento a estrutura para a mensuração do valor justo</b>; e <b>(c) estabelecer divulgações sobre mensurações do valor justo</b>.</p><p>Guarde as três palavras-âncora: <b>definir</b> · <b>estruturar em um único pronunciamento</b> · <b>divulgar</b>. A banca costuma suprimir a terceira.</p><p class='fb-fonte'>Resumo 03 · <i>Objetivo CPC 46</i></p>",
2:"<p>Errado, e a troca é exatamente a inversão do <b>item 02</b>: <b>“o valor justo é uma mensuração baseada em mercado e NÃO uma mensuração específica da entidade”</b>.</p><p>Essa é a raiz de outra pegadinha do resumo: por ser baseada em mercado, valem as <b>premissas dos participantes do mercado</b> — e a <b>intenção da entidade</b> de manter o ativo ou liquidar o passivo <b>não é relevante</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Objetivo CPC 46</i></p>",
3:"<p>Errado no “necessariamente”. O comentário do resumo admite o contrário: <b>“se não houver um mercado ativo ou informações disponíveis sobre transações recentes semelhantes, a empresa pode utilizar outras técnicas para mensurar o valor justo”</b>, e conclui — <b>“em algumas situações o valor justo será diferente do valor de mercado”</b>.</p><p>Em regra o valor justo reflete as condições atuais do mercado (oferta e demanda, riscos, expectativas futuras); em regra, não sempre.</p><p class='fb-fonte'>Resumo 03 · <i>Objetivo CPC 46</i></p>",
4:"<p>Errado por inversão dos verbos. O <b>item 03</b> exige técnica que <b>“maximiza o uso de dados observáveis relevantes e minimiza o uso de dados não observáveis”</b>.</p><p>O resumo destaca os dois passos com sinal de conferência: <b>maximizar observáveis relevantes</b> · <b>minimizar não observáveis</b>. A mesma exigência reaparece no <b>item 61</b>, quando se trata de escolher a técnica de avaliação.</p><p class='fb-fonte'>Resumo 03 · <i>Quando o preço não é observável</i></p>",
5:"<p>Certo — é o <b>EXEMPLO</b> do resumo, com esse mesmo caso. A <b>mansão histórica</b> tem <b>características únicas</b>, e <b>“sua singularidade dificulta a comparação”</b>, de modo que não se acham transações recentes de vendas semelhantes.</p><p>A saída que o material indica: <b>“a entidade deve utilizar outras técnicas de avaliação, como o método do custo de reposição, que leva em consideração os custos de construção da mansão histórica”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Quando o preço não é observável</i></p>",
6:"<p>Errado — é o oposto do quadro <b>ATENÇÃO!</b> do resumo: <b>“a intenção da entidade de manter um ativo ou de liquidar um passivo NÃO é relevante ao mensurar o valor justo”</b>.</p><p>A razão está na frase anterior do item 03: por ser mensuração <b>baseada em mercado</b>, o valor justo usa as <b>premissas que os participantes do mercado utilizariam</b> ao precificar, <b>inclusive premissas sobre risco</b>. O que a entidade pretende fazer com o item é irrelevante.</p><p class='fb-fonte'>Resumo 03 · <i>Quando o preço não é observável — Atenção!</i></p>",
7:"<p>Certo pela segunda parte do <b>item 03</b>: <b>“por ser uma mensuração baseada em mercado, o valor justo é mensurado utilizando-se as premissas que os participantes do mercado utilizariam ao precificar o ativo ou o passivo, incluindo premissas sobre risco”</b>.</p><p>E é dessa premissa que o item tira a consequência: <b>“como resultado, a intenção da entidade de manter um ativo ou de liquidar ou, de outro modo, satisfazer um passivo não é relevante”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Quando o preço não é observável</i></p>",
8:"<p>Errado. O <b>item 06</b>, alínea <b>(a)</b>, põe justamente as <b>transações de pagamento baseadas em ações dentro do alcance do CPC 10</b> entre aquelas a que os requisitos de mensuração e divulgação <b>NÃO se aplicam</b>.</p><p>A lista das exclusões do resumo tem três itens: <b>CPC 10</b> (pagamento baseado em ações) · <b>CPC 06</b> (arrendamentos) · mensurações parecidas com valor justo que não são valor justo (<b>VRL do CPC 16</b> e <b>valor em uso do CPC 01</b>).</p><p class='fb-fonte'>Resumo 03 · <i>Alcance do CPC 46</i></p>",
9:"<p>Certo pela alínea <b>(b)</b> do <b>item 06</b>: os requisitos de mensuração e divulgação do CPC 46 <b>não se aplicam</b> às <b>transações de arrendamento dentro do alcance do CPC 06 (Arrendamentos)</b>.</p><p>Memorize as exclusões pelos números dos pronunciamentos: <b>10</b>, <b>06</b>, e as mensurações só parecidas — <b>16</b> e <b>01</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Alcance do CPC 46</i></p>",
10:"<p>Errado. A alínea <b>(c)</b> do <b>item 06</b> exclui exatamente essas duas: são <b>“mensurações que tenham algumas similaridades com o valor justo, mas que não representem o valor justo”</b> — o <b>valor realizável líquido</b> do <b>CPC 16 (Estoques)</b> e o <b>valor em uso</b> do <b>CPC 01 (Redução ao Valor Recuperável de Ativos)</b>.</p><p>Parecer com valor justo não é ser valor justo. Guarde os dois nomes: <b>VRL</b> e <b>valor em uso</b> ficam de fora.</p><p class='fb-fonte'>Resumo 03 · <i>Alcance do CPC 46</i></p>",
11:"<p>Certo pela literalidade do <b>item 09</b>: valor justo é <b>“o preço que seria recebido pela venda de um ativo ou que seria pago pela transferência de um passivo em uma transação não forçada entre participantes do mercado na data de mensuração”</b>.</p><p>O exemplo do resumo é o <b>edifício</b>: a empresa considera <b>“o preço que seria recebido caso o edifício fosse vendido no mercado, em uma transação não forçada”</b> — e esse é o valor justo dele para fins contábeis.</p><p class='fb-fonte'>Resumo 03 · <i>Definição de valor justo</i></p>",
12:"<p>Errado — a assertiva trocou os dois polos da definição. O <b>item 09</b> fala em preço <b>recebido pela VENDA de um ativo</b> e preço <b>pago pela TRANSFERÊNCIA de um passivo</b>, não em preço pago na aquisição nem recebido na assunção.</p><p>O <b>item 24</b> fecha a porta com uma palavra: valor justo é um <b>PREÇO DE SAÍDA</b>. Sempre que a assertiva puxar para o lado da entrada, está errada.</p><p class='fb-fonte'>Resumo 03 · <i>Definição de valor justo</i> · <i>Preço</i></p>",
13:"<p>Certo. É a resposta do resumo à pergunta <b>“o que é uma transação não forçada?”</b>: <b>“uma transação que presume exposição ao mercado por um período antes da data de mensuração para permitir atividades de marketing que são usuais e habituais”</b>.</p><p>Em outras palavras do próprio material: todas as partes <b>concordam voluntariamente</b>, <b>sem qualquer forma de coerção, chantagem ou manipulação</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Definição de valor justo</i></p>",
14:"<p>Errado, e o erro está justamente na pressão. O resumo é expresso: <b>“a transação NÃO é realizada sob pressão, mas sim com total consentimento e acordo mútuo entre as partes”</b>.</p><p>Não basta consentir no final: a transação não forçada <b>presume exposição ao mercado por um período antes da data de mensuração</b>, para permitir as <b>atividades de marketing usuais e habituais</b>. Venda apressada de liquidação não serve de parâmetro.</p><p class='fb-fonte'>Resumo 03 · <i>Definição de valor justo</i></p>",
15:"<p>Certo pelo <b>item 11</b>, com as duas alíneas que o resumo transcreve: <b>(a) a condição e a localização do ativo</b>; e <b>(b) restrições, se houver, para a venda ou o uso do ativo</b>.</p><p>E note a condicionante, que a assertiva manteve: as características entram <b>“se os participantes do mercado, ao precificar o ativo ou o passivo na data de mensuração, levarem essas características em consideração”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Ativo ou passivo</i></p>",
16:"<p>Errado no filtro. O <b>item 11</b> condiciona a consideração das características ao ponto de vista <b>dos participantes do mercado</b>, não ao da entidade: elas entram <b>“se os participantes do mercado, ao precificar o ativo ou o passivo na data de mensuração, levarem essas características em consideração”</b>.</p><p>Faz sentido com o resto do resumo: o valor justo é mensuração <b>baseada em mercado</b>, e a visão particular da entidade — inclusive a intenção de manter o ativo — é <b>irrelevante</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Ativo ou passivo</i></p>",
17:"<p>Certo — é a primeira frase do <b>item 11</b>: <b>“a mensuração do valor justo destina-se a um ativo ou passivo em particular”</b>.</p><p>O <b>item B2</b> desdobra essa ideia no exemplo do <b>portfólio</b> com derivativos, debêntures e títulos públicos: <b>“a entidade não pode mensurar o valor justo do portfólio como um todo, mas sim de cada ativo separadamente”</b>, de forma consistente com a <b>unidade de contabilização</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Ativo ou passivo</i></p>",
18:"<p>Certo pelo <b>item 16</b>, nas duas alíneas do resumo: a transação ocorre <b>“(a) no mercado principal para o ativo ou passivo; ou (b) na ausência de mercado principal, no mercado mais vantajoso para o ativo ou passivo”</b>.</p><p>A ordem é rígida, e o quadro <b>ATENÇÃO!</b> repete: <b>“na ausência de mercado principal, o valor justo será mensurado pelo mercado mais vantajoso”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Transação</i></p>",
19:"<p>Errado — invertem a ordem do <b>item 16</b>. O mercado mais vantajoso é <b>subsidiário</b>: entra <b>apenas na ausência</b> de mercado principal, como diz o quadro <b>ATENÇÃO!</b> do resumo.</p><p>No exemplo dele, com <b>80% dos produtos vendidos no Brasil</b>, o valor justo fica em <b>R$60</b> (Brasil, mercado principal) e não nos <b>R$70</b> da Inglaterra, que só seriam usados se não houvesse mercado principal.</p><p class='fb-fonte'>Resumo 03 · <i>Transação — Atenção!</i></p>",
20:"<p>Certo. É o conceito que o resumo extrai do <b>apêndice “A”</b>: mercado mais vantajoso é o mercado que <b>“maximiza o valor que seria recebido para vender o ativo”</b> ou <b>“minimiza o valor que seria pago para transferir o passivo”</b>.</p><p>Repare na simetria: no <b>ativo</b>, maximiza o que se recebe; no <b>passivo</b>, minimiza o que se paga. É por aí que a banca troca as palavras.</p><p class='fb-fonte'>Resumo 03 · <i>Transação — mercado mais vantajoso</i></p>",
21:"<p>Errado por uma palavra. No ativo, o mercado mais vantajoso <b>MAXIMIZA</b> o valor que seria recebido para vendê-lo — quem <b>minimiza</b> é o lado do <b>passivo</b>, e o que se minimiza é <b>o valor que seria pago para transferi-lo</b>.</p><p>No exemplo do resumo, a Inglaterra é o mais vantajoso porque paga o <b>maior</b> preço pela venda: <b>R$70</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Transação — mercado mais vantajoso</i></p>",
22:"<p>Certo — é o <b>EXEMPLO</b> do resumo, com esses mesmos quatro preços. Ele conclui: <b>“o parâmetro base para a determinação do valor justo do ativo é o mercado principal, ou seja, onde ocorre o maior volume de atividades, isto é, o Brasil (onde a maioria dos produtos são vendidos)”</b>, logo <b>“o valor justo será contabilizado por R$60”</b>.</p><p>A fábrica estar na China e a entidade ser norte-americana são distratores: o que decide é o <b>volume de vendas</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Transação — exemplo</i></p>",
23:"<p>Errado. O critério do mercado principal não é preço, é <b>volume</b>: o resumo diz que é <b>“onde ocorre o maior volume de atividades”</b> — e <b>80% dos produtos são vendidos no Brasil</b>.</p><p>A Inglaterra, com <b>R$70</b>, é o <b>mercado mais vantajoso</b>, que só seria usado na <b>ausência</b> de mercado principal. Havendo mercado principal, o valor justo é <b>R$60</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Transação — exemplo</i></p>",
24:"<p>Certo, e está literal no resumo: <b>“no exemplo acima, na ausência de mercado principal, o valor justo seria mensurado pelo mercado mais vantajoso, ou seja, o valor justo seria contabilizado por R$70 (preço na Inglaterra)”</b>.</p><p>Faça o par mental com a questão anterior: <b>com</b> mercado principal → <b>R$60</b> (Brasil, maior volume); <b>sem</b> mercado principal → <b>R$70</b> (Inglaterra, maior preço).</p><p class='fb-fonte'>Resumo 03 · <i>Transação — mercado mais vantajoso</i></p>",
25:"<p>Certo pelo <b>item 24</b>, que o resumo transcreve e ainda esquematiza: valor justo é o preço recebido pela venda do ativo ou pago pela transferência do passivo, <b>“em uma transação não forçada no mercado principal (ou mais vantajoso) na data de mensuração nas condições atuais de mercado (ou seja, um preço de saída)”</b>.</p><p>Fixe o rótulo: <b>preço de SAÍDA</b>. É o que separa o valor justo de qualquer medida de entrada, como o preço de aquisição ou o custo de reposição.</p><p class='fb-fonte'>Resumo 03 · <i>Preço</i></p>",
26:"<p>Errado. O <b>item 24</b> termina justamente afastando essa exigência: o valor justo é aquele preço <b>“independentemente de esse preço ser diretamente observável ou estimado utilizando-se outra técnica de avaliação”</b>.</p><p>O esquema do resumo repete os dois caminhos lado a lado: preço <b>diretamente observável</b> <b>ou</b> preço <b>estimado</b>. E o <b>item 03</b> já havia dado a receita para quando não há preço observável — maximizar dados observáveis, minimizar não observáveis.</p><p class='fb-fonte'>Resumo 03 · <i>Preço</i></p>",
27:"<p>Certo pelo <b>item 62</b>: <b>“três técnicas de avaliação amplamente utilizadas são: (i) abordagem de mercado; (ii) abordagem de custo; e (iii) abordagem de receita”</b>, cujos principais aspectos <b>“são resumidos nos itens B5 a B11”</b>.</p><p>O resumo traz as três num quadro só. Guarde o objetivo comum do item 62: <b>estimar o preço</b> de uma transação não forçada entre participantes do mercado na data de mensuração, nas condições atuais.</p><p class='fb-fonte'>Resumo 03 · <i>Técnicas de avaliação</i></p>",
28:"<p>Errado: a descrição é da <b>abordagem de MERCADO</b>, que no quadro do resumo é <b>“uma técnica que mensura preços e outras informações relevantes geradas por transações de mercado envolvendo ativos e passivos idênticos ou similares (ex.: um negócio)”</b> e que <b>“inclui a precificação por matriz”</b>.</p><p>A <b>abordagem de custo</b> é outra coisa: mensura <b>“o valor que seria exigido para substituir a capacidade de serviço do referido ativo, ou seja, é o custo de substituição (ou reposição)”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Objetivo CPC 46 — quadro das técnicas</i></p>",
29:"<p>Certo pela coluna <b>ABORDAGEM DE RECEITA</b> do quadro do resumo: é <b>“uma técnica de mensuração do valor justo que converte valores futuros (ex.: fluxos de caixa ou receitas e despesas) em um valor único atual (ou seja, descontado)”</b>.</p><p>Palavra-chave para reconhecer na prova: <b>descontado</b>. Sempre que aparecer valor presente de fluxos futuros, pense em abordagem de <b>receita</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Objetivo CPC 46 — quadro das técnicas</i></p>",
30:"<p>Certo pela coluna <b>ABORDAGEM DE CUSTO</b>: <b>“é uma técnica que mensura o valor que seria exigido para substituir a capacidade de serviço do referido ativo, ou seja, é o custo de substituição (ou reposição)”</b>.</p><p>O exemplo do resumo é a <b>máquina</b>: o valor justo é estimado pelo <b>custo de adquirir uma máquina nova equivalente na data de mensuração</b> — o <b>custo de substituição/reposição atual</b> do <b>item B8</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Técnicas de avaliação</i></p>",
31:"<p>Errado: o vínculo é com a <b>abordagem de MERCADO</b>. O <b>item B7</b>, no resumo, começa assim: <b>“técnicas de avaliação consistentes com a abordagem de mercado incluem a precificação por matriz”</b> — e o próprio quadro das três técnicas anota, na coluna de mercado, <b>“inclui a precificação por matriz”</b>.</p><p>Abordagem de <b>receita</b> é a que <b>desconta valores futuros</b> para um valor único atual. Não confunda as duas.</p><p class='fb-fonte'>Resumo 03 · <i>Abordagem de mercado</i></p>",
32:"<p>Errado, e o erro está no <b>“exclusivamente”</b>. O <b>item B7</b> define precificação por matriz como <b>“técnica matemática utilizada principalmente para avaliar alguns tipos de instrumentos financeiros, tais como títulos de dívida, SEM se basear exclusivamente em preços cotados para os títulos específicos, mas, sim, baseando-se na relação dos títulos com outros títulos cotados de referência”</b>.</p><p>No exemplo do resumo, ao avaliar o título de dívida de uma empresa <b>“seria considerado o preço de outros títulos de empresas comparáveis e já cotados no mercado”</b>, pesando <b>risco, prazo e liquidez</b> — é o esquema dos títulos <b>“A”, “B” e “C”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Abordagem de mercado</i></p>",
33:"<p>Certo pelo <b>item 72</b>: o Pronunciamento <b>“estabelece uma hierarquia de valor justo que classifica em três níveis as informações (inputs) aplicadas nas técnicas de avaliação utilizadas na mensuração do valor justo”</b>.</p><p>O esquema final do resumo resume os três em uma linha: <b>Nível 1</b> — preços cotados em mercados ativos · <b>Nível 2</b> — informações observáveis · <b>Nível 3</b> — informações não observáveis (<b>itens 76, 81 e 86</b>).</p><p class='fb-fonte'>Resumo 03 · <i>Hierarquia do valor justo</i></p>",
34:"<p>Errado por inversão dos extremos. O <b>item 72</b> diz que a hierarquia <b>“dá a mais alta prioridade a preços cotados (não ajustados) em mercados ativos para ativos ou passivos idênticos (informações de Nível 1) e a mais baixa prioridade a dados não observáveis (informações de Nível 3)”</b>.</p><p>O comentário do resumo reforça o motivo: as informações de Nível 1 são <b>“consideradas as mais confiáveis”</b>, enquanto o Nível 3 representa <b>“dados não observáveis e menos confiáveis”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Hierarquia do valor justo</i></p>",
35:"<p>Certo — é a finalidade declarada na abertura do <b>item 72</b>: <b>“para aumentar a consistência e a comparabilidade nas mensurações do valor justo e nas divulgações correspondentes, este Pronunciamento estabelece uma hierarquia de valor justo…”</b>.</p><p>O comentário do resumo traduz: o CPC 46 <b>“busca padronizar as mensurações do valor justo e as divulgações correspondentes”</b>, privilegiando mercados ativos e cotados e dando a menor prioridade a dados não observáveis.</p><p class='fb-fonte'>Resumo 03 · <i>Hierarquia do valor justo</i></p>",
36:"<p>Certo pela literalidade do <b>item 76</b>: <b>“informações de Nível 1 são preços cotados (não ajustados) em mercados ativos para ativos ou passivos idênticos a que a entidade possa ter acesso na data de mensuração”</b>.</p><p>Quatro elementos para conferir na prova: <b>cotados</b> · <b>não ajustados</b> · <b>mercados ativos</b> · ativos ou passivos <b>IDÊNTICOS</b>. O exemplo do resumo é a <b>cotação de ações na bolsa de valores</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Informações de Nível 1</i></p>",
37:"<p>Errado por uma palavra: o <b>item 76</b> exige ativos ou passivos <b>IDÊNTICOS</b>, não similares.</p><p>“Similares” aparece em outro lugar do resumo — na <b>abordagem de mercado</b>, que mensura preços gerados por transações <b>“envolvendo ativos e passivos idênticos ou similares”</b>. Na hierarquia, similar é sinal de <b>Nível 2</b>: o exemplo dele é o <b>múltiplo obtido de transações com negócios comparáveis</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Informações de Nível 1</i></p>",
38:"<p>Certo. É o comentário do resumo sobre o <b>item 77</b>: <b>“o preço cotado em mercado ativo oferece a evidência mais confiável do valor justo e deve ser utilizado sem ajuste para mensurar o valor justo sempre que disponível”</b>.</p><p>Só se ajustam informações de Nível 1 <b>“em algumas circunstâncias”</b>, que o material remete ao <b>item 79</b>. Por isso a definição do item 76 já traz o parêntese: preços cotados <b>(não ajustados)</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Informações de Nível 1</i></p>",
39:"<p>Certo pela literalidade do <b>item 81</b>: <b>“informações de Nível 2 são informações que são observáveis para o ativo ou passivo, seja direta ou indiretamente, exceto preços cotados incluídos no Nível 1”</b>.</p><p>O resumo lista as fontes típicas: <b>preços de transações similares em mercados ativos</b>, <b>dados de mercado menos líquidos</b> e <b>informações sobre preços de insumos e custos de produção</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Informações de Nível 2</i></p>",
40:"<p>Errado no “nunca”. O comentário do resumo sobre a hierarquia diz o contrário a respeito do Nível 2: <b>“essas informações podem requerer algum nível de ajuste para serem usadas na mensuração do valor justo”</b>.</p><p>O contraste é justamente com o <b>Nível 1</b>, que é usado <b>sem ajuste</b> sempre que disponível (item 77) e só se ajusta em <b>algumas circunstâncias</b> (item 79). Quem não se ajusta, em regra, é o Nível 1 — não o Nível 2.</p><p class='fb-fonte'>Resumo 03 · <i>Hierarquia do valor justo</i> · <i>Informações de Nível 2</i></p>",
41:"<p>Certo. O <b>item 86</b> é curto: <b>“informações (inputs) de Nível 3 são dados não observáveis para o ativo ou passivo”</b>. E o comentário do resumo acrescenta o juízo de confiabilidade: o Nível 3 <b>“representa dados não observáveis e menos confiáveis”</b>.</p><p>Ele explica o porquê: não há preços cotados em mercados ativos nem informações semelhantes disponíveis, de modo que as estimativas <b>“são baseadas em suposições e modelos que podem variar de empresa para empresa”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Informações de Nível 3</i></p>",
42:"<p>Errado: esse é o exemplo de <b>Nível 3</b>, não de Nível 2. O resumo, comentando a <b>Unidade Geradora de Caixa</b>, diz que a informação de Nível 3 <b>“seria uma previsão financeira dos fluxos de caixa futuros (ou o resultado do período) utilizando-se os dados próprios da entidade, a menos que haja informação razoavelmente disponível que indique que os participantes do mercado utilizariam premissas diferentes”</b> (<b>item B36, alínea “e”</b>).</p><p>A mesma UGC ilustra o <b>Nível 2</b> quando o dado vem de fora: o <b>múltiplo de rendimentos obtido de transações observadas com negócios comparáveis</b> (<b>item B35, alínea “h”</b>). A chave é a <b>origem do dado</b> — próprio da entidade (3) ou observável no mercado (2).</p><p class='fb-fonte'>Resumo 03 · <i>Informações de Nível 3</i></p>",
43:"<p>Certo. São as fontes que o resumo lista para o <b>Nível 2</b>: <b>preços de transações similares em mercados ativos</b>; <b>dados de mercado menos líquidos</b>; e <b>informações sobre preços de insumos e custos de produção</b>, entre outros.</p><p>A lógica do <b>item 81</b>: são informações que <b>“não estão disponíveis de forma imediata através de preços cotados no mercado, mas que podem ser obtidas a partir de outras fontes de dados observáveis”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Informações de Nível 2</i></p>",
44:"<p>Certo pela alínea <b>(a)</b> do <b>item B2</b>: a mensuração requer que a entidade determine <b>“o ativo ou passivo específico objeto da mensuração (de forma consistente com a sua unidade de contabilização)”</b>.</p><p>O exemplo do resumo para essa alínea é o <b>portfólio</b> com derivativos, debêntures e títulos públicos: <b>“a entidade não pode mensurar o valor justo do portfólio como um todo, mas sim de cada ativo separadamente”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Abordagem da mensuração do valor justo</i></p>",
45:"<p>Errado. A alínea <b>(b)</b> do <b>item B2</b> manda determinar, para ativo não financeiro, <b>“a premissa de avaliação apropriada para a mensuração (de forma consistente com o seu melhor uso possível)”</b> — e não com qualquer valor de liquidação forçada.</p><p>O exemplo do resumo é o <b>terreno</b>: com localização estratégica e potencial imobiliário, <b>“seu valor justo seria maior se fosse usado para construção de um edifício comercial”</b> do que como <b>terreno vago</b>. Lembre também que a transação pressuposta é <b>não forçada</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Abordagem da mensuração do valor justo</i></p>",
46:"<p>Errado — o exemplo do resumo para a alínea <b>(a)</b> do <b>item B2</b> diz exatamente o oposto: <b>“a entidade deve selecionar individualmente cada ativo para ser objeto da mensuração. Isso significa que a entidade não pode mensurar o valor justo do portfólio como um todo, mas sim de cada ativo separadamente”</b>.</p><p>A base é o <b>item 11</b>: a mensuração do valor justo <b>destina-se a um ativo ou passivo em particular</b>, de forma consistente com a sua <b>unidade de contabilização</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Abordagem da mensuração do valor justo</i></p>",
47:"<p>Errado: esse é o critério da <b>primeira</b> linha da tabela do resumo — das <b>matérias-primas e dos bens em almoxarifado</b>, cujo valor justo é <b>“o preço pelo qual possam ser repostos, mediante compra no mercado”</b>.</p><p>Para os <b>instrumentos financeiros</b>, o art. 183, § 1º, considera valor justo <b>“o valor que pode se obter em um mercado ativo, decorrente de transação não compulsória realizada entre partes independentes”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Valor justo na Lei nº 6.404/76</i></p>",
48:"<p>Certo pela segunda linha da tabela do resumo: dos <b>bens ou direitos destinados à venda</b>, considera-se valor justo <b>“o preço líquido de realização mediante venda no mercado, deduzidos os impostos e demais despesas necessárias para a venda, e a margem de lucro”</b>.</p><p>Note as três deduções, que a banca gosta de suprimir: <b>impostos</b> · <b>demais despesas necessárias para a venda</b> · <b>margem de lucro</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Valor justo na Lei nº 6.404/76</i></p>",
49:"<p>Certo. É a segunda das três hipóteses do quadro <b>ATENÇÃO!</b> do resumo para a <b>ausência de mercado ativo</b> de um instrumento financeiro: <b>“o valor presente líquido dos fluxos de caixa futuros para instrumentos financeiros de natureza, prazo e risco similares”</b>.</p><p>As outras duas: <b>1)</b> o valor obtido em mercado ativo com a negociação de <b>outro instrumento financeiro de natureza, prazo e risco similares</b>; e <b>3)</b> o valor obtido por <b>modelos matemático-estatísticos de precificação</b> de instrumentos financeiros.</p><p class='fb-fonte'>Resumo 03 · <i>Valor justo na Lei nº 6.404/76 — Atenção!</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"03", nome:"CPC 46 — Mensuração do Valor Justo", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
