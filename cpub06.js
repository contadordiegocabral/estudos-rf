/* Contabilidade Pública — Módulo 06: Plano de Contas Aplicado ao Setor Público (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cpub06 = (function(){
"use strict";

var CARDS = [
  ["O que é o PCASP?","A <b>estrutura básica da escrituração contábil</b>, formada por uma <b>relação padronizada de contas contábeis</b>, que permite o registro dos atos e fatos de maneira <b>padronizada e sistematizada</b> e a elaboração de relatórios gerenciais e demonstrações contábeis."],
  ["O que é uma conta contábil (MCASP)?","A <b>expressão qualitativa e quantitativa de fatos de mesma natureza</b>, evidenciando a <b>composição, variação e estado do patrimônio</b>, bem como de bens, direitos, obrigações e <b>situações nele não compreendidas</b> que possam vir a afetá-lo direta ou indiretamente."],
  ["Quem institui e mantém o PCASP?","A <b>Secretaria do Tesouro Nacional (STN)</b>, como <b>órgão central de contabilidade da União</b> — competência atribuída pela <b>LRF</b>. Cabe a ela criar, alterar, excluir, codificar, especificar, desdobrar e detalhar as contas."],
  ["Para quem o PCASP é obrigatório?","Para <b>todos os órgãos e entidades da administração direta e indireta</b> dos entes, incluindo <b>fundos, autarquias (inclusive especiais), fundações e empresas estatais dependentes</b>."],
  ["Para quem o PCASP é facultativo?","Para as <b>demais entidades</b> — por exemplo, as <b>estatais independentes</b>."],
  ["Objetivos do PCASP — os três primeiros","<b>1)</b> padronizar os registros contábeis; <b>2)</b> <b>distinguir os registros de natureza patrimonial, orçamentária e de controle</b>; <b>3)</b> atender à administração direta e indireta das três esferas, inclusive estatais dependentes e RPPS."],
  ["Objetivos do PCASP — os demais","<b>4)</b> permitir o <b>detalhamento a partir do nível mínimo da STN</b>; <b>5)</b> permitir a <b>consolidação nacional</b>; <b>6)</b> permitir a elaboração das <b>DCASP</b>, do <b>RREO</b> e do <b>RGF</b>; <b>7)</b> permitir prestação de contas, estatísticas de finanças públicas e relatórios no padrão do <b>GFSM do FMI</b>; <b>8)</b> contribuir para a tomada de decisão e a racionalização de custos; <b>9)</b> contribuir para a <b>transparência fiscal e o controle social</b>."],
  ["Quais as três naturezas da informação contábil?","<b>Orçamentária</b>, <b>Patrimonial</b> e <b>de Controle</b>."],
  ["Natureza orçamentária — o que registra","Os <b>atos e fatos relacionados ao planejamento e à execução orçamentária</b>."],
  ["Natureza patrimonial — o que registra","Os <b>fatos financeiros e não financeiros</b> relacionados com a <b>composição do patrimônio público</b> e suas <b>variações qualitativas e quantitativas</b>."],
  ["Natureza de controle — o que registra","Os <b>atos de gestão cujos efeitos possam produzir modificações no patrimônio</b>, bem como aqueles com <b>funções específicas de controle</b>."],
  ["Quantas classes tem o PCASP?","<b>Oito.</b>"],
  ["Classes 1 a 4 — quais são e qual a natureza?","Natureza <b>PATRIMONIAL</b>: <b>1</b> Ativo · <b>2</b> Passivo e PL · <b>3</b> VPD · <b>4</b> VPA."],
  ["Classes 5 e 6 — quais são e qual a natureza?","Natureza <b>ORÇAMENTÁRIA</b>: <b>5</b> Controles da Aprovação do Planejamento e Orçamento (<b>CAPO</b>) · <b>6</b> Controles da Execução do Planejamento e Orçamento (<b>CEPO</b>)."],
  ["Classes 7 e 8 — quais são e qual a natureza?","Natureza de <b>CONTROLE</b>: <b>7</b> Controles Devedores · <b>8</b> Controles Credores."],
  ["Qual a natureza de saldo de cada classe?","<b>Ímpares (1, 3, 5, 7)</b> → <b>devedora</b>. <b>Pares (2, 4, 6, 8)</b> → <b>credora</b>."],
  ["O que acontece com as classes 3 e 4 no fim do exercício?","São <b>encerradas</b>, representando o <b>resultado patrimonial levado para a conta de patrimônio líquido</b>. E o Balanço Patrimonial apresentará <b>Classe 1 = Classe 2</b>."],
  ["Quantos dígitos e níveis tem o código da conta?","<b>9 dígitos</b> e <b>7 níveis</b> de desdobramento."],
  ["Quais são os 7 níveis, na ordem?","<b>1</b> Classe · <b>2</b> Grupo · <b>3</b> Subgrupo · <b>4</b> Título · <b>5</b> Subtítulo · <b>6</b> Item · <b>7</b> Subitem."],
  ["Como se distribuem os 9 dígitos pelos 7 níveis?","<b>1 dígito</b> em cada um dos cinco primeiros níveis e <b>2 dígitos</b> no <b>item</b> e no <b>subitem</b>: <b>X.X.X.X.X.XX.XX</b>."],
  ["O que o primeiro dígito identifica?","A <b>classe</b> a que a conta pertence — é a decoreba que mais cai."],
  ["Grupos da classe 1 e da classe 2","<b>1.1</b> Ativo Circulante · <b>1.2</b> Ativo Não Circulante. <b>2.1</b> Passivo Circulante · <b>2.2</b> Passivo Não Circulante · <b>2.3</b> Patrimônio Líquido."],
  ["Grupos da classe 5 (CAPO) — mnemônico POR","<b>5.1</b> <b>P</b>lanejamento Aprovado · <b>5.2</b> <b>O</b>rçamento Aprovado · <b>5.3</b> Inscrição de <b>R</b>estos a Pagar."],
  ["Grupos da classe 6 (CEPO) — mnemônico “execução do POR”","<b>6.1</b> Execução do <b>P</b>lanejamento · <b>6.2</b> Execução do <b>O</b>rçamento · <b>6.3</b> Execução de <b>R</b>estos a Pagar."],
  ["Onde fica “Inscrição de Restos a Pagar”?","Classe <b>5</b> (CAPO), grupo <b>5.3</b>."],
  ["Onde fica “Execução de Restos a Pagar”?","Classe <b>6</b> (CEPO), grupo <b>6.3</b>."],
  ["Onde fica “Execução da Dívida Ativa”?","Classe <b>8</b> (Controles Credores), grupo <b>8.3</b>. A <b>Dívida Ativa</b> em si é <b>7.3</b>."],
  ["Até que nível o ente pode detalhar?","Somente nos <b>níveis posteriores</b> ao já apresentado na relação de contas do PCASP. Se a conta vai até o 6º nível, o ente detalha a partir do <b>7º</b> — vedada a alteração dos anteriores."],
  ["Qual a única exceção a essa regra?","A <b>abertura do 5º nível (subtítulo)</b> das contas de <b>natureza patrimonial</b>, que obrigatoriamente será classificado em <b>Intra OFSS</b>, <b>Inter OFSS</b> ou <b>Consolidação</b>."],
  ["Quantos níveis os planos de contas dos entes devem ter?","<b>Pelo menos 7</b>. Os níveis não detalhados são codificados com o dígito <b>0</b>."],
  ["O ente pode ir além do 7º nível?","<b>Sim</b>, se entender necessário — por exemplo, para registrar informações complementares na conta contábil."],
  ["Para que serve o 5º nível nas classes 1 a 4?","Para <b>segregar os valores das transações que serão incluídas ou excluídas na consolidação</b>, identificando os <b>saldos recíprocos</b>."],
  ["5º nível — dígito 1","<b>CONSOLIDAÇÃO</b>: saldos que <b>NÃO serão excluídos</b> nos demonstrativos consolidados do OFSS."],
  ["5º nível — dígito 2","<b>INTRA OFSS</b>: saldos <b>excluídos</b> nos demonstrativos consolidados do OFSS do <b>MESMO ente</b>."],
  ["5º nível — dígitos 3, 4 e 5","<b>INTER OFSS</b>, entre entes distintos: <b>3</b> = União · <b>4</b> = Estado · <b>5</b> = Município."],
  ["Numa transação entre um Estado e um Município, quem usa qual dígito?","O <b>Estado</b> usa o <b>5</b> (Inter OFSS – Município) e o <b>Município</b> usa o <b>4</b> (Inter OFSS – Estado). O dígito identifica <b>a outra ponta</b>."],
  ["Que dígito as contas de bens sempre levam?","O dígito <b>1 (Consolidação)</b> — caso contrário o bem não ficaria registrado em nenhum ente na consolidação nacional."],
  ["O 5º nível pode ser usado nas classes 7 e 8?","<b>Excepcionalmente, sim</b> — por exemplo, para elaborar o <b>Quadro das Contas de Compensação</b>, anexo do Balanço Patrimonial, com os atos potenciais ativos e passivos."],
  ["A quais contas o PCASP restringiu o detalhamento do 5º nível?","Às <b>consideradas relevantes para fins do processo de consolidação</b>."],
  ["O que é o indicador do superávit financeiro?","Um <b>atributo</b> colocado ao lado das contas de natureza patrimonial para identificar se são <b>financeiras (F)</b> ou <b>permanentes (P)</b>."],
  ["O que é superávit financeiro (art. 43, § 2º)?","A <b>diferença positiva entre o ativo financeiro e o passivo financeiro</b>, conjugando-se ainda os <b>saldos dos créditos adicionais transferidos</b> e as <b>operações de crédito a eles vinculadas</b>."],
  ["Quando um passivo permanente vira financeiro?","<b>Após o empenho</b> — considera-se efetivada a autorização orçamentária e o passivo passa a integrar o <b>passivo financeiro</b>."],
  ["Que passivos já nascem financeiros?","Os que <b>não são submetidos ao processo de execução orçamentária</b>, a exemplo das <b>cauções</b>."],
  ["Como se controla a mudança de P para F?","Pela <b>informação complementar</b> da conta contábil, ou pela <b>duplicação das contas</b> — uma permanente e outra financeira."],
  ["O que significa o atributo “F/P”?","Que a conta pode ter <b>parte do saldo financeiro e parte permanente</b>."],
  ["Por que o pagamento exige o atributo F?","Porque o pagamento <b>só pode ser efetuado se o passivo estiver marcado como Financeiro</b> — daí o lançamento de troca <b>D</b> passivo (P) / <b>C</b> passivo (F), concomitante à execução orçamentária."],
  ["Quais são as quatro regras de integridade do PCASP?","<b>a)</b> Lançamentos contábeis · <b>b)</b> Pagamento e recebimento · <b>c)</b> Desenvolvimento de equações contábeis · <b>d)</b> Consistência dos registros e saldos de contas."],
  ["Regra dos lançamentos contábeis","Método das <b>partidas dobradas</b>, debitando e creditando contas de <b>mesma natureza de informação</b>: o lançamento fica fechado <b>dentro das classes 1 a 4</b>, <b>ou 5 e 6</b>, <b>ou 7 e 8</b>."],
  ["A equação contábil de conferência do PCASP","<b>Classe 1 (Ativo) + Classe 3 (VPD) = Classe 2 (Passivo e PL) + Classe 4 (VPA)</b>."],
  ["Consistência — o que é saldo invertido?","Conta de saldo naturalmente devedor apresentando saldo credor (ou vice-versa) — pode indicar <b>operação indevida</b>."],
  ["Consistência — utilização indevida de contas","Exemplo do MCASP: uma <b>escola de ensino básico</b> com saldo na conta <b>“Aeronaves”</b> do imobilizado provavelmente classificou algo de forma indevida."],
  ["Qual o limite recomendado para contas “Outros(as)”?","Que os registros nelas sejam limitados a <b>10% do total do grupo</b>."],
  ["O que mais deve ser analisado na consistência?","<b>Classificação inadequada</b> de receitas e despesas e <b>saldos irrisórios ou residuais</b>, ou sem movimentação por longo período."]
];

var QS = [
  ["O PCASP é a estrutura básica da escrituração contábil, formada por uma relação padronizada de contas contábeis.","C","FUNDATEC","Conceito do MCASP."],
  ["Conta é a expressão qualitativa e quantitativa de fatos de mesma natureza, evidenciando a composição, variação e estado do patrimônio.","C","CESPE","Conceito de conta no MCASP."],
  ["A conta contábil evidencia apenas bens, direitos e obrigações compreendidos no patrimônio.","E","FCC","Alcança também <b>situações nele não compreendidas</b> que possam afetá-lo direta ou indiretamente."],
  ["A competência para a edição de normas gerais de consolidação das contas públicas foi atribuída pela LRF à Secretaria do Tesouro Nacional.","C","FGV","Como órgão central de contabilidade da União."],
  ["Cabe ao Tribunal de Contas da União criar, alterar e detalhar as contas do PCASP.","E","VUNESP","Cabe à <b>STN</b>."],
  ["A utilização do PCASP é obrigatória para os órgãos e entidades da administração direta e indireta, incluindo fundos, autarquias, fundações e empresas estatais dependentes.","C","FUNDATEC","Alcance do PCASP."],
  ["A utilização do PCASP é obrigatória também para as empresas estatais independentes.","E","CESPE","Para elas é <b>facultativa</b>."],
  ["É objetivo do PCASP distinguir os registros de natureza patrimonial, orçamentária e de controle.","C","FCC","Segundo objetivo."],
  ["É objetivo do PCASP permitir a consolidação nacional das contas públicas.","C","FGV","Quinto objetivo."],
  ["É objetivo do PCASP permitir a elaboração das DCASP e dos demonstrativos do RREO e do RGF.","C","VUNESP","Sexto objetivo."],
  ["O PCASP permite o detalhamento das contas a partir do nível máximo estabelecido pela STN.","E","FUNDATEC","A partir do <b>nível mínimo</b> estabelecido pela STN."],
  ["É objetivo do PCASP permitir a elaboração de relatórios nos padrões do Government Finance Statistics Manual do FMI.","C","CESPE","Sétimo objetivo."],
  ["A natureza de informação orçamentária registra os atos e fatos relacionados ao planejamento e à execução orçamentária.","C","FCC","Definição do MCASP."],
  ["A natureza de informação patrimonial registra os fatos financeiros e não financeiros relacionados à composição do patrimônio e suas variações qualitativas e quantitativas.","C","FGV","Definição do MCASP."],
  ["A natureza de informação de controle registra os atos de gestão cujos efeitos possam produzir modificações no patrimônio, bem como os de funções específicas de controle.","C","VUNESP","Definição do MCASP."],
  ["O PCASP é dividido em sete classes contábeis.","E","FUNDATEC","São <b>oito</b> classes."],
  ["As classes 1 a 4 do PCASP correspondem à natureza de informação patrimonial.","C","CESPE","Ativo, Passivo e PL, VPD e VPA."],
  ["As classes 5 e 6 do PCASP correspondem à natureza de informação de controle.","E","FCC","Correspondem à natureza <b>orçamentária</b>. Controle são as classes <b>7 e 8</b>."],
  ["A classe 3 do PCASP corresponde às variações patrimoniais diminutivas e a classe 4, às aumentativas.","C","FGV","VPD e VPA."],
  ["A classe 5 do PCASP corresponde aos Controles da Aprovação do Planejamento e Orçamento.","C","VUNESP","CAPO."],
  ["A classe 6 do PCASP corresponde aos Controles da Execução do Planejamento e Orçamento.","C","FUNDATEC","CEPO."],
  ["As classes de número ímpar do PCASP possuem natureza credora e as de número par, natureza devedora.","E","CESPE","Está invertido: <b>ímpares devedoras</b> (1, 3, 5, 7) e <b>pares credoras</b> (2, 4, 6, 8)."],
  ["Ao final do exercício, os valores das classes 3 e 4 são encerrados, representando o resultado patrimonial levado para a conta de patrimônio líquido.","C","FCC","E o BP apresenta Classe 1 = Classe 2."],
  ["As contas contábeis do PCASP são identificadas por códigos de nove dígitos e sete níveis de desdobramento.","C","FGV","Estrutura X.X.X.X.X.XX.XX."],
  ["Os sete níveis da conta contábil são, na ordem, classe, grupo, subgrupo, título, subtítulo, item e subitem.","C","VUNESP","Ordem literal do MCASP."],
  ["No código da conta contábil, os níveis de item e subitem possuem dois dígitos cada.","C","FUNDATEC","Os cinco primeiros têm um dígito cada."],
  ["Uma conta iniciada pelo dígito 4 pertence à classe das variações patrimoniais diminutivas.","E","CESPE","O dígito 4 é das <b>VPA</b>. As VPD são a classe <b>3</b>."],
  ["Uma conta iniciada pelo dígito 7 pertence à classe dos controles devedores.","C","FCC","E o 8, aos controles credores."],
  ["No PCASP, os grupos da classe 2 são passivo circulante, passivo não circulante e patrimônio líquido.","C","FGV","2.1, 2.2 e 2.3."],
  ["Os grupos da classe 5 são planejamento aprovado, orçamento aprovado e inscrição de restos a pagar.","C","VUNESP","Mnemônico POR."],
  ["Os grupos da classe 6 são execução do planejamento, execução do orçamento e execução de restos a pagar.","C","FUNDATEC","Execução do POR."],
  ["As contas Inscrição de Restos a Pagar, Execução de Restos a Pagar e Execução da Dívida Ativa pertencem, respectivamente, às classes 5, 6 e 8.","C","CESPE","Questão-exemplo do próprio resumo."],
  ["A conta Dívida Ativa pertence ao grupo 8.3 do PCASP.","E","FCC","A Dívida Ativa é <b>7.3</b>; o <b>8.3</b> é a <b>Execução</b> da Dívida Ativa."],
  ["Os entes da Federação somente poderão detalhar a conta contábil nos níveis posteriores ao nível apresentado na relação de contas do PCASP.","C","FGV","Vedada a alteração dos níveis anteriores."],
  ["A única exceção à regra de detalhamento é a abertura do 5º nível das contas de natureza patrimonial.","C","VUNESP","Classificado em Intra OFSS, Inter OFSS ou Consolidação."],
  ["Os planos de contas dos entes da Federação deverão ter pelo menos cinco níveis.","E","FUNDATEC","Pelo menos <b>sete</b> níveis."],
  ["Eventuais níveis não detalhados deverão ser codificados com o dígito zero.","C","CESPE","Como em 3.4.4.0.1.00.00."],
  ["É vedado aos entes desdobrar as contas contábeis além do sétimo nível.","E","FCC","Podem desdobrar além do 7º nível se entenderem necessário."],
  ["O mecanismo de consolidação consiste na utilização do 5º nível das classes 1, 2, 3 e 4 para identificar os saldos recíprocos.","C","FGV","Contas de natureza patrimonial."],
  ["No 5º nível, o dígito 1 identifica os saldos que serão excluídos nos demonstrativos consolidados do OFSS.","E","VUNESP","O dígito 1 é <b>Consolidação</b> — saldos que <b>NÃO</b> serão excluídos."],
  ["No 5º nível, o dígito 2 identifica as operações entre entidades pertencentes ao OFSS do mesmo ente público.","C","FUNDATEC","Intra OFSS."],
  ["No 5º nível, os dígitos 3, 4 e 5 identificam operações Inter OFSS com a União, com Estado e com Município, respectivamente.","C","CESPE","O dígito aponta a outra ponta da transação."],
  ["Numa transação entre um Estado e um Município, o Estado utilizará o dígito 4 e o Município, o dígito 5.","E","FCC","É o contrário: o Estado usa o <b>5</b> (Município) e o Município usa o <b>4</b> (Estado)."],
  ["As contas de bens sempre apresentarão o dígito 1 no 5º nível.","C","FGV","Caso contrário, o bem não estaria registrado em nenhum ente na consolidação nacional."],
  ["É vedada, em qualquer hipótese, a utilização do 5º nível nas contas das classes 7 e 8.","E","VUNESP","Há casos excepcionais, como o Quadro das Contas de Compensação."],
  ["O indicador do superávit financeiro é um atributo que identifica se as contas de ativo e passivo são financeiras ou permanentes.","C","FUNDATEC","Letras F e P ao lado das contas patrimoniais."],
  ["Entende-se por superávit financeiro a diferença positiva entre o ativo financeiro e o passivo financeiro, conjugando-se ainda os saldos dos créditos adicionais transferidos e as operações de crédito a eles vinculadas.","C","CESPE","Art. 43, § 2º, da Lei 4.320/64."],
  ["Após o empenho, considera-se efetivada a autorização orçamentária e os passivos permanentes passam a integrar o passivo financeiro.","C","FCC","É o que permite o pagamento."],
  ["As cauções integram o passivo permanente, por dependerem de autorização legislativa.","E","FGV","Integram o <b>passivo financeiro</b> — não são submetidas ao processo de execução orçamentária."],
  ["O atributo F/P indica que a conta pode ter parte do saldo com atributo financeiro e outra parte com atributo permanente.","C","VUNESP","Previsto no PCASP."],
  ["O pagamento pode ser efetuado ainda que o passivo esteja marcado com o atributo permanente.","E","FUNDATEC","Só pode ser efetuado se estiver marcado como <b>Financeiro</b>."],
  ["Os lançamentos contábeis devem debitar e creditar contas que apresentem a mesma natureza de informação.","C","CESPE","Fechados nas classes 1 a 4, ou 5 e 6, ou 7 e 8."],
  ["Um lançamento pode debitar conta da classe 1 e creditar conta da classe 6.","E","FCC","Misturaria naturezas patrimonial e orçamentária."],
  ["A equação de conferência do PCASP estabelece que Classe 1 mais Classe 3 é igual a Classe 2 mais Classe 4.","C","FGV","Ativo + VPD = Passivo e PL + VPA."],
  ["São regras de integridade do PCASP os lançamentos contábeis, o pagamento e recebimento, o desenvolvimento de equações contábeis e a consistência dos registros e saldos de contas.","C","VUNESP","As quatro regras."],
  ["A apresentação de conta do ativo com saldo credor pode representar a execução de operação indevida.","C","FUNDATEC","Análise de saldos invertidos."],
  ["Recomenda-se que os registros em contas descritas como Outros(as) sejam limitados a vinte por cento do total do grupo.","E","CESPE","O limite recomendado é <b>10%</b>."],
  ["Uma escola de ensino básico que apresente saldo na conta Aeronaves em seu ativo imobilizado provavelmente realizou classificação indevida.","C","FCC","Exemplo do próprio MCASP."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("O que é o PCASP, quem o mantém e a quem se aplica",
      '<div class="box"><span class="bl">Conceito</span>'+
      '<p>O PCASP é a <b>estrutura básica da escrituração contábil</b>, formada por uma <b>relação padronizada de contas</b>, que permite registrar os atos e fatos de maneira <b>padronizada e sistematizada</b> e elaborar relatórios gerenciais e demonstrações contábeis conforme as necessidades dos usuários.</p></div>'+
      '<div class="box"><span class="bl">Conta contábil</span>'+
      '<p>A <b>expressão qualitativa e quantitativa de fatos de mesma natureza</b>, evidenciando a <b>composição, variação e estado do patrimônio</b> — e também <b>situações nele não compreendidas</b> que possam vir a afetá-lo direta ou indiretamente.</p></div>'+
      '<div class="box tip"><span class="bl">Competência e alcance</span>'+
      '<p><b>Quem mantém:</b> a <b>STN</b>, órgão central de contabilidade da União, por competência dada pela <b>LRF</b>. Cabe a ela criar, alterar, excluir, codificar, especificar, desdobrar e detalhar as contas.</p>'+
      '<p><b>Obrigatório para:</b> administração <b>direta e indireta</b>, fundos, autarquias (inclusive especiais), fundações e <b>estatais dependentes</b>.</p>'+
      '<p><b>Facultativo para:</b> as demais entidades — as <b>estatais independentes</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Objetivos que mais caem</span>'+
      '<ul><li><b>Distinguir</b> os registros de natureza patrimonial, orçamentária e de controle.</li>'+
      '<li>Permitir o detalhamento a partir do <b>nível MÍNIMO</b> estabelecido pela STN — não máximo.</li>'+
      '<li>Permitir a <b>consolidação nacional</b> e a elaboração de <b>DCASP, RREO e RGF</b>.</li>'+
      '<li>Permitir relatórios no padrão do <b>GFSM do FMI</b>.</li></ul></div>'),
    sl("As três naturezas e as oito classes",
      '<div class="box"><span class="bl">Natureza da informação</span>'+
      '<ul><li><b>Orçamentária</b> — atos e fatos do <b>planejamento e da execução orçamentária</b>.</li>'+
      '<li><b>Patrimonial</b> — fatos financeiros e não financeiros da <b>composição do patrimônio</b> e suas variações <b>qualitativas e quantitativas</b>.</li>'+
      '<li><b>Controle</b> — atos de gestão cujos efeitos <b>possam produzir modificações no patrimônio</b>, e os de <b>funções específicas de controle</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">As oito classes</span>'+
      '<p><b>PATRIMONIAL</b> — <b>1</b> Ativo · <b>2</b> Passivo e PL · <b>3</b> VPD · <b>4</b> VPA</p>'+
      '<p><b>ORÇAMENTÁRIA</b> — <b>5</b> CAPO (Controles da <b>Aprovação</b> do Planejamento e Orçamento) · <b>6</b> CEPO (Controles da <b>Execução</b> do Planejamento e Orçamento)</p>'+
      '<p><b>CONTROLE</b> — <b>7</b> Controles Devedores · <b>8</b> Controles Credores</p></div>'+
      '<div class="box trap"><span class="bl">Duas decorebas inevitáveis</span>'+
      '<p><b>1.</b> Classes <b>ímpares</b> (1, 3, 5, 7) têm natureza <b>devedora</b>; <b>pares</b> (2, 4, 6, 8), <b>credora</b>.</p>'+
      '<p><b>2.</b> Ao fim do exercício, as classes <b>3 e 4 são encerradas</b> e o resultado patrimonial vai para o <b>PL</b> — por isso o Balanço apresenta <b>Classe 1 = Classe 2</b>.</p></div>')
  ],
  V2:[
    sl("O código de 9 dígitos e 7 níveis",
      '<div class="box"><span class="bl">A estrutura</span>'+
      '<p class="mono">X . X . X . X . X . XX . XX</p>'+
      '<ul><li><b>1º</b> Classe (1 dígito)</li><li><b>2º</b> Grupo (1)</li><li><b>3º</b> Subgrupo (1)</li>'+
      '<li><b>4º</b> Título (1)</li><li><b>5º</b> Subtítulo (1)</li><li><b>6º</b> Item (2 dígitos)</li><li><b>7º</b> Subitem (2 dígitos)</li></ul>'+
      '<p>O <b>primeiro dígito</b> identifica a <b>classe</b> — é o que a banca mais cobra, na forma pura de decoreba.</p></div>'+
      '<div class="box tip"><span class="bl">Os grupos que vale memorizar</span>'+
      '<p><b>Classe 5 (CAPO) — mnemônico POR:</b> 5.1 <b>P</b>lanejamento Aprovado · 5.2 <b>O</b>rçamento Aprovado · 5.3 Inscrição de <b>R</b>estos a Pagar.</p>'+
      '<p><b>Classe 6 (CEPO) — “execução do POR”:</b> 6.1 Execução do Planejamento · 6.2 Execução do Orçamento · 6.3 Execução de Restos a Pagar.</p>'+
      '<p><b>Classe 1:</b> 1.1 Circulante · 1.2 Não Circulante. <b>Classe 2:</b> 2.1 Circulante · 2.2 Não Circulante · 2.3 PL.</p>'+
      '<p><b>Classes 7 e 8:</b> 7.1/8.1 Atos Potenciais · 7.2/8.2 Administração Financeira · <b>7.3 Dívida Ativa / 8.3 Execução da Dívida Ativa</b> · 7.4/8.4 Riscos Fiscais · 7.5/8.5 Consórcios · 7.6/8.6 Controles Fiscais · 7.8/8.8 Custos · 7.9/8.9 Outros.</p></div>'+
      '<div class="box trap"><span class="bl">A questão-exemplo do resumo</span>'+
      '<p>“Inscrição de Restos a Pagar”, “Execução de Restos a Pagar” e “Execução da Dívida Ativa” pertencem, respectivamente, às classes <b>5, 6 e 8</b>.</p></div>'),
    sl("Detalhamento e o 5º nível de consolidação",
      '<div class="box"><span class="bl">Regra do detalhamento</span>'+
      '<p>O ente só detalha nos <b>níveis posteriores</b> ao que o PCASP já apresenta. Se a conta vai até o 6º nível, o ente detalha a partir do <b>7º</b> — é <b>vedada</b> a alteração dos anteriores. Os planos dos entes devem ter <b>pelo menos 7 níveis</b>, e os não detalhados recebem o dígito <b>0</b>.</p>'+
      '<p>Ir <b>além do 7º nível</b> é permitido, para informações complementares.</p></div>'+
      '<div class="box"><span class="bl">A exceção — o 5º nível patrimonial</span>'+
      '<p>Nas classes <b>1, 2, 3 e 4</b>, o 5º nível (subtítulo) serve para <b>segregar o que entra e o que sai da consolidação</b>, identificando os <b>saldos recíprocos</b>:</p>'+
      '<ul><li><b>1 — Consolidação:</b> saldos que <b>NÃO</b> serão excluídos.</li>'+
      '<li><b>2 — Intra OFSS:</b> excluídos, dentro do <b>mesmo ente</b>.</li>'+
      '<li><b>3 — Inter OFSS (União)</b> · <b>4 — Inter OFSS (Estado)</b> · <b>5 — Inter OFSS (Município)</b>: excluídos, entre <b>entes distintos</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Três detalhes que caem</span>'+
      '<p><b>1.</b> O dígito aponta <b>a outra ponta</b>: numa transação Estado ↔ Município, o Estado usa <b>5</b> e o Município usa <b>4</b>.</p>'+
      '<p><b>2.</b> As <b>contas de bens</b> sempre levam o dígito <b>1</b>, senão o bem sumiria da consolidação nacional.</p>'+
      '<p><b>3.</b> Excepcionalmente o 5º nível vale para as classes <b>7 e 8</b> — por exemplo, no <b>Quadro das Contas de Compensação</b>, anexo do Balanço Patrimonial.</p></div>')
  ],
  V3:[
    sl("O indicador do superávit financeiro — F e P",
      '<div class="box"><span class="bl">O atributo</span>'+
      '<p>Colocado ao lado das contas de <b>natureza patrimonial</b>, identifica se a conta é <b>financeira (F)</b> ou <b>permanente (P)</b>. Quando o saldo é misto, o PCASP traz <b>F/P</b>.</p></div>'+
      '<div class="box"><span class="bl">Superávit financeiro — art. 43, § 2º</span>'+
      '<p>A <b>diferença positiva entre o ativo financeiro e o passivo financeiro</b>, conjugando-se ainda os <b>saldos dos créditos adicionais transferidos</b> e as <b>operações de crédito a eles vinculadas</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Quando o P vira F</span>'+
      '<p>Passivos que dependem de autorização orçamentária para amortização são <b>permanentes</b>. <b>Após o empenho</b>, considera-se efetivada a autorização e eles passam a integrar o <b>passivo financeiro</b>.</p>'+
      '<p>Já os passivos <b>não submetidos à execução orçamentária</b> — como as <b>cauções</b> — já são <b>financeiros</b>.</p>'+
      '<p>O <b>pagamento só ocorre com o atributo F</b>. Daí o lançamento de troca, concomitante à execução orçamentária:</p>'+
      '<p class="mono"><b>D</b> — Pessoal a Pagar (P)<br><b>C</b> — Pessoal a Pagar (F)</p></div>'),
    sl("As quatro regras de integridade",
      '<div class="box"><span class="bl">a) Lançamentos contábeis</span>'+
      '<p><b>Partidas dobradas</b>, debitando e creditando contas de <b>mesma natureza de informação</b>. O lançamento fica fechado <b>dentro das classes 1 a 4</b>, <b>ou 5 e 6</b>, <b>ou 7 e 8</b> — nunca atravessa naturezas.</p></div>'+
      '<div class="box"><span class="bl">b) Pagamento e recebimento</span>'+
      '<p>Fatos financeiros cuja contrapartida tenha atributo <b>Permanente</b> exigem o lançamento de <b>troca P → F</b> antes do pagamento.</p></div>'+
      '<div class="box"><span class="bl">c) Desenvolvimento de equações contábeis</span>'+
      '<p class="mn"><em>Classe 1 + Classe 3 = Classe 2 + Classe 4</em></p>'+
      '<p>Ativo mais VPD igual a Passivo e PL mais VPA.</p></div>'+
      '<div class="box tip"><span class="bl">d) Consistência dos registros e saldos</span>'+
      '<ul><li><b>Saldos invertidos</b> — ativo com saldo credor pode indicar operação indevida.</li>'+
      '<li><b>Classificação inadequada</b> de receitas e despesas.</li>'+
      '<li><b>Utilização indevida de contas</b> — a escola de ensino básico com saldo em “Aeronaves”.</li>'+
      '<li><b>Saldos irrisórios ou residuais</b>, ou sem movimentação por longo período.</li>'+
      '<li>Contas <b>“Outros(as)”</b> — recomenda-se limitar a <b>10% do total do grupo</b>.</li></ul></div>')
  ]
};

var EX = {
S1:{t:"gap", instr:"Complete o conceito de PCASP",
  before:"O PCASP é a estrutura básica da escrituração contábil, formada por uma ",
  after:" de contas contábeis.",
  options:["relação padronizada","lista facultativa","classificação funcional"], answer:0,
  why:"Padronização é o núcleo do conceito."},

S2:{t:"mc", instr:"Quem tem competência para criar, alterar e detalhar as contas do PCASP?",
  options:["Secretaria do Tesouro Nacional","Tribunal de Contas da União",
           "Conselho Federal de Contabilidade","Ministério do Planejamento"],
  answer:0,
  why:"Competência atribuída pela LRF ao órgão central de contabilidade da União."},

S3:{t:"sort", instr:"O PCASP é obrigatório ou facultativo?",
  buckets:["Obrigatório","Facultativo"],
  items:[["Administração direta",0],["Autarquias, inclusive especiais",0],["Fundações",0],
         ["Fundos",0],["Empresas estatais dependentes",0],
         ["Empresas estatais independentes",1]],
  why:"O corte é a <b>dependência</b> da estatal."},

S4:{t:"multi", instr:"Marque os objetivos do PCASP",
  options:["Padronizar os registros contábeis das entidades do setor público",
           "Distinguir os registros de natureza patrimonial, orçamentária e de controle",
           "Permitir a consolidação nacional das contas públicas",
           "Permitir a elaboração das DCASP, do RREO e do RGF",
           "Contribuir para a transparência da gestão fiscal e o controle social",
           "Fixar os limites de despesa com pessoal",
           "Aprovar as contas anuais do ente"],
  answers:[0,1,2,3,4],
  why:"Os dois últimos são de outras normas."},

S5:{t:"gap", instr:"Complete o objetivo do detalhamento",
  before:"Permitir o detalhamento das contas contábeis a partir do nível ",
  after:" estabelecido pela STN.",
  options:["mínimo","máximo","intermediário"], answer:0,
  why:"A STN define o piso; o ente detalha para baixo."},

S6:{t:"match", instr:"Ligue cada natureza ao que ela registra",
  pairs:[["Orçamentária","Atos e fatos do planejamento e da execução orçamentária"],
         ["Patrimonial","Fatos financeiros e não financeiros da composição do patrimônio e suas variações"],
         ["Controle","Atos de gestão cujos efeitos possam modificar o patrimônio e funções de controle"]],
  why:"Definições literais do MCASP."},

S7:{t:"sort", instr:"Classifique cada classe pela natureza",
  buckets:["Patrimonial","Orçamentária","Controle"],
  items:[["1 — Ativo",0],["2 — Passivo e PL",0],["3 — VPD",0],["4 — VPA",0],
         ["5 — CAPO",1],["6 — CEPO",1],
         ["7 — Controles Devedores",2],["8 — Controles Credores",2]],
  why:"1 a 4 patrimonial · 5 e 6 orçamentária · 7 e 8 controle."},

S8:{t:"sort", instr:"Natureza do saldo por classe",
  buckets:["Devedora","Credora"],
  items:[["Classe 1",0],["Classe 3",0],["Classe 5",0],["Classe 7",0],
         ["Classe 2",1],["Classe 4",1],["Classe 6",1],["Classe 8",1]],
  why:"Ímpares devedoras, pares credoras."},

S9:{t:"order", instr:"Ordene os sete níveis da conta contábil",
  items:["Classe","Grupo","Subgrupo","Título","Subtítulo","Item","Subitem"],
  why:"Nove dígitos: um em cada um dos cinco primeiros e dois no item e no subitem."},

S10:{t:"mc", instr:"Quantos dígitos e níveis tem o código da conta contábil?",
  options:["9 dígitos e 7 níveis","7 dígitos e 9 níveis","8 dígitos e 8 níveis","9 dígitos e 9 níveis"],
  answer:0,
  why:"Item e subitem têm dois dígitos cada."},

S11:{t:"match", instr:"Ligue a conta à sua classe",
  pairs:[["Inscrição de Restos a Pagar","Classe 5 — CAPO"],
         ["Execução de Restos a Pagar","Classe 6 — CEPO"],
         ["Execução da Dívida Ativa","Classe 8 — Controles Credores"],
         ["Dívida Ativa","Classe 7 — Controles Devedores"]],
  why:"É a questão-exemplo do resumo, ampliada."},

S12:{t:"sort", instr:"A que classe pertence cada grupo?",
  buckets:["Classe 5 (CAPO)","Classe 6 (CEPO)"],
  items:[["5.1 Planejamento Aprovado",0],["5.2 Orçamento Aprovado",0],["5.3 Inscrição de Restos a Pagar",0],
         ["6.1 Execução do Planejamento",1],["6.2 Execução do Orçamento",1],["6.3 Execução de Restos a Pagar",1]],
  why:"Mnemônico <b>POR</b> e <b>execução do POR</b>."},

S13:{t:"mc", instr:"Se a conta já está detalhada no PCASP até o 6º nível, o ente pode detalhá-la:",
  options:["Apenas a partir do 7º nível","A partir do 5º nível",
           "Em qualquer nível, desde que justifique","Não pode detalhar"],
  answer:0,
  why:"É vedada a alteração dos níveis já apresentados."},

S14:{t:"multi", instr:"Sobre o detalhamento, marque o correto",
  options:["Os planos de contas dos entes deverão ter pelo menos 7 níveis",
           "Níveis não detalhados são codificados com o dígito zero",
           "O ente pode desdobrar além do 7º nível se entender necessário",
           "A abertura do 5º nível patrimonial é a única exceção à regra",
           "É vedado ultrapassar o 7º nível"],
  answers:[0,1,2,3],
  why:"Ultrapassar o 7º nível é permitido."},

S15:{t:"match", instr:"Ligue cada dígito do 5º nível ao seu significado",
  pairs:[["1","Consolidação — saldos que NÃO serão excluídos"],
         ["2","Intra OFSS — excluídos, no mesmo ente"],
         ["3","Inter OFSS — União"],
         ["4","Inter OFSS — Estado"],
         ["5","Inter OFSS — Município"]],
  why:"O dígito aponta a <b>outra ponta</b> da transação."},

S16:{t:"mc", instr:"Numa transação entre um Estado e um Município, que dígitos cada um usa?",
  options:["Estado usa 5 e Município usa 4","Estado usa 4 e Município usa 5",
           "Ambos usam 2","Ambos usam 1"],
  answer:0,
  why:"Cada um identifica <b>com quem</b> transacionou."},

S17:{t:"sort", instr:"Verdadeiro ou falso sobre o 5º nível?",
  buckets:["Verdadeiro","Falso"],
  items:[["As contas de bens sempre levam o dígito 1",0],
         ["Excepcionalmente pode ser usado nas classes 7 e 8",0],
         ["Serve para identificar saldos recíprocos",0],
         ["O dígito 1 identifica saldos que serão excluídos da consolidação",1],
         ["É vedado seu uso nas classes 7 e 8 em qualquer hipótese",1]],
  why:"O dígito 1 é justamente o que <b>não</b> se exclui."},

S18:{t:"mc", instr:"Quando um passivo permanente passa a integrar o passivo financeiro?",
  options:["Após o empenho","Após a liquidação","Após o pagamento","Na inscrição em restos a pagar"],
  answer:0,
  why:"O empenho efetiva a autorização orçamentária."},

S19:{t:"sort", instr:"Atributo financeiro ou permanente?",
  buckets:["Já nasce financeiro (F)","Nasce permanente (P)"],
  items:[["Cauções — não passam pela execução orçamentária",0],
         ["Passivo que depende de autorização orçamentária para amortização",1],
         ["Pessoal a Pagar – 13º antes do empenho",1]],
  why:"Sem passar pelo orçamento, o passivo já é financeiro."},

S20:{t:"multi", instr:"Marque as quatro regras de integridade do PCASP",
  options:["Lançamentos contábeis","Pagamento e recebimento",
           "Desenvolvimento de equações contábeis","Consistência dos registros e saldos de contas",
           "Auditoria independente","Aprovação pelo Tribunal de Contas"],
  answers:[0,1,2,3],
  why:"São exatamente quatro."},

S21:{t:"wordbank", instr:"Monte a equação de conferência do PCASP",
  target:["Classe","1","+","Classe","3","=","Classe","2","+","Classe","4"],
  extra:["Classe 5","Classe 6","−"],
  why:"Ativo + VPD = Passivo e PL + VPA."},

S22:{t:"sort", instr:"Esse lançamento respeita a regra das naturezas?",
  buckets:["Respeita","Não respeita"],
  items:[["Debita classe 1 e credita classe 4",0],["Debita classe 3 e credita classe 2",0],
         ["Debita classe 5 e credita classe 6",0],["Debita classe 7 e credita classe 8",0],
         ["Debita classe 1 e credita classe 6",1],["Debita classe 2 e credita classe 8",1]],
  why:"O lançamento fica fechado dentro de 1–4, ou 5–6, ou 7–8."},

S23:{t:"multi", instr:"Marque os pontos analisados na consistência dos registros",
  options:["Saldos invertidos","Classificação inadequada de receitas e despesas",
           "Utilização indevida de contas contábeis","Saldos irrisórios ou residuais",
           "Saldos em contas descritas como Outros(as)",
           "Número de servidores por unidade"],
  answers:[0,1,2,3,4],
  why:"Cinco pontos, todos do MCASP."},

S24:{t:"gap", instr:"Complete a recomendação sobre contas “Outros(as)”",
  before:"Recomenda-se que os registros nessas contas sejam limitados a ",
  after:" do total do grupo.",
  options:["10%","20%","5%"], answer:0,
  why:"Dez por cento — número cobrado literalmente."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Pública 06","https://www.tecconcursos.com.br/s/Q2pGtD","Q2pGtD"],
  ["Caderno FCC — Contabilidade Pública 06","https://www.tecconcursos.com.br/s/Q2pGtN","Q2pGtN"],
  ["Caderno FGV — Contabilidade Pública 06","https://www.tecconcursos.com.br/s/Q2pGtZ","Q2pGtZ"],
  ["Caderno VUNESP — Contabilidade Pública 06","https://www.tecconcursos.com.br/s/Q2pGto","Q2pGto"]
];
var TECNOTA = "O PCASP é o assunto mais “decoreba” de contabilidade pública — classes, grupos e dígitos. Faça as questões em blocos curtos e volte aos flashcards no dia seguinte: aqui a repetição espaçada rende mais do que reler a teoria.";

var UNITS = [
  {n:1, title:"O PCASP e suas classes", cvar:"u2", lessons:[
    {id:"K1", type:"teoria", title:"Conceito, competência, naturezas e classes", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · conceito e alcance",      xp:25, data:["S1","S2","S3","T0","T1","T2","T3","T4","T5","T6"]},
    {id:"K3", type:"drill",  title:"Praticar · objetivos do PCASP",      xp:25, data:["S4","S5","T7","T8","T9","T10","T11"]},
    {id:"K4", type:"drill",  title:"Praticar · naturezas e classes",     xp:25, data:["S6","S7","S8","T12","T13","T14","T15","T16","T17","T18","T19","T20","T21","T22"]},
    {id:"K5", type:"flash",  title:"Flashcards · PCASP e classes",       xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}
  ]},
  {n:2, title:"Código, grupos e consolidação", cvar:"u1", lessons:[
    {id:"K6", type:"teoria", title:"9 dígitos, 7 níveis e o 5º nível",   xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · o código da conta",       xp:25, data:["S9","S10","T23","T24","T25","T26","T27"]},
    {id:"K8", type:"drill",  title:"Praticar · grupos e classes",        xp:25, data:["S11","S12","T28","T29","T30","T31","T32"]},
    {id:"K9", type:"drill",  title:"Praticar · regras de detalhamento",  xp:25, data:["S13","S14","T33","T34","T35","T36","T37"]},
    {id:"K10",type:"drill",  title:"Praticar · o 5º nível e a consolidação", xp:25, data:["S15","S16","S17","T38","T39","T40","T41","T42","T43","T44"]},
    {id:"K11",type:"flash",  title:"Flashcards · código e consolidação", xp:15, data:[17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]}
  ]},
  {n:3, title:"Superávit financeiro e integridade", cvar:"u3", lessons:[
    {id:"K12",type:"teoria", title:"Atributos F e P e as quatro regras", xp:10, data:"V3"},
    {id:"K13",type:"drill",  title:"Praticar · indicador do superávit",  xp:25, data:["S18","S19","T45","T46","T47","T48","T49","T50"]},
    {id:"K14",type:"drill",  title:"Praticar · regras de integridade",   xp:25, data:["S20","S21","S22","T51","T52","T53","T54"]},
    {id:"K15",type:"drill",  title:"Praticar · consistência dos saldos", xp:25, data:["S23","S24","T55","T56","T57"]},
    {id:"K16",type:"flash",  title:"Flashcards · superávit e integridade", xp:15, data:[39,40,41,42,43,44,45,46,47,48,49,50,51,52]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",            xp:60, data:null},
    {id:"K17",type:"missao", title:"Missão TEC Concursos",               xp:15, data:null},
    {id:"K18",type:"prova",  title:"Simulado cronometrado",              xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo — é a literalidade da definição do MCASP transcrita pelo Resumo: o PCASP é a <b>estrutura básica da escrituração contábil</b>, formada por uma <b>relação padronizada de contas contábeis</b>.</p><p>O esquema do material fecha a definição em quatro pontos: (1) estrutura básica da escrituração; (2) relação padronizada de contas; (3) permite o registro dos atos e fatos de maneira <b>padronizada e sistematizada</b>; (4) permite a elaboração de relatórios gerenciais e demonstrações contábeis conforme as necessidades dos usuários.</p><p class='fb-fonte'>Resumo 06 · <i>Plano de Contas Aplicado ao Setor Público</i></p>",
1:"<p>Certo. É a definição de conta do MCASP reproduzida pelo Resumo: expressão <b>qualitativa e quantitativa</b> de fatos de mesma natureza, evidenciando a <b>composição, variação e estado do patrimônio</b>.</p><p>O material explica: qualitativa é a qualidade do fato; quantitativa são os valores. Exemplo do Resumo: a \"Conta Bancos\" representa todos os valores em conta bancária, registrando depósitos, pagamentos e juros recebidos.</p><p class='fb-fonte'>Resumo 06 · <i>Conta contábil</i></p>",
2:"<p>Errado por causa do <b>apenas</b>. A definição do MCASP é mais larga: a conta evidencia a composição, variação e estado do patrimônio, <b>bem como de bens, direitos, obrigações e situações nele NÃO compreendidas</b>, mas que direta ou indiretamente possam vir a afetá-lo.</p><p>É justamente essa parte final que dá suporte às contas de controle (classes 7 e 8). Banca adora cortar a segunda metade da definição e colocar um advérbio de exclusão.</p><p class='fb-fonte'>Resumo 06 · <i>Conta contábil</i></p>",
3:"<p>Certo. O Resumo é expresso: a competência para a edição de normas gerais para consolidação das contas públicas foi atribuída <b>pela LRF</b> à <b>Secretaria do Tesouro Nacional (STN)</b>, enquanto <b>órgão central de contabilidade da União</b>.</p><p>Decorre daí a competência para criar, alterar, excluir, codificar, especificar, desdobrar e detalhar as contas contábeis.</p><p class='fb-fonte'>Resumo 06 · <i>Competência para instituição e manutenção do PCASP</i></p>",
4:"<p>Errado no órgão. Quem cria, altera, exclui, codifica, especifica, desdobra e detalha as contas do PCASP é a <b>STN</b>, não o Tribunal de Contas da União.</p><p>A troca de sigla é a pegadinha mais barata deste tópico. Guarde a cadeia do Resumo: <b>LRF → STN → órgão central de contabilidade da União → PCASP</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Competência para instituição e manutenção do PCASP</i></p>",
5:"<p>Certo — é o rol do Resumo. A utilização do PCASP é <b>obrigatória</b> para todos os órgãos e entidades da administração <b>direta e indireta</b> dos entes da Federação, incluindo seus <b>fundos, autarquias (inclusive especiais), fundações e empresas estatais dependentes</b>.</p><p>Contraste que a banca explora: para as demais entidades a utilização é <b>facultativa</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Alcance do PCASP</i></p>",
6:"<p>Errado. Para as estatais <b>independentes</b> a utilização do PCASP é <b>facultativa</b>, e não obrigatória — o Resumo cita exatamente esse exemplo ao tratar das \"demais entidades\".</p><p>A linha divisória é a dependência: estatal <b>dependente</b> entra na lista da obrigatoriedade; estatal <b>independente</b> fica na faculdade.</p><p class='fb-fonte'>Resumo 06 · <i>Alcance do PCASP</i></p>",
7:"<p>Certo. É o objetivo nº 2 da lista do Resumo: <b>distinguir os registros de natureza patrimonial, orçamentária e de controle</b>.</p><p>Esse objetivo é a própria razão de o PCASP ser segregado em classes: 1 a 4 (patrimonial), 5 e 6 (orçamentária), 7 e 8 (controle).</p><p class='fb-fonte'>Resumo 06 · <i>Objetivos do PCASP</i></p>",
8:"<p>Certo. Consta expressamente da lista de objetivos do Resumo: <b>permitir a consolidação nacional das contas públicas</b>.</p><p>É esse objetivo que justifica o mecanismo do <b>5º nível (subtítulo)</b>, usado para identificar os saldos recíprocos que serão ou não excluídos na consolidação.</p><p class='fb-fonte'>Resumo 06 · <i>Objetivos do PCASP</i></p>",
9:"<p>Certo. Objetivo nº 6 da lista: permitir a elaboração das <b>Demonstrações Contábeis Aplicadas ao Setor Público (DCASP)</b> e dos demonstrativos do <b>Relatório Resumido de Execução Orçamentária (RREO)</b> e do <b>Relatório de Gestão Fiscal (RGF)</b>.</p><p>Decore o trio DCASP + RREO + RGF: é o modo mais direto de a banca cobrar esse item.</p><p class='fb-fonte'>Resumo 06 · <i>Objetivos do PCASP</i></p>",
10:"<p>Errado por uma palavra. O objetivo nº 4 fala em detalhamento das contas contábeis <b>a partir do nível MÍNIMO</b> estabelecido pela STN — não do nível máximo.</p><p>Faz sentido lógico: a STN fixa o piso comum a todos e cada ente detalha dali para baixo, de modo a adequar o plano às suas peculiaridades. Se fosse \"máximo\", não haveria espaço para detalhar nada.</p><p class='fb-fonte'>Resumo 06 · <i>Objetivos do PCASP</i></p>",
11:"<p>Certo. O objetivo nº 7 cita nominalmente a elaboração de relatórios nos padrões adotados por organismos internacionais, <b>a exemplo do Government Finance Statistics Manual (GFSM) do Fundo Monetário Internacional (FMI)</b>.</p><p>O mesmo objetivo abrange a adequada prestação de contas e o levantamento das estatísticas de finanças públicas.</p><p class='fb-fonte'>Resumo 06 · <i>Objetivos do PCASP</i></p>",
12:"<p>Certo — é o quadro das naturezas do Resumo. A natureza de informação <b>ORÇAMENTÁRIA</b> registra, processa e evidencia os <b>atos e fatos</b> relacionados ao <b>planejamento e à execução orçamentária</b>.</p><p>Guarde o par: planejamento e execução orçamentária ficam nas classes <b>5 (CAPO)</b> e <b>6 (CEPO)</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Natureza da informação contábil</i></p>",
13:"<p>Certo. Texto do quadro: a natureza <b>PATRIMONIAL</b> registra, processa e evidencia os <b>fatos financeiros e não financeiros</b> relacionados com a composição do patrimônio público e suas <b>variações qualitativas e quantitativas</b>.</p><p>Repare no detalhe que a banca troca: a patrimonial fala em <b>fatos</b>; a orçamentária e a de controle falam em <b>atos</b> (a orçamentária, em atos e fatos).</p><p class='fb-fonte'>Resumo 06 · <i>Natureza da informação contábil</i></p>",
14:"<p>Certo. A natureza de <b>CONTROLE</b> registra, processa e evidencia os <b>atos de gestão cujos efeitos possam produzir modificações no patrimônio</b> da entidade do setor público, bem como aqueles com <b>funções específicas de controle</b>.</p><p>É a natureza que dá corpo às classes 7 (Controles Devedores) e 8 (Controles Credores).</p><p class='fb-fonte'>Resumo 06 · <i>Natureza da informação contábil</i></p>",
15:"<p>Errado no número. O PCASP é dividido em <b>8 classes</b>, e não em sete.</p><p>Quadro do Resumo: 1 Ativo, 2 Passivo e PL, 3 VPD, 4 VPA, 5 CAPO, 6 CEPO, 7 Controles Devedores, 8 Controles Credores. Quatro patrimoniais, duas orçamentárias e duas de controle.</p><p class='fb-fonte'>Resumo 06 · <i>Classes contábeis</i></p>",
16:"<p>Certo. É o resumo da segregação feito pelo próprio material: <b>classes 1 a 4 → natureza PATRIMONIAL</b>.</p><p>Complete a regra: classes <b>5 e 6 → ORÇAMENTÁRIA</b>; classes <b>7 e 8 → CONTROLE</b>. São três linhas que resolvem boa parte das questões do tópico.</p><p class='fb-fonte'>Resumo 06 · <i>Classes contábeis — OBSERVAÇÕES</i></p>",
17:"<p>Errado na natureza. As classes <b>5 (CAPO)</b> e <b>6 (CEPO)</b> são de natureza <b>ORÇAMENTÁRIA</b>. De <b>controle</b> são as classes <b>7 e 8</b>.</p><p>Cuidado com a armadilha do nome: as classes 5 e 6 se chamam \"<b>Controles</b> da Aprovação\" e \"<b>Controles</b> da Execução do Planejamento e Orçamento\", mas a natureza da informação delas é orçamentária.</p><p class='fb-fonte'>Resumo 06 · <i>Classes contábeis</i></p>",
18:"<p>Certo. No quadro do Resumo, a classe <b>3</b> é a das <b>Variações Patrimoniais Diminutivas (VPD)</b> e a classe <b>4</b>, a das <b>Variações Patrimoniais Aumentativas (VPA)</b>.</p><p>Casa com a regra dos saldos: a 3 é ímpar, logo <b>devedora</b> (como despesa); a 4 é par, logo <b>credora</b> (como receita).</p><p class='fb-fonte'>Resumo 06 · <i>Classes contábeis</i></p>",
19:"<p>Certo. Classe <b>5 = Controles da Aprovação do Planejamento e Orçamento (CAPO)</b>, exatamente como no quadro do Resumo.</p><p>Use o mnemônico do material — <b>\"POR\"</b> — para os grupos da classe 5: <b>P</b>lanejamento Aprovado (5.1), <b>O</b>rçamento Aprovado (5.2), <b>R</b>estos a Pagar (inscrição, 5.3).</p><p class='fb-fonte'>Resumo 06 · <i>Classes contábeis</i></p>",
20:"<p>Certo. Classe <b>6 = Controles da Execução do Planejamento e Orçamento (CEPO)</b>.</p><p>O mnemônico do Resumo para a classe 6 é a <b>execução do \"POR\"</b>: Execução do <b>P</b>lanejamento (6.1), Execução do <b>O</b>rçamento (6.2), Execução de <b>R</b>estos a Pagar (6.3). A 5 aprova, a 6 executa.</p><p class='fb-fonte'>Resumo 06 · <i>Classes contábeis / Grupos</i></p>",
21:"<p>Errado — inverteu. Pela observação do Resumo, as classes de número <b>ímpar (1, 3, 5, 7)</b> possuem natureza <b>DEVEDORA</b>, e as de número <b>par (2, 4, 6, 8)</b>, natureza <b>CREDORA</b>.</p><p>Confira pelo que você já sabe: classe 1 (Ativo) é devedora e classe 2 (Passivo e PL) é credora. O próprio material avisa que essas numerações precisam ser memorizadas.</p><p class='fb-fonte'>Resumo 06 · <i>Classes contábeis — OBSERVAÇÕES</i></p>",
22:"<p>Certo. Observação nº 3 do Resumo: os valores registrados ao longo do período na <b>Classe 3 (VPD)</b> e na <b>Classe 4 (VPA)</b> são <b>encerrados ao final do exercício</b>, representando o <b>resultado patrimonial</b> levado para a conta de <b>patrimônio líquido</b>.</p><p>A mesma observação lembra que, ao final do exercício, o Balanço Patrimonial apresentará os valores da Classe 1 (Ativo) iguais aos da Classe 2 (Passivo e PL).</p><p class='fb-fonte'>Resumo 06 · <i>Classes contábeis — OBSERVAÇÕES</i></p>",
23:"<p>Certo. O Resumo compara com o CPF: as contas contábeis são identificadas por códigos com <b>9 dígitos</b> e <b>7 níveis</b> de desdobramento.</p><p>A conta de atenção é essa dupla: 9 dígitos, mas 7 níveis — porque item e subitem têm 2 dígitos cada. Banca troca 9 por 7 e vice-versa.</p><p class='fb-fonte'>Resumo 06 · <i>Código da conta contábil</i></p>",
24:"<p>Certo. É exatamente a ordem da estrutura do Resumo: <b>Classe, Grupo, Subgrupo, Título, Subtítulo, Item e Subitem</b> (1º ao 7º nível).</p><p>Memorize o 5º nível pelo nome: <b>Subtítulo</b> — é ele o nível da <b>consolidação</b> (Consolidação, Intra OFSS e Inter OFSS).</p><p class='fb-fonte'>Resumo 06 · <i>Código da conta contábil</i></p>",
25:"<p>Certo. No quadro da estrutura, os cinco primeiros níveis têm <b>1 dígito</b> cada, e o <b>6º nível (item)</b> e o <b>7º nível (subitem)</b> têm <b>2 dígitos</b> cada.</p><p>Daí a conta X.X.X.X.X.XX.XX: 5 + 2 + 2 = <b>9 dígitos</b> em <b>7 níveis</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Código da conta contábil</i></p>",
26:"<p>Errado na classe. Pelo quadro ATENÇÃO do Resumo, a conta \"<b>4</b>.X.X.X.X.XX.XX\" pertence à classe das <b>VPAs (Variações Patrimoniais Aumentativas)</b>. Quem é VPD é o dígito <b>3</b>.</p><p>O material avisa que muitas questões exigem a pura e simples decoreba do primeiro dígito: 1 Ativo, 2 Passivo e PL, 3 VPD, 4 VPA, 5 CAPO, 6 CEPO, 7 Controles Devedores, 8 Controles Credores.</p><p class='fb-fonte'>Resumo 06 · <i>Código da conta contábil — ATENÇÃO</i></p>",
27:"<p>Certo. Na lista de exemplos do quadro ATENÇÃO, a conta \"<b>7</b>.X.X.X.X.XX.XX\" pertence à classe <b>Controles Devedores</b>.</p><p>Confere com a regra de saldo: 7 é ímpar, logo natureza <b>devedora</b>. A classe 8, par, é a dos <b>Controles Credores</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Código da conta contábil — ATENÇÃO</i></p>",
28:"<p>Certo. No quadro de grupos do Resumo, a classe 2 tem três grupos: <b>2.1 Passivo Circulante</b>, <b>2.2 Passivo Não Circulante</b> e <b>2.3 Patrimônio Líquido</b>.</p><p>Contraste com a classe 1 (Ativo), que só tem dois grupos: <b>1.1 Ativo Circulante</b> e <b>1.2 Ativo Não Circulante</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Grupos da conta contábil</i></p>",
29:"<p>Certo. Grupos da classe 5 (CAPO): <b>5.1 Planejamento Aprovado</b>, <b>5.2 Orçamento Aprovado</b> e <b>5.3 Inscrição de Restos a Pagar</b>.</p><p>O Resumo sugere memorizar justamente os grupos das classes 5 e 6 — a partir deles os demais se deduzem. Mnemônico: <b>\"POR\"</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Grupos da conta contábil — OBSERVAÇÕES</i></p>",
30:"<p>Certo. Grupos da classe 6 (CEPO): <b>6.1 Execução do Planejamento</b>, <b>6.2 Execução do Orçamento</b> e <b>6.3 Execução de Restos a Pagar</b>.</p><p>É o mnemônico do material: a classe 6 é a <b>execução do \"POR\"</b> — o mesmo trio da classe 5, agora na fase de execução.</p><p class='fb-fonte'>Resumo 06 · <i>Grupos da conta contábil — OBSERVAÇÕES</i></p>",
31:"<p>Certo — é a questão-exemplo do Resumo, cujo gabarito é a letra D (5, 6 e 8).</p><p>Resolução do material: <b>Inscrição de Restos a Pagar</b> → classe <b>5</b> (CAPO); <b>Execução de Restos a Pagar</b> → classe <b>6</b> (CEPO); <b>Execução da Dívida Ativa</b> → classe <b>8</b> (Controles Credores, grupo 8.3).</p><p class='fb-fonte'>Resumo 06 · <i>Grupos da conta contábil — QUESTÃO-EXEMPLO</i></p>",
32:"<p>Errado. No quadro de grupos, <b>Dívida Ativa é o grupo 7.3</b> (Controles Devedores). O grupo <b>8.3</b> é a <b>Execução da Dívida Ativa</b> (Controles Credores).</p><p>A lógica das classes 7 e 8 é sempre essa: a 7 registra o controle e a 8 registra a <b>execução</b> do mesmo item — 7.1 Atos Potenciais / 8.1 Execução dos Atos Potenciais, 7.3 Dívida Ativa / 8.3 Execução da Dívida Ativa.</p><p class='fb-fonte'>Resumo 06 · <i>Grupos da conta contábil</i></p>",
33:"<p>Certo — literalidade do MCASP no Resumo: os entes da Federação <b>somente poderão detalhar a conta contábil nos níveis posteriores</b> ao nível apresentado na relação de contas do PCASP.</p><p>Exemplo do material: se a conta está detalhada no PCASP até o <b>6º nível (item)</b>, o ente só poderá detalhá-la a partir do <b>7º nível (subitem)</b>, sendo <b>vedada a alteração dos 6 primeiros níveis</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Detalhamento da conta contábil</i></p>",
34:"<p>Certo. O Resumo diz que a <b>única exceção</b> à regra de detalhamento é a abertura do <b>5º nível (subtítulo)</b> das contas de <b>Natureza de Informação Patrimonial</b>.</p><p>E essa abertura é obrigatoriamente classificada em <b>Intra OFSS</b>, <b>Inter OFSS</b> (União, Estados ou Municípios) ou <b>Consolidação</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Detalhamento da conta contábil</i></p>",
35:"<p>Errado no número. Os planos de contas dos entes da Federação deverão ter pelo menos <b>7 níveis</b>, e não cinco.</p><p>Complemento do Resumo: eventuais níveis não detalhados deverão ser codificados com o dígito <b>0 (zero)</b> — como na conta \"3.4.4.<b>0</b>.1.00.00 Descontos Financeiros Concedidos – Consolidação\".</p><p class='fb-fonte'>Resumo 06 · <i>Detalhamento da conta contábil</i></p>",
36:"<p>Certo — é a regra literal do Resumo: eventuais níveis não detalhados deverão ser codificados com o <b>dígito 0 (zero)</b>.</p><p>O material dá o exemplo: se a conta não está detalhada até o 4º nível e é preciso usar o 5º, coloca-se zero no nível vazio — \"3.4.4.<b>0</b>.1.00.00 Descontos Financeiros Concedidos – Consolidação\".</p><p class='fb-fonte'>Resumo 06 · <i>Detalhamento da conta contábil</i></p>",
37:"<p>Errado. O Resumo permite expressamente: caso algum ente entenda necessário, <b>poderá desdobrar as contas contábeis além do 7º nível (subitem)</b>, por exemplo para registrar informações complementares na conta.</p><p>Exemplo do material: as naturezas de receita e despesa orçamentárias não têm relação com a codificação das VPD/VPA nem com as classes 5 e 6 — esse tipo de informação deve ser controlado pelo sistema ou no <b>detalhamento posterior ao 7º nível</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Detalhamento da conta contábil</i></p>",
38:"<p>Certo. É a descrição do mecanismo no Resumo: utilização do <b>5º nível (subtítulo)</b> das classes <b>1, 2, 3 e 4</b> (contas de natureza patrimonial) para identificar os <b>saldos recíprocos</b>.</p><p>Finalidade: segregar os valores das transações que serão <b>incluídas ou excluídas</b> na consolidação, permitindo a consolidação das contas públicas nos diversos níveis de governo. Exemplo do material: transações entre uma Universidade Estadual e o Governo Estadual.</p><p class='fb-fonte'>Resumo 06 · <i>5º nível — consolidação</i></p>",
39:"<p>Errado — está invertido. O dígito <b>1</b> no 5º nível é <b>CONSOLIDAÇÃO</b> e compreende os saldos que <b>NÃO</b> serão excluídos nos demonstrativos consolidados do OFSS.</p><p>Os que <b>serão</b> excluídos são os dos dígitos <b>2</b> (Intra OFSS, mesmo ente) e <b>3, 4 e 5</b> (Inter OFSS — União, Estado e Município).</p><p class='fb-fonte'>Resumo 06 · <i>5º nível — consolidação</i></p>",
40:"<p>Certo. Dígito <b>2 = INTRA OFSS</b>: saldos que serão excluídos nos demonstrativos consolidados do Orçamento Fiscal e da Seguridade Social do <b>MESMO ENTE</b>.</p><p>A observação do Resumo repete a ideia: as contas com dígito 2 no 5º nível identificam operações entre entidades que pertencem ao OFSS do mesmo ente público. \"Intra\" = dentro do mesmo ente.</p><p class='fb-fonte'>Resumo 06 · <i>5º nível — consolidação</i></p>",
41:"<p>Certo. Pelo quadro do Resumo: <b>3 = Inter OFSS (União)</b>, <b>4 = Inter OFSS (Estado)</b> e <b>5 = Inter OFSS (Município)</b> — todos são saldos excluídos nos demonstrativos consolidados de <b>entes públicos distintos</b>.</p><p>Ordem fácil de guardar: 3-4-5 segue a hierarquia federativa União, Estado, Município.</p><p class='fb-fonte'>Resumo 06 · <i>5º nível — consolidação</i></p>",
42:"<p>Errado — inverteu os dígitos. A observação nº 3 do Resumo é expressa: numa transação entre um Estado e um Município, o <b>Estado utilizará o dígito 5</b> (Inter OFSS – Município) e o <b>Município utilizará o dígito 4</b> (Inter OFSS – Estado).</p><p>A chave é que o dígito identifica <b>com quem</b> a transação é feita, não quem faz o lançamento. Quem olha para o Município usa 5; quem olha para o Estado usa 4.</p><p class='fb-fonte'>Resumo 06 · <i>5º nível — consolidação — OBSERVAÇÕES</i></p>",
43:"<p>Certo. No exemplo da doação de bem imóvel da União a um Estado, o Resumo afirma: as <b>contas de bens sempre apresentarão o dígito 1 (Consolidação)</b> no 5º nível.</p><p>A razão está no próprio material: caso contrário, na consolidação nacional o bem não estaria registrado em nenhum dos entes. Veja os lançamentos — o bem entra e sai por <b>1.2.3.2.1.xx.xx</b> nos dois entes, enquanto as VPD/VPA usam os dígitos 4 e 3 (Inter OFSS).</p><p class='fb-fonte'>Resumo 06 · <i>5º nível — exemplo de operação entre a União e um Estado</i></p>",
44:"<p>Errado por causa do \"em qualquer hipótese\". A observação nº 1 do Resumo admite <b>casos excepcionais</b> em que o 5º nível é usado, para fins de consolidação, com contas das <b>classes 7 e 8</b>.</p><p>Exemplo dado pelo material: a elaboração do <b>Quadro das Contas de Compensação</b> (anexo do Balanço Patrimonial), para demonstrar os Atos Potenciais Ativos e Passivos, conforme a Lei nº 4.320/64.</p><p class='fb-fonte'>Resumo 06 · <i>5º nível — consolidação — OBSERVAÇÕES</i></p>",
45:"<p>Certo. É a definição do Resumo: o indicador para o cálculo do superávit financeiro é um <b>atributo (artifício)</b> usado para identificar se as contas do <b>ativo e do passivo</b> são classificadas como <b>financeiro ou permanente</b>.</p><p>Esses atributos ficam ao lado das contas de natureza patrimonial (classes 1 a 4) e são identificados pelas letras <b>\"F\"</b> (Financeiro) e <b>\"P\"</b> (Permanente).</p><p class='fb-fonte'>Resumo 06 · <i>Indicador do superávit financeiro</i></p>",
46:"<p>Certo — é a transcrição do art. 43, § 2º, da Lei nº 4.320/64 feita pelo Resumo: superávit financeiro é a <b>diferença positiva entre o ativo financeiro e o passivo financeiro</b>, conjugando-se ainda os saldos dos <b>créditos adicionais transferidos</b> e as <b>operações de crédito a eles vinculadas</b>.</p><p>Repare que a parte final costuma ser suprimida pela banca: não basta a diferença entre ativo e passivo financeiro; há a conjugação dos créditos adicionais transferidos e das operações de crédito vinculadas.</p><p class='fb-fonte'>Resumo 06 · <i>Indicador do superávit financeiro</i></p>",
47:"<p>Certo. Regra do Resumo: os passivos que dependem de <b>autorização orçamentária</b> para amortização ou resgate integram o <b>passivo permanente</b>; <b>após o empenho</b>, considera-se efetivada a autorização orçamentária e eles passam a integrar o <b>passivo financeiro</b>.</p><p>Por isso o lançamento de troca do exemplo do 13º salário: <b>D</b> Pessoal a Pagar – 13º Salário (P) / <b>C</b> Pessoal a Pagar – 13º Salário (F).</p><p class='fb-fonte'>Resumo 06 · <i>Indicador do superávit financeiro</i></p>",
48:"<p>Errado. As <b>cauções</b> integram o <b>passivo FINANCEIRO</b> — exatamente porque <b>não</b> são submetidas ao processo de execução orçamentária. O Resumo cita a caução como exemplo dessa hipótese.</p><p>Separe as duas portas de entrada no passivo financeiro: (1) passivos que dependiam de autorização orçamentária e já foram <b>empenhados</b>; (2) passivos que <b>nunca</b> passam pela execução orçamentária, como as cauções.</p><p class='fb-fonte'>Resumo 06 · <i>Indicador do superávit financeiro</i></p>",
49:"<p>Certo. O Resumo registra: algumas contas podem ter <b>parte do saldo com atributo financeiro e outra parte com atributo permanente</b> — nesses casos constará no PCASP o atributo <b>\"F/P\"</b>.</p><p>O material também aponta as duas formas de controlar a mudança de P para F: pela <b>informação complementar</b> da conta contábil ou pela <b>duplicação das contas</b> (uma permanente e outra financeira).</p><p class='fb-fonte'>Resumo 06 · <i>Indicador do superávit financeiro</i></p>",
50:"<p>Errado — é o contrário. O <b>pagamento só poderá ser efetuado se o passivo estiver marcado com o atributo Financeiro (F)</b>.</p><p>Daí a necessidade do lançamento de troca, concomitante à execução orçamentária: <b>D</b> passivo (P) / <b>C</b> passivo (F). Sem essa troca, o passivo permanente não se paga.</p><p class='fb-fonte'>Resumo 06 · <i>Regras de integridade — pagamento e recebimento</i></p>",
51:"<p>Certo. É a regra de integridade do Resumo: o registro é feito pelo método das <b>partidas dobradas</b> e os lançamentos devem <b>debitar e creditar contas que apresentem a mesma natureza de informação</b>.</p><p>Na prática, os lançamentos ficam fechados dentro de três blocos: classes <b>1 a 4</b> (patrimonial), classes <b>5 e 6</b> (orçamentária) ou classes <b>7 e 8</b> (controle).</p><p class='fb-fonte'>Resumo 06 · <i>Regras de integridade — lançamentos contábeis</i></p>",
52:"<p>Errado. Um lançamento não pode misturar naturezas de informação. A classe <b>1</b> é patrimonial e a classe <b>6</b> é orçamentária — o lançamento tem de ficar fechado dentro do mesmo bloco.</p><p>Pela regra do Resumo: lançamento patrimonial só debita e credita contas das classes <b>1, 2, 3 e 4</b>; o orçamentário, só das classes <b>5 e 6</b>; o de controle, só das classes <b>7 e 8</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Regras de integridade — lançamentos contábeis</i></p>",
53:"<p>Certo — é a equação de conferência transcrita pelo Resumo: <b>Classe 1 (Ativo) + Classe 3 (VPD) = Classe 2 (Passivo e PL) + Classe 4 (VPA)</b>.</p><p>Repare que a equação agrupa devedoras de um lado (1 e 3, ímpares) e credoras do outro (2 e 4, pares). Ela serve para <b>conferência e validação</b> das informações geradas.</p><p class='fb-fonte'>Resumo 06 · <i>Desenvolvimento de equações contábeis</i></p>",
54:"<p>Certo. São exatamente as quatro regras de integridade do PCASP listadas pelo MCASP no Resumo: <b>(a) lançamentos contábeis; (b) pagamento e recebimento; (c) desenvolvimento de equações contábeis; (d) consistência dos registros e saldos de contas</b>.</p><p>A finalidade declarada é garantir a integridade dos procedimentos contábeis e a qualidade, consistência e transparência das informações geradas.</p><p class='fb-fonte'>Resumo 06 · <i>Regras de integridade do PCASP</i></p>",
55:"<p>Certo. É a <b>análise de saldos invertidos</b> do Resumo: contas que, por sua natureza, só têm saldo devedor (ex.: Ativo) ou só credor (ex.: Passivo), se aparecerem invertidas — <b>Ativo com saldo credor</b> — podem representar a execução de uma <b>operação indevida</b>.</p><p>Guarde o verbo do material: \"<b>pode</b> representar\". Não é presunção absoluta de erro, é sinal de alerta para análise.</p><p class='fb-fonte'>Resumo 06 · <i>Consistência dos registros e saldos de contas</i></p>",
56:"<p>Errado no percentual. O Resumo recomenda que os registros em contas descritas como \"Outros(as)\" sejam limitados a <b>10%</b> do total do grupo, e não a vinte por cento.</p><p>Esse item está na lista de análises pelo balancete, ao lado dos saldos invertidos, da classificação inadequada de receitas e despesas, da utilização indevida de contas e dos saldos irrisórios ou residuais.</p><p class='fb-fonte'>Resumo 06 · <i>Consistência dos registros e saldos de contas</i></p>",
57:"<p>Certo — é o exemplo literal do Resumo de <b>utilização indevida de contas contábeis</b>: uma escola de ensino básico, cuja atividade-fim é educação, que apresente saldo na conta <b>\"Aeronaves\"</b> no ativo imobilizado provavelmente realizou classificação indevida.</p><p>A ideia da regra é confrontar a conta usada com a <b>atividade-fim</b> da entidade. O material também usa o advérbio \"provavelmente\": é indício para análise, não condenação automática.</p><p class='fb-fonte'>Resumo 06 · <i>Consistência dos registros e saldos de contas</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"06", nome:"Plano de Contas Aplicado ao Setor Público", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
