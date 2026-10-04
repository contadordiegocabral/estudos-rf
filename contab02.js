/* Contabilidade Geral — Módulo 02: Escrituração, natureza das contas e fatos contábeis (modo direto) */
window.MOD = window.MOD || {};
window.MOD.contab02 = (function(){
"use strict";

var CARDS = [
  ["O que é escrituração?","A <b>técnica contábil</b> que registra, <b>em livros próprios</b>, <b>todos os fatos contábeis</b> e <b>alguns atos administrativos</b> — os que darão origem a fatos que alterarão o patrimônio."],
  ["O que a escrituração observa?","A <b>legislação em vigor</b>, o <b>método das partidas dobradas</b>, os <b>elementos do lançamento</b> e o <b>regime contábil</b>."],
  ["O que diz o método das partidas dobradas?","Para <b>todo débito há pelo menos um crédito de igual valor</b>: a <b>soma dos débitos é igual à soma dos créditos</b>. <b>Toda aplicação tem uma origem.</b>"],
  ["Quais são os elementos do lançamento?","<b>Local e data</b> · <b>conta debitada</b> · <b>conta creditada</b> · <b>histórico</b> · <b>valor</b>."],
  ["O que é o regime de caixa?","Considera <b>receita a entrada de dinheiro no caixa</b> e <b>despesa a saída de dinheiro do caixa</b>."],
  ["O que é o regime de competência?","Apropria receitas e despesas <b>no período de sua realização (fato gerador)</b>, <b>independentemente</b> do efetivo recebimento ou pagamento."],
  ["Quando ocorre o fato gerador da RECEITA?","Quando a empresa <b>presta o serviço</b> ou <b>entrega a mercadoria</b> — independentemente do recebimento do dinheiro."],
  ["Quando ocorre o fato gerador da DESPESA?","Quando a empresa <b>consome</b> o bem ou serviço — independentemente de ter pago ou não."],
  ["Exemplo do regime de caixa","Salários de <b>dezembro/2022</b> pagos em <b>janeiro/2023</b> são despesa de <b>janeiro/2023</b>, porque o regime de caixa considera a <b>data do pagamento</b>."],
  ["Exemplo do regime de competência","Encomenda de R$ 30.000 recebida em fevereiro e março, produzida de março a maio e <b>entregue em junho</b> → a receita é reconhecida <b>em junho</b>, mês da entrega."],
  ["Por que o ativo tem natureza devedora?","Porque o ativo (<b>aplicação</b>) <b>deve a sua existência</b> ao passivo e ao PL (<b>origem</b>) — e quem deve tem natureza <b>devedora</b>."],
  ["Por que as despesas são devedoras e as receitas credoras?","Porque as <b>despesas são financiadas pelas receitas</b> — as despesas <b>devem sua existência</b> às receitas."],
  ["Quadro-resumo da natureza das contas","<b>Ativo</b> devedor (aumenta a débito) · <b>Passivo</b> credor (aumenta a crédito) · <b>PL</b> credor · <b>Despesas</b> devedor · <b>Receitas</b> credor."],
  ["Quais contas aumentam a DÉBITO?","<b>Ativo</b> e <b>Despesa</b>."],
  ["Quais contas aumentam a CRÉDITO?","<b>Passivo</b>, <b>Patrimônio Líquido</b> e <b>Receita</b>."],

  ["Lançamento do reconhecimento de PROVISÃO","<b>D</b> Despesa com Provisão (↑ despesa) · <b>C</b> Provisão (↑ passivo)."],
  ["Lançamento da REVERSÃO de provisão","<b>D</b> Provisão (↓ passivo) · <b>C</b> Reversão de Provisão (↑ receita)."],
  ["Lançamento do PAGAMENTO da despesa antecipada","<b>D</b> Despesa Antecipada (↑ ativo — é um <b>direito</b>) · <b>C</b> Caixa/Bancos (↓ ativo)."],
  ["Lançamento do reconhecimento da despesa antecipada por competência","<b>D</b> Despesa (↑ despesa) · <b>C</b> Despesa Antecipada (↓ ativo — baixa do direito)."],
  ["Lançamento da DEPRECIAÇÃO","<b>D</b> Despesa com Depreciação (↑ despesa) · <b>C</b> Depreciação Acumulada (↓ ativo — <b>retificadora</b> do imobilizado)."],
  ["Lançamento da despesa de JUROS","<b>D</b> Juros (↑ despesa) · <b>C</b> Juros a Pagar (↑ passivo)."],
  ["Lançamento da CONSTITUIÇÃO de reservas de lucros","<b>D</b> Lucros Acumulados (↓ PL) · <b>C</b> Reservas de Lucros (↑ PL) — permuta <b>dentro</b> do PL."],
  ["Lançamento da REVERSÃO de reservas de lucros","<b>D</b> Reservas de Lucros (↓ PL) · <b>C</b> Lucros Acumulados (↑ PL)."],
  ["Reserva usada para compensar prejuízos","<b>D</b> Reservas (↓ PL) · <b>C</b> Prejuízos Acumulados (↑ PL)."],
  ["Reserva usada para aumentar o capital social","<b>D</b> Reservas (↓ PL) · <b>C</b> Capital Social (↑ PL)."],
  ["Lançamento do DIVIDENDO OBRIGATÓRIO","<b>D</b> Lucros Acumulados (↓ PL) · <b>C</b> Dividendos a Pagar (↑ <b>passivo</b>)."],
  ["Dividendo ADICIONAL — proposta de distribuição","<b>D</b> Lucros Acumulados (↓ PL) · <b>C</b> Dividendos Propostos (↑ <b>PL</b>, até a aprovação da Assembleia)."],
  ["Dividendo ADICIONAL — após a aprovação da Assembleia","<b>D</b> Dividendos Propostos (↓ PL) · <b>C</b> Dividendos a Pagar (↑ passivo)."],
  ["Pagamento dos dividendos","<b>D</b> Dividendos a Pagar (↓ passivo) · <b>C</b> Caixa/Bancos (↓ ativo)."],
  ["Tratamento contábil dos JSCP","<b>Semelhante ao dos dividendos obrigatórios</b> (Manual de Contabilidade Societária): <b>D</b> Lucros Acumulados (↓ PL) · <b>C</b> JSCP a Pagar (↑ passivo) — <b>diminui o PL</b>."],
  ["Desconto condicional concedido — a prestação do serviço","<b>D</b> Duplicatas a Receber 10.000 (↑ ativo) · <b>C</b> Receita de Prestação de Serviços 10.000."],
  ["Desconto condicional concedido — o recebimento com desconto","<b>D</b> Caixa 9.000 · <b>D</b> Despesa Financeira (desconto condicional) 1.000 · <b>C</b> Duplicatas a Receber 10.000."],
  ["Recebimento antecipado de cliente — o lançamento","<b>D</b> Caixa/Bancos · <b>C</b> <b>Adiantamento de Clientes</b> — conta do <b>passivo</b>, porque representa uma <b>obrigação</b> de entregar."],
  ["Entrega da mercadoria antes recebida antecipadamente","<b>D</b> Caixa/Bancos (parcela restante) · <b>D</b> Adiantamento de Clientes (baixa do passivo) · <b>C</b> Receita de Vendas (valor total)."],
  ["Baixa do estoque na venda","<b>D</b> Custo das Mercadorias Vendidas (↑ despesa) · <b>C</b> Estoques (↓ ativo)."],

  ["Quais são as quatro fórmulas de lançamento?","<b>1ª</b> 1 débito e 1 crédito · <b>2ª</b> 1 débito e 2 ou mais créditos · <b>3ª</b> 2 ou mais débitos e 1 crédito · <b>4ª</b> 2 ou mais débitos e 2 ou mais créditos."],
  ["Mnemônico dos erros de escrituração","<b>TEC</b> — <b>T</b>ransferência, <b>E</b>storno, <b>C</b>omplementação."],
  ["O que é a TRANSFERÊNCIA?","Corrige a conta <b>indevidamente debitada ou creditada</b>, <b>transpondo o registro para a conta adequada</b>."],
  ["O que é o ESTORNO?","Lançamento <b>inverso</b> ao feito erroneamente, <b>anulando-o totalmente</b>."],
  ["O que é a COMPLEMENTAÇÃO?","Lançamento posterior que <b>complementa</b>, <b>aumentando ou reduzindo</b> o valor anteriormente registrado."],
  ["O que são ATOS contábeis?","Os que <b>NÃO provocam alteração no patrimônio</b>. São registrados em <b>contas de compensação</b>. Ex.: <b>assinatura de contrato</b>, <b>contratação de funcionários</b>."],
  ["O que são FATOS contábeis?","Os que <b>provocam alteração</b> — qualitativa, quantitativa ou ambas — no patrimônio. Registram-se em <b>contas patrimoniais e de resultado</b>."],
  ["O que é um fato PERMUTATIVO?","<b>Troca</b> entre elementos do ativo, do passivo ou entre ambos — e também dentro do PL — <b>sem alterar quantitativamente o PL</b>. Altera o patrimônio <b>qualitativamente</b>. Envolve <b>apenas contas patrimoniais</b>."],
  ["O que é um fato MODIFICATIVO?","Provoca alteração <b>quantitativa</b> no PL — <b>aumentativa</b> ou <b>diminutiva</b>. Envolve <b>pelo menos uma conta de resultado</b>."],
  ["O que é um fato MISTO?","Envolve <b>ao mesmo tempo</b> um fato <b>permutativo</b> e um fato <b>modificativo</b> — podendo ser <b>aumentativo</b> ou <b>diminutivo</b>."],
  ["Três exemplos de fato PERMUTATIVO","Compra de material <b>à vista</b> (D material · C caixa); compra de mercadorias <b>a prazo</b> (D estoque · C fornecedores); <b>empréstimo bancário tomado</b> (D bancos · C empréstimos a pagar)."],
  ["Três exemplos de fato MODIFICATIVO","Aluguel pago à vista (<b>diminutivo</b>); venda de mercadorias a prazo (<b>aumentativo</b>); reconhecimento da depreciação (<b>diminutivo</b>)."],
  ["Pagamento de duplicatas COM JUROS — que fato é?","<b>Misto diminutivo</b>: <b>D</b> Duplicatas a Pagar · <b>D</b> Juros Passivos · <b>C</b> Caixa/Bancos."],
  ["Pagamento de duplicatas COM DESCONTO — que fato é?","<b>Misto aumentativo</b>: <b>D</b> Duplicatas a Pagar · <b>C</b> Descontos Obtidos · <b>C</b> Caixa/Bancos."],
  ["Recebimento de duplicatas COM JUROS — que fato é?","<b>Misto aumentativo</b>: <b>D</b> Caixa/Bancos · <b>C</b> Juros Ativos · <b>C</b> Duplicatas a Receber."],
  ["Recebimento de duplicatas COM DESCONTO — que fato é?","<b>Misto diminutivo</b>: <b>D</b> Caixa/Bancos · <b>D</b> Desconto Concedido · <b>C</b> Duplicatas a Receber."],

  ["O que é o balancete de verificação?","Demonstrativo <b>auxiliar e NÃO obrigatório</b> que relaciona <b>todas as contas</b> — patrimoniais e de resultado — usado para <b>fins operacionais</b> da empresa."],
  ["De qual livro as contas do balancete são extraídas?","Do <b>livro RAZÃO</b> — não do livro diário."],
  ["Para que serve o balancete?","Para <b>confirmar se o método das partidas dobradas está correto</b> — se o total de débitos é igual ao de créditos."],
  ["Quantas colunas pode ter o balancete?","De <b>2 até 8 colunas</b>."],
  ["Qual a particularidade do balancete de 4 colunas?","É o <b>único</b> em que os saldos vêm <b>seguidos das letras “D” (débito) ou “C” (crédito)</b>."],
  ["O balancete é uma demonstração contábil?","<b>Não</b> — não está na <b>Lei 6.404</b> nem no <b>CPC 26</b>."],
  ["Qual a limitação do balancete?","<b>Não evidencia erro de escrituração</b> quando o saldo final (credor e devedor) <b>fica igual</b> — por exemplo, um lançamento na conta errada pelo valor certo."],
  ["Em uma frase, o que é o balancete?","Um <b>resumo ordenado das contas</b> utilizadas pela contabilidade em determinado período."]
];

var QS = [
  ["Escrituração é a técnica contábil que registra em livros próprios todos os fatos contábeis e alguns atos administrativos.","C","CEBRASPE","Conceito."],
  ["A escrituração registra todos os atos administrativos da entidade.","E","FCC","Apenas <b>alguns</b> — os que darão origem a fatos que alteram o patrimônio."],
  ["Pelo método das partidas dobradas, para todo débito há pelo menos um crédito de igual valor.","C","FGV","E a soma dos débitos é igual à dos créditos."],
  ["São elementos do lançamento o local e a data, a conta debitada, a conta creditada, o histórico e o valor.","C","VUNESP","Cinco elementos."],
  ["No regime de caixa, receita é a entrada de dinheiro no caixa e despesa é a saída de dinheiro do caixa.","C","CEBRASPE","Definição."],
  ["O regime de competência apropria receitas e despesas de acordo com o efetivo recebimento ou pagamento.","E","FCC","Apropria conforme o <b>período de realização (fato gerador)</b>."],
  ["Pelo regime de competência, o fato gerador da receita ocorre quando a empresa presta o serviço ou entrega a mercadoria.","C","FGV","Independentemente do recebimento."],
  ["Salários de dezembro de 2022 pagos em janeiro de 2023 são despesa de janeiro de 2023 pelo regime de caixa.","C","VUNESP","O regime de caixa considera a data do pagamento."],
  ["Encomenda recebida em duas parcelas em fevereiro e março, produzida de março a maio e entregue em junho tem a receita reconhecida em março pelo regime de competência.","E","CEBRASPE","Reconhece-se em <b>junho</b>, mês da entrega."],
  ["O ativo tem natureza devedora porque deve a sua existência ao passivo e ao patrimônio líquido.","C","FCC","Lógica de origem e aplicação."],
  ["As despesas têm natureza credora e as receitas, natureza devedora.","E","FGV","É o inverso: despesas <b>devedoras</b>, receitas <b>credoras</b>."],
  ["As contas do passivo e do patrimônio líquido aumentam a crédito e diminuem a débito.","C","VUNESP","Quadro-resumo da natureza."],
  ["As contas de ativo e de despesa aumentam a débito.","C","CEBRASPE","Ambas de natureza devedora."],
  ["O reconhecimento de uma provisão é registrado a débito de despesa com provisão e a crédito de provisão no passivo.","C","FCC","Lançamento padrão."],
  ["A reversão de provisão é registrada a débito de provisão e a crédito de conta de receita.","C","FGV","Reversão de Provisão é conta de resultado."],
  ["O pagamento de uma despesa antecipada é registrado a débito de despesa do exercício.","E","VUNESP","A débito de <b>Despesa Antecipada</b>, que é conta do <b>ativo</b> — um direito."],
  ["A despesa antecipada é reconhecida como despesa do período na ocorrência do fato gerador, com baixa do direito no ativo.","C","CEBRASPE","D despesa · C despesa antecipada."],
  ["A depreciação é registrada a débito de despesa com depreciação e a crédito de depreciação acumulada, conta retificadora do ativo imobilizado.","C","FCC","Lançamento padrão."],
  ["A despesa de juros incorridos e não pagos é registrada a débito de juros e a crédito de juros a pagar no passivo.","C","FGV","Regime de competência."],
  ["A constituição de reservas de lucros aumenta o patrimônio líquido total.","E","VUNESP","É permuta <b>dentro</b> do PL: sai de lucros acumulados e entra em reservas."],
  ["A utilização de reservas para aumento do capital social é registrada a débito de reservas e a crédito de capital social.","C","CEBRASPE","Permuta dentro do PL."],
  ["O dividendo obrigatório é registrado a débito de lucros acumulados e a crédito de dividendos a pagar, no passivo.","C","FCC","Obrigação líquida e certa."],
  ["O dividendo adicional proposto é registrado no passivo desde a proposta de distribuição.","E","FGV","Fica em <b>Dividendos Propostos</b>, no <b>PL</b>, até a aprovação da Assembleia."],
  ["Após a aprovação da assembleia, os dividendos propostos são transferidos do patrimônio líquido para o passivo.","C","VUNESP","D Dividendos Propostos · C Dividendos a Pagar."],
  ["Os juros sobre o capital próprio têm tratamento contábil semelhante ao dos dividendos obrigatórios e diminuem o patrimônio líquido.","C","CEBRASPE","Manual de Contabilidade Societária."],
  ["O desconto condicional concedido no recebimento é registrado como despesa financeira.","C","FCC","D Caixa · D Despesa Financeira · C Duplicatas a Receber."],
  ["O recebimento antecipado de cliente é registrado a crédito de receita de vendas.","E","FGV","A crédito de <b>Adiantamento de Clientes</b>, conta do passivo."],
  ["Adiantamento de clientes é conta do passivo porque representa uma obrigação de entregar o bem ou serviço.","C","VUNESP","Só vira receita na entrega."],
  ["A baixa do estoque na venda é registrada a débito de custo das mercadorias vendidas e a crédito de estoques.","C","CEBRASPE","Lançamento padrão."],
  ["Na segunda fórmula de lançamento existem dois ou mais débitos e um único crédito.","E","FCC","Essa é a <b>terceira</b>; a segunda tem 1 débito e 2 ou mais créditos."],
  ["A quarta fórmula de lançamento envolve dois ou mais débitos e dois ou mais créditos.","C","FGV","Fórmula mais complexa."],
  ["A retificação de lançamento pode ser feita por transferência, estorno ou complementação.","C","VUNESP","Mnemônico TEC."],
  ["O estorno consiste em lançamento posterior que aumenta ou reduz o valor anteriormente registrado.","E","CEBRASPE","Essa é a <b>complementação</b>; o estorno é o lançamento <b>inverso</b> que anula totalmente."],
  ["A transferência corrige a conta indevidamente debitada ou creditada, transpondo o registro para a conta adequada.","C","FCC","Definição."],
  ["Os atos contábeis não provocam alteração no patrimônio e são registrados em contas de compensação.","C","FGV","Ex.: assinatura de contrato."],
  ["A contratação de funcionários é exemplo de fato contábil modificativo.","E","VUNESP","É <b>ato</b> contábil — não altera o patrimônio."],
  ["Os fatos permutativos alteram qualitativamente o patrimônio, sem alterar quantitativamente o patrimônio líquido.","C","CEBRASPE","Envolvem apenas contas patrimoniais."],
  ["Os fatos modificativos envolvem pelo menos uma conta de resultado e provocam alteração quantitativa no patrimônio líquido.","C","FCC","Aumentativa ou diminutiva."],
  ["Os fatos mistos envolvem ao mesmo tempo um fato permutativo e um fato modificativo.","C","FGV","Podem ser aumentativos ou diminutivos."],
  ["A aquisição de mercadorias para estoque com pagamento a prazo é fato modificativo.","E","VUNESP","É <b>permutativo</b> — D estoque, C fornecedores."],
  ["A tomada de empréstimo bancário é fato permutativo entre elementos do ativo e do passivo.","C","CEBRASPE","D bancos · C empréstimos a pagar."],
  ["A venda de mercadorias a prazo é fato modificativo aumentativo.","C","FCC","D clientes · C receita de vendas."],
  ["O reconhecimento da depreciação é fato modificativo diminutivo.","C","FGV","D despesa com depreciação · C depreciação acumulada."],
  ["O pagamento de duplicatas com juros é fato misto aumentativo.","E","VUNESP","É misto <b>diminutivo</b> — os juros são despesa."],
  ["O pagamento de duplicatas com desconto obtido é fato misto aumentativo.","C","CEBRASPE","O desconto obtido é receita."],
  ["O recebimento de duplicatas com juros ativos é fato misto aumentativo.","C","FCC","Os juros ativos são receita."],
  ["O recebimento de duplicatas com desconto concedido é fato misto diminutivo.","C","FGV","O desconto concedido é despesa."],
  ["O balancete de verificação é demonstrativo obrigatório previsto na Lei nº 6.404/76.","E","VUNESP","<b>Não</b> é obrigatório e <b>não</b> é demonstração contábil."],
  ["As contas do balancete de verificação são extraídas do livro diário.","E","CEBRASPE","São extraídas do <b>livro razão</b>."],
  ["O balancete de verificação relaciona todas as contas, patrimoniais e de resultado.","C","FCC","Resumo ordenado das contas do período."],
  ["O balancete serve para confirmar se o método das partidas dobradas está correto.","C","FGV","Débito igual a crédito."],
  ["O balancete de verificação pode ter de duas até oito colunas.","C","VUNESP","Formatos usuais."],
  ["Apenas no balancete de quatro colunas os saldos vêm seguidos das letras D ou C.","C","CEBRASPE","Particularidade cobrada literalmente."],
  ["O balancete de verificação evidencia todo e qualquer erro de escrituração.","E","FCC","Não evidencia o erro quando o saldo final permanece igual."],
  ["O balancete de verificação não integra o rol de demonstrações do CPC 26.","C","FGV","Tem caráter auxiliar e operacional."],
  ["Toda aplicação de recursos tem uma origem correspondente.","C","VUNESP","Fundamento das partidas dobradas."],
  ["No exemplo do terno vendido por R$ 800 com custo de R$ 300, o aumento do patrimônio líquido em fevereiro foi de R$ 500.","C","CEBRASPE","PL = receitas menos despesas: 800 − 300."],
  ["No mesmo exemplo, o ativo aumentou R$ 400 em fevereiro.","E","FCC","Aumentou <b>R$ 100</b>: entraram 400 de caixa e saíram 300 de estoque."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Escrituração, regimes e natureza das contas",
      '<div class="box"><span class="bl">Escrituração</span>'+
      '<p>Técnica que registra, <b>em livros próprios</b>, <b>todos os fatos contábeis</b> e <b>alguns atos administrativos</b> — aqueles que darão origem a fatos que alterarão o patrimônio. Observa a <b>legislação</b>, o <b>método das partidas dobradas</b>, os <b>elementos do lançamento</b> e o <b>regime contábil</b>.</p>'+
      '<p class="mn"><em>Para todo débito há pelo menos um crédito de igual valor · toda aplicação tem uma origem</em></p>'+
      '<p><b>Elementos do lançamento:</b> local e data · conta debitada · conta creditada · histórico · valor.</p></div>'+
      '<div class="box"><span class="bl">Os dois regimes</span>'+
      '<p><b>Caixa:</b> receita é a <b>entrada</b> de dinheiro; despesa é a <b>saída</b>.</p>'+
      '<p><b>Competência:</b> apropria pelo <b>período de realização (fato gerador)</b>, independentemente de recebimento ou pagamento. O fato gerador da <b>receita</b> é a <b>prestação do serviço ou a entrega da mercadoria</b>; o da <b>despesa</b> é o <b>consumo</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Natureza das contas — a lógica, não a decoreba</span>'+
      '<p>O <b>ativo</b> é <b>aplicação</b>; o <b>passivo e o PL</b> são <b>origem</b>. O ativo <b>deve</b> sua existência a eles → natureza <b>DEVEDORA</b>. As <b>despesas</b> são financiadas pelas <b>receitas</b> → despesas <b>devedoras</b>, receitas <b>credoras</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Quadro-resumo</span>'+
      '<ul><li><b>Ativo</b> — devedor · aumenta a <b>débito</b> · diminui a crédito</li>'+
      '<li><b>Passivo</b> — credor · aumenta a <b>crédito</b> · diminui a débito</li>'+
      '<li><b>Patrimônio Líquido</b> — credor · aumenta a <b>crédito</b></li>'+
      '<li><b>Despesas</b> — devedor · aumenta a <b>débito</b></li>'+
      '<li><b>Receitas</b> — credor · aumenta a <b>crédito</b></li></ul>'+
      '<p class="mn"><em>Aumentam a DÉBITO: ativo e despesa · Aumentam a CRÉDITO: passivo, PL e receita</em></p></div>')
  ],
  V2:[
    sl("Os lançamentos que mais caem",
      '<div class="box"><span class="bl">Provisão e despesa antecipada</span>'+
      '<p><b>Provisão:</b> <b>D</b> Despesa com Provisão · <b>C</b> Provisão (passivo). <b>Reversão:</b> <b>D</b> Provisão · <b>C</b> Reversão de Provisão (receita).</p>'+
      '<p><b>Despesa antecipada — pagamento:</b> <b>D</b> Despesa Antecipada (<b>ativo</b>, é um direito) · <b>C</b> Caixa/Bancos. <b>Reconhecimento por competência:</b> <b>D</b> Despesa · <b>C</b> Despesa Antecipada.</p></div>'+
      '<div class="box"><span class="bl">Depreciação e juros</span>'+
      '<p><b>Depreciação:</b> <b>D</b> Despesa com Depreciação · <b>C</b> Depreciação Acumulada (<b>retificadora</b> do imobilizado).</p>'+
      '<p><b>Juros incorridos:</b> <b>D</b> Juros (despesa) · <b>C</b> Juros a Pagar (passivo).</p></div>'+
      '<div class="box"><span class="bl">Reservas — tudo dentro do PL</span>'+
      '<p><b>Constituição:</b> <b>D</b> Lucros Acumulados · <b>C</b> Reservas de Lucros. <b>Reversão:</b> o inverso.<br>'+
      '<b>Compensar prejuízos:</b> <b>D</b> Reservas · <b>C</b> Prejuízos Acumulados. <b>Aumentar capital:</b> <b>D</b> Reservas · <b>C</b> Capital Social.</p>'+
      '<p>Nenhum deles muda o <b>total</b> do PL — são permutas internas.</p></div>'+
      '<div class="box trap"><span class="bl">Dividendos — onde a banca separa os dois</span>'+
      '<p><b>Obrigatório:</b> <b>D</b> Lucros Acumulados · <b>C</b> Dividendos a Pagar → vai direto ao <b>PASSIVO</b>.</p>'+
      '<p><b>Adicional proposto:</b> <b>D</b> Lucros Acumulados · <b>C</b> Dividendos Propostos → fica no <b>PL</b> até a Assembleia. <b>Aprovado:</b> <b>D</b> Dividendos Propostos · <b>C</b> Dividendos a Pagar (passivo).</p>'+
      '<p><b>Pagamento:</b> <b>D</b> Dividendos a Pagar · <b>C</b> Caixa/Bancos. O <b>JSCP</b> segue o dividendo obrigatório e <b>diminui o PL</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Desconto condicional e adiantamento de clientes</span>'+
      '<p><b>Desconto condicional concedido:</b> na prestação, <b>D</b> Duplicatas a Receber 10.000 · <b>C</b> Receita 10.000. No recebimento, <b>D</b> Caixa 9.000 · <b>D</b> Despesa Financeira 1.000 · <b>C</b> Duplicatas a Receber 10.000.</p>'+
      '<p><b>Adiantamento de clientes</b> é <b>PASSIVO</b> — obrigação de entregar. Só na entrega nasce a receita: <b>D</b> Caixa (parcela) · <b>D</b> Adiantamento de Clientes · <b>C</b> Receita de Vendas. E a baixa do estoque: <b>D</b> CMV · <b>C</b> Estoques.</p></div>')
  ],
  V3:[
    sl("Fórmulas, erros, atos e fatos contábeis",
      '<div class="box"><span class="bl">As quatro fórmulas de lançamento</span>'+
      '<ul><li><b>1ª</b> — 1 débito e 1 crédito</li><li><b>2ª</b> — <b>1 débito</b> e 2 ou mais créditos</li>'+
      '<li><b>3ª</b> — 2 ou mais débitos e <b>1 crédito</b></li><li><b>4ª</b> — 2 ou mais débitos e 2 ou mais créditos</li></ul>'+
      '<p class="mn"><em>A banca inverte a 2ª com a 3ª — repare em qual lado está o “1”.</em></p></div>'+
      '<div class="box"><span class="bl">Erros de escrituração — mnemônico TEC</span>'+
      '<ul><li><b>T</b>ransferência — corrige a <b>conta errada</b>, transpondo o registro para a adequada.</li>'+
      '<li><b>E</b>storno — lançamento <b>inverso</b>, que <b>anula totalmente</b>.</li>'+
      '<li><b>C</b>omplementação — lançamento <b>posterior</b> que aumenta ou reduz o valor registrado.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Atos × fatos</span>'+
      '<p><b>ATOS</b> — <b>não</b> alteram o patrimônio; vão para <b>contas de compensação</b>. Ex.: assinatura de contrato, contratação de funcionários.</p>'+
      '<p><b>FATOS</b> — alteram o patrimônio (qualitativa, quantitativa ou ambas); vão para contas <b>patrimoniais e de resultado</b>.</p></div>'+
      '<div class="box"><span class="bl">Os três tipos de fato</span>'+
      '<ul><li><b>Permutativo</b> — troca entre ativo, passivo, ambos ou dentro do PL. <b>Não muda o PL em quantidade</b>; envolve <b>só contas patrimoniais</b>.</li>'+
      '<li><b>Modificativo</b> — altera <b>quantitativamente</b> o PL (aumentativo ou diminutivo); envolve <b>pelo menos uma conta de resultado</b>.</li>'+
      '<li><b>Misto</b> — permutativo <b>e</b> modificativo ao mesmo tempo; também aumentativo ou diminutivo.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Os quatro mistos das duplicatas</span>'+
      '<p><b>Pagamento com JUROS</b> → misto <b>diminutivo</b>.<br>'+
      '<b>Pagamento com DESCONTO obtido</b> → misto <b>aumentativo</b>.<br>'+
      '<b>Recebimento com JUROS ativos</b> → misto <b>aumentativo</b>.<br>'+
      '<b>Recebimento com DESCONTO concedido</b> → misto <b>diminutivo</b>.</p>'+
      '<p class="mn"><em>Pergunte só uma coisa: a conta de resultado que aparece é receita ou despesa?</em></p></div>')
  ],
  V4:[
    sl("Balancete de verificação",
      '<div class="box"><span class="bl">O que é</span>'+
      '<p>Demonstrativo de caráter <b>AUXILIAR</b> e <b>NÃO obrigatório</b>, que relaciona <b>todas as contas</b> — patrimoniais <b>e</b> de resultado. É um <b>resumo ordenado das contas</b> usadas no período, para <b>fins operacionais</b> da empresa.</p></div>'+
      '<div class="box trap"><span class="bl">Os cinco pontos que caem</span>'+
      '<ul><li>As contas são extraídas do <b>LIVRO RAZÃO</b> — <b>não</b> do livro diário.</li>'+
      '<li>Serve para <b>confirmar as partidas dobradas</b> (débito = crédito).</li>'+
      '<li>Pode ter de <b>2 até 8 colunas</b>.</li>'+
      '<li>Só o de <b>4 colunas</b> traz os saldos seguidos de <b>“D”</b> ou <b>“C”</b>.</li>'+
      '<li><b>Não é demonstração contábil</b> — não está na <b>Lei 6.404</b> nem no <b>CPC 26</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">O que o balancete NÃO faz</span>'+
      '<p>Não evidencia erro de escrituração quando o <b>saldo final continua igual</b> — por exemplo, um valor certo lançado na conta errada. Para isso servem as retificações do <b>TEC</b>.</p></div>')
  ]
};

var EX = {
S1:{t:"order", instr:"Ordene os elementos do lançamento contábil",
  items:["Local e data","Conta debitada","Conta creditada","Histórico","Valor"],
  why:"Cinco elementos, sempre nessa ordem."},

S2:{t:"gap", instr:"Complete o método das partidas dobradas",
  before:"Para todo débito há pelo menos um crédito ",
  after:".",
  options:["de igual valor","de valor superior","de valor inferior"], answer:0,
  why:"A soma dos débitos é igual à soma dos créditos."},

S3:{t:"sort", instr:"Qual regime reconhece cada situação?",
  buckets:["Regime de caixa","Regime de competência"],
  items:[["Salário de dezembro pago em janeiro é despesa de janeiro",0],
         ["Receita reconhecida na entrega da mercadoria, mesmo sem receber",1],
         ["Despesa reconhecida no consumo do serviço, mesmo sem pagar",1]],
  why:"O regime de competência olha o fato gerador; o de caixa, a movimentação financeira."},

S4:{t:"mc", instr:"Encomenda recebida em fevereiro e março, produzida de março a maio e entregue em junho. Quando se reconhece a receita pelo regime de competência?",
  options:["Em junho, na entrega","Em fevereiro, no primeiro recebimento",
           "Em março, no início da produção","Repartida entre fevereiro e março"],
  answer:0,
  why:"O fato gerador da receita é a entrega da mercadoria."},

S5:{t:"sort", instr:"Qual a natureza do saldo de cada grupo?",
  buckets:["Devedora","Credora"],
  items:[["Ativo",0],["Despesas",0],["Passivo",1],["Patrimônio Líquido",1],["Receitas",1]],
  why:"O ativo deve sua existência à origem; as despesas, às receitas."},

S6:{t:"sort", instr:"A conta aumenta a débito ou a crédito?",
  buckets:["Aumenta a débito","Aumenta a crédito"],
  items:[["Ativo",0],["Despesa",0],["Passivo",1],["Patrimônio Líquido",1],["Receita",1]],
  why:"Espelho do quadro de natureza."},

S7:{t:"match", instr:"Ligue cada operação ao seu lançamento",
  pairs:[["Reconhecimento de provisão","D Despesa com Provisão · C Provisão"],
         ["Depreciação","D Despesa com Depreciação · C Depreciação Acumulada"],
         ["Juros incorridos e não pagos","D Juros · C Juros a Pagar"],
         ["Pagamento de despesa antecipada","D Despesa Antecipada · C Caixa/Bancos"]],
  why:"Despesa antecipada entra no ativo — é um direito."},

S8:{t:"mc", instr:"O pagamento de uma despesa antecipada é debitado em qual conta?",
  options:["Despesa Antecipada, no ativo","Despesa do exercício, no resultado",
           "Adiantamento de Clientes, no passivo","Reservas, no patrimônio líquido"],
  answer:0,
  why:"Só vira despesa na ocorrência do fato gerador."},

S9:{t:"sort", instr:"A operação altera o TOTAL do patrimônio líquido?",
  buckets:["Não altera o total do PL","Altera o total do PL"],
  items:[["Constituição de reservas de lucros",0],["Reversão de reservas de lucros",0],
         ["Uso de reservas para aumentar o capital social",0],
         ["Reconhecimento de dividendo obrigatório",1],["Pagamento ou crédito de JSCP",1]],
  why:"Reservas são permutas internas; dividendos e JSCP saem do PL para o passivo."},

S10:{t:"sort", instr:"Onde fica cada dividendo antes do pagamento?",
  buckets:["Passivo","Patrimônio Líquido"],
  items:[["Dividendo obrigatório",0],["Dividendo adicional já aprovado pela Assembleia",0],
         ["Dividendo adicional apenas proposto",1]],
  why:"Dividendos Propostos só migram para o passivo após a aprovação."},

S11:{t:"mc", instr:"O recebimento antecipado de um cliente é creditado em qual conta?",
  options:["Adiantamento de Clientes, no passivo","Receita de Vendas, no resultado",
           "Duplicatas a Receber, no ativo","Reservas de Capital, no PL"],
  answer:0,
  why:"Há obrigação de entregar — a receita só nasce na entrega."},

S12:{t:"wordbank", instr:"Monte o lançamento do recebimento com desconto condicional concedido",
  target:["D","Caixa","D","Despesa","Financeira","C","Duplicatas","a","Receber"],
  extra:["Receita de Vendas","Adiantamento de Clientes","Estoques"],
  why:"O desconto condicional é despesa financeira do período do recebimento."},

S13:{t:"match", instr:"Ligue cada fórmula de lançamento à sua composição",
  pairs:[["1ª fórmula","1 débito e 1 crédito"],["2ª fórmula","1 débito e 2 ou mais créditos"],
         ["3ª fórmula","2 ou mais débitos e 1 crédito"],["4ª fórmula","2 ou mais débitos e 2 ou mais créditos"]],
  why:"A banca inverte a 2ª com a 3ª — repare de que lado está o “1”."},

S14:{t:"match", instr:"Ligue cada retificação do mnemônico TEC à sua definição",
  pairs:[["Transferência","Transpõe o registro da conta errada para a conta adequada"],
         ["Estorno","Lançamento inverso que anula totalmente o anterior"],
         ["Complementação","Lançamento posterior que aumenta ou reduz o valor registrado"]],
  why:"TEC — Transferência, Estorno, Complementação."},

S15:{t:"sort", instr:"É ato ou fato contábil?",
  buckets:["Ato contábil","Fato contábil"],
  items:[["Assinatura de contrato",0],["Contratação de funcionários",0],
         ["Compra de mercadorias a prazo",1],["Reconhecimento da depreciação",1],
         ["Venda de mercadorias",1]],
  why:"Atos vão para contas de compensação; não alteram o patrimônio."},

S16:{t:"sort", instr:"Classifique cada fato contábil",
  buckets:["Permutativo","Modificativo","Misto"],
  items:[["Compra de material de expediente à vista",0],
         ["Compra de mercadorias a prazo",0],
         ["Tomada de empréstimo bancário",0],
         ["Despesa de aluguel paga à vista",1],
         ["Venda de mercadorias a prazo",1],
         ["Reconhecimento da depreciação",1],
         ["Pagamento de duplicatas com juros",2],
         ["Recebimento de duplicatas com desconto concedido",2]],
  why:"Permutativo só tem contas patrimoniais; modificativo tem conta de resultado; misto tem os dois."},

S17:{t:"sort", instr:"O fato misto é aumentativo ou diminutivo?",
  buckets:["Aumentativo","Diminutivo"],
  items:[["Pagamento de duplicatas com desconto obtido",0],
         ["Recebimento de duplicatas com juros ativos",0],
         ["Pagamento de duplicatas com juros passivos",1],
         ["Recebimento de duplicatas com desconto concedido",1]],
  why:"Pergunte só se a conta de resultado que aparece é receita ou despesa."},

S18:{t:"gap", instr:"Complete a definição do fato permutativo",
  before:"Representa trocas entre elementos do ativo, do passivo ou entre ambos, ",
  after:" o patrimônio líquido.",
  options:["sem alterar quantitativamente","aumentando quantitativamente","reduzindo quantitativamente"], answer:0,
  why:"A alteração é apenas qualitativa."},

S19:{t:"multi", instr:"Marque o que é verdadeiro sobre o balancete de verificação",
  options:["É demonstrativo auxiliar e não obrigatório",
           "Relaciona contas patrimoniais e de resultado",
           "As contas são extraídas do livro razão",
           "Serve para confirmar se débito é igual a crédito",
           "Pode ter de duas até oito colunas",
           "É demonstração contábil prevista no CPC 26"],
  answers:[0,1,2,3,4],
  why:"Não está na Lei 6.404 nem no CPC 26."},

S20:{t:"mc", instr:"Em qual balancete os saldos vêm seguidos das letras D ou C?",
  options:["No de 4 colunas","No de 2 colunas","No de 6 colunas","No de 8 colunas"],
  answer:0,
  why:"Particularidade cobrada literalmente."},

S21:{t:"mc", instr:"De qual livro são extraídas as contas do balancete de verificação?",
  options:["Do livro razão","Do livro diário","Do livro caixa","Do livro de inventário"],
  answer:0,
  why:"Pegadinha frequente — diário é a escrituração cronológica."},

S22:{t:"gap", instr:"Complete a limitação do balancete",
  before:"O balancete não evidencia erro de escrituração quando o saldo final, credor e devedor, ",
  after:".",
  options:["fica igual","fica divergente","é zerado"], answer:0,
  why:"Um valor certo na conta errada passa despercebido."},

S23:{t:"mc", instr:"Terno vendido por R$ 800 com custo de R$ 300, sendo R$ 400 recebidos antecipadamente em janeiro e R$ 400 na entrega, em fevereiro. Qual o aumento do PL em fevereiro?",
  options:["R$ 500","R$ 100","R$ 400","R$ 800"],
  answer:0,
  why:"PL = receitas − despesas = 800 − 300."},

S24:{t:"mc", instr:"No mesmo exemplo, o que aconteceu com o ATIVO em fevereiro?",
  options:["Aumentou R$ 100","Aumentou R$ 400","Aumentou R$ 500","Não se alterou"],
  answer:0,
  why:"Entraram 400 de caixa e saíram 300 de estoque."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Contabilidade Geral 02","https://www.tecconcursos.com.br/s/Q2ZJVi","Q2ZJVi"],
  ["Caderno FCC — Contabilidade Geral 02","https://www.tecconcursos.com.br/s/Q2ZJW1","Q2ZJW1"],
  ["Caderno FGV — Contabilidade Geral 02","https://www.tecconcursos.com.br/s/Q294o1","Q294o1"],
  ["Caderno VUNESP — Contabilidade Geral 02","https://www.tecconcursos.com.br/s/Q2ZJWg","Q2ZJWg"]
];
var TECNOTA = "Este é o módulo mais mecânico da Contabilidade Geral — e o que mais rende, porque tudo depois se apoia nele. Faça questões de lançamento com papel ao lado: escreva o D e o C antes de olhar as alternativas. A classificação de fatos (permutativo, modificativo, misto) cai em praticamente toda prova de contador.";

var UNITS = [
  {n:1, title:"Escrituração e natureza das contas", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Partidas dobradas, regimes e natureza", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · escrituração e lançamento", xp:25, data:["S1","S2","T0","T1","T2","T3"]},
    {id:"K3", type:"drill",  title:"Praticar · caixa × competência",       xp:25, data:["S3","S4","T4","T5","T6","T7","T8"]},
    {id:"K4", type:"drill",  title:"Praticar · natureza das contas",       xp:25, data:["S5","S6","T9","T10","T11","T12"]},
    {id:"K5", type:"flash",  title:"Flashcards · escrituração e natureza", xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]}
  ]},
  {n:2, title:"Os lançamentos que mais caem", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Provisão, reservas, dividendos e descontos", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · provisão e antecipadas",    xp:25, data:["S7","S8","T13","T14","T15","T16","T17","T18"]},
    {id:"K8", type:"drill",  title:"Praticar · reservas e dividendos",     xp:25, data:["S9","S10","T19","T20","T21","T22","T23","T24"]},
    {id:"K9", type:"drill",  title:"Praticar · descontos e adiantamentos", xp:25, data:["S11","S12","T25","T26","T27","T28"]},
    {id:"K10",type:"flash",  title:"Flashcards · lançamentos",             xp:15, data:[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]}
  ]},
  {n:3, title:"Fórmulas, erros e fatos contábeis", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"As quatro fórmulas, o TEC e os três fatos", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · fórmulas e retificações",   xp:25, data:["S13","S14","T29","T30","T31","T32","T33"]},
    {id:"K13",type:"drill",  title:"Praticar · atos × fatos",              xp:25, data:["S15","S18","T34","T35","T36","T37","T38"]},
    {id:"K14",type:"drill",  title:"Praticar · permutativo, modificativo e misto", xp:25, data:["S16","S17","T39","T40","T41","T42","T43","T44","T45","T46"]},
    {id:"K15",type:"flash",  title:"Flashcards · fórmulas e fatos",        xp:15, data:[35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]}
  ]},
  {n:4, title:"Balancete de verificação", cvar:"u4", lessons:[
    {id:"K16",type:"teoria", title:"O que é, de onde vem e o que não faz", xp:10, data:"V4"},
    {id:"K17",type:"drill",  title:"Praticar · natureza do balancete",     xp:25, data:["S19","S20","T47","T48","T49","T50"]},
    {id:"K18",type:"drill",  title:"Praticar · livro razão e limitações",  xp:25, data:["S21","S22","T51","T52","T53","T54","T55"]},
    {id:"K19",type:"drill",  title:"Praticar · o caso do terno",           xp:25, data:["S23","S24","T56","T57"]},
    {id:"K20",type:"flash",  title:"Flashcards · balancete",               xp:15, data:[51,52,53,54,55,56,57,58]}
  ]},
  {n:5, title:"Fixação", cvar:"u5", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",              xp:60, data:null},
    {id:"K21", type:"missao", title:"Missão TEC Concursos",                xp:15, data:null},
    {id:"K22", type:"prova",  title:"Simulado cronometrado",               xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 02 de Contabilidade (Radegondes) ---------- */
var COM={
0:"<p>Conceito do resumo: escrituração é a técnica contábil que tem por objetivo <b>o registro, em livros próprios, de TODOS os fatos contábeis e ALGUNS atos administrativos</b>.</p><p>Ela observa quatro coisas: a <b>legislação em vigor</b>, o <b>método das partidas dobradas</b>, os <b>elementos do lançamento</b> e o <b>regime contábil</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Escrituração</i></p>",
1:"<p>O resumo diz <b>“alguns atos administrativos”</b>, e explica entre parênteses quais: <b>“atos que darão origem a fatos que provocarão alterações no Patrimônio”</b>.</p><p>Os demais atos vão para as <b>contas de compensação</b>, como ele mostra no tópico de atos e fatos.</p><p class='fb-fonte'>Resumo 02 · <i>Escrituração</i></p>",
2:"<p>Quadro do <b>método das partidas dobradas</b> no resumo, em três linhas: <b>“para todo débito há pelo menos um crédito de igual valor”</b> · <b>“a soma dos valores debitados será igual à soma dos valores creditados”</b> · <b>“toda aplicação tem uma origem”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Escrituração</i></p>",
3:"<p>Quadro <b>ELEMENTOS DO LANÇAMENTO</b>: <b>local e data</b> · <b>conta debitada</b> · <b>conta creditada</b> · <b>histórico</b> · <b>valor</b>.</p><p>São cinco. A escrituração é processada <b>por meio do lançamento contábil</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Escrituração</i></p>",
4:"<p>Quadro dos regimes: o <b>regime de caixa</b> <b>“considera RECEITA a entrada de dinheiro no caixa e DESPESA a saída de dinheiro do caixa”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Regimes de Escrituração</i></p>",
5:"<p>Trocou os dois. O <b>regime de competência</b> <b>“apropria receitas e despesas de acordo com o período de sua realização (FATO GERADOR), independentemente do efetivo recebimento das receitas ou do pagamento das despesas”</b>.</p><p>Quem olha o dinheiro é o regime de <b>caixa</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Regimes de Escrituração</i></p>",
6:"<p>Do quadro do regime de competência: <b>“RECEITAS → o fato gerador ocorre quando a empresa (1) presta o serviço ou (2) entrega a mercadoria, independentemente do recebimento do dinheiro”</b>.</p><p>E para as <b>despesas</b>: o fato gerador ocorre <b>quando a empresa consome um serviço</b>, pagas ou não.</p><p class='fb-fonte'>Resumo 02 · <i>Regimes de Escrituração</i></p>",
7:"<p>É o exemplo do próprio resumo: <b>“os salários referentes ao mês de dezembro de 2022, quando pagos em janeiro de 2023, serão reconhecidos como despesa em Jan/2023, pois o regime de caixa considera a data do pagamento”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Regimes de Escrituração — exemplo</i></p>",
8:"<p>É o <b>EXEMPLO DO REGIME DE COMPETÊNCIA</b> do resumo, com os mesmos dados: encomenda de R$ 30.000 recebida em fevereiro e março, produzida de março a maio, <b>entregue em junho</b>. Conclusão dele: <b>“a contabilização da receita somente ocorrerá em JUNHO (mês em que foi realizada a entrega)”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Regimes — exemplo</i></p>",
9:"<p>O raciocínio do resumo, passo a passo: a geração de um ativo (aplicação) <b>sempre depende de uma origem</b>; logo <b>“o ativo DEVE a existência dele ao passivo ou ao Patrimônio Líquido”</b>; e <b>“se o ativo DEVE a sua existência a alguém é porque a sua natureza é DEVEDORA”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Natureza das Contas</i></p>",
10:"<p>É o inverso. O resumo aplica a mesma lógica: <b>“as despesas são financiadas pelas receitas, ou seja, as despesas devem a sua existência às receitas. Nesse sentido, as DESPESAS possuem natureza DEVEDORA e as RECEITAS natureza CREDORA”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Natureza das Contas</i></p>",
11:"<p>Quadro-resumo do resumo: <b>PASSIVO</b> — natureza <b>credora</b>, aumenta a <b>crédito</b>, diminui a <b>débito</b>. <b>PATRIMÔNIO LÍQUIDO</b> — igual.</p><p class='fb-fonte'>Resumo 02 · <i>Natureza das Contas — quadro-resumo</i></p>",
12:"<p>Mesmo quadro: <b>ATIVO</b> e <b>DESPESAS</b> têm natureza <b>devedora</b> — aumentam a <b>débito</b> e diminuem a <b>crédito</b>.</p><p>O esquema visual do resumo agrupa assim: <b>DEVEDORA</b> = ativo + despesa · <b>CREDORA</b> = passivo + PL + receita.</p><p class='fb-fonte'>Resumo 02 · <i>Natureza das Contas — quadro-resumo</i></p>",
13:"<p>Lançamento padrão do resumo: <b>D – Despesa com Provisão</b> (conta de resultado, ↑ despesa) · <b>C – Provisão</b> (↑ passivo).</p><p class='fb-fonte'>Resumo 02 · <i>Principais Lançamentos — Provisão</i></p>",
14:"<p>A reversão, no resumo: <b>D – Provisão</b> (↓ passivo) · <b>C – Reversão de Provisão</b> (conta de resultado — receita, ↑ receita).</p><p class='fb-fonte'>Resumo 02 · <i>Principais Lançamentos — Provisão</i></p>",
15:"<p>No resumo, o pagamento da despesa antecipada é <b>D – Despesa Antecipada</b>, e ele explica entre parênteses: <b>“representa um direito” (↑ Ativo)</b> · <b>C – Caixa/Bancos</b> (↓ ativo).</p><p>Vira despesa só depois, na ocorrência do fato gerador.</p><p class='fb-fonte'>Resumo 02 · <i>Principais Lançamentos — Despesa Antecipada</i></p>",
16:"<p>Segundo lançamento do bloco: <b>D – Despesa</b> (conta de resultado) · <b>C – Despesa Antecipada</b>, que o resumo descreve como <b>“a baixa do direito” (↓ Ativo)</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Principais Lançamentos — Despesa Antecipada</i></p>",
17:"<p>Lançamento do resumo: <b>D – Despesa com Depreciação</b> (conta de resultado) · <b>C – Depreciação Acumulada</b>, que ele identifica como <b>“retificadora do ativo imobilizado” (↓ Ativo)</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Principais Lançamentos — Depreciação</i></p>",
18:"<p>Do resumo: <b>D – Juros</b> (despesa, conta de resultado) · <b>C – Juros a Pagar</b> (passivo — obrigação).</p><p>É competência: a despesa é reconhecida quando <b>incorre</b>, não quando é paga.</p><p class='fb-fonte'>Resumo 02 · <i>Principais Lançamentos — Despesa de Juros</i></p>",
19:"<p>Olhe o lançamento do resumo: <b>D – Lucros Acumulados (↓ PL)</b> · <b>C – Reservas de Lucros (↑ PL)</b>. Débito e crédito <b>dentro do próprio PL</b> — o total não muda.</p><p>É permuta, não aumento.</p><p class='fb-fonte'>Resumo 02 · <i>Principais Lançamentos — Reservas</i></p>",
20:"<p>Lançamento do resumo: <b>D – Reservas (↓ PL)</b> · <b>C – Capital Social (↑ PL)</b>.</p><p>No mesmo bloco ele traz também o uso de reservas <b>para compensar prejuízos</b>: D Reservas · C Prejuízos Acumulados.</p><p class='fb-fonte'>Resumo 02 · <i>Principais Lançamentos — Reservas</i></p>",
21:"<p>Do resumo: <b>D – Lucros Acumulados (↓ PL)</b> · <b>C – Dividendos a Pagar (↑ Passivo)</b>.</p><p>O obrigatório já nasce no <b>passivo</b> porque é obrigação certa.</p><p class='fb-fonte'>Resumo 02 · <i>Principais Lançamentos — Dividendo</i></p>",
22:"<p>O resumo separa as duas etapas do <b>dividendo adicional</b>. Na <b>proposta</b>: <b>D – Lucros Acumulados</b> · <b>C – Dividendos Propostos</b>, com a anotação dele: <b>“(↑ Patrimônio Líquido — ATÉ A APROVAÇÃO DA ASSEMBLEIA)”</b>.</p><p>Antes da assembleia fica no <b>PL</b>, não no passivo.</p><p class='fb-fonte'>Resumo 02 · <i>Principais Lançamentos — Dividendo</i></p>",
23:"<p>Segunda etapa, <b>após a aprovação</b>: <b>D – Dividendos Propostos (↓ PL)</b> · <b>C – Dividendos a Pagar (↑ Passivo)</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Principais Lançamentos — Dividendo</i></p>",
24:"<p>Caixa <b>ATENÇÃO!</b> do resumo: os <b>JSCP</b> têm <b>“tratamento contábil semelhante ao dado aos Dividendos Obrigatórios, conforme previsto no Manual de Contabilidade Societária”</b> — <b>D Lucros Acumulados (↓ PL)</b> · <b>C JSCP a Pagar (↑ Passivo)</b>.</p><p>E ele marca: <b>diminui o valor do Patrimônio Líquido</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Principais Lançamentos — Atenção!</i></p>",
25:"<p>Lançamento do resumo, com os números dele: <b>D – Caixa R$ 9.000</b> · <b>D – Despesa Financeira (desconto condicional) R$ 1.000</b> · <b>C – Duplicatas a Receber R$ 10.000</b>.</p><p>O desconto <b>condicional</b> é despesa <b>financeira</b>, reconhecida no recebimento.</p><p class='fb-fonte'>Resumo 02 · <i>Desconto Condicional Concedido</i></p>",
26:"<p>No <b>EXEMPLO</b> do terno, o resumo registra o adiantamento assim: <b>D – Caixa/Bancos R$ 400</b> · <b>C – Adiantamento de Clientes R$ 400</b>, com a explicação dele: <b>“conta do passivo, pois representa uma obrigação”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Exemplo do terno</i></p>",
27:"<p>É a justificativa que o próprio resumo dá para a conta: <b>“conta do passivo, pois representa uma obrigação”</b> — entregar o bem.</p><p>A receita só entra em fevereiro, quando a loja <b>entrega o terno</b> e o fato gerador ocorre.</p><p class='fb-fonte'>Resumo 02 · <i>Exemplo do terno</i></p>",
28:"<p>Do mesmo exemplo: <b>D – Custo das Mercadorias Vendidas R$ 300</b> (aumento de despesa) · <b>C – Estoques R$ 300</b> (diminuição do ativo).</p><p class='fb-fonte'>Resumo 02 · <i>Exemplo do terno</i></p>",
29:"<p>Quadro das <b>fórmulas de lançamento</b> no resumo: <b>2ª fórmula = 1 débito e 2 ou mais créditos (1D e 2C)</b>.</p><p>Quem tem <b>2 ou mais débitos e 1 crédito</b> é a <b>3ª</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Fórmulas de Lançamento</i></p>",
30:"<p>Quarta linha do quadro: <b>4ª fórmula = 2 ou mais débitos e 2 ou mais créditos (2D e 2C)</b>.</p><p>A sequência completa: 1ª 1D/1C · 2ª 1D/2C · 3ª 2D/1C · 4ª 2D/2C.</p><p class='fb-fonte'>Resumo 02 · <i>Fórmulas de Lançamento</i></p>",
31:"<p>Do resumo: os erros devem ser corrigidos mediante retificação do lançamento, <b>“que pode ser feita através do mnemônico TEC: Transferência; Estorno; Complementação”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Erros de Escrituração</i></p>",
32:"<p>Trocou as duas. Pelo quadro do resumo: <b>ESTORNO</b> = <b>“lançamento inverso àquele feito erroneamente, ANULANDO-O TOTALMENTE”</b>. <b>COMPLEMENTAÇÃO</b> = <b>“lançamento que vem posteriormente complementar, aumentando ou reduzindo o valor anteriormente registrado”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Erros de Escrituração</i></p>",
33:"<p>Do quadro: <b>TRANSFERÊNCIA</b> = <b>“corrige a conta indevidamente debitada ou creditada, por meio da transposição do registro para a conta adequada”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Erros de Escrituração</i></p>",
34:"<p>Do resumo: os <b>ATOS</b> contábeis (ou atos administrativos) <b>“são aqueles que NÃO provocam alteração no Patrimônio. Eles são registrados em CONTAS DE COMPENSAÇÃO”</b>.</p><p>Exemplos dele: <b>assinatura de contrato</b> e <b>contratação de funcionários</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Atos e Fatos Contábeis</i></p>",
35:"<p><b>Contratação de funcionários</b> é um dos dois exemplos de <b>ATO</b> contábil do resumo — não altera o patrimônio e vai para conta de compensação.</p><p>Fato modificativo exige <b>pelo menos uma conta de resultado</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Atos e Fatos Contábeis</i></p>",
36:"<p>Do resumo: os <b>permutativos</b> <b>“representam trocas (permutas) entre elementos do Ativo, Passivo ou entre ambos, SEM alterar quantitativamente o PL. Ou seja, alteram QUALITATIVAMENTE o patrimônio”</b>.</p><p>Ele acrescenta que pode haver permuta <b>dentro do próprio PL</b> — é o caso da constituição de reservas.</p><p class='fb-fonte'>Resumo 02 · <i>Atos e Fatos Contábeis</i></p>",
37:"<p>Do resumo, duas marcas do fato <b>modificativo</b>: <b>“provocam alterações quantitativas, aumentativas ou diminutivas, no PL”</b> e <b>“envolve pelo menos uma conta de resultado”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Atos e Fatos Contábeis</i></p>",
38:"<p>Do resumo: os <b>mistos</b> <b>“envolvem ao mesmo tempo um fato permutativo e um fato modificativo”</b> — e o esquema os separa em <b>aumentativo</b> (permuta + aumento do PL) e <b>diminutivo</b> (permuta + diminuição do PL).</p><p class='fb-fonte'>Resumo 02 · <i>Atos e Fatos Contábeis</i></p>",
39:"<p>É o <b>exemplo 2 de fato PERMUTATIVO</b> do resumo: aquisição de mercadorias a prazo — <b>D Estoque de Mercadorias (↑ Ativo)</b> · <b>C Fornecedores (↑ Passivo)</b>, com a anotação <b>“permuta entre elementos do Ativo e Passivo”</b>.</p><p>Nenhuma conta de resultado entrou, logo o PL não mudou.</p><p class='fb-fonte'>Resumo 02 · <i>Exemplos de Fato Permutativo</i></p>",
40:"<p>É o <b>exemplo 3</b> do resumo: <b>D Bancos (↑ Ativo)</b> · <b>C Empréstimos a pagar (↑ Passivo)</b> — <b>“permuta entre elementos do Ativo e Passivo”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Exemplos de Fato Permutativo</i></p>",
41:"<p><b>Exemplo 2 de fato MODIFICATIVO</b> do resumo: venda de mercadorias a prazo — <b>D Clientes (↑ Ativo)</b> · <b>C Receita de Vendas (Receita — ↑ PL)</b>, classificado por ele como <b>modificativo AUMENTATIVO</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Exemplos de Fato Modificativo</i></p>",
42:"<p><b>Exemplo 3</b> do mesmo bloco: <b>D Despesa com Depreciação (Despesa — ↓ PL)</b> · <b>C Depreciação Acumulada (↓ Ativo)</b> — <b>modificativo DIMINUTIVO</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Exemplos de Fato Modificativo</i></p>",
43:"<p><b>Exemplo 1 de fato MISTO</b> do resumo: pagamento de duplicatas com juros — <b>D Duplicatas a Pagar (↓ Passivo)</b> · <b>D Juros Passivos (despesa — ↓ PL)</b> · <b>C Caixa/Bancos</b>. Ele classifica como <b>misto DIMINUTIVO</b>.</p><p>Regra prática: entrou <b>despesa</b> → diminutivo; entrou <b>receita</b> → aumentativo.</p><p class='fb-fonte'>Resumo 02 · <i>Exemplos de Fato Misto</i></p>",
44:"<p><b>Exemplo 2</b>: pagamento de duplicatas com desconto — <b>D Duplicatas a Pagar</b> · <b>C Descontos Obtidos (Receita — ↑ PL)</b> · <b>C Caixa/Bancos</b>. Classificação do resumo: <b>misto AUMENTATIVO</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Exemplos de Fato Misto</i></p>",
45:"<p><b>Exemplo 3</b>: recebimento com juros ativos — <b>D Caixa/Bancos</b> · <b>C Juros Ativos (Receita — ↑ PL)</b> · <b>C Duplicatas a Receber</b>. Classificação: <b>misto AUMENTATIVO</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Exemplos de Fato Misto</i></p>",
46:"<p><b>Exemplo 4</b>: recebimento com desconto concedido — <b>D Caixa/Bancos</b> · <b>D Desconto Concedido (Despesa — ↓ PL)</b> · <b>C Duplicatas a Receber</b>. Classificação: <b>misto DIMINUTIVO</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Exemplos de Fato Misto</i></p>",
47:"<p>Quadro do resumo, duas linhas: o balancete é <b>“um demonstrativo de caráter auxiliar (NÃO OBRIGATÓRIO)”</b> e <b>“NÃO é uma demonstração contábil (não está na Lei 6.404 e no CPC 26)”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Balancete de Verificação</i></p>",
48:"<p>Do quadro: <b>“as contas são extraídas do LIVRO RAZÃO (não livro diário)”</b> — o parêntese é do resumo, escrito exatamente contra essa troca.</p><p class='fb-fonte'>Resumo 02 · <i>Balancete de Verificação</i></p>",
49:"<p>Primeira linha do quadro: <b>“relaciona TODAS as contas (patrimoniais + resultado)”</b>. E, mais abaixo: <b>“é um resumo ordenado das contas utilizadas pela contabilidade naquele determinado período”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Balancete de Verificação</i></p>",
50:"<p>Do quadro: <b>“serve para confirmar se o método das partidas dobradas está correto (débito igual a crédito)”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Balancete de Verificação</i></p>",
51:"<p>Do quadro: <b>“pode ser de 2 até 8 colunas”</b> — e o resumo traz um exemplo de cada extremo.</p><p class='fb-fonte'>Resumo 02 · <i>Balancete de Verificação</i></p>",
52:"<p>Linha literal do quadro: <b>“apenas no balancete de 04 colunas que os saldos contábeis vêm seguidos das letras D (débito) ou C (crédito)”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Balancete de Verificação</i></p>",
53:"<p>Do quadro: <b>“NÃO evidencia erro de escrituração quando o saldo final (credor e devedor) fica igual”</b>.</p><p>Erro de conta trocada, por exemplo, mantém a igualdade e passa despercebido.</p><p class='fb-fonte'>Resumo 02 · <i>Balancete de Verificação</i></p>",
54:"<p>Do quadro: <b>“não é uma demonstração contábil (não está na Lei 6.404 e no CPC 26)”</b>, e é <b>“utilizado para fins operacionais da empresa, pois não possui obrigatoriedade”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Balancete de Verificação</i></p>",
55:"<p>Terceira linha do quadro das partidas dobradas: <b>“toda aplicação tem uma origem”</b>.</p><p>É a mesma lógica que o resumo usa depois para deduzir a natureza das contas.</p><p class='fb-fonte'>Resumo 02 · <i>Escrituração</i></p>",
56:"<p>Do fechamento do <b>EXEMPLO</b> do terno no resumo: em fevereiro houve <b>“um aumento de R$ 500 no Patrimônio Líquido”</b> — receita de 800 menos o CMV de 300.</p><p class='fb-fonte'>Resumo 02 · <i>Exemplo do terno</i></p>",
57:"<p>O próprio resumo faz a conta: <b>“um aumento de R$ 100 no Ativo (400 – 300)”</b> — entraram R$ 400 de caixa e saíram R$ 300 de estoque.</p><p>Ele registra ainda a <b>diminuição de R$ 400 no Passivo</b>, pela baixa do adiantamento.</p><p class='fb-fonte'>Resumo 02 · <i>Exemplo do terno</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"02", nome:"Escrituração, natureza das contas e fatos contábeis", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
