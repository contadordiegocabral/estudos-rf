/* Direito Tributário — Módulo 14: Dívida ativa e certidões negativas (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dtrib14 = (function(){
"use strict";

var CARDS = [
  ["O que é dívida ativa?","A <b>inclusão do nome do sujeito passivo no cadastro de devedores inadimplentes</b>, mediante <b>lavratura de termo no livro da dívida ativa</b> do respectivo ente — hoje de forma <b>eletrônica</b>."],
  ["Qual o objetivo da inscrição em dívida ativa?","<b>Extrair a Certidão de Dívida Ativa (CDA)</b>, <b>TÍTULO EXECUTIVO EXTRAJUDICIAL</b> que viabiliza a propositura da <b>execução fiscal</b>."],
  ["Quando cabe a inscrição em dívida ativa?","Após a <b>constituição DEFINITIVA</b> do crédito e <b>não havendo qualquer medida, judicial ou administrativa, que SUSPENDA a exigibilidade</b>."],
  ["Qual a sequência até a execução fiscal?","<b>Fato gerador</b> → <b>notificação do lançamento</b> → prazo para pagar ou impugnar (regra: 30 dias) → <b>definitividade</b> → <b>INSCRIÇÃO EM DÍVIDA ATIVA</b> → <b>execução fiscal</b>."],
  ["Quem inscreve os créditos federais em dívida ativa?","A <b>Procuradoria da Fazenda Nacional (PFN)</b>."],
  ["A CDA pode ser protestada antes da execução?","<b>SIM</b> — pode ser levada a <b>protesto</b> perante Tabelião de Protesto de Títulos, para <b>ampliar as possibilidades de cobrança</b> e <b>reduzir o custo</b> da via judicial. O devedor acaba inscrito em <b>SPC e SERASA</b>."],
  ["O que é protesto de título?","Ato <b>público e EXTRAJUDICIAL</b>, feito por <b>tabelião</b> (que tem fé pública), que registra em cartório a <b>impontualidade</b> no pagamento de um título."],
  ["O que é dívida ativa TRIBUTÁRIA? (art. 201)","A proveniente de <b>crédito dessa natureza</b>, <b>regularmente inscrita</b> na repartição administrativa competente, <b>depois de esgotado o prazo fixado para pagamento</b> pela lei ou por <b>decisão final proferida em processo regular</b>."],
  ["Qual a PEGADINHA do art. 201?","Dizer que <b>todo crédito da Fazenda inscrito em dívida ativa é dívida ativa TRIBUTÁRIA</b>. <b>ERRADO</b> — só os <b>provenientes de TRIBUTOS</b>. Multa de trânsito inscrita é dívida ativa <b>não tributária</b>."],
  ["A fluência de juros de mora afeta a liquidez? (art. 201, p.ú.)","<b>NÃO</b> — “a fluência de juros de mora <b>não exclui</b>, para os efeitos deste artigo, a <b>liquidez</b> do crédito”."],

  ["O que o termo de inscrição indicará OBRIGATORIAMENTE? (art. 202)","<b>I)</b> o <b>nome do devedor</b> e, sendo caso, o dos <b>corresponsáveis</b>, e, <b>sempre que possível</b>, o <b>domicílio ou residência</b>; <b>II)</b> a <b>quantia devida</b> e a <b>maneira de calcular os juros de mora</b>; <b>III)</b> a <b>origem e natureza do crédito</b>, com menção específica à <b>disposição de lei</b> em que se funda; <b>IV)</b> a <b>data em que foi inscrita</b>; <b>V)</b> sendo caso, o <b>número do processo administrativo</b> de que se originar."],
  ["O que mais o termo exige?","Indicar <b>o livro e a folha da inscrição</b> (art. 202, parágrafo único, quanto à certidão) e ser <b>AUTENTICADO pela autoridade competente</b>."],
  ["Qual requisito do art. 202 é apenas “sempre que possível”?","O <b>DOMICÍLIO ou RESIDÊNCIA</b> do devedor ou corresponsável. Logo, <b>não é essencial</b> à validade da CDA."],
  ["Qual o efeito da omissão ou erro nos requisitos? (art. 203)","São causas de <b>NULIDADE da inscrição e do processo de cobrança</b> dela decorrente."],
  ["Essa nulidade pode ser sanada?","<b>SIM</b> — <b>até a DECISÃO DE PRIMEIRA INSTÂNCIA</b>, mediante <b>substituição da certidão nula</b>, <b>devolvido ao sujeito passivo o prazo para defesa</b>."],
  ["Sobre o que pode versar a nova defesa?","<b>SOMENTE sobre a PARTE MODIFICADA</b> da certidão — não se reabre a discussão inteira."],
  ["Até quando a Fazenda pode substituir a CDA nula?","Até que o juiz <b>julgue em 1ª instância</b> os embargos interpostos."],
  ["Para que o juiz cita o devedor na execução fiscal?","Para <b>pagar</b> o valor devido (tributo + juros + multa de mora + encargos) <b>ou GARANTIR a execução</b> — por <b>depósito em dinheiro, fiança bancária ou indicação de bens à penhora</b>."],
  ["Que presunção tem a dívida regularmente inscrita? (art. 204)","Presunção de <b>CERTEZA e LIQUIDEZ</b>, com <b>efeito de PROVA PRÉ-CONSTITUÍDA</b>."],
  ["Essa presunção é absoluta?","<b>NÃO — é RELATIVA</b> (juris tantum). Pode ser <b>ilidida por PROVA INEQUÍVOCA</b>, <b>a cargo do sujeito passivo ou do terceiro a que aproveite</b>."],
  ["De quem é o ônus da prova na execução fiscal?","Do <b>SUJEITO PASSIVO</b> — a Fazenda já chega com prova pré-constituída. É a inversão que torna a execução fiscal tão eficiente."],

  ["O que é certidão negativa? (art. 205)","O documento que <b>comprova a inexistência de débito</b> — a prova de quitação. A <b>lei poderá exigir</b> que a prova de quitação de determinado tributo, quando exigível, seja feita por certidão negativa."],
  ["O que o requerimento de certidão deve conter?","Todas as informações necessárias à <b>identificação da pessoa</b>, ao <b>domicílio fiscal</b> e ao <b>ramo de negócio ou atividade</b>, e deve <b>indicar o período</b> a que se refere o pedido."],
  ["Em quantos dias se expede a certidão negativa?","Em <b>10 DIAS</b> da data da entrada do requerimento na repartição — <b>dias corridos</b>, não úteis. E será <b>sempre expedida nos termos em que tenha sido requerida</b>."],
  ["O que é a CPEN? (art. 206)","A <b>Certidão Positiva com Efeitos de Negativa</b>: o sujeito passivo <b>tem débito</b>, mas está em <b>situação regular</b>, e a certidão produz <b>os mesmos efeitos da negativa</b>."],
  ["Quais as TRÊS hipóteses de CPEN?","<b>1)</b> créditos <b>NÃO VENCIDOS</b> (vincendos); <b>2)</b> créditos <b>em curso de cobrança executiva em que tenha sido EFETIVADA A PENHORA</b>; <b>3)</b> créditos cuja <b>EXIGIBILIDADE esteja SUSPENSA</b>."],
  ["Quais causas de suspensão geram CPEN?","Todas as do art. 151 — <b>DEMORE a LIMPAR</b>: <b>DE</b>pósito integral · <b>MO</b>ratória · <b>RE</b>clamações e recursos · <b>LIM</b>inar ou tutela antecipada · <b>PAR</b>celamento."],
  ["Notificado para recolher ICMS em 30 dias, pede certidão no 5º dia. Qual certidão?","<b>CPEN</b> — há <b>crédito NÃO VENCIDO</b> (art. 206), ainda dentro do prazo para pagar."],
  ["Devedor aderiu a parcelamento e paga em dia. Qual certidão?","<b>CPEN</b> — o parcelamento <b>suspende a exigibilidade</b> (art. 151, VI)."],
  ["Contribuinte obteve tutela antecipada em ação ordinária. Qual certidão?","<b>CPEN</b> — a tutela antecipada é causa de suspensão (art. 151, V)."],
  ["O que diz a Súmula 446 do STJ?","“<b>Declarado e não pago o débito tributário pelo contribuinte, é LEGÍTIMA A RECUSA</b> de expedição de certidão negativa ou positiva com efeito de negativa.”"],
  ["Por que a Súmula 446 é coerente com a Súmula 436?","Porque a <b>declaração já constitui o crédito</b> (Súmula 436): declarado e não pago, o débito é <b>exigível</b> e não há situação regular a certificar."],
  ["Tributo declarado inconstitucional pelo STF impede a CND?","<b>NÃO</b> — o STJ (REsp 218.694) decidiu que <b>não se pode negar</b> a certidão negativa por débito de <b>exação declarada inconstitucional</b> pelo Supremo."],

  ["Quando se dispensa a prova de quitação? (art. 207)","Quando se tratar de <b>prática de ato INDISPENSÁVEL para EVITAR A CADUCIDADE de direito</b> — e <b>INDEPENDENTEMENTE de disposição legal permissiva</b>."],
  ["Quem responde nessa dispensa?","<b>TODOS os participantes no ato</b> respondem pelo <b>tributo porventura devido, juros de mora e penalidades</b> — <b>exceto</b> as relativas a <b>infrações cuja responsabilidade seja PESSOAL ao infrator</b>."],
  ["Exemplo da dispensa do art. 207","Empresa em licitação precisa da CND com urgência e os servidores responsáveis pela emissão estão <b>em greve</b>: dispensa-se a certidão para <b>evitar a perda do direito</b> de participar."],
  ["A dispensa do art. 207 depende de lei autorizativa?","<b>NÃO</b> — o artigo é expresso: “<b>independentemente de disposição legal permissiva</b>”."],
  ["Qual a responsabilidade do servidor que expede certidão errada? (art. 208)","A certidão negativa expedida <b>com DOLO ou FRAUDE</b>, que contenha <b>erro contra a Fazenda</b>, <b>responsabiliza PESSOALMENTE o funcionário</b> pelo <b>crédito tributário e juros de mora acrescidos</b>."],
  ["O art. 208 exige dolo ou basta culpa?","Exige <b>DOLO ou FRAUDE</b>. Erro meramente culposo <b>não</b> atrai a responsabilidade pessoal do art. 208."],
  ["A responsabilidade do art. 208 exclui outras?","<b>NÃO</b> (parágrafo único) — não exclui a <b>responsabilidade CRIMINAL e FUNCIONAL</b> que no caso couber."],
  ["Exemplo do art. 208","Servidor recebe propina para atestar falsamente a quitação do <b>ITBI</b>, e a certidão é usada na escritura de compra e venda: ele <b>responde pessoalmente</b> pelo crédito e pelos juros, além da apuração criminal e funcional."],
  ["Reforma tributária: muda algo aqui?","A <b>EC 132/2023 não alterou os arts. 201 a 208</b> do CTN. A cobrança de IBS e CBS terá regras próprias em lei complementar, mas a lógica de dívida ativa e certidões permanece."]
];

var QS = [
  ["A inscrição em dívida ativa tem por objetivo extrair a Certidão de Dívida Ativa, título executivo extrajudicial que viabiliza a execução fiscal.","C","FCC","É o documento que aparelha a cobrança judicial."],
  ["A inscrição em dívida ativa pode ser efetuada ainda que a exigibilidade do crédito esteja suspensa.","E","CEBRASPE","Exige-se crédito definitivamente constituído e sem causa suspensiva."],
  ["Em se tratando de tributos federais, a inscrição em dívida ativa compete à Procuradoria da Fazenda Nacional.","C","FGV","Atribuição da PFN."],
  ["A Certidão de Dívida Ativa pode ser levada a protesto extrajudicial antes do ajuizamento da execução fiscal.","C","FCC","Amplia as possibilidades de cobrança e reduz custos."],
  ["Constitui dívida ativa tributária todo crédito da Fazenda Pública regularmente inscrito.","E","CTN art. 201","Somente os créditos de natureza <b>tributária</b>."],
  ["Constitui dívida ativa tributária a proveniente de crédito dessa natureza, regularmente inscrita, depois de esgotado o prazo fixado para pagamento pela lei ou por decisão final proferida em processo regular.","C","CTN art. 201","Literalidade do caput."],
  ["A fluência de juros de mora exclui a liquidez do crédito inscrito em dívida ativa.","E","CTN art. 201 p.ú.","<b>Não exclui</b> a liquidez."],
  ["O termo de inscrição da dívida ativa indicará obrigatoriamente o nome do devedor e, sendo caso, o dos corresponsáveis.","C","CTN art. 202 I","Requisito essencial."],
  ["O termo de inscrição indicará obrigatoriamente o domicílio ou a residência do devedor, sob pena de nulidade.","E","CTN art. 202 I","O domicílio é indicado <b>sempre que possível</b> — não é essencial."],
  ["O termo de inscrição deve indicar a origem e a natureza do crédito, com menção específica à disposição da lei em que seja fundado.","C","CTN art. 202 III","Permite ao devedor conhecer o fundamento da cobrança."],
  ["O termo de inscrição deve indicar a maneira de calcular os juros de mora acrescidos.","C","CTN art. 202 II","Junto com a quantia devida."],
  ["A omissão de requisitos do termo de inscrição ou o erro a eles relativo são causas de nulidade da inscrição e do processo de cobrança dela decorrente.","C","CTN art. 203","Mas a nulidade é sanável."],
  ["A nulidade da inscrição pode ser sanada até a decisão de segunda instância, mediante substituição da certidão.","E","CTN art. 203","Até a decisão de <b>primeira</b> instância."],
  ["Substituída a certidão nula, devolve-se ao sujeito passivo o prazo para defesa, que poderá versar sobre toda a matéria discutida.","E","CTN art. 203","A defesa somente poderá versar sobre a <b>parte modificada</b>."],
  ["Citado na execução fiscal, o devedor pode pagar o valor devido ou garantir a execução mediante depósito, fiança bancária ou indicação de bens à penhora.","C","FCC","São as duas alternativas abertas ao executado."],
  ["A dívida regularmente inscrita goza de presunção absoluta de certeza e liquidez.","E","CTN art. 204","A presunção é <b>relativa</b>, podendo ser ilidida por prova inequívoca."],
  ["A dívida regularmente inscrita tem o efeito de prova pré-constituída.","C","CTN art. 204","Daí a eficiência do rito da execução fiscal."],
  ["A presunção de certeza e liquidez da dívida inscrita pode ser ilidida por prova inequívoca a cargo do sujeito passivo ou do terceiro a que aproveite.","C","CTN art. 204 p.ú.","O ônus da prova é do executado."],
  ["A lei poderá exigir que a prova da quitação de determinado tributo seja feita por certidão negativa, expedida à vista de requerimento do interessado.","C","CTN art. 205","Com identificação, domicílio fiscal, ramo de atividade e período."],
  ["A certidão negativa será fornecida dentro de dez dias úteis da data da entrada do requerimento na repartição.","E","CTN art. 205 p.ú.","São dez dias <b>corridos</b>."],
  ["A certidão negativa será sempre expedida nos termos em que tenha sido requerida.","C","CTN art. 205 p.ú.","O pedido delimita o conteúdo da certidão."],
  ["Tem os mesmos efeitos da certidão negativa aquela de que conste a existência de créditos não vencidos, em curso de cobrança executiva com penhora efetivada, ou com exigibilidade suspensa.","C","CTN art. 206","São as três hipóteses de CPEN."],
  ["A certidão positiva com efeitos de negativa pode ser expedida quando houver crédito em curso de cobrança executiva, ainda que não efetivada a penhora.","E","CTN art. 206","Exige-se que a penhora tenha sido <b>efetivada</b>."],
  ["Contribuinte notificado para recolher ICMS em trinta dias que requer certidão no quinto dia tem direito a certidão positiva com efeitos de negativa.","C","FGV","Há crédito não vencido — hipótese do art. 206."],
  ["Contribuinte que aderiu a parcelamento e vem pagando as parcelas tem direito a certidão positiva com efeitos de negativa.","C","CTN art. 151 VI c/c 206","O parcelamento suspende a exigibilidade."],
  ["Concedida tutela antecipada que discute o crédito, o contribuinte faz jus a certidão positiva com efeitos de negativa.","C","CTN art. 151 V c/c 206","A tutela antecipada é causa de suspensão."],
  ["Declarado e não pago o débito tributário pelo contribuinte, é legítima a recusa de expedição de certidão negativa ou positiva com efeito de negativa.","C","STJ Súmula 446","A declaração já constituiu o crédito."],
  ["Existindo débito relativo a exação declarada inconstitucional pelo STF, é legítima a recusa de expedição de certidão negativa.","E","STJ REsp 218.694","Não se pode negar a certidão nesse caso."],
  ["Será dispensada a prova de quitação de tributos quando se tratar de prática de ato indispensável para evitar a caducidade de direito.","C","CTN art. 207","Independentemente de disposição legal permissiva."],
  ["A dispensa da prova de quitação prevista no art. 207 do CTN depende de lei autorizativa específica.","E","CTN art. 207","O artigo diz expressamente que independe de disposição legal permissiva."],
  ["Dispensada a prova de quitação, todos os participantes no ato respondem pelo tributo devido, juros de mora e penalidades cabíveis.","C","CTN art. 207","Exceto as relativas a infrações de responsabilidade pessoal do infrator."],
  ["Na dispensa do art. 207, os participantes respondem inclusive pelas penalidades relativas a infrações cuja responsabilidade seja pessoal ao infrator.","E","CTN art. 207","Essas são justamente a exceção."],
  ["A certidão negativa expedida com dolo ou fraude, que contenha erro contra a Fazenda Pública, responsabiliza pessoalmente o funcionário que a expedir.","C","CTN art. 208","Pelo crédito tributário e juros de mora acrescidos."],
  ["A responsabilidade pessoal do art. 208 do CTN alcança o servidor que expede certidão com erro meramente culposo.","E","CTN art. 208","Exige-se <b>dolo ou fraude</b>."],
  ["A responsabilidade prevista no art. 208 exclui a responsabilidade criminal e funcional do servidor.","E","CTN art. 208 p.ú.","<b>Não exclui</b> — as responsabilidades se somam."],
  ["Servidor que, mediante propina, atesta falsamente a quitação de ITBI responde pessoalmente pelo crédito tributário e juros de mora.","C","FGV","Além da responsabilidade criminal e funcional."],
  ["A inscrição em dívida ativa é o marco temporal da presunção de fraude à execução fiscal.","C","CTN art. 185","Ponto de conexão com o módulo de garantias e privilégios."],
  ["A certidão de dívida ativa deve indicar o livro e a folha da inscrição.","C","CTN art. 202 p.ú.","Requisito da certidão extraída do termo."],
  ["O termo de inscrição em dívida ativa deve ser autenticado pela autoridade competente.","C","CTN art. 202","Formalidade essencial do ato."],
  ["A dívida ativa não tributária segue o mesmo regime de constituição previsto no art. 201 do CTN.","E","FGV","O art. 201 define a dívida ativa <b>tributária</b>; a não tributária tem disciplina própria."]
];

var EX = {
S1:{t:"order", instr:"Ordene a sequência até a execução fiscal",
  items:["Ocorrência do fato gerador","Notificação do lançamento",
         "Prazo para pagar ou impugnar (regra: 30 dias)","Definitividade do lançamento",
         "Inscrição em dívida ativa","Ação de execução fiscal"],
  why:"A inscrição é a penúltima etapa — e o marco da presunção de fraude (art. 185)."},

S2:{t:"mc", instr:"Qual o objetivo da inscrição do crédito em dívida ativa?",
  options:["Extrair a CDA, título executivo extrajudicial que aparelha a execução fiscal",
           "Suspender a exigibilidade do crédito",
           "Interromper o prazo decadencial",
           "Constituir definitivamente o crédito"],
  answer:0,
  why:"O crédito já estava definitivamente constituído antes da inscrição."},

S3:{t:"mc", instr:"Constitui dívida ativa TRIBUTÁRIA:",
  options:["Apenas a proveniente de crédito de natureza tributária",
           "Todo crédito da Fazenda regularmente inscrito",
           "Qualquer valor devido ao poder público",
           "Apenas os créditos já protestados"],
  answer:0,
  why:"Multa de trânsito inscrita é dívida ativa NÃO tributária."},

S4:{t:"gap", instr:"Complete o art. 201, parágrafo único",
  before:"A fluência de juros de mora ",
  after:", para os efeitos deste artigo, a liquidez do crédito.",
  options:["não exclui","exclui","suspende"], answer:0,
  why:"O crédito continua líquido ainda que os juros sigam correndo."},

S5:{t:"multi", instr:"Marque o que o termo de inscrição indicará OBRIGATORIAMENTE (art. 202)",
  options:["Nome do devedor e, sendo caso, dos corresponsáveis",
           "Quantia devida e maneira de calcular os juros de mora",
           "Origem e natureza do crédito, com a disposição legal em que se funda",
           "Data em que foi inscrita",
           "Domicílio ou residência do devedor"],
  answers:[0,1,2,3],
  why:"O domicílio é indicado SEMPRE QUE POSSÍVEL — não é requisito essencial."},

S6:{t:"sort", instr:"Requisito essencial ou “sempre que possível”?",
  buckets:["Essencial","Sempre que possível"],
  items:[["Nome do devedor",0],["Quantia devida",0],
         ["Origem e natureza do crédito",0],["Data da inscrição",0],
         ["Domicílio ou residência do devedor",1]],
  why:"Por isso a falta do domicílio não invalida a CDA."},

S7:{t:"mc", instr:"Omitido requisito do art. 202, a nulidade da inscrição pode ser sanada:",
  options:["Até a decisão de primeira instância, por substituição da certidão",
           "Até o trânsito em julgado","A qualquer tempo","Nunca — a nulidade é insanável"],
  answer:0,
  why:"E devolve-se o prazo de defesa, restrito à parte modificada."},

S8:{t:"mc", instr:"Substituída a CDA nula, sobre o que pode versar a nova defesa?",
  options:["Somente sobre a parte modificada","Sobre toda a matéria discutida",
           "Apenas sobre o valor do crédito","Sobre nada — a defesa se preclui"],
  answer:0,
  why:"Evita-se a reabertura integral do litígio."},

S9:{t:"multi", instr:"Marque os efeitos da dívida regularmente inscrita (art. 204)",
  options:["Presunção de certeza e liquidez",
           "Efeito de prova pré-constituída",
           "Presunção relativa, ilidível por prova inequívoca",
           "Presunção absoluta, insuscetível de prova em contrário"],
  answers:[0,1,2],
  why:"O ônus da prova em contrário é do sujeito passivo ou de terceiro a quem aproveite."},

S10:{t:"mc", instr:"Citado na execução fiscal, o que o devedor pode fazer?",
  options:["Pagar o valor devido ou garantir a execução",
           "Apenas pagar integralmente","Apenas apresentar embargos",
           "Nada — a execução é automática"],
  answer:0,
  why:"Garante-se por depósito em dinheiro, fiança bancária ou indicação de bens à penhora."},

S11:{t:"gap", instr:"Complete o prazo do art. 205, parágrafo único",
  before:"A certidão negativa será fornecida dentro de ",
  after:" da data da entrada do requerimento na repartição.",
  options:["10 dias","30 dias","15 dias úteis"], answer:0,
  why:"Dias corridos, não úteis — e sempre nos termos em que requerida."},

S12:{t:"multi", instr:"Marque o que o requerimento de certidão deve conter (art. 205)",
  options:["Informações necessárias à identificação da pessoa",
           "Domicílio fiscal","Ramo de negócio ou atividade",
           "Período a que se refere o pedido",
           "Comprovante de recolhimento de taxa"],
  answers:[0,1,2,3],
  why:"São os quatro elementos do dispositivo."},

S13:{t:"multi", instr:"Marque as TRÊS hipóteses de CPEN (art. 206)",
  options:["Créditos não vencidos",
           "Créditos em curso de cobrança executiva com penhora efetivada",
           "Créditos cuja exigibilidade esteja suspensa",
           "Créditos declarados e não pagos"],
  answers:[0,1,2],
  why:"Declarado e não pago, a recusa é legítima (Súmula 446 do STJ)."},

S14:{t:"sort", instr:"Qual certidão em cada situação?",
  buckets:["CPEN (positiva com efeitos de negativa)","Recusa legítima"],
  items:[["Crédito ainda dentro do prazo para pagamento",0],
         ["Parcelamento em dia",0],
         ["Liminar em mandado de segurança",0],
         ["Execução fiscal com penhora efetivada",0],
         ["Débito declarado e não pago",1]],
  why:"A CPEN atesta situação regular — declarar e não pagar não é situação regular."},

S15:{t:"mc", instr:"Empresa aderiu a parcelamento municipal e paga a 7ª de 12 parcelas. Que certidão obtém?",
  options:["Positiva com efeitos de negativa","Negativa","Positiva simples","Nenhuma"],
  answer:0,
  why:"O parcelamento suspende a exigibilidade (art. 151, VI)."},

S16:{t:"mc", instr:"Débito declarado pelo contribuinte e não pago. O Fisco pode recusar a certidão?",
  options:["Sim — é legítima a recusa (Súmula 446 do STJ)",
           "Não — cabe CPEN","Não — cabe certidão negativa",
           "Só se já houver execução fiscal"],
  answer:0,
  why:"Pela Súmula 436, a declaração já constituiu o crédito: ele é exigível."},

S17:{t:"mc", instr:"Débito de tributo declarado inconstitucional pelo STF impede a certidão negativa?",
  options:["Não — não se pode negar a CND nesse caso (STJ, REsp 218.694)",
           "Sim — o débito ainda consta dos sistemas",
           "Sim, salvo decisão judicial individual",
           "Só cabe CPEN"],
  answer:0,
  why:"Exação inconstitucional não sustenta a recusa."},

S18:{t:"mc", instr:"Quando se dispensa a prova de quitação de tributos (art. 207)?",
  options:["Em ato indispensável para evitar a caducidade de direito, independentemente de lei permissiva",
           "Sempre que houver greve na repartição",
           "Mediante autorização judicial",
           "Apenas se houver lei específica autorizando"],
  answer:0,
  why:"A greve do exemplo importa porque ameaça a perda do direito, não por si só."},

S19:{t:"multi", instr:"Dispensada a prova de quitação, quem responde e por quê? (art. 207)",
  options:["Todos os participantes no ato","Pelo tributo porventura devido",
           "Pelos juros de mora e penalidades cabíveis",
           "Pelas penalidades de infrações de responsabilidade pessoal do infrator"],
  answers:[0,1,2],
  why:"As infrações pessoais são a exceção expressa do artigo."},

S20:{t:"multi", instr:"Marque o que é correto sobre o art. 208 do CTN",
  options:["Exige dolo ou fraude do servidor",
           "Alcança certidão com erro contra a Fazenda Pública",
           "Responsabiliza pessoalmente pelo crédito e juros de mora",
           "Exclui a responsabilidade criminal e funcional",
           "Alcança o erro meramente culposo"],
  answers:[0,1,2],
  why:"O parágrafo único é claro: não exclui as demais responsabilidades."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Dívida ativa",
      '<div class="box"><span class="bl">O que é e para que serve</span>'+
      '<p><b>Dívida ativa</b> é a inclusão do nome do devedor no <b>cadastro de inadimplentes</b>, por <b>lavratura de termo no livro da dívida ativa</b> — hoje eletrônico.</p>'+
      '<p><b>Objetivo:</b> extrair a <b>CDA</b>, <b>título executivo extrajudicial</b> que viabiliza a <b>execução fiscal</b>. Nos tributos federais, quem inscreve é a <b>PFN</b>.</p>'+
      '<p><b>Quando:</b> depois da <b>constituição DEFINITIVA</b> e <b>não havendo causa de SUSPENSÃO</b> da exigibilidade.</p>'+
      '<p class="mn"><em>Antes de executar, a CDA pode ir a <b>PROTESTO</b> — ato público extrajudicial perante tabelião, que leva o nome a SPC e SERASA.</em></p></div>'+
      '<div class="box trap"><span class="bl">Art. 201 e sua pegadinha</span>'+
      '<p>É <b>dívida ativa TRIBUTÁRIA</b> a proveniente de <b>crédito dessa natureza</b>, regularmente inscrita, <b>esgotado o prazo</b> fixado para pagamento pela lei ou por decisão final em processo regular.</p>'+
      '<p><b>ERRADO dizer</b> que todo crédito da Fazenda inscrito é dívida ativa tributária — <b>multa de trânsito</b> inscrita é dívida ativa <b>NÃO tributária</b>.</p>'+
      '<p><b>Parágrafo único:</b> a fluência de <b>juros de mora NÃO exclui a LIQUIDEZ</b> do crédito.</p></div>'+
      '<div class="box"><span class="bl">Art. 202 — requisitos do termo</span>'+
      '<p><b>I)</b> <b>nome do devedor</b> e, sendo caso, dos <b>corresponsáveis</b>, e — <b>sempre que possível</b> — o <b>domicílio ou residência</b>;<br>'+
      '<b>II)</b> <b>quantia devida</b> e <b>maneira de calcular os juros de mora</b>;<br>'+
      '<b>III)</b> <b>origem e natureza do crédito</b>, com a <b>disposição legal</b> em que se funda;<br>'+
      '<b>IV)</b> <b>data da inscrição</b>;<br>'+
      '<b>V)</b> sendo caso, o <b>número do processo administrativo</b>.</p>'+
      '<p>Mais: indicar o <b>livro e a folha</b> da inscrição, e o termo deve ser <b>AUTENTICADO</b> pela autoridade competente.</p>'+
      '<p class="mn"><em>O <b>domicílio</b> é o único “sempre que possível” — <b>não é essencial</b> à validade da CDA.</em></p></div>'+
      '<div class="box tip"><span class="bl">Arts. 203 e 204 — nulidade e presunção</span>'+
      '<p><b>203:</b> omissão ou erro nos requisitos gera <b>NULIDADE</b> da inscrição e da cobrança — mas <b>sanável até a DECISÃO DE PRIMEIRA INSTÂNCIA</b>, por <b>substituição da certidão</b>, devolvido o prazo de defesa, que <b>só pode versar sobre a PARTE MODIFICADA</b>.</p>'+
      '<p><b>204:</b> a dívida regularmente inscrita goza de presunção de <b>CERTEZA e LIQUIDEZ</b> e tem efeito de <b>PROVA PRÉ-CONSTITUÍDA</b>. A presunção é <b>RELATIVA</b>: ilidível por <b>prova inequívoca</b>, <b>a cargo do sujeito passivo</b> ou do terceiro a que aproveite.</p>'+
      '<p class="mn"><em>Citado, o devedor <b>paga</b> ou <b>garante a execução</b> — depósito, fiança bancária ou indicação de bens à penhora.</em></p></div>'),
    sl("Certidões negativas",
      '<div class="box"><span class="bl">Art. 205 — a certidão negativa</span>'+
      '<p>A <b>lei poderá exigir</b> que a prova de quitação seja feita por <b>certidão negativa</b>, expedida a requerimento que contenha <b>identificação da pessoa</b>, <b>domicílio fiscal</b>, <b>ramo de negócio ou atividade</b> e <b>período</b>.</p>'+
      '<p><b>Parágrafo único:</b> será <b>sempre expedida nos termos em que requerida</b> e fornecida em <b>10 DIAS</b> da entrada do requerimento — <b>dias corridos</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Art. 206 — a CPEN</span>'+
      '<p>Tem os <b>mesmos efeitos</b> da negativa a certidão de que conste:</p>'+
      '<p><b>1)</b> créditos <b>NÃO VENCIDOS</b>;<br>'+
      '<b>2)</b> créditos <b>em curso de cobrança executiva em que tenha sido EFETIVADA A PENHORA</b>;<br>'+
      '<b>3)</b> créditos com <b>EXIGIBILIDADE SUSPENSA</b> — todas as causas do art. 151: <b>DEMORE a LIMPAR</b>.</p>'+
      '<p class="mn"><em>Atenção ao item 2: <b>não basta</b> a execução em curso — a <b>penhora precisa estar efetivada</b>.</em></p>'+
      '<p><b>Exemplos:</b> notificado e ainda dentro dos 30 dias → <b>crédito não vencido</b>; parcelamento em dia → <b>suspensão</b>; tutela antecipada → <b>suspensão</b>. Em todos, <b>CPEN</b>.</p></div>'+
      '<div class="box"><span class="bl">Dois enunciados que delimitam a CPEN</span>'+
      '<p><b>STJ, Súmula 446:</b> “<b>Declarado e não pago</b> o débito tributário pelo contribuinte, é <b>LEGÍTIMA A RECUSA</b> de expedição de certidão negativa ou positiva com efeito de negativa.”</p>'+
      '<p class="mn"><em>Coerente com a Súmula 436: a declaração <b>já constituiu</b> o crédito, que é exigível.</em></p>'+
      '<p><b>STJ, REsp 218.694:</b> <b>não se pode negar</b> a CND por débito de <b>exação declarada INCONSTITUCIONAL</b> pelo STF.</p></div>'+
      '<div class="box tip"><span class="bl">Arts. 207 e 208 — dispensa e responsabilidade</span>'+
      '<p><b>207 —</b> dispensa-se a prova de quitação, <b>INDEPENDENTEMENTE de disposição legal permissiva</b>, quando se tratar de <b>ato indispensável para EVITAR A CADUCIDADE de direito</b>. Mas <b>todos os participantes respondem</b> pelo tributo, juros e penalidades — <b>exceto</b> as de <b>responsabilidade PESSOAL do infrator</b>.</p>'+
      '<p><em>Empresa em licitação que precisa da CND com a repartição em greve: dispensa-se a certidão para não perder o direito.</em></p>'+
      '<p><b>208 —</b> a certidão negativa expedida <b>com DOLO ou FRAUDE</b>, com <b>erro contra a Fazenda</b>, <b>responsabiliza PESSOALMENTE o funcionário</b> pelo <b>crédito e juros de mora</b>. O parágrafo único: <b>não exclui</b> a responsabilidade <b>criminal e funcional</b>.</p>'+
      '<p class="mn"><em>Erro meramente <b>culposo</b> não atrai o art. 208 — exige-se dolo ou fraude.</em></p></div>')
  ]
};

var TEC = [
  ["Caderno CEBRASPE — Direito Tributário 14","https://www.tecconcursos.com.br/s/Q2hZd3","Q2hZd3"],
  ["Caderno FCC — Direito Tributário 14","https://www.tecconcursos.com.br/s/Q2hZd6","Q2hZd6"],
  ["Caderno FGV — Direito Tributário 14","https://www.tecconcursos.com.br/s/Q2hZd7","Q2hZd7"],
  ["Caderno VUNESP — Direito Tributário 14","https://www.tecconcursos.com.br/s/Q2hZd8","Q2hZd8"]
];
var TECNOTA = "Priorize o caderno da FGV — banca do último certame da Receita Federal. Módulo curto e muito cobrado em carreira fiscal. Quatro pontos resolvem a maioria das questões: a presunção do art. 204 é RELATIVA e o ônus da prova é do executado; o domicílio do devedor no art. 202 é exigido apenas SEMPRE QUE POSSÍVEL, logo sua falta não invalida a CDA; a nulidade da inscrição é sanável até a decisão de PRIMEIRA instância, com defesa restrita à parte modificada; e a CPEN exige, na hipótese de execução em curso, que a PENHORA esteja EFETIVADA. Some a Súmula 446 do STJ (declarado e não pago, a recusa é legítima) e o REsp 218.694 (exação inconstitucional não justifica recusa). Com este módulo você fecha o CTN do art. 1º ao 208. A EC 132/2023 não alterou os arts. 201 a 208.";

var UNITS = [
  {n:1, title:"Dívida ativa e a CDA", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Arts. 201 a 204 e as certidões dos arts. 205 a 208", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · inscrição e natureza da dívida", xp:25, data:["S1","S2","S3","S4","T0","T1","T2","T3","T4","T5","T6","T36","T39"]},
    {id:"K3", type:"flash",  title:"Flashcards · dívida ativa",            xp:15, data:[0,1,2,3,4,5,6,7,8,9]}
  ]},
  {n:2, title:"Requisitos, nulidade e presunção", cvar:"u2", lessons:[
    {id:"K4", type:"drill",  title:"Praticar · requisitos do termo",       xp:25, data:["S5","S6","T7","T8","T9","T10","T37","T38"]},
    {id:"K5", type:"drill",  title:"Praticar · nulidade sanável",          xp:25, data:["S7","S8","T11","T12","T13"]},
    {id:"K6", type:"drill",  title:"Praticar · presunção do art. 204",     xp:25, data:["S9","S10","T14","T15","T16","T17"]},
    {id:"K7", type:"flash",  title:"Flashcards · requisitos e presunção",  xp:15, data:[10,11,12,13,14,15,16,17,18,19,20]}
  ]},
  {n:3, title:"Certidões negativas e a CPEN", cvar:"u3", lessons:[
    {id:"K8", type:"drill",  title:"Praticar · certidão negativa",         xp:25, data:["S11","S12","T18","T19","T20"]},
    {id:"K9", type:"drill",  title:"Praticar · hipóteses de CPEN",         xp:25, data:["S13","S14","S15","T21","T22","T23","T24","T25"]},
    {id:"K10",type:"drill",  title:"Praticar · Súmula 446 e exação inconstitucional", xp:25, data:["S16","S17","T26","T27"]},
    {id:"K11",type:"flash",  title:"Flashcards · certidões",               xp:15, data:[21,22,23,24,25,26,27,28,29,30,31]}
  ]},
  {n:4, title:"Dispensa e responsabilidade", cvar:"u4", lessons:[
    {id:"K12",type:"drill",  title:"Praticar · dispensa do art. 207",      xp:25, data:["S18","S19","T28","T29","T30","T31"]},
    {id:"K13",type:"drill",  title:"Praticar · responsabilidade do art. 208", xp:25, data:["S20","T32","T33","T34","T35"]},
    {id:"K14",type:"flash",  title:"Flashcards · dispensa e responsabilidade", xp:15, data:[32,33,34,35,36,37,38,39,40,41]}
  ]},
  {n:5, title:"Fixação", cvar:"u5", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",              xp:60, data:null},
    {id:"K15", type:"missao", title:"Missão TEC Concursos",                xp:15, data:null},
    {id:"K16", type:"prova",  title:"Simulado cronometrado",               xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo — é a definição do Resumo. O <b>objetivo</b> da inscrição do crédito em dívida ativa é extrair a <b>Certidão de Dívida Ativa (CDA)</b>, título <b>executivo extrajudicial</b> que viabiliza a posterior propositura da ação de execução fiscal.</p><p>A inscrição em si é a inclusão do nome do sujeito passivo no cadastro de devedores inadimplentes, mediante lavratura de termo no livro da dívida ativa do ente — hoje de forma eletrônica.</p><p class='fb-fonte'>Resumo 14 · <i>Dívida ativa</i></p>",
1:"<p>Errado. O Resumo descreve a sequência: após a <b>constituição definitiva</b> do crédito, e <b>não havendo qualquer medida (judicial ou administrativa) que suspenda a exigibilidade</b>, é que cabe à Fazenda inscrever em dívida ativa.</p><p>Crédito com exigibilidade suspensa não se inscreve.</p><p class='fb-fonte'>Resumo 14 · <i>Como funciona a inscrição em dívida ativa</i></p>",
2:"<p>Certo. Comentário do Resumo ao art. 201: em se tratando de tributos de competência da <b>União</b>, a inscrição compete à <b>Procuradoria da Fazenda Nacional (PFN)</b>.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 201</i></p>",
3:"<p>Certo — quadro ATENÇÃO do Resumo: <b>antes</b> de o Fisco ajuizar a execução fiscal, a CDA pode ser levada a <b>protesto</b> perante Tabelião de Protesto de Títulos.</p><p>A finalidade, segundo o material: ampliar as possibilidades de cobrança e reduzir o custo da cobrança judicial, com a inscrição do nome do devedor no <b>SPC</b> e no <b>SERASA</b>.</p><p class='fb-fonte'>Resumo 14 · <i>ATENÇÃO — protesto da CDA</i></p>",
4:"<p>Errado — o Resumo marca exatamente esta assertiva como <b>PEGADINHA</b>.</p><p>Constitui dívida ativa <b>tributária</b> apenas a proveniente de crédito <b>dessa natureza</b> (tributos). Nem todo crédito inscrito em dívida ativa é dívida ativa tributária — há a <b>não tributária</b> (multas administrativas, aluguéis, foros, etc.).</p><p class='fb-fonte'>Resumo 14 · <i>PEGADINHA — art. 201</i></p>",
5:"<p>Certo — literalidade do art. 201. Note os dois marcos alternativos: esgotado o prazo fixado para pagamento <b>pela lei</b> ou <b>por decisão final proferida em processo regular</b>.</p><p>E a inscrição é na <b>repartição administrativa competente</b>.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 201</i></p>",
6:"<p>Errado. Parágrafo único do art. 201: a <b>fluência de juros de mora não exclui</b> a liquidez do crédito.</p><p>O Resumo traduz: os juros pela demora não retiram o caráter de <b>valor exato</b> do crédito, porque a forma de calculá-los consta do próprio termo de inscrição (art. 202, II).</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 201, parágrafo único</i></p>",
7:"<p>Certo — primeiro item do esquema do art. 202 no Resumo: o nome do devedor e, <b>sendo caso</b>, o dos <b>corresponsáveis</b>.</p><p class='fb-fonte'>Resumo 14 · <i>Termo de inscrição — art. 202, I</i></p>",
8:"<p>Errado — quadro ATENÇÃO do Resumo: o domicílio ou residência do devedor ou corresponsável é indicado <b>sempre que possível</b>.</p><p>Conclusão do material: para a validade da CDA, <b>não é essencial</b> o domicílio ou residência do devedor.</p><p class='fb-fonte'>Resumo 14 · <i>ATENÇÃO — art. 202, I</i></p>",
9:"<p>Certo — no esquema do art. 202: a <b>origem e natureza do crédito</b>, mencionada <b>especificamente a disposição da lei em que seja fundado</b>.</p><p>Sem indicar a norma, a CDA não permite ao executado conhecer o fundamento da cobrança.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 202, III</i></p>",
10:"<p>Certo. O termo indica a <b>quantia devida</b> e a <b>maneira de calcular os juros de mora acrescidos</b>.</p><p>É justamente por isso que a fluência dos juros não afeta a liquidez (art. 201, parágrafo único): o critério de cálculo está no próprio título.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 202, II</i></p>",
11:"<p>Certo — primeira parte do art. 203: a <b>omissão</b> de quaisquer dos requisitos do art. 202, ou o <b>erro</b> a eles relativo, são causas de <b>nulidade da inscrição e do processo de cobrança</b> dela decorrente.</p><p>Mas leia o restante do artigo: essa nulidade é sanável — veja os dois itens seguintes.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 203</i></p>",
12:"<p>Errado no momento-limite. A nulidade pode ser sanada até a decisão de <b>PRIMEIRA</b> instância, mediante substituição da certidão nula.</p><p>O Resumo traduz o prazo: <b>até que o juiz julgue em 1ª instância os embargos</b> interpostos, a Fazenda pode substituir a CDA nula.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 203</i></p>",
13:"<p>Errado na extensão da defesa. Substituída a certidão, devolve-se o prazo para defesa, mas esta <b>somente poderá versar sobre a parte modificada</b>.</p><p>Não se reabre a discussão de toda a matéria.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 203</i></p>",
14:"<p>Certo. Comentário do Resumo ao art. 203: admitida a execução fiscal, o juiz despacha ordenando a citação do devedor para:</p><p>· <b>pagar o valor devido</b> (tributos + juros + multa de mora + encargos); ou<br>· <b>garantir a execução</b>, mediante <b>depósito em dinheiro, fiança bancária ou indicação de bens à penhora</b>.</p><p class='fb-fonte'>Resumo 14 · <i>Execução fiscal — comentário ao art. 203</i></p>",
15:"<p>Errado. No esquema do art. 204 no Resumo, a dívida regularmente inscrita goza da presunção <b>RELATIVA</b> de certeza e liquidez.</p><p>Relativa justamente porque, pelo parágrafo único, pode ser <b>ilidida por prova inequívoca</b> a cargo do sujeito passivo ou do terceiro a que aproveite.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 204</i></p>",
16:"<p>Certo — segundo efeito do art. 204 no esquema do Resumo: a dívida regularmente inscrita tem o efeito de <b>prova pré-constituída</b>.</p><p>É o que permite executar diretamente, sem antes obter um título em juízo.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 204</i></p>",
17:"<p>Certo — parágrafo único do art. 204. Dois pontos cobrados: a prova precisa ser <b>inequívoca</b>, e o <b>ônus é do sujeito passivo</b> ou do terceiro a que aproveite.</p><p>É a inversão do ônus da prova em favor da Fazenda.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 204, parágrafo único</i></p>",
18:"<p>Certo, art. 205. A <b>Certidão Negativa de Débitos (CND)</b>, explica o Resumo, é o documento capaz de comprovar a inexistência de débito — a prova da quitação dos tributos devidos.</p><p>Ela é expedida à vista de <b>requerimento do interessado</b>, que deve conter identificação, domicílio fiscal, ramo de negócio ou atividade e o <b>período</b> a que se refere o pedido.</p><p class='fb-fonte'>Resumo 14 · <i>Certidões negativas — art. 205</i></p>",
19:"<p>Errado — o Resumo destaca a armadilha: a CND será fornecida dentro de <b>10 dias CORRIDOS</b> (\"não são úteis\") da data da entrada do requerimento na repartição.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 205, parágrafo único</i></p>",
20:"<p>Certo — parágrafo único do art. 205: a certidão negativa será <b>sempre expedida nos termos em que tenha sido requerida</b>.</p><p>Daí a importância de o requerimento indicar corretamente o <b>período</b> e a atividade a que se refere.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 205, parágrafo único</i></p>",
21:"<p>Certo, art. 206 — é a <b>Certidão Positiva com Efeitos de Negativa (CPEN)</b>. O Resumo lista as três situações:</p><p>· créditos <b>não vencidos</b> (vincendos);<br>· créditos em curso de cobrança executiva <b>em que tenha sido efetivada a penhora</b>;<br>· créditos cuja <b>exigibilidade esteja suspensa</b>.</p><p>A certidão é positiva (há débito), mas o contribuinte está em <b>situação regular</b>.</p><p class='fb-fonte'>Resumo 14 · <i>CPEN — art. 206</i></p>",
22:"<p>Errado. O art. 206 exige que a penhora tenha sido <b>efetivada</b>.</p><p>Execução em curso sem penhora efetivada não dá direito à CPEN — falta a garantia do juízo.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 206</i></p>",
23:"<p>Certo — é o Exemplo 01 do Resumo.</p><p>Empresa notificada para recolher ICMS em <b>até 30 dias</b> requer a certidão no <b>5º dia</b>: o crédito ainda <b>não venceu</b>. Tratando-se de <b>créditos não vencidos</b>, deve ser emitida <b>Certidão Positiva com Efeitos de Negativa</b> (art. 206).</p><p class='fb-fonte'>Resumo 14 · <i>Art. 206 — Exemplo 01 (ICMS/PA)</i></p>",
24:"<p>Certo — é o Exemplo 02 do Resumo, com o Pablo e o IPTU.</p><p>Parcelamento municipal em 12 parcelas; na 7ª ele pede a certidão. O <b>parcelamento suspende a exigibilidade</b> (art. 151, VI — o <b>PAR</b> do \"DEMORE a LIMPAR\"), logo a certidão a ser emitida é <b>Positiva com Efeitos de Negativa</b> (art. 206).</p><p class='fb-fonte'>Resumo 14 · <i>Art. 206 — Exemplo 02 (parcelamento)</i></p>",
25:"<p>Certo — é o Exemplo 03 do Resumo.</p><p>Contribuinte que questiona créditos por ação ordinária e obtém a <b>antecipação dos efeitos da tutela</b>: a tutela antecipada é causa de suspensão do crédito (art. 151, V — o <b>LIM</b> do mnemônico), logo cabe a <b>CPEN</b>.</p><p>Lembre da observação do material: tutela antecipada cabe nas <b>outras espécies de ação</b>; em mandado de segurança, o que cabe é a <b>liminar</b>.</p><p class='fb-fonte'>Resumo 14 · <i>Art. 206 — Exemplo 03 (tutela antecipada)</i></p>",
26:"<p>Certo — <b>Súmula 446 do STJ</b>, transcrita no Resumo: \"Declarado e não pago o débito tributário pelo contribuinte, é <b>legítima a recusa</b> de expedição de certidão negativa ou positiva com efeito de negativa.\"</p><p>Faz sentido: pela Súmula 436, a declaração já constitui o crédito — há débito exigível e nenhuma causa de suspensão.</p><p class='fb-fonte'>Resumo 14 · <i>STJ Súmula 446</i></p>",
27:"<p>Errado — <b>STJ, REsp 218.694</b>, citado no Resumo: não se pode negar expedição de Certidão Negativa de Débito ante a presença de débito referente a <b>exação declarada inconstitucional pelo STF</b>.</p><p>Exemplo do material: a empresa ABC, com débito de tributo declarado inconstitucional, <b>tem direito à certidão negativa</b> para concorrer à licitação.</p><p class='fb-fonte'>Resumo 14 · <i>STJ REsp 218.694</i></p>",
28:"<p>Certo, art. 207: dispensa-se a prova de quitação quando se tratar de <b>prática de ato indispensável para evitar a caducidade (perda) de um direito</b>.</p><p>Exemplo do Resumo: empresa em licitação que precisa apresentar a CND com urgência, mas os servidores responsáveis pela emissão estão <b>em greve</b>.</p><p class='fb-fonte'>Resumo 14 · <i>Dispensa da certidão — art. 207</i></p>",
29:"<p>Errado. O art. 207 começa por \"<b>Independentemente de disposição legal permissiva</b>\" — a dispensa ocorre <b>sem necessidade de lei autorizativa</b>.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 207</i></p>",
30:"<p>Certo — é o preço da dispensa: respondem <b>todos os participantes no ato</b> pelo tributo porventura devido, <b>juros de mora e penalidades cabíveis</b>.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 207</i></p>",
31:"<p>Errado pela ressalva final do art. 207: excetuam-se as penalidades relativas a <b>infrações cuja responsabilidade seja pessoal ao infrator</b>.</p><p>Os participantes respondem pelo tributo, juros e multas comuns — não pelas penalidades personalíssimas de outrem.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 207, parte final</i></p>",
32:"<p>Certo, art. 208. A certidão negativa expedida com <b>dolo ou fraude</b>, que contenha erro <b>contra a Fazenda Pública</b>, responsabiliza <b>pessoalmente o funcionário</b> que a expedir, pelo crédito tributário e juros de mora acrescidos.</p><p class='fb-fonte'>Resumo 14 · <i>Certidão com erro — art. 208</i></p>",
33:"<p>Errado. O art. 208 exige <b>dolo ou fraude</b> — o Resumo fala em \"intenção de cometer fraude\".</p><p>Erro meramente culposo não atrai a responsabilidade pessoal desse artigo.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 208</i></p>",
34:"<p>Errado — parágrafo único do art. 208: o disposto no artigo <b>não exclui</b> a responsabilidade <b>criminal e funcional</b> que no caso couber.</p><p>As três esferas se somam: tributária (pessoal pelo crédito e juros), criminal e disciplinar.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 208, parágrafo único</i></p>",
35:"<p>Certo — é o exemplo do servidor André, no Resumo.</p><p>Recebeu <b>propina</b> de Bruno e, em conluio, emitiu certidão atestando <b>falsamente</b> a quitação do <b>ITBI</b> para a lavratura da escritura. Há <b>dolo e fraude</b>, e erro contra a Fazenda: André responde <b>pessoalmente</b> pelo crédito tributário e juros de mora (art. 208) — sem prejuízo da responsabilidade criminal e funcional.</p><p class='fb-fonte'>Resumo 14 · <i>Art. 208 — exemplo do ITBI</i></p>",
36:"<p>Certo. É um dos efeitos centrais da inscrição: ela é o <b>marco temporal</b> da presunção de fraude à execução fiscal (art. 185).</p><p>Alienação ou oneração de bens <b>após</b> a inscrição, sem reserva de bens suficientes, é presumidamente fraudulenta.</p><p class='fb-fonte'>Resumo 14 · <i>Dívida ativa · CTN, art. 185</i></p>",
37:"<p>Certo — consta do esquema do art. 202 no Resumo: <b>o livro e a folha da inscrição</b>.</p><p>Junto com a <b>data em que foi inscrita</b> e, sendo caso, o <b>número do processo administrativo</b> de que se originar o crédito.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 202</i></p>",
38:"<p>Certo — o esquema do art. 202 no Resumo registra: o termo de inscrição em dívida ativa <b>deverá ser autenticado pela autoridade competente</b>.</p><p class='fb-fonte'>Resumo 14 · <i>CTN — art. 202</i></p>",
39:"<p>Errado. O art. 201 define apenas a dívida ativa <b>tributária</b> — a proveniente de crédito <b>dessa natureza</b>, como frisa o quadro ATENÇÃO do Resumo.</p><p>A dívida ativa <b>não tributária</b> (multas administrativas, aluguéis, foros e outros créditos da Fazenda) existe e se inscreve, mas segue o regime da Lei 4.320/64 e da Lei de Execuções Fiscais, não o art. 201 do CTN.</p><p class='fb-fonte'>Resumo 14 · <i>ATENÇÃO — art. 201 e a PEGADINHA</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"14", nome:"Dívida ativa e certidões negativas", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
