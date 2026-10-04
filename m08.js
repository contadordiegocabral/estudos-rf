/* AFO — Módulo 08: Despesa Pública e classificações */
window.MOD = window.MOD || {};
window.MOD.m08 = (function(){
"use strict";

var CARDS = [
  ["O que é despesa orçamentária?","Toda transação que <b>depende de autorização legislativa</b>, na forma de consignação de <b>dotação orçamentária</b>. São as despesas fixadas nas leis orçamentárias ou nas leis de créditos adicionais."],
  ["O que é despesa extraorçamentária?","É a <b>devolução</b> de recursos transitórios obtidos como receitas extraorçamentárias. Pertencem a <b>terceiros</b>, não ao Estado, e <b>não dependem de autorização legislativa</b>."],
  ["Inscrição e pagamento de restos a pagar: o que é cada um?","<b>Inscrição</b> de RP = receita extraorçamentária. <b>Pagamento</b> de RP = despesa extraorçamentária."],
  ["Quais são os três tipos de créditos adicionais?","<b>Suplementares</b> (reforço de dotação), <b>especiais</b> (despesa sem dotação específica) e <b>extraordinários</b> (despesas urgentes e imprevistas: guerra, comoção interna, calamidade pública). Lei 4.320, art. 40 e 41."],
  ["Quais os códigos da classificação por esfera orçamentária?","<b>10</b> Fiscal · <b>20</b> Seguridade Social · <b>30</b> Investimento das Empresas Estatais."],
  ["Como se estrutura a classificação institucional?","Dois níveis: <b>órgão orçamentário</b> (1º e 2º dígitos) e <b>unidade orçamentária</b> (3º ao 5º). Cinco dígitos no total (XX.XXX). Reflete a <b>estrutura de alocação dos créditos</b>."],
  ["O que é unidade orçamentária, segundo a Lei 4.320?","O <b>agrupamento de serviços subordinados ao mesmo órgão</b> ou repartição a que serão consignadas dotações próprias (art. 14). As dotações são consignadas às unidades orçamentárias."],
  ["A classificação institucional é obrigatória para estados e municípios?","<b>Não.</b> Cada ente tem liberdade de definir o detalhamento. A obrigatória e comum a todos é a <b>funcional</b>."],
  ["O que responde a classificação funcional?","<b>“Em que área”</b> de ação governamental a despesa será realizada. Cinco dígitos: <b>função</b> (2) + <b>subfunção</b> (3). Aplicação comum e obrigatória para União, estados, DF e municípios."],
  ["Função e subfunção: qual a diferença?","<b>Função</b> é o maior nível de agregação, ligado à missão institucional do órgão. <b>Subfunção</b> é o nível imediatamente inferior e evidencia cada área de atuação (transporte, saúde, educação…)."],
  ["O que é matricialidade?","A combinação de <b>subfunções com funções diferentes</b> — exceto a <b>função 28 (Encargos Especiais)</b> e suas subfunções típicas (841 a 847), que só podem ser conjugadas entre si."],
  ["Por que a função 28 é chamada de agregação neutra?","Porque engloba despesas que <b>não podem ser associadas a um bem ou serviço</b> do processo produtivo corrente — dívidas, ressarcimentos, indenizações."],
  ["A classificação funcional depende dos programas?","<b>Não.</b> É uma classificação <b>independente dos programas</b>, ainda que toda despesa da LOA esteja estruturada em programas do PPA."],
  ["Como se estrutura o código da classificação programática?","<b>12 dígitos</b>: programa (1º ao 4º), ação orçamentária (5º ao 8º) e subtítulo/localizador do gasto (9º ao 12º)."],
  ["Programa e ação: qual a diferença?","<b>Programa</b> é o instrumento de organização que articula um conjunto de ações. <b>Ação</b> é a operação da qual resultam produtos (bens ou serviços) que atendem ao objetivo do programa."],
  ["Quais são os três tipos de ação orçamentária?","<b>Atividade</b> (contínua e permanente), <b>projeto</b> (limitado no tempo) e <b>operação especial</b> (agregação neutra)."],
  ["Projeto × atividade: como não confundir?","<b>Projeto</b> é limitado no tempo e <b>expande</b> a produção pública (construção de trecho rodoviário). <b>Atividade</b> é contínua e permanente e <b>mantém</b> o mesmo nível da produção (manutenção do trecho)."],
  ["O que caracteriza a operação especial?","Agregação neutra: <b>não agrega valor</b> à sociedade, não contribui para manutenção ou expansão das ações, <b>não gera produtos</b>, e <b>consta na LOA mas não integra o PPA</b>."],
  ["Para que serve o subtítulo?","Identificar a <b>localização física</b> da ação orçamentária. Atividades, projetos e operações especiais são detalhados em subtítulos, que <b>não podem alterar a finalidade</b> da ação."],
  ["O que é o plano orçamentário?","Identificação orçamentária de caráter <b>gerencial</b>, <b>não constante da LOA</b>, vinculada à ação orçamentária, que permite detalhamento <b>maior que o do subtítulo</b>."],
  ["Despesa efetiva × não efetiva","<b>Efetiva</b> reduz a situação líquida patrimonial — fato contábil <b>modificativo diminutivo</b>. <b>Não efetiva</b> não reduz — fato contábil <b>permutativo</b>."],
  ["Cite despesas correntes que NÃO são efetivas.","Aquisição de <b>materiais para estoque</b> e despesas com <b>adiantamentos</b> — meros fatos permutativos."],
  ["Cite uma despesa de capital que É efetiva.","As <b>transferências de capital</b>: causam variação patrimonial diminutiva, logo são despesa efetiva."],
  ["Qual o bizu do código de natureza da despesa?","<b>CGMED</b>: <b>C</b>ategoria econômica (1º), <b>G</b>ND (2º), <b>M</b>odalidade de aplicação (3º e 4º), <b>E</b>lemento (5º e 6º), <b>D</b>esdobramento facultativo (7º e 8º)."],
  ["Quais os códigos da categoria econômica?","<b>3</b> = Despesas Correntes · <b>4</b> = Despesas de Capital."],
  ["Quais são os seis GND?","<b>1</b> Pessoal e Encargos Sociais · <b>2</b> Juros e Encargos da Dívida · <b>3</b> Outras Despesas Correntes · <b>4</b> Investimentos · <b>5</b> Inversões Financeiras · <b>6</b> Amortização da Dívida."],
  ["Como a Lei 4.320 (art. 12) classifica as despesas?","<b>Correntes</b>: despesas de custeio e transferências correntes. <b>De capital</b>: investimentos, inversões financeiras e transferências de capital."],
  ["Onde o MCASP e a Lei 4.320 divergem?","Em três pontos. <b>Inativos e pensionistas</b>, <b>juros</b> e <b>subvenções</b>: o MCASP/MTO os coloca em Pessoal, Juros e ODC; o art. 13 da Lei 4.320 coloca os três em <b>Transferências Correntes</b>."],
  ["Investimentos × inversões financeiras","<b>Investimentos</b>: obras, softwares, equipamentos, material permanente e imóveis necessários às obras. <b>Inversões</b>: imóveis ou bens de capital <b>já em utilização</b>; títulos de empresas <b>já constituídas</b> quando não aumenta o capital; constituição ou aumento de capital."],
  ["Para que serve a modalidade de aplicação?","Informação <b>gerencial</b> que indica se os recursos são aplicados <b>diretamente</b> ou mediante <b>transferência</b> a outro ente ou entidade. Permite <b>eliminar a dupla contagem</b> no orçamento."],
  ["O que identifica o elemento de despesa?","O <b>objeto do gasto</b>: vencimentos e vantagens fixas, juros, diárias, material de consumo, serviços de terceiros. Ocupa o 5º e o 6º dígitos."],
  ["O desdobramento do elemento é obrigatório?","<b>Não.</b> É <b>facultado a cada ente</b>, conforme as necessidades de escrituração e controle. Ocupa o 7º e o 8º dígitos."]
];

var QS = [
  ["Despesa orçamentária é toda transação que depende de autorização legislativa, na forma de consignação de dotação orçamentária.","C","CESPE","Conceito literal. Note que o critério é a <b>dotação orçamentária</b>."],
  ["Denomina-se despesa orçamentária aquela realizada com o sacrifício de receitas orçamentárias, ainda que não tenha sido objeto de dotação orçamentária.","E","CESPE","Pegadinha clássica do resumo. Sem dotação orçamentária não há despesa orçamentária."],
  ["Despesa orçamentária é todo gasto que depende de autorização legislativa.","E","CESPE","<b>Gasto é gênero</b> — um incêndio no almoxarifado é gasto. Despesa orçamentária é a <b>transação</b> que depende de autorização legislativa na forma de dotação."],
  ["As despesas extraorçamentárias independem de autorização legislativa para serem devolvidas.","C","FCC","São recursos de terceiros em trânsito, apenas devolvidos pelo Estado."],
  ["O pagamento de restos a pagar constitui despesa extraorçamentária, ao passo que a inscrição de restos a pagar constitui receita extraorçamentária.","C","FGV","É o quadro “não confunda” do resumo."],
  ["Os créditos extraordinários destinam-se ao reforço de dotação orçamentária já existente.","E","FCC","Reforço de dotação é o crédito <b>suplementar</b>. O extraordinário atende despesas <b>urgentes e imprevistas</b>."],
  ["São exemplos de despesas atendidas por créditos extraordinários as decorrentes de guerra, comoção interna ou calamidade pública.","C","FGV","Literalidade do art. 41, III, da Lei nº 4.320/1964."],
  ["Na classificação por esfera orçamentária, o código 20 identifica o orçamento de investimento das empresas estatais.","E","VUNESP","<b>10</b> fiscal, <b>20</b> seguridade social, <b>30</b> investimento das estatais."],
  ["A classificação institucional é estruturada em dois níveis hierárquicos: órgão orçamentário e unidade orçamentária.","C","CESPE","Cinco dígitos: dois para o órgão, três para a unidade."],
  ["Constitui unidade orçamentária o agrupamento de serviços subordinados ao mesmo órgão ou repartição a que serão consignadas dotações próprias.","C","FCC","Art. 14 da Lei nº 4.320/1964."],
  ["Um órgão orçamentário corresponde necessariamente a uma estrutura administrativa.","E","CESPE","Não. Reserva de Contingência e Encargos Financeiros da União, por exemplo, são unidades orçamentárias sem estrutura administrativa correspondente."],
  ["A classificação funcional busca responder em que área de ação governamental a despesa será realizada.","C","FGV","É a definição do MCASP para a classificação funcional."],
  ["A classificação funcional tem aplicação facultativa no âmbito dos estados e municípios.","E","FCC","É de <b>aplicação comum e obrigatória</b> para União, estados, DF e municípios — o que permite a consolidação nacional dos gastos."],
  ["A classificação funcional é representada por cinco dígitos, sendo os dois primeiros a função e os três últimos a subfunção.","C","VUNESP","Ex.: 26.782 — Transporte / Transporte Rodoviário."],
  ["A subfunção representa o maior nível de agregação das áreas de atuação do setor público.","E","CESPE","O maior nível de agregação é a <b>função</b>, ligada à missão institucional do órgão."],
  ["A matricialidade permite combinar subfunções com funções diferentes, ressalvada a função 28 e suas subfunções típicas.","C","FGV","Encargos Especiais só se conjuga com as subfunções 841 a 847."],
  ["A classificação funcional da despesa é dependente da estrutura de programas do PPA.","E","CESPE","É expressamente <b>independente dos programas</b>, ainda que toda despesa deva estar contemplada em programa."],
  ["Na classificação programática, o código é composto de doze dígitos, correspondendo os quatro últimos ao subtítulo.","C","FCC","Programa (4) + ação (4) + subtítulo (4)."],
  ["Ação é o instrumento de organização da atuação governamental que articula um conjunto de programas.","E","FGV","Está invertido: <b>programa</b> articula um conjunto de <b>ações</b>."],
  ["O conceito de atividade consiste no conjunto de operações limitadas no tempo, das quais resulta um produto que concorre para a expansão da ação de governo.","E","CESPE","Esse é o conceito de <b>projeto</b>. Atividade é contínua e permanente."],
  ["As operações especiais constam da lei orçamentária anual, mas não integram o plano plurianual.","C","FCC","São despesas de agregação neutra, que não geram produtos."],
  ["Os subtítulos podem alterar a finalidade da ação orçamentária quando houver interesse público devidamente justificado.","E","VUNESP","Os subtítulos <b>não permitem</b> alteração da finalidade da ação orçamentária."],
  ["O plano orçamentário é identificação de caráter gerencial que não consta da lei orçamentária anual.","C","CESPE","Vinculado à ação, permite detalhamento maior que o do subtítulo."],
  ["A despesa efetiva constitui fato contábil permutativo, por não alterar a situação líquida patrimonial.","E","FGV","Invertido: a <b>efetiva</b> é modificativa diminutiva; a <b>não efetiva</b> é que é permutativa."],
  ["A despesa com aquisição de materiais para estoque é despesa corrente não efetiva.","C","CESPE","É mero fato permutativo — troca de disponibilidade por estoque."],
  ["As transferências de capital, por serem despesas de capital, classificam-se como despesas não efetivas.","E","FCC","São exceção: causam variação patrimonial diminutiva e, por isso, são despesas <b>efetivas</b>."],
  ["No código de natureza da despesa, o primeiro dígito representa o grupo de natureza de despesa.","E","VUNESP","O 1º dígito é a <b>categoria econômica</b>. O GND é o 2º. Bizu: CGMED."],
  ["O código de natureza da despesa é composto por seis dígitos ou, opcionalmente, por oito.","C","FGV","Os dois últimos correspondem ao desdobramento facultativo do elemento."],
  ["Na categoria econômica, o código 3 corresponde às despesas de capital e o código 4, às despesas correntes.","E","FCC","Invertido: <b>3 correntes</b>, <b>4 capital</b>."],
  ["Amortização da dívida é grupo de natureza de despesa classificado como despesa corrente.","E","CESPE","É <b>despesa de capital</b>, ao lado de Investimentos e Inversões Financeiras."],
  ["Segundo o art. 12 da Lei nº 4.320/1964, as despesas de capital compreendem investimentos, inversões financeiras e transferências de capital.","C","FCC","Classificação legal, distinta da estrutura de GND do MCASP."],
  ["Segundo o art. 13 da Lei nº 4.320/1964, as despesas com pessoal inativo e pensionistas classificam-se como transferências correntes.","C","CESPE","Ponto de divergência: o MCASP e o MTO as colocam em <b>Pessoal e Encargos Sociais</b>."],
  ["A aquisição de títulos representativos do capital de empresas já constituídas, quando a operação não importe aumento do capital, classifica-se como investimento.","E","FGV","É <b>inversão financeira</b>. Investimento pressupõe formação de capital novo."],
  ["A aquisição de imóvel já em utilização classifica-se como inversão financeira.","C","CESPE","Bem de capital já em utilização não gera formação bruta de capital fixo."],
  ["A aquisição de softwares classifica-se no grupo de natureza de despesa Investimentos.","C","FCC","O MCASP inclui expressamente softwares em Investimentos."],
  ["A modalidade de aplicação permite a eliminação da dupla contagem no orçamento.","C","FGV","Ao identificar transferências entre entes, evita que o mesmo recurso seja contado duas vezes."],
  ["O elemento de despesa tem por finalidade identificar o objeto de gasto, ocupando o 5º e o 6º dígitos do código de natureza.","C","VUNESP","Vencimentos, diárias, material de consumo, serviços de terceiros."],
  ["O desdobramento do elemento de despesa é obrigatório para todos os entes da Federação.","E","CESPE","É <b>facultado</b> a cada ente, conforme suas necessidades de escrituração e controle."]
];

var FEY = {
  g1:{ask:"Explique a diferença entre despesa orçamentária e despesa extraorçamentária.",
    hint:"O critério não é o valor nem a finalidade. É de quem é o dinheiro e se houve autorização legislativa.",
    ref:"Despesa orçamentária é toda transação que depende de autorização legislativa, na forma de consignação de dotação orçamentária; são as despesas fixadas nas leis orçamentárias ou nas leis de créditos adicionais. Despesa extraorçamentária é a devolução de recursos transitórios obtidos como receitas extraorçamentárias: pertencem a terceiros e não ao Estado, e por isso independem de autorização legislativa. São exemplos a restituição de cauções, o pagamento de restos a pagar, o resgate de operações de crédito por antecipação de receita orçamentária e o repasse ao credor de consignações em folha. Atenção: a inscrição de restos a pagar é receita extraorçamentária; o pagamento é despesa extraorçamentária."},
  g2:{ask:"Explique as classificações institucional, funcional e programática da despesa — o que cada uma responde.",
    hint:"Três perguntas diferentes: quem gasta, em que área, e para qual objetivo. Diga também qual delas é obrigatória para todos os entes.",
    ref:"A classificação institucional reflete a estrutura de alocação dos créditos orçamentários e responde a “quem gasta”: estrutura-se em órgão orçamentário (dois dígitos) e unidade orçamentária (três dígitos), e cada ente tem liberdade de definir seu detalhamento. A classificação funcional responde a “em que área” a despesa será realizada: função (dois dígitos) e subfunção (três dígitos), de aplicação comum e obrigatória para União, estados, DF e municípios, o que permite a consolidação nacional dos gastos, e é independente dos programas. A classificação programática responde a “para qual objetivo”: código de doze dígitos com programa, ação orçamentária e subtítulo (localizador do gasto), organizando toda a atuação governamental em programas orientados pelos objetivos do PPA."},
  g3:{ask:"Explique a estrutura do código de natureza da despesa e o que significa cada posição.",
    hint:"Cinco posições, do primeiro ao oitavo dígito. Diga o que cada uma identifica e qual delas é facultativa.",
    ref:"O código de natureza da despesa é numérico, com seis dígitos ou, opcionalmente, oito. O primeiro dígito é a categoria econômica (3 para correntes, 4 para capital), que permite analisar o impacto do gasto na economia. O segundo é o grupo de natureza de despesa, agregador de elementos: 1 Pessoal e Encargos Sociais, 2 Juros e Encargos da Dívida, 3 Outras Despesas Correntes, 4 Investimentos, 5 Inversões Financeiras e 6 Amortização da Dívida. O terceiro e o quarto formam a modalidade de aplicação, informação gerencial que indica aplicação direta ou transferência e permite eliminar a dupla contagem. O quinto e o sexto são o elemento de despesa, que identifica o objeto do gasto. O sétimo e o oitavo são o desdobramento facultativo do elemento, à escolha de cada ente. O bizu é CGMED."},
  g4:{ask:"Explique a diferença entre despesa efetiva e não efetiva, com as exceções da regra geral.",
    hint:"Comece pelo efeito no patrimônio líquido e pelo tipo de fato contábil. As exceções são o que separa nota 6 de nota 10.",
    ref:"Quanto ao impacto no patrimônio, a despesa efetiva é aquela que reduz a situação líquida patrimonial da entidade, constituindo fato contábil modificativo diminutivo; a não efetiva não reduz a situação líquida e constitui fato contábil permutativo. Em regra, a despesa corrente é efetiva e a despesa de capital é não efetiva. Há exceções nos dois sentidos: são despesas correntes não efetivas a aquisição de materiais para estoque e as despesas com adiantamentos, meros fatos permutativos; e são despesas de capital efetivas as transferências de capital, que causam variação patrimonial diminutiva."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  d1:[
    sl("Despesa pública e despesa orçamentária",
      '<p>Despesa orçamentária pública é o <span class="key">conjunto de dispêndios realizados pelos entes públicos para o funcionamento e a manutenção dos serviços públicos</span> prestados à sociedade. Como os ingressos, os dispêndios são tipificados em orçamentários e extraorçamentários.</p>'+
      '<div class="box"><span class="bl">Despesa orçamentária</span><p>São as despesas <b>fixadas nas leis orçamentárias ou nas leis de créditos adicionais</b>. Dependem de <b>autorização legislativa</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Exemplo</span><p>Construção de prédios públicos, manutenção de rodovias, pagamento de servidores.</p></div>'),
    sl("Créditos adicionais em uma tela",
      '<p>São as autorizações de despesas <span class="key">não computadas ou insuficientemente dotadas</span> na Lei de Orçamento <span class="lawref">(Lei 4.320, art. 40)</span>.</p>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Suplementares</span><span class="cd">Reforço de dotação orçamentária já existente.</span></div>'+
      '<div class="chip"><span class="cn">Especiais</span><span class="cd">Despesas sem dotação orçamentária específica.</span></div>'+
      '<div class="chip"><span class="cn">Extraordinários</span><span class="cd">Despesas urgentes e imprevistas: guerra, comoção interna, calamidade pública.</span></div></div>'),
    sl("Despesa extraorçamentária",
      '<p>É a <span class="key">devolução dos recursos transitórios</span> obtidos como receitas extraorçamentárias. São recursos que pertencem a <b>terceiros</b>, e não ao Estado, e <b>não dependem de autorização legislativa</b> para serem devolvidos.</p>'+
      '<ul><li>Restituição de cauções</li><li>Despesas com a emissão de papel-moeda</li><li>Pagamento de restos a pagar</li><li>Resgate de operações de crédito por antecipação de receita orçamentária</li><li>Repasse ao credor das consignações em folha</li></ul>'+
      '<div class="box trap"><span class="bl">Não confunda</span><p><b>Inscrição</b> de restos a pagar → receita extraorçamentária. <b>Pagamento</b> de restos a pagar → despesa extraorçamentária.</p></div>')
  ],
  d2:[
    sl("As classificações que caem em prova",
      '<ul><li>Classificação por <b>esfera orçamentária</b></li><li>Classificação <b>institucional</b></li><li>Classificação <b>funcional</b></li><li>Classificação <b>programática</b></li><li>Classificação quanto ao <b>impacto no patrimônio</b></li><li>Classificação por <b>natureza</b></li></ul>'+
      '<div class="box"><span class="bl">Esfera orçamentária</span><p>Identifica o orçamento: <b>10</b> fiscal · <b>20</b> seguridade social · <b>30</b> investimento das empresas estatais.</p></div>'),
    sl("Classificação institucional — quem gasta",
      '<p>Reflete a <span class="key">estrutura de alocação dos créditos orçamentários</span>, em dois níveis hierárquicos: <b>órgão orçamentário</b> e <b>unidade orçamentária</b>. No Governo Federal são cinco dígitos (XX.XXX).</p>'+
      '<div class="box"><span class="bl">Exemplo — código 39.252</span><p><b>39</b> = órgão (Ministério dos Transportes) · <b>252</b> = unidade orçamentária (DNIT).</p></div>'+
      '<div class="box trap"><span class="bl">Guarde</span><p>Unidade orçamentária é o <b>agrupamento de serviços subordinados ao mesmo órgão</b> a que serão consignadas dotações próprias <span class="lawref">(Lei 4.320, art. 14)</span>. Um órgão ou unidade <b>não corresponde necessariamente</b> a uma estrutura administrativa — veja a Reserva de Contingência.</p></div>')
  ],
  d3:[
    sl("Classificação funcional — em que área",
      '<p>Segrega as dotações em <span class="key">funções e subfunções</span>, respondendo à pergunta “em que área” de ação governamental a despesa será realizada. É <b>independente dos programas</b> e de <b>aplicação comum e obrigatória</b> para União, estados, DF e municípios — o que permite a consolidação nacional dos gastos.</p>'+
      '<div class="box"><span class="bl">Exemplo — código 26.782</span><p><b>26</b> = função (Transporte) · <b>782</b> = subfunção (Transporte Rodoviário).</p></div>'+
      '<div class="box trap"><span class="bl">Função × subfunção</span><p><b>Função</b> é o maior nível de agregação, ligada à missão institucional do órgão. <b>Subfunção</b> é o nível imediatamente inferior e evidencia cada área de atuação.</p></div>'),
    sl("Matricialidade e a função 28",
      '<p>Matricialidade é a <span class="key">combinação de subfunções com funções diferentes</span> — exceto a <b>função 28 (Encargos Especiais)</b> e suas subfunções típicas, que só podem ser conjugadas entre si.</p>'+
      '<div class="box"><span class="bl">Subfunções típicas da função 28</span>'+
      '<ul><li>841 Refinanciamento da Dívida Interna</li><li>842 Refinanciamento da Dívida Externa</li><li>843 Serviço da Dívida Interna</li><li>844 Serviço da Dívida Externa</li><li>845 Outras Transferências</li><li>846 Outros Encargos Especiais</li><li>847 Transferências para a Educação Básica</li></ul></div>'+
      '<p>Encargos Especiais engloba despesas que não podem ser associadas a um bem ou serviço do processo produtivo corrente — dívidas, ressarcimentos, indenizações. É uma <b>agregação neutra</b>.</p>'),
    sl("Institucional × funcional",
      '<div class="box"><span class="bl">Institucional</span><p>Reflete a estrutura de alocação dos créditos. <b>Não</b> tem aplicação obrigatória no âmbito de estados e municípios.</p></div>'+
      '<div class="box"><span class="bl">Funcional</span><p>Responde “em que área”. <b>Tem</b> aplicação comum e obrigatória na União, nos estados e nos municípios.</p></div>')
  ],
  d4:[
    sl("Classificação programática",
      '<p>Toda ação do Governo está estruturada em <span class="key">programas orientados para os objetivos estratégicos do PPA</span>. Cada ente define, em ato próprio, suas estruturas de programas e códigos.</p>'+
      '<div class="box"><span class="bl">Programa × ação</span><p><b>Programa</b> articula um conjunto de ações (ex.: Transporte Rodoviário). <b>Ação</b> é a operação da qual resultam produtos que atendem ao objetivo do programa (ex.: construção de trecho rodoviário).</p></div>'+
      '<div class="box"><span class="bl">Código de 12 dígitos — 2075.7M64.0043</span><p><b>2075</b> programa · <b>7M64</b> ação · <b>0043</b> subtítulo (Paraíba).</p></div>'),
    sl("Atividade, projeto e operação especial",
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">A</span><span class="nm">Atividade</span></div><div class="fn-b"><p>Operações <b>contínuas e permanentes</b>. Mantêm o mesmo nível da produção pública. Ex.: manutenção de rodovia.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">P</span><span class="nm">Projeto</span></div><div class="fn-b"><p>Operações <b>limitadas no tempo</b>. Expandem a produção pública ou criam infraestrutura. Ex.: construção de trecho rodoviário.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">O</span><span class="nm">Operação especial</span></div><div class="fn-b"><p><b>Agregação neutra</b>: não agrega valor, não gera produtos, consta na LOA mas <b>não integra o PPA</b>. Ex.: cumprimento de sentenças judiciais.</p></div></div></div>'),
    sl("Subtítulo e plano orçamentário",
      '<div class="box"><span class="bl">Subtítulo — localizador do gasto</span>'+
      '<ul><li>Identifica a <b>localização física</b> da ação orçamentária.</li>'+
      '<li>Atividades, projetos e operações especiais são detalhados em subtítulos.</li>'+
      '<li><b>Não permite alterar a finalidade</b> da ação orçamentária.</li>'+
      '<li>Encontra-se na classificação programática.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Plano orçamentário</span><p>Identificação de caráter <b>gerencial</b>, <b>não constante da LOA</b>, vinculada à ação orçamentária. Permite elaborar e acompanhar a execução em nível <b>mais detalhado que o do subtítulo</b>.</p></div>')
  ],
  d5:[
    sl("Impacto no patrimônio",
      '<div class="box"><span class="bl">Despesa efetiva</span><p><b>Reduz</b> a situação líquida patrimonial. Fato contábil <b>modificativo diminutivo</b>.</p></div>'+
      '<div class="box"><span class="bl">Despesa não efetiva</span><p><b>Não reduz</b> a situação líquida patrimonial. Fato contábil <b>permutativo</b>.</p></div>'+
      '<div class="box trap"><span class="bl">A regra e as duas exceções</span>'+
      '<p>Em regra, <b>corrente = efetiva</b> e <b>capital = não efetiva</b>. Mas:</p>'+
      '<ul><li>Correntes <b>não</b> efetivas: aquisição de materiais para estoque e adiantamentos.</li>'+
      '<li>De capital <b>efetivas</b>: transferências de capital, que causam variação patrimonial diminutiva.</li></ul></div>'),
    sl("Duas pegadinhas de prova",
      '<div class="box trap"><span class="bl">Item errado</span><p>“Denomina-se despesa orçamentária a despesa realizada com o sacrifício de receitas orçamentárias, <b>ainda que não tenha sido objeto de dotação orçamentária</b>.” Sem dotação não há despesa orçamentária.</p></div>'+
      '<div class="box trap"><span class="bl">Item errado</span><p>“Despesa orçamentária é <b>todo gasto</b> que depende de autorização legislativa.” Gasto é gênero — um incêndio no almoxarifado é gasto. Despesa orçamentária é <b>transação</b> com dotação.</p></div>')
  ],
  d6:[
    sl("O código de natureza — CGMED",
      '<p>Os itens que detalham a despesa são identificados por um código decimal de <span class="key">seis dígitos ou, opcionalmente, oito</span>.</p>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">C — 1º dígito</span><span class="cd">Categoria econômica</span></div>'+
      '<div class="chip"><span class="cn">G — 2º dígito</span><span class="cd">Grupo de natureza de despesa</span></div>'+
      '<div class="chip"><span class="cn">M — 3º e 4º</span><span class="cd">Modalidade de aplicação</span></div>'+
      '<div class="chip"><span class="cn">E — 5º e 6º</span><span class="cd">Elemento de despesa</span></div>'+
      '<div class="chip"><span class="cn">D — 7º e 8º</span><span class="cd">Desdobramento facultativo</span></div></div>'+
      '<div class="box tip"><span class="bl">Categoria econômica</span><p><b>3</b> = Despesas Correntes (não contribuem para a aquisição de um bem) · <b>4</b> = Despesas de Capital (contribuem para a aquisição de um bem).</p></div>'),
    sl("Os seis grupos de natureza de despesa",
      '<div class="box"><span class="bl">Correntes</span><p><b>1</b> Pessoal e Encargos Sociais · <b>2</b> Juros e Encargos da Dívida · <b>3</b> Outras Despesas Correntes</p></div>'+
      '<div class="box"><span class="bl">Capital</span><p><b>4</b> Investimentos · <b>5</b> Inversões Financeiras · <b>6</b> Amortização da Dívida</p></div>'+
      '<div class="box trap"><span class="bl">A Lei 4.320 classifica diferente (art. 12)</span><p>Correntes: <b>despesas de custeio</b> e <b>transferências correntes</b>. De capital: <b>investimentos</b>, <b>inversões financeiras</b> e <b>transferências de capital</b>.</p></div>'),
    sl("Onde MCASP e Lei 4.320 divergem",
      '<div class="box trap"><span class="bl">Três divergências — memorize</span>'+
      '<ul><li><b>Pessoal inativo e pensionistas</b> — MCASP/MTO: Pessoal e Encargos Sociais. Art. 13 da Lei 4.320: Transferências Correntes.</li>'+
      '<li><b>Pagamento de juros</b> — MCASP/MTO: Juros e Encargos da Dívida. Art. 13: Transferências Correntes.</li>'+
      '<li><b>Subvenções</b> — MCASP/MTO: Outras Despesas Correntes. Art. 13: Transferências Correntes.</li></ul></div>'+
      '<p>Repare no padrão: <b>a Lei 4.320 joga os três em Transferências Correntes</b>. A banca cobra sempre dizendo qual norma está sendo aplicada.</p>'),
    sl("Investimentos × inversões financeiras",
      '<div class="box"><span class="bl">Investimentos</span><p>Softwares; planejamento e execução de <b>obras</b>, inclusive a aquisição de imóveis necessários à realização destas; aquisição de instalações, equipamentos e <b>material permanente</b>.</p></div>'+
      '<div class="box"><span class="bl">Inversões financeiras</span><p>Aquisição de imóveis ou bens de capital <b>já em utilização</b>; aquisição de títulos representativos do capital de empresas <b>já constituídas</b>, quando a operação <b>não importe aumento do capital</b>; constituição ou aumento de capital de empresas.</p></div>'+
      '<div class="box"><span class="bl">Amortização da dívida</span><p>Pagamento e/ou refinanciamento do <b>principal</b> e da atualização monetária ou cambial da dívida pública interna e externa.</p></div>'+
      '<div class="box trap"><span class="bl">Pegadinha de prova</span><p>Aquisição de títulos de empresa já constituída sem aumento de capital → <b>inversão financeira</b>, e não investimento.</p></div>')
  ],
  d7:[
    sl("Modalidade de aplicação",
      '<p>Informação <span class="key">gerencial</span> que indica se os recursos são aplicados <b>diretamente</b> pela unidade detentora do crédito ou mediante <b>transferência</b> a entidades públicas ou privadas. Também <b>permite eliminar a dupla contagem</b> no orçamento.</p>'+
      '<div class="box"><span class="bl">Códigos mais citados</span><p><b>20</b> Transferências à União · <b>30</b> Transferências a Estados e ao DF · <b>40</b> Transferências a Municípios · <b>90</b> Aplicações Diretas</p></div>'+
      '<div class="box tip"><span class="bl">Exemplo</span><p>Um município decide construir uma escola. Modalidade <b>30</b>: repassa o recurso ao estado, que executa. Modalidade <b>90</b>: o próprio município aplica.</p></div>'),
    sl("Elemento e desdobramento",
      '<div class="box"><span class="bl">Elemento de despesa — 5º e 6º dígitos</span><p>Identifica os <b>objetos de gasto</b>: vencimentos e vantagens fixas, juros, diárias, material de consumo, serviços de terceiros. São 84 códigos no MTO.</p></div>'+
      '<div class="box"><span class="bl">Desdobramento facultativo — 7º e 8º dígitos</span><p><b>Facultado a cada ente</b>, conforme as necessidades de escrituração contábil e controle da execução orçamentária.</p></div>'+
      '<div class="box tip"><span class="bl">Elementos que aparecem em prova</span><p>30 Material de Consumo · 36 Serviços de Terceiros PF · 39 Serviços de Terceiros PJ · 52 Equipamentos e Material Permanente · 92 Despesas de Exercícios Anteriores</p></div>')
  ]
};

var EX = {
d1:{t:"gap", instr:"Complete a frase",
  before:"Despesa orçamentária é toda transação que depende de autorização legislativa, na forma de consignação de ",
  after:".", options:["dotação orçamentária","empenho prévio","registro contábil"], answer:0,
  why:"O critério é a <b>dotação orçamentária</b>. Sem ela, não há despesa orçamentária."},

d2:{t:"match", instr:"Correlacione o crédito adicional à sua finalidade",
  pairs:[["Suplementar","Reforço de dotação orçamentária"],
         ["Especial","Despesa sem dotação orçamentária específica"],
         ["Extraordinário","Despesa urgente e imprevista (guerra, calamidade)"]]},

d3:{t:"sort", instr:"Classifique cada operação",
  buckets:["Receita extraorçamentária","Despesa extraorçamentária"],
  items:[["Inscrição de restos a pagar",0],["Pagamento de restos a pagar",1],
         ["Recebimento de caução em garantia",0],["Restituição de caução",1],
         ["Retenção de consignação em folha",0],["Repasse da consignação ao credor",1]],
  why:"Quando o recurso <b>entra</b> em trânsito é receita extraorçamentária; quando é <b>devolvido</b>, despesa extraorçamentária."},

d4:{t:"mc", instr:"Na classificação por esfera orçamentária, qual código identifica o orçamento de investimento das empresas estatais?",
  options:["30","10","20","40"], answer:0,
  why:"<b>10</b> fiscal · <b>20</b> seguridade social · <b>30</b> investimento das estatais."},

d5:{t:"gap", instr:"Complete a frase",
  before:"Na classificação institucional, os dois primeiros dígitos identificam o ", after:".",
  options:["órgão orçamentário","elemento de despesa","programa"], answer:0,
  why:"Órgão (2 dígitos) + unidade orçamentária (3 dígitos) = cinco dígitos."},

d6:{t:"multi", instr:"Marque o que é verdadeiro sobre a classificação funcional",
  options:["Responde “em que área” a despesa será realizada",
           "É de aplicação comum e obrigatória para União, estados, DF e municípios",
           "É independente dos programas",
           "Tem cinco dígitos: função e subfunção",
           "Reflete a estrutura de alocação dos créditos orçamentários",
           "Cada ente define livremente seu detalhamento"],
  answers:[0,1,2,3],
  why:"As duas últimas descrevem a classificação <b>institucional</b>."},

d7:{t:"wordbank", instr:"Monte a frase",
  target:["A","função","28","só","se","conjuga","com","suas","subfunções","típicas"],
  extra:["qualquer","28","nunca"],
  why:"Matricialidade é combinar subfunções com funções diferentes — salvo Encargos Especiais (função 28)."},

d8:{t:"match", instr:"Correlacione a classificação à pergunta que ela responde",
  pairs:[["Institucional","Quem gasta — órgão e unidade orçamentária"],
         ["Funcional","Em que área — função e subfunção"],
         ["Programática","Para qual objetivo — programa, ação e subtítulo"],
         ["Por natureza","Em que se gasta — categoria, GND, elemento"]]},

d9:{t:"order", instr:"Ordene os níveis do código da classificação programática",
  items:["Programa (1º ao 4º dígito)","Ação orçamentária (5º ao 8º)","Subtítulo — localizador do gasto (9º ao 12º)"],
  why:"Doze dígitos ao todo: XXXX.XXXX.XXXX."},

d10:{t:"sort", instr:"Classifique cada ação orçamentária",
  buckets:["Atividade","Projeto","Operação especial"],
  items:[["Manutenção de trecho rodoviário",0],["Construção de trecho rodoviário",1],
         ["Cumprimento de sentenças judiciais",2],["Pagamento de servidores da rede escolar",0],
         ["Implantação de nova unidade de saúde",1],["Transferências constitucionais",2]],
  why:"Atividade é contínua; projeto é limitado no tempo; operação especial é agregação neutra e não integra o PPA."},

d11:{t:"multi", instr:"Marque o que caracteriza a operação especial",
  options:["Não agrega valor à sociedade","Não gera produtos (bens ou serviços)",
           "Consta na LOA, mas não integra o PPA",
           "Não contribui para manutenção, expansão ou aperfeiçoamento das ações",
           "É limitada no tempo e expande a produção pública",
           "Realiza-se de modo contínuo e permanente"],
  answers:[0,1,2,3],
  why:"As duas últimas descrevem projeto e atividade."},

d12:{t:"mc", instr:"Sobre o plano orçamentário, é correto afirmar:",
  options:["É identificação de caráter gerencial que não consta da LOA",
           "É o quarto nível da classificação programática, constante da LOA",
           "Substitui o subtítulo na identificação do gasto",
           "É obrigatório para todos os entes da Federação"], answer:0,
  why:"Vinculado à ação orçamentária, permite detalhamento maior que o do subtítulo — mas <b>fora</b> da LOA."},

d13:{t:"gap", instr:"Complete a frase",
  before:"Os subtítulos identificam a localização física da ação e ", after:" a finalidade da ação orçamentária.",
  options:["não permitem alterar","permitem alterar","obrigam a rever"], answer:0,
  why:"Localizar o gasto nunca muda a finalidade da ação."},

d14:{t:"sort", instr:"Classifique quanto ao impacto no patrimônio",
  buckets:["Despesa efetiva","Despesa não efetiva"],
  items:[["Pagamento de vencimentos de servidores",0],["Aquisição de material para estoque",1],
         ["Concessão de adiantamento",1],["Transferência de capital a município",0],
         ["Aquisição de veículo para a frota",1],["Pagamento de diárias",0]],
  why:"Efetiva reduz a situação líquida (fato modificativo diminutivo). Não efetiva é permutativa. Cuidado com as duas exceções."},

d15:{t:"wordbank", instr:"Monte a frase do bizu",
  target:["Categoria","Grupo","Modalidade","Elemento","Desdobramento"],
  extra:["Esfera","Função"],
  why:"<b>CGMED</b> — a ordem das posições no código de natureza da despesa."},

d16:{t:"order", instr:"Ordene as posições do código de natureza da despesa",
  items:["Categoria econômica (1º dígito)","Grupo de natureza de despesa (2º dígito)",
         "Modalidade de aplicação (3º e 4º)","Elemento de despesa (5º e 6º)",
         "Desdobramento facultativo (7º e 8º)"],
  why:"Bizu CGMED. O código tem seis dígitos ou, opcionalmente, oito."},

d17:{t:"gap", instr:"Complete a frase",
  before:"Na categoria econômica, o código 3 corresponde às despesas ", after:".",
  options:["correntes","de capital","extraorçamentárias"], answer:0,
  why:"<b>3 correntes · 4 capital.</b>"},

d18:{t:"match", instr:"Correlacione o GND ao seu código",
  pairs:[["1","Pessoal e Encargos Sociais"],["2","Juros e Encargos da Dívida"],
         ["3","Outras Despesas Correntes"],["4","Investimentos"],
         ["5","Inversões Financeiras"],["6","Amortização da Dívida"]]},

d19:{t:"sort", instr:"Classifique cada GND pela categoria econômica",
  buckets:["Despesa corrente","Despesa de capital"],
  items:[["Pessoal e Encargos Sociais",0],["Juros e Encargos da Dívida",0],
         ["Outras Despesas Correntes",0],["Investimentos",1],
         ["Inversões Financeiras",1],["Amortização da Dívida",1]],
  why:"Correntes: GND 1, 2 e 3. De capital: GND 4, 5 e 6."},

d20:{t:"multi", instr:"Segundo o art. 12 da Lei nº 4.320/1964, marque as despesas de capital",
  options:["Investimentos","Inversões financeiras","Transferências de capital",
           "Despesas de custeio","Transferências correntes"],
  answers:[0,1,2],
  why:"A classificação legal difere da estrutura de GND do MCASP: custeio e transferências correntes são despesas <b>correntes</b>."},

d21:{t:"sort", instr:"Onde cada despesa é classificada em cada norma?",
  buckets:["MCASP / MTO","Lei 4.320, art. 13"],
  items:[["Inativos e pensionistas em Pessoal e Encargos",0],
         ["Inativos e pensionistas em Transferências Correntes",1],
         ["Juros em Juros e Encargos da Dívida",0],
         ["Juros em Transferências Correntes",1],
         ["Subvenções em Outras Despesas Correntes",0],
         ["Subvenções em Transferências Correntes",1]],
  why:"O padrão é simples: a <b>Lei 4.320 joga os três em Transferências Correntes</b>."},

d22:{t:"sort", instr:"Investimento ou inversão financeira?",
  buckets:["Investimentos","Inversões financeiras"],
  items:[["Execução de obra pública",0],["Aquisição de softwares",0],
         ["Aquisição de equipamentos e material permanente",0],
         ["Aquisição de imóvel já em utilização",1],
         ["Compra de títulos de empresa já constituída, sem aumento de capital",1],
         ["Aumento do capital de empresa estatal",1]],
  why:"Investimento forma <b>capital novo</b>. Inversão troca a titularidade de bem ou capital <b>já existente</b>."},

d23:{t:"mc", instr:"A aquisição de títulos representativos do capital de empresa já constituída, quando não importe aumento do capital, classifica-se como:",
  options:["Despesa de capital — inversões financeiras","Despesa de capital — investimentos",
           "Despesa corrente — outras despesas correntes","Despesa de capital — amortização da dívida"],
  answer:0,
  why:"Pegadinha do resumo: a alternativa “investimentos” é a armadilha."},

d24:{t:"multi", instr:"Marque o que é verdadeiro sobre a modalidade de aplicação",
  options:["É informação de caráter gerencial",
           "Indica se os recursos são aplicados diretamente ou por transferência",
           "Permite a eliminação da dupla contagem no orçamento",
           "Ocupa o 3º e o 4º dígitos do código de natureza",
           "Identifica o objeto do gasto",
           "É o maior nível de agregação das áreas de atuação"],
  answers:[0,1,2,3],
  why:"Identificar o objeto do gasto é função do <b>elemento</b>; o maior nível de agregação é a <b>função</b>."},

d25:{t:"gap", instr:"Complete a frase",
  before:"O desdobramento do elemento de despesa é ", after:" a cada ente da Federação.",
  options:["facultado","obrigatório","vedado"], answer:0,
  why:"Fica facultado conforme as necessidades de escrituração contábil e controle da execução."},

d26:{t:"mc", instr:"O elemento de despesa ocupa quais posições do código de natureza?",
  options:["5º e 6º dígitos","3º e 4º dígitos","2º dígito","7º e 8º dígitos"], answer:0,
  why:"CGMED: Categoria (1) · GND (2) · Modalidade (3-4) · <b>Elemento (5-6)</b> · Desdobramento (7-8)."},

d27:{t:"wordbank", instr:"Monte a frase",
  target:["Gasto","é","gênero;","despesa","orçamentária","depende","de","dotação"],
  extra:["receita","autorização","sempre"],
  why:"Distinção que a banca explora: nem todo gasto é despesa orçamentária."},

d28:{t:"match", instr:"Correlacione a classificação ao número de dígitos",
  pairs:[["Institucional","5 dígitos — órgão e unidade"],
         ["Funcional","5 dígitos — função e subfunção"],
         ["Programática","12 dígitos — programa, ação e subtítulo"],
         ["Natureza da despesa","6 ou 8 dígitos — CGMED"]]}
};

for(var i=0;i<QS.length;i++) EX["r"+i]={t:"ce", qi:i};

var KIT = {
  g1:{tema:"Despesa orçamentária e extraorçamentária",
    bases:["Lei nº 4.320/1964, art. 12 — classificação da despesa",
           "Lei nº 4.320/1964, arts. 40 e 41 — créditos adicionais",
           "Lei nº 4.320/1964, art. 36 — inscrição em restos a pagar",
           "CF/1988, art. 167, I e II — vedações de despesa sem dotação"],
    ouro:["autorização legislativa","dotação orçamentária","recursos de terceiros","caráter transitório",
          "receita extraorçamentária","despesa extraorçamentária","créditos suplementares",
          "créditos especiais","créditos extraordinários","urgentes e imprevistas"],
    abertura:"A despesa orçamentária é toda transação que depende de autorização legislativa, na forma de consignação de dotação orçamentária, ao passo que a despesa extraorçamentária corresponde à devolução de recursos de terceiros, de caráter transitório, que transitaram pelos cofres públicos sem integrar o patrimônio estatal.",
    evite:"Não escreva “todo gasto”. Gasto é gênero; despesa orçamentária é transação com dotação."},
  g2:{tema:"Classificações da despesa",
    bases:["Lei nº 4.320/1964, art. 14 — unidade orçamentária",
           "Lei nº 4.320/1964, art. 15 — discriminação por elementos",
           "Portaria MOG nº 42/1999 — funções e subfunções",
           "MCASP e Manual Técnico do Orçamento (MTO)"],
    ouro:["estrutura de alocação dos créditos","órgão orçamentário","unidade orçamentária",
          "em que área","função e subfunção","aplicação comum e obrigatória","consolidação nacional",
          "independente dos programas","matricialidade","agregação neutra",
          "programa, ação e subtítulo","localizador do gasto"],
    abertura:"As classificações da despesa orçamentária respondem a perguntas distintas e complementares: a institucional indica quem gasta, a funcional em que área se gasta e a programática para qual objetivo o gasto se destina.",
    evite:"Não diga que a funcional depende dos programas nem que a institucional é obrigatória para estados e municípios. É exatamente o contrário nos dois casos."},
  g3:{tema:"Natureza da despesa",
    bases:["Lei nº 4.320/1964, arts. 12 e 13 — categorias e grupos",
           "Portaria Interministerial STN/SOF nº 163/2001 — natureza da despesa",
           "MCASP — definições de GND",
           "LC nº 101/2000, art. 18 — despesa com pessoal"],
    ouro:["categoria econômica","grupo de natureza de despesa","modalidade de aplicação",
          "elemento de despesa","desdobramento facultativo","eliminação da dupla contagem",
          "objeto do gasto","investimentos","inversões financeiras","amortização da dívida"],
    abertura:"A classificação da despesa por natureza é operada por código numérico de seis dígitos, ou opcionalmente oito, que conjuga categoria econômica, grupo de natureza de despesa, modalidade de aplicação, elemento e o desdobramento facultativo do elemento.",
    evite:"Não confunda a estrutura de GND do MCASP com a classificação do art. 12 da Lei 4.320. Se a questão cita a lei, custeio e transferências são as chaves."},
  g4:{tema:"Despesa efetiva e não efetiva",
    bases:["Lei nº 4.320/1964, art. 12 — correntes e de capital",
           "MCASP — Parte I, variações patrimoniais",
           "NBC TSP Estrutura Conceitual — reconhecimento de despesa"],
    ouro:["situação líquida patrimonial","fato contábil modificativo diminutivo","fato contábil permutativo",
          "variação patrimonial diminutiva","materiais para estoque","adiantamentos","transferências de capital"],
    abertura:"Quanto ao impacto no patrimônio, a despesa orçamentária efetiva é aquela que reduz a situação líquida patrimonial, constituindo fato contábil modificativo diminutivo, ao passo que a não efetiva não a reduz, configurando fato permutativo.",
    evite:"Não apresente a correspondência corrente/efetiva e capital/não efetiva como absoluta. O ponto da questão são as exceções."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. Com esse espaço, reserve cerca de 6 linhas por item cobrado e 3 para o fecho.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre a classificação da despesa pública orçamentária, disserte necessariamente sobre:</p>'+
  '<ol><li>a distinção entre despesa orçamentária e despesa extraorçamentária;</li>'+
  '<li>o que respondem, respectivamente, as classificações institucional, funcional e programática, indicando qual delas é de aplicação obrigatória a todos os entes;</li>'+
  '<li>a estrutura do código de natureza da despesa e a distinção entre investimentos e inversões financeiras.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>A despesa orçamentária é toda transação que depende de autorização legislativa, na forma de consignação de dotação orçamentária, sendo fixada nas leis orçamentárias ou nas leis de créditos adicionais. A despesa extraorçamentária, por sua vez, consiste na devolução de recursos de caráter transitório, pertencentes a terceiros e não ao Estado, razão pela qual independe de autorização legislativa. São exemplos a restituição de cauções, o pagamento de restos a pagar e o repasse ao credor de consignações em folha. Observe-se que a inscrição de restos a pagar constitui receita extraorçamentária, enquanto o seu pagamento constitui despesa extraorçamentária.</p>'+
  '<p>As classificações da despesa respondem a perguntas distintas. A <b>classificação institucional</b> reflete a estrutura de alocação dos créditos orçamentários e responde a quem gasta, estruturando-se em órgão orçamentário e unidade orçamentária — esta definida pelo art. 14 da Lei nº 4.320/1964 como o agrupamento de serviços subordinados ao mesmo órgão a que serão consignadas dotações próprias. A <b>classificação funcional</b> segrega as dotações em funções e subfunções e responde em que área de ação governamental a despesa será realizada; é independente dos programas e, sendo de <b>aplicação comum e obrigatória</b> à União, aos estados, ao Distrito Federal e aos municípios, permite a consolidação nacional dos gastos do setor público. A <b>classificação programática</b> responde para qual objetivo o recurso se destina, organizando a atuação governamental em programas e ações orientados pelos objetivos do plano plurianual, com código de doze dígitos que compreende programa, ação orçamentária e subtítulo, este último o localizador do gasto.</p>'+
  '<p>A <b>classificação por natureza</b> é operada por código numérico de seis dígitos, ou opcionalmente oito, cujas posições identificam, sucessivamente, a categoria econômica, o grupo de natureza de despesa, a modalidade de aplicação, o elemento de despesa e o desdobramento facultativo do elemento. Dentro dos grupos de despesa de capital, distinguem-se os <b>investimentos</b> — despesas com softwares, com o planejamento e a execução de obras, inclusive os imóveis necessários à sua realização, e com a aquisição de instalações, equipamentos e material permanente — das <b>inversões financeiras</b>, que compreendem a aquisição de imóveis ou bens de capital já em utilização, a aquisição de títulos representativos do capital de empresas já constituídas quando a operação não importe aumento do capital, e a constituição ou o aumento de capital de empresas.</p>'+
  '<p>Conclui-se que o critério distintivo entre investimento e inversão reside na <b>formação de capital novo</b>: enquanto o investimento amplia o estoque de capital disponível à coletividade, a inversão apenas transfere a titularidade de bem ou de capital preexistente.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> a expressão “dotação orçamentária” e a menção a recursos de terceiros de caráter transitório. O par inscrição/pagamento de RP costuma valer ponto extra.</li>'+
  '<li><b>Item 2:</b> as três perguntas (quem / em que área / para qual objetivo) e a afirmação expressa de que a <b>funcional</b> é a obrigatória. Citar o art. 14 vale ponto.</li>'+
  '<li><b>Item 3:</b> as cinco posições do código e o critério de distinção — capital novo × bem preexistente.</li>'+
  '<li><b>Fecho:</b> uma frase que sintetize o critério, e não um resumo do que já foi dito.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Sem introdução doutrinária: classifique item a item, com a fundamentação em uma frase cada.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>O Tribunal de Justiça de determinado estado executa, no exercício, as seguintes despesas:</p>'+
  '<ol><li>pagamento dos vencimentos dos servidores do quadro efetivo;</li>'+
  '<li>aquisição de um edifício já construído e em uso, destinado a abrigar uma nova vara;</li>'+
  '<li>aquisição de licenças de software de gestão processual;</li>'+
  '<li>compra de material de expediente para o almoxarifado;</li>'+
  '<li>pagamento de restos a pagar inscritos no exercício anterior.</li></ol>'+
  '<p><b>Pergunta-se:</b> classifique cada despesa quanto à categoria econômica e ao grupo de natureza de despesa, indicando o impacto de cada uma no patrimônio, e esclareça se todas dependem de autorização legislativa.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1. Vencimentos dos servidores</b> — despesa corrente, GND 1 (Pessoal e Encargos Sociais). Reduz a situação líquida patrimonial: despesa <b>efetiva</b>, fato modificativo diminutivo. Depende de dotação orçamentária.</p>'+
  '<p><b>2. Edifício já construído e em uso</b> — despesa de capital, GND 5 (<b>Inversões Financeiras</b>), e não Investimentos, porque se trata de bem de capital já em utilização, sem formação de capital novo. Despesa <b>não efetiva</b>: mero fato permutativo, pois o caixa é trocado por um imóvel de igual valor. Depende de dotação.</p>'+
  '<p><b>3. Licenças de software</b> — despesa de capital, GND 4 (<b>Investimentos</b>): o MCASP inclui expressamente softwares nesse grupo. Despesa <b>não efetiva</b>. Depende de dotação.</p>'+
  '<p><b>4. Material de expediente para o almoxarifado</b> — despesa corrente, GND 3 (Outras Despesas Correntes). Aqui está a exceção: por ingressar em estoque, é despesa corrente <b>não efetiva</b>, fato permutativo. Só se tornará efetiva no consumo. Depende de dotação.</p>'+
  '<p><b>5. Pagamento de restos a pagar</b> — <b>despesa extraorçamentária</b>. Não se classifica por categoria econômica nem por GND do exercício, porque a dotação foi consumida no exercício em que a despesa foi empenhada. <b>Não depende</b> de nova autorização legislativa.</p>'+
  '<p>Portanto, das cinco despesas, quatro são orçamentárias e dependem de dotação; apenas o pagamento de restos a pagar é extraorçamentário.</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>Classificar a <b>2</b> como investimento, porque é imóvel. O critério é “já em utilização” → inversão.</li>'+
  '<li>Classificar a <b>3</b> como despesa corrente, porque software é intangível. O MCASP põe em Investimentos.</li>'+
  '<li>Classificar a <b>4</b> como efetiva, porque é despesa corrente. Estoque é permutativo.</li>'+
  '<li>Classificar a <b>5</b> como despesa orçamentária do exercício do pagamento. É extraorçamentária.</li></ul></div>';

var TEC = [["CESPE","Q3cM2s"],["FCC","Q3cM3m"],["FGV","Q3cM4j"],["VUNESP","Q3cM55"]];

var UNITS = [
  {n:1, title:"Conceito e esferas", cvar:"u1", lessons:[
    {id:"h1", type:"teoria", title:"Despesa orçamentária",            xp:10, data:"d1"},
    {id:"h2", type:"drill",  title:"Praticar · orçamentária",         xp:20, data:["d1","d2","r0","r1","r2"]},
    {id:"h3", type:"drill",  title:"Praticar · extraorçamentária",    xp:20, data:["d3","d27","r3","r4","r5","r6"]},
    {id:"h4", type:"flash",  title:"Flashcards · conceitos",          xp:15, data:[0,1,2,3]},
    {id:"h5", type:"teoria", title:"Esfera e institucional",          xp:10, data:"d2"},
    {id:"h6", type:"drill",  title:"Praticar · institucional",        xp:20, data:["d4","d5","r7","r8","r9","r10"]},
    {id:"h7", type:"flash",  title:"Flashcards · esfera e órgão",     xp:15, data:[4,5,6,7]},
    {id:"h8", type:"feynman",title:"Explique orçamentária × extra",   xp:30, data:"g1"}
  ]},
  {n:2, title:"Funcional e programática", cvar:"u2", lessons:[
    {id:"h10",type:"teoria", title:"Classificação funcional",         xp:10, data:"d3"},
    {id:"h11",type:"drill",  title:"Praticar · funcional",            xp:20, data:["d6","d7","r11","r12","r13","r14"]},
    {id:"h12",type:"drill",  title:"Praticar · matricialidade",       xp:20, data:["d8","d28","r15","r16"]},
    {id:"h13",type:"flash",  title:"Flashcards · funcional",          xp:15, data:[8,9,10,11,12]},
    {id:"h14",type:"teoria", title:"Classificação programática",      xp:10, data:"d4"},
    {id:"h15",type:"drill",  title:"Praticar · programa e ação",      xp:20, data:["d9","d10","r17","r18","r19"]},
    {id:"h16",type:"drill",  title:"Praticar · subtítulo e PO",       xp:20, data:["d11","d12","d13","r20","r21","r22"]},
    {id:"h17",type:"flash",  title:"Flashcards · programática",       xp:15, data:[13,14,15,16,17,18,19]},
    {id:"h18",type:"feynman",title:"Explique as três classificações", xp:30, data:"g2"}
  ]},
  {n:3, title:"Natureza da despesa", cvar:"u3", lessons:[
    {id:"h20",type:"teoria", title:"Impacto no patrimônio",           xp:10, data:"d5"},
    {id:"h21",type:"drill",  title:"Praticar · efetiva e não efetiva",xp:25, data:["d14","r23","r24","r25"]},
    {id:"h22",type:"teoria", title:"Código CGMED e categoria",        xp:10, data:"d6"},
    {id:"h23",type:"drill",  title:"Praticar · CGMED",                xp:20, data:["d15","d16","d17","r26","r27","r28"]},
    {id:"h24",type:"drill",  title:"Praticar · GND",                  xp:20, data:["d18","d19","d20","r29","r30"]},
    {id:"h25",type:"drill",  title:"Praticar · MCASP × Lei 4.320",    xp:25, data:["d21","r31"]},
    {id:"h26",type:"drill",  title:"Praticar · investir ou inverter",  xp:25, data:["d22","d23","r32","r33","r34"]},
    {id:"h27",type:"teoria", title:"Modalidade, elemento e desdobramento", xp:10, data:"d7"},
    {id:"h28",type:"drill",  title:"Praticar · modalidade e elemento", xp:20, data:["d24","d25","d26","r35","r36","r37"]},
    {id:"h29",type:"flash",  title:"Flashcards · natureza",           xp:15, data:[20,21,22,23,24,25,26,27,28,29,30,31]},
    {id:"h30",type:"feynman",title:"Explique o código de natureza",   xp:30, data:"g3"},
    {id:"h31",type:"feynman",title:"Explique efetiva × não efetiva",  xp:30, data:"g4"}
  ]},
  {n:4, title:"Aplicação e prova", cvar:"u4", lessons:[
    {id:"h33",type:"leitura",title:"Discursiva resolvida",            xp:25, data:"disc"},
    {id:"h34",type:"leitura",title:"Estudo de caso resolvido",        xp:25, data:"caso"},
    {id:"hrev",type:"review",title:"Revisão geral das unidades",      xp:60, data:null},
    {id:"h35",type:"missao", title:"Missão TEC Concursos",            xp:15, data:null},
    {id:"h36",type:"prova",  title:"Simulado cronometrado",           xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo — é o comentário que o Resumo dá às suas QUESTÕES-PEGADINHA: despesa orçamentária é <b>toda transação que depende de autorização legislativa, na forma de consignação de dotação orçamentária</b>, para ser efetivada.</p><p>São as despesas fixadas nas leis orçamentárias ou nas leis de créditos adicionais. Exemplos do material: construção de prédios públicos, manutenção de rodovias, pagamento de servidores.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Despesa orçamentária / QUESTÃO-PEGADINHA</i></p>",
1:"<p>Errado — é a primeira <b>QUESTÃO-PEGADINHA</b> do Resumo, com gabarito ERRADO. O que define a despesa orçamentária não é o sacrifício de receitas orçamentárias, e sim a <b>dependência de autorização legislativa, na forma de consignação de dotação orçamentária</b>.</p><p>Sem dotação não há despesa orçamentária. Ela precisa estar fixada na lei orçamentária ou em lei de créditos adicionais.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>QUESTÃO-PEGADINHA — despesa orçamentária</i></p>",
2:"<p>Errado — é a segunda <b>QUESTÃO-PEGADINHA</b> do Resumo. O erro está na palavra <b>gasto</b>: gasto é gênero, e qualquer desperdício pode ser considerado gasto. Exemplo do material: <b>incêndio no setor de almoxarifado</b>.</p><p>Despesa orçamentária é toda <b>transação</b> que depende de autorização legislativa <b>na forma de dotação orçamentária</b>.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>QUESTÃO-PEGADINHA — gasto é gênero</i></p>",
3:"<p>Certo. Despesa extraorçamentária é a devolução dos recursos transitórios obtidos como receitas extraorçamentárias. São recursos que <b>pertencem a terceiros e não ao Estado</b>, e por isso <b>não dependem de autorização legislativa para serem devolvidos</b>.</p><p>Exemplos do Resumo: restituição de cauções, despesas com emissão de papel moeda, pagamento de restos a pagar, resgate de ARO e repasse ao credor das consignações em folha.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Despesa extraorçamentária</i></p>",
4:"<p>Certo — é o quadro <b>NÃO CONFUNDA!</b> do Resumo: <b>inscrição</b> de restos a pagar = <b>receita</b> extraorçamentária; <b>pagamento</b> de restos a pagar = <b>despesa</b> extraorçamentária.</p><p>O pagamento de RP também está na lista de exemplos de despesas extraorçamentárias, ao lado da restituição de cauções e do resgate de operações de crédito por antecipação de receita.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Despesa extraorçamentária — NÃO CONFUNDA</i></p>",
5:"<p>Errado — descreveu os créditos <b>suplementares</b>, destinados a <b>reforço de dotação orçamentária</b>.</p><p>A lista do Resumo (Lei 4.320, art. 40): <b>suplementares</b> — reforço de dotação; <b>especiais</b> — despesas sem dotação orçamentária específica; <b>extraordinários</b> — despesas <b>urgentes e imprevistas</b> (guerra, comoção interna, calamidade pública).</p><p class='fb-fonte'>AFO — Resumo 08 · <i>O que são créditos adicionais?</i></p>",
6:"<p>Certo. Os créditos extraordinários se destinam a despesas <b>urgentes e imprevistas</b>, e os exemplos do Resumo são exatamente estes: <b>guerra, comoção interna, calamidade pública</b>.</p><p>Não confunda com os suplementares (reforço de dotação) e os especiais (despesas sem dotação orçamentária específica).</p><p class='fb-fonte'>AFO — Resumo 08 · <i>O que são créditos adicionais?</i></p>",
7:"<p>Errado no código. Pela classificação por esfera orçamentária do Resumo: <b>10</b> — Fiscal; <b>20</b> — Seguridade Social; <b>30</b> — Investimento das Empresas Estatais.</p><p>O 20 é da <b>Seguridade Social</b>. As três esferas seguem a ordem de dezena em dezena: fiscal, seguridade, investimento.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Classificação da despesa por esfera orçamentária</i></p>",
8:"<p>Certo. A classificação institucional reflete a estrutura de alocação dos créditos orçamentários e está estruturada em <b>dois níveis hierárquicos</b>: <b>órgão orçamentário</b> e <b>unidade orçamentária</b>.</p><p>No Governo Federal o código tem cinco dígitos (XX.XXX). Exemplo do Resumo: <b>39.252</b> — 39 é o órgão (Ministério dos Transportes) e 252 é a unidade orçamentária (DNIT).</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Classificação institucional da despesa</i></p>",
9:"<p>Certo — é o quadro <b>ATENÇÃO!</b> do Resumo, com base no art. 14 da Lei 4.320: constitui unidade orçamentária (ex.: <b>DNIT</b>) o agrupamento de serviços subordinados ao mesmo órgão (ou repartição) a que serão consignadas <b>dotações próprias</b>.</p><p>O MCASP determina que as dotações são consignadas às unidades orçamentárias, responsáveis pela realização das ações. Em casos excepcionais, serão consignadas dotações a unidades administrativas subordinadas ao mesmo órgão (art. 14, parágrafo único).</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Classificação institucional — ATENÇÃO</i></p>",
10:"<p>Errado pelo <b>necessariamente</b>. A OBSERVAÇÃO 03 do Resumo diz que órgão orçamentário ou unidade orçamentária <b>não correspondem necessariamente</b> a uma estrutura administrativa.</p><p>É o caso de alguns fundos especiais e de unidades como Transferências a Estados, DF e Municípios; Encargos Financeiros da União; Operações Oficiais de Crédito; Refinanciamento da Dívida Pública Mobiliária Federal; e Reserva de Contingência.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Classificação institucional — OBSERVAÇÕES</i></p>",
11:"<p>Certo. A classificação funcional segrega as dotações em funções e subfunções, buscando responder basicamente à indagação <b>\"em que área\"</b> de ação governamental a despesa será realizada.</p><p>Exemplo do Resumo: código <b>26.782</b> — função 26 (Transporte) e subfunção 782 (Transporte Rodoviário).</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Classificação funcional da despesa</i></p>",
12:"<p>Errado. A classificação funcional é de <b>aplicação comum e obrigatória</b> no âmbito da União, dos Estados, do DF e dos Municípios, o que permite a <b>consolidação nacional</b> dos gastos do setor público.</p><p>Quadro NÃO CONFUNDA! do Resumo: a <b>institucional</b> é que <b>não</b> possui aplicação obrigatória nos Estados e Municípios; a <b>funcional</b> é obrigatória para todos.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Institucional x funcional — NÃO CONFUNDA</i></p>",
13:"<p>Certo. A classificação funcional é representada por <b>cinco dígitos</b> (XX.XXX): os <b>dois primeiros</b> referem-se à <b>função</b>, e os <b>três últimos</b>, à <b>subfunção</b>.</p><p>Exemplo do Resumo: <b>26.782</b> — Transporte / Transporte Rodoviário. Repare que a institucional federal também tem cinco dígitos (39.252 — Ministério dos Transportes / DNIT).</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Classificação funcional da despesa</i></p>",
14:"<p>Errado — trocou função por subfunção. Pelo quadro <b>ATENÇÃO!</b> do Resumo, é a <b>função</b> que representa o <b>maior nível de agregação</b> das áreas de atuação do setor público, relacionada à missão institucional do órgão.</p><p>A <b>subfunção</b> representa um nível de agregação <b>imediatamente inferior</b> à função e evidencia cada área de atuação governamental.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Classificação funcional — ATENÇÃO</i></p>",
15:"<p>Certo. Matricialidade é a combinação de subfunções com funções diferentes, <b>exceto a função 28 (Encargos Especiais)</b> e suas subfunções típicas, que <b>só podem ser conjugadas entre si</b>.</p><p>As subfunções típicas vão de <b>841 a 847</b> (refinanciamento e serviço das dívidas interna e externa, outras transferências, outros encargos especiais, transferências para a educação básica). Encargos Especiais é uma agregação neutra: dívidas, ressarcimentos, indenizações.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Matricialidade</i></p>",
16:"<p>Errado — é o oposto. O quadro <b>ATENÇÃO!</b> do Resumo destaca: a classificação funcional é <b>independente dos programas</b>.</p><p>Exemplo do material: a despesa na LOA com distribuição de energia elétrica para a zona rural faz parte do programa <b>\"Luz para todos\"</b>, previsto no PPA. Mesmo assim, a classificação funcional dessa despesa não depende do programa.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Matricialidade — ATENÇÃO</i></p>",
17:"<p>Certo. A classificação programática é identificada por um código de <b>12 dígitos</b> (XXXX.XXXX.XXXX): 1º ao 4º — <b>programa</b>; 5º ao 8º — <b>ação</b>; 9º ao 12º — <b>subtítulo</b> (localização do gasto).</p><p>Exemplo do Resumo: <b>2075.7M64.0043</b> — Transporte Rodoviário / Construção de trecho rodoviário / Paraíba.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Classificação programática da despesa</i></p>",
18:"<p>Errado — descreveu o <b>programa</b>. Programa é o instrumento de organização da atuação governamental que <b>articula um conjunto de ações</b> (exemplo: Programa de Transporte Rodoviário).</p><p><b>Ações</b> são operações das quais resultam produtos (bens ou serviços) que contribuem para atender ao objetivo de um programa (exemplo: construção de trecho rodoviário). O programa articula ações, e não o contrário.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Classificação programática — programa x ação</i></p>",
19:"<p>Errado — é a terceira <b>QUESTÃO-PEGADINHA</b> do Resumo. A banca confundiu <b>projeto</b> com <b>atividade</b>: operações <b>limitadas no tempo</b>, que concorrem para a <b>expansão</b> da ação de governo, definem o projeto.</p><p>Atividade é o conjunto de operações em caráter <b>contínuo e permanente</b>, que mantém o mesmo nível da produção pública. Exemplos do material: construção de trecho rodoviário (projeto) x manutenção de trecho rodoviário (atividade).</p><p class='fb-fonte'>AFO — Resumo 08 · <i>QUESTÃO-PEGADINHA — projeto x atividade</i></p>",
20:"<p>Certo — está na lista do Resumo sobre operação especial: <b>constam na LOA, mas não integram o PPA</b>.</p><p>As operações especiais são despesas de <b>agregação neutra</b>: não agregam valor à sociedade, não contribuem para manutenção, expansão ou aperfeiçoamento das ações e não geram produtos. Exemplos: 0901 — Cumprimento de Sentenças Judiciais; 0902 — Financiamentos com Retorno; 0903 — Transferências Constitucionais.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Classificação programática — operação especial</i></p>",
21:"<p>Errado. O esquema do Resumo é taxativo: os subtítulos <b>não permitem alteração da finalidade</b> da ação orçamentária. Não há ressalva de interesse público.</p><p>O subtítulo serve para identificar a <b>localização física</b> da ação. A adequada localização do gasto permite maior controle social e governamental e evidencia os custos e os impactos da ação governamental.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Subtítulo (localizador do gasto)</i></p>",
22:"<p>Certo. O plano orçamentário é uma identificação orçamentária de <b>caráter gerencial</b> (<b>não constante da LOA</b>), vinculada à ação orçamentária.</p><p>Sua finalidade é permitir que a elaboração do orçamento e o acompanhamento físico e financeiro da execução ocorram num nível <b>mais detalhado do que o do subtítulo</b>/localizador de gasto.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Plano orçamentário</i></p>",
23:"<p>Errado — descreveu a despesa <b>não efetiva</b>. Despesa <b>efetiva</b> é aquela que <b>reduz</b> a situação líquida patrimonial e constitui fato contábil <b>modificativo diminutivo</b>.</p><p>A despesa não efetiva é a que não reduz a situação líquida patrimonial, constituindo fato contábil <b>permutativo</b>.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Classificação da despesa quanto ao impacto no patrimônio</i></p>",
24:"<p>Certo — é o exemplo da OBSERVAÇÃO 01 do Resumo. Em regra a despesa efetiva é a despesa corrente, mas pode haver despesa <b>corrente não efetiva</b>, que representa mero fato permutativo.</p><p>Os dois exemplos do material: a <b>aquisição de materiais para estoque</b> e a <b>despesa com adiantamentos</b>.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Impacto no patrimônio — OBSERVAÇÕES</i></p>",
25:"<p>Errado — é a exceção da OBSERVAÇÃO 02 do Resumo. Em regra a despesa de capital é não efetiva, mas <b>as transferências de capital</b> causam <b>variação patrimonial diminutiva</b> e, por isso, classificam-se como despesa <b>efetiva</b>.</p><p>As exceções se cruzam: materiais para estoque e adiantamentos são despesas correntes não efetivas; transferências de capital são despesa de capital efetiva.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Impacto no patrimônio — OBSERVAÇÕES</i></p>",
26:"<p>Errado. O 1º dígito é a <b>categoria econômica</b>; o grupo de natureza de despesa (GND) é o <b>2º dígito</b>.</p><p>Bizu do Resumo: <b>CGMED</b> — [C]ategoria econômica (1º), [G]rupo de natureza de despesa (2º), [M]odalidade de aplicação (3º e 4º), [E]lemento de despesa (5º e 6º), [D]esdobramento facultativo do elemento (7º e 8º).</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Classificação da despesa por natureza</i></p>",
27:"<p>Certo. A natureza de despesa é associada por um código numérico de <b>6 dígitos</b> ou, <b>opcionalmente, por 8 dígitos</b>.</p><p>Os dois últimos (7º e 8º) são o <b>desdobramento facultativo do elemento</b> (subelemento), o \"D\" do bizu <b>CGMED</b>. Por isso o código obrigatório vai só até o elemento de despesa, no 6º dígito.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Classificação da despesa por natureza</i></p>",
28:"<p>Errado — inverteu os códigos. Pela tabela do Resumo: <b>3</b> — Despesas <b>Correntes</b>; <b>4</b> — Despesas <b>de Capital</b>.</p><p>Correntes são as que não contribuem para a aquisição de um bem (exemplo: despesas com pessoal). De capital são as que contribuem para a aquisição de um bem (exemplo: aquisição de um imóvel).</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Classificação quanto à categoria econômica</i></p>",
29:"<p>Errado. <b>Amortização da Dívida</b> (GND 6) é despesa <b>de capital</b>, ao lado de Investimentos (4) e Inversões Financeiras (5).</p><p>Pelo MTO e MCASP, as correntes são Pessoal e Encargos Sociais (1), Juros e Encargos da Dívida (2) e Outras Despesas Correntes (3). A banca costuma trocar <b>juros</b> (corrente) por <b>amortização</b> (capital).</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Grupo de natureza de despesa (GND)</i></p>",
30:"<p>Certo. Na classificação prevista na Lei nº 4.320/1964 (art. 12), as despesas de capital são <b>Investimentos</b>, <b>Inversões Financeiras</b> e <b>Transferências de Capital</b>; as correntes são <b>Despesas de Custeio</b> e <b>Transferências Correntes</b>.</p><p>Não misture com o MTO/MCASP, cujos grupos de capital são Investimentos, Inversões Financeiras e <b>Amortização da Dívida</b>.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Quanto ao GND — Lei 4.320 x MTO/MCASP</i></p>",
31:"<p>Certo — é a OBSERVAÇÃO 01 do Resumo. O MTO e o MCASP classificam a despesa com <b>pessoal inativo e pensionista</b> no GND Pessoal e Encargos Sociais; o <b>art. 13 da Lei nº 4.320</b> a classifica em <b>Transferências Correntes</b>.</p><p>A mesma divergência vale para o pagamento de <b>juros</b> (MTO/MCASP: Juros e Encargos da Dívida) e para as <b>subvenções</b> (MTO/MCASP: Outras Despesas Correntes): na Lei 4.320, ambos são Transferências Correntes.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Quanto ao GND — OBSERVAÇÕES</i></p>",
32:"<p>Errado — é a <b>QUESTÃO-PEGADINHA</b> do Resumo. A aquisição de títulos representativos do capital de empresas já constituídas, quando a operação <b>não importe aumento do capital</b>, é <b>inversão financeira</b>; \"investimentos\" é justamente a alternativa-pegadinha.</p><p>Inversões financeiras (MCASP): aquisição de imóveis ou bens de capital já em utilização; aquisição de títulos de empresas já constituídas sem aumento de capital; constituição ou aumento do capital de empresas.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Definições do MCASP — QUESTÃO-PEGADINHA</i></p>",
33:"<p>Certo. Pela definição do MCASP transcrita no Resumo, <b>inversões financeiras</b> incluem a aquisição de <b>imóveis ou bens de capital já em utilização</b>.</p><p>Compare com <b>investimentos</b>: aí a aquisição de imóveis só entra quando eles são <b>considerados necessários à realização de obras</b>. A palavra-chave que manda para inversão é <b>já em utilização</b>.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Definições do MCASP — despesas de capital</i></p>",
34:"<p>Certo. Pelo MCASP, <b>investimentos</b> são despesas orçamentárias <b>com softwares</b> e com o planejamento e a execução de obras (inclusive aquisição de imóveis necessários a elas), além da aquisição de instalações, equipamentos e material permanente.</p><p>Software abre a definição de investimentos no Resumo: é despesa de capital, GND 4.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Definições do MCASP — investimentos</i></p>",
35:"<p>Certo — está literalmente no Resumo: a modalidade de aplicação <b>também permite a eliminação de dupla contagem</b> no orçamento.</p><p>Ela é informação gerencial que indica se os recursos serão aplicados diretamente ou mediante transferência. Exemplo do material: o Município que constrói uma escola usa o código <b>90</b> (aplicação direta) se ele mesmo aplica, ou o código <b>30</b> se repassa ao Estado. Ocupa o 3º e o 4º dígitos.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Modalidade de aplicação</i></p>",
36:"<p>Certo. O elemento de despesa tem por finalidade <b>identificar os objetos de gasto</b> (vencimentos e vantagens fixas, juros, diárias, material de consumo, serviços de terceiros) e representa o <b>5º e o 6º dígitos</b>.</p><p>No bizu <b>CGMED</b>, é o \"E\". Exemplos de códigos do Resumo: 30 — Material de Consumo; 39 — Outros Serviços de Terceiros – PJ; 52 — Equipamentos e Material Permanente.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Elemento de despesa orçamentária</i></p>",
37:"<p>Errado — o próprio nome diz: <b>desdobramento facultativo</b>. Conforme as necessidades de escrituração contábil e controle da execução, <b>fica facultado</b> a cada ente desdobrar os elementos de despesa.</p><p>Ocupa o 7º e o 8º dígitos — por isso o código de natureza tem 6 dígitos ou, <b>opcionalmente</b>, 8.</p><p class='fb-fonte'>AFO — Resumo 08 · <i>Desdobramento facultativo do elemento da despesa</i></p>",
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"08", nome:"Despesa pública e classificações", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, PROVA_POOL:PROVA_POOL};
})();
