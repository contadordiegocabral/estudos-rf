/* Contabilidade Pública — Módulo 13: Demonstração das Mutações no Patrimônio Líquido (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cpub13 = (function(){
"use strict";

var CARDS = [
  ["O que a DMPL demonstra?","A <b>evolução — aumento ou redução — do patrimônio líquido</b> da entidade durante um período."],
  ["Como se compõe a alteração total no PL de um período?","<b>Resultado do período</b> <b>+</b> outras receitas e despesas reconhecidas <b>diretamente no PL</b> (sem passar pelo resultado) <b>+</b> <b>contribuições dos proprietários</b> <b>–</b> <b>distribuições aos proprietários</b>."],
  ["Em que qualidade agem os proprietários nessas contribuições e distribuições?","Na de <b>detentores do capital próprio</b> da entidade."],
  ["Exemplo de cálculo da alteração total no PL","Resultado 100.000 <b>+</b> ganho de reavaliação 50.000 <b>−</b> perda de conversão cambial 20.000 <b>+</b> contribuição 30.000 <b>−</b> distribuição 15.000 = <b>R$ 145.000</b>."],
  ["A DMPL é obrigatória para quem?","Para as <b>empresas estatais dependentes constituídas sob a forma de sociedades anônimas</b>."],
  ["Para quem a DMPL é facultativa?","Para os <b>demais órgãos e entidades</b> dos entes da Federação."],
  ["Qual a relação entre a DMPL e a LDO?","A DMPL <b>complementa o Anexo de Metas Fiscais (AMF)</b>, integrante do <b>Projeto de Lei de Diretrizes Orçamentárias</b>."],
  ["Com que grupo do PCASP a DMPL é elaborada?","Com o <b>grupo 3 (Patrimônio Líquido)</b> da <b>classe 2 (Passivo)</b> — a conta <b>2.3</b>."],
  ["Como se lê o quadro da DMPL?","Cada célula <b>conjuga o critério da coluna (C) com o da linha (L)</b>. Nas <b>colunas</b> vão as <b>contas contábeis</b> de onde os dados são extraídos; as <b>linhas</b> delimitam o <b>par de lançamento</b> dessas contas."],
  ["De onde se extraem os dados dos pares de lançamento?","De <b>contas de controle</b>, <b>atributos de contas</b>, <b>informações complementares</b> ou <b>outra forma definida pelo ente</b>."],
  ["Exemplo de leitura do quadro: aumento de capital em dinheiro","Coluna <b>“Patrimônio Social / Capital Social”</b> e linha <b>“Aumento de Capital”</b> extraem o par: <b>D</b> Caixa e Equivalentes de Caixa · <b>C</b> Patrimônio Social e Capital Social."],
  ["Quais as colunas típicas da DMPL?","<b>Patrimônio Social/Capital Social</b> · <b>AFAC</b> · <b>Reserva de Capital</b> · <b>Ajustes de Avaliação Patrimonial</b> · (demais contas do PL) · <b>TOTAL DO PL</b>."],

  ["Quais as linhas típicas da DMPL?","<b>Saldos Iniciais</b> · Ajustes de Exercícios Anteriores · Aumento de Capital · Resgate/Reemissão de Ações · Juros sobre Capital Próprio · Resultado do Exercício · Ajustes de Avaliação Patrimonial · Constituição/Reversão de Reservas · Dividendos a Distribuir por Ação · <b>Saldos Finais</b>."],
  ["Itens demonstrados na DMPL — os dois primeiros","<b>O resultado do período</b>; e <b>cada item de receita e de despesa reconhecido diretamente no PL</b> por força de norma específica."],
  ["Exemplos de itens reconhecidos diretamente no PL","<b>Aumento ou redução por reavaliação e ganhos</b>, quando utilizada a <b>reserva de reavaliação</b>; e <b>perdas decorrentes de ajustes específicos de conversão para moeda estrangeira</b>."],
  ["Itens demonstrados na DMPL — os demais","Os <b>ajustes de exercícios anteriores</b>; a <b>destinação do resultado</b> (constituição de reservas, distribuição de dividendos); as <b>transações de capital com os proprietários</b>; e, para cada item do PL, os <b>efeitos das alterações nas políticas contábeis e da correção de erros</b>."],
  ["Exemplos de transações de capital com os proprietários","<b>Aumento de capital</b>, <b>aquisição ou venda de ações em tesouraria</b>, <b>juros sobre capital próprio</b> e <b>distribuições aos proprietários</b>."],
  ["O que é Patrimônio Social / Capital Social?","O <b>patrimônio social</b> das <b>autarquias, fundações e fundos</b> e o <b>capital social</b> das <b>demais entidades da administração indireta</b>."],
  ["O que é o AFAC?","<b>Adiantamento para Futuro Aumento de Capital</b> — recursos recebidos de <b>acionistas ou quotistas</b> destinados a <b>aumento de capital</b>, <b>quando não haja possibilidade de devolução</b> desses recursos."],
  ["O que são Reservas de Capital?","Os <b>valores acrescidos ao patrimônio que NÃO transitaram pelo resultado</b> como variações patrimoniais aumentativas."],
  ["O que são Ajustes de Avaliação Patrimonial?","As <b>contrapartidas de aumentos ou diminuições de valor</b> atribuídos a elementos do <b>ativo e do passivo</b> pela <b>avaliação a valor justo</b>, nos casos da <b>Lei 6.404/76</b> ou de normas da <b>CVM</b>, <b>enquanto não computadas no resultado</b> em obediência ao <b>regime de competência</b>."],
  ["O que são Reservas de Lucros?","As reservas constituídas com <b>parcelas do lucro líquido</b> das entidades para <b>finalidades específicas</b>."],
  ["O que são Demais Reservas?","As reservas <b>não classificadas como de capital ou de lucro</b>, inclusive aquelas que terão seus saldos <b>realizados por terem sido extintas pela legislação</b>."],
  ["O que são Resultados Acumulados?","O <b>saldo remanescente dos lucros ou prejuízos líquidos</b> das empresas e os <b>superávits ou déficits acumulados</b> da administração direta, autarquias, fundações e fundos."],

  ["O que a conta Ajustes de Exercícios Anteriores registra?","Os efeitos da <b>mudança de critério contábil</b> ou da <b>retificação de erro imputável a exercício anterior</b> que <b>não possam ser atribuídos a fatos subsequentes</b>."],
  ["Em que conta os Ajustes de Exercícios Anteriores se integram?","Na conta <b>Resultados Acumulados</b>."],
  ["O que são Ações / Cotas em Tesouraria?","O valor das <b>ações ou cotas da entidade adquiridas pela própria entidade</b>. É conta <b>redutora</b> do PL."],
  ["Ajustes de Avaliação Patrimonial × Ajustes de Exercícios Anteriores","<b>Avaliação Patrimonial:</b> contrapartidas de aumentos/diminuições do ativo e do passivo por <b>avaliação a valor justo</b>. <b>Exercícios Anteriores:</b> efeitos de <b>mudança de critério contábil</b> ou <b>retificação de erro</b> de exercício anterior."],
  ["Quando a alteração no PL vai para nota explicativa?","<b>Sempre que for relevante</b> — seja <b>pelo valor</b>, seja <b>pela natureza da informação</b>."],
  ["Exemplos de alteração relevante a divulgar em nota","<b>Efeito no resultado acumulado</b> pela <b>adoção inicial</b> das disposições das normas brasileiras de contabilidade; e os <b>efeitos das alterações nas políticas contábeis ou correção de erros</b>."],
  ["Onde os dividendos podem ser divulgados?","Na <b>DVP</b>, na <b>DMPL</b> <b>ou</b> nas <b>notas explicativas</b> — o valor distribuído e o <b>valor por ação</b>."],
  ["A DMPL integra a informação comparativa mínima da NBC TSP 11?","<b>Sim</b> — ao lado do <b>BP</b>, da <b>demonstração do resultado</b> e da <b>DFC</b>, com as respectivas notas explicativas."],
  ["Onde o resultado do período aparece no Balanço Patrimonial?","No <b>patrimônio líquido</b>, <b>segregado</b> dos resultados acumulados de períodos anteriores."],
  ["Como a DMPL se conecta com a DVP?","O <b>resultado do período</b> apurado na <b>DVP</b> entra na DMPL na linha <b>Resultado do Exercício</b> e compõe o <b>saldo final</b> do PL."],
  ["Qual a diferença entre reserva de capital e reserva de lucros?","<b>Reserva de capital</b>: valores acrescidos ao patrimônio que <b>não transitaram pelo resultado</b>. <b>Reserva de lucros</b>: constituída com <b>parcelas do lucro líquido</b> para finalidades específicas."],
  ["Onde começa e onde termina o quadro da DMPL?","Começa nos <b>Saldos Iniciais</b> e termina nos <b>Saldos Finais</b> — entre eles ficam todas as mutações do período."]
];

var QS = [
  ["A Demonstração das Mutações no Patrimônio Líquido demonstrará a evolução do patrimônio líquido da entidade durante um período.","C","FUNDATEC","Aumento ou redução do PL."],
  ["A alteração total no patrimônio líquido durante um período representa apenas o resultado desse período.","E","CESPE","Soma também outras receitas e despesas reconhecidas <b>diretamente</b> no PL e as transações com proprietários."],
  ["As contribuições dos proprietários somam e as distribuições aos proprietários deduzem na alteração total do patrimônio líquido.","C","FCC","Agindo na qualidade de detentores do capital próprio."],
  ["Com resultado de R$ 100.000, ganho de reavaliação de R$ 50.000, perda cambial de R$ 20.000, contribuição de R$ 30.000 e distribuição de R$ 15.000, a alteração total no PL é de R$ 145.000.","C","FGV","100 + 50 − 20 + 30 − 15."],
  ["A DMPL é obrigatória para todos os órgãos e entidades dos entes da Federação.","E","VUNESP","Obrigatória apenas para as <b>estatais dependentes constituídas sob a forma de S.A.</b>"],
  ["A DMPL é obrigatória para as empresas estatais dependentes constituídas sob a forma de sociedades anônimas.","C","FUNDATEC","Regra do MCASP."],
  ["A DMPL é facultativa para os demais órgãos e entidades dos entes da Federação.","C","CESPE","Complementa a regra da obrigatoriedade."],
  ["A DMPL complementa o Anexo de Metas Fiscais, integrante do Projeto de Lei de Diretrizes Orçamentárias.","C","FCC","Relação expressa no MCASP."],
  ["A DMPL complementa o Anexo de Riscos Fiscais da LDO.","E","FGV","Complementa o <b>Anexo de Metas Fiscais</b>."],
  ["A DMPL será elaborada utilizando-se o grupo 3 da classe 2 do PCASP.","C","VUNESP","Conta 2.3 — Patrimônio Líquido."],
  ["A DMPL será elaborada com as classes 3 e 4 do PCASP.","E","FUNDATEC","Essas são as classes da <b>DVP</b>."],
  ["No quadro da DMPL, as colunas apresentam as contas contábeis das quais os dados devem ser extraídos e as linhas delimitam o par de lançamento dessas contas.","C","CESPE","Lógica de preenchimento das células."],
  ["Os dados dos pares de lançamentos podem ser extraídos de contas de controle, atributos de contas, informações complementares ou outra forma definida pelo ente.","C","FCC","Flexibilidade admitida pelo MCASP."],
  ["Em um aumento de capital em dinheiro, a célula que cruza a coluna Patrimônio Social e a linha Aumento de Capital extrai o par débito em Caixa e crédito em Patrimônio Social e Capital Social.","C","FGV","Exemplo do próprio MCASP."],
  ["A primeira e a última linha do quadro da DMPL são, respectivamente, os saldos iniciais e os saldos finais.","C","VUNESP","Entre elas ficam as mutações do período."],
  ["O resultado do período é um dos itens demonstrados na DMPL.","C","FUNDATEC","Primeiro item do rol."],
  ["A DMPL demonstra cada item de receita e de despesa do período que seja reconhecido diretamente no patrimônio líquido em virtude de norma específica.","C","CESPE","Segundo item do rol."],
  ["O aumento por reavaliação com uso da reserva de reavaliação é exemplo de item reconhecido diretamente no patrimônio líquido.","C","FCC","Exemplo do MCASP."],
  ["As perdas decorrentes de ajustes específicos de conversão para moeda estrangeira transitam obrigatoriamente pelo resultado do período.","E","FGV","São exemplo de item reconhecido <b>diretamente no PL</b>."],
  ["Os ajustes de exercícios anteriores são demonstrados na DMPL.","C","VUNESP","Constam do rol."],
  ["A destinação do resultado, como a constituição de reservas e a distribuição de dividendos, é demonstrada na DMPL.","C","FUNDATEC","Consta do rol."],
  ["O aumento de capital, a aquisição ou venda de ações em tesouraria e os juros sobre capital próprio são transações de capital com os proprietários demonstradas na DMPL.","C","CESPE","Consta do rol."],
  ["Para cada item do patrimônio líquido divulgado, a DMPL apresenta os efeitos das alterações nas políticas contábeis e da correção de erros.","C","FCC","Último item do rol."],
  ["Patrimônio Social e Capital Social compreende o patrimônio social das autarquias, fundações e fundos e o capital social das demais entidades da administração indireta.","C","FGV","Definição."],
  ["O Adiantamento para Futuro Aumento de Capital compreende recursos de acionistas destinados a aumento de capital, ainda que haja possibilidade de devolução.","E","VUNESP","Só quando <b>não haja</b> possibilidade de devolução."],
  ["As Reservas de Capital compreendem os valores acrescidos ao patrimônio que não transitaram pelo resultado como variações patrimoniais aumentativas.","C","FUNDATEC","Definição."],
  ["As Reservas de Lucros são constituídas com parcelas do lucro líquido das entidades para finalidades específicas.","C","CESPE","Definição."],
  ["As Demais Reservas compreendem as reservas não classificadas como de capital ou de lucro, inclusive as que terão saldos realizados por terem sido extintas pela legislação.","C","FCC","Definição."],
  ["Os Ajustes de Avaliação Patrimonial compreendem as contrapartidas de aumentos ou diminuições de valor atribuídos a elementos do ativo e do passivo em decorrência de avaliação a valor justo.","C","FGV","Nos casos da Lei 6.404/76 ou de normas da CVM."],
  ["Os Ajustes de Avaliação Patrimonial permanecem no patrimônio líquido enquanto não computados no resultado do exercício, em obediência ao regime de competência.","C","VUNESP","Parte final da definição."],
  ["Os Resultados Acumulados compreendem o saldo remanescente dos lucros ou prejuízos líquidos das empresas e os superávits ou déficits acumulados da administração direta, autarquias, fundações e fundos.","C","FUNDATEC","Definição."],
  ["A conta Ajustes de Exercícios Anteriores registra os efeitos da avaliação de ativos a valor justo.","E","CESPE","Registra <b>mudança de critério contábil</b> ou <b>retificação de erro</b> de exercício anterior."],
  ["A conta Ajustes de Exercícios Anteriores integra a conta Resultados Acumulados.","C","FCC","Integração expressa."],
  ["Os efeitos de erro imputável a exercício anterior que possam ser atribuídos a fatos subsequentes vão para Ajustes de Exercícios Anteriores.","E","FGV","Só os que <b>não possam</b> ser atribuídos a fatos subsequentes."],
  ["Ações ou Cotas em Tesouraria compreendem o valor das ações ou cotas da entidade adquiridas pela própria entidade.","C","VUNESP","Conta redutora do PL."],
  ["Qualquer alteração relevante no patrimônio líquido, seja pelo valor ou pela natureza da informação, deve ser divulgada em notas explicativas.","C","FUNDATEC","Regra geral das notas da DMPL."],
  ["O efeito no resultado acumulado decorrente da adoção inicial das normas brasileiras de contabilidade é exemplo de alteração relevante a divulgar.","C","CESPE","Exemplo do MCASP."],
  ["Os efeitos das alterações nas políticas contábeis ou correção de erros são exemplo de alteração relevante a divulgar em notas.","C","FCC","Exemplo do MCASP."],
  ["Os dividendos distribuídos e o valor por ação podem ser divulgados na DMPL.","C","FGV","Ou na DVP, ou em notas explicativas."],
  ["A DMPL integra a informação comparativa mínima exigida pela NBC TSP 11.","C","VUNESP","Ao lado do BP, da demonstração do resultado e da DFC."],
  ["O resultado do período apurado na DVP entra na DMPL na linha Resultado do Exercício.","C","FUNDATEC","Integração entre as demonstrações."],
  ["No patrimônio líquido do balanço patrimonial, o resultado do período deve ser evidenciado junto com os resultados acumulados de períodos anteriores, sem segregação.","E","CESPE","Deve ser evidenciado <b>segregado</b>."],
  ["Reserva de capital e reserva de lucros se distinguem porque a primeira não transitou pelo resultado e a segunda é constituída com parcelas do lucro líquido.","C","FCC","Distinção conceitual."],
  ["Não há muitas questões de bancas sobre a DMPL porque ela é facultativa para a maior parte dos órgãos públicos.","C","FGV","Seu alcance obrigatório é restrito às estatais dependentes sob forma de S.A."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("O que é a DMPL e para quem é obrigatória",
      '<div class="box"><span class="bl">Conceito</span>'+
      '<p>A DMPL demonstra a <b>evolução — aumento ou redução — do patrimônio líquido</b> da entidade durante um período.</p></div>'+
      '<div class="box"><span class="bl">Como se forma a alteração total do PL</span>'+
      '<p class="mn"><em>Resultado do período<br>+ outras receitas e despesas reconhecidas <b>diretamente no PL</b><br>+ contribuições dos proprietários<br>− distribuições aos proprietários</em></p>'+
      '<p>Os proprietários agem aqui na qualidade de <b>detentores do capital próprio</b> da entidade.</p></div>'+
      '<div class="box tip"><span class="bl">Exemplo numérico</span>'+
      '<p>Resultado <b>100.000</b> · ganho de reavaliação <b>+50.000</b> · perda de conversão cambial <b>−20.000</b> · contribuição dos proprietários <b>+30.000</b> · distribuição <b>−15.000</b> → alteração total de <b>R$ 145.000</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Obrigatoriedade — pergunta clássica</span>'+
      '<p><b>OBRIGATÓRIA</b> para as <b>empresas estatais dependentes constituídas sob a forma de SOCIEDADES ANÔNIMAS</b>.</p>'+
      '<p><b>FACULTATIVA</b> para os <b>demais órgãos e entidades</b> dos entes.</p></div>'+
      '<div class="box"><span class="bl">Relação com a LDO</span>'+
      '<p>A DMPL <b>complementa o Anexo de Metas Fiscais (AMF)</b>, integrante do <b>Projeto de Lei de Diretrizes Orçamentárias</b> — não o Anexo de Riscos Fiscais.</p></div>')
  ],
  V2:[
    sl("Elaboração, o quadro e os itens demonstrados",
      '<div class="box"><span class="bl">Elaboração</span>'+
      '<p><b>Grupo 3 (Patrimônio Líquido) da classe 2 (Passivo)</b> do PCASP — a conta <b>2.3</b>.</p>'+
      '<p class="mn"><em>1.1 Ativo Circulante · 1.2 ANC || 2.1 Passivo Circulante · 2.2 PNC · <b>2.3 Patrimônio Líquido</b></em></p></div>'+
      '<div class="box"><span class="bl">Como se lê o quadro</span>'+
      '<p>Cada célula <b>conjuga o critério da COLUNA com o da LINHA</b>. Nas <b>colunas</b>, as <b>contas contábeis</b> de onde os dados saem; nas <b>linhas</b>, o <b>par de lançamento</b> dessas contas. Os dados vêm de <b>contas de controle</b>, <b>atributos de contas</b>, <b>informações complementares</b> ou outra forma definida pelo ente.</p>'+
      '<p><b>Exemplo:</b> aumento de capital em dinheiro → coluna <b>Patrimônio Social/Capital Social</b> × linha <b>Aumento de Capital</b> → par <b>D</b> Caixa e Equivalentes · <b>C</b> Patrimônio Social e Capital Social.</p></div>'+
      '<div class="box"><span class="bl">Colunas e linhas típicas</span>'+
      '<p><b>Colunas:</b> Patrimônio Social/Capital Social · AFAC · Reserva de Capital · Ajustes de Avaliação Patrimonial · (demais) · <b>TOTAL DO PL</b>.</p>'+
      '<p><b>Linhas:</b> <b>Saldos Iniciais</b> → Ajustes de Exercícios Anteriores → Aumento de Capital → Resgate/Reemissão de Ações → Juros sobre Capital Próprio → Resultado do Exercício → Ajustes de Avaliação Patrimonial → Constituição/Reversão de Reservas → Dividendos a Distribuir por Ação → <b>Saldos Finais</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Itens demonstrados</span>'+
      '<ul><li>O <b>resultado do período</b>;</li>'+
      '<li>cada <b>receita e despesa reconhecida diretamente no PL</b> por norma específica — reavaliação com uso da <b>reserva de reavaliação</b>; <b>perdas de conversão para moeda estrangeira</b>;</li>'+
      '<li>os <b>ajustes de exercícios anteriores</b>;</li>'+
      '<li>a <b>destinação do resultado</b> — reservas e dividendos;</li>'+
      '<li>as <b>transações de capital com os proprietários</b> — aumento de capital, ações em tesouraria, <b>JSCP</b>, distribuições;</li>'+
      '<li>por item do PL, os efeitos de <b>alterações nas políticas contábeis</b> e da <b>correção de erros</b>.</li></ul></div>')
  ],
  V3:[
    sl("Definições das contas e notas explicativas",
      '<div class="box"><span class="bl">As contas do PL, uma a uma</span>'+
      '<ul><li><b>Patrimônio Social / Capital Social</b> — patrimônio social das <b>autarquias, fundações e fundos</b> e capital social das <b>demais entidades da administração indireta</b>.</li>'+
      '<li><b>AFAC</b> — recursos de acionistas/quotistas para <b>aumento de capital</b>, <b>quando não haja possibilidade de devolução</b>.</li>'+
      '<li><b>Reservas de Capital</b> — valores acrescidos ao patrimônio que <b>não transitaram pelo resultado</b> como VPA.</li>'+
      '<li><b>Ajustes de Avaliação Patrimonial</b> — contrapartidas de aumentos/diminuições do <b>ativo e do passivo</b> por <b>avaliação a valor justo</b> (Lei 6.404/76 ou normas da CVM), <b>enquanto não computadas no resultado</b>.</li>'+
      '<li><b>Reservas de Lucros</b> — constituídas com <b>parcelas do lucro líquido</b> para finalidades específicas.</li>'+
      '<li><b>Demais Reservas</b> — as que não são de capital nem de lucro, inclusive as <b>extintas pela legislação</b>.</li>'+
      '<li><b>Resultados Acumulados</b> — lucros/prejuízos líquidos remanescentes e <b>superávits ou déficits acumulados</b> da administração direta, autarquias, fundações e fundos.</li>'+
      '<li><b>(–) Ações/Cotas em Tesouraria</b> — ações ou cotas <b>adquiridas pela própria entidade</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Os dois “ajustes” que a banca troca</span>'+
      '<p><b>Ajustes de AVALIAÇÃO PATRIMONIAL</b> → contrapartidas de <b>avaliação a valor justo</b> do ativo e do passivo.</p>'+
      '<p><b>Ajustes de EXERCÍCIOS ANTERIORES</b> → efeitos da <b>mudança de critério contábil</b> ou da <b>retificação de erro</b> imputável a exercício anterior <b>que não possam ser atribuídos a fatos subsequentes</b>. Integram a conta <b>Resultados Acumulados</b>.</p></div>'+
      '<div class="box"><span class="bl">Notas explicativas</span>'+
      '<p><b>Qualquer alteração relevante no PL</b> — pelo <b>valor</b> ou pela <b>natureza da informação</b> — deve ser divulgada. Exemplos: <b>efeito no resultado acumulado pela adoção inicial</b> das normas brasileiras de contabilidade; <b>efeitos de alterações nas políticas contábeis ou correção de erros</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Como a DMPL conversa com as outras</span>'+
      '<p>O <b>resultado do período</b> vem da <b>DVP</b> e entra na linha <b>Resultado do Exercício</b>. O <b>saldo final</b> do PL é o que aparece no <b>Balanço Patrimonial</b>, com o resultado do período <b>segregado</b> dos acumulados. E a DMPL integra a <b>informação comparativa mínima</b> da NBC TSP 11, ao lado de BP, demonstração do resultado e DFC.</p></div>')
  ]
};

var EX = {
S1:{t:"wordbank", instr:"Monte a composição da alteração total no patrimônio líquido",
  target:["Resultado","do","período","+","outras","receitas","e","despesas","no","PL","+","contribuições","dos","proprietários","−","distribuições","aos","proprietários"],
  extra:["VPA","VPD","Receitas Arrecadadas"],
  why:"Quatro parcelas — duas somam, uma subtrai."},

S2:{t:"mc", instr:"Resultado R$ 100.000, ganho de reavaliação R$ 50.000, perda cambial R$ 20.000, contribuição R$ 30.000 e distribuição R$ 15.000. Qual a alteração total no PL?",
  options:["R$ 145.000","R$ 130.000","R$ 165.000","R$ 100.000"],
  answer:0,
  why:"100 + 50 − 20 + 30 − 15."},

S3:{t:"sort", instr:"Para quem a DMPL é obrigatória?",
  buckets:["Obrigatória","Facultativa"],
  items:[["Empresa estatal dependente constituída como sociedade anônima",0],
         ["Autarquia municipal",1],["Fundação pública",1],["Administração direta do ente",1]],
  why:"O corte é a estatal dependente sob forma de S.A."},

S4:{t:"mc", instr:"A DMPL complementa qual anexo do Projeto de Lei de Diretrizes Orçamentárias?",
  options:["O Anexo de Metas Fiscais","O Anexo de Riscos Fiscais",
           "O Anexo de Prioridades e Metas","O Demonstrativo da Dívida Consolidada"],
  answer:0,
  why:"Relação expressa no MCASP."},

S5:{t:"mc", instr:"Com qual grupo do PCASP a DMPL é elaborada?",
  options:["Grupo 3 da classe 2 (Patrimônio Líquido)","Classes 3 e 4",
           "Classe 6","Grupo 2 da classe 5"],
  answer:0,
  why:"Conta 2.3 — as classes 3 e 4 são da DVP."},

S6:{t:"match", instr:"Ligue cada eixo do quadro da DMPL ao que ele traz",
  pairs:[["Colunas","As contas contábeis das quais os dados devem ser extraídos"],
         ["Linhas","O par de lançamento dessas contas"]],
  why:"Cada célula conjuga os dois critérios."},

S7:{t:"gap", instr:"Complete o exemplo do aumento de capital em dinheiro",
  before:"O par de lançamentos é débito em Caixa e Equivalentes de Caixa e crédito em ",
  after:".",
  options:["Patrimônio Social e Capital Social","Reservas de Capital","Resultados Acumulados"], answer:0,
  why:"Cruzamento da coluna Patrimônio Social com a linha Aumento de Capital."},

S8:{t:"order", instr:"Ordene as linhas do quadro da DMPL",
  items:["Saldos Iniciais","Ajustes de Exercícios Anteriores","Aumento de Capital","Resultado do Exercício","Constituição ou Reversão de Reservas","Saldos Finais"],
  why:"O quadro sempre parte dos saldos iniciais e fecha nos finais."},

S9:{t:"multi", instr:"Marque os itens demonstrados na DMPL",
  options:["O resultado do período",
           "Receitas e despesas reconhecidas diretamente no patrimônio líquido por norma específica",
           "Os ajustes de exercícios anteriores",
           "A destinação do resultado, como reservas e dividendos",
           "As transações de capital com os proprietários",
           "Os efeitos de alterações nas políticas contábeis e correção de erros",
           "A previsão atualizada da receita orçamentária"],
  answers:[0,1,2,3,4,5],
  why:"A última é do Balanço Orçamentário."},

S10:{t:"multi", instr:"São exemplos de itens reconhecidos DIRETAMENTE no patrimônio líquido",
  options:["Aumento ou redução por reavaliação, quando utilizada a reserva de reavaliação",
           "Perdas decorrentes de ajustes específicos de conversão para moeda estrangeira",
           "Despesas com pessoal do exercício","Depreciação do imobilizado"],
  answers:[0,1],
  why:"As duas últimas transitam pelo resultado, como VPD."},

S11:{t:"multi", instr:"São transações de capital com os proprietários demonstradas na DMPL",
  options:["Aumento de capital","Aquisição ou venda de ações em tesouraria",
           "Juros sobre capital próprio","Distribuições aos proprietários",
           "Arrecadação de impostos"],
  answers:[0,1,2,3],
  why:"A última é variação patrimonial aumentativa, da DVP."},

S12:{t:"match", instr:"Ligue cada conta do PL à sua definição",
  pairs:[["Patrimônio Social / Capital Social","Patrimônio social de autarquias, fundações e fundos e capital social das demais entidades da indireta"],
         ["AFAC","Recursos de acionistas para aumento de capital, sem possibilidade de devolução"],
         ["Reservas de Capital","Valores acrescidos ao patrimônio que não transitaram pelo resultado"],
         ["Reservas de Lucros","Constituídas com parcelas do lucro líquido para finalidades específicas"]],
  why:"Definições literais do MCASP."},

S13:{t:"gap", instr:"Complete a definição do AFAC",
  before:"Compreende os recursos recebidos de acionistas ou quotistas destinados a aumento de capital, quando ",
  after:" a possibilidade de devolução destes recursos.",
  options:["não haja","haja","seja incerta"], answer:0,
  why:"Sem esse requisito, o recurso seria uma obrigação."},

S14:{t:"gap", instr:"Complete a definição dos Ajustes de Avaliação Patrimonial",
  before:"Compreende as contrapartidas de aumentos ou diminuições de valor atribuídos a elementos do ativo e do passivo em decorrência da sua ",
  after:", enquanto não computadas no resultado do exercício.",
  options:["avaliação a valor justo","depreciação acumulada","reclassificação para o circulante"], answer:0,
  why:"Nos casos da Lei 6.404/76 ou de normas da CVM."},

S15:{t:"sort", instr:"Qual conta registra cada situação?",
  buckets:["Ajustes de Avaliação Patrimonial","Ajustes de Exercícios Anteriores"],
  items:[["Contrapartida de aumento do ativo por avaliação a valor justo",0],
         ["Contrapartida de diminuição do passivo por avaliação a valor justo",0],
         ["Efeito da mudança de critério contábil",1],
         ["Retificação de erro imputável a exercício anterior",1]],
  why:"Os Ajustes de Exercícios Anteriores integram a conta Resultados Acumulados."},

S16:{t:"mc", instr:"A conta Ajustes de Exercícios Anteriores integra qual conta do patrimônio líquido?",
  options:["Resultados Acumulados","Reservas de Capital",
           "Ajustes de Avaliação Patrimonial","Ações em Tesouraria"],
  answer:0,
  why:"Integração expressa no MCASP."},

S17:{t:"multi", instr:"Marque os exemplos de alteração relevante a divulgar em notas explicativas",
  options:["Efeito no resultado acumulado pela adoção inicial das normas brasileiras de contabilidade",
           "Efeitos das alterações nas políticas contábeis",
           "Efeitos da correção de erros",
           "O valor da dotação inicial fixada na LOA"],
  answers:[0,1,2],
  why:"Relevância pelo valor <b>ou</b> pela natureza da informação."},

S18:{t:"match", instr:"Ligue cada demonstração ao que ela traz sobre o patrimônio líquido",
  pairs:[["DVP","Apura o resultado do período que entra na DMPL"],
         ["DMPL","Mostra a evolução do PL entre os saldos inicial e final"],
         ["Balanço Patrimonial","Apresenta o saldo final do PL, com o resultado do período segregado"]],
  why:"As três se encaixam — é assim que a banca monta questões de integração."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE + FCC + FGV + VUNESP — Contabilidade Pública 13","https://www.tecconcursos.com.br/s/Q2r2tS","Q2r2tS"]
];
var TECNOTA = "A DMPL tem poucas questões justamente porque é facultativa para a maior parte dos órgãos — por isso o Radegondes reuniu as quatro bancas num caderno só. Rende pouco tempo de estudo e pontos fáceis: decore a obrigatoriedade (estatal dependente S.A.), o grupo 2.3 do PCASP e a diferença entre os dois “ajustes”.";

var UNITS = [
  {n:1, title:"O que é a DMPL", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Evolução do PL, obrigatoriedade e a LDO", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · a alteração total no PL",     xp:25, data:["S1","S2","T0","T1","T2","T3"]},
    {id:"K3", type:"drill",  title:"Praticar · obrigatoriedade",             xp:25, data:["S3","S4","T4","T5","T6","T7","T8"]},
    {id:"K4", type:"drill",  title:"Praticar · elaboração pelo PCASP",       xp:25, data:["S5","S6","T9","T10","T11"]},
    {id:"K5", type:"flash",  title:"Flashcards · conceito e obrigatoriedade", xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11]}
  ]},
  {n:2, title:"O quadro e os itens demonstrados", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Colunas, linhas e o rol de itens",       xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · leitura do quadro",           xp:25, data:["S7","S8","T12","T13","T14"]},
    {id:"K8", type:"drill",  title:"Praticar · itens demonstrados",          xp:25, data:["S9","S10","T15","T16","T17","T18","T19"]},
    {id:"K9", type:"drill",  title:"Praticar · transações com proprietários", xp:25, data:["S11","S12","T20","T21","T22","T23"]},
    {id:"K10",type:"flash",  title:"Flashcards · quadro e itens",            xp:15, data:[12,13,14,15,16,17,18,19,20,21,22,23]}
  ]},
  {n:3, title:"Contas do PL e notas", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Definições, os dois ajustes e as notas", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · definições das contas",       xp:25, data:["S13","S14","T24","T25","T26","T27","T28","T29","T30"]},
    {id:"K13",type:"drill",  title:"Praticar · os dois ajustes",             xp:25, data:["S15","S16","T31","T32","T33","T34"]},
    {id:"K14",type:"drill",  title:"Praticar · notas e integração",          xp:25, data:["S17","S18","T35","T36","T37","T38","T39","T40","T41","T42","T43"]},
    {id:"K15",type:"flash",  title:"Flashcards · contas e notas",            xp:15, data:[24,25,26,27,28,29,30,31,32,33,34,35]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                  xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                 xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo — é a definição de abertura do Resumo: a Demonstração das Mutações no Patrimônio Líquido (DMPL) <b>demonstrará a evolução (aumento ou redução) do patrimônio líquido da entidade durante um período</b>.</p><p>A estrutura confirma a ideia: o quadro começa nos <b>Saldos Iniciais</b> e termina nos <b>Saldos Finais</b>, e entre eles ficam todas as mutações do período.</p><p class='fb-fonte'>Resumo 13 · <i>Demonstração das Mutações no Patrimônio Líquido</i></p>",
1:"<p>Errado pelo <b>apenas</b>. A alteração total no PL durante um período representa o valor total do resultado do período <b>adicionado a outras receitas e despesas reconhecidas diretamente como alterações no PL</b> (sem passar pelo resultado), <b>junto com qualquer contribuição dos proprietários</b> e <b>deduzindo-se as distribuições</b> a eles.</p><p>São quatro parcelas, não uma só. O esquema do Resumo apresenta exatamente nessa sequência: resultado, outras receitas e despesas diretas no PL, contribuições e distribuições.</p><p class='fb-fonte'>Resumo 13 · <i>Demonstração das Mutações no Patrimônio Líquido</i></p>",
2:"<p>Certo. Na composição da alteração total do PL, as <b>contribuições dos proprietários</b> entram <b>somando</b> e as <b>distribuições para os proprietários</b>, <b>deduzindo</b> — estes agindo na sua capacidade de detentores do capital próprio da entidade.</p><p>No exemplo numérico do Resumo isso aparece como <b>+R$ 30.000</b> de contribuição e <b>–R$ 15.000</b> de distribuição.</p><p class='fb-fonte'>Resumo 13 · <i>Demonstração das Mutações no Patrimônio Líquido</i></p>",
3:"<p>Certo — é o exemplo do Resumo, com estes mesmos valores: resultado do período (lucro líquido) de <b>R$ 100.000</b>; outras receitas, ganho na <b>reavaliação de imóvel</b>, <b>+R$ 50.000</b>; outras despesas, perdas por <b>conversão para moeda estrangeira</b>, <b>–R$ 20.000</b>; contribuição dos proprietários <b>+R$ 30.000</b>; distribuição <b>–R$ 15.000</b>.</p><p>Soma: 100.000 + 50.000 – 20.000 + 30.000 – 15.000 = <b>R$ 145.000</b> de alteração total no patrimônio líquido.</p><p class='fb-fonte'>Resumo 13 · <i>Demonstração das Mutações no Patrimônio Líquido — exemplo</i></p>",
4:"<p>Errado no alcance. Nos termos do MCASP, a DMPL é <b>obrigatória apenas para as empresas estatais dependentes constituídas sob a forma de sociedades anônimas</b> e <b>facultativa para os demais órgãos e entidades</b> dos entes da Federação.</p><p>O esquema do Resumo põe os dois lados frente a frente: OBRIGATÓRIA para as estatais dependentes sob a forma de <b>SA</b>; FACULTATIVA para os demais órgãos.</p><p class='fb-fonte'>Resumo 13 · <i>Obrigatoriedade da DMPL</i></p>",
5:"<p>Certo — é exatamente a hipótese de obrigatoriedade prevista no MCASP: <b>empresas estatais dependentes constituídas sob a forma de sociedades anônimas</b>.</p><p>Dois requisitos cumulativos, portanto: ser <b>estatal dependente</b> e ser <b>SA</b>. Fora disso, a demonstração é facultativa.</p><p class='fb-fonte'>Resumo 13 · <i>Obrigatoriedade da DMPL</i></p>",
6:"<p>Certo. Para os <b>demais órgãos e entidades</b> dos entes da Federação, a DMPL é <b>facultativa</b> — só é obrigatória para as empresas estatais dependentes constituídas sob a forma de SA.</p><p>É essa facultatividade que explica a observação do próprio material: não há muitas questões de banca sobre a DMPL.</p><p class='fb-fonte'>Resumo 13 · <i>Obrigatoriedade da DMPL</i></p>",
7:"<p>Certo. Conforme dispõe o MCASP, a DMPL <b>complementa o Anexo de Metas Fiscais (AMF)</b>, integrante do <b>Projeto de Lei de Diretrizes Orçamentárias (LDO)</b>.</p><p>Guarde a sigla certa: é o <b>AMF</b>, não o Anexo de Riscos Fiscais. A troca de um anexo pelo outro é o erro que a banca planta nesse ponto.</p><p class='fb-fonte'>Resumo 13 · <i>Relação entre a DMPL e a LDO</i></p>",
8:"<p>Errado no anexo. O MCASP diz que a DMPL complementa o <b>Anexo de METAS Fiscais (AMF)</b>, integrante do Projeto de Lei de Diretrizes Orçamentárias.</p><p>Não é o Anexo de Riscos Fiscais. Este é o único ponto do tópico, e a troca de nome é a pegadinha pronta.</p><p class='fb-fonte'>Resumo 13 · <i>Relação entre a DMPL e a LDO</i></p>",
9:"<p>Certo. A DMPL será elaborada utilizando-se o <b>grupo 3 (Patrimônio Líquido)</b> da <b>classe 2 (Passivo)</b> do PCASP.</p><p>O quadro do Resumo situa a conta: na classe 2 ficam 2.1 Passivo Circulante, 2.2 Passivo Não Circulante e <b>2.3 Patrimônio Líquido</b>. Como a DMPL só trata do PL, ela se limita a esse grupo.</p><p class='fb-fonte'>Resumo 13 · <i>Elaboração da DMPL</i></p>",
10:"<p>Errado nas classes. A DMPL usa o <b>grupo 3 da classe 2</b> do PCASP, ou seja, o <b>Patrimônio Líquido (2.3)</b>.</p><p>Classes <b>3 e 4</b> são as da <b>DVP</b>: classe 3 para as variações patrimoniais diminutivas e classe 4 para as aumentativas. Não confunda as duas demonstrações.</p><p class='fb-fonte'>Resumo 13 · <i>Elaboração da DMPL</i></p>",
11:"<p>Certo, na literalidade do Resumo: nas <b>colunas</b> são apresentadas as <b>contas contábeis das quais os dados devem ser extraídos</b>, enquanto as <b>linhas delimitam o par de lançamento</b> de tais contas.</p><p>O preenchimento de cada célula conjuga os critérios da coluna (C) com os da linha (L). As colunas do modelo são Patrimônio Social/Capital Social, AFAC, Reserva de Capital, Ajustes de Avaliação Patrimonial e assim por diante, até o TOTAL DO PL.</p><p class='fb-fonte'>Resumo 13 · <i>Estrutura resumida da DMPL</i></p>",
12:"<p>Certo — é a lista exata do Resumo: os dados dos pares de lançamentos poderão ser extraídos por meio de <b>contas de controle</b>, <b>atributos de contas</b>, <b>informações complementares</b> ou <b>outra forma definida pelo ente</b>.</p><p>Repare na abertura da última hipótese: a norma não fecha o rol, deixando ao ente definir o mecanismo de extração.</p><p class='fb-fonte'>Resumo 13 · <i>Estrutura resumida da DMPL</i></p>",
13:"<p>Certo — é o exemplo do próprio Resumo. Supondo um <b>aumento de capital em dinheiro</b>, o cruzamento da coluna <b>Patrimônio Social / Capital Social</b> com a linha <b>Aumento de Capital</b> extrai os dados do par de lançamentos <b>D – Caixa e Equivalentes de Caixa</b> e <b>C – Patrimônio Social e Capital Social</b>.</p><p>É o que torna concreta a regra das colunas e linhas: a coluna aponta a conta do PL; a linha, o par do lançamento que a movimentou.</p><p class='fb-fonte'>Resumo 13 · <i>Estrutura resumida da DMPL</i></p>",
14:"<p>Certo — no quadro do Resumo a primeira linha é <b>Saldos Iniciais</b> e a última, <b>Saldos Finais</b>.</p><p>Entre as duas vêm, na ordem do material: Ajustes de Exercícios Anteriores, Aumento de Capital, Resgate/Reemissão de Ações, Juros Sobre Capital Próprio, Resultado do Exercício, Ajustes de Avaliação Patrimonial, Constituição/Reversão de Reservas e Dividendos a Distribuir por Ação.</p><p class='fb-fonte'>Resumo 13 · <i>Estrutura resumida da DMPL</i></p>",
15:"<p>Certo — o <b>resultado do período</b> abre a lista de itens demonstrados na DMPL.</p><p>E ele tem linha própria no quadro: <b>Resultado do Exercício</b>. Lembre que esse resultado é a primeira parcela da alteração total do PL, à qual se somam as receitas e despesas reconhecidas diretamente no patrimônio líquido e as transações com os proprietários.</p><p class='fb-fonte'>Resumo 13 · <i>Itens demonstrados na DMPL</i></p>",
16:"<p>Certo — segundo item da lista: cada item de receita e de despesa do período que seja <b>reconhecido diretamente no patrimônio líquido em virtude de norma específica</b>.</p><p>Os exemplos que o Resumo dá: aumento ou redução por <b>reavaliação e ganhos, quando utilizada a reserva de reavaliação</b>, e <b>perdas decorrentes de ajustes específicos de conversão para moeda estrangeira</b>. São valores que não passam pelo resultado, mas alteram o PL.</p><p class='fb-fonte'>Resumo 13 · <i>Itens demonstrados na DMPL</i></p>",
17:"<p>Certo — é o primeiro exemplo que o Resumo dá para itens reconhecidos <b>diretamente no patrimônio líquido</b>: o aumento (ou redução) por <b>reavaliação e ganhos, quando utilizada a reserva de reavaliação</b>.</p><p>No exemplo numérico do material esse é o <b>+R$ 50.000</b> do ganho na reavaliação do imóvel, que entra na alteração total do PL sem transitar pelo resultado do período.</p><p class='fb-fonte'>Resumo 13 · <i>Itens demonstrados na DMPL</i></p>",
18:"<p>Errado. As <b>perdas decorrentes de ajustes específicos de conversão para moeda estrangeira</b> são justamente o segundo exemplo do Resumo de item <b>reconhecido diretamente no patrimônio líquido</b>, em virtude de norma específica — ou seja, <b>sem passar pelo resultado do período</b>.</p><p>É a parcela de <b>–R$ 20.000</b> do exemplo numérico, que compõe os R$ 145.000 de alteração total do PL fora do resultado de R$ 100.000.</p><p class='fb-fonte'>Resumo 13 · <i>Itens demonstrados na DMPL</i></p>",
19:"<p>Certo — os <b>ajustes de exercícios anteriores</b> estão na lista de itens demonstrados na DMPL e têm linha própria no quadro, logo abaixo dos Saldos Iniciais.</p><p>A conta <b>Ajustes de Exercícios Anteriores</b> registra os efeitos da <b>mudança de critério contábil</b> ou da <b>retificação de erro imputável a exercício anterior</b> que não possam ser atribuídos a fatos subsequentes, e <b>integra a conta Resultados Acumulados</b>.</p><p class='fb-fonte'>Resumo 13 · <i>Itens demonstrados na DMPL</i></p>",
20:"<p>Certo. A <b>destinação do resultado</b> é item demonstrado na DMPL, e o Resumo dá como exemplos a <b>constituição de reservas</b> e a <b>distribuição de dividendos</b>.</p><p>No quadro isso aparece nas linhas <b>Constituição / Reversão de Reservas</b> e <b>Dividendos a Distribuir por Ação</b>.</p><p class='fb-fonte'>Resumo 13 · <i>Itens demonstrados na DMPL</i></p>",
21:"<p>Certo — são três dos quatro exemplos de <b>transações de capital com os proprietários</b> listados no Resumo: o <b>aumento de capital</b>, a <b>aquisição ou venda de ações em tesouraria</b>, os <b>juros sobre capital próprio</b> e as <b>distribuições aos proprietários</b>.</p><p>Todos têm eco no quadro da demonstração: Aumento de Capital, Resgate/Reemissão de Ações e Juros Sobre Capital Próprio estão entre as linhas do modelo.</p><p class='fb-fonte'>Resumo 13 · <i>Itens demonstrados na DMPL</i></p>",
22:"<p>Certo — é o último item da lista: <b>para cada item do patrimônio líquido divulgado</b>, os efeitos das <b>alterações nas políticas contábeis</b> e da <b>correção de erros</b>.</p><p>Repare no recorte: não é um total geral, é item a item do PL. E esses mesmos efeitos reaparecem no tópico de notas explicativas como exemplo de <b>alteração relevante</b> a divulgar.</p><p class='fb-fonte'>Resumo 13 · <i>Itens demonstrados na DMPL</i></p>",
23:"<p>Certo — é a definição do quadro DEFINIÇÕES IMPORTANTES. <b>Patrimônio Social / Capital Social</b> compreende o <b>patrimônio social das autarquias, fundações e fundos</b> e o <b>capital social das demais entidades da administração indireta</b>.</p><p>A conta tem dois nomes porque atende a dois tipos de entidade — daí a barra no título da primeira coluna do quadro da DMPL.</p><p class='fb-fonte'>Resumo 13 · <i>Definições importantes</i></p>",
24:"<p>Errado justamente na condição. O <b>Adiantamento para Futuro Aumento de Capital (AFAC)</b> compreende os recursos recebidos de acionistas ou quotistas destinados a aumento de capital <b>quando NÃO haja a possibilidade de devolução</b> desses recursos.</p><p>A irreversibilidade é o que justifica o valor ficar no <b>patrimônio líquido</b>. Havendo possibilidade de devolução, o recurso teria natureza de obrigação, e não de capital próprio.</p><p class='fb-fonte'>Resumo 13 · <i>Definições importantes</i></p>",
25:"<p>Certo, na literalidade do quadro de definições: as <b>Reservas de Capital</b> compreendem os <b>valores acrescidos ao patrimônio que não transitaram pelo resultado como variações patrimoniais aumentativas (VPA)</b>.</p><p>É o traço que as separa das <b>Reservas de Lucros</b>, que nascem de parcelas do <b>lucro líquido</b> — ou seja, de valores que já passaram pelo resultado.</p><p class='fb-fonte'>Resumo 13 · <i>Definições importantes</i></p>",
26:"<p>Certo. As <b>Reservas de Lucros</b> compreendem as reservas <b>constituídas com parcelas do lucro líquido</b> das entidades <b>para finalidades específicas</b>.</p><p>Guarde o par: reserva <b>de capital</b> não transitou pelo resultado; reserva <b>de lucros</b> vem do lucro líquido, com destinação definida.</p><p class='fb-fonte'>Resumo 13 · <i>Definições importantes</i></p>",
27:"<p>Certo — definição das <b>Demais Reservas</b>: compreendem as reservas <b>não classificadas como reservas de capital ou de lucro</b>, <b>inclusive aquelas que terão seus saldos realizados por terem sido extintas pela legislação</b>.</p><p>É a conta residual do bloco de reservas do patrimônio líquido, e o Resumo faz questão de incluir nela as reservas já extintas em lei que ainda têm saldo a realizar.</p><p class='fb-fonte'>Resumo 13 · <i>Definições importantes</i></p>",
28:"<p>Certo. Os <b>Ajustes de Avaliação Patrimonial</b> compreendem as <b>contrapartidas de aumentos ou diminuições de valor atribuídos a elementos do ativo e do passivo</b> em decorrência da sua <b>avaliação a valor justo</b>, nos casos previstos pela <b>Lei nº 6.404/1976</b> ou em normas expedidas pela comissão de valores mobiliários.</p><p>É a metade do quadro NÃO CONFUNDA do Resumo: avaliação a valor justo fica em <b>Ajustes de Avaliação Patrimonial</b>; mudança de critério contábil e retificação de erro ficam em <b>Ajustes de Exercícios Anteriores</b>.</p><p class='fb-fonte'>Resumo 13 · <i>Definições importantes / NÃO CONFUNDA</i></p>",
29:"<p>Certo — é a parte final da definição: esses ajustes permanecem no patrimônio líquido <b>enquanto não computados no resultado do exercício, em obediência ao regime de competência</b>.</p><p>Ou seja, são um estágio intermediário: o valor fica no PL até que a competência autorize levá-lo ao resultado.</p><p class='fb-fonte'>Resumo 13 · <i>Definições importantes</i></p>",
30:"<p>Certo. Os <b>Resultados Acumulados</b> compreendem o <b>saldo remanescente dos lucros ou prejuízos líquidos das empresas</b> e os <b>superávits ou déficits acumulados da administração direta, autarquias, fundações e fundos</b>.</p><p>A conta também abriga os <b>Ajustes de Exercícios Anteriores</b>, que, segundo o Resumo, <b>integram a conta Resultados Acumulados</b>.</p><p class='fb-fonte'>Resumo 13 · <i>Definições importantes</i></p>",
31:"<p>Errado — trocou as duas contas do quadro <b>NÃO CONFUNDA</b>. Quem registra os efeitos da <b>avaliação a valor justo</b> de elementos do ativo e do passivo é a conta <b>Ajustes de Avaliação Patrimonial</b>.</p><p>Os <b>Ajustes de Exercícios Anteriores</b> registram os efeitos da <b>mudança de critério contábil</b> ou da <b>retificação de erro imputável a exercício anterior</b> que não possam ser atribuídos a fatos subsequentes.</p><p class='fb-fonte'>Resumo 13 · <i>NÃO CONFUNDA — Avaliação Patrimonial x Exercícios Anteriores</i></p>",
32:"<p>Certo, na literalidade do Resumo: a conta <b>Ajustes de Exercícios Anteriores</b> <b>integra a conta Resultados Acumulados</b>.</p><p>O esquema do material fecha o raciocínio: ela registra os efeitos da mudança de critério contábil e da retificação de erro imputável a exercício anterior, e por isso pertence ao bloco dos Resultados Acumulados dentro do patrimônio líquido.</p><p class='fb-fonte'>Resumo 13 · <i>Definições importantes / esquema dos Ajustes de Exercícios Anteriores</i></p>",
33:"<p>Errado na condição. A conta Ajustes de Exercícios Anteriores registra os efeitos da mudança de critério contábil ou da retificação de erro imputável a exercício anterior <b>que NÃO possam ser atribuídos a fatos subsequentes</b>.</p><p>A assertiva apaga a negativa e inverte o sentido. Se o efeito decorre de <b>fato subsequente</b>, ele não vai para os Ajustes de Exercícios Anteriores.</p><p class='fb-fonte'>Resumo 13 · <i>Definições importantes / NÃO CONFUNDA</i></p>",
34:"<p>Certo — definição direta do quadro: <b>Ações / Cotas em Tesouraria</b> compreende o <b>valor das ações ou cotas da entidade que foram adquiridas pela própria entidade</b>.</p><p>No quadro da DMPL a movimentação dessas ações aparece na linha <b>Resgate / Reemissão de Ações</b>, e a aquisição ou venda de ações em tesouraria consta da lista de transações de capital com os proprietários.</p><p class='fb-fonte'>Resumo 13 · <i>Definições importantes</i></p>",
35:"<p>Certo, na literalidade do tópico: <b>qualquer alteração relevante no patrimônio líquido, seja pelo valor ou pela natureza da informação, deve ser divulgada em notas explicativas</b>.</p><p>Note o duplo critério de relevância: ela pode vir do <b>valor</b> envolvido ou da <b>natureza</b> da informação — não é só questão de montante.</p><p class='fb-fonte'>Resumo 13 · <i>Notas Explicativas</i></p>",
36:"<p>Certo — é o primeiro dos dois exemplos de alteração relevante que o Resumo cita: o <b>efeito no resultado acumulado em decorrência da adoção inicial das disposições contidas nas normas brasileiras de contabilidade</b>.</p><p>O outro exemplo são os efeitos das alterações nas políticas contábeis ou correção de erros.</p><p class='fb-fonte'>Resumo 13 · <i>Notas Explicativas</i></p>",
37:"<p>Certo — é o segundo exemplo de alteração relevante do Resumo: os <b>efeitos das alterações nas políticas contábeis ou correção de erros</b>.</p><p>Esses mesmos efeitos já aparecem entre os itens demonstrados na DMPL, ali exigidos <b>para cada item do patrimônio líquido divulgado</b>. Na nota, entram quando relevantes pelo valor ou pela natureza.</p><p class='fb-fonte'>Resumo 13 · <i>Notas Explicativas</i></p>",
38:"<p>Certo. A DMPL é uma das três localizações admitidas para essa divulgação: a entidade que distribui dividendos e possui capital representado por ações deve divulgar o valor distribuído e o <b>respectivo valor por ação</b> na <b>DVP</b>, na <b>DMPL</b> ou nas <b>notas explicativas</b>.</p><p>Coerente com o quadro da DMPL, que traz a linha <b>Dividendos a Distribuir por Ação</b>, e com a lista de itens demonstrados, que inclui a <b>destinação do resultado</b>.</p><p class='fb-fonte'>Resumo 13 · <i>Estrutura resumida da DMPL / Itens demonstrados</i> (a regra das três localizações está no Resumo 11, <i>Distribuição de Dividendos</i>)</p>",
39:"<p>Certo, mas o ponto não é tratado no Resumo 13. O material trata da <b>obrigatoriedade</b> da DMPL (estatais dependentes sob a forma de SA) e da sua <b>relação com o Anexo de Metas Fiscais</b> da LDO, sem entrar na exigência de informação comparativa.</p><p>O que o Resumo permite deduzir é a consequência prática: quem estiver obrigado a elaborar a DMPL a apresenta como demonstração do conjunto, ao lado do BP, da DVP e da DFC.</p><p class='fb-fonte off'>Não consta do Resumo 13 — a exigência de informação comparativa da NBC TSP 11 não é abordada neste resumo.</p>",
40:"<p>Certo. No quadro da DMPL há linha própria para o <b>Resultado do Exercício</b>, e o <b>resultado do período</b> abre a lista de itens demonstrados na demonstração.</p><p>É ali que entra o resultado patrimonial apurado na DVP pelo confronto entre VPA e VPD — o mesmo valor que, no Balanço Patrimonial, passa a compor o saldo patrimonial.</p><p class='fb-fonte'>Resumo 13 · <i>Estrutura resumida da DMPL / Itens demonstrados</i> (a apuração na DVP está no Resumo 11)</p>",
41:"<p>Errado. No patrimônio líquido, o <b>resultado do período (VPA – VPD)</b> deve ser evidenciado <b>SEGREGADO</b> dos resultados acumulados de períodos anteriores.</p><p>São duas linhas distintas: o que o exercício produziu e o que vem de trás. A DMPL espelha essa separação ao trazer a linha <b>Resultado do Exercício</b> destacada dentro das mutações do período.</p><p class='fb-fonte off'>Não consta do Resumo 13 — a regra está no Resumo 10, <i>Patrimônio Líquido, OBSERVAÇÃO 2</i>.</p>",
42:"<p>Certo — é exatamente o contraste entre as duas definições do Resumo. <b>Reservas de Capital</b> compreendem os valores acrescidos ao patrimônio que <b>não transitaram pelo resultado</b> como variações patrimoniais aumentativas; <b>Reservas de Lucros</b> são as <b>constituídas com parcelas do lucro líquido</b> para finalidades específicas.</p><p>O que sobra sem se encaixar em nenhuma das duas vai para as <b>Demais Reservas</b>.</p><p class='fb-fonte'>Resumo 13 · <i>Definições importantes</i></p>",
43:"<p>Certo nos dois fatos, que o Resumo traz em pontos diferentes. Na parte do caderno de questões o material observa: <b>não há muitas questões sobre DMPL</b>, tanto que foi criado um único caderno reunindo as principais bancas.</p><p>E a razão está no tópico da obrigatoriedade: a DMPL é obrigatória apenas para as <b>empresas estatais dependentes constituídas sob a forma de SA</b>, sendo <b>facultativa para os demais órgãos e entidades</b> dos entes da Federação.</p><p class='fb-fonte'>Resumo 13 · <i>Obrigatoriedade da DMPL / Caderno de questões</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"13", nome:"Demonstração das Mutações no Patrimônio Líquido", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
