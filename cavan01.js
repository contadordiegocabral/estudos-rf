/* Contabilidade Avançada — Módulo 01: CPC 00 — Estrutura Conceitual para Relatório Financeiro (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cavan01 = (function(){
"use strict";

var CARDS = [
  ["Do que trata o CPC 00?","Da <b>Estrutura Conceitual para Relatório Financeiro</b>: fornece <b>diretrizes e fundamentos</b> para a <b>preparação e apresentação</b> de informações contábeis em conformidade com as normas contábeis aplicáveis."],
  ["Quais são as três finalidades da Estrutura Conceitual (SP1.1)?","(a) auxiliar o <b>desenvolvimento das IFRS</b> para que tenham base em <b>conceitos consistentes</b>; (b) auxiliar os <b>preparadores</b> a desenvolver <b>políticas contábeis consistentes</b> quando nenhum pronunciamento se aplica ou quando ele <b>permite escolha</b>; (c) auxiliar <b>todas as partes</b> a <b>entender e interpretar</b> os Pronunciamentos."],
  ["A Estrutura Conceitual é um pronunciamento? (SP1.2)","<b>Não.</b> Ela <b>não é um pronunciamento propriamente dito</b> e <b>nada nela se sobrepõe</b> a qualquer pronunciamento ou a qualquer requisito em pronunciamento."],
  ["Quem são os usuários das informações contábeis, pelos exemplos do resumo?","<b>Investidores (acionistas)</b> · <b>credores</b> · <b>analistas financeiros</b> · <b>gestores</b> · <b>órgãos reguladores</b> · <b>governo</b> · <b>público em geral</b>. São pessoas <b>internas ou externas</b> à entidade."],
  ["Qual o objetivo do relatório financeiro para fins gerais (item 1.2)?","Fornecer informações financeiras <b>úteis</b> sobre a <b>entidade que reporta</b> para <b>investidores</b>, <b>credores por empréstimos</b> e <b>outros credores</b>, <b>existentes e potenciais</b>, na tomada de decisões referente à <b>oferta de recursos à entidade</b>."],
  ["Quais as três decisões do item 1.2?","<b>Comprar, vender ou manter</b> instrumento de <b>patrimônio e de dívida</b>; <b>conceder ou liquidar</b> empréstimos ou outras formas de <b>crédito</b>; <b>exercer direitos de votar</b> ou de outro modo <b>influenciar os atos da administração</b> que afetam o uso dos recursos econômicos."],
  ["Os relatórios financeiros para fins gerais apresentam o valor da entidade? (1.7)","<b>Não.</b> Eles <b>não se destinam a apresentar o valor</b> da entidade que reporta — fornecem informações para <b>auxiliar</b> investidores e credores a <b>ESTIMAR</b> esse valor."],
  ["Por que investidores e credores são os principais usuários? (1.5)","Porque <b>não podem exigir</b> que as entidades forneçam informações <b>diretamente a eles</b>, devendo se basear nos <b>relatórios financeiros para fins gerais</b> para muitas das informações de que necessitam."],
  ["Os relatórios financeiros fornecem tudo de que o usuário precisa? (1.6)","<b>Não</b> — nem podem. O usuário precisa considerar <b>outras fontes</b>: condições e expectativas <b>econômicas gerais</b>, <b>eventos e ambiente político</b> e <b>perspectivas do setor e da empresa</b>."],
  ["Usuários primários têm as mesmas necessidades? (1.8)","<b>Não</b>: necessidades e desejos <b>diferentes e possivelmente conflitantes</b>. Busca-se atender ao <b>maior número</b> de principais usuários, e isso <b>não impede</b> incluir <b>informações adicionais</b> úteis a um <b>subconjunto específico</b>."],
  ["Qual o objetivo das demonstrações contábeis (3.2)?","Fornecer informações sobre <b>ativos, passivos, patrimônio líquido, receitas e despesas</b> úteis na avaliação das <b>perspectivas para futuros fluxos de entrada de caixa líquidos</b> e na avaliação da <b>gestão da administração</b> sobre os recursos econômicos da entidade."],
  ["Qual a perspectiva adotada nas demonstrações contábeis (3.8)?","A da <b>entidade que reporta como um todo</b> — e <b>não</b> a de <b>qualquer grupo específico</b> de investidores, credores por empréstimos ou outros credores, existentes ou potenciais."],
  ["O que diz a premissa de continuidade operacional (3.9)?","Presume-se que a entidade <b>continuará em operação no futuro previsível</b>, <b>sem intenção nem necessidade</b> de entrar em <b>liquidação</b> ou deixar de negociar. Se houver essa intenção ou necessidade, as demonstrações podem ser elaboradas em <b>base diferente</b> — e <b>descrevem a base utilizada</b>."],
  ["Entidade que reporta (3.10) e demonstrações consolidadas (3.15)","<b>Entidade que reporta:</b> a que é <b>obrigada a</b>, ou <b>decide</b>, elaborar demonstrações contábeis; pode ser <b>uma única entidade</b>, <b>parte</b> de uma entidade ou <b>mais de uma</b>, e <b>não é necessariamente entidade legal</b>. <b>Consolidadas:</b> informam ativos, passivos, PL, receitas e despesas da <b>controladora e de suas controladas como uma única entidade que reporta</b>."],

  ["Quando a informação financeira é útil (2.4)?","Quando é <b>relevante</b> e <b>representa fidedignamente</b> o que pretende representar. A utilidade é <b>aumentada</b> se for <b>comparável</b>, <b>verificável</b>, <b>tempestiva</b> e <b>compreensível</b>."],
  ["Mnemônico das características qualitativas","<b>FUNDAMENTAIS — RE-RE:</b> <b>RE</b>levância e <b>RE</b>presentação fidedigna. <b>DE MELHORIA — CO-CO-TE-VE:</b> <b>CO</b>mparabilidade, <b>CO</b>mpreensibilidade, <b>TE</b>mpestividade e capacidade de <b>VE</b>rificação."],
  ["O que é relevância (2.6)?","Informação relevante é <b>capaz de fazer diferença nas decisões</b> tomadas pelos usuários — <b>ainda que</b> alguns usuários <b>optem por não tirar vantagem</b> dela ou <b>já a conheçam de outras fontes</b>."],
  ["Valor preditivo e valor confirmatório (2.7 e 2.8)","A informação faz diferença se tiver <b>valor preditivo</b> (prever resultados futuros), <b>valor confirmatório</b> (confirmar informações já conhecidas) <b>ou ambos</b>. A informação <b>não precisa ser previsão ou prognóstico</b> para ter valor preditivo — dados <b>históricos</b> servem."],
  ["O que é materialidade (2.11)?","A informação é <b>material</b> se sua <b>omissão, distorção ou obscuridade</b> puder <b>influenciar razoavelmente</b> as decisões dos principais usuários. É um <b>aspecto de relevância específico da entidade</b>, pela <b>natureza</b> ou <b>magnitude</b>, ou <b>ambas</b>. <b>Não</b> se pode especificar <b>limite quantitativo uniforme</b>."],
  ["Quadro ATENÇÃO! — CPC 26, item 31","A entidade <b>não precisa fornecer</b> divulgação específica requerida por <b>Pronunciamento, Interpretação ou Orientação do CPC</b> se a informação resultante <b>não for material</b>."],
  ["Essência econômica × forma legal (2.12)","Em muitas circunstâncias a <b>essência</b> do fenômeno econômico e sua <b>forma legal</b> são as mesmas. <b>Se não forem</b>, informar <b>apenas a forma legal NÃO representaria fidedignamente</b> o fenômeno econômico."],
  ["As três características da representação perfeitamente fidedigna (2.13 e 2.14)","<b>COMPLETA</b>, <b>NEUTRA</b> e <b>ISENTA DE ERROS</b>. A perfeição <b>nunca ou raramente é atingida</b>; o objetivo é <b>maximizar</b> essas qualidades. A <b>completa</b> inclui <b>todas</b> as informações necessárias à compreensão, <b>inclusive todas as descrições e explicações</b>."],
  ["O que é representação neutra (2.15)?","Aquela <b>não tendenciosa</b> na seleção ou apresentação: sem inclinações, não parcial, nem enfatizada ou manipulada para ser recebida de forma <b>favorável ou desfavorável</b>. Neutra <b>não</b> significa <b>sem propósito</b> ou <b>sem influência</b> sobre o comportamento."],
  ["Prudência (2.16) e o exemplo do resumo","<b>Prudência</b> é o exercício de <b>cautela ao fazer julgamentos sob condições de incerteza</b>: ativos e receitas <b>não superavaliados</b>, passivos e despesas <b>não subavaliados</b> — e <b>também não</b> se permite subavaliar ativos/receitas nem superavaliar passivos/despesas. <b>Exemplo:</b> ação judicial entre <b>R$ 100.000 e R$ 200.000</b> → provisiona-se <b>R$ 200.000</b>."],
  ["Livre de erros (2.18) e o item 2.20","<b>Livre de erros</b> = sem erros ou omissões na descrição e processo <b>selecionado e aplicado sem erros</b>; <b>não</b> significa <b>perfeitamente precisa em todos os aspectos</b>. Pelo 2.20, <b>nem</b> a representação fidedigna de fenômeno <b>irrelevante</b> <b>nem</b> a representação <b>não fidedigna</b> de fenômeno <b>relevante</b> auxiliam boas decisões."],
  ["NÃO CONFUNDA — comparabilidade × consistência","<b>Comparabilidade</b> permite identificar e compreender <b>similaridades e diferenças</b> entre itens; <b>exige no mínimo DOIS itens</b>. <b>Consistência</b> é o <b>uso dos mesmos métodos para os mesmos itens</b>, de <b>período a período</b> na entidade ou <b>num único período para diferentes entidades</b>. <b>Comparabilidade é a META; a consistência ajuda a atingi-la.</b>"],
  ["O que é capacidade de verificação (2.30)?","<b>Diferentes observadores bem informados e independentes</b> podem chegar ao <b>consenso</b> — <b>embora não necessariamente a acordo completo</b> — de que a representação é fidedigna. Informações quantificadas <b>não precisam ser estimativa de valor único</b>: uma <b>faixa de valores</b> e as respectivas <b>probabilidades</b> também podem ser verificadas."],
  ["Tempestividade (2.33) e compreensibilidade (2.34 e 2.35)","<b>Tempestividade:</b> disponibilizar a informação <b>a tempo</b> de influenciar decisões; quanto mais <b>antiga</b>, menos útil — mas <b>algumas podem continuar tempestivas</b> muito depois do período (ex.: avaliar <b>tendências</b>). <b>Compreensibilidade:</b> <b>classificar, caracterizar e apresentar</b> de modo <b>claro e conciso</b>. <b>Excluir</b> fenômenos complexos deixaria os relatórios <b>incompletos</b> e possivelmente <b>distorcidos</b>."],
  ["Aplicação das características de melhoria (2.38) e restrição do custo (2.39)","A aplicação é <b>processo iterativo</b> que <b>NÃO segue ordem prescrita</b>; uma característica pode ter de ser <b>diminuída</b> para maximizar outra — a <b>redução temporária da comparabilidade</b> pela aplicação <b>prospectiva</b> de novo pronunciamento pode aumentar relevância ou fidedignidade no longo prazo, e <b>divulgações apropriadas compensam parcialmente</b>. O <b>custo</b> é <b>restrição generalizada</b>, e deve ser <b>justificado pelos benefícios</b>."],

  ["Quais são os elementos das demonstrações contábeis (4.1)?","<b>Ativos, passivos e patrimônio líquido</b> → referem-se à <b>posição financeira</b>. <b>Receitas e despesas</b> → referem-se ao <b>desempenho financeiro</b> da entidade que reporta."],
  ["Definições de ativo e de passivo","<b>Ativo:</b> <b>recurso econômico presente controlado</b> pela entidade <b>como resultado de eventos passados</b>. <b>Passivo:</b> <b>obrigação presente</b> da entidade <b>de transferir um recurso econômico</b> <b>como resultado de eventos passados</b>."],
  ["Definições de patrimônio líquido, receitas e despesas","<b>PL:</b> <b>participação residual nos ativos</b> após a dedução de <b>todos os passivos</b>. <b>Receitas:</b> <b>aumentos nos ativos</b> ou <b>reduções nos passivos</b> que aumentam o PL, <b>exceto</b> as <b>contribuições</b> de detentores de direitos sobre o patrimônio. <b>Despesas:</b> <b>reduções nos ativos</b> ou <b>aumentos nos passivos</b> que reduzem o PL, <b>exceto</b> as <b>distribuições</b> a esses detentores."],
  ["Critérios de reconhecimento (5.6)","<b>Somente</b> itens que atendem à definição de <b>ativo, passivo ou PL</b> vão ao <b>balanço patrimonial</b>, e <b>somente</b> os que atendem à de <b>receitas ou despesas</b> vão à <b>DRE e à DRA</b>. <b>Contudo, nem todos</b> os itens que atendem à definição <b>devem ser reconhecidos</b>."],
  ["O custo como restrição do reconhecimento (5.8)","Há <b>custo para reconhecer</b> ativo ou passivo — para os <b>preparadores</b> (obter a mensuração) e para os <b>usuários</b> (analisar e interpretar). O item deve ser reconhecido <b>se é provável que os benefícios justifiquem os custos</b>. Em alguns casos, <b>os custos superam os benefícios</b>."],
  ["Quais são as bases de mensuração (6.1)?","<b>Custo histórico</b> · <b>valor justo</b> · <b>valor em uso</b> (ativos) · <b>valor de cumprimento</b> (passivos) · <b>custo corrente</b>. A base de mensuração é a <b>característica identificada do item</b> mensurado; os elementos são quantificados <b>em termos monetários</b>."],
  ["Custo histórico (6.5)","<b>Ativo:</b> contraprestação paga para <b>adquirir ou criar</b> <b>MAIS</b> os custos de transação. <b>Passivo:</b> contraprestação <b>recebida</b> para incorrer ou assumir <b>MENOS</b> os custos de transação. O custo fica <b>“congelado”</b>: quanto maior a variação de mercado e a inflação, <b>menos relevante</b> a informação — ainda assim é a base da <b>maioria dos casos</b>, pela <b>verificabilidade</b>."],
  ["Valor atual (6.11) e valor justo (6.12)","<b>Valor atual</b> inclui: <b>valor justo</b>; <b>valor em uso</b> de ativos e <b>valor de cumprimento</b> de passivos; e <b>custo corrente</b>. <b>Valor justo</b> é o preço que seria <b>recebido pela venda</b> de ativo ou <b>pago pela transferência</b> de passivo, em <b>transação ordenada entre participantes do mercado</b> na <b>data de mensuração</b>."],
  ["Valor em uso e valor de cumprimento (6.17)","<b>Valor em uso:</b> <b>valor presente</b> dos fluxos de caixa, ou outros benefícios econômicos, que a entidade espera obter <b>do uso do ativo E de sua alienação final</b>. <b>Valor de cumprimento:</b> valor presente do caixa que a entidade espera ser obrigada a transferir para <b>cumprir a obrigação</b> — não só à <b>contraparte</b>, mas também a <b>outras partes</b>. <b>Exemplo:</b> dívida de <b>R$ 10.000</b> + <b>R$ 5.000</b> de entrega = <b>R$ 15.000</b>."],
  ["Custo corrente (6.21) e o exemplo do empréstimo","<b>Ativo:</b> custo do ativo <b>equivalente</b> na data de mensuração, com a contraprestação que <b>seria paga</b> <b>mais</b> os custos de transação. <b>Passivo:</b> contraprestação que <b>seria recebida</b> pelo passivo equivalente <b>menos</b> os custos de transação. <b>Exemplo:</b> empréstimo renegociado por <b>R$ 95.000</b> − taxa de <b>R$ 5.000</b> = <b>R$ 90.000</b>. Custo corrente é <b>valor de ENTRADA</b> (como o custo histórico), mas reflete <b>condições na data de mensuração</b>."],
  ["Mensuração do patrimônio líquido (6.87)","O valor contábil total do PL <b>NÃO é mensurado diretamente</b>: equivale ao <b>total dos ativos reconhecidos MENOS o total dos passivos reconhecidos</b>. <b>Exemplo:</b> ativos de <b>R$ 30.000</b> − passivos de <b>R$ 20.000</b> = <b>PL de R$ 10.000</b>."]
];

var QS = [
  ["O CPC 00 trata da Estrutura Conceitual para Relatório Financeiro e fornece diretrizes e fundamentos para a preparação e a apresentação de informações contábeis em conformidade com as normas contábeis aplicáveis.","C","CEBRASPE","Conceito de abertura do resumo."],
  ["É finalidade da Estrutura Conceitual auxiliar o desenvolvimento das Normas Internacionais de Contabilidade (IFRS) para que tenham base em conceitos consistentes.","C","CPC 00, item SP1.1","Primeira das três finalidades."],
  ["A Estrutura Conceitual é um pronunciamento propriamente dito e, por isso, sobrepõe-se a qualquer requisito previsto em pronunciamento específico.","E","CPC 00, item SP1.2","Ela <b>não</b> é pronunciamento e <b>nada</b> nela se sobrepõe a pronunciamento."],
  ["O objetivo do relatório financeiro para fins gerais é fornecer informações financeiras sobre a entidade que reporta que sejam úteis para investidores, credores por empréstimos e outros credores, existentes e potenciais, na tomada de decisões referente à oferta de recursos à entidade.","C","CPC 00, item 1.2","Literalidade do item 1.2."],
  ["Os relatórios financeiros para fins gerais destinam-se a apresentar o valor da entidade que reporta.","E","FCC","Eles auxiliam os usuários a <b>estimar</b> o valor — item 1.7."],
  ["Os relatórios financeiros para fins gerais fornecem todas as informações de que necessitam investidores e credores, dispensando a consulta a outras fontes.","E","FGV","Item 1.6: o usuário precisa considerar <b>outras fontes</b>."],
  ["Investidores, credores por empréstimos e outros credores, existentes e potenciais, são os principais usuários dos relatórios financeiros para fins gerais porque, em muitos casos, não podem exigir que as entidades lhes forneçam informações diretamente.","C","VUNESP","Item 1.5."],
  ["Usuários primários individuais têm necessidades e desejos de informação idênticos, o que permite a elaboração de um conjunto de informações plenamente satisfatório para todos.","E","CEBRASPE","Item 1.8: necessidades <b>diferentes e possivelmente conflitantes</b>."],
  ["Concentrar-se em necessidades de informação ordinárias não impede que a entidade que reporta inclua informações adicionais mais úteis para um subconjunto específico de principais usuários.","C","CPC 00, item 1.8","Parte final do item 1.8."],
  ["O objetivo das demonstrações contábeis é fornecer informações sobre ativos, passivos, patrimônio líquido, receitas e despesas úteis na avaliação das perspectivas para futuros fluxos de entrada de caixa líquidos e na avaliação da gestão de recursos da administração.","C","CPC 00, item 3.2","Literalidade do item 3.2."],
  ["As demonstrações contábeis fornecem informações sobre transações e outros eventos observados do ponto de vista de determinado grupo de investidores, credores por empréstimos e outros credores da entidade.","E","FCC","Item 3.8: o ponto de vista é o da <b>entidade que reporta como um todo</b>."],
  ["Se existir a intenção ou a necessidade de entrar em liquidação ou de deixar de negociar, as demonstrações contábeis podem ter que ser elaboradas em base diferente, e, nesse caso, elas descrevem a base utilizada.","C","FGV","Item 3.9 — premissa de continuidade operacional."],
  ["A entidade que reporta é necessariamente uma entidade legal.","E","VUNESP","Item 3.10: <b>não</b> é necessariamente entidade legal."],
  ["As demonstrações contábeis consolidadas fornecem informações sobre ativos, passivos, patrimônio líquido, receitas e despesas tanto da controladora como de suas controladas como uma única entidade que reporta.","C","CPC 00, item 3.15","Literalidade do item 3.15."],

  ["Para serem úteis, as informações financeiras devem ser relevantes e representar fidedignamente aquilo que pretendem representar.","C","CPC 00, item 2.4","Primeira frase do item 2.4."],
  ["A utilidade das informações financeiras é aumentada se elas forem comparáveis, verificáveis, tempestivas e compreensíveis.","C","CEBRASPE","Segunda frase do item 2.4."],
  ["As características qualitativas fundamentais são a comparabilidade e a tempestividade.","E","FCC","Item 2.5: são <b>relevância</b> e <b>representação fidedigna</b> — mnemônico RE-RE."],
  ["Informações financeiras relevantes são capazes de fazer diferença nas decisões tomadas pelos usuários, ainda que alguns deles optem por não tirar vantagem delas ou já tenham conhecimento delas a partir de outras fontes.","C","CPC 00, item 2.6","Literalidade do item 2.6."],
  ["As informações financeiras são capazes de fazer diferença em decisões se tiverem valor preditivo ou valor confirmatório, sendo vedada a presença simultânea dos dois atributos.","E","FGV","Item 2.7: pode ter valor preditivo, confirmatório <b>ou ambos</b>."],
  ["As informações financeiras precisam ser previsões ou prognósticos para que tenham valor preditivo.","E","VUNESP","Item 2.8: <b>não precisam</b> — dados históricos têm valor preditivo."],
  ["A informação é material se a sua omissão, distorção ou obscuridade puder influenciar, razoavelmente, as decisões que os principais usuários de relatórios financeiros para fins gerais tomam com base nesses relatórios.","C","CPC 00, item 2.11","Definição de materialidade."],
  ["A materialidade é aspecto de relevância específico da entidade, razão pela qual o CPC 00 fixa limite quantitativo uniforme que permite predeterminar o que é material.","E","CEBRASPE","Item 2.11: <b>não</b> se pode especificar limite quantitativo uniforme."],
  ["Conforme o item 31 do CPC 26, a entidade não precisa fornecer divulgação específica requerida por Pronunciamento Técnico, Interpretação ou Orientação do CPC se a informação resultante da divulgação não for material.","C","CPC 26, item 31","Quadro ATENÇÃO! do resumo."],
  ["Quando a essência do fenômeno econômico difere de sua forma legal, fornecer informações apenas sobre a forma legal representa fidedignamente o fenômeno econômico.","E","FCC","Item 2.12: <b>não</b> representaria fidedignamente."],
  ["Para ser representação perfeitamente fidedigna, a representação deve ser completa, neutra e isenta de erros.","C","CPC 00, item 2.13","As três características — a perfeição, contudo, raramente é atingida."],
  ["A prudência é o exercício de cautela ao fazer julgamentos sob condições de incerteza e significa que ativos e receitas não estão superavaliados e passivos e despesas não estão subavaliados.","C","FGV","Item 2.16 — a neutralidade é apoiada pela prudência."],
  ["O exercício de prudência permite a subavaliação de ativos ou de receitas e a superavaliação de passivos ou de despesas.","E","VUNESP","Item 2.16: a prudência <b>não permite</b> essas distorções."],
  ["Estar livre de erros significa que a informação é perfeitamente precisa em todos os aspectos.","E","CEBRASPE","Item 2.18: livre de erros <b>não</b> significa precisão perfeita."],
  ["Nem a representação fidedigna de fenômeno irrelevante nem a representação não fidedigna de fenômeno relevante auxiliam os usuários a tomar boas decisões.","C","CPC 00, item 2.20","Literalidade do item 2.20."],
  ["Comparabilidade, capacidade de verificação, tempestividade e compreensibilidade são características qualitativas que melhoram a utilidade de informações que sejam tanto relevantes como forneçam representação fidedigna.","C","FCC","Item 2.23 — mnemônico CO-CO-TE-VE."],
  ["Diferentemente das outras características qualitativas, a comparabilidade não se refere a um único item, pois a comparação exige, no mínimo, dois itens.","C","CPC 00, item 2.25","Literalidade do item 2.25."],
  ["A consistência é a meta; a comparabilidade ajuda a atingir essa meta.","E","FGV","Item 2.26: inverteu — a <b>comparabilidade</b> é a meta."],
  ["Capacidade de verificação significa que diferentes observadores bem informados e independentes podem chegar ao consenso, embora não necessariamente a acordo completo, de que a representação específica é representação fidedigna.","C","CPC 00, item 2.30","Literalidade do item 2.30."],
  ["Tempestividade significa disponibilizar informações aos tomadores de decisões a tempo para que sejam capazes de influenciar suas decisões, sendo que, de modo geral, quanto mais antiga a informação, menos útil ela é.","C","VUNESP","Item 2.33."],
  ["A aplicação das características qualitativas de melhoria é um processo iterativo que segue uma ordem prescrita de precedência entre elas.","E","CEBRASPE","Item 2.38: o processo <b>não</b> segue ordem prescrita."],
  ["O custo é uma restrição generalizada sobre as informações que podem ser fornecidas pelo relatório financeiro, sendo importante que esses custos sejam justificados pelos benefícios de apresentar as informações.","C","CPC 00, item 2.39","Restrição do custo."],

  ["São elementos das demonstrações contábeis os ativos, os passivos e o patrimônio líquido, que se referem à posição financeira, e as receitas e as despesas, que se referem ao desempenho financeiro da entidade que reporta.","C","CPC 00, item 4.1","Literalidade do item 4.1."],
  ["Ativo é o recurso econômico presente controlado pela entidade como resultado de eventos passados.","C","FCC","Quadro de elementos do resumo."],
  ["Passivo é a obrigação presente da entidade de transferir um recurso econômico como resultado de eventos futuros.","E","FGV","É como resultado de <b>eventos passados</b>."],
  ["Patrimônio líquido é a participação residual nos passivos da entidade após a dedução de todos os seus ativos.","E","VUNESP","Inverteu: é o residual nos <b>ativos</b> após deduzir todos os <b>passivos</b>."],
  ["Receitas são aumentos nos ativos, ou reduções nos passivos, que resultam em aumento no patrimônio líquido, inclusive os referentes a contribuições de detentores de direitos sobre o patrimônio.","E","CEBRASPE","O quadro diz <b>exceto</b> as contribuições dos detentores."],
  ["Despesas são reduções nos ativos, ou aumentos nos passivos, que resultam em reduções no patrimônio líquido, exceto aqueles referentes a distribuições aos detentores de direitos sobre o patrimônio.","C","FCC","Definição do quadro de elementos."],
  ["Todos os itens que atendem à definição de ativo, passivo, patrimônio líquido, receita ou despesa devem obrigatoriamente ser reconhecidos nas demonstrações contábeis.","E","FGV","Item 5.6: <b>nem todos</b> os itens que atendem à definição devem ser reconhecidos."],
  ["O ativo ou o passivo deve ser reconhecido se é provável que os benefícios das informações fornecidas aos usuários pelo reconhecimento justifiquem os custos de fornecer e utilizar essas informações.","C","CPC 00, item 5.8","O custo também restringe decisões de reconhecimento."],
  ["O custo histórico de passivo, quando é incorrido ou assumido, é o valor da contraprestação recebida para incorrer ou assumir o passivo mais os custos de transação.","E","VUNESP","Item 6.5: é a contraprestação recebida <b>menos</b> os custos de transação."],
  ["No custo histórico o custo fica congelado, independentemente da variação do valor de mercado e da inflação, e quanto maior essa variação, menos relevante será a informação contábil nele baseada.","C","CEBRASPE","Comentário do resumo — ainda assim é a base da maioria dos casos, pela verificabilidade."],
  ["As bases de mensuração do valor atual incluem o valor justo, o valor em uso de ativos e o valor de cumprimento de passivos e o custo corrente.","C","CPC 00, item 6.11","Literalidade do item 6.11."],
  ["Valor justo é o preço que seria recebido pela venda de ativo ou que seria pago pela transferência de passivo em transação ordenada entre participantes do mercado na data de mensuração.","C","CPC 00, item 6.12","Definição de valor justo."],
  ["Valor em uso é o valor presente dos fluxos de caixa, ou outros benefícios econômicos, que a entidade espera obter do uso do ativo, desconsiderada a sua alienação final.","E","FCC","Item 6.17: inclui também <b>a alienação final</b> do ativo."],
  ["O valor de cumprimento compreende apenas os valores a serem transferidos à contraparte do passivo.","E","FGV","Item 6.17: inclui também os valores transferidos a <b>outras partes</b> para cumprir a obrigação."],
  ["O custo corrente é valor de saída, tal como o valor justo, o valor em uso e o valor de cumprimento.","E","VUNESP","Item 6.21: custo corrente é valor de <b>ENTRADA</b>, como o custo histórico."],
  ["O valor contábil total do patrimônio líquido não é mensurado diretamente e equivale ao total dos valores contábeis de todos os ativos reconhecidos menos o total dos valores contábeis de todos os passivos reconhecidos.","C","CPC 00, item 6.87","Literalidade do item 6.87."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("A Estrutura Conceitual, o objetivo do relatório financeiro e as demonstrações contábeis",
      '<div class="box"><span class="bl">O que é o CPC 00</span>'+
      '<p>O CPC 00 trata da <b>Estrutura Conceitual para Relatório Financeiro</b>: fornece <b>diretrizes e fundamentos</b> para a <b>preparação e apresentação</b> de informações contábeis conforme as normas aplicáveis. No <b>balanço patrimonial</b>, por exemplo, ela ajuda a determinar os critérios de <b>reconhecimento, mensuração e divulgação</b> de ativo, passivo e patrimônio líquido.</p>'+
      '<p><b>Item SP1.1 — as três finalidades:</b></p>'+
      '<ul><li>auxiliar o <b>desenvolvimento das IFRS</b> para que tenham base em <b>conceitos consistentes</b>;</li>'+
      '<li>auxiliar os <b>preparadores</b> a desenvolver <b>políticas contábeis consistentes</b> quando <b>nenhum pronunciamento se aplica</b> ou quando o pronunciamento <b>permite escolha</b>;</li>'+
      '<li>auxiliar <b>todas as partes</b> a <b>entender e interpretar</b> os Pronunciamentos.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Item SP1.2 — a pegadinha da hierarquia</span>'+
      '<p>A Estrutura Conceitual <b>NÃO é um pronunciamento propriamente dito</b>. <b>Nada</b> contido nela <b>se sobrepõe</b> a qualquer pronunciamento ou a qualquer requisito em pronunciamento.</p></div>'+
      '<div class="box"><span class="bl">Objetivo do relatório financeiro para fins gerais (item 1.2)</span>'+
      '<p>Fornecer informações financeiras <b>úteis</b> sobre a <b>entidade que reporta</b> para <b>investidores</b>, <b>credores por empréstimos</b> e <b>outros credores</b> — <b>existentes e potenciais</b> — na tomada de decisões referente à <b>oferta de recursos à entidade</b>.</p>'+
      '<p class="chips"><span class="chip">comprar, vender ou manter instrumento de patrimônio e de dívida</span><span class="chip">conceder ou liquidar empréstimos ou outras formas de crédito</span><span class="chip">exercer direitos de votar ou influenciar os atos da administração</span></p>'+
      '<p>Os <b>usuários das informações contábeis</b>, na lista do resumo: <b>investidores (acionistas)</b> · <b>credores</b> · <b>analistas financeiros</b> · <b>gestores</b> · <b>órgãos reguladores</b> · <b>governo</b> · <b>público em geral</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Itens 1.5 a 1.8 — três frases que a banca adora</span>'+
      '<p><b>1.5:</b> esses usuários são os <b>principais</b> porque <b>não podem exigir</b> informações <b>diretamente</b> da entidade.</p>'+
      '<p><b>1.6:</b> os relatórios <b>não fornecem nem podem fornecer TODAS</b> as informações — o usuário considera <b>outras fontes</b> (condições e expectativas econômicas gerais, eventos e ambiente político, perspectivas do setor e da empresa).</p>'+
      '<p><b>1.7:</b> os relatórios <b>não se destinam a apresentar o valor</b> da entidade; <b>auxiliam a ESTIMAR</b> esse valor.</p>'+
      '<p><b>1.8:</b> usuários primários têm necessidades <b>diferentes e possivelmente conflitantes</b>; busca-se atender o <b>maior número</b> deles, e isso <b>não impede</b> informações adicionais a um <b>subconjunto específico</b>.</p></div>'+
      '<div class="box"><span class="bl">Capítulo 3 — as demonstrações contábeis</span>'+
      '<p><b>3.2 — objetivo:</b> informar <b>ativos, passivos, PL, receitas e despesas</b>, úteis na avaliação das <b>perspectivas para futuros fluxos de entrada de caixa líquidos</b> e na avaliação da <b>gestão da administração</b> sobre os recursos econômicos.</p>'+
      '<p><b>3.8 — perspectiva:</b> do ponto de vista da <b>entidade que reporta como um todo</b>, e <b>não</b> de <b>grupo específico</b> de investidores ou credores.</p>'+
      '<p><b>3.9 — continuidade operacional:</b> presume-se que a entidade <b>continuará em operação no futuro previsível</b>, <b>sem intenção nem necessidade</b> de liquidação. Havendo essa intenção, a base pode ser <b>outra</b> — e as demonstrações <b>descrevem a base utilizada</b>.</p>'+
      '<p><b>3.10 — entidade que reporta:</b> a que é <b>obrigada a</b>, ou <b>decide</b>, elaborar demonstrações; pode ser <b>uma</b>, <b>parte de uma</b> ou <b>mais de uma</b> entidade, e <b>não é necessariamente entidade legal</b> (ex.: um conglomerado).</p>'+
      '<p><b>3.15 — consolidadas:</b> informam <b>controladora e controladas como uma ÚNICA entidade que reporta</b>.</p></div>')
  ],
  V2:[
    sl("Características qualitativas e a restrição do custo",
      '<div class="box"><span class="bl">Item 2.4 e o mnemônico</span>'+
      '<p>Para serem úteis, as informações devem ser <b>relevantes</b> e <b>representar fidedignamente</b> o que pretendem representar. A utilidade é <b>aumentada</b> se forem <b>comparáveis, verificáveis, tempestivas e compreensíveis</b>.</p>'+
      '<p class="mn"><em>FUNDAMENTAIS — <b>RE-RE</b>: RElevância · REpresentação fidedigna</em></p>'+
      '<p class="mn"><em>DE MELHORIA — <b>CO-CO-TE-VE</b>: COmparabilidade · COmpreensibilidade · TEmpestividade · capacidade de VErificação</em></p></div>'+
      '<div class="box"><span class="bl">Relevância (2.6 a 2.8) e materialidade (2.11)</span>'+
      '<p><b>Relevante</b> é a informação <b>capaz de fazer diferença nas decisões</b> — ainda que alguns usuários <b>optem por não usá-la</b> ou <b>já a conheçam de outras fontes</b>.</p>'+
      '<p>Faz diferença quem tem <b>valor preditivo</b> (prever resultados futuros), <b>valor confirmatório</b> (confirmar o já conhecido) <b>ou ambos</b>. E atenção: a informação <b>não precisa ser previsão ou prognóstico</b> para ter valor preditivo — <b>dados históricos</b> servem para o usuário fazer as <b>suas próprias</b> previsões.</p>'+
      '<p><b>Materialidade:</b> a informação é material se sua <b>omissão, distorção ou obscuridade</b> puder <b>influenciar razoavelmente</b> as decisões dos principais usuários. É <b>aspecto de relevância específico da entidade</b>, pela <b>natureza</b> (classificação dos itens) ou <b>magnitude</b> (relevância dos valores), ou <b>ambas</b>.</p>'+
      '<p><b>Exemplo do resumo:</b> erro de <b>R$ 10.000</b> vale <b>1%</b> de um lucro de <b>R$ 1.000.000</b> — pode não ser material; o <b>mesmo</b> erro vale <b>10%</b> de um lucro de <b>R$ 100.000</b> — aí é material.</p></div>'+
      '<div class="box trap"><span class="bl">ATENÇÃO! — não há limite quantitativo uniforme</span>'+
      '<p><b>Não</b> se pode especificar <b>limite quantitativo uniforme</b> para materialidade nem <b>predeterminar</b> o que é material.</p>'+
      '<p>E o <b>CPC 26, item 31</b>: a entidade <b>não precisa fornecer</b> divulgação específica requerida por <b>Pronunciamento, Interpretação ou Orientação do CPC</b> se a informação resultante <b>não for material</b>.</p></div>'+
      '<div class="box"><span class="bl">Representação fidedigna (2.12 a 2.20)</span>'+
      '<p><b>2.12 — essência × forma legal:</b> em muitos casos são a <b>mesma</b> coisa; <b>se não forem</b>, informar <b>só a forma legal NÃO representa fidedignamente</b> o fenômeno econômico (ex.: fusões e aquisições pelo valor de livro).</p>'+
      '<div class="tree"><div class="leaf"><b>COMPLETA</b> — todas as informações necessárias à compreensão, <b>inclusive todas as descrições e explicações</b> (natureza dos ativos do grupo, representação numérica, e o que ela retrata: custo histórico ou valor justo)</div>'+
      '<div class="leaf"><b>NEUTRA</b> — <b>não tendenciosa</b> na seleção nem na apresentação; sem inclinações, sem parcialidade, sem manipulação. Neutra <b>não</b> é “sem propósito”: informação relevante é, por definição, capaz de fazer diferença</div>'+
      '<div class="leaf"><b>ISENTA DE ERROS</b> — sem erros ou omissões na descrição e processo <b>selecionado e aplicado sem erros</b>; <b>não</b> significa <b>perfeitamente precisa</b> em todos os aspectos</div></div>'+
      '<p>A <b>perfeição nunca ou raramente é atingida</b>; o objetivo é <b>maximizar</b> as três.</p>'+
      '<p><b>2.20:</b> <b>nem</b> a representação fidedigna de fenômeno <b>irrelevante</b> <b>nem</b> a representação <b>não fidedigna</b> de fenômeno <b>relevante</b> ajudam o usuário a decidir bem.</p></div>'+
      '<div class="box tip"><span class="bl">Prudência (2.16)</span>'+
      '<p>A <b>neutralidade é apoiada pela prudência</b> — o <b>exercício de cautela ao fazer julgamentos sob condições de incerteza</b>. Ativos e receitas <b>não superavaliados</b>; passivos e despesas <b>não subavaliados</b>. E a recíproca também: <b>não</b> se permite <b>subavaliar</b> ativos/receitas nem <b>superavaliar</b> passivos/despesas.</p>'+
      '<p><b>Exemplo:</b> ação judicial estimada entre <b>R$ 100.000 e R$ 200.000</b> → provisiona-se <b>R$ 200.000</b>, o cenário mais desfavorável.</p></div>'+
      '<div class="box trap"><span class="bl">NÃO CONFUNDA! — comparabilidade × consistência</span>'+
      '<p><b>Comparabilidade</b> permite identificar e compreender <b>similaridades e diferenças</b> entre itens. Diferentemente das outras características, <b>não se refere a um único item</b>: exige, <b>no mínimo, DOIS itens</b>. Compara-se com <b>outras entidades</b> e com a <b>mesma entidade em outro período ou data</b>.</p>'+
      '<p><b>Consistência</b> é o <b>uso dos mesmos métodos para os mesmos itens</b>, de <b>período a período</b> na entidade que reporta <b>ou</b> em <b>um único período para diferentes entidades</b>.</p>'+
      '<p><b>Comparabilidade é a META; a consistência AJUDA a atingir a meta.</b></p></div>'+
      '<div class="box"><span class="bl">As outras três de melhoria, e o custo</span>'+
      '<p><b>Capacidade de verificação (2.30):</b> <b>diferentes observadores bem informados e independentes</b> chegam ao <b>consenso</b>, <b>embora não necessariamente a acordo completo</b>, de que a representação é fidedigna. A informação quantificada <b>não precisa ser estimativa de valor único</b> — uma <b>faixa de valores</b> e as <b>probabilidades</b> também são verificáveis.</p>'+
      '<p><b>Tempestividade (2.33):</b> informação <b>a tempo</b> de influenciar decisões; quanto mais <b>antiga</b>, menos útil — mas <b>algumas continuam tempestivas</b> muito depois do período, por exemplo para <b>identificar e avaliar tendências</b>.</p>'+
      '<p><b>Compreensibilidade (2.34/2.35):</b> <b>classificar, caracterizar e apresentar</b> de modo <b>claro e conciso</b>. <b>Excluir</b> fenômenos inerentemente complexos facilitaria a leitura, mas deixaria os relatórios <b>incompletos</b> e possivelmente <b>distorcidos</b>.</p>'+
      '<p><b>Aplicação (2.38):</b> processo <b>iterativo</b>, que <b>NÃO segue ordem prescrita</b>; uma pode ser <b>diminuída</b> para maximizar outra. A <b>redução temporária da comparabilidade</b> pela aplicação <b>prospectiva</b> de novo pronunciamento pode aumentar relevância ou fidedignidade no <b>longo prazo</b>, e <b>divulgações apropriadas compensam parcialmente</b> a não comparabilidade.</p>'+
      '<p><b>Restrição do custo (2.39):</b> o custo é <b>restrição generalizada</b>; é importante que seja <b>justificado pelos benefícios</b> de apresentar a informação.</p></div>')
  ],
  V3:[
    sl("Elementos, reconhecimento e bases de mensuração",
      '<div class="box"><span class="bl">Elementos (item 4.1)</span>'+
      '<p><b>Ativos, passivos e patrimônio líquido</b> → <b>posição financeira</b>. <b>Receitas e despesas</b> → <b>desempenho financeiro</b>.</p>'+
      '<ul><li><b>ATIVO:</b> recurso econômico <b>presente controlado</b> pela entidade <b>como resultado de eventos passados</b>.</li>'+
      '<li><b>PASSIVO:</b> <b>obrigação presente</b> da entidade <b>de transferir um recurso econômico</b> <b>como resultado de eventos passados</b>.</li>'+
      '<li><b>PATRIMÔNIO LÍQUIDO:</b> <b>participação residual nos ATIVOS</b> após a dedução de <b>todos os seus PASSIVOS</b>.</li>'+
      '<li><b>RECEITAS:</b> <b>aumentos nos ativos</b>, ou <b>reduções nos passivos</b>, que resultam em <b>aumento no PL</b>, <b>EXCETO</b> os referentes a <b>contribuições</b> de detentores de direitos sobre o patrimônio.</li>'+
      '<li><b>DESPESAS:</b> <b>reduções nos ativos</b>, ou <b>aumentos nos passivos</b>, que resultam em <b>reduções no PL</b>, <b>EXCETO</b> os referentes a <b>distribuições</b> aos detentores de direitos sobre o patrimônio.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Critérios de reconhecimento (5.6 e 5.8)</span>'+
      '<p><b>SOMENTE</b> itens que atendem à definição de <b>ativo, passivo ou PL</b> vão ao <b>balanço patrimonial</b>; <b>somente</b> os que atendem à de <b>receitas ou despesas</b> vão à <b>DRE</b> e à <b>DRA</b>.</p>'+
      '<p><b>Mas nem todos</b> os itens que atendem à definição <b>devem ser reconhecidos</b> — entram também <b>relevância</b> e <b>materialidade</b>. Ex.: máquina sem utilidade, de valor residual irrelevante.</p>'+
      '<p><b>5.8 — o custo também restringe o reconhecimento:</b> há custo para o <b>preparador</b> (obter a mensuração) e para o <b>usuário</b> (analisar e interpretar). Reconhece-se <b>se é provável que os benefícios justifiquem os custos</b>; às vezes <b>os custos superam os benefícios</b> (ex.: contratar especialista para avaliar uma <b>patente</b>).</p></div>'+
      '<div class="box"><span class="bl">Bases de mensuração (6.1, 6.5 e 6.11)</span>'+
      '<p>Os elementos reconhecidos são quantificados <b>em termos monetários</b>, o que exige selecionar uma <b>base de mensuração</b> — a <b>característica identificada</b> do item mensurado.</p>'+
      '<div class="tree"><div class="leaf"><b>CUSTO HISTÓRICO</b> (item 6.5)</div>'+
      '<div class="leaf"><b>VALOR ATUAL</b> (item 6.11): <b>Valor Justo</b> · <b>Valor em Uso</b> para o ativo · <b>Valor de Cumprimento</b> para o passivo · <b>Custo Corrente</b></div></div>'+
      '<p><b>Custo histórico — ativo:</b> contraprestação paga para adquirir ou criar <b>MAIS</b> custos de transação. <b>Passivo:</b> contraprestação <b>recebida</b> <b>MENOS</b> custos de transação.</p>'+
      '<p>No custo histórico o custo fica <b>“congelado”</b>, independentemente da variação de mercado e da inflação; <b>quanto maior a variação, menos relevante</b> a informação. Ainda assim é a base da <b>maioria dos casos</b>, pela <b>verificabilidade</b>.</p>'+
      '<p><b>Quadro do resumo:</b> para <b>ativo</b> → custo histórico, valor justo, <b>valor em uso</b>, custo corrente. Para <b>passivo</b> → custo histórico, valor justo, <b>valor de cumprimento</b>, custo corrente.</p></div>'+
      '<div class="box"><span class="bl">As bases de valor atual, uma a uma</span>'+
      '<p><b>Valor justo (6.12):</b> preço que seria <b>recebido pela venda</b> de ativo ou <b>pago pela transferência</b> de passivo, em <b>transação ordenada entre participantes do mercado</b> na <b>data de mensuração</b>.</p>'+
      '<p><b>Valor em uso (6.17):</b> <b>valor presente</b> dos fluxos de caixa, ou outros benefícios econômicos, que a entidade espera obter <b>do uso do ativo E de sua alienação final</b>.</p>'+
      '<p><b>Valor de cumprimento (6.17):</b> <b>valor presente</b> do caixa que a entidade espera ser obrigada a transferir para <b>cumprir a obrigação</b> — inclui <b>não somente</b> o devido à <b>contraparte</b>, <b>mas também</b> o devido a <b>outras partes</b>. <b>Exemplo:</b> dívida de <b>R$ 10.000</b> + <b>R$ 5.000</b> de despesas de entrega = <b>R$ 15.000</b>.</p>'+
      '<p><b>Custo corrente (6.21) — ativo:</b> custo do ativo <b>equivalente</b> na data de mensuração, contraprestação que <b>seria paga</b> <b>MAIS</b> custos de transação. <b>Passivo:</b> contraprestação que <b>seria recebida</b> pelo passivo equivalente <b>MENOS</b> custos de transação. <b>Exemplo:</b> <b>R$ 95.000</b> − <b>R$ 5.000</b> = <b>R$ 90.000</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Valor de ENTRADA × valor de SAÍDA</span>'+
      '<p><b>Entrada:</b> <b>custo histórico</b> e <b>custo corrente</b> — refletem preços no mercado em que a entidade <b>adquiriria o ativo ou incorreria no passivo</b>.</p>'+
      '<p><b>Saída:</b> <b>valor justo</b>, <b>valor em uso</b> e <b>valor de cumprimento</b>.</p>'+
      '<p>A diferença entre os dois valores de entrada: o <b>custo corrente reflete condições na DATA DE MENSURAÇÃO</b>; o <b>custo histórico</b>, não.</p></div>'+
      '<div class="box tip"><span class="bl">Mensuração do patrimônio líquido (6.87)</span>'+
      '<p>O valor contábil total do PL <b>NÃO é mensurado diretamente</b>: equivale ao <b>total dos ativos reconhecidos MENOS o total dos passivos reconhecidos</b>.</p>'+
      '<p><b>Exemplo do resumo:</b> caixa 10.000 + contas a receber 5.000 + estoques 15.000 = <b>ativos de R$ 30.000</b>; fornecedores 8.000 + empréstimos 12.000 = <b>passivos de R$ 20.000</b>. <b>PL = 30.000 − 20.000 = R$ 10.000</b>.</p></div>')
  ]
};

var EX = {
S1:{t:"multi", instr:"Marque as finalidades da Estrutura Conceitual (item SP1.1)",
  options:["Auxiliar o desenvolvimento das IFRS para que tenham base em conceitos consistentes",
           "Auxiliar os preparadores a desenvolver políticas contábeis consistentes quando nenhum pronunciamento se aplica",
           "Auxiliar todas as partes a entender e interpretar os Pronunciamentos",
           "Substituir os pronunciamentos técnicos em caso de conflito",
           "Fixar limite quantitativo uniforme de materialidade"],
  answers:[0,1,2],
  why:"A Estrutura Conceitual auxilia; não substitui pronunciamento nem fixa limite quantitativo."},

S2:{t:"mc", instr:"Qual a posição da Estrutura Conceitual frente aos pronunciamentos (item SP1.2)?",
  options:["Não é pronunciamento propriamente dito e nada nela se sobrepõe a pronunciamento ou a requisito em pronunciamento",
           "É pronunciamento e prevalece sobre os demais em caso de conflito",
           "É pronunciamento apenas para fins de mensuração",
           "Revoga os pronunciamentos anteriores ao CPC 00"],
  answer:0,
  why:"Item SP1.2 — ela orienta, não se sobrepõe."},

S3:{t:"multi", instr:"Marque as decisões que o item 1.2 menciona",
  options:["Comprar, vender ou manter instrumento de patrimônio e de dívida",
           "Conceder ou liquidar empréstimos ou outras formas de crédito",
           "Exercer direitos de votar ou de outro modo influenciar os atos da administração",
           "Definir a alíquota de tributos a recolher",
           "Apurar o valor de mercado exato da entidade"],
  answers:[0,1,2],
  why:"São as três alíneas do item 1.2 — todas ligadas à oferta de recursos à entidade."},

S4:{t:"sort", instr:"Quem o item 1.2 nomeia como usuário primário e quem o resumo apenas lista como usuário da informação contábil?",
  buckets:["Usuário primário do item 1.2","Outro usuário citado pelo resumo"],
  items:[["Investidores",0],["Credores por empréstimos",0],["Outros credores, existentes e potenciais",0],
         ["Analistas financeiros",1],["Gestores",1],["Órgãos reguladores",1],["Governo",1],["Público em geral",1]],
  why:"O item 1.2 nomeia investidores, credores por empréstimos e outros credores; a lista ampla de usuários é a do quadro inicial do resumo."},

S5:{t:"gap", instr:"Complete a perspectiva adotada nas demonstrações contábeis (item 3.8)",
  before:"As demonstrações contábeis fornecem informações sobre transações e outros eventos observados do ponto de vista ",
  after:".",
  options:["da entidade que reporta como um todo","de determinado grupo de investidores",
           "da administração da entidade","dos credores por empréstimos"], answer:0,
  why:"E não do ponto de vista de qualquer grupo específico de investidores, credores por empréstimos ou outros credores."},

S6:{t:"match", instr:"Correlacione cada item do capítulo 3 ao seu conteúdo",
  pairs:[["Item 3.2","Objetivo das demonstrações contábeis: informar ativos, passivos, PL, receitas e despesas"],
         ["Item 3.9","Premissa de continuidade operacional; havendo intenção de liquidar, a base pode ser outra"],
         ["Item 3.10","Entidade que reporta não é necessariamente uma entidade legal"],
         ["Item 3.15","Controladora e controladas apresentadas como uma única entidade que reporta"]],
  why:"O resumo trata os quatro em sequência, do objetivo à consolidação."},

S7:{t:"sort", instr:"Classifique cada característica qualitativa",
  buckets:["Fundamental (RE-RE)","De melhoria (CO-CO-TE-VE)"],
  items:[["Relevância",0],["Representação fidedigna",0],
         ["Comparabilidade",1],["Compreensibilidade",1],["Tempestividade",1],["Capacidade de verificação",1]],
  why:"Item 2.5: as fundamentais são apenas duas — relevância e representação fidedigna."},

S8:{t:"wordbank", instr:"Monte as três características da representação perfeitamente fidedigna (item 2.13)",
  target:["completa","neutra","e","isenta","de","erros"],
  extra:["precisa","tempestiva","comparável","verificável"],
  why:"E a perfeição nunca ou raramente é atingida: o objetivo é maximizar as três qualidades."},

S9:{t:"mc", instr:"Sobre o limite quantitativo de materialidade (item 2.11), o CPC 00 diz que:",
  options:["Não se pode especificar limite quantitativo uniforme nem predeterminar o que é material",
           "O limite uniforme é de 1% do lucro líquido","O limite uniforme é de 10% do lucro líquido",
           "O limite é fixado pelo auditor independente em cada exercício"],
  answer:0,
  why:"No exemplo do resumo, R$ 10.000 valem 1% de um lucro de R$ 1.000.000 e 10% de um lucro de R$ 100.000 — o mesmo erro, materialidade diferente."},

S10:{t:"multi", instr:"Marque o que o item 2.16 afirma sobre a prudência",
  options:["É o exercício de cautela ao fazer julgamentos sob condições de incerteza",
           "Apoia a neutralidade",
           "Significa que ativos e receitas não estão superavaliados",
           "Significa que passivos e despesas não estão subavaliados",
           "Não permite a subavaliação de ativos ou de receitas",
           "Não permite a superavaliação de passivos ou de despesas",
           "Autoriza subavaliar ativos para reforçar o conservadorismo"],
  answers:[0,1,2,3,4,5],
  why:"A prudência corta nos dois sentidos — no exemplo do resumo, a provisão vai a R$ 200.000 na faixa de R$ 100.000 a R$ 200.000."},

S11:{t:"match", instr:"Correlacione cada característica ao que a define",
  pairs:[["Comparabilidade","Permite identificar similaridades e diferenças; exige no mínimo dois itens"],
         ["Consistência","Uso dos mesmos métodos para os mesmos itens; ajuda a atingir a meta"],
         ["Capacidade de verificação","Observadores bem informados e independentes chegam ao consenso, não necessariamente a acordo completo"],
         ["Tempestividade","Informação a tempo de influenciar decisões"],
         ["Compreensibilidade","Classificar, caracterizar e apresentar de modo claro e conciso"]],
  why:"Comparabilidade é a meta; a consistência ajuda a atingi-la."},

S12:{t:"mc", instr:"Segundo o item 2.18, estar livre de erros significa:",
  options:["Não haver erros ou omissões na descrição e o processo ter sido selecionado e aplicado sem erros — sem exigir precisão perfeita",
           "Ser perfeitamente precisa em todos os aspectos",
           "Não conter estimativas nas demonstrações contábeis",
           "Ter sido auditada sem ressalvas"],
  answer:0,
  why:"A estimativa em si não é precisa nem imprecisa; sua representação pode ser fidedigna se o valor for descrito como estimativa, com a natureza e as limitações do processo explicadas."},

S13:{t:"match", instr:"Correlacione cada elemento à sua definição (item 4.1)",
  pairs:[["Ativo","Recurso econômico presente controlado pela entidade como resultado de eventos passados"],
         ["Passivo","Obrigação presente de transferir recurso econômico como resultado de eventos passados"],
         ["Patrimônio líquido","Participação residual nos ativos após a dedução de todos os passivos"],
         ["Receitas","Aumentos nos ativos, ou reduções nos passivos, que aumentam o PL, exceto contribuições dos detentores"],
         ["Despesas","Reduções nos ativos, ou aumentos nos passivos, que reduzem o PL, exceto distribuições aos detentores"]],
  why:"Ativo e passivo têm o mesmo gatilho: eventos passados."},

S14:{t:"mc", instr:"Sobre os critérios de reconhecimento (itens 5.6 e 5.8), é correto afirmar:",
  options:["Somente itens que atendem à definição devem ser reconhecidos, mas nem todos os que atendem à definição são reconhecidos",
           "Todo item que atende à definição deve obrigatoriamente ser reconhecido",
           "O custo não interfere nas decisões de reconhecimento",
           "Receitas e despesas são reconhecidas no balanço patrimonial"],
  answer:0,
  why:"Relevância, materialidade e a relação custo-benefício do item 5.8 também pesam na decisão."},

S15:{t:"sort", instr:"Classifique cada base de mensuração",
  buckets:["Valor de entrada","Valor de saída"],
  items:[["Custo histórico",0],["Custo corrente",0],
         ["Valor justo",1],["Valor em uso",1],["Valor de cumprimento",1]],
  why:"Item 6.21: custo corrente, como o custo histórico, é valor de entrada — mas reflete condições na data de mensuração."},

S16:{t:"gap", instr:"Complete a diferença entre custo histórico e custo corrente",
  before:"Diferentemente do custo histórico, o custo corrente reflete condições ",
  after:".",
  options:["na data de mensuração","na data de aquisição do ativo",
           "no encerramento do exercício social anterior","na data do vencimento da obrigação"], answer:0,
  why:"No custo histórico o custo fica congelado; no custo corrente, vale o preço de mercado atual."},

S17:{t:"mc", instr:"Dívida de R$ 10.000 com fornecedor, mais R$ 5.000 que a empresa precisa transferir para pagar despesas de entrega dos produtos. Qual o valor de cumprimento?",
  options:["R$ 15.000","R$ 10.000","R$ 5.000","R$ 20.000"],
  answer:0,
  why:"O valor de cumprimento inclui não só o devido à contraparte, mas também o devido a outras partes para cumprir a obrigação."},

S18:{t:"mc", instr:"Caixa R$ 10.000, contas a receber R$ 5.000 e estoques R$ 15.000; fornecedores R$ 8.000 e empréstimos bancários R$ 12.000. Qual o valor contábil do patrimônio líquido?",
  options:["R$ 10.000","R$ 30.000","R$ 20.000","R$ 50.000"],
  answer:0,
  why:"Item 6.87: o PL não é mensurado diretamente — 30.000 − 20.000 = 10.000."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Avançada 01","https://www.tecconcursos.com.br/s/Q2vhBL","Q2vhBL"],
  ["Caderno FCC — Contabilidade Avançada 01","https://www.tecconcursos.com.br/s/Q2vhBr","Q2vhBr"],
  ["Caderno FGV — Contabilidade Avançada 01","https://www.tecconcursos.com.br/s/Q2vhCh","Q2vhCh"],
  ["Caderno VUNESP — Contabilidade Avançada 01","https://www.tecconcursos.com.br/s/Q2vhCn","Q2vhCn"]
];
var TECNOTA = "Módulo de letra de norma: quase todo erro vem de troca de palavra. As três fronteiras que mais rendem dinheiro para a banca são: (1) misturar as listas do mnemônico — RE-RE são as fundamentais (relevância e representação fidedigna) e CO-CO-TE-VE as de melhoria (comparabilidade, compreensibilidade, tempestividade e capacidade de verificação); (2) comparabilidade × consistência, em que o resumo é taxativo — a comparabilidade é a META e a consistência ajuda a atingi-la, e a comparação exige no mínimo dois itens; e (3) o corte entre valores de ENTRADA (custo histórico e custo corrente) e valores de SAÍDA (valor justo, valor em uso e valor de cumprimento), com a ressalva de que só o custo corrente reflete condições na data de mensuração. Vale ainda decorar os 'exceto' das definições de receitas e despesas (contribuições e distribuições dos detentores de direitos sobre o patrimônio), o 'eventos passados' de ativo e passivo, e os três números do resumo: valor de cumprimento de 10.000 + 5.000 = 15.000, custo corrente de passivo de 95.000 − 5.000 = 90.000 e patrimônio líquido de 30.000 − 20.000 = 10.000.";

var UNITS = [
  {n:1, title:"Estrutura Conceitual, objetivo e demonstrações contábeis", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Finalidade, usuários e o capítulo 3", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · finalidade e hierarquia da Estrutura", xp:25, data:["S1","S2","T0","T1","T2"]},
    {id:"K3", type:"drill",  title:"Praticar · objetivo e usuários primários",        xp:25, data:["S3","S4","T3","T4","T5","T6","T7","T8"]},
    {id:"K4", type:"drill",  title:"Praticar · demonstrações contábeis (cap. 3)",    xp:25, data:["S5","S6","T9","T10","T11","T12","T13"]},
    {id:"K5", type:"flash",  title:"Flashcards · Estrutura Conceitual e usuários",   xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13]}
  ]},
  {n:2, title:"Características qualitativas e restrição do custo", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"RE-RE, CO-CO-TE-VE e a restrição do custo",      xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · relevância e materialidade",          xp:25, data:["S7","S9","T14","T15","T16","T17","T18","T19","T20","T21","T22"]},
    {id:"K8", type:"drill",  title:"Praticar · representação fidedigna",             xp:25, data:["S8","S10","S12","T23","T24","T25","T26","T27","T28"]},
    {id:"K9", type:"drill",  title:"Praticar · características de melhoria",         xp:25, data:["S11","T29","T30","T31","T32","T33","T34","T35"]},
    {id:"K10",type:"flash",  title:"Flashcards · características qualitativas",      xp:15, data:[14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]}
  ]},
  {n:3, title:"Elementos, reconhecimento e mensuração", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Elementos, critérios e bases de mensuração",     xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · elementos e definições",              xp:25, data:["S13","T36","T37","T38","T39","T40","T41"]},
    {id:"K13",type:"drill",  title:"Praticar · reconhecimento e custo histórico",    xp:25, data:["S14","S16","T42","T43","T44","T45"]},
    {id:"K14",type:"drill",  title:"Praticar · valor atual, entrada × saída e PL",   xp:25, data:["S15","S17","S18","T46","T47","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · elementos e mensuração",            xp:15, data:[29,30,31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                        xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                          xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                         xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 01 de Contabilidade Avançada (Radegondes) ---------- */
