/* Direito Tributário — Módulo 05: Legislação tributária — vigência, aplicação, interpretação e integração (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dtrib05 = (function(){
"use strict";

var CARDS = [
  ["Que parte do CTN trata da legislação tributária?","O <b>Título I do Livro Segundo</b>, do <b>art. 96 ao art. 112</b>, em quatro capítulos: <b>disposições gerais</b> (96-100), <b>vigência</b> (101-104), <b>aplicação</b> (105-106) e <b>interpretação e integração</b> (107-112)."],
  ["O que compreende a expressão “legislação tributária”? (art. 96)","As <b>leis</b>, os <b>tratados e convenções internacionais</b>, os <b>decretos</b> e as <b>normas complementares</b> que versem, no todo ou em parte, sobre <b>tributos e relações jurídicas a eles pertinentes</b>."],
  ["“Lei” e “legislação tributária” são a mesma coisa?","<b>NÃO.</b> “Legislação tributária” tem sentido <b>AMPLO</b> — abrange até o decreto estadual que regulamenta a lei do IPVA. “Lei” é só o ato do Legislativo."],
  ["Quem celebra e quem aprova os tratados internacionais?","<b>Celebra</b> o Presidente da República; <b>aprova</b> o <b>Congresso Nacional</b> (art. 49, I, da CF), por <b>decreto legislativo</b>."],
  ["Quais matérias são reservadas à LEI? (art. 97)","<b>i)</b> instituição e extinção de tributos; <b>ii)</b> majoração e redução; <b>iii)</b> definição do <b>fato gerador da obrigação principal</b> e do <b>sujeito passivo</b>; <b>iv)</b> fixação de <b>alíquota e base de cálculo</b>; <b>v)</b> cominação de <b>penalidades</b>; <b>vi)</b> hipóteses de <b>exclusão, suspensão e extinção</b> do crédito; <b>vii)</b> <b>dispensa ou redução de penalidades</b>."],
  ["Qual a lei que institui tributos, em regra?","A <b>lei ORDINÁRIA</b> — municipal, estadual ou federal. Taxas e contribuições de melhoria, por exemplo, nascem de lei ordinária."],
  ["O que se EQUIPARA à majoração do tributo?","A <b>modificação da base de cálculo</b> que importe em <b>torná-lo mais oneroso</b>."],
  ["O que NÃO constitui majoração de tributo?","A <b>ATUALIZAÇÃO do valor monetário</b> da base de cálculo. Pode ser feita por <b>decreto</b>, sem lei."],
  ["Qual o limite da atualização por decreto?","Não pode ser em <b>percentual superior ao índice oficial de correção monetária</b>."],
  ["O que diz a Súmula 160 do STJ?","“É <b>defeso ao Município atualizar o IPTU, mediante decreto, em percentual superior ao índice oficial</b> de correção monetária.”"],
  ["Mudar a DATA DE VENCIMENTO do tributo exige lei?","<b>NÃO</b> — não configura majoração; pode vir por <b>norma infralegal</b>, como um decreto."],
  ["O que diz o art. 98 do CTN?","Os <b>tratados e convenções internacionais REVOGAM ou MODIFICAM</b> a legislação tributária interna e <b>serão observados pela que lhes sobrevenha</b>."],
  ["Qual a leitura da doutrina sobre o art. 98?","Não há revogação propriamente: há <b>SUSPENSÃO DA EFICÁCIA</b> da legislação anterior, porque o tratado internalizado é tratado como <b>lei especial</b> — e a especial afasta a geral."],
  ["Qual o limite do decreto? (art. 99)","Seu <b>conteúdo e alcance restringem-se aos das LEIS em função das quais seja expedido</b>."],
  ["Obrigação acessória precisa de lei?","<b>NÃO</b> — “decorre da <b>LEGISLAÇÃO tributária</b>” (art. 113, § 2º). Escrituração, nota fiscal e declarações podem ser exigidas por decreto ou ato normativo."],

  ["Quais são as QUATRO normas complementares? (art. 100)","<b>i)</b> <b>atos normativos</b> expedidos pelas autoridades administrativas; <b>ii)</b> <b>decisões</b> de órgãos singulares ou coletivos de jurisdição administrativa a que a lei atribua <b>eficácia normativa</b>; <b>iii)</b> as <b>práticas reiteradamente observadas</b> pelas autoridades (os costumes); <b>iv)</b> os <b>convênios</b> entre União, Estados, DF e Municípios."],
  ["Normas complementares de quê?","<b>Das leis, dos tratados internacionais e dos decretos</b> — são o último degrau da legislação tributária."],
  ["Exemplos de atos normativos","<b>Portarias ministeriais · instruções normativas · ordens de serviço · resoluções do Secretário de Fazenda.</b>"],
  ["O que a OBSERVÂNCIA das normas complementares exclui? (art. 100, p.ú.)","<b>i)</b> a imposição de <b>penalidades</b>; <b>ii)</b> a cobrança de <b>juros de mora</b>; <b>iii)</b> a <b>atualização do valor monetário</b> da base de cálculo."],
  ["Convênio do CONFAZ e convênio do art. 100 são a mesma coisa?","<b>NÃO.</b> Os do <b>CONFAZ</b> têm previsão constitucional e são <b>normas PRIMÁRIAS</b>; os do <b>art. 100</b> são <b>normas complementares</b>, de mera colaboração entre as administrações tributárias."],
  ["Quando entram em vigor as normas complementares? (art. 103)","<b>Atos normativos → no ATO</b> (data da publicação).<br><b>Decisões com eficácia normativa → em DIAS</b> (30 dias após a publicação).<br><b>Convênios → por CONVENIÊNCIA</b> (na data neles prevista).<br><b>Salvo disposição em contrário.</b>"],
  ["Qual o bizu dos prazos do art. 103?","<b>Atos → no ATO · Decisões → em DIAS (30) · Convênios → por CONVENIÊNCIA.</b>"],
  ["A legislação de um Estado vigora fora do seu território? (art. 102)","<b>Sim, excepcionalmente</b> — nos limites em que reconheçam <b>convênios</b> de que participem, ou do que disponham as <b>normas gerais</b> expedidas pela União. É a <b>extraterritorialidade</b>."],
  ["O que prevê o art. 104 do CTN?","Entram em vigor no <b>primeiro dia do exercício seguinte</b> os dispositivos de lei sobre <b>impostos sobre o patrimônio ou a renda</b> que <b>instituam ou majorem</b>, <b>definam nova hipótese de incidência</b>, ou <b>extingam ou reduzam isenções</b> — salvo se a lei dispuser de <b>modo mais favorável</b>."],

  ["A que fatos a legislação tributária se aplica? (art. 105)","Aos <b>fatos geradores FUTUROS</b> e aos <b>PENDENTES</b> — aqueles cuja ocorrência tenha tido início mas não esteja completa."],
  ["Quando a lei se aplica a ato ou fato PRETÉRITO? (art. 106)","<b>I — em QUALQUER CASO</b>, quando seja <b>expressamente interpretativa</b>, excluída a aplicação de penalidade à infração dos dispositivos interpretados.<br><b>II — tratando-se de ato NÃO DEFINITIVAMENTE JULGADO</b>, nas três alíneas seguintes."],
  ["Quais as três hipóteses do art. 106, II?","<b>a)</b> quando <b>deixe de defini-lo como infração</b>; <b>b)</b> quando <b>deixe de tratá-lo como contrário a qualquer exigência de ação ou omissão</b>, desde que <b>não fraudulento</b> e sem <b>falta de pagamento de tributo</b>; <b>c)</b> quando lhe <b>comine penalidade MENOS SEVERA</b> que a da lei vigente ao tempo da prática."],
  ["Qual o pressuposto comum das três alíneas do inciso II?","O ato <b>NÃO ter sido definitivamente julgado</b>."],
  ["A retroatividade benéfica alcança ALÍQUOTAS?","<b>NÃO</b> — alcança as <b>MULTAS</b> (penalidade menos severa). É a pegadinha central do art. 106."],
  ["Exemplo da retroatividade benéfica","Em janeiro, alíquota de <b>30%</b> e multa de <b>20%</b>. Em agosto, lei reduz a alíquota para 15% e a multa para 10%. O contribuinte <b>continua devendo 30%</b> de imposto, mas paga <b>multa de 10%</b> — se o ato não foi definitivamente julgado."],
  ["Exemplo da alínea b (art. 106, II)","Empresa autuada só por descumprir <b>obrigação acessória</b> de ICMS, sem deixar de recolher o tributo. Antes de julgada a impugnação, outra lei <b>extingue aquela obrigação acessória</b> → aplica-se a lei nova ao <b>ato pretérito</b>."],

  ["Quais os meios de INTEGRAÇÃO e em que ordem? (art. 108)","<b>Sucessivamente, nesta ordem:</b> <b>1)</b> analogia · <b>2)</b> princípios gerais de <b>direito tributário</b> · <b>3)</b> princípios gerais de <b>direito público</b> · <b>4)</b> <b>equidade</b>."],
  ["Qual o limite da ANALOGIA?","Não pode resultar na <b>exigência de tributo não previsto em lei</b>."],
  ["Qual o limite da EQUIDADE?","Não pode resultar na <b>dispensa do pagamento de tributo devido</b>."],
  ["Por que esses dois limites existem?","Pelo <b>princípio da LEGALIDADE</b>: criar tributo e dispensar tributo devido só por lei. A legalidade é o limite da integração."],
  ["Para que servem os princípios gerais de direito PRIVADO? (art. 109)","Para <b>pesquisa da definição, do conteúdo e do alcance</b> dos institutos, conceitos e formas do direito privado — <b>mas NÃO para a definição dos EFEITOS TRIBUTÁRIOS</b>."],
  ["O que veda o art. 110?","Que a <b>lei tributária ALTERE a definição, o conteúdo e o alcance</b> de institutos, conceitos e formas de <b>direito privado</b> usados pela <b>CF, pelas Constituições estaduais ou pelas leis orgânicas</b> para <b>definir ou limitar competências tributárias</b>."],
  ["O que se interpreta LITERALMENTE? (art. 111)","<b>i)</b> <b>suspensão</b> ou <b>exclusão</b> do crédito tributário; <b>ii)</b> <b>outorga de isenção</b>; <b>iii)</b> <b>dispensa do cumprimento de obrigações acessórias</b>."],
  ["Pegadinha do art. 111","Trocar <b>“exclusão” por “EXTINÇÃO”</b>. A extinção do crédito <b>não</b> está na lista da interpretação literal."],
  ["Quais são os casos de SUSPENSÃO do crédito? (art. 151)","<b>DE-MO-RE-LIM-PAR:</b> <b>DE</b>pósito integral · <b>MO</b>ratória · <b>RE</b>clamações e recursos · <b>LIM</b>inar em mandado de segurança ou outras ações · <b>PAR</b>celamento."],
  ["Quais são os casos de EXCLUSÃO do crédito? (art. 175)","<b>ISA: IS</b>enção e <b>A</b>nistia. Só dois."],
  ["Exemplo de interpretação literal","Lei estadual isenta de IPVA os proprietários <b>com deficiência auditiva QUE ESTEJAM APOSENTADOS</b>. Interpretada literalmente: só quem cumpre <b>os DOIS requisitos</b> se beneficia."],
  ["O que diz o art. 112 do CTN?","A lei que <b>define infrações ou comina penalidades</b> interpreta-se, <b>EM CASO DE DÚVIDA</b>, da maneira <b>mais favorável ao acusado</b> — o <b>in dubio pro contribuinte</b> das infrações."],
  ["Quais as quatro dúvidas do art. 112?","<b>i)</b> <b>capitulação legal</b> do fato; <b>ii)</b> <b>natureza ou circunstâncias materiais</b> do fato, ou natureza ou extensão dos seus <b>efeitos</b>; <b>iii)</b> <b>autoria, imputabilidade ou punibilidade</b>; <b>iv)</b> <b>natureza da penalidade</b> aplicável ou sua <b>graduação</b>."],
  ["Pegadinha do art. 112","Suprimir a expressão <b>“EM CASO DE DÚVIDA”</b>. Sem dúvida, não há interpretação mais favorável — a assertiva fica errada."],

  ["Por que a lei complementar recebe as matérias mais nobres?","Porque seu processo de aprovação é <b>mais dificultoso</b> — exige <b>MAIORIA ABSOLUTA</b> —, o que lhe dá <b>maior estabilidade</b>."],
  ["Quais matérias cabem à lei complementar? (art. 146 e 146-A)","<b>1)</b> conflitos de competência entre os entes; <b>2)</b> regular as <b>limitações constitucionais</b> ao poder de tributar; <b>3)</b> <b>normas gerais</b> de legislação tributária; <b>4)</b> definição de <b>tributos e suas espécies</b>; <b>5)</b> quanto aos <b>IMPOSTOS</b>, <b>fatos geradores, bases de cálculo e contribuintes</b>; <b>6)</b> <b>obrigação, lançamento, crédito, prescrição e decadência</b>; <b>7)</b> ato <b>cooperativo</b>; <b>8)</b> tratamento favorecido a <b>ME e EPP</b>; <b>9)</b> critérios especiais para <b>prevenir desequilíbrios na concorrência</b>."],
  ["Lei complementar define ALÍQUOTA de imposto?","<b>NÃO</b> — o art. 146, III, a, fala em <b>fato gerador, base de cálculo e contribuintes</b>. <b>Alíquota não está na lista.</b>"],
  ["E quanto a TAXAS e CONTRIBUIÇÕES DE MELHORIA?","Fato gerador, base de cálculo, contribuintes <b>e alíquotas</b> vêm por <b>LEI ORDINÁRIA</b>. A reserva do art. 146, III, a, é só para <b>impostos</b>."],
  ["O que o Senado fixa por RESOLUÇÃO?","A <b>alíquota MÍNIMA do IPVA</b> · a <b>alíquota MÁXIMA do ITCMD</b> · a <b>alíquota INTERESTADUAL do ICMS</b>."],
  ["Como memorizar as resoluções do Senado?","<b>IPVA → mínima (piso)</b> · <b>ITCMD → máxima (teto)</b> · <b>ICMS → interestadual</b>. Trocar mínima por máxima é a pegadinha."],
  ["O Senado pode mexer nas alíquotas internas do ICMS?","<b>É FACULTADO</b> estabelecer alíquotas <b>mínimas e máximas nas operações INTERNAS</b> (art. 155, § 2º, V) — faculdade, não dever."],
  ["Reforma tributária: o que observar neste módulo?","A <b>EC 132/2023</b> criou <b>IBS, CBS e Imposto Seletivo</b>, com lei complementar própria, e alterou regras do <b>ITCMD</b>. A estrutura do CTN sobre legislação tributária (arts. 96 a 112) <b>segue intacta</b>, mas o rol de matérias de lei complementar e as competências do Senado devem ser conferidos na redação atual da CF."]
];

var QS = [
  ["A expressão legislação tributária compreende as leis, os tratados e as convenções internacionais, os decretos e as normas complementares.","C","CTN art. 96","Sentido amplo — abrange atos infralegais."],
  ["A expressão legislação tributária compreende apenas as leis em sentido estrito que versem sobre tributos.","E","CEBRASPE","O conceito é amplo; alcança decretos e normas complementares."],
  ["O decreto estadual que regulamenta a lei do IPVA integra a legislação tributária.","C","FGV","Aplicação direta do art. 96."],
  ["Os tratados internacionais em matéria tributária são celebrados pelo Congresso Nacional e aprovados pelo Presidente da República.","E","FCC","É o inverso: celebra o Presidente, aprova o Congresso, por decreto legislativo."],
  ["Somente a lei pode estabelecer a instituição de tributos ou a sua extinção.","C","CTN art. 97 I","Vale também para majoração e redução, ressalvadas as exceções constitucionais."],
  ["Somente a lei pode estabelecer a definição do fato gerador da obrigação tributária principal e do seu sujeito passivo.","C","CTN art. 97 III","A obrigação acessória, ao contrário, decorre da legislação tributária."],
  ["Equipara-se à majoração do tributo a modificação de sua base de cálculo que importe em torná-lo mais oneroso.","C","CTN art. 97 § 1º","Por isso essa modificação exige lei."],
  ["Constitui majoração de tributo a atualização do valor monetário da respectiva base de cálculo.","E","CTN art. 97 § 2º","Não constitui — pode ser feita por decreto."],
  ["É permitido ao Município atualizar o IPTU, mediante decreto, em percentual superior ao índice oficial de correção monetária.","E","STJ Súmula 160","É expressamente vedado."],
  ["A modificação da data de vencimento da obrigação tributária principal configura majoração do tributo e depende de lei.","E","FGV","Não configura majoração; pode vir por norma infralegal."],
  ["Os tratados e as convenções internacionais revogam ou modificam a legislação tributária interna e serão observados pela que lhes sobrevenha.","C","CTN art. 98","Literalidade do dispositivo."],
  ["Segundo a doutrina majoritária, o art. 98 do CTN opera verdadeira revogação da legislação interna anterior.","E","FCC","A doutrina entende haver <b>suspensão da eficácia</b>, pois o tratado é tratado como lei especial."],
  ["O conteúdo e o alcance dos decretos restringem-se aos das leis em função das quais sejam expedidos.","C","CTN art. 99","O decreto não inova na ordem jurídica tributária."],
  ["A obrigação tributária acessória decorre da legislação tributária, não exigindo lei em sentido estrito.","C","CTN art. 113 § 2º","Daí a exigência de nota fiscal por instrução normativa."],
  ["São normas complementares os atos normativos das autoridades administrativas, as decisões com eficácia normativa, as práticas reiteradamente observadas e os convênios entre os entes.","C","CTN art. 100","São quatro, e complementam leis, tratados e decretos."],
  ["As práticas reiteradamente observadas pelas autoridades administrativas são normas complementares.","C","FGV","São os costumes administrativos."],
  ["A observância das normas complementares exclui a imposição de penalidades, a cobrança de juros de mora e a atualização do valor monetário da base de cálculo.","C","CTN art. 100 p.ú.","Protege o contribuinte de boa-fé."],
  ["A observância das normas complementares exclui a exigência do próprio tributo.","E","CEBRASPE","Exclui penalidades, juros e atualização — o tributo continua devido."],
  ["Os convênios celebrados no âmbito do CONFAZ e os convênios do art. 100 do CTN têm a mesma natureza normativa.","E","FCC","Os do CONFAZ são normas primárias; os do art. 100 são complementares."],
  ["Salvo disposição em contrário, os atos normativos expedidos pelas autoridades administrativas entram em vigor na data da sua publicação.","C","CTN art. 103 I","Bizu: atos entram em vigor no ato."],
  ["Salvo disposição em contrário, as decisões de órgãos de jurisdição administrativa com eficácia normativa entram em vigor quinze dias após a publicação.","E","FGV","São <b>30 dias</b> após a publicação."],
  ["Salvo disposição em contrário, os convênios entre os entes federativos entram em vigor na data neles prevista.","C","CTN art. 103 III","Bizu: convênios, por conveniência."],
  ["A legislação tributária dos Estados vigora exclusivamente dentro dos respectivos territórios, sem qualquer exceção.","E","CTN art. 102","Vigora fora nos limites de convênios ou de normas gerais da União — é a extraterritorialidade."],
  ["Entram em vigor no primeiro dia do exercício seguinte os dispositivos de lei que instituam ou majorem impostos sobre o patrimônio ou a renda.","C","CTN art. 104","Vale também para novas hipóteses de incidência e para a extinção ou redução de isenções."],
  ["A legislação tributária aplica-se imediatamente aos fatos geradores futuros e aos pendentes.","C","CTN art. 105","Pendente é aquele cuja ocorrência começou mas não se completou."],
  ["A lei aplica-se a ato ou fato pretérito, em qualquer caso, quando seja expressamente interpretativa, excluída a aplicação de penalidade à infração dos dispositivos interpretados.","C","CTN art. 106 I","É a única hipótese que independe de julgamento definitivo."],
  ["A lei aplica-se a ato pretérito quando deixe de defini-lo como infração, ainda que já definitivamente julgado.","E","CEBRASPE","O inciso II exige ato <b>não definitivamente julgado</b>."],
  ["A lei aplica-se a ato pretérito não definitivamente julgado quando lhe comine penalidade menos severa que a prevista na lei vigente ao tempo da sua prática.","C","CTN art. 106 II c","É a retroatividade benéfica das multas."],
  ["A retroatividade benéfica do art. 106 do CTN alcança a redução de alíquotas do tributo.","E","FGV","Alcança apenas as <b>penalidades</b>; a alíquota devida continua a do tempo do fato gerador."],
  ["Contribuinte deixou de recolher imposto com alíquota de 30% e multa de 20%. Lei posterior reduz a alíquota para 15% e a multa para 10%. Não havendo julgamento definitivo, ele deverá 15% de imposto e 10% de multa.","E","FCC","Deverá <b>30% de imposto</b> e 10% de multa — a retroatividade só alcança a penalidade."],
  ["Extinta por lei posterior a obrigação acessória descumprida, sem fraude nem falta de pagamento de tributo, aplica-se a lei nova ao ato pretérito ainda não definitivamente julgado.","C","CTN art. 106 II b","Hipótese clássica de questão com caso concreto."],
  ["Na ausência de disposição expressa, a autoridade aplicará sucessivamente a analogia, os princípios gerais de direito tributário, os princípios gerais de direito público e a equidade.","C","CTN art. 108","A ordem é obrigatória e sucessiva."],
  ["Na integração da legislação tributária, a equidade precede os princípios gerais de direito público.","E","CEBRASPE","A equidade é o <b>último</b> recurso da ordem do art. 108."],
  ["O emprego da analogia não poderá resultar na exigência de tributo não previsto em lei.","C","CTN art. 108 § 1º","Decorrência direta da legalidade."],
  ["O emprego da equidade não poderá resultar na dispensa do pagamento de tributo devido.","C","CTN art. 108 § 2º","Dispensar tributo devido só por lei."],
  ["Os princípios gerais de direito privado são utilizados para a pesquisa da definição, do conteúdo e do alcance de seus institutos, mas não para a definição dos respectivos efeitos tributários.","C","CTN art. 109","A segunda parte é a que a banca corta para errar a assertiva."],
  ["A lei tributária pode alterar a definição, o conteúdo e o alcance de institutos de direito privado utilizados pela Constituição para definir competências tributárias.","E","CTN art. 110","É exatamente o que o art. 110 veda."],
  ["Interpreta-se literalmente a legislação tributária que disponha sobre suspensão ou exclusão do crédito tributário, outorga de isenção e dispensa do cumprimento de obrigações acessórias.","C","CTN art. 111","São as três hipóteses, e só elas."],
  ["Interpreta-se literalmente a legislação tributária que disponha sobre extinção do crédito tributário.","E","FGV","A <b>extinção</b> não está no art. 111 — a banca troca por “exclusão”."],
  ["São hipóteses de exclusão do crédito tributário a isenção e a anistia.","C","CTN art. 175","Mnemônico ISA — apenas duas."],
  ["São hipóteses de suspensão do crédito tributário o depósito integral, a moratória, as reclamações e recursos, a liminar e o parcelamento.","C","CTN art. 151","Mnemônico DEMORE a LIMPAR."],
  ["Lei estadual que concede isenção de IPVA a proprietários com deficiência auditiva que estejam aposentados beneficia também os não aposentados, por interpretação extensiva.","E","FGV","Isenção interpreta-se literalmente: exigem-se os dois requisitos."],
  ["A lei tributária que define infrações interpreta-se, em caso de dúvida quanto à capitulação legal do fato, da maneira mais favorável ao acusado.","C","CTN art. 112","A expressão “em caso de dúvida” é essencial."],
  ["A lei tributária que define infrações interpreta-se, quanto à capitulação legal do fato, da maneira mais favorável ao acusado.","E","CEBRASPE","Faltou “<b>em caso de dúvida</b>” — sem dúvida, não há interpretação benéfica."],
  ["A interpretação mais favorável ao acusado alcança as dúvidas quanto à autoria, à imputabilidade e à punibilidade.","C","CTN art. 112 III","São quatro os incisos do art. 112."],
  ["A lei complementar exige maioria absoluta para aprovação, o que lhe confere maior estabilidade.","C","FCC","Por isso recebe as matérias mais sensíveis do sistema tributário."],
  ["Cabe à lei complementar dispor sobre conflitos de competência em matéria tributária entre os entes federativos.","C","CF art. 146 I","Primeira das funções do art. 146."],
  ["Cabe à lei complementar estabelecer, em relação aos impostos discriminados na Constituição, a definição dos respectivos fatos geradores, bases de cálculo, contribuintes e alíquotas.","E","CEBRASPE","<b>Alíquotas não</b> integram a reserva do art. 146, III, a."],
  ["Em relação às taxas e contribuições de melhoria, fato gerador, base de cálculo, contribuintes e alíquotas são definidos por lei ordinária.","C","FGV","A reserva do art. 146, III, a, alcança apenas os impostos."],
  ["Cabe à lei complementar estabelecer critérios especiais de tributação para prevenir desequilíbrios da concorrência.","C","CF art. 146-A","Função acrescentada ao rol da lei complementar."],
  ["O Senado Federal fixará, mediante resolução, a alíquota máxima do IPVA e a alíquota mínima do ITCMD.","E","FCC","É o inverso: <b>mínima do IPVA</b> e <b>máxima do ITCMD</b>."],
  ["Compete ao Senado Federal fixar, por resolução, as alíquotas do ICMS aplicáveis às operações interestaduais.","C","CF art. 155 § 2º IV","E é facultado fixar mínimas e máximas nas operações internas."],
  ["É obrigatório ao Senado Federal estabelecer alíquotas mínimas e máximas do ICMS nas operações internas.","E","CF art. 155 § 2º V","É <b>facultado</b>, não obrigatório."]
];

var EX = {
S1:{t:"multi", instr:"Marque o que integra a “legislação tributária” (art. 96)",
  options:["As leis","Os tratados e convenções internacionais","Os decretos",
           "As normas complementares","Os pareceres da doutrina"],
  answers:[0,1,2,3],
  why:"O conceito é amplo — por isso obrigação acessória pode nascer de decreto."},

S2:{t:"multi", instr:"Marque o que SOMENTE A LEI pode estabelecer (art. 97)",
  options:["Instituição e extinção de tributos","Majoração e redução de tributos",
           "Fato gerador da obrigação principal e sujeito passivo",
           "Fixação de alíquota e base de cálculo",
           "Cominação de penalidades",
           "Atualização do valor monetário da base de cálculo"],
  answers:[0,1,2,3,4],
  why:"A atualização monetária não é majoração — pode vir por decreto."},

S3:{t:"sort", instr:"Exige lei ou basta norma infralegal?",
  buckets:["Exige LEI","Basta decreto ou ato infralegal"],
  items:[["Modificar a base de cálculo tornando o tributo mais oneroso",0],
         ["Instituir penalidade",0],
         ["Atualizar monetariamente a base de cálculo",1],
         ["Mudar a data de vencimento do tributo",1],
         ["Exigir emissão de nota fiscal",1]],
  why:"Obrigação acessória decorre da legislação tributária, não da lei em sentido estrito."},

S4:{t:"gap", instr:"Complete a Súmula 160 do STJ",
  before:"É defeso ao Município atualizar o IPTU, mediante decreto, em percentual ",
  after:" ao índice oficial de correção monetária.",
  options:["superior","inferior","equivalente"], answer:0,
  why:"Atualizar pode; atualizar acima do índice oficial é majoração disfarçada."},

S5:{t:"mc", instr:"Segundo a doutrina, o efeito do art. 98 do CTN sobre a lei interna anterior é:",
  options:["Suspensão da eficácia, pois o tratado internalizado é lei especial",
           "Revogação definitiva, como diz a literalidade do artigo",
           "Nenhum — o tratado só vincula o Executivo",
           "Declaração de inconstitucionalidade da lei interna"],
  answer:0,
  why:"A lei especial afasta a incidência da geral; se o tratado for denunciado, a lei interna volta a operar."},

S6:{t:"multi", instr:"Marque as NORMAS COMPLEMENTARES do art. 100",
  options:["Atos normativos expedidos pelas autoridades administrativas",
           "Decisões de órgãos de jurisdição administrativa com eficácia normativa",
           "Práticas reiteradamente observadas pelas autoridades",
           "Convênios entre União, Estados, DF e Municípios",
           "Decretos do Chefe do Executivo"],
  answers:[0,1,2,3],
  why:"O decreto não é norma complementar — as complementares complementam também os decretos."},

S7:{t:"multi", instr:"A observância das normas complementares EXCLUI o quê?",
  options:["A imposição de penalidades","A cobrança de juros de mora",
           "A atualização do valor monetário da base de cálculo",
           "A exigência do próprio tributo"],
  answers:[0,1,2],
  why:"O tributo continua devido — protege-se apenas o contribuinte de boa-fé quanto aos acessórios."},

S8:{t:"match", instr:"Quando entra em vigor cada norma complementar? (art. 103)",
  pairs:[["Atos normativos","Na data da publicação — no ATO"],
         ["Decisões com eficácia normativa","30 dias após a publicação — em DIAS"],
         ["Convênios","Na data neles prevista — por CONVENIÊNCIA"]],
  why:"Tudo isso salvo disposição em contrário."},

S9:{t:"gap", instr:"Complete o art. 104 do CTN",
  before:"Entram em vigor no ",
  after:" os dispositivos de lei que instituam ou majorem impostos sobre o patrimônio ou a renda.",
  options:["primeiro dia do exercício seguinte","nonagésimo dia após a publicação","dia da publicação"], answer:0,
  why:"Vale também para novas hipóteses de incidência e para a extinção ou redução de isenções."},

S10:{t:"mc", instr:"A legislação tributária aplica-se imediatamente a quais fatos geradores? (art. 105)",
  options:["Futuros e pendentes","Somente futuros",
           "Futuros, pendentes e pretéritos","Somente aos já consumados"],
  answer:0,
  why:"Pendente é aquele cuja ocorrência começou mas não se completou."},

S11:{t:"sort", instr:"A lei retroage exigindo julgamento definitivo pendente?",
  buckets:["Retroage EM QUALQUER CASO","Só se o ato NÃO foi definitivamente julgado"],
  items:[["Lei expressamente interpretativa",0],
         ["Lei que deixa de definir o ato como infração",1],
         ["Lei que comina penalidade menos severa",1],
         ["Lei que deixa de tratar o ato como contrário a exigência de ação ou omissão",1]],
  why:"Só o inciso I independe de julgamento — e nele se exclui a penalidade à infração dos dispositivos interpretados."},

S12:{t:"mc", instr:"Alíquota de 30% e multa de 20% ao tempo do fato. Lei nova: alíquota 15% e multa 10%. Ato não julgado. O contribuinte deve:",
  options:["30% de imposto e 10% de multa","15% de imposto e 10% de multa",
           "30% de imposto e 20% de multa","15% de imposto e 20% de multa"],
  answer:0,
  why:"A retroatividade benéfica alcança a penalidade, nunca a alíquota."},

S13:{t:"order", instr:"Ordene os meios de integração do art. 108",
  items:["Analogia","Princípios gerais de direito tributário",
         "Princípios gerais de direito público","Equidade"],
  why:"A ordem é sucessiva e obrigatória."},

S14:{t:"match", instr:"Ligue cada meio de integração ao seu limite",
  pairs:[["Analogia","Não pode exigir tributo não previsto em lei"],
         ["Equidade","Não pode dispensar o pagamento de tributo devido"]],
  why:"Os dois limites nascem do princípio da legalidade."},

S15:{t:"sort", instr:"Princípios gerais de direito privado servem para quê? (art. 109)",
  buckets:["Servem","Não servem"],
  items:[["Pesquisar a definição de seus institutos",0],
         ["Pesquisar o conteúdo e o alcance de seus conceitos",0],
         ["Definir os efeitos tributários",1]],
  why:"Os efeitos tributários são matéria da lei tributária, não do direito privado."},

S16:{t:"multi", instr:"Marque o que se interpreta LITERALMENTE (art. 111)",
  options:["Suspensão do crédito tributário","Exclusão do crédito tributário",
           "Outorga de isenção","Dispensa do cumprimento de obrigações acessórias",
           "Extinção do crédito tributário"],
  answers:[0,1,2,3],
  why:"A extinção é a intrusa — trocar exclusão por extinção é a pegadinha do artigo."},

S17:{t:"sort", instr:"Suspensão ou exclusão do crédito tributário?",
  buckets:["Suspensão (art. 151)","Exclusão (art. 175)"],
  items:[["Depósito integral do montante",0],["Moratória",0],["Reclamações e recursos",0],
         ["Liminar em mandado de segurança",0],["Parcelamento",0],
         ["Isenção",1],["Anistia",1]],
  why:"DEMORE a LIMPAR para suspensão; ISA para exclusão."},

S18:{t:"mc", instr:"Lei isenta de IPVA os proprietários com deficiência auditiva QUE ESTEJAM APOSENTADOS. Quem se beneficia?",
  options:["Só quem cumpre os dois requisitos, por interpretação literal",
           "Todos os que tenham deficiência auditiva",
           "Todos os aposentados",
           "Qualquer pessoa com deficiência, por analogia"],
  answer:0,
  why:"Outorga de isenção interpreta-se literalmente — não cabe ampliar nem por analogia."},

S19:{t:"gap", instr:"Complete o art. 112 do CTN",
  before:"A lei tributária que define infrações interpreta-se da maneira mais favorável ao acusado ",
  after:" quanto à capitulação legal do fato.",
  options:["em caso de dúvida","sempre","salvo disposição em contrário"], answer:0,
  why:"Suprimir “em caso de dúvida” é a pegadinha mais repetida do artigo."},

S20:{t:"multi", instr:"Marque as dúvidas alcançadas pelo art. 112",
  options:["Capitulação legal do fato",
           "Natureza ou circunstâncias materiais do fato e extensão dos efeitos",
           "Autoria, imputabilidade ou punibilidade",
           "Natureza da penalidade aplicável ou sua graduação",
           "Valor da alíquota aplicável ao tributo"],
  answers:[0,1,2,3],
  why:"O art. 112 cuida de infrações e penalidades, não do tributo em si."},

S21:{t:"sort", instr:"Lei complementar ou lei ordinária?",
  buckets:["Lei complementar","Lei ordinária"],
  items:[["Conflitos de competência entre os entes",0],
         ["Normas gerais de legislação tributária",0],
         ["Fato gerador, base de cálculo e contribuintes dos IMPOSTOS",0],
         ["Prescrição e decadência tributárias",0],
         ["Alíquota dos impostos",1],
         ["Fato gerador, base, contribuintes e alíquotas de TAXAS",1]],
  why:"Alíquota nunca entra na reserva do art. 146, III, a."},

S22:{t:"match", instr:"O que o Senado fixa por resolução para cada imposto?",
  pairs:[["IPVA","Alíquota MÍNIMA"],
         ["ITCMD","Alíquota MÁXIMA"],
         ["ICMS","Alíquota INTERESTADUAL"]],
  why:"Nas operações internas do ICMS, fixar mínimas e máximas é mera faculdade."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("O que é legislação tributária e o que só a lei pode fazer",
      '<div class="box"><span class="bl">Art. 96 — o conceito amplo</span>'+
      '<p>“Legislação tributária” compreende as <b>LEIS</b>, os <b>TRATADOS e convenções internacionais</b>, os <b>DECRETOS</b> e as <b>NORMAS COMPLEMENTARES</b> que versem, no todo ou em parte, sobre tributos e relações jurídicas a eles pertinentes.</p>'+
      '<p class="mn"><em>“Lei” é espécie; “legislação tributária” é o gênero. Trocar uma pela outra decide questão.</em></p></div>'+
      '<div class="box trap"><span class="bl">Art. 97 — a reserva legal</span>'+
      '<p>Só a <b>LEI</b> pode estabelecer: <b>instituição e extinção</b> de tributos · <b>majoração e redução</b> · <b>fato gerador da obrigação principal e sujeito passivo</b> · <b>alíquota e base de cálculo</b> · <b>cominação de penalidades</b> · hipóteses de <b>exclusão, suspensão e extinção</b> do crédito · <b>dispensa ou redução de penalidades</b>.</p>'+
      '<p>Em regra, quem institui é a <b>lei ORDINÁRIA</b> — federal, estadual ou municipal.</p></div>'+
      '<div class="box tip"><span class="bl">Os três casos que NÃO exigem lei</span>'+
      '<p><b>1) Atualização monetária</b> da base de cálculo — não é majoração; basta decreto. <b>Limite:</b> não pode superar o <b>índice oficial de correção</b> (<b>Súmula 160 do STJ</b>, sobre o IPTU).</p>'+
      '<p><b>2) Data de vencimento</b> do tributo — não é majoração; pode vir por norma infralegal.</p>'+
      '<p><b>3) Obrigação acessória</b> — “decorre da <b>LEGISLAÇÃO</b> tributária” (art. 113, § 2º): nota fiscal, escrituração e declarações podem ser exigidas por instrução normativa.</p>'+
      '<p class="mn"><em>Mas atenção: <b>modificar a base de cálculo</b> tornando o tributo mais oneroso <b>equipara-se à majoração</b> e exige lei.</em></p></div>'+
      '<div class="box"><span class="bl">Tratados e decretos</span>'+
      '<p><b>Art. 98:</b> os tratados “<b>revogam ou modificam</b>” a legislação interna e <b>serão observados pela que lhes sobrevenha</b>. A <b>doutrina</b> lê como <b>SUSPENSÃO DA EFICÁCIA</b>: o tratado internalizado vale como <b>lei especial</b>, e a especial afasta a geral.</p>'+
      '<p><b>Quem faz o quê:</b> o <b>Presidente celebra</b>; o <b>Congresso aprova</b>, por decreto legislativo (art. 49, I).</p>'+
      '<p><b>Art. 99:</b> o decreto tem <b>conteúdo e alcance restritos aos da lei</b> que regulamenta.</p></div>'),
    sl("Normas complementares e vigência",
      '<div class="box"><span class="bl">Art. 100 — as quatro normas complementares</span>'+
      '<p><b>i)</b> <b>atos normativos</b> das autoridades administrativas — portarias, instruções normativas, ordens de serviço, resoluções do Secretário de Fazenda;<br>'+
      '<b>ii)</b> <b>decisões</b> de órgãos singulares ou coletivos de jurisdição administrativa a que a lei atribua <b>eficácia normativa</b>;<br>'+
      '<b>iii)</b> as <b>práticas reiteradamente observadas</b> pelas autoridades — os costumes;<br>'+
      '<b>iv)</b> os <b>convênios</b> entre União, Estados, DF e Municípios.</p></div>'+
      '<div class="box tip"><span class="bl">O prêmio da boa-fé (parágrafo único)</span>'+
      '<p>Observar a norma complementar <b>exclui</b>: <b>penalidades</b> · <b>juros de mora</b> · <b>atualização monetária</b> da base de cálculo.</p>'+
      '<p class="mn"><em>O <b>tributo em si continua devido</b> — é só o acessório que cai.</em></p></div>'+
      '<div class="box trap"><span class="bl">Dois convênios diferentes</span>'+
      '<p><b>CONFAZ:</b> previsão constitucional, <b>normas PRIMÁRIAS</b>.<br>'+
      '<b>Art. 100, IV:</b> <b>normas COMPLEMENTARES</b>, de colaboração entre administrações tributárias. Não confunda.</p></div>'+
      '<div class="box"><span class="bl">Art. 103 — o bizu da vigência</span>'+
      '<p><b>Atos normativos → no ATO</b> (data da publicação)<br>'+
      '<b>Decisões com eficácia normativa → em DIAS</b> (<b>30 dias</b> após a publicação)<br>'+
      '<b>Convênios → por CONVENIÊNCIA</b> (na data neles prevista)</p>'+
      '<p class="mn"><em>Tudo <b>salvo disposição em contrário</b>.</em></p></div>'+
      '<div class="box"><span class="bl">Mais dois artigos de vigência</span>'+
      '<p><b>Art. 102 — extraterritorialidade:</b> a legislação de Estados, DF e Municípios vigora <b>fora</b> dos respectivos territórios nos limites de <b>convênios</b> de que participem ou do que dispuserem as <b>normas gerais</b> da União.</p>'+
      '<p><b>Art. 104:</b> entram em vigor no <b>1º dia do exercício seguinte</b> os dispositivos de lei sobre <b>impostos sobre o patrimônio ou a renda</b> que <b>instituam ou majorem</b>, <b>definam nova hipótese de incidência</b> ou <b>extingam ou reduzam isenções</b> — salvo disposição mais favorável.</p></div>')
  ],
  V2:[
    sl("Aplicação: fatos pendentes e retroatividade benéfica",
      '<div class="box"><span class="bl">Art. 105 — a regra</span>'+
      '<p>A legislação aplica-se <b>imediatamente</b> aos fatos geradores <b>FUTUROS</b> e <b>PENDENTES</b> — estes, os que já começaram a ocorrer mas não se completaram.</p></div>'+
      '<div class="box"><span class="bl">Art. 106, I — retroage EM QUALQUER CASO</span>'+
      '<p>Quando a lei seja <b>expressamente interpretativa</b>, <b>excluída a aplicação de penalidade</b> à infração dos dispositivos interpretados.</p>'+
      '<p class="mn"><em>É a única hipótese que <b>não</b> depende de julgamento pendente.</em></p></div>'+
      '<div class="box"><span class="bl">Art. 106, II — só se o ato NÃO foi definitivamente julgado</span>'+
      '<p><b>a)</b> quando <b>deixe de defini-lo como infração</b>;<br>'+
      '<b>b)</b> quando <b>deixe de tratá-lo como contrário a qualquer exigência de ação ou omissão</b>, desde que <b>não fraudulento</b> e sem <b>falta de pagamento de tributo</b>;<br>'+
      '<b>c)</b> quando lhe <b>comine penalidade MENOS SEVERA</b> que a da lei vigente ao tempo da prática.</p></div>'+
      '<div class="box trap"><span class="bl">A pegadinha que decide a questão</span>'+
      '<p>A retroatividade benéfica alcança <b>MULTAS</b>, <b>nunca ALÍQUOTAS</b>.</p>'+
      '<p><b>Exemplo:</b> em janeiro, alíquota <b>30%</b> e multa <b>20%</b>. Em agosto, lei baixa a alíquota para 15% e a multa para 10%. Sem julgamento definitivo, o contribuinte deve <b>30% de imposto</b> e <b>10% de multa</b>.</p>'+
      '<p><b>Caso da alínea b:</b> empresa autuada apenas por descumprir <b>obrigação acessória</b> de ICMS, sem deixar de recolher o tributo; antes da decisão, lei nova <b>extingue aquela obrigação</b> → aplica-se ao ato pretérito.</p></div>'),
    sl("Interpretação e integração",
      '<div class="box"><span class="bl">Art. 108 — a escada da integração</span>'+
      '<p>Na <b>ausência de disposição expressa</b>, a autoridade usa <b>SUCESSIVAMENTE, nesta ordem</b>:</p>'+
      '<p><b>1)</b> <b>analogia</b> · <b>2)</b> princípios gerais de <b>direito tributário</b> · <b>3)</b> princípios gerais de <b>direito público</b> · <b>4)</b> <b>equidade</b>.</p>'+
      '<p><b>Dois limites, ambos filhos da legalidade:</b> a <b>analogia não exige tributo não previsto em lei</b>; a <b>equidade não dispensa tributo devido</b>.</p></div>'+
      '<div class="box"><span class="bl">Arts. 109 e 110 — o direito privado</span>'+
      '<p><b>109:</b> os princípios gerais de <b>direito privado</b> servem para pesquisar a <b>definição, o conteúdo e o alcance</b> de seus institutos — <b>mas NÃO para definir os EFEITOS TRIBUTÁRIOS</b>.</p>'+
      '<p><b>110:</b> a lei tributária <b>não pode ALTERAR</b> a definição, o conteúdo e o alcance de institutos de direito privado usados pela <b>CF, Constituições estaduais ou leis orgânicas</b> para <b>definir ou limitar competências tributárias</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Art. 111 — interpretação LITERAL</span>'+
      '<p><b>i)</b> <b>suspensão</b> ou <b>exclusão</b> do crédito tributário · <b>ii)</b> <b>outorga de isenção</b> · <b>iii)</b> <b>dispensa de obrigações acessórias</b>.</p>'+
      '<p><b>Pegadinha:</b> trocar <b>exclusão</b> por <b>EXTINÇÃO</b>. A extinção não está na lista.</p>'+
      '<p><b>SUSPENSÃO (art. 151) — DEMORE a LIMPAR:</b> <b>DE</b>pósito integral · <b>MO</b>ratória · <b>RE</b>clamações e recursos · <b>LIM</b>inar · <b>PAR</b>celamento.<br>'+
      '<b>EXCLUSÃO (art. 175) — ISA:</b> <b>IS</b>enção e <b>A</b>nistia.</p>'+
      '<p class="mn"><em>Isenção de IPVA para deficiente auditivo <b>que esteja aposentado</b>: só quem cumpre <b>os dois</b> requisitos.</em></p></div>'+
      '<div class="box trap"><span class="bl">Art. 112 — in dubio pro reo tributário</span>'+
      '<p>A lei que <b>define infrações ou comina penalidades</b> interpreta-se, <b>EM CASO DE DÚVIDA</b>, da maneira <b>mais favorável ao acusado</b>, quanto a: <b>i)</b> capitulação legal do fato; <b>ii)</b> natureza ou circunstâncias materiais do fato e extensão dos efeitos; <b>iii)</b> autoria, imputabilidade ou punibilidade; <b>iv)</b> natureza da penalidade ou sua graduação.</p>'+
      '<p><b>Pegadinha:</b> a banca <b>suprime “em caso de dúvida”</b>. Sem dúvida, não há interpretação benéfica.</p></div>')
  ],
  V3:[
    sl("Lei complementar e resolução do Senado",
      '<div class="box"><span class="bl">Por que lei complementar</span>'+
      '<p>Seu rito é mais difícil — exige <b>MAIORIA ABSOLUTA</b> —, o que lhe dá <b>estabilidade</b>. Por isso recebeu as funções mais sensíveis do sistema.</p></div>'+
      '<div class="box"><span class="bl">Arts. 146 e 146-A — as nove matérias</span>'+
      '<p><b>1)</b> conflitos de competência entre os entes<br>'+
      '<b>2)</b> regular as <b>limitações constitucionais</b> ao poder de tributar<br>'+
      '<b>3)</b> <b>normas gerais</b> de legislação tributária<br>'+
      '<b>4)</b> definição de <b>tributos e suas espécies</b><br>'+
      '<b>5)</b> quanto aos <b>IMPOSTOS</b>: <b>fatos geradores, bases de cálculo e contribuintes</b><br>'+
      '<b>6)</b> <b>obrigação, lançamento, crédito, prescrição e decadência</b><br>'+
      '<b>7)</b> tratamento adequado ao <b>ato cooperativo</b><br>'+
      '<b>8)</b> tratamento favorecido a <b>ME e EPP</b><br>'+
      '<b>9)</b> critérios especiais para <b>prevenir desequilíbrios na concorrência</b> (art. 146-A)</p></div>'+
      '<div class="box trap"><span class="bl">Duas exclusões que caem sempre</span>'+
      '<p><b>ALÍQUOTA não está</b> na reserva do art. 146, III, a — só fato gerador, base de cálculo e contribuintes.</p>'+
      '<p>E a reserva é <b>só para IMPOSTOS</b>. Em <b>taxas e contribuições de melhoria</b>, fato gerador, base, contribuintes <b>e alíquotas</b> vêm por <b>LEI ORDINÁRIA</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Resolução do Senado</span>'+
      '<p><b>IPVA → alíquota MÍNIMA</b> (piso)<br>'+
      '<b>ITCMD → alíquota MÁXIMA</b> (teto)<br>'+
      '<b>ICMS → alíquota INTERESTADUAL</b></p>'+
      '<p>Nas operações <b>internas</b> do ICMS, fixar mínimas e máximas é <b>FACULDADE</b> do Senado (art. 155, § 2º, V) — não dever.</p></div>'+
      '<div class="box trap"><span class="bl">Reforma tributária — EC 132/2023</span>'+
      '<p>A estrutura do CTN sobre legislação tributária (<b>arts. 96 a 112</b>) <b>segue intacta</b> — este módulo continua válido como está.</p>'+
      '<p>O que mudou fica em volta: a emenda criou <b>IBS, CBS e Imposto Seletivo</b>, com lei complementar própria, e alterou regras do <b>ITCMD</b>. Confira o rol de matérias de lei complementar e as competências do Senado na redação vigente da CF.</p></div>')
  ]
};

var TEC = [
  ["Caderno CEBRASPE — Direito Tributário 05","https://www.tecconcursos.com.br/s/Q2fzIj","Q2fzIj"],
  ["Caderno FCC — Direito Tributário 05","https://www.tecconcursos.com.br/s/Q2fzJ0","Q2fzJ0"],
  ["Caderno FGV — Direito Tributário 05","https://www.tecconcursos.com.br/s/Q2fzJ6","Q2fzJ6"],
  ["Caderno VUNESP — Direito Tributário 05","https://www.tecconcursos.com.br/s/Q2glVg","Q2glVg"]
];
var TECNOTA = "Priorize o caderno da FGV — banca do último certame da Receita Federal. Este módulo é quase todo literalidade do CTN, e a banca erra a assertiva mudando UMA palavra: “exclusão” por “extinção” no art. 111, suprimir “em caso de dúvida” no art. 112, inverter mínima e máxima nas resoluções do Senado, incluir “alíquotas” na reserva do art. 146, III, a. Leia os artigos 96 a 112 direto no Planalto pelo menos uma vez antes da prova — são dezessete artigos curtos e rendem muita questão. ATENÇÃO À DATA: o resumo de origem é anterior à EC 132/2023. A boa notícia é que os arts. 96 a 112 do CTN não foram tocados; o que mudou está em volta (IBS, CBS, Imposto Seletivo e ITCMD), então confira o rol do art. 146 e as competências do Senado na redação vigente.";

var UNITS = [
  {n:1, title:"Legislação tributária e reserva legal", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Art. 96, art. 97, tratados e decretos", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · o conceito e os tratados",   xp:25, data:["S1","S5","T0","T1","T2","T3","T10","T11","T12"]},
    {id:"K3", type:"drill",  title:"Praticar · o que só a lei pode fazer",  xp:25, data:["S2","S3","S4","T4","T5","T6","T7","T8","T9","T13"]},
    {id:"K4", type:"flash",  title:"Flashcards · legislação e reserva legal", xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]}
  ]},
  {n:2, title:"Normas complementares e vigência", cvar:"u2", lessons:[
    {id:"K5", type:"drill",  title:"Praticar · as quatro normas complementares", xp:25, data:["S6","S7","T14","T15","T16","T17","T18"]},
    {id:"K6", type:"drill",  title:"Praticar · vigência e extraterritorialidade", xp:25, data:["S8","S9","T19","T20","T21","T22","T23"]},
    {id:"K7", type:"flash",  title:"Flashcards · normas complementares e vigência", xp:15, data:[15,16,17,18,19,20,21,22,23]}
  ]},
  {n:3, title:"Aplicação e retroatividade benéfica", cvar:"u3", lessons:[
    {id:"K8", type:"teoria", title:"Fatos pendentes, art. 106 e a escada da integração", xp:10, data:"V2"},
    {id:"K9", type:"drill",  title:"Praticar · aplicação e ato pretérito",  xp:25, data:["S10","S11","S12","T24","T25","T26","T27","T28","T29","T30"]},
    {id:"K10",type:"flash",  title:"Flashcards · aplicação da legislação",  xp:15, data:[24,25,26,27,28,29,30]}
  ]},
  {n:4, title:"Interpretação e integração", cvar:"u4", lessons:[
    {id:"K11",type:"drill",  title:"Praticar · integração e direito privado", xp:25, data:["S13","S14","S15","T31","T32","T33","T34","T35","T36"]},
    {id:"K12",type:"drill",  title:"Praticar · interpretação literal",      xp:25, data:["S16","S17","S18","T37","T38","T39","T40","T41"]},
    {id:"K13",type:"drill",  title:"Praticar · art. 112 e a dúvida",        xp:25, data:["S19","S20","T42","T43","T44"]},
    {id:"K14",type:"flash",  title:"Flashcards · interpretação e integração", xp:15, data:[31,32,33,34,35,36,37,38,39,40,41,42,43,44]}
  ]},
  {n:5, title:"Lei complementar e Senado", cvar:"u5", lessons:[
    {id:"K15",type:"teoria", title:"As nove matérias e as resoluções do Senado", xp:10, data:"V3"},
    {id:"K16",type:"drill",  title:"Praticar · reserva de lei complementar", xp:25, data:["S21","T45","T46","T47","T48","T49"]},
    {id:"K17",type:"drill",  title:"Praticar · resoluções do Senado",       xp:25, data:["S22","T50","T51","T52"]},
    {id:"K18",type:"flash",  title:"Flashcards · lei complementar e Senado", xp:15, data:[45,46,47,48,49,50,51,52]}
  ]},
  {n:6, title:"Fixação", cvar:"u1", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",               xp:60, data:null},
    {id:"K19", type:"missao", title:"Missão TEC Concursos",                 xp:15, data:null},
    {id:"K20", type:"prova",  title:"Simulado cronometrado",                xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 05 de Direito Tributário (Radegondes) ---------- */
