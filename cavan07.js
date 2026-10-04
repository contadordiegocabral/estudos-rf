/* Contabilidade Avançada — Módulo 07: CPC 15 — Combinação de Negócios (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cavan07 = (function(){
"use strict";

var CARDS = [
  ["O que é uma combinação de negócios?","Operação por meio da qual um <b>adquirente obtém o CONTROLE</b> de um ou mais negócios, <b>independentemente da forma jurídica</b> da operação. O termo abrange também as <b>fusões entre partes independentes</b>."],
  ["Exemplo de combinação de negócios do resumo","Uma empresa (<b>adquirente</b>) adquire a <b>maior parte das ações com direito a voto</b> de outra (<b>adquirida</b>), tornando-se <b>controladora</b>. Há combinação <b>mesmo</b> tendo sido por compra de ações."],
  ["Combinação de negócios × negócio em conjunto","<b>Combinação:</b> uma entidade adquire o <b>controle</b> de outra, ou duas se unem formando entidade nova → <b>consolidação</b> dos resultados. <b>Negócio em conjunto</b> (CPC 19, item 06): operação em conjunto ou <b>joint venture</b> — o controle é <b>em conjunto</b>, sem controle majoritário; as entidades <b>mantêm a independência</b> contábil e financeira e apenas <b>divulgam</b> a participação."],
  ["Qual o objetivo do CPC 15 (item 01)?","Aprimorar a <b>relevância</b>, a <b>confiabilidade</b> e a <b>comparabilidade</b> das informações sobre combinação de negócios e seus efeitos."],
  ["Os três pontos que o CPC 15 disciplina no objetivo","(a) reconhecer e mensurar os <b>ativos identificáveis adquiridos</b>, os <b>passivos assumidos</b> e as <b>participações de não controladores</b>; (b) reconhecer e mensurar o <b>goodwill</b> ou o <b>ganho proveniente de compra vantajosa</b>; (c) determinar as <b>informações a divulgar</b>."],
  ["A quem o CPC 15 NÃO se aplica (item 02)?","(a) à contabilização da <b>formação de negócios em conjunto</b>; (b) à <b>aquisição de ativo ou grupo de ativos que não constitua negócio</b>; (c) à combinação de entidades ou negócios <b>sob controle comum</b>."],
  ["O que é aquisição de ativo que não constitua negócio?","Compra que <b>não envolve a empresa como um todo</b> (negócios em andamento, funcionários, contratos). Compram-se <b>imóveis, equipamentos, patentes, marcas</b> — ex.: <b>apenas algumas máquinas ou propriedades</b> de outra empresa."],
  ["Como se contabiliza essa aquisição, e ela gera goodwill?","Reconhecem-se os <b>ativos identificáveis individualmente</b> (inclusive intangíveis) e os <b>passivos assumidos</b> pelos <b>valores justos na data da compra</b>. Operações desse tipo <b>NÃO geram goodwill</b>."],
  ["Exemplo da Cia. Gama e da Linhas Aéreas Épsilon S.A.","Os <b>direitos de operação em aeroportos</b> das regiões <b>Sudeste e Centro-Oeste</b> devem ser reconhecidos como <b>ativo intangível</b>, mensurado pelo <b>valor justo na data de aquisição</b>."],
  ["Item 03 — e se os ativos adquiridos não constituírem um negócio?","A entidade deve contabilizar a operação ou o evento como <b>aquisição de ativos</b>, e não como combinação de negócios."],
  ["Como se contabiliza cada combinação de negócios (item 04)?","Pela aplicação do <b>MÉTODO DE AQUISIÇÃO</b>."],
  ["As quatro exigências do método de aquisição (item 05)","(a) <b>identificação do adquirente</b>; (b) <b>determinação da data de aquisição</b>; (c) <b>reconhecimento e mensuração</b> dos ativos identificáveis adquiridos, dos passivos assumidos e das participações de não controladores; (d) <b>reconhecimento e mensuração do goodwill</b> ou do <b>ganho por compra vantajosa</b>."],
  ["Qual é a data de aquisição (item 08)?","A data em que o <b>CONTROLE da adquirida é OBTIDO</b>."],

  ["Item 10 — o que se reconhece a partir da data de aquisição?","<b>Separadamente do goodwill</b>: os <b>ativos identificáveis adquiridos</b>, os <b>passivos assumidos</b> e <b>quaisquer participações de não controladores</b> na adquirida."],
  ["O que é goodwill?","O <b>valor excedente pago</b> pela aquisição de uma empresa, ou pela participação em uma empresa. Paga-se mais do que ela vale no mercado porque se <b>espera valorização futura</b>."],
  ["A fórmula do goodwill","<b>Goodwill = Valor Pago − Valor Justo</b> (em regra, o <b>valor de mercado</b>)."],
  ["Exemplo do goodwill no resumo","Cia “A” adquire <b>100%</b> da Cia “B” por <b>R$ 1.000.000</b>; o valor justo do PL da Cia “B” é <b>R$ 800.000</b> → <b>goodwill de R$ 200.000</b>."],
  ["O goodwill é amortizado?","<b>NÃO sofre amortização</b>, mas está sujeito ao <b>Teste de Recuperabilidade ANUAL</b>."],
  ["Condições de reconhecimento (item 11)","Os ativos identificáveis adquiridos e os passivos assumidos devem atender, <b>na data da aquisição</b>, às <b>definições de ativo e de passivo do CPC 00</b> — Estrutura Conceitual."],
  ["Custos futuros para encerrar atividade ou desligar empregados da adquirida","<b>NÃO constituem passivo</b> na data da aquisição. O adquirente <b>não</b> deve reconhecê-los como parte da aplicação do método de aquisição — não atendem à definição de passivo do CPC 00."],
  ["Mensuração (item 18) — por quanto entram ativos e passivos?","Pelos respectivos <b>VALORES JUSTOS da data da aquisição</b>."],
  ["Item 19 — os dois critérios para a participação de não controladores","Para os componentes que representem <b>instrumentos patrimoniais</b> com participação proporcional nos ativos líquidos em caso de liquidação: (a) <b>valor justo</b>; ou (b) <b>participação proporcional atual</b> nos montantes reconhecidos dos <b>ativos líquidos identificáveis</b>. Todos os <b>demais</b> componentes: <b>valor justo</b>."],
  ["Plano de pagamento baseado em ações da adquirida (item 30)","Mensura-se o passivo ou o instrumento patrimonial pelo método do <b>CPC 10 — Pagamento Baseado em Ações</b>, na <b>data da aquisição</b>. O resultado é a <b>“mensuração baseada no mercado”</b>."],
  ["Combinação de negócios realizada em estágios (item 42)","O adquirente deve <b>mensurar novamente</b> sua <b>participação anterior</b> na adquirida pelo <b>valor justo na data da aquisição</b> e reconhecer no <b>resultado do período</b> o <b>ganho ou a perda</b> resultante (ou em outros resultados abrangentes, conforme apropriado)."],
  ["O que é aquisição passo a passo (step acquisition)?","O adquirente obtém <b>posteriormente</b> o controle de uma adquirida na qual <b>já mantinha participação de capital</b>."],
  ["Exemplo dos estágios, com os números do resumo","Em 31/12/2023 a empresa “A” tinha <b>40%</b> de “B”, cujo PL era <b>R$ 100.000</b> → participação de <b>R$ 40.000</b>. Em janeiro/2024 comprou os <b>60% remanescentes por R$ 80.000</b> e obteve o controle → <b>ganho de R$ 20.000</b> (80.000 − 60.000) no <b>resultado</b>."],
  ["Custos relacionados à aquisição (item 53) — regra e exceção","<b>Regra:</b> honorários de advogados, contadores, peritos, avaliadores, custos administrativos gerais (inclusive departamento de aquisições) e custos de registro e emissão de títulos → <b>DESPESA</b> no período em que incorridos e os serviços recebidos. <b>Exceção:</b> custos de <b>emissão de títulos de dívida e de títulos patrimoniais</b> → <b>CPC 08</b>, <b>CPC 48</b> e <b>CPC 39</b>."],

  ["O que é aquisição reversa (B19)?","Ocorre quando a entidade que <b>emite os títulos</b> (<b>adquirente legal</b>) é identificada como a <b>ADQUIRIDA para fins contábeis</b>. A entidade cuja participação societária foi adquirida (<b>adquirida legal</b>) é considerada, para fins contábeis, a <b>ADQUIRENTE</b>."],
  ["Exemplo de aquisição reversa do resumo","Entidade <b>fechada</b> quer se tornar listada <b>sem abrir capital</b>: passa a ser investida da <b>companhia aberta</b> e seus ex-sócios recebem participações no capital desta. A <b>companhia aberta</b> é <b>adquirente legal</b> (emitiu as ações) e <b>adquirida contábil</b>; a <b>entidade fechada</b> é <b>adquirida legal</b> e <b>adquirente contábil</b>."],
  ["B20 — quem emite as ações na aquisição reversa?","O <b>adquirente contábil normalmente NÃO transfere</b> ações nem outra contraprestação. É a <b>ADQUIRIDA CONTÁBIL</b> que <b>emite</b> os instrumentos de participação societária e os <b>entrega aos proprietários do adquirente contábil</b>."],
  ["B37 — intangível adquirido que não seja identificável","Deve ser <b>incorporado ao ágio por expectativa de rentabilidade futura (goodwill)</b>."],
  ["Força de trabalho organizada — o que é e como se trata","Conjunto de empregados que permite ao adquirente <b>continuar a operar o negócio</b> a partir da data da aquisição. <b>Não é ativo identificável</b>, logo não é reconhecida separadamente: qualquer valor que lhe seja atribuído <b>integra o goodwill</b>."],
  ["Exemplo da fusão das Cias X e Y na Cia Z (força de trabalho)","Empregados da Cia X valem <b>R$ 80.000</b> e os da Cia Y, <b>R$ 60.000</b>. <b>ANTES</b> da fusão não são ativo no BP de X e Y, pois a entidade <b>não tem controle</b> sobre eles. <b>APÓS</b> a fusão, esse valor <b>integra o goodwill</b> no BP da <b>Cia Z</b>."],
  ["Incorporação (art. 227 da Lei 6.404/76)","Operação pela qual <b>uma ou mais sociedades são absorvidas por outra</b>, que lhes <b>sucede em todos os direitos e obrigações</b>. Ex.: “A” incorpora “B” → resulta uma <b>“A” maior</b>."],
  ["Fusão (art. 228 da Lei 6.404/76)","Operação pela qual se <b>unem duas ou mais sociedades para formar sociedade NOVA</b>, que lhes sucederá em todos os direitos e obrigações. Ex.: “A” se une a “B” → resulta a <b>“C”</b>."],
  ["Cisão (art. 229 da Lei 6.404/76)","A companhia <b>transfere parcelas do seu patrimônio</b> para uma ou mais sociedades, constituídas para esse fim ou <b>já existentes</b>: <b>extingue-se</b> a cindida se houver <b>versão de todo o patrimônio</b>, ou <b>divide-se o capital</b> se a versão for <b>parcial</b>. Ex.: “A” menor e “B” maior."],
  ["Transformação (art. 220 da Lei 6.404/76)","Operação pela qual a sociedade passa, <b>independentemente de dissolução e liquidação</b>, de <b>um tipo para outro</b>. Ex.: <b>Ltda que se transforma em S.A.</b>"],
  ["Na incorporação e na cisão total, o que acontece com a empresa de origem?","<b>Incorporação:</b> a <b>incorporada é extinta</b> e deve <b>baixar contabilmente todos os ativos e passivos exigíveis</b>, transferindo-os para a incorporadora. <b>Cisão total:</b> a <b>cindida é extinta</b> e faz o mesmo em favor de quem recebeu o patrimônio."],
  ["Questão-exemplo: fusão das Cias X e Y na Cia Z — de quanto é o PL da Cia Z?","<b>R$ 320.000</b>: <b>Capital Social R$ 300.000</b> (140.000 + 160.000) + <b>Ajuste de Avaliação Patrimonial R$ 20.000</b> (terreno de 60.000 com valor de mercado de 80.000 — art. 182, § 3º, da Lei 6.404/76)."],
  ["Nessa questão-exemplo, quanto da Cia Z pertence ao sócio da Cia X?","O percentual correspondente ao seu PL: <b>140.000 / 320.000 = 43,75%</b>."],
  ["O que é incorporação reversa?","Ocorre quando a <b>CONTROLADA incorpora a CONTROLADORA</b>. Na maioria das vezes, para permitir a <b>compensação de prejuízos fiscais</b>. Nela <b>não há alteração de controle</b>. Ex.: “A” é controladora integral de “B” e a <b>“B” incorpora a “A”</b>."]
];

var QS = [
  ["Combinação de negócios é a operação por meio da qual um adquirente obtém o controle de um ou mais negócios, independentemente da forma jurídica da operação.","C","CEBRASPE","Definição do resumo."],
  ["Para o CPC 15, o termo combinação de negócios não abrange as fusões que se dão entre partes independentes.","E","FCC","O termo <b>abrange também</b> essas fusões."],
  ["A aquisição da maior parte das ações com direito a voto de outra empresa, tornando-se sua controladora, não configura combinação de negócios, porque a operação se deu por compra de ações.","E","FGV","A forma jurídica é <b>irrelevante</b>: houve obtenção de controle."],
  ["Nos termos do CPC 19, item 06, negócio em conjunto é uma operação em conjunto ou um empreendimento controlado em conjunto, de modo que o controle é em conjunto e não existe controle majoritário.","C","CPC 19, item 06","Quadro NÃO CONFUNDA do resumo."],
  ["No negócio em conjunto as entidades perdem a independência contábil e financeira e consolidam seus resultados.","E","VUNESP","Elas <b>mantêm</b> a independência e apenas <b>divulgam</b> a participação."],
  ["O objetivo do CPC 15 é aprimorar a relevância, a confiabilidade e a comparabilidade das informações que a entidade fornece acerca de combinação de negócios e de seus efeitos.","C","CPC 15, item 01","Literalidade do item 01."],
  ["Segundo o objetivo do CPC 15, o adquirente reconhece e mensura o ágio por expectativa de rentabilidade futura (goodwill) advindo da combinação ou o ganho proveniente de compra vantajosa.","C","CEBRASPE","Alínea (b) do item 01."],
  ["O CPC 15 aplica-se à contabilização da formação de negócios em conjunto nas demonstrações contábeis.","E","FCC","Item 02, (a): é justamente hipótese em que <b>não</b> se aplica."],
  ["O CPC 15 aplica-se à combinação de entidades ou negócios sob controle comum.","E","CPC 15, item 02","Item 02, (c): <b>não</b> se aplica."],
  ["Na aquisição de ativo ou grupo de ativos que não constitua negócio, o adquirente deve identificar e reconhecer os ativos identificáveis adquiridos individualmente e os passivos assumidos com base em seus respectivos valores justos na data da compra.","C","FGV","Quadro ATENÇÃO do resumo."],
  ["A aquisição de ativo ou grupo de ativos que não constitua negócio gera ágio por expectativa de rentabilidade futura (goodwill).","E","VUNESP","Operações desse tipo <b>não geram</b> goodwill."],
  ["Ao contabilizar a aquisição do controle da Linhas Aéreas Épsilon S.A., a Cia. Gama deve reconhecer os direitos de operação em aeroportos pelo valor contábil registrado na adquirida.","E","CEBRASPE","Reconhece como <b>intangível pelo valor justo</b> na data de aquisição."],
  ["Se os ativos adquiridos não constituem um negócio, a entidade deve contabilizar a operação ou o evento como combinação de negócios.","E","CPC 15, item 03","Deve contabilizar como <b>aquisição de ativos</b>."],
  ["A entidade deve contabilizar cada combinação de negócios pela aplicação do método de aquisição.","C","CPC 15, item 04","Literalidade do item 04."],
  ["A aplicação do método de aquisição exige a identificação do adquirente, a determinação da data de aquisição, o reconhecimento e a mensuração dos ativos identificáveis adquiridos, dos passivos assumidos e das participações de não controladores, e o reconhecimento e a mensuração do goodwill ou do ganho proveniente de compra vantajosa.","C","FCC","As quatro alíneas do item 05."],
  ["A data de aquisição é a data em que o contrato de compra e venda é assinado pelas partes.","E","FGV","É a data em que o <b>controle da adquirida é obtido</b>."],
  ["A data de aquisição corresponde à data em que o controle da adquirida é obtido.","C","CPC 15, item 08","Esquema do resumo."],

  ["A partir da data de aquisição, o adquirente deve reconhecer, separadamente do goodwill, os ativos identificáveis adquiridos, os passivos assumidos e quaisquer participações de não controladores na adquirida.","C","CPC 15, item 10","Literalidade do item 10."],
  ["O goodwill é o valor excedente pago pela aquisição de uma empresa, ou pela participação em uma empresa.","C","VUNESP","Conceito do resumo."],
  ["O goodwill é apurado pela diferença entre o valor justo, em regra o valor de mercado, e o valor pago.","E","CEBRASPE","Inverteu a ordem: <b>Goodwill = Valor Pago − Valor Justo</b>."],
  ["A Cia “A” adquiriu 100% de participação na Cia “B” por R$ 1.000.000, sendo o valor justo do patrimônio líquido da Cia “B” de R$ 800.000; nesse caso, o goodwill é de R$ 200.000.","C","FCC","1.000.000 − 800.000."],
  ["O goodwill sofre amortização periódica e não se submete ao teste de recuperabilidade.","E","FGV","Quadro ATENÇÃO: <b>não</b> amortiza e <b>está</b> sujeito ao teste anual."],
  ["O ganho proveniente de compra vantajosa surge quando o valor pago pela adquirida é inferior ao valor justo dos ativos líquidos identificáveis adquiridos.","C","CPC 15","Contrapartida do goodwill."],
  ["Para se qualificarem para reconhecimento, os ativos identificáveis adquiridos e os passivos assumidos devem atender, na data da aquisição, às definições de ativo e de passivo dispostas no CPC 26.","E","CPC 15, item 11","As definições são as do <b>CPC 00</b> — Estrutura Conceitual."],
  ["Os custos que o adquirente espera incorrer no futuro para efetivar um plano de encerramento de atividade da adquirida constituem passivo na data da aquisição e devem ser reconhecidos como parte da aplicação do método de aquisição.","E","CEBRASPE","<b>Não</b> constituem passivo e <b>não</b> são reconhecidos."],
  ["O adquirente deve mensurar os ativos identificáveis adquiridos e os passivos assumidos pelos respectivos valores justos da data da aquisição.","C","CPC 15, item 18","Literalidade do item 18."],
  ["Os componentes da participação de não controladores que representem instrumentos patrimoniais e confiram participação proporcional nos ativos líquidos da adquirida em caso de liquidação podem ser mensurados pelo valor justo ou pela participação proporcional atual nos montantes reconhecidos dos ativos líquidos identificáveis da adquirida.","C","FCC","As alíneas (a) e (b) do item 19."],
  ["Todos os demais componentes da participação de não controladores devem ser mensurados pelo valor contábil na data da aquisição.","E","FGV","Devem ser mensurados ao <b>valor justo</b>."],
  ["O passivo ou o instrumento patrimonial relacionado a plano de benefício com pagamento baseado em ações da adquirida deve ser mensurado de acordo com o método do CPC 10, na data da aquisição.","C","CPC 15, item 30","Literalidade do item 30."],
  ["O resultado da aplicação desse método ao plano de benefício baseado em ações é referido pelo CPC 15 como “mensuração baseada no custo histórico”.","E","VUNESP","É a <b>mensuração baseada no mercado</b>."],
  ["Em combinação de negócios realizada em estágios, o adquirente deve manter sua participação anterior na adquirida pelo valor contábil na data da aquisição.","E","CEBRASPE","Deve <b>mensurar novamente pelo valor justo</b>."],
  ["Combinação de negócios realizada em estágios é a aquisição passo a passo, em que o adquirente obtém posteriormente o controle de adquirida na qual já mantinha participação de capital.","C","FCC","Step acquisition."],
  ["A empresa “A” tinha 40% das ações da empresa “B”, cujo patrimônio líquido era de R$ 100.000, e comprou os 60% remanescentes por R$ 80.000, obtendo o controle; o ganho a reconhecer no resultado do período é de R$ 20.000.","C","FGV","80.000 − 60.000."],
  ["Honorários de advogados, contadores, peritos e avaliadores incorridos para efetivar a combinação de negócios devem ser contabilizados como despesa no período em que forem incorridos e os serviços forem recebidos.","C","CPC 15, item 53","Regra do item 53."],
  ["Os custos diretamente relacionados à aquisição integram o custo da combinação de negócios, sem qualquer exceção.","E","VUNESP","São <b>despesa</b>, e há <b>uma</b> exceção — a emissão de títulos."],
  ["Os custos decorrentes da emissão de títulos de dívida e de títulos patrimoniais são a exceção da regra e devem ser reconhecidos de acordo com o CPC 08, o CPC 48 e o CPC 39.","C","CEBRASPE","Os três pronunciamentos listados no item 53."],

  ["A aquisição reversa ocorre quando a entidade que emite os títulos, adquirente legal, é identificada como a adquirida para fins contábeis.","C","CPC 15, item B19","Literalidade do item B19."],
  ["Na aquisição reversa, a entidade cuja participação societária tiver sido adquirida, adquirida legal, deve ser considerada, para fins contábeis, também como adquirida.","E","FCC","Ela é a <b>adquirente contábil</b>."],
  ["Em uma aquisição reversa, é o adquirente contábil que emite os instrumentos de participação societária e os entrega aos proprietários da adquirida contábil.","E","FGV","Item B20: quem emite é a <b>adquirida contábil</b>, entregando aos proprietários do <b>adquirente contábil</b>."],
  ["O adquirente deve incorporar ao goodwill o valor de um ativo intangível adquirido que não seja identificável na data da aquisição.","C","CPC 15, item B37","Literalidade do item B37."],
  ["A força de trabalho organizada constitui ativo identificável e deve ser reconhecida separadamente do goodwill.","E","VUNESP","<b>Não</b> é ativo identificável: o valor atribuído <b>integra</b> o goodwill."],
  ["Após a fusão que constituiu a Cia Z, o valor atribuído à força de trabalho organizada — R$ 80.000 dos empregados da Cia X e R$ 60.000 dos da Cia Y — deve integrar o goodwill no balanço patrimonial da Cia Z.","C","CEBRASPE","Exemplo do resumo."],
  ["A incorporação é a operação pela qual se unem duas ou mais sociedades para formar sociedade nova, que lhes sucederá em todos os direitos e obrigações.","E","Lei 6.404, art. 227","Essa é a <b>fusão</b> (art. 228)."],
  ["A fusão é a operação pela qual se unem duas ou mais sociedades para formar sociedade nova, que lhes sucederá em todos os direitos e obrigações.","C","Lei 6.404, art. 228","Literalidade do art. 228."],
  ["Na cisão parcial, a companhia cindida é extinta.","E","FCC","A cindida só se extingue na <b>cisão total</b>; na parcial <b>divide-se o capital</b>."],
  ["A transformação é a operação pela qual a sociedade passa, independentemente de dissolução e liquidação, de um tipo para outro.","C","Lei 6.404, art. 220","Literalidade do art. 220."],
  ["Na incorporação, a empresa incorporada é extinta e deve baixar contabilmente todos os ativos e passivos exigíveis, transferindo-os para a empresa incorporadora.","C","FGV","Quadro ATENÇÃO do resumo."],
  ["Na fusão das Cias X e Y, com terreno contabilizado por R$ 60.000 e valor de mercado de R$ 80.000 na data da operação, o patrimônio líquido da Cia Z é de R$ 300.000.","E","VUNESP","É de <b>R$ 320.000</b> — faltou o ajuste de avaliação patrimonial."],
  ["No mesmo caso, o patrimônio líquido da Cia Z contém ajuste de avaliação patrimonial de R$ 20.000.","C","Lei 6.404, art. 182, § 3º","80.000 − 60.000."],
  ["No mesmo caso, o sócio da Cia X passa a deter 46,67% da Cia Z.","E","CEBRASPE","<b>43,75%</b> — 140.000 / 320.000."],
  ["A incorporação reversa ocorre quando a controladora incorpora a controlada.","E","FCC","É a <b>controlada</b> que incorpora a <b>controladora</b>."],
  ["Na incorporação reversa não há alteração de controle.","C","FGV","O resumo ressalta isso expressamente."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("O que é combinação de negócios, alcance e método de aquisição",
      '<div class="box"><span class="bl">A definição do CPC 15</span>'+
      '<p><b>Combinação de negócios</b> é a operação por meio da qual um <b>adquirente obtém o CONTROLE</b> de um ou mais negócios, <b>independentemente da forma jurídica</b> da operação. O termo <b>abrange também as fusões entre partes independentes</b>.</p>'+
      '<p><b>Exemplo do resumo:</b> uma empresa adquire a <b>maior parte das ações com direito a voto</b> de outra e se torna <b>controladora</b>. Há combinação de negócios <b>mesmo</b> tendo a operação ocorrido por compra de ações — o que importa é o <b>controle</b>.</p></div>'+
      '<div class="box trap"><span class="bl">NÃO CONFUNDA — combinação × negócio em conjunto</span>'+
      '<p><b>Combinação de negócios:</b> uma entidade adquire o <b>controle</b> sobre outra, ou duas ou mais se unem formando <b>entidade nova</b> → há <b>consolidação dos resultados financeiros</b> das empresas envolvidas.</p>'+
      '<p><b>Negócio em conjunto</b> (CPC 19, item 06): operação em conjunto ou <b>empreendimento controlado em conjunto (joint venture)</b>. O <b>controle é em conjunto</b>, <b>não existe controle majoritário</b>; cada entidade <b>compartilha riscos e benefícios</b>, <b>mantém sua independência contábil e financeira</b> e apenas <b>divulga informações</b> relativas à participação.</p></div>'+
      '<div class="box"><span class="bl">Objetivo do CPC 15 (item 01)</span>'+
      '<p>Aprimorar a <b>relevância</b>, a <b>confiabilidade</b> e a <b>comparabilidade</b> das informações. Para isso, estabelece como o adquirente:</p>'+
      '<ul><li><b>(a)</b> reconhece e mensura os <b>ativos identificáveis adquiridos</b>, os <b>passivos assumidos</b> e as <b>participações societárias de não controladores</b>;</li>'+
      '<li><b>(b)</b> reconhece e mensura o <b>ágio por expectativa de rentabilidade futura (goodwill)</b> ou o <b>ganho proveniente de compra vantajosa</b>;</li>'+
      '<li><b>(c)</b> determina as <b>informações a divulgar</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Alcance — o CPC 15 NÃO se aplica (item 02)</span>'+
      '<p><b>(a)</b> à contabilização da <b>formação de negócios em conjunto</b>; <b>(b)</b> à <b>aquisição de ativo ou grupo de ativos que não constitua negócio</b>; <b>(c)</b> à combinação de entidades ou negócios <b>sob controle comum</b>.</p>'+
      '<p><b>ATENÇÃO!</b> Na aquisição de ativos que não constitua negócio, reconhecem-se os <b>ativos identificáveis individualmente</b> (inclusive intangíveis) e os <b>passivos assumidos</b> pelos <b>valores justos na data da compra</b>. Operações desse tipo <b>NÃO geram goodwill</b>.</p>'+
      '<p><b>Exemplo:</b> a <b>Cia. Gama</b> adquiriu o controle da <b>Linhas Aéreas Épsilon S.A.</b>, titular de <b>direitos de operação em aeroportos</b> das regiões <b>Sudeste e Centro-Oeste</b>: esses direitos vão para o <b>ativo intangível</b>, pelo <b>valor justo na data de aquisição</b>.</p>'+
      '<p>E pelo <b>item 03</b>: se os ativos adquiridos <b>não constituem um negócio</b>, contabiliza-se a operação como <b>aquisição de ativos</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Método de aquisição e data de aquisição</span>'+
      '<p><b>Item 04:</b> cada combinação de negócios é contabilizada pelo <b>método de aquisição</b>. <b>Item 05</b> — ele exige:</p>'+
      '<div class="chips"><span class="chip">identificar o adquirente</span><span class="chip">determinar a data de aquisição</span><span class="chip">reconhecer e mensurar ativos, passivos e não controladores</span><span class="chip">reconhecer e mensurar goodwill ou ganho por compra vantajosa</span></div>'+
      '<p><b>Item 08:</b> a <b>data de aquisição</b> é a data em que o <b>CONTROLE da adquirida é OBTIDO</b> — não a da assinatura do contrato, não a do pagamento.</p></div>')
  ],
  V2:[
    sl("Reconhecimento, goodwill, mensuração, estágios e custos",
      '<div class="box"><span class="bl">Reconhecimento (item 10)</span>'+
      '<p>A partir da <b>data de aquisição</b>, o adquirente reconhece — <b>separadamente do goodwill</b> — os <b>ativos identificáveis adquiridos</b>, os <b>passivos assumidos</b> e <b>quaisquer participações de não controladores</b> na adquirida.</p></div>'+
      '<div class="box tip"><span class="bl">O que é goodwill</span>'+
      '<p><b>Valor excedente pago</b> pela aquisição de uma empresa, ou pela participação nela: paga-se mais do que ela vale no mercado porque se <b>espera valorização futura</b>.</p>'+
      '<p class="mn"><em>Goodwill = Valor Pago − Valor Justo</em> (em regra, valor de mercado)</p>'+
      '<p><b>Exemplo:</b> a Cia “A” adquire <b>100%</b> da Cia “B” por <b>R$ 1.000.000</b>; o valor justo do PL da Cia “B” é <b>R$ 800.000</b> → <b>goodwill de R$ 200.000</b>.</p>'+
      '<p><b>ATENÇÃO!</b> O goodwill <b>NÃO sofre amortização</b>, mas está sujeito ao <b>Teste de Recuperabilidade ANUAL</b>.</p></div>'+
      '<div class="box"><span class="bl">Condições de reconhecimento (item 11)</span>'+
      '<p>Os ativos identificáveis adquiridos e os passivos assumidos devem atender, <b>na data da aquisição</b>, às <b>definições de ativo e de passivo do CPC 00</b> — Estrutura Conceitual.</p>'+
      '<p><b>Exemplo do resumo:</b> os custos que o adquirente <b>espera incorrer no futuro</b> para encerrar uma atividade da adquirida, ou para <b>realocar ou desligar empregados</b> dela, <b>não constituem passivo</b> na data da aquisição — logo <b>não</b> entram na aplicação do método de aquisição.</p></div>'+
      '<div class="box"><span class="bl">Mensuração (itens 18 e 19)</span>'+
      '<p><b>Item 18:</b> ativos identificáveis adquiridos e passivos assumidos pelos respectivos <b>VALORES JUSTOS da data da aquisição</b>.</p>'+
      '<p><b>Item 19:</b> os componentes da participação de <b>não controladores</b> que representem <b>instrumentos patrimoniais</b> com participação proporcional nos ativos líquidos em caso de liquidação vão por <b>(a) valor justo</b> <b>ou</b> <b>(b) participação proporcional atual</b> nos montantes reconhecidos dos <b>ativos líquidos identificáveis</b>. <b>Todos os demais</b> componentes: <b>valor justo</b>.</p>'+
      '<p><b>Exemplo:</b> a empresa A adquire <b>80%</b> das ações da B; os <b>20%</b> restantes são dos <b>minoritários</b>, e é essa participação que se mensura por um dos dois critérios.</p></div>'+
      '<div class="box"><span class="bl">Pagamento baseado em ações (item 30)</span>'+
      '<p>Passivo ou instrumento patrimonial ligado a <b>plano de benefício com pagamento baseado em ações</b> da adquirida (ou à sua substituição por plano do adquirente) é mensurado pelo método do <b>CPC 10</b>, na <b>data da aquisição</b>. O resultado é a <b>“mensuração baseada no mercado”</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Estágios (item 42) e custos da aquisição (item 53)</span>'+
      '<p><b>Estágios (step acquisition):</b> o adquirente obtém <b>depois</b> o controle de adquirida em que <b>já tinha participação</b>. Deve <b>mensurar novamente a participação anterior pelo valor justo</b> na data da aquisição e levar o <b>ganho ou perda ao RESULTADO</b> do período (ou a outros resultados abrangentes, conforme apropriado).</p>'+
      '<p><b>Exemplo:</b> em 31/12/2023 a “A” tinha <b>40%</b> da “B”, de PL <b>R$ 100.000</b> → <b>R$ 40.000</b> dela e <b>R$ 60.000</b> dos demais. Em janeiro/2024 comprou os <b>60% por R$ 80.000</b> → <b>ganho de R$ 20.000</b> (80.000 − 60.000) na <b>DRE</b>.</p>'+
      '<p><b>Custos da aquisição:</b> honorários de advogados, contadores, peritos e avaliadores, custos administrativos gerais (inclusive do departamento de aquisições) e custos de registro e emissão de títulos → <b>DESPESA</b> no período em que incorridos e os serviços recebidos. <b>Uma única exceção:</b> os custos de <b>emissão de títulos de dívida e de títulos patrimoniais</b> seguem o <b>CPC 08</b>, o <b>CPC 48</b> e o <b>CPC 39</b>.</p></div>')
  ],
  V3:[
    sl("Aquisição reversa, força de trabalho e reorganização societária",
      '<div class="box"><span class="bl">Aquisição reversa (B19 e B20)</span>'+
      '<p>Ocorre quando a entidade que <b>emite os títulos</b> — o <b>adquirente legal</b> — é identificada como a <b>ADQUIRIDA para fins contábeis</b>. E a entidade cuja <b>participação societária foi adquirida</b> — a <b>adquirida legal</b> — é considerada, para fins contábeis, a <b>ADQUIRENTE</b>.</p>'+
      '<p><b>Exemplo:</b> uma <b>entidade fechada</b> quer se tornar listada <b>sem abrir capital</b>. Ela passa a ser <b>investida da companhia aberta</b> e seus ex-sócios recebem participações no capital desta.</p>'+
      '<div class="tree"><div class="leaf"><b>Companhia aberta</b> → <b>adquirente legal</b> (emitiu as ações) e <b>adquirida contábil</b></div>'+
      '<div class="leaf"><b>Entidade fechada</b> → <b>adquirida legal</b> (seus instrumentos foram adquiridos) e <b>adquirente contábil</b></div></div>'+
      '<p><b>B20:</b> o <b>adquirente contábil normalmente NÃO transfere</b> ações nem outra contraprestação — é a <b>adquirida contábil</b> que <b>emite</b> os instrumentos e os <b>entrega aos proprietários do adquirente contábil</b>.</p></div>'+
      '<div class="box"><span class="bl">Força de trabalho e itens não identificáveis (B37)</span>'+
      '<p>O valor de <b>ativo intangível adquirido que não seja identificável</b> na data da aquisição deve ser <b>incorporado ao goodwill</b>.</p>'+
      '<p A <b>força de trabalho organizada</b> — o conjunto de empregados que permite <b>continuar a operar o negócio</b> — <b>não é ativo identificável</b>, então <b>não</b> se reconhece separadamente: qualquer valor atribuído a ela <b>integra o goodwill</b>.</p>'+
      '<p><b>Exemplo:</b> em dezembro de 2023 os sócios das <b>Cias X e Y</b> fazem uma <b>fusão</b>, constituindo a <b>Cia Z</b>. O estudo apontou os empregados da <b>X em R$ 80.000</b> e os da <b>Y em R$ 60.000</b>. <b>ANTES</b> da fusão eles <b>não são ativo</b> no BP de X e Y, porque a entidade <b>não tem controle</b> sobre eles. <b>APÓS</b> a fusão, esse valor <b>integra o goodwill</b> no BP da Cia Z.</p></div>'+
      '<div class="box"><span class="bl">Reorganização societária — as quatro operações</span>'+
      '<p>Conjunto de transações para <b>reestruturar a estrutura societária</b>. Pode ocorrer entre empresas do mesmo grupo (<b>interna</b>) ou entre independentes (<b>externa</b>).</p>'+
      '<ul><li><b>Incorporação (art. 227):</b> uma ou mais sociedades <b>são absorvidas por outra</b>, que lhes <b>sucede em todos os direitos e obrigações</b>. “A” incorpora “B” → <b>“A” maior</b>.</li>'+
      '<li><b>Fusão (art. 228):</b> <b>unem-se</b> duas ou mais sociedades para formar <b>sociedade NOVA</b>, que lhes sucederá em todos os direitos e obrigações. “A” + “B” → <b>“C”</b>.</li>'+
      '<li><b>Cisão (art. 229), parcial ou total:</b> a companhia <b>transfere parcelas do patrimônio</b> a uma ou mais sociedades, constituídas para esse fim ou <b>já existentes</b>; <b>extingue-se</b> a cindida se houver <b>versão de todo</b> o patrimônio, ou <b>divide-se o capital</b> se <b>parcial</b>. “A” menor e “B” maior.</li>'+
      '<li><b>Transformação (art. 220):</b> a sociedade passa, <b>independentemente de dissolução e liquidação</b>, de <b>um tipo para outro</b>. <b>Ltda → S.A.</b></li></ul></div>'+
      '<div class="box trap"><span class="bl">ATENÇÃO! Extinção — e a incorporação reversa</span>'+
      '<p>Na <b>incorporação</b>, a <b>incorporada é extinta</b>: deve <b>baixar contabilmente todos os ativos e passivos exigíveis</b>, transferindo-os para a <b>incorporadora</b>.</p>'+
      '<p>Na <b>cisão TOTAL</b>, a <b>cindida é extinta</b> e faz a mesma baixa em favor de quem recebeu o patrimônio. Na <b>cisão parcial</b>, <b>não</b> há extinção.</p>'+
      '<p><b>Incorporação reversa:</b> a <b>CONTROLADA incorpora a CONTROLADORA</b>. Na maioria das vezes para permitir a <b>compensação de prejuízos fiscais</b>, e nela <b>NÃO há alteração de controle</b>. Ex.: “A” é controladora integral da “B” e a <b>“B” incorpora a “A”</b>.</p></div>'+
      '<div class="box tip"><span class="bl">A questão-exemplo da fusão (43,75%)</span>'+
      '<p>Cias X e Y, independentes, com <b>Capital Social de R$ 140.000</b> e <b>R$ 160.000</b>. Em janeiro/2024 fazem <b>fusão</b> e constituem a <b>Cia Z</b>. O <b>terreno</b> da Y está no BP por <b>R$ 60.000</b>, mas o valor de mercado é <b>R$ 80.000</b>.</p>'+
      '<p><b>PL da Cia Z = R$ 320.000</b>: <b>Capital Social R$ 300.000</b> (140.000 + 160.000) + <b>Ajuste de Avaliação Patrimonial R$ 20.000</b> (art. 182, § 3º, da Lei 6.404/76).</p>'+
      '<p>O sócio da Cia X fica com o percentual do <b>seu</b> PL: <b>140.000 / 320.000 = 43,75%</b>.</p></div>')
  ]
};

var EX = {
S1:{t:"gap", instr:"Complete a definição do CPC 15",
  before:"Combinação de negócios é uma operação por meio da qual um adquirente obtém o ",
  after:" de um ou mais negócios, independentemente da forma jurídica da operação.",
  options:["controle","controle em conjunto","influência significativa"], answer:0,
  why:"O que define a combinação é a obtenção do controle — a forma jurídica é irrelevante."},

S2:{t:"sort", instr:"Combinação de negócios ou negócio em conjunto?",
  buckets:["Combinação de negócios","Negócio em conjunto"],
  items:[["Uma entidade adquire o controle sobre outra entidade",0],
         ["Duas ou mais entidades se unem para formar uma nova entidade",0],
         ["Consolidação dos resultados financeiros das empresas envolvidas",0],
         ["Operação em conjunto ou joint venture, nos termos do CPC 19, item 06",1],
         ["O controle é em conjunto, sem controle majoritário",1],
         ["As entidades mantêm sua independência contábil e financeira",1]],
  why:"No negócio em conjunto cada entidade apenas divulga informações relativas à sua participação."},

S3:{t:"multi", instr:"Marque as hipóteses em que o CPC 15 NÃO se aplica",
  options:["Contabilização da formação de negócios em conjunto",
           "Aquisição de ativo ou grupo de ativos que não constitua negócio",
           "Combinação de entidades ou negócios sob controle comum",
           "Aquisição do controle de outra empresa pela compra de ações com direito a voto",
           "Fusão que se dá entre partes independentes"],
  answers:[0,1,2],
  why:"As três alíneas do item 02. As duas últimas são, sim, combinações de negócios."},

S4:{t:"mc", instr:"Na aquisição de ativo ou grupo de ativos que não constitua negócio, o adquirente deve:",
  options:["reconhecer os ativos identificáveis individualmente e os passivos assumidos pelos valores justos na data da compra, sem gerar goodwill",
           "reconhecer goodwill pela diferença entre o valor pago e o valor justo",
           "aplicar integralmente o método de aquisição do CPC 15",
           "manter os ativos pelos valores contábeis registrados na vendedora"],
  answer:0,
  why:"Quadro ATENÇÃO: operações desse tipo não geram ágio por expectativa de rentabilidade futura."},

S5:{t:"multi", instr:"Marque as exigências da aplicação do método de aquisição (item 05)",
  options:["Identificação do adquirente",
           "Determinação da data de aquisição",
           "Reconhecimento e mensuração dos ativos identificáveis adquiridos, dos passivos assumidos e das participações de não controladores",
           "Reconhecimento e mensuração do goodwill ou do ganho proveniente de compra vantajosa",
           "Amortização anual do goodwill",
           "Consolidação obrigatória dos negócios em conjunto"],
  answers:[0,1,2,3],
  why:"São as quatro alíneas do item 05 — e o goodwill não é amortizado."},

S6:{t:"gap", instr:"Complete a data de aquisição",
  before:"A data de aquisição corresponde à data em que ",
  after:".",
  options:["o controle da adquirida é obtido","o contrato de compra e venda é assinado","o preço da aquisição é integralmente pago"],
  answer:0,
  why:"Item 08 — e é o esquema do resumo."},

S7:{t:"mc", instr:"O que é goodwill, segundo o resumo?",
  options:["O valor excedente pago pela aquisição de uma empresa, ou pela participação em uma empresa",
           "O valor justo do patrimônio líquido da adquirida",
           "A diferença entre o ativo e o passivo da adquirente",
           "O ganho proveniente de compra vantajosa"],
  answer:0,
  why:"Paga-se mais do que a empresa vale no mercado porque se espera valorização futura."},

S8:{t:"mc", instr:"A Cia “A” adquire 100% da Cia “B” por R$ 1.000.000, e o valor justo do PL da Cia “B” é de R$ 800.000. Qual o goodwill?",
  options:["R$ 200.000","R$ 800.000","R$ 1.000.000","R$ 1.800.000"],
  answer:0,
  why:"Goodwill = Valor Pago − Valor Justo → 1.000.000 − 800.000."},

S9:{t:"gap", instr:"Complete o tratamento do goodwill",
  before:"O goodwill ",
  after:" amortização, mas está sujeito ao teste de recuperabilidade anual.",
  options:["não sofre","sofre"], answer:0,
  why:"Quadro ATENÇÃO do resumo."},

S10:{t:"sort", instr:"Reconhece como passivo na data da aquisição?",
  buckets:["Reconhece","Não reconhece"],
  items:[["Passivo assumido que atende à definição de passivo do CPC 00",0],
         ["Custos que o adquirente espera incorrer no futuro para encerrar uma atividade da adquirida",1],
         ["Custos para realocar empregados da adquirida",1],
         ["Custos para desligar empregados da adquirida",1]],
  why:"Item 11 — só entra o que atende às definições de ativo e de passivo do CPC 00."},

S11:{t:"mc", instr:"Em 31/12/2023 a empresa “A” tinha 40% da “B”, de PL R$ 100.000; em janeiro/2024 comprou os 60% remanescentes por R$ 80.000 e obteve o controle. Qual o ganho e onde é reconhecido?",
  options:["R$ 20.000, no resultado do período",
           "R$ 20.000, em reserva de capital",
           "R$ 40.000, no resultado do período",
           "Nenhum ganho — a participação anterior permanece pelo valor contábil"],
  answer:0,
  why:"Combinação em estágios: nova mensuração pelo valor justo; 80.000 − 60.000 = 20.000 na DRE."},

S12:{t:"match", instr:"Correlacione cada item à sua regra de mensuração",
  pairs:[["Ativos identificáveis adquiridos e passivos assumidos","Valores justos da data da aquisição"],
         ["Plano de benefício com pagamento baseado em ações da adquirida","Método do CPC 10 — mensuração baseada no mercado"],
         ["Participação anterior em combinação realizada em estágios","Nova mensuração pelo valor justo, com ganho ou perda no resultado"],
         ["Custos de emissão de títulos de dívida e de títulos patrimoniais","CPC 08, CPC 48 e CPC 39"]]},

S13:{t:"mc", instr:"Na aquisição reversa, quem é o adquirente para fins contábeis?",
  options:["A adquirida legal, cuja participação societária foi adquirida",
           "A adquirente legal, que emitiu os títulos",
           "A entidade com o maior patrimônio líquido",
           "As duas entidades, em conjunto"],
  answer:0,
  why:"Item B19 — quem emite os títulos é a adquirida contábil."},

S14:{t:"sort", instr:"No exemplo da aquisição reversa, classifique cada papel",
  buckets:["Companhia aberta","Entidade fechada"],
  items:[["Adquirente legal, porque emitiu instrumentos de participação societária",0],
         ["Adquirida para fins contábeis (adquirida contábil)",0],
         ["Adquirida legal, porque seus instrumentos de capital foram adquiridos",1],
         ["Adquirente para fins contábeis (adquirente contábil)",1]],
  why:"Os ex-sócios da entidade fechada recebem participações no capital da companhia aberta."},

S15:{t:"multi", instr:"Marque o que deve INTEGRAR o goodwill, em vez de ser reconhecido separadamente",
  options:["O valor atribuído à existência de força de trabalho organizada",
           "O valor de ativo intangível adquirido que não seja identificável na data da aquisição",
           "Os direitos de operação em aeroportos da Linhas Aéreas Épsilon S.A.",
           "Os passivos assumidos que atendem à definição de passivo do CPC 00"],
  answers:[0,1],
  why:"Item B37. Os direitos de operação são intangível identificável, reconhecido pelo valor justo."},

S16:{t:"match", instr:"Correlacione cada operação de reorganização societária ao seu conceito",
  pairs:[["Incorporação (art. 227)","Uma ou mais sociedades são absorvidas por outra, que lhes sucede em todos os direitos e obrigações"],
         ["Fusão (art. 228)","Unem-se duas ou mais sociedades para formar sociedade nova"],
         ["Cisão (art. 229)","A companhia transfere parcelas do seu patrimônio para uma ou mais sociedades"],
         ["Transformação (art. 220)","A sociedade passa de um tipo para outro, sem dissolução e liquidação"]]},

S17:{t:"mc", instr:"Fusão das Cias X e Y (capitais de R$ 140.000 e R$ 160.000) na Cia Z, com terreno contabilizado por R$ 60.000 e valor de mercado de R$ 80.000. Qual a participação do sócio da Cia X na Cia Z?",
  options:["43,75%","46,67%","50%","53,85%"],
  answer:0,
  why:"PL da Cia Z = 300.000 de capital + 20.000 de AAP = 320.000. Logo, 140.000/320.000."},

S18:{t:"wordbank", instr:"Monte a definição de incorporação reversa",
  target:["Na","incorporação","reversa","a","controlada","incorpora","a","controladora"],
  extra:["cindida","transformada","fusionada"],
  why:"E nela não há alteração de controle — em regra, serve à compensação de prejuízos fiscais."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Avançada 07","https://www.tecconcursos.com.br/s/Q2zVle","Q2zVle"],
  ["Caderno FCC — Contabilidade Avançada 07","https://www.tecconcursos.com.br/s/Q2zVm8","Q2zVm8"],
  ["Caderno FGV — Contabilidade Avançada 07","https://www.tecconcursos.com.br/s/Q2zVmU","Q2zVmU"],
  ["Caderno VUNESP — Contabilidade Avançada 07","https://www.tecconcursos.com.br/s/Q2zVmY","Q2zVmY"]
];
var TECNOTA = "A banca ganha dinheiro em três fronteiras deste resumo. A primeira é a troca de papéis: na aquisição reversa quem emite os títulos (adquirente legal) é a adquirida contábil, e na incorporação reversa é a controlada que incorpora a controladora — inverter isso é o erro mais comum. A segunda é a ordem da fórmula e o destino do goodwill: Goodwill = Valor Pago − Valor Justo (1.000.000 − 800.000 = 200.000), ele não amortiza mas passa pelo teste de recuperabilidade anual, e o que não é identificável — a força de trabalho organizada, os R$ 80.000 da Cia X e os R$ 60.000 da Cia Y — é incorporado a ele. A terceira é numérica: na combinação em estágios o ganho de R$ 20.000 (80.000 − 60.000) vai para o resultado, e na fusão das Cias X e Y o PL da Cia Z é R$ 320.000 (300.000 de capital + 20.000 de ajuste de avaliação patrimonial), o que dá 43,75% ao sócio da Cia X — quem esquece o ajuste marca 46,67%.";

var UNITS = [
  {n:1, title:"Conceito, alcance e método de aquisição", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Combinação de negócios, alcance e método", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · o que é combinação de negócios", xp:25, data:["S1","S2","T0","T1","T2","T3","T4","T5"]},
    {id:"K3", type:"drill",  title:"Praticar · objetivo e alcance",             xp:25, data:["S3","S4","T6","T7","T8","T9","T10","T11"]},
    {id:"K4", type:"drill",  title:"Praticar · método e data de aquisição",     xp:25, data:["S5","S6","T12","T13","T14","T15","T16"]},
    {id:"K5", type:"flash",  title:"Flashcards · conceito e alcance",           xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12]}
  ]},
  {n:2, title:"Goodwill, mensuração, estágios e custos", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Reconhecimento, goodwill e mensuração",     xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · goodwill e sua fórmula",         xp:25, data:["S7","S8","T17","T18","T19","T20","T21","T22"]},
    {id:"K8", type:"drill",  title:"Praticar · condições e mensuração",         xp:25, data:["S9","S10","T23","T24","T25","T26","T27","T28"]},
    {id:"K9", type:"drill",  title:"Praticar · estágios e custos da aquisição", xp:25, data:["S11","S12","T29","T30","T31","T32","T33","T34","T35"]},
    {id:"K10",type:"flash",  title:"Flashcards · goodwill e mensuração",        xp:15, data:[13,14,15,16,17,18,19,20,21,22,23,24,25,26]}
  ]},
  {n:3, title:"Aquisição reversa e reorganização societária", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Reversa, força de trabalho e reorganização",xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · aquisição reversa",              xp:25, data:["S13","S14","T36","T37","T38","T39","T40","T41"]},
    {id:"K13",type:"drill",  title:"Praticar · as quatro operações",            xp:25, data:["S15","S16","T42","T43","T44","T45","T46"]},
    {id:"K14",type:"drill",  title:"Praticar · a fusão de 43,75% e a reversa",  xp:25, data:["S17","S18","T47","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · reversa e reorganização",      xp:15, data:[27,28,29,30,31,32,33,34,35,36,37,38,39,40]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                   xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                     xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                    xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 07 de Contabilidade Avançada (Radegondes) ---------- */
