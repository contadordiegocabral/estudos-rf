/* Direito Administrativo — Módulo 10: Parceria Público-Privada (PPP), consórcios públicos e convênios (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dadm10 = (function(){
"use strict";

var CARDS = [
  ["O que é a Parceria Público-Privada (PPP)?","É uma <b>concessão especial</b> em que <b>sempre</b> haverá uma <b>contraprestação pecuniária do Poder Público ao parceiro privado</b>. Submete-se à <b>Lei 11.079/04</b>. Denomina-se PPP o <b>contrato administrativo de concessão</b>, na modalidade <b>patrocinada</b> ou <b>administrativa</b>."],
  ["Quais são as duas modalidades de PPP?","<b>Patrocinada</b> e <b>administrativa</b>. Não há outras."],
  ["Concessão patrocinada — como o parceiro privado é remunerado?","<b>Contraprestação do Estado + tarifa do usuário</b>."],
  ["Concessão administrativa — como o parceiro privado é remunerado?","<b>Remuneração integral do Estado</b>. Aqui a <b>Administração Pública é a usuária principal, direta ou indireta</b>."],
  ["PEGADINHA das modalidades: em qual delas a Administração é a usuária principal?","Na modalidade <b>ADMINISTRATIVA</b>. A banca vai dizer que é na <b>patrocinada</b> — o resumo registra essa troca como <b>PEGADINHA</b> e a marca como <b>ERRADO</b>."],
  ["Qual modalidade de licitação se usa na PPP?","<b>Concorrência</b> ou <b>Diálogo Competitivo</b>."],
  ["E se o contrato não prevê contraprestação pecuniária do Poder Público?","Então <b>não será PPP</b>, e sim <b>concessão comum</b>. Nas concessões comuns (<b>Lei 8.987/95</b>), o particular delegatário é remunerado <b>apenas pelas tarifas pagas pelos usuários</b>."],
  ["Que cláusula de risco o contrato de PPP deve conter?","A <b>repartição de riscos entre as partes</b>, <b>inclusive</b> os referentes a <b>caso fortuito</b>, <b>força maior</b>, <b>fato do príncipe</b> e <b>álea econômica extraordinária</b>."],
  ["Exemplo do resumo: União concede a exploração de ferrovia a ser construída pelo parceiro privado, com parcela de recursos públicos, podendo ele cobrar tarifas dos usuários. Que modalidade é?","<b>Concessão patrocinada</b> — há <b>contraprestação do Estado + tarifa do usuário</b>."],
  ["Restrição da PPP quanto ao valor","A PPP <b>não pode ser inferior a R$ 10 milhões</b>."],
  ["Restrição da PPP quanto ao tempo","Periodicidade <b>mínima de 5 anos</b> e <b>máxima de 35 anos</b>, <b>incluindo eventual prorrogação</b>."],
  ["Restrição da PPP quanto à matéria","<b>Não é cabível</b> PPP que tenha como <b>objeto único</b>: o <b>fornecimento de mão de obra</b> (ex.: serviço de vigilância), o <b>fornecimento de equipamentos</b> ou a <b>execução de obra pública</b>. A PPP <b>tem que ter mais de um objeto</b>."],
  ["Exemplos de PPP com mais de um objeto","<b>Construção de instalações + prestação de serviços continuados</b> · <b>instalação de postes + prestação de serviços de iluminação pública</b> · <b>construção de metrô + prestação de serviços de operação do metrô</b>."],
  ["Patrimônio de afetação — o que é e é obrigatório?","É a <b>reserva de um patrimônio</b> para garantir o pagamento ao parceiro privado. Sua constituição é <b>FACULTADA</b>. Ele <b>não se comunicará</b> com o restante do patrimônio do <b>fundo garantidor de parcerias público-privadas</b> e ficará <b>vinculado exclusivamente à garantia</b> em virtude da qual tiver sido constituído."],
  ["Como o edital de PPP admite a apresentação das propostas econômicas?","<b>a)</b> propostas <b>escritas em envelopes lacrados</b>; ou <b>b)</b> propostas <b>escritas, seguidas de lances em viva voz</b>."],
  ["Em que ordem são oferecidos os lances em viva voz?","<b>Sempre na ordem INVERSA</b> da classificação das propostas escritas."],
  ["O edital de PPP pode limitar os lances?","<b>É vedado limitar a quantidade de lances.</b> Mas o edital <b>poderá restringir</b> a apresentação de lances em viva voz aos licitantes cuja <b>proposta escrita for no máximo 20% maior</b> que o valor da melhor proposta."],
  ["A Lei Geral de PPP alcança quais Poderes?","Aplica-se aos órgãos da Administração Pública dos Poderes <b>Executivo</b> e <b>Legislativo</b>, <b>mas não ao Poder Judiciário</b>."],
  ["SPE na PPP — quando, obrigatória e para quê?","<b>Antes da celebração do contrato</b> de PPP, <b>deverá</b> (obrigatório) ser constituída uma <b>SPE — Sociedade de Propósito Específico</b>, incumbida de <b>implantar e gerir o objeto da parceria</b>. Ela <b>pode</b> (facultativo) assumir a forma de <b>companhia aberta</b>, com valores mobiliários admitidos a negociação no mercado. É <b>vedado à Administração Pública ser titular da maioria do capital votante</b> da SPE."],
  ["Na PPP, o que o governo delega e o que mantém?","Delega a <b>operação</b> ao setor privado, mas <b>mantém</b> as atividades de <b>planejamento, monitoramento e regulação</b>. O contrato de PPP <b>poderá prever</b> o pagamento ao parceiro privado de <b>remuneração variável</b>."],
  ["Qual o principal desafio para a realização de PPP patrocinada?","A <b>análise da viabilidade econômica e financeira do projeto</b>."],

  ["Consórcio público — conceito e quem pode integrar","É a <b>pessoa jurídica</b> formada <b>exclusivamente por entes federados</b> (<b>U, E, DF e M</b>). Finalidade: a <b>cooperação federativa</b> (realização de objetivos de interesse comum). Rege-se pela <b>Lei 11.107/05</b>."],
  ["Quem representa o consórcio público e quem o fiscaliza?","O <b>representante legal</b> é o <b>Chefe do Poder Executivo eleito</b>. O consórcio está sujeito à fiscalização do <b>Tribunal de Contas competente para apreciar as contas do Chefe do Poder Executivo eleito representante do consórcio</b>."],
  ["Requisitos formais do consórcio público","<b>Subscrição prévia do protocolo de intenções</b> e <b>ratificação do protocolo de intenções por lei</b>."],
  ["Personalidade jurídica do consórcio público","<b>De direito público</b> → <b>associação pública</b> → <b>integra</b> a Administração Indireta dos entes consorciados. <b>De direito privado</b> → <b>associação civil</b> → <b>não integra</b> a Administração Indireta dos entes consorciados."],
  ["O que o consórcio público pode fazer para cumprir seus objetivos?","<b>Firmar convênios, contratos e acordos de qualquer natureza</b> · <b>receber auxílios, contribuições e subvenções</b> · <b>promover desapropriações e instituir servidões administrativas</b> · <b>arrecadar tarifas</b> · <b>ser contratado mediante dispensa de licitação</b> pela Administração dos entes consorciados (<b>art. 75, XI, Lei 14.133/21</b>)."],
  ["Qual a restrição para o consórcio desapropriar ou instituir servidão?","<b>Somente consórcios de direito público</b> e <b>desde que haja previsão no contrato</b>."],
  ["Contrato de rateio","É o instrumento pelo qual <b>os entes se comprometem a fornecer recursos financeiros ao consórcio</b>. Os entes consorciados <b>somente entregarão recursos</b> ao consórcio público <b>mediante contrato de rateio</b>."],
  ["Contrato de programa","É o instrumento firmado <b>com um dos consorciados</b>, para que este <b>assuma a obrigação de prestar serviços por meio de seus próprios órgãos</b>. Ele <b>continuará vigente mesmo quando extinto o consórcio público</b> ou o <b>convênio de cooperação</b> que autorizou a gestão associada de serviços públicos."],
  ["Quais composições de consórcio o resumo veda?","<b>Não pode</b> haver consórcio constituído <b>unicamente pela União e Municípios</b>. <b>Não pode</b> haver consórcio celebrado entre <b>um Estado e Município de outro Estado</b>."],
  ["Que cláusula é nula no contrato de consórcio público?","Na <b>gestão associada de serviços públicos</b>, será <b>NULA</b> a cláusula que preveja que o <b>Estado consorciado</b> fará, em benefício do consórcio, uma <b>contribuição financeira em numerário determinado, FORA DO RATEIO</b>."],

  ["Convênio — conceito","É um <b>sistema de cooperação</b> entre <b>entidades públicas de qualquer espécie</b>, assim como entre <b>uma entidade pública e entidades privadas sem fins lucrativos</b>, para <b>execução de ações de interesse recíproco</b>, <b>financiadas com recursos públicos</b>. É regulado pelo <b>Decreto 6.170/07</b>."],
  ["Convênio × contrato administrativo, e o fluxo do dinheiro","<b>Diferentemente do que ocorre nos contratos administrativos, nos convênios há convergência de propósitos entre os signatários</b> — é uma <b>cooperação</b>, dada a coincidência dos interesses. Ocorre <b>transferência de recursos financeiros</b> de uma entidade pública <b>1)</b> para <b>outra entidade pública, incluindo consórcios públicos</b>, ou <b>2)</b> para <b>entidade privada sem fins lucrativos</b>. É um dos instrumentos para <b>descentralizar a execução de atividades</b>."],
  ["Quadro consórcios × convênios","<b>Consórcios:</b> só podem ser integrados por <b>entes federados</b> (U, E, DF, M) e são <b>personificados</b>. <b>Convênios:</b> podem ser firmados <b>com particulares sem fins lucrativos</b> e <b>não são personificados</b> (despersonificados)."],
  ["Concedente × convenente","<b>Concedente</b> é o <b>responsável pela transferência dos recursos financeiros</b> destinados à execução do objeto do convênio. <b>Convenente</b> é <b>quem recebe</b> esses recursos. No <b>momento da assinatura</b> do convênio, o <b>convenente</b> deve <b>comprovar sua situação de regularidade</b> perante os órgãos ou as entidades públicas."],
  ["Vedações à celebração de convênios e contratos de repasse","Vigência que se encerre no <b>último ou no primeiro trimestre de mandato</b> dos Chefes do Poder Executivo · entidades privadas sem fins lucrativos que <b>não comprovem ter desenvolvido, nos últimos três anos</b>, atividades referentes à matéria objeto · entidades cujo <b>dirigente</b> seja <b>agente político de Poder ou do Ministério Público</b>, ou <b>dirigente de órgão ou entidade da administração pública de qualquer esfera</b>, ou o respectivo <b>cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o segundo grau</b> · objeto relacionado ao <b>pagamento de custeio continuado do proponente</b>."],
  ["A análise da prestação de contas pelo concedente pode resultar em quê?","<b>Aprovação</b> · <b>aprovação com ressalvas</b> (quando evidenciada <b>impropriedade ou outra falta de natureza formal de que NÃO resulte dano ao Erário</b>) · <b>rejeição</b>, com a determinação da <b>imediata instauração de tomada de contas especial</b>."],
  ["Plano de Trabalho e projeto básico nos convênios","A execução do convênio subordina-se ao <b>prévio cadastramento do Plano de Trabalho</b>, <b>apresentado pelo convenente</b>, no <b>SIAFI</b> (Sistema Integrado de Administração Financeira do Governo Federal). Nos convênios e contratos de repasse, o <b>projeto básico ou o termo de referência</b> deverá ser apresentado <b>antes da liberação da 1ª parcela</b> dos recursos."],
  ["Convênios: a quem se dá ciência das irregularidades?","Ao tomar conhecimento de <b>qualquer irregularidade</b>, o <b>concedente ou mandatária dará ciência aos órgãos de controle</b>. Havendo <b>fundada suspeita de crime ou de improbidade administrativa</b>, cientificará os <b>Ministérios Públicos Federal e Estadual</b> e a <b>Advocacia-Geral da União</b>."],
  ["Contrapartida, fiscalização e a PEGADINHA da licitação nos convênios","O convênio conterá, <b>expressa e obrigatoriamente</b>, cláusulas estabelecendo a <b>obrigação de cada um dos partícipes</b>, <b>inclusive o valor da contrapartida, de responsabilidade do convenente</b>. Cabe ao <b>convenente executar e fiscalizar</b> os trabalhos. <b>PEGADINHA:</b> a celebração de convênio administrativo de cooperação <b>PODE PRESCINDIR</b> (dispensar) de licitação prévia (<b>art. 75, XI, Lei 14.133/21</b>) — a banca vai dizer que <b>não pode</b>."]
];

var QS = [
  ["A parceria público-privada é uma concessão especial em que sempre haverá uma contraprestação pecuniária do Poder Público ao parceiro privado.","C","CEBRASPE","Conceito de abertura do resumo."],
  ["Na concessão patrocinada, o parceiro privado é remunerado exclusivamente pela contraprestação pecuniária do Estado.","E","FCC","Patrocinada é <b>contraprestação do Estado + tarifa do usuário</b>; remuneração integral do Estado é a administrativa."],
  ["Na concessão administrativa, a remuneração do parceiro privado é integralmente devida pelo Estado.","C","FGV","Quadro das modalidades de PPP."],
  ["Na modalidade patrocinada, a administração pública é a usuária principal, direta ou indireta, dos serviços prestados pela concessionária.","E","VUNESP","PEGADINHA expressa do resumo: a usuária principal é na modalidade <b>administrativa</b>."],
  ["Na modalidade administrativa, a Administração Pública é a usuária principal, direta ou indireta.","C","AOCP","É a correção que o próprio resumo apresenta."],
  ["A contratação de parceria público-privada deve observar a modalidade de licitação concorrência ou diálogo competitivo.","C","IBFC","Modalidades indicadas no resumo."],
  ["Contrato de concessão que não preveja contraprestação pecuniária do Poder Público ao parceiro privado configura parceria público-privada na modalidade administrativa.","E","FUNDATEC","Sem contraprestação pecuniária <b>não é PPP</b>, e sim <b>concessão comum</b>."],
  ["Nas concessões comuns, o particular delegatário é remunerado apenas pelas tarifas pagas pelos usuários.","C","Lei 8.987/95","É o contraste que o resumo faz com a PPP."],
  ["Entre as cláusulas do contrato de PPP deve constar a repartição de riscos entre as partes, inclusive os referentes a caso fortuito, força maior, fato do príncipe e álea econômica extraordinária.","C","CEBRASPE","Quadro ATENÇÃO do resumo."],
  ["A União concedeu a parceiro privado a exploração de ferrovia a ser por ele construída, com parcela de recursos públicos, podendo o parceiro cobrar tarifas dos usuários; trata-se de concessão administrativa.","E","FCC","No exemplo do resumo é concessão <b>patrocinada</b>: contraprestação do Estado + tarifa do usuário."],
  ["A parceria público-privada não pode ter valor inferior a R$ 20 milhões.","E","FGV","O piso do resumo é <b>R$ 10 milhões</b>."],
  ["A PPP deve ter periodicidade mínima de 5 anos e máxima de 35 anos, incluindo eventual prorrogação.","C","VUNESP","Restrição quanto ao tempo."],
  ["O prazo máximo da PPP é de 35 anos, não computada eventual prorrogação.","E","AOCP","Os 35 anos são o teto <b>incluindo</b> eventual prorrogação."],
  ["Não é cabível PPP que tenha como objeto único o fornecimento de mão de obra, o fornecimento de equipamentos ou a execução de obra pública.","C","IBFC","Restrição quanto à matéria — a PPP tem que ter mais de um objeto."],
  ["É cabível a celebração de PPP cujo objeto único seja a execução de obra pública, desde que observado o valor mínimo legal.","E","FUNDATEC","Obra pública como <b>objeto único</b> é vedada, qualquer que seja o valor."],
  ["A constituição de patrimônio de afetação é obrigatória na parceria público-privada.","E","CEBRASPE","O resumo diz que ela é <b>facultada</b>."],
  ["O patrimônio de afetação não se comunicará com o restante do patrimônio do fundo garantidor de parcerias público-privadas, ficando vinculado exclusivamente à garantia em virtude da qual tiver sido constituído.","C","FCC","Literalidade do TOME NOTA 02."],
  ["Os lances em viva voz na licitação de PPP serão sempre oferecidos na ordem direta da classificação das propostas escritas.","E","FGV","A ordem é <b>inversa</b> à da classificação das propostas escritas."],
  ["É vedado ao edital de PPP limitar a quantidade de lances, mas ele poderá restringir a apresentação de lances em viva voz aos licitantes cuja proposta escrita seja no máximo 20% maior que o valor da melhor proposta.","C","VUNESP","Observação 02 do resumo."],
  ["A Lei Geral de PPP aplica-se aos órgãos da Administração Pública dos Poderes Executivo, Legislativo e Judiciário.","E","AOCP","Aplica-se ao Executivo e ao Legislativo, <b>mas não ao Poder Judiciário</b>."],
  ["Antes da celebração do contrato de PPP, deverá ser constituída sociedade de propósito específico incumbida de implantar e gerir o objeto da parceria.","C","IBFC","A constituição da SPE é obrigatória e prévia."],
  ["É facultado à Administração Pública ser titular da maioria do capital votante da sociedade de propósito específico.","E","FUNDATEC","O resumo é expresso: fica <b>vedado</b> à Administração Pública ser titular da maioria do capital votante."],
  ["O contrato de parceria público-privada poderá prever o pagamento ao parceiro privado de remuneração variável.","C","CEBRASPE","TOME NOTA 06."],

  ["O consórcio público é pessoa jurídica formada exclusivamente por entes federados, com a finalidade de cooperação federativa.","C","FCC","Conceito do resumo."],
  ["Entidades privadas sem fins lucrativos podem integrar consórcio público, desde que haja previsão no protocolo de intenções.","E","FGV","O consórcio é formado <b>exclusivamente por entes federados</b> (U, E, DF e M)."],
  ["São requisitos formais do consórcio público a subscrição prévia do protocolo de intenções e a ratificação desse protocolo por lei.","C","VUNESP","Requisitos formais do resumo."],
  ["O consórcio público de direito privado assume a forma de associação pública e integra a administração indireta dos entes consorciados.","E","AOCP","De direito privado é <b>associação civil</b> e <b>não integra</b> a Administração Indireta."],
  ["O consórcio público de direito público adquire a forma de associação pública e integra a administração indireta dos entes consorciados.","C","IBFC","Quadro da personalidade jurídica."],
  ["O consórcio público está sujeito à fiscalização do Tribunal de Contas competente para apreciar as contas do Chefe do Poder Executivo eleito representante do consórcio.","C","FUNDATEC","Observação 03 do resumo."],
  ["O consórcio público pode promover desapropriações e instituir servidões administrativas, desde que seja de direito público e haja previsão no contrato.","C","CEBRASPE","Dupla condição registrada no resumo."],
  ["O consórcio público só pode ser contratado pela Administração dos entes consorciados após a realização de licitação.","E","art. 75, XI, Lei 14.133/21","Pode ser contratado mediante <b>dispensa de licitação</b> pela Administração dos entes consorciados."],
  ["Contrato de rateio é o instrumento pelo qual os entes se comprometem a fornecer recursos financeiros ao consórcio.","C","FCC","Conceito do resumo."],
  ["Contrato de programa é o instrumento pelo qual os entes consorciados se comprometem a entregar recursos financeiros ao consórcio.","E","FGV","Esse é o <b>contrato de rateio</b>; o de programa é firmado com um dos consorciados para prestar serviços por seus próprios órgãos."],
  ["É admitido consórcio público constituído unicamente pela União e por Municípios.","E","VUNESP","Observação 01: <b>não pode</b> haver consórcio constituído unicamente pela União e Municípios."],
  ["Na gestão associada de serviços públicos, é válida a cláusula do contrato de consórcio público que preveja contribuição financeira do Estado consorciado, em numerário determinado, fora do rateio.","E","IBFC","Será <b>NULA</b> essa cláusula."],
  ["O contrato de programa continuará vigente mesmo quando extinto o consórcio público ou o convênio de cooperação que autorizou a gestão associada de serviços públicos.","C","FUNDATEC","Observação 06 do resumo."],

  ["Convênio é o sistema de cooperação entre entidades públicas de qualquer espécie, assim como entre uma entidade pública e entidades privadas sem fins lucrativos, para a execução de ações de interesse recíproco, financiadas com recursos públicos.","C","CEBRASPE","Conceito do resumo."],
  ["Os convênios são despersonificados, ao contrário dos consórcios públicos, que são personificados.","C","FCC","Quadro comparativo do resumo."],
  ["Nos convênios, tal como nos contratos administrativos, os interesses dos signatários são opostos.","E","FGV","Nos convênios há <b>convergência de propósitos</b> entre os signatários."],
  ["Concedente é o responsável pela transferência dos recursos financeiros destinados à execução do objeto do convênio, e convenente é quem recebe esses recursos.","C","VUNESP","Observação 08 do resumo."],
  ["Nos convênios e contratos de repasse, o projeto básico ou o termo de referência deverá ser apresentado após a liberação da primeira parcela dos recursos.","E","AOCP","Deverá ser apresentado <b>antes</b> da liberação da 1ª parcela."],
  ["No momento da assinatura do convênio, o convenente deve comprovar sua situação de regularidade perante os órgãos ou as entidades públicas.","C","IBFC","Observação 09 do resumo."],
  ["É vedada a celebração de convênios e contratos de repasse cuja vigência se encerre no último ou no primeiro trimestre de mandato dos Chefes do Poder Executivo dos entes federativos.","C","FUNDATEC","Observação 04 do resumo."],
  ["É vedada a celebração de convênio com entidade privada sem fins lucrativos que não comprove ter desenvolvido, durante os últimos cinco anos, atividades referentes à matéria objeto do convênio.","E","CEBRASPE","O prazo do resumo é de <b>três anos</b>."],
  ["A vedação à celebração de convênio com entidade privada sem fins lucrativos alcança aquela cujo dirigente seja cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o terceiro grau, de dirigente de órgão da administração pública.","E","FCC","O limite do resumo é o <b>segundo grau</b>."],
  ["É vedada a celebração de convênios para a execução de atividades cujo objeto esteja relacionado ao pagamento de custeio continuado do proponente.","C","FGV","Observação 07 do resumo."],
  ["Havendo fundada suspeita de crime ou de improbidade administrativa, o concedente ou a mandatária cientificará apenas o Ministério Público Federal.","E","VUNESP","Cientificará os <b>Ministérios Públicos Federal e Estadual</b> e a <b>Advocacia-Geral da União</b>."],
  ["A análise da prestação de contas pelo concedente poderá resultar em aprovação, aprovação com ressalvas ou rejeição com a determinação da imediata instauração de tomada de contas especial.","C","AOCP","Observação 10 do resumo."],
  ["A aprovação com ressalvas cabe quando evidenciada impropriedade ou outra falta de natureza formal de que resulte dano ao Erário.","E","IBFC","Cabe quando <b>NÃO</b> resulte dano ao Erário."],
  ["A execução de convênio subordinar-se-á ao prévio cadastramento do Plano de Trabalho, apresentado pelo convenente, no SIAFI.","C","FUNDATEC","Observação 11 do resumo."],
  ["O convênio conterá, expressa e obrigatoriamente, cláusulas estabelecendo a obrigação de cada um dos partícipes, inclusive o valor da contrapartida, de responsabilidade do convenente.","C","CEBRASPE","Observação 13 do resumo."],
  ["A celebração de convênio administrativo de cooperação não pode prescindir da realização de licitação prévia.","E","art. 75, XI, Lei 14.133/21","PEGADINHA do resumo: a celebração <b>pode prescindir</b> (dispensar) de licitação prévia."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Parceria Público-Privada — modalidades, restrições e SPE",
      '<div class="box"><span class="bl">O que é PPP</span>'+
      '<p>É uma <b>concessão especial</b> em que <b>SEMPRE</b> haverá uma <b>contraprestação pecuniária do Poder Público ao parceiro privado</b>. Submete-se à <b>Lei 11.079/04</b>. Denomina-se PPP o <b>contrato administrativo de concessão</b>, na modalidade <b>patrocinada</b> ou <b>administrativa</b>.</p>'+
      '<p><b>Modalidade de licitação:</b> <b>Concorrência</b> ou <b>Diálogo Competitivo</b>.</p>'+
      '<p>Na PPP, o governo <b>delega a operação</b> ao setor privado, mas <b>mantém</b> as atividades de <b>planejamento, monitoramento e regulação</b>. O contrato <b>poderá prever</b> o pagamento ao parceiro privado de <b>remuneração variável</b>.</p></div>'+
      '<div class="box"><span class="bl">Concessão comum × concessão especial (PPP)</span>'+
      '<div class="tree"><div class="leaf"><b>COMUM</b> (Lei 8.987/95) — o particular delegatário é remunerado <b>apenas pelas tarifas pagas pelos usuários</b>.</div>'+
      '<div class="leaf"><b>ESPECIAL — PATROCINADA</b> — <b>contraprestação do Estado + tarifa do usuário</b>.</div>'+
      '<div class="leaf"><b>ESPECIAL — ADMINISTRATIVA</b> — <b>remuneração integral do Estado</b>. Aqui a <b>Administração Pública é a usuária principal</b>, direta ou indireta.</div></div>'+
      '<p>Se o contrato <b>não prevê contraprestação pecuniária</b> do Poder Público, então <b>não será PPP</b>, e sim <b>concessão comum</b>.</p></div>'+
      '<div class="box trap"><span class="bl">PEGADINHA das modalidades</span>'+
      '<p>O resumo transcreve a assertiva e a marca como <b>ERRADO</b>: <i>na modalidade patrocinada, a administração pública é a usuária principal direta ou indireta dos serviços prestados pela concessionária</i>.</p>'+
      '<p><b>CORRIGINDO:</b> na modalidade <b>ADMINISTRATIVA</b> a administração pública é a usuária principal.</p>'+
      '<p class="mn"><em>administrAtiva = Administração usuária · patrocinada = a tarifa do usuário patrocina parte da conta.</em></p></div>'+
      '<div class="box tip"><span class="bl">Exemplo do resumo</span>'+
      '<p>A União concedeu a um parceiro privado a exploração de uma <b>ferrovia</b> a ser por ele construída, mas que contará com <b>parcela de recursos públicos</b> para esse fim; conforme pactuado, o parceiro <b>poderá cobrar tarifas dos usuários</b>. Nos termos da Lei 11.079/2004, estamos diante de concessão na modalidade <b>PATROCINADA</b>.</p></div>'+
      '<div class="box"><span class="bl">Restrições — valor, tempo e matéria</span>'+
      '<ul><li><b>Valor:</b> a PPP <b>não pode ser inferior a R$ 10 milhões</b>.</li>'+
      '<li><b>Tempo:</b> periodicidade <b>mínima de 5 anos</b> e <b>máxima de 35 anos</b>, <b>incluindo eventual prorrogação</b>.</li>'+
      '<li><b>Matéria:</b> não é cabível PPP que tenha como <b>objeto único</b> o <b>fornecimento de mão de obra</b> (ex.: serviço de vigilância), o <b>fornecimento de equipamentos</b> ou a <b>execução de obra pública</b>.</li></ul>'+
      '<p>A <b>PPP tem que ter mais de um objeto</b>. Exemplos: construção de instalações + prestação de serviços continuados · instalação de postes + prestação de serviços de iluminação pública · construção de metrô + prestação de serviços de operação do metrô.</p></div>'+
      '<div class="box"><span class="bl">Cláusulas, patrimônio de afetação e propostas</span>'+
      '<p><b>ATENÇÃO:</b> entre as cláusulas do contrato de PPP deve constar a <b>repartição de riscos entre as partes</b>, <b>inclusive</b> os referentes a <b>caso fortuito</b>, <b>força maior</b>, <b>fato do príncipe</b> e <b>álea econômica extraordinária</b>.</p>'+
      '<p><b>Patrimônio de afetação:</b> reserva de patrimônio para garantir o pagamento ao parceiro privado. É <b>FACULTADA</b> a sua constituição; <b>não se comunicará</b> com o restante do patrimônio do <b>fundo garantidor de parcerias público-privadas</b> e ficará <b>vinculado exclusivamente à garantia</b> em virtude da qual tiver sido constituído.</p>'+
      '<p><b>Propostas econômicas</b> — o edital admite: <b>a)</b> propostas escritas em <b>envelopes lacrados</b>; ou <b>b)</b> propostas escritas <b>seguidas de lances em viva voz</b>. Os lances em viva voz são <b>sempre</b> oferecidos na <b>ordem INVERSA</b> da classificação das propostas escritas. É <b>vedado ao edital limitar a quantidade de lances</b>, mas ele <b>poderá restringir</b> os lances em viva voz aos licitantes cuja proposta escrita for <b>no máximo 20% maior</b> que o valor da melhor proposta.</p>'+
      '<p>A <b>Lei Geral de PPP</b> aplica-se aos órgãos da Administração Pública dos Poderes <b>Executivo</b> e <b>Legislativo</b>, <b>mas não ao Poder Judiciário</b>.</p></div>'+
      '<div class="box tip"><span class="bl">SPE — Sociedade de Propósito Específico</span>'+
      '<p><b>Antes da celebração do contrato de PPP:</b></p>'+
      '<ul><li><b>Deverá</b> (obrigatório) ser constituída uma <b>SPE</b>.</li>'+
      '<li>A SPE será incumbida de <b>implantar e gerir o objeto da parceria</b>.</li>'+
      '<li>A SPE <b>pode</b> (facultativo) assumir a forma de <b>companhia aberta</b>, com valores mobiliários admitidos a negociação no mercado.</li>'+
      '<li>Fica <b>VEDADO</b> à Administração Pública ser titular da <b>maioria do capital votante</b> da SPE.</li></ul>'+
      '<p>Fecha o bloco com o TOME NOTA 07: a <b>análise da viabilidade econômica e financeira do projeto</b> é o <b>principal desafio</b> para a realização de <b>PPP patrocinada</b>.</p></div>')
  ],
  V2:[
    sl("Consórcios públicos — personalidade, contratos e vedações",
      '<div class="box"><span class="bl">Conceito e requisitos</span>'+
      '<p>O consórcio público (<b>Lei 11.107/05</b>) é a <b>pessoa jurídica</b> formada <b>exclusivamente por entes federados</b> (<b>U, E, DF e M</b>). A finalidade é a <b>cooperação federativa</b> — realização de objetivos de interesse comum. O <b>representante legal</b> é o <b>Chefe do Poder Executivo eleito</b>.</p>'+
      '<p><b>Requisitos formais:</b> <b>subscrição prévia do protocolo de intenções</b> e <b>ratificação do protocolo de intenções por lei</b>.</p>'+
      '<p>Diferem-se dos <b>convênios</b> pelo fato de que estes são <b>despersonificados</b>.</p></div>'+
      '<div class="box"><span class="bl">Personalidade jurídica — o par que a banca troca</span>'+
      '<div class="tree"><div class="leaf"><b>De direito público</b> → <b>associação pública</b> → <b>INTEGRA</b> a Administração Indireta dos entes consorciados.</div>'+
      '<div class="leaf"><b>De direito privado</b> → <b>associação civil</b> → <b>NÃO INTEGRA</b> a Administração Indireta dos entes consorciados.</div></div></div>'+
      '<div class="box"><span class="bl">O que o consórcio público pode fazer</span>'+
      '<ul><li><b>Firmar convênios, contratos, acordos</b> de qualquer natureza.</li>'+
      '<li><b>Receber auxílios, contribuições e subvenções</b>.</li>'+
      '<li><b>Promover desapropriações e instituir servidões administrativas</b> — <b>somente consórcios de direito público</b> e <b>desde que haja previsão no contrato</b>.</li>'+
      '<li><b>Arrecadar tarifas</b>.</li>'+
      '<li><b>Ser contratado mediante dispensa de licitação</b> pela Administração dos entes consorciados (<b>art. 75, XI, Lei 14.133/21</b>).</li></ul></div>'+
      '<div class="box tip"><span class="bl">Rateio × programa</span>'+
      '<p><b>CONTRATO DE RATEIO</b> — instrumento pelo qual <b>os entes se comprometem a fornecer recursos financeiros ao consórcio</b>. Os entes consorciados <b>somente entregarão recursos</b> ao consórcio <b>mediante contrato de rateio</b>.</p>'+
      '<p><b>CONTRATO DE PROGRAMA</b> — instrumento firmado <b>com um dos consorciados</b>, para que este <b>assuma a obrigação de prestar serviços por meio de seus próprios órgãos</b>.</p>'+
      '<p>O contrato de programa <b>continuará vigente mesmo quando extinto o consórcio público</b> ou o <b>convênio de cooperação</b> que autorizou a gestão associada de serviços públicos.</p>'+
      '<p class="mn"><em>Rateio = dinheiro entrando no consórcio. Programa = serviço saindo por um consorciado.</em></p></div>'+
      '<div class="box trap"><span class="bl">As vedações e a cláusula nula</span>'+
      '<ul><li><b>Não pode</b> haver consórcio constituído <b>unicamente pela União e Municípios</b>.</li>'+
      '<li><b>Não pode</b> haver consórcio celebrado entre <b>um Estado e Município de outro Estado</b>.</li>'+
      '<li>Na <b>gestão associada de serviços públicos</b>, será <b>NULA</b> a cláusula do contrato de consórcio que preveja que o <b>Estado consorciado</b> fará, em benefício do consórcio, uma <b>contribuição financeira em numerário determinado, FORA DO RATEIO</b>.</li></ul>'+
      '<p>O consórcio está sujeito à fiscalização do <b>Tribunal de Contas competente para apreciar as contas do Chefe do Poder Executivo eleito representante do consórcio</b>.</p></div>')
  ],
  V3:[
    sl("Convênios — conceito, vedações e prestação de contas",
      '<div class="box"><span class="bl">Conceito</span>'+
      '<p>O convênio (<b>Decreto 6.170/07</b>) é um <b>sistema de cooperação entre entidades públicas de qualquer espécie</b>, assim como entre <b>uma entidade pública e entidades privadas sem fins lucrativos</b>, para <b>execução de ações de interesse recíproco</b>, <b>financiadas com recursos públicos</b>.</p>'+
      '<ul><li>É um <b>acordo</b> firmado para a realização de <b>objetivos em comum</b> de ambos os partícipes.</li>'+
      '<li>É uma <b>cooperação</b>, dada a <b>coincidência dos interesses</b> dos envolvidos.</li>'+
      '<li>É um dos instrumentos utilizados para <b>descentralizar a execução de atividades</b>.</li>'+
      '<li><b>Diferentemente do que ocorre nos contratos administrativos</b>, nos convênios há <b>convergência de propósitos</b> entre os signatários.</li></ul>'+
      '<p>Ocorre <b>transferência de recursos financeiros</b> de uma entidade pública: <b>1)</b> para <b>outra entidade pública, incluindo consórcios públicos</b>; ou <b>2)</b> para <b>entidade privada sem fins lucrativos</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Quadro comparativo — consórcios × convênios</span>'+
      '<div class="chips"><span class="chip">Consórcios: só entes federados (U, E, DF, M)</span><span class="chip">Consórcios: personificados</span><span class="chip">Convênios: cabem particulares sem fins lucrativos</span><span class="chip">Convênios: não personificados</span></div></div>'+
      '<div class="box"><span class="bl">Concedente, convenente e os documentos</span>'+
      '<p><b>Concedente</b> é o <b>responsável pela transferência dos recursos financeiros</b> destinados à execução do objeto do convênio. <b>Convenente</b> é <b>quem recebe</b> os recursos.</p>'+
      '<ul><li>No <b>momento da assinatura</b>, o <b>convenente</b> deve <b>comprovar sua situação de regularidade</b> perante os órgãos ou as entidades públicas.</li>'+
      '<li>O <b>projeto básico ou o termo de referência</b> deverá ser apresentado <b>antes da liberação da 1ª parcela</b> dos recursos.</li>'+
      '<li>A execução subordina-se ao <b>prévio cadastramento do Plano de Trabalho</b>, apresentado pelo <b>convenente</b>, no <b>SIAFI</b>.</li>'+
      '<li>Cabe ao <b>convenente executar e fiscalizar</b> os trabalhos necessários à consecução do objeto.</li>'+
      '<li>O convênio conterá, <b>expressa e obrigatoriamente</b>, cláusulas com a <b>obrigação de cada partícipe</b>, <b>inclusive o valor da contrapartida, de responsabilidade do convenente</b>.</li>'+
      '<li>Ao tomar conhecimento de <b>qualquer irregularidade</b>, o concedente ou mandatária <b>dará ciência aos órgãos de controle</b>; havendo <b>fundada suspeita de crime ou de improbidade administrativa</b>, cientificará os <b>Ministérios Públicos Federal e Estadual</b> e a <b>Advocacia-Geral da União</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">É vedada a celebração de convênios e contratos de repasse</span>'+
      '<ul><li>Cuja <b>vigência se encerre no último ou no 1º trimestre de mandato</b> dos Chefes do Poder Executivo dos entes federativos.</li>'+
      '<li>Com entidades privadas sem fins lucrativos que <b>não comprovem ter desenvolvido, durante os últimos 3 anos</b>, atividades referentes à matéria objeto do convênio.</li>'+
      '<li>Com entidades privadas sem fins lucrativos que tenham como dirigente <b>agente político de Poder ou do Ministério Público</b>.</li>'+
      '<li>Com entidades privadas sem fins lucrativos que tenham como dirigente <b>dirigente de órgão ou entidade da administração pública de qualquer esfera governamental</b>.</li>'+
      '<li>Com entidades privadas sem fins lucrativos que tenham como dirigente <b>cônjuge ou companheiro</b>, bem como <b>parente em linha reta, colateral ou por afinidade, até o 2º grau</b>.</li>'+
      '<li>Para a execução de atividades cujo objeto esteja relacionado ao <b>pagamento de custeio continuado do proponente</b>.</li></ul>'+
      '<p class="mn"><em>Os dois números que a banca troca: 3 anos de atividade e 2º grau de parentesco.</em></p></div>'+
      '<div class="box"><span class="bl">Prestação de contas</span>'+
      '<p>A análise da prestação de contas <b>pelo concedente</b> poderá resultar em:</p>'+
      '<div class="tree"><div class="leaf"><b>Aprovação</b>.</div>'+
      '<div class="leaf"><b>Aprovação com ressalvas</b> — quando evidenciada <b>impropriedade ou outra falta de natureza formal de que NÃO resulte dano ao Erário</b>.</div>'+
      '<div class="leaf"><b>Rejeição</b> — com a determinação da <b>imediata instauração de tomada de contas especial</b>.</div></div></div>'+
      '<div class="box trap"><span class="bl">PEGADINHA da licitação</span>'+
      '<p>A celebração de <b>convênio administrativo de cooperação</b> <b>PODE PRESCINDIR</b> (dispensar) da realização de <b>licitação prévia</b> (<b>art. 75, XI, Lei 14.133/21</b>).</p>'+
      '<p><b>PEGADINHA =></b> a banca vai dizer que <b>não pode</b>.</p></div>')
  ]
};

var EX = {
S1:{t:"sort", instr:"Concessão comum, PPP patrocinada ou PPP administrativa?",
  buckets:["Concessão comum","PPP patrocinada","PPP administrativa"],
  items:[["Remuneração apenas pelas tarifas pagas pelos usuários",0],
         ["Contrato sem qualquer contraprestação pecuniária do Poder Público",0],
         ["Contraprestação do Estado somada à tarifa do usuário",1],
         ["Ferrovia construída pelo parceiro com parcela de recursos públicos e cobrança de tarifas dos usuários",1],
         ["Remuneração integral do Estado ao parceiro privado",2],
         ["A Administração Pública é a usuária principal, direta ou indireta",2]],
  why:"Sem contraprestação pecuniária do Poder Público não há PPP, e sim concessão comum (Lei 8.987/95)."},

S2:{t:"mc", instr:"Qual é o valor mínimo do contrato de PPP, segundo o resumo?",
  options:["R$ 10 milhões","R$ 20 milhões","R$ 5 milhões","R$ 100 milhões"],
  answer:0,
  why:"Restrição quanto ao valor: a PPP não pode ser inferior a R$ 10 milhões."},

S3:{t:"gap", instr:"Complete a restrição de prazo da PPP",
  before:"A PPP deve ter periodicidade mínima de 5 anos e máxima de ",
  after:" anos, incluindo eventual prorrogação.",
  options:["35","30","20","70"], answer:0,
  why:"Os 35 anos são o teto e já computam eventual prorrogação — a banca troca por \"não computada a prorrogação\"."},

S4:{t:"multi", instr:"Marque os objetos que, isoladamente, NÃO admitem PPP",
  options:["O fornecimento de mão de obra, como o serviço de vigilância",
           "O fornecimento de equipamentos",
           "A execução de obra pública",
           "Construção de metrô mais a prestação de serviços de operação do metrô",
           "Instalação de postes mais a prestação de serviços de iluminação pública"],
  answers:[0,1,2],
  why:"A PPP tem que ter mais de um objeto — os dois últimos são exemplos válidos do resumo."},

S5:{t:"wordbank", instr:"Monte a regra que define a PPP",
  target:["Sempre","haverá","uma","contraprestação","pecuniária","do","Poder","Público","ao","parceiro","privado"],
  extra:["tarifa","apenas","usuário","facultativa"],
  why:"Se não houver contraprestação pecuniária do Poder Público, não é PPP, e sim concessão comum."},

S6:{t:"match", instr:"Correlacione cada instituto da PPP à sua descrição",
  pairs:[["Patrimônio de afetação","Reserva de patrimônio, de constituição facultada, vinculada exclusivamente à garantia para a qual foi constituída"],
         ["SPE","Sociedade constituída obrigatoriamente antes da celebração do contrato, para implantar e gerir o objeto da parceria"],
         ["Repartição de riscos","Cláusula que abrange caso fortuito, força maior, fato do príncipe e álea econômica extraordinária"],
         ["Remuneração variável","Pagamento que o contrato de PPP poderá prever ao parceiro privado"],
         ["Diálogo competitivo","Modalidade de licitação admitida para a PPP, ao lado da concorrência"]],
  why:"O patrimônio de afetação não se comunica com o restante do patrimônio do fundo garantidor de PPP."},

S7:{t:"mc", instr:"Sobre os lances em viva voz na licitação de PPP, está correto afirmar que:",
  options:["Serão sempre oferecidos na ordem inversa da classificação das propostas escritas",
           "Serão sempre oferecidos na ordem direta da classificação das propostas escritas",
           "O edital pode limitar a quantidade de lances a três por licitante",
           "Substituem a apresentação de propostas escritas"],
  answer:0,
  why:"É vedado ao edital limitar a quantidade de lances; ele só pode restringir a participação aos licitantes cuja proposta escrita seja no máximo 20% maior que a melhor."},

S8:{t:"sort", instr:"Na PPP, isso é obrigatório ou facultativo?",
  buckets:["Obrigatório","Facultativo"],
  items:[["Constituição da SPE antes da celebração do contrato",0],
         ["Contraprestação pecuniária do Poder Público ao parceiro privado",0],
         ["Cláusula de repartição de riscos entre as partes",0],
         ["Constituição de patrimônio de afetação",1],
         ["SPE sob a forma de companhia aberta, com valores mobiliários negociados no mercado",1],
         ["Previsão de pagamento de remuneração variável",1]],
  why:"O resumo grafa \"deverá (obrigatório)\" para a SPE e \"pode assumir (facultativo)\" para a companhia aberta."},

S9:{t:"mc", instr:"A Lei Geral de PPP aplica-se aos órgãos da Administração Pública de quais Poderes?",
  options:["Executivo e Legislativo, mas não ao Judiciário",
           "Executivo, Legislativo e Judiciário",
           "Somente ao Executivo",
           "Executivo e Judiciário, mas não ao Legislativo"],
  answer:0,
  why:"Observação 03 do resumo: a Lei Geral de PPP não alcança o Poder Judiciário."},

S10:{t:"sort", instr:"A característica é do consórcio público ou do convênio?",
  buckets:["Consórcio público","Convênio"],
  items:[["Pessoa jurídica formada exclusivamente por entes federados",0],
         ["É personificado",0],
         ["Depende de protocolo de intenções ratificado por lei",0],
         ["É despersonificado",1],
         ["Pode ser firmado com particulares sem fins lucrativos",1],
         ["Tem por finalidade a execução de ações de interesse recíproco",1]],
  why:"Quadro comparativo do resumo: consórcios são personificados e só admitem entes federados."},

S11:{t:"match", instr:"Correlacione cada figura do consórcio público",
  pairs:[["Associação pública","Consórcio de direito público, que integra a administração indireta dos entes consorciados"],
         ["Associação civil","Consórcio de direito privado, que não integra a administração indireta"],
         ["Contrato de rateio","Instrumento pelo qual os entes se comprometem a fornecer recursos financeiros ao consórcio"],
         ["Contrato de programa","Instrumento firmado com um dos consorciados, para que preste serviços por meio de seus próprios órgãos"],
         ["Protocolo de intenções","Documento de subscrição prévia, que deve ser ratificado por lei"]],
  why:"Direito público gera associação pública e entra na Administração Indireta; direito privado gera associação civil e não entra."},

S12:{t:"multi", instr:"Marque o que o consórcio público pode fazer, segundo o resumo",
  options:["Firmar convênios, contratos e acordos de qualquer natureza",
           "Receber auxílios, contribuições e subvenções",
           "Promover desapropriações e instituir servidões administrativas, se de direito público e com previsão no contrato",
           "Arrecadar tarifas",
           "Ser contratado mediante dispensa de licitação pela Administração dos entes consorciados",
           "Ser integrado por entidade privada sem fins lucrativos"],
  answers:[0,1,2,3,4],
  why:"O consórcio é formado exclusivamente por entes federados — U, E, DF e M."},

S13:{t:"multi", instr:"Marque as composições de consórcio público vedadas pelo resumo",
  options:["Consórcio constituído unicamente pela União e Municípios",
           "Consórcio celebrado entre um Estado e Município de outro Estado",
           "Consórcio entre Municípios de um mesmo Estado",
           "Consórcio entre a União, Estados, o Distrito Federal e Municípios"],
  answers:[0,1],
  why:"Observações 01 e 02 do resumo."},

S14:{t:"gap", instr:"Complete a observação 04 do resumo",
  before:"Os entes consorciados somente entregarão recursos ao consórcio público mediante ",
  after:".",
  options:["contrato de rateio","contrato de programa","protocolo de intenções","convênio de cooperação"],
  answer:0,
  why:"Rateio é dinheiro entrando no consórcio; programa é serviço prestado por um consorciado."},

S15:{t:"match", instr:"Correlacione cada figura do convênio ao seu papel",
  pairs:[["Concedente","Responsável pela transferência dos recursos financeiros destinados à execução do objeto"],
         ["Convenente","Quem recebe os recursos e a quem cabe executar e fiscalizar os trabalhos"],
         ["Plano de Trabalho","Deve ser previamente cadastrado no SIAFI, apresentado pelo convenente"],
         ["Projeto básico ou termo de referência","Deve ser apresentado antes da liberação da 1ª parcela dos recursos"],
         ["Contrapartida","Valor que o convênio deve prever expressamente, de responsabilidade do convenente"]],
  why:"Quem concede transfere; quem convém recebe, executa, fiscaliza e põe a contrapartida."},

S16:{t:"multi", instr:"Marque as vedações à celebração de convênios e contratos de repasse",
  options:["Vigência que se encerre no último ou no 1º trimestre de mandato dos Chefes do Poder Executivo",
           "Entidade privada sem fins lucrativos que não comprove 3 anos de atividades na matéria objeto",
           "Entidade privada sem fins lucrativos cujo dirigente seja agente político de Poder ou do Ministério Público",
           "Entidade privada sem fins lucrativos cujo dirigente seja cônjuge, companheiro ou parente até o 2º grau de dirigente de órgão público",
           "Objeto relacionado ao pagamento de custeio continuado do proponente",
           "Convênio firmado com outra entidade pública, incluindo consórcios públicos"],
  answers:[0,1,2,3,4],
  why:"A transferência para outra entidade pública, inclusive consórcios públicos, é exatamente uma das hipóteses previstas do convênio."},

S17:{t:"sort", instr:"A análise da prestação de contas pelo concedente resultou em quê?",
  buckets:["Aprovação","Aprovação com ressalvas","Rejeição"],
  items:[["Contas regulares, sem apontamento algum",0],
         ["Impropriedade ou outra falta de natureza formal de que não resulte dano ao Erário",1],
         ["Resultado que determina a imediata instauração de tomada de contas especial",2]],
  why:"A ressalva é para falta formal SEM dano ao Erário — havendo dano, a via é a rejeição."},

S18:{t:"mc", instr:"A celebração de convênio administrativo de cooperação, em relação à licitação prévia:",
  options:["Pode prescindir da realização de licitação prévia",
           "Não pode prescindir da realização de licitação prévia",
           "Exige licitação na modalidade concorrência",
           "Exige licitação apenas quando o convenente for entidade privada"],
  answer:0,
  why:"PEGADINHA do resumo: a banca vai dizer que não pode. Pode — art. 75, XI, da Lei 14.133/21."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Direito Administrativo 10","https://www.tecconcursos.com.br/s/Q23lZy","Q23lZy"],
  ["Caderno FCC — Direito Administrativo 10","https://www.tecconcursos.com.br/s/Q23laR","Q23laR"],
  ["Caderno FGV — Direito Administrativo 10","https://www.tecconcursos.com.br/s/Q23laq","Q23laq"],
  ["Caderno VUNESP — Direito Administrativo 10","https://www.tecconcursos.com.br/s/Q23lb1","Q23lb1"],
  ["Caderno AOCP — Direito Administrativo 10","https://www.tecconcursos.com.br/s/Q23laL","Q23laL"],
  ["Caderno IBFC — Direito Administrativo 10","https://www.tecconcursos.com.br/s/Q27bHF","Q27bHF"],
  ["Caderno FUNDATEC — Direito Administrativo 10","https://www.tecconcursos.com.br/s/Q27bHX","Q27bHX"]
];
var TECNOTA = "Três fronteiras respondem pela maioria dos erros deste assunto. A primeira é a remuneração na PPP: patrocinada é contraprestação do Estado MAIS tarifa do usuário, administrativa é remuneração integral do Estado, e é na ADMINISTRATIVA que a Administração é a usuária principal — o resumo marca a troca como PEGADINHA. Sem contraprestação pecuniária do Poder Público não há PPP, e sim concessão comum da Lei 8.987/95, em que o delegatário só recebe tarifas. A segunda fronteira são os números, e eles precisam sair decorados: valor não inferior a R$ 10 milhões, prazo de 5 a 35 anos incluindo eventual prorrogação, lances em viva voz restringíveis aos licitantes cuja proposta escrita seja no máximo 20% maior que a melhor, SPE obrigatória antes da celebração do contrato e patrimônio de afetação apenas facultado, com a Lei Geral de PPP alcançando Executivo e Legislativo, mas não o Judiciário. A terceira é a linha consórcio/convênio e os prazos dos convênios: consórcio é pessoa jurídica só de entes federados, personificado, com protocolo de intenções ratificado por lei, associação pública se de direito público (integra a Administração Indireta) e associação civil se de direito privado (não integra), recursos só por contrato de rateio; convênio é despersonificado, cabe com particular sem fins lucrativos, exige 3 anos de atividade na matéria e alcança parentes até o 2º grau, o projeto básico vem antes da 1ª parcela, o Plano de Trabalho vai ao SIAFI e a celebração PODE prescindir de licitação prévia.";

var UNITS = [
  {n:1, title:"Parceria Público-Privada (PPP)", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"PPP — modalidades, restrições e SPE", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · modalidades e remuneração", xp:25, data:["S1","S2","S3","T0","T1","T2","T3","T4","T5","T6","T7"]},
    {id:"K3", type:"drill",  title:"Praticar · restrições de valor, prazo e objeto", xp:25, data:["S4","S5","T8","T9","T10","T11","T12","T13","T14"]},
    {id:"K4", type:"drill",  title:"Praticar · garantias, licitação e SPE", xp:25, data:["S6","S7","S8","S9","T15","T16","T17","T18","T19","T20","T21","T22"]},
    {id:"K5", type:"flash",  title:"Flashcards · PPP", xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
  ]},
  {n:2, title:"Consórcios públicos", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Consórcios — personalidade, contratos e vedações", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · conceito e personalidade jurídica", xp:25, data:["S10","S11","T23","T24","T25","T26","T27","T28"]},
    {id:"K8", type:"drill",  title:"Praticar · competências e vedações", xp:25, data:["S12","S13","T29","T30","T33"]},
    {id:"K9", type:"drill",  title:"Praticar · rateio, programa e cláusula nula", xp:25, data:["S14","T31","T32","T34","T35"]},
    {id:"K10",type:"flash",  title:"Flashcards · consórcios públicos", xp:15, data:[21,22,23,24,25,26,27,28,29,30]}
  ]},
  {n:3, title:"Convênios", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Convênios — conceito, vedações e prestação de contas", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · conceito, concedente e convenente", xp:25, data:["S15","T36","T37","T38","T39","T40","T41"]},
    {id:"K13",type:"drill",  title:"Praticar · vedações à celebração", xp:25, data:["S16","T42","T43","T44","T45","T46"]},
    {id:"K14",type:"drill",  title:"Praticar · prestação de contas e a pegadinha da licitação", xp:25, data:["S17","S18","T47","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · convênios", xp:15, data:[31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo", xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos", xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado", xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 10 de Direito Administrativo (Radegondes) ---------- */
