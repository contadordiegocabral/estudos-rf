/* Contabilidade Avançada — Módulo 05: CPC 25 — Provisões, Passivos Contingentes e Ativos Contingentes (modo direto) */
window.MOD = window.MOD || {};
window.MOD.cavan05 = (function(){
"use strict";

var CARDS = [
  ["O que é uma PROVISÃO, no item 10 do CPC 25?","Um <b>passivo de prazo OU de valor incertos</b>. O esquema do resumo põe o <b>OU</b> entre os dois: basta a incerteza de <b>um</b> deles."],
  ["Definição de PASSIVO no item 10 do CPC 25","<b>Obrigação presente</b> da entidade, <b>derivada de eventos já ocorridos</b>, cuja <b>liquidação se espera que resulte em saída de recursos</b> da entidade <b>capazes de gerar benefícios econômicos</b>."],
  ["O que é PASSIVO CONTINGENTE (primeira hipótese do item 10)?","Uma <b>obrigação POSSÍVEL</b> que resulta de <b>eventos passados</b> e cuja existência <b>será confirmada apenas pela ocorrência ou não de um ou mais eventos futuros incertos não totalmente sob controle da entidade</b>."],
  ["E a segunda hipótese de passivo contingente?","Uma <b>obrigação PRESENTE</b> que resulta de eventos passados, mas que <b>não é reconhecida</b> porque (i) <b>não é provável</b> que uma saída de recursos seja exigida para liquidá-la; ou (ii) o <b>valor não pode ser mensurado com suficiente confiabilidade</b>."],
  ["Quadro NÃO CONFUNDA: provisão para contingência × passivo contingente","<b>Provisão:</b> saída <b>PROVÁVEL</b> · <b>reconhece</b> no Balanço · divulga em NE (<b>item 85</b>) · <b>pode</b> ser mensurada com confiabilidade.<br><b>Passivo contingente:</b> saída <b>POSSÍVEL</b> · <b>não</b> reconhece no Balanço · divulga em NE (<b>item 86</b>) · <b>não pode</b> ser mensurado com confiabilidade."],
  ["E se a saída de recursos for REMOTA?","A empresa <b>não faz nada</b>: não reconhece como provisão nem como passivo contingente e <b>também não divulga em nota explicativa</b>."],
  ["Exemplo do resumo: empresa processada por danos a terceiros em acidente","Se a indenização for <b>PROVÁVEL</b>, registra uma <b>provisão para contingência</b> no <b>passivo do Balanço Patrimonial</b>. Se for <b>POSSÍVEL</b>, <b>não registra</b> no Balanço, apenas <b>divulga em nota explicativa</b>."],
  ["Quais as duas exceções ao ALCANCE do CPC 25 (item 01)?","(a) os que resultem de <b>contratos a executar</b>, <b>a menos que o contrato seja oneroso</b>; e (b) os <b>cobertos por outro pronunciamento</b>."],
  ["O que é EVENTO QUE CRIA OBRIGAÇÃO (item 10)?","Evento que cria uma <b>obrigação legal ou não formalizada</b> que faça com que a entidade <b>não tenha nenhuma alternativa realista senão liquidar</b> essa obrigação."],
  ["De que deriva a OBRIGAÇÃO LEGAL?","De <b>contrato</b> (por meio de termos <b>explícitos ou implícitos</b>); de <b>legislação</b>; ou de <b>outra ação da lei</b>."],
  ["O que é OBRIGAÇÃO NÃO FORMALIZADA?","A que decorre das ações da entidade em que (a) por <b>padrão estabelecido de práticas passadas</b>, <b>políticas publicadas</b> ou <b>declaração atual suficientemente específica</b>, ela indicou a outras partes que <b>aceitará certas responsabilidades</b>; e (b) em consequência, <b>cria expectativa válida</b> nessas outras partes."],
  ["Exemplo do resumo de obrigação não formalizada","Empresa que nos <b>5 últimos anos</b> pagou <b>14º salário</b> aos empregados, criando a expectativa de que honrará também no ano corrente. Mesmo <b>sem formalização por escrito</b>, deve reconhecer <b>passivo</b> pela <b>melhor estimativa do desembolso</b> exigido para liquidar a obrigação presente na data do balanço."],
  ["O que é ATIVO CONTINGENTE e de onde ele surge?","<b>Ativo POSSÍVEL</b> que resulta de eventos passados e cuja existência <b>será confirmada apenas pela ocorrência ou não de eventos futuros incertos não totalmente sob controle da entidade</b>. Surge de <b>evento não planejado ou não esperado</b> — ex.: <b>reivindicação em processo legal</b> de desfecho incerto."],
  ["Ativos contingentes são reconhecidos? (item 33)","<b>Não</b> são reconhecidos nas demonstrações contábeis, pois <b>pode tratar-se de resultado que nunca venha a ser realizado</b>. Mas, quando a realização do ganho é <b>praticamente certa</b>, o ativo <b>deixa de ser contingente</b> e o <b>reconhecimento é adequado</b>."],
  ["Quadro comparativo ATIVO × ATIVO CONTINGENTE","<b>Ativo:</b> entrada de recursos <b>PRATICAMENTE CERTA</b> → <b>reconhece</b> no Balanço.<br><b>Ativo contingente:</b> entrada de recursos <b>PROVÁVEL</b> → <b>não</b> reconhece no Balanço."],
  ["Quando o ativo contingente é DIVULGADO?","Como exigido pelo <b>item 89</b>, <b>quando for provável a entrada de benefícios econômicos</b>."],
  ["Quadro NÃO CONFUNDA: provisão × ativo contingente","<b>Provisão:</b> a <b>saída</b> de recursos é <b>PROVÁVEL</b> → <b>reconhece</b> no Balanço.<br><b>Ativo contingente:</b> a <b>entrada</b> de recursos é <b>PROVÁVEL</b> → <b>não</b> reconhece no Balanço. Provável não tem o mesmo efeito nos dois lados."],
  ["Por que a provisão se distingue de contas a pagar e accruals? (item 11)","Porque <b>há incerteza sobre o prazo ou o valor do desembolso futuro</b> necessário para a sua liquidação. <b>Provisão</b> = passivo de prazo ou valor incertos; <b>accruals</b> = passivos derivados de <b>apropriações por competência</b>."],
  ["O que são ACCRUALS e como são divulgados?","Passivos <b>a pagar por bens ou serviços</b> que <b>não foram pagos nem formalmente acordados com o fornecedor</b>, inclusive valores devidos a empregados (ex.: <b>férias</b>). A incerteza é <b>geralmente muito menor</b> que nas provisões; são divulgados <b>como parte das contas a pagar</b>, enquanto as <b>provisões são divulgadas separadamente</b>."],
  ["As três condições do RECONHECIMENTO da provisão (item 14)","(a) a entidade tem <b>obrigação presente</b> (legal ou não formalizada) <b>como resultado de evento passado</b>; (b) seja <b>provável</b> que será necessária <b>saída de recursos</b> que incorporam benefícios econômicos; e (c) possa ser feita <b>estimativa confiável</b> do valor. <b>Se não forem satisfeitas, nenhuma provisão deve ser reconhecida.</b>"],
  ["ATENÇÃO: para que contas o termo “provisão” só deve ser usado?","Só para as contas <b>classificadas no PASSIVO</b>. Exemplos: <b>Provisão para Contingência</b>; <b>para Custos de Desmontagem</b>; <b>para Custos de Reestruturação</b>; <b>para Custos de Descontinuidade</b>; <b>para processos legais</b>."],
  ["“Provisão para Créditos de Liquidação Duvidosa” — está certo?","<b>Não.</b> Não se usa mais “provisão” para as <b>contas retificadoras do Ativo</b>, que passaram a ser <b>Perdas Estimadas com Crédito de Liquidação Duvidosa (PECLD)</b>. Se aparecer esse nome na prova, a <b>nomenclatura está errada</b>."],
  ["Item 21 — evento que não gera obrigação imediata","Pode gerá-la <b>em data posterior</b>, por <b>alteração na lei</b> ou porque um <b>ato da entidade</b> (ex.: declaração pública suficientemente específica) dá origem a <b>obrigação não formalizada</b>. Ex.: <b>dano ambiental</b> sem obrigação de remediar torna-se evento que cria obrigação quando <b>nova lei exige a retificação</b> ou a entidade <b>publicamente aceita a responsabilidade</b>."],
  ["Exemplo da mineradora em país sem legislação ambiental","Causou dano e <b>não tem política de compensação</b> naquele país: deve <b>abster-se de qualquer registro em contas passivas</b> e também de <b>divulgar informação em notas explicativas</b> sobre o risco ambiental."],
  ["Item 29 — entidade conjunta e solidariamente responsável","A parte da obrigação <b>que se espera que as outras partes liquidem</b> é tratada como <b>passivo contingente</b>. A entidade <b>reconhece provisão</b> para a parte em que é <b>provável</b> a saída de recursos, <b>exceto em circunstâncias extremamente raras</b> em que nenhuma estimativa confiável possa ser feita."],
  ["Exemplo das empresas “A” e “B” (obrigação de R$ 100.000, A com 70%)","Na empresa “A”: <b>reconhecimento de Provisão de R$ 70.000</b> e <b>divulgação em Notas Explicativas de Passivo Contingente de R$ 30.000</b> (a parcela de responsabilidade de “B”)."],
  ["MELHOR ESTIMATIVA (item 39) — grande população de itens e escala contínua","<b>Grande população de itens:</b> a obrigação é estimada <b>ponderando-se todos os possíveis desfechos pelas suas probabilidades associadas</b> — método do <b>“valor esperado”</b>.<br><b>Escala contínua</b> de desfechos, cada ponto tão provável como qualquer outro: usa-se o <b>ponto médio da escala</b>."],
  ["Exemplo da concessionária de automóveis de luxo — qual a provisão de janeiro?","Defeitos <b>maiores</b> em todos: R$ 180 milhões; <b>menores</b> em todos: R$ 100 milhões. Dos 50 vendidos, <b>20%</b> com defeitos maiores e <b>50%</b> com menores.<br><b>(20% × 180.000.000) + (50% × 100.000.000) = 36.000.000 + 50.000.000 = R$ 86.000.000</b>."],
  ["Item 59 — mudança na provisão","As provisões devem ser <b>reavaliadas em cada data de balanço</b> e <b>ajustadas para refletir a melhor estimativa corrente</b>. Se <b>já não for mais provável</b> a saída de recursos para liquidar a obrigação, a provisão <b>deve ser revertida</b>."],
  ["Lançamentos do reconhecimento e da reversão da provisão","<b>Reconhecimento:</b> <b>D</b> Despesas Operacionais (↑ Despesa) · <b>C</b> Provisão (↑ Passivo).<br><b>Reversão:</b> <b>D</b> Provisão (↓ Passivo) · <b>C</b> Reversão de Provisão (↑ Receita)."],
  ["Item 60 — desconto a valor presente","Usado o DVP, o <b>valor contábil da provisão aumenta a cada período</b> para refletir a <b>passagem do tempo</b>, e esse aumento é reconhecido como <b>DESPESA FINANCEIRA</b>. Exemplo: provisão de 100.000 registrada por <b>90.000</b>, que passa a <b>95.000</b> → <b>D</b> Despesa Financeira R$ 5.000 · <b>C</b> Provisão R$ 5.000."],
  ["ATENÇÃO do resumo sobre o lançamento do DVP","A banca põe como opções tanto “Despesa Operacional” quanto “Despesa Financeira”. <b>Não caia nessa: marque sempre Despesa Financeira.</b>"],
  ["Item 61 — uso da provisão","A provisão deve ser usada <b>somente para os desembolsos para os quais foi originalmente reconhecida</b>. Usar parte dela para outros custos internos (ex.: compra de novos equipamentos) <b>viola o item 61</b>. Lançamento do uso: <b>D</b> Provisão para custos de garantia R$ 20.000 (↓ Passivo) · <b>C</b> Caixa/Bancos R$ 20.000 (↓ Ativo)."],
  ["CONTRATO ONEROSO — itens 66 e 68","<b>Item 66:</b> havendo contrato oneroso, a <b>obrigação presente</b> de acordo com o contrato deve ser <b>reconhecida e mensurada como PROVISÃO</b>.<br><b>Item 68:</b> contrato oneroso é aquele em que os <b>custos inevitáveis de satisfazer as obrigações EXCEDEM os benefícios econômicos</b> que se espera sejam recebidos ao longo do mesmo contrato."],
  ["Como se apuram os CUSTOS INEVITÁVEIS do contrato?","Eles refletem o <b>menor custo líquido de sair do contrato</b>, determinado com base (a) no <b>custo de cumprir o contrato</b> ou (b) no <b>custo de qualquer compensação ou penalidade</b> pelo não cumprimento — <b>dos dois o menor</b>. No exemplo: cumprir R$ 100.000 × penalidade R$ 20.000 → <b>R$ 20.000</b>."],
  ["REESTRUTURAÇÃO (item 10) e seus exemplos (item 70)","<b>Programa planejado e controlado pela administração</b> que altera <b>materialmente</b> (a) o <b>âmbito de um negócio</b> empreendido pela entidade; ou (b) a <b>maneira como o negócio é conduzido</b>.<br><b>Exemplos:</b> venda ou extinção de <b>linha de negócios</b>; <b>fechamento</b> ou <b>realocação</b> de locais de negócios de um país ou região; <b>mudanças na estrutura da administração</b> (eliminar um nível de gerência); <b>reorganizações fundamentais</b> com efeito material."],
  ["Item 73 — quando a divulgação do plano cria obrigação não formalizada","Somente se for feita <b>de tal maneira e em detalhes suficientes</b> (apresentando as <b>principais características do plano</b>) que <b>origine expectativas válidas de outras partes</b> — clientes, fornecedores e empregados — de que a entidade realizará a reestruturação. A <b>evidência</b> de que começou a implantar o plano é dada pela <b>desmontagem da fábrica</b>, pela <b>venda de ativos</b> ou pela <b>divulgação das principais características</b>."],
  ["QUESTÃO-EXEMPLO do resumo: em que data o passivo foi constituído?","Em <b>31/03/2023</b> — data em que o <b>plano de reestruturação foi concluído e a ação comunicada a funcionários, clientes e fornecedores</b>, nascendo a <b>obrigação não formalizada</b>. O passivo entra no Balanço como <b>Provisão para custos de reestruturação</b>. Gabarito: <b>B</b>."],
  ["Itens 80 e 81 — o que entra e o que não entra na provisão para reestruturação","<b>Entra (item 80):</b> somente os <b>desembolsos diretos</b> que, <b>simultaneamente</b>, sejam (a) <b>necessariamente ocasionados pela reestruturação</b> e (b) <b>não associados às atividades em andamento</b>.<br><b>Não entra (item 81):</b> <b>novo treinamento ou remanejamento da equipe permanente</b>; <b>marketing</b>; <b>investimento em novos sistemas e redes de distribuição</b>."],
  ["DIVULGAÇÃO — item 85 e item 87","<b>Item 85</b>, para cada classe de provisão: (a) breve <b>descrição da natureza</b> da obrigação e o <b>cronograma esperado</b> das saídas; (b) <b>indicação das incertezas</b> sobre valor ou cronograma; (c) valor de <b>qualquer reembolso esperado</b>.<br><b>Item 87:</b> pode ser apropriado tratar como <b>classe única</b> os valores de <b>garantias de produtos diferentes</b>, mas <b>não</b> agrupar <b>garantias normais com processos judiciais</b> — a natureza é diferente."]
];

var QS = [
  ["Provisão é um passivo de prazo ou de valor incertos.","C","CPC 25, item 10","Definição literal."],
  ["Para que exista provisão, é necessário que o prazo e o valor sejam simultaneamente incertos.","E","FCC","O esquema do resumo traz <b>OU</b>: prazo <b>ou</b> valor incertos."],
  ["Passivo é uma obrigação presente da entidade, derivada de eventos já ocorridos, cuja liquidação se espera que resulte em saída de recursos da entidade capazes de gerar benefícios econômicos.","C","CPC 25, item 10","Os quatro elementos do esquema."],
  ["Passivo contingente é uma obrigação possível que resulta de eventos passados e cuja existência será confirmada apenas pela ocorrência ou não de um ou mais eventos futuros incertos não totalmente sob controle da entidade.","C","CEBRASPE","Primeira hipótese do item 10."],
  ["Também é passivo contingente a obrigação presente que resulta de eventos passados e que não é reconhecida porque o valor da obrigação pode ser mensurado com suficiente confiabilidade.","E","FCC","É porque <b>NÃO pode</b> ser mensurado com suficiente confiabilidade."],
  ["Quando a saída de recursos em ação judicial por danos a terceiros é provável, a entidade deve apenas divulgar o passivo contingente em nota explicativa, sem reconhecê-lo no balanço.","E","FGV","Provável é <b>provisão</b>, reconhecida no Balanço."],
  ["Se a saída de recursos for possível, a empresa não deve registrar o passivo contingente no Balanço, mas deve divulgá-lo em nota explicativa.","C","VUNESP","Quadro NÃO CONFUNDA."],
  ["Se a saída de recursos for remota, a entidade não reconhece provisão, mas deve divulgar o fato em nota explicativa.","E","CEBRASPE","Remota: a empresa <b>não faz nada</b>."],
  ["A provisão para contingência é divulgada em nota explicativa nos termos do item 86, e o passivo contingente, nos termos do item 85.","E","FCC","Inverteu: provisão é o <b>item 85</b>; passivo contingente, o <b>item 86</b>."],
  ["O CPC 25 aplica-se aos passivos que resultem de contratos a executar, ainda que o contrato não seja oneroso.","E","FGV","Contratos a executar estão <b>excetuados</b>, a menos que sejam onerosos."],
  ["Evento que cria obrigação é um evento que cria uma obrigação legal ou não formalizada que faça com que a entidade não tenha nenhuma alternativa realista senão liquidar essa obrigação.","C","CPC 25, item 10","Definição literal."],
  ["Obrigação legal é a obrigação que deriva de contrato, de legislação ou de outra ação da lei.","C","VUNESP","As três fontes do resumo."],
  ["A obrigação legal derivada de contrato alcança apenas os termos explícitos, não os implícitos.","E","CEBRASPE","O resumo diz <b>termos explícitos ou implícitos</b>."],
  ["A obrigação não formalizada exige, além do padrão de práticas passadas ou da declaração suficientemente específica, que a entidade crie expectativa válida nas outras partes de que cumprirá as responsabilidades.","C","FCC","São as alíneas (a) e (b) da definição."],
  ["Empresa que nos cinco últimos anos pagou 14º salário aos empregados, criando expectativa de manutenção do benefício, nada deve reconhecer por falta de formalização por escrito.","E","FGV","Mesmo sem formalização, reconhece <b>passivo</b> pela melhor estimativa do desembolso."],
  ["Ativo contingente é um ativo possível que resulta de eventos passados e cuja existência será confirmada apenas pela ocorrência ou não de um ou mais eventos futuros incertos não totalmente sob controle da entidade.","C","CPC 25, item 10","Definição literal."],
  ["Os ativos contingentes devem ser reconhecidos nas demonstrações contábeis quando a entrada de benefícios econômicos for provável.","E","VUNESP","Provável apenas <b>divulga</b>; reconhecer exige entrada <b>praticamente certa</b>."],
  ["Quando a realização do ganho é praticamente certa, o ativo relacionado não é um ativo contingente e o seu reconhecimento é adequado.","C","CPC 25, item 33","Literalidade do item 33."],
  ["O ativo contingente somente é divulgado quando a entrada de benefícios econômicos for praticamente certa.","E","CEBRASPE","É divulgado quando a entrada for <b>provável</b> (item 89)."],
  ["As provisões podem ser distintas de outros passivos, tais como contas a pagar e accruals, porque há incerteza sobre o prazo ou o valor do desembolso futuro necessário para a sua liquidação.","C","CPC 25, item 11","Literalidade do item 11."],
  ["Accruals são passivos derivados de apropriações por competência.","C","FCC","Quadro comparativo do resumo."],
  ["Embora seja necessário estimar valor ou prazo dos accruals, a incerteza que os cerca é geralmente muito maior do que nas provisões.","E","FGV","É geralmente <b>muito menor</b>."],
  ["As provisões são frequentemente divulgadas como parte das contas a pagar, enquanto os accruals são divulgados separadamente.","E","VUNESP","Inverteu: os <b>accruals</b> vão nas contas a pagar; as <b>provisões</b>, separadamente."],
  ["Uma provisão deve ser reconhecida quando a entidade tem obrigação presente, legal ou não formalizada, como resultado de evento passado; seja provável a saída de recursos que incorporam benefícios econômicos; e possa ser feita estimativa confiável do valor da obrigação.","C","CPC 25, item 14","As três condições cumulativas."],
  ["Satisfeitas duas das três condições do item 14, a provisão já deve ser reconhecida.","E","CEBRASPE","O item é expresso: não satisfeitas as condições, <b>nenhuma</b> provisão deve ser reconhecida."],
  ["O termo provisão pode ser utilizado tanto para contas classificadas no passivo quanto para contas retificadoras do ativo.","E","FCC","Só para contas do <b>passivo</b>."],
  ["A expressão Provisão para Créditos de Liquidação Duvidosa é a nomenclatura correta da conta retificadora de duplicatas a receber.","E","FGV","A nomenclatura correta é <b>PECLD</b>."],
  ["Um evento que não gera imediatamente uma obrigação pode gerá-la em data posterior, por força de alterações na lei ou porque um ato da entidade dá origem a uma obrigação não formalizada.","C","CPC 25, item 21","Literalidade do item 21."],
  ["Mineradora brasileira que causa dano ambiental em país sem legislação ambiental, e sem política de compensação, deve reconhecer provisão pelos danos causados.","E","VUNESP","Deve <b>abster-se</b> de registro em contas passivas e de divulgação em nota explicativa."],
  ["Quando a entidade for conjunta e solidariamente responsável por obrigação, a parte da obrigação que se espera que as outras partes liquidem é tratada como passivo contingente.","C","CPC 25, item 29","Literalidade do item 29."],
  ["Obrigação de R$ 100.000 por ações judiciais com perda provável, assumida de modo conjunto e solidário pelas empresas A e B, com 70% a cargo de A: A reconhece provisão de R$ 70.000 e divulga em nota explicativa passivo contingente de R$ 30.000.","C","CEBRASPE","Exemplo do resumo, com os mesmos valores."],
  ["Quando a provisão a ser mensurada envolve uma grande população de itens, a obrigação deve ser estimada ponderando-se todos os possíveis desfechos pelas suas probabilidades associadas, método estatístico chamado de valor esperado.","C","CPC 25, item 39","Literalidade do item 39."],
  ["Havendo escala contínua de desfechos possíveis, e sendo cada ponto dessa escala tão provável como qualquer outro, utiliza-se o ponto mais alto da escala.","E","FCC","Utiliza-se o <b>ponto médio</b> da escala."],
  ["Concessionária que vendeu 50 automóveis com garantia de dois anos, estimando custos de R$ 180 milhões se houver defeitos maiores em todos e R$ 100 milhões se houver defeitos menores em todos, com 20% dos veículos com defeitos maiores e 50% com defeitos menores, deve reconhecer provisão para garantia de R$ 86.000.000.","C","FGV","(20% × 180 mi) + (50% × 100 mi)."],
  ["As provisões devem ser reavaliadas em cada data de balanço e ajustadas para refletir a melhor estimativa corrente.","C","CPC 25, item 59","Literalidade do item 59."],
  ["Se já não for mais provável que seja necessária saída de recursos para liquidar a obrigação, a provisão deve ser mantida no passivo até a decisão final do processo.","E","VUNESP","A provisão <b>deve ser revertida</b>."],
  ["O reconhecimento da provisão é registrado a débito de despesas operacionais e a crédito de provisão, no passivo.","C","CEBRASPE","Lançamento do resumo."],
  ["A reversão da provisão é registrada a débito de provisão e a crédito de reversão de provisão, conta de receita.","C","FCC","Lançamento do resumo."],
  ["Utilizado o desconto a valor presente, o aumento do valor contábil da provisão decorrente da passagem do tempo deve ser reconhecido como despesa operacional.","E","FGV","É <b>despesa financeira</b> — o quadro ATENÇÃO do resumo avisa da troca."],
  ["Uma provisão deve ser usada somente para os desembolsos para os quais a provisão foi originalmente reconhecida.","C","CPC 25, item 61","Literalidade do item 61."],
  ["O uso da provisão de R$ 20.000 para custos de garantia de produtos vendidos é registrado a débito de provisão e a crédito de caixa/bancos.","C","VUNESP","Lançamento do resumo."],
  ["Se a entidade tiver um contrato oneroso, a obrigação presente de acordo com o contrato deve ser reconhecida e mensurada como provisão.","C","CPC 25, item 66","Literalidade do item 66."],
  ["Contrato oneroso é o contrato em que os benefícios econômicos que se espera sejam recebidos excedem os custos inevitáveis de satisfazer as obrigações do contrato.","E","CEBRASPE","Inverteu: os <b>custos inevitáveis excedem os benefícios</b>."],
  ["Os custos inevitáveis do contrato refletem o menor custo líquido de sair do contrato, determinado com base no custo de cumpri-lo ou no custo de qualquer compensação ou penalidade pelo não cumprimento, dos dois o menor.","C","CPC 25, item 68","Literalidade do item 68."],
  ["Em contrato de matéria-prima de R$ 100 mil por um ano, com cláusula de multa de R$ 20.000 pela rescisão antecipada, o custo inevitável do contrato oneroso é de R$ 100.000.","E","FCC","Dos dois o <b>menor</b>: R$ 20.000, a penalidade."],
  ["Reestruturação é um programa planejado e controlado pela administração e que altera materialmente o âmbito de um negócio empreendido pela entidade ou a maneira como o negócio é conduzido.","C","CPC 25, item 10","Definição literal."],
  ["A venda ou extinção de linha de negócios e a eliminação de um nível de gerência são exemplos de eventos que podem se enquadrar na definição de reestruturação.","C","CPC 25, item 70","Alíneas (a) e (c) do item 70."],
  ["A divulgação do plano detalhado para reestruturação constitui obrigação não formalizada somente se for feita em detalhes suficientes que originem expectativas válidas de outras partes, tais como clientes, fornecedores e empregados.","C","CPC 25, item 73","Literalidade do item 73."],
  ["Entidade que decide encerrar atividades em 31/01/2023, conclui e comunica o plano de reestruturação a funcionários, clientes e fornecedores em 31/03/2023, encerra as atividades em 31/05/2023 e vende os ativos em 31/07/2023 constituiu o passivo em 31/03/2023.","C","FGV","É a resolução da questão-exemplo do resumo (gabarito B)."],
  ["A provisão para reestruturação deve incluir todos os desembolsos decorrentes da reestruturação, ainda que associados às atividades em andamento da entidade.","E","VUNESP","O item 80 exige, cumulativamente, que <b>não</b> estejam associados às atividades em andamento."],
  ["Custos de novo treinamento ou remanejamento da equipe permanente e gastos de marketing integram a provisão para reestruturação.","E","CEBRASPE","O item 81 os <b>exclui</b>: relacionam-se à conduta futura da empresa."],
  ["A entidade deve divulgar, para cada classe de provisão, breve descrição da natureza da obrigação e o cronograma esperado de quaisquer saídas de benefícios econômicos resultantes.","C","CPC 25, item 85","Alínea (a) do item 85."],
  ["Pode ser apropriado tratar como classe única de provisão os valores relacionados a garantias de produtos diferentes.","C","CPC 25, item 87","Natureza suficientemente similar."],
  ["É apropriado tratar como classe única de provisão os valores relacionados a garantias normais e os valores relativos a processos judiciais.","E","FCC","A natureza é <b>diferente</b>: classes distintas."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Provisão, passivo contingente e ativo contingente",
      '<div class="box"><span class="bl">As três definições do item 10</span>'+
      '<p><b>Provisão:</b> um <b>passivo de prazo OU de valor incertos</b>. O esquema do resumo põe o <b>OU</b> entre os dois — basta um deles ser incerto.</p>'+
      '<p><b>Passivo:</b> <b>obrigação presente</b> da entidade · <b>derivada de eventos já ocorridos</b> · cuja <b>liquidação se espera que resulte em saída de recursos</b> · <b>capazes de gerar benefícios econômicos</b>.</p>'+
      '<p><b>Passivo contingente:</b> <b>obrigação POSSÍVEL</b> que resulta de eventos passados e cuja existência <b>será confirmada apenas pela ocorrência ou não de um ou mais eventos futuros incertos não totalmente sob controle da entidade</b>.</p>'+
      '<p>E também (segunda perna do item 10): <b>obrigação PRESENTE</b> de eventos passados <b>não reconhecida</b> porque <b>(i)</b> não é provável a saída de recursos ou <b>(ii)</b> o valor <b>não pode ser mensurado com suficiente confiabilidade</b>.</p></div>'+
      '<div class="box trap"><span class="bl">NÃO CONFUNDA — provável, possível, remoto</span>'+
      '<p><b>Provisão para contingência</b> · saída <b>PROVÁVEL</b> · <b>reconhece</b> no Balanço · divulga em NE pelo <b>item 85</b> · <b>pode</b> ser mensurada com confiabilidade.</p>'+
      '<p><b>Passivo contingente</b> · saída <b>POSSÍVEL</b> · <b>NÃO</b> reconhece no Balanço · divulga em NE pelo <b>item 86</b> · <b>não pode</b> ser mensurado com confiabilidade.</p>'+
      '<p><b>REMOTA</b> · a empresa <b>não faz nada</b>: não reconhece e <b>também não divulga em nota explicativa</b>.</p>'+
      '<p class="mn"><em>Mesmo processo por danos a terceiros: provável vira provisão no passivo do BP; possível vira nota explicativa.</em></p></div>'+
      '<div class="box"><span class="bl">Alcance do CPC 25 (item 01)</span>'+
      '<p>Aplica-se a <b>todas as entidades</b> na contabilização de provisões e de passivos e ativos contingentes, <b>exceto</b>:</p>'+
      '<ul><li>os que resultem de <b>contratos a executar</b>, <b>a menos que o contrato seja oneroso</b>;</li>'+
      '<li>os <b>cobertos por outro pronunciamento</b>.</li></ul></div>'+
      '<div class="box"><span class="bl">Evento que cria obrigação</span>'+
      '<p>Evento que cria <b>obrigação legal ou não formalizada</b> de tal modo que a entidade <b>não tenha nenhuma alternativa realista senão liquidar</b> essa obrigação.</p>'+
      '<p><b>Obrigação legal</b> deriva de: <b>contrato</b> (termos <b>explícitos ou implícitos</b>) · <b>legislação</b> · <b>outra ação da lei</b>.</p>'+
      '<p><b>Obrigação não formalizada</b>: por <b>padrão de práticas passadas</b>, <b>políticas publicadas</b> ou <b>declaração atual suficientemente específica</b>, a entidade indicou que <b>aceitará certas responsabilidades</b> <b>e</b>, em consequência, <b>criou expectativa válida</b> nas outras partes.</p>'+
      '<p class="mn"><em>Exemplo do resumo: 14º salário pago nos 5 últimos anos → reconhece passivo pela melhor estimativa do desembolso, mesmo sem nada por escrito.</em></p></div>'+
      '<div class="box tip"><span class="bl">Ativo contingente — o lado do ativo é mais rígido</span>'+
      '<p><b>Definição:</b> <b>ativo POSSÍVEL</b> de eventos passados, confirmado apenas por eventos futuros incertos fora do controle total da entidade. Surge de <b>evento não planejado</b> — ex.: reivindicação em processo legal de desfecho incerto.</p>'+
      '<p><b>Item 33:</b> <b>não são reconhecidos</b>, pois pode ser resultado que <b>nunca venha a ser realizado</b>. Só quando o ganho é <b>praticamente certo</b> ele <b>deixa de ser contingente</b> e o reconhecimento passa a ser adequado.</p>'+
      '<p><b>Quadro:</b> entrada <b>PRATICAMENTE CERTA</b> → ativo, <b>reconhece</b>. Entrada <b>PROVÁVEL</b> → ativo contingente, <b>não reconhece</b> (mas <b>divulga</b>, item 89).</p>'+
      '<p><b>NÃO CONFUNDA:</b> saída <b>provável</b> → provisão <b>reconhecida</b>; entrada <b>provável</b> → ativo contingente <b>não reconhecido</b>. O mesmo advérbio, efeitos opostos.</p></div>')
  ],
  V2:[
    sl("Reconhecimento, mensuração, mudança e uso da provisão",
      '<div class="box"><span class="bl">As três condições do item 14</span>'+
      '<ul><li>a entidade tem <b>obrigação presente</b> (legal ou não formalizada) como <b>resultado de evento passado</b>;</li>'+
      '<li>seja <b>provável</b> que será necessária <b>saída de recursos</b> que incorporam benefícios econômicos para liquidar a obrigação; e</li>'+
      '<li>possa ser feita <b>estimativa confiável</b> do valor da obrigação.</li></ul>'+
      '<p>São <b>cumulativas</b>: <b>“se essas condições não forem satisfeitas, nenhuma provisão deve ser reconhecida”</b>.</p></div>'+
      '<div class="box trap"><span class="bl">ATENÇÃO — o nome “provisão”</span>'+
      '<p>O termo <b>só</b> vale para contas <b>classificadas no passivo</b>: Provisão para <b>Contingência</b> · para <b>Custos de Desmontagem</b> · para <b>Custos de Reestruturação</b> · para <b>Custos de Descontinuidade</b> · para <b>processos legais</b>.</p>'+
      '<p>Não se usa mais “provisão” para as <b>contas retificadoras do ativo</b>, hoje <b>PECLD</b>. Se a prova trouxer <b>“Provisão para Créditos de Liquidação Duvidosa”</b>, a <b>nomenclatura está errada</b>.</p></div>'+
      '<div class="box"><span class="bl">Provisão × accruals (item 11)</span>'+
      '<p><b>Provisão:</b> passivo de <b>prazo ou valor incertos</b>. <b>Accruals:</b> passivos derivados de <b>apropriações por competência</b> — a pagar por bens ou serviços <b>não pagos nem formalmente acordados com o fornecedor</b>, inclusive valores devidos a empregados (ex.: <b>férias</b>).</p>'+
      '<p>A incerteza dos accruals é <b>geralmente muito menor</b>. Por isso os <b>accruals</b> são divulgados <b>como parte das contas a pagar</b> e as <b>provisões, separadamente</b>.</p></div>'+
      '<div class="box"><span class="bl">Evento passado (item 21) e responsabilidade solidária (item 29)</span>'+
      '<p><b>Item 21:</b> evento que não gera obrigação imediata pode gerá-la depois, por <b>alteração na lei</b> ou por <b>ato da entidade</b> (declaração pública suficientemente específica). No <b>dano ambiental</b>, o dano se torna evento que cria obrigação quando <b>nova lei exige a retificação</b> ou a entidade <b>publicamente aceita a responsabilidade</b>.</p>'+
      '<p><b>Exemplo da mineradora</b> em país sem legislação ambiental e sem política de compensação: deve <b>abster-se de qualquer registro em contas passivas</b> e de <b>divulgar em notas explicativas</b>.</p>'+
      '<p><b>Item 29:</b> na responsabilidade <b>conjunta e solidária</b>, a parte que <b>as outras partes</b> devem liquidar é <b>passivo contingente</b>; a parte própria, sendo <b>provável</b> a saída, é <b>provisão</b>.</p>'+
      '<p class="mn"><em>A e B, R$ 100.000, A com 70% → Provisão de 70.000 + NE de Passivo Contingente de 30.000.</em></p></div>'+
      '<div class="box tip"><span class="bl">Melhor estimativa (item 39)</span>'+
      '<p><b>Grande população de itens:</b> ponderar <b>todos os possíveis desfechos pelas suas probabilidades associadas</b> — é o método do <b>“valor esperado”</b>.</p>'+
      '<p><b>Escala contínua</b> de desfechos, cada ponto tão provável como outro: usa-se o <b>ponto médio da escala</b>.</p>'+
      '<p><b>Concessionária:</b> defeitos maiores em todos = R$ 180 mi; menores em todos = R$ 100 mi; de 50 carros, <b>20%</b> com maiores e <b>50%</b> com menores.</p>'+
      '<p class="mn"><em>(20% × 180.000.000) + (50% × 100.000.000) = 36.000.000 + 50.000.000 = <b>86.000.000</b></em></p></div>'+
      '<div class="box trap"><span class="bl">Mudança (59), desconto a valor presente (60) e uso (61)</span>'+
      '<p><b>Item 59:</b> provisões <b>reavaliadas em cada data de balanço</b> e ajustadas à <b>melhor estimativa corrente</b>. Deixando de ser provável a saída, a provisão <b>deve ser revertida</b>.</p>'+
      '<p><b>Reconhecimento:</b> D Despesas Operacionais · C Provisão. <b>Reversão:</b> D Provisão · C Reversão de Provisão (receita).</p>'+
      '<p><b>Item 60:</b> no <b>DVP</b>, o valor contábil <b>aumenta a cada período</b> pela <b>passagem do tempo</b>, e o aumento é <b>DESPESA FINANCEIRA</b>: 100.000 registrados por 90.000 que passam a 95.000 → D <b>Despesa Financeira</b> 5.000 · C Provisão 5.000. O resumo avisa: a banca oferece “Despesa Operacional” como pegadinha — <b>marque sempre Despesa Financeira</b>.</p>'+
      '<p><b>Item 61:</b> a provisão é usada <b>somente para os desembolsos para os quais foi originalmente reconhecida</b>. Uso: D Provisão para custos de garantia 20.000 · C Caixa/Bancos 20.000.</p></div>')
  ],
  V3:[
    sl("Contrato oneroso, reestruturação e divulgação",
      '<div class="box"><span class="bl">Contrato oneroso (itens 66 e 68)</span>'+
      '<p><b>Item 66:</b> havendo contrato oneroso, a <b>obrigação presente</b> do contrato deve ser <b>reconhecida e mensurada como PROVISÃO</b>.</p>'+
      '<p><b>Item 68:</b> é o contrato em que os <b>custos inevitáveis de satisfazer as obrigações EXCEDEM os benefícios econômicos</b> que se espera receber ao longo do contrato.</p>'+
      '<p>Os <b>custos inevitáveis</b> refletem o <b>menor custo líquido de sair do contrato</b>: (a) <b>custo de cumprir o contrato</b> ou (b) <b>custo de compensação ou penalidade</b> pelo não cumprimento — <b>dos dois o menor</b>.</p>'+
      '<p class="mn"><em>Matéria-prima a preço fixo de R$ 100 mil × multa de rescisão de R$ 20.000 → custo inevitável = <b>20.000</b>.</em></p></div>'+
      '<div class="box"><span class="bl">Reestruturação (item 10) e seus exemplos (item 70)</span>'+
      '<p><b>Programa planejado e controlado pela administração</b> que altera <b>materialmente</b> (a) o <b>âmbito de um negócio</b> ou (b) a <b>maneira como o negócio é conduzido</b>.</p>'+
      '<ul><li>venda ou extinção de <b>linha de negócios</b>;</li>'+
      '<li><b>fechamento</b> de locais de negócios de um país ou região, ou <b>realocação</b> das atividades de um país ou região para outro;</li>'+
      '<li>mudanças na <b>estrutura da administração</b> — ex.: eliminação de um nível de gerência;</li>'+
      '<li><b>reorganizações fundamentais</b> com efeito material na natureza e no foco das operações.</li></ul></div>'+
      '<div class="box trap"><span class="bl">A data em que nasce o passivo (item 73)</span>'+
      '<p A evidência de que a entidade <b>começou a implantar</b> o plano vem da <b>desmontagem da fábrica</b>, da <b>venda de ativos</b> ou da <b>divulgação das principais características do plano</b>.</p>'+
      '<p>A <b>divulgação do plano detalhado</b> constitui <b>obrigação não formalizada</b> <b>somente se</b> feita de tal maneira e em <b>detalhes suficientes</b> que <b>origine expectativas válidas de outras partes</b> — clientes, fornecedores e empregados.</p>'+
      '<p><b>QUESTÃO-EXEMPLO:</b> decisão de encerrar atividades em <b>31/01/23</b>; plano concluído e <b>comunicado</b> a funcionários, clientes e fornecedores em <b>31/03/23</b>; encerramento em <b>31/05/23</b>; venda dos ativos em <b>31/07/23</b>; recebimento em <b>31/08/23</b>. O passivo foi constituído em <b>31/03/23</b> — <b>Provisão para custos de reestruturação</b>. Gabarito <b>B</b>.</p></div>'+
      '<div class="box"><span class="bl">O que entra e o que não entra na provisão para reestruturação</span>'+
      '<p><b>Item 80 — entra</b> somente o desembolso <b>direto</b> que, <b>simultaneamente</b>, seja (a) <b>necessariamente ocasionado pela reestruturação</b> e (b) <b>não associado às atividades em andamento</b>. Ex.: indenizações e rescisões dos demitidos.</p>'+
      '<p><b>Item 81 — não entra:</b> <b>novo treinamento ou remanejamento da equipe permanente</b> · <b>marketing</b> · <b>investimento em novos sistemas e redes de distribuição</b>. Relacionam-se à <b>conduta futura</b> da empresa.</p>'+
      '<p>Também fica fora o <b>salário dos funcionários enquanto estavam trabalhando</b> — atividade em andamento.</p></div>'+
      '<div class="box tip"><span class="bl">Divulgação (itens 85 e 87)</span>'+
      '<p><b>Item 85</b>, para <b>cada classe de provisão</b>: (a) breve <b>descrição da natureza</b> da obrigação e o <b>cronograma esperado</b> das saídas; (b) <b>indicação das incertezas</b> sobre valor ou cronograma, com as <b>principais premissas</b> quando necessário; (c) valor de <b>qualquer reembolso esperado</b>, declarando o ativo reconhecido por conta dele.</p>'+
      '<p><b>Exemplo 01:</b> provisão de <b>R$ 80.000</b> para multa tributária por infração fiscal, com desembolso esperado <b>dentro de dois anos</b> da data do balanço.</p>'+
      '<p><b>Exemplo 02:</b> provisão de <b>R$ 190.000</b> para custos de desmontagem em atividade nuclear, com custos esperados <b>até 2060</b>; se a desmontagem não ocorresse antes de <b>2120</b>, a provisão cairia para <b>R$ 98.000</b>. Estimada com a tecnologia existente, a preços correntes e taxa de desconto real de <b>2% a.a.</b></p>'+
      '<p><b>Item 87:</b> pode ser apropriado tratar como <b>classe única</b> os valores de <b>garantias de produtos diferentes</b>; <b>não</b> é apropriado juntar <b>garantias normais com processos judiciais</b> — natureza diferente, <b>classes distintas</b>.</p></div>')
  ]
};

var EX = {
S1:{t:"mc", instr:"Qual é a definição de provisão no item 10 do CPC 25?",
  options:["Passivo de prazo ou de valor incertos",
           "Passivo de prazo e de valor incertos, cumulativamente",
           "Obrigação possível confirmada por eventos futuros incertos",
           "Ativo possível resultante de eventos passados"],
  answer:0,
  why:"O esquema do resumo põe o OU entre prazo incerto e valor incerto — basta um deles."},

S2:{t:"sort", instr:"Quadro NÃO CONFUNDA: a característica é da provisão para contingência ou do passivo contingente?",
  buckets:["Provisão para contingência","Passivo contingente"],
  items:[["A saída de recursos é PROVÁVEL",0],
         ["A saída de recursos é POSSÍVEL",1],
         ["Deve ser reconhecido no Balanço",0],
         ["Não deve ser reconhecido no Balanço",1],
         ["Divulga em nota explicativa pelo item 85",0],
         ["Divulga em nota explicativa pelo item 86",1],
         ["Pode ser mensurado com confiabilidade",0],
         ["Não pode ser mensurado com confiabilidade",1]],
  why:"É o quadro do resumo, na íntegra. Se a saída for REMOTA, a empresa não faz nada."},

S3:{t:"gap", instr:"Complete a observação do resumo",
  before:"Se a saída de recursos for REMOTA, a empresa ",
  after:".",
  options:["não faz nada — não reconhece nem divulga em nota explicativa",
           "não reconhece, mas divulga em nota explicativa",
           "reconhece a provisão pelo valor estimado"],
  answer:0,
  why:"Remoto não gera reconhecimento nem divulgação."},

S4:{t:"multi", instr:"Marque os elementos da definição de PASSIVO do item 10",
  options:["É uma obrigação presente da entidade",
           "Derivada de eventos já ocorridos",
           "Cuja liquidação se espera que resulte em saída de recursos",
           "Capazes de gerar benefícios econômicos",
           "De prazo ou de valor incertos",
           "Cuja existência será confirmada por eventos futuros incertos"],
  answers:[0,1,2,3],
  why:"Prazo ou valor incertos é a definição de provisão; confirmação por evento futuro é a de contingência."},

S5:{t:"match", instr:"Correlacione cada conceito à sua definição no item 10",
  pairs:[["Provisão","Passivo de prazo ou de valor incertos"],
         ["Passivo contingente","Obrigação possível confirmada apenas por eventos futuros incertos fora do controle total da entidade"],
         ["Obrigação legal","Deriva de contrato, de legislação ou de outra ação da lei"],
         ["Obrigação não formalizada","Decorre de padrão de práticas passadas, políticas publicadas ou declaração suficientemente específica, criando expectativa válida"]],
  why:"O 14º salário pago nos cinco últimos anos é o exemplo de obrigação não formalizada do resumo."},

S6:{t:"sort", instr:"Reconhece no Balanço ou apenas divulga (ou nada)?",
  buckets:["Reconhece no Balanço","Não reconhece"],
  items:[["Provisão — saída de recursos PROVÁVEL",0],
         ["Passivo contingente — saída de recursos POSSÍVEL",1],
         ["Ativo contingente — entrada de recursos PROVÁVEL",1],
         ["Ativo — entrada de recursos PRATICAMENTE CERTA",0],
         ["Obrigação com saída de recursos REMOTA",1]],
  why:"O mesmo advérbio provável reconhece no passivo e não reconhece no ativo."},

S7:{t:"wordbank", instr:"Monte o lançamento do reconhecimento da provisão",
  target:["D","Despesas","Operacionais","C","Provisão"],
  extra:["Despesa","Financeira","Caixa/Bancos","Reversão","de"],
  why:"D Despesas Operacionais (aumenta a despesa) · C Provisão (aumenta o passivo)."},

S8:{t:"multi", instr:"Marque as condições exigidas pelo item 14 para reconhecer uma provisão",
  options:["Obrigação presente, legal ou não formalizada, como resultado de evento passado",
           "Ser provável a saída de recursos que incorporam benefícios econômicos",
           "Poder ser feita estimativa confiável do valor da obrigação",
           "Existir formalização por escrito da obrigação",
           "Ser remota a possibilidade de reversão",
           "Haver decisão judicial definitiva"],
  answers:[0,1,2],
  why:"São cumulativas: não satisfeitas, nenhuma provisão deve ser reconhecida."},

S9:{t:"mc", instr:"Concessionária vendeu 50 automóveis com garantia de dois anos. Defeitos maiores em todos custariam R$ 180 milhões; menores em todos, R$ 100 milhões. Estimou 10 automóveis (20%) com defeitos maiores e 25 (50%) com menores. Qual a provisão para garantia de janeiro?",
  options:["R$ 86.000.000","R$ 280.000.000","R$ 140.000.000","R$ 36.000.000"],
  answer:0,
  why:"(20% x 180.000.000) + (50% x 100.000.000) = 36.000.000 + 50.000.000."},

S10:{t:"gap", instr:"Complete o item 60 e o quadro ATENÇÃO do resumo",
  before:"Utilizado o desconto a valor presente, o aumento do valor contábil da provisão pela passagem do tempo deve ser reconhecido como ",
  after:".",
  options:["despesa financeira","despesa operacional","receita de reversão de provisão"],
  answer:0,
  why:"A banca oferece Despesa Operacional como distrator. Marque sempre Despesa Financeira."},

S11:{t:"match", instr:"Correlacione cada momento da provisão ao seu lançamento",
  pairs:[["Reconhecimento","D Despesas Operacionais · C Provisão"],
         ["Reversão","D Provisão · C Reversão de Provisão"],
         ["Desconto a valor presente","D Despesa Financeira · C Provisão"],
         ["Uso da provisão","D Provisão · C Caixa/Bancos"]],
  why:"Todos os quatro estão no resumo, com os valores de 5.000 no DVP e 20.000 no uso."},

S12:{t:"mc", instr:"Empresas A e B são conjunta e solidariamente responsáveis por obrigação de R$ 100.000 de ações judiciais com perda provável, cabendo 70% a A. Como A contabiliza?",
  options:["Provisão de R$ 70.000 e divulgação em nota explicativa de passivo contingente de R$ 30.000",
           "Provisão de R$ 100.000, por ser solidariamente responsável pelo total",
           "Provisão de R$ 30.000 e passivo contingente de R$ 70.000 em nota explicativa",
           "Apenas divulgação em nota explicativa de passivo contingente de R$ 100.000"],
  answer:0,
  why:"Item 29: a parte que se espera que as outras partes liquidem é passivo contingente."},

S13:{t:"mc", instr:"Contrato de matéria-prima por um ano a preço fixo de R$ 100 mil, com cláusula de multa de R$ 20.000 pela rescisão antecipada, tornado oneroso pela queda dos preços de mercado. Qual o custo inevitável?",
  options:["R$ 20.000, a penalidade — dos dois o menor","R$ 100.000, o custo de cumprir o contrato",
           "R$ 120.000, a soma dos dois","R$ 80.000, a diferença entre os dois"],
  answer:0,
  why:"Os custos inevitáveis refletem o menor custo líquido de sair do contrato."},

S14:{t:"gap", instr:"Complete a definição do item 68",
  before:"Contrato oneroso é o contrato em que os custos inevitáveis de satisfazer as obrigações do contrato ",
  after:" os benefícios econômicos que se espera sejam recebidos ao longo do mesmo contrato.",
  options:["excedem","são inferiores a","equivalem a"],
  answer:0,
  why:"A banca gosta de inverter os dois lados da comparação."},

S15:{t:"multi", instr:"Marque os eventos que podem se enquadrar na definição de reestruturação (item 70)",
  options:["Venda ou extinção de linha de negócios",
           "Fechamento de locais de negócios de um país ou região",
           "Realocação das atividades de negócios de um país ou região para outro",
           "Mudanças na estrutura da administração, como a eliminação de um nível de gerência",
           "Reorganizações fundamentais com efeito material na natureza e no foco das operações",
           "Campanha de marketing de um produto novo",
           "Novo treinamento da equipe permanente"],
  answers:[0,1,2,3,4],
  why:"Marketing e novo treinamento são justamente os custos que o item 81 exclui da provisão."},

S16:{t:"sort", instr:"Entra ou não entra na provisão para reestruturação?",
  buckets:["Entra (item 80)","Não entra (item 81)"],
  items:[["Desembolso necessariamente ocasionado pela reestruturação e não associado às atividades em andamento",0],
         ["Indenizações e rescisões contratuais dos funcionários demitidos",0],
         ["Novo treinamento ou remanejamento da equipe permanente",1],
         ["Marketing",1],
         ["Investimento em novos sistemas e redes de distribuição",1],
         ["Salário dos funcionários enquanto estavam trabalhando",1]],
  why:"O item 80 exige as duas condições simultaneamente; o item 81 lista o que se liga à conduta futura da empresa."},

S17:{t:"mc", instr:"Decisão de encerrar atividades em Minas Gerais em 31/01/23; plano concluído e comunicado a funcionários, clientes e fornecedores em 31/03/23; encerramento em 31/05/23; ativos vendidos em 31/07/23; valor recebido em 31/08/23. Em que data o passivo foi constituído?",
  options:["31/03/23","31/01/23","31/05/23","31/07/23"],
  answer:0,
  why:"Item 73: a comunicação detalhada do plano criou a obrigação não formalizada — Provisão para custos de reestruturação."},

S18:{t:"mc", instr:"Segundo o item 87, o que pode ser tratado como classe única de provisão?",
  options:["Os valores relacionados a garantias de produtos diferentes",
           "Os valores de garantias normais somados aos de processos judiciais",
           "Todas as provisões da entidade, qualquer que seja a natureza",
           "Provisões e passivos contingentes, indistintamente"],
  answer:0,
  why:"A natureza das garantias é similar; garantia e processo judicial ficam em classes distintas."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CESPE — Contabilidade Avançada 05","https://www.tecconcursos.com.br/s/Q2yxJM","Q2yxJM"],
  ["Caderno FCC — Contabilidade Avançada 05","https://www.tecconcursos.com.br/s/Q2yxJq","Q2yxJq"],
  ["Caderno FGV — Contabilidade Avançada 05","https://www.tecconcursos.com.br/s/Q2yxKE","Q2yxKE"],
  ["Caderno VUNESP — Contabilidade Avançada 05","https://www.tecconcursos.com.br/s/Q2yxKW","Q2yxKW"]
];
var TECNOTA = "A banca ganha dinheiro em três fronteiras deste resumo. A primeira é a escala provável/possível/remoto: provável vira provisão reconhecida no Balanço e divulgada pelo item 85; possível é passivo contingente, fora do Balanço e divulgado pelo item 86; remoto não gera nada, nem nota explicativa. A segunda é a assimetria entre os lados: no passivo, provável já reconhece; no ativo, provável apenas divulga (item 89) e só a entrada praticamente certa autoriza o reconhecimento. A terceira é a mensuração e os lançamentos: valor esperado na grande população de itens (a conta da concessionária, 20% x 180 milhões + 50% x 100 milhões = 86 milhões), ponto médio na escala contínua, e o aumento do valor contábil pelo desconto a valor presente lançado sempre como despesa financeira, nunca operacional — o resumo avisa que a banca põe as duas como opção. De quebra, guarde as datas da questão-exemplo de reestruturação (o passivo nasce em 31/03/23, com a comunicação do plano) e o menor dos dois no contrato oneroso (multa de 20.000 contra custo de cumprir de 100.000).";

var UNITS = [
  {n:1, title:"Provisão, passivo contingente e ativo contingente", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"As definições, o alcance e a escala de probabilidade", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · definições do item 10",        xp:25, data:["S1","S2","T0","T1","T2","T3","T4","T5"]},
    {id:"K3", type:"drill",  title:"Praticar · provável, possível e remoto",  xp:25, data:["S3","S4","T6","T7","T8","T9","T10","T11","T12"]},
    {id:"K4", type:"drill",  title:"Praticar · obrigações e ativo contingente", xp:25, data:["S5","S6","T13","T14","T15","T16","T17"]},
    {id:"K5", type:"flash",  title:"Flashcards · conceitos do CPC 25",        xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]}
  ]},
  {n:2, title:"Reconhecimento, mensuração e uso da provisão", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Item 14, accruals, melhor estimativa e lançamentos", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · item 14 e accruals",           xp:25, data:["S7","S8","T18","T19","T20","T21","T22","T23","T24"]},
    {id:"K8", type:"drill",  title:"Praticar · nome da conta e evento passado", xp:25, data:["S9","S10","T25","T26","T27","T28","T29","T30","T31"]},
    {id:"K9", type:"drill",  title:"Praticar · estimativa, mudança e uso",    xp:25, data:["S11","S12","T32","T33","T34","T35","T36","T37","T38"]},
    {id:"K10",type:"flash",  title:"Flashcards · reconhecer, mensurar e usar", xp:15, data:[17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}
  ]},
  {n:3, title:"Contrato oneroso, reestruturação e divulgação", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Do contrato oneroso à nota explicativa",  xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · contrato oneroso",             xp:25, data:["S13","S14","T39","T40","T41","T42"]},
    {id:"K13",type:"drill",  title:"Praticar · reestruturação",               xp:25, data:["S15","S16","T43","T44","T45","T46"]},
    {id:"K14",type:"drill",  title:"Praticar · datas, itens 80/81 e divulgação", xp:25, data:["S17","S18","T47","T48","T49","T50","T51","T52","T53"]},
    {id:"K15",type:"flash",  title:"Flashcards · oneroso, reestruturação e NE", xp:15, data:[32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                 xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                    xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                   xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 05 de Contabilidade Avançada (Radegondes) ---------- */
var COM={
0:"<p>Certo pela letra do <b>item 10</b>, que o resumo abre com a pergunta “O QUE É UMA PROVISÃO?”: <b>“Provisão é um passivo de prazo ou de valor incertos”</b>.</p><p>O esquema do material desenha isso em três blocos: <b>é um passivo</b> · <b>de prazo incerto</b> · <b>de valor incerto</b>, com um <b>OU</b> grande entre os dois últimos.</p><p class='fb-fonte'>Resumo 05 · <i>Provisão — item 10</i></p>",
1:"<p>Errado por uma conjunção. O resumo é gráfico nisso: entre “de prazo incerto” e “de valor incerto” ele coloca um <b>OU</b>, não um “e”.</p><p>Basta que <b>um</b> dos dois seja incerto para haver provisão. Exigir os dois cumulativamente estreita indevidamente a definição do item 10.</p><p class='fb-fonte'>Resumo 05 · <i>Provisão — item 10</i></p>",
2:"<p>Certo — é a transcrição do <b>item 10</b> feita pelo resumo: <b>“Passivo é uma obrigação presente da entidade, derivada de eventos já ocorridos, cuja liquidação se espera que resulte em saída de recursos da entidade capazes de gerar benefícios econômicos”</b>.</p><p>O esquema separa os <b>quatro</b> elementos, e é assim que a banca monta a assertiva: obrigação <b>presente</b> · eventos <b>já ocorridos</b> · <b>saída</b> de recursos · <b>benefícios econômicos</b>. O exemplo do material é a dívida com fornecedor.</p><p class='fb-fonte'>Resumo 05 · <i>Passivo — item 10</i></p>",
3:"<p>Certo. É a primeira perna da definição do <b>item 10</b>: <b>“passivo contingente é uma obrigação possível que resulta de eventos passados e cuja existência será confirmada apenas pela ocorrência ou não de um ou mais eventos futuros incertos não totalmente sob controle da entidade”</b>.</p><p>Guarde as palavras de sinalização: <b>POSSÍVEL</b>, <b>eventos passados</b>, <b>não totalmente sob controle da entidade</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Passivo Contingente — item 10</i></p>",
4:"<p>Errado por uma palavra. A alínea (b)(ii) do item 10 diz o contrário: a obrigação presente não é reconhecida porque <b>“o valor da obrigação NÃO pode ser mensurado com suficiente confiabilidade”</b>.</p><p>O quadro NÃO CONFUNDA fecha a lógica: a <b>provisão</b> pode ser mensurada com confiabilidade; o <b>passivo contingente</b>, não. Se pudesse ser mensurado com confiabilidade e a saída fosse provável, seria provisão.</p><p class='fb-fonte'>Resumo 05 · <i>Passivo Contingente — item 10, (b)</i></p>",
5:"<p>Errado no efeito contábil. O exemplo do resumo é exatamente esse — empresa processada por danos causados a terceiros em acidente — e ele separa as duas hipóteses: se a indenização for <b>PROVÁVEL</b>, <b>“a empresa deve registrar uma provisão (um valor estimado) para cobrir os custos relacionados a essa ação judicial”</b>, no <b>passivo do Balanço Patrimonial</b>.</p><p>Divulgar sem reconhecer é o tratamento do caso <b>POSSÍVEL</b>. Provável entra no Balanço.</p><p class='fb-fonte'>Resumo 05 · <i>CPC 25 — exemplo do processo por danos</i></p>",
6:"<p>Certo, na letra do exemplo do resumo: sendo a saída <b>POSSÍVEL</b>, <b>“a empresa não deve registrar o passivo contingente no Balanço, mas deve divulgá-lo em nota explicativa”</b>.</p><p>No quadro NÃO CONFUNDA, essa linha vem acompanhada da referência ao <b>item 86</b>, que é a base da divulgação do passivo contingente.</p><p class='fb-fonte'>Resumo 05 · <i>Passivo Contingente — exemplo e quadro NÃO CONFUNDA</i></p>",
7:"<p>Errado na parte final. A <b>OBS.</b> do resumo é categórica: <b>“se a saída de recursos for REMOTA, a empresa não faz nada (não reconhece como provisão ou passivo contingente e também não divulga em nota explicativa)”</b>.</p><p>A escala do material tem três degraus: <b>provável</b> reconhece · <b>possível</b> divulga · <b>remoto</b> silencia. A banca costuma trocar o terceiro pelo segundo.</p><p class='fb-fonte'>Resumo 05 · <i>NÃO CONFUNDA — OBS. sobre a saída remota</i></p>",
8:"<p>Errado — os itens estão invertidos. O quadro NÃO CONFUNDA do resumo atribui a divulgação em nota explicativa da <b>provisão para contingência</b> ao <b>item 85</b> e a do <b>passivo contingente</b> ao <b>item 86</b>.</p><p>Um jeito de fixar: a ordem do quadro é a ordem dos itens — primeiro a coluna da provisão (85), depois a do passivo contingente (86).</p><p class='fb-fonte'>Resumo 05 · <i>NÃO CONFUNDA — provisão × passivo contingente</i></p>",
9:"<p>Errado na condição. O <b>item 01</b> transcrito no resumo excetua <b>“(a) os que resultem de contratos a executar, a menos que o contrato seja oneroso”</b>.</p><p>O comentário do material explica: a regra <b>não</b> se aplica aos contratos a serem executados, <b>salvo</b> se forem onerosos. No exemplo dele, só quando o contrato de fornecimento de equipamentos traz cláusulas de responsabilidades financeiras significativas além do valor do contrato é que se aplica o CPC 25. A outra exceção é a alínea (b): os <b>cobertos por outro pronunciamento</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Alcance do CPC 25 — item 01</i></p>",
10:"<p>Certo pela letra do <b>item 10</b>: <b>“evento que cria obrigação é um evento que cria uma obrigação legal ou não formalizada que faça com que a entidade não tenha nenhuma alternativa realista senão liquidar essa obrigação”</b>.</p><p>O esquema do resumo desdobra o evento em dois ramos: obrigação <b>legal</b> e obrigação <b>não formalizada</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Evento que cria uma obrigação</i></p>",
11:"<p>Certo. São as três fontes que o resumo lista: <b>“contrato (por meio de termos explícitos ou implícitos)”</b>, <b>“legislação”</b> e <b>“outra ação da lei”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Evento que cria uma obrigação — obrigação legal</i></p>",
12:"<p>Errado por uma restrição que o resumo não faz. O material escreve, entre parênteses, <b>“por meio de termos explícitos ou implícitos”</b>.</p><p>Ou seja: o contrato cria obrigação legal tanto pelo que está escrito quanto pelo que dele decorre implicitamente. A palavra “apenas” é o defeito da assertiva.</p><p class='fb-fonte'>Resumo 05 · <i>Evento que cria uma obrigação — obrigação legal</i></p>",
13:"<p>Certo, e a assertiva reproduz a estrutura de duas alíneas do resumo: (a) por <b>padrão estabelecido de práticas passadas</b>, <b>políticas publicadas</b> ou <b>declaração atual suficientemente específica</b>, a entidade indicou a outras partes que <b>aceitará certas responsabilidades</b>; <b>e</b> (b) <b>“em consequência, a entidade cria uma expectativa válida nessas outras partes de que cumprirá com essas responsabilidades”</b>.</p><p>As duas alíneas são cumulativas — a expectativa válida é o que fecha a obrigação não formalizada.</p><p class='fb-fonte'>Resumo 05 · <i>Evento que cria uma obrigação — obrigação não formalizada</i></p>",
14:"<p>Errado. É justamente o exemplo do resumo, e a conclusão dele é a oposta: empresa que nos <b>5 últimos anos</b> pagou <b>14º salário</b> criou nos empregados a expectativa de que honrará o benefício também no ano corrente, e ela própria indicou a outras partes que pretende mantê-lo.</p><p>O material conclui: <b>“mesmo que não haja uma formalização por escrito, a entidade deverá reconhecer um passivo cujo valor equivalha à melhor estimativa do desembolso exigido para liquidar a obrigação presente na data do balanço”</b>. Falta de papel assinado não afasta a obrigação não formalizada.</p><p class='fb-fonte'>Resumo 05 · <i>Exemplo de obrigação não formalizada</i></p>",
15:"<p>Certo pela letra do <b>item 10</b>: <b>“ativo contingente é um ativo possível que resulta de eventos passados e cuja existência será confirmada apenas pela ocorrência ou não de um ou mais eventos futuros incertos não totalmente sob controle da entidade”</b>.</p><p>Repare que a redação é espelhada à do passivo contingente — muda o lado do balanço, não a estrutura. O comentário do resumo dá o exemplo da <b>reivindicação que a entidade reclama por processos legais</b>, com desfecho incerto.</p><p class='fb-fonte'>Resumo 05 · <i>Ativo Contingente — item 10</i></p>",
16:"<p>Errado — inverteu os degraus. O <b>item 33</b> transcrito no resumo diz que <b>“os ativos contingentes não são reconhecidos nas demonstrações contábeis, uma vez que pode tratar-se de resultado que nunca venha a ser realizado”</b>.</p><p>O quadro comparativo do material fecha: entrada <b>PRATICAMENTE CERTA</b> → é ativo e <b>deve ser reconhecido</b> no Balanço; entrada <b>PROVÁVEL</b> → é ativo contingente e <b>não deve ser reconhecido</b>. Provável, no ativo, só dá direito a <b>divulgação</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Ativo Contingente — item 33 e quadro comparativo</i></p>",
17:"<p>Certo, na letra do <b>item 33</b>: <b>“porém, quando a realização do ganho é praticamente certa, então o ativo relacionado não é um ativo contingente e o seu reconhecimento é adequado”</b>.</p><p>É o eixo do quadro ATIVO × ATIVO CONTINGENTE do resumo: o que muda a classificação é o grau de certeza da <b>entrada</b> de recursos.</p><p class='fb-fonte'>Resumo 05 · <i>Ativo Contingente — item 33 e quadro comparativo</i></p>",
18:"<p>Errado no advérbio. O comentário do resumo é preciso: <b>“o ativo contingente é divulgado, como exigido pelo item 89, quando for PROVÁVEL a entrada de benefícios econômicos”</b>.</p><p>Se a entrada fosse <b>praticamente certa</b>, não haveria mais ativo contingente a divulgar — haveria <b>ativo a reconhecer</b>, pelo item 33. Divulga-se no provável; reconhece-se no praticamente certo.</p><p class='fb-fonte'>Resumo 05 · <i>Ativo Contingente — divulgação (item 89)</i></p>",
19:"<p>Certo pela letra do <b>item 11</b>: <b>“as provisões podem ser distintas de outros passivos tais como contas a pagar e passivos derivados de apropriações por competência (accruals) porque há incerteza sobre o prazo ou o valor do desembolso futuro necessário para a sua liquidação”</b>.</p><p>É a mesma incerteza da definição de provisão — prazo <b>ou</b> valor — que serve de linha divisória.</p><p class='fb-fonte'>Resumo 05 · <i>Provisão e outros passivos — item 11</i></p>",
20:"<p>Certo. É a coluna direita do quadro comparativo do resumo: <b>accruals</b> são <b>“passivos derivados de apropriações por competência”</b>, enquanto a provisão é o passivo <b>de prazo ou de valor incertos</b>.</p><p>O bloco EXPLICANDO MELHOR detalha: são passivos a pagar por bens ou serviços <b>“que não tenham sido pagos ou formalmente acordados com o fornecedor, incluindo valores devidos a empregados (ex.: valores relacionados com pagamento de férias)”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Provisão e outros passivos — quadro comparativo</i></p>",
21:"<p>Errado por uma palavra. O resumo diz o oposto: <b>“embora algumas vezes seja necessário estimar o valor ou prazo desses passivos (accruals), a incerteza é geralmente MUITO MENOR do que nas provisões”</b>.</p><p>O exemplo dele ajuda a sentir a diferença: mercadoria recebida do fornecedor, com prazo a vencer e sem acordo formal, é accrual — sabe-se praticamente tudo sobre o valor. Na provisão, não.</p><p class='fb-fonte'>Resumo 05 · <i>Provisão e outros passivos — EXPLICANDO MELHOR</i></p>",
22:"<p>Errado — a assertiva trocou os dois de lugar. O resumo é explícito: <b>“os passivos derivados de apropriação por competência (accruals) são frequentemente divulgados como parte das contas a pagar, enquanto as provisões são divulgadas SEPARADAMENTE”</b>.</p><p>Faz sentido: o que é quase certo se mistura às contas a pagar; o que é incerto ganha linha própria e nota explicativa.</p><p class='fb-fonte'>Resumo 05 · <i>Provisão e outros passivos — EXPLICANDO MELHOR</i></p>",
23:"<p>Certo, e são as três alíneas do <b>item 14</b> na ordem do resumo: <b>(a)</b> obrigação presente (legal ou não formalizada) como resultado de <b>evento passado</b>; <b>(b)</b> seja <b>provável</b> que será necessária saída de recursos que incorporam benefícios econômicos; <b>(c)</b> possa ser feita <b>estimativa confiável</b> do valor.</p><p class='fb-fonte'>Resumo 05 · <i>Reconhecimento da Provisão — item 14</i></p>",
24:"<p>Errado. O item 14, como o resumo o transcreve, encerra com a frase que resolve a questão: <b>“se essas condições não forem satisfeitas, nenhuma provisão deve ser reconhecida”</b>.</p><p>As três alíneas são <b>cumulativas</b>: obrigação presente de evento passado <b>+</b> saída provável <b>+</b> estimativa confiável. Falta uma, não há provisão — e, se faltar a mensuração confiável, o caso migra para <b>passivo contingente</b>, como mostra o quadro NÃO CONFUNDA.</p><p class='fb-fonte'>Resumo 05 · <i>Reconhecimento da Provisão — item 14</i></p>",
25:"<p>Errado. O quadro <b>ATENÇÃO!</b> do resumo é curto e direto: <b>“o termo ‘provisão’ só deve ser utilizado para as contas que são classificadas no passivo”</b>.</p><p>Os exemplos dele são todos de passivo: Provisão para <b>Contingência</b>, para <b>Custos de Desmontagem</b>, para <b>Custos de Reestruturação</b>, para <b>Custos de Descontinuidade</b> e para <b>processos legais</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Reconhecimento da Provisão — ATENÇÃO!</i></p>",
26:"<p>Errado, e o resumo antecipa esta exata pegadinha: <b>“não se usa mais o termo ‘provisão para as contas retificadoras do Ativo’, as quais passaram a ser denominadas de ‘Perdas Estimadas com Crédito de Liquidação Duvidosa (PECLD)’”</b>.</p><p>E completa: <b>“portanto, se aparecer algo na prova com o nome ‘Provisão para Créditos de Liquidação Duvidosa’, saiba que esta nomenclatura está errada”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Reconhecimento da Provisão — ATENÇÃO!</i></p>",
27:"<p>Certo pela letra do <b>item 21</b>: <b>“um evento que não gera imediatamente uma obrigação pode gerá-la em data posterior, por força de alterações na lei ou porque um ato da entidade (por exemplo, uma declaração pública suficientemente específica) dá origem a uma obrigação não formalizada”</b>.</p><p>O exemplo do item é o <b>dano ambiental</b>: pode não haver obrigação de remediar, mas o dano se torna evento que cria obrigações quando <b>nova lei exige a retificação</b> ou quando a entidade <b>publicamente aceita a responsabilidade</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Evento Passado — item 21</i></p>",
28:"<p>Errado — é o exemplo do resumo com a conclusão invertida. Mineradora brasileira operando em país <b>sem legislação ambiental</b>, que gera dano e <b>não tem qualquer política de compensação</b> naquele país: o material conclui que ela <b>“deverá abster-se de realizar qualquer registro em contas passivas, assim como de divulgar qualquer informação em notas explicativas relativas ao risco ambiental descrito”</b>.</p><p>Nem provisão, nem nota. O que mudaria o quadro seria uma <b>nova lei</b> exigindo a retificação ou a <b>aceitação pública</b> da responsabilidade pela empresa.</p><p class='fb-fonte'>Resumo 05 · <i>Evento Passado — exemplo da mineradora</i></p>",
29:"<p>Certo pela letra do <b>item 29</b>: <b>“quando a entidade for conjunta e solidariamente responsável por obrigação, a parte da obrigação que se espera que as outras partes liquidem é tratada como passivo contingente”</b>.</p><p>E a outra metade da regra: a entidade <b>reconhece provisão</b> para a parte em que é <b>provável</b> a saída de recursos, <b>“exceto em circunstâncias extremamente raras em que nenhuma estimativa suficientemente confiável possa ser feita”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Entidade conjunta e solidariamente responsável — item 29</i></p>",
30:"<p>Certo — é o exemplo do resumo, com os mesmos valores. Empresas <b>“A”</b> e <b>“B”</b>, obrigação de <b>R$ 100.000</b> por ações judiciais de perda <b>provável</b>, cabendo <b>70%</b> a “A”. A contabilização em “A”:</p><ul><li><b>Reconhecimento de uma Provisão no valor de R$ 70.000</b>; e</li><li><b>Divulgação em Notas Explicativas de um Passivo Contingente no valor de R$ 30.000</b> — a parcela de responsabilidade da empresa “B”.</li></ul><p class='fb-fonte'>Resumo 05 · <i>Entidade conjunta e solidariamente responsável — exemplo</i></p>",
31:"<p>Certo pela letra do <b>item 39</b>: <b>“quando a provisão a ser mensurada envolve uma grande população de itens, a obrigação deve ser estimada ponderando-se todos os possíveis desfechos pelas suas probabilidades associadas. O nome para esse método estatístico de estimativa é ‘valor esperado’”</b>.</p><p>O item ainda observa que a provisão <b>será diferente</b> conforme a probabilidade da perda seja, por exemplo, de <b>60%</b> ou de <b>90%</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Melhor Estimativa — item 39</i></p>",
32:"<p>Errado no ponto da escala. O item 39, como o resumo o transcreve: <b>“quando houver uma escala contínua de desfechos possíveis, e cada ponto nessa escala é tão provável como qualquer outro, é usado o PONTO MÉDIO da escala”</b>.</p><p>Duas regras, dois cenários: <b>grande população de itens</b> → valor esperado (ponderação pelas probabilidades); <b>escala contínua equiprovável</b> → ponto médio.</p><p class='fb-fonte'>Resumo 05 · <i>Melhor Estimativa — item 39</i></p>",
33:"<p>Certo — é a conta do exemplo do resumo, com os mesmos números da concessionária de automóveis de luxo com garantia de dois anos:</p><ul><li><b>Provisão para garantia = (20% x 180.000.000) + (50% x 100.000.000)</b></li><li><b>Provisão para garantia = 36.000.000 + 50.000.000</b></li><li><b>Provisão para garantia = 86.000.000</b></li></ul><p>Repare que cada percentual multiplica o custo do <b>seu</b> tipo de defeito — é o método do <b>valor esperado</b> em ação, não uma soma dos dois cenários.</p><p class='fb-fonte'>Resumo 05 · <i>Melhor Estimativa — exemplo da concessionária</i></p>",
34:"<p>Certo pela primeira parte do <b>item 59</b>: <b>“as provisões devem ser reavaliadas em cada data de balanço e ajustadas para refletir a melhor estimativa corrente”</b>.</p><p>A provisão não é um valor que se congela no reconhecimento: ela acompanha a informação nova.</p><p class='fb-fonte'>Resumo 05 · <i>Mudança na Provisão — item 59</i></p>",
35:"<p>Errado no desfecho. A segunda parte do item 59 manda o contrário: <b>“se já não for mais provável que seja necessária uma saída de recursos que incorporam benefícios econômicos futuros para liquidar a obrigação, a provisão deve ser REVERTIDA”</b>.</p><p>É o exemplo do material: provisão de <b>R$ 50.000</b> para processo litigioso; se, à luz de novas informações, deixa de ser provável a saída de recursos, <b>“a provisão registrada anteriormente deve ser revertida”</b> — D Provisão · C Reversão de Provisão.</p><p class='fb-fonte'>Resumo 05 · <i>Mudança na Provisão — item 59 e exemplo</i></p>",
36:"<p>Certo — é o <b>LANÇAMENTO DO RECONHECIMENTO DA PROVISÃO</b> do resumo: <b>D – Despesas Operacionais (↑ Despesa)</b> · <b>C – Provisão (↑ Passivo)</b>.</p><p>Guarde o par pela lógica: nasce uma obrigação no passivo e, do outro lado, uma despesa no resultado.</p><p class='fb-fonte'>Resumo 05 · <i>Mudança na Provisão — lançamentos</i></p>",
37:"<p>Certo — é o <b>LANÇAMENTO DA REVERSÃO DA PROVISÃO</b> do resumo: <b>D – Provisão (↓ Passivo)</b> · <b>C – Reversão de Provisão (↑ Receita)</b>.</p><p>Espelha o reconhecimento: se ao constituir houve despesa, ao reverter há <b>receita</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Mudança na Provisão — lançamentos</i></p>",
38:"<p>Errado, e o resumo marca esta troca com um quadro <b>ATENÇÃO!</b> próprio: <b>“cuidado que em algumas questões a banca põe como opção de resposta para o lançamento do desconto a valor presente tanto a ‘Despesa Operacional’ quanto a ‘Despesa Financeira’. Não caia nessa. Marque sempre Despesa Financeira”</b>.</p><p>O item 60 é a base: no desconto a valor presente, <b>“o valor contábil da provisão aumenta a cada período para refletir a passagem do tempo. Esse aumento deve ser reconhecido como despesa financeira”</b>. No exemplo, provisão de 100.000 registrada por <b>90.000</b> que passa a <b>95.000</b> → <b>D Despesa Financeira R$ 5.000 · C Provisão R$ 5.000</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Mudança na Provisão — item 60 e ATENÇÃO!</i></p>",
39:"<p>Certo pela letra do <b>item 61</b>: <b>“uma provisão deve ser usada somente para os desembolsos para os quais a provisão foi originalmente reconhecida”</b>.</p><p>No exemplo do resumo, a provisão de <b>R$ 20.000</b> para custos de garantia cobre mão de obra, materiais e logística de conserto ou reposição; se a empresa usar parte dela para <b>comprar novos equipamentos para a fábrica</b>, <b>“ela estará violando o item 61”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Uso de Provisão — item 61</i></p>",
40:"<p>Certo — é o <b>LANÇAMENTO DO USO DA PROVISÃO</b> do resumo, com o mesmo valor: <b>D – Provisão para custos de garantia de produtos vendidos R$ 20.000 (↓ Passivo)</b> · <b>C – Caixa/Bancos R$ 20.000 (↓ Ativo)</b>.</p><p>Duas contas patrimoniais: o uso da provisão <b>não</b> gera despesa nova, porque a despesa já foi reconhecida na constituição.</p><p class='fb-fonte'>Resumo 05 · <i>Uso de Provisão — lançamento</i></p>",
41:"<p>Certo pela letra do <b>item 66</b>: <b>“se a entidade tiver um contrato oneroso, a obrigação presente de acordo com o contrato deve ser reconhecida e mensurada como provisão”</b>.</p><p>É o que fecha o círculo com o <b>alcance</b> do CPC 25: contratos a executar ficam de fora, <b>a menos que</b> sejam onerosos — e então entram como provisão.</p><p class='fb-fonte'>Resumo 05 · <i>Contrato Oneroso — item 66</i></p>",
42:"<p>Errado — a assertiva inverteu os dois lados da comparação. O <b>item 68</b>, como transcrito no resumo, define contrato oneroso como aquele <b>“em que os custos inevitáveis de satisfazer as obrigações do contrato EXCEDEM os benefícios econômicos que se espera sejam recebidos ao longo do mesmo contrato”</b>.</p><p>O exemplo do material deixa claro o sentido econômico: preço fixo de <b>R$ 100 mil</b> pela matéria-prima e, depois da assinatura, <b>queda do preço de mercado</b> — a empresa fica obrigada a comprar mais caro do que o mercado.</p><p class='fb-fonte'>Resumo 05 · <i>Contrato Oneroso — item 68</i></p>",
43:"<p>Certo pela letra do <b>item 68</b>: <b>“os custos inevitáveis do contrato refletem o menor custo líquido de sair do contrato, e este é determinado com base a) no custo de cumprir o contrato ou b) no custo de qualquer compensação ou de penalidades provenientes do não cumprimento do contrato, dos dois o menor”</b>.</p><p>A expressão-chave é <b>dos dois o menor</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Contrato Oneroso — item 68</i></p>",
44:"<p>Errado no valor. No exemplo do resumo, os dois caminhos são: <b>cumprir o contrato pelo resto do período (R$ 100.000)</b> ou <b>pagar a penalidade pelo não cumprimento (R$ 20.000)</b> — e o item 68 manda tomar <b>dos dois o menor</b>.</p><p>Conclusão do material: <b>“neste caso, o menor custo seria a opção de pagar uma penalidade ao fornecedor para encerrar o contrato antecipadamente, em vez de continuar cumprindo-o”</b>. Custo inevitável = <b>R$ 20.000</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Contrato Oneroso — exemplo da multa de R$ 20.000</i></p>",
45:"<p>Certo pela letra do <b>item 10</b>: reestruturação é <b>“um programa planejado e controlado pela administração e que altera materialmente: (a) o âmbito de um negócio empreendido por entidade; ou (b) a maneira como o negócio é conduzido”</b>.</p><p>As duas alíneas são alternativas — o <b>ou</b> está no texto. O exemplo do resumo: encerrar uma linha de negócios, ou adquirir nova empresa para diversificar operações.</p><p class='fb-fonte'>Resumo 05 · <i>Provisão para Reestruturação — item 10</i></p>",
46:"<p>Certo. São as alíneas (a) e (c) da lista do <b>item 70</b> no resumo: <b>“venda ou extinção de linha de negócios”</b> e <b>“mudanças na estrutura da administração, por exemplo, eliminação de um nível de gerência”</b>.</p><p>A lista completa tem quatro entradas: soma-se o <b>fechamento ou realocação</b> de locais de negócios de um país ou região e as <b>reorganizações fundamentais</b> com efeito material na natureza e no foco das operações.</p><p class='fb-fonte'>Resumo 05 · <i>Provisão para Reestruturação — item 70</i></p>",
47:"<p>Certo pela letra do <b>item 73</b>: a divulgação do plano detalhado <b>“constitui obrigação não formalizada para reestruturação SOMENTE SE for feita de tal maneira e em detalhes suficientes (ou seja, apresentando as principais características do plano) que origine expectativas válidas de outras partes, tais como clientes, fornecedores e empregados (ou os seus representantes) de que a entidade realizará a reestruturação”</b>.</p><p>O mesmo item lista a <b>evidência</b> de que a implantação começou: desmontagem da fábrica, venda de ativos ou divulgação das principais características do plano.</p><p class='fb-fonte'>Resumo 05 · <i>Provisão para Reestruturação — item 73</i></p>",
48:"<p>Certo — é a <b>QUESTÃO-EXEMPLO</b> do resumo, com estas mesmas datas, e o gabarito dele é a letra <b>B</b>.</p><p>A resolução do material: <b>“a questão nos informa que, em 31/03/2023, um plano para a reestruturação foi concluído e a ação foi comunicada aos funcionários, clientes e fornecedores da entidade. Dessa forma, podemos concluir que nessa data (31/03) foi constituído uma obrigação não formalizada”</b> — um passivo a reconhecer no Balanço como <b>Provisão para custos de reestruturação</b>.</p><p>A decisão da diretoria (31/01) é interna e não cria expectativa em terceiros; o encerramento (31/05) e a venda (31/07) vêm depois do nascimento da obrigação.</p><p class='fb-fonte'>Resumo 05 · <i>Provisão para Reestruturação — QUESTÃO-EXEMPLO</i></p>",
49:"<p>Errado. O <b>item 80</b> exige as duas condições <b>simultaneamente</b>: a provisão para reestruturação inclui somente os desembolsos diretos que sejam <b>“(a) necessariamente ocasionados pela reestruturação; e (b) NÃO associados às atividades em andamento da entidade”</b>.</p><p>No exemplo do resumo, entram <b>indenizações e rescisões contratuais</b> dos demitidos; ficam fora as despesas indiretas, <b>“como o salário dos funcionários enquanto estavam trabalhando”</b>, porque se ligam às atividades em andamento.</p><p class='fb-fonte'>Resumo 05 · <i>Provisão para Reestruturação — item 80</i></p>",
50:"<p>Errado — os dois estão na lista de exclusões do <b>item 81</b>, que diz que a provisão para reestruturação <b>não</b> inclui custos como <b>“(a) novo treinamento ou remanejamento da equipe permanente; (b) marketing; ou (c) investimento em novos sistemas e redes de distribuição”</b>.</p><p>A razão dada pelo resumo: <b>“esses desembolsos relacionam-se com a conduta FUTURA da empresa e não são passivos de reestruturação na data do balanço”</b> — devem ser reconhecidos como se surgissem independentemente da reestruturação.</p><p class='fb-fonte'>Resumo 05 · <i>Provisão para Reestruturação — item 81</i></p>",
51:"<p>Certo — é a alínea (a) do <b>item 85</b>: para cada classe de provisão a entidade deve divulgar <b>“uma breve descrição da natureza da obrigação e o cronograma esperado de quaisquer saídas de benefícios econômicos resultantes”</b>.</p><p>O exemplo 01 do resumo mostra isso na prática: provisão de <b>R$ 80.000</b> para multa tributária por infração fiscal, com a nota informando que <b>“espera-se que a totalidade desse desembolso seja incorrida dentro de dois anos após a data do balanço”</b>. As alíneas (b) e (c) pedem ainda a indicação das <b>incertezas</b> e o valor de <b>qualquer reembolso esperado</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Divulgação — item 85 e exemplo 01</i></p>",
52:"<p>Certo pela letra do <b>item 87</b>: <b>“pode ser apropriado tratar como uma classe única de provisão os valores relacionados a garantias de produtos diferentes”</b>.</p><p>O comentário do resumo explica o critério: a <b>natureza das obrigações</b> (garantias) é <b>similar</b>, então a empresa teria uma única <b>Provisão para as garantias de produtos</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Divulgação — item 87</i></p>",
53:"<p>Errado. O <b>item 87</b> é expresso em sentido contrário: <b>“não seria apropriado tratar como uma classe única os valores relacionados a garantias normais e valores relativos a processos judiciais”</b>.</p><p>A natureza desses itens é <b>diferente</b>, e o resumo conclui que a empresa teria de separar em classes distintas, divulgadas separadamente: <b>Provisão para as garantias de produtos</b>; e <b>Provisão para os processos judiciais</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Divulgação — item 87</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"05", nome:"CPC 25 — Provisões, Passivos Contingentes e Ativos Contingentes", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
