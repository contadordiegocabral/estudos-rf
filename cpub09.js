/* Contabilidade Pública — Módulo 09: Balanço Financeiro (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cpub09 = (function(){
"use strict";

var CARDS = [
  ["O que o Balanço Financeiro evidencia?","As <b>receitas e despesas orçamentárias</b>, os <b>ingressos e dispêndios extraorçamentários</b>, conjugados com os <b>saldos de caixa do exercício anterior</b> e os que se <b>transferem para o exercício seguinte</b>."],
  ["Qual o artigo da Lei 4.320/64 que trata do BF?","<b>Art. 103</b> — o BF demonstrará a receita e a despesa orçamentárias e os recebimentos e pagamentos de <b>natureza extraorçamentária</b>, conjugados com os <b>saldos em espécie</b> do exercício anterior e os que se transferem para o seguinte."],
  ["Quais os cinco grupos do lado dos INGRESSOS?","<b>I</b> Receita Orçamentária · <b>II</b> Transferências Financeiras Recebidas · <b>III</b> Outras Movimentações Financeiras Recebidas · <b>IV</b> Recebimentos Extraorçamentários · <b>V</b> Saldo do Exercício Anterior."],
  ["Quais os cinco grupos do lado dos DISPÊNDIOS?","<b>VII</b> Despesa Orçamentária · <b>VIII</b> Transferências Financeiras Concedidas · <b>IX</b> Outras Movimentações Financeiras Concedidas · <b>X</b> Pagamentos Extraorçamentários · <b>XI</b> Saldo para o Exercício Seguinte."],
  ["Como as receitas e despesas orçamentárias são segregadas desde 2024 (10ª ed. do MCASP)?","Em <b>recursos não vinculados</b>, <b>recursos vinculados (exceto ao RPPS)</b> e <b>recursos vinculados ao RPPS</b> — quanto à <b>origem e destinação</b>."],
  ["O que detalha “Outras Movimentações Financeiras Recebidas”?","<b>Resgate de investimentos e aplicações financeiras</b> e <b>desbloqueios de valores em caixa</b>."],
  ["O que detalha “Outras Movimentações Financeiras Concedidas”?","<b>Transferências para investimentos e aplicações financeiras</b> e <b>bloqueios de valores em caixa</b>."],
  ["O que são Transferências Financeiras Recebidas e Concedidas?","Movimentações de recursos financeiros <b>entre órgãos e entidades da administração direta e indireta</b>. Podem ser <b>orçamentárias ou extraorçamentárias</b>."],
  ["Exemplos de recebimentos extraorçamentários","<b>Consignações em folha</b>, <b>fianças</b>, <b>cauções</b>, <b>operação de crédito por ARO</b> e <b>inscrição de restos a pagar</b>."],
  ["Exemplos de pagamentos extraorçamentários","<b>Devolução de fianças e cauções</b>, <b>resgate da operação de crédito por ARO</b> e <b>pagamento de restos a pagar</b> — as devoluções dos recebimentos extraorçamentários."],
  ["O que compõe o Saldo do Exercício Anterior e o Saldo para o Exercício Seguinte?","<b>Caixa e equivalentes de caixa (exceto RPPS)</b>, <b>Caixa e equivalentes de caixa RPPS</b> e <b>Depósitos Restituíveis e Valores Vinculados</b> (as entradas compensatórias no ativo e passivo financeiros)."],
  ["Como ingressos e dispêndios se equilibram no BF?","Pela inclusão do <b>Saldo do Exercício Anterior</b> na coluna dos ingressos e do <b>Saldo para o Exercício Seguinte</b> na coluna dos dispêndios."],
  ["Que novidade a 10ª edição do MCASP trouxe ao saldo em espécie?","A linha <b>“Caixa e Equivalentes de Caixa RPPS”</b>, para dar maior <b>transparência e representatividade</b> a esses recursos."],

  ["Receitas e despesas orçamentárias NÃO VINCULADAS","Receitas <b>líquidas das deduções</b> e despesas de <b>livre alocação</b> entre origem e aplicação, para atender a <b>quaisquer finalidades</b>."],
  ["Receitas e despesas orçamentárias VINCULADAS","Aquelas cuja <b>aplicação é definida em lei</b>, de acordo com a sua <b>origem</b>. A identificação se faz pelo mecanismo <b>fonte ou destinação de recursos</b>."],
  ["Para que servem as fontes/destinações de recursos?","Indicam <b>como são financiadas</b> as despesas orçamentárias, atendendo à sua <b>destinação legal</b> — e permitem evidenciar a <b>origem e a aplicação</b> dos recursos."],
  ["O que são “Outras Movimentações Financeiras”?","Movimentações que impactam caixa e equivalentes em contrapartida a <b>transferências ou resgates de investimentos e aplicações financeiras</b> sujeitas a variações significativas de valor, registradas em <b>Investimentos e Aplicações Temporárias de Curto e Longo Prazo</b> do PCASP — e também os <b>bloqueios judiciais</b> de valores."],
  ["Qual o objetivo principal do Balanço Financeiro?","Evidenciar <b>todas as movimentações financeiras de entradas e saídas que impactam o caixa e equivalentes de caixa</b> no exercício, possibilitando a apuração do <b>resultado financeiro</b>."],
  ["O BF apura superávit ou déficit financeiro?","<b>Não.</b> Essa informação é evidenciada pelo <b>Balanço Patrimonial</b>. O BF apura o <b>resultado financeiro do exercício</b>."],
  ["O Indicador de Superávit Financeiro (ISF) serve para elaborar o BF?","<b>Não</b> — o ISF não foi criado para subsidiar o BF, que por isso <b>não conterá todas as contas patrimoniais com ISF (F)</b>."],
  ["O que diz o parágrafo único do art. 103 da Lei 4.320/64?","Os <b>Restos a Pagar do exercício serão computados na receita extraorçamentária</b> para <b>compensar sua inclusão na despesa orçamentária</b>."],
  ["Por que os restos a pagar entram como receita extraorçamentária?","Porque foram <b>empenhados</b>, logo entram na <b>despesa orçamentária</b>; o registro como receita extraorçamentária é o artifício que mantém o balanço <b>equilibrado</b> (ingressos = dispêndios)."],
  ["Restos a pagar — inscrição e pagamento no BF","<b>Inscrição</b> = receita extraorçamentária. <b>Pagamento</b> = despesa extraorçamentária. <b>Não afetam o BO</b>, mas <b>afetam o BF</b>."],
  ["Quantos quadros tem o Balanço Financeiro?","<b>Um único quadro</b> — contra os <b>três</b> do Balanço Orçamentário."],
  ["O que o quadro único do BF demonstra?","<b>a)</b> receita realizada e despesa executada <b>por fonte/destinação</b>; <b>b)</b> transferências financeiras recebidas e concedidas, destacando <b>aportes ao RPPS</b>; <b>c)</b> entradas e saídas de <b>outras movimentações financeiras</b>; <b>d)</b> recebimentos e pagamentos <b>extraorçamentários</b>; <b>e)</b> <b>saldo em espécie</b> do exercício anterior e para o seguinte."],
  ["BF × BO — as três diferenças que mais caem","<b>Quadros:</b> BF tem 1, BO tem 3. <b>Discriminação:</b> BF por <b>fonte/destinação</b>, BO por <b>categoria econômica</b>. <b>Extraorçamentárias:</b> o BF contabiliza, o BO <b>não</b>."],

  ["Resultado financeiro — MODO 1","<b>Saldo em espécie para o exercício seguinte</b> <b>–</b> <b>Saldo em espécie do exercício anterior</b>."],
  ["Resultado financeiro — MODO 2","<b>(+)</b> Receitas Orçamentárias <b>(+)</b> Transferências Financeiras Recebidas <b>(+)</b> Recebimentos Extraorçamentários <b>(–)</b> Despesa Orçamentária <b>(–)</b> Transferências Financeiras Concedidas <b>(–)</b> Pagamentos Extraorçamentários."],
  ["Resultado financeiro × superávit financeiro","<b>Resultado financeiro</b> é apurado no <b>Balanço Financeiro</b>. <b>Superávit financeiro</b> é apurado no <b>Balanço Patrimonial</b>."],
  ["O que é superávit financeiro (art. 43, §2º, da Lei 4.320/64)?","A <b>diferença positiva entre o Ativo Financeiro e o Passivo Financeiro</b>, conjugando-se ainda os <b>saldos dos créditos adicionais transferidos</b> e as <b>operações de crédito a eles vinculadas</b>."],
  ["Quando usar o MODO 1 e quando usar o MODO 2?","<b>MODO 1</b> quando a questão der os <b>saldos em espécie</b>. <b>MODO 2</b> quando não der os saldos, mas der receitas, despesas e movimentações."],
  ["Variação positiva na disponibilidade significa boa gestão?","<b>Não necessariamente</b> — pode decorrer da <b>elevação do endividamento público</b>."],
  ["Variação negativa na disponibilidade significa má gestão?","<b>Não necessariamente</b> — pode decorrer de uma <b>redução do endividamento</b>."],
  ["Com que demonstração o BF deve ser analisado em conjunto?","Com o <b>Balanço Patrimonial</b>, considerando as demais variáveis orçamentárias e extraorçamentárias."],
  ["Classes 1 e 2 na elaboração do BF","Para os recebimentos e pagamentos extraorçamentários de <b>Depósitos Restituíveis e Valores Vinculados</b> e os <b>saldos em espécie</b> do exercício anterior e para o seguinte."],
  ["Classes 3 e 4 na elaboração do BF","<b>Classe 3 (VPD)</b> → Transferências Financeiras <b>Concedidas</b>. <b>Classe 4 (VPA)</b> → Transferências Financeiras <b>Recebidas</b>."],
  ["Classes 5 e 6 na elaboração do BF","<b>Classe 5 (Orçamento Aprovado)</b> → <b>inscrição</b> de restos a pagar. <b>Classe 6 (Execução do Orçamento)</b> → receita orçamentária, despesa orçamentária e <b>pagamento</b> de restos a pagar."],
  ["Classes 7 e 8 na elaboração do BF","Para as <b>entradas e saídas de caixa sem execução orçamentária</b> e que também <b>não sejam movimentações extraorçamentárias</b>. Inclusão da <b>10ª edição do MCASP</b>."],
  ["Quantas classes do PCASP elaboram o BF?","<b>Todas as oito</b> — 1, 2, 3, 4, 5, 6, 7 e 8 — depois da inclusão das classes 7 e 8 pela 10ª edição do MCASP."],
  ["Quando um procedimento deve ir para nota explicativa no BF?","<b>Sempre que afetar o resultado financeiro</b> apurado no demonstrativo."],
  ["Exemplo clássico de nota explicativa no BF","A <b>forma de contabilização das retenções</b>: se o ente considera a retenção paga na <b>liquidação</b>, precisa <b>ajustar o saldo em espécie</b>; se só na <b>baixa da obrigação</b>, <b>nenhum ajuste</b> é feito."],
  ["Como as receitas aparecem no BF?","<b>Líquidas das deduções</b>. O detalhamento das deduções por fonte/destinação pode ir em <b>quadros anexos</b> e em <b>notas explicativas</b>."],
  ["LOA × Balanço Financeiro","Na <b>LOA</b>, tudo pelos <b>totais, vedadas deduções</b>. No <b>BF</b>, receitas pelos <b>valores líquidos</b> das deduções."],

  ["A aprovação da LOA afeta o resultado financeiro?","<b>Não</b> — não há arrecadação nem empenho."],
  ["A inscrição de restos a pagar afeta o resultado financeiro?","<b>Sim</b> — é <b>receita extraorçamentária</b>, entra nos ingressos. (Não afeta o resultado <b>orçamentário</b>.)"],
  ["O pagamento de restos a pagar afeta o resultado financeiro?","<b>Sim</b> — é <b>despesa extraorçamentária</b>, entra nos dispêndios."],
  ["Operação de crédito afeta o resultado financeiro?","<b>Sim</b> — é receita orçamentária arrecadada."],
  ["Doação de veículo afeta o resultado financeiro?","<b>Não</b> — é <b>VPA</b>, não receita orçamentária. Afeta o <b>BP</b> e a <b>DVP</b>."],
  ["Depreciação afeta o resultado financeiro?","<b>Não</b> — é <b>VPD</b>, não despesa orçamentária. Afeta o <b>BP</b> e a <b>DVP</b>."],
  ["Doação em dinheiro afeta o resultado financeiro?","<b>Sim</b> — houve <b>arrecadação de receita</b>."],
  ["Questão-modelo: saldo seguinte 220.396 e anterior 146.671 — qual o RF?","<b>R$ 73.725</b> pelo MODO 1. Pelo MODO 2 dá o mesmo: 232.026 + 31.862 + 29.610 − 167.080 − 23.779 − 28.914."]
];

var QS = [
  ["O Balanço Financeiro evidencia as receitas e despesas orçamentárias e os ingressos e dispêndios extraorçamentários, conjugados com os saldos de caixa do exercício anterior e os que se transferem para o seguinte.","C","FUNDATEC","Conceito do MCASP."],
  ["O Balanço Financeiro está previsto no art. 102 da Lei nº 4.320/64.","E","CESPE","O art. 102 é do Balanço Orçamentário; o BF está no <b>art. 103</b>."],
  ["A partir da 10ª edição do MCASP, as receitas orçamentárias do Balanço Financeiro são segregadas em recursos não vinculados, vinculados exceto ao RPPS e vinculados ao RPPS.","C","FCC","Segregação quanto à origem e destinação."],
  ["O grupo Outras Movimentações Financeiras Recebidas compreende o resgate de investimentos e aplicações financeiras e os desbloqueios de valores em caixa.","C","FGV","Detalhamento do grupo III."],
  ["O grupo Outras Movimentações Financeiras Concedidas compreende os desbloqueios de valores em caixa.","E","VUNESP","Concedidas trazem <b>bloqueios</b>; desbloqueios estão nas recebidas."],
  ["As transferências financeiras recebidas e concedidas podem ser orçamentárias ou extraorçamentárias.","C","FUNDATEC","Movimentações entre órgãos e entidades da administração direta e indireta."],
  ["As consignações em folha de pagamento, as fianças e as cauções são exemplos de recebimentos extraorçamentários.","C","CESPE","Ingressos não previstos no orçamento."],
  ["A operação de crédito por antecipação de receita orçamentária é receita orçamentária no Balanço Financeiro.","E","FCC","É <b>recebimento extraorçamentário</b>."],
  ["O pagamento de restos a pagar é exemplo de pagamento extraorçamentário.","C","FGV","Devolução de recebimento extraorçamentário."],
  ["O saldo em espécie para o exercício seguinte compreende caixa e equivalentes de caixa exceto RPPS, caixa e equivalentes de caixa RPPS e depósitos restituíveis e valores vinculados.","C","VUNESP","Composição atualizada pela 10ª edição."],
  ["Os ingressos e os dispêndios se equilibram pela inclusão do saldo do exercício anterior nos ingressos e do saldo para o exercício seguinte nos dispêndios.","C","FUNDATEC","Mecânica do equilíbrio do BF."],
  ["A linha Caixa e Equivalentes de Caixa RPPS foi incluída pela 10ª edição do MCASP.","C","CESPE","Para dar transparência e representatividade a esses recursos."],
  ["As receitas e despesas orçamentárias não vinculadas são aquelas cuja aplicação é definida em lei conforme sua origem.","E","FCC","Essa é a definição das <b>vinculadas</b>."],
  ["A identificação das vinculações pode ser feita pelo mecanismo de fonte ou destinação de recursos.","C","FGV","Mecanismo previsto no MCASP."],
  ["As outras movimentações financeiras registram também os bloqueios judiciais de valores apreendidos por decisão judicial.","C","VUNESP","Consta expressamente da definição."],
  ["O objetivo principal do Balanço Financeiro é evidenciar todas as movimentações financeiras de entradas e saídas que impactam o caixa e equivalentes de caixa no exercício.","C","FUNDATEC","Definição do MCASP."],
  ["O Balanço Financeiro apura o superávit ou déficit financeiro do ente.","E","CESPE","Essa informação é evidenciada pelo <b>Balanço Patrimonial</b>."],
  ["O Indicador de Superávit Financeiro foi criado para subsidiar a elaboração do Balanço Financeiro.","E","FCC","Não foi — por isso o BF não contém todas as contas patrimoniais com ISF (F)."],
  ["Os restos a pagar do exercício serão computados na receita extraorçamentária para compensar sua inclusão na despesa orçamentária.","C","FGV","Parágrafo único do art. 103 da Lei 4.320/64."],
  ["A inscrição de restos a pagar afeta o Balanço Orçamentário, mas não o Balanço Financeiro.","E","VUNESP","É o inverso: não afeta o BO e afeta o BF."],
  ["O Balanço Financeiro é composto por um único quadro.","C","FUNDATEC","Contra os três quadros do Balanço Orçamentário."],
  ["No Balanço Financeiro as receitas e despesas orçamentárias são discriminadas por categoria econômica.","E","CESPE","Por <b>fonte ou destinação de recurso</b>; por categoria econômica é o BO."],
  ["As receitas e despesas extraorçamentárias são contabilizadas no Balanço Financeiro e não no Balanço Orçamentário.","C","FCC","Diferença clássica entre os dois demonstrativos."],
  ["O quadro do Balanço Financeiro destaca os aportes de recursos para o RPPS nas transferências financeiras.","C","FGV","Alínea b da composição."],
  ["A discriminação por fonte ou destinação de recurso permite evidenciar a origem e a aplicação dos recursos financeiros.","C","VUNESP","Finalidade do mecanismo."],
  ["O resultado financeiro pode ser apurado pela diferença entre o saldo em espécie para o exercício seguinte e o do exercício anterior.","C","FUNDATEC","Modo 1 de apuração."],
  ["No modo 2 de apuração, somam-se receitas orçamentárias, transferências financeiras recebidas e recebimentos extraorçamentários e subtraem-se despesa orçamentária, transferências concedidas e pagamentos extraorçamentários.","C","CESPE","Modo 2 de apuração."],
  ["O resultado financeiro e o superávit financeiro são apurados no mesmo demonstrativo.","E","FCC","Resultado financeiro no <b>BF</b>; superávit financeiro no <b>BP</b>."],
  ["Superávit financeiro é a diferença positiva entre o ativo financeiro e o passivo financeiro, conjugando-se os saldos dos créditos adicionais transferidos e as operações de crédito a eles vinculadas.","C","FGV","Art. 43, §2º, da Lei 4.320/64."],
  ["Dados saldo em espécie para o exercício seguinte de R$ 220.396 e do exercício anterior de R$ 146.671, o resultado financeiro é de R$ 73.725.","C","VUNESP","Modo 1: basta a diferença."],
  ["Uma variação positiva na disponibilidade do período é, necessariamente, sinal de bom desempenho da gestão financeira.","E","FUNDATEC","Pode decorrer da elevação do endividamento."],
  ["Uma variação negativa na disponibilidade pode decorrer de redução do endividamento, não significando necessariamente mau desempenho.","C","CESPE","Por isso a análise deve ser conjunta com o BP."],
  ["A análise do desempenho da gestão financeira deve ser feita em conjunto com o Balanço Patrimonial.","C","FCC","Considerando as demais variáveis orçamentárias e extraorçamentárias."],
  ["As classes 1 e 2 do PCASP são utilizadas para os saldos em espécie do exercício anterior e para o exercício seguinte.","C","FGV","E também para depósitos restituíveis e valores vinculados."],
  ["As transferências financeiras concedidas são registradas com contas da classe 4 do PCASP.","E","VUNESP","Concedidas usam a <b>classe 3 (VPD)</b>; a classe 4 é das recebidas."],
  ["A inscrição de restos a pagar é registrada com contas da classe 5 do PCASP na elaboração do Balanço Financeiro.","C","FUNDATEC","Classe 5 — Orçamento Aprovado."],
  ["O pagamento de restos a pagar é registrado com contas da classe 6 do PCASP.","C","CESPE","Classe 6 — Execução do Orçamento."],
  ["A 10ª edição do MCASP incluiu as classes 7 e 8 na elaboração do Balanço Financeiro.","C","FCC","Assim o BF passa a usar as oito classes."],
  ["O Balanço Financeiro é elaborado apenas com as classes 5 e 6 do PCASP.","E","FGV","Utiliza as classes 1 a 8."],
  ["Sempre que a utilização de um procedimento afetar o resultado financeiro apurado no Balanço Financeiro, tal procedimento deverá ser evidenciado em notas explicativas.","C","VUNESP","Regra geral das notas do BF."],
  ["Se o ente considerar a retenção como paga apenas na baixa da obrigação, deverá promover ajuste no saldo em espécie.","E","FUNDATEC","Nesse caso <b>nenhum ajuste</b> é promovido; o ajuste é quando se considera paga na liquidação."],
  ["No Balanço Financeiro as receitas orçamentárias são apresentadas líquidas de deduções.","C","CESPE","O detalhamento pode ir em quadros anexos e notas explicativas."],
  ["A aprovação da lei orçamentária anual afeta o resultado financeiro do exercício.","E","FCC","Não há arrecadação de receita nem empenho de despesa."],
  ["A inscrição de restos a pagar não afeta o resultado orçamentário, mas afeta o resultado financeiro.","C","FGV","Receita extraorçamentária."],
  ["O pagamento de restos a pagar reduz o resultado financeiro do exercício.","C","VUNESP","É despesa extraorçamentária."],
  ["A contratação de operação de crédito com recebimento imediato afeta o resultado financeiro.","C","FUNDATEC","É receita orçamentária arrecadada."],
  ["O recebimento de um veículo em doação afeta o resultado financeiro do exercício.","E","CESPE","É VPA; afeta BP e DVP."],
  ["O registro da depreciação reduz o resultado financeiro.","E","FCC","Depreciação é VPD, não despesa orçamentária."],
  ["O recebimento de doação em dinheiro afeta o resultado financeiro.","C","FGV","Há arrecadação de receita."],
  ["Arrecadados R$ 180 mil de impostos e R$ 120 mil de operação de crédito, empenhados R$ 200 mil de imóvel com metade inscrita em restos a pagar e R$ 100 mil de pessoal, o resultado financeiro é superavitário em R$ 100 mil.","C","VUNESP","180 + 120 − 200 + 100 − 100 = 100."],
  ["No exemplo acima, a inscrição de restos a pagar de R$ 100 mil entra como receita extraorçamentária.","C","FUNDATEC","Por isso soma no cálculo do resultado financeiro."],
  ["O Balanço Financeiro demonstra a receita orçamentária realizada e a despesa orçamentária executada por fonte ou destinação de recurso.","C","CESPE","Alínea a da composição."],
  ["O Balanço Financeiro evidencia o saldo em espécie apenas do exercício seguinte.","E","FCC","Também o do exercício anterior."],
  ["As outras movimentações financeiras estão contabilizadas nas contas de Investimentos e Aplicações Temporárias de Curto e Longo Prazo do PCASP.","C","FGV","Definição do MCASP."],
  ["As receitas e despesas orçamentárias não vinculadas são de livre alocação entre a origem e a aplicação de recursos.","C","VUNESP","Para atender a quaisquer finalidades."],
  ["No Balanço Financeiro, as receitas devem ser informadas pelos seus totais, vedadas quaisquer deduções.","E","FUNDATEC","Essa é a regra da LOA; no BF vão líquidas."],
  ["As classes 7 e 8 no Balanço Financeiro registram entradas e saídas de caixa sem execução orçamentária e que não sejam movimentações extraorçamentárias.","C","CESPE","Uso das contas de controle."],
  ["O Balanço Financeiro possui três quadros, assim como o Balanço Orçamentário.","E","FCC","O BF possui <b>um único</b> quadro."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("O que o Balanço Financeiro mostra",
      '<div class="box"><span class="bl">Base legal</span>'+
      '<p class="mn"><em>Art. 103 da Lei 4.320/64 — receita e despesa orçamentárias + recebimentos e pagamentos extraorçamentários + saldos em espécie do exercício anterior e para o seguinte.</em></p></div>'+
      '<div class="box"><span class="bl">INGRESSOS</span>'+
      '<ul><li><b>I</b> Receita Orçamentária — segregada em <b>não vinculados</b>, <b>vinculados (exceto RPPS)</b> e <b>vinculados ao RPPS</b>;</li>'+
      '<li><b>II</b> Transferências Financeiras Recebidas;</li>'+
      '<li><b>III</b> Outras Movimentações Financeiras Recebidas — <b>resgate</b> de investimentos e <b>desbloqueios</b> de valores;</li>'+
      '<li><b>IV</b> Recebimentos Extraorçamentários;</li>'+
      '<li><b>V</b> Saldo do Exercício Anterior.</li></ul></div>'+
      '<div class="box"><span class="bl">DISPÊNDIOS</span>'+
      '<ul><li><b>VII</b> Despesa Orçamentária (mesma segregação);</li>'+
      '<li><b>VIII</b> Transferências Financeiras Concedidas;</li>'+
      '<li><b>IX</b> Outras Movimentações Financeiras Concedidas — <b>transferências para</b> investimentos e <b>bloqueios</b> de valores;</li>'+
      '<li><b>X</b> Pagamentos Extraorçamentários;</li>'+
      '<li><b>XI</b> Saldo para o Exercício Seguinte.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Extraorçamentários — decore os exemplos</span>'+
      '<p><b>Recebimentos:</b> consignações em folha, fianças, cauções, <b>ARO</b>, <b>inscrição de restos a pagar</b>.</p>'+
      '<p><b>Pagamentos:</b> devolução de fianças e cauções, resgate da ARO, <b>pagamento de restos a pagar</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Como o BF fecha</span>'+
      '<p>Ingressos e dispêndios se equilibram pela inclusão do <b>Saldo do Exercício Anterior</b> nos ingressos e do <b>Saldo para o Exercício Seguinte</b> nos dispêndios. Cada saldo compreende <b>caixa e equivalentes (exceto RPPS)</b>, <b>caixa e equivalentes RPPS</b> e <b>depósitos restituíveis e valores vinculados</b>.</p></div>')
  ],
  V2:[
    sl("Definições, objetivo e restos a pagar",
      '<div class="box"><span class="bl">Vinculadas × não vinculadas</span>'+
      '<p><b>Não vinculadas:</b> receitas líquidas de deduções e despesas de <b>livre alocação</b>, para <b>quaisquer finalidades</b>.</p>'+
      '<p><b>Vinculadas:</b> aplicação <b>definida em lei</b> conforme a <b>origem</b>. Identificam-se pelo mecanismo <b>fonte ou destinação de recursos</b>, que mostra <b>como</b> a despesa é financiada.</p></div>'+
      '<div class="box"><span class="bl">Outras movimentações financeiras</span>'+
      '<p>Impactam o caixa em contrapartida a <b>transferências ou resgates de investimentos e aplicações financeiras</b> sujeitos a variações significativas — contas de <b>Investimentos e Aplicações Temporárias</b> de curto e longo prazo. Incluem também os <b>bloqueios judiciais</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Objetivo — e a armadilha</span>'+
      '<p>O BF evidencia <b>todas as movimentações de caixa e equivalentes</b> do exercício, permitindo apurar o <b>RESULTADO FINANCEIRO</b>. Ele <b>não</b> apura <b>superávit ou déficit financeiro</b> — isso é do <b>Balanço Patrimonial</b>.</p>'+
      '<p>O <b>ISF</b> não foi criado para subsidiar o BF, que por isso não contém todas as contas patrimoniais com <b>ISF (F)</b>.</p></div>'+
      '<div class="box"><span class="bl">Restos a pagar (art. 103, § único)</span>'+
      '<p>Os RP do exercício são <b>computados na receita extraorçamentária</b> para <b>compensar sua inclusão na despesa orçamentária</b> — artifício que mantém <b>ingressos = dispêndios</b>.</p>'+
      '<p class="mn"><em>Inscrição = receita extra · Pagamento = despesa extra · Não afetam o BO, afetam o BF</em></p></div>'+
      '<div class="box tip"><span class="bl">BF × BO</span>'+
      '<ul><li><b>1 quadro</b> (BF) × <b>3 quadros</b> (BO);</li>'+
      '<li><b>fonte/destinação</b> (BF) × <b>categoria econômica</b> (BO);</li>'+
      '<li>extraorçamentárias <b>contabilizadas</b> (BF) × <b>não contabilizadas</b> (BO).</li></ul></div>')
  ],
  V3:[
    sl("Apuração do resultado financeiro e desempenho da gestão",
      '<div class="box"><span class="bl">MODO 1 — quando a questão dá os saldos</span>'+
      '<p class="mn"><em>Saldo para o exercício seguinte – Saldo do exercício anterior</em></p></div>'+
      '<div class="box"><span class="bl">MODO 2 — quando dá as movimentações</span>'+
      '<p><b>(+)</b> Receitas Orçamentárias<br><b>(+)</b> Transferências Financeiras Recebidas<br><b>(+)</b> Recebimentos Extraorçamentários<br>'+
      '<b>(–)</b> Despesa Orçamentária<br><b>(–)</b> Transferências Financeiras Concedidas<br><b>(–)</b> Pagamentos Extraorçamentários</p>'+
      '<p>Os dois modos chegam ao <b>mesmo número</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Resultado × superávit financeiro</span>'+
      '<p><b>Resultado financeiro</b> → <b>Balanço Financeiro</b>. <b>Superávit financeiro</b> → <b>Balanço Patrimonial</b>: diferença positiva entre <b>Ativo Financeiro e Passivo Financeiro</b>, conjugando os <b>saldos dos créditos adicionais transferidos</b> e as <b>operações de crédito a eles vinculadas</b> (art. 43, §2º).</p></div>'+
      '<div class="box tip"><span class="bl">Desempenho da gestão</span>'+
      '<p>Variação <b>positiva</b> na disponibilidade <b>não</b> significa necessariamente boa gestão — pode vir de <b>mais endividamento</b>. Variação <b>negativa</b> <b>não</b> significa necessariamente má gestão — pode vir de <b>menos endividamento</b>. A análise se faz junto com o <b>Balanço Patrimonial</b>.</p></div>')
  ],
  V4:[
    sl("Elaboração pelo PCASP, notas e as pegadinhas de cálculo",
      '<div class="box"><span class="bl">As oito classes</span>'+
      '<ul><li><b>1 e 2</b> — depósitos restituíveis e valores vinculados; <b>saldos em espécie</b> anterior e seguinte.</li>'+
      '<li><b>3 (VPD)</b> — transferências financeiras <b>CONCEDIDAS</b>.</li>'+
      '<li><b>4 (VPA)</b> — transferências financeiras <b>RECEBIDAS</b>.</li>'+
      '<li><b>5</b> — <b>inscrição</b> de restos a pagar.</li>'+
      '<li><b>6</b> — receita e despesa orçamentárias e <b>pagamento</b> de restos a pagar.</li>'+
      '<li><b>7 e 8</b> — entradas e saídas de caixa <b>sem execução orçamentária</b> e que também <b>não</b> sejam extraorçamentárias (inclusão da <b>10ª edição</b>).</li></ul></div>'+
      '<div class="box"><span class="bl">Notas explicativas</span>'+
      '<p>Sempre que um procedimento <b>afetar o resultado financeiro</b>, deve ser evidenciado. Exemplo: <b>retenções</b> — se consideradas pagas na <b>liquidação</b>, há <b>ajuste</b> no saldo em espécie; se apenas na <b>baixa da obrigação</b>, <b>não há ajuste</b>.</p>'+
      '<p>As receitas vão <b>líquidas de deduções</b>; o detalhamento por fonte/destinação pode ir em <b>quadros anexos</b> e notas.</p></div>'+
      '<div class="box trap"><span class="bl">O que afeta o resultado FINANCEIRO</span>'+
      '<p><b>Afeta:</b> receita arrecadada, despesa empenhada, operação de crédito, doação <b>em dinheiro</b>, <b>inscrição</b> de RP (+) e <b>pagamento</b> de RP (–).</p>'+
      '<p><b>Não afeta:</b> aprovação da LOA, <b>doação de bem</b> (VPA), <b>depreciação</b> (VPD).</p>'+
      '<p class="mn"><em>Diferença-chave: a inscrição de RP não afeta o resultado ORÇAMENTÁRIO, mas afeta o FINANCEIRO.</em></p></div>')
  ]
};

var EX = {
S1:{t:"order", instr:"Ordene os grupos dos INGRESSOS no Balanço Financeiro",
  items:["Receita Orçamentária","Transferências Financeiras Recebidas","Outras Movimentações Financeiras Recebidas","Recebimentos Extraorçamentários","Saldo do Exercício Anterior"],
  why:"Os dispêndios seguem a mesma ordem, terminando no Saldo para o Exercício Seguinte."},

S2:{t:"multi", instr:"Marque a segregação das receitas e despesas orçamentárias no BF (10ª ed. do MCASP)",
  options:["Recursos não vinculados","Recursos vinculados (exceto ao RPPS)","Recursos vinculados ao RPPS",
           "Recursos de exercícios anteriores","Recursos de operações de crédito"],
  answers:[0,1,2],
  why:"Segregação quanto à origem e destinação."},

S3:{t:"sort", instr:"Classifique cada item no grupo de outras movimentações financeiras",
  buckets:["Recebidas","Concedidas"],
  items:[["Resgate de investimentos e aplicações financeiras",0],["Desbloqueios de valores em caixa",0],
         ["Transferências para investimentos e aplicações financeiras",1],["Bloqueios de valores em caixa",1]],
  why:"Resgate e desbloqueio entram; transferência e bloqueio saem."},

S4:{t:"multi", instr:"Marque os recebimentos extraorçamentários",
  options:["Consignações em folha de pagamento","Fianças","Cauções",
           "Operação de crédito por ARO","Inscrição de restos a pagar",
           "Receita de impostos","Transferências constitucionais recebidas"],
  answers:[0,1,2,3,4],
  why:"As duas últimas são receitas orçamentárias."},

S5:{t:"multi", instr:"O que compõe o Saldo para o Exercício Seguinte?",
  options:["Caixa e equivalentes de caixa (exceto RPPS)","Caixa e equivalentes de caixa RPPS",
           "Depósitos restituíveis e valores vinculados","Créditos a receber de longo prazo",
           "Bens do ativo imobilizado"],
  answers:[0,1,2],
  why:"A linha do RPPS foi incluída pela 10ª edição do MCASP."},

S6:{t:"gap", instr:"Complete o mecanismo de equilíbrio do BF",
  before:"Ingressos e dispêndios se equilibram pela inclusão do saldo do exercício anterior nos ingressos e do ",
  after:" nos dispêndios.",
  options:["saldo para o exercício seguinte","resultado financeiro do exercício","superávit financeiro"], answer:0,
  why:"É o que fecha as duas colunas."},

S7:{t:"match", instr:"Ligue cada definição ao seu conceito",
  pairs:[["Não vinculadas","De livre alocação, para atender a quaisquer finalidades"],
         ["Vinculadas","Aplicação definida em lei de acordo com a origem"],
         ["Outras movimentações financeiras","Contrapartida a transferências ou resgates de investimentos e aplicações"]],
  why:"As vinculações se identificam pela fonte ou destinação de recursos."},

S8:{t:"mc", instr:"Onde se apura o superávit ou déficit financeiro?",
  options:["No Balanço Patrimonial","No Balanço Financeiro",
           "No Balanço Orçamentário","Na Demonstração dos Fluxos de Caixa"],
  answer:0,
  why:"O Balanço Financeiro apura o <b>resultado financeiro</b>, não o superávit."},

S9:{t:"gap", instr:"Complete o parágrafo único do art. 103",
  before:"Os Restos a Pagar do exercício serão computados na ",
  after:" para compensar sua inclusão na despesa orçamentária.",
  options:["receita extraorçamentária","receita orçamentária","despesa extraorçamentária"], answer:0,
  why:"Artifício que mantém ingressos iguais a dispêndios."},

S10:{t:"sort", instr:"Compare o Balanço Financeiro com o Balanço Orçamentário",
  buckets:["Balanço Financeiro","Balanço Orçamentário"],
  items:[["Um único quadro",0],["Três quadros",1],
         ["Discrimina por fonte ou destinação de recurso",0],
         ["Discrimina por categoria econômica",1],
         ["Contabiliza receitas e despesas extraorçamentárias",0],
         ["Não contabiliza receitas e despesas extraorçamentárias",1]],
  why:"Quadro de diferenças que a banca adora inverter."},

S11:{t:"multi", instr:"O que o quadro único do Balanço Financeiro demonstra?",
  options:["Receita realizada e despesa executada por fonte ou destinação",
           "Transferências financeiras recebidas e concedidas, destacando aportes ao RPPS",
           "Entradas e saídas de outras movimentações financeiras",
           "Recebimentos e pagamentos extraorçamentários",
           "Saldo em espécie do exercício anterior e para o seguinte",
           "A dívida consolidada líquida do ente"],
  answers:[0,1,2,3,4],
  why:"A última é do Relatório de Gestão Fiscal."},

S12:{t:"gap", instr:"Complete o objetivo do BF",
  before:"O objetivo principal do Balanço Financeiro é evidenciar todas as movimentações financeiras de entradas e saídas que impactam o ",
  after:" em um exercício financeiro.",
  options:["caixa e equivalentes de caixa","ativo financeiro","patrimônio líquido"], answer:0,
  why:"Daí a apuração do resultado financeiro."},

S13:{t:"wordbank", instr:"Monte o MODO 1 de apuração do resultado financeiro",
  target:["Saldo","para","o","exercício","seguinte","−","Saldo","do","exercício","anterior"],
  extra:["Ativo Financeiro","Passivo Financeiro","+"],
  why:"O modo 2 chega ao mesmo valor pelas movimentações."},

S14:{t:"sort", instr:"No MODO 2, cada item soma ou subtrai?",
  buckets:["Soma (+)","Subtrai (−)"],
  items:[["Receitas Orçamentárias",0],["Transferências Financeiras Recebidas",0],
         ["Recebimentos Extraorçamentários",0],["Despesa Orçamentária",1],
         ["Transferências Financeiras Concedidas",1],["Pagamentos Extraorçamentários",1]],
  why:"Entradas somam, saídas subtraem."},

S15:{t:"mc", instr:"Saldo em espécie para o exercício seguinte R$ 220.396 e do exercício anterior R$ 146.671. Qual o resultado financeiro?",
  options:["R$ 73.725","R$ 64.946","R$ 73.029","R$ 8.083"],
  answer:0,
  why:"MODO 1 — pura diferença entre os saldos."},

S16:{t:"mc", instr:"Receitas correntes realizadas R$ 500.000; despesas empenhadas R$ 400.000; inscrição de restos a pagar R$ 100.000; pagamento de RP não processados R$ 60.000. Qual o resultado financeiro?",
  options:["R$ 140.000","R$ 100.000","R$ 40.000","R$ 200.000"],
  answer:0,
  why:"500.000 + 100.000 − 400.000 − 60.000 = 140.000. Previsão e dotação são ruído."},

S17:{t:"gap", instr:"Complete o conceito de superávit financeiro",
  before:"Superávit financeiro é a diferença positiva entre o ",
  after:", conjugando-se os saldos dos créditos adicionais transferidos e as operações de crédito a eles vinculadas.",
  options:["Ativo Financeiro e o Passivo Financeiro","Ativo Permanente e o Passivo Permanente","Ativo Total e o Passivo Total"], answer:0,
  why:"Art. 43, §2º, da Lei 4.320/64."},

S18:{t:"multi", instr:"Sobre o desempenho da gestão financeira, marque o correto",
  options:["Variação positiva na disponibilidade não é necessariamente sinal de bom desempenho",
           "Variação negativa na disponibilidade não é necessariamente sinal de mau desempenho",
           "A análise deve ser feita conjuntamente com o Balanço Patrimonial",
           "Resultado financeiro positivo comprova a eficiência da gestão"],
  answers:[0,1,2],
  why:"O aumento pode vir de endividamento; a queda, de sua redução."},

S19:{t:"match", instr:"Ligue cada classe do PCASP ao seu uso no Balanço Financeiro",
  pairs:[["Classes 1 e 2","Depósitos restituíveis e saldos em espécie"],
         ["Classe 3","Transferências financeiras concedidas"],
         ["Classe 4","Transferências financeiras recebidas"],
         ["Classe 5","Inscrição de restos a pagar"],
         ["Classe 6","Receita, despesa e pagamento de restos a pagar"]],
  why:"As classes 7 e 8 cobrem entradas e saídas sem execução orçamentária."},

S20:{t:"mc", instr:"Quantas classes do PCASP são usadas para elaborar o Balanço Financeiro?",
  options:["Todas as oito","Apenas as classes 5 e 6","Apenas as classes 1 a 4","Apenas as classes 1, 2, 5 e 6"],
  answer:0,
  why:"A 10ª edição do MCASP incluiu as classes 7 e 8."},

S21:{t:"gap", instr:"Complete a regra das notas explicativas do BF",
  before:"Sempre que a utilização de um procedimento afetar o ",
  after:" apurado neste demonstrativo, tal procedimento deverá ser evidenciado em notas explicativas.",
  options:["resultado financeiro","superávit financeiro","resultado orçamentário"], answer:0,
  why:"Exemplo típico: a forma de contabilização das retenções."},

S22:{t:"sort", instr:"Retenções — há ajuste no saldo em espécie?",
  buckets:["Exige ajuste","Não exige ajuste"],
  items:[["Retenção considerada paga na liquidação",0],
         ["Retenção considerada paga apenas na baixa da obrigação",1]],
  why:"No primeiro caso há um saldo vinculado a deduzir."},

S23:{t:"sort", instr:"Afeta ou não afeta o RESULTADO FINANCEIRO?",
  buckets:["Afeta","Não afeta"],
  items:[["Inscrição de restos a pagar",0],["Pagamento de restos a pagar",0],
         ["Contratação de operação de crédito com recebimento imediato",0],
         ["Doação recebida em dinheiro",0],["Aprovação da lei orçamentária anual",1],
         ["Doação recebida de um veículo",1],["Registro da depreciação",1]],
  why:"Atenção: a inscrição de RP <b>não</b> afeta o resultado orçamentário, mas afeta o financeiro."},

S24:{t:"mc", instr:"Arrecadados R$ 180 mil de impostos e R$ 120 mil de operação de crédito; empenhados R$ 200 mil (metade paga, metade em restos a pagar) e R$ 100 mil de pessoal. Resultado financeiro?",
  options:["Superavitário em R$ 100.000","Superavitário em R$ 50.000",
           "Deficitário em R$ 20.000","Superavitário em R$ 20.000"],
  answer:0,
  why:"180 + 120 − 200 + 100 (inscrição de RP) − 100 = 100."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Pública 09","https://www.tecconcursos.com.br/s/Q2q5hr","Q2q5hr"],
  ["Caderno FCC — Contabilidade Pública 09","https://www.tecconcursos.com.br/s/Q2q5hw","Q2q5hw"],
  ["Caderno FGV — Contabilidade Pública 09","https://www.tecconcursos.com.br/s/Q2q5i4","Q2q5i4"],
  ["Caderno VUNESP — Contabilidade Pública 09","https://www.tecconcursos.com.br/s/Q2q5iE","Q2q5iE"]
];
var TECNOTA = "O Balanço Financeiro é o módulo em que mais se ganha ponto com cálculo. Treine os dois modos até automatizar e grave a diferença que decide metade das questões: a inscrição de restos a pagar não mexe no resultado orçamentário, mas mexe no financeiro.";

var UNITS = [
  {n:1, title:"Estrutura do Balanço Financeiro", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Art. 103, ingressos e dispêndios",      xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · os grupos do BF",            xp:25, data:["S1","S2","T0","T1","T2","T3"]},
    {id:"K3", type:"drill",  title:"Praticar · movimentações e extras",     xp:25, data:["S3","S4","T4","T5","T6","T7","T8"]},
    {id:"K4", type:"drill",  title:"Praticar · saldos em espécie",          xp:25, data:["S5","S6","T9","T10","T11"]},
    {id:"K5", type:"flash",  title:"Flashcards · estrutura do BF",          xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12]}
  ]},
  {n:2, title:"Definições, objetivo e restos a pagar", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Vinculadas, objetivo e o art. 103 §único", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · vinculadas e não vinculadas", xp:25, data:["S7","S8","T12","T13","T14","T15"]},
    {id:"K8", type:"drill",  title:"Praticar · objetivo e ISF",             xp:25, data:["S9","S12","T16","T17","T18","T19"]},
    {id:"K9", type:"drill",  title:"Praticar · BF contra BO",               xp:25, data:["S10","S11","T20","T21","T22","T23","T24"]},
    {id:"K10",type:"flash",  title:"Flashcards · definições e restos a pagar", xp:15, data:[13,14,15,16,17,18,19,20,21,22,23,24,25]}
  ]},
  {n:3, title:"Resultado financeiro", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Os dois modos e o desempenho da gestão", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · os dois modos",              xp:25, data:["S13","S14","T25","T26","T27"]},
    {id:"K13",type:"drill",  title:"Praticar · cálculo do resultado",       xp:25, data:["S15","S16","T28","T29"]},
    {id:"K14",type:"drill",  title:"Praticar · superávit e gestão",         xp:25, data:["S17","S18","T30","T31","T32"]},
    {id:"K15",type:"flash",  title:"Flashcards · resultado financeiro",     xp:15, data:[26,27,28,29,30,31,32,33]}
  ]},
  {n:4, title:"Elaboração, notas e pegadinhas", cvar:"u4", lessons:[
    {id:"K16",type:"teoria", title:"As oito classes, notas e o que afeta o RF", xp:10, data:"V4"},
    {id:"K17",type:"drill",  title:"Praticar · classes do PCASP",           xp:25, data:["S19","S20","T33","T34","T35","T36","T37","T38"]},
    {id:"K18",type:"drill",  title:"Praticar · notas explicativas",         xp:25, data:["S21","S22","T39","T40","T41"]},
    {id:"K19",type:"drill",  title:"Praticar · o que afeta o resultado",    xp:25, data:["S23","S24","T42","T43","T44","T45","T46","T47","T48","T49","T50","T51","T52","T53","T54","T55","T56","T57"]},
    {id:"K20",type:"flash",  title:"Flashcards · elaboração e pegadinhas",  xp:15, data:[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]}
  ]},
  {n:5, title:"Fixação", cvar:"u5", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",               xp:60, data:null},
    {id:"K21", type:"missao", title:"Missão TEC Concursos",                 xp:15, data:null},
    {id:"K22", type:"prova",  title:"Simulado cronometrado",                xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo — é a definição de abertura do Resumo: o Balanço Financeiro evidencia as <b>receitas e despesas orçamentárias</b>, bem como os <b>ingressos e dispêndios extraorçamentários</b>, conjugados com os <b>saldos de caixa do exercício anterior</b> e os que se transferem para o início do exercício seguinte.</p><p>São as quatro evidenciações do esquema: receitas e despesas orçamentárias; recebimentos e pagamentos extraorçamentários; saldo de caixa do exercício anterior; saldo que se transfere para o exercício seguinte.</p><p class='fb-fonte'>Resumo 09 · <i>Balanço Financeiro — art. 103 da Lei nº 4.320/64</i></p>",
1:"<p>Errado por um número. O Balanço Financeiro está no <b>art. 103</b> da Lei nº 4.320/64, que é o dispositivo transcrito no Resumo. O art. 102 é o do Balanço Orçamentário.</p><p>Fixe a dupla: <b>102 = Orçamentário</b>, <b>103 = Financeiro</b>. E o parágrafo único desse mesmo art. 103 é o dos restos a pagar computados na receita extraorçamentária.</p><p class='fb-fonte'>Resumo 09 · <i>Balanço Financeiro — art. 103 da Lei nº 4.320/64</i></p>",
2:"<p>Certo. Observação 1: a <b>10ª edição do MCASP</b> atualizou o item I do Balanço Financeiro e, a partir de <b>2024</b>, as receitas orçamentárias passam a ser segregadas quanto à origem e destinação em <b>recursos não vinculados</b>, <b>recursos vinculados (exceto ao RPPS)</b> e <b>recursos vinculados ao RPPS</b>.</p><p>A mesma segregação vale para o item VII, do lado dos dispêndios: a despesa orçamentária também se abre nesses três blocos.</p><p class='fb-fonte'>Resumo 09 · <i>Estrutura do Balanço Financeiro — OBSERVAÇÕES sobre receitas</i></p>",
3:"<p>Certo. Observação 2: a 10ª edição do MCASP incluiu o grupo <b>Outras Movimentações Financeiras Recebidas (III)</b>, detalhado em <b>Resgate de Investimentos e Aplicações Financeiras</b> e <b>Desbloqueios de Valores em Caixa</b>.</p><p>Repare no espelho do lado dos dispêndios, item IX: <b>Transferências para Investimentos e Aplicações Financeiras</b> e <b>Bloqueios de Valores em Caixa</b>. Entrada resgata e desbloqueia; saída transfere e bloqueia.</p><p class='fb-fonte'>Resumo 09 · <i>Outras Movimentações Financeiras Recebidas (III)</i></p>",
4:"<p>Errado — trocou o lado. <b>Desbloqueios</b> de valores em caixa estão nas Outras Movimentações Financeiras <b>Recebidas (III)</b>. Nas <b>Concedidas (IX)</b> ficam as <b>Transferências para Investimentos e Aplicações Financeiras</b> e os <b>Bloqueios de Valores em Caixa</b>.</p><p>Mnemônica do par: o que entra no caixa é <b>resgate e desbloqueio</b>; o que sai do caixa é <b>transferência e bloqueio</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Outras Movimentações Financeiras Concedidas (IX)</i></p>",
5:"<p>Certo. Observação 3 dos dois lados do quadro: as transferências financeiras recebidas e concedidas refletem as movimentações de recursos financeiros entre <b>órgãos e entidades da administração direta e indireta</b> e <b>podem ser orçamentárias ou extraorçamentárias</b>.</p><p>Na composição do Balanço Financeiro o material completa: decorrentes ou independentes da execução orçamentária, destacando-se os aportes de recursos para o <b>RPPS</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Transferências financeiras recebidas e concedidas</i></p>",
6:"<p>Certo — são três dos exemplos da lista do Resumo. Os <b>recebimentos extraorçamentários</b> compreendem os ingressos de recursos <b>não previstos no orçamento</b>: <b>consignações em folha de pagamento</b>, <b>fianças</b>, <b>cauções</b>, <b>operação de crédito por ARO</b> e <b>inscrição de restos a pagar</b>.</p><p>Do outro lado, os pagamentos extraorçamentários são as devoluções desses ingressos: devolução de fianças e cauções, resgate da ARO e pagamento de restos a pagar.</p><p class='fb-fonte'>Resumo 09 · <i>Recebimentos extraorçamentários</i></p>",
7:"<p>Errado na natureza. A <b>operação de crédito por ARO</b> (Antecipação de Receita Orçamentária) está na lista de <b>recebimentos extraorçamentários</b> do Resumo, e não entre as receitas orçamentárias.</p><p>Contraste com a operação de crédito comum, que é <b>receita orçamentária</b> e afeta o resultado financeiro. A ARO é mero adiantamento a ser resgatado — tanto que o resgate figura entre os <b>pagamentos extraorçamentários</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Recebimentos e pagamentos extraorçamentários</i></p>",
8:"<p>Certo. O <b>pagamento de restos a pagar</b> é o último exemplo da lista de <b>pagamentos extraorçamentários</b>, ao lado da devolução de fianças, da devolução de cauções e do resgate da operação de crédito por ARO.</p><p>São saídas que <b>não precisam se submeter ao processo de execução orçamentária</b> (empenho, liquidação e pagamento), pois correspondem a devoluções dos recebimentos extraorçamentários.</p><p class='fb-fonte'>Resumo 09 · <i>Pagamentos extraorçamentários</i></p>",
9:"<p>Certo — são as três linhas do grupo <b>Saldo para o Exercício Seguinte (XI)</b>: <b>Caixa e Equivalentes de Caixa (exceto RPPS)</b>, <b>Caixa e Equivalentes de Caixa RPPS</b> e <b>Depósitos Restituíveis e Valores Vinculados</b>.</p><p>Essa última linha é onde se demonstra o valor das <b>entradas compensatórias no ativo e passivo financeiros</b>. O grupo Saldo do Exercício Anterior (V) tem a mesma abertura.</p><p class='fb-fonte'>Resumo 09 · <i>Saldo para o Exercício Seguinte (XI)</i></p>",
10:"<p>Certo — é a observação 6 do lado dos dispêndios: os <b>Ingressos</b> e os <b>Dispêndios</b> se equilibram por meio da inclusão do <b>Saldo do Exercício Anterior</b> na coluna dos Ingressos e do <b>Saldo para o Exercício Seguinte</b> na coluna dos Dispêndios.</p><p>Por isso o TOTAL (VI) = I + II + III + IV + V fecha com o TOTAL do outro lado. Sem esses dois saldos, o quadro não fecharia.</p><p class='fb-fonte'>Resumo 09 · <i>Estrutura do Balanço Financeiro — equilíbrio de ingressos e dispêndios</i></p>",
11:"<p>Certo. Observação 5: a <b>10ª edição do MCASP</b> incluiu a linha <b>Caixa e Equivalentes de Caixa RPPS</b> nos grupos Saldo do Exercício Anterior (V) e Saldo para o Exercício Seguinte (XI), de modo a dar maior <b>transparência e representatividade</b> a esses recursos.</p><p>Guarde o pacote de novidades da 10ª edição no Balanço Financeiro: segregação por vinculação (itens I e VII), grupos de Outras Movimentações Financeiras (III e IX), linha de caixa do RPPS (V e XI) e inclusão das classes 7 e 8.</p><p class='fb-fonte'>Resumo 09 · <i>Saldo do Exercício Anterior e para o Exercício Seguinte</i></p>",
12:"<p>Errado — inverteu as definições. Essa é a descrição das receitas e despesas orçamentárias <b>VINCULADAS</b>: aquelas cujas aplicações dos recursos são <b>definidas em lei, de acordo com sua origem</b>.</p><p>As <b>não vinculadas</b> são as de <b>livre alocação entre a origem e a aplicação de recursos</b>, para atender a quaisquer finalidades. Nos dois casos as receitas são consideradas <b>líquidas das deduções</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Definições — receitas e despesas vinculadas e não vinculadas</i></p>",
13:"<p>Certo. Na definição de receitas e despesas orçamentárias <b>vinculadas</b>, o Resumo diz que a identificação das vinculações pode ser feita por meio do mecanismo <b>fonte ou destinação de recursos</b>.</p><p>E completa: as fontes ou destinações de recursos <b>indicam como são financiadas as despesas orçamentárias</b>, atendendo sua destinação legal.</p><p class='fb-fonte'>Resumo 09 · <i>Definições — receitas e despesas vinculadas</i></p>",
14:"<p>Certo. Na definição de <b>Outras Movimentações Financeiras</b>, o Resumo acrescenta que também serão registradas as transações que impactam o caixa e equivalentes de caixa referentes aos <b>bloqueios judiciais de valores apreendidos por decisão judicial</b>.</p><p>O núcleo do grupo são os ingressos e dispêndios em contrapartida a transferências ou resgates de investimentos e aplicações financeiras sujeitas a variações significativas de valor.</p><p class='fb-fonte'>Resumo 09 · <i>Definições — outras movimentações financeiras</i></p>",
15:"<p>Certo — é a redação do Resumo: o objetivo principal do Balanço Financeiro é evidenciar <b>todas as movimentações financeiras de entradas e saídas que impactam o caixa e equivalentes de caixa</b> em um exercício financeiro, possibilitando a apuração do <b>resultado financeiro</b> do exercício.</p><p>E vem a ressalva imediata: isso <b>não se confunde</b> com a apuração do superávit ou déficit financeiro, informação evidenciada pelo <b>Balanço Patrimonial</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Objetivo principal do Balanço Financeiro</i></p>",
16:"<p>Errado por uma palavra. O Balanço Financeiro apura o <b>RESULTADO financeiro</b>; o <b>SUPERÁVIT (ou déficit) financeiro</b> é evidenciado pelo <b>Balanço Patrimonial</b>.</p><p>É o quadro <b>NÃO CONFUNDA</b> do Resumo, em duas linhas: <b>Resultado Financeiro → Balanço Financeiro</b>; <b>Superávit Financeiro → Balanço Patrimonial</b>. No exemplo do material, os R$ 300.000 de resultado financeiro da prefeitura nada dizem sobre haver superávit ou déficit financeiro.</p><p class='fb-fonte'>Resumo 09 · <i>NÃO CONFUNDA — resultado financeiro x superávit financeiro</i></p>",
17:"<p>Errado. O Resumo afirma exatamente o contrário: o <b>Indicador de Superávit Financeiro (ISF) não foi criado para subsidiar a elaboração do Balanço Financeiro</b>, logo este demonstrativo <b>não conterá</b> todas as contas contábeis de natureza patrimonial com ISF (F).</p><p>É a frase que fecha o tópico do objetivo principal, logo depois do exemplo da prefeitura. Guarde a negativa inteira: o ISF não serve a este demonstrativo.</p><p class='fb-fonte'>Resumo 09 · <i>Objetivo principal do Balanço Financeiro — ISF</i></p>",
18:"<p>Certo — é a literalidade do <b>parágrafo único do art. 103</b> da Lei nº 4.320/64, transcrito no Resumo: os restos a pagar do exercício serão computados na <b>receita extraorçamentária</b> para <b>compensar sua inclusão na despesa orçamentária</b>.</p><p>O exemplo do material: <b>R$ 50.000</b> empenhados em <b>2023</b> pelo Município de <b>Guapimirim</b> para compra de material de escritório e não pagos. Entram na despesa orçamentária porque foram empenhados; para compensar, são inscritos como receita extraorçamentária e o balanço fecha (ingressos = dispêndios).</p><p class='fb-fonte'>Resumo 09 · <i>Restos a pagar — parágrafo único do art. 103</i></p>",
19:"<p>Errado — inverteu os dois demonstrativos. O quadro do Resumo diz o oposto: a inscrição e o pagamento de restos a pagar <b>não afetam o Balanço Orçamentário, mas afetam o Balanço Financeiro</b>.</p><p>Razão: a despesa já entrou no Balanço Orçamentário no <b>empenho</b>. A inscrição é <b>receita extraorçamentária</b> e o pagamento, <b>despesa extraorçamentária</b> — e o extraorçamentário só transita pelo Balanço Financeiro.</p><p class='fb-fonte'>Resumo 09 · <i>Restos a pagar — inscrição e pagamento</i></p>",
20:"<p>Certo. O Resumo é explícito: o Balanço Financeiro é composto por <b>um único quadro</b>, que evidencia a movimentação financeira das entidades do setor público.</p><p>É a primeira linha do quadro <b>NÃO CONFUNDA</b>: <b>Balanço Financeiro — um único quadro</b>; <b>Balanço Orçamentário — 03 quadros</b> (principal, RP não processados e RP processados).</p><p class='fb-fonte'>Resumo 09 · <i>Composição do Balanço Financeiro</i></p>",
21:"<p>Errado — essa é a regra do <b>Balanço Orçamentário</b>. No <b>Balanço Financeiro</b>, as receitas e despesas orçamentárias devem ser discriminadas por <b>fonte ou destinação de recurso</b>.</p><p>Segunda linha do quadro <b>NÃO CONFUNDA</b>: BF por <b>fonte/destinação</b>; BO por <b>categoria econômica</b>. E a discriminação no BF ainda se abre em recursos não vinculados, vinculados exceto RPPS e vinculados ao RPPS.</p><p class='fb-fonte'>Resumo 09 · <i>NÃO CONFUNDA — Balanço Financeiro x Balanço Orçamentário</i></p>",
22:"<p>Certo — terceira linha do quadro <b>NÃO CONFUNDA</b>: as receitas e despesas <b>extraorçamentárias são contabilizadas no BF</b> e <b>não são contabilizadas no BO</b>.</p><p>É o que explica a regra dos restos a pagar: inscrição (receita extraorçamentária) e pagamento (despesa extraorçamentária) aparecem no Balanço Financeiro e ficam fora do Balanço Orçamentário.</p><p class='fb-fonte'>Resumo 09 · <i>NÃO CONFUNDA — Balanço Financeiro x Balanço Orçamentário</i></p>",
23:"<p>Certo. Na composição do Balanço Financeiro, a letra <b>b</b> traz as <b>transferências financeiras recebidas e concedidas</b>, decorrentes ou independentes da execução orçamentária, <b>destacando os aportes de recursos para o RPPS</b>.</p><p>O RPPS aparece em três pontos do demonstrativo: na segregação das receitas e despesas orçamentárias, nas transferências financeiras e na linha Caixa e Equivalentes de Caixa RPPS dos saldos em espécie.</p><p class='fb-fonte'>Resumo 09 · <i>Composição do Balanço Financeiro</i></p>",
24:"<p>Certo — é a frase que fecha a composição do Balanço Financeiro: a discriminação por <b>fonte / destinação de recurso</b> permite evidenciar a <b>origem e a aplicação dos recursos financeiros</b> referentes à receita e despesa orçamentárias.</p><p>É a marca do Balanço Financeiro no quadro NÃO CONFUNDA: enquanto o Balanço Orçamentário discrimina por categoria econômica, aqui a chave é a fonte ou destinação.</p><p class='fb-fonte'>Resumo 09 · <i>Composição do Balanço Financeiro</i></p>",
25:"<p>Certo — é o <b>MODO 1</b> de apuração do Resumo: <b>saldo em espécie para o exercício seguinte menos saldo em espécie do exercício anterior</b>.</p><p>No exemplo do material: R$ 600.000 – R$ 200.000 = <b>R$ 400.000</b> de resultado financeiro do exercício. O MODO 2 chega ao mesmo número por outro caminho.</p><p class='fb-fonte'>Resumo 09 · <i>Apuração do resultado financeiro — MODO 1</i></p>",
26:"<p>Certo — é exatamente a estrutura do <b>MODO 2</b>: somam-se <b>receitas orçamentárias</b>, <b>transferências financeiras recebidas</b> e <b>recebimentos extraorçamentários</b>; subtraem-se <b>despesa orçamentária</b>, <b>transferências financeiras concedidas</b> e <b>pagamentos extraorçamentários</b>.</p><p>Com os números do material: 600.000 + 500.000 + 400.000 – 600.000 – 300.000 – 200.000 = <b>R$ 400.000</b>, o mesmo resultado do MODO 1.</p><p class='fb-fonte'>Resumo 09 · <i>Apuração do resultado financeiro — MODO 2</i></p>",
27:"<p>Errado — são demonstrativos diferentes. O quadro <b>NÃO CONFUNDA</b> do Resumo separa: o <b>resultado financeiro é apurado no Balanço Financeiro</b>; o <b>superávit financeiro é apurado no Balanço Patrimonial</b>.</p><p>O material insiste nisso duas vezes, no objetivo principal e aqui na apuração. É uma das trocas mais cobradas do assunto.</p><p class='fb-fonte'>Resumo 09 · <i>NÃO CONFUNDA — resultado financeiro x superávit financeiro</i></p>",
28:"<p>Certo — é a definição do art. 43, § 2º, da Lei nº 4.320/64, citada no Resumo: superávit financeiro é a <b>diferença positiva entre o Ativo Financeiro (AF) e o Passivo Financeiro (PF)</b>, conjugando-se ainda os <b>saldos dos créditos adicionais transferidos</b> e as <b>operações de crédito a eles vinculadas</b>.</p><p>E o quadro do material completa: ele <b>não é receita do exercício de referência</b>, pois já o foi em exercício anterior, mas constitui <b>disponibilidade</b> para utilização no exercício de referência.</p><p class='fb-fonte'>Resumo 09 · <i>O que é superávit financeiro</i></p>",
29:"<p>Certo — é a questão-exemplo do Resumo, com estes mesmos valores. Pelo <b>MODO 1</b>: R$ 220.396 (saldo para o exercício seguinte) – R$ 146.671 (saldo do exercício anterior) = <b>R$ 73.725</b>. Gabarito E.</p><p>O material confere o resultado pelo <b>MODO 2</b>: 232.026 + 31.862 + 29.610 – 167.080 – 23.779 – 28.914 = <b>R$ 73.725</b>. Tendo os dois saldos em espécie, o MODO 1 resolve em uma linha.</p><p class='fb-fonte'>Resumo 09 · <i>Questão-exemplo — resultado financeiro</i></p>",
30:"<p>Errado por causa do <i>necessariamente</i>. O Resumo diz que uma <b>variação positiva na disponibilidade do período não é sinônimo, necessariamente, de bom desempenho</b> da gestão financeira.</p><p>Motivo dado pelo material: o aumento pode decorrer da <b>elevação do endividamento público</b> — o governo pode ter contraído empréstimos para ter mais recursos disponíveis no curto prazo. Ter mais caixa não significa gestão eficiente.</p><p class='fb-fonte'>Resumo 09 · <i>Desempenho da gestão financeira</i></p>",
31:"<p>Certo — é o outro lado do esquema do Resumo: a <b>variação negativa não significa, necessariamente, mau desempenho</b>, pois pode decorrer de uma <b>redução no endividamento</b>.</p><p>Guarde as duas setas do quadro em par: variação positiva não é sinônimo necessariamente de bom desempenho; variação negativa não é sinônimo necessariamente de mau desempenho.</p><p class='fb-fonte'>Resumo 09 · <i>Desempenho da gestão financeira</i></p>",
32:"<p>Certo. O Resumo conclui o tópico dizendo que a análise deve ser feita <b>conjuntamente com o Balanço Patrimonial</b>, considerando os fatores mencionados e as demais variáveis <b>orçamentárias e extraorçamentárias</b>.</p><p>Coerente com o resto do material: é no Balanço Patrimonial que está a informação sobre superávit ou déficit financeiro, que o Balanço Financeiro sozinho não entrega.</p><p class='fb-fonte'>Resumo 09 · <i>Desempenho da gestão financeira</i></p>",
33:"<p>Certo. No quadro de elaboração, as <b>classes 1 e 2</b> são usadas para os recebimentos e pagamentos extraorçamentários de <b>Depósitos Restituíveis e Valores Vinculados</b>, para o <b>Saldo em Espécie do Exercício Anterior</b> e para o <b>Saldo em Espécie para o Exercício Seguinte</b>.</p><p>Lembre-se: a <b>classe 1</b> trata das contas do <b>Ativo</b> e a <b>classe 2</b>, das contas do <b>Passivo</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Elaboração do Balanço Financeiro — classes 1 e 2</i></p>",
34:"<p>Errado — inverteu as classes. As <b>transferências financeiras CONCEDIDAS</b> usam a <b>classe 3</b> (Variações Patrimoniais Diminutivas — VPD). A <b>classe 4</b> é das <b>RECEBIDAS</b> (Variações Patrimoniais Aumentativas — VPA).</p><p>Mnemônica simples: <b>3 = VPD = concedida</b> (saiu, diminuiu); <b>4 = VPA = recebida</b> (entrou, aumentou).</p><p class='fb-fonte'>Resumo 09 · <i>Elaboração do Balanço Financeiro — classes 3 e 4</i></p>",
35:"<p>Certo. No quadro de elaboração, a <b>classe 5</b> é usada para a <b>Inscrição de Restos a Pagar</b> — lembrando que a classe 5 trata do <b>Orçamento Aprovado</b>.</p><p>Encaixe com a classe seguinte: a <b>classe 6</b> (Execução do Orçamento) cobre receita orçamentária, despesa orçamentária e <b>pagamento</b> de restos a pagar. Inscrição é 5; pagamento é 6.</p><p class='fb-fonte'>Resumo 09 · <i>Elaboração do Balanço Financeiro — classe 5</i></p>",
36:"<p>Certo. A <b>classe 6</b> (Execução do Orçamento) é utilizada para a <b>Receita Orçamentária</b>, a <b>Despesa Orçamentária</b> e o <b>Pagamento de Restos a Pagar</b>.</p><p>Não troque com a classe 5, que no Balanço Financeiro serve apenas à <b>inscrição</b> de restos a pagar.</p><p class='fb-fonte'>Resumo 09 · <i>Elaboração do Balanço Financeiro — classe 6</i></p>",
37:"<p>Certo — é o quadro <b>ATENÇÃO</b> do Resumo: a 10ª edição do MCASP <b>incluiu na elaboração do Balanço Financeiro as classes 7 e 8</b> (controles devedores e credores) do PCASP.</p><p>Portanto, o Balanço Financeiro passa a ser elaborado com as classes <b>1, 2, 3, 4, 5, 6, 7 e 8</b>. Lembrando: classe 7 é de natureza de controle <b>devedor</b>; classe 8, de controle <b>credor</b>.</p><p class='fb-fonte'>Resumo 09 · <i>ATENÇÃO — classes 7 e 8 no Balanço Financeiro</i></p>",
38:"<p>Errado. O quadro <b>ATENÇÃO</b> é expresso: o Balanço Financeiro será elaborado utilizando-se as classes <b>1, 2, 3, 4, 5, 6, 7 e 8</b> do PCASP.</p><p>Quem se elabora só com as classes 5 e 6 (grupo 2) é o <b>Balanço Orçamentário</b>. Não importe para cá aquela regra — aqui entram desde o ativo e o passivo até os controles devedores e credores.</p><p class='fb-fonte'>Resumo 09 · <i>Elaboração do Balanço Financeiro</i></p>",
39:"<p>Certo — é a regra de abertura das notas explicativas: <b>sempre que a utilização de um procedimento afetar o resultado financeiro</b> apurado neste demonstrativo, tal procedimento <b>deverá ser evidenciado em notas explicativas</b>.</p><p>O exemplo do Resumo é a <b>forma de contabilização de retenções</b>, que, conforme o critério adotado, afeta os saldos em espécie.</p><p class='fb-fonte'>Resumo 09 · <i>Notas explicativas do Balanço Financeiro</i></p>",
40:"<p>Errado — inverteu a hipótese. Se o ente considerar a retenção como paga <b>apenas na baixa da obrigação</b> (no momento do pagamento, débito de passivo e crédito de caixa), <b>nenhum ajuste será promovido</b>.</p><p>O ajuste no saldo em espécie é exigido na outra hipótese: quando o ente considera a retenção como paga <b>no momento da liquidação</b> (antes do pagamento), a fim de demonstrar que há um saldo vinculado a ser deduzido.</p><p class='fb-fonte'>Resumo 09 · <i>Notas explicativas — contabilização de retenções</i></p>",
41:"<p>Certo. O Resumo afirma no tópico de notas explicativas que <b>as receitas orçamentárias serão apresentadas líquidas de deduções</b>, e que o detalhamento das deduções por fonte/destinação de recursos pode ser apresentado em quadros anexos ao Balanço Financeiro e em notas explicativas.</p><p>É o quadro <b>NÃO CONFUNDA</b>: na LOA, todas as receitas e despesas constam pelos seus totais, vedadas quaisquer deduções; no Balanço Financeiro, valores líquidos.</p><p class='fb-fonte'>Resumo 09 · <i>NÃO CONFUNDA — LOA x Balanço Financeiro</i></p>",
42:"<p>Errado. Observação 1 do Resumo após a questão-exemplo: a <b>aprovação da lei orçamentária anual não afeta o resultado financeiro</b>, pois <b>não há arrecadação de receita nem empenho de despesa</b>.</p><p>Na questão-exemplo do material, a LOA de <b>R$ 300 mil</b> é justamente o dado que se descarta. Aprovar orçamento não movimenta caixa.</p><p class='fb-fonte'>Resumo 09 · <i>Questão-exemplo — OBSERVAÇÕES</i></p>",
43:"<p>Certo — é a observação 2, na íntegra: a inscrição de Restos a Pagar <b>não afeta o resultado orçamentário</b>, por se tratar de <b>receita extraorçamentária</b>, <b>mas afeta o Resultado Financeiro</b>.</p><p>É a diferença de tratamento entre os dois demonstrativos: no Balanço Orçamentário a despesa já foi computada no empenho; no Balanço Financeiro a inscrição entra como ingresso extraorçamentário.</p><p class='fb-fonte'>Resumo 09 · <i>Questão-exemplo — OBSERVAÇÕES</i></p>",
44:"<p>Certo. O <b>pagamento de restos a pagar</b> é <b>pagamento extraorçamentário</b> e entra com sinal negativo no MODO 2 de apuração — logo, reduz o resultado financeiro.</p><p>É o que se vê na segunda questão-exemplo do Resumo: R$ 500.000 de receita realizada + R$ 100.000 de inscrição de RP – R$ 400.000 de despesa empenhada – <b>R$ 60.000 de pagamento de RP não processados</b> = <b>R$ 140.000</b> de resultado financeiro.</p><p class='fb-fonte'>Resumo 09 · <i>Apuração do resultado financeiro — MODO 2 e questão-exemplo</i></p>",
45:"<p>Certo. Observação 3: a <b>contratação de operação de crédito é receita orçamentária</b> e, portanto, <b>afeta o resultado financeiro</b>.</p><p>Na questão-exemplo do Resumo é o item III: contratação e recebimento imediato de operação de crédito de <b>R$ 120 mil</b>, que entra como receita arrecadada na apuração. Cuidado apenas para não confundir com a operação de crédito por <b>ARO</b>, que é extraorçamentária.</p><p class='fb-fonte'>Resumo 09 · <i>Questão-exemplo — OBSERVAÇÕES</i></p>",
46:"<p>Errado. Observação 4: o recebimento de um <b>VEÍCULO</b> (bem móvel) em doação <b>não afeta o resultado financeiro</b>, pois não é receita orçamentária, mas sim uma <b>Variação Patrimonial Aumentativa (VPA)</b>.</p><p>Ele afeta o <b>Balanço Patrimonial</b> e a <b>DVP</b>, não o Balanço Financeiro. A ressalva do material: se o bem for vendido depois, aí sim haverá receita orçamentária (de capital).</p><p class='fb-fonte'>Resumo 09 · <i>Questão-exemplo — OBSERVAÇÕES</i></p>",
47:"<p>Errado. Observação 5: a <b>depreciação</b> de um veículo (bem móvel) <b>não afeta o resultado financeiro</b>, pois não é despesa orçamentária, mas sim uma <b>Variação Patrimonial Diminutiva (VPD)</b>.</p><p>Faz sentido pela lógica do demonstrativo: o Balanço Financeiro evidencia movimentações que <b>impactam o caixa e equivalentes de caixa</b>, e depreciação não movimenta caixa. Ela afeta o Balanço Patrimonial e a DVP.</p><p class='fb-fonte'>Resumo 09 · <i>Questão-exemplo — OBSERVAÇÕES</i></p>",
48:"<p>Certo. Observação 6: o recebimento de <b>DINHEIRO</b> em doação <b>afeta o resultado financeiro</b>, pois nesse caso deve-se considerar que houve <b>arrecadação de receita</b>.</p><p>Contraste com a observação anterior do material: doação de <b>bem móvel</b> é VPA e não afeta; doação em <b>dinheiro</b> entra no caixa e afeta.</p><p class='fb-fonte'>Resumo 09 · <i>Questão-exemplo — OBSERVAÇÕES</i></p>",
49:"<p>Certo — é a questão-exemplo final do Resumo, com estes mesmos valores. Receitas arrecadadas: <b>R$ 180 mil</b> de impostos + <b>R$ 120 mil</b> de operação de crédito. Despesas empenhadas: <b>R$ 200 mil</b> do imóvel + <b>R$ 100 mil</b> de pessoal. Receita extraorçamentária: <b>R$ 100 mil</b> de inscrição de restos a pagar.</p><p>A conta do material: 180.000 + 120.000 – 200.000 + 100.000 – 100.000 = <b>R$ 100.000</b> superavitário. Gabarito E.</p><p class='fb-fonte'>Resumo 09 · <i>Questão-exemplo — resultado financeiro</i></p>",
50:"<p>Certo. Na resolução do Resumo, o item IV traz empenho de R$ 200 mil com metade paga à vista e metade inscrita em restos a pagar, e o material anota: <b>Inscrição de Restos a Pagar = R$ 100.000 (receita extraorçamentária)</b>.</p><p>É a aplicação do parágrafo único do art. 103: os restos a pagar do exercício são computados na receita extraorçamentária para compensar sua inclusão na despesa orçamentária. Por isso ela entra com sinal <b>positivo</b> na apuração do resultado financeiro.</p><p class='fb-fonte'>Resumo 09 · <i>Questão-exemplo — resolução</i></p>",
51:"<p>Certo — é a letra <b>a</b> da composição do Balanço Financeiro: ele demonstra a <b>receita orçamentária realizada</b> e a <b>despesa orçamentária executada, por fonte ou destinação de recurso</b>, discriminando-as em recursos não vinculados, recursos vinculados (exceto ao RPPS) e recursos vinculados ao RPPS.</p><p>Essa tripartição é a atualização trazida pela <b>10ª edição do MCASP</b> para os itens I e VII do demonstrativo.</p><p class='fb-fonte'>Resumo 09 · <i>Composição do Balanço Financeiro</i></p>",
52:"<p>Errado — faltou metade. A letra <b>e</b> da composição fala no <b>saldo em espécie do exercício anterior E para o exercício seguinte</b>.</p><p>Os dois são indispensáveis: é justamente a inclusão do <b>Saldo do Exercício Anterior (V)</b> nos ingressos e do <b>Saldo para o Exercício Seguinte (XI)</b> nos dispêndios que equilibra o quadro. E é da diferença entre eles que sai o resultado financeiro pelo MODO 1.</p><p class='fb-fonte'>Resumo 09 · <i>Composição do Balanço Financeiro</i></p>",
53:"<p>Certo. Na definição de <b>Outras Movimentações Financeiras Recebidas e Concedidas</b>, o Resumo diz que os ingressos ou dispêndios têm como contrapartida transferências ou resgates de investimentos e aplicações financeiras sujeitas a variações significativas de valor, <b>contabilizadas nas contas de Investimentos e Aplicações Temporárias no Curto e Longo Prazo do PCASP</b>.</p><p>O exemplo do material: investimento temporário de <b>R$ 50.000</b> com recursos do caixa do RPPS, lançado a débito de Investimentos e Aplicações Temporárias de Curto Prazo – RPPS e a crédito de Caixa e Equivalentes de Caixa – RPPS.</p><p class='fb-fonte'>Resumo 09 · <i>Definições — outras movimentações financeiras</i></p>",
54:"<p>Certo — é a definição do quadro do Resumo: receitas e despesas orçamentárias <b>não vinculadas</b> compreendem as receitas orçamentárias, <b>líquidas das deduções</b>, e despesas orçamentárias, ambas de <b>livre alocação entre a origem e a aplicação de recursos</b>, para atender a quaisquer finalidades.</p><p>Contraste com as <b>vinculadas</b>, cujas aplicações são definidas em lei de acordo com sua origem, identificadas pelo mecanismo de fonte ou destinação de recursos.</p><p class='fb-fonte'>Resumo 09 · <i>Definições — receitas e despesas não vinculadas</i></p>",
55:"<p>Errado — trocou o documento. Essa regra é da <b>LOA</b>. No <b>Balanço Financeiro</b>, as receitas deverão ser informadas pelos <b>valores líquidos das respectivas deduções</b>.</p><p>É o quadro <b>NÃO CONFUNDA</b> que fecha o tópico de notas explicativas: na Lei de Orçamento, totais e deduções vedadas; no Balanço Financeiro, valores líquidos, com o detalhamento das deduções por fonte/destinação em quadros anexos e notas explicativas.</p><p class='fb-fonte'>Resumo 09 · <i>NÃO CONFUNDA — LOA x Balanço Financeiro</i></p>",
56:"<p>Certo — é a descrição do Resumo para as <b>classes 7 e 8</b>: registram as entradas e saídas de caixa e equivalentes de caixa em que <b>não haja, necessariamente, execução orçamentária</b> e que também <b>não sejam evidenciadas ou provenientes de movimentações extraorçamentárias</b>.</p><p>Foram incluídas na elaboração do Balanço Financeiro pela <b>10ª edição do MCASP</b>. Classe 7 é controle <b>devedor</b>; classe 8, controle <b>credor</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Elaboração do Balanço Financeiro — classes 7 e 8</i></p>",
57:"<p>Errado no número de quadros. O <b>Balanço Financeiro é composto por um único quadro</b>; quem possui <b>03 quadros</b> é o <b>Balanço Orçamentário</b>.</p><p>Primeira linha do quadro <b>NÃO CONFUNDA</b> do Resumo. Os três quadros do Balanço Orçamentário são o principal, o da execução dos restos a pagar não processados e o da execução dos restos a pagar processados.</p><p class='fb-fonte'>Resumo 09 · <i>NÃO CONFUNDA — Balanço Financeiro x Balanço Orçamentário</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"09", nome:"Balanço Financeiro", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
