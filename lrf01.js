/* LRF — Módulo 01: Disposições preliminares (arts. 1º e 2º) */
window.MOD = window.MOD || {};
window.MOD.lrf01 = (function(){
"use strict";

var CARDS = [
  ["Qual o objeto da LRF (art. 1º, caput)?","Estabelece <b>normas de finanças públicas voltadas para a responsabilidade na gestão fiscal</b>, com amparo no <b>Capítulo II do Título VI da Constituição</b>."],
  ["Qual a natureza jurídica da LRF?","<b>Lei Complementar nº 101, de 4 de maio de 2000</b> — lei complementar de <b>normas gerais</b> de finanças públicas, exigida pelo art. 163 da CF."],
  ["O que pressupõe a responsabilidade na gestão fiscal (art. 1º, § 1º)?","A <b>ação planejada e transparente</b>, em que se <b>previnem riscos</b> e <b>corrigem desvios</b> capazes de afetar o equilíbrio das contas públicas."],
  ["Como se alcança esse equilíbrio, segundo o § 1º?","Mediante o <b>cumprimento de metas de resultados entre receitas e despesas</b> e a <b>obediência a limites e condições</b>."],
  ["Sobre o que incidem os limites e condições do art. 1º, § 1º?","<b>Renúncia de receita</b>; <b>geração de despesas com pessoal, da seguridade social e outras</b>; <b>dívidas consolidada e mobiliária</b>; <b>operações de crédito, inclusive por antecipação de receita</b>; <b>concessão de garantia</b>; e <b>inscrição em Restos a Pagar</b>."],
  ["Qual o mnemônico dos seis limites do art. 1º, § 1º?","<b>R-G-D-O-G-I:</b> <b>R</b>enúncia de receita · <b>G</b>eração de despesas · <b>D</b>ívidas · <b>O</b>perações de crédito · <b>G</b>arantia · <b>I</b>nscrição em restos a pagar."],
  ["A quem obrigam as disposições da LRF (art. 1º, § 2º)?","À <b>União, aos Estados, ao Distrito Federal e aos Municípios</b> — todos os entes, sem exceção."],
  ["Quais Poderes e órgãos estão compreendidos nas referências da LRF (art. 1º, § 3º, I, a)?","O <b>Poder Executivo</b>, o <b>Poder Legislativo</b> — neste abrangidos os <b>Tribunais de Contas</b> —, o <b>Poder Judiciário</b> e o <b>Ministério Público</b>."],
  ["Os Tribunais de Contas integram qual Poder, para a LRF?","O <b>Poder Legislativo</b> — o art. 1º, § 3º, I, a, os inclui expressamente ali."],
  ["Que entidades estão compreendidas no art. 1º, § 3º, I, b?","As respectivas <b>administrações diretas, fundos, autarquias, fundações e empresas estatais dependentes</b>."],
  ["As empresas estatais <b>independentes</b> submetem-se à LRF?","<b>Não</b> — o § 3º, I, b, alcança apenas as <b>empresas estatais dependentes</b>."],
  ["O que diz o art. 1º, § 3º, II?","Nas referências a <b>Estados</b> entende-se considerado o <b>Distrito Federal</b>."],
  ["O que abrange a expressão “Tribunais de Contas” (art. 1º, § 3º, III)?","O <b>Tribunal de Contas da União</b>, o <b>Tribunal de Contas do Estado</b> e, <b>quando houver</b>, o <b>Tribunal de Contas dos Municípios</b> e o <b>Tribunal de Contas do Município</b>."],
  ["O que é <b>ente da Federação</b> (art. 2º, I)?","A <b>União</b>, <b>cada Estado</b>, o <b>Distrito Federal</b> e <b>cada Município</b>."],
  ["O que é <b>empresa controlada</b> (art. 2º, II)?","Sociedade cuja <b>maioria do capital social com direito a voto</b> pertença, <b>direta ou indiretamente</b>, a ente da Federação."],
  ["O que é <b>empresa estatal dependente</b> (art. 2º, III)?","Empresa <b>controlada</b> que receba do <b>ente controlador</b> recursos financeiros para pagamento de <b>despesas com pessoal</b> ou de <b>custeio em geral</b> ou <b>de capital</b>."],
  ["Qual a exclusão do conceito de empresa estatal dependente?","Excluem-se, no caso das despesas <b>de capital</b>, os recursos provenientes de <b>aumento de participação acionária</b>."],
  ["Empresa controlada é sempre dependente?","<b>Não.</b> Toda dependente é controlada, mas a controlada só é dependente se <b>receber recursos do controlador</b> para pessoal, custeio ou capital — fora do aumento de participação acionária."],
  ["O que é a Receita Corrente Líquida (art. 2º, IV)?","O <b>somatório das receitas tributárias, de contribuições, patrimoniais, industriais, agropecuárias, de serviços, transferências correntes e outras receitas também correntes</b>, feitas as deduções legais."],
  ["A RCL inclui receitas de capital?","<b>Não.</b> O somatório é apenas de <b>receitas correntes</b> — operações de crédito, alienação de bens e amortização de empréstimos ficam de fora."],
  ["Deduções da RCL na <b>União</b> (art. 2º, IV, a)","Os valores <b>transferidos aos Estados e Municípios por determinação constitucional ou legal</b> e as <b>contribuições do art. 195, I, a, e II, e do art. 239 da CF</b> (contribuição patronal e do trabalhador para a previdência e o PIS/PASEP)."],
  ["Deduções da RCL nos <b>Estados</b> (art. 2º, IV, b)","As <b>parcelas entregues aos Municípios por determinação constitucional</b>."],
  ["Deduções comuns à União, Estados e Municípios (art. 2º, IV, c)","A <b>contribuição dos servidores para o custeio do seu sistema de previdência e assistência social</b> e as receitas provenientes da <b>compensação financeira</b> entre regimes previdenciários (art. 201, § 9º, da CF)."],
  ["O que se computa na RCL por força do art. 2º, § 1º?","Os valores <b>pagos e recebidos</b> em decorrência da <b>Lei Complementar nº 87/1996</b> (Lei Kandir) e do <b>fundo previsto pelo art. 60 do ADCT</b>."],
  ["Qual a regra especial do art. 2º, § 2º?","<b>Não</b> serão considerados na RCL do <b>Distrito Federal</b> e dos Estados do <b>Amapá</b> e de <b>Roraima</b> os recursos recebidos da União para as despesas do art. 21, § 1º, V, da CF."],
  ["Como se apura a RCL (art. 2º, § 3º)?","Somando-se as receitas arrecadadas <b>no mês em referência e nos onze anteriores</b>, <b>excluídas as duplicidades</b>. Ou seja: <b>12 meses móveis</b>."],
  ["Por que a RCL é o conceito mais importante da LRF?","Porque é a <b>base de cálculo</b> de quase todos os limites: despesa com pessoal, dívida consolidada, operações de crédito, garantias e restos a pagar."],
  ["A LRF impõe metas ou apenas limites?","<b>Ambos.</b> O art. 1º, § 1º, exige o <b>cumprimento de metas de resultados entre receitas e despesas</b> <i>e</i> a obediência a <b>limites e condições</b>."],
  ["Qual dispositivo constitucional dá amparo à LRF?","O <b>Capítulo II do Título VI da CF</b> — “Das Finanças Públicas” —, sobretudo o <b>art. 163</b>, que exige lei complementar sobre finanças públicas."],
  ["A LRF revogou a Lei nº 4.320/1964?","<b>Não.</b> Convivem: a Lei 4.320 trata de normas gerais de direito financeiro e de contabilidade pública; a LRF trata da <b>responsabilidade na gestão fiscal</b>."]
];

var QS = [
  ["A Lei de Responsabilidade Fiscal estabelece normas de finanças públicas voltadas para a responsabilidade na gestão fiscal, com amparo no Capítulo II do Título VI da Constituição Federal.","C","CESPE","Literalidade do art. 1º, caput."],
  ["A responsabilidade na gestão fiscal pressupõe a ação planejada e transparente, em que se previnem riscos e corrigem desvios capazes de afetar o equilíbrio das contas públicas.","C","FCC","Art. 1º, § 1º — a definição mais cobrada da lei inteira."],
  ["A responsabilidade na gestão fiscal pressupõe ação planejada e transparente, na qual se corrigem riscos e previnem desvios capazes de afetar o equilíbrio das contas públicas.","E","FGV","Está invertido: <b>previnem-se riscos</b> e <b>corrigem-se desvios</b>."],
  ["O equilíbrio das contas públicas, na LRF, é buscado mediante o cumprimento de metas de resultados entre receitas e despesas e a obediência a limites e condições.","C","CESPE","Art. 1º, § 1º, parte final."],
  ["Entre os limites e condições de que trata o art. 1º, § 1º, da LRF está a renúncia de receita.","C","VUNESP","Ao lado de geração de despesas, dívidas, operações de crédito, garantias e restos a pagar."],
  ["A inscrição em Restos a Pagar é um dos itens submetidos a limites e condições pelo art. 1º, § 1º, da LRF.","C","FCC","É o último da lista — e dialoga diretamente com o art. 42."],
  ["Os limites e condições do art. 1º, § 1º, da LRF alcançam as dívidas consolidada e mobiliária e as operações de crédito, inclusive por antecipação de receita.","C","CESPE","Dois dos seis itens da enumeração."],
  ["As disposições da Lei de Responsabilidade Fiscal obrigam apenas a União e os Estados.","E","FGV","Art. 1º, § 2º: obrigam <b>a União, os Estados, o Distrito Federal e os Municípios</b>."],
  ["Nas referências à União, aos Estados, ao Distrito Federal e aos Municípios estão compreendidos o Poder Executivo, o Poder Legislativo, o Poder Judiciário e o Ministério Público.","C","FCC","Art. 1º, § 3º, I, a — e no Legislativo estão abrangidos os Tribunais de Contas."],
  ["Para efeito da LRF, os Tribunais de Contas estão abrangidos no Poder Judiciário.","E","CESPE","Estão abrangidos no <b>Poder Legislativo</b> (art. 1º, § 3º, I, a)."],
  ["Nas referências aos entes da Federação estão compreendidas as respectivas administrações diretas, fundos, autarquias, fundações e empresas estatais dependentes.","C","VUNESP","Art. 1º, § 3º, I, b."],
  ["As empresas estatais independentes submetem-se integralmente às disposições da Lei de Responsabilidade Fiscal.","E","FGV","O art. 1º, § 3º, I, b, alcança apenas as empresas estatais <b>dependentes</b>."],
  ["Nas referências a Estados, entende-se considerado o Distrito Federal.","C","FCC","Art. 1º, § 3º, II."],
  ["Na expressão Tribunais de Contas estão incluídos o Tribunal de Contas da União, o Tribunal de Contas do Estado e, quando houver, o Tribunal de Contas dos Municípios e o Tribunal de Contas do Município.","C","CESPE","Art. 1º, § 3º, III — note o “quando houver”."],
  ["Entende-se por ente da Federação a União, cada Estado, o Distrito Federal e cada Município.","C","FCC","Art. 2º, I."],
  ["Empresa controlada é a sociedade cuja maioria do capital social com direito a voto pertença, direta ou indiretamente, a ente da Federação.","C","FGV","Art. 2º, II — note o “direta ou indiretamente”."],
  ["Empresa controlada é aquela cuja totalidade do capital social pertença a ente da Federação.","E","CESPE","Basta a <b>maioria do capital social com direito a voto</b>, direta ou indiretamente."],
  ["Empresa estatal dependente é a empresa controlada que receba do ente controlador recursos financeiros para pagamento de despesas com pessoal ou de custeio em geral ou de capital.","C","VUNESP","Art. 2º, III."],
  ["No conceito de empresa estatal dependente, excluem-se, no caso das despesas de capital, os recursos provenientes de aumento de participação acionária.","C","FCC","É a ressalva final do art. 2º, III — frequentemente omitida pela banca."],
  ["Toda empresa controlada por ente da Federação é, por definição, empresa estatal dependente.","E","CESPE","Só é dependente se <b>receber recursos do controlador</b> para pessoal, custeio ou capital, fora o aumento de participação acionária."],
  ["A receita corrente líquida corresponde ao somatório das receitas tributárias, de contribuições, patrimoniais, industriais, agropecuárias, de serviços, transferências correntes e outras receitas também correntes.","C","FGV","Art. 2º, IV, caput — feitas as deduções das alíneas a, b e c."],
  ["Integram o cálculo da receita corrente líquida as receitas de capital, como as operações de crédito e a alienação de bens.","E","FCC","O somatório é apenas de <b>receitas correntes</b>."],
  ["Na União, deduzem-se da receita corrente líquida os valores transferidos aos Estados e Municípios por determinação constitucional ou legal.","C","CESPE","Art. 2º, IV, a."],
  ["Nos Estados, deduzem-se da receita corrente líquida as parcelas entregues aos Municípios por determinação constitucional.","C","VUNESP","Art. 2º, IV, b."],
  ["Deduz-se da receita corrente líquida, na União, nos Estados e nos Municípios, a contribuição dos servidores para o custeio do seu sistema de previdência e assistência social.","C","FCC","Art. 2º, IV, c — junto com a compensação financeira entre regimes previdenciários."],
  ["A contribuição dos servidores para o custeio do regime próprio de previdência integra a receita corrente líquida do ente.","E","FGV","É expressamente <b>deduzida</b> (art. 2º, IV, c)."],
  ["Serão computados no cálculo da receita corrente líquida os valores pagos e recebidos em decorrência da Lei Complementar nº 87/1996 e do fundo previsto pelo art. 60 do Ato das Disposições Constitucionais Transitórias.","C","CESPE","Art. 2º, § 1º."],
  ["Não serão considerados na receita corrente líquida do Distrito Federal e dos Estados do Amapá e de Roraima os recursos recebidos da União para atendimento das despesas com segurança pública e organização administrativa e judiciária.","C","FCC","Art. 2º, § 2º, que remete ao art. 21, § 1º, V, da CF."],
  ["A receita corrente líquida será apurada somando-se as receitas arrecadadas no mês em referência e nos onze anteriores, excluídas as duplicidades.","C","VUNESP","Art. 2º, § 3º — são doze meses móveis, não o exercício civil."],
  ["A receita corrente líquida é apurada com base nas receitas arrecadadas no exercício financeiro anterior.","E","CESPE","É apurada em <b>doze meses móveis</b>: o mês de referência e os onze anteriores."],
  ["A Lei de Responsabilidade Fiscal revogou a Lei nº 4.320/1964.","E","FGV","Convivem: a 4.320 trata de direito financeiro e contabilidade pública; a LRF, da responsabilidade na gestão fiscal."],
  ["A receita corrente líquida é a base de cálculo dos limites de despesa com pessoal e de dívida consolidada.","C","FCC","Daí sua centralidade em toda a lei."],
  ["A ação planejada e transparente de que trata a LRF dispensa o cumprimento de metas de resultados entre receitas e despesas, bastando a obediência a limites.","E","CESPE","O art. 1º, § 1º, exige <b>as duas coisas</b>: metas de resultados <b>e</b> limites e condições."],
  ["A concessão de garantia está entre os itens submetidos a limites e condições pela Lei de Responsabilidade Fiscal.","C","VUNESP","Art. 1º, § 1º — ao lado de renúncia de receita, despesas, dívidas, operações de crédito e restos a pagar."],
  ["As disposições da LRF alcançam os fundos e as fundações mantidos pelos entes da Federação.","C","FCC","Art. 1º, § 3º, I, b."]
];

var FEY = {
  D1:{ask:"Explique o objeto da LRF e o que ela entende por responsabilidade na gestão fiscal.",
    hint:"Comece pelo art. 1º, caput, e seu fundamento constitucional. Depois o § 1º inteiro: o pressuposto, o meio e os seis itens sujeitos a limites.",
    ref:"A Lei Complementar nº 101/2000 estabelece normas de finanças públicas voltadas para a responsabilidade na gestão fiscal, com amparo no Capítulo II do Título VI da Constituição Federal, que trata das finanças públicas. A responsabilidade na gestão fiscal, nos termos do art. 1º, § 1º, pressupõe a ação planejada e transparente, em que se previnem riscos e corrigem desvios capazes de afetar o equilíbrio das contas públicas, mediante o cumprimento de metas de resultados entre receitas e despesas e a obediência a limites e condições no que tange a renúncia de receita, geração de despesas com pessoal, da seguridade social e outras, dívidas consolidada e mobiliária, operações de crédito, inclusive por antecipação de receita, concessão de garantia e inscrição em Restos a Pagar. Suas disposições obrigam a União, os Estados, o Distrito Federal e os Municípios, alcançando o Poder Executivo, o Poder Legislativo — neste abrangidos os Tribunais de Contas —, o Poder Judiciário e o Ministério Público, bem como as respectivas administrações diretas, fundos, autarquias, fundações e empresas estatais dependentes."},
  D2:{ask:"Explique os conceitos de ente da Federação, empresa controlada e empresa estatal dependente.",
    hint:"São os três primeiros incisos do art. 2º. Diga o que separa a controlada da dependente e qual a exclusão expressa.",
    ref:"O art. 2º da Lei de Responsabilidade Fiscal define, para os efeitos da lei, três conceitos iniciais. Ente da Federação é a União, cada Estado, o Distrito Federal e cada Município, considerados individualmente. Empresa controlada é a sociedade cuja maioria do capital social com direito a voto pertença, direta ou indiretamente, a ente da Federação — não se exige a totalidade do capital, bastando a maioria votante, e o controle pode ser exercido de forma indireta. Empresa estatal dependente é a empresa controlada que receba do ente controlador recursos financeiros para pagamento de despesas com pessoal ou de custeio em geral ou de capital, excluídos, no último caso, aqueles provenientes de aumento de participação acionária. Daí decorre que toda empresa dependente é necessariamente controlada, mas nem toda controlada é dependente: a dependência exige o aporte de recursos do controlador para aquelas finalidades, e o simples aumento de participação acionária não a caracteriza. A distinção é relevante porque apenas as empresas estatais dependentes integram o alcance da lei, por força do art. 1º, § 3º, I, b."},
  D3:{ask:"Explique a Receita Corrente Líquida: composição, deduções e forma de apuração.",
    hint:"Diga o que entra, o que se deduz em cada esfera, o que o § 1º manda computar e como se apuram os doze meses.",
    ref:"A receita corrente líquida, definida no art. 2º, IV, da Lei de Responsabilidade Fiscal, é o somatório das receitas tributárias, de contribuições, patrimoniais, industriais, agropecuárias, de serviços, transferências correntes e outras receitas também correntes — vale dizer, apenas receitas correntes, de modo que receitas de capital não a integram. Desse somatório deduzem-se, na União, os valores transferidos aos Estados e Municípios por determinação constitucional ou legal e as contribuições previstas na alínea a do inciso I e no inciso II do art. 195 e no art. 239 da Constituição; nos Estados, as parcelas entregues aos Municípios por determinação constitucional; e, na União, nos Estados e nos Municípios, a contribuição dos servidores para o custeio do seu sistema de previdência e assistência social e as receitas provenientes da compensação financeira entre regimes previdenciários de que trata o art. 201, § 9º, da Constituição. Serão computados no cálculo os valores pagos e recebidos em decorrência da Lei Complementar nº 87/1996 e do fundo previsto pelo art. 60 do Ato das Disposições Constitucionais Transitórias, e não se consideram, na receita corrente líquida do Distrito Federal e dos Estados do Amapá e de Roraima, os recursos recebidos da União para atendimento das despesas do art. 21, § 1º, V, da Constituição. Por fim, a receita corrente líquida é apurada somando-se as receitas arrecadadas no mês em referência e nos onze anteriores, excluídas as duplicidades, isto é, por doze meses móveis."},
  D4:{ask:"Explique por que a Receita Corrente Líquida é o conceito central da LRF.",
    hint:"Liste os limites que tomam a RCL como base e explique o efeito prático de errar seu cálculo.",
    ref:"A receita corrente líquida é o conceito central da Lei de Responsabilidade Fiscal porque funciona como base de cálculo dos principais limites que a lei impõe. É sobre ela que incidem os limites de despesa total com pessoal, repartidos entre os Poderes e órgãos na forma dos arts. 19 e 20; os limites de dívida consolidada e mobiliária fixados pelo Senado Federal com fundamento nos arts. 30 e 31; os limites de operações de crédito, inclusive por antecipação de receita orçamentária; e os limites de concessão de garantias. Também é em função dela que se calculam os percentuais de alerta e os limites prudencial e máximo de que trata o art. 22 e o art. 59, § 1º. A consequência prática é direta: um erro na apuração da receita corrente líquida contamina simultaneamente todos esses limites, podendo levar o ente a ultrapassá-los sem perceber e a incorrer nas restrições e sanções institucionais previstas na própria lei. Daí a importância da regra de apuração por doze meses móveis, que evita distorções sazonais, e das deduções obrigatórias, que impedem a dupla contagem de recursos que o ente arrecada mas não retém."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  E1:[
    sl("O que a LRF é",
      '<div class="box"><span class="bl">LC nº 101/2000, art. 1º, caput</span><p>“Esta Lei Complementar estabelece <b>normas de finanças públicas voltadas para a responsabilidade na gestão fiscal</b>, com amparo no <b>Capítulo II do Título VI da Constituição</b>.”</p></div>'+
      '<p>O Capítulo II do Título VI é o capítulo <span class="key">“Das Finanças Públicas”</span>. O art. 163 da CF exige <b>lei complementar</b> para dispor sobre finanças públicas — a LRF é uma delas, ao lado da Lei nº 4.320/1964, recepcionada com status de lei complementar.</p>'+
      '<div class="box trap"><span class="bl">A LRF não revogou a Lei 4.320</span><p>Elas convivem. A <b>4.320</b> traz normas gerais de <b>direito financeiro</b> e contabilidade pública; a <b>LRF</b> trata da <b>responsabilidade na gestão fiscal</b>. Item que afirme revogação é falso.</p></div>'),
    sl("O conceito de responsabilidade na gestão fiscal",
      '<div class="box"><span class="bl">Art. 1º, § 1º</span>'+
      '<p>“A responsabilidade na gestão fiscal pressupõe a <b>ação planejada e transparente</b>, em que se <b>previnem riscos</b> e <b>corrigem desvios</b> capazes de afetar o equilíbrio das contas públicas, mediante o <b>cumprimento de metas de resultados entre receitas e despesas</b> e a <b>obediência a limites e condições</b> no que tange a…”</p></div>'+
      '<div class="box trap"><span class="bl">A inversão preferida da banca</span><p>Trocar para “<b>corrigem riscos</b> e <b>previnem desvios</b>”. Risco é futuro — <b>previne-se</b>. Desvio já ocorreu — <b>corrige-se</b>.</p></div>'+
      '<div class="box tip"><span class="bl">São duas exigências, não uma</span><p><b>Metas</b> de resultados entre receitas e despesas <b>E</b> <b>limites e condições</b>. Item que dispense uma das duas é falso.</p></div>'),
    sl("Os seis itens sujeitos a limites e condições",
      '<div class="box"><span class="bl">Art. 1º, § 1º, parte final</span>'+
      '<ul><li><b>R</b>enúncia de receita;</li>'+
      '<li><b>G</b>eração de despesas com pessoal, da seguridade social e outras;</li>'+
      '<li><b>D</b>ívidas consolidada e mobiliária;</li>'+
      '<li><b>O</b>perações de crédito, inclusive por antecipação de receita;</li>'+
      '<li><b>G</b>arantia (concessão de);</li>'+
      '<li><b>I</b>nscrição em Restos a Pagar.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Mnemônico</span><p><b>R · G · D · O · G · I</b>. Cada um desses seis vira um capítulo próprio da lei mais adiante — e a inscrição em Restos a Pagar é justamente o art. 42, que você já viu no módulo 10 de AFO.</p></div>'),
    sl("A quem a lei obriga",
      '<div class="box"><span class="bl">Art. 1º, § 2º</span><p>As disposições obrigam a <b>União, os Estados, o Distrito Federal e os Municípios</b>.</p></div>'+
      '<div class="box"><span class="bl">Art. 1º, § 3º, I, a — os Poderes e órgãos</span>'+
      '<ul><li>O <b>Poder Executivo</b>;</li>'+
      '<li>O <b>Poder Legislativo</b>, neste abrangidos os <b>Tribunais de Contas</b>;</li>'+
      '<li>O <b>Poder Judiciário</b>;</li>'+
      '<li>O <b>Ministério Público</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Onde ficam os Tribunais de Contas</span><p>No <b>Poder Legislativo</b>. A banca os coloca no Judiciário ou como órgão autônomo — nas duas hipóteses, item falso.</p></div>'+
      '<div class="box"><span class="bl">Art. 1º, § 3º, I, b — as entidades</span><p>As respectivas <b>administrações diretas, fundos, autarquias, fundações e empresas estatais dependentes</b>.</p></div>'+
      '<div class="box"><span class="bl">§ 3º, II e III</span>'+
      '<ul><li>Nas referências a <b>Estados</b>, entende-se considerado o <b>DF</b>;</li>'+
      '<li>Em <b>Tribunais de Contas</b> estão incluídos o <b>TCU</b>, o <b>TCE</b> e, <b>quando houver</b>, o <b>TCM</b> (dos Municípios e do Município).</li></ul></div>')
  ],
  E2:[
    sl("Ente da Federação e empresa controlada",
      '<div class="box"><span class="bl">Art. 2º, I — ente da Federação</span><p>A <b>União</b>, <b>cada Estado</b>, o <b>Distrito Federal</b> e <b>cada Município</b>.</p></div>'+
      '<div class="box"><span class="bl">Art. 2º, II — empresa controlada</span><p>Sociedade cuja <b>maioria do capital social com direito a voto</b> pertença, <b>direta ou indiretamente</b>, a ente da Federação.</p></div>'+
      '<div class="box trap"><span class="bl">Dois detalhes que a banca mexe</span>'+
      '<ul><li>Não é <b>totalidade</b> do capital — é a <b>maioria</b>;</li>'+
      '<li>Não é só o capital total — é o capital <b>com direito a voto</b>;</li>'+
      '<li>O controle vale <b>direta ou indiretamente</b>.</li></ul></div>'),
    sl("Empresa estatal dependente",
      '<div class="box"><span class="bl">Art. 2º, III</span>'+
      '<p>Empresa <b>controlada</b> que receba do <b>ente controlador</b> recursos financeiros para pagamento de despesas com <b>pessoal</b> ou de <b>custeio em geral</b> ou <b>de capital</b>, <b>excluídos</b>, no último caso, aqueles provenientes de <b>aumento de participação acionária</b>.</p></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Controlada</span><span class="cd">Maioria do capital votante do ente. <b>Pode ou não</b> ser dependente.</span></div>'+
      '<div class="chip"><span class="cn">Dependente</span><span class="cd">Controlada <b>+</b> recebe recursos do controlador para pessoal, custeio ou capital.</span></div></div>'+
      '<div class="box tip"><span class="bl">Por que isso importa</span><p>Só as <b>dependentes</b> entram no alcance da LRF (art. 1º, § 3º, I, b) — e, por consequência, na consolidação das contas, nos limites de pessoal e no cálculo da dívida do ente.</p></div>'+
      '<div class="box trap"><span class="bl">A pegadinha do aumento de participação acionária</span><p>Aporte para <b>despesa de capital</b> torna a empresa dependente — <b>salvo</b> se vier de <b>aumento de participação acionária</b>. Esse aporte é investimento do acionista, não subvenção.</p></div>')
  ],
  E3:[
    sl("Receita Corrente Líquida — o que entra",
      '<div class="box"><span class="bl">Art. 2º, IV, caput</span>'+
      '<p>Somatório das receitas <b>tributárias</b>, de <b>contribuições</b>, <b>patrimoniais</b>, <b>industriais</b>, <b>agropecuárias</b>, de <b>serviços</b>, <b>transferências correntes</b> e <b>outras receitas também correntes</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Só receita corrente</b></span><p>Repare no “<b>também correntes</b>” no fim da lista: <b>receitas de capital não entram</b> — nem operações de crédito, nem alienação de bens, nem amortização de empréstimos concedidos.</p></div>'),
    sl("As deduções, esfera por esfera",
      '<div class="box"><span class="bl">a) Na União</span>'+
      '<ul><li>Os valores <b>transferidos aos Estados e Municípios</b> por determinação constitucional ou legal;</li>'+
      '<li>As contribuições do <b>art. 195, I, a, e II</b> da CF (patronal e do trabalhador para a previdência);</li>'+
      '<li>A contribuição do <b>art. 239</b> da CF (PIS/PASEP).</li></ul></div>'+
      '<div class="box"><span class="bl">b) Nos Estados</span><p>As <b>parcelas entregues aos Municípios</b> por determinação constitucional.</p></div>'+
      '<div class="box"><span class="bl">c) Na União, nos Estados e nos Municípios</span>'+
      '<ul><li>A <b>contribuição dos servidores</b> para o custeio do seu sistema de <b>previdência e assistência social</b>;</li>'+
      '<li>As receitas provenientes da <b>compensação financeira</b> entre regimes previdenciários (CF, art. 201, § 9º).</li></ul></div>'+
      '<div class="box tip"><span class="bl">A lógica das deduções</span><p>Deduz-se o que o ente <b>arrecada mas não retém</b> (repasses obrigatórios) e o que é <b>receita vinculada de terceiros</b> (contribuição previdenciária do servidor). O que sobra é a receita de que ele efetivamente dispõe.</p></div>'),
    sl("Regras especiais e forma de apuração",
      '<div class="box"><span class="bl">Art. 2º, § 1º</span><p><b>Serão computados</b> no cálculo os valores <b>pagos e recebidos</b> em decorrência da <b>LC nº 87/1996</b> (Lei Kandir) e do <b>fundo do art. 60 do ADCT</b>.</p></div>'+
      '<div class="box"><span class="bl">Art. 2º, § 2º</span><p><b>Não serão considerados</b> na RCL do <b>Distrito Federal</b> e dos Estados do <b>Amapá</b> e de <b>Roraima</b> os recursos recebidos da União para as despesas do <b>art. 21, § 1º, V, da CF</b> — organização e manutenção da polícia, do corpo de bombeiros e das carreiras civis.</p></div>'+
      '<div class="box trap"><span class="bl">Art. 2º, § 3º — os doze meses móveis</span>'+
      '<p>A RCL será apurada somando-se as receitas arrecadadas <b>no mês em referência e nos onze anteriores</b>, <b>excluídas as duplicidades</b>.</p>'+
      '<p>Não é o exercício civil, não é o exercício anterior: é uma <b>janela móvel de 12 meses</b> que anda a cada apuração.</p></div>'+
      '<div class="box tip"><span class="bl">Por que a RCL é o conceito-rei da LRF</span>'+
      '<p>É a base de cálculo de praticamente todos os limites: <b>despesa com pessoal</b> (arts. 19 e 20), <b>dívida consolidada e mobiliária</b> (arts. 30 e 31), <b>operações de crédito</b>, <b>garantias</b> e os <b>limites de alerta e prudencial</b>. Errar a RCL contamina todos eles de uma vez.</p></div>')
  ]
};

var EX = {
B1:{t:"wordbank", instr:"Monte o objeto da LRF (art. 1º, caput)",
  target:["normas","de","finanças","públicas","voltadas","para","a","responsabilidade","na","gestão","fiscal"],
  extra:["contabilidade","orçamento","tributária"],
  why:"Com amparo no Capítulo II do Título VI da Constituição."},

B2:{t:"gap", instr:"Complete a frase",
  before:"A responsabilidade na gestão fiscal pressupõe a ação planejada e transparente, em que se ",
  after:" capazes de afetar o equilíbrio das contas públicas.",
  options:["previnem riscos e corrigem desvios","corrigem riscos e previnem desvios","preveem riscos e evitam desvios"],
  answer:0,
  why:"Risco é futuro, previne-se; desvio já ocorreu, corrige-se. A inversão é o erro mais plantado do artigo."},

B3:{t:"multi", instr:"Marque os itens sujeitos a limites e condições pelo art. 1º, § 1º",
  options:["Renúncia de receita",
           "Geração de despesas com pessoal, da seguridade social e outras",
           "Dívidas consolidada e mobiliária",
           "Operações de crédito, inclusive por antecipação de receita",
           "Concessão de garantia",
           "Inscrição em Restos a Pagar",
           "Abertura de créditos extraordinários"],
  answers:[0,1,2,3,4,5],
  why:"São exatamente seis. Créditos extraordinários não estão na lista."},

B4:{t:"mc", instr:"O equilíbrio das contas públicas, na LRF, é buscado mediante:",
  options:["Cumprimento de metas de resultados entre receitas e despesas e obediência a limites e condições",
           "Apenas a obediência a limites e condições",
           "Apenas o cumprimento de metas de resultados",
           "Aprovação das contas pelo Tribunal de Contas"],
  answer:0,
  why:"São as <b>duas</b> exigências, cumulativas."},

B5:{t:"gap", instr:"Complete a frase",
  before:"As disposições da LRF obrigam ", after:".",
  options:["a União, os Estados, o Distrito Federal e os Municípios",
           "apenas a União e os Estados","apenas os entes que aderirem por lei própria"],
  answer:0,
  why:"Art. 1º, § 2º — alcance nacional, sem exceção."},

B6:{t:"sort", instr:"Segundo a LRF, a que Poder pertence cada órgão?",
  buckets:["Poder Legislativo","Poder Judiciário","Não é Poder — órgão próprio"],
  items:[["Tribunal de Contas da União",0],["Tribunal de Contas do Estado",0],
         ["Câmara dos Deputados",0],["Tribunais e juízes",1],["Ministério Público",2]],
  why:"Os Tribunais de Contas estão <b>abrangidos no Legislativo</b> (art. 1º, § 3º, I, a); o MP é citado em separado."},

B7:{t:"multi", instr:"Marque as entidades compreendidas nas referências aos entes (art. 1º, § 3º, I, b)",
  options:["Administrações diretas","Fundos","Autarquias","Fundações","Empresas estatais dependentes",
           "Empresas estatais independentes","Concessionárias de serviço público"],
  answers:[0,1,2,3,4],
  why:"As estatais <b>independentes</b> e as concessionárias ficam de fora."},

B8:{t:"mc", instr:"Na expressão “Tribunais de Contas”, a LRF inclui o Tribunal de Contas dos Municípios:",
  options:["Quando houver","Sempre","Nunca","Apenas nos Estados com mais de 10 milhões de habitantes"],
  answer:0,
  why:"Art. 1º, § 3º, III — a ressalva “quando houver” é literal."},

B9:{t:"gap", instr:"Complete a frase",
  before:"Nas referências a Estados, entende-se considerado ", after:".",
  options:["o Distrito Federal","a União","os Municípios"], answer:0,
  why:"Art. 1º, § 3º, II."},

B10:{t:"mc", instr:"Entende-se por ente da Federação, para a LRF:",
  options:["A União, cada Estado, o Distrito Federal e cada Município",
           "Apenas a União, os Estados e o Distrito Federal",
           "A União e os Estados, considerados em conjunto",
           "Cada Poder de cada esfera de governo"],
  answer:0,
  why:"Art. 2º, I — note o “cada”, que individualiza Estados e Municípios."},

B11:{t:"wordbank", instr:"Monte o conceito de empresa controlada (art. 2º, II)",
  target:["maioria","do","capital","social","com","direito","a","voto"],
  extra:["totalidade","sem","preferencial"],
  why:"Pertencente, direta ou indiretamente, a ente da Federação."},

B12:{t:"multi", instr:"Marque o que caracteriza a empresa estatal dependente",
  options:["É empresa controlada",
           "Recebe do ente controlador recursos para despesas com pessoal",
           "Recebe do ente controlador recursos para custeio em geral",
           "Recebe do ente controlador recursos para despesas de capital",
           "Recebe recursos provenientes de aumento de participação acionária",
           "Tem a totalidade do capital social em poder do ente"],
  answers:[0,1,2,3],
  why:"O aumento de participação acionária é <b>expressamente excluído</b>; e o controle exige apenas a maioria votante."},

B13:{t:"match", instr:"Correlacione o conceito à sua definição",
  pairs:[["Ente da Federação","A União, cada Estado, o DF e cada Município"],
         ["Empresa controlada","Maioria do capital votante pertence a ente da Federação"],
         ["Empresa estatal dependente","Controlada que recebe recursos do controlador para pessoal, custeio ou capital"]]},

B14:{t:"sort", instr:"A empresa é dependente para a LRF?",
  buckets:["É dependente","Não é dependente"],
  items:[["Controlada que recebe aporte para folha de pessoal",0],
         ["Controlada que recebe aporte para custeio em geral",0],
         ["Controlada que recebe aporte para investimento em obra",0],
         ["Controlada que recebe apenas aumento de participação acionária",1],
         ["Controlada que se sustenta com receita própria",1]],
  why:"A dependência nasce do <b>aporte do controlador</b>, salvo aumento de participação acionária."},

B15:{t:"wordbank", instr:"Monte a definição de Receita Corrente Líquida",
  target:["somatório","das","receitas","tributárias",",","de","contribuições",",","patrimoniais"],
  extra:["de","capital","operações","crédito"],
  why:"A lista segue com industriais, agropecuárias, de serviços, transferências correntes e outras também correntes."},

B16:{t:"multi", instr:"Marque as receitas que integram a RCL",
  options:["Tributárias","De contribuições","Patrimoniais","Industriais","Agropecuárias",
           "De serviços","Transferências correntes",
           "Operações de crédito","Alienação de bens"],
  answers:[0,1,2,3,4,5,6],
  why:"Operações de crédito e alienação de bens são receitas <b>de capital</b> — fora da RCL."},

B17:{t:"sort", instr:"Em qual esfera se faz esta dedução da RCL?",
  buckets:["Só na União","Só nos Estados","Na União, nos Estados e nos Municípios"],
  items:[["Valores transferidos a Estados e Municípios por determinação constitucional ou legal",0],
         ["Contribuições do art. 195, I, a, e II, e do art. 239 da CF",0],
         ["Parcelas entregues aos Municípios por determinação constitucional",1],
         ["Contribuição dos servidores para o custeio do seu sistema de previdência",2],
         ["Compensação financeira entre regimes previdenciários",2]],
  why:"Alíneas a, b e c do art. 2º, IV."},

B18:{t:"gap", instr:"Complete a frase",
  before:"A RCL será apurada somando-se as receitas arrecadadas no mês em referência e ",
  after:", excluídas as duplicidades.",
  options:["nos onze anteriores","no exercício anterior","nos cinco anteriores"],
  answer:0,
  why:"São <b>doze meses móveis</b> — art. 2º, § 3º."},

B19:{t:"mc", instr:"Os valores pagos e recebidos em decorrência da Lei Kandir (LC 87/1996) e do fundo do art. 60 do ADCT:",
  options:["Serão computados no cálculo da RCL","Serão deduzidos da RCL",
           "Não têm efeito sobre a RCL","Só entram na RCL da União"],
  answer:0,
  why:"Art. 2º, § 1º — a lei manda <b>computar</b>, e não deduzir."},

B20:{t:"multi", instr:"Marque os limites que tomam a RCL como base de cálculo",
  options:["Despesa total com pessoal","Dívida consolidada","Dívida mobiliária",
           "Operações de crédito","Concessão de garantias",
           "Valor do salário mínimo","Alíquota do imposto de renda"],
  answers:[0,1,2,3,4],
  why:"Daí a centralidade da RCL: um erro nela contamina todos esses limites de uma vez."},

B21:{t:"mc", instr:"Não são considerados na RCL do DF e dos Estados do Amapá e de Roraima:",
  options:["Os recursos recebidos da União para as despesas do art. 21, § 1º, V, da CF",
           "As transferências do FUNDEB","As receitas de contribuições previdenciárias",
           "Os valores da Lei Kandir"],
  answer:0,
  why:"Art. 2º, § 2º — recursos federais para polícia, bombeiros e carreiras civis desses entes."},

B22:{t:"order", instr:"Ordene a construção lógica do art. 1º",
  items:["Objeto: normas de finanças públicas para a responsabilidade na gestão fiscal",
         "Pressuposto: ação planejada e transparente",
         "Meio: metas de resultados e obediência a limites e condições",
         "Alcance: União, Estados, DF e Municípios",
         "Detalhamento: Poderes, órgãos e entidades abrangidos"],
  why:"Caput, § 1º e §§ 2º e 3º, nessa sequência."},

B23:{t:"gap", instr:"Complete a frase",
  before:"O Poder Legislativo, para efeito da LRF, abrange ", after:".",
  options:["os Tribunais de Contas","o Ministério Público","as agências reguladoras"],
  answer:0,
  why:"Art. 1º, § 3º, I, a."},

B24:{t:"mc", instr:"A LRF encontra amparo constitucional em qual capítulo?",
  options:["Capítulo II do Título VI — Das Finanças Públicas",
           "Capítulo I do Título VI — Do Sistema Tributário Nacional",
           "Capítulo VII do Título III — Da Administração Pública",
           "Capítulo IV do Título IV — Das Funções Essenciais à Justiça"],
  answer:0,
  why:"É o art. 163 da CF que exige lei complementar sobre finanças públicas."},

B25:{t:"multi", instr:"Marque o que é correto sobre a relação entre a LRF e a Lei nº 4.320/1964",
  options:["Convivem, com objetos distintos",
           "A Lei 4.320 trata de normas gerais de direito financeiro e contabilidade pública",
           "A LRF trata da responsabilidade na gestão fiscal",
           "A LRF não revogou a Lei 4.320",
           "A LRF revogou integralmente a Lei 4.320",
           "A Lei 4.320 perdeu vigência em 2000"],
  answers:[0,1,2,3],
  why:"As duas últimas são falsas — item clássico de prova."},

B26:{t:"gap", instr:"Complete a frase",
  before:"Empresa estatal dependente é a controlada que recebe do ente controlador recursos para pessoal, custeio ou capital, excluídos, no último caso, os provenientes de ",
  after:".",
  options:["aumento de participação acionária","transferências voluntárias","operações de crédito"],
  answer:0,
  why:"Aporte do acionista para aumentar participação é investimento, não subvenção."},

B27:{t:"sort", instr:"Integra a Receita Corrente Líquida?",
  buckets:["Integra (soma)","Deduz-se","Fica de fora"],
  items:[["Receita tributária",0],["Transferências correntes",0],
         ["Contribuição previdenciária do servidor",1],
         ["Parcelas do Estado entregues aos Municípios",1],
         ["Operação de crédito",2],["Alienação de imóvel",2]],
  why:"Somam-se as correntes, deduz-se o que não se retém, e as de capital não entram."},

B28:{t:"mc", instr:"A apuração da RCL em doze meses móveis serve para:",
  options:["Evitar distorções sazonais na arrecadação",
           "Antecipar a receita do exercício seguinte",
           "Cumprir o princípio da anualidade",
           "Permitir a abertura de créditos adicionais"],
  answer:0,
  why:"A janela móvel suaviza picos e vales mensais de arrecadação."}
};

for(var i=0;i<QS.length;i++) EX["C"+i]={t:"ce", qi:i};

var KIT = {
  D1:{tema:"Objeto e alcance da LRF",
    bases:["LC nº 101/2000, art. 1º, caput e §§ 1º a 3º",
           "CF/1988, art. 163 — lei complementar sobre finanças públicas",
           "CF/1988, Título VI, Capítulo II — Das Finanças Públicas",
           "Lei nº 4.320/1964 — normas gerais de direito financeiro (convivência)"],
    ouro:["normas de finanças públicas voltadas para a responsabilidade na gestão fiscal",
          "ação planejada e transparente","previnem riscos e corrigem desvios",
          "equilíbrio das contas públicas","metas de resultados entre receitas e despesas",
          "limites e condições","renúncia de receita","inscrição em Restos a Pagar",
          "Tribunais de Contas abrangidos no Poder Legislativo","empresas estatais dependentes"],
    abertura:"A Lei Complementar nº 101/2000 estabelece normas de finanças públicas voltadas para a responsabilidade na gestão fiscal, com amparo no Capítulo II do Título VI da Constituição Federal, entendendo-se por responsabilidade na gestão fiscal, na dicção do seu art. 1º, § 1º, a ação planejada e transparente em que se previnem riscos e corrigem desvios capazes de afetar o equilíbrio das contas públicas.",
    evite:"Não escreva “corrigem riscos e previnem desvios”, nem situe os Tribunais de Contas fora do Poder Legislativo. São os dois erros que o examinador procura primeiro."},
  D2:{tema:"Ente, empresa controlada e estatal dependente",
    bases:["LC nº 101/2000, art. 2º, I, II e III",
           "LC nº 101/2000, art. 1º, § 3º, I, b — alcance às dependentes",
           "Lei nº 6.404/1976, art. 243, § 2º — conceito societário de controlada",
           "MCASP — consolidação das contas e estatais dependentes"],
    ouro:["a União, cada Estado, o Distrito Federal e cada Município",
          "maioria do capital social com direito a voto","direta ou indiretamente",
          "recursos financeiros do ente controlador","despesas com pessoal",
          "custeio em geral","de capital","excluídos os provenientes de aumento de participação acionária"],
    abertura:"Para os efeitos da Lei de Responsabilidade Fiscal, entende-se por ente da Federação a União, cada Estado, o Distrito Federal e cada Município; por empresa controlada, a sociedade cuja maioria do capital social com direito a voto pertença, direta ou indiretamente, a ente da Federação; e por empresa estatal dependente, a empresa controlada que receba do ente controlador recursos financeiros para pagamento de despesas com pessoal ou de custeio em geral ou de capital.",
    evite:"Não afirme que toda empresa controlada é dependente, nem exija a totalidade do capital para caracterizar o controle. E não esqueça a exclusão do aumento de participação acionária."},
  D3:{tema:"Receita Corrente Líquida",
    bases:["LC nº 101/2000, art. 2º, IV e §§ 1º a 3º",
           "CF/1988, art. 195, I, a, e II, e art. 239 — deduções na União",
           "CF/1988, art. 201, § 9º — compensação financeira entre regimes",
           "LC nº 87/1996 e ADCT, art. 60 — valores computados",
           "Manual de Demonstrativos Fiscais — apuração da RCL"],
    ouro:["somatório das receitas tributárias, de contribuições, patrimoniais",
          "industriais, agropecuárias, de serviços, transferências correntes",
          "outras receitas também correntes","valores transferidos aos Estados e Municípios",
          "parcelas entregues aos Municípios","contribuição dos servidores",
          "compensação financeira","no mês em referência e nos onze anteriores",
          "excluídas as duplicidades"],
    abertura:"Receita corrente líquida, nos termos do art. 2º, IV, da Lei de Responsabilidade Fiscal, é o somatório das receitas tributárias, de contribuições, patrimoniais, industriais, agropecuárias, de serviços, transferências correntes e outras receitas também correntes, deduzidas as parcelas indicadas nas alíneas a, b e c do mesmo inciso, apurada somando-se as receitas arrecadadas no mês em referência e nos onze anteriores, excluídas as duplicidades.",
    evite:"Não inclua receitas de capital na RCL nem afirme que ela é apurada pelo exercício financeiro anterior. A janela é de <b>doze meses móveis</b>."},
  D4:{tema:"A RCL como base dos limites fiscais",
    bases:["LC nº 101/2000, arts. 19 e 20 — limites de despesa com pessoal",
           "LC nº 101/2000, arts. 22 e 23 — limite prudencial e recondução",
           "LC nº 101/2000, arts. 30 e 31 — limites de dívida",
           "LC nº 101/2000, art. 59, § 1º — alertas dos Tribunais de Contas",
           "Resolução do Senado Federal nº 40/2001 e nº 43/2001"],
    ouro:["base de cálculo dos limites","despesa total com pessoal",
          "dívida consolidada e mobiliária","operações de crédito","concessão de garantias",
          "limite de alerta","limite prudencial","doze meses móveis"],
    abertura:"A receita corrente líquida ocupa posição central na sistemática da Lei de Responsabilidade Fiscal por funcionar como base de cálculo dos principais limites fiscais — despesa total com pessoal, dívida consolidada e mobiliária, operações de crédito e concessão de garantias —, de modo que sua correta apuração condiciona a aferição de todos eles.",
    evite:"Não apresente a RCL como mero conceito contábil. Na discursiva, mostre a função dela: é o denominador de quase todos os percentuais da lei."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. Tema de abertura da LRF: quase todo literal. Cada definição transcrita com precisão é ponto.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre as disposições preliminares da Lei Complementar nº 101/2000, disserte necessariamente sobre:</p>'+
  '<ol><li>o objeto da lei, seu fundamento constitucional e o conceito de responsabilidade na gestão fiscal;</li>'+
  '<li>o alcance subjetivo da lei, indicando Poderes, órgãos e entidades abrangidos;</li>'+
  '<li>o conceito de receita corrente líquida, suas deduções e sua forma de apuração, explicando sua importância no sistema da lei.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>A Lei Complementar nº 101/2000 <b>estabelece normas de finanças públicas voltadas para a responsabilidade na gestão fiscal</b>, com amparo no <b>Capítulo II do Título VI da Constituição Federal</b>, que trata das finanças públicas e cujo art. 163 reclama disciplina por lei complementar. Não revogou a Lei nº 4.320/1964: enquanto esta veicula normas gerais de direito financeiro e de contabilidade pública, a Lei de Responsabilidade Fiscal ocupa-se da <b>responsabilidade na gestão fiscal</b>, assim entendida, nos termos do seu art. 1º, § 1º, a <b>ação planejada e transparente</b>, em que se <b>previnem riscos</b> e <b>corrigem desvios</b> capazes de afetar o equilíbrio das contas públicas, mediante o <b>cumprimento de metas de resultados entre receitas e despesas</b> e a <b>obediência a limites e condições</b> no que tange a renúncia de receita, geração de despesas com pessoal, da seguridade social e outras, dívidas consolidada e mobiliária, operações de crédito — inclusive por antecipação de receita —, concessão de garantia e inscrição em Restos a Pagar. São, portanto, duas exigências cumulativas: metas de resultado e limites de gasto e endividamento.</p>'+
  '<p>Quanto ao <b>alcance subjetivo</b>, o art. 1º, § 2º, dispõe que as disposições da lei obrigam <b>a União, os Estados, o Distrito Federal e os Municípios</b>. O § 3º detalha esse alcance: nas referências aos entes estão compreendidos o <b>Poder Executivo</b>, o <b>Poder Legislativo</b> — neste abrangidos os <b>Tribunais de Contas</b> —, o <b>Poder Judiciário</b> e o <b>Ministério Público</b>, bem como as respectivas <b>administrações diretas, fundos, autarquias, fundações e empresas estatais dependentes</b>; nas referências a Estados entende-se considerado o <b>Distrito Federal</b>; e na expressão Tribunais de Contas incluem-se o Tribunal de Contas da União, o Tribunal de Contas do Estado e, <b>quando houver</b>, o Tribunal de Contas dos Municípios e o Tribunal de Contas do Município. Cumpre distinguir, nesse ponto, as figuras do art. 2º: <b>empresa controlada</b> é a sociedade cuja <b>maioria do capital social com direito a voto</b> pertença, direta ou indiretamente, a ente da Federação; <b>empresa estatal dependente</b> é a controlada que receba do ente controlador recursos financeiros para pagamento de despesas com pessoal, de custeio em geral ou de capital, <b>excluídos</b>, neste último caso, os provenientes de <b>aumento de participação acionária</b>. Apenas as dependentes integram o alcance da lei, de sorte que nem toda controlada a ela se submete.</p>'+
  '<p>A <b>receita corrente líquida</b>, definida no art. 2º, IV, é o <b>somatório das receitas tributárias, de contribuições, patrimoniais, industriais, agropecuárias, de serviços, transferências correntes e outras receitas também correntes</b> — apenas receitas correntes, portanto, excluídas as de capital. Dela se deduzem, <b>na União</b>, os valores transferidos aos Estados e Municípios por determinação constitucional ou legal e as contribuições dos arts. 195, I, a, e II, e 239 da Constituição; <b>nos Estados</b>, as parcelas entregues aos Municípios por determinação constitucional; e, <b>na União, nos Estados e nos Municípios</b>, a contribuição dos servidores para o custeio do seu sistema de previdência e assistência social e as receitas provenientes da compensação financeira entre regimes previdenciários. Computam-se, ainda, os valores pagos e recebidos em decorrência da Lei Complementar nº 87/1996 e do fundo do art. 60 do ADCT, e não se consideram, na receita do Distrito Federal e dos Estados do Amapá e de Roraima, os recursos federais destinados às despesas do art. 21, § 1º, V, da Constituição. Sua apuração faz-se somando as receitas arrecadadas <b>no mês em referência e nos onze anteriores, excluídas as duplicidades</b>.</p>'+
  '<p>A importância do conceito é estrutural: a receita corrente líquida é a <b>base de cálculo</b> dos limites de despesa total com pessoal, de dívida consolidada e mobiliária, de operações de crédito e de concessão de garantias, além dos limites de alerta e prudencial. Erro em sua apuração contamina simultaneamente todos esses parâmetros, razão pela qual a lei impôs a janela de doze meses móveis, que neutraliza distorções sazonais, e as deduções obrigatórias, que impedem a contagem de recursos que o ente arrecada mas não retém.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> objeto literal, o Capítulo II do Título VI, a definição do § 1º sem inverter risco/desvio e os seis itens sujeitos a limites.</li>'+
  '<li><b>Item 2:</b> os quatro Poderes/órgãos com os Tribunais de Contas no Legislativo, as cinco entidades da alínea b e a distinção controlada × dependente.</li>'+
  '<li><b>Item 3:</b> a lista de receitas correntes, as deduções por esfera e a apuração em doze meses móveis.</li>'+
  '<li><b>Fecho:</b> explicar a RCL como denominador dos limites separa quem decorou de quem entendeu o sistema.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Responda item a item, citando o dispositivo entre parênteses.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>Ao consolidar as contas do exercício, o setor contábil de determinado Estado adotou os seguintes procedimentos:</p>'+
  '<ol><li>excluiu da consolidação uma sociedade de economia mista da qual o Estado detém 60% do capital votante e que se sustenta integralmente com receita própria;</li>'+
  '<li>excluiu também uma empresa controlada que recebeu do Estado, no exercício, aporte destinado ao pagamento da folha de pessoal;</li>'+
  '<li>ao calcular a receita corrente líquida, somou as receitas correntes do exercício civil e acrescentou o produto da alienação de um imóvel;</li>'+
  '<li>não deduziu da receita corrente líquida as parcelas entregues aos Municípios por determinação constitucional nem a contribuição previdenciária dos servidores;</li>'+
  '<li>classificou o Tribunal de Contas do Estado como órgão do Poder Judiciário para fins de apuração dos limites de pessoal.</li></ol>'+
  '<p><b>Pergunta-se:</b> avalie cada procedimento à luz da Lei Complementar nº 101/2000.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1. Exclusão da sociedade autossustentável.</b> <b>Correto.</b> Detendo o Estado a maioria do capital votante, trata-se de <b>empresa controlada</b> (art. 2º, II); mas, não recebendo do controlador recursos para pessoal, custeio ou capital, <b>não é estatal dependente</b> (art. 2º, III) e, por isso, não integra o alcance da lei (art. 1º, § 3º, I, b).</p>'+
  '<p><b>2. Exclusão da controlada que recebeu aporte para folha.</b> <b>Incorreto.</b> O aporte do controlador destinado ao pagamento de <b>despesas com pessoal</b> caracteriza a <b>empresa estatal dependente</b> (art. 2º, III), que deve ser abrangida pela lei e integrar a consolidação. Note-se que apenas os recursos provenientes de <b>aumento de participação acionária</b>, e somente quanto a despesas de capital, são excluídos desse conceito.</p>'+
  '<p><b>3. Apuração da RCL.</b> <b>Duplamente incorreto.</b> Primeiro, a receita corrente líquida é apurada somando-se as receitas arrecadadas <b>no mês em referência e nos onze anteriores</b>, excluídas as duplicidades (art. 2º, § 3º), e não pelo exercício civil. Segundo, o produto da <b>alienação de imóvel</b> é <b>receita de capital</b> e não integra o somatório, que alcança exclusivamente receitas correntes (art. 2º, IV).</p>'+
  '<p><b>4. Ausência de deduções.</b> <b>Incorreto.</b> Nos Estados deduzem-se obrigatoriamente as <b>parcelas entregues aos Municípios por determinação constitucional</b> (art. 2º, IV, b) e, em todas as esferas, a <b>contribuição dos servidores para o custeio do seu sistema de previdência e assistência social</b> (art. 2º, IV, c). A omissão infla artificialmente a RCL e, por consequência, os limites que dela derivam.</p>'+
  '<p><b>5. Classificação do Tribunal de Contas.</b> <b>Incorreto.</b> O art. 1º, § 3º, I, a, abrange os <b>Tribunais de Contas no Poder Legislativo</b>. A classificação equivocada distorce a repartição do limite de despesa com pessoal entre os Poderes.</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>Tratar <b>controlada</b> e <b>dependente</b> como sinônimos — os itens <b>1</b> e <b>2</b> testam exatamente essa diferença.</li>'+
  '<li>Somar receita de capital à RCL no item <b>3</b>, aproveitando que “alienação de bens” soa como receita do ente.</li>'+
  '<li>Usar o exercício civil em vez dos <b>doze meses móveis</b>.</li>'+
  '<li>Deslocar o Tribunal de Contas para o Judiciário — erro que reaparece nos arts. 19 e 20.</li></ul></div>';

var TEC = [["Caderno completo — Conhecimentos Específicos TJPR 2026","https://www.tecconcursos.com.br/questoes/cadernos/103216249","103216249"]];
var TECNOTA = "Use o seu caderno do TJPR e filtre pelo assunto <b>Disposições Preliminares (arts. 1º e 2º da LRF)</b> — são 25 questões catalogadas.";

var UNITS = [
  {n:1, title:"Objeto e alcance da lei", cvar:"u1", lessons:[
    {id:"A1", type:"teoria", title:"Objeto, conceito e alcance",        xp:10, data:"E1"},
    {id:"A2", type:"drill",  title:"Praticar · objeto da lei",          xp:20, data:["B1","B24","B25","C0","C30"]},
    {id:"A3", type:"drill",  title:"Praticar · responsabilidade fiscal", xp:25, data:["B2","B4","C1","C2","C3","C32"]},
    {id:"A4", type:"drill",  title:"Praticar · os seis limites",        xp:25, data:["B3","B22","C4","C5","C6","C33"]},
    {id:"A5", type:"drill",  title:"Praticar · a quem obriga",          xp:25, data:["B5","B6","B7","B23","C7","C8","C9","C10","C34"]},
    {id:"A6", type:"drill",  title:"Praticar · Tribunais de Contas e DF", xp:20, data:["B8","B9","C12","C13"]},
    {id:"A7", type:"flash",  title:"Flashcards · art. 1º",              xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12]},
    {id:"A8", type:"feynman",title:"Explique o objeto da LRF",          xp:30, data:"D1"}
  ]},
  {n:2, title:"Ente, controlada e dependente", cvar:"u2", lessons:[
    {id:"A10",type:"teoria", title:"Os três conceitos do art. 2º",      xp:10, data:"E2"},
    {id:"A11",type:"drill",  title:"Praticar · ente e controlada",      xp:20, data:["B10","B11","C14","C15","C16"]},
    {id:"A12",type:"drill",  title:"Praticar · estatal dependente",     xp:25, data:["B12","B14","B26","C17","C18","C19"]},
    {id:"A13",type:"drill",  title:"Praticar · correlacionar",          xp:20, data:["B13","C11"]},
    {id:"A14",type:"flash",  title:"Flashcards · art. 2º, I a III",     xp:15, data:[13,14,15,16,17]},
    {id:"A15",type:"feynman",title:"Explique controlada e dependente",  xp:30, data:"D2"}
  ]},
  {n:3, title:"Receita Corrente Líquida", cvar:"u3", lessons:[
    {id:"A17",type:"teoria", title:"Composição, deduções e apuração",   xp:10, data:"E3"},
    {id:"A18",type:"drill",  title:"Praticar · o que entra",            xp:25, data:["B15","B16","B27","C20","C21"]},
    {id:"A19",type:"drill",  title:"Praticar · as deduções",            xp:25, data:["B17","C22","C23","C24","C25"]},
    {id:"A20",type:"drill",  title:"Praticar · regras especiais",       xp:20, data:["B19","B21","C26","C27"]},
    {id:"A21",type:"drill",  title:"Praticar · doze meses móveis",      xp:25, data:["B18","B28","C28","C29"]},
    {id:"A22",type:"drill",  title:"Praticar · a RCL como base",        xp:25, data:["B20","C31"]},
    {id:"A23",type:"flash",  title:"Flashcards · RCL",                  xp:15, data:[18,19,20,21,22,23,24,25,26,27,28,29]},
    {id:"A24",type:"feynman",title:"Explique a RCL",                    xp:30, data:"D3"},
    {id:"A25",type:"feynman",title:"Explique a centralidade da RCL",    xp:30, data:"D4"}
  ]},
  {n:4, title:"Aplicação e prova", cvar:"u4", lessons:[
    {id:"A27",type:"leitura",title:"Discursiva resolvida",              xp:25, data:"disc"},
    {id:"A28",type:"leitura",title:"Estudo de caso resolvido",          xp:25, data:"caso"},
    {id:"Arev",type:"review",title:"Revisão geral das unidades",        xp:60, data:null},
    {id:"A29",type:"missao", title:"Missão TEC Concursos",              xp:15, data:null},
    {id:"A30",type:"prova",  title:"Simulado cronometrado",             xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo. É a literalidade do art. 1º, <i>caput</i>: a LC 101/2000 estabelece <b>normas de finanças públicas</b> voltadas para a responsabilidade na gestão fiscal, com amparo no <b>Capítulo II do Título VI</b> da Constituição.</p><p>O Resumo traz o quadro NÃO CONFUNDA que a banca explora: a LRF <b>estabelece normas de finanças públicas</b>; a Lei 4.320/1964 <b>estatui normas gerais de direito financeiro</b>. Trocar os verbos ou os objetos é a pegadinha.</p><p class='fb-fonte'>LRF — Radegondes · <i>Disposições Preliminares na LRF</i></p>",
1:"<p>Certo. Reproduz o art. 1º, § 1º, na ordem exata: ação planejada e transparente, em que se <b>previnem riscos</b> e <b>corrigem desvios</b> capazes de afetar o equilíbrio das contas públicas.</p><p>Guarde o par como está no esquema do Resumo: <b>riscos</b> se previnem (antes de acontecer); <b>desvios</b> se corrigem (depois que aconteceram). É exatamente esse par que a banca gosta de embaralhar.</p><p class='fb-fonte'>LRF — Radegondes · <i>Disposições Preliminares na LRF</i></p>",
2:"<p>Errado. A assertiva <b>inverteu os verbos</b>: o art. 1º, § 1º, diz que se <b>previnem riscos</b> e se <b>corrigem desvios</b>, e não o contrário.</p><p>Lógica para não errar: risco é algo que ainda pode acontecer, por isso se previne; desvio é algo que já aconteceu, por isso se corrige. O restante do texto (ação planejada e transparente, equilíbrio das contas públicas) está correto, e é justamente isso que torna a troca perigosa.</p><p class='fb-fonte'>LRF — Radegondes · <i>Disposições Preliminares na LRF</i></p>",
3:"<p>Certo. O art. 1º, § 1º, aponta os dois meios de alcançar o equilíbrio: o <b>cumprimento de metas de resultados entre receitas e despesas</b> e a <b>obediência a limites e condições</b>.</p><p>No esquema do Resumo, a ação planejada e transparente se desdobra em três blocos: prevenir riscos e corrigir desvios; cumprir metas de resultados; obedecer a limites e condições (renúncia de receita, despesas com pessoal e da seguridade social, dívidas, operações de crédito, garantias e Restos a Pagar).</p><p class='fb-fonte'>LRF — Radegondes · <i>Disposições Preliminares na LRF</i></p>",
4:"<p>Certo. A <b>renúncia de receita</b> é o primeiro item da lista de limites e condições do art. 1º, § 1º.</p><p>Lista completa do esquema do Resumo: renúncia de receita; geração de despesas com pessoal; geração de despesas da seguridade social e outras; dívidas consolidada e mobiliária; operações de crédito, inclusive por antecipação de receita; concessão de garantia; inscrição em Restos a Pagar. Mais adiante a lei detalha a renúncia no art. 14.</p><p class='fb-fonte'>LRF — Radegondes · <i>Disposições Preliminares na LRF</i></p>",
5:"<p>Certo. A <b>inscrição em Restos a Pagar</b> fecha a lista do art. 1º, § 1º, dos itens sujeitos a limites e condições.</p><p>No esquema do Resumo ela é o último item, depois da concessão de garantia. Dica de memorização pela ordem: renúncia, pessoal, seguridade, dívidas, operações de crédito, garantia e Restos a Pagar. A regra concreta sobre Restos a Pagar em fim de mandato aparece depois, no art. 42.</p><p class='fb-fonte'>LRF — Radegondes · <i>Disposições Preliminares na LRF</i></p>",
6:"<p>Certo. Literalidade do art. 1º, § 1º: estão submetidas a limites e condições as <b>dívidas consolidada e mobiliária</b> e as <b>operações de crédito, inclusive por antecipação de receita</b>.</p><p>Atenção ao <b>inclusive</b>: a operação de crédito por antecipação de receita (ARO) também está no rol, e o Resumo depois a detalha no art. 38. As duas espécies de dívida vêm juntas no mesmo item do esquema.</p><p class='fb-fonte'>LRF — Radegondes · <i>Disposições Preliminares na LRF</i></p>",
7:"<p>Errado. A LRF não se restringe à União e aos Estados: alcança <b>todos os entes federativos</b>.</p><p>O Resumo já abre dizendo que a LC 101/2000 estabelece regras e limites para as finanças públicas da <b>União, Estados, Distrito Federal e Municípios</b>. O próprio exemplo do material é municipal: os Municípios devem limitar os gastos com pessoal a no máximo <b>60% da RCL</b> (art. 19), sob pena de sanções como a suspensão de transferências voluntárias.</p><p class='fb-fonte'>LRF — Radegondes · <i>Conceitos Iniciais</i></p>",
8:"<p>Certo. É a regra de abrangência do art. 1º, § 3º, I, <i>a</i>: nas referências aos entes estão compreendidos o <b>Poder Executivo, o Poder Legislativo</b> (neste abrangidos os Tribunais de Contas), <b>o Poder Judiciário e o Ministério Público</b>.</p><p>O Resumo reflete essa amplitude em outros pontos: a limitação de empenho do art. 9º é promovida pelos <b>Poderes e pelo Ministério Público</b>, e o art. 20 reparte o limite de pessoal entre Legislativo, Judiciário, Executivo e MP.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 1º, § 3º, da LRF não é transcrito no material; conferido na letra da LC 101/2000.</p>",
9:"<p>Errado. Os Tribunais de Contas estão abrangidos no <b>Poder Legislativo</b>, e não no Judiciário.</p><p>O Resumo mostra isso na repartição do art. 20: <b>Legislativo, incluído o Tribunal de Contas da União</b> (2,5%), Legislativo incluído o TCE (3%) e Legislativo incluído o TCM, quando houver (6%). O Judiciário tem percentual próprio (6% na esfera federal e na estadual), sem os Tribunais de Contas.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da Repartição dos Limites Globais com Pessoal</i></p>",
10:"<p>Certo. Literalidade do art. 1º, § 3º, I, <i>b</i>: nas referências aos entes estão compreendidas as <b>administrações diretas, fundos, autarquias, fundações e empresas estatais dependentes</b>.</p><p>Repare que a lista fala só em estatais <b>dependentes</b>. Casa com a definição do art. 2º, III, que o Resumo explica: dependente é a controlada que recebe recursos do ente para pessoal, custeio em geral ou capital.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 1º, § 3º, da LRF não é transcrito no material; conferido na letra da LC 101/2000.</p>",
11:"<p>Errado. O art. 1º, § 3º, I, <i>b</i>, inclui no alcance da LRF apenas as <b>empresas estatais dependentes</b>. As independentes não se submetem integralmente à lei.</p><p>O ATENÇÃO do Resumo ajuda: toda estatal dependente é controlada, mas nem toda controlada é dependente. Exemplo do material: <b>a Petrobras é controlada, porém independente</b>.</p><p class='fb-fonte off'>Não consta do resumo de LRF — a regra de abrangência (art. 1º, § 3º) não está no material; apenas a distinção controlada/dependente, com o exemplo da Petrobras, está em Definições Importantes.</p>",
12:"<p>Certo. É o art. 1º, § 3º, II, da LRF: nas referências a <b>Estados</b> entende-se considerado o <b>Distrito Federal</b>.</p><p>O Resumo trata o DF junto com os Estados no quadro das deduções da RCL, cuja coluna é justamente <b>ESTADOS/DF</b>. Pela mesma lógica, o DF segue os limites estaduais de despesa com pessoal.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 1º, § 3º, II, não é transcrito no material; conferido na letra da LC 101/2000.</p>",
13:"<p>Certo. É o art. 1º, § 3º, III: estão incluídos o <b>Tribunal de Contas da União</b>, o <b>Tribunal de Contas do Estado</b> e, quando houver, o <b>Tribunal de Contas dos Municípios</b> e o <b>Tribunal de Contas do Município</b>.</p><p>Não confunda os dois últimos: o <b>dos Municípios</b> é órgão estadual que fiscaliza todos os Municípios do Estado; o <b>do Município</b> é órgão do próprio Município. O Resumo cita o TC <b>dos</b> Municípios no art. 20, § 4º (Legislativo 3,4% e Executivo 48,6%).</p><p class='fb-fonte off'>Não consta do resumo de LRF — o conceito de Tribunais de Contas (art. 1º, § 3º, III) não é transcrito no material; conferido na letra da LC 101/2000.</p>",
14:"<p>Certo. Literalidade do art. 2º, I: ente da Federação é a <b>União, cada Estado, o Distrito Federal e cada Município</b>.</p><p>É a primeira das definições do art. 2º destacadas pelo Resumo, seguida de empresa controlada (II), empresa estatal dependente (III) e receita corrente líquida (IV). Note o <b>cada</b>: cada Estado e cada Município é um ente distinto.</p><p class='fb-fonte'>LRF — Radegondes · <i>Definições Importantes</i></p>",
15:"<p>Certo. Literalidade do art. 2º, II: empresa controlada é a sociedade cuja <b>maioria do capital social com direito a voto</b> pertença, <b>direta ou indiretamente</b>, a ente da Federação.</p><p>Os pontos que a banca mexe: <b>maioria</b> (não totalidade), capital <b>com direito a voto</b> (não o capital total) e controle <b>direto ou indireto</b>. A Petrobras, exemplo do Resumo, é controlada.</p><p class='fb-fonte'>LRF — Radegondes · <i>Definições Importantes</i></p>",
16:"<p>Errado por uma palavra: o art. 2º, II, exige a <b>maioria</b> do capital social <b>com direito a voto</b>, e não a totalidade do capital social.</p><p>Basta que o ente detenha, direta ou indiretamente, a maioria do capital votante. O exemplo do Resumo confirma: a <b>Petrobras é controlada</b>, embora não pertença integralmente à União.</p><p class='fb-fonte'>LRF — Radegondes · <i>Definições Importantes</i></p>",
17:"<p>Certo. Literalidade do art. 2º, III: estatal dependente é a <b>empresa controlada</b> que recebe do ente controlador recursos financeiros para pagamento de despesas <b>com pessoal</b>, <b>de custeio em geral</b> ou <b>de capital</b>.</p><p>O Resumo lista os três itens com ou entre eles: basta receber para <b>qualquer um</b> dos três. No caso das despesas de capital, excluem-se os recursos provenientes de aumento de participação acionária.</p><p class='fb-fonte'>LRF — Radegondes · <i>Definições Importantes</i></p>",
18:"<p>Certo. A parte final do art. 2º, III, traz a ressalva: excluídos, <b>no último caso</b> (despesas de capital), os recursos provenientes de <b>aumento de participação acionária</b>.</p><p>No esquema do Resumo: pessoal; custeio em geral; ou capital, <b>excluídas aquelas provenientes do aumento de participação acionária</b>. Ou seja, o ente aportar capital como sócio não torna a empresa dependente.</p><p class='fb-fonte'>LRF — Radegondes · <i>Definições Importantes</i></p>",
19:"<p>Errado. O ATENÇÃO do Resumo diz exatamente o contrário: <b>toda estatal dependente é controlada</b>, mas <b>nem toda controlada é dependente</b>.</p><p>Para ser dependente, a controlada precisa receber do ente recursos para pessoal, custeio em geral ou capital (salvo aumento de participação acionária). Exemplo do material: a <b>Petrobras é controlada, porém independente</b>.</p><p class='fb-fonte'>LRF — Radegondes · <i>Definições Importantes</i></p>",
20:"<p>Certo. É o art. 2º, IV: a RCL é o somatório das receitas <b>tributárias, de contribuições, patrimoniais, agropecuárias, industriais, de serviços, transferências correntes e outras receitas também correntes</b>, com as deduções previstas.</p><p>Mnemônico do Resumo para as receitas correntes: <b>Tributa-Com-P-A-I-S-Trans-Ou</b> (Tributárias, Contribuições, Patrimoniais, Agropecuárias, Industriais, Serviços, Transferências correntes e Outras).</p><p class='fb-fonte'>LRF — Radegondes · <i>Cálculo da Receita Corrente Líquida (RCL)</i></p>",
21:"<p>Errado. A RCL parte apenas das <b>receitas correntes</b> (Tributa-Com-P-A-I-S-Trans-Ou). Receitas de capital, como operações de crédito e alienação de bens, <b>não</b> entram no somatório.</p><p>O próprio nome ajuda: receita <b>corrente</b> líquida. O quadro-síntese do Resumo começa com <b>( + ) Receitas Correntes</b> e depois só traz deduções e ajustes (transferências, contribuições, compensação previdenciária, Lei Kandir, FUNDEB).</p><p class='fb-fonte'>LRF — Radegondes · <i>Cálculo da Receita Corrente Líquida (RCL)</i></p>",
22:"<p>Certo. Art. 2º, IV, <i>a</i>: na União deduzem-se os valores transferidos aos Estados e Municípios por determinação <b>constitucional ou legal</b>.</p><p>No quadro do Resumo, só a União deduz também as contribuições do empregador e do trabalhador para a seguridade social e o PIS/PASEP. E o NÃO CONFUNDA: transferências <b>obrigatórias</b> (ex.: FPM) são deduzidas da RCL; transferências <b>correntes voluntárias</b> (ex.: convênios) fazem parte do somatório.</p><p class='fb-fonte'>LRF — Radegondes · <i>Cálculo da Receita Corrente Líquida (RCL)</i></p>",
23:"<p>Certo. Art. 2º, IV, <i>b</i>: nos Estados deduzem-se as parcelas entregues aos Municípios por determinação <b>constitucional</b>.</p><p>Compare com a União (alínea <i>a</i>), que deduz as transferências por determinação <b>constitucional ou legal</b>. Nos Estados a lei fala só em determinação constitucional. No quadro do Resumo, a coluna é <b>ESTADOS/DF</b>, e os Municípios não têm essa dedução.</p><p class='fb-fonte'>LRF — Radegondes · <i>Cálculo da Receita Corrente Líquida (RCL)</i></p>",
24:"<p>Certo. Art. 2º, IV, <i>c</i>: na União, nos Estados e nos Municípios deduz-se a <b>contribuição dos servidores para o custeio do seu sistema de previdência e assistência social</b>, além das receitas da compensação financeira do art. 201, § 9º, da CF.</p><p>No quadro do Resumo, essas duas deduções aparecem nas <b>três colunas</b> (União, Estados/DF e Municípios). Exemplo do material para a compensação: servidor estadual que passa a federal; parte do que contribuiu ao RPPS do Estado vai ao RPPS da União, que deduz o valor recebido.</p><p class='fb-fonte'>LRF — Radegondes · <i>Cálculo da Receita Corrente Líquida (RCL)</i></p>",
25:"<p>Errado. A contribuição dos servidores para o custeio do seu sistema de previdência e assistência social é <b>deduzida</b> da RCL, nos três níveis (art. 2º, IV, <i>c</i>).</p><p>É uma das deduções comuns a União, Estados/DF e Municípios no quadro do Resumo, ao lado das receitas de compensação financeira entre regimes previdenciários distintos (RGPS e RPPS).</p><p class='fb-fonte'>LRF — Radegondes · <i>Cálculo da Receita Corrente Líquida (RCL)</i></p>",
26:"<p>Certo. Literalidade do art. 2º, § 1º: serão computados no cálculo da RCL os valores pagos e recebidos em decorrência da <b>LC 87/1996</b> e do fundo do <b>art. 60 do ADCT</b>.</p><p>O comentário do Resumo traduz: a LC 87/96 é a <b>Lei Kandir</b> (ICMS) e o fundo do art. 60 do ADCT é o <b>FUNDEB</b>. No quadro-síntese eles entram como <b>( + ou - )</b>: o FUNDEB reduz na União e entra somando nos entes que recebem.</p><p class='fb-fonte'>LRF — Radegondes · <i>Cálculo da Receita Corrente Líquida (RCL)</i></p>",
27:"<p>Certo. É o art. 2º, § 2º: não se consideram na RCL do <b>DF, do Amapá e de Roraima</b> os recursos recebidos da União para as despesas do art. 19, § 1º, V.</p><p>O Resumo explica que essas despesas são as de <b>pessoal dos ex-territórios</b> custeadas com recursos transferidos pela União. A assertiva descreve o que a lei chama de despesas com segurança pública e organização administrativa e judiciária desses entes. No quadro-síntese: ( - ) recursos recebidos da União para custear alguns servidores, apenas para DF, Amapá e Roraima.</p><p class='fb-fonte'>LRF — Radegondes · <i>Cálculo da Receita Corrente Líquida (RCL)</i></p>",
28:"<p>Certo. Literalidade do art. 2º, § 3º: a RCL é apurada somando-se as receitas arrecadadas no <b>mês em referência e nos onze anteriores</b>, excluídas as duplicidades.</p><p>Exemplo do Resumo: para apurar a RCL em <b>maio de 2024</b>, soma-se maio de 2024 com os 11 meses anteriores, ou seja, o período vai de <b>junho de 2023 a maio de 2024</b>. São 12 meses corridos, não o exercício civil.</p><p class='fb-fonte'>LRF — Radegondes · <i>Cálculo da Receita Corrente Líquida (RCL)</i></p>",
29:"<p>Errado. A RCL não é apurada pelo exercício financeiro anterior, e sim pelo <b>mês em referência mais os onze anteriores</b> (art. 2º, § 3º).</p><p>Exemplo do Resumo: RCL de <b>maio de 2024</b> abrange de <b>junho de 2023 a maio de 2024</b>. É uma janela móvel de 12 meses, que não coincide com o ano civil, excluídas as duplicidades.</p><p class='fb-fonte'>LRF — Radegondes · <i>Cálculo da Receita Corrente Líquida (RCL)</i></p>",
30:"<p>Errado. A LRF não revogou a Lei 4.320/1964: as duas convivem, cada uma com o seu campo.</p><p>O quadro NÃO CONFUNDA do Resumo marca a diferença: a <b>LC 101/00 estabelece normas de finanças públicas</b> voltadas à responsabilidade fiscal; a <b>Lei 4.320/64 estatui normas gerais de direito financeiro</b>. O próprio Resumo continua citando a Lei 4.320/64 (art. 40, créditos adicionais; art. 102, Balanço Orçamentário) como norma vigente.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o material não afirma expressamente a não revogação; a conclusão se apoia no quadro NÃO CONFUNDA e nas citações da Lei 4.320/64 ainda vigente.</p>",
31:"<p>Certo. A RCL é o parâmetro dos grandes limites da LRF.</p><p>O Resumo mostra isso para pessoal: a despesa total com pessoal não pode exceder <b>50% da RCL na União</b> e <b>60% nos Estados e Municípios</b> (art. 19). A reserva de contingência também tem montante definido com base na RCL. Para a dívida consolidada, os limites são fixados pelo <b>Senado Federal</b> (art. 30, I) em proporção da RCL.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o material traz a RCL como base do limite de pessoal (art. 19), mas não detalha que os limites de dívida consolidada fixados pelo Senado são expressos em percentual da RCL.</p>",
32:"<p>Errado. O art. 1º, § 1º, exige as <b>duas coisas</b>: o cumprimento de metas de resultados entre receitas e despesas <b>e</b> a obediência a limites e condições.</p><p>No esquema do Resumo, a ação planejada e transparente pressupõe prevenir riscos e corrigir desvios <b>mediante</b> esses dois instrumentos, cumulativamente. Não há dispensa das metas.</p><p class='fb-fonte'>LRF — Radegondes · <i>Disposições Preliminares na LRF</i></p>",
33:"<p>Certo. A <b>concessão de garantia</b> está no rol do art. 1º, § 1º, logo antes da inscrição em Restos a Pagar.</p><p>O Resumo define depois (art. 29) concessão de garantia como o <b>compromisso de adimplência</b> de obrigação financeira ou contratual assumida por ente da Federação ou entidade a ele vinculada. O art. 40 condiciona a garantia ao oferecimento de contragarantia em valor igual ou superior.</p><p class='fb-fonte'>LRF — Radegondes · <i>Disposições Preliminares na LRF</i></p>",
34:"<p>Certo. Pelo art. 1º, § 3º, I, <i>b</i>, nas referências aos entes estão compreendidos as administrações diretas, <b>fundos</b>, autarquias, <b>fundações</b> e empresas estatais dependentes.</p><p>O Resumo mostra reflexos disso: o art. 35 veda operação de crédito entre entes, <b>diretamente ou por intermédio de fundo, autarquia, fundação ou empresa estatal dependente</b>, a mesma lista de entidades.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 1º, § 3º, da LRF não é transcrito no material; conferido na letra da LC 101/2000.</p>",
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"01", nome:"Disposições preliminares", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
