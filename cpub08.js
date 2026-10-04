/* Contabilidade Pública — Módulo 08: Balanço Orçamentário (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cpub08 = (function(){
"use strict";

var CARDS = [
  ["O que o Balanço Orçamentário demonstra (art. 102 da Lei 4.320/64)?","As <b>receitas e despesas PREVISTAS em confronto com as REALIZADAS</b>."],
  ["Quais as quatro colunas da receita no BO?","<b>(a)</b> Previsão Inicial · <b>(b)</b> Previsão Atualizada · <b>(c)</b> Receitas Realizadas · <b>(d)</b> Saldo = <b>(c) – (b)</b>."],
  ["O que é a coluna Previsão Inicial?","Os valores da previsão inicial da receita <b>conforme a LOA</b>. Permanecem <b>inalterados durante todo o exercício</b>."],
  ["O que compõe a Previsão Atualizada da receita?","A reestimativa decorrente de: <b>excesso de arrecadação</b>; <b>contratação de operações de crédito</b>; <b>criação de naturezas de receita não previstas na LOA</b>; <b>remanejamento entre naturezas</b>; e <b>atualizações monetárias autorizadas por lei</b> feitas <b>após</b> a publicação da LOA."],
  ["E se não houver reestimativa da receita?","A coluna <b>Previsão Atualizada</b> apresentará <b>os mesmos valores</b> da coluna <b>Previsão Inicial</b>."],
  ["O que são Receitas Realizadas?","As receitas <b>arrecadadas</b> diretamente pelo órgão ou por outras instituições, como a <b>rede bancária</b>."],
  ["O que significa o Saldo na parte da receita?","O <b>excesso ou a insuficiência de arrecadação</b> — <b>(c) Receitas Realizadas – (b) Previsão Atualizada</b>."],
  ["Quais as seis colunas da despesa no BO?","<b>(e)</b> Dotação Inicial · <b>(f)</b> Dotação Atualizada · <b>(g)</b> Despesas Empenhadas · <b>(h)</b> Despesas Liquidadas · <b>(i)</b> Despesas Pagas · <b>(j)</b> Saldo da Dotação = <b>(f) – (g)</b>."],
  ["O que compõe a Dotação Atualizada?","A <b>dotação inicial</b> + <b>créditos adicionais abertos ou reabertos</b> no exercício + <b>atualizações monetárias após a publicação da LOA</b>, <b>deduzidas</b> as respectivas <b>anulações e cancelamentos</b>."],
  ["O que entra na coluna Despesas Empenhadas?","As despesas <b>empenhadas no exercício</b>, <b>inclusive</b> as <b>em liquidação, liquidadas ou pagas</b>."],
  ["O que NÃO entra na coluna Despesas Liquidadas?","Os valores da <b>liquidação de restos a pagar não processados</b>."],
  ["O que NÃO entra na coluna Despesas Pagas?","O <b>pagamento de restos a pagar</b> — <b>processados ou não processados</b>."],
  ["O que é o Saldo da Dotação?","<b>Dotação Atualizada (f) – Despesas Empenhadas (g)</b> — uma <b>economia orçamentária</b> em relação ao previsto. É como se apuram os saldos a executar de cada grupo de natureza da despesa."],

  ["Quais os três quadros que compõem o Balanço Orçamentário?","<b>a)</b> Quadro Principal; <b>b)</b> Quadro da Execução dos <b>Restos a Pagar NÃO Processados</b>; <b>c)</b> Quadro da Execução dos <b>Restos a Pagar Processados</b>."],
  ["O que são Restos a Pagar (art. 36 da Lei 4.320/64)?","As despesas <b>empenhadas e não pagas até 31 de dezembro</b>, distinguindo-se as <b>processadas</b> das <b>não processadas</b>."],
  ["O que são restos a pagar NÃO processados?","Despesas <b>empenhadas</b> mas <b>sem a efetivação da liquidação</b> — sem a comprovação da entrega do bem ou serviço."],
  ["Como o BO detalha as receitas?","Por <b>categoria econômica e origem</b>, especificando <b>previsão inicial, previsão atualizada, receita realizada e saldo</b> (excesso ou insuficiência de arrecadação)."],
  ["Como o BO detalha as despesas?","Por <b>categoria econômica e grupo de natureza da despesa</b>, discriminando <b>dotação inicial, dotação atualizada, empenhadas, liquidadas, pagas e saldo da dotação</b>."],
  ["Quais classes e grupos do PCASP elaboram o BO?","<b>Classe 5</b> (Orçamento Aprovado), <b>Grupo 2</b> — Previsão da Receita e Fixação da Despesa (<b>5.2</b>); e <b>Classe 6</b> (Execução do Orçamento), <b>Grupo 2</b> — Realização da Receita e Execução da Despesa (<b>6.2</b>)."],
  ["Que classificações o Quadro Principal utiliza?","A classificação <b>por natureza</b> para receitas e despesas; para a <b>despesa</b>, a <b>classificação funcional</b> é usada <b>complementarmente</b>."],
  ["Como as receitas são informadas no BO?","Pelos <b>valores LÍQUIDOS</b> das respectivas deduções — restituições, descontos, retificações, deduções para o <b>Fundeb</b> e repartições de receita tributária entre entes."],
  ["Contraste LOA × Balanço Orçamentário","Na <b>LOA</b>, todas as receitas e despesas constam <b>pelos seus totais, vedadas quaisquer deduções</b>. No <b>BO</b>, as receitas vão pelos <b>valores líquidos</b> das deduções."],
  ["O que vai no Quadro de RP Não Processados?","Os restos a pagar <b>não processados (não liquidados) inscritos até o exercício anterior</b> e suas respectivas <b>fases de execução</b>."],
  ["O que vai no Quadro de RP Processados?","Os restos a pagar <b>processados inscritos até o exercício anterior</b> nas respectivas fases de execução — e também os <b>inscritos como não processados que tenham sido liquidados em exercício anterior</b>."],
  ["Por que o Quadro de RP Processados não tem coluna “Liquidados”?","Porque <b>todos</b> os restos a pagar ali evidenciados <b>já passaram pelo estágio da liquidação</b>."],
  ["O que o ente deve fazer ao final do exercício com os RPNP liquidados?","<b>Transferir os saldos</b> de restos a pagar <b>não processados liquidados</b> para <b>restos a pagar processados</b>."],
  ["Quais são os três estágios da execução da despesa?","<b>Empenho</b> (1º estágio, formalizado pela <b>Nota de Empenho</b>, com nome do credor e valor) · <b>Liquidação</b> (verificação da entrega do bem ou da realização do serviço) · <b>Pagamento</b> (entrega de numerário por cheque nominativo, ordem de pagamento ou crédito em conta)."],

  ["Quando o BO demonstra desequilíbrio entre previsão atualizada e dotação atualizada?","Quando há <b>superávit financeiro de exercícios anteriores</b> apurado no BP, ou <b>reabertura de créditos adicionais</b> (especiais e extraordinários)."],
  ["Por que o superávit financeiro gera esse desequilíbrio?","Porque <b>não é receita do exercício de referência</b> (já o foi em exercício anterior), mas <b>constitui disponibilidade</b> para uso no exercício — enquanto as despesas pagas à sua conta <b>são despesas do exercício</b>."],
  ["Por que a reabertura de créditos gera o desequilíbrio?","Porque <b>aumenta a despesa fixada sem necessidade de nova arrecadação</b>."],
  ["Onde ficam detalhados o superávit financeiro utilizado e a reabertura de créditos?","No campo <b>“Saldos de Exercícios Anteriores”</b> do Balanço Orçamentário — que inclui <b>Recursos de Exercícios Anteriores</b>, <b>Superávit Financeiro</b> e <b>Reabertura de Créditos Adicionais</b>."],
  ["Como se verifica o equilíbrio no BO sem influenciar seu resultado?","Somando a linha <b>TOTAL</b> com a linha <b>Saldos de Exercícios Anteriores</b>, ambas na coluna <b>Previsão Atualizada</b>, e confrontando com o <b>TOTAL da Dotação Atualizada</b>."],
  ["Balanço Orçamentário não consolidado com déficit é irregularidade?","<b>Não.</b> Muitos órgãos <b>não são agentes arrecadadores</b> mas executam despesas. Deve ser evidenciado por <b>nota explicativa</b> com o montante da <b>movimentação financeira</b> (transferências recebidas e concedidas)."],
  ["O que são notas explicativas?","Informações <b>complementares</b> às demonstrações contábeis, que esclarecem os dados, detalham as <b>políticas contábeis</b> adotadas e fornecem contexto relevante."],
  ["Notas do BO — os quatro primeiros itens","<b>1)</b> o <b>regime orçamentário</b> e o <b>critério de classificação</b> adotados no orçamento aprovado; <b>2)</b> o <b>período</b> a que se refere o orçamento; <b>3)</b> as <b>entidades abrangidas</b>; <b>4)</b> o detalhamento das receitas e despesas <b>intraorçamentárias</b>, quando relevante."],
  ["Notas do BO — itens 5 e 6","<b>5)</b> o detalhamento das despesas executadas <b>por tipos de créditos</b> (inicial, suplementar, especial e extraordinário); <b>6)</b> a utilização do <b>superávit financeiro</b> e da <b>reabertura de créditos especiais e extraordinários</b> e suas influências no resultado orçamentário."],
  ["Notas do BO — itens 7 e 8","<b>7)</b> as <b>atualizações monetárias</b> autorizadas por lei, efetuadas <b>antes e após</b> a publicação da LOA, que compõem a <b>Previsão Inicial</b>; <b>8)</b> o <b>procedimento adotado quanto aos RPNP liquidados</b> — se transfere o saldo para processados ou mantém controle separado."],
  ["Notas do BO — itens 9 e 10","<b>9)</b> o detalhamento dos <b>“recursos de exercícios anteriores”</b>, destacando os vinculados ao <b>RPPS</b> e outros com destinação vinculada; <b>10)</b> a <b>conciliação com os fluxos de caixa líquidos</b> das atividades operacionais, de investimento e de financiamento da DFC."],
  ["Nota que mais cai: atualização monetária da receita","A da <b>Previsão Inicial</b> alcança as feitas <b>antes E após</b> a publicação da LOA. Já a <b>Previsão Atualizada</b> reflete as atualizações efetuadas <b>após</b> a publicação da LOA."],

  ["Qual a regra de ouro do resultado orçamentário?","Receitas <b>ARRECADADAS</b> menos despesas <b>EMPENHADAS</b> — art. 35 da Lei 4.320/64."],
  ["O que diz o art. 35 da Lei 4.320/64?","Pertencem ao exercício financeiro: <b>I</b> — as receitas nele <b>arrecadadas</b>; <b>II</b> — as despesas nele <b>legalmente empenhadas</b>."],
  ["Quais as três situações do resultado orçamentário?","<b>Superávit</b>: arrecadadas > empenhadas. <b>Equilíbrio</b>: arrecadadas = empenhadas. <b>Déficit</b>: arrecadadas < empenhadas."],
  ["A aprovação da LOA afeta o resultado orçamentário?","<b>Não</b> — não há arrecadação de receita nem empenho de despesa."],
  ["A inscrição de restos a pagar afeta o resultado orçamentário?","<b>Não.</b> É <b>receita extraorçamentária</b>. Afeta o <b>resultado financeiro</b>, não o orçamentário."],
  ["Doação de bem móvel ou imóvel afeta o resultado orçamentário?","<b>Não</b> — é <b>VPA</b>, e não receita orçamentária. Afeta o <b>BP</b> e a <b>DVP</b>."],
  ["E se o bem recebido em doação for depois vendido?","Aí sim há <b>receita orçamentária</b> — <b>receita de capital</b> — e o resultado orçamentário é afetado."],
  ["Doação em DINHEIRO afeta o resultado orçamentário?","<b>Sim</b> — considera-se que houve <b>arrecadação de receita</b>."],
  ["A depreciação afeta o resultado orçamentário?","<b>Não</b> — é <b>VPD</b>, não despesa orçamentária. Afeta o <b>BP</b> e a <b>DVP</b>."],
  ["Contratação de operação de crédito afeta o resultado orçamentário?","<b>Sim</b> — é <b>receita orçamentária</b>."],
  ["Restos a pagar — inscrição e pagamento são o quê?","<b>Inscrição</b> = <b>receita extraorçamentária</b>. <b>Pagamento</b> = <b>despesa extraorçamentária</b>. Nenhum afeta o BO; ambos afetam o <b>Balanço Financeiro</b>."],
  ["O que diz o item 34 da NBC TSP 13 sobre regimes?","As entidades <b>podem adotar regimes distintos</b> para as demonstrações contábeis e para o orçamento aprovado — por exemplo, <b>competência</b> nas demonstrações e <b>caixa</b> no orçamento."],
  ["Truque de prova para questões de resultado orçamentário","As bancas enchem o enunciado de informação inútil. Procure <b>só</b> a receita <b>arrecadada</b> e a despesa <b>empenhada</b> — e ignore o resto."]
];

var QS = [
  ["O Balanço Orçamentário demonstrará as receitas e despesas previstas em confronto com as realizadas.","C","FUNDATEC","Art. 102 da Lei 4.320/64."],
  ["O Balanço Orçamentário está previsto no art. 101 da Lei nº 4.320/64.","E","CESPE","O art. 101 lista as demonstrações; o BO é tratado no <b>art. 102</b>."],
  ["Os valores da coluna Previsão Inicial permanecem inalterados durante todo o exercício.","C","FCC","Refletem a posição inicial do orçamento na LOA."],
  ["O registro de excesso de arrecadação altera a coluna Previsão Atualizada da receita.","C","FGV","É uma das hipóteses de reestimativa."],
  ["A contratação de operações de crédito não repercute na coluna Previsão Atualizada.","E","VUNESP","É uma das hipóteses expressas de reestimativa da receita."],
  ["Não havendo reestimativa da receita, a Previsão Atualizada apresentará os mesmos valores da Previsão Inicial.","C","FUNDATEC","Consequência direta do conceito."],
  ["As receitas realizadas correspondem às receitas arrecadadas pelo órgão ou por outras instituições, como a rede bancária.","C","CESPE","Conceito da coluna."],
  ["Na parte da receita, o saldo corresponde ao excesso ou à insuficiência de arrecadação.","C","FCC","Saldo = realizada menos previsão atualizada."],
  ["A dotação atualizada corresponde à dotação inicial acrescida dos créditos adicionais abertos ou reabertos e das atualizações monetárias posteriores à LOA, deduzidas anulações e cancelamentos.","C","FGV","Composição da coluna."],
  ["A coluna Despesas Empenhadas exclui as despesas que já tenham sido liquidadas ou pagas.","E","VUNESP","Inclui as despesas em liquidação, liquidadas <b>ou pagas</b>."],
  ["A coluna Despesas Liquidadas não inclui os valores referentes à liquidação de restos a pagar não processados.","C","FUNDATEC","Restos a pagar têm quadros próprios."],
  ["A coluna Despesas Pagas inclui o pagamento de restos a pagar processados.","E","CESPE","Não inclui o pagamento de restos a pagar, processados ou não."],
  ["O saldo da dotação é obtido subtraindo-se as despesas empenhadas da dotação atualizada.","C","FCC","Representa economia orçamentária."],
  ["O Balanço Orçamentário é composto pelo quadro principal e pelos quadros da execução dos restos a pagar processados e não processados.","C","FGV","Três quadros."],
  ["Consideram-se restos a pagar as despesas empenhadas e não pagas até 31 de dezembro.","C","VUNESP","Art. 36 da Lei 4.320/64."],
  ["Restos a pagar não processados são as despesas já liquidadas mas ainda não pagas.","E","FUNDATEC","Não processados são os <b>empenhados sem liquidação</b>."],
  ["No Balanço Orçamentário as receitas são detalhadas por categoria econômica e origem.","C","CESPE","Nível de detalhamento exigido."],
  ["As despesas são demonstradas por categoria econômica e grupo de natureza da despesa.","C","FCC","Nível de detalhamento exigido."],
  ["O Balanço Orçamentário é elaborado com as contas da classe 5, grupo 2, e da classe 6, grupo 2, do PCASP.","C","FGV","Orçamento Aprovado e Execução do Orçamento."],
  ["Para a elaboração do Balanço Orçamentário utiliza-se a classe 7 do PCASP.","E","VUNESP","A classe 7 é de controles devedores."],
  ["No quadro principal, a classificação funcional é utilizada complementarmente à classificação por natureza, no caso da despesa.","C","FUNDATEC","Regra do MCASP."],
  ["No Balanço Orçamentário, as receitas devem ser informadas pelos seus totais, vedadas quaisquer deduções.","E","CESPE","Essa é a regra da <b>LOA</b>; no BO vão pelos <b>valores líquidos</b>."],
  ["As deduções para o Fundeb e as repartições de receita tributária entre entes são consideradas na apresentação líquida das receitas no Balanço Orçamentário.","C","FCC","Exemplos expressos do MCASP."],
  ["No quadro de restos a pagar não processados são informados os inscritos até o exercício anterior e suas fases de execução.","C","FGV","Conteúdo do quadro."],
  ["Os restos a pagar inscritos como não processados que tenham sido liquidados em exercício anterior ao de referência compõem o quadro dos restos a pagar processados.","C","VUNESP","Regra do MCASP."],
  ["O quadro da execução de restos a pagar processados possui coluna de liquidados.","E","FUNDATEC","Desnecessária: todos ali já passaram pela liquidação."],
  ["O empenho é o primeiro estágio da despesa e é formalizado pela nota de empenho, da qual constam o nome do credor e o valor da despesa.","C","CESPE","Conceito da Lei 4.320/64."],
  ["O pagamento consiste na verificação de que o material foi entregue ou o serviço realizado.","E","FCC","Essa é a <b>liquidação</b>."],
  ["O Balanço Orçamentário poderá demonstrar desequilíbrio entre a previsão atualizada da receita e a dotação atualizada quando houver superávit financeiro de exercícios anteriores ou reabertura de créditos adicionais.","C","FGV","Duas causas típicas."],
  ["O superávit financeiro de exercícios anteriores é receita orçamentária do exercício de referência.","E","VUNESP","Não é receita do exercício — já o foi em exercício anterior; constitui <b>disponibilidade</b>."],
  ["As despesas executadas à conta do superávit financeiro são despesas do exercício de referência.","C","FUNDATEC","Por força legal, pois não foram empenhadas no exercício anterior."],
  ["A reabertura de créditos especiais e extraordinários aumenta a despesa fixada sem necessidade de nova arrecadação.","C","CESPE","Por isso gera desequilíbrio no BO."],
  ["Recursos de exercícios anteriores, superávit financeiro e reabertura de créditos adicionais compõem o campo Saldos de Exercícios Anteriores.","C","FCC","Estrutura do BO."],
  ["O equilíbrio do Balanço Orçamentário pode ser verificado somando-se o TOTAL e os Saldos de Exercícios Anteriores da coluna Previsão Atualizada e confrontando com o TOTAL da Dotação Atualizada.","C","FGV","Sem influenciar o resultado orçamentário."],
  ["O déficit apresentado em Balanço Orçamentário não consolidado configura, por si só, irregularidade.","E","VUNESP","Muitos órgãos não são agentes arrecadadores; basta nota explicativa."],
  ["O Balanço Orçamentário deve ser acompanhado de notas explicativas que divulguem o regime orçamentário e o critério de classificação adotados no orçamento aprovado.","C","FUNDATEC","Primeiro item do rol."],
  ["Entre as notas explicativas do Balanço Orçamentário está o detalhamento das despesas executadas por tipos de créditos.","C","CESPE","Inicial, suplementar, especial e extraordinário."],
  ["As notas explicativas do Balanço Orçamentário devem informar a utilização do superávit financeiro e da reabertura de créditos especiais e extraordinários e suas influências no resultado orçamentário.","C","FCC","Item 6 do rol."],
  ["As atualizações monetárias que compõem a coluna Previsão Inicial da receita são apenas as efetuadas antes da publicação da LOA.","E","FGV","A nota alcança as efetuadas <b>antes e após</b> a publicação da LOA."],
  ["É nota explicativa do Balanço Orçamentário a conciliação com os fluxos de caixa líquidos das atividades operacionais, de investimento e de financiamento.","C","VUNESP","Item 10 do rol."],
  ["A nota explicativa deve informar o procedimento adotado quanto aos restos a pagar não processados liquidados.","C","FUNDATEC","Se transfere para processados ou controla separadamente."],
  ["Pertencem ao exercício financeiro as receitas nele arrecadadas e as despesas nele legalmente empenhadas.","C","CESPE","Art. 35 da Lei 4.320/64."],
  ["O resultado orçamentário é apurado confrontando as receitas arrecadadas com as despesas liquidadas.","E","FCC","Com as despesas <b>empenhadas</b>."],
  ["Há superávit orçamentário quando as receitas arrecadadas superam as despesas empenhadas.","C","FGV","Definição."],
  ["A mera aprovação da lei orçamentária anual altera o resultado orçamentário do exercício.","E","VUNESP","Não há arrecadação nem empenho."],
  ["A inscrição de restos a pagar não afeta o resultado orçamentário.","C","FUNDATEC","É receita extraorçamentária; afeta o resultado financeiro."],
  ["O recebimento de um veículo em doação afeta o resultado orçamentário do exercício.","E","CESPE","É VPA; afeta o BP e a DVP, não o BO."],
  ["O recebimento de doação em dinheiro afeta o resultado orçamentário.","C","FCC","Considera-se arrecadação de receita."],
  ["A venda posterior de um bem recebido em doação gera receita orçamentária de capital.","C","FGV","Aí o resultado orçamentário é afetado."],
  ["O registro da depreciação de um veículo reduz o resultado orçamentário do exercício.","E","VUNESP","Depreciação é VPD, não despesa orçamentária."],
  ["A contratação de operação de crédito é receita orçamentária e afeta o resultado orçamentário.","C","FUNDATEC","Receita de capital."],
  ["A inscrição de restos a pagar é receita extraorçamentária e o seu pagamento, despesa extraorçamentária.","C","CESPE","Quadro de diferenças relevantes."],
  ["A inscrição e o pagamento de restos a pagar afetam o Balanço Financeiro.","C","FCC","Embora não afetem o Balanço Orçamentário."],
  ["Lançados impostos de R$ 80.000, dos quais metade foi arrecadada, e empenhadas despesas de pessoal de R$ 60.000, o resultado orçamentário foi deficitário em R$ 20.000.","C","FGV","40.000 arrecadados menos 60.000 empenhados."],
  ["No exemplo acima, a inscrição em restos a pagar de metade da despesa de pessoal alteraria o resultado orçamentário apurado.","E","VUNESP","A inscrição de RP não afeta o resultado orçamentário."],
  ["Segundo a NBC TSP 13, as entidades podem adotar regimes distintos para as demonstrações contábeis e para os orçamentos aprovados.","C","FUNDATEC","Item 34 — por exemplo, competência e caixa."],
  ["A NBC TSP 13 veda que o governo adote o regime de caixa para o orçamento e o de competência para as demonstrações contábeis.","E","CESPE","É justamente o exemplo dado pela norma."],
  ["A estrutura do Balanço Orçamentário traz informações sobre as despesas em cada estágio de execução, possibilitando análises mais detalhadas.","C","FCC","Empenho, liquidação e pagamento em colunas próprias."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("O Balanço Orçamentário e suas colunas",
      '<div class="box"><span class="bl">Base legal</span>'+
      '<p class="mn"><em>Art. 102 da Lei 4.320/64 — o BO demonstrará as receitas e despesas <b>PREVISTAS</b> em confronto com as <b>REALIZADAS</b>.</em></p></div>'+
      '<div class="box"><span class="bl">Lado da RECEITA — quatro colunas</span>'+
      '<ul><li><b>(a) Previsão Inicial</b> — o que está na LOA. <b>Não muda</b> durante o exercício.</li>'+
      '<li><b>(b) Previsão Atualizada</b> — reestimativa por excesso de arrecadação, operações de crédito, novas naturezas de receita, remanejamento entre naturezas e atualizações monetárias <b>posteriores à LOA</b>.</li>'+
      '<li><b>(c) Receitas Realizadas</b> — arrecadadas pelo órgão ou por terceiros (rede bancária).</li>'+
      '<li><b>(d) Saldo = (c) – (b)</b> — <b>excesso</b> ou <b>insuficiência de arrecadação</b>.</li></ul>'+
      '<p>Sem reestimativa, <b>(b) = (a)</b>.</p></div>'+
      '<div class="box"><span class="bl">Lado da DESPESA — seis colunas</span>'+
      '<ul><li><b>(e) Dotação Inicial</b> — a da LOA, <b>inalterada</b> no exercício.</li>'+
      '<li><b>(f) Dotação Atualizada</b> — inicial <b>+</b> créditos adicionais abertos/reabertos <b>+</b> atualizações monetárias pós-LOA <b>–</b> anulações e cancelamentos.</li>'+
      '<li><b>(g) Empenhadas</b> — <b>inclusive</b> as em liquidação, liquidadas ou pagas.</li>'+
      '<li><b>(h) Liquidadas</b> — <b>não inclui</b> a liquidação de RP não processados.</li>'+
      '<li><b>(i) Pagas</b> — <b>não inclui</b> o pagamento de RP, processados ou não.</li>'+
      '<li><b>(j) Saldo da Dotação = (f) – (g)</b> — economia orçamentária.</li></ul></div>'+
      '<div class="box trap"><span class="bl">O que a banca troca</span>'+
      '<p>Saldo da <b>receita</b> = realizada – previsão atualizada. Saldo da <b>dotação</b> = dotação atualizada – <b>empenhadas</b> (não liquidadas, não pagas).</p></div>')
  ],
  V2:[
    sl("Composição, restos a pagar e elaboração",
      '<div class="box"><span class="bl">Três quadros</span>'+
      '<ul><li><b>a)</b> Quadro Principal;</li><li><b>b)</b> Execução dos <b>Restos a Pagar NÃO Processados</b>;</li>'+
      '<li><b>c)</b> Execução dos <b>Restos a Pagar Processados</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">Restos a pagar (art. 36)</span>'+
      '<p>Despesas <b>empenhadas e não pagas até 31 de dezembro</b>, distinguindo-se <b>processadas</b> (já liquidadas) das <b>não processadas</b> (empenhadas sem liquidação).</p>'+
      '<p class="mn"><em>Empenho → Liquidação → Pagamento</em></p>'+
      '<p><b>Empenho:</b> 1º estágio, formalizado pela <b>Nota de Empenho</b> (nome do credor e valor). <b>Liquidação:</b> verifica-se a entrega do bem ou a prestação do serviço. <b>Pagamento:</b> entrega de numerário ao credor.</p></div>'+
      '<div class="box"><span class="bl">Migração entre os quadros</span>'+
      '<p>Os RP inscritos como <b>não processados que tenham sido liquidados em exercício anterior</b> ao de referência vão para o <b>quadro dos processados</b>. Ao fim do exercício, o ente <b>transfere os saldos de RPNP liquidados para RP processados</b> — por isso o quadro dos processados <b>não tem coluna “Liquidados”</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Elaboração pelo PCASP</span>'+
      '<p><b>Classe 5, grupo 2</b> (Previsão da Receita e Fixação da Despesa) e <b>Classe 6, grupo 2</b> (Realização da Receita e Execução da Despesa). Classificação <b>por natureza</b>; para a despesa, a <b>funcional</b> entra <b>complementarmente</b>.</p></div>'+
      '<div class="box trap"><span class="bl">LOA × BO</span>'+
      '<p>Na <b>LOA</b>: totais, <b>vedadas deduções</b>. No <b>BO</b>: receitas pelos <b>valores líquidos</b> das deduções (restituições, descontos, retificações, <b>Fundeb</b>, repartição tributária).</p></div>')
  ],
  V3:[
    sl("Equilíbrio, saldos de exercícios anteriores e notas explicativas",
      '<div class="box"><span class="bl">Por que o BO desequilibra</span>'+
      '<p>No início há equilíbrio entre receita prevista e despesa fixada. A execução desequilibra quando existe:</p>'+
      '<ul><li><b>Superávit financeiro de exercícios anteriores</b> apurado no BP; ou</li>'+
      '<li><b>Reabertura de créditos adicionais</b> (especiais e extraordinários).</li></ul>'+
      '<p>O <b>superávit financeiro não é receita do exercício</b> — já o foi antes —, mas é <b>disponibilidade</b>; as despesas pagas à sua conta <b>são</b> do exercício. A reabertura <b>aumenta a despesa fixada sem nova arrecadação</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Saldos de Exercícios Anteriores</span>'+
      '<p>Campo que detalha <b>Recursos de Exercícios Anteriores</b>, <b>Superávit Financeiro</b> e <b>Reabertura de Créditos Adicionais</b>.</p>'+
      '<p class="mn"><em>TOTAL (Previsão Atualizada) + Saldos de Exercícios Anteriores = TOTAL (Dotação Atualizada)</em></p>'+
      '<p>É assim que se confere o equilíbrio <b>sem influenciar o resultado orçamentário</b>.</p></div>'+
      '<div class="box"><span class="bl">Notas explicativas do BO — o rol</span>'+
      '<ol><li>Regime orçamentário e critério de classificação do orçamento aprovado.</li>'+
      '<li>Período a que se refere o orçamento.</li><li>Entidades abrangidas.</li>'+
      '<li>Receitas e despesas <b>intraorçamentárias</b>, quando relevante.</li>'+
      '<li>Despesas executadas <b>por tipos de créditos</b> (inicial, suplementar, especial, extraordinário).</li>'+
      '<li>Utilização do <b>superávit financeiro</b> e da <b>reabertura</b> de créditos e suas influências no resultado.</li>'+
      '<li>Atualizações monetárias <b>antes e após</b> a LOA que compõem a Previsão Inicial.</li>'+
      '<li>Procedimento quanto aos <b>RPNP liquidados</b>.</li>'+
      '<li><b>Recursos de exercícios anteriores</b>, destacando os vinculados ao <b>RPPS</b>.</li>'+
      '<li><b>Conciliação</b> com os fluxos de caixa líquidos da <b>DFC</b>.</li></ol></div>'+
      '<div class="box trap"><span class="bl">Déficit em BO não consolidado</span>'+
      '<p><b>Não é irregularidade</b> — muitos órgãos não arrecadam mas executam despesa. Basta <b>nota explicativa</b> com o montante da <b>movimentação financeira</b> (transferências recebidas e concedidas).</p></div>')
  ],
  V4:[
    sl("Apuração do resultado orçamentário",
      '<div class="box"><span class="bl">A regra de ouro</span>'+
      '<p class="mn"><em>RO = receitas <b>ARRECADADAS</b> – despesas <b>EMPENHADAS</b></em></p>'+
      '<p>Art. 35 da Lei 4.320/64: pertencem ao exercício as receitas nele <b>arrecadadas</b> e as despesas nele <b>legalmente empenhadas</b>.</p>'+
      '<p><b>Superávit</b>: arrecadadas &gt; empenhadas · <b>Equilíbrio</b>: iguais · <b>Déficit</b>: arrecadadas &lt; empenhadas.</p></div>'+
      '<div class="box trap"><span class="bl">O que NÃO afeta o resultado orçamentário</span>'+
      '<ul><li><b>Aprovação da LOA</b> — não há arrecadação nem empenho.</li>'+
      '<li><b>Inscrição de restos a pagar</b> — receita <b>extra</b>orçamentária; afeta o resultado <b>financeiro</b>.</li>'+
      '<li><b>Doação de bem móvel ou imóvel</b> — é <b>VPA</b>; afeta BP e DVP.</li>'+
      '<li><b>Depreciação</b> — é <b>VPD</b>; afeta BP e DVP.</li></ul></div>'+
      '<div class="box tip"><span class="bl">O que AFETA</span>'+
      '<ul><li><b>Doação em dinheiro</b> — há arrecadação de receita.</li>'+
      '<li><b>Contratação de operação de crédito</b> — receita orçamentária.</li>'+
      '<li><b>Venda posterior</b> do bem recebido em doação — receita orçamentária <b>de capital</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">Restos a pagar — resumo</span>'+
      '<p><b>Inscrição</b> = receita extraorçamentária. <b>Pagamento</b> = despesa extraorçamentária. Não afetam o <b>BO</b>; afetam o <b>Balanço Financeiro</b>.</p></div>'+
      '<div class="box"><span class="bl">NBC TSP 13, item 34</span>'+
      '<p>As entidades <b>podem adotar regimes distintos</b> para demonstrações e orçamento — por exemplo, <b>competência</b> nas DC e <b>caixa</b> no orçamento.</p></div>')
  ]
};

var EX = {
S1:{t:"order", instr:"Ordene as colunas da RECEITA no Balanço Orçamentário",
  items:["Previsão Inicial","Previsão Atualizada","Receitas Realizadas","Saldo"],
  why:"Saldo = realizadas menos previsão atualizada."},

S2:{t:"multi", instr:"Marque o que altera a coluna Previsão Atualizada da receita",
  options:["Registro de excesso de arrecadação","Contratação de operações de crédito",
           "Criação de naturezas de receita não previstas na LOA","Remanejamento entre naturezas de receita",
           "Atualizações monetárias autorizadas por lei após a publicação da LOA",
           "Abertura de crédito suplementar de despesa","Inscrição de restos a pagar"],
  answers:[0,1,2,3,4],
  why:"As duas últimas são do lado da despesa ou extraorçamentárias."},

S3:{t:"gap", instr:"Complete a fórmula do saldo da receita",
  before:"Saldo = Receitas Realizadas menos ",
  after:".",
  options:["Previsão Atualizada","Previsão Inicial","Dotação Atualizada"], answer:0,
  why:"Representa o excesso ou a insuficiência de arrecadação."},

S4:{t:"order", instr:"Ordene as colunas da DESPESA no Balanço Orçamentário",
  items:["Dotação Inicial","Dotação Atualizada","Despesas Empenhadas","Despesas Liquidadas","Despesas Pagas","Saldo da Dotação"],
  why:"Saldo da Dotação = Dotação Atualizada menos Empenhadas."},

S5:{t:"sort", instr:"O que cada coluna inclui ou exclui?",
  buckets:["Despesas Empenhadas","Despesas Liquidadas","Despesas Pagas"],
  items:[["Inclui as despesas em liquidação, liquidadas e pagas",0],
         ["Não inclui a liquidação de restos a pagar não processados",1],
         ["Não inclui o pagamento de restos a pagar, processados ou não",2]],
  why:"Restos a pagar têm quadros próprios."},

S6:{t:"gap", instr:"Complete a fórmula do saldo da dotação",
  before:"Saldo da Dotação = Dotação Atualizada menos Despesas ",
  after:".",
  options:["Empenhadas","Liquidadas","Pagas"], answer:0,
  why:"Representa a economia orçamentária em relação ao previsto."},

S7:{t:"multi", instr:"Marque os quadros que compõem o Balanço Orçamentário",
  options:["Quadro Principal","Quadro da Execução dos Restos a Pagar Não Processados",
           "Quadro da Execução dos Restos a Pagar Processados",
           "Quadro das Receitas Intraorçamentárias","Quadro da Dívida Consolidada"],
  answers:[0,1,2],
  why:"São exatamente três quadros."},

S8:{t:"mc", instr:"Restos a pagar NÃO processados são as despesas:",
  options:["Empenhadas e ainda não liquidadas","Liquidadas e ainda não pagas",
           "Pagas fora do exercício","Fixadas e ainda não empenhadas"],
  answer:0,
  why:"Falta a comprovação da entrega do bem ou serviço."},

S9:{t:"order", instr:"Ordene os estágios da execução da despesa orçamentária",
  items:["Empenho","Liquidação","Pagamento"],
  why:"O empenho é o 1º estágio, formalizado pela Nota de Empenho."},

S10:{t:"mc", instr:"Quais classes e grupos do PCASP elaboram o Balanço Orçamentário?",
  options:["Classe 5 grupo 2 e Classe 6 grupo 2","Classe 5 grupo 1 e Classe 6 grupo 1",
           "Classe 7 e Classe 8","Classe 1 e Classe 2"],
  answer:0,
  why:"Previsão da Receita e Fixação da Despesa · Realização da Receita e Execução da Despesa."},

S11:{t:"match", instr:"Ligue cada documento ao tratamento das deduções",
  pairs:[["LOA","Receitas e despesas pelos seus totais, vedadas quaisquer deduções"],
         ["Balanço Orçamentário","Receitas pelos valores líquidos das respectivas deduções"]],
  why:"Diferença cobrada literalmente."},

S12:{t:"sort", instr:"Em qual quadro de restos a pagar entra cada situação?",
  buckets:["RP Não Processados","RP Processados"],
  items:[["Inscritos como não liquidados até o exercício anterior",0],
         ["Inscritos como processados até o exercício anterior",1],
         ["Inscritos como não processados e liquidados em exercício anterior",1]],
  why:"Por isso o quadro dos processados dispensa a coluna Liquidados."},

S13:{t:"multi", instr:"O que causa desequilíbrio entre previsão atualizada da receita e dotação atualizada?",
  options:["Superávit financeiro de exercícios anteriores apurado no Balanço Patrimonial",
           "Reabertura de créditos especiais e extraordinários",
           "Excesso de arrecadação registrado no exercício",
           "Inscrição de restos a pagar processados"],
  answers:[0,1],
  why:"Ambos entram como Saldos de Exercícios Anteriores."},

S14:{t:"gap", instr:"Complete a natureza do superávit financeiro",
  before:"O superávit financeiro não é receita do exercício de referência, mas constitui ",
  after:" para utilização no exercício de referência.",
  options:["disponibilidade","receita de capital","despesa fixada"], answer:0,
  why:"Já foi receita em exercício anterior."},

S15:{t:"wordbank", instr:"Monte a verificação do equilíbrio do Balanço Orçamentário",
  target:["TOTAL","da","Previsão","Atualizada","+","Saldos","de","Exercícios","Anteriores","=","TOTAL","da","Dotação","Atualizada"],
  extra:["Receitas Realizadas","Despesas Empenhadas","−"],
  why:"A conferência é feita sem influenciar o resultado orçamentário."},

S16:{t:"multi", instr:"Marque o que deve constar das notas explicativas do Balanço Orçamentário",
  options:["O regime orçamentário e o critério de classificação adotados",
           "O período a que se refere o orçamento e as entidades abrangidas",
           "O detalhamento das despesas executadas por tipos de créditos",
           "A utilização do superávit financeiro e da reabertura de créditos",
           "A conciliação com os fluxos de caixa líquidos da DFC",
           "A relação nominal dos servidores do órgão"],
  answers:[0,1,2,3,4],
  why:"A última não integra o rol."},

S17:{t:"gap", instr:"Complete a nota sobre atualizações monetárias",
  before:"A nota informa as atualizações monetárias autorizadas por lei, efetuadas ",
  after:" a data da publicação da LOA, que compõem a coluna Previsão Inicial.",
  options:["antes e após","somente antes de","somente após"], answer:0,
  why:"Pegadinha clássica: a Previsão Atualizada é que reflete as posteriores à LOA."},

S18:{t:"mc", instr:"O déficit apresentado em Balanço Orçamentário não consolidado:",
  options:["Não representa irregularidade, devendo ser evidenciado por nota explicativa",
           "Configura infração à LRF","Exige a abertura de crédito extraordinário",
           "Impede a consolidação nacional das contas"],
  answer:0,
  why:"Muitos órgãos não são agentes arrecadadores."},

S19:{t:"wordbank", instr:"Monte a fórmula do resultado orçamentário",
  target:["Receitas","ARRECADADAS","−","Despesas","EMPENHADAS"],
  extra:["LIQUIDADAS","PAGAS","PREVISTAS"],
  why:"Art. 35 da Lei 4.320/64."},

S20:{t:"match", instr:"Ligue cada situação ao resultado orçamentário",
  pairs:[["Arrecadadas maiores que empenhadas","Superávit orçamentário"],
         ["Arrecadadas iguais às empenhadas","Equilíbrio orçamentário"],
         ["Arrecadadas menores que empenhadas","Déficit orçamentário"]],
  why:"Sempre arrecadadas contra empenhadas."},

S21:{t:"sort", instr:"Afeta ou não afeta o resultado orçamentário?",
  buckets:["Afeta","Não afeta"],
  items:[["Doação recebida em dinheiro",0],["Contratação de operação de crédito",0],
         ["Venda de bem recebido anteriormente em doação",0],
         ["Aprovação da lei orçamentária anual",1],["Inscrição de restos a pagar",1],
         ["Doação recebida de um veículo",1],["Registro da depreciação de um veículo",1]],
  why:"Procure sempre arrecadação de receita ou empenho de despesa."},

S22:{t:"mc", instr:"Lançados impostos de R$ 80.000, com metade arrecadada, e empenhadas despesas de pessoal de R$ 60.000, metade paga e metade inscrita em restos a pagar. Qual o resultado orçamentário?",
  options:["Deficitário em R$ 20.000","Deficitário em R$ 10.000",
           "Superavitário em R$ 20.000","Superavitário em R$ 50.000"],
  answer:0,
  why:"40.000 arrecadados − 60.000 empenhados = −20.000. O resto do enunciado é ruído."},

S23:{t:"match", instr:"Ligue cada evento de restos a pagar à sua natureza",
  pairs:[["Inscrição de restos a pagar","Receita extraorçamentária"],
         ["Pagamento de restos a pagar","Despesa extraorçamentária"]],
  why:"Nenhum afeta o Balanço Orçamentário; ambos afetam o Balanço Financeiro."},

S24:{t:"gap", instr:"Complete o item 34 da NBC TSP 13",
  before:"As entidades podem adotar ",
  after:" para a elaboração das suas demonstrações contábeis e para os seus orçamentos aprovados.",
  options:["regimes distintos","obrigatoriamente o mesmo regime","apenas o regime de caixa"], answer:0,
  why:"Exemplo da norma: competência nas DC e caixa no orçamento."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Pública 08","https://www.tecconcursos.com.br/s/Q2py9I","Q2py9I"],
  ["Caderno FCC — Contabilidade Pública 08","https://www.tecconcursos.com.br/s/Q2py9X","Q2py9X"],
  ["Caderno FGV — Contabilidade Pública 08","https://www.tecconcursos.com.br/s/Q2py9d","Q2py9d"],
  ["Caderno VUNESP — Contabilidade Pública 08","https://www.tecconcursos.com.br/s/Q2py9o","Q2py9o"]
];
var TECNOTA = "O Balanço Orçamentário cai de dois jeitos: decoreba de colunas e cálculo de resultado. Nas questões de cálculo, treine a triagem — leia o enunciado procurando só “arrecadada” e “empenhada” e risque o resto. Nas de colunas, atenção ao que cada uma inclui e exclui.";

var UNITS = [
  {n:1, title:"O BO e suas colunas", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Art. 102, colunas da receita e da despesa", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · colunas da receita",         xp:25, data:["S1","S2","T0","T1","T2","T3","T4"]},
    {id:"K3", type:"drill",  title:"Praticar · previsão e realização",      xp:25, data:["S3","S4","T5","T6","T7","T8"]},
    {id:"K4", type:"drill",  title:"Praticar · colunas da despesa",         xp:25, data:["S5","S6","T9","T10","T11","T12"]},
    {id:"K5", type:"flash",  title:"Flashcards · estrutura do BO",          xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12]}
  ]},
  {n:2, title:"Composição, restos a pagar e elaboração", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Os três quadros, os estágios e o PCASP", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · quadros e restos a pagar",   xp:25, data:["S7","S8","T13","T14","T15","T16","T17"]},
    {id:"K8", type:"drill",  title:"Praticar · estágios e PCASP",           xp:25, data:["S9","S10","T18","T19","T20","T21"]},
    {id:"K9", type:"drill",  title:"Praticar · deduções e migração",        xp:25, data:["S11","S12","T22","T23","T24","T25","T26","T27"]},
    {id:"K10",type:"flash",  title:"Flashcards · quadros e execução",       xp:15, data:[13,14,15,16,17,18,19,20,21,22,23,24,25,26]}
  ]},
  {n:3, title:"Equilíbrio e notas explicativas", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Saldos de exercícios anteriores e o rol de notas", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · o desequilíbrio do BO",      xp:25, data:["S13","S14","T28","T29","T30","T31"]},
    {id:"K13",type:"drill",  title:"Praticar · conferência do equilíbrio",  xp:25, data:["S15","S18","T32","T33","T34"]},
    {id:"K14",type:"drill",  title:"Praticar · notas explicativas",         xp:25, data:["S16","S17","T35","T36","T37","T38","T39","T40"]},
    {id:"K15",type:"flash",  title:"Flashcards · equilíbrio e notas",       xp:15, data:[27,28,29,30,31,32,33,34,35,36,37,38]}
  ]},
  {n:4, title:"Resultado orçamentário", cvar:"u4", lessons:[
    {id:"K16",type:"teoria", title:"Arrecadadas × empenhadas e as pegadinhas", xp:10, data:"V4"},
    {id:"K17",type:"drill",  title:"Praticar · a fórmula do resultado",     xp:25, data:["S19","S20","T41","T42","T43","T44"]},
    {id:"K18",type:"drill",  title:"Praticar · o que afeta e o que não afeta", xp:25, data:["S21","S22","T45","T46","T47","T48","T49","T50"]},
    {id:"K19",type:"drill",  title:"Praticar · restos a pagar e regimes",   xp:25, data:["S23","S24","T51","T52","T53","T54","T55","T56","T57"]},
    {id:"K20",type:"flash",  title:"Flashcards · resultado orçamentário",   xp:15, data:[39,40,41,42,43,44,45,46,47,48,49,50,51]}
  ]},
  {n:5, title:"Fixação", cvar:"u5", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",               xp:60, data:null},
    {id:"K21", type:"missao", title:"Missão TEC Concursos",                 xp:15, data:null},
    {id:"K22", type:"prova",  title:"Simulado cronometrado",                xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo — é a literalidade do art. 102 da Lei nº 4.320/64, transcrito no Resumo: o Balanço Orçamentário <b>demonstrará as receitas e despesas previstas em confronto com as realizadas</b>.</p><p>Guarde o par de palavras: <b>previstas x realizadas</b>. É o eixo de todo o demonstrativo, que nas receitas vai de Previsão Inicial a Receitas Realizadas e nas despesas vai de Dotação Inicial a Despesas Pagas.</p><p class='fb-fonte'>Resumo 08 · <i>Balanço Orçamentário — art. 102 da Lei nº 4.320/64</i></p>",
1:"<p>Errado por um número. O dispositivo que o Resumo transcreve é o <b>art. 102</b> da Lei nº 4.320/64, e não o art. 101.</p><p>Decore o bloco: <b>art. 102 = Balanço Orçamentário</b>. É troca de artigo que a banca adora fazer em assertiva que, no resto, está impecável.</p><p class='fb-fonte'>Resumo 08 · <i>Balanço Orçamentário — art. 102 da Lei nº 4.320/64</i></p>",
2:"<p>Certo. Observação 2 do quadro principal: a coluna <b>Previsão Inicial</b> traz os valores das receitas conforme constam da <b>LOA</b>, e esses valores <b>permanecerão inalterados durante todo o exercício</b>, pois refletem a posição inicial do orçamento.</p><p>Mesma lógica vale para a <b>Dotação Inicial</b>, do lado da despesa. Quem se mexe durante o exercício é a coluna <i>atualizada</i>, nunca a <i>inicial</i>.</p><p class='fb-fonte'>Resumo 08 · <i>Quadro principal — OBSERVAÇÕES sobre Previsão Inicial</i></p>",
3:"<p>Certo. O <b>registro de excesso de arrecadação</b> é o primeiro item da lista de eventos que reestimam a receita e, por isso, alteram a coluna <b>Previsão Atualizada</b>.</p><p>A lista completa do Resumo tem cinco itens: excesso de arrecadação; contratação de operações de crédito; criação de novas naturezas de receita não previstas na LOA; remanejamento entre naturezas de receita; e atualizações monetárias autorizadas por lei efetuadas após a publicação da LOA.</p><p class='fb-fonte'>Resumo 08 · <i>Quadro principal — coluna Previsão Atualizada</i></p>",
4:"<p>Errado. A <b>contratação de operações de crédito</b> está expressamente na lista de eventos que reestimam a receita e, portanto, <b>repercute sim</b> na coluna Previsão Atualizada.</p><p>Os cinco eventos: excesso de arrecadação, operações de crédito, criação de novas naturezas de receita não previstas na LOA, remanejamento entre naturezas de receita e atualizações monetárias posteriores à LOA.</p><p class='fb-fonte'>Resumo 08 · <i>Quadro principal — coluna Previsão Atualizada</i></p>",
5:"<p>Certo, e é a frase final da observação: se não ocorrerem eventos que ocasionem a reestimativa da receita, a coluna <b>Previsão Atualizada apresentará os mesmos valores da coluna Previsão Inicial</b>.</p><p>Ou seja, as duas colunas só se descolam quando entra em cena um dos cinco eventos de reestimativa. Sem reestimativa, elas andam coladas.</p><p class='fb-fonte'>Resumo 08 · <i>Quadro principal — coluna Previsão Atualizada</i></p>",
6:"<p>Certo. Observação 4: a coluna <b>Receitas Realizadas</b> corresponde às receitas <b>arrecadadas</b> diretamente pelo órgão ou por meio de outras instituições, como, por exemplo, a <b>rede bancária</b>.</p><p>Realizada, aqui, é sinônimo de arrecadada — guarde isso, porque é a receita arrecadada que entra na apuração do resultado orçamentário.</p><p class='fb-fonte'>Resumo 08 · <i>Quadro principal — coluna Receitas Realizadas</i></p>",
7:"<p>Certo. No lado da receita, o saldo é <b>(d) = (c) – (b)</b>, isto é, receitas realizadas menos previsão atualizada, e corresponde ao <b>excesso ou insuficiência de arrecadação</b>.</p><p>Não confunda com o outro lado do quadro: no lado da despesa, o saldo é <b>Saldo da Dotação (j) = (f) – (g)</b>, dotação atualizada menos despesas empenhadas, que é economia orçamentária.</p><p class='fb-fonte'>Resumo 08 · <i>Composição do Balanço Orçamentário — o que ele demonstrará</i></p>",
8:"<p>Certo — é a definição da coluna <b>Dotação Atualizada</b> no Resumo: dotação inicial somada aos <b>créditos adicionais abertos ou reabertos</b> durante o exercício de referência e às <b>atualizações monetárias efetuadas após a publicação da LOA</b>, deduzidos das respectivas anulações e cancelamentos.</p><p>Repare no paralelo: a Previsão Atualizada é a receita reestimada; a Dotação Atualizada é a despesa fixada acrescida dos créditos adicionais.</p><p class='fb-fonte'>Resumo 08 · <i>Quadro principal — coluna Dotação Atualizada</i></p>",
9:"<p>Errado — inverteu o sentido. Observação 3: na coluna <b>Despesas Empenhadas</b> temos as despesas empenhadas no exercício, <b>inclusive</b> das despesas em liquidação, liquidadas ou pagas.</p><p>Faz sentido pela cadeia dos estágios: toda despesa liquidada ou paga passou antes pelo empenho. O empenho é o estágio mais abrangente, não o mais restrito.</p><p class='fb-fonte'>Resumo 08 · <i>Quadro principal — coluna Despesas Empenhadas</i></p>",
10:"<p>Certo. Observação 4: a coluna <b>Despesas Liquidadas</b> traz as despesas liquidadas no exercício de referência, <b>inclusive das pagas</b>, mas <b>não inclui</b> os valores referentes à liquidação de <b>restos a pagar não processados</b>.</p><p>Motivo: restos a pagar são execução de exercício anterior e têm quadro próprio. O quadro principal é do exercício de referência.</p><p class='fb-fonte'>Resumo 08 · <i>Quadro principal — coluna Despesas Liquidadas</i></p>",
11:"<p>Errado. Observação 5: a coluna <b>Despesas Pagas</b> traz as despesas pagas no exercício de referência e <b>não inclui</b> os valores referentes ao pagamento de restos a pagar, <b>processados ou não processados</b>.</p><p>O Resumo é categórico nos dois: nem liquidação de RP não processados na coluna Liquidadas, nem pagamento de RP de qualquer espécie na coluna Pagas. Essas execuções aparecem nos quadros próprios de restos a pagar.</p><p class='fb-fonte'>Resumo 08 · <i>Quadro principal — coluna Despesas Pagas</i></p>",
12:"<p>Certo, e é a observação 7 quase ao pé da letra: para apurar e analisar os saldos a executar de cada grupo de natureza da despesa é necessário <b>subtrair as despesas empenhadas (g) da dotação atualizada (f)</b>.</p><p>Fixe a fórmula da coluna: <b>Saldo da Dotação (j) = (f) – (g)</b>. O resultado é a <b>economia orçamentária</b> em relação ao que tinha sido previsto.</p><p class='fb-fonte'>Resumo 08 · <i>Quadro principal — coluna Saldo da Dotação</i></p>",
13:"<p>Certo. A composição do Balanço Orçamentário no Resumo tem exatamente três peças: <b>a)</b> Quadro Principal; <b>b)</b> Quadro da Execução dos Restos a Pagar <b>Não Processados</b>; e <b>c)</b> Quadro da Execução dos Restos a Pagar <b>Processados</b>.</p><p>Contraste que a banca explora: o Balanço Orçamentário tem <b>3 quadros</b>; o Balanço Financeiro tem <b>um único quadro</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Composição do Balanço Orçamentário</i></p>",
14:"<p>Certo — é o conceito do art. 36 da Lei nº 4.320/64 citado no Resumo: consideram-se restos a pagar as despesas <b>empenhadas (comprometidas) e não pagas até o dia 31 de dezembro</b>, distinguindo-se as processadas das não processadas.</p><p>As duas palavras que a banca troca: <b>empenhadas</b> (e não liquidadas) e <b>não pagas</b> (e não não liquidadas). O corte é sempre 31 de dezembro.</p><p class='fb-fonte'>Resumo 08 · <i>O que são restos a pagar</i></p>",
15:"<p>Errado — está descrevendo os restos a pagar <b>processados</b>. Restos a pagar <b>não processados</b> são as despesas empenhadas (compromissadas) <b>porém sem a efetivação da fase de liquidação</b>, ou seja, sem a comprovação da entrega do bem ou serviço.</p><p>São compromissos assumidos e formalizados com fornecedores que ainda não tiveram a documentação comprobatória de entrega do bem, do serviço ou de conclusão do objeto do contrato.</p><p class='fb-fonte'>Resumo 08 · <i>O que são restos a pagar não processados</i></p>",
16:"<p>Certo. O Resumo diz que o Balanço Orçamentário demonstrará as receitas detalhadas por <b>categoria econômica e origem</b>, especificando previsão inicial, previsão atualizada, receita realizada e o saldo.</p><p>Memorize o par assimétrico: receita por <b>categoria econômica e origem</b>; despesa por <b>categoria econômica e grupo de natureza da despesa</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Composição do Balanço Orçamentário — o que ele demonstrará</i></p>",
17:"<p>Certo. Do lado da despesa, o Balanço Orçamentário demonstra por <b>categoria econômica e grupo de natureza da despesa</b>, discriminando dotação inicial, dotação atualizada, despesas empenhadas, liquidadas, pagas e o saldo da dotação.</p><p>Contraste do material com o Balanço Financeiro: lá a discriminação das receitas e despesas orçamentárias é por <b>fonte ou destinação de recurso</b>; aqui, por <b>categoria econômica</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Composição do Balanço Orçamentário — o que ele demonstrará</i></p>",
18:"<p>Certo, e é exatamente o recorte do Resumo: o Balanço Orçamentário é elaborado com a <b>Classe 5 (Orçamento Aprovado), Grupo 2 (Previsão da Receita e Fixação da Despesa)</b> e a <b>Classe 6 (Execução do Orçamento), Grupo 2 (Realização da Receita e Execução da Despesa)</b>.</p><p>O quadro do material ajuda a fixar: <b>5.2 – Orçamento Aprovado</b> e <b>6.2 – Execução do Orçamento</b>. Ao lado deles ficam 5.1/6.1 (planejamento) e 5.3/6.3 (restos a pagar).</p><p class='fb-fonte'>Resumo 08 · <i>Elaboração do Balanço Orçamentário</i></p>",
19:"<p>Errado. Para elaborar o Balanço Orçamentário usam-se apenas as <b>classes 5 e 6, grupo 2</b>, do PCASP — classe 5 (CAPO) e classe 6 (CEPO).</p><p>A classe 7 é de controle devedor e não entra na elaboração deste demonstrativo. Cuidado para não importar aqui a regra do Balanço Financeiro, que a partir da 10ª edição do MCASP passou a usar as classes 1 a 8.</p><p class='fb-fonte'>Resumo 08 · <i>Elaboração do Balanço Orçamentário</i></p>",
20:"<p>Certo. O quadro principal apresenta receitas e despesas conforme a <b>classificação por natureza</b>; no caso da <b>despesa</b>, a <b>classificação funcional</b> também será utilizada <b>complementarmente</b> à classificação por natureza.</p><p>Repare no detalhe que a banca inverte: a funcional é complementar e só aparece do lado da <b>despesa</b>, nunca da receita.</p><p class='fb-fonte'>Resumo 08 · <i>Quadro principal do Balanço Orçamentário</i></p>",
21:"<p>Errado — trocou o documento. Essa regra é da <b>LOA</b>. No <b>Balanço Orçamentário</b>, as receitas deverão ser informadas pelos <b>valores líquidos</b> das respectivas deduções.</p><p>É o quadro <b>NÃO CONFUNDA</b> do Resumo: na LOA, todas as receitas e despesas constarão pelos seus totais, vedadas quaisquer deduções; no Balanço Orçamentário, valores líquidos.</p><p class='fb-fonte'>Resumo 08 · <i>NÃO CONFUNDA — LOA x Balanço Orçamentário</i></p>",
22:"<p>Certo. O quadro <b>ATENÇÃO</b> do Resumo lista as deduções que tornam a receita líquida no Balanço Orçamentário: restituições, descontos, retificações, <b>deduções para o Fundeb</b> e <b>repartições de receita tributária entre os entes da Federação</b>.</p><p>Vale a contraprova: na LOA essas mesmas deduções são vedadas, e as receitas constam pelos totais.</p><p class='fb-fonte'>Resumo 08 · <i>ATENÇÃO — receitas pelos valores líquidos</i></p>",
23:"<p>Certo. No <b>Quadro da Execução de Restos a Pagar Não Processados</b> deverão ser informados os restos a pagar não processados (não liquidados) <b>inscritos até o exercício anterior</b> e suas respectivas <b>fases de execução</b>.</p><p>O exemplo do material: empenho de <b>R$ 90.000</b> em dezembro de 2021 para uma empresa de limpeza que ainda não prestara os serviços. No quadro de 2022 aparecem esses RP não processados inscritos até 2021 e suas fases de execução (empenho, liquidação, pagamento).</p><p class='fb-fonte'>Resumo 08 · <i>Quadro da execução de restos a pagar não processados</i></p>",
24:"<p>Certo — é a regra do MCASP trazida pelo Resumo: os restos a pagar inscritos na condição de <b>não processados</b> que tenham sido <b>liquidados em exercício anterior ao de referência</b> deverão compor o <b>Quadro da Execução de Restos a Pagar Processados</b>.</p><p>No exemplo: os <b>R$ 90.000</b> empenhados em 2021 são liquidados em março de 2022, de modo que ao final de 2022 há RP não processados liquidados; só ao final de <b>2023</b> o valor migra para o quadro dos processados.</p><p class='fb-fonte'>Resumo 08 · <i>Quadro da execução de restos a pagar processados</i></p>",
25:"<p>Errado. O Resumo é expresso: neste quadro <b>não se faz necessária a coluna Liquidados</b>, uma vez que todos os restos a pagar ali evidenciados <b>já passaram pelo estágio da liquidação</b> na execução orçamentária.</p><p>Encadeie com a regra anterior: o ente transfere, ao final do exercício, os saldos de restos a pagar não processados <b>liquidados</b> para restos a pagar <b>processados</b>. Chegando lá, liquidar já não é etapa pendente.</p><p class='fb-fonte'>Resumo 08 · <i>Quadro da execução de restos a pagar processados</i></p>",
26:"<p>Certo — é a descrição do Resumo no esquema dos estágios: o <b>empenho é o 1º estágio da despesa</b> e será formalizado mediante a emissão de um documento denominado <b>Nota de Empenho</b>, do qual deve constar o <b>nome do credor</b> e o <b>valor da despesa</b>.</p><p>Sequência dos estágios, na ordem: <b>empenho → liquidação → pagamento</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Estágios da execução da despesa orçamentária</i></p>",
27:"<p>Errado — descreveu a <b>liquidação</b>. Segundo o Resumo, a liquidação é que ocorre quando a Administração <b>verifica se o material foi entregue ou se o serviço foi realizado</b>.</p><p>O <b>pagamento</b> consiste na <b>entrega de numerário ao credor</b> por meio de cheque nominativo, ordem de pagamento ou crédito em conta. Troca de estágio é a pegadinha mais barata e mais frequente do assunto.</p><p class='fb-fonte'>Resumo 08 · <i>Estágios da execução da despesa orçamentária</i></p>",
28:"<p>Certo — é o quadro <b>ATENÇÃO</b>. No momento inicial da execução há, em geral, equilíbrio entre receita prevista e despesa fixada; iniciada a execução, o Balanço Orçamentário demonstrará <b>desequilíbrio</b> entre a previsão atualizada da receita e a dotação atualizada quando houver <b>superávit financeiro de exercícios anteriores apurado no BP</b> ou <b>reabertura de créditos adicionais (especiais e extraordinários)</b>.</p><p>São só essas duas hipóteses no material. Guarde-as em par.</p><p class='fb-fonte'>Resumo 08 · <i>ATENÇÃO — desequilíbrio do Balanço Orçamentário</i></p>",
29:"<p>Errado. O quadro do Resumo fecha a questão: o superávit financeiro <b>não é receita do exercício de referência</b>, pois já o foi em exercício anterior, <b>mas constitui disponibilidade</b> para utilização no exercício de referência.</p><p>É justamente por isso que ele não entra na receita orçamentária que integra o cálculo do resultado orçamentário — e é daí que nasce o desequilíbrio entre previsão atualizada e dotação atualizada.</p><p class='fb-fonte'>Resumo 08 · <i>Explicando melhor — superávit financeiro</i></p>",
30:"<p>Certo, e é o outro lado da moeda no Resumo: as <b>despesas executadas à conta do superávit financeiro são despesas do exercício de referência</b>, por força legal, visto que <b>não foram empenhadas no exercício anterior</b>.</p><p>Guarde a assimetria que gera o desequilíbrio: a receita já foi de exercício anterior, mas a despesa é do exercício de referência.</p><p class='fb-fonte'>Resumo 08 · <i>Explicando melhor — superávit financeiro</i></p>",
31:"<p>Certo. O Resumo explica que o desequilíbrio também ocorre pela <b>reabertura de créditos adicionais (especiais e extraordinários)</b> porque eles <b>aumentam a despesa fixada sem necessidade de nova arrecadação</b>.</p><p>É a segunda das duas causas de desequilíbrio; a primeira é a utilização do superávit financeiro de exercícios anteriores.</p><p class='fb-fonte'>Resumo 08 · <i>Explicando melhor — reabertura de créditos adicionais</i></p>",
32:"<p>Certo. Tanto o superávit financeiro utilizado quanto a reabertura de créditos adicionais estão detalhados no campo <b>Saldos de Exercícios Anteriores</b> do Balanço Orçamentário, que no exemplo do material se abre em <b>Recursos de Exercícios Anteriores</b>, <b>Superávit Financeiro</b> e <b>Reabertura de Créditos Adicionais</b>.</p><p>É um campo à parte, abaixo da linha TOTAL: fica fora do resultado orçamentário, mas é o que recompõe o equilíbrio do demonstrativo.</p><p class='fb-fonte'>Resumo 08 · <i>Saldos de Exercícios Anteriores</i></p>",
33:"<p>Certo — é o procedimento descrito no Resumo. O equilíbrio entre receita prevista e despesa fixada pode ser verificado, <b>sem influenciar o resultado</b>, somando-se os valores da linha <b>TOTAL</b> e da linha <b>Saldos de Exercícios Anteriores</b> da coluna <b>Previsão Atualizada</b> e confrontando esse montante com o <b>TOTAL da coluna Dotação Atualizada</b>.</p><p>A expressão-chave é <i>sem influenciar o seu resultado</i>: o campo entra na conferência do equilíbrio, não no resultado orçamentário.</p><p class='fb-fonte'>Resumo 08 · <i>Saldos de Exercícios Anteriores — verificação do equilíbrio</i></p>",
34:"<p>Errado — o Resumo afirma o oposto no quadro <b>ATENÇÃO</b>: os Balanços Orçamentários <b>não consolidados poderão apresentar desequilíbrio e déficit orçamentário</b>, pois muitos órgãos não são agentes arrecadadores, mas executam despesas orçamentárias. <b>Esse fato não representa irregularidade.</b></p><p>O que se exige é evidenciação complementar em nota explicativa demonstrando o montante da movimentação financeira (transferências financeiras recebidas e concedidas) relacionada à execução do orçamento do exercício.</p><p class='fb-fonte'>Resumo 08 · <i>ATENÇÃO — Balanços Orçamentários não consolidados</i></p>",
35:"<p>Certo — é o item 1 da lista de notas explicativas do Resumo: o Balanço Orçamentário deverá ser acompanhado de notas que divulguem, ao menos, o <b>regime orçamentário e o critério de classificação adotados no orçamento aprovado</b>.</p><p>A lista segue com o período a que se refere o orçamento e as entidades abrangidas — os três primeiros itens são os de moldura do demonstrativo.</p><p class='fb-fonte'>Resumo 08 · <i>Notas explicativas do Balanço Orçamentário</i></p>",
36:"<p>Certo. É o item 5 da lista: o <b>detalhamento das despesas executadas por tipos de créditos</b> — <b>inicial, suplementar, especial e extraordinário</b>.</p><p>Aparece na lista logo após o detalhamento das receitas e despesas intraorçamentárias, exigido quando relevante.</p><p class='fb-fonte'>Resumo 08 · <i>Notas explicativas do Balanço Orçamentário</i></p>",
37:"<p>Certo — item 6 da lista de notas explicativas: a <b>utilização do superávit financeiro e da reabertura de créditos especiais e extraordinários</b>, bem como <b>suas influências no resultado orçamentário</b>.</p><p>Coerente com o resto do Resumo: são exatamente as duas causas de desequilíbrio do Balanço Orçamentário, e por isso precisam ser explicadas em nota.</p><p class='fb-fonte'>Resumo 08 · <i>Notas explicativas do Balanço Orçamentário</i></p>",
38:"<p>Errado por uma palavra. O item 7 fala nas atualizações monetárias autorizadas por lei efetuadas <b>antes e após</b> a data da publicação da LOA que compõem a coluna <b>Previsão Inicial</b> da receita orçamentária.</p><p>Não confunda com a outra ponta: na coluna <b>Previsão Atualizada</b>, o Resumo menciona as atualizações monetárias efetuadas <b>após</b> a publicação da LOA. O <i>apenas antes</i> da assertiva não existe no material.</p><p class='fb-fonte'>Resumo 08 · <i>Notas explicativas do Balanço Orçamentário</i></p>",
39:"<p>Certo — é o item 10, o último da lista: a <b>conciliação com os valores dos fluxos de caixa líquidos das atividades operacionais, de investimento e de financiamento</b>, apresentados na Demonstração dos Fluxos de Caixa.</p><p>É a nota que amarra o Balanço Orçamentário à DFC.</p><p class='fb-fonte'>Resumo 08 · <i>Notas explicativas do Balanço Orçamentário</i></p>",
40:"<p>Certo. Item 8 da lista: o <b>procedimento adotado em relação aos restos a pagar não processados liquidados</b>, ou seja, se o ente transfere o saldo ao final do exercício para restos a pagar processados ou se mantém o controle dos não processados liquidados separadamente.</p><p>Ligue com o quadro da execução de RP processados: como há duas formas de tratar esse saldo, a escolha do ente precisa ser divulgada.</p><p class='fb-fonte'>Resumo 08 · <i>Notas explicativas do Balanço Orçamentário</i></p>",
41:"<p>Certo — literalidade do art. 35 da Lei nº 4.320/64, transcrito no Resumo: pertencem ao exercício financeiro <b>I - as receitas nele arrecadadas</b> e <b>II - as despesas nele legalmente empenhadas</b>.</p><p>É o quadro <b>ATENÇÃO</b> do material: sempre que a questão falar em Resultado Orçamentário, procure as receitas <b>ARRECADADAS</b> e as despesas <b>EMPENHADAS</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Apuração do resultado orçamentário — art. 35</i></p>",
42:"<p>Errado no estágio da despesa. O resultado orçamentário confronta receitas <b>arrecadadas</b> com despesas <b>EMPENHADAS</b>, e não liquidadas — é o que impõe o art. 35, II, da Lei nº 4.320/64.</p><p>O quadro <b>ATENÇÃO</b> do Resumo existe justamente para essa troca: ARRECADADAS x EMPENHADAS. Liquidação e pagamento aparecem no Balanço Orçamentário como colunas, mas não definem o resultado orçamentário.</p><p class='fb-fonte'>Resumo 08 · <i>Apuração do resultado orçamentário — art. 35</i></p>",
43:"<p>Certo — é o primeiro dos três cenários do esquema do Resumo: há <b>superávit orçamentário</b> quando as receitas <b>ARRECADADAS</b> são superiores às despesas <b>EMPENHADAS</b>.</p><p>Os outros dois: <b>equilíbrio</b>, quando arrecadadas e empenhadas se igualam; e <b>déficit</b>, quando as arrecadadas são inferiores às empenhadas.</p><p class='fb-fonte'>Resumo 08 · <i>Apuração do resultado orçamentário — três situações</i></p>",
44:"<p>Errado. Observação 2 do Resumo após a questão-exemplo: a <b>aprovação da lei orçamentária anual não afeta o resultado orçamentário</b>, pois <b>não há arrecadação de receita nem empenho de despesa</b>.</p><p>Na questão-exemplo do material, a LOA de <b>R$ 100.000</b> é exatamente uma das informações que devem ser ignoradas. As bancas enchem o enunciado de dados desnecessários; concentre-se em receita arrecadada e despesa empenhada.</p><p class='fb-fonte'>Resumo 08 · <i>Apuração do resultado orçamentário — OBSERVAÇÕES</i></p>",
45:"<p>Certo. Observação 3: a <b>inscrição de Restos a Pagar não afeta o resultado orçamentário</b>, pois se trata de <b>receita extraorçamentária</b>. Quem ela afeta é o <b>resultado financeiro</b>.</p><p>Faz sentido: a despesa já entrou no resultado orçamentário no momento do <b>empenho</b>; contá-la de novo na inscrição seria duplicar.</p><p class='fb-fonte'>Resumo 08 · <i>Apuração do resultado orçamentário — OBSERVAÇÕES</i></p>",
46:"<p>Errado. Observação 4: o recebimento de um <b>VEÍCULO</b> (bem móvel) em doação <b>não afeta o resultado orçamentário</b>, pois não é receita orçamentária, mas sim uma <b>Variação Patrimonial Aumentativa (VPA)</b>.</p><p>O reflexo existe, mas em outros demonstrativos: afeta o <b>Balanço Patrimonial</b> e a <b>DVP</b>, não o Balanço Orçamentário. Na questão-exemplo, o veículo de <b>R$ 72.000</b> é dado a ser ignorado.</p><p class='fb-fonte'>Resumo 08 · <i>Apuração do resultado orçamentário — OBSERVAÇÕES</i></p>",
47:"<p>Certo. Observação 6: o recebimento de <b>DINHEIRO</b> em doação <b>afeta o resultado orçamentário</b>, pois nesse caso deve-se considerar que houve <b>arrecadação de receita</b>.</p><p>É o quadro <b>DIFERENÇAS RELEVANTES</b> do Resumo, em duas linhas: doação de <b>bem móvel ou imóvel</b> NÃO afeta o Balanço Orçamentário; doação em <b>dinheiro</b> afeta.</p><p class='fb-fonte'>Resumo 08 · <i>Diferenças relevantes — doação</i></p>",
48:"<p>Certo — é a ressalva da observação 4: se o bem recebido em doação for <b>vendido posteriormente</b>, teremos que reconhecer uma <b>receita orçamentária</b>, e o material a classifica como <b>receita de capital</b>.</p><p>Ou seja: entrada do bem por doação é VPA e fica fora do Balanço Orçamentário; a alienação posterior, sim, gera receita orçamentária e afeta o resultado.</p><p class='fb-fonte'>Resumo 08 · <i>Apuração do resultado orçamentário — OBSERVAÇÕES</i></p>",
49:"<p>Errado. Observação 5: a <b>depreciação</b> de um veículo (bem móvel) <b>não afeta o resultado orçamentário</b>, pois não é despesa orçamentária, mas sim uma <b>Variação Patrimonial Diminutiva (VPD)</b>.</p><p>Ela afeta o <b>Balanço Patrimonial</b> e a <b>DVP</b>, não o Balanço Orçamentário. Na questão-exemplo do Resumo, os <b>R$ 12.000</b> de depreciação são mais um dado a descartar.</p><p class='fb-fonte'>Resumo 08 · <i>Apuração do resultado orçamentário — OBSERVAÇÕES</i></p>",
50:"<p>Certo. Observação 7: a <b>contratação de operação de crédito é receita orçamentária</b> e, portanto, <b>afeta o resultado orçamentário</b>.</p><p>Repare que ela já havia aparecido antes no Resumo, na lista de eventos que reestimam a receita e alteram a coluna <b>Previsão Atualizada</b>. É item que rende dos dois lados do demonstrativo.</p><p class='fb-fonte'>Resumo 08 · <i>Apuração do resultado orçamentário — OBSERVAÇÕES</i></p>",
51:"<p>Certo — é o quadro <b>DIFERENÇAS RELEVANTES</b> do Resumo, linha dos restos a pagar: <b>inscrição = receita extraorçamentária</b>; <b>pagamento = despesa extraorçamentária</b>.</p><p>Memorize o par completo com a frase que vem logo abaixo no quadro: não afeta o Balanço Orçamentário, mas afeta o Balanço Financeiro.</p><p class='fb-fonte'>Resumo 08 · <i>Diferenças relevantes — restos a pagar</i></p>",
52:"<p>Certo — é exatamente a frase do quadro <b>DIFERENÇAS RELEVANTES</b>: a inscrição e o pagamento de restos a pagar <b>não afetam o Balanço Orçamentário, mas afetam o Balanço Financeiro</b>.</p><p>Por serem operações extraorçamentárias, transitam pelo Balanço Financeiro: a inscrição como receita extraorçamentária, o pagamento como despesa extraorçamentária.</p><p class='fb-fonte'>Resumo 08 · <i>Diferenças relevantes — restos a pagar</i></p>",
53:"<p>Certo — é a questão-exemplo do Resumo, com estes mesmos valores. Receita <b>ARRECADADA</b>: lançados R$ 80.000 de impostos, arrecadada metade, logo <b>R$ 40.000</b>. Despesa <b>EMPENHADA</b> de pessoal: <b>R$ 60.000</b>.</p><p>Resultado orçamentário: <b>40.000 – 60.000 = – R$ 20.000</b>, déficit de R$ 20.000 (gabarito A). Note que só se olha para o que foi arrecadado e para o que foi empenhado.</p><p class='fb-fonte'>Resumo 08 · <i>Questão-exemplo — resultado orçamentário</i></p>",
54:"<p>Errado. Na própria questão-exemplo, metade dos R$ 60.000 de pessoal foi paga e metade inscrita em restos a pagar, e ainda assim a despesa considerada foi o <b>total empenhado de R$ 60.000</b>.</p><p>Observação 3 do Resumo: a inscrição de RP <b>não afeta o resultado orçamentário</b>, por ser receita extraorçamentária. O déficit continua sendo de <b>R$ 20.000</b>. Ela afetaria o resultado <b>financeiro</b>.</p><p class='fb-fonte'>Resumo 08 · <i>Questão-exemplo — OBSERVAÇÕES</i></p>",
55:"<p>Certo — é a literalidade do item 34 da <b>NBC TSP 13</b>, transcrito no Resumo: as entidades <b>podem adotar regimes distintos</b> para a elaboração das suas demonstrações contábeis e para os seus orçamentos aprovados.</p><p>O exemplo que o próprio item traz: o governo pode adotar o <b>regime de competência</b> para as demonstrações contábeis e o <b>regime de caixa</b> para o orçamento.</p><p class='fb-fonte'>Resumo 08 · <i>NBC TSP 13 — apresentação de informação orçamentária</i></p>",
56:"<p>Errado — a NBC TSP 13 não veda; é <b>exatamente o exemplo</b> que ela dá no item 34. O governo pode adotar o <b>regime de caixa para seu orçamento</b> e o <b>regime de competência para suas demonstrações contábeis</b>.</p><p>O comentário do Resumo detalha: pela competência, receitas e despesas são registradas no momento do fato gerador; pelo caixa, receitas quando efetivamente recebidas e despesas quando efetivamente pagas. O ente pode ter bases diferentes para prestação de contas e para o orçamento.</p><p class='fb-fonte'>Resumo 08 · <i>NBC TSP 13 — apresentação de informação orçamentária</i></p>",
57:"<p>Certo. É a observação 8 do quadro principal: na estrutura de apresentação do Balanço Orçamentário há informações sobre as despesas em <b>cada estágio de execução</b> — empenho, liquidação e pagamento — que <b>possibilitam análises mais detalhadas</b>.</p><p>São as três colunas do lado da despesa: Despesas Empenhadas (g), Despesas Liquidadas (h) e Despesas Pagas (i).</p><p class='fb-fonte'>Resumo 08 · <i>Quadro principal — OBSERVAÇÕES</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"08", nome:"Balanço Orçamentário", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
