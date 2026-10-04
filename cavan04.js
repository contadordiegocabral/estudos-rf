/* Contabilidade Avançada — Módulo 04: CPC 23 — Políticas contábeis, mudança de estimativa e retificação de erro (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cavan04 = (function(){
"use strict";

var CARDS = [
  ["Do que trata o CPC 23?","Das <b>Políticas Contábeis</b>, da <b>Mudança de Estimativa</b> e da <b>Retificação de Erro</b>."],
  ["O que são políticas contábeis?","Os <b>princípios</b>, as <b>bases</b>, as <b>convenções</b>, as <b>regras</b> e as <b>práticas específicas</b> aplicados pela entidade na <b>elaboração</b> e na <b>apresentação</b> de demonstrações contábeis."],
  ["Qual o exemplo de política contábil do resumo?","A <b>escolha do critério de mensuração do custo dos estoques</b>: o <b>CPC 16, item 25</b>, permite o <b>PEPS</b> ou o <b>custo médio ponderado</b> — a entidade escolhe um deles como política."],
  ["O que é uma estimativa contábil?","São <b>montantes monetários</b> nas demonstrações contábeis que estão <b>sujeitos a incerteza de mensuração</b>, como o <b>ajuste para perdas de crédito esperadas</b>."],
  ["Exemplo do resumo: conta a receber de R$ 100.000 de cliente em dificuldade, com expectativa de receber 80%. Qual o ajuste?","A empresa registra <b>R$ 20.000</b> como <b>perda de crédito esperada</b> — 20% dos R$ 100.000."],
  ["O que é um erro, para o CPC 23?","<b>Omissões</b> e <b>incorreções</b> nas demonstrações contábeis de <b>um ou mais períodos anteriores</b> decorrentes da <b>falta de uso</b>, ou do <b>uso incorreto</b>, de <b>informação confiável</b>."],
  ["Quais critérios o CPC 23 se propõe a definir (item 01)?","Critérios para a <b>seleção e a mudança de políticas contábeis</b>, para a <b>mudança nas estimativas contábeis</b> e para a <b>retificação de erro</b>."],
  ["Quais os outros dois objetivos do CPC 23 (item 01)?","<b>Melhorar a relevância e a confiabilidade</b> das demonstrações contábeis e <b>permitir sua comparabilidade ao longo do tempo com as demonstrações contábeis de OUTRAS entidades</b>."],
  ["Quando a entidade deve alterar uma política contábil (item 14)?","Apenas se a mudança <b>(a)</b> for <b>exigida por Pronunciamento, Interpretação ou Orientação</b>; ou <b>(b)</b> resultar em <b>informação confiável e mais relevante</b> nas demonstrações contábeis."],
  ["No esquema do resumo, qual hipótese do item 14 é voluntária e qual é involuntária?","<b>Exigida por Pronunciamento → mudança INVOLUNTÁRIA</b>. <b>Resultar em informação confiável e mais relevante → mudança VOLUNTÁRIA</b>."],
  ["Exemplo 01 do resumo (mudança involuntária)","O <b>CPC 26, item 27</b>, exige o <b>regime de competência</b>, exceto para a <b>DFC</b>. Se o item fosse alterado para impor o <b>regime de caixa</b>, haveria <b>mudança de política contábil involuntária</b>."],
  ["Exemplo 02 do resumo (mudança voluntária)","A entidade usa o <b>PEPS</b> e, no ano seguinte, os contadores julgam que o <b>custo médio</b> corresponde melhor a informação mais confiável do real valor dos estoques e mudam o critério — <b>mudança voluntária</b>."],
  ["A entidade pode alterar uma política contábil por simples conveniência?","<b>Não.</b> O item 14 diz <b>“apenas se”</b> — só nas <b>duas hipóteses</b>: exigência de Pronunciamento ou informação <b>confiável e mais relevante</b>."],

  ["Item 19(a) — adoção inicial de Pronunciamento com disposições transitórias","A mudança é contabilizada <b>de acordo com as disposições transitórias específicas</b>, se existirem, expressas nesse Pronunciamento, Interpretação ou Orientação."],
  ["Item 19(b) — adoção inicial SEM disposições transitórias, ou mudança voluntária","A entidade deve aplicar a mudança <b>RETROSPECTIVAMENTE</b>."],
  ["Item 23 — qual a exceção à aplicação retrospectiva?","A mudança de política contábil é aplicada retrospectivamente, <b>exceto quando for impraticável determinar os efeitos específicos do período ou o efeito cumulativo da mudança</b>."],
  ["O que é aplicação retrospectiva?","A aplicação de <b>nova política contábil</b> a transações, a outros eventos e a condições <b>como se essa política tivesse sido SEMPRE aplicada</b>."],
  ["Exemplo do resumo: PEPS em 2023, custo médio em 2024. O que a empresa faz?","<b>Refaz as demonstrações contábeis de 2023</b>, recalcula os estoques pelo custo médio e contabiliza a diferença como <b>ajuste patrimonial</b>, lançado <b>direto no PL, em Lucros Acumulados</b> (<b>Ajustes de Exercícios Anteriores</b> — art. 186, § 1º, da Lei 6.404/76)."],
  ["Item 26 — até que ponto se aplica a nova política?","À <b>informação comparativa</b> para períodos anteriores <b>tão antigos quanto for praticável</b>. É <b>não praticável</b> quando não se consegue determinar o <b>efeito cumulativo</b> nos montantes dos <b>balanços de abertura e de encerramento</b> desse período."],
  ["Item 26 — onde se registra o ajuste de períodos anteriores aos apresentados?","No <b>saldo de ABERTURA</b> de cada componente do <b>patrimônio líquido</b> afetado do <b>período anterior MAIS ANTIGO apresentado</b>. Geralmente em <b>Lucros ou Prejuízos Acumulados</b>, mas <b>pode ser outro componente do PL</b>."],
  ["Item 32 — o que envolve desenvolver estimativas contábeis?","O uso de <b>julgamentos</b> ou <b>pressupostos</b> baseados na <b>última informação disponível e confiável</b>."],
  ["Os cinco exemplos de estimativas contábeis do item 32","<b>(a)</b> ajuste para perdas de crédito esperadas (<b>CPC 48</b>) · <b>(b)</b> valor líquido realizável de item de estoque (<b>CPC 16</b>) · <b>(c)</b> valor justo de ativo ou passivo (<b>CPC 46</b>) · <b>(d)</b> despesa de depreciação de item do imobilizado (<b>CPC 27</b>) · <b>(e)</b> provisão para obrigações decorrentes de garantias (<b>CPC 25</b>)."],
  ["Item 35 — a mudança na BASE DE AVALIAÇÃO é mudança de quê?","De <b>POLÍTICA contábil</b>, e não de estimativa. E <b>quando for difícil distinguir</b> uma da outra, trata-se como <b>mudança na ESTIMATIVA contábil</b>."],
  ["Item 36 — como se reconhece o efeito de mudança na estimativa?","<b>PROSPECTIVAMENTE</b>, incluindo-o nos resultados do <b>(a)</b> <b>período da mudança</b>, se afetar apenas esse período; ou <b>(b)</b> <b>período da mudança e futuros períodos</b>, se afetar todos eles."],
  ["O que é aplicação prospectiva?","O <b>reconhecimento do efeito da mudança na estimativa contábil nos períodos CORRENTE e FUTURO</b> afetados pela mudança."],
  ["Item 37 — e se a mudança de estimativa afetar ativos, passivos ou o PL?","Ela deve ser reconhecida pelo <b>ajuste no correspondente item do ativo, do passivo ou do patrimônio líquido</b>, <b>no período da mudança</b>."],
  ["Item 38 — os dois exemplos de alcance da mudança de estimativa","A mudança no <b>ajuste para perdas de crédito esperadas</b> afeta <b>apenas o período corrente</b>. A mudança na <b>estimativa da vida útil de ativo depreciável</b> afeta a depreciação do <b>período corrente e de cada um dos futuros períodos</b> da vida útil remanescente. Em ambos, o efeito vai a <b>receita ou despesa na DRE</b>."],
  ["Questão-exemplo da Cia Bons Tempos: especialista aponta mudança material no valor contábil das patentes. O que fazer?","<b>Alterar a taxa de amortização a partir do exercício CORRENTE</b> — é mudança de estimativa, de reconhecimento <b>prospectivo</b>. O valor contábil do intangível é impactado pela <b>avaliação da vida útil</b>, pelo <b>método de amortização</b> ou pelos <b>valores residuais</b>, ou por ambos."],

  ["Item 41 — onde podem ocorrer erros?","No <b>registro</b>, na <b>mensuração</b>, na <b>apresentação</b> ou na <b>divulgação</b> de elementos das demonstrações contábeis. Não há conformidade com os Pronunciamentos se houver <b>erros materiais</b> ou <b>erros imateriais cometidos INTENCIONALMENTE</b> para alcançar determinada apresentação."],
  ["Erro material × erro imaterial","<b>Material (relevante):</b> se corrigido, <b>pode afetar significativamente as decisões econômicas dos usuários</b>. <b>Imaterial (irrelevante):</b> se corrigido, <b>não</b> afeta significativamente essas decisões."],
  ["Quando se corrigem os erros do período corrente e os de períodos anteriores?","Os <b>potenciais erros do período corrente</b> descobertos nesse período: <b>antes de as demonstrações serem autorizadas para publicação</b>. Os <b>erros materiais</b> descobertos só em <b>período subsequente</b>: na <b>informação comparativa</b> apresentada nas demonstrações desse período subsequente."],
  ["Item 05 — que informação confiável caracteriza erro de período anterior?","A que <b>(a)</b> <b>estava disponível</b> quando da <b>autorização para divulgação</b> das demonstrações desses períodos; e <b>(b)</b> <b>pudesse ter sido razoavelmente obtida e levada em consideração</b> na elaboração e apresentação dessas demonstrações."],
  ["Os cinco efeitos incluídos nos erros de períodos anteriores","<b>Erros matemáticos</b> · <b>erros na aplicação de políticas contábeis</b> · <b>descuidos</b> · <b>interpretações incorretas de fatos</b> · <b>FRAUDES</b>."],
  ["Item 43 — como se corrige o erro de período anterior?","Por <b>REAPRESENTAÇÃO RETROSPECTIVA</b>, <b>salvo quando for impraticável</b> determinar os <b>efeitos específicos do período</b> ou o <b>efeito cumulativo</b> do erro."],
  ["O que é reapresentação retrospectiva?","A <b>correção do reconhecimento, da mensuração e da divulgação</b> de valores de elementos das demonstrações contábeis <b>como se um erro de períodos anteriores NUNCA tivesse ocorrido</b>."],
  ["Exemplo do resumo: Cia. ABC reconhecia por R$ 50.000 softwares comprados de terceiros por R$ 30.000, a valor justo. Qual o vício e a solução?","É <b>ERRO</b>: o <b>CPC 04, item 24</b>, exige que o intangível seja reconhecido <b>inicialmente ao CUSTO</b>. Pelo <b>CPC 23, item 43</b>, corrige-se por <b>reapresentação retrospectiva</b> — a ABC deve <b>refazer o balanço patrimonial do ano anterior</b>."],
  ["Item 49 — o que divulgar em notas ao corrigir erro de período anterior?","<b>1)</b> a <b>natureza</b> do erro; <b>2)</b> o <b>montante da retificação para cada período anterior apresentado</b>; <b>3)</b> o <b>montante da retificação no início do período anterior mais antigo apresentado</b>; <b>4)</b> as <b>circunstâncias</b> que levaram à existência dessa condição; <b>5)</b> uma <b>descrição de como e desde quando</b> o erro foi corrigido."],
  ["Em qual demonstração entram os efeitos? (quadro final do resumo)","<b>DMPL</b> (CPC 26, item 106) recebe a <b>aplicação RETROSPECTIVA</b>: <b>mudança de política contábil</b> (item 23) e <b>retificação de erros</b> (item 43). A <b>DRE</b> recebe a <b>aplicação PROSPECTIVA</b>: <b>mudança de estimativas</b> (item 36)."]
];

var QS = [
  ["O Pronunciamento Técnico CPC 23 trata das políticas contábeis, da mudança de estimativa e da retificação de erro.","C","CPC 23","Objeto do pronunciamento."],
  ["Políticas contábeis são os princípios, as bases, as convenções, as regras e as práticas específicas aplicados pela entidade na elaboração e na apresentação de demonstrações contábeis.","C","FCC","Definição literal."],
  ["A escolha entre o critério PEPS e o critério do custo médio ponderado para mensurar os estoques, prevista no item 25 do CPC 16, é exemplo de política contábil.","C","FGV","É o exemplo do resumo."],
  ["Políticas contábeis são montantes monetários nas demonstrações contábeis que estão sujeitos a incerteza de mensuração.","E","VUNESP","Essa é a definição de <b>estimativa</b> contábil."],
  ["As estimativas contábeis são montantes monetários nas demonstrações contábeis sujeitos a incerteza de mensuração, como o ajuste para perdas de crédito esperadas.","C","CEBRASPE","Definição literal."],
  ["Conta a receber de R$ 100.000 de cliente em dificuldade financeira, com estimativa de recebimento de apenas 80% do valor devido: a empresa registra ajuste de R$ 20.000 como perda de crédito esperada.","C","FCC","20% de 100.000."],
  ["No mesmo exemplo, o ajuste registrado como perda de crédito esperada é de R$ 80.000.","E","FGV","R$ 80.000 é o valor que se <b>espera receber</b>; o ajuste é de <b>R$ 20.000</b>."],
  ["Erros são omissões e incorreções nas demonstrações contábeis da entidade de um ou mais períodos anteriores decorrentes da falta de uso, ou uso incorreto, de informação confiável.","C","VUNESP","Definição literal."],
  ["O objetivo do CPC 23 é definir critérios para a seleção e a mudança de políticas contábeis, para a mudança nas estimativas contábeis e para a retificação de erro.","C","CPC 23, item 01","Os três critérios do item 01."],
  ["O CPC 23 tem como objetivo melhorar a relevância e a confiabilidade das demonstrações contábeis da entidade, bem como permitir sua comparabilidade ao longo do tempo com as demonstrações contábeis de outras entidades.","C","CPC 23, item 01","Literalidade do item 01."],
  ["O objetivo de comparabilidade do CPC 23 restringe-se às demonstrações contábeis da própria entidade ao longo do tempo, não alcançando a comparação com demonstrações de outras entidades.","E","CEBRASPE","O item 01 fala expressamente em <b>outras entidades</b>."],
  ["A entidade deve alterar uma política contábil apenas se a mudança for exigida por Pronunciamento, Interpretação ou Orientação, ou se resultar em informação confiável e mais relevante nas demonstrações contábeis.","C","CPC 23, item 14","As duas hipóteses do item 14."],
  ["A entidade pode alterar livremente suas políticas contábeis, desde que divulgue a alteração em notas explicativas.","E","FCC","O item 14 admite a mudança <b>apenas</b> nas duas hipóteses que enumera."],
  ["A mudança de política contábil exigida por Pronunciamento, Interpretação ou Orientação é classificada como mudança voluntária.","E","FGV","Exigência de Pronunciamento gera mudança <b>involuntária</b>."],
  ["A troca do PEPS pelo custo médio ponderado, por julgarem os contadores que este corresponde melhor ao real valor dos estoques, é exemplo de mudança de política contábil voluntária.","C","VUNESP","Exemplo 02 do resumo."],
  ["Se o item 27 do CPC 26 fosse alterado para exigir o regime de caixa em lugar do regime de competência, haveria mudança de política contábil involuntária.","C","CEBRASPE","Exemplo 01 do resumo."],
  ["A mudança na política contábil resultante da adoção inicial de Pronunciamento deve ser contabilizada de acordo com as disposições transitórias específicas, se existirem, expressas nesse Pronunciamento.","C","CPC 23, item 19","Item 19, alínea (a)."],
  ["Quando a entidade muda uma política contábil voluntariamente, ela deve aplicar a mudança prospectivamente.","E","FCC","Mudança voluntária de política se aplica <b>retrospectivamente</b> — item 19(b)."],
  ["Uma mudança na política contábil deve ser aplicada retrospectivamente, exceto quando for impraticável determinar os efeitos específicos do período ou o efeito cumulativo da mudança.","C","CPC 23, item 23","Regra e exceção do item 23."],
  ["Aplicação retrospectiva é a aplicação de nova política contábil a transações, a outros eventos e a condições como se essa política tivesse sido sempre aplicada.","C","FGV","Definição literal."],
  ["No exemplo do resumo, a empresa que avaliava estoques pelo PEPS em 2023 e passou ao custo médio em 2024 deve refazer as demonstrações contábeis de 2023 e contabilizar a diferença como ajuste patrimonial.","C","VUNESP","Efeito da aplicação retrospectiva."],
  ["Nesse mesmo exemplo, o impacto do ajuste é lançado no resultado do exercício de 2024.","E","CEBRASPE","O impacto vai <b>diretamente ao patrimônio líquido</b>, em lucros acumulados."],
  ["O impacto do ajuste decorrente da aplicação retrospectiva é lançado diretamente no patrimônio líquido, na conta de lucros acumulados, a título de ajustes de exercícios anteriores.","C","Lei 6.404/76, art. 186, § 1º","É o que o resumo indica no exemplo."],
  ["Ao aplicar a nova política contábil retrospectivamente, a entidade deve aplicá-la à informação comparativa para períodos anteriores tão antigos quanto for praticável.","C","CPC 23, item 26","Literalidade do item 26."],
  ["A aplicação retrospectiva a um período anterior pode ser considerada não praticável se não for praticável determinar o efeito cumulativo nos montantes dos balanços de abertura e de encerramento desse período.","C","FCC","Critério de impraticabilidade do item 26."],
  ["O valor do ajuste relacionado com períodos anteriores aos apresentados nas demonstrações contábeis é registrado no saldo de encerramento de cada componente do patrimônio líquido afetado do período mais recente apresentado.","E","FGV","É no <b>saldo de abertura</b> do componente do PL do <b>período anterior mais antigo</b> apresentado."],
  ["Geralmente o ajuste decorrente da aplicação retrospectiva é registrado em lucros ou prejuízos acumulados, mas pode ser feito em outro componente do patrimônio líquido.","C","VUNESP","O item 26 admite outro componente do PL."],
  ["Desenvolver estimativas contábeis envolve o uso de julgamentos ou pressupostos baseados na última informação disponível e confiável.","C","CPC 23, item 32","Literalidade do item 32."],
  ["A despesa de depreciação de item do ativo imobilizado e a provisão para obrigações decorrentes de garantias são exemplos de estimativas contábeis.","C","CEBRASPE","Alíneas (d) e (e) do item 32."],
  ["O ajuste para perdas de crédito esperadas é exemplo de política contábil, e não de estimativa contábil.","E","FCC","É o primeiro exemplo de <b>estimativa</b> contábil do item 32."],
  ["A mudança na base de avaliação é uma mudança na estimativa contábil, e não uma mudança na política contábil.","E","CPC 23, item 35","Está invertido: base de avaliação é mudança de <b>política</b> contábil."],
  ["Quando for difícil distinguir uma mudança na política contábil de uma mudança na estimativa contábil, a mudança é tratada como mudança na política contábil.","E","FGV","O item 35 manda tratar como mudança na <b>estimativa</b> contábil."],
  ["O efeito de mudança na estimativa contábil deve ser reconhecido prospectivamente, incluindo-o nos resultados do período da mudança, se afetar apenas esse período, ou do período da mudança e de futuros períodos, se afetar todos eles.","C","CPC 23, item 36","Literalidade do item 36."],
  ["Aplicação prospectiva de reconhecimento do efeito de mudança em estimativa contábil representa o reconhecimento desse efeito nos períodos corrente e futuro afetados pela mudança.","C","VUNESP","Definição literal."],
  ["Se a mudança na estimativa contábil resultar em mudanças em ativos e passivos, ela deve ser reconhecida pelo ajuste no correspondente item do ativo ou do passivo no período seguinte ao da mudança.","E","CPC 23, item 37","O ajuste é feito <b>no período da mudança</b>."],
  ["A mudança em um ajuste para perdas de crédito esperadas afeta apenas os resultados do período corrente e, por isso, é reconhecida no período corrente.","C","CEBRASPE","Primeiro exemplo do item 38."],
  ["A mudança na estimativa da vida útil de ativo depreciável afeta a depreciação apenas do período corrente.","E","FCC","Afeta o corrente <b>e cada um dos futuros períodos</b> da vida útil remanescente."],
  ["Na Cia Bons Tempos, cujo especialista independente apontou mudança relevante e material no valor contábil das patentes, a empresa deverá alterar a taxa de amortização a partir do exercício corrente.","C","FGV","Gabarito C da questão-exemplo."],
  ["Nesse mesmo caso, a empresa deverá reapresentar as demonstrações contábeis do exercício anterior com os valores atualizados.","E","VUNESP","É mudança de <b>estimativa</b> — reconhecimento <b>prospectivo</b>, a partir do exercício corrente."],
  ["Erros podem ocorrer no registro, na mensuração, na apresentação ou na divulgação de elementos de demonstrações contábeis.","C","CPC 23, item 41","Literalidade do item 41."],
  ["Erros imateriais cometidos intencionalmente para alcançar determinada apresentação da posição patrimonial e financeira não afastam a conformidade das demonstrações contábeis com os Pronunciamentos.","E","CEBRASPE","O item 41 afasta a conformidade também nesse caso."],
  ["Erros materiais são aqueles que, se corrigidos, podem afetar significativamente as decisões econômicas dos usuários das demonstrações contábeis.","C","FCC","Critério do comentário do resumo."],
  ["Os potenciais erros do período corrente descobertos nesse período devem ser corrigidos antes de as demonstrações contábeis serem autorizadas para publicação.","C","FGV","Literalidade do item 41."],
  ["Os erros materiais de períodos anteriores descobertos em período subsequente são corrigidos na informação comparativa apresentada nas demonstrações contábeis desse período subsequente.","C","VUNESP","Parte final do item 41."],
  ["Erros de períodos anteriores decorrem da falta de uso, ou do uso incorreto, de informação confiável que estava disponível quando da autorização para divulgação das demonstrações contábeis desses períodos e que pudesse ter sido razoavelmente obtida e levada em consideração.","C","CPC 23, item 05","As duas alíneas do item 05."],
  ["As fraudes não se incluem entre os efeitos abrangidos pelos erros de períodos anteriores, por decorrerem de conduta intencional.","E","CEBRASPE","A lista do item 05 termina justamente em <b>fraudes</b>."],
  ["Erros matemáticos, erros na aplicação de políticas contábeis, descuidos e interpretações incorretas de fatos estão entre os efeitos incluídos nos erros de períodos anteriores.","C","FCC","Quatro dos cinco itens da lista."],
  ["Um erro de período anterior deve ser corrigido por reapresentação retrospectiva, salvo quando for impraticável determinar os efeitos específicos do período ou o efeito cumulativo do erro.","C","CPC 23, item 43","Regra e exceção do item 43."],
  ["Reapresentação retrospectiva é a correção do reconhecimento, da mensuração e da divulgação de valores de elementos das demonstrações contábeis como se um erro de períodos anteriores nunca tivesse ocorrido.","C","FGV","Definição literal."],
  ["No caso da Cia. ABC, que reconhecia por R$ 50.000 softwares comprados de terceiros por R$ 30.000 e avaliados a valor justo, a correção se faz por reapresentação retrospectiva, refazendo o balanço patrimonial do ano anterior.","C","VUNESP","Erro quanto ao CPC 04, item 24 — intangível ao custo."],
  ["Ao corrigir erro de período anterior, a entidade deve divulgar a natureza do erro, o montante da retificação para cada período anterior apresentado, o montante da retificação no início do período anterior mais antigo apresentado, as circunstâncias que levaram a essa condição e uma descrição de como e desde quando o erro foi corrigido.","C","CPC 23, item 49","As cinco divulgações do item 49."],
  ["Os efeitos da retificação de erro de período anterior são incluídos na demonstração do resultado do exercício em que o erro foi descoberto.","E","CPC 26, item 106","Reapresentação retrospectiva entra na <b>DMPL</b>; na DRE só a mudança de <b>estimativa</b>."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Os três conceitos do CPC 23 e a mudança de política contábil",
      '<div class="box"><span class="bl">Os três institutos</span>'+
      '<p><b>Políticas contábeis:</b> os <b>princípios</b>, as <b>bases</b>, as <b>convenções</b>, as <b>regras</b> e as <b>práticas específicas</b> aplicados pela entidade na <b>elaboração</b> e na <b>apresentação</b> das demonstrações contábeis.</p>'+
      '<p><b>Estimativas contábeis:</b> <b>montantes monetários</b> nas demonstrações contábeis <b>sujeitos a incerteza de mensuração</b>, como o <b>ajuste para perdas de crédito esperadas</b>.</p>'+
      '<p><b>Erros:</b> <b>omissões e incorreções</b> nas demonstrações de <b>um ou mais períodos anteriores</b> decorrentes da <b>falta de uso</b>, ou do <b>uso incorreto</b>, de <b>informação confiável</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Os exemplos do resumo</span>'+
      '<p><b>Política:</b> a escolha do critério de mensuração do custo dos estoques — o <b>CPC 16, item 25</b>, admite <b>PEPS</b> ou <b>custo médio ponderado</b>; a entidade escolhe um.</p>'+
      '<p><b>Estimativa:</b> conta a receber de <b>R$ 100.000</b> de cliente atrasado e em dificuldade; pela análise e pela experiência anterior, espera-se receber <b>80%</b>. Registra-se ajuste de <b>R$ 20.000</b> como perda de crédito esperada.</p></div>'+
      '<div class="box"><span class="bl">Objetivos do CPC 23 (item 01)</span>'+
      '<p><b>Definir critérios para:</b> a <b>seleção e a mudança de políticas contábeis</b> · a <b>mudança nas estimativas contábeis</b> · a <b>retificação de erro</b>.</p>'+
      '<p><b>Além disso:</b> <b>melhorar a relevância e a confiabilidade</b> das demonstrações contábeis e <b>permitir sua comparabilidade ao longo do tempo com as demonstrações contábeis de OUTRAS entidades</b>.</p></div>'+
      '<div class="box"><span class="bl">Item 14 — quando a política pode mudar</span>'+
      '<p>A entidade deve alterar uma política contábil <b>APENAS SE</b> a mudança:</p>'+
      '<ul><li><b>(a)</b> for <b>exigida por Pronunciamento, Interpretação ou Orientação</b>; ou</li>'+
      '<li><b>(b)</b> resultar em <b>informação confiável e mais relevante</b> nas demonstrações contábeis sobre os efeitos das transações, outros eventos ou condições acerca da <b>posição patrimonial e financeira</b>, do <b>desempenho</b> ou dos <b>fluxos de caixa</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Involuntária × voluntária</span>'+
      '<p><b>Exigida por Pronunciamento → mudança INVOLUNTÁRIA.</b> Exemplo 01 do resumo: o <b>CPC 26, item 27</b>, manda usar o <b>regime de competência</b>, exceto na <b>DFC</b>; se o item passasse a exigir <b>regime de caixa</b>, a entidade mudaria porque foi obrigada.</p>'+
      '<p><b>Informação confiável e mais relevante → mudança VOLUNTÁRIA.</b> Exemplo 02: a entidade usava <b>PEPS</b> e, no ano seguinte, os contadores julgam o <b>custo médio</b> mais fiel ao real valor dos estoques e trocam o critério.</p>'+
      '<p class="mn"><em>Obrigada = involuntária · por julgamento = voluntária</em></p></div>')
  ],
  V2:[
    sl("Retrospectiva para a política, prospectiva para a estimativa",
      '<div class="box"><span class="bl">Item 19 — como contabilizar a mudança</span>'+
      '<p><b>(a)</b> Adoção inicial de Pronunciamento, Interpretação ou Orientação <b>com disposições transitórias específicas</b>: segue-se <b>essas disposições</b>.</p>'+
      '<p><b>(b)</b> Adoção inicial <b>sem</b> disposições transitórias específicas, ou mudança <b>voluntária</b>: aplica-se a mudança <b>RETROSPECTIVAMENTE</b>.</p>'+
      '<p><b>Item 23:</b> a mudança é aplicada retrospectivamente, <b>exceto quando for impraticável determinar os efeitos específicos do período ou o efeito cumulativo</b> da mudança.</p></div>'+
      '<div class="box tip"><span class="bl">Aplicação retrospectiva, com o exemplo do resumo</span>'+
      '<p><b>Definição:</b> aplicar a nova política a transações, outros eventos e condições <b>como se ela tivesse sido SEMPRE aplicada</b>.</p>'+
      '<p><b>Exemplo:</b> estoques pelo <b>PEPS em 2023</b>; em <b>2024</b> os contadores julgam o <b>custo médio</b> mais fiel e mudam. A empresa <b>refaz as demonstrações de 2023</b>, recalcula os estoques pelo custo médio e contabiliza a diferença como <b>ajuste patrimonial</b> — lançado <b>direto no PL, em Lucros Acumulados</b> (<b>Ajustes de Exercícios Anteriores</b> — art. 186, § 1º, da Lei 6.404/76).</p></div>'+
      '<div class="box"><span class="bl">Item 26 — até onde voltar e onde registrar</span>'+
      '<p>Aplica-se a nova política à <b>informação comparativa</b> de períodos anteriores <b>tão antigos quanto for praticável</b>. É <b>não praticável</b> quando não se consegue determinar o <b>efeito cumulativo</b> nos montantes dos <b>balanços de abertura e de encerramento</b> desse período.</p>'+
      '<p>O ajuste de períodos <b>anteriores aos apresentados</b> vai no <b>saldo de ABERTURA</b> de cada componente do <b>PL</b> afetado do <b>período anterior MAIS ANTIGO apresentado</b> — geralmente em <b>Lucros ou Prejuízos Acumulados</b>, podendo ser <b>outro componente do PL</b>. Resumos históricos de dados financeiros também são ajustados.</p></div>'+
      '<div class="box"><span class="bl">Estimativas (itens 32, 36, 37 e 38)</span>'+
      '<p>Desenvolver estimativas envolve <b>julgamentos ou pressupostos baseados na última informação disponível e confiável</b>. Exemplos do item 32: <b>perdas de crédito esperadas (CPC 48)</b> · <b>valor líquido realizável de estoque (CPC 16)</b> · <b>valor justo de ativo ou passivo (CPC 46)</b> · <b>depreciação de item do imobilizado (CPC 27)</b> · <b>provisão para garantias (CPC 25)</b>.</p>'+
      '<p><b>Item 36:</b> o efeito é reconhecido <b>PROSPECTIVAMENTE</b>, nos resultados do <b>período da mudança</b> (se só ele for afetado) ou do <b>período da mudança e futuros períodos</b> (se todos forem).</p>'+
      '<p><b>Item 37:</b> se a mudança resultar em alterações em <b>ativos e passivos</b>, ou se relacionar a <b>componente do PL</b>, reconhece-se pelo <b>ajuste no item correspondente</b>, <b>no período da mudança</b>.</p>'+
      '<p><b>Item 38:</b> perdas de crédito esperadas afetam <b>só o corrente</b>; <b>vida útil de ativo depreciável</b> afeta o <b>corrente e cada um dos futuros períodos</b> da vida útil remanescente. Em ambos, receita ou despesa na <b>DRE</b>.</p></div>'+
      '<div class="box trap"><span class="bl">NÃO CONFUNDA (item 35)</span>'+
      '<p><b>Mudança na BASE DE AVALIAÇÃO = mudança de POLÍTICA contábil</b> — ativo que era mensurado <b>a custo</b> e passa a ser mensurado <b>a valor justo</b>; estoques que eram <b>PEPS</b> e passam a <b>custo médio ponderado</b>. Aplicação <b>retrospectiva</b>.</p>'+
      '<p><b>Mudança na ESTIMATIVA do valor</b> — ativo mensurado a valor justo que, após <b>mudança na estimativa da vida útil</b> do ativo depreciável, precisou de <b>outro valor justo</b>. Aplicação <b>prospectiva</b>.</p>'+
      '<p><b>Regra de desempate:</b> quando for <b>difícil distinguir</b> uma da outra, trata-se como <b>mudança na ESTIMATIVA contábil</b>.</p></div>'+
      '<div class="box tip"><span class="bl">A questão-exemplo (Cia Bons Tempos)</span>'+
      '<p>Especialista independente aponta <b>mudança relevante e material no valor contábil das patentes</b>. É <b>nova estimativa contábil</b> → reconhecimento <b>prospectivo</b> → a empresa deve <b>alterar a taxa de amortização a partir do exercício CORRENTE</b> (gabarito <b>C</b>).</p>'+
      '<p>O valor contábil de um intangível é impactado pela <b>avaliação da vida útil</b>, pelo <b>método de amortização</b> ou pelos <b>valores residuais</b>, ou por ambos.</p></div>')
  ],
  V3:[
    sl("Retificação de erro, divulgação e o destino dos efeitos",
      '<div class="box"><span class="bl">Item 41 — onde o erro aparece</span>'+
      '<p>Erros podem ocorrer no <b>registro</b>, na <b>mensuração</b>, na <b>apresentação</b> ou na <b>divulgação</b> de elementos das demonstrações contábeis.</p>'+
      '<p>As demonstrações <b>não estarão em conformidade</b> com os Pronunciamentos se contiverem <b>erros materiais</b> <b>ou</b> <b>erros imateriais cometidos INTENCIONALMENTE</b> para alcançar determinada apresentação da posição patrimonial e financeira, do desempenho ou dos fluxos de caixa.</p>'+
      '<p><b>Materiais (relevantes):</b> se corrigidos, <b>podem afetar significativamente</b> as decisões econômicas dos usuários. <b>Imateriais (irrelevantes):</b> não afetam significativamente.</p></div>'+
      '<div class="box"><span class="bl">Quando corrigir</span>'+
      '<p><b>Erro do período corrente</b> descoberto no próprio período: corrigido <b>antes de as demonstrações serem autorizadas para publicação</b>.</p>'+
      '<p><b>Erro material</b> descoberto só em <b>período subsequente</b>: corrigido na <b>informação comparativa</b> apresentada nas demonstrações desse período subsequente.</p>'+
      '<p><b>Exemplo:</b> receita reconhecida a mais de <b>R$ 100.000</b> em <b>2022</b>, descoberta em <b>2023</b>. Ajustam-se as demonstrações de 2022 — a receita é <b>revertida</b>, alterando <b>resultado líquido</b> e <b>PL</b> —, e a informação comparativa de 2023 sai corrigida.</p></div>'+
      '<div class="box"><span class="bl">Item 05 — erros de períodos anteriores</span>'+
      '<p>Omissões e incorreções decorrentes da falta de uso, ou uso incorreto, de <b>informação confiável</b> que: <b>(a)</b> <b>estava disponível</b> quando da <b>autorização para divulgação</b> das demonstrações desses períodos; e <b>(b)</b> <b>pudesse ter sido razoavelmente obtida e levada em consideração</b> na sua elaboração e apresentação.</p>'+
      '<p><b>Incluem os efeitos de:</b> <b>erros matemáticos</b> · <b>erros na aplicação de políticas contábeis</b> · <b>descuidos</b> · <b>interpretações incorretas de fatos</b> · <b>fraudes</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Item 43 — reapresentação retrospectiva</span>'+
      '<p>O erro de período anterior deve ser corrigido por <b>REAPRESENTAÇÃO RETROSPECTIVA</b>, <b>salvo quando for impraticável</b> determinar os <b>efeitos específicos do período</b> ou o <b>efeito cumulativo</b> do erro.</p>'+
      '<p><b>Definição:</b> correção do <b>reconhecimento</b>, da <b>mensuração</b> e da <b>divulgação</b> de valores de elementos das demonstrações <b>como se o erro NUNCA tivesse ocorrido</b>.</p>'+
      '<p><b>Exemplo:</b> em <b>31/12/2023</b> a <b>Cia. ABC</b> reconhecia por <b>R$ 50.000</b>, a valor justo, softwares comprados de terceiros por <b>R$ 30.000</b>. O <b>CPC 04, item 24</b>, exige o intangível <b>inicialmente ao custo</b> — logo, é <b>erro</b>. Em 2024 a ABC passou a avaliar ao custo e deve <b>refazer o balanço patrimonial do ano anterior</b>.</p></div>'+
      '<div class="box"><span class="bl">Item 49 — o que divulgar em notas explicativas</span>'+
      '<ul><li>A <b>natureza</b> do erro do período anterior;</li>'+
      '<li>O <b>montante da retificação para cada período anterior</b> apresentado anteriormente;</li>'+
      '<li>O <b>montante da retificação no início do período anterior mais antigo</b> apresentado;</li>'+
      '<li>As <b>circunstâncias</b> que levaram à existência dessa condição; e</li>'+
      '<li>Uma <b>descrição de como e desde quando</b> o erro foi corrigido.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Onde os efeitos aparecem — o quadro final</span>'+
      '<p><b>CPC 26, item 106(b):</b> a <b>DMPL</b> inclui, para cada componente do PL, os efeitos da <b>aplicação retrospectiva</b> ou da <b>reapresentação retrospectiva</b> reconhecidos conforme o CPC 23.</p>'+
      '<p><b>Exemplo:</b> caixa de <b>R$ 500.000</b> em 2023; em 2024 constata-se que a <b>compra de estoques</b> não havia sido contabilizada. A conta caixa é <b>retificada</b> (diminui) e o impacto vai ao <b>PL, em Ajustes de Exercícios Anteriores</b> (art. 186, § 1º) — entrando, portanto, na <b>DMPL</b>.</p>'+
      '<p class="mn"><em>Item 23 política → retrospectiva → DMPL · Item 36 estimativa → prospectiva → DRE · Item 43 erro → reapresentação retrospectiva → DMPL</em></p></div>')
  ]
};

var EX = {
S1:{t:"gap", instr:"Complete a definição de políticas contábeis",
  before:"Políticas contábeis são os princípios, as bases, as convenções, as regras e as ",
  after:" específicas aplicados pela entidade na elaboração e na apresentação de demonstrações contábeis.",
  options:["práticas","estimativas","normas fiscais"], answer:0,
  why:"São cinco elementos: princípios, bases, convenções, regras e práticas específicas."},

S2:{t:"sort", instr:"Classifique cada item entre os três conceitos do CPC 23",
  buckets:["Política contábil","Estimativa contábil","Erro"],
  items:[["Princípios, bases, convenções, regras e práticas de elaboração das demonstrações",0],
         ["Escolha entre PEPS e custo médio ponderado (CPC 16, item 25)",0],
         ["Montante monetário sujeito a incerteza de mensuração",1],
         ["Ajuste para perdas de crédito esperadas",1],
         ["Omissão de período anterior por uso incorreto de informação confiável",2]],
  why:"Política é a regra escolhida; estimativa é o valor incerto; erro é a omissão ou incorreção de período anterior."},

S3:{t:"multi", instr:"Marque os objetivos do CPC 23 (item 01)",
  options:["Definir critérios para a seleção e a mudança de políticas contábeis",
           "Definir critérios para a mudança nas estimativas contábeis",
           "Definir critérios para a retificação de erro",
           "Melhorar a relevância e a confiabilidade das demonstrações contábeis",
           "Permitir a comparabilidade ao longo do tempo com as demonstrações contábeis de outras entidades",
           "Definir a base de cálculo dos tributos sobre o lucro",
           "Fixar o prazo de guarda dos livros contábeis"],
  answers:[0,1,2,3,4],
  why:"A comparabilidade do item 01 alcança as demonstrações de outras entidades, não só as da própria entidade."},

S4:{t:"mc", instr:"Conta a receber de R$ 100.000 de cliente em dificuldade financeira, com expectativa de receber apenas 80% do valor devido. Qual o ajuste registrado como perda de crédito esperada?",
  options:["R$ 20.000","R$ 80.000","R$ 100.000","R$ 8.000"],
  answer:0,
  why:"É o exemplo do resumo: 20% de R$ 100.000. Os R$ 80.000 são o que se espera receber."},

S5:{t:"sort", instr:"A mudança de política contábil é voluntária ou involuntária?",
  buckets:["Involuntária","Voluntária"],
  items:[["Mudança exigida por Pronunciamento, Interpretação ou Orientação",0],
         ["Alteração do item 27 do CPC 26 para impor o regime de caixa",0],
         ["Mudança que resulta em informação confiável e mais relevante",1],
         ["Troca do PEPS pelo custo médio por julgamento dos contadores",1]],
  why:"Obrigada por norma, involuntária; feita por julgamento de maior relevância, voluntária."},

S6:{t:"wordbank", instr:"Monte a regra de abertura do item 14",
  target:["A","entidade","deve","alterar","uma","política","contábil","apenas","se","a","mudança","for","exigida","por","Pronunciamento"],
  extra:["sempre","que","o","gestor","julgar","conveniente"],
  why:"O item 14 diz apenas se — e lista duas hipóteses fechadas."},

S7:{t:"gap", instr:"Complete a regra do item 23",
  before:"Uma mudança na política contábil deve ser aplicada ",
  after:", exceto quando for impraticável determinar os efeitos específicos do período ou o efeito cumulativo da mudança.",
  options:["retrospectivamente","prospectivamente","apenas a partir do período seguinte"], answer:0,
  why:"Política contábil é retrospectiva; estimativa é prospectiva."},

S8:{t:"match", instr:"Correlacione cada expressão à sua definição",
  pairs:[["Aplicação retrospectiva","Aplicar a nova política como se ela tivesse sido sempre aplicada"],
         ["Aplicação prospectiva","Reconhecer o efeito da mudança nos períodos corrente e futuro afetados"],
         ["Reapresentação retrospectiva","Corrigir valores como se o erro de períodos anteriores nunca tivesse ocorrido"]],
  why:"Retrospectiva olha para trás; prospectiva, do período corrente para a frente."},

S9:{t:"mc", instr:"No exemplo do resumo (PEPS em 2023, custo médio em 2024), onde é lançado o impacto do ajuste?",
  options:["Diretamente no patrimônio líquido, em lucros acumulados, como ajuste de exercícios anteriores",
           "Na DRE de 2024, como despesa do período",
           "No passivo, como provisão para ajuste de estoques",
           "Em conta de compensação, sem efeito patrimonial"],
  answer:0,
  why:"Ajustes de Exercícios Anteriores — art. 186, § 1º, da Lei 6.404/76."},

S10:{t:"multi", instr:"Marque os exemplos de estimativas contábeis do item 32",
  options:["Ajuste para perdas de crédito esperadas (CPC 48)",
           "Valor líquido realizável de item de estoque (CPC 16)",
           "Valor justo de ativo ou passivo (CPC 46)",
           "Despesa de depreciação de item do ativo imobilizado (CPC 27)",
           "Provisão para obrigações decorrentes de garantias (CPC 25)",
           "Escolha entre PEPS e custo médio ponderado",
           "Mudança da base de avaliação de custo para valor justo"],
  answers:[0,1,2,3,4],
  why:"As duas últimas são política contábil, não estimativa."},

S11:{t:"sort", instr:"Mudança de política contábil ou de estimativa contábil?",
  buckets:["Política contábil","Estimativa contábil"],
  items:[["Mudança na base de avaliação",0],
         ["Ativo mensurado a custo passa a ser mensurado a valor justo",0],
         ["Estoques avaliados pelo PEPS passam ao custo médio ponderado",0],
         ["Mudança na estimativa da vida útil do ativo depreciável",1],
         ["Quando for difícil distinguir uma da outra",1]],
  why:"Item 35: base de avaliação é política; na dúvida, trata-se como estimativa."},

S12:{t:"mc", instr:"Cia Bons Tempos: especialista independente informa mudança relevante e material no valor contábil de suas patentes. Pelo CPC 23, a empresa deverá:",
  options:["Alterar a taxa de amortização a partir do exercício corrente",
           "Alterar a taxa de amortização a partir do próximo exercício",
           "Reapresentar as demonstrações contábeis do exercício anterior com os valores atualizados",
           "Reapresentar as demonstrações contábeis, com valores corrigidos, até onde for praticável"],
  answer:0,
  why:"Gabarito C: nova estimativa contábil, de reconhecimento prospectivo, a partir do período corrente."},

S13:{t:"gap", instr:"Complete a regra do item 43",
  before:"Um erro de período anterior deve ser corrigido por ",
  after:", salvo quando for impraticável determinar os efeitos específicos do período ou o efeito cumulativo do erro.",
  options:["reapresentação retrospectiva","aplicação prospectiva","ajuste no resultado do período corrente"], answer:0,
  why:"Como se o erro nunca tivesse ocorrido."},

S14:{t:"multi", instr:"Marque os efeitos incluídos nos erros de períodos anteriores (item 05)",
  options:["Erros matemáticos","Erros na aplicação de políticas contábeis","Descuidos",
           "Interpretações incorretas de fatos","Fraudes",
           "Mudança na estimativa da vida útil de ativo depreciável",
           "Alteração de Pronunciamento que exige nova política contábil"],
  answers:[0,1,2,3,4],
  why:"Fraudes estão expressamente na lista. As duas últimas não são erro."},

S15:{t:"multi", instr:"Marque o que a entidade deve divulgar ao corrigir erro de período anterior (item 49)",
  options:["A natureza do erro do período anterior",
           "O montante da retificação para cada período anterior apresentado",
           "O montante da retificação no início do período anterior mais antigo apresentado",
           "As circunstâncias que levaram à existência dessa condição",
           "Uma descrição de como e desde quando o erro foi corrigido",
           "A identificação do responsável pelo erro",
           "O valor do tributo economizado com o erro"],
  answers:[0,1,2,3,4],
  why:"São cinco divulgações, e nenhuma delas pede nome de responsável."},

S16:{t:"sort", instr:"Em qual demonstração entram os efeitos?",
  buckets:["DMPL","DRE"],
  items:[["Mudança de política contábil — aplicação retrospectiva (item 23)",0],
         ["Retificação de erro — reapresentação retrospectiva (item 43)",0],
         ["Mudança de estimativa contábil — aplicação prospectiva (item 36)",1]],
  why:"Tudo que é retrospectivo passa pelo PL e aparece na DMPL (CPC 26, item 106)."},

S17:{t:"mc", instr:"Qual a diferença entre erro material e erro imaterial, segundo o resumo?",
  options:["O material, se corrigido, pode afetar significativamente as decisões econômicas dos usuários; o imaterial, não",
           "O material decorre de fraude; o imaterial, de descuido",
           "O material é do período corrente; o imaterial, de períodos anteriores",
           "O material é corrigido prospectivamente; o imaterial, retrospectivamente"],
  answer:0,
  why:"E atenção: erro imaterial cometido intencionalmente também afasta a conformidade das demonstrações."},

S18:{t:"match", instr:"Correlacione cada item do CPC 23 à sua regra",
  pairs:[["Item 23","Mudança na política contábil deve ser aplicada retrospectivamente"],
         ["Item 36","Efeito de mudança na estimativa contábil reconhecido prospectivamente"],
         ["Item 43","Erro de período anterior corrigido por reapresentação retrospectiva"]],
  why:"É o quadro dos principais itens, na última página do resumo."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Avançada 04","https://www.tecconcursos.com.br/s/Q2yoGz","Q2yoGz"],
  ["Caderno FCC — Contabilidade Avançada 04","https://www.tecconcursos.com.br/s/Q2yoHD","Q2yoHD"],
  ["Caderno FGV — Contabilidade Avançada 04","https://www.tecconcursos.com.br/s/Q2yoHP","Q2yoHP"],
  ["Caderno VUNESP — Contabilidade Avançada 04","https://www.tecconcursos.com.br/s/Q2yoHb","Q2yoHb"]
];
var TECNOTA = "Módulo de pouca conta e muita fronteira, e a banca cobra sempre as mesmas três. A primeira é o trio do quadro final: item 23 (política contábil, retrospectiva), item 36 (estimativa, prospectiva) e item 43 (erro, reapresentação retrospectiva) — trocar retrospectiva por prospectiva é o erro mais comum da matéria. A segunda é o destino dos efeitos: o que é retrospectivo passa pelo patrimônio líquido e aparece na DMPL (CPC 26, item 106), enquanto a mudança de estimativa vai a receita ou despesa na DRE. A terceira é o item 35: mudança na base de avaliação (custo para valor justo, PEPS para custo médio) é mudança de POLÍTICA, mas, quando for difícil distinguir política de estimativa, trata-se como mudança na ESTIMATIVA. Guarde também os dois números que o resumo usa: o ajuste de R$ 20.000 sobre a conta a receber de R$ 100.000 com expectativa de 80%, e os softwares da Cia. ABC reconhecidos por R$ 50.000 quando o custo era R$ 30.000.";

var UNITS = [
  {n:1, title:"Conceitos do CPC 23 e mudança de política", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Política, estimativa, erro e o item 14", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · os três conceitos",          xp:25, data:["S1","S2","T0","T1","T2","T3","T4","T5"]},
    {id:"K3", type:"drill",  title:"Praticar · objetivos do CPC 23",        xp:25, data:["S3","S4","T6","T7","T8","T9","T10"]},
    {id:"K4", type:"drill",  title:"Praticar · voluntária e involuntária",  xp:25, data:["S5","S6","T11","T12","T13","T14","T15"]},
    {id:"K5", type:"flash",  title:"Flashcards · conceitos e item 14",      xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12]}
  ]},
  {n:2, title:"Retrospectiva, prospectiva e estimativas", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Itens 19, 23, 26 e as estimativas",     xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · aplicação retrospectiva",    xp:25, data:["S7","S8","T16","T17","T18","T19","T20","T21","T22"]},
    {id:"K8", type:"drill",  title:"Praticar · item 26 e exemplos do 32",   xp:25, data:["S9","S10","T23","T24","T25","T26","T27","T28","T29"]},
    {id:"K9", type:"drill",  title:"Praticar · política × estimativa",      xp:25, data:["S11","S12","T30","T31","T32","T33","T34","T35","T36","T37","T38"]},
    {id:"K10",type:"flash",  title:"Flashcards · retrospectiva e estimativa",xp:15, data:[13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]}
  ]},
  {n:3, title:"Retificação de erro e divulgação", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Itens 41, 05, 43 e 49 e o destino dos efeitos", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · o que é erro e quando corrigir",     xp:25, data:["S13","S14","T39","T40","T41","T42","T43"]},
    {id:"K13",type:"drill",  title:"Praticar · erros de períodos anteriores",       xp:25, data:["S15","S16","T44","T45","T46","T47"]},
    {id:"K14",type:"drill",  title:"Praticar · reapresentação e divulgação",        xp:25, data:["S17","S18","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · retificação de erro",              xp:15, data:[28,29,30,31,32,33,34,35,36,37]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                  xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                 xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 04 de Contabilidade Avançada (Radegondes) ---------- */
