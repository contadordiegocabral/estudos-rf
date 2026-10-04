/* Contabilidade Pública — Módulo 10: Balanço Patrimonial (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cpub10 = (function(){
"use strict";

var CARDS = [
  ["O que é o Balanço Patrimonial?","A demonstração que evidencia, <b>qualitativa e quantitativamente</b>, a <b>situação patrimonial</b> da entidade pública por meio de contas representativas do patrimônio público, <b>bem como os atos potenciais</b>, registrados em <b>contas de compensação</b> (natureza de controle)."],
  ["O que são atos potenciais?","Atos com <b>potencial de modificar o patrimônio</b> — ainda não concretizados. Vão para o <b>Quadro das Contas de Compensação</b>."],
  ["O que o art. 105 da Lei 4.320/64 traz de peculiar ao BP?","Confere-lhe <b>viés orçamentário</b>: separa ativo e passivo em <b>Financeiro</b> e <b>Permanente</b>, conforme <b>dependam ou não de autorização legislativa/orçamentária</b>."],
  ["O que é o Ativo Financeiro?","Os <b>créditos e valores realizáveis independentemente de autorização orçamentária</b> e os <b>valores numerários</b>."],
  ["O que é o Ativo Permanente?","Os <b>bens, créditos e valores cuja mobilização ou alienação dependa de autorização legislativa</b>."],
  ["O que é o Passivo Financeiro (art. 105, §3º)?","As <b>dívidas fundadas e outras cujo pagamento INDEPENDA de autorização orçamentária</b>."],
  ["O que é o Passivo Permanente (art. 105, §4º)?","As <b>dívidas fundadas e outras que DEPENDAM de autorização legislativa</b> para amortização ou resgate."],
  ["Ressalva do MCASP sobre o Passivo Financeiro","Considera-se nele apenas a parcela da <b>dívida fundada que já teve execução orçamentária iniciada</b> e esteja <b>pendente de pagamento</b>."],
  ["O que o art. 105 diz que o BP demonstrará?","<b>I</b> Ativo Financeiro · <b>II</b> Ativo Permanente · <b>III</b> Passivo Financeiro · <b>IV</b> Passivo Permanente · <b>V</b> <b>Saldo Patrimonial</b> · <b>VI</b> Contas de Compensação."],
  ["Pegadinha do art. 105: o BP demonstra o resultado patrimonial?","<b>NÃO.</b> O BP demonstra o <b>saldo patrimonial</b>. Quem demonstra o <b>resultado patrimonial</b> é a <b>DVP</b>."],
  ["Quais os quatro quadros do Balanço Patrimonial?","<b>a)</b> Quadro Principal; <b>b)</b> Quadro dos <b>Ativos e Passivos Financeiros e Permanentes</b>; <b>c)</b> Quadro das <b>Contas de Compensação</b>; <b>d)</b> Quadro do <b>Superávit/Déficit Financeiro</b>."],
  ["Quantos quadros tem cada balanço?","<b>BO</b>: 3 quadros · <b>BF</b>: 1 quadro · <b>BP</b>: <b>4 quadros</b>."],
  ["Como se elabora o Quadro Principal?","Com as <b>classes 1 (Ativo) e 2 (Passivo e PL)</b> do PCASP, apresentando ativos e passivos em <b>níveis sintéticos</b> — <b>3º nível (subgrupo)</b> ou <b>4º nível (título)</b>. Os saldos <b>intragovernamentais</b> devem ser <b>excluídos</b> para viabilizar a consolidação."],

  ["Quais formas de apresentação a NBC TSP 11 prevê no BP?","<b>a)</b> segregação em <b>circulante e não circulante</b> — modelo <b>preferencial</b>; <b>b)</b> apresentação <b>baseada na liquidez</b>, só quando for mais relevante (ex.: instituições financeiras). Há ainda a possibilidade de <b>base mista</b>."],
  ["Qual forma as entidades do setor público devem usar?","A <b>segregação circulante/não circulante</b>; a baseada na <b>liquidez</b> é usada de forma <b>subsidiária</b>. O <b>PCASP</b>, de uso obrigatório, já observa essa forma."],
  ["Como se elabora o Quadro dos Ativos e Passivos Financeiros e Permanentes?","Com as <b>classes 1, 2 e 6</b> — a classe 6 entra para contas que representam <b>passivos financeiros sem passivo patrimonial associado</b>, como <b>“Crédito Empenhado a Liquidar”</b> e <b>“Restos a Pagar Não Processados a Liquidar”</b>."],
  ["Como são apresentados os valores nesse quadro?","Pelos seus <b>valores totais</b>. O detalhamento dos saldos em notas explicativas é <b>facultativo</b>."],
  ["O que apresenta o Quadro das Contas de Compensação?","Os <b>atos potenciais do ativo e do passivo A EXECUTAR</b>. Os valores dos atos potenciais <b>já executados NÃO devem ser considerados</b>."],
  ["O que diz o art. 105, §5º, da Lei 4.320/64?","Nas contas de compensação serão registrados os <b>bens, valores, obrigações e situações que possam vir a afetar o patrimônio</b>."],
  ["Exemplos de atos potenciais ATIVOS","<b>Garantias e contragarantias recebidas</b>, <b>direitos conveniados</b> e congêneres, <b>direitos contratuais</b>, <b>demandas judiciais</b> e outros atos potenciais ativos."],
  ["Exemplos de atos potenciais PASSIVOS","<b>Garantias e contragarantias concedidas</b>, <b>obrigações conveniadas</b> e congêneres, <b>obrigações contratuais</b>, <b>demandas judiciais</b> e outros atos potenciais passivos."],
  ["Como se elabora o Quadro do Superávit/Déficit Financeiro?","Com o saldo da conta <b>8.2.1.1.1.00.00 — Disponibilidade por Destinação de Recurso (DDR)</b>, <b>segregado por fonte/destinação de recursos</b>. Como a classificação por fonte não é padronizada, cada ente adapta à sua."],
  ["O que é superávit financeiro (art. 43, §2º)?","A <b>diferença positiva entre o Ativo Financeiro e o Passivo Financeiro</b>, conjugando-se os <b>saldos dos créditos adicionais transferidos</b> e as <b>operações de crédito a eles vinculadas</b>."],
  ["Resultado financeiro × superávit financeiro","<b>Resultado financeiro</b> → <b>Balanço Financeiro</b>. <b>Superávit financeiro</b> → <b>Balanço Patrimonial</b>."],
  ["Quando o BP deve vir com notas explicativas?","Em função da <b>dimensão, natureza e função</b> dos valores envolvidos nos ativos e passivos. A entidade deve divulgar, no BP ou em notas, <b>rubricas adicionais (subclassificações)</b>."],
  ["Entidade SEM capital em ações — o que demonstrar separadamente?","<b>a)</b> o <b>capital integralizado</b> (contribuições dos proprietários menos distribuições); <b>b)</b> <b>resultados acumulados</b>; <b>c)</b> <b>reservas</b>, com natureza e propósito de cada uma; <b>d)</b> <b>participação dos não controladores</b>."],
  ["Entidade COM capital em ações — o que divulgar a mais?","Por classe de ações: quantidade <b>autorizada</b>, <b>subscrita e integralizada</b>, <b>subscrita e não integralizada</b>, <b>valor nominal</b> (ou a ausência dele), <b>conciliação</b> das ações em circulação, <b>direitos, preferências e restrições</b>, <b>ações em tesouraria</b> e <b>ações reservadas para emissão</b> — mais a natureza e finalidade de cada reserva."],

  ["Quando um ativo é circulante? (quatro critérios)","<b>a)</b> espera-se realizá-lo, ou mantê-lo para venda ou consumo, no <b>ciclo operacional normal</b>; <b>b)</b> está mantido essencialmente para ser <b>negociado</b>; <b>c)</b> espera-se realizá-lo em até <b>doze meses</b> da data das demonstrações; <b>d)</b> é <b>caixa ou equivalente</b>, salvo se houver vedação de uso por pelo menos doze meses."],
  ["E os demais ativos?","São classificados como <b>não circulantes</b>."],
  ["Exemplos de ATIVO CIRCULANTE","<b>Caixa e Equivalentes de Caixa</b>, <b>Créditos a Curto Prazo</b>, <b>Investimentos e Aplicações Temporárias a Curto Prazo</b>, <b>Estoques</b>, <b>Ativo Não Circulante Mantido para Venda</b>, <b>Ativo Biológico</b> e <b>VPD Pagas Antecipadamente</b>."],
  ["Exemplos de ATIVO NÃO CIRCULANTE","<b>Realizável a Longo Prazo</b>, <b>Investimentos</b>, <b>Imobilizado</b> e <b>Intangível</b>."],
  ["O que é ativo biológico no BP?","Valores relativos a <b>plantas ou seres vivos</b> cujo <b>ciclo produtivo ocorra em até doze meses</b> da data das demonstrações — por isso figura no <b>ativo circulante</b>."],
  ["Quando um passivo é circulante? (quatro critérios)","<b>a)</b> espera-se pagá-lo no <b>ciclo operacional normal</b>; <b>b)</b> está mantido essencialmente para ser <b>negociado</b>; <b>c)</b> deve ser pago em até <b>doze meses</b> da data das demonstrações; <b>d)</b> a entidade <b>não tem direito incondicional de diferir</b> a liquidação por pelo menos doze meses."],
  ["Refinanciamento e classificação do passivo","Se a entidade <b>espera e tem a possibilidade</b> de refinanciar por pelo menos 12 meses, segundo as condições do empréstimo existente → <b>não circulante</b>. Se o refinanciamento <b>não depende só dela</b> (sem acordo), o <b>simples potencial não basta</b> → <b>circulante</b>."],
  ["Quebra de covenant em empréstimo de longo prazo","Se o descumprimento tornou o passivo <b>vencido e pagável à ordem do credor</b> → <b>circulante</b>. Mas se o <b>credor concedeu carência</b>, até a data das demonstrações, terminando em pelo menos 12 meses → <b>não circulante</b>."],
  ["Exemplos de PASSIVO CIRCULANTE","<b>Obrigações trabalhistas, previdenciárias e assistenciais</b>, <b>empréstimos e financiamentos</b>, <b>fornecedores e contas a pagar</b>, <b>obrigações fiscais</b>, <b>transferências fiscais</b>, <b>provisões</b> e <b>demais obrigações</b> — todas a curto prazo."],
  ["O que só existe no PASSIVO NÃO CIRCULANTE?","O <b>Resultado Diferido</b> (além das mesmas rubricas a longo prazo)."],
  ["O que é o Patrimônio Líquido?","O <b>valor residual dos ativos depois de deduzidos todos os passivos</b>. Pode ser um montante <b>positivo ou negativo</b>."],
  ["Exemplos de contas do PL","<b>Patrimônio Social e Capital Social</b>, <b>Adiantamento para Futuro Aumento de Capital</b>, <b>Reservas de Capital</b>, <b>Ajustes de Avaliação Patrimonial</b>, <b>Reservas de Lucros</b>, <b>Demais Reservas</b>, <b>Resultados Acumulados</b> e <b>(–) Ações/Cotas em Tesouraria</b>."],
  ["Como o resultado do período aparece no PL?","<b>Segregado</b> dos resultados acumulados de períodos anteriores. O <b>resultado patrimonial</b> é a diferença <b>VPA – VPD</b>, apurada na <b>DVP</b>."],

  ["O que a NBC TSP 11 determina sobre a ordem do BP?","Ela <b>lista itens</b> a apresentar individualizadamente por sua <b>natureza ou função</b>, mas <b>não determina a ordem nem o formato</b> de apresentação."],
  ["Quando criar contas adicionais no BP?","Sempre que forem <b>relevantes para o entendimento da posição financeira e patrimonial</b> — cabeçalhos e subtotais inclusive. Contas devem ser incluídas quando <b>tamanho, natureza ou função</b> do item ou da agregação for relevante."],
  ["A nomenclatura e a ordem das contas podem mudar?","<b>Sim</b> — de acordo com a <b>natureza da entidade e de suas transações</b>, para fornecer informação relevante à compreensão da situação patrimonial."],
  ["Critérios do julgamento sobre contas adicionais","<b>Natureza e liquidez dos ativos</b>; <b>função dos ativos</b> na entidade; <b>montantes, natureza e prazo dos passivos</b>."],
  ["Critérios de mensuração diferentes exigem o quê?","<b>Contas separadas</b> — critérios distintos sugerem naturezas ou funções distintas. Exemplo: classes de <b>imobilizado</b> reconhecidas <b>ao custo</b> ou <b>pelo valor de reavaliação</b>."],
  ["Onde a dívida ativa é inicialmente registrada?","No <b>ativo NÃO circulante</b> — o <b>inadimplemento torna incerto</b> o prazo de realização do crédito."],
  ["Quando a dívida ativa pode ser reclassificada?","Quando o ente puder <b>estimar com razoável certeza</b> o montante com <b>expectativa de recebimento em até 12 meses</b> — essa parcela vai para o <b>ativo circulante</b>, permanecendo o restante no não circulante."],
  ["Exemplo de reclassificação da dívida ativa","<b>Acordos de parcelamento ou renegociação</b> que fixem datas e valores para os recebimentos futuros."],
  ["No BP, a compra de bem inscrita integralmente em restos a pagar aumenta o ativo?","<b>Sim</b> — aumenta o <b>imobilizado</b> mesmo sem saída de caixa, e aumenta o <b>passivo</b> no mesmo valor."],
  ["Ingressos extraorçamentários afetam o passivo?","<b>Sim</b> — <b>aumentam o passivo</b>, pois são <b>valores de terceiros</b>."],
  ["O lançamento de impostos afeta o passivo?","<b>Não</b> — afeta o <b>ativo</b> (créditos a receber)."],
  ["Doação de imóvel recebida — qual o lançamento?","<b>D</b> Ativo · <b>C</b> VPA — transação <b>sem contraprestação</b>. Aumenta o ativo."]
];

var QS = [
  ["O Balanço Patrimonial evidencia, qualitativa e quantitativamente, a situação patrimonial da entidade pública, bem como os atos potenciais.","C","FUNDATEC","Conceito do MCASP."],
  ["Os atos potenciais são registrados em contas de compensação, de natureza de informação de controle.","C","CESPE","Natureza de controle."],
  ["O art. 105 da Lei nº 4.320/64 confere viés orçamentário ao Balanço Patrimonial ao separar ativo e passivo em financeiro e permanente.","C","FCC","Critério: dependência ou não de autorização."],
  ["O ativo financeiro compreende os bens cuja alienação dependa de autorização legislativa.","E","FGV","Esse é o <b>ativo permanente</b>."],
  ["O ativo financeiro compreende os créditos e valores realizáveis independentemente de autorização orçamentária e os valores numerários.","C","VUNESP","Definição do art. 105."],
  ["O passivo financeiro compreende as dívidas fundadas e outras cujo pagamento independa de autorização orçamentária.","C","FUNDATEC","Art. 105, §3º."],
  ["O passivo permanente compreende as dívidas que dependam de autorização legislativa para amortização ou resgate.","C","CESPE","Art. 105, §4º."],
  ["Segundo o MCASP, considera-se no passivo financeiro toda a dívida fundada do ente.","E","FCC","Apenas a parcela com <b>execução orçamentária iniciada</b> e pendente de pagamento."],
  ["O Balanço Patrimonial demonstrará o resultado patrimonial do exercício.","E","FGV","Demonstra o <b>saldo patrimonial</b>; o resultado patrimonial é da <b>DVP</b>."],
  ["Segundo o art. 105, o Balanço Patrimonial demonstrará o ativo financeiro, o ativo permanente, o passivo financeiro, o passivo permanente, o saldo patrimonial e as contas de compensação.","C","VUNESP","Os seis incisos."],
  ["O Balanço Patrimonial é composto por quatro quadros.","C","FUNDATEC","Principal, financeiros e permanentes, compensação e superávit/déficit financeiro."],
  ["O Balanço Patrimonial possui três quadros, assim como o Balanço Orçamentário.","E","CESPE","O BP tem <b>quatro</b>; o BO tem três e o BF, um."],
  ["O quadro principal do Balanço Patrimonial é elaborado com as classes 1 e 2 do PCASP.","C","FCC","Ativo e Passivo/PL."],
  ["No quadro principal, os ativos e passivos são apresentados em níveis analíticos de 7º nível.","E","FGV","Em níveis <b>sintéticos</b> — 3º nível (subgrupo) ou 4º nível (título)."],
  ["Os saldos das contas intragovernamentais devem ser excluídos para viabilizar a consolidação das contas no ente.","C","VUNESP","Regra do quadro principal."],
  ["A segregação em circulante e não circulante é o modelo que deve ser adotado preferencialmente pelas entidades do setor público.","C","FUNDATEC","A apresentação por liquidez é subsidiária."],
  ["A NBC TSP 11 admite a adoção de base mista quando a entidade tem diversos tipos de operações.","C","CESPE","Previsão expressa da norma."],
  ["O quadro dos ativos e passivos financeiros e permanentes utiliza apenas as classes 1 e 2 do PCASP.","E","FCC","Utiliza também a <b>classe 6</b>."],
  ["Crédito Empenhado a Liquidar e Restos a Pagar Não Processados a Liquidar são contas da classe 6 usadas no quadro dos ativos e passivos financeiros e permanentes.","C","FGV","Representam passivos financeiros sem passivo patrimonial associado."],
  ["No quadro dos ativos e passivos financeiros e permanentes, o detalhamento dos saldos em notas explicativas é obrigatório.","E","VUNESP","É <b>facultativo</b>; os valores são apresentados pelos totais."],
  ["O quadro das contas de compensação apresenta os atos potenciais do ativo e do passivo a executar.","C","FUNDATEC","Os já executados não são considerados."],
  ["Os valores dos atos potenciais já executados devem ser considerados no quadro das contas de compensação.","E","CESPE","<b>Não</b> devem ser considerados."],
  ["Garantias e contragarantias recebidas são exemplo de ato potencial ativo.","C","FCC","As concedidas são atos potenciais passivos."],
  ["Nas contas de compensação serão registrados os bens, valores, obrigações e situações que possam vir a afetar o patrimônio.","C","FGV","Art. 105, §5º, da Lei 4.320/64."],
  ["O quadro do superávit ou déficit financeiro é elaborado com o saldo da conta Disponibilidade por Destinação de Recurso, segregado por fonte ou destinação.","C","VUNESP","Conta 8.2.1.1.1.00.00."],
  ["Como a classificação por fonte de recursos não é padronizada, cabe a cada ente adaptar o quadro do superávit financeiro à classificação adotada.","C","FUNDATEC","Observação do MCASP."],
  ["O superávit financeiro é a diferença positiva entre o ativo financeiro e o passivo financeiro, conjugando-se os saldos dos créditos adicionais transferidos e as operações de crédito a eles vinculadas.","C","CESPE","Art. 43, §2º."],
  ["O resultado financeiro e o superávit financeiro são ambos apurados no Balanço Patrimonial.","E","FCC","O resultado financeiro é apurado no <b>Balanço Financeiro</b>."],
  ["A entidade que não possui capital representado por ações deve demonstrar separadamente o capital integralizado, os resultados acumulados, as reservas e a participação dos não controladores.","C","FGV","Rol de divulgação."],
  ["O capital integralizado consiste no valor total acumulado das contribuições dos proprietários menos as distribuições aos proprietários.","C","VUNESP","Definição da alínea a."],
  ["Um ativo deve ser classificado como circulante quando se espera que seja realizado em até doze meses após a data das demonstrações contábeis.","C","FUNDATEC","Critério c."],
  ["Caixa e equivalentes de caixa são sempre classificados no ativo circulante.","E","CESPE","Salvo se a troca ou uso estiver <b>vedada por pelo menos doze meses</b>."],
  ["O ativo biológico compreende plantas ou seres vivos cujo ciclo produtivo ocorra em até doze meses da data das demonstrações.","C","FCC","Por isso figura no ativo circulante."],
  ["Investimentos, imobilizado e intangível são exemplos de ativo não circulante.","C","FGV","Ao lado do realizável a longo prazo."],
  ["Um passivo é circulante quando a entidade não tem direito incondicional de diferir sua liquidação por pelo menos doze meses após a data do balanço.","C","VUNESP","Critério d."],
  ["Se a entidade espera e tem a possibilidade de refinanciar a dívida por pelo menos doze meses, segundo as condições do empréstimo existente, a obrigação deve ser classificada como circulante.","E","FUNDATEC","Deve ser classificada como <b>não circulante</b>."],
  ["Quando o refinanciamento não depender somente da entidade, o simples potencial de refinanciamento não basta e a obrigação deve ser classificada como circulante.","C","CESPE","Sem acordo de refinanciamento."],
  ["Descumprido compromisso de acordo de empréstimo de longo prazo, tornando o passivo vencido e pagável à ordem do credor, o passivo deve ser classificado como circulante.","C","FCC","Salvo carência concedida pelo credor."],
  ["Concedido pelo credor, até a data das demonstrações contábeis, período de carência a terminar em pelo menos doze meses, o passivo deve ser classificado como não circulante.","C","FGV","Exceção expressa."],
  ["O Resultado Diferido é conta do passivo circulante.","E","VUNESP","Figura no passivo <b>não circulante</b>."],
  ["O patrimônio líquido compreende o valor residual dos ativos depois de deduzidos todos os passivos.","C","FUNDATEC","Definição."],
  ["A situação patrimonial líquida pode ser um montante positivo ou negativo.","C","CESPE","Observação do MCASP."],
  ["No patrimônio líquido, o resultado do período deve ser evidenciado segregado dos resultados acumulados de períodos anteriores.","C","FCC","Regra de evidenciação."],
  ["O resultado patrimonial do período é a diferença entre as variações patrimoniais aumentativas e diminutivas, apurada na DVP.","C","FGV","VPA menos VPD."],
  ["Ajustes de Avaliação Patrimonial e Ações ou Cotas em Tesouraria são contas do patrimônio líquido.","C","VUNESP","As ações em tesouraria são redutoras."],
  ["A NBC TSP 11 determina a ordem e o formato de apresentação das contas do balanço patrimonial.","E","FUNDATEC","Lista os itens, mas <b>não</b> determina ordem nem formato."],
  ["A nomenclatura das contas e a ordem de apresentação podem ser modificadas de acordo com a natureza da entidade e de suas transações.","C","CESPE","Desde que forneça informação relevante."],
  ["A adequação da apresentação de contas adicionais é avaliada pela natureza e liquidez dos ativos, pela função dos ativos e pelos montantes, natureza e prazo dos passivos.","C","FCC","Mesmos critérios do item 91 da NBC TSP 11."],
  ["A utilização de critérios de mensuração distintos para classes diferentes de ativos sugere que devam ser apresentadas em contas separadas.","C","FGV","Exemplo: imobilizado ao custo ou reavaliado."],
  ["Os créditos referentes à dívida ativa devem ser inicialmente registrados no ativo circulante.","E","VUNESP","No <b>ativo não circulante</b> — o inadimplemento torna incerto o prazo."],
  ["A parcela da dívida ativa com expectativa de recebimento em até doze meses pode ser reclassificada para o ativo circulante, desde que estimada com razoável certeza.","C","FUNDATEC","Exemplo: acordos de parcelamento."],
  ["Reclassificada a parcela de curto prazo da dívida ativa, o restante permanece no ativo não circulante.","C","CESPE","Reclassificação é parcial."],
  ["A aprovação da lei orçamentária anual aumenta o ativo do balanço patrimonial.","E","FCC","Não afeta o ativo."],
  ["O recebimento de imóvel em doação aumenta o ativo, com crédito em variação patrimonial aumentativa.","C","FGV","Transação sem contraprestação."],
  ["A compra de veículo com recebimento imediato do bem e inscrição integral em restos a pagar aumenta o ativo imobilizado ainda que não haja saída de caixa.","C","VUNESP","E aumenta o passivo no mesmo valor."],
  ["Os ingressos extraorçamentários aumentam o passivo do balanço patrimonial, por serem valores de terceiros.","C","FUNDATEC","Entram como obrigação."],
  ["O lançamento de impostos aumenta o passivo do balanço patrimonial.","E","CESPE","Aumenta o <b>ativo</b> — créditos a receber."],
  ["A entidade deve divulgar, no balanço patrimonial ou nas notas explicativas, rubricas adicionais às contas apresentadas.","C","FCC","Subclassificações adequadas às operações."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("O que é o Balanço Patrimonial e o art. 105",
      '<div class="box"><span class="bl">Conceito</span>'+
      '<p>Demonstração que evidencia, <b>qualitativa e quantitativamente</b>, a <b>situação patrimonial</b> da entidade — e também os <b>atos potenciais</b>, registrados em <b>contas de compensação</b> (natureza de <b>controle</b>).</p></div>'+
      '<div class="box"><span class="bl">O viés orçamentário do art. 105</span>'+
      '<p>Separa ativo e passivo em <b>Financeiro</b> e <b>Permanente</b>, conforme <b>dependam ou não de autorização</b>:</p>'+
      '<ul><li><b>Ativo Financeiro</b> — créditos e valores realizáveis <b>independentemente</b> de autorização orçamentária + <b>valores numerários</b>.</li>'+
      '<li><b>Ativo Permanente</b> — bens, créditos e valores cuja <b>mobilização ou alienação dependa</b> de autorização legislativa.</li>'+
      '<li><b>Passivo Financeiro</b> (§3º) — dívidas fundadas e outras cujo pagamento <b>INDEPENDA</b> de autorização orçamentária.</li>'+
      '<li><b>Passivo Permanente</b> (§4º) — dívidas que <b>DEPENDAM</b> de autorização legislativa para amortização ou resgate.</li></ul>'+
      '<p><b>MCASP:</b> no passivo financeiro entra apenas a parcela da dívida fundada com <b>execução orçamentária iniciada</b> e pendente de pagamento.</p></div>'+
      '<div class="box trap"><span class="bl">A pegadinha nº 1 do art. 105</span>'+
      '<p>O BP demonstra o <b>SALDO patrimonial</b> (inciso V) — <b>não</b> o <b>resultado patrimonial</b>, que é da <b>DVP</b>.</p>'+
      '<p class="mn"><em>I AF · II AP · III PF · IV PP · V Saldo Patrimonial · VI Contas de Compensação</em></p></div>')
  ],
  V2:[
    sl("Os quatro quadros",
      '<div class="box"><span class="bl">Composição</span>'+
      '<ul><li><b>a)</b> Quadro Principal;</li><li><b>b)</b> Quadro dos <b>Ativos e Passivos Financeiros e Permanentes</b>;</li>'+
      '<li><b>c)</b> Quadro das <b>Contas de Compensação</b>;</li><li><b>d)</b> Quadro do <b>Superávit/Déficit Financeiro</b>.</li></ul>'+
      '<p class="mn"><em>BO = 3 quadros · BF = 1 quadro · BP = 4 quadros</em></p></div>'+
      '<div class="box"><span class="bl">Quadro Principal</span>'+
      '<p>Classes <b>1</b> e <b>2</b> do PCASP, em <b>níveis sintéticos</b> — <b>3º (subgrupo)</b> ou <b>4º (título)</b>. Saldos <b>intragovernamentais excluídos</b> para viabilizar a consolidação.</p>'+
      '<p>Formas de apresentação da NBC TSP 11: <b>(a)</b> circulante/não circulante — <b>preferencial</b>; <b>(b)</b> por <b>liquidez</b>, só quando mais relevante (instituições financeiras); há ainda a <b>base mista</b>. O setor público usa <b>(a)</b>, com a liquidez <b>subsidiária</b>.</p></div>'+
      '<div class="box"><span class="bl">Quadro dos Ativos e Passivos Financeiros e Permanentes</span>'+
      '<p>Classes <b>1, 2 e 6</b> — a classe 6 entra por contas que são <b>passivo financeiro sem passivo patrimonial associado</b>: <b>Crédito Empenhado a Liquidar</b> e <b>Restos a Pagar Não Processados a Liquidar</b>. Valores pelos <b>totais</b>; detalhamento em notas é <b>facultativo</b>.</p></div>'+
      '<div class="box"><span class="bl">Quadro das Contas de Compensação</span>'+
      '<p>Atos potenciais do ativo e do passivo <b>A EXECUTAR</b> — os <b>já executados não entram</b>. Art. 105, §5º: registram-se <b>bens, valores, obrigações e situações que possam vir a afetar o patrimônio</b>.</p>'+
      '<p><b>Ativos:</b> garantias e contragarantias <b>recebidas</b>, direitos conveniados, direitos contratuais, demandas judiciais.<br>'+
      '<b>Passivos:</b> garantias e contragarantias <b>concedidas</b>, obrigações conveniadas, obrigações contratuais, demandas judiciais.</p></div>'+
      '<div class="box tip"><span class="bl">Quadro do Superávit/Déficit Financeiro</span>'+
      '<p>Saldo da conta <b>8.2.1.1.1.00.00 — DDR (Disponibilidade por Destinação de Recurso)</b>, segregado por <b>fonte/destinação</b>. <b>Superávit financeiro</b> (art. 43, §2º) = <b>AF – PF</b> positivo, conjugando <b>créditos adicionais transferidos</b> e <b>operações de crédito a eles vinculadas</b>.</p></div>')
  ],
  V3:[
    sl("Circulante, não circulante e patrimônio líquido",
      '<div class="box"><span class="bl">Ativo circulante — quatro critérios</span>'+
      '<ul><li><b>a)</b> realização, venda ou consumo no <b>ciclo operacional normal</b>;</li>'+
      '<li><b>b)</b> mantido essencialmente para ser <b>negociado</b>;</li>'+
      '<li><b>c)</b> realização esperada em até <b>12 meses</b> da data das demonstrações;</li>'+
      '<li><b>d)</b> <b>caixa ou equivalente</b>, salvo vedação de uso por pelo menos 12 meses.</li></ul>'+
      '<p>Todos os demais → <b>não circulante</b>.</p>'+
      '<p><b>Circulante:</b> caixa e equivalentes, créditos a curto prazo, investimentos temporários, estoques, ANC mantido para venda, <b>ativo biológico</b>, VPD pagas antecipadamente.<br>'+
      '<b>Não circulante:</b> realizável a longo prazo, investimentos, imobilizado, intangível.</p></div>'+
      '<div class="box"><span class="bl">Ativo biológico</span>'+
      '<p>Plantas ou seres vivos com <b>ciclo produtivo em até 12 meses</b> — por isso no <b>circulante</b>.</p></div>'+
      '<div class="box"><span class="bl">Passivo circulante — quatro critérios</span>'+
      '<ul><li><b>a)</b> pagamento no <b>ciclo operacional normal</b>;</li><li><b>b)</b> mantido para ser <b>negociado</b>;</li>'+
      '<li><b>c)</b> pagamento em até <b>12 meses</b>;</li>'+
      '<li><b>d)</b> <b>sem direito incondicional de diferir</b> a liquidação por pelo menos 12 meses.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Refinanciamento e quebra de acordo</span>'+
      '<ul><li>Espera e <b>tem a possibilidade</b> de refinanciar por 12+ meses pelas condições do empréstimo existente → <b>não circulante</b>.</li>'+
      '<li>Refinanciamento <b>não depende só da entidade</b> (sem acordo) → o <b>simples potencial não basta</b> → <b>circulante</b>.</li>'+
      '<li>Descumprimento que torna o passivo <b>vencido e pagável</b> → <b>circulante</b>; mas <b>carência concedida pelo credor</b> até a data das demonstrações, terminando em 12+ meses → <b>não circulante</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">Patrimônio Líquido</span>'+
      '<p><b>Valor residual dos ativos deduzidos todos os passivos</b> — pode ser <b>positivo ou negativo</b>. O <b>resultado do período</b> vai <b>segregado</b> dos resultados acumulados anteriores; ele é <b>VPA – VPD</b>, apurado na <b>DVP</b>.</p>'+
      '<p>Contas: Patrimônio/Capital Social, AFAC, Reservas de Capital, Ajustes de Avaliação Patrimonial, Reservas de Lucros, Demais Reservas, Resultados Acumulados e <b>(–) Ações/Cotas em Tesouraria</b>.</p></div>')
  ],
  V4:[
    sl("Contas adicionais, dívida ativa e questões de cálculo",
      '<div class="box"><span class="bl">Contas adicionais (NBC TSP 11)</span>'+
      '<p>A norma <b>lista itens</b> a apresentar individualizadamente por <b>natureza ou função</b>, mas <b>não fixa ordem nem formato</b>. Regras:</p>'+
      '<ul><li>Contas adicionais, cabeçalhos e subtotais quando <b>relevantes</b> para o entendimento da posição patrimonial.</li>'+
      '<li>Incluir conta quando <b>tamanho, natureza ou função</b> do item (ou agregação) for relevante.</li>'+
      '<li><b>Nomenclatura e ordem</b> podem mudar conforme a natureza da entidade e de suas transações.</li>'+
      '<li>Julgamento por <b>natureza e liquidez dos ativos</b>, <b>função dos ativos</b>, <b>montantes, natureza e prazo dos passivos</b>.</li>'+
      '<li><b>Critérios de mensuração distintos</b> → contas separadas (imobilizado ao custo × reavaliado).</li></ul></div>'+
      '<div class="box tip"><span class="bl">Notas explicativas</span>'+
      '<p>Em função da <b>dimensão, natureza e função</b> dos valores. <b>Sem capital em ações:</b> demonstrar separadamente <b>capital integralizado</b>, <b>resultados acumulados</b>, <b>reservas</b> (natureza e propósito) e <b>participação dos não controladores</b>. <b>Com ações:</b> por classe, quantidades autorizadas, subscritas integralizadas e não integralizadas, valor nominal, conciliação das ações em circulação, direitos e restrições, ações em tesouraria e reservadas para emissão.</p></div>'+
      '<div class="box trap"><span class="bl">Dívida ativa</span>'+
      '<p>Registro inicial no <b>ATIVO NÃO CIRCULANTE</b> — o inadimplemento torna <b>incerto</b> o prazo. Podendo o ente <b>estimar com razoável certeza</b> o recebimento em até <b>12 meses</b> (parcelamentos, renegociações), essa <b>parcela</b> vai para o <b>circulante</b>; o restante fica onde está.</p></div>'+
      '<div class="box"><span class="bl">Questões de cálculo — o que mexe em quê</span>'+
      '<ul><li><b>Aprovação da LOA</b> — não afeta ativo nem passivo.</li>'+
      '<li><b>Arrecadação</b> aumenta o ativo; <b>pagamento</b> diminui.</li>'+
      '<li><b>Doação de bem recebida</b>: <b>D</b> Ativo · <b>C</b> VPA → aumenta o ativo.</li>'+
      '<li><b>Compra com o bem recebido e inscrição em RP</b>: aumenta o <b>ativo</b> (imobilizado) <b>e</b> o <b>passivo</b>.</li>'+
      '<li><b>Lançamento de impostos</b>: aumenta o <b>ativo</b> (créditos a receber), não o passivo.</li>'+
      '<li><b>Ingressos extraorçamentários</b>: aumentam o <b>passivo</b> (valores de terceiros).</li></ul></div>')
  ]
};

var EX = {
S1:{t:"match", instr:"Ligue cada grupo do art. 105 à sua definição",
  pairs:[["Ativo Financeiro","Créditos e valores realizáveis independentemente de autorização orçamentária"],
         ["Ativo Permanente","Bens, créditos e valores cuja mobilização ou alienação dependa de autorização legislativa"],
         ["Passivo Financeiro","Dívidas cujo pagamento independa de autorização orçamentária"],
         ["Passivo Permanente","Dívidas que dependam de autorização legislativa para amortização ou resgate"]],
  why:"O corte é sempre a dependência de autorização."},

S2:{t:"gap", instr:"Complete o inciso V do art. 105",
  before:"O Balanço Patrimonial demonstrará o ",
  after:".",
  options:["saldo patrimonial","resultado patrimonial","superávit orçamentário"], answer:0,
  why:"O resultado patrimonial é demonstrado pela <b>DVP</b>."},

S3:{t:"mc", instr:"Segundo o MCASP, o que entra no conceito de passivo financeiro?",
  options:["Apenas a parcela da dívida fundada com execução orçamentária iniciada e pendente de pagamento",
           "Toda a dívida fundada do ente","Somente as operações de crédito por ARO",
           "Apenas as obrigações vencidas"],
  answer:0,
  why:"Ressalva importante do MCASP."},

S4:{t:"order", instr:"Ordene os incisos do art. 105 da Lei 4.320/64",
  items:["Ativo Financeiro","Ativo Permanente","Passivo Financeiro","Passivo Permanente","Saldo Patrimonial","Contas de Compensação"],
  why:"Seis incisos, sempre nessa ordem."},

S5:{t:"multi", instr:"Marque os quadros que compõem o Balanço Patrimonial",
  options:["Quadro Principal","Quadro dos Ativos e Passivos Financeiros e Permanentes",
           "Quadro das Contas de Compensação","Quadro do Superávit/Déficit Financeiro",
           "Quadro da Execução dos Restos a Pagar"],
  answers:[0,1,2,3],
  why:"O último é do Balanço Orçamentário."},

S6:{t:"match", instr:"Ligue cada demonstração ao seu número de quadros",
  pairs:[["Balanço Orçamentário","Três quadros"],["Balanço Financeiro","Um único quadro"],
         ["Balanço Patrimonial","Quatro quadros"]],
  why:"Comparação que as bancas adoram inverter."},

S7:{t:"gap", instr:"Complete a regra do quadro principal",
  before:"Os ativos e passivos serão apresentados em níveis ",
  after:" — 3º nível (subgrupo) ou 4º nível (título).",
  options:["sintéticos","analíticos","consolidados"], answer:0,
  why:"E os saldos intragovernamentais devem ser excluídos."},

S8:{t:"mc", instr:"Qual classe adicional é usada no quadro dos ativos e passivos financeiros e permanentes?",
  options:["Classe 6","Classe 3","Classe 5","Classe 8"],
  answer:0,
  why:"Para Crédito Empenhado a Liquidar e RP Não Processados a Liquidar."},

S9:{t:"sort", instr:"Classifique cada conta de compensação",
  buckets:["Ato potencial ATIVO","Ato potencial PASSIVO"],
  items:[["Garantias e contragarantias recebidas",0],["Direitos conveniados",0],["Direitos contratuais",0],
         ["Garantias e contragarantias concedidas",1],["Obrigações conveniadas",1],["Obrigações contratuais",1]],
  why:"Recebidas e direitos → ativo; concedidas e obrigações → passivo."},

S10:{t:"gap", instr:"Complete a regra das contas de compensação",
  before:"O quadro apresenta os atos potenciais do ativo e do passivo ",
  after:", não se considerando os já executados.",
  options:["a executar","executados","liquidados"], answer:0,
  why:"Só o potencial ainda não realizado."},

S11:{t:"mc", instr:"Qual conta elabora o quadro do superávit/déficit financeiro?",
  options:["Disponibilidade por Destinação de Recurso (DDR)","Caixa e Equivalentes de Caixa",
           "Crédito Empenhado a Liquidar","Resultado do Exercício"],
  answer:0,
  why:"Conta 8.2.1.1.1.00.00, segregada por fonte/destinação."},

S12:{t:"match", instr:"Ligue cada resultado ao demonstrativo onde é apurado",
  pairs:[["Resultado financeiro","Balanço Financeiro"],["Superávit financeiro","Balanço Patrimonial"],
         ["Resultado patrimonial","Demonstração das Variações Patrimoniais"],
         ["Resultado orçamentário","Balanço Orçamentário"]],
  why:"Quatro resultados, quatro demonstrações — cai muito."},

S13:{t:"multi", instr:"Marque os critérios que tornam um ativo CIRCULANTE",
  options:["Realização, venda ou consumo no ciclo operacional normal",
           "Mantido essencialmente para ser negociado",
           "Realização esperada em até doze meses da data das demonstrações",
           "Caixa ou equivalente de caixa sem vedação de uso por doze meses",
           "Aquisição financiada por operação de crédito"],
  answers:[0,1,2,3],
  why:"Todos os demais ativos são não circulantes."},

S14:{t:"sort", instr:"Classifique cada conta do ativo",
  buckets:["Ativo Circulante","Ativo Não Circulante"],
  items:[["Caixa e Equivalentes de Caixa",0],["Estoques",0],["Ativo Biológico",0],
         ["VPD Pagas Antecipadamente",0],["Ativo Não Circulante Mantido para Venda",0],
         ["Realizável a Longo Prazo",1],["Imobilizado",1],["Intangível",1]],
  why:"O ANC Mantido para Venda fica no circulante, apesar do nome."},

S15:{t:"gap", instr:"Complete o conceito de ativo biológico",
  before:"Compreende plantas ou seres vivos cujo ciclo produtivo ocorra em até ",
  after:" da data das demonstrações.",
  options:["doze meses","vinte e quatro meses","seis meses"], answer:0,
  why:"Por isso é classificado no ativo circulante."},

S16:{t:"sort", instr:"O passivo é circulante ou não circulante?",
  buckets:["Circulante","Não circulante"],
  items:[["Deve ser pago em até doze meses",0],
         ["A entidade não tem direito incondicional de diferir a liquidação por doze meses",0],
         ["Refinanciamento que não depende somente da entidade",0],
         ["Descumprimento torna o passivo vencido e pagável à ordem do credor",0],
         ["Entidade espera e pode refinanciar por doze meses pelas condições do empréstimo",1],
         ["Credor concedeu carência a terminar em pelo menos doze meses",1],
         ["Resultado Diferido",1]],
  why:"O que decide é o direito — não a mera expectativa."},

S17:{t:"gap", instr:"Complete o conceito de patrimônio líquido",
  before:"Compreende o valor residual dos ativos depois de deduzidos ",
  after:".",
  options:["todos os passivos","os passivos circulantes","as provisões"], answer:0,
  why:"Pode ser positivo ou negativo."},

S18:{t:"multi", instr:"Marque as contas do patrimônio líquido",
  options:["Patrimônio Social e Capital Social","Adiantamento Para Futuro Aumento de Capital",
           "Ajustes de Avaliação Patrimonial","Resultados Acumulados","(-) Ações ou Cotas em Tesouraria",
           "Resultado Diferido","Provisões a Longo Prazo"],
  answers:[0,1,2,3,4],
  why:"As duas últimas são do passivo não circulante."},

S19:{t:"multi", instr:"Sobre as contas adicionais no balanço patrimonial, marque o correto",
  options:["A NBC TSP 11 lista itens a apresentar, mas não determina ordem nem formato",
           "Contas adicionais, cabeçalhos e subtotais entram quando relevantes para o entendimento",
           "A nomenclatura e a ordem podem ser modificadas conforme a natureza da entidade",
           "Critérios de mensuração distintos sugerem apresentação em contas separadas",
           "A ordem das contas é rígida e idêntica para todos os entes"],
  answers:[0,1,2,3],
  why:"A última contraria a própria norma."},

S20:{t:"multi", instr:"A entidade sem capital representado por ações deve demonstrar separadamente:",
  options:["O capital integralizado","Os resultados acumulados",
           "As reservas, com natureza e propósito de cada uma","A participação dos não controladores",
           "A quantidade de ações autorizadas"],
  answers:[0,1,2,3],
  why:"A última só se aplica a quem tem capital em ações."},

S21:{t:"mc", instr:"Onde a dívida ativa deve ser inicialmente registrada?",
  options:["No ativo não circulante","No ativo circulante",
           "Em contas de compensação","No passivo não circulante"],
  answer:0,
  why:"O inadimplemento torna incerto o prazo de realização."},

S22:{t:"gap", instr:"Complete a regra da reclassificação da dívida ativa",
  before:"A parcela poderá ser reclassificada para o ativo circulante quando o ente puder estimar, com razoável certeza, o recebimento em até ",
  after:" da data das demonstrações contábeis.",
  options:["12 meses","24 meses","6 meses"], answer:0,
  why:"Exemplo: acordos de parcelamento ou renegociação."},

S23:{t:"mc", instr:"Arrecadação de impostos R$ 60.000; pagamento de despesas R$ 20.000; imóvel recebido em doação R$ 100.000; veículo comprado por R$ 30.000 com o bem recebido e inscrito em restos a pagar. Total do ATIVO?",
  options:["R$ 170.000","R$ 150.000","R$ 140.000","R$ 130.000"],
  answer:0,
  why:"60.000 − 20.000 + 100.000 + 30.000. A LOA não entra."},

S24:{t:"mc", instr:"Lançamento de impostos R$ 110.000 com 60% arrecadado; imóvel comprado à vista R$ 60.000; serviços empenhados e liquidados R$ 48.000, metade paga e metade em restos a pagar; ingressos extraorçamentários R$ 20.000. Total do PASSIVO?",
  options:["R$ 44.000","R$ 24.000","R$ 22.000","R$ 45.000"],
  answer:0,
  why:"24.000 de restos a pagar + 20.000 de ingressos extraorçamentários."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Pública 10","https://www.tecconcursos.com.br/s/Q2qI7O","Q2qI7O"],
  ["Caderno FCC — Contabilidade Pública 10","https://www.tecconcursos.com.br/s/Q2qI7V","Q2qI7V"],
  ["Caderno FGV — Contabilidade Pública 10","https://www.tecconcursos.com.br/s/Q2qI7d","Q2qI7d"],
  ["Caderno VUNESP — Contabilidade Pública 10","https://www.tecconcursos.com.br/s/Q2qI7l","Q2qI7l"]
];
var TECNOTA = "O BP é o demonstrativo com mais detalhe cobrado literalmente: quatro quadros, seis incisos do art. 105 e os critérios de circulante. Antes de cada bloco de questões, repita em voz alta a tabela dos quatro resultados — orçamentário no BO, financeiro no BF, superávit financeiro no BP e patrimonial na DVP.";

var UNITS = [
  {n:1, title:"Conceito e o art. 105", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Situação patrimonial, financeiro e permanente", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · conceito e atos potenciais",  xp:25, data:["S1","S2","T0","T1","T2","T3"]},
    {id:"K3", type:"drill",  title:"Praticar · financeiro × permanente",     xp:25, data:["S3","S4","T4","T5","T6","T7"]},
    {id:"K4", type:"drill",  title:"Praticar · os incisos do art. 105",      xp:25, data:["S5","S6","T8","T9","T10","T11"]},
    {id:"K5", type:"flash",  title:"Flashcards · conceito e art. 105",       xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12]}
  ]},
  {n:2, title:"Os quatro quadros", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Principal, financeiros, compensação e superávit", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · quadro principal",            xp:25, data:["S7","S8","T12","T13","T14","T15","T16"]},
    {id:"K8", type:"drill",  title:"Praticar · contas de compensação",       xp:25, data:["S9","S10","T17","T18","T19","T20","T21","T22","T23"]},
    {id:"K9", type:"drill",  title:"Praticar · superávit financeiro",        xp:25, data:["S11","S12","T24","T25","T26","T27","T28","T29"]},
    {id:"K10",type:"flash",  title:"Flashcards · os quatro quadros",         xp:15, data:[13,14,15,16,17,18,19,20,21,22,23,24,25,26]}
  ]},
  {n:3, title:"Circulante, não circulante e PL", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Critérios de classificação e patrimônio líquido", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · o ativo",                     xp:25, data:["S13","S14","T30","T31","T32","T33"]},
    {id:"K13",type:"drill",  title:"Praticar · o passivo",                   xp:25, data:["S15","S16","T34","T35","T36","T37","T38","T39"]},
    {id:"K14",type:"drill",  title:"Praticar · patrimônio líquido",          xp:25, data:["S17","S18","T40","T41","T42","T43","T44"]},
    {id:"K15",type:"flash",  title:"Flashcards · classificação e PL",        xp:15, data:[27,28,29,30,31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Contas adicionais, dívida ativa e cálculo", cvar:"u4", lessons:[
    {id:"K16",type:"teoria", title:"NBC TSP 11, dívida ativa e o que mexe em quê", xp:10, data:"V4"},
    {id:"K17",type:"drill",  title:"Praticar · contas adicionais e notas",   xp:25, data:["S19","S20","T45","T46","T47","T48"]},
    {id:"K18",type:"drill",  title:"Praticar · dívida ativa",                xp:25, data:["S21","S22","T49","T50","T51"]},
    {id:"K19",type:"drill",  title:"Praticar · cálculo do ativo e do passivo", xp:25, data:["S23","S24","T52","T53","T54","T55","T56","T57"]},
    {id:"K20",type:"flash",  title:"Flashcards · adicionais e dívida ativa",  xp:15, data:[40,41,42,43,44,45,46,47,48,49,50,51]}
  ]},
  {n:5, title:"Fixação", cvar:"u5", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                xp:60, data:null},
    {id:"K21", type:"missao", title:"Missão TEC Concursos",                  xp:15, data:null},
    {id:"K22", type:"prova",  title:"Simulado cronometrado",                 xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo — é a definição literal do Resumo. O Balanço Patrimonial é a demonstração contábil que evidencia, <b>qualitativa e quantitativamente</b>, a situação patrimonial da entidade pública por meio de contas representativas do patrimônio público, <b>bem como os atos potenciais</b>.</p><p>O quadro EXPLICANDO MELHOR traduz: qualitativamente é <i>o que é</i>; quantitativamente é <i>quanto é</i>. E o BP revela não apenas o que já se realizou, mas também o que pode ocorrer no futuro.</p><p class='fb-fonte'>Resumo 10 · <i>Balanço Patrimonial</i></p>",
1:"<p>Certo. Os atos potenciais — atos com potencial de modificar o patrimônio — são registrados em <b>contas de compensação</b>, de natureza de <b>informação de controle</b>.</p><p>O exemplo do Resumo: demanda judicial em que o órgão público pleiteia uma indenização. Registra-se um <b>Ato Potencial Ativo</b> na conta <b>Demandas Judiciais</b>, dentro do Quadro das Contas de Compensação. A indenização ainda não se concretizou, mas pode vir a acontecer.</p><p class='fb-fonte'>Resumo 10 · <i>Balanço Patrimonial — EXEMPLO das Demandas Judiciais</i></p>",
2:"<p>Certo. O art. 105 da Lei nº 4.320/64 confere <b>viés orçamentário</b> ao Balanço Patrimonial ao separar o ativo e o passivo em dois grupos, <b>Financeiro e Permanente</b>.</p><p>O critério da separação é sempre o mesmo: a <b>dependência ou não de autorização legislativa ou orçamentária</b> para a realização dos itens que compõem cada grupo.</p><p class='fb-fonte'>Resumo 10 · <i>Balanço Patrimonial — art. 105 e o viés orçamentário</i></p>",
3:"<p>Errado — trocou o grupo. Bens, créditos e valores cuja <b>mobilização ou alienação dependa de autorização legislativa</b> compõem o <b>ativo permanente</b>, não o financeiro.</p><p>Guarde o quadro do Resumo pela chave da dependência: <b>financeiro = independe</b> de autorização orçamentária; <b>permanente = depende</b> de autorização legislativa.</p><p class='fb-fonte'>Resumo 10 · <i>Quadro ATIVO — Financeiro x Permanente</i></p>",
4:"<p>Certo, na literalidade do quadro do Resumo: o ativo financeiro compreende os <b>créditos e valores realizáveis independentemente de autorização orçamentária</b> e os <b>valores numerários</b>.</p><p>Note as duas pernas: além do dinheiro em espécie (numerário), entram os créditos que se realizam sem precisar de autorização orçamentária. O que depender de autorização legislativa cai no permanente.</p><p class='fb-fonte'>Resumo 10 · <i>Quadro ATIVO — Financeiro x Permanente</i></p>",
5:"<p>Certo. É o § 3º do art. 105 tal como o Resumo transcreve: o Passivo Financeiro compreende as <b>dívidas fundadas</b> e outras cujo <b>pagamento independa de autorização orçamentária</b>.</p><p>Repare que as dívidas fundadas aparecem nos <b>dois</b> grupos do passivo — o que separa um do outro é o <b>independa</b> (financeiro) contra o <b>dependam de autorização legislativa</b> (permanente).</p><p class='fb-fonte'>Resumo 10 · <i>Balanço Patrimonial na Lei nº 4.320/64 — art. 105, § 3º</i></p>",
6:"<p>Certo — § 4º do art. 105. O Passivo Permanente compreende as dívidas fundadas e outras que <b>dependam de autorização legislativa</b> para <b>amortização ou resgate</b>.</p><p>No quadro do Resumo o contraste é visual: no financeiro, pagamentos que <b>INDEPENDAM</b> de autorização orçamentária; no permanente, dívidas que <b>DEPENDAM</b> de autorização legislativa.</p><p class='fb-fonte'>Resumo 10 · <i>Balanço Patrimonial na Lei nº 4.320/64 — art. 105, § 4º</i></p>",
7:"<p>Errado no alcance. A OBS do Resumo é expressa: nos termos do MCASP, considera-se no conceito de Passivo Financeiro <b>apenas a parcela</b> da dívida fundada que tenha tido <b>execução orçamentária iniciada</b> e esteja <b>pendente de pagamento</b>.</p><p>A banca troca <i>apenas a parcela</i> por <i>toda a dívida fundada</i>. A Lei nº 4.320/64 fala em dívidas fundadas nos dois grupos; é o MCASP que restringe o financeiro à parcela já em execução e pendente.</p><p class='fb-fonte'>Resumo 10 · <i>Balanço Patrimonial na Lei nº 4.320/64 — OBS do MCASP</i></p>",
8:"<p>Errado — e o Resumo marca isso em quadro <b>ATENÇÃO</b> com o gabarito escrito ao lado.</p><p>O material registra as duas frases lado a lado: <i>O Balanço Patrimonial demonstrará o resultado patrimonial</i> (ERRADO) e <i>A Demonstração das Variações Patrimoniais demonstrará o resultado patrimonial</i> (CERTO). O art. 105 lista o <b>saldo patrimonial</b>, não o resultado patrimonial.</p><p class='fb-fonte'>Resumo 10 · <i>ATENÇÃO — art. 105 x resultado patrimonial</i></p>",
9:"<p>Certo, é a lista dos seis incisos do art. 105 como o Resumo transcreve: I – Ativo Financeiro; II – Ativo Permanente; III – Passivo Financeiro; IV – Passivo Permanente; V – <b>Saldo Patrimonial</b>; VI – Contas de Compensação.</p><p>Memorize pelo pareamento: dois ativos, dois passivos, o saldo e as compensações. Quem troca <b>saldo patrimonial</b> por <i>resultado patrimonial</i> cai na pegadinha do quadro ATENÇÃO.</p><p class='fb-fonte'>Resumo 10 · <i>Balanço Patrimonial na Lei nº 4.320/64 — art. 105</i></p>",
10:"<p>Certo. Nos termos do MCASP, o Balanço Patrimonial é composto por quatro quadros: <b>Principal</b>; <b>Ativos e Passivos Financeiros e Permanentes</b>; <b>Contas de Compensação</b> (controle); e <b>Superávit/Déficit Financeiro</b>.</p><p>O quadro NÃO CONFUNDA do Resumo dá a contagem completa: Balanço Orçamentário, <b>03</b> quadros; Balanço Financeiro, <b>um único</b> quadro; Balanço Patrimonial, <b>04</b> quadros.</p><p class='fb-fonte'>Resumo 10 · <i>Composição do Balanço Patrimonial — NÃO CONFUNDA</i></p>",
11:"<p>Errado nos dois pontos. O Balanço Patrimonial possui <b>04 quadros</b>, e não três.</p><p>Quem possui <b>03 quadros</b> é o <b>Balanço Orçamentário</b>; o <b>Balanço Financeiro</b> tem <b>um único quadro</b>. É exatamente o quadro NÃO CONFUNDA do Resumo, e a banca costuma embaralhar os três números.</p><p class='fb-fonte'>Resumo 10 · <i>Composição do Balanço Patrimonial — NÃO CONFUNDA</i></p>",
12:"<p>Certo. O quadro principal será elaborado utilizando-se a <b>classe 1 (Ativo)</b> e a <b>classe 2 (Passivo e Patrimônio Líquido)</b> do Plano de Contas Aplicado ao Setor Público.</p><p>Guarde o contraste com o quadro seguinte: no principal só entram as classes <b>1 e 2</b>; no quadro dos ativos e passivos financeiros e permanentes entra também a <b>classe 6</b>. No principal tem-se a visão patrimonial como base para análise e registro dos fatos contábeis.</p><p class='fb-fonte'>Resumo 10 · <i>Quadro Principal</i></p>",
13:"<p>Errado no nível de detalhe. No quadro principal os ativos e passivos são apresentados em níveis <b>sintéticos</b>: <b>3º nível (Subgrupo)</b> ou <b>4º nível (Título)</b>.</p><p>A troca de <i>sintético</i> por <i>analítico</i> — e de 3º/4º por 7º nível — é o erro plantado. O quadro principal é visão de conjunto; detalhe fino fica para as notas explicativas.</p><p class='fb-fonte'>Resumo 10 · <i>Quadro Principal</i></p>",
14:"<p>Certo, na literalidade do Resumo: os saldos das contas <b>intragovernamentais</b> deverão ser <b>excluídos</b> para viabilizar a <b>consolidação</b> das contas no ente.</p><p>A lógica é a de sempre na consolidação: o que um órgão deve a outro do mesmo ente não é direito nem obrigação perante terceiros, e se compensaria em dobro no balanço do ente.</p><p class='fb-fonte'>Resumo 10 · <i>Quadro Principal</i></p>",
15:"<p>Certo. Das formas de apresentação previstas na NBC TSP 11, a <b>segregação em circulante e não circulante</b> é a que deve ser adotada <b>preferencialmente</b> pelas entidades do setor público.</p><p>A alternativa é a apresentação <b>baseada na liquidez</b>, aplicável <b>apenas quando proporcionar informação mais relevante</b> — o exemplo do Resumo são as instituições financeiras, que não fornecem bens ou serviços dentro de ciclo operacional claramente identificável. Ela é usada de forma <b>subsidiária</b>, e o próprio PCASP já observa a forma preferencial em sua estrutura.</p><p class='fb-fonte'>Resumo 10 · <i>Quadro Principal — NBC TSP 11</i></p>",
16:"<p>Certo. O Resumo registra que a norma dispõe ainda sobre a possibilidade de adoção de uma <b>base mista</b>, quando a entidade tem <b>diversos tipos de operações</b>.</p><p>Base mista não afasta a regra: para fins de consolidação e consistência das informações, as entidades do setor público deverão usar a segregação em circulante e não circulante, ficando a apresentação por liquidez em caráter <b>subsidiário</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Quadro Principal — NBC TSP 11</i></p>",
17:"<p>Errado pela palavra <b>apenas</b>. Esse quadro é elaborado com a classe 1 (Ativo), a classe 2 (Passivo e Patrimônio Líquido) <b>e também a classe 6</b>.</p><p>A classe 6 entra para as contas que representam <b>passivos financeiros sem passivos patrimoniais associados</b>, como <b>Crédito Empenhado a Liquidar</b> e <b>Restos a Pagar Não Processados a Liquidar</b>. Quem usa só as classes 1 e 2 é o <b>quadro principal</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Quadro dos Ativos e Passivos Financeiros e Permanentes</i></p>",
18:"<p>Certo — são exatamente os dois exemplos que o Resumo cita. <b>Crédito Empenhado a Liquidar</b> e <b>Restos a Pagar Não Processados a Liquidar</b> são contas da <b>classe 6</b> que representam passivos financeiros sem passivo patrimonial associado.</p><p>É por causa delas que esse quadro, elaborado conforme o art. 105 da Lei nº 4.320/64, precisa ir além das classes 1 e 2.</p><p class='fb-fonte'>Resumo 10 · <i>Quadro dos Ativos e Passivos Financeiros e Permanentes</i></p>",
19:"<p>Errado por uma palavra. O detalhamento dos saldos em notas explicativas é <b>facultativo</b>, não obrigatório.</p><p>O que o Resumo exige é outra coisa: os ativos e passivos financeiros e permanentes e o <b>saldo patrimonial</b> serão apresentados pelos seus <b>valores totais</b>. Abrir esses totais em notas é faculdade do ente.</p><p class='fb-fonte'>Resumo 10 · <i>Quadro dos Ativos e Passivos Financeiros e Permanentes</i></p>",
20:"<p>Certo. Nos termos do MCASP, esse quadro apresenta os <b>atos potenciais do ativo e do passivo a executar</b>, que potencialmente podem afetar o patrimônio do ente.</p><p>Fixe o <b>a executar</b>: é ele que exclui do quadro os atos potenciais <b>já executados</b>. O que já virou direito ou obrigação efetiva saiu do controle e entrou no patrimônio.</p><p class='fb-fonte'>Resumo 10 · <i>Quadro das Contas de Compensação</i></p>",
21:"<p>Errado — o Resumo diz o oposto, com todas as letras: os valores dos atos potenciais <b>já executados NÃO devem ser considerados</b>.</p><p>O quadro apresenta apenas os atos potenciais <b>a executar</b>. Executado o ato, o efeito é patrimonial e aparece nas classes 1 e 2, não mais nas contas de compensação.</p><p class='fb-fonte'>Resumo 10 · <i>Quadro das Contas de Compensação</i></p>",
22:"<p>Certo. <b>Garantias e Contragarantias recebidas</b> abre a lista de <b>atos potenciais ativos</b> do Resumo, ao lado de Direitos Conveniados e outros instrumentos congêneres, Direitos Contratuais, Demandas Judiciais e outros atos potenciais ativos.</p><p>O espelho vale como regra de decisão: <b>recebidas</b> puxa para o <b>ativo</b>; <b>concedidas</b> puxa para o <b>passivo</b>, onde ficam as Garantias e Contragarantias concedidas, as obrigações conveniadas e as obrigações contratuais.</p><p class='fb-fonte'>Resumo 10 · <i>Exemplos de Contas de Compensação</i></p>",
23:"<p>Certo, literalidade do art. 105, § 5º, da Lei nº 4.320/64, como o Resumo transcreve: nas contas de compensação serão registrados os <b>bens, valores, obrigações e situações</b> que <b>possam vir a afetar o patrimônio</b>.</p><p>O <b>possam vir a afetar</b> é a marca do ato potencial — algo que ainda não afetou o patrimônio, mas tem potencial de fazê-lo, como a demanda judicial do exemplo do material.</p><p class='fb-fonte'>Resumo 10 · <i>Quadro das Contas de Compensação — art. 105, § 5º</i></p>",
24:"<p>Certo. Esse quadro é elaborado com o saldo da conta <b>8.2.1.1.1.00.00 — Disponibilidade por Destinação de Recurso (DDR)</b>, segregado por <b>fonte/destinação de recursos</b>.</p><p>O superávit ou déficit financeiro aí apurado segue o § 2º do art. 43 da Lei nº 4.320/64. Segregar por fonte importa porque cada destinação tem sua própria disponibilidade — não se usa sobra de uma fonte para cobrir outra.</p><p class='fb-fonte'>Resumo 10 · <i>Quadro do Superávit / Déficit Financeiro</i></p>",
25:"<p>Certo. Como a classificação por <b>fonte (ou destinação) de recursos não é padronizada</b>, cabe a <b>cada ente adaptá-lo</b> à classificação por ele adotada.</p><p>É a única flexibilidade do quadro: a conta de origem é sempre a DDR (8.2.1.1.1.00.00); o que varia de ente para ente é o rol de fontes em que o saldo será aberto.</p><p class='fb-fonte'>Resumo 10 · <i>Quadro do Superávit / Déficit Financeiro</i></p>",
26:"<p>Certo — é o conceito do art. 43, § 2º, da Lei nº 4.320/64, reproduzido no quadro O QUE É SUPERÁVIT FINANCEIRO. Superávit Financeiro é a <b>diferença positiva entre o Ativo Financeiro e o Passivo Financeiro</b>, conjugando-se ainda os <b>saldos dos créditos adicionais transferidos</b> e as <b>operações de crédito a eles vinculadas</b>.</p><p>Complemento que o Resumo faz questão de destacar: o superávit financeiro <b>não é receita do exercício de referência</b>, pois já o foi em exercício anterior, mas constitui <b>disponibilidade</b> para utilização no exercício de referência.</p><p class='fb-fonte'>Resumo 10 · <i>Quadro do Superávit / Déficit Financeiro</i></p>",
27:"<p>Errado. É o quadro <b>NÃO CONFUNDA</b> do Resumo: <b>Resultado Financeiro</b> é apurado no <b>Balanço Financeiro</b>; <b>Superávit Financeiro</b> é apurado no <b>Balanço Patrimonial</b>.</p><p>São demonstrações diferentes, e a banca vive juntando as duas na mesma frase. O que o BP apura, no seu quarto quadro, é o superávit (ou déficit) financeiro.</p><p class='fb-fonte'>Resumo 10 · <i>NÃO CONFUNDA — Resultado Financeiro x Superávit Financeiro</i></p>",
28:"<p>Certo. Quando a entidade <b>não possui nenhuma parcela de capital representado por ações</b>, ela deve demonstrar separadamente: o <b>capital integralizado</b>, os <b>resultados acumulados</b>, as <b>reservas</b> (com descrição da natureza e propósito de cada uma) e a <b>participação dos não controladores</b>.</p><p>São quatro itens, na ordem do Resumo. Se houver capital representado por ações, aí sim entra o rol adicional: quantidade de ações autorizadas, subscritas e integralizadas, valor nominal, conciliação das quantidades em circulação e por aí.</p><p class='fb-fonte'>Resumo 10 · <i>Notas Explicativas</i></p>",
29:"<p>Certo, na definição exata do Resumo: capital integralizado consiste no <b>valor total acumulado</b>, na data das demonstrações contábeis, das <b>contribuições dos proprietários menos as distribuições aos proprietários</b>.</p><p>Preste atenção nos dois lados da conta: entra o que os proprietários aportaram e sai o que lhes foi distribuído. É a primeira das informações a demonstrar separadamente pela entidade sem capital em ações.</p><p class='fb-fonte'>Resumo 10 · <i>Notas Explicativas</i></p>",
30:"<p>Certo — é o critério (c) da lista do Resumo: espera-se que o ativo seja <b>realizado até doze meses</b> após a data das demonstrações contábeis.</p><p>Os critérios são alternativos (<b>qualquer</b> deles basta): realização ou manutenção para venda/consumo no ciclo operacional normal; manutenção essencialmente para ser negociado; realização em até doze meses; ou ser caixa ou equivalente de caixa. Todos os demais ativos são <b>não circulantes</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Ativo Circulante e Não Circulante</i></p>",
31:"<p>Errado pelo <b>sempre</b>. O critério (d) tem ressalva expressa: caixa ou equivalente de caixa é circulante <b>a menos que</b> sua <b>troca ou uso para pagamento de passivo se encontre vedada</b> durante pelo menos <b>doze meses</b> após a data das demonstrações contábeis.</p><p>Havendo essa vedação, o caixa vai para o não circulante. A banca apaga a exceção e transforma a regra em absoluta.</p><p class='fb-fonte'>Resumo 10 · <i>Ativo Circulante e Não Circulante</i></p>",
32:"<p>Certo. O ativo biológico compreende os valores relativos a <b>plantas ou seres vivos</b> que possam ser classificados como ativos biológicos cujo <b>ciclo produtivo ocorra dentro de um prazo de até doze meses</b> da data das demonstrações.</p><p>O exemplo do Resumo é a <b>plantação de tomates</b> em fase de crescimento que será colhida e vendida dentro dos próximos doze meses: fica no balanço como ativo e, ocorrida a colheita e a venda, o valor é registrado como receita. Por isso o ativo biológico aparece na lista de <b>ativo circulante</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Ativo Biológico</i></p>",
33:"<p>Certo — são três dos quatro itens da lista de exemplos de <b>ativo não circulante</b> do Resumo: Ativo Realizável a Longo Prazo, <b>Investimentos</b>, <b>Imobilizado</b> e <b>Intangível</b>.</p><p>Do outro lado, a lista de circulante traz Caixa e Equivalentes de Caixa, Créditos a Curto Prazo, Investimentos e Aplicações Temporárias a Curto Prazo, Estoques, Ativo Não Circulante Mantido para Venda, Ativo Biológico e VPD Pagas Antecipadamente. Cuidado com <i>Investimentos</i>, que aparece dos dois lados — muda o prazo.</p><p class='fb-fonte'>Resumo 10 · <i>Ativo Circulante e Não Circulante</i></p>",
34:"<p>Certo — critério (d) do passivo: a entidade <b>não tem direito incondicional de diferir a liquidação</b> do passivo durante pelo menos <b>doze meses</b> após a data do balanço.</p><p>Os outros critérios, igualmente alternativos: pagamento no ciclo operacional normal; passivo mantido essencialmente para ser negociado; ou pagamento em até doze meses. Todos os outros passivos são <b>não circulantes</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Passivo Circulante e Não Circulante</i></p>",
35:"<p>Errado — inverteu a conclusão da <b>OBSERVAÇÃO 1</b> do Resumo. Se a entidade <b>espera e tem a possibilidade</b> de refinanciar ou rolar a dívida por pelo menos doze meses, segundo as <b>condições de flexibilidade do empréstimo existente</b>, ela deve classificar a obrigação como <b>NÃO circulante</b>.</p><p>Contraste com a OBS 2: se o refinanciamento <b>não depender somente da entidade</b> (por exemplo, sem acordo de refinanciamento), o simples potencial não basta e aí sim a obrigação é <b>circulante</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Passivo Circulante e Não Circulante — OBSERVAÇÃO 1</i></p>",
36:"<p>Certo — OBSERVAÇÃO 2 do Resumo. Quando o refinanciamento ou a substituição da obrigação <b>não depender somente da entidade</b>, por exemplo se <b>não houver acordo de refinanciamento</b>, o <b>simples potencial</b> de refinanciamento não é suficiente para classificar como não circulante, e a obrigação deve ser <b>circulante</b>.</p><p>A chave das duas observações é a mesma: <b>quem controla a rolagem</b>. Se está nas mãos da entidade, não circulante; se depende de terceiro, circulante.</p><p class='fb-fonte'>Resumo 10 · <i>Passivo Circulante e Não Circulante — OBSERVAÇÃO 2</i></p>",
37:"<p>Certo — OBSERVAÇÃO 3, primeira parte. Descumprido compromisso segundo acordo de empréstimo de longo prazo <b>até a data das demonstrações contábeis</b>, com a consequência de o passivo se tornar <b>vencido e pagável à ordem do credor</b>, ele deve ser classificado como <b>circulante</b>.</p><p>Faz sentido: se o credor pode exigir a qualquer momento, a entidade perdeu o direito de diferir a liquidação — cai no critério (d) do passivo circulante.</p><p class='fb-fonte'>Resumo 10 · <i>Passivo Circulante e Não Circulante — OBSERVAÇÃO 3</i></p>",
38:"<p>Certo — é a ressalva final da OBSERVAÇÃO 3. Se o credor tiver concordado, <b>até a data das demonstrações contábeis</b>, em proporcionar <b>período de carência a terminar pelo menos doze meses</b> após essa data, o passivo volta a ser <b>não circulante</b>.</p><p>Repare nos dois marcos que a banca adora mexer: a concordância do credor tem de ser <b>até</b> a data do balanço, e a carência tem de ir <b>além</b> de doze meses contados dela.</p><p class='fb-fonte'>Resumo 10 · <i>Passivo Circulante e Não Circulante — OBSERVAÇÃO 3</i></p>",
39:"<p>Errado no grupo. Na lista do Resumo, <b>Resultado Diferido</b> figura entre os exemplos de <b>passivo NÃO circulante</b>, fechando aquele rol.</p><p>Os demais itens da lista do não circulante repetem os do circulante, só trocando o prazo: obrigações trabalhistas, previdenciárias e assistenciais, empréstimos e financiamentos, fornecedores e contas a pagar, obrigações fiscais, transferências fiscais, provisões e demais obrigações — todas <b>a longo prazo</b>. O Resultado Diferido é o único que só aparece de um lado.</p><p class='fb-fonte'>Resumo 10 · <i>Exemplos de Passivo Não Circulante</i></p>",
40:"<p>Certo — é a definição literal do Resumo: o patrimônio líquido compreende o <b>valor residual dos ativos depois de deduzidos todos os passivos</b>.</p><p>Exemplos de contas do PL listados no material: Patrimônio Social e Capital Social, Adiantamento Para Futuro Aumento de Capital, Reservas de Capital, Ajustes de Avaliação Patrimonial, Reservas de Lucros, Demais Reservas, Resultados Acumulados e (-) Ações/Cotas em Tesouraria.</p><p class='fb-fonte'>Resumo 10 · <i>Patrimônio Líquido</i></p>",
41:"<p>Certo — OBSERVAÇÃO 1 do tópico. A situação patrimonial líquida é a diferença entre os ativos e os passivos após a inclusão de outros recursos e a dedução de outras obrigações, reconhecida no Balanço Patrimonial como patrimônio líquido, e <b>pode ser um montante positivo ou negativo</b>.</p><p>Nada impede passivo a descoberto no setor público: o PL negativo é possível e o Resumo diz isso expressamente.</p><p class='fb-fonte'>Resumo 10 · <i>Patrimônio Líquido — OBSERVAÇÃO 1</i></p>",
42:"<p>Certo — OBSERVAÇÃO 2. No patrimônio líquido deve ser evidenciado o <b>resultado do período (VPA – VPD) segregado</b> dos <b>resultados acumulados de períodos anteriores</b>.</p><p>Duas linhas distintas, portanto: o que o exercício produziu e o que vem de trás. Juntar tudo em uma só conta é justamente o que a norma veda.</p><p class='fb-fonte'>Resumo 10 · <i>Patrimônio Líquido — OBSERVAÇÃO 2</i></p>",
43:"<p>Certo — OBSERVAÇÃO 3. O resultado patrimonial do período é a diferença entre as <b>variações patrimoniais aumentativas e diminutivas</b>, apurada na <b>Demonstração das Variações Patrimoniais (DVP)</b>.</p><p>Casa com o quadro ATENÇÃO do art. 105: quem demonstra o resultado patrimonial é a <b>DVP</b>; o Balanço Patrimonial demonstra o <b>saldo patrimonial</b> e recebe esse resultado dentro do PL.</p><p class='fb-fonte'>Resumo 10 · <i>Patrimônio Líquido — OBSERVAÇÃO 3</i></p>",
44:"<p>Certo. Ambas constam da lista de exemplos de contas do patrimônio líquido do Resumo: <b>Ajustes de Avaliação Patrimonial</b> e <b>(-) Ações / Cotas em Tesouraria</b>.</p><p>Atenção ao sinal: Ações/Cotas em Tesouraria aparece no material precedida de <b>(-)</b>, ou seja, é conta <b>redutora</b> do patrimônio líquido — está no PL, mas diminuindo-o.</p><p class='fb-fonte'>Resumo 10 · <i>Exemplos de Contas do Patrimônio Líquido</i></p>",
45:"<p>Errado justamente no ponto que a norma ressalva. A NBC TSP 11 apresenta uma lista de itens que devem ser apresentados de forma individualizada no balanço patrimonial em razão de sua natureza ou função, <b>sem, entretanto, determinar a ordem ou o formato de apresentação</b>.</p><p>Tanto é assim que o próprio material admite, logo adiante, que a <b>nomenclatura</b> das contas e a <b>ordem</b> de apresentação podem ser modificadas conforme a natureza da entidade e de suas transações.</p><p class='fb-fonte'>Resumo 10 · <i>Informação a ser apresentada no Balanço Patrimonial</i></p>",
46:"<p>Certo — item 3 da lista do Resumo. A nomenclatura de contas utilizada e a ordem de apresentação dos itens e das agregações de itens semelhantes <b>podem ser modificadas</b> de acordo com a <b>natureza da entidade e de suas transações</b>.</p><p>A finalidade é declarada no material: fornecer informação <b>relevante para a compreensão da situação patrimonial</b> da entidade. É o outro lado da moeda do fato de a NBC TSP 11 não fixar ordem nem formato.</p><p class='fb-fonte'>Resumo 10 · <i>Informação a ser apresentada no Balanço Patrimonial</i></p>",
47:"<p>Certo — item 4, com os três critérios na ordem do Resumo: a <b>natureza e liquidez dos ativos</b>; a <b>função dos ativos</b> na entidade; e os <b>montantes, natureza e prazo dos passivos</b>.</p><p>Note a assimetria que a banca explora: para os ativos olham-se natureza, liquidez e função; para os passivos, montantes, natureza e prazo.</p><p class='fb-fonte'>Resumo 10 · <i>Informação a ser apresentada no Balanço Patrimonial</i></p>",
48:"<p>Certo — item 5. A utilização de <b>distintos critérios de mensuração</b> para classes diferentes de ativos sugere que suas <b>naturezas ou funções são distintas</b> e, portanto, que devam ser apresentadas em <b>contas separadas</b>.</p><p>O exemplo do próprio material: diferentes classes de <b>imobilizado</b>, que podem ser reconhecidas <b>ao custo</b> ou <b>pelo valor de reavaliação</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Informação a ser apresentada no Balanço Patrimonial</i></p>",
49:"<p>Errado no grupo inicial. Os créditos referentes à dívida ativa devem ser <b>inicialmente registrados no ativo NÃO circulante</b>, como dívida ativa.</p><p>A razão dada pelo Resumo é boa para guardar: o <b>inadimplemento torna incerto o prazo</b> para realização do crédito. O circulante só entra depois, por reclassificação, e apenas se o ente puder estimar com razoável certeza o que receberá em até 12 meses.</p><p class='fb-fonte'>Resumo 10 · <i>Reclassificação da Dívida Ativa</i></p>",
50:"<p>Certo. Caso o ente tenha condições de <b>estimar com razoável certeza</b> o montante de créditos inscritos em dívida ativa com <b>expectativa de recebimento em até 12 meses</b> da data das demonstrações contábeis, essa parcela <b>poderá</b> ser reclassificada para o ativo circulante.</p><p>O exemplo do material são os <b>acordos de parcelamento ou renegociação</b> da dívida ativa, que permitem fixar datas e valores para os recebimentos futuros. Repare no <b>poderá</b>: é faculdade condicionada à estimativa confiável.</p><p class='fb-fonte'>Resumo 10 · <i>Reclassificação da Dívida Ativa</i></p>",
51:"<p>Certo. No exemplo do Resumo, reclassificada para o circulante a parcela que se espera realizar em até 12 meses, a <b>parcela restante permanece no ativo não circulante</b>.</p><p>A reclassificação é <b>parcial</b>, por isso: separa-se o curto prazo estimado com razoável certeza e o resto continua onde nasceu, no não circulante.</p><p class='fb-fonte'>Resumo 10 · <i>Reclassificação da Dívida Ativa</i></p>",
52:"<p>Errado — é o primeiro passo da resolução da QUESTÃO-EXEMPLO do Resumo: a <b>aprovação da Lei Orçamentária Anual não afeta o Ativo</b> (e, na segunda questão, também <b>não afeta o Passivo</b>).</p><p>Na questão do material a LOA vinha com previsão de receita e fixação de despesa de <b>R$ 150.000</b> e nada somou ao ativo, que fechou em <b>R$ 170.000</b>. Previsão e fixação são orçamentárias, não patrimoniais.</p><p class='fb-fonte'>Resumo 10 · <i>Questão-exemplo — resolução</i></p>",
53:"<p>Certo, com o número do Resumo: o recebimento de imóvel em doação no valor de <b>R$ 100.000</b> <b>aumenta o Ativo</b>. Trata-se de <b>transação sem contraprestação</b>, e o lançamento é <b>débito no ativo e crédito em VPA</b>.</p><p>Foi a maior parcela da conta da questão-exemplo: 60.000 – 20.000 + 100.000 + 30.000 = <b>R$ 170.000</b>, gabarito E.</p><p class='fb-fonte'>Resumo 10 · <i>Questão-exemplo — resolução</i></p>",
54:"<p>Certo — é o último evento da questão-exemplo. A compra de veículo para uso no valor de <b>R$ 30.000</b>, com <b>recebimento imediato do bem</b> e inscrição integral em restos a pagar, provoca <b>aumento do Ativo Imobilizado</b> apesar de <b>não ter saído dinheiro do caixa</b>.</p><p>O que manda aqui é o fato patrimonial, não o financeiro: o bem entrou e a obrigação ficou registrada em RP. Por isso os R$ 30.000 somam no total do ativo de R$ 170.000.</p><p class='fb-fonte'>Resumo 10 · <i>Questão-exemplo — resolução</i></p>",
55:"<p>Certo, e com a justificativa do Resumo: os ingressos extraorçamentários no valor de <b>R$ 20.000</b> <b>aumentam o Passivo</b>, <b>pois são valores de terceiros</b>.</p><p>Na segunda questão-exemplo o passivo saiu de 24.000 (a metade dos R$ 48.000 de vigilância inscrita em restos a pagar) mais esses 20.000, fechando em <b>R$ 44.000</b> — gabarito D.</p><p class='fb-fonte'>Resumo 10 · <i>Questão-exemplo — resolução</i></p>",
56:"<p>Errado no lado do balanço. Na resolução do Resumo, o <b>lançamento de impostos não afeta o passivo, mas sim o ativo</b> (créditos a receber).</p><p>Na questão do material foram <b>R$ 110.000</b> lançados com arrecadação de 60%: nada disso entrou no passivo, que ficou só com os R$ 24.000 de restos a pagar da vigilância e os R$ 20.000 de ingressos extraorçamentários, total de <b>R$ 44.000</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Questão-exemplo — resolução</i></p>",
57:"<p>Certo. A entidade deve divulgar, <b>no balanço patrimonial ou nas notas explicativas</b>, <b>rubricas adicionais</b> às contas apresentadas (subclassificações), classificadas de forma adequada às operações da entidade.</p><p>Repare na alternativa: a divulgação pode estar no corpo do BP <b>ou</b> em nota. E o Resumo lembra que o Balanço Patrimonial deverá ser acompanhado de notas explicativas em função da <b>dimensão, natureza e função</b> dos valores envolvidos nos ativos e passivos.</p><p class='fb-fonte'>Resumo 10 · <i>Notas Explicativas</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"10", nome:"Balanço Patrimonial", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
