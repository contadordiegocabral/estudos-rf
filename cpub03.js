/* Contabilidade Pública — Módulo 03: Regimes orçamentário e patrimonial (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cpub03 = (function(){
"use strict";

var CARDS = [
  ["O que diz o art. 35 da Lei 4.320/64?","<b>Pertencem ao exercício financeiro:</b> <b>I</b> — as receitas nele <b>arrecadadas</b>; <b>II</b> — as despesas nele <b>legalmente empenhadas</b>."],
  ["O art. 35 trata de qual regime?","Do <b>regime ORÇAMENTÁRIO</b> — <b>não</b> do regime contábil (patrimonial). É a troca mais cobrada do artigo."],
  ["Regime orçamentário — quando se reconhece a receita?","Quando é <b>ARRECADADA</b>."],
  ["Regime orçamentário — quando se reconhece a despesa?","Quando é <b>EMPENHADA</b>."],
  ["Regime patrimonial — quando se reconhecem receita e despesa?","No momento do <b>fato gerador</b>."],
  ["O regime orçamentário é de caixa ou de competência?","É <b>misto</b>: <b>caixa</b> para a receita (arrecadação) e <b>competência</b> para a despesa (empenho)."],
  ["Receita: o que muda entre as duas óticas?","<b>Orçamentária</b> → reconhecida na <b>arrecadação</b> (art. 35, I). <b>Patrimonial</b> → reconhecida no <b>fato gerador</b>, que em regra coincide com o <b>lançamento</b>."],
  ["Receita lançada e não recebida pertence a qual exercício?","Ao exercício em que for <b>efetivamente arrecadada</b> — para fins orçamentários."],
  ["Como se chama a receita quando o foco é o orçamento?","<b>Receita orçamentária</b>."],
  ["Como se chama a receita quando o foco é o patrimônio?","<b>Variação Patrimonial Aumentativa (VPA)</b>."],
  ["O registro da VPA depende de execução orçamentária?","<b>Não.</b> Não depende da arrecadação — depende da <b>ocorrência do fato gerador</b>."],
  ["Exemplo clássico da VPA sem arrecadação","O <b>IPTU</b>: o fato gerador ocorre em <b>1º de janeiro</b>. Nessa data já se reconhecem o <b>direito (ativo)</b> e a <b>VPA</b>, embora a arrecadação venha depois."],
  ["Quais as quatro etapas da receita orçamentária?","<b>Previsão · Lançamento · Arrecadação · Recolhimento</b> — mnemônico <b>PLAR</b>."],
  ["Etapa da receita — previsão","<b>Planejar e estimar</b> a arrecadação das receitas que constará na <b>proposta orçamentária</b>."],
  ["Etapa da receita — lançamento","<b>Ato que verifica a procedência do crédito fiscal e a pessoa devedora.</b>"],
  ["Etapa da receita — arrecadação","<b>Entrega dos recursos devidos ao Tesouro pelos contribuintes.</b>"],
  ["Etapa da receita — recolhimento","<b>Transferência dos valores arrecadados à conta específica do Tesouro.</b>"],
  ["Quais as duas etapas da despesa (MCASP)?","<b>Planejamento</b> e <b>Execução</b>."],
  ["Quais as quatro fases do planejamento da despesa?","<b>Fixação</b> da despesa · <b>Descentralização</b> de créditos orçamentários · <b>Programação</b> orçamentária e financeira · <b>Licitação e contratação</b>. Mnemônico: <b>FDP + Licitação</b>."],
  ["Quais as três fases da execução da despesa?","<b>Empenho · Liquidação · Pagamento</b>."],
  ["Despesa: o que muda entre as duas óticas?","<b>Orçamentária</b> → reconhecida no <b>empenho</b> (art. 35, II). <b>Patrimonial</b> → reconhecida no <b>fato gerador</b>: em regra na <b>liquidação</b>, mas em alguns casos no <b>empenho</b>."],
  ["Como se chama a despesa quando o foco é o orçamento?","<b>Despesa orçamentária</b>."],
  ["Como se chama a despesa quando o foco é o patrimônio?","<b>Variação Patrimonial Diminutiva (VPD)</b>."],
  ["Em que momento ocorre a execução orçamentária?","<b>Da despesa:</b> no <b>empenho</b>. <b>Da receita:</b> na <b>arrecadação</b>."],
  ["Dotação de 20,8 milhões; 18 empenhados, 17 liquidados, 16 pagos. Qual a despesa executada?","<b>R$ 18 milhões</b> — a despesa executada é a <b>empenhada</b>. No regime orçamentário não importa se foi paga."],
  ["O que são Despesas de Exercícios Anteriores (DEA)?","Despesas de exercícios encerrados que podem ser pagas <b>à conta de dotação específica</b> consignada na Lei Orçamentária do exercício atual. <span class=\"lawref\">Art. 37 da Lei 4.320/64</span>"],
  ["Do que depende o atendimento de DEA?","De <b>previsão de crédito específico</b> na lei orçamentária ou em <b>créditos adicionais</b>."],
  ["O que diz o art. 58 sobre o empenho?","<b>Ato emanado de autoridade competente que cria para o Estado obrigação de pagamento pendente ou não de implemento de condição.</b>"],
  ["A “obrigação” do art. 58 é passivo exigível?","<b>Não.</b> É <b>obrigação financeira</b>, para fins de cálculo do superávit financeiro. A obrigação <b>patrimonial</b> exige <b>fato gerador já ocorrido</b>."],
  ["O passivo patrimonial nasce junto com o empenho?","<b>Pode ou não.</b> Depende de ter ocorrido o <b>fato gerador</b> — o registro da obrigação patrimonial <b>independe da execução orçamentária</b>."],
  ["O que a emissão do empenho constitui, na ótica orçamentária?","Uma <b>despesa orçamentária</b> e um <b>passivo financeiro</b>, para fins de cálculo do superávit financeiro."],
  ["O que é superávit financeiro?","A <b>diferença positiva entre o ativo financeiro e o passivo financeiro</b> de determinado exercício — indica excedente de recursos em relação às obrigações."],
  ["Exemplo de superávit financeiro","Prefeitura arrecada R$ 10 milhões e tem obrigações financeiras de R$ 8 milhões → superávit de <b>R$ 2 milhões</b>, utilizável como fonte para créditos adicionais."],
  ["O quadro que resolve metade do módulo","<b>Orçamentário:</b> receita na <b>arrecadação</b>, despesa no <b>empenho</b>. <b>Patrimonial:</b> ambas no <b>fato gerador</b> — receita no <b>lançamento</b>, despesa em regra na <b>liquidação</b>."]
];

var QS = [
  ["Pertencem ao exercício financeiro as receitas nele arrecadadas e as despesas nele legalmente empenhadas.","C","FUNDATEC","Art. 35 da Lei 4.320/64 — literalidade."],
  ["O art. 35 da Lei 4.320/64 estabelece o regime contábil patrimonial aplicável ao setor público.","E","CESPE","Ele trata do <b>regime orçamentário</b>, não do patrimonial."],
  ["No regime orçamentário, a receita é reconhecida no momento da arrecadação.","C","FCC","Art. 35, I."],
  ["No regime orçamentário, a despesa é reconhecida no momento do pagamento.","E","FGV","É no momento do <b>empenho</b> (art. 35, II)."],
  ["No regime patrimonial, receitas e despesas são reconhecidas no momento do fato gerador.","C","VUNESP","É o regime de competência aplicado ao patrimônio."],
  ["O regime adotado pelo art. 35 da Lei 4.320/64 é considerado misto: caixa para a receita e competência para a despesa.","C","FUNDATEC","Arrecadação (caixa) para receita; empenho (competência) para despesa."],
  ["A receita lançada e não recebida pertence, para fins orçamentários, ao exercício do lançamento.","E","CESPE","Pertence ao exercício em que for <b>efetivamente arrecadada</b>."],
  ["Quando o objetivo é evidenciar o impacto no orçamento, a receita é denominada receita orçamentária.","C","FCC","E, quando o impacto é no patrimônio, chama-se VPA."],
  ["Quando o objetivo é evidenciar o impacto no patrimônio, a receita é denominada variação patrimonial aumentativa.","C","FGV","VPA."],
  ["O registro de uma variação patrimonial aumentativa depende de prévia execução orçamentária.","E","VUNESP","Depende da <b>ocorrência do fato gerador</b>, não da arrecadação."],
  ["O fato gerador do IPTU ocorre em 1º de janeiro, de modo que o direito e a VPA devem ser reconhecidos nessa data, e não na arrecadação.","C","FUNDATEC","Exemplo clássico da independência entre patrimonial e orçamentário."],
  ["Receita orçamentária lançada em dezembro de um exercício e arrecadada em janeiro do seguinte provoca impacto patrimonial no primeiro exercício e orçamentário no segundo.","C","CESPE","É o exemplo do resumo: lançamento em 2023, arrecadação em 2024."],
  ["A mesma receita não pode produzir efeitos em exercícios diferentes conforme a ótica orçamentária ou patrimonial.","E","FCC","Pode, e é justamente o que ocorre quando lançamento e arrecadação caem em exercícios distintos."],
  ["O reconhecimento patrimonial da receita ocorre, em regra, no momento do lançamento.","C","FGV","Porque é aí que se verifica o fato gerador."],
  ["São etapas da receita orçamentária a previsão, o lançamento, a arrecadação e o recolhimento.","C","VUNESP","Mnemônico PLAR."],
  ["A previsão consiste em planejar e estimar a arrecadação das receitas que constará na proposta orçamentária.","C","FUNDATEC","Primeira etapa."],
  ["O lançamento é o ato que verifica a procedência do crédito fiscal e a pessoa devedora.","C","CESPE","Segunda etapa."],
  ["A arrecadação é a transferência dos valores à conta específica do Tesouro.","E","FCC","Isso é o <b>recolhimento</b>. Arrecadação é a <b>entrega dos recursos pelos contribuintes</b>."],
  ["O recolhimento é a entrega dos recursos devidos ao Tesouro pelos contribuintes.","E","FGV","Está invertido: essa é a <b>arrecadação</b>."],
  ["A ordem das etapas da receita é previsão, arrecadação, lançamento e recolhimento.","E","VUNESP","O <b>lançamento</b> vem antes da arrecadação: P-L-A-R."],
  ["São etapas da despesa, segundo o MCASP, o planejamento e a execução.","C","FUNDATEC","Duas etapas, subdivididas em fases."],
  ["São fases do planejamento da despesa a fixação, a descentralização de créditos orçamentários, a programação orçamentária e financeira e a licitação e contratação.","C","CESPE","Mnemônico FDP + Licitação."],
  ["São fases da execução da despesa o empenho, a liquidação e o pagamento.","C","FCC","Três fases."],
  ["A licitação e contratação integra a etapa de execução da despesa.","E","FGV","Integra o <b>planejamento</b>."],
  ["A fixação da despesa integra a etapa de execução.","E","VUNESP","Integra o <b>planejamento</b>, e é a sua primeira fase."],
  ["No regime orçamentário, a despesa é reconhecida no momento do empenho, não importando se foi paga.","C","FUNDATEC","Consequência direta do art. 35, II."],
  ["No regime patrimonial, a despesa é reconhecida no momento do fato gerador, em regra na liquidação.","C","CESPE","E, em alguns casos, já no empenho."],
  ["No regime patrimonial, a despesa é sempre reconhecida na liquidação.","E","FCC","<b>Em regra</b> na liquidação — mas em alguns casos no <b>empenho</b>. O critério é o fato gerador."],
  ["Quando o objetivo é evidenciar o impacto no patrimônio, a despesa é denominada variação patrimonial diminutiva.","C","FGV","VPD."],
  ["A execução orçamentária da despesa ocorre no momento da liquidação e a da receita, no momento do lançamento.","E","VUNESP","Despesa: <b>empenho</b>. Receita: <b>arrecadação</b>."],
  ["Dotação de R$ 20,8 milhões, com R$ 18 milhões empenhados, R$ 17 milhões liquidados e R$ 16 milhões pagos: a despesa executada no exercício foi de R$ 18 milhões.","C","FUNDATEC","Despesa executada é a <b>empenhada</b>."],
  ["Na hipótese do item anterior, a despesa executada no exercício seria de R$ 16 milhões, valor efetivamente pago.","E","CESPE","O pagamento é a última fase, mas a execução orçamentária se dá no empenho."],
  ["As despesas de exercícios anteriores poderão ser pagas à conta de dotação específica consignada na lei orçamentária do exercício atual.","C","FCC","Art. 37 da Lei 4.320/64."],
  ["O atendimento de despesas de exercícios anteriores independe de previsão de crédito específico.","E","FGV","Depende de <b>dotação específica</b> na LOA ou de <b>créditos adicionais</b>."],
  ["O empenho é o ato emanado de autoridade competente que cria para o Estado obrigação de pagamento pendente ou não de implemento de condição.","C","VUNESP","Art. 58 da Lei 4.320/64."],
  ["A obrigação a que se refere o art. 58 da Lei 4.320/64 é a obrigação patrimonial, ou seja, o passivo exigível.","E","FUNDATEC","É <b>obrigação financeira</b>. A patrimonial exige <b>fato gerador já ocorrido</b>."],
  ["A obrigação patrimonial caracteriza-se por um fato gerador já ocorrido.","C","CESPE","Por isso ela não nasce necessariamente com o empenho."],
  ["O registro da obrigação patrimonial depende da prévia execução orçamentária da despesa.","E","FCC","<b>Independe</b> — pode ou não coincidir com o empenho."],
  ["A obrigação patrimonial pode, ou não, ser registrada concomitantemente com o empenho da despesa orçamentária correspondente.","C","FGV","A depender de ter ocorrido o fato gerador."],
  ["Na ótica orçamentária, a emissão do empenho constitui despesa orçamentária e passivo financeiro para fins de cálculo do superávit financeiro.","C","VUNESP","Observação do resumo."],
  ["Superávit financeiro é a diferença positiva entre o ativo financeiro e o passivo financeiro de determinado exercício.","C","FUNDATEC","Indicador de excedente de recursos frente às obrigações."],
  ["Superávit financeiro é a diferença positiva entre a receita arrecadada e a despesa empenhada no exercício.","E","CESPE","Isso descreve o resultado da execução orçamentária, não o superávit <b>financeiro</b>."],
  ["Prefeitura com R$ 10 milhões de ativo financeiro e R$ 8 milhões de passivo financeiro apura superávit financeiro de R$ 2 milhões.","C","FCC","Diferença entre ativo e passivo financeiros."],
  ["A contabilidade aplicada ao setor público mantém processo de registro apto a sustentar simultaneamente o regime orçamentário e o regime patrimonial.","C","FGV","É o que permite a um mesmo fato produzir receita orçamentária em um exercício e VPA em outro."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Dois regimes convivendo no mesmo fato",
      '<div class="box"><span class="bl">Art. 35 da Lei 4.320/64</span>'+
      '<p>Pertencem ao exercício financeiro: <b>I</b> — as receitas nele <b>arrecadadas</b>; <b>II</b> — as despesas nele <b>legalmente empenhadas</b>.</p></div>'+
      '<div class="box trap"><span class="bl">A troca que mais derruba</span>'+
      '<p>O art. 35 trata do <b>regime ORÇAMENTÁRIO</b>. Ele <b>não</b> é o regime contábil (patrimonial). Item que o apresente como regra de reconhecimento patrimonial é <b>falso</b>.</p></div>'+
      '<div class="box"><span class="bl">O quadro inteiro do módulo</span>'+
      '<ul><li><b>Orçamentário:</b> receita quando <b>arrecadada</b> · despesa quando <b>empenhada</b>.</li>'+
      '<li><b>Patrimonial:</b> receita e despesa no <b>fato gerador</b> — a receita em regra no <b>lançamento</b>, a despesa em regra na <b>liquidação</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Por que se diz que o regime orçamentário é misto</span>'+
      '<p>Porque usa <b>caixa</b> para a receita (só conta quando o dinheiro entra) e <b>competência</b> para a despesa (conta quando a obrigação é assumida, ainda que não paga).</p></div>'),
    sl("Receita orçamentária e VPA — o mesmo fato, dois nomes",
      '<div class="box"><span class="bl">Como chamar a receita</span>'+
      '<p>Se o objetivo é evidenciar o impacto no <b>orçamento</b>, chamamos de <b>receita orçamentária</b>. Se é o impacto no <b>patrimônio</b>, chamamos de <b>Variação Patrimonial Aumentativa (VPA)</b>.</p></div>'+
      '<div class="box trap"><span class="bl">A VPA não espera o dinheiro</span>'+
      '<p>O registro da VPA <b>não depende de prévia execução orçamentária</b> — não depende da arrecadação, mas da <b>ocorrência do fato gerador</b>.</p>'+
      '<p><b>Exemplo:</b> o fato gerador do <b>IPTU</b> ocorre em <b>1º de janeiro</b>. Nessa data já se reconhecem o <b>direito (ativo)</b> e a <b>VPA</b>, ainda que a arrecadação venha meses depois.</p></div>'+
      '<div class="box tip"><span class="bl">O exemplo que a banca adora</span>'+
      '<p>Lançamento em <b>29/12/2023</b>, vencimento e arrecadação em <b>15/01/2024</b>:</p>'+
      '<ul><li>impacto <b>patrimonial</b> em <b>2023</b> — o lançamento ocorreu nesse exercício;</li>'+
      '<li>impacto <b>orçamentário</b> em <b>2024</b> — a arrecadação ocorreu nesse exercício.</li></ul>'+
      '<p>Um mesmo fato, dois exercícios. É disso que o módulo trata.</p></div>')
  ],
  V2:[
    sl("Etapas da receita — PLAR",
      '<div class="box"><span class="bl">As quatro etapas, na ordem</span>'+
      '<ul><li><b>P</b>revisão — planejar e estimar a arrecadação que constará na <b>proposta orçamentária</b>.</li>'+
      '<li><b>L</b>ançamento — ato que verifica a <b>procedência do crédito fiscal</b> e a <b>pessoa devedora</b>.</li>'+
      '<li><b>A</b>rrecadação — <b>entrega dos recursos devidos ao Tesouro pelos contribuintes</b>.</li>'+
      '<li><b>R</b>ecolhimento — <b>transferência dos valores arrecadados à conta específica do Tesouro</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Arrecadação × recolhimento</span>'+
      '<p>É o par que a banca inverte. <b>Arrecadação</b> é o contribuinte pagando. <b>Recolhimento</b> é o dinheiro chegando à conta única do Tesouro.</p>'+
      '<p>E cuidado com a ordem: o <b>lançamento vem antes</b> da arrecadação.</p></div>'+
      '<div class="box"><span class="bl">Consequência prática</span>'+
      '<p>As <b>receitas lançadas e não recebidas</b> pertencem ao exercício em que forem <b>efetivamente arrecadadas</b> — para fins orçamentários.</p></div>'),
    sl("Etapas da despesa — FDP + Licitação, depois ELP",
      '<div class="box"><span class="bl">Etapa 1 — Planejamento (quatro fases)</span>'+
      '<ul><li><b>F</b>ixação da despesa</li><li><b>D</b>escentralização de créditos orçamentários</li>'+
      '<li><b>P</b>rogramação orçamentária e financeira</li><li><b>Licitação</b> e contratação</li></ul></div>'+
      '<div class="box"><span class="bl">Etapa 2 — Execução (três fases)</span>'+
      '<ul><li><b>E</b>mpenho</li><li><b>L</b>iquidação</li><li><b>P</b>agamento</li></ul></div>'+
      '<div class="box trap"><span class="bl">Onde cai o corte</span>'+
      '<p><b>Fixação</b> e <b>licitação</b> são <b>planejamento</b>, não execução. A execução começa no <b>empenho</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Despesa orçamentária × VPD</span>'+
      '<p>Impacto no <b>orçamento</b> → <b>despesa orçamentária</b>, reconhecida no <b>empenho</b>.<br>'+
      'Impacto no <b>patrimônio</b> → <b>Variação Patrimonial Diminutiva (VPD)</b>, reconhecida no <b>fato gerador</b>: <b>em regra na liquidação</b>, mas em alguns casos já no <b>empenho</b>.</p></div>'),
    sl("Despesa executada e DEA",
      '<div class="box"><span class="bl">O exemplo numérico</span>'+
      '<p>Dotação inicial de <b>R$ 20 milhões</b> mais créditos adicionais de <b>R$ 800 mil</b>. Foram <b>empenhados R$ 18 milhões</b>, <b>liquidados R$ 17 milhões</b> e <b>pagos R$ 16 milhões</b>.</p>'+
      '<p>A <b>despesa executada</b> no exercício é de <b>R$ 18 milhões</b> — a <b>empenhada</b>.</p></div>'+
      '<div class="box trap"><span class="bl">No regime orçamentário, pagar não importa</span>'+
      '<p>A despesa é reconhecida quando <b>empenhada</b>. Se foi liquidada ou paga é outra conversa — inclusive é daí que nascem os restos a pagar.</p></div>'+
      '<div class="box"><span class="bl">Despesas de Exercícios Anteriores — art. 37</span>'+
      '<p>Podem ser pagas <b>à conta de dotação específica</b> consignada na Lei Orçamentária do <b>exercício atual</b>. O atendimento de DEA <b>depende</b> de previsão de crédito específico na LOA ou de <b>créditos adicionais</b>.</p></div>'),
    sl("Execução orçamentária — o resumo em duas linhas",
      '<div class="box tip"><span class="bl">Quando ocorre a execução orçamentária</span>'+
      '<ul><li><b>Da despesa:</b> no momento do <b>EMPENHO</b>.</li>'+
      '<li><b>Da receita:</b> no momento da <b>ARRECADAÇÃO</b>.</li></ul>'+
      '<p>Se você guardar só isto do módulo, já acerta boa parte das questões.</p></div>')
  ],
  V3:[
    sl("O empenho cria que tipo de obrigação?",
      '<div class="box"><span class="bl">Art. 58 da Lei 4.320/64</span>'+
      '<p>O empenho de despesa é o <b>ato emanado de autoridade competente que cria para o Estado obrigação de pagamento pendente ou não de implemento de condição</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Que “obrigação” é essa?</span>'+
      '<p><b>Não</b> é a obrigação <b>patrimonial</b> (passivo exigível) — esta se caracteriza por um <b>fato gerador já ocorrido</b>.</p>'+
      '<p>É o <b>comprometimento de recurso financeiro</b> do ente: uma <b>obrigação financeira</b>, para fins de cálculo do <b>superávit financeiro</b>.</p></div>'+
      '<div class="box"><span class="bl">A consequência</span>'+
      '<p>O registro da obrigação patrimonial <b>independe da execução orçamentária</b>. Logo, o passivo exigível <b>pode ou não</b> ser registrado junto com o empenho — a depender de ter ocorrido, ou não, o <b>fato gerador</b>.</p></div>'),
    sl("Superávit financeiro",
      '<div class="box"><span class="bl">Conceito</span>'+
      '<p><b>Diferença positiva entre o ativo financeiro e o passivo financeiro</b> de determinado exercício. Indica que a entidade tem <b>excedente de recursos</b> em relação às suas obrigações.</p></div>'+
      '<div class="box tip"><span class="bl">Exemplo</span>'+
      '<p>Prefeitura com <b>R$ 10 milhões</b> de ativo financeiro e <b>R$ 8 milhões</b> de obrigações financeiras apura <b>R$ 2 milhões</b> de superávit financeiro — valor que pode servir de <b>fonte para créditos adicionais</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Não confunda</span>'+
      '<p><b>Superávit financeiro</b> = ativo financeiro − passivo financeiro (um <b>saldo patrimonial</b>, apurado no balanço).<br>'+
      '<b>Resultado da execução orçamentária</b> = receita arrecadada − despesa empenhada (um <b>fluxo do exercício</b>).</p>'+
      '<p>E lembre: a <b>emissão do empenho</b> constitui, na ótica orçamentária, <b>despesa orçamentária</b> e <b>passivo financeiro</b> — logo, <b>reduz</b> o superávit financeiro.</p></div>')
  ]
};

var EX = {
S1:{t:"gap", instr:"Complete o art. 35 da Lei 4.320/64",
  before:"Pertencem ao exercício financeiro as receitas nele ",
  after:" e as despesas nele legalmente empenhadas.",
  options:["arrecadadas","lançadas","previstas"], answer:0,
  why:"Arrecadadas — é o regime <b>orçamentário</b>."},

S2:{t:"mc", instr:"O art. 35 da Lei 4.320/64 estabelece regra de qual regime?",
  options:["Orçamentário","Patrimonial","De competência integral","De caixa integral"],
  answer:0,
  why:"É a troca mais cobrada do artigo."},

S3:{t:"sort", instr:"Em que momento cada regime reconhece?",
  buckets:["Regime orçamentário","Regime patrimonial"],
  items:[["Receita: arrecadação",0],["Despesa: empenho",0],
         ["Receita: fato gerador (lançamento)",1],["Despesa: fato gerador (em regra, liquidação)",1]],
  why:"Orçamentário olha a execução; patrimonial olha o fato gerador."},

S4:{t:"sort", instr:"Como se chama, conforme o foco?",
  buckets:["Foco no orçamento","Foco no patrimônio"],
  items:[["Receita orçamentária",0],["Despesa orçamentária",0],
         ["Variação Patrimonial Aumentativa",1],["Variação Patrimonial Diminutiva",1]],
  why:"Mesmo fato, dois nomes e, às vezes, dois exercícios."},

S5:{t:"mc", instr:"Receita lançada em 29/12/2023 e arrecadada em 15/01/2024 provoca impacto:",
  options:["Patrimonial em 2023 e orçamentário em 2024",
           "Orçamentário em 2023 e patrimonial em 2024",
           "Patrimonial e orçamentário em 2023",
           "Patrimonial e orçamentário em 2024"],
  answer:0,
  why:"Lançamento → patrimonial. Arrecadação → orçamentário."},

S6:{t:"order", instr:"Ordene as etapas da receita orçamentária",
  items:["Previsão","Lançamento","Arrecadação","Recolhimento"],
  why:"Mnemônico <b>PLAR</b>."},

S7:{t:"match", instr:"Ligue cada etapa da receita ao que ela é",
  pairs:[["Previsão","Planejar e estimar a arrecadação da proposta orçamentária"],
         ["Lançamento","Verificar a procedência do crédito fiscal e a pessoa devedora"],
         ["Arrecadação","Entrega dos recursos ao Tesouro pelos contribuintes"],
         ["Recolhimento","Transferência dos valores à conta específica do Tesouro"]],
  why:"Arrecadação e recolhimento são o par que a banca inverte."},

S8:{t:"mc", instr:"A receita lançada e não recebida pertence, para fins orçamentários, ao exercício:",
  options:["Em que for efetivamente arrecadada","Do lançamento",
           "Da previsão na LOA","Do vencimento do tributo"],
  answer:0,
  why:"Consequência do art. 35, I."},

S9:{t:"sort", instr:"Planejamento ou execução da despesa?",
  buckets:["Planejamento","Execução"],
  items:[["Fixação da despesa",0],["Descentralização de créditos orçamentários",0],
         ["Programação orçamentária e financeira",0],["Licitação e contratação",0],
         ["Empenho",1],["Liquidação",1],["Pagamento",1]],
  why:"<b>FDP + Licitação</b> no planejamento; <b>ELP</b> na execução."},

S10:{t:"order", instr:"Ordene as fases da execução da despesa",
  items:["Empenho","Liquidação","Pagamento"],
  why:"A execução orçamentária se consuma já no <b>empenho</b>."},

S11:{t:"mc", instr:"Dotação de R$ 20,8 mi; empenhados 18, liquidados 17, pagos 16. A despesa executada foi:",
  options:["R$ 18 milhões","R$ 17 milhões","R$ 16 milhões","R$ 20,8 milhões"],
  answer:0,
  why:"Despesa executada é a <b>empenhada</b> — pagar não importa aqui."},

S12:{t:"gap", instr:"Complete o art. 37 (DEA)",
  before:"As despesas de exercícios anteriores poderão ser pagas à conta de ",
  after:" consignada na lei orçamentária do exercício atual.",
  options:["dotação específica","dotação global","reserva de contingência"], answer:0,
  why:"Depende de crédito específico na LOA ou de créditos adicionais."},

S13:{t:"wordbank", instr:"Monte a definição de empenho (art. 58)",
  target:["ato","emanado","de","autoridade","competente"],
  extra:["do ordenador de despesa","do contador","por lei"],
  why:"…que cria para o Estado obrigação de pagamento pendente ou não de implemento de condição."},

S14:{t:"mc", instr:"A “obrigação” criada pelo empenho (art. 58) é:",
  options:["Obrigação financeira, para cálculo do superávit financeiro",
           "Obrigação patrimonial, ou seja, passivo exigível",
           "Obrigação contratual com o fornecedor",
           "Obrigação tributária"],
  answer:0,
  why:"A patrimonial exige <b>fato gerador já ocorrido</b>."},

S15:{t:"sort", instr:"Verdadeiro ou falso sobre passivo e empenho?",
  buckets:["Verdadeiro","Falso"],
  items:[["O registro da obrigação patrimonial independe da execução orçamentária",0],
         ["O passivo exigível pode ou não ser registrado junto com o empenho",0],
         ["A emissão do empenho constitui passivo financeiro",0],
         ["Todo empenho gera imediatamente um passivo exigível",1],
         ["A obrigação patrimonial dispensa fato gerador ocorrido",1]],
  why:"O que decide é a <b>ocorrência do fato gerador</b>."},

S16:{t:"sort", instr:"Superávit financeiro ou resultado da execução orçamentária?",
  buckets:["Superávit financeiro","Resultado da execução orçamentária"],
  items:[["Ativo financeiro menos passivo financeiro",0],
         ["Saldo apurado no balanço patrimonial",0],
         ["Serve de fonte para créditos adicionais",0],
         ["Receita arrecadada menos despesa empenhada",1],
         ["Fluxo apurado no exercício",1]],
  why:"Um é <b>saldo</b>, o outro é <b>fluxo</b>."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Pública 03","https://www.tecconcursos.com.br/s/Q2ojiP","Q2ojiP"],
  ["Caderno FCC — Contabilidade Pública 03","https://www.tecconcursos.com.br/s/Q2ojiT","Q2ojiT"],
  ["Caderno FGV — Contabilidade Pública 03","https://www.tecconcursos.com.br/s/Q2ojie","Q2ojie"],
  ["Caderno VUNESP — Contabilidade Pública 03","https://www.tecconcursos.com.br/s/Q2ojik","Q2ojik"]
];
var TECNOTA = "O autor sugere <b>20 questões</b> neste assunto — é mais que o normal, porque regimes e estágios aparecem em quase toda prova de contabilidade pública. Para o TJPR, comece pelo caderno da <b>FCC</b>.";

var UNITS = [
  {n:1, title:"Os dois regimes", cvar:"u2", lessons:[
    {id:"R1", type:"teoria", title:"Art. 35 e as duas óticas",        xp:10, data:"V1"},
    {id:"R2", type:"drill",  title:"Praticar · orçamentário × patrimonial", xp:25, data:["S1","S2","S3","T0","T1","T2","T3","T4","T5"]},
    {id:"R3", type:"drill",  title:"Praticar · receita orçamentária e VPA", xp:25, data:["S4","S5","T6","T7","T8","T9","T10","T11","T12","T13"]},
    {id:"R4", type:"flash",  title:"Flashcards · os dois regimes",    xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11]}
  ]},
  {n:2, title:"Etapas da receita e da despesa", cvar:"u1", lessons:[
    {id:"R5", type:"teoria", title:"PLAR, FDP e execução",            xp:10, data:"V2"},
    {id:"R6", type:"drill",  title:"Praticar · etapas da receita",    xp:25, data:["S6","S7","S8","T14","T15","T16","T17","T18","T19"]},
    {id:"R7", type:"drill",  title:"Praticar · etapas da despesa",    xp:25, data:["S9","S10","T20","T21","T22","T23","T24"]},
    {id:"R8", type:"drill",  title:"Praticar · despesa executada e DEA", xp:25, data:["S11","S12","T25","T26","T27","T28","T29","T30","T31"]},
    {id:"R9", type:"flash",  title:"Flashcards · etapas",             xp:15, data:[12,13,14,15,16,17,18,19,20,21,22,23,24]}
  ]},
  {n:3, title:"Empenho, passivo e superávit", cvar:"u3", lessons:[
    {id:"R10",type:"teoria", title:"Art. 58 e o superávit financeiro",xp:10, data:"V3"},
    {id:"R11",type:"drill",  title:"Praticar · a obrigação do empenho", xp:25, data:["S13","S14","S15","T32","T33","T34","T35","T36","T37","T38"]},
    {id:"R12",type:"drill",  title:"Praticar · superávit financeiro", xp:25, data:["S16","T39","T40","T41","T42","T43"]},
    {id:"R13",type:"flash",  title:"Flashcards · empenho e superávit",xp:15, data:[25,26,27,28,29,30,31,32,33]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Rrev",type:"review",title:"Revisão geral do módulo",         xp:60, data:null},
    {id:"R14",type:"missao", title:"Missão TEC Concursos",            xp:15, data:null},
    {id:"R15",type:"prova",  title:"Simulado cronometrado",           xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo — é a literalidade do art. 35 da Lei 4.320/64, transcrito no Resumo: pertencem ao exercício financeiro <b>I – as receitas nele arrecadadas</b> e <b>II – as despesas nele legalmente empenhadas</b>.</p><p>Guarde o par: receita segue a <b>arrecadação</b>, despesa segue o <b>empenho</b>. É o dispositivo que sustenta todo o regime orçamentário do módulo.</p><p class='fb-fonte'>Resumo 03 · <i>Regimes orçamentário e patrimonial — art. 35</i></p>",
1:"<p>Errado por uma palavra. O Resumo destaca exatamente isto: o art. 35 da Lei 4.320/64 se refere ao <b>regime orçamentário</b> e <b>não</b> ao regime contábil (patrimonial).</p><p>É a troca preferida da banca. No patrimonial, receitas e despesas são reconhecidas no momento do <b>fato gerador</b> — e isso não está no art. 35.</p><p class='fb-fonte'>Resumo 03 · <i>Regimes orçamentário e patrimonial — art. 35</i></p>",
2:"<p>Certo. No quadro do Resumo, se a natureza da informação for <b>orçamentária</b>, as receitas só serão reconhecidas quando forem <b>arrecadadas</b> (art. 35, I).</p><p>O contraponto do mesmo quadro: na natureza <b>patrimonial</b>, a receita é reconhecida no momento do <b>fato gerador</b>, que em regra coincide com o <b>lançamento</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da receita pública — natureza da informação</i></p>",
3:"<p>Errado no marco. No regime orçamentário a despesa é reconhecida no momento do <b>empenho</b>, não do pagamento (art. 35, II).</p><p>A OBSERVAÇÃO 1 do Resumo fecha a questão: reconhecidas quando forem empenhadas, <b>não importa se elas foram pagas</b>. Pagamento é apenas a última fase da execução (empenho, liquidação, pagamento).</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da despesa — OBSERVAÇÕES</i></p>",
4:"<p>Certo — é o quadro do Resumo: se a natureza da informação for <b>patrimonial</b>, as receitas e as despesas serão reconhecidas no momento do <b>fato gerador</b>.</p><p>Na prática que o material detalha: a receita, no <b>lançamento</b>; a despesa, em regra na <b>liquidação</b> (e, em alguns casos, já no empenho).</p><p class='fb-fonte'>Resumo 03 · <i>Regimes orçamentário e patrimonial</i></p>",
5:"<p>Certo pela classificação doutrinária usual do art. 35: caixa para a receita (arrecadação) e competência para a despesa (empenho) — daí o apelido de <b>regime misto</b>.</p><p>Atenção ao que o Resumo faz questão de dizer: o art. 35 trata do <b>regime orçamentário</b>, e não do regime contábil. O rótulo misto descreve o art. 35, não o reconhecimento patrimonial.</p><p class='fb-fonte off'>Não consta do Resumo 03 — a expressão <i>regime misto</i> não aparece no material, que se limita a opor natureza orçamentária e patrimonial.</p>",
6:"<p>Errado. O quadro <b>ATENÇÃO!</b> do Resumo diz o oposto: as receitas <b>lançadas e não recebidas</b> pertencerão ao exercício em que forem <b>efetivamente arrecadadas</b>.</p><p>Lançamento é marco <b>patrimonial</b>; arrecadação é marco <b>orçamentário</b>. A assertiva usou o lançamento para fins orçamentários — troca clássica.</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da receita pública — ATENÇÃO!</i></p>",
7:"<p>Certo — é o esquema do Resumo: se o objetivo for evidenciar o impacto no <b>orçamento</b>, chamamos a receita de <b>receita orçamentária</b>.</p><p>O outro lado do mesmo esquema: impacto no <b>patrimônio</b> → <b>Variação Patrimonial Aumentativa (VPA)</b>. Mesmo fato, dois nomes, conforme a ótica que se quer evidenciar.</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da receita pública — impacto no orçamento x patrimônio</i></p>",
8:"<p>Certo, na letra do esquema: impacto no <b>patrimônio</b> → chamamos a receita de <b>Variação Patrimonial Aumentativa (VPA)</b>.</p><p>Espelhe com a despesa, que o Resumo traz mais adiante: impacto no patrimônio → <b>Variação Patrimonial Diminutiva (VPD)</b>. Orçamento fica com receita e despesa <i>orçamentárias</i>.</p><p class='fb-fonte'>Resumo 03 · <i>Receita — VPA</i></p>",
9:"<p>Errado. O quadro <b>ATENÇÃO!</b> é literal: o registro de uma <b>VPA não depende de prévia execução orçamentária</b>, ou seja, não depende da arrecadação da receita, mas sim da <b>ocorrência do fato gerador</b>.</p><p>O exemplo do material é o IPTU: fato gerador em 1º de janeiro, reconhecimento do direito e da VPA nessa data, mesmo que a arrecadação venha só depois.</p><p class='fb-fonte'>Resumo 03 · <i>ATENÇÃO! — VPA independe de execução orçamentária</i></p>",
10:"<p>Certo — é o exemplo do Resumo, com esta mesma data. O fato gerador do IPTU ocorre em <b>1º de janeiro</b> de cada ano.</p><p>Logo, o reconhecimento do <b>direito (ativo)</b> e da <b>VPA</b> deve ser feito no momento do fato gerador, e <b>não</b> no momento da arrecadação, que ocorrerá futuramente.</p><p class='fb-fonte'>Resumo 03 · <i>ATENÇÃO! — exemplo do IPTU</i></p>",
11:"<p>Certo — é exatamente o exemplo do servidor Bruno. Lançamento em <b>29/12/2023</b> de receita de <b>R$ 70.000</b>, com vencimento e arrecadação em <b>15/01/2024</b>.</p><p>Resultado do material: impacto <b>patrimonial em 2023</b> (ano do lançamento) e impacto <b>orçamentário em 2024</b> (ano da arrecadação).</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da receita — EXEMPLO (Bruno)</i></p>",
12:"<p>Errado — o exemplo do Resumo prova o contrário. A mesma receita atinge <b>exercícios diferentes</b> conforme a ótica.</p><p>Bruno lança R$ 70.000 em <b>29/12/2023</b> e a arrecadação ocorre em <b>15/01/2024</b>: impacto patrimonial em <b>2023</b>, impacto orçamentário em <b>2024</b>. É justamente a consequência de haver dois regimes convivendo.</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da receita — EXEMPLO (Bruno)</i></p>",
13:"<p>Certo. No quadro de natureza da informação, a receita, na ótica <b>patrimonial</b>, é reconhecida no momento do <b>fato gerador</b> — e o próprio Resumo esclarece entre parênteses: <b>no momento do lançamento</b>.</p><p>Não confunda com a ótica orçamentária, presa à <b>arrecadação</b> pelo art. 35, I.</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da receita pública — natureza da informação</i></p>",
14:"<p>Certo — são as quatro etapas do MCASP na ordem do Resumo: <b>previsão, lançamento, arrecadação e recolhimento</b>.</p><p>Mnemônico do material: <b>PLAR</b>. Ele guarda a ordem e evita a troca que a banca mais tenta (arrecadação antes do lançamento, ou recolhimento antes da arrecadação).</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da receita pública — mnemônico PLAR</i></p>",
15:"<p>Certo, na letra do esquema: <b>previsão</b> é planejar e estimar a arrecadação das receitas que constará na <b>proposta orçamentária</b>.</p><p>É a primeira letra do <b>PLAR</b>, e a única etapa que ainda está no plano da estimativa — as outras três já lidam com crédito concreto.</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da receita pública — previsão</i></p>",
16:"<p>Certo — definição literal do quadro: <b>lançamento</b> é o ato que verifica a <b>procedência do crédito fiscal</b> e a <b>pessoa devedora</b>.</p><p>Guarde também o efeito contábil: é no lançamento que se dá o reconhecimento <b>patrimonial</b> da receita (fato gerador), enquanto o orçamentário só vem na arrecadação.</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da receita pública — lançamento</i></p>",
17:"<p>Errado — trocou as definições. <b>Arrecadação</b> é a <b>entrega dos recursos devidos ao Tesouro Nacional pelos contribuintes</b>.</p><p>A transferência dos valores arrecadados à <b>conta específica do Tesouro Nacional</b> é o <b>recolhimento</b>, a quarta letra do <b>PLAR</b>. O contribuinte entrega (arrecada-se); depois transfere-se para a conta única (recolhe-se).</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da receita pública — arrecadação x recolhimento</i></p>",
18:"<p>Errado pelo mesmo par invertido. <b>Recolhimento</b> é a <b>transferência dos valores arrecadados à conta específica do Tesouro Nacional</b>.</p><p>A entrega dos recursos devidos ao Tesouro <b>pelos contribuintes</b> é a <b>arrecadação</b>. Na ordem do <b>PLAR</b>, arrecadação vem antes; o recolhimento só existe sobre o que já foi arrecadado.</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da receita pública — arrecadação x recolhimento</i></p>",
19:"<p>Errado — inverteu a ordem. A sequência do Resumo é <b>previsão, lançamento, arrecadação e recolhimento</b>.</p><p>A assertiva pulou o lançamento para depois da arrecadação. O mnemônico <b>PLAR</b> resolve em um segundo: <b>P</b>revisão, <b>L</b>ançamento, <b>A</b>rrecadação, <b>R</b>ecolhimento.</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da receita pública — mnemônico PLAR</i></p>",
20:"<p>Certo — segundo o MCASP, como registra o Resumo, são etapas da despesa o <b>(1) Planejamento</b> e a <b>(2) Execução</b>.</p><p>O material ainda dá a contagem: o planejamento se compõe de mais <b>4 fases</b> e a execução, de mais <b>3 fases</b> (estágios). Etapas são duas; fases, sete.</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da despesa pública</i></p>",
21:"<p>Certo — são as quatro fases do <b>planejamento</b> no esquema do Resumo: fixação da despesa, descentralização de créditos orçamentários, programação orçamentária e financeira, e licitação e contratação.</p><p>Mnemônico do material: <b>FDP + LICITAÇÃO</b>. Tudo o que vem antes do empenho ainda é planejamento.</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da despesa — mnemônico FDP + LICITAÇÃO</i></p>",
22:"<p>Certo — a etapa de <b>execução</b> tem exatamente três fases no esquema: <b>empenho, liquidação e pagamento</b>.</p><p>Vale ligar com o regime: o <b>empenho</b> marca o reconhecimento orçamentário da despesa; a <b>liquidação</b>, em regra, o reconhecimento patrimonial (fato gerador); o pagamento não reconhece nada, só quita.</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da despesa — execução</i></p>",
23:"<p>Errado. <b>Licitação e contratação</b> é a quarta fase do <b>PLANEJAMENTO</b>, não da execução.</p><p>Pelo mnemônico do Resumo, o planejamento é <b>FDP + LICITAÇÃO</b>; a execução guarda apenas <b>empenho, liquidação e pagamento</b>. Licitar ainda é preparar a despesa, não executá-la.</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da despesa — planejamento x execução</i></p>",
24:"<p>Errado. A <b>fixação da despesa</b> é a primeira fase do <b>PLANEJAMENTO</b> — é o <b>F</b> do mnemônico <b>FDP + LICITAÇÃO</b>.</p><p>A execução só começa no <b>empenho</b> e termina no pagamento. Compare com a receita: lá, a <b>previsão</b> ocupa lugar equivalente ao da fixação aqui.</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da despesa — planejamento</i></p>",
25:"<p>Certo — é a <b>OBSERVAÇÃO 1</b> do Resumo, quase com estas palavras: no regime orçamentário, as despesas serão reconhecidas quando forem <b>empenhadas</b>; portanto, <b>não importa se elas foram pagas</b>.</p><p>É o art. 35, II: pertencem ao exercício financeiro as despesas nele <b>legalmente empenhadas</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da despesa — OBSERVAÇÕES, item 1</i></p>",
26:"<p>Certo. No quadro da natureza da informação, a despesa, na ótica <b>patrimonial</b>, é reconhecida no momento do <b>fato gerador</b> — e o Resumo completa: <b>em regra, no momento da liquidação</b>.</p><p>Repare no cuidado do material: <b>em regra</b>. Em alguns casos o fato gerador já se verifica no <b>empenho</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da despesa — natureza da informação</i></p>",
27:"<p>Errado pela palavra <b>sempre</b>. O Resumo escreve que o reconhecimento patrimonial ocorre no fato gerador, <b>em regra</b> no momento da <b>liquidação</b>, <b>mas em alguns casos será no momento do empenho</b>.</p><p>Mesma frase do item anterior, com um advérbio absoluto colado. Generalização fechada, em regime de reconhecimento, costuma derrubar a assertiva.</p><p class='fb-fonte'>Resumo 03 · <i>Etapas da despesa — natureza da informação</i></p>",
28:"<p>Certo — esquema do Resumo: se o objetivo for evidenciar o impacto no <b>patrimônio</b>, chamamos a despesa de <b>Variação Patrimonial Diminutiva (VPD)</b>.</p><p>E se o objetivo for o <b>orçamento</b>, chamamos de <b>despesa orçamentária</b>. É o espelho exato do par receita orçamentária / VPA.</p><p class='fb-fonte'>Resumo 03 · <i>Despesa — VPD</i></p>",
29:"<p>Errado nos dois marcos. O quadro do Resumo é direto: a <b>execução orçamentária da despesa</b> ocorre no momento do <b>EMPENHO</b>; a <b>da receita</b>, no momento da <b>ARRECADAÇÃO</b>.</p><p>A assertiva colocou liquidação e lançamento — que são justamente os marcos <b>patrimoniais</b>. Trocou a ótica nas duas pontas.</p><p class='fb-fonte'>Resumo 03 · <i>Execução orçamentária da despesa e da receita</i></p>",
30:"<p>Certo — é o exemplo numérico do Resumo, com estes mesmos valores. Dotação inicial de <b>R$ 20 milhões</b> mais créditos adicionais de <b>R$ 800 mil</b>.</p><p>Do montante, <b>R$ 18 milhões</b> empenhados, <b>R$ 17 milhões</b> liquidados e <b>R$ 16 milhões</b> pagos. A despesa <b>executada</b> no exercício corresponde aos <b>R$ 18 milhões empenhados</b> (art. 35, II).</p><p class='fb-fonte'>Resumo 03 · <i>Exemplo de execução da despesa</i></p>",
31:"<p>Errado — a banca ofereceu o valor <b>pago</b>. No exemplo do Resumo, a despesa executada é a <b>empenhada</b>: <b>R$ 18 milhões</b>, e não os R$ 16 milhões pagos.</p><p>A OBSERVAÇÃO 1 do material resolve: as despesas são reconhecidas quando <b>empenhadas</b>, não importando se foram pagas. Liquidado (R$ 17 mi) e pago (R$ 16 mi) são distratores.</p><p class='fb-fonte'>Resumo 03 · <i>Exemplo de execução da despesa</i></p>",
32:"<p>Certo — é a <b>OBSERVAÇÃO 2</b>: as <b>Despesas de Exercícios Anteriores (DEA)</b> poderão ser pagas à conta de <b>dotação específica</b> consignada na Lei Orçamentária do exercício atual (art. 37 da Lei 4.320/64).</p><p>Ou seja, a despesa velha entra pelo orçamento novo, desde que haja rubrica própria.</p><p class='fb-fonte'>Resumo 03 · <i>OBSERVAÇÕES, item 2 — DEA</i></p>",
33:"<p>Errado — inverteu a conclusão do material. O Resumo diz expressamente que o atendimento de <b>DEA depende de previsão de crédito específico</b> na lei orçamentária ou de créditos adicionais.</p><p>Sem dotação específica, não há pagamento de despesa de exercício anterior. É a leitura do art. 37 da Lei 4.320/64 registrada na OBSERVAÇÃO 2.</p><p class='fb-fonte'>Resumo 03 · <i>OBSERVAÇÕES, item 2 — DEA</i></p>",
34:"<p>Certo — literalidade do art. 58 da Lei 4.320/64, transcrito no Resumo: o empenho é o <b>ato emanado de autoridade competente</b> que cria para o Estado <b>obrigação de pagamento pendente ou não de implemento de condição</b>.</p><p>Fique com a palavra <b>obrigação</b>: é dela que sai o comentário seguinte do material, sobre qual obrigação o artigo realmente quis dizer.</p><p class='fb-fonte'>Resumo 03 · <i>Passivo x empenho — art. 58</i></p>",
35:"<p>Errado — é justamente a advertência do COMENTÁRIO do Resumo. Quando o art. 58 usa a palavra <b>obrigação</b>, ele <b>não</b> se refere à obrigação patrimonial (passivo exigível).</p><p>Refere-se ao <b>comprometimento de recurso financeiro</b> da entidade que empenhou, isto é, a uma <b>obrigação financeira</b> para fins de cálculo do superávit financeiro.</p><p class='fb-fonte'>Resumo 03 · <i>Passivo x empenho — COMENTÁRIO ao art. 58</i></p>",
36:"<p>Certo — é a razão que o Resumo dá para afastar o art. 58 do passivo exigível: uma <b>obrigação patrimonial</b> é caracterizada por um <b>fato gerador já ocorrido</b>.</p><p>No empenho, o fato gerador pode ainda não ter ocorrido — por isso ele cria obrigação <b>financeira</b>, não patrimonial.</p><p class='fb-fonte'>Resumo 03 · <i>Passivo x empenho — COMENTÁRIO ao art. 58</i></p>",
37:"<p>Errado. O COMENTÁRIO do Resumo afirma o contrário: o registro da obrigação patrimonial <b>independe da execução orçamentária (empenho)</b>.</p><p>É o mesmo raciocínio da VPA, do início do material: o que comanda o registro patrimonial é a <b>ocorrência do fato gerador</b>, não a execução do orçamento.</p><p class='fb-fonte'>Resumo 03 · <i>Passivo x empenho — COMENTÁRIO ao art. 58</i></p>",
38:"<p>Certo — palavras do Resumo: uma obrigação patrimonial (passivo exigível) <b>pode, ou não</b>, ser registrada <b>concomitantemente</b> com o empenho da despesa orçamentária correspondente.</p><p>O critério do material é único: <b>a depender se ocorreu, ou não, o fato gerador</b>. Ocorreu junto com o empenho, registra-se junto; não ocorreu, o passivo espera.</p><p class='fb-fonte'>Resumo 03 · <i>Passivo x empenho — COMENTÁRIO ao art. 58</i></p>",
39:"<p>Certo — é a <b>OBSERVAÇÃO 3</b>: a emissão do empenho, na ótica orçamentária, constitui uma <b>despesa orçamentária</b> e um <b>passivo financeiro</b> para fins de cálculo do superávit financeiro.</p><p>Note a coerência com o art. 58: obrigação <b>financeira</b>, e não passivo exigível patrimonial.</p><p class='fb-fonte'>Resumo 03 · <i>OBSERVAÇÕES, item 3</i></p>",
40:"<p>Certo — definição da <b>OBSERVAÇÃO 4</b>: o superávit financeiro indica a <b>diferença positiva entre o ativo financeiro e o passivo financeiro</b> de determinado exercício financeiro.</p><p>O Resumo acrescenta a leitura econômica: é indicador de que a entidade possui <b>excedente de recursos</b> em relação às suas obrigações.</p><p class='fb-fonte'>Resumo 03 · <i>OBSERVAÇÕES, item 4 — superávit financeiro</i></p>",
41:"<p>Errado — trocou os termos da conta. Superávit <b>financeiro</b> é a diferença positiva entre <b>ativo financeiro</b> e <b>passivo financeiro</b> do exercício, como define a OBSERVAÇÃO 4.</p><p>A diferença entre receita arrecadada e despesa empenhada é resultado da execução do orçamento, não o conceito do Resumo. Guarde: superávit financeiro é conta de <b>saldos</b>, não de fluxos do exercício.</p><p class='fb-fonte'>Resumo 03 · <i>OBSERVAÇÕES, item 4 — superávit financeiro</i></p>",
42:"<p>Certo — é o exemplo do Resumo, com estes mesmos números. Prefeitura com <b>R$ 10 milhões</b> e obrigações financeiras de <b>R$ 8 milhões</b> apura superávit financeiro de <b>R$ 2 milhões</b>.</p><p>O material lembra o destino do valor: investimentos, pagamento de dívidas ou outras finalidades determinadas pela legislação vigente.</p><p class='fb-fonte'>Resumo 03 · <i>Exemplo de superávit</i></p>",
43:"<p>Certo — é a frase de abertura do capítulo: a <b>contabilidade aplicada ao setor público (CASP)</b> mantém um processo de registro <b>apto</b> para sustentar o dispositivo legal do regime da receita orçamentária, conforme o art. 35 da Lei 4.320/64.</p><p>É o que permite a convivência das duas óticas: a mesma operação gera informação <b>orçamentária</b> e <b>patrimonial</b>, em momentos que podem ser diferentes.</p><p class='fb-fonte'>Resumo 03 · <i>Regimes orçamentário e patrimonial</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"03", nome:"Regimes orçamentário e patrimonial", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
