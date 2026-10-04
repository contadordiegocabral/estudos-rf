/* AFO — Módulo 09: Etapas da despesa orçamentária */
window.MOD = window.MOD || {};
window.MOD.m09 = (function(){
"use strict";

var CARDS = [
  ["Quais são as quatro etapas do PLANEJAMENTO da despesa?","<b>1)</b> Fixação da despesa na LOA · <b>2)</b> Descentralização de créditos orçamentários · <b>3)</b> Programação orçamentária e financeira · <b>4)</b> Processo de licitação e contratação."],
  ["Quais são os três estágios da EXECUÇÃO da despesa?","<b>Empenho → Liquidação → Pagamento.</b>"],
  ["Quando se conclui a fixação da despesa?","Com a <b>autorização dada pelo Poder Legislativo por meio da LOA</b>, ressalvadas as eventuais aberturas de créditos adicionais no decorrer da vigência do orçamento."],
  ["O que é a descentralização de créditos orçamentários?","Movimentação de parte do orçamento para que <b>outra unidade administrativa</b> execute a despesa, <b>mantidas</b> as classificações institucional, funcional, programática e econômica."],
  ["A descentralização altera a unidade orçamentária detentora do crédito?","<b>Não.</b> Não modifica a programação nem o valor das dotações, e <b>não altera a unidade orçamentária</b> (classificação institucional) detentora do crédito."],
  ["Provisão × destaque","<b>Provisão</b> = descentralização <b>interna</b> (unidades gestoras do mesmo órgão). <b>Destaque</b> = descentralização <b>externa</b> (órgãos ou entidades de estrutura diferente)."],
  ["O que é a programação orçamentária e financeira?","A <b>compatibilização do fluxo de pagamentos com o fluxo de recebimentos</b>, ajustando a despesa fixada às novas projeções de resultado e de arrecadação."],
  ["O que acontece se houver frustração da receita estimada?","Deverá ser estabelecida <b>limitação de empenho e movimentação financeira</b> — restrição imposta a <b>todos os Poderes</b>."],
  ["Qual o conceito legal de empenho?","<b>Art. 58 da Lei 4.320/64:</b> ato emanado de autoridade competente que cria para o Estado <b>obrigação de pagamento pendente ou não de implemento de condição</b>. Consiste na reserva de dotação para fim específico."],
  ["O empenho pode exceder o limite dos créditos concedidos?","<b>Não</b> — art. 59 da Lei 4.320/64."],
  ["Qual a regra do duodécimo para municípios?","É vedado aos municípios empenhar, no <b>último mês do mandato do prefeito</b>, mais do que o <b>duodécimo (1/12)</b> da despesa prevista no orçamento vigente. Art. 59, § 1º."],
  ["A vedação do duodécimo tem exceção?","Sim: <b>não se aplica nos casos comprovados de calamidade pública</b> (art. 59, § 3º). O § 2º também veda assumir compromissos para execução após o término do mandato."],
  ["É possível realizar despesa sem prévio empenho?","<b>Não.</b> Art. 60: é vedada a realização de despesa sem prévio empenho. Mas em casos especiais previstos em lei a <b>emissão da nota de empenho</b> pode ser dispensada."],
  ["O que deve constar da nota de empenho?","<b>Nome do credor</b>, a representação, a <b>importância da despesa</b> e a <b>dedução desta do saldo da dotação própria</b> (art. 61)."],
  ["Empenho ordinário — quando se usa?","Despesas de <b>valor fixo e previamente determinado</b>, cujo pagamento deva ocorrer <b>de uma só vez</b>. Ex.: compra de um bem à vista."],
  ["Empenho global — quando se usa?","Despesas <b>contratuais</b> ou outras de <b>valor determinado, sujeitas a parcelamento</b>. Ex.: aluguéis, bem financiado, contrato de construção."],
  ["Empenho estimativo — quando se usa?","Despesas cujo <b>montante não se pode determinar previamente</b>. Ex.: água, energia elétrica, combustíveis, telefone, passagens, diárias, gratificações, pessoal e encargos."],
  ["Quando o empenho é reforçado, anulado parcial ou totalmente?","<b>Reforçado</b> se o valor empenhado for insuficiente. <b>Anulado parcialmente</b> se exceder a despesa realizada. <b>Anulado totalmente</b> se o objeto do contrato não for cumprido ou se emitido incorretamente."],
  ["Há divergência doutrinária sobre o empenho?","Sim. Parte da doutrina sustenta que o empenho cria apenas <b>obrigação orçamentária</b> (reserva de dotação), não de pagamento. Mas <b>se a questão vier literal, o art. 58 prevalece</b>: cria obrigação de pagamento."],
  ["O que é a liquidação?","<b>Art. 63:</b> a verificação do <b>direito adquirido pelo credor</b> tendo por base os títulos e documentos comprobatórios do respectivo crédito."],
  ["O que a liquidação apura?","<b>I</b> a origem e o objeto do que se deve pagar; <b>II</b> a importância exata a pagar; <b>III</b> a quem se deve pagar, para extinguir a obrigação."],
  ["Quais os documentos-base da liquidação?","O <b>contrato, ajuste ou acordo</b>; a <b>nota de empenho</b>; e os <b>comprovantes da entrega de material ou da prestação efetiva do serviço</b> (art. 63, § 2º)."],
  ["O que é a fase “EM LIQUIDAÇÃO”?","Fase criada pelo <b>PCASP/MCASP</b>, <b>não prevista na Lei 4.320/64</b>, para registrar o patrimônio pelo <b>fato gerador</b>, separar os empenhos não liquidados que já têm fato gerador dos que não têm, e <b>evitar a dupla contagem dos passivos financeiros</b>."],
  ["O que é o pagamento?","A <b>entrega de numerário ao credor</b> por cheque nominativo, ordem de pagamento ou crédito em conta. Só pode ser efetuado <b>após a regular liquidação</b> (art. 62)."],
  ["O que é ordem de pagamento?","<b>Art. 64:</b> o despacho exarado por autoridade competente determinando que a despesa <b>liquidada</b> seja paga. Só pode ser exarada em documentos <b>processados pelos serviços de contabilidade</b>."],
  ["Por quem é efetuado o pagamento?","Por <b>tesouraria ou pagadoria</b> regularmente instituídos, por <b>estabelecimentos bancários credenciados</b> e, em casos <b>excepcionais</b>, por meio de <b>adiantamento</b> (art. 65)."],
  ["Qual a regra dos precatórios na Lei 4.320?","<b>Art. 67:</b> os pagamentos devidos pela Fazenda Pública em virtude de sentença judiciária far-se-ão na <b>ordem de apresentação dos precatórios</b>, sendo <b>proibida a designação de casos ou de pessoas</b> nas dotações e créditos abertos para esse fim."],
  ["O que é o regime de adiantamento?","<b>Art. 68:</b> entrega de numerário a servidor, <b>sempre precedida de empenho</b> na dotação própria, para realizar despesas que <b>não possam subordinar-se ao processo normal de aplicação</b>. Também chamado de <b>suprimento de fundos</b>."],
  ["A quem não se pode fazer adiantamento?","<b>Art. 69:</b> a servidor <b>em alcance</b> (que não prestou contas ou teve contas reprovadas) nem a <b>responsável por dois adiantamentos</b>."],
  ["O que diz o art. 66 da Lei 4.320?","As dotações das unidades orçamentárias poderão, <b>quando expressamente determinado na LOA</b>, ser movimentadas por <b>órgãos centrais</b> de administração geral. Permite-se a redistribuição de parcelas de dotações de <b>pessoal</b>."],
  ["O que diz o art. 70 da Lei 4.320?","A aquisição de material, o fornecimento e a adjudicação de obras e serviços serão regulados em lei, <b>respeitado o princípio da concorrência</b>."]
];

var QS = [
  ["Os estágios de execução da despesa orçamentária são empenho, liquidação e pagamento.","C","CESPE","A fixação pertence ao <b>planejamento</b>, não à execução."],
  ["A fixação da despesa integra o estágio de execução da despesa orçamentária.","E","FGV","Integra o <b>planejamento</b>, ao lado da descentralização, da programação e da licitação."],
  ["O processo de fixação da despesa orçamentária conclui-se com a autorização dada pelo Poder Legislativo por meio da lei orçamentária anual.","C","FCC","Ressalvadas as aberturas de créditos adicionais na vigência do orçamento."],
  ["A descentralização de créditos orçamentários altera a unidade orçamentária detentora do crédito.","E","CESPE","Não altera a classificação institucional nem modifica a programação ou o valor das dotações."],
  ["A descentralização de créditos mantém as classificações institucional, funcional, programática e econômica.","C","FCC","É justamente o que a distingue da transposição e da transferência."],
  ["A descentralização externa de créditos, entre unidades gestoras de órgãos diferentes, denomina-se provisão.","E","FGV","Externa é <b>destaque</b>. Provisão é a descentralização <b>interna</b>, dentro do mesmo órgão."],
  ["A programação orçamentária e financeira consiste na compatibilização do fluxo dos pagamentos com o fluxo dos recebimentos.","C","VUNESP","Visa ajustar a despesa fixada às novas projeções de resultado e de arrecadação."],
  ["Havendo frustração da receita estimada no orçamento, deverá ser estabelecida limitação de empenho e movimentação financeira.","C","CESPE","Restrição de despesa imposta a <b>todos os Poderes</b>."],
  ["Segundo a Lei nº 4.320/1964, o empenho é o ato emanado de autoridade competente que cria para o Estado obrigação de pagamento pendente ou não de implemento de condição.","C","FCC","Literalidade do art. 58 — a redação mais cobrada do módulo."],
  ["O empenho da despesa poderá exceder o limite dos créditos concedidos quando houver autorização do ordenador de despesas.","E","CESPE","Art. 59: <b>não poderá</b> exceder, sem exceção."],
  ["É vedado aos municípios empenhar, no último mês do mandato do prefeito, mais do que o duodécimo da despesa prevista no orçamento vigente.","C","FGV","Art. 59, § 1º. Duodécimo = 1/12."],
  ["A vedação de empenho no último mês do mandato do prefeito aplica-se inclusive nos casos comprovados de calamidade pública.","E","CESPE","Art. 59, § 3º: <b>não se aplica</b> nos casos comprovados de calamidade pública."],
  ["É vedada a realização de despesa sem prévio empenho.","C","FCC","Art. 60, caput."],
  ["Em nenhuma hipótese será dispensada a emissão da nota de empenho.","E","VUNESP","Art. 60, § 1º: em casos especiais previstos na legislação específica <b>será dispensada</b> a emissão da nota de empenho."],
  ["Da nota de empenho devem constar o nome do credor, a representação, a importância da despesa e a dedução desta do saldo da dotação própria.","C","FCC","Art. 61."],
  ["O empenho ordinário é utilizado para despesas contratuais sujeitas a parcelamento.","E","FGV","Essa é a hipótese do empenho <b>global</b>. O ordinário é para valor fixo pago de uma só vez."],
  ["O empenho por estimativa destina-se às despesas cujo montante não se possa determinar previamente.","C","CESPE","Art. 60, § 2º. Ex.: energia elétrica, água, telefone, diárias."],
  ["A despesa com pessoal e encargos sociais deve ser empenhada na modalidade global, por ser contratual.","E","CESPE","É <b>estimativa</b>: os valores variam a cada mês por progressões, gratificações, nomeações e exonerações."],
  ["A contratação de serviço de fornecimento de energia elétrica enseja empenho estimativo.","C","FCC","Montante não determinável previamente."],
  ["Caso o valor do empenho exceda o montante da despesa realizada, o empenho deverá ser reforçado.","E","VUNESP","Se <b>exceder</b>, será anulado parcialmente. O reforço ocorre quando o valor empenhado é <b>insuficiente</b>."],
  ["O empenho será anulado totalmente quando o objeto do contrato não tiver sido cumprido ou quando emitido incorretamente.","C","FGV","São as duas hipóteses de anulação total."],
  ["A liquidação da despesa consiste na verificação do direito adquirido pelo credor, tendo por base os títulos e documentos comprobatórios do respectivo crédito.","C","CESPE","Art. 63, caput."],
  ["A liquidação tem por fim apurar a origem e o objeto do que se deve pagar, a importância exata a pagar e a quem se deve pagar.","C","FCC","Art. 63, § 1º, incisos I a III."],
  ["A nota de empenho é um dos documentos que servem de base à liquidação da despesa.","C","FGV","Art. 63, § 2º, II — ao lado do contrato e dos comprovantes de entrega."],
  ["A fase “em liquidação” está expressamente prevista na Lei nº 4.320/1964.","E","CESPE","Foi criada pelo <b>PCASP/MCASP</b>, e não pela Lei nº 4.320/1964."],
  ["A criação da fase “em liquidação” tem por objetivo evitar a dupla contagem dos passivos financeiros.","C","CESPE","Além de permitir o registro pelo fato gerador e separar os empenhos não liquidados com e sem fato gerador."],
  ["O pagamento da despesa poderá ser efetuado antes da liquidação, desde que haja disponibilidade financeira.","E","FCC","Art. 62: só será efetuado quando <b>ordenado após sua regular liquidação</b>."],
  ["Ordem de pagamento é o despacho exarado por autoridade competente determinando que a despesa liquidada seja paga.","C","FGV","Art. 64. Só pode ser exarada em documentos processados pelos serviços de contabilidade."],
  ["O pagamento da despesa poderá, em casos excepcionais, ser efetuado por meio de adiantamento.","C","VUNESP","Art. 65, parte final."],
  ["Os pagamentos devidos pela Fazenda Pública em virtude de sentença judiciária far-se-ão na ordem de apresentação dos precatórios.","C","CESPE","Art. 67, com proibição de designação de casos ou pessoas nas dotações."],
  ["O regime de adiantamento consiste na entrega de numerário a servidor, dispensado o empenho prévio.","E","CESPE","Art. 68: é <b>sempre precedida de empenho</b> na dotação própria."],
  ["Não se fará adiantamento a servidor em alcance nem a responsável por dois adiantamentos.","C","FCC","Art. 69. O regime de adiantamento também é conhecido como suprimento de fundos."],
  ["As dotações atribuídas às unidades orçamentárias poderão ser movimentadas por órgãos centrais de administração geral independentemente de previsão na lei orçamentária.","E","FGV","Art. 66: somente <b>quando expressamente determinado na Lei de Orçamento</b>."],
  ["A aquisição de material, o fornecimento e a adjudicação de obras e serviços serão regulados em lei, respeitado o princípio da concorrência.","C","VUNESP","Art. 70."],
  ["A limitação de empenho e movimentação financeira é restrição imposta apenas ao Poder Executivo.","E","CESPE","É imposta a <b>todos os Poderes</b>."],
  ["O empenho consiste na reserva de dotação orçamentária para um fim específico.","C","FCC","É a leitura administrativa do art. 58."]
];

var FEY = {
  e1:{ask:"Explique as etapas da despesa orçamentária, separando planejamento e execução.",
    hint:"São quatro no planejamento e três na execução. Diga também o que encerra a fixação.",
    ref:"A despesa orçamentária percorre duas grandes etapas. O planejamento compreende a fixação da despesa na lei orçamentária anual, a descentralização de créditos orçamentários, a programação orçamentária e financeira e o processo de licitação e contratação. A fixação refere-se aos limites de gasto incluídos nas leis orçamentárias com base nas receitas previstas, e conclui-se com a autorização dada pelo Poder Legislativo por meio da LOA, ressalvadas as aberturas de créditos adicionais na vigência do orçamento. A execução compreende três estágios sucessivos: o empenho, a liquidação e o pagamento."},
  e2:{ask:"Explique o empenho: conceito legal, vedações e as três modalidades.",
    hint:"Comece pelo art. 58. Depois as vedações do art. 59 e 60 e as três modalidades com exemplos próprios.",
    ref:"Empenho, nos termos do art. 58 da Lei nº 4.320/1964, é o ato emanado de autoridade competente que cria para o Estado obrigação de pagamento pendente ou não de implemento de condição, consistindo na reserva de dotação orçamentária para fim específico. Não poderá exceder o limite dos créditos concedidos (art. 59) e é vedada a realização de despesa sem prévio empenho (art. 60), embora em casos especiais previstos em lei seja dispensada a emissão da nota de empenho. É vedado aos municípios empenhar, no último mês do mandato do prefeito, mais do que o duodécimo da despesa prevista no orçamento vigente, salvo caso comprovado de calamidade pública. As modalidades são três: ordinário, para despesas de valor fixo e previamente determinado, pagas de uma só vez; global, para despesas contratuais ou outras de valor determinado sujeitas a parcelamento; e estimativo, para despesas cujo montante não se possa determinar previamente. O empenho é reforçado quando insuficiente, anulado parcialmente quando excede a despesa realizada e anulado totalmente quando o objeto não é cumprido ou quando emitido incorretamente."},
  e3:{ask:"Explique a liquidação e a fase “em liquidação”.",
    hint:"A liquidação está no art. 63. A fase “em liquidação” não está na lei — diga de onde veio e para que serve.",
    ref:"A liquidação, conforme o art. 63 da Lei nº 4.320/1964, consiste na verificação do direito adquirido pelo credor, tendo por base os títulos e documentos comprobatórios do respectivo crédito. Tem por fim apurar a origem e o objeto do que se deve pagar, a importância exata a pagar e a quem se deve pagar para extinguir a obrigação. A liquidação por fornecimentos feitos ou serviços prestados tem por base o contrato, ajuste ou acordo respectivo, a nota de empenho e os comprovantes da entrega do material ou da prestação efetiva do serviço. A fase “em liquidação”, por sua vez, não está prevista na Lei nº 4.320/1964: foi criada pelo Plano de Contas Aplicado ao Setor Público, para permitir o registro contábil no patrimônio segundo o fato gerador e não segundo o empenho, separar os empenhos não liquidados que possuem fato gerador daqueles que não possuem, e evitar a dupla contagem dos passivos financeiros."},
  e4:{ask:"Explique o pagamento e o regime de adiantamento.",
    hint:"Diga o que precede o pagamento, quem pode ordená-lo, por quem é efetuado, e as duas vedações do adiantamento.",
    ref:"O pagamento consiste na entrega de numerário ao credor por cheque nominativo, ordem de pagamento ou crédito em conta, e só pode ser efetuado quando ordenado após a regular liquidação da despesa, nos termos do art. 62 da Lei nº 4.320/1964. Ordem de pagamento é o despacho exarado por autoridade competente determinando que a despesa liquidada seja paga, e só pode ser exarada em documentos processados pelos serviços de contabilidade. O pagamento é efetuado por tesouraria ou pagadoria regularmente instituídos, por estabelecimentos bancários credenciados e, em casos excepcionais, por meio de adiantamento. O regime de adiantamento, também chamado de suprimento de fundos, consiste na entrega de numerário a servidor, sempre precedida de empenho na dotação própria, para a realização de despesas que não possam subordinar-se ao processo normal de aplicação. Não se fará adiantamento a servidor em alcance nem a responsável por dois adiantamentos."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  e1:[
    sl("O mapa das etapas",
      '<p>A despesa orçamentária percorre duas grandes etapas, cada uma com suas fases.</p>'+
      '<div class="box"><span class="bl">Planejamento</span>'+
      '<ul><li>Fixação da despesa na LOA</li><li>Descentralização de créditos orçamentários</li>'+
      '<li>Programação orçamentária e financeira</li><li>Processo de licitação e contratação</li></ul></div>'+
      '<div class="box tip"><span class="bl">Execução</span><p><b>Empenho → Liquidação → Pagamento</b></p></div>'+
      '<div class="box trap"><span class="bl">O erro mais cobrado</span><p>Colocar a <b>fixação</b> entre os estágios de execução. Fixação é planejamento; a execução tem apenas três estágios.</p></div>'),
    sl("Fixação da despesa",
      '<p>Refere-se aos <span class="key">limites de gasto incluídos nas leis orçamentárias com base nas receitas previstas</span>, a serem efetuados pelas entidades públicas. Insere-se no processo de planejamento e compreende a adoção de medidas em direção a uma situação idealizada, observadas as diretrizes e prioridades do governo.</p>'+
      '<div class="box tip"><span class="bl">Quando termina</span><p>O processo de fixação <b>conclui-se com a autorização dada pelo Poder Legislativo por meio da LOA</b>, ressalvadas as eventuais aberturas de créditos adicionais no decorrer da vigência do orçamento.</p></div>')
  ],
  e2:[
    sl("Descentralização de créditos orçamentários",
      '<p>Ocorre quando se efetua a <span class="key">movimentação de parte do orçamento para que outras unidades administrativas executem a despesa</span>, <b>mantidas</b> as classificações institucional, funcional, programática e econômica.</p>'+
      '<div class="box trap"><span class="bl">Não confunda com transposição e transferência</span>'+
      '<ul><li><b>Não modificam</b> a programação nem o valor das dotações orçamentárias.</li>'+
      '<li><b>Não alteram</b> a unidade orçamentária (classificação institucional) detentora do crédito.</li></ul></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Interna = Provisão</span><span class="cd">Entre unidades gestoras do <b>mesmo órgão</b>.</span></div>'+
      '<div class="chip"><span class="cn">Externa = Destaque</span><span class="cd">Entre unidades de <b>órgãos ou entidades de estrutura diferente</b>.</span></div></div>'),
    sl("Programação orçamentária e financeira",
      '<p>Consiste na <span class="key">compatibilização do fluxo dos pagamentos com o fluxo dos recebimentos</span>, visando ao ajuste da despesa fixada às novas projeções de resultado e de arrecadação.</p>'+
      '<div class="box trap"><span class="bl">Despenca em prova</span><p>Se houver <b>frustração da receita</b> estimada no orçamento, deverá ser estabelecida <b>limitação de empenho e movimentação financeira</b> — restrição imposta a <b>todos os Poderes</b>, e não apenas ao Executivo.</p></div>'+
      '<div class="box"><span class="bl">Licitação e contratação</span><p>Conjunto de procedimentos administrativos que objetivam adquirir materiais, contratar obras e serviços, alienar ou ceder bens e conceder serviços públicos nas melhores condições para o Estado.</p></div>')
  ],
  e3:[
    sl("Empenho — o conceito legal",
      '<div class="box"><span class="bl">Lei 4.320/64, art. 58</span><p>“O empenho de despesa é o <b>ato emanado de autoridade competente que cria para o Estado obrigação de pagamento pendente ou não de implemento de condição</b>.”</p></div>'+
      '<p>Na leitura administrativa, é a <span class="key">reserva de uma parcela do orçamento</span> para o cumprimento de um compromisso.</p>'+
      '<div class="box trap"><span class="bl">Divergência doutrinária</span><p>Parte da doutrina sustenta que o empenho cria apenas <b>obrigação orçamentária</b>, e não de pagamento. Mas se a questão vier <b>literal</b>, siga o art. 58: cria obrigação de pagamento. Há questões cobrando as duas correntes.</p></div>'),
    sl("As vedações do empenho",
      '<div class="box"><span class="bl">Art. 59</span><p>O empenho <b>não poderá exceder o limite dos créditos concedidos</b>.</p></div>'+
      '<div class="box"><span class="bl">Art. 59, § 1º — a regra do duodécimo</span><p>É vedado aos <b>municípios</b> empenhar, no <b>último mês do mandato do prefeito</b>, mais do que o <b>duodécimo (1/12)</b> da despesa prevista no orçamento vigente.</p></div>'+
      '<div class="box"><span class="bl">Art. 59, §§ 2º e 3º</span><p>Vedado também assumir compromissos financeiros para execução <b>depois do término do mandato</b>. Nenhuma das duas vedações se aplica em caso <b>comprovado de calamidade pública</b>.</p></div>'+
      '<div class="box"><span class="bl">Art. 60</span><p>É <b>vedada a realização de despesa sem prévio empenho</b>. Em casos especiais previstos em lei, dispensa-se a <b>emissão da nota de empenho</b> — o que não dispensa o empenho em si.</p></div>'),
    sl("As três modalidades de empenho",
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">O</span><span class="nm">Ordinário</span></div><div class="fn-b"><p>Valor <b>fixo e previamente determinado</b>, pagamento <b>de uma só vez</b>. Ex.: compra de um bem à vista.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">G</span><span class="nm">Global</span></div><div class="fn-b"><p>Despesas <b>contratuais</b> ou de valor determinado <b>sujeitas a parcelamento</b>. Ex.: aluguéis, bem financiado, contrato de construção.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">E</span><span class="nm">Estimativo</span></div><div class="fn-b"><p>Montante <b>não determinável previamente</b>. Ex.: água, energia, combustível, telefone, passagens, diárias, gratificações, <b>pessoal e encargos</b>.</p></div></div></div>'+
      '<div class="box trap"><span class="bl">Global × estimativa</span><p>O critério é saber ou não o valor de antemão. Contas variáveis — telefone, diárias, gratificações e pessoal — vão para <b>estimativa</b>, ainda que sejam recorrentes.</p></div>'),
    sl("Reforço e anulação",
      '<div class="box"><span class="bl">Reforço</span><p>Quando o valor empenhado for <b>insuficiente</b> para atender à despesa.</p></div>'+
      '<div class="box"><span class="bl">Anulação parcial</span><p>Quando o valor do empenho <b>exceder</b> o montante da despesa realizada.</p></div>'+
      '<div class="box"><span class="bl">Anulação total</span><p>Quando o <b>objeto do contrato não tiver sido cumprido</b> ou quando o empenho tiver sido <b>emitido incorretamente</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Exemplo</span><p>Órgão empenha R$ 500 de energia (média dos últimos três meses). Conta de R$ 700 → empenho <b>reforçado</b>. Conta de R$ 300 → empenho <b>anulado parcialmente</b>.</p></div>'),
    sl("Nota de empenho",
      '<div class="box"><span class="bl">Art. 61</span><p>Para cada empenho será extraído documento denominado <b>nota de empenho</b>, que indicará:</p>'+
      '<ul><li>o <b>nome do credor</b>;</li><li>a representação;</li><li>a <b>importância da despesa</b>;</li>'+
      '<li>a <b>dedução desta do saldo da dotação própria</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Detalhe que cai</span><p>A nota de empenho é também <b>um dos documentos que servem de base à liquidação</b> (art. 63, § 2º, II).</p></div>')
  ],
  e4:[
    sl("Liquidação",
      '<div class="box"><span class="bl">Art. 63, caput</span><p>A liquidação consiste na <b>verificação do direito adquirido pelo credor</b>, tendo por base os títulos e documentos comprobatórios do respectivo crédito.</p></div>'+
      '<div class="box"><span class="bl">O que a verificação apura (§ 1º)</span>'+
      '<ul><li>A <b>origem e o objeto</b> do que se deve pagar;</li><li>A <b>importância exata</b> a pagar;</li>'+
      '<li><b>A quem</b> se deve pagar, para extinguir a obrigação.</li></ul></div>'+
      '<div class="box"><span class="bl">Documentos-base (§ 2º)</span>'+
      '<ul><li>O contrato, ajuste ou acordo respectivo;</li><li>A nota de empenho;</li>'+
      '<li>Os comprovantes da entrega de material ou da prestação efetiva do serviço.</li></ul></div>'),
    sl("A fase “em liquidação”",
      '<div class="box trap"><span class="bl">Não está na Lei 4.320</span><p>O MCASP dispõe que o <b>PCASP criou uma nova fase</b> da execução da despesa, chamada <b>“em liquidação”</b>, <b>não prevista na Lei nº 4.320/1964</b>.</p></div>'+
      '<p>Suas três finalidades:</p>'+
      '<ul><li>Registrar contabilmente no patrimônio de acordo com o <b>fato gerador</b>, e não com o empenho;</li>'+
      '<li>Separar os <b>empenhos não liquidados que possuem fato gerador</b> dos que não possuem;</li>'+
      '<li><b>Evitar a dupla contagem dos passivos financeiros</b>.</li></ul>'+
      '<div class="box tip"><span class="bl">Exemplo</span><p>Material de escritório recebido em 28 de dezembro — o fato gerador ocorreu —, mas a Administração ainda não verificou o direito do credor. A despesa está empenhada e <b>em liquidação</b>.</p></div>')
  ],
  e5:[
    sl("Pagamento",
      '<p>Consiste na <span class="key">entrega de numerário ao credor</span> por cheque nominativo, ordem de pagamento ou crédito em conta, e só pode ser efetuado <b>após a regular liquidação</b> da despesa.</p>'+
      '<div class="box"><span class="bl">Art. 62</span><p>O pagamento só será efetuado quando <b>ordenado após sua regular liquidação</b>.</p></div>'+
      '<div class="box"><span class="bl">Art. 64 — ordem de pagamento</span><p>Despacho exarado por autoridade competente determinando que a despesa <b>liquidada</b> seja paga. Só pode ser exarada em documentos <b>processados pelos serviços de contabilidade</b>.</p></div>'+
      '<div class="box"><span class="bl">Art. 65 — por quem</span><p>Por <b>tesouraria ou pagadoria</b> regularmente instituídos, por <b>estabelecimentos bancários credenciados</b> e, em <b>casos excepcionais</b>, por meio de <b>adiantamento</b>.</p></div>'),
    sl("Precatórios e movimentação de dotações",
      '<div class="box"><span class="bl">Art. 67 — precatórios</span><p>Os pagamentos devidos pela Fazenda Pública em virtude de sentença judiciária far-se-ão na <b>ordem de apresentação dos precatórios</b> e à conta dos créditos respectivos, sendo <b>proibida a designação de casos ou de pessoas</b> nas dotações e nos créditos adicionais abertos para esse fim.</p></div>'+
      '<div class="box"><span class="bl">Art. 66 — movimentação por órgãos centrais</span><p>As dotações das unidades orçamentárias poderão, <b>quando expressamente determinado na Lei de Orçamento</b>, ser movimentadas por <b>órgãos centrais</b> de administração geral. Permite-se a redistribuição de parcelas de dotações de <b>pessoal</b> entre unidades.</p></div>'),
    sl("Regime de adiantamento",
      '<div class="box"><span class="bl">Art. 68</span><p>Aplicável aos casos expressamente definidos em lei. Consiste na <b>entrega de numerário a servidor</b>, <b>sempre precedida de empenho</b> na dotação própria, para realizar despesas que <b>não possam subordinar-se ao processo normal de aplicação</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Art. 69 — as duas vedações</span><p>Não se fará adiantamento a <b>servidor em alcance</b> (que não prestou contas do adiantamento anterior ou teve contas reprovadas) nem a <b>responsável por dois adiantamentos</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Outro nome</span><p>O regime de adiantamento também é conhecido como <b>suprimento de fundos</b> — tema do módulo 11.</p></div>'+
      '<div class="box"><span class="bl">Art. 70</span><p>A aquisição de material, o fornecimento e a adjudicação de obras e serviços serão regulados em lei, <b>respeitado o princípio da concorrência</b>.</p></div>')
  ]
};

var EX = {
e1:{t:"order", instr:"Ordene os três estágios da execução da despesa",
  items:["Empenho","Liquidação","Pagamento"],
  why:"A fixação não entra: ela pertence ao <b>planejamento</b>."},

e2:{t:"sort", instr:"Cada fase pertence a qual etapa?",
  buckets:["Planejamento","Execução"],
  items:[["Fixação da despesa na LOA",0],["Descentralização de créditos",0],
         ["Programação orçamentária e financeira",0],["Processo de licitação e contratação",0],
         ["Empenho",1],["Liquidação",1],["Pagamento",1]],
  why:"Quatro fases no planejamento, três estágios na execução."},

e3:{t:"gap", instr:"Complete a frase",
  before:"A fixação da despesa conclui-se com a autorização dada pelo ", after:" por meio da LOA.",
  options:["Poder Legislativo","Poder Executivo","Tribunal de Contas"], answer:0,
  why:"Quem autoriza é sempre o Legislativo, ressalvados os créditos adicionais na vigência do orçamento."},

e4:{t:"match", instr:"Correlacione a descentralização ao seu nome",
  pairs:[["Interna — mesmo órgão","Provisão"],["Externa — órgãos diferentes","Destaque"]]},

e5:{t:"multi", instr:"Marque o que é verdadeiro sobre a descentralização de créditos",
  options:["Mantém as classificações institucional, funcional, programática e econômica",
           "Não modifica a programação nem o valor das dotações",
           "Não altera a unidade orçamentária detentora do crédito",
           "Permite que outra unidade administrativa execute a despesa",
           "Transfere a titularidade do crédito para a unidade beneficiada",
           "Equivale à transposição de dotações"],
  answers:[0,1,2,3],
  why:"A descentralização move a <b>execução</b>, não a titularidade do crédito."},

e6:{t:"gap", instr:"Complete a frase",
  before:"Havendo frustração da receita estimada, deverá ser estabelecida ", after:", restrição imposta a todos os Poderes.",
  options:["limitação de empenho e movimentação financeira","anulação total dos empenhos","suspensão da LOA"],
  answer:0,
  why:"Mecanismo de contenção previsto para o ajuste entre despesa fixada e arrecadação efetiva."},

e7:{t:"wordbank", instr:"Monte o conceito legal de empenho (art. 58)",
  target:["ato","que","cria","para","o","Estado","obrigação","de","pagamento"],
  extra:["extingue","orçamentária","receita"],
  why:"Literalidade do art. 58 da Lei nº 4.320/1964 — a redação mais cobrada do módulo."},

e8:{t:"mc", instr:"O empenho da despesa não poderá exceder:",
  options:["o limite dos créditos concedidos","o valor da receita arrecadada",
           "o duodécimo da despesa prevista","o saldo da conta única"], answer:0,
  why:"Art. 59, caput."},

e9:{t:"gap", instr:"Complete a frase",
  before:"É vedado aos municípios empenhar, no último mês do mandato do prefeito, mais do que o ",
  after:" da despesa prevista no orçamento vigente.",
  options:["duodécimo","dobro","terço"], answer:0,
  why:"Duodécimo = 1/12. Art. 59, § 1º."},

e10:{t:"mc", instr:"A vedação do duodécimo e a de assumir compromissos após o mandato não se aplicam:",
  options:["nos casos comprovados de calamidade pública","em ano eleitoral",
           "quando houver superávit financeiro","mediante autorização do Tribunal de Contas"],
  answer:0,
  why:"Art. 59, § 3º — única exceção prevista."},

e11:{t:"multi", instr:"Marque o que a Lei nº 4.320/1964 determina sobre o empenho",
  options:["É vedada a realização de despesa sem prévio empenho",
           "Em casos especiais previstos em lei, dispensa-se a emissão da nota de empenho",
           "Será feito por estimativa o empenho cuja despesa não se possa determinar",
           "É permitido o empenho global de despesas contratuais sujeitas a parcelamento",
           "O empenho pode exceder o crédito mediante autorização do ordenador",
           "A nota de empenho dispensa a indicação do nome do credor"],
  answers:[0,1,2,3],
  why:"Art. 60 e seus parágrafos. As duas últimas contrariam os arts. 59 e 61."},

e12:{t:"sort", instr:"Qual a modalidade de empenho de cada despesa?",
  buckets:["Ordinário","Global","Estimativo"],
  items:[["Compra de um bem à vista",0],["Contrato de aluguel mensal",1],
         ["Conta de energia elétrica",2],["Aquisição de veículo pago em parcelas fixas",1],
         ["Despesas com pessoal e encargos",2],["Contrato de construção de prédio",1],
         ["Passagens e diárias",2]],
  why:"O critério é saber ou não o valor de antemão. Contas variáveis vão sempre para <b>estimativa</b>."},

e13:{t:"match", instr:"Correlacione a situação ao efeito sobre o empenho",
  pairs:[["Valor empenhado insuficiente","Reforço do empenho"],
         ["Empenho excede a despesa realizada","Anulação parcial"],
         ["Objeto do contrato não cumprido","Anulação total"],
         ["Empenho emitido incorretamente","Anulação total"]]},

e14:{t:"multi", instr:"Marque o que deve constar da nota de empenho (art. 61)",
  options:["Nome do credor","A representação","A importância da despesa",
           "A dedução da despesa do saldo da dotação própria",
           "O parecer do controle interno","A data prevista da liquidação"],
  answers:[0,1,2,3],
  why:"São exatamente os quatro elementos do art. 61."},

e15:{t:"gap", instr:"Complete a frase",
  before:"A liquidação consiste na verificação do ", after:" pelo credor.",
  options:["direito adquirido","dever assumido","crédito empenhado"], answer:0,
  why:"Art. 63, caput — “verificação do direito adquirido pelo credor”."},

e16:{t:"multi", instr:"Marque o que a liquidação tem por fim apurar (art. 63, § 1º)",
  options:["A origem e o objeto do que se deve pagar","A importância exata a pagar",
           "A quem se deve pagar, para extinguir a obrigação",
           "A modalidade de licitação adotada","A classificação funcional da despesa"],
  answers:[0,1,2],
  why:"São três incisos, nada além."},

e17:{t:"multi", instr:"Marque os documentos que servem de base à liquidação (art. 63, § 2º)",
  options:["O contrato, ajuste ou acordo respectivo","A nota de empenho",
           "Os comprovantes da entrega de material ou da prestação do serviço",
           "A ordem de pagamento","O edital de licitação"],
  answers:[0,1,2],
  why:"A ordem de pagamento vem <b>depois</b> da liquidação, não antes."},

e18:{t:"multi", instr:"Marque as finalidades da fase “em liquidação”",
  options:["Registrar no patrimônio de acordo com o fato gerador, e não com o empenho",
           "Separar os empenhos não liquidados com fato gerador dos sem fato gerador",
           "Evitar a dupla contagem dos passivos financeiros",
           "Substituir a liquidação prevista na Lei nº 4.320/1964",
           "Antecipar o pagamento ao credor"],
  answers:[0,1,2],
  why:"A fase foi criada pelo <b>PCASP</b> e não substitui nem revoga a liquidação legal."},

e19:{t:"mc", instr:"A fase “em liquidação” foi criada por:",
  options:["PCASP / MCASP","Lei nº 4.320/1964","Lei de Responsabilidade Fiscal","Constituição Federal"],
  answer:0,
  why:"Não está prevista na Lei nº 4.320/1964 — esse é o ponto que a banca cobra."},

e20:{t:"order", instr:"Ordene o caminho de um pagamento regular",
  items:["Empenho e emissão da nota de empenho","Entrega do material pelo fornecedor",
         "Liquidação: verificação do direito do credor","Ordem de pagamento pela autoridade competente",
         "Entrega do numerário ao credor"],
  why:"O pagamento só se efetua quando <b>ordenado após a regular liquidação</b> (art. 62)."},

e21:{t:"gap", instr:"Complete a frase",
  before:"O pagamento da despesa só será efetuado quando ordenado após sua ", after:".",
  options:["regular liquidação","emissão de empenho","inscrição em restos a pagar"], answer:0,
  why:"Art. 62 — a sequência empenho, liquidação, pagamento é inviolável."},

e22:{t:"mc", instr:"Ordem de pagamento é:",
  options:["o despacho de autoridade competente determinando que a despesa liquidada seja paga",
           "o documento que reserva a dotação orçamentária",
           "a verificação do direito adquirido pelo credor",
           "a entrega do numerário ao credor"], answer:0,
  why:"Art. 64. As demais alternativas descrevem empenho, liquidação e pagamento."},

e23:{t:"wordbank", instr:"Monte a regra dos precatórios (art. 67)",
  target:["na","ordem","de","apresentação","dos","precatórios"],
  extra:["valor","urgência","antiguidade"],
  why:"É proibida a designação de casos ou de pessoas nas dotações abertas para esse fim."},

e24:{t:"multi", instr:"Marque o que é verdadeiro sobre o regime de adiantamento",
  options:["É sempre precedido de empenho na dotação própria",
           "Aplica-se a despesas que não possam subordinar-se ao processo normal de aplicação",
           "Também é conhecido como suprimento de fundos",
           "Não se fará a servidor em alcance",
           "Dispensa a prestação de contas",
           "Pode ser concedido a responsável por dois adiantamentos"],
  answers:[0,1,2,3],
  why:"Arts. 68 e 69. As duas últimas são exatamente o que a lei veda."},

e25:{t:"match", instr:"Correlacione o artigo da Lei 4.320 ao seu conteúdo",
  pairs:[["Art. 58","Conceito de empenho"],["Art. 60","Vedada despesa sem prévio empenho"],
         ["Art. 61","Nota de empenho"],["Art. 63","Liquidação"],
         ["Art. 64","Ordem de pagamento"],["Art. 68","Regime de adiantamento"]]},

e26:{t:"gap", instr:"Complete a frase",
  before:"As dotações das unidades orçamentárias poderão ser movimentadas por órgãos centrais ",
  after:" na Lei de Orçamento.", options:["quando expressamente determinado","sempre que conveniente","em qualquer hipótese"],
  answer:0,
  why:"Art. 66 — depende de previsão expressa na LOA."},

e27:{t:"sort", instr:"Cada situação impede ou permite o adiantamento?",
  buckets:["Permite","Não permite"],
  items:[["Servidor com contas do adiantamento anterior aprovadas",0],
         ["Servidor em alcance",1],["Responsável por dois adiantamentos",1],
         ["Despesa que não se subordina ao processo normal, com empenho prévio",0]],
  why:"Art. 69 — as duas vedações são “em alcance” e “dois adiantamentos”."},

e28:{t:"mc", instr:"Empenho utilizado para despesas contratuais de valor determinado sujeitas a parcelamento:",
  options:["Global","Ordinário","Estimativo","Por adiantamento"], answer:0,
  why:"Art. 60, § 3º. Ordinário é valor fixo pago de uma vez; estimativo é montante indeterminável."}
};

for(var i=0;i<QS.length;i++) EX["s"+i]={t:"ce", qi:i};

var KIT = {
  e1:{tema:"Etapas da despesa orçamentária",
    bases:["Lei nº 4.320/1964, arts. 58 a 70 — execução da despesa",
           "LC nº 101/2000, art. 9º — limitação de empenho e movimentação financeira",
           "CF/1988, art. 167, II — vedação de despesa que exceda os créditos",
           "MCASP — Parte I, execução da despesa orçamentária"],
    ouro:["planejamento e execução","fixação da despesa","descentralização de créditos",
          "provisão","destaque","programação orçamentária e financeira",
          "limitação de empenho e movimentação financeira","empenho, liquidação e pagamento"],
    abertura:"A despesa orçamentária percorre duas etapas sucessivas: o planejamento, que compreende a fixação na lei orçamentária anual, a descentralização de créditos, a programação orçamentária e financeira e o processo de licitação e contratação; e a execução, que se desdobra nos estágios de empenho, liquidação e pagamento.",
    evite:"Não inclua a fixação entre os estágios de execução. É o erro que mais elimina candidato nesse tema."},
  e2:{tema:"Empenho",
    bases:["Lei nº 4.320/1964, art. 58 — conceito de empenho",
           "Lei nº 4.320/1964, art. 59 e §§ — limites e duodécimo",
           "Lei nº 4.320/1964, art. 60 e §§ — vedação e modalidades",
           "Lei nº 4.320/1964, art. 61 — nota de empenho"],
    ouro:["ato emanado de autoridade competente","obrigação de pagamento pendente ou não de implemento de condição",
          "reserva de dotação orçamentária","limite dos créditos concedidos","duodécimo",
          "calamidade pública","prévio empenho","ordinário, global e estimativo",
          "reforço","anulação parcial","anulação total"],
    abertura:"Nos termos do art. 58 da Lei nº 4.320/1964, o empenho é o ato emanado de autoridade competente que cria para o Estado obrigação de pagamento pendente ou não de implemento de condição, consistindo, sob o prisma administrativo, na reserva de dotação orçamentária para fim específico.",
    evite:"Se a questão pedir a literalidade, não invoque a corrente que nega a obrigação de pagamento — mencione-a apenas como divergência doutrinária, depois de citar o artigo."},
  e3:{tema:"Liquidação e a fase “em liquidação”",
    bases:["Lei nº 4.320/1964, art. 63 e §§ — liquidação",
           "MCASP — fase “em liquidação” criada pelo PCASP",
           "Lei nº 4.320/1964, art. 62 — pagamento após regular liquidação"],
    ouro:["verificação do direito adquirido pelo credor","títulos e documentos comprobatórios",
          "origem e objeto","importância exata","a quem se deve pagar",
          "fato gerador","dupla contagem dos passivos financeiros","não prevista na Lei nº 4.320/1964"],
    abertura:"A liquidação, nos termos do art. 63 da Lei nº 4.320/1964, consiste na verificação do direito adquirido pelo credor, tendo por base os títulos e documentos comprobatórios do respectivo crédito.",
    evite:"Não afirme que a fase “em liquidação” está prevista na Lei nº 4.320/1964. Ela é criação do PCASP, e essa é justamente a pegadinha."},
  e4:{tema:"Pagamento e regime de adiantamento",
    bases:["Lei nº 4.320/1964, arts. 62, 64 e 65 — pagamento e ordem de pagamento",
           "Lei nº 4.320/1964, art. 67 — precatórios",
           "Lei nº 4.320/1964, arts. 68 e 69 — regime de adiantamento",
           "CF/1988, art. 100 — precatórios"],
    ouro:["entrega de numerário ao credor","regular liquidação","despacho exarado por autoridade competente",
          "serviços de contabilidade","tesouraria ou pagadoria","ordem de apresentação dos precatórios",
          "servidor em alcance","suprimento de fundos","sempre precedida de empenho"],
    abertura:"O pagamento, último estágio da execução da despesa, consiste na entrega de numerário ao credor e só pode ser efetuado quando ordenado após a regular liquidação da despesa, na forma do art. 62 da Lei nº 4.320/1964.",
    evite:"Não descreva o adiantamento como entrega de numerário sem empenho. A lei exige que seja sempre precedido de empenho na dotação própria."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. Este tema é quase todo literal: cada artigo citado corretamente é ponto.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre a execução da despesa pública na Lei nº 4.320/1964, disserte necessariamente sobre:</p>'+
  '<ol><li>os três estágios da execução da despesa e o que caracteriza cada um;</li>'+
  '<li>as modalidades de empenho e as vedações legais a ele aplicáveis;</li>'+
  '<li>a fase “em liquidação” e sua relação com a Lei nº 4.320/1964.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>A execução da despesa orçamentária desdobra-se em três estágios sucessivos e inderrogáveis. O <b>empenho</b>, primeiro deles, é definido pelo art. 58 da Lei nº 4.320/1964 como o ato emanado de autoridade competente que cria para o Estado obrigação de pagamento pendente ou não de implemento de condição, consistindo, sob o prisma administrativo, na reserva de dotação orçamentária para fim específico. A <b>liquidação</b>, disciplinada pelo art. 63, consiste na verificação do direito adquirido pelo credor com base nos títulos e documentos comprobatórios do crédito, apurando-se a origem e o objeto do que se deve pagar, a importância exata a pagar e a quem se deve pagar para extinguir a obrigação. O <b>pagamento</b>, por fim, é a entrega de numerário ao credor, que só se efetua quando ordenado após a regular liquidação, nos termos do art. 62.</p>'+
  '<p>Quanto às <b>modalidades</b>, o empenho é ordinário quando a despesa tem valor fixo e previamente determinado, com pagamento de uma só vez; global, quando se trata de despesa contratual ou de outra de valor determinado sujeita a parcelamento, na forma do art. 60, § 3º; e estimativo, quando o montante não se possa determinar previamente, conforme o art. 60, § 2º, hipótese das despesas com energia elétrica, telefonia, diárias e pessoal e encargos. As <b>vedações</b> são três. É vedada a realização de despesa sem prévio empenho (art. 60), ainda que em casos especiais previstos em lei se dispense a emissão da nota de empenho — o que não dispensa o empenho em si. O empenho não poderá exceder o limite dos créditos concedidos (art. 59). E é vedado aos municípios empenhar, no último mês do mandato do prefeito, mais do que o duodécimo da despesa prevista no orçamento vigente, bem como assumir compromissos para execução após o término do mandato, ressalvados os casos comprovados de calamidade pública (art. 59, §§ 1º a 3º).</p>'+
  '<p>A fase <b>“em liquidação”</b>, por sua vez, <b>não está prevista na Lei nº 4.320/1964</b>: foi criada pelo Plano de Contas Aplicado ao Setor Público, conforme o Manual de Contabilidade Aplicada ao Setor Público, com três finalidades. Primeiro, permitir o registro contábil no patrimônio segundo o <b>fato gerador</b>, e não segundo o empenho, alinhando a contabilidade pública ao regime de competência patrimonial. Segundo, possibilitar a separação dos empenhos não liquidados que já possuem fato gerador daqueles que ainda não o possuem. Terceiro, evitar a dupla contagem dos passivos financeiros.</p>'+
  '<p>Conclui-se que a sequência legal empenho–liquidação–pagamento permanece intacta, tendo o PCASP apenas <b>intercalado um registro contábil</b> entre o empenho e a liquidação, sem criar novo estágio orçamentário.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> os três estágios na ordem e a citação dos arts. 58, 62 e 63. Afirmar que a fixação é planejamento vale ponto extra.</li>'+
  '<li><b>Item 2:</b> as três modalidades com o critério de cada uma e as três vedações, com o duodécimo e a exceção da calamidade pública.</li>'+
  '<li><b>Item 3:</b> dizer expressamente que <b>não</b> consta da Lei 4.320 e nomear as três finalidades.</li>'+
  '<li><b>Fecho:</b> a distinção entre registro contábil e estágio orçamentário fecha o raciocínio.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Responda item a item, com o artigo entre parênteses em vez de parágrafo explicativo.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>Em determinado tribunal, ocorreram os seguintes fatos no exercício:</p>'+
  '<ol><li>o ordenador emitiu empenho de R$ 600.000 para a construção de um anexo, com pagamento em seis parcelas;</li>'+
  '<li>emitiu empenho de R$ 40.000 para o consumo anual de energia elétrica, estimado pela média dos últimos meses; ao fim do exercício, o consumo somou R$ 47.000;</li>'+
  '<li>recebeu, em 29 de dezembro, mobiliário adquirido por contrato, sem que o setor competente houvesse verificado o direito do credor até 31 de dezembro;</li>'+
  '<li>a tesouraria efetuou o pagamento de uma diária a servidor antes da liquidação, alegando urgência da viagem.</li></ol>'+
  '<p><b>Pergunta-se:</b> classifique a modalidade dos empenhos, indique as providências cabíveis e avalie a regularidade dos fatos 3 e 4, com fundamento na Lei nº 4.320/1964.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1. Empenho da obra.</b> Modalidade <b>global</b>: despesa contratual de valor determinado sujeita a parcelamento (art. 60, § 3º). Nada a corrigir.</p>'+
  '<p><b>2. Empenho da energia elétrica.</b> Modalidade <b>estimativa</b>, pois o montante não se pode determinar previamente (art. 60, § 2º). Como o consumo efetivo (R$ 47.000) superou o valor empenhado (R$ 40.000), a providência cabível é o <b>reforço do empenho</b> em R$ 7.000 — e não a anulação, que só caberia se o empenho excedesse a despesa realizada. O reforço, contudo, está condicionado ao limite dos créditos concedidos (art. 59).</p>'+
  '<p><b>3. Mobiliário recebido sem liquidação.</b> O fato gerador ocorreu com a entrega em 29 de dezembro, mas a verificação do direito do credor não se completou. A despesa encontra-se, portanto, <b>empenhada e “em liquidação”</b> — fase criada pelo PCASP, não prevista na Lei nº 4.320/1964, justamente para separar os empenhos não liquidados que já possuem fato gerador daqueles que não possuem e evitar a dupla contagem dos passivos financeiros. Não há irregularidade: a situação é normal e o registro contábil deve seguir o fato gerador.</p>'+
  '<p><b>4. Pagamento antes da liquidação.</b> <b>Irregular.</b> O art. 62 da Lei nº 4.320/1964 determina que o pagamento só será efetuado quando ordenado após sua regular liquidação, e o art. 64 exige ordem de pagamento exarada por autoridade competente sobre despesa já liquidada. A urgência não afasta a exigência: a via legítima para despesas que não possam subordinar-se ao processo normal de aplicação é o <b>regime de adiantamento</b> do art. 68, que também exige <b>empenho prévio</b> na dotação própria e não se confunde com o pagamento antecipado sem liquidação.</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>Chamar o empenho da <b>1</b> de estimativo, porque é obra. O valor é determinado — é global.</li>'+
  '<li>Mandar <b>anular</b> o empenho da <b>2</b>. Faltou valor: reforça-se.</li>'+
  '<li>Tratar a <b>3</b> como irregularidade. É a hipótese exata da fase “em liquidação”.</li>'+
  '<li>Aceitar a <b>4</b> pela urgência. A saída legal é o adiantamento, que também exige empenho prévio.</li></ul></div>';

var TEC = [["CESPE","Q3cN1C"],["FCC","Q3cN1f"],["FGV","Q3cN2G"],["VUNESP","Q3cN3D"]];

var UNITS = [
  {n:1, title:"Planejamento da despesa", cvar:"u1", lessons:[
    {id:"j1", type:"teoria", title:"O mapa das etapas",               xp:10, data:"e1"},
    {id:"j2", type:"drill",  title:"Praticar · etapas",               xp:20, data:["e1","e2","e3","s0","s1","s2"]},
    {id:"j3", type:"teoria", title:"Descentralização e programação",  xp:10, data:"e2"},
    {id:"j4", type:"drill",  title:"Praticar · descentralização",     xp:20, data:["e4","e5","s3","s4","s5"]},
    {id:"j5", type:"drill",  title:"Praticar · programação",          xp:20, data:["e6","s6","s7"]},
    {id:"j6", type:"flash",  title:"Flashcards · planejamento",       xp:15, data:[0,1,2,3,4,5,6,7]},
    {id:"j7", type:"feynman",title:"Explique as etapas",              xp:30, data:"e1"}
  ]},
  {n:2, title:"Empenho", cvar:"u2", lessons:[
    {id:"j9", type:"teoria", title:"Conceito legal de empenho",       xp:10, data:"e3"},
    {id:"j10",type:"drill",  title:"Praticar · conceito",             xp:20, data:["e7","e8","s8","s9","s35"]},
    {id:"j11",type:"drill",  title:"Praticar · vedações",             xp:20, data:["e9","e10","e11","s10","s11","s12","s13"]},
    {id:"j12",type:"drill",  title:"Praticar · modalidades",          xp:25, data:["e12","e28","s15","s16","s17","s18"]},
    {id:"j13",type:"drill",  title:"Praticar · reforço e anulação",   xp:20, data:["e13","e14","s19","s20","s14"]},
    {id:"j14",type:"flash",  title:"Flashcards · empenho",            xp:15, data:[8,9,10,11,12,13,14,15,16,17,18]},
    {id:"j15",type:"feynman",title:"Explique o empenho",              xp:30, data:"e2"}
  ]},
  {n:3, title:"Liquidação e pagamento", cvar:"u3", lessons:[
    {id:"j17",type:"teoria", title:"Liquidação",                      xp:10, data:"e4"},
    {id:"j18",type:"drill",  title:"Praticar · liquidação",           xp:20, data:["e15","e16","e17","s21","s22","s23"]},
    {id:"j19",type:"drill",  title:"Praticar · em liquidação",        xp:25, data:["e18","e19","s24","s25"]},
    {id:"j20",type:"teoria", title:"Pagamento e adiantamento",        xp:10, data:"e5"},
    {id:"j21",type:"drill",  title:"Praticar · pagamento",            xp:20, data:["e20","e21","e22","s26","s27","s28"]},
    {id:"j22",type:"drill",  title:"Praticar · precatórios e dotações",xp:20, data:["e23","e26","s29","s32","s33"]},
    {id:"j23",type:"drill",  title:"Praticar · adiantamento",         xp:20, data:["e24","e27","s30","s31"]},
    {id:"j24",type:"drill",  title:"Praticar · artigos da 4.320",     xp:25, data:["e25","s34"]},
    {id:"j25",type:"flash",  title:"Flashcards · liquidação e pagamento", xp:15, data:[19,20,21,22,23,24,25,26,27,28,29,30]},
    {id:"j26",type:"feynman",title:"Explique a liquidação",           xp:30, data:"e3"},
    {id:"j27",type:"feynman",title:"Explique o pagamento",            xp:30, data:"e4"}
  ]},
  {n:4, title:"Aplicação e prova", cvar:"u4", lessons:[
    {id:"j29",type:"leitura",title:"Discursiva resolvida",            xp:25, data:"disc"},
    {id:"j30",type:"leitura",title:"Estudo de caso resolvido",        xp:25, data:"caso"},
    {id:"jrev",type:"review",title:"Revisão geral das unidades",      xp:60, data:null},
    {id:"j31",type:"missao", title:"Missão TEC Concursos",            xp:15, data:null},
    {id:"j32",type:"prova",  title:"Simulado cronometrado",           xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo — é o gabarito (letra D) da QUESTÃO-EXEMPLO do Resumo: os estágios de execução da despesa orçamentária são <b>empenho, liquidação e pagamento</b>.</p><p>Pelo MCASP, as etapas da despesa são duas: <b>planejamento</b> (fixação, descentralização de créditos, programação orçamentária e financeira, licitação e contratação) e <b>execução</b> (empenho, liquidação, pagamento). As alternativas-pegadinha colocavam \"fixação\" na execução.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Etapas da despesa orçamentária / QUESTÃO-EXEMPLO</i></p>",
1:"<p>Errado. A fixação da despesa <b>insere-se no processo de planejamento</b>, não na execução.</p><p>No esquema do Resumo, o planejamento reúne: 1) fixação da despesa na LOA; 2) descentralização de créditos; 3) programação orçamentária e financeira; 4) licitação e contratação. A execução é só empenho, liquidação e pagamento — e a QUESTÃO-EXEMPLO do material usa justamente a fixação como distrator.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Fixação da despesa</i></p>",
2:"<p>Certo — é a letra do Resumo: o processo da fixação da despesa orçamentária é <b>concluído com a autorização dada pelo Poder Legislativo por meio da lei orçamentária anual</b>, ressalvadas as eventuais aberturas de créditos adicionais no decorrer da vigência do orçamento.</p><p>A fixação se refere aos limites de gasto incluídos na LOA com base nas receitas previstas, e compreende a adoção de medidas em direção a uma situação idealizada.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Fixação da despesa</i></p>",
3:"<p>Errado. Pelo quadro <b>ATENÇÃO!</b> do Resumo, as descentralizações de créditos <b>não alteram a unidade orçamentária</b> (classificação institucional) detentora do crédito, nem modificam a programação ou o valor das dotações.</p><p>É isso que as diferencia de transferências e transposição. A outra unidade apenas recebe autorização para executar a despesa, mantidas as classificações originais.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Descentralização de créditos — ATENÇÃO</i></p>",
4:"<p>Certo — é a definição do Resumo: as descentralizações ocorrem quando se movimenta parte do orçamento para que outras unidades administrativas possam executar a despesa, <b>mantidas as classificações institucional, funcional, programática e econômica</b>.</p><p>Exemplo do material: um órgão com orçamento para contratação de pessoal descentraliza parte dele para outro órgão com necessidade emergencial, que usa o montante para contratar os funcionários necessários.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Descentralização de créditos orçamentários</i></p>",
5:"<p>Errado — trocou os nomes. Entre unidades gestoras de <b>órgãos diferentes</b> há descentralização <b>externa</b>, chamada <b>destaque</b>.</p><p><b>Provisão</b> é a descentralização <b>interna</b>, entre unidades gestoras de um mesmo órgão. Quadro do Resumo: interna = provisão; externa = destaque.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Descentralização de créditos — interna x externa</i></p>",
6:"<p>Certo — é a definição do Resumo: a programação orçamentária e financeira consiste na <b>compatibilização do fluxo dos pagamentos com o fluxo dos recebimentos</b>, visando ao ajuste da despesa fixada às novas projeções de resultados e da arrecadação.</p><p>Exemplo do material: o órgão planejou gastar <b>R$ 100.000</b> no mês, economizou <b>R$ 20.000</b> na compra de um equipamento e ajustou a despesa para <b>R$ 80.000</b>.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Programação orçamentária e financeira</i></p>",
7:"<p>Certo — é o quadro <b>DESPENCA!</b> do Resumo: se houver <b>frustração da receita estimada</b> no orçamento, deverá ser estabelecida <b>limitação de empenho e movimentação financeira</b>.</p><p>A limitação de empenho fixa um valor máximo que pode ser empenhado (compromissado) em determinado período, impedindo novos compromissos além do estabelecido. É restrição imposta a <b>todos os Poderes</b>.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Programação orçamentária e financeira — DESPENCA</i></p>",
8:"<p>Certo — é a literalidade do <b>art. 58</b> da Lei nº 4.320/1964: empenho é o ato emanado de autoridade competente que cria para o Estado obrigação de pagamento pendente ou não de implemento de condição.</p><p>O Resumo avisa que há divergência doutrinária (há quem diga que o empenho cria apenas obrigação orçamentária, a reserva de dotação), mas, <b>se a questão vier literal, marque como correta</b>.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Dispositivos da Lei 4.320 — art. 58</i></p>",
9:"<p>Errado. O <b>art. 59</b> da Lei 4.320 é seco: o empenho da despesa <b>não poderá exceder o limite dos créditos concedidos</b>. Não há exceção por autorização do ordenador.</p><p>Exemplo do Resumo: com crédito de <b>R$ 100.000</b> para material de escritório, pode-se empenhar, por exemplo, R$ 80.000, mas nunca valor superior aos R$ 100.000 concedidos.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Dispositivos da Lei 4.320 — art. 59</i></p>",
10:"<p>Certo — é o <b>art. 59, § 1º</b>, da Lei 4.320: é vedado aos Municípios empenhar, no último mês do mandato do Prefeito, mais do que o <b>duodécimo</b> da despesa prevista no orçamento vigente.</p><p>Exemplo do Resumo: orçamento previsto de <b>R$ 1.200.000</b>; no último mês do mandato, o prefeito só pode empenhar até <b>R$ 100.000</b> (1/12). O § 2º ainda proíbe assumir compromissos financeiros para execução depois do término do mandato.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Dispositivos da Lei 4.320 — art. 59, § 1º</i></p>",
11:"<p>Errado — é a exceção expressa. Pelo <b>art. 59, § 3º</b>, as vedações dos parágrafos anteriores (duodécimo no último mês e compromissos para depois do mandato) <b>não se aplicam nos casos comprovados de calamidade pública</b>.</p><p>A banca troca \"não se aplicam\" por \"aplica-se inclusive\". Guarde: calamidade pública comprovada afasta a trava do último mês de mandato.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Dispositivos da Lei 4.320 — art. 59, § 3º</i></p>",
12:"<p>Certo — literalidade do <b>art. 60</b> da Lei 4.320: é vedada a realização de despesa <b>sem prévio empenho</b>.</p><p>O empenho é o 1º estágio da despesa e é formalizado por um documento chamado nota de empenho. Atenção ao § 1º: o que pode ser dispensado, em casos especiais, é a <b>emissão da nota</b> — nunca o empenho em si.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Dispositivos da Lei 4.320 — art. 60</i></p>",
13:"<p>Errado. O <b>art. 60, § 1º</b>, prevê que, <b>em casos especiais previstos na legislação específica, será dispensada a emissão da nota de empenho</b>.</p><p>Distinga: o <b>empenho prévio</b> é sempre obrigatório (art. 60, caput); a <b>nota de empenho</b> é que pode ser dispensada em casos especiais.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Dispositivos da Lei 4.320 — art. 60, § 1º</i></p>",
14:"<p>Certo — literalidade do <b>art. 61</b> da Lei 4.320: para cada empenho será extraída a \"nota de empenho\", que indicará <b>o nome do credor, a representação e a importância da despesa</b>, bem como <b>a dedução desta do saldo da dotação própria</b>.</p><p>E a nota de empenho é um dos documentos que servem de base à liquidação (art. 63, § 2º).</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Dispositivos da Lei 4.320 — art. 61</i></p>",
15:"<p>Errado — descreveu o empenho <b>global</b>, usado para despesas contratuais ou outras de valor determinado, <b>sujeitas a parcelamento</b> (aluguéis, bem financiado, contrato de construção).</p><p>O <b>ordinário</b> serve para despesas de valor fixo e previamente determinado, cujo pagamento deva ocorrer <b>de uma só vez</b> — exemplo do Resumo: compra de um bem à vista.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Modalidades de empenho</i></p>",
16:"<p>Certo. O empenho <b>estimativo</b> é utilizado para as despesas <b>cujo montante não se pode determinar previamente</b> (art. 60, § 2º, da Lei 4.320).</p><p>Exemplos do Resumo: fornecimento de água e de energia elétrica, combustíveis e lubrificantes, conta de telefone, passagens, diárias, gratificações e despesas com pessoal e encargos.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Modalidades de empenho</i></p>",
17:"<p>Errado. Pelo Resumo, a modalidade de empenho para despesas com <b>pessoal e encargos</b> é a <b>estimativa</b>.</p><p>O EXPLICANDO MELHOR do material dá a razão: os valores pagos no decorrer do exercício <b>variam a cada mês</b>, por progressões funcionais, gratificações, nomeações, exonerações etc. O global é para despesas contratuais de valor determinado sujeitas a parcelamento.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Modalidades de empenho — EXPLICANDO MELHOR</i></p>",
18:"<p>Certo — está na lista de exemplos do empenho <b>estimativo</b>: contratação de serviços de fornecimento de <b>energia elétrica</b>.</p><p>O exemplo do Resumo: o órgão gasta em média <b>R$ 500</b> por mês de energia e empenha esse valor. Se a conta vier de <b>R$ 700</b>, o empenho é reforçado; se vier de <b>R$ 300</b>, é anulado parcialmente.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Modalidades de empenho — exemplo da energia elétrica</i></p>",
19:"<p>Errado — é o inverso. Pelo quadro <b>ATENÇÃO!</b> do Resumo, se o valor do empenho <b>exceder</b> a despesa realizada, o empenho deverá ser <b>anulado parcialmente</b>. O <b>reforço</b> é para quando o valor empenhado for <b>insuficiente</b>.</p><p>No exemplo da energia elétrica: empenho de R$ 500 e conta de R$ 300 → anulação parcial; conta de R$ 700 → reforço.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Modalidades de empenho — ATENÇÃO</i></p>",
20:"<p>Certo — é o fecho do quadro <b>ATENÇÃO!</b> do Resumo: o empenho será <b>anulado totalmente</b> quando o objeto do contrato não tiver sido cumprido ou quando tiver sido <b>emitido incorretamente</b>.</p><p>Os três ajustes do quadro: valor insuficiente → <b>reforço</b>; valor excedente → <b>anulação parcial</b>; objeto não cumprido ou emissão incorreta → <b>anulação total</b>.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Modalidades de empenho — ATENÇÃO</i></p>",
21:"<p>Certo — literalidade do <b>art. 63</b> da Lei 4.320: a liquidação consiste na <b>verificação do direito adquirido pelo credor</b>, tendo por base os <b>títulos e documentos comprobatórios</b> do respectivo crédito.</p><p>Exemplo do Resumo: após receber os materiais de escritório, verifica-se se todos os itens foram entregues corretamente e de acordo com o contrato; só então se paga o fornecedor.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Dispositivos da Lei 4.320 — art. 63</i></p>",
22:"<p>Certo — é o <b>art. 63, § 1º</b>: a verificação tem por fim apurar <b>I</b> — a origem e o objeto do que se deve pagar; <b>II</b> — a importância exata a pagar; <b>III</b> — a quem se deve pagar a importância, para extinguir a obrigação.</p><p>Não misture com o § 2º, que lista a <b>base</b> da liquidação: contrato, nota de empenho e comprovantes da entrega ou prestação.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Dispositivos da Lei 4.320 — art. 63, § 1º</i></p>",
23:"<p>Certo — é o gabarito da QUESTÃO-EXEMPLO do Resumo (art. 61 c/c art. 63, § 2º): a nota de empenho corresponde a um dos documentos utilizados para a liquidação da despesa.</p><p>Pelo art. 63, § 2º, a liquidação por fornecimentos ou serviços tem por base: <b>o contrato, ajuste ou acordo</b>; <b>a nota de empenho</b>; e <b>os comprovantes da entrega de material ou da prestação efetiva do serviço</b>.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Dispositivos da Lei 4.320 — art. 63, § 2º</i></p>",
24:"<p>Errado. Pelo quadro <b>ATENÇÃO!</b> do Resumo, a fase <b>\"em liquidação\"</b> foi criada pelo <b>PCASP</b>, conforme dispõe o MCASP, e <b>não está prevista na Lei nº 4.320/64</b>.</p><p>Exemplo do material: material de escritório recebido em <b>28 de dezembro</b> (fato gerador ocorrido), mas ainda não liquidado pela Administração — a despesa empenhada fica <b>em liquidação</b>.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Fase em liquidação — ATENÇÃO</i></p>",
25:"<p>Certo — é uma das três finalidades listadas no Resumo para a fase \"em liquidação\": <b>evitar a dupla contagem dos passivos financeiros</b> (dívidas cujo pagamento independa de autorização orçamentária).</p><p>As outras duas: registrar contabilmente no patrimônio de acordo com o <b>fato gerador</b>, e não com o empenho; e separar os empenhos não liquidados que <b>possuem</b> fato gerador dos que <b>não possuem</b>.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Fase em liquidação — ATENÇÃO</i></p>",
26:"<p>Errado. O pagamento <b>só pode ser efetuado após a regular liquidação</b> da despesa. É o <b>art. 62</b> da Lei 4.320: o pagamento da despesa só será efetuado quando ordenado após sua regular liquidação.</p><p>A ordem dos estágios é fixa: empenho → liquidação → pagamento. Disponibilidade financeira não autoriza pular a liquidação.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Pagamento / art. 62</i></p>",
27:"<p>Certo. O Resumo, com base no art. 64 da Lei 4.320, define ordem de pagamento como <b>o despacho exarado por autoridade competente, determinando que a despesa liquidada seja paga</b>.</p><p>O parágrafo único completa: a ordem de pagamento só poderá ser exarada em <b>documentos processados pelos serviços de contabilidade</b>. O pagamento em si é a entrega de numerário ao credor por cheque nominativo, ordem de pagamento ou crédito em conta.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Pagamento / art. 64</i></p>",
28:"<p>Certo — literalidade do <b>art. 65</b> da Lei 4.320: o pagamento será efetuado por tesouraria ou pagadoria regularmente instituídos por estabelecimentos bancários credenciados e, <b>em casos excepcionais, por meio de adiantamento</b>.</p><p>O regime de adiantamento, também conhecido como <b>suprimento de fundos</b>, é tratado nos arts. 68 e 69.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Dispositivos da Lei 4.320 — art. 65</i></p>",
29:"<p>Certo — é o <b>art. 67</b> da Lei 4.320: os pagamentos devidos pela Fazenda Pública em virtude de sentença judiciária far-se-ão <b>na ordem de apresentação dos precatórios</b> e à conta dos créditos respectivos, sendo proibida a designação de casos ou de pessoas nas dotações.</p><p>Exemplo do Resumo: indenização de <b>R$ 100.000</b> por desapropriação, com <b>R$ 5.000.000</b> de precatórios pendentes — ela entra na ordem de apresentação, sem privilégio.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Dispositivos da Lei 4.320 — art. 67</i></p>",
30:"<p>Errado no \"dispensado o empenho\". Pelo <b>art. 68</b>, o adiantamento consiste na entrega de numerário a servidor, <b>sempre precedida de empenho na dotação própria</b>, para despesas que não possam subordinar-se ao processo normal de aplicação.</p><p>Exemplo do Resumo: a escola pública que faz uma viagem urgente com os alunos entrega o adiantamento ao responsável <b>após</b> o empenho na dotação própria.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Dispositivos da Lei 4.320 — art. 68</i></p>",
31:"<p>Certo — literalidade do <b>art. 69</b> da Lei 4.320: não se fará adiantamento a servidor <b>em alcance</b> nem a <b>responsável por dois adiantamentos</b>.</p><p>Servidor em alcance é o que não prestou contas do adiantamento anterior ou cujas contas não foram aprovadas. Exemplo do Resumo: <b>Caio</b> recebeu 2 adiantamentos para um programa social e não poderá receber um terceiro até prestar contas e devolver os anteriores.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Dispositivos da Lei 4.320 — art. 69</i></p>",
32:"<p>Errado. Pelo <b>art. 66</b> da Lei 4.320, as dotações atribuídas às unidades orçamentárias poderão ser movimentadas por órgãos centrais de administração geral <b>quando expressamente determinado na Lei de Orçamento</b>.</p><p>O \"independentemente de previsão\" é o erro. O parágrafo único ainda permite redistribuir parcelas das <b>dotações de pessoal</b> entre unidades, quando indispensável à movimentação de pessoal em quadros comuns.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Dispositivos da Lei 4.320 — art. 66</i></p>",
33:"<p>Certo — literalidade do <b>art. 70</b> da Lei 4.320: a aquisição de material, o fornecimento e a adjudicação de obras e serviços serão regulados em lei, <b>respeitado o princípio da concorrência</b>.</p><p>No planejamento da despesa, é a etapa de <b>licitação e contratação</b>: procedimentos para adquirir materiais, contratar obras e serviços, alienar ou ceder bens e conceder serviços públicos com as melhores condições para o Estado.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Dispositivos da Lei 4.320 — art. 70</i></p>",
34:"<p>Errado pelo <b>apenas</b>. O Resumo define a limitação de empenho como <b>restrição de despesa imposta a todos os Poderes</b>.</p><p>Ela consiste em fixar um valor máximo que pode ser empenhado em determinado período, e é acionada quando há <b>frustração da receita</b> estimada (quadro DESPENCA!).</p><p class='fb-fonte'>AFO — Resumo 09 · <i>O que significa limitação de empenho?</i></p>",
35:"<p>Certo. Pelo Resumo, o empenho <b>consiste na reserva de dotação orçamentária para um fim específico</b>.</p><p>O comentário ao art. 58 reforça: é o ato administrativo em que se reserva uma parcela do orçamento para o cumprimento de um compromisso financeiro. Exemplo de empenho do material: veículo de <b>R$ 100.000</b> pago em parcelas mensais de <b>R$ 20.000</b>, empenhado em 01/02/2024 como empenho <b>global</b>.</p><p class='fb-fonte'>AFO — Resumo 09 · <i>Empenho</i></p>",
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"09", nome:"Etapas da despesa orçamentária", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, PROVA_POOL:PROVA_POOL};
})();
