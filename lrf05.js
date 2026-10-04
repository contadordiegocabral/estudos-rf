/* LRF — Módulo 05: Dívida e endividamento (arts. 29 a 42) */
window.MOD = window.MOD || {};
window.MOD.lrf05 = (function(){
"use strict";

var CARDS = [
  ["O que é dívida flutuante?","Os <b>compromissos exigíveis cujo pagamento independe de autorização orçamentária</b> — são despesas <b>extraorçamentárias</b>. <span class=\"lawref\">Dec. 93.872/86, art. 115, § 1º</span>"],
  ["O que integra a dívida flutuante?","<b>Restos a pagar</b> · <b>serviços da dívida</b> · <b>depósitos</b> · <b>operações de crédito por antecipação de receita (ARO)</b> · <b>papel-moeda</b>."],
  ["O que é dívida consolidada (fundada) no Decreto 93.872?","Os compromissos de <b>exigibilidade superior a 12 meses</b> e cujo pagamento <b>depende de autorização orçamentária</b>. <span class=\"lawref\">Dec. 93.872/86, art. 115, § 2º</span>"],
  ["A ARO é dívida flutuante ou consolidada?","<b>Flutuante.</b> É o clássico “débito de tesouraria”: entra e sai no mesmo exercício, sem autorização orçamentária para o pagamento."],
  ["Art. 29, I — dívida pública consolidada ou fundada","<b>Montante total, apurado sem duplicidade, das obrigações financeiras</b> do ente, assumidas em virtude de <b>leis, contratos, convênios ou tratados</b> e da <b>realização de operações de crédito</b>, para <b>amortização em prazo superior a doze meses</b>."],
  ["Art. 29, II — dívida pública mobiliária","Dívida pública representada por <b>títulos emitidos</b> pela <b>União</b>, inclusive os do <b>Banco Central do Brasil</b>, <b>Estados</b> e <b>Municípios</b>."],
  ["Art. 29, III — operação de crédito","Compromisso financeiro assumido em razão de <b>mútuo</b>, <b>abertura de crédito</b>, <b>emissão e aceite de título</b>, <b>aquisição financiada de bens</b>, <b>recebimento antecipado de valores</b>, <b>arrendamento mercantil</b> e outras operações assemelhadas, <b>inclusive com uso de derivativos financeiros</b>."],
  ["Art. 29, IV — concessão de garantia","<b>Compromisso de adimplência de obrigação financeira ou contratual</b> assumida por ente da Federação ou entidade a ele vinculada."],
  ["Art. 29, V — refinanciamento da dívida mobiliária","<b>Emissão de títulos para pagamento do principal acrescido da atualização monetária.</b>"],
  ["Art. 29, § 1º — o que se equipara a operação de crédito","A <b>assunção, o reconhecimento ou a confissão de dívidas</b> pelo ente da Federação <b>sem autorização orçamentária</b>, nos termos do art. 37."],
  ["Art. 29, § 2º — títulos do Banco Central","Serão <b>incluídos na dívida pública consolidada da União</b> os títulos de <b>responsabilidade do Banco Central do Brasil</b>."],
  ["Art. 29, § 3º — a operação curta que vira consolidada","Também integram a dívida consolidada as operações de crédito de <b>prazo inferior a 12 meses cujas receitas tenham constado do orçamento</b>."],
  ["Onde entram os precatórios não pagos?","Os <b>precatórios judiciais não pagos</b> durante a execução do orçamento em que houverem sido incluídos <b>integram a dívida consolidada</b>, para fins de aplicação dos limites. <span class=\"lawref\">Art. 30, § 7º</span>"],
  ["O que é a Dívida Consolidada Líquida (DCL)?","A dívida consolidada <b>menos</b> as <b>disponibilidades de caixa</b>, as <b>aplicações financeiras</b> e os <b>demais haveres financeiros</b>."],
  ["Art. 34 — o Banco Central pode emitir títulos da dívida pública?","<b>Não.</b> O BACEN <b>não emitirá títulos da dívida pública</b> a partir de dois anos após a publicação da LRF."],
  ["Toda operação de crédito traz ingresso de dinheiro?","<b>Não.</b> A <b>aquisição financiada de bens</b> em prazo superior a 12 meses é operação de crédito sem qualquer ingresso de recursos."],
  ["Art. 30 — a quem o Presidente submete as propostas de limites?","Ao <b>Senado Federal</b>, os limites globais da <b>dívida consolidada</b> da União, Estados e Municípios; ao <b>Congresso Nacional</b>, projeto de lei com os limites da <b>dívida mobiliária federal</b>. Prazo: <b>90 dias</b> da publicação da LRF."],
  ["Quem fixa cada limite — o quadro","<b>Dívida consolidada</b> (União, Estados, DF e Municípios) → <b>Senado</b>. <b>Dívida mobiliária FEDERAL</b> → <b>Congresso Nacional</b> (lei). <b>Dívida mobiliária estadual e municipal</b> → <b>Senado</b> <span class=\"lawref\">CF, art. 52, IX</span>."],
  ["Art. 30, § 3º — em que os limites são expressos?","Em <b>percentual da receita corrente líquida</b> para cada esfera de governo, aplicados igualmente a todos os entes e constituindo <b>limites máximos</b>."],
  ["Art. 30, § 4º — de quanto em quanto se apura a dívida?","Ao <b>final de cada quadrimestre</b>."],
  ["Art. 31 — a regra da recondução","Se a dívida consolidada ultrapassar o limite ao final de um quadrimestre, deverá ser reconduzida até o término dos <b>três quadrimestres subsequentes</b>, reduzindo o excedente em pelo menos <b>25%</b> no primeiro."],
  ["Art. 23 × art. 31 — não confunda","<b>Pessoal (art. 23):</b> <b>2</b> quadrimestres, <b>1/3</b> no primeiro. <b>Dívida (art. 31):</b> <b>3</b> quadrimestres, <b>1/4 (25%)</b> no primeiro."],
  ["Art. 31, § 1º, I — o que fica proibido enquanto perdurar o excesso","<b>Operação de crédito interna ou externa, inclusive por antecipação de receita</b>, ressalvado o <b>refinanciamento do principal atualizado da dívida mobiliária</b>."],
  ["Art. 31, § 1º, II — o que o ente deve fazer","Obter <b>resultado primário</b> necessário à recondução, promovendo, entre outras medidas, <b>limitação de empenho</b> na forma do art. 9º."],
  ["Art. 31, § 2º — a sanção que vem depois do prazo","Vencido o prazo e enquanto perdurar o excesso, o ente fica <b>impedido de receber transferências voluntárias</b> da União ou do Estado."],
  ["Art. 31, § 3º — a aceleração no fim do mandato","As restrições aplicam-se <b>imediatamente</b> se a dívida exceder o limite no <b>primeiro quadrimestre do último ano de mandato</b> do Chefe do Executivo."],
  ["Arts. 65 e 66 — o que suspende e o que duplica","<b>Calamidade pública</b> (art. 65, I): <b>suspende</b> a contagem dos prazos dos arts. 23 e 31. <b>PIB baixo ou negativo</b> por ≥ 4 trimestres (art. 66): <b>duplica</b> esses prazos."],
  ["Art. 32 — quem verifica as operações de crédito?","O <b>Ministério da Fazenda</b> verifica o cumprimento dos limites e condições de cada ente, <b>inclusive das empresas por eles controladas</b>, direta ou indiretamente."],
  ["Senado × Ministério da Fazenda","O <b>Senado fixa</b> os limites e as condições; o <b>Ministério da Fazenda verifica</b> se estão sendo respeitados."],
  ["Art. 33 — o dever da instituição financeira","Ao contratar operação de crédito com ente da Federação — <b>exceto</b> a relativa à dívida <b>mobiliária</b> ou <b>externa</b> — deve <b>exigir comprovação</b> de que a operação atende às condições e limites."],
  ["Art. 33, § 1º — o que acontece com a operação irregular","É <b>nula</b>: cancela-se mediante <b>devolução do principal</b>, <b>vedados o pagamento de juros e demais encargos financeiros</b>."],
  ["Art. 35 — a vedação central","É vedada a operação de crédito <b>entre um ente da Federação e outro</b>, diretamente ou por fundo, autarquia, fundação ou empresa estatal dependente, <b>ainda que sob a forma de novação, refinanciamento ou postergação</b> de dívida anterior."],
  ["Art. 35, § 1º — a exceção e os seus dois limites","Excetuam-se as operações entre <b>instituição financeira estatal</b> e outro ente, desde que <b>não</b> se destinem a <b>financiar despesas correntes</b> nem a <b>refinanciar dívidas não contraídas junto à própria instituição concedente</b>."],
  ["Art. 35, § 2º — o que a vedação não impede","Estados e Municípios <b>podem comprar títulos da dívida da União</b> como <b>aplicação de suas disponibilidades</b>."],
  ["Art. 36 — a instituição financeira e quem a controla","É <b>proibida</b> a operação de crédito entre <b>instituição financeira estatal</b> e o <b>ente que a controle</b>, na qualidade de <b>beneficiário do empréstimo</b>. Mas ela pode <b>adquirir no mercado</b> títulos da dívida pública para clientes ou títulos da União para recursos próprios."],
  ["Art. 37 — as quatro operações equiparadas e vedadas","<b>1)</b> antecipação de receita de tributo cujo <b>fato gerador ainda não ocorreu</b>; <b>2)</b> recebimento antecipado de valores de empresa estatal (salvo lucros e dividendos); <b>3)</b> assunção/confissão de dívida com fornecedor mediante título de crédito (não se aplica a <b>estatais dependentes</b>); <b>4)</b> assunção de obrigação <b>sem autorização orçamentária</b> com fornecedores para pagamento a posteriori."],
  ["Art. 38 — o que é a ARO","Operação de crédito destinada a atender <b>insuficiência de caixa durante o exercício financeiro</b>."],
  ["Art. 38, I e II — as duas datas","Realiza-se somente a partir do <b>décimo dia do início do exercício</b> e deve ser <b>liquidada, com juros e encargos, até 10 de dezembro</b> de cada ano."],
  ["Art. 38, IV — quando a ARO está proibida","<b>a)</b> enquanto existir <b>operação anterior da mesma natureza não integralmente resgatada</b>; <b>b)</b> no <b>último ano de mandato</b> do Presidente, Governador ou Prefeito."],
  ["Art. 40 — o que é garantia e o que exige","Os entes podem conceder garantia em operações de crédito internas ou externas, <b>condicionada ao oferecimento de contragarantia em valor igual ou superior</b> e à <b>adimplência</b> de quem a pleiteia."],
  ["Art. 40, § 1º, I e II — as duas regras da contragarantia","<b>I –</b> <b>não será exigida</b> contragarantia de órgãos e entidades <b>do próprio ente</b>. <b>II –</b> a contragarantia da União a Estado/Município pode consistir na <b>vinculação de receitas tributárias e transferências constitucionais</b>, com poder de retenção pelo garantidor."],
  ["Art. 42 — a regra de ouro do fim de mandato","É vedado ao titular de Poder ou órgão, nos <b>últimos dois quadrimestres do mandato</b>, contrair obrigação de despesa que não possa ser cumprida integralmente dentro dele, ou com parcelas no exercício seguinte <b>sem suficiente disponibilidade de caixa</b>."]
];

var QS = [
  ["A dívida flutuante compreende os compromissos exigíveis cujo pagamento independe de autorização orçamentária.","C","CESPE","Decreto 93.872/86, art. 115, § 1º — são despesas extraorçamentárias."],
  ["Integram a dívida flutuante os restos a pagar, os serviços da dívida, os depósitos e as operações de crédito por antecipação de receita.","C","FCC","Rol do art. 115 do Decreto 93.872/86, ao lado do papel-moeda."],
  ["A dívida consolidada compreende os compromissos de exigibilidade superior a doze meses cujo pagamento independe de autorização orçamentária.","E","FGV","Na consolidada o pagamento <b>depende</b> de autorização orçamentária. Quem independe é a <b>flutuante</b>."],
  ["A operação de crédito por antecipação de receita orçamentária integra a dívida consolidada do ente.","E","CESPE","A ARO compõe a <b>dívida flutuante</b> — é o débito de tesouraria."],
  ["Dívida pública consolidada é o montante total, apurado sem duplicidade, das obrigações financeiras do ente assumidas em virtude de leis, contratos, convênios ou tratados e da realização de operações de crédito, para amortização em prazo superior a doze meses.","C","FCC","Art. 29, I — literalidade muito cobrada."],
  ["Dívida pública mobiliária é a representada por títulos emitidos pela União, inclusive os do Banco Central do Brasil, Estados e Municípios.","C","CESPE","Art. 29, II."],
  ["Somente a União pode emitir títulos representativos de dívida pública mobiliária.","E","VUNESP","O art. 29, II, alcança também Estados e Municípios. O que o art. 34 proíbe é a emissão pelo <b>BACEN</b>."],
  ["Considera-se operação de crédito o compromisso financeiro assumido em razão de mútuo, abertura de crédito, emissão e aceite de título, aquisição financiada de bens, arrendamento mercantil e recebimento antecipado de valores.","C","FGV","Art. 29, III — inclusive com uso de derivativos financeiros."],
  ["A aquisição financiada de bens móveis em prazo superior a doze meses não configura operação de crédito, por não haver ingresso de recursos financeiros no ente.","E","CESPE","Nem toda operação de crédito traz ingresso de dinheiro. A aquisição financiada é expressamente operação de crédito."],
  ["Concessão de garantia é o compromisso de adimplência de obrigação financeira ou contratual assumida por ente da Federação ou entidade a ele vinculada.","C","FCC","Art. 29, IV."],
  ["Refinanciamento da dívida mobiliária consiste na emissão de títulos para pagamento do principal acrescido da atualização monetária.","C","VUNESP","Art. 29, V."],
  ["Integram a dívida pública consolidada as operações de crédito de prazo inferior a doze meses cujas receitas tenham constado do orçamento.","C","CESPE","Art. 29, § 3º — a operação curta cuja receita foi orçada entra na consolidada."],
  ["Os precatórios judiciais não pagos durante a execução do orçamento em que houverem sido incluídos integram a dívida consolidada, para fins de aplicação dos limites.","C","FGV","Art. 30, § 7º."],
  ["A dívida consolidada líquida corresponde à dívida consolidada deduzidas as disponibilidades de caixa, as aplicações financeiras e os demais haveres financeiros.","C","FCC","Conceito usado pelas Resoluções do Senado e pelo RGF."],
  ["Será incluída na dívida pública consolidada da União a relativa à emissão de títulos de responsabilidade do Banco Central do Brasil.","C","CESPE","Art. 29, § 2º."],
  ["Equipara-se a operação de crédito, e está vedada, a assunção, o reconhecimento ou a confissão de dívidas pelo ente da Federação sem autorização orçamentária.","C","VUNESP","Art. 29, § 1º, remetendo ao art. 37."],
  ["Compete ao Congresso Nacional fixar os limites globais para o montante da dívida consolidada da União, dos Estados, do Distrito Federal e dos Municípios.","E","CESPE","É o <b>Senado Federal</b> (CF, art. 52, VI; LRF, art. 30, I)."],
  ["Cabe ao Senado Federal dispor sobre limites globais para o montante da dívida consolidada da União, dos Estados, do Distrito Federal e dos Municípios.","C","FCC","Art. 30, I."],
  ["Os limites para o montante da dívida mobiliária federal são estabelecidos por lei, mediante projeto encaminhado ao Congresso Nacional.","C","FGV","Art. 30, II, em conjunto com o art. 48, XIV, da Constituição."],
  ["Os limites da dívida mobiliária estadual e municipal são fixados pelo Congresso Nacional.","E","CESPE","São fixados pelo <b>Senado Federal</b> (CF, art. 52, IX). Ao Congresso cabe apenas a <b>mobiliária federal</b>."],
  ["Os limites da dívida serão fixados em percentual da receita corrente líquida para cada esfera de governo e constituirão, para cada ente, limites máximos.","C","FCC","Art. 30, § 3º."],
  ["Para verificação do atendimento do limite, a apuração do montante da dívida consolidada será efetuada ao final de cada semestre.","E","VUNESP","É ao final de cada <b>quadrimestre</b> (art. 30, § 4º)."],
  ["Se a dívida consolidada de um ente ultrapassar o respectivo limite ao final de um quadrimestre, deverá ser a ele reconduzida até o término dos três quadrimestres subsequentes, reduzindo-se o excedente em pelo menos vinte e cinco por cento no primeiro.","C","CESPE","Art. 31, caput."],
  ["A despesa total com pessoal que ultrapassar o limite deverá ser reconduzida até o término dos três quadrimestres seguintes, com redução de pelo menos vinte e cinco por cento no primeiro.","E","FGV","Isso é a regra da <b>dívida</b>. Pessoal são <b>dois</b> quadrimestres e <b>um terço</b> no primeiro (art. 23)."],
  ["Enquanto perdurar o excesso da dívida, o ente estará proibido de realizar operação de crédito interna ou externa, inclusive por antecipação de receita, ressalvado o refinanciamento do principal atualizado da dívida mobiliária.","C","FCC","Art. 31, § 1º, I."],
  ["Enquanto perdurar o excesso, o ente deverá obter resultado primário necessário à recondução da dívida ao limite, promovendo, entre outras medidas, limitação de empenho.","C","CESPE","Art. 31, § 1º, II, remetendo ao art. 9º."],
  ["Vencido o prazo para retorno da dívida ao limite, e enquanto perdurar o excesso, o ente ficará impedido de receber transferências voluntárias da União ou do Estado.","C","VUNESP","Art. 31, § 2º — a sanção só incide <b>depois</b> de vencido o prazo de recondução."],
  ["As restrições do art. 31, § 1º, aplicam-se imediatamente se o montante da dívida exceder o limite no primeiro quadrimestre do último ano de mandato do Chefe do Poder Executivo.","C","FGV","Art. 31, § 3º."],
  ["Na ocorrência de calamidade pública reconhecida pelo Congresso Nacional, serão suspensas a contagem dos prazos e as disposições dos arts. 23 e 31 enquanto perdurar a situação.","C","CESPE","Art. 65, I."],
  ["Os prazos dos arts. 23 e 31 serão duplicados no caso de crescimento real baixo ou negativo do PIB nacional, regional ou estadual por período igual ou superior a quatro trimestres.","C","FCC","Art. 66."],
  ["Compete ao Ministério da Fazenda verificar o cumprimento dos limites e condições relativos à realização de operações de crédito de cada ente da Federação, inclusive das empresas por eles controladas.","C","CESPE","Art. 32, caput."],
  ["Cabe ao Ministério da Fazenda fixar os limites e as condições para a realização de operações de crédito pelos entes da Federação.","E","VUNESP","Quem <b>fixa</b> é o <b>Senado</b>. O Ministério da Fazenda apenas <b>verifica</b> o cumprimento."],
  ["A instituição financeira que contratar operação de crédito com ente da Federação, exceto quando relativa à dívida mobiliária ou à externa, deverá exigir comprovação de que a operação atende às condições e limites estabelecidos.","C","FGV","Art. 33, caput."],
  ["A operação de crédito realizada com infração à Lei de Responsabilidade Fiscal será considerada nula, procedendo-se ao seu cancelamento mediante a devolução do principal, vedados o pagamento de juros e demais encargos financeiros.","C","FCC","Art. 33, § 1º."],
  ["O Banco Central do Brasil pode emitir títulos da dívida pública desde que previamente autorizado pelo Senado Federal.","E","CESPE","O art. 34 veda a emissão de títulos pelo BACEN, sem ressalva."],
  ["É vedada a realização de operação de crédito entre um ente da Federação e outro, ainda que sob a forma de novação, refinanciamento ou postergação de dívida contraída anteriormente.","C","VUNESP","Art. 35, caput — alcança fundos, autarquias, fundações e estatais dependentes."],
  ["A vedação de operações de crédito entre entes impede que Estados e Municípios adquiram títulos da dívida da União como aplicação de suas disponibilidades.","E","FGV","O art. 35, § 2º, ressalva expressamente essa aquisição."],
  ["Excetuam-se da vedação as operações entre instituição financeira estatal e outro ente da Federação que não se destinem a financiar despesas correntes ou a refinanciar dívidas não contraídas junto à própria instituição concedente.","C","CESPE","Art. 35, § 1º, I e II."],
  ["É proibida a operação de crédito entre uma instituição financeira estatal e o ente da Federação que a controle, na qualidade de beneficiário do empréstimo.","C","FCC","Art. 36, caput."],
  ["A instituição financeira controlada não pode adquirir no mercado títulos da dívida pública para atender investimento de seus clientes.","E","VUNESP","O art. 36, parágrafo único, permite — inclusive títulos da União para aplicação de recursos próprios."],
  ["Equipara-se a operação de crédito, e está vedada, a captação de recursos a título de antecipação de receita de tributo ou contribuição cujo fato gerador ainda não tenha ocorrido.","C","CESPE","Art. 37, I."],
  ["A assunção direta de compromisso, confissão de dívida ou operação assemelhada com fornecedor, mediante emissão, aceite ou aval de título de crédito, equipara-se a operação de crédito, vedação que não se aplica a empresas estatais dependentes.","C","FGV","Art. 37, III — a ressalva final é a pegadinha frequente."],
  ["Equipara-se a operação de crédito o recebimento antecipado de valores de empresa em que o Poder Público detenha a maioria do capital social com direito a voto, inclusive quanto a lucros e dividendos.","E","FCC","O art. 37, II, <b>ressalva</b> lucros e dividendos na forma da legislação."],
  ["A operação de crédito por antecipação de receita orçamentária destina-se a atender insuficiência de caixa durante o exercício financeiro e realizar-se-á somente a partir do décimo dia do início do exercício.","C","CESPE","Art. 38, caput e I."],
  ["A operação de crédito por antecipação de receita deverá ser liquidada, com juros e outros encargos incidentes, até o dia trinta e um de dezembro de cada ano.","E","VUNESP","O prazo é <b>10 de dezembro</b> (art. 38, II)."],
  ["É vedada a realização de operação de crédito por antecipação de receita enquanto existir operação anterior da mesma natureza não integralmente resgatada.","C","FCC","Art. 38, IV, a."],
  ["A operação de crédito por antecipação de receita é permitida no último ano de mandato do Chefe do Poder Executivo, desde que liquidada até 10 de dezembro.","E","FGV","O art. 38, IV, b, a proíbe no <b>último ano de mandato</b>, sem exceção."],
  ["A garantia estará condicionada ao oferecimento de contragarantia em valor igual ou superior ao da garantia a ser concedida e à adimplência da entidade que a pleitear.","C","CESPE","Art. 40, § 1º."],
  ["Será exigida contragarantia de órgãos e entidades do próprio ente que concede a garantia.","E","FCC","O art. 40, § 1º, I, dispensa expressamente a contragarantia nesse caso."],
  ["A contragarantia exigida pela União a Estado ou Município poderá consistir na vinculação de receitas tributárias diretamente arrecadadas e provenientes de transferências constitucionais, com outorga de poderes ao garantidor para retê-las.","C","VUNESP","Art. 40, § 1º, II."],
  ["É nula a garantia concedida acima dos limites fixados pelo Senado Federal.","C","CESPE","Art. 40, § 5º."],
  ["O ente da Federação cuja dívida tiver sido honrada pela União ou por Estado, em decorrência de garantia prestada, terá suspenso o acesso a novos créditos ou financiamentos até a total liquidação da dívida.","C","FGV","Art. 40, § 10."],
  ["É vedado ao titular de Poder ou órgão, nos últimos dois quadrimestres do seu mandato, contrair obrigação de despesa que não possa ser cumprida integralmente dentro dele, ou que tenha parcelas a serem pagas no exercício seguinte sem que haja suficiente disponibilidade de caixa.","C","CESPE","Art. 42, caput."],
  ["A vedação do art. 42 da LRF alcança os últimos cento e oitenta dias do mandato do titular de Poder ou órgão.","E","FCC","Cento e oitenta dias é o prazo do <b>art. 21, II</b>, para aumento de despesa com pessoal. O art. 42 fala em <b>dois quadrimestres</b>."],
  ["Na determinação da disponibilidade de caixa para os fins do art. 42, serão considerados os encargos e despesas compromissadas a pagar até o final do exercício.","C","VUNESP","Art. 42, parágrafo único."]
];

var FEY = {
  U1:{ask:"Explique as espécies de dívida pública e as definições do art. 29 da LRF.",
    hint:"Comece pela oposição flutuante × consolidada e o critério que as separa; depois percorra os cinco incisos do art. 29 e diga o que mais integra a consolidada.",
    ref:"A dívida pública divide-se em flutuante e consolidada. Segundo o art. 115 do Decreto nº 93.872/1986, a dívida flutuante compreende os compromissos exigíveis cujo pagamento independe de autorização orçamentária — restos a pagar, serviços da dívida, depósitos, operações de crédito por antecipação de receita e o papel-moeda —, ao passo que a dívida consolidada ou fundada compreende os compromissos de exigibilidade superior a doze meses cujo pagamento depende de autorização orçamentária. O art. 29 da Lei de Responsabilidade Fiscal define dívida pública consolidada ou fundada como o montante total, apurado sem duplicidade, das obrigações financeiras do ente da Federação assumidas em virtude de leis, contratos, convênios ou tratados e da realização de operações de crédito, para amortização em prazo superior a doze meses; dívida pública mobiliária como a representada por títulos emitidos pela União, inclusive os do Banco Central do Brasil, Estados e Municípios; operação de crédito como o compromisso financeiro assumido em razão de mútuo, abertura de crédito, emissão e aceite de título, aquisição financiada de bens, recebimento antecipado de valores, arrendamento mercantil e outras operações assemelhadas, inclusive com o uso de derivativos financeiros; concessão de garantia como o compromisso de adimplência de obrigação financeira ou contratual assumida por ente da Federação ou entidade a ele vinculada; e refinanciamento da dívida mobiliária como a emissão de títulos para pagamento do principal acrescido da atualização monetária. Além disso, equipara-se a operação de crédito e está vedada a assunção, o reconhecimento ou a confissão de dívidas sem autorização orçamentária; inclui-se na dívida consolidada da União a relativa aos títulos de responsabilidade do Banco Central; e também integram a dívida consolidada as operações de crédito de prazo inferior a doze meses cujas receitas tenham constado do orçamento, bem como os precatórios judiciais não pagos durante a execução do orçamento em que houverem sido incluídos."},
  U2:{ask:"Explique quem fixa os limites da dívida, como eles são apurados e o que acontece quando são ultrapassados.",
    hint:"Separe Senado e Congresso; depois a apuração quadrimestral, a recondução em três quadrimestres com 25%, as sanções do § 1º e do § 2º, e o papel do Ministério da Fazenda.",
    ref:"Nos termos do art. 30 da Lei de Responsabilidade Fiscal, o Presidente da República submete ao Senado Federal proposta de limites globais para o montante da dívida consolidada da União, dos Estados e dos Municípios e ao Congresso Nacional projeto de lei com os limites da dívida mobiliária federal; os limites da dívida mobiliária estadual e municipal, por sua vez, cabem ao Senado por força do art. 52, IX, da Constituição. Esses limites são fixados em percentual da receita corrente líquida para cada esfera de governo, aplicados igualmente a todos os entes e constituindo limites máximos, e a apuração do montante da dívida consolidada, para verificação de seu atendimento, é efetuada ao final de cada quadrimestre. Se a dívida ultrapassar o limite ao final de um quadrimestre, o art. 31 determina sua recondução até o término dos três quadrimestres subsequentes, com redução de pelo menos vinte e cinco por cento do excedente no primeiro — regra que não se confunde com a da despesa total com pessoal, reconduzida em dois quadrimestres com redução de um terço no primeiro. Enquanto perdurar o excesso, o ente fica proibido de realizar operação de crédito interna ou externa, inclusive por antecipação de receita, ressalvado o refinanciamento do principal atualizado da dívida mobiliária, e deve obter o resultado primário necessário à recondução, promovendo limitação de empenho na forma do art. 9º; vencido o prazo e persistindo o excesso, fica também impedido de receber transferências voluntárias da União ou do Estado. As restrições aplicam-se imediatamente se o limite for excedido no primeiro quadrimestre do último ano de mandato do Chefe do Executivo. Os prazos ficam suspensos na ocorrência de calamidade pública, por força do art. 65, I, e duplicados no caso de crescimento real baixo ou negativo do produto interno bruto por período igual ou superior a quatro trimestres, na forma do art. 66. Por fim, compete ao Ministério da Fazenda verificar o cumprimento dos limites e condições relativos às operações de crédito de cada ente, inclusive das empresas por eles controladas, cabendo à instituição financeira contratante exigir a comprovação correspondente, sob pena de nulidade da operação, que se cancela mediante devolução do principal, vedados juros e demais encargos."},
  U3:{ask:"Explique as vedações às operações de crédito, as operações equiparadas e o regime da ARO.",
    hint:"Art. 35 e sua exceção com os dois limites; art. 36; os quatro incisos do art. 37; e as exigências e proibições do art. 38.",
    ref:"O art. 35 da Lei de Responsabilidade Fiscal veda a realização de operação de crédito entre um ente da Federação, diretamente ou por intermédio de fundo, autarquia, fundação ou empresa estatal dependente, e outro ente, inclusive suas entidades da administração indireta, ainda que sob a forma de novação, refinanciamento ou postergação de dívida contraída anteriormente. Excetuam-se as operações entre instituição financeira estatal e outro ente da Federação que não se destinem a financiar, direta ou indiretamente, despesas correntes, nem a refinanciar dívidas não contraídas junto à própria instituição concedente; e a vedação não impede que Estados e Municípios adquiram títulos da dívida da União como aplicação de suas disponibilidades. O art. 36 proíbe a operação de crédito entre instituição financeira estatal e o ente da Federação que a controle, na qualidade de beneficiário do empréstimo, sem impedir que a instituição controlada adquira no mercado títulos da dívida pública para atender investimento de seus clientes ou títulos da dívida de emissão da União para aplicação de recursos próprios. O art. 37, por sua vez, equipara a operações de crédito, vedando-as, a captação de recursos a título de antecipação de receita de tributo ou contribuição cujo fato gerador ainda não tenha ocorrido; o recebimento antecipado de valores de empresa em que o Poder Público detenha a maioria do capital social com direito a voto, salvo lucros e dividendos; a assunção direta de compromisso, confissão de dívida ou operação assemelhada com fornecedor mediante emissão, aceite ou aval de título de crédito, não se aplicando essa vedação a empresas estatais dependentes; e a assunção de obrigação, sem autorização orçamentária, com fornecedores para pagamento a posteriori de bens e serviços. Quanto à operação de crédito por antecipação de receita orçamentária, o art. 38 estabelece que ela se destina a atender insuficiência de caixa durante o exercício financeiro, realizando-se somente a partir do décimo dia do início do exercício, devendo ser liquidada com juros e demais encargos até o dia dez de dezembro de cada ano, não sendo autorizada se cobrados outros encargos que não a taxa de juros da operação, e estando proibida enquanto existir operação anterior da mesma natureza não integralmente resgatada e no último ano de mandato do Presidente, Governador ou Prefeito."},
  U4:{ask:"Explique a garantia e a contragarantia na LRF e a regra do art. 42 sobre o fim de mandato.",
    hint:"Condição da contragarantia com as duas regras do § 1º, a nulidade do § 5º, a suspensão do § 10 e, depois, o art. 42 com o quadro dos três prazos de fim de mandato.",
    ref:"Nos termos do art. 40 da Lei de Responsabilidade Fiscal, os entes poderão conceder garantia em operações de crédito internas ou externas, observadas as normas do art. 32 e, no caso da União, os limites e condições estabelecidos pelo Senado Federal. A garantia estará condicionada ao oferecimento de contragarantia em valor igual ou superior ao da garantia a ser concedida e à adimplência da entidade que a pleitear relativamente a suas obrigações junto ao garantidor e às entidades por este controladas, observando-se que não será exigida contragarantia de órgãos e entidades do próprio ente e que a contragarantia exigida pela União a Estado ou Município, ou pelos Estados aos Municípios, poderá consistir na vinculação de receitas tributárias diretamente arrecadadas e provenientes de transferências constitucionais, com outorga de poderes ao garantidor para retê-las e empregar o respectivo valor na liquidação da dívida vencida. É nula a garantia concedida acima dos limites fixados pelo Senado Federal, e o ente cuja dívida tiver sido honrada pela União ou por Estado em decorrência de garantia prestada terá suspenso o acesso a novos créditos ou financiamentos até a total liquidação da dívida. Por fim, o art. 42 veda ao titular de Poder ou órgão, nos últimos dois quadrimestres do seu mandato, contrair obrigação de despesa que não possa ser cumprida integralmente dentro dele, ou que tenha parcelas a serem pagas no exercício seguinte sem que haja suficiente disponibilidade de caixa para este efeito, considerando-se, na determinação dessa disponibilidade, os encargos e despesas compromissadas a pagar até o final do exercício. Esse prazo não se confunde com os cento e oitenta dias anteriores ao final do mandato, em que é nulo o ato de que resulte aumento da despesa com pessoal (art. 21, II), nem com a proibição da operação de crédito por antecipação de receita no último ano de mandato do Chefe do Executivo (art. 38, IV, b)."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Duas dívidas, um critério",
      '<div class="box"><span class="bl">Decreto 93.872/86, art. 115</span><p>A separação entre <b>flutuante</b> e <b>consolidada</b> não é o valor nem o credor: é o <b>prazo</b> somado à <b>necessidade de autorização orçamentária</b> para pagar.</p></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Dívida flutuante</span><span class="cd">Pagamento <b>independe</b> de autorização orçamentária. É <b>extraorçamentária</b>.</span></div>'+
      '<div class="chip"><span class="cn">Dívida consolidada</span><span class="cd">Exigibilidade <b>superior a 12 meses</b> e pagamento que <b>depende</b> de autorização orçamentária.</span></div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">O rol da flutuante</span><ul><li><b>Restos a pagar</b></li><li><b>Serviços da dívida</b></li><li><b>Depósitos</b></li><li><b>Operações de crédito por antecipação de receita (ARO)</b></li><li><b>Papel-moeda</b></li></ul></div>'+
      '<div class="box trap"><span class="bl">A troca clássica</span><p>A banca inverte: escreve “consolidada” e diz que o pagamento <b>independe</b> de autorização orçamentária. Quem independe é a <b>flutuante</b>.</p></div>'),
    sl("Art. 29 — os cinco conceitos",
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">I</span><span class="nm">Dívida pública consolidada ou fundada</span></div><div class="fn-b"><p>Montante total, <b>apurado sem duplicidade</b>, das obrigações financeiras do ente assumidas em virtude de <b>leis, contratos, convênios ou tratados</b> e da <b>realização de operações de crédito</b>, para amortização em prazo <b>superior a doze meses</b>.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">II</span><span class="nm">Dívida pública mobiliária</span></div><div class="fn-b"><p>Dívida representada por <b>títulos emitidos</b> pela <b>União</b> — inclusive os do <b>BACEN</b> —, <b>Estados</b> e <b>Municípios</b>.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">III</span><span class="nm">Operação de crédito</span></div><div class="fn-b"><p><b>Mútuo</b> · <b>abertura de crédito</b> · <b>emissão e aceite de título</b> · <b>aquisição financiada de bens</b> · <b>arrendamento mercantil</b> · <b>recebimento antecipado de valores</b> · outras assemelhadas, <b>inclusive com derivativos</b>.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">IV</span><span class="nm">Concessão de garantia</span></div><div class="fn-b"><p><b>Compromisso de adimplência</b> de obrigação financeira ou contratual assumida por ente da Federação ou entidade a ele vinculada.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">V</span><span class="nm">Refinanciamento da dívida mobiliária</span></div><div class="fn-b"><p><b>Emissão de títulos</b> para pagamento do <b>principal acrescido da atualização monetária</b>.</p></div></div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">Operação de crédito sem dinheiro entrando</span><p>Comprar um bem financiado em 24 meses é <b>operação de crédito</b> — e não entrou um real no caixa. A banca gosta muito desse item.</p></div>'),
    sl("O que mais entra na dívida consolidada",
      '<div class="tree">'+
      '<div class="tree-root">Dívida consolidada</div>'+
      '<div class="leaf"><b>§ 2º</b> — os títulos de <b>responsabilidade do Banco Central</b> entram na dívida consolidada <b>da União</b>.</div>'+
      '<div class="leaf"><b>§ 3º</b> — as operações de crédito de <b>prazo inferior a 12 meses</b> cujas <b>receitas constaram do orçamento</b>.</div>'+
      '<div class="leaf"><b>Art. 30, § 7º</b> — os <b>precatórios judiciais não pagos</b> durante a execução do orçamento em que foram incluídos.</div>'+
      '</div>'+
      '<div class="box"><span class="bl">Dívida Consolidada Líquida (DCL)</span><p>Dívida consolidada <b>menos</b> disponibilidades de caixa, aplicações financeiras e demais haveres financeiros. É a DCL que o Senado limita em % da RCL.</p></div>'+
      '<div class="box trap"><span class="bl">Art. 29, § 1º</span><p>Equipara-se a operação de crédito e <b>está vedada</b> a <b>assunção, o reconhecimento ou a confissão de dívidas sem autorização orçamentária</b>. Guarde o par: art. 29, § 1º ↔ art. 37.</p></div>')
  ],
  V2:[
    sl("Quem fixa os limites",
      '<div class="box"><span class="bl">Art. 30 — prazo de 90 dias</span><p>O Presidente da República submeteu ao <b>Senado Federal</b> a proposta de limites da <b>dívida consolidada</b> e ao <b>Congresso Nacional</b> o projeto de lei dos limites da <b>dívida mobiliária federal</b>.</p></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Senado Federal</span><span class="cd">Dívida <b>consolidada</b> da União, Estados, DF e Municípios · dívida <b>mobiliária estadual e municipal</b> (CF, art. 52, IX) · <b>operações de crédito</b> e <b>garantias</b>.</span></div>'+
      '<div class="chip"><span class="cn">Congresso Nacional</span><span class="cd">Somente a dívida <b>mobiliária FEDERAL</b>, por <b>lei</b> (CF, art. 48, XIV).</span></div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">Como os limites são expressos</span><p>Em <b>percentual da receita corrente líquida</b> de cada esfera, <b>iguais para todos</b> os entes daquela esfera, e são <b>limites máximos</b> (art. 30, § 3º).</p></div>'+
      '<div class="box trap"><span class="bl">O erro que mais aparece</span><p>Dizer que o <b>Congresso</b> fixa os limites da dívida consolidada, ou que o <b>Senado</b> fixa a mobiliária federal. É exatamente o contrário em cada caso — com a mobiliária <b>estadual e municipal</b> ficando com o Senado.</p></div>'),
    sl("Recondução: os números que não podem trocar",
      '<div class="box"><span class="bl">Art. 30, § 4º</span><p>A apuração do montante da dívida consolidada é feita ao <b>final de cada quadrimestre</b>.</p></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Art. 23 — pessoal</span><span class="cd"><b>2</b> quadrimestres · redução de <b>1/3</b> no primeiro.</span></div>'+
      '<div class="chip"><span class="cn">Art. 31 — dívida</span><span class="cd"><b>3</b> quadrimestres · redução de <b>1/4 (25%)</b> no primeiro.</span></div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">Um jeito de não trocar</span><p><b>Pessoal</b> vem antes na lei e tem o prazo <b>menor</b>; <b>dívida</b> vem depois e tem o prazo <b>maior</b>. E o divisor acompanha o prazo: <b>1/3</b> em 2 quadrimestres, <b>1/4</b> em 3.</p></div>'+
      '<div class="box"><span class="bl">Arts. 65 e 66</span><ul><li><b>Calamidade pública</b> reconhecida pelo Congresso: <b>suspende</b> a contagem dos prazos dos arts. 23 e 31.</li><li><b>PIB</b> com crescimento real <b>baixo ou negativo</b> por ≥ <b>4 trimestres</b>: <b>duplica</b> esses prazos.</li></ul></div>'),
    sl("O que acontece com quem estoura",
      '<div class="tl"><div class="tl-w">Enquanto perdurar</div><div class="tl-t"><b>Proibido</b> realizar operação de crédito interna ou externa, <b>inclusive ARO</b> — ressalvado o <b>refinanciamento do principal atualizado da dívida mobiliária</b> (§ 1º, I).</div></div>'+
      '<div class="tl"><div class="tl-w">Enquanto perdurar</div><div class="tl-t">Dever de obter <b>resultado primário</b> para a recondução, com <b>limitação de empenho</b> na forma do art. 9º (§ 1º, II).</div></div>'+
      '<div class="tl"><div class="tl-w">Vencido o prazo</div><div class="tl-t">Soma-se o <b>impedimento de receber transferências voluntárias</b> da União ou do Estado (§ 2º).</div></div>'+
      '<div class="tl"><div class="tl-w">Último ano</div><div class="tl-t">Se o excesso ocorrer no <b>1º quadrimestre do último ano de mandato</b>, as restrições incidem <b>imediatamente</b> (§ 3º).</div></div>'+
      '<div class="box trap"><span class="bl">Não antecipe a sanção</span><p>O impedimento de transferências voluntárias do § 2º só nasce <b>depois</b> de vencido o prazo de recondução — não logo no primeiro quadrimestre de excesso.</p></div>'),
    sl("Verificação, nulidade e o BACEN",
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Senado <b>fixa</b></span><span class="cd">Os limites e as condições das operações de crédito.</span></div>'+
      '<div class="chip"><span class="cn">Min. da Fazenda <b>verifica</b></span><span class="cd">Se os limites e condições estão sendo respeitados por cada ente — <b>inclusive pelas empresas controladas</b> (art. 32).</span></div>'+
      '</div>'+
      '<div class="box"><span class="bl">Art. 33 — o dever do banco</span><p>A instituição financeira que contratar operação de crédito com ente da Federação — <b>exceto</b> a relativa à dívida <b>mobiliária</b> ou <b>externa</b> — deve <b>exigir a comprovação</b> de que a operação atende às condições e limites.</p><p>A operação irregular é <b>nula</b>: cancela-se com a <b>devolução do principal</b>, <b>vedados juros e demais encargos</b> (§ 1º).</p></div>'+
      '<div class="box trap"><span class="bl">Art. 34</span><p>O <b>Banco Central não emite títulos da dívida pública</b>. Qualquer item que abra exceção — “salvo autorização do Senado”, “em caso de calamidade” — é falso.</p></div>')
  ],
  V3:[
    sl("Art. 35 — nada de ente emprestando a ente",
      '<div class="box"><span class="bl">Caput</span><p>É <b>vedada</b> a operação de crédito entre um ente da Federação — diretamente ou por <b>fundo, autarquia, fundação ou empresa estatal dependente</b> — e <b>outro ente</b>, inclusive suas entidades da administração indireta, <b>ainda que sob a forma de novação, refinanciamento ou postergação</b> de dívida anterior.</p></div>'+
      '<div class="box tip"><span class="bl">§ 1º — a exceção e seus dois limites</span><p>Pode haver operação entre <b>instituição financeira estatal</b> e outro ente, <b>desde que não</b> se destine a:</p><ul><li><b>I</b> — financiar, direta ou indiretamente, <b>despesas correntes</b> (ressalvadas estruturação de projetos e contraprestações em PPP/concessão para ente em calamidade reconhecida);</li><li><b>II</b> — <b>refinanciar dívidas não contraídas junto à própria instituição concedente</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">§ 2º — o que continua permitido</span><p>Estados e Municípios <b>podem comprar títulos da dívida da União</b> como <b>aplicação de suas disponibilidades</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Art. 36</span><p>Proibida a operação entre <b>instituição financeira estatal</b> e o <b>ente que a controla</b>, quando este é o <b>beneficiário do empréstimo</b>. O parágrafo único, porém, <b>permite</b> que a controlada adquira <b>no mercado</b> títulos da dívida pública para clientes, ou títulos da União para recursos próprios.</p></div>'),
    sl("Art. 37 — as quatro equiparadas e vedadas",
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">I</span><span class="nm">Antecipação de tributo futuro</span></div><div class="fn-b"><p>Captação de recursos a título de antecipação de receita de tributo ou contribuição cujo <b>fato gerador ainda não tenha ocorrido</b>.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">II</span><span class="nm">Antecipação de valores de estatal</span></div><div class="fn-b"><p>Recebimento antecipado de valores de empresa em que o Poder Público detenha a <b>maioria do capital votante</b> — <b>salvo lucros e dividendos</b>, na forma da legislação.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">III</span><span class="nm">Título de crédito com fornecedor</span></div><div class="fn-b"><p>Assunção direta de compromisso, confissão de dívida ou operação assemelhada com fornecedor mediante <b>emissão, aceite ou aval de título de crédito</b> — <b>não se aplica a empresas estatais dependentes</b>.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">IV</span><span class="nm">Obrigação sem autorização orçamentária</span></div><div class="fn-b"><p>Assunção de obrigação, <b>sem autorização orçamentária</b>, com fornecedores para <b>pagamento a posteriori</b> de bens e serviços.</p></div></div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">Exemplo de prova</span><p>PPP com contraprestação anual por 20 anos: a assunção dessa obrigação <b>equipara-se a operação de crédito</b> e estará vedada se faltar autorização.</p></div>'),
    sl("Art. 38 — a ARO em cinco linhas",
      '<div class="tl"><div class="tl-w">Finalidade</div><div class="tl-t">Atender <b>insuficiência de caixa</b> durante o exercício financeiro.</div></div>'+
      '<div class="tl"><div class="tl-w">Início — I</div><div class="tl-t">Somente a partir do <b>décimo dia do início do exercício</b>.</div></div>'+
      '<div class="tl"><div class="tl-w">Fim — II</div><div class="tl-t">Liquidada, com <b>juros e demais encargos</b>, até <b>10 de dezembro</b> de cada ano.</div></div>'+
      '<div class="tl"><div class="tl-w">Custo — III</div><div class="tl-t">Não será autorizada se cobrados <b>outros encargos que não a taxa de juros</b> da operação.</div></div>'+
      '<div class="tl"><div class="tl-w">Proibições — IV</div><div class="tl-t"><b>a)</b> enquanto existir <b>operação anterior da mesma natureza não integralmente resgatada</b>; <b>b)</b> no <b>último ano de mandato</b> do Presidente, Governador ou Prefeito.</div></div>'+
      '<div class="box tip"><span class="bl">Onde ela entra na contabilidade</span><p>A ARO compõe a <b>dívida flutuante</b> (Dec. 93.872/86, art. 115, § 1º) — e, se liquidada no prazo do inciso II, <b>não é computada</b> para a regra de ouro do art. 167, III, da Constituição.</p></div>'+
      '<div class="box trap"><span class="bl">Duas datas, dois erros</span><p>“31 de dezembro” no lugar de <b>10 de dezembro</b>, e “primeiro dia” no lugar do <b>décimo dia</b>. São os dois itens falsos mais repetidos do artigo.</p></div>')
  ],
  V4:[
    sl("Art. 40 — garantia pede contragarantia",
      '<div class="box"><span class="bl">Caput</span><p>Os entes <b>poderão conceder garantia</b> em operações de crédito internas ou externas, observadas as normas do art. 32 e, no caso da União, os limites e condições do <b>Senado Federal</b>.</p></div>'+
      '<div class="box tip"><span class="bl">§ 1º — a condição</span><p>A garantia depende do oferecimento de <b>contragarantia em valor igual ou superior</b> ao da garantia, e da <b>adimplência</b> de quem a pleiteia junto ao garantidor e às entidades por este controladas.</p><ul><li><b>I</b> — <b>não</b> se exige contragarantia de órgãos e entidades <b>do próprio ente</b>.</li><li><b>II</b> — a contragarantia da União a Estado/Município (ou do Estado ao Município) pode consistir na <b>vinculação de receitas tributárias diretamente arrecadadas e de transferências constitucionais</b>, com <b>poder de retenção</b> pelo garantidor.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Dois parágrafos que caem soltos</span><ul><li><b>§ 5º</b> — é <b>nula</b> a garantia concedida <b>acima dos limites fixados pelo Senado</b>.</li><li><b>§ 10</b> — o ente cuja dívida foi <b>honrada</b> pela União ou por Estado tem <b>suspenso o acesso a novos créditos</b> até a <b>total liquidação</b>.</li></ul></div>'),
    sl("Art. 42 — a regra de ouro do fim de mandato",
      '<div class="box"><span class="bl">Caput</span><p>É <b>vedado ao titular de Poder ou órgão</b>, nos <b>últimos dois quadrimestres do seu mandato</b>, contrair obrigação de despesa que <b>não possa ser cumprida integralmente dentro dele</b>, ou que tenha <b>parcelas a serem pagas no exercício seguinte</b> sem que haja <b>suficiente disponibilidade de caixa</b> para este efeito.</p><p class="mono" style="font-size:.82rem;color:var(--ink-3)">Parágrafo único — na determinação da disponibilidade de caixa entram os <b>encargos e despesas compromissadas a pagar até o final do exercício</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Leia como restos a pagar</span><p>Na prática o art. 42 proíbe <b>inscrever em restos a pagar sem lastro financeiro</b> nos últimos 8 meses de mandato. O prefeito pode gastar no último mês — desde que pague dentro do mandato ou deixe o caixa correspondente.</p></div>'+
      '<div class="box trap"><span class="bl">Os três prazos de fim de mandato — não confunda</span>'+
      '<ul><li><b>Art. 21, II</b> — é <b>nulo</b> o ato que aumente despesa com pessoal nos <b>180 dias anteriores</b> ao final do mandato.</li>'+
      '<li><b>Art. 38, IV, b</b> — a <b>ARO</b> está proibida no <b>último ano</b> de mandato do Chefe do Executivo.</li>'+
      '<li><b>Art. 42</b> — vedação de contrair obrigação sem lastro nos <b>últimos dois quadrimestres</b> do mandato.</li></ul>'+
      '<p>Três marcos diferentes: <b>180 dias</b>, <b>último ano</b> e <b>dois quadrimestres</b>. A banca troca um pelo outro em quase toda prova.</p></div>')
  ]
};

var EX = {
S1:{t:"sort", instr:"Classifique cada item",
  buckets:["Dívida flutuante","Dívida consolidada"],
  items:[["Restos a pagar",0],["Depósitos",0],["ARO — débito de tesouraria",0],["Papel-moeda",0],
         ["Empréstimo para amortização em 5 anos",1],["Títulos do BACEN, na dívida da União",1],
         ["Precatório não pago no orçamento em que foi incluído",1]],
  why:"O critério é a <b>necessidade de autorização orçamentária</b> somada ao prazo."},

S2:{t:"gap", instr:"Complete a definição do Decreto 93.872/86",
  before:"A dívida flutuante compreende os compromissos exigíveis cujo pagamento ",
  after:" de autorização orçamentária.",
  options:["independe","depende","depende apenas no exercício seguinte"], answer:0,
  why:"Art. 115, § 1º — por isso é <b>extraorçamentária</b>."},

S3:{t:"mc", instr:"A operação de crédito por antecipação de receita orçamentária integra:",
  options:["A dívida flutuante","A dívida consolidada","A dívida mobiliária","Nenhuma das duas"],
  answer:0,
  why:"É o clássico débito de tesouraria — entra e sai no mesmo exercício."},

S4:{t:"wordbank", instr:"Monte o núcleo da definição de dívida consolidada (art. 29, I)",
  target:["montante","total",",","apurado","sem","duplicidade"],
  extra:["líquido","bruto","consolidado"],
  why:"“Apurado sem duplicidade” é a expressão que a banca suprime para tornar o item falso."},

S5:{t:"match", instr:"Ligue cada inciso do art. 29 ao seu conceito",
  pairs:[["I","Dívida pública consolidada"],["II","Dívida pública mobiliária"],
         ["III","Operação de crédito"],["IV","Concessão de garantia"],["V","Refinanciamento da dívida mobiliária"]],
  why:"A ordem dos incisos é cobrada literalmente."},

S6:{t:"gap", instr:"Complete o art. 29, I",
  before:"…obrigações financeiras do ente da Federação, assumidas em virtude de leis, contratos, convênios ou tratados e da realização de operações de crédito, para amortização em prazo ",
  after:".",
  options:["superior a doze meses","superior a vinte e quatro meses","superior a um exercício financeiro"], answer:0,
  why:"Doze meses — é o divisor de águas do artigo."},

S7:{t:"multi", instr:"Marque o que configura operação de crédito (art. 29, III)",
  options:["Mútuo","Abertura de crédito","Emissão e aceite de título","Aquisição financiada de bens",
           "Arrendamento mercantil","Recebimento antecipado de valores",
           "Recebimento de transferência voluntária","Arrecadação de taxa"],
  answers:[0,1,2,3,4,5],
  why:"Transferência voluntária e arrecadação de tributo são <b>receitas</b>, não compromissos financeiros."},

S8:{t:"ce", qi:8},

S9:{t:"multi", instr:"Marque o que integra a dívida pública consolidada",
  options:["Títulos de responsabilidade do BACEN, na dívida da União",
           "Operações de crédito de prazo inferior a 12 meses cujas receitas constaram do orçamento",
           "Precatórios não pagos no orçamento em que foram incluídos",
           "Restos a pagar processados do exercício",
           "Depósitos de terceiros"],
  answers:[0,1,2],
  why:"Restos a pagar e depósitos são <b>dívida flutuante</b>."},

S10:{t:"multi", instr:"O que se deduz da dívida consolidada para chegar à DCL?",
  options:["Disponibilidades de caixa","Aplicações financeiras","Demais haveres financeiros",
           "Restos a pagar inscritos","Despesa com pessoal do último quadrimestre"],
  answers:[0,1,2],
  why:"É a Dívida Consolidada Líquida — a base sobre a qual o Senado fixa os limites."},

S11:{t:"sort", instr:"Quem fixa cada limite?",
  buckets:["Senado Federal","Congresso Nacional"],
  items:[["Dívida consolidada da União",0],["Dívida consolidada dos Estados",0],
         ["Dívida consolidada dos Municípios",0],["Dívida mobiliária estadual",0],
         ["Dívida mobiliária municipal",0],["Dívida mobiliária FEDERAL",1]],
  why:"Só a mobiliária <b>federal</b> vai ao Congresso, e por <b>lei</b> (CF, art. 48, XIV)."},

S12:{t:"gap", instr:"Complete o art. 30, § 3º",
  before:"Os limites serão fixados em percentual da ",
  after:" para cada esfera de governo.",
  options:["receita corrente líquida","receita total arrecadada","despesa corrente líquida"], answer:0,
  why:"Sempre RCL — e constituem <b>limites máximos</b>."},

S13:{t:"mc", instr:"A apuração do montante da dívida consolidada, para verificar o limite, é feita:",
  options:["Ao final de cada quadrimestre","Ao final de cada semestre",
           "Ao final de cada bimestre","Ao final do exercício"],
  answer:0,
  why:"Art. 30, § 4º — mesmo ritmo do Relatório de Gestão Fiscal."},

S14:{t:"sort", instr:"Separe as duas regras de recondução",
  buckets:["Art. 23 — pessoal","Art. 31 — dívida"],
  items:[["2 quadrimestres",0],["Redução de 1/3 no primeiro",0],
         ["3 quadrimestres",1],["Redução de 25% no primeiro",1]],
  why:"Prazo menor com divisor maior: <b>2 e 1/3</b> para pessoal; <b>3 e 1/4</b> para dívida."},

S15:{t:"gap", instr:"Complete o art. 31, caput",
  before:"…deverá ser reconduzida ao limite até o término dos três quadrimestres subsequentes, reduzindo o excedente em pelo menos ",
  after:" no primeiro.",
  options:["25%","um terço","metade"], answer:0,
  why:"Um quarto do excedente — não um terço, que é a regra de pessoal."},

S16:{t:"multi", instr:"Enquanto perdurar o excesso da dívida, o ente (art. 31, § 1º):",
  options:["Fica proibido de realizar operação de crédito interna ou externa, inclusive ARO",
           "Deve obter resultado primário necessário à recondução",
           "Deve promover limitação de empenho na forma do art. 9º",
           "Fica imediatamente impedido de receber transferências voluntárias",
           "Fica proibido de refinanciar o principal atualizado da dívida mobiliária"],
  answers:[0,1,2],
  why:"O impedimento de transferências só vem <b>depois</b> de vencido o prazo (§ 2º), e o refinanciamento do principal atualizado é <b>ressalvado</b>."},

S17:{t:"order", instr:"Ordene a linha do tempo do excesso de dívida",
  items:["Apuração ao final do quadrimestre revela o excesso",
         "Proibição de operações de crédito e dever de resultado primário",
         "Recondução ao limite em até três quadrimestres, com 25% no primeiro",
         "Vencido o prazo sem recondução, soma-se o impedimento de transferências voluntárias"],
  why:"A sanção do § 2º é <b>posterior</b>, não simultânea."},

S18:{t:"sort", instr:"Calamidade ou PIB baixo?",
  buckets:["Art. 65 — calamidade: suspende","Art. 66 — PIB baixo: duplica"],
  items:[["Situação reconhecida pelo Congresso Nacional",0],
         ["Suspensão da contagem dos prazos dos arts. 23 e 31",0],
         ["Crescimento real baixo ou negativo por ≥ 4 trimestres",1],
         ["Duplicação dos prazos dos arts. 23 e 31",1]],
  why:"Calamidade <b>suspende</b>; PIB fraco <b>duplica</b>."},

S19:{t:"mc", instr:"Quem verifica o cumprimento dos limites das operações de crédito?",
  options:["O Ministério da Fazenda","O Senado Federal","O Tribunal de Contas da União","O Banco Central"],
  answer:0,
  why:"Art. 32 — o Senado <b>fixa</b>, o Ministério da Fazenda <b>verifica</b>."},

S20:{t:"gap", instr:"Complete o art. 33, § 1º",
  before:"A operação realizada com infração à LRF será considerada nula, procedendo-se ao seu cancelamento mediante a devolução do principal, ",
  after:" o pagamento de juros e demais encargos financeiros.",
  options:["vedados","permitidos","facultados"], answer:0,
  why:"Devolve-se só o principal — o banco perde os juros."},

S21:{t:"multi", instr:"Marque o que o art. 35 veda",
  options:["Operação de crédito entre Estado e Município",
           "Operação de crédito entre Município e autarquia de outro ente",
           "Novação de dívida entre entes",
           "Refinanciamento de dívida anterior entre entes",
           "Compra de títulos da dívida da União por Município como aplicação de disponibilidades",
           "Operação entre instituição financeira estatal e outro ente para financiar despesa de capital"],
  answers:[0,1,2,3],
  why:"O § 2º autoriza a compra de títulos da União, e o § 1º excepciona a instituição financeira estatal fora das duas hipóteses proibidas."},

S22:{t:"mc", instr:"A instituição financeira estatal pode operar com outro ente, desde que a operação NÃO se destine a:",
  options:["Financiar despesas correntes ou refinanciar dívida não contraída junto a ela própria",
           "Financiar despesas de capital",
           "Financiar obras de infraestrutura",
           "Adquirir títulos da dívida da União"],
  answer:0,
  why:"São exatamente os incisos I e II do art. 35, § 1º."},

S23:{t:"multi", instr:"Marque o que o art. 37 equipara a operação de crédito e veda",
  options:["Antecipação de receita de tributo cujo fato gerador ainda não ocorreu",
           "Recebimento antecipado de valores de empresa estatal, salvo lucros e dividendos",
           "Assunção de dívida com fornecedor mediante aceite de título de crédito",
           "Assunção de obrigação sem autorização orçamentária com fornecedores",
           "Emissão de títulos pelo Tesouro Nacional autorizada em lei",
           "Recebimento de dividendos de estatal na forma da legislação"],
  answers:[0,1,2,3],
  why:"Lucros e dividendos na forma da lei estão <b>ressalvados</b>."},

S24:{t:"gap", instr:"Complete a ressalva do art. 37, III",
  before:"A vedação à assunção de compromisso com fornecedor mediante título de crédito não se aplica a ",
  after:".",
  options:["empresas estatais dependentes","empresas estatais independentes","autarquias e fundações"], answer:0,
  why:"A ressalva é para as <b>dependentes</b> — detalhe cobrado com frequência."},

S25:{t:"order", instr:"Ordene o calendário de uma ARO regular",
  items:["10 de janeiro — primeira data possível para realizar a operação",
         "Contratação para cobrir insuficiência de caixa do exercício",
         "Pagamento de juros, sem outros encargos",
         "10 de dezembro — liquidação integral, com juros e encargos"],
  why:"Décimo dia do início do exercício até 10 de dezembro."},

S26:{t:"multi", instr:"Quando a ARO está proibida?",
  options:["Enquanto existir operação anterior da mesma natureza não integralmente resgatada",
           "No último ano de mandato do Chefe do Poder Executivo",
           "Se forem cobrados outros encargos além da taxa de juros",
           "Em qualquer ano eleitoral",
           "Sempre que o ente tiver dívida consolidada"],
  answers:[0,1,2],
  why:"É o <b>último ano de mandato</b>, não todo ano eleitoral."},

S27:{t:"gap", instr:"Complete o art. 38, II",
  before:"A operação de crédito por antecipação de receita deverá ser liquidada, com juros e outros encargos incidentes, até o dia ",
  after:" de cada ano.",
  options:["dez de dezembro","trinta e um de dezembro","trinta de novembro"], answer:0,
  why:"10 de dezembro — nunca 31."},

S28:{t:"multi", instr:"Sobre a contragarantia do art. 40, marque o correto",
  options:["Deve ter valor igual ou superior ao da garantia concedida",
           "Não será exigida de órgãos e entidades do próprio ente",
           "Pode consistir na vinculação de receitas tributárias e transferências constitucionais",
           "É dispensada quando o beneficiário for Município com menos de 50 mil habitantes",
           "É facultativa quando a operação for externa"],
  answers:[0,1,2],
  why:"Não há dispensa por porte do ente nem pela origem externa da operação."},

S29:{t:"mc", instr:"A garantia concedida acima dos limites fixados pelo Senado Federal é:",
  options:["Nula","Anulável mediante decisão do TCU","Válida, com responsabilização do gestor","Convalidável por lei específica"],
  answer:0,
  why:"Art. 40, § 5º — nulidade de pleno direito."},

S30:{t:"sort", instr:"Cada prazo no seu artigo",
  buckets:["180 dias — art. 21, II","Último ano — art. 38, IV, b","Dois quadrimestres — art. 42"],
  items:[["Nulo o ato que aumente despesa com pessoal",0],
         ["Proibida a operação de crédito por antecipação de receita",1],
         ["Vedado contrair obrigação sem disponibilidade de caixa",2]],
  why:"Três marcos diferentes de fim de mandato — a troca entre eles é a pegadinha mais frequente do módulo."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var KIT = {
  U1:{tema:"Espécies de dívida e definições do art. 29",
    bases:["LC nº 101/2000, art. 29, incisos I a V e §§ 1º a 3º",
           "Decreto nº 93.872/1986, art. 115 — dívida flutuante e fundada",
           "LC nº 101/2000, art. 30, § 7º — precatórios",
           "Lei nº 4.320/1964, arts. 92 e 98 — dívida flutuante e fundada",
           "CF/1988, art. 163, II — dívida pública"],
    ouro:["compromissos exigíveis cujo pagamento independe de autorização orçamentária",
          "exigibilidade superior a doze meses","montante total, apurado sem duplicidade",
          "leis, contratos, convênios ou tratados","amortização em prazo superior a doze meses",
          "títulos emitidos pela União, inclusive os do Banco Central","mútuo, abertura de crédito",
          "aquisição financiada de bens","arrendamento mercantil","derivativos financeiros",
          "compromisso de adimplência","principal acrescido da atualização monetária",
          "operações de crédito de prazo inferior a doze meses cujas receitas tenham constado do orçamento"],
    abertura:"A dívida pública divide-se em flutuante, cujos compromissos exigíveis independem de autorização orçamentária para pagamento, e consolidada ou fundada, definida pelo art. 29, I, da Lei de Responsabilidade Fiscal como o montante total, apurado sem duplicidade, das obrigações financeiras do ente da Federação para amortização em prazo superior a doze meses.",
    evite:"Não inverta o critério da autorização orçamentária, e não esqueça as três hipóteses que puxam para a consolidada: títulos do BACEN, operações curtas orçadas e precatórios não pagos."},
  U2:{tema:"Limites, recondução e verificação",
    bases:["LC nº 101/2000, arts. 30, 31, 32, 33 e 34",
           "CF/1988, art. 52, VI a IX — competência do Senado",
           "CF/1988, art. 48, XIV — dívida mobiliária federal",
           "LC nº 101/2000, arts. 65 e 66 — calamidade e PIB",
           "Resoluções do Senado nº 40 e 43/2001"],
    ouro:["limites globais para o montante da dívida consolidada","percentual da receita corrente líquida",
          "limites máximos","ao final de cada quadrimestre","três quadrimestres subsequentes",
          "pelo menos vinte e cinco por cento no primeiro","proibido de realizar operação de crédito",
          "ressalvado o refinanciamento do principal atualizado","resultado primário","limitação de empenho",
          "impedido de receber transferências voluntárias","primeiro quadrimestre do último ano do mandato",
          "verificará o cumprimento dos limites e condições","nula, procedendo-se ao seu cancelamento",
          "vedados o pagamento de juros e demais encargos"],
    abertura:"Compete ao Senado Federal fixar os limites globais da dívida consolidada e, por força do art. 52, IX, da Constituição, os da dívida mobiliária estadual e municipal, cabendo ao Congresso Nacional, por lei, apenas os da dívida mobiliária federal — limites expressos em percentual da receita corrente líquida e apurados ao final de cada quadrimestre.",
    evite:"Não troque os números do art. 31 pelos do art. 23, nem antecipe o impedimento de transferências voluntárias, que só incide depois de vencido o prazo de recondução."},
  U3:{tema:"Vedações, operações equiparadas e ARO",
    bases:["LC nº 101/2000, arts. 35, 36, 37 e 38",
           "CF/1988, art. 167, III — regra de ouro",
           "CF/1988, art. 150, § 7º — substituição tributária",
           "Decreto nº 93.872/1986, art. 115, § 1º — a ARO como dívida flutuante"],
    ouro:["vedada a realização de operação de crédito entre um ente da Federação e outro",
          "ainda que sob a forma de novação, refinanciamento ou postergação",
          "instituição financeira estatal","financiar, direta ou indiretamente, despesas correntes",
          "refinanciar dívidas não contraídas junto à própria instituição concedente",
          "na qualidade de beneficiário do empréstimo","equiparam-se a operações de crédito e estão vedados",
          "fato gerador ainda não tenha ocorrido","não se aplicando esta vedação a empresas estatais dependentes",
          "insuficiência de caixa durante o exercício financeiro","a partir do décimo dia do início do exercício",
          "até o dia dez de dezembro","operação anterior da mesma natureza não integralmente resgatada",
          "no último ano de mandato"],
    abertura:"O art. 35 da Lei de Responsabilidade Fiscal veda a operação de crédito entre entes da Federação, ainda que sob a forma de novação, refinanciamento ou postergação de dívida anterior, ressalvadas apenas as operações com instituição financeira estatal que não financiem despesas correntes nem refinanciem dívidas alheias à própria concedente.",
    evite:"Não esqueça a ressalva das estatais dependentes no art. 37, III, nem troque as duas datas da ARO: décimo dia do início do exercício e dez de dezembro."},
  U4:{tema:"Garantia, contragarantia e o fim de mandato",
    bases:["LC nº 101/2000, art. 40, caput e §§ 1º, 5º, 9º e 10",
           "LC nº 101/2000, art. 42 e parágrafo único",
           "LC nº 101/2000, art. 21, II — 180 dias",
           "LC nº 101/2000, art. 38, IV, b — último ano de mandato",
           "CF/1988, art. 160, parágrafo único — retenção de repasses"],
    ouro:["compromisso de adimplência de obrigação financeira ou contratual",
          "contragarantia em valor igual ou superior","adimplência da entidade que a pleitear",
          "não será exigida contragarantia de órgãos e entidades do próprio ente",
          "vinculação de receitas tributárias diretamente arrecadadas",
          "nula a garantia concedida acima dos limites","suspenso o acesso a novos créditos",
          "últimos dois quadrimestres do seu mandato","cumprida integralmente dentro dele",
          "suficiente disponibilidade de caixa","encargos e despesas compromissadas a pagar"],
    abertura:"A concessão de garantia pelos entes da Federação está condicionada, na forma do art. 40, § 1º, da Lei de Responsabilidade Fiscal, ao oferecimento de contragarantia em valor igual ou superior ao da garantia concedida e à adimplência de quem a pleiteia, sendo nula a garantia que exceda os limites fixados pelo Senado Federal.",
    evite:"Não confunda os três marcos de fim de mandato — 180 dias para pessoal, último ano para a ARO e dois quadrimestres para o art. 42."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. Tema de conceitos e números: o espelho procura cada definição e cada prazo.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre a dívida e o endividamento na Lei Complementar nº 101/2000, disserte necessariamente sobre:</p>'+
  '<ol><li>a distinção entre dívida flutuante e dívida consolidada e as definições do art. 29;</li>'+
  '<li>a competência para a fixação dos limites e o regime de recondução da dívida que os exceda;</li>'+
  '<li>as vedações às operações de crédito, o regime da operação por antecipação de receita orçamentária e a regra do art. 42.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>A dívida pública distingue-se, quanto à espécie, em <b>flutuante</b> e <b>consolidada</b>. Na dicção do art. 115 do <b>Decreto nº 93.872/1986</b>, a <b>flutuante</b> compreende os compromissos exigíveis cujo pagamento <b>independe de autorização orçamentária</b> — restos a pagar, serviços da dívida, depósitos, operações de crédito por antecipação de receita e papel-moeda —, ao passo que a <b>consolidada ou fundada</b> reúne os compromissos de <b>exigibilidade superior a doze meses</b> cujo pagamento <b>depende</b> dessa autorização. O <b>art. 29</b> da Lei de Responsabilidade Fiscal, por sua vez, define <b>dívida pública consolidada</b> como o montante total, <b>apurado sem duplicidade</b>, das obrigações financeiras do ente assumidas em virtude de leis, contratos, convênios ou tratados e da realização de operações de crédito, para <b>amortização em prazo superior a doze meses</b>; <b>dívida pública mobiliária</b> como a representada por <b>títulos emitidos</b> pela União, inclusive os do Banco Central, Estados e Municípios; <b>operação de crédito</b> como o compromisso financeiro assumido em razão de mútuo, abertura de crédito, emissão e aceite de título, aquisição financiada de bens, arrendamento mercantil, recebimento antecipado de valores e operações assemelhadas, inclusive com <b>derivativos</b>; <b>concessão de garantia</b> como o compromisso de adimplência de obrigação financeira ou contratual; e <b>refinanciamento da dívida mobiliária</b> como a emissão de títulos para pagamento do principal acrescido de atualização monetária. Integram ainda a consolidada os <b>títulos de responsabilidade do BACEN</b> (na dívida da União), as <b>operações de prazo inferior a doze meses cujas receitas constaram do orçamento</b> e os <b>precatórios não pagos</b> no orçamento em que foram incluídos.</p>'+
  '<p>Quanto aos <b>limites</b>, o <b>art. 30</b> atribui ao <b>Senado Federal</b> a fixação dos limites globais da <b>dívida consolidada</b> da União, dos Estados, do Distrito Federal e dos Municípios — e, por força do art. 52, IX, da Constituição, também os da <b>dívida mobiliária estadual e municipal</b> —, cabendo ao <b>Congresso Nacional</b>, por <b>lei</b>, apenas os da <b>dívida mobiliária federal</b>. Os limites são expressos em <b>percentual da receita corrente líquida</b> de cada esfera, aplicados igualmente a todos os entes que a integram e constituindo <b>limites máximos</b>, com apuração ao <b>final de cada quadrimestre</b>. Excedido o limite, o <b>art. 31</b> impõe a <b>recondução em até três quadrimestres</b>, com redução de pelo menos <b>vinte e cinco por cento</b> do excedente no primeiro — não se confundindo com a regra da <b>despesa total com pessoal</b>, reconduzida em <b>dois</b> quadrimestres com redução de <b>um terço</b>. Enquanto perdurar o excesso, o ente fica <b>proibido de contrair operação de crédito</b>, inclusive por antecipação de receita, ressalvado o <b>refinanciamento do principal atualizado da dívida mobiliária</b>, e deve obter o <b>resultado primário</b> necessário à recondução, promovendo <b>limitação de empenho</b>; <b>vencido o prazo</b>, soma-se o <b>impedimento de receber transferências voluntárias</b>. Se o excesso ocorrer no <b>primeiro quadrimestre do último ano de mandato</b>, as restrições incidem <b>imediatamente</b>. Os prazos ficam <b>suspensos</b> em calamidade pública (art. 65, I) e <b>duplicados</b> em caso de PIB baixo ou negativo por ao menos quatro trimestres (art. 66). A <b>verificação</b> do cumprimento cabe ao <b>Ministério da Fazenda</b> (art. 32), e a instituição financeira contratante deve exigir a comprovação correspondente, sob pena de <b>nulidade</b> da operação, cancelada mediante devolução do principal, <b>vedados juros e demais encargos</b> (art. 33).</p>'+
  '<p>No campo das <b>vedações</b>, o <b>art. 35</b> proíbe a operação de crédito <b>entre entes da Federação</b>, ainda que sob forma de <b>novação, refinanciamento ou postergação</b>, excetuadas as operações com <b>instituição financeira estatal</b> que não financiem <b>despesas correntes</b> nem refinanciem <b>dívidas não contraídas junto à própria concedente</b>; permanece lícita, contudo, a <b>compra de títulos da União</b> por Estados e Municípios como aplicação de disponibilidades. O <b>art. 36</b> veda a operação entre instituição financeira estatal e o <b>ente que a controla</b>, na qualidade de <b>beneficiário</b>, sem impedir a aquisição de títulos no mercado. O <b>art. 37</b> equipara a operações de crédito, vedando-as, a antecipação de <b>tributo cujo fato gerador ainda não ocorreu</b>, o <b>recebimento antecipado</b> de valores de estatal (salvo lucros e dividendos), a <b>assunção de dívida com fornecedor mediante título de crédito</b> — ressalvadas as <b>estatais dependentes</b> — e a assunção de obrigação <b>sem autorização orçamentária</b> para pagamento posterior. A <b>ARO</b>, disciplinada no <b>art. 38</b>, destina-se a <b>insuficiência de caixa</b> no exercício, realiza-se a partir do <b>décimo dia</b> do seu início, liquida-se até <b>10 de dezembro</b>, não admite <b>encargos além da taxa de juros</b> e é <b>proibida</b> enquanto houver operação anterior não resgatada e no <b>último ano de mandato</b>. Por fim, o <b>art. 42</b> veda ao titular de Poder ou órgão, nos <b>últimos dois quadrimestres do mandato</b>, contrair obrigação de despesa que não possa ser <b>cumprida integralmente dentro dele</b> ou cujas parcelas do exercício seguinte não tenham <b>suficiente disponibilidade de caixa</b>, computados os <b>encargos e despesas compromissadas</b>.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> o critério da autorização orçamentária, os cinco incisos do art. 29 e as três hipóteses que integram a consolidada por extensão.</li>'+
  '<li><b>Item 2:</b> a repartição Senado/Congresso com o art. 52, IX; a RCL; o quadrimestre; e os números 3 e 25%, contrastados com 2 e 1/3.</li>'+
  '<li><b>Item 3:</b> a exceção do art. 35, § 1º, com seus dois limites; os quatro incisos do art. 37; as duas datas da ARO; e os dois quadrimestres do art. 42.</li>'+
  '<li><b>Fecho:</b> citar arts. 65 e 66 mostra que você leu o capítulo das disposições finais.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Responda item a item, com o dispositivo entre parênteses.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>No último ano do mandato do Prefeito, o Município de Guaratuba praticou os seguintes atos:</p>'+
  '<ol><li>ao final do primeiro quadrimestre, apurou dívida consolidada 12% acima do limite e, no mês seguinte, contratou empréstimo externo para obra de saneamento;</li>'+
  '<li>contratou, em 5 de janeiro, operação de crédito por antecipação de receita orçamentária, a ser liquidada em 20 de dezembro;</li>'+
  '<li>solicitou empréstimo diretamente ao Estado do Paraná para refinanciar dívida anterior;</li>'+
  '<li>assumiu obrigação com fornecedor de merenda, sem autorização orçamentária, para pagamento no exercício seguinte;</li>'+
  '<li>em novembro, empenhou a reforma da sede da Prefeitura, cujo pagamento ficaria integralmente para o exercício seguinte, sem disponibilidade de caixa correspondente.</li></ol>'+
  '<p><b>Pergunta-se:</b> avalie cada ato com fundamento na Lei Complementar nº 101/2000.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1. Empréstimo externo com a dívida acima do limite.</b> <b>Vedado.</b> Enquanto perdurar o excesso, o ente está <b>proibido de realizar operação de crédito interna ou externa</b>, inclusive por antecipação de receita, ressalvado apenas o <b>refinanciamento do principal atualizado da dívida mobiliária</b> (art. 31, § 1º, I) — e obra de saneamento não é refinanciamento. Some-se que, tendo o excesso sido apurado no <b>primeiro quadrimestre do último ano de mandato</b>, as restrições incidem <b>imediatamente</b> (art. 31, § 3º), sem o prazo de recondução.</p>'+
  '<p><b>2. ARO contratada em 5 de janeiro e liquidada em 20 de dezembro.</b> <b>Triplamente irregular.</b> A operação só pode realizar-se <b>a partir do décimo dia do início do exercício</b> (art. 38, I) — 5 de janeiro é cedo demais; deve ser <b>liquidada até 10 de dezembro</b> (art. 38, II) — 20 de dezembro é tarde demais; e está <b>proibida no último ano de mandato</b> do Prefeito (art. 38, IV, b), o que por si só a fulmina.</p>'+
  '<p><b>3. Empréstimo do Município junto ao Estado para refinanciar dívida.</b> <b>Vedado.</b> O art. 35 proíbe a operação de crédito <b>entre entes da Federação</b>, e a proibição alcança expressamente a <b>novação, o refinanciamento e a postergação</b> de dívida anterior. A exceção do § 1º pressupõe <b>instituição financeira estatal</b>, o que não é o caso de um empréstimo direto do Estado.</p>'+
  '<p><b>4. Obrigação com fornecedor sem autorização orçamentária.</b> <b>Equiparada a operação de crédito e vedada</b> pelo art. 37, IV — assunção de obrigação, sem autorização orçamentária, com fornecedores para pagamento a posteriori de bens e serviços. Há ainda simetria com o art. 29, § 1º, que equipara a operação de crédito a assunção, o reconhecimento ou a confissão de dívidas sem autorização orçamentária.</p>'+
  '<p><b>5. Empenho em novembro sem lastro para o exercício seguinte.</b> <b>Vedado</b> pelo art. 42: nos <b>últimos dois quadrimestres do mandato</b> é proibido contrair obrigação de despesa que não possa ser <b>cumprida integralmente dentro dele</b> ou que tenha parcelas no exercício seguinte <b>sem suficiente disponibilidade de caixa</b>, considerados os <b>encargos e despesas já compromissadas</b> (parágrafo único). Novembro do último ano está dentro da janela vedada.</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>No <b>1</b>, conceder o prazo de três quadrimestres, esquecendo o § 3º do art. 31.</li>'+
  '<li>No <b>2</b>, validar a liquidação em 20 de dezembro por ainda ser dentro do exercício.</li>'+
  '<li>No <b>3</b>, invocar o art. 35, § 1º, sem notar que falta a instituição financeira estatal.</li>'+
  '<li>No <b>5</b>, trocar os <b>dois quadrimestres</b> pelos <b>180 dias</b> do art. 21, II.</li></ul></div>';

var TEC = [["Caderno completo — Conhecimentos Específicos TJPR 2026","https://www.tecconcursos.com.br/questoes/cadernos/103216249","103216249"]];
var TECNOTA = "Use o seu caderno do TJPR e filtre por <b>Da Dívida e do Endividamento (arts. 29 a 42)</b> — são 25 questões catalogadas. Vale filtrar também por <b>Operações de Crédito</b>, onde a ARO costuma aparecer.";

var UNITS = [
  {n:1, title:"Espécies e definições da dívida", cvar:"u1", lessons:[
    {id:"D1", type:"teoria", title:"Flutuante, consolidada e o art. 29",   xp:10, data:"V1"},
    {id:"D2", type:"drill",  title:"Praticar · flutuante × consolidada",   xp:25, data:["S1","S2","S3","T0","T1","T2","T3"]},
    {id:"D3", type:"drill",  title:"Praticar · as definições do art. 29",  xp:25, data:["S4","S5","S6","T4","T5","T6","T7"]},
    {id:"D4", type:"drill",  title:"Praticar · operação de crédito e garantia", xp:25, data:["S7","S8","T8","T9","T10"]},
    {id:"D5", type:"drill",  title:"Praticar · o que integra a consolidada", xp:25, data:["S9","S10","T11","T12","T13","T14","T15"]},
    {id:"D6", type:"flash",  title:"Flashcards · espécies e definições",   xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11]},
    {id:"D7", type:"feynman",title:"Explique as espécies de dívida",       xp:30, data:"U1"}
  ]},
  {n:2, title:"Limites, recondução e verificação", cvar:"u2", lessons:[
    {id:"D9", type:"teoria", title:"Arts. 30 a 34",                        xp:10, data:"V2"},
    {id:"D10",type:"drill",  title:"Praticar · quem fixa os limites",      xp:25, data:["S11","S12","S13","T16","T17","T18","T19"]},
    {id:"D11",type:"drill",  title:"Praticar · apuração e recondução",     xp:25, data:["S14","S15","T20","T21","T22","T23"]},
    {id:"D12",type:"drill",  title:"Praticar · as sanções do excesso",     xp:25, data:["S16","S17","T24","T25","T26"]},
    {id:"D13",type:"drill",  title:"Praticar · calamidade e PIB baixo",    xp:20, data:["S18","T27","T28"]},
    {id:"D14",type:"drill",  title:"Praticar · verificação e nulidade",    xp:25, data:["S19","S20","T29","T30","T31","T32","T33","T34"]},
    {id:"D15",type:"flash",  title:"Flashcards · limites e recondução",    xp:15, data:[12,13,14,15,16,17,18,19,20,21,22,23,24]},
    {id:"D16",type:"feynman",title:"Explique os limites e a recondução",   xp:30, data:"U2"}
  ]},
  {n:3, title:"Vedações, equiparadas e ARO", cvar:"u3", lessons:[
    {id:"D18",type:"teoria", title:"Arts. 35 a 38",                        xp:10, data:"V3"},
    {id:"D19",type:"drill",  title:"Praticar · vedação entre entes",       xp:25, data:["S21","S22","T35","T36","T37","T38","T39"]},
    {id:"D20",type:"drill",  title:"Praticar · as quatro equiparadas",     xp:25, data:["S23","S24","T40","T41","T42"]},
    {id:"D21",type:"drill",  title:"Praticar · a ARO e suas datas",        xp:25, data:["S25","S26","S27","T43","T44","T45","T46"]},
    {id:"D22",type:"flash",  title:"Flashcards · vedações e ARO",          xp:15, data:[25,26,27,28,29,30,31,32,33,34]},
    {id:"D23",type:"feynman",title:"Explique as vedações e a ARO",         xp:30, data:"U3"}
  ]},
  {n:4, title:"Garantia e fim de mandato", cvar:"u4", lessons:[
    {id:"D25",type:"teoria", title:"Arts. 40 e 42",                        xp:10, data:"V4"},
    {id:"D26",type:"drill",  title:"Praticar · garantia e contragarantia", xp:25, data:["S28","S29","T47","T48","T49","T50","T51"]},
    {id:"D27",type:"drill",  title:"Praticar · os três prazos de fim de mandato", xp:25, data:["S30","T52","T53","T54"]},
    {id:"D28",type:"flash",  title:"Flashcards · garantia e art. 42",      xp:15, data:[35,36,37,38,39,40,41]},
    {id:"D29",type:"feynman",title:"Explique a garantia e o art. 42",      xp:30, data:"U4"}
  ]},
  {n:5, title:"Aplicação e prova", cvar:"u1", lessons:[
    {id:"D31",type:"leitura",title:"Discursiva resolvida",                 xp:25, data:"disc"},
    {id:"D32",type:"leitura",title:"Estudo de caso resolvido",             xp:25, data:"caso"},
    {id:"Drev",type:"review",title:"Revisão geral das unidades",           xp:60, data:null},
    {id:"D33",type:"missao", title:"Missão TEC Concursos",                 xp:15, data:null},
    {id:"D34",type:"prova",  title:"Simulado cronometrado",                xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo. É a definição que o Resumo traz do Decreto 93.872, art. 115, § 1º: a dívida flutuante compreende os compromissos exigíveis cujo pagamento <b>independe de autorização orçamentária</b>. Ou seja, são as despesas <b>extraorçamentárias</b>.</p><p>O quadro NÃO CONFUNDA do material opõe as duas: flutuante independe de autorização orçamentária; <b>consolidada</b> tem exigibilidade superior a 12 meses e <b>depende</b> de autorização. Exemplo de flutuante: a ARO, conhecida como Débitos de Tesouraria.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da dívida pública — NÃO CONFUNDA (flutuante x consolidada)</i></p>",
1:"<p>Certo. O esquema do Resumo (Decreto 93.872, art. 115) lista o que a dívida flutuante abrange: <b>os restos a pagar, os serviços da dívida, os depósitos, as operações de crédito por antecipação de receita e o papel-moeda</b>.</p><p>A assertiva omite o papel-moeda, mas omissão não torna o item errado. Todos são compromissos cujo pagamento <b>independe de autorização orçamentária</b>.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da dívida pública — dívida flutuante</i></p>",
2:"<p>Errado no final. A dívida consolidada tem exigibilidade superior a 12 meses e seu pagamento <b>depende</b> de autorização orçamentária.</p><p>Pelo quadro NÃO CONFUNDA do Resumo: <b>independer</b> de autorização orçamentária é traço da dívida <b>flutuante</b> (despesas extraorçamentárias). A consolidada compreende os compromissos de exigibilidade superior a 12 meses e cujo pagamento <b>depende</b> de autorização (Decreto 93.872, art. 115, § 2º). Exemplo: operação de crédito para amortização em prazo superior a 12 meses.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da dívida pública — NÃO CONFUNDA (flutuante x consolidada)</i></p>",
3:"<p>Errado. A ARO integra a dívida <b>flutuante</b>, não a consolidada.</p><p>O Resumo usa a ARO como o exemplo típico de dívida flutuante (os chamados <b>Débitos de Tesouraria</b>) e repete no esquema do art. 38: a ARO <b>compõe a Dívida Flutuante</b> (Decreto 93.872/86, art. 115, § 1º). Faz sentido: ela cobre insuficiência de caixa e deve ser liquidada até 10 de dezembro do mesmo ano.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das operações de crédito por ARO</i></p>",
4:"<p>Certo. Literalidade do art. 29, I, no esquema do Resumo: dívida consolidada ou fundada é o <b>montante total, apurado sem duplicidade</b>, das obrigações financeiras do ente, assumidas em virtude de <b>leis, contratos, convênios ou tratados</b> e da realização de operações de crédito, para amortização em prazo <b>superior a doze meses</b>.</p><p>O traço distintivo é o prazo de amortização acima de 12 meses. As OBSERVAÇÕES trazem as exceções que também entram: operações de prazo inferior a 12 meses cujas receitas constaram do orçamento e precatórios não pagos.</p><p class='fb-fonte'>LRF — Radegondes · <i>Definições básicas — art. 29</i></p>",
5:"<p>Certo. Art. 29, II, conforme o esquema do Resumo: dívida pública mobiliária é a representada por <b>títulos</b> emitidos pela <b>União, inclusive os do Banco Central do Brasil, Estados e Municípios</b>.</p><p>Mobiliária = títulos. E note que Estados e Municípios também emitem. O Resumo ainda traz que, hoje, o <b>Banco Central não pode emitir títulos</b> da dívida pública (art. 34), apesar de a definição mencionar os títulos dele.</p><p class='fb-fonte'>LRF — Radegondes · <i>Definições básicas — dívida pública mobiliária</i></p>",
6:"<p>Errado. A dívida mobiliária é representada por títulos emitidos pela <b>União, inclusive os do Banco Central, Estados e Municípios</b>. Não é exclusividade da União.</p><p>O próprio quadro do Resumo sobre quem define os limites confirma: há dívida mobiliária <b>federal</b> (limite por lei do Congresso Nacional) e mobiliária <b>estadual e municipal</b> (limite pelo Senado Federal, CF, art. 52, IX).</p><p class='fb-fonte'>LRF — Radegondes · <i>Definições básicas — dívida pública mobiliária</i></p>",
7:"<p>Certo. Art. 29, III, no esquema do Resumo: operação de crédito é o compromisso financeiro assumido em razão de <b>mútuo, abertura de crédito, emissão e aceite de título, aquisição financiada de bens, recebimento antecipado de valores</b> provenientes da venda a termo de bens e serviços, <b>arrendamento mercantil</b> e outras operações assemelhadas, inclusive com uso de <b>derivativos financeiros</b>.</p><p>Guarde que o rol não exige entrada de dinheiro no caixa: a aquisição financiada e o arrendamento mercantil também são operação de crédito.</p><p class='fb-fonte'>LRF — Radegondes · <i>Definições básicas — operação de crédito</i></p>",
8:"<p>Errado. O Resumo traz exatamente esta situação na OBSERVAÇÃO 5: <b>nem toda operação de crédito é representada pelo ingresso de recursos financeiros</b>.</p><p>O exemplo do material: o montante das obrigações financeiras do ente decorrente da <b>aquisição de bens móveis financiados em prazo superior a 12 meses</b> deverá ser enquadrado em <b>Operação de Crédito</b>. A aquisição financiada de bens está no próprio rol do art. 29, III.</p><p class='fb-fonte'>LRF — Radegondes · <i>Definições básicas — OBSERVAÇÕES</i></p>",
9:"<p>Certo. Art. 29, IV, no esquema do Resumo: concessão de garantia é o <b>compromisso de adimplência de obrigação financeira ou contratual</b> assumida por ente da Federação ou entidade a ele vinculada.</p><p>O comentário do art. 40 diz o mesmo com outras palavras: a garantia é o compromisso de que o ente vai cumprir suas obrigações. No exemplo do material, a União garante o empréstimo externo de um Município e pode exigir dele, como <b>contragarantia</b>, a receita de ISS.</p><p class='fb-fonte'>LRF — Radegondes · <i>Definições básicas — concessão de garantia</i></p>",
10:"<p>Certo. Art. 29, V, no esquema do Resumo: refinanciamento da dívida mobiliária consiste na <b>emissão de títulos para pagamento do principal acrescido da atualização monetária</b>.</p><p>O Resumo compara, no art. 5º, com a pessoa que quita um empréstimo no banco com recursos de um novo empréstimo. E a atualização monetária do principal refinanciado não pode superar a variação do índice de preços previsto na LDO ou em legislação específica (art. 5º, § 3º).</p><p class='fb-fonte'>LRF — Radegondes · <i>Definições básicas — refinanciamento da dívida mobiliária</i></p>",
11:"<p>Certo. Art. 29, § 3º, na OBSERVAÇÃO 1 do Resumo: também integram a dívida consolidada as operações de crédito de <b>prazo inferior a 12 meses cujas receitas tenham constado do orçamento</b>.</p><p>O exemplo do material: em fevereiro, o <b>Estado do RJ</b> realizou operação de crédito para pagamento em <b>outubro</b> do mesmo ano, com receita prevista na LOA. Mesmo com prazo inferior a 12 meses, a operação entra no cálculo da dívida fundada (consolidada).</p><p class='fb-fonte'>LRF — Radegondes · <i>Definições básicas — OBSERVAÇÕES</i></p>",
12:"<p>Certo. É a OBSERVAÇÃO 2 do Resumo (art. 30, § 7º): para fins de aplicação dos limites ao endividamento, os <b>precatórios judiciais não pagos</b> durante a execução do orçamento em que houverem sido incluídos <b>integram a dívida consolidada</b> (fundada).</p><p>Assim, o precatório incluído no orçamento e não pago vira dívida consolidada e passa a pesar no limite de endividamento do ente.</p><p class='fb-fonte'>LRF — Radegondes · <i>Definições básicas — OBSERVAÇÕES</i></p>",
13:"<p>Certo. OBSERVAÇÃO 3 do Resumo: a Dívida Consolidada Líquida (DCL) representa o montante da dívida consolidada deduzidas <b>as disponibilidades de caixa, as aplicações financeiras e os demais haveres (direitos) financeiros</b>.</p><p>Fórmula para prova: <b>DCL = DC − (caixa + aplicações financeiras + demais haveres financeiros)</b>.</p><p class='fb-fonte'>LRF — Radegondes · <i>Definições básicas — OBSERVAÇÕES</i></p>",
14:"<p>Certo. O art. 29, § 2º, manda incluir na dívida consolidada da <b>União</b> a relativa à emissão de títulos de responsabilidade do <b>Banco Central do Brasil</b>.</p><p>O Resumo traz a definição de dívida mobiliária com os títulos da União, <b>inclusive os do Banco Central</b>, e a OBSERVAÇÃO 4: hoje o <b>BACEN não pode emitir títulos</b> da dívida pública (art. 34). O § 2º cuida dos títulos que ele já tinha emitido.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 29, § 2º, não é transcrito no material.</p>",
15:"<p>Certo. O art. 29, § 1º, equipara a operação de crédito a <b>assunção, o reconhecimento ou a confissão de dívidas</b> pelo ente, sem prejuízo das exigências dos arts. 15 e 16. Sem autorização orçamentária, o ato fica vedado.</p><p>O Resumo traz a ideia vizinha no art. 37: equipara-se a operação de crédito, e está vedada, a <b>assunção de obrigação, sem autorização orçamentária, com fornecedores</b> para pagamento a posteriori de bens e serviços. No exemplo do material, a PPP com contraprestação anual de um milhão de reais por 20 anos fica vedada sem autorização legislativa.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 29, § 1º, não é transcrito; o material traz só o art. 37.</p>",
16:"<p>Errado. Quem fixa os limites globais da dívida <b>consolidada</b> da União, Estados, DF e Municípios é o <b>Senado Federal</b> (CF, art. 52, VI), por proposta do Presidente da República (LRF, art. 30, I).</p><p>O esquema do Resumo sobre quem define os limites: <b>consolidada → Senado Federal</b>; <b>mobiliária federal → Congresso Nacional</b> (por lei); <b>mobiliária estadual e municipal → Senado Federal</b>. O Congresso só entra na mobiliária federal.</p><p class='fb-fonte'>LRF — Radegondes · <i>Dos limites da dívida pública — quem define os limites</i></p>",
17:"<p>Certo. Art. 30, I: o Presidente da República submete ao <b>Senado Federal</b> a proposta de limites globais para o montante da dívida consolidada da União, Estados e Municípios, conforme o art. 52, VI, da CF.</p><p>No esquema do Resumo: <b>dívida consolidada → Senado</b>. A exceção é a dívida mobiliária <b>federal</b>, cujo limite vem de <b>lei</b> aprovada pelo Congresso Nacional (art. 30, II).</p><p class='fb-fonte'>LRF — Radegondes · <i>Dos limites da dívida pública — quem define os limites</i></p>",
18:"<p>Certo. Art. 30, II: o Presidente submete ao <b>Congresso Nacional projeto de lei</b> com limites para o montante da <b>dívida mobiliária federal</b> (CF, art. 48, XIV), acompanhado da demonstração de sua adequação aos limites da dívida consolidada da União.</p><p>No esquema do Resumo, é a única hipótese em que o Congresso define limite: <b>mobiliária federal</b>. Consolidada e mobiliária estadual e municipal ficam com o Senado.</p><p class='fb-fonte'>LRF — Radegondes · <i>Dos limites da dívida pública — quem define os limites</i></p>",
19:"<p>Errado. O Congresso Nacional só fixa, por lei, o limite da dívida mobiliária <b>federal</b>. A mobiliária <b>estadual e municipal</b> tem limite fixado pelo <b>Senado Federal</b> (CF, art. 52, IX).</p><p>O esquema do Resumo: mobiliária <b>federal → Congresso Nacional</b>; mobiliária <b>estadual → Senado</b>; mobiliária <b>municipal → Senado</b>. A troca entre as duas Casas é a pegadinha.</p><p class='fb-fonte'>LRF — Radegondes · <i>Dos limites da dívida pública — quem define os limites</i></p>",
20:"<p>Certo. O art. 30, § 3º, determina que os limites de dívida sejam fixados em <b>percentual da receita corrente líquida</b> para cada esfera de governo e aplicados igualmente a todos os entes da respectiva esfera, constituindo, para cada um deles, <b>limites máximos</b>.</p><p>É a mesma base usada para os limites de pessoal que o Resumo traz no art. 19: a <b>RCL</b>.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 30, § 3º, não é transcrito; o material traz só os incisos I e II do art. 30.</p>",
21:"<p>Errado. A apuração do montante da dívida consolidada é feita ao final de cada <b>quadrimestre</b> (art. 30, § 4º), não de cada semestre.</p><p>O Resumo confirma a régua quadrimestral no art. 31: se a dívida consolidada ultrapassar o limite <b>ao final de um quadrimestre</b>, deverá ser reconduzida até o término dos <b>três quadrimestres</b> subsequentes. A despesa com pessoal também é verificada por quadrimestre (art. 22).</p><p class='fb-fonte'>LRF — Radegondes · <i>Da recondução da dívida aos limites — art. 31</i></p>",
22:"<p>Certo. Literalidade do art. 31: ultrapassado o limite ao final de um quadrimestre, a dívida deve ser reconduzida até o término dos <b>três subsequentes</b>, reduzindo o excedente em pelo menos <b>25%</b> no primeiro.</p><p>O quadro NÃO CONFUNDA do Resumo (repetido de propósito, avisa o material): <b>dívida consolidada (art. 31)</b> — 3 quadrimestres, <b>1/4 (25%)</b> no primeiro; <b>despesa com pessoal (art. 23)</b> — 2 quadrimestres, <b>1/3</b> no primeiro.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da recondução da dívida aos limites — NÃO CONFUNDA</i></p>",
23:"<p>Errado. A assertiva aplicou à despesa com pessoal a regra da <b>dívida consolidada</b>. Para pessoal, são <b>dois quadrimestres</b>, com pelo menos <b>um terço</b> no primeiro (art. 23).</p><p>O quadro NÃO CONFUNDA do Resumo: <b>art. 23 (pessoal)</b> — 2 quadrimestres e 1/3; <b>art. 31 (dívida)</b> — 3 quadrimestres e 1/4 (25%). A dívida tem mais prazo e exige um corte inicial menor.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da recondução da dívida aos limites — NÃO CONFUNDA</i></p>",
24:"<p>Certo. Art. 31, § 1º, I: enquanto perdurar o excesso, o ente estará proibido de realizar <b>operação de crédito interna ou externa, inclusive por antecipação de receita</b>, com ressalva para a dívida mobiliária.</p><p>O Resumo transcreve a ressalva como as operações para <b>pagamento de dívidas mobiliárias</b>; a redação atual fala em refinanciamento do principal atualizado da dívida mobiliária. O sentido é o mesmo: só escapa a operação ligada à rolagem da dívida mobiliária. A outra consequência é obter o resultado primário necessário, com limitação de empenho.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da recondução da dívida aos limites — art. 31, § 1º</i></p>",
25:"<p>Certo. Art. 31, § 1º, II: enquanto perdurar o excesso, o ente <b>obterá resultado primário necessário à recondução da dívida ao limite</b>, promovendo, entre outras medidas, <b>limitação de empenho, na forma do art. 9º</b>.</p><p>O art. 9º, no Resumo, é a limitação de empenho e movimentação financeira feita pelos Poderes e pelo MP, por ato próprio, nos 30 dias subsequentes ao bimestre, segundo os critérios da LDO.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da recondução da dívida aos limites — art. 31, § 1º</i></p>",
26:"<p>Certo. O art. 31, § 2º, diz que, vencido o prazo para retorno da dívida ao limite e enquanto perdurar o excesso, o ente ficará <b>impedido de receber transferências voluntárias</b> da União ou do Estado.</p><p>É a mesma sanção que o Resumo mostra para a despesa com pessoal não reconduzida (art. 23, § 3º). E vale o ATENÇÃO do material: a suspensão de transferências voluntárias poupa as ações de <b>ESA</b> (educação, saúde e assistência social).</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 31, § 2º, não é transcrito; o material traz só o § 1º.</p>",
27:"<p>Certo. O art. 31, § 3º, manda aplicar as restrições do § 1º <b>imediatamente</b> se o montante da dívida exceder o limite no <b>primeiro quadrimestre do último ano de mandato</b> do Chefe do Poder Executivo.</p><p>É a regra gêmea do art. 23, § 4º, que o Resumo traz para a despesa com pessoal: excedido o limite no primeiro quadrimestre do último ano do mandato, as sanções valem na hora.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 31, § 3º, não é transcrito; o material traz só o § 1º.</p>",
28:"<p>Certo. É a OBS. 01 do Resumo (art. 65, I): na ocorrência de <b>calamidade pública</b>, enquanto perdurar a situação, ficam <b>suspensas a contagem dos prazos</b> e as disposições dos <b>arts. 23 e 31</b>.</p><p>O art. 65 exige que a calamidade seja reconhecida pelo Congresso Nacional, no caso da União, ou pelas Assembleias Legislativas, no caso dos Estados e Municípios. Os arts. 23 e 31 são justamente os de recondução da despesa com pessoal e da dívida consolidada.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da recondução da dívida aos limites — OBS. 01</i></p>",
29:"<p>Certo. É a OBS. 02 do Resumo (art. 66): os prazos dos arts. 23 e 31 serão <b>duplicados</b> no caso de crescimento real <b>baixo ou negativo do PIB</b> nacional, regional ou estadual por período igual ou superior a <b>4 trimestres</b>.</p><p>Guarde o contraste: <b>calamidade suspende</b> os prazos (art. 65); <b>PIB baixo duplica</b> os prazos (art. 66). Com PIB baixo, a dívida ganha 6 quadrimestres e a despesa com pessoal ganha 4.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da recondução da dívida aos limites — OBS. 02</i></p>",
30:"<p>Certo. É o ATENÇÃO do Resumo (art. 32): o <b>Ministério da Fazenda verificará</b> o cumprimento dos limites e condições relativos à operação de crédito de cada ente, <b>inclusive das empresas por eles controladas</b>, direta ou indiretamente.</p><p>O exemplo do material: para que uma <b>empresa pública municipal</b> realize operação de crédito interno com a União, o Ministério da Fazenda deverá verificar se o empréstimo observa os limites e as condições fixadas pelo Senado.</p><p class='fb-fonte'>LRF — Radegondes · <i>Dos limites da dívida pública — ATENÇÃO (art. 32)</i></p>",
31:"<p>Errado. O Ministério da Fazenda <b>verifica</b>; quem <b>fixa</b> os limites e as condições para operação de crédito é o <b>Senado Federal</b>.</p><p>O quadro NÃO CONFUNDA do Resumo: <b>Senado Federal</b> — fixa os limites e as condições para operação de crédito; <b>Ministério da Fazenda</b> — verifica se esses limites e condições estão sendo respeitados.</p><p class='fb-fonte'>LRF — Radegondes · <i>Dos limites da dívida pública — NÃO CONFUNDA (Senado x MF)</i></p>",
32:"<p>Certo. O art. 33 da LRF obriga a instituição financeira que contratar operação de crédito com ente da Federação, <b>exceto quando relativa à dívida mobiliária ou à externa</b>, a exigir comprovação de que a operação atende às condições e limites estabelecidos.</p><p>Complementa o que o Resumo traz no art. 32: o Ministério da Fazenda verifica os limites; a instituição financeira, por sua vez, deve exigir a comprovação antes de contratar.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 33 não é tratado no material.</p>",
33:"<p>Certo. O art. 33, § 1º, considera <b>nula</b> a operação de crédito realizada com infração à LRF, procedendo-se ao seu cancelamento mediante a <b>devolução do principal</b>, <b>vedados o pagamento de juros</b> e demais encargos financeiros.</p><p>A sanção recai sobre o credor: ele recebe de volta só o principal. Por isso o caput do art. 33 obriga a instituição financeira a exigir a comprovação dos limites antes de contratar.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 33, § 1º, não é tratado no material.</p>",
34:"<p>Errado. Não há ressalva de autorização do Senado: o <b>Banco Central do Brasil não pode emitir títulos da dívida pública</b> (art. 34).</p><p>É a OBSERVAÇÃO 4 do Resumo, dita sem exceção. A definição de dívida mobiliária ainda menciona os títulos do Banco Central, mas a vedação do art. 34 impede novas emissões.</p><p class='fb-fonte'>LRF — Radegondes · <i>Definições básicas — OBSERVAÇÕES</i></p>",
35:"<p>Certo. Literalidade do art. 35: é vedada a operação de crédito entre um ente da Federação, diretamente ou por intermédio de fundo, autarquia, fundação ou empresa estatal dependente, e outro, <b>ainda que sob a forma de novação, refinanciamento ou postergação</b> de dívida contraída anteriormente.</p><p>O exemplo do Resumo: o <b>Município de Guapimirim</b> precisa de recursos para construir uma escola e pede empréstimo ao <b>Estado do Rio de Janeiro</b>. A operação é proibida pelo art. 35.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das vedações — art. 35</i></p>",
36:"<p>Errado. O art. 35, § 2º, é expresso: a vedação do caput <b>não impede</b> Estados e Municípios de <b>comprar títulos da dívida da União</b> como aplicação de suas disponibilidades.</p><p>Paralelo com o que o Resumo traz no art. 36, parágrafo único: a instituição financeira controlada também pode adquirir, no mercado, títulos da dívida pública e títulos da União. Comprar título no mercado é aplicação, não empréstimo entre entes.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 35, § 2º, não é transcrito; o material traz o caput e o § 1º.</p>",
37:"<p>Certo. Art. 35, § 1º: excetuam-se da vedação as operações entre <b>instituição financeira estatal</b> e outro ente que não se destinem a <b>financiar despesas correntes</b> nem a <b>refinanciar dívidas não contraídas junto à própria instituição concedente</b>.</p><p>O exemplo do Resumo: o Município deve à instituição estatal <b>X</b> e não pode pegar empréstimo com a estatal <b>Y</b> para quitar essa dívida, porque seria refinanciar dívida não contraída junto à própria concedente.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das vedações — art. 35, § 1º</i></p>",
38:"<p>Certo. Literalidade do art. 36: é proibida a operação de crédito entre uma instituição financeira estatal e o <b>ente da Federação que a controle</b>, na qualidade de beneficiário do empréstimo.</p><p>O exemplo do Resumo: a <b>Caixa Econômica Federal e o Banco do Brasil</b> não podem realizar operação de crédito com a <b>União</b>, mas podem com Estados e Municípios para financiar despesas de capital, desde que não seja refinanciamento de dívida de outra instituição.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das vedações — art. 36</i></p>",
39:"<p>Errado. O art. 36, parágrafo único, permite: a instituição financeira controlada pode adquirir, no mercado, <b>títulos da dívida pública para atender investimento de seus clientes</b>, ou títulos da União para aplicação de recursos próprios.</p><p>O exemplo do Resumo: a Caixa e o Banco do Brasil não podem emprestar à União, mas <b>podem</b> comprar esses títulos no mercado.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das vedações — art. 36, parágrafo único</i></p>",
40:"<p>Certo. É o item 01 do quadro do Resumo sobre o art. 37: equipara-se a operação de crédito, e está vedada, a <b>captação de recursos a título de antecipação de receita de tributo</b> (ou contribuição) <b>cujo fato gerador ainda não tenha ocorrido</b>.</p><p>Os outros três itens do quadro: recebimento antecipado de valores de empresa controlada, salvo lucros e dividendos; assunção de compromisso com fornecedor mediante título de crédito; assunção de obrigação sem autorização orçamentária com fornecedores.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das vedações a operações de crédito equiparadas — art. 37</i></p>",
41:"<p>Certo. É o item 03 do quadro do Resumo sobre o art. 37: assunção direta de compromisso, confissão de dívida ou operação assemelhada com fornecedor de bens, mercadorias ou serviços, mediante <b>emissão, aceite ou aval de título de crédito</b>, <b>não se aplicando esta vedação a empresas estatais dependentes</b>.</p><p>Guarde a ressalva final: é a única do art. 37 que exclui um tipo de entidade (as estatais dependentes).</p><p class='fb-fonte'>LRF — Radegondes · <i>Das vedações a operações de crédito equiparadas — art. 37</i></p>",
42:"<p>Errado no inclusive. O item 02 do quadro do Resumo (art. 37, II) veda o recebimento antecipado de valores de empresa em que o Poder Público detenha a maioria do capital votante, <b>salvo lucros e dividendos</b>, na forma da legislação.</p><p>Lucros e dividendos são a ressalva, não parte da vedação. A banca trocou o salvo por inclusive.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das vedações a operações de crédito equiparadas — art. 37</i></p>",
43:"<p>Certo. Pelo esquema do Resumo sobre o art. 38, a ARO é um empréstimo que se destina a atender <b>insuficiência de caixa durante o exercício financeiro</b> e realizar-se-á somente <b>a partir do décimo dia do início do exercício</b>.</p><p>Completam o esquema: liquidação <b>até 10 de dezembro</b> de cada ano; proibição de outros encargos além da taxa de juros; e vedação enquanto houver ARO anterior não resgatada e no <b>último ano de mandato</b> do chefe do Executivo.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das operações de crédito por ARO</i></p>",
44:"<p>Errado no prazo. A ARO deve ser liquidada até o dia <b>10 de dezembro</b> de cada ano, não 31.</p><p>O comentário do Resumo reforça: os entes devem quitar a operação até, no máximo, <b>o dia 10 de dezembro</b> do ano de contratação. E o esquema lembra que a ARO <b>não será autorizada se forem cobrados outros encargos que não a taxa de juros</b> da operação.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das operações de crédito por ARO</i></p>",
45:"<p>Certo. No esquema do Resumo, a ARO <b>estará proibida enquanto existir operação anterior da mesma natureza não integralmente resgatada (paga)</b>.</p><p>A outra proibição do esquema: <b>no último ano de mandato</b> do Presidente, Governador ou Prefeito. Primeiro se quita a ARO anterior, depois se contrata outra.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das operações de crédito por ARO</i></p>",
46:"<p>Errado. A ARO é <b>proibida no último ano de mandato</b> do Presidente, Governador ou Prefeito, sem a ressalva da liquidação até 10 de dezembro.</p><p>O quadro NÃO CONFUNDA do Resumo separa os prazos de fim de mandato: <b>art. 38, IV, b</b> — ARO proibida no <b>último ano</b> de mandato do chefe do Executivo; <b>art. 21, II</b> — 180 dias (pessoal); <b>art. 42</b> — últimos 2 quadrimestres (obrigação sem caixa).</p><p class='fb-fonte'>LRF — Radegondes · <i>Das operações de crédito por ARO — NÃO CONFUNDA</i></p>",
47:"<p>Certo. Literalidade do art. 40, § 1º: a garantia está condicionada ao oferecimento de <b>contragarantia, em valor igual ou superior</b> ao da garantia, e à <b>adimplência</b> da entidade que a pleitear junto ao garantidor e às entidades por ele controladas.</p><p>O exemplo do Resumo: um Município toma empréstimo com outro país com <b>garantia da União</b>. A União, agente garantidor, pode exigir do Município como contragarantia a receita de <b>ISS</b>, em valor igual ou superior ao da garantia.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da garantia e da contragarantia — art. 40</i></p>",
48:"<p>Errado. É o contrário: pelo art. 40, § 1º, I, <b>não será exigida contragarantia de órgãos e entidades do próprio ente</b>.</p><p>No Resumo, a contragarantia (em valor igual ou superior ao da garantia) é a regra, com essa dispensa para o próprio ente. Não faria sentido o ente pedir garantia de si mesmo.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da garantia e da contragarantia — art. 40, § 1º</i></p>",
49:"<p>Certo. Literalidade do art. 40, § 1º, II: a contragarantia exigida pela União a Estado ou Município, ou pelos Estados aos Municípios, poderá consistir na <b>vinculação de receitas tributárias diretamente arrecadadas e provenientes de transferências constitucionais</b>, com outorga de poderes ao garantidor para <b>retê-las</b> e aplicar o valor na liquidação da dívida vencida.</p><p>É o exemplo do Resumo: a União garante o empréstimo externo do Município e exige como contragarantia a receita de <b>ISS</b>.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da garantia e da contragarantia — art. 40, § 1º</i></p>",
50:"<p>Certo. O art. 40, § 5º, declara <b>nula</b> a garantia concedida <b>acima dos limites fixados pelo Senado Federal</b>.</p><p>Liga com o esquema do Resumo: o <b>Senado fixa</b> os limites e condições (inclusive de garantias, CF, art. 52, VIII), e o Ministério da Fazenda verifica. O caput do art. 40, transcrito no material, já manda a União observar os limites e condições do Senado.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 40, § 5º, não é transcrito no material.</p>",
51:"<p>Certo. O art. 40, § 10, prevê que o ente cuja dívida tiver sido <b>honrada pela União ou por Estado</b>, em decorrência de garantia prestada em operação de crédito, terá <b>suspenso o acesso a novos créditos ou financiamentos</b> até a total liquidação da dívida.</p><p>No exemplo do Resumo, se o Município der calote no empréstimo externo, a União honra a dívida e pode reter a receita de ISS dada como contragarantia. O § 10 acrescenta o bloqueio de novos créditos até a quitação.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 40, § 10, não é transcrito no material.</p>",
52:"<p>Certo. Literalidade do art. 42: é vedado ao titular de Poder ou órgão, nos <b>últimos dois quadrimestres do seu mandato</b>, contrair obrigação de despesa que não possa ser cumprida integralmente dentro dele, ou que tenha parcelas a pagar no exercício seguinte <b>sem suficiente disponibilidade de caixa</b>.</p><p>O exemplo do Resumo: o prefeito de <b>Pindamonhangaba</b> pode contrair despesa no último mês do mandato, desde que ela seja cumprida integralmente dentro dele ou que haja caixa suficiente para pagamento no exercício seguinte.</p><p class='fb-fonte'>LRF — Radegondes · <i>Dos restos a pagar — art. 42</i></p>",
53:"<p>Errado no prazo. O art. 42 alcança os <b>últimos dois quadrimestres</b> do mandato. Os <b>180 dias</b> são do art. 21, II (aumento de despesa com pessoal).</p><p>O ATENÇÃO do Resumo avisa que as bancas confundem esses prazos. O quadro: <b>art. 21, II</b> — 180 dias (pessoal); <b>art. 38, IV, b</b> — último ano de mandato do chefe do Executivo (ARO); <b>art. 42</b> — últimos 2 quadrimestres (obrigação sem caixa).</p><p class='fb-fonte'>LRF — Radegondes · <i>Dos restos a pagar — NÃO CONFUNDA</i></p>",
54:"<p>Certo. O art. 42, parágrafo único, manda que, na determinação da disponibilidade de caixa, sejam considerados os <b>encargos e despesas compromissadas a pagar até o final do exercício</b>.</p><p>Ou seja, o caixa que sustenta a despesa contraída nos últimos dois quadrimestres é o que sobra depois de descontados os compromissos já assumidos até 31 de dezembro. Não basta haver saldo bruto.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 42, parágrafo único, não é transcrito no material.</p>",
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"05", nome:"Dívida e endividamento", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
