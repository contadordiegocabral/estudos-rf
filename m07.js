/* AFO — Módulo 07: Receita Pública */
window.MOD = window.MOD || {};
window.MOD.m07 = (function(){
"use strict";

var CARDS = [
  ["O que é receita pública?","O <b>fluxo de recursos financeiros para o governo</b> — todas as entradas de bens ou direitos que o Estado utiliza para financiar seus gastos."],
  ["Receita pública em sentido amplo × estrito","<b>Amplo (lato sensu)</b>: receitas orçamentárias + extraorçamentárias. <b>Estrito (stricto sensu)</b>: apenas as receitas orçamentárias."],
  ["O que é receita orçamentária?","Todas as <b>receitas arrecadadas</b>, inclusive as provenientes de <b>operações de crédito</b>, <b>ainda que não previstas no orçamento</b>."],
  ["O que é receita extraorçamentária?","Entradas de recursos <b>restituíveis</b>, que <b>não pertencem ao Estado</b>. Ele atua como <b>mero depositário</b>; são passivos exigíveis, de caráter temporário, e não se incorporam ao patrimônio público."],
  ["O recebimento de dinheiro em doação é receita orçamentária?","<b>Sim.</b> É ingresso <b>extraordinário</b> (não previsto) <b>e orçamentário</b>. Já o recebimento de <b>bens</b> em doação não gera ingresso de recursos: é apenas uma <b>VPA</b>."],
  ["Extraordinário × extraorçamentário","<b>Extraordinário</b> = não estava previsto. <b>Extraorçamentário</b> = recurso transitório que apenas passa pelos cofres públicos."],
  ["Cite cinco receitas extraorçamentárias.","Cauções, fianças e depósitos para garantia; retenções na fonte e consignações em folha; salários não reclamados; <b>inscrição em restos a pagar</b>; <b>ARO</b>; emissão de papel-moeda."],
  ["Operação de crédito × operação de crédito por ARO","<b>Operação de crédito</b> = receita <b>orçamentária</b>. <b>Operação de crédito por antecipação de receita orçamentária (ARO)</b> = receita <b>extraorçamentária</b>."],
  ["Receita originária × derivada","<b>Originária</b>: vem do próprio patrimônio do Estado (concessão, royalties, aluguel). <b>Derivada</b>: obtida mediante <b>autoridade coercitiva</b> (impostos, taxas, multas, contribuições)."],
  ["Receita efetiva × não efetiva","<b>Efetiva</b> contribui para o <b>aumento do patrimônio líquido</b>. <b>Não efetiva</b> não contribui."],
  ["Qual a regra das receitas efetivas e suas exceções?","São efetivas todas as <b>correntes</b>, exceto o <b>recebimento de dívida ativa</b> (fato permutativo). São não efetivas todas as <b>de capital</b>, exceto as <b>transferências de capital</b> (acréscimo patrimonial)."],
  ["Receita ordinária × extraordinária","<b>Ordinária</b>: arrecadação regular e contínua em cada exercício (IR, ICMS, IPVA, IPTU). <b>Extraordinária</b>: caráter eventual (doações, indenizações, imposto de guerra)."],
  ["Qual o bizu do código de natureza da receita?","<b>COE-DT</b>: <b>C</b>ategoria econômica (1º) · <b>O</b>rigem (2º) · <b>E</b>spécie (3º) · <b>D</b>esdobramentos (4º ao 7º) · <b>T</b>ipo (8º). São <b>8 dígitos</b>."],
  ["Quantos dígitos tem o código de natureza da receita?","<b>Oito.</b> Diferente do código de natureza da <b>despesa</b>, que tem seis ou, opcionalmente, oito."],
  ["Quais são as receitas correntes?","Tributárias, de Contribuições, Patrimonial, Agropecuária, Industrial, de Serviços, Transferências Correntes e Outras Receitas Correntes. Mnemônico: <b>Tributa-Con-P-A-I-S-Trans-Ou</b>."],
  ["Quais são as receitas de capital?","Operações de Crédito, Alienação de Bens, Amortização de Empréstimos Concedidos, Transferências de Capital e Outras Receitas de Capital. Mnemônico: <b>Opera-Ali-Amor-Trans-Ou</b>."],
  ["Quais os códigos da categoria econômica da receita?","<b>1</b> Receitas Correntes · <b>2</b> Receitas de Capital · <b>7</b> Correntes Intraorçamentárias · <b>8</b> Capital Intraorçamentárias."],
  ["O que é a origem da receita?","O <b>detalhamento das categorias econômicas</b>. Identifica a <b>procedência</b> da receita no momento em que ingressa nos cofres públicos. É o <b>2º dígito</b>."],
  ["O que é a espécie?","Nível vinculado à origem que permite <b>qualificar com maior detalhe o fato gerador</b>. É o <b>3º dígito</b>. Ex.: dentro da origem “Contribuições”, as espécies Sociais, Econômicas e para Entidades Privadas."],
  ["Os desdobramentos da receita são obrigatórios?","<b>Não</b> — são de <b>uso opcional</b>. Ocupam o 4º ao 7º dígito. Nas receitas exclusivas de estados e municípios, o 4º dígito é <b>8</b>."],
  ["O que identifica o tipo (8º dígito)?","O tipo de arrecadação: <b>0</b> não valorizável ou agregadora · <b>1</b> principal · <b>2</b> multas e juros de mora · <b>3</b> dívida ativa · <b>4</b> multas e juros de mora da dívida ativa."],
  ["Como se estrutura a classificação por fonte de recursos?","Código de <b>três dígitos</b>: o <b>1º</b> é o <b>grupo de fonte</b>; o <b>2º e o 3º</b> são a <b>especificação da fonte</b>."],
  ["O que significam as fontes 101, 301 e 900?","<b>101</b> recursos arrecadados no exercício corrente / transferências do IR e do IPI. <b>301</b> arrecadados em exercícios anteriores / mesmas transferências. <b>900</b> recursos condicionados / recursos primários de livre aplicação."],
  ["O que é o identificador de resultado primário?","Indicador que auxilia a apuração do <b>resultado primário</b>. Foi instituído <b>para a União</b> e <b>não tem caráter obrigatório para todos os entes</b>."],
  ["Como se calcula o resultado primário?","<b>Receitas primárias − despesas primárias.</b> Não confundir com o <b>resultado nominal</b>, que é a diferença entre receitas e despesas <b>totais</b>."],
  ["Quais são as receitas primárias?","Em regra as <b>correntes, exceto a receita de juros</b>. Também há receitas de capital primárias: <b>alienação de bens</b> e <b>transferências de capital</b>."],
  ["Quais são as receitas financeiras?","Emissão de títulos, contratação de operações de crédito, receita de aplicações financeiras (juros recebidos), privatização e amortização de empréstimos concedidos. <b>Não contribuem</b> para o resultado primário."],
  ["Quais as três esferas orçamentárias da receita?","<b>Fiscal</b> (governo em geral), da <b>Seguridade Social</b> (previdência, saúde e assistência) e de <b>Investimento das Empresas Estatais</b>. Base: CF, art. 165, § 5º."],
  ["Qual o mnemônico das etapas da receita?","<b>PLAR</b>: <b>P</b>revisão · <b>L</b>ançamento · <b>A</b>rrecadação · <b>R</b>ecolhimento."],
  ["Qual etapa da receita é planejamento e quais são execução?","<b>Previsão</b> é planejamento. <b>Lançamento, arrecadação e recolhimento</b> são execução."],
  ["Qual o conceito legal de lançamento?","<b>Art. 53 da Lei 4.320/64:</b> ato da <b>repartição competente</b> que verifica a <b>procedência do crédito fiscal</b> e a <b>pessoa que lhe é devedora</b> e <b>inscreve o débito desta</b>. Ex.: emissão do carnê do IPTU."],
  ["Arrecadação × recolhimento","<b>Arrecadação</b>: entrega dos recursos devidos ao Tesouro pelos contribuintes, por meio dos <b>agentes arrecadadores</b>. <b>Recolhimento</b>: transferência dos valores arrecadados à <b>conta específica do Tesouro</b>."],
  ["O que é dívida ativa?","O conjunto de créditos <b>tributários e não tributários</b> em favor da Fazenda Pública, <b>não recebidos no prazo</b>, inscritos após apuração de <b>certeza e liquidez</b>. É reconhecida contabilmente no <b>ativo</b>."],
  ["Dívida ativa × dívida pública","<b>Dívida ativa</b>: créditos a receber, reconhecidos no <b>ativo</b>. <b>Dívida pública</b>: obrigações do ente com terceiros, reconhecidas no <b>passivo</b>."],
  ["Dívida ativa tributária × não tributária","<b>Tributária</b>: crédito proveniente de obrigação legal relativa a <b>tributos e respectivos adicionais e multas</b>. <b>Não tributária</b>: os demais créditos da Fazenda Pública. Art. 39, § 2º."],
  ["O que NÃO é dívida ativa tributária?","<b>Empréstimo compulsório</b>, <b>contribuições estabelecidas em lei</b> e <b>taxas de ocupação</b> — art. 39, § 2º, da Lei 4.320/64."]
];

var QS = [
  ["Em sentido estrito, a receita pública compreende as receitas orçamentárias e as extraorçamentárias.","E","FCC","Isso é o sentido <b>amplo</b>. Em sentido estrito, receita pública é apenas a <b>orçamentária</b>."],
  ["São receitas orçamentárias todas as receitas arrecadadas, inclusive as provenientes de operações de crédito, ainda que não previstas no orçamento.","C","CESPE","A previsão no orçamento não é requisito para que a receita seja orçamentária."],
  ["As receitas extraorçamentárias integram o orçamento público e dependem de autorização legislativa para sua devolução.","E","FGV","Não integram o orçamento e sua devolução <b>independe</b> de autorização legislativa."],
  ["Nas receitas extraorçamentárias, o Estado atua como mero depositário dos recursos.","C","FCC","São recursos restituíveis, de caráter temporário, que não se incorporam ao patrimônio público."],
  ["O recebimento de dinheiro em doação constitui receita orçamentária, ainda que não prevista na lei orçamentária anual.","C","CESPE","É ingresso <b>extraordinário e orçamentário</b>."],
  ["O recebimento de um veículo em doação constitui receita orçamentária.","E","CESPE","Não gera ingresso de recursos: representa apenas uma <b>variação patrimonial aumentativa (VPA)</b>."],
  ["Receita extraordinária e receita extraorçamentária são expressões sinônimas.","E","VUNESP","<b>Extraordinário</b> = não previsto. <b>Extraorçamentário</b> = recurso transitório de terceiros."],
  ["A inscrição em restos a pagar constitui receita extraorçamentária.","C","FCC","E o pagamento de restos a pagar constitui despesa extraorçamentária."],
  ["A operação de crédito por antecipação de receita orçamentária constitui receita orçamentária.","E","FGV","A ARO é receita <b>extraorçamentária</b>. A operação de crédito comum é que é orçamentária."],
  ["As receitas obtidas pelo Estado mediante sua autoridade coercitiva denominam-se receitas originárias.","E","CESPE","São as <b>derivadas</b>. As originárias vêm do próprio patrimônio do Estado."],
  ["Royalties, aluguéis e receitas de concessão classificam-se como receitas originárias.","C","FCC","Decorrem da exploração do patrimônio do Estado, sem coerção."],
  ["Impostos, taxas, multas e contribuições são exemplos de receitas derivadas.","C","VUNESP","O Estado exige do particular a entrega compulsória de determinada quantia."],
  ["Receita efetiva é aquela que não contribui para o aumento do patrimônio líquido.","E","FGV","Invertido: a <b>efetiva</b> contribui para o aumento do patrimônio líquido."],
  ["O recebimento de dívida ativa é receita corrente não efetiva, por representar fato permutativo.","C","CESPE","É a exceção da regra “toda receita corrente é efetiva”."],
  ["As transferências de capital são receitas de capital não efetivas.","E","FCC","São a exceção no sentido inverso: causam acréscimo patrimonial e, por isso, são <b>efetivas</b>."],
  ["Doações e indenizações em favor do Estado classificam-se como receitas extraordinárias quanto à regularidade.","C","FGV","São ingressos de caráter eventual, não regular."],
  ["O código de natureza da receita é composto por seis dígitos.","E","VUNESP","São <b>oito</b>. Quem tem seis (ou opcionalmente oito) é o código de natureza da <b>despesa</b>."],
  ["No código de natureza da receita, o segundo dígito representa a origem.","C","CESPE","Bizu <b>COE-DT</b>: Categoria (1º), Origem (2º), Espécie (3º), Desdobramentos (4º-7º), Tipo (8º)."],
  ["A espécie corresponde ao detalhamento do fato gerador e ocupa o terceiro dígito do código de natureza da receita.","C","FCC","Nível de classificação vinculado à origem."],
  ["Os desdobramentos para identificação de peculiaridades da receita são de uso obrigatório.","E","FGV","São de <b>uso opcional</b>, conforme a necessidade de especificação do recurso."],
  ["Nas receitas exclusivas de estados e municípios, o quarto dígito do código de natureza da receita é o número 8.","C","CESPE","Ex.: 1.9.0.8XXX.X — Outras Receitas Correntes exclusivas de estados e municípios."],
  ["No código de natureza da receita, o tipo 3 identifica a dívida ativa da respectiva receita.","C","FCC","0 agregadora · 1 principal · 2 multas e juros de mora · 3 dívida ativa · 4 multas e juros de mora da dívida ativa."],
  ["A alienação de bens classifica-se como receita corrente.","E","VUNESP","É receita <b>de capital</b>. Mnemônico: Opera-Ali-Amor-Trans-Ou."],
  ["A receita patrimonial e a receita de serviços classificam-se como receitas correntes.","C","FCC","Mnemônico: Tributa-Con-P-A-I-S-Trans-Ou."],
  ["A amortização de empréstimos concedidos é receita de capital.","C","CESPE","Está no rol do art. 11 da Lei 4.320/64 e no mnemônico Opera-Ali-Amor-Trans-Ou."],
  ["Na categoria econômica da receita, o código 7 identifica as receitas de capital intraorçamentárias.","E","FGV","<b>7</b> é receitas <b>correntes</b> intraorçamentárias; <b>8</b> é de capital intraorçamentárias."],
  ["A classificação da receita por fonte ou destinação de recursos é composta de três dígitos, sendo o primeiro o grupo de fonte.","C","FCC","O segundo e o terceiro representam a especificação da fonte."],
  ["A fonte 301 identifica recursos arrecadados no exercício corrente.","E","CESPE","O grupo <b>3</b> identifica recursos arrecadados em <b>exercícios anteriores</b>. O exercício corrente é o grupo 1."],
  ["O identificador de resultado primário tem caráter obrigatório para todos os entes da Federação.","E","FGV","Foi instituído <b>para a União</b> e <b>não</b> é obrigatório para todos os entes."],
  ["O resultado primário corresponde à diferença entre as receitas primárias e as despesas primárias.","C","CESPE","O resultado <b>nominal</b> é que considera receitas e despesas totais."],
  ["As receitas primárias são, em regra, as receitas correntes, excetuada a receita de juros.","C","FCC","Há ainda receitas de capital primárias: alienação de bens e transferências de capital."],
  ["A contratação de operações de crédito e a privatização classificam-se como receitas primárias.","E","VUNESP","São receitas <b>financeiras</b>: criam obrigação ou extinguem direito de natureza financeira."],
  ["Resultado primário e resultado nominal são expressões equivalentes.","E","CESPE","O nominal é a diferença entre receitas e despesas <b>totais</b>; o primário exclui o componente financeiro."],
  ["A classificação da receita por esfera orçamentária identifica se a receita pertence ao orçamento fiscal, da seguridade social ou de investimento das empresas estatais.","C","FGV","Fundamento: CF, art. 165, § 5º."],
  ["As etapas da receita orçamentária são previsão, lançamento, arrecadação e recolhimento.","C","FCC","Mnemônico <b>PLAR</b>."],
  ["O lançamento integra a fase de planejamento da receita orçamentária.","E","CESPE","Planejamento é apenas a <b>previsão</b>. Lançamento, arrecadação e recolhimento são execução."],
  ["Segundo a Lei nº 4.320/1964, lançamento é o ato da repartição competente que verifica a procedência do crédito fiscal e a pessoa que lhe é devedora e inscreve o débito desta.","C","CESPE","Literalidade do art. 53."],
  ["O recolhimento corresponde à entrega dos recursos pelos contribuintes aos agentes arrecadadores.","E","FGV","Isso é a <b>arrecadação</b>. O recolhimento é a transferência dos valores arrecadados à conta específica do Tesouro."],
  ["A dívida ativa é reconhecida contabilmente no passivo do ente público.","E","FCC","É reconhecida no <b>ativo</b> — é fonte potencial de fluxos de caixa. No passivo fica a <b>dívida pública</b>."],
  ["A dívida ativa é inscrita pelo órgão competente após apuração de certeza e liquidez.","C","CESPE","Trata-se de créditos tributários e não tributários não recebidos no prazo."],
  ["Constituem dívida ativa tributária os créditos provenientes de obrigação legal relativa a tributos e respectivos adicionais e multas.","C","FCC","Art. 39, § 2º, da Lei nº 4.320/1964."],
  ["O empréstimo compulsório e as taxas de ocupação integram a dívida ativa tributária.","E","CESPE","O art. 39, § 2º, os exclui expressamente, ao lado das contribuições estabelecidas em lei."]
];

var FEY = {
  r1:{ask:"Explique a diferença entre receita orçamentária e extraorçamentária, e por que a doação de dinheiro é orçamentária.",
    hint:"O critério é de quem é o dinheiro, não se estava previsto. Use isso para explicar a doação.",
    ref:"Receita orçamentária compreende todas as receitas arrecadadas, inclusive as provenientes de operações de crédito, ainda que não previstas no orçamento. Receita extraorçamentária é a entrada de recursos restituíveis, que não pertencem ao Estado: ele atua como mero depositário, tais recursos não integram o orçamento público, constituem passivos exigíveis do ente, têm caráter temporário, não se incorporam ao patrimônio público e sua devolução não se sujeita a autorização legislativa. São exemplos cauções, fianças, depósitos para garantia, retenções na fonte, consignações em folha, salários não reclamados, a inscrição em restos a pagar, as operações de crédito por antecipação de receita orçamentária e as emissões de papel-moeda. O recebimento de dinheiro em doação é receita orçamentária porque o recurso ingressa em definitivo no patrimônio público: trata-se de ingresso extraordinário, por não estar previsto, mas orçamentário. Não se confunda extraordinário com extraorçamentário. Já o recebimento de bens em doação não gera ingresso de recursos e representa apenas variação patrimonial aumentativa."},
  r2:{ask:"Explique as classificações da receita quanto à procedência, à afetação patrimonial e à regularidade.",
    hint:"Três pares. Em cada um, diga o critério antes dos exemplos — e não esqueça as duas exceções da afetação patrimonial.",
    ref:"Quanto à coercitividade ou procedência, a receita é originária quando provém do próprio patrimônio do Estado, como nas concessões, royalties e aluguéis; e derivada quando obtida mediante sua autoridade coercitiva, exigindo do particular a entrega compulsória de determinada quantia, como nos impostos, taxas, multas e contribuições. Quanto à afetação patrimonial, a receita é efetiva quando contribui para o aumento do patrimônio líquido e não efetiva quando não contribui: são efetivas todas as receitas correntes, com exceção do recebimento de dívida ativa, que representa fato permutativo; e são não efetivas todas as receitas de capital, com exceção do recebimento de transferências de capital, que causa acréscimo patrimonial. Quanto à regularidade ou periodicidade, a receita é ordinária quando arrecadada de forma regular e contínua em cada exercício, como os impostos; e extraordinária quando de caráter eventual, como as doações, as indenizações em favor do Estado e o imposto criado em caso de guerra."},
  r3:{ask:"Explique a estrutura do código de natureza da receita e o que significa cada posição.",
    hint:"Oito dígitos, cinco posições. Diga qual é opcional e o que significa cada valor do último dígito.",
    ref:"O código de natureza da receita é numérico e composto de oito dígitos. O primeiro é a categoria econômica, que distingue receitas correntes de receitas de capital. O segundo é a origem, detalhamento da categoria econômica que identifica a procedência do fato gerador no momento em que a receita ingressa nos cofres públicos. O terceiro é a espécie, nível vinculado à origem que permite qualificar com maior detalhe o fato gerador. Do quarto ao sétimo estão os desdobramentos para identificação de peculiaridades da receita, de uso opcional, reservando-se o dígito 8 na quarta posição para as receitas exclusivas de estados e municípios. O oitavo é o tipo, que identifica o tipo de arrecadação: 0 para natureza não valorizável ou agregadora, 1 para a arrecadação principal, 2 para multas e juros de mora, 3 para dívida ativa e 4 para multas e juros de mora da dívida ativa. O bizu é COE-DT."},
  r4:{ask:"Explique as etapas da receita pública e o conceito de dívida ativa.",
    hint:"PLAR, separando planejamento de execução. Na dívida ativa, diga em que grupo contábil ela é reconhecida e por quê.",
    ref:"As etapas da receita orçamentária são quatro, resumidas no mnemônico PLAR. A previsão, única etapa de planejamento, implica estimar a arrecadação das receitas que constarão da proposta orçamentária. As três seguintes são de execução. O lançamento, conforme o art. 53 da Lei nº 4.320/1964, é o ato da repartição competente que verifica a procedência do crédito fiscal e a pessoa que lhe é devedora e inscreve o débito desta. A arrecadação corresponde à entrega dos recursos devidos ao Tesouro pelos contribuintes, por meio dos agentes arrecadadores. O recolhimento é a transferência dos valores arrecadados à conta específica do Tesouro. A dívida ativa, por sua vez, é o conjunto de créditos tributários e não tributários em favor da Fazenda Pública não recebidos no prazo, inscritos pelo órgão competente após apuração de certeza e liquidez. Por ser fonte potencial de fluxos de caixa, é reconhecida contabilmente no ativo, não se confundindo com a dívida pública, que representa obrigações do ente com terceiros e é reconhecida no passivo."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  r1:[
    sl("Receita pública e seus sentidos",
      '<p>Receita pública é o <span class="key">fluxo de recursos financeiros para o governo</span>, proveniente de impostos, taxas, contribuições, multas e outras fontes. São todas as entradas de bens ou direitos que o Estado utiliza para financiar seus gastos.</p>'+
      '<div class="box"><span class="bl">Sentido amplo (lato sensu)</span><p>Receitas orçamentárias <b>+</b> receitas extraorçamentárias.</p></div>'+
      '<div class="box"><span class="bl">Sentido estrito (stricto sensu)</span><p>Apenas as receitas <b>orçamentárias</b>.</p></div>'),
    sl("As oito classificações",
      '<ul><li>Quanto à <b>forma de ingresso</b>: orçamentária ou extraorçamentária</li>'+
      '<li>Quanto à <b>procedência (coercitividade)</b>: originária ou derivada</li>'+
      '<li>Quanto à <b>afetação patrimonial</b>: efetiva ou não efetiva</li>'+
      '<li>Quanto à <b>regularidade</b>: ordinária ou extraordinária</li>'+
      '<li>Quanto à <b>natureza</b></li><li>Quanto à <b>fonte (ou destinação) de recursos</b></li>'+
      '<li>Quanto ao <b>identificador de resultado primário</b></li>'+
      '<li>Quanto à <b>esfera orçamentária</b>: fiscal, seguridade social ou investimento</li></ul>')
  ],
  r2:[
    sl("Forma de ingresso",
      '<div class="box"><span class="bl">Orçamentária</span><p>Todas as receitas <b>arrecadadas</b>, inclusive as provenientes de <b>operações de crédito</b>, <b>ainda que não previstas no orçamento</b>.</p></div>'+
      '<div class="box"><span class="bl">Extraorçamentária</span><p>Entradas de recursos <b>restituíveis</b> — não pertencem ao Estado.</p></div>'+
      '<div class="box trap"><span class="bl">A pegadinha das doações</span>'+
      '<p>O recebimento de <b>dinheiro</b> em doação <b>é receita orçamentária</b>: ingresso <b>extraordinário</b> (não previsto) e <b>orçamentário</b>. O recebimento de <b>bens</b> (ex.: um veículo) não gera ingresso de recursos — é apenas <b>VPA</b>.</p>'+
      '<p><b>Extraordinário</b> = não estava previsto. <b>Extraorçamentário</b> = recurso transitório que passa pelos cofres públicos.</p></div>'),
    sl("Receitas extraorçamentárias — as seis características",
      '<ul><li>São entradas de recursos <b>restituíveis</b>, que não pertencem ao Estado</li>'+
      '<li>O Estado atua como <b>mero depositário</b></li>'+
      '<li><b>Não integram</b> o orçamento público</li>'+
      '<li>São <b>passivos (obrigações) exigíveis</b> do ente</li>'+
      '<li>Seu pagamento <b>não está sujeito a autorização legislativa</b></li>'+
      '<li>Têm <b>caráter temporário</b> e não se incorporam ao patrimônio público</li></ul>'+
      '<div class="box"><span class="bl">Exemplos</span><p>Cauções, fianças, depósitos para garantia, retenções na fonte, consignações em folha, salários não reclamados, entradas compensatórias no ativo e passivo financeiro, <b>inscrição em restos a pagar</b>, <b>ARO</b> e emissão de papel-moeda.</p></div>'+
      '<div class="box trap"><span class="bl">Não confunda</span><p><b>Operação de crédito</b> = receita orçamentária. <b>Operação de crédito por antecipação de receita orçamentária (ARO)</b> = receita extraorçamentária.</p></div>')
  ],
  r3:[
    sl("Procedência e afetação patrimonial",
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Originária</span><span class="cd">Do próprio patrimônio do Estado. Ex.: concessão, royalties, aluguel.</span></div>'+
      '<div class="chip"><span class="cn">Derivada</span><span class="cd">Obtida mediante autoridade coercitiva. Ex.: impostos, taxas, multas, contribuições.</span></div></div>'+
      '<div class="box"><span class="bl">Efetiva</span><p>Contribui para o <b>aumento do patrimônio líquido</b>.</p></div>'+
      '<div class="box"><span class="bl">Não efetiva</span><p><b>Não</b> contribui para o aumento do patrimônio público.</p></div>'+
      '<div class="box trap"><span class="bl">A regra e as duas exceções</span>'+
      '<ul><li>São efetivas <b>todas as correntes</b>, exceto o <b>recebimento de dívida ativa</b> (fato permutativo).</li>'+
      '<li>São não efetivas <b>todas as de capital</b>, exceto o recebimento de <b>transferências de capital</b> (acréscimo patrimonial).</li></ul></div>'),
    sl("Regularidade e esfera orçamentária",
      '<div class="box"><span class="bl">Ordinária</span><p>Arrecadação <b>regular e contínua</b> em cada exercício. Ex.: IR, ICMS, IPVA, IPTU.</p></div>'+
      '<div class="box"><span class="bl">Extraordinária</span><p>Ingressos de <b>caráter eventual</b>. Ex.: doações, indenizações em favor do Estado, imposto criado em caso de guerra.</p></div>'+
      '<div class="box trap"><span class="bl">Guarde</span><p>Receita <b>extraordinária</b> não é receita <b>extraorçamentária</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Esfera orçamentária — CF, art. 165, § 5º</span><p><b>Fiscal</b> (governo em geral) · <b>Seguridade Social</b> (previdência, saúde e assistência) · <b>Investimento das Empresas Estatais</b>.</p></div>')
  ],
  r4:[
    sl("O código de natureza — COE-DT",
      '<p>O código de natureza da receita é numérico e tem <span class="key">oito dígitos</span>.</p>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">C — 1º dígito</span><span class="cd">Categoria econômica</span></div>'+
      '<div class="chip"><span class="cn">O — 2º dígito</span><span class="cd">Origem — procedência do fato gerador</span></div>'+
      '<div class="chip"><span class="cn">E — 3º dígito</span><span class="cd">Espécie — detalhamento do fato gerador</span></div>'+
      '<div class="chip"><span class="cn">D — 4º ao 7º</span><span class="cd">Desdobramentos — uso opcional</span></div>'+
      '<div class="chip"><span class="cn">T — 8º dígito</span><span class="cd">Tipo de arrecadação</span></div></div>'+
      '<div class="box tip"><span class="bl">Exemplo — IRPF, código 1.1.1.3011.1</span><p><b>1</b> Receita Corrente · <b>1</b> Impostos, Taxas e Contribuições de Melhoria · <b>1</b> Impostos · <b>3011</b> Impostos sobre a Renda de Pessoa Física · <b>1</b> Principal.</p></div>'+
      '<div class="box trap"><span class="bl">Não confunda com a despesa</span><p>Receita: <b>8 dígitos</b> (COE-DT). Despesa: <b>6 ou opcionalmente 8</b> (CGMED).</p></div>'),
    sl("Categoria econômica e os dois mnemônicos",
      '<div class="box"><span class="bl">Receitas correntes — Tributa-Con-P-A-I-S-Trans-Ou</span>'+
      '<p>Tributárias · de Contribuições · Patrimonial · Agropecuária · Industrial · de Serviços · Transferências Correntes · Outras Receitas Correntes</p></div>'+
      '<div class="box"><span class="bl">Receitas de capital — Opera-Ali-Amor-Trans-Ou</span>'+
      '<p>Operações de Crédito · Alienação de Bens · Amortização de Empréstimos Concedidos · Transferências de Capital · Outras Receitas de Capital</p></div>'+
      '<div class="box tip"><span class="bl">Códigos do 1º dígito</span><p><b>1</b> Correntes · <b>2</b> Capital · <b>7</b> Correntes Intraorçamentárias · <b>8</b> Capital Intraorçamentárias</p></div>'),
    sl("Origem, espécie, desdobramentos e tipo",
      '<div class="box"><span class="bl">Origem — 2º dígito</span><p>Detalhamento da categoria econômica. Identifica a <b>procedência</b> da receita no momento do ingresso. Nas correntes: 1 Impostos/Taxas/Contrib. de Melhoria, 2 Contribuições, 3 Patrimonial, 4 Agropecuária, 5 Industrial, 6 Serviços, 7 Transferências Correntes, 9 Outras.</p></div>'+
      '<div class="box"><span class="bl">Espécie — 3º dígito</span><p>Vinculada à origem, qualifica com <b>maior detalhe o fato gerador</b>. Ex.: na origem “Contribuições”, as espécies Sociais, Econômicas e para Entidades Privadas de Serviço Social.</p></div>'+
      '<div class="box"><span class="bl">Desdobramentos — 4º ao 7º</span><p><b>Uso opcional</b>. Nas receitas exclusivas de estados e municípios, o 4º dígito é <b>8</b>: 1.9.0.<b>8</b>XXX.X</p></div>'+
      '<div class="box"><span class="bl">Tipo — 8º dígito</span>'+
      '<ul><li><b>0</b> natureza não valorizável ou agregadora</li><li><b>1</b> arrecadação principal</li>'+
      '<li><b>2</b> multas e juros de mora da receita</li><li><b>3</b> dívida ativa da respectiva receita</li>'+
      '<li><b>4</b> multas e juros de mora da dívida ativa</li></ul></div>')
  ],
  r5:[
    sl("Fonte ou destinação de recursos",
      '<p>Código de <span class="key">três dígitos</span>: o <b>1º</b> é o <b>grupo de fonte</b>; o <b>2º e o 3º</b> são a <b>especificação da fonte</b>.</p>'+
      '<div class="box"><span class="bl">Fonte 101</span><p><b>1</b> recursos arrecadados no <b>exercício corrente</b> · <b>01</b> transferências do IR e do IPI</p></div>'+
      '<div class="box"><span class="bl">Fonte 301</span><p><b>3</b> recursos arrecadados em <b>exercícios anteriores</b> · <b>01</b> transferências do IR e do IPI</p></div>'+
      '<div class="box"><span class="bl">Fonte 900</span><p><b>9</b> recursos <b>condicionados</b> · <b>00</b> recursos primários de livre aplicação</p></div>'),
    sl("Identificador de resultado primário",
      '<p>Indicador que auxilia a apuração do <span class="key">resultado primário</span> previsto para o exercício. Foi instituído <b>para a União</b> e <b>não tem caráter obrigatório para todos os entes</b>.</p>'+
      '<div class="box tip"><span class="bl">A fórmula</span><p><b>Resultado primário = receitas primárias − despesas primárias</b></p></div>'+
      '<div class="box"><span class="bl">Receitas primárias</span><p>Em regra as <b>correntes, exceto a receita de juros</b>. Há também receitas de capital primárias: <b>alienação de bens</b> e <b>transferências de capital</b>.</p></div>'+
      '<div class="box"><span class="bl">Receitas financeiras</span><p>Emissão de títulos · contratação de operações de crédito · receita de aplicações financeiras (juros recebidos) · privatização · amortização de empréstimos concedidos. <b>Não contribuem</b> para o resultado primário: criam obrigação ou extinguem direito de natureza financeira.</p></div>'+
      '<div class="box trap"><span class="bl">Primário × nominal</span><p>O resultado <b>nominal</b> é a diferença entre receitas e despesas <b>totais</b>. Não são sinônimos.</p></div>')
  ],
  r6:[
    sl("Etapas da receita — PLAR",
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">P</span><span class="nm">Previsão</span></div><div class="fn-b"><p><b>Planejamento.</b> Estimar a arrecadação das receitas que constarão da proposta orçamentária.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">L</span><span class="nm">Lançamento</span></div><div class="fn-b"><p><b>Execução.</b> Art. 53: ato da repartição competente que verifica a procedência do crédito fiscal e a pessoa devedora e inscreve o débito desta. Ex.: carnê do IPTU.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">A</span><span class="nm">Arrecadação</span></div><div class="fn-b"><p><b>Execução.</b> Entrega dos recursos devidos ao Tesouro pelos contribuintes, por meio dos agentes arrecadadores.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">R</span><span class="nm">Recolhimento</span></div><div class="fn-b"><p><b>Execução.</b> Transferência dos valores arrecadados à <b>conta específica do Tesouro</b>.</p></div></div></div>'+
      '<div class="box trap"><span class="bl">O corte que a banca faz</span><p>Só a <b>previsão</b> é planejamento. As outras três são execução da receita.</p></div>'),
    sl("Dívida ativa",
      '<ul><li>É o conjunto de créditos <b>tributários e não tributários</b> em favor da Fazenda Pública.</li>'+
      '<li>São créditos <b>não recebidos no prazo</b>.</li>'+
      '<li>É <b>inscrita</b> pelo órgão ou entidade competente <b>após apuração de certeza e liquidez</b>.</li>'+
      '<li>É <b>fonte potencial de fluxos de caixa</b> e é reconhecida contabilmente no <b>ativo</b>.</li>'+
      '<li><b>Não se confunde com a dívida pública</b>, que representa obrigações do ente com terceiros e é reconhecida no <b>passivo</b>.</li></ul>'+
      '<div class="box"><span class="bl">Tributária × não tributária — art. 39, § 2º</span>'+
      '<p><b>Tributária:</b> crédito proveniente de obrigação legal relativa a <b>tributos e respectivos adicionais e multas</b>. <b>Não tributária:</b> os demais créditos da Fazenda Pública.</p></div>'+
      '<div class="box trap"><span class="bl">NÃO é dívida ativa tributária</span><p>Empréstimo compulsório · contribuições estabelecidas em lei · taxas de ocupação.</p></div>')
  ]
};

var EX = {
f1:{t:"gap", instr:"Complete a frase",
  before:"Em sentido estrito, receita pública compreende apenas as receitas ", after:".",
  options:["orçamentárias","extraorçamentárias","derivadas"], answer:0,
  why:"Sentido <b>amplo</b> = orçamentárias + extraorçamentárias. Sentido <b>estrito</b> = só orçamentárias."},

f2:{t:"sort", instr:"Classifique quanto à forma de ingresso",
  buckets:["Receita orçamentária","Receita extraorçamentária"],
  items:[["Arrecadação do IPTU",0],["Caução recebida em garantia",1],
         ["Operação de crédito",0],["Operação de crédito por ARO",1],
         ["Doação de dinheiro recebida",0],["Consignação retida em folha",1],
         ["Inscrição em restos a pagar",1]],
  why:"Extraorçamentária é o recurso <b>restituível</b>, de terceiros. Note que a ARO é a exceção entre as operações de crédito."},

f3:{t:"mc", instr:"O recebimento de um veículo em doação pelo ente público constitui:",
  options:["Variação patrimonial aumentativa, e não receita orçamentária",
           "Receita orçamentária corrente","Receita extraorçamentária","Receita de capital não efetiva"],
  answer:0,
  why:"Não gera ingresso de recursos. Já a doação <b>de dinheiro</b> é receita orçamentária."},

f4:{t:"match", instr:"Correlacione os conceitos que a banca costuma trocar",
  pairs:[["Extraordinário","Não estava previsto"],
         ["Extraorçamentário","Recurso transitório de terceiros"],
         ["Operação de crédito","Receita orçamentária"],
         ["Operação de crédito por ARO","Receita extraorçamentária"]]},

f5:{t:"multi", instr:"Marque as características das receitas extraorçamentárias",
  options:["São restituíveis e não pertencem ao Estado","O Estado atua como mero depositário",
           "Não integram o orçamento público","São passivos exigíveis do ente",
           "Seu pagamento depende de autorização legislativa",
           "Incorporam-se definitivamente ao patrimônio público"],
  answers:[0,1,2,3],
  why:"As duas últimas são exatamente o contrário do que caracteriza a extraorçamentária."},

f6:{t:"sort", instr:"Originária ou derivada?",
  buckets:["Originária","Derivada"],
  items:[["Aluguel de imóvel público",0],["Royalties do petróleo",0],
         ["Receita de concessão",0],["Imposto de renda",1],
         ["Taxa de fiscalização",1],["Multa de trânsito",1]],
  why:"O critério é a <b>coerção</b>: originária vem do patrimônio do Estado; derivada, da autoridade coercitiva."},

f7:{t:"sort", instr:"Efetiva ou não efetiva?",
  buckets:["Receita efetiva","Receita não efetiva"],
  items:[["Arrecadação de impostos",0],["Recebimento de dívida ativa",1],
         ["Operação de crédito",1],["Transferência de capital recebida",0],
         ["Alienação de bem do ativo",1],["Receita de serviços",0]],
  why:"Correntes são efetivas <b>exceto</b> dívida ativa; de capital são não efetivas <b>exceto</b> transferências de capital."},

f8:{t:"gap", instr:"Complete a frase",
  before:"O recebimento de dívida ativa é receita corrente ", after:", por representar fato permutativo.",
  options:["não efetiva","efetiva","extraorçamentária"], answer:0,
  why:"É a única exceção entre as receitas correntes."},

f9:{t:"match", instr:"Correlacione a classificação ao seu critério",
  pairs:[["Forma de ingresso","O recurso pertence ou não ao Estado"],
         ["Procedência","Há ou não coerção sobre o particular"],
         ["Afetação patrimonial","Aumenta ou não o patrimônio líquido"],
         ["Regularidade","A arrecadação é contínua ou eventual"]]},

f10:{t:"mc", instr:"São exemplos de receita extraordinária quanto à regularidade:",
  options:["Doações, indenizações em favor do Estado e imposto de guerra",
           "IR, ICMS, IPVA e IPTU","Cauções, fianças e consignações",
           "Royalties, aluguéis e concessões"], answer:0,
  why:"O critério é o caráter <b>eventual</b> do ingresso — não confundir com extraorçamentária."},

f11:{t:"wordbank", instr:"Monte o bizu do código de natureza da receita",
  target:["Categoria","Origem","Espécie","Desdobramentos","Tipo"],
  extra:["Modalidade","Elemento","Grupo"],
  why:"<b>COE-DT</b>. As três palavras extras pertencem ao código da <b>despesa</b> (CGMED)."},

f12:{t:"order", instr:"Ordene as posições do código de natureza da receita",
  items:["Categoria econômica (1º dígito)","Origem (2º dígito)","Espécie (3º dígito)",
         "Desdobramentos (4º ao 7º)","Tipo (8º dígito)"],
  why:"São oito dígitos ao todo. O código da despesa, por contraste, tem seis ou opcionalmente oito."},

f13:{t:"gap", instr:"Complete a frase",
  before:"O código de natureza da receita é composto por ", after:" dígitos.",
  options:["oito","seis","três"], answer:0,
  why:"Oito na receita (COE-DT); seis ou opcionalmente oito na despesa (CGMED)."},

f14:{t:"sort", instr:"Receita corrente ou de capital?",
  buckets:["Receita corrente","Receita de capital"],
  items:[["Receitas tributárias",0],["Receita patrimonial",0],["Receita de serviços",0],
         ["Transferências correntes",0],["Operações de crédito",1],["Alienação de bens",1],
         ["Amortização de empréstimos concedidos",1],["Transferências de capital",1]],
  why:"Correntes: <b>Tributa-Con-P-A-I-S-Trans-Ou</b>. Capital: <b>Opera-Ali-Amor-Trans-Ou</b>."},

f15:{t:"multi", instr:"Marque as receitas correntes",
  options:["Receita agropecuária","Receita industrial","Receita de contribuições",
           "Outras receitas correntes","Alienação de bens","Operações de crédito"],
  answers:[0,1,2,3],
  why:"Alienação de bens e operações de crédito são receitas <b>de capital</b>."},

f16:{t:"match", instr:"Correlacione o código da categoria econômica",
  pairs:[["1","Receitas Correntes"],["2","Receitas de Capital"],
         ["7","Receitas Correntes Intraorçamentárias"],["8","Receitas de Capital Intraorçamentárias"]]},

f17:{t:"match", instr:"Correlacione o dígito do TIPO ao seu significado",
  pairs:[["0","Natureza não valorizável ou agregadora"],["1","Arrecadação principal"],
         ["2","Multas e juros de mora da receita"],["3","Dívida ativa da respectiva receita"],
         ["4","Multas e juros de mora da dívida ativa"]]},

f18:{t:"mc", instr:"Os desdobramentos para identificação de peculiaridades da receita são:",
  options:["de uso opcional, ocupando o 4º ao 7º dígito",
           "obrigatórios para todos os entes","o 2º e o 3º dígitos do código",
           "reservados apenas à União"], answer:0,
  why:"Podem ou não ser utilizados, conforme a necessidade de especificação do recurso."},

f19:{t:"gap", instr:"Complete a frase",
  before:"Nas receitas exclusivas de estados e municípios, o quarto dígito do código é o número ",
  after:".", options:["8","1","9"], answer:0,
  why:"Ex.: 1.9.0.<b>8</b>XXX.X — Outras Receitas Correntes exclusivas de estados e municípios."},

f20:{t:"mc", instr:"A classificação por fonte ou destinação de recursos é composta de:",
  options:["três dígitos: grupo de fonte e especificação da fonte",
           "oito dígitos, como a natureza da receita",
           "cinco dígitos: função e subfunção","um dígito: a categoria econômica"],
  answer:0,
  why:"1º dígito = grupo de fonte; 2º e 3º = especificação."},

f21:{t:"match", instr:"Correlacione o grupo de fonte",
  pairs:[["Fonte 101","Arrecadados no exercício corrente"],
         ["Fonte 301","Arrecadados em exercícios anteriores"],
         ["Fonte 900","Recursos condicionados"]]},

f22:{t:"wordbank", instr:"Monte a fórmula do resultado primário",
  target:["receitas","primárias","menos","despesas","primárias"],
  extra:["totais","nominais","financeiras"],
  why:"O resultado <b>nominal</b> é que usa receitas e despesas <b>totais</b>."},

f23:{t:"sort", instr:"Receita primária ou financeira?",
  buckets:["Primária","Financeira"],
  items:[["Receitas tributárias",0],["Receita de contribuições",0],
         ["Alienação de bens",0],["Transferências de capital",0],
         ["Emissão de títulos",1],["Contratação de operações de crédito",1],
         ["Juros de aplicações financeiras",1],["Privatização",1],
         ["Amortização de empréstimos concedidos",1]],
  why:"Primárias ≈ correntes <b>exceto juros</b>, mais alienação de bens e transferências de capital."},

f24:{t:"multi", instr:"Marque o que é verdadeiro sobre o identificador de resultado primário",
  options:["Auxilia a apuração do resultado primário previsto para o exercício",
           "Foi instituído para a União",
           "Não tem caráter obrigatório para todos os entes",
           "Resultado primário é receitas primárias menos despesas primárias",
           "É sinônimo de resultado nominal",
           "É obrigatório para estados e municípios"],
  answers:[0,1,2,3],
  why:"Resultado nominal considera receitas e despesas <b>totais</b> — não é sinônimo."},

f25:{t:"order", instr:"Ordene as etapas da receita pública",
  items:["Previsão","Lançamento","Arrecadação","Recolhimento"],
  why:"Mnemônico <b>PLAR</b>. Só a previsão é planejamento."},

f26:{t:"sort", instr:"Planejamento ou execução da receita?",
  buckets:["Planejamento","Execução"],
  items:[["Previsão",0],["Lançamento",1],["Arrecadação",1],["Recolhimento",1]],
  why:"A banca costuma colocar o lançamento no planejamento. É execução."},

f27:{t:"gap", instr:"Complete o art. 53 da Lei 4.320/64",
  before:"Lançamento é o ato da repartição competente que verifica a ",
  after:" do crédito fiscal e a pessoa que lhe é devedora.",
  options:["procedência","liquidez","exigibilidade"], answer:0,
  why:"E, além de verificar, <b>inscreve o débito desta</b>."},

f28:{t:"match", instr:"Correlacione a etapa da receita à sua definição",
  pairs:[["Previsão","Estimar a arrecadação para a proposta orçamentária"],
         ["Lançamento","Verificar a procedência do crédito e o devedor"],
         ["Arrecadação","Entrega dos recursos ao Tesouro pelos contribuintes"],
         ["Recolhimento","Transferência à conta específica do Tesouro"]]},

f29:{t:"multi", instr:"Marque o que é verdadeiro sobre a dívida ativa",
  options:["Reúne créditos tributários e não tributários da Fazenda Pública",
           "São créditos não recebidos no prazo",
           "É inscrita após apuração de certeza e liquidez",
           "É reconhecida contabilmente no ativo",
           "É reconhecida contabilmente no passivo",
           "Confunde-se com a dívida pública"],
  answers:[0,1,2,3],
  why:"No passivo fica a <b>dívida pública</b>, que são obrigações do ente com terceiros."},

f30:{t:"sort", instr:"É dívida ativa tributária?",
  buckets:["Dívida ativa tributária","Dívida ativa NÃO tributária"],
  items:[["Crédito de tributo não pago no prazo",0],["Multa relativa a tributo",0],
         ["Adicional de tributo",0],["Empréstimo compulsório",1],
         ["Contribuições estabelecidas em lei",1],["Taxas de ocupação",1]],
  why:"Art. 39, § 2º, exclui expressamente os três últimos da dívida ativa tributária."},

f31:{t:"mc", instr:"A dívida ativa é reconhecida contabilmente:",
  options:["no ativo, por ser fonte potencial de fluxos de caixa",
           "no passivo, por ser obrigação do ente",
           "no resultado, como variação patrimonial diminutiva",
           "fora do balanço, em contas de compensação"], answer:0,
  why:"É crédito a receber. Quem fica no passivo é a <b>dívida pública</b>."},

f32:{t:"gap", instr:"Complete a frase",
  before:"O resultado nominal é a diferença entre receitas e despesas ", after:".",
  options:["totais","primárias","correntes"], answer:0,
  why:"O primário exclui o componente financeiro; o nominal, não."}
};

for(var i=0;i<QS.length;i++) EX["t"+i]={t:"ce", qi:i};

var KIT = {
  r1:{tema:"Receita orçamentária e extraorçamentária",
    bases:["Lei nº 4.320/1964, art. 11 — classificação da receita",
           "Lei nº 4.320/1964, art. 57 — receita orçamentária",
           "Lei nº 4.320/1964, art. 3º — receitas de operações de crédito",
           "MCASP — ingressos orçamentários e extraorçamentários"],
    ouro:["fluxo de recursos financeiros","ainda que não previstas no orçamento",
          "recursos restituíveis","mero depositário","passivos exigíveis",
          "caráter temporário","variação patrimonial aumentativa",
          "ingresso extraordinário e orçamentário","antecipação de receita orçamentária"],
    abertura:"Receita orçamentária compreende todas as receitas arrecadadas, inclusive as provenientes de operações de crédito, ainda que não previstas no orçamento, ao passo que a receita extraorçamentária corresponde a entradas de recursos restituíveis, em relação às quais o Estado atua como mero depositário.",
    evite:"Não trate extraordinário como sinônimo de extraorçamentário. A doação de dinheiro é extraordinária, mas plenamente orçamentária."},
  r2:{tema:"Classificações da receita",
    bases:["Lei nº 4.320/1964, arts. 11 e 39 — categorias e dívida ativa",
           "CF/1988, art. 165, § 5º — esferas orçamentárias",
           "MCASP — classificações da receita orçamentária",
           "Portaria Interministerial STN/SOF nº 163/2001"],
    ouro:["forma de ingresso","procedência ou coercitividade","originária","derivada",
          "afetação patrimonial","fato permutativo","recebimento de dívida ativa",
          "transferências de capital","regularidade","caráter eventual"],
    abertura:"A receita pública comporta múltiplas classificações, que respondem a critérios distintos: a titularidade do recurso, a existência de coerção sobre o particular, o efeito sobre o patrimônio líquido e a periodicidade do ingresso.",
    evite:"Não apresente a correspondência corrente/efetiva e capital/não efetiva como absoluta. O ponto da questão são sempre as duas exceções."},
  r3:{tema:"Natureza, fonte e resultado primário",
    bases:["Portaria Interministerial STN/SOF nº 163/2001 — natureza da receita",
           "MCASP — classificação por fonte e destinação de recursos",
           "LC nº 101/2000, art. 4º, § 1º — metas de resultado primário e nominal",
           "Manual Técnico do Orçamento (MTO)"],
    ouro:["categoria econômica","origem","espécie","desdobramentos de uso opcional",
          "tipo de arrecadação","grupo de fonte","especificação da fonte",
          "resultado primário","receitas primárias","receitas financeiras","resultado nominal"],
    abertura:"A classificação da receita por natureza é operada por código numérico de oito dígitos que conjuga categoria econômica, origem, espécie, os desdobramentos destinados à identificação de peculiaridades e o tipo de arrecadação.",
    evite:"Não diga que o identificador de resultado primário é obrigatório para todos os entes: foi instituído para a União."},
  r4:{tema:"Etapas da receita e dívida ativa",
    bases:["Lei nº 4.320/1964, art. 51 a 57 — etapas da receita",
           "Lei nº 4.320/1964, art. 53 — lançamento",
           "Lei nº 4.320/1964, art. 39 e § 2º — dívida ativa",
           "CTN, art. 201 — dívida ativa tributária"],
    ouro:["previsão, lançamento, arrecadação e recolhimento",
          "ato da repartição competente","procedência do crédito fiscal",
          "inscreve o débito desta","agentes arrecadadores","conta específica do Tesouro",
          "certeza e liquidez","fonte potencial de fluxos de caixa","reconhecida no ativo"],
    abertura:"A receita orçamentária percorre quatro etapas: a previsão, única de planejamento, e o lançamento, a arrecadação e o recolhimento, que compõem a execução.",
    evite:"Não confunda arrecadação com recolhimento. Arrecadar é receber do contribuinte; recolher é transferir ao Tesouro."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. Receita pública é o segundo assunto mais cobrado do caderno (167 questões): vale investir na precisão dos termos.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre a receita pública, disserte necessariamente sobre:</p>'+
  '<ol><li>a distinção entre receita orçamentária e extraorçamentária, com o tratamento das doações;</li>'+
  '<li>as classificações quanto à procedência e quanto à afetação patrimonial, indicando as exceções desta última;</li>'+
  '<li>as etapas da receita pública e o conceito legal de lançamento.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>A receita pública, em sentido amplo, compreende as receitas orçamentárias e as extraorçamentárias; em sentido estrito, apenas as primeiras. São <b>receitas orçamentárias</b> todas as receitas arrecadadas, inclusive as provenientes de operações de crédito, ainda que não previstas no orçamento. São <b>extraorçamentárias</b> as entradas de recursos restituíveis, que não pertencem ao Estado: este atua como mero depositário, tais ingressos não integram o orçamento público, constituem passivos exigíveis do ente, possuem caráter temporário e sua devolução não se sujeita a autorização legislativa. Quanto às doações, o recebimento de <b>dinheiro</b> constitui receita orçamentária — ingresso extraordinário, por não estar previsto, mas orçamentário —, ao passo que o recebimento de <b>bens</b> não gera ingresso de recursos, representando mera variação patrimonial aumentativa. Não se confunda, portanto, o extraordinário com o extraorçamentário.</p>'+
  '<p>Quanto à <b>procedência</b> ou coercitividade, a receita é originária quando decorre da exploração do próprio patrimônio do Estado, como nas concessões, royalties e aluguéis, situação em que não há coerção sobre o particular; e derivada quando obtida mediante a autoridade coercitiva estatal, que exige do particular a entrega compulsória de determinada quantia, como nos impostos, taxas, multas e contribuições.</p>'+
  '<p>Quanto à <b>afetação patrimonial</b>, a receita é efetiva quando contribui para o aumento do patrimônio líquido e não efetiva quando não contribui. A regra geral é que as receitas correntes sejam efetivas e as de capital, não efetivas. Há, contudo, uma exceção em cada sentido: o <b>recebimento de dívida ativa</b>, embora receita corrente, representa fato permutativo e é, por isso, não efetivo; e o recebimento de <b>transferências de capital</b>, embora receita de capital, causa acréscimo patrimonial e é, por isso, efetivo.</p>'+
  '<p>Por fim, a receita orçamentária percorre quatro <b>etapas</b>, resumidas no mnemônico PLAR. A previsão, única etapa de planejamento, implica estimar a arrecadação das receitas que constarão da proposta orçamentária. As três seguintes integram a execução: o lançamento, definido pelo art. 53 da Lei nº 4.320/1964 como o ato da repartição competente que verifica a procedência do crédito fiscal e a pessoa que lhe é devedora e inscreve o débito desta; a arrecadação, que corresponde à entrega dos recursos devidos ao Tesouro pelos contribuintes por meio dos agentes arrecadadores; e o recolhimento, que é a transferência dos valores arrecadados à conta específica do Tesouro.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> a expressão “ainda que não previstas no orçamento”, a ideia de recurso restituível e a distinção doação de dinheiro / doação de bens.</li>'+
  '<li><b>Item 2:</b> o critério da coerção e, sobretudo, <b>as duas exceções</b> da afetação patrimonial, com os termos “fato permutativo” e “acréscimo patrimonial”.</li>'+
  '<li><b>Item 3:</b> as quatro etapas na ordem, a separação planejamento/execução e a literalidade do art. 53.</li>'+
  '<li><b>Fecho:</b> não é obrigatório aqui; melhor gastar as linhas finais detalhando as exceções do item 2.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Classifique item a item; não sobra espaço para teoria geral.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>Determinado ente público registrou, no exercício, os seguintes ingressos:</p>'+
  '<ol><li>arrecadação de IPTU lançado no início do exercício;</li>'+
  '<li>caução depositada por empresa participante de licitação;</li>'+
  '<li>recebimento, em dinheiro, de doação de instituição privada, não prevista na LOA;</li>'+
  '<li>recebimento de valores inscritos em dívida ativa há três exercícios;</li>'+
  '<li>contratação de operação de crédito por antecipação de receita orçamentária.</li></ol>'+
  '<p><b>Pergunta-se:</b> classifique cada ingresso quanto à forma de ingresso, à procedência e à afetação patrimonial, quando cabível, e indique em que etapa da receita se encontra o ingresso nº 1.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1. IPTU arrecadado.</b> Receita <b>orçamentária</b>, <b>derivada</b> (obtida mediante autoridade coercitiva) e <b>efetiva</b>, por ser receita corrente que aumenta o patrimônio líquido. Quanto às etapas, o ingresso já percorreu a previsão e o lançamento — a emissão do carnê é o exemplo clássico do art. 53 — e encontra-se na etapa de <b>arrecadação</b>; o recolhimento só se completará com a transferência à conta específica do Tesouro.</p>'+
  '<p><b>2. Caução de licitante.</b> Receita <b>extraorçamentária</b>: recurso restituível, de terceiro, em relação ao qual o ente é mero depositário. Não comporta classificação quanto à procedência nem quanto à afetação patrimonial, por não integrar o orçamento nem alterar o patrimônio líquido — constitui passivo exigível.</p>'+
  '<p><b>3. Doação em dinheiro.</b> Receita <b>orçamentária</b>, ainda que não prevista na LOA — ingresso <b>extraordinário</b> quanto à regularidade, mas orçamentário quanto à forma de ingresso. É <b>originária</b>, pois não há coerção, e <b>efetiva</b>, por aumentar o patrimônio líquido. Se a doação fosse de bens, não haveria receita orçamentária, mas apenas variação patrimonial aumentativa.</p>'+
  '<p><b>4. Recebimento de dívida ativa.</b> Receita <b>orçamentária</b> e <b>corrente</b>, porém <b>não efetiva</b>: é a exceção da regra, pois o crédito já estava reconhecido no ativo e o recebimento apenas o converte em disponibilidade — fato permutativo. Quanto à procedência, segue a natureza do crédito originário: tributária, no caso de dívida ativa tributária, e portanto derivada.</p>'+
  '<p><b>5. ARO.</b> Receita <b>extraorçamentária</b>. Embora as operações de crédito em geral sejam receitas orçamentárias e de capital, a operação por <b>antecipação de receita orçamentária</b> é a exceção: tem caráter transitório e deve ser liquidada dentro do exercício.</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>Chamar a <b>3</b> de extraorçamentária, porque não estava prevista. Extraordinário ≠ extraorçamentário.</li>'+
  '<li>Chamar a <b>4</b> de efetiva, porque é receita corrente. É a exceção: permutativa.</li>'+
  '<li>Chamar a <b>5</b> de orçamentária, porque é operação de crédito. A ARO é a exceção.</li>'+
  '<li>Colocar a <b>1</b> na etapa de recolhimento. Recolher é transferir ao Tesouro, não receber do contribuinte.</li></ul></div>';

var TEC = [["CESPE","Q3cKzN"],["FCC","Q3cL09"],["FGV","Q3cL1M"],["VUNESP","Q3cL1y"]];

var UNITS = [
  {n:1, title:"Conceito e forma de ingresso", cvar:"u1", lessons:[
    {id:"k1", type:"teoria", title:"Receita pública e seus sentidos",  xp:10, data:"r1"},
    {id:"k2", type:"drill",  title:"Praticar · sentidos",              xp:20, data:["f1","t0","t1"]},
    {id:"k3", type:"teoria", title:"Orçamentária × extraorçamentária", xp:10, data:"r2"},
    {id:"k4", type:"drill",  title:"Praticar · forma de ingresso",     xp:25, data:["f2","f5","t2","t3","t7"]},
    {id:"k5", type:"drill",  title:"Praticar · doações e ARO",         xp:20, data:["f3","f4","t4","t5","t6","t8"]},
    {id:"k6", type:"flash",  title:"Flashcards · conceito e ingresso", xp:15, data:[0,1,2,3,4,5,6,7]},
    {id:"k7", type:"feynman",title:"Explique orçamentária × extra",    xp:30, data:"r1"}
  ]},
  {n:2, title:"Procedência, afetação e regularidade", cvar:"u2", lessons:[
    {id:"k9", type:"teoria", title:"Procedência e afetação",           xp:10, data:"r3"},
    {id:"k10",type:"drill",  title:"Praticar · originária e derivada", xp:20, data:["f6","t9","t10","t11"]},
    {id:"k11",type:"drill",  title:"Praticar · efetiva e não efetiva", xp:25, data:["f7","f8","t12","t13","t14"]},
    {id:"k12",type:"teoria", title:"Regularidade e esfera",            xp:10, data:"r4"},
    {id:"k13",type:"drill",  title:"Praticar · regularidade",          xp:20, data:["f9","f10","t15","t33"]},
    {id:"k14",type:"flash",  title:"Flashcards · classificações",      xp:15, data:[8,9,10,11,27]},
    {id:"k15",type:"feynman",title:"Explique as três classificações",  xp:30, data:"r2"}
  ]},
  {n:3, title:"Natureza, fonte e resultado primário", cvar:"u3", lessons:[
    {id:"k17",type:"teoria", title:"Código de natureza — COE-DT",      xp:10, data:"r4"},
    {id:"k18",type:"drill",  title:"Praticar · COE-DT",                xp:20, data:["f11","f12","f13","t16","t17","t18"]},
    {id:"k19",type:"drill",  title:"Praticar · categoria econômica",   xp:25, data:["f14","f15","f16","t22","t23","t24","t25"]},
    {id:"k20",type:"drill",  title:"Praticar · origem, espécie e tipo", xp:20, data:["f17","f18","f19","t19","t20","t21"]},
    {id:"k21",type:"teoria", title:"Fonte e resultado primário",       xp:10, data:"r5"},
    {id:"k22",type:"drill",  title:"Praticar · fonte de recursos",     xp:20, data:["f20","f21","t26","t27"]},
    {id:"k23",type:"drill",  title:"Praticar · resultado primário",    xp:25, data:["f22","f23","f24","f32","t28","t29","t30","t31","t32"]},
    {id:"k24",type:"flash",  title:"Flashcards · natureza e fonte",    xp:15, data:[12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]},
    {id:"k25",type:"feynman",title:"Explique o código de natureza",    xp:30, data:"r3"}
  ]},
  {n:4, title:"Etapas e dívida ativa", cvar:"u4", lessons:[
    {id:"k27",type:"teoria", title:"Etapas da receita — PLAR",         xp:10, data:"r6"},
    {id:"k28",type:"drill",  title:"Praticar · etapas",                xp:25, data:["f25","f26","f27","f28","t34","t35","t36","t37"]},
    {id:"k29",type:"drill",  title:"Praticar · dívida ativa",          xp:25, data:["f29","f30","f31","t38","t39","t40","t41"]},
    {id:"k30",type:"flash",  title:"Flashcards · etapas e dívida ativa",xp:15, data:[28,29,30,31,32,33,34,35]},
    {id:"k31",type:"feynman",title:"Explique as etapas e a dívida ativa", xp:30, data:"r4"},
    {id:"k33",type:"leitura",title:"Discursiva resolvida",             xp:25, data:"disc"},
    {id:"k34",type:"leitura",title:"Estudo de caso resolvido",         xp:25, data:"caso"},
    {id:"krev",type:"review",title:"Revisão geral das unidades",       xp:60, data:null},
    {id:"k35",type:"missao", title:"Missão TEC Concursos",             xp:15, data:null},
    {id:"k36",type:"prova",  title:"Simulado cronometrado",            xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Errado — trocou os sentidos. Em sentido <b>estrito</b> (stricto sensu), a receita pública abrange apenas as <b>receitas orçamentárias</b>. É em sentido <b>amplo</b> (lato sensu) que ela soma receitas orçamentárias <b>+</b> receitas extraorçamentárias.</p><p>Para fixar: o sentido amplo é o que junta tudo o que entra nos cofres, inclusive o que é só de passagem; o estrito fica apenas com o que pertence ao orçamento.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificações da Receita Pública</i></p>",
1:"<p>Certo — é a definição do Resumo. Receitas orçamentárias são <b>todas as receitas arrecadadas</b>, <b>inclusive as provenientes de operações de crédito</b>, <b>ainda que não previstas no orçamento</b>.</p><p>O que define a receita orçamentária é o ingresso de recurso que pertence ao Estado, e não a previsão na LOA. Por isso a doação em dinheiro, mesmo sem previsão, também é orçamentária.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificação quanto à forma de ingresso</i></p>",
2:"<p>Errado duas vezes. Pelo esquema do Resumo, as receitas extraorçamentárias <b>não integram o orçamento público</b> e seu pagamento (a devolução) <b>não está sujeito à autorização legislativa</b>.</p><p>Elas são entradas <b>restituíveis</b>, que não pertencem ao Estado: são passivos exigíveis do ente, têm caráter temporário e não se incorporam ao patrimônio público. O Estado atua como mero depositário.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Receitas extraorçamentárias</i></p>",
3:"<p>Certo — está literalmente no esquema do Resumo: nas receitas extraorçamentárias, <b>o Estado atua como mero depositário</b>.</p><p>Os recursos são restituíveis e não pertencem ao Estado. Pense nos exemplos do material: <b>cauções, fianças, depósitos para garantia, retenções na fonte, consignações em folha</b>. O dinheiro entra, mas terá de sair para o seu dono.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Receitas extraorçamentárias</i></p>",
4:"<p>Certo — é o quadro <b>ATENÇÃO!</b> do Resumo. O recebimento de <b>dinheiro</b> em doação é receita orçamentária: embora não previsto na LOA, tem as características das receitas orçamentárias. É ingresso <b>extraordinário e orçamentário</b>.</p><p>Não confunda <b>extraordinário</b> (não estava previsto) com <b>extraorçamentário</b> (recurso transitório que passa pelos cofres públicos).</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificação quanto à forma de ingresso — ATENÇÃO</i></p>",
5:"<p>Errado — é o outro lado do quadro <b>NÃO CONFUNDA!</b> do Resumo. O recebimento de <b>bens</b> em doação (o exemplo do material é justamente o <b>veículo</b>) não gera ingresso de recursos.</p><p>Representa apenas uma <b>Variação Patrimonial Aumentativa (VPA)</b>, afetando só o resultado patrimonial. Resumo do quadro: doação em <b>dinheiro</b> = receita orçamentária; doação de <b>bens</b> = VPA.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificação quanto à forma de ingresso — NÃO CONFUNDA</i></p>",
6:"<p>Errado. O Resumo alerta duas vezes: <b>não confunda receita extraordinária com receita extraorçamentária</b>.</p><p><b>Extraordinária</b> é classificação quanto à <b>regularidade</b>: ingresso eventual, não previsto (doações, indenizações, imposto criado em caso de guerra). <b>Extraorçamentária</b> é classificação quanto à <b>forma de ingresso</b>: recurso transitório, restituível, que só passa pelos cofres públicos. A doação em dinheiro, por exemplo, é extraordinária <b>e</b> orçamentária.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Quanto à regularidade — OBS.</i></p>",
7:"<p>Certo — está na lista de exemplos do Resumo: <b>inscrição em Restos a Pagar</b> é receita extraorçamentária.</p><p>O material faz a ressalva entre parênteses, que a banca adora inverter: o <b>pagamento</b> de RP é <b>despesa extraorçamentária</b>. Inscrição entra como receita extra; pagamento sai como despesa extra.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Exemplos de receitas extraorçamentárias</i></p>",
8:"<p>Errado — é o quadro <b>NÃO CONFUNDA!</b> do Resumo. <b>Operação de crédito</b> é receita orçamentária; <b>operação de crédito por antecipação de receita (ARO)</b> é receita <b>extraorçamentária</b>.</p><p>A ARO aparece na lista de exemplos de receitas extraorçamentárias, ao lado de cauções, fianças, depósitos, retenções na fonte e emissões de papel moeda.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Receitas extraorçamentárias — NÃO CONFUNDA</i></p>",
9:"<p>Errado — trocou os nomes. As receitas obtidas pelo Estado <b>mediante sua autoridade coercitiva</b> são as <b>derivadas</b>: o Estado exige que o particular entregue, de forma compulsória, determinada quantia.</p><p><b>Originárias</b> são as de origem do <b>próprio patrimônio do Estado</b> (concessão, royalties, aluguel). Derivadas: <b>impostos, taxas, multas, contribuições</b>.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificação quanto à coercitividade ou procedência</i></p>",
10:"<p>Certo — são exatamente os exemplos do Resumo para receita <b>originária</b>: <b>concessão, royalties, aluguel</b>.</p><p>Originária é a receita que tem origem no <b>próprio patrimônio do Estado</b>, sem uso do poder coercitivo. Do outro lado ficam as derivadas (impostos, taxas, multas, contribuições), obtidas pela autoridade coercitiva.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificação quanto à coercitividade ou procedência</i></p>",
11:"<p>Certo — é a lista de exemplos do Resumo para receita <b>derivada</b>: <b>impostos, taxas, multas, contribuições</b>.</p><p>Derivadas são obtidas pelo Estado <b>mediante sua autoridade coercitiva</b>: ele exige que o particular entregue, de forma compulsória, determinada quantia. As originárias vêm do próprio patrimônio estatal (concessão, royalties, aluguel).</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificação quanto à coercitividade ou procedência</i></p>",
12:"<p>Errado — descreveu a receita <b>não efetiva</b>. Receita <b>efetiva</b> é a que <b>contribui para o aumento do patrimônio líquido</b>.</p><p>Regra do quadro do Resumo: são efetivas todas as receitas <b>correntes</b>, exceto o recebimento de dívida ativa; são não efetivas todas as receitas de <b>capital</b>, exceto o recebimento de transferências de capital.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificação quanto à afetação patrimonial</i></p>",
13:"<p>Certo — é a exceção do quadro do Resumo. São efetivas todas as receitas correntes, <b>com exceção do recebimento de dívida ativa</b>, que representa <b>fato permutativo</b> e, assim, é <b>não efetiva</b>.</p><p>O ente apenas troca um direito (o crédito inscrito no ativo) por dinheiro: não há aumento do patrimônio líquido. Lembre as duas exceções cruzadas: dívida ativa (corrente não efetiva) e transferência de capital (capital efetiva).</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificação quanto à afetação patrimonial</i></p>",
14:"<p>Errado — é justamente a exceção. São não efetivas todas as receitas de capital, <b>com exceção do recebimento de transferências de capital</b>, que causa <b>acréscimo patrimonial</b> e, assim, é <b>efetiva</b>.</p><p>As duas exceções do quadro se cruzam: o recebimento de dívida ativa é receita <b>corrente não efetiva</b>; a transferência de capital é receita <b>de capital efetiva</b>.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificação quanto à afetação patrimonial</i></p>",
15:"<p>Certo — são os exemplos do Resumo para receita <b>extraordinária</b>: <b>doações, indenizações em favor do Estado, imposto criado em caso de guerra</b>.</p><p>Extraordinárias são ingressos de caráter <b>eventual</b> (não regular). Ordinárias têm arrecadação regular, contínua, em cada exercício (exemplos: IR, ICMS, IPVA, IPTU). E a OBS. do material: não confunda extraordinária com extraorçamentária.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificação quanto à regularidade (periodicidade)</i></p>",
16:"<p>Errado no número. A natureza de receita é um código numérico de <b>8 dígitos</b>: categoria econômica (1º), origem (2º), espécie (3º), desdobramentos (4º ao 7º) e tipo (8º).</p><p>O exemplo do Resumo é o IRPF recolhido dos trabalhadores: <b>1.1.1.3011.1</b> — receita corrente; impostos, taxas e contribuições de melhoria; impostos; IRPF; principal. Bizu: <b>COE-DT</b>.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificação quanto à natureza</i></p>",
17:"<p>Certo. No código de natureza de receita, o <b>2º dígito</b> é a <b>origem</b>, que detalha a categoria econômica e identifica a <b>procedência</b> das receitas no momento em que ingressam nos cofres públicos.</p><p>Bizu <b>COE-DT</b>: [C]ategoria econômica (1º), [O]rigem (2º), [E]spécie (3º), [D]esdobramentos (4º ao 7º), [T]ipo (8º). No exemplo do IRPF (1.1.1.3011.1), a origem 1 é <b>Impostos, Taxas e Contribuições de Melhoria</b>.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Origem da receita</i></p>",
18:"<p>Certo. A <b>espécie</b> ocupa o <b>3º dígito</b> e, no bizu COE-DT, é <b>o detalhamento do fato gerador</b>. Vinculada à origem, permite qualificar com maior detalhe o fato gerador das receitas.</p><p>Exemplo do Resumo: dentro da origem \"Contribuições\", as espécies são Contribuições Sociais, Contribuições Econômicas e Contribuições para Entidades Privadas de Serviço Social e de Formação Profissional.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Espécie</i></p>",
19:"<p>Errado — são de uso <b>opcional</b>. O bizu COE-DT diz: [D]esdobramentos para identificação de peculiaridades → <b>é de uso opcional</b>.</p><p>Foram reservados <b>4 dígitos</b> (do 4º ao 7º), que <b>podem ou não</b> ser utilizados conforme a necessidade de especificação do recurso. A finalidade é identificar peculiaridades de cada receita, <b>caso seja necessário</b>.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Desdobramentos para identificação de peculiaridades da receita</i></p>",
20:"<p>Certo — é o exemplo do Resumo. No caso de receitas exclusivas de Estados e Municípios, o <b>quarto dígito</b> utiliza o número <b>8</b>.</p><p>O material ilustra com <b>1.9.0.8XXX.X</b> (Outras Receitas Correntes exclusivas de Estados e Municípios). O 4º dígito é o primeiro dos quatro reservados aos desdobramentos para identificação de peculiaridades.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Desdobramentos para identificação de peculiaridades da receita</i></p>",
21:"<p>Certo. O <b>tipo</b> é o último dígito (8º) e identifica o tipo de arrecadação. O <b>3</b> indica <b>Dívida Ativa</b> da respectiva receita.</p><p>A tabela completa do Resumo: <b>0</b> natureza não valorizável ou agregadora; <b>1</b> principal; <b>2</b> multas e juros de mora; <b>3</b> dívida ativa; <b>4</b> multas e juros de mora da dívida ativa.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Tipo</i></p>",
22:"<p>Errado. <b>Alienação de bens</b> é receita <b>de capital</b>.</p><p>Mnemônico do Resumo para receitas de capital: <b>Opera-Ali-Amor-Trans-Ou</b> — Operações de crédito, Alienação de bens, Amortização de empréstimos concedidos, Transferências de capital, Outras receitas de capital. No código, a alienação é a origem 2 dentro da categoria 2.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificação quanto à categoria econômica</i></p>",
23:"<p>Certo. Receita patrimonial e receita de serviços estão na lista de receitas <b>correntes</b>.</p><p>Mnemônico do Resumo: <b>Tributa-Con-P-A-I-S-Trans-Ou</b> — Tributárias, Contribuições, Patrimonial, Agropecuária, Industrial, Serviços, Transferências correntes, Outras receitas correntes. No código, a patrimonial é a origem 3 e a de serviços, a origem 6.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificação quanto à categoria econômica</i></p>",
24:"<p>Certo. <b>Amortização de empréstimos concedidos</b> é receita de capital — é o \"Amor\" do mnemônico <b>Opera-Ali-Amor-Trans-Ou</b>.</p><p>No código de natureza, aparece como origem 3 (Amortização de Empréstimos) dentro da categoria 2 (Receitas de Capital). Ela também está listada no Resumo entre as <b>receitas financeiras</b>, para fins de resultado primário.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificação quanto à categoria econômica</i></p>",
25:"<p>Errado — o 7 é das <b>correntes</b>. Pela tabela do Resumo, na categoria econômica (1º dígito): <b>1</b> receitas correntes; <b>2</b> receitas de capital; <b>7</b> receitas <b>correntes</b> intraorçamentárias; <b>8</b> receitas <b>de capital</b> intraorçamentárias.</p><p>Para lembrar: o 7 acompanha o 1 (correntes) e o 8 acompanha o 2 (capital), na mesma ordem.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Origem da receita — tabela de categoria econômica</i></p>",
26:"<p>Certo — é a abertura da seção. A classificação por fonte/destinação consiste em um código de <b>três dígitos</b>: o <b>1º</b> representa o <b>grupo de fonte</b>; o <b>2º e o 3º</b>, a <b>especificação da fonte</b>.</p><p>Exemplo do Resumo: fonte <b>101</b> — grupo 1 (Recursos Arrecadados no Exercício Corrente) e especificação 01 (Transferências do IR e do IPI).</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificação quanto à fonte (ou destinação) de recursos</i></p>",
27:"<p>Errado no grupo. Na fonte <b>301</b>, o 1º dígito <b>3</b> indica <b>Recursos Arrecadados em Exercícios Anteriores</b>; a especificação 01 é Transferências do IR e do IPI.</p><p>Os três exemplos do Resumo: <b>101</b> — exercício corrente; <b>301</b> — exercícios anteriores; <b>900</b> — recursos condicionados / recursos primários de livre aplicação. Quem identifica o exercício corrente é o grupo <b>1</b>.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificação quanto à fonte (ou destinação) de recursos</i></p>",
28:"<p>Errado. O identificador de resultado primário foi instituído <b>para a União</b>, com o objetivo de identificar as receitas e despesas que compõem o resultado primário do Governo Federal, porém <b>não tem caráter obrigatório para todos os entes</b>.</p><p>É um indicador que auxilia a apuração do resultado primário previsto para o exercício.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificação quanto ao identificador de resultado primário</i></p>",
29:"<p>Certo — é a fórmula do Resumo: <b>Resultado primário = Receitas primárias − Despesas primárias</b>.</p><p>As receitas financeiras ficam de fora, porque criam uma obrigação (dívida) ou extinguem um direito de natureza financeira, alterando ao mesmo tempo o ativo e o passivo financeiros. E atenção: resultado primário é diferente de resultado nominal.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>O que é resultado primário?</i></p>",
30:"<p>Certo — está no quadro <b>ATENÇÃO!</b> do Resumo: as receitas primárias são, <b>em regra</b>, as receitas correntes (<b>exceto receita de juros</b>).</p><p>O material acrescenta que há também receitas <b>de capital</b> primárias, decorrentes da <b>alienação de bens</b> e das <b>transferências de capital</b>. Já os juros recebidos (receita de aplicações financeiras) estão entre as receitas financeiras.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Identificador de resultado primário — ATENÇÃO</i></p>",
31:"<p>Errado. No quadro <b>NÃO CONFUNDA!</b> do Resumo, <b>contratação de operações de crédito</b> e <b>privatização</b> estão na coluna das <b>receitas financeiras</b>.</p><p>Receitas financeiras: emissão de títulos, contratação de operações de crédito, receita de aplicações financeiras (juros recebidos), privatização, amortização de empréstimos concedidos. Elas não contribuem para o resultado primário, porque criam dívida ou extinguem direito de natureza financeira.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Receitas primárias x receitas financeiras — NÃO CONFUNDA</i></p>",
32:"<p>Errado. O quadro <b>ATENÇÃO!</b> do Resumo é direto: <b>resultado primário é diferente de resultado nominal</b>.</p><p>O <b>primário</b> é a diferença entre receitas <b>primárias</b> e despesas <b>primárias</b>. O <b>nominal</b> é a diferença entre receitas e despesas <b>totais</b>.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Identificador de resultado primário — ATENÇÃO</i></p>",
33:"<p>Certo. Conforme o art. 165, § 5º, da Constituição, a classificação por esfera orçamentária identifica se a receita pertence ao Orçamento <b>Fiscal</b>, da <b>Seguridade Social</b> ou de <b>Investimento das Empresas Estatais</b>.</p><p>Exemplo do Resumo: impostos municipais arrecadados por uma prefeitura vão para o <b>Orçamento Fiscal</b>, pois cobrirão despesas gerais da administração, como salários e material de escritório.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Classificação por esfera orçamentária</i></p>",
34:"<p>Certo — é o mnemônico do Resumo: <b>PLAR</b> — <b>P</b>revisão, <b>L</b>ançamento, <b>A</b>rrecadação e <b>R</b>ecolhimento.</p><p>A previsão é a fase de <b>planejamento</b>; lançamento, arrecadação e recolhimento são as fases de <b>execução</b> da receita.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Etapas da receita pública</i></p>",
35:"<p>Errado. No esquema do Resumo, apenas a <b>previsão</b> é fase de <b>planejamento</b>. O <b>lançamento</b>, junto com arrecadação e recolhimento, compõe as fases de <b>execução</b> da receita.</p><p>No PLAR, só o P planeja: a previsão estima a arrecadação que constará na proposta orçamentária. O resto (L-A-R) executa. Exemplo de lançamento do material: emissão do carnê do IPTU.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Etapas da receita pública</i></p>",
36:"<p>Certo — é a definição do art. 53 da Lei nº 4.320/1964 transcrita no Resumo: lançamento é o <b>ato da repartição competente</b>, que <b>verifica a procedência do crédito fiscal e a pessoa que lhe é devedora e inscreve o débito desta</b>.</p><p>Exemplo do material: a <b>emissão do carnê do IPTU</b>.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Definições das etapas da receita pública — Lançamento</i></p>",
37:"<p>Errado — descreveu a <b>arrecadação</b>. Arrecadação é a entrega dos recursos devidos ao Tesouro pelos contribuintes, <b>por meio dos agentes arrecadadores</b> (instituições financeiras autorizadas).</p><p><b>Recolhimento</b> é a etapa seguinte: a <b>transferência dos valores arrecadados à conta específica do Tesouro</b>. Exemplo do Resumo: a pessoa paga o imposto de renda (arrecadação) e o valor depois é transferido à conta sob controle do Tesouro (recolhimento).</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Definições das etapas da receita pública</i></p>",
38:"<p>Errado — é no <b>ativo</b>. A dívida ativa é o conjunto de créditos em favor da Fazenda Pública; é uma fonte potencial de fluxos de caixa e é <b>reconhecida contabilmente no ativo</b>.</p><p>A pegadinha é confundir com a <b>dívida pública</b>, que representa as obrigações do ente com terceiros e é reconhecida no <b>passivo</b>.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Dívida ativa</i></p>",
39:"<p>Certo — está no esquema do Resumo: a dívida ativa é <b>inscrita pelo órgão ou entidade competente, após apuração de certeza e liquidez</b>.</p><p>Ela reúne créditos tributários e não tributários em favor da Fazenda Pública <b>não recebidos no prazo</b>, e é reconhecida no <b>ativo</b> (não se confunde com a dívida pública, que fica no passivo).</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Dívida ativa</i></p>",
40:"<p>Certo — é a definição do quadro NÃO CONFUNDA! (Lei 4.320, art. 39, § 2º): dívida ativa tributária é o crédito da Fazenda Pública dessa natureza, <b>proveniente de obrigação legal relativa a tributos e respectivos adicionais e multas</b>.</p><p>Dívida ativa <b>não tributária</b> são os <b>demais créditos</b> da Fazenda Pública.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Dívida ativa — NÃO CONFUNDA</i></p>",
41:"<p>Errado — é o quadro <b>ATENÇÃO!</b> do Resumo. De acordo com a Lei nº 4.320/64, art. 39, § 2º, <b>não é</b> dívida ativa tributária: <b>empréstimo compulsório</b>, <b>contribuições estabelecidas em lei</b> e <b>taxas de ocupação</b>.</p><p>Esses créditos entram como dívida ativa <b>não tributária</b> (os demais créditos da Fazenda Pública). Guarde a trinca, que a banca costuma apresentar como se fosse tributária.</p><p class='fb-fonte'>AFO — Resumo 07 · <i>Dívida ativa — ATENÇÃO</i></p>",
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"07", nome:"Receita pública", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, PROVA_POOL:PROVA_POOL};
})();
