/* AFO — Módulo 03: Princípios orçamentários */
window.MOD = window.MOD || {};
window.MOD.m03 = (function(){
"use strict";

var CARDS = [
  ["O que são princípios orçamentários?","Premissas, bases e <b>linhas norteadoras</b> para a elaboração, a execução e o controle do orçamento. Determinam o alcance e o sentido das regras."],
  ["Quais são os dez princípios do resumo?","Unidade · Anualidade · Universalidade · Orçamento Bruto · Exclusividade · Especificação · Unidade de Tesouraria · Proibição do Estorno · Não Vinculação da Receita de Impostos · Orçamento Impositivo."],
  ["O que diz o princípio da unidade?","O orçamento deve ser <b>uno (único)</b>: apenas <b>um orçamento para cada ente</b> da Federação. Finalidade: evitar múltiplos orçamentos paralelos no mesmo ente. <span class='lawref'>Lei 4.320, art. 2º</span>"],
  ["O que é o princípio da totalidade?","<b>Desdobramento do princípio da unidade.</b> Trata da <b>consolidação</b> dos orçamentos autônomos (fiscal, seguridade social e investimentos): há coexistência de múltiplos orçamentos que, entretanto, sofrem consolidação."],
  ["O que diz o princípio da anualidade?","O orçamento deve ser elaborado e autorizado para um <b>período determinado</b>, geralmente um ano. O <b>exercício financeiro coincidirá com o ano civil</b> <span class='lawref'>(Lei 4.320, art. 34)</span>."],
  ["O que diz o princípio da universalidade?","O orçamento deve conter <b>TODAS</b> as receitas e despesas, referentes aos Poderes, seus fundos, órgãos e entidades da administração <b>direta e indireta</b>. Permite ao Legislativo conhecer o <b>valor global</b> das despesas."],
  ["O que diz o princípio do orçamento bruto?","Todas as receitas e despesas constarão da LOA <b>pelos seus totais, vedadas quaisquer deduções</b> <span class='lawref'>(Lei 4.320, art. 6º)</span>."],
  ["Qual a relação entre universalidade e orçamento bruto?","O orçamento bruto é <b>pressuposto básico</b> do princípio da universalidade. Universalidade = <b>todas</b>; bruto = <b>pelos totais</b>."],
  ["Dê um exemplo do princípio do orçamento bruto.","A LOA deve computar a receita de alienação de bens pelo <b>valor total e bruto</b> a ser recebido, e não pelo <b>resultado (lucro)</b> obtido com a alienação."],
  ["O que diz o princípio da exclusividade?","A lei orçamentária conterá <b>apenas</b> a previsão da receita e a fixação da despesa — não pode tratar de outros temas. Também chamado de <b>pureza orçamentária</b>. <span class='lawref'>CF, art. 165, § 8º</span>"],
  ["Quais são as quatro exceções à exclusividade?","<b>1)</b> Autorização para abertura de <b>créditos suplementares</b>; <b>2)</b> contratação de <b>operações de crédito, ainda que por ARO</b>; <b>3)</b> previsão para pagamento de <b>precatórios</b> (CF, art. 100, § 5º); <b>4)</b> recursos para <b>indenizações de reforma agrária</b> (CF, art. 184, § 4º)."],
  ["O que diz o princípio da especificação?","A LOA <b>não consignará dotações globais</b>: receitas e despesas devem ser <b>discriminadas</b>, demonstrando a <b>origem e a aplicação</b> dos recursos. <span class='lawref'>Lei 4.320, art. 5º</span>"],
  ["O que são dotações globais?","Aquelas destinadas a atender <b>indiferentemente a quaisquer despesas</b> — vedadas pelo princípio da especificação."],
  ["Quais são as três exceções à especificação?","Podem ser previstas dotações globais para: <b>programas especiais de trabalho</b> ou em regime de execução especial; <b>fundos públicos</b>; e <b>reserva de contingência</b>."],
  ["O que diz o princípio da unidade de tesouraria?","Todas as receitas arrecadadas devem ser recolhidas a uma <b>conta bancária única</b> em nome do Tesouro Público. Também chamado de <b>unidade de caixa</b>. <span class='lawref'>CF, art. 164, IV</span>"],
  ["Onde são depositadas as disponibilidades de caixa da União?","No <b>Banco Central</b>."],
  ["Onde são depositadas as disponibilidades de caixa dos estados e municípios?","Em <b>instituições financeiras oficiais</b> — junto com as dos órgãos do Poder Público e das empresas por ele controladas."],
  ["Disponibilidade de caixa pode ir para banco privado?","<b>Não.</b> Mas a <b>remuneração de servidor público não é disponibilidade de caixa</b>, logo pode ser depositada em instituição financeira privada."],
  ["O que diz o princípio da proibição do estorno?","São vedados a <b>transposição, o remanejamento ou a transferência</b> de recursos de uma <b>categoria de programação para outra</b> ou de um <b>órgão para outro</b>, <b>sem prévia autorização legislativa</b>. <span class='lawref'>CF, art. 167, VI</span>"],
  ["Qual a exceção à proibição do estorno?","As atividades de <b>ciência, tecnologia e inovação (CTI)</b>: a transposição, o remanejamento ou a transferência podem ser admitidos mediante <b>ato do Poder Executivo, sem prévia autorização legislativa</b> <span class='lawref'>(CF, art. 167, § 5º)</span>."],
  ["O que diz o princípio da não vinculação?","É vedada a vinculação de receita de <b>impostos</b> a <b>órgão, fundo ou despesa</b>. <span class='lawref'>CF, art. 167, IV</span>"],
  ["Qual a pegadinha clássica da não vinculação?","Trocar <b>impostos</b> por <b>tributos</b>. O item “é vedada a vinculação de receita de <b>tributos</b>” está <b>ERRADO</b> — a vedação alcança apenas os impostos."],
  ["Quais as seis exceções à não vinculação?","<b>R</b>epartição constitucional (FPE, FPM) · <b>E</b>nsino · <b>S</b>aúde · <b>A</b>dministração tributária · <b>G</b>arantias às operações de crédito por ARO · <b>G</b>arantia ou contragarantia à União e pagamento de débitos com esta."],
  ["Dê um exemplo de exceção à não vinculação.","Os estados podem oferecer receita de <b>ICMS</b> como garantia à União na adesão a programa de recuperação fiscal."],
  ["O que diz o princípio do orçamento impositivo?","A administração tem o <b>dever de executar as programações orçamentárias</b>, adotando os meios e as medidas necessários, para garantir a <b>efetiva entrega de bens e serviços à sociedade</b>. <span class='lawref'>CF, art. 165, § 10</span>"],
  ["Quais princípios estão na Lei 4.320 e quais estão na CF?","<b>Lei 4.320:</b> unidade, anualidade, universalidade (art. 2º), orçamento bruto (art. 6º), especificação (art. 5º). <b>CF:</b> exclusividade (165, § 8º), unidade de caixa (164, IV), proibição do estorno (167, VI), não vinculação (167, IV), impositivo (165, § 10)."],
  ["Universalidade × unidade","<b>Unidade</b>: um único orçamento por ente. <b>Universalidade</b>: esse orçamento contém todas as receitas e despesas."],
  ["Especificação × orçamento bruto","<b>Especificação</b>: as despesas devem ser discriminadas, sem dotações globais. <b>Orçamento bruto</b>: os valores entram pelos totais, sem deduções."]
];

var QS = [
  ["Os princípios orçamentários são premissas e linhas norteadoras para a elaboração, a execução e o controle do orçamento.","C","FCC","Servem de parâmetro para a exata compreensão das regras."],
  ["O princípio da unidade estabelece que cada ente da Federação deve possuir apenas um orçamento.","C","CESPE","Sua finalidade é evitar múltiplos orçamentos paralelos em um mesmo ente."],
  ["O princípio da totalidade é desdobramento do princípio da universalidade.","E","FGV","É desdobramento do princípio da <b>unidade</b>: trata da consolidação dos orçamentos autônomos."],
  ["O princípio da totalidade admite a coexistência de múltiplos orçamentos que, entretanto, sofrem consolidação.","C","CESPE","Fiscal, seguridade social e investimentos convivem, mas são consolidados."],
  ["Segundo o princípio da anualidade, o exercício financeiro coincidirá com o ano civil.","C","FCC","Art. 34 da Lei nº 4.320/1964."],
  ["O princípio da universalidade determina que o orçamento contenha todas as receitas e despesas dos Poderes, fundos, órgãos e entidades da administração direta e indireta.","C","CESPE","Permite ao Legislativo conhecer o valor global das despesas."],
  ["O princípio do orçamento bruto determina que as receitas e despesas constem da LOA pelos seus valores líquidos, admitidas as deduções legais.","E","FGV","É o contrário: <b>pelos seus totais, vedadas quaisquer deduções</b>."],
  ["O princípio do orçamento bruto constitui pressuposto básico do princípio da universalidade.","C","FCC","Universalidade exige <b>todas</b>; orçamento bruto exige <b>pelos totais</b>."],
  ["De acordo com o princípio do orçamento bruto, a receita de alienação de bens deve ser computada pelo lucro obtido na operação.","E","CESPE","Deve ser computada pelo <b>valor total e bruto</b> a ser recebido."],
  ["O princípio da exclusividade determina que a lei orçamentária anual conterá apenas a previsão da receita e a fixação da despesa.","C","VUNESP","Também chamado de princípio da pureza orçamentária. CF, art. 165, § 8º."],
  ["A autorização para abertura de créditos suplementares constitui exceção ao princípio da exclusividade.","C","CESPE","É a primeira das quatro exceções do art. 165, § 8º."],
  ["A contratação de operações de crédito por antecipação de receita não pode constar da lei orçamentária anual, por violar o princípio da exclusividade.","E","FCC","É justamente uma das <b>exceções</b> admitidas pela Constituição."],
  ["A previsão para pagamento de precatórios e a inclusão de recursos para indenizações de reforma agrária constituem exceções ao princípio da exclusividade.","C","FGV","CF, art. 100, § 5º, e art. 184, § 4º."],
  ["O princípio da especificação determina que a lei orçamentária anual não consignará dotações globais.","C","CESPE","Art. 5º da Lei nº 4.320/1964."],
  ["Dotações globais são aquelas destinadas a atender indiferentemente a quaisquer despesas.","C","FCC","Por isso são vedadas pelo princípio da especificação."],
  ["A reserva de contingência constitui exceção ao princípio da especificação.","C","FGV","Ao lado dos programas especiais de trabalho e dos fundos públicos."],
  ["O princípio da especificação é também conhecido como princípio da pureza orçamentária.","E","CESPE","Pureza orçamentária é a <b>exclusividade</b>. A especificação também se chama discriminação ou especialização."],
  ["Segundo o princípio da unidade de tesouraria, todas as receitas arrecadadas devem ser recolhidas a uma conta bancária única em nome do Tesouro Público.","C","VUNESP","Também chamado de princípio da unidade de caixa. CF, art. 164, IV."],
  ["As disponibilidades de caixa da União serão depositadas em instituições financeiras oficiais.","E","CESPE","As da União vão para o <b>Banco Central</b>. As de estados e municípios é que vão para instituições financeiras oficiais."],
  ["As disponibilidades de caixa dos estados, do Distrito Federal e dos municípios serão depositadas em instituições financeiras oficiais.","C","FCC","Assim como as dos órgãos do Poder Público e das empresas por ele controladas."],
  ["As disponibilidades de caixa dos entes públicos podem ser depositadas em instituição financeira privada, desde que haja licitação.","E","FGV","Não podem. A vedação é absoluta para disponibilidades de caixa."],
  ["A remuneração de servidor público pode ser depositada em instituição financeira privada.","C","CESPE","Remuneração de servidor <b>não é disponibilidade de caixa</b>."],
  ["O princípio da proibição do estorno veda a transposição, o remanejamento ou a transferência de recursos de uma categoria de programação para outra sem prévia autorização legislativa.","C","FCC","CF, art. 167, VI."],
  ["A proibição do estorno alcança apenas a transferência de recursos entre órgãos, não entre categorias de programação.","E","CESPE","Alcança as duas hipóteses: de uma categoria de programação para outra <b>ou</b> de um órgão para outro."],
  ["No âmbito das atividades de ciência, tecnologia e inovação, a transposição, o remanejamento ou a transferência de recursos podem ser admitidos mediante ato do Poder Executivo, sem prévia autorização legislativa.","C","FGV","CF, art. 167, § 5º — única exceção ao princípio da proibição do estorno."],
  ["É vedada a vinculação de receita de tributos a órgão, fundo ou despesa.","E","CESPE","Pegadinha clássica: a vedação alcança apenas a receita de <b>impostos</b>, e não de tributos em geral."],
  ["É vedada a vinculação de receita de impostos a órgão, fundo ou despesa, ressalvadas as exceções constitucionais.","C","FCC","CF, art. 167, IV."],
  ["A destinação de recursos para as ações e serviços públicos de saúde constitui exceção ao princípio da não vinculação da receita de impostos.","C","FGV","Ao lado do ensino, da administração tributária e da repartição constitucional."],
  ["A repartição constitucional do produto da arrecadação dos impostos, como o FPE e o FPM, viola o princípio da não vinculação.","E","VUNESP","Não viola: é <b>exceção</b> expressamente prevista na Constituição."],
  ["A prestação de garantia ou contragarantia à União e o pagamento de débitos para com esta são exceções ao princípio da não vinculação da receita de impostos.","C","CESPE","Ex.: estado oferece receita de ICMS em garantia na adesão a programa de recuperação fiscal."],
  ["A destinação de recursos para realização de atividades da administração tributária constitui exceção ao princípio da não vinculação.","C","FCC","É uma das seis exceções do art. 167, IV."],
  ["Segundo o princípio do orçamento impositivo, a administração tem o dever de executar as programações orçamentárias.","C","CESPE","CF, art. 165, § 10, introduzido pela EC nº 100/2019."],
  ["O propósito do princípio do orçamento impositivo é garantir a efetiva entrega de bens e serviços à sociedade.","C","FGV","Literalidade do § 10 do art. 165."],
  ["Os princípios da unidade, da anualidade e da universalidade têm assento no art. 2º da Lei nº 4.320/1964.","C","FCC","O orçamento bruto está no art. 6º e a especificação no art. 5º."],
  ["O princípio da exclusividade tem previsão na Lei nº 4.320/1964.","E","CESPE","Está na <b>Constituição Federal</b>, art. 165, § 8º."],
  ["O princípio da universalidade permite ao Poder Legislativo conhecer o valor global das despesas.","C","VUNESP","É justamente a finalidade do princípio."],
  ["O princípio da unidade e o princípio da universalidade têm o mesmo conteúdo.","E","FGV","<b>Unidade</b> é um orçamento por ente; <b>universalidade</b> é esse orçamento conter todas as receitas e despesas."],
  ["Fundos públicos e programas especiais de trabalho podem receber dotações globais.","C","CESPE","São exceções ao princípio da especificação, ao lado da reserva de contingência."]
];

var FEY = {
  q1:{ask:"Explique os princípios da unidade, da totalidade, da anualidade e da universalidade.",
    hint:"Quatro princípios, quatro frases. Diga qual é desdobramento de qual e onde cada um se apoia na lei.",
    ref:"O princípio da unidade estabelece que o orçamento deve ser uno, isto é, deve haver apenas um orçamento para cada ente da Federação, com a finalidade de evitar múltiplos orçamentos paralelos em um mesmo ente. Dele decorre o princípio da totalidade, que trata da consolidação dos orçamentos autônomos — fiscal, da seguridade social e de investimentos — admitindo a coexistência de múltiplos orçamentos que, entretanto, sofrem consolidação. O princípio da anualidade, ou periodicidade, determina que o orçamento seja elaborado e autorizado para um período determinado, geralmente um ano, coincidindo o exercício financeiro com o ano civil, nos termos do art. 34 da Lei nº 4.320/1964. O princípio da universalidade, ou globalização, exige que o orçamento contenha todas as receitas e todas as despesas referentes aos Poderes, seus fundos, órgãos e entidades da administração direta e indireta, o que permite ao Poder Legislativo conhecer o valor global das despesas. Os três primeiros têm assento no art. 2º da Lei nº 4.320/1964."},
  q2:{ask:"Explique os princípios do orçamento bruto, da exclusividade e da especificação, com suas exceções.",
    hint:"O bruto é pressuposto de qual? A exclusividade tem quatro exceções e a especificação tem três — liste todas.",
    ref:"O princípio do orçamento bruto dispõe que todas as receitas e despesas constarão da lei orçamentária pelos seus totais, vedadas quaisquer deduções, nos termos do art. 6º da Lei nº 4.320/1964, constituindo pressuposto básico do princípio da universalidade: assim, a receita de alienação de bens deve ser computada pelo valor total e bruto a ser recebido, e não pelo lucro obtido. O princípio da exclusividade, ou pureza orçamentária, previsto no art. 165, § 8º, da Constituição, determina que a lei orçamentária contenha apenas a previsão da receita e a fixação da despesa, comportando quatro exceções: a autorização para abertura de créditos suplementares; a contratação de operações de crédito, ainda que por antecipação de receita; a previsão para pagamento de precatórios; e a inclusão de recursos para indenizações de reforma agrária. O princípio da especificação, também chamado de discriminação ou especialização, previsto no art. 5º da Lei nº 4.320/1964, veda que a lei orçamentária consigne dotações globais — aquelas destinadas a atender indiferentemente a quaisquer despesas —, exigindo que receitas e despesas sejam discriminadas de modo a demonstrar a origem e a aplicação dos recursos; admitem-se dotações globais apenas para programas especiais de trabalho ou em regime de execução especial, fundos públicos e reserva de contingência."},
  q3:{ask:"Explique o princípio da unidade de tesouraria e o regime das disponibilidades de caixa.",
    hint:"Depois do conceito, separe União de estados e municípios — e não esqueça da remuneração de servidor.",
    ref:"O princípio da unidade de tesouraria, ou unidade de caixa, previsto no art. 164, IV, da Constituição Federal, determina que todas as receitas arrecadadas sejam recolhidas a uma conta bancária única em nome do Tesouro Público, de modo que os recursos não fiquem dispersos em contas paralelas. Quanto às disponibilidades de caixa, a Constituição distingue dois regimes: as da União serão depositadas no Banco Central, ao passo que as dos estados, do Distrito Federal, dos municípios, dos órgãos do Poder Público e das empresas por ele controladas serão depositadas em instituições financeiras oficiais. Em nenhuma hipótese as disponibilidades de caixa podem ser depositadas em instituição financeira privada. Ressalve-se, contudo, que a remuneração de servidor público não constitui disponibilidade de caixa e, por isso, pode ser depositada em instituição financeira privada."},
  q4:{ask:"Explique a proibição do estorno e a não vinculação da receita de impostos, com as respectivas exceções.",
    hint:"Na não vinculação, o termo exato é impostos — não tributos. E são seis exceções: liste todas.",
    ref:"O princípio da proibição do estorno, previsto no art. 167, VI, da Constituição, veda a transposição, o remanejamento ou a transferência de recursos de uma categoria de programação para outra ou de um órgão para outro sem prévia autorização legislativa. Sua única exceção está no art. 167, § 5º: no âmbito das atividades de ciência, tecnologia e inovação, essas operações podem ser admitidas mediante ato do Poder Executivo, sem necessidade de prévia autorização legislativa, com o objetivo de viabilizar os resultados de projetos restritos a essas funções. O princípio da não vinculação, previsto no art. 167, IV, veda a vinculação de receita de impostos a órgão, fundo ou despesa — note-se que a vedação alcança os impostos, e não os tributos em geral. São exceções a repartição constitucional do produto da arrecadação dos impostos, como o Fundo de Participação dos Estados e o dos Municípios; a destinação de recursos para manutenção e desenvolvimento do ensino; para as ações e serviços públicos de saúde; para a realização de atividades da administração tributária; a prestação de garantias às operações de crédito por antecipação de receita; e a prestação de garantia ou contragarantia à União e o pagamento de débitos para com esta."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  q1:[
    sl("O que são e quais são",
      '<p>Princípios orçamentários são <span class="key">premissas, bases e linhas norteadoras</span> para a elaboração, a execução e o controle do orçamento. Determinam o alcance e o sentido das regras.</p>'+
      '<div class="box"><span class="bl">Os dez do resumo — e onde cada um mora</span>'+
      '<ul><li><b>Unidade</b> · <b>Anualidade</b> · <b>Universalidade</b> — <span class="lawref">Lei 4.320, art. 2º</span></li>'+
      '<li><b>Orçamento bruto</b> — <span class="lawref">art. 6º</span> · <b>Especificação</b> — <span class="lawref">art. 5º</span></li>'+
      '<li><b>Exclusividade</b> — <span class="lawref">CF, art. 165, § 8º</span></li>'+
      '<li><b>Unidade de caixa</b> — <span class="lawref">CF, art. 164, IV</span></li>'+
      '<li><b>Proibição do estorno</b> — <span class="lawref">CF, art. 167, VI</span></li>'+
      '<li><b>Não vinculação da receita de impostos</b> — <span class="lawref">CF, art. 167, IV</span></li>'+
      '<li><b>Orçamento impositivo</b> — <span class="lawref">CF, art. 165, § 10</span></li></ul></div>'+
      '<div class="box tip"><span class="bl">Atalho</span><p>Os cinco “clássicos” da <b>Lei 4.320</b>; os cinco “constitucionais” da <b>CF</b>. Saber de onde vem cada um já resolve várias questões.</p></div>')
  ],
  q2:[
    sl("Unidade e totalidade",
      '<div class="box"><span class="bl">Unidade</span>'+
      '<ul><li>O orçamento deve ser <b>uno (único)</b>.</li>'+
      '<li>Apenas <b>um orçamento para cada ente</b> da Federação.</li>'+
      '<li>Finalidade: <b>evitar múltiplos orçamentos paralelos</b> em um mesmo ente.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Totalidade — desdobramento da UNIDADE</span>'+
      '<p>Trata da <b>consolidação</b> dos orçamentos autônomos (fiscal, seguridade social e investimentos). Há <b>coexistência</b> de múltiplos orçamentos que, entretanto, <b>sofrem consolidação</b>.</p>'+
      '<p>A banca troca: totalidade é desdobramento da unidade, <b>não</b> da universalidade.</p></div>'),
    sl("Anualidade e universalidade",
      '<div class="box"><span class="bl">Anualidade (periodicidade)</span>'+
      '<ul><li>O orçamento deve ser elaborado e autorizado para um <b>período determinado</b>.</li>'+
      '<li>Esse período geralmente é de <b>um ano</b>.</li>'+
      '<li>O <b>exercício financeiro coincidirá com o ano civil</b> <span class="lawref">(Lei 4.320, art. 34)</span>.</li></ul></div>'+
      '<div class="box"><span class="bl">Universalidade (globalização)</span>'+
      '<ul><li>O orçamento deve conter <b>TODAS</b> as receitas e despesas.</li>'+
      '<li>Referentes aos <b>Poderes, seus fundos, órgãos e entidades</b> da administração <b>direta e indireta</b>.</li>'+
      '<li>Permite ao Legislativo conhecer o <b>VALOR GLOBAL</b> das despesas.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Unidade × universalidade</span><p><b>Unidade</b>: um orçamento por ente. <b>Universalidade</b>: esse orçamento contém tudo.</p></div>')
  ],
  q3:[
    sl("Orçamento bruto",
      '<p>Todas as receitas e despesas constarão da LOA <span class="key">pelos seus totais, vedadas quaisquer deduções</span> <span class="lawref">(Lei 4.320, art. 6º)</span>.</p>'+
      '<div class="box tip"><span class="bl">Exemplo</span><p>A LOA deve computar a receita de alienação de bens pelo <b>valor total e bruto</b> a ser recebido, e <b>não</b> pelo resultado (lucro) obtido com a alienação.</p></div>'+
      '<div class="box trap"><span class="bl">Universalidade × orçamento bruto</span>'+
      '<p><b>Universalidade:</b> o orçamento deve conter <b>TODAS</b> as receitas e despesas.</p>'+
      '<p><b>Orçamento bruto:</b> todas elas constarão <b>pelos seus totais</b>, vedadas deduções.</p>'+
      '<p>O orçamento bruto é <b>pressuposto básico</b> da universalidade.</p></div>'),
    sl("Exclusividade (pureza orçamentária)",
      '<p>O orçamento deve conter <span class="key">apenas a previsão de receita e a fixação de despesas</span>. A lei orçamentária trata exclusivamente disso, e não de outros temas. <span class="lawref">CF, art. 165, § 8º</span></p>'+
      '<div class="box trap"><span class="bl">As quatro exceções</span>'+
      '<ul><li>Autorização para abertura de <b>créditos suplementares</b>;</li>'+
      '<li>Contratação de <b>operações de crédito</b>, ainda que por antecipação de receita;</li>'+
      '<li>Previsão para pagamento de <b>precatórios</b> <span class="lawref">(CF, art. 100, § 5º)</span>;</li>'+
      '<li>Inclusão de recursos para <b>indenizações de reforma agrária</b> <span class="lawref">(CF, art. 184, § 4º)</span>.</li></ul></div>'),
    sl("Especificação (discriminação / especialização)",
      '<div class="chips">'+
      '<div class="chip"><span class="cn">1) A regra</span><span class="cd">A LOA <b>não consignará dotações globais</b>.</span></div>'+
      '<div class="chip"><span class="cn">2) O que são</span><span class="cd">Dotações globais são as destinadas a atender <b>indiferentemente a quaisquer despesas</b>.</span></div>'+
      '<div class="chip"><span class="cn">3) O dever</span><span class="cd">Receitas e despesas devem ser <b>discriminadas</b>.</span></div>'+
      '<div class="chip"><span class="cn">4) A finalidade</span><span class="cd">Demonstrar a <b>origem e a aplicação</b> dos recursos.</span></div></div>'+
      '<div class="box trap"><span class="bl">As três exceções — cabem dotações globais para</span>'+
      '<ul><li><b>Programas especiais de trabalho</b> ou em regime de execução especial;</li>'+
      '<li><b>Fundos públicos</b>;</li>'+
      '<li><b>Reserva de contingência</b>.</li></ul></div>')
  ],
  q4:[
    sl("Unidade de tesouraria (unidade de caixa)",
      '<p>Todas as receitas arrecadadas devem ser recolhidas para uma <span class="key">conta bancária única em nome do Tesouro Público</span>. <span class="lawref">CF, art. 164, IV</span></p>'+
      '<div class="box tip"><span class="bl">Exemplo</span><p>Câmara municipal realiza concurso público: os recursos da <b>taxa de inscrição</b> são receita pública e devem ser depositados na <b>conta única do Tesouro municipal</b>, e não na conta da empresa organizadora.</p></div>'),
    sl("Onde ficam as disponibilidades de caixa",
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">U</span><span class="nm">União</span></div><div class="fn-b"><p>Disponibilidades depositadas no <b>Banco Central</b>.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">E</span><span class="nm">Estados, DF e municípios</span></div><div class="fn-b"><p>Depositadas em <b>instituições financeiras oficiais</b> — assim como as dos órgãos do Poder Público e das empresas por ele controladas.</p></div></div></div>'+
      '<div class="box trap"><span class="bl">Duas regras que caem juntas</span>'+
      '<ul><li>Disponibilidades de caixa <b>não podem</b> ser depositadas em instituição financeira <b>privada</b>.</li>'+
      '<li><b>Remuneração de servidor não é disponibilidade de caixa</b> — logo, <b>pode</b> ser depositada em banco privado.</li></ul></div>')
  ],
  q5:[
    sl("Proibição do estorno",
      '<p>São vedados a <span class="key">transposição, o remanejamento ou a transferência</span> de recursos de uma <b>categoria de programação para outra</b> ou de um <b>órgão para outro</b>, <b>sem prévia autorização legislativa</b>. <span class="lawref">CF, art. 167, VI</span></p>'+
      '<div class="box tip"><span class="bl">Exemplo</span><p>Prefeitura remaneja recursos da saúde para a educação sem autorização da Câmara: viola a proibição do estorno.</p></div>'+
      '<div class="box trap"><span class="bl">A exceção — CTI</span>'+
      '<p>No âmbito das atividades de <b>ciência, tecnologia e inovação</b>, a transposição, o remanejamento ou a transferência podem ser admitidos <b>mediante ato do Poder Executivo, sem prévia autorização legislativa</b>, para viabilizar os resultados de projetos restritos a essas funções <span class="lawref">(CF, art. 167, § 5º)</span>.</p></div>'),
    sl("Não vinculação da receita de impostos",
      '<p>É vedada a vinculação de receita de <span class="key">impostos</span> a <b>órgão, fundo ou despesa</b>. <span class="lawref">CF, art. 167, IV</span></p>'+
      '<div class="box trap"><span class="bl">A pegadinha do módulo</span>'+
      '<p>“É vedada a vinculação de receita de <b>tributos</b> a órgão, fundo ou despesa.” → <b>ERRADO</b>. A vedação alcança apenas os <b>impostos</b>. Taxas e contribuições, por natureza, já nascem vinculadas.</p></div>'+
      '<div class="box"><span class="bl">As seis exceções</span>'+
      '<ul><li><b>R</b>epartição constitucional do produto da arrecadação (ex.: FPE, FPM);</li>'+
      '<li>Manutenção e desenvolvimento do <b>E</b>nsino;</li>'+
      '<li>Ações e serviços públicos de <b>S</b>aúde;</li>'+
      '<li>Atividades da <b>A</b>dministração tributária;</li>'+
      '<li><b>G</b>arantias às operações de crédito por antecipação de receita;</li>'+
      '<li><b>G</b>arantia ou contragarantia à União e pagamento de débitos para com esta.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Exemplo de exceção</span><p>Estados podem oferecer receita de <b>ICMS</b> como garantia à União na adesão a programa de recuperação fiscal.</p></div>'),
    sl("Orçamento impositivo",
      '<p>O modelo de orçamento público brasileiro é <span class="key">impositivo ao Poder Executivo</span>: a administração tem o <b>dever de executar as programações orçamentárias</b>, adotando os meios e as medidas necessários, com o propósito de garantir a <b>efetiva entrega de bens e serviços à sociedade</b>. <span class="lawref">CF, art. 165, § 10</span></p>'+
      '<div class="box tip"><span class="bl">Por que é um princípio “novo”</span><p>Ele supera o antigo debate sobre a natureza jurídica da lei orçamentária — se as programações representavam mera autorização (modelo autorizativo) ou se tinham caráter vinculante. Prevaleceu o <b>caráter vinculante</b>.</p></div>')
  ]
};

var EX = {
h1:{t:"match", instr:"Correlacione o princípio à sua base legal",
  pairs:[["Unidade, anualidade e universalidade","Lei 4.320, art. 2º"],
         ["Orçamento bruto","Lei 4.320, art. 6º"],
         ["Especificação","Lei 4.320, art. 5º"],
         ["Exclusividade","CF, art. 165, § 8º"],
         ["Unidade de caixa","CF, art. 164, IV"],
         ["Não vinculação","CF, art. 167, IV"]]},

h2:{t:"sort", instr:"O princípio está na Lei 4.320 ou na Constituição?",
  buckets:["Lei nº 4.320/1964","Constituição Federal"],
  items:[["Unidade",0],["Anualidade",0],["Universalidade",0],["Orçamento bruto",0],["Especificação",0],
         ["Exclusividade",1],["Unidade de caixa",1],["Proibição do estorno",1],
         ["Não vinculação da receita de impostos",1],["Orçamento impositivo",1]],
  why:"Cinco de cada lado. Saber a origem já resolve boa parte das questões."},

h3:{t:"gap", instr:"Complete a frase",
  before:"O princípio da totalidade é desdobramento do princípio da ", after:".",
  options:["unidade","universalidade","especificação"], answer:0,
  why:"Trata da <b>consolidação</b> dos orçamentos autônomos — fiscal, seguridade e investimentos."},

h4:{t:"mc", instr:"O princípio da anualidade determina que:",
  options:["o exercício financeiro coincidirá com o ano civil",
           "o orçamento deve conter todas as receitas e despesas",
           "cada ente terá apenas um orçamento",
           "as despesas serão discriminadas por elemento"], answer:0,
  why:"Art. 34 da Lei nº 4.320/1964."},

h5:{t:"match", instr:"Correlacione o princípio ao seu outro nome",
  pairs:[["Anualidade","Periodicidade"],["Universalidade","Globalização"],
         ["Exclusividade","Pureza orçamentária"],["Especificação","Discriminação ou especialização"],
         ["Unidade de tesouraria","Unidade de caixa"]]},

h6:{t:"gap", instr:"Complete a frase",
  before:"O princípio da universalidade permite ao Poder Legislativo conhecer o ", after:" das despesas.",
  options:["valor global","valor líquido","valor per capita"], answer:0,
  why:"É justamente a finalidade do princípio."},

h7:{t:"wordbank", instr:"Monte o princípio do orçamento bruto",
  target:["pelos","seus","totais,","vedadas","quaisquer","deduções"],
  extra:["líquidos,","admitidas","legais"],
  why:"Art. 6º da Lei nº 4.320/1964. Trocar “totais” por “líquidos” torna o item errado."},

h8:{t:"mc", instr:"Segundo o princípio do orçamento bruto, a receita de alienação de bens deve constar da LOA:",
  options:["pelo valor total e bruto a ser recebido","pelo lucro obtido na operação",
           "pelo valor contábil do bem","pelo valor líquido após tributos"], answer:0,
  why:"Vedadas quaisquer deduções — inclusive a do custo do bem alienado."},

h9:{t:"multi", instr:"Marque as exceções ao princípio da exclusividade",
  options:["Autorização para abertura de créditos suplementares",
           "Contratação de operações de crédito, ainda que por ARO",
           "Previsão para pagamento de precatórios",
           "Inclusão de recursos para indenizações de reforma agrária",
           "Criação de cargos públicos",
           "Alteração da legislação tributária"],
  answers:[0,1,2,3],
  why:"São exatamente quatro. Criar cargos e alterar tributos na LOA violaria a exclusividade."},

h10:{t:"gap", instr:"Complete a frase",
  before:"O princípio da exclusividade determina que a lei orçamentária conterá apenas a previsão da receita e a ",
  after:" da despesa.", options:["fixação","execução","arrecadação"], answer:0,
  why:"Receita se prevê; despesa se fixa. CF, art. 165, § 8º."},

h11:{t:"multi", instr:"Marque o que caracteriza o princípio da especificação",
  options:["A LOA não consignará dotações globais",
           "Receitas e despesas devem ser discriminadas",
           "Devem demonstrar a origem e a aplicação dos recursos",
           "Dotações globais atendem indiferentemente a quaisquer despesas",
           "A LOA conterá apenas receita e despesa",
           "As receitas constarão pelos seus totais"],
  answers:[0,1,2,3],
  why:"As duas últimas descrevem a <b>exclusividade</b> e o <b>orçamento bruto</b>."},

h12:{t:"multi", instr:"Marque as exceções ao princípio da especificação",
  options:["Programas especiais de trabalho ou em regime de execução especial",
           "Fundos públicos","Reserva de contingência",
           "Créditos suplementares","Precatórios"],
  answers:[0,1,2],
  why:"São três. Créditos suplementares e precatórios são exceções à <b>exclusividade</b>."},

h13:{t:"sort", instr:"A exceção pertence a qual princípio?",
  buckets:["Exclusividade","Especificação"],
  items:[["Autorização para créditos suplementares",0],["Operações de crédito por ARO",0],
         ["Precatórios",0],["Indenizações de reforma agrária",0],
         ["Programas especiais de trabalho",1],["Fundos públicos",1],["Reserva de contingência",1]],
  why:"Quatro exceções à exclusividade, três à especificação. A banca embaralha as duas listas."},

h14:{t:"gap", instr:"Complete a frase",
  before:"As disponibilidades de caixa da União serão depositadas ", after:".",
  options:["no Banco Central","em instituições financeiras oficiais","em conta única do Tesouro estadual"],
  answer:0,
  why:"Estados, DF e municípios é que depositam em instituições financeiras oficiais."},

h15:{t:"sort", instr:"Onde cada disponibilidade pode ser depositada?",
  buckets:["Banco Central","Instituição financeira oficial","Pode ser banco privado"],
  items:[["Disponibilidades de caixa da União",0],
         ["Disponibilidades de caixa de estado",1],
         ["Disponibilidades de caixa de município",1],
         ["Disponibilidades de empresa controlada pelo Poder Público",1],
         ["Remuneração de servidor público",2]],
  why:"Remuneração de servidor <b>não é disponibilidade de caixa</b> — essa é a saída da regra."},

h16:{t:"mc", instr:"A remuneração de servidor público:",
  options:["pode ser depositada em instituição financeira privada, por não ser disponibilidade de caixa",
           "deve ser depositada no Banco Central",
           "deve ser depositada em instituição financeira oficial",
           "não se sujeita ao princípio da unidade de caixa apenas na União"], answer:0,
  why:"Ponto que a banca explora como exceção aparente ao art. 164, IV."},

h17:{t:"wordbank", instr:"Monte a vedação do art. 167, VI",
  target:["transposição,","remanejamento","ou","transferência","de","recursos"],
  extra:["anulação","suplementação","dotação"],
  why:"São os três verbos da proibição do estorno — de uma categoria de programação para outra ou de um órgão para outro."},

h18:{t:"mc", instr:"A exceção ao princípio da proibição do estorno alcança:",
  options:["as atividades de ciência, tecnologia e inovação",
           "as despesas com saúde e educação",
           "as despesas com pessoal","os precatórios"], answer:0,
  why:"CF, art. 167, § 5º — mediante ato do Poder Executivo, sem prévia autorização legislativa."},

h19:{t:"gap", instr:"Complete a frase — atenção ao termo exato",
  before:"É vedada a vinculação de receita de ", after:" a órgão, fundo ou despesa.",
  options:["impostos","tributos","taxas"], answer:0,
  why:"A pegadinha nº 1 do módulo. A vedação alcança apenas os <b>impostos</b>."},

h20:{t:"multi", instr:"Marque as exceções ao princípio da não vinculação da receita de impostos",
  options:["Repartição constitucional da arrecadação (FPE, FPM)",
           "Manutenção e desenvolvimento do ensino",
           "Ações e serviços públicos de saúde",
           "Atividades da administração tributária",
           "Garantias às operações de crédito por antecipação de receita",
           "Garantia ou contragarantia à União",
           "Despesas com pessoal e encargos sociais"],
  answers:[0,1,2,3,4,5],
  why:"São seis. Despesa com pessoal não é exceção — nenhuma receita de imposto pode ser a ela vinculada."},

h21:{t:"sort", instr:"Viola ou não viola a não vinculação?",
  buckets:["Não viola — é exceção","Violaria"],
  items:[["Transferência do FPM aos municípios",0],
         ["Vinculação de receita de imposto ao ensino",0],
         ["Vinculação de receita de imposto à saúde",0],
         ["ICMS oferecido em garantia à União",0],
         ["Vinculação de receita de imposto a um fundo de cultura",1],
         ["Vinculação de receita de imposto ao pagamento de pessoal",1]],
  why:"Fora das seis hipóteses constitucionais, qualquer vinculação de receita de imposto é vedada."},

h22:{t:"order", instr:"Ordene o raciocínio do princípio do orçamento impositivo",
  items:["Havia debate sobre a natureza da lei orçamentária",
         "A EC nº 100/2019 introduziu o § 10 do art. 165 da CF",
         "A administração passou a ter o dever de executar as programações",
         "O propósito é a efetiva entrega de bens e serviços à sociedade"],
  why:"O princípio supera o antigo debate entre modelo autorizativo e caráter vinculante."},

h23:{t:"match", instr:"Correlacione o princípio ao seu conteúdo",
  pairs:[["Unidade","Um único orçamento por ente"],
         ["Universalidade","Todas as receitas e despesas"],
         ["Orçamento bruto","Pelos totais, sem deduções"],
         ["Exclusividade","Só receita e despesa"],
         ["Especificação","Sem dotações globais"]]},

h24:{t:"sort", instr:"Qual princípio foi violado em cada situação?",
  buckets:["Especificação","Unidade de caixa","Proibição do estorno","Não vinculação"],
  items:[["LOA com dotação global para “despesas diversas”",0],
         ["Taxa de inscrição depositada na conta da empresa organizadora",1],
         ["Remanejamento da saúde para a educação sem lei",2],
         ["Vinculação de receita de IPVA a um fundo municipal de esportes",3]],
  why:"Cada situação viola exatamente um princípio — identificar qual é o formato preferido da FGV."},

h25:{t:"mc", instr:"O princípio da exclusividade também é conhecido como:",
  options:["pureza orçamentária","globalização","especialização","periodicidade"], answer:0,
  why:"Globalização é universalidade; especialização é especificação; periodicidade é anualidade."},

h26:{t:"multi", instr:"Marque o que é verdadeiro sobre o princípio da unidade",
  options:["O orçamento deve ser uno",
           "Apenas um orçamento para cada ente da Federação",
           "Evita múltiplos orçamentos paralelos em um mesmo ente",
           "Dele decorre o princípio da totalidade",
           "Exige que o orçamento contenha todas as receitas e despesas",
           "Veda dotações globais"],
  answers:[0,1,2,3],
  why:"As duas últimas são universalidade e especificação."},

h27:{t:"gap", instr:"Complete a frase",
  before:"O princípio do orçamento bruto constitui pressuposto básico do princípio da ", after:".",
  options:["universalidade","unidade","exclusividade"], answer:0,
  why:"Universalidade exige <b>todas</b>; o bruto exige que essas todas entrem <b>pelos totais</b>."},

h28:{t:"order", instr:"Ordene do mais amplo ao mais específico",
  items:["Unidade — um orçamento por ente",
         "Universalidade — esse orçamento contém todas as receitas e despesas",
         "Orçamento bruto — todas elas pelos seus totais",
         "Especificação — cada uma delas discriminada"],
  why:"A cadeia mostra por que o orçamento bruto é pressuposto da universalidade."}
};

for(var i=0;i<QS.length;i++) EX["v"+i]={t:"ce", qi:i};

var KIT = {
  q1:{tema:"Unidade, totalidade, anualidade e universalidade",
    bases:["Lei nº 4.320/1964, art. 2º — unidade, universalidade e anualidade",
           "Lei nº 4.320/1964, art. 34 — exercício financeiro e ano civil",
           "CF/1988, art. 165, § 5º — universalidade e os três orçamentos",
           "MCASP — princípios orçamentários"],
    ouro:["uno","um orçamento para cada ente","múltiplos orçamentos paralelos",
          "consolidação dos orçamentos autônomos","período determinado",
          "exercício financeiro coincidirá com o ano civil","todas as receitas e despesas",
          "administração direta e indireta","valor global das despesas"],
    abertura:"Os princípios orçamentários são as premissas e linhas norteadoras da elaboração, execução e controle do orçamento, determinando o alcance e o sentido das regras que o disciplinam.",
    evite:"Não diga que a totalidade decorre da universalidade. É desdobramento da <b>unidade</b>, e trata da consolidação dos orçamentos autônomos."},
  q2:{tema:"Orçamento bruto, exclusividade e especificação",
    bases:["Lei nº 4.320/1964, art. 6º — orçamento bruto",
           "Lei nº 4.320/1964, art. 5º — especificação",
           "CF/1988, art. 165, § 8º — exclusividade",
           "CF/1988, art. 100, § 5º e art. 184, § 4º — exceções à exclusividade"],
    ouro:["pelos seus totais","vedadas quaisquer deduções","pressuposto básico da universalidade",
          "pureza orçamentária","créditos suplementares","operações de crédito por antecipação de receita",
          "precatórios","indenizações de reforma agrária","dotações globais",
          "origem e aplicação dos recursos","reserva de contingência"],
    abertura:"O princípio do orçamento bruto, o da exclusividade e o da especificação operam sobre o conteúdo da lei orçamentária, delimitando, respectivamente, como os valores entram, o que a lei pode conter e em que grau de detalhe.",
    evite:"Não misture as listas de exceções: quatro são da exclusividade e três são da especificação."},
  q3:{tema:"Unidade de tesouraria",
    bases:["CF/1988, art. 164, § 3º — disponibilidades de caixa",
           "Lei nº 4.320/1964, art. 56 — recolhimento de todas as receitas",
           "LC nº 101/2000, art. 43 — disponibilidades de caixa e aplicação"],
    ouro:["conta bancária única","Tesouro Público","disponibilidades de caixa",
          "Banco Central","instituições financeiras oficiais","instituição financeira privada",
          "remuneração de servidor não é disponibilidade de caixa"],
    abertura:"O princípio da unidade de tesouraria, ou unidade de caixa, impõe que todas as receitas arrecadadas sejam recolhidas a uma conta bancária única em nome do Tesouro Público, evitando a dispersão dos recursos em caixas paralelos.",
    evite:"Não inverta os destinatários: as disponibilidades da União vão ao Banco Central; as dos demais entes, a instituições financeiras oficiais."},
  q4:{tema:"Proibição do estorno e não vinculação",
    bases:["CF/1988, art. 167, VI — proibição do estorno",
           "CF/1988, art. 167, § 5º — exceção das atividades de CTI",
           "CF/1988, art. 167, IV — não vinculação da receita de impostos",
           "CF/1988, art. 165, § 10 — orçamento impositivo"],
    ouro:["transposição, remanejamento ou transferência","categoria de programação",
          "prévia autorização legislativa","ciência, tecnologia e inovação",
          "receita de impostos","órgão, fundo ou despesa","repartição constitucional",
          "manutenção e desenvolvimento do ensino","ações e serviços públicos de saúde",
          "administração tributária","garantia ou contragarantia à União"],
    abertura:"Os princípios da proibição do estorno e da não vinculação da receita de impostos operam sobre a execução orçamentária, preservando, respectivamente, a decisão alocativa do Legislativo e a liberdade de alocação dos recursos gerais do ente.",
    evite:"Nunca escreva “receita de tributos”. A vedação do art. 167, IV, alcança apenas a receita de <b>impostos</b>."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. Princípios é tema de listas: o espelho conta exceções nomeadas, não parágrafos bonitos.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre os princípios orçamentários, disserte necessariamente sobre:</p>'+
  '<ol><li>os princípios da unidade, da totalidade e da universalidade, e a relação do orçamento bruto com este último;</li>'+
  '<li>o princípio da exclusividade e suas exceções constitucionais;</li>'+
  '<li>o princípio da não vinculação da receita de impostos, delimitando seu alcance e indicando suas exceções.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>O princípio da <b>unidade</b> estabelece que o orçamento deve ser uno, havendo apenas um orçamento para cada ente da Federação, com a finalidade de evitar a coexistência de múltiplos orçamentos paralelos em um mesmo ente. Dele decorre o princípio da <b>totalidade</b>, que trata da consolidação dos orçamentos autônomos — fiscal, da seguridade social e de investimentos —, admitindo que múltiplos orçamentos coexistam desde que sofram consolidação. O princípio da <b>universalidade</b>, por sua vez, exige que o orçamento contenha todas as receitas e todas as despesas referentes aos Poderes, seus fundos, órgãos e entidades da administração direta e indireta, o que permite ao Poder Legislativo conhecer o valor global das despesas. A esse último se liga o princípio do <b>orçamento bruto</b>, previsto no art. 6º da Lei nº 4.320/1964, segundo o qual todas as receitas e despesas constarão da lei orçamentária pelos seus totais, vedadas quaisquer deduções, constituindo <b>pressuposto básico</b> da universalidade: assim, a receita de alienação de bens deve ser computada pelo valor total e bruto a ser recebido, e não pelo lucro apurado.</p>'+
  '<p>O princípio da <b>exclusividade</b>, também denominado princípio da pureza orçamentária e previsto no art. 165, § 8º, da Constituição Federal, determina que a lei orçamentária anual contenha apenas a previsão da receita e a fixação da despesa, vedando-lhe tratar de matéria estranha. Comporta quatro exceções expressas: a autorização para abertura de créditos suplementares; a contratação de operações de crédito, ainda que por antecipação de receita; a previsão para pagamento de precatórios, nos termos do art. 100, § 5º; e a inclusão de recursos destinados a indenizações de reforma agrária, na forma do art. 184, § 4º.</p>'+
  '<p>Por fim, o princípio da <b>não vinculação</b>, previsto no art. 167, IV, da Constituição, veda a vinculação de receita de <b>impostos</b> a órgão, fundo ou despesa. Cumpre delimitar o alcance da regra: a vedação recai exclusivamente sobre os impostos, e não sobre os tributos em geral, uma vez que taxas e contribuições, por sua própria natureza, nascem vinculadas a uma atuação estatal ou a uma finalidade. São exceções ao princípio a repartição constitucional do produto da arrecadação dos impostos, como ocorre com o Fundo de Participação dos Estados e o dos Municípios; a destinação de recursos para manutenção e desenvolvimento do ensino; para as ações e serviços públicos de saúde; para a realização de atividades da administração tributária; a prestação de garantias às operações de crédito por antecipação de receita; e a prestação de garantia ou contragarantia à União e o pagamento de débitos para com esta.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> dizer que a totalidade decorre da <b>unidade</b> e que o orçamento bruto é <b>pressuposto</b> da universalidade. O exemplo da alienação vale ponto.</li>'+
  '<li><b>Item 2:</b> as <b>quatro</b> exceções nomeadas. Citar os arts. 100, § 5º, e 184, § 4º, rende o item cheio.</li>'+
  '<li><b>Item 3:</b> a delimitação <b>impostos ≠ tributos</b> — este é o ponto central — e as <b>seis</b> exceções.</li>'+
  '<li><b>Fecho:</b> desnecessário. Em tema de listas, use as linhas finais para completar a enumeração.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Nomeie o princípio violado e o dispositivo em uma frase por item.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>A lei orçamentária de determinado município apresenta as seguintes disposições e, durante a execução, ocorrem os fatos indicados:</p>'+
  '<ol><li>consigna dotação global de R$ 5 milhões rotulada “despesas diversas da administração”;</li>'+
  '<li>cria, em seu texto, dois cargos de assessor e altera a alíquota do ISS;</li>'+
  '<li>registra a receita de alienação de imóveis apenas pelo ganho apurado na operação;</li>'+
  '<li>determina que a arrecadação da taxa de inscrição de concurso permaneça em conta da empresa organizadora;</li>'+
  '<li>o prefeito remaneja, por decreto, recursos da função saúde para a função educação;</li>'+
  '<li>a lei vincula 5% da arrecadação do IPTU a um fundo municipal de esportes.</li></ol>'+
  '<p><b>Pergunta-se:</b> indique, em cada caso, o princípio orçamentário violado e o respectivo fundamento.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1.</b> Viola o princípio da <b>especificação</b> (Lei nº 4.320/1964, art. 5º): a lei orçamentária não consignará dotações globais, assim entendidas as destinadas a atender indiferentemente a quaisquer despesas. As únicas dotações globais admitidas são as de programas especiais de trabalho, fundos públicos e reserva de contingência — nenhuma delas presente.</p>'+
  '<p><b>2.</b> Viola o princípio da <b>exclusividade</b> (CF, art. 165, § 8º): a lei orçamentária contém apenas a previsão da receita e a fixação da despesa. Criar cargos e alterar alíquota são matérias estranhas, não amparadas por nenhuma das quatro exceções constitucionais.</p>'+
  '<p><b>3.</b> Viola o princípio do <b>orçamento bruto</b> (Lei nº 4.320/1964, art. 6º): as receitas constarão pelos seus totais, vedadas quaisquer deduções. A receita de alienação deve ser computada pelo valor total e bruto a ser recebido, e não pelo ganho.</p>'+
  '<p><b>4.</b> Viola o princípio da <b>unidade de tesouraria</b> (CF, art. 164, IV): a taxa de inscrição é receita pública e deve ser recolhida à conta única do Tesouro municipal, não podendo permanecer em conta de terceiro.</p>'+
  '<p><b>5.</b> Viola o princípio da <b>proibição do estorno</b> (CF, art. 167, VI): são vedados a transposição, o remanejamento ou a transferência de recursos de uma categoria de programação para outra sem prévia autorização legislativa. A única exceção alcança as atividades de ciência, tecnologia e inovação (art. 167, § 5º), inaplicável ao caso.</p>'+
  '<p><b>6.</b> Viola o princípio da <b>não vinculação da receita de impostos</b> (CF, art. 167, IV): o IPTU é imposto, e fundo municipal de esportes não figura entre as seis exceções constitucionais — repartição constitucional, ensino, saúde, administração tributária, garantias a operações de crédito por ARO e garantia à União.</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>Confundir a <b>1</b> com exclusividade. Dotação global é <b>especificação</b>.</li>'+
  '<li>Confundir a <b>3</b> com universalidade. A receita <b>está</b> no orçamento; o defeito é o <b>valor</b>.</li>'+
  '<li>Aceitar a <b>6</b> porque “esporte é finalidade pública”. Fora das seis hipóteses, é vedado.</li>'+
  '<li>Aceitar a <b>5</b> por decreto. Só CTI dispensa autorização legislativa.</li></ul></div>';

var TEC = [["CESPE","Q3beur"],["FCC","Q3bev3"],["FGV","Q3bevK"],["VUNESP","Q3bevQ"]];

var UNITS = [
  {n:1, title:"Unidade, anualidade e universalidade", cvar:"u1", lessons:[
    {id:"o1", type:"teoria", title:"O que são e onde moram",          xp:10, data:"q1"},
    {id:"o2", type:"drill",  title:"Praticar · base legal",           xp:25, data:["h1","h2","v0","v33","v34"]},
    {id:"o3", type:"teoria", title:"Unidade, totalidade, anualidade", xp:10, data:"q2"},
    {id:"o4", type:"drill",  title:"Praticar · unidade e totalidade", xp:25, data:["h3","h26","v1","v2","v3","v36"]},
    {id:"o5", type:"drill",  title:"Praticar · anualidade e universalidade", xp:25, data:["h4","h5","h6","v4","v5","v35"]},
    {id:"o6", type:"flash",  title:"Flashcards · os quatro primeiros", xp:15, data:[0,1,2,3,4,5,26]},
    {id:"o7", type:"feynman",title:"Explique os quatro primeiros",     xp:30, data:"q1"}
  ]},
  {n:2, title:"Bruto, exclusividade e especificação", cvar:"u2", lessons:[
    {id:"o9", type:"teoria", title:"Bruto, exclusividade, especificação", xp:10, data:"q3"},
    {id:"o10",type:"drill",  title:"Praticar · orçamento bruto",       xp:25, data:["h7","h8","h27","h28","v6","v7","v8"]},
    {id:"o11",type:"drill",  title:"Praticar · exclusividade",         xp:25, data:["h9","h10","h25","v9","v10","v11","v12"]},
    {id:"o12",type:"drill",  title:"Praticar · especificação",         xp:25, data:["h11","h12","h13","v13","v14","v15","v16","v37"]},
    {id:"o13",type:"flash",  title:"Flashcards · conteúdo da LOA",     xp:15, data:[6,7,8,9,10,11,12,13,27]},
    {id:"o14",type:"feynman",title:"Explique os três princípios",      xp:30, data:"q2"}
  ]},
  {n:3, title:"Unidade de caixa", cvar:"u3", lessons:[
    {id:"o16",type:"teoria", title:"Unidade de tesouraria",            xp:10, data:"q4"},
    {id:"o17",type:"drill",  title:"Praticar · conta única",           xp:25, data:["h14","h15","h16","v17","v18","v19","v20","v21"]},
    {id:"o18",type:"flash",  title:"Flashcards · disponibilidades",    xp:15, data:[14,15,16,17]},
    {id:"o19",type:"feynman",title:"Explique a unidade de caixa",      xp:30, data:"q3"}
  ]},
  {n:4, title:"Estorno, não vinculação e impositivo", cvar:"u4", lessons:[
    {id:"o21",type:"teoria", title:"Estorno, não vinculação, impositivo", xp:10, data:"q5"},
    {id:"o22",type:"drill",  title:"Praticar · proibição do estorno",  xp:25, data:["h17","h18","v22","v23","v24"]},
    {id:"o23",type:"drill",  title:"Praticar · não vinculação",        xp:25, data:["h19","h20","h21","v25","v26","v27","v28","v29","v30"]},
    {id:"o24",type:"drill",  title:"Praticar · orçamento impositivo",  xp:20, data:["h22","v31","v32"]},
    {id:"o25",type:"drill",  title:"Praticar · qual princípio foi violado", xp:25, data:["h24","v2","h23"]},
    {id:"o26",type:"flash",  title:"Flashcards · vedações",            xp:15, data:[18,19,20,21,22,23,24,25]},
    {id:"o27",type:"feynman",title:"Explique estorno e não vinculação", xp:30, data:"q4"},
    {id:"o29",type:"leitura",title:"Discursiva resolvida",             xp:25, data:"disc"},
    {id:"o30",type:"leitura",title:"Estudo de caso resolvido",         xp:25, data:"caso"},
    {id:"orev",type:"review",title:"Revisão geral das unidades",       xp:60, data:null},
    {id:"o31",type:"missao", title:"Missão TEC Concursos",             xp:15, data:null},
    {id:"o32",type:"prova",  title:"Simulado cronometrado",            xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo. É a definição do Resumo: os princípios orçamentários são <b>premissas, bases, linhas norteadoras</b> para a <b>elaboração, execução e controle</b> do orçamento.</p><p>O material completa: eles determinam o alcance e o sentido das regras, servindo de parâmetro (guia) para a exata compreensão delas.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípios Orçamentários</i></p>",
1:"<p>Certo. No esquema do Resumo, o princípio da unidade estabelece que o orçamento deve ser <b>uno (único)</b>: <b>apenas um orçamento para cada ente da federação</b>.</p><p>A finalidade, segundo o material, é <b>evitar múltiplos orçamentos paralelos</b> em um mesmo ente. Base legal no quadro: Lei 4.320, art. 2º.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípio da Unidade e da Totalidade</i></p>",
2:"<p>Errado — trocou o princípio de origem. O ATENÇÃO do Resumo diz que a <b>totalidade é um desdobramento do princípio da unidade</b>.</p><p>Ela trata da consolidação dos orçamentos autônomos (<b>Fiscal, Seguridade Social, Investimentos</b>). Universalidade é outra coisa: o orçamento deve conter <b>todas</b> as receitas e despesas.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípio da Unidade e da Totalidade — ATENÇÃO</i></p>",
3:"<p>Certo. Literal do ATENÇÃO do Resumo: na totalidade, <b>há coexistência de múltiplos orçamentos que, entretanto, sofrem consolidação</b>.</p><p>Os orçamentos autônomos citados pelo material são o <b>Fiscal</b>, o da <b>Seguridade Social</b> e o de <b>Investimentos</b>. A totalidade é desdobramento da unidade.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípio da Unidade e da Totalidade — ATENÇÃO</i></p>",
4:"<p>Certo. No esquema do Resumo, o princípio da anualidade (periodicidade) diz que o orçamento deve ser elaborado e autorizado para um período determinado, geralmente de um ano, e que <b>o exercício financeiro coincidirá com o ano civil</b> (Lei 4.320, art. 34).</p><p>Repare no nome alternativo cobrado: <b>periodicidade</b>.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípio da Anualidade (Periodicidade)</i></p>",
5:"<p>Certo. No esquema do Resumo, o orçamento deve conter <b>TODAS as receitas e despesas</b> referentes aos <b>Poderes, seus fundos, órgãos e entidades da administração direta e indireta</b>.</p><p>Base no quadro de princípios: Lei 4.320, art. 2º + CF, art. 165, § 5º. Nome alternativo: <b>globalização</b>.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípio da Universalidade (Globalização)</i></p>",
6:"<p>Errado — é o contrário. O Resumo diz que todas as receitas e despesas constarão da LOA <b>pelos seus totais, vedadas quaisquer deduções</b>.</p><p>Por isso o nome \"bruto\": valor cheio, nunca líquido. Base no quadro: Lei 4.320, art. 6º.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípio do Orçamento Bruto</i></p>",
7:"<p>Certo. O Resumo diz duas vezes (no texto e na OBS. do NÃO CONFUNDA): o princípio do orçamento bruto constitui <b>pressuposto básico do princípio da universalidade</b>.</p><p>No NÃO CONFUNDA: universalidade = o orçamento deve conter TODAS as receitas e despesas; bruto = TODAS constarão da LOA <b>pelos seus totais</b>, vedadas deduções.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípio do Orçamento Bruto — NÃO CONFUNDA</i></p>",
8:"<p>Errado. É o EXEMPLO do Resumo: a LOA deve computar a receita de alienação de bens pelo <b>valor total e bruto a ser recebido</b>, e <b>não pelo resultado (lucro)</b> obtido com a alienação.</p><p>Computar pelo lucro seria fazer dedução, o que o princípio veda.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípio do Orçamento Bruto — EXEMPLO</i></p>",
9:"<p>Certo. O Resumo diz que o princípio da exclusividade dispõe que o orçamento deve conter <b>apenas a previsão de receita e a fixação de despesas</b>, e não de outros temas.</p><p>Nome alternativo: <b>pureza orçamentária</b>. Base no quadro: CF, art. 165, § 8º.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípio da Exclusividade (Pureza Orçamentária)</i></p>",
10:"<p>Certo. É a primeira das exceções listadas no Resumo: <b>autorização para abertura de créditos suplementares</b> (CF, art. 165, § 8º).</p><p>A lista completa do material: créditos suplementares; operações de crédito, ainda que por ARO; precatórios; indenizações de reforma agrária.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Exceções ao Princípio da Exclusividade</i></p>",
11:"<p>Errado. A contratação de operações de crédito, <b>ainda que por antecipação de receita</b>, está entre as <b>exceções</b> ao princípio da exclusividade listadas no Resumo.</p><p>Ou seja, pode constar da LOA sem violar a pureza orçamentária, ao lado da autorização para créditos suplementares.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Exceções ao Princípio da Exclusividade</i></p>",
12:"<p>Certo. Ambas estão na lista de exceções do Resumo: <b>previsão para pagamento de precatórios</b> (CF, art. 100, § 5º) e <b>inclusão de recursos para pagamento de indenizações de reforma agrária</b> (CF, art. 184, § 4º).</p><p>Completam a lista: créditos suplementares e operações de crédito, ainda que por ARO.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Exceções ao Princípio da Exclusividade</i></p>",
13:"<p>Certo. Item 1 do esquema do Resumo: o princípio da especificação dispõe que a <b>LOA não consignará dotações globais</b>.</p><p>Os outros itens: as receitas e despesas devem ser discriminadas (especificadas) e devem demonstrar a origem e a aplicação dos recursos. Base no quadro: Lei 4.320, art. 5º.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípio da Especificação</i></p>",
14:"<p>Certo. Item 2 do esquema do Resumo: <b>dotações globais são aquelas destinadas a atender indiferentemente a quaisquer despesas</b>.</p><p>É exatamente o que o princípio da especificação proíbe na LOA, salvo as exceções (programas especiais, fundos públicos e reserva de contingência).</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípio da Especificação</i></p>",
15:"<p>Certo. A <b>reserva de contingência</b> está na lista do Resumo de hipóteses em que podem ser previstas dotações globais.</p><p>A lista completa: programas especiais de trabalho ou em regime de execução especial; fundos públicos; reserva de contingência.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Exceções ao Princípio da Especificação</i></p>",
16:"<p>Errado — trocou os apelidos. \"<b>Pureza orçamentária</b>\" é o outro nome do princípio da <b>exclusividade</b>.</p><p>A especificação é também chamada de <b>discriminação</b> ou <b>especialização</b>, conforme o título da seção no Resumo.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Exclusividade / Especificação</i></p>",
17:"<p>Certo. Literal do Resumo: todas as receitas arrecadadas devem ser recolhidas para uma <b>conta bancária única (geral) em nome do Tesouro Público</b>.</p><p>O EXEMPLO do material: a taxa de inscrição do concurso de uma Câmara Municipal é receita pública e deve ser depositada na conta única do Tesouro Municipal, <b>não na conta da empresa contratada</b>.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípio da Unidade de Tesouraria (Unidade de Caixa)</i></p>",
18:"<p>Errado. OBSERVAÇÃO 01 do Resumo: as disponibilidades de caixa da <b>União</b> serão depositadas no <b>banco central</b>.</p><p>Instituições financeiras oficiais são para <b>Estados, DF, Municípios</b>, órgãos do Poder Público e empresas por ele controladas. O esquema do material: União → Banco Central; Estados e Municípios → instituição financeira oficial.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Unidade de Tesouraria — OBSERVAÇÕES</i></p>",
19:"<p>Certo. OBSERVAÇÃO 02 do Resumo: as disponibilidades de caixa dos <b>Estados, do DF, dos Municípios</b> e dos órgãos do Poder Público e das empresas por ele controladas serão depositadas em <b>instituições financeiras oficiais</b>.</p><p>Não confunda com a União, cujas disponibilidades vão para o <b>banco central</b>.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Unidade de Tesouraria — OBSERVAÇÕES</i></p>",
20:"<p>Errado. OBSERVAÇÃO 03 do Resumo: as disponibilidades de caixa <b>não podem ser depositadas em instituição financeira privada</b> — o material não traz ressalva de licitação.</p><p>O que pode ir para banco privado é a <b>remuneração de servidor</b>, porque ela não é disponibilidade de caixa (OBSERVAÇÃO 04).</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Unidade de Tesouraria — OBSERVAÇÕES</i></p>",
21:"<p>Certo. OBSERVAÇÃO 04 do Resumo: <b>remuneração de servidor público não é disponibilidade de caixa</b>, logo pode ser depositada em instituição financeira privada.</p><p>É o contraponto da OBSERVAÇÃO 03: disponibilidades de caixa, essas sim, não podem ir para banco privado.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Unidade de Tesouraria — OBSERVAÇÕES</i></p>",
22:"<p>Certo. Definição do Resumo: são vedados a <b>transposição, o remanejamento ou a transferência</b> de recursos de uma categoria de programação para outra ou de um órgão para outro, <b>sem prévia autorização legislativa</b> (CF, art. 167, VI).</p><p>O EXEMPLO do material: prefeitura que tira recursos da saúde para suprir emergência na educação sem autorização da Câmara de Vereadores viola o princípio.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípio da Proibição do Estorno</i></p>",
23:"<p>Errado. O princípio alcança as duas situações: de <b>uma categoria de programação para outra</b> ou de <b>um órgão para outro</b>.</p><p>O próprio EXEMPLO do Resumo é de categoria de programação: a prefeitura que desloca recursos da saúde para a educação sem autorização da Câmara de Vereadores viola a proibição do estorno.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípio da Proibição do Estorno — EXEMPLO</i></p>",
24:"<p>Certo. É a exceção do Resumo: <b>atividades de CTI (ciência, tecnologia e inovação)</b>. A transposição, o remanejamento ou a transferência podem ser admitidos, para viabilizar resultados de projetos restritos a essas funções, <b>mediante ato do Poder Executivo</b>, sem prévia autorização legislativa (CF, art. 167, § 5º).</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Exceção ao Princípio da Proibição do Estorno</i></p>",
25:"<p>Errado — é a <b>PEGADINHA</b> do Resumo, com estas mesmas palavras, marcada como ERRADO.</p><p>A vedação é de vinculação de receita de <b>impostos</b> a órgão, fundo ou despesa, e não de <b>tributos</b>. Tributo é gênero; o princípio só alcança a espécie imposto.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Não Vinculação da Receita de Impostos — PEGADINHA</i></p>",
26:"<p>Certo. Definição do Resumo: é vedada a vinculação de receita de <b>impostos</b> a órgão, fundo ou despesa (CF, art. 167, IV), com as exceções listadas no material.</p><p>Cuidado com a PEGADINHA: se a banca trocar \"impostos\" por \"tributos\", a assertiva fica errada.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípio da Não Vinculação da Receita de Impostos</i></p>",
27:"<p>Certo. Está na lista do Resumo: <b>destinação de recursos para as ações e serviços públicos de Saúde</b>.</p><p>As demais exceções: repartição constitucional (FPE, FPM), manutenção e desenvolvimento do Ensino, Administração tributária, garantias às operações de ARO e garantia ou contragarantia à União.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Exceções ao Princípio da Não Vinculação</i></p>",
28:"<p>Errado. A <b>repartição constitucional do produto da arrecadação dos impostos</b> (ex.: <b>FPE, FPM</b>) é justamente a primeira <b>exceção</b> listada no Resumo.</p><p>Por ser exceção prevista, não viola o princípio da não vinculação.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Exceções ao Princípio da Não Vinculação</i></p>",
29:"<p>Certo. Última exceção da lista do Resumo: <b>prestação de garantia ou contragarantia à União e para pagamento de débitos para com esta</b>.</p><p>O EXEMPLO do material: os Estados podem oferecer receita de <b>ICMS</b> para garantia à União de adesão ao programa de recuperação fiscal.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Exceções ao Princípio da Não Vinculação — EXEMPLO</i></p>",
30:"<p>Certo. Está na lista do Resumo: <b>destinação de recursos para realização de atividades da Administração tributária</b>.</p><p>Ao lado dela: Saúde, Ensino, repartição constitucional (FPE, FPM), garantias às operações de ARO e garantia ou contragarantia à União.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Exceções ao Princípio da Não Vinculação</i></p>",
31:"<p>Certo. O Resumo diz que o modelo de orçamento público brasileiro é <b>impositivo ao Poder Executivo</b>: a Administração tem o <b>dever de executar</b> as programações (despesas) orçamentárias (CF, art. 165, § 10).</p><p>Segundo o material, esse princípio novo supera o antigo debate sobre as programações serem mera autorização para a despesa (<b>modelo autorizativo</b>).</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípio do Orçamento Impositivo</i></p>",
32:"<p>Certo. Literal do Resumo: a Administração deve executar as programações adotando os meios e as medidas necessários, <b>com o propósito de garantir a efetiva entrega de bens e serviços à sociedade</b>.</p><p>É a redação do § 10 do art. 165 da CF, reproduzida no material.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípio do Orçamento Impositivo</i></p>",
33:"<p>Certo. No quadro de principais princípios do Resumo: <b>Unidade</b> (Lei 4.320, art. 2º), <b>Anualidade</b> (Lei 4.320, art. 2º) e <b>Universalidade</b> (Lei 4.320, art. 2º + CF, art. 165, § 5º).</p><p>Os três saem do mesmo art. 2º; a universalidade tem também base constitucional.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Principais Princípios Orçamentários</i></p>",
34:"<p>Errado segundo o quadro do Resumo: a exclusividade tem base na <b>CF, art. 165, § 8º</b>, e não na Lei 4.320.</p><p>Da Lei 4.320 o quadro tira unidade, anualidade e universalidade (art. 2º), orçamento bruto (art. 6º) e especificação (art. 5º).</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Principais Princípios Orçamentários</i></p>",
35:"<p>Certo. Última linha do esquema do Resumo: a universalidade <b>permite ao Poder Legislativo ter conhecimento do VALOR GLOBAL das despesas</b>.</p><p>Isso porque o orçamento deve conter TODAS as receitas e despesas dos Poderes, fundos, órgãos e entidades da administração direta e indireta.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Princípio da Universalidade (Globalização)</i></p>",
36:"<p>Errado. São princípios diferentes no Resumo. <b>Unidade</b>: o orçamento deve ser uno, apenas um para cada ente, evitando orçamentos paralelos. <b>Universalidade</b>: o orçamento deve conter <b>TODAS</b> as receitas e despesas.</p><p>Um trata de quantos orçamentos; o outro, do que vai dentro deles.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Unidade / Universalidade</i></p>",
37:"<p>Certo. Na lista de exceções à especificação do Resumo, podem ser previstas dotações globais para <b>programas especiais de trabalho ou em regime de execução especial</b>, <b>fundos públicos</b> e reserva de contingência.</p><p>A regra, lembre, é que a LOA não consignará dotações globais.</p><p class='fb-fonte'>AFO — Resumo 03 · <i>Exceções ao Princípio da Especificação</i></p>",
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"03", nome:"Princípios orçamentários", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, PROVA_POOL:PROVA_POOL};
})();