var COM={
0:"<p>Certo. É a frase de abertura do resumo: o CPC 00 <b>“trata da Estrutura Conceitual para Relatório Financeiro”</b>, o que significa que ele <b>“fornece diretrizes e fundamentos para a preparação e apresentação de informações contábeis em conformidade com as normas contábeis aplicáveis”</b>.</p><p>O exemplo do material é o <b>balanço patrimonial</b>: a Estrutura Conceitual ajuda a determinar os critérios de <b>reconhecimento, mensuração e divulgação</b> dos itens patrimoniais (ativo, passivo e PL).</p><p class='fb-fonte'>Resumo 01 · <i>CPC 00</i></p>",
1:"<p>Certo pela letra da alínea (a) do <b>item SP1.1</b>: a finalidade é <b>“auxiliar o desenvolvimento das Normas Internacionais de Contabilidade (IFRS) para que tenham base em conceitos consistentes”</b>.</p><p>As outras duas do esquema do resumo: auxiliar os <b>preparadores</b> a desenvolver <b>políticas contábeis consistentes</b> (quando nenhum pronunciamento se aplica ou quando ele permite escolha) e auxiliar <b>todas as partes</b> a <b>entender e interpretar</b> os pronunciamentos propriamente ditos.</p><p class='fb-fonte'>Resumo 01 · <i>Situação e Finalidade da Estrutura Conceitual</i></p>",
2:"<p>Errado nas duas pontas. O <b>item SP1.2</b> é expresso: <b>“esta Estrutura Conceitual não é um pronunciamento propriamente dito. Nada contido nesta Estrutura Conceitual se sobrepõe a qualquer pronunciamento ou qualquer requisito em pronunciamento”</b>.</p><p>Guarde o papel dela como o resumo o descreve: um <b>guia</b> da contabilidade societária, que <b>auxilia</b> — nunca prevalece.</p><p class='fb-fonte'>Resumo 01 · <i>Situação e Finalidade da Estrutura Conceitual</i></p>",
3:"<p>Certo — é a literalidade do <b>item 1.2</b>: fornecer informações financeiras sobre a entidade que reporta <b>úteis para investidores, credores por empréstimos e outros credores, existentes e potenciais, na tomada de decisões referente à oferta de recursos à entidade</b>.</p><p>No esquema do resumo, essas decisões são três: <b>comprar, vender ou manter</b> instrumento de patrimônio e de dívida; <b>conceder ou liquidar</b> empréstimos ou outras formas de crédito; e <b>exercer direitos de votar</b> ou influenciar os atos da administração.</p><p class='fb-fonte'>Resumo 01 · <i>Objetivo do Relatório Financeiro para Fins Gerais</i></p>",
4:"<p>Errado por uma palavra. O <b>item 1.7</b> diz o oposto: os relatórios financeiros para fins gerais <b>“não se destinam a apresentar o valor da entidade que reporta, mas fornecem informações para auxiliar investidores, credores por empréstimos e outros credores, existentes e potenciais, a ESTIMAR o valor da entidade que reporta”</b>.</p><p>Apresentar × auxiliar a estimar: é aí que a banca troca.</p><p class='fb-fonte'>Resumo 01 · <i>Objetivo do Relatório Financeiro para Fins Gerais</i></p>",
5:"<p>Errado. O <b>item 1.6</b> é categórico: os relatórios financeiros para fins gerais <b>“não fornecem nem podem fornecer todas as informações de que necessitam investidores, credores por empréstimos e outros credores, existentes e potenciais”</b>.</p><p>Esses usuários <b>precisam considerar informações pertinentes de outras fontes</b>: condições e expectativas <b>econômicas gerais</b>, <b>eventos políticos e ambiente político</b> e <b>perspectivas do setor e da empresa</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Objetivo do Relatório Financeiro para Fins Gerais</i></p>",
6:"<p>Certo pelo <b>item 1.5</b>: muitos desses usuários <b>“não podem exigir que as entidades que reportam forneçam informações diretamente a eles, devendo se basear em relatórios financeiros para fins gerais”</b>. <b>“Consequentemente, eles são os principais usuários aos quais se destinam relatórios financeiros para fins gerais.”</b></p><p>Repare no encadeamento: a <b>impossibilidade de exigir</b> informação direta é a razão de serem os <b>principais</b> usuários.</p><p class='fb-fonte'>Resumo 01 · <i>Objetivo do Relatório Financeiro para Fins Gerais</i></p>",
7:"<p>Errado no adjetivo. O <b>item 1.8</b> abre justamente dizendo que <b>“usuários primários individuais têm necessidades e desejos de informação DIFERENTES e possivelmente CONFLITANTES”</b>.</p><p>O que se busca, ao desenvolver os Pronunciamentos, é <b>“fornecer um conjunto de informações que atenda às necessidades do maior número de principais usuários”</b> — e não um conjunto que satisfaça todos plenamente.</p><p class='fb-fonte'>Resumo 01 · <i>Usuários Primários</i></p>",
8:"<p>Certo — é a parte final do <b>item 1.8</b>: <b>“concentrar-se em necessidades de informação ordinárias não impede que a entidade que reporta inclua informações adicionais que sejam mais úteis para um subconjunto específico de principais usuários”</b>.</p><p>O exemplo do resumo: a empresa publica o relatório anual padrão e, além dele, disponibiliza <b>informações adicionais no website ou em relatórios complementares</b> para <b>analistas de mercado</b> ou <b>gestores de fundos de investimentos</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Usuários Primários</i></p>",
9:"<p>Certo pela letra do <b>item 3.2</b>: o objetivo das demonstrações contábeis é fornecer informações sobre <b>ativos, passivos, patrimônio líquido, receitas e despesas</b> úteis <b>“na avaliação das perspectivas para futuros fluxos de entrada de caixa líquidos para a entidade que reporta e na avaliação da gestão de recursos da administração sobre os recursos econômicos da entidade”</b>.</p><p>São <b>dois</b> usos, e a banca costuma suprimir o segundo.</p><p class='fb-fonte'>Resumo 01 · <i>Objetivo e Alcance das Demonstrações Contábeis</i></p>",
10:"<p>Errado — inverteu a perspectiva. O <b>item 3.8</b> diz que as demonstrações fornecem informações sobre transações e outros eventos observados <b>“do ponto de vista da entidade que reporta COMO UM TODO e, não, do ponto de vista de qualquer grupo específico de investidores, credores por empréstimos e outros credores, existentes ou potenciais, da entidade”</b>.</p><p>A entidade reporta para todos; não personaliza a demonstração para um grupo.</p><p class='fb-fonte'>Resumo 01 · <i>Perspectiva Adotada nas Demonstrações Contábeis</i></p>",
11:"<p>Certo pelo <b>item 3.9</b>: normalmente presume-se que a entidade <b>“não tem a intenção nem a necessidade de entrar em liquidação ou deixar de negociar”</b>; existindo essa intenção ou necessidade, <b>“as demonstrações contábeis podem ter que ser elaboradas em base diferente. Em caso afirmativo, as demonstrações contábeis descrevem a base utilizada”</b>.</p><p>No exemplo do resumo, a varejista que fecha todas as lojas prepara as demonstrações em <b>base de liquidação</b> e <b>deixa claro</b> que a base não é a de continuidade.</p><p class='fb-fonte'>Resumo 01 · <i>Premissa de Continuidade Operacional</i></p>",
12:"<p>Errado. O <b>item 3.10</b> encerra exatamente com a ressalva contrária: <b>“uma entidade que reporta NÃO é necessariamente uma entidade legal”</b>. Ela é a entidade <b>obrigada a</b>, ou que <b>decide</b>, elaborar demonstrações, e pode ser <b>uma única entidade</b>, <b>parte</b> de uma entidade ou <b>mais de uma</b>.</p><p>O exemplo do resumo é o <b>conglomerado empresarial</b>: pode ser entidade que reporta mesmo sem ser entidade legal, com a empresa “mãe” consolidando as subsidiárias.</p><p class='fb-fonte'>Resumo 01 · <i>Entidade que Reporta</i></p>",
13:"<p>Certo pela literalidade do <b>item 3.15</b>: as consolidadas fornecem informações sobre ativos, passivos, PL, receitas e despesas <b>“tanto da controladora como de suas controladas como uma única entidade que reporta”</b>.</p><p>O resumo explica a utilidade: os <b>fluxos de entrada de caixa líquidos para a controladora incluem distribuições de suas controladas</b>, e essas distribuições dependem dos fluxos de caixa das próprias controladas.</p><p class='fb-fonte'>Resumo 01 · <i>Demonstrações Contábeis Consolidadas e Não Consolidadas</i></p>",
14:"<p>Certo — é a primeira frase do <b>item 2.4</b>: <b>“se informações financeiras devem ser úteis, elas devem ser relevantes e representar fidedignamente aquilo que pretendem representar”</b>.</p><p>São as duas características <b>fundamentais</b> do item 2.5, o <b>RE-RE</b> do mnemônico do resumo: <b>RE</b>levância e <b>RE</b>presentação fidedigna.</p><p class='fb-fonte'>Resumo 01 · <i>Características Qualitativas de Informações Financeiras Úteis</i></p>",
15:"<p>Certo — segunda frase do <b>item 2.4</b>: <b>“a utilidade das informações financeiras é aumentada se forem comparáveis, verificáveis, tempestivas e compreensíveis”</b>.</p><p>São as quatro de <b>melhoria</b>, o <b>CO-CO-TE-VE</b> do resumo: <b>CO</b>mparabilidade, <b>CO</b>mpreensibilidade, <b>TE</b>mpestividade e capacidade de <b>VE</b>rificação. Elas <b>melhoram</b> a utilidade; não a criam.</p><p class='fb-fonte'>Resumo 01 · <i>Características Qualitativas de Informações Financeiras Úteis</i></p>",
16:"<p>Errado — trocou as listas. O <b>item 2.5</b> é curto e direto: <b>“as características qualitativas fundamentais são relevância e representação fidedigna”</b>.</p><p>Comparabilidade e tempestividade estão do outro lado do esquema, entre as <b>de melhoria</b>. Use o mnemônico do resumo para não cair: <b>fundamentais = RE-RE</b>; <b>de melhoria = CO-CO-TE-VE</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Características Qualitativas Fundamentais</i></p>",
17:"<p>Certo pela letra do <b>item 2.6</b>: informações relevantes <b>“são capazes de fazer diferença nas decisões tomadas pelos usuários”</b>, e podem fazer diferença <b>“ainda que alguns usuários optem por não tirar vantagem delas ou já tenham conhecimento delas a partir de outras fontes”</b>.</p><p>O exemplo do resumo é a <b>DFC trimestral</b> de uma companhia de capital aberto: mesmo acionistas que já conhecem os dados por outras fontes podem considerá-los ao comprar ou vender ações.</p><p class='fb-fonte'>Resumo 01 · <i>Relevância</i></p>",
18:"<p>Errado — o CPC 00 não veda nada disso. O <b>item 2.7</b> diz que as informações fazem diferença em decisões <b>“se tiverem valor preditivo ou valor confirmatório, OU AMBOS”</b>.</p><p>No comentário do resumo: <b>valor preditivo</b> é poder <b>prever resultados futuros</b>; <b>valor confirmatório</b> é poder <b>confirmar informações já conhecidas</b>. O exemplo da <b>DRE trimestral</b> mostra os dois convivendo — crescimento de vendas sinaliza o trimestre seguinte, e o balanço confirma o que se projetara.</p><p class='fb-fonte'>Resumo 01 · <i>Relevância</i></p>",
19:"<p>Errado. O <b>item 2.8</b> afirma o contrário: <b>“informações financeiras NÃO precisam ser previsões ou prognósticos para ter valor preditivo”</b> — elas são <b>empregadas por usuários ao fazer suas próprias previsões</b>.</p><p>O exemplo do resumo é o gestor de varejo que analisa os dados do <b>último trimestre</b> para identificar <b>padrões de vendas sazonais</b> e planejar a demanda das festas de fim de ano: dado <b>histórico</b> com valor preditivo.</p><p class='fb-fonte'>Resumo 01 · <i>Relevância</i></p>",
20:"<p>Certo — é a definição do <b>item 2.11</b>: a informação é material <b>“se a sua omissão, distorção ou obscuridade puder influenciar, razoavelmente, as decisões que os principais usuários de relatórios financeiros para fins gerais tomam com base nesses relatórios”</b>.</p><p>O exemplo do resumo: a empresa <b>omite uma despesa significativa</b> na DRE, e essa omissão pode influenciar negativamente a decisão dos investidores de comprar, vender ou manter ações.</p><p class='fb-fonte'>Resumo 01 · <i>Materialidade</i></p>",
21:"<p>Errado na segunda parte. A primeira está correta — materialidade é <b>aspecto de relevância específico da entidade</b>, com base na <b>natureza</b> ou <b>magnitude</b>, ou ambas. Mas o <b>item 2.11</b> conclui exatamente ao contrário: <b>“não se pode especificar um limite quantitativo uniforme para materialidade ou predeterminar o que pode ser material em uma situação específica”</b>.</p><p>O exemplo do resumo prova o ponto: um erro de <b>R$ 10.000</b> é <b>1%</b> de um lucro de <b>R$ 1.000.000</b> e <b>10%</b> de um lucro de <b>R$ 100.000</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Materialidade</i></p>",
22:"<p>Certo — é o quadro <b>ATENÇÃO!</b> do resumo, que transcreve o <b>item 31 do CPC 26</b>: <b>“a entidade não precisa fornecer uma divulgação específica, requerida por Pronunciamento Técnico, Interpretação ou Orientação do CPC, se a informação resultante da divulgação não for material”</b>.</p><p>O exemplo é o gasto com <b>transporte</b> insignificante frente ao total de receitas e despesas: dispensa-se a divulgação detalhada e concentra-se no que é significativo.</p><p class='fb-fonte'>Resumo 01 · <i>Materialidade — Atenção! CPC 26</i></p>",
23:"<p>Errado. O <b>item 2.12</b> diz que, quando a essência e a forma legal <b>não são as mesmas</b>, <b>“fornecer informações apenas sobre a forma legal NÃO representaria fidedignamente o fenômeno econômico”</b>.</p><p>O exemplo do resumo são as <b>fusões e aquisições</b>: a forma legal levaria a reconhecer ativos e passivos pelos <b>valores dos livros da adquirida</b>, mas se o valor pago for maior ou menor que o contábil, só a forma legal não retrata o <b>valor econômico</b> da operação.</p><p class='fb-fonte'>Resumo 01 · <i>Representação Fidedigna</i></p>",
24:"<p>Certo — é o esquema do <b>item 2.13</b>, com as três características da representação fidedigna: <b>COMPLETA</b>, <b>NEUTRA</b> e <b>ISENTA DE ERROS</b>.</p><p>O próprio item acrescenta o que a banca gosta de cobrar em seguida: <b>“obviamente, a perfeição nunca ou raramente é atingida. O objetivo é maximizar essas qualidades tanto quanto possível”</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Representação Fidedigna</i></p>",
25:"<p>Certo pela letra do <b>item 2.16</b>: <b>“a neutralidade é apoiada pelo exercício da prudência. Prudência é o exercício de cautela ao fazer julgamentos sob condições de incerteza. O exercício de prudência significa que ativos e receitas não estão superavaliados e passivos e despesas não estão subavaliados”</b>.</p><p>O exemplo do resumo: ação judicial estimada entre <b>R$ 100.000 e R$ 200.000</b> — a empresa pode provisionar <b>R$ 200.000</b>, o cenário mais desfavorável.</p><p class='fb-fonte'>Resumo 01 · <i>Representação Fidedigna</i></p>",
26:"<p>Errado — a prudência corta nos <b>dois</b> sentidos. O <b>item 2.16</b> continua: <b>“da mesma forma, o exercício de prudência NÃO permite a subavaliação de ativos ou receitas ou a superavaliação de passivos ou despesas”</b>.</p><p>A razão está no próprio item: <b>“essas divulgações distorcidas podem levar à superavaliação ou subavaliação de receitas ou despesas em períodos futuros”</b>. Prudência não é rebaixar o patrimônio de propósito.</p><p class='fb-fonte'>Resumo 01 · <i>Representação Fidedigna</i></p>",
27:"<p>Errado justamente na frase que o <b>item 2.18</b> repete duas vezes: <b>“representação fidedigna não significa representação precisa em todos os aspectos”</b> e <b>“nesse contexto, livre de erros NÃO significa perfeitamente precisa em todos os aspectos”</b>.</p><p>Livre de erros é não haver <b>erros ou omissões na descrição</b> e o <b>processo</b> ter sido <b>selecionado e aplicado sem erros</b>. Por isso uma <b>estimativa</b> pode ser fidedigna se o valor for descrito como estimativa, com a <b>natureza e as limitações</b> do processo explicadas.</p><p class='fb-fonte'>Resumo 01 · <i>Representação Fidedigna</i></p>",
28:"<p>Certo — é a literalidade do <b>item 2.20</b>: <b>“nem a representação fidedigna de fenômeno irrelevante nem a representação não fidedigna de fenômeno relevante auxiliam os usuários a tomar boas decisões”</b>.</p><p>O comentário do resumo fecha o raciocínio: as informações, para serem úteis, precisam das <b>duas</b> características fundamentais ao mesmo tempo — relevância <b>e</b> representação fidedigna. Uma não supre a falta da outra.</p><p class='fb-fonte'>Resumo 01 · <i>Representação Fidedigna</i></p>",
29:"<p>Certo pelo <b>item 2.23</b>: comparabilidade, capacidade de verificação, tempestividade e compreensibilidade <b>“são características qualitativas que melhoram a utilidade de informações que sejam tanto relevantes como forneçam representação fidedigna do que pretendem representar”</b>.</p><p>São o <b>CO-CO-TE-VE</b> do mnemônico. O item acrescenta o segundo papel delas: ajudar a escolher <b>qual de duas formas</b> usar para representar um fenômeno quando ambas são <b>igualmente relevantes e igualmente fidedignas</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Características Qualitativas de Melhoria</i></p>",
30:"<p>Certo pela letra do <b>item 2.25</b>: <b>“diferentemente das outras características qualitativas, a comparabilidade não se refere a um único item. A comparação exige, no mínimo, dois itens”</b>.</p><p>E o <b>item 2.24</b> diz com quem se compara: informações similares sobre <b>outras entidades</b> e informações similares sobre a <b>mesma entidade</b> referentes a <b>outro período ou a outra data</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Comparabilidade</i></p>",
31:"<p>Errado — inverteu os papéis. O quadro <b>NÃO CONFUNDA!</b> do resumo encerra com a frase exata: <b>“comparabilidade é a META. A consistência ajuda a atingir a meta”</b>.</p><p>E o <b>item 2.26</b> separa os conceitos: <b>consistência</b> é o <b>uso dos mesmos métodos para os mesmos itens</b>, de período a período na entidade que reporta ou em um único período para diferentes entidades — <b>relacionada</b> à comparabilidade, mas <b>não a mesma coisa</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Comparabilidade × Consistência — Não Confunda!</i></p>",
32:"<p>Certo — é a literalidade do <b>item 2.30</b>: capacidade de verificação <b>“significa que diferentes observadores bem informados e independentes podem chegar ao consenso, embora não a acordo necessariamente completo, de que a representação específica é representação fidedigna”</b>.</p><p>Guarde também a parte final do item, que rende assertiva: as informações quantificadas <b>não precisam ser estimativa de valor único</b> — uma <b>faixa de valores possíveis</b> e as respectivas <b>probabilidades</b> também podem ser verificadas.</p><p class='fb-fonte'>Resumo 01 · <i>Capacidade de Verificação</i></p>",
33:"<p>Certo pelo <b>item 2.33</b>: <b>“tempestividade significa disponibilizar informações aos tomadores de decisões a tempo para que sejam capazes de influenciar suas decisões. De modo geral, quanto mais antiga a informação, menos útil ela é”</b>.</p><p>Atenção à ressalva do mesmo item, que a banca usa para montar pegadinha: <b>algumas informações podem continuar tempestivas por muito tempo</b> após o final do período, porque alguns usuários precisam <b>identificar e avaliar tendências</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Tempestividade</i></p>",
34:"<p>Errado por uma palavra. O <b>item 2.38</b> diz que a aplicação das características qualitativas de melhoria <b>“é um processo iterativo que NÃO segue uma ordem prescrita”</b>.</p><p>O item ainda admite o contrário de uma hierarquia fixa: <b>“algumas vezes, a característica qualitativa de melhoria pode ter de ser diminuída para maximizar outra”</b> — como a <b>redução temporária da comparabilidade</b> pela aplicação <b>prospectiva</b> de novo pronunciamento, compensada em parte por <b>divulgações apropriadas</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Aplicação das Características Qualitativas de Melhoria</i></p>",
35:"<p>Certo pela letra do <b>item 2.39</b>: <b>“o custo é uma restrição generalizada sobre as informações que podem ser fornecidas pelo relatório financeiro. O relatório de informações financeiras impõe custos, e é importante que esses custos sejam justificados pelos benefícios de apresentar essas informações”</b>.</p><p>O exemplo do resumo é o reconhecimento de um <b>ativo intangível</b> (uma patente): o preparador contrata <b>especialista</b> para avaliá-lo e o usuário gasta <b>tempo e recursos</b> para interpretar — e o material avisa para ler também o <b>item 5.8</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Restrições do Custo sobre Relatórios Financeiros</i></p>",
36:"<p>Certo — é o <b>item 4.1</b> na íntegra: <b>ativos, passivos e patrimônio líquido</b> <b>“se referem à posição financeira da entidade que reporta”</b>; <b>receitas e despesas</b> <b>“se referem ao desempenho financeiro da entidade que reporta”</b>.</p><p>Vale fixar a divisão: os três primeiros são elementos de <b>balanço</b>; os dois últimos, de <b>resultado</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Elementos das Demonstrações Contábeis</i></p>",
37:"<p>Certo — é a definição do quadro de elementos do resumo: ativo é o <b>“recurso econômico presente controlado pela entidade como resultado de eventos passados”</b>.</p><p>Três palavras carregam a definição e são as que a banca troca: <b>presente</b>, <b>controlado</b> e <b>eventos passados</b>. Note que o quadro fala de <b>controle</b>, não de propriedade.</p><p class='fb-fonte'>Resumo 01 · <i>Elementos das Demonstrações Contábeis</i></p>",
38:"<p>Errado no marco temporal. O quadro do resumo define passivo como a <b>“obrigação presente da entidade de transferir um recurso econômico como resultado de eventos PASSADOS”</b> — e não de eventos futuros.</p><p>É a mesma amarra do ativo: o elemento é <b>presente</b>, mas nasce de <b>evento passado</b>. Se o fato ainda vai acontecer, não há passivo a reconhecer.</p><p class='fb-fonte'>Resumo 01 · <i>Elementos das Demonstrações Contábeis</i></p>",
39:"<p>Errado — inverteu ativo e passivo. O quadro do resumo define patrimônio líquido como a <b>“participação residual nos ATIVOS da entidade após a dedução de todos os seus PASSIVOS”</b>.</p><p>É a mesma ideia do <b>item 6.87</b>, com o exemplo do material: ativos de <b>R$ 30.000</b> menos passivos de <b>R$ 20.000</b> resultam em PL de <b>R$ 10.000</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Elementos das Demonstrações Contábeis</i></p>",
40:"<p>Errado justamente na exceção. O quadro do resumo define receitas como <b>“aumentos nos ativos, ou reduções nos passivos, que resultam em aumento no patrimônio líquido, EXCETO aqueles referentes a contribuições de detentores de direitos sobre o patrimônio”</b>.</p><p>Trocar <b>“exceto”</b> por <b>“inclusive”</b> é a pegadinha padrão: aporte de sócio aumenta o PL, mas <b>não</b> é receita. O espelho vale para despesa, cuja exceção são as <b>distribuições</b> aos detentores.</p><p class='fb-fonte'>Resumo 01 · <i>Elementos das Demonstrações Contábeis</i></p>",
41:"<p>Certo — é a definição literal do quadro: despesas são <b>“reduções nos ativos, ou aumentos nos passivos, que resultam em reduções no patrimônio líquido, exceto aqueles referentes a distribuições aos detentores de direitos sobre o patrimônio”</b>.</p><p>Guarde o par: a exceção da <b>receita</b> são as <b>contribuições</b> dos detentores; a da <b>despesa</b> são as <b>distribuições</b> a eles. Dividendo reduz o PL e não é despesa.</p><p class='fb-fonte'>Resumo 01 · <i>Elementos das Demonstrações Contábeis</i></p>",
42:"<p>Errado. O <b>item 5.6</b> tem duas partes, e a assertiva ignora a segunda: <b>“somente itens que atendem à definição de ativo, passivo ou patrimônio líquido devem ser reconhecidos no balanço patrimonial”</b> — mas <b>“contudo, nem todos os itens que atendem à definição de um desses elementos devem ser reconhecidos”</b>.</p><p>O comentário do resumo explica por quê: entram também a <b>relevância</b> e a <b>materialidade</b>. O exemplo é a <b>máquina sem utilidade</b>, cujo valor residual pode ser irrelevante para a análise.</p><p class='fb-fonte'>Resumo 01 · <i>Critérios de Reconhecimento</i></p>",
43:"<p>Certo pela letra do <b>item 5.8</b>: <b>“o ativo ou passivo deve ser reconhecido se é provável que os benefícios das informações fornecidas aos usuários das demonstrações contábeis pelo reconhecimento justifiquem os custos de fornecer e utilizar essas informações”</b>.</p><p>O item lembra que o custo atinge os dois lados: os <b>preparadores</b> incorrem em custos para obter a mensuração e os <b>usuários</b>, para analisar e interpretar. <b>“Em alguns casos, os custos do reconhecimento podem superar seus benefícios.”</b></p><p class='fb-fonte'>Resumo 01 · <i>Critérios de Reconhecimento</i></p>",
44:"<p>Errado no sinal. O <b>item 6.5</b> diz que o custo histórico do passivo, quando incorrido ou assumido, é <b>“o valor da contraprestação recebida para incorrer ou assumir o passivo MENOS custos de transação”</b>.</p><p>O <b>mais</b> é do lado do ativo: contraprestação paga para adquirir ou criar <b>MAIS</b> os custos de transação. No exemplo do resumo, o empréstimo bancário entra pela contraprestação recebida <b>descontados</b> os custos da operação, como <b>taxa de juros e tarifas bancárias</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Custo Histórico</i></p>",
45:"<p>Certo — é o comentário do resumo sobre o <b>item 6.5</b>: <b>“no custo histórico, como o próprio nome diz (histórico), o custo fica ‘congelado’, independentemente da variação do valor de mercado e da inflação. Quanto maior for essa variação, menos relevante será a informação contábil baseada no custo histórico”</b>.</p><p>E o material completa com a ressalva que costuma virar assertiva: <b>“ainda assim, essa é a base utilizada para a maioria dos casos, dado sua característica qualitativa de verificabilidade”</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Custo Histórico</i></p>",
46:"<p>Certo — é o <b>item 6.11</b> na íntegra: as bases de mensuração do valor atual incluem <b>(a) valor justo</b>; <b>(b) valor em uso de ativos e valor de cumprimento de passivos</b>; e <b>(c) custo corrente</b>.</p><p>No esquema do resumo, a árvore tem dois galhos: <b>CUSTO HISTÓRICO</b> (item 6.5) e <b>VALOR ATUAL</b> (item 6.11), este último com as quatro bases acima.</p><p class='fb-fonte'>Resumo 01 · <i>Valor Atual</i></p>",
47:"<p>Certo pela literalidade do <b>item 6.12</b>: valor justo é <b>“o preço que seria recebido pela venda de ativo ou que seria pago pela transferência de passivo em transação ordenada entre participantes do mercado na data de mensuração”</b>.</p><p>O exemplo do resumo é o <b>terreno</b> em balanço: seu valor justo sai do preço que se obteria na venda, apurado por <b>transações similares recentes</b> com terrenos semelhantes na região.</p><p class='fb-fonte'>Resumo 01 · <i>Valor Justo</i></p>",
48:"<p>Errado por supressão. O <b>item 6.17</b> define valor em uso como <b>“o valor presente dos fluxos de caixa, ou outros benefícios econômicos, que a entidade espera obter do uso de ativo E DE SUA ALIENAÇÃO FINAL”</b>.</p><p>No exemplo do resumo, o prédio tem valor em uso igual ao valor presente <b>dos fluxos de caixa ou benefícios econômicos futuros</b> <b>e</b> <b>do valor líquido de venda (alienação) ao final de sua vida útil</b>. Cortar a alienação final erra a assertiva.</p><p class='fb-fonte'>Resumo 01 · <i>Valor em Uso para o Ativo</i></p>",
49:"<p>Errado — o valor de cumprimento é mais largo do que isso. O <b>item 6.17</b> diz que esses valores incluem <b>“não somente os valores a serem transferidos à contraparte do passivo, mas também os valores que a entidade espera ser obrigada a transferir a outras partes de modo a permitir que ela cumpra a obrigação”</b>.</p><p>É exatamente o exemplo do resumo: dívida de <b>R$ 10.000</b> com o fornecedor mais <b>R$ 5.000</b> de despesas de entrega dos produtos — valor de cumprimento de <b>R$ 15.000</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Valor de Cumprimento para o Passivo</i></p>",
50:"<p>Errado — trocou entrada por saída. O <b>item 6.21</b> é expresso: <b>“custo corrente, como custo histórico, é o valor de ENTRADA: reflete preços no mercado em que a entidade adquiriria o ativo ou incorreria no passivo. Assim, é diferente do valor justo, valor em uso e valor de cumprimento, que são valores de SAÍDA”</b>.</p><p>A diferença entre os dois valores de entrada vem na frase seguinte: <b>“diferentemente de custo histórico, custo corrente reflete condições na data de mensuração”</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Custo Corrente como Valor de Entrada</i></p>",
51:"<p>Certo pela letra do <b>item 6.87</b>: <b>“o valor contábil total do patrimônio líquido não é mensurado diretamente. Equivale ao total dos valores contábeis de todos os ativos reconhecidos menos o total dos valores contábeis de todos os passivos reconhecidos”</b>.</p><p>O exemplo do resumo, com estes números: caixa <b>10.000</b> + contas a receber <b>5.000</b> + estoques <b>15.000</b> = ativos de <b>R$ 30.000</b>; fornecedores <b>8.000</b> + empréstimos bancários <b>12.000</b> = passivos de <b>R$ 20.000</b>. <b>PL = R$ 10.000</b>.</p><p class='fb-fonte'>Resumo 01 · <i>Mensuração do Patrimônio Líquido</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"01", nome:"CPC 00 — Estrutura Conceitual para Relatório Financeiro", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
