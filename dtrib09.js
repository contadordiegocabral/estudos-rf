/* Direito Tributário — Módulo 09: Suspensão do crédito tributário (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dtrib09 = (function(){
"use strict";

var CARDS = [
  ["O que é a suspensão do crédito tributário?","O estado em que a <b>Fazenda fica TEMPORARIAMENTE IMPEDIDA de cobrar</b> o tributo — a <b>exigibilidade</b> do crédito fica suspensa, mas o crédito continua existindo."],
  ["Quais são as SEIS hipóteses do art. 151?","<b>DEMORE a LIMPAR:</b> <b>DE</b>pósito do montante integral · <b>MO</b>ratória · <b>RE</b>clamações e recursos · <b>LIM</b>inar ou tutela antecipada · <b>PAR</b>celamento."],
  ["A suspensão dispensa as obrigações acessórias?","<b>NÃO</b> (art. 151, parágrafo único). Suspensa a exigibilidade, o sujeito passivo <b>continua obrigado</b> a escriturar, declarar e emitir documentos."],
  ["Cabe tutela antecipada em mandado de segurança?","<b>NÃO.</b> Em <b>MS cabe LIMINAR</b>; a <b>tutela antecipada</b> é das <b>outras espécies de ação</b> (art. 151, IV e V)."],
  ["A suspensão extingue o crédito?","<b>NÃO</b> — apenas <b>suspende a exigibilidade</b>. O crédito permanece constituído e volta a ser exigível quando cessa a causa."],

  ["O que é MORATÓRIA?","O <b>aumento do prazo</b> para pagamento de tributo <b>vencido ou por vencer</b>."],
  ["Moratória geral × individual","<b>GERAL:</b> concedida <b>por LEI</b>, diretamente.<br><b>INDIVIDUAL:</b> <b>autorizada por lei</b> e concedida por <b>DESPACHO da autoridade administrativa</b>."],
  ["Quem pode conceder moratória em caráter GERAL? (art. 152, I)","<b>a)</b> a <b>pessoa jurídica de direito público COMPETENTE PARA INSTITUIR o tributo</b>; <b>b)</b> a <b>UNIÃO</b>, quanto a tributos de Estados, DF ou Municípios, <b>quando simultaneamente concedida</b> quanto aos tributos federais e às <b>obrigações de direito privado</b>."],
  ["Lei estadual pode conceder moratória de IPTU?","<b>NUNCA.</b> Só o <b>Município</b> (competente para instituir) ou a <b>União</b>, na hipótese excepcional do art. 152, I, b. Estado concedendo moratória de tributo municipal é inconstitucional."],
  ["A moratória pode ser restrita a uma região ou classe? (art. 152, p.ú.)","<b>SIM</b> — a lei pode <b>circunscrever expressamente</b> sua aplicabilidade a <b>determinada região</b> do território da pessoa jurídica que a expedir, ou a <b>determinada classe ou categoria de sujeitos passivos</b>."],
  ["O que a lei de moratória deve especificar? (art. 153)","<b>I)</b> o <b>prazo de duração</b> do favor; <b>II)</b> as <b>condições da concessão em caráter individual</b>; <b>III)</b> sendo o caso: os <b>tributos</b> a que se aplica, o <b>número de prestações e seus vencimentos</b>, e as <b>garantias</b> a serem fornecidas no caso individual."],
  ["Que créditos a moratória abrange? (art. 154)","Salvo disposição em contrário, só os <b>definitivamente constituídos à data da lei ou do despacho</b>, ou <b>cujo lançamento já tenha sido iniciado</b> àquela data por <b>ato regularmente notificado</b> ao sujeito passivo."],
  ["A moratória aproveita a quem agiu com fraude?","<b>NÃO</b> (art. 154, parágrafo único). Não aproveita aos casos de <b>DOLO, FRAUDE ou SIMULAÇÃO</b> do sujeito passivo ou de terceiro em benefício dele."],
  ["A moratória individual gera direito adquirido?","<b>NÃO</b> (art. 155). Será <b>revogada de ofício</b> sempre que se apure que o beneficiado <b>não satisfazia ou deixou de satisfazer</b> as condições, cobrando-se o crédito <b>acrescido de juros de mora</b>."],
  ["Revogada a moratória individual, cabe penalidade?","<b>COM penalidade</b> nos casos de <b>dolo ou simulação</b> do beneficiado ou de terceiro em benefício dele (inciso I); <b>SEM penalidade</b> nos demais casos (inciso II)."],
  ["Qual o efeito da revogação sobre a prescrição? (art. 155, p.ú.)","<b>Com dolo ou simulação (inciso I):</b> o tempo entre a concessão e a revogação <b>NÃO se computa</b> para a prescrição.<br><b>Sem dolo (inciso II):</b> a revogação <b>só pode ocorrer ANTES de prescrito</b> o direito."],

  ["O que é PARCELAMENTO? (art. 155-A)","Medida para que <b>devedores inadimplentes</b> consigam cumprir as obrigações. É concedido <b>na forma e condição estabelecidas em LEI ESPECÍFICA</b>."],
  ["O parcelamento exclui juros e multas?","<b>NÃO</b> — salvo disposição de lei em contrário, o parcelamento <b>não exclui a incidência de juros e multas</b> (art. 155-A, § 1º)."],
  ["Que regras se aplicam subsidiariamente ao parcelamento?","As da <b>MORATÓRIA</b> (art. 155-A, § 2º) — inclusive a ausência de direito adquirido e a revogação de ofício."],
  ["O que dizem os §§ 3º e 4º do art. 155-A?","<b>§ 3º:</b> <b>lei específica</b> disporá sobre o parcelamento do devedor em <b>recuperação judicial</b>. <b>§ 4º:</b> <b>inexistindo</b> essa lei, aplicam-se as <b>leis gerais</b> do ente, <b>não podendo o prazo ser INFERIOR ao concedido pela lei federal específica</b>."],
  ["Estado sem lei específica para recuperação judicial: qual o prazo mínimo?","O <b>não inferior ao da lei FEDERAL específica</b> de parcelamento do devedor em recuperação judicial (art. 155-A, § 4º)."],
  ["Pedir parcelamento e obter parcelamento têm o mesmo efeito?","<b>NÃO.</b> O <b>PEDIDO</b> do sujeito passivo <b>INTERROMPE a prescrição</b> (art. 174, p.ú., IV). A <b>CONCESSÃO</b> pela Fazenda <b>SUSPENDE a exigibilidade</b> (art. 151, VI)."],
  ["Suspensão × interrupção de prazo","<b>SUSPENSÃO:</b> removida a causa, o prazo <b>volta a fluir DE ONDE PAROU</b>.<br><b>INTERRUPÇÃO:</b> removida a causa, <b>despreza-se todo o tempo decorrido</b> e o prazo <b>recomeça do zero</b>."],

  ["Por que impugnar na via administrativa é vantajoso?","Porque a <b>instauração do processo administrativo SUSPENDE a exigibilidade</b> do crédito — a Fazenda não pode ajuizar execução fiscal até o fim do processo."],
  ["Decisão administrativa final favorável ao sujeito passivo: o que ocorre?","O crédito é <b>EXTINTO</b> (art. 156, IX)."],
  ["E se a decisão administrativa for desfavorável?","O crédito <b>volta a ser exigível</b>."],
  ["Na via JUDICIAL, o mero ajuizamento suspende o crédito?","<b>NÃO.</b> É preciso <b>depósito do montante integral</b> ou <b>liminar/tutela antecipada</b>. No âmbito <b>administrativo</b>, ao contrário, basta instaurar o processo."],
  ["Quais as duas hipóteses judiciais de suspensão?","<b>IV)</b> concessão de <b>medida liminar em MANDADO DE SEGURANÇA</b>; <b>V)</b> concessão de <b>liminar ou TUTELA ANTECIPADA em outras espécies de ação</b>."],
  ["Concedida a liminar, até quando dura a suspensão?","<b>Até a decisão final.</b> Favorável ao contribuinte → o crédito é <b>extinto</b> (art. 156, X). Favorável à Fazenda → o crédito <b>volta a ser exigível</b>."],
  ["Enquanto a liminar em MS não for cassada, o que o Fisco pode fazer?","<b>NADA quanto à execução.</b> Não importa o prazo decorrido: sem cassação por decisão judicial, a administração <b>não pode ajuizar a execução fiscal</b>."],

  ["O depósito do montante integral é obrigatório?","<b>NÃO</b> — é <b>direito subjetivo e FACULTATIVO</b> do contribuinte. Sem depositar ele pode contestar o lançamento no Judiciário do mesmo jeito; só <b>não terá a suspensão</b> da exigibilidade."],
  ["Onde pode ser feito o depósito?","Tanto na <b>via judicial</b> quanto na <b>administrativa</b> — embora nesta seja bastante atípico."],
  ["O que diz a Súmula 112 do STJ?","“O depósito <b>somente suspende</b> a exigibilidade do crédito tributário <b>se for INTEGRAL e EM DINHEIRO</b>.”"],
  ["Depósito parcial ou em fiança bancária suspende o crédito?","<b>NÃO</b> — a Súmula 112 do STJ exige <b>integral</b> e <b>em dinheiro</b>."],
  ["Decisão final favorável ao contribuinte: o que ocorre com o depósito?","Ele faz o <b>LEVANTAMENTO (resgate)</b> do depósito e o crédito é <b>extinto</b> (art. 156, X)."],
  ["Decisão final favorável à Fazenda: o que ocorre com o depósito?","O depósito é <b>CONVERTIDO EM RENDA</b> (art. 156, VI) e o crédito é <b>extinto</b>."],

  ["Quais são os três regimes do crédito tributário?","<b>SUSPENSÃO</b> (art. 151) · <b>EXTINÇÃO</b> (art. 156) · <b>EXCLUSÃO</b> (art. 175)."],
  ["O que caracteriza cada regime?","<b>Suspensão:</b> o Estado fica <b>temporariamente impedido</b> de cobrar. <b>Extinção:</b> crédito e débito são <b>satisfeitos</b>. <b>Exclusão:</b> o <b>lançamento nem chega a ser realizado</b>."],
  ["Quais as hipóteses de EXTINÇÃO? (art. 156)","<b>Pagamento · compensação · transação · remissão · prescrição e decadência · conversão de depósito em renda · homologação do lançamento · consignação em pagamento · decisão administrativa irreformável · decisão judicial passada em julgado · dação em pagamento em bens IMÓVEIS.</b>"],
  ["Quais as hipóteses de EXCLUSÃO? (art. 175)","<b>ISA: ISenção</b> e <b>Anistia</b> — apenas duas."],
  ["O que se interpreta literalmente? (art. 111)","<b>Suspensão</b> e <b>EXCLUSÃO</b> do crédito, <b>outorga de isenção</b> e <b>dispensa de obrigações acessórias</b>. A <b>EXTINÇÃO NÃO</b> está na lista."],
  ["Dispensa legal do pagamento DEPOIS do lançamento: o que é?","<b>REMISSÃO</b> — hipótese de <b>EXTINÇÃO</b>. Não é isenção (tributos) nem anistia (multas), que operam <b>antes</b> do lançamento."],
  ["Isenção × anistia × remissão","<b>Isenção:</b> exclui o <b>tributo</b>, antes do lançamento. <b>Anistia:</b> exclui a <b>multa</b>, antes do lançamento. <b>Remissão:</b> <b>extingue</b> o crédito já constituído. Há corrente minoritária que admite anistia de penalidades já lançadas."],
  ["Onde está a pegadinha clássica desse quadro?","Misturar as listas: colocar <b>parcelamento</b> na extinção, <b>remissão</b> na exclusão ou <b>isenção</b> na suspensão. As bancas fazem isso o tempo todo."],
  ["Reforma tributária: muda algo aqui?","A <b>EC 132/2023 não alterou os arts. 151 a 155-A</b> do CTN. A suspensão segue com as mesmas seis hipóteses; IBS e CBS terão regras próprias de cobrança na lei complementar."]
];

var QS = [
  ["A suspensão do crédito tributário impede temporariamente a Fazenda Pública de efetuar a cobrança do tributo.","C","FCC","A exigibilidade fica suspensa, mas o crédito permanece constituído."],
  ["São hipóteses de suspensão da exigibilidade do crédito tributário o depósito do montante integral, a moratória, as reclamações e recursos, a liminar e o parcelamento.","C","CTN art. 151","Mnemônico DEMORE a LIMPAR."],
  ["A suspensão da exigibilidade do crédito tributário dispensa o cumprimento das obrigações acessórias dependentes da obrigação principal.","E","CTN art. 151 p.ú.","Não dispensa — a acessória continua exigível."],
  ["A concessão de tutela antecipada em mandado de segurança é hipótese de suspensão da exigibilidade do crédito tributário.","E","FGV","Em mandado de segurança cabe <b>liminar</b>; a tutela antecipada é das outras espécies de ação."],
  ["A suspensão da exigibilidade extingue o crédito tributário.","E","CEBRASPE","Apenas suspende; cessada a causa, o crédito volta a ser exigível."],
  ["Moratória é o aumento do prazo para pagamento de tributo vencido ou por vencer.","C","FCC","Pode ser concedida em caráter geral ou individual."],
  ["A moratória em caráter geral é concedida por lei, ao passo que a individual é autorizada por lei e concedida por despacho da autoridade administrativa.","C","CTN art. 152","Distinção cobrada com frequência."],
  ["A moratória em caráter geral pode ser concedida pela pessoa jurídica de direito público competente para instituir o tributo.","C","CTN art. 152 I a","É a regra geral do dispositivo."],
  ["A União pode conceder moratória quanto a tributos dos Estados, do Distrito Federal e dos Municípios, desde que simultaneamente concedida quanto aos tributos federais e às obrigações de direito privado.","C","CTN art. 152 I b","É a hipótese excepcional, cobrada na literalidade."],
  ["Lei estadual pode conceder moratória quanto ao IPTU devido pelos contribuintes de determinado município atingido por calamidade.","E","FGV","Só o Município, competente para instituir o tributo, ou a União na hipótese do art. 152, I, b."],
  ["A lei concessiva de moratória pode circunscrever sua aplicabilidade a determinada região do território ou a determinada classe de sujeitos passivos.","C","CTN art. 152 p.ú.","Não há vício de isonomia nessa delimitação."],
  ["A lei que conceda moratória especificará o prazo de duração do favor e, sendo caso, os tributos a que se aplica e o número de prestações.","C","CTN art. 153","Além das condições e garantias na concessão individual."],
  ["Salvo disposição em contrário, a moratória abrange todos os créditos tributários, inclusive os cujo lançamento sequer tenha sido iniciado.","E","CTN art. 154","Só os definitivamente constituídos ou com lançamento iniciado e regularmente notificado."],
  ["A moratória não aproveita aos casos de dolo, fraude ou simulação do sujeito passivo ou de terceiro em benefício daquele.","C","CTN art. 154 p.ú.","Vedação absoluta."],
  ["A concessão de moratória em caráter individual gera direito adquirido ao beneficiado.","E","CTN art. 155","Não gera — será revogada de ofício se descumpridas as condições."],
  ["Revogada a moratória individual por dolo do beneficiado, cobra-se o crédito acrescido de juros de mora e com imposição da penalidade cabível.","C","CTN art. 155 I","Nos demais casos, cobra-se sem penalidade."],
  ["Havendo dolo ou simulação, o tempo decorrido entre a concessão da moratória e sua revogação não se computa para efeito da prescrição.","C","CTN art. 155 p.ú.","Nos demais casos, a revogação só pode ocorrer antes de prescrito o direito."],
  ["O parcelamento será concedido na forma e condição estabelecidas em lei específica.","C","CTN art. 155-A","Não basta a lei geral do ente."],
  ["Salvo disposição de lei em contrário, o parcelamento do crédito tributário exclui a incidência de juros e multas.","E","CTN art. 155-A § 1º","<b>Não</b> exclui — juros e multas continuam incidindo."],
  ["Aplicam-se subsidiariamente ao parcelamento as disposições do CTN relativas à moratória.","C","CTN art. 155-A § 2º","Inclusive a revogação de ofício e a ausência de direito adquirido."],
  ["Inexistindo lei específica sobre parcelamento do devedor em recuperação judicial, aplicam-se as leis gerais do ente, não podendo o prazo ser inferior ao concedido pela lei federal específica.","C","CTN art. 155-A § 4º","Piso federal de proteção ao devedor em recuperação."],
  ["O pedido de parcelamento formulado pelo sujeito passivo suspende o prazo prescricional para a Fazenda promover a cobrança.","E","CTN art. 174 p.ú. IV","O pedido <b>interrompe</b> a prescrição; a concessão é que suspende a exigibilidade."],
  ["Na suspensão do prazo, removida a causa, o prazo volta a fluir de onde parou; na interrupção, todo o período já decorrido é desprezado.","C","FCC","Distinção decisiva na contagem de prazos."],
  ["Sociedade que obteve parcelamento em sessenta parcelas e vem pagando tempestivamente tem a exigibilidade do crédito suspensa.","C","CTN art. 151 VI","Enquanto cumprido o parcelamento."],
  ["A instauração de processo administrativo de impugnação suspende a exigibilidade do crédito tributário.","C","CTN art. 151 III","Por isso a Fazenda não pode executar até o fim do processo."],
  ["Com a decisão administrativa final favorável ao sujeito passivo, o crédito tributário fica extinto.","C","CTN art. 156 IX","Decisão administrativa irreformável é causa de extinção."],
  ["Sendo a decisão administrativa desfavorável ao sujeito passivo, o crédito permanece com a exigibilidade suspensa até decisão judicial.","E","FGV","O crédito <b>volta a ser exigível</b>."],
  ["Na via judicial, o mero ajuizamento da ação suspende, por si só, a exigibilidade do crédito tributário.","E","CEBRASPE","É preciso depósito integral ou liminar/tutela antecipada."],
  ["Concedida liminar em mandado de segurança, a exigibilidade fica suspensa até a decisão final.","C","CTN art. 151 IV","Favorável ao contribuinte, extingue-se o crédito; favorável à Fazenda, ele volta a ser exigível."],
  ["Decorrido longo prazo sem cassação da liminar em mandado de segurança, a administração tributária pode ajuizar a execução fiscal.","E","FCC","Enquanto não cassada por decisão judicial, não pode — independentemente do prazo."],
  ["O depósito do montante integral é obrigatório para que o sujeito passivo conteste judicialmente o lançamento.","E","FGV","É facultativo; sem ele apenas não há suspensão da exigibilidade."],
  ["O depósito somente suspende a exigibilidade do crédito tributário se for integral e em dinheiro.","C","STJ Súmula 112","Depósito parcial ou fiança bancária não suspendem."],
  ["A apresentação de fiança bancária no valor integral do débito suspende a exigibilidade do crédito tributário.","E","STJ Súmula 112","A súmula exige depósito integral <b>e em dinheiro</b>."],
  ["Decidida a lide em favor do contribuinte, ele levanta o depósito e extingue-se o crédito tributário.","C","CTN art. 156 X","Extinção por decisão judicial passada em julgado."],
  ["Decidida a lide em favor da Fazenda Pública, o depósito é convertido em renda e o crédito tributário é extinto.","C","CTN art. 156 VI","A conversão de depósito em renda é hipótese de extinção."],
  ["O depósito do montante integral pode ser realizado tanto na via judicial quanto na administrativa.","C","FCC","Na via administrativa é possível, embora atípico."],
  ["São hipóteses de extinção do crédito tributário o pagamento, a compensação, a transação, a remissão, a prescrição e a decadência.","C","CTN art. 156","Entre outras do rol do artigo."],
  ["A dação em pagamento em bens móveis é hipótese de extinção do crédito tributário.","E","CTN art. 156 XI","Apenas em bens <b>imóveis</b>."],
  ["São hipóteses de exclusão do crédito tributário a isenção e a anistia.","C","CTN art. 175","Apenas essas duas — mnemônico ISA."],
  ["O parcelamento é hipótese de extinção do crédito tributário.","E","CEBRASPE","É hipótese de <b>suspensão</b> (art. 151, VI)."],
  ["A remissão é hipótese de exclusão do crédito tributário.","E","FGV","É hipótese de <b>extinção</b> (art. 156, IV)."],
  ["Na exclusão do crédito tributário, o lançamento sequer chega a ser realizado.","C","FCC","Por isso isenção e anistia operam antes da constituição do crédito."],
  ["Interpreta-se literalmente a legislação tributária que disponha sobre suspensão ou exclusão do crédito tributário.","C","CTN art. 111","A extinção não está na lista do artigo."],
  ["A dispensa legal do pagamento do tributo após o lançamento configura isenção.","E","FGV","Configura <b>remissão</b>, hipótese de extinção do crédito."],
  ["A isenção alcança o tributo e a anistia alcança a penalidade, ambas antes do lançamento.","C","FCC","Após o lançamento, a dispensa é remissão."],
  ["A moratória somente pode ser concedida em caráter geral.","E","CTN art. 152","Pode ser concedida também em caráter individual, por despacho autorizado por lei."],
  ["A revogação da moratória individual sem dolo do beneficiado só pode ocorrer antes de prescrito o direito de cobrança.","C","CTN art. 155 p.ú.","Havendo dolo, o período da moratória não se computa na prescrição."],
  ["Lei específica disporá sobre as condições de parcelamento dos créditos tributários do devedor em recuperação judicial.","C","CTN art. 155-A § 3º","Na sua falta, aplica-se o § 4º."],
  ["A concessão do parcelamento pela Fazenda Pública suspende a exigibilidade do crédito tributário.","C","CTN art. 151 VI","Enquanto o pedido apenas interrompe a prescrição."],
  ["A homologação do lançamento é hipótese de suspensão do crédito tributário.","E","CTN art. 156 VII","É hipótese de <b>extinção</b>."],
  ["A consignação em pagamento julgada procedente extingue o crédito tributário.","C","CTN art. 156 VIII","Está no rol do art. 156."],
  ["Suspensa a exigibilidade do crédito, o sujeito passivo fica desobrigado de emitir notas fiscais e escriturar livros.","E","CTN art. 151 p.ú.","As obrigações acessórias permanecem exigíveis."]
];

var EX = {
S1:{t:"wordbank", instr:"Monte o mnemônico das hipóteses de suspensão (art. 151)",
  target:["DEpósito","MOratória","REclamações","LIMinar","PARcelamento"],
  extra:["Isenção","Anistia","Remissão","Pagamento"],
  why:"DEMORE a LIMPAR — os distratores são hipóteses de exclusão e de extinção."},

S2:{t:"mc", instr:"Suspensa a exigibilidade do crédito, o sujeito passivo:",
  options:["Continua obrigado ao cumprimento das obrigações acessórias",
           "Fica dispensado de todas as obrigações tributárias",
           "Tem o crédito extinto",
           "Deixa de ser sujeito passivo"],
  answer:0,
  why:"Parágrafo único do art. 151 — a acessória é autônoma."},

S3:{t:"mc", instr:"Em qual medida judicial NÃO cabe tutela antecipada como causa de suspensão?",
  options:["No mandado de segurança — nele a hipótese é a liminar (art. 151, IV)",
           "Na ação anulatória de débito fiscal",
           "Na ação declaratória de inexistência de relação jurídica",
           "Na ação de consignação em pagamento"],
  answer:0,
  why:"Art. 151, IV, fala em liminar em MS; o inciso V é que trata de liminar OU tutela antecipada nas outras ações."},

S4:{t:"match", instr:"Como se concede cada espécie de moratória?",
  pairs:[["Caráter GERAL","Diretamente por LEI"],
         ["Caráter INDIVIDUAL","Autorizada por lei e concedida por DESPACHO da autoridade"]],
  why:"A individual, por isso mesmo, não gera direito adquirido."},

S5:{t:"multi", instr:"Marque quem pode conceder moratória em caráter geral (art. 152, I)",
  options:["A pessoa jurídica de direito público competente para instituir o tributo",
           "A União, quanto a tributos estaduais e municipais, se simultaneamente concedida quanto aos federais e às obrigações de direito privado",
           "O Estado, quanto a tributos dos Municípios nele situados",
           "O Município, quanto a tributos estaduais incidentes em seu território"],
  answers:[0,1],
  why:"Estado concedendo moratória de IPTU é inconstitucional."},

S6:{t:"mc", instr:"Assembleia estadual aprova lei concedendo moratória de IPTU a município atingido por chuvas. E daí?",
  options:["A lei é inválida — só o Município ou, excepcionalmente, a União poderiam",
           "A lei é válida, dada a calamidade pública",
           "A lei é válida se houver convênio com o Município",
           "A lei é válida apenas quanto às multas"],
  answer:0,
  why:"Moratória segue a competência para instituir o tributo."},

S7:{t:"multi", instr:"Marque o que a lei de moratória deve especificar (art. 153)",
  options:["O prazo de duração do favor",
           "As condições da concessão em caráter individual",
           "Sendo o caso, os tributos a que se aplica e o número de prestações",
           "Sendo o caso, as garantias exigidas na concessão individual",
           "O nome dos beneficiários"],
  answers:[0,1,2,3],
  why:"A lei geral não nomeia beneficiários — ela fixa critérios."},

S8:{t:"gap", instr:"Complete o art. 154, parágrafo único",
  before:"A moratória não aproveita aos casos de ",
  after:" do sujeito passivo ou do terceiro em benefício daquele.",
  options:["dolo, fraude ou simulação","erro escusável","mora acidental"], answer:0,
  why:"A mesma tríade reaparece na homologação tácita e na revogação da moratória."},

S9:{t:"sort", instr:"Revogada a moratória individual: com ou sem penalidade?",
  buckets:["COM penalidade","SEM penalidade"],
  items:[["Dolo do beneficiado",0],["Simulação de terceiro em benefício do beneficiado",0],
         ["Descumprimento de condição sem dolo",1]],
  why:"Em ambos os casos cobra-se o crédito acrescido de juros de mora."},

S10:{t:"sort", instr:"Efeito da revogação da moratória sobre a prescrição",
  buckets:["Com dolo ou simulação","Sem dolo"],
  items:[["O tempo da moratória NÃO se computa na prescrição",0],
         ["A revogação só pode ocorrer antes de prescrito o direito",1]],
  why:"Parágrafo único do art. 155 — a má-fé não beneficia quem a pratica."},

S11:{t:"mc", instr:"O parcelamento do crédito tributário, salvo disposição de lei em contrário:",
  options:["Não exclui a incidência de juros e multas",
           "Exclui juros e multas",
           "Exclui apenas as multas",
           "Exclui apenas os juros"],
  answer:0,
  why:"Art. 155-A, § 1º — parcelar não é perdoar."},

S12:{t:"mc", instr:"Estado sem lei específica de parcelamento para devedor em recuperação judicial. Qual o prazo?",
  options:["Não inferior ao concedido pela lei federal específica",
           "O da lei geral estadual, sem piso",
           "Vedado o parcelamento nesse caso",
           "Fixado livremente pela autoridade fazendária"],
  answer:0,
  why:"Art. 155-A, § 4º — a lei federal funciona como piso."},

S13:{t:"sort", instr:"Pedido ou concessão do parcelamento?",
  buckets:["PEDIDO do sujeito passivo","CONCESSÃO pela Fazenda"],
  items:[["Interrompe o prazo prescricional",0],
         ["Suspende a exigibilidade do crédito",1]],
  why:"Dois atos, dois efeitos distintos — art. 174, p.ú., IV, e art. 151, VI."},

S14:{t:"match", instr:"Suspensão ou interrupção de prazo?",
  pairs:[["Suspensão","Removida a causa, o prazo volta a fluir de onde parou"],
         ["Interrupção","Removida a causa, despreza-se o tempo decorrido e o prazo recomeça"]],
  why:"Confundir os dois muda completamente a contagem."},

S15:{t:"sort", instr:"Via administrativa ou via judicial?",
  buckets:["Basta instaurar o processo","Exige depósito integral ou liminar"],
  items:[["Impugnação administrativa do lançamento",0],
         ["Ação anulatória na justiça",1],["Mandado de segurança sem liminar",1]],
  why:"O mero ajuizamento da ação não suspende a exigibilidade."},

S16:{t:"sort", instr:"Decisão final: qual o destino do crédito?",
  buckets:["Crédito EXTINTO","Crédito volta a ser EXIGÍVEL"],
  items:[["Decisão administrativa final favorável ao sujeito passivo",0],
         ["Decisão judicial transitada em julgado a favor do contribuinte",0],
         ["Decisão administrativa desfavorável ao sujeito passivo",1],
         ["Liminar cassada em favor da Fazenda",1]],
  why:"Suspender nunca é decidir — a sorte do crédito depende do mérito."},

S17:{t:"gap", instr:"Complete a Súmula 112 do STJ",
  before:"O depósito somente suspende a exigibilidade do crédito tributário se for ",
  after:".",
  options:["integral e em dinheiro","integral, ainda que em fiança bancária","parcial e em dinheiro"], answer:0,
  why:"Fiança bancária e seguro-garantia não suspendem a exigibilidade."},

S18:{t:"multi", instr:"Marque o que é correto sobre o depósito do montante integral",
  options:["É direito subjetivo do contribuinte","É facultativo",
           "Pode ser feito na via judicial ou na administrativa",
           "Sem ele o contribuinte não pode contestar o lançamento no Judiciário"],
  answers:[0,1,2],
  why:"Sem depósito ele contesta do mesmo jeito — só não terá a suspensão."},

S19:{t:"sort", instr:"O que acontece com o depósito ao final?",
  buckets:["Decisão a favor do CONTRIBUINTE","Decisão a favor da FAZENDA"],
  items:[["Levantamento do depósito pelo contribuinte",0],
         ["Conversão do depósito em renda",1]],
  why:"Nos dois casos o crédito se extingue — o que muda é para onde vai o dinheiro."},

S20:{t:"sort", instr:"Suspensão, extinção ou exclusão?",
  buckets:["Suspensão (art. 151)","Extinção (art. 156)","Exclusão (art. 175)"],
  items:[["Moratória",0],["Parcelamento",0],["Depósito do montante integral",0],["Liminar",0],
         ["Pagamento",1],["Compensação",1],["Remissão",1],["Prescrição e decadência",1],
         ["Isenção",2],["Anistia",2]],
  why:"Misturar as três listas é a pegadinha mais frequente de todo o Título III."},

S21:{t:"match", instr:"Ligue cada instituto ao seu efeito e momento",
  pairs:[["Isenção","Exclui o TRIBUTO, antes do lançamento"],
         ["Anistia","Exclui a MULTA, antes do lançamento"],
         ["Remissão","EXTINGUE o crédito já constituído"]],
  why:"Dispensa legal depois do lançamento é sempre remissão."},

S22:{t:"multi", instr:"Marque o que se interpreta LITERALMENTE (art. 111)",
  options:["Suspensão do crédito tributário","Exclusão do crédito tributário",
           "Outorga de isenção","Dispensa de obrigações acessórias",
           "Extinção do crédito tributário"],
  answers:[0,1,2,3],
  why:"A extinção é a intrusa — e a troca por “exclusão” é a pegadinha do artigo."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Suspensão e moratória",
      '<div class="box"><span class="bl">O que é suspender</span>'+
      '<p>A Fazenda fica <b>temporariamente IMPEDIDA de cobrar</b>. O crédito <b>continua existindo</b> e constituído — o que fica paralisada é a <b>exigibilidade</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Art. 151 — DEMORE a LIMPAR</span>'+
      '<p><b>DE</b>pósito do montante integral · <b>MO</b>ratória · <b>RE</b>clamações e recursos · <b>LIM</b>inar ou tutela antecipada · <b>PAR</b>celamento.</p>'+
      '<p><b>Parágrafo único:</b> a suspensão <b>NÃO dispensa</b> o cumprimento das <b>obrigações acessórias</b>.</p>'+
      '<p class="mn"><em>Em <b>mandado de segurança</b> cabe <b>liminar</b>; <b>tutela antecipada</b> só nas <b>outras espécies de ação</b>.</em></p></div>'+
      '<div class="box"><span class="bl">Moratória — art. 152</span>'+
      '<p><b>É o aumento do prazo</b> para pagar tributo <b>vencido ou por vencer</b>.</p>'+
      '<p><b>GERAL:</b> concedida <b>por LEI</b>.<br><b>INDIVIDUAL:</b> <b>autorizada por lei</b> e concedida por <b>DESPACHO</b> da autoridade.</p>'+
      '<p><b>Quem pode conceder a geral:</b> <b>a)</b> a pessoa jurídica <b>competente para instituir</b> o tributo; <b>b)</b> a <b>UNIÃO</b>, quanto a tributos estaduais e municipais, <b>quando simultaneamente</b> concedida quanto aos federais e às <b>obrigações de direito privado</b>.</p>'+
      '<p class="mn"><em>Logo, <b>lei estadual jamais concede moratória de IPTU</b> — nem em calamidade.</em></p>'+
      '<p><b>Parágrafo único:</b> a lei pode <b>circunscrever</b> a moratória a uma <b>região</b> ou a uma <b>classe de sujeitos passivos</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Arts. 153 a 155 — o resto da moratória</span>'+
      '<p><b>153 — a lei especifica:</b> <b>prazo de duração</b> · <b>condições</b> da concessão individual · sendo o caso, <b>tributos alcançados</b>, <b>número de prestações e vencimentos</b> e <b>garantias</b>.</p>'+
      '<p><b>154 — alcance:</b> salvo disposição em contrário, só os créditos <b>definitivamente constituídos</b> à data da lei ou do despacho, ou com <b>lançamento já iniciado</b> e regularmente notificado. <b>Não aproveita</b> a casos de <b>DOLO, FRAUDE ou SIMULAÇÃO</b>.</p>'+
      '<p><b>155 — revogação:</b> a moratória individual <b>NÃO gera direito adquirido</b>; é <b>revogada de ofício</b>, cobrando-se o crédito <b>com juros de mora</b>, <b>COM penalidade</b> se houve <b>dolo ou simulação</b> e <b>SEM penalidade</b> nos demais casos.</p>'+
      '<p><b>Efeito na prescrição:</b> havendo <b>dolo</b>, o tempo da moratória <b>não se computa</b>; <b>sem dolo</b>, a revogação <b>só cabe antes de prescrito</b> o direito.</p></div>'),
    sl("Parcelamento, processo administrativo, liminar e depósito",
      '<div class="box"><span class="bl">Parcelamento — art. 155-A</span>'+
      '<p>Concedido <b>na forma e condição de LEI ESPECÍFICA</b>. Salvo disposição em contrário, <b>NÃO exclui juros e multas</b> (§ 1º). Aplicam-se-lhe <b>subsidiariamente as regras da MORATÓRIA</b> (§ 2º).</p>'+
      '<p><b>Recuperação judicial:</b> <b>lei específica</b> disporá sobre as condições (§ 3º); <b>na sua falta</b>, valem as leis gerais do ente, com prazo <b>não inferior ao da lei FEDERAL específica</b> (§ 4º).</p></div>'+
      '<div class="box trap"><span class="bl">Pedido × concessão, suspensão × interrupção</span>'+
      '<p>O <b>PEDIDO</b> de parcelamento pelo sujeito passivo <b>INTERROMPE a prescrição</b> (art. 174, p.ú., IV).<br>'+
      'A <b>CONCESSÃO</b> pela Fazenda <b>SUSPENDE a exigibilidade</b> (art. 151, VI).</p>'+
      '<p><b>SUSPENSÃO:</b> removida a causa, o prazo <b>volta de onde parou</b>.<br>'+
      '<b>INTERRUPÇÃO:</b> removida a causa, <b>despreza-se tudo</b> e o prazo <b>recomeça do zero</b>.</p></div>'+
      '<div class="box"><span class="bl">Reclamações e recursos — art. 151, III</span>'+
      '<p>Instaurado o <b>processo administrativo</b>, a exigibilidade <b>já fica suspensa</b>: a Fazenda <b>não pode executar</b> até o fim.</p>'+
      '<p><b>Decisão final favorável ao sujeito passivo</b> → crédito <b>EXTINTO</b> (art. 156, IX).<br>'+
      '<b>Desfavorável</b> → crédito <b>volta a ser exigível</b>.</p>'+
      '<p class="mn"><em>Na via <b>JUDICIAL</b> é diferente: o <b>mero ajuizamento não suspende</b> nada. É preciso <b>depósito integral</b> ou <b>liminar</b>.</em></p></div>'+
      '<div class="box"><span class="bl">Liminar e tutela antecipada — art. 151, IV e V</span>'+
      '<p>Concedida, a exigibilidade fica suspensa <b>até a decisão final</b>: a favor do <b>contribuinte</b> → crédito <b>extinto</b> (art. 156, X); a favor da <b>Fazenda</b> → crédito <b>volta a ser exigível</b>.</p>'+
      '<p class="mn"><em>Enquanto a liminar <b>não for cassada por decisão judicial</b> — <b>não importa o prazo decorrido</b> — a administração <b>não pode ajuizar a execução fiscal</b>.</em></p></div>'+
      '<div class="box trap"><span class="bl">Depósito do montante integral — art. 151, II</span>'+
      '<p>É <b>direito subjetivo</b> e <b>FACULTATIVO</b>. Sem depositar, o contribuinte <b>contesta o lançamento do mesmo jeito</b> — só <b>não terá a suspensão</b>.</p>'+
      '<p><b>STJ, Súmula 112:</b> “O depósito somente suspende a exigibilidade do crédito tributário se for <b>INTEGRAL e EM DINHEIRO</b>.” Fiança bancária e depósito parcial <b>não servem</b>.</p>'+
      '<p><b>Ao final:</b> vencendo o <b>contribuinte</b>, ele <b>levanta</b> o depósito e o crédito se extingue (art. 156, X); vencendo a <b>Fazenda</b>, o depósito é <b>convertido em renda</b> (art. 156, VI) e o crédito também se extingue.</p></div>')
  ],
  V2:[
    sl("Suspensão × extinção × exclusão",
      '<div class="box"><span class="bl">Três regimes, três artigos</span>'+
      '<p><b>SUSPENSÃO — art. 151:</b> o Estado fica <b>temporariamente impedido</b> de cobrar.<br>'+
      '<b>EXTINÇÃO — art. 156:</b> crédito e débito são <b>satisfeitos</b>.<br>'+
      '<b>EXCLUSÃO — art. 175:</b> o <b>lançamento nem chega a ser realizado</b>.</p></div>'+
      '<div class="box"><span class="bl">As listas completas</span>'+
      '<p><b>SUSPENSÃO (DEMORE a LIMPAR):</b> depósito integral · moratória · reclamações e recursos · liminar ou tutela antecipada · parcelamento.</p>'+
      '<p><b>EXTINÇÃO:</b> pagamento · compensação · transação · remissão · <b>prescrição e decadência</b> · conversão de depósito em renda · homologação do lançamento · consignação em pagamento · <b>decisão administrativa irreformável</b> · <b>decisão judicial passada em julgado</b> · <b>dação em pagamento em bens IMÓVEIS</b>.</p>'+
      '<p><b>EXCLUSÃO (ISA):</b> <b>IS</b>enção e <b>A</b>nistia.</p></div>'+
      '<div class="box trap"><span class="bl">Onde a banca ataca</span>'+
      '<p><b>1)</b> Misturar as listas: <b>parcelamento</b> na extinção, <b>remissão</b> na exclusão, <b>homologação do lançamento</b> na suspensão. Todas erradas.</p>'+
      '<p><b>2)</b> <b>Dação em pagamento</b>: só em <b>bens IMÓVEIS</b>. Trocar por móveis erra a assertiva.</p>'+
      '<p><b>3)</b> <b>Art. 111:</b> interpreta-se literalmente <b>suspensão</b> e <b>EXCLUSÃO</b> — a <b>extinção NÃO</b> está na lista.</p></div>'+
      '<div class="box tip"><span class="bl">Isenção, anistia e remissão — a linha do tempo</span>'+
      '<p><b>ANTES do lançamento:</b> <b>ISENÇÃO</b> (afasta o <b>tributo</b>) e <b>ANISTIA</b> (afasta a <b>multa</b>) — ambas <b>excluem</b> o crédito.</p>'+
      '<p><b>DEPOIS do lançamento:</b> a dispensa legal do pagamento é <b>REMISSÃO</b> — hipótese de <b>EXTINÇÃO</b>, nunca de exclusão.</p>'+
      '<p class="mn"><em>Há corrente minoritária que admite a anistia também de penalidades já lançadas — mas para prova vale a regra acima.</em></p></div>'+
      '<div class="box"><span class="bl">Reforma tributária</span>'+
      '<p>A <b>EC 132/2023 não alterou os arts. 151 a 155-A</b> do CTN. A suspensão segue com as mesmas seis hipóteses; IBS e CBS terão regras próprias de cobrança em lei complementar.</p></div>')
  ]
};

var TEC = [
  ["Caderno CEBRASPE — Direito Tributário 09","https://www.tecconcursos.com.br/s/Q2gvBl","Q2gvBl"],
  ["Caderno FCC — Direito Tributário 09","https://www.tecconcursos.com.br/s/Q2gvBv","Q2gvBv"],
  ["Caderno FGV — Direito Tributário 09","https://www.tecconcursos.com.br/s/Q2gvC5","Q2gvC5"],
  ["Caderno VUNESP — Direito Tributário 09","https://www.tecconcursos.com.br/s/Q2gvCO","Q2gvCO"]
];
var TECNOTA = "Priorize o caderno da FGV — banca do último certame da Receita Federal. Duas observações sobre este módulo. PRIMEIRA: o resumo de origem trata da moratória mas pula os arts. 153, 154 e 155 (requisitos da lei, alcance e revogação da moratória individual), que são muito cobrados — completei essa parte a partir do texto do CTN, e ela está nos flashcards e nos exercícios da unidade 2. SEGUNDA: o resumo cita “art. 151” nos quadros da moratória, mas a matéria está no art. 152; usei a numeração correta. Fora isso, o que decide questão aqui é não misturar as três listas — suspensão (art. 151), extinção (art. 156) e exclusão (art. 175) — e lembrar a Súmula 112 do STJ: depósito só suspende se integral E em dinheiro. A EC 132/2023 não alterou esses artigos.";

var UNITS = [
  {n:1, title:"Suspensão e moratória", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Art. 151, moratória e os arts. 152 a 155", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · as seis hipóteses do art. 151", xp:25, data:["S1","S2","T0","T1","T2","T3","T4"]},
    {id:"K3", type:"drill",  title:"Praticar · moratória geral e individual", xp:25, data:["S4","S5","S6","T5","T6","T7","T8","T9","T10","T45"]},
    {id:"K4", type:"drill",  title:"Praticar · requisitos, alcance e revogação", xp:25, data:["S7","S8","S9","S10","T11","T12","T13","T14","T15","T16","T46"]},
    {id:"K5", type:"flash",  title:"Flashcards · suspensão e moratória",     xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}
  ]},
  {n:2, title:"Parcelamento", cvar:"u2", lessons:[
    {id:"K6", type:"drill",  title:"Praticar · lei específica e juros",      xp:25, data:["S11","S12","T17","T18","T19","T20","T47"]},
    {id:"K7", type:"drill",  title:"Praticar · pedido × concessão",          xp:25, data:["S13","S14","T21","T22","T23","T48"]},
    {id:"K8", type:"flash",  title:"Flashcards · parcelamento",              xp:15, data:[16,17,18,19,20,21,22]}
  ]},
  {n:3, title:"Processo administrativo e via judicial", cvar:"u3", lessons:[
    {id:"K9", type:"drill",  title:"Praticar · reclamações e recursos",      xp:25, data:["S15","S16","T24","T25","T26","T27"]},
    {id:"K10",type:"drill",  title:"Praticar · liminar e tutela antecipada", xp:25, data:["S3","T28","T29"]},
    {id:"K11",type:"flash",  title:"Flashcards · processo e liminar",        xp:15, data:[23,24,25,26,27,28,29]}
  ]},
  {n:4, title:"Depósito do montante integral", cvar:"u4", lessons:[
    {id:"K12",type:"drill",  title:"Praticar · a Súmula 112 do STJ",         xp:25, data:["S17","S18","S19","T30","T31","T32","T33","T34","T35"]},
    {id:"K13",type:"flash",  title:"Flashcards · depósito integral",         xp:15, data:[30,31,32,33,34,35]}
  ]},
  {n:5, title:"Suspensão × extinção × exclusão", cvar:"u5", lessons:[
    {id:"K14",type:"teoria", title:"As três listas e a linha do tempo",      xp:10, data:"V2"},
    {id:"K15",type:"drill",  title:"Praticar · classificar cada hipótese",   xp:25, data:["S20","T36","T37","T38","T39","T40","T49","T50","T51"]},
    {id:"K16",type:"drill",  title:"Praticar · isenção, anistia e remissão", xp:25, data:["S21","S22","T41","T42","T43","T44"]},
    {id:"K17",type:"flash",  title:"Flashcards · os três regimes",           xp:15, data:[36,37,38,39,40,41,42,43,44]}
  ]},
  {n:6, title:"Fixação", cvar:"u1", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                xp:60, data:null},
    {id:"K18", type:"missao", title:"Missão TEC Concursos",                  xp:15, data:null},
    {id:"K19", type:"prova",  title:"Simulado cronometrado",                 xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo. A ideia central do Resumo: a suspensão faz com que o Estado, por meio da sua Administração Tributária, fique <b>impedido temporariamente de efetuar a cobrança</b> dos tributos — a <b>exigibilidade</b> do crédito fica suspensa.</p><p>Repare: o crédito continua existindo (não é extinto); apenas não pode ser exigido enquanto durar a causa.</p><p class='fb-fonte'>Resumo 09 · <i>Suspensão do crédito tributário</i></p>",
1:"<p>Certo — são as seis hipóteses do art. 151, reunidas no mnemônico do Resumo: <b>DEMORE a LIMPAR</b>.</p><p><b>DE</b>pósito do montante integral · <b>MO</b>ratória · <b>RE</b>clamações e <b>RE</b>cursos · <b>LIM</b>inar ou tutela antecipada · <b>PAR</b>celamento.</p><p class='fb-fonte'>Resumo 09 · <i>Mnemônico DEMORE a LIMPAR — art. 151</i></p>",
2:"<p>Errado. Observação 2 do Resumo ao art. 151: a suspensão do crédito tributário <b>não dispensa o cumprimento das obrigações acessórias</b>.</p><p>A obrigação principal fica com a exigibilidade suspensa; escriturar, declarar e emitir documentos continua obrigatório.</p><p class='fb-fonte'>Resumo 09 · <i>CTN — art. 151, parágrafo único</i></p>",
3:"<p>Errado. É a Observação 1 do Resumo: cabe <b>liminar</b> em mandado de segurança, mas <b>não cabe tutela antecipada</b> (antecipação dos efeitos) em MS — a tutela antecipada só nas <b>outras espécies de ação judicial</b>.</p><p>O art. 151 separa: inciso IV (liminar em MS) e inciso V (liminar ou tutela antecipada em outras ações).</p><p class='fb-fonte'>Resumo 09 · <i>CTN — art. 151, IV e V</i></p>",
4:"<p>Errado — confusão entre os três institutos do quadro comparativo do Resumo.</p><p><b>Suspensão</b> (art. 151): o Estado fica impedido <b>temporariamente</b> de cobrar.<br><b>Extinção</b> (art. 156): o crédito da Fazenda e o débito do sujeito passivo são satisfeitos.<br><b>Exclusão</b> (art. 175): o lançamento sequer chega a ser realizado.</p><p class='fb-fonte'>Resumo 09 · <i>Suspensão x Extinção x Exclusão</i></p>",
5:"<p>Certo — é a definição do Resumo: moratória é o <b>aumento do prazo para pagamento</b> de um tributo <b>vencido ou por vencer</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Moratória — o que é</i></p>",
6:"<p>Certo, e o quadro ATENÇÃO do Resumo formula exatamente assim:</p><p>Moratória em caráter <b>GERAL</b> → concedida <b>por lei</b>.<br>Moratória em caráter <b>INDIVIDUAL</b> → <b>autorizada por lei</b> e <b>concedida por despacho</b> da autoridade administrativa.</p><p class='fb-fonte'>Resumo 09 · <i>ATENÇÃO — moratória geral x individual</i></p>",
7:"<p>Certo. No esquema do Resumo, a moratória em caráter geral pode ser concedida <b>pela pessoa jurídica de direito público competente para instituir o tributo</b>.</p><p>Quem pode instituir, pode postergar o prazo de pagamento.</p><p class='fb-fonte'>Resumo 09 · <i>Moratória em caráter geral — inciso I</i></p>",
8:"<p>Certo — é a moratória <b>heterônoma</b>, segunda alínea do esquema do Resumo.</p><p>A União pode conceder moratória quanto a tributos de competência dos Estados, do DF ou dos Municípios <b>quando simultaneamente concedida quanto aos tributos de competência federal e às obrigações de direito privado</b>.</p><p>Os requisitos são cumulativos — é uma hipótese excepcionalíssima.</p><p class='fb-fonte'>Resumo 09 · <i>Moratória em caráter geral — inciso I, alínea b</i></p>",
9:"<p>Errado — é o exemplo de Petrópolis, no Resumo.</p><p>Lei estadual do RJ concedendo moratória de <b>IPTU</b> aos contribuintes de Petrópolis: o material conclui que a lei estadual <b>não pode, em nenhuma hipótese</b>, fazê-lo. Só poderiam:</p><p>· o <b>Município de Petrópolis</b>, competente para instituir o IPTU; ou<br>· a <b>União</b>, na hipótese da moratória heterônoma (simultânea aos tributos federais e às obrigações de direito privado).</p><p class='fb-fonte'>Resumo 09 · <i>Moratória — exemplo de Petrópolis</i></p>",
10:"<p>Certo. O Resumo transcreve a regra: a lei concessiva de moratória pode <b>circunscrever expressamente</b> sua aplicabilidade a determinada <b>região do território</b> da pessoa jurídica de direito público que a expedir, ou a determinada <b>classe ou categoria de sujeitos passivos</b>.</p><p>É uma exceção tolerada à generalidade — e cai muito.</p><p class='fb-fonte'>Resumo 09 · <i>Moratória — delimitação por região ou categoria</i></p>",
11:"<p>Certo pela letra do art. 153 do CTN: a lei que conceda moratória em caráter geral, ou autorize sua concessão individual, especificará o <b>prazo de duração do favor</b>, as <b>condições</b>, e, sendo caso, os <b>tributos</b> a que se aplica, o <b>número de prestações</b> e seus vencimentos, e as <b>garantias</b> exigidas.</p><p class='fb-fonte off'>Não consta do Resumo 09 — o material trata da moratória pelo art. 152 (caráter geral e individual) e pelo parágrafo único; os arts. 153 a 155 ficam fora do resumo. Conteúdo trazido da letra do CTN.</p>",
12:"<p>Errado. Pelo art. 154 do CTN, salvo disposição em contrário, a moratória <b>só abrange os créditos definitivamente constituídos à data da lei ou do despacho</b>, ou aqueles cujo lançamento já tenha sido <b>iniciado</b> por ato regularmente notificado ao sujeito passivo.</p><p>Crédito cujo lançamento nem começou não é alcançado.</p><p class='fb-fonte off'>Não consta do Resumo 09 — art. 154 do CTN, fora do recorte do material, que cobre a moratória pelo art. 152.</p>",
13:"<p>Certo, art. 154, parágrafo único: a moratória <b>não aproveita aos casos de dolo, fraude ou simulação</b> do sujeito passivo ou de terceiro em benefício daquele.</p><p>É o mesmo princípio que aparece no Resumo a propósito do art. 150, § 4º: dolo, fraude ou simulação afastam o benefício.</p><p class='fb-fonte off'>Não consta do Resumo 09 — art. 154, parágrafo único, do CTN.</p>",
14:"<p>Errado. O art. 155 do CTN é expresso: a concessão da moratória em caráter individual <b>não gera direito adquirido</b> e será revogada de ofício sempre que se apure que o beneficiado não satisfazia ou deixou de satisfazer as condições.</p><p class='fb-fonte off'>Não consta do Resumo 09 — art. 155 do CTN. O material trata do caráter individual apenas quanto à forma de concessão (despacho autorizado por lei).</p>",
15:"<p>Certo, art. 155, I do CTN: havendo <b>dolo ou simulação</b> do beneficiado (ou de terceiro em benefício dele), cobra-se o crédito com <b>juros de mora</b> e <b>imposição da penalidade cabível</b>.</p><p>Sem dolo (inciso II), cobra-se apenas com juros de mora, sem penalidade.</p><p class='fb-fonte off'>Não consta do Resumo 09 — art. 155, I, do CTN.</p>",
16:"<p>Certo, art. 155, parágrafo único do CTN: no caso do inciso I (<b>dolo ou simulação</b>), o tempo decorrido entre a concessão da moratória e sua revogação <b>não se computa</b> para efeito da prescrição do direito à cobrança do crédito.</p><p class='fb-fonte off'>Não consta do Resumo 09 — art. 155, parágrafo único, do CTN.</p>",
17:"<p>Certo, art. 155-A, transcrito no Resumo: o parcelamento será concedido na <b>forma e condição estabelecidas em lei específica</b>.</p><p>O material define o instituto como medida criada para que os <b>devedores inadimplentes</b> tenham condições de cumprir suas obrigações tributárias.</p><p class='fb-fonte'>Resumo 09 · <i>Parcelamento — art. 155-A</i></p>",
18:"<p>Errado — inverteu. O Resumo é explícito: o parcelamento do crédito tributário <b>não exclui a incidência de juros e multas</b>.</p><p>Quem paga parcelado paga com os acréscimos; para dispensá-los seria preciso lei específica dizendo o contrário.</p><p class='fb-fonte'>Resumo 09 · <i>Parcelamento — art. 155-A, § 1º</i></p>",
19:"<p>Certo pela letra do art. 155-A, § 2º: aplicam-se <b>subsidiariamente</b> ao parcelamento as disposições do CTN relativas à <b>moratória</b>.</p><p>Faz sentido: o parcelamento é, na essência, uma moratória fracionada — daí o CTN reaproveitar aquelas regras.</p><p class='fb-fonte off'>Não consta do Resumo 09 — art. 155-A, § 2º, do CTN. O material transcreve apenas os §§ 3º e 4º e a regra dos juros e multas.</p>",
20:"<p>Certo — § 4º, transcrito no Resumo, e ilustrado pelo exemplo de <b>Roraima</b>.</p><p>Estado com lei geral de parcelamento, mas sem lei específica para devedor em <b>recuperação judicial</b>: aplicam-se as leis gerais do ente, e o prazo <b>não pode ser inferior ao concedido pela lei federal específica</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Art. 155-A, § 4º — exemplo de Roraima</i></p>",
21:"<p>Errado: o efeito é <b>interromper</b>, não suspender.</p><p>O quadro ATENÇÃO do Resumo separa os dois momentos:</p><p>· <b>Pedido</b> de parcelamento pelo sujeito passivo → <b>interrompe</b> a prescrição (art. 174, parágrafo único, IV).<br>· <b>Concessão</b> do parcelamento pela Fazenda → <b>suspende</b> a exigibilidade do crédito (art. 151, VI).</p><p class='fb-fonte'>Resumo 09 · <i>ATENÇÃO — pedido x concessão do parcelamento</i></p>",
22:"<p>Certo — quadro comparativo do Resumo:</p><p><b>SUSPENSÃO</b>: removida a causa, o prazo <b>volta a fluir de onde parou</b>.<br><b>INTERRUPÇÃO</b>: removida a causa, todo o período já decorrido é <b>desprezado</b> e o prazo prescricional <b>recomeça do zero</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Suspensão x interrupção de prazo</i></p>",
23:"<p>Certo — é o exemplo da pessoa jurídica ABC no Resumo.</p><p>IR de 2020 não recolhido; parcelamento em <b>60 parcelas</b> deferido pela União em 2021; parcelas pagas tempestivamente. A exigibilidade do crédito <b>está suspensa</b> em razão do parcelamento (art. 151, VI).</p><p class='fb-fonte'>Resumo 09 · <i>Parcelamento — exemplo das 60 parcelas</i></p>",
24:"<p>Certo. O Resumo destaca essa como a principal vantagem da via administrativa: optando por impugnar administrativamente, o sujeito passivo goza da <b>suspensão da exigibilidade do crédito tributário</b>.</p><p>No exemplo do material, apresentada a impugnação ao auto de infração, a Fazenda <b>não pode ajuizar execução fiscal</b> até o final do processo administrativo.</p><p class='fb-fonte'>Resumo 09 · <i>Reclamações e recursos administrativos — art. 151, III</i></p>",
25:"<p>Certo. Decisão administrativa final <b>favorável ao sujeito passivo</b> → o crédito tributário fica <b>extinto</b> (art. 156, IX — decisão administrativa irreformável).</p><p class='fb-fonte'>Resumo 09 · <i>Processo administrativo — desfecho favorável</i></p>",
26:"<p>Errado. O Resumo diz o contrário: se a decisão administrativa for <b>desfavorável</b> ao sujeito passivo, <b>o crédito volta a ser exigível</b>.</p><p>Para segurar a cobrança na via judicial ele precisará de outra causa suspensiva — liminar ou depósito integral, por exemplo.</p><p class='fb-fonte'>Resumo 09 · <i>Processo administrativo — desfecho desfavorável</i></p>",
27:"<p>Errado — quadro ATENÇÃO do Resumo.</p><p>Na <b>via judicial</b>, o mero ajuizamento da ação <b>não suspende</b>, por si só, a exigência do crédito: é preciso o <b>depósito do montante</b> exigido (art. 151, II) ou uma liminar.</p><p>Na <b>via administrativa</b>, é diferente: instaurado o processo, a exigência já fica suspensa.</p><p class='fb-fonte'>Resumo 09 · <i>ATENÇÃO — via judicial x administrativa</i></p>",
28:"<p>Certo. Concedida a liminar, a exigibilidade fica suspensa <b>até a decisão final</b>, que pode ser:</p><p>· em favor do <b>contribuinte</b> → extingue-se o crédito (art. 156, X);<br>· em favor da <b>Fazenda</b> → o crédito volta a ser exigível.</p><p class='fb-fonte'>Resumo 09 · <i>Liminar em MS — art. 151, IV</i></p>",
29:"<p>Errado. Quadro ATENÇÃO do Resumo: enquanto a liminar em mandado de segurança <b>não for cassada</b> por decisão judicial, <b>não importando o prazo</b>, a administração tributária <b>não poderá</b> providenciar o ajuizamento da execução fiscal.</p><p>O decurso do tempo, por si só, não devolve a exigibilidade.</p><p class='fb-fonte'>Resumo 09 · <i>ATENÇÃO — liminar não cassada</i></p>",
30:"<p>Errado. O Resumo é claro: o depósito é <b>facultativo</b> e constitui <b>direito subjetivo do contribuinte</b>.</p><p>Mesmo sem depositar, o sujeito passivo tem o direito de contestar o lançamento no Judiciário — a única diferença é que <b>não haverá suspensão da exigibilidade</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Depósito do montante integral</i></p>",
31:"<p>Certo — <b>Súmula 112 do STJ</b>, transcrita no Resumo: \"O depósito somente suspende a exigibilidade do crédito tributário se for <b>integral e em dinheiro</b>.\"</p><p>Dois requisitos cumulativos: integralidade e forma (dinheiro).</p><p class='fb-fonte'>Resumo 09 · <i>STJ Súmula 112</i></p>",
32:"<p>Errado. Ainda que integral, a fiança bancária <b>não é dinheiro</b> — e a Súmula 112 do STJ, citada no Resumo, exige que o depósito seja <b>integral E em dinheiro</b> para suspender a exigibilidade.</p><p>A fiança serve para garantir a execução, não para suspender o crédito.</p><p class='fb-fonte'>Resumo 09 · <i>STJ Súmula 112</i></p>",
33:"<p>Certo — primeiro desfecho do esquema do Resumo sobre o depósito.</p><p>Decisão <b>em favor do contribuinte</b>: ele realiza o <b>levantamento (resgate)</b> do depósito e extingue-se o crédito tributário (art. 156, X — decisão judicial passada em julgado).</p><p class='fb-fonte'>Resumo 09 · <i>Depósito integral — decisão favorável ao contribuinte</i></p>",
34:"<p>Certo — segundo desfecho do esquema.</p><p>Decisão <b>em favor da Fazenda Pública</b>: o depósito é <b>convertido em renda</b> (art. 156, VI) e o crédito tributário é <b>extinto</b>.</p><p>Nos dois cenários o crédito acaba extinto; o que muda é para onde vai o dinheiro.</p><p class='fb-fonte'>Resumo 09 · <i>Depósito integral — decisão favorável à Fazenda</i></p>",
35:"<p>Certo. O Resumo registra que o depósito do montante integral pode ser realizado <b>tanto na via judicial quanto na administrativa</b>, embora nesta última seja <b>bastante atípico</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Depósito do montante integral</i></p>",
36:"<p>Certo. A coluna EXTINÇÃO da tabela do Resumo (art. 156) lista: pagamento, compensação, transação, remissão, <b>prescrição e decadência</b>, conversão de depósito em renda, homologação do lançamento, consignação em pagamento, decisão administrativa irreformável, decisão judicial passada em julgado e dação em pagamento em bens imóveis.</p><p class='fb-fonte'>Resumo 09 · <i>Tabela — Extinção (art. 156)</i></p>",
37:"<p>Errado por uma palavra. A tabela do Resumo registra <b>dação em pagamento em bens IMÓVEIS</b>.</p><p>Bens móveis não servem: a hipótese do art. 156, XI, é restrita a imóveis.</p><p class='fb-fonte'>Resumo 09 · <i>Tabela — Extinção, dação em pagamento</i></p>",
38:"<p>Certo — coluna EXCLUSÃO (art. 175) da tabela do Resumo, com o mnemônico <b>ISA</b>: <b>IS</b>enção e <b>A</b>nistia.</p><p>São só essas duas.</p><p class='fb-fonte'>Resumo 09 · <i>Tabela — Exclusão (art. 175) · mnemônico ISA</i></p>",
39:"<p>Errado. O parcelamento é a última letra do <b>DEMORE a LIMPAR</b> — está na coluna <b>SUSPENSÃO</b> (art. 151, VI) da tabela do Resumo.</p><p>Só ao final do pagamento das parcelas é que haverá extinção — e por <b>pagamento</b>, não por parcelamento.</p><p class='fb-fonte'>Resumo 09 · <i>Tabela — Suspensão x Extinção</i></p>",
40:"<p>Errado. A remissão está na coluna <b>EXTINÇÃO</b> (art. 156) da tabela do Resumo. A exclusão (art. 175) tem apenas <b>isenção e anistia</b> — mnemônico <b>ISA</b>.</p><p>A Observação 2 do material ajuda a fixar: <b>depois do lançamento</b>, a dispensa legal do pagamento é <b>remissão</b> (extinção); antes dele, isenção (tributos) ou anistia (multas).</p><p class='fb-fonte'>Resumo 09 · <i>Tabela — Exclusão e OBS. 2</i></p>",
41:"<p>Certo — é como a tabela do Resumo define a coluna EXCLUSÃO: \"aqui o lançamento <b>nem chega a ser realizado</b>\".</p><p>Por isso isenção e anistia não se confundem com remissão, que pressupõe crédito já constituído.</p><p class='fb-fonte'>Resumo 09 · <i>Tabela — Exclusão (art. 175)</i></p>",
42:"<p>Certo — Observação 1 do Resumo: interpreta-se <b>literalmente</b> a legislação tributária que disponha sobre <b>suspensão ou exclusão</b> do crédito tributário (art. 111).</p><p>Atenção ao que o material frisa entre parênteses: <b>extinção não</b> está nessa regra de interpretação literal.</p><p class='fb-fonte'>Resumo 09 · <i>OBS. 1 — CTN, art. 111</i></p>",
43:"<p>Errado. Observação 2 do Resumo: <b>depois do lançamento</b>, já constituído o crédito, a dispensa legal de seu pagamento configura <b>remissão</b> (extinção) — e não isenção (tributos) nem anistia (multas).</p><p>O material registra ainda que há corrente doutrinária <b>minoritária</b> que admite a anistia para penalidades já lançadas.</p><p class='fb-fonte'>Resumo 09 · <i>OBS. 2 — remissão x isenção x anistia</i></p>",
44:"<p>Certo, conforme a Observação 2 do Resumo, lida a contrario sensu: antes do lançamento, a dispensa legal alcança <b>tributos pela isenção</b> e <b>multas pela anistia</b>; depois do lançamento, o instituto passa a ser a <b>remissão</b>.</p><p>Lembrando a ressalva do material: uma corrente minoritária admite anistia também para penalidades já lançadas.</p><p class='fb-fonte'>Resumo 09 · <i>OBS. 2 — isenção e anistia</i></p>",
45:"<p>Errado. O esquema do Resumo mostra as duas formas: a moratória pode ser concedida em <b>caráter geral</b> (inciso I) <b>ou em caráter individual</b> (inciso II), este por <b>despacho da autoridade administrativa, desde que autorizada por lei</b>.</p><p class='fb-fonte'>Resumo 09 · <i>Moratória — caráter geral e individual</i></p>",
46:"<p>Certo pela letra do art. 155, parágrafo único, do CTN: <b>sem dolo ou simulação</b> (art. 155, II), a revogação da moratória individual só pode ocorrer <b>antes de prescrito</b> o direito à cobrança do crédito.</p><p>Com dolo, o tempo da moratória nem se computa para a prescrição.</p><p class='fb-fonte off'>Não consta do Resumo 09 — art. 155, parágrafo único, do CTN.</p>",
47:"<p>Certo — § 3º do art. 155-A, transcrito no Resumo: <b>lei específica</b> disporá sobre as condições de parcelamento dos créditos tributários do devedor em <b>recuperação judicial</b>.</p><p>E o § 4º resolve a falta dessa lei: aplicam-se as leis gerais do ente, com prazo não inferior ao da lei federal específica.</p><p class='fb-fonte'>Resumo 09 · <i>CTN — art. 155-A, § 3º</i></p>",
48:"<p>Certo, art. 151, VI. O quadro ATENÇÃO do Resumo separa bem: a <b>concessão</b> do parcelamento pela Fazenda <b>suspende a exigibilidade</b>; o <b>pedido</b> do sujeito passivo <b>interrompe a prescrição</b>.</p><p class='fb-fonte'>Resumo 09 · <i>ATENÇÃO — concessão do parcelamento</i></p>",
49:"<p>Errado. Na tabela do Resumo, a <b>homologação do lançamento</b> está na coluna <b>EXTINÇÃO</b> (art. 156, VII).</p><p>A suspensão tem só as seis do DEMORE a LIMPAR: depósito integral, moratória, reclamações, recursos, liminar e parcelamento.</p><p class='fb-fonte'>Resumo 09 · <i>Tabela — Extinção (art. 156)</i></p>",
50:"<p>Certo. A <b>consignação em pagamento</b> consta da coluna EXTINÇÃO da tabela do Resumo (art. 156, VIII).</p><p>Julgada procedente, o valor consignado converte-se em renda e o crédito se extingue.</p><p class='fb-fonte'>Resumo 09 · <i>Tabela — Extinção (art. 156)</i></p>",
51:"<p>Errado — é a Observação 2 do art. 151 no Resumo: a suspensão do crédito tributário <b>não dispensa o cumprimento das obrigações acessórias</b>.</p><p>Emitir notas fiscais e escriturar livros são exatamente obrigações acessórias: continuam devidas mesmo com a exigibilidade suspensa.</p><p class='fb-fonte'>Resumo 09 · <i>CTN — art. 151, parágrafo único</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"09", nome:"Suspensão do crédito tributário", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
