/* Contabilidade Pública — Módulo 07: Apresentação das Demonstrações Contábeis (NBC TSP 11 e 13) — modo direto */
window.MOD = window.MOD || {};
window.MOD.cpub07 = (function(){
"use strict";

var CARDS = [
  ["Qual o objetivo das DCASP?","<b>Padronizar a estrutura e as definições</b> dos elementos que as compõem. Os padrões devem ser observados por <b>União, Estados, DF e Municípios</b>, permitindo <b>evidenciação, análise e consolidação</b> das contas públicas em âmbito nacional, em consonância com o <b>PCASP</b>."],
  ["Quais demonstrações compõem as DCASP (MCASP)?","<b>BO</b> (Balanço Orçamentário), <b>BF</b> (Balanço Financeiro), <b>BP</b> (Balanço Patrimonial), <b>DVP</b>, <b>DMPL</b>, <b>DFC</b>, <b>Notas explicativas</b> e <b>Informação comparativa</b> com o período anterior."],
  ["Qual demonstração a NBC TSP 11 NÃO listou no item 21?","O <b>Balanço Financeiro</b> — que está previsto no <b>art. 101 da Lei nº 4.320/64</b>. O <b>MCASP unificou as duas listas</b> e uniformizou o conjunto completo."],
  ["Qual o objetivo da NBC TSP 11?","Estabelecer <b>como as demonstrações contábeis devem ser apresentadas</b>, para assegurar a <b>comparabilidade</b> tanto com as demonstrações de <b>períodos anteriores da mesma entidade</b> quanto com as de <b>outras entidades</b>."],
  ["O que a NBC TSP 11 estabelece para alcançar seu objetivo?","<b>Requisitos gerais</b> para a apresentação, <b>diretrizes para a estrutura</b> e os <b>requisitos mínimos de conteúdo</b>."],
  ["Reconhecimento, mensuração e divulgação de eventos específicos são tratados onde?","Em <b>outras normas</b>, não na NBC TSP 11."],
  ["Quem define a responsabilidade pela elaboração das demonstrações contábeis?","A <b>legislação brasileira</b> — <b>Lei nº 4.320/64, art. 111</b> e <b>LC nº 101/00 (LRF), art. 51</b>."],
  ["Lei 4.320/64 × LC 101/00 — o que cada uma estatui?","<b>Lei 4.320/64</b> estatui <b>Normas Gerais de Direito Financeiro</b>. <b>LC 101/00</b> estabelece <b>Normas de Finanças Públicas</b>."],
  ["Como as informações contábeis devem ficar disponíveis (item 19)?","Durante <b>todo o exercício</b>, para consulta e apreciação por <b>cidadãos e instituições da sociedade</b>, no respectivo <b>Poder Legislativo</b> e no <b>órgão técnico</b> responsável pela elaboração, e <b>divulgadas em meio eletrônico de amplo acesso público</b>."],
  ["O que é o pressuposto de continuidade (item 39)?","A presunção de que a entidade <b>permanecerá em operação</b> e <b>atenderá às suas obrigações estatutárias</b> no futuro previsível."],
  ["Qual o período mínimo a considerar na avaliação da continuidade?","<b>Doze meses</b> — <b>mas não limitado a esse período</b> — a partir da <b>data de aprovação</b> das demonstrações contábeis."],
  ["E se a entidade não tiver continuidade?","As demonstrações devem ser elaboradas sob <b>outro pressuposto</b>, como o da <b>liquidação</b>: ativos e passivos mensurados pelo <b>valor de realização líquido</b>."],
  ["Pegadinha: 12 meses contados de quando?","Da <b>data de aprovação</b> das demonstrações contábeis — <b>não</b> da data-base."],
  ["A NBC TSP 11 se aplica só à União?","<b>Não.</b> As DCASP devem ser observadas por <b>União, Estados, DF e Municípios</b>."],

  ["Regra geral da compensação (item 48)","<b>Ativos, passivos, receitas e despesas NÃO devem ser compensados</b>, exceto quando <b>exigido ou permitido por NBC TSP</b>."],
  ["Por que a compensação prejudica o usuário (item 49)?","Prejudica a capacidade de <b>(a) compreender as transações</b>, outros eventos e condições ocorridos; e <b>(b) avaliar os futuros fluxos de caixa</b> da entidade."],
  ["A mensuração de ativos líquidos de ajustes é compensação?","<b>Não.</b> Exemplos: ajuste de <b>obsolescência nos estoques</b> e de <b>liquidação duvidosa de créditos</b> a receber."],
  ["Quando a apresentação líquida é permitida (item 50)?","Em <b>transações incidentais</b> às atividades principais, quando a apresentação <b>refletir a essência</b> da transação — compensando-se receitas com as despesas relacionadas da <b>mesma transação</b>."],
  ["Dois exemplos de apresentação líquida do item 50","<b>(a)</b> <b>ganhos e perdas na alienação de ativos não circulantes</b>, deduzindo o valor contábil do valor recebido e reconhecendo as despesas de venda; <b>(b)</b> despesas com <b>provisão (NBC TSP 03) que tiveram reembolso</b> contratual de terceiros."],
  ["Regra da informação comparativa (item 53)","A entidade deve divulgar informação comparativa do <b>período anterior</b> para <b>todos os montantes</b> apresentados no período corrente — e também a informação <b>narrativa e descritiva</b>, quando relevante."],
  ["Informação comparativa mínima (item 53A)","<b>BP</b>, <b>demonstração do resultado</b>, <b>DFC</b>, <b>DMPL</b> — todos com comparativo do período anterior — e as respectivas <b>notas explicativas</b>."],
  ["Quando se pode alterar a data-base (item 67)?","Em <b>circunstâncias excepcionais</b>, por exemplo para <b>alinhar o período contábil ao ciclo orçamentário</b>."],
  ["O que é obrigatório ao alterar a data-base?","<b>(a)</b> que os usuários estejam <b>cientes de que os valores não são comparáveis</b>; e <b>(b)</b> que a <b>razão da mudança seja divulgada</b>."],
  ["Prazo da tempestividade (item 69)","A entidade deve estar em posição de divulgar suas demonstrações em até <b>seis meses</b> a partir da <b>data-base</b>."],
  ["A complexidade das operações justifica o atraso?","<b>Não.</b> Fatores constantemente presentes, como a complexidade das operações, <b>não são razões suficientes</b> para deixar de divulgar no prazo aceitável."],
  ["Prazos dilatados mais específicos — onde ficam?","São tratados por <b>legislações e regulamentos</b> de cada jurisdição."],
  ["Dois “seis meses” e “doze meses” — não confunda","<b>6 meses</b> = prazo para <b>divulgar</b> as demonstrações (a partir da data-base). <b>12 meses</b> = período mínimo da avaliação de <b>continuidade</b> (a partir da aprovação)."],

  ["Regra da distinção circulante × não circulante (item 70)","A entidade deve apresentar <b>ativos e passivos circulantes e não circulantes como grupos separados</b> no BP, <b>exceto</b> quando a apresentação <b>baseada na liquidez</b> proporcionar informação <b>confiável e mais relevante</b>."],
  ["Quando vale a exceção da liquidez?","Todos os ativos e passivos passam a ser apresentados <b>por ordem de liquidez</b>."],
  ["Qual o exemplo típico da exceção (item 73)?","As <b>instituições financeiras</b> — porque <b>não fornecem bens ou serviços dentro de ciclo operacional claramente identificável</b>."],
  ["Critérios para apresentar contas adicionais (item 91)","<b>(a)</b> natureza e <b>liquidez</b> dos ativos; <b>(b)</b> <b>função</b> dos ativos na entidade; <b>(c)</b> <b>montantes, natureza e prazo</b> dos passivos."],
  ["Por que subclassificar as despesas (item 111)?","Para <b>destacar os custos e as apropriações de custos</b> de programas específicos, atividades ou outros segmentos relevantes."],
  ["Quais são os dois métodos de subclassificação?","Método da <b>natureza da despesa</b> e método da <b>função da despesa</b>."],
  ["Método da natureza — como funciona (item 112)?","As despesas são <b>agregadas conforme sua natureza</b> (depreciações, compras de materiais, transporte, benefícios a empregados, publicidade) e <b>não são realocadas</b> entre funções. É <b>simples de aplicar</b>."],
  ["Método da função — como funciona (item 113)?","Classifica as despesas pelo <b>programa ou propósito</b> para o qual foram incorridas (saúde, educação…). Pode ser <b>mais relevante</b>, mas exige <b>alocações arbitrárias</b> e <b>considerável julgamento</b>."],
  ["Quem usa o método da função tem qual dever extra (item 115)?","Divulgar <b>informação adicional sobre a natureza</b> das despesas, incluindo <b>depreciação, amortização e benefícios a empregados</b>."],
  ["De que depende a escolha do método (item 116)?","De <b>fatores históricos e regulatórios</b> e da <b>natureza da entidade</b>."],
  ["Qual método é OBRIGATÓRIO no Brasil e por quê?","O da <b>natureza</b> — porque a estrutura do <b>PCASP detalha as VPD conforme a abordagem da natureza</b>. Publicar também a análise por <b>função é facultativo</b>."],
  ["“Natureza da despesa” e “classificação funcional” da NBC TSP 11 são os mesmos da execução orçamentária?","<b>Não se confundem</b> com os termos correspondentes usados na execução orçamentária."],
  ["Contribuições e distribuições aos proprietários (item 122)","Incluem <b>transferências entre duas entidades da mesma entidade econômica</b> — por exemplo, do governo, como detentor de capital próprio, para um departamento."],
  ["Quando a contribuição vira ajuste direto no PL da controlada?","<b>Somente quando</b> a contribuição <b>aumentar explicitamente a participação residual</b> na controlada, <b>na forma de direitos sobre o patrimônio líquido</b>."],

  ["O que divulgar no resumo de políticas contábeis (item 132)?","<b>(a)</b> a <b>base de mensuração</b> utilizada; <b>(b)</b> o <b>grau de aplicação de disposição transitória</b> de outra norma; <b>(c)</b> <b>outras políticas contábeis</b> relevantes para a compreensão."],
  ["Quais bases de mensuração o item 133 exemplifica?","<b>Custo histórico</b>, <b>custo corrente</b>, <b>valor realizável líquido</b>, <b>valor justo</b> e <b>valor recuperável</b>."],
  ["Mais de uma base de mensuração — o que basta divulgar?","É <b>suficiente divulgar a indicação das categorias</b> de ativos e passivos a que cada base foi aplicada."],
  ["Critério do item 134 para divulgar uma política","Se a divulgação proporciona aos usuários <b>melhor compreensão</b> de como transações, eventos e condições estão refletidos no <b>desempenho</b> e na <b>situação patrimonial</b>."],
  ["O que o setor público deve evidenciar (item 135)?","As políticas de <b>reconhecimento das receitas de impostos, doações e outras receitas de transações sem contraprestação</b>."],
  ["Uma política com valores imateriais pode ser significativa?","<b>Sim</b> — pode ser significativa <b>pela natureza das operações</b>, ainda que os valores não sejam materiais. É apropriado divulgar até política <b>não exigida</b> pelas NBCs TSP que tenha sido selecionada e aplicada."],
  ["Quais julgamentos o item 138 alcança?","Todos os exercidos na aplicação das políticas contábeis, <b>com exceção dos que envolvem estimativas</b>."],
  ["Quatro exemplos de julgamento (item 138)","<b>(a)</b> se ativos são <b>propriedades para investimento</b>; <b>(b)</b> se acordos de suprimento com uso de ativos são <b>arrendamentos</b>; <b>(c)</b> se vendas decorrem, em essência, de <b>acordos de financiamento</b>; <b>(d)</b> se a essência da relação indica <b>controle</b> sobre outras entidades."],
  ["O que a NBC TSP 13 exige (item 1)?","A <b>comparação entre valores orçados e realizados</b> nas demonstrações das entidades que publicam seu orçamento aprovado — <b>obrigatória ou voluntariamente</b> — e a <b>divulgação das razões das diferenças materiais</b>."],
  ["O que a NBC TSP 13 pretende assegurar?","<b>(a)</b> a <b>conformidade com o orçamento aprovado</b>, quando houver obrigatoriedade de publicá-lo; e <b>(b)</b> quando orçamento e demonstrações usarem o <b>mesmo regime</b>, o <b>desempenho</b> no alcance dos resultados orçados."],
  ["Onde vai a informação orçamentária adicional (item 28)?","Em <b>outros documentos que não as demonstrações contábeis</b> — incentivando-se a <b>referência cruzada</b> para vincular orçado e realizado a dados não financeiros e ao desempenho dos serviços."]
];

var QS = [
  ["As DCASP têm como objetivo padronizar a estrutura e as definições dos elementos que as compõem.","C","FUNDATEC","Objetivo declarado no MCASP."],
  ["Os padrões das DCASP devem ser observados apenas pela União e pelos Estados.","E","CESPE","Também pelo <b>Distrito Federal e pelos Municípios</b>."],
  ["O Balanço Financeiro integra o conjunto das DCASP previsto no MCASP.","C","FCC","O MCASP unificou a lista da NBC TSP 11 com o art. 101 da Lei 4.320/64."],
  ["A NBC TSP 11, em seu item 21, incluiu o Balanço Financeiro no conjunto completo das demonstrações contábeis.","E","FGV","Justamente a demonstração que ela <b>não</b> inseriu."],
  ["O Balanço Financeiro está previsto no art. 101 da Lei nº 4.320/64.","C","VUNESP","Base legal da demonstração."],
  ["As notas explicativas e a informação comparativa com o período anterior integram as DCASP.","C","CESPE","Constam expressamente do rol do MCASP."],
  ["O objetivo da NBC TSP 11 é estabelecer critérios de reconhecimento e mensuração das transações do setor público.","E","FCC","Seu objetivo é a <b>apresentação</b>; reconhecimento e mensuração ficam em outras normas."],
  ["A NBC TSP 11 busca assegurar a comparabilidade com demonstrações de períodos anteriores da mesma entidade e com as de outras entidades.","C","FGV","Item 01 da norma."],
  ["A NBC TSP 11 estabelece requisitos gerais de apresentação, diretrizes para a estrutura e requisitos mínimos de conteúdo.","C","FUNDATEC","Literalidade do item 01."],
  ["A responsabilidade pela elaboração e apresentação das demonstrações contábeis do setor público é definida pela própria NBC TSP 11.","E","VUNESP","É definida pela <b>legislação brasileira</b> — Lei 4.320/64, art. 111, e LRF, art. 51."],
  ["A Lei nº 4.320/64 estatui normas gerais de direito financeiro, enquanto a LC nº 101/00 estabelece normas de finanças públicas.","C","CESPE","Quadro comparativo clássico."],
  ["As informações contábeis devem estar disponíveis durante todo o exercício para consulta pelos cidadãos e divulgadas em meio eletrônico de amplo acesso público.","C","FCC","Item 19 da NBC TSP 11."],
  ["Ao avaliar o pressuposto de continuidade, considera-se o período mínimo de doze meses a partir da data-base das demonstrações contábeis.","E","FGV","A contagem é da <b>data de aprovação</b> das demonstrações."],
  ["O período de doze meses considerado na avaliação da continuidade é um mínimo, não um limite.","C","FUNDATEC","A norma diz “mas não limitado a esse período”."],
  ["Afastado o pressuposto de continuidade, os ativos e passivos podem ser mensurados pelo valor de realização líquido.","C","VUNESP","Pressuposto da liquidação."],
  ["Ativos, passivos, receitas e despesas nunca podem ser compensados.","E","CESPE","Podem, quando <b>exigido ou permitido por NBC TSP</b>."],
  ["A compensação de ativos e passivos prejudica a capacidade de os usuários compreenderem as transações e avaliarem os futuros fluxos de caixa.","C","FCC","Item 49, alíneas a e b."],
  ["O ajuste de perdas por obsolescência nos estoques configura compensação vedada pela NBC TSP 11.","E","FGV","A mensuração de ativos líquidos de ajustes relacionados <b>não</b> é compensação."],
  ["O ajuste para liquidação duvidosa de créditos a receber não é considerado compensação.","C","VUNESP","Exemplo expresso do item 49."],
  ["Ganhos e perdas na alienação de ativos não circulantes devem ser apresentados de forma líquida.","C","FUNDATEC","Item 50, alínea a."],
  ["As despesas com provisão reconhecida conforme a NBC TSP 03 que tenham sido reembolsadas por terceiros podem ser compensadas com o respectivo reembolso.","C","CESPE","Item 50, alínea b."],
  ["A apresentação líquida de transações incidentais independe de refletir a essência da transação.","E","FCC","A apresentação só se justifica quando <b>refletir a essência</b> do evento."],
  ["A informação comparativa deve alcançar todos os montantes apresentados nas demonstrações do período corrente.","C","FGV","Item 53."],
  ["A informação narrativa e descritiva do período anterior também deve ser apresentada de forma comparativa quando relevante.","C","VUNESP","Parte final do item 53."],
  ["A informação comparativa mínima abrange balanço patrimonial, demonstração do resultado, demonstração dos fluxos de caixa, demonstração das mutações do patrimônio líquido e as respectivas notas explicativas.","C","FUNDATEC","Item 53A."],
  ["A entidade pode alterar a data-base de apresentação a qualquer tempo, por conveniência administrativa.","E","CESPE","Apenas em <b>circunstâncias excepcionais</b>, como alinhar ao ciclo orçamentário."],
  ["Alterada a data-base, basta divulgar a razão da mudança, sendo dispensável alertar quanto à não comparabilidade.","E","FCC","São <b>dois</b> deveres: ciência da não comparabilidade e divulgação da razão."],
  ["A entidade deve estar em posição de divulgar suas demonstrações contábeis em até seis meses a partir da data-base.","C","FGV","Item 69 — tempestividade."],
  ["A complexidade das operações da entidade é razão suficiente para deixar de divulgar as demonstrações no prazo.","E","VUNESP","Fatores constantemente presentes <b>não</b> justificam o atraso."],
  ["Em regra, ativos e passivos circulantes e não circulantes devem ser apresentados como grupos separados no balanço patrimonial.","C","FUNDATEC","Item 70."],
  ["A apresentação por ordem de liquidez é admitida quando proporcionar informação confiável e mais relevante.","C","CESPE","Exceção do item 70."],
  ["Adotada a exceção da liquidez, apenas os ativos são apresentados por ordem de liquidez.","E","FCC","<b>Todos</b> os ativos e passivos."],
  ["Para instituições financeiras, a ordem de liquidez costuma ser mais relevante porque elas não fornecem bens ou serviços dentro de ciclo operacional claramente identificável.","C","FGV","Item 73."],
  ["A adequação da apresentação de contas adicionais é avaliada pela natureza e liquidez dos ativos, pela função dos ativos e pelos montantes, natureza e prazo dos passivos.","C","VUNESP","Item 91, alíneas a a c."],
  ["A subclassificação das despesas visa destacar os custos e as apropriações de custos de programas, atividades ou segmentos relevantes.","C","FUNDATEC","Item 111."],
  ["No método da natureza da despesa, os gastos são realocados entre as funções da entidade.","E","CESPE","Exatamente o contrário: <b>não</b> são realocados."],
  ["Depreciações, compras de materiais, despesas com transporte, benefícios a empregados e publicidade são exemplos do método da natureza da despesa.","C","FCC","Item 112."],
  ["O método da função da despesa classifica os gastos conforme o programa ou propósito para o qual foram incorridos.","C","FGV","Item 113."],
  ["O método da função dispensa julgamento, pois a alocação segue critérios objetivos.","E","VUNESP","Pode exigir <b>alocações arbitrárias</b> e considerável julgamento."],
  ["As entidades que classificam os gastos por função devem divulgar informação adicional sobre a natureza das despesas, incluindo depreciação, amortização e benefícios a empregados.","C","FUNDATEC","Item 115."],
  ["A escolha entre os métodos depende de fatores históricos e regulatórios e da natureza da entidade.","C","CESPE","Item 116."],
  ["No Brasil, a utilização do método da função é obrigatória para todos os entes.","E","FCC","Obrigatório é o método da <b>natureza</b>, porque o PCASP detalha as VPD por natureza."],
  ["É facultado ao ente publicar, adicionalmente, a análise das VPD segundo o método da função.","C","FGV","Faculdade prevista no MCASP."],
  ["Os termos natureza da despesa e classificação funcional da NBC TSP 11 equivalem aos utilizados na execução orçamentária.","E","VUNESP","A norma adverte que <b>não se confundem</b>."],
  ["Contribuições e distribuições aos proprietários incluem transferências entre duas entidades que fazem parte da mesma entidade econômica.","C","FUNDATEC","Item 122."],
  ["As contribuições dos proprietários devem ser sempre reconhecidas como ajuste direto no patrimônio líquido da entidade controlada.","E","CESPE","Somente quando <b>aumentarem explicitamente a participação residual</b> na forma de direitos sobre o PL."],
  ["No resumo das políticas contábeis significativas deve ser divulgada a base de mensuração utilizada na elaboração das demonstrações.","C","FCC","Item 132, alínea a."],
  ["Também deve ser divulgado o grau em que a entidade aplicou disposição transitória de qualquer outra norma.","C","FGV","Item 132, alínea b."],
  ["Custo histórico, custo corrente, valor realizável líquido, valor justo e valor recuperável são bases de mensuração citadas pela NBC TSP 11.","C","VUNESP","Item 133."],
  ["Quando mais de uma base de mensuração é utilizada, é necessário divulgar o valor de cada ativo individualmente.","E","FUNDATEC","É <b>suficiente indicar as categorias</b> de ativos e passivos a que cada base foi aplicada."],
  ["Espera-se que as entidades do setor público evidenciem suas políticas de reconhecimento das receitas de impostos, doações e outras receitas de transações sem contraprestação.","C","CESPE","Item 135."],
  ["Uma política contábil só pode ser considerada significativa se os valores envolvidos forem materiais.","E","FCC","Pode ser significativa <b>pela natureza das operações</b> ainda que os valores não sejam materiais."],
  ["É apropriado divulgar política contábil significativa que, embora não exigida pelas NBCs TSP, tenha sido selecionada e aplicada.","C","FGV","Item 136."],
  ["Os julgamentos de que trata o item 138 da NBC TSP 11 incluem aqueles que envolvem estimativas.","E","VUNESP","O item exclui expressamente os julgamentos que envolvem <b>estimativas</b>."],
  ["Definir se determinados ativos são propriedades para investimento é exemplo de julgamento da administração.","C","FUNDATEC","Item 138, alínea a."],
  ["A NBC TSP 13 exige a comparação dos valores orçados com os realizados e a divulgação das razões das diferenças materiais.","C","CESPE","Item 1 da norma."],
  ["A NBC TSP 13 alcança apenas as entidades obrigadas a publicar seu orçamento aprovado.","E","FCC","Alcança também as que o publicam <b>voluntariamente</b>."],
  ["A informação orçamentária adicional, como o desempenho dos serviços prestados, deve ser apresentada em documentos que não as demonstrações contábeis, incentivando-se a referência cruzada.","C","FGV","Item 28 da NBC TSP 13."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("As DCASP e o objetivo da NBC TSP 11",
      '<div class="box"><span class="bl">O que são as DCASP</span>'+
      '<p>As <b>Demonstrações Contábeis Aplicadas ao Setor Público</b> têm por objetivo <b>padronizar a estrutura e as definições</b> dos elementos que as compõem. Esses padrões devem ser observados por <b>União, Estados, DF e Municípios</b>, permitindo <b>evidenciação, análise e consolidação</b> das contas públicas em âmbito nacional, em consonância com o <b>PCASP</b>.</p></div>'+
      '<div class="box trap"><span class="bl">A pegadinha do Balanço Financeiro</span>'+
      '<p>A <b>NBC TSP 11, item 21</b>, listou o conjunto completo das demonstrações — mas <b>não incluiu o Balanço Financeiro</b>, que está no <b>art. 101 da Lei nº 4.320/64</b>. O <b>MCASP unificou as duas listas</b>.</p></div>'+
      '<div class="box"><span class="bl">Conjunto completo (MCASP)</span>'+
      '<ul><li><b>BO</b> — Balanço Orçamentário</li><li><b>BF</b> — Balanço Financeiro</li><li><b>BP</b> — Balanço Patrimonial</li>'+
      '<li><b>DVP</b> — Demonstração das Variações Patrimoniais</li><li><b>DMPL</b> — Demonstração das Mutações do Patrimônio Líquido</li>'+
      '<li><b>DFC</b> — Demonstração dos Fluxos de Caixa</li><li><b>Notas explicativas</b></li><li><b>Informação comparativa</b> com o período anterior</li></ul></div>'+
      '<div class="box tip"><span class="bl">Objetivo da NBC TSP 11 (item 01)</span>'+
      '<p>Estabelecer <b>como</b> as demonstrações devem ser <b>apresentadas</b>, para assegurar <b>comparabilidade</b> com os períodos anteriores da <b>mesma entidade</b> e com <b>outras entidades</b>. Para isso fixa <b>requisitos gerais de apresentação</b>, <b>diretrizes de estrutura</b> e <b>requisitos mínimos de conteúdo</b>.</p>'+
      '<p><b>Reconhecimento, mensuração e divulgação</b> de eventos específicos são tratados em <b>outras normas</b>.</p></div>'),
    sl("Responsabilidade e pressuposto de continuidade",
      '<div class="box"><span class="bl">Quem responde pela elaboração (item 19)</span>'+
      '<p>A <b>legislação brasileira</b> define a responsabilidade — <b>Lei nº 4.320/64, art. 111</b> e <b>LC nº 101/00 (LRF), art. 51</b>. As informações devem estar disponíveis <b>durante todo o exercício</b> para consulta de cidadãos e instituições, no <b>Poder Legislativo</b> e no <b>órgão técnico</b> responsável, e <b>divulgadas em meio eletrônico de amplo acesso público</b>.</p>'+
      '<p class="mn"><em>4.320 → normas gerais de <b>direito financeiro</b> · LRF → normas de <b>finanças públicas</b></em></p></div>'+
      '<div class="box"><span class="bl">Continuidade (item 39)</span>'+
      '<p>As demonstrações são elaboradas presumindo que a entidade <b>terá continuidade</b>, permanecerá em operação e <b>atenderá às suas obrigações estatutárias</b> no futuro previsível.</p>'+
      '<p>Na avaliação, considera-se toda a informação disponível sobre o futuro — <b>período mínimo de doze meses</b> (mas <b>não limitado</b> a ele) <b>a partir da data de aprovação</b> das demonstrações.</p></div>'+
      '<div class="box trap"><span class="bl">Onde a banca troca as bolas</span>'+
      '<ul><li><b>12 meses da APROVAÇÃO</b> — não da data-base.</li>'+
      '<li>É <b>mínimo</b>, não teto.</li>'+
      '<li>Sem continuidade → outro pressuposto, como o da <b>liquidação</b>: ativos e passivos ao <b>valor de realização líquido</b>.</li></ul></div>')
  ],
  V2:[
    sl("Compensação de valores",
      '<div class="box"><span class="bl">Regra (item 48)</span>'+
      '<p><b>Ativos, passivos, receitas e despesas não devem ser compensados</b>, exceto quando <b>exigido ou permitido por NBC TSP</b>. A entidade deve informá-los <b>separadamente</b>.</p></div>'+
      '<div class="box"><span class="bl">Por que a vedação (item 49)</span>'+
      '<p>A compensação prejudica a capacidade dos usuários de:</p>'+
      '<ul><li><b>(a)</b> compreender as transações, outros eventos e condições ocorridos; e</li>'+
      '<li><b>(b)</b> avaliar os <b>futuros fluxos de caixa</b> da entidade.</li></ul></div>'+
      '<div class="box tip"><span class="bl">O que NÃO é compensação</span>'+
      '<p>A <b>mensuração de ativos líquidos de ajustes relacionados</b>: obsolescência nos <b>estoques</b>, liquidação duvidosa de <b>créditos a receber</b>.</p></div>'+
      '<div class="box"><span class="bl">Apresentação líquida permitida (item 50)</span>'+
      '<p>Transações <b>incidentais</b> às atividades principais podem ser apresentadas <b>de forma líquida</b>, quando isso <b>refletir a essência</b> do evento:</p>'+
      '<ul><li><b>(a)</b> <b>ganhos e perdas na alienação de ativos não circulantes</b> — deduz-se o valor contábil do valor recebido e reconhecem-se as despesas de venda;</li>'+
      '<li><b>(b)</b> despesas com <b>provisão (NBC TSP 03) reembolsadas</b> por acordo contratual com terceiros.</li></ul></div>'),
    sl("Informação comparativa, período e tempestividade",
      '<div class="box"><span class="bl">Comparativa (item 53)</span>'+
      '<p>Salvo permissão ou exigência em contrário, a entidade deve divulgar informação comparativa do <b>período anterior</b> para <b>todos os montantes</b> do período corrente — e também a informação <b>narrativa e descritiva</b>, quando relevante para a compreensão do conjunto.</p></div>'+
      '<div class="box"><span class="bl">Mínimo (item 53A)</span>'+
      '<p><b>BP · Demonstração do resultado · DFC · DMPL</b>, todos com comparativo, mais as <b>notas explicativas</b>.</p></div>'+
      '<div class="box"><span class="bl">Mudança de data-base (item 67)</span>'+
      '<p>Só em <b>circunstâncias excepcionais</b> — por exemplo, <b>alinhar o período contábil ao ciclo orçamentário</b>. Exige que <b>(a)</b> os usuários saibam que os valores <b>não são comparáveis</b> e <b>(b)</b> a <b>razão seja divulgada</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Tempestividade (item 69) — número que cai</span>'+
      '<p>A entidade deve estar em posição de <b>divulgar em até SEIS MESES</b> a partir da <b>data-base</b>. A <b>complexidade das operações não justifica</b> o atraso. Prazos dilatados específicos ficam em legislações e regulamentos.</p>'+
      '<p class="mn"><em>6 meses = divulgar (da data-base) · 12 meses = continuidade (da aprovação)</em></p></div>')
  ],
  V3:[
    sl("Circulante × não circulante e contas adicionais",
      '<div class="box"><span class="bl">Regra e exceção (item 70)</span>'+
      '<p><b>Regra:</b> ativos e passivos <b>circulantes e não circulantes</b> como <b>grupos separados</b> no balanço patrimonial.</p>'+
      '<p><b>Exceção:</b> quando a apresentação <b>baseada na liquidez</b> for <b>confiável e mais relevante</b> — aí <b>todos</b> os ativos e passivos vão <b>por ordem de liquidez</b>.</p></div>'+
      '<div class="box tip"><span class="bl">O exemplo da norma (item 73)</span>'+
      '<p><b>Instituições financeiras</b> — porque <b>não fornecem bens ou serviços dentro de ciclo operacional claramente identificável</b>.</p></div>'+
      '<div class="box"><span class="bl">Contas adicionais (item 91)</span>'+
      '<ul><li><b>(a)</b> natureza e <b>liquidez</b> dos ativos;</li>'+
      '<li><b>(b)</b> <b>função</b> dos ativos na entidade;</li>'+
      '<li><b>(c)</b> <b>montantes, natureza e prazo</b> dos passivos.</li></ul></div>'),
    sl("Subclassificação das despesas e contribuições dos proprietários",
      '<div class="box"><span class="bl">Por quê (item 111)</span>'+
      '<p>Para <b>destacar custos e apropriações de custos</b> de programas específicos, atividades ou segmentos relevantes. A análise se faz por <b>um de dois métodos</b>.</p></div>'+
      '<div class="box"><span class="bl">Método da NATUREZA (item 112)</span>'+
      '<p>Despesas agregadas conforme sua <b>natureza</b>: depreciações, compras de materiais, transporte, benefícios a empregados, publicidade. <b>Não são realocadas</b> entre funções — por isso é <b>simples de aplicar</b>.</p></div>'+
      '<div class="box"><span class="bl">Método da FUNÇÃO (item 113)</span>'+
      '<p>Despesas classificadas pelo <b>programa ou propósito</b> (saúde, educação, outras). Pode ser <b>mais relevante</b>, mas exige <b>alocações arbitrárias</b> e <b>considerável julgamento</b>. Quem o adota deve <b>divulgar informação adicional sobre a natureza</b>, inclusive <b>depreciação, amortização e benefícios a empregados</b> (item 115).</p></div>'+
      '<div class="box trap"><span class="bl">O que a banca cobra no Brasil</span>'+
      '<p>Como o <b>PCASP detalha as VPD pela natureza</b>, o <b>método da natureza é OBRIGATÓRIO</b> para todos os entes; publicar também a análise por <b>função é facultativo</b>. E <b>“natureza da despesa” e “classificação funcional” da norma NÃO se confundem</b> com os termos da execução orçamentária.</p></div>'+
      '<div class="box"><span class="bl">Contribuições dos proprietários (item 122)</span>'+
      '<p>Incluem transferências entre <b>duas entidades da mesma entidade econômica</b>. São reconhecidas como <b>ajuste direto no PL da controlada SOMENTE QUANDO</b> aumentarem <b>explicitamente a participação residual</b>, na forma de <b>direitos sobre o patrimônio líquido</b>.</p></div>')
  ],
  V4:[
    sl("Divulgação de políticas contábeis",
      '<div class="box"><span class="bl">O que divulgar (item 132)</span>'+
      '<ul><li><b>(a)</b> a <b>base de mensuração</b> utilizada;</li>'+
      '<li><b>(b)</b> o <b>grau de aplicação de disposição transitória</b> de outra norma;</li>'+
      '<li><b>(c)</b> <b>outras políticas</b> relevantes para a compreensão das demonstrações.</li></ul></div>'+
      '<div class="box"><span class="bl">Bases de mensuração (item 133)</span>'+
      '<p><b>Custo histórico · custo corrente · valor realizável líquido · valor justo · valor recuperável.</b> Havendo <b>mais de uma base</b>, é <b>suficiente indicar as categorias</b> de ativos e passivos a que cada uma foi aplicada.</p></div>'+
      '<div class="box"><span class="bl">Critérios de decisão (itens 134 a 136)</span>'+
      '<ul><li>Divulgar quando isso der ao usuário <b>melhor compreensão</b> do desempenho e da situação patrimonial.</li>'+
      '<li>Considerar a <b>natureza das operações</b> e o que os usuários <b>esperam</b> — no setor público, as políticas de <b>receitas de impostos, doações e transações sem contraprestação</b>.</li>'+
      '<li>A política pode ser <b>significativa pela natureza</b> ainda que os valores <b>não sejam materiais</b>; é apropriado divulgar até a política <b>não exigida</b> pelas NBCs TSP.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Julgamentos (item 138)</span>'+
      '<p>Alcança os julgamentos da administração <b>com exceção dos que envolvem estimativas</b>. Exemplos: <b>(a)</b> propriedades para investimento; <b>(b)</b> arrendamentos; <b>(c)</b> vendas que, em essência, decorrem de <b>acordos de financiamento</b>; <b>(d)</b> <b>controle</b> sobre outras entidades.</p></div>'),
    sl("NBC TSP 13 — informação orçamentária nas demonstrações",
      '<div class="box"><span class="bl">O que a norma exige (item 1)</span>'+
      '<p>A <b>comparação entre valores orçados e realizados</b> nas demonstrações das entidades que publicam seu orçamento aprovado — <b>obrigatória OU voluntariamente</b> — e a <b>divulgação das razões das diferenças materiais</b>.</p></div>'+
      '<div class="box"><span class="bl">O que se busca assegurar</span>'+
      '<ul><li><b>(a)</b> a <b>conformidade com o orçamento aprovado</b>, quando houver obrigação de publicá-lo;</li>'+
      '<li><b>(b)</b> quando orçamento e demonstrações usarem o <b>mesmo regime</b>, o <b>desempenho</b> no alcance dos resultados orçados.</li></ul>'+
      '<p>Tudo a serviço da <b>prestação de contas e responsabilização (accountability)</b> e da <b>transparência</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Informação adicional (item 28)</span>'+
      '<p>A informação orçamentária <b>adicional</b> — inclusive sobre o <b>desempenho dos serviços prestados</b> — vai em <b>outros documentos</b>, não nas demonstrações contábeis. Incentiva-se a <b>referência cruzada</b> para vincular orçado e realizado a dados <b>não financeiros</b> e ao desempenho.</p></div>')
  ]
};

var EX = {
S1:{t:"multi", instr:"Marque o que integra as DCASP segundo o MCASP",
  options:["Balanço Orçamentário","Balanço Financeiro","Balanço Patrimonial",
           "Demonstração das Variações Patrimoniais","Demonstração dos Fluxos de Caixa",
           "Demonstração das Mutações do Patrimônio Líquido","Notas explicativas",
           "Relatório de Gestão Fiscal","Lei de Diretrizes Orçamentárias"],
  answers:[0,1,2,3,4,5,6],
  why:"RGF e LDO não são demonstrações contábeis."},

S2:{t:"mc", instr:"Qual demonstração a NBC TSP 11 NÃO listou no seu item 21?",
  options:["Balanço Financeiro","Balanço Patrimonial","Demonstração dos Fluxos de Caixa","Demonstração das Variações Patrimoniais"],
  answer:0,
  why:"O BF vem do art. 101 da Lei 4.320/64; o MCASP unificou as duas listas."},

S3:{t:"gap", instr:"Complete o objetivo da NBC TSP 11",
  before:"O objetivo da norma é estabelecer como as demonstrações contábeis devem ser ",
  after:", para assegurar a comparabilidade.",
  options:["apresentadas","mensuradas","reconhecidas"], answer:0,
  why:"Reconhecimento e mensuração ficam em outras normas."},

S4:{t:"match", instr:"Ligue cada lei ao que ela estatui",
  pairs:[["Lei nº 4.320/64","Normas Gerais de Direito Financeiro"],
         ["LC nº 101/00 (LRF)","Normas de Finanças Públicas"]],
  why:"Quadro comparativo do resumo — cai com troca de palavras."},

S5:{t:"mc", instr:"O período mínimo considerado na avaliação do pressuposto de continuidade conta a partir de quando?",
  options:["Da data de aprovação das demonstrações contábeis",
           "Da data-base das demonstrações contábeis",
           "Do encerramento do exercício financeiro",
           "Da data de publicação no diário oficial"],
  answer:0,
  why:"Doze meses a partir da <b>aprovação</b> — e não limitado a esse período."},

S6:{t:"gap", instr:"Complete o pressuposto alternativo",
  before:"Afastada a continuidade, ativos e passivos devem ser mensurados pelo ",
  after:".",
  options:["valor de realização líquido","custo histórico","valor justo"], answer:0,
  why:"Pressuposto da liquidação."},

S7:{t:"gap", instr:"Complete a regra do item 48",
  before:"Ativos, passivos, receitas e despesas não devem ser compensados, exceto quando ",
  after:" por NBC TSP.",
  options:["exigido ou permitido","autorizado pelo Tribunal de Contas","previsto na LOA"], answer:0,
  why:"Literalidade do item 48."},

S8:{t:"multi", instr:"A compensação indevida prejudica a capacidade dos usuários de:",
  options:["Compreender as transações, outros eventos e condições ocorridos",
           "Avaliar os futuros fluxos de caixa da entidade",
           "Aprovar o orçamento do exercício seguinte",
           "Fixar os limites de despesa com pessoal"],
  answers:[0,1],
  why:"As duas alíneas do item 49."},

S9:{t:"sort", instr:"É compensação vedada ou não é compensação?",
  buckets:["Não é compensação","Apresentação líquida permitida"],
  items:[["Ajuste de obsolescência nos estoques",0],
         ["Ajuste de liquidação duvidosa de créditos a receber",0],
         ["Ganhos e perdas na alienação de ativos não circulantes",1],
         ["Despesa com provisão reembolsada por acordo contratual",1]],
  why:"Ajustes de mensuração não são compensação; as transações incidentais admitem apresentação líquida."},

S10:{t:"multi", instr:"Marque as demonstrações que a NBC TSP 11 exige como informação comparativa mínima",
  options:["Balanço patrimonial","Demonstração do resultado","Demonstração dos fluxos de caixa",
           "Demonstração das mutações do patrimônio líquido","Notas explicativas",
           "Relatório do controle interno"],
  answers:[0,1,2,3,4],
  why:"Item 53A."},

S11:{t:"mc", instr:"Em até quanto tempo a entidade deve estar em posição de divulgar suas demonstrações contábeis?",
  options:["Seis meses da data-base","Doze meses da data-base",
           "Trinta dias do encerramento","Sessenta dias da aprovação"],
  answer:0,
  why:"Item 69 — e a complexidade das operações não justifica atraso."},

S12:{t:"multi", instr:"Alterada a data-base de apresentação, o que é obrigatório?",
  options:["Que os usuários estejam cientes de que os valores não são comparáveis",
           "Que a razão da mudança seja divulgada",
           "Que o Tribunal de Contas autorize previamente",
           "Que as demonstrações anteriores sejam refeitas"],
  answers:[0,1],
  why:"As duas alíneas do item 67."},

S13:{t:"gap", instr:"Complete a exceção do item 70",
  before:"Os ativos e passivos são apresentados por ordem de liquidez quando essa apresentação proporcionar informação ",
  after:".",
  options:["confiável e mais relevante","mais conservadora","de menor custo"], answer:0,
  why:"Critério literal da exceção."},

S14:{t:"mc", instr:"Qual entidade a norma cita como exemplo típico da apresentação por ordem de liquidez?",
  options:["Instituições financeiras","Autarquias municipais",
           "Fundos de previdência","Empresas estatais dependentes"],
  answer:0,
  why:"Item 73 — não têm ciclo operacional claramente identificável."},

S15:{t:"multi", instr:"Critérios para avaliar a apresentação de contas adicionais (item 91)",
  options:["Natureza e liquidez dos ativos","Função dos ativos na entidade",
           "Montantes, natureza e prazo dos passivos",
           "Grau de execução do orçamento","Nível de endividamento do ente"],
  answers:[0,1,2],
  why:"Alíneas a, b e c."},

S16:{t:"sort", instr:"Classifique cada característica pelo método de subclassificação da despesa",
  buckets:["Natureza","Função"],
  items:[["Depreciações, compras de materiais, publicidade",0],
         ["Gastos não realocados entre funções",0],
         ["Simples de aplicar",0],
         ["Despesas com saúde, educação, outras",1],
         ["Pode exigir alocações arbitrárias",1],
         ["Exige divulgar informação adicional sobre a natureza",1]],
  why:"Item 112 × itens 113 e 115."},

S17:{t:"sort", instr:"No Brasil, cada método é obrigatório ou facultativo?",
  buckets:["Obrigatório para todos os entes","Facultativo, como publicação adicional"],
  items:[["Método da natureza da despesa",0],["Método da função da despesa",1]],
  why:"A estrutura do PCASP detalha as VPD conforme a <b>natureza</b>."},

S18:{t:"gap", instr:"Complete a regra das contribuições dos proprietários",
  before:"São reconhecidas como ajuste direto no patrimônio líquido da controlada somente quando aumentarem explicitamente a ",
  after:" na entidade controlada.",
  options:["participação residual","receita corrente líquida","dotação orçamentária"], answer:0,
  why:"Item 122 — na forma de direitos sobre o patrimônio líquido."},

S19:{t:"multi", instr:"O que deve constar do resumo das políticas contábeis significativas?",
  options:["A base de mensuração utilizada na elaboração das demonstrações",
           "O grau de aplicação de disposição transitória de outra norma",
           "Outras políticas contábeis relevantes para a compreensão",
           "O valor de cada bem do imobilizado individualmente"],
  answers:[0,1,2],
  why:"Item 132, alíneas a a c."},

S20:{t:"multi", instr:"Marque as bases de mensuração citadas pela NBC TSP 11",
  options:["Custo histórico","Custo corrente","Valor realizável líquido","Valor justo","Valor recuperável",
           "Valor orçado","Valor empenhado"],
  answers:[0,1,2,3,4],
  why:"Item 133 — as duas últimas são orçamentárias."},

S21:{t:"gap", instr:"Complete o item 136",
  before:"A política contábil pode ser significativa devido à natureza das operações da entidade, mesmo que os valores associados ",
  after:".",
  options:["não sejam materiais","sejam sempre relevantes","estejam no orçamento"], answer:0,
  why:"A significância vem da natureza, não do valor."},

S22:{t:"multi", instr:"São exemplos de julgamento da administração no item 138",
  options:["Definir se ativos são propriedades para investimento",
           "Definir se acordos de suprimento com uso de ativos são arrendamentos",
           "Definir se vendas decorrem, em essência, de acordos de financiamento",
           "Definir se a essência da relação indica controle sobre outra entidade",
           "Estimar a vida útil de um bem do imobilizado"],
  answers:[0,1,2,3],
  why:"O item exclui expressamente os julgamentos que envolvem <b>estimativas</b>."},

S23:{t:"mc", instr:"A NBC TSP 13 alcança as entidades que publicam seu orçamento aprovado:",
  options:["Obrigatória ou voluntariamente","Somente obrigatoriamente",
           "Somente as da administração direta","Somente as da União"],
  answer:0,
  why:"Item 1 — ambas se submetem à prestação de contas."},

S24:{t:"gap", instr:"Complete o item 28 da NBC TSP 13",
  before:"A informação orçamentária adicional, incluindo o desempenho dos serviços prestados, deve ser apresentada em ",
  after:".",
  options:["outros documentos que não as demonstrações contábeis",
           "notas explicativas das demonstrações contábeis",
           "anexo do Balanço Orçamentário"], answer:0,
  why:"Incentiva-se a referência cruzada nas demonstrações para esses documentos."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Pública 07","https://www.tecconcursos.com.br/s/Q2plRT","Q2plRT"],
  ["Caderno FCC — Contabilidade Pública 07","https://www.tecconcursos.com.br/s/Q2plRZ","Q2plRZ"],
  ["Caderno FGV — Contabilidade Pública 07","https://www.tecconcursos.com.br/s/Q2plRu","Q2plRu"],
  ["Caderno VUNESP — Contabilidade Pública 07","https://www.tecconcursos.com.br/s/Q2plS4","Q2plS4"]
];
var TECNOTA = "Este é um módulo de norma: a banca cobra a literalidade. Fixe os números (6 meses para divulgar, 12 meses de continuidade, as alíneas do item 91 e do item 138) e a lista das DCASP. Nas questões, desconfie sempre que trocarem “data-base” por “data de aprovação” e “natureza” por “função”.";

var UNITS = [
  {n:1, title:"DCASP e a NBC TSP 11", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Conjunto completo, objetivo e continuidade", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · o conjunto das DCASP",      xp:25, data:["S1","S2","T0","T1","T2","T3","T4"]},
    {id:"K3", type:"drill",  title:"Praticar · objetivo e responsabilidade", xp:25, data:["S3","S4","T5","T6","T7","T8","T9"]},
    {id:"K4", type:"drill",  title:"Praticar · pressuposto de continuidade", xp:25, data:["S5","S6","T10","T11","T12","T13"]},
    {id:"K5", type:"flash",  title:"Flashcards · DCASP e NBC TSP 11",      xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13]}
  ]},
  {n:2, title:"Compensação, comparativa e prazos", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Compensação, informação comparativa e tempestividade", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · compensação de valores",    xp:25, data:["S7","S8","T14","T15","T16","T17","T18"]},
    {id:"K8", type:"drill",  title:"Praticar · apresentação líquida",      xp:25, data:["S9","S10","T19","T20","T21","T22","T23"]},
    {id:"K9", type:"drill",  title:"Praticar · data-base e seis meses",    xp:25, data:["S11","S12","T24","T25","T26","T27","T28"]},
    {id:"K10",type:"flash",  title:"Flashcards · compensação e prazos",    xp:15, data:[14,15,16,17,18,19,20,21,22,23,24,25,26]}
  ]},
  {n:3, title:"Estrutura e despesas", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Circulante, contas adicionais e os dois métodos", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · circulante e liquidez",     xp:25, data:["S13","S14","T29","T30","T31","T32","T33"]},
    {id:"K13",type:"drill",  title:"Praticar · natureza × função",         xp:25, data:["S15","S16","T34","T35","T36","T37","T38"]},
    {id:"K14",type:"drill",  title:"Praticar · o que vale no Brasil",      xp:25, data:["S17","S18","T39","T40","T41","T42","T43"]},
    {id:"K15",type:"flash",  title:"Flashcards · estrutura e despesas",    xp:15, data:[27,28,29,30,31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Políticas contábeis e NBC TSP 13", cvar:"u4", lessons:[
    {id:"K16",type:"teoria", title:"Divulgação de políticas e informação orçamentária", xp:10, data:"V4"},
    {id:"K17",type:"drill",  title:"Praticar · políticas e bases",         xp:25, data:["S19","S20","T44","T45","T46","T47","T48"]},
    {id:"K18",type:"drill",  title:"Praticar · julgamentos e estimativas", xp:25, data:["S21","S22","T49","T50","T51","T52","T53"]},
    {id:"K19",type:"drill",  title:"Praticar · NBC TSP 13",                xp:25, data:["S23","S24","T54","T55","T56","T57"]},
    {id:"K20",type:"flash",  title:"Flashcards · políticas e NBC TSP 13",  xp:15, data:[40,41,42,43,44,45,46,47,48,49,50,51]}
  ]},
  {n:5, title:"Fixação", cvar:"u5", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",              xp:60, data:null},
    {id:"K21", type:"missao", title:"Missão TEC Concursos",                xp:15, data:null},
    {id:"K22", type:"prova",  title:"Simulado cronometrado",               xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo — é a abertura do Resumo: as Demonstrações Contábeis Aplicadas ao Setor Público (DCASP) têm como objetivo <b>padronizar a estrutura e as definições dos elementos que as compõem</b>.</p><p>O material completa a finalidade: essa padronização permite a <b>evidenciação, a análise e a consolidação das contas públicas em âmbito nacional</b>, em consonância com o PCASP.</p><p class='fb-fonte'>Resumo 07 · <i>Demonstrações contábeis</i></p>",
1:"<p>Errado — faltaram entes. O Resumo diz que os padrões das DCASP devem ser observados pela <b>União, Estados, Distrito Federal e Municípios</b>.</p><p>A supressão do DF e dos Municípios é a forma mais comum de errar esse item. Se a finalidade declarada é a <b>consolidação nacional</b>, não faria sentido deixar entes de fora.</p><p class='fb-fonte'>Resumo 07 · <i>Demonstrações contábeis</i></p>",
2:"<p>Certo. Na lista do MCASP reproduzida pelo Resumo, o <b>Balanço Financeiro (BF)</b> integra as DCASP, ao lado do Balanço Orçamentário (BO), do Balanço Patrimonial (BP), da DVP, da DMPL, da DFC, das notas explicativas e da informação comparativa com o período anterior.</p><p>O quadro ATENÇÃO explica o motivo: a NBC TSP 11 não incluiu o BF, e foi o <b>MCASP que unificou as duas listas</b> e uniformizou o conjunto aplicável ao setor público.</p><p class='fb-fonte'>Resumo 07 · <i>Demonstrações contábeis aplicadas ao setor público (DCASP)</i></p>",
3:"<p>Errado — é justamente o contrário, e o Resumo destaca isso em quadro <b>ATENÇÃO</b>. A NBC TSP 11, no item 21, listou o conjunto completo das demonstrações contábeis, mas <b>NÃO inseriu o Balanço Financeiro</b>.</p><p>O BF está previsto no <b>art. 101 da Lei nº 4.320/64</b>. Foi o MCASP que unificou as duas listas, e por isso o BF aparece nas DCASP.</p><p class='fb-fonte'>Resumo 07 · <i>Demonstrações contábeis — ATENÇÃO</i></p>",
4:"<p>Certo. O Resumo é expresso: o Balanço Financeiro <b>está previsto no art. 101 da Lei nº 4.320/64</b>, e não na NBC TSP 11.</p><p>Guarde o par que a banca explora: <b>NBC TSP 11, item 21</b> → não traz o BF; <b>Lei nº 4.320/64, art. 101</b> → traz o BF; <b>MCASP</b> → unifica as duas listas nas DCASP.</p><p class='fb-fonte'>Resumo 07 · <i>Demonstrações contábeis — ATENÇÃO</i></p>",
5:"<p>Certo. Na relação do MCASP transcrita pelo Resumo, as DCASP compreendem também as <b>notas explicativas</b> — com a descrição sucinta das principais políticas contábeis e outras informações elucidativas — e a <b>informação comparativa com o período anterior</b>.</p><p>São os dois últimos itens da lista, e os mais esquecidos na hora de enumerar as DCASP.</p><p class='fb-fonte'>Resumo 07 · <i>Demonstrações contábeis aplicadas ao setor público (DCASP)</i></p>",
6:"<p>Errado no objetivo. Pelo item 01 da NBC TSP 11, transcrito no Resumo, o objetivo da norma é estabelecer <b>como as demonstrações contábeis devem ser apresentadas</b>.</p><p>O próprio item afasta a alternativa: \"o <b>reconhecimento, a mensuração e a divulgação</b> de transações e outros eventos específicos são tratados em <b>outras normas</b>\". A NBC TSP 11 cuida de apresentação.</p><p class='fb-fonte'>Resumo 07 · <i>NBC TSP 11 — item 01</i></p>",
7:"<p>Certo — é a finalidade declarada no item 01: assegurar a <b>comparabilidade</b> tanto com as demonstrações contábeis de <b>períodos anteriores da mesma entidade</b> quanto com as de <b>outras entidades</b>.</p><p>São as duas dimensões da comparabilidade: no tempo (mesma entidade) e no espaço (entre entidades).</p><p class='fb-fonte'>Resumo 07 · <i>NBC TSP 11 — item 01</i></p>",
8:"<p>Certo. Segunda parte do item 01: para alcançar o objetivo de comparabilidade, a norma estabelece <b>requisitos gerais para a apresentação</b> das demonstrações contábeis, <b>diretrizes para a sua estrutura</b> e os <b>requisitos mínimos para o seu conteúdo</b>.</p><p>Note o adjetivo: quanto ao conteúdo, os requisitos são <b>mínimos</b> — nada impede conteúdo adicional.</p><p class='fb-fonte'>Resumo 07 · <i>NBC TSP 11 — item 01</i></p>",
9:"<p>Errado na fonte da responsabilidade. Pelo item 19 da NBC TSP 11, é a <b>legislação brasileira</b> que define a responsabilidade pela elaboração e apresentação das demonstrações contábeis do governo e das entidades do setor público.</p><p>O comentário do Resumo indica os dispositivos: <b>Lei nº 4.320/64, art. 111</b>, e <b>LC nº 101/00 (LRF), art. 51</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Responsabilidade pela elaboração das demonstrações contábeis</i></p>",
10:"<p>Certo — é o quadro comparativo do Resumo: a <b>Lei nº 4.320/64 estatui Normas Gerais de Direito Financeiro</b>, enquanto a <b>LC nº 101/00 (LRF) estabelece Normas de Finanças Públicas</b>.</p><p>Vale decorar os verbos e os complementos, porque a banca troca um pelo outro: <b>estatui</b> normas gerais de <b>direito financeiro</b> (4.320) / <b>estabelece</b> normas de <b>finanças públicas</b> (LRF).</p><p class='fb-fonte'>Resumo 07 · <i>Responsabilidade pela elaboração — quadro comparativo</i></p>",
11:"<p>Certo, é a literalidade do item 19: as informações devem estar disponíveis <b>durante todo o exercício</b> para consulta e apreciação pelos cidadãos e instituições da sociedade no respectivo poder Legislativo e no órgão técnico responsável pela sua elaboração, e <b>divulgadas em meio eletrônico de amplo acesso público</b>.</p><p>Repare em \"durante todo o exercício\": não é disponibilização pontual, no encerramento.</p><p class='fb-fonte'>Resumo 07 · <i>Responsabilidade pela elaboração das demonstrações contábeis</i></p>",
12:"<p>Errado no marco inicial. O item 39 conta os doze meses <b>a partir da data de APROVAÇÃO</b> das demonstrações contábeis — não da data-base.</p><p>É a troca preferida da banca neste tópico. Guarde as duas datas do Resumo separadas: continuidade conta da <b>data de aprovação</b>; a tempestividade do item 69 (seis meses) conta da <b>data-base</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Pressuposto de continuidade</i></p>",
13:"<p>Certo. O item 39 fala em <b>período mínimo de doze meses</b>, \"<b>mas não limitado a esse período</b>\", a partir da data de aprovação das demonstrações.</p><p>O comentário do Resumo reforça: os responsáveis devem analisar <b>toda a informação disponível sobre o futuro</b>, e os doze meses são um piso, não um teto.</p><p class='fb-fonte'>Resumo 07 · <i>Pressuposto de continuidade</i></p>",
14:"<p>Certo — é o desfecho do exemplo da prefeitura no Resumo. Se a análise determinar que a entidade <b>não terá continuidade</b>, as demonstrações devem ser elaboradas segundo outro pressuposto, como o da <b>liquidação</b>.</p><p>Nesse caso, os ativos e passivos devem ser mensurados e apresentados pelo <b>valor de realização líquido</b>, ou seja, o valor que seria obtido em uma venda forçada dos ativos.</p><p class='fb-fonte'>Resumo 07 · <i>Pressuposto de continuidade — exemplo</i></p>",
15:"<p>Errado por causa do \"nunca\". O item 48 diz que ativos, passivos, receitas e despesas não devem ser compensados, <b>exceto quando exigido ou permitido por NBC TSP</b>.</p><p>A exceção existe e está no item 50: transações incidentais às atividades principais, como <b>ganhos e perdas na alienação de ativos não circulantes</b> e <b>despesas com provisão da NBC TSP 03 que tiveram reembolso</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Compensação de valores</i></p>",
16:"<p>Certo. É o item 49: a compensação desses elementos no balanço patrimonial ou na demonstração do resultado, <b>exceto quando refletir a essência da transação</b>, prejudica a capacidade dos usuários de <b>(a) compreender as transações</b>, outros eventos e condições ocorridos, e <b>(b) avaliar os futuros fluxos de caixa</b> da entidade.</p><p>São as duas alíneas que o Resumo repete nas OBSERVAÇÕES — costumam ser cobradas literalmente.</p><p class='fb-fonte'>Resumo 07 · <i>Compensação de valores</i></p>",
17:"<p>Errado. O próprio item 49 exclui essa hipótese: a mensuração de <b>ativos líquidos de ajustes relacionados</b> — como os ajustes relativos à <b>obsolescência nos estoques</b> ou à <b>liquidação duvidosa de créditos</b> nas contas a receber — <b>não é considerada compensação</b>.</p><p>São contas retificadoras do próprio ativo, não o encontro de um ativo com um passivo.</p><p class='fb-fonte'>Resumo 07 · <i>Compensação de valores</i></p>",
18:"<p>Certo — é o segundo exemplo do item 49 e da observação nº 4 do Resumo: o ajuste relacionado à <b>liquidação duvidosa de créditos nas contas a receber</b> não configura compensação.</p><p>Vale o mesmo raciocínio do ajuste por <b>obsolescência nos estoques</b>: trata-se de mensurar o ativo líquido do seu ajuste, e não de compensar elementos distintos.</p><p class='fb-fonte'>Resumo 07 · <i>Compensação de valores — OBSERVAÇÕES</i></p>",
19:"<p>Certo. É a alínea (a) do item 50: <b>ganhos e perdas na alienação de ativos não circulantes</b>, incluindo investimentos e ativos operacionais, devem ser apresentados de <b>forma líquida</b> — deduzindo-se os valores contábeis dos valores recebidos pela alienação e reconhecendo-se as despesas de venda relacionadas.</p><p>Exemplo do Resumo: a entidade que vende um imóvel fora do seu estoque de bens para venda realiza transação <b>incidental</b> à atividade principal; o resultado vai líquido.</p><p class='fb-fonte'>Resumo 07 · <i>Compensação de valores — item 50</i></p>",
20:"<p>Certo. É a alínea (b) do item 50: as despesas relacionadas com a provisão reconhecida conforme a <b>NBC TSP 03</b> (Provisões, Passivos Contingentes e Ativos Contingentes) e que tiveram <b>reembolso</b>, segundo acordo contratual com terceiros — o Resumo exemplifica com o <b>acordo de garantia do fornecedor</b> —, podem ser compensadas com o respectivo reembolso.</p><p>Repare no verbo: <b>podem</b> ser compensadas. É permissão, não imposição.</p><p class='fb-fonte'>Resumo 07 · <i>Compensação de valores — item 50</i></p>",
21:"<p>Errado. O item 50 condiciona a apresentação líquida: os resultados dessas transações devem ser apresentados <b>quando essa apresentação refletir a essência da transação</b> ou outro evento, compensando-se quaisquer receitas com as despesas relacionadas resultantes da mesma transação.</p><p>Sem esse requisito, volta a valer a regra do item 49: informar separadamente ativos e passivos, receitas e despesas.</p><p class='fb-fonte'>Resumo 07 · <i>Compensação de valores — item 50</i></p>",
22:"<p>Certo — literalidade do item 53: a menos que uma norma permita ou exija de outra forma, a entidade deve divulgar informação comparativa com respeito ao período anterior <b>para todos os montantes</b> apresentados nas demonstrações contábeis do período corrente.</p><p>É o texto que o Resumo destaca em esquema próprio, com a ressalva inicial \"a menos que uma norma permita ou exija de outra forma\".</p><p class='fb-fonte'>Resumo 07 · <i>Informação comparativa — item 53</i></p>",
23:"<p>Certo. Segunda parte do item 53: também deve ser apresentada de forma comparativa a <b>informação narrativa e descritiva</b> que vier a ser apresentada, <b>quando for relevante</b> para a compreensão do conjunto das demonstrações contábeis do período corrente.</p><p>Ou seja: a comparabilidade não se limita a números. O filtro para o texto narrativo é a <b>relevância</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Informação comparativa — item 53</i></p>",
24:"<p>Certo. É a lista do item 53A (informação <b>mínima</b>): <b>balanço patrimonial</b>, <b>demonstração do resultado</b>, <b>demonstração dos fluxos de caixa</b> e <b>demonstração das mutações do patrimônio líquido</b>, todas com informação comparativa do período anterior, mais as <b>respectivas notas explicativas</b>.</p><p>Guarde que as notas explicativas entram na comparação: elas fecham a lista do 53A.</p><p class='fb-fonte'>Resumo 07 · <i>Informação comparativa — item 53A</i></p>",
25:"<p>Errado. O item 67 admite a alteração da data-base de apresentação apenas em <b>circunstâncias excepcionais</b> — não por conveniência administrativa e a qualquer tempo.</p><p>O exemplo do Resumo é alinhar o período contábil ao <b>ciclo orçamentário</b>: a entidade com exercício de janeiro a dezembro que precisa acompanhar um ciclo de abril a março. Outro exemplo do material é a transição do regime de caixa para o de competência.</p><p class='fb-fonte'>Resumo 07 · <i>Período contábil para a apresentação das demonstrações</i></p>",
26:"<p>Errado — faltou uma das duas exigências. O item 67 aponta que é importante <b>(a)</b> que os usuários estejam cientes de que os valores do período corrente e os comparativos <b>não são comparáveis</b> e <b>(b)</b> que a razão da mudança da data-base seja divulgada.</p><p>As duas providências são cumulativas. Divulgar só o motivo deixa o usuário comparando o que não é comparável.</p><p class='fb-fonte'>Resumo 07 · <i>Período contábil para a apresentação das demonstrações</i></p>",
27:"<p>Certo. É o item 69: a entidade deve estar em posição de divulgar suas demonstrações contábeis em até <b>seis meses a partir da data-base</b> das demonstrações contábeis.</p><p>Exemplo do Resumo: o município que encerra o ano fiscal em <b>31 de dezembro</b> e não divulga suas demonstrações até o <b>final de junho</b> do ano seguinte prejudica a utilidade da informação.</p><p class='fb-fonte'>Resumo 07 · <i>Tempestividade (oportunidade)</i></p>",
28:"<p>Errado. O item 69 diz o oposto: fatores <b>constantemente presentes</b>, tal como a <b>complexidade das operações</b> da entidade, <b>não são razões suficientes</b> para deixar de divulgar as demonstrações dentro de prazo aceitável.</p><p>A lógica é simples: o que é permanente não pode servir de desculpa recorrente. O item ressalva apenas que prazos dilatados mais específicos são tratados por legislações e regulamentos.</p><p class='fb-fonte'>Resumo 07 · <i>Tempestividade (oportunidade)</i></p>",
29:"<p>Certo. Pelo item 70, a entidade deve apresentar ativos circulantes e não circulantes e passivos circulantes e não circulantes como <b>grupos de contas separados</b> no balanço patrimonial.</p><p>Essa é a regra; a exceção é a apresentação <b>por ordem de liquidez</b>, cabível quando proporcionar informação confiável e mais relevante.</p><p class='fb-fonte'>Resumo 07 · <i>Distinção entre circulante e não circulante</i></p>",
30:"<p>Certo — é a exceção do item 70: a apresentação baseada na <b>liquidez</b> é admitida quando proporcionar informação <b>confiável e mais relevante</b>.</p><p>Exemplo do Resumo: a entidade com a maioria dos ativos no não circulante, mas com grande quantidade de caixa disponível para liquidar obrigações de curto prazo — a ordem de liquidez mostra melhor a capacidade imediata de pagamento.</p><p class='fb-fonte'>Resumo 07 · <i>Distinção entre circulante e não circulante</i></p>",
31:"<p>Errado por restringir. O item 70 encerra assim: quando essa exceção for aplicável, <b>todos os ativos e passivos</b> devem ser apresentados por ordem de liquidez.</p><p>Não existe apresentação híbrida — ativos por liquidez e passivos por circulante/não circulante. Ou se adota a regra geral para os dois lados, ou a exceção para os dois lados.</p><p class='fb-fonte'>Resumo 07 · <i>Distinção entre circulante e não circulante</i></p>",
32:"<p>Certo — é o item 73, com o exemplo da própria norma. Para algumas entidades, tais como <b>instituições financeiras</b>, a apresentação por ordem crescente ou decrescente de liquidez é confiável e mais relevante <b>pelo fato de que tais entidades não fornecem bens ou serviços dentro de ciclo operacional claramente identificável</b>.</p><p>O Resumo exemplifica com a instituição que tem investimentos de longo prazo, como debêntures, e depósitos em conta corrente liquidáveis a curto prazo.</p><p class='fb-fonte'>Resumo 07 · <i>Distinção entre circulante e não circulante — item 73</i></p>",
33:"<p>Certo. São exatamente as três alíneas do item 91: a entidade deve julgar a adequação da apresentação de contas adicionais separadamente com base na avaliação <b>(a) da natureza e liquidez dos ativos</b>; <b>(b) da função dos ativos na entidade</b>; e <b>(c) dos montantes, natureza e prazo dos passivos</b>.</p><p>Repare na assimetria: para os ativos, natureza, liquidez e função; para os passivos, montantes, natureza e prazo.</p><p class='fb-fonte'>Resumo 07 · <i>Apresentação de contas adicionais — item 91</i></p>",
34:"<p>Certo — é o item 111: as despesas devem ser subclassificadas a fim de <b>destacar os custos e as apropriações de custos de programas específicos, atividades ou outros segmentos relevantes</b> à entidade retratada pelas demonstrações contábeis.</p><p>O mesmo item já avisa que essa análise deve ser feita por <b>uma das duas maneiras</b> descritas a seguir: método da natureza ou método da função da despesa.</p><p class='fb-fonte'>Resumo 07 · <i>Subclassificação das despesas — item 111</i></p>",
35:"<p>Errado — inverteu os métodos. No <b>método da natureza da despesa</b> (item 112), as despesas são agregadas conforme sua natureza e <b>NÃO são realocadas entre as várias funções</b> dentro da entidade.</p><p>Por isso, segundo o próprio item, esse método <b>pode ser simples de aplicar</b>: não são necessárias alocações de gastos em classificações funcionais. Quem realoca é o método da função.</p><p class='fb-fonte'>Resumo 07 · <i>Subclassificação das despesas — item 112</i></p>",
36:"<p>Certo. É a lista literal de exemplos do item 112 para o <b>método da natureza da despesa</b>: <b>depreciações; compras de materiais; despesas com transporte; benefícios a empregados; e despesas de publicidade</b>.</p><p>Note o traço comum: todos dizem <b>o que</b> foi gasto, e não <b>para que</b> foi gasto — esta segunda pergunta é a do método da função.</p><p class='fb-fonte'>Resumo 07 · <i>Subclassificação das despesas — item 112</i></p>",
37:"<p>Certo — é o item 113: o método da função da despesa classifica os gastos de acordo com o <b>programa ou o propósito</b> para o qual foram incorridos.</p><p>O exemplo de classificação no Resumo é exatamente esse: Receitas, depois Despesas com <b>saúde</b>, Despesas com <b>educação</b> e Outras despesas, chegando ao Resultado.</p><p class='fb-fonte'>Resumo 07 · <i>Subclassificação das despesas — item 113</i></p>",
38:"<p>Errado. O item 113 diz o contrário: embora o método da função possa proporcionar informação mais relevante aos usuários do que a classificação por natureza, a <b>alocação de despesas às funções pode exigir alocações arbitrárias e envolver considerável capacidade de julgamento</b>.</p><p>O método simples de aplicar, por não exigir alocação funcional, é o da <b>natureza</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Subclassificação das despesas — item 113</i></p>",
39:"<p>Certo — é o item 115: as entidades que classificarem os gastos <b>por função</b> devem divulgar informação adicional sobre a <b>natureza</b> das despesas, incluindo as despesas de <b>depreciação e de amortização</b> e as despesas com <b>benefícios a empregados</b>.</p><p>A regra existe para evitar perda de informação: quem opta pela função não pode deixar o usuário sem saber o que, de fato, foi gasto.</p><p class='fb-fonte'>Resumo 07 · <i>Subclassificação das despesas — item 115</i></p>",
40:"<p>Certo. Item 116: a escolha entre o método da função das despesas e o método da natureza das despesas depende de <b>fatores históricos e regulatórios e da natureza da entidade</b>.</p><p>O mesmo item acrescenta que <b>ambos</b> os métodos proporcionam uma indicação das despesas que podem variar, direta e indiretamente, com o nível de vendas ou de produção da entidade.</p><p class='fb-fonte'>Resumo 07 · <i>Subclassificação das despesas — item 116</i></p>",
41:"<p>Errado — trocou o método. Pelo quadro ATENÇÃO do Resumo, como a estrutura do <b>PCASP detalha as VPD conforme a abordagem da natureza</b>, é o <b>método da NATUREZA</b> que é obrigatório para todos os entes.</p><p>O método da <b>função</b> é apenas <b>facultado</b>, em publicação adicional. Inverter essa dupla é o erro que a banca busca.</p><p class='fb-fonte'>Resumo 07 · <i>Subclassificação das despesas — ATENÇÃO</i></p>",
42:"<p>Certo. É a parte final do quadro ATENÇÃO: sendo obrigatório o método da natureza, fica <b>facultado publicar, adicionalmente, análise segundo o método da função</b>.</p><p>O mesmo quadro lembra que a NBC TSP 11 incentiva a análise das <b>VPD</b> por um dos dois métodos — natureza ou função —, devendo-se selecionar o critério que proporcione informação com <b>representação fidedigna</b> e seja mais relevante.</p><p class='fb-fonte'>Resumo 07 · <i>Subclassificação das despesas — ATENÇÃO</i></p>",
43:"<p>Errado. O quadro ATENÇÃO ressalta o oposto: os termos \"<b>natureza da despesa</b>\" e \"<b>classificação funcional</b>\" da NBC TSP 11 <b>não se confundem</b> com os termos correspondentes utilizados na <b>execução orçamentária</b>.</p><p>São planos distintos: aqui se fala da análise das <b>VPD</b> na demonstração do resultado; lá, da classificação da <b>despesa orçamentária</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Subclassificação das despesas — ATENÇÃO</i></p>",
44:"<p>Certo — é a primeira frase do item 122: contribuições dos proprietários e distribuições para os proprietários <b>incluem transferências entre duas entidades que fazem parte da mesma entidade econômica</b>.</p><p>Exemplo da própria norma: transferência de governo, atuando na <b>qualidade de detentor de capital próprio</b>, para departamento de governo. O Resumo ilustra com o município que transfere recursos ao departamento de obras públicas para construir uma estrada.</p><p class='fb-fonte'>Resumo 07 · <i>Contribuições dos proprietários — item 122</i></p>",
45:"<p>Errado por causa do \"sempre\". O item 122 impõe uma condição, destacada em esquema pelo Resumo: o reconhecimento como ajuste direto no patrimônio líquido da entidade controlada ocorre <b>SOMENTE QUANDO</b> as contribuições <b>explicitamente aumentam a participação residual</b> na entidade controlada, na forma de <b>direitos sobre o patrimônio líquido</b>.</p><p>Sem esse aumento explícito da participação residual, não há o ajuste direto no PL.</p><p class='fb-fonte'>Resumo 07 · <i>Contribuições dos proprietários — item 122</i></p>",
46:"<p>Certo. É a alínea (a) do item 132: no resumo de políticas contábeis significativas, a entidade deve divulgar a <b>base de mensuração utilizada na elaboração das demonstrações contábeis</b>.</p><p>Exemplo do Resumo: o resumo de políticas de um Estado informando que as propriedades do governo foram mensuradas pelo <b>custo histórico</b>, sem ajuste para refletir mudanças de valor de mercado ao longo do tempo.</p><p class='fb-fonte'>Resumo 07 · <i>Divulgação de políticas contábeis — item 132</i></p>",
47:"<p>Certo — alínea (b) do item 132: deve ser divulgado o <b>grau em que a entidade tem aplicado qualquer disposição transitória de qualquer outra norma</b>.</p><p>A lista do item 132 se completa com a alínea (c): <b>outras políticas contábeis</b> utilizadas que sejam relevantes para a compreensão das demonstrações contábeis.</p><p class='fb-fonte'>Resumo 07 · <i>Divulgação de políticas contábeis — item 132</i></p>",
48:"<p>Certo. São os exemplos de bases de mensuração do item 133: <b>custo histórico, custo corrente, valor realizável líquido, valor justo ou valor recuperável</b>.</p><p>A razão da exigência está no mesmo item: a base sobre a qual as demonstrações são elaboradas <b>afeta significativamente a análise dos usuários</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Divulgação de políticas contábeis — item 133</i></p>",
49:"<p>Errado no grau de detalhe. Pelo item 133, quando mais de uma base de mensuração for utilizada — por exemplo, quando determinadas classes de ativos são reavaliadas —, <b>é suficiente divulgar a indicação das categorias de ativos e de passivos</b> às quais cada base foi aplicada.</p><p>Exemplo do Resumo: divulgar que o valor de mercado foi aplicado apenas à categoria \"imóveis\", enquanto o custo histórico foi aplicado às demais categorias. Não se exige valor por ativo individual.</p><p class='fb-fonte'>Resumo 07 · <i>Divulgação de políticas contábeis — item 133</i></p>",
50:"<p>Certo — é o exemplo do item 135: espera-se que as entidades do setor público evidenciem suas políticas contábeis para reconhecimento das <b>receitas de impostos, doações e outras formas de receitas de transações sem contraprestação</b> em bens e serviços.</p><p>A regra do item é a de que cada entidade considere a <b>natureza das suas operações</b> e as políticas que os usuários esperam ver divulgadas para aquele tipo de entidade.</p><p class='fb-fonte'>Resumo 07 · <i>Divulgação de políticas contábeis — item 135</i></p>",
51:"<p>Errado. O item 136 afirma justamente o contrário: a política contábil <b>pode ser significativa devido à natureza das operações</b> da entidade, <b>mesmo que os valores</b> associados a períodos anteriores e ao atual <b>não sejam materiais</b>.</p><p>Exemplo do Resumo: o fundo de contingência para eventos imprevistos que acumulou apenas <b>R$ 12.000</b> ao final do ano — valor não expressivo, política significativa.</p><p class='fb-fonte'>Resumo 07 · <i>Divulgação de políticas contábeis — item 136</i></p>",
52:"<p>Certo — parte final do item 136: é também apropriado divulgar cada política contábil significativa que <b>não seja especificamente exigida pelas NBCs TSP</b>, mas que tenha sido <b>selecionada e aplicada</b>.</p><p>O critério de divulgação, pelo item 134, é se ela proporciona aos usuários melhor compreensão de como as transações, eventos e condições estão refletidos no desempenho e na situação patrimonial relatados.</p><p class='fb-fonte'>Resumo 07 · <i>Divulgação de políticas contábeis — item 136</i></p>",
53:"<p>Errado — o item 138 diz o contrário. A administração exerce diversos julgamentos <b>com a exceção dos que envolvem estimativas</b>, e são esses julgamentos que podem afetar significativamente os montantes reconhecidos nas demonstrações contábeis.</p><p>O comentário do Resumo explica: estimativas são valores que <b>não podem ser determinados com exatidão</b>, baseados em avaliação subjetiva, e por isso ficam fora do item 138.</p><p class='fb-fonte'>Resumo 07 · <i>Divulgação de políticas contábeis — item 138</i></p>",
54:"<p>Certo. É a alínea (a) do item 138: a administração exerce julgamento ao definir <b>se ativos são propriedades para investimento</b>.</p><p>As demais alíneas da lista: se os acordos de suprimento de produtos e serviços que envolvem a utilização de ativos são <b>arrendamentos</b>; se certas vendas de bens decorrem, em essência, de <b>acordos de financiamento</b> e não geram receita de venda; e se a essência da relação com outras entidades indica que são <b>controladas</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Divulgação de políticas contábeis — item 138</i></p>",
55:"<p>Certo — é o item 1 da NBC TSP 13: a norma exige a <b>comparação dos valores orçados com os realizados</b> decorrentes da execução do orçamento e também exige a <b>divulgação das razões das diferenças materiais</b> entre realizados e orçados.</p><p>Exemplo do Resumo: a prefeitura que divulga o quanto pretende arrecadar e gastar em saúde, educação e segurança e, ao final do ano, precisa explicar as diferenças significativas.</p><p class='fb-fonte'>Resumo 07 · <i>NBC TSP 13 — item 1</i></p>",
56:"<p>Errado por restringir o alcance. A NBC TSP 13 se aplica às entidades que publicam seu orçamento aprovado <b>obrigatória OU voluntariamente</b> e que, em razão disso, submetem-se à prestação de contas e responsabilização (<i>accountability</i>).</p><p>A obrigatoriedade só reaparece na alínea (a) do item 1, quanto à apresentação da <b>conformidade com o orçamento aprovado</b>, \"quando tenham a obrigatoriedade de publicá-lo\".</p><p class='fb-fonte'>Resumo 07 · <i>NBC TSP 13 — item 1</i></p>",
57:"<p>Certo — é o item 28 da NBC TSP 13: a informação orçamentária adicional, incluindo informação sobre o <b>desempenho dos serviços prestados</b>, deve ser apresentada em <b>outros documentos que não as demonstrações contábeis</b>, incentivando-se a <b>referência cruzada</b> nas demonstrações para tais documentos.</p><p>Exemplos do Resumo de informação não financeira: quantidade de obras realizadas, atendimentos na área da saúde, indicadores de desempenho e atendimento a demandas da população.</p><p class='fb-fonte'>Resumo 07 · <i>NBC TSP 13 — item 28</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"07", nome:"Apresentação das Demonstrações Contábeis (NBC TSP 11 e 13)", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
