/* Contabilidade Geral — Módulo 06: Depreciação, amortização e exaustão (CPC 27) (modo direto) */
window.MOD = window.MOD || {};
window.MOD.contab06 = (function(){
"use strict";

var CARDS = [
  ["Quais as três contas em que a Lei 6.404/76 registra a diminuição do valor do imobilizado e do intangível?","<b>Depreciação</b>, <b>amortização</b> e <b>exaustão</b> — art. 183, <b>§2º</b>, registradas <b>periodicamente</b>."],
  ["Conceito legal de DEPRECIAÇÃO","Perda do valor dos direitos que têm por objeto <b>bens físicos</b> sujeitos a <b>desgaste por uso</b>, <b>ação da natureza</b> ou <b>obsolescência</b>."],
  ["Conceito legal de AMORTIZAÇÃO","Perda do valor do <b>capital aplicado na aquisição de direitos</b> da propriedade <b>industrial ou comercial</b> e quaisquer outros com <b>existência ou exercício de duração limitada</b>, ou cujo objeto sejam bens de utilização por <b>prazo legal ou contratualmente limitado</b>."],
  ["Conceito legal de EXAUSTÃO","Perda do valor, <b>decorrente da sua exploração</b>, de direitos cujo objeto sejam <b>recursos minerais ou florestais</b>, ou <b>bens aplicados nessa exploração</b>."],
  ["Qual o objeto de cada uma das três contas?","<b>Depreciação</b> → bens físicos (<b>Ativo Imobilizado</b>) · <b>Amortização</b> → aquisição de direitos (<b>Ativo Intangível</b>) · <b>Exaustão</b> → <b>recursos minerais ou florestais</b>, ou bens aplicados nessa exploração."],
  ["Definição de depreciação no CPC 27","É a <b>despesa decorrente do desgaste de ativo imobilizado</b> pelo <b>uso</b> ou <b>ação da natureza</b>."],
  ["Quando a entidade DEVE depreciar componentes separadamente?","Quando os componentes do item tiverem <b>custo significativo em relação ao custo total</b> do item — é <b>obrigatório</b> alocar o valor reconhecido aos componentes significativos e depreciá-los separadamente."],
  ["Exemplo do resumo de depreciação por componentes","A <b>estrutura</b> e os <b>motores</b> de uma <b>aeronave</b>: podem ser depreciados separadamente porque têm <b>custo significativo</b> em relação ao custo total."],
  ["E os componentes SEM custo significativo?","A entidade <b>PODE</b> (é <b>facultativo</b>) escolher depreciá-los separadamente."],
  ["Onde a depreciação do período é normalmente reconhecida?","<b>No resultado</b> — é a regra."],
  ["Quando a depreciação NÃO vai para o resultado?","Quando os <b>benefícios econômicos futuros</b> do ativo são <b>absorvidos para a produção de outros ativos</b>: aí a depreciação <b>faz parte do custo do outro ativo</b> e é incluída no seu <b>valor contábil</b>."],
  ["Dois exemplos dessa exceção","A depreciação de <b>máquinas e equipamentos de produção</b> entra nos <b>custos de produção de estoque</b>; a de imobilizado usado em <b>atividades de desenvolvimento</b> pode entrar no <b>custo de ativo intangível</b> (CPC 04)."],

  ["Fórmula do valor depreciável","<b>VALOR DEPRECIÁVEL = CUSTO − VALOR RESIDUAL</b> — determina-se <b>após a dedução</b> do valor residual."],
  ["O que é valor residual?","O valor do bem que <b>não sofre depreciação</b>, sendo, consequentemente, o <b>valor do ativo imobilizado ao final da sua vida útil</b>."],
  ["Equipamento custou R$ 100.000 e a entidade espera vendê-lo por R$ 30.000 ao final da vida útil. Qual o valor depreciável?","<b>100.000 − 30.000 = R$ 70.000</b>."],
  ["Com que frequência se revisam valor residual e vida útil?","O valor depreciável é apropriado de forma <b>sistemática</b> ao longo da vida útil estimada; residual e vida útil são revisados <b>pelo menos ao final de cada exercício</b>, e a mudança é contabilizada como <b>mudança de estimativa contábil</b>."],
  ["O que diz o item 54 do CPC 27 sobre o valor residual?","O valor residual <b>pode aumentar</b>. A despesa de depreciação será <b>ZERO</b> enquanto o valor residual subsequente for <b>igual ou superior ao valor contábil</b> do ativo."],
  ["Quando a depreciação SE INICIA?","Quando o ativo está <b>disponível para uso</b> — isto é, no <b>local</b> e em <b>condição de funcionamento</b> na forma <b>pretendida pela administração</b>."],
  ["Quando a depreciação CESSA?","Na data em que o ativo é <b>classificado como mantido para venda</b> ou na data em que é <b>baixado</b> — <b>o que ocorrer primeiro</b>."],
  ["A depreciação cessa se o ativo fica ocioso?","<b>NÃO.</b> Não cessa quando o ativo se torna <b>ocioso</b> ou é <b>retirado do uso normal</b>, a não ser que esteja <b>totalmente depreciado</b>."],
  ["E nos métodos de depreciação pelo uso?","A despesa de depreciação <b>pode ser zero</b> enquanto <b>não houver produção</b>."],
  ["As duas definições de VIDA ÚTIL","É o <b>período de tempo</b> durante o qual a entidade espera utilizar o ativo; <b>OU</b> o <b>número de unidades de produção</b> (ou semelhantes) que espera obter pela utilização do ativo."],
  ["Vida útil pode ser menor que a vida econômica?","<b>Sim.</b> A política de <b>gestão de ativos</b> pode prever a <b>alienação</b> do bem após período determinado — por isso a vida útil pode ser <b>menor</b> que a vida econômica."],
  ["Como se estima a vida útil?","É <b>questão de julgamento</b>, baseado na <b>experiência da entidade com ativos semelhantes</b>."],
  ["Terrenos e edifícios adquiridos juntos: um ativo só?","Não. São <b>ativos separáveis</b> e <b>contabilizados separadamente</b>, <b>mesmo quando adquiridos conjuntamente</b>."],
  ["Terrenos são depreciados?","<b>Não</b> — têm <b>vida útil ilimitada</b>. <b>Exceções:</b> as <b>pedreiras</b> e os <b>locais usados como aterro</b>."],
  ["E os edifícios?","Têm <b>vida útil limitada</b> e, por isso, <b>são ativos depreciáveis</b>."],
  ["O terreno se valoriza. O que acontece com o edifício construído sobre ele?","<b>Nada.</b> O aumento de valor do terreno <b>não afeta o valor contábil do edifício</b>."],
  ["Quadro ATENÇÃO: quando parte do custo de um TERRENO é depreciada?","Quando o custo do terreno inclui custos de <b>desmontagem, remoção e restauração do local</b>: essa <b>porção</b> do valor contábil é <b>depreciada</b> durante o <b>período de benefícios</b> obtidos ao incorrer nesses custos."],

  ["Como se escolhe o método de depreciação?","O método deve <b>melhor refletir o padrão do consumo dos benefícios econômicos futuros</b> esperados incorporados no ativo, e é aplicado <b>consistentemente entre períodos</b>, salvo <b>alteração no padrão do consumo</b>."],
  ["O método de depreciação é revisado?","<b>Sim, pelo menos ao final de cada exercício.</b> Havendo <b>alteração significativa no padrão de consumo</b>, o método deve ser alterado, e a mudança é registrada como <b>mudança na estimativa contábil</b>."],
  ["Quais os três métodos citados pelo CPC 27 e seus outros nomes?","<b>Linha reta</b> (método <b>linear</b>) · <b>Saldos decrescentes</b> (método <b>Cole</b>) · <b>Unidades produzidas</b> (método do <b>benefício gerado</b>)."],
  ["Método da LINHA RETA — despesa e fórmula","A despesa é <b>constante (linear)</b> ao longo da vida útil estimada. <b>Depreciação Anual = Valor Depreciável / Vida útil</b>."],
  ["Método COLE (saldos decrescentes) — como se acham as taxas de um bem com 5 anos de vida útil?","A despesa é <b>decrescente</b> (maior no início). Soma-se os algarismos do tempo de vida útil: <b>1+2+3+4+5 = 15</b> (denominador). Taxas: <b>5/15, 4/15, 3/15, 2/15, 1/15</b>."],
  ["Valor depreciável de R$ 100.000, vida útil de 5 anos, método Cole: as cinco despesas","<b>1º:</b> 100.000 × 5/15 = <b>33.333,33</b> · <b>2º:</b> × 4/15 = <b>26.666,66</b> · <b>3º:</b> × 3/15 = <b>20.000,00</b> · <b>4º:</b> × 2/15 = <b>13.333,33</b> · <b>5º:</b> × 1/15 = <b>6.666,66</b>."],
  ["Método das UNIDADES PRODUZIDAS — como achar a taxa?","Divide-se a <b>quantidade de unidades produzidas no período</b> pela <b>quantidade estimada total para a vida útil</b> do bem."],
  ["Máquina de canetas: custo 220.000, residual 20.000, produção estimada de 1.000.000; produzidas 70.000 (2015), 100.000 (2016) e 250.000 (2017). Depreciação acumulada em 31/12/2017?","<b>(220.000 − 20.000) × (420.000/1.000.000) = 200.000 × 0,42 = R$ 84.000</b>."],
  ["Como se mensura o CUSTO DO IMOBILIZADO no reconhecimento?","<b>Preço de compra</b> + <b>tributos</b> (exceto os <b>recuperáveis</b>) + <b>custos diretamente atribuíveis</b> para colocar o ativo no local em condições de funcionamento + <b>estimativa dos custos de remoção e de restauração do local</b>; depois <b>deduzem-se</b> os <b>descontos comerciais (incondicionais)</b> e os <b>abatimentos</b>."],
  ["Exemplos de custos DIRETAMENTE ATRIBUÍVEIS ao imobilizado","<b>Benefícios aos empregados</b> decorrentes do imobilizado · <b>preparação do local</b> · <b>frete e manuseio</b> (por conta do comprador) · <b>instalação e montagem</b> · <b>testes</b> de funcionamento · <b>honorários profissionais</b>."],
  ["Exemplos de custos que NÃO são atribuíveis ao imobilizado","<b>Abertura de nova instalação</b> · <b>introdução de novo produto ou serviço</b> · <b>propaganda e atividades promocionais</b> · <b>transferência das atividades para novo local</b> ou para <b>nova categoria de clientes</b> · <b>treinamento</b> · <b>administrativos e outros indiretos</b>."]
];

var QS = [
  ["A diminuição do valor dos ativos imobilizado e intangível será registrada periodicamente nas contas de depreciação, amortização e exaustão.","C","Lei 6.404, art. 183, §2º","As três contas do §2º."],
  ["A depreciação corresponde à perda do valor dos direitos que têm por objeto bens físicos sujeitos a desgaste por uso, ação da natureza ou obsolescência.","C","CEBRASPE","Conceito legal."],
  ["A amortização corresponde à perda do valor, decorrente da sua exploração, de direitos cujo objeto sejam recursos minerais ou florestais.","E","FCC","Esse é o conceito de <b>exaustão</b>."],
  ["A exaustão corresponde à perda do valor do capital aplicado na aquisição de direitos da propriedade industrial ou comercial.","E","FGV","Esse é o conceito de <b>amortização</b>."],
  ["A amortização tem por objeto a aquisição de direitos, relacionando-se ao ativo intangível.","C","VUNESP","Quadro do resumo."],
  ["A exaustão tem por objeto recursos minerais ou florestais, ou bens aplicados nessa exploração.","C","CEBRASPE","Quadro do resumo."],
  ["Depreciação é a despesa decorrente do desgaste de ativo imobilizado pelo uso ou ação da natureza.","C","CPC 27","Definição do resumo."],
  ["Cada componente de um item do ativo imobilizado com custo significativo em relação ao custo total do item deve ser depreciado separadamente.","C","FCC","Obrigatório."],
  ["A entidade é obrigada a depreciar separadamente os componentes de um item que não tenham custo significativo em relação ao custo total do item.","E","FGV","Nesse caso é <b>facultativo</b> — pode, não deve."],
  ["Pode ser adequado depreciar separadamente a estrutura e os motores de uma aeronave, já que esses componentes possuem custo significativo em relação ao custo total.","C","VUNESP","Exemplo do resumo."],
  ["A depreciação do período deve ser normalmente reconhecida no resultado.","C","CEBRASPE","Regra geral."],
  ["A depreciação do período deve sempre ser reconhecida no resultado, sendo vedada sua inclusão no valor contábil de outro ativo.","E","FCC","Quando os benefícios são absorvidos na produção de outro ativo, ela integra o <b>custo desse ativo</b>."],
  ["A depreciação de máquinas e equipamentos de produção é incluída nos custos de produção de estoque.","C","FGV","Exemplo do resumo."],
  ["A depreciação de ativos imobilizados usados para atividades de desenvolvimento pode ser incluída no custo de um ativo intangível reconhecido de acordo com o CPC 04.","C","VUNESP","Exemplo do resumo."],
  ["O valor depreciável de um ativo é determinado após a dedução de seu valor residual.","C","CEBRASPE","Valor depreciável = custo − residual."],
  ["Valor residual é o valor do bem que não sofre depreciação, sendo o valor do ativo imobilizado ao final da sua vida útil.","C","FCC","Definição do resumo."],
  ["Equipamento adquirido pelo custo de R$ 100.000, que a entidade espera vender ao final da vida útil por R$ 30.000, tem valor depreciável de R$ 100.000.","E","FGV","O depreciável é <b>70.000</b> — deduz-se o residual."],
  ["No mesmo exemplo, o valor depreciável do equipamento é de R$ 70.000.","C","VUNESP","100.000 − 30.000."],
  ["O valor residual e a vida útil de um ativo são revisados pelo menos ao final de cada exercício.","C","CEBRASPE","Exigência do CPC 27."],
  ["Se as expectativas de valor residual e de vida útil diferirem das estimativas anteriores, a mudança deve ser contabilizada como retificação de erro de exercícios anteriores.","E","FCC","É <b>mudança de estimativa contábil</b>."],
  ["O valor residual de um ativo pode aumentar, e a despesa de depreciação será zero enquanto o valor residual subsequente for igual ou superior ao seu valor contábil.","C","CPC 27, item 54","Literalidade do item 54."],
  ["A depreciação do ativo se inicia na data da aquisição, ainda que o bem não esteja em condição de funcionamento.","E","FGV","Inicia quando o ativo está <b>disponível para uso</b>."],
  ["A depreciação do ativo se inicia quando este está disponível para uso, ou seja, quando está no local e em condição de funcionamento na forma pretendida pela administração.","C","VUNESP","Marco inicial."],
  ["A depreciação de um ativo deve cessar na data em que ele é classificado como mantido para venda ou na data em que é baixado, o que ocorrer primeiro.","C","CEBRASPE","Marco final."],
  ["A depreciação cessa quando o ativo se torna ocioso ou é retirado do uso normal.","E","FCC","Quadro ATENÇÃO: <b>não cessa</b>, salvo se o ativo estiver totalmente depreciado."],
  ["De acordo com os métodos de depreciação pelo uso, a despesa de depreciação pode ser zero enquanto não houver produção.","C","FGV","Ressalva do resumo."],
  ["Vida útil é o período de tempo durante o qual a entidade espera utilizar o ativo ou o número de unidades de produção que espera obter pela utilização do ativo.","C","VUNESP","As duas definições."],
  ["A vida útil de um ativo é necessariamente igual à sua vida econômica.","E","CEBRASPE","Pode ser <b>menor</b>, porque a política de gestão de ativos pode prever alienação antes do fim da vida econômica."],
  ["A estimativa da vida útil do ativo é uma questão de julgamento baseado na experiência da entidade com ativos semelhantes.","C","FCC","Literalidade do resumo."],
  ["Terrenos e edifícios são ativos separáveis e são contabilizados separadamente, mesmo quando sejam adquiridos conjuntamente.","C","FGV","Regra do CPC 27."],
  ["Os terrenos têm vida útil ilimitada e, por isso, não são depreciados, sem qualquer exceção.","E","VUNESP","Há exceções: <b>pedreiras</b> e <b>locais usados como aterro</b>."],
  ["Pedreiras e locais usados como aterro são exceções à regra de que os terrenos não são depreciados.","C","CEBRASPE","As duas exceções do resumo."],
  ["Os edifícios têm vida útil limitada e, por isso, são ativos depreciáveis.","C","FCC","Contraponto do terreno."],
  ["O aumento de valor de um terreno no qual um edifício esteja construído aumenta o valor contábil do edifício.","E","FGV","<b>Não afeta</b> o valor contábil do edifício."],
  ["Se o custo do terreno incluir custos de desmontagem, remoção e restauração do local, essa porção do valor contábil do terreno é depreciada durante o período de benefícios obtidos ao incorrer nesses custos.","C","CPC 27","Quadro ATENÇÃO do resumo."],
  ["A entidade seleciona o método de depreciação que melhor reflita o padrão do consumo dos benefícios econômicos futuros esperados incorporados no ativo.","C","VUNESP","Critério de escolha."],
  ["O método de depreciação deve ser alterado a cada exercício, de modo a distribuir a despesa entre os métodos admitidos pelo CPC 27.","E","CEBRASPE","O método é aplicado <b>consistentemente</b>; só muda se mudar o padrão de consumo."],
  ["O método de depreciação aplicado a um ativo deve ser revisado pelo menos ao final de cada exercício e, havendo alteração significativa no padrão de consumo previsto, deve ser alterado, registrando-se a mudança como mudança na estimativa contábil.","C","FCC","Revisão do método."],
  ["No método da linha reta a despesa com depreciação é constante ao longo da vida útil estimada, e a depreciação anual corresponde ao valor depreciável dividido pela vida útil.","C","FGV","Fórmula do método linear."],
  ["No método dos saldos decrescentes, também chamado método Cole, a despesa com depreciação é crescente ao longo da vida útil do bem.","E","VUNESP","É <b>decrescente</b> — maiores despesas no início."],
  ["Para um ativo com vida útil de cinco anos, o denominador das taxas no método Cole é 15, e a taxa de depreciação do primeiro ano é de 5/15.","C","CEBRASPE","1+2+3+4+5 = 15."],
  ["Com valor depreciável de R$ 100.000 e vida útil de cinco anos, a despesa de depreciação do terceiro ano pelo método Cole é de R$ 20.000,00.","C","FCC","100.000 × 3/15."],
  ["No mesmo caso, a despesa de depreciação do primeiro ano pelo método Cole é de R$ 6.666,66.","E","FGV","6.666,66 é a despesa do <b>5º</b> ano; a do 1º é 33.333,33."],
  ["No método das unidades produzidas, a taxa de depreciação do período é obtida dividindo-se a quantidade de unidades produzidas no período pela quantidade estimada total para a vida útil do bem.","C","VUNESP","Cálculo da taxa."],
  ["Máquina comprada em 01/06/2015 por R$ 220.000, com valor residual estimado em R$ 20.000 e produção total estimada de 1.000.000 de canetas, tendo produzido 70.000 em 2015, 100.000 em 2016 e 250.000 em 2017: pelo método do benefício gerado, a depreciação acumulada em 31/12/2017 é de R$ 84.000,00.","C","CEBRASPE","200.000 × 420/1.000."],
  ["No mesmo exemplo, a depreciação acumulada em 31/12/2017 é de R$ 92.400,00.","E","FCC","92.400 sai de 220.000 × 0,42 — esqueceu de deduzir o residual."],
  ["O custo do imobilizado compreende o preço de compra e os tributos, inclusive os recuperáveis.","E","FGV","Os tributos <b>recuperáveis</b> ficam de fora."],
  ["Integram o custo do imobilizado quaisquer custos diretamente atribuíveis para colocar o ativo no local e em condições de funcionamento.","C","VUNESP","Componente do custo."],
  ["A estimativa dos custos de remoção do item e de restauração do local, ao final da vida útil, integra o custo do imobilizado.","C","CEBRASPE","Componente do custo."],
  ["Os descontos comerciais incondicionais e os abatimentos são somados ao custo do imobilizado.","E","FCC","São <b>deduzidos</b>."],
  ["Custos de frete e de manuseio por conta do comprador, de instalação e montagem e de testes para verificar se o ativo funciona corretamente são exemplos de custos diretamente atribuíveis ao imobilizado.","C","FGV","Lista do resumo."],
  ["Custos de treinamento e custos com propaganda e atividades promocionais são custos diretamente atribuíveis ao ativo imobilizado.","E","VUNESP","Estão na lista dos que <b>não</b> são atribuíveis."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Depreciação, amortização e exaustão — e a depreciação do CPC 27",
      '<div class="box"><span class="bl">Art. 183, §2º, da Lei 6.404/76</span>'+
      '<p>A <b>diminuição do valor</b> dos ativos <b>imobilizado</b> e <b>intangível</b> é registrada <b>periodicamente</b> em três contas:</p>'+
      '<p><b>DEPRECIAÇÃO:</b> perda do valor dos direitos que têm por objeto <b>bens físicos</b> sujeitos a <b>desgaste por uso</b>, <b>ação da natureza</b> ou <b>obsolescência</b>.</p>'+
      '<p><b>AMORTIZAÇÃO:</b> perda do valor do <b>capital aplicado na aquisição de direitos</b> da propriedade industrial ou comercial e quaisquer outros com <b>existência ou exercício de duração limitada</b>, ou cujo objeto sejam bens de utilização por <b>prazo legal ou contratualmente limitado</b>.</p>'+
      '<p><b>EXAUSTÃO:</b> perda do valor, <b>decorrente da sua exploração</b>, de direitos cujo objeto sejam <b>recursos minerais ou florestais</b>, ou bens aplicados nessa exploração.</p></div>'+
      '<div class="box tip"><span class="bl">O quadro que resolve metade das questões</span>'+
      '<div class="chips"><span class="chip">Depreciação → bens físicos (Imobilizado)</span><span class="chip">Amortização → aquisição de direitos (Intangível)</span><span class="chip">Exaustão → recursos minerais ou florestais</span></div>'+
      '<p>A banca troca as três definições de lugar. Fixe pelo <b>objeto</b>: bem físico, direito adquirido, recurso explorado.</p></div>'+
      '<div class="box"><span class="bl">Depreciação no CPC 27</span>'+
      '<p>É a <b>despesa decorrente do desgaste de ativo imobilizado pelo uso ou ação da natureza</b>.</p></div>'+
      '<div class="box trap"><span class="bl">ATENÇÃO — depreciação por componentes</span>'+
      '<p>Cada componente com <b>custo significativo</b> em relação ao custo total do item <b>DEVE</b> ser depreciado separadamente: a entidade aloca o valor inicialmente reconhecido aos componentes significativos.</p>'+
      '<p>Componentes <b>sem</b> custo significativo: a entidade <b>PODE</b> (facultativo) depreciá-los separadamente.</p>'+
      '<p><b>Exemplo do resumo:</b> depreciar separadamente a <b>estrutura</b> e os <b>motores</b> de uma <b>aeronave</b>.</p>'+
      '<p class="mn"><em>Significativo = DEVE · Não significativo = PODE</em></p></div>'+
      '<div class="box"><span class="bl">Resultado ou custo de outro ativo?</span>'+
      '<p>A depreciação do período é <b>normalmente reconhecida no resultado</b>. Mas, se os benefícios econômicos futuros do ativo são <b>absorvidos para a produção de outros ativos</b>, a depreciação <b>faz parte do custo do outro ativo</b> e é incluída no seu <b>valor contábil</b>.</p>'+
      '<p><b>Exemplos:</b> a depreciação de <b>máquinas e equipamentos de produção</b> entra nos <b>custos de produção de estoque</b>; a de imobilizado usado em <b>atividades de desenvolvimento</b> pode entrar no <b>custo de um intangível</b> (CPC 04).</p></div>')
  ],
  V2:[
    sl("Valor depreciável, período de depreciação, vida útil e terrenos",
      '<div class="box"><span class="bl">Valor depreciável</span>'+
      '<p class="mn"><em>VALOR DEPRECIÁVEL = CUSTO − VALOR RESIDUAL</em></p>'+
      '<p><b>Valor residual</b> é o valor do bem que <b>não sofre depreciação</b> — o valor do imobilizado <b>ao final da sua vida útil</b>.</p>'+
      '<p><b>Exemplo do resumo:</b> equipamento de custo <b>R$ 100.000</b> que se espera vender por <b>R$ 30.000</b> ao final da vida útil → valor depreciável de <b>R$ 70.000</b>.</p>'+
      '<p>O valor depreciável é apropriado de forma <b>sistemática</b> ao longo da vida útil estimada. <b>Residual e vida útil</b> são revisados <b>pelo menos ao final de cada exercício</b>; a alteração é <b>mudança de estimativa contábil</b>.</p></div>'+
      '<div class="box trap"><span class="bl">ATENÇÃO — CPC 27, item 54</span>'+
      '<p>O valor residual <b>pode aumentar</b>. A despesa de depreciação será <b>ZERO</b> enquanto o valor residual subsequente for <b>igual ou superior ao valor contábil</b> do ativo.</p></div>'+
      '<div class="box"><span class="bl">Início e fim da depreciação</span>'+
      '<div class="tree"><div class="leaf"><b>INÍCIO:</b> quando o imobilizado estiver <b>disponível para uso</b> — no <b>local</b> e em <b>condição de funcionamento</b> na forma pretendida pela administração.</div>'+
      '<div class="leaf"><b>FIM:</b> quando o imobilizado é <b>classificado como mantido para venda</b> ou é <b>baixado</b> — <b>o que ocorrer primeiro</b>.</div></div>'+
      '<p><b>ATENÇÃO:</b> a depreciação <b>não cessa</b> quando o ativo se torna <b>ocioso</b> ou é <b>retirado do uso normal</b>, a não ser que esteja <b>totalmente depreciado</b>. Já nos <b>métodos pelo uso</b>, a despesa <b>pode ser zero</b> enquanto não houver produção.</p></div>'+
      '<div class="box"><span class="bl">Vida útil</span>'+
      '<p>É o <b>período de tempo</b> durante o qual a entidade espera utilizar o ativo; <b>OU</b> o <b>número de unidades de produção</b> (ou semelhantes) que espera obter pela sua utilização.</p>'+
      '<p>A política de <b>gestão de ativos</b> pode prever <b>alienação</b> após período determinado — por isso a vida útil <b>pode ser menor que a vida econômica</b>. A estimativa é <b>questão de julgamento</b>, baseada na <b>experiência da entidade com ativos semelhantes</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Terrenos × edifícios</span>'+
      '<p>São <b>ativos separáveis</b>, contabilizados <b>separadamente</b>, <b>mesmo quando adquiridos conjuntamente</b>.</p>'+
      '<p><b>TERRENOS:</b> vida útil <b>ilimitada</b> → <b>não</b> são depreciados. <b>Exceções:</b> <b>pedreiras</b> e <b>locais usados como aterro</b>.</p>'+
      '<p><b>EDIFÍCIOS:</b> vida útil <b>limitada</b> → <b>são</b> depreciados.</p>'+
      '<p>O <b>aumento de valor do terreno</b> onde o edifício está construído <b>não afeta</b> o valor contábil do edifício.</p></div>'+
      '<div class="box trap"><span class="bl">ATENÇÃO — a parte do terreno que deprecia</span>'+
      '<p>Se o custo do terreno incluir custos de <b>desmontagem, remoção e restauração do local</b>, essa <b>porção</b> do valor contábil do terreno <b>é depreciada</b> durante o <b>período de benefícios</b> obtidos ao incorrer nesses custos.</p></div>')
  ],
  V3:[
    sl("Os três métodos e a mensuração do custo no reconhecimento",
      '<div class="box"><span class="bl">Escolha e revisão do método</span>'+
      '<p>A entidade seleciona o método que <b>melhor reflita o padrão do consumo dos benefícios econômicos futuros</b> esperados incorporados no ativo, aplicando-o <b>consistentemente entre períodos</b>, salvo <b>alteração no padrão do consumo</b>.</p>'+
      '<p>O método é <b>revisado pelo menos ao final de cada exercício</b>; havendo <b>alteração significativa</b> no padrão de consumo previsto, o método é alterado e a mudança é registrada como <b>mudança na estimativa contábil</b>.</p>'+
      '<div class="chips"><span class="chip">Linha reta = linear</span><span class="chip">Saldos decrescentes = Cole</span><span class="chip">Unidades produzidas = benefício gerado</span></div></div>'+
      '<div class="box"><span class="bl">Método da linha reta (linear)</span>'+
      '<p>Despesa <b>constante</b> ao longo da vida útil estimada.</p>'+
      '<p class="mn"><em>Depreciação Anual = Valor Depreciável / Vida útil</em></p></div>'+
      '<div class="box"><span class="bl">Método dos saldos decrescentes (Cole)</span>'+
      '<p>Despesa <b>decrescente</b> — <b>maiores despesas no início</b> da vida útil.</p>'+
      '<p>Vida útil de <b>5 anos</b>: somam-se os algarismos do tempo de vida útil — <b>1 + 2 + 3 + 4 + 5 = 15</b>, denominador de todas as taxas. Taxas: <b>5/15 · 4/15 · 3/15 · 2/15 · 1/15</b>.</p>'+
      '<p><b>Exemplo do resumo</b> (valor depreciável de R$ 100.000):</p>'+
      '<ul><li>1º ano: 100.000 × 5/15 = <b>R$ 33.333,33</b></li>'+
      '<li>2º ano: 100.000 × 4/15 = <b>R$ 26.666,66</b></li>'+
      '<li>3º ano: 100.000 × 3/15 = <b>R$ 20.000,00</b></li>'+
      '<li>4º ano: 100.000 × 2/15 = <b>R$ 13.333,33</b></li>'+
      '<li>5º ano: 100.000 × 1/15 = <b>R$ 6.666,66</b></li></ul></div>'+
      '<div class="box trap"><span class="bl">Método das unidades produzidas — a questão de prova</span>'+
      '<p><b>Taxa do período</b> = unidades produzidas no período ÷ quantidade estimada total para a vida útil.</p>'+
      '<p>Máquina de canetas comprada em <b>01/06/2015</b> por <b>R$ 220.000</b>, residual de <b>R$ 20.000</b>, produção estimada de <b>1.000.000</b> de canetas: 2015 → 70.000 · 2016 → 100.000 · 2017 → 250.000 · 2018 → 250.000 · 2019 → 300.000 · 2020 → 30.000.</p>'+
      '<p>Até 31/12/2017 foram <b>420.000</b> unidades:</p>'+
      '<p class="mn"><em>Dep. Acum. = (Custo − Residual) × (Unid. Produzidas / Produção Esperada)</em></p>'+
      '<p><b>(220.000 − 20.000) × (420.000/1.000.000) = 200.000 × 0,42 = R$ 84.000</b>. Quem esquece o residual cai em <b>92.400</b>.</p></div>'+
      '<div class="box"><span class="bl">Mensuração no reconhecimento — custo do imobilizado</span>'+
      '<p><b>Soma-se:</b> <b>preço de compra</b> · <b>tributos</b> (<b>exceto os recuperáveis</b>) · quaisquer <b>custos diretamente atribuíveis</b> para colocar o ativo no local em condições de funcionamento · <b>estimativa dos custos de remoção do item e de restauração do local</b> (ao final da vida útil).</p>'+
      '<p><b>Depois deduz-se:</b> <b>descontos comerciais (incondicionais)</b> e <b>abatimentos</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Atribuíveis × não atribuíveis</span>'+
      '<p><b>SÃO atribuíveis:</b> benefícios aos empregados decorrentes do imobilizado · preparação do local · frete e manuseio (por conta do comprador) · instalação e montagem · testes de funcionamento · honorários profissionais.</p>'+
      '<p><b>NÃO são atribuíveis:</b> abertura de nova instalação · introdução de novo produto ou serviço · propaganda e atividades promocionais · transferência das atividades para novo local ou para nova categoria de clientes · <b>treinamento</b> · custos administrativos e outros indiretos.</p></div>')
  ]
};

var EX = {
S1:{t:"match", instr:"Ligue cada conta do art. 183, §2º, ao seu objeto",
  pairs:[["Depreciação","Bens físicos — ativo imobilizado"],
         ["Amortização","Aquisição de direitos — ativo intangível"],
         ["Exaustão","Recursos minerais ou florestais, ou bens aplicados nessa exploração"]],
  why:"A banca embaralha as três definições legais; fixe pelo objeto."},

S2:{t:"gap", instr:"Complete o conceito legal de depreciação",
  before:"A depreciação corresponde à perda do valor dos direitos que têm por objeto bens ",
  after:" sujeitos a desgaste por uso, ação da natureza ou obsolescência.",
  options:["físicos","incorpóreos","minerais"], answer:0,
  why:"Bem físico é depreciação; direito adquirido é amortização; recurso explorado é exaustão."},

S3:{t:"sort", instr:"Depreciação separada de componentes: é obrigatória ou facultativa?",
  buckets:["DEVE depreciar separadamente","PODE depreciar separadamente"],
  items:[["Componentes com custo significativo em relação ao custo total do item",0],
         ["Estrutura e motores de uma aeronave",0],
         ["Componentes sem custo significativo em relação ao custo total do item",1]],
  why:"Significativo = obrigatório; não significativo = facultativo."},

S4:{t:"mc", instr:"A depreciação de máquinas e equipamentos de produção é reconhecida onde?",
  options:["Nos custos de produção de estoque, integrando o valor contábil desse ativo",
           "Sempre diretamente no resultado do período",
           "Em conta do patrimônio líquido",
           "Como redução da receita bruta de vendas"],
  answer:0,
  why:"Quando os benefícios do ativo são absorvidos na produção de outros ativos, a depreciação faz parte do custo do outro ativo."},

S5:{t:"gap", instr:"Complete a fórmula do valor depreciável",
  before:"VALOR DEPRECIÁVEL = CUSTO − ",
  after:".",
  options:["VALOR RESIDUAL","DEPRECIAÇÃO ACUMULADA","VALOR JUSTO"], answer:0,
  why:"O valor depreciável é determinado após a dedução do valor residual."},

S6:{t:"mc", instr:"Equipamento adquirido pelo custo de R$ 100.000, que a entidade espera vender ao final da vida útil por R$ 30.000. Qual o valor depreciável?",
  options:["R$ 70.000","R$ 100.000","R$ 30.000","R$ 130.000"],
  answer:0,
  why:"100.000 − 30.000 — é o exemplo do resumo."},

S7:{t:"mc", instr:"Quando se inicia a depreciação de um ativo imobilizado?",
  options:["Quando está disponível para uso, no local e em condição de funcionamento na forma pretendida pela administração",
           "Na data da emissão da nota fiscal de aquisição",
           "No primeiro dia do exercício seguinte à aquisição",
           "Quando começa efetivamente a produzir, em qualquer método"],
  answer:0,
  why:"Disponível para uso é o marco inicial — pagar ou receber o bem não basta."},

S8:{t:"sort", instr:"A depreciação cessa ou não cessa?",
  buckets:["Cessa a depreciação","Não cessa a depreciação"],
  items:[["Ativo classificado como mantido para venda",0],
         ["Ativo baixado",0],
         ["Ativo que se tornou ocioso",1],
         ["Ativo retirado do uso normal",1]],
  why:"Cessa em mantido para venda ou baixa, o que ocorrer primeiro; ociosidade não interrompe."},

S9:{t:"mc", instr:"Pelo item 54 do CPC 27, o que ocorre quando o valor residual aumenta e passa a ser igual ou superior ao valor contábil do ativo?",
  options:["A despesa de depreciação será zero","A depreciação passa a ser calculada pelo método Cole",
           "O ativo deve ser imediatamente baixado","A diferença é lançada como despesa antecipada"],
  answer:0,
  why:"O valor residual pode aumentar; enquanto ele igualar ou superar o valor contábil, não há despesa."},

S10:{t:"multi", instr:"Marque o que o resumo afirma sobre a VIDA ÚTIL",
  options:["É o período de tempo durante o qual a entidade espera utilizar o ativo",
           "É o número de unidades de produção que a entidade espera obter pela utilização do ativo",
           "Pode ser menor do que a vida econômica do ativo",
           "É estimada por julgamento baseado na experiência da entidade com ativos semelhantes",
           "É sempre idêntica à vida econômica do ativo",
           "É revisada apenas na data da aquisição"],
  answers:[0,1,2,3],
  why:"Vida útil e valor residual são revisados pelo menos ao final de cada exercício."},

S11:{t:"sort", instr:"Deprecia ou não deprecia?",
  buckets:["Deprecia","Não deprecia"],
  items:[["Edifício",0],["Pedreira",0],["Local usado como aterro",0],
         ["Porção do custo do terreno relativa a desmontagem, remoção e restauração do local",0],
         ["Terreno, em regra",1]],
  why:"Terreno tem vida útil ilimitada; as exceções são pedreiras, aterros e a porção de custos de restauração."},

S12:{t:"mc", instr:"O terreno em que está construído um edifício da entidade se valoriza. Qual o efeito no edifício?",
  options:["Nenhum — o aumento de valor do terreno não afeta o valor contábil do edifício",
           "O valor contábil do edifício aumenta na mesma proporção",
           "A depreciação do edifício é interrompida",
           "Terreno e edifício passam a ser um único ativo"],
  answer:0,
  why:"Terrenos e edifícios são ativos separáveis, contabilizados separadamente."},

S13:{t:"match", instr:"Ligue cada método ao seu comportamento ou cálculo",
  pairs:[["Linha reta (linear)","Despesa constante: valor depreciável / vida útil"],
         ["Saldos decrescentes (Cole)","Despesa decrescente, maior no início: soma dos algarismos da vida útil"],
         ["Unidades produzidas (benefício gerado)","Taxa = unidades produzidas no período / produção total estimada"]],
  why:"Os três métodos que o CPC 27 cita, com os nomes alternativos que a banca usa."},

S14:{t:"mc", instr:"Máquina de custo R$ 220.000, valor residual de R$ 20.000 e vida útil de 5 anos. Qual a depreciação anual pelo método linear?",
  options:["R$ 40.000","R$ 44.000","R$ 66.666,67","R$ 20.000"],
  answer:0,
  why:"Depreciação anual = valor depreciável / vida útil = (220.000 − 20.000) / 5."},

S15:{t:"gap", instr:"Complete o denominador do método Cole",
  before:"Para um bem com vida útil de cinco anos, somam-se os algarismos do tempo de vida útil (1+2+3+4+5), obtendo-se o denominador ",
  after:" para todas as taxas anuais.",
  options:["15","10","5"], answer:0,
  why:"As taxas ficam 5/15, 4/15, 3/15, 2/15 e 1/15."},

S16:{t:"mc", instr:"Valor depreciável de R$ 100.000 e vida útil de cinco anos. Pelo método Cole, quais as despesas do 1º e do 5º ano?",
  options:["R$ 33.333,33 e R$ 6.666,66","R$ 6.666,66 e R$ 33.333,33",
           "R$ 20.000,00 e R$ 20.000,00","R$ 26.666,66 e R$ 13.333,33"],
  answer:0,
  why:"100.000 × 5/15 no primeiro ano e 100.000 × 1/15 no último — a despesa é decrescente."},

S17:{t:"mc", instr:"Máquina comprada em 01/06/2015 por R$ 220.000, residual de R$ 20.000, produção estimada de 1.000.000 de canetas (2015: 70.000; 2016: 100.000; 2017: 250.000). Qual a depreciação acumulada em 31/12/2017 pelo método do benefício gerado?",
  options:["R$ 84.000,00","R$ 92.400,00","R$ 70.000,00","R$ 100.000,00","R$ 50.000,00"],
  answer:0,
  why:"200.000 × (420.000/1.000.000) = 84.000. O distrator 92.400 esquece de deduzir o residual."},

S18:{t:"wordbank", instr:"Monte a fórmula da depreciação acumulada pelo método do benefício gerado",
  target:["Depreciação","Acumulada","=","(Custo","−","Residual)","×","(Unidades","Produzidas","/","Produção","Esperada)"],
  extra:["Vida","útil","Soma","dos","algarismos"],
  why:"É a fórmula que o resumo usa na solução do exemplo das canetas."},

S19:{t:"multi", instr:"Marque os custos DIRETAMENTE ATRIBUÍVEIS ao ativo imobilizado",
  options:["Custos de preparação do local",
           "Custos de frete e de manuseio por conta do comprador",
           "Custos de instalação e montagem",
           "Custos com testes para verificar se o ativo está funcionando corretamente",
           "Honorários profissionais",
           "Custos de treinamento",
           "Custos com propaganda e atividades promocionais",
           "Custos administrativos e outros custos indiretos"],
  answers:[0,1,2,3,4],
  why:"Treinamento, propaganda e custos administrativos e indiretos estão na lista dos que NÃO são atribuíveis."},

S20:{t:"sort", instr:"Na mensuração do custo do imobilizado: soma, deduz ou fica de fora?",
  buckets:["Soma ao custo","Deduz do custo","Fica de fora do custo"],
  items:[["Preço de compra",0],
         ["Tributos não recuperáveis",0],
         ["Estimativa dos custos de remoção do item e de restauração do local",0],
         ["Descontos comerciais incondicionais",1],
         ["Abatimentos",1],
         ["Tributos recuperáveis",2],
         ["Custos de abertura de nova instalação",2],
         ["Custos de transferência das atividades para novo local",2]],
  why:"Soma-se preço, tributos não recuperáveis, custos atribuíveis e a estimativa de remoção/restauração; depois deduzem-se descontos incondicionais e abatimentos."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Contabilidade Geral 06","https://www.tecconcursos.com.br/s/Q2ZaS9","Q2ZaS9"],
  ["Caderno FCC — Contabilidade Geral 06","https://www.tecconcursos.com.br/s/Q2ZaSg","Q2ZaSg"],
  ["Caderno FGV — Contabilidade Geral 06","https://www.tecconcursos.com.br/s/Q294oK","Q294oK"],
  ["Caderno VUNESP — Contabilidade Geral 06","https://www.tecconcursos.com.br/s/Q2ZaSv","Q2ZaSv"]
];
var TECNOTA = "Módulo de cálculo com gabarito previsível. Três armadilhas respondem pela maioria dos erros: a base de cálculo é o valor DEPRECIÁVEL (custo menos residual, nunca o custo cheio — é a diferença entre 84.000 e 92.400 no exemplo das canetas); a depreciação começa quando o bem está DISPONÍVEL PARA USO e não cessa por ociosidade; e terreno não deprecia, salvo pedreiras, aterros e a porção de custos de desmontagem, remoção e restauração.";

var UNITS = [
  {n:1, title:"Depreciação, amortização e exaustão", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"As três contas do art. 183 e a depreciação do CPC 27", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · depreciação, amortização e exaustão", xp:25, data:["S1","S2","T0","T1","T2","T3","T4"]},
    {id:"K3", type:"drill",  title:"Praticar · depreciação por componentes",        xp:25, data:["S3","T5","T6","T7","T8","T9"]},
    {id:"K4", type:"drill",  title:"Praticar · resultado ou custo de outro ativo",  xp:25, data:["S4","T10","T11","T12","T13"]},
    {id:"K5", type:"flash",  title:"Flashcards · conceitos e componentes",          xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11]}
  ]},
  {n:2, title:"Valor depreciável, vida útil e terrenos", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Valor residual, início e fim da depreciação, terrenos e edifícios", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · valor depreciável e valor residual", xp:25, data:["S5","S6","T14","T15","T16","T17","T18","T19","T20"]},
    {id:"K8", type:"drill",  title:"Praticar · início e fim da depreciação",        xp:25, data:["S7","S8","S9","T21","T22","T23","T24","T25"]},
    {id:"K9", type:"drill",  title:"Praticar · vida útil, terrenos e edifícios",    xp:25, data:["S10","S11","S12","T26","T27","T28","T29","T30","T31","T32","T33","T34"]},
    {id:"K10",type:"flash",  title:"Flashcards · valor depreciável e vida útil",    xp:15, data:[12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]}
  ]},
  {n:3, title:"Métodos de depreciação e custo do imobilizado", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Linear, Cole, unidades produzidas e mensuração inicial", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · escolha do método e método linear",  xp:25, data:["S13","S14","T35","T36","T37","T38"]},
    {id:"K13",type:"drill",  title:"Praticar · Cole e unidades produzidas",         xp:25, data:["S15","S16","S17","S18","T39","T40","T41","T42","T43","T44","T45"]},
    {id:"K14",type:"drill",  title:"Praticar · custo do imobilizado",               xp:25, data:["S19","S20","T46","T47","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · métodos e custo do imobilizado",   xp:15, data:[29,30,31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                  xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                 xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 06 de Contabilidade (Radegondes) ---------- */
var COM={
0:"<p>Certo — é a abertura da <b>CONTEXTUALIZAÇÃO</b> do resumo, pela letra do <b>art. 183, §2º, da Lei 6.404/76</b>: a diminuição do valor dos ativos <b>imobilizado e intangível</b> será registrada <b>periodicamente</b> nas contas de <b>depreciação</b>, <b>amortização</b> e <b>exaustão</b>.</p><p>São três contas, não duas nem quatro. Guarde a tríade: bem físico, direito adquirido, recurso explorado.</p><p class='fb-fonte'>Resumo 06 · <i>Contextualização</i></p>",
1:"<p>Certo, literalidade do resumo: a depreciação é registrada <b>“quando corresponder à perda do valor dos direitos que têm por objeto bens físicos sujeitos a desgaste por uso, ação da natureza ou obsolescência”</b>.</p><p>Os três gatilhos completos: <b>uso</b>, <b>ação da natureza</b> e <b>obsolescência</b>. Se a assertiva cortar um deles ou trocar por outro, desconfie.</p><p class='fb-fonte'>Resumo 06 · <i>Contextualização — depreciação</i></p>",
2:"<p>Errado — o enunciado descreveu a <b>EXAUSTÃO</b>. É ela que corresponde à perda de valor <b>“decorrente da sua exploração, de direitos cujo objeto sejam recursos minerais ou florestais, ou bens aplicados nessa exploração”</b>.</p><p>A <b>amortização</b> tem por objeto a <b>aquisição de direitos</b> — propriedade industrial ou comercial e outros de duração limitada.</p><p class='fb-fonte'>Resumo 06 · <i>Contextualização — exaustão e amortização</i></p>",
3:"<p>Errado — trocaram as definições. A perda do valor do <b>capital aplicado na aquisição de direitos da propriedade industrial ou comercial</b> é a <b>AMORTIZAÇÃO</b>.</p><p>A exaustão exige <b>exploração</b> de <b>recursos minerais ou florestais</b>. Use o quadro do resumo: depreciação → bens físicos; amortização → aquisição de direitos; exaustão → recursos minerais ou florestais.</p><p class='fb-fonte'>Resumo 06 · <i>Contextualização — amortização</i></p>",
4:"<p>Certo pelo quadro do resumo: a amortização <b>“possui como objeto aquisição de direitos (Ativo Intangível)”</b>.</p><p>É o par que fecha o esquema: depreciação anda com o <b>Imobilizado</b>, amortização anda com o <b>Intangível</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Contextualização — quadro dos objetos</i></p>",
5:"<p>Certo — o quadro do resumo é expresso: a exaustão <b>“possui como objeto recursos minerais ou florestais, ou bens aplicados nessa exploração”</b>.</p><p>Repare que os <b>bens aplicados na exploração</b> também entram na exaustão; a banca gosta de omitir essa segunda metade.</p><p class='fb-fonte'>Resumo 06 · <i>Contextualização — quadro dos objetos</i></p>",
6:"<p>Certo. É a definição que abre a seção do CPC 27 no resumo: <b>“depreciação é a despesa decorrente do desgaste de ativo imobilizado pelo uso ou ação da natureza”</b>.</p><p>Note a natureza da conta: <b>despesa</b>. Na regra geral ela vai para o <b>resultado</b> do período.</p><p class='fb-fonte'>Resumo 06 · <i>Depreciação (CPC 27)</i></p>",
7:"<p>Certo, é o quadro <b>ATENÇÃO!</b> do resumo: <b>“cada componente de um item do ativo imobilizado com custo significativo em relação ao custo total do item deve ser depreciado separadamente”</b> — a entidade aloca o valor inicialmente reconhecido aos componentes significativos.</p><p>Aqui o verbo é <b>DEVE</b>. É obrigação, não faculdade.</p><p class='fb-fonte'>Resumo 06 · <i>Depreciação — Atenção! componentes</i></p>",
8:"<p>Errado no verbo. O resumo separa os dois casos num quadro: <b>DEVE</b> depreciar separadamente os componentes com custo significativo; <b>PODE</b> (é <b>facultativo</b>) depreciar separadamente os componentes <b>que não tenham</b> custo significativo.</p><p>Na letra do material: <b>“a entidade pode (facultativo) escolher depreciar separadamente os componentes de um item que não tenham custo significativo em relação ao custo total do item”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Depreciação — DEVE × PODE depreciar separadamente</i></p>",
9:"<p>Certo — é o exemplo do próprio resumo: <b>“pode ser adequado depreciar separadamente a estrutura e os motores de uma aeronave, já que esses componentes possuem um custo significativo em relação ao custo total”</b>.</p><p>Guarde o exemplo pelo par: <b>estrutura + motores</b> da aeronave.</p><p class='fb-fonte'>Resumo 06 · <i>Depreciação — exemplo da aeronave</i></p>",
10:"<p>Certo, é a regra geral do resumo: <b>“a depreciação do período deve ser normalmente reconhecida no resultado”</b>.</p><p>O advérbio <b>normalmente</b> é o que abre espaço para a exceção da frase seguinte do material — quando os benefícios do ativo são absorvidos na produção de outros ativos.</p><p class='fb-fonte'>Resumo 06 · <i>Depreciação — reconhecimento</i></p>",
11:"<p>Errado por causa do <b>sempre</b>. O resumo traz a exceção: <b>“por vezes os benefícios econômicos futuros incorporados no ativo são absorvidos para a produção de outros ativos. Nesses casos, a depreciação faz parte do custo de outro ativo, devendo ser incluída no seu valor contábil”</b>.</p><p>Ou seja, longe de vedada, a inclusão no valor contábil de outro ativo é obrigatória nesses casos.</p><p class='fb-fonte'>Resumo 06 · <i>Depreciação — reconhecimento</i></p>",
12:"<p>Certo — é o primeiro exemplo do resumo para a exceção: <b>“a depreciação de máquinas e equipamentos de produção é incluída nos custos de produção de estoque”</b>.</p><p>A despesa não morre no resultado: ela viaja para o <b>custo do estoque</b> e só afeta o resultado quando o estoque for vendido.</p><p class='fb-fonte'>Resumo 06 · <i>Depreciação — exemplos do reconhecimento</i></p>",
13:"<p>Certo, é o segundo exemplo, com a norma que o material cita: <b>“a depreciação de ativos imobilizados usados para atividades de desenvolvimento pode ser incluída no custo de um ativo intangível reconhecido de acordo com o CPC 04 (Ativo Intangível)”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Depreciação — exemplos do reconhecimento</i></p>",
14:"<p>Certo, abertura da seção: <b>“o valor depreciável de um ativo é determinado após a dedução de seu valor residual”</b>.</p><p>O resumo fecha a ideia em fórmula: <b>VALOR DEPRECIÁVEL = CUSTO – VALOR RESIDUAL</b>. É a base de cálculo de todos os métodos deste módulo.</p><p class='fb-fonte'>Resumo 06 · <i>Valor depreciável e período de depreciação</i></p>",
15:"<p>Certo pela letra do resumo: <b>“o valor residual é o valor do bem que não sofre depreciação, sendo, consequentemente, o valor do ativo imobilizado ao final da sua vida útil”</b>.</p><p>Duas ideias na mesma frase: o residual <b>não deprecia</b> e é o que <b>sobra no final</b> da vida útil.</p><p class='fb-fonte'>Resumo 06 · <i>Valor depreciável — valor residual</i></p>",
16:"<p>Errado no número. O exemplo do resumo é exatamente este: <b>“uma determinada entidade adquiriu um equipamento pelo custo de R$ 100.000. Se ela espera vender este item ao final de sua vida útil por R$ 30.000 (valor residual), então seu valor depreciável é de R$ 70.000”</b>.</p><p>R$ 100.000 é o <b>custo</b>, não o valor depreciável. Deduzir o residual é justamente o passo que a banca quer que você esqueça.</p><p class='fb-fonte'>Resumo 06 · <i>Valor depreciável — exemplo</i></p>",
17:"<p>Certo, é o resultado do exemplo do resumo: <b>100.000 − 30.000 = R$ 70.000</b>.</p><p>Fixe o automatismo: antes de aplicar qualquer método (linear, Cole ou unidades produzidas), calcule primeiro o <b>valor depreciável</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Valor depreciável — exemplo</i></p>",
18:"<p>Certo pela letra do material: <b>“o valor residual e a vida útil de um ativo são revisados pelo menos ao final de cada exercício”</b>.</p><p>É <b>pelo menos</b> — a revisão anual é o piso, não o teto. E o mesmo vale para o <b>método</b> de depreciação, revisado ao final de cada exercício.</p><p class='fb-fonte'>Resumo 06 · <i>Valor depreciável e período de depreciação</i></p>",
19:"<p>Errado na classificação. O resumo diz que, se as expectativas diferirem das estimativas anteriores, <b>“a mudança deve ser contabilizada como mudança de estimativa contábil”</b>.</p><p>Mudança de estimativa é <b>prospectiva</b>; retificação de erro é outra figura. O material usa a mesma expressão para a revisão do <b>método</b> de depreciação.</p><p class='fb-fonte'>Resumo 06 · <i>Valor depreciável e período de depreciação</i></p>",
20:"<p>Certo, é o quadro <b>ATENÇÃO!</b> do resumo, citando o dispositivo: <b>“o CPC 27, item 54, dispõe que o valor residual de um ativo pode aumentar. A despesa de depreciação será zero enquanto o valor residual subsequente for igual ou superior ao seu valor contábil”</b>.</p><p>Duas surpresas numa frase: o residual pode <b>subir</b>, e a depreciação pode ficar em <b>zero</b> sem que o bem tenha sido baixado.</p><p class='fb-fonte'>Resumo 06 · <i>Valor depreciável — Atenção! item 54</i></p>",
21:"<p>Errado no marco inicial. O resumo é claro: <b>“a depreciação do ativo se inicia quando este está disponível para uso, ou seja, quando está no local e em condição de funcionamento na forma pretendida pela administração”</b>.</p><p>Comprar não basta; receber não basta. O quadro do material resume: <b>INÍCIO DA DEPRECIAÇÃO — quando o imobilizado estiver disponível para uso</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Valor depreciável — início da depreciação</i></p>",
22:"<p>Certo, é a definição literal do resumo do marco inicial: <b>disponível para uso</b> = <b>no local</b> e <b>em condição de funcionamento na forma pretendida pela administração</b>.</p><p>Repare que o critério é de <b>disponibilidade</b>, não de uso efetivo — o bem pode estar parado e já depreciar.</p><p class='fb-fonte'>Resumo 06 · <i>Valor depreciável — início da depreciação</i></p>",
23:"<p>Certo, com o desempate incluído: a depreciação cessa <b>“na data em que o ativo é classificado como mantido para venda (ou incluído em um grupo de ativos classificado como mantido para venda) ou, ainda, na data em que o ativo é baixado, o que ocorrer primeiro”</b>.</p><p>O quadro do resumo: <b>FIM DA DEPRECIAÇÃO — quando o imobilizado é classificado como mantido para venda; ou baixado</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Valor depreciável — fim da depreciação</i></p>",
24:"<p>Errado — e o resumo destaca essa exata troca em quadro próprio: <b>“ATENÇÃO: a depreciação não cessa quando o ativo se torna ocioso ou é retirado do uso normal”</b>, a não ser que o ativo esteja <b>totalmente depreciado</b>.</p><p>Só há duas causas de fim: <b>mantido para venda</b> ou <b>baixa</b>. Ociosidade não é nenhuma das duas.</p><p class='fb-fonte'>Resumo 06 · <i>Valor depreciável — Atenção! ociosidade</i></p>",
25:"<p>Certo, é a ressalva com que o resumo fecha o parágrafo: <b>“de acordo com os métodos de depreciação pelo uso, a despesa de depreciação pode ser zero enquanto não houver produção”</b>.</p><p>Não confunda com a regra da ociosidade: a depreciação <b>não cessa</b>: o que ocorre é que, no método das <b>unidades produzidas</b>, produção zero gera despesa zero.</p><p class='fb-fonte'>Resumo 06 · <i>Valor depreciável — métodos pelo uso</i></p>",
26:"<p>Certo, são as duas alternativas da definição do resumo: vida útil é <b>“o período de tempo durante o qual a entidade espera utilizar o ativo; ou o número de unidades de produção ou de unidades semelhantes que a entidade espera obter pela utilização do ativo”</b>.</p><p>O quadro do material liga as duas metades por um <b>OU</b> — tempo ou unidades, à escolha do padrão de consumo.</p><p class='fb-fonte'>Resumo 06 · <i>Vida útil do ativo</i></p>",
27:"<p>Errado. O resumo explica o porquê: <b>“a política de gestão de ativos da entidade pode considerar a alienação de ativos após um período determinado. Por isso, a vida útil de um ativo pode ser MENOR do que a sua vida econômica”</b>.</p><p>Vida útil é o tempo que <b>esta</b> entidade espera usar o bem; vida econômica é o potencial do bem. Uma pode ser menor que a outra.</p><p class='fb-fonte'>Resumo 06 · <i>Vida útil do ativo</i></p>",
28:"<p>Certo pela letra do material: <b>“a estimativa da vida útil do ativo é uma questão de julgamento baseado na experiência da entidade com ativos semelhantes”</b>.</p><p>Por ser estimativa e julgamento, ela é revisada <b>pelo menos ao final de cada exercício</b>, e a alteração é <b>mudança de estimativa contábil</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Vida útil do ativo</i></p>",
29:"<p>Certo — abertura literal da seção: <b>“terrenos e edifícios são ativos separáveis e são contabilizados separadamente, mesmo quando sejam adquiridos conjuntamente”</b>.</p><p>É o que permite o resto da regra: um não deprecia, o outro deprecia. Se fossem um único ativo, nada disso funcionaria.</p><p class='fb-fonte'>Resumo 06 · <i>Depreciação de terrenos e edifícios</i></p>",
30:"<p>Errado no <b>sem qualquer exceção</b>. O resumo ressalva desde a primeira linha: <b>“com algumas exceções, como as pedreiras e os locais usados como aterro, os terrenos têm vida útil ilimitada e, portanto, não são depreciados”</b>.</p><p>O quadro repete: terrenos <b>“possuem vida útil ilimitada, por isso não são depreciados, exceto as pedreiras e os locais usados como aterro”</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Depreciação de terrenos e edifícios — quadro</i></p>",
31:"<p>Certo, são exatamente as duas exceções que o resumo nomeia: <b>pedreiras</b> e <b>locais usados como aterro</b>.</p><p>A lógica é a do consumo: nesses casos o próprio terreno se esgota com o uso, então há o que depreciar.</p><p class='fb-fonte'>Resumo 06 · <i>Depreciação de terrenos e edifícios</i></p>",
32:"<p>Certo, é o outro lado do quadro do resumo: <b>“edifícios possuem vida útil limitada, por isso são depreciados”</b> — <b>“os edifícios têm vida útil limitada e, por isso, são ativos depreciáveis”</b>.</p><p>Guarde o contraste em uma linha: <b>terreno ilimitado, não deprecia · edifício limitado, deprecia</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Depreciação de terrenos e edifícios — quadro</i></p>",
33:"<p>Errado. A última frase da seção no resumo é justamente esta: <b>“o aumento de valor de um terreno no qual um edifício esteja construído NÃO afeta o valor contábil do edifício”</b>.</p><p>Faz sentido pela separação dos dois ativos: são contabilizados separadamente, mesmo adquiridos em conjunto, e o que acontece com um não contagia o outro.</p><p class='fb-fonte'>Resumo 06 · <i>Depreciação de terrenos e edifícios</i></p>",
34:"<p>Certo, é o quadro <b>ATENÇÃO!</b> do resumo: <b>“se o custo do terreno incluir custos de desmontagem, remoção e restauração do local, essa porção do valor contábil do terreno é depreciada durante o período de benefícios obtidos ao incorrer nesses custos”</b>.</p><p>É a terceira hipótese de terreno que deprecia, ao lado das pedreiras e dos aterros — e deprecia só a <b>porção</b> correspondente a esses custos.</p><p class='fb-fonte'>Resumo 06 · <i>Terrenos e edifícios — Atenção!</i></p>",
35:"<p>Certo, é o critério de escolha do resumo: <b>“a entidade seleciona o método de depreciação que melhor reflita o padrão do consumo dos benefícios econômicos futuros esperados incorporados no ativo”</b>.</p><p>A escolha não é livre nem fiscal: é a que espelha o <b>padrão de consumo</b> daquele ativo.</p><p class='fb-fonte'>Resumo 06 · <i>Método de depreciação (CPC 27)</i></p>",
36:"<p>Errado — o resumo manda o contrário: o método <b>“é aplicado consistentemente entre períodos, a não ser que exista alteração no padrão do consumo”</b>.</p><p>Só se muda o método quando muda o <b>padrão de consumo</b>, e a mudança é registrada como <b>mudança na estimativa contábil</b>. Alternar métodos por conveniência é o oposto da consistência exigida.</p><p class='fb-fonte'>Resumo 06 · <i>Método de depreciação — consistência</i></p>",
37:"<p>Certo, literalidade do material: <b>“o método de depreciação aplicado a um ativo deve ser revisado pelo menos ao final de cada exercício e, se houver alteração significativa no padrão de consumo previsto, o método de depreciação deve ser alterado para refletir essa mudança. Tal mudança deve ser registrada como mudança na estimativa contábil”</b>.</p><p>São três os itens revisados ao final de cada exercício: <b>valor residual</b>, <b>vida útil</b> e <b>método</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Método de depreciação — revisão</i></p>",
38:"<p>Certo. O resumo define: <b>“nesse método a despesa com depreciação é constante (linear) ao longo da vida útil estimado para o bem”</b>, e dá a fórmula: <b>Depreciação Anual = Valor Depreciável / Vida útil</b>.</p><p>Repare o numerador: é o <b>valor depreciável</b> (custo menos residual), não o custo cheio.</p><p class='fb-fonte'>Resumo 06 · <i>Método da linha reta (linear)</i></p>",
39:"<p>Errado no sentido da curva. No método dos saldos decrescentes (Cole), <b>“a despesa com depreciação é decrescente ao longo de sua vida útil (maiores despesas de depreciação no início da vida útil do bem)”</b>.</p><p>O exemplo do resumo prova: com valor depreciável de R$ 100.000, a despesa cai de <b>33.333,33</b> no 1º ano para <b>6.666,66</b> no 5º.</p><p class='fb-fonte'>Resumo 06 · <i>Método dos saldos decrescentes (Cole)</i></p>",
40:"<p>Certo, é o passo a passo do resumo: <b>“para o cálculo da depreciação anual de um ativo com vida útil de 5 anos temos que somar os algarismos que formam o tempo de vida útil do bem (cinco anos), ou seja: 1 + 2 + 3 + 4 + 5 = 15. Este será nosso denominador em todas as taxas de depreciação anual”</b>.</p><p>As taxas do material, em ordem: <b>5/15 · 4/15 · 3/15 · 2/15 · 1/15</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Método Cole — as taxas</i></p>",
41:"<p>Certo — é a terceira linha do exemplo numérico do resumo: <b>“do 3º ano será de = R$ 100.000 × 3/15 = R$ 20.000,00”</b>.</p><p>Vale decorar a lista inteira do material: <b>33.333,33 · 26.666,66 · 20.000,00 · 13.333,33 · 6.666,66</b>. Somadas, fecham os R$ 100.000 do valor depreciável.</p><p class='fb-fonte'>Resumo 06 · <i>Método Cole — exemplo de R$ 100.000</i></p>",
42:"<p>Errado — inverteu os extremos. R$ 6.666,66 é a despesa <b>do 5º ano</b> (100.000 × 1/15). A do <b>1º ano</b> é <b>R$ 33.333,33</b> (100.000 × 5/15).</p><p>A pista está no próprio nome do método: <b>saldos decrescentes</b>, com as maiores despesas no <b>início</b> da vida útil.</p><p class='fb-fonte'>Resumo 06 · <i>Método Cole — exemplo de R$ 100.000</i></p>",
43:"<p>Certo pela letra do resumo: <b>“para chegar à taxa de depreciação anual basta dividir a quantidade de unidades produzidas no período pela quantidade estimada total para a vida útil do bem”</b>.</p><p>É o método das <b>unidades produzidas</b>, que o material também chama de método do <b>benefício gerado</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Método das unidades produzidas</i></p>",
44:"<p>Certo, e é o gabarito do exemplo resolvido no resumo (letra C). Como de 2015 a 2017 foram produzidas <b>420 mil</b> unidades:</p><p><b>Dep. Acum. = (Custo – Residual) × (Unidades Produzidas / Produção Esperada)</b> → <b>(220.000 – 20.000) × (420.000/1.000.000) = 200.000 × 0,42 = R$ 84.000</b>.</p><p class='fb-fonte'>Resumo 06 · <i>Método das unidades produzidas — exemplo das canetas</i></p>",
45:"<p>Errado — R$ 92.400 é justamente o distrator (letra D) de quem aplica a fração sobre o <b>custo cheio</b>: 220.000 × 0,42 = 92.400.</p><p>A solução do resumo parte do <b>valor depreciável</b>: <b>(220.000 – 20.000) × (420/1000) = 200 × 420 = R$ 84.000</b>. Os R$ 20.000 de residual não depreciam.</p><p class='fb-fonte'>Resumo 06 · <i>Método das unidades produzidas — exemplo das canetas</i></p>",
46:"<p>Errado por uma palavra. O esquema do <b>CUSTO DO IMOBILIZADO</b> no resumo soma o <b>preço de compra</b> e os <b>tributos</b>, mas com a ressalva expressa: <b>“exceto os recuperáveis”</b>.</p><p>Tributo recuperável não é custo do bem — é direito a recuperar. Só o tributo <b>não recuperável</b> engorda o imobilizado.</p><p class='fb-fonte'>Resumo 06 · <i>Mensuração no reconhecimento — custo do imobilizado</i></p>",
47:"<p>Certo, é o terceiro componente do esquema do resumo: <b>“quaisquer custos diretamente atribuíveis para colocar o ativo no local em condições de funcionamento”</b>.</p><p>Esse componente conversa com o marco inicial da depreciação: o ativo passa a depreciar quando está <b>no local e em condição de funcionamento</b> — e os custos para chegar lá entram no custo.</p><p class='fb-fonte'>Resumo 06 · <i>Mensuração no reconhecimento — custo do imobilizado</i></p>",
48:"<p>Certo — é o quarto item somado no esquema do resumo: a <b>“estimativa dos custos de remoção do item e de restauração do local (ao final da vida útil)”</b>.</p><p>É a mesma ideia do quadro ATENÇÃO dos terrenos: quando esses custos entram no valor contábil, a porção correspondente passa a ser <b>depreciada</b> durante o período de benefícios.</p><p class='fb-fonte'>Resumo 06 · <i>Mensuração no reconhecimento — custo do imobilizado</i></p>",
49:"<p>Errado no sinal. O resumo diz que tudo é somado <b>“para depois deduzirmos os: descontos comerciais (incondicionais); e abatimentos”</b>.</p><p>Fluxo do esquema: soma preço de compra, tributos não recuperáveis, custos atribuíveis e estimativa de remoção/restauração; <b>deduz</b> descontos incondicionais e abatimentos.</p><p class='fb-fonte'>Resumo 06 · <i>Mensuração no reconhecimento — custo do imobilizado</i></p>",
50:"<p>Certo — os três constam da lista de <b>exemplos de custos diretamente atribuíveis ao ativo imobilizado</b> do resumo: <b>“custos de frete e de manuseio (por conta do comprador)”</b>, <b>“custos de instalação e montagem”</b> e <b>“custos com testes para verificar se o ativo está funcionando corretamente”</b>.</p><p>A lista completa do material inclui ainda benefícios aos empregados decorrentes do imobilizado, preparação do local e honorários profissionais.</p><p class='fb-fonte'>Resumo 06 · <i>Exemplos de custos diretamente atribuíveis</i></p>",
51:"<p>Errado — os dois estão na lista oposta do resumo, de <b>exemplos de custos que NÃO são atribuíveis ao ativo imobilizado</b>: <b>“custos de treinamento”</b> e <b>“custos com propaganda e atividades promocionais”</b>.</p><p>Na mesma lista de fora: abertura de nova instalação, introdução de novo produto ou serviço, transferência das atividades para novo local ou nova categoria de clientes e custos administrativos e outros indiretos.</p><p class='fb-fonte'>Resumo 06 · <i>Exemplos de custos que não são atribuíveis</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"06", nome:"Depreciação, amortização e exaustão (CPC 27)", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
