/* Direito Tributário — Módulo 03: Competência tributária e espécies de tributos (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dtrib03 = (function(){
"use strict";

var CARDS = [
  ["O que é competência tributária?","A <b>atribuição dada pela Constituição Federal</b> aos entes políticos (União, Estados, DF e Municípios) <b>para INSTITUIR tributos</b>."],
  ["O que é capacidade tributária ativa?","A capacidade para <b>arrecadar e fiscalizar</b> tributos, <b>ou executar leis, serviços, atos ou decisões administrativas</b> em matéria tributária, <b>conferida por uma pessoa jurídica de direito público a outra</b>."],
  ["Competência × capacidade: o que pode ser delegado?","<b>Competência tributária: INDELEGÁVEL</b> (art. 7º do CTN).<br><b>Capacidade tributária ativa: DELEGÁVEL</b> — é justamente o que a ressalva do art. 7º autoriza."],
  ["Art. 7º do CTN, na literalidade","“A competência tributária é <b>indelegável</b>, salvo atribuição das funções de <b>arrecadar ou fiscalizar</b> tributos, ou de <b>executar leis, serviços, atos ou decisões administrativas</b> em matéria tributária, conferida por uma pessoa jurídica de direito público a outra.”"],
  ["Para quem se delega a capacidade tributária ativa?","<b>Em regra, só para pessoas jurídicas de DIREITO PÚBLICO</b> — uma autarquia, por exemplo."],
  ["Qual a exceção da Súmula 396 do STJ?","A <b>Confederação Nacional de Agricultura</b>, que é <b>pessoa jurídica de direito PRIVADO</b>, <b>pode</b> receber a delegação da capacidade tributária ativa."],
  ["Entregar a uma empresa privada o encargo de arrecadar tributo é delegação de competência?","<b>NÃO</b> — “não constitui delegação de competência o cometimento, a pessoas de direito privado, do <b>encargo ou da função de ARRECADAR</b> tributos”. É a mera função de caixa (bancos)."],
  ["Exemplo clássico de delegação válida","Lei <b>estadual</b> confere a uma <b>autarquia</b> gestora do RPPS poderes para <b>fiscalizar, arrecadar e cobrar judicialmente</b> a contribuição previdenciária dos servidores."],

  ["O que é competência PRIVATIVA?","A competência para instituir tributos que <b>só pode ser exercida por determinado ente</b>."],
  ["Quais tributos são de competência privativa de cada ente?","<b>União:</b> impostos + <b>empréstimos compulsórios</b> + <b>contribuições especiais</b>.<br><b>Estados:</b> <b>apenas os impostos</b>.<br><b>Municípios:</b> impostos + <b>COSIP</b>."],
  ["O que é competência COMUM?","A atribuída a <b>TODOS os entes</b>: <b>taxas</b> e <b>contribuições de melhoria</b>, desde que o fato gerador seja <b>atividade estatal do próprio ente</b> que as instituiu. São os <b>tributos VINCULADOS</b>."],
  ["O que é competência CUMULATIVA? (art. 147 da CF)","A da <b>União</b> para instituir os tributos <b>estaduais e municipais nos Territórios Federais</b>; e a do <b>DF</b> para instituir os <b>tributos municipais</b>."],
  ["E se o Território Federal for dividido em Municípios?","Então à <b>União cabem só os impostos ESTADUAIS</b> — os Municípios criados passam a instituir os seus próprios impostos municipais."],
  ["O que é competência RESIDUAL e de quem é?","<b>Só da UNIÃO</b>: instituir <b>novos impostos</b> (art. 154, I) e <b>novas contribuições para a seguridade social</b> (art. 195, § 4º), além dos já existentes."],
  ["Quais os três requisitos dos IMPOSTOS residuais?","<b>i)</b> <b>lei complementar</b>; <b>ii)</b> <b>não cumulatividade</b>; <b>iii)</b> <b>fato gerador e base de cálculo diversos</b> dos demais impostos já discriminados."],
  ["Quais os três requisitos das CONTRIBUIÇÕES sociais residuais?","<b>i)</b> lei complementar; <b>ii)</b> não cumulativas; <b>iii)</b> sem fato gerador ou base de cálculo <b>próprios de outras CONTRIBUIÇÕES</b>."],
  ["Pegadinha: contribuição social residual pode ter base de cálculo de imposto?","<b>PODE</b> — a vedação é só quanto a <b>outras contribuições</b>. O imposto residual é que não pode repetir base de outro <b>imposto</b>."],
  ["O que é competência EXTRAORDINÁRIA?","A da <b>União</b> para instituir o <b>Imposto Extraordinário de Guerra (IEG)</b>, art. 154, II."],
  ["Quando cabe o IEG e por qual veículo normativo?","Só <b>na iminência ou no caso de GUERRA EXTERNA</b> — nunca guerra civil. Por <b>lei ordinária</b> (ou até <b>medida provisória</b>), pois não há reserva de lei complementar."],
  ["O IEG pode repetir fato gerador de outro imposto?","<b>SIM</b> — “compreendidos ou não em sua competência tributária”: pode ter o mesmo fato gerador de imposto da União, dos Estados ou dos Municípios. Será <b>suprimido gradativamente</b>, cessadas as causas."],
  ["IEG × IGF: qual o veículo de cada um?","<b>IEG → LEI ORDINÁRIA</b> · <b>IGF → LEI COMPLEMENTAR</b>. Não confunda."],
  ["Resuma o quadro das competências","<b>Privativa:</b> impostos (todos os entes), empréstimos compulsórios e contribuições especiais (União).<br><b>Comum:</b> taxas e contribuição de melhoria (todos).<br><b>Cumulativa:</b> União (Territórios) e DF.<br><b>Residual e extraordinária:</b> <b>só a União</b>."],

  ["O que é BIS IN IDEM?","<b>O MESMO ente</b> tributa o <b>mesmo fato gerador duas vezes</b>. <b>1 ente + 2 tributos = PERMITIDO.</b> Ex.: <b>IRPJ e CSLL</b> sobre o lucro, ambos da União."],
  ["O que é BITRIBUTAÇÃO?","<b>MAIS DE UM ente</b> tributa o <b>mesmo fato gerador</b>. <b>2 entes + 2 tributos = PROIBIDO</b>, em regra, porque há invasão de competência."],
  ["Qual a exceção que autoriza a bitributação?","O <b>IEG</b> — a própria Constituição permite que a União alcance fato gerador de imposto estadual ou municipal."],
  ["Quantas espécies de tributo há?","<b>CTN (art. 5º): TRÊS</b> — impostos, taxas e contribuições de melhoria (teoria <b>tripartida</b>).<br><b>STF: CINCO</b> — as três + <b>empréstimos compulsórios</b> e <b>contribuições especiais</b> (teoria <b>pentapartida</b>)."],
  ["Qual o fato gerador do imposto? (art. 16 do CTN)","Uma <b>situação independente de qualquer atividade estatal específica</b> relativa ao contribuinte — é <b>tributo NÃO VINCULADO</b>: quem age é o contribuinte, manifestando riqueza."],
  ["Quais são os NOVE impostos da UNIÃO?","<b>II · IE · IR · IPI · IOF · ITR · IGF · IEG · impostos residuais.</b>"],
  ["Quais são os impostos dos ESTADOS e do DF?","<b>ITCMD · IPVA · ICMS</b> — só três."],
  ["Quais são os impostos dos MUNICÍPIOS e do DF?","<b>IPTU · ISS · ITBI</b> — só três."],
  ["Transmissão de bens inter vivos: de quem é a competência?","<b>Não onerosa</b> (doação) → <b>ESTADO</b>, pelo <b>ITCMD</b>.<br><b>Onerosa</b> → <b>MUNICÍPIO</b>, pelo <b>ITBI</b>."],
  ["Por que o DF aparece nas duas listas?","Porque o DF tem <b>competência cumulativa</b> (art. 147): acumula os impostos <b>estaduais e municipais</b>. São seis ao todo."],

  ["O que é empréstimo compulsório?","Empréstimo <b>obrigatório, forçado</b>: o cidadão é obrigado a emprestar ao Poder Público, com <b>devolução garantida</b>."],
  ["De quem é a competência para o empréstimo compulsório e por qual veículo?","<b>EXCLUSIVA da União</b>, e <b>somente por LEI COMPLEMENTAR</b> (art. 148 da CF)."],
  ["Quais as duas hipóteses do art. 148?","<b>I)</b> despesas extraordinárias decorrentes de <b>calamidade pública, guerra externa ou sua iminência</b>; <b>II)</b> <b>investimento público de caráter urgente e de relevante interesse nacional</b>."],
  ["Qual hipótese do empréstimo compulsório observa a anterioridade?","A do <b>inciso II</b> — investimento público urgente — <b>observa a anterioridade anual</b>. A do inciso I (guerra e calamidade) é <b>exceção</b>."],
  ["A que se vincula a receita do empréstimo compulsório?","À <b>despesa que fundamentou a sua instituição</b> — vinculação obrigatória."],
  ["O que identifica a CONTRIBUIÇÃO ESPECIAL?","A <b>FINALIDADE</b> da criação (art. 149), e não o fato gerador — com <b>vinculação da receita</b> à causa que a gerou. Foge da classificação pelo fato gerador."],
  ["Quais as três contribuições do art. 149?","<b>i)</b> <b>sociais</b>; <b>ii)</b> de <b>intervenção no domínio econômico (CIDE)</b>; <b>iii)</b> de <b>interesse das categorias profissionais ou econômicas</b>. Competência <b>exclusiva da União</b>."],
  ["Por qual veículo se cria a contribuição especial?","<b>Lei ORDINÁRIA</b> — a lei complementar só é exigida para as <b>contribuições sociais RESIDUAIS</b>."],
  ["Qual a exceção à exclusividade da União nas contribuições?","A <b>contribuição para custeio de regime próprio de previdência (RPPS)</b>: Estados, DF e Municípios que adotem RPPS podem instituí-la sobre <b>servidores ativos, aposentados e pensionistas</b> (art. 149, § 1º)."],
  ["E a COSIP?","<b>Municípios e DF</b> podem instituir a <b>Contribuição para o Custeio do Serviço de Iluminação Pública</b> (art. 149-A). É competência <b>privativa municipal</b>."],
  ["Estado pode instituir contribuição para custear SAÚDE dos seus servidores?","<b>NÃO</b> — a lei seria <b>inconstitucional</b>. Só a <b>União</b> institui contribuições sociais para a seguridade que abrange <b>saúde e assistência social</b>. Aos demais entes cabe apenas a previdenciária do RPPS."],
  ["O que compreende a seguridade social? (art. 194)","<b>Previdência · Assistência Social · Saúde.</b> A contribuição previdenciária custeia apenas o primeiro ramo."],

  ["Quais os QUATRO tributos que exigem LEI COMPLEMENTAR?","<b>i)</b> empréstimo compulsório; <b>ii)</b> <b>IGF</b>; <b>iii)</b> imposto <b>residual</b>; <b>iv)</b> contribuição <b>social residual</b>. Decore esses quatro — todo o resto é lei ordinária."],
  ["Existe reserva de iniciativa para lei tributária?","<b>NÃO</b> — a CF não a prevê. Projeto iniciado por parlamentar pode até <b>revogar integralmente</b> um tributo."],
  ["Prefeito veta, por vício de iniciativa, projeto de vereador que revoga uma taxa. Procede?","<b>Não</b> — as razões do veto são inadequadas: a Constituição <b>não exige</b> reserva de iniciativa nem projeto do chefe do Executivo para extinguir tributo."],
  ["O que cabe à lei complementar pelo art. 146, III, b?","Normas gerais sobre <b>obrigação, lançamento, crédito, PRESCRIÇÃO e DECADÊNCIA</b> tributários."],
  ["Lei ordinária federal amplia para 10 anos o prazo decadencial de uma contribuição. Vale?","<b>NÃO</b> — prazo de decadência é matéria de <b>lei complementar</b> (art. 146, III, b). A ampliação é inválida."],
  ["O que cabe à lei complementar pelo art. 146, III, a?","Definir os <b>fatos geradores, bases de cálculo e contribuintes</b> dos impostos previstos na Constituição."],
  ["Sem lei complementar definindo o imposto estadual, o Estado pode cobrá-lo?","<b>SIM</b> — exerce <b>competência legislativa PLENA</b> até que a lei complementar seja editada (art. 24, I e § 3º)."],
  ["Quem legisla sobre direito tributário?","<b>União, Estados e DF, CONCORRENTEMENTE</b> (art. 24, I). Inexistindo lei federal de normas gerais, os Estados exercem competência <b>plena</b> para atender suas peculiaridades."],
  ["O que é DISCRIMINAÇÃO CONSTITUCIONAL DE RENDAS?","A técnica constitucional que <b>dota os entes de recursos</b>, composta pela <b>atribuição de competência tributária</b> e pela <b>repartição de receitas</b>. Liga-se à autonomia federativa e, portanto, à <b>cláusula pétrea</b> da forma federativa (art. 60, § 4º)."],
  ["Quanto do imposto residual pertence aos Estados e ao DF?","<b>20%</b> do produto da arrecadação (art. 157, II)."],
  ["Reforma tributária: a EC 132/2023 mudou a competência?","Sim — criou o <b>IBS</b>, de <b>competência COMPARTILHADA entre Estados, DF e Municípios</b> (art. 156-A), figura nova no desenho clássico; a <b>CBS</b> e o <b>Imposto Seletivo</b>, ambos da <b>União</b>. O resumo de origem é anterior à emenda: confira a redação atual antes de fechar qualquer lista."]
];

var QS = [
  ["Competência tributária é a atribuição dada pela Constituição Federal aos entes políticos para instituir tributos.","C","FCC","É aptidão para criar; arrecadar e fiscalizar é capacidade tributária ativa."],
  ["A competência tributária é delegável mediante lei complementar.","E","CEBRASPE","É <b>indelegável</b> (art. 7º do CTN); só a capacidade tributária ativa pode ser delegada."],
  ["A capacidade tributária ativa compreende as funções de arrecadar ou fiscalizar tributos e de executar leis, serviços, atos ou decisões administrativas em matéria tributária.","C","FGV","É exatamente a ressalva do art. 7º do CTN."],
  ["Em regra, a capacidade tributária ativa somente pode ser delegada a pessoas jurídicas de direito público.","C","FCC","A exceção consagrada é a da Súmula 396 do STJ."],
  ["Segundo o STJ, a Confederação Nacional de Agricultura, pessoa jurídica de direito privado, pode receber a delegação da capacidade tributária ativa.","C","STJ Súmula 396","É a exceção que as bancas cobram."],
  ["Constitui delegação de competência o cometimento, a pessoas de direito privado, do encargo de arrecadar tributos.","E","CEBRASPE","O CTN diz o contrário: não constitui delegação — é a função de caixa."],
  ["Lei estadual pode conferir a autarquia estadual gestora do regime próprio de previdência poderes para fiscalizar, arrecadar e cobrar judicialmente a contribuição previdenciária dos servidores.","C","FGV","Delegação válida de capacidade tributária ativa a pessoa jurídica de direito público."],
  ["São de competência privativa da União os impostos, os empréstimos compulsórios e as contribuições especiais.","C","FCC","Nos Estados, a competência privativa alcança apenas os impostos."],
  ["Os Estados detêm competência privativa para instituir impostos e contribuição para o custeio do serviço de iluminação pública.","E","FGV","A COSIP é de <b>Municípios e DF</b> (art. 149-A); aos Estados, só os impostos."],
  ["As taxas e as contribuições de melhoria podem ser instituídas por qualquer ente político, desde que o fato gerador seja atividade estatal do ente que as instituiu.","C","CEBRASPE","É a competência comum — alcança os tributos vinculados."],
  ["A competência tributária comum diz respeito aos tributos não vinculados.","E","FGV","Diz respeito aos tributos <b>vinculados</b>: taxas e contribuição de melhoria."],
  ["Compete à União instituir, nos Territórios Federais, os impostos estaduais e, se o Território não for dividido em Municípios, também os impostos municipais.","C","FCC","Art. 147 da CF — competência cumulativa."],
  ["Se o Território Federal for dividido em Municípios, competirá à União instituir tanto os impostos estaduais quanto os municipais.","E","CEBRASPE","Os Municípios criados instituem seus próprios impostos; à União restam os estaduais."],
  ["O Distrito Federal detém competência cumulativa para instituir os impostos municipais.","C","FGV","Por isso o DF acumula seis impostos."],
  ["A competência residual para instituir novos impostos pertence à União, aos Estados e ao Distrito Federal.","E","FCC","Pertence <b>somente à União</b> (art. 154, I)."],
  ["Os impostos residuais devem ser instituídos por lei complementar, ser não cumulativos e ter fato gerador e base de cálculo diversos dos discriminados na Constituição.","C","CEBRASPE","São os três requisitos do art. 154, I."],
  ["As contribuições sociais residuais não podem ter a mesma base de cálculo de impostos já existentes.","E","FGV","Podem — a vedação alcança apenas base de cálculo própria de outras <b>contribuições</b>."],
  ["As contribuições sociais residuais devem ser instituídas por lei complementar e ser não cumulativas.","C","FCC","Art. 195, § 4º, combinado com o art. 154, I."],
  ["O Imposto Extraordinário de Guerra pode ser instituído na iminência ou no caso de guerra externa ou de guerra civil.","E","CEBRASPE","Somente guerra <b>externa</b> ou sua iminência."],
  ["O Imposto Extraordinário de Guerra depende de lei complementar para ser instituído.","E","FGV","Pode ser criado por <b>lei ordinária</b> e até por medida provisória — não há reserva de lei complementar."],
  ["A União pode instituir imposto extraordinário compreendido ou não em sua competência tributária, o qual será suprimido gradativamente, cessadas as causas de sua criação.","C","FCC","Literalidade do art. 154, II."],
  ["O Imposto sobre Grandes Fortunas pode ser instituído por lei ordinária.","E","CEBRASPE","O IGF exige <b>lei complementar</b>; quem se contenta com lei ordinária é o IEG."],
  ["Ocorre bis in idem quando o mesmo ente federado tributa duas vezes o mesmo fato gerador, como no caso do IRPJ e da CSLL.","C","FGV","Um ente + dois tributos: permitido."],
  ["A bitributação, em regra, é permitida no sistema tributário brasileiro.","E","FCC","Em regra é <b>proibida</b>, por implicar invasão de competência; a exceção é o IEG."],
  ["O Imposto Extraordinário de Guerra constitui exceção à vedação da bitributação.","C","CEBRASPE","A própria CF autoriza alcançar fato gerador de imposto alheio."],
  ["Nos termos do CTN, os tributos são impostos, taxas e contribuições de melhoria.","C","FCC","É a teoria tripartida do art. 5º; o STF adota a pentapartida."],
  ["Segundo o STF, são cinco as espécies tributárias, incluindo os empréstimos compulsórios e as contribuições especiais.","C","STF","Teoria pentapartida."],
  ["Imposto é o tributo cuja obrigação tem por fato gerador uma situação independente de qualquer atividade estatal específica relativa ao contribuinte.","C","CTN art. 16","Por isso o imposto é tributo não vinculado."],
  ["São impostos de competência da União o II, o IE, o IR, o IPI, o IOF, o ITR, o IGF, o IEG e os impostos residuais.","C","FGV","São nove ao todo."],
  ["O ITCMD, o IPVA e o ITBI são impostos de competência dos Estados e do Distrito Federal.","E","FCC","O <b>ITBI</b> é municipal; aos Estados cabem ITCMD, IPVA e ICMS."],
  ["São impostos de competência dos Municípios o IPTU, o ISS e o ITBI.","C","CEBRASPE","O DF acumula esses três com os três estaduais."],
  ["A competência para instituir imposto sobre a transmissão inter vivos, a título oneroso, de bens imóveis é do Estado.","E","FGV","Transmissão onerosa inter vivos é do <b>Município</b> (ITBI); ao Estado cabe a não onerosa (ITCMD)."],
  ["Somente a União pode criar impostos não especificados na Constituição Federal.","C","FCC","São os impostos residuais do art. 154, I."],
  ["Os empréstimos compulsórios são de competência exclusiva da União e devem ser instituídos por lei complementar.","C","CEBRASPE","Art. 148 da CF."],
  ["A União pode instituir empréstimos compulsórios para atender a despesas extraordinárias decorrentes de calamidade pública, de guerra externa ou sua iminência.","C","FCC","É a hipótese do inciso I, exceção à anterioridade."],
  ["O empréstimo compulsório instituído para investimento público de caráter urgente e de relevante interesse nacional deve observar o princípio da anterioridade anual.","C","FGV","Só o de guerra e calamidade é exceção."],
  ["A aplicação dos recursos provenientes de empréstimo compulsório é livre, não se vinculando à despesa que fundamentou sua instituição.","E","CEBRASPE","A vinculação é obrigatória."],
  ["O critério de identificação das contribuições especiais baseia-se na finalidade de sua criação, e não no fato gerador.","C","FGV","Daí a vinculação da receita à causa da criação."],
  ["Compete exclusivamente à União instituir contribuições sociais, de intervenção no domínio econômico e de interesse das categorias profissionais ou econômicas.","C","CF art. 149","A exceção é a contribuição do RPPS dos demais entes."],
  ["As contribuições especiais, em regra, são instituídas por lei complementar.","E","FCC","Por <b>lei ordinária</b>; a lei complementar só é exigida nas contribuições sociais residuais."],
  ["Estados, Distrito Federal e Municípios que adotem regime próprio de previdência podem instituir contribuição para custeá-lo, cobrada de servidores ativos, aposentados e pensionistas.","C","CF art. 149 § 1º","É a exceção à exclusividade da União."],
  ["Município que institui, por lei, contribuição para custear serviço de saúde em favor de seus servidores age validamente.","E","CEBRASPE","A lei é inconstitucional: só a União institui contribuição social para saúde e assistência."],
  ["Os Municípios e o Distrito Federal podem instituir contribuição para o custeio do serviço de iluminação pública.","C","CF art. 149-A","É a COSIP, competência privativa municipal."],
  ["A seguridade social compreende a previdência, a assistência social e a saúde.","C","CF art. 194","A contribuição previdenciária custeia apenas a previdência."],
  ["Exigem lei complementar o empréstimo compulsório, o imposto sobre grandes fortunas, o imposto residual e a contribuição social residual.","C","FGV","São os quatro casos clássicos de reserva de lei complementar."],
  ["A Constituição Federal estabelece reserva de iniciativa do chefe do Poder Executivo para as leis de natureza tributária.","E","CEBRASPE","Inexiste tal reserva; projeto parlamentar pode até revogar integralmente um tributo."],
  ["É adequado o veto do prefeito, por inconstitucionalidade formal, a projeto de lei de iniciativa de vereador que revoga taxa municipal.","E","FGV","A Constituição não exige reserva de iniciativa para extinguir tributo."],
  ["Cabe à lei complementar estabelecer normas gerais sobre obrigação, lançamento, crédito, prescrição e decadência tributários.","C","CF art. 146 III b","Por isso lei ordinária não pode alterar prazo decadencial."],
  ["É válida lei ordinária federal que amplia para dez anos o prazo decadencial para lançamento de contribuição previdenciária.","E","STF","Matéria reservada à lei complementar."],
  ["Inexistindo lei complementar que defina o fato gerador, a base de cálculo e os contribuintes de imposto estadual, o Estado não pode instituí-lo nem cobrá-lo.","E","FCC","Pode: exerce competência legislativa plena até a edição da lei complementar (art. 24, § 3º)."],
  ["Compete à União, aos Estados e ao Distrito Federal legislar concorrentemente sobre direito tributário.","C","CF art. 24 I","Inexistindo lei federal de normas gerais, os Estados exercem competência plena."],
  ["Denomina-se discriminação constitucional de rendas o conjunto de normas sobre atribuição de competência tributária e repartição de receitas tributárias.","C","FGV","Vincula-se à cláusula pétrea da forma federativa."],
  ["Pertencem aos Estados e ao Distrito Federal vinte por cento do produto da arrecadação do imposto residual que a União instituir.","C","CF art. 157 II","Percentual cobrado com frequência."],
  ["A EC 132/2023 criou o IBS, de competência exclusiva da União.","E","FGV","O IBS é de competência <b>compartilhada</b> entre Estados, DF e Municípios (art. 156-A); da União são a CBS e o Imposto Seletivo."]
];

var EX = {
S1:{t:"match", instr:"Ligue cada conceito à sua definição",
  pairs:[["Competência tributária","Aptidão para INSTITUIR tributos — indelegável"],
         ["Capacidade tributária ativa","Arrecadar, fiscalizar e executar atos — delegável"]],
  why:"O art. 7º do CTN separa as duas numa frase só."},

S2:{t:"gap", instr:"Complete o art. 7º do CTN",
  before:"A competência tributária é ",
  after:", salvo atribuição das funções de arrecadar ou fiscalizar tributos.",
  options:["indelegável","delegável","irrenunciável"], answer:0,
  why:"A ressalva é justamente a capacidade tributária ativa."},

S3:{t:"multi", instr:"Marque o que é correto sobre a delegação",
  options:["Em regra, só se delega a pessoas jurídicas de direito público",
           "A Confederação Nacional de Agricultura pode recebê-la, conforme o STJ",
           "Entregar a banco o encargo de arrecadar não é delegação de competência",
           "A própria competência para instituir pode ser delegada por convênio"],
  answers:[0,1,2],
  why:"Instituir tributo é indelegável em qualquer hipótese."},

S4:{t:"sort", instr:"Cada tributo é de competência privativa de quem?",
  buckets:["Só da União","Dos Municípios e DF","De todos os entes"],
  items:[["Empréstimos compulsórios",0],["Contribuições especiais (regra)",0],["Impostos residuais",0],
         ["COSIP",1],
         ["Impostos (cada um o seu)",2]],
  why:"Aos Estados, a competência privativa alcança apenas os impostos."},

S5:{t:"mc", instr:"Taxas e contribuições de melhoria correspondem a que espécie de competência?",
  options:["Comum — de todos os entes, conforme a atividade estatal que exercerem",
           "Privativa da União",
           "Cumulativa, exercida apenas nos Territórios",
           "Residual, dependente de lei complementar"],
  answer:0,
  why:"Competência comum = tributos vinculados a uma atividade do próprio ente."},

S6:{t:"mc", instr:"Território Federal dividido em Municípios: a União institui quais impostos?",
  options:["Apenas os estaduais","Os estaduais e os municipais",
           "Apenas os municipais","Nenhum — a competência passa ao Território"],
  answer:0,
  why:"Os Municípios criados passam a instituir os próprios impostos municipais."},

S7:{t:"multi", instr:"Marque os requisitos dos IMPOSTOS residuais (art. 154, I)",
  options:["Lei complementar","Não cumulatividade",
           "Fato gerador e base de cálculo diversos dos impostos já discriminados",
           "Vinculação da receita à seguridade social"],
  answers:[0,1,2],
  why:"Vinculação de receita é característica das contribuições, não dos impostos."},

S8:{t:"sort", instr:"O que a contribuição social residual PODE repetir?",
  buckets:["Pode repetir","Não pode repetir"],
  items:[["Base de cálculo de imposto",0],
         ["Base de cálculo de outra contribuição",1],["Fato gerador de outra contribuição",1]],
  why:"A vedação do art. 195, § 4º, olha só para outras contribuições."},

S9:{t:"match", instr:"Qual o veículo normativo de cada tributo?",
  pairs:[["IEG","Lei ordinária — e até medida provisória"],
         ["IGF","Lei complementar"],
         ["Empréstimo compulsório","Lei complementar"]],
  why:"IEG × IGF é a comparação mais cobrada do módulo."},

S10:{t:"gap", instr:"Complete a hipótese do IEG",
  before:"A União poderá instituir impostos extraordinários na iminência ou no caso de ",
  after:", compreendidos ou não em sua competência tributária.",
  options:["guerra externa","guerra civil","calamidade pública"], answer:0,
  why:"Guerra interna não autoriza o IEG."},

S11:{t:"sort", instr:"Bis in idem ou bitributação?",
  buckets:["Bis in idem (permitido)","Bitributação (vedada, salvo IEG)"],
  items:[["IRPJ e CSLL sobre o lucro, ambos da União",0],
         ["Um ente tributa duas vezes o mesmo fato gerador",0],
         ["Estado e Município tributam o mesmo fato gerador",1],
         ["Invasão de competência tributária alheia",1]],
  why:"1 ente + 2 tributos: permitido. 2 entes: proibido, salvo o IEG."},

S12:{t:"sort", instr:"De quem é cada imposto?",
  buckets:["União","Estados e DF","Municípios e DF"],
  items:[["II",0],["IR",0],["IOF",0],["ITR",0],["IGF",0],
         ["ITCMD",1],["IPVA",1],["ICMS",1],
         ["IPTU",2],["ISS",2],["ITBI",2]],
  why:"Nove da União, três dos Estados, três dos Municípios — e o DF acumula seis."},

S13:{t:"mc", instr:"Transmissão de imóvel por ato oneroso entre vivos. Qual imposto e de quem?",
  options:["ITBI, do Município","ITCMD, do Estado",
           "ITR, da União","ICMS, do Estado"],
  answer:0,
  why:"Não onerosa (doação) é ITCMD estadual; onerosa é ITBI municipal."},

S14:{t:"wordbank", instr:"Monte o fato gerador do imposto (art. 16 do CTN)",
  target:["uma","situação","independente","de","qualquer","atividade","estatal","específica"],
  extra:["prestação de serviço público","obra pública valorizadora","poder de polícia"],
  why:"Por isso o imposto é tributo NÃO vinculado."},

S15:{t:"multi", instr:"Marque o que é correto sobre os empréstimos compulsórios",
  options:["Competência exclusiva da União","Instituídos somente por lei complementar",
           "Receita vinculada à despesa que fundamentou a instituição",
           "Podem ser instituídos pelos Estados em caso de calamidade local"],
  answers:[0,1,2],
  why:"Nem calamidade local abre competência estadual — o art. 148 é só da União."},

S16:{t:"sort", instr:"O empréstimo compulsório observa a anterioridade anual?",
  buckets:["Observa","Não observa"],
  items:[["Investimento público urgente e de relevante interesse nacional",0],
         ["Calamidade pública",1],["Guerra externa ou sua iminência",1]],
  why:"Só a hipótese do inciso II se sujeita ao princípio."},

S17:{t:"gap", instr:"Complete o critério de identificação das contribuições especiais",
  before:"O critério de identificação da contribuição especial baseia-se na ",
  after:" da criação do tributo, com vinculação da receita que lhe deu causa.",
  options:["finalidade","materialidade","base de cálculo"], answer:0,
  why:"Ela foge da classificação pelo fato gerador."},

S18:{t:"multi", instr:"Marque as contribuições do art. 149, de competência da União",
  options:["Sociais","De intervenção no domínio econômico (CIDE)",
           "De interesse das categorias profissionais ou econômicas",
           "De custeio do serviço de iluminação pública"],
  answers:[0,1,2],
  why:"A COSIP é de Municípios e DF, pelo art. 149-A."},

S19:{t:"mc", instr:"Município institui, por lei, contribuição para custear serviço de saúde de seus servidores. E daí?",
  options:["A lei é inconstitucional — só a União institui contribuição social para a saúde",
           "É válida, por integrar a seguridade social do próprio ente",
           "É válida se aprovada por lei complementar municipal",
           "É válida apenas quanto aos servidores ativos"],
  answer:0,
  why:"Ao Município cabe apenas a contribuição do seu regime próprio de PREVIDÊNCIA."},

S20:{t:"multi", instr:"Marque os tributos que exigem LEI COMPLEMENTAR",
  options:["Empréstimo compulsório","Imposto sobre Grandes Fortunas",
           "Imposto residual","Contribuição social residual",
           "Imposto Extraordinário de Guerra"],
  answers:[0,1,2,3],
  why:"O IEG é o intruso: lei ordinária, e até medida provisória."},

S21:{t:"mc", instr:"Lei ordinária federal amplia para dez anos o prazo decadencial de uma contribuição. Qual o vício?",
  options:["Prescrição e decadência são matéria de lei complementar (art. 146, III, b)",
           "Violação da anterioridade nonagesimal",
           "Vício de iniciativa, por não ter partido do Executivo",
           "Nenhum — a União pode fixar seus próprios prazos"],
  answer:0,
  why:"Por isso a ampliação é inválida, ainda que a União seja a titular do tributo."},

S22:{t:"order", instr:"Ordene o raciocínio quando falta lei complementar sobre imposto estadual",
  items:["A CF exige lei complementar para definir fato gerador, base de cálculo e contribuintes",
         "A lei complementar não foi editada",
         "O art. 24, § 3º, autoriza o Estado a exercer competência legislativa plena",
         "O Estado pode instituir e cobrar o imposto até que a lei complementar venha"],
  why:"A ausência de lei complementar não paralisa a competência estadual."},

S23:{t:"multi", instr:"Marque o que integra a DISCRIMINAÇÃO CONSTITUCIONAL DE RENDAS",
  options:["Atribuição de competência tributária","Repartição das receitas tributárias",
           "Concessão de isenções heterônomas","Fixação das alíquotas pelo Executivo"],
  answers:[0,1],
  why:"É técnica ligada à autonomia federativa — e, por isso, à cláusula pétrea do art. 60, § 4º."},

S24:{t:"sort", instr:"Reforma tributária: de quem é cada novo tributo?",
  buckets:["União","Compartilhada — Estados, DF e Municípios"],
  items:[["CBS",0],["Imposto Seletivo",0],["IBS",1]],
  why:"O IBS do art. 156-A é a novidade: competência compartilhada, figura que não existia no desenho clássico."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Competência × capacidade tributária ativa",
      '<div class="box"><span class="bl">As duas aptidões</span>'+
      '<p><b>Competência tributária:</b> atribuição dada pela <b>Constituição</b> aos entes políticos para <b>INSTITUIR</b> tributos.</p>'+
      '<p><b>Capacidade tributária ativa:</b> aptidão para <b>arrecadar e fiscalizar</b>, ou <b>executar leis, serviços, atos ou decisões administrativas</b> em matéria tributária.</p></div>'+
      '<div class="box trap"><span class="bl">Art. 7º do CTN — a frase inteira</span>'+
      '<p>“A competência tributária é <b>INDELEGÁVEL</b>, salvo atribuição das funções de <b>arrecadar ou fiscalizar</b> tributos, ou de <b>executar leis, serviços, atos ou decisões administrativas</b> em matéria tributária, conferida por uma <b>pessoa jurídica de direito público a outra</b>.”</p>'+
      '<p class="mn"><em>Criar: nunca se delega. Arrecadar e fiscalizar: delega-se.</em></p></div>'+
      '<div class="box tip"><span class="bl">Para quem se delega</span>'+
      '<p>Em regra, só a <b>pessoas jurídicas de direito público</b> — uma autarquia estadual do RPPS pode fiscalizar, arrecadar e <b>cobrar judicialmente</b> a contribuição dos servidores.</p>'+
      '<p><b>Exceção (Súmula 396 do STJ):</b> a <b>Confederação Nacional de Agricultura</b>, pessoa jurídica de <b>direito privado</b>, pode receber a delegação.</p>'+
      '<p><b>E os bancos?</b> “Não constitui delegação de competência o cometimento, a pessoas de direito privado, do <b>encargo ou da função de ARRECADAR</b> tributos.” É função de caixa, não de fisco.</p></div>'),
    sl("As seis espécies de competência",
      '<div class="box"><span class="bl">Privativa</span>'+
      '<p>Só o ente indicado exerce. <b>União:</b> impostos + <b>empréstimos compulsórios</b> + <b>contribuições especiais</b>. <b>Estados:</b> <b>apenas impostos</b>. <b>Municípios:</b> impostos + <b>COSIP</b>.</p></div>'+
      '<div class="box"><span class="bl">Comum</span>'+
      '<p><b>Todos os entes</b>: <b>taxas</b> e <b>contribuições de melhoria</b>, desde que o fato gerador seja atividade estatal <b>do próprio ente</b>. São os <b>tributos VINCULADOS</b>.</p></div>'+
      '<div class="box"><span class="bl">Cumulativa — art. 147</span>'+
      '<p>A <b>União</b> institui os tributos <b>estaduais e municipais nos Territórios Federais</b>; o <b>DF</b> institui os <b>municipais</b>.</p>'+
      '<p class="mn"><em>Se o Território for dividido em Municípios, à União restam <b>só os estaduais</b>.</em></p></div>'+
      '<div class="box trap"><span class="bl">Residual — só da União</span>'+
      '<p><b>Impostos residuais</b> (art. 154, I): <b>lei complementar</b> · <b>não cumulativos</b> · <b>fato gerador e base de cálculo diversos</b> dos impostos já discriminados.</p>'+
      '<p><b>Contribuições sociais residuais</b> (art. 195, § 4º): <b>lei complementar</b> · <b>não cumulativas</b> · sem fato gerador ou base própria de <b>outras CONTRIBUIÇÕES</b>.</p>'+
      '<p class="mn"><em>Logo, a contribuição residual <b>PODE</b> ter a mesma base de cálculo de um imposto.</em></p></div>'+
      '<div class="box"><span class="bl">Extraordinária — o IEG</span>'+
      '<p>Só na <b>iminência ou no caso de GUERRA EXTERNA</b> — nunca guerra civil. Por <b>lei ordinária</b> (ou MP). Pode ter o mesmo fato gerador de imposto da União, dos Estados ou dos Municípios, e será <b>suprimido gradativamente</b> cessadas as causas.</p>'+
      '<p class="mn"><em><b>IEG → lei ordinária</b> · <b>IGF → lei complementar</b>. Não troque.</em></p></div>')
  ],
  V2:[
    sl("Bis in idem, bitributação e o mapa dos impostos",
      '<div class="box trap"><span class="bl">Duas palavras parecidas, dois resultados opostos</span>'+
      '<p><b>BIS IN IDEM:</b> <b>1 ente</b> + 2 tributos sobre o mesmo fato gerador = <b>PERMITIDO</b>. Ex.: <b>IRPJ e CSLL</b> sobre o lucro, ambos federais.</p>'+
      '<p><b>BITRIBUTAÇÃO:</b> <b>2 entes</b> tributando o mesmo fato gerador = <b>PROIBIDO</b>, por invasão de competência. <b>Exceção: o IEG.</b></p></div>'+
      '<div class="box"><span class="bl">Quantas espécies de tributo?</span>'+
      '<p><b>CTN, art. 5º — TRÊS</b> (tripartida): impostos, taxas, contribuições de melhoria.<br>'+
      '<b>STF — CINCO</b> (pentapartida): as três + <b>empréstimos compulsórios</b> + <b>contribuições especiais</b>.</p>'+
      '<p><b>Imposto (art. 16):</b> fato gerador é situação <b>independente de qualquer atividade estatal específica</b> — tributo <b>não vinculado</b>; quem age é o contribuinte, manifestando riqueza.</p></div>'+
      '<div class="box tip"><span class="bl">Os quinze impostos</span>'+
      '<p><b>UNIÃO (9):</b> II · IE · IR · IPI · IOF · ITR · IGF · IEG · residuais.<br>'+
      '<b>ESTADOS e DF (3):</b> ITCMD · IPVA · ICMS.<br>'+
      '<b>MUNICÍPIOS e DF (3):</b> IPTU · ISS · ITBI.</p>'+
      '<p class="mn"><em>Transmissão inter vivos: <b>não onerosa → ITCMD estadual</b>; <b>onerosa → ITBI municipal</b>.</em></p></div>'),
    sl("Empréstimos compulsórios e contribuições especiais",
      '<div class="box"><span class="bl">Empréstimo compulsório — art. 148</span>'+
      '<p>Empréstimo <b>forçado</b>, com devolução garantida. Competência <b>EXCLUSIVA da União</b>, por <b>LEI COMPLEMENTAR</b>.</p>'+
      '<p><b>I —</b> despesas extraordinárias de <b>calamidade pública, guerra externa ou sua iminência</b> → <b>exceção</b> à anterioridade.<br>'+
      '<b>II —</b> <b>investimento público de caráter urgente e de relevante interesse nacional</b> → <b>observa</b> a anterioridade anual.</p>'+
      '<p>A receita é <b>vinculada à despesa</b> que fundamentou a instituição.</p></div>'+
      '<div class="box"><span class="bl">Contribuições especiais — art. 149</span>'+
      '<p>Identificam-se pela <b>FINALIDADE</b>, não pelo fato gerador, com <b>vinculação da receita</b>. Competência <b>exclusiva da União</b>, por <b>lei ORDINÁRIA</b>:</p>'+
      '<p><b>i)</b> sociais · <b>ii)</b> de <b>intervenção no domínio econômico (CIDE)</b> · <b>iii)</b> de <b>interesse das categorias profissionais ou econômicas</b>.</p></div>'+
      '<div class="box trap"><span class="bl">As duas brechas para os outros entes</span>'+
      '<p><b>1) RPPS (art. 149, § 1º):</b> Estados, DF e Municípios com regime próprio podem instituir contribuição sobre <b>servidores ativos, aposentados e pensionistas</b>.</p>'+
      '<p><b>2) COSIP (art. 149-A):</b> <b>Municípios e DF</b>, para o custeio da iluminação pública.</p>'+
      '<p><b>Fora disso, não.</b> A seguridade social abrange <b>previdência, assistência social e saúde</b> (art. 194) — mas Estado ou Município que institua contribuição para custear <b>SAÚDE</b> dos servidores edita lei <b>inconstitucional</b>. Só a previdência do regime próprio lhes cabe.</p></div>')
  ],
  V3:[
    sl("Lei complementar, iniciativa e discriminação de rendas",
      '<div class="box trap"><span class="bl">Os QUATRO casos de lei complementar</span>'+
      '<p><b>i)</b> empréstimo compulsório · <b>ii)</b> <b>IGF</b> · <b>iii)</b> imposto <b>residual</b> · <b>iv)</b> contribuição <b>social residual</b>.</p>'+
      '<p class="mn"><em>Todo o resto é lei ordinária — inclusive o <b>IEG</b> e as contribuições especiais comuns.</em></p></div>'+
      '<div class="box"><span class="bl">Iniciativa: não há reserva</span>'+
      '<p>A Constituição <b>não prevê</b> reserva de iniciativa para lei tributária. Projeto iniciado por <b>parlamentar</b> pode até <b>revogar integralmente</b> um tributo.</p>'+
      '<p class="mn"><em>Prefeito que veta projeto de vereador alegando vício formal de iniciativa está errado.</em></p></div>'+
      '<div class="box"><span class="bl">O que a lei complementar deve trazer — art. 146, III</span>'+
      '<p><b>a)</b> definição dos <b>fatos geradores, bases de cálculo e contribuintes</b> dos impostos previstos na CF;<br>'+
      '<b>b)</b> normas gerais sobre <b>obrigação, lançamento, crédito, PRESCRIÇÃO e DECADÊNCIA</b>.</p>'+
      '<p>Por isso <b>lei ordinária não amplia prazo decadencial</b> — a norma que esticava para dez anos a decadência de contribuição previdenciária é inválida.</p></div>'+
      '<div class="box tip"><span class="bl">Faltando a lei complementar, o Estado fica parado?</span>'+
      '<p><b>Não.</b> Compete a União, Estados e DF legislar <b>CONCORRENTEMENTE</b> sobre direito tributário (art. 24, I) e, <b>inexistindo lei federal de normas gerais</b>, os Estados exercem <b>competência legislativa PLENA</b> (§ 3º). Podem instituir e cobrar o imposto até que a lei complementar venha.</p></div>'+
      '<div class="box"><span class="bl">Discriminação constitucional de rendas</span>'+
      '<p>Técnica que <b>dota os entes de recursos</b>: <b>atribuição de competência</b> + <b>repartição de receitas</b>. Liga-se à autonomia federativa e, portanto, à <b>cláusula pétrea</b> da forma federativa (art. 60, § 4º).</p>'+
      '<p>Exemplo de repartição: <b>20%</b> do imposto residual pertencem aos <b>Estados e ao DF</b> (art. 157, II).</p></div>'+
      '<div class="box trap"><span class="bl">Reforma tributária — EC 132/2023</span>'+
      '<p>A emenda acrescentou uma figura que não existia no desenho clássico: o <b>IBS</b> (art. 156-A), de <b>competência COMPARTILHADA entre Estados, DF e Municípios</b>, no lugar de ICMS e ISS. Da <b>União</b> são a <b>CBS</b> e o <b>Imposto Seletivo</b>, este no lugar do IPI.</p>'+
      '<p>O resumo de origem é anterior à emenda. As classificações deste módulo continuam válidas, mas confira a redação atual da CF antes de fechar qualquer lista de competências.</p></div>')
  ]
};

var TEC = [
  ["Caderno CEBRASPE — Direito Tributário 03","https://www.tecconcursos.com.br/s/Q1TKAS","Q1TKAS"],
  ["Caderno FCC — Direito Tributário 03","https://www.tecconcursos.com.br/s/Q1rtuF","Q1rtuF"],
  ["Caderno FGV — Direito Tributário 03","https://www.tecconcursos.com.br/s/Q1rtvA","Q1rtvA"],
  ["Caderno VUNESP — Direito Tributário 03","https://www.tecconcursos.com.br/s/Q2glUx","Q2glUx"]
];
var TECNOTA = "Priorize o caderno da FGV — banca do último certame da Receita Federal. Este módulo é quase todo memorização de listas: as seis espécies de competência, os quinze impostos por ente, os quatro tributos de lei complementar e o par bis in idem × bitributação. Vale repetir os flashcards até sair automático, porque a banca cobra por troca de palavra (privativa por comum, ordinária por complementar, imposto por contribuição). ATENÇÃO À DATA: o resumo de origem é anterior à EC 132/2023, que criou o IBS de competência compartilhada, a CBS e o Imposto Seletivo — acrescentei o essencial aqui, mas confira a redação atual da CF antes da prova.";

var UNITS = [
  {n:1, title:"Competência e capacidade tributária ativa", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"As duas aptidões e as seis espécies de competência", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · competência × capacidade", xp:25, data:["S1","S2","S3","T0","T1","T2","T3","T4","T5","T6"]},
    {id:"K3", type:"drill",  title:"Praticar · privativa, comum e cumulativa", xp:25, data:["S4","S5","S6","T7","T8","T9","T10","T11","T12","T13"]},
    {id:"K4", type:"drill",  title:"Praticar · residual e extraordinária", xp:25, data:["S7","S8","S9","S10","T14","T15","T16","T17","T18","T19","T20","T21"]},
    {id:"K5", type:"flash",  title:"Flashcards · competência tributária", xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]}
  ]},
  {n:2, title:"Espécies de tributos e os impostos de cada ente", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Bis in idem, bitributação e o mapa dos impostos", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · bis in idem × bitributação", xp:25, data:["S11","S14","T22","T23","T24","T25","T26","T27"]},
    {id:"K8", type:"drill",  title:"Praticar · quem institui cada imposto", xp:25, data:["S12","S13","T28","T29","T30","T31","T32"]},
    {id:"K9", type:"flash",  title:"Flashcards · espécies e impostos",    xp:15, data:[22,23,24,25,26,27,28,29,30,31]}
  ]},
  {n:3, title:"Empréstimos compulsórios e contribuições", cvar:"u3", lessons:[
    {id:"K10",type:"drill",  title:"Praticar · empréstimos compulsórios", xp:25, data:["S15","S16","T33","T34","T35","T36"]},
    {id:"K11",type:"drill",  title:"Praticar · contribuições especiais",  xp:25, data:["S17","S18","S19","T37","T38","T39","T40","T41","T42","T43"]},
    {id:"K12",type:"flash",  title:"Flashcards · compulsórios e contribuições", xp:15, data:[32,33,34,35,36,37,38,39,40,41,42]}
  ]},
  {n:4, title:"Lei complementar e discriminação de rendas", cvar:"u4", lessons:[
    {id:"K13",type:"teoria", title:"Reserva de lei complementar, iniciativa e repartição", xp:10, data:"V3"},
    {id:"K14",type:"drill",  title:"Praticar · reserva de lei complementar", xp:25, data:["S20","S21","T44","T45","T46","T47","T48"]},
    {id:"K15",type:"drill",  title:"Praticar · competência plena e repartição", xp:25, data:["S22","S23","S24","T49","T50","T51","T52","T53"]},
    {id:"K16",type:"flash",  title:"Flashcards · dispositivos-chave",     xp:15, data:[43,44,45,46,47,48,49,50,51,52,53,54]}
  ]},
  {n:5, title:"Fixação", cvar:"u5", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",             xp:60, data:null},
    {id:"K17", type:"missao", title:"Missão TEC Concursos",               xp:15, data:null},
    {id:"K18", type:"prova",  title:"Simulado cronometrado",              xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 03 de Direito Tributário (Radegondes) ---------- */
