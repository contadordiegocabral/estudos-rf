/* LRF — Módulo 03: Receita pública, renúncia e transferências (arts. 11 a 14 e 25 a 28) */
window.MOD = window.MOD || {};
window.MOD.lrf03 = (function(){
"use strict";

var CARDS = [
  ["Quais os requisitos essenciais da responsabilidade na gestão fiscal (art. 11)?","A <b>instituição, previsão e efetiva arrecadação de todos os tributos</b> da competência constitucional do ente da Federação."],
  ["O art. 11 alcança quais tributos?","<b>Todos</b> os da competência constitucional do ente — impostos, taxas e contribuições."],
  ["Qual a sanção do art. 11, parágrafo único?","É <b>vedada a realização de transferências voluntárias</b> para o ente que não observe o caput — <b>no que se refere aos impostos</b>."],
  ["A sanção do art. 11 alcança taxas e contribuições?","<b>Não.</b> O parágrafo único restringe a vedação ao que se refere aos <b>impostos</b>, embora o caput fale em todos os tributos."],
  ["O ente sancionado pelo art. 11 fica sem nenhuma transferência voluntária?","<b>Não.</b> Continua podendo receber as relativas a <b>Educação, Saúde e Assistência social</b> — o “ESA” do art. 25, § 3º."],
  ["O que as previsões de receita devem observar (art. 12)?","As <b>normas técnicas e legais</b>."],
  ["Que efeitos as previsões de receita devem considerar?","Os das <b>alterações na legislação</b>, da <b>variação do índice de preços</b>, do <b>crescimento econômico</b> ou de <b>qualquer outro fator relevante</b>."],
  ["De que as previsões de receita serão acompanhadas?","De <b>demonstrativo de sua evolução nos últimos três anos</b>, da <b>projeção para os dois seguintes</b> àquele a que se referirem, e da <b>metodologia de cálculo e premissas utilizadas</b>."],
  ["Os números do art. 12 — memorize","<b>3 anos para trás</b> (evolução) e <b>2 anos para frente</b> (projeção)."],
  ["O que determina o art. 13 da LRF?","No prazo do art. 8º, as receitas previstas serão <b>desdobradas pelo Poder Executivo em metas bimestrais de arrecadação</b>."],
  ["O que se especifica em separado nas metas bimestrais (art. 13)?","As <b>medidas de combate à evasão e à sonegação</b>, a <b>quantidade e os valores de ações ajuizadas para cobrança da dívida ativa</b> e a <b>evolução do montante dos créditos tributários passíveis de cobrança administrativa</b>."],
  ["Qual o prazo do desdobramento em metas bimestrais?","O mesmo do art. 8º: <b>até trinta dias após a publicação dos orçamentos</b>."],
  ["O que exige o art. 14 para a renúncia de receita?","<b>Estimativa do impacto orçamentário-financeiro</b> no exercício em que deva iniciar sua vigência e <b>nos dois seguintes</b>, <b>atender ao disposto na LDO</b> e <b>pelo menos uma</b> das duas condições dos incisos I e II."],
  ["Primeira condição alternativa do art. 14 (inciso I)","<b>Demonstração pelo proponente</b> de que a renúncia foi <b>considerada na estimativa de receita da LOA</b>, na forma do art. 12, e de que <b>não afetará as metas de resultados fiscais</b> do Anexo de Metas Fiscais."],
  ["Segunda condição alternativa do art. 14 (inciso II)","Estar acompanhada de <b>medidas de compensação</b>, no mesmo período, por meio do <b>aumento de receita</b> proveniente de <b>elevação de alíquotas, ampliação da base de cálculo, majoração ou criação de tributo ou contribuição</b>."],
  ["As duas condições do art. 14 são cumulativas?","<b>Não.</b> Basta atender a <b>pelo menos uma</b> delas — mas a estimativa de impacto e a observância da LDO são <b>sempre</b> exigidas."],
  ["O que compreende a renúncia de receita (art. 14, § 1º)?","<b>Anistia</b>, <b>remissão</b>, <b>subsídio</b>, <b>crédito presumido</b>, <b>concessão de isenção em caráter não geral</b>, <b>alteração de alíquota</b> ou <b>modificação de base de cálculo</b> que impliquem redução discriminada de tributos, e <b>outros benefícios</b> que correspondam a tratamento diferenciado."],
  ["Anistia × remissão","<b>Anistia</b> = perdão da <b>multa</b>. <b>Remissão</b> = perdão da <b>dívida</b> (do crédito tributário)."],
  ["Isenção em caráter geral é renúncia de receita?","<b>Não.</b> Só a <b>isenção em caráter não geral</b> configura renúncia, porque é o tratamento <b>discriminado</b> que a caracteriza."],
  ["Redução de despesa serve como compensação da renúncia?","<b>Não.</b> A compensação do art. 14, II, é <b>apenas</b> por <b>aumento de receita</b> de natureza tributária."],
  ["Quando entra em vigor o benefício compensado pelo art. 14, II (§ 2º)?","Só entrará em vigor <b>quando implementadas as medidas de compensação</b>."],
  ["A quais impostos não se aplicam as regras de renúncia (art. 14, § 3º, I)?","Às alterações de <b>alíquotas</b> do <b>II, IE, IPI e IOF</b> — os impostos extrafiscais do art. 153, § 1º, da CF."],
  ["Qual a outra exceção do art. 14, § 3º?","O <b>cancelamento de débito cujo montante seja inferior ao dos respectivos custos de cobrança</b>."],
  ["O que é transferência voluntária (art. 25)?","A <b>entrega de recursos correntes ou de capital a outro ente da Federação</b>, a título de <b>cooperação, auxílio ou assistência financeira</b>, que <b>não decorra de determinação constitucional, legal</b> ou dos destinados ao <b>SUS</b>."],
  ["O que fica de fora do conceito de transferência voluntária?","O que decorre de <b>determinação constitucional</b>, de <b>determinação legal</b> e os recursos <b>destinados ao SUS</b>."],
  ["Quais as exigências para realizar transferência voluntária (art. 25, § 1º)?","<b>Existência de dotação específica</b>; <b>proibição de destiná-la a despesas com pessoal</b>; <b>comprovação de regularidade</b> do beneficiário; e <b>comprovação do cumprimento de limites</b>, com <b>previsão orçamentária de contrapartida</b>."],
  ["O que o beneficiário precisa comprovar estar em dia (art. 25, § 1º, IV, a)?","<b>Tributos</b>, <b>empréstimos e financiamentos</b> devidos ao ente transferidor e <b>prestação de contas</b> de recursos anteriormente recebidos."],
  ["Que limites o beneficiário deve comprovar observar?","Os <b>constitucionais de educação e saúde</b>, os das <b>dívidas consolidada e mobiliária</b>, os de <b>operações de crédito</b> (inclusive por antecipação de receita), os de <b>inscrição em Restos a Pagar</b> e os de <b>despesa total com pessoal</b>."],
  ["Transferência voluntária pode pagar despesa com pessoal?","<b>Não.</b> É vedação expressa do art. 25, § 1º, II."],
  ["O que veda o art. 25, § 2º?","A <b>utilização de recursos transferidos em finalidade diversa da pactuada</b>."],
  ["Qual a regra protetiva do art. 25, § 3º?","As ações de <b>Educação, Saúde e Assistência social</b> <b>não se submetem</b> à suspensão de transferências voluntárias."],
  ["ESA × educação, saúde e segurança — não confunda","<b>Art. 25, § 3º</b> (transferências voluntárias): <b>Educação, Saúde e Assistência social</b>. <b>Art. 22, p.ú., IV</b> (contratação no limite prudencial): <b>educação, saúde e segurança</b>."],
  ["O que exige o art. 26 para destinar recursos ao setor privado?","<b>Autorização por lei específica</b>, <b>atendimento às condições da LDO</b> e <b>previsão no orçamento ou em seus créditos adicionais</b>."],
  ["O que abrange a destinação de recursos do art. 26?","<b>Empréstimos</b>, <b>financiamentos e refinanciamentos</b> (inclusive prorrogações), <b>composição de dívidas</b>, <b>concessão de subvenções</b> e <b>participação em constituição ou aumento de capital</b>."],
  ["Quem está dispensado dos requisitos do art. 26 (§ 1º)?","As <b>instituições financeiras</b> e o <b>Banco Central</b>, no exercício de suas <b>atribuições precípuas</b>."],
  ["Qual a regra do art. 27 sobre concessão de crédito?","Na concessão de crédito a pessoa <b>não controlada</b> pelo ente, os <b>encargos financeiros, comissões e despesas congêneres não serão inferiores</b> aos definidos em lei ou ao <b>custo de captação</b>."],
  ["E se o ente quiser conceder crédito abaixo do custo de captação?","Depende de <b>autorização em lei específica</b>, e o <b>subsídio correspondente</b> será consignado na lei orçamentária (art. 27, parágrafo único)."],
  ["O que veda o art. 28?","A <b>utilização de recursos públicos</b>, inclusive de operações de crédito, para <b>socorrer instituições do Sistema Financeiro Nacional</b> — <b>salvo mediante lei específica</b>."],
  ["A quem cabe a prevenção de insolvência no SFN (art. 28, § 1º)?","A <b>fundos e outros mecanismos constituídos pelas próprias instituições</b> do Sistema Financeiro Nacional, na forma da lei — como o <b>FGC</b>."],
  ["O art. 28 impede o Banco Central de socorrer bancos?","<b>Não</b> nas operações de <b>redesconto</b> e nos <b>empréstimos de prazo inferior a 360 dias</b> (art. 28, § 2º)."],
  ["Renúncia de receita e DOCC — a simetria","Ambas exigem <b>estimativa de impacto no exercício e nos dois seguintes</b> e <b>compensação</b>. A diferença: na <b>renúncia</b> (art. 14) a compensação é só por <b>aumento de receita</b>; na <b>DOCC</b> (art. 17) pode ser por <b>aumento de receita ou redução permanente de despesa</b>."]
];

var QS = [
  ["Constituem requisitos essenciais da responsabilidade na gestão fiscal a instituição, previsão e efetiva arrecadação de todos os tributos da competência constitucional do ente da Federação.","C","CESPE","Art. 11, caput — literalidade muito cobrada."],
  ["O art. 11 da LRF exige apenas a instituição e a previsão dos tributos de competência do ente.","E","FCC","Exige também a <b>efetiva arrecadação</b>."],
  ["É vedada a realização de transferências voluntárias para o ente que não institua, preveja e arrecade efetivamente os impostos de sua competência.","C","FGV","Art. 11, parágrafo único — a vedação restringe-se aos <b>impostos</b>."],
  ["A vedação de transferências voluntárias do art. 11, parágrafo único, alcança a não arrecadação de taxas e contribuições de competência do ente.","E","CESPE","O parágrafo único refere-se expressamente aos <b>impostos</b>."],
  ["O ente que descumpre o art. 11 fica impedido de receber quaisquer transferências voluntárias, inclusive as destinadas à saúde.","E","VUNESP","As ações de educação, saúde e assistência social não se submetem à suspensão (art. 25, § 3º)."],
  ["As previsões de receita observarão as normas técnicas e legais e considerarão os efeitos das alterações na legislação, da variação do índice de preços e do crescimento econômico.","C","FCC","Art. 12, caput."],
  ["As previsões de receita serão acompanhadas de demonstrativo de sua evolução nos últimos três anos e da projeção para os dois seguintes.","C","CESPE","Três para trás, dois para frente."],
  ["As previsões de receita serão acompanhadas de demonstrativo de sua evolução nos últimos dois anos e da projeção para os três seguintes.","E","FGV","Está invertido: <b>três anos</b> de evolução e <b>dois</b> de projeção."],
  ["As previsões de receita serão acompanhadas da metodologia de cálculo e das premissas utilizadas.","C","FCC","Parte final do art. 12."],
  ["As receitas previstas serão desdobradas, pelo Poder Executivo, em metas bimestrais de arrecadação.","C","CESPE","Art. 13, no prazo do art. 8º — trinta dias após a publicação dos orçamentos."],
  ["O desdobramento das receitas em metas de arrecadação é quadrimestral.","E","VUNESP","É <b>bimestral</b> (art. 13)."],
  ["No desdobramento das receitas em metas bimestrais, especificam-se em separado as medidas de combate à evasão e à sonegação.","C","FCC","Art. 13 — junto com as ações de cobrança da dívida ativa e os créditos passíveis de cobrança administrativa."],
  ["A concessão ou ampliação de incentivo ou benefício de natureza tributária da qual decorra renúncia de receita deverá estar acompanhada de estimativa do impacto orçamentário-financeiro no exercício em que deva iniciar sua vigência e nos dois seguintes.","C","CESPE","Art. 14, caput."],
  ["A renúncia de receita deve atender cumulativamente às duas condições dos incisos I e II do art. 14.","E","FGV","Deve atender a <b>pelo menos uma</b> delas."],
  ["A renúncia de receita deve atender ao disposto na lei de diretrizes orçamentárias.","C","FCC","Exigência do caput, ao lado da estimativa de impacto."],
  ["Satisfaz o art. 14 a demonstração de que a renúncia foi considerada na estimativa de receita da lei orçamentária e de que não afetará as metas de resultados fiscais.","C","CESPE","Art. 14, I — primeira condição alternativa."],
  ["As medidas de compensação da renúncia de receita podem consistir em redução permanente de despesa.","E","VUNESP","O art. 14, II, admite apenas o <b>aumento de receita</b> de natureza tributária. A redução de despesa compensa a DOCC do art. 17, não a renúncia."],
  ["Configura medida de compensação da renúncia de receita o aumento proveniente da elevação de alíquotas, ampliação da base de cálculo, majoração ou criação de tributo ou contribuição.","C","FCC","Art. 14, II."],
  ["A anistia e a remissão compreendem-se no conceito de renúncia de receita.","C","FGV","Art. 14, § 1º — anistia perdoa a multa; remissão perdoa a dívida."],
  ["A concessão de isenção em caráter geral configura renúncia de receita para fins do art. 14 da LRF.","E","CESPE","Apenas a isenção em caráter <b>não geral</b>, por ser tratamento discriminado."],
  ["O crédito presumido e o subsídio integram o conceito de renúncia de receita.","C","FCC","Art. 14, § 1º."],
  ["Quando a renúncia se apoiar em medidas de compensação, o benefício só entrará em vigor quando implementadas tais medidas.","C","CESPE","Art. 14, § 2º."],
  ["As regras de renúncia de receita aplicam-se às alterações das alíquotas do imposto de importação, do imposto de exportação, do IPI e do IOF.","E","FGV","O art. 14, § 3º, I, excepciona justamente esses quatro impostos extrafiscais."],
  ["Não se aplicam as regras de renúncia de receita ao cancelamento de débito cujo montante seja inferior ao dos respectivos custos de cobrança.","C","VUNESP","Art. 14, § 3º, II."],
  ["Entende-se por transferência voluntária a entrega de recursos correntes ou de capital a outro ente da Federação, a título de cooperação, auxílio ou assistência financeira, que não decorra de determinação constitucional ou legal.","C","CESPE","Art. 25, caput — e tampouco os destinados ao SUS."],
  ["Os recursos destinados ao Sistema Único de Saúde constituem transferência voluntária para os fins da LRF.","E","FCC","São expressamente excluídos do conceito pelo art. 25, caput."],
  ["São exigências para a realização de transferência voluntária a existência de dotação específica e a previsão orçamentária de contrapartida.","C","FGV","Art. 25, § 1º, I e IV, d."],
  ["É permitida a transferência voluntária destinada ao pagamento de despesas com pessoal, desde que haja dotação específica.","E","CESPE","O art. 25, § 1º, II, veda a transferência voluntária para pagamento de despesas com pessoal."],
  ["O beneficiário de transferência voluntária deve comprovar que se acha em dia quanto ao pagamento de tributos, empréstimos e financiamentos devidos ao ente transferidor.","C","VUNESP","Art. 25, § 1º, IV, a — e também quanto à prestação de contas de recursos anteriores."],
  ["O beneficiário de transferência voluntária deve comprovar a observância dos limites das dívidas consolidada e mobiliária e de despesa total com pessoal.","C","FCC","Art. 25, § 1º, IV, c."],
  ["É vedada a utilização dos recursos transferidos em finalidade diversa da pactuada.","C","CESPE","Art. 25, § 2º."],
  ["As ações de educação, saúde e assistência social não se submetem à suspensão de transferências voluntárias.","C","FGV","Art. 25, § 3º — o “ESA”."],
  ["A ressalva do art. 25, § 3º, alcança as ações de educação, saúde e segurança.","E","CESPE","Segurança aparece na ressalva do art. 22, parágrafo único, IV. No art. 25, § 3º, é <b>assistência social</b>."],
  ["A destinação de recursos para cobrir necessidades de pessoas físicas ou déficits de pessoas jurídicas deverá ser autorizada por lei específica, atender às condições da LDO e estar prevista no orçamento ou em seus créditos adicionais.","C","FCC","Art. 26, caput — três requisitos cumulativos."],
  ["Compreende-se na destinação de recursos do art. 26 a concessão de empréstimos, financiamentos e refinanciamentos, a composição de dívidas, as subvenções e a participação em constituição ou aumento de capital.","C","VUNESP","Art. 26, § 2º."],
  ["As instituições financeiras e o Banco Central, no exercício de suas atribuições precípuas, submetem-se integralmente aos requisitos do art. 26.","E","CESPE","O art. 26, § 1º, as dispensa no exercício das atribuições precípuas."],
  ["Na concessão de crédito por ente da Federação a pessoa que não esteja sob seu controle, os encargos financeiros não serão inferiores aos definidos em lei ou ao custo de captação.","C","FGV","Art. 27, caput — evita que o ente empreste com prejuízo."],
  ["A concessão de empréstimo em desacordo com o art. 27 depende de autorização em lei específica, com o subsídio correspondente consignado na lei orçamentária.","C","FCC","Art. 27, parágrafo único."],
  ["Salvo mediante lei específica, não poderão ser utilizados recursos públicos para socorrer instituições do Sistema Financeiro Nacional.","C","CESPE","Art. 28, caput — inclusive recursos de operações de crédito."],
  ["A vedação do art. 28 impede o Banco Central de conceder às instituições financeiras operações de redesconto e empréstimos de prazo inferior a trezentos e sessenta dias.","E","VUNESP","O art. 28, § 2º, ressalva expressamente essas operações."],
  ["A prevenção de insolvência e outros riscos no Sistema Financeiro Nacional ficará a cargo de fundos constituídos pelas próprias instituições.","C","FCC","Art. 28, § 1º — é o caso do Fundo Garantidor de Créditos."]
];

var FEY = {
  U1:{ask:"Explique os requisitos da responsabilidade na gestão fiscal quanto à receita pública.",
    hint:"Art. 11 com sua sanção e a ressalva do ESA; art. 12 com os efeitos e os números 3 e 2; art. 13 com as metas bimestrais.",
    ref:"Nos termos do art. 11 da Lei de Responsabilidade Fiscal, constituem requisitos essenciais da responsabilidade na gestão fiscal a instituição, previsão e efetiva arrecadação de todos os tributos da competência constitucional do ente da Federação, sendo vedada a realização de transferências voluntárias para o ente que não observe essa determinação no que se refere aos impostos — ressalvadas, contudo, as transferências relativas a ações de educação, saúde e assistência social, que não se submetem a essa suspensão por força do art. 25, § 3º. O art. 12 dispõe que as previsões de receita observarão as normas técnicas e legais, considerarão os efeitos das alterações na legislação, da variação do índice de preços, do crescimento econômico ou de qualquer outro fator relevante, e serão acompanhadas de demonstrativo de sua evolução nos últimos três anos, da projeção para os dois seguintes àquele a que se referirem e da metodologia de cálculo e premissas utilizadas. Por fim, o art. 13 determina que, no prazo previsto no art. 8º, as receitas previstas serão desdobradas, pelo Poder Executivo, em metas bimestrais de arrecadação, com a especificação, em separado, quando cabível, das medidas de combate à evasão e à sonegação, da quantidade e valores de ações ajuizadas para cobrança da dívida ativa e da evolução do montante dos créditos tributários passíveis de cobrança administrativa."},
  U2:{ask:"Explique o regime da renúncia de receita na LRF.",
    hint:"Os três degraus do caput, as duas condições alternativas, o que é renúncia pelo § 1º e as exceções do § 3º.",
    ref:"Segundo o art. 14 da Lei de Responsabilidade Fiscal, a concessão ou ampliação de incentivo ou benefício de natureza tributária da qual decorra renúncia de receita deverá estar acompanhada de estimativa do impacto orçamentário-financeiro no exercício em que deva iniciar sua vigência e nos dois seguintes, atender ao disposto na lei de diretrizes orçamentárias e a pelo menos uma de duas condições: a demonstração, pelo proponente, de que a renúncia foi considerada na estimativa de receita da lei orçamentária, na forma do art. 12, e de que não afetará as metas de resultados fiscais previstas no anexo próprio da lei de diretrizes; ou o acompanhamento de medidas de compensação, no mesmo período, por meio do aumento de receita proveniente da elevação de alíquotas, ampliação da base de cálculo, majoração ou criação de tributo ou contribuição. Note-se que as condições são alternativas, mas a estimativa de impacto e a observância da lei de diretrizes são sempre exigidas, e que a redução de despesa não serve como compensação da renúncia. A renúncia compreende anistia, remissão, subsídio, crédito presumido, concessão de isenção em caráter não geral, alteração de alíquota ou modificação de base de cálculo que impliquem redução discriminada de tributos e outros benefícios que correspondam a tratamento diferenciado. Quando o ato se apoiar em medidas de compensação, o benefício só entrará em vigor quando implementadas tais medidas. Por fim, o artigo não se aplica às alterações das alíquotas do imposto de importação, do imposto de exportação, do imposto sobre produtos industrializados e do imposto sobre operações financeiras, nem ao cancelamento de débito cujo montante seja inferior ao dos respectivos custos de cobrança."},
  U3:{ask:"Explique as transferências voluntárias: conceito e exigências.",
    hint:"O conceito com as três exclusões, as quatro exigências do § 1º e as duas regras dos §§ 2º e 3º.",
    ref:"Para efeito da Lei de Responsabilidade Fiscal, entende-se por transferência voluntária a entrega de recursos correntes ou de capital a outro ente da Federação, a título de cooperação, auxílio ou assistência financeira, que não decorra de determinação constitucional, legal ou dos destinados ao Sistema Único de Saúde, conforme o art. 25. São exigências para sua realização, além do disposto na lei de diretrizes orçamentárias, a existência de dotação específica; a proibição de sua destinação ao pagamento de despesas com pessoal; a comprovação, por parte do beneficiário, de que se acha em dia quanto ao pagamento de tributos, empréstimos e financiamentos devidos ao ente transferidor e quanto à prestação de contas de recursos anteriormente recebidos; e a comprovação do cumprimento dos limites constitucionais relativos à educação e à saúde, da observância dos limites das dívidas consolidada e mobiliária, das operações de crédito, inclusive por antecipação de receita, da inscrição em Restos a Pagar e da despesa total com pessoal, bem como a previsão orçamentária de contrapartida. É vedada a utilização dos recursos transferidos em finalidade diversa da pactuada, e as ações de educação, saúde e assistência social não se submetem à suspensão de transferências voluntárias — ressalva que não se confunde com a do art. 22, parágrafo único, IV, relativa à contratação de pessoal, em que figuram educação, saúde e segurança."},
  U4:{ask:"Explique a destinação de recursos públicos para o setor privado e o socorro a instituições financeiras.",
    hint:"Os três requisitos do art. 26 e o que ele abrange; o custo de captação do art. 27; e a vedação do art. 28 com suas duas ressalvas.",
    ref:"O art. 26 da Lei de Responsabilidade Fiscal dispõe que a destinação de recursos para, direta ou indiretamente, cobrir necessidades de pessoas físicas ou déficits de pessoas jurídicas deverá ser autorizada por lei específica, atender às condições estabelecidas na lei de diretrizes orçamentárias e estar prevista no orçamento ou em seus créditos adicionais, compreendendo a concessão de empréstimos, financiamentos e refinanciamentos, inclusive suas prorrogações, a composição de dívidas, a concessão de subvenções e a participação em constituição ou aumento de capital; as instituições financeiras e o Banco Central, no exercício de suas atribuições precípuas, ficam dispensados desses requisitos. O art. 27 estabelece que, na concessão de crédito por ente da Federação a pessoa física ou jurídica que não esteja sob seu controle direto ou indireto, os encargos financeiros, comissões e despesas congêneres não serão inferiores aos definidos em lei ou ao custo de captação, dependendo de autorização em lei específica a concessão em desacordo com essa regra, com o subsídio correspondente consignado na lei orçamentária. Por fim, o art. 28 veda, salvo mediante lei específica, a utilização de recursos públicos, inclusive de operações de crédito, para socorrer instituições do Sistema Financeiro Nacional, ainda que mediante empréstimos de recuperação ou financiamentos para mudança de controle acionário, ficando a prevenção de insolvência a cargo de fundos constituídos pelas próprias instituições; a vedação não impede o Banco Central de conceder operações de redesconto e empréstimos de prazo inferior a trezentos e sessenta dias."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Art. 11 — instituir, prever e arrecadar",
      '<div class="box"><span class="bl">Caput</span><p>Constituem requisitos essenciais da responsabilidade na gestão fiscal a <b>instituição, previsão e efetiva arrecadação</b> de <b>todos os tributos</b> da competência constitucional do ente da Federação.</p></div>'+
      '<div class="box tip"><span class="bl">São três verbos, não dois</span><p><b>Instituir</b> (criar por lei) · <b>prever</b> (estimar no orçamento) · <b>arrecadar efetivamente</b>. Item que suprima a arrecadação é falso.</p></div>'+
      '<div class="box trap"><span class="bl">Parágrafo único — a sanção</span>'+
      '<p>É <b>vedada a realização de transferências voluntárias</b> para o ente que não observe o caput, <b>no que se refere aos impostos</b>.</p>'+
      '<p>Repare no descompasso proposital: o <b>caput</b> fala em <b>todos os tributos</b>; a <b>sanção</b> alcança só os <b>impostos</b>.</p></div>'+
      '<div class="box tip"><span class="bl">A sanção não é total</span><p>Mesmo sancionado, o ente continua recebendo transferências relativas a <b>Educação, Saúde e Assistência social</b> — o <b>“ESA”</b> do art. 25, § 3º.</p></div>'),
    sl("Art. 12 — previsão de receita",
      '<div class="box"><span class="bl">O que observar e considerar</span>'+
      '<p>As previsões observarão as <b>normas técnicas e legais</b> e considerarão os efeitos:</p>'+
      '<ul><li>Das <b>alterações na legislação</b>;</li>'+
      '<li>Da <b>variação do índice de preços</b> (inflação);</li>'+
      '<li>Do <b>crescimento econômico</b>;</li>'+
      '<li>De <b>qualquer outro fator relevante</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">Do que serão acompanhadas</span>'+
      '<ul><li>Demonstrativo da <b>evolução nos últimos três anos</b>;</li>'+
      '<li><b>Projeção para os dois seguintes</b> àquele a que se referirem;</li>'+
      '<li><b>Metodologia de cálculo e premissas</b> utilizadas.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Os números invertidos</span><p><b>3 para trás</b>, <b>2 para frente</b>. A banca troca a ordem e o item vira falso.</p></div>'),
    sl("Art. 13 — metas bimestrais de arrecadação",
      '<div class="box"><span class="bl">O comando</span><p>No prazo do <b>art. 8º</b> — até <b>trinta dias após a publicação dos orçamentos</b> —, as receitas previstas serão <b>desdobradas pelo Poder Executivo em metas bimestrais de arrecadação</b>.</p></div>'+
      '<div class="box tip"><span class="bl">O que se especifica em separado</span>'+
      '<ul><li>As <b>medidas de combate à evasão e à sonegação</b>;</li>'+
      '<li>A <b>quantidade e os valores de ações ajuizadas</b> para cobrança da dívida ativa;</li>'+
      '<li>A <b>evolução do montante dos créditos tributários passíveis de cobrança administrativa</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Bimestral, não quadrimestral</span><p>As <b>metas de arrecadação</b> são <b>bimestrais</b> (art. 13), assim como o gatilho da limitação de empenho (art. 9º). O que é <b>quadrimestral</b> é a <b>avaliação das metas fiscais</b> em audiência pública e a <b>verificação dos limites de pessoal</b>.</p></div>')
  ],
  V2:[
    sl("Art. 14 — renúncia de receita",
      '<div class="box"><span class="bl">O caput em três degraus</span>'+
      '<p>A concessão ou ampliação de incentivo ou benefício de natureza tributária da qual decorra renúncia de receita <b>deverá</b>:</p>'+
      '<ul><li>Estar acompanhada de <b>estimativa do impacto orçamentário-financeiro</b> no exercício em que deva <b>iniciar sua vigência</b> e nos <b>dois seguintes</b>;</li>'+
      '<li><b>Atender ao disposto na LDO</b>;</li>'+
      '<li>Atender a <b>pelo menos uma</b> das condições dos incisos I e II.</li></ul></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Inciso I — já estava no cálculo</span><span class="cd">Demonstração de que a renúncia <b>foi considerada na estimativa de receita da LOA</b> e <b>não afetará as metas</b> do Anexo de Metas Fiscais.</span></div>'+
      '<div class="chip"><span class="cn">Inciso II — compensa-se</span><span class="cd"><b>Medidas de compensação</b> por <b>aumento de receita</b>: elevação de alíquotas, ampliação da base de cálculo, majoração ou criação de tributo.</span></div></div>'+
      '<div class="box trap"><span class="bl">Duas armadilhas</span>'+
      '<ul><li>Dizer que os incisos são <b>cumulativos</b>. São <b>alternativos</b> — mas a estimativa e a LDO são sempre exigidas.</li>'+
      '<li>Admitir <b>redução de despesa</b> como compensação. Aqui <b>não vale</b> — só aumento de receita tributária.</li></ul></div>'),
    sl("O que é renúncia de receita (§ 1º)",
      '<div class="box"><span class="bl">A lista</span>'+
      '<ul><li><b>Anistia</b> — perdão da <b>multa</b>;</li>'+
      '<li><b>Remissão</b> — perdão da <b>dívida</b>;</li>'+
      '<li><b>Subsídio</b> — concessão de recursos para estimular a economia;</li>'+
      '<li><b>Crédito presumido</b> — redução de carga na forma de crédito do tributo;</li>'+
      '<li><b>Isenção em caráter não geral</b>;</li>'+
      '<li><b>Alteração de alíquota</b> ou <b>modificação de base de cálculo</b> que impliquem <b>redução discriminada</b> de tributos;</li>'+
      '<li><b>Outros benefícios</b> que correspondam a <b>tratamento diferenciado</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Não confunda</span>'+
      '<ul><li><b>Isenção em caráter NÃO geral</b> → <b>é</b> renúncia de receita;</li>'+
      '<li><b>Isenção em caráter geral</b> → <b>não é</b> renúncia de receita.</li></ul>'+
      '<p>O fio condutor da lista inteira é o <b>tratamento discriminado</b>.</p></div>'),
    sl("As exceções e o momento da vigência",
      '<div class="box"><span class="bl">§ 2º — quando o benefício entra em vigor</span><p>Se o ato se apoiar nas <b>medidas de compensação</b> do inciso II, o benefício <b>só entrará em vigor quando implementadas tais medidas</b>.</p></div>'+
      '<div class="box"><span class="bl">§ 3º — a que não se aplica</span>'+
      '<ul><li>Às <b>alterações das alíquotas</b> do <b>II</b>, do <b>IE</b>, do <b>IPI</b> e do <b>IOF</b> — os extrafiscais do art. 153, § 1º, da CF;</li>'+
      '<li>Ao <b>cancelamento de débito</b> cujo montante seja <b>inferior ao dos respectivos custos de cobrança</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Renúncia × DOCC — a simetria que ajuda</span>'+
      '<ul><li>Ambas exigem <b>estimativa de impacto</b> no exercício <b>e nos dois seguintes</b>;</li>'+
      '<li>Ambas exigem <b>compensação</b>;</li>'+
      '<li><b>Renúncia (art. 14):</b> compensa-se só com <b>aumento de receita</b>;</li>'+
      '<li><b>DOCC (art. 17):</b> compensa-se com <b>aumento de receita OU redução permanente de despesa</b>.</li></ul></div>')
  ],
  V3:[
    sl("Art. 25 — transferências voluntárias",
      '<div class="box"><span class="bl">O conceito</span>'+
      '<p><b>Entrega de recursos correntes ou de capital a outro ente da Federação</b>, a título de <b>cooperação, auxílio ou assistência financeira</b>, que <b>não decorra</b> de:</p>'+
      '<ul><li><b>Determinação constitucional</b>;</li><li><b>Determinação legal</b>;</li>'+
      '<li>Nem seja dos <b>destinados ao SUS</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">A lógica do conceito</span><p>É <b>voluntária</b> justamente porque o ente <b>não era obrigado</b> a transferir. O que a Constituição ou a lei mandam repassar, e o que vai para o SUS, é <b>obrigatório</b> — e fica fora.</p></div>'+
      '<div class="box"><span class="bl">§ 1º — as quatro exigências</span>'+
      '<ul><li><b>I</b> — existência de <b>dotação específica</b>;</li>'+
      '<li><b>II</b> — <b>vedação</b> de destiná-la ao pagamento de <b>despesas com pessoal</b>;</li>'+
      '<li><b>III</b> — comprovação de que o beneficiário está <b>em dia</b> com <b>tributos</b>, <b>empréstimos e financiamentos</b> devidos ao ente transferidor e com a <b>prestação de contas</b> de recursos anteriores;</li>'+
      '<li><b>IV</b> — comprovação do cumprimento dos <b>limites constitucionais de educação e saúde</b>, dos limites de <b>dívidas</b>, de <b>operações de crédito</b>, de <b>Restos a Pagar</b> e de <b>despesa total com pessoal</b>, além da <b>previsão orçamentária de contrapartida</b>.</li></ul></div>'),
    sl("Os dois parágrafos que decidem questão",
      '<div class="box"><span class="bl">§ 2º</span><p>É <b>vedada a utilização dos recursos transferidos em finalidade diversa da pactuada</b>.</p></div>'+
      '<div class="box"><span class="bl">§ 3º — o “ESA”</span><p>As ações de <b>Educação, Saúde e Assistência social</b> <b>não se submetem</b> à suspensão de transferências voluntárias.</p></div>'+
      '<div class="box trap"><span class="bl">Não confunda as duas ressalvas</span>'+
      '<ul><li><b>Art. 25, § 3º</b> — transferências voluntárias mantidas: <b>Educação · Saúde · Assistência social</b>;</li>'+
      '<li><b>Art. 22, p.ú., IV</b> — reposição de pessoal no limite prudencial: <b>educação · saúde · segurança</b>.</li></ul>'+
      '<p>Duas listas de três, com <b>dois itens iguais</b> e um diferente. A banca vive trocando o terceiro.</p></div>'),
    sl("Arts. 26 a 28 — o setor privado",
      '<div class="box"><span class="bl">Art. 26 — três requisitos cumulativos</span>'+
      '<p>Destinar recursos para cobrir <b>necessidades de pessoas físicas</b> ou <b>déficits de pessoas jurídicas</b> exige:</p>'+
      '<ul><li><b>Autorização por lei específica</b>;</li>'+
      '<li><b>Atender às condições da LDO</b>;</li>'+
      '<li><b>Estar prevista no orçamento</b> ou em seus créditos adicionais.</li></ul>'+
      '<p>Abrange <b>empréstimos</b>, <b>financiamentos e refinanciamentos</b> (com prorrogações), <b>composição de dívidas</b>, <b>subvenções</b> e <b>participação em constituição ou aumento de capital</b>.</p></div>'+
      '<div class="box tip"><span class="bl">§ 1º — quem está fora</span><p>As <b>instituições financeiras</b> e o <b>Banco Central</b>, no exercício de suas <b>atribuições precípuas</b>.</p></div>'+
      '<div class="box"><span class="bl">Art. 27 — custo de captação</span><p>Na concessão de crédito a quem <b>não esteja sob seu controle</b>, os <b>encargos, comissões e despesas congêneres não serão inferiores</b> aos definidos em lei ou ao <b>custo de captação</b>. Emprestar mais barato depende de <b>lei específica</b>, com o <b>subsídio consignado na LOA</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Art. 28 — socorro a bancos</span>'+
      '<p><b>Salvo mediante lei específica</b>, não se usam recursos públicos — inclusive de operações de crédito — para <b>socorrer instituições do SFN</b>.</p>'+
      '<ul><li><b>§ 1º</b> — a prevenção de insolvência cabe a <b>fundos constituídos pelas próprias instituições</b> (ex.: FGC);</li>'+
      '<li><b>§ 2º</b> — a vedação <b>não impede</b> o Banco Central de conceder <b>redesconto</b> e <b>empréstimos de prazo inferior a 360 dias</b>.</li></ul></div>')
  ]
};

var EX = {
S1:{t:"wordbank", instr:"Monte os requisitos essenciais do art. 11",
  target:["instituição",",","previsão","e","efetiva","arrecadação"],
  extra:["fiscalização","lançamento","inscrição"],
  why:"De <b>todos os tributos</b> da competência constitucional do ente."},

S2:{t:"gap", instr:"Complete a frase",
  before:"É vedada a realização de transferências voluntárias para o ente que não observe o art. 11, no que se refere ",
  after:".",
  options:["aos impostos","a todos os tributos","às contribuições"], answer:0,
  why:"O caput fala em todos os tributos; a <b>sanção</b> alcança só os impostos."},

S3:{t:"mc", instr:"O ente sancionado pelo art. 11 continua podendo receber transferências relativas a:",
  options:["Educação, saúde e assistência social","Educação, saúde e segurança",
           "Qualquer finalidade, mediante convênio","Nenhuma finalidade"],
  answer:0,
  why:"Art. 25, § 3º — o “ESA”."},

S4:{t:"multi", instr:"Marque o que as previsões de receita devem considerar (art. 12)",
  options:["Efeitos das alterações na legislação","Variação do índice de preços",
           "Crescimento econômico","Qualquer outro fator relevante",
           "Metas de resultado primário do exercício anterior","Limite de despesa com pessoal"],
  answers:[0,1,2,3],
  why:"São os quatro fatores do caput."},

S5:{t:"sort", instr:"O prazo do art. 12 olha para trás ou para frente?",
  buckets:["Três anos — para trás","Dois anos — para frente"],
  items:[["Demonstrativo da evolução da receita",0],["Projeção da receita",1]],
  why:"Evolução: <b>últimos três anos</b>. Projeção: <b>dois seguintes</b>."},

S6:{t:"gap", instr:"Complete a frase",
  before:"As previsões de receita serão acompanhadas de demonstrativo de sua evolução nos últimos ",
  after:" e da projeção para os dois seguintes.",
  options:["três anos","dois anos","cinco anos"], answer:0,
  why:"Art. 12 — três para trás, dois para frente."},

S7:{t:"mc", instr:"As receitas previstas serão desdobradas pelo Poder Executivo em metas:",
  options:["Bimestrais de arrecadação","Quadrimestrais de arrecadação",
           "Mensais de desembolso","Anuais de resultado primário"],
  answer:0,
  why:"Art. 13, no prazo do art. 8º."},

S8:{t:"multi", instr:"Marque o que se especifica em separado nas metas bimestrais (art. 13)",
  options:["Medidas de combate à evasão e à sonegação",
           "Quantidade e valores de ações ajuizadas para cobrança da dívida ativa",
           "Evolução do montante dos créditos tributários passíveis de cobrança administrativa",
           "Cronograma de execução mensal de desembolso",
           "Anexo de Riscos Fiscais"],
  answers:[0,1,2],
  why:"Os dois últimos pertencem aos arts. 8º e 4º, § 3º."},

S9:{t:"sort", instr:"A periodicidade é bimestral ou quadrimestral?",
  buckets:["Bimestral","Quadrimestral"],
  items:[["Metas de arrecadação do art. 13",0],
         ["Verificação do risco às metas para limitar empenho (art. 9º)",0],
         ["Avaliação das metas fiscais em audiência pública (art. 9º, § 4º)",1],
         ["Verificação dos limites de despesa com pessoal (art. 22)",1]],
  why:"Arrecadação e limitação de empenho são bimestrais; avaliação e limites de pessoal, quadrimestrais."},

S10:{t:"multi", instr:"Marque as exigências do caput do art. 14 para a renúncia de receita",
  options:["Estimativa do impacto orçamentário-financeiro no exercício de início da vigência",
           "Estimativa para os dois exercícios seguintes",
           "Atender ao disposto na lei de diretrizes orçamentárias",
           "Atender a pelo menos uma das condições dos incisos I e II",
           "Atender cumulativamente às duas condições",
           "Autorização prévia do Tribunal de Contas"],
  answers:[0,1,2,3],
  why:"As condições são <b>alternativas</b>, não cumulativas."},

S11:{t:"match", instr:"Correlacione o inciso do art. 14 ao seu conteúdo",
  pairs:[["Inciso I","A renúncia já foi considerada na estimativa de receita da LOA"],
         ["Inciso II","Medidas de compensação por aumento de receita tributária"]]},

S12:{t:"multi", instr:"Marque o que configura medida de compensação da renúncia (art. 14, II)",
  options:["Elevação de alíquotas","Ampliação da base de cálculo",
           "Majoração de tributo ou contribuição","Criação de tributo ou contribuição",
           "Redução permanente de despesa","Alienação de ativos","Excesso de arrecadação"],
  answers:[0,1,2,3],
  why:"Só <b>aumento de receita</b> de natureza tributária. A redução de despesa compensa a DOCC, não a renúncia."},

S13:{t:"match", instr:"Correlacione o instituto ao que ele perdoa",
  pairs:[["Anistia","A multa"],["Remissão","A dívida"],
         ["Crédito presumido","Reduz a carga na forma de crédito do tributo"],
         ["Subsídio","Recursos concedidos para estimular a economia"]]},

S14:{t:"sort", instr:"É renúncia de receita para o art. 14?",
  buckets:["É renúncia","Não é renúncia"],
  items:[["Isenção em caráter não geral",0],["Anistia",0],["Remissão",0],
         ["Crédito presumido",0],["Alteração de alíquota com redução discriminada",0],
         ["Isenção em caráter geral",1],["Alteração da alíquota do IOF",1],
         ["Cancelamento de débito inferior ao custo de cobrança",1]],
  why:"O fio condutor é o <b>tratamento discriminado</b> — e os §§ 3º trazem duas exceções expressas."},

S15:{t:"gap", instr:"Complete a frase",
  before:"A isenção em caráter ", after:" configura renúncia de receita.",
  options:["não geral","geral","irrestrito"], answer:0,
  why:"A isenção geral não discrimina — por isso fica fora."},

S16:{t:"multi", instr:"Marque os impostos cujas alterações de alíquota escapam às regras de renúncia",
  options:["Imposto de Importação","Imposto de Exportação",
           "Imposto sobre Produtos Industrializados","Imposto sobre Operações Financeiras",
           "Imposto de Renda","ITR"],
  answers:[0,1,2,3],
  why:"São os quatro extrafiscais do art. 153, § 1º, da CF."},

S17:{t:"mc", instr:"Quando o benefício apoiado em medidas de compensação entra em vigor?",
  options:["Quando implementadas as medidas de compensação",
           "Na data de publicação da lei que o concedeu",
           "No exercício seguinte ao da concessão",
           "Imediatamente, se previsto na LDO"],
  answer:0,
  why:"Art. 14, § 2º."},

S18:{t:"wordbank", instr:"Monte o conceito de transferência voluntária",
  target:["entrega","de","recursos","a","outro","ente","da","Federação"],
  extra:["obrigatória","constitucional","ao","SUS"],
  why:"A título de cooperação, auxílio ou assistência financeira."},

S19:{t:"multi", instr:"Marque o que NÃO é transferência voluntária",
  options:["O que decorre de determinação constitucional",
           "O que decorre de determinação legal",
           "Os recursos destinados ao Sistema Único de Saúde",
           "Auxílio financeiro a Município para obra de saneamento",
           "Cooperação financeira com outro Estado, sem obrigação legal"],
  answers:[0,1,2],
  why:"São as três exclusões do art. 25, caput."},

S20:{t:"multi", instr:"Marque as exigências para realizar transferência voluntária (art. 25, § 1º)",
  options:["Existência de dotação específica",
           "Vedação de destiná-la a despesas com pessoal",
           "Beneficiário em dia com tributos devidos ao ente transferidor",
           "Beneficiário em dia com a prestação de contas de recursos anteriores",
           "Observância dos limites de dívida e de despesa com pessoal",
           "Previsão orçamentária de contrapartida",
           "Autorização do Senado Federal"],
  answers:[0,1,2,3,4,5],
  why:"O Senado autoriza operações de crédito, não transferências voluntárias."},

S21:{t:"mc", instr:"Transferência voluntária pode custear despesas com pessoal?",
  options:["Não — é vedação expressa do art. 25, § 1º, II",
           "Sim, se houver dotação específica",
           "Sim, se autorizada na LDO",
           "Sim, nas áreas de educação e saúde"],
  answer:0,
  why:"A vedação é absoluta."},

S22:{t:"match", instr:"Correlacione o dispositivo à sua lista de três áreas",
  pairs:[["Art. 25, § 3º — transferências voluntárias","Educação, saúde e assistência social"],
         ["Art. 22, p.ú., IV — reposição de pessoal","Educação, saúde e segurança"]]},

S23:{t:"gap", instr:"Complete a frase",
  before:"É vedada a utilização dos recursos transferidos em ", after:".",
  options:["finalidade diversa da pactuada","exercício diverso do ingresso",
           "despesas de capital"], answer:0,
  why:"Art. 25, § 2º."},

S24:{t:"multi", instr:"Marque os requisitos do art. 26 para destinar recursos ao setor privado",
  options:["Autorização por lei específica",
           "Atendimento às condições estabelecidas na LDO",
           "Previsão no orçamento ou em seus créditos adicionais",
           "Licitação prévia","Parecer do controle interno"],
  answers:[0,1,2],
  why:"Três requisitos cumulativos."},

S25:{t:"multi", instr:"Marque o que se compreende na destinação de recursos do art. 26",
  options:["Concessão de empréstimos","Financiamentos e refinanciamentos, inclusive prorrogações",
           "Composição de dívidas","Concessão de subvenções",
           "Participação em constituição ou aumento de capital",
           "Pagamento de precatórios","Transferências ao SUS"],
  answers:[0,1,2,3,4],
  why:"Art. 26, § 2º."},

S26:{t:"mc", instr:"Quem está dispensado dos requisitos do art. 26 no exercício de suas atribuições precípuas?",
  options:["As instituições financeiras e o Banco Central","Os Tribunais de Contas",
           "As empresas estatais dependentes","Os fundos previdenciários"],
  answer:0,
  why:"Art. 26, § 1º."},

S27:{t:"gap", instr:"Complete a frase",
  before:"Na concessão de crédito a quem não esteja sob seu controle, os encargos financeiros não serão inferiores aos definidos em lei ou ",
  after:".",
  options:["ao custo de captação","à taxa Selic","ao índice de preços da LDO"],
  answer:0,
  why:"Art. 27 — evita que o ente empreste com prejuízo."},

S28:{t:"mc", instr:"Conceder empréstimo abaixo do custo de captação depende de:",
  options:["Autorização em lei específica, com o subsídio consignado na LOA",
           "Simples decreto do Executivo","Autorização do Banco Central",
           "Previsão no plano plurianual"],
  answer:0,
  why:"Art. 27, parágrafo único."},

S29:{t:"multi", instr:"Marque o que é correto sobre o art. 28",
  options:["Veda o uso de recursos públicos para socorrer instituições do SFN",
           "A vedação alcança recursos de operações de crédito",
           "A vedação cede mediante lei específica",
           "Não impede o BACEN de conceder redesconto",
           "Não impede empréstimos do BACEN de prazo inferior a 360 dias",
           "Proíbe qualquer atuação do BACEN junto às instituições financeiras"],
  answers:[0,1,2,3,4],
  why:"Os §§ 1º e 2º preservam os fundos das próprias instituições e as operações típicas do BACEN."},

S30:{t:"gap", instr:"Complete a frase",
  before:"A vedação do art. 28 não impede o Banco Central de conceder redesconto e empréstimos de prazo inferior a ",
  after:".",
  options:["trezentos e sessenta dias","noventa dias","cento e oitenta dias"],
  answer:0,
  why:"Art. 28, § 2º."},

S31:{t:"sort", instr:"Qual compensação a lei admite?",
  buckets:["Renúncia de receita (art. 14)","DOCC (art. 17)"],
  items:[["Aumento permanente de receita tributária",0],
         ["Aumento permanente de receita tributária ",1],
         ["Redução permanente de despesa",1]],
  why:"A <b>renúncia</b> só admite aumento de receita; a <b>DOCC</b> admite as duas vias."},

S32:{t:"order", instr:"Ordene o caminho de uma renúncia de receita regular",
  items:["Elaborar a estimativa de impacto do exercício e dos dois seguintes",
         "Verificar a conformidade com a LDO",
         "Atender ao inciso I ou apresentar as medidas de compensação do inciso II",
         "Implementar as medidas de compensação, se for o caso",
         "Entrada em vigor do benefício"],
  why:"O § 2º condiciona a vigência à implementação das medidas."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var KIT = {
  U1:{tema:"Previsão e arrecadação da receita",
    bases:["LC nº 101/2000, arts. 11, 12 e 13",
           "LC nº 101/2000, art. 25, § 3º — ressalva do ESA",
           "CF/1988, art. 145 — competência tributária",
           "Lei nº 4.320/1964, art. 30 — previsão de receita"],
    ouro:["instituição, previsão e efetiva arrecadação","todos os tributos da competência constitucional",
          "vedada a realização de transferências voluntárias","no que se refere aos impostos",
          "normas técnicas e legais","variação do índice de preços","crescimento econômico",
          "evolução nos últimos três anos","projeção para os dois seguintes",
          "metodologia de cálculo e premissas","metas bimestrais de arrecadação",
          "combate à evasão e à sonegação","créditos tributários passíveis de cobrança administrativa"],
    abertura:"Nos termos do art. 11 da Lei de Responsabilidade Fiscal, constituem requisitos essenciais da responsabilidade na gestão fiscal a instituição, previsão e efetiva arrecadação de todos os tributos da competência constitucional do ente da Federação, sob pena de vedação ao recebimento de transferências voluntárias no que se refere aos impostos.",
    evite:"Não estenda a sanção do parágrafo único a taxas e contribuições, nem inverta os prazos do art. 12: são <b>três anos</b> de evolução e <b>dois</b> de projeção."},
  U2:{tema:"Renúncia de receita",
    bases:["LC nº 101/2000, art. 14, caput e §§ 1º a 3º",
           "CF/1988, art. 153, § 1º — impostos extrafiscais",
           "CF/1988, art. 165, § 6º — demonstrativo de benefícios",
           "CTN, arts. 172 e 180 — remissão e anistia",
           "LC nº 101/2000, art. 4º, § 2º, V — demonstrativo na LDO"],
    ouro:["incentivo ou benefício de natureza tributária","estimativa do impacto orçamentário-financeiro",
          "no exercício em que deva iniciar sua vigência e nos dois seguintes",
          "pelo menos uma das seguintes condições","considerada na estimativa de receita",
          "medidas de compensação","elevação de alíquotas","ampliação da base de cálculo",
          "anistia","remissão","subsídio","crédito presumido","isenção em caráter não geral",
          "tratamento diferenciado"],
    abertura:"A concessão ou ampliação de incentivo ou benefício de natureza tributária da qual decorra renúncia de receita deverá, na forma do art. 14 da Lei de Responsabilidade Fiscal, estar acompanhada de estimativa do impacto orçamentário-financeiro no exercício em que deva iniciar sua vigência e nos dois seguintes, atender ao disposto na lei de diretrizes orçamentárias e a pelo menos uma das condições dos seus incisos I e II.",
    evite:"Não admita a <b>redução de despesa</b> como compensação da renúncia — essa via é da DOCC do art. 17. E não trate os incisos I e II como cumulativos."},
  U3:{tema:"Transferências voluntárias",
    bases:["LC nº 101/2000, art. 25, caput e §§ 1º a 3º",
           "LC nº 101/2000, art. 11, parágrafo único — sanção",
           "LC nº 101/2000, art. 23, § 3º, I — suspensão por excesso de pessoal",
           "CF/1988, art. 160 — vedação à retenção de repasses",
           "CF/1988, arts. 198 e 212 — limites de saúde e educação"],
    ouro:["entrega de recursos correntes ou de capital a outro ente da Federação",
          "cooperação, auxílio ou assistência financeira",
          "não decorra de determinação constitucional, legal ou destinados ao SUS",
          "existência de dotação específica","vedação de destinação a despesas com pessoal",
          "em dia quanto ao pagamento de tributos","prestação de contas de recursos anteriormente recebidos",
          "previsão orçamentária de contrapartida","finalidade diversa da pactuada",
          "educação, saúde e assistência social"],
    abertura:"Entende-se por transferência voluntária, na dicção do art. 25 da Lei de Responsabilidade Fiscal, a entrega de recursos correntes ou de capital a outro ente da Federação, a título de cooperação, auxílio ou assistência financeira, que não decorra de determinação constitucional, legal ou dos destinados ao Sistema Único de Saúde.",
    evite:"Não troque a tríade do art. 25, § 3º — <b>educação, saúde e assistência social</b> — pela do art. 22, parágrafo único, IV, que traz <b>segurança</b> no lugar da assistência social."},
  U4:{tema:"Destinação ao setor privado e socorro a instituições financeiras",
    bases:["LC nº 101/2000, arts. 26, 27 e 28",
           "CF/1988, art. 19, I — vedação de subvenção a cultos",
           "Lei nº 4.320/1964, arts. 12, § 3º, e 16 — subvenções sociais e econômicas",
           "Lei nº 4.595/1964 — Sistema Financeiro Nacional"],
    ouro:["cobrir necessidades de pessoas físicas ou déficits de pessoas jurídicas",
          "autorizada por lei específica","condições estabelecidas na lei de diretrizes orçamentárias",
          "prevista no orçamento ou em seus créditos adicionais",
          "atribuições precípuas","encargos financeiros, comissões e despesas congêneres",
          "não serão inferiores ao custo de captação","socorrer instituições do Sistema Financeiro Nacional",
          "salvo mediante lei específica","redesconto","prazo inferior a trezentos e sessenta dias"],
    abertura:"A destinação de recursos para, direta ou indiretamente, cobrir necessidades de pessoas físicas ou déficits de pessoas jurídicas deverá, nos termos do art. 26 da Lei de Responsabilidade Fiscal, ser autorizada por lei específica, atender às condições estabelecidas na lei de diretrizes orçamentárias e estar prevista no orçamento ou em seus créditos adicionais.",
    evite:"Não afirme que o art. 28 impede toda atuação do Banco Central: o § 2º ressalva o <b>redesconto</b> e os <b>empréstimos de prazo inferior a 360 dias</b>."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. Tema de listas: o espelho confere cada requisito nomeado.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre a receita pública e as transferências na Lei Complementar nº 101/2000, disserte necessariamente sobre:</p>'+
  '<ol><li>os requisitos essenciais da responsabilidade na gestão fiscal quanto à receita e as regras de previsão e desdobramento;</li>'+
  '<li>o regime da renúncia de receita, com suas condições e exceções;</li>'+
  '<li>o conceito e as exigências das transferências voluntárias, bem como a destinação de recursos ao setor privado.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>O <b>art. 11</b> da Lei de Responsabilidade Fiscal erige a <b>instituição, previsão e efetiva arrecadação de todos os tributos</b> da competência constitucional do ente em <b>requisitos essenciais da responsabilidade na gestão fiscal</b>, vedando a realização de <b>transferências voluntárias</b> para o ente que não os observe <b>no que se refere aos impostos</b> — sanção que, todavia, não alcança as ações de <b>educação, saúde e assistência social</b>, preservadas pelo art. 25, § 3º. O <b>art. 12</b> exige que as previsões de receita observem as <b>normas técnicas e legais</b> e considerem os efeitos das <b>alterações na legislação</b>, da <b>variação do índice de preços</b>, do <b>crescimento econômico</b> ou de qualquer outro fator relevante, devendo vir acompanhadas de demonstrativo de sua <b>evolução nos últimos três anos</b>, da <b>projeção para os dois seguintes</b> e da <b>metodologia de cálculo e premissas utilizadas</b>. Já o <b>art. 13</b> determina que, no prazo do art. 8º, as receitas previstas sejam <b>desdobradas pelo Poder Executivo em metas bimestrais de arrecadação</b>, com a especificação, em separado, das <b>medidas de combate à evasão e à sonegação</b>, da quantidade e valores de <b>ações ajuizadas para cobrança da dívida ativa</b> e da evolução dos <b>créditos tributários passíveis de cobrança administrativa</b>.</p>'+
  '<p>Quanto à <b>renúncia de receita</b>, o <b>art. 14</b> condiciona a concessão ou ampliação de incentivo ou benefício de natureza tributária a três providências: a <b>estimativa do impacto orçamentário-financeiro</b> no exercício em que deva iniciar sua vigência e nos <b>dois seguintes</b>; o <b>atendimento ao disposto na lei de diretrizes orçamentárias</b>; e a satisfação de <b>pelo menos uma</b> de duas condições alternativas — a <b>demonstração</b> de que a renúncia foi <b>considerada na estimativa de receita da lei orçamentária</b> e não afetará as metas de resultados fiscais, ou o acompanhamento de <b>medidas de compensação</b> por meio do <b>aumento de receita</b> proveniente de elevação de alíquotas, ampliação da base de cálculo, majoração ou criação de tributo ou contribuição. Anote-se que a <b>redução de despesa não compensa renúncia</b> — essa via é própria da despesa obrigatória de caráter continuado do art. 17. Compreendem-se na renúncia a <b>anistia</b>, a <b>remissão</b>, o <b>subsídio</b>, o <b>crédito presumido</b>, a <b>isenção em caráter não geral</b> e as alterações de alíquota ou de base de cálculo que impliquem <b>redução discriminada</b> de tributos, ficando de fora, por não discriminar, a isenção em caráter geral. Optando-se pela compensação, o benefício <b>só entra em vigor quando implementadas as medidas</b>. O artigo <b>não se aplica</b> às alterações de alíquotas do <b>II, IE, IPI e IOF</b> nem ao <b>cancelamento de débito inferior ao custo de sua cobrança</b>.</p>'+
  '<p>Por <b>transferência voluntária</b> entende-se, na forma do <b>art. 25</b>, a <b>entrega de recursos correntes ou de capital a outro ente da Federação</b>, a título de <b>cooperação, auxílio ou assistência financeira</b>, que <b>não decorra de determinação constitucional ou legal</b> nem se destine ao <b>SUS</b>. São exigências para sua realização a <b>existência de dotação específica</b>; a <b>vedação</b> de destiná-la ao pagamento de <b>despesas com pessoal</b>; a comprovação de que o beneficiário se acha <b>em dia</b> quanto a tributos, empréstimos e financiamentos devidos ao transferidor e quanto à <b>prestação de contas</b> de recursos anteriores; e a comprovação do cumprimento dos <b>limites constitucionais de educação e saúde</b> e dos limites de <b>dívida</b>, <b>operações de crédito</b>, <b>Restos a Pagar</b> e <b>despesa com pessoal</b>, com <b>previsão orçamentária de contrapartida</b>. Vedada é, ainda, a <b>utilização dos recursos em finalidade diversa da pactuada</b>.</p>'+
  '<p>Finalmente, a <b>destinação de recursos ao setor privado</b> para cobrir necessidades de pessoas físicas ou déficits de pessoas jurídicas exige, cumulativamente, <b>lei específica</b>, <b>atendimento às condições da LDO</b> e <b>previsão orçamentária</b> (art. 26), dispensadas dessas exigências as <b>instituições financeiras e o Banco Central</b> no exercício de suas atribuições precípuas. Na concessão de crédito a quem não esteja sob seu controle, os encargos não podem ser inferiores ao <b>custo de captação</b> (art. 27), e é vedado, <b>salvo lei específica</b>, socorrer instituições do <b>Sistema Financeiro Nacional</b> (art. 28), sem prejuízo do <b>redesconto</b> e dos empréstimos de prazo inferior a <b>360 dias</b> concedidos pelo Banco Central.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> os três verbos do art. 11, o recorte da sanção aos impostos, os números 3 e 2 do art. 12 e as metas <b>bimestrais</b> do art. 13.</li>'+
  '<li><b>Item 2:</b> os três degraus do caput, a alternatividade dos incisos, a exclusão da redução de despesa e as duas exceções do § 3º.</li>'+
  '<li><b>Item 3:</b> as três exclusões do conceito, as quatro exigências do § 1º e os três requisitos do art. 26.</li>'+
  '<li><b>Fecho:</b> citar a ressalva do BACEN no art. 28, § 2º, mostra leitura até o fim do capítulo.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Responda item a item, com o dispositivo entre parênteses.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>Determinado Município praticou, no exercício, os seguintes atos:</p>'+
  '<ol><li>deixou de instituir o ISS, tributo de sua competência, e pleiteou transferência voluntária da União para construção de escola;</li>'+
  '<li>encaminhou projeto de lei concedendo isenção em caráter não geral do IPTU a um setor econômico, instruído apenas com a estimativa de impacto do exercício de início da vigência;</li>'+
  '<li>propôs compensar a renúncia com a redução permanente de despesas de custeio;</li>'+
  '<li>celebrou convênio recebendo transferência voluntária do Estado e utilizou parte dos recursos para pagar a folha da Secretaria de Obras;</li>'+
  '<li>concedeu empréstimo a uma associação privada com encargos inferiores ao seu custo de captação, por decreto do Prefeito.</li></ol>'+
  '<p><b>Pergunta-se:</b> avalie cada ato com fundamento na Lei Complementar nº 101/2000.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1. Não instituição do ISS e pedido de transferência.</b> A <b>instituição, previsão e efetiva arrecadação</b> de todos os tributos da competência do ente é requisito essencial da responsabilidade fiscal (art. 11), e sua inobservância <b>veda transferências voluntárias no que se refere aos impostos</b> — e o ISS é imposto. Contudo, tratando-se de recursos para <b>construção de escola</b>, a transferência <b>permanece possível</b>, porque as ações de <b>educação, saúde e assistência social</b> não se submetem a essa suspensão (art. 25, § 3º).</p>'+
  '<p><b>2. Isenção não geral com estimativa incompleta.</b> <b>Irregular.</b> A isenção em caráter <b>não geral</b> configura renúncia de receita (art. 14, § 1º), e a estimativa de impacto deve abranger o exercício de início da vigência <b>e os dois seguintes</b> (art. 14, caput), além de o ato ter de atender à <b>LDO</b> e a pelo menos uma das condições dos incisos I e II.</p>'+
  '<p><b>3. Compensação por redução de despesa.</b> <b>Inviável.</b> O art. 14, II, admite como compensação exclusivamente o <b>aumento de receita</b> proveniente de elevação de alíquotas, ampliação da base de cálculo, majoração ou criação de tributo ou contribuição. A redução permanente de despesa é meio de compensação da <b>despesa obrigatória de caráter continuado</b> (art. 17, § 2º), não da renúncia.</p>'+
  '<p><b>4. Uso da transferência para folha de pessoal.</b> <b>Duplamente irregular.</b> É expressamente <b>vedada</b> a transferência voluntária destinada ao <b>pagamento de despesas com pessoal</b> (art. 25, § 1º, II), e é igualmente vedada a <b>utilização dos recursos em finalidade diversa da pactuada</b> (art. 25, § 2º).</p>'+
  '<p><b>5. Empréstimo abaixo do custo de captação por decreto.</b> <b>Irregular quanto à forma.</b> Os encargos não podem ser inferiores aos definidos em lei ou ao <b>custo de captação</b> (art. 27, caput); conceder abaixo disso depende de <b>autorização em lei específica</b>, com o <b>subsídio consignado na lei orçamentária</b> (art. 27, parágrafo único) — decreto não supre a exigência. Soma-se que a destinação de recursos a entidade privada exige <b>lei específica</b>, condições da <b>LDO</b> e <b>previsão orçamentária</b> (art. 26).</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>Negar a transferência do <b>1</b> por inteiro, esquecendo a ressalva do ESA.</li>'+
  '<li>Aceitar a estimativa de um só exercício no <b>2</b>.</li>'+
  '<li>Confundir a compensação da <b>renúncia</b> com a da <b>DOCC</b> no <b>3</b>.</li>'+
  '<li>Validar o <b>5</b> por haver “interesse público”, sem exigir a lei específica.</li></ul></div>';

var TEC = [["Caderno completo — Conhecimentos Específicos TJPR 2026","https://www.tecconcursos.com.br/questoes/cadernos/103216249","103216249"]];
var TECNOTA = "Use o seu caderno do TJPR e filtre por <b>Da Receita Pública (arts. 11 a 14)</b> e <b>Das Transferências Voluntárias (art. 25)</b> — são 29 questões catalogadas somadas.";

var UNITS = [
  {n:1, title:"Previsão e arrecadação da receita", cvar:"u1", lessons:[
    {id:"R1", type:"teoria", title:"Arts. 11, 12 e 13",                xp:10, data:"V1"},
    {id:"R2", type:"drill",  title:"Praticar · requisitos do art. 11", xp:20, data:["S1","S2","S3","T0","T1","T2","T3","T4"]},
    {id:"R3", type:"drill",  title:"Praticar · previsão de receita",   xp:25, data:["S4","S5","S6","T5","T6","T7","T8"]},
    {id:"R4", type:"drill",  title:"Praticar · metas bimestrais",      xp:25, data:["S7","S8","S9","T9","T10","T11"]},
    {id:"R5", type:"flash",  title:"Flashcards · receita pública",     xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11]},
    {id:"R6", type:"feynman",title:"Explique os requisitos da receita", xp:30, data:"U1"}
  ]},
  {n:2, title:"Renúncia de receita", cvar:"u2", lessons:[
    {id:"R8", type:"teoria", title:"Art. 14 e suas exceções",          xp:10, data:"V2"},
    {id:"R9", type:"drill",  title:"Praticar · exigências do caput",   xp:25, data:["S10","S11","S32","T12","T13","T14","T15"]},
    {id:"R10",type:"drill",  title:"Praticar · a compensação",         xp:25, data:["S12","S31","T16","T17"]},
    {id:"R11",type:"drill",  title:"Praticar · o que é renúncia",      xp:25, data:["S13","S14","S15","T18","T19","T20"]},
    {id:"R12",type:"drill",  title:"Praticar · vigência e exceções",   xp:25, data:["S16","S17","T21","T22","T23"]},
    {id:"R13",type:"flash",  title:"Flashcards · renúncia de receita", xp:15, data:[12,13,14,15,16,17,18,19,20,21,22]},
    {id:"R14",type:"feynman",title:"Explique a renúncia de receita",   xp:30, data:"U2"}
  ]},
  {n:3, title:"Transferências e setor privado", cvar:"u3", lessons:[
    {id:"R16",type:"teoria", title:"Art. 25 — transferências voluntárias", xp:10, data:"V3"},
    {id:"R17",type:"drill",  title:"Praticar · conceito",              xp:25, data:["S18","S19","T24","T25"]},
    {id:"R18",type:"drill",  title:"Praticar · exigências do § 1º",    xp:25, data:["S20","S21","T26","T27","T28","T29"]},
    {id:"R19",type:"drill",  title:"Praticar · ESA e finalidade",      xp:25, data:["S22","S23","T30","T31","T32"]},
    {id:"R20",type:"drill",  title:"Praticar · destinação ao setor privado", xp:25, data:["S24","S25","S26","T33","T34","T35"]},
    {id:"R21",type:"drill",  title:"Praticar · crédito e socorro a bancos", xp:25, data:["S27","S28","S29","S30","T36","T37","T38","T39","T40"]},
    {id:"R22",type:"flash",  title:"Flashcards · transferências e setor privado", xp:15, data:[23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]},
    {id:"R23",type:"feynman",title:"Explique as transferências voluntárias", xp:30, data:"U3"},
    {id:"R24",type:"feynman",title:"Explique a destinação ao setor privado", xp:30, data:"U4"}
  ]},
  {n:4, title:"Aplicação e prova", cvar:"u4", lessons:[
    {id:"R26",type:"leitura",title:"Discursiva resolvida",             xp:25, data:"disc"},
    {id:"R27",type:"leitura",title:"Estudo de caso resolvido",         xp:25, data:"caso"},
    {id:"Rrev",type:"review",title:"Revisão geral das unidades",       xp:60, data:null},
    {id:"R28",type:"missao", title:"Missão TEC Concursos",             xp:15, data:null},
    {id:"R29",type:"prova",  title:"Simulado cronometrado",            xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo. Literalidade do art. 11: constituem requisitos essenciais da responsabilidade na gestão fiscal a <b>instituição, previsão e efetiva arrecadação</b> de todos os tributos da competência constitucional do ente.</p><p>O COMENTÁRIO do Resumo abre os dois lados: são <b>três</b> requisitos (instituir, prever, arrecadar) e a palavra tributos aqui é gênero — alcança <b>impostos, taxas e contribuições</b> de competência do ente (União, Estados, Municípios e DF).</p><p class='fb-fonte'>LRF — Radegondes · <i>Da receita pública — da previsão e da arrecadação</i></p>",
1:"<p>Errado por subtração: o art. 11 exige <b>três</b> requisitos, e não dois. Faltou a <b>efetiva arrecadação</b>.</p><p>A ordem do Resumo é instituição, previsão e efetiva arrecadação. A banca gosta de cortar justamente o terceiro, porque é o que dá dente ao artigo: não basta ter a lei do tributo e prevê-lo no orçamento, é preciso cobrar de fato.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da receita pública — da previsão e da arrecadação</i></p>",
2:"<p>Certo. É o parágrafo único do art. 11, e repare na palavra que o Resumo grifa: a vedação se dá <b>no que se refere aos impostos</b>.</p><p>O COMENTÁRIO fecha assim: o ente que não instituir, prever e arrecadar efetivamente seus impostos fica proibido de receber <b>transferências voluntárias</b>. Mas continua podendo receber as relativas a ações de <b>ESA</b> — Educação, Saúde e Assistência social (art. 25, § 3º).</p><p class='fb-fonte'>LRF — Radegondes · <i>Da receita pública — da previsão e da arrecadação</i></p>",
3:"<p>Errado justamente na palavra que o Resumo destaca. O caput do art. 11 fala em <b>tributos</b>; o parágrafo único restringe a sanção aos <b>impostos</b>.</p><p>Guarde o contraste do material: o requisito é sobre <b>todos os tributos</b> (impostos, taxas e contribuições); a vedação de transferências voluntárias é só <b>no que se refere aos impostos</b>. Deixar de instituir uma taxa não suspende as transferências voluntárias.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da receita pública — da previsão e da arrecadação</i></p>",
4:"<p>Errado no quaisquer. A vedação do art. 11, parágrafo único, não é absoluta: o ente continua podendo receber transferências voluntárias relativas a ações de <b>ESA</b>.</p><p>O mnemônico do Resumo: <b>E</b>ducação, <b>S</b>aúde e <b>A</b>ssistência social (art. 25, § 3º). Saúde está expressamente ressalvada, então a assertiva erra ao incluí-la na proibição.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da receita pública — da previsão e da arrecadação</i></p>",
5:"<p>Certo. É a primeira metade do art. 12: as previsões de receita observarão as <b>normas técnicas e legais</b> e <b>considerarão os efeitos</b> das alterações na legislação, da variação do índice de preços e do crescimento econômico.</p><p>O esquema do Resumo separa dois verbos: as previsões de receita <b>considerarão os efeitos</b> (legislação, índice de preços/inflação, crescimento econômico) e <b>serão acompanhadas</b> (demonstrativo, projeção e metodologia). O caput ainda admite <b>qualquer outro fator relevante</b>, então o rol não é fechado.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da receita pública — da previsão e da arrecadação</i></p>",
6:"<p>Certo, e são os dois números que a banca inverte: demonstrativo da evolução nos <b>últimos três anos</b> e projeção para os <b>dois seguintes</b> àquele a que se referirem (art. 12).</p><p>O EXEMPLO do Resumo é a prefeitura montando o orçamento do ano que vem: apresenta a receita arrecadada nos últimos <b>3</b> anos, a projeção para os próximos <b>2</b> e a metodologia usada. Para trás 3, para frente 2.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da receita pública — da previsão e da arrecadação</i></p>",
7:"<p>Errado: os números estão <b>trocados</b>. É evolução nos últimos <b>três</b> anos e projeção para os <b>dois</b> seguintes, não o contrário.</p><p>Fixe pelo esquema do Resumo, que é sempre nessa ordem: demonstrativo de sua evolução nos últimos <b>3 anos</b>; projeção para os <b>2 anos</b> seguintes àquele a que se referirem; metodologia de cálculo e premissas utilizadas. Olhar para trás pede mais histórico do que olhar para frente.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da receita pública — da previsão e da arrecadação</i></p>",
8:"<p>Certo. É o terceiro item do que acompanha a previsão de receita no art. 12: a <b>metodologia de cálculo e as premissas utilizadas</b>.</p><p>O EXEMPLO do Resumo dá o recheio das premissas: taxa de crescimento econômico, inflação, entre outros. Sem elas a previsão vira número solto — o art. 12 quer previsão auditável.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da receita pública — da previsão e da arrecadação</i></p>",
9:"<p>Certo. As receitas previstas são desdobradas pelo Poder Executivo em <b>metas bimestrais</b> de arrecadação (art. 13), em até trinta dias após a publicação dos orçamentos.</p><p>Casa com o art. 9º, esse sim no Resumo: é <b>ao final de um bimestre</b> que se verifica se a realização da receita comporta as metas de resultado. Como a verificação é bimestral, o desdobramento da receita também é.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 13 da LC 101/2000. O material salta do art. 12 direto para a renúncia de receita do art. 14.</p>",
10:"<p>Errado no prazo: o desdobramento das receitas previstas em metas de arrecadação é <b>bimestral</b>, e não quadrimestral (art. 13).</p><p>A LRF usa cada prazo num lugar: <b>bimestre</b> para receita (metas de arrecadação e RREO) e <b>quadrimestre</b> para o Relatório de Gestão Fiscal e para a apuração de despesa com pessoal. Trocar bimestral por quadrimestral é a pegadinha mais barata do art. 13.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 13 da LC 101/2000. O material não traz o desdobramento em metas bimestrais.</p>",
11:"<p>Certo. No mesmo art. 13, ao desdobrar as receitas em metas bimestrais, o Executivo especifica <b>em separado</b>, quando cabível, as medidas de combate à <b>evasão e à sonegação</b>.</p><p>O artigo acrescenta ainda a previsão da quantidade e dos valores de ações ajuizadas para cobrança da dívida ativa e a evolução do montante dos créditos tributários passíveis de cobrança administrativa.</p><p class='fb-fonte off'>Não consta do resumo de LRF — art. 13 da LC 101/2000. O material não cobre esse artigo.</p>",
12:"<p>Certo. Literalidade do caput do art. 14: a concessão ou ampliação de incentivo ou benefício de natureza tributária da qual decorra renúncia de receita deve vir com <b>estimativa do impacto orçamentário-financeiro no exercício em que iniciar a vigência e nos dois seguintes</b>.</p><p>No esquema do Resumo o art. 14 tem três exigências em cadeia: estimativa de impacto (exercício + 2 seguintes); atender ao disposto na <b>LDO</b>; e atender a <b>pelo menos uma</b> das duas condições dos incisos.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da renúncia de receita</i></p>",
13:"<p>Errado numa palavra: os incisos I e II do art. 14 são <b>alternativos</b>, não cumulativos. O caput diz atender a <b>pelo menos uma</b> das seguintes condições.</p><p>O esquema do Resumo separa bem o que é obrigatório do que é opcional: a estimativa de impacto e o atendimento à LDO são sempre exigidos; já demonstrar que a renúncia foi considerada na LOA (inciso I) <b>ou</b> apresentar medidas de compensação (inciso II) — basta uma.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da renúncia de receita</i></p>",
14:"<p>Certo. É a segunda exigência do caput do art. 14, e essa é sempre obrigatória: a renúncia deve <b>atender ao disposto na lei de diretrizes orçamentárias</b>.</p><p>No esquema do Resumo a renúncia de receita deverá: estar acompanhada da estimativa de impacto no exercício e nos dois seguintes; atender ao disposto na <b>LDO</b>; e atender a pelo menos uma das duas condições. As duas primeiras não são escolha.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da renúncia de receita</i></p>",
15:"<p>Certo. É o inciso I do art. 14: demonstração pelo proponente de que a renúncia <b>foi considerada na estimativa de receita da lei orçamentária</b>, na forma do art. 12, e de que <b>não afetará as metas de resultados fiscais</b> previstas no anexo próprio da LDO.</p><p>O esquema do Resumo traduz o anexo próprio: é o <b>AMF</b>, o Anexo de Metas Fiscais da LDO. Satisfeito o inciso I, não é preciso a compensação do inciso II.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da renúncia de receita</i></p>",
16:"<p>Errado, e o Resumo cravou esse ponto em uma OBSERVAÇÃO: <b>redução de despesa não é medida de compensação para renúncia de receita</b>.</p><p>A compensação do art. 14, II, só se faz por <b>aumento de receita</b>: elevação de alíquotas, ampliação da base de cálculo, majoração ou criação de tributo ou contribuição. Cortar gasto pode ser boa gestão, mas não serve para compensar renúncia.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da renúncia de receita</i></p>",
17:"<p>Certo. É o rol fechado do art. 14, II: a compensação vem do <b>aumento de receita</b> proveniente de elevação de alíquotas, ampliação da base de cálculo, majoração ou criação de tributo ou contribuição.</p><p>Repare no contraste que o Resumo monta ao lado disso: essas quatro medidas <b>valem</b>; a redução de despesa <b>não vale</b>. É a mesma lista que reaparece no § 2º para definir quando o benefício entra em vigor.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da renúncia de receita</i></p>",
18:"<p>Certo. Abrem a lista de renúncia de receita do art. 14, § 1º, e o Resumo traduz cada uma: <b>anistia</b> é perdão de multa e <b>remissão</b> é perdão de dívida.</p><p>A lista completa das OBSERVAÇÕES: anistia, remissão, subsídio, crédito presumido, concessão de isenção em caráter <b>não geral</b>, alteração de alíquota ou modificação de base de cálculo que impliquem redução discriminada de tributos e outros benefícios que correspondam a tratamento diferenciado.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da renúncia de receita</i></p>",
19:"<p>Errado por causa de duas palavras que sumiram. O § 1º do art. 14 fala em concessão de isenção em caráter <b>não geral</b>.</p><p>O quadro NÃO CONFUNDA do Resumo é exatamente esse: isenção em caráter <b>não geral</b> é renúncia de receita; isenção em caráter <b>geral</b> não é. A lógica é a do tratamento diferenciado — se todos ganham, não há discriminação a compensar.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da renúncia de receita</i></p>",
20:"<p>Certo. Os dois estão na lista do art. 14, § 1º, com as definições do Resumo: <b>subsídio</b> é a concessão de dinheiro feita pelo governo para estimular a economia; <b>crédito presumido</b> é redução de carga tributária na forma de crédito do tributo.</p><p>Vale decorar a lista inteira das OBSERVAÇÕES, porque a banca sorteia um item de cada vez: anistia, remissão, subsídio, crédito presumido, isenção não geral, alteração de alíquota e modificação de base de cálculo com redução discriminada, e outros tratamentos diferenciados.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da renúncia de receita</i></p>",
21:"<p>Certo. É o art. 14, § 2º, e está na OBSERVAÇÃO 2 do Resumo: se a renúncia se apoiar em medidas de compensação, o benefício <b>só entrará em vigor quando implementadas tais medidas</b>.</p><p>Ou seja, a compensação vem antes. Não basta prometer elevar alíquota ou criar tributo no papel: enquanto a medida não estiver implementada, a renúncia fica sem eficácia.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da renúncia de receita</i></p>",
22:"<p>Errado — é justamente a exceção do art. 14, § 3º. As regras de renúncia de receita <b>não se aplicam</b> às alterações de alíquotas do <b>II, IE, IPI e IOF</b>.</p><p>O Resumo lista os quatro na OBSERVAÇÃO 4: imposto sobre importação de produtos estrangeiros, imposto sobre exportação para o exterior, imposto sobre produtos industrializados e imposto sobre operações de crédito, câmbio e seguro. São os impostos extrafiscais, cuja alíquota o Executivo mexe para regular a economia.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da renúncia de receita</i></p>",
23:"<p>Certo. É a segunda exceção do art. 14, § 3º, na OBSERVAÇÃO 5 do Resumo: as regras de renúncia não se aplicam ao <b>cancelamento de débito cujo montante seja inferior ao dos respectivos custos de cobrança</b>.</p><p>Faz sentido econômico: cobrar custaria mais do que o crédito rende. Guarde as duas exceções juntas — alteração de alíquota do <b>II, IE, IPI e IOF</b> e cancelamento antieconômico de débito.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da renúncia de receita</i></p>",
24:"<p>Certo. É a definição do art. 25, com todos os elementos do esquema do Resumo: entrega de <b>recursos correntes ou de capital a outro ente da Federação</b>, a título de <b>cooperação, auxílio ou assistência financeira</b>, que <b>não decorra</b> de determinação constitucional, legal ou os destinados ao SUS.</p><p>Repare na palavra-chave voluntária: se há obrigação constitucional ou legal de repassar, a transferência é obrigatória, não voluntária.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das transferências voluntárias</i></p>",
25:"<p>Errado. O art. 25 exclui expressamente do conceito os recursos <b>destinados ao Sistema Único de Saúde</b>.</p><p>No esquema do Resumo, transferência voluntária é a que <b>não decorra</b> de três coisas: determinação constitucional, determinação legal ou destinação ao <b>SUS</b>. Recurso do SUS entra pela porta das transferências obrigatórias.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das transferências voluntárias</i></p>",
26:"<p>Certo. As duas constam do rol do art. 25, § 1º: a <b>existência de dotação específica</b> (item 01 do Resumo) e a <b>previsão orçamentária de contrapartida</b> (último item do 04).</p><p>O Resumo organiza as exigências em quatro blocos: 01 dotação específica; 02 proibição de TV para pagamento de despesas com pessoal; 03 estar em dia com o ente transferidor; 04 comprovar o cumprimento dos limites constitucionais e legais, mais a contrapartida.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das exigências para a realização de transferências voluntárias</i></p>",
27:"<p>Errado. Não há dotação que salve: o item 02 das exigências do art. 25, § 1º, é a <b>proibição de transferência voluntária para pagamento de despesas com pessoal</b>.</p><p>É vedação absoluta dentro do artigo. A dotação específica é exigência do item 01, cumulativa com as demais — ela nunca funciona como autorização para furar a proibição do item 02.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das exigências para a realização de transferências voluntárias</i></p>",
28:"<p>Certo. É o item 03 do quadro de exigências do Resumo: o beneficiário comprova estar em dia quanto ao pagamento de <b>tributos</b>, <b>empréstimos e financiamentos</b> devidos ao ente transferidor e à <b>prestação de contas</b> de recursos anteriormente recebidos dele.</p><p>São três comprovações, sempre em relação ao <b>ente transferidor</b> — não a qualquer credor. A que a banca costuma omitir é a terceira, a prestação de contas dos recursos anteriores.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das exigências para a realização de transferências voluntárias</i></p>",
29:"<p>Certo. Estão no item 04 do quadro do Resumo: observância dos limites das <b>dívidas consolidada e mobiliária</b> e dos limites de <b>despesa total com pessoal</b>.</p><p>O item 04 tem seis comprovações: limites constitucionais de educação e saúde; dívidas consolidada e mobiliária; operações de crédito, inclusive por antecipação de receita; inscrição em Restos a Pagar; despesa total com pessoal; e previsão orçamentária de contrapartida.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das exigências para a realização de transferências voluntárias</i></p>",
30:"<p>Certo. É a OBSERVAÇÃO 1 do Resumo sobre transferências voluntárias: é vedada a utilização dos recursos transferidos <b>em finalidade diversa da pactuada</b> (art. 25, § 2º).</p><p>O dinheiro chega vinculado ao objeto do convênio. Desviar de finalidade não é irregularidade meramente formal: descaracteriza a transferência e sujeita o beneficiário à devolução.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das transferências voluntárias</i></p>",
31:"<p>Certo. É a OBSERVAÇÃO 2 do Resumo: as ações de <b>ESA</b> — Educação, Saúde e Assistência social — não se submetem à sanção de suspensão de transferências voluntárias (art. 25, § 3º).</p><p>Essa ressalva é a mesma que socorre o ente que descumpre o art. 11 e a que aparece nas sanções dos arts. 23 e 31. Mesmo suspenso, o ente continua recebendo para ESA.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das transferências voluntárias</i></p>",
32:"<p>Errado, e o Resumo abre um quadro NÃO CONFUNDA só para isso. A ressalva do art. 25, § 3º, é <b>ESA</b>: Educação, Saúde e <b>Assistência social</b>. Segurança não está nela.</p><p>O quadro compara as duas listas: art. 22, parágrafo único, IV (exceções para contratar pessoal no limite prudencial de 95%) é <b>ESS</b> — Educação, Saúde e <b>Segurança</b>; art. 25, § 3º (exceções para receber transferências voluntárias suspensas) é <b>ESA</b>. Troque a última letra e a assertiva vira errada.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das transferências voluntárias — NÃO CONFUNDA</i></p>",
33:"<p>Certo. São os três requisitos do art. 26, exatamente como a OBSERVAÇÃO 1 do Resumo os lista: <b>autorização por lei específica</b>, <b>atendimento às condições da LDO</b> e <b>previsão no orçamento ou em seus créditos adicionais</b>.</p><p>O EXEMPLO do material é o município que quer tomar empréstimo para cobrir déficit no pagamento de salários: precisa de lei específica, adequação à LDO e previsão orçamentária. Os três são cumulativos.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da destinação de recursos públicos para o setor privado</i></p>",
34:"<p>Certo. É a lista do COMENTÁRIO do Resumo ao art. 26: concessão de <b>empréstimos</b>; <b>financiamentos e refinanciamentos</b>, inclusive as respectivas prorrogações; <b>composição de dívidas</b>; concessão de <b>subvenções</b>; e participação em <b>constituição ou aumento de capital</b>.</p><p>São cinco formas, diretas ou indiretas, de cobrir necessidade de pessoa física ou déficit de pessoa jurídica. Qualquer uma delas puxa os três requisitos do artigo.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da destinação de recursos públicos para o setor privado</i></p>",
35:"<p>Errado. A OBSERVAÇÃO 2 do Resumo diz o oposto: as <b>instituições financeiras e o BACEN</b>, no exercício de suas <b>atribuições precípuas</b>, não precisam observar os requisitos do art. 26 (art. 26, § 1º).</p><p>A ressalva tem limite: vale apenas no exercício das atribuições próprias dessas entidades. Fora disso, valem lei específica, LDO e previsão orçamentária como para o resto da Administração.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da destinação de recursos públicos para o setor privado</i></p>",
36:"<p>Certo. Literalidade do art. 27: na concessão de crédito a pessoa física ou jurídica que <b>não esteja sob seu controle direto ou indireto</b>, os encargos financeiros, comissões e despesas congêneres <b>não serão inferiores aos definidos em lei ou ao custo de captação</b>.</p><p>O EXEMPLO do Resumo é direto: se o ente captou a 10%, não pode emprestar por menos, senão fica no prejuízo.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da concessão de crédito</i></p>",
37:"<p>Certo. É o parágrafo único do art. 27: emprestar abaixo do custo de captação depende de <b>autorização em lei específica</b>, com o <b>subsídio correspondente consignado na lei orçamentária</b>.</p><p>O COMENTÁRIO do Resumo resume: se o ente quiser conceder crédito com custo inferior ao de captação, dependerá de lei específica. O mesmo parágrafo alcança as prorrogações e composições de dívidas decorrentes de operações de crédito.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da concessão de crédito</i></p>",
38:"<p>Certo. É o caput do art. 28: salvo mediante <b>lei específica</b>, não poderão ser utilizados recursos públicos, inclusive de operações de crédito, para <b>socorrer instituições do Sistema Financeiro Nacional</b>, ainda que por empréstimos de recuperação ou financiamentos para mudança de controle acionário.</p><p>O COMENTÁRIO do Resumo dá a razão: recurso público é para o benefício de todos, não de um particular. Se o interesse público exigir o socorro, ele é possível — mas só com lei específica.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do socorro a instituições financeiras</i></p>",
39:"<p>Errado. O art. 28, § 2º, ressalva exatamente isso: o caput <b>não proíbe</b> o Banco Central de conceder às instituições financeiras operações de <b>redesconto</b> e de <b>empréstimos de prazo inferior a trezentos e sessenta dias</b>.</p><p>A assertiva inverteu o sentido do dispositivo. Redesconto e empréstimo de curtíssimo prazo são instrumentos ordinários de liquidez do BACEN, não socorro financeiro do art. 28.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do socorro a instituições financeiras</i></p>",
40:"<p>Certo. É o art. 28, § 1º: a prevenção de insolvência e outros riscos fica a cargo de <b>fundos e outros mecanismos constituídos pelas próprias instituições</b> do Sistema Financeiro Nacional, na forma da lei.</p><p>O EXEMPLO do Resumo é o <b>FGC</b>, o Fundo Garantidor de Crédito, que permite recuperar até <b>R$ 250 mil</b> em depósitos ou créditos em caso de falência, intervenção ou liquidação da instituição. Quem paga a conta do risco é o próprio sistema, não o Tesouro.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do socorro a instituições financeiras</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"03", nome:"Receita, renúncia e transferências", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
