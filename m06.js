/* AFO — Módulo 06: Créditos adicionais */
window.MOD = window.MOD || {};
window.MOD.m06 = (function(){
"use strict";

var CARDS = [
  ["O que é crédito orçamentário?","A <b>autorização legislativa consignada na LOA para a realização de cada despesa</b>. Compreende o conjunto de categorias classificatórias que especificam as ações do orçamento."],
  ["O que é dotação?","O <b>montante de recurso financeiro</b> reservado para cada crédito orçamentário — o <b>limite de recurso financeiro autorizado</b>."],
  ["Crédito orçamentário × dotação","O <b>crédito é portador de uma dotação</b>. Crédito = autorização; dotação = o dinheiro reservado."],
  ["O que são créditos orçamentários iniciais (ou ordinários)?","Os que <b>já estão consignados na LOA</b> — o exercício financeiro já se inicia com eles."],
  ["O que são créditos adicionais?","<b>Art. 40 da Lei 4.320/64:</b> as <b>autorizações de despesas não computadas ou insuficientemente dotadas</b> na Lei de Orçamento. São <b>mecanismos retificadores da LOA</b>."],
  ["Quais as três espécies de créditos adicionais (art. 41)?","<b>I</b> <b>suplementares</b> — destinados a <b>reforço</b> de dotação orçamentária; <b>II</b> <b>especiais</b> — destinados a despesas para as quais <b>não haja dotação orçamentária específica</b>; <b>III</b> <b>extraordinários</b> — destinados a despesas <b>urgentes e imprevistas</b>, em caso de <b>guerra, comoção intestina ou calamidade pública</b>."],
  ["Diferença entre crédito suplementar e especial","O <b>suplementar reforça dotação já existente</b>; o <b>especial</b> refere-se a despesa <b>para a qual ainda não há dotação específica</b>."],
  ["Qual crédito se usa numa calamidade pública (ex.: pandemia)?","<b>Extraordinário</b> — despesas <b>urgentes e imprevistas</b>. Dizer “especial” é a pegadinha clássica."],
  ["Mnemônico das fontes para créditos suplementares e especiais","<b>ROSERA:</b> <b>R</b>eserva de contingência · <b>O</b>perações de crédito · <b>S</b>uperávit financeiro · <b>E</b>xcesso de arrecadação · <b>R</b>ecursos sem despesas correspondentes · <b>A</b>nulação total ou parcial de dotações."],
  ["Qual a base da “reserva de contingência” como fonte?","<b>Art. 91 do Decreto-Lei nº 200/1967.</b>"],
  ["Qual a base dos “recursos sem despesas correspondentes”?","<b>Art. 166, § 8º, da CF</b> — recursos que, em decorrência de veto, emenda ou rejeição do projeto de LOA, ficarem sem despesas correspondentes."],
  ["O crédito extraordinário depende de fonte de recursos?","<b>Não.</b> Possui <b>caráter emergencial</b> e por isso não depende de indicação de fonte disponível."],
  ["O que é superávit financeiro (art. 43, § 2º)?","A <b>diferença positiva entre o ativo financeiro e o passivo financeiro</b>, conjugando-se ainda os <b>saldos dos créditos adicionais transferidos</b> e as <b>operações de crédito a eles vinculadas</b>."],
  ["Fórmula do superávit financeiro","<b>SF = AF − PF − CAR + OCV</b> — ativo financeiro menos passivo financeiro menos créditos adicionais reabertos (transferidos) mais operações de crédito a eles vinculadas."],
  ["Onde se apura o superávit financeiro?","No <b>Balanço Patrimonial</b> do <b>exercício anterior</b>."],
  ["Três pegadinhas sobre o superávit financeiro","<b>1)</b> “Resultado financeiro apurado no BP do exercício anterior” → ERRADO; <b>2)</b> “apurado no <b>Balanço Financeiro</b>” → ERRADO; <b>3)</b> “apurado no BP do <b>exercício corrente</b>” → ERRADO."],
  ["O que é excesso de arrecadação (art. 43, § 3º)?","O <b>saldo positivo das diferenças acumuladas mês a mês entre a arrecadação prevista e a realizada</b>, considerando-se ainda a <b>tendência do exercício</b>."],
  ["O que se deduz para apurar o excesso de arrecadação?","A <b>tendência de queda do exercício</b> (art. 43, § 3º) e a <b>importância dos créditos extraordinários abertos no exercício</b> (art. 43, § 4º)."],
  ["Fórmula do excesso de arrecadação","<b>EA = receitas arrecadadas além do previsto − tendência de queda − créditos extraordinários abertos no exercício.</b>"],
  ["Economia de despesa é fonte para créditos adicionais?","<b>Não.</b> O excesso de arrecadação é fonte; a <b>economia de despesa não é</b>."],
  ["AF 9.200 · PF 1.800 · CAR 2.600 · OCV 1.200. Qual o SF?","<b>SF = 9.200 − 1.800 − 2.600 + 1.200 = R$ 6.000.</b>"],
  ["Arrecadado além do previsto 3.650 · tendência de queda 1.000 · extraordinários 1.180. Qual o EA?","<b>EA = 3.650 − 1.000 − 1.180 = R$ 1.470.</b>"],
  ["Com SF 6.000, EA 1.470 e anulação de dotações 1.370, quanto há para créditos suplementares?","<b>R$ 8.840</b> (1.370 + 6.000 + 1.470)."],
  ["Qual o único crédito adicional que pode ser autorizado diretamente pela LOA?","O <b>suplementar</b> (art. 165, § 8º, da CF). Por isso constitui <b>exceção ao princípio da exclusividade</b>."],
  ["Como o crédito suplementar se comporta no orçamento?","<b>Incorpora-se ao orçamento</b>, adicionando-se à dotação orçamentária que deva reforçar."],
  ["E os créditos especiais e extraordinários?","<b>Conservam sua especificidade</b>, demonstrando-se as despesas realizadas à conta deles <b>separadamente</b>."],
  ["Qual a vigência dos créditos especiais e extraordinários?","<b>Limitada ao exercício financeiro em que forem autorizados</b>, <b>salvo</b> se o ato de autorização for promulgado nos <b>últimos 4 meses</b> daquele exercício."],
  ["O que acontece se a autorização vier nos últimos 4 meses?","Reabertos <b>nos limites de seus saldos</b>, serão <b>incorporados ao orçamento do exercício financeiro subsequente</b>."],
  ["Quais créditos demandam a abertura de novo programa de trabalho?","Os <b>especiais</b> e os <b>extraordinários</b>."],
  ["Como são autorizados e abertos os créditos suplementares e especiais?","<b>Autorizados por lei</b> e <b>abertos por decreto executivo</b> (art. 42 da Lei 4.320/64). Ou seja, dependem de <b>autorização legislativa</b>."],
  ["O crédito extraordinário precisa de autorização legislativa?","<b>Não</b>, porque possui <b>caráter de urgência</b>."],
  ["O que exige o art. 43 da Lei 4.320/64?","A abertura dos créditos <b>suplementares e especiais</b> depende da <b>existência de recursos disponíveis</b> para ocorrer a despesa e será <b>precedida de exposição justificativa</b>."],
  ["Como se abrem os créditos extraordinários na União?","Podem ser autorizados e abertos por <b>Medida Provisória</b> do Executivo (art. 167, § 3º, c/c art. 62 da CF), por seu caráter de urgência."],
  ["E segundo a Lei nº 4.320/64 (art. 44)?","Os créditos extraordinários serão <b>abertos por decreto do Poder Executivo</b>, que deles dará <b>imediato conhecimento ao Poder Legislativo</b>."],
  ["Como resolver o conflito MP × decreto?","Se o enunciado pedir <b>“de acordo com a Lei nº 4.320”</b>, a resposta é <b>decreto do Executivo</b>. Se pedir pela <b>CF</b>, na União é <b>Medida Provisória</b>."],
  ["E nos entes que não têm Medida Provisória?","Os créditos extraordinários serão <b>abertos por decreto do Poder Executivo</b> (art. 44 da Lei 4.320/64)."],
  ["Créditos extraordinários podem ser ilimitados?","<b>Não.</b> O <b>art. 167, VII, da CF</b> veda a concessão ou utilização de <b>créditos ilimitados</b> — a vedação alcança também os extraordinários."],
  ["Qual desafio ao controle externo o resumo aponta?","A possibilidade de <b>alterações orçamentárias não incluídas no limite de créditos suplementares</b>, feitas em nível mais analítico, dificultando analisar o montante e o impacto da abertura de créditos adicionais."]
];

var QS = [
  ["Crédito orçamentário é a autorização legislativa consignada na lei orçamentária anual para a realização de cada despesa.","C","CESPE","A dotação, por sua vez, é o montante de recurso financeiro reservado para esse crédito."],
  ["Dotação é a autorização legislativa para a realização da despesa, e crédito orçamentário é o montante de recursos financeiros correspondente.","E","FGV","Está invertido: o <b>crédito</b> é a autorização e a <b>dotação</b> é o montante."],
  ["O crédito orçamentário é portador de uma dotação, que representa o limite de recurso financeiro autorizado.","C","FCC","São conceitos complementares, não sinônimos."],
  ["Créditos orçamentários iniciais, ou ordinários, são aqueles já consignados na lei orçamentária anual.","C","VUNESP","O exercício financeiro já se inicia com eles."],
  ["São créditos adicionais as autorizações de despesas não computadas ou insuficientemente dotadas na Lei de Orçamento.","C","CESPE","Literalidade do art. 40 da Lei nº 4.320/1964."],
  ["Os créditos adicionais são mecanismos retificadores da lei orçamentária anual.","C","FCC","Viabilizam a execução de despesas não previstas na elaboração do orçamento."],
  ["Os créditos adicionais classificam-se em suplementares, especiais e extraordinários.","C","FGV","Art. 41 da Lei nº 4.320/1964."],
  ["Créditos suplementares são os destinados a despesas para as quais não haja dotação orçamentária específica.","E","CESPE","Essa é a definição dos créditos <b>especiais</b>. O suplementar destina-se a <b>reforço</b> de dotação."],
  ["Créditos especiais são os destinados a reforço de dotação orçamentária.","E","FCC","Reforço é a função do crédito <b>suplementar</b>."],
  ["Créditos extraordinários são os destinados a despesas urgentes e imprevistas, em caso de guerra, comoção intestina ou calamidade pública.","C","VUNESP","Art. 41, III — as três hipóteses são exemplificativas da urgência e imprevisibilidade."],
  ["A principal diferença entre créditos especiais e suplementares reside em que estes reforçam dotação já existente, enquanto aqueles se referem a despesas sem dotação específica.","C","CESPE","Item literal já cobrado em prova."],
  ["As despesas urgentes não previstas no orçamento e necessárias ao combate de uma pandemia devem ser autorizadas mediante abertura de crédito adicional extraordinário.","C","FGV","Hipótese típica de calamidade pública."],
  ["Reconhecido o estado de calamidade pública, o mecanismo retificador adequado para alocar recursos adicionais ao orçamento é o crédito especial.","E","CESPE","É o crédito <b>extraordinário</b>. Essa troca é a pegadinha mais repetida do módulo."],
  ["São fontes para abertura de créditos suplementares e especiais o superávit financeiro apurado em balanço patrimonial, o excesso de arrecadação e a anulação total ou parcial de dotações.","C","FCC","Ao lado da reserva de contingência, das operações de crédito e dos recursos sem despesas correspondentes."],
  ["A reserva de contingência pode ser utilizada como fonte para abertura de créditos adicionais.","C","FGV","Art. 91 do Decreto-Lei nº 200/1967."],
  ["A economia de despesa constitui fonte de recursos para a abertura de créditos adicionais.","E","CESPE","A <b>economia de despesa não é fonte</b>. Fonte é o <b>excesso de arrecadação</b>."],
  ["O crédito extraordinário depende da indicação prévia de fonte de recursos disponível.","E","VUNESP","Por seu <b>caráter emergencial</b>, não depende de fonte disponível."],
  ["Constituem fonte para créditos suplementares e especiais os recursos que ficarem sem despesas correspondentes em decorrência de veto, emenda ou rejeição do projeto de lei orçamentária.","C","FCC","Art. 166, § 8º, da Constituição Federal."],
  ["O superávit financeiro é a diferença positiva entre o ativo financeiro e o passivo financeiro, conjugando-se ainda os saldos dos créditos adicionais transferidos e as operações de crédito a eles vinculadas.","C","CESPE","Art. 43, § 2º, da Lei nº 4.320/1964."],
  ["O superávit financeiro é apurado no balanço financeiro do exercício anterior.","E","FGV","É apurado no <b>Balanço Patrimonial</b> do exercício anterior."],
  ["O superávit financeiro é apurado no balanço patrimonial do exercício corrente.","E","FCC","Do exercício <b>anterior</b> — a troca do exercício é armadilha frequente."],
  ["O resultado financeiro é apurado no balanço patrimonial do exercício anterior.","E","CESPE","Quem se apura no BP do exercício anterior é o <b>superávit financeiro</b>, não o “resultado financeiro”."],
  ["Na apuração do superávit financeiro, os saldos dos créditos adicionais transferidos são somados ao ativo financeiro.","E","VUNESP","São <b>deduzidos</b>: SF = AF − PF − CAR + OCV."],
  ["Considerando ativo financeiro de R$ 9.200, passivo financeiro de R$ 1.800, créditos adicionais transferidos de R$ 2.600 e operações de crédito vinculadas de R$ 1.200, o superávit financeiro é de R$ 6.000.","C","FGV","9.200 − 1.800 − 2.600 + 1.200 = 6.000."],
  ["Excesso de arrecadação é o saldo positivo das diferenças acumuladas mês a mês entre a arrecadação prevista e a realizada, considerada ainda a tendência do exercício.","C","CESPE","Art. 43, § 3º — e é fonte para créditos suplementares."],
  ["Para apurar o excesso de arrecadação deduz-se a tendência de queda do exercício.","C","FCC","Art. 43, § 3º, parte final."],
  ["Para apurar o excesso de arrecadação deduz-se a importância dos créditos extraordinários abertos no exercício.","C","FGV","Art. 43, § 4º — dedução que a banca costuma omitir."],
  ["Considerando receitas arrecadadas além do previsto de R$ 3.650, tendência de queda de R$ 1.000 e créditos extraordinários abertos de R$ 1.180, o excesso de arrecadação é de R$ 1.470.","C","CESPE","3.650 − 1.000 − 1.180 = 1.470."],
  ["O único crédito adicional que pode ser autorizado diretamente pela lei orçamentária anual é o suplementar.","C","VUNESP","Art. 165, § 8º, da CF — por isso é exceção ao princípio da exclusividade."],
  ["A autorização de crédito suplementar na própria lei orçamentária anual constitui exceção ao princípio da exclusividade.","C","FCC","Ao lado da autorização para contratação de operações de crédito."],
  ["O crédito suplementar conserva sua especificidade, sendo as despesas realizadas à sua conta demonstradas separadamente.","E","CESPE","O suplementar <b>incorpora-se</b> à dotação que reforça. Quem conserva a especificidade são os <b>especiais e extraordinários</b>."],
  ["Os créditos especiais e extraordinários conservam sua especificidade, demonstrando-se separadamente as despesas realizadas à sua conta.","C","FGV","Diferença central em relação ao suplementar."],
  ["Os créditos especiais e extraordinários terão vigência limitada ao exercício financeiro em que forem autorizados.","C","FCC","Salvo se o ato de autorização for promulgado nos últimos quatro meses do exercício."],
  ["Se o ato de autorização do crédito especial for promulgado nos últimos quatro meses do exercício, o crédito será reaberto nos limites de seus saldos e incorporado ao orçamento do exercício subsequente.","C","CESPE","Regra da reabertura — art. 167, § 2º, da CF."],
  ["Os créditos que demandam a abertura de novo programa de trabalho são os suplementares.","E","VUNESP","São os <b>especiais</b> e os <b>extraordinários</b>, pois não há dotação prévia."],
  ["Os créditos suplementares e especiais serão autorizados por lei e abertos por decreto do Poder Executivo.","C","FCC","Art. 42 da Lei nº 4.320/1964."],
  ["Os créditos extraordinários dependem de prévia autorização legislativa.","E","CESPE","Não dependem, em razão de seu caráter de urgência."],
  ["A abertura dos créditos suplementares e especiais depende da existência de recursos disponíveis para ocorrer a despesa e será precedida de exposição justificativa.","C","FGV","Art. 43, caput, da Lei nº 4.320/1964."],
  ["Na União, os créditos extraordinários podem ser autorizados e abertos por medida provisória do Poder Executivo.","C","FCC","Art. 167, § 3º, combinado com o art. 62 da Constituição Federal."],
  ["De acordo com a Lei nº 4.320/1964, os créditos extraordinários serão abertos por medida provisória.","E","FGV","Segundo o <b>art. 44 da Lei nº 4.320</b>, serão abertos por <b>decreto do Poder Executivo</b>, com imediato conhecimento ao Legislativo."],
  ["Os créditos extraordinários serão abertos por decreto do Poder Executivo, que deles dará imediato conhecimento ao Poder Legislativo.","C","CESPE","Art. 44 da Lei nº 4.320/1964."],
  ["Nos entes que não possuem a medida provisória como espécie normativa, os créditos extraordinários serão abertos por decreto do Poder Executivo.","C","VUNESP","Aplicação do art. 44 da Lei nº 4.320/1964."],
  ["Por possuírem caráter emergencial, os créditos extraordinários não se sujeitam a limites.","E","CESPE","O art. 167, VII, da CF veda a concessão ou utilização de <b>créditos ilimitados</b> — inclusive os extraordinários."],
  ["A possibilidade de alterações orçamentárias não incluídas no limite de créditos suplementares dificulta ao controle externo analisar o montante e o impacto da abertura de créditos adicionais.","C","FGV","Ponto cobrado na prova de Auditor do TCU."]
];

var FEY = {
  k1:{ask:"Explique o que são créditos adicionais e suas três espécies.",
    hint:"Comece separando crédito orçamentário de dotação. Depois o art. 40 e os três incisos do art. 41, com a diferença entre suplementar e especial.",
    ref:"A lei orçamentária é organizada na forma de créditos orçamentários, aos quais são consignadas dotações. Crédito orçamentário é a autorização legislativa consignada na lei orçamentária anual para a realização de cada despesa, ao passo que dotação é o montante de recurso financeiro reservado para esse crédito, isto é, o limite de recurso financeiro autorizado; o crédito é, portanto, portador de uma dotação. Os créditos consignados na própria lei orçamentária são os créditos iniciais ou ordinários. Os créditos adicionais, por sua vez, são mecanismos retificadores da lei orçamentária anual, destinados a viabilizar a execução de despesas não previstas na elaboração do orçamento; nos termos do art. 40 da Lei nº 4.320/1964, são as autorizações de despesas não computadas ou insuficientemente dotadas na Lei de Orçamento. O art. 41 classifica-os em três espécies: suplementares, os destinados a reforço de dotação orçamentária; especiais, os destinados a despesas para as quais não haja dotação orçamentária específica; e extraordinários, os destinados a despesas urgentes e imprevistas, em caso de guerra, comoção intestina ou calamidade pública."},
  k2:{ask:"Explique as fontes de recursos para abertura de créditos adicionais, incluindo superávit financeiro e excesso de arrecadação.",
    hint:"Use o mnemônico ROSERA. Depois dê as duas fórmulas e diga onde se apura o superávit financeiro.",
    ref:"São fontes para a abertura de créditos suplementares e especiais a reserva de contingência, as operações de crédito, o superávit financeiro apurado em balanço patrimonial, o excesso de arrecadação, os recursos que ficarem sem despesas correspondentes em decorrência de veto, emenda ou rejeição do projeto de lei orçamentária, e a anulação total ou parcial de dotações. O crédito extraordinário, por possuir caráter emergencial, não depende de fonte de recursos disponível. O superávit financeiro, nos termos do art. 43, § 2º, da Lei nº 4.320/1964, é a diferença positiva entre o ativo financeiro e o passivo financeiro, conjugando-se ainda os saldos dos créditos adicionais transferidos e as operações de crédito a eles vinculadas, sendo apurado no Balanço Patrimonial do exercício anterior. O excesso de arrecadação, conforme o § 3º do mesmo artigo, é o saldo positivo das diferenças acumuladas mês a mês entre a arrecadação prevista e a realizada, considerando-se ainda a tendência do exercício; para sua apuração deduzem-se a tendência de queda e, na forma do § 4º, a importância dos créditos extraordinários abertos no exercício. Registre-se, por fim, que a economia de despesa não constitui fonte para abertura de créditos adicionais."},
  k3:{ask:"Explique o regime de autorização, abertura e vigência dos créditos adicionais.",
    hint:"Quem autoriza, quem abre, o que a LOA pode autorizar diretamente, o que se incorpora e o que conserva especificidade, e a regra dos quatro meses.",
    ref:"Os créditos suplementares e especiais são autorizados por lei e abertos por decreto do Poder Executivo, na forma do art. 42 da Lei nº 4.320/1964, dependendo sua abertura da existência de recursos disponíveis para ocorrer a despesa e sendo precedida de exposição justificativa, conforme o art. 43. O único crédito adicional que pode ser autorizado diretamente na lei orçamentária anual é o suplementar, nos termos do art. 165, § 8º, da Constituição, razão pela qual constitui exceção ao princípio da exclusividade. O crédito suplementar incorpora-se ao orçamento, adicionando-se à dotação orçamentária que deva reforçar, enquanto os créditos especiais e extraordinários conservam sua especificidade, demonstrando-se separadamente as despesas realizadas à sua conta; são também estes os que demandam a abertura de novo programa de trabalho. Os créditos especiais e extraordinários terão vigência limitada ao exercício financeiro em que forem autorizados, salvo se o ato de autorização for promulgado nos últimos quatro meses daquele exercício, caso em que, reabertos nos limites de seus saldos, serão incorporados ao orçamento do exercício financeiro subsequente."},
  k4:{ask:"Explique o regime específico do crédito extraordinário.",
    hint:"Hipóteses, dispensa de autorização e de fonte, e o conflito entre Medida Provisória e decreto — com a chave para resolvê-lo em prova.",
    ref:"O crédito extraordinário destina-se a despesas urgentes e imprevistas, em caso de guerra, comoção intestina ou calamidade pública, na forma do art. 41, III, da Lei nº 4.320/1964. Por seu caráter emergencial, não depende de indicação de fonte de recursos disponível nem de prévia autorização legislativa. Quanto à sua abertura, há dois regimes que a banca costuma confrontar: segundo o art. 167, § 3º, da Constituição, combinado com o art. 62, na União os créditos extraordinários podem ser autorizados e abertos por medida provisória do Poder Executivo; já o art. 44 da Lei nº 4.320/1964 dispõe que serão abertos por decreto do Poder Executivo, que deles dará imediato conhecimento ao Poder Legislativo. Se o enunciado invocar expressamente a Lei nº 4.320, a resposta é o decreto; se invocar a Constituição, na União é a medida provisória. Nos entes que não possuem a medida provisória como espécie normativa, aplica-se o art. 44 e os créditos extraordinários são abertos por decreto. Por fim, ainda que emergenciais, os créditos extraordinários sujeitam-se a limites, pois o art. 167, VII, da Constituição veda a concessão ou utilização de créditos ilimitados."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  y1:[
    sl("Crédito orçamentário × dotação",
      '<p>A lei orçamentária é organizada na forma de <b>créditos orçamentários</b>, aos quais são consignadas <b>dotações</b>.</p>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Crédito orçamentário</span><span class="cd">A <b>autorização legislativa consignada na LOA</b> para a realização de cada despesa.</span></div>'+
      '<div class="chip"><span class="cn">Dotação</span><span class="cd">O <b>montante de recurso financeiro</b> reservado para cada crédito — o limite autorizado.</span></div></div>'+
      '<div class="box tip"><span class="bl">Exemplo de detalhamento</span>'+
      '<p><span class="mono">Função 20 · Subfunção 601 · Atividade: Produção de Biofungicida · Dotação: R$ 720.000,00</span></p></div>'+
      '<div class="box"><span class="bl">Créditos iniciais (ou ordinários)</span><p>São os <b>já consignados na LOA</b> — o exercício financeiro já começa com eles.</p></div>'),
    sl("Créditos adicionais — o conceito",
      '<p>São <span class="key">mecanismos retificadores da LOA</span>, para viabilizar a execução de despesas <b>não previstas</b> quando da elaboração do orçamento.</p>'+
      '<div class="box"><span class="bl">Lei nº 4.320/1964, art. 40</span><p>“São créditos adicionais as <b>autorizações de despesas não computadas ou insuficientemente dotadas</b> na Lei de Orçamento.”</p></div>'+
      '<div class="box tip"><span class="bl">Duas situações, dois créditos</span>'+
      '<ul><li><b>Não computada</b> na LOA → não existe dotação → <b>crédito especial</b>;</li>'+
      '<li><b>Insuficientemente dotada</b> → existe dotação, mas falta valor → <b>crédito suplementar</b>.</li></ul></div>'),
    sl("As três espécies (art. 41)",
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">S</span><span class="nm">Suplementares</span></div><div class="fn-b"><p>Destinados a <b>reforço de dotação orçamentária</b> já prevista na LOA.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">E</span><span class="nm">Especiais</span></div><div class="fn-b"><p>Destinados a despesas para as quais <b>não haja dotação orçamentária específica</b>.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">X</span><span class="nm">Extraordinários</span></div><div class="fn-b"><p>Destinados a despesas <b>urgentes e imprevistas</b>, em caso de <b>guerra, comoção intestina ou calamidade pública</b>.</p></div></div></div>'+
      '<div class="box trap"><span class="bl">A pegadinha da calamidade</span>'+
      '<p>“Reconhecido o estado de calamidade pública, deve-se utilizar o crédito <b>especial</b>.” → <b>ERRADO</b>. Calamidade, guerra e comoção intestina pedem sempre o <b>extraordinário</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Item literal já cobrado</span><p>“A principal diferença entre especiais e suplementares reside em que <b>estes reforçam dotação já existente</b>, enquanto os especiais se referem a despesas para as quais <b>ainda não há dotação específica</b>.” → <b>CERTO</b>.</p></div>')
  ],
  y2:[
    sl("As fontes — mnemônico ROSERA",
      '<p>Fontes para abertura de créditos <b>suplementares e especiais</b>:</p>'+
      '<div class="box"><span class="bl">R · O · S · E · R · A</span>'+
      '<ul><li><b>R</b>eserva de contingência <span class="lawref">DL 200/67, art. 91</span></li>'+
      '<li><b>O</b>perações de crédito</li>'+
      '<li><b>S</b>uperávit financeiro apurado em <b>balanço patrimonial</b> <i>(não é balanço financeiro)</i></li>'+
      '<li><b>E</b>xcesso de arrecadação</li>'+
      '<li><b>R</b>ecursos sem despesas correspondentes <span class="lawref">CF, art. 166, § 8º</span></li>'+
      '<li><b>A</b>nulação total ou parcial de dotações</li></ul></div>'+
      '<div class="box trap"><span class="bl">Duas coisas que NÃO são fonte</span>'+
      '<ul><li>A <b>economia de despesa</b> — não é fonte para abertura de créditos.</li>'+
      '<li>O <b>crédito extraordinário</b> sequer depende de fonte: tem <b>caráter emergencial</b>.</li></ul></div>'),
    sl("Superávit financeiro",
      '<div class="box"><span class="bl">Lei nº 4.320/1964, art. 43, § 2º</span><p>É a <b>diferença positiva entre o ativo financeiro e o passivo financeiro</b>, conjugando-se ainda os <b>saldos dos créditos adicionais transferidos</b> e as <b>operações de crédito a eles vinculadas</b>.</p></div>'+
      '<div class="box tip"><span class="bl">A fórmula</span><p class="mono"><b>SF = AF − PF − CAR + OCV</b></p>'+
      '<p>AF = ativo financeiro · PF = passivo financeiro · CAR = créditos adicionais reabertos (transferidos) · OCV = operações de crédito vinculadas.</p></div>'+
      '<div class="box trap"><span class="bl">Onde se apura — e as três pegadinhas</span>'+
      '<p>O superávit financeiro é apurado no <b>Balanço Patrimonial do exercício anterior</b>. São <b>ERRADOS</b>:</p>'+
      '<ul><li>“O <b>resultado financeiro</b> é apurado no BP do exercício anterior”;</li>'+
      '<li>“O superávit financeiro é apurado no <b>Balanço Financeiro</b> do exercício anterior”;</li>'+
      '<li>“O superávit financeiro é apurado no BP do <b>exercício corrente</b>”.</li></ul></div>'),
    sl("Excesso de arrecadação",
      '<div class="box"><span class="bl">Lei nº 4.320/1964, art. 43, § 3º</span><p>É o <b>saldo positivo das diferenças acumuladas mês a mês entre a arrecadação prevista e a realizada</b>, considerando-se ainda a <b>tendência do exercício</b>.</p></div>'+
      '<div class="box tip"><span class="bl">O que se deduz</span>'+
      '<ul><li>A <b>tendência de queda</b> do exercício <span class="lawref">art. 43, § 3º</span></li>'+
      '<li>A importância dos <b>créditos extraordinários abertos no exercício</b> <span class="lawref">art. 43, § 4º</span></li></ul>'+
      '<p class="mono"><b>EA = arrecadado além do previsto − tendência de queda − créditos extraordinários</b></p></div>'+
      '<div class="box trap"><span class="bl">Não confunda</span>'+
      '<ul><li><b>Excesso de arrecadação</b> → <b>É</b> fonte para abertura de créditos.</li>'+
      '<li><b>Economia de despesa</b> → <b>NÃO É</b> fonte para abertura de créditos.</li></ul></div>'),
    sl("A questão numérica completa",
      '<div class="prompt"><span class="vlab">Questão-exemplo · “balançar a ROSERA”</span>'+
      '<p>Dados do exercício:</p>'+
      '<ul><li>Créditos adicionais <b>extraordinários</b> abertos no exercício: R$ 1.180</li>'+
      '<li>Créditos adicionais <b>transferidos</b> do exercício anterior, com R$ 1.200 de operações de crédito vinculadas: R$ 2.600</li>'+
      '<li>Dotações orçamentárias <b>anuladas</b>: R$ 1.370</li>'+
      '<li>Créditos adicionais <b>especiais</b> abertos no exercício: R$ 1.500</li>'+
      '<li>Receitas arrecadadas <b>além do previsto</b>: R$ 3.650</li>'+
      '<li><b>Tendência de queda</b> na arrecadação: R$ 1.000</li></ul>'+
      '<p>Balanço Patrimonial do exercício anterior: <b>AF R$ 9.200</b> · <b>PF R$ 1.800</b> · AP R$ 13.305 · PP R$ 13.015.</p></div>'+
      '<div class="box tip"><span class="bl">Resolução</span>'+
      '<ul><li><b>1ª fonte — anulação de dotações:</b> R$ 1.370</li>'+
      '<li><b>2ª fonte — superávit financeiro:</b> 9.200 − 1.800 − 2.600 + 1.200 = <b>R$ 6.000</b></li>'+
      '<li><b>3ª fonte — excesso de arrecadação:</b> 3.650 − 1.000 − 1.180 = <b>R$ 1.470</b></li></ul>'+
      '<p><b>Total disponível = 1.370 + 6.000 + 1.470 = R$ 8.840</b></p></div>'+
      '<div class="box trap"><span class="bl">Os números-isca</span><p>O <b>ativo e o passivo permanente</b> (13.305 e 13.015) não entram: o superávit é <b>financeiro</b>. Os <b>créditos especiais abertos</b> (1.500) também não são fonte — são <b>uso</b> de recursos.</p></div>')
  ],
  y3:[
    sl("Autorização e abertura",
      '<div class="box"><span class="bl">Lei nº 4.320/1964, art. 42</span><p>Os créditos <b>suplementares e especiais</b> serão <b>autorizados por lei</b> e <b>abertos por decreto executivo</b>. Ou seja, dependem de <b>autorização legislativa</b>.</p></div>'+
      '<div class="box"><span class="bl">Lei nº 4.320/1964, art. 43</span><p>A abertura dos créditos suplementares e especiais depende da <b>existência de recursos disponíveis</b> para ocorrer a despesa e será <b>precedida de exposição justificativa</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Exceção ao princípio da exclusividade</span><p>O <b>único</b> crédito adicional que pode ser <b>autorizado diretamente pela LOA</b> é o <b>suplementar</b> <span class="lawref">CF, art. 165, § 8º</span>. Por isso constitui exceção à exclusividade.</p></div>'+
      '<div class="box tip"><span class="bl">Crédito extraordinário</span><p><b>Não precisa</b> de autorização legislativa, porque possui <b>caráter de urgência</b>.</p></div>'),
    sl("Incorporação, especificidade e vigência",
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Suplementar</span><span class="cd"><b>Incorpora-se ao orçamento</b>, adicionando-se à dotação que deva reforçar.</span></div>'+
      '<div class="chip"><span class="cn">Especiais e extraordinários</span><span class="cd"><b>Conservam sua especificidade</b>: as despesas à sua conta são demonstradas <b>separadamente</b>.</span></div></div>'+
      '<div class="box"><span class="bl">Vigência</span><p>Os créditos <b>especiais e extraordinários</b> terão vigência <b>limitada ao exercício financeiro em que forem autorizados</b>, <b>salvo</b> se o ato de autorização for promulgado nos <b>últimos 4 meses</b> daquele exercício — caso em que, <b>reabertos nos limites de seus saldos</b>, serão <b>incorporados ao orçamento do exercício subsequente</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Novo programa de trabalho</span><p>Quem demanda a abertura de <b>novo programa de trabalho</b> são os créditos <b>especiais</b> e <b>extraordinários</b> — justamente por não haver dotação prévia.</p></div>'),
    sl("Crédito extraordinário — MP × decreto",
      '<div class="box"><span class="bl">Pela Constituição</span><p>Na <b>União</b>, os créditos extraordinários podem ser <b>autorizados e abertos por Medida Provisória</b> do Executivo <span class="lawref">CF, art. 167, § 3º + art. 62</span>, por seu caráter de urgência.</p></div>'+
      '<div class="box"><span class="bl">Pela Lei nº 4.320/1964, art. 44</span><p>Os créditos extraordinários serão <b>abertos por decreto do Poder Executivo</b>, que deles dará <b>imediato conhecimento ao Poder Legislativo</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Como escolher em prova</span>'+
      '<ul><li>Enunciado diz <b>“de acordo com a Lei nº 4.320”</b> → <b>decreto</b> do Executivo.</li>'+
      '<li>Enunciado invoca a <b>CF</b> e fala da <b>União</b> → <b>Medida Provisória</b>.</li>'+
      '<li>Ente <b>sem MP</b> como espécie normativa → <b>decreto</b> <span class="lawref">art. 44</span>.</li></ul>'+
      '<p>A FGV cobrou exatamente essa distinção na prova de Consultor do Tesouro da SEFAZ-ES.</p></div>'+
      '<div class="box"><span class="bl">Limites</span><p>O <b>art. 167, VII, da CF</b> veda a concessão ou utilização de <b>créditos ilimitados</b>. Logo, <b>os extraordinários também estão sujeitos a limites</b>.</p></div>'),
    sl("Um ponto de controle externo",
      '<div class="box trap"><span class="bl">Cobrado na prova de Auditor do TCU</span>'+
      '<p>É <b>desafio para o controle externo</b> analisar o montante e o impacto da abertura de créditos adicionais a <b>possibilidade de alterações orçamentárias não incluídas no limite de créditos suplementares</b>.</p></div>'+
      '<div class="box tip"><span class="bl">O exemplo do resumo</span><p>Um gasto previsto com pessoa jurídica que possa ser executado por pessoa física a preço inferior: alterar o orçamento por lei demandaria tempo e esforço, podendo levar à contratação mais cara. Sob o enfoque de <b>resultado</b>, permitem-se alterações em nível <b>mais analítico</b>, que não entram nos limites de créditos suplementares.</p></div>')
  ]
};

var EX = {
c1:{t:"match", instr:"Correlacione o termo à sua definição",
  pairs:[["Crédito orçamentário","Autorização legislativa consignada na LOA para cada despesa"],
         ["Dotação","Montante de recurso financeiro reservado para o crédito"]]},

c2:{t:"gap", instr:"Complete a frase",
  before:"São créditos adicionais as autorizações de despesas ", after:" na Lei de Orçamento.",
  options:["não computadas ou insuficientemente dotadas","urgentes e imprevistas",
           "anuladas total ou parcialmente"], answer:0,
  why:"Literalidade do art. 40 da Lei nº 4.320/1964."},

c3:{t:"wordbank", instr:"Monte o conceito de créditos adicionais (art. 40)",
  target:["autorizações","de","despesas","não","computadas","ou","insuficientemente","dotadas"],
  extra:["urgentes","imprevistas","ilimitadas"],
  why:"Duas situações: falta de dotação (especial) e dotação insuficiente (suplementar)."},

c4:{t:"order", instr:"Ordene os incisos do art. 41 da Lei nº 4.320/1964",
  items:["Suplementares — reforço de dotação orçamentária",
         "Especiais — despesas sem dotação orçamentária específica",
         "Extraordinários — despesas urgentes e imprevistas"],
  why:"Incisos I, II e III, nessa ordem."},

c5:{t:"match", instr:"Correlacione a espécie de crédito à sua finalidade",
  pairs:[["Suplementar","Reforçar dotação já prevista na LOA"],
         ["Especial","Despesa sem dotação específica na LOA"],
         ["Extraordinário","Despesa urgente e imprevista: guerra, comoção, calamidade"]]},

c6:{t:"sort", instr:"Que crédito adicional a situação exige?",
  buckets:["Suplementar","Especial","Extraordinário"],
  items:[["A dotação de diárias acabou antes do fim do ano",0],
         ["Faltam R$ 50 mil na dotação de material de consumo",0],
         ["Criação de um programa novo, sem dotação na LOA",1],
         ["Despesa nova que o orçamento não previu em rubrica alguma",1],
         ["Combate a uma pandemia declarada calamidade pública",2],
         ["Despesas decorrentes de comoção intestina",2]],
  why:"Reforço → suplementar · sem dotação → especial · urgência imprevista → extraordinário."},

c7:{t:"mc", instr:"Reconhecido o estado de calamidade pública, o crédito adequado é o:",
  options:["Extraordinário","Especial","Suplementar","Ordinário"], answer:0,
  why:"A troca por “especial” é a pegadinha mais repetida do módulo."},

c8:{t:"multi", instr:"Marque o que é verdadeiro sobre suplementares e especiais",
  options:["O suplementar reforça dotação já existente",
           "O especial atende despesa sem dotação específica",
           "Ambos são autorizados por lei e abertos por decreto",
           "Ambos dependem de fonte de recursos disponível",
           "O suplementar atende despesa sem dotação específica",
           "O especial destina-se a reforço de dotação"],
  answers:[0,1,2,3],
  why:"As duas últimas invertem as definições do art. 41."},

c9:{t:"wordbank", instr:"Monte o mnemônico das fontes de créditos adicionais",
  target:["Reserva","Operações","Superávit","Excesso","Recursos","Anulação"],
  extra:["Economia","Dotação","Empenho"],
  why:"<b>ROSERA</b>. A <b>economia de despesa</b> não é fonte."},

c10:{t:"multi", instr:"Marque as fontes para abertura de créditos suplementares e especiais",
  options:["Reserva de contingência","Operações de crédito",
           "Superávit financeiro apurado em balanço patrimonial","Excesso de arrecadação",
           "Recursos sem despesas correspondentes","Anulação total ou parcial de dotações",
           "Economia de despesa"],
  answers:[0,1,2,3,4,5],
  why:"A <b>economia de despesa</b> é a única que não é fonte."},

c11:{t:"mc", instr:"O crédito extraordinário depende de fonte de recursos disponível?",
  options:["Não, pois possui caráter emergencial","Sim, como os demais créditos adicionais",
           "Somente quando aberto por decreto","Somente na União"],
  answer:0,
  why:"É a única espécie dispensada da indicação de fonte."},

c12:{t:"gap", instr:"Complete a frase",
  before:"O superávit financeiro é a diferença positiva entre o ", after:", conjugando-se ainda os saldos dos créditos adicionais transferidos e as operações de crédito a eles vinculadas.",
  options:["ativo financeiro e o passivo financeiro","ativo permanente e o passivo permanente",
           "ativo total e o passivo total"], answer:0,
  why:"Art. 43, § 2º. O permanente não entra no cálculo."},

c13:{t:"mc", instr:"O superávit financeiro é apurado:",
  options:["No Balanço Patrimonial do exercício anterior","No Balanço Financeiro do exercício anterior",
           "No Balanço Patrimonial do exercício corrente","No Balanço Orçamentário do exercício anterior"],
  answer:0,
  why:"As outras três alternativas são exatamente as pegadinhas do resumo."},

c14:{t:"order", instr:"Ordene os termos da fórmula do superávit financeiro",
  items:["Ativo financeiro","(−) Passivo financeiro",
         "(−) Créditos adicionais transferidos","(+) Operações de crédito vinculadas"],
  why:"<b>SF = AF − PF − CAR + OCV.</b>"},

c15:{t:"mc", instr:"AF R$ 9.200 · PF R$ 1.800 · créditos transferidos R$ 2.600 · operações vinculadas R$ 1.200. O superávit financeiro é:",
  options:["R$ 6.000","R$ 7.400","R$ 8.800","R$ 4.800"], answer:0,
  why:"9.200 − 1.800 − 2.600 + 1.200 = 6.000."},

c16:{t:"gap", instr:"Complete a frase",
  before:"Excesso de arrecadação é o saldo positivo das diferenças acumuladas ",
  after:" entre a arrecadação prevista e a realizada.",
  options:["mês a mês","trimestre a trimestre","no encerramento do exercício"],
  answer:0,
  why:"Art. 43, § 3º — considerada ainda a tendência do exercício."},

c17:{t:"multi", instr:"Marque o que se deduz para apurar o excesso de arrecadação",
  options:["A tendência de queda do exercício",
           "A importância dos créditos extraordinários abertos no exercício",
           "As dotações anuladas no exercício",
           "O superávit financeiro do exercício anterior"],
  answers:[0,1],
  why:"§ 3º (tendência de queda) e § 4º (créditos extraordinários) do art. 43."},

c18:{t:"mc", instr:"Arrecadado além do previsto R$ 3.650 · tendência de queda R$ 1.000 · extraordinários abertos R$ 1.180. O excesso de arrecadação é:",
  options:["R$ 1.470","R$ 2.650","R$ 2.470","R$ 3.650"], answer:0,
  why:"3.650 − 1.000 − 1.180 = 1.470."},

c19:{t:"mc", instr:"Com anulação de dotações de R$ 1.370, superávit financeiro de R$ 6.000 e excesso de arrecadação de R$ 1.470, o total disponível para créditos suplementares é:",
  options:["R$ 8.840","R$ 7.470","R$ 10.340","R$ 6.000"], answer:0,
  why:"Somam-se as três fontes: 1.370 + 6.000 + 1.470."},

c20:{t:"sort", instr:"O valor entra no cálculo das fontes disponíveis?",
  buckets:["Entra no cálculo","Não entra"],
  items:[["Ativo financeiro do BP anterior",0],["Passivo financeiro do BP anterior",0],
         ["Dotações orçamentárias anuladas",0],["Receitas arrecadadas além do previsto",0],
         ["Ativo permanente",1],["Passivo permanente",1],
         ["Créditos especiais abertos no exercício",1]],
  why:"O superávit é <b>financeiro</b>; e créditos especiais abertos são <b>uso</b>, não fonte."},

c21:{t:"sort", instr:"É fonte para abertura de créditos adicionais?",
  buckets:["É fonte","Não é fonte"],
  items:[["Excesso de arrecadação",0],["Superávit financeiro",0],
         ["Anulação parcial de dotações",0],["Economia de despesa",1]],
  why:"Quadro “não confunda” do resumo."},

c22:{t:"mc", instr:"O único crédito adicional que pode ser autorizado diretamente pela LOA é o:",
  options:["Suplementar","Especial","Extraordinário","Nenhum deles"], answer:0,
  why:"Art. 165, § 8º, da CF — por isso é exceção ao princípio da exclusividade."},

c23:{t:"gap", instr:"Complete a frase",
  before:"Os créditos suplementares e especiais serão ", after:".",
  options:["autorizados por lei e abertos por decreto executivo",
           "autorizados por decreto e abertos por lei",
           "autorizados e abertos por medida provisória"], answer:0,
  why:"Art. 42 da Lei nº 4.320/1964."},

c24:{t:"multi", instr:"Marque os requisitos de abertura dos créditos suplementares e especiais (art. 43)",
  options:["Existência de recursos disponíveis para ocorrer a despesa",
           "Exposição justificativa prévia",
           "Autorização legislativa",
           "Abertura por decreto do Poder Executivo",
           "Aprovação prévia do Tribunal de Contas",
           "Dispensa de indicação de fonte"],
  answers:[0,1,2,3],
  why:"As duas últimas não constam da lei — e a dispensa de fonte é só do extraordinário."},

c25:{t:"match", instr:"Correlacione o crédito ao seu comportamento no orçamento",
  pairs:[["Suplementar","Incorpora-se à dotação que deva reforçar"],
         ["Especiais e extraordinários","Conservam especificidade; despesas demonstradas separadamente"]]},

c26:{t:"gap", instr:"Complete a frase",
  before:"Créditos especiais e extraordinários têm vigência limitada ao exercício em que autorizados, salvo se o ato for promulgado nos ",
  after:" daquele exercício.",
  options:["últimos 4 meses","últimos 2 meses","últimos 6 meses"], answer:0,
  why:"Nesse caso são reabertos nos limites de seus saldos e incorporados ao orçamento seguinte."},

c27:{t:"multi", instr:"Marque o que é correto sobre vigência e programa de trabalho",
  options:["Especiais e extraordinários têm vigência limitada ao exercício da autorização",
           "Promulgado o ato nos últimos 4 meses, o crédito é reaberto nos limites de seus saldos",
           "Reaberto, incorpora-se ao orçamento do exercício subsequente",
           "Especiais e extraordinários demandam a abertura de novo programa de trabalho",
           "Suplementares demandam a abertura de novo programa de trabalho",
           "A reabertura independe da data de promulgação do ato"],
  answers:[0,1,2,3],
  why:"O suplementar reforça programa existente — não cria novo."},

c28:{t:"sort", instr:"Como se abre o crédito extraordinário, conforme a norma invocada?",
  buckets:["Medida Provisória","Decreto do Executivo"],
  items:[["CF, art. 167, § 3º + art. 62, na União",0],
         ["Lei nº 4.320/1964, art. 44",1],
         ["Ente que não possui MP como espécie normativa",1]],
  why:"Se o enunciado disser “de acordo com a Lei nº 4.320”, a resposta é sempre <b>decreto</b>."},

c29:{t:"mc", instr:"Segundo o art. 44 da Lei nº 4.320/1964, os créditos extraordinários serão abertos por decreto do Executivo, que deles dará:",
  options:["Imediato conhecimento ao Poder Legislativo","Ciência ao Tribunal de Contas em 30 dias",
           "Publicidade no encerramento do exercício","Justificativa na prestação de contas anual"],
  answer:0,
  why:"O controle é posterior, mas imediato."},

c30:{t:"mc", instr:"Os créditos extraordinários sujeitam-se a limites?",
  options:["Sim — o art. 167, VII, da CF veda créditos ilimitados",
           "Não — possuem caráter emergencial",
           "Somente quando abertos por decreto",
           "Somente nos entes sem medida provisória"],
  answer:0,
  why:"A urgência dispensa autorização e fonte, mas não afasta a vedação constitucional."},

c31:{t:"multi", instr:"Marque o que é verdadeiro sobre o crédito extraordinário",
  options:["Destina-se a despesas urgentes e imprevistas",
           "Não depende de fonte de recursos disponível",
           "Não depende de prévia autorização legislativa",
           "Na União pode ser aberto por medida provisória",
           "Pode ser autorizado diretamente pela LOA",
           "Não se sujeita a qualquer limite"],
  answers:[0,1,2,3],
  why:"Só o <b>suplementar</b> pode ser autorizado pela LOA; e o art. 167, VII, veda créditos ilimitados."},

c32:{t:"order", instr:"Ordene o caminho de um crédito suplementar",
  items:["Verificação da existência de recursos disponíveis",
         "Exposição justificativa",
         "Autorização por lei (ou pela própria LOA)",
         "Abertura por decreto do Poder Executivo",
         "Incorporação à dotação que deva reforçar"],
  why:"Art. 42 e art. 43 da Lei nº 4.320/1964."}
};

for(var i=0;i<QS.length;i++) EX["f"+i]={t:"ce", qi:i};

var KIT = {
  k1:{tema:"Créditos adicionais — conceito e espécies",
    bases:["Lei nº 4.320/1964, art. 40 — conceito de créditos adicionais",
           "Lei nº 4.320/1964, art. 41 — classificação",
           "CF/1988, art. 167, § 3º — créditos extraordinários",
           "CF/1988, art. 165, § 8º — autorização de suplementares na LOA"],
    ouro:["mecanismos retificadores da lei orçamentária","autorizações de despesas não computadas",
          "insuficientemente dotadas","reforço de dotação orçamentária",
          "não haja dotação orçamentária específica","despesas urgentes e imprevistas",
          "guerra, comoção intestina ou calamidade pública","crédito orçamentário","dotação"],
    abertura:"Créditos adicionais são, nos termos do art. 40 da Lei nº 4.320/1964, as autorizações de despesas não computadas ou insuficientemente dotadas na Lei de Orçamento, funcionando como mecanismos retificadores da lei orçamentária anual, e classificam-se, na forma do art. 41, em suplementares, especiais e extraordinários.",
    evite:"Não invoque o crédito <b>especial</b> para calamidade pública, guerra ou comoção intestina. A espécie cabível é o <b>extraordinário</b>."},
  k2:{tema:"Fontes de recursos e superávit financeiro",
    bases:["Lei nº 4.320/1964, art. 43 e §§ 1º a 4º — recursos disponíveis",
           "Decreto-Lei nº 200/1967, art. 91 — reserva de contingência",
           "CF/1988, art. 166, § 8º — recursos sem despesas correspondentes",
           "LC nº 101/2000, art. 5º, III — reserva de contingência na LOA"],
    ouro:["reserva de contingência","operações de crédito","superávit financeiro apurado em balanço patrimonial",
          "excesso de arrecadação","recursos sem despesas correspondentes",
          "anulação total ou parcial de dotações","diferença positiva entre o ativo e o passivo financeiro",
          "saldos dos créditos adicionais transferidos","operações de crédito a eles vinculadas",
          "saldo positivo das diferenças acumuladas mês a mês","tendência do exercício"],
    abertura:"A abertura dos créditos suplementares e especiais depende da existência de recursos disponíveis, assim considerados, na forma do art. 43, § 1º, da Lei nº 4.320/1964, o superávit financeiro apurado em balanço patrimonial do exercício anterior, o excesso de arrecadação, os recursos resultantes de anulação parcial ou total de dotações ou de créditos adicionais autorizados em lei, e o produto de operações de crédito.",
    evite:"Não diga que o superávit financeiro é apurado no <b>balanço financeiro</b> nem no <b>exercício corrente</b>, e não admita a <b>economia de despesa</b> como fonte."},
  k3:{tema:"Autorização, abertura e vigência",
    bases:["Lei nº 4.320/1964, art. 42 — autorização por lei e abertura por decreto",
           "Lei nº 4.320/1964, art. 43, caput — exposição justificativa",
           "CF/1988, art. 165, § 8º — exceção ao princípio da exclusividade",
           "CF/1988, art. 167, § 2º — vigência e reabertura",
           "CF/1988, art. 167, VII — vedação de créditos ilimitados"],
    ouro:["autorizados por lei e abertos por decreto executivo","exposição justificativa",
          "existência de recursos disponíveis","exceção ao princípio da exclusividade",
          "incorpora-se ao orçamento","conservam sua especificidade","demonstradas separadamente",
          "vigência limitada ao exercício financeiro","últimos quatro meses",
          "reabertos nos limites de seus saldos","novo programa de trabalho"],
    abertura:"Os créditos suplementares e especiais são autorizados por lei e abertos por decreto do Poder Executivo, na forma do art. 42 da Lei nº 4.320/1964, dependendo sua abertura da existência de recursos disponíveis e sendo precedida de exposição justificativa, sendo o suplementar o único que pode ser autorizado diretamente na lei orçamentária anual, razão pela qual constitui exceção ao princípio da exclusividade.",
    evite:"Não afirme que o crédito <b>suplementar</b> conserva especificidade ou cria novo programa de trabalho: ele se <b>incorpora</b> à dotação que reforça."},
  k4:{tema:"Crédito extraordinário",
    bases:["Lei nº 4.320/1964, art. 41, III e art. 44 — conceito e abertura por decreto",
           "CF/1988, art. 62 e art. 167, § 3º — medida provisória na União",
           "CF/1988, art. 167, VII — vedação de créditos ilimitados",
           "ADI 4.048/DF — STF, requisitos de urgência e imprevisibilidade"],
    ouro:["despesas urgentes e imprevistas","guerra, comoção intestina ou calamidade pública",
          "caráter emergencial","independe de fonte de recursos disponível",
          "dispensa prévia autorização legislativa","medida provisória",
          "decreto do Poder Executivo","imediato conhecimento ao Poder Legislativo",
          "vedada a concessão ou utilização de créditos ilimitados"],
    abertura:"O crédito extraordinário destina-se a despesas urgentes e imprevistas, em caso de guerra, comoção intestina ou calamidade pública, e, por seu caráter emergencial, dispensa tanto a indicação de fonte de recursos disponível quanto a prévia autorização legislativa, podendo ser aberto, na União, por medida provisória, nos termos do art. 167, § 3º, da Constituição Federal.",
    evite:"Não afirme que o crédito extraordinário <b>não se sujeita a limites</b>: o art. 167, VII, da CF veda a concessão ou utilização de créditos ilimitados. E, se a questão invocar a Lei nº 4.320, a abertura é por <b>decreto</b>, não por medida provisória."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. Tema clássico e muito literal — o espelho premia quem nomeia as fontes e domina o regime de cada espécie.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre os créditos adicionais, disserte necessariamente sobre:</p>'+
  '<ol><li>o conceito de crédito adicional e suas três espécies, distinguindo-as;</li>'+
  '<li>as fontes de recursos para sua abertura, com destaque para o superávit financeiro e o excesso de arrecadação;</li>'+
  '<li>o regime de autorização, abertura e vigência de cada espécie.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>A lei orçamentária é organizada na forma de <b>créditos orçamentários</b>, que são as autorizações legislativas consignadas na lei orçamentária anual para a realização de cada despesa, aos quais se consignam <b>dotações</b>, isto é, os montantes de recursos financeiros que constituem o limite autorizado. Quando a execução revela despesas não previstas ou insuficientemente providas, recorre-se aos <b>créditos adicionais</b>, mecanismos retificadores da lei orçamentária definidos pelo <b>art. 40 da Lei nº 4.320/1964</b> como as <b>autorizações de despesas não computadas ou insuficientemente dotadas na Lei de Orçamento</b>. O <b>art. 41</b> classifica-os em três espécies: <b>suplementares</b>, os destinados a <b>reforço de dotação orçamentária</b> já existente; <b>especiais</b>, os destinados a despesas para as quais <b>não haja dotação orçamentária específica</b>; e <b>extraordinários</b>, os destinados a despesas <b>urgentes e imprevistas</b>, em caso de <b>guerra, comoção intestina ou calamidade pública</b>.</p>'+
  '<p>Quanto às <b>fontes</b>, a abertura de créditos suplementares e especiais depende da existência de recursos disponíveis, compreendidos a <b>reserva de contingência</b>, as <b>operações de crédito</b>, o <b>superávit financeiro</b>, o <b>excesso de arrecadação</b>, os <b>recursos que ficarem sem despesas correspondentes</b> em razão de veto, emenda ou rejeição do projeto de lei orçamentária, e a <b>anulação total ou parcial de dotações</b>. O <b>superávit financeiro</b>, na dicção do art. 43, § 2º, é a <b>diferença positiva entre o ativo financeiro e o passivo financeiro</b>, conjugando-se ainda os <b>saldos dos créditos adicionais transferidos</b> e as <b>operações de crédito a eles vinculadas</b>, sendo apurado no <b>Balanço Patrimonial do exercício anterior</b> — e não no balanço financeiro nem no exercício corrente. O <b>excesso de arrecadação</b>, conforme o § 3º, é o <b>saldo positivo das diferenças acumuladas mês a mês entre a arrecadação prevista e a realizada</b>, considerada a tendência do exercício, deduzindo-se, para sua apuração, a <b>tendência de queda</b> e, na forma do § 4º, a <b>importância dos créditos extraordinários abertos no exercício</b>. Anote-se que a <b>economia de despesa não constitui fonte</b>, e que o <b>crédito extraordinário sequer depende de fonte disponível</b>, dado seu caráter emergencial.</p>'+
  '<p>No tocante ao <b>regime</b>, os créditos <b>suplementares e especiais</b> são <b>autorizados por lei e abertos por decreto do Poder Executivo</b> (art. 42), dependendo sua abertura da <b>existência de recursos disponíveis</b> e sendo <b>precedida de exposição justificativa</b> (art. 43). O <b>suplementar</b> é o <b>único</b> que pode ser <b>autorizado diretamente na própria lei orçamentária anual</b>, nos termos do <b>art. 165, § 8º, da Constituição</b>, constituindo, por isso, <b>exceção ao princípio da exclusividade</b>; ele <b>incorpora-se ao orçamento</b>, adicionando-se à dotação que deva reforçar, ao passo que os <b>especiais e extraordinários conservam sua especificidade</b>, demonstrando-se separadamente as despesas realizadas à sua conta, e são também eles que demandam a abertura de <b>novo programa de trabalho</b>. A vigência dos especiais e extraordinários é <b>limitada ao exercício financeiro em que autorizados</b>, salvo se o ato de autorização for promulgado nos <b>últimos quatro meses</b>, hipótese em que, <b>reabertos nos limites de seus saldos</b>, serão <b>incorporados ao orçamento do exercício subsequente</b>.</p>'+
  '<p>O <b>crédito extraordinário</b>, por fim, <b>dispensa prévia autorização legislativa</b>. Na União, pode ser autorizado e aberto por <b>medida provisória</b> (art. 167, § 3º, c/c art. 62 da CF); já o <b>art. 44 da Lei nº 4.320/1964</b> determina sua abertura por <b>decreto do Poder Executivo</b>, que dele dará <b>imediato conhecimento ao Poder Legislativo</b> — regra aplicável também aos entes que não possuem a medida provisória como espécie normativa. Ainda assim, sujeita-se a limites, pois o <b>art. 167, VII, da Constituição</b> veda a concessão ou utilização de <b>créditos ilimitados</b>.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> a distinção crédito × dotação, a literalidade do art. 40 e as três definições do art. 41 com as hipóteses do extraordinário.</li>'+
  '<li><b>Item 2:</b> as seis fontes nomeadas, as duas definições legais com <b>onde</b> se apura o superávit e as <b>duas deduções</b> do excesso, além da exclusão da economia de despesa.</li>'+
  '<li><b>Item 3:</b> lei/decreto, exposição justificativa, exclusividade, incorporação × especificidade e a regra dos quatro meses.</li>'+
  '<li><b>Fecho:</b> o par MP × decreto e o art. 167, VII, demonstram domínio fino do tema e costumam valer o ponto de desempate.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Há cálculo: apresente as contas linha a linha, com o dispositivo entre parênteses.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>Determinado ente apresentava, ao longo do exercício, os seguintes dados:</p>'+
  '<ul><li>Balanço Patrimonial do exercício anterior: <b>ativo financeiro R$ 9.200</b> · <b>passivo financeiro R$ 1.800</b> · ativo permanente R$ 13.305 · passivo permanente R$ 13.015;</li>'+
  '<li>créditos adicionais transferidos do exercício anterior: <b>R$ 2.600</b>, dos quais <b>R$ 1.200</b> de operações de crédito vinculadas;</li>'+
  '<li>créditos extraordinários abertos no exercício: <b>R$ 1.180</b>; créditos especiais abertos: R$ 1.500;</li>'+
  '<li>dotações orçamentárias anuladas: <b>R$ 1.370</b>;</li>'+
  '<li>receitas arrecadadas além do previsto: <b>R$ 3.650</b>; tendência de queda na arrecadação: <b>R$ 1.000</b>.</li></ul>'+
  '<p>O ente pretende ainda: (a) abrir crédito para reforçar a dotação de diárias; (b) atender despesas de combate a enchente declarada calamidade pública; (c) reabrir, no exercício seguinte, crédito especial autorizado em 20 de outubro.</p>'+
  '<p><b>Pergunta-se:</b> apure o valor disponível para créditos suplementares e classifique as três pretensões, com fundamento legal.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1. Superávit financeiro.</b> Nos termos do art. 43, § 2º, da Lei nº 4.320/1964, <b>SF = AF − PF − créditos adicionais transferidos + operações de crédito vinculadas</b>, isto é, <b>9.200 − 1.800 − 2.600 + 1.200 = R$ 6.000</b>. O ativo e o passivo <b>permanentes</b> não integram o cálculo, pois o superávit é <b>financeiro</b>, apurado no <b>Balanço Patrimonial do exercício anterior</b>.</p>'+
  '<p><b>2. Excesso de arrecadação.</b> Conforme o art. 43, §§ 3º e 4º, deduzem-se a tendência de queda e os créditos extraordinários abertos: <b>3.650 − 1.000 − 1.180 = R$ 1.470</b>.</p>'+
  '<p><b>3. Valor disponível.</b> Somadas as fontes — <b>anulação de dotações R$ 1.370</b>, superávit financeiro R$ 6.000 e excesso de arrecadação R$ 1.470 —, o valor disponível para abertura de créditos suplementares é de <b>R$ 8.840</b>. Os <b>créditos especiais abertos (R$ 1.500)</b> não entram: são <b>uso</b>, e não fonte de recursos.</p>'+
  '<p><b>4. As três pretensões.</b> (a) O reforço da dotação de diárias exige <b>crédito suplementar</b> (art. 41, I), autorizado por lei — ou diretamente pela LOA, único caso de autorização na própria lei orçamentária (art. 165, § 8º, da CF) — e aberto por decreto. (b) A calamidade pública enseja <b>crédito extraordinário</b> (art. 41, III), que <b>dispensa autorização legislativa e fonte disponível</b>, sendo aberto por decreto do Executivo com imediato conhecimento do Legislativo (art. 44), ou, na União, por medida provisória (art. 167, § 3º, da CF). (c) O <b>crédito especial autorizado em 20 de outubro</b> foi promulgado <b>dentro dos últimos quatro meses</b> do exercício: logo, <b>pode ser reaberto nos limites de seu saldo</b> e <b>incorporado ao orçamento do exercício subsequente</b>.</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>Somar o <b>permanente</b> ao superávit. Só o <b>financeiro</b> entra.</li>'+
  '<li><b>Somar</b> os créditos transferidos em vez de deduzi-los na fórmula do SF.</li>'+
  '<li>Esquecer de deduzir os <b>créditos extraordinários</b> do excesso de arrecadação (§ 4º).</li>'+
  '<li>Tratar a calamidade do item (b) como <b>crédito especial</b> e exigir autorização legislativa.</li></ul></div>';

var TEC = [["CESPE","Q3c4zs"],["FCC","Q3c501"],["FGV","Q3c50D"],["VUNESP","Q3c50N"]];

var UNITS = [
  {n:1, title:"Conceito e espécies", cvar:"u1", lessons:[
    {id:"r1", type:"teoria", title:"Crédito, dotação e créditos adicionais", xp:10, data:"y1"},
    {id:"r2", type:"drill",  title:"Praticar · crédito × dotação",     xp:20, data:["c1","f0","f1","f2","f3"]},
    {id:"r3", type:"drill",  title:"Praticar · conceito do art. 40",   xp:20, data:["c2","c3","f4","f5"]},
    {id:"r4", type:"drill",  title:"Praticar · as três espécies",      xp:25, data:["c4","c5","c6","f6","f7","f8","f9"]},
    {id:"r5", type:"drill",  title:"Praticar · suplementar × especial", xp:25, data:["c7","c8","f10","f11","f12"]},
    {id:"r6", type:"flash",  title:"Flashcards · conceito e espécies", xp:15, data:[0,1,2,3,4,5,6,7]},
    {id:"r7", type:"feynman",title:"Explique os créditos adicionais",  xp:30, data:"k1"}
  ]},
  {n:2, title:"Fontes: ROSERA, superávit e excesso", cvar:"u2", lessons:[
    {id:"r9", type:"teoria", title:"Fontes, superávit e excesso",      xp:10, data:"y2"},
    {id:"r10",type:"drill",  title:"Praticar · o mnemônico ROSERA",    xp:20, data:["c9","c10","c21","f13","f14","f15","f17"]},
    {id:"r11",type:"drill",  title:"Praticar · superávit financeiro",  xp:25, data:["c12","c13","c14","f18","f19","f20","f21","f22"]},
    {id:"r12",type:"drill",  title:"Praticar · excesso de arrecadação", xp:25, data:["c16","c17","f24","f25","f26"]},
    {id:"r13",type:"drill",  title:"Praticar · os cálculos",           xp:30, data:["c15","c18","c19","c20","f23","f27"]},
    {id:"r14",type:"drill",  title:"Praticar · o crédito extraordinário e a fonte", xp:20, data:["c11","f16"]},
    {id:"r15",type:"flash",  title:"Flashcards · fontes e cálculos",   xp:15, data:[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]},
    {id:"r16",type:"feynman",title:"Explique as fontes de recursos",   xp:30, data:"k2"}
  ]},
  {n:3, title:"Autorização, abertura e vigência", cvar:"u3", lessons:[
    {id:"r18",type:"teoria", title:"Regime jurídico dos créditos",     xp:10, data:"y3"},
    {id:"r19",type:"drill",  title:"Praticar · autorização e abertura", xp:20, data:["c22","c23","c24","f28","f29","f35","f37"]},
    {id:"r20",type:"drill",  title:"Praticar · incorporação e especificidade", xp:25, data:["c25","f30","f31"]},
    {id:"r21",type:"drill",  title:"Praticar · vigência e reabertura", xp:25, data:["c26","c27","f32","f33","f34"]},
    {id:"r22",type:"drill",  title:"Praticar · MP × decreto",          xp:25, data:["c28","c29","f36","f38","f39","f40","f41"]},
    {id:"r23",type:"drill",  title:"Praticar · limites e controle",    xp:20, data:["c30","c31","c32","f42","f43"]},
    {id:"r24",type:"flash",  title:"Flashcards · regime jurídico",     xp:15, data:[23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]},
    {id:"r25",type:"feynman",title:"Explique o regime dos créditos",   xp:30, data:"k3"},
    {id:"r26",type:"feynman",title:"Explique o crédito extraordinário", xp:30, data:"k4"}
  ]},
  {n:4, title:"Aplicação e prova", cvar:"u4", lessons:[
    {id:"r28",type:"leitura",title:"Discursiva resolvida",             xp:25, data:"disc"},
    {id:"r29",type:"leitura",title:"Estudo de caso resolvido",         xp:25, data:"caso"},
    {id:"rrev",type:"review",title:"Revisão geral das unidades",       xp:60, data:null},
    {id:"r30",type:"missao", title:"Missão TEC Concursos",             xp:15, data:null},
    {id:"r31",type:"prova",  title:"Simulado cronometrado",            xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo. É a definição do quadro do Resumo: <b>crédito orçamentário</b> é a <b>autorização legislativa consignada na LOA</b> para a realização de cada despesa.</p><p>O material acrescenta: os créditos orçamentários compreendem o conjunto de categorias classificatórias que especificam as ações constantes do orçamento — uma autorização de despesa solicitada pelo governo ao parlamento.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Créditos Adicionais — Contextualização</i></p>",
1:"<p>Errado — <b>inverteu os dois conceitos</b>. No quadro do Resumo é o contrário: <b>crédito orçamentário</b> é a autorização legislativa consignada na LOA; <b>dotação</b> é o montante de recurso financeiro (dinheiro) reservado para cada crédito orçamentário.</p><p>Guarde a frase do material: o crédito orçamentário é <b>portador</b> de uma dotação. Quem carrega é o crédito; o que é carregado é a dotação.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Créditos Adicionais — Contextualização</i></p>",
2:"<p>Certo. Literal do Resumo: o crédito orçamentário é <b>portador de uma dotação</b>, e esta é o <b>limite de recurso financeiro autorizado</b>.</p><p>O exemplo do material mostra isso na prática: função 20, subfunção 601, atividade <i>Produção de Biofungicida</i>, dotação de <b>R$ 720.000,00</b> — o crédito é a linha; a dotação é o valor.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Detalhamento do Crédito Orçamentário — exemplo</i></p>",
3:"<p>Certo. Segundo o Resumo, os créditos <b>iniciais (ou ordinários)</b> são assim chamados <b>porque já estão consignados na LOA</b> — já se inicia o exercício financeiro com eles.</p><p>É esse o contraste que abre o módulo: crédito inicial nasce com a LOA; crédito <b>adicional</b> vem depois, para retificá-la.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Créditos Adicionais — Contextualização</i></p>",
4:"<p>Certo pela literalidade do <b>art. 40 da Lei nº 4.320/64</b>, transcrito no Resumo: são créditos adicionais as autorizações de despesas <b>não computadas</b> ou <b>insuficientemente dotadas</b> na Lei de Orçamento.</p><p>O esquema do material separa as duas hipóteses: não computada na LOA (nada previsto) e insuficientemente dotada (previsto, mas pouco). São exatamente as portas do especial e do suplementar.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Créditos Adicionais na Lei nº 4.320/64 — art. 40</i></p>",
5:"<p>Certo. Abertura do tópico no Resumo: os créditos adicionais são <b>mecanismos retificadores da LOA</b>, a fim de viabilizar a execução de <b>novas despesas</b> que não foram previstas quando da elaboração do orçamento.</p><p>Guarde a expressão <b>mecanismo retificador</b> — a banca a repete, inclusive na QUESTÃO-PEGADINHA da calamidade pública que o material traz.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Créditos Adicionais na Lei nº 4.320/64</i></p>",
6:"<p>Certo. É o <b>art. 41 da Lei nº 4.320/64</b>, no Resumo: os créditos adicionais classificam-se em <b>suplementares</b>, <b>especiais</b> e <b>extraordinários</b>.</p><p>O esquema do material resume cada um: suplementar reforça dotação já prevista na LOA; especial atende despesa sem dotação específica; extraordinário atende despesa urgente e imprevisível (guerra, comoção interna, calamidade).</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Créditos Adicionais na Lei nº 4.320/64 — art. 41</i></p>",
7:"<p>Errado — <b>trocou suplementar por especial</b>. Pelo art. 41, I, os suplementares são os destinados a <b>reforço de dotação orçamentária</b>.</p><p>Despesa <b>sem dotação específica</b> é caso de crédito <b>especial</b> (inciso II). No esquema do Resumo: suplementar = suplementar (reforçar) o que já está na LOA.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Créditos Adicionais na Lei nº 4.320/64 — art. 41</i></p>",
8:"<p>Errado — <b>mesma troca, no sentido inverso</b>. Pelo art. 41, II, os <b>especiais</b> são os destinados a despesas <b>para as quais não haja dotação orçamentária específica</b>.</p><p>Reforço de dotação é <b>suplementar</b> (inciso I). A QUESTÃO-EXEMPLO do material fixa o par: o suplementar reforça o que existe; o especial cobre o que não existe.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Créditos Adicionais na Lei nº 4.320/64 — art. 41</i></p>",
9:"<p>Certo pela letra do <b>art. 41, III</b>, no Resumo: os extraordinários são os destinados a despesas <b>urgentes e imprevistas</b>, em caso de <b>guerra, comoção intestina ou calamidade pública</b>.</p><p>Decore a trinca guerra / comoção intestina / calamidade pública — é ela que a banca usa para separar o extraordinário dos outros dois.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Créditos Adicionais na Lei nº 4.320/64 — art. 41</i></p>",
10:"<p>Certo — é a QUESTÃO-EXEMPLO do Resumo, marcada CERTO, com esta mesma redação.</p><p>A diferença principal: os <b>suplementares</b> têm como propósito <b>reforçar uma dotação orçamentária já existente</b>, enquanto os <b>especiais</b> se referem a despesas para as quais <b>ainda não há dotação específica</b>.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Créditos Adicionais — QUESTÃO-EXEMPLO</i></p>",
11:"<p>Certo — é a QUESTÃO-EXEMPLO do Resumo, marcada CERTO: as despesas urgentes não previstas no orçamento e necessárias ao combate da <b>pandemia de covid-19</b> devem ser autorizadas mediante abertura de crédito adicional <b>extraordinário</b>.</p><p>Encaixa no art. 41, III: despesa <b>urgente e imprevista</b>, em caso de calamidade pública.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Créditos Adicionais — QUESTÃO-EXEMPLO</i></p>",
12:"<p>Errado — é a <b>QUESTÃO-PEGADINHA</b> do Resumo, marcada ERRADO, com este mesmo enredo (calamidade reconhecida em 2020, covid-19, municípios atingidos).</p><p>O comentário do material corrige em uma linha: em caso de <b>calamidade pública</b>, o mecanismo retificador é o crédito <b>extraordinário</b>, não o especial.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Créditos Adicionais — QUESTÃO-PEGADINHA</i></p>",
13:"<p>Certo. Os três estão na lista de fontes do Resumo para créditos <b>suplementares e especiais</b>.</p><p>O mnemônico do material é <b>ROSERA</b>: <b>R</b>eserva de contingência; <b>O</b>perações de crédito; <b>S</b>uperávit financeiro apurado em balanço patrimonial; <b>E</b>xcesso de arrecadação; <b>R</b>ecursos sem despesas correspondentes; <b>A</b>nulação total ou parcial de dotações.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Fontes para abertura de créditos suplementares e especiais — ROSERA</i></p>",
14:"<p>Certo. É o primeiro <b>R</b> do mnemônico <b>ROSERA</b> do Resumo: <b>reserva de contingência</b>, com remissão ao <b>art. 91 do Decreto-Lei 200/67</b>.</p><p>Lembre que a lista vale para <b>suplementares e especiais</b>. O crédito extraordinário fica fora dela, porque não depende de fonte disponível.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Fontes para abertura de créditos suplementares e especiais — ROSERA</i></p>",
15:"<p>Errado. O quadro <b>NÃO CONFUNDA</b> do Resumo é direto: <b>excesso de arrecadação</b> é fonte para abertura de créditos; <b>economia de despesa</b> <b>não é</b> fonte.</p><p>E economia de despesa não se confunde com <b>anulação total ou parcial de dotações</b> — esta sim está no ROSERA, porque exige ato que cancele a dotação.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Excesso de Arrecadação — NÃO CONFUNDA</i></p>",
16:"<p>Errado. O quadro <b>ATENÇÃO!</b> do Resumo diz o oposto: o crédito <b>extraordinário NÃO depende de fonte disponível</b>, pois possui <b>caráter emergencial</b>.</p><p>A exigência de recursos disponíveis (e de exposição justificativa, art. 43 da Lei nº 4.320) vale para os <b>suplementares e especiais</b>.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Fontes para abertura — ATENÇÃO</i></p>",
17:"<p>Certo. É o segundo <b>R</b> do <b>ROSERA</b>: <b>recursos sem despesas correspondentes</b>, fonte para créditos suplementares e especiais.</p><p>O Resumo traz a rubrica com a remissão ao <b>art. 166, § 8º, da CF</b>; a assertiva apenas detalha as três causas previstas no dispositivo (veto, emenda ou rejeição do projeto de LOA).</p><p class='fb-fonte off'>Não consta do AFO — Resumo 06 — o material lista apenas \"recursos sem despesas correspondentes\" com a citação do art. 166, § 8º, da CF, sem transcrever veto, emenda e rejeição.</p>",
18:"<p>Certo pelo <b>art. 43, § 2º, da Lei nº 4.320</b>, no Resumo: superávit financeiro é a <b>diferença positiva entre o ativo financeiro e o passivo financeiro</b>, conjugando-se ainda os <b>saldos dos créditos adicionais transferidos</b> e as <b>operações de crédito a eles vinculadas</b>.</p><p>A fórmula do material fecha: <b>SF = AF − PF − CAR + OCV</b>.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Superávit Financeiro</i></p>",
19:"<p>Errado no <b>demonstrativo</b> — é uma das QUESTÕES-PEGADINHA do Resumo, marcada ERRADO.</p><p>O quadro <b>ATENÇÃO!</b> é expresso: o superávit financeiro é apurado no <b>Balanço Patrimonial</b> do exercício anterior. O próprio mnemônico ROSERA já avisa: superávit financeiro apurado em balanço patrimonial — <b>não é balanço financeiro</b>.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Superávit Financeiro — ATENÇÃO / QUESTÃO-PEGADINHA</i></p>",
20:"<p>Errado no <b>exercício</b> — outra QUESTÃO-PEGADINHA do Resumo, marcada ERRADO.</p><p>O ATENÇÃO! do material fixa os dois elementos: <b>Balanço Patrimonial</b> e <b>exercício anterior</b>. A banca troca ora o demonstrativo (financeiro por patrimonial), ora o exercício (corrente por anterior).</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Superávit Financeiro — ATENÇÃO / QUESTÃO-PEGADINHA</i></p>",
21:"<p>Errado no <b>nome do instituto</b> — é a terceira QUESTÃO-PEGADINHA do Resumo sobre o tema, marcada ERRADO.</p><p>O que é apurado no Balanço Patrimonial do exercício anterior é o <b>Superávit Financeiro</b>, e não \"resultado financeiro\". Demonstrativo e exercício estão certos; a palavra trocada é a primeira.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Superávit Financeiro — QUESTÃO-PEGADINHA</i></p>",
22:"<p>Errado no <b>sinal</b>. Na fórmula do Resumo, os créditos adicionais transferidos <b>são subtraídos</b>: <b>SF = AF − PF − CAR + OCV</b>.</p><p>Quem entra somando são as <b>operações de crédito vinculadas (OCV)</b>. No exemplo numérico do material: 9.200 − 1.800 − 2.600 + 1.200 = <b>R$ 6.000</b>. Se o CAR fosse somado, o resultado não bateria.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Superávit Financeiro — fórmula</i></p>",
23:"<p>Certo — são exatamente os números da QUESTÃO-EXEMPLO do Resumo.</p><p>Aplicando <b>SF = AF − PF − CAR + OCV</b>: 9.200 − 1.800 − 2.600 + 1.200 = <b>R$ 6.000</b>. Repare que o ativo e o passivo financeiros vêm do balanço patrimonial de <b>2019</b>, o exercício anterior.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Superávit Financeiro — QUESTÃO-EXEMPLO</i></p>",
24:"<p>Certo pelo <b>art. 43, § 3º, da Lei nº 4.320</b>, no Resumo: excesso de arrecadação é o <b>saldo positivo das diferenças acumuladas mês a mês</b> entre a arrecadação <b>prevista</b> e a <b>realizada</b>, considerando-se ainda a <b>tendência do exercício</b>.</p><p>O material traz essa mesma redação como QUESTÃO-EXEMPLO marcada CERTO, apontando o EA como fonte para créditos suplementares.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Excesso de Arrecadação</i></p>",
25:"<p>Certo. É a primeira dedução do quadro do Resumo: para apurar o excesso de arrecadação, deduz-se a <b>tendência de queda do exercício</b> (art. 43, § 3º).</p><p>A segunda dedução vem logo abaixo: a importância dos <b>créditos extraordinários abertos no exercício</b> (art. 43, § 4º).</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Excesso de Arrecadação</i></p>",
26:"<p>Certo. É a segunda dedução do quadro do Resumo, com base no <b>art. 43, § 4º</b>: deduz-se a importância dos <b>créditos extraordinários abertos no exercício</b>.</p><p>Fórmula do material: <b>EA = (Receitas arrecadadas além do previsto) − (Tendência de queda) − (Créditos extraordinários)</b>.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Excesso de Arrecadação</i></p>",
27:"<p>Certo — são os números da QUESTÃO-EXEMPLO do Resumo.</p><p>Aplicando a fórmula: <b>EA = 3.650 − 1.000 − 1.180 = R$ 1.470</b>. Na mesma questão, somando as três fontes disponíveis — anulação de dotações R$ 1.370, superávit financeiro R$ 6.000 e excesso de arrecadação R$ 1.470 — chega-se ao gabarito de <b>R$ 8.840</b>.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Excesso de Arrecadação — QUESTÃO-EXEMPLO</i></p>",
28:"<p>Certo. OBSERVAÇÃO 01 do Resumo: o <b>único</b> tipo de crédito adicional que pode ser autorizado <b>diretamente pela LOA</b> é o <b>suplementar</b> (art. 165, § 8º, da CF).</p><p>Especiais e extraordinários ficam de fora dessa autorização prévia na própria lei orçamentária.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Conceitos Importantes — OBSERVAÇÃO 01</i></p>",
29:"<p>Certo. Segue-se da mesma OBSERVAÇÃO 01: por poder ser autorizado diretamente pela LOA, o crédito suplementar constitui <b>exceção ao princípio da exclusividade</b>.</p><p>Guarde o par de exceções que a CF dá ao princípio: autorização para abertura de créditos <b>suplementares</b> e contratação de <b>operações de crédito</b>.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Conceitos Importantes — OBSERVAÇÃO 01</i></p>",
30:"<p>Errado — <b>atribuiu ao suplementar o que é dos outros dois</b>. Pela OBSERVAÇÃO 02 do Resumo, o crédito suplementar <b>incorpora-se ao orçamento</b>, adicionando-se à dotação orçamentária que deva reforçar.</p><p>Quem <b>conserva a especificidade</b>, com demonstração separada das despesas, são os créditos <b>especiais e extraordinários</b>.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Conceitos Importantes — OBSERVAÇÃO 02</i></p>",
31:"<p>Certo pela OBSERVAÇÃO 02 do Resumo: os créditos <b>especiais e extraordinários conservam sua especificidade</b>, demonstrando-se <b>separadamente</b> as despesas realizadas à conta deles.</p><p>Contraste que a banca explora: o <b>suplementar</b> some dentro da dotação que reforça; os outros dois continuam identificáveis.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Conceitos Importantes — OBSERVAÇÃO 02</i></p>",
32:"<p>Certo. OBSERVAÇÃO 03 do Resumo: os créditos <b>especiais e extraordinários</b> terão vigência limitada ao <b>exercício financeiro em que forem autorizados</b>.</p><p>A ressalva vem em seguida: <b>salvo</b> se o ato de autorização for promulgado nos <b>últimos 4 meses</b> do exercício.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Conceitos Importantes — OBSERVAÇÃO 03</i></p>",
33:"<p>Certo — é a exceção da OBSERVAÇÃO 03, na íntegra: autorização promulgada nos <b>últimos 4 meses</b> do exercício, crédito <b>reaberto nos limites de seus saldos</b> e <b>incorporado ao orçamento do exercício subsequente</b>.</p><p>São esses saldos reabertos que reaparecem no superávit financeiro como <b>créditos adicionais transferidos (CAR)</b>, subtraídos na fórmula SF = AF − PF − CAR + OCV.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Conceitos Importantes — OBSERVAÇÃO 03</i></p>",
34:"<p>Errado. Pela OBSERVAÇÃO 04 do Resumo, os créditos que demandam a abertura de um <b>novo programa de trabalho</b> são os <b>especiais e extraordinários</b>.</p><p>Faz sentido: o suplementar apenas <b>reforça</b> dotação já existente — o programa de trabalho já está lá. Programa novo só quando a despesa é nova.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Conceitos Importantes — OBSERVAÇÃO 04</i></p>",
35:"<p>Certo pela OBSERVAÇÃO 05 do Resumo (<b>art. 42 da Lei nº 4.320/64</b>): os créditos <b>suplementares e especiais</b> serão <b>autorizados por lei</b> e <b>abertos por decreto executivo</b>.</p><p>Separe os dois momentos: <b>autorização</b> é do Legislativo; <b>abertura</b> é do Executivo. E o ATENÇÃO logo abaixo lembra que o extraordinário dispensa a autorização legislativa.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Conceitos Importantes — OBSERVAÇÃO 05</i></p>",
36:"<p>Errado. O quadro <b>ATENÇÃO</b> da OBSERVAÇÃO 05 é expresso: o crédito <b>extraordinário não precisa de autorização legislativa</b>, porque possui <b>caráter de urgência</b>.</p><p>Quem depende de lei autorizativa são os <b>suplementares e especiais</b> (art. 42). Some a isso o outro ATENÇÃO do módulo: o extraordinário também não depende de fonte disponível.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Conceitos Importantes — OBSERVAÇÃO 05 (ATENÇÃO)</i></p>",
37:"<p>Certo pela OBSERVAÇÃO 06 do Resumo (<b>art. 43 da Lei nº 4.320/64</b>): a abertura dos créditos <b>suplementares e especiais</b> depende da <b>existência de recursos disponíveis</b> e será <b>precedida de exposição justificativa</b>.</p><p>Os recursos disponíveis são justamente os do mnemônico <b>ROSERA</b>. E, mais uma vez, o extraordinário está fora dessa exigência.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Conceitos Importantes — OBSERVAÇÃO 06</i></p>",
38:"<p>Certo. OBSERVAÇÃO 07 do Resumo: na <b>União</b>, os créditos extraordinários podem ser autorizados e abertos por <b>Medida Provisória</b> do Executivo, por seu caráter de urgência (art. 167, § 3º, c/c art. 62, ambos da CF).</p><p>Atenção ao recorte: isso é regra <b>constitucional</b> e vale para a União. Se a questão pedir \"de acordo com a Lei nº 4.320\", a resposta muda para decreto.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Conceitos Importantes — OBSERVAÇÃO 07</i></p>",
39:"<p>Errado no <b>fundamento invocado</b>. O ATENÇÃO da OBSERVAÇÃO 08 avisa: se a banca pedir <b>de acordo com a Lei nº 4.320</b>, os créditos extraordinários serão abertos por <b>decreto do Executivo</b>, e não por Medida Provisória.</p><p>O Resumo registra que a <b>FGV</b> fez exatamente essa pegadinha na prova para Consultor do Tesouro da <b>SEFAZ ES 2022</b>.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Conceitos Importantes — OBSERVAÇÃO 08 (ATENÇÃO)</i></p>",
40:"<p>Certo pelo <b>art. 44 da Lei nº 4.320</b>, na OBSERVAÇÃO 08 do Resumo: os créditos extraordinários serão abertos por <b>decreto do Poder Executivo</b>, que deles dará <b>imediato conhecimento ao Poder Legislativo</b>.</p><p>O Legislativo não autoriza previamente, mas é comunicado de imediato — é o controle que sobra no regime de urgência.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Conceitos Importantes — OBSERVAÇÃO 08</i></p>",
41:"<p>Certo. OBSERVAÇÃO 09 do Resumo: <b>nem todos os entes possuem a Medida Provisória</b> como espécie normativa; nesses casos, os créditos extraordinários serão abertos por <b>decreto do Poder Executivo</b> (art. 44 da Lei nº 4.320/64).</p><p>Monte o quadro: União com MP disponível → MP; demais entes sem MP → decreto; pergunta baseada na Lei nº 4.320 → decreto sempre.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Conceitos Importantes — OBSERVAÇÃO 09</i></p>",
42:"<p>Errado. OBSERVAÇÃO 10 do Resumo: o <b>art. 167, VII, da CF</b> veda a concessão ou utilização de <b>créditos ilimitados</b>; portanto, os créditos extraordinários <b>também estão sujeitos a limites</b>.</p><p>Cuidado com a generalização: o extraordinário dispensa autorização legislativa prévia e fonte disponível, mas <b>não</b> escapa da vedação aos créditos ilimitados.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Conceitos Importantes — OBSERVAÇÃO 10</i></p>",
43:"<p>Certo. OBSERVAÇÃO 11 do Resumo: é um desafio para o <b>controle externo</b> analisar o montante e o impacto da abertura de créditos adicionais a possibilidade de <b>alterações orçamentárias não incluídas no limite de créditos suplementares</b>.</p><p>O material registra que isso caiu na prova da <b>FGV para Auditor do TCU em 2022</b>, e ilustra com o gasto previsto para Pessoa Jurídica que acaba executado com Pessoa Física por preço inferior: a alteração ocorre em nível mais analítico e fica fora do limite.</p><p class='fb-fonte'>AFO — Resumo 06 · <i>Conceitos Importantes — OBSERVAÇÃO 11</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"06", nome:"Créditos adicionais", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, PROVA_POOL:PROVA_POOL};
})();
