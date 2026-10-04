/* Direito Tributário — Módulo 10: Extinção do crédito tributário (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dtrib10 = (function(){
"use strict";

var CARDS = [
  ["Quais são as onze hipóteses de extinção? (art. 156)","<b>I</b> pagamento · <b>II</b> compensação · <b>III</b> transação · <b>IV</b> remissão · <b>V</b> <b>prescrição e decadência</b> · <b>VI</b> conversão de depósito em renda · <b>VII</b> pagamento antecipado e <b>homologação do lançamento</b> · <b>VIII</b> consignação em pagamento · <b>IX</b> <b>decisão administrativa irreformável</b> · <b>X</b> <b>decisão judicial passada em julgado</b> · <b>XI</b> <b>dação em pagamento em bens IMÓVEIS</b>."],
  ["O que é decisão administrativa irreformável? (art. 156, IX)","A <b>definitiva na órbita administrativa</b>, que <b>não mais possa ser objeto de ação anulatória</b>."],
  ["A dação em pagamento extingue o crédito automaticamente?","<b>NÃO.</b> É preciso que <b>cada ente edite LEI</b> disciplinando a transferência — e só alcança <b>bens IMÓVEIS</b>."],
  ["Lei ordinária estadual pode instituir a dação em pagamento?","<b>SIM</b> — basta lei ordinária do ente, prevendo prévia avaliação e aceitação pela Fazenda."],

  ["O que diz o art. 157?","A <b>imposição de penalidade NÃO ilide (não impede) o pagamento integral</b> do crédito tributário. Pagar a multa não dispensa pagar o tributo."],
  ["Como se efetua o pagamento? (art. 162)","<b>I)</b> em <b>moeda corrente, cheque ou vale postal</b>; <b>II)</b> nos <b>casos previstos em lei</b>, em <b>estampilha, papel selado ou por processo mecânico</b>."],
  ["O que são estampilha, papel selado e processo mecânico?","<b>Estampilha e papel selado:</b> selos adquiridos do Fisco que comprovam a quitação. <b>Processo mecânico:</b> autenticação fiscal que atesta o pagamento."],
  ["O pagamento gera presunção de outros pagamentos? (art. 158)","<b>NÃO.</b> <b>I)</b> o pagamento <b>parcial</b> não presume o das <b>prestações</b> em que se decomponha; <b>II)</b> o pagamento <b>total</b> não presume o de <b>outros créditos</b> do mesmo ou de outros tributos."],
  ["Exemplo do art. 158","Quem tem dois apartamentos e quita o IPTU de um <b>não</b> tem presumido o pagamento do outro. Cada crédito é autônomo."],
  ["O que é IMPUTAÇÃO em pagamento? (art. 163)","A regra que define <b>a qual débito se aplica</b> o pagamento quando o <b>mesmo sujeito passivo</b> deve <b>dois ou mais créditos vencidos</b> à <b>mesma pessoa jurídica de direito público</b>."],
  ["Qual a ordem da imputação? (art. 163)","<b>1º)</b> débitos por <b>obrigação própria</b>, depois os de <b>responsabilidade</b>; <b>2º)</b> <b>contribuições de melhoria</b>, depois <b>taxas</b>, por fim <b>impostos</b>; <b>3º)</b> ordem <b>CRESCENTE dos prazos de prescrição</b>; <b>4º)</b> ordem <b>DECRESCENTE dos montantes</b>."],
  ["Como memorizar a ordem da imputação?","<b>Contribuinte antes de responsável · melhoria → taxa → imposto · prescreve antes vem antes · valor maior vem antes.</b>"],

  ["Quando cabe CONSIGNAÇÃO em pagamento? (art. 164)","<b>I)</b> <b>recusa de recebimento</b> ou subordinação ao pagamento de <b>outro tributo ou penalidade</b>, ou ao cumprimento de <b>obrigação acessória</b>; <b>II)</b> subordinação ao cumprimento de <b>exigências administrativas sem fundamento legal</b>; <b>III)</b> <b>exigência, por mais de uma pessoa jurídica de direito público, de tributo idêntico sobre o mesmo fato gerador</b>."],
  ["Sobre o que pode versar a consignação?","<b>Somente sobre o crédito que o consignante se propõe a PAGAR</b> (art. 164, § 1º)."],
  ["Consignação julgada PROCEDENTE: o que ocorre?","O <b>pagamento se reputa efetuado</b> e a importância consignada é <b>convertida em renda</b> — o crédito se extingue."],
  ["Consignação julgada IMPROCEDENTE: o que ocorre?","Cobra-se o crédito <b>acrescido de juros de mora</b>, <b>sem prejuízo das penalidades cabíveis</b>."],
  ["Consignação × depósito do montante integral","<b>Consignação:</b> o contribuinte <b>QUER pagar</b> e o Fisco cria obstáculo — é <b>extinção</b>. <b>Depósito:</b> o contribuinte <b>discute</b> a dívida — é <b>suspensão</b>."],

  ["Quando cabe RESTITUIÇÃO? (art. 165)","<b>I)</b> cobrança ou pagamento espontâneo de tributo <b>indevido ou maior que o devido</b>; <b>II)</b> <b>erro na identificação do sujeito passivo</b>, na determinação da <b>alíquota</b>, no <b>cálculo</b> do montante ou na <b>elaboração ou conferência de documento</b>; <b>III)</b> <b>reforma, anulação, revogação ou rescisão de decisão condenatória</b>."],
  ["A restituição depende de prévio protesto?","<b>NÃO</b> — o art. 165 assegura a restituição <b>independentemente de prévio protesto</b>, seja qual for a modalidade de pagamento."],
  ["Como se resumem as três hipóteses do art. 165?","<b>Incisos I e II:</b> restituição <b>sem instauração de litígio</b>. <b>Inciso III:</b> restituição <b>com instauração de litígio</b>."],
  ["Qual a ressalva do art. 165?","O <b>§ 4º do art. 162</b>: <b>perda ou destruição da estampilha</b>, ou <b>erro no pagamento</b> por essa modalidade — nesses casos <b>não há restituição</b>."],
  ["O que é repetição de indébito?","É o mesmo que <b>RESTITUIÇÃO de tributos</b> pagos indevidamente. As bancas usam os dois termos como sinônimos."],
  ["Aderir a parcelamento faz renascer crédito decaído?","<b>NÃO.</b> A adesão, ainda que livre e espontânea, <b>não é confissão de dívida capaz de ressuscitar</b> crédito já alcançado pela decadência — a dívida já não existia. Cabe <b>restituição total</b> do que foi pago."],
  ["O que é tributo INDIRETO?","Aquele que, <b>por sua natureza, transfere o encargo financeiro</b>: o <b>contribuinte de DIREITO</b> recolhe, mas quem arca é o <b>contribuinte de FATO</b>. Ex.: <b>IPI, ICMS, ISS</b>."],
  ["Quem pode pedir a restituição de tributo indireto? (art. 166)","Só quem <b>prove haver assumido o encargo</b>; ou, tendo-o <b>transferido a terceiro</b>, quem estiver por este <b>expressamente autorizado</b> a recebê-la."],
  ["Qual o prazo para pleitear a restituição? (art. 168)","<b>5 anos</b>. Nas hipóteses dos <b>incisos I e II</b> do art. 165, contados da <b>data da EXTINÇÃO do crédito</b> (em regra, o pagamento). Na do <b>inciso III</b>, da data em que se tornar <b>definitiva a decisão</b> que reformou, anulou, revogou ou rescindiu a condenatória."],
  ["Nos tributos por homologação, quando se dá a extinção para efeito do art. 168, I?","No <b>momento do PAGAMENTO ANTECIPADO</b> (art. 150, § 1º) — é o que estabeleceu a <b>LC 118/2005</b> ao interpretar o dispositivo."],
  ["Qual o prazo do art. 169?","<b>Prescreve em DOIS ANOS</b> a <b>ação anulatória da decisão administrativa que DENEGAR a restituição</b>."],
  ["Resuma os prazos da restituição","<b>5 anos</b> para <b>pedir</b> a restituição (administrativa ou judicialmente). Negada administrativamente, <b>+2 anos</b> para a <b>ação anulatória</b> desse indeferimento."],

  ["O que é COMPENSAÇÃO? (art. 170)","A extinção recíproca quando <b>duas pessoas são, ao mesmo tempo, credora e devedora</b> uma da outra. A <b>lei pode autorizar</b> a compensação de créditos tributários com créditos <b>líquidos e certos, vencidos ou vincendos</b>, do sujeito passivo contra a Fazenda."],
  ["Exemplo de compensação","Bruno deve R$ 900 ao Município e o Município lhe deve R$ 700: as dívidas se extinguem até onde se compensarem e <b>Bruno segue devendo R$ 200</b>."],
  ["A compensação independe de lei?","<b>NÃO</b> — depende de <b>LEI</b> que a autorize, nas condições e garantias que estipular, ou cuja estipulação atribua à autoridade administrativa."],
  ["O que é TRANSAÇÃO? (art. 171)","A <b>lei pode facultar</b> aos sujeitos ativo e passivo celebrar transação que, mediante <b>CONCESSÕES MÚTUAS</b>, importe em <b>terminação de litígio</b> e consequente extinção do crédito."],
  ["A transação tributária pode ser preventiva?","No CTN ela pressupõe <b>litígio já instaurado</b> (administrativo ou judicial) — seu objetivo é <b>pôr fim</b> ao conflito, não evitá-lo."],
  ["O que é REMISSÃO? (art. 172)","O <b>PERDÃO da dívida</b> já constituída. A lei pode autorizar a autoridade a concedê-la, <b>total ou parcial</b>, por <b>despacho fundamentado</b>."],
  ["Quais os cinco fundamentos da remissão? (art. 172)","<b>I)</b> <b>situação econômica</b> do sujeito passivo; <b>II)</b> <b>erro ou ignorância escusáveis</b> quanto a <b>matéria de fato</b>; <b>III)</b> <b>diminuta importância</b> do crédito; <b>IV)</b> considerações de <b>equidade</b>; <b>V)</b> <b>condições peculiares a determinada região</b> do território da entidade tributante."],
  ["O despacho de remissão gera direito adquirido?","<b>NÃO</b> (art. 172, parágrafo único) — aplica-se, quando cabível, o <b>art. 155</b>, o mesmo regime de revogação da moratória individual."],
  ["A remissão exige lei específica?","<b>SIM</b> — por ser benefício fiscal, o <b>art. 150, § 6º, da CF</b> exige <b>lei específica</b> que regule exclusivamente a matéria ou o correspondente tributo."],
  ["Remissão × isenção × anistia","<b>Remissão:</b> perdoa <b>tributo OU multa</b> já <b>lançados</b> → <b>EXTINÇÃO</b>. <b>Isenção:</b> afasta o <b>tributo</b> antes do lançamento → exclusão. <b>Anistia:</b> afasta a <b>multa</b> antes do lançamento → exclusão."],

  ["Qual a regra geral da DECADÊNCIA? (art. 173)","O direito de a Fazenda <b>constituir o crédito</b> extingue-se em <b>5 anos</b>, contados: <b>I)</b> do <b>primeiro dia do exercício seguinte</b> àquele em que o lançamento <b>poderia ter sido efetuado</b>; <b>II)</b> da data em que se tornar <b>definitiva a decisão que anulou, por VÍCIO FORMAL</b>, o lançamento anterior."],
  ["A quais lançamentos se aplica o art. 173, I?","Aos lançamentos <b>por declaração</b>, <b>de ofício</b> e <b>por homologação NÃO declarados</b>."],
  ["O que diz o parágrafo único do art. 173?","O direito extingue-se <b>definitivamente</b> com o decurso do prazo, contado da data em que <b>tenha sido iniciada a constituição</b> do crédito pela <b>notificação de qualquer medida preparatória indispensável ao lançamento</b>."],
  ["Qual a exceção do art. 150, § 4º?","Nos tributos por homologação <b>declarados e pagos</b>, a decadência conta-se <b>da OCORRÊNCIA DO FATO GERADOR</b>."],
  ["Resuma o início da contagem da decadência","<b>Declarou e pagou</b> → art. 150, § 4º: 5 anos do <b>fato gerador</b>. <b>Não declarou</b> → Súmula 555 e art. 173, I: 5 anos do <b>1º dia do exercício seguinte</b>. <b>Declarou e não pagou</b> → Súmula 436: crédito já constituído, corre <b>prescrição</b>."],
  ["FG em 12/10/2011, tributo por declaração não comunicado. Até quando a Fazenda pode lançar?","O prazo começa em <b>1º/01/2012</b> e termina em <b>31/12/2016</b>. Lançamento em 05/11/2016 com notificação em 09/11/2016 é <b>válido</b>."],
  ["Tabelião não declarou nem pagou ISS de abril a agosto de 2014. Lançamento de ofício em fev/2020 é válido?","<b>NÃO</b> — pela Súmula 555, o prazo correu de <b>1º/01/2015 a 31/12/2019</b>. Em fevereiro de 2020 o crédito <b>já estava extinto pela decadência</b>."],
  ["O que diz a Súmula 436 do STJ?","“A <b>entrega de declaração</b> pelo contribuinte reconhecendo débito fiscal <b>constitui o crédito tributário</b>, dispensada qualquer outra providência por parte do fisco.”"],
  ["O que diz a Súmula 555 do STJ?","Quando <b>não houver declaração</b> do débito, o prazo decadencial conta-se <b>exclusivamente na forma do art. 173, I</b>, nos casos em que a legislação atribui ao sujeito passivo o dever de antecipar o pagamento."],

  ["Qual o prazo da PRESCRIÇÃO? (art. 174)","A ação para a <b>cobrança</b> do crédito tributário prescreve em <b>5 anos</b>, contados da data da sua <b>CONSTITUIÇÃO DEFINITIVA</b>."],
  ["Quando ocorre a constituição definitiva?","Em regra, quando <b>esgota o prazo para pagar ou impugnar</b> sem que o sujeito passivo o faça — em geral <b>30 dias após a notificação</b> do lançamento."],
  ["Notificado em 01/10/2022 para pagar até 30/10/2022, sem pagar nem impugnar. Quando começa a prescrição?","Em <b>31/10/2022</b> — o <b>dia seguinte ao vencimento</b>, data da constituição definitiva."],
  ["Lançamento notificado em 09/11/2016 com 30 dias para pagar; execução ajuizada em 08/01/2022. Prescreveu?","<b>SIM.</b> A constituição definitiva se deu em <b>09/12/2016</b> e a prescrição se consumou em <b>08/12/2021</b>. A cobrança é <b>indevida</b>."],
  ["Quais as quatro causas de INTERRUPÇÃO da prescrição? (art. 174, p.ú.)","<b>I)</b> <b>despacho do juiz que ordenar a citação</b> em execução fiscal; <b>II)</b> <b>protesto judicial</b>; <b>III)</b> <b>qualquer ato judicial que constitua em mora o devedor</b>; <b>IV)</b> <b>qualquer ato inequívoco, ainda que extrajudicial, que importe reconhecimento do débito pelo devedor</b>."],
  ["Qual o exemplo clássico do inciso IV?","O <b>PEDIDO DE PARCELAMENTO</b> — ato inequívoco de reconhecimento do débito, que <b>interrompe</b> a prescrição."],
  ["Pedido e concessão de parcelamento: qual o efeito de cada um?","O <b>PEDIDO INTERROMPE</b> a prescrição (art. 174, p.ú., IV); a <b>CONCESSÃO SUSPENDE</b> a exigibilidade (art. 151, VI)."],
  ["Suspensão × interrupção do prazo","<b>SUSPENSÃO:</b> removida a causa, o prazo <b>volta de onde parou</b>. <b>INTERRUPÇÃO:</b> <b>despreza-se todo o tempo decorrido</b> e o prazo <b>recomeça do zero</b>."],
  ["Parcelar dívida já prescrita é válido?","<b>NÃO</b> — o pagamento é <b>indevido</b> e cabe restituição. IPTU de 2014 e 2015 já estava prescrito em 2022; aderir ao parcelamento não ressuscita o crédito."],

  ["Compare os três regimes do crédito","<b>SUSPENSÃO (art. 151):</b> o Estado fica <b>temporariamente impedido</b> de cobrar. <b>EXTINÇÃO (art. 156):</b> crédito e débito são <b>satisfeitos</b>. <b>EXCLUSÃO (art. 175):</b> o <b>lançamento nem chega a ser realizado</b>."],
  ["O que se interpreta literalmente? (art. 111)","<b>Suspensão</b> e <b>EXCLUSÃO</b> do crédito, <b>outorga de isenção</b> e <b>dispensa de obrigações acessórias</b>. A <b>EXTINÇÃO não</b> está na lista."],
  ["Reforma tributária: muda algo aqui?","A <b>EC 132/2023 não alterou os arts. 156 a 174</b> do CTN. As modalidades de extinção seguem as mesmas; IBS e CBS terão suas regras de cobrança em lei complementar própria."]
];

var QS = [
  ["Extinguem o crédito tributário o pagamento, a compensação, a transação, a remissão, a prescrição e a decadência.","C","CTN art. 156","Entre as onze hipóteses do artigo."],
  ["A dação em pagamento em bens móveis extingue o crédito tributário.","E","CTN art. 156 XI","Somente em bens <b>imóveis</b>, e na forma e condições estabelecidas em lei."],
  ["A extinção do crédito por dação em pagamento em bens imóveis independe de lei do ente federado.","E","FGV","Cada ente precisa editar lei autorizativa disciplinando a transferência."],
  ["Lei ordinária estadual pode instituir a quitação de débitos tributários por dação em pagamento de bens imóveis, após avaliação e aceitação pela Fazenda.","C","FCC","Basta lei ordinária do próprio ente."],
  ["Decisão administrativa irreformável é a definitiva na órbita administrativa que não mais possa ser objeto de ação anulatória.","C","CTN art. 156 IX","Definição literal do inciso."],
  ["A imposição de penalidade ilide o pagamento integral do crédito tributário.","E","CTN art. 157","<b>Não</b> ilide — pagar a multa não dispensa pagar o tributo."],
  ["O pagamento é efetuado em moeda corrente, cheque ou vale postal e, nos casos previstos em lei, em estampilha, papel selado ou por processo mecânico.","C","CTN art. 162","O vale postal é ordem de pagamento pelos correios."],
  ["O pagamento total de um crédito importa presunção de pagamento de outros créditos referentes ao mesmo tributo.","E","CTN art. 158 II","Não há presunção — cada crédito é autônomo."],
  ["Quitado o IPTU de um dos imóveis do contribuinte, presume-se pago o IPTU dos demais.","E","FGV","Aplicação direta do art. 158."],
  ["Havendo dois ou mais débitos vencidos do mesmo sujeito passivo perante a mesma pessoa jurídica de direito público, a autoridade determinará a imputação em pagamento.","C","CTN art. 163","A ordem dos incisos é obrigatória."],
  ["Na imputação em pagamento, os débitos decorrentes de responsabilidade tributária precedem os débitos por obrigação própria.","E","CTN art. 163 I","É o inverso: primeiro os por obrigação própria."],
  ["Na imputação em pagamento, aplicam-se primeiramente às contribuições de melhoria, depois às taxas e por fim aos impostos.","C","CTN art. 163 II","Ordem literal do inciso."],
  ["Na imputação em pagamento, observa-se a ordem decrescente dos prazos de prescrição e crescente dos montantes.","E","CTN art. 163 III e IV","É o contrário: <b>crescente</b> dos prazos de prescrição e <b>decrescente</b> dos montantes."],
  ["A importância de crédito tributário pode ser consignada judicialmente pelo sujeito passivo em caso de recusa de recebimento pela autoridade.","C","CTN art. 164 I","Também na subordinação indevida a outras exigências."],
  ["Cabe consignação em pagamento quando mais de uma pessoa jurídica de direito público exige tributo idêntico sobre o mesmo fato gerador.","C","CTN art. 164 III","Hipótese de bitributação aparente."],
  ["A consignação em pagamento pode versar sobre crédito que o consignante não se proponha a pagar.","E","CTN art. 164 § 1º","Só pode versar sobre o crédito que o consignante se propõe a pagar."],
  ["Julgada procedente a consignação, o pagamento reputa-se efetuado e a importância consignada é convertida em renda.","C","CTN art. 164 § 2º","Julgada improcedente, cobra-se o crédito com juros de mora e penalidades."],
  ["O sujeito passivo tem direito à restituição total ou parcial do tributo independentemente de prévio protesto.","C","CTN art. 165","Seja qual for a modalidade do pagamento."],
  ["Há direito à restituição em caso de perda ou destruição da estampilha utilizada no pagamento.","E","CTN art. 165 c/c 162 § 4º","É a ressalva expressa do artigo — não há restituição."],
  ["Constituem hipóteses de restituição o erro na identificação do sujeito passivo e o erro na determinação da alíquota aplicável.","C","CTN art. 165 II","Restituição sem instauração de litígio."],
  ["A adesão a parcelamento configura confissão de dívida capaz de fazer renascer crédito tributário já alcançado pela decadência.","E","STJ","A dívida já não existe; o pagamento é indevido e cabe restituição."],
  ["A restituição de tributos que comportem transferência do encargo financeiro somente será feita a quem prove havê-lo assumido ou esteja expressamente autorizado por quem o assumiu.","C","CTN art. 166","Regra dos tributos indiretos, como IPI, ICMS e ISS."],
  ["São exemplos de tributos indiretos o IPI, o ICMS e o ISS.","C","FCC","Neles o contribuinte de direito recolhe e o de fato suporta o encargo."],
  ["O direito de pleitear a restituição extingue-se em cinco anos, contados, nas hipóteses dos incisos I e II do art. 165, da data da extinção do crédito tributário.","C","CTN art. 168 I","Em regra, a data do pagamento."],
  ["Nos tributos sujeitos a lançamento por homologação, a extinção do crédito, para efeito da contagem do prazo de restituição, ocorre no momento da homologação expressa.","E","LC 118/2005","Ocorre no momento do <b>pagamento antecipado</b> (art. 150, § 1º)."],
  ["Prescreve em dois anos a ação anulatória da decisão administrativa que denegar a restituição.","C","CTN art. 169","Prazo distinto do quinquenal do art. 168."],
  ["Indeferido administrativamente o pedido de restituição de ICMS, o prazo para a ação anulatória é de cinco anos.","E","CTN art. 169","É de <b>dois anos</b>."],
  ["Repetição de indébito tributário é expressão equivalente a restituição de tributos pagos indevidamente.","C","FGV","As bancas usam os dois termos indistintamente."],
  ["A lei pode autorizar a compensação de créditos tributários com créditos líquidos e certos, vencidos ou vincendos, do sujeito passivo contra a Fazenda Pública.","C","CTN art. 170","A compensação depende sempre de autorização legal."],
  ["A compensação tributária independe de lei autorizativa, bastando que as partes sejam simultaneamente credora e devedora.","E","CEBRASPE","O art. 170 exige lei."],
  ["A transação tributária importa em terminação de litígio mediante concessões mútuas entre os sujeitos ativo e passivo.","C","CTN art. 171","Pressupõe litígio instaurado."],
  ["A remissão é o perdão da dívida e pode ser concedida por despacho fundamentado da autoridade administrativa, quando autorizada por lei.","C","CTN art. 172","Atende a situação econômica, erro escusável, diminuta importância, equidade ou condições regionais."],
  ["São fundamentos da remissão a situação econômica do sujeito passivo, o erro ou ignorância escusáveis quanto a matéria de direito e a diminuta importância do crédito.","E","CTN art. 172 II","O inciso II fala em erro ou ignorância escusáveis quanto a <b>matéria de FATO</b>."],
  ["O despacho que concede remissão gera direito adquirido ao beneficiado.","E","CTN art. 172 p.ú.","Não gera — aplica-se, quando cabível, o art. 155."],
  ["A concessão de remissão exige lei específica que regule exclusivamente a matéria ou o correspondente tributo.","C","CF art. 150 § 6º","Vale para todo benefício fiscal."],
  ["A remissão pode alcançar tanto tributos quanto multas, desde que já constituído o crédito tributário.","C","FCC","Antes do lançamento, o benefício é isenção ou anistia."],
  ["O direito de a Fazenda Pública constituir o crédito tributário extingue-se após cinco anos contados do primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado.","C","CTN art. 173 I","Regra geral da decadência."],
  ["Anulado o lançamento por vício formal, o prazo decadencial reinicia-se da data em que se tornar definitiva a decisão anulatória.","C","CTN art. 173 II","Única hipótese de reabertura do prazo decadencial."],
  ["A regra do art. 173, I, do CTN aplica-se aos tributos lançados por homologação que tenham sido regularmente declarados e pagos.","E","CTN art. 150 § 4º","Nesses, a contagem é da <b>ocorrência do fato gerador</b>."],
  ["Fato gerador ocorrido em 12/10/2011, não comunicado ao Fisco, permite lançamento de ofício notificado em 09/11/2016.","C","FGV","O prazo decadencial correu de 1º/01/2012 a 31/12/2016."],
  ["Tributo por homologação relativo a fatos geradores de abril a agosto de 2014, não declarado nem pago, pode ser lançado de ofício em fevereiro de 2020.","E","STJ Súmula 555","O prazo correu de 1º/01/2015 a 31/12/2019 — houve decadência."],
  ["A entrega de declaração pelo contribuinte reconhecendo débito fiscal constitui o crédito tributário, dispensada qualquer outra providência por parte do fisco.","C","STJ Súmula 436","Cessa a decadência e inicia-se a prescrição."],
  ["A ação para a cobrança do crédito tributário prescreve em cinco anos contados da data da ocorrência do fato gerador.","E","CTN art. 174","Contados da data da sua <b>constituição definitiva</b>."],
  ["Notificado o contribuinte em 01/10/2022 para pagamento até 30/10/2022, sem pagamento nem impugnação, o prazo prescricional inicia-se em 31/10/2022.","C","FGV","Dia seguinte ao vencimento — constituição definitiva."],
  ["Lançamento notificado em 09/11/2016, com prazo de trinta dias, e execução fiscal ajuizada em 08/01/2022 configura cobrança tempestiva.","E","FGV","A prescrição se consumou em 08/12/2021 — a cobrança é indevida."],
  ["Interrompe a prescrição o despacho do juiz que ordenar a citação em execução fiscal.","C","CTN art. 174 p.ú. I","Redação dada pela LC 118/2005."],
  ["São causas de interrupção da prescrição o protesto judicial e qualquer ato judicial que constitua em mora o devedor.","C","CTN art. 174 p.ú. II e III","Além do reconhecimento do débito pelo devedor."],
  ["Qualquer ato inequívoco, ainda que extrajudicial, que importe em reconhecimento do débito pelo devedor interrompe a prescrição.","C","CTN art. 174 p.ú. IV","O pedido de parcelamento é o exemplo clássico."],
  ["O pedido de parcelamento suspende o prazo prescricional, ao passo que a concessão o interrompe.","E","FCC","É o inverso: o pedido <b>interrompe</b> a prescrição e a concessão <b>suspende</b> a exigibilidade."],
  ["Interrompida a prescrição, o prazo volta a fluir de onde havia parado.","E","FGV","Isso é a suspensão; na interrupção o prazo <b>recomeça do zero</b>."],
  ["A adesão a parcelamento de crédito tributário já prescrito torna o débito novamente exigível.","E","FGV","O pagamento é indevido e cabe restituição."],
  ["Interpreta-se literalmente a legislação tributária que disponha sobre extinção do crédito tributário.","E","CTN art. 111","A extinção não está no rol — apenas suspensão e exclusão."],
  ["A conversão de depósito em renda e a consignação em pagamento julgada procedente são hipóteses de extinção do crédito tributário.","C","CTN art. 156 VI e VIII","Ambas constam do rol do art. 156."],
  ["O pagamento antecipado e a homologação do lançamento extinguem o crédito tributário.","C","CTN art. 156 VII","Nos termos do art. 150 e seus §§ 1º e 4º."]
];

var EX = {
S1:{t:"multi", instr:"Marque as hipóteses de EXTINÇÃO do crédito tributário (art. 156)",
  options:["Pagamento","Compensação","Transação","Remissão",
           "Prescrição e decadência","Dação em pagamento em bens imóveis",
           "Parcelamento","Isenção"],
  answers:[0,1,2,3,4,5],
  why:"Parcelamento é suspensão; isenção é exclusão."},

S2:{t:"mc", instr:"A dação em pagamento extingue o crédito tributário quando:",
  options:["Em bens imóveis, na forma e condições de lei do ente federado",
           "Em bens móveis ou imóveis, independentemente de lei",
           "Em bens móveis, mediante avaliação da Fazenda",
           "Em qualquer bem, por acordo entre as partes"],
  answer:0,
  why:"Só imóveis, e cada ente precisa de lei autorizativa própria."},

S3:{t:"mc", instr:"A imposição de penalidade, segundo o art. 157 do CTN:",
  options:["Não ilide o pagamento integral do crédito tributário",
           "Substitui o pagamento do tributo",
           "Suspende a exigibilidade do crédito",
           "Extingue a obrigação principal"],
  answer:0,
  why:"Multa e tributo se somam; pagar uma não dispensa a outra."},

S4:{t:"multi", instr:"Marque as formas de pagamento admitidas (art. 162)",
  options:["Moeda corrente","Cheque","Vale postal",
           "Estampilha, nos casos previstos em lei",
           "Papel selado, nos casos previstos em lei",
           "Bens móveis dados em pagamento"],
  answers:[0,1,2,3,4],
  why:"Dação em pagamento só de imóveis, e é hipótese autônoma do art. 156, XI."},

S5:{t:"mc", instr:"Contribuinte com dois apartamentos quita o IPTU de um deles. E o outro?",
  options:["Não há presunção de pagamento — cada crédito é autônomo",
           "Presume-se pago, por serem do mesmo tributo",
           "Presume-se pago se forem do mesmo exercício",
           "Presume-se pago até prova em contrário"],
  answer:0,
  why:"Art. 158, II — o pagamento total de um crédito não presume o de outros."},

S6:{t:"order", instr:"Ordene as regras de IMPUTAÇÃO em pagamento (art. 163)",
  items:["Débitos por obrigação própria, depois os de responsabilidade",
         "Contribuições de melhoria, depois taxas, por fim impostos",
         "Ordem crescente dos prazos de prescrição",
         "Ordem decrescente dos montantes"],
  why:"A ordem dos incisos é obrigatória e a banca costuma invertê-la."},

S7:{t:"sort", instr:"Prazo de prescrição e montante: qual a ordem na imputação?",
  buckets:["Ordem CRESCENTE","Ordem DECRESCENTE"],
  items:[["Prazos de prescrição",0],["Montantes dos débitos",1]],
  why:"Inverter os dois é a pegadinha do art. 163."},

S8:{t:"multi", instr:"Marque as hipóteses de CONSIGNAÇÃO em pagamento (art. 164)",
  options:["Recusa de recebimento pela autoridade",
           "Subordinação do recebimento ao pagamento de outro tributo ou penalidade",
           "Subordinação ao cumprimento de exigências administrativas sem fundamento legal",
           "Exigência de tributo idêntico, sobre o mesmo fato gerador, por mais de um ente",
           "Discordância do contribuinte quanto ao valor lançado"],
  answers:[0,1,2,3],
  why:"Discordar do valor é caso de impugnação ou depósito, não de consignação."},

S9:{t:"match", instr:"Consignação: procedente ou improcedente?",
  pairs:[["Procedente","Pagamento reputa-se efetuado e a importância é convertida em renda"],
         ["Improcedente","Cobra-se o crédito com juros de mora e penalidades cabíveis"]],
  why:"Em ambos os casos o valor já está depositado — o que muda é o destino."},

S10:{t:"sort", instr:"Consignação ou depósito do montante integral?",
  buckets:["Consignação — EXTINÇÃO","Depósito — SUSPENSÃO"],
  items:[["O contribuinte QUER pagar e o Fisco cria obstáculo",0],
         ["O contribuinte DISCUTE a dívida",1]],
  why:"Intenções opostas, regimes opostos."},

S11:{t:"multi", instr:"Marque as hipóteses de RESTITUIÇÃO (art. 165)",
  options:["Pagamento de tributo indevido ou maior que o devido",
           "Erro na identificação do sujeito passivo ou na alíquota aplicável",
           "Reforma, anulação, revogação ou rescisão de decisão condenatória",
           "Perda ou destruição da estampilha utilizada no pagamento"],
  answers:[0,1,2],
  why:"A estampilha perdida é a ressalva expressa — não há restituição."},

S12:{t:"mc", instr:"Restituição de tributo INDIRETO (art. 166). Quem pode pedir?",
  options:["Quem prove haver assumido o encargo, ou quem esteja por este autorizado",
           "Sempre o contribuinte de direito",
           "Sempre o contribuinte de fato",
           "Qualquer interessado, independentemente de prova"],
  answer:0,
  why:"IPI, ICMS e ISS transferem o encargo ao contribuinte de fato."},

S13:{t:"sort", instr:"Qual o prazo em cada situação da restituição?",
  buckets:["5 anos","2 anos"],
  items:[["Pleitear a restituição de pagamento indevido",0],
         ["Pleitear restituição após decisão que anulou a condenatória",0],
         ["Ação anulatória da decisão administrativa que denegou a restituição",1]],
  why:"Arts. 168 e 169 — o prazo bienal é só para a anulatória do indeferimento."},

S14:{t:"mc", instr:"Nos tributos por homologação, quando ocorre a extinção para efeito do prazo do art. 168, I?",
  options:["No momento do pagamento antecipado, conforme a LC 118/2005",
           "Na homologação expressa pela autoridade",
           "Cinco anos após o fato gerador",
           "Na data da entrega da declaração"],
  answer:0,
  why:"A LC 118/2005 interpretou o dispositivo justamente nesse sentido."},

S15:{t:"mc", instr:"Contribuinte adere a parcelamento de crédito já decaído e paga tudo. E agora?",
  options:["O pagamento foi indevido e cabe restituição total",
           "A adesão é confissão de dívida e valida a cobrança",
           "Cabe restituição apenas da última parcela",
           "Nada — o pagamento espontâneo é irrevogável"],
  answer:0,
  why:"A decadência já extinguira o crédito; não há o que confessar."},

S16:{t:"wordbank", instr:"Monte o conceito de TRANSAÇÃO (art. 171)",
  target:["mediante","concessões","mútuas","importe","em","terminação","de","litígio","e","extinção","do","crédito"],
  extra:["sem litígio instaurado","por ato unilateral do Fisco","mediante perdão da dívida"],
  why:"Perdão da dívida é remissão; transação exige concessões dos dois lados."},

S17:{t:"match", instr:"Ligue cada modalidade ao seu conceito",
  pairs:[["Compensação","As partes são simultaneamente credora e devedora uma da outra"],
         ["Transação","Concessões mútuas que põem fim ao litígio"],
         ["Remissão","Perdão da dívida já constituída"]],
  why:"Todas as três dependem de lei que as autorize."},

S18:{t:"multi", instr:"Marque os fundamentos da REMISSÃO (art. 172)",
  options:["Situação econômica do sujeito passivo",
           "Erro ou ignorância escusáveis quanto a matéria de FATO",
           "Diminuta importância do crédito tributário",
           "Considerações de equidade",
           "Condições peculiares a determinada região",
           "Erro escusável quanto a matéria de DIREITO"],
  answers:[0,1,2,3,4],
  why:"O inciso II fala em matéria de fato — trocar por direito erra a assertiva."},

S19:{t:"sort", instr:"Remissão, isenção ou anistia?",
  buckets:["Remissão — EXTINGUE","Isenção — EXCLUI","Anistia — EXCLUI"],
  items:[["Perdoa tributo ou multa já lançados",0],
         ["Afasta o tributo antes do lançamento",1],
         ["Afasta a multa antes do lançamento",2]],
  why:"O divisor é sempre o lançamento."},

S20:{t:"gap", instr:"Complete a regra geral da decadência (art. 173, I)",
  before:"O direito de a Fazenda constituir o crédito extingue-se após 5 anos contados do ",
  after:" àquele em que o lançamento poderia ter sido efetuado.",
  options:["primeiro dia do exercício seguinte","último dia do exercício","dia da ocorrência do fato gerador"], answer:0,
  why:"A contagem do fato gerador é a exceção do art. 150, § 4º."},

S21:{t:"sort", instr:"Como conta a decadência em cada situação?",
  buckets:["Art. 150, § 4º — do FATO GERADOR","Art. 173, I — do exercício seguinte","Já corre PRESCRIÇÃO"],
  items:[["Declarou e pagou",0],
         ["Não declarou (Súmula 555)",1],
         ["Tributo por declaração não comunicado ao Fisco",1],
         ["Declarou e não pagou (Súmula 436)",2]],
  why:"Três situações, três regras — o quadro mais cobrado do Título III."},

S22:{t:"mc", instr:"FG em 12/10/2011, tributo por declaração não comunicado. Até quando a Fazenda pode lançar?",
  options:["Até 31/12/2016","Até 12/10/2016","Até 31/12/2015","Até 12/10/2021"],
  answer:0,
  why:"O prazo corre de 1º/01/2012 a 31/12/2016 — lançamento em novembro de 2016 é válido."},

S23:{t:"mc", instr:"ISS por homologação de abr-ago/2014, não declarado nem pago. Lançamento de ofício em fev/2020:",
  options:["É inválido — a decadência se consumou em 31/12/2019",
           "É válido — o prazo corre do fato gerador",
           "É válido — a Súmula 436 constituiu o crédito",
           "É inválido por prescrição, não por decadência"],
  answer:0,
  why:"Súmula 555: sem declaração, conta-se pelo art. 173, I, de 1º/01/2015 a 31/12/2019."},

S24:{t:"gap", instr:"Complete o art. 174 do CTN",
  before:"A ação para a cobrança do crédito tributário prescreve em cinco anos, contados da data da sua ",
  after:".",
  options:["constituição definitiva","ocorrência do fato gerador","inscrição em dívida ativa"], answer:0,
  why:"Em regra, o dia seguinte ao vencimento do prazo para pagar ou impugnar."},

S25:{t:"mc", instr:"Notificado em 09/11/2016 com 30 dias para pagar; execução ajuizada em 08/01/2022. Houve prescrição?",
  options:["Sim — a constituição definitiva foi em 09/12/2016 e o prazo findou em 08/12/2021",
           "Não — o prazo conta da inscrição em dívida ativa",
           "Não — faltavam ainda 30 dias",
           "Sim, mas apenas quanto às multas"],
  answer:0,
  why:"Exemplo clássico de exceção de pré-executividade por prescrição."},

S26:{t:"multi", instr:"Marque as causas de INTERRUPÇÃO da prescrição (art. 174, p.ú.)",
  options:["Despacho do juiz que ordenar a citação em execução fiscal",
           "Protesto judicial",
           "Qualquer ato judicial que constitua em mora o devedor",
           "Ato inequívoco, ainda que extrajudicial, de reconhecimento do débito",
           "Concessão de parcelamento pela Fazenda"],
  answers:[0,1,2,3],
  why:"A concessão do parcelamento SUSPENDE a exigibilidade; quem interrompe é o PEDIDO do devedor."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("O rol do art. 156 e o pagamento",
      '<div class="box"><span class="bl">Art. 156 — as onze hipóteses</span>'+
      '<p><b>I</b> pagamento · <b>II</b> compensação · <b>III</b> transação · <b>IV</b> remissão · <b>V</b> <b>prescrição e decadência</b> · <b>VI</b> conversão de depósito em renda · <b>VII</b> pagamento antecipado e <b>homologação do lançamento</b> · <b>VIII</b> consignação em pagamento · <b>IX</b> <b>decisão administrativa irreformável</b> · <b>X</b> <b>decisão judicial passada em julgado</b> · <b>XI</b> <b>dação em pagamento em bens IMÓVEIS</b>.</p>'+
      '<p class="mn"><em><b>Dação:</b> só <b>imóveis</b>, e cada ente precisa de <b>lei própria</b> disciplinando a transferência — basta lei ordinária.</em></p></div>'+
      '<div class="box"><span class="bl">Pagamento — arts. 157, 158 e 162</span>'+
      '<p><b>157:</b> a imposição de <b>penalidade NÃO ilide</b> o pagamento integral do crédito. Multa e tributo se somam.</p>'+
      '<p><b>162:</b> paga-se em <b>moeda corrente, cheque ou vale postal</b>; e, <b>nos casos previstos em lei</b>, em <b>estampilha, papel selado ou processo mecânico</b>.</p>'+
      '<p><b>158 — sem presunções:</b> o pagamento <b>parcial</b> não presume o das <b>prestações</b>; o <b>total</b> não presume o de <b>outros créditos</b>. <em>Quitar o IPTU de um apartamento não quita o do outro.</em></p></div>'+
      '<div class="box trap"><span class="bl">Art. 163 — imputação em pagamento</span>'+
      '<p>Com <b>dois ou mais débitos vencidos</b> do mesmo sujeito passivo perante a <b>mesma pessoa jurídica de direito público</b>, a autoridade imputa o pagamento <b>nesta ordem</b>:</p>'+
      '<p><b>1º)</b> débitos por <b>obrigação própria</b>, depois os de <b>responsabilidade</b>;<br>'+
      '<b>2º)</b> <b>contribuições de melhoria</b> → <b>taxas</b> → <b>impostos</b>;<br>'+
      '<b>3º)</b> ordem <b>CRESCENTE</b> dos prazos de prescrição;<br>'+
      '<b>4º)</b> ordem <b>DECRESCENTE</b> dos montantes.</p>'+
      '<p class="mn"><em>Inverter crescente e decrescente nos dois últimos incisos é a pegadinha do artigo.</em></p></div>'),
    sl("Consignação, restituição e as demais modalidades",
      '<div class="box"><span class="bl">Consignação em pagamento — art. 164</span>'+
      '<p>Cabe quando há <b>recusa de recebimento</b>, subordinação do recebimento ao pagamento de <b>outro tributo ou penalidade</b> ou ao cumprimento de <b>obrigação acessória</b>, subordinação a <b>exigências sem fundamento legal</b>, ou <b>exigência de tributo idêntico por mais de um ente</b> sobre o mesmo fato gerador.</p>'+
      '<p><b>§ 1º:</b> só versa sobre o crédito que o consignante <b>se propõe a pagar</b>.<br>'+
      '<b>§ 2º:</b> <b>procedente</b> → pagamento reputa-se efetuado e o valor é <b>convertido em renda</b>; <b>improcedente</b> → cobra-se o crédito <b>com juros de mora e penalidades</b>.</p>'+
      '<p class="mn"><em><b>Consignação</b> = quero pagar e não me deixam (extinção). <b>Depósito</b> = discuto a dívida (suspensão).</em></p></div>'+
      '<div class="box"><span class="bl">Restituição — arts. 165, 166, 168 e 169</span>'+
      '<p><b>165 —</b> cabe restituição, <b>independentemente de prévio protesto</b>: <b>I)</b> tributo <b>indevido ou maior que o devido</b>; <b>II)</b> <b>erro</b> na identificação do sujeito passivo, na alíquota, no cálculo ou em documento; <b>III)</b> <b>reforma, anulação, revogação ou rescisão de decisão condenatória</b>.</p>'+
      '<p><b>Ressalva:</b> <b>perda ou destruição da estampilha</b> — não há restituição.</p>'+
      '<p><b>166 — tributos INDIRETOS</b> (IPI, ICMS, ISS): só restitui quem <b>prove ter assumido o encargo</b> ou esteja <b>autorizado</b> por quem o assumiu.</p>'+
      '<p><b>168 — 5 anos:</b> nos incisos I e II, da <b>extinção do crédito</b> (em regra o pagamento; nos tributos por homologação, o <b>pagamento antecipado</b>, conforme a <b>LC 118/2005</b>); no inciso III, da <b>definitividade da decisão</b> que desfez a condenatória.</p>'+
      '<p><b>169 — 2 anos:</b> prazo da <b>ação anulatória</b> da decisão administrativa que <b>DENEGAR</b> a restituição.</p>'+
      '<p class="mn"><em>“<b>Repetição de indébito</b>” é o mesmo que restituição.</em></p></div>'+
      '<div class="box tip"><span class="bl">Compensação, transação e remissão</span>'+
      '<p><b>170 — COMPENSAÇÃO:</b> as partes são <b>credora e devedora</b> uma da outra. Depende de <b>LEI</b> que a autorize, com créditos <b>líquidos e certos, vencidos ou vincendos</b>. <em>Devo 900 e me devem 700 → sobram 200.</em></p>'+
      '<p><b>171 — TRANSAÇÃO:</b> <b>concessões MÚTUAS</b> que importam em <b>terminação de litígio</b> e extinção do crédito. Pressupõe <b>litígio instaurado</b>.</p>'+
      '<p><b>172 — REMISSÃO:</b> <b>perdão</b> da dívida, total ou parcial, por <b>despacho fundamentado</b> autorizado por lei, atendendo à <b>situação econômica</b>, a <b>erro ou ignorância escusáveis quanto a matéria de FATO</b>, à <b>diminuta importância</b>, à <b>equidade</b> ou a <b>condições regionais</b>. <b>Não gera direito adquirido</b> (aplica-se o art. 155), e exige <b>lei específica</b> (art. 150, § 6º, da CF).</p></div>')
  ],
  V2:[
    sl("Decadência e prescrição",
      '<div class="box"><span class="bl">Art. 173 — regra geral da decadência</span>'+
      '<p>O direito de a Fazenda <b>constituir o crédito</b> extingue-se em <b>5 anos</b>, contados:</p>'+
      '<p><b>I)</b> do <b>primeiro dia do exercício seguinte</b> àquele em que o lançamento <b>poderia ter sido efetuado</b>;<br>'+
      '<b>II)</b> da data em que se tornar <b>definitiva a decisão que anulou, por VÍCIO FORMAL</b>, o lançamento anterior.</p>'+
      '<p><b>Parágrafo único:</b> o direito extingue-se definitivamente contado da data em que <b>iniciada a constituição</b> do crédito pela <b>notificação de medida preparatória indispensável ao lançamento</b>.</p>'+
      '<p class="mn"><em>O art. 173, I, vale para os lançamentos <b>por declaração</b>, <b>de ofício</b> e <b>por homologação NÃO declarados</b>.</em></p></div>'+
      '<div class="box trap"><span class="bl">O quadro dos três cenários</span>'+
      '<p><b>DECLAROU E PAGOU</b> → art. 150, § 4º: <b>5 anos do FATO GERADOR</b>.<br>'+
      '<b>NÃO DECLAROU</b> → Súmula 555 e art. 173, I: <b>5 anos do 1º dia do exercício seguinte</b>.<br>'+
      '<b>DECLAROU E NÃO PAGOU</b> → Súmula 436: o crédito <b>já está constituído</b>; cessa a decadência e corre a <b>PRESCRIÇÃO</b>.</p>'+
      '<p><em><b>Exemplo 1:</b> FG em 12/10/2011 não comunicado → prazo de <b>1º/01/2012 a 31/12/2016</b>; lançamento notificado em 09/11/2016 é <b>válido</b>.<br>'+
      '<b>Exemplo 2:</b> ISS de abr-ago/2014 não declarado nem pago → prazo de <b>1º/01/2015 a 31/12/2019</b>; lançamento em fev/2020 é <b>inválido</b>.</em></p></div>'+
      '<div class="box"><span class="bl">Art. 174 — prescrição</span>'+
      '<p>A ação de <b>cobrança</b> prescreve em <b>5 anos</b> da <b>CONSTITUIÇÃO DEFINITIVA</b> do crédito — em regra, o dia seguinte ao <b>vencimento do prazo para pagar ou impugnar</b> (30 dias da notificação).</p>'+
      '<p><em>Notificado em 01/10/2022 para pagar até 30/10/2022, sem pagar nem impugnar: a prescrição corre a partir de <b>31/10/2022</b>.</em></p>'+
      '<p><em>Notificado em 09/11/2016 com 30 dias: constituição definitiva em <b>09/12/2016</b>, prescrição consumada em <b>08/12/2021</b>. Execução ajuizada em 08/01/2022 é <b>indevida</b>.</em></p></div>'+
      '<div class="box trap"><span class="bl">Interrupção da prescrição — art. 174, parágrafo único</span>'+
      '<p><b>I)</b> <b>despacho do juiz que ordenar a citação</b> em execução fiscal;<br>'+
      '<b>II)</b> <b>protesto judicial</b>;<br>'+
      '<b>III)</b> qualquer <b>ato judicial que constitua em mora</b> o devedor;<br>'+
      '<b>IV)</b> qualquer <b>ato inequívoco, ainda que extrajudicial</b>, que importe <b>reconhecimento do débito pelo devedor</b> — é o caso do <b>PEDIDO DE PARCELAMENTO</b>.</p>'+
      '<p><b>PEDIDO de parcelamento → INTERROMPE a prescrição.</b><br><b>CONCESSÃO do parcelamento → SUSPENDE a exigibilidade.</b></p>'+
      '<p><b>Suspensão:</b> o prazo <b>volta de onde parou</b>. <b>Interrupção:</b> <b>recomeça do zero</b>.</p>'+
      '<p class="mn"><em>E atenção: aderir a parcelamento de dívida <b>já prescrita ou decaída</b> não a ressuscita — o pagamento é <b>indevido</b> e cabe restituição.</em></p></div>'+
      '<div class="box tip"><span class="bl">Fechando o Título III</span>'+
      '<p><b>SUSPENSÃO (art. 151):</b> impedimento temporário de cobrar.<br>'+
      '<b>EXTINÇÃO (art. 156):</b> crédito e débito satisfeitos.<br>'+
      '<b>EXCLUSÃO (art. 175):</b> o lançamento nem chega a ocorrer.</p>'+
      '<p><b>Art. 111:</b> interpretam-se literalmente <b>suspensão</b> e <b>EXCLUSÃO</b> — a <b>extinção NÃO</b>.</p>'+
      '<p>A <b>EC 132/2023 não alterou os arts. 156 a 174</b> do CTN.</p></div>')
  ]
};

var TEC = [
  ["Caderno CEBRASPE — Direito Tributário 10","https://www.tecconcursos.com.br/s/Q2h0aX","Q2h0aX"],
  ["Caderno FCC — Direito Tributário 10","https://www.tecconcursos.com.br/s/Q2h0au","Q2h0au"],
  ["Caderno FGV — Direito Tributário 10","https://www.tecconcursos.com.br/s/Q2h0b3","Q2h0b3"],
  ["Caderno VUNESP — Direito Tributário 10","https://www.tecconcursos.com.br/s/Q2h0bG","Q2h0bG"]
];
var TECNOTA = "Priorize o caderno da FGV — banca do último certame da Receita Federal. Este é o maior capítulo do Título III e o que mais rende questão com CONTA DE DATAS: reserve tempo para os exercícios de decadência e prescrição e refaça os quatro exemplos com calendário na mão, porque a banca adora dar o lançamento e a execução e pedir se houve prescrição. Guarde os prazos que não são de cinco anos: a ação anulatória do indeferimento da restituição prescreve em DOIS anos (art. 169). E não troque pedido por concessão de parcelamento — um interrompe a prescrição, o outro suspende a exigibilidade. Acrescentei a regra da LC 118/2005 sobre o termo inicial da restituição nos tributos por homologação, que o resumo de origem não traz. A EC 132/2023 não alterou os arts. 156 a 174.";

var UNITS = [
  {n:1, title:"O rol do art. 156 e o pagamento", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Extinção, pagamento, consignação e restituição", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · as onze hipóteses de extinção", xp:25, data:["S1","S2","T0","T1","T2","T3","T4","T52","T53"]},
    {id:"K3", type:"drill",  title:"Praticar · formas de pagamento e presunções", xp:25, data:["S3","S4","S5","T5","T6","T7","T8"]},
    {id:"K4", type:"drill",  title:"Praticar · imputação em pagamento",     xp:25, data:["S6","S7","T9","T10","T11","T12"]},
    {id:"K5", type:"flash",  title:"Flashcards · extinção e pagamento",     xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11]}
  ]},
  {n:2, title:"Consignação e restituição", cvar:"u2", lessons:[
    {id:"K6", type:"drill",  title:"Praticar · consignação em pagamento",   xp:25, data:["S8","S9","S10","T13","T14","T15","T16"]},
    {id:"K7", type:"drill",  title:"Praticar · hipóteses de restituição",   xp:25, data:["S11","S12","S15","T17","T18","T19","T20","T21","T22"]},
    {id:"K8", type:"drill",  title:"Praticar · prazos da restituição",      xp:25, data:["S13","S14","T23","T24","T25","T26","T27"]},
    {id:"K9", type:"flash",  title:"Flashcards · consignação e restituição", xp:15, data:[12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]}
  ]},
  {n:3, title:"Compensação, transação e remissão", cvar:"u3", lessons:[
    {id:"K10",type:"drill",  title:"Praticar · compensação e transação",    xp:25, data:["S16","S17","T28","T29","T30"]},
    {id:"K11",type:"drill",  title:"Praticar · remissão e seus limites",    xp:25, data:["S18","S19","T31","T32","T33","T34","T35"]},
    {id:"K12",type:"flash",  title:"Flashcards · compensação, transação e remissão", xp:15, data:[28,29,30,31,32,33,34,35,36,37]}
  ]},
  {n:4, title:"Decadência", cvar:"u4", lessons:[
    {id:"K13",type:"teoria", title:"Arts. 173 e 174 e a conta dos prazos",  xp:10, data:"V2"},
    {id:"K14",type:"drill",  title:"Praticar · a regra geral do art. 173",  xp:25, data:["S20","S21","T36","T37","T38"]},
    {id:"K15",type:"drill",  title:"Praticar · contas de decadência",       xp:25, data:["S22","S23","T39","T40","T41"]},
    {id:"K16",type:"flash",  title:"Flashcards · decadência",               xp:15, data:[38,39,40,41,42,43,44,45,46]}
  ]},
  {n:5, title:"Prescrição", cvar:"u5", lessons:[
    {id:"K17",type:"drill",  title:"Praticar · constituição definitiva",    xp:25, data:["S24","S25","T42","T43","T44"]},
    {id:"K18",type:"drill",  title:"Praticar · interrupção da prescrição",  xp:25, data:["S26","T45","T46","T47","T48","T49","T50","T51"]},
    {id:"K19",type:"flash",  title:"Flashcards · prescrição e fechamento",  xp:15, data:[47,48,49,50,51,52,53,54,55,56,57,58,59]}
  ]},
  {n:6, title:"Fixação", cvar:"u1", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",               xp:60, data:null},
    {id:"K20", type:"missao", title:"Missão TEC Concursos",                 xp:15, data:null},
    {id:"K21", type:"prova",  title:"Simulado cronometrado",                xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo. O Resumo transcreve o art. 156 inteiro. Os onze incisos: pagamento; compensação; transação; remissão; <b>prescrição e decadência</b>; conversão de depósito em renda; pagamento antecipado e homologação do lançamento; consignação em pagamento; decisão administrativa irreformável; decisão judicial passada em julgado; e dação em pagamento em <b>bens imóveis</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Extinção do crédito tributário — art. 156</i></p>",
1:"<p>Errado por uma palavra. O inciso XI fala em dação em pagamento em <b>bens IMÓVEIS</b>, na forma e condições estabelecidas em lei.</p><p>Bens móveis não extinguem o crédito tributário.</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 156, XI</i></p>",
2:"<p>Errado. Quadro ATENÇÃO do Resumo: para a extinção por dação em pagamento em bens imóveis é <b>necessário que cada ente federado edite lei autorizativa</b> disciplinando como se fará a transferência.</p><p>O CTN autoriza a modalidade; quem a viabiliza em cada esfera é a lei do próprio ente.</p><p class='fb-fonte'>Resumo 10 · <i>ATENÇÃO — art. 156, XI</i></p>",
3:"<p>Certo — é o exemplo do Resumo com o Estado do RJ.</p><p>Lei <b>ordinária</b> estadual prevendo quitação de débitos tributários por dação em pagamento de bens imóveis, após prévia avaliação e aceitação pela Secretaria de Fazenda: o material conclui que a lei estadual ordinária <b>poderia</b> instituir essa modalidade.</p><p>Não se exige lei complementar — a lei complementar (o próprio CTN) já criou a hipótese.</p><p class='fb-fonte'>Resumo 10 · <i>Art. 156, XI — exemplo do RJ</i></p>",
4:"<p>Certo — literalidade do inciso IX: decisão administrativa irreformável é \"a <b>definitiva na órbita administrativa</b>, que não mais possa ser objeto de <b>ação anulatória</b>\".</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 156, IX</i></p>",
5:"<p>Errado — inverteu o art. 157. A imposição de penalidade <b>não ilide</b> (não impede) o pagamento integral do crédito tributário.</p><p>Ou seja: tomar multa não dispensa pagar o tributo. São coisas que se somam.</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 157</i></p>",
6:"<p>Certo, art. 162.</p><p>Regra geral (inciso I): <b>moeda corrente, cheque ou vale postal</b> — o vale postal é uma ordem de pagamento feita por intermédio dos correios.<br>Apenas <b>nos casos previstos em lei</b> (inciso II): estampilha, papel selado ou processo mecânico.</p><p>Curiosidade do Resumo: estampilha e papel selado são selos adquiridos do fisco para comprovar a quitação; processo mecânico é a autenticação fiscal.</p><p class='fb-fonte'>Resumo 10 · <i>Pagamento — art. 162</i></p>",
7:"<p>Errado. O art. 158, II, diz o oposto: o pagamento <b>total</b> de um crédito não importa presunção de pagamento de <b>outros créditos</b>, referentes ao mesmo ou a outros tributos.</p><p>E o inciso I: o pagamento <b>parcial</b> não presume o pagamento das demais prestações — pagar a última parcela não prova que as anteriores foram pagas.</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 158</i></p>",
8:"<p>Errado — é o exemplo dos dois apartamentos no Rio de Janeiro, do Resumo.</p><p>Quitado o IPTU de um dos apartamentos, <b>não se presume</b> que o IPTU do outro imóvel tenha sido pago (art. 158, II).</p><p class='fb-fonte'>Resumo 10 · <i>Art. 158 — exemplo dos dois apartamentos</i></p>",
9:"<p>Certo — é a <b>imputação em pagamento</b> do art. 163, explicada no Resumo: ocorre quando um mesmo sujeito passivo deve dois ou mais créditos vencidos a uma <b>mesma</b> Fazenda Pública.</p><p>Quem determina a imputação é a <b>autoridade administrativa</b> competente para receber o pagamento, seguindo a ordem legal — não o contribuinte.</p><p class='fb-fonte'>Resumo 10 · <i>Imputação em pagamento — art. 163</i></p>",
10:"<p>Errado — inverteu a ordem do inciso I. No esquema do Resumo: <b>em 1º lugar os débitos como contribuinte</b> (obrigação própria) e <b>em 2º lugar os débitos como responsável</b>.</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 163, I</i></p>",
11:"<p>Certo — inciso II, na ordem do esquema do Resumo: <b>contribuições de melhoria → taxas → impostos</b>.</p><p>A lógica: primeiro os tributos vinculados a uma atuação estatal específica; por último os impostos.</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 163, II</i></p>",
12:"<p>Errado — trocou os dois critérios. Pelo esquema do Resumo:</p><p>III — prazos de prescrição: <b>do menor para o maior</b> (ordem crescente);<br>IV — montantes: <b>do maior para o menor</b> (ordem decrescente).</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 163, III e IV</i></p>",
13:"<p>Certo. O esquema do Resumo lista as hipóteses de consignação judicial do art. 164, e a primeira é a <b>recusa de recebimento</b> pela autoridade.</p><p>As demais: subordinação do recebimento ao pagamento de outro tributo ou de penalidade; ao cumprimento de obrigação acessória; a exigências administrativas sem fundamento legal; e a exigência de tributo idêntico por mais de um ente sobre o mesmo fato gerador.</p><p class='fb-fonte'>Resumo 10 · <i>Consignação em pagamento — art. 164</i></p>",
14:"<p>Certo — é a última hipótese do esquema do Resumo: exigência, <b>por mais de uma pessoa jurídica de direito público</b>, de tributo idêntico sobre um mesmo fato gerador.</p><p>É o caso clássico do conflito de competência: dois municípios cobrando ISS sobre o mesmo serviço.</p><p class='fb-fonte'>Resumo 10 · <i>Consignação — art. 164, III</i></p>",
15:"<p>Errado. O comentário do Resumo é expresso: a consignação <b>só pode versar sobre o crédito que o consignante se propõe pagar</b> (art. 164, § 1º).</p><p>Consignar não é discutir o valor devido — é depositar o que se quer pagar e não se consegue.</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 164, § 1º</i></p>",
16:"<p>Certo, § 2º: julgada <b>procedente</b> a consignação, o pagamento se reputa efetuado e a importância consignada é <b>convertida em renda</b>.</p><p>Julgada <b>improcedente</b> no todo ou em parte, cobra-se o crédito acrescido de <b>juros de mora</b>, sem prejuízo das penalidades cabíveis.</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 164, § 2º</i></p>",
17:"<p>Certo, art. 165, caput: o sujeito passivo tem direito, <b>independentemente de prévio protesto</b>, à restituição total ou parcial do tributo, <b>seja qual for a modalidade do seu pagamento</b>.</p><p>A única ressalva é a do art. 162, § 4º.</p><p class='fb-fonte'>Resumo 10 · <i>Pagamento indevido e restituição — art. 165</i></p>",
18:"<p>Errado — é exatamente a ressalva do art. 162, § 4º, explicada pelo Resumo: nos casos de <b>perda ou destruição da estampilha</b>, ou de erro no pagamento por essa modalidade, <b>não há restituição</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Art. 165 c/c art. 162, § 4º</i></p>",
19:"<p>Certo, art. 165, II: erro na <b>identificação do sujeito passivo</b>, na <b>determinação da alíquota</b>, no <b>cálculo do montante</b> do débito, ou na elaboração/conferência de qualquer documento relativo ao pagamento.</p><p>O Resumo agrupa as três hipóteses do art. 165 em duas: restituição <b>sem litígio</b> (incisos I e II) e <b>com litígio</b> (inciso III).</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 165, II</i></p>",
20:"<p>Errado — quadro ATENÇÃO do Resumo: a adesão ao parcelamento, <b>ainda que livre e espontânea, não tem o condão de fazer renascer crédito já alcançado pela decadência</b>, não sendo considerada confissão de dívida, <b>visto que a dívida já não existe mais</b>.</p><p>No exemplo do material, o contribuinte que parcelou e pagou crédito já decaído tem <b>direito à restituição total</b> do que pagou.</p><p class='fb-fonte'>Resumo 10 · <i>ATENÇÃO — parcelamento e decadência</i></p>",
21:"<p>Certo, art. 166 — restituição de <b>tributo indireto</b>. Só se restitui:</p><p>· a quem <b>prove haver assumido o encargo</b> financeiro; ou<br>· havendo transferido o encargo a terceiro, a quem esteja por este <b>expressamente autorizado</b> a receber.</p><p class='fb-fonte'>Resumo 10 · <i>Restituição de tributo indireto — art. 166</i></p>",
22:"<p>Certo. O Resumo dá esses três como exemplos de tributos indiretos — <b>IPI, ICMS e ISS</b>.</p><p>Nesses, o <b>contribuinte de direito</b> apenas recolhe; quem arca com o ônus é o <b>contribuinte de fato</b>, pois o comerciante inclui o valor do tributo no preço da mercadoria.</p><p class='fb-fonte'>Resumo 10 · <i>Tributos indiretos — art. 166</i></p>",
23:"<p>Certo, art. 168, I: cinco anos contados da <b>data da extinção do crédito tributário</b> — que, como observa o Resumo, geralmente ocorre com o <b>pagamento</b>.</p><p>No inciso III do art. 165 (com litígio), o marco é outro: a data em que se tornar definitiva a decisão administrativa ou passar em julgado a decisão judicial que reformou, anulou, revogou ou rescindiu a decisão condenatória (art. 168, II).</p><p class='fb-fonte'>Resumo 10 · <i>Prazo para pleitear a restituição — art. 168</i></p>",
24:"<p>Errado. Pela LC 118/2005, nos tributos sujeitos a lançamento por homologação a extinção do crédito, para efeito do art. 168, I, considera-se ocorrida no momento do <b>pagamento antecipado</b> — e não na homologação. Sepultou-se a antiga tese dos \"cinco mais cinco\".</p><p class='fb-fonte off'>Não consta do Resumo 10 — o material trata do art. 168 apenas pela letra do CTN, sem a regra interpretativa da LC 118/2005.</p>",
25:"<p>Certo, art. 169: prescreve em <b>dois anos</b> a ação anulatória da decisão administrativa que <b>denegar</b> a restituição.</p><p>No fluxograma do Resumo: pedido administrativo negado → <b>+ 2 anos</b> para a ação anulatória, pleiteada no Judiciário.</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 169</i></p>",
26:"<p>Errado — é o exemplo da empresa ABC no Resumo.</p><p>Pedido de restituição de ICMS indeferido na seara administrativa: o prazo para a ação judicial que visa <b>anular esse indeferimento</b> prescreve em <b>dois anos</b> (art. 169), não em cinco.</p><p>Cinco anos é o prazo para <b>pleitear</b> a restituição (art. 168); dois anos é o prazo da <b>anulatória</b> do indeferimento.</p><p class='fb-fonte'>Resumo 10 · <i>Art. 169 — exemplo do ICMS</i></p>",
27:"<p>Certo. Observação do Resumo, com apoio em Ricardo Alexandre (p. 515, 11ª ed.): \"repetição de indébito\" significa <b>restituição</b>.</p><p>Repetição de indébito tributário nada mais é que restituição de tributos pagos indevidamente.</p><p class='fb-fonte'>Resumo 10 · <i>OBS. — repetição de indébito</i></p>",
28:"<p>Certo, art. 170. Note os requisitos dos créditos do sujeito passivo contra a Fazenda: <b>líquidos e certos</b>, <b>vencidos ou vincendos</b>, e sempre nas condições e garantias que a <b>lei</b> estipular.</p><p>Exemplo do Resumo: Bruno deve R$ 900 ao Município de Salvador e o Município lhe deve R$ 700 — compensadas, resta a Bruno pagar R$ 200.</p><p class='fb-fonte'>Resumo 10 · <i>Compensação — art. 170</i></p>",
29:"<p>Errado. O art. 170 começa por \"<b>A lei pode</b> [...] autorizar a compensação\". Sem lei do ente competente, não há compensação tributária, ainda que as partes sejam reciprocamente credora e devedora.</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 170</i></p>",
30:"<p>Certo, art. 171. A transação, explica o Resumo, tem por objetivo <b>pôr fim a um litígio</b> (administrativo ou judicial) entre o sujeito passivo e a Fazenda, mediante <b>concessões mútuas</b> — cada parte cede parte de seu direito para chegar a um consenso.</p><p>Também depende de lei: \"a lei pode facultar\".</p><p class='fb-fonte'>Resumo 10 · <i>Transação — art. 171</i></p>",
31:"<p>Certo. O Resumo conceitua remissão como o <b>perdão da dívida</b>. Pelo art. 172, a <b>lei</b> pode autorizar a autoridade administrativa a concedê-la, total ou parcialmente, por <b>despacho fundamentado</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Remissão — art. 172</i></p>",
32:"<p>Errado no inciso II: o CTN fala em erro ou ignorância escusáveis quanto a <b>matéria de FATO</b> — não de direito.</p><p>Os cinco fundamentos do art. 172, no Resumo: situação econômica do sujeito passivo; erro ou ignorância escusáveis quanto a <b>matéria de fato</b>; diminuta importância do crédito; considerações de equidade; e condições peculiares a determinada região do território da entidade tributante.</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 172, II</i></p>",
33:"<p>Errado. Parágrafo único do art. 172: o despacho que concede remissão <b>não gera direito adquirido</b>, aplicando-se, quando cabível, o disposto no art. 155 (revogação de ofício, como na moratória individual).</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 172, parágrafo único</i></p>",
34:"<p>Certo. Por ser benefício fiscal, a remissão exige <b>lei específica</b>, na forma do art. 150, § 6º, da CF/88, transcrito no Resumo: lei federal, estadual ou municipal que regule <b>exclusivamente</b> as matérias enumeradas ou o correspondente tributo.</p><p class='fb-fonte'>Resumo 10 · <i>CF/88 — art. 150, § 6º</i></p>",
35:"<p>Certo — quadro ATENÇÃO do Resumo: a remissão pode perdoar tanto <b>tributo</b> quanto <b>multas</b>, desde que <b>já constituído o crédito tributário</b>.</p><p>Se ainda não houve lançamento, o benefício será <b>isenção</b> (tributos) ou <b>anistia</b> (multas) — hipóteses de exclusão.</p><p class='fb-fonte'>Resumo 10 · <i>ATENÇÃO — remissão x isenção x anistia</i></p>",
36:"<p>Certo — art. 173, I: a <b>regra geral</b> de contagem da decadência.</p><p>O Resumo delimita o alcance: essa regra aplica-se aos tributos lançados <b>por declaração, de ofício</b> e <b>por homologação que não foram declarados</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Regra geral da decadência — art. 173, I</i></p>",
37:"<p>Certo, art. 173, II: anulado o lançamento por <b>vício formal</b>, o prazo de cinco anos reconta-se da data em que se tornar <b>definitiva</b> a decisão anulatória.</p><p>É uma devolução integral de prazo ao Fisco — por isso a distinção entre vício formal e vício material é tão cobrada.</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 173, II</i></p>",
38:"<p>Errado — é a exceção destacada no quadro ATENÇÃO do Resumo.</p><p>Nos tributos por homologação <b>declarados e pagos</b>, aplica-se o art. 150, § 4º: cinco anos a contar da <b>ocorrência do fato gerador</b>.</p><p>O art. 173, I, fica para os lançados por declaração, de ofício e por homologação <b>não declarados</b> (Súmula 555 do STJ).</p><p class='fb-fonte'>Resumo 10 · <i>ATENÇÃO — art. 150, § 4º x art. 173, I</i></p>",
39:"<p>Certo — é o exemplo do Resumo, com estas mesmas datas.</p><p>Fato gerador em <b>12/10/2011</b>, imposto por declaração não comunicado ao Fisco. O prazo decadencial começa no <b>1º dia de 2012</b> e termina no <b>último dia de 2016</b>. Lançamento em 05/11/2016, notificado em 09/11/2016: está <b>dentro</b> do prazo — cobrança devida.</p><p class='fb-fonte'>Resumo 10 · <i>Art. 173, I — exemplo de 2011/2016</i></p>",
40:"<p>Errado — é o exemplo do tabelião, no Resumo.</p><p>ISS por homologação, fatos geradores de <b>abril a agosto de 2014</b>, <b>não declarado nem pago</b> → Súmula 555 do STJ: conta-se pelo art. 173, I. O prazo começou no <b>1º dia de 2015</b> e terminou no <b>último dia de 2019</b>.</p><p>Logo, em <b>fevereiro de 2020</b> a decadência já se consumara: o crédito estava extinto.</p><p class='fb-fonte'>Resumo 10 · <i>Súmula 555 — exemplo do tabelião</i></p>",
41:"<p>Certo — <b>Súmula 436 do STJ</b>, repetida no Resumo.</p><p>Entregue a declaração reconhecendo o débito, o crédito já está constituído: <b>cessa a decadência e começa a prescrição</b>. Não há mais o que lançar.</p><p class='fb-fonte'>Resumo 10 · <i>STJ Súmula 436</i></p>",
42:"<p>Errado no marco inicial. O art. 174 conta os cinco anos da <b>constituição definitiva</b> do crédito — não do fato gerador.</p><p>Na linha do tempo do Resumo: do fato gerador até a notificação do lançamento corre a <b>decadência</b>; da definitividade do lançamento até a execução fiscal corre a <b>prescrição</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Prescrição — art. 174</i></p>",
43:"<p>Certo — é o Exemplo 01 do Resumo (contribuição de melhoria do Caio).</p><p>Notificado em <b>01/10/2022</b> para pagar até <b>30/10/2022</b>, sem pagar nem impugnar: a constituição se torna definitiva e o prazo prescricional corre a partir de <b>31/10/2022</b>, o dia seguinte ao do vencimento.</p><p class='fb-fonte'>Resumo 10 · <i>Art. 174 — Exemplo 01</i></p>",
44:"<p>Errado — é o Exemplo 03 do Resumo, com estas datas.</p><p>Notificação em <b>09/11/2016</b> + 30 dias → constituição definitiva; a prescrição corre de <b>09/12/2016</b> a <b>08/12/2021</b>.</p><p>Execução fiscal ajuizada em <b>08/01/2022</b>: já consumada a prescrição. Cobrança <b>indevida</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Art. 174 — Exemplo 03</i></p>",
45:"<p>Certo — primeira hipótese do esquema do art. 174, parágrafo único, no Resumo: a prescrição se interrompe pelo <b>despacho do juiz que ordenar a citação</b> em execução fiscal.</p><p class='fb-fonte'>Resumo 10 · <i>Interrupção da prescrição — art. 174, p.ú., I</i></p>",
46:"<p>Certo — incisos II e III do esquema: <b>protesto judicial</b> e <b>qualquer ato judicial que constitua em mora o devedor</b>.</p><p>Somadas ao inciso I (despacho que ordena a citação) e ao IV (reconhecimento do débito pelo devedor), são as quatro causas de interrupção.</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 174, p.ú., II e III</i></p>",
47:"<p>Certo, inciso IV: <b>qualquer ato inequívoco, ainda que extrajudicial</b>, que importe em reconhecimento do débito pelo devedor.</p><p>O exemplo que o próprio Resumo registra ao lado do dispositivo: o <b>pedido de parcelamento</b>.</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 174, p.ú., IV</i></p>",
48:"<p>Errado — trocou os dois efeitos. O quadro ATENÇÃO do Resumo:</p><p>· <b>Pedido</b> de parcelamento pelo sujeito passivo → <b>INTERROMPE</b> a prescrição (art. 174, p.ú., IV).<br>· <b>Concessão</b> do parcelamento pela Fazenda → <b>SUSPENDE</b> a exigibilidade (art. 151, VI).</p><p class='fb-fonte'>Resumo 10 · <i>ATENÇÃO — pedido x concessão do parcelamento</i></p>",
49:"<p>Errado — essa é a definição de <b>suspensão</b>. No quadro comparativo do Resumo:</p><p><b>Suspensão</b>: removida a causa, o prazo volta a fluir <b>de onde parou</b>.<br><b>Interrupção</b>: todo o tempo já decorrido é <b>desprezado</b> e o prazo prescricional <b>recomeça do zero</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Suspensão x interrupção</i></p>",
50:"<p>Errado — é o Exemplo 04 do Resumo (João, Maria e o IPTU).</p><p>IPTU de <b>2014 e 2015</b> não pago nem impugnado: a prescrição se encerra em <b>2019</b> e <b>2020</b>. Em 2022, a dívida já estava <b>prescrita</b>, de modo que o pagamento parcelado foi <b>indevido</b> (art. 174).</p><p>A mesma lógica do quadro ATENÇÃO sobre decadência: a adesão ao parcelamento não faz renascer crédito que já não existe.</p><p class='fb-fonte'>Resumo 10 · <i>Art. 174 — Exemplo 04</i></p>",
51:"<p>Errado. Observação 1 do Resumo: a interpretação literal do art. 111 alcança a legislação que disponha sobre <b>suspensão ou exclusão</b> do crédito tributário — e o material faz questão de anotar entre parênteses: \"<b>extinção não</b>\".</p><p class='fb-fonte'>Resumo 10 · <i>OBS. 1 — CTN, art. 111</i></p>",
52:"<p>Certo. Ambas estão na coluna EXTINÇÃO da tabela do Resumo: <b>conversão de depósito em renda</b> (art. 156, VI) e <b>consignação em pagamento</b> (art. 156, VIII).</p><p>Lembre do desfecho do depósito integral: vencendo a Fazenda, o depósito é convertido em renda e o crédito se extingue.</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 156, VI e VIII</i></p>",
53:"<p>Certo, art. 156, VII: o <b>pagamento antecipado e a homologação do lançamento</b>, nos termos do art. 150 e seus §§ 1º e 4º.</p><p>Repare na redação do CTN: não é só o pagamento antecipado — é o pagamento antecipado <b>somado</b> à homologação (expressa ou tácita) que extingue definitivamente.</p><p class='fb-fonte'>Resumo 10 · <i>CTN — art. 156, VII</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"10", nome:"Extinção do crédito tributário", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