var COM={
0:"<p>Esquema do resumo, em cinco palavras: competência tributária <b>é a aptidão para instituir tributos</b>, atribuição dada pela <b>Constituição</b> aos entes políticos.</p><p>No quadro comparativo dele: competência = <b>instituir (criar)</b>; capacidade = <b>arrecadar e fiscalizar</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Competência Tributária</i></p>",
1:"<p><b>CTN, art. 7º</b>, transcrito no resumo: a competência tributária é <b>INDELEGÁVEL</b>, salvo a atribuição das funções de arrecadar ou fiscalizar.</p><p>O quadro é categórico: <b>“ela não pode ser delegada”</b>. Nem por lei complementar.</p><p class='fb-fonte'>Resumo 03 · <i>Competência Tributária — art. 7º</i></p>",
2:"<p>Definição do resumo: a capacidade tributária ativa é a capacidade para <b>arrecadar e fiscalizar</b> tributos <b>ou</b> de <b>executar leis, serviços, atos ou decisões administrativas</b> em matéria tributária, conferida por uma pessoa jurídica de direito público a outra.</p><p class='fb-fonte'>Resumo 03 · <i>Capacidade Tributária Ativa</i></p>",
3:"<p>Caixa <b>ATENÇÃO!</b> do resumo: <b>em regra, a capacidade tributária ativa somente pode ser delegada para pessoas jurídicas de direito público</b> — “contudo, temos uma exceção que já caiu em provas”.</p><p class='fb-fonte'>Resumo 03 · <i>Capacidade Tributária Ativa — Atenção!</i></p>",
4:"<p>A exceção do resumo é a <b>Súmula 396 do STJ</b>: a CNA tem legitimidade ativa para a cobrança da contribuição sindical rural. Ele sublinha: a Confederação <b>é pessoa jurídica de direito privado</b> e ainda assim recebe a delegação.</p><p class='fb-fonte'>Resumo 03 · <i>Capacidade Tributária Ativa — Súmula 396</i></p>",
5:"<p>O art. 7º, §3º, do CTN separa as duas coisas: <b>cometer a pessoa de direito privado o encargo de ARRECADAR</b> (a função de caixa, como os bancos) <b>não constitui delegação de competência</b>.</p><p class='fb-fonte off'>Ponto não desenvolvido no Resumo 03 — ele trata do caput do art. 7º</p>",
6:"<p>É a aplicação direta do art. 7º: a autarquia estadual é <b>pessoa jurídica de direito público</b>, e o que se transfere a ela são <b>arrecadar, fiscalizar e cobrar</b> — capacidade tributária ativa, não competência.</p><p>O Estado continua sendo quem <b>institui</b> a contribuição.</p><p class='fb-fonte'>Resumo 03 · <i>Capacidade Tributária Ativa</i></p>",
7:"<p>Quadro da <b>competência privativa</b> no resumo: <b>UNIÃO</b> = impostos + empréstimos compulsórios + contribuições especiais · <b>ESTADOS</b> = apenas os impostos · <b>MUNICÍPIOS</b> = impostos + COSIP.</p><p class='fb-fonte'>Resumo 03 · <i>Competência Privativa</i></p>",
8:"<p>No quadro do resumo, a <b>COSIP</b> está na linha dos <b>Municípios</b>. Aos <b>Estados</b> a competência privativa alcança <b>apenas os impostos</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Competência Privativa</i></p>",
9:"<p>Do resumo: as <b>taxas</b> e as <b>contribuições de melhoria</b> podem ser instituídas por qualquer ente político, <b>desde que o fato gerador seja uma atividade estatal do ente que a instituiu</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Competência Comum</i></p>",
10:"<p>Frase final do tópico, literal: <b>“perceba que a competência tributária comum diz respeito aos tributos VINCULADOS”</b>.</p><p>Faz sentido: taxa e contribuição de melhoria dependem de uma atividade do Poder Público.</p><p class='fb-fonte'>Resumo 03 · <i>Competência Comum</i></p>",
11:"<p>Do resumo: a <b>competência cumulativa</b> é a que a União possui para instituir <b>os tributos estaduais e municipais nos Territórios Federais</b> — <b>art. 147 da CF</b>. O DF também a tem, quanto aos tributos municipais.</p><p class='fb-fonte'>Resumo 03 · <i>Competência Cumulativa</i></p>",
12:"<p>Caixa <b>ATENÇÃO!</b>: <b>se os territórios federais forem divididos em Municípios, competirá à União apenas os impostos estaduais</b>, já que os Municípios deterão a competência para instituir os seus próprios impostos municipais.</p><p class='fb-fonte'>Resumo 03 · <i>Competência Cumulativa — Atenção!</i></p>",
13:"<p>Do resumo: <b>“além da União, o Distrito Federal também possui a competência tributária cumulativa para instituir os tributos municipais”</b> (art. 147).</p><p>É por isso que o DF acumula os três impostos estaduais e os três municipais.</p><p class='fb-fonte'>Resumo 03 · <i>Competência Cumulativa</i></p>",
14:"<p>O resumo escreve com o reforço entre parênteses: <b>“a União (somente a União) detém a competência para instituir novos impostos e novas contribuições para a seguridade social”</b> — arts. 154, I, e 195, §4º.</p><p class='fb-fonte'>Resumo 03 · <i>Competência Residual</i></p>",
15:"<p>Os <b>três</b> requisitos do art. 154, I, como o resumo os lista: <b>lei complementar</b> · <b>não cumulatividade</b> · <b>fato gerador ou base de cálculo diversos dos demais impostos já discriminados</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Competência Residual</i></p>",
16:"<p>O resumo tem uma <b>OBS</b> só para este ponto: <b>“as contribuições sociais residuais PODEM ter a mesma base de cálculo dos impostos”</b>.</p><p>A vedação do art. 195, §4º, é quanto a fato gerador ou base de cálculo <b>próprio de outras contribuições</b> — não de impostos.</p><p class='fb-fonte'>Resumo 03 · <i>Competência Residual — OBS</i></p>",
17:"<p>Os três requisitos do art. 195, §4º, no resumo: <b>mediante lei complementar</b> · <b>sejam não cumulativas</b> · <b>não tenham fato gerador ou base de cálculo próprio de outras contribuições</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Competência Residual</i></p>",
18:"<p>Do resumo: a instituição do IEG <b>somente se faz possível em situação de guerra externa (ou sua iminência)</b>, “ou seja, <b>não há como instituir o imposto mediante uma guerra interna (guerra civil)</b>”.</p><p class='fb-fonte'>Resumo 03 · <i>Competência Extraordinária</i></p>",
19:"<p>Do resumo: o IEG <b>pode ser instituído por lei ordinária (ou mesmo por medida provisória), pois não foi feita nenhuma reserva à lei complementar</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Competência Extraordinária</i></p>",
20:"<p><b>Art. 154, II</b>, transcrito no resumo: na iminência ou no caso de guerra externa, impostos extraordinários, <b>compreendidos ou não em sua competência tributária</b>, os quais serão <b>suprimidos gradativamente, cessadas as causas de sua criação</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Competência Extraordinária — art. 154, II</i></p>",
21:"<p>Quadro <b>NÃO CONFUNDA</b> do resumo, duas colunas: <b>IEG — lei ordinária</b> · <b>IGF — lei complementar</b>.</p><p>Os dois começam com “I”, os dois são da União, e é exatamente por isso que a banca troca.</p><p class='fb-fonte'>Resumo 03 · <i>Não Confunda IEG × IGF</i></p>",
22:"<p>Do resumo: o <b>bis in idem</b> ocorre quando <b>o mesmo ente federado tributa o mesmo fato gerador duas vezes</b> — e o exemplo dele é o <b>IRPJ e a CSLL</b>, ambos da União.</p><p>O esquema: <b>01 ente político + 02 tributos = permitido</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Bis in idem × Bitributação</i></p>",
23:"<p>Do resumo: a bitributação ocorre quando <b>MAIS DE UM ente federado tributa o mesmo fato gerador</b>, e <b>“em regra, nesse caso, percebe-se que há invasão de competência tributária”</b>.</p><p>Esquema: <b>02 entes + 02 tributos = proibido</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Bis in idem × Bitributação</i></p>",
24:"<p>No próprio esquema do resumo, logo abaixo de “proibido”, vem a linha: <b>EXCEÇÃO: IEG</b>.</p><p>É o art. 154, II, autorizando imposto <b>compreendido ou não</b> na competência da União.</p><p class='fb-fonte'>Resumo 03 · <i>Bis in idem × Bitributação</i></p>",
25:"<p><b>CTN, art. 5º</b>: os tributos são <b>impostos, taxas e contribuições de melhoria</b> — teoria <b>tripartida</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Espécies de Tributos</i></p>",
26:"<p>Do resumo: <b>nos termos do STF, o tributo possui 5 espécies (teoria pentapartida)</b> — as três do CTN mais <b>empréstimos compulsórios</b> e <b>contribuições especiais</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Espécies de Tributos</i></p>",
27:"<p><b>CTN, art. 16</b>, no quadro do resumo: o imposto <b>tem por fato gerador uma situação independente de qualquer atividade estatal</b> — o contribuinte <b>manifesta riqueza</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Impostos</i></p>",
28:"<p>A lista da União no resumo, com nove itens: <b>II · IE · IR · IPI · IOF · ITR · IGF · IEG · impostos residuais</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Impostos</i></p>",
29:"<p>Na lista do resumo, os estaduais são <b>ITCMD, IPVA e ICMS</b>. O <b>ITBI</b> está na lista dos <b>Municípios</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Impostos</i></p>",
30:"<p>Lista municipal do resumo: <b>IPTU · ISS · ITBI</b> — e o DF acumula esses três com os três estaduais, pela competência cumulativa.</p><p class='fb-fonte'>Resumo 03 · <i>Impostos</i></p>",
31:"<p>O resumo abre o ITBI por extenso: transmissão <b>“inter vivos”, a qualquer título, por ato ONEROSO, de bens imóveis</b> — e ele está na lista <b>municipal</b>.</p><p>A transmissão <b>causa mortis ou por doação</b> é o ITCMD, estadual.</p><p class='fb-fonte'>Resumo 03 · <i>Impostos</i></p>",
32:"<p>Caixa <b>ATENÇÃO!</b> do resumo: <b>“somente a União pode criar impostos não especificados pela Constituição Federal (são chamados de impostos residuais)”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Impostos — Atenção!</i></p>",
33:"<p>Do tópico de empréstimos compulsórios: competência <b>EXCLUSIVA da União</b>, instituídos mediante <b>LEI COMPLEMENTAR</b> (CF, art. 148).</p><p class='fb-fonte'>Resumo 03 · <i>Empréstimos Compulsórios</i></p>",
34:"<p>Primeira hipótese do art. 148 no esquema do resumo: despesas extraordinárias decorrentes de <b>calamidade pública, guerra externa ou sua iminência</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Empréstimos Compulsórios</i></p>",
35:"<p>A segunda hipótese, no esquema do resumo, vem com a observação embutida: <b>investimento público de caráter urgente e de relevante interesse nacional — “observado o princípio da Anterioridade Anual”</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Empréstimos Compulsórios</i></p>",
36:"<p>Observação do resumo: <b>a aplicação dos recursos provenientes de empréstimo compulsório será vinculada à despesa que fundamentou sua instituição</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Empréstimos Compulsórios</i></p>",
37:"<p>Do resumo: a contribuição especial <b>foge da teoria do fato gerador</b>; seu critério de identificação <b>baseia-se na finalidade da criação do tributo</b> (art. 149), <b>sendo necessária a vinculação da receita</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Contribuições Especiais</i></p>",
38:"<p>Esquema do art. 149: compete <b>exclusivamente à União</b> instituir contribuições <b>sociais</b>, de <b>intervenção no domínio econômico (CIDE)</b> e de <b>interesse das categorias profissionais ou econômicas</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Contribuições Especiais</i></p>",
39:"<p>Observação 1 do resumo: a contribuição especial <b>é criada por meio de lei ordinária</b>. A lei complementar só aparece nas <b>contribuições residuais</b> do art. 195, §4º.</p><p class='fb-fonte'>Resumo 03 · <i>Contribuições Especiais</i></p>",
40:"<p>Observação 1, na exceção: os entes que <b>adotem regime de previdência própria</b> podem criar a contribuição para cobrar dos <b>servidores ativos, aposentados e pensionistas</b> — a “contribuição para custeio de regime próprio de previdência social”.</p><p class='fb-fonte'>Resumo 03 · <i>Contribuições Especiais</i></p>",
41:"<p>A exceção do resumo é específica: o que os demais entes podem instituir é a contribuição <b>previdenciária</b> dos seus servidores, para custear o <b>RPPS</b>. <b>Saúde e assistência</b> não estão nessa abertura — as contribuições sociais dessas áreas seguem <b>exclusivas da União</b> (art. 149).</p><p class='fb-fonte'>Resumo 03 · <i>Contribuições Especiais</i></p>",
42:"<p>Observação 2 do resumo: <b>os Municípios e o DF poderão instituir contribuição, na forma das respectivas leis, para o custeio do serviço de iluminação pública (COSIP)</b> — CF, art. 149-A.</p><p>No quadro de competência privativa ela aparece na linha dos Municípios.</p><p class='fb-fonte'>Resumo 03 · <i>Contribuições Especiais</i></p>",
43:"<p>A nota de rodapé do quadro do resumo trata a contribuição previdenciária como <b>uma espécie de contribuição social</b> — e a seguridade social é o gênero que reúne <b>previdência, assistência social e saúde</b>.</p><p class='fb-fonte'>Resumo 03 · <i>Contribuições Especiais</i></p>",
44:"<p>Os quatro estão espalhados pelo resumo: <b>empréstimo compulsório</b> (art. 148) · <b>IGF</b> (quadro Não Confunda) · <b>imposto residual</b> (art. 154, I) · <b>contribuição social residual</b> (art. 195, §4º).</p><p>Vale reunir numa lista só — é assim que a banca cobra.</p><p class='fb-fonte'>Resumo 03 · <i>vários tópicos</i></p>",
45:"<p>Não existe reserva de iniciativa do Executivo para lei tributária. O art. 61, §1º, da CF lista as matérias reservadas, e tributo não está lá — salvo a exceção específica dos Territórios.</p><p class='fb-fonte off'>Não consta do Resumo 03 — confira no seu material de Direito Constitucional</p>",
46:"<p>Mesma razão do item anterior: sem reserva de iniciativa, o projeto de vereador que <b>revoga</b> uma taxa é formalmente válido.</p><p class='fb-fonte off'>Não consta do Resumo 03 — confira no seu material de Direito Constitucional</p>",
47:"<p>É o art. 146, III, “b”, da CF: cabe à <b>lei complementar</b> estabelecer normas gerais sobre <b>obrigação, lançamento, crédito, prescrição e decadência</b> tributários. Por isso o CTN, recebido como lei complementar, é quem fixa esses prazos.</p><p class='fb-fonte off'>Não consta do Resumo 03 — o tema aparece no Resumo 05 (Legislação Tributária)</p>",
48:"<p>Consequência direta do item anterior: prazo decadencial é <b>norma geral</b>, reservada à lei complementar. Lei ordinária federal não pode ampliá-lo.</p><p class='fb-fonte off'>Não consta do Resumo 03</p>",
49:"<p>Pode instituir. O art. 24, §3º, da CF garante aos Estados <b>competência legislativa plena</b> enquanto não houver lei federal de normas gerais.</p><p class='fb-fonte off'>Não consta do Resumo 03 — confira no seu material de Direito Constitucional</p>",
50:"<p>Art. 24, I, da CF: legislar sobre direito tributário é competência <b>concorrente</b> da União, dos Estados e do DF. Não confunda com a competência <b>tributária</b> (instituir o tributo), que é o assunto deste módulo.</p><p class='fb-fonte off'>Não consta do Resumo 03 — confira no seu material de Direito Constitucional</p>",
51:"<p>“Discriminação constitucional de rendas” é o nome doutrinário do conjunto formado por <b>atribuição de competência</b> (este módulo) e <b>repartição de receitas</b> (o módulo 04).</p><p class='fb-fonte off'>Não consta do Resumo 03</p>",
52:"<p>É repartição de receitas, assunto do <b>Resumo 04</b>: aos Estados e ao DF pertencem <b>20%</b> do produto da arrecadação do <b>imposto residual</b> que a União instituir (art. 157, II).</p><p class='fb-fonte'>Resumo 04 · <i>Repartição das Receitas Tributárias</i></p>",
53:"<p>A <b>EC 132/2023</b> criou o <b>IBS</b> com competência <b>compartilhada</b> entre Estados, DF e Municípios (art. 156-A) — é o único imposto assim na Constituição. Da União são a <b>CBS</b> (art. 195, V) e o <b>Imposto Seletivo</b> (art. 153, VIII).</p><p class='fb-fonte off'>Não consta do Resumo 03 — o resumo é anterior à reforma tributária</p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"03", nome:"Competência tributária e espécies de tributos", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
