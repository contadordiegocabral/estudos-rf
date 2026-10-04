/* Direito Tributário — Módulo 12: Garantias e privilégios do crédito tributário (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dtrib12 = (function(){
"use strict";

var CARDS = [
  ["Garantias × privilégios: qual a diferença?","<b>GARANTIAS:</b> mecanismos para <b>FACILITAR A COBRANÇA</b> do crédito. <b>PRIVILÉGIOS (ou preferências):</b> dão ao crédito tributário <b>PRIORIDADE DE PAGAMENTO</b> diante das demais dívidas do devedor."],
  ["O rol de garantias do CTN é taxativo? (art. 183)","<b>NÃO</b> — “não exclui outras <b>expressamente previstas em lei</b>, em função da natureza ou das características do tributo”. Cada ente pode criar garantias por lei ordinária."],
  ["A natureza da garantia altera a natureza do crédito? (art. 183, p.ú.)","<b>NÃO.</b> Garantido por <b>hipoteca</b>, o crédito <b>não vira crédito hipotecário</b> — continua sendo <b>crédito tributário</b>."],
  ["Que patrimônio responde pelo crédito tributário? (art. 184)","A <b>totalidade dos bens e das rendas</b>, de <b>qualquer origem ou natureza</b>, do sujeito passivo — <b>inclusive os gravados por ônus real</b> ou por <b>cláusula de inalienabilidade ou impenhorabilidade</b>."],
  ["Qual a única exceção do art. 184?","Os <b>bens e rendas que a LEI declare ABSOLUTAMENTE impenhoráveis</b>. Impenhorabilidade por <b>ato de vontade do particular</b> não vale contra o Fisco."],
  ["O bem de família responde por dívida tributária?","<b>Em regra NÃO</b> — é absolutamente impenhorável. <b>EXCEÇÃO:</b> responde pelo <b>IPTU, taxas e contribuições devidas em função do próprio imóvel</b> (Lei nº 8.009/90, art. 3º, IV)."],
  ["Bem de família: oponível ao IPTU ou ao IR?","<b>NÃO oponível ao IPTU</b> (dívida do próprio imóvel). <b>Oponível ao IR</b> — dívida estranha ao imóvel."],
  ["André não paga IPTU do único imóvel residencial há 4 anos. Pode haver penhora?","<b>SIM</b> — o único imóvel residencial <b>pode ser penhorado</b> para satisfazer crédito de IPTU do próprio bem."],

  ["Qual o marco da presunção de fraude? (art. 185)","A <b>INSCRIÇÃO EM DÍVIDA ATIVA</b>. Presume-se fraudulenta a alienação ou oneração de bens por sujeito passivo em débito de crédito <b>regularmente inscrito</b>."],
  ["Quais os três requisitos cumulativos da fraude à execução fiscal?","<b>1)</b> crédito <b>inscrito em dívida ativa</b>; <b>2)</b> <b>alienação ou oneração</b> de bens, ou seu começo; <b>3)</b> <b>não reserva</b> de bens ou rendas suficientes ao total pagamento da dívida inscrita."],
  ["Qual a ressalva do art. 185, parágrafo único?","Não há fraude se o devedor <b>reservou bens ou rendas SUFICIENTES ao total pagamento</b> da dívida inscrita."],
  ["A presunção de fraude alcança a ONERAÇÃO de bens?","<b>SIM</b> — não só a alienação. Ex.: o devedor já inscrito oferece bens em garantia de outro crédito."],
  ["Qual a PEGADINHA clássica do art. 185?","Dizer que a presunção surge <b>após o ajuizamento da execução fiscal</b>. <b>ERRADO</b> — o marco é a <b>INSCRIÇÃO EM DÍVIDA ATIVA</b>, bem antes."],
  ["A presunção do art. 185 é relativa ou absoluta?","É <b>puramente OBJETIVA</b>: não se perquire a intenção do devedor. Constatada a situação legal, há <b>presunção ABSOLUTA</b> de alienação fraudulenta (STJ, REsp 1.141.990)."],
  ["Para que serve a inscrição em dívida ativa?","<b>1)</b> extrair o <b>título executivo extrajudicial</b>; <b>2)</b> viabilizar a <b>propositura da execução fiscal</b>; <b>3)</b> servir de <b>marco temporal da presunção de fraude</b>."],
  ["Inscrição em 20/05/2020 e alienação em 20/01/2021, sem outros bens. É fraude?","<b>SIM</b> — a alienação ocorreu <b>depois da inscrição</b> e não houve reserva de bens. Presume-se fraudulenta, ainda que a execução só venha depois."],

  ["Quando cabe a indisponibilidade do art. 185-A?","Quando o devedor, <b>devidamente CITADO</b>, <b>não paga nem apresenta bens à penhora</b> no prazo legal <b>E</b> <b>não são encontrados bens penhoráveis</b>."],
  ["A quem o juiz comunica a indisponibilidade?","<b>Preferencialmente por meio eletrônico</b>, aos órgãos que promovem <b>registros de transferência de bens</b> (DETRAN), ao <b>registro público de imóveis</b> e às autoridades supervisoras do <b>mercado bancário</b> (BACEN) e do <b>mercado de capitais</b> (CVM)."],
  ["Em que fase ocorre a penhora eletrônica?","<b>Somente no curso da AÇÃO DE EXECUÇÃO FISCAL</b> — depois da citação do devedor."],
  ["O que diz a Súmula 560 do STJ?","A decretação da indisponibilidade do art. 185-A <b>pressupõe o EXAURIMENTO DAS DILIGÊNCIAS</b> na busca por bens penhoráveis, caracterizado quando <b>infrutíferos</b> o pedido de constrição sobre <b>ativos financeiros</b> e a expedição de <b>ofícios aos registros públicos</b> do domicílio do executado, ao <b>Denatran ou Detran</b>."],

  ["Qual a regra geral de preferência? (art. 186)","O crédito tributário <b>prefere a QUALQUER OUTRO</b>, seja qual for sua natureza ou o tempo de sua constituição — <b>ressalvados os créditos decorrentes da legislação do TRABALHO ou do ACIDENTE DE TRABALHO</b>."],
  ["Fora da falência, o crédito tributário prefere ao crédito com garantia real?","<b>SIM.</b> Banco com hipoteca perde para o Fisco fora do processo falimentar."],
  ["Empresa hipoteca terreno ao banco e depois deve IPTU do mesmo terreno. Quem recebe primeiro?","A <b>Fazenda Municipal</b> — fora da falência, o crédito tributário <b>se sobrepõe ao crédito com garantia real</b>."],
  ["Na FALÊNCIA, a que o crédito tributário NÃO prefere? (art. 186, p.ú., I)","Aos <b>créditos EXTRACONCURSAIS</b>, às <b>importâncias passíveis de RESTITUIÇÃO</b> e aos <b>créditos com GARANTIA REAL</b>, <b>no limite do valor do bem gravado</b>."],
  ["O que diz o art. 186, p.ú., II?","A <b>lei poderá estabelecer limites e condições</b> para a preferência dos créditos decorrentes da <b>legislação do trabalho</b>. A Lei 11.101/05 fixou <b>150 salários mínimos por credor</b>."],
  ["O limite de 150 salários mínimos alcança os créditos acidentários?","<b>NÃO</b> — o limite vale para os créditos <b>trabalhistas</b>; os decorrentes de <b>acidente de trabalho</b> não se sujeitam a ele."],
  ["O que diz o art. 186, p.ú., III?","Na falência, a <b>MULTA TRIBUTÁRIA prefere APENAS aos créditos SUBORDINADOS</b> — ex.: créditos dos sócios da empresa falida."],
  ["Por que, na falência, a garantia real vence o crédito tributário?","Por <b>política econômica</b>: sem essa prioridade, nenhum banco emprestaria a empresa em dificuldade, já que depois do Fisco não sobraria nada. A preferência vale <b>no limite do valor do BEM GRAVADO</b> — não do valor da dívida."],
  ["O que são créditos EXTRACONCURSAIS?","Os contraídos pela <b>massa falida durante o procedimento concursal</b>, ou pelo devedor durante a <b>recuperação judicial</b> que se converteu em falência. Ex.: <b>remuneração do administrador judicial</b>."],
  ["O que são importâncias passíveis de RESTITUIÇÃO?","Bens ou valores vendidos por <b>terceiros de BOA-FÉ</b> ao falido nos <b>15 dias anteriores ao requerimento da falência</b> (Lei 11.101/05, art. 85, p.ú.). São restituídos <b>antes de concorrer</b> com os demais créditos."],
  ["Qual a ordem de preferência na falência? (Lei 11.101/05)","<b>1)</b> extraconcursais · <b>2)</b> trabalhistas e acidentários (limite de 150 s.m. por credor) · <b>3)</b> garantia real · <b>4)</b> <b>tributários</b> · <b>5)</b> quirografários · <b>6)</b> multas contratuais e tributárias · <b>7)</b> subordinados · <b>8)</b> juros vencidos após a falência."],
  ["Onde ficam os créditos com privilégio especial ou geral previstos em outras normas?","Integram a classe dos <b>QUIROGRAFÁRIOS</b> (Lei 11.101/05, art. 83, § 6º)."],
  ["O que diz a Súmula 307 do STJ?","A <b>restituição de adiantamento de contrato de câmbio</b>, na falência, deve ser atendida <b>ANTES de qualquer crédito</b>."],
  ["Qual o crédito extraconcursal mais cobrado em prova?","A <b>remuneração devida ao ADMINISTRADOR JUDICIAL</b> e a seus auxiliares."],

  ["O que diz o art. 187?","A <b>cobrança judicial do crédito tributário NÃO se sujeita a concurso de credores ou habilitação</b> em falência, recuperação judicial, concordata, inventário ou arrolamento."],
  ["O que isso significa na prática?","O Fisco <b>não precisa se habilitar no juízo universal</b>: pode ajuizar <b>execução fiscal individual</b>. Mas a <b>ordem de preferência</b> dos demais créditos <b>é respeitada</b>."],
  ["Qual a ordem do concurso de preferência? (art. 187, p.ú.)","<b>I)</b> União; <b>II)</b> Estados, DF e Territórios, <b>conjuntamente e pro rata</b>; <b>III)</b> Municípios, <b>conjuntamente e pro rata</b>."],
  ["Esse concurso de preferência ainda vale?","O <b>STF, na ADPF 357 (2021), decidiu pela NÃO RECEPÇÃO</b> do parágrafo único do art. 187. <b>Leia o enunciado:</b> a banca pode querer a literalidade do CTN ou o entendimento do STF."],
  ["O que diz o art. 188?","São <b>EXTRACONCURSAIS</b> os créditos tributários decorrentes de <b>fatos geradores ocorridos NO CURSO do processo de falência</b>."],
  ["Só há extraconcursais tributários?","<b>NÃO</b> — a Lei 11.101/05, art. 84, traz outros: remuneração do <b>administrador judicial</b> e auxiliares, reembolsos ao <b>Comitê de Credores</b>, e créditos trabalhistas ou acidentários <b>por serviços prestados após a decretação da falência</b>."],
  ["Contestado o crédito tributário na falência, quem decide? (art. 188, § 1º)","<b>NÃO é o juiz da falência</b>: ele <b>remete as partes ao juízo competente</b>, mandando <b>reservar bens suficientes</b> à extinção total do crédito e acréscimos, <b>ouvido o representante da Fazenda</b> quanto à natureza e valor dos bens."],
  ["O art. 188 se aplica à concordata?","<b>SIM</b> (§ 2º). A concordata é acordo do comerciante insolvente com seus credores para evitar a falência — e ali vale a mesma regra de remessa ao juízo competente."],
  ["O que diz o art. 189?","São pagos <b>preferencialmente a quaisquer créditos habilitados em INVENTÁRIO ou ARROLAMENTO</b>, ou a outros encargos do monte, os créditos tributários <b>vencidos ou vincendos</b> a cargo do de cujus ou do espólio, exigíveis no decurso do processo."],
  ["O que diz o art. 190?","São pagos <b>preferencialmente a quaisquer outros</b> os créditos tributários <b>vencidos ou vincendos</b> a cargo de pessoas jurídicas de direito privado em <b>LIQUIDAÇÃO judicial ou voluntária</b>, exigíveis no decurso da liquidação."],
  ["Qual a diferença entre falência e os arts. 189 e 190?","Na <b>FALÊNCIA</b> o crédito tributário <b>perde</b> para extraconcursais, restituições e garantia real. No <b>INVENTÁRIO, ARROLAMENTO e LIQUIDAÇÃO</b> ele é pago <b>preferencialmente a quaisquer outros</b>."],

  ["O que exige o art. 191?","A <b>extinção das obrigações do FALIDO</b> requer <b>prova de quitação de TODOS os tributos</b>."],
  ["O que exige o art. 191-A?","A <b>concessão de RECUPERAÇÃO JUDICIAL</b> depende da <b>prova de quitação de todos os tributos</b>, observados os arts. <b>151, 205 e 206</b>."],
  ["Qual a saída prática do art. 191-A?","A <b>Certidão Positiva com Efeitos de Negativa (CPEN)</b>, do art. 206: havendo crédito com <b>exigibilidade suspensa</b>, a certidão produz os <b>mesmos efeitos da negativa</b> e serve à recuperação judicial."],
  ["O que exige o art. 192?","<b>Nenhuma sentença de PARTILHA ou ADJUDICAÇÃO</b> será proferida sem prova de quitação de todos os tributos relativos aos <b>bens do espólio ou às suas rendas</b>."],
  ["Partilha × adjudicação","<b>Partilha:</b> vários herdeiros. <b>Adjudicação:</b> herdeiro único. Em ambos, exige-se a quitação."],
  ["O que exige o art. 193?","Salvo autorização legal expressa, <b>nenhum departamento da administração pública</b> — União, Estados, DF, Municípios ou suas <b>autarquias</b> — celebrará contrato ou aceitará proposta em <b>concorrência pública</b> sem prova de quitação dos tributos <b>devidos à Fazenda interessada</b>, relativos à atividade contratada."],
  ["Qual o detalhe do art. 193 que cai em prova?","A quitação exigida é a dos tributos devidos <b>à Fazenda INTERESSADA</b> (a que contrata), e <b>relativos à atividade</b> objeto do contrato — não de todos os tributos de todos os entes."],
  ["Reforma tributária: muda algo aqui?","A <b>EC 132/2023 não alterou os arts. 183 a 193</b> do CTN. Atenção, porém, ao <b>art. 187, parágrafo único</b>, não recepcionado pelo STF na ADPF 357, e às atualizações da <b>Lei 11.101/05</b> sobre a ordem de credores."]
];

var QS = [
  ["A enumeração das garantias do crédito tributário no CTN não exclui outras expressamente previstas em lei.","C","CTN art. 183","O rol não é taxativo."],
  ["A natureza das garantias atribuídas ao crédito tributário altera a natureza deste e a da obrigação correspondente.","E","CTN art. 183 p.ú.","Não altera — crédito garantido por hipoteca continua sendo crédito tributário."],
  ["Responde pelo pagamento do crédito tributário a totalidade dos bens e rendas do sujeito passivo, inclusive os gravados por ônus real ou cláusula de inalienabilidade.","C","CTN art. 184","Excetuados apenas os declarados absolutamente impenhoráveis por lei."],
  ["A cláusula de impenhorabilidade instituída por ato de vontade do particular é oponível à cobrança do crédito tributário.","E","CTN art. 184","Só a impenhorabilidade declarada por LEI afasta a responsabilidade patrimonial."],
  ["O único imóvel residencial do devedor pode ser penhorado para satisfação de crédito de IPTU relativo ao próprio imóvel.","C","Lei 8.009/90 art. 3º IV","A impenhorabilidade do bem de família não é oponível a tributos do próprio bem."],
  ["A impenhorabilidade do bem de família não pode ser oposta à cobrança de imposto de renda devido pelo proprietário.","E","FGV","Pode ser oposta — a exceção legal alcança tributos incidentes sobre o próprio imóvel."],
  ["Presume-se fraudulenta a alienação de bens por sujeito passivo em débito para com a Fazenda Pública por crédito tributário regularmente inscrito em dívida ativa.","C","CTN art. 185","Marco temporal é a inscrição em dívida ativa."],
  ["A presunção de fraude à execução fiscal ocorre somente após o ajuizamento da ação de execução fiscal.","E","CEBRASPE","Ocorre após a <b>inscrição em dívida ativa</b> — pegadinha clássica."],
  ["Não se presume fraudulenta a alienação se o devedor reservou bens ou rendas suficientes ao total pagamento da dívida inscrita.","C","CTN art. 185 p.ú.","É a ressalva expressa do dispositivo."],
  ["A presunção de fraude do art. 185 do CTN depende da demonstração da má-fé do adquirente.","E","STJ REsp 1.141.990","A presunção é objetiva e absoluta, independentemente da intenção."],
  ["A presunção de fraude alcança apenas a alienação de bens, não a sua oneração.","E","CTN art. 185","Alcança a alienação <b>ou oneração</b>, ou seu começo."],
  ["A inscrição em dívida ativa é condição para a extração do título executivo extrajudicial e para a propositura da execução fiscal.","C","FCC","E também é o marco da presunção de fraude."],
  ["A indisponibilidade de bens do art. 185-A pressupõe que o devedor, devidamente citado, não pague nem apresente bens à penhora e que não sejam encontrados bens penhoráveis.","C","CTN art. 185-A","São requisitos cumulativos."],
  ["A decretação da indisponibilidade de bens na forma do art. 185-A independe do exaurimento das diligências na busca por bens penhoráveis.","E","STJ Súmula 560","Pressupõe o exaurimento, com pedido de constrição sobre ativos financeiros e ofícios aos registros públicos e ao Detran."],
  ["O juiz comunicará a indisponibilidade, preferencialmente por meio eletrônico, aos registros públicos de imóveis e às autoridades supervisoras do mercado bancário e de capitais.","C","CTN art. 185-A","Também aos órgãos de registro de transferência de bens."],
  ["O crédito tributário prefere a qualquer outro, ressalvados os créditos decorrentes da legislação do trabalho ou do acidente de trabalho.","C","CTN art. 186","Regra geral, fora do processo falimentar."],
  ["Fora do processo de falência, o crédito com garantia real prefere ao crédito tributário.","E","CTN art. 186","Fora da falência o crédito tributário se sobrepõe à garantia real."],
  ["Na falência, o crédito tributário não prefere aos créditos extraconcursais, às importâncias passíveis de restituição nem aos créditos com garantia real, no limite do valor do bem gravado.","C","CTN art. 186 p.ú. I","Três exceções somadas às trabalhistas e acidentárias."],
  ["Na falência, a preferência dos créditos com garantia real é limitada ao valor da dívida garantida.","E","CTN art. 186 p.ú. I","O limite é o <b>valor do bem gravado</b>."],
  ["A lei poderá estabelecer limites e condições para a preferência dos créditos decorrentes da legislação do trabalho.","C","CTN art. 186 p.ú. II","A Lei 11.101/05 fixou 150 salários mínimos por credor."],
  ["O limite de 150 salários mínimos por credor aplica-se também aos créditos decorrentes de acidente de trabalho.","E","Lei 11.101/05","O limite alcança apenas os créditos trabalhistas."],
  ["Na falência, a multa tributária prefere apenas aos créditos subordinados.","C","CTN art. 186 p.ú. III","Ex.: créditos dos sócios da empresa falida."],
  ["São extraconcursais os créditos tributários decorrentes de fatos geradores ocorridos no curso do processo de falência.","C","CTN art. 188","Mas há outros extraconcursais na Lei 11.101/05."],
  ["A remuneração devida ao administrador judicial constitui crédito extraconcursal.","C","Lei 11.101/05 art. 84","Espécie mais cobrada em prova."],
  ["Importâncias passíveis de restituição são aquelas vendidas por terceiros de boa-fé ao devedor falido nos quinze dias anteriores ao requerimento da falência.","C","Lei 11.101/05 art. 85 p.ú.","Restituídas antes de concorrer com os demais créditos."],
  ["Na ordem de preferência da falência, os créditos tributários precedem os créditos com garantia real.","E","Lei 11.101/05 art. 83","Os créditos com garantia real vêm antes dos tributários."],
  ["Os créditos que disponham de privilégio especial ou geral em outras normas integram a classe dos créditos quirografários.","C","Lei 11.101/05 art. 83 § 6º","Regra de rebaixamento de classe."],
  ["A restituição de adiantamento de contrato de câmbio, na falência, deve ser atendida antes de qualquer crédito.","C","STJ Súmula 307","Prioridade sobre todas as classes."],
  ["A cobrança judicial do crédito tributário sujeita-se a concurso de credores e habilitação em falência.","E","CTN art. 187","Não se sujeita — o Fisco pode ajuizar execução individual."],
  ["Embora dispensada a habilitação no juízo universal, a Fazenda Pública deve respeitar a ordem de preferência dos demais créditos.","C","FCC","Autonomia da execução não significa prioridade absoluta."],
  ["O concurso de preferência entre pessoas jurídicas de direito público obedece à ordem União, Estados e DF, e Municípios, conforme a literalidade do CTN.","C","CTN art. 187 p.ú.","Estados e Municípios recebem conjuntamente e pro rata em cada classe."],
  ["O Supremo Tribunal Federal declarou a não recepção do parágrafo único do art. 187 do CTN.","C","STF ADPF 357","Julgamento de 2021 — leia o enunciado para saber se a banca quer o CTN ou o STF."],
  ["Contestado o crédito tributário no processo de falência, compete ao juiz da falência decidir a controvérsia.","E","CTN art. 188 § 1º","Ele remete as partes ao juízo competente e manda reservar bens suficientes."],
  ["Contestado o crédito tributário, o juiz mandará reservar bens suficientes à extinção total do crédito e seus acrescidos, ouvido o representante da Fazenda Pública.","C","CTN art. 188 § 1º","Se a massa não puder garantir a instância de outra forma."],
  ["São pagos preferencialmente a quaisquer créditos habilitados em inventário ou arrolamento os créditos tributários vencidos ou vincendos a cargo do de cujus ou do espólio.","C","CTN art. 189","Preferência ampla, diferente da falência."],
  ["Os créditos tributários exigíveis no curso de liquidação judicial ou voluntária de pessoa jurídica de direito privado são pagos preferencialmente a quaisquer outros.","C","CTN art. 190","Não se confunde com o regime da falência."],
  ["A extinção das obrigações do falido requer prova de quitação de todos os tributos.","C","CTN art. 191","Em regra por certidão negativa de débitos."],
  ["A concessão de recuperação judicial independe de prova de quitação de tributos.","E","CTN art. 191-A","Depende, observados os arts. 151, 205 e 206."],
  ["A certidão positiva com efeitos de negativa pode ser utilizada para a concessão de recuperação judicial quando houver crédito com exigibilidade suspensa.","C","CTN art. 206","É a saída prática do art. 191-A."],
  ["Nenhuma sentença de julgamento de partilha ou adjudicação será proferida sem prova de quitação de todos os tributos relativos aos bens do espólio ou às suas rendas.","C","CTN art. 192","Partilha para vários herdeiros; adjudicação para herdeiro único."],
  ["Salvo quando expressamente autorizado por lei, nenhum departamento da administração pública celebrará contrato ou aceitará proposta em concorrência pública sem prova de quitação dos tributos devidos à Fazenda interessada.","C","CTN art. 193","Relativos à atividade em cujo exercício o contratante contrata."],
  ["A exigência do art. 193 do CTN alcança a prova de quitação de todos os tributos devidos a todos os entes federativos.","E","FGV","Alcança os devidos à <b>Fazenda interessada</b> e relativos à atividade contratada."],
  ["As autarquias estão abrangidas pela exigência de prova de quitação prevista no art. 193 do CTN.","C","CTN art. 193","O artigo menciona expressamente as autarquias."],
  ["Garantias são mecanismos que facilitam a cobrança, enquanto privilégios conferem prioridade de pagamento ao crédito tributário.","C","FCC","Distinção conceitual que abre o capítulo."]
];

var EX = {
S1:{t:"match", instr:"Garantias ou privilégios?",
  pairs:[["Garantias","Mecanismos para facilitar a cobrança do crédito"],
         ["Privilégios","Prioridade de pagamento diante das demais dívidas"]],
  why:"O capítulo VI trata dos dois institutos em conjunto."},

S2:{t:"multi", instr:"Marque o que responde pelo crédito tributário (art. 184)",
  options:["A totalidade dos bens e rendas do sujeito passivo",
           "Bens gravados por ônus real, como a hipoteca",
           "Bens com cláusula de inalienabilidade por ato de vontade",
           "Bens e rendas que a LEI declare absolutamente impenhoráveis"],
  answers:[0,1,2],
  why:"Só a impenhorabilidade legal afasta a responsabilidade patrimonial."},

S3:{t:"sort", instr:"O bem de família é oponível à cobrança?",
  buckets:["NÃO é oponível (o imóvel responde)","É oponível (protegido)"],
  items:[["IPTU do próprio imóvel",0],["Taxas devidas em função do imóvel",0],
         ["Imposto de renda do proprietário",1]],
  why:"Lei 8.009/90, art. 3º, IV — a exceção alcança tributos do próprio bem."},

S4:{t:"multi", instr:"Marque os requisitos CUMULATIVOS da fraude à execução fiscal (art. 185)",
  options:["Crédito regularmente inscrito em dívida ativa",
           "Alienação ou oneração de bens, ou seu começo",
           "Não reserva de bens ou rendas suficientes ao total pagamento",
           "Ajuizamento prévio da execução fiscal"],
  answers:[0,1,2],
  why:"O marco é a INSCRIÇÃO, não o ajuizamento — pegadinha clássica."},

S5:{t:"mc", instr:"Qual o marco temporal da presunção de fraude à execução fiscal?",
  options:["A inscrição do crédito em dívida ativa",
           "O ajuizamento da execução fiscal",
           "O despacho que ordena a citação",
           "A notificação do lançamento"],
  answer:0,
  why:"A inscrição também viabiliza o título executivo e a propositura da execução."},

S6:{t:"mc", instr:"A presunção de fraude do art. 185 depende da intenção do devedor?",
  options:["Não — é objetiva e, para o STJ, absoluta",
           "Sim — exige prova de dolo",
           "Sim — exige má-fé do adquirente",
           "Depende do valor do bem alienado"],
  answer:0,
  why:"STJ, REsp 1.141.990 — constatada a situação legal, presume-se a fraude."},

S7:{t:"order", instr:"Ordene a linha do tempo até a execução fiscal",
  items:["Ocorrência do fato gerador","Notificação do lançamento",
         "Definitividade do lançamento","Inscrição em dívida ativa",
         "Ação de execução fiscal"],
  why:"A presunção de fraude nasce na quarta etapa, não na quinta."},

S8:{t:"multi", instr:"Marque os requisitos da indisponibilidade do art. 185-A",
  options:["Devedor devidamente citado",
           "Não pagamento nem apresentação de bens à penhora no prazo legal",
           "Não serem encontrados bens penhoráveis",
           "Exaurimento das diligências na busca por bens (Súmula 560 do STJ)",
           "Existência de crédito superior a cem salários mínimos"],
  answers:[0,1,2,3],
  why:"Não há piso de valor — o que se exige é o esgotamento das buscas."},

S9:{t:"multi", instr:"A quem o juiz comunica a indisponibilidade de bens?",
  options:["Órgãos de registro de transferência de bens, como o DETRAN",
           "Registro público de imóveis",
           "Autoridades supervisoras do mercado bancário",
           "Autoridades supervisoras do mercado de capitais",
           "Ao Ministério Público Federal"],
  answers:[0,1,2,3],
  why:"Preferencialmente por meio eletrônico, para que cumpram a ordem judicial."},

S10:{t:"sort", instr:"O crédito tributário prefere a esses créditos?",
  buckets:["FORA da falência: prefere","FORA da falência: NÃO prefere"],
  items:[["Crédito com garantia real (hipoteca)",0],["Crédito quirografário",0],
         ["Créditos trabalhistas",1],["Créditos por acidente de trabalho",1]],
  why:"Art. 186 — trabalho e acidente são as únicas ressalvas da regra geral."},

S11:{t:"mc", instr:"Empresa hipoteca terreno ao banco; depois deve IPTU do mesmo terreno. Fora da falência, quem prefere?",
  options:["A Fazenda Municipal — o crédito tributário se sobrepõe à garantia real",
           "O banco — a hipoteca é anterior",
           "Ambos, em rateio proporcional",
           "O banco, no limite do valor do bem"],
  answer:0,
  why:"A inversão só ocorre dentro do processo de falência."},

S12:{t:"multi", instr:"Na FALÊNCIA, a que o crédito tributário NÃO prefere? (art. 186, p.ú., I)",
  options:["Créditos extraconcursais","Importâncias passíveis de restituição",
           "Créditos com garantia real, no limite do valor do bem gravado",
           "Créditos quirografários"],
  answers:[0,1,2],
  why:"Quirografários vêm depois dos tributários na ordem da Lei 11.101/05."},

S13:{t:"order", instr:"Ordene a preferência dos créditos na falência (Lei 11.101/05)",
  items:["Créditos extraconcursais","Trabalhistas e acidentários (150 s.m. por credor)",
         "Créditos com garantia real","Créditos tributários",
         "Créditos quirografários","Multas contratuais e tributárias",
         "Créditos subordinados","Juros vencidos após a falência"],
  why:"Oito classes — a posição do crédito tributário é a quarta."},

S14:{t:"mc", instr:"Na falência, a preferência do crédito com garantia real é limitada a quê?",
  options:["Ao valor do bem gravado","Ao valor da dívida garantida",
           "A 150 salários mínimos","Ao valor do ativo da massa"],
  answer:0,
  why:"Trocar bem gravado por valor da dívida erra a assertiva."},

S15:{t:"mc", instr:"Na falência, a multa tributária prefere a quais créditos?",
  options:["Apenas aos créditos subordinados","A todos os quirografários",
           "Aos créditos com garantia real","A nenhum — é a última classe"],
  answer:0,
  why:"Art. 186, p.ú., III — depois dela só vêm subordinados e juros pós-falência."},

S16:{t:"match", instr:"Ligue cada conceito à sua definição",
  pairs:[["Extraconcursais","Créditos contraídos pela massa no curso do procedimento"],
         ["Importâncias passíveis de restituição","Vendidos por terceiro de boa-fé nos 15 dias anteriores ao requerimento"],
         ["Subordinados","Ex.: créditos dos sócios da empresa falida"]],
  why:"As duas primeiras classes preferem ao crédito tributário na falência."},

S17:{t:"gap", instr:"Complete o art. 187 do CTN",
  before:"A cobrança judicial do crédito tributário não é sujeita a ",
  after:" ou habilitação em falência, recuperação judicial, concordata, inventário ou arrolamento.",
  options:["concurso de credores","reserva de bens","autorização judicial"], answer:0,
  why:"Mas a ordem de preferência dos demais créditos continua sendo respeitada."},

S18:{t:"mc", instr:"O concurso de preferência entre entes públicos (art. 187, p.ú.) segundo o STF:",
  options:["Não foi recepcionado pela Constituição (ADPF 357, 2021)",
           "Continua plenamente válido",
           "Vale apenas entre Estados e Municípios",
           "Foi ampliado para alcançar autarquias"],
  answer:0,
  why:"Leia o enunciado: a banca pode querer a literalidade do CTN ou o entendimento do STF."},

S19:{t:"mc", instr:"Contestado o crédito tributário no processo de falência, quem decide?",
  options:["O juízo competente, para onde o juiz da falência remete as partes",
           "O próprio juiz da falência","O administrador judicial",
           "O Comitê de Credores"],
  answer:0,
  why:"E manda reservar bens suficientes, ouvido o representante da Fazenda."},

S20:{t:"sort", instr:"Qual o grau de preferência do crédito tributário em cada processo?",
  buckets:["Prefere a QUAISQUER outros","Perde para algumas classes"],
  items:[["Inventário ou arrolamento (art. 189)",0],
         ["Liquidação judicial ou voluntária (art. 190)",0],
         ["Falência (art. 186, p.ú.)",1]],
  why:"A falência é o único regime em que o crédito tributário desce na fila."},

S21:{t:"multi", instr:"Marque as situações que exigem prova de quitação de tributos",
  options:["Extinção das obrigações do falido (art. 191)",
           "Concessão de recuperação judicial (art. 191-A)",
           "Sentença de partilha ou adjudicação (art. 192)",
           "Celebração de contrato com a administração pública (art. 193)",
           "Requerimento de falência pelo credor"],
  answers:[0,1,2,3],
  why:"São as quatro hipóteses do capítulo."},

S22:{t:"mc", instr:"Havendo crédito com exigibilidade suspensa, o que viabiliza a recuperação judicial?",
  options:["A certidão positiva com efeitos de negativa (art. 206)",
           "A certidão negativa de débitos",
           "A dispensa automática da prova de quitação",
           "O depósito judicial do valor integral"],
  answer:0,
  why:"É a saída prática que o art. 191-A indica ao remeter aos arts. 151, 205 e 206."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Garantias: patrimônio, fraude e indisponibilidade",
      '<div class="box"><span class="bl">Dois institutos</span>'+
      '<p><b>GARANTIAS:</b> facilitam a <b>cobrança</b>. <b>PRIVILÉGIOS:</b> dão <b>prioridade de pagamento</b>.</p>'+
      '<p><b>Art. 183:</b> o rol <b>não é taxativo</b> — leis podem criar outras garantias. E a <b>natureza da garantia não altera</b> a natureza do crédito: garantido por hipoteca, ele <b>não vira crédito hipotecário</b>.</p></div>'+
      '<div class="box"><span class="bl">Art. 184 — o patrimônio que responde</span>'+
      '<p><b>A totalidade dos bens e rendas</b>, de qualquer origem ou natureza, <b>inclusive os gravados por ônus real</b> ou por <b>cláusula de inalienabilidade ou impenhorabilidade</b>.</p>'+
      '<p><b>Única exceção:</b> os bens e rendas que <b>a LEI declare absolutamente impenhoráveis</b>. Vontade do particular não protege nada contra o Fisco.</p>'+
      '<p class="mn"><em><b>Bem de família:</b> protegido em regra, <b>MAS responde por IPTU, taxas e contribuições do próprio imóvel</b> (Lei 8.009/90, art. 3º, IV). Oponível ao IR; não oponível ao IPTU.</em></p></div>'+
      '<div class="box trap"><span class="bl">Art. 185 — presunção de fraude</span>'+
      '<p>Presume-se fraudulenta a <b>alienação OU oneração</b> de bens, <b>ou seu começo</b>, por sujeito passivo em débito de crédito <b>regularmente INSCRITO EM DÍVIDA ATIVA</b>.</p>'+
      '<p><b>Três requisitos cumulativos:</b> crédito <b>inscrito</b> · <b>alienação ou oneração</b> · <b>não reserva</b> de bens suficientes ao total pagamento.</p>'+
      '<p><b>PEGADINHA:</b> dizer que a presunção surge <b>após o ajuizamento da execução</b>. <b>ERRADO</b> — o marco é a <b>INSCRIÇÃO</b>.</p>'+
      '<p>A presunção é <b>OBJETIVA</b>: não se perquire a intenção. Para o <b>STJ (REsp 1.141.990)</b>, é <b>absoluta</b>.</p>'+
      '<p class="mn"><em>A inscrição em dívida ativa serve a três coisas: <b>extrair o título executivo</b>, <b>viabilizar a execução</b> e <b>marcar a presunção de fraude</b>.</em></p></div>'+
      '<div class="box"><span class="bl">Art. 185-A — indisponibilidade (penhora on-line)</span>'+
      '<p>Só <b>no curso da execução fiscal</b>, quando o devedor <b>CITADO</b> não paga nem oferece bens <b>E</b> não são encontrados bens penhoráveis.</p>'+
      '<p>O juiz comunica, <b>preferencialmente por meio eletrônico</b>: aos órgãos de <b>registro de transferência de bens</b> (DETRAN), ao <b>registro de imóveis</b>, ao <b>mercado bancário</b> (BACEN) e ao <b>mercado de capitais</b> (CVM).</p>'+
      '<p><b>STJ, Súmula 560:</b> pressupõe o <b>EXAURIMENTO DAS DILIGÊNCIAS</b> — infrutíferos o pedido de constrição sobre <b>ativos financeiros</b> e os ofícios aos <b>registros públicos</b> do domicílio e ao <b>Denatran ou Detran</b>.</p></div>'),
    sl("Preferências e prova de quitação",
      '<div class="box"><span class="bl">Art. 186 — a regra geral</span>'+
      '<p>O crédito tributário <b>prefere a QUALQUER OUTRO</b>, seja qual for a natureza ou o tempo de constituição — <b>ressalvados os créditos do TRABALHO e de ACIDENTE DE TRABALHO</b>.</p>'+
      '<p class="mn"><em>Fora da falência, o Fisco <b>vence até o crédito com garantia real</b>: empresa que hipotecou o terreno e deve IPTU dele perde para a Fazenda.</em></p></div>'+
      '<div class="box trap"><span class="bl">Parágrafo único — na FALÊNCIA tudo muda</span>'+
      '<p><b>I —</b> o crédito tributário <b>NÃO prefere</b> aos <b>extraconcursais</b>, às <b>importâncias passíveis de restituição</b>, nem aos <b>créditos com GARANTIA REAL, no limite do valor do BEM GRAVADO</b>.</p>'+
      '<p><b>II —</b> a lei pode limitar a preferência dos <b>trabalhistas</b>: a Lei 11.101/05 fixou <b>150 salários mínimos por credor</b> — limite que <b>não alcança os acidentários</b>.</p>'+
      '<p><b>III —</b> a <b>MULTA tributária prefere APENAS aos SUBORDINADOS</b>.</p>'+
      '<p><em>Por que a garantia real vence na falência? <b>Política econômica</b>: sem essa prioridade, nenhum banco emprestaria a empresa em crise.</em></p></div>'+
      '<div class="box"><span class="bl">A ordem completa na falência (Lei 11.101/05)</span>'+
      '<p><b>1)</b> extraconcursais · <b>2)</b> trabalhistas e acidentários · <b>3)</b> garantia real · <b>4)</b> <b>TRIBUTÁRIOS</b> · <b>5)</b> quirografários · <b>6)</b> multas contratuais e tributárias · <b>7)</b> subordinados · <b>8)</b> juros pós-falência.</p>'+
      '<p><b>Extraconcursais:</b> contraídos pela massa no curso do procedimento — ex.: <b>remuneração do administrador judicial</b>.<br>'+
      '<b>Importâncias passíveis de restituição:</b> vendidas por <b>terceiro de boa-fé</b> nos <b>15 dias anteriores</b> ao requerimento da falência.<br>'+
      '<b>Privilégio especial ou geral</b> de outras normas → vira <b>quirografário</b> (art. 83, § 6º).<br>'+
      '<b>STJ, Súmula 307:</b> a restituição de <b>adiantamento de contrato de câmbio</b> é atendida <b>antes de qualquer crédito</b>.</p></div>'+
      '<div class="box"><span class="bl">Art. 187 — autonomia da execução fiscal</span>'+
      '<p>A cobrança judicial <b>não se sujeita a concurso de credores nem a habilitação</b> em falência, recuperação, concordata, inventário ou arrolamento. O Fisco pode <b>executar individualmente</b> — mas <b>respeita a ordem de preferência</b>.</p>'+
      '<p><b>Parágrafo único (literalidade):</b> concurso entre pessoas de direito público na ordem <b>União → Estados, DF e Territórios (pro rata) → Municípios (pro rata)</b>.</p>'+
      '<p class="mn"><em><b>STF, ADPF 357 (2021): NÃO RECEPÇÃO</b> desse parágrafo. Leia o enunciado — CTN ou STF?</em></p></div>'+
      '<div class="box"><span class="bl">Arts. 188 a 190 — outros processos</span>'+
      '<p><b>188:</b> são <b>extraconcursais</b> os créditos tributários de <b>fatos geradores ocorridos NO CURSO da falência</b>. <b>§ 1º:</b> contestado o crédito, o juiz <b>remete as partes ao juízo competente</b> e manda <b>reservar bens suficientes</b>, ouvida a Fazenda. <b>§ 2º:</b> aplica-se à <b>concordata</b>.</p>'+
      '<p><b>189 — inventário e arrolamento</b> e <b>190 — liquidação judicial ou voluntária</b>: os créditos tributários <b>vencidos ou vincendos</b> são pagos <b>preferencialmente a QUAISQUER outros</b>.</p>'+
      '<p class="mn"><em>A <b>falência</b> é o único regime em que o crédito tributário <b>desce na fila</b>.</em></p></div>'+
      '<div class="box tip"><span class="bl">Arts. 191 a 193 — prova de quitação</span>'+
      '<p><b>191:</b> a <b>extinção das obrigações do falido</b> requer quitação de todos os tributos.<br>'+
      '<b>191-A:</b> a <b>recuperação judicial</b> depende da prova de quitação, observados os arts. <b>151, 205 e 206</b> — daí a utilidade da <b>Certidão Positiva com Efeitos de Negativa</b> quando a exigibilidade está suspensa.<br>'+
      '<b>192:</b> nenhuma sentença de <b>partilha</b> (vários herdeiros) ou <b>adjudicação</b> (herdeiro único) sem quitação dos tributos do espólio.<br>'+
      '<b>193:</b> salvo autorização legal, <b>nenhum órgão público nem autarquia</b> contrata ou aceita proposta em <b>concorrência pública</b> sem prova de quitação dos tributos devidos <b>à Fazenda INTERESSADA</b> e <b>relativos à atividade contratada</b>.</p></div>')
  ]
};

var TEC = [
  ["Caderno CEBRASPE — Direito Tributário 12","https://www.tecconcursos.com.br/s/Q2hJwJ","Q2hJwJ"],
  ["Caderno FCC — Direito Tributário 12","https://www.tecconcursos.com.br/s/Q2hJwP","Q2hJwP"],
  ["Caderno FGV — Direito Tributário 12","https://www.tecconcursos.com.br/s/Q2hJwT","Q2hJwT"],
  ["Caderno VUNESP — Direito Tributário 12","https://www.tecconcursos.com.br/s/Q2hJwZ","Q2hJwZ"]
];
var TECNOTA = "Priorize o caderno da FGV — banca do último certame da Receita Federal. Este módulo vive de duas inversões. A PRIMEIRA: fora da falência o crédito tributário vence o crédito com garantia real; DENTRO da falência, perde. A SEGUNDA: a presunção de fraude nasce na INSCRIÇÃO EM DÍVIDA ATIVA, não no ajuizamento da execução. Acerte essas duas e o capítulo rende. Decore também a ordem de oito classes da Lei 11.101/05 — o crédito tributário é o quarto — e as três súmulas do STJ que aparecem aqui: 560 (exaurimento das diligências), 307 (adiantamento de câmbio antes de tudo) e o REsp 1.141.990 sobre a presunção objetiva. Atenção ao art. 187, parágrafo único: o STF declarou sua NÃO RECEPÇÃO na ADPF 357, então leia o enunciado antes de responder. A EC 132/2023 não alterou os arts. 183 a 193.";

var UNITS = [
  {n:1, title:"Garantias e patrimônio do devedor", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Arts. 183 a 185-A e as preferências", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · garantias e art. 184",      xp:25, data:["S1","S2","S3","T0","T1","T2","T3","T4","T5","T43"]},
    {id:"K3", type:"flash",  title:"Flashcards · garantias e patrimônio",  xp:15, data:[0,1,2,3,4,5,6,7]}
  ]},
  {n:2, title:"Fraude à execução e indisponibilidade", cvar:"u2", lessons:[
    {id:"K4", type:"drill",  title:"Praticar · presunção de fraude",       xp:25, data:["S4","S5","S6","S7","T6","T7","T8","T9","T10","T11"]},
    {id:"K5", type:"drill",  title:"Praticar · penhora eletrônica",        xp:25, data:["S8","S9","T12","T13","T14"]},
    {id:"K6", type:"flash",  title:"Flashcards · fraude e indisponibilidade", xp:15, data:[8,9,10,11,12,13,14,15,16,17,18,19]}
  ]},
  {n:3, title:"Preferências e a ordem na falência", cvar:"u3", lessons:[
    {id:"K7", type:"drill",  title:"Praticar · regra geral do art. 186",   xp:25, data:["S10","S11","T15","T16"]},
    {id:"K8", type:"drill",  title:"Praticar · o crédito tributário na falência", xp:25, data:["S12","S14","S15","T17","T18","T19","T20","T21"]},
    {id:"K9", type:"drill",  title:"Praticar · as oito classes de credores", xp:25, data:["S13","S16","T22","T23","T24","T25","T26","T27"]},
    {id:"K10",type:"flash",  title:"Flashcards · preferências",            xp:15, data:[20,21,22,23,24,25,26,27,28,29,30,31,32,33]}
  ]},
  {n:4, title:"Autonomia da execução e outros processos", cvar:"u4", lessons:[
    {id:"K11",type:"drill",  title:"Praticar · art. 187 e a ADPF 357",     xp:25, data:["S17","S18","T28","T29","T30","T31"]},
    {id:"K12",type:"drill",  title:"Praticar · falência, inventário e liquidação", xp:25, data:["S19","S20","T32","T33","T34","T35"]},
    {id:"K13",type:"flash",  title:"Flashcards · autonomia e processos",   xp:15, data:[34,35,36,37,38,39,40,41,42]}
  ]},
  {n:5, title:"Prova de quitação dos tributos", cvar:"u5", lessons:[
    {id:"K14",type:"drill",  title:"Praticar · arts. 191 a 193",           xp:25, data:["S21","S22","T36","T37","T38","T39","T40","T41","T42"]},
    {id:"K15",type:"flash",  title:"Flashcards · prova de quitação",       xp:15, data:[43,44,45,46,47,48,49,50,51,52]}
  ]},
  {n:6, title:"Fixação", cvar:"u1", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",              xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",               xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo, art. 183. O comentário do Resumo é direto: as garantias do crédito tributário <b>não são taxativas</b> — leis ordinárias podem prever outras, em função da natureza ou das características do tributo.</p><p>Exemplo do material: em regime de <b>admissão temporária</b>, pode-se exigir garantia de que, se o bem não retornar ao país de origem, o imposto de importação será pago.</p><p class='fb-fonte'>Resumo 12 · <i>Garantias — art. 183</i></p>",
1:"<p>Errado — o parágrafo único do art. 183 diz exatamente o contrário: a natureza das garantias <b>não altera</b> a natureza do crédito nem a da obrigação tributária.</p><p>Exemplo do Resumo: se a garantia for uma <b>hipoteca</b>, o crédito não vira crédito hipotecário — <b>permanece crédito tributário</b>.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 183, parágrafo único</i></p>",
2:"<p>Certo, art. 184. Responde pelo crédito tributário <b>a totalidade dos bens e rendas</b>, de qualquer origem ou natureza, do sujeito passivo — inclusive os gravados por <b>ônus real</b> (ex.: hipoteca) ou por cláusula de <b>inalienabilidade ou impenhorabilidade</b>.</p><p>Única exceção: os bens e rendas que a <b>lei</b> declare <b>absolutamente impenhoráveis</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Patrimônio que responde pelo crédito — art. 184</i></p>",
3:"<p>Errado. O Resumo explica o alcance do art. 184: mesmo os bens declarados impenhoráveis ou inalienáveis <b>por ato de vontade do particular</b> ficam submetidos à cobrança do crédito tributário.</p><p>Só a impenhorabilidade <b>declarada em lei</b> — absoluta — resiste ao Fisco.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 184</i></p>",
4:"<p>Certo — é a Observação 1 do Resumo e o exemplo do André.</p><p>O <b>bem de família</b> (único imóvel residencial) em regra não responde por dívidas tributárias, <b>exceto</b> quando a execução é para cobrança de <b>IPTU, taxas e contribuições devidas em função do próprio imóvel familiar</b> (Lei 8.009/90, art. 3º, IV).</p><p class='fb-fonte'>Resumo 12 · <i>OBS. — bem de família e IPTU</i></p>",
5:"<p>Errado — inverteu. Observação 2 do Resumo: a impenhorabilidade do bem de família <b>não é oponível</b> à cobrança do <b>IPTU</b>, mas <b>pode ser oposta</b> à cobrança do <b>imposto de renda</b>.</p><p>A exceção da Lei 8.009/90 é restrita aos tributos devidos <b>em função do próprio imóvel</b>.</p><p class='fb-fonte'>Resumo 12 · <i>OBS. 2 — bem de família x IR</i></p>",
6:"<p>Certo, art. 185. O marco temporal, como frisa o Resumo, é a <b>inscrição em dívida ativa</b>.</p><p>Para a presunção, três situações devem ocorrer <b>cumulativamente</b>: crédito inscrito em dívida ativa; alienação de bens (ou seu começo); e <b>não reservar</b> bens ou rendas para quitar o crédito inscrito.</p><p class='fb-fonte'>Resumo 12 · <i>Fraude à execução fiscal — art. 185</i></p>",
7:"<p>Errado — o Resumo marca isso como <b>PEGADINHA</b>: dizer que a presunção de fraude ocorre somente após a ação de execução fiscal.</p><p>A presunção ocorre após a <b>Inscrição em Dívida Ativa</b>, que é bem anterior ao ajuizamento.</p><p class='fb-fonte'>Resumo 12 · <i>PEGADINHA — art. 185</i></p>",
8:"<p>Certo — parágrafo único do art. 185: a presunção não se aplica se o devedor tiver <b>reservado bens ou rendas suficientes ao total pagamento</b> da dívida inscrita.</p><p>É o terceiro requisito da lista do Resumo, na forma negativa.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 185, parágrafo único</i></p>",
9:"<p>Errado. Observação 3 do Resumo: a presunção do caput do art. 185 é <b>puramente objetiva</b> — <b>não se considera a intenção do devedor</b>.</p><p>Constatada a situação legal, há <b>presunção absoluta</b> de alienação fraudulenta. É o entendimento do <b>STJ (REsp 1.141.990)</b> e da doutrina dominante, ambos citados no material.</p><p class='fb-fonte'>Resumo 12 · <i>OBS. 3 — STJ, REsp 1.141.990</i></p>",
10:"<p>Errado. Observação 1 do Resumo: a presunção de fraude também se aplica à <b>oneração de bens</b>.</p><p>Exemplo do material: o devedor já inscrito em dívida ativa <b>oferece bens como garantia de outro crédito</b> — isso também é presumidamente fraudulento.</p><p class='fb-fonte'>Resumo 12 · <i>OBS. 1 — art. 185</i></p>",
11:"<p>Certo — Observação 2 do Resumo, que lista as três funções da inscrição em dívida ativa:</p><p>· condição para a extração do <b>título executivo extrajudicial</b>;<br>· condição para viabilizar a <b>propositura da execução fiscal</b>;<br>· o <b>marco temporal</b> para a presunção de fraude à execução.</p><p class='fb-fonte'>Resumo 12 · <i>OBS. 2 — inscrição em dívida ativa</i></p>",
12:"<p>Certo, art. 185-A. São <b>requisitos cumulativos</b> no esquema do Resumo: devedor <b>devidamente citado</b>; que <b>não pague nem apresente bens à penhora</b> no prazo legal; <b>e</b> que <b>não sejam encontrados bens penhoráveis</b>.</p><p>O material destaca que a penhora on-line ocorre <b>somente no curso da ação de execução fiscal</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Penhora on-line — art. 185-A</i></p>",
13:"<p>Errado — <b>Súmula 560 do STJ</b>, transcrita no Resumo: a indisponibilidade do art. 185-A <b>pressupõe o exaurimento das diligências</b> na busca por bens penhoráveis.</p><p>O exaurimento fica caracterizado quando infrutíferos o pedido de constrição sobre <b>ativos financeiros</b> e a expedição de ofícios aos <b>registros públicos</b> do domicílio do executado, ao <b>Denatran ou Detran</b>.</p><p class='fb-fonte'>Resumo 12 · <i>STJ Súmula 560</i></p>",
14:"<p>Certo, art. 185-A. Os destinatários da comunicação, nos exemplos do Resumo:</p><p>· órgãos que promovem registros de transferência de bens (<b>DETRAN</b>);<br>· <b>registro público de imóveis</b> (Cartório de Registro de Imóveis);<br>· autoridades do mercado bancário (<b>BACEN</b>);<br>· autoridades do mercado de capitais (<b>CVM</b>).</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 185-A</i></p>",
15:"<p>Certo, art. 186 — é a <b>regra geral</b> das preferências (fora da falência).</p><p>O crédito tributário prefere a qualquer outro, <b>seja qual for sua natureza ou o tempo de sua constituição</b>, ressalvados apenas os créditos <b>trabalhistas</b> e os de <b>acidente de trabalho</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Preferências — art. 186</i></p>",
16:"<p>Errado. Observação 1 do Resumo: ressalvados os trabalhistas e acidentários, o crédito tributário tem prioridade sobre <b>qualquer outro, inclusive sobre o crédito com garantia real</b>.</p><p>Exemplo do material: terreno hipotecado ao banco; a Fazenda Municipal <b>pode penhorá-lo</b> para cobrar IPTU, porque fora da falência o crédito tributário se sobrepõe ao crédito com garantia real.</p><p class='fb-fonte'>Resumo 12 · <i>OBS. 1 — art. 186 (regra geral)</i></p>",
17:"<p>Certo — art. 186, parágrafo único, I. Na <b>falência</b>, precedem ao crédito tributário, além dos trabalhistas e acidentários:</p><p>· os <b>créditos extraconcursais</b>;<br>· as <b>importâncias passíveis de restituição</b>;<br>· os <b>créditos com garantia real</b>, <b>no limite do valor do bem gravado</b>.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 186, p.ú., I</i></p>",
18:"<p>Errado. O limite é o <b>valor do bem gravado</b> — e o Resumo faz questão de anotar: \"<b>não é no limite do valor das dívidas</b>\".</p><p>O que exceder o valor do bem já não goza da preferência.</p><p class='fb-fonte'>Resumo 12 · <i>Art. 186, p.ú., I — limite do bem gravado</i></p>",
19:"<p>Certo, art. 186, parágrafo único, II. O Resumo explica onde isso foi usado: a <b>Lei 11.101/05</b> estipulou o limite de <b>150 salários-mínimos por credor</b> para a preferência trabalhista.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 186, p.ú., II</i></p>",
20:"<p>Errado. O Resumo destaca: o limite de 150 salários-mínimos por credor <b>não se aplica aos créditos decorrentes de acidentes de trabalho</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Lei 11.101/05 — limite trabalhista</i></p>",
21:"<p>Certo, art. 186, parágrafo único, III. Na falência a <b>multa tributária não tem a mesma preferência do crédito tributário</b>: ela prefere apenas aos <b>créditos subordinados</b>.</p><p>Exemplo de crédito subordinado no Resumo: o crédito dos <b>sócios da empresa falida</b>.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 186, p.ú., III</i></p>",
22:"<p>Certo, art. 188. O Resumo alerta, porém, que os extraconcursais <b>não se limitam</b> a esses: a Lei 11.101/05, no art. 84, define outros.</p><p>O material define os extraconcursais como os créditos contraídos pela <b>massa falida</b> durante o procedimento concursal, ou pelo devedor durante a recuperação judicial que se convolou em falência.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 188</i></p>",
23:"<p>Certo — e o Resumo abre um quadro ATENÇÃO exatamente sobre isso: a <b>principal espécie cobrada em provas</b> entre os extraconcursais do art. 84 da Lei Falimentar é a <b>remuneração devida ao administrador judicial</b>.</p><p>Também são extraconcursais os reembolsos a membros do Comitê de Credores e os créditos trabalhistas relativos a serviços prestados <b>após a decretação da falência</b>.</p><p class='fb-fonte'>Resumo 12 · <i>ATENÇÃO — Lei 11.101/05, art. 84</i></p>",
24:"<p>Certo — definição do Resumo, com base no art. 85, parágrafo único, da Lei 11.101/05: são bens ou valores vendidos por <b>terceiros de boa-fé</b> ao devedor falido nos <b>15 dias anteriores</b> ao requerimento de sua falência.</p><p>A finalidade é proteger quem vendeu de boa-fé, desconhecendo a situação financeira do comprador; o credor pede a restituição do bem <b>antes</b> que ele concorra com os demais créditos.</p><p class='fb-fonte'>Resumo 12 · <i>Importâncias passíveis de restituição</i></p>",
25:"<p>Errado. Na tabela de ordem de preferência da falência, no Resumo, os créditos com <b>garantia real</b> vêm em <b>3º</b> lugar e os <b>tributários</b> em <b>4º</b>.</p><p>A ordem completa do material: 1) extraconcursais · 2) trabalhistas e acidentários (limite de 150 s.m. por credor) · 3) garantia real · 4) tributários · 5) quirografários · 6) multas contratuais e tributárias · 7) subordinados · 8) juros vencidos após a falência.</p><p>O material explica o porquê: é <b>política econômica</b> — se o banco não tivesse prioridade, não emprestaria a empresa em dificuldade, já que depois dos créditos tributários geralmente não sobra nada.</p><p class='fb-fonte'>Resumo 12 · <i>Ordem de preferência na falência</i></p>",
26:"<p>Certo — Observação 1 da tabela do Resumo, com base no art. 83, § 6º, da Lei 11.101/05: os créditos que disponham de <b>privilégio especial ou geral</b> em outras normas integram a classe dos <b>quirografários</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Lei 11.101/05 — art. 83, § 6º</i></p>",
27:"<p>Certo — Observação 2 da tabela do Resumo: <b>Súmula 307 do STJ</b>. A restituição de adiantamento de contrato de câmbio, na falência, deve ser atendida <b>antes de qualquer crédito</b>.</p><p>Coerente com a lógica das importâncias passíveis de restituição: é \"prioridade da prioridade\".</p><p class='fb-fonte'>Resumo 12 · <i>STJ Súmula 307</i></p>",
28:"<p>Errado, art. 187: a cobrança judicial do crédito tributário <b>não é sujeita</b> a concurso de credores ou habilitação em falência, recuperação judicial, concordata, inventário ou arrolamento.</p><p>O Resumo resume: os demais credores devem se habilitar no <b>juízo universal</b>; essa é a regra para todos, <b>exceto para o Fisco</b>, que pode ajuizar ação individual.</p><p class='fb-fonte'>Resumo 12 · <i>Autonomia da execução fiscal — art. 187</i></p>",
29:"<p>Certo — é a ressalva do comentário do Resumo ao art. 187: o Fisco pode ajuizar ação individual, <b>contudo, será respeitada a ordem de preferência dos demais créditos</b>.</p><p>Não se habilitar no juízo universal não significa furar a fila do art. 186.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 187</i></p>",
30:"<p>Certo pela <b>literalidade</b> do parágrafo único do art. 187: I — União; II — Estados, DF e Territórios, conjuntamente e <b>pró rata</b>; III — Municípios, conjuntamente e pró rata.</p><p>Mas leia o item seguinte: o Resumo alerta que o STF decidiu pela <b>não recepção</b> desse dispositivo (ADPF 357, 2021), e recomenda verificar se a questão quer a letra do CTN ou o entendimento do STF.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 187, parágrafo único</i></p>",
31:"<p>Certo — quadro ATENÇÃO do Resumo: o tema foi julgado pelo STF em <b>2021</b>, na <b>ADPF 357</b>, decidindo-se pela <b>não recepção do parágrafo único do art. 187 do CTN</b>.</p><p>Conclusão do material: fique atento ao enunciado — se pede a literalidade do CTN ou o entendimento do STF.</p><p class='fb-fonte'>Resumo 12 · <i>ATENÇÃO — STF, ADPF 357</i></p>",
32:"<p>Errado, art. 188, § 1º. Contestado o crédito tributário, <b>não compete ao juiz da falência decidir</b>: ele <b>remeterá as partes ao processo competente</b>.</p><p>O Resumo observa que o mesmo vale para a <b>concordata</b> (§ 2º) — definida ali como um processo de falência mais brando, acordo do comerciante insolvente com seus credores para evitar a falência.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 188, §§ 1º e 2º</i></p>",
33:"<p>Certo, art. 188, § 1º. Ao remeter as partes ao juízo competente, o juiz manda <b>reservar bens suficientes à extinção total do crédito e seus acrescidos</b>, se a massa não puder garantir a instância de outra forma — <b>ouvido o representante da Fazenda Pública</b> quanto à natureza e ao valor dos bens reservados.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 188, § 1º</i></p>",
34:"<p>Certo, art. 189: os créditos tributários <b>vencidos ou vincendos</b> a cargo do <i>de cujus</i> ou do espólio, exigíveis no decurso do inventário ou arrolamento, são pagos <b>preferencialmente a quaisquer créditos habilitados</b> ou outros encargos do monte.</p><p>O parágrafo único remete ao art. 188, § 1º: contestado o crédito, reservam-se bens e vai-se ao juízo competente.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 189</i></p>",
35:"<p>Certo, art. 190. No esquema do Resumo, <b>inventário/arrolamento</b> (art. 189) e <b>liquidação judicial ou voluntária</b> (art. 190) seguem a mesma regra: os créditos tributários vencidos ou vincendos são pagos <b>preferencialmente a quaisquer outros</b>.</p><p>O material adverte: <b>não confunda</b> com a falência, onde o crédito tributário perde para extraconcursais, importâncias passíveis de restituição e garantia real.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 190</i></p>",
36:"<p>Certo, art. 191: a extinção das obrigações do falido requer <b>prova de quitação de todos os tributos</b>.</p><p>Em regra, explica o Resumo, essa comprovação se faz por <b>Certidão Negativa de Débitos</b>.</p><p class='fb-fonte'>Resumo 12 · <i>Prova de quitação — art. 191</i></p>",
37:"<p>Errado pela letra do art. 191-A: a concessão de recuperação judicial <b>depende</b> da apresentação da prova de quitação de todos os tributos, observados os arts. 151, 205 e 206.</p><p>Mas o Resumo registra o contraponto: o <b>STJ (REsp 1.864.625, julgado em 26.06.2020)</b> entende que a apresentação de certidões negativas <b>não é requisito obrigatório</b> para a recuperação judicial. Verifique o que o enunciado pede — a letra do CTN ou o STJ.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 191-A · STJ REsp 1.864.625</i></p>",
38:"<p>Certo. O Resumo explica a remissão feita pelo art. 191-A: o art. 206 permite a <b>Certidão Positiva com Efeitos de Negativa (CPEN)</b> quando o crédito está com a <b>exigibilidade suspensa</b> (art. 151).</p><p>Embora exista a dívida, os efeitos da certidão são os mesmos da negativa — e ela serve para a concessão da recuperação judicial.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — arts. 191-A, 151, 205 e 206</i></p>",
39:"<p>Certo, art. 192. O Resumo esclarece os termos: <b>partilha</b> quando há vários herdeiros; <b>adjudicação</b> quando há um único herdeiro.</p><p>Nenhuma das duas sentenças sai sem prova de quitação dos tributos relativos aos <b>bens do espólio ou às suas rendas</b>.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 192</i></p>",
40:"<p>Certo, art. 193 — e note as duas ressalvas da própria letra: \"<b>salvo quando expressamente autorizado por lei</b>\" e a quitação é a dos tributos relativos à <b>atividade em cujo exercício contrata ou concorre</b>.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 193</i></p>",
41:"<p>Errado. O comentário do Resumo é preciso: o contratante ou proponente só precisa demonstrar quitação dos tributos relativos <b>ao ente federativo com o qual está celebrando o contrato</b> — a \"Fazenda Pública interessada\".</p><p>Não se exige certidão de todos os entes.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 193</i></p>",
42:"<p>Certo. O art. 193, transcrito no Resumo, alcança nenhum departamento da administração pública da União, dos Estados, do DF ou dos Municípios — <b>ou sua autarquia</b>.</p><p class='fb-fonte'>Resumo 12 · <i>CTN — art. 193</i></p>",
43:"<p>Certo — é a distinção de abertura do Resumo:</p><p><b>GARANTIAS</b>: mecanismos criados pelo legislador para <b>facilitar a cobrança</b> do crédito tributário.<br><b>PRIVILÉGIOS</b> (ou preferências): conferem ao crédito tributário <b>prioridade de pagamento</b> em relação às demais dívidas do devedor.</p><p class='fb-fonte'>Resumo 12 · <i>Garantias e privilégios</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"12", nome:"Garantias e privilégios do crédito tributário", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
