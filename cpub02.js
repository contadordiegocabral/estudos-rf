/* Contabilidade Pública — Módulo 02: NBC TSP Estrutura Conceitual (Parte 02) */
window.MOD = window.MOD || {};
window.MOD.cpub02 = (function(){
"use strict";

var CARDS = [
  ["O que é a entidade que reporta a informação contábil (item 4.1)?","<b>Ente governamental ou outra organização, programa ou outra área identificável de atividade</b> que <b>elabora os RCPGs</b>."],
  ["Precisa ser um órgão com personalidade jurídica?","<b>Não.</b> Pode ser um <b>programa</b> ou uma <b>área identificável de atividade</b> — o critério é elaborar os RCPGs."],
  ["Primeira característica-chave da entidade que reporta (item 4.3, a)","<b>Captar recursos da sociedade ou em nome dela</b> e/ou <b>utilizar recursos para realizar atividades em benefício dela</b>."],
  ["Segunda característica-chave (item 4.3, b)","<b>Existirem usuários de serviços ou provedores de recursos dependentes</b> das informações dos RCPGs para <b>prestação de contas, accountability e tomada de decisão</b>."],
  ["O que são os elementos das demonstrações contábeis (item 5.2)?","As <b>classes amplas</b> que agrupam os efeitos financeiros e não financeiros das transações e que compartilham <b>características econômicas comuns</b> — as <b>estruturas básicas</b> a partir das quais as demonstrações são elaboradas."],
  ["Para que servem os elementos?","Fornecem o <b>ponto inicial</b> para <b>reconhecer, classificar e agregar</b> dados e atividades econômicas de modo a satisfazer aos objetivos e às características qualitativas, observadas as restrições."],
  ["Quais são os seis elementos (item 5.5)?","<b>Ativo</b> · <b>Passivo</b> · <b>Receita</b> · <b>Despesa</b> · <b>Contribuição dos proprietários</b> · <b>Distribuição aos proprietários</b>."],
  ["Patrimônio líquido é elemento das demonstrações na NBC TSP?","<b>Não</b> está no rol do item 5.5 — os seis elementos são ativo, passivo, receita, despesa, contribuição e distribuição aos proprietários."],
  ["Como memorizar os seis elementos","Os <b>dois do balanço</b> (ativo e passivo), os <b>dois do resultado</b> (receita e despesa) e os <b>dois dos proprietários</b> (contribuição e distribuição)."],
  ["Definição de ativo (item 5.6)","<b>Recurso controlado no presente pela entidade como resultado de evento passado.</b>"],
  ["O que é recurso (item 5.7)?","<b>Item com potencial de serviços ou com a capacidade de gerar benefícios econômicos.</b> A <b>forma física não é condição necessária</b>."],
  ["Que direitos podem integrar um recurso (item 5.7)?","<b>a)</b> utilizar o recurso para prestar serviços; <b>b)</b> utilizar recursos de terceiros para prestar serviços (arrendamento); <b>c)</b> converter o recurso em caixa pela alienação; <b>d)</b> beneficiar-se da valorização; <b>e)</b> receber fluxos de caixa."],
  ["O que é potencial de serviços (item 5.8)?","A <b>capacidade de prestar serviços que contribuam para alcançar os objetivos da entidade</b> — possibilita alcançá-los <b>sem necessariamente gerar entrada líquida de caixa</b>."],
  ["Potencial de serviços × benefícios econômicos","<b>Potencial de serviços</b> é típico do setor público: a universidade pública presta serviço sem gerar caixa. <b>Benefício econômico</b> é a geração de fluxo de caixa."],
  ["Quais são os quatro indicadores de controle (item 5.12)?","<b>a)</b> propriedade legal; <b>b)</b> acesso ao recurso ou capacidade de negar ou restringir o acesso; <b>c)</b> meios que assegurem que o recurso seja utilizado para alcançar os objetivos; <b>d)</b> existência de direito legítimo ao potencial de serviços ou aos benefícios econômicos."],
  ["Os indicadores de controle são conclusivos?","<b>Não.</b> “Embora esses indicadores <b>não sejam determinantes conclusivos</b> acerca da existência do controle, sua identificação e análise podem <b>subsidiar</b> essa decisão.”"],
  ["A propriedade legal é essencial para haver ativo (item 5.12A)?","<b>Não.</b> Ela é <b>um indicador de controle</b>, mas <b>não é característica essencial</b> do ativo — uma máquina <b>arrendada</b> pode ser ativo do arrendatário."],
  ["O que é arrendamento?","Operação em que a <b>arrendadora</b> concede o uso de um ativo à <b>arrendatária</b> por prazo determinado. A arrendatária <b>usa e reconhece</b> o ativo, sem ser proprietária."],
  ["Definição de passivo (item 5.14)","<b>Obrigação presente, derivada de evento passado, cuja extinção deva resultar na saída de recursos da entidade.</b>"],
  ["Obrigação que se extingue sem saída de recursos é passivo (item 5.16)?","<b>Não.</b> “A obrigação que pode ser liquidada ou extinta <b>sem a saída de recursos</b> da entidade <b>não é um passivo</b>.”"],
  ["O que é poder soberano (item 5.22)?","A <b>autoridade maior do governo para fazer, aditar e vetar os dispositivos legais</b>."],
  ["O poder soberano afasta o passivo?","<b>Não.</b> Sua existência <b>não é condição</b> para concluir que a obrigação não satisfaz a definição de passivo — a <b>situação jurídica deve ser avaliada a cada apresentação</b> da informação contábil."],
  ["Definição de receita (item 5.29)","<b>Aumentos na situação patrimonial líquida</b> da entidade <b>não oriundos de contribuições dos proprietários</b>."],
  ["Definição de despesa (item 5.30)","<b>Diminuições na situação patrimonial líquida</b> da entidade <b>não oriundas de distribuições aos proprietários</b>."],
  ["De onde se originam receitas e despesas (item 5.31)?","De transações <b>com</b> e <b>sem contraprestação</b>; de <b>aumentos e decréscimos não realizados</b> de ativos e passivos; do <b>consumo dos ativos por depreciação</b>; e da <b>redução ao valor recuperável</b>. Podem vir de transações <b>individuais ou de grupos</b>."],
  ["O que é transação com contraprestação?","A entidade <b>recebe algo</b> (dinheiro, bens ou serviços) <b>em troca</b> de assumir uma obrigação."],
  ["O que é transação sem contraprestação?","A entidade <b>recebe um ativo sem assumir passivo</b> (aí há <b>receita</b>) ou <b>assume um passivo sem receber nada em troca</b> (aí há <b>despesa</b>)."],
  ["Definição de contribuição dos proprietários (item 5.33)","<b>Entrada de recursos</b> para a entidade a título de contribuição de <b>partes externas</b>, que <b>estabelece ou aumenta</b> a participação delas no patrimônio líquido."],
  ["Definição de distribuição aos proprietários (item 5.34)","<b>Saída de recursos</b> da entidade a título de distribuição a <b>partes externas</b>, que representa <b>retorno sobre a participação</b> ou a <b>redução</b> dessa participação no patrimônio líquido."],
  ["Quais as cinco bases de mensuração para ATIVOS (item 7.6)?","<b>Custo histórico</b> · <b>Valor de mercado</b> · <b>Custo de reposição ou substituição</b> · <b>Preço líquido de venda</b> · <b>Valor em uso</b>."],
  ["Custo histórico do ativo (item 7.13)","A <b>importância fornecida para adquirir ou desenvolver</b> o ativo — caixa, equivalentes de caixa ou o valor de outra importância fornecida <b>à época</b> da aquisição."],
  ["Por que o custo histórico ainda é a base mais usada?","Porque fica “congelado” e por isso é altamente <b>verificável</b>. Quanto maior a variação de mercado e a inflação, <b>menos relevante</b> ele fica — mas a verificabilidade o mantém como regra."],
  ["O que são mensurações a valor corrente (item 7.22)?","As que <b>refletem o ambiente econômico vigente na data de apresentação do relatório</b>."],
  ["Quantas bases a valor corrente existem para ativos (item 7.23)?","<b>Quatro</b>: valor de mercado; custo de reposição ou substituição; preço líquido de venda; valor em uso. O <b>custo histórico fica de fora</b>."],
  ["Valor de mercado para ativos (item 7.24)","Montante pelo qual o ativo pode ser <b>trocado entre partes cientes e dispostas</b>, em transação <b>sob condições normais de mercado</b>."],
  ["Custo de reposição ou substituição (item 7.37)","O <b>custo mais econômico exigido</b> para a entidade <b>substituir o potencial de serviços</b> do ativo — inclusive o montante que ela recebe na alienação ao fim da vida útil — <b>na data do relatório</b>."],
  ["Preço líquido de venda (item 7.49)","O montante que a entidade <b>pode obter com a venda do ativo após deduzir os gastos para a venda</b>."],
  ["Valor em uso (item 7.58)","O <b>valor presente</b>, para a entidade, do <b>potencial de serviços ou dos benefícios econômicos remanescentes</b> caso o ativo continue a ser usado, <b>e</b> do <b>valor líquido</b> que receberá pela alienação ao fim da vida útil."],
  ["Quais as cinco bases de mensuração para PASSIVOS (item 7.69)?","<b>Custo histórico</b> · <b>Custo de cumprimento da obrigação</b> · <b>Valor de mercado</b> · <b>Custo de liberação</b> · <b>Preço presumido</b>."],
  ["Custo histórico do passivo (item 7.70)","A <b>importância recebida para assumir a obrigação</b> — caixa, equivalentes ou o valor de outra importância recebida <b>à época</b> em que a entidade incorreu no passivo."],
  ["Custo de cumprimento da obrigação (item 7.74)","Os custos em que a entidade incorre <b>ao cumprir as obrigações</b> representadas pelo passivo, <b>assumindo que o faz da maneira menos onerosa</b>."],
  ["Valor de mercado para passivos (item 7.80)","Montante pelo qual o passivo pode ser <b>liquidado entre partes cientes e interessadas</b>, em transação sob <b>condições normais de mercado</b>."],
  ["Custo de liberação (item 7.82)","Montante correspondente à <b>baixa imediata da obrigação</b>: o que o <b>credor aceita</b> no cumprimento da sua demanda, ou o que <b>terceiros cobrariam</b> para aceitar a transferência do passivo. Havendo mais de um modo, é o <b>menor montante</b>."],
  ["Preço presumido (item 7.87)","O montante que a entidade <b>racionalmente aceitaria na troca pela assunção do passivo existente</b>. As transações <b>com contraprestação</b> em condições normais fornecem <b>evidência</b> do preço presumido — as <b>sem contraprestação, não</b>."],
  ["Os dois pares espelhados entre ativo e passivo","<b>Preço líquido de venda</b> (ativo) ↔ <b>custo de liberação</b> (passivo). <b>Custo de reposição</b> (ativo) ↔ <b>preço presumido</b> (passivo)."],
  ["Quadro comparativo das bases — as duas colunas","<b>Ativo:</b> custo histórico · valor de mercado · custo de reposição ou substituição · preço líquido de venda · valor em uso. <b>Passivo:</b> custo histórico · valor de mercado · custo de cumprimento da obrigação · custo de liberação · preço presumido."],
  ["Quais bases aparecem nas duas colunas?","<b>Custo histórico</b> e <b>valor de mercado</b> — as únicas com o mesmo nome no ativo e no passivo."],
  ["À luz de que as bases são discutidas (item 7.6)?","Da informação que fornecem sobre o <b>custo dos serviços prestados</b>, a <b>capacidade operacional</b> e a <b>capacidade financeira</b> da entidade, e da extensão em que satisfazem as <b>características qualitativas</b>."]
];

var QS = [
  ["A entidade do setor público que reporta a informação contábil é um ente governamental ou outra organização, programa ou outra área identificável de atividade que elabora os RCPGs.","C","FUNDATEC","Item 4.1 — inclusive programas e áreas de atividade."],
  ["Somente entes com personalidade jurídica própria podem ser considerados entidades que reportam a informação contábil.","E","CESPE","O item 4.1 alcança programa e área identificável de atividade."],
  ["É característica-chave da entidade que reporta captar recursos da sociedade ou em nome desta e utilizar recursos para realizar atividades em benefício dela.","C","FCC","Item 4.3, alínea a."],
  ["É característica-chave da entidade que reporta a existência de usuários de serviços ou provedores de recursos dependentes das informações dos RCPGs.","C","FGV","Item 4.3, alínea b."],
  ["As demonstrações contábeis retratam os efeitos financeiros e não financeiros das transações, agrupando-os em classes amplas que compartilham características econômicas comuns.","C","VUNESP","Item 5.2 — essas classes são os elementos."],
  ["Os elementos correspondem às estruturas básicas a partir das quais as demonstrações contábeis são elaboradas.","C","CESPE","Item 5.2 — fornecem o ponto inicial para reconhecer, classificar e agregar."],
  ["São elementos das demonstrações contábeis o ativo, o passivo, a receita, a despesa, a contribuição dos proprietários e a distribuição aos proprietários.","C","FUNDATEC","Item 5.5 — são seis."],
  ["O patrimônio líquido figura expressamente entre os elementos das demonstrações contábeis na NBC TSP Estrutura Conceitual.","E","FCC","O rol do item 5.5 não o inclui."],
  ["São elementos das demonstrações contábeis o ativo, o passivo e o patrimônio líquido, apenas.","E","FGV","Faltam receita, despesa, contribuição e distribuição aos proprietários — e o PL não está no rol."],
  ["Os elementos fornecem o ponto inicial para reconhecer, classificar e agregar dados e atividades econômicas.","C","CESPE","Item 5.2."],
  ["Ativo é um recurso controlado no presente pela entidade como resultado de evento passado.","C","FUNDATEC","Item 5.6 — literalidade muito cobrada."],
  ["Ativo é um recurso de propriedade da entidade adquirido em evento passado.","E","FCC","A definição fala em <b>controlado</b>, não em propriedade."],
  ["Recurso é um item com potencial de serviços ou com a capacidade de gerar benefícios econômicos.","C","VUNESP","Item 5.7."],
  ["A forma física é condição necessária para que um item seja considerado recurso.","E","CESPE","O item 5.7 diz expressamente que não é."],
  ["O potencial de serviços é a capacidade de prestar serviços que contribuam para alcançar os objetivos da entidade.","C","FGV","Item 5.8."],
  ["O potencial de serviços pressupõe a geração de entrada líquida de caixa para a entidade.","E","FUNDATEC","O item 5.8 diz que possibilita alcançar os objetivos <b>sem necessariamente</b> gerar entrada líquida de caixa."],
  ["São indicadores de controle a propriedade legal, o acesso ao recurso ou a capacidade de negar ou restringir esse acesso, os meios que assegurem a utilização do recurso para alcançar os objetivos e a existência de direito legítimo ao potencial de serviços.","C","CESPE","Item 5.12 — quatro indicadores."],
  ["A propriedade legal é indicador capaz de revelar de forma conclusiva se a entidade detém o controle de determinado recurso.","E","FCC","Os indicadores <b>não são determinantes conclusivos</b>; apenas subsidiam a decisão."],
  ["A propriedade legal do recurso é característica essencial de um ativo.","E","FGV","Item 5.12A — é <b>indicador de controle</b>, não característica essencial."],
  ["Um item patrimonial arrendado pode ser reconhecido como ativo pela arrendatária, ainda que não lhe pertença.","C","VUNESP","Item 5.12A — os direitos ao potencial de serviços existem sem a propriedade legal."],
  ["Passivo é uma obrigação presente, derivada de evento passado, cuja extinção deva resultar na saída de recursos da entidade.","C","FUNDATEC","Item 5.14."],
  ["A obrigação que pode ser liquidada ou extinta sem a saída de recursos da entidade é um passivo.","E","CESPE","Item 5.16 — exatamente o contrário: não é passivo."],
  ["Poder soberano é a autoridade maior do governo para fazer, aditar e vetar os dispositivos legais.","C","FCC","Item 5.22."],
  ["A existência do poder soberano é condição suficiente para se concluir que a obrigação não satisfaz a definição de passivo.","E","FGV","Item 5.22 — não é condição; a situação jurídica deve ser avaliada a cada apresentação."],
  ["A situação jurídica da obrigação deve ser avaliada a cada apresentação da informação contábil para determinar se ela deixa de satisfazer a definição de passivo.","C","VUNESP","Item 5.22."],
  ["Receita corresponde a aumentos na situação patrimonial líquida da entidade não oriundos de contribuições dos proprietários.","C","FUNDATEC","Item 5.29."],
  ["Despesa corresponde a diminuições na situação patrimonial líquida da entidade não oriundas de distribuições aos proprietários.","C","CESPE","Item 5.30."],
  ["Receita corresponde a qualquer aumento na situação patrimonial líquida, inclusive o decorrente de contribuição dos proprietários.","E","FCC","A contribuição dos proprietários é justamente a exceção da definição."],
  ["Receitas e despesas originam-se apenas de transações com contraprestação.","E","FGV","Item 5.31 — também de transações sem contraprestação e de outros eventos."],
  ["O consumo dos ativos por meio da depreciação é uma das origens de despesa previstas na Estrutura Conceitual.","C","VUNESP","Item 5.31."],
  ["A redução do potencial de serviços por meio da redução ao valor recuperável origina despesa.","C","FUNDATEC","Item 5.31 — o impairment."],
  ["Receitas e despesas podem originar-se de transações individuais ou de grupos de transações.","C","CESPE","Parte final do item 5.31."],
  ["Na transação sem contraprestação em que a entidade recebe um ativo sem assumir passivo, ocorre uma receita.","C","FCC","E, quando assume passivo sem receber nada, ocorre despesa."],
  ["Contribuição dos proprietários corresponde a entrada de recursos a título de contribuição de partes externas, que estabelece ou aumenta a participação delas no patrimônio líquido da entidade.","C","FGV","Item 5.33."],
  ["Distribuição aos proprietários corresponde a saída de recursos a título de distribuição a partes externas, representando retorno sobre a participação ou a redução dessa participação no patrimônio líquido.","C","VUNESP","Item 5.34."],
  ["A distribuição aos proprietários é classificada como despesa da entidade.","E","FUNDATEC","Despesa é a diminuição da situação patrimonial líquida <b>não oriunda</b> de distribuição aos proprietários."],
  ["A contribuição dos proprietários é classificada como receita da entidade.","E","CESPE","Receita é o aumento <b>não oriundo</b> de contribuição dos proprietários."],
  ["São bases de mensuração para os ativos o custo histórico, o valor de mercado, o custo de reposição ou substituição, o preço líquido de venda e o valor em uso.","C","FCC","Item 7.6 — cinco bases."],
  ["As bases de mensuração para os ativos são discutidas à luz da informação que fornecem sobre o custo dos serviços prestados, a capacidade operacional e a capacidade financeira da entidade.","C","FGV","Item 7.6 — e da satisfação das características qualitativas."],
  ["Custo histórico de um ativo é a importância fornecida para se adquirir ou desenvolver o ativo.","C","FUNDATEC","Item 7.13 — caixa, equivalentes ou outra importância à época."],
  ["As mensurações a valor corrente refletem o ambiente econômico vigente na data de apresentação do relatório.","C","VUNESP","Item 7.22."],
  ["Existem quatro bases de mensuração a valor corrente para os ativos: valor de mercado, custo de reposição ou substituição, preço líquido de venda e valor em uso.","C","CESPE","Item 7.23 — o custo histórico não é base a valor corrente."],
  ["O custo histórico é uma das bases de mensuração a valor corrente para os ativos.","E","FCC","Item 7.23 — ele fica de fora das quatro."],
  ["Valor de mercado para ativos é o montante pelo qual um ativo pode ser trocado entre partes cientes e dispostas, em transação sob condições normais de mercado.","C","FGV","Item 7.24."],
  ["Custo de reposição ou substituição é o custo mais econômico exigido para a entidade substituir o potencial de serviços de ativo na data do relatório.","C","FUNDATEC","Item 7.37 — inclui o montante recebido na alienação ao fim da vida útil."],
  ["Preço líquido de venda é o montante que a entidade pode obter com a venda do ativo, sem qualquer dedução.","E","VUNESP","Item 7.49 — deduzem-se os <b>gastos para a venda</b>."],
  ["Valor em uso é o valor presente do potencial de serviços ou da capacidade de gerar benefícios econômicos remanescentes do ativo, caso continue a ser utilizado, e do valor líquido de sua alienação ao final da vida útil.","C","CESPE","Item 7.58 — são os dois componentes."],
  ["São bases de mensuração para os passivos o custo histórico, o custo de cumprimento da obrigação, o valor de mercado, o custo de liberação e o preço presumido.","C","FUNDATEC","Item 7.69 — cinco bases."],
  ["Custo histórico para o passivo é a importância recebida para se assumir uma obrigação.","C","FCC","Item 7.70 — no ativo é a importância <b>fornecida</b>; no passivo, a <b>recebida</b>."],
  ["Custo de cumprimento da obrigação corresponde aos custos nos quais a entidade incorre no cumprimento das obrigações, assumindo que o faz da maneira menos onerosa.","C","FGV","Item 7.74."],
  ["Valor de mercado para passivos é o montante pelo qual um passivo pode ser liquidado entre partes cientes e interessadas em transação sob condições normais de mercado.","C","VUNESP","Item 7.80."],
  ["O custo de liberação corresponde, no contexto dos passivos, ao mesmo conceito do custo de reposição no contexto dos ativos.","E","CESPE","O custo de liberação espelha o <b>preço líquido de venda</b>. Quem espelha o custo de reposição é o <b>preço presumido</b>."],
  ["Havendo mais de um modo de garantir a liberação do passivo, o custo de liberação é aquele que representa o menor montante.","C","FUNDATEC","Item 7.82 — coerente com a lógica do preço líquido de venda."],
  ["O preço presumido representa o montante que a entidade racionalmente aceitaria na troca pela assunção do passivo existente.","C","FCC","Item 7.87 — espelha o custo de reposição do ativo."],
  ["As transações sem contraprestação fornecem evidência do preço presumido.","E","FGV","Item 7.87 — são as <b>com</b> contraprestação, em condições normais, que fornecem essa evidência."],
  ["O custo histórico e o valor de mercado figuram entre as bases de mensuração tanto dos ativos quanto dos passivos.","C","VUNESP","São as duas bases com o mesmo nome nas duas colunas."],
  ["O valor em uso é base de mensuração aplicável tanto a ativos quanto a passivos.","E","CESPE","O valor em uso é só do <b>ativo</b>. No passivo, a quinta base é o <b>preço presumido</b>."],
  ["O custo de cumprimento da obrigação é base de mensuração aplicável aos ativos.","E","FUNDATEC","É base exclusiva do <b>passivo</b> (item 7.69). No ativo, a correspondente em espírito seria o custo de reposição."]
];

var FEY = {
  U1:{ask:"Explique a entidade que reporta a informação contábil e os elementos das demonstrações.",
    hint:"O conceito do item 4.1 com sua abrangência; as duas características-chave do item 4.3; o que são elementos e para que servem; e o rol dos seis.",
    ref:"Segundo o item 4.1 da NBC TSP Estrutura Conceitual, a entidade do setor público que reporta a informação contábil é um ente governamental ou outra organização, programa ou outra área identificável de atividade que elabora os Relatórios Contábeis de Propósito Geral — de modo que não se exige personalidade jurídica própria, bastando tratar-se de área identificável de atividade que elabore os RCPGs. O item 4.3 fixa duas características-chave dessa entidade: ser uma entidade que capta recursos da sociedade ou em nome desta e/ou utiliza recursos para realizar atividades em benefício dela; e existirem usuários de serviços ou provedores de recursos dependentes das informações contidas nos RCPGs para fins de prestação de contas e responsabilização — accountability — e tomada de decisão. Quanto aos elementos, o item 5.2 estabelece que as demonstrações contábeis retratam os efeitos financeiros e não financeiros das transações e de outros eventos ao agrupá-los em classes amplas que compartilham características econômicas comuns, classes essas denominadas elementos das demonstrações contábeis, que correspondem às estruturas básicas a partir das quais as demonstrações são elaboradas e fornecem o ponto inicial para reconhecer, classificar e agregar dados e atividades econômicas, de maneira a fornecer aos usuários informação que satisfaça aos objetivos e atinja as características qualitativas, consideradas as restrições. O item 5.5 relaciona seis elementos: ativo, passivo, receita, despesa, contribuição dos proprietários e distribuição aos proprietários — não figurando expressamente o patrimônio líquido nesse rol."},
  U2:{ask:"Explique as definições de ativo e de passivo na NBC TSP Estrutura Conceitual.",
    hint:"Ativo: definição, o que é recurso, potencial de serviços, indicadores de controle e a questão da propriedade legal. Passivo: definição, a exigência de saída de recursos e o poder soberano.",
    ref:"Ativo, na dicção do item 5.6, é um recurso controlado no presente pela entidade como resultado de evento passado. Recurso, por sua vez, é definido no item 5.7 como um item com potencial de serviços ou com a capacidade de gerar benefícios econômicos, não sendo a forma física uma condição necessária, e podendo esse potencial ou capacidade surgir diretamente do próprio recurso ou dos direitos de sua utilização — entre os quais o direito de utilizar o recurso para a prestação de serviços, de utilizar recursos de terceiros para prestar serviços, como no arrendamento mercantil, de converter o recurso em caixa por meio da alienação, de beneficiar-se da valorização do recurso ou de receber fluxos de caixa. O potencial de serviços, conceituado no item 5.8, é a capacidade de prestar serviços que contribuam para alcançar os objetivos da entidade, possibilitando alcançá-los sem que necessariamente se gere entrada líquida de caixa — nota marcadamente do setor público. Para avaliar se a entidade controla o recurso no presente, o item 5.12 indica quatro indicadores de controle: a propriedade legal; o acesso ao recurso ou a capacidade de negar ou restringir esse acesso; os meios que assegurem que o recurso seja utilizado para alcançar os objetivos; e a existência de direito legítimo ao potencial de serviços ou à capacidade de gerar benefícios econômicos — advertindo a norma que tais indicadores não são determinantes conclusivos acerca da existência do controle, embora sua identificação e análise possam subsidiar a decisão. O item 5.12A esclarece que a propriedade legal é apenas um dos métodos para verificar o potencial de serviços ou os benefícios econômicos, podendo tais direitos existir sem ela, como ocorre com item patrimonial arrendado, razão por que a propriedade legal não é característica essencial do ativo, mas tão somente indicador de controle. Passivo, conforme o item 5.14, é uma obrigação presente, derivada de evento passado, cuja extinção deva resultar na saída de recursos da entidade; e o item 5.16 é explícito ao afirmar que a obrigação que possa ser liquidada ou extinta sem a saída de recursos não é passivo. Por fim, o item 5.22 define poder soberano como a autoridade maior do governo para fazer, aditar e vetar os dispositivos legais, esclarecendo que a existência desse poder não é condição para se concluir que a obrigação não satisfaz a definição de passivo, devendo a situação jurídica ser avaliada a cada apresentação da informação contábil."},
  U3:{ask:"Explique receita, despesa, contribuição e distribuição aos proprietários.",
    hint:"As duas definições espelhadas pela situação patrimonial líquida; as origens do item 5.31; a diferença entre transação com e sem contraprestação; e os dois elementos dos proprietários.",
    ref:"A NBC TSP Estrutura Conceitual define receita, no item 5.29, como os aumentos na situação patrimonial líquida da entidade não oriundos de contribuições dos proprietários, e despesa, no item 5.30, como as diminuições na situação patrimonial líquida não oriundas de distribuições aos proprietários — definições espelhadas que isolam, de um lado, as variações decorrentes do desempenho e, de outro, as movimentações com os próprios donos do patrimônio. Segundo o item 5.31, receitas e despesas originam-se de transações com contraprestação e sem contraprestação e de outros eventos, tais como aumentos e decréscimos não realizados de ativos e passivos, o consumo dos ativos por meio da depreciação e a redução do potencial de serviços e da capacidade de gerar benefícios econômicos por meio da redução ao valor recuperável, podendo decorrer de transações individuais ou de grupos de transações. Transações com contraprestação são aquelas em que a entidade recebe algo — dinheiro, bens ou serviços — em troca de assumir uma obrigação; já nas transações sem contraprestação a entidade recebe um ativo sem assumir passivo, hipótese em que ocorre receita, ou assume um passivo sem receber nada em troca, hipótese em que ocorre despesa. Completam o rol dos elementos a contribuição dos proprietários, definida no item 5.33 como a entrada de recursos para a entidade a título de contribuição de partes externas, que estabelece ou aumenta a participação delas no patrimônio líquido; e a distribuição aos proprietários, definida no item 5.34 como a saída de recursos da entidade a título de distribuição a partes externas, representando retorno sobre a participação ou a redução dessa participação no patrimônio líquido. Justamente por serem elementos autônomos, essas duas movimentações não se confundem com receita e despesa, e é por isso que ambas as definições as excepcionam expressamente."},
  U4:{ask:"Explique as bases de mensuração para os ativos.",
    hint:"O rol do item 7.6 e o critério de discussão; o custo histórico com sua vantagem e sua limitação; o que são mensurações a valor corrente e quais são as quatro; e o conceito de cada uma.",
    ref:"O item 7.6 da NBC TSP Estrutura Conceitual identifica cinco bases de mensuração para os ativos — custo histórico, valor de mercado, custo de reposição ou substituição, preço líquido de venda e valor em uso —, discutidas à luz da informação que fornecem sobre o custo dos serviços prestados, a capacidade operacional e a capacidade financeira da entidade, além da extensão em que fornecem informação que satisfaça as características qualitativas. O custo histórico de um ativo, conforme o item 7.13, é a importância fornecida para se adquirir ou desenvolver o ativo, correspondente ao caixa ou equivalentes de caixa ou ao valor de outra importância fornecida à época de sua aquisição ou desenvolvimento; por ficar congelado, torna-se menos relevante quanto maior a variação do valor de mercado e a inflação, mas permanece como a base utilizada na maioria dos casos em razão de sua verificabilidade. As mensurações a valor corrente, tratadas no item 7.22, refletem o ambiente econômico vigente na data de apresentação do relatório, e o item 7.23 enumera quatro delas para os ativos: valor de mercado, custo de reposição ou substituição, preço líquido de venda e valor em uso — de modo que o custo histórico não é base a valor corrente. O valor de mercado, no item 7.24, é o montante pelo qual um ativo pode ser trocado entre partes cientes e dispostas, em transação sob condições normais de mercado. O custo de reposição ou substituição, no item 7.37, é o custo mais econômico exigido para a entidade substituir o potencial de serviços do ativo, inclusive o montante que ela recebe a partir de sua alienação ao final da vida útil, na data do relatório. O preço líquido de venda, no item 7.49, é o montante que a entidade pode obter com a venda do ativo após deduzir os gastos para a venda. E o valor em uso, no item 7.58, é o valor presente, para a entidade, do potencial de serviços ou da capacidade de gerar benefícios econômicos remanescentes do ativo, caso este continue a ser utilizado, somado ao valor líquido que a entidade receberá pela sua alienação ao final da vida útil."},
  U5:{ask:"Explique as bases de mensuração para os passivos e sua correspondência com as dos ativos.",
    hint:"O rol do item 7.69; cada conceito; e os dois espelhamentos que a norma declara — custo de liberação e preço presumido.",
    ref:"O item 7.69 da NBC TSP Estrutura Conceitual considera cinco bases de mensuração para os passivos: custo histórico, custo de cumprimento da obrigação, valor de mercado, custo de liberação e preço presumido. O custo histórico para o passivo, no item 7.70, é a importância recebida para se assumir uma obrigação, correspondente ao caixa ou equivalentes de caixa ou ao valor de outra importância recebida à época na qual a entidade incorreu no passivo — note-se o espelhamento com o ativo, em que se trata da importância fornecida. O custo de cumprimento da obrigação, no item 7.74, corresponde aos custos nos quais a entidade incorre no cumprimento das obrigações representadas pelo passivo, assumindo que o faz da maneira menos onerosa. O valor de mercado para passivos, no item 7.80, é o montante pelo qual um passivo pode ser liquidado entre partes cientes e interessadas em transação sob condições normais de mercado. O custo de liberação, no item 7.82, é o termo utilizado no contexto dos passivos para se referir ao mesmo conceito do preço líquido de venda no contexto dos ativos, correspondendo ao montante da baixa imediata da obrigação, isto é, ao montante que o credor aceita no cumprimento da sua demanda ou que terceiros cobrariam para aceitar a transferência do passivo do devedor — e, havendo mais de um modo de garantir a liberação, o custo de liberação é o que representa o menor montante. Por fim, o preço presumido, no item 7.87, é o termo utilizado no contexto dos passivos para o mesmo conceito do custo de reposição no contexto dos ativos: assim como o custo de reposição representa o montante que a entidade pagaria racionalmente para adquirir o ativo, o preço presumido representa o montante que ela racionalmente aceitaria na troca pela assunção do passivo existente, sendo as transações com contraprestação realizadas em condições normais as que fornecem evidência desse preço, o que não ocorre com as transações sem contraprestação. Comparando as duas colunas, apenas o custo histórico e o valor de mercado conservam o mesmo nome no ativo e no passivo."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Quem reporta a informação contábil",
      '<div class="box"><span class="bl">Item 4.1</span><p>É o <b>ente governamental ou outra organização, programa ou outra área identificável de atividade</b> que <b>elabora os RCPGs</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Não precisa ser pessoa jurídica</b></span><p>Um <b>programa</b> de governo ou uma <b>área identificável de atividade</b> pode ser entidade que reporta. O critério é <b>elaborar os RCPGs</b>, não a personalidade jurídica.</p></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Característica-chave (a)</span><span class="cd"><b>Capta recursos da sociedade</b> ou em nome dela, e/ou <b>utiliza recursos</b> para realizar atividades <b>em benefício dela</b>.</span></div>'+
      '<div class="chip"><span class="cn">Característica-chave (b)</span><span class="cd">Existem <b>usuários de serviços ou provedores de recursos dependentes</b> dos RCPGs para prestação de contas, accountability e tomada de decisão.</span></div>'+
      '</div>'),
    sl("Os seis elementos das demonstrações",
      '<div class="box"><span class="bl">Item 5.2 — o que são</span><p>As demonstrações retratam os efeitos financeiros e não financeiros das transações ao agrupá-los em <b>classes amplas que compartilham características econômicas comuns</b>. Essas classes são os <b>elementos</b> — as <b>estruturas básicas</b> a partir das quais as demonstrações são elaboradas.</p>'+
      '<p>Fornecem o <b>ponto inicial</b> para <b>reconhecer, classificar e agregar</b> dados e atividades econômicas.</p></div>'+
      '<div class="tree">'+
      '<div class="tree-root">Item 5.5 — os seis elementos</div>'+
      '<div class="leaf"><b>Ativo</b> e <b>Passivo</b> — os dois do balanço</div>'+
      '<div class="leaf"><b>Receita</b> e <b>Despesa</b> — os dois do resultado</div>'+
      '<div class="leaf"><b>Contribuição dos proprietários</b> e <b>Distribuição aos proprietários</b> — os dois dos donos</div>'+
      '</div>'+
      '<div class="box trap"><span class="bl">O que NÃO está no rol</span><p>O <b>patrimônio líquido</b> não figura entre os elementos do item 5.5. Item que o inclua é <b>falso</b>.</p></div>')
  ],
  V2:[
    sl("Ativo — recurso, potencial de serviços e controle",
      '<div class="box"><span class="bl">Item 5.6</span><p><b>Ativo é um recurso controlado no presente pela entidade como resultado de evento passado.</b></p></div>'+
      '<div class="box"><span class="bl">Item 5.7 — o que é recurso</span><p>Item com <b>potencial de serviços</b> ou com a <b>capacidade de gerar benefícios econômicos</b>. A <b>forma física não é condição necessária</b>.</p>'+
      '<ul><li><b>a)</b> utilizar o recurso para prestar serviços</li><li><b>b)</b> utilizar recursos de terceiros para prestar serviços (arrendamento)</li>'+
      '<li><b>c)</b> converter o recurso em caixa pela alienação</li><li><b>d)</b> beneficiar-se da valorização</li><li><b>e)</b> receber fluxos de caixa</li></ul></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Potencial de serviços</span><span class="cd">Capacidade de prestar serviços que contribuam para os objetivos — <b>sem necessariamente gerar entrada líquida de caixa</b>. A marca do setor público.</span></div>'+
      '<div class="chip"><span class="cn">Benefício econômico</span><span class="cd">A geração de <b>fluxo de caixa</b>.</span></div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">Exemplo do resumo</span><p>A <b>universidade pública</b> oferece cursos e pesquisa: serviços que cumprem seus objetivos <b>sem gerar caixa</b>. É potencial de serviços puro.</p></div>'),
    sl("Os quatro indicadores de controle",
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">a</span><span class="nm">Propriedade legal</span></div><div class="fn-b"><p>Um dos métodos para verificar o potencial de serviços ou os benefícios econômicos.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">b</span><span class="nm">Acesso ao recurso</span></div><div class="fn-b"><p>Ou a <b>capacidade de negar ou restringir</b> o acesso de terceiros.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">c</span><span class="nm">Meios de destinação</span></div><div class="fn-b"><p>Meios que <b>assegurem que o recurso seja utilizado</b> para alcançar os objetivos.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">d</span><span class="nm">Direito legítimo</span></div><div class="fn-b"><p>Ao <b>potencial de serviços</b> ou à <b>capacidade de gerar benefícios econômicos</b> advindos do recurso.</p></div></div>'+
      '</div>'+
      '<div class="box trap"><span class="bl">Duas pegadinhas num artigo só</span>'+
      '<p><b>1.</b> Os indicadores <b>não são determinantes conclusivos</b> do controle — apenas <b>subsidiam</b> a decisão. Item que diga que a propriedade legal revela o controle “de forma conclusiva” é <b>falso</b>.</p>'+
      '<p><b>2.</b> A propriedade legal <b>não é característica essencial</b> do ativo (item 5.12A). Uma <b>máquina arrendada</b> é ativo da arrendatária, que a <b>usa e reconhece</b> sem ser proprietária.</p></div>'),
    sl("Passivo — saída de recursos e poder soberano",
      '<div class="box"><span class="bl">Item 5.14</span><p><b>Passivo é uma obrigação presente, derivada de evento passado, cuja extinção deva resultar na saída de recursos da entidade.</b></p></div>'+
      '<div class="box trap"><span class="bl">Item 5.16 — o filtro</span><p>“A obrigação que pode ser liquidada ou extinta <b>sem a saída de recursos</b> da entidade <b>não é um passivo</b>.” A saída de recursos é elemento da definição, não consequência acidental.</p></div>'+
      '<div class="box"><span class="bl">Item 5.22 — poder soberano</span>'+
      '<p>É a <b>autoridade maior do governo para fazer, aditar e vetar os dispositivos legais</b>.</p>'+
      '<p>A existência desse poder <b>não é condição</b> para concluir que a obrigação deixou de ser passivo. A <b>situação jurídica deve ser avaliada a cada apresentação</b> da informação contábil.</p></div>'+
      '<div class="box tip"><span class="bl">Por que isso cai</span><p>O governo pode, em tese, mudar a lei e extinguir a própria dívida. A norma barra esse raciocínio: <b>poder de mudar a lei não apaga o passivo hoje</b>.</p></div>')
  ],
  V3:[
    sl("Receita e despesa — definições espelhadas",
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Receita — item 5.29</span><span class="cd"><b>Aumentos</b> na situação patrimonial líquida <b>não oriundos de contribuições dos proprietários</b>.</span></div>'+
      '<div class="chip"><span class="cn">Despesa — item 5.30</span><span class="cd"><b>Diminuições</b> na situação patrimonial líquida <b>não oriundas de distribuições aos proprietários</b>.</span></div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">A lógica das exceções</span><p>As duas definições <b>excluem</b> as movimentações com os <b>próprios donos</b> do patrimônio. Dinheiro que entra do sócio não é receita; dinheiro que sai para o sócio não é despesa — são <b>elementos autônomos</b>.</p></div>'+
      '<div class="box"><span class="bl">Exemplos do resumo</span>'+
      '<p><b>Receita:</b> receitas tributárias · receitas patrimoniais (aluguel de imóvel público) · doações recebidas · incorporação de bens e direitos · transferências correntes.</p>'+
      '<p><b>Despesa:</b> depreciação · manutenção de rodovias · terceirização de limpeza e segurança · obras públicas · salários.</p></div>'),
    sl("De onde vêm receitas e despesas",
      '<div class="tree">'+
      '<div class="tree-root">Item 5.31 — origens</div>'+
      '<div class="leaf">Transações <b>com contraprestação</b></div>'+
      '<div class="leaf">Transações <b>sem contraprestação</b></div>'+
      '<div class="leaf"><b>Aumentos e decréscimos não realizados</b> de ativos e passivos</div>'+
      '<div class="leaf"><b>Consumo dos ativos por depreciação</b></div>'+
      '<div class="leaf"><b>Redução ao valor recuperável</b> do potencial de serviços e da capacidade de gerar benefícios</div>'+
      '<div class="leaf">Transações <b>individuais ou em grupos</b></div>'+
      '</div>'+
      '<div class="box trap"><span class="bl">Com ou sem contraprestação</span>'+
      '<p><b>Com contraprestação:</b> a entidade <b>recebe algo</b> (dinheiro, bens, serviços) <b>em troca</b> de assumir uma obrigação.</p>'+
      '<p><b>Sem contraprestação:</b> recebe ativo <b>sem assumir passivo</b> → <b>receita</b>; ou assume passivo <b>sem receber nada</b> → <b>despesa</b>.</p></div>'),
    sl("Os dois elementos dos proprietários",
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Contribuição — item 5.33</span><span class="cd"><b>Entrada</b> de recursos de <b>partes externas</b> que <b>estabelece ou aumenta</b> a participação delas no PL.</span></div>'+
      '<div class="chip"><span class="cn">Distribuição — item 5.34</span><span class="cd"><b>Saída</b> de recursos a <b>partes externas</b>, como <b>retorno sobre a participação</b> ou <b>redução</b> dessa participação no PL.</span></div>'+
      '</div>'+
      '<div class="box"><span class="bl">Formas de contribuição</span><p>Investimentos em dinheiro, ativos tangíveis ou intangíveis, ou até empréstimos convertidos em participação.</p></div>'+
      '<div class="box trap"><span class="bl">O par de erros mais comum</span>'+
      '<ul><li>Chamar a <b>contribuição dos proprietários</b> de <b>receita</b>.</li>'+
      '<li>Chamar a <b>distribuição aos proprietários</b> de <b>despesa</b>.</li></ul>'+
      '<p>As próprias definições de receita e despesa as <b>excepcionam</b>. São elementos <b>distintos</b>.</p></div>')
  ],
  V4:[
    sl("As cinco bases do ativo",
      '<div class="box"><span class="bl">Item 7.6</span><p>As bases são identificadas e discutidas à luz da informação que fornecem sobre:</p>'+
      '<ul><li>o <b>custo dos serviços prestados</b>;</li><li>a <b>capacidade operacional</b>;</li><li>a <b>capacidade financeira</b> da entidade;</li>'+
      '<li>e a extensão em que satisfazem as <b>características qualitativas</b>.</li></ul></div>'+
      '<div class="tree">'+
      '<div class="tree-root">Bases de mensuração para os ATIVOS</div>'+
      '<div class="leaf"><b>a)</b> Custo histórico</div>'+
      '<div class="leaf"><b>b)</b> Valor de mercado</div>'+
      '<div class="leaf"><b>c)</b> Custo de reposição ou substituição</div>'+
      '<div class="leaf"><b>d)</b> Preço líquido de venda</div>'+
      '<div class="leaf"><b>e)</b> Valor em uso</div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">Item 7.13 — custo histórico</span><p>A <b>importância fornecida</b> para adquirir ou desenvolver o ativo, à época da aquisição. Fica <b>congelado</b>: quanto maior a inflação e a variação de mercado, <b>menos relevante</b> — mas segue sendo a base da maioria dos casos por sua <b>verificabilidade</b>.</p></div>'),
    sl("As quatro bases a valor corrente",
      '<div class="box"><span class="bl">Item 7.22</span><p>As mensurações a valor corrente <b>refletem o ambiente econômico vigente na data de apresentação do relatório</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Item 7.23 — são QUATRO, e o custo histórico fica de fora</span>'+
      '<ul><li>Valor de mercado</li><li>Custo de reposição ou substituição</li><li>Preço líquido de venda</li><li>Valor em uso</li></ul>'+
      '<p>São <b>cinco bases no total</b> (item 7.6), mas só <b>quatro a valor corrente</b> (item 7.23). A banca troca os dois números.</p></div>'+
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">7.24</span><span class="nm">Valor de mercado</span></div><div class="fn-b"><p>Montante pelo qual o ativo pode ser <b>trocado entre partes cientes e dispostas</b>, sob <b>condições normais de mercado</b>.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">7.37</span><span class="nm">Custo de reposição</span></div><div class="fn-b"><p>O <b>custo mais econômico</b> para <b>substituir o potencial de serviços</b> do ativo na data do relatório — incluído o que se recebe na alienação ao fim da vida útil.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">7.49</span><span class="nm">Preço líquido de venda</span></div><div class="fn-b"><p>O que a entidade obtém com a venda <b>após deduzir os gastos para vender</b>.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">7.58</span><span class="nm">Valor em uso</span></div><div class="fn-b"><p><b>Valor presente</b> de duas parcelas: o potencial de serviços/benefícios <b>remanescentes</b> se o ativo continuar em uso <b>e</b> o valor líquido da <b>alienação ao fim da vida útil</b>.</p></div></div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">Condições normais de mercado</span><p>Significa economia <b>não distorcida</b> por políticas governamentais, eventos geopolíticos (guerra) ou naturais (enchente, seca).</p></div>')
  ],
  V5:[
    sl("As cinco bases do passivo",
      '<div class="tree">'+
      '<div class="tree-root">Item 7.69 — bases de mensuração para os PASSIVOS</div>'+
      '<div class="leaf"><b>a)</b> Custo histórico</div>'+
      '<div class="leaf"><b>b)</b> Custo de cumprimento da obrigação</div>'+
      '<div class="leaf"><b>c)</b> Valor de mercado</div>'+
      '<div class="leaf"><b>d)</b> Custo de liberação</div>'+
      '<div class="leaf"><b>e)</b> Preço presumido</div>'+
      '</div>'+
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">7.70</span><span class="nm">Custo histórico</span></div><div class="fn-b"><p>A <b>importância recebida</b> para assumir a obrigação, à época em que a entidade incorreu no passivo. No ativo é <b>fornecida</b>; no passivo, <b>recebida</b>.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">7.74</span><span class="nm">Custo de cumprimento</span></div><div class="fn-b"><p>Os custos em que a entidade incorre <b>ao cumprir</b> a obrigação, <b>assumindo que o faz da maneira menos onerosa</b>.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">7.80</span><span class="nm">Valor de mercado</span></div><div class="fn-b"><p>Montante pelo qual o passivo pode ser <b>liquidado entre partes cientes e interessadas</b>, sob condições normais de mercado.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">7.82</span><span class="nm">Custo de liberação</span></div><div class="fn-b"><p>Montante da <b>baixa imediata</b> da obrigação: o que o <b>credor aceita</b>, ou o que <b>terceiros cobrariam</b> para assumir o passivo. Havendo mais de um modo, é o <b>menor montante</b>.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">7.87</span><span class="nm">Preço presumido</span></div><div class="fn-b"><p>O que a entidade <b>racionalmente aceitaria</b> pela <b>assunção do passivo existente</b>. As transações <b>com</b> contraprestação fornecem evidência dele; as <b>sem</b> contraprestação, <b>não</b>.</p></div></div>'+
      '</div>'),
    sl("O quadro comparativo — e os dois espelhos",
      '<div class="chips">'+
      '<div class="chip"><span class="cn">ATIVO</span><span class="cd">Custo histórico<br>Valor de mercado<br>Custo de reposição ou substituição<br>Preço líquido de venda<br>Valor em uso</span></div>'+
      '<div class="chip"><span class="cn">PASSIVO</span><span class="cd">Custo histórico<br>Valor de mercado<br>Custo de cumprimento da obrigação<br>Custo de liberação<br>Preço presumido</span></div>'+
      '</div>'+
      '<div class="box tip"><span class="bl">O que a própria norma declara espelhado</span>'+
      '<ul><li><b>Item 7.82:</b> <b>custo de liberação</b> (passivo) = mesmo conceito do <b>preço líquido de venda</b> (ativo).</li>'+
      '<li><b>Item 7.87:</b> <b>preço presumido</b> (passivo) = mesmo conceito do <b>custo de reposição</b> (ativo).</li></ul></div>'+
      '<div class="box trap"><span class="bl">As três trocas que a banca faz</span>'+
      '<ul><li>Dizer que o <b>custo de liberação</b> espelha o <b>custo de reposição</b> — não: espelha o <b>preço líquido de venda</b>.</li>'+
      '<li>Colocar <b>valor em uso</b> no passivo — o valor em uso é <b>só do ativo</b>.</li>'+
      '<li>Colocar <b>custo de cumprimento da obrigação</b> no ativo — é <b>só do passivo</b>.</li></ul>'+
      '<p>Só <b>custo histórico</b> e <b>valor de mercado</b> aparecem nas duas colunas.</p></div>')
  ]
};

var EX = {
S1:{t:"gap", instr:"Complete o item 4.1",
  before:"A entidade do setor público que reporta a informação contábil é um ente governamental ou outra organização, programa ou outra área identificável de atividade que ",
  after:".",
  options:["elabora os RCPGs","possui personalidade jurídica própria","executa orçamento próprio"], answer:0,
  why:"O critério é <b>elaborar os RCPGs</b>."},

S2:{t:"multi", instr:"Marque as características-chave da entidade que reporta (item 4.3)",
  options:["Captar recursos da sociedade ou em nome dela",
           "Utilizar recursos para realizar atividades em benefício da sociedade",
           "Existirem usuários ou provedores dependentes das informações dos RCPGs",
           "Ter personalidade jurídica de direito público",
           "Possuir orçamento próprio aprovado por lei"],
  answers:[0,1,2],
  why:"São só as duas alíneas do item 4.3 — a primeira com duas partes."},

S3:{t:"multi", instr:"Marque os elementos das demonstrações contábeis (item 5.5)",
  options:["Ativo","Passivo","Receita","Despesa","Contribuição dos proprietários","Distribuição aos proprietários",
           "Patrimônio líquido","Resultado do exercício"],
  answers:[0,1,2,3,4,5],
  why:"São <b>seis</b>. O PL não figura no rol."},

S4:{t:"gap", instr:"Complete o item 5.2",
  before:"Os elementos correspondem às ",
  after:" a partir das quais as demonstrações contábeis são elaboradas.",
  options:["estruturas básicas","classes residuais","contas sintéticas"], answer:0,
  why:"E fornecem o ponto inicial para reconhecer, classificar e agregar."},

S5:{t:"wordbank", instr:"Monte a definição de ativo (item 5.6)",
  target:["recurso","controlado","no","presente","pela","entidade"],
  extra:["de propriedade","adquirido","mensurável"],
  why:"<b>Controlado</b>, e não “de propriedade” — como resultado de evento passado."},

S6:{t:"mc", instr:"Segundo o item 5.7, recurso é um item com:",
  options:["Potencial de serviços ou capacidade de gerar benefícios econômicos",
           "Forma física e valor determinável","Liquidez imediata",
           "Registro no plano de contas"],
  answer:0,
  why:"E a forma física <b>não</b> é condição necessária."},

S7:{t:"mc", instr:"O potencial de serviços:",
  options:["Permite alcançar os objetivos sem necessariamente gerar entrada líquida de caixa",
           "Exige a geração de entrada líquida de caixa",
           "Aplica-se apenas a bens tangíveis",
           "É sinônimo de benefício econômico"],
  answer:0,
  why:"Item 5.8 — é a marca do ativo no setor público."},

S8:{t:"multi", instr:"Marque os indicadores de controle do item 5.12",
  options:["Propriedade legal","Acesso ao recurso ou capacidade de negar ou restringir o acesso",
           "Meios que assegurem que o recurso seja utilizado para alcançar os objetivos",
           "Existência de direito legítimo ao potencial de serviços ou aos benefícios econômicos",
           "Registro no inventário patrimonial","Aprovação do Tribunal de Contas"],
  answers:[0,1,2,3],
  why:"São quatro — e <b>não</b> são determinantes conclusivos."},

S9:{t:"sort", instr:"Sobre a propriedade legal, classifique",
  buckets:["Verdadeiro","Falso"],
  items:[["É um indicador de controle",0],
         ["É um dos métodos para verificar o potencial de serviços",0],
         ["Um item arrendado pode ser ativo do arrendatário",0],
         ["É característica essencial do ativo",1],
         ["Revela de forma conclusiva a existência de controle",1]],
  why:"Item 5.12A — indicador sim, essencial não."},

S10:{t:"wordbank", instr:"Monte a definição de passivo (item 5.14)",
  target:["obrigação","presente",",","derivada","de","evento","passado"],
  extra:["provável","estimável","futura"],
  why:"E cuja extinção deva resultar na <b>saída de recursos</b> da entidade."},

S11:{t:"mc", instr:"A obrigação que pode ser liquidada sem a saída de recursos da entidade:",
  options:["Não é um passivo","É um passivo contingente",
           "É um passivo de valor zero","É um passivo não exigível"],
  answer:0,
  why:"Item 5.16 — a saída de recursos integra a definição."},

S12:{t:"mc", instr:"Sobre o poder soberano (item 5.22), é correto afirmar:",
  options:["Sua existência não é condição para concluir que a obrigação não é passivo",
           "Sua existência afasta automaticamente a definição de passivo",
           "Ele impede o reconhecimento de qualquer passivo pela União",
           "Ele só se aplica a obrigações tributárias"],
  answer:0,
  why:"A situação jurídica deve ser avaliada <b>a cada apresentação</b> da informação contábil."},

S13:{t:"match", instr:"Ligue cada elemento à sua definição",
  pairs:[["Receita","Aumentos na situação patrimonial líquida não oriundos de contribuições dos proprietários"],
         ["Despesa","Diminuições na situação patrimonial líquida não oriundas de distribuições aos proprietários"],
         ["Contribuição dos proprietários","Entrada de recursos que estabelece ou aumenta a participação no PL"],
         ["Distribuição aos proprietários","Saída de recursos como retorno ou redução da participação no PL"]],
  why:"Itens 5.29, 5.30, 5.33 e 5.34."},

S14:{t:"multi", instr:"Segundo o item 5.31, receitas e despesas originam-se de:",
  options:["Transações com contraprestação","Transações sem contraprestação",
           "Aumentos e decréscimos não realizados de ativos e passivos",
           "Consumo dos ativos por meio da depreciação",
           "Redução ao valor recuperável",
           "Contribuições dos proprietários","Distribuições aos proprietários"],
  answers:[0,1,2,3,4],
  why:"As duas últimas são <b>elementos autônomos</b>, justamente excluídos das definições."},

S15:{t:"sort", instr:"Com ou sem contraprestação?",
  buckets:["Com contraprestação","Sem contraprestação"],
  items:[["Recebe dinheiro em troca de assumir uma obrigação",0],
         ["Vende um serviço e recebe o preço",0],
         ["Recebe uma doação sem assumir passivo",1],
         ["Assume dívida de benefício social sem receber nada em troca",1]],
  why:"Sem contraprestação: recebe ativo → <b>receita</b>; assume passivo → <b>despesa</b>."},

S16:{t:"sort", instr:"É receita, despesa ou nenhum dos dois?",
  buckets:["Receita","Despesa","Nenhum dos dois"],
  items:[["Receita tributária",0],["Aluguel de imóvel público",0],["Doação recebida",0],
         ["Depreciação de ativo",1],["Salários",1],["Obra pública",1],
         ["Contribuição dos proprietários",2],["Distribuição aos proprietários",2]],
  why:"Os dois últimos são elementos próprios, fora de receita e despesa."},

S17:{t:"gap", instr:"Complete o item 5.29",
  before:"Receita corresponde a aumentos na situação patrimonial líquida da entidade não oriundos de ",
  after:".",
  options:["contribuições dos proprietários","distribuições aos proprietários","transações sem contraprestação"], answer:0,
  why:"Receita exclui <b>contribuição</b>; despesa exclui <b>distribuição</b>."},

S18:{t:"gap", instr:"Complete o item 5.34",
  before:"Distribuição aos proprietários corresponde a saída de recursos da entidade a título de distribuição a partes externas, que representa ",
  after:" no patrimônio líquido da entidade.",
  options:["retorno sobre a participação ou a redução dessa participação","despesa operacional","perda patrimonial"], answer:0,
  why:"É movimentação com os donos, não despesa."},

S19:{t:"multi", instr:"Marque as bases de mensuração para os ATIVOS (item 7.6)",
  options:["Custo histórico","Valor de mercado","Custo de reposição ou substituição",
           "Preço líquido de venda","Valor em uso",
           "Custo de liberação","Preço presumido","Custo de cumprimento da obrigação"],
  answers:[0,1,2,3,4],
  why:"As três últimas são do <b>passivo</b>."},

S20:{t:"multi", instr:"À luz de que informação as bases do ativo são discutidas (item 7.6)?",
  options:["Custo dos serviços prestados","Capacidade operacional da entidade",
           "Capacidade financeira da entidade","Satisfação das características qualitativas",
           "Liquidez corrente","Grau de endividamento"],
  answers:[0,1,2,3],
  why:"São os quatro critérios do caput do item 7.6."},

S21:{t:"mc", instr:"Custo histórico de um ativo é:",
  options:["A importância fornecida para adquirir ou desenvolver o ativo",
           "A importância recebida ao assumir a obrigação",
           "O valor presente dos benefícios remanescentes",
           "O montante da baixa imediata"],
  answer:0,
  why:"No ativo é <b>fornecida</b>; no passivo, <b>recebida</b>."},

S22:{t:"multi", instr:"Marque as bases a VALOR CORRENTE para os ativos (item 7.23)",
  options:["Valor de mercado","Custo de reposição ou substituição","Preço líquido de venda","Valor em uso",
           "Custo histórico"],
  answers:[0,1,2,3],
  why:"São <b>quatro</b> — o custo histórico não é base a valor corrente."},

S23:{t:"match", instr:"Ligue cada base do ativo ao seu conceito",
  pairs:[["Valor de mercado","Trocado entre partes cientes e dispostas, em condições normais"],
         ["Custo de reposição","Custo mais econômico para substituir o potencial de serviços"],
         ["Preço líquido de venda","Obtido na venda após deduzir os gastos para vender"],
         ["Valor em uso","Valor presente dos benefícios remanescentes mais a alienação final"]],
  why:"Itens 7.24, 7.37, 7.49 e 7.58."},

S24:{t:"gap", instr:"Complete o item 7.22",
  before:"As mensurações a valor corrente refletem o ambiente econômico vigente ",
  after:".",
  options:["na data de apresentação do relatório","na data de aquisição do ativo","no encerramento do exercício anterior"], answer:0,
  why:"É o que as separa do custo histórico, congelado na aquisição."},

S25:{t:"order", instr:"Ordene o raciocínio do valor em uso (item 7.58)",
  items:["Projetar o potencial de serviços ou os benefícios econômicos remanescentes, se o ativo continuar em uso",
         "Somar o valor líquido que a entidade receberá pela alienação ao final da vida útil",
         "Trazer o conjunto a valor presente"],
  why:"São <b>duas parcelas</b> trazidas a valor presente."},

S26:{t:"multi", instr:"Marque as bases de mensuração para os PASSIVOS (item 7.69)",
  options:["Custo histórico","Custo de cumprimento da obrigação","Valor de mercado",
           "Custo de liberação","Preço presumido",
           "Valor em uso","Preço líquido de venda","Custo de reposição"],
  answers:[0,1,2,3,4],
  why:"As três últimas são do <b>ativo</b>."},

S27:{t:"match", instr:"Ligue cada base do passivo ao seu conceito",
  pairs:[["Custo histórico","Importância recebida para assumir a obrigação"],
         ["Custo de cumprimento","Custos para cumprir a obrigação da maneira menos onerosa"],
         ["Custo de liberação","Montante da baixa imediata — o menor, havendo mais de um modo"],
         ["Preço presumido","O que a entidade aceitaria pela assunção do passivo existente"]],
  why:"Itens 7.70, 7.74, 7.82 e 7.87."},

S28:{t:"sort", instr:"Qual base do ativo espelha cada base do passivo?",
  buckets:["Espelha o preço líquido de venda","Espelha o custo de reposição"],
  items:[["Custo de liberação",0],["Preço presumido",1]],
  why:"A própria norma declara os dois espelhamentos, nos itens 7.82 e 7.87."},

S29:{t:"sort", instr:"Base do ativo, do passivo ou das duas?",
  buckets:["Só do ativo","Só do passivo","Das duas"],
  items:[["Valor em uso",0],["Preço líquido de venda",0],["Custo de reposição ou substituição",0],
         ["Custo de cumprimento da obrigação",1],["Custo de liberação",1],["Preço presumido",1],
         ["Custo histórico",2],["Valor de mercado",2]],
  why:"Só <b>custo histórico</b> e <b>valor de mercado</b> aparecem nas duas colunas."},

S30:{t:"mc", instr:"O que fornece evidência do preço presumido (item 7.87)?",
  options:["As transações com contraprestação realizadas em condições normais",
           "As transações sem contraprestação",
           "O laudo de avaliação do órgão de controle",
           "O valor de face da obrigação"],
  answer:0,
  why:"As <b>sem</b> contraprestação não fornecem essa evidência."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var KIT = {
  U1:{tema:"Entidade que reporta e elementos das demonstrações",
    bases:["NBC TSP Estrutura Conceitual, itens 4.1, 4.3, 5.2 e 5.5",
           "MCASP — Manual de Contabilidade Aplicada ao Setor Público",
           "Lei nº 4.320/1964 — demonstrações contábeis do setor público",
           "NBC TSP 11 — apresentação das demonstrações contábeis"],
    ouro:["ente governamental ou outra organização, programa ou outra área identificável de atividade",
          "elabora os RCPGs","capta recursos da sociedade ou em nome desta",
          "utiliza recursos para realizar atividades em benefício dela",
          "usuários de serviços ou provedores de recursos dependentes",
          "classes amplas que compartilham características econômicas comuns",
          "estruturas básicas a partir das quais as demonstrações contábeis são elaboradas",
          "reconhecer, classificar e agregar","ativo, passivo, receita, despesa, contribuição dos proprietários e distribuição aos proprietários"],
    abertura:"A entidade do setor público que reporta a informação contábil é, nos termos do item 4.1 da NBC TSP Estrutura Conceitual, o ente governamental ou outra organização, programa ou área identificável de atividade que elabora os Relatórios Contábeis de Propósito Geral.",
    evite:"Não exija personalidade jurídica da entidade que reporta, e não inclua o <b>patrimônio líquido</b> entre os seis elementos do item 5.5."},
  U2:{tema:"Ativo e passivo na Estrutura Conceitual",
    bases:["NBC TSP Estrutura Conceitual, itens 5.6 a 5.8, 5.12, 5.12A, 5.14, 5.16 e 5.22",
           "CPC 00 (R2) — para o contraste com a definição societária",
           "NBC TSP 06 — arrendamentos",
           "NBC TSP 07 — ativo imobilizado"],
    ouro:["recurso controlado no presente pela entidade","resultado de evento passado",
          "potencial de serviços ou capacidade de gerar benefícios econômicos",
          "a forma física não é uma condição necessária",
          "sem, necessariamente, gerar entrada líquida de caixa",
          "indicadores de controle","não sejam determinantes conclusivos",
          "a propriedade legal do recurso não é uma característica essencial de um ativo",
          "obrigação presente, derivada de evento passado","saída de recursos da entidade",
          "poder soberano","avaliada a cada apresentação da informação contábil"],
    abertura:"Ativo, na definição do item 5.6 da NBC TSP Estrutura Conceitual, é um recurso controlado no presente pela entidade como resultado de evento passado, sendo recurso o item com potencial de serviços ou com capacidade de gerar benefícios econômicos, para o qual a forma física não é condição necessária.",
    evite:"Não trate a propriedade legal como característica essencial do ativo nem como prova conclusiva de controle — ela é apenas um dos quatro indicadores."},
  U3:{tema:"Receita, despesa e os elementos dos proprietários",
    bases:["NBC TSP Estrutura Conceitual, itens 5.29 a 5.31, 5.33 e 5.34",
           "NBC TSP 02 — receita de transação sem contraprestação",
           "NBC TSP 03 — receita de transação com contraprestação",
           "MCASP — variações patrimoniais aumentativas e diminutivas"],
    ouro:["aumentos na situação patrimonial líquida","não oriundos de contribuições dos proprietários",
          "diminuições na situação patrimonial líquida","não oriundas de distribuições aos proprietários",
          "transações com contraprestação e sem contraprestação",
          "aumentos e decréscimos não realizados de ativos e passivos",
          "consumo dos ativos por meio da depreciação","redução ao valor recuperável",
          "transações individuais ou de grupos de transações",
          "entrada de recursos a título de contribuição de partes externas",
          "estabelece ou aumenta a participação","retorno sobre a participação ou a redução dessa participação"],
    abertura:"Receita corresponde, no item 5.29 da NBC TSP Estrutura Conceitual, a aumentos na situação patrimonial líquida da entidade não oriundos de contribuições dos proprietários, e despesa, no item 5.30, a diminuições na situação patrimonial líquida não oriundas de distribuições aos proprietários.",
    evite:"Não classifique a contribuição dos proprietários como receita nem a distribuição como despesa — são elementos autônomos, expressamente excepcionados nas duas definições."},
  U4:{tema:"Bases de mensuração para os ativos",
    bases:["NBC TSP Estrutura Conceitual, itens 7.6, 7.13, 7.22 a 7.24, 7.37, 7.49 e 7.58",
           "NBC TSP 07 — imobilizado · NBC TSP 08 — intangível",
           "CPC 46 — mensuração do valor justo",
           "MCASP — mensuração de ativos no setor público"],
    ouro:["custo dos serviços prestados","capacidade operacional","capacidade financeira",
          "importância fornecida para se adquirir ou desenvolver um ativo",
          "ambiente econômico vigente na data de apresentação do relatório",
          "trocado entre partes cientes e dispostas","condições normais de mercado",
          "custo mais econômico exigido para a entidade substituir o potencial de serviços",
          "após deduzir os gastos para a venda","valor presente",
          "potencial de serviços ou da capacidade de gerar benefícios econômicos remanescentes"],
    abertura:"O item 7.6 da NBC TSP Estrutura Conceitual identifica cinco bases de mensuração para os ativos — custo histórico, valor de mercado, custo de reposição ou substituição, preço líquido de venda e valor em uso —, das quais quatro são mensurações a valor corrente, na forma do item 7.23.",
    evite:"Não inclua o custo histórico entre as bases a valor corrente: são <b>cinco</b> bases no total e <b>quatro</b> a valor corrente."},
  U5:{tema:"Bases de mensuração para os passivos",
    bases:["NBC TSP Estrutura Conceitual, itens 7.69, 7.70, 7.74, 7.80, 7.82 e 7.87",
           "NBC TSP 03 — provisões, passivos e ativos contingentes",
           "CPC 25 — provisões e passivos contingentes",
           "MCASP — mensuração de passivos no setor público"],
    ouro:["importância recebida para se assumir uma obrigação",
          "custos nos quais a entidade incorre no cumprimento das obrigações",
          "assumindo que o faz da maneira menos onerosa",
          "liquidado entre partes cientes e interessadas","baixa imediata da obrigação",
          "montante que o credor aceita no cumprimento da sua demanda",
          "representa o menor montante","montante que a entidade racionalmente aceitaria",
          "assunção do passivo existente","fornecem evidência do preço presumido"],
    abertura:"O item 7.69 da NBC TSP Estrutura Conceitual considera cinco bases de mensuração para os passivos: custo histórico, custo de cumprimento da obrigação, valor de mercado, custo de liberação e preço presumido.",
    evite:"Não troque os espelhamentos: o <b>custo de liberação</b> corresponde ao preço líquido de venda e o <b>preço presumido</b>, ao custo de reposição."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. Tema de definições: o espelho confere cada conceito pela literalidade.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre a NBC TSP Estrutura Conceitual, disserte necessariamente sobre:</p>'+
  '<ol><li>a entidade que reporta a informação contábil e os elementos das demonstrações contábeis;</li>'+
  '<li>as definições de ativo e de passivo, com os indicadores de controle;</li>'+
  '<li>as bases de mensuração para ativos e para passivos, apontando as correspondências entre elas.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>Nos termos do item <b>4.1</b> da NBC TSP Estrutura Conceitual, a entidade do setor público que reporta a informação contábil é o <b>ente governamental ou outra organização, programa ou outra área identificável de atividade</b> que <b>elabora os RCPGs</b> — não se exigindo, portanto, personalidade jurídica própria. São suas <b>características-chave</b>, pelo item <b>4.3</b>, <b>captar recursos da sociedade ou em nome desta</b> e/ou <b>utilizar recursos para realizar atividades em benefício dela</b>, e <b>existirem usuários de serviços ou provedores de recursos dependentes</b> das informações dos RCPGs para prestação de contas, accountability e tomada de decisão. Quanto aos <b>elementos</b>, o item <b>5.2</b> esclarece que as demonstrações retratam os efeitos financeiros e não financeiros das transações agrupando-os em <b>classes amplas que compartilham características econômicas comuns</b>, as quais correspondem às <b>estruturas básicas</b> a partir das quais as demonstrações são elaboradas e fornecem o ponto inicial para <b>reconhecer, classificar e agregar</b> dados e atividades econômicas. O item <b>5.5</b> arrola <b>seis</b> elementos: <b>ativo</b>, <b>passivo</b>, <b>receita</b>, <b>despesa</b>, <b>contribuição dos proprietários</b> e <b>distribuição aos proprietários</b> — não figurando o patrimônio líquido nesse rol.</p>'+
  '<p><b>Ativo</b> é, pelo item <b>5.6</b>, o <b>recurso controlado no presente pela entidade como resultado de evento passado</b>, sendo <b>recurso</b>, na dicção do item 5.7, o item com <b>potencial de serviços</b> ou com a <b>capacidade de gerar benefícios econômicos</b>, para o qual a <b>forma física não é condição necessária</b>. O <b>potencial de serviços</b> (item 5.8) é a capacidade de prestar serviços que contribuam para os objetivos da entidade, <b>sem necessariamente gerar entrada líquida de caixa</b> — traço característico do setor público. Para aferir o controle, o item <b>5.12</b> elenca quatro <b>indicadores</b>: a <b>propriedade legal</b>; o <b>acesso ao recurso</b> ou a capacidade de <b>negar ou restringir</b> esse acesso; os <b>meios que assegurem</b> a utilização do recurso para alcançar os objetivos; e a existência de <b>direito legítimo</b> ao potencial de serviços ou aos benefícios econômicos — indicadores que, contudo, <b>não são determinantes conclusivos</b>, apenas <b>subsidiam</b> a decisão. O item <b>5.12A</b> acrescenta que a propriedade legal <b>não é característica essencial</b> do ativo, tanto que os direitos ao potencial de serviços podem existir sem ela, como no <b>arrendamento</b>. Já o <b>passivo</b> é, pelo item <b>5.14</b>, a <b>obrigação presente, derivada de evento passado, cuja extinção deva resultar na saída de recursos da entidade</b>, não sendo passivo, por força do item <b>5.16</b>, a obrigação que possa ser liquidada <b>sem saída de recursos</b>. Por fim, o item <b>5.22</b> registra que a existência do <b>poder soberano</b> — autoridade maior do governo para fazer, aditar e vetar dispositivos legais — <b>não é condição</b> para se concluir que a obrigação deixou de ser passivo, devendo a situação jurídica ser <b>avaliada a cada apresentação</b> da informação contábil.</p>'+
  '<p>Quanto à <b>mensuração</b>, o item <b>7.6</b> identifica <b>cinco bases para os ativos</b> — <b>custo histórico</b>, <b>valor de mercado</b>, <b>custo de reposição ou substituição</b>, <b>preço líquido de venda</b> e <b>valor em uso</b> —, discutidas à luz da informação que fornecem sobre o <b>custo dos serviços prestados</b>, a <b>capacidade operacional</b> e a <b>capacidade financeira</b> da entidade e sobre a satisfação das características qualitativas. O <b>custo histórico</b> (item 7.13) é a <b>importância fornecida</b> para adquirir ou desenvolver o ativo; permanece a base mais utilizada por sua <b>verificabilidade</b>, embora perca <b>relevância</b> conforme aumentem a inflação e a variação de mercado. As <b>mensurações a valor corrente</b> (item 7.22) refletem o <b>ambiente econômico vigente na data de apresentação do relatório</b>, e são <b>quatro</b> para os ativos (item 7.23): valor de mercado, custo de reposição, preço líquido de venda e valor em uso — o custo histórico, portanto, <b>não</b> é base a valor corrente. Para os <b>passivos</b>, o item <b>7.69</b> considera <b>cinco bases</b>: <b>custo histórico</b> — a <b>importância recebida</b> para assumir a obrigação —, <b>custo de cumprimento da obrigação</b> — os custos para cumpri-la <b>da maneira menos onerosa</b> —, <b>valor de mercado</b>, <b>custo de liberação</b> — o montante da <b>baixa imediata</b>, o <b>menor</b> quando houver mais de um modo — e <b>preço presumido</b> — o montante que a entidade <b>racionalmente aceitaria pela assunção do passivo</b>, evidenciado pelas transações <b>com</b> contraprestação em condições normais. As correspondências declaradas pela própria norma são duas: o <b>custo de liberação</b> espelha o <b>preço líquido de venda</b> (item 7.82) e o <b>preço presumido</b> espelha o <b>custo de reposição</b> (item 7.87); e apenas o <b>custo histórico</b> e o <b>valor de mercado</b> figuram, com o mesmo nome, nas duas colunas.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> a abrangência do art. 4.1 (programa e área de atividade), as duas características-chave e os <b>seis</b> elementos.</li>'+
  '<li><b>Item 2:</b> “controlado” e não “de propriedade”; a dispensa da forma física; o potencial de serviços sem caixa; os quatro indicadores e sua não conclusividade; a saída de recursos no passivo.</li>'+
  '<li><b>Item 3:</b> cinco bases em cada coluna, quatro a valor corrente no ativo, e os <b>dois espelhamentos</b>.</li>'+
  '<li><b>Fecho:</b> apontar que só custo histórico e valor de mercado se repetem nas duas colunas mostra domínio do quadro.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Responda item a item, indicando o dispositivo aplicável.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>O contador de uma autarquia estadual enfrentou as seguintes situações no encerramento do exercício:</p>'+
  '<ol><li>deixou de reconhecer como ativo um veículo tomado em arrendamento por cinco anos, por não haver escritura em nome da autarquia;</li>'+
  '<li>reconheceu como ativo uma concessão de uso de área pública para exploração mineral, ainda que sem forma física;</li>'+
  '<li>baixou do passivo uma obrigação legal de repasse ao município, ao argumento de que o Estado, por deter poder soberano, pode revogar a lei que a criou;</li>'+
  '<li>classificou como receita o aporte de capital feito pelo Tesouro estadual para aumentar sua participação no patrimônio líquido da autarquia;</li>'+
  '<li>mensurou um imóvel pelo “valor em uso” e uma dívida bancária pelo “valor em uso”, alegando simetria entre ativo e passivo.</li></ol>'+
  '<p><b>Pergunta-se:</b> avalie cada decisão à luz da NBC TSP Estrutura Conceitual.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1. Veículo arrendado não reconhecido.</b> <b>Incorreto.</b> O item <b>5.12A</b> é expresso: os direitos ao potencial de serviços ou à capacidade de gerar benefícios econômicos <b>podem existir sem a propriedade legal</b> — exatamente o caso do <b>item patrimonial arrendado</b>. A propriedade legal é <b>indicador de controle</b> (item 5.12, a), mas <b>não é característica essencial do ativo</b>. Presentes os demais indicadores — acesso ao recurso e direito legítimo ao seu potencial de serviços —, o veículo <b>é ativo</b> da autarquia.</p>'+
  '<p><b>2. Concessão sem forma física reconhecida como ativo.</b> <b>Correto.</b> O item <b>5.7</b> define recurso como o item com potencial de serviços ou capacidade de gerar benefícios econômicos e afirma que <b>a forma física não é uma condição necessária</b>. A concessão confere à entidade direito ao potencial de serviços e à geração de benefícios — logo, é recurso, e, sendo controlado no presente como resultado de evento passado, é <b>ativo</b> (item 5.6).</p>'+
  '<p><b>3. Baixa do passivo pelo poder soberano.</b> <b>Incorreto.</b> O item <b>5.22</b> define poder soberano como a autoridade maior do governo para fazer, aditar e vetar dispositivos legais e estabelece que sua <b>existência não é condição</b> para concluir que a obrigação não satisfaz a definição de passivo. A <b>situação jurídica deve ser avaliada a cada apresentação</b> da informação contábil: enquanto a obrigação estiver vigente e sua extinção exigir <b>saída de recursos</b> (item 5.14), há passivo.</p>'+
  '<p><b>4. Aporte do Tesouro classificado como receita.</b> <b>Incorreto.</b> O aporte destinado a <b>estabelecer ou aumentar a participação</b> de parte externa no patrimônio líquido é <b>contribuição dos proprietários</b> (item <b>5.33</b>), elemento autônomo. E a própria definição de <b>receita</b> (item 5.29) exclui os aumentos <b>oriundos de contribuições dos proprietários</b>. Logo, não há receita a reconhecer.</p>'+
  '<p><b>5. Valor em uso aplicado ao passivo.</b> <b>Incorreto quanto ao passivo.</b> O <b>valor em uso</b> é base de mensuração <b>exclusiva do ativo</b> (itens 7.6 e 7.58). Para os passivos, o item <b>7.69</b> admite custo histórico, custo de cumprimento da obrigação, valor de mercado, custo de liberação e preço presumido. A simetria invocada existe, mas é outra: o <b>custo de liberação</b> espelha o <b>preço líquido de venda</b> e o <b>preço presumido</b> espelha o <b>custo de reposição</b>. A mensuração do imóvel pelo valor em uso, essa sim, é regular.</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>No <b>1</b>, exigir propriedade legal para reconhecer ativo.</li>'+
  '<li>No <b>3</b>, aceitar que o poder de mudar a lei apaga o passivo de hoje.</li>'+
  '<li>No <b>4</b>, tratar entrada de recursos do controlador como receita.</li>'+
  '<li>No <b>5</b>, presumir simetria total entre as duas colunas de bases de mensuração.</li></ul></div>';

var TEC = [
  ["Caderno CESPE — Contabilidade Pública 02","https://www.tecconcursos.com.br/s/Q2oNGq","Q2oNGq"],
  ["Caderno FCC — Contabilidade Pública 02","https://www.tecconcursos.com.br/s/Q2oNH5","Q2oNH5"],
  ["Caderno FGV — Contabilidade Pública 02","https://www.tecconcursos.com.br/s/Q2oNHE","Q2oNHE"],
  ["Caderno VUNESP — Contabilidade Pública 02","https://www.tecconcursos.com.br/s/Q2oNHQ","Q2oNHQ"]
];
var TECNOTA = "São os mesmos quatro cadernos do módulo 01 — o resumo usa um caderno único para as duas partes da Estrutura Conceitual. A sugestão do autor aqui é <b>revisar as questões já favoritadas</b> (só ler o enunciado e o comentário) e depois fazer mais <b>15 questões novas</b>.";

var UNITS = [
  {n:1, title:"Entidade e elementos", cvar:"u2", lessons:[
    {id:"Q1", type:"teoria", title:"Quem reporta e os seis elementos",   xp:10, data:"V1"},
    {id:"Q2", type:"drill",  title:"Praticar · entidade que reporta",    xp:25, data:["S1","S2","T0","T1","T2","T3"]},
    {id:"Q3", type:"drill",  title:"Praticar · os elementos",            xp:25, data:["S3","S4","T4","T5","T6","T7","T8","T9"]},
    {id:"Q4", type:"flash",  title:"Flashcards · entidade e elementos",  xp:15, data:[0,1,2,3,4,5,6,7,8]},
    {id:"Q5", type:"feynman",title:"Explique a entidade e os elementos", xp:30, data:"U1"}
  ]},
  {n:2, title:"Ativo e passivo", cvar:"u1", lessons:[
    {id:"Q7", type:"teoria", title:"Definições, controle e poder soberano", xp:10, data:"V2"},
    {id:"Q8", type:"drill",  title:"Praticar · o que é ativo",           xp:25, data:["S5","S6","T10","T11","T12","T13"]},
    {id:"Q9", type:"drill",  title:"Praticar · potencial de serviços",   xp:25, data:["S7","T14","T15"]},
    {id:"Q10",type:"drill",  title:"Praticar · indicadores de controle", xp:25, data:["S8","S9","T16","T17","T18","T19"]},
    {id:"Q11",type:"drill",  title:"Praticar · passivo e poder soberano",xp:25, data:["S10","S11","S12","T20","T21","T22","T23","T24"]},
    {id:"Q12",type:"flash",  title:"Flashcards · ativo e passivo",       xp:15, data:[9,10,11,12,13,14,15,16,17,18,19,20]},
    {id:"Q13",type:"feynman",title:"Explique ativo e passivo",           xp:30, data:"U2"}
  ]},
  {n:3, title:"Receita, despesa e proprietários", cvar:"u3", lessons:[
    {id:"Q15",type:"teoria", title:"Os quatro elementos restantes",      xp:10, data:"V3"},
    {id:"Q16",type:"drill",  title:"Praticar · receita e despesa",       xp:25, data:["S13","S17","T25","T26","T27"]},
    {id:"Q17",type:"drill",  title:"Praticar · as origens do item 5.31", xp:25, data:["S14","S15","T28","T29","T30","T31","T32"]},
    {id:"Q18",type:"drill",  title:"Praticar · contribuição e distribuição", xp:25, data:["S16","S18","T33","T34","T35","T36"]},
    {id:"Q19",type:"flash",  title:"Flashcards · receita e despesa",     xp:15, data:[21,22,23,24,25,26,27,28,29]},
    {id:"Q20",type:"feynman",title:"Explique receita, despesa e proprietários", xp:30, data:"U3"}
  ]},
  {n:4, title:"Mensuração dos ativos", cvar:"u4", lessons:[
    {id:"Q22",type:"teoria", title:"As cinco bases e as quatro a valor corrente", xp:10, data:"V4"},
    {id:"Q23",type:"drill",  title:"Praticar · o rol e os critérios",    xp:25, data:["S19","S20","T37","T38"]},
    {id:"Q24",type:"drill",  title:"Praticar · custo histórico",         xp:25, data:["S21","T39"]},
    {id:"Q25",type:"drill",  title:"Praticar · valor corrente",          xp:25, data:["S22","S24","T40","T41","T42"]},
    {id:"Q26",type:"drill",  title:"Praticar · as quatro bases correntes", xp:25, data:["S23","S25","T43","T44","T45","T46"]},
    {id:"Q27",type:"flash",  title:"Flashcards · mensuração do ativo",   xp:15, data:[30,31,32,33,34,35,36,37]},
    {id:"Q28",type:"feynman",title:"Explique as bases do ativo",         xp:30, data:"U4"}
  ]},
  {n:5, title:"Mensuração dos passivos", cvar:"u2", lessons:[
    {id:"Q30",type:"teoria", title:"As cinco bases e os dois espelhos",  xp:10, data:"V5"},
    {id:"Q31",type:"drill",  title:"Praticar · o rol do passivo",        xp:25, data:["S26","T47","T48","T49"]},
    {id:"Q32",type:"drill",  title:"Praticar · cada conceito",           xp:25, data:["S27","S30","T50","T51","T52","T53","T54"]},
    {id:"Q33",type:"drill",  title:"Praticar · o quadro comparativo",    xp:25, data:["S28","S29","T55","T56","T57"]},
    {id:"Q34",type:"flash",  title:"Flashcards · mensuração do passivo", xp:15, data:[38,39,40,41,42,43,44,45,46,47]},
    {id:"Q35",type:"feynman",title:"Explique as bases do passivo",       xp:30, data:"U5"}
  ]},
  {n:6, title:"Aplicação e prova", cvar:"u1", lessons:[
    {id:"Q37",type:"leitura",title:"Discursiva resolvida",               xp:25, data:"disc"},
    {id:"Q38",type:"leitura",title:"Estudo de caso resolvido",           xp:25, data:"caso"},
    {id:"Qrev",type:"review",title:"Revisão geral das unidades",         xp:60, data:null},
    {id:"Q39",type:"missao", title:"Missão TEC Concursos",               xp:15, data:null},
    {id:"Q40",type:"prova",  title:"Simulado cronometrado",              xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo pela letra do item 4.1: a entidade do setor público que reporta a informação contábil é um <b>ente governamental ou outra organização, programa ou outra área identificável de atividade</b> que elabora os RCPGs.</p><p>Repare na amplitude do conceito, que é o que a banca explora: a norma não fala em pessoa jurídica, e sim em <b>área identificável de atividade</b>. O comentário do Resumo completa: ela é a responsável por elaborar os relatórios que comunicam a situação financeira e patrimonial ao público em geral.</p><p class='fb-fonte'>Resumo 02 · <i>Entidade que Reporta a Informação Contábil (item 4.1)</i></p>",
1:"<p>Errado no \"somente\". O item 4.1 alcança também <b>programa</b> ou <b>outra área identificável de atividade</b> — não exige personalidade jurídica própria.</p><p>Fixe a lista do item: ente governamental <b>ou</b> outra organização <b>ou</b> programa <b>ou</b> outra área identificável de atividade. Qualquer assertiva que restrinja a entidade que reporta a pessoas jurídicas está contrariando a literalidade da norma.</p><p class='fb-fonte'>Resumo 02 · <i>Entidade que Reporta a Informação Contábil (item 4.1)</i></p>",
2:"<p>Certo. É a alínea (a) do item 4.3: ser uma entidade que <b>capta recursos da sociedade ou em nome desta</b> e/ou <b>utiliza recursos para realizar atividades em benefício dela</b>.</p><p>O comentário do Resumo destaca o duplo movimento: captar recursos da sociedade e empregá-los em atividades que beneficiem essa mesma sociedade. São duas as características-chave, e esta é a primeira.</p><p class='fb-fonte'>Resumo 02 · <i>Características-Chave da Entidade que Reporta (item 4.3, \"a\")</i></p>",
3:"<p>Certo. É a alínea (b) do item 4.3: existir <b>usuários de serviços ou provedores de recursos dependentes</b> das informações contidas nos RCPGs para fins de prestação de contas e responsabilização (accountability) e tomada de decisão.</p><p>O comentário do material liga essa alínea ao objetivo da contabilidade pública: fornecer informações precisas e relevantes para a accountability da entidade e para auxiliar a tomada de decisão dos gestores e demais interessados.</p><p class='fb-fonte'>Resumo 02 · <i>Características-Chave da Entidade que Reporta (item 4.3, \"b\")</i></p>",
4:"<p>Certo pela literalidade do item 5.2: as demonstrações contábeis retratam os efeitos <b>financeiros e não financeiros</b> das transações e outros eventos ao agrupá-los em <b>classes amplas que compartilham características econômicas comuns</b>.</p><p>E a norma emenda: essas classes amplas são exatamente o que se denomina <b>elementos das demonstrações contábeis</b>. A definição de elemento nasce desse agrupamento.</p><p class='fb-fonte'>Resumo 02 · <i>Elementos das Demonstrações Contábeis (item 5.2)</i></p>",
5:"<p>Certo. É a frase que o comentário do Resumo destaca do item 5.2: os elementos correspondem às <b>estruturas básicas a partir das quais as demonstrações contábeis são elaboradas</b>.</p><p>O item 5.2 completa a função dessas estruturas: elas fornecem o <b>ponto inicial para reconhecer, classificar e agregar</b> dados e atividades econômicas, de modo a entregar informação que satisfaça aos objetivos e atinja as características qualitativas, respeitadas as restrições sobre a informação nos RCPGs.</p><p class='fb-fonte'>Resumo 02 · <i>Elementos das Demonstrações Contábeis (item 5.2)</i></p>",
6:"<p>Certo — é a lista de seis do item 5.5, reproduzida no esquema do Resumo: <b>ativo, passivo, receita, despesa, contribuição dos proprietários e distribuição aos proprietários</b>.</p><p>Duas observações que salvam questão: o <b>patrimônio líquido não está na lista</b>, e os dois últimos elementos (contribuição e distribuição aos proprietários) não se confundem com receita e despesa — as definições dos itens 5.29 e 5.30 os excluem expressamente.</p><p class='fb-fonte'>Resumo 02 · <i>Elementos das Demonstrações Contábeis (item 5.5)</i></p>",
7:"<p>Errado. O patrimônio líquido <b>não figura</b> entre os elementos do item 5.5. São seis e apenas seis: ativo, passivo, receita, despesa, contribuição dos proprietários e distribuição aos proprietários.</p><p>O PL aparece nas definições como <b>referência</b>, não como elemento: receita é aumento na situação patrimonial líquida (5.29), despesa é diminuição (5.30), e a contribuição e a distribuição aos proprietários alteram a participação de partes externas no patrimônio líquido (5.33 e 5.34).</p><p class='fb-fonte'>Resumo 02 · <i>Elementos das Demonstrações Contábeis (item 5.5)</i></p>",
8:"<p>Errado duas vezes: a lista está <b>incompleta</b> e inclui item que não é elemento. O item 5.5 traz seis elementos — ativo, passivo, <b>receita, despesa, contribuição dos proprietários e distribuição aos proprietários</b> — e o <b>patrimônio líquido não está entre eles</b>.</p><p>Cuidado com o \"apenas\" no fim da assertiva: ele fecha a lista e torna errada qualquer enumeração parcial do esquema do Resumo.</p><p class='fb-fonte'>Resumo 02 · <i>Elementos das Demonstrações Contábeis (item 5.5)</i></p>",
9:"<p>Certo pela letra do item 5.2: as estruturas básicas (elementos) fornecem um <b>ponto inicial para reconhecer, classificar e agregar</b> dados e atividades econômicas.</p><p>A finalidade vem logo em seguida, e é boa de guardar: fornecer aos usuários informação que <b>satisfaça aos objetivos</b> e <b>atinja as características qualitativas</b>, levando em consideração as <b>restrições</b> sobre a informação incluída nos RCPGs.</p><p class='fb-fonte'>Resumo 02 · <i>Elementos das Demonstrações Contábeis (item 5.2)</i></p>",
10:"<p>Certo — é a definição do item 5.6, palavra por palavra: ativo é um <b>recurso controlado no presente</b> pela entidade <b>como resultado de evento passado</b>.</p><p>Os três pilares que a banca ataca um a um: <b>recurso</b> (item 5.7), <b>controle no presente</b> (indicadores do item 5.12) e <b>evento passado</b>. Exemplos de ativo no Resumo: dinheiro em caixa, contas a receber, investimentos financeiros, bens móveis e bens imóveis.</p><p class='fb-fonte'>Resumo 02 · <i>Ativo (item 5.6)</i></p>",
11:"<p>Errado por trocar <b>controle</b> por <b>propriedade</b>. O item 5.6 diz recurso <b>controlado</b> no presente, não recurso de propriedade da entidade.</p><p>O item 5.12A é expresso: os direitos ao potencial de serviços podem existir <b>sem que se verifique a propriedade legal</b>, e por isso a propriedade legal <b>não é característica essencial de um ativo</b> — é apenas um indicador de controle. O exemplo da norma é o item patrimonial <b>arrendado</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Ativo (itens 5.6 e 5.12A)</i></p>",
12:"<p>Certo. Literalidade do item 5.7: recurso é um item com <b>potencial de serviços</b> ou com a <b>capacidade de gerar benefícios econômicos</b>.</p><p>O item lista os direitos que podem compor o recurso: utilizar o recurso para prestação de serviços; utilizar recursos de terceiros para prestar serviços (ex.: arrendamento mercantil); converter o recurso em caixa por meio da alienação; beneficiar-se da valorização; ou receber fluxos de caixa.</p><p class='fb-fonte'>Resumo 02 · <i>Ativo — recurso (item 5.7)</i></p>",
13:"<p>Errado — o item 5.7 afirma o contrário: a <b>forma física não é uma condição necessária</b> para um recurso.</p><p>O exemplo do Resumo resolve na hora: a <b>concessão de uso de área pública para exploração de uma mina de ouro</b> não tem forma física, mas tem potencial de gerar benefícios econômicos pela extração e venda do ouro — logo, é recurso. O potencial pode surgir do próprio recurso ou dos <b>direitos de sua utilização</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Ativo — recurso (item 5.7)</i></p>",
14:"<p>Certo pela letra do item 5.8: potencial de serviços é a <b>capacidade de prestar serviços que contribuam para alcançar os objetivos da entidade</b>.</p><p>O exemplo do Resumo é a <b>universidade pública</b>: cursos, palestras e pesquisa acadêmica contribuem para os objetivos da instituição — fornecer educação e realizar pesquisa de qualidade — mesmo quando não geram entrada de dinheiro.</p><p class='fb-fonte'>Resumo 02 · <i>Ativo — potencial de serviços (item 5.8)</i></p>",
15:"<p>Errado. O item 5.8 diz exatamente o oposto: o potencial de serviços possibilita à entidade alcançar seus objetivos <b>sem, necessariamente, gerar entrada líquida de caixa</b>.</p><p>É a marca do setor público: a universidade pública do exemplo do Resumo continua oferecendo serviços essenciais aos seus objetivos ainda que eles não gerem caixa. Exigir entrada líquida de caixa seria confundir potencial de serviços com capacidade de gerar benefícios econômicos — que é a <b>outra</b> alternativa do item 5.7.</p><p class='fb-fonte'>Resumo 02 · <i>Ativo — potencial de serviços (item 5.8)</i></p>",
16:"<p>Certo — são as quatro alíneas do item 5.12: (a) <b>propriedade legal</b>; (b) <b>acesso ao recurso ou a capacidade de negar ou restringir o acesso</b>; (c) <b>meios que assegurem que o recurso seja utilizado para alcançar os seus objetivos</b>; ou (d) <b>existência de direito legítimo</b> ao potencial de serviços ou à capacidade de gerar benefícios econômicos.</p><p>Guarde a ressalva final, que é a base de várias assertivas: esses indicadores <b>não são determinantes conclusivos</b> da existência do controle, mas sua identificação e análise <b>podem subsidiar</b> essa decisão.</p><p class='fb-fonte'>Resumo 02 · <i>Ativo — indicadores de controle (item 5.12)</i></p>",
17:"<p>Errado — e o Resumo traz esta assertiva no quadro <b>PEGADINHA</b>, marcada como ERRADA.</p><p>O erro está em \"de forma conclusiva\". O item 5.12 encerra dizendo que os indicadores <b>não são determinantes conclusivos</b> acerca da existência do controle; eles apenas <b>subsidiam</b> a decisão. A propriedade legal é um dos quatro indicadores — e nada mais que isso.</p><p class='fb-fonte'>Resumo 02 · <i>Ativo — PEGADINHA do item 5.12</i></p>",
18:"<p>Errado. Pelo item 5.12A, a propriedade legal do recurso <b>não é uma característica essencial de um ativo</b>; ela é apenas <b>um indicador de controle</b>.</p><p>O quadro <b>ATENÇÃO!</b> do Resumo fecha com o exemplo: uma <b>máquina arrendada pode ser considerada um ativo</b>. A propriedade legal é um dos métodos para verificar o potencial de serviços, mas os direitos podem existir sem ela.</p><p class='fb-fonte'>Resumo 02 · <i>Ativo — ATENÇÃO! (item 5.12A)</i></p>",
19:"<p>Certo — é o exemplo do próprio item 5.12A: os direitos ao potencial de serviços por meio da <b>manutenção e utilização de item patrimonial arrendado</b> são verificados <b>sem que haja a propriedade legal</b> do item.</p><p>O box \"O que é arrendamento?\" do Resumo completa: a arrendatária tem o direito de <b>usar e reconhecer o ativo na sua demonstração contábil</b>, mas não é a proprietária dele. O que define o ativo é o controle, não a titularidade.</p><p class='fb-fonte'>Resumo 02 · <i>Ativo — arrendamento (item 5.12A)</i></p>",
20:"<p>Certo pela literalidade do item 5.14: passivo é uma <b>obrigação presente</b>, <b>derivada de evento passado</b>, cuja <b>extinção deva resultar na saída de recursos</b> da entidade.</p><p>Os exemplos de passivo do Resumo: obrigações trabalhistas, previdenciárias e assistenciais a pagar; empréstimos e financiamentos; fornecedores e contas a pagar; obrigações fiscais; transferências fiscais; provisões; demais obrigações; e resultado diferido.</p><p class='fb-fonte'>Resumo 02 · <i>Passivo (item 5.14)</i></p>",
21:"<p>Errado — a assertiva afirma justamente o que o item 5.16 nega. A obrigação que pode ser liquidada ou extinta <b>sem a saída de recursos da entidade não é um passivo</b>.</p><p>O exemplo do Resumo: o município que contraiu <b>empréstimo para construir uma escola</b> tem passivo porque terá de usar recursos financeiros para pagá-lo. A saída de recursos é elemento necessário para a liquidação ou extinção.</p><p class='fb-fonte'>Resumo 02 · <i>Passivo (item 5.16)</i></p>",
22:"<p>Certo. É a definição do item 5.22: poder soberano é a <b>autoridade maior do governo para fazer, aditar e vetar os dispositivos legais</b>.</p><p>Fique atento ao que vem depois da definição, que é o que realmente cai: a existência desse poder <b>não é condição</b> para se concluir que a obrigação não satisfaz a definição de passivo.</p><p class='fb-fonte'>Resumo 02 · <i>Passivo — poder soberano (item 5.22)</i></p>",
23:"<p>Errado. O item 5.22 diz que a existência do poder soberano <b>não é uma condição</b> para se concluir que a obrigação não satisfaz a definição de passivo — está longe de ser suficiente.</p><p>O exemplo do Resumo é a <b>obrigação da União de pagar tributo ao Município</b>: embora o poder soberano possa estabelecer e alterar a legislação tributária, essa autoridade por si só não afasta o passivo. É preciso avaliar a obrigação pelos critérios da Estrutura Conceitual.</p><p class='fb-fonte'>Resumo 02 · <i>Passivo — poder soberano (item 5.22)</i></p>",
24:"<p>Certo pela parte final do item 5.22: a situação jurídica deve ser avaliada <b>a cada apresentação da informação contábil</b> para determinar se a obrigação deixa de ser vinculada e de satisfazer a definição de passivo.</p><p>O comentário do Resumo resume a lógica: a avaliação é <b>periódica e concreta</b>, feita a cada relatório. O poder soberano existe sempre; o que muda, e precisa ser verificado, é a situação jurídica daquela obrigação específica.</p><p class='fb-fonte'>Resumo 02 · <i>Passivo — poder soberano (item 5.22)</i></p>",
25:"<p>Certo — definição do item 5.29: receita corresponde a <b>aumentos na situação patrimonial líquida</b> da entidade <b>não oriundos de contribuições dos proprietários</b>.</p><p>Os exemplos do Resumo: receitas tributárias, receitas patrimoniais (aluguel de imóvel público), recebimento de doações, incorporação de bens e direitos e recebimento de transferências correntes. A exclusão final é o que separa receita de contribuição dos proprietários (item 5.33).</p><p class='fb-fonte'>Resumo 02 · <i>Receita (item 5.29)</i></p>",
26:"<p>Certo — definição do item 5.30, espelho da receita: despesa corresponde a <b>diminuições na situação patrimonial líquida</b> da entidade <b>não oriundas de distribuições aos proprietários</b>.</p><p>Exemplos do Resumo: depreciação de ativo, manutenção de rodovias, contratação de serviços terceirizados (limpeza e segurança), realização de obras públicas e despesas com salários.</p><p class='fb-fonte'>Resumo 02 · <i>Despesa (item 5.30)</i></p>",
27:"<p>Errado exatamente na ressalva que a assertiva inverteu. O item 5.29 exclui: receita é o aumento na situação patrimonial líquida <b>não oriundo de contribuições dos proprietários</b>.</p><p>A contribuição dos proprietários também aumenta o PL, mas é <b>elemento autônomo</b> (item 5.33), e não receita. Elas são duas das seis estruturas do item 5.5 justamente por não se confundirem.</p><p class='fb-fonte'>Resumo 02 · <i>Receita (itens 5.29 e 5.33)</i></p>",
28:"<p>Errado no \"apenas\". O item 5.31 é expresso: receitas e despesas originam-se de transações <b>com contraprestação e sem contraprestação</b>, além de outros eventos.</p><p>O esquema do Resumo lista as origens: transações com contraprestação; sem contraprestação; <b>aumentos e decréscimos não realizados</b> de ativos e passivos; <b>consumo dos ativos por meio da depreciação</b>; <b>redução ao valor recuperável</b>; e transações individuais ou grupos de transações.</p><p class='fb-fonte'>Resumo 02 · <i>Receitas e Despesas (item 5.31)</i></p>",
29:"<p>Certo. O item 5.31 cita nominalmente o <b>consumo dos ativos por meio da depreciação</b> entre as origens de receitas e despesas.</p><p>Confere com os exemplos de despesa do Resumo, que abrem justamente com <b>depreciação de ativo</b>. Note que a despesa aqui não depende de desembolso: basta a diminuição na situação patrimonial líquida (item 5.30).</p><p class='fb-fonte'>Resumo 02 · <i>Receitas e Despesas (item 5.31)</i></p>",
30:"<p>Certo. O item 5.31 inclui entre as origens a <b>redução do potencial de serviços e da capacidade de gerar benefícios econômicos por meio da redução ao valor recuperável</b>.</p><p>É o mesmo raciocínio da depreciação: a perda de potencial de serviços reduz a situação patrimonial líquida e, por isso, gera despesa, sem que haja qualquer saída de caixa no momento do registro.</p><p class='fb-fonte'>Resumo 02 · <i>Receitas e Despesas (item 5.31)</i></p>",
31:"<p>Certo — é a frase final do item 5.31: receitas e despesas podem ser originadas de <b>transações individuais ou de grupos de transações</b>.</p><p>É o último item do esquema de origens do Resumo. A norma não exige que cada receita ou despesa seja rastreada a uma transação isolada — o agrupamento é admitido, coerentemente com a ideia de <b>classes amplas</b> do item 5.2.</p><p class='fb-fonte'>Resumo 02 · <i>Receitas e Despesas (item 5.31)</i></p>",
32:"<p>Certo — é exatamente a explicação do Resumo sobre o item 5.31. Nas transações sem contraprestação, a entidade <b>recebe um ativo (ex.: doação) sem ter que assumir um passivo</b>, e o material anota entre parênteses: <b>aqui ocorrerá uma receita</b>.</p><p>O espelho também é do material: se a entidade <b>assume um passivo (ex.: dívida) sem receber nada em troca</b>, ocorrerá uma <b>despesa</b>. Guarde o par — recebe sem assumir, receita; assume sem receber, despesa.</p><p class='fb-fonte'>Resumo 02 · <i>Receitas e Despesas — transações sem contraprestação (item 5.31)</i></p>",
33:"<p>Certo pela letra do item 5.33: contribuição dos proprietários corresponde a <b>entrada de recursos</b> para a entidade a título de contribuição de <b>partes externas</b>, que <b>estabelece ou aumenta</b> a participação delas no patrimônio líquido da entidade.</p><p>O comentário do Resumo exemplifica: acionistas ou investidores que aportam dinheiro, ativos tangíveis ou intangíveis, ou empréstimos convertidos em participação acionária. Esse aumento de PL não é receita, por força da exclusão do item 5.29.</p><p class='fb-fonte'>Resumo 02 · <i>Contribuição dos Proprietários (item 5.33)</i></p>",
34:"<p>Certo pela letra do item 5.34: distribuição aos proprietários corresponde a <b>saída de recursos</b> da entidade a título de distribuição a <b>partes externas</b>, que representa <b>retorno sobre a participação</b> ou a <b>redução dessa participação</b> no patrimônio líquido.</p><p>O comentário do Resumo traduz: é quando os proprietários recebem parte dos lucros ou reduzem sua participação na entidade. Note a simetria com o item 5.33 — entrada/saída, aumenta/reduz participação.</p><p class='fb-fonte'>Resumo 02 · <i>Distribuição aos Proprietários (item 5.34)</i></p>",
35:"<p>Errado. A distribuição aos proprietários é <b>elemento autônomo</b> das demonstrações contábeis (item 5.5), e não despesa.</p><p>A prova está na própria definição de despesa: o item 5.30 fala em diminuições na situação patrimonial líquida <b>não oriundas de distribuições aos proprietários</b>. Se a norma precisou excluí-la, é porque ela não é despesa.</p><p class='fb-fonte'>Resumo 02 · <i>Despesa e Distribuição aos Proprietários (itens 5.30 e 5.34)</i></p>",
36:"<p>Errado, pelo mesmo raciocínio invertido. A contribuição dos proprietários é <b>elemento autônomo</b> (item 5.5), não receita.</p><p>O item 5.29 define receita como aumento na situação patrimonial líquida <b>não oriundo de contribuições dos proprietários</b> — a exclusão expressa mostra que os dois conceitos não se misturam, embora ambos aumentem o PL.</p><p class='fb-fonte'>Resumo 02 · <i>Receita e Contribuição dos Proprietários (itens 5.29 e 5.33)</i></p>",
37:"<p>Certo — é a lista de cinco do item 7.6: <b>custo histórico, valor de mercado, custo de reposição ou substituição, preço líquido de venda e valor em uso</b>.</p><p>Use o quadro comparativo do Resumo para não trocar com os passivos: do lado do passivo (item 7.69) mudam três nomes — custo de reposição vira <b>preço presumido</b>, preço líquido de venda vira <b>custo de liberação</b>, e valor em uso vira <b>custo de cumprimento da obrigação</b>. Custo histórico e valor de mercado são comuns aos dois.</p><p class='fb-fonte'>Resumo 02 · <i>Bases de Mensuração para os Ativos (item 7.6)</i></p>",
38:"<p>Certo. O item 7.6 diz que as bases de mensuração para os ativos são identificadas e discutidas <b>à luz da informação que fornecem</b> sobre o custo de serviços prestados, a capacidade operacional e a capacidade financeira da entidade.</p><p>O comentário do Resumo fecha a lista com um quarto ponto, que a banca costuma esquecer: a <b>extensão na qual fornecem informação que satisfaça as características qualitativas</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Bases de Mensuração para os Ativos (item 7.6)</i></p>",
39:"<p>Certo pela letra do item 7.13: custo histórico de um ativo é a <b>importância fornecida</b> para se adquirir ou desenvolver um ativo, correspondente ao caixa ou equivalentes de caixa, ou ao valor de outra importância fornecida <b>à época</b> de sua aquisição ou desenvolvimento.</p><p>Repare no verbo: no ativo a importância é <b>fornecida</b>; no passivo (item 7.70) é <b>recebida</b>. O exemplo do Resumo é o município que contrata empresa para construir uma <b>praça em até 5 anos</b> — o valor fornecido em dinheiro é o custo histórico do ativo.</p><p class='fb-fonte'>Resumo 02 · <i>Custo Histórico para os Ativos (item 7.13)</i></p>",
40:"<p>Certo — literalidade do item 7.22: as mensurações a valor corrente refletem o <b>ambiente econômico vigente na data de apresentação do relatório</b>.</p><p>É o contraste direto com o custo histórico, que, como o Resumo diz, fica <b>congelado</b>, independentemente da variação do valor de mercado e da inflação. Quanto maior essa variação, menos relevante a informação baseada em custo histórico.</p><p class='fb-fonte'>Resumo 02 · <i>Mensurações a Valor Corrente para os Ativos (item 7.22)</i></p>",
41:"<p>Certo. O item 7.23 é numericamente expresso: existem <b>quatro</b> bases de mensuração a valor corrente para os ativos — valor de mercado, custo de reposição ou substituição, preço líquido de venda e valor em uso.</p><p>O esquema do Resumo coloca as cinco bases do item 7.6 em coluna e marca com uma chave apenas as quatro últimas como bases a valor corrente (item 7.23). A que fica de fora é o custo histórico.</p><p class='fb-fonte'>Resumo 02 · <i>Mensurações a Valor Corrente para os Ativos (item 7.23)</i></p>",
42:"<p>Errado. O custo histórico <b>não</b> é base a valor corrente — o item 7.23 lista apenas quatro: valor de mercado, custo de reposição ou substituição, preço líquido de venda e valor em uso.</p><p>A incompatibilidade é conceitual: o valor corrente reflete o <b>ambiente econômico vigente na data do relatório</b> (item 7.22), enquanto no custo histórico, como diz o Resumo, o custo fica <b>congelado</b> na época da aquisição. O custo histórico permanece a base da maioria dos casos por sua <b>verificabilidade</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Custo Histórico e Valor Corrente (itens 7.13, 7.22 e 7.23)</i></p>",
43:"<p>Certo pela letra do item 7.24: valor de mercado para ativos é o montante pelo qual um ativo <b>pode ser trocado entre partes cientes e dispostas</b>, em transação sob <b>condições normais de mercado</b>.</p><p>O comentário do Resumo explica \"condições normais\": ambiente em que a oferta e a demanda não estão distorcidas por fatores externos como <b>políticas governamentais</b> (intervenções do governo), <b>eventos geopolíticos</b> (guerra) e <b>eventos naturais</b> (enchentes, calamidades, secas).</p><p class='fb-fonte'>Resumo 02 · <i>Valor de Mercado para os Ativos (item 7.24)</i></p>",
44:"<p>Certo pela letra do item 7.37: custo de reposição ou substituição é o <b>custo mais econômico</b> exigido para a entidade <b>substituir o potencial de serviços</b> do ativo <b>na data do relatório</b>.</p><p>Guarde o parêntese da norma, que a banca corta: inclui o <b>montante que a entidade recebe a partir da alienação do ativo ao final da sua vida útil</b>. E note os dois qualificadores — mais econômico e na data do relatório —, que são o alvo preferido das trocas.</p><p class='fb-fonte'>Resumo 02 · <i>Custo de Reposição ou Substituição para os Ativos (item 7.37)</i></p>",
45:"<p>Errado justamente no que dá nome à base. Pelo item 7.49, preço líquido de venda é o montante que a entidade pode obter com a venda do ativo <b>após deduzir os gastos para a venda</b>.</p><p>O exemplo do Resumo: a prefeitura que vende um terreno obtém o preço líquido de venda subtraindo as despesas da operação — <b>honorários de corretores imobiliários, custos legais e administrativos</b>. Sem dedução, não é preço \"líquido\".</p><p class='fb-fonte'>Resumo 02 · <i>Preço Líquido de Venda para os Ativos (item 7.49)</i></p>",
46:"<p>Certo pela letra do item 7.58: valor em uso é o <b>valor presente</b>, para a entidade, do potencial de serviços ou da capacidade de gerar benefícios econômicos <b>remanescentes</b> do ativo, caso este continue a ser utilizado, <b>e</b> do valor líquido que a entidade receberá pela alienação ao final da vida útil.</p><p>O exemplo do Resumo é o <b>prédio público</b>: soma-se, a valor presente, o benefício futuro do uso (aluguéis ou economia com aluguel) e o valor líquido estimado da venda futura. São duas parcelas, não uma.</p><p class='fb-fonte'>Resumo 02 · <i>Valor em Uso para os Ativos (item 7.58)</i></p>",
47:"<p>Certo — é a lista do item 7.69: <b>custo histórico, custo de cumprimento da obrigação, valor de mercado, custo de liberação e preço presumido</b>.</p><p>O quadro comparativo do Resumo alinha os pares: custo histórico ↔ custo histórico; valor de mercado ↔ valor de mercado; custo de reposição ou substituição ↔ <b>preço presumido</b>; preço líquido de venda ↔ <b>custo de liberação</b>; valor em uso ↔ <b>custo de cumprimento da obrigação</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Bases de Mensuração para os Passivos (item 7.69) e Quadro Comparativo</i></p>",
48:"<p>Certo pela letra do item 7.70: custo histórico para o passivo é a <b>importância recebida</b> para se assumir uma obrigação, correspondente ao caixa ou equivalentes de caixa, ou ao valor de outra importância recebida <b>à época na qual a entidade incorreu no passivo</b>.</p><p>Compare com o ativo (item 7.13), que fala em importância <b>fornecida</b>. O exemplo do Resumo é o município que toma <b>financiamento para construir uma praça em até 5 anos</b>: o valor recebido é o custo histórico do passivo.</p><p class='fb-fonte'>Resumo 02 · <i>Custo Histórico para os Passivos (item 7.70)</i></p>",
49:"<p>Certo pela letra do item 7.74: custo de cumprimento da obrigação corresponde aos custos nos quais a entidade incorre no cumprimento das obrigações representadas pelo passivo, <b>assumindo que o faz da maneira menos onerosa</b>.</p><p>O exemplo do Resumo: a entidade que deve a um fornecedor pode <b>pesquisar e negociar com outros fornecedores</b> para obter preço mais acessível e reduzir o custo de cumprimento. No quadro comparativo, essa base é a correspondente ao <b>valor em uso</b> dos ativos.</p><p class='fb-fonte'>Resumo 02 · <i>Custo de Cumprimento da Obrigação (item 7.74)</i></p>",
50:"<p>Certo pela letra do item 7.80: valor de mercado para passivos é o montante pelo qual um passivo <b>pode ser liquidado entre partes cientes e interessadas</b> em transação sob <b>condições normais de mercado</b>.</p><p>O exemplo do Resumo com números: a entidade tem empréstimo bancário de <b>R$ 100.000</b>; se outra instituição financeira estiver disposta a pagar <b>R$ 90.000</b> para adquirir esse empréstimo, o valor de mercado do passivo é <b>R$ 90.000</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Valor de Mercado para os Passivos (item 7.80)</i></p>",
51:"<p>Errado na correspondência. Pelo item 7.82, o custo de liberação é o termo que, no contexto dos passivos, se refere ao mesmo conceito de <b>preço líquido de venda</b> dos ativos — e não de custo de reposição.</p><p>Quem corresponde ao custo de reposição é o <b>preço presumido</b> (item 7.87). Confira no quadro comparativo do Resumo: preço líquido de venda ↔ custo de liberação; custo de reposição ou substituição ↔ preço presumido.</p><p class='fb-fonte'>Resumo 02 · <i>Custo de Liberação (item 7.82) e Quadro Comparativo</i></p>",
52:"<p>Certo pela parte final do item 7.82: havendo mais de um modo de garantir a liberação do passivo, o custo de liberação é aquele que representa o <b>menor montante</b>.</p><p>A norma diz ser isso consistente com a abordagem dos ativos, em que o preço líquido de venda <b>não refletiria</b> o montante da venda a sucateiro se preço maior pudesse ser obtido com o comprador que utilizaria o ativo. O exemplo numérico do Resumo: dívida de <b>R$ 10.000</b> que o credor aceita liquidar imediatamente por <b>R$ 8.000</b> — custo de liberação de R$ 8.000.</p><p class='fb-fonte'>Resumo 02 · <i>Custo de Liberação para os Passivos (item 7.82)</i></p>",
53:"<p>Certo pela letra do item 7.87: o preço presumido representa o montante que a entidade <b>racionalmente aceitaria na troca pela assunção do passivo existente</b>.</p><p>A norma constrói o conceito por simetria: assim como o custo de reposição é o que a entidade pagaria racionalmente para adquirir o ativo, o preço presumido é o que ela aceitaria para assumir o passivo. O exemplo do Resumo: dívida de <b>R$ 10.000</b> de um fornecedor que a entidade aceitaria assumir por <b>R$ 9.000</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Preço Presumido para os Passivos (item 7.87)</i></p>",
54:"<p>Errado — inverteu a ressalva do item 7.87. As transações <b>com</b> contraprestação realizadas em condições normais é que fornecem evidência do preço presumido; <b>esse não é o caso das transações sem contraprestação</b>.</p><p>A razão está no comentário do Resumo: na transação com contraprestação a entidade <b>recebe algo</b> (dinheiro, bens ou serviços) em troca de assumir o passivo de terceiro, e esse valor recebido serve de evidência. Na transação sem contraprestação ela assume o passivo <b>sem receber nada em troca</b>, o que torna o cálculo mais desafiador.</p><p class='fb-fonte'>Resumo 02 · <i>Preço Presumido para os Passivos (item 7.87)</i></p>",
55:"<p>Certo — é a leitura direta do quadro comparativo do Resumo. <b>Custo histórico</b> e <b>valor de mercado</b> são as duas únicas bases que aparecem com o mesmo nome nas duas colunas, a de ativos (item 7.6) e a de passivos (item 7.69).</p><p>O que muda é o conteúdo: no ativo o custo histórico é a importância <b>fornecida</b> (7.13) e no passivo a importância <b>recebida</b> (7.70); o valor de mercado do ativo é o montante de <b>troca</b> (7.24) e o do passivo, o montante de <b>liquidação</b> (7.80).</p><p class='fb-fonte'>Resumo 02 · <i>Quadro Comparativo (itens 7.6 e 7.69)</i></p>",
56:"<p>Errado. O <b>valor em uso</b> consta apenas da lista dos ativos (item 7.6). Nas bases dos passivos (item 7.69) não há valor em uso: a base correspondente é o <b>custo de cumprimento da obrigação</b>.</p><p>Sempre que a assertiva exportar um nome exclusivo de uma coluna para a outra, recorra ao quadro comparativo do Resumo. Só <b>custo histórico</b> e <b>valor de mercado</b> aparecem dos dois lados.</p><p class='fb-fonte'>Resumo 02 · <i>Quadro Comparativo (itens 7.6 e 7.69)</i></p>",
57:"<p>Errado — a base está do lado errado do quadro. O <b>custo de cumprimento da obrigação</b> é base dos <b>passivos</b> (item 7.74), correspondente ao <b>valor em uso</b> dos ativos.</p><p>Faz sentido pela própria definição: são os custos em que a entidade incorre para <b>cumprir obrigações representadas pelo passivo</b>, da maneira menos onerosa. Falar em cumprir obrigação a respeito de um ativo já denuncia a troca.</p><p class='fb-fonte'>Resumo 02 · <i>Custo de Cumprimento da Obrigação (item 7.74) e Quadro Comparativo</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"02", nome:"Estrutura Conceitual (2ª parte)", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
