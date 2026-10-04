/* Contabilidade Geral — Módulo 13: DLPA, ajustes de períodos anteriores e DMPL (modo direto) */
window.MOD = window.MOD || {};
window.MOD.contab13 = (function(){
"use strict";

var CARDS = [
  ["Qual artigo da Lei 6.404/76 põe a DLPA entre as demonstrações financeiras do fim do exercício?","O <b>art. 176, II</b>: ao fim de cada exercício social a diretoria fará elaborar, com base na <b>escrituração mercantil</b>, entre outras, a <b>demonstração dos lucros ou prejuízos acumulados</b>."],
  ["O que a DLPA discrimina, pelo inciso I do art. 186?","O <b>saldo do início do período</b>, os <b>ajustes de exercícios anteriores</b> e a <b>correção monetária do saldo inicial</b>."],
  ["O que a DLPA discrimina, pelo inciso II do art. 186?","As <b>reversões de reservas</b> e o <b>lucro líquido do exercício</b>."],
  ["O que a DLPA discrimina, pelo inciso III do art. 186?","As <b>transferências para reservas</b>, os <b>dividendos</b>, a <b>parcela dos lucros incorporada ao capital</b> e o <b>saldo ao fim do período</b>."],
  ["O que o art. 186, §1º, considera ajustes de exercícios anteriores?","<b>Apenas</b> os decorrentes de efeitos da <b>mudança de critério contábil</b>, ou da <b>retificação de erro imputável a determinado exercício anterior</b>, e que <b>não possam ser atribuídos a fatos subsequentes</b>."],
  ["O que diz o art. 186, §2º?","A DLPA <b>deverá indicar o montante do dividendo por ação do capital social</b> e <b>poderá ser incluída na DMPL</b>, se esta for elaborada e publicada pela companhia."],
  ["Pela Lei 6.404/76, quem é obrigatória e quem é facultativa?","<b>DLPA obrigatória</b> para todas as companhias (art. 176, II). <b>DMPL facultativa</b> — a lei apenas permite que a DLPA seja nela incluída (art. 186, §2º)."],
  ["Qual o objetivo da elaboração da DLPA?","Evidenciar as <b>alterações e as variações entre o saldo inicial e o saldo final</b> da conta de lucros ou prejuízos acumulados, partindo do saldo no <b>início do exercício</b> e concluindo com a posição da conta no <b>balanço de encerramento</b>."],
  ["Os oito itens que a DLPA deve evidenciar","Saldo do início do período · ajustes de exercícios anteriores e correção monetária do saldo inicial · reversões de reservas · lucro líquido do exercício · transferências para <b>reservas de lucros</b> · para <b>dividendos</b> · para a <b>parcela incorporada ao capital</b> · <b>saldo ao fim do período</b>."],
  ["O quadro-resumo da DLPA, em três frases","<b>É uma demonstração obrigatória</b> · <b>deverá indicar o dividendo por ação</b> · <b>poderá ser incluída na DMPL</b>."],
  ["Quadro ATENÇÃO! — o que algumas bancas entendem sobre a inclusão da DLPA na DMPL?","Apesar de o <b>§2º do art. 186</b> dar caráter <b>facultativo</b> à inclusão, <b>algumas bancas entendem que a DLPA deve ser incluída na DMPL</b> — talvez por influência do <b>CPC 26</b>, que <b>não</b> considera a DLPA obrigatória, <b>mas sim a DMPL</b>."],
  ["Qual demonstração permite averiguar o montante dos dividendos pagos por ação do capital social?","A <b>DLPA</b> — art. 186, §2º, da Lei 6.404/76. É o gabarito do <b>Exemplo 01</b> do resumo."],
  ["No Exemplo 02 do resumo, qual é a afirmativa correta sobre a DLPA?","<b>“Deve indicar o montante do dividendo por ação do capital social”</b> — art. 186, §2º."],
  ["Na estrutura da DLPA, o que soma e o que subtrai?","<b>(+ ou −)</b> ajustes de exercícios anteriores · <b>(+)</b> reversão de reserva de lucros · <b>(+ ou −)</b> lucro ou prejuízo líquido · <b>(−)</b> transferências para reservas de lucros, para dividendos, para incorporação ao capital social e <b>(−)</b> dividendos antecipados."],
  ["Quais reservas de lucros a estrutura da DLPA lista?","<b>Legal</b> · <b>Estatutária</b> · <b>para Contingências</b> · <b>de Incentivos Fiscais</b> · <b>de Retenção de Lucros</b> · <b>de Lucros a Realizar</b> · <b>Especial para Dividendo Obrigatório</b>. O resumo avisa: não precisa memorizar, as questões ficam na <b>literalidade da lei</b>."],

  ["O esquema dos ajustes de exercícios anteriores tem quantos ramos?","<b>Dois</b>: efeitos da <b>mudança de critério contábil</b> e <b>retificação de erro imputável a determinado exercício anterior</b>. Só esses."],
  ["O exemplo do estoque: quais são os números?","Estoque avaliado pelo <b>PEPS</b> em 2020, lucro de <b>R$ 100.000</b>. Em 2021 adota-se o <b>custo médio</b>; refeito o comparativo, o lucro de 2020 vira <b>R$ 60.000</b>. Diferença: <b>R$ 40.000</b>."],
  ["Qual o lançamento do ajuste nesse exemplo?","<b>D</b> Ajuste de Exercícios Anteriores - Lucros Acumulados R$ 40.000 (<b>↓PL</b>) · <b>C</b> Estoques R$ 40.000 (<b>↓Ativo</b>)."],
  ["Por que o ajuste não é debitado em CMV?","Porque o <b>resultado de 2020 já foi apurado e encerrado</b> — não há como debitar conta de resultado. Resta debitar <b>Lucros Acumulados</b>, a título de ajuste de exercícios anteriores."],
  ["Qual a finalidade da DMPL?","<b>Expor as variações (ou mutações) ocorridas, durante um exercício, em TODAS as contas que compõem o patrimônio líquido</b> da empresa."],
  ["O que o CPC 26 diz sobre a DMPL?","Que ela <b>integra o conjunto completo de demonstrações contábeis</b> a serem elaboradas ao final do período."],
  ["DLPA × DMPL — qual a diferença de abrangência?","A <b>DLPA</b> demonstra as variações da conta <b>Lucros ou Prejuízos Acumulados</b>, que é <b>uma</b> das contas do PL. A <b>DMPL</b> demonstra as variações de <b>todas</b> as contas do PL — é <b>mais completa</b>."],
  ["DLPA × DMPL na Lei 6.404/76","<b>DLPA obrigatória</b> · <b>DMPL facultativa</b>."],
  ["DLPA × DMPL no CPC 26","A <b>DLPA não é citada</b> pelo CPC 26 · a <b>DMPL é obrigatória</b> pelo CPC 26."],
  ["Quadro ATENÇÃO! — pode a DRA ser apresentada só na DMPL?","<b>Não.</b> Pelo <b>CPC 26 (R1)</b> é <b>vedada</b> a apresentação da DRA <b>exclusivamente</b> na DMPL: ela deve ser <b>demonstração separada</b>. Contudo, <b>também entra na DMPL</b>, pois as contas do resultado abrangente ficam no <b>PL</b>."],
  ["As seis contas do PL no art. 178, §2º, III","<b>Capital Social</b> · <b>Reservas de Capital</b> · <b>Ajustes de Avaliação Patrimonial</b> · <b>Reservas de Lucros</b> · <b>Ações em Tesouraria</b> · <b>Prejuízos Acumulados</b>."],
  ["Quais reservas de capital o resumo lista?","<b>Ágio na emissão de ações</b> · <b>Alienação de Partes Beneficiárias</b> · <b>Alienação de Bônus de Subscrição</b>."],
  ["Quais reservas de lucros o resumo lista na composição do PL?","<b>Reserva Legal</b> · <b>Estatutária</b> · <b>para Contingências</b> · <b>de Lucros a Realizar</b> · <b>de Incentivos Fiscais</b>."],
  ["Quais parcelas entram com sinal negativo na composição do PL?","<b>(−) Capital a integralizar</b> (dentro do capital social subscrito) · <b>(−) Ações em Tesouraria</b> · <b>(−) Prejuízos Acumulados</b>. E, com <b>(+ ou −)</b>: Ajuste de Avaliação Patrimonial e <b>Ajuste Acumulado de Conversão</b> (diferença cambial)."],
  ["Como se lê uma DMPL?","Da <b>esquerda para a direita</b>, porque a <b>primeira linha</b> é composta pelas <b>contas do PL</b>. A leitura <b>de cima para baixo</b> serve para verificar as <b>movimentações em cada conta</b>."],
  ["No exemplo de DMPL do resumo, quais são os saldos do PL?","<b>Saldo inicial R$ 370.000</b>; com ações em tesouraria vendidas 20.000, lucro líquido 100.000, reserva legal 5.000 (efeito zero) e dividendos −95.000, o <b>saldo final é R$ 395.000</b>."],

  ["Lançamento 01 — aumento de capital social com reservas de lucros","<b>Não modifica o PL</b>: há <b>permuta entre contas do PL</b>. <b>D</b> Reservas de Lucros R$ 30.000 · <b>C</b> Capital Social R$ 30.000."],
  ["Lançamento 02 — aumento de capital com integralização em dinheiro","<b>Aumenta o PL</b> pelo valor integralizado. <b>D</b> Caixa R$ 30.000 (↑ativo) · <b>C</b> Capital Social R$ 30.000 (↑PL)."],
  ["Lançamento 03 — ajuste de avaliação patrimonial","<b>Aumenta o PL</b> quando credor. <b>D</b> Ações disponíveis para venda futura R$ 30.000 · <b>C</b> Ajuste de Avaliação Patrimonial R$ 30.000. A conta <b>sempre</b> modifica o PL, pois a contrapartida é <b>ativo ou passivo</b>."],
  ["Lançamento 04 — lucro líquido do exercício","<b>Aumenta o PL</b>. <b>D</b> Resultado do Exercício R$ 30.000 · <b>C</b> Lucros Acumulados R$ 30.000. Já a <b>apropriação para Reserva para Contingências não modifica o PL</b>: <b>D</b> Lucros · <b>C</b> Reserva para Contingências."],
  ["Lançamento 05 — constituição de reserva legal","<b>Não modifica o PL</b>. <b>D</b> Lucros Acumulados R$ 30.000 · <b>C</b> Reserva Legal R$ 30.000. Vale para <b>todas</b> as constituições de reservas de lucros, inclusive Estatutária e para Contingências."],
  ["Lançamento 06 — distribuição de dividendos","<b>Diminui o PL</b>. <b>D</b> Lucros Acumulados R$ 30.000 (↓PL) · <b>C</b> Dividendos a Pagar R$ 30.000 (↑passivo). O <b>JSCP</b> segue o <b>mesmo tratamento</b> do dividendo."],
  ["Lançamento 07 — emissão de ações com ágio","<b>Aumenta o PL</b>. <b>D</b> Bancos R$ 32.400 (↑ativo) · <b>C</b> Capital Social R$ 30.000 (↑PL) · <b>C</b> Ágio na Emissão de Ações — <b>Reserva de capital</b> R$ 2.400 (↑PL)."],
  ["Lançamento 08 — emissão de ações com gastos","<b>Também aumenta o PL</b>. <b>D</b> Caixa (ou Bancos) R$ 27.600 · <b>D</b> Gastos na Emissão de Ações R$ 2.400 (<b>retificadora do PL</b>) · <b>C</b> Capital Social R$ 30.000."],
  ["Ágio e gastos ao mesmo tempo na emissão de ações — e agora?","O <b>CPC 08 (item 06)</b> dispõe que o <b>prêmio (ágio) deve ser utilizado para absorver os custos (gastos) de transação</b>."]
];

var QS = [
  ["Ao fim de cada exercício social, a diretoria fará elaborar, com base na escrituração mercantil da companhia, entre outras demonstrações financeiras, a demonstração dos lucros ou prejuízos acumulados.","C","Lei 6.404, art. 176","Art. 176, II."],
  ["A demonstração de lucros ou prejuízos acumulados discriminará o saldo do início do período, os ajustes de exercícios anteriores e a correção monetária do saldo inicial.","C","Lei 6.404, art. 186","Inciso I."],
  ["A DLPA discriminará as reversões de reservas e o lucro líquido do exercício.","C","CEBRASPE","Inciso II do art. 186."],
  ["A DLPA discriminará as transferências para reservas, os dividendos, a parcela dos lucros incorporada ao capital e o saldo ao fim do período.","C","FCC","Inciso III do art. 186."],
  ["A DLPA discriminará, entre outros itens, a correção monetária do saldo final do período.","E","FGV","O inciso I fala da correção monetária do saldo <b>inicial</b>."],
  ["Como ajustes de exercícios anteriores serão considerados apenas os decorrentes de efeitos da mudança de critério contábil ou de estimativa.","E","VUNESP","São a mudança de <b>critério contábil</b> e a <b>retificação de erro</b>; estimativa não entra."],
  ["Como ajustes de exercícios anteriores serão considerados apenas os decorrentes de efeitos da mudança de critério contábil, ou da retificação de erro imputável a determinado exercício anterior, e que não possam ser atribuídos a fatos subsequentes.","C","Lei 6.404, art. 186, §1º","Literalidade do §1º."],
  ["A retificação de erro imputável a exercício anterior é tratada como ajuste de exercícios anteriores ainda quando possa ser atribuída a fatos subsequentes.","E","CEBRASPE","O §1º exige que <b>não</b> possa ser atribuída a fatos subsequentes."],
  ["A DLPA deverá indicar o montante do dividendo por ação do capital social.","C","FCC","Art. 186, §2º."],
  ["A DLPA deverá indicar o dividendo por ação e sua inclusão na DMPL é obrigatória sempre que esta for elaborada e publicada pela companhia.","E","FGV","A lei diz que <b>poderá</b> ser incluída — é faculdade."],
  ["Nos termos do art. 176, II, da Lei 6.404/76, a DLPA é demonstração obrigatória para todas as companhias.","C","VUNESP","Primeira observação do resumo."],
  ["Nos termos da Lei 6.404/76, a DMPL é demonstração obrigatória e a DLPA é facultativa.","E","CEBRASPE","Inverteu: DLPA obrigatória, DMPL facultativa."],
  ["A elaboração da DLPA tem por objetivo evidenciar as alterações e as variações entre o saldo inicial e o saldo final da conta de lucros ou prejuízos acumulados.","C","FCC","Objetivo declarado no resumo."],
  ["Apesar de o §2º do art. 186 atribuir caráter facultativo à inclusão da DLPA na DMPL, algumas bancas entendem que a DLPA deve ser incluída na DMPL.","C","FGV","Quadro ATENÇÃO! do resumo."],
  ["O CPC 26 considera obrigatória a DLPA, e não a DMPL.","E","VUNESP","É o contrário: o CPC 26 não considera a DLPA obrigatória, mas sim a DMPL."],
  ["A demonstração contábil que permite averiguar o montante dos dividendos pagos por ação do capital social é a demonstração do valor adicionado.","E","CEBRASPE","É a <b>DLPA</b> — gabarito do Exemplo 01."],
  ["A DLPA pode ser evidenciada como parte do balanço patrimonial.","E","FCC","A lei só autoriza a inclusão na <b>DMPL</b>."],
  ["A DLPA tornou-se obrigatória pela Lei nº 11.638/07.","E","FGV","A obrigatoriedade registrada no resumo é a do art. 176, II, da Lei 6.404/76."],
  ["Na estrutura da DLPA, a reversão de reserva de lucros é somada e as transferências para reservas de lucros são subtraídas.","C","VUNESP","Sinais da estrutura."],
  ["Na estrutura da DLPA, os dividendos antecipados são somados ao saldo do início do período.","E","CEBRASPE","Entram com sinal <b>negativo</b>."],
  ["Sociedade que avaliava estoques pelo PEPS apurou lucro de R$ 100.000 em 2020; ao adotar o custo médio, o lucro de 2020 recalculado foi de R$ 60.000, o que gera ajuste de R$ 40.000.","C","FCC","Exemplo do resumo."],
  ["Nesse exemplo, o ajuste é registrado a débito de Ajuste de Exercícios Anteriores — Lucros Acumulados e a crédito de Estoques, por R$ 40.000.","C","FGV","Lançamento do resumo."],
  ["Nesse exemplo, o ajuste deve ser registrado a débito de CMV e a crédito de Estoques.","E","VUNESP","Não se debita conta de resultado: o resultado de 2020 já foi apurado e encerrado."],
  ["Nesse exemplo, o ajuste reduz o patrimônio líquido e reduz o ativo em R$ 40.000.","C","CEBRASPE","↓PL e ↓Ativo."],
  ["A troca do método de avaliação de estoques do PEPS para o custo médio é mudança de critério contábil e, por isso, o ajuste é contabilizado na DLPA.","C","FCC","Conclusão do exemplo."],
  ["Os ajustes de exercícios anteriores evidenciados na DLPA trazem mudanças no resultado do exercício a que se referem.","E","FGV","Vão direto a Lucros Acumulados — o resultado daquele exercício já foi encerrado."],
  ["A DMPL tem por finalidade expor as variações ocorridas, durante um exercício, em todas as contas que compõem o patrimônio líquido da empresa.","C","VUNESP","Conceito."],
  ["De acordo com o CPC 26, a DMPL integra o conjunto completo de demonstrações contábeis a serem elaboradas ao final do período.","C","CPC 26","Literal."],
  ["A DLPA demonstra as variações ocorridas em todas as contas do patrimônio líquido, sendo mais completa que a DMPL.","E","CEBRASPE","Inverteu: a <b>DMPL</b> é a mais completa."],
  ["De acordo com o CPC 26 (R1), é permitida a apresentação da demonstração do resultado abrangente exclusivamente na DMPL.","E","FCC","É <b>vedada</b>: a DRA deve ser demonstração separada."],
  ["Mesmo devendo ser apresentada separadamente, a demonstração do resultado abrangente também entra na DMPL, pois as contas do resultado abrangente ficam no patrimônio líquido.","C","FGV","Parte final do quadro ATENÇÃO!"],
  ["O patrimônio líquido é composto por capital social, reservas de capital, ajustes de avaliação patrimonial, reservas de lucros, ações em tesouraria e prejuízos acumulados.","C","Lei 6.404, art. 178, §2º, III","As seis contas do esquema."],
  ["Ágio na emissão de ações, alienação de partes beneficiárias e alienação de bônus de subscrição são espécies de reservas de lucros.","E","VUNESP","São <b>reservas de capital</b>."],
  ["Ações em tesouraria e prejuízos acumulados figuram no patrimônio líquido com sinal negativo.","C","CEBRASPE","Contas redutoras do PL."],
  ["A leitura de uma DMPL é feita da esquerda para a direita, porque a primeira linha é composta pelas contas do patrimônio líquido.","C","FCC","Observação do resumo sobre o exemplo."],
  ["No exemplo de DMPL do resumo, o saldo inicial do patrimônio líquido é de R$ 370.000 e o saldo final, de R$ 395.000.","C","FGV","Saldo inicial mais movimentações."],
  ["Nesse mesmo exemplo, a constituição de reserva legal de R$ 5.000 alterou o total do patrimônio líquido.","E","VUNESP","Efeito zero: sai de lucros acumulados e entra em reservas de lucros."],
  ["O aumento de capital social com reservas de lucros não modifica o patrimônio líquido, porque ocorre permuta entre contas do próprio PL.","C","CEBRASPE","Lançamento 01."],
  ["O aumento de capital social com integralização em dinheiro pelos sócios não altera o valor do patrimônio líquido.","E","FCC","<b>Aumenta</b> o PL pelo valor integralizado."],
  ["O ajuste de avaliação patrimonial credor aumenta o patrimônio líquido, tendo como contrapartida um aumento do ativo.","C","FGV","Lançamento 03."],
  ["A conta Ajustes de Avaliação Patrimonial pode ser movimentada sem qualquer efeito sobre o valor do patrimônio líquido.","E","VUNESP","Ela <b>sempre</b> modifica o PL — a contrapartida é ativo ou passivo."],
  ["O lucro líquido do exercício aumenta o patrimônio líquido e é registrado a débito de Resultado do Exercício e a crédito de Lucros Acumulados.","C","CEBRASPE","Lançamento 04."],
  ["A apropriação do lucro líquido do exercício, por meio da conta de Lucros, para formação de Reserva para Contingências aumenta o patrimônio líquido.","E","FCC","<b>Não modifica</b> o PL: permuta dentro do PL."],
  ["A constituição de Reserva Legal é registrada a débito de Lucros Acumulados e a crédito de Reserva Legal, e não modifica o patrimônio líquido.","C","FGV","Lançamento 05."],
  ["A Reserva Legal é constituída com 5% do lucro líquido do exercício, e sua constituição reduz o patrimônio líquido no montante constituído.","E","VUNESP","A constituição de reserva de lucros não modifica o PL."],
  ["A distribuição de dividendos diminui o patrimônio líquido e é registrada a débito de Lucros Acumulados e a crédito de Dividendos a Pagar, no passivo.","C","CEBRASPE","Lançamento 06."],
  ["O tratamento contábil dado aos juros sobre capital próprio difere do tratamento dado aos dividendos.","E","FCC","Segue o <b>mesmo</b> tratamento."],
  ["A emissão de ações com ágio aumenta o patrimônio líquido: débito de Bancos R$ 32.400, crédito de Capital Social R$ 30.000 e crédito de Ágio na Emissão de Ações R$ 2.400.","C","FGV","Lançamento 07."],
  ["O ágio na emissão de ações é classificado como reserva de lucros.","E","VUNESP","É <b>reserva de capital</b>."],
  ["A emissão de ações com gastos para colocação dos papéis no mercado reduz o patrimônio líquido.","E","CEBRASPE","Também <b>aumenta</b> o PL — é a OBS 01 do Lançamento 08."],
  ["Na emissão de ações com gastos, a conta Gastos na Emissão de Ações é retificadora do patrimônio líquido.","C","FCC","Lançamento 08."],
  ["Ocorrendo ágio e gastos simultaneamente na emissão de ações, o prêmio deve ser utilizado para absorver os custos de transação.","C","CPC 08, item 06","OBS 02 do Lançamento 08."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("DLPA — os dispositivos, a obrigatoriedade e a estrutura",
      '<div class="box"><span class="bl">Os dois artigos</span>'+
      '<p><b>Art. 176, II:</b> ao fim de cada exercício social a diretoria fará elaborar, com base na <b>escrituração mercantil</b>, entre outras demonstrações, a <b>demonstração dos lucros ou prejuízos acumulados</b>.</p>'+
      '<p><b>Art. 186 — a DLPA discriminará:</b></p>'+
      '<ul><li><b>I —</b> o <b>saldo do início do período</b>, os <b>ajustes de exercícios anteriores</b> e a <b>correção monetária do saldo inicial</b>;</li>'+
      '<li><b>II —</b> as <b>reversões de reservas</b> e o <b>lucro líquido do exercício</b>;</li>'+
      '<li><b>III —</b> as <b>transferências para reservas</b>, os <b>dividendos</b>, a <b>parcela dos lucros incorporada ao capital</b> e o <b>saldo ao fim do período</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">As duas OBSERVAÇÕES do resumo</span>'+
      '<p><b>1)</b> O art. 176, II, faz da DLPA uma demonstração <b>obrigatória para todas as companhias</b>.</p>'+
      '<p><b>2)</b> O art. 186, §2º, permite que a DLPA <b>seja incluída na DMPL</b>, se esta for elaborada e publicada. Ou seja, <b>nos termos da lei a DMPL é facultativa</b>.</p></div>'+
      '<div class="box trap"><span class="bl">ATENÇÃO — o ponto em que as bancas divergem</span>'+
      '<p>Apesar de o <b>§2º do art. 186</b> dar caráter <b>facultativo</b> à inclusão da DLPA na DMPL, <b>algumas bancas entendem que a DLPA deve ser incluída na DMPL</b>. O resumo levanta a causa: o <b>CPC 26</b> <b>não</b> considera a DLPA obrigatória, <b>mas sim a DMPL</b>.</p></div>'+
      '<div class="box"><span class="bl">O que a DLPA evidencia — os oito itens</span>'+
      '<p>Saldo do <b>início</b> do período · <b>ajustes de exercícios anteriores</b> e <b>correção monetária do saldo inicial</b> · <b>reversões de reservas</b> · <b>lucro líquido do exercício</b> · transferências para <b>reservas de lucros</b> · para <b>dividendos</b> · para a <b>parcela dos lucros incorporada ao capital</b> · <b>saldo ao fim do período</b>.</p>'+
      '<p>E ainda: deve <b>indicar o montante do dividendo por ação do capital social</b>.</p>'+
      '<p class="mn"><em>DLPA: é obrigatória · indica o dividendo por ação · poderá ser incluída na DMPL</em></p></div>'+
      '<div class="box tip"><span class="bl">Estrutura da DLPA — Lucros ou Prejuízos Acumulados</span>'+
      '<p>Saldo do Início do Período<br><b>(+ ou −)</b> Ajustes de Exercícios Anteriores<br><b>(+)</b> Reversão de Reserva de Lucros<br><b>(+ ou −)</b> Lucro ou Prejuízo Líquido<br><b>(−)</b> Transferências para Reservas de Lucros (Legal · Estatutária · para Contingências · de Incentivos Fiscais · de Retenção de Lucros · de Lucros a Realizar · Especial para Dividendo Obrigatório)<br><b>(−)</b> Transferências para Dividendos<br><b>(−)</b> Transferências para incorporação ao Capital Social<br><b>(−)</b> Dividendos Antecipados<br><b>(=)</b> Saldo do Final do Período</p>'+
      '<p>O próprio resumo avisa: <b>não precisa memorizar essa estrutura</b>, porque as questões se limitam à <b>literalidade da Lei 6.404/76</b>.</p></div>'+
      '<div class="box"><span class="bl">Os dois exemplos resolvidos</span>'+
      '<p><b>Exemplo 01 —</b> qual demonstração permite averiguar o montante dos dividendos pagos <b>por ação</b> do capital social? <b>A DLPA</b> (art. 186, §2º).</p>'+
      '<p><b>Exemplo 02 —</b> a afirmativa correta sobre a DLPA é: <b>“deve indicar o montante do dividendo por ação do capital social”</b>. Repare que as demais alternativas trocam justamente as palavras que a lei fixa.</p></div>')
  ],
  V2:[
    sl("Ajustes de exercícios anteriores e a DMPL",
      '<div class="box"><span class="bl">O §1º do art. 186 — só dois casos</span>'+
      '<p>Como ajustes de exercícios anteriores serão considerados <b>apenas</b> os decorrentes:</p>'+
      '<div class="tree"><div class="leaf">de <b>efeitos da mudança de critério contábil</b></div>'+
      '<div class="leaf">da <b>retificação de erro imputável a determinado exercício anterior</b></div></div>'+
      '<p>E, em ambos, o resumo mantém a condição da lei: <b>que não possam ser atribuídos a fatos subsequentes</b>.</p></div>'+
      '<div class="box tip"><span class="bl">O exemplo do estoque, com os números do resumo</span>'+
      '<p>Estoque avaliado pelo <b>PEPS</b> em 2020 → lucro de <b>R$ 100.000</b>. Em 2021 os contadores julgam melhor o <b>custo médio</b> e refazem também o comparativo de 2020: lucro de <b>R$ 60.000</b>.</p>'+
      '<p>Para ajustar 100.000 para 60.000, credita-se <b>Estoques</b> em <b>R$ 40.000</b>. Não há como debitar conta de resultado (o CMV, por exemplo), porque o resultado de 2020 <b>já foi apurado e encerrado</b>. Resta debitar <b>Lucros Acumulados</b>:</p>'+
      '<p><b>D</b> Ajuste de Exercícios Anteriores - Lucros Acumulados R$ 40.000 (<b>↓PL</b>)<br><b>C</b> Estoques R$ 40.000 (<b>↓Ativo</b>)</p>'+
      '<p>Houve <b>mudança de critério contábil</b> — por isso o ajuste é contabilizado <b>na DLPA</b>.</p></div>'+
      '<div class="box"><span class="bl">DMPL — o que é</span>'+
      '<p>Demonstração contábil que tem por finalidade <b>expor as variações (mutações) ocorridas, durante um exercício, em TODAS as contas que compõem o patrimônio líquido</b>.</p>'+
      '<p>Pelo <b>CPC 26</b>, ela <b>integra o conjunto completo</b> de demonstrações contábeis a serem elaboradas ao final do período.</p></div>'+
      '<div class="box trap"><span class="bl">DLPA × DMPL — o quadro de três linhas</span>'+
      '<p><b>Abrangência:</b> DLPA → variações da conta <b>Lucros ou Prejuízos Acumulados</b>, uma das contas do PL. DMPL → variações de <b>todas</b> as contas do PL; é <b>mais completa</b>.</p>'+
      '<p><b>Lei 6.404/76:</b> DLPA <b>obrigatória</b> · DMPL <b>facultativa</b>.</p>'+
      '<p><b>CPC 26:</b> DLPA <b>não é citada</b> · DMPL <b>obrigatória</b>.</p></div>'+
      '<div class="box trap"><span class="bl">ATENÇÃO — a DRA e a DMPL</span>'+
      '<p>Pelo <b>CPC 26 (R1)</b> é <b>vedada</b> a apresentação da <b>Demonstração do Resultado Abrangente exclusivamente na DMPL</b>: a DRA deve ser uma <b>demonstração separada</b>. <b>Contudo</b>, ela <b>também entra na DMPL</b>, pois as contas do resultado abrangente ficam no <b>PL</b>.</p></div>'+
      '<div class="box"><span class="bl">As contas do PL e a leitura da DMPL</span>'+
      '<p><b>Art. 178, §2º, III:</b> <span class="key">Capital Social</span> · <span class="key">Reservas de Capital</span> · <span class="key">Ajustes de Avaliação Patrimonial</span> · <span class="key">Reservas de Lucros</span> · <span class="key">Ações em Tesouraria</span> · <span class="key">Prejuízos Acumulados</span>.</p>'+
      '<p><b>Detalhando:</b> capital social subscrito <b>(−) capital a integralizar = capital integralizado</b> · reservas de capital (<b>ágio na emissão de ações</b>, <b>alienação de partes beneficiárias</b>, <b>alienação de bônus de subscrição</b>) · reservas de lucros (Legal, Estatutária, para Contingências, de Lucros a Realizar, de Incentivos Fiscais) · <b>(+ ou −)</b> Ajuste de Avaliação Patrimonial e <b>Ajuste Acumulado de Conversão</b> (diferença cambial) · <b>(−)</b> Ações em Tesouraria · <b>(−)</b> Prejuízos Acumulados.</p>'+
      '<p><b>Como se lê:</b> a <b>primeira linha</b> traz as contas do PL, então a leitura é da <b>esquerda para a direita</b>; <b>de cima para baixo</b> se verificam as <b>movimentações de cada conta</b>.</p>'+
      '<p><b>No exemplo do resumo:</b> saldo inicial do PL <b>R$ 370.000</b> → ações em tesouraria vendidas <b>+20.000</b> · lucro líquido <b>+100.000</b> · reserva legal <b>5.000</b> (efeito zero) · dividendos <b>−95.000</b> → saldo final <b>R$ 395.000</b>.</p>'+
      '<p>O resumo avisa: a <b>estrutura da DMPL não costuma aparecer em provas</b>, é muito raro.</p></div>')
  ],
  V3:[
    sl("Os oito lançamentos cobrados em provas",
      '<div class="box"><span class="bl">O que a prova realmente pergunta</span>'+
      '<p>A maioria das questões sobre DMPL <b>fornece algumas contas do PL e pergunta se houve aumento do saldo do PL</b>. Para responder, basta ter os oito lançamentos abaixo na ponta da língua.</p></div>'+
      '<div class="box"><span class="bl">AUMENTA o PL</span>'+
      '<p><b>02 — Aumento de capital com integralização em dinheiro:</b> <b>D</b> Caixa 30.000 (↑ativo) · <b>C</b> Capital Social 30.000 (↑PL).</p>'+
      '<p><b>03 — Ajuste de avaliação patrimonial credor:</b> <b>D</b> Ações disponíveis para venda futura 30.000 · <b>C</b> Ajuste de Avaliação Patrimonial 30.000.</p>'+
      '<p><b>04 — Lucro líquido do exercício:</b> <b>D</b> Resultado do Exercício 30.000 · <b>C</b> Lucros Acumulados 30.000.</p>'+
      '<p><b>07 — Emissão de ações com ágio</b> e <b>08 — emissão com gastos</b>: ambas aumentam o PL.</p></div>'+
      '<div class="box"><span class="bl">NÃO MODIFICA o PL — permuta dentro do grupo</span>'+
      '<p><b>01 — Aumento de capital com reservas de lucros:</b> <b>D</b> Reservas de Lucros 30.000 (↓PL) · <b>C</b> Capital Social 30.000 (↑PL). As duas contas são do PL.</p>'+
      '<p><b>05 — Constituição de Reserva Legal:</b> <b>D</b> Lucros Acumulados 30.000 · <b>C</b> Reserva Legal 30.000. Vale para <b>todas</b> as constituições de reservas de lucros, inclusive <b>Estatutária</b> e <b>para Contingências</b>.</p>'+
      '<p><b>Apropriação do lucro para Reserva para Contingências:</b> <b>D</b> Lucros 30.000 · <b>C</b> Reserva para Contingências 30.000 — também sem efeito no total.</p></div>'+
      '<div class="box"><span class="bl">DIMINUI o PL</span>'+
      '<p><b>06 — Distribuição de dividendos:</b> <b>D</b> Lucros Acumulados 30.000 (↓PL) · <b>C</b> Dividendos a Pagar 30.000 (↑passivo).</p>'+
      '<p>O <b>JSCP</b> recebe o <b>mesmo tratamento contábil</b> do dividendo.</p></div>'+
      '<div class="box tip"><span class="bl">Emissão de ações — os números do resumo</span>'+
      '<p><b>Com ÁGIO (07):</b> <b>D</b> Bancos (AC) R$ 32.400 · <b>C</b> Capital Social R$ 30.000 · <b>C</b> Ágio na Emissão de Ações — <b>Reserva de capital</b> R$ 2.400.</p>'+
      '<p><b>Com GASTOS (08):</b> <b>D</b> Caixa (ou Bancos) R$ 27.600 · <b>D</b> Gastos na Emissão de Ações R$ 2.400 (<b>retificadora do PL</b>) · <b>C</b> Capital Social R$ 30.000.</p></div>'+
      '<div class="box trap"><span class="bl">As duas OBS que decidem questão</span>'+
      '<p><b>Ajustes de Avaliação Patrimonial SEMPRE modifica o PL</b>, porque a contrapartida é sempre um aumento ou uma diminuição do <b>ativo ou do passivo</b>.</p>'+
      '<p>Se houver <b>ágio e gastos simultaneamente</b> na emissão de ações, o <b>CPC 08 (item 06)</b> manda usar o <b>prêmio (ágio) para absorver os custos (gastos) de transação</b>.</p></div>')
  ]
};

var EX = {
S1:{t:"mc", instr:"Segundo o art. 176, II, da Lei 6.404/76, a DLPA é:",
  options:["demonstração obrigatória para todas as companhias",
           "demonstração facultativa, substituível pela DMPL",
           "exigida apenas das companhias abertas",
           "exigida apenas quando houver prejuízo acumulado"],
  answer:0,
  why:"Primeira observação do resumo: o art. 176, II, torna a DLPA obrigatória."},

S2:{t:"sort", instr:"Em que inciso do art. 186 cada item aparece?",
  buckets:["Inciso I","Inciso II","Inciso III"],
  items:[["Saldo do início do período",0],
         ["Ajustes de exercícios anteriores",0],
         ["Correção monetária do saldo inicial",0],
         ["Reversões de reservas",1],
         ["Lucro líquido do exercício",1],
         ["Transferências para reservas",2],
         ["Dividendos",2],
         ["Parcela dos lucros incorporada ao capital",2],
         ["Saldo ao fim do período",2]],
  why:"A correção monetária é do saldo INICIAL, e o saldo ao FIM do período fecha o inciso III."},

S3:{t:"gap", instr:"Complete o §1º do art. 186",
  before:"Como ajustes de exercícios anteriores serão considerados apenas os decorrentes de efeitos da mudança de ",
  after:", ou da retificação de erro imputável a determinado exercício anterior.",
  options:["critério contábil","estimativa contábil","política de distribuição de dividendos"], answer:0,
  why:"Mudança de estimativa não é ajuste de exercícios anteriores — é a troca de palavra preferida da banca."},

S4:{t:"multi", instr:"Marque o que a DLPA deve evidenciar",
  options:["O saldo do início do período","Os ajustes de exercícios anteriores e a correção monetária do saldo inicial",
           "As reversões de reservas","O lucro líquido do exercício",
           "As transferências para reservas de lucros, dividendos e incorporação ao capital",
           "O saldo ao fim do período","O montante do dividendo por ação do capital social",
           "As variações de todas as contas do patrimônio líquido",
           "O valor adicionado distribuído aos empregados"],
  answers:[0,1,2,3,4,5,6],
  why:"Variações de TODAS as contas do PL são objeto da DMPL, não da DLPA."},

S5:{t:"mc", instr:"Qual demonstração permite averiguar o montante dos dividendos pagos por ação do capital social?",
  options:["Demonstração de Lucros ou Prejuízos Acumulados","Demonstração do Valor Adicionado",
           "Demonstração do Resultado do Exercício","Demonstração dos fluxos de caixa, método direto"],
  answer:0,
  why:"Art. 186, §2º — é o gabarito do Exemplo 01 do resumo."},

S6:{t:"sort", instr:"Na estrutura da DLPA, o item soma ou subtrai?",
  buckets:["Soma (+)","Subtrai (−)"],
  items:[["Reversão de Reserva de Lucros",0],
         ["Transferências para Reservas de Lucros",1],
         ["Transferências para Dividendos",1],
         ["Transferências para incorporação ao Capital Social",1],
         ["Dividendos Antecipados",1]],
  why:"Ajustes de exercícios anteriores e o resultado do exercício entram com (+ ou −)."},

S7:{t:"wordbank", instr:"Monte o lançamento do ajuste de exercícios anteriores do exemplo do resumo",
  target:["D","Ajuste de Exercícios Anteriores - Lucros Acumulados","40.000","C","Estoques","40.000"],
  extra:["CMV","Capital Social","100.000"],
  why:"Reduz o PL e reduz o ativo em R$ 40.000 — a diferença entre os lucros de 100.000 (PEPS) e 60.000 (custo médio)."},

S8:{t:"mc", instr:"No exemplo do resumo, por que o ajuste não pode ser debitado em CMV?",
  options:["Porque o resultado de 2020 já foi apurado e encerrado",
           "Porque o CMV não é conta de resultado",
           "Porque o estoque não sofreu alteração de valor",
           "Porque a alteração foi de estimativa, e não de critério"],
  answer:0,
  why:"Por isso o débito vai para Lucros Acumulados, a título de ajuste de exercícios anteriores."},

S9:{t:"match", instr:"Correlacione cada demonstração à afirmação do quadro",
  pairs:[["DLPA — abrangência","Variações da conta Lucros ou Prejuízos Acumulados"],
         ["DMPL — abrangência","Variações de todas as contas do patrimônio líquido"],
         ["DLPA na Lei 6.404/76","Obrigatória"],
         ["DMPL na Lei 6.404/76","Facultativa"],
         ["DLPA no CPC 26","Não é citada"],
         ["DMPL no CPC 26","Obrigatória"]],
  why:"A DMPL é a mais completa das duas."},

S10:{t:"mc", instr:"De acordo com o CPC 26 (R1), a apresentação da Demonstração do Resultado Abrangente exclusivamente na DMPL é:",
  options:["vedada — a DRA deve ser demonstração separada","obrigatória","facultativa, a critério da companhia",
           "permitida apenas para companhias fechadas"],
  answer:0,
  why:"Ainda assim a DRA também entra na DMPL, porque as contas do resultado abrangente ficam no PL."},

S11:{t:"multi", instr:"Marque as contas que compõem o patrimônio líquido no art. 178, §2º, III",
  options:["Capital Social","Reservas de Capital","Ajustes de Avaliação Patrimonial","Reservas de Lucros",
           "Ações em Tesouraria","Prejuízos Acumulados","Dividendos a Pagar","Despesas Antecipadas"],
  answers:[0,1,2,3,4,5],
  why:"Dividendos a pagar é passivo; despesas antecipadas, ativo."},

S12:{t:"mc", instr:"No exemplo de DMPL do resumo, o PL parte de R$ 370.000. Com ações em tesouraria vendidas de R$ 20.000, lucro líquido de R$ 100.000, reserva legal de R$ 5.000 e dividendos de R$ 95.000, qual o saldo final?",
  options:["R$ 395.000","R$ 390.000","R$ 490.000","R$ 370.000"],
  answer:0,
  why:"370.000 + 20.000 + 100.000 + 0 − 95.000. A reserva legal tem efeito zero no total."},

S13:{t:"sort", instr:"Cada fato aumenta, não modifica ou diminui o patrimônio líquido?",
  buckets:["Aumenta","Não modifica","Diminui"],
  items:[["Aumento de capital social com reservas de lucros",1],
         ["Aumento de capital social com integralização em dinheiro",0],
         ["Ajuste de avaliação patrimonial credor",0],
         ["Lucro líquido do exercício",0],
         ["Constituição de Reserva Legal",1],
         ["Apropriação do lucro para Reserva para Contingências",1],
         ["Distribuição de dividendos",2],
         ["Emissão de ações com ágio",0],
         ["Emissão de ações com gastos de colocação",0]],
  why:"Permuta entre contas do PL nunca altera o total; só entra ou sai valor quando a contrapartida está fora do PL."},

S14:{t:"match", instr:"Correlacione cada fato ao seu lançamento",
  pairs:[["Aumento de capital com reservas de lucros","D Reservas de Lucros · C Capital Social"],
         ["Integralização de capital em dinheiro","D Caixa · C Capital Social"],
         ["Lucro líquido do exercício","D Resultado do Exercício · C Lucros Acumulados"],
         ["Constituição de Reserva Legal","D Lucros Acumulados · C Reserva Legal"],
         ["Distribuição de dividendos","D Lucros Acumulados · C Dividendos a Pagar"]],
  why:"Todos com R$ 30.000 nos exemplos do resumo."},

S15:{t:"gap", instr:"Complete a OBS do Lançamento 03",
  before:"A conta Ajustes de Avaliação Patrimonial ",
  after:" modifica o PL, pois a sua contrapartida será um aumento ou uma diminuição do ativo ou do passivo.",
  options:["sempre","nunca","apenas excepcionalmente"], answer:0,
  why:"É o que separa o AAP das permutas internas, como a constituição de reservas."},

S16:{t:"wordbank", instr:"Monte o lançamento da emissão de ações com ágio",
  target:["D","Bancos","32.400","C","Capital Social","30.000","C","Ágio na Emissão de Ações","2.400"],
  extra:["Gastos na Emissão de Ações","27.600"],
  why:"O ágio é Reserva de Capital, e a operação aumenta o PL em R$ 32.400."},

S17:{t:"mc", instr:"Emissão de ações com capital social de R$ 30.000 e gastos de colocação de R$ 2.400. Qual o lançamento?",
  options:["D Caixa 27.600 · D Gastos na Emissão de Ações 2.400 · C Capital Social 30.000",
           "D Caixa 32.400 · C Capital Social 30.000 · C Ágio na Emissão de Ações 2.400",
           "D Caixa 30.000 · C Capital Social 27.600 · C Gastos na Emissão de Ações 2.400",
           "D Gastos na Emissão de Ações 2.400 · C Caixa 2.400"],
  answer:0,
  why:"Gastos na Emissão de Ações é retificadora do PL — e a emissão, mesmo assim, aumenta o PL."},

S18:{t:"mc", instr:"Ocorrendo ágio e gastos simultaneamente na emissão de ações, o CPC 08 (item 06) dispõe que:",
  options:["o prêmio (ágio) deve ser utilizado para absorver os custos (gastos) de transação",
           "os gastos devem ser lançados integralmente no resultado do exercício",
           "o ágio deve ser lançado no resultado e os gastos no PL",
           "ambos devem ser desconsiderados na emissão"],
  answer:0,
  why:"É a OBS 02 do Lançamento 08."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Contabilidade Geral 13","https://www.tecconcursos.com.br/s/Q2erM9","Q2erM9"],
  ["Caderno FCC — Contabilidade Geral 13","https://www.tecconcursos.com.br/s/Q2erMV","Q2erMV"],
  ["Caderno FGV — Contabilidade Geral 13","https://www.tecconcursos.com.br/s/Q2Cc0J","Q2Cc0J"],
  ["Caderno VUNESP — Contabilidade Geral 13","https://www.tecconcursos.com.br/s/Q2erMq","Q2erMq"]
];
var TECNOTA = "Assunto curto e de gabarito previsível: as questões se limitam à literalidade do art. 186 da Lei 6.404/76, e é ali que a banca ganha dinheiro. Três fronteiras respondem pela maioria dos erros. A primeira é a obrigatoriedade cruzada: pela Lei 6.404/76 a DLPA é obrigatória e a DMPL facultativa; pelo CPC 26 é o inverso — a DLPA não é citada e a DMPL é obrigatória. A segunda é o §1º: ajuste de exercícios anteriores é só mudança de critério contábil ou retificação de erro imputável a exercício anterior, nunca mudança de estimativa — no exemplo do estoque, a passagem do PEPS (lucro de 100.000) para o custo médio (lucro de 60.000) leva R$ 40.000 a débito de Lucros Acumulados e a crédito de Estoques, porque o resultado de 2020 já estava encerrado. A terceira é o efeito no PL dos oito lançamentos: permuta dentro do PL (capital com reservas de lucros, constituição de reserva legal ou para contingências) não altera o total; integralização em dinheiro, AAP credor, lucro líquido e emissão de ações com ágio ou com gastos aumentam; dividendo e JSCP diminuem.";

var UNITS = [
  {n:1, title:"DLPA — dispositivos e estrutura", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Art. 176, art. 186 e a estrutura da DLPA", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · os incisos do art. 186",      xp:25, data:["S1","S2","T0","T1","T2","T3","T4","T5","T6"]},
    {id:"K3", type:"drill",  title:"Praticar · dividendo por ação e faculdade", xp:25, data:["S3","S4","T7","T8","T9","T10","T11","T12","T13"]},
    {id:"K4", type:"drill",  title:"Praticar · CPC 26 e estrutura",          xp:25, data:["S5","S6","T14","T15","T16","T17","T18","T19"]},
    {id:"K5", type:"flash",  title:"Flashcards · DLPA",                      xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]}
  ]},
  {n:2, title:"Ajustes de exercícios anteriores e DMPL", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"O §1º, o exemplo do estoque e a DMPL",   xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · o ajuste do exemplo",         xp:25, data:["S7","S8","T20","T21","T22","T23","T24","T25"]},
    {id:"K8", type:"drill",  title:"Praticar · DLPA × DMPL e a DRA",         xp:25, data:["S9","S10","T26","T27","T28","T29","T30"]},
    {id:"K9", type:"drill",  title:"Praticar · contas do PL e leitura da DMPL", xp:25, data:["S11","S12","T31","T32","T33","T34","T35","T36"]},
    {id:"K10",type:"flash",  title:"Flashcards · ajustes e DMPL",            xp:15, data:[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]}
  ]},
  {n:3, title:"Os lançamentos cobrados em provas", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Aumenta, não modifica ou diminui o PL",  xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · efeito no PL",                xp:25, data:["S13","S14","T37","T38","T39","T40","T41"]},
    {id:"K13",type:"drill",  title:"Praticar · reservas, lucro e dividendos", xp:25, data:["S15","S16","T42","T43","T44","T45","T46"]},
    {id:"K14",type:"drill",  title:"Praticar · emissão de ações",            xp:25, data:["S17","S18","T47","T48","T49","T50","T51"]},
    {id:"K15",type:"flash",  title:"Flashcards · os oito lançamentos",       xp:15, data:[31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                  xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                 xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 13 de Contabilidade (Radegondes) ---------- */
var COM={
0:"<p>Certo — é a transcrição do <b>art. 176</b> que abre a seção da DLPA no resumo: <b>“ao fim de cada exercício social, a diretoria fará elaborar, com base na escrituração mercantil da companhia, as seguintes demonstrações financeiras”</b>, e o <b>inciso II</b> é a <b>demonstração dos lucros ou prejuízos acumulados</b>.</p><p>Guarde os dois elementos que a banca gosta de trocar: <b>fim de cada exercício social</b> e <b>escrituração mercantil</b>.</p><p class='fb-fonte'>Resumo 13 · <i>DLPA — Lei nº 6.404/76, art. 176</i></p>",
1:"<p>Certo pela letra do <b>art. 186, I</b>, transcrito no resumo: a DLPA discriminará <b>“o saldo do início do período, os ajustes de exercícios anteriores e a correção monetária do saldo inicial”</b>.</p><p>Repare no detalhe que decide questão: a correção monetária é do saldo <b>INICIAL</b>, nunca do final.</p><p class='fb-fonte'>Resumo 13 · <i>DLPA — art. 186, inciso I</i></p>",
2:"<p>Certo — <b>art. 186, II</b>: <b>“as reversões de reservas e o lucro líquido do exercício”</b>.</p><p>Na estrutura que o resumo monta, a <b>reversão de reserva de lucros</b> entra com <b>(+)</b> e o <b>lucro ou prejuízo líquido</b> com <b>(+ ou −)</b>.</p><p class='fb-fonte'>Resumo 13 · <i>DLPA — art. 186, inciso II</i></p>",
3:"<p>Certo — <b>art. 186, III</b>: <b>“as transferências para reservas, os dividendos, a parcela dos lucros incorporada ao capital e o saldo ao fim do período”</b>.</p><p>São os quatro itens de fechamento da demonstração. Na estrutura do resumo, os três primeiros entram com <b>(−)</b> e o último é o <b>(=) Saldo do Final do Período</b>.</p><p class='fb-fonte'>Resumo 13 · <i>DLPA — art. 186, inciso III</i></p>",
4:"<p>Errado por <b>uma palavra</b>. O <b>art. 186, I</b>, fala da <b>correção monetária do saldo INICIAL</b>, ao lado do saldo do início do período e dos ajustes de exercícios anteriores.</p><p>Faz sentido: os três itens do inciso I são justamente os que <b>preparam o ponto de partida</b> da demonstração. O saldo do <b>fim</b> do período aparece no inciso III, e sem correção monetária.</p><p class='fb-fonte'>Resumo 13 · <i>DLPA — art. 186, incisos I e III</i></p>",
5:"<p>Errado — e é a troca clássica. O <b>art. 186, §1º</b>, transcrito no resumo, considera ajustes de exercícios anteriores <b>apenas</b> os decorrentes de efeitos da <b>mudança de critério contábil</b> ou da <b>retificação de erro imputável a determinado exercício anterior</b>.</p><p>O esquema do resumo tem só esses <b>dois ramos</b>. <b>Mudança de estimativa não entra</b> — a alternativa que usava essa palavra foi justamente a errada no Exemplo 02.</p><p class='fb-fonte'>Resumo 13 · <i>Ajustes de períodos anteriores na DLPA</i></p>",
6:"<p>Certo — literalidade do <b>art. 186, §1º</b>, inclusive na parte final: <b>“e que não possam ser atribuídos a fatos subsequentes”</b>.</p><p>Os três filtros cumulativos: <b>só</b> dois casos (mudança de critério contábil ou retificação de erro), o erro tem de ser <b>imputável a determinado exercício anterior</b>, e o efeito <b>não</b> pode ser atribuído a fatos subsequentes.</p><p class='fb-fonte'>Resumo 13 · <i>Ajustes de períodos anteriores na DLPA</i></p>",
7:"<p>Errado no <b>filtro final</b> do §1º. A lei exige que os efeitos <b>não possam ser atribuídos a fatos subsequentes</b>; a assertiva diz o oposto.</p><p>Se o efeito decorre de fato posterior, não há ajuste de exercícios anteriores — ele pertence ao exercício em que o fato ocorreu.</p><p class='fb-fonte'>Resumo 13 · <i>Ajustes de períodos anteriores na DLPA</i></p>",
8:"<p>Certo — <b>art. 186, §2º</b>: a DLPA <b>“deverá indicar o montante do dividendo por ação do capital social”</b>.</p><p>É a frase que resolve os <b>dois exemplos</b> do resumo: no Exemplo 01 ela identifica a demonstração pedida; no Exemplo 02 ela é a alternativa correta.</p><p class='fb-fonte'>Resumo 13 · <i>DLPA — art. 186, §2º</i></p>",
9:"<p>Errado na <b>segunda metade</b>. Indicar o dividendo por ação é <b>dever</b> (“deverá indicar”), mas a inclusão na DMPL é <b>faculdade</b>: o §2º diz que a DLPA <b>“poderá ser incluída na demonstração das mutações do patrimônio líquido, se elaborada e publicada pela companhia”</b>.</p><p>A segunda observação do resumo tira daí a conclusão: <b>nos termos da lei, a DMPL é facultativa</b>.</p><p class='fb-fonte'>Resumo 13 · <i>DLPA — Observações</i></p>",
10:"<p>Certo — é a <b>observação 1</b> do resumo: <b>“note que o art. 176, II, da Lei nº 6.404/76, estabelece que a DLPA é uma demonstração obrigatória para todas as companhias”</b>.</p><p>O quadro-resumo repete em três frases: <b>é uma demonstração obrigatória</b> · <b>deverá indicar o dividendo por ação</b> · <b>poderá ser incluída na DMPL</b>.</p><p class='fb-fonte'>Resumo 13 · <i>DLPA — Observações</i></p>",
11:"<p>Errado — <b>inverteu as duas</b>. Pela Lei 6.404/76, o quadro comparativo do resumo é expresso: a DLPA <b>“é obrigatória de acordo com a Lei 6.404/76”</b> e a DMPL <b>“é facultativa de acordo com a Lei 6.404/76”</b>.</p><p>A inversão só vale no <b>CPC 26</b>: lá a DLPA <b>não é citada</b> e a DMPL <b>é obrigatória</b>. Leia sempre qual norma o enunciado invocou.</p><p class='fb-fonte'>Resumo 13 · <i>DLPA × DMPL</i></p>",
12:"<p>Certo — é o objetivo que o resumo atribui à demonstração: <b>“evidenciar as alterações e as variações entre o saldo inicial e o saldo final da conta de prejuízos ou lucros acumulados”</b>, partindo do saldo no <b>início do exercício social</b> e concluindo com a posição da conta no <b>balanço de encerramento</b>.</p><p class='fb-fonte'>Resumo 13 · <i>DLPA — objetivo da elaboração</i></p>",
13:"<p>Certo — é exatamente o quadro <b>ATENÇÃO!</b> do resumo: <b>“apesar do §2° do artigo 186 da Lei nº 6.404/76 atribuir caráter facultativo de inclusão da DLPA na DMPL, algumas bancas entendem que a DLPA deve ser incluída na DMPL”</b>.</p><p>E o resumo aponta a causa provável: o <b>CPC 26</b>, que <b>não considera a DLPA como obrigatória, mas sim a DMPL</b>.</p><p class='fb-fonte'>Resumo 13 · <i>DLPA — Atenção!</i></p>",
14:"<p>Errado — está <b>invertido</b>. O quadro ATENÇÃO! diz que o <b>CPC 26</b> <b>“não considera a DLPA como obrigatória, mas sim a DMPL”</b>, e o quadro comparativo confirma: a DLPA <b>não é citada pelo CPC 26</b>, enquanto a DMPL <b>é obrigatória de acordo com o CPC 26</b>.</p><p>Guarde o cruzamento: <b>Lei 6.404 → DLPA obrigatória</b> · <b>CPC 26 → DMPL obrigatória</b>.</p><p class='fb-fonte'>Resumo 13 · <i>DLPA — Atenção! / DLPA × DMPL</i></p>",
15:"<p>Errado na <b>demonstração escolhida</b>. É o <b>EXEMPLO 01</b> do resumo, cuja solução é direta: <b>“nos termos do artigo 186, §2°, da Lei n° 6.404/76, a DLPA deverá indicar o montante do dividendo por ação do capital social”</b>. Gabarito: <b>DLPA</b>.</p><p>A Demonstração do Valor Adicionado era uma das alternativas erradas, ao lado da DFC pelo método direto, da DRE e da demonstração por outros resultados abrangentes.</p><p class='fb-fonte'>Resumo 13 · <i>DLPA — Exemplo 01</i></p>",
16:"<p>Errado — a lei não prevê essa inclusão. O <b>art. 186, §2º</b>, autoriza apenas que a DLPA <b>seja incluída na DMPL</b>, se esta for elaborada e publicada pela companhia.</p><p>Era a alternativa <b>a)</b> do <b>EXEMPLO 02</b> do resumo, e o gabarito foi a alternativa que dizia <b>“deve indicar o montante do dividendo por ação do capital social”</b>.</p><p class='fb-fonte'>Resumo 13 · <i>DLPA — Exemplo 02</i></p>",
17:"<p>Errado. A obrigatoriedade da DLPA que o material registra vem do <b>art. 176, II, da Lei nº 6.404/76</b>, transcrito na abertura da seção: é ele que a põe entre as demonstrações financeiras que a diretoria fará elaborar ao fim de cada exercício social.</p><p>Era a alternativa <b>b)</b> do <b>EXEMPLO 02</b>, e o gabarito foi a alternativa do <b>dividendo por ação</b>.</p><p class='fb-fonte off'>Não consta do Resumo 13 — o resumo não menciona a Lei nº 11.638/07 em nenhum ponto. A refutação aqui se apoia apenas no art. 176, II, da Lei 6.404/76, que o material transcreve.</p>",
18:"<p>Certo — são os sinais da <b>ESTRUTURA DA DLPA</b> do resumo: <b>(+) Reversão de Reserva de Lucros</b> e <b>(−) Transferências para Reservas de Lucros</b>.</p><p>A lógica é a da própria conta: reverter reserva <b>devolve</b> valor a lucros acumulados; transferir para reserva <b>tira</b> valor de lá.</p><p class='fb-fonte'>Resumo 13 · <i>Estrutura da DLPA</i></p>",
19:"<p>Errado no <b>sinal</b>. Na estrutura do resumo os <b>dividendos antecipados</b> aparecem como <b>(−) Dividendos Antecipados</b>, na penúltima linha, logo antes do <b>(=) Saldo do Final do Período</b>.</p><p>Na estrutura, só somam a <b>reversão de reserva de lucros</b> (+) e, com sinal duplo, os <b>ajustes de exercícios anteriores</b> e o <b>lucro ou prejuízo líquido</b> (+ ou −). Todo o resto subtrai.</p><p class='fb-fonte'>Resumo 13 · <i>Estrutura da DLPA</i></p>",
20:"<p>Certo — são os números do <b>exemplo</b> do resumo, com estes mesmos valores: PEPS em 2020 com lucro de <b>R$ 100.000</b>; em 2021 os contadores julgam melhor o <b>custo médio</b> e refazem também as demonstrações comparativas de 2020, cujo lucro passa a <b>R$ 60.000</b>.</p><p>A diferença de <b>R$ 40.000</b> é exatamente o que será ajustado — <b>“para ajustar o valor de R$ 100.000 para R$ 60.000”</b>.</p><p class='fb-fonte'>Resumo 13 · <i>Ajustes de períodos anteriores — exemplo</i></p>",
21:"<p>Certo — é o lançamento do resumo, literal: <b>D – Ajuste de Exercícios Anteriores - Lucros Acumulados R$ 40.000 (↓PL)</b> · <b>C – Estoques R$ 40.000 (↓Ativo)</b>.</p><p>O caminho do raciocínio no material: credita-se Estoques para trazer o valor de 100.000 para 60.000, e o débito <b>tem</b> de ir a Lucros Acumulados, a título de ajuste de exercícios anteriores.</p><p class='fb-fonte'>Resumo 13 · <i>Ajustes de períodos anteriores — exemplo</i></p>",
22:"<p>Errado justamente na <b>conta debitada</b>. O resumo explica por quê: <b>“a entidade não tem como debitar uma conta de resultado (exemplo: CMV) pelo ajuste da conta de resultado, pois este foi apurado e encerrado em 2020”</b>.</p><p>Sobra o débito em <b>Lucros Acumulados</b>, como ajuste de exercícios anteriores. É esse o motivo de o ajuste ser contabilizado <b>na DLPA</b>, e não na DRE.</p><p class='fb-fonte'>Resumo 13 · <i>Ajustes de períodos anteriores — exemplo</i></p>",
23:"<p>Certo — as duas setas estão no próprio lançamento do resumo: <b>D – Ajuste de Exercícios Anteriores - Lucros Acumulados R$ 40.000 (↓PL)</b> e <b>C – Estoques R$ 40.000 (↓Ativo)</b>.</p><p>Ativo e patrimônio líquido caem no mesmo valor — o ajuste apenas reconhece que o lucro de 2020, pelo novo critério, era menor.</p><p class='fb-fonte'>Resumo 13 · <i>Ajustes de períodos anteriores — exemplo</i></p>",
24:"<p>Certo — é a conclusão que o resumo tira do exemplo: <b>“o ajuste referente à diferença entre o lucro apurado pelo custo médio e o lucro apurado pelo PEPS, que é de R$ 40.000, deve ser contabilizado na DLPA, visto que houve um ajuste decorrente de efeitos da mudança de critério contábil”</b>.</p><p>O material registra ainda que, nas demonstrações comparativas de 2020, ela também usou o custo médio <b>“por se tratar de mudança de política contábil”</b>.</p><p class='fb-fonte'>Resumo 13 · <i>Ajustes de períodos anteriores — exemplo</i></p>",
25:"<p>Errado. Era a alternativa <b>d)</b> do <b>EXEMPLO 02</b>, e o gabarito foi outro. O próprio exemplo do ajuste mostra por quê: o resultado do exercício anterior <b>“foi apurado e encerrado”</b>, de modo que o ajuste vai a <b>Lucros Acumulados</b>, e não a conta de resultado.</p><p>Em outras palavras: o ajuste corrige o <b>saldo acumulado</b>, não o <b>resultado</b> do exercício a que se refere.</p><p class='fb-fonte'>Resumo 13 · <i>Ajustes de períodos anteriores — exemplo / DLPA — Exemplo 02</i></p>",
26:"<p>Certo — é a definição do resumo: a DMPL <b>“é uma demonstração contábil que tem por finalidade expor as variações (ou mutações) ocorridas, durante um exercício, em todas as contas que compõem o patrimônio líquido de uma empresa”</b>.</p><p>Guarde a palavra <b>todas</b>: é ela que separa a DMPL da DLPA, que se limita à conta de lucros ou prejuízos acumulados.</p><p class='fb-fonte'>Resumo 13 · <i>Demonstração das Mutações do Patrimônio Líquido (DMPL)</i></p>",
27:"<p>Certo, na letra do resumo: <b>“de acordo com o CPC 26 (Apresentação das Demonstrações Contábeis), a DMPL integra o conjunto completo de demonstrações contábeis a serem elaboradas ao final do período”</b>.</p><p>É o outro lado do cruzamento: o quadro comparativo diz que a DMPL <b>é obrigatória de acordo com o CPC 26</b>, ao passo que a DLPA <b>não é citada</b> por ele.</p><p class='fb-fonte'>Resumo 13 · <i>DMPL / DLPA × DMPL</i></p>",
28:"<p>Errado — <b>inverteu as duas colunas</b> do quadro. Pelo resumo, a <b>DLPA</b> <b>“demonstra as variações ocorridas na conta Lucros ou Prejuízos Acumulados, que é uma das contas do Patrimônio Líquido”</b>; a <b>DMPL</b> <b>“demonstra as variações ocorridas em todas as contas do Patrimônio Líquido. Ou seja, é mais completa que a DLPA”</b>.</p><p>A mais completa é sempre a <b>DMPL</b>.</p><p class='fb-fonte'>Resumo 13 · <i>DLPA × DMPL</i></p>",
29:"<p>Errado — é justamente o oposto do quadro <b>ATENÇÃO!</b>: <b>“de acordo com o CPC 26 (R1), é vedada a apresentação da Demonstração do Resultado Abrangente (DRA) exclusivamente na DMPL, ou seja, a DRA deve ser uma demonstração separada”</b>.</p><p>Mas cuidado com o complemento, porque a banca joga nos dois lados: <b>“contudo, ela também entra na DMPL, pois as contas do resultado abrangente ficam no PL”</b>. Proibido é apresentá-la <b>exclusivamente</b> ali.</p><p class='fb-fonte'>Resumo 13 · <i>DMPL — Atenção!</i></p>",
30:"<p>Certo — é a parte final do quadro <b>ATENÇÃO!</b>: <b>“contudo, ela também entra na DMPL, pois as contas do resultado abrangente ficam no PL”</b>.</p><p>Os dois comandos convivem: a DRA é <b>demonstração separada</b> (não pode ser apresentada só na DMPL) e, ao mesmo tempo, <b>aparece na DMPL</b>, porque as contas do resultado abrangente são contas do patrimônio líquido.</p><p class='fb-fonte'>Resumo 13 · <i>DMPL — Atenção!</i></p>",
31:"<p>Certo — são as seis contas do esquema do resumo sobre o <b>PATRIMÔNIO LÍQUIDO (art. 178, §2º, inciso III)</b>: <b>Capital Social</b>, <b>Reservas de Capital</b>, <b>Ajustes de Avaliação Patrimonial</b>, <b>Reservas de Lucros</b>, <b>Ações em Tesouraria</b> e <b>Prejuízos Acumulados</b>.</p><p>O material abre a seção dizendo: <b>“vale a pena lembrarmos que o Patrimônio Líquido é composto basicamente por seis contas”</b> — e são elas que formam a primeira linha da DMPL.</p><p class='fb-fonte'>Resumo 13 · <i>Composição do Patrimônio Líquido</i></p>",
32:"<p>Errado — o resumo lista esses três itens como <b>Reservas de Capital</b>: <b>ágio na emissão de ações</b>, <b>alienação de partes beneficiárias</b> e <b>alienação de bônus de subscrição</b>.</p><p>As <b>Reservas de Lucros</b> que ele arrola são outras: <b>Legal</b>, <b>Estatutária</b>, <b>para Contingências</b>, <b>de Lucros a Realizar</b> e <b>de Incentivos Fiscais</b>. E o Lançamento 07 confirma: o ágio na emissão de ações é <b>reserva de capital</b>.</p><p class='fb-fonte'>Resumo 13 · <i>Composição do Patrimônio Líquido</i></p>",
33:"<p>Certo — na composição detalhada do PL, o resumo traz <b>“(-) Ações em Tesouraria”</b> e <b>“(-) Prejuízos Acumulados”</b>.</p><p>A lista de sinais é útil na prova: <b>(+)</b> capital social subscrito, reservas de capital e reservas de lucros; <b>(−)</b> capital a integralizar, ações em tesouraria e prejuízos acumulados; <b>(+ ou −)</b> ajuste de avaliação patrimonial e ajuste acumulado de conversão.</p><p class='fb-fonte'>Resumo 13 · <i>Composição do Patrimônio Líquido</i></p>",
34:"<p>Certo — é a observação do resumo sobre o exemplo de apresentação: <b>“note que a primeira linha da DMPL é composta pelas contas do Patrimônio Líquido (PL), por isso a leitura de uma DMPL é feita da esquerda para a direita”</b>.</p><p>E o complemento: <b>“a leitura feita de cima para baixo é utilizada para verificarmos as movimentações em cada conta do PL”</b>.</p><p class='fb-fonte'>Resumo 13 · <i>DMPL — exemplo de apresentação</i></p>",
35:"<p>Certo — são os dois totais do exemplo do resumo: <b>“o saldo inicial do PL (R$ 370.000), acrescido das movimentações (entradas e saídas), deve bater com o saldo final do PL (R$ 395.000)”</b>.</p><p>Conferindo linha a linha: 370.000 + <b>20.000</b> (ações em tesouraria vendidas) + <b>100.000</b> (lucro líquido) + <b>0</b> (reserva legal) − <b>95.000</b> (dividendos) = <b>395.000</b>.</p><p class='fb-fonte'>Resumo 13 · <i>DMPL — exemplo de apresentação</i></p>",
36:"<p>Errado. Na linha da <b>reserva legal</b> do exemplo, o resumo põe <b>5.000</b> em Reservas de Lucros, <b>−5.000</b> em Lucros ou Prejuízos Acumulados e <b>0</b> na coluna do total do PL.</p><p>É a mesma lição do <b>Lançamento 05</b>: a constituição de reserva de lucros é permuta dentro do PL, então <b>não modifica</b> o total. Foi por isso que o saldo saiu de 370.000 para 395.000, e não para 390.000.</p><p class='fb-fonte'>Resumo 13 · <i>DMPL — exemplo de apresentação</i></p>",
37:"<p>Certo — é o <b>LANÇAMENTO 01</b> do resumo: <b>“um aumento de capital social com reservas de lucros é um fato contábil que não modifica o PL, porque ocorre permuta entre contas do PL”</b>.</p><p>Com os números dele: <b>D – Reservas de Lucros R$ 30.000</b> (diminui o PL) · <b>C – Capital Social R$ 30.000</b> (aumenta o PL). E a justificativa final: <b>“as duas contas são do PL, por isso não há alteração no valor total”</b>.</p><p class='fb-fonte'>Resumo 13 · <i>Lançamento 01 — aumento de capital com reservas de lucros</i></p>",
38:"<p>Errado. O <b>LANÇAMENTO 02</b> é expresso: <b>“um aumento de capital social com integralização em dinheiro pelos sócios é um fato contábil que aumenta o PL pelo valor integralizado”</b>.</p><p><b>D – Caixa R$ 30.000</b> (aumenta o ativo) · <b>C – Capital Social R$ 30.000</b> (aumenta o PL). Contraste com o Lançamento 01: lá a contrapartida estava <b>dentro</b> do PL; aqui ela vem do <b>ativo</b>, e por isso o total cresce.</p><p class='fb-fonte'>Resumo 13 · <i>Lançamento 02 — integralização em dinheiro</i></p>",
39:"<p>Certo — é o <b>LANÇAMENTO 03</b>, com o exemplo do resumo (ação disponível para venda futura): <b>D – Ações disponíveis para venda futura R$ 30.000</b> (aumenta o ativo) · <b>C – Ajuste de avaliação patrimonial R$ 30.000</b> (aumenta o PL).</p><p>O material resume: <b>“um Ajuste de Avaliação Patrimonial (credor) é um fato contábil que aumenta o PL”</b>.</p><p class='fb-fonte'>Resumo 13 · <i>Lançamento 03 — ajuste de avaliação patrimonial</i></p>",
40:"<p>Errado pela <b>OBS</b> do Lançamento 03: <b>“a conta Ajustes de Avaliação Patrimonial SEMPRE modifica o PL, pois a sua contrapartida será um aumento ou uma diminuição do Ativo ou do Passivo”</b>.</p><p>É o contraste que a banca explora: reservas de lucros e capital social podem se movimentar em permuta interna (efeito zero); o <b>AAP não</b>, porque sua contrapartida está sempre <b>fora</b> do patrimônio líquido.</p><p class='fb-fonte'>Resumo 13 · <i>Lançamento 03 — OBS</i></p>",
41:"<p>Certo — <b>LANÇAMENTO 04</b>: <b>“o lucro líquido do exercício é um fato contábil que aumenta o PL”</b>. <b>D – Resultado do Exercício R$ 30.000</b> (encerra a conta de resultado) · <b>C – Lucros Acumulados R$ 30.000</b> (aumenta o PL).</p><p>No exemplo de DMPL do resumo é essa a linha que traz <b>+100.000</b> tanto na coluna de Lucros Acumulados quanto no total do PL.</p><p class='fb-fonte'>Resumo 13 · <i>Lançamento 04 — lucro líquido do exercício</i></p>",
42:"<p>Errado — é exatamente a <b>OBS</b> do Lançamento 04: <b>“a apropriação do lucro líquido do exercício por meio da conta de Lucros (no PL) para formação de Reserva para Contingências é um fato contábil que NÃO modifica o PL”</b>.</p><p><b>D – Lucros R$ 30.000</b> (diminui o PL) · <b>C – Reserva para Contingências R$ 30.000</b> (aumenta o PL). O que aumenta o PL é o <b>lucro</b>; a sua <b>destinação</b> a reservas, não.</p><p class='fb-fonte'>Resumo 13 · <i>Lançamento 04 — OBS</i></p>",
43:"<p>Certo — <b>LANÇAMENTO 05</b>: <b>“a constituição de Reserva Legal é um fato contábil que não modifica o PL”</b>. <b>D – Lucros acumulados R$ 30.000</b> (diminui o PL) · <b>C – Reserva legal R$ 30.000</b> (aumenta o PL).</p><p>E a OBS amplia a regra: <b>“esse procedimento é válido para todas as constituições de reservas de lucros, inclusive no caso de constituição de Reserva Estatutária e Reserva para Contingências”</b>.</p><p class='fb-fonte'>Resumo 13 · <i>Lançamento 05 — constituição de reserva legal</i></p>",
44:"<p>Errado na parte que interessa à DMPL: a constituição de reserva de lucros <b>não reduz</b> o patrimônio líquido. Pelo <b>LANÇAMENTO 05</b>, <b>D – Lucros acumulados</b> (diminui o PL) e <b>C – Reserva legal</b> (aumenta o PL) — permuta interna, <b>efeito zero</b> no total.</p><p>No exemplo de DMPL isso aparece à vista: a linha da reserva legal traz <b>5.000</b> em reservas, <b>−5.000</b> em lucros acumulados e <b>0</b> no total do PL.</p><p class='fb-fonte off'>Não consta do Resumo 13 — o percentual de 5% do lucro líquido para a reserva legal não é tratado neste resumo, que só cuida do efeito patrimonial da constituição (Lançamento 05). O dado vem de fora do material.</p>",
45:"<p>Certo — <b>LANÇAMENTO 06</b>: <b>“o Dividendo Distribuído é um fato contábil que diminui o PL”</b>. <b>D – Lucros acumulados R$ 30.000</b> (diminui o PL) · <b>C – Dividendos a pagar R$ 30.000</b> (aumenta o passivo).</p><p>Aqui a contrapartida está <b>fora</b> do PL — vai para o passivo —, e por isso o total cai. No exemplo de DMPL do resumo é a linha de <b>−95.000</b>.</p><p class='fb-fonte'>Resumo 13 · <i>Lançamento 06 — distribuição de dividendos</i></p>",
46:"<p>Errado — a <b>OBS</b> do Lançamento 06 diz o contrário: <b>“o tratamento contábil dado aos Juros Sobre Capital Próprio (JSCP) segue o mesmo tratamento dado do dividendo”</b>.</p><p>Logo, o JSCP também <b>diminui o PL</b>, com débito em Lucros Acumulados e crédito em conta de passivo.</p><p class='fb-fonte'>Resumo 13 · <i>Lançamento 06 — OBS</i></p>",
47:"<p>Certo — é o <b>LANÇAMENTO 07</b>, com os valores do resumo: <b>D – Bancos (Ativo Circulante) R$ 32.400</b> (aumenta o Ativo) · <b>C – Capital Social R$ 30.000</b> (aumenta o PL) · <b>C – Ágio na Emissão de Ações - Reserva de capital R$ 2.400</b> (aumenta o PL).</p><p>O material abre o tópico dizendo: <b>“a emissão de AÇÕES com ÁGIO é um fato contábil que aumenta o PL”</b> — e aumenta pelos <b>R$ 32.400</b> que entraram.</p><p class='fb-fonte'>Resumo 13 · <i>Lançamento 07 — emissão de ações com ágio</i></p>",
48:"<p>Errado por <b>uma palavra</b>. No Lançamento 07 o resumo identifica a conta como <b>“Ágio na Emissão de Ações - Reserva de capital”</b>, e na composição do PL o ágio na emissão de ações aparece entre as <b>Reservas de Capital</b>, junto da alienação de partes beneficiárias e da alienação de bônus de subscrição.</p><p>As reservas de <b>lucros</b> são Legal, Estatutária, para Contingências, de Lucros a Realizar e de Incentivos Fiscais.</p><p class='fb-fonte'>Resumo 13 · <i>Lançamento 07 / Composição do Patrimônio Líquido</i></p>",
49:"<p>Errado. O <b>LANÇAMENTO 08</b> é claro: <b>“a emissão de AÇÕES com GASTOS para colocação dos papéis no mercado é um fato contábil que aumenta o PL”</b>, e a <b>OBS 01</b> reforça: <b>“note que a emissão de Ações com gastos também aumenta o PL”</b>.</p><p>Com os números do resumo: <b>D – Caixa R$ 27.600</b> · <b>D – Gastos na emissão de Ações R$ 2.400</b> (retificadora do PL) · <b>C – Capital Social R$ 30.000</b>. O aumento líquido é de <b>R$ 27.600</b> — menor, mas aumento.</p><p class='fb-fonte'>Resumo 13 · <i>Lançamento 08 — emissão de ações com gastos</i></p>",
50:"<p>Certo — o resumo classifica a conta assim, entre parênteses, no próprio lançamento: <b>“D – Gastos na emissão de Ações R$ 2.400 (Retificadora do PL)”</b>.</p><p>Por ser retificadora, ela reduz o efeito da emissão sem tirá-lo do campo positivo: entram R$ 27.600 em caixa, o capital social sobe R$ 30.000 e o PL cresce <b>R$ 27.600</b>.</p><p class='fb-fonte'>Resumo 13 · <i>Lançamento 08 — emissão de ações com gastos</i></p>",
51:"<p>Certo — é a <b>OBS 02</b> do Lançamento 08: <b>“se ocorrer ÁGIO e GASTOS, simultaneamente, na emissão de AÇÕES, o CPC 08 (item 06) dispõe que o prêmio (ágio) deve ser utilizado para absorver os custos (gastos) de transação”</b>.</p><p>Ou seja: o ágio não fica integralmente em reserva de capital — ele primeiro <b>absorve</b> os gastos de colocação dos papéis.</p><p class='fb-fonte'>Resumo 13 · <i>Lançamento 08 — OBS 02</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"13", nome:"DLPA, ajustes de exercícios anteriores e DMPL", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