var COM={
0:"<p><b>CTN, art. 96</b>, como o resumo transcreve: a expressão “legislação tributária” compreende <b>as leis, os tratados e as convenções internacionais, os decretos e as normas complementares</b> que versem, no todo ou em parte, sobre tributos e relações jurídicas a eles pertinentes.</p><p>São <b>quatro</b> grupos. Conte sempre.</p><p class='fb-fonte'>Resumo 05 · <i>Legislação Tributária — art. 96</i></p>",
1:"<p>Observação 3 do resumo: <b>“a expressão legislação tributária possui sentido AMPLO”</b> — e o exemplo que ele dá é justamente um ato infralegal, o <b>decreto estadual que regulamenta a lei do IPVA</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Legislação Tributária — Observação 3</i></p>",
2:"<p>É o exemplo literal da observação 3: <b>“o decreto publicado por determinado Estado, regulamentando a lei do IPVA por ele instituído”</b> integra a legislação tributária.</p><p class='fb-fonte'>Resumo 05 · <i>Legislação Tributária — Observação 3</i></p>",
3:"<p>Invertido. Observação 2 do resumo: os tratados internacionais <b>são negociados (celebrados) pelo Presidente da República, mas quem aprova é o Congresso</b> (art. 49, I, da CF), <b>por meio de decreto legislativo</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Legislação Tributária — Observação 2</i></p>",
4:"<p>Primeiro item do quadro do <b>art. 97</b>: <b>somente a LEI pode estabelecer a instituição de tributos, ou a sua extinção</b>; e a <b>majoração, ou sua redução</b>.</p><p>O comentário do resumo reforça: <b>somente a lei (não decreto)</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Art. 97 — reserva legal</i></p>",
5:"<p>Terceiro item do quadro do art. 97: <b>a definição do fato gerador da obrigação tributária PRINCIPAL e do seu sujeito passivo</b>.</p><p>Compare com a observação 5 do resumo: a obrigação <b>acessória</b> decorre da <b>legislação</b> tributária, e não exige lei.</p><p class='fb-fonte'>Resumo 05 · <i>Art. 97 — reserva legal</i></p>",
6:"<p>Observação 1 do resumo: <b>“equipara-se à majoração do tributo a modificação da sua base de cálculo, que importe em torná-lo mais oneroso”</b>.</p><p>Equiparado à majoração, exige lei.</p><p class='fb-fonte'>Resumo 05 · <i>Art. 97 — Observação 1</i></p>",
7:"<p>Observação 2: <b>“NÃO constitui majoração de tributo a atualização do valor monetário da respectiva base de cálculo”</b> — “basta um decreto (norma infralegal)”.</p><p>Com um limite, que vem na sequência: não pode passar do índice oficial de correção monetária.</p><p class='fb-fonte'>Resumo 05 · <i>Art. 97 — Observação 2</i></p>",
8:"<p>Observação 7 do resumo — <b>STJ, Súmula 160</b>: <b>“é defeso (proibido) ao Município atualizar o IPTU, mediante decreto, em percentual superior ao índice oficial de correção monetária”</b>.</p><p>Atualizar pelo índice: pode, por decreto. Acima dele: só por lei.</p><p class='fb-fonte'>Resumo 05 · <i>Art. 97 — Observação 7 (Súmula 160)</i></p>",
9:"<p>Observação 6: <b>“a modificação da data do vencimento da obrigação tributária principal NÃO configura majoração do tributo, não havendo necessidade de previsão em lei”</b> — pode vir por decreto.</p><p class='fb-fonte'>Resumo 05 · <i>Art. 97 — Observação 6</i></p>",
10:"<p>Observação 3 do resumo, citando o <b>art. 98 do CTN</b>: os tratados e as convenções internacionais <b>revogam ou modificam a legislação tributária interna, e serão observados pela que lhes sobrevenha</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Art. 98 — Observação 3</i></p>",
11:"<p>O comentário do resumo logo abaixo do art. 98: <b>“a doutrina entende que ocorre na verdade a SUSPENSÃO DA EFICÁCIA da legislação que é anterior a eles”</b>, porque o tratado internalizado é tratado como <b>lei especial</b> — e lei especial afasta a incidência da geral.</p><p class='fb-fonte'>Resumo 05 · <i>Art. 98 — comentário</i></p>",
12:"<p>Observação 4: <b>“o conteúdo e o alcance dos decretos restringem-se aos das leis em função das quais sejam expedidos”</b> (art. 99).</p><p>É o que impede o decreto de inovar.</p><p class='fb-fonte'>Resumo 05 · <i>Art. 99 — Observação 4</i></p>",
13:"<p>Observação 5 do resumo, com o art. 113, §2º: <b>a obrigação acessória decorre da legislação tributária</b> — ou seja, <b>“não precisam ser disciplinadas necessariamente por meio de lei”</b>.</p><p>Os exemplos dele: <b>escrituração fiscal, emissão de nota fiscal, declarações ao fisco</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Art. 97 — Observação 5</i></p>",
14:"<p>Observação 2 do resumo lista as <b>quatro</b> normas complementares do <b>art. 100</b>: <b>atos normativos</b> das autoridades administrativas · <b>decisões dos órgãos a que a lei atribua eficácia normativa</b> · <b>práticas reiteradamente observadas</b> · <b>convênios</b> entre União, Estados, DF e Municípios.</p><p>Elas complementam <b>as leis, os tratados e os decretos</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Normas Complementares — art. 100</i></p>",
15:"<p>Terceiro item do quadro do art. 100: <b>“as práticas reiteradamente observadas pelas autoridades administrativas (os costumes)”</b> — o parêntese é do resumo.</p><p class='fb-fonte'>Resumo 05 · <i>Normas Complementares — art. 100</i></p>",
16:"<p>Observação 1 do resumo: a observância das normas complementares <b>exclui</b> — <b>a imposição de penalidades</b> · <b>a cobrança de juros de mora</b> · <b>a atualização do valor monetário da base de cálculo</b>.</p><p>São exatamente três itens.</p><p class='fb-fonte'>Resumo 05 · <i>Normas Complementares — Observação 1</i></p>",
17:"<p>A lista da observação 1 tem três itens, e <b>o tributo não está entre eles</b>. Quem seguiu a norma complementar de boa-fé escapa de <b>multa, juros e correção</b> — mas continua devendo o <b>principal</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Normas Complementares — Observação 1</i></p>",
18:"<p>Observação 3 do resumo, escrita para esta questão: <b>“é importante não confundir os convênios celebrados pelo CONFAZ (normas PRIMÁRIAS) com os convênios previstos no art. 100 do CTN como normas COMPLEMENTARES, que se destinam à colaboração entre os entes e suas administrações tributárias”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Normas Complementares — Observação 3</i></p>",
19:"<p>Quadro do <b>art. 103</b>: salvo disposição em contrário, os <b>atos normativos</b> entram em vigor <b>na data da sua publicação</b>.</p><p>O <b>BIZU</b> do resumo: <b>“os atos normativos entram em vigor no ATO”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Vigência — art. 103</i></p>",
20:"<p>Pelo quadro do art. 103 são <b>30 dias</b> após a publicação, quanto a seus efeitos normativos.</p><p>BIZU do resumo: <b>“as decisões administrativas entram em vigor em DIAS (30 dias após a publicação)”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Vigência — art. 103</i></p>",
21:"<p>Terceira linha do art. 103: os <b>convênios</b> entram em vigor <b>na data neles prevista</b>.</p><p>BIZU: <b>“os convênios entram em vigor por CONVENIÊNCIA”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Vigência — art. 103</i></p>",
22:"<p>É o <b>art. 102</b> do CTN: a legislação dos Estados, do DF e dos Municípios vigora <b>fora</b> dos respectivos territórios nos limites em que reconheçam <b>extraterritorialidade</b> os <b>convênios</b> de que participem, ou as <b>normas gerais</b> da União.</p><p class='fb-fonte off'>Não consta do Resumo 05 — ele trata da vigência apenas pelo art. 103</p>",
23:"<p>É o <b>art. 104</b> do CTN: entram em vigor no <b>primeiro dia do exercício seguinte</b> àquele em que ocorra a sua publicação os dispositivos de lei que <b>instituam ou majorem</b> impostos sobre o <b>patrimônio ou a renda</b>, <b>definam novas hipóteses de incidência</b> ou <b>extingam/reduzam isenções</b>.</p><p class='fb-fonte off'>Não consta do Resumo 05</p>",
24:"<p>É o <b>art. 105</b>: a legislação tributária aplica-se <b>imediatamente aos fatos geradores futuros e aos pendentes</b> — pendentes são aqueles cuja ocorrência tenha tido início mas não esteja completa.</p><p class='fb-fonte off'>Não consta do Resumo 05 — ele começa a aplicação pelo art. 106</p>",
25:"<p>Quadro do <b>art. 106</b> no resumo, <b>inciso I</b> — aplica-se a ato ou fato pretérito <b>“em qualquer caso”</b>, quando a lei seja <b>expressamente interpretativa</b>, excluída a aplicação de penalidade à infração dos dispositivos interpretados.</p><p>É a única coluna que não depende de julgamento definitivo.</p><p class='fb-fonte'>Resumo 05 · <i>Aplicação — art. 106</i></p>",
26:"<p>No quadro do resumo, as três hipóteses do <b>inciso II</b> estão sob o título <b>“tratando-se de ato NÃO DEFINITIVAMENTE JULGADO”</b>.</p><p>Julgado em definitivo, acabou — não há retroatividade benéfica.</p><p class='fb-fonte'>Resumo 05 · <i>Aplicação — art. 106</i></p>",
27:"<p>Terceira hipótese do inciso II no quadro: <b>“quando lhe comine penalidade menos severa que a prevista na lei vigente ao tempo da sua prática”</b> (art. 106, II, “c”).</p><p class='fb-fonte'>Resumo 05 · <i>Aplicação — art. 106</i></p>",
28:"<p>Caixa <b>ATENÇÃO!</b> do resumo: <b>“a retroatividade benéfica NÃO se aplica às alíquotas dos tributos, mas sim às MULTAS (penalidade pecuniária menos severa), desde que o ato ainda não tenha sido definitivamente julgado”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Art. 106 — Atenção!</i></p>",
29:"<p>É o <b>EXEMPLO</b> do resumo, com os mesmos números: alíquota de <b>30%</b> reduzida para 15%, multa de <b>20%</b> reduzida para 10%. A conclusão dele: <b>“o contribuinte continuará devendo 30% do valor devido, mas terá o benefício da redução da multa para 10%”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Art. 106 — exemplo</i></p>",
30:"<p>É o <b>EXEMPLO da sociedade empresária “RAD”</b>, do próprio resumo: autuada no Pará apenas por descumprir obrigação <b>acessória</b> do ICMS, sem deixar de recolher o tributo; antes do julgamento definitivo, outra lei extingue a obrigação.</p><p>Conclusão dele: <b>art. 106, II, “b”</b> — aplica-se ao ato pretérito, <b>desde que não tenha havido fraude nem falta de pagamento de tributo</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Aplicação — exemplo</i></p>",
31:"<p>Quadro do <b>art. 108</b>: na ausência de disposição expressa, a autoridade utilizará <b>sucessivamente, na ordem indicada</b> — <b>1) analogia · 2) princípios gerais de direito tributário · 3) princípios gerais de direito público · 4) equidade</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Integração — art. 108</i></p>",
32:"<p>Na ordem do quadro, a <b>equidade é a quarta e última</b>, depois dos princípios gerais de direito público.</p><p>A ordem é <b>sucessiva</b>: só se passa para a seguinte quando a anterior não resolve.</p><p class='fb-fonte'>Resumo 05 · <i>Integração — art. 108</i></p>",
33:"<p>Observação 1 do resumo: <b>“o emprego da ANALOGIA não poderá resultar na exigência de tributo não previsto em lei”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Integração — Observação 1</i></p>",
34:"<p>Observação 2: <b>“o emprego da EQUIDADE não poderá resultar na dispensa do pagamento de tributo devido”</b>.</p><p>A observação 3 explica: o <b>princípio da legalidade</b> funciona como limite à integração — dispensar tributo devido só por lei.</p><p class='fb-fonte'>Resumo 05 · <i>Integração — Observações 2 e 3</i></p>",
35:"<p>Observações 4 e 5 do resumo, sobre o <b>art. 109</b>: os princípios gerais de direito privado <b>são</b> utilizados para <b>pesquisa da definição, do conteúdo e do alcance de seus institutos, conceitos e formas</b>, mas <b>NÃO são utilizados para a definição dos efeitos tributários</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Integração — Observações 4 e 5</i></p>",
36:"<p>Observação 6, com o <b>art. 110</b>: <b>“a lei tributária NÃO pode alterar a definição, o conteúdo e o alcance de institutos, conceitos e formas de direito privado utilizados pela Constituição, pelas Constituições Estaduais ou pelas leis orgânicas dos Municípios, para definir ou limitar competências tributárias”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Integração — Observação 6</i></p>",
37:"<p>Quadro do <b>art. 111</b> no resumo — interpreta-se <b>literalmente</b> a legislação que disponha sobre: <b>suspensão ou exclusão do crédito tributário</b> · <b>outorga de isenção</b> · <b>dispensa do cumprimento de obrigações tributárias acessórias</b>.</p><p>São três, e só essas.</p><p class='fb-fonte'>Resumo 05 · <i>Interpretação Literal — art. 111</i></p>",
38:"<p>O resumo marca a armadilha em caixa própria: <b>PEGADINHA → trocar “exclusão” por “extinção”</b>.</p><p>No art. 111 estão <b>suspensão</b> e <b>exclusão</b>. A <b>extinção</b> não está.</p><p class='fb-fonte'>Resumo 05 · <i>Interpretação Literal — Pegadinha</i></p>",
39:"<p>Observação 3 do resumo: os casos de <b>exclusão</b> estão no <b>art. 175</b> e são <b>dois — isenção e anistia</b>. Mnemônico dele: <b>ISA</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Interpretação Literal — Observação 3</i></p>",
40:"<p>Do mesmo bloco de observações: as hipóteses de <b>suspensão</b> são <b>depósito integral do montante · moratória · reclamações e recursos · liminar em MS ou em outras ações · parcelamento</b>. Mnemônico do resumo: <b>DEMORE a LIMPAR</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Interpretação Literal — Observações</i></p>",
41:"<p>É o <b>EXEMPLO</b> do resumo, do Estado do Pará: isenção de IPVA para proprietários <b>com deficiência auditiva QUE ESTEJAM APOSENTADOS</b>. Conclusão dele: a lei <b>deve ser interpretada literalmente</b>, portanto <b>somente aqueles com deficiência auditiva E que sejam aposentados</b> se beneficiam.</p><p class='fb-fonte'>Resumo 05 · <i>Interpretação Literal — exemplo</i></p>",
42:"<p>Caixa <b>ATENÇÃO!</b> do resumo: <b>“a legislação tributária que defina infrações deve ser interpretada, EM CASO DE DÚVIDA quanto à capitulação legal do fato, de forma mais favorável ao acusado”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Interpretação em caso de dúvidas — art. 112</i></p>",
43:"<p>É a caixa <b>PEGADINHA</b> do resumo, com esse enunciado exato marcado como <b>(ERRADO)</b>: suprimir o <b>“em caso de dúvida”</b>.</p><p>Sem dúvida, não há interpretação benéfica — aplica-se a lei como ela é.</p><p class='fb-fonte'>Resumo 05 · <i>Art. 112 — Pegadinha</i></p>",
44:"<p>Quadro do art. 112 no resumo, em caso de dúvida quanto: <b>à capitulação legal do fato</b> · <b>à natureza ou às circunstâncias materiais do fato, ou à natureza ou extensão dos seus efeitos</b> · <b>à autoria, imputabilidade ou punibilidade</b> · <b>à natureza da penalidade aplicável ou à sua graduação</b>.</p><p>São quatro incisos.</p><p class='fb-fonte'>Resumo 05 · <i>Art. 112</i></p>",
45:"<p>Do resumo: a lei complementar tem <b>processo de aprovação mais dificultoso</b>, e por isso recebeu funções importantes — “é mais difícil de alterar uma lei complementar, pois exige <b>maioria absoluta</b> para sua aprovação”.</p><p class='fb-fonte'>Resumo 05 · <i>Lei Complementar</i></p>",
46:"<p>Item 1 da lista de <b>assuntos que devem ser tratados por lei complementar</b>: <b>conflitos de competência, em matéria tributária, entre os entes da federação</b> (art. 146, I).</p><p class='fb-fonte'>Resumo 05 · <i>Lei Complementar — art. 146</i></p>",
47:"<p>Item 5 da lista do resumo, com o parêntese que resolve a questão: <b>“em relação aos IMPOSTOS, a definição dos respectivos fatos geradores, bases de cálculo e contribuintes. (ALÍQUOTAS NÃO)”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Lei Complementar — art. 146, III, “a”</i></p>",
48:"<p>Caixa <b>ATENÇÃO!</b> do resumo: <b>“em relação às TAXAS e CONTRIBUIÇÕES DE MELHORIA, a definição dos respectivos fatos geradores, bases de cálculo, contribuintes e alíquotas ocorre por meio de LEI ORDINÁRIA”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Lei Complementar — Atenção!</i></p>",
49:"<p>Item 9 da lista do resumo: <b>critérios especiais de tributação a fim de prevenir desequilíbrios na concorrência</b> — CF, <b>art. 146-A</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Lei Complementar — art. 146-A</i></p>",
50:"<p>Invertido. O quadro do resumo traz, com setas: <b>alíquota MÍNIMA do IPVA (↓)</b> · <b>alíquota MÁXIMA do ITCMD (↑)</b> · <b>alíquota interestadual do ICMS</b>.</p><p>As setinhas são dele — use-as para decorar.</p><p class='fb-fonte'>Resumo 05 · <i>Resolução do Senado</i></p>",
51:"<p>Terceira linha do quadro: o Senado fixará, mediante resolução, <b>a alíquota interestadual do ICMS</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Resolução do Senado</i></p>",
52:"<p><b>OBS</b> do resumo: <b>“é FACULTADO ao Senado Federal estabelecer alíquotas mínimas e máximas do ICMS nas operações INTERNAS”</b> (CF, art. 155, §2º, V).</p><p>Nas <b>interestaduais</b> é obrigatório; nas <b>internas</b>, facultado.</p><p class='fb-fonte'>Resumo 05 · <i>Resolução do Senado — OBS</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"05", nome:"Legislação tributária — vigência, aplicação e interpretação", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
