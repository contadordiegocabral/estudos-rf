/* Contabilidade Pública — Módulo 12: Demonstração dos Fluxos de Caixa (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cpub12 = (function(){
"use strict";

var CARDS = [
  ["O que a DFC apresenta?","Os <b>fluxos de caixa</b> (entradas e saídas) e os classifica em <b>operacional</b>, <b>de investimento</b> e <b>de financiamento</b>."],
  ["Para que serve a informação dos fluxos de caixa?","Permite avaliar <b>como a entidade obteve recursos</b> para financiar suas atividades e <b>como os recursos foram utilizados</b> — para <b>prestação de contas, accountability e tomada de decisão</b>."],
  ["O que a DFC identificará?","As <b>fontes de geração dos fluxos de entrada</b> de caixa; os <b>itens de consumo de caixa</b> no período; e o <b>saldo do caixa</b> na data das demonstrações."],
  ["O que é o fluxo OPERACIONAL?","Os fluxos provenientes das atividades da entidade <b>que não sejam de investimento e de financiamento</b> — definição por exclusão."],
  ["O que é o fluxo DE INVESTIMENTO?","Os fluxos das atividades de <b>aquisição e venda de ativos de longo prazo</b> e de <b>outros investimentos não incluídos em equivalentes de caixa</b>."],
  ["O que é o fluxo DE FINANCIAMENTO?","Os fluxos das atividades que resultam em <b>mudanças na composição do capital próprio e no endividamento</b> da entidade."],
  ["O que significa “caixa” em contabilidade?","O <b>numerário em espécie</b> e os <b>depósitos bancários disponíveis</b>."],
  ["O que são equivalentes de caixa?","<b>Aplicações financeiras de curto prazo</b>, de <b>alta liquidez</b>, <b>prontamente conversíveis</b> em valor conhecido de caixa e sujeitas a <b>insignificante risco de mudança de valor</b>."],
  ["Para que os equivalentes de caixa são mantidos?","Para atender a <b>compromissos de caixa de curto prazo</b> — <b>não</b> para investimento ou outros fins."],
  ["Qual o prazo típico de um equivalente de caixa?","Vencimento de <b>três meses ou menos</b> a partir da <b>data de aquisição</b>."],
  ["Ações de outras entidades são equivalentes de caixa?","<b>Em regra, não</b> — são excluídas dos equivalentes de caixa."],
  ["Saldos bancários negativos entram onde?","Como <b>componente de caixa e equivalentes de caixa</b> (reduzindo o grupo), quando decorrerem de <b>cheques especiais</b> ou <b>contas correntes garantidas</b>, liquidados em curto espaço de tempo — pois compõem a <b>gestão de caixa</b>."],
  ["E os empréstimos bancários em geral?","São <b>atividades de financiamento</b>. A exceção é só a do saldo negativo de cheque especial/conta garantida, em que os saldos <b>flutuam de devedor para credor</b>."],

  ["Por qual método a DFC deve ser elaborada?","Pelo <b>método DIRETO</b> — obrigatório para todos os entes, por padronização."],
  ["O que a NBC TSP 12 faculta quanto ao método?","Faculta o <b>direto ou o indireto</b> para o fluxo das atividades operacionais, <b>incentivando o direto</b>. O MCASP tornou o <b>direto obrigatório</b>."],
  ["O que se informa no método direto?","As <b>principais classes de recebimentos e pagamentos BRUTOS</b>."],
  ["Qual a equação de fechamento da DFC?","<b>FCO + FCI + FCF = SF – SI</b> — a soma dos três fluxos corresponde à diferença entre os saldos <b>final</b> e <b>inicial</b> de caixa e equivalentes."],
  ["Qual classe do PCASP elabora a DFC?","A <b>classe 6</b> (Controles da Execução do Planejamento e Orçamento), com <b>filtros</b> por naturezas orçamentárias de receitas e despesas, funções e subfunções, além de contas que marcam a <b>movimentação extraorçamentária</b> que transita pelo caixa."],
  ["Quais os quatro quadros da DFC?","<b>Quadro Principal</b>; <b>Quadro de Transferências Recebidas e Concedidas</b>; <b>Quadro de Desembolsos de Pessoal e Demais Despesas por Função</b>; <b>Quadro de Juros e Encargos da Dívida</b>."],
  ["Ingressos operacionais no quadro principal","Receita <b>tributária</b>, de <b>contribuições</b>, <b>patrimonial</b>, <b>agropecuária</b>, <b>industrial</b>, de <b>serviços</b>, <b>remuneração das disponibilidades</b>, <b>outras receitas derivadas e originárias</b> e <b>transferências recebidas</b>."],
  ["Desembolsos operacionais no quadro principal","<b>Pessoal e demais despesas</b>, <b>juros e encargos da dívida</b>, <b>transferências concedidas</b> e <b>outros desembolsos operacionais</b>."],
  ["Ingressos e desembolsos de INVESTIMENTO","<b>Ingressos:</b> alienação de bens, amortização de empréstimos concedidos, amortização de financiamentos concedidos, outros. <b>Desembolsos:</b> aquisição de ativo não circulante, concessão de empréstimos, concessão de financiamentos, outros."],
  ["Ingressos e desembolsos de FINANCIAMENTO","<b>Ingressos:</b> operações de crédito, integralização do capital social de empresas dependentes, outros. <b>Desembolsos:</b> amortização da dívida, refinanciamento da dívida, outros."],

  ["O que o fluxo operacional líquido indica?","A extensão em que as operações são financiadas <b>a) por meio de tributos</b> (direta e indiretamente) e <b>b) pelos destinatários dos bens e serviços</b> oferecidos."],
  ["O que mais o fluxo operacional demonstra?","A condição da entidade de <b>manter sua capacidade operacional</b>, <b>amortizar empréstimos</b>, <b>pagar dividendos</b> e <b>fazer novos investimentos sem recorrer a fontes externas</b>."],
  ["O que os fluxos operacionais consolidados indicam?","A <b>proporção em que o governo financia suas atividades correntes</b> por meio da <b>tributação e outras cobranças</b>."],
  ["Exemplos de fluxo OPERACIONAL — recebimentos","Caixa de <b>impostos, taxas, contribuições e multas</b>; <b>venda de mercadorias e prestação de serviços</b>; <b>concessões ou transferências</b>; <b>dotações ou autorizações orçamentárias</b>; <b>royalties, honorários e comissões</b>; <b>sinistros e benefícios de apólice</b>."],
  ["Exemplos de fluxo OPERACIONAL — pagamentos","<b>Prêmios e anuidades</b> em transações com seguradora; <b>a outras entidades do setor público para financiar operações</b> (não inclui empréstimo); a <b>fornecedores</b>; a <b>empregados</b>; <b>tributos sobre patrimônio ou renda</b> ligados a atividades operacionais; e os fluxos de <b>operações descontinuadas</b> e de <b>solução de litígios</b>."],
  ["Qual a regra de ouro das atividades de investimento?","<b>Somente saídas de caixa que resultem em ativo reconhecido</b> nas demonstrações contábeis são classificáveis como atividades de investimento."],
  ["O que os fluxos de investimento representam?","A extensão em que as saídas de caixa se destinam a <b>contribuir para a futura prestação de serviços</b> pela entidade."],
  ["Exemplos de fluxo DE INVESTIMENTO","Pagamentos para <b>aquisição de imobilizado, intangível e outros ativos de longo prazo</b> (incluindo custos de desenvolvimento ativados e construção própria); recebimentos pela <b>venda</b> desses ativos; compra e venda de <b>instrumentos patrimoniais ou de dívida</b> de outras entidades; <b>adiantamentos e empréstimos concedidos a terceiros</b> e seus recebimentos."],
  ["Qual a exceção dos empréstimos concedidos no fluxo de investimento?","Os <b>concedidos por instituição financeira pública</b> — para elas, é atividade operacional."],
  ["Como classificar contratos futuros, a termo, de opção e swap?","Como <b>investimento</b>, <b>exceto</b> quando mantidos para <b>negociação imediata ou disponíveis para venda</b>, ou quando classificados como <b>financiamento</b>."],
  ["Regra do hedge","Quando o contrato for contabilizado como <b>hedge de posição identificável</b>, seus fluxos são classificados <b>do mesmo modo</b> que os fluxos da <b>posição protegida</b>."],
  ["Por que a divulgação do fluxo de financiamento importa?","Para a <b>previsão de exigências de fluxos futuros</b> por parte dos <b>provedores de capital</b>."],
  ["Exemplos de fluxo DE FINANCIAMENTO","Caixa recebido de <b>debêntures</b>, <b>empréstimos contraídos</b>, <b>notas promissórias</b>, <b>títulos e valores</b> e <b>hipotecas</b>; <b>amortização</b> de empréstimos e financiamentos contraídos; e pagamentos do <b>arrendatário</b> para reduzir o passivo de <b>arrendamento mercantil financeiro</b>."],

  ["Como registrar fluxos em moeda estrangeira?","Na <b>moeda funcional</b> da entidade, convertendo pela <b>taxa cambial da data da ocorrência do fluxo de caixa</b>."],
  ["Ganhos e perdas cambiais não realizados são fluxo de caixa?","<b>Não são fluxos de caixa.</b> Mas o <b>efeito das mudanças cambiais sobre o caixa e equivalentes</b> deve ser apresentado na DFC para <b>conciliar</b> o saldo inicial e final — <b>separadamente</b> dos três fluxos."],
  ["Juros e dividendos em instituição financeira pública","<b>Juros pagos e recebidos</b> e <b>dividendos recebidos</b> → <b>fluxo operacional</b>."],
  ["Classificação recomendada para as demais entidades públicas","<b>Juros pagos e recebidos</b> → <b>operacional</b> (compõem o resultado do exercício). <b>Dividendos recebidos</b> → <b>investimento</b>. <b>Dividendos pagos</b> → <b>financiamento</b> (são custos da obtenção de recursos)."],
  ["O que a NBC TSP 12 faculta sobre juros e dividendos?","Classificá-los como <b>operacionais, de investimento ou de financiamento</b>, desde que a classificação seja adotada de forma <b>consistente</b> — não há consenso fora das instituições financeiras."],
  ["Onde se classificam os Juros sobre Capital Próprio?","Têm a <b>mesma classificação dada aos dividendos</b>."],
  ["Exemplos de transações que NÃO envolvem caixa","Aquisição de ativos por <b>troca de ativos</b>; por <b>assunção direta do respectivo passivo</b>; por <b>arrendamento financeiro</b>; e a <b>conversão de dívida em patrimônio líquido</b>."],
  ["Como tratar transações sem caixa na DFC?","<b>NÃO devem ser incluídas</b> na DFC. Devem ser <b>divulgadas em notas explicativas</b>, quando relevantes."],
  ["Onde entram os fluxos de aquisição e alienação de controlada?","Apresentados <b>separadamente</b> e classificados como <b>atividades de INVESTIMENTO</b>."],
  ["O que divulgar, de modo agregado, na aquisição/venda de controlada?","<b>a)</b> valor total pago ou recebido; <b>b)</b> a parcela paga ou recebida <b>exclusivamente em caixa e equivalentes</b>; <b>c)</b> o montante de <b>caixa e equivalentes da controlada</b> adquirida ou vendida; <b>d)</b> o montante dos <b>ativos e passivos, exceto caixa e equivalentes</b>, resumido pelas principais classificações."],
  ["O que a entidade deve divulgar sobre os componentes de caixa?","Os <b>componentes</b> de caixa e equivalentes e a <b>conciliação</b> dos valores da DFC com os itens do <b>Balanço Patrimonial</b>."],
  ["Depósitos restituíveis e valores vinculados na DFC","A entidade divulga a <b>política adotada</b> na composição do caixa. Incluindo-os, deve <b>destacá-los em notas</b>, ressaltando que tais recursos, <b>embora em poder do ente, não podem ser por ele utilizados</b>."],
  ["Quando a DFC exige notas explicativas?","Quando os itens que compõem os fluxos de caixa forem <b>relevantes</b>. Também se divulgam, com <b>comentário da administração</b>, os <b>saldos significativos não disponíveis para uso</b>."],
  ["Exemplos de caixa não disponível para uso","Saldos em poder de <b>controlada com restrições legais</b> que impeçam o uso geral pela controladora; e os <b>depósitos de terceiros</b> classificados como caixa e equivalentes."],
  ["Informações adicionais recomendadas em nota","<b>a)</b> <b>linhas de crédito obtidas e não utilizadas</b>, com eventuais restrições; <b>b)</b> montante e natureza dos <b>saldos não disponíveis</b>; <b>c)</b> <b>descrição dos itens</b> incluídos no conceito de caixa e equivalentes; <b>d)</b> <b>conciliação</b> do saldo da DFC com o do BP, justificando diferenças."],
  ["Retenções — o efeito na DFC","Depende de quando se considera a retenção paga. Se <b>na liquidação</b>, há <b>ajuste</b> no saldo de caixa (há saldo vinculado a deduzir). Se <b>apenas na baixa da obrigação</b>, <b>nenhum ajuste</b>. Os ajustes vão para <b>notas explicativas</b>."],
  ["Doação de bem e depreciação afetam a geração líquida de caixa?","<b>Não</b> — não há ingresso nem desembolso de caixa."],
  ["Questão-modelo: impostos 80.000 (metade arrecadada), pessoal 60.000 (metade paga), veículo doado 72.000 com 12.000 de depreciação","<b>+40.000 − 30.000 = R$ 10.000</b> positivos. A doação e a depreciação não entram."]
];

var QS = [
  ["A Demonstração dos Fluxos de Caixa classifica os fluxos em operacional, de investimento e de financiamento.","C","FUNDATEC","Três categorias."],
  ["A DFC identificará as fontes de geração dos fluxos de entrada de caixa, os itens de consumo de caixa e o saldo do caixa na data das demonstrações.","C","CESPE","Três finalidades expressas."],
  ["Os fluxos operacionais são definidos por exclusão: são os que não sejam de investimento nem de financiamento.","C","FCC","Definição residual."],
  ["Os fluxos de investimento são os provenientes das atividades que resultam em mudanças na composição do capital próprio e no endividamento.","E","FGV","Essa é a definição dos fluxos de <b>financiamento</b>."],
  ["Equivalentes de caixa são aplicações financeiras de curto prazo, de alta liquidez, prontamente conversíveis em valor conhecido de caixa e sujeitas a insignificante risco de mudança de valor.","C","VUNESP","Definição."],
  ["Os equivalentes de caixa são mantidos com a finalidade de investimento de longo prazo.","E","FUNDATEC","São mantidos para <b>compromissos de caixa de curto prazo</b>."],
  ["Um investimento normalmente se qualifica como equivalente de caixa quando tem vencimento de três meses ou menos a partir da data de aquisição.","C","CESPE","Parâmetro usual."],
  ["Em regra, os investimentos em ações de outras entidades são considerados equivalentes de caixa.","E","FCC","São <b>excluídos</b> dos equivalentes de caixa."],
  ["Saldos bancários negativos decorrentes de cheques especiais liquidados em curto espaço de tempo são incluídos como componente de caixa e equivalentes de caixa.","C","FGV","Porque compõem a gestão de caixa."],
  ["Os empréstimos bancários são geralmente considerados como atividades operacionais.","E","VUNESP","São geralmente atividades de <b>financiamento</b>."],
  ["A DFC deve ser elaborada pelo método direto.","C","FUNDATEC","Obrigatório para todos os entes, por padronização."],
  ["A NBC TSP 12 obriga o método indireto para o fluxo das atividades operacionais.","E","CESPE","Ela <b>faculta</b> direto ou indireto, incentivando o direto."],
  ["No método direto são informadas as principais classes de recebimentos e pagamentos brutos.","C","FCC","Característica do método."],
  ["A soma dos fluxos operacional, de investimento e de financiamento deve corresponder à diferença entre os saldos final e inicial de caixa e equivalentes de caixa.","C","FGV","FCO + FCI + FCF = SF − SI."],
  ["A DFC é elaborada com as contas da classe 6 do PCASP.","C","VUNESP","Controles da Execução do Planejamento e Orçamento, com filtros."],
  ["A DFC é composta pelo quadro principal e pelos quadros de transferências recebidas e concedidas, de desembolsos de pessoal e demais despesas por função e de juros e encargos da dívida.","C","FUNDATEC","Quatro quadros."],
  ["As transferências recebidas figuram entre os ingressos das atividades operacionais.","C","CESPE","No quadro principal."],
  ["Os juros e encargos da dívida figuram entre os desembolsos das atividades de financiamento no quadro principal da DFC.","E","FCC","Figuram entre os desembolsos <b>operacionais</b>."],
  ["A alienação de bens é ingresso das atividades de investimento.","C","FGV","Ao lado das amortizações de empréstimos e financiamentos concedidos."],
  ["A aquisição de ativo não circulante é desembolso das atividades de investimento.","C","VUNESP","Junto com a concessão de empréstimos e financiamentos."],
  ["As operações de crédito são ingressos das atividades de financiamento.","C","FUNDATEC","Assim como a integralização do capital de empresas dependentes."],
  ["A amortização e o refinanciamento da dívida são desembolsos das atividades de investimento.","E","CESPE","São desembolsos de <b>financiamento</b>."],
  ["O montante dos fluxos de caixa líquidos das atividades operacionais é indicador-chave da extensão em que as operações são financiadas por tributos e pelos destinatários dos bens e serviços.","C","FCC","Alíneas a e b do MCASP."],
  ["O fluxo operacional auxilia a demonstrar a condição da entidade de manter sua capacidade operacional, amortizar empréstimos, pagar dividendos e fazer novos investimentos sem fontes externas.","C","FGV","Quatro condições."],
  ["Recebimentos de caixa decorrentes de impostos, taxas, contribuições e multas são fluxos das atividades de investimento.","E","VUNESP","São fluxos <b>operacionais</b>."],
  ["Pagamentos em caixa a outras entidades do setor público para financiar suas operações, sem incluir empréstimo, são fluxos operacionais.","C","FUNDATEC","Exemplo expresso da norma."],
  ["Recebimentos ou pagamentos decorrentes da solução de litígios são fluxos operacionais.","C","CESPE","Constam do rol."],
  ["Somente saídas de caixa que resultem em ativo reconhecido nas demonstrações contábeis são passíveis de classificação como atividades de investimento.","C","FCC","Regra de ouro do fluxo de investimento."],
  ["Os fluxos de investimento representam a extensão em que as saídas de caixa contribuem para a futura prestação de serviços pela entidade.","C","FGV","Definição do MCASP."],
  ["Os custos de desenvolvimento ativados e os ativos imobilizados de construção própria integram os pagamentos das atividades de investimento.","C","VUNESP","Consta expressamente."],
  ["Os adiantamentos e empréstimos concedidos por instituição financeira pública são classificados como atividades de investimento.","E","FUNDATEC","São <b>exceção</b> — para elas a classificação é operacional."],
  ["Pagamentos por contratos futuros, a termo, de opção e swap são sempre atividades de investimento.","E","CESPE","Exceto se mantidos para negociação imediata ou disponíveis para venda, ou classificados como financiamento."],
  ["Quando o contrato for contabilizado como hedge de posição identificável, seus fluxos de caixa devem ser classificados do mesmo modo que os da posição protegida.","C","FCC","Consistência na classificação."],
  ["A divulgação dos fluxos de financiamento é importante para a previsão de exigências de fluxos futuros por parte dos provedores de capital.","C","FGV","Finalidade do fluxo."],
  ["Caixa recebido proveniente da emissão de debêntures, de notas promissórias e de hipotecas são fluxos de financiamento.","C","VUNESP","Exemplos do rol."],
  ["Os pagamentos do arrendatário para redução do passivo relativo a arrendamento mercantil financeiro são fluxos operacionais.","E","FUNDATEC","São fluxos de <b>financiamento</b>."],
  ["Os fluxos de caixa em moeda estrangeira devem ser convertidos à taxa cambial da data da ocorrência do fluxo de caixa.","C","CESPE","Registro na moeda funcional."],
  ["Ganhos e perdas não realizados resultantes de mudanças nas taxas de câmbio são fluxos de caixa.","E","FCC","<b>Não são</b> fluxos de caixa."],
  ["O efeito das mudanças cambiais sobre o caixa e equivalentes mantidos em moeda estrangeira deve ser apresentado separadamente dos três fluxos, para conciliar o saldo inicial e final.","C","FGV","Linha própria da DFC."],
  ["Em instituições financeiras públicas, os juros pagos e recebidos e os dividendos recebidos são comumente classificados como fluxos operacionais.","C","VUNESP","Regra específica."],
  ["Para as demais entidades públicas, recomenda-se classificar os juros pagos e recebidos como fluxos de financiamento.","E","FUNDATEC","Recomenda-se como <b>operacionais</b>, pois compõem o resultado do exercício."],
  ["Os dividendos recebidos devem ser classificados como fluxos das atividades de investimento e os dividendos pagos, como de financiamento.","C","CESPE","Os pagos são custos da obtenção de recursos."],
  ["Os juros sobre capital próprio possuem a mesma classificação dada aos dividendos.","C","FCC","Observação do MCASP."],
  ["A NBC TSP 12 faculta a classificação dos juros e dividendos como operacionais, de investimento ou de financiamento, desde que adotada de forma consistente.","C","FGV","Não há consenso fora das instituições financeiras."],
  ["A aquisição de ativos por meio de arrendamento financeiro e a conversão de dívida em patrimônio líquido são exemplos de transações que não envolvem caixa.","C","VUNESP","Ao lado da troca de ativos e da assunção direta do passivo."],
  ["As transações de investimento e financiamento que não envolvem caixa devem ser incluídas na demonstração dos fluxos de caixa.","E","FUNDATEC","<b>Não devem</b> — vão para notas explicativas, quando relevantes."],
  ["Os fluxos de caixa decorrentes da aquisição e da alienação de entidades controladas devem ser apresentados separadamente e classificados como atividades de investimento.","C","CESPE","Regra expressa."],
  ["Na aquisição ou venda de controlada, deve ser divulgado o montante de caixa e equivalentes de caixa da entidade adquirida ou vendida.","C","FCC","Alínea c do rol."],
  ["Na aquisição ou venda de controlada, a divulgação deve ser individualizada por transação.","E","FGV","A divulgação é <b>agregada</b>."],
  ["A entidade deve apresentar a conciliação dos valores de caixa e equivalentes da DFC com os respectivos itens do balanço patrimonial.","C","VUNESP","Exigência de divulgação."],
  ["Caixa de R$ 100.000 e aplicações financeiras de curto prazo de R$ 50.000 no balanço correspondem a caixa e equivalentes de caixa de R$ 150.000 na DFC.","C","FUNDATEC","Soma dos componentes."],
  ["Incluídos os depósitos restituíveis e valores vinculados no caixa e equivalentes, a entidade deverá destacá-los em notas, ressaltando que tais recursos não podem ser por ela utilizados.","C","CESPE","Embora estejam em poder do ente."],
  ["A DFC deverá ser acompanhada de notas explicativas quando os itens que compõem os fluxos de caixa forem relevantes.","C","FCC","Regra geral."],
  ["Os depósitos de terceiros classificados como caixa e equivalentes são exemplo de saldos não disponíveis para uso pela entidade econômica.","C","FGV","Ao lado dos saldos de controlada com restrição legal."],
  ["Entre as informações recomendadas em nota está o montante de linhas de crédito obtidas mas não utilizadas, com as restrições ao seu uso.","C","VUNESP","Alínea a das informações adicionais."],
  ["Se o ente considerar a retenção como paga no momento da liquidação, nenhum ajuste será promovido no saldo de caixa e equivalentes.","E","FUNDATEC","Nesse caso <b>deverá</b> promover ajuste; sem ajuste é quando considera paga na baixa da obrigação."],
  ["O recebimento de um veículo em doação e o registro da respectiva depreciação afetam a geração líquida de caixa do período.","E","CESPE","Não há ingresso nem desembolso de caixa."],
  ["Lançados impostos de R$ 80.000 com metade arrecadada e liquidadas despesas de pessoal de R$ 60.000 com metade paga, a geração líquida de caixa é positiva em R$ 10.000.","C","FCC","40.000 de ingresso menos 30.000 de desembolso."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("O que é a DFC e o que são equivalentes de caixa",
      '<div class="box"><span class="bl">O que a DFC faz</span>'+
      '<p>Apresenta as <b>entradas e saídas de caixa</b> e as classifica em <b>operacional</b>, <b>de investimento</b> e <b>de financiamento</b>. Serve à <b>prestação de contas</b>, à <b>responsabilização (accountability)</b> e à <b>tomada de decisão</b>.</p>'+
      '<p><b>A DFC identificará:</b> as <b>fontes de geração</b> das entradas, os <b>itens de consumo</b> de caixa e o <b>saldo do caixa</b> na data das demonstrações.</p></div>'+
      '<div class="box"><span class="bl">Os três fluxos</span>'+
      '<ul><li><b>Operacional</b> — os fluxos das atividades <b>que não sejam de investimento nem de financiamento</b> (definição por exclusão).</li>'+
      '<li><b>Investimento</b> — <b>aquisição e venda de ativos de longo prazo</b> e outros investimentos não incluídos em equivalentes de caixa.</li>'+
      '<li><b>Financiamento</b> — atividades que mudam a <b>composição do capital próprio</b> e o <b>endividamento</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Caixa e equivalentes</span>'+
      '<p><b>Caixa</b> = numerário em espécie + depósitos bancários disponíveis.</p>'+
      '<p><b>Equivalentes de caixa</b> = aplicações financeiras <b>de curto prazo</b>, de <b>alta liquidez</b>, <b>prontamente conversíveis</b> em valor conhecido e sujeitas a <b>insignificante risco</b> de mudança de valor. Mantidos para <b>compromissos de curto prazo</b>, com vencimento típico de <b>três meses ou menos</b> da <b>data de aquisição</b>. <b>Ações de outras entidades ficam de fora</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Saldo bancário negativo</span>'+
      '<p>Empréstimo bancário é, em geral, <b>financiamento</b>. <b>Exceção:</b> saldos negativos de <b>cheque especial</b> ou <b>conta corrente garantida</b>, liquidados em curto prazo, <b>entram como componente de caixa e equivalentes</b> (reduzindo o grupo), porque compõem a gestão de caixa — os saldos <b>flutuam de devedor para credor</b>.</p></div>')
  ],
  V2:[
    sl("Elaboração, classes e estrutura",
      '<div class="box"><span class="bl">Método</span>'+
      '<p>A NBC TSP 12 <b>faculta</b> direto ou indireto para o fluxo operacional e <b>incentiva o direto</b>. Por padronização, o <b>MCASP tornou o DIRETO obrigatório</b> para todos os entes. No método direto informam-se as <b>principais classes de recebimentos e pagamentos BRUTOS</b>.</p></div>'+
      '<div class="box"><span class="bl">A equação de fechamento</span>'+
      '<p class="mn"><em>FCO + FCI + FCF = SF − SI</em></p>'+
      '<p>A soma dos três fluxos é a diferença entre os saldos <b>final</b> e <b>inicial</b> de caixa e equivalentes.</p></div>'+
      '<div class="box"><span class="bl">Classe do PCASP</span>'+
      '<p><b>Classe 6</b> (Controles da Execução do Planejamento e Orçamento), com <b>filtros</b> por naturezas orçamentárias, funções e subfunções, mais contas que marcam a <b>movimentação extraorçamentária</b> que transita pelo caixa (ex.: <b>depósito de caução</b> recebido).</p></div>'+
      '<div class="box"><span class="bl">Os quatro quadros</span>'+
      '<ul><li>Quadro <b>Principal</b>;</li><li>Quadro de <b>Transferências Recebidas e Concedidas</b>;</li>'+
      '<li>Quadro de <b>Desembolsos de Pessoal e Demais Despesas por Função</b>;</li>'+
      '<li>Quadro de <b>Juros e Encargos da Dívida</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Quadro principal — o que vai onde</span>'+
      '<p><b>Operacional · ingressos:</b> receita tributária, de contribuições, patrimonial, agropecuária, industrial, de serviços, remuneração das disponibilidades, outras derivadas e originárias, <b>transferências recebidas</b>.<br>'+
      '<b>Operacional · desembolsos:</b> pessoal e demais despesas, <b>juros e encargos da dívida</b>, transferências concedidas, outros.</p>'+
      '<p><b>Investimento · ingressos:</b> alienação de bens, amortização de empréstimos e de financiamentos concedidos.<br>'+
      '<b>Investimento · desembolsos:</b> aquisição de ativo não circulante, concessão de empréstimos e financiamentos.</p>'+
      '<p><b>Financiamento · ingressos:</b> operações de crédito, integralização do capital de empresas dependentes.<br>'+
      '<b>Financiamento · desembolsos:</b> amortização da dívida, refinanciamento da dívida.</p></div>')
  ],
  V3:[
    sl("O conteúdo de cada fluxo",
      '<div class="box"><span class="bl">Operacional — o que o número significa</span>'+
      '<p>É <b>indicador-chave</b> da extensão em que as operações são financiadas <b>a)</b> por <b>tributos</b> (direta e indiretamente) e <b>b)</b> pelos <b>destinatários dos bens e serviços</b>. Demonstra a condição de <b>manter a capacidade operacional</b>, <b>amortizar empréstimos</b>, <b>pagar dividendos</b> e <b>investir sem fontes externas</b>.</p>'+
      '<p><b>Exemplos:</b> impostos, taxas, contribuições e multas; venda de mercadorias e serviços; concessões e transferências; dotações orçamentárias; royalties e comissões; sinistros de apólice; pagamentos a fornecedores, a empregados, a outras entidades públicas para financiar operações (sem empréstimo); tributos sobre patrimônio ou renda ligados ao operacional; operações descontinuadas; solução de litígios.</p></div>'+
      '<div class="box trap"><span class="bl">Investimento — a regra de ouro</span>'+
      '<p><b>Somente saídas de caixa que resultem em ATIVO RECONHECIDO</b> nas demonstrações contábeis são atividades de investimento. Elas representam a extensão em que as saídas contribuem para a <b>futura prestação de serviços</b>.</p>'+
      '<p><b>Exemplos:</b> aquisição e venda de imobilizado, intangível e ativos de longo prazo (inclui <b>custos de desenvolvimento ativados</b> e <b>construção própria</b>); compra e venda de instrumentos patrimoniais ou de dívida de outras entidades; <b>adiantamentos e empréstimos a terceiros</b> e seus recebimentos — <b>exceto</b> os de <b>instituição financeira pública</b>.</p>'+
      '<p><b>Derivativos</b> (futuros, a termo, opção, swap): investimento, <b>salvo</b> se mantidos para negociação imediata/disponíveis para venda ou classificados como financiamento. E no <b>hedge de posição identificável</b>, seguem a classificação da <b>posição protegida</b>.</p></div>'+
      '<div class="box"><span class="bl">Financiamento</span>'+
      '<p>Serve à <b>previsão de exigências futuras dos provedores de capital</b>. <b>Exemplos:</b> debêntures, empréstimos contraídos, notas promissórias, títulos e valores, hipotecas; <b>amortização</b> de empréstimos e financiamentos; pagamentos do <b>arrendatário</b> para reduzir o passivo de <b>arrendamento mercantil financeiro</b>.</p></div>')
  ],
  V4:[
    sl("Câmbio, juros, transações sem caixa e notas",
      '<div class="box"><span class="bl">Moeda estrangeira</span>'+
      '<p>Registro na <b>moeda funcional</b>, convertendo pela <b>taxa da data do fluxo de caixa</b>. <b>Ganhos e perdas não realizados NÃO são fluxos de caixa</b> — mas o <b>efeito das mudanças cambiais sobre o caixa e equivalentes</b> vai na DFC, <b>separado</b> dos três fluxos, para <b>conciliar</b> o saldo inicial com o final.</p></div>'+
      '<div class="box trap"><span class="bl">Juros e dividendos</span>'+
      '<p><b>Instituição financeira pública:</b> juros pagos e recebidos e <b>dividendos recebidos</b> → <b>operacional</b>.</p>'+
      '<p><b>Demais entidades públicas</b> — classificação recomendada:</p>'+
      '<ul><li><b>Juros pagos e recebidos</b> → <b>OPERACIONAL</b> (compõem o resultado do exercício);</li>'+
      '<li><b>Dividendos RECEBIDOS</b> → <b>INVESTIMENTO</b>;</li>'+
      '<li><b>Dividendos PAGOS</b> → <b>FINANCIAMENTO</b> (custos da obtenção de recursos).</li></ul>'+
      '<p>A norma <b>faculta</b> outra classificação, desde que <b>consistente</b>. O <b>JSCP</b> segue os dividendos.</p></div>'+
      '<div class="box"><span class="bl">Transações que não envolvem caixa</span>'+
      '<p>Aquisição por <b>troca de ativos</b>, por <b>assunção direta do passivo</b>, por <b>arrendamento financeiro</b>; <b>conversão de dívida em PL</b>. <b>NÃO entram na DFC</b> — vão para <b>notas explicativas</b>, quando relevantes.</p></div>'+
      '<div class="box"><span class="bl">Controlada, componentes e notas</span>'+
      '<p><b>Aquisição e alienação de controlada:</b> apresentadas <b>separadamente</b> e classificadas como <b>investimento</b>; divulgação <b>agregada</b> do valor total, da parcela em caixa, do caixa da controlada e dos demais ativos e passivos.</p>'+
      '<p><b>Componentes:</b> divulgar e <b>conciliar com o BP</b>. Incluindo <b>depósitos restituíveis e valores vinculados</b>, <b>destacá-los em nota</b> — estão em poder do ente, mas <b>não podem ser por ele utilizados</b>.</p>'+
      '<p><b>Notas:</b> saldos significativos <b>não disponíveis</b> (controlada com restrição legal, depósitos de terceiros), <b>linhas de crédito não utilizadas</b>, descrição dos itens de caixa e equivalentes e a <b>conciliação com o BP</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Retenções e questões de cálculo</span>'+
      '<p>Retenção considerada paga na <b>liquidação</b> → <b>ajuste</b> no saldo de caixa. Considerada paga na <b>baixa da obrigação</b> → <b>sem ajuste</b>. Os ajustes vão para <b>notas</b>.</p>'+
      '<p>Na questão de geração líquida, só entra o que <b>entrou ou saiu do caixa</b>: impostos <b>arrecadados</b> 40.000, pessoal <b>pago</b> 30.000, doação e depreciação <b>zero</b> → <b>+10.000</b>.</p></div>')
  ]
};

var EX = {
S1:{t:"match", instr:"Ligue cada fluxo à sua definição",
  pairs:[["Operacional","Fluxos das atividades que não sejam de investimento nem de financiamento"],
         ["De investimento","Aquisição e venda de ativos de longo prazo e outros investimentos"],
         ["De financiamento","Atividades que mudam a composição do capital próprio e o endividamento"]],
  why:"O operacional é definido por exclusão."},

S2:{t:"multi", instr:"Marque o que a DFC identificará",
  options:["As fontes de geração dos fluxos de entrada de caixa",
           "Os itens de consumo de caixa durante o período",
           "O saldo do caixa na data das demonstrações contábeis",
           "O superávit financeiro do exercício"],
  answers:[0,1,2],
  why:"O superávit financeiro é do Balanço Patrimonial."},

S3:{t:"multi", instr:"Marque as características dos equivalentes de caixa",
  options:["São aplicações financeiras","De curto prazo, em regra três meses ou menos da aquisição",
           "De alta liquidez, prontamente conversíveis em dinheiro",
           "Sujeitas a insignificante risco de mudança de valor",
           "Mantidas para investimento de longo prazo",
           "Incluem, em regra, ações de outras entidades"],
  answers:[0,1,2,3],
  why:"São mantidos para compromissos de curto prazo, e ações ficam de fora."},

S4:{t:"sort", instr:"Onde entra cada situação bancária?",
  buckets:["Componente de caixa e equivalentes","Atividade de financiamento"],
  items:[["Saldo negativo de cheque especial liquidado em curto prazo",0],
         ["Saldo negativo de conta corrente garantida",0],
         ["Empréstimo bancário contraído",1]],
  why:"Os saldos que flutuam de devedor para credor compõem a gestão de caixa."},

S5:{t:"gap", instr:"Complete a regra do método de elaboração",
  before:"A DFC deve ser elaborada pelo método ",
  after:", no qual são informadas as principais classes de recebimentos e pagamentos brutos.",
  options:["direto","indireto","misto"], answer:0,
  why:"A NBC TSP 12 faculta os dois, mas o MCASP tornou o direto obrigatório."},

S6:{t:"wordbank", instr:"Monte a equação de fechamento da DFC",
  target:["FCO","+","FCI","+","FCF","=","SF","−","SI"],
  extra:["VPA","VPD","×"],
  why:"A soma dos três fluxos é a variação do caixa e equivalentes."},

S7:{t:"mc", instr:"Qual classe do PCASP é utilizada na elaboração da DFC?",
  options:["Classe 6","Classe 3","Classe 1","Classe 8"],
  answer:0,
  why:"Controles da Execução do Planejamento e Orçamento, com filtros."},

S8:{t:"multi", instr:"Marque os quadros que compõem a DFC",
  options:["Quadro Principal","Quadro de Transferências Recebidas e Concedidas",
           "Quadro de Desembolsos de Pessoal e Demais Despesas por Função",
           "Quadro de Juros e Encargos da Dívida",
           "Quadro das Contas de Compensação"],
  answers:[0,1,2,3],
  why:"O último é do Balanço Patrimonial."},

S9:{t:"sort", instr:"Classifique cada item do quadro principal",
  buckets:["Ingresso operacional","Desembolso operacional"],
  items:[["Receita tributária",0],["Remuneração das disponibilidades",0],["Transferências recebidas",0],
         ["Pessoal e demais despesas",1],["Juros e encargos da dívida",1],["Transferências concedidas",1]],
  why:"Juros e encargos da dívida ficam no operacional, não no financiamento."},

S10:{t:"sort", instr:"O fluxo é de investimento ou de financiamento?",
  buckets:["Investimento","Financiamento"],
  items:[["Alienação de bens",0],["Amortização de empréstimos concedidos",0],
         ["Aquisição de ativo não circulante",0],["Concessão de financiamentos",0],
         ["Operações de crédito",1],["Integralização do capital de empresas dependentes",1],
         ["Amortização da dívida",1],["Refinanciamento da dívida",1]],
  why:"Concedido é investimento; contraído é financiamento."},

S11:{t:"multi", instr:"O fluxo operacional líquido demonstra a condição da entidade de:",
  options:["Manter sua capacidade operacional","Amortizar empréstimos",
           "Pagar dividendos ou distribuições similares",
           "Fazer novos investimentos sem recorrer a fontes externas",
           "Aprovar créditos adicionais"],
  answers:[0,1,2,3],
  why:"Quatro condições listadas pelo MCASP."},

S12:{t:"multi", instr:"Marque os fluxos das atividades OPERACIONAIS",
  options:["Recebimentos de impostos, taxas, contribuições e multas",
           "Recebimentos de dotações ou autorizações orçamentárias",
           "Pagamentos a fornecedores de mercadorias e serviços",
           "Pagamentos a outras entidades do setor público para financiar suas operações",
           "Recebimentos e pagamentos decorrentes da solução de litígios",
           "Aquisição de ativo imobilizado"],
  answers:[0,1,2,3,4],
  why:"A última é de investimento."},

S13:{t:"gap", instr:"Complete a regra de ouro do fluxo de investimento",
  before:"Somente saídas de caixa que resultam em ",
  after:" nas demonstrações contábeis são passíveis de classificação como atividades de investimento.",
  options:["ativo reconhecido","despesa empenhada","passivo assumido"], answer:0,
  why:"Elas contribuem para a futura prestação de serviços."},

S14:{t:"mc", instr:"Empréstimos concedidos a terceiros por instituição financeira pública são classificados como:",
  options:["Atividades operacionais","Atividades de investimento",
           "Atividades de financiamento","Transações sem caixa"],
  answer:0,
  why:"É a exceção expressa da regra dos empréstimos concedidos."},

S15:{t:"gap", instr:"Complete a regra do hedge",
  before:"Quando o contrato for contabilizado como hedge de posição identificável, seus fluxos devem ser classificados ",
  after:" os fluxos da posição protegida.",
  options:["do mesmo modo que","de forma oposta a","separadamente d"], answer:0,
  why:"Garante consistência na apresentação."},

S16:{t:"multi", instr:"Marque os fluxos das atividades de FINANCIAMENTO",
  options:["Caixa recebido de emissão de debêntures","Caixa recebido de empréstimos contraídos",
           "Caixa recebido de notas promissórias e hipotecas",
           "Amortização de empréstimos e financiamentos contraídos",
           "Pagamentos do arrendatário para redução do passivo de arrendamento mercantil financeiro",
           "Recebimentos pela venda de ativo imobilizado"],
  answers:[0,1,2,3,4],
  why:"A última é de investimento."},

S17:{t:"gap", instr:"Complete a regra dos fluxos em moeda estrangeira",
  before:"Devem ser registrados na moeda funcional, convertendo-se o valor à taxa cambial ",
  after:".",
  options:["na data da ocorrência do fluxo de caixa","do fim do exercício","média do período"], answer:0,
  why:"Ganhos e perdas não realizados não são fluxos de caixa."},

S18:{t:"sort", instr:"Classificação recomendada para as entidades públicas em geral",
  buckets:["Operacional","Investimento","Financiamento"],
  items:[["Juros pagos",0],["Juros recebidos",0],["Dividendos recebidos",1],["Dividendos pagos",2]],
  why:"Em instituição financeira pública, juros e dividendos recebidos são todos operacionais."},

S19:{t:"mc", instr:"Como se classificam os Juros sobre Capital Próprio?",
  options:["Com a mesma classificação dada aos dividendos","Sempre como operacionais",
           "Sempre como financiamento","Fora da DFC"],
  answer:0,
  why:"Observação expressa do MCASP."},

S20:{t:"multi", instr:"Marque as transações que NÃO envolvem caixa ou equivalentes",
  options:["Aquisição de ativos por troca de ativos",
           "Aquisição de ativos por assunção direta do respectivo passivo",
           "Aquisição de ativos por arrendamento financeiro",
           "Conversão de dívida com terceiros em patrimônio líquido",
           "Pagamento de fornecedores à vista"],
  answers:[0,1,2,3],
  why:"Elas não entram na DFC — vão para notas explicativas."},

S21:{t:"mc", instr:"Os fluxos decorrentes da aquisição e da alienação de entidades controladas são classificados como:",
  options:["Atividades de investimento, apresentadas separadamente","Atividades operacionais",
           "Atividades de financiamento","Transações sem caixa"],
  answer:0,
  why:"Com divulgação agregada dos quatro itens exigidos."},

S22:{t:"multi", instr:"O que divulgar, de modo agregado, na aquisição ou venda de controlada?",
  options:["O valor total pago na aquisição ou recebido na venda",
           "A parcela paga ou recebida exclusivamente em caixa e equivalentes",
           "O montante de caixa e equivalentes da controlada adquirida ou vendida",
           "O montante dos ativos e passivos, exceto caixa e equivalentes, por principais classificações",
           "A relação nominal dos acionistas"],
  answers:[0,1,2,3],
  why:"Quatro alíneas do rol."},

S23:{t:"sort", instr:"Retenções — há ajuste no saldo de caixa e equivalentes?",
  buckets:["Exige ajuste","Não exige ajuste"],
  items:[["Retenção considerada paga no momento da liquidação",0],
         ["Retenção considerada paga apenas na baixa da obrigação",1]],
  why:"No primeiro caso há saldo vinculado a deduzir; os ajustes vão para notas."},

S24:{t:"mc", instr:"Impostos lançados R$ 80.000 com metade arrecadada; pessoal empenhado e liquidado R$ 60.000 com metade paga; veículo doado R$ 72.000 com R$ 12.000 de depreciação. Geração líquida de caixa?",
  options:["Positiva em R$ 10.000","Positiva em R$ 20.000",
           "Negativa em R$ 20.000","Positiva em R$ 50.000"],
  answer:0,
  why:"40.000 arrecadados − 30.000 pagos. Doação e depreciação não tocam o caixa."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Pública 12","https://www.tecconcursos.com.br/s/Q2qrYV","Q2qrYV"],
  ["Caderno FCC — Contabilidade Pública 12","https://www.tecconcursos.com.br/s/Q2qrYr","Q2qrYr"],
  ["Caderno FGV — Contabilidade Pública 12","https://www.tecconcursos.com.br/s/Q2qrZ1","Q2qrZ1"],
  ["Caderno VUNESP — Contabilidade Pública 12","https://www.tecconcursos.com.br/s/Q2qrZ8","Q2qrZ8"]
];
var TECNOTA = "Na DFC as bancas cobram sobretudo classificação: em qual dos três fluxos cai cada evento. Antes das questões, revise as duas listas que mais derrubam — juros e dividendos (operacional, investimento e financiamento) e os empréstimos concedidos × contraídos. E nos cálculos, pergunte sempre: entrou ou saiu dinheiro do caixa?";

var UNITS = [
  {n:1, title:"A DFC e os equivalentes de caixa", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Os três fluxos, caixa e equivalentes",   xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · os três fluxos",              xp:25, data:["S1","S2","T0","T1","T2","T3"]},
    {id:"K3", type:"drill",  title:"Praticar · equivalentes de caixa",       xp:25, data:["S3","S4","T4","T5","T6","T7"]},
    {id:"K4", type:"drill",  title:"Praticar · saldo bancário negativo",     xp:25, data:["S5","S6","T8","T9","T10","T11"]},
    {id:"K5", type:"flash",  title:"Flashcards · conceito e equivalentes",   xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12]}
  ]},
  {n:2, title:"Elaboração e estrutura", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Método direto, classe 6 e os quatro quadros", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · método e fechamento",         xp:25, data:["S7","S8","T12","T13","T14","T15"]},
    {id:"K8", type:"drill",  title:"Praticar · o quadro principal",          xp:25, data:["S9","S10","T16","T17","T18","T19"]},
    {id:"K9", type:"drill",  title:"Praticar · ingressos e desembolsos",     xp:25, data:["S11","S12","T20","T21","T22","T23"]},
    {id:"K10",type:"flash",  title:"Flashcards · elaboração e estrutura",    xp:15, data:[13,14,15,16,17,18,19,20,21,22]}
  ]},
  {n:3, title:"O conteúdo de cada fluxo", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Operacional, investimento e financiamento", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · atividades operacionais",     xp:25, data:["S13","S14","T24","T25","T26","T27"]},
    {id:"K13",type:"drill",  title:"Praticar · atividades de investimento",  xp:25, data:["S15","S16","T28","T29","T30","T31","T32"]},
    {id:"K14",type:"drill",  title:"Praticar · atividades de financiamento", xp:25, data:["S17","S19","T33","T34","T35","T36"]},
    {id:"K15",type:"flash",  title:"Flashcards · conteúdo dos fluxos",       xp:15, data:[23,24,25,26,27,28,29,30,31,32,33,34]}
  ]},
  {n:4, title:"Câmbio, juros, notas e cálculo", cvar:"u4", lessons:[
    {id:"K16",type:"teoria", title:"Moeda estrangeira, dividendos e divulgação", xp:10, data:"V4"},
    {id:"K17",type:"drill",  title:"Praticar · câmbio, juros e dividendos",  xp:25, data:["S18","S20","T37","T38","T39","T40","T41","T42","T43"]},
    {id:"K18",type:"drill",  title:"Praticar · controlada e divulgação",     xp:25, data:["S21","S22","T44","T45","T46","T47","T48","T49","T50"]},
    {id:"K19",type:"drill",  title:"Praticar · retenções e geração de caixa", xp:25, data:["S23","S24","T51","T52","T53","T54","T55","T56","T57"]},
    {id:"K20",type:"flash",  title:"Flashcards · divulgação e pegadinhas",   xp:15, data:[35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]}
  ]},
  {n:5, title:"Fixação", cvar:"u5", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                xp:60, data:null},
    {id:"K21", type:"missao", title:"Missão TEC Concursos",                  xp:15, data:null},
    {id:"K22", type:"prova",  title:"Simulado cronometrado",                 xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo. A DFC apresenta os fluxos de caixa (entradas e saídas) e os classifica em <b>operacional</b>, <b>de investimento</b> e <b>de financiamento</b>.</p><p>A finalidade, segundo o Resumo: permitir ao usuário avaliar como a entidade do setor público <b>obteve recursos</b> para financiar suas atividades e <b>como esses recursos foram utilizados</b>, servindo à prestação de contas, à responsabilização (accountability) e à tomada de decisão.</p><p class='fb-fonte'>Resumo 12 · <i>Demonstração dos Fluxos de Caixa</i></p>",
1:"<p>Certo — são os três itens do quadro O QUE A DFC IDENTIFICARÁ: as <b>fontes de geração dos fluxos de entrada de caixa</b>; os <b>itens de consumo de caixa</b> durante o período das demonstrações contábeis; e o <b>saldo do caixa</b> na data das demonstrações contábeis.</p><p>De onde veio, no que foi consumido e quanto sobrou — é assim que o material resume a demonstração.</p><p class='fb-fonte'>Resumo 12 · <i>O que a DFC identificará?</i></p>",
2:"<p>Certo — é o conceito residual do esquema do Resumo: fluxos operacionais são os <b>provenientes das atividades da entidade que NÃO sejam de investimento e de financiamento</b>.</p><p>Por isso a ordem de análise em prova é olhar primeiro se o fato é de investimento (aquisição e venda de ativos de longo prazo e outros investimentos não incluídos em equivalentes de caixa) ou de financiamento (mudanças na composição do capital próprio e no endividamento). Não sendo nenhum dos dois, é operacional.</p><p class='fb-fonte'>Resumo 12 · <i>Esquema Fluxo de Caixa — operacional, investimento, financiamento</i></p>",
3:"<p>Errado — essa é a definição do fluxo de <b>financiamento</b>: os provenientes das atividades que resultam em mudanças na <b>composição do capital próprio e no endividamento</b> da entidade.</p><p>Os fluxos <b>de investimento</b>, no esquema do Resumo, são os provenientes das atividades de <b>aquisição e venda de ativos de longo prazo</b> e de <b>outros investimentos não incluídos em equivalentes de caixa</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Esquema Fluxo de Caixa — operacional, investimento, financiamento</i></p>",
4:"<p>Certo — é a definição literal. Equivalentes de caixa são <b>aplicações financeiras de curto prazo</b>, de <b>alta liquidez</b>, <b>prontamente conversíveis em valor conhecido de caixa</b> e sujeitas a <b>insignificante risco de mudança de valor</b>.</p><p>E <b>caixa</b>, lembra o Resumo, é o numerário em espécie (dinheiro) e os depósitos bancários disponíveis. O esquema do material repete os quatro requisitos, com o curto prazo qualificado como <b>três meses ou menos</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Equivalentes de Caixa</i></p>",
5:"<p>Errado na finalidade. Os equivalentes de caixa são mantidos com a finalidade de atender a <b>compromissos de caixa de CURTO prazo</b>, e <b>não para investimento ou outros fins</b>.</p><p>É o que explica os demais requisitos: alta liquidez, conversão pronta em quantia conhecida e risco insignificante de mudança de valor. Nada disso combina com aplicação de longo prazo.</p><p class='fb-fonte'>Resumo 12 · <i>Equivalentes de Caixa — EXPLICANDO MELHOR</i></p>",
6:"<p>Certo. O Resumo diz que o investimento normalmente se qualifica como equivalente de caixa <b>somente quando tiver vencimento de curto prazo de, por exemplo, três meses ou menos a partir da data de aquisição</b>.</p><p>Repare no marco inicial: conta-se da <b>data de aquisição</b>, e não da data do balanço. Essa troca é uma das pegadinhas mais comuns do tema.</p><p class='fb-fonte'>Resumo 12 · <i>Equivalentes de Caixa — EXPLICANDO MELHOR</i></p>",
7:"<p>Errado — inverteu a regra. O Resumo é expresso: <b>em regra, os investimentos em ações de outras entidades são EXCLUÍDOS dos equivalentes de caixa</b>.</p><p>A razão está nos requisitos: ação não tem valor conhecido de conversão nem risco insignificante de mudança de valor.</p><p class='fb-fonte'>Resumo 12 · <i>Equivalentes de Caixa — EXPLICANDO MELHOR</i></p>",
8:"<p>Certo — é o item 10 da NBC TSP 12 reproduzido no quadro ATENÇÃO. Saldos bancários negativos decorrentes de empréstimos obtidos por instrumentos como <b>cheques especiais</b> ou <b>contas correntes garantidas</b>, liquidados em <b>curto espaço de tempo</b>, compõem a gestão de caixa da entidade e são <b>incluídos como componente de caixa e equivalentes de caixa</b>.</p><p>O COMENTÁRIO do Resumo completa: entram <b>reduzindo</b> o montante do grupo. A característica desses acordos é que os saldos <b>flutuam de devedor para credor</b>.</p><p class='fb-fonte'>Resumo 12 · <i>ATENÇÃO — NBC TSP 12, item 10</i></p>",
9:"<p>Errado. O item 10 da NBC TSP 12, no quadro ATENÇÃO do Resumo, diz que os empréstimos bancários são geralmente considerados <b>atividades de financiamento</b>.</p><p>A exceção é a dos saldos bancários negativos de cheque especial ou conta corrente garantida liquidados em curto espaço de tempo — esses compõem a gestão de caixa e entram como componente de <b>caixa e equivalentes de caixa</b>, não como operacionais.</p><p class='fb-fonte'>Resumo 12 · <i>ATENÇÃO — NBC TSP 12, item 10</i></p>",
10:"<p>Certo. O Resumo é direto: a DFC <b>deve ser elaborada pelo método direto</b>, evidenciando as alterações de caixa e equivalentes de caixa do exercício de referência nos três fluxos.</p><p>O quadro ATENÇÃO explica a origem: a NBC TSP 12 <b>faculta</b> o método direto ou o indireto para o fluxo operacional, <b>incentivando o direto</b>; e, <b>para fins de padronização</b>, optou-se pelo direto como <b>obrigatório para todos os entes da Federação</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Elaboração da DFC</i></p>",
11:"<p>Errado duas vezes. A NBC TSP 12 <b>faculta</b> a utilização alternativa do método direto <b>ou</b> indireto para o fluxo das atividades operacionais — não obriga nenhum — e, quando manifesta preferência, é para <b>incentivar o direto</b>.</p><p>A obrigatoriedade existe, mas vem da <b>padronização</b> adotada: optou-se pelo <b>método direto</b> como obrigatório para todos os entes da Federação.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades Operacionais — ATENÇÃO</i></p>",
12:"<p>Certo, na literalidade do quadro ATENÇÃO: no <b>método direto</b> são informadas as <b>principais classes de recebimentos e pagamentos brutos</b>.</p><p><b>Brutos</b> é a palavra-chave: mostram-se as entradas e saídas em si, e não um resultado ajustado. Por isso o método direto é o mais informativo e foi o escolhido como obrigatório na padronização.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades Operacionais — ATENÇÃO</i></p>",
13:"<p>Certo — é a fórmula que o Resumo destaca: <b>FCO + FCI + FCF = SF – SI</b>.</p><p>Ou seja, a soma dos três fluxos de caixa deverá corresponder à diferença entre os saldos <b>final</b> e <b>inicial</b> de Caixa e Equivalentes de Caixa do exercício de referência. No quadro principal isso aparece como <i>Geração Líquida de Caixa e Equivalente de Caixa (I + II + III)</i>, seguida do caixa inicial e do caixa final.</p><p class='fb-fonte'>Resumo 12 · <i>Elaboração da DFC</i></p>",
14:"<p>Certo. Para a elaboração da DFC são utilizadas as contas da <b>classe 6 (Controles da Execução do Planejamento e Orçamento)</b> do PCASP, com filtros pelas <b>naturezas orçamentárias</b> de receitas e despesas, por <b>funções e subfunções</b> e por outros filtros e contas necessários para marcar a <b>movimentação extraorçamentária</b> que transita pela conta Caixa e Equivalentes de Caixa.</p><p>O exemplo do material: o <b>Depósito Caução</b> da empresa ABC, vencedora da licitação da escola, é recurso extraorçamentário — será devolvido ao fim da obra —, mas transita pelo caixa e precisa aparecer na DFC.</p><p class='fb-fonte'>Resumo 12 · <i>Classe de contas utilizadas na elaboração da DFC</i></p>",
15:"<p>Certo — são os quatro componentes que o Resumo lista: <b>Quadro Principal</b>, <b>Quadro de Transferências Recebidas e Concedidas</b>, <b>Quadro de Desembolsos de Pessoal e Demais Despesas por Função</b> e <b>Quadro de Juros e Encargos da Dívida</b>.</p><p>Repare que os três quadros complementares abrem justamente linhas do fluxo <b>operacional</b> do quadro principal: transferências, pessoal e demais despesas, e juros e encargos da dívida.</p><p class='fb-fonte'>Resumo 12 · <i>Composição da DFC</i></p>",
16:"<p>Certo — <b>Transferências recebidas</b> fecha a lista de <b>ingressos das atividades operacionais</b> no quadro principal da DFC.</p><p>A lista completa de ingressos operacionais no modelo do Resumo: Receita Tributária, Receita de Contribuições, Receita Patrimonial, Receita Agropecuária, Receita Industrial, Receita de Serviços, Remuneração das Disponibilidades, Outras Receitas Derivadas e Originárias e Transferências recebidas.</p><p class='fb-fonte'>Resumo 12 · <i>Composição da DFC — quadro principal</i></p>",
17:"<p>Errado no fluxo. No quadro principal do Resumo, <b>Juros e encargos da dívida</b> figura entre os <b>DESEMBOLSOS das atividades OPERACIONAIS</b>, ao lado de Pessoal e demais despesas, Transferências concedidas e Outros desembolsos operacionais.</p><p>Casa com a recomendação do tópico de juros e dividendos: para as entidades públicas, os <b>juros pagos e recebidos</b> são classificados como fluxos de caixa <b>operacionais</b>, porque compõem o cálculo do resultado do exercício. Nos desembolsos de financiamento aparecem a amortização e o refinanciamento da dívida.</p><p class='fb-fonte'>Resumo 12 · <i>Composição da DFC — quadro principal</i></p>",
18:"<p>Certo — <b>Alienação de bens</b> abre os <b>ingressos das atividades de investimento</b> no quadro principal.</p><p>Os demais ingressos de investimento listados: Amortização de empréstimos concedidos, Amortização de financiamentos concedidos e Outros ingressos de investimentos.</p><p class='fb-fonte'>Resumo 12 · <i>Composição da DFC — quadro principal</i></p>",
19:"<p>Certo — <b>Aquisição de ativo não circulante</b> abre os <b>desembolsos das atividades de investimento</b>, seguida de Concessão de empréstimos, Concessão de financiamentos e Outros desembolsos de investimentos.</p><p>Bate com a regra do MCASP que o Resumo traz: <b>somente saídas de caixa que resultam em ativo reconhecido</b> nas demonstrações contábeis podem ser classificadas como atividades de investimento.</p><p class='fb-fonte'>Resumo 12 · <i>Composição da DFC — quadro principal</i></p>",
20:"<p>Certo — <b>Operações de crédito</b> abre os <b>ingressos das atividades de financiamento</b> no quadro principal, junto com a Integralização do capital social de empresas dependentes e Outros ingressos de financiamento.</p><p>Encaixa no conceito do esquema inicial: financiamento é o fluxo que resulta em mudanças na composição do <b>capital próprio</b> e no <b>endividamento</b> da entidade.</p><p class='fb-fonte'>Resumo 12 · <i>Composição da DFC — quadro principal</i></p>",
21:"<p>Errado no fluxo. <b>Amortização da dívida</b> e <b>Refinanciamento da dívida</b> são desembolsos das atividades de <b>FINANCIAMENTO</b> no quadro principal, ao lado de Outros desembolsos de financiamentos.</p><p>Nos desembolsos de <b>investimento</b> estão Aquisição de ativo não circulante, Concessão de empréstimos, Concessão de financiamentos e Outros desembolsos de investimentos.</p><p class='fb-fonte'>Resumo 12 · <i>Composição da DFC — quadro principal</i></p>",
22:"<p>Certo, nos termos do MCASP como o Resumo traz: o montante dos fluxos de caixa líquidos das atividades operacionais é <b>indicador-chave</b> da extensão na qual as operações da entidade são financiadas <b>(a) por meio de tributos</b>, direta e indiretamente, e <b>(b) pelos destinatários dos bens e serviços</b> oferecidos pela entidade.</p><p>O material complementa: os fluxos operacionais consolidados do setor público indicam a proporção em que o governo vem financiando suas atividades correntes pela tributação e outras cobranças.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades Operacionais</i></p>",
23:"<p>Certo — são os quatro itens do quadro do Resumo. O montante dos fluxos operacionais auxilia a demonstrar a condição da entidade de <b>manter sua capacidade operacional</b>, <b>amortizar (pagar) empréstimos</b>, <b>pagar dividendos ou distribuições similares</b> e <b>fazer novos investimentos sem recorrer a fontes externas de financiamento</b>.</p><p>O exemplo do material: governo cuja receita tributária cobre todas as despesas correntes — salários, materiais e serviços — está financiando suas atividades principalmente pela tributação.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades Operacionais</i></p>",
24:"<p>Errado no fluxo. <b>Recebimentos de caixa decorrentes de impostos, taxas, contribuições e multas</b> abre justamente a lista de exemplos de fluxos das atividades <b>OPERACIONAIS</b> do Resumo.</p><p>Coerente com a ideia de que o fluxo operacional mede a extensão em que as operações são financiadas <b>por meio de tributos</b> e pelos destinatários dos bens e serviços.</p><p class='fb-fonte'>Resumo 12 · <i>Exemplos de fluxo de caixa das atividades operacionais</i></p>",
25:"<p>Certo, com o parêntese que o Resumo faz questão de registrar: <b>pagamentos em caixa a outras entidades do setor público para financiar suas operações (não inclui empréstimo)</b> são fluxos <b>operacionais</b>.</p><p>A ressalva é decisiva: se houvesse <b>empréstimo</b>, o fluxo migraria para investimento (adiantamentos e empréstimos concedidos a terceiros) — salvo quando feitos por instituição financeira pública.</p><p class='fb-fonte'>Resumo 12 · <i>Exemplos de fluxo de caixa das atividades operacionais</i></p>",
26:"<p>Certo — é o último exemplo da lista de fluxos operacionais do Resumo: <b>recebimentos ou pagamentos em caixa decorrentes da solução de litígios</b>.</p><p>Logo antes dele o material lista os recebimentos ou pagamentos decorrentes de <b>operações descontinuadas</b> e os de contratos mantidos para <b>negociação imediata ou disponíveis para venda</b> — todos operacionais.</p><p class='fb-fonte'>Resumo 12 · <i>Exemplos de fluxo de caixa das atividades operacionais</i></p>",
27:"<p>Certo, na literalidade do MCASP transcrita pelo Resumo: <b>somente saídas de caixa que resultam em ativo reconhecido nas demonstrações contábeis</b> são passíveis de classificação como atividades de investimento.</p><p>É um filtro forte: gasto que não vira ativo no balanço não é investimento na DFC, ainda que o senso comum orçamentário o chamasse assim.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades de Investimento</i></p>",
28:"<p>Certo. Nos termos do MCASP, os fluxos de caixa das atividades de investimento representam a <b>extensão em que as saídas de caixa são realizadas com a finalidade de contribuir para a FUTURA prestação de serviços</b> pela entidade.</p><p>Compare com os outros dois: o operacional mostra como as atividades <b>correntes</b> são financiadas; o de financiamento serve à previsão de exigências de fluxos futuros pelos <b>provedores de capital</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades de Investimento</i></p>",
29:"<p>Certo. O primeiro exemplo de fluxo de investimento do Resumo são os pagamentos em caixa para <b>aquisição de ativo imobilizado, intangível e outros ativos de longo prazo</b>, e ele diz expressamente que esses pagamentos <b>incluem os custos de desenvolvimento ativados e ativos imobilizados de construção própria</b>.</p><p>Faz sentido diante do filtro geral: são saídas de caixa que resultam em <b>ativo reconhecido</b> nas demonstrações contábeis.</p><p class='fb-fonte'>Resumo 12 · <i>Exemplos de fluxo de caixa das atividades de investimento</i></p>",
30:"<p>Errado justamente na exceção. A lista do Resumo classifica como investimento os adiantamentos em caixa e empréstimos concedidos a terceiros <b>EXCETO aqueles feitos por instituição financeira pública</b>.</p><p>A mesma ressalva vale para o outro lado: os recebimentos por liquidação de adiantamentos ou amortização de empréstimos concedidos a terceiros, <b>exceto</b> os de instituição financeira pública. Para esta, emprestar é a atividade-fim, logo o fluxo é operacional.</p><p class='fb-fonte'>Resumo 12 · <i>Exemplos de fluxo de caixa das atividades de investimento</i></p>",
31:"<p>Errado pelo <b>sempre</b>. Pagamentos e recebimentos por contratos <b>futuros, a termo, de opção e swap</b> são de investimento <b>exceto</b> quando tais contratos forem <b>mantidos para negociação imediata ou disponíveis para venda</b>, ou quando os pagamentos/recebimentos forem <b>classificados como atividades de financiamento</b>.</p><p>Há ainda a regra do <b>hedge</b>: contabilizado o contrato como proteção de posição identificável, seus fluxos seguem a classificação da posição protegida.</p><p class='fb-fonte'>Resumo 12 · <i>Exemplos de fluxo de caixa das atividades de investimento</i></p>",
32:"<p>Certo. Quando o contrato for contabilizado como <b>hedge de posição identificável</b>, os fluxos de caixa do contrato devem ser classificados <b>do mesmo modo como foram classificados os fluxos de caixa da posição que estiver sendo protegida</b>.</p><p>O exemplo do Resumo: contrato de câmbio que protege a posição de uma dívida em moeda estrangeira. Se a dívida está em <b>Atividade Operacional</b>, os fluxos do hedge também vão para <b>Atividade Operacional</b> — é o que garante consistência entre a proteção e o protegido.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades de Investimento — hedge</i></p>",
33:"<p>Certo, na literalidade do Resumo: a divulgação dos fluxos de caixa decorrentes das atividades de financiamento é importante para a <b>previsão de exigências de fluxos futuros por parte dos provedores de capital</b>.</p><p>Quem financiou a entidade quer saber quando e quanto será chamado de volta — daí a utilidade específica desse bloco.</p><p class='fb-fonte'>Resumo 12 · <i>Atividades de Financiamento</i></p>",
34:"<p>Certo — os três constam da lista de exemplos de fluxos de <b>financiamento</b>: caixa recebido proveniente da emissão de <b>debêntures</b>, de <b>notas promissórias</b> e de <b>hipotecas</b>.</p><p>A lista traz ainda o caixa recebido de <b>empréstimos contraídos</b> e de <b>títulos e valores</b>, a <b>amortização</b> de empréstimos e financiamentos contraídos e os pagamentos do arrendatário para redução do passivo de arrendamento mercantil financeiro.</p><p class='fb-fonte'>Resumo 12 · <i>Exemplos de fluxo de caixa das atividades de financiamento</i></p>",
35:"<p>Errado no fluxo. Os <b>pagamentos em caixa por arrendatário, para redução do passivo relativo a arrendamento mercantil financeiro</b>, encerram a lista de exemplos de fluxos das atividades de <b>FINANCIAMENTO</b> do Resumo.</p><p>Não confunda com outra regra do material: a <b>aquisição</b> de ativo por meio de arrendamento financeiro é transação que <b>não envolve caixa</b> e, por isso, fica fora da DFC, indo para as notas explicativas. O que entra como financiamento é o <b>pagamento</b> que reduz o passivo.</p><p class='fb-fonte'>Resumo 12 · <i>Exemplos de fluxo de caixa das atividades de financiamento</i></p>",
36:"<p>Certo. Os fluxos de caixa decorrentes de transações em moeda estrangeira devem ser registrados na <b>moeda funcional</b> da entidade, convertendo-se o valor à <b>taxa cambial na data da ocorrência do fluxo de caixa</b>.</p><p>O exemplo do Resumo: venda de mercadorias em dólar por entidade cuja moeda funcional é o real — converte-se pela taxa vigente <b>naquela data</b>, e não pela taxa do fim do período.</p><p class='fb-fonte'>Resumo 12 · <i>Fluxos de caixa em moeda estrangeira</i></p>",
37:"<p>Errado. O Resumo é categórico: ganhos e perdas <b>não realizados</b> (não transformados em dinheiro) resultantes de mudanças nas taxas de câmbio <b>NÃO são fluxos de caixa</b>.</p><p>Não realizado significa que nada entrou nem saiu do caixa — logo, nada a registrar como fluxo. O que a norma exige é apresentar o <b>efeito</b> dessas mudanças sobre o caixa e equivalentes mantidos em moeda estrangeira, em linha separada, só para conciliar começo e fim do período.</p><p class='fb-fonte'>Resumo 12 · <i>Fluxos de caixa em moeda estrangeira</i></p>",
38:"<p>Certo. O efeito das mudanças nas taxas cambiais sobre o caixa e equivalentes de caixa mantidos ou devidos em moeda estrangeira deve ser apresentado na DFC, <b>separadamente</b> dos fluxos operacionais, de investimento e de financiamento, a fim de <b>conciliar o caixa e equivalentes no começo e no fim do período</b>.</p><p>O exemplo do Resumo: órgão com US$ 100.000 no início de 2023 que, com a valorização do dólar, fecha o ano com R$ 120.000 — esse <b>ganho não realizado de R$ 20.000</b> vai em linha própria, fora dos três fluxos.</p><p class='fb-fonte'>Resumo 12 · <i>Fluxos de caixa em moeda estrangeira</i></p>",
39:"<p>Certo — é o primeiro quadro do tópico. Em <b>instituições financeiras públicas</b>, os <b>juros pagos e recebidos</b> e os <b>dividendos ou distribuições similares recebidos</b> são comumente classificados como fluxos de caixa <b>operacionais</b>.</p><p>Faz sentido: para elas, juros e dividendos são a própria atividade-fim. Para as demais entidades públicas, os dividendos recebidos migram para <b>investimento</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Juros e Dividendos</i></p>",
40:"<p>Errado no fluxo recomendado. Para as entidades públicas em geral, recomenda-se classificar os <b>juros pagos e recebidos</b> como fluxos das atividades <b>OPERACIONAIS</b>.</p><p>O motivo dado pelo Resumo: para fins de padronização e consolidação das contas públicas, e considerando que os <b>juros pagos e recebidos compõem o cálculo do resultado do exercício</b>. É o que explica a linha <i>Juros e encargos da dívida</i> estar nos desembolsos operacionais do quadro principal.</p><p class='fb-fonte'>Resumo 12 · <i>Juros e Dividendos</i></p>",
41:"<p>Certo — é o quadro da classificação recomendada para as entidades públicas: <b>dividendos recebidos = fluxos de investimento</b>; <b>dividendos pagos = fluxos de financiamento</b>.</p><p>A justificativa do Resumo para os pagos: são <b>custos da obtenção de recursos financeiros</b>. Guarde o quadro inteiro: juros pagos e recebidos, operacional; dividendos recebidos, investimento; dividendos pagos, financiamento.</p><p class='fb-fonte'>Resumo 12 · <i>Juros e Dividendos</i></p>",
42:"<p>Certo — é a OBS que fecha o tópico: os <b>Juros Sobre Capital Próprio (JSCP)</b> possuem a <b>mesma classificação dada aos dividendos</b>.</p><p>Na prática, então: JSCP <b>recebidos</b> seguem para investimento e JSCP <b>pagos</b>, para financiamento, exatamente como os dividendos.</p><p class='fb-fonte'>Resumo 12 · <i>Juros e Dividendos — OBS</i></p>",
43:"<p>Certo. Como <b>não há consenso</b> sobre a classificação desses fluxos para os outros tipos de entidades, a NBC TSP 12 <b>faculta</b> a classificação como atividades <b>operacionais, de investimento ou de financiamento</b>, desde que a classificação seja <b>adotada de forma consistente</b>.</p><p>A faculdade é da norma; a <b>recomendação</b> do material, para padronização e consolidação das contas públicas, é a do quadro: juros operacionais, dividendos recebidos em investimento e dividendos pagos em financiamento.</p><p class='fb-fonte'>Resumo 12 · <i>Juros e Dividendos</i></p>",
44:"<p>Certo — ambos estão na lista de exemplos do Resumo: a <b>aquisição de ativos por meio de arrendamento financeiro</b> e a <b>conversão de dívida com terceiros (passivo) em patrimônio líquido</b>.</p><p>A lista completa traz ainda a aquisição de ativos por <b>troca de ativos</b> e por <b>assunção direta do respectivo passivo</b>. São atividades de investimento e de financiamento que <b>não impactam diretamente os fluxos de caixa correntes</b>, embora afetem a estrutura de capital e de ativos da entidade.</p><p class='fb-fonte'>Resumo 12 · <i>Transações que não envolvem caixa ou equivalentes de caixa</i></p>",
45:"<p>Errado — o quadro ATENÇÃO diz o contrário. Transações de investimento e de financiamento que <b>não envolvam o uso de caixa</b> ou equivalentes de caixa <b>NÃO devem ser incluídas</b> na demonstração dos fluxos de caixa.</p><p>O destino delas são as <b>notas explicativas</b>, quando relevantes. O exemplo do material: aquisições financiadas de bens (investimento) e arrendamento financeiro (financiamento) ficam fora da DFC e são divulgados em nota.</p><p class='fb-fonte'>Resumo 12 · <i>Transações que não envolvem caixa — ATENÇÃO</i></p>",
46:"<p>Certo — é o esquema do Resumo: os fluxos de caixa <b>agregados</b> decorrentes da <b>aquisição e da alienação de entidades controladas</b> ou outras unidades operacionais devem ser apresentados <b>separadamente</b> e classificados como <b>atividades de investimento</b>.</p><p>Duas exigências cumulativas, portanto: apresentação em separado e classificação em investimento.</p><p class='fb-fonte'>Resumo 12 · <i>Aquisição e venda de controlada</i></p>",
47:"<p>Certo — item (c) da lista do Resumo: deve ser divulgado o <b>montante de caixa e equivalentes de caixa</b> da entidade controlada (ou outra unidade operacional) <b>adquirida ou vendida</b>.</p><p>A lista completa: (a) valor total pago na aquisição ou recebido na venda; (b) parcela desse total paga ou recebida exclusivamente em caixa e equivalentes; (c) o caixa e equivalentes da adquirida ou vendida; e (d) o montante dos demais ativos e passivos reconhecidos, resumido pelas principais classificações.</p><p class='fb-fonte'>Resumo 12 · <i>Aquisição e venda de controlada</i></p>",
48:"<p>Errado. A entidade deve divulgar esses itens <b>de modo AGREGADO</b>, tanto em relação à aquisição quanto à venda ocorridas no período.</p><p>O quadro do Resumo explica o termo: divulgar de modo agregado é apresentar as informações <b>de forma conjunta, sem fornecer detalhes específicos e individualizados</b> — uma visão geral, um resumo. Exigir individualização por transação inverte a regra.</p><p class='fb-fonte'>Resumo 12 · <i>Aquisição e venda de controlada — o que significa divulgar de modo agregado</i></p>",
49:"<p>Certo. A entidade deve divulgar os <b>componentes</b> de caixa e equivalentes de caixa e apresentar a <b>conciliação</b> dos valores da DFC com os <b>respectivos itens apresentados no balanço patrimonial</b>.</p><p>A conciliação reaparece entre as informações recomendadas em nota explicativa, ali com o acréscimo de <b>justificar eventuais diferenças</b> entre os dois demonstrativos.</p><p class='fb-fonte'>Resumo 12 · <i>Componente de caixa e equivalentes de caixa</i></p>",
50:"<p>Certo — é o exemplo numérico do Resumo, com estes mesmos valores. Balanço Patrimonial com <b>Caixa de R$ 100.000</b> e <b>Aplicações financeiras de curto prazo de R$ 50.000</b>.</p><p>Na DFC a entidade apresenta a <b>soma</b> desses valores como <b>Caixa e equivalentes de caixa</b>: <b>R$ 150.000</b>. É exatamente a conciliação exigida entre a DFC e o balanço.</p><p class='fb-fonte'>Resumo 12 · <i>Componente de caixa e equivalentes de caixa</i></p>",
51:"<p>Certo. Quando a entidade incluir os <b>depósitos restituíveis e valores vinculados</b> na composição de caixa e equivalentes de caixa, deverá <b>destacá-los em notas explicativas</b>, ressaltando que tais recursos, <b>embora em poder do ente público, não podem ser por ele utilizados</b>.</p><p>Antes disso, por causa da variedade de práticas de gestão de caixa e de produtos bancários, a entidade deve divulgar a <b>política</b> que adota na determinação da composição do caixa e equivalentes — e essa divulgação inclui o tratamento desses depósitos.</p><p class='fb-fonte'>Resumo 12 · <i>Componente de caixa e equivalentes de caixa</i></p>",
52:"<p>Certo, na literalidade do Resumo: a DFC deverá ser acompanhada de notas explicativas <b>quando os itens que compõem os fluxos de caixa forem relevantes</b>.</p><p>Além disso, a entidade deve divulgar, com <b>comentário da administração</b> em nota, os valores significativos de saldos de caixa e equivalentes <b>não disponíveis para uso</b> pela entidade econômica.</p><p class='fb-fonte'>Resumo 12 · <i>Notas Explicativas</i></p>",
53:"<p>Certo — é um dos dois exemplos do Resumo para saldos de caixa e equivalentes <b>não disponíveis para uso</b> pela entidade econômica: os <b>depósitos de terceiros</b>, quando classificados como caixa e equivalente de caixa.</p><p>O outro exemplo são os saldos em poder de entidade controlada sujeitos a <b>restrições legais</b> que impeçam o uso geral pela controladora ou por outras controladas. Ambos entram no grupo, mas o ente não pode usá-los.</p><p class='fb-fonte'>Resumo 12 · <i>Notas Explicativas</i></p>",
54:"<p>Certo — item (a) da lista de informações adicionais recomendadas em nota: o <b>montante de linhas de crédito obtidas, mas não utilizadas</b>, que podem estar disponíveis para futuras atividades operacionais e para satisfazer compromissos de capital, <b>indicando restrições, se houver, sobre o uso</b> dessas linhas.</p><p>A lista segue com (b) o montante e a natureza de saldos de caixa não disponíveis; (c) a descrição dos itens incluídos no conceito de caixa e equivalentes; e (d) a conciliação do saldo da DFC com o do Balanço Patrimonial, justificando eventuais diferenças.</p><p class='fb-fonte'>Resumo 12 · <i>Notas Explicativas</i></p>",
55:"<p>Errado — inverteu as duas hipóteses do quadro ATENÇÃO. Se o ente considerar a retenção como <b>paga no momento da LIQUIDAÇÃO</b>, <b>deverá promover ajuste</b> no saldo da conta caixa e equivalentes de caixa, para demonstrar que há um <b>saldo vinculado a ser deduzido futuramente</b>, no momento do pagamento.</p><p><b>Nenhum ajuste</b> é a hipótese contrária: quando o ente considera a retenção paga apenas na <b>baixa da obrigação</b>. De todo modo, eventuais ajustes relacionados às retenções devem ser evidenciados em <b>notas explicativas</b>. A diferença, diz o Resumo, é basicamente <b>temporal</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Retenções — ATENÇÃO</i></p>",
56:"<p>Errado. Na resolução da questão-exemplo do Resumo, o recebimento do veículo em doação de <b>R$ 72.000</b> e os <b>R$ 12.000</b> de depreciação registrados no exercício <b>não geram ingressos nem desembolsos no caixa</b>.</p><p>É a diferença entre as demonstrações: esses mesmos eventos produzem VPA e VPD na DVP, mas nada movimentam na DFC. Doação recebida e depreciação não passam pelo caixa.</p><p class='fb-fonte'>Resumo 12 · <i>Questão-exemplo — resolução</i></p>",
57:"<p>Certo — é a conta da questão-exemplo do Resumo, com estes mesmos números. Dos impostos lançados de <b>R$ 80.000</b> entrou no caixa apenas a <b>metade arrecadada: R$ 40.000</b>; das despesas de pessoal de <b>R$ 60.000</b> saiu apenas a <b>metade paga: R$ 30.000</b> (o resto virou restos a pagar).</p><p>Logo, a geração líquida de caixa do período é <b>40.000 – 30.000 = R$ 10.000</b> positivos. Gabarito B. Compare com a DVP do mesmo enunciado, onde o resultado patrimonial foi de R$ 80.000: lá vale o fato gerador; aqui, só o que transita pelo caixa.</p><p class='fb-fonte'>Resumo 12 · <i>Questão-exemplo — resolução</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"12", nome:"Demonstração dos Fluxos de Caixa", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