var COM={
0:"<p>Certo. É a frase de abertura do resumo: <b>“o pronunciamento técnico CPC 23 trata das Políticas Contábeis, Mudança de Estimativa e Retificação de Erro”</b>.</p><p>O nome completo do pronunciamento já é o índice do assunto: três institutos, três tratamentos diferentes. Guarde desde já o trio final do resumo — <b>política → retrospectiva</b>, <b>estimativa → prospectiva</b>, <b>erro → reapresentação retrospectiva</b>.</p><p class='fb-fonte'>Resumo 04 · <i>CPC 23</i></p>",
1:"<p>Certo, na literalidade do resumo: políticas contábeis são <b>“os princípios, as bases, as convenções, as regras e as práticas específicas aplicados pela entidade na elaboração e na apresentação de demonstrações contábeis”</b>.</p><p>São <b>cinco</b> elementos, e a finalidade aparece no fim da definição: <b>elaboração e apresentação</b> das demonstrações contábeis.</p><p class='fb-fonte'>Resumo 04 · <i>CPC 23 — O que são políticas contábeis?</i></p>",
2:"<p>Certo — é exatamente o <b>EXEMPLO</b> que o resumo dá de política contábil: <b>“a escolha de mensuração do custo dos estoques”</b>.</p><p>Ele lembra que o <b>CPC 16, item 25</b>, permite atribuir o custo dos estoques <b>pelo PEPS</b> ou <b>pelo custo médio ponderado</b>, e que <b>“uma entidade pode escolher adotar como política contábil o critério PEPS para mensurar seus estoques ou o critério do custo médio ponderado”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>CPC 23 — O que são políticas contábeis?</i></p>",
3:"<p>Errado — a banca trocou as duas definições de lugar. <b>Montantes monetários sujeitos a incerteza de mensuração</b> é a definição de <b>ESTIMATIVA</b> contábil.</p><p>Política contábil é outra coisa: <b>princípios, bases, convenções, regras e práticas específicas</b> aplicados na elaboração e na apresentação das demonstrações contábeis.</p><p>O jeito de não errar: <b>política é a regra escolhida</b>; <b>estimativa é o valor incerto</b>.</p><p class='fb-fonte'>Resumo 04 · <i>CPC 23 — políticas contábeis e estimativas</i></p>",
4:"<p>Certo, na letra do resumo: <b>“as estimativas contábeis são montantes monetários nas demonstrações contábeis que estão sujeitas a incerteza de mensuração, como o ajuste para perdas de crédito esperadas”</b>.</p><p>O próprio exemplo embutido na definição — <b>ajuste para perdas de crédito esperadas</b> — reaparece depois na lista do item 32 como estimativa contábil.</p><p class='fb-fonte'>Resumo 04 · <i>CPC 23 — O que é uma estimativa?</i></p>",
5:"<p>Certo. É o <b>EXEMPLO</b> do resumo, com estes mesmos números: conta a receber de <b>R$ 100.000</b> de cliente atrasado e em dificuldade financeira; pela análise da situação dele e pela experiência anterior com clientes semelhantes, a empresa estima receber <b>apenas 80%</b>.</p><p>Logo, <b>“a empresa registra um ajuste contábil de R$ 20.000 como perda de crédito esperada”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>CPC 23 — O que é uma estimativa? (exemplo)</i></p>",
6:"<p>Errado — a banca inverteu o número. Os <b>R$ 80.000</b> são o que a empresa <b>espera receber</b> (80% de R$ 100.000). O <b>ajuste</b> é a parte que ela <b>não espera receber</b>.</p><p>No exemplo do resumo, o ajuste registrado como perda de crédito esperada é de <b>R$ 20.000</b>.</p><p class='fb-fonte'>Resumo 04 · <i>CPC 23 — O que é uma estimativa? (exemplo)</i></p>",
7:"<p>Certo, na literalidade do resumo: erros são <b>“omissões e incorreções nas demonstrações contábeis da entidade de um ou mais períodos anteriores decorrentes da falta de uso, ou uso incorreto, de informação confiável”</b>.</p><p>Repare nos dois eixos que a banca gosta de mexer: <b>omissões e incorreções</b> (o que aconteceu) e <b>falta de uso ou uso incorreto de informação confiável</b> (por que aconteceu).</p><p class='fb-fonte'>Resumo 04 · <i>CPC 23 — O que é um erro?</i></p>",
8:"<p>Certo. O <b>item 01</b> transcrito no resumo abre exatamente assim: o objetivo é <b>“definir critérios para a seleção e a mudança de políticas contábeis, juntamente com o tratamento contábil e divulgação de mudança nas políticas contábeis, a mudança nas estimativas contábeis e a retificação de erro”</b>.</p><p>No esquema do resumo, são os três ramos da coluna “definir critérios para a”.</p><p class='fb-fonte'>Resumo 04 · <i>Objetivo do CPC 23</i></p>",
9:"<p>Certo — é a segunda metade do item 01: o pronunciamento visa <b>“melhorar a relevância e a confiabilidade das demonstrações contábeis da entidade, bem como permitir sua comparabilidade ao longo do tempo com as demonstrações contábeis de outras entidades”</b>.</p><p>São, então, <b>dois</b> objetivos além dos critérios: <b>relevância e confiabilidade</b> e <b>comparabilidade</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Objetivo do CPC 23</i></p>",
10:"<p>Errado por uma restrição indevida. O item 01 fala em <b>“comparabilidade ao longo do tempo com as demonstrações contábeis de OUTRAS entidades”</b> — a comparação não se limita à própria entidade.</p><p>No esquema do resumo esse objetivo aparece numa caixa própria, justamente com a expressão <b>“de outras entidades”</b>. É a palavra que a banca apaga.</p><p class='fb-fonte'>Resumo 04 · <i>Objetivo do CPC 23</i></p>",
11:"<p>Certo, na letra do <b>item 14</b>: a entidade deve alterar uma política contábil <b>apenas se</b> a mudança <b>“(a) for exigida por Pronunciamento, Interpretação ou Orientação; ou (b) resultar em informação confiável e mais relevante nas demonstrações contábeis”</b>.</p><p>No esquema do resumo, (a) é a <b>mudança involuntária</b> e (b) é a <b>mudança voluntária</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Mudança nas políticas contábeis — item 14</i></p>",
12:"<p>Errado na palavra <b>livremente</b>. O item 14 é fechado: <b>“a entidade deve alterar uma política contábil APENAS SE a mudança”</b> se encaixar em uma das duas hipóteses — exigência de <b>Pronunciamento, Interpretação ou Orientação</b> ou <b>informação confiável e mais relevante</b>.</p><p>Divulgar não substitui o requisito: sem uma das duas hipóteses, a política não pode ser alterada.</p><p class='fb-fonte'>Resumo 04 · <i>Mudança nas políticas contábeis — item 14</i></p>",
13:"<p>Errado — está invertido. No esquema do resumo, <b>“for exigida por Pronunciamento”</b> leva a <b>Mudança Involuntária</b>; é a hipótese (b), <b>“resultar em informação confiável e mais relevante”</b>, que gera a <b>Mudança Voluntária</b>.</p><p>A lógica é simples: quando a norma obriga, a entidade não escolheu — involuntária.</p><p class='fb-fonte'>Resumo 04 · <i>Mudança nas políticas contábeis — esquema do item 14</i></p>",
14:"<p>Certo — é o <b>EXEMPLO 02</b> do resumo, palavra por palavra. A entidade adota o <b>PEPS</b> e, no ano seguinte, <b>“os contadores da empresa julgam que a avaliação por custo médio corresponde melhor a uma informação mais confiável do real valor dos seus estoques”</b>, alterando a forma de mensurá-los.</p><p>O resumo conclui: <b>“teríamos um exemplo de Mudança de Política Contábil Voluntária”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Mudança nas políticas contábeis — Exemplo 02</i></p>",
15:"<p>Certo — é o <b>EXEMPLO 01</b> do resumo. O <b>CPC 26, item 27</b>, exige demonstrações pelo <b>regime de competência</b>, <b>exceto a DFC</b>. Se esse item fosse alterado para impor o <b>regime de caixa</b>, <b>“teríamos um exemplo de Mudança de Política Contábil devido a uma exigência de um pronunciamento”</b>.</p><p>E o resumo rotula: <b>“Mudança de Política Contábil Involuntária”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Mudança nas políticas contábeis — Exemplo 01</i></p>",
16:"<p>Certo pela letra do <b>item 19, alínea (a)</b>: a entidade deve contabilizar a mudança resultante da <b>adoção inicial</b> de Pronunciamento, Interpretação ou Orientação <b>“de acordo com as disposições transitórias específicas, se existirem, expressas nesse Pronunciamento, Interpretação ou Orientação”</b>.</p><p>Só quando essas disposições <b>não existem</b> — ou quando a mudança é <b>voluntária</b> — é que se cai na alínea (b) e se aplica a mudança retrospectivamente.</p><p class='fb-fonte'>Resumo 04 · <i>Aplicação de mudanças de políticas contábeis — item 19</i></p>",
17:"<p>Errado na palavra-chave. O <b>item 19(b)</b> diz que, quando a entidade <b>“muda uma política contábil voluntariamente, ela deve aplicar a mudança RETROSPECTIVAMENTE”</b>.</p><p>Prospectivo é o tratamento da <b>mudança de estimativa</b> (item 36). O quadro final do resumo separa isso em duas colunas: <b>política contábil = retrospectiva</b>, <b>estimativa = prospectiva</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Aplicação de mudanças de políticas contábeis — item 19</i></p>",
18:"<p>Certo, na letra do <b>item 23</b>: <b>“uma mudança na política contábil deve ser aplicada retrospectivamente, exceto quando for impraticável determinar os efeitos específicos do período ou o efeito cumulativo da mudança”</b>.</p><p>A regra tem, portanto, <b>duas</b> hipóteses de escape, e ambas dependem de <b>impraticabilidade</b>: efeitos específicos do período <b>ou</b> efeito cumulativo.</p><p class='fb-fonte'>Resumo 04 · <i>Aplicação de mudanças de políticas contábeis — item 23</i></p>",
19:"<p>Certo — é a definição do resumo: aplicação retrospectiva <b>“é a aplicação de nova política contábil a transações, a outros eventos e a condições, como se essa política tivesse sido sempre aplicada”</b>.</p><p>Guarde a expressão <b>“como se tivesse sido sempre aplicada”</b>: é ela que obriga a refazer os períodos anteriores.</p><p class='fb-fonte'>Resumo 04 · <i>O que é aplicação retrospectiva?</i></p>",
20:"<p>Certo. É o <b>EXEMPLO</b> do resumo: em 2023 a empresa avaliava estoques pelo <b>PEPS</b>; em 2024 os contadores julgaram o <b>custo médio</b> mais fiel e mudaram o critério.</p><p>Nas palavras dele, <b>“a empresa deve refazer as demonstrações contábeis de 2023, calculando o valor dos estoques de 2023 de acordo com o custo médio e contabilizar a diferença como ajuste patrimonial”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>O que é aplicação retrospectiva? (exemplo)</i></p>",
21:"<p>Errado no destino do ajuste. O resumo é expresso: <b>“o impacto desse ajuste é lançado diretamente no Patrimônio Líquido, na conta Lucros Acumulados (Ajustes de Exercícios Anteriores → art. 186, § 1º, da lei nº 6.404/76)”</b>.</p><p>Ou seja, <b>não passa pela DRE de 2024</b>. E é por isso que, no quadro final, os efeitos da aplicação retrospectiva aparecem na <b>DMPL</b>, e não na DRE.</p><p class='fb-fonte'>Resumo 04 · <i>O que é aplicação retrospectiva? (exemplo)</i></p>",
22:"<p>Certo, e o resumo dá até o dispositivo: o impacto do ajuste vai <b>“diretamente no Patrimônio Líquido, na conta Lucros Acumulados (Ajustes de Exercícios Anteriores → art. 186, § 1º, da lei nº 6.404/76)”</b>.</p><p>O mesmo caminho aparece no exemplo do caixa de <b>R$ 500.000</b>, na parte do CPC 26: retifica-se a conta e o impacto é lançado no PL, em <b>Ajustes de Exercícios Anteriores</b>.</p><p class='fb-fonte'>Resumo 04 · <i>O que é aplicação retrospectiva? (exemplo)</i></p>",
23:"<p>Certo pela letra do <b>item 26</b>: quando aplicar a nova política retrospectivamente, a entidade <b>“deve aplicar a nova política contábil à informação comparativa para períodos anteriores tão antigos quanto for praticável”</b>.</p><p>A expressão <b>“tão antigos quanto for praticável”</b> é o limite do retorno — não se volta indefinidamente.</p><p class='fb-fonte'>Resumo 04 · <i>Aplicação de mudanças — item 26</i></p>",
24:"<p>Certo, na literalidade do item 26: a aplicação retrospectiva a um período anterior <b>“pode ser considerada não praticável se não for praticável determinar o efeito cumulativo nos montantes dos balanços de abertura e de encerramento desse período”</b>.</p><p>O exemplo do resumo é a empresa que muda o método de avaliação dos estoques mas <b>“não possuir as informações necessárias para determinar de forma confiável quais seriam esses valores corretos para períodos anteriores”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Aplicação de mudanças — item 26</i></p>",
25:"<p>Errado em <b>dois</b> pontos, e a banca costuma mexer justo nesses. O item 26 diz que o ajuste <b>“é registrado no saldo de ABERTURA de cada componente do patrimônio líquido afetado do PERÍODO ANTERIOR MAIS ANTIGO apresentado”</b>.</p><p>A assertiva trocou <b>abertura por encerramento</b> e <b>período mais antigo por período mais recente</b>. O resumo completa: <b>“geralmente, o ajuste é registrado em Lucros ou Prejuízos Acumulados”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Aplicação de mudanças — item 26</i></p>",
26:"<p>Certo, e essa ressalva é a parte que o candidato esquece. O item 26: <b>“geralmente, o ajuste é registrado em Lucros ou Prejuízos Acumulados. Contudo, o ajuste pode ser feito em outro componente do patrimônio líquido (por exemplo, para cumprir um Pronunciamento, Interpretação ou Orientação específico)”</b>.</p><p>O resumo acrescenta que <b>“qualquer outra informação sobre períodos anteriores, tal como resumos históricos de dados financeiros, é também ajustada”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Aplicação de mudanças — item 26</i></p>",
27:"<p>Certo pela letra do <b>item 32</b>: <b>“desenvolver estimativas contábeis envolve o uso de julgamentos ou pressupostos baseados na última informação disponível e confiável”</b>.</p><p>O exemplo do resumo é o do <b>valor justo de ativos imobiliários</b> que não pode ser observado diretamente no mercado: a empresa recorre a <b>avaliação de especialistas imobiliários</b> e a <b>dados de transações recentes de propriedades similares</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Estimativas — item 32</i></p>",
28:"<p>Certo. São as alíneas <b>(d)</b> e <b>(e)</b> da lista de exemplos de estimativas contábeis do item 32: <b>“despesa de depreciação para um item do ativo imobilizado, aplicando o CPC 27”</b> e <b>“uma provisão para obrigações decorrentes de garantias, aplicando o CPC 25”</b>.</p><p>A lista completa tem cinco itens: perdas de crédito esperadas (<b>CPC 48</b>) · valor líquido realizável de estoque (<b>CPC 16</b>) · valor justo de ativo ou passivo (<b>CPC 46</b>) · depreciação (<b>CPC 27</b>) · provisão para garantias (<b>CPC 25</b>).</p><p class='fb-fonte'>Resumo 04 · <i>Estimativas — exemplos do item 32</i></p>",
29:"<p>Errado — a assertiva trocou os rótulos. O <b>ajuste para perdas de crédito esperadas</b> é o <b>primeiro exemplo de ESTIMATIVA contábil</b> do item 32, alínea (a), aplicando o <b>CPC 48</b>.</p><p>Ele aparece duas vezes no resumo como estimativa: já na definição (<b>“montantes monetários sujeitos a incerteza de mensuração, como o ajuste para perdas de crédito esperadas”</b>) e depois na lista do item 32.</p><p class='fb-fonte'>Resumo 04 · <i>Estimativas — exemplos do item 32</i></p>",
30:"<p>Errado — está exatamente ao contrário da primeira frase do <b>item 35</b>: <b>“a mudança na base de avaliação é uma mudança na POLÍTICA contábil e NÃO uma mudança na estimativa contábil”</b>.</p><p>O quadro <b>NÃO CONFUNDA!</b> do resumo ilustra: ativo mensurado <b>a custo</b> que passa a <b>valor justo</b>, ou estoques do <b>PEPS</b> para o <b>custo médio ponderado</b> — tudo isso é <b>base de avaliação</b>, logo, política contábil, de aplicação <b>retrospectiva</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Estimativas — item 35 e NÃO CONFUNDA!</i></p>",
31:"<p>Errado na regra de desempate. A segunda frase do item 35 diz: <b>“quando for difícil distinguir uma mudança na política contábil de uma mudança na estimativa contábil, a mudança é tratada como mudança na ESTIMATIVA contábil”</b>.</p><p>Na dúvida, portanto, o tratamento é o <b>prospectivo</b>, com efeito na DRE — e não o retrospectivo. É uma inversão fácil de cair.</p><p class='fb-fonte'>Resumo 04 · <i>Estimativas — item 35</i></p>",
32:"<p>Certo, na letra do <b>item 36</b>: o efeito de mudança na estimativa contábil <b>“deve ser reconhecido prospectivamente, incluindo-o nos resultados do: (a) período da mudança, se a mudança afetar apenas esse período; ou (b) período da mudança e futuros períodos, se a mudança afetar todos eles”</b>.</p><p>O esquema do resumo desenha as duas pernas: afeta só um período, resultado <b>daquele</b> período; afeta todos, resultado do período da mudança <b>e</b> dos futuros.</p><p class='fb-fonte'>Resumo 04 · <i>Estimativas — item 36</i></p>",
33:"<p>Certo — é a definição do resumo: aplicação prospectiva do reconhecimento do efeito de mudança em estimativa contábil <b>“representa o reconhecimento do efeito da mudança na estimativa contábil nos períodos corrente e futuro afetados pela mudança”</b>.</p><p>Compare com a retrospectiva, no quadro <b>NÃO CONFUNDA!</b>: aquela aplica a política <b>como se sempre tivesse sido aplicada</b> (olha para trás); esta olha do <b>período corrente para a frente</b>.</p><p class='fb-fonte'>Resumo 04 · <i>O que é aplicação prospectiva?</i></p>",
34:"<p>Errado no momento do ajuste. O <b>item 37</b> diz que, se a mudança na estimativa resultar em mudanças em ativos e passivos, ou se relacionar a componente do patrimônio líquido, <b>“ela deve ser reconhecida pelo ajuste no correspondente item do ativo, do passivo ou do patrimônio líquido NO PERÍODO DA MUDANÇA”</b>.</p><p>O exemplo do resumo é a construtora com contratos de longo prazo que, na revisão de fim de ano, identifica custos totais maiores que o previsto: o ajuste nos ativos e passivos é feito <b>no período em que a mudança ocorre</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Estimativas — item 37</i></p>",
35:"<p>Certo — é o primeiro exemplo do <b>item 38</b>: <b>“a mudança em um ajuste para perdas de crédito esperadas afeta apenas os resultados do período corrente e, por isso, é reconhecida no período corrente”</b>.</p><p>Esse é o caso da alínea (a) do item 36: a mudança afeta <b>apenas esse período</b>. O efeito vai a <b>receita ou despesa na DRE</b> do período corrente.</p><p class='fb-fonte'>Resumo 04 · <i>Estimativas — item 38</i></p>",
36:"<p>Errado, e é justamente o contraste do item 38. A mudança na <b>estimativa da vida útil de ativo depreciável</b> — ou no <b>padrão esperado de consumo</b> dos futuros benefícios — <b>“afeta a depreciação do período corrente E DE CADA UM DOS FUTUROS PERÍODOS durante a vida útil remanescente do ativo”</b>.</p><p>O resumo ainda destaca num quadro: <b>“mudança de estimativa que afeta os resultados do período corrente e de períodos futuros: vida útil de ativo depreciável”</b>. Quem afeta só o corrente é o ajuste para perdas de crédito esperadas.</p><p class='fb-fonte'>Resumo 04 · <i>Estimativas — item 38</i></p>",
37:"<p>Certo — é o <b>GABARITO C</b> da questão-exemplo do resumo. O especialista independente apontou <b>mudança relevante (material) no valor contábil das patentes</b>, o que significa que <b>“a entidade deve desenvolver uma nova estimativa contábil”</b>.</p><p>E a resolução conclui: o efeito de mudança na estimativa é reconhecido <b>prospectivamente</b>, <b>“ou seja, o reconhecimento do efeito ocorrerá a partir do período corrente (atual)”</b>. O valor contábil do intangível é impactado pela <b>vida útil</b>, pelo <b>método de amortização</b> ou pelos <b>valores residuais</b>, ou ambos.</p><p class='fb-fonte'>Resumo 04 · <i>Questão-exemplo (Cia Bons Tempos)</i></p>",
38:"<p>Errado — é a alternativa (d) que o resumo descarta. Reapresentar demonstrações de exercício anterior é o tratamento do <b>erro</b> (item 43) ou da <b>mudança de política</b> (item 23), ambos <b>retrospectivos</b>.</p><p>Aqui o caso é de <b>mudança de estimativa</b>, de reconhecimento <b>prospectivo</b>: <b>“a empresa deverá alterar o valor contábil de suas patentes a partir do exercício corrente”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Questão-exemplo (Cia Bons Tempos)</i></p>",
39:"<p>Certo pela letra do <b>item 41</b>: <b>“erros podem ocorrer no registro, na mensuração, na apresentação ou na divulgação de elementos de demonstrações contábeis”</b>.</p><p>São <b>quatro</b> momentos, e o comentário do resumo repete a lista — é o tipo de enumeração de que a banca subtrai um item para ver se você nota.</p><p class='fb-fonte'>Resumo 04 · <i>Retificação de erro — item 41</i></p>",
40:"<p>Errado. O item 41 é expresso: as demonstrações <b>“não estarão em conformidade com os Pronunciamentos, Interpretações e Orientações deste CPC se contiverem erros materiais OU ERROS IMATERIAIS COMETIDOS INTENCIONALMENTE para alcançar determinada apresentação da posição patrimonial e financeira, do desempenho ou dos fluxos de caixa da entidade”</b>.</p><p>Ou seja: irrelevância <b>não</b> salva o erro feito de propósito. A intenção contamina a conformidade.</p><p class='fb-fonte'>Resumo 04 · <i>Retificação de erro — item 41</i></p>",
41:"<p>Certo — é o critério do <b>COMENTÁRIO</b> do resumo: <b>“erros materiais são aqueles que, se corrigidos, podem afetar significativamente as decisões econômicas dos usuários das demonstrações contábeis”</b>.</p><p>E, por contraste, <b>“os erros imateriais são aqueles que, se corrigidos, não afetam significativamente as decisões econômicas dos usuários”</b>. O resumo chama os primeiros de <b>relevantes</b> e os segundos de <b>irrelevantes</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Retificação de erro — erros materiais e imateriais</i></p>",
42:"<p>Certo, na literalidade do item 41: <b>“os potenciais erros do período corrente descobertos nesse período devem ser corrigidos antes de as demonstrações contábeis serem autorizadas para publicação”</b>.</p><p>Guarde o marco: <b>autorização para publicação</b>. Erro do ano, descoberto no ano, se corrige antes de a demonstração sair.</p><p class='fb-fonte'>Resumo 04 · <i>Retificação de erro — item 41</i></p>",
43:"<p>Certo — é a segunda parte do item 41: <b>“os erros materiais, por vezes, não são descobertos até um período subsequente, e esses erros de períodos anteriores são corrigidos na informação comparativa apresentada nas demonstrações contábeis desse período subsequente”</b>.</p><p>O exemplo do resumo: receita reconhecida a mais de <b>R$ 100.000</b> em <b>2022</b>, descoberta em <b>2023</b>; ajustam-se as demonstrações de 2022, revertendo a receita, <b>“alterando o resultado líquido e o patrimônio líquido da empresa nesse período”</b>, e a comparativa de 2023 sai corrigida.</p><p class='fb-fonte'>Resumo 04 · <i>Retificação de erro — item 41 (exemplo)</i></p>",
44:"<p>Certo pelo <b>item 05</b>: erros de períodos anteriores decorrem da falta de uso, ou uso incorreto, de informação confiável que <b>“(a) estava disponível quando da autorização para divulgação das demonstrações contábeis desses períodos; e (b) pudesse ter sido razoavelmente obtida e levada em consideração na elaboração e na apresentação dessas demonstrações contábeis”</b>.</p><p>As duas condições são <b>cumulativas</b> — note o <b>“e”</b> entre elas.</p><p class='fb-fonte'>Resumo 04 · <i>O que são erros de períodos anteriores? — item 05</i></p>",
45:"<p>Errado. A lista do item 05 termina justamente nelas: os erros de períodos anteriores incluem os efeitos de <b>erros matemáticos</b>, <b>erros na aplicação de políticas contábeis</b>, <b>descuidos</b>, <b>interpretações incorretas de fatos</b> e <b>FRAUDES</b>.</p><p>A intencionalidade não retira o fato do campo do erro — coerente com o item 41, que também alcança o <b>erro imaterial cometido intencionalmente</b>.</p><p class='fb-fonte'>Resumo 04 · <i>O que são erros de períodos anteriores? — item 05</i></p>",
46:"<p>Certo — são quatro dos cinco efeitos listados pelo resumo: <b>erros matemáticos</b> · <b>erros na aplicação de políticas contábeis</b> · <b>descuidos</b> · <b>interpretações incorretas de fatos</b> · e <b>fraudes</b>.</p><p>Vale memorizar a lista inteira, porque a banca costuma cobrá-la por subtração — tirando <b>fraudes</b>, que é o item mais atacado.</p><p class='fb-fonte'>Resumo 04 · <i>O que são erros de períodos anteriores? — item 05</i></p>",
47:"<p>Certo, na letra do <b>item 43</b>: <b>“um erro de período anterior deve ser corrigido por reapresentação retrospectiva, salvo quando for impraticável determinar os efeitos específicos do período ou o efeito cumulativo do erro”</b>.</p><p>Repare no paralelo com o item 23: mesma estrutura de <b>regra + exceção por impraticabilidade</b>. O que muda é o nome — na política é <b>aplicação</b> retrospectiva; no erro é <b>reapresentação</b> retrospectiva.</p><p class='fb-fonte'>Resumo 04 · <i>Limitação à reapresentação retrospectiva — item 43</i></p>",
48:"<p>Certo — é a definição do resumo: reapresentação retrospectiva <b>“é a correção do reconhecimento, da mensuração e da divulgação de valores de elementos das demonstrações contábeis, como se um erro de períodos anteriores nunca tivesse ocorrido”</b>.</p><p>São <b>três</b> planos corrigidos — <b>reconhecimento</b>, <b>mensuração</b> e <b>divulgação</b> — e o efeito é apagar o erro como se ele <b>nunca</b> houvesse existido.</p><p class='fb-fonte'>Resumo 04 · <i>O que é reapresentação retrospectiva?</i></p>",
49:"<p>Certo. É o <b>EXEMPLO</b> do resumo, com estes números: em <b>31/12/2023</b> a <b>Cia. ABC</b> reconhecia por <b>R$ 50.000</b> softwares comprados de terceiros por <b>R$ 30.000</b>, avaliados a <b>valor justo</b>.</p><p>Mas o <b>CPC 04 (intangível), item 24</b>, dispõe que o ativo intangível <b>“deve ser reconhecido inicialmente ao custo”</b> — logo, é caso de <b>erro</b>. Pelo <b>CPC 23, item 43</b>, corrige-se por reapresentação retrospectiva: <b>“a empresa ABC deverá refazer o balanço patrimonial do ano anterior”</b>.</p><p class='fb-fonte'>Resumo 04 · <i>O que é reapresentação retrospectiva? (exemplo)</i></p>",
50:"<p>Certo — são as <b>cinco</b> divulgações do <b>item 49</b>, na ordem do resumo: a <b>natureza do erro</b> do período anterior · o <b>montante da retificação para cada período anterior apresentado anteriormente</b> · o <b>montante da retificação no início do período anterior mais antigo apresentado</b> · as <b>circunstâncias que levaram à existência dessa condição</b> · e uma <b>descrição de como e desde quando o erro foi corrigido</b>.</p><p>O exemplo do resumo é o erro no cálculo da <b>depreciação</b> de um imobilizado em <b>2021</b>, constatado no balanço de <b>31/12/2023</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Divulgação de erro de período anterior — item 49</i></p>",
51:"<p>Errado na demonstração. Pelo <b>CPC 26, item 106(b)</b>, a <b>DMPL</b> inclui, para cada componente do patrimônio líquido, <b>“os efeitos da aplicação retrospectiva ou da reapresentação retrospectiva, reconhecidos de acordo com o Pronunciamento Técnico CPC 23”</b>.</p><p>O exemplo do resumo fecha a ideia: caixa de <b>R$ 500.000</b> em 2023, e em 2024 constata-se que a compra de estoques não havia sido contabilizada; retifica-se o caixa e o impacto vai ao PL, em <b>Ajustes de Exercícios Anteriores</b> (art. 186, § 1º), entrando na <b>DMPL</b>.</p><p>No quadro final: <b>DMPL</b> recebe política contábil e retificação de erros; a <b>DRE</b> recebe apenas a <b>mudança de estimativas</b>.</p><p class='fb-fonte'>Resumo 04 · <i>Item pertinente do CPC 26 — item 106 e quadro final</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"04", nome:"CPC 23 — políticas contábeis, mudança de estimativa e retificação de erro", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