var COM={
0:"<p>Certo. É a definição que abre o resumo: combinação de negócios é <b>“uma operação por meio do qual um adquirente obtém o controle de um ou mais negócios, independentemente da forma jurídica da operação”</b>.</p><p>Guarde a palavra-chave: o que define a operação é a obtenção do <b>CONTROLE</b>. A roupagem jurídica — compra de ações, fusão, incorporação — é indiferente.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 15 — o que é uma combinação de negócios</i></p>",
1:"<p>Errado por uma negativa. O resumo diz o oposto: <b>“neste Pronunciamento, o termo abrange TAMBÉM as fusões que se dão entre partes independentes”</b>.</p><p>A banca gosta de cortar o “também” e transformar a inclusão em exclusão. Fusão entre independentes é combinação de negócios.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 15 — o que é uma combinação de negócios</i></p>",
2:"<p>Errado. É exatamente o <b>EXEMPLO</b> do resumo, e a conclusão dele é a contrária: quando uma empresa <b>“adquire a maior parte das ações com direito a voto de outra empresa, tornando-se controladora dessa empresa”</b>, há combinação de negócios.</p><p>O material fecha a frase justamente contra essa pegadinha: ocorre a combinação <b>“mesmo que a transação tenha ocorrido por meio da compra de ações”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 15 — o que é uma combinação de negócios</i></p>",
3:"<p>Certo, na letra do quadro <b>NÃO CONFUNDA!</b> do resumo: <b>“nos termos do CPC 19, item 06, negócio em conjunto é uma operação em conjunto ou um empreendimento controlado em conjunto (joint venture). Ou seja, o controle é em conjunto, não existe um controle majoritário”</b>.</p><p>É o contraste que a banca explora: combinação de negócios pressupõe <b>controle</b>; negócio em conjunto, <b>controle compartilhado</b>.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 15 — Não confunda!</i></p>",
4:"<p>Errado — inverteu os dois lados do quadro. No negócio em conjunto <b>“as entidades mantêm sua independência contábil e financeira, e apenas divulgam informações relativas à participação no negócio conjunto”</b>.</p><p>A consolidação é o efeito da <b>combinação de negócios</b>, não do negócio em conjunto. O resumo resume assim: <b>“enquanto a combinação de negócios resulta na consolidação dos resultados financeiros das empresas envolvidas, o negócio em conjunto mantém a independência contábil e financeira de cada entidade”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>CPC 15 — Não confunda!</i></p>",
5:"<p>Certo, literalidade do <b>item 01</b>: <b>“o objetivo deste Pronunciamento é aprimorar a relevância, a confiabilidade e a comparabilidade das informações que a entidade fornece em suas demonstrações contábeis acerca de combinação de negócios e sobre seus efeitos”</b>.</p><p>Três qualidades, na ordem: <b>relevância · confiabilidade · comparabilidade</b>. Trocar uma delas por outra característica é o jeito fácil de errar a questão.</p><p class='fb-fonte'>Resumo 07 · <i>Objetivo do CPC 15</i></p>",
6:"<p>Certo. É a alínea <b>(b)</b> do item 01: o adquirente <b>“reconhece e mensura o ágio por expectativa de rentabilidade futura (goodwill adquirido) advindo da combinação de negócios ou o ganho proveniente de compra vantajosa”</b>.</p><p>Repare no <b>“ou”</b>: a combinação gera <b>goodwill</b> ou <b>ganho por compra vantajosa</b> — nunca os dois ao mesmo tempo.</p><p class='fb-fonte'>Resumo 07 · <i>Objetivo do CPC 15</i></p>",
7:"<p>Errado no verbo. O <b>item 02</b> do resumo lista, entre as hipóteses em que o Pronunciamento <b>NÃO se aplica</b>, a alínea (a): <b>“na contabilização da formação de negócios em conjunto em suas demonstrações contábeis”</b>.</p><p>As três exclusões do alcance, para decorar juntas: <b>negócios em conjunto</b> · <b>aquisição de ativos que não constitua negócio</b> · <b>controle comum</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Alcance do CPC 15</i></p>",
8:"<p>Errado. É a alínea <b>(c)</b> da lista de exclusões do item 02: o CPC 15 não se aplica <b>“em combinação de entidades ou negócios sob controle comum”</b>.</p><p>Faz sentido: se o controle já é o mesmo antes e depois, não houve obtenção de controle — e sem obtenção de controle não há combinação de negócios na acepção do Pronunciamento.</p><p class='fb-fonte'>Resumo 07 · <i>Alcance do CPC 15</i></p>",
9:"<p>Certo, pelo quadro <b>ATENÇÃO!</b> do resumo: nessas operações <b>“o adquirente deve identificar e reconhecer os ativos identificáveis adquiridos individualmente (incluindo aqueles que atendam à definição de ativo intangível) e os passivos assumidos que o compõem com base em seus respectivos valores justos na data da compra”</b>.</p><p>O critério é o <b>valor justo</b>, e a data é a <b>da compra</b>. O que muda em relação à combinação de negócios não é a mensuração, é a ausência de goodwill.</p><p class='fb-fonte'>Resumo 07 · <i>Alcance — Atenção!</i></p>",
10:"<p>Errado — é a frase final do quadro <b>ATENÇÃO!</b>, e ela é categórica: <b>“operações e eventos desse tipo NÃO geram ágio por expectativa de rentabilidade futura (goodwill)”</b>.</p><p>Guarde o par: comprar <b>máquinas, propriedades, patentes, marcas</b> sem assumir o negócio inteiro é <b>aquisição de ativos</b> — reconhecimento individual pelo valor justo e <b>zero goodwill</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Alcance — Atenção!</i></p>",
11:"<p>Errado no critério de mensuração. No <b>EXEMPLO</b> do resumo, a Cia. Gama <b>“deverá reconhecer esses direitos (de operação em aeroportos das regiões Sudeste e Centro-Oeste do Brasil) como ativo intangível, mensurado pelo valor justo na data de aquisição”</b>.</p><p>Não é valor contábil da adquirida: é <b>ativo intangível a valor justo na data de aquisição</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Alcance — exemplo da Cia. Gama</i></p>",
12:"<p>Errado na conclusão. O <b>item 03</b> é expresso: <b>“se os ativos adquiridos não constituem um negócio, a entidade deve contabilizar a operação ou o evento como AQUISIÇÃO DE ATIVOS”</b>.</p><p>O teste vem antes da contabilização: primeiro se verifica se os ativos adquiridos e os passivos assumidos <b>constituem um negócio</b>; só então se aplica o CPC 15.</p><p class='fb-fonte'>Resumo 07 · <i>Identificação de combinação de negócios</i></p>",
13:"<p>Certo, literalidade do <b>item 04</b>: <b>“a entidade deve contabilizar cada combinação de negócios pela aplicação do método de aquisição”</b>.</p><p>“Cada” é palavra importante: não há método alternativo nem faculdade de escolha.</p><p class='fb-fonte'>Resumo 07 · <i>Método de aquisição</i></p>",
14:"<p>Certo. São as quatro alíneas do <b>item 05</b>, na ordem do resumo: <b>(a)</b> identificação do adquirente; <b>(b)</b> determinação da data de aquisição; <b>(c)</b> reconhecimento e mensuração dos ativos identificáveis adquiridos, dos passivos assumidos e das participações societárias de não controladores; <b>(d)</b> reconhecimento e mensuração do <b>goodwill</b> ou do <b>ganho proveniente de compra vantajosa</b>.</p><p>Na prova, decore a sequência: <b>quem · quando · quanto · sobra</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Método de aquisição</i></p>",
15:"<p>Errado no marco. O <b>item 08</b> e o esquema do resumo dizem outra coisa: <b>“o adquirente deve identificar a data de aquisição, que é a data em que o CONTROLE da adquirida é obtido”</b>.</p><p>Assinatura de contrato, pagamento do preço e transferência formal das ações podem ocorrer em datas diferentes — o CPC 15 fixa a data em que o <b>controle</b> passa de mãos.</p><p class='fb-fonte'>Resumo 07 · <i>Determinação da data de aquisição</i></p>",
16:"<p>Certo — é o esquema do resumo em uma linha: <b>“a data de aquisição corresponde à data em que o controle da adquirida é obtido”</b>.</p><p>Tudo se ancora nessa data: os ativos e passivos entram pelo valor justo <b>dela</b>, o plano de pagamento baseado em ações é mensurado <b>nela</b>, e a participação anterior, nas combinações em estágios, é remensurada <b>nela</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Determinação da data de aquisição</i></p>",
17:"<p>Certo, literalidade do <b>item 10</b>: <b>“a partir da data de aquisição, o adquirente deve reconhecer, separadamente do ágio por expectativa de rentabilidade futura (goodwill), os ativos identificáveis adquiridos, os passivos assumidos e quaisquer participações de não controladores na adquirida”</b>.</p><p>A palavra que a banca esconde é <b>“separadamente”</b>: o goodwill é residual, não um saco onde se joga tudo — só o que <b>não é identificável</b> vai para dentro dele.</p><p class='fb-fonte'>Resumo 07 · <i>Reconhecimento</i></p>",
18:"<p>Certo. É o conceito do resumo: o goodwill <b>“é um valor excedente pago pela aquisição de uma empresa, ou pela participação em uma empresa”</b>.</p><p>E a explicação dele: <b>“quando uma companhia é comprada, em grande parte das vezes, o interessado paga um valor maior do que o valor que ela está valendo no mercado. Isso porque ele espera que haja uma valorização futura”</b> — daí o nome ágio por <b>expectativa de rentabilidade futura</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Reconhecimento — o que é goodwill?</i></p>",
19:"<p>Errado porque inverteu a ordem da subtração. A fórmula do resumo é <b>“Goodwill = Valor Pago – Valor Justo (em regra, valor de mercado)”</b>.</p><p>Faça o teste com o exemplo do material: pago <b>1.000.000</b>, valor justo <b>800.000</b>. Pela fórmula certa, goodwill de <b>200.000</b>; pela ordem invertida sairia <b>−200.000</b>, que é outra figura.</p><p class='fb-fonte'>Resumo 07 · <i>Reconhecimento — o que é goodwill?</i></p>",
20:"<p>Certo — é o <b>EXEMPLO</b> do resumo, com os mesmos números: <b>“imagine que a Cia ‘A’ adquira 100% de participação na Cia ‘B’, por R$ 1.000.000. Contudo, o valor justo do Patrimônio Líquido da Cia ‘B’ é de R$ 800.000. Nesse caso, o valor do Goodwill será de R$ 200.000”</b>.</p><p>Aplicando a fórmula: <b>1.000.000 − 800.000 = 200.000</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Reconhecimento — o que é goodwill?</i></p>",
21:"<p>Errado nas duas pontas. O quadro <b>ATENÇÃO!</b> do resumo é curto e resolve a questão: <b>“o Goodwill não sofre amortização, mas está sujeito ao Teste de Recuperabilidade anual”</b>.</p><p>A assertiva trocou o sinal de cada metade: afirmou a amortização (que não existe) e negou o teste (que é obrigatório e <b>anual</b>).</p><p class='fb-fonte'>Resumo 07 · <i>Goodwill — Atenção!</i></p>",
22:"<p>Certo. É a contrapartida do goodwill: se o valor pago fica <b>abaixo</b> do valor justo dos ativos líquidos identificáveis adquiridos, em vez de ágio surge o <b>ganho proveniente de compra vantajosa</b>.</p><p>O que o resumo dá é o <b>lugar</b> da figura: ela aparece na alínea (b) do <b>item 01</b> e na alínea (d) do <b>item 05</b>, sempre como a alternativa ao goodwill — <b>“o ágio por expectativa de rentabilidade futura (goodwill) OU o ganho proveniente de compra vantajosa”</b>.</p><p class='fb-fonte off'>Não consta do Resumo 07 — o resumo apenas nomeia o “ganho proveniente de compra vantajosa” nos itens 01 e 05, sem definir quando ele surge. A definição vem do próprio CPC 15.</p>",
23:"<p>Errado no pronunciamento citado. O <b>item 11</b> do resumo remete à Estrutura Conceitual: os ativos identificáveis adquiridos e os passivos assumidos <b>“devem atender, na data da aquisição, às definições de ativo e de passivo dispostas no CPC 00 – Estrutura Conceitual para Relatório Financeiro”</b>.</p><p>CPC 26 é apresentação das demonstrações contábeis. Aqui a referência é o <b>CPC 00</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Condições de reconhecimento</i></p>",
24:"<p>Errado — é o <b>EXEMPLO</b> que o resumo põe logo abaixo do item 11: <b>“os custos que o adquirente espera incorrer no futuro para efetivar um plano para encerrar uma atividade da adquirida, ou os custos para realocar ou desligar empregados da adquirida NÃO constituem passivo na data da aquisição”</b>.</p><p>E a consequência que o material tira: <b>“o adquirente não deve reconhecer tais custos como parte da aplicação do método de aquisição, já que eles não atendem às definições de passivo dispostas no CPC 00”</b>. Intenção de gastar não é obrigação.</p><p class='fb-fonte'>Resumo 07 · <i>Condições de reconhecimento</i></p>",
25:"<p>Certo, literalidade do <b>item 18</b>: <b>“o adquirente deve mensurar os ativos identificáveis adquiridos e os passivos assumidos pelos respectivos valores justos da data da aquisição”</b>.</p><p>O resumo ainda destaca a regra num esquema: na combinação de negócios, ativos adquiridos e passivos assumidos entram <b>pelos respectivos VALORES JUSTOS da data da aquisição</b> — não pelos valores contábeis da adquirida.</p><p class='fb-fonte'>Resumo 07 · <i>Mensuração</i></p>",
26:"<p>Certo. São as alíneas <b>(a)</b> e <b>(b)</b> do <b>item 19</b>, aplicáveis aos componentes da participação de não controladores que <b>“representem nessa data efetivamente instrumentos patrimoniais e confiram a seus detentores uma participação proporcional nos ativos líquidos da adquirida em caso de sua liquidação”</b>: <b>(a) pelo valor justo</b>, ou <b>(b) pela participação proporcional atual conferida pelos instrumentos patrimoniais nos montantes reconhecidos dos ativos líquidos identificáveis da adquirida</b>.</p><p>No exemplo do resumo, a empresa A compra <b>80%</b> da B e são os <b>20%</b> dos minoritários que se mensuram por um desses dois critérios.</p><p class='fb-fonte'>Resumo 07 · <i>Mensuração</i></p>",
27:"<p>Errado na base de mensuração. O item 19 encerra assim: <b>“todos os demais componentes da participação de não controladores devem ser mensurados ao VALOR JUSTO na data da aquisição, a menos que outra base de mensuração seja requerida pelos Pronunciamentos, Interpretações e Orientações do CPC”</b>.</p><p>A opção pela participação proporcional é restrita aos instrumentos patrimoniais com direito proporcional em caso de liquidação. Fora deles, <b>valor justo</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Mensuração</i></p>",
28:"<p>Certo, na linha do <b>item 30</b>: o adquirente mensura o passivo ou o instrumento patrimonial ligado a plano de benefício com pagamento baseado em ações da adquirida — ou à sua substituição por plano do adquirente — <b>“de acordo com o método previsto no Pronunciamento Técnico CPC 10 – Pagamento Baseado em Ações na data da aquisição”</b>.</p><p>No exemplo do resumo, a Empresa A compra 100% da B e mensura o plano da B <b>com base no valor de mercado das ações da Empresa B naquela data</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Transações com pagamento baseado em ações</i></p>",
29:"<p>Errado por uma expressão. O resumo transcreve o parêntese do item 30: o Pronunciamento <b>“faz referência ao resultado da aplicação desse método como a ‘mensuração baseada no MERCADO’ do plano de benefício baseado em ações”</b>.</p><p>Mercado, não custo histórico — coerente com o exemplo, em que o plano é medido pelo <b>valor de mercado das ações</b> na data da aquisição.</p><p class='fb-fonte'>Resumo 07 · <i>Transações com pagamento baseado em ações</i></p>",
30:"<p>Errado — é o contrário do <b>item 42</b>: <b>“em combinação de negócios realizada em estágios, o adquirente deve mensurar NOVAMENTE sua participação anterior na adquirida pelo VALOR JUSTO na data da aquisição e deve reconhecer no resultado do período o ganho ou a perda resultante, se houver, ou em outros resultados abrangentes, conforme apropriado”</b>.</p><p>Manter pelo valor contábil é justamente o que o CPC 15 proíbe: a participação antiga é remensurada, e a diferença aparece no <b>resultado</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Combinação de negócios realizada em estágios</i></p>",
31:"<p>Certo. É a definição do resumo: <b>“é uma aquisição passo a passo (step acquisition). Isso significa que o adquirente pode obter, posteriormente, o controle de uma adquirida na qual ele já mantinha uma participação de capital”</b>.</p><p>Guarde o gatilho: já havia participação <b>sem controle</b>, e a compra seguinte <b>traz o controle</b>. É aí que nasce a remensuração pelo valor justo.</p><p class='fb-fonte'>Resumo 07 · <i>Combinação de negócios realizada em estágios</i></p>",
32:"<p>Certo — é o <b>EXEMPLO</b> do resumo, com os mesmos números. Em 31/12/2023 a “A” tinha <b>40%</b> da “B”, cujo PL era <b>R$ 100.000</b>: <b>R$ 40.000</b> de participação da “A” e <b>R$ 60.000</b> dos demais. Em janeiro de 2024 ela comprou os <b>60% remanescentes por R$ 80.000</b> e obteve o controle.</p><p>Como a combinação foi em estágios, a “A” remensura a participação anterior pelo valor justo e reconhece <b>“no resultado do período (DRE) o ganho de R$ 20.000 (80.000 – 60.000)”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Combinação de negócios realizada em estágios</i></p>",
33:"<p>Certo, pelo <b>item 53</b>. O resumo lista os custos diretamente relacionados à aquisição — <b>“honorários de profissionais e consultores, tais como advogados, contadores, peritos, avaliadores; custos administrativos gerais, inclusive custos decorrentes da manutenção de departamento de aquisições; e custos de registro e emissão de títulos de dívida e de títulos patrimoniais”</b> — e manda contabilizá-los <b>“como despesa no período em que forem incorridos e os serviços forem recebidos”</b>.</p><p>Nada disso entra no custo da participação: é <b>despesa</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Custos relacionados à aquisição</i></p>",
34:"<p>Errado duas vezes. Primeiro, os custos diretamente relacionados à aquisição são <b>despesa do período</b>, e não parcela do custo da combinação. Segundo, o item 53 fala em despesa <b>“com apenas uma exceção”</b> — logo existe exceção.</p><p>A exceção são os <b>custos decorrentes da emissão de títulos de dívida e de títulos patrimoniais</b>, que seguem o <b>CPC 08</b>, o <b>CPC 48</b> e o <b>CPC 39</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Custos relacionados à aquisição</i></p>",
35:"<p>Certo. É a exceção única do <b>item 53</b>: <b>“os custos decorrentes da emissão de títulos de dívida e de títulos patrimoniais devem ser reconhecidos de acordo com o CPC 08 – Custos de Transação e Prêmios na Emissão de Títulos e Valores Mobiliários; CPC 48 – Instrumentos Financeiros; e CPC 39 – Instrumentos Financeiros: Apresentação”</b>.</p><p>Três números para memorizar juntos: <b>08 · 48 · 39</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Custos relacionados à aquisição</i></p>",
36:"<p>Certo, literalidade do <b>item B19</b>: <b>“a aquisição reversa ocorre quando a entidade que emite os títulos (adquirente legal) é identificada como a adquirida para fins contábeis”</b>.</p><p>O esquema do resumo fecha o par: a entidade cuja participação societária tiver sido adquirida — a <b>adquirida legal</b> — <b>“deve ser considerada, para fins contábeis, como a adquirente”</b>. Quem emite é adquirida contábil; quem foi adquirida é adquirente contábil.</p><p class='fb-fonte'>Resumo 07 · <i>Aquisição reversa</i></p>",
37:"<p>Errado — trocou o papel contábil. O item B19 diz que a adquirida legal <b>“deve ser considerada, para fins contábeis, como a ADQUIRENTE para que a operação seja considerada uma aquisição reversa”</b>.</p><p>O nome da figura já entrega: na aquisição <b>reversa</b>, os papéis legal e contábil se <b>invertem</b>. Se a adquirida legal continuasse adquirida contábil, não haveria nada de reverso.</p><p class='fb-fonte'>Resumo 07 · <i>Aquisição reversa</i></p>",
38:"<p>Errado na direção da emissão. O <b>item B20</b> é expresso: <b>“em uma aquisição reversa, o adquirente contábil normalmente não transfere ações nem outra forma de contraprestação para a adquirida contábil. Em vez disso, a adquirida contábil é quem emite instrumentos de participação societária (ações, por exemplo) e os entrega aos proprietários do adquirente contábil”</b>.</p><p>No exemplo do resumo é a <b>companhia aberta</b> (adquirida contábil) que emite as ações, e quem as recebe são os <b>ex-sócios da entidade fechada</b> — os proprietários do adquirente contábil.</p><p class='fb-fonte'>Resumo 07 · <i>Aquisição reversa</i></p>",
39:"<p>Certo, literalidade do <b>item B37</b>: <b>“o adquirente deve incorporar ao ágio por expectativa de rentabilidade futura (goodwill) o valor de um ativo intangível adquirido que NÃO seja identificável na data da aquisição”</b>.</p><p>É o outro lado do item 10: o que é <b>identificável</b> vai separado; o que <b>não é</b> engorda o goodwill.</p><p class='fb-fonte'>Resumo 07 · <i>Força de trabalho e outros itens não identificáveis</i></p>",
40:"<p>Errado — é exatamente o que o item B37 nega: <b>“em razão de a força de trabalho organizada NÃO se constituir em um ativo identificável para ser reconhecido separadamente do ágio por expectativa de rentabilidade futura (goodwill), qualquer valor que lhe seja atribuído deve integrar o ágio por expectativa de rentabilidade futura (goodwill)”</b>.</p><p>O resumo define a figura como <b>“um conjunto de empregados que permite que o adquirente continue a operar o negócio a partir da data da aquisição”</b> — tem valor, mas não é ativo identificável.</p><p class='fb-fonte'>Resumo 07 · <i>Força de trabalho e outros itens não identificáveis</i></p>",
41:"<p>Certo — é o <b>EXEMPLO</b> do resumo, com esses mesmos valores. Em dezembro de 2023 os sócios da <b>Cia X</b> e da <b>Cia Y</b> fazem uma fusão constituindo a <b>Cia Z</b>, e o estudo apontou que <b>“os empregados da Cia X têm valor de R$ 80.000, enquanto os empregados da Cia. Y têm valor de R$ 60.000”</b>.</p><p>O material separa os dois momentos: <b>ANTES</b> da fusão <b>“os empregados não são reconhecidos como ativo no BP das Cias X e Y, pois a entidade não tem controle sobre eles”</b>; <b>APÓS</b> a fusão, <b>“o valor dos empregados (força de trabalho organizada) deve incorporar ao Goodwill no Balanço Patrimonial da Cia Z (fusionada)”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Força de trabalho e outros itens não identificáveis</i></p>",
42:"<p>Errado — a assertiva deu o conceito de <b>fusão</b> com o nome de incorporação. O quadro do resumo define: <b>“a incorporação é a operação pela qual uma ou mais sociedades são absorvidas por outra, que lhes sucede em todos os direitos e obrigações (art. 227 da lei 6.404/76)”</b>.</p><p>Os exemplos do material separam as duas na hora: na <b>incorporação</b>, “A” incorpora “B” e resulta <b>uma “A” maior</b>; na <b>fusão</b>, “A” se une a “B” e resulta <b>uma “C”</b>. Incorporação não cria sociedade nova.</p><p class='fb-fonte'>Resumo 07 · <i>Reorganização societária</i></p>",
43:"<p>Certo, literalidade do quadro: <b>“a fusão é a operação pela qual se unem duas ou mais sociedades para formar sociedade nova, que lhes sucederá em todos os direitos e obrigações (art. 228 da lei 6.404/76)”</b>.</p><p>O marcador da fusão é a <b>sociedade nova</b>: “A” + “B” → “C”. É o que acontece no exemplo das Cias X e Y, que formam a Cia Z.</p><p class='fb-fonte'>Resumo 07 · <i>Reorganização societária</i></p>",
44:"<p>Errado porque a extinção depende da extensão da cisão. O quadro do resumo: a cisão é a operação pela qual a companhia transfere parcelas do seu patrimônio a uma ou mais sociedades, <b>“extinguindo-se a companhia cindida, se houver versão de todo o seu patrimônio, ou dividindo-se o seu capital, se parcial a versão (art. 229 da lei 6.404/76)”</b>.</p><p>E o quadro <b>ATENÇÃO!</b> reforça: <b>“na cisão total (transferência de todo o patrimônio), a companhia cindida é extinta”</b>. Na parcial, ela sobrevive menor — o exemplo do resumo é “A” menor e “B” maior.</p><p class='fb-fonte'>Resumo 07 · <i>Reorganização societária</i></p>",
45:"<p>Certo, literalidade do quadro: <b>“a transformação é a operação pela qual a sociedade passa, independentemente de dissolução e liquidação, de um tipo para outro (art. 220 da lei 6.404/76)”</b>.</p><p>O exemplo do resumo é o de sempre: <b>Sociedade Limitada (Ltda) que se transforma em Sociedade Anônima (S.A.)</b>. Muda o tipo, a pessoa jurídica continua a mesma.</p><p class='fb-fonte'>Resumo 07 · <i>Reorganização societária</i></p>",
46:"<p>Certo, pelo quadro <b>ATENÇÃO!</b> do resumo: <b>“na incorporação, a empresa incorporada é extinta. Nesse caso, ela deve baixar contabilmente todos os ativos e passivos exigíveis, transferindo para a empresa incorporadora”</b>.</p><p>Repare no detalhe que a banca explora: baixam-se os <b>ativos e passivos exigíveis</b> — o patrimônio líquido não é “transferido” como conta, ele se reflete na participação recebida.</p><p class='fb-fonte'>Resumo 07 · <i>Reorganização societária — Atenção!</i></p>",
47:"<p>Errado no valor: faltou o ajuste. Na <b>RESOLUÇÃO</b> da questão-exemplo, o resumo monta o PL da Cia Z em <b>R$ 320.000</b>: <b>“Capital Social R$ 300.000 (140.000 + 160.000)”</b> mais <b>“Ajuste de Avaliação Patrimonial R$ 20.000 (art. 182, § 3º, lei 6.404/76)”</b>.</p><p>Os R$ 300.000 são só a soma dos capitais. O terreno da Cia Y estava no BP por <b>R$ 60.000</b> e valia <b>R$ 80.000</b> na data da fusão — os <b>R$ 20.000</b> de diferença completam o PL.</p><p class='fb-fonte'>Resumo 07 · <i>Reorganização societária — questão-exemplo</i></p>",
48:"<p>Certo. É a segunda linha da resolução do resumo: <b>“Ajuste de Avaliação Patrimonial R$ 20.000 (art. 182, § 3º, lei 6.404/76)”</b>.</p><p>De onde vem: <b>“note que o terreno está contabilizado no Balanço Patrimonial (BP) da Cia Y por R$ 60.000. Contudo, o enunciado da questão nos diz que, na data da fusão, o valor de mercado do terreno era de R$ 80.000”</b> — 80.000 − 60.000.</p><p class='fb-fonte'>Resumo 07 · <i>Reorganização societária — questão-exemplo</i></p>",
49:"<p>Errado — <b>46,67%</b> é o distrator da questão (letra b), e sairia de 140.000/300.000, isto é, esquecendo o ajuste de avaliação patrimonial. O gabarito do resumo é a letra <b>A</b>.</p><p>A conta correta, como ele escreve: <b>“pertence ao sócio da Cia X o percentual correspondente ao seu PL: 140.000/320.000 = 43,75%”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Reorganização societária — questão-exemplo</i></p>",
50:"<p>Errado por inversão. O resumo é direto: <b>“a incorporação reversa ocorre quando a controlada incorpora a controladora”</b>.</p><p>O exemplo dele deixa claro o sentido: <b>“suponha que uma empresa ‘A’ é controladora integral da empresa ‘B’. No processo de incorporação reversa, a empresa ‘B’ incorpora a empresa ‘A’ (controladora)”</b>. Quem absorve é a <b>controlada</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Incorporação reversa</i></p>",
51:"<p>Certo. O resumo ressalta exatamente isso: <b>“vale ressaltar que, na incorporação reversa, não há alteração de controle”</b>.</p><p>E dá a razão prática de a operação existir: <b>“na maioria das vezes, isso acontece para que possa haver a compensação de prejuízos fiscais”</b>. O controle continua com os mesmos sócios; muda quem é a casca jurídica sobrevivente.</p><p class='fb-fonte'>Resumo 07 · <i>Incorporação reversa</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"07", nome:"CPC 15 — Combinação de Negócios", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