var COM={
0:"<p>Certo. É a frase de abertura do resumo sobre PPP: <b>é uma concessão especial em que sempre haverá uma contraprestação pecuniária do Poder Público ao parceiro privado</b>.</p><p>Guarde o <b>sempre</b>, porque ele é a chave de várias questões: <b>se o contrato não prevê contraprestação pecuniária do Poder Público, então não será PPP, e sim concessão comum</b>. O resumo completa que se denomina PPP o <b>contrato administrativo de concessão, na modalidade patrocinada ou administrativa</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Parceria Público-Privada (PPP)</i></p>",
1:"<p>Errado. O resumo separa as duas modalidades em uma linha cada: <b>concessão patrocinada: contraprestação do Estado + tarifa do usuário</b>; <b>concessão administrativa: remuneração integral do Estado</b>.</p><p>A assertiva descreveu a <b>administrativa</b> e colou o nome da <b>patrocinada</b>. Na patrocinada há <b>duas fontes</b> de receita para o parceiro privado.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — modalidades</i></p>",
2:"<p>Certo, pela letra do quadro de modalidades: <b>ADMINISTRATIVA (remuneração integral do Estado)</b>.</p><p>E é aqui, e só aqui, que <b>a Administração Pública é usuária principal, direta ou indireta</b> — o que faz sentido, já que é ela quem paga a conta inteira.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — modalidades</i></p>",
3:"<p>Errado — e esta é a <b>PEGADINHA</b> que o resumo transcreve e marca como <b>[ERRADO]</b> no tópico Conceitos Importantes.</p><p><b>CORRIGINDO:</b> <b>na modalidade administrativa, a administração pública é a usuária principal</b>. Na patrocinada, a receita do parceiro é <b>contraprestação do Estado + tarifa do usuário</b>, ou seja, quem usa e paga tarifa é o <b>usuário</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Conceitos Importantes — TOME NOTA 05 (PEGADINHA)</i></p>",
4:"<p>Certo. É a correção que o próprio resumo apresenta logo abaixo da pegadinha: <b>na modalidade administrativa, a administração pública é a usuária principal</b>. No quadro das modalidades ele grafa: <b>aqui a Administração Pública é usuária principal, direta ou indireta</b>.</p><p>Memorize em par com a outra: <b>administrAtiva</b> = <b>A</b>dministração usuária e pagadora integral; <b>patrocinada</b> = a tarifa do usuário patrocina parte da conta.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — concessão administrativa</i></p>",
5:"<p>Certo. O resumo lista, entre as características da PPP: <b>modalidade de licitação: Concorrência ou Diálogo Competitivo</b>.</p><p>São as duas, e só as duas. Qualquer assertiva que traga pregão, concurso ou leilão para a PPP está errada por esta linha.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — modalidade de licitação</i></p>",
6:"<p>Errado, e o erro é anterior às modalidades: sem contraprestação pecuniária <b>não existe PPP alguma</b>. O resumo é direto: <b>se o contrato não prevê contraprestação pecuniária do Poder Público, então não será PPP, e sim concessão comum</b>.</p><p>Nas <b>concessões comuns (Lei 8.987/95)</b>, <b>o particular delegatário é remunerado apenas pelas tarifas pagas pelos usuários</b>.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — contraprestação pecuniária</i></p>",
7:"<p>Certo, é a linha que o resumo usa para contrastar a concessão comum com a PPP: <b>nas concessões comuns (lei 8.987/95), o particular delegatário é remunerado apenas pelas tarifas pagas pelos usuários</b>.</p><p>No quadro comparativo do material, a <b>CONCESSÃO COMUM</b> aparece exatamente com esta descrição, ao lado da <b>ESPECIAL (PPP)</b>, dividida em patrocinada e administrativa.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — quadro concessão comum × especial</i></p>",
8:"<p>Certo pela letra do quadro <b>ATENÇÃO</b>: <b>de acordo com a legislação de regência, entre as cláusulas do contrato de PPP, deve constar a repartição de riscos entre as partes, inclusive os referentes a caso fortuito, força maior, fato do príncipe e álea econômica extraordinária</b>.</p><p>O resumo repete esse mesmo texto nos Conceitos Importantes (itens 04 e 08) — sinal de que é literalidade cobrada com frequência. Decore os quatro: <b>caso fortuito</b>, <b>força maior</b>, <b>fato do príncipe</b> e <b>álea econômica extraordinária</b>.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — ATENÇÃO (repartição de riscos)</i></p>",
9:"<p>Errado na modalidade. É o <b>EXEMPLO</b> do resumo, com este mesmo enredo: a União concede a exploração de uma ferrovia a ser construída pelo parceiro privado, com <b>parcela de recursos públicos</b>, e ele <b>poderá cobrar tarifas dos usuários</b>. Conclusão do material: <b>estamos diante de uma concessão na modalidade patrocinada</b>.</p><p>O teste é sempre o mesmo: apareceram as <b>duas</b> fontes — dinheiro do Estado e tarifa do usuário — então é <b>patrocinada</b>. Só dinheiro do Estado, é <b>administrativa</b>.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — EXEMPLO (ferrovia)</i></p>",
10:"<p>Errado no número. A restrição do resumo quanto ao valor é uma só: <b>a PPP não pode ser inferior a R$ 10 milhões</b>.</p><p>Guarde os três limites juntos, porque eles caem em bloco: <b>R$ 10 milhões</b> de piso, <b>5 anos</b> de prazo mínimo e <b>35 anos</b> de prazo máximo.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — RESTRIÇÕES (valor)</i></p>",
11:"<p>Certo, é a literalidade da restrição quanto ao tempo: <b>a PPP deve ter periodicidade mínima de 5 anos e máxima de 35 anos, incluindo eventual prorrogação</b>.</p><p>O detalhe que decide a questão é o final: os 35 anos são um teto que <b>já computa a prorrogação</b> — não se somam 35 mais a prorrogação.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — RESTRIÇÕES (tempo)</i></p>",
12:"<p>Errado justamente no fecho. O resumo diz <b>máxima de 35 anos, INCLUINDO eventual prorrogação</b>; a assertiva inverteu para \"não computada\".</p><p>Esta é a troca preferida da banca nesse item: mantém o número certo e mexe no que ele abrange. Leia sempre até o fim da frase.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — RESTRIÇÕES (tempo)</i></p>",
13:"<p>Certo, é a restrição quanto à matéria, com os três casos do resumo: <b>não é cabível PPP que tenha como objeto único o fornecimento de mão-de-obra (ex.: serviço de vigilância), o fornecimento de equipamentos ou a execução de obra pública</b>.</p><p>A regra positiva que dá sentido a tudo: <b>a PPP tem que ter mais de um objeto</b>. Exemplos do material: construção de instalações + serviços continuados; instalação de postes + iluminação pública; construção de metrô + operação do metrô.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — RESTRIÇÕES (matéria)</i></p>",
14:"<p>Errado. A vedação do resumo é <b>absoluta quanto ao objeto</b>, e não condicionada ao valor: a <b>execução de obra pública</b> não pode ser <b>objeto único</b> de PPP.</p><p>Valor e matéria são restrições <b>independentes</b>: mesmo acima de <b>R$ 10 milhões</b>, obra pública isolada continua fora, porque <b>a PPP tem que ter mais de um objeto</b>. Seria válida, por exemplo, a <b>construção de metrô + a prestação de serviços de operação do metrô</b>.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — RESTRIÇÕES (matéria)</i></p>",
15:"<p>Errado por uma palavra. O resumo diz: <b>é facultada a constituição de patrimônio de afetação na PPP</b>.</p><p>Compare com o que é <b>obrigatório</b> no mesmo material: a constituição da <b>SPE antes da celebração do contrato</b> e a <b>contraprestação pecuniária</b> do Poder Público. Facultativos são o <b>patrimônio de afetação</b>, a <b>SPE sob a forma de companhia aberta</b> e a <b>remuneração variável</b>.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — Patrimônio de Afetação</i></p>",
16:"<p>Certo, é a literalidade do <b>TOME NOTA 02</b>: <b>é facultada a constituição de patrimônio de afetação que não se comunicará com o restante do patrimônio do fundo garantidor de parcerias público-privadas, ficando vinculado exclusivamente à garantia em virtude da qual tiver sido constituído</b>.</p><p>A ideia é simples: o patrimônio de afetação é a <b>reserva de um patrimônio para garantir o pagamento ao parceiro privado</b>, e essa reserva fica isolada do resto.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — Patrimônio de Afetação</i></p>",
17:"<p>Errado — trocou a ordem. A Observação 01 do resumo é expressa: <b>os lances em viva voz serão sempre oferecidos na ordem INVERSA da classificação das propostas escritas</b>.</p><p>No mesmo bloco estão as duas formas de apresentação das propostas econômicas: <b>a) propostas escritas em envelopes lacrados</b>; ou <b>b) propostas escritas, seguidas de lances em viva voz</b>.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — OBSERVAÇÕES 01</i></p>",
18:"<p>Certo nas duas metades, e é a Observação 02 do resumo: <b>é vedado ao edital limitar a quantidade de lances. Contudo, o edital poderá restringir a apresentação de lances em viva voz aos licitantes cuja proposta escrita for no máximo 20% maior que o valor da melhor proposta</b>.</p><p>Repare na diferença: não se pode limitar <b>quantos</b> lances, mas se pode limitar <b>quem</b> dá lances — o filtro é o dos <b>20%</b>.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — OBSERVAÇÕES 02</i></p>",
19:"<p>Errado por excesso. A Observação 03 do resumo: <b>a Lei Geral de PPP aplica-se aos órgãos da Administração Pública dos Poderes Executivo e Legislativo, mas NÃO ao Poder Judiciário</b>.</p><p>É um item de pura memória, e a banca trabalha exatamente acrescentando o Judiciário à lista.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — OBSERVAÇÕES 03</i></p>",
20:"<p>Certo. O quadro do resumo sobre o que ocorre <b>antes da celebração do contrato de PPP</b> começa assim: <b>deverá ser (obrigatório) constituída uma SPE (Sociedade de Propósito Específico)</b>, e <b>a SPE será incumbida de implantar e gerir o objeto da parceria</b>.</p><p>Duas palavras do quadro decidem questões: <b>obrigatório</b> para a constituição da SPE e <b>facultativo</b> para ela assumir a forma de <b>companhia aberta</b>, com valores mobiliários admitidos a negociação no mercado.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — SPE</i></p>",
21:"<p>Errado. O mesmo quadro encerra com uma proibição, e não com uma faculdade: <b>fica vedado à Administração Pública ser titular da maioria do capital votante da SPE</b>.</p><p>Encaixe com o resto do quadro: a SPE é <b>obrigatória e prévia</b> ao contrato, é ela que <b>implanta e gere o objeto da parceria</b>, e <b>pode</b> (só isso é facultativo) ser <b>companhia aberta</b>.</p><p class='fb-fonte'>Resumo 10 · <i>PPP — SPE</i></p>",
22:"<p>Certo pela letra do <b>TOME NOTA 06</b>: <b>o contrato de PPP poderá prever o pagamento ao parceiro privado de remuneração variável</b>.</p><p>Aproveite para fixar os vizinhos do mesmo tópico: na PPP <b>o governo delega a operação ao setor privado, mas mantém as atividades de planejamento, monitoramento e regulação</b>, e <b>a análise da viabilidade econômica e financeira do projeto é o principal desafio para a realização de PPP patrocinada</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Conceitos Importantes — TOME NOTA 06</i></p>",
23:"<p>Certo, é a definição de abertura do tópico: o consórcio público <b>é a pessoa jurídica formada exclusivamente por entes federados (U, E, DF e M)</b>, e <b>a finalidade é a cooperação federativa (realização de objetivos de interesse comum)</b>.</p><p>Duas palavras carregam o conceito: <b>pessoa jurídica</b> (por isso é <b>personificado</b>, ao contrário do convênio) e <b>exclusivamente</b> (por isso não entra particular).</p><p class='fb-fonte'>Resumo 10 · <i>Consórcios Públicos — conceito</i></p>",
24:"<p>Errado. O resumo fecha a porta com um advérbio: o consórcio público é formado <b>EXCLUSIVAMENTE por entes federados (U, E, DF e M)</b>. Nenhum protocolo de intenções pode ampliar essa lista.</p><p>É exatamente a linha do quadro comparativo: <b>consórcios só podem ser integrados por entes federados</b>; quem <b>pode ser firmado com particulares sem fins lucrativos</b> é o <b>convênio</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Consórcios × Convênios — quadro comparativo</i></p>",
25:"<p>Certo, são os dois <b>REQUISITOS FORMAIS</b> que o resumo lista: <b>subscrição prévia do protocolo de intenções</b> e <b>ratificação do protocolo de intenções por lei</b>.</p><p>Guarde a sequência: primeiro os entes <b>subscrevem</b> o protocolo de intenções, depois cada um o <b>ratifica por lei</b> — e só então nasce a pessoa jurídica.</p><p class='fb-fonte'>Resumo 10 · <i>Consórcios Públicos — requisitos formais</i></p>",
26:"<p>Errado — a assertiva misturou as duas linhas do quadro de <b>PERSONALIDADE JURÍDICA</b>. No resumo: <b>de direito público: associação pública => integra a Adm. Indireta dos entes consorciados</b>; <b>de direito privado: associação civil => NÃO integra a Adm. Indireta dos entes consorciados</b>.</p><p>Associação <b>pública</b> é o consórcio de direito <b>público</b>; o de direito privado é <b>associação civil</b> e fica fora da Administração Indireta.</p><p class='fb-fonte'>Resumo 10 · <i>Consórcios Públicos — personalidade jurídica</i></p>",
27:"<p>Certo, é a primeira linha do quadro: <b>de direito público: associação pública => Integra a Adm. Indireta dos entes consorciados</b>.</p><p>E é essa mesma personalidade de direito público que habilita o consórcio a <b>promover desapropriações e instituir servidões administrativas</b> — desde que haja <b>previsão no contrato</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Consórcios Públicos — personalidade jurídica</i></p>",
28:"<p>Certo pela literalidade da Observação 03: <b>o consórcio público está sujeito à fiscalização do Tribunal de Contas competente para apreciar as contas do Chefe do Poder Executivo eleito representante do consórcio</b>.</p><p>Encaixa com o começo do tópico: <b>o representante legal é o Chefe do Poder Executivo eleito</b>. Escolhido o representante, definido o Tribunal de Contas.</p><p class='fb-fonte'>Resumo 10 · <i>Consórcios Públicos — OBSERVAÇÕES 03</i></p>",
29:"<p>Certo, e a assertiva reproduz as duas condições que o resumo impõe. Entre o que o consórcio pode fazer está <b>promover desapropriações e instituir servidões administrativas</b>, com a ressalva imediata: <b>somente consórcios de direito público e desde que haja previsão no contrato</b>.</p><p>São condições <b>cumulativas</b>. Faltando qualquer uma delas, a assertiva vira errada.</p><p class='fb-fonte'>Resumo 10 · <i>Consórcios Públicos — competências</i></p>",
30:"<p>Errado. O resumo inclui, entre as possibilidades do consórcio, <b>ser contratado mediante dispensa de licitação pela Administração dos entes consorciados (art. 75, XI, Lei 14.133/21)</b>.</p><p>Note o paralelo com os convênios, em que a celebração de <b>convênio administrativo de cooperação pode prescindir da realização de licitação prévia</b>, pelo <b>mesmo dispositivo</b>. É o padrão da cooperação: dispensa, não exigência.</p><p class='fb-fonte'>Resumo 10 · <i>Consórcios Públicos — competências (art. 75, XI, Lei 14.133/21)</i></p>",
31:"<p>Certo, é a definição literal: <b>CONTRATO DE RATEIO é o instrumento pelo qual os entes se comprometem a fornecer recursos financeiros ao consórcio</b>.</p><p>A Observação 04 reforça a exclusividade desse caminho: <b>os entes consorciados somente entregarão recursos ao consórcio público mediante contrato de rateio</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Consórcios Públicos — Contrato de Rateio</i></p>",
32:"<p>Errado — descreveu o <b>contrato de rateio</b> com o nome do outro. No resumo: <b>CONTRATO DE PROGRAMA é o instrumento firmado com um dos consorciados, para que este assuma a obrigação de prestar serviços por meio de seus próprios órgãos</b>.</p><p>Atalho: <b>rateio</b> = dinheiro <b>entrando</b> no consórcio; <b>programa</b> = <b>serviço saindo</b> por um consorciado.</p><p class='fb-fonte'>Resumo 10 · <i>Consórcios Públicos — Contrato de Programa</i></p>",
33:"<p>Errado. A Observação 01 do resumo é categórica: <b>não pode haver consórcio constituído unicamente pela União e Municípios</b>.</p><p>Ela vem em par com a Observação 02: <b>não pode haver consórcio celebrado entre um Estado e Município de outro Estado</b>. São as duas composições vedadas — memorize as duas juntas.</p><p class='fb-fonte'>Resumo 10 · <i>Consórcios Públicos — OBSERVAÇÕES 01</i></p>",
34:"<p>Errado no efeito. A Observação 05 do resumo: <b>no caso de gestão associada de serviços públicos, será NULA a cláusula do contrato de consórcio público que preveja que o Estado consorciado fará, em benefício do consórcio, uma contribuição financeira em numerário determinado, fora do rateio</b>.</p><p>A razão está na Observação 04: o único caminho para os entes entregarem recursos ao consórcio é o <b>contrato de rateio</b>. Fora dele, a cláusula é nula.</p><p class='fb-fonte'>Resumo 10 · <i>Consórcios Públicos — OBSERVAÇÕES 05</i></p>",
35:"<p>Certo pela letra da Observação 06: <b>o contrato de programa continuará vigente mesmo quando extinto o consórcio público ou o convênio de cooperação que autorizou a gestão associada de serviços públicos</b>.</p><p>A lógica é a continuidade do serviço: a obrigação de prestar assumida pelo consorciado não cai com a estrutura que a autorizou.</p><p class='fb-fonte'>Resumo 10 · <i>Consórcios Públicos — OBSERVAÇÕES 06</i></p>",
36:"<p>Certo, é o conceito de abertura do tópico, na íntegra: o convênio <b>é um sistema de cooperação entre entidades públicas de qualquer espécie, assim como entre uma entidade pública e entidades privadas sem fins lucrativos, para execução de ações de interesse recíproco, financiadas com recursos públicos</b>.</p><p>Três expressões sustentam o conceito e são onde a banca mexe: <b>qualquer espécie</b> de entidade pública, <b>sem fins lucrativos</b> do lado privado e <b>interesse recíproco</b> como finalidade.</p><p class='fb-fonte'>Resumo 10 · <i>Convênios — conceito</i></p>",
37:"<p>Certo nas duas metades, e é exatamente o <b>QUADRO COMPARATIVO</b> do resumo: <b>os consórcios são personificados</b> e <b>os convênios não são personificados</b>.</p><p>O material diz a mesma coisa duas vezes, de cada lado: nos consórcios, <b>diferem-se dos convênios pelo fato de que estes (convênios) são despersonificados</b>; nos convênios, <b>diferem-se dos consórcios pelo fato de que estes (consórcios) são personificados</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Convênios — quadro comparativo</i></p>",
38:"<p>Errado, e o resumo faz exatamente o contraste oposto: <b>diferentemente do que ocorre nos contratos administrativos, nos convênios há convergência de propósitos entre os signatários</b>.</p><p>Ele reforça a ideia em duas outras linhas: o convênio <b>é um acordo firmado para a realização de objetivos em comum de ambos os partícipes</b> e <b>é uma cooperação, dada a coincidência dos interesses dos envolvidos</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Convênios — cooperação e convergência</i></p>",
39:"<p>Certo, é a Observação 08 do resumo, palavra por palavra: <b>concedente => é o responsável pela transferência dos recursos financeiros destinados à execução do objeto do convênio</b>; <b>convenente => é quem recebe os recursos financeiros destinados à execução do objeto do convênio</b>.</p><p>Fixe os outros deveres do convenente, que o material espalha nas observações: <b>comprovar regularidade no momento da assinatura</b>, <b>cadastrar o Plano de Trabalho no SIAFI</b>, <b>executar e fiscalizar os trabalhos</b> e responder pela <b>contrapartida</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Convênios — OBSERVAÇÕES 08</i></p>",
40:"<p>Errado no momento. A Observação 01 do resumo: <b>nos convênios e contratos de repasse, o projeto básico ou o termo de referência deverá ser apresentado ANTES da liberação da 1º parcela dos recursos</b>.</p><p>É a inversão clássica da banca: ela mantém o documento certo e troca <b>antes</b> por <b>depois</b>. Primeiro o projeto, depois o dinheiro.</p><p class='fb-fonte'>Resumo 10 · <i>Convênios — OBSERVAÇÕES 01</i></p>",
41:"<p>Certo pela letra da Observação 09: <b>no momento da assinatura do convênio, o convenente deve comprovar a sua situação de regularidade perante os órgãos ou as entidades públicas</b>.</p><p>Note o sujeito: é o <b>convenente</b>, quem <b>recebe</b> os recursos, que comprova regularidade — e não o concedente, que os transfere.</p><p class='fb-fonte'>Resumo 10 · <i>Convênios — OBSERVAÇÕES 09</i></p>",
42:"<p>Certo, é a Observação 04 e a primeira linha do quadro de vedações: <b>é vedada a celebração de convênios e contratos de repasse cuja vigência se encerre no último ou no primeiro trimestre de mandato dos Chefes do Poder Executivo dos entes federativos</b>.</p><p>São os dois extremos do mandato: o <b>primeiro</b> e o <b>último</b> trimestre — não confunda com semestre nem com ano.</p><p class='fb-fonte'>Resumo 10 · <i>Convênios — OBSERVAÇÕES 04</i></p>",
43:"<p>Errado no prazo. A Observação 05 do resumo fala em <b>três anos</b>: <b>é vedada a celebração de convênios e contratos de repasse com entidades privadas sem fins lucrativos que não comprovem ter desenvolvido, durante os últimos TRÊS ANOS, atividades referentes à matéria objeto do convênio ou contrato de repasse</b>.</p><p>Os dois números que a banca troca neste bloco são justamente estes: <b>3 anos</b> de atividade prévia e <b>2º grau</b> de parentesco. Decore o par.</p><p class='fb-fonte'>Resumo 10 · <i>Convênios — OBSERVAÇÕES 05</i></p>",
44:"<p>Errado no grau. A Observação 06 do resumo encerra com <b>até o segundo grau</b>: a vedação alcança a entidade cujo dirigente seja <b>agente político de Poder ou do Ministério Público</b>, <b>dirigente de órgão ou entidade da administração pública de qualquer esfera governamental</b>, ou <b>respectivo cônjuge ou companheiro, bem como parente em linha reta, colateral ou por afinidade, até o SEGUNDO grau</b>.</p><p>Todo o resto da assertiva está certo — o erro é só o número. É o par do prazo de <b>3 anos</b> da observação anterior.</p><p class='fb-fonte'>Resumo 10 · <i>Convênios — OBSERVAÇÕES 06</i></p>",
45:"<p>Certo, é a Observação 07, na íntegra: <b>é vedada a celebração de convênios para a execução de atividades cujo objeto esteja relacionado ao pagamento de custeio continuado do proponente</b>.</p><p>Ela fecha o quadro das seis vedações do resumo, ao lado das do trimestre de mandato, dos 3 anos de atividade e dos dirigentes e parentes até o 2º grau.</p><p class='fb-fonte'>Resumo 10 · <i>Convênios — OBSERVAÇÕES 07</i></p>",
46:"<p>Errado por reduzir a lista. A Observação 03 do resumo: <b>havendo fundada suspeita de crime ou de improbidade administrativa, o concedente ou mandatária cientificará os Ministérios Públicos Federal e Estadual e a Advocacia-Geral da União</b>.</p><p>São <b>três</b> destinatários. Distinga da Observação 02, de intensidade menor: ao tomar conhecimento de <b>qualquer irregularidade</b>, o concedente ou mandatária <b>dará ciência aos órgãos de controle</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Convênios — OBSERVAÇÕES 02 e 03</i></p>",
47:"<p>Certo, são os três resultados possíveis da Observação 10: <b>aprovação</b>; <b>aprovação com ressalvas</b>; e <b>rejeição com a determinação da imediata instauração de tomada de contas especial</b>.</p><p>Quem analisa é o <b>concedente</b> — aquele que transferiu os recursos. E só a <b>rejeição</b> puxa a <b>tomada de contas especial</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Convênios — OBSERVAÇÕES 10</i></p>",
48:"<p>Errado por uma negativa suprimida. No resumo, a <b>aprovação com ressalvas</b> cabe <b>quando evidenciada impropriedade ou outra falta de natureza formal de que NÃO resulte dano ao Erário</b>.</p><p>A lógica do quadro: falta <b>formal sem dano</b> → ressalva; havendo dano, o caminho é a <b>rejeição</b>, com <b>imediata instauração de tomada de contas especial</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Convênios — OBSERVAÇÕES 10</i></p>",
49:"<p>Certo pela letra da Observação 11: <b>a execução de convênio subordinar-se-á ao prévio cadastramento do Plano de Trabalho, apresentado pelo convenente, no Sistema Integrado de Administração Financeira do Governo Federal (SIAFI)</b>.</p><p>Três elementos para não errar: o documento é o <b>Plano de Trabalho</b>, quem apresenta é o <b>convenente</b> e o cadastramento é <b>prévio</b> à execução.</p><p class='fb-fonte'>Resumo 10 · <i>Convênios — OBSERVAÇÕES 11</i></p>",
50:"<p>Certo, é a Observação 13 do resumo: <b>o convênio conterá, expressa e obrigatoriamente, cláusulas estabelecendo a obrigação de cada um dos partícipes, inclusive o valor da contrapartida, de responsabilidade do convenente</b>.</p><p>A contrapartida é do <b>convenente</b> — quem recebe os recursos. E a Observação 12 completa o pacote de deveres dele: <b>cabe ao convenente executar e fiscalizar os trabalhos necessários à consecução do objeto a ser pactuado no convênio</b>.</p><p class='fb-fonte'>Resumo 10 · <i>Convênios — OBSERVAÇÕES 12 e 13</i></p>",
51:"<p>Errado — e o resumo já avisa que a banca escreveria assim. A Observação 14 diz: <b>a celebração de convênio administrativo de cooperação pode prescindir (dispensar) da realização de licitação prévia (art. 75, XI, Lei 14.133/21)</b>, e logo abaixo vem a <b>PEGADINHA => a banca vai dizer que não pode</b>.</p><p>Encaixe com o consórcio: pelo <b>mesmo art. 75, XI, da Lei 14.133/21</b>, o consórcio público pode <b>ser contratado mediante dispensa de licitação</b> pela Administração dos entes consorciados.</p><p class='fb-fonte'>Resumo 10 · <i>Convênios — OBSERVAÇÕES 14 (PEGADINHA)</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"10", nome:"PPP, consórcios e convênios", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
