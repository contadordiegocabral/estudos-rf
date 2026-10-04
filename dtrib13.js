/* Direito Tributário — Módulo 13: Administração tributária — fiscalização (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dtrib13 = (function(){
"use strict";

var CARDS = [
  ["Que parte do CTN trata da administração tributária?","O <b>Título IV</b>, em três capítulos: <b>fiscalização</b> (arts. 194 a 200) · <b>dívida ativa</b> (201 a 204) · <b>certidões negativas</b> (205 a 208)."],
  ["O que diz o art. 37, XXII, da CF sobre as administrações tributárias?","São <b>atividades ESSENCIAIS ao funcionamento do Estado</b>, exercidas por <b>servidores de carreiras específicas</b>, terão <b>recursos prioritários</b> e atuarão de <b>forma integrada</b>, inclusive com <b>compartilhamento de cadastros e informações fiscais</b>, na forma da lei ou convênio."],
  ["O que regula o art. 194 do CTN?","A <b>legislação tributária</b> regulará, <b>em caráter geral</b> ou <b>especificamente em função da natureza do tributo</b>, a <b>competência e os poderes</b> das autoridades em matéria de fiscalização."],
  ["A quem se aplica a legislação de fiscalização? (art. 194, p.ú.)","A <b>pessoas naturais ou jurídicas, CONTRIBUINTES OU NÃO</b> — <b>inclusive às que gozem de IMUNIDADE ou de ISENÇÃO de caráter pessoal</b>."],
  ["Imune e isento podem ser fiscalizados?","<b>SIM.</b> A fiscalização alcança quem não deve tributo algum — é como o Fisco confirma que a imunidade ou isenção realmente se aplica."],
  ["O que diz o art. 195 do CTN?","<b>Não têm aplicação quaisquer disposições legais EXCLUDENTES ou LIMITATIVAS</b> do direito de examinar <b>mercadorias, livros, arquivos, documentos, papéis e efeitos comerciais ou fiscais</b> de comerciantes, industriais ou produtores — nem da <b>obrigação destes de exibi-los</b>."],
  ["O que diz a Súmula 439 do STF?","“Estão sujeitos à fiscalização tributária ou previdenciária <b>quaisquer livros comerciais</b>, <b>LIMITADO O EXAME AOS PONTOS OBJETO DA INVESTIGAÇÃO</b>.”"],
  ["Como conciliar o art. 195 com a Súmula 439?","O Fisco pode examinar <b>qualquer livro</b>, sem que lei alguma o impeça — <b>mas o exame se limita aos pontos objeto da investigação</b>. Amplitude de acesso, não devassa geral."],
  ["Até quando se conservam os livros obrigatórios? (art. 195, p.ú.)","Até que ocorra a <b>PRESCRIÇÃO dos créditos tributários</b> decorrentes das operações a que se refiram — os livros e <b>os comprovantes dos lançamentos</b> neles efetuados."],
  ["Qual a equiparação penal dos livros mercantis?","O <b>art. 297, § 2º, do Código Penal</b> equipara os <b>livros de escrituração comercial e fiscal a DOCUMENTO PÚBLICO</b> — falsificá-los é falsidade documental qualificada."],
  ["Quando o Fisco pode examinar documentos de INSTITUIÇÕES FINANCEIRAS?","Só quando houver <b>processo administrativo instaurado ou procedimento fiscal em curso</b> <b>E</b> os exames sejam considerados <b>INDISPENSÁVEIS</b> pela autoridade competente (LC 105/2001, art. 6º)."],
  ["Os dois requisitos da LC 105 são alternativos?","<b>NÃO — são CUMULATIVOS.</b> Exige-se o processo ou procedimento <b>e</b> a indispensabilidade do exame."],

  ["O que é o Termo de Início de Fiscalização? (art. 196)","O termo que a autoridade <b>lavra para documentar o INÍCIO do procedimento</b> de fiscalização, na forma da legislação aplicável, que <b>fixará prazo máximo para a conclusão das diligências</b>."],
  ["Quais os TRÊS efeitos do TIF?","<b>1)</b> determina a <b>data inicial</b> do prazo máximo para concluir as diligências; <b>2)</b> <b>antecipa a contagem do prazo DECADENCIAL</b>, se lavrado antes do 1º dia do exercício seguinte; <b>3)</b> <b>AFASTA A ESPONTANEIDADE</b> do sujeito passivo."],
  ["Por que o TIF afasta a espontaneidade?","Porque o art. 138, parágrafo único, diz que <b>não é espontânea</b> a denúncia apresentada <b>após o início de procedimento administrativo ou medida de fiscalização</b>. Com o TIF, acabou a janela da denúncia espontânea."],
  ["Como o TIF antecipa a decadência?","Pelo <b>art. 173, parágrafo único</b>: o prazo conta-se da data em que <b>iniciada a constituição do crédito</b> pela <b>notificação de medida preparatória indispensável ao lançamento</b>."],
  ["Onde o TIF deve ser lavrado? (art. 196, p.ú.)","<b>Sempre que possível, em um dos LIVROS FISCAIS exibidos</b>. Quando lavrado em separado, entrega-se ao fiscalizado <b>cópia autenticada</b> pela autoridade."],

  ["Quem é obrigado a prestar informações ao Fisco? (art. 197)","<b>I)</b> <b>tabeliães, escrivães e demais serventuários de ofício</b>; <b>II)</b> <b>bancos, casas bancárias, Caixas Econômicas e demais instituições financeiras</b>; <b>III)</b> <b>empresas de administração de bens</b>; <b>IV)</b> <b>corretores, leiloeiros e despachantes oficiais</b>; <b>V)</b> <b>inventariantes</b>; <b>VI)</b> <b>síndicos, comissários e liquidatários</b>; <b>VII)</b> <b>quaisquer outras entidades ou pessoas que a lei designe</b>."],
  ["Como se requisitam essas informações?","<b>MEDIANTE INTIMAÇÃO ESCRITA</b>, e apenas quanto a <b>bens, negócios ou atividades de TERCEIROS</b>."],
  ["A lista do art. 197 é taxativa?","<b>NÃO</b> — o <b>inciso VII</b> abre o rol: <b>lei ordinária pode estendê-la</b>."],
  ["Qual o limite do art. 197? (parágrafo único)","A obrigação <b>não abrange</b> informações sobre fatos quanto aos quais o informante esteja <b>legalmente obrigado a observar SEGREDO</b> em razão de <b>cargo, ofício, função, ministério, atividade ou profissão</b> — padres, psicólogos, advogados."],

  ["Qual o dever de sigilo da Fazenda? (art. 198)","É <b>vedada a DIVULGAÇÃO</b>, pela Fazenda ou por seus servidores, de <b>informação obtida em razão do ofício</b> sobre a <b>situação econômica ou financeira</b> do sujeito passivo ou de terceiros e sobre a <b>natureza e o estado de seus negócios ou atividades</b> — sem prejuízo da legislação criminal."],
  ["Exemplo de violação do dever de sigilo","A Secretaria de Fazenda publicar, em informativo oficial, a <b>fórmula e a matéria-prima</b> dos refrigerantes de empresa que fiscalizou."],
  ["Quais as duas exceções do art. 198, § 1º?","<b>I)</b> <b>requisição de autoridade JUDICIÁRIA no interesse da justiça</b>; <b>II)</b> <b>solicitações de autoridade ADMINISTRATIVA no interesse da Administração Pública</b>, desde que <b>comprovada a instauração regular de processo administrativo</b> no órgão respectivo, para <b>investigar o sujeito passivo por infração administrativa</b>."],
  ["Qual exceção é mais exigente: a judicial ou a administrativa?","A <b>ADMINISTRATIVA</b> — exige <b>processo regularmente instaurado</b> com o objetivo de investigar aquele sujeito passivo. A judicial basta a <b>requisição no interesse da justiça</b>."],
  ["Como se faz o intercâmbio de informação sigilosa? (art. 198, § 2º)","<b>Mediante processo regularmente instaurado</b>, com <b>entrega PESSOAL à autoridade solicitante</b>, <b>mediante RECIBO</b> que formalize a transferência e assegure a preservação do sigilo."],
  ["O que NÃO é vedado divulgar? (art. 198, § 3º)","<b>RE-PAR-IN²:</b> <b>RE</b>presentações fiscais para fins penais · <b>PAR</b>celamento ou moratória · <b>IN</b>scrições na dívida ativa · <b>IN</b>centivo, renúncia, benefício ou imunidade de natureza tributária <b>cujo beneficiário seja pessoa jurídica</b>."],
  ["Qual o detalhe do último item do RE-PAR-IN²?","A divulgação de incentivo, renúncia, benefício ou imunidade só é liberada quando o <b>beneficiário for PESSOA JURÍDICA</b> — item incluído pela <b>LC 187/2021</b>."],
  ["Quando se formula a representação fiscal para fins penais?","Só a partir do <b>crédito tributário DEFINITIVAMENTE CONSTITUÍDO</b> — depois da decisão final na esfera administrativa sobre a exigência fiscal."],
  ["O que diz a Súmula Vinculante 24 do STF?","“<b>Não se tipifica crime material contra a ordem tributária</b>, previsto no art. 1º, I a IV, da Lei 8.137/90, <b>antes do LANÇAMENTO DEFINITIVO do tributo</b>.”"],
  ["RFFP publicada no sítio da Receita viola sigilo?","<b>NÃO</b> — <b>representações fiscais para fins penais</b> estão no rol do art. 198, § 3º. Nome, CPF e tipificação podem ser divulgados, desde que o crédito esteja <b>definitivamente constituído</b>."],

  ["O que prevê o art. 199?","As Fazendas da <b>União, Estados, DF e Municípios</b> prestar-se-ão <b>mutuamente ASSISTÊNCIA</b> para a fiscalização e <b>PERMUTA de informações</b>, na forma estabelecida, em caráter geral ou específico, <b>por LEI ou CONVÊNIO</b>."],
  ["O compartilhamento entre entes é autoaplicável?","<b>NÃO</b> — depende de <b>lei ou convênio</b>. É <b>norma de eficácia LIMITADA</b>."],
  ["E a permuta com Estados estrangeiros? (art. 199, p.ú.)","A <b>Fazenda da UNIÃO</b> poderá permutar informações com Estados estrangeiros, na forma de <b>tratados, acordos ou convênios</b>, no interesse da arrecadação e da fiscalização."],
  ["Quem pode permutar informações com o exterior?","<b>Somente a União</b> — Estados e Municípios não têm essa prerrogativa."],

  ["O que permite o art. 200?","As autoridades administrativas <b>REQUISITARÃO</b> o <b>auxílio da força pública federal, estadual ou municipal, e reciprocamente</b>, quando <b>vítimas de embaraço ou desacato</b> no exercício das funções, ou quando <b>necessário à efetivação de medida prevista na legislação tributária</b>."],
  ["Precisa haver crime para requisitar a força pública?","<b>NÃO</b> — <b>ainda que não se configure fato definido em lei como crime ou contravenção</b>."],
  ["Requisitar ou solicitar?","<b>REQUISITAR</b> — é ordem, não pedido. A autoridade fiscal não depende da concordância da autoridade policial."],
  ["Qual o limite do art. 200?","As <b>garantias individuais</b>, sobretudo a <b>INVIOLABILIDADE DE DOMICÍLIO</b> (art. 5º, XI, da CF). O acesso ao estabelecimento do contribuinte <b>nem sempre é possível</b> sem ordem judicial."],
  ["Reforma tributária: muda algo aqui?","A <b>EC 132/2023 não alterou os arts. 194 a 200</b> do CTN. Mas ela reforça a <b>atuação integrada</b> das administrações tributárias, o que conversa diretamente com os arts. 37, XXII, da CF e 199 do CTN."]
];

var QS = [
  ["As administrações tributárias são atividades essenciais ao funcionamento do Estado, exercidas por servidores de carreiras específicas.","C","CF art. 37 XXII","E terão recursos prioritários para suas atividades."],
  ["A legislação sobre fiscalização aplica-se apenas aos contribuintes.","E","CTN art. 194 p.ú.","Aplica-se a pessoas <b>contribuintes ou não</b>, inclusive imunes e isentas."],
  ["A legislação de fiscalização aplica-se às pessoas que gozem de imunidade tributária ou de isenção de caráter pessoal.","C","CTN art. 194 p.ú.","Imune também é fiscalizado."],
  ["A legislação tributária pode regular a competência e os poderes de fiscalização em caráter geral ou especificamente em função da natureza do tributo.","C","CTN art. 194","Cada ente complementa o CTN por lei ordinária."],
  ["Disposições legais que limitem o direito de examinar livros e documentos dos comerciantes têm aplicação para os efeitos da legislação tributária.","E","CTN art. 195","<b>Não têm aplicação</b> — o dispositivo afasta qualquer limitação legal."],
  ["Estão sujeitos à fiscalização tributária quaisquer livros comerciais, limitado o exame aos pontos objeto da investigação.","C","STF Súmula 439","Acesso amplo, exame delimitado."],
  ["A fiscalização tributária pode examinar livros comerciais sem qualquer limitação de objeto.","E","STF Súmula 439","O exame é limitado aos pontos objeto da investigação."],
  ["Os livros obrigatórios de escrituração comercial e fiscal serão conservados até que ocorra a decadência dos créditos tributários das operações a que se refiram.","E","CTN art. 195 p.ú.","Até a <b>prescrição</b>, não a decadência."],
  ["Os livros de escrituração comercial e fiscal são equiparados a documento público para fins penais.","C","CP art. 297 § 2º","Ponto cobrado com frequência em provas fiscais."],
  ["As autoridades fiscais podem examinar documentos e registros de instituições financeiras sempre que julgarem conveniente.","E","LC 105/2001 art. 6º","Exige processo administrativo instaurado ou procedimento fiscal em curso <b>e</b> exames indispensáveis."],
  ["O exame de documentos de instituições financeiras pelas autoridades fiscais exige processo administrativo instaurado ou procedimento fiscal em curso e que os exames sejam indispensáveis.","C","LC 105/2001 art. 6º","Requisitos cumulativos."],
  ["A autoridade que proceder ou presidir diligências de fiscalização lavrará os termos necessários para documentar o início do procedimento.","C","CTN art. 196","É o Termo de Início de Fiscalização."],
  ["A legislação aplicável fixará prazo máximo para a conclusão das diligências de fiscalização.","C","CTN art. 196","Efeito direto da lavratura do termo."],
  ["O Termo de Início de Fiscalização afasta a espontaneidade do sujeito passivo.","C","CTN art. 138 p.ú.","Iniciado o procedimento, não cabe mais denúncia espontânea."],
  ["Os termos de início de fiscalização serão lavrados, sempre que possível, em um dos livros fiscais exibidos.","C","CTN art. 196 p.ú.","Lavrados em separado, entrega-se cópia autenticada ao fiscalizado."],
  ["São obrigados a prestar informações ao Fisco, mediante intimação escrita, os tabeliães, os bancos, os inventariantes e os síndicos.","C","CTN art. 197","Entre outros do rol."],
  ["A obrigação de prestar informações do art. 197 independe de intimação escrita.","E","CTN art. 197","O caput exige intimação escrita."],
  ["O rol de pessoas obrigadas a prestar informações previsto no art. 197 do CTN é taxativo.","E","CTN art. 197 VII","O inciso VII permite que a lei designe outras pessoas."],
  ["A obrigação de prestar informações não abrange fatos sobre os quais o informante esteja legalmente obrigado a observar segredo em razão de cargo, ofício, função, ministério, atividade ou profissão.","C","CTN art. 197 p.ú.","Protege o sigilo profissional."],
  ["É vedada a divulgação, pela Fazenda Pública ou seus servidores, de informação obtida em razão do ofício sobre a situação econômica ou financeira do sujeito passivo.","C","CTN art. 198","Sem prejuízo do disposto na legislação criminal."],
  ["Constitui violação do dever de sigilo a divulgação, em informativo oficial da Secretaria de Fazenda, da fórmula de fabricação de produto de empresa fiscalizada.","C","FGV","Informação sobre a natureza dos negócios obtida em razão do ofício."],
  ["A requisição de autoridade judiciária no interesse da justiça é exceção ao dever de sigilo fiscal.","C","CTN art. 198 § 1º I","Primeira das duas exceções do parágrafo."],
  ["A solicitação de autoridade administrativa dispensa a comprovação da instauração regular de processo administrativo.","E","CTN art. 198 § 1º II","Exige-se processo regularmente instaurado para investigar o sujeito passivo."],
  ["O intercâmbio de informação sigilosa no âmbito da Administração Pública será realizado mediante processo regularmente instaurado, com entrega pessoal à autoridade solicitante, mediante recibo.","C","CTN art. 198 § 2º","Formaliza a transferência e assegura o sigilo."],
  ["Não é vedada a divulgação de informações relativas a representações fiscais para fins penais, inscrições na dívida ativa e parcelamento ou moratória.","C","CTN art. 198 § 3º","Mnemônico RE-PAR-IN²."],
  ["É vedada a divulgação de informações relativas a incentivo, renúncia, benefício ou imunidade tributária cujo beneficiário seja pessoa jurídica.","E","CTN art. 198 § 3º IV","Não é vedada — item incluído pela LC 187/2021."],
  ["A representação fiscal para fins penais pode ser encaminhada ao Ministério Público antes da constituição definitiva do crédito tributário.","E","STF SV 24","Só após a decisão final na esfera administrativa."],
  ["Não se tipifica crime material contra a ordem tributária antes do lançamento definitivo do tributo.","C","STF Súmula Vinculante 24","Vincula toda a administração e o Judiciário."],
  ["A publicação, no sítio eletrônico da Receita Federal, de informações sumárias sobre representação fiscal para fins penais viola o sigilo fiscal.","E","CTN art. 198 § 3º I","A divulgação de RFFP não é vedada."],
  ["As Fazendas Públicas prestar-se-ão mutuamente assistência para a fiscalização dos tributos respectivos e permuta de informações, na forma estabelecida por lei ou convênio.","C","CTN art. 199","Não é norma autoaplicável."],
  ["O compartilhamento de informações fiscais entre os entes federativos é autoaplicável, independendo de lei ou convênio.","E","CTN art. 199","Trata-se de norma de eficácia limitada."],
  ["A Fazenda Pública da União poderá permutar informações com Estados estrangeiros na forma estabelecida em tratados, acordos ou convênios.","C","CTN art. 199 p.ú.","Prerrogativa exclusiva da União."],
  ["Estados e Municípios podem permutar informações fiscais diretamente com Estados estrangeiros.","E","CTN art. 199 p.ú.","O parágrafo único menciona apenas a União."],
  ["As autoridades administrativas poderão requisitar o auxílio da força pública quando vítimas de embaraço ou desacato no exercício de suas funções.","C","CTN art. 200","Ou quando necessário à efetivação de medida prevista na legislação tributária."],
  ["A requisição de auxílio da força pública depende da configuração de fato definido em lei como crime ou contravenção.","E","CTN art. 200","Cabe ainda que não se configure crime ou contravenção."],
  ["A autoridade administrativa apenas solicita, não podendo requisitar, o auxílio da força pública.","E","CTN art. 200","O verbo legal é <b>requisitar</b> — ordem, não pedido."],
  ["O poder de requisitar auxílio da força pública deve ser interpretado em harmonia com as garantias individuais, como a inviolabilidade de domicílio.","C","CF art. 5º XI","O acesso ao estabelecimento nem sempre é possível sem ordem judicial."],
  ["O Termo de Início de Fiscalização pode antecipar a contagem do prazo decadencial.","C","CTN art. 173 p.ú.","Se lavrado antes do primeiro dia do exercício seguinte."],
  ["A obrigação de prestar informações prevista no art. 197 alcança informações sobre bens, negócios ou atividades de terceiros.","C","CTN art. 197","Não sobre os próprios negócios do informante."],
  ["O título do CTN sobre administração tributária divide-se em fiscalização, dívida ativa e certidões negativas.","C","CTN Título IV","Arts. 194 a 208."]
];

var EX = {
S1:{t:"multi", instr:"Marque o que a CF diz sobre as administrações tributárias (art. 37, XXII)",
  options:["São atividades essenciais ao funcionamento do Estado",
           "Exercidas por servidores de carreiras específicas",
           "Terão recursos prioritários para suas atividades",
           "Atuarão de forma integrada, com compartilhamento de cadastros",
           "Terão autonomia financeira plena"],
  answers:[0,1,2,3],
  why:"A integração depende de lei ou convênio, como reforça o art. 199 do CTN."},

S2:{t:"mc", instr:"A legislação sobre fiscalização aplica-se a quem?",
  options:["A pessoas contribuintes ou não, inclusive imunes e isentas",
           "Somente aos contribuintes do tributo fiscalizado",
           "Somente às pessoas jurídicas",
           "A todos, exceto os imunes"],
  answer:0,
  why:"Art. 194, p.ú. — fiscalizar o imune é como o Fisco confirma a imunidade."},

S3:{t:"mc", instr:"Como conciliar o art. 195 do CTN com a Súmula 439 do STF?",
  options:["Acesso amplo a quaisquer livros, com exame limitado aos pontos investigados",
           "Acesso restrito aos livros fiscais obrigatórios",
           "Acesso amplo e exame ilimitado",
           "Acesso apenas mediante autorização judicial"],
  answer:0,
  why:"Nenhuma lei pode limitar o acesso; o objeto do exame é que se delimita."},

S4:{t:"gap", instr:"Complete o art. 195, parágrafo único",
  before:"Os livros obrigatórios de escrituração e os comprovantes dos lançamentos serão conservados até que ocorra a ",
  after:" dos créditos tributários decorrentes das operações a que se refiram.",
  options:["prescrição","decadência","homologação"], answer:0,
  why:"Trocar por decadência é a pegadinha do dispositivo."},

S5:{t:"multi", instr:"Marque os requisitos para exame de documentos de INSTITUIÇÕES FINANCEIRAS",
  options:["Processo administrativo instaurado ou procedimento fiscal em curso",
           "Exames considerados indispensáveis pela autoridade competente",
           "Autorização judicial prévia",
           "Anuência do correntista"],
  answers:[0,1],
  why:"LC 105/2001, art. 6º — os dois requisitos são cumulativos."},

S6:{t:"multi", instr:"Marque os TRÊS efeitos do Termo de Início de Fiscalização",
  options:["Determina a data inicial do prazo para concluir as diligências",
           "Antecipa a contagem do prazo decadencial",
           "Afasta a espontaneidade do sujeito passivo",
           "Suspende a exigibilidade do crédito tributário"],
  answers:[0,1,2],
  why:"Suspensão da exigibilidade é matéria do art. 151 — nada a ver com o TIF."},

S7:{t:"mc", instr:"Por que o TIF afasta a denúncia espontânea?",
  options:["Porque o art. 138, p.ú., exclui a espontaneidade após iniciado o procedimento",
           "Porque constitui definitivamente o crédito",
           "Porque interrompe a prescrição",
           "Porque converte a obrigação acessória em principal"],
  answer:0,
  why:"Com o TIF, fecha-se a janela da denúncia espontânea."},

S8:{t:"multi", instr:"Marque quem é obrigado a prestar informações ao Fisco (art. 197)",
  options:["Tabeliães, escrivães e demais serventuários de ofício",
           "Bancos e demais instituições financeiras",
           "Empresas de administração de bens",
           "Corretores, leiloeiros e despachantes oficiais",
           "Inventariantes, síndicos, comissários e liquidatários",
           "Advogados, quanto a fatos cobertos por sigilo profissional"],
  answers:[0,1,2,3,4],
  why:"O parágrafo único ressalva o sigilo legal de cargo, ofício, ministério ou profissão."},

S9:{t:"mc", instr:"O rol de obrigados a prestar informações do art. 197 é:",
  options:["Exemplificativo — o inciso VII permite que a lei designe outras pessoas",
           "Taxativo e imutável","Taxativo, salvo convênio entre entes",
           "Definido por decreto do Executivo"],
  answer:0,
  why:"Lei ordinária pode estender a lista."},

S10:{t:"gap", instr:"Complete o limite do art. 197",
  before:"A obrigação de prestar informações não abrange fatos sobre os quais o informante esteja legalmente obrigado a observar ",
  after:" em razão de cargo, ofício, função, ministério, atividade ou profissão.",
  options:["segredo","registro","publicidade"], answer:0,
  why:"Padres, psicólogos e advogados estão protegidos."},

S11:{t:"mc", instr:"O que o art. 198 veda à Fazenda e a seus servidores?",
  options:["Divulgar informação obtida em razão do ofício sobre a situação econômica do sujeito passivo",
           "Exigir livros e documentos do contribuinte",
           "Requisitar auxílio da força pública",
           "Permutar informações com outros entes"],
  answer:0,
  why:"Alcança também a natureza e o estado dos negócios ou atividades."},

S12:{t:"sort", instr:"Requisição judicial ou solicitação administrativa?",
  buckets:["Basta a requisição no interesse da justiça","Exige processo administrativo instaurado"],
  items:[["Autoridade judiciária",0],["Autoridade administrativa",1]],
  why:"A via administrativa é mais exigente — art. 198, § 1º, II."},

S13:{t:"mc", instr:"Como se faz o intercâmbio de informação sigilosa na Administração Pública?",
  options:["Por processo regularmente instaurado, com entrega pessoal mediante recibo",
           "Por ofício eletrônico, sem formalidades",
           "Por publicação em diário oficial",
           "Mediante convênio genérico entre os órgãos"],
  answer:0,
  why:"O recibo formaliza a transferência e assegura a preservação do sigilo."},

S14:{t:"wordbank", instr:"Monte o mnemônico do art. 198, § 3º",
  target:["REpresentações","fiscais","para","fins","penais","PARcelamento","INscrições","na","dívida","ativa","INcentivo","fiscal"],
  extra:["situação econômica do contribuinte","fórmula de fabricação","movimentação bancária"],
  why:"RE-PAR-IN² — o que NÃO é vedado divulgar."},

S15:{t:"sort", instr:"Pode ou não pode divulgar?",
  buckets:["PODE divulgar (art. 198, § 3º)","NÃO pode divulgar"],
  items:[["Representações fiscais para fins penais",0],["Parcelamento ou moratória",0],
         ["Inscrições na dívida ativa",0],
         ["Incentivo ou imunidade de beneficiário pessoa jurídica",0],
         ["Situação financeira do sujeito passivo",1],
         ["Natureza e estado dos negócios do contribuinte",1]],
  why:"O rol do § 3º é exceção; fora dele vale a vedação do caput."},

S16:{t:"mc", instr:"Quando pode ser formulada a representação fiscal para fins penais?",
  options:["Somente após o crédito tributário definitivamente constituído",
           "Logo após a lavratura do auto de infração",
           "A qualquer tempo, a critério da autoridade",
           "Somente após a inscrição em dívida ativa"],
  answer:0,
  why:"Súmula Vinculante 24 do STF — sem lançamento definitivo não há crime material."},

S17:{t:"gap", instr:"Complete a Súmula Vinculante 24 do STF",
  before:"Não se tipifica crime material contra a ordem tributária, previsto no art. 1º, I a IV, da Lei 8.137/90, antes do ",
  after:".",
  options:["lançamento definitivo do tributo","início da fiscalização","ajuizamento da execução fiscal"], answer:0,
  why:"Por isso a RFFP só sobe ao MP depois da decisão administrativa final."},

S18:{t:"mc", instr:"O compartilhamento de informações entre as Fazendas (art. 199) é:",
  options:["Norma de eficácia limitada — depende de lei ou convênio",
           "Autoaplicável, independentemente de qualquer ato",
           "Vedado entre entes de esferas diferentes",
           "Restrito à União e aos Estados"],
  answer:0,
  why:"O art. 37, XXII, da CF também condiciona a integração à lei ou convênio."},

S19:{t:"mc", instr:"Quem pode permutar informações fiscais com Estados estrangeiros?",
  options:["Somente a União, por tratados, acordos ou convênios",
           "Qualquer ente federativo","Somente Estados fronteiriços",
           "Municípios, mediante autorização do Senado"],
  answer:0,
  why:"Art. 199, parágrafo único."},

S20:{t:"multi", instr:"Marque o que é correto sobre o auxílio da força pública (art. 200)",
  options:["A autoridade REQUISITA, não apenas solicita",
           "Cabe quando há embaraço ou desacato no exercício das funções",
           "Cabe quando necessário à efetivação de medida da legislação tributária",
           "Cabe ainda que não se configure crime ou contravenção",
           "Autoriza o ingresso em domicílio independentemente de ordem judicial"],
  answers:[0,1,2,3],
  why:"A inviolabilidade de domicílio (art. 5º, XI, da CF) é o limite constitucional."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Poderes de fiscalização e o TIF",
      '<div class="box"><span class="bl">O Título IV do CTN</span>'+
      '<p><b>Fiscalização</b> (194-200) · <b>dívida ativa</b> (201-204) · <b>certidões negativas</b> (205-208).</p>'+
      '<p><b>CF, art. 37, XXII:</b> as administrações tributárias são <b>atividades ESSENCIAIS ao funcionamento do Estado</b>, exercidas por <b>carreiras específicas</b>, com <b>recursos prioritários</b> e <b>atuação integrada</b>, na forma da lei ou convênio.</p></div>'+
      '<div class="box"><span class="bl">Arts. 194 e 195 — o alcance da fiscalização</span>'+
      '<p><b>194:</b> a legislação regula a competência e os poderes de fiscalização, <b>em caráter geral</b> ou <b>por tributo</b>. E aplica-se a <b>pessoas CONTRIBUINTES OU NÃO</b> — <b>inclusive imunes e isentas</b>.</p>'+
      '<p><b>195:</b> <b>não têm aplicação</b> quaisquer disposições legais <b>excludentes ou limitativas</b> do direito de examinar <b>mercadorias, livros, arquivos, documentos, papéis e efeitos</b> — nem da obrigação de exibi-los.</p>'+
      '<p><b>STF, Súmula 439:</b> sujeitam-se à fiscalização <b>quaisquer livros comerciais</b>, <b>limitado o exame aos pontos objeto da investigação</b>.</p>'+
      '<p class="mn"><em>Acesso <b>amplo</b>; exame <b>delimitado</b>.</em></p></div>'+
      '<div class="box trap"><span class="bl">Dois detalhes que caem muito</span>'+
      '<p><b>1)</b> Os livros obrigatórios e os comprovantes se conservam até a <b>PRESCRIÇÃO</b> dos créditos — não até a decadência.</p>'+
      '<p><b>2)</b> O <b>art. 297, § 2º, do Código Penal</b> equipara os <b>livros mercantis a DOCUMENTO PÚBLICO</b>.</p>'+
      '<p><b>Instituições financeiras (LC 105/2001, art. 6º):</b> o exame só cabe quando houver <b>processo administrativo instaurado ou procedimento fiscal em curso</b> <b>E</b> os exames forem <b>INDISPENSÁVEIS</b>. Requisitos <b>cumulativos</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Art. 196 — Termo de Início de Fiscalização</span>'+
      '<p>A autoridade <b>lavra os termos</b> que documentam o início do procedimento, e a legislação <b>fixa prazo máximo</b> para concluir as diligências.</p>'+
      '<p><b>Três efeitos:</b> <b>1)</b> marca a <b>data inicial</b> do prazo das diligências; <b>2)</b> <b>antecipa a DECADÊNCIA</b> (art. 173, p.ú.), se lavrado antes do 1º dia do exercício seguinte; <b>3)</b> <b>AFASTA A ESPONTANEIDADE</b> (art. 138, p.ú.) — acabou a denúncia espontânea.</p>'+
      '<p><b>Onde se lavra:</b> <b>sempre que possível em um dos LIVROS FISCAIS</b> exibidos; em separado, entrega-se <b>cópia autenticada</b> ao fiscalizado.</p></div>'),
    sl("Informações, sigilo e força pública",
      '<div class="box"><span class="bl">Art. 197 — obrigados a informar</span>'+
      '<p><b>Mediante INTIMAÇÃO ESCRITA</b>, sobre bens, negócios ou atividades de <b>TERCEIROS</b>:</p>'+
      '<p><b>I)</b> tabeliães, escrivães e serventuários de ofício · <b>II)</b> bancos, casas bancárias, Caixas Econômicas e demais instituições financeiras · <b>III)</b> empresas de administração de bens · <b>IV)</b> corretores, leiloeiros e despachantes oficiais · <b>V)</b> inventariantes · <b>VI)</b> síndicos, comissários e liquidatários · <b>VII)</b> <b>quaisquer outras que a lei designe</b>.</p>'+
      '<p class="mn"><em>O inciso VII torna o rol <b>exemplificativo</b>. E o parágrafo único ressalva o <b>SEGREDO legal</b> de cargo, ofício, função, ministério, atividade ou profissão.</em></p></div>'+
      '<div class="box trap"><span class="bl">Art. 198 — dever de sigilo</span>'+
      '<p>É <b>vedada a DIVULGAÇÃO</b> de informação obtida <b>em razão do ofício</b> sobre a <b>situação econômica ou financeira</b> do sujeito passivo ou de terceiros e sobre a <b>natureza e o estado de seus negócios</b>.</p>'+
      '<p><b>§ 1º — duas exceções:</b> <b>I)</b> <b>requisição de autoridade JUDICIÁRIA</b> no interesse da justiça; <b>II)</b> <b>solicitação de autoridade ADMINISTRATIVA</b>, desde que <b>comprovada a instauração regular de processo administrativo</b> para investigar aquele sujeito passivo por <b>infração administrativa</b>.</p>'+
      '<p><b>§ 2º —</b> o intercâmbio se faz por <b>processo regularmente instaurado</b>, com <b>entrega PESSOAL mediante RECIBO</b>.</p></div>'+
      '<div class="box tip"><span class="bl">§ 3º — o que NÃO é vedado divulgar: RE-PAR-IN²</span>'+
      '<p><b>RE</b>presentações fiscais para fins penais · <b>PAR</b>celamento ou moratória · <b>IN</b>scrições na dívida ativa · <b>IN</b>centivo, renúncia, benefício ou imunidade <b>cujo beneficiário seja PESSOA JURÍDICA</b> (LC 187/2021).</p>'+
      '<p><b>RFFP:</b> só se formula a partir do <b>crédito DEFINITIVAMENTE CONSTITUÍDO</b>. <b>STF, Súmula Vinculante 24:</b> “não se tipifica crime material contra a ordem tributária <b>antes do lançamento definitivo</b> do tributo”.</p>'+
      '<p class="mn"><em>Por isso publicar no site da Receita o nome, o CPF e a tipificação da RFFP <b>não viola</b> o sigilo.</em></p></div>'+
      '<div class="box"><span class="bl">Art. 199 — assistência mútua</span>'+
      '<p>As Fazendas da União, Estados, DF e Municípios prestam-se <b>assistência mútua</b> e <b>permutam informações</b>, na forma de <b>LEI ou CONVÊNIO</b> — <b>não é autoaplicável</b>: é <b>norma de eficácia LIMITADA</b>.</p>'+
      '<p><b>Parágrafo único:</b> só a <b>UNIÃO</b> permuta informações com <b>Estados estrangeiros</b>, por tratados, acordos ou convênios.</p></div>'+
      '<div class="box trap"><span class="bl">Art. 200 — força pública</span>'+
      '<p>As autoridades <b>REQUISITAM</b> (não apenas solicitam) o auxílio da força pública <b>federal, estadual ou municipal, e reciprocamente</b>, quando <b>vítimas de embaraço ou desacato</b>, ou quando <b>necessário à efetivação de medida</b> da legislação tributária — <b>ainda que não se configure crime ou contravenção</b>.</p>'+
      '<p><b>Limite:</b> as <b>garantias individuais</b>, sobretudo a <b>INVIOLABILIDADE DE DOMICÍLIO</b> (art. 5º, XI, da CF). Requisitar força pública não é salvo-conduto para entrar onde se quiser.</p></div>')
  ]
};

var TEC = [
  ["Caderno CEBRASPE — Direito Tributário 13","https://www.tecconcursos.com.br/s/Q2hXM2","Q2hXM2"],
  ["Caderno FCC — Direito Tributário 13","https://www.tecconcursos.com.br/s/Q2hXMH","Q2hXMH"],
  ["Caderno FGV — Direito Tributário 13","https://www.tecconcursos.com.br/s/Q2hXMc","Q2hXMc"],
  ["Caderno VUNESP — Direito Tributário 13","https://www.tecconcursos.com.br/s/Q2hXN7","Q2hXN7"]
];
var TECNOTA = "Priorize o caderno da FGV — banca do último certame da Receita Federal. Este é um módulo curto e de alto retorno para carreira fiscal, porque descreve o seu próprio trabalho. Três coisas valem decorar na literalidade: o mnemônico RE-PAR-IN² do art. 198, § 3º (o que NÃO é sigiloso); os três efeitos do Termo de Início de Fiscalização, sobretudo o de afastar a denúncia espontânea; e os dois requisitos CUMULATIVOS da LC 105/2001 para acessar dados de instituições financeiras. Some a isso três enunciados de tribunal: Súmula 439 do STF (exame limitado aos pontos investigados), Súmula Vinculante 24 (sem lançamento definitivo não há crime material) e a equiparação dos livros mercantis a documento público pelo art. 297, § 2º, do Código Penal. A EC 132/2023 não alterou os arts. 194 a 200.";

var UNITS = [
  {n:1, title:"Poderes de fiscalização", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Arts. 194 a 200 — fiscalizar, informar, guardar sigilo", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · alcance da fiscalização",    xp:25, data:["S1","S2","T0","T1","T2","T3","T39"]},
    {id:"K3", type:"drill",  title:"Praticar · exame de livros e documentos", xp:25, data:["S3","S4","S5","T4","T5","T6","T7","T8","T9","T10"]},
    {id:"K4", type:"flash",  title:"Flashcards · poderes de fiscalização",  xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11]}
  ]},
  {n:2, title:"Termo de Início de Fiscalização", cvar:"u2", lessons:[
    {id:"K5", type:"drill",  title:"Praticar · os três efeitos do TIF",     xp:25, data:["S6","S7","T11","T12","T13","T14","T37"]},
    {id:"K6", type:"flash",  title:"Flashcards · o TIF",                    xp:15, data:[12,13,14,15,16]}
  ]},
  {n:3, title:"Obrigados a prestar informações", cvar:"u3", lessons:[
    {id:"K7", type:"drill",  title:"Praticar · o rol do art. 197",          xp:25, data:["S8","S9","S10","T15","T16","T17","T18","T38"]},
    {id:"K8", type:"flash",  title:"Flashcards · dever de informar",        xp:15, data:[17,18,19,20]}
  ]},
  {n:4, title:"Sigilo fiscal", cvar:"u4", lessons:[
    {id:"K9", type:"drill",  title:"Praticar · dever de sigilo e exceções", xp:25, data:["S11","S12","S13","T19","T20","T21","T22","T23"]},
    {id:"K10",type:"drill",  title:"Praticar · RE-PAR-IN² e a RFFP",        xp:25, data:["S14","S15","S16","S17","T24","T25","T26","T27","T28"]},
    {id:"K11",type:"flash",  title:"Flashcards · sigilo fiscal",            xp:15, data:[21,22,23,24,25,26,27,28,29,30]}
  ]},
  {n:5, title:"Assistência mútua e força pública", cvar:"u5", lessons:[
    {id:"K12",type:"drill",  title:"Praticar · art. 199 e permuta internacional", xp:25, data:["S18","S19","T29","T30","T31","T32"]},
    {id:"K13",type:"drill",  title:"Praticar · requisição da força pública", xp:25, data:["S20","T33","T34","T35","T36"]},
    {id:"K14",type:"flash",  title:"Flashcards · assistência e força pública", xp:15, data:[31,32,33,34,35,36,37,38,39]}
  ]},
  {n:6, title:"Fixação", cvar:"u1", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",               xp:60, data:null},
    {id:"K15", type:"missao", title:"Missão TEC Concursos",                 xp:15, data:null},
    {id:"K16", type:"prova",  title:"Simulado cronometrado",                xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo — art. 37, XXII, da CF/88, transcrito no Resumo. As administrações tributárias são <b>atividades essenciais ao funcionamento do Estado</b>, exercidas por <b>servidores de carreiras específicas</b>.</p><p>O esquema do material acrescenta os outros dois efeitos: terão <b>recursos prioritários</b> e atuarão de <b>forma integrada</b>, com compartilhamento de cadastros e informações fiscais, na forma da lei ou convênio.</p><p class='fb-fonte'>Resumo 13 · <i>Administração tributária — CF, art. 37, XXII</i></p>",
1:"<p>Errado. O parágrafo único do art. 194 é amplo: a legislação de fiscalização aplica-se às pessoas <b>naturais ou jurídicas, contribuintes ou não</b>.</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 194, parágrafo único</i></p>",
2:"<p>Certo — e é a parte final do parágrafo único do art. 194: a legislação aplica-se <b>inclusive às que gozem de imunidade tributária ou de isenção de caráter pessoal</b>.</p><p>Não pagar tributo não significa escapar da fiscalização — até porque é ela que verifica se a imunidade ou isenção continua cabendo.</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 194, parágrafo único</i></p>",
3:"<p>Certo, art. 194. O Resumo explica: como o CTN é norma geral, cada ente estabelece por <b>lei ordinária</b> outras regras de fiscalização — que podem valer em <b>caráter geral</b> (todos os tributos do ente) ou <b>especificamente</b> em função da natureza de um tributo.</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 194</i></p>",
4:"<p>Errado, art. 195: <b>não têm aplicação</b>, para os efeitos da legislação tributária, quaisquer disposições legais <b>excludentes ou limitativas</b> do direito de examinar mercadorias, livros, arquivos, documentos, papéis e efeitos comerciais ou fiscais — nem da obrigação de exibi-los.</p><p>Ou seja: a lei que limita esse exame não vale contra o Fisco.</p><p class='fb-fonte'>Resumo 13 · <i>Fiscalização — art. 195</i></p>",
5:"<p>Certo — <b>Súmula 439 do STF</b>, transcrita no Resumo: \"Estão sujeitos à fiscalização tributária ou previdenciária <b>quaisquer livros comerciais, limitado o exame aos pontos objeto da investigação</b>.\"</p><p>A súmula tem duas partes e ambas caem: o acesso é amplo; o exame é <b>delimitado pelo objeto</b>.</p><p class='fb-fonte'>Resumo 13 · <i>STF Súmula 439</i></p>",
6:"<p>Errado pela segunda metade da Súmula 439 do STF: o exame é <b>limitado aos pontos objeto da investigação</b>.</p><p>O art. 195 derruba as limitações legais ao acesso; a súmula impede que isso vire devassa sem objeto.</p><p class='fb-fonte'>Resumo 13 · <i>STF Súmula 439</i></p>",
7:"<p>Errado por uma palavra. O parágrafo único do art. 195 manda conservar os livros obrigatórios de escrituração comercial e fiscal, e os comprovantes dos lançamentos, até que ocorra a <b>PRESCRIÇÃO</b> dos créditos tributários decorrentes das operações a que se refiram.</p><p>Decadência é o prazo para lançar; prescrição, o prazo para cobrar em juízo — e é este que define a guarda.</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 195, parágrafo único</i></p>",
8:"<p>Certo. O Resumo destaca — \"isso cai demais em provas\" — que o <b>art. 297, § 2º, do Código Penal</b> equipara os livros de escrituração comercial e fiscal (livros mercantis) a <b>documento público</b>.</p><p>Consequência: falsificá-los é falsificação de documento público.</p><p class='fb-fonte'>Resumo 13 · <i>CP — art. 297, § 2º</i></p>",
9:"<p>Errado. O quadro ATENÇÃO do Resumo, com o art. 6º da <b>LC 105</b>: o exame de documentos, livros e registros de <b>instituições financeiras</b> — inclusive contas de depósitos e aplicações — só é possível quando houver <b>processo administrativo instaurado ou procedimento fiscal em curso</b> <i>e</i> os exames forem considerados <b>indispensáveis</b>.</p><p>Conveniência não basta.</p><p class='fb-fonte'>Resumo 13 · <i>LC 105/2001 — art. 6º</i></p>",
10:"<p>Certo — são os <b>dois requisitos cumulativos</b> do art. 6º da LC 105, destacados no Resumo:</p><p>· <b>processo administrativo instaurado ou procedimento fiscal em curso</b>; e<br>· que os exames sejam considerados <b>indispensáveis</b> pela autoridade administrativa competente.</p><p class='fb-fonte'>Resumo 13 · <i>LC 105/2001 — art. 6º</i></p>",
11:"<p>Certo, art. 196 — é o <b>Termo de Início de Fiscalização (TIF)</b>. A autoridade que proceder ou presidir a quaisquer diligências de fiscalização <b>lavrará os termos necessários</b> para documentar o início do procedimento.</p><p class='fb-fonte'>Resumo 13 · <i>Termo de Início de Fiscalização — art. 196</i></p>",
12:"<p>Certo — parte final do art. 196: os termos são lavrados na forma da legislação aplicável, <b>que fixará prazo máximo para a conclusão das diligências</b>.</p><p>É o primeiro dos três efeitos que o Resumo atribui ao TIF: determinar a <b>data inicial</b> da contagem desse prazo máximo.</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 196</i></p>",
13:"<p>Certo — é o terceiro efeito do TIF na lista do Resumo: <b>afasta a espontaneidade do sujeito passivo</b>.</p><p>Iniciada a fiscalização, já não cabe <b>denúncia espontânea</b> (art. 138, parágrafo único) quanto aos fatos sob apuração.</p><p class='fb-fonte'>Resumo 13 · <i>Efeitos do TIF — art. 196 c/c art. 138</i></p>",
14:"<p>Certo, parágrafo único do art. 196: os termos serão lavrados, <b>sempre que possível, em um dos livros fiscais exibidos</b>.</p><p>Quando lavrados em separado, entrega-se à pessoa fiscalizada <b>cópia autenticada</b> pela autoridade.</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 196, parágrafo único</i></p>",
15:"<p>Certo, art. 197 — e note a exigência de <b>intimação escrita</b>, no esquema do Resumo.</p><p>O rol: tabeliães, escrivães e demais serventuários de ofício; bancos, casas bancárias, Caixas Econômicas e demais instituições financeiras; empresas de administração de bens; corretores, leiloeiros e despachantes oficiais; inventariantes; síndicos, comissários e liquidatários; e quaisquer outras entidades ou pessoas que a <b>lei</b> designe.</p><p class='fb-fonte'>Resumo 13 · <i>Obrigados a prestar informações — art. 197</i></p>",
16:"<p>Errado. O caput do art. 197 condiciona a obrigação à <b>intimação escrita</b> — é o que aparece em destaque no esquema do Resumo.</p><p>Sem intimação escrita, não nasce o dever de informar.</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 197</i></p>",
17:"<p>Errado. O Resumo é expresso: a lista <b>não é taxativa</b> — \"veja o inciso VII\", que alcança <b>quaisquer outras entidades ou pessoas que a lei designe</b>, em razão de cargo, ofício, função, ministério, atividade ou profissão.</p><p>Lei ordinária pode estendê-la.</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 197, VII</i></p>",
18:"<p>Certo — parágrafo único do art. 197: excluem-se os fatos sobre os quais o informante esteja <b>legalmente obrigado a observar segredo</b> em razão de cargo, ofício, função, ministério, atividade ou profissão.</p><p>Exemplos do Resumo: <b>padres, psicólogos, advogados</b>.</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 197, parágrafo único</i></p>",
19:"<p>Certo, art. 198 — o <b>dever de sigilo fiscal</b>. É vedada a divulgação, pela Fazenda Pública ou seus servidores, de informação obtida em razão do ofício sobre a <b>situação econômica ou financeira</b> do sujeito passivo ou de terceiros e sobre a <b>natureza e o estado de seus negócios ou atividades</b>.</p><p>Tudo isso \"sem prejuízo do disposto na legislação criminal\".</p><p class='fb-fonte'>Resumo 13 · <i>Dever de sigilo — art. 198</i></p>",
20:"<p>Certo — é o exemplo do Resumo.</p><p>A Secretaria de Fazenda que, em seu periódico informativo oficial, torna pública a <b>fórmula e a matéria-prima</b> dos refrigerantes da empresa fiscalizada <b>viola o dever de sigilo</b>: é informação sobre a natureza dos negócios obtida em razão do ofício (art. 198).</p><p class='fb-fonte'>Resumo 13 · <i>Art. 198 — exemplo do refrigerante</i></p>",
21:"<p>Certo, art. 198, § 1º, I — a exceção mais ampla: <b>requisição de autoridade judiciária no interesse da justiça</b>.</p><p>Compare com o inciso II (autoridade administrativa), muito mais condicionado.</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 198, § 1º, I</i></p>",
22:"<p>Errado. O inciso II exige, <b>no momento da solicitação</b>, a comprovação da <b>instauração regular de processo administrativo</b> no órgão ou entidade solicitante, com o objetivo de investigar o sujeito passivo por <b>prática de infração administrativa</b>.</p><p>O Resumo frisa: a transferência no âmbito administrativo é <b>mais restrita</b> que a judicial.</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 198, § 1º, II</i></p>",
23:"<p>Certo, art. 198, § 2º: processo regularmente instaurado, <b>entrega pessoal</b> à autoridade solicitante, <b>mediante recibo</b> que formalize a transferência e assegure a preservação do sigilo.</p><p>Exemplo do Resumo: pedido de autarquia estadual sobre servidor em PAD por atos de corrupção — as informações <b>só podem ser entregues pessoalmente, mediante recibo</b>.</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 198, § 2º</i></p>",
24:"<p>Certo — § 3º do art. 198, que o Resumo organiza no mnemônico <b>RE-PAR-IN²</b>:</p><p><b>RE</b>presentações fiscais para fins penais · <b>PAR</b>celamento ou moratória · <b>IN</b>scrições na Dívida Ativa · <b>IN</b>centivo, renúncia, benefício ou imunidade de natureza tributária cujo beneficiário seja pessoa jurídica (este último incluído pela <b>LC 187 de 2021</b>).</p><p class='fb-fonte'>Resumo 13 · <i>Mnemônico RE-PAR-IN² — art. 198, § 3º</i></p>",
25:"<p>Errado — está no rol do que <b>NÃO é vedado</b> divulgar. É o último <b>IN</b> do mnemônico <b>RE-PAR-IN²</b> do Resumo: incentivo, renúncia, benefício ou imunidade de natureza tributária cujo beneficiário seja <b>pessoa jurídica</b>.</p><p>Inciso incluído pela <b>LC 187 de 2021</b>.</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 198, § 3º, IV</i></p>",
26:"<p>Errado. O Resumo é claro: <b>somente a partir do crédito tributário definitivamente constituído</b> pode ser formulada a representação fiscal para fins penais (RFFP) a ser encaminhada ao Ministério Público — depois de proferida a decisão final na esfera administrativa.</p><p>O fundamento é a <b>Súmula Vinculante 24 do STF</b>.</p><p class='fb-fonte'>Resumo 13 · <i>RFFP e STF SV 24</i></p>",
27:"<p>Certo — <b>Súmula Vinculante 24 do STF</b>, transcrita no Resumo: \"Não se tipifica crime material contra a ordem tributária, previsto no art. 1º, incisos I a IV, da Lei 8.137/90, <b>antes do lançamento definitivo do tributo</b>.\"</p><p class='fb-fonte'>Resumo 13 · <i>STF Súmula Vinculante 24</i></p>",
28:"<p>Errado — é o exemplo do Pablo, no Resumo.</p><p>Crédito <b>definitivamente constituído</b> (decorrido o prazo de impugnação sem apresentação), RFFP encaminhada ao MP e publicação, no sítio da Receita, de <b>informações sumárias</b> — nome, CPF e tipificação do ilícito em tese. O material conclui: <b>não é vedada</b> a divulgação, por força do art. 198, § 3º, I.</p><p class='fb-fonte'>Resumo 13 · <i>Art. 198, § 3º, I — exemplo da RFFP</i></p>",
29:"<p>Certo, art. 199: as Fazendas da União, Estados, DF e Municípios prestar-se-ão <b>mutuamente assistência</b> para a fiscalização dos tributos respectivos e permuta de informações, na forma estabelecida, em caráter geral ou específico, <b>por lei ou convênio</b>.</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 199</i></p>",
30:"<p>Errado — quadro ATENÇÃO do Resumo: o compartilhamento <b>só ocorre mediante a edição de lei ou convênio</b>, ou seja, <b>não é autoaplicável</b>.</p><p>O material classifica o dispositivo como <b>norma de eficácia limitada</b>.</p><p class='fb-fonte'>Resumo 13 · <i>ATENÇÃO — art. 199</i></p>",
31:"<p>Certo — parágrafo único do art. 199: a <b>Fazenda Pública da União</b>, na forma de <b>tratados, acordos ou convênios</b>, poderá permutar informações com Estados estrangeiros no interesse da arrecadação e da fiscalização de tributos.</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 199, parágrafo único</i></p>",
32:"<p>Errado. O parágrafo único do art. 199 atribui essa prerrogativa <b>exclusivamente à Fazenda Pública da União</b>.</p><p>Faz sentido: relações com Estados estrangeiros são competência da União.</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 199, parágrafo único</i></p>",
33:"<p>Certo, art. 200. As autoridades administrativas podem <b>requisitar o auxílio da força pública</b> federal, estadual ou municipal — e reciprocamente — quando <b>vítimas de embaraço ou desacato</b> no exercício de suas funções, ou quando <b>necessário à efetivação de medida</b> prevista na legislação tributária.</p><p class='fb-fonte'>Resumo 13 · <i>Auxílio da força pública — art. 200</i></p>",
34:"<p>Errado. A parte final do art. 200 resolve: cabe a requisição <b>ainda que não se configure fato definido em lei como crime ou contravenção</b>.</p><p>No esquema do Resumo: \"mesmo que não tenha ocorrido fato definido em lei como crime\".</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 200</i></p>",
35:"<p>Errado. O Resumo faz questão do verbo: a autoridade administrativa possui o poder de <b>requisitar (e não apenas solicitar)</b> o auxílio da força pública.</p><p>Requisitar é ordenar — a autoridade policial não avalia a conveniência.</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 200</i></p>",
36:"<p>Certo — quadro ATENÇÃO do Resumo: o poder de requisitar (ordenar) auxílio da força pública deve ser interpretado <b>em consonância com as garantias individuais</b>, entre elas a <b>inviolabilidade de domicílio</b> (CF, art. 5º, XI).</p><p>Conclusão do material: o acesso ao estabelecimento do contribuinte <b>nem sempre é possível</b>.</p><p class='fb-fonte'>Resumo 13 · <i>ATENÇÃO — art. 200 e CF, art. 5º, XI</i></p>",
37:"<p>Certo — é o segundo efeito do TIF na lista do Resumo: <b>antecipa a contagem do prazo decadencial</b>, se o termo for lavrado <b>antes do 1º dia do exercício seguinte</b>.</p><p>É a regra do art. 173, parágrafo único: notificada qualquer medida preparatória indispensável ao lançamento, a contagem começa dali.</p><p class='fb-fonte'>Resumo 13 · <i>Efeitos do TIF — art. 196 c/c art. 173, p.ú.</i></p>",
38:"<p>Certo. O caput do art. 197 é expresso: as informações devidas são as de que o intimado disponha <b>com relação aos bens, negócios ou atividades de TERCEIROS</b>.</p><p>Como resume o Resumo: é a prerrogativa de a autoridade fiscal <b>requisitar informações a terceiros</b>, no interesse da fiscalização.</p><p class='fb-fonte'>Resumo 13 · <i>CTN — art. 197</i></p>",
39:"<p>Certo — o Título IV do CTN, <b>Administração Tributária</b>, subdivide-se em três capítulos, como abre o Resumo:</p><p>· Capítulo I — <b>Fiscalização</b> (arts. 194 a 200);<br>· Capítulo II — <b>Dívida Ativa</b> (arts. 201 a 204);<br>· Capítulo III — <b>Certidões Negativas</b> (arts. 205 a 208).</p><p class='fb-fonte'>Resumo 13 · <i>Considerações iniciais — Título IV do CTN</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"13", nome:"Administração tributária — fiscalização", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
