/* Direito Administrativo — Módulo 05: Poderes e deveres administrativos (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dadm05 = (function(){
"use strict";

var CARDS = [
  ["Como Carvalho Filho conceitua os poderes administrativos?","O <b>conjunto de prerrogativas (privilégios) de direito público</b> que a ordem jurídica confere aos <b>agentes administrativos</b> para o fim de permitir que o <b>Estado alcance seus fins</b>."],
  ["Poderes instrumentais e poderes estruturais são a mesma coisa?","<b>Não.</b> Os poderes administrativos são <b>instrumentais</b>; os <b>estruturais</b> são o <b>Legislativo, o Executivo e o Judiciário</b>. É o quadro ATENÇÃO do resumo."],
  ["Quais são os poderes administrativos na classificação básica do resumo?","<b>Vinculado</b> · <b>Discricionário</b> · <b>Hierárquico</b> · <b>Disciplinar</b> · <b>Regulamentar</b> · <b>de Polícia</b>."],
  ["O que é o poder vinculado, e qual o exemplo do resumo?","É a <b>prática de atos vinculados</b> — <b>mais um dever que uma prerrogativa</b>. Exemplo: a autarquia que <b>deflagra de ofício</b> processo administrativo contra servidor comissionado porque <b>a legislação determina</b> a abertura ao se verificar irregularidade funcional."],
  ["O que é o poder discricionário?","A <b>prerrogativa para praticar atos discricionários</b>. Admite <b>juízo de conveniência e oportunidade</b> (o <b>mérito administrativo</b>) e abrange também a <b>revogação de atos inoportunos e inconvenientes</b>."],
  ["Quais os limites do poder discricionário?","A margem de escolha é <b>restrita aos limites da lei</b>, e o ato deve observar os princípios da <b>razoabilidade</b> e da <b>proporcionalidade</b>."],
  ["Sobre o que incide o controle judicial do ato discricionário?","<b>Apenas sobre os aspectos vinculados</b> do ato: <b>competência</b>, <b>finalidade</b> e <b>forma</b>."],
  ["Quando há espaço para a discricionariedade administrativa?","Quando <b>a lei prevê determinada competência, mas não estabelece a conduta a ser adotada</b> — é a liberdade do administrador de decidir <b>desde que nos limites da lei</b>."],
  ["O que é o poder hierárquico?","A <b>relação de coordenação e subordinação</b> que se estabelece nas <b>organizações administrativas</b>."],
  ["O que o poder hierárquico permite ao superior?","<b>Dar ordens</b>, <b>fiscalizar</b>, <b>controlar</b>, <b>aplicar sanções</b>, <b>delegar</b> e <b>avocar</b> competências. Mas só abrange <b>sanções disciplinares a servidores</b>, e <b>não</b> sanções a particulares."],
  ["Delegação e avocação: natureza e alcance","São <b>atos discricionários</b>. A <b>delegação PODE</b> ocorrer <b>fora da estrutura hierárquica</b>; a <b>avocação NÃO pode</b>."],
  ["Onde NÃO há hierarquia?","Entre <b>diferentes pessoas jurídicas</b> · entre <b>Administração Direta e Indireta</b> · no <b>exercício de funções típicas</b> (ex.: tribunais do Judiciário) · entre os <b>Poderes da República</b> · entre <b>Administração e administrados</b>."],
  ["Qual a função do poder hierárquico, e que poderes dele decorrem?","<b>Distribuir e escalonar as funções</b> dos órgãos públicos, estabelecendo a <b>subordinação</b> dos agentes. Dele <b>decorrem</b> os poderes <b>disciplinar</b> e <b>regulamentar</b>."],
  ["Hierárquico × disciplinar, na lição de Hely Lopes Meirelles","São <b>correlatos, mas não se confundem</b>. <b>Hierárquico:</b> a Administração <b>distribui e escalona</b> suas funções executivas. <b>Disciplinar:</b> ela <b>controla o desempenho</b> dessas funções e a <b>conduta interna</b> de seus servidores, responsabilizando-os pelas faltas."],
  ["O que é o poder disciplinar?","A <b>prerrogativa para aplicar sanções</b> àqueles que, <b>submetidos à disciplina interna</b> da Administração, cometem infrações — <b>servidores</b> e <b>particulares com vínculo contratual</b>."],
  ["O poder disciplinar se confunde com o poder punitivo do Estado?","<b>Não.</b> O poder punitivo é exercido pelo <b>Poder Judiciário</b> para punir infrações de <b>natureza civil e penal</b> (ex.: <b>atos de improbidade</b>)."],
  ["Por que se diz que o poder disciplinar é discricionário?","Porque <b>admite gradação e escolha da penalidade</b>: diferente do direito penal, o administrador <b>não está limitado à prévia e rígida tipicidade</b> da conduta ilícita e de sua sanção."],
  ["Impor sanção a servidor sem decisão judicial decorre de qual poder?","<b>Imediatamente do poder DISCIPLINAR</b> e <b>mediatamente do poder HIERÁRQUICO</b> — a penalidade advém de <b>autoridade superior</b> sobre <b>agente subordinado</b>."],
  ["O que é o poder regulamentar?","O poder <b>inerente ao Chefe do Executivo</b> para <b>editar decretos</b>."],
  ["Três características do decreto de execução","A finalidade é <b>dar fiel execução às leis</b> · <b>NÃO pode ser delegado</b> · são <b>atos de caráter geral e abstrato</b>."],
  ["Os atos normativos do poder regulamentar podem inovar o ordenamento?","<b>Não.</b> São <b>secundários</b> — <b>não podem inovar o ordenamento jurídico</b>."],
  ["Quem pode sustar ato normativo do Executivo que exorbite do poder regulamentar?","O <b>Congresso Nacional</b>."],
  ["Cabe ADI contra decreto de execução que conflite com a lei regulamentada?","<b>Não.</b> A <b>ADI</b> é apenas para <b>atos normativos autônomos</b> que <b>ofendem diretamente a Constituição</b>."],
  ["Decreto de execução × decreto autônomo: fundamento de validade e delegação","<b>Execução (art. 84, IV):</b> ato <b>secundário</b>, fundamento de validade é a <b>lei</b>; <b>não pode ser delegado</b>. <b>Autônomo (art. 84, VI):</b> ato <b>primário</b>, fundamento de validade é a <b>Constituição</b>; <b>pode ser delegado em alguns casos</b>."],
  ["Quais as duas finalidades do decreto autônomo?","<b>1)</b> Organizar a Administração Pública (<b>quando não implicar aumento de despesa nem criação ou extinção de órgãos</b>); <b>2)</b> <b>extinguir funções ou cargos públicos, quando vagos</b>."],
  ["Como se criam e extinguem Ministérios e órgãos da administração pública?","<b>Por LEI</b>, e não por decreto — arts. <b>48, XI</b>, <b>61, §1º, II, e</b> e <b>88</b> da CF. O <b>decreto autônomo NÃO pode criar nem extinguir</b> órgãos ou ministérios."],
  ["Poder regulamentar × poder normativo","<b>Regulamentar:</b> é <b>espécie</b> do normativo, <b>privativo dos Chefes do Executivo</b>, para decretos e regulamentos de fiel execução das leis (decretos executórios); tem <b>alcance EXTERNO</b>. <b>Normativo:</b> mais <b>amplo</b>, cabe a <b>qualquer autoridade</b>, em regra com <b>alcance INTERNO</b> (instruções normativas, regimentos dos tribunais, resoluções, deliberações)."],
  ["Regulamento delegado (autorizado) × regulamento de execução","<b>Delegado:</b> o <b>Legislativo, na própria lei</b>, autoriza o Executivo a disciplinar situações nela <b>não reguladas</b>; a lei traça só <b>linhas gerais</b>, e a edição costuma ficar com <b>órgãos de perfil técnico</b>. <b>De execução:</b> competência <b>privativa e indelegável</b> do Chefe do Executivo, e <b>não se restringe a matéria técnica</b>."],
  ["O que é o poder de polícia?","A prerrogativa de <b>condicionar e restringir o exercício de atividades privadas</b> — ferramenta para <b>frear ou reprimir abuso dos direitos individuais</b> (multa de trânsito, atividade comercial interditada, obra paralisada)."],
  ["Poder de polícia preventivo: licença × autorização","É a <b>anuência prévia</b> para a prática de atividades privadas, formalizada por <b>alvarás, carteiras, declarações e certificados</b>. <b>Licença:</b> anuência para <b>usufruir um direito</b> — ato <b>vinculado e definitivo</b>. <b>Autorização:</b> anuência para exercer <b>atividade de interesse do particular</b> — ato <b>discricionário e precário</b>."],
  ["Poder de polícia repressivo e a cobrança pelo seu exercício","<b>Repressivo:</b> é a <b>aplicação de sanções administrativas a particulares</b>. Pelo <b>exercício efetivo</b> do poder de polícia podem ser cobradas <b>TAXAS</b> (espécie de tributo), e <b>não preços públicos ou tarifas</b> — dispensada a fiscalização “porta a porta”, desde que haja <b>competência e estrutura</b>."],
  ["Quais as fases do ciclo de polícia, e quais sempre existirão?","<b>Legislação (ordem) · consentimento · fiscalização · sanção.</b> Sempre existirão apenas a <b>legislação</b> e a <b>fiscalização</b>: o <b>consentimento depende de lei</b> e a <b>sanção depende de infração</b> no caso concreto."],
  ["Que fases do ciclo de polícia podem ser delegadas a entidade de direito privado da Adm. Indireta?","<b>Em regra, apenas consentimento e fiscalização.</b> Mas o <b>STF, no RE 633.782</b>, admitiu delegar <b>também a sanção</b>, desde que obedecidos alguns requisitos."],
  ["O poder de polícia pode ser delegado a entidades privadas não integrantes da Administração?","<b>Em regra, não.</b>"],
  ["Quais os atributos do poder de polícia, e as exceções?","<b>Discricionariedade</b>, <b>autoexecutoriedade</b> e <b>coercibilidade</b>. Exceções: alguns atos podem ser <b>vinculados</b> (ex.: <b>licenças</b>) ou <b>não autoexecutórios e coercitivos</b> (ex.: atos preventivos e a <b>cobrança de multa não paga</b>)."],
  ["Polícia administrativa × polícia judiciária","<b>Administrativa:</b> caráter <b>preventivo</b>, exercida por <b>diversos órgãos administrativos</b>, incide sobre <b>bens, atividades e direitos</b>. <b>Judiciária:</b> caráter <b>repressivo</b>, exercida por <b>corporações especializadas</b> (Polícia Civil e Polícia Federal)."],
  ["Exigibilidade × executoriedade, e o caso da multa de trânsito","A <b>autoexecutoriedade</b> desdobra-se em <b>exigibilidade</b> (coerção <b>indireta</b> — ex.: aplicação de multas) e <b>executoriedade</b> (coerção <b>direta</b> — ex.: demolição de obra irregular). As multas de trânsito têm <b>exigibilidade, mas NÃO executoriedade</b>: para cobrar, a Administração <b>vai a juízo</b>."],
  ["Interdição de estabelecimento irregular e Súmula 510 do STJ","A <b>interdição</b> (ex.: açougue vendendo carne estragada) é ato <b>autoexecutório</b>: <b>independe de autorização judicial</b>, e o controle judicial é <b>a posteriori</b>; a <b>interdição cautelar</b> admite <b>contraditório diferido</b>. <b>Súmula 510/STJ:</b> a liberação de veículo retido <b>apenas por transporte irregular de passageiros NÃO está condicionada</b> ao pagamento de multas e despesas."],
  ["Abuso de poder: gênero, formas e modalidades","É <b>gênero</b>, e ocorre na forma <b>comissiva</b> ou <b>omissiva</b>. <b>Excesso de poder:</b> o agente é <b>incompetente</b>, ou é competente mas age de forma <b>desproporcional</b> — vício na <b>COMPETÊNCIA</b>, o ato <b>pode ser convalidado</b>. <b>Desvio de poder (de finalidade):</b> o agente é <b>competente</b>, mas visa a <b>interesse diverso do previsto na norma</b> — vício na <b>FINALIDADE</b>, o ato <b>deve ser anulado</b>."],
  ["Quais são os deveres da Administração Pública?","<b>Dever de agir</b> (não pode deixar de exercer suas prerrogativas) · <b>dever de eficiência</b> (celeridade, perfeição técnica e bom rendimento funcional) · <b>dever de probidade</b> (honestidade e boa-fé, visando ao interesse público) · <b>dever de prestar contas</b> (decorre da <b>indisponibilidade do interesse público</b>, é inerente a quem administra a coisa pública e alcança <b>inclusive particulares que aplicam recursos públicos</b>)."]
];

var QS = [
  ["Os poderes administrativos são o conjunto de prerrogativas de direito público que a ordem jurídica confere aos agentes administrativos para o fim de permitir que o Estado alcance seus fins.","C","CEBRASPE","Conceito de Carvalho Filho."],
  ["Os poderes administrativos se confundem com os poderes estruturais do Estado, isto é, o Legislativo, o Executivo e o Judiciário.","E","FCC","Os administrativos são <b>instrumentais</b>; os estruturais são outros."],
  ["O poder vinculado é a prática de atos vinculados e configura mais um dever que uma prerrogativa.","C","FGV","Definição do resumo."],
  ["A abertura de ofício de processo administrativo contra servidor comissionado, por determinação legal, ao se verificar irregularidade funcional na repartição, configura atuação oriunda do poder discricionário.","E","VUNESP","É o exemplo do poder <b>vinculado</b>."],
  ["O poder discricionário admite juízo de conveniência e oportunidade, o chamado mérito administrativo.","C","AOCP","Item 02 do resumo."],
  ["No poder discricionário, a margem de escolha do administrador é ampla e não se sujeita aos limites da lei.","E","IBFC","A margem é <b>restrita aos limites da lei</b>."],
  ["Por envolver juízo de conveniência e oportunidade, o exercício do poder discricionário está dispensado da observância dos princípios da razoabilidade e da proporcionalidade.","E","FUNDATEC","O item 04 do resumo exige expressamente os dois princípios."],
  ["O controle judicial do ato discricionário incide sobre o mérito administrativo, alcançando a conveniência e a oportunidade da escolha.","E","CEBRASPE","Incide <b>apenas sobre os aspectos vinculados</b>: competência, finalidade e forma."],
  ["Com base no poder discricionário, um agente público pode revogar um ato válido.","C","CEBRASPE","O poder discricionário abrange a revogação de atos inoportunos e inconvenientes."],
  ["Há espaço para a discricionariedade administrativa quando a lei prevê determinada competência, mas não estabelece a conduta a ser adotada.","C","FCC","Questão-definição do resumo."],
  ["O poder hierárquico é a relação de coordenação e subordinação que se estabelece nas organizações administrativas.","C","FGV","Item 01 do resumo."],
  ["O poder hierárquico permite ao superior dar ordens, fiscalizar, controlar, aplicar sanções, delegar e avocar competências.","C","VUNESP","Item 02 do resumo."],
  ["O poder hierárquico abrange a aplicação de sanções tanto a servidores quanto a particulares sem vínculo com a Administração.","E","AOCP","Só abrange <b>sanções disciplinares a servidores</b>."],
  ["A delegação e a avocação de competências são atos vinculados.","E","IBFC","São atos <b>discricionários</b>."],
  ["A avocação pode ocorrer fora da estrutura hierárquica; já a delegação, não.","E","FUNDATEC","Está invertido: a <b>delegação</b> pode, a <b>avocação</b> não."],
  ["Não há hierarquia entre diferentes pessoas jurídicas nem entre a Administração Direta e a Indireta.","C","CEBRASPE","Duas das cinco hipóteses do resumo."],
  ["Há relação de hierarquia entre a Administração e os administrados.","E","FCC","É justamente uma das hipóteses em que <b>não</b> há hierarquia."],
  ["Decorrem do poder hierárquico os poderes disciplinar e regulamentar.","C","FGV","Observação 02 do resumo."],
  ["O poder disciplinar é a prerrogativa para aplicar sanções àqueles que, submetidos à disciplina interna da Administração, cometem infrações, alcançando servidores e particulares com vínculo contratual.","C","VUNESP","Item 01 do resumo."],
  ["O poder disciplinar se confunde com o poder punitivo do Estado exercido pelo Poder Judiciário para punir infrações de natureza civil e penal, como os atos de improbidade.","E","AOCP","O resumo diz expressamente que <b>não se confundem</b>."],
  ["Uma característica do poder disciplinar é seu discricionarismo, no sentido de que não está vinculado à prévia definição da lei sobre a infração funcional e a respectiva sanção.","C","VUNESP","Não há a tipicidade rígida do direito penal."],
  ["A prerrogativa da administração de impor sanções a seus servidores, independentemente de decisão judicial, decorre imediatamente do poder hierárquico e mediatamente do poder disciplinar.","E","CEBRASPE","Está invertido: <b>imediatamente disciplinar</b>, <b>mediatamente hierárquico</b>."],
  ["No uso do poder hierárquico a Administração distribui e escalona suas funções executivas; no uso do poder disciplinar ela controla o desempenho dessas funções e a conduta interna de seus servidores.","C","IBFC","Lição de Hely Lopes Meirelles transcrita no resumo."],
  ["O poder regulamentar é o poder inerente ao Chefe do Executivo para editar decretos.","C","FGV","Item 01 do resumo."],
  ["O decreto de execução tem por finalidade dar fiel execução às leis e pode ser delegado.","E","FUNDATEC","O decreto de execução <b>não pode ser delegado</b>."],
  ["Os decretos de execução são atos de caráter individual e concreto.","E","CEBRASPE","O item 02 do resumo diz <b>geral e abstrato</b>."],
  ["Os atos normativos oriundos do poder regulamentar são primários e podem inovar o ordenamento jurídico.","E","FCC","São <b>secundários</b> e <b>não podem inovar</b>."],
  ["O Congresso Nacional pode sustar atos normativos do Executivo que exorbitem do poder regulamentar.","C","FGV","Item 04 do resumo."],
  ["Em caso de conflito entre o decreto de execução e a lei que ele regulamenta, cabe ação direta de inconstitucionalidade contra o decreto.","E","VUNESP","A ADI é só para <b>atos normativos autônomos</b> que ofendem diretamente a Constituição."],
  ["O decreto de execução é ato secundário, pois seu fundamento de validade é a lei; o decreto autônomo é ato primário, pois seu fundamento de validade é a Constituição Federal.","C","AOCP","Primeira linha do quadro comparativo."],
  ["O decreto autônomo presta-se a organizar a administração federal, quando não implicar aumento de despesa nem criação ou extinção de órgãos públicos, e a extinguir funções ou cargos públicos, quando vagos.","C","CF, art. 84, VI","Alíneas a e b."],
  ["A criação e a extinção de Ministérios e órgãos da administração pública podem ser feitas por decreto autônomo.","E","CF, art. 88","Depende de <b>lei</b>; o decreto autônomo não cria nem extingue órgãos."],
  ["O poder regulamentar é espécie do poder normativo, privativo dos Chefes do Executivo e de alcance externo, enquanto o poder normativo é mais amplo, pode ser adotado por qualquer autoridade e, em regra, tem alcance interno.","C","IBFC","Comparação do resumo."],
  ["Os regulamentos de execução são de competência privativa e indelegável do Chefe do Poder Executivo e não se restringem a assuntos de ordem técnica.","C","FUNDATEC","Contraste com o regulamento delegado (autorizado)."],
  ["O poder de polícia é a prerrogativa de condicionar e restringir o exercício de atividades privadas.","C","CEBRASPE","Item 01 do resumo."],
  ["A licença é ato administrativo discricionário e precário, e a autorização, ato administrativo vinculado e definitivo.","E","FCC","Está invertido: licença é <b>vinculada e definitiva</b>; autorização, <b>discricionária e precária</b>."],
  ["O poder de polícia preventivo é a anuência prévia para a prática de atividades privadas, formalizada por alvarás, carteiras, declarações e certificados.","C","FGV","Item 03 do resumo."],
  ["Em razão do exercício efetivo do poder de polícia podem ser cobradas taxas, e não preços públicos ou tarifas.","C","VUNESP","A taxa é espécie de tributo."],
  ["O ciclo de polícia compreende as fases de legislação, consentimento, fiscalização e sanção.","C","AOCP","Item 06 do resumo."],
  ["O consentimento e a sanção são as únicas fases que sempre existirão num ciclo de polícia.","E","IBFC","As que sempre existirão são a <b>legislação</b> e a <b>fiscalização</b>."],
  ["A delegação do poder de polícia a entidades da Administração Indireta de direito privado alcança, em regra, apenas as fases de consentimento e fiscalização.","C","FUNDATEC","Item 08 do resumo."],
  ["É constitucional a delegação do poder de polícia, por meio de lei, a pessoa jurídica de direito privado integrante da Administração Pública indireta de capital social majoritariamente público que preste exclusivamente serviço público de atuação própria do Estado e em regime não concorrencial.","C","STF, RE 633.782/MG","Jurisprudência transcrita no resumo."],
  ["São atributos do poder de polícia a discricionariedade, a autoexecutoriedade e a coercibilidade, sem exceção: nenhum ato de polícia pode ser vinculado.","E","CEBRASPE","Os três atributos estão certos, mas o resumo ressalva que alguns atos são <b>vinculados</b> (ex.: licenças)."],
  ["A polícia administrativa possui caráter repressivo e é exercida por corporações especializadas, como a Polícia Civil e a Polícia Federal.","E","FCC","Essa é a polícia <b>judiciária</b>; a administrativa é <b>preventiva</b>."],
  ["As multas de trânsito, como expressão do poder de polícia, são dotadas de exigibilidade, mas não de executoriedade.","C","FGV","Para cobrar, a Administração precisa ir a juízo."],
  ["A liberação de veículo retido apenas por transporte irregular de passageiros está condicionada ao pagamento de multas e despesas.","E","STJ, Súmula 510","A súmula diz exatamente o contrário: <b>não está condicionada</b>."],
  ["O abuso de poder pode ocorrer tanto na forma comissiva quanto na forma omissiva.","C","CEBRASPE","Primeira linha da seção de abuso de poder."],
  ["No excesso de poder o vício está na finalidade do ato; no desvio de poder, o vício está na competência.","E","FCC","Está invertido: excesso vicia a <b>competência</b>; desvio, a <b>finalidade</b>."],
  ["O excesso de poder, por ser vício na competência, admite convalidação do ato; o desvio de poder, por ser vício na finalidade, impõe a anulação.","C","AOCP","Quadro ATENÇÃO do resumo."],
  ["O dever de prestar contas decorre do princípio da indisponibilidade do interesse público, mas não alcança os particulares que aplicam recursos públicos.","E","VUNESP","O resumo diz que alcança, <b>inclusive</b>, esses particulares."]
];

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Conceito, vinculado, discricionário, hierárquico e disciplinar",
      '<div class="box"><span class="bl">O que são os poderes administrativos</span>'+
      '<p>Carvalho Filho: o <b>conjunto de prerrogativas (privilégios) de direito público</b> que a ordem jurídica confere aos <b>agentes administrativos</b> para permitir que o <b>Estado alcance seus fins</b>.</p>'+
      '<p class="chips"><span class="chip">Vinculado</span><span class="chip">Discricionário</span><span class="chip">Hierárquico</span><span class="chip">Disciplinar</span><span class="chip">Regulamentar</span><span class="chip">de Polícia</span></p>'+
      '<p><b>ATENÇÃO!</b> Poderes <b>instrumentais</b> ≠ poderes <b>estruturais</b> (Legislativo, Executivo e Judiciário).</p></div>'+
      '<div class="box"><span class="bl">Vinculado × discricionário</span>'+
      '<p><b>Vinculado:</b> prática de atos vinculados — <b>mais um dever que uma prerrogativa</b>. Exemplo do resumo: a autarquia que <b>deflagra de ofício</b> processo contra servidor comissionado porque <b>a legislação determina</b> a abertura ao verificar irregularidade funcional.</p>'+
      '<p><b>Discricionário:</b> admite <b>conveniência e oportunidade</b> (<b>mérito administrativo</b>); a margem de escolha é <b>restrita aos limites da lei</b>; exige <b>razoabilidade</b> e <b>proporcionalidade</b>; abrange a <b>revogação</b> de atos inoportunos e inconvenientes.</p>'+
      '<p>Há discricionariedade quando <b>a lei prevê a competência, mas não a conduta</b> a ser adotada.</p></div>'+
      '<div class="box trap"><span class="bl">O limite do juiz</span>'+
      '<p>O <b>controle judicial</b> do ato discricionário incide <b>apenas sobre os aspectos vinculados</b>: <b>competência</b>, <b>finalidade</b> e <b>forma</b>. <b>Mérito não se controla.</b></p></div>'+
      '<div class="box"><span class="bl">Poder hierárquico</span>'+
      '<p><b>Relação de coordenação e subordinação</b> nas organizações administrativas. Permite <b>dar ordens, fiscalizar, controlar, aplicar sanções, delegar e avocar</b>. Só alcança <b>sanções disciplinares a servidores</b> — <b>não</b> a particulares.</p>'+
      '<p><b>Delegação e avocação são discricionárias.</b> A <b>delegação PODE</b> ocorrer fora da estrutura hierárquica; a <b>avocação NÃO</b>.</p>'+
      '<p><b>Não há hierarquia:</b> entre <b>pessoas jurídicas</b> distintas · entre <b>Direta e Indireta</b> · no <b>exercício de funções típicas</b> (tribunais do Judiciário) · entre os <b>Poderes da República</b> · entre <b>Administração e administrados</b>.</p></div>'+
      '<div class="box"><span class="bl">Poder disciplinar</span>'+
      '<p>Prerrogativa de <b>aplicar sanções</b> a quem, <b>submetido à disciplina interna</b>, comete infração — <b>servidores</b> e <b>particulares com vínculo contratual</b>. <b>Não se confunde</b> com o poder punitivo exercido pelo <b>Judiciário</b> (infrações civis e penais, ex.: <b>improbidade</b>).</p>'+
      '<p><b>Admite discricionariedade</b> na <b>gradação e escolha da penalidade</b>: não há a <b>tipicidade rígida</b> do direito penal.</p></div>'+
      '<div class="box tip"><span class="bl">Hely Lopes Meirelles — a fronteira que a banca ama</span>'+
      '<p><b>Poder Hierárquico ⇒ DISTRIBUI e ESCALONA</b> as funções.</p>'+
      '<p><b>Poder Disciplinar ⇒ CONTROLA o desempenho</b> das funções e a <b>conduta</b> de seus servidores.</p>'+
      '<p class="mn"><em>Impor sanção a servidor sem decisão judicial: <b>imediatamente</b> disciplinar, <b>mediatamente</b> hierárquico.</em></p></div>')
  ],
  V2:[
    sl("Poder regulamentar: decretos, ADI e os dispositivos da CF",
      '<div class="box"><span class="bl">O poder regulamentar</span>'+
      '<p>É o poder <b>inerente ao Chefe do Executivo</b> para <b>editar decretos</b>. Os atos normativos dele oriundos são <b>SECUNDÁRIOS</b>: <b>não podem inovar o ordenamento jurídico</b>.</p>'+
      '<p>O <b>Congresso Nacional</b> pode <b>sustar</b> atos normativos do Executivo que <b>exorbitem</b> do poder regulamentar.</p>'+
      '<p><b>Controle judicial:</b> em conflito com a lei regulamentada, <b>não cabe ADI</b> contra decreto de execução — a <b>ADI</b> é apenas para <b>atos normativos autônomos</b> que ofendem <b>diretamente a Constituição</b>.</p></div>'+
      '<div class="box trap"><span class="bl">ATENÇÃO! Decreto de execução ≠ decreto autônomo</span>'+
      '<ul><li><b>Execução (art. 84, IV):</b> ato <b>secundário</b> — fundamento de validade é a <b>lei</b>; finalidade de <b>dar fiel execução às leis</b>; <b>NÃO pode ser delegado</b>; <b>geral e abstrato</b>.</li>'+
      '<li><b>Autônomo (art. 84, VI):</b> ato <b>primário</b> — fundamento de validade é a <b>Constituição</b>; duas finalidades: <b>organizar a Adm. Pública</b> ou <b>extinguir cargos públicos vagos</b>; <b>PODE ser delegado</b> em alguns casos.</li></ul></div>'+
      '<div class="box"><span class="bl">Regulamentar × normativo</span>'+
      '<p><b>Regulamentar:</b> <b>espécie</b> do poder normativo, <b>privativo dos Chefes do Executivo</b>, para decretos e regulamentos de fiel execução (decretos executórios). <b>Alcance EXTERNO.</b></p>'+
      '<p><b>Normativo:</b> mais <b>amplo</b>, cabe a <b>qualquer autoridade</b>, também complementa e facilita a execução da lei, mas em regra com <b>alcance INTERNO</b> aos órgãos que o expedem.</p>'+
      '<p><b>Exemplos:</b> decretos regulamentares (regulamentar) · instruções normativas · regimentos dos tribunais · resoluções · deliberações.</p></div>'+
      '<div class="box"><span class="bl">Regulamento delegado × de execução</span>'+
      '<p><b>Delegado (ou autorizado):</b> o <b>Legislativo, na própria lei</b>, autoriza o Executivo a disciplinar situações nela <b>não reguladas</b>. A lei traça só <b>linhas gerais, parâmetros e diretrizes</b>, e normalmente incumbe <b>órgãos de perfil técnico</b> de matérias de <b>índole técnica</b> de sua área.</p>'+
      '<p><b>De execução:</b> competência <b>privativa</b> do Chefe do Executivo, <b>indelegável</b>, e <b>não se restringe a assuntos técnicos</b> — pode tratar de <b>qualquer assunto administrativo</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Ministérios e órgãos: por LEI, não por decreto</span>'+
      '<p><b>Art. 48, XI:</b> cabe ao <b>Congresso Nacional</b>, com sanção do Presidente, dispor sobre <b>criação e extinção de Ministérios e órgãos</b> da administração pública.</p>'+
      '<p><b>Art. 61, §1º, II, e:</b> a <b>iniciativa</b> dessa lei é <b>privativa do Presidente</b>. <b>Art. 88:</b> <b>a lei disporá</b> sobre a criação e extinção de Ministérios e órgãos.</p>'+
      '<p><b>ATENÇÃO:</b> o <b>decreto autônomo NÃO pode criar nem extinguir</b> órgãos ou ministérios — e, no art. 84, VI, a, só dispõe sobre organização e funcionamento <b>quando não implicar aumento de despesa nem criação ou extinção de órgãos</b>.</p></div>')
  ],
  V3:[
    sl("Poder de polícia, abuso de poder e deveres da Administração",
      '<div class="box"><span class="bl">Poder de polícia</span>'+
      '<p>Prerrogativa de <b>condicionar e restringir o exercício de atividades privadas</b> — ferramenta para <b>frear ou reprimir abuso dos direitos individuais</b>: <b>multa de trânsito</b>, <b>atividade comercial interditada</b>, <b>obra paralisada</b>, para que o bem-estar, a saúde, os direitos e bens coletivos não sejam prejudicados.</p>'+
      '<p><b>Preventivo:</b> <b>anuência prévia</b> para atividades privadas, formalizada por <b>alvarás, carteiras, declarações, certificados</b>. <b>Repressivo:</b> <b>sanções administrativas</b> a particulares.</p>'+
      '<p>Pelo exercício <b>efetivo</b> cabem <b>TAXAS</b> (espécie de tributo), e <b>não preços públicos ou tarifas</b>. <b>Dispensa</b> fiscalização “porta a porta”, desde que haja <b>competência e estrutura</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Licença × autorização</span>'+
      '<p><b>Licença:</b> anuência para <b>usufruir um direito</b> — ato <b>VINCULADO e DEFINITIVO</b>.</p>'+
      '<p><b>Autorização:</b> anuência para exercer <b>atividade de interesse do particular</b> — ato <b>DISCRICIONÁRIO e PRECÁRIO</b>.</p></div>'+
      '<div class="box"><span class="bl">Ciclo de polícia e delegação</span>'+
      '<p class="chips"><span class="chip">Legislação (ordem)</span><span class="chip">Consentimento</span><span class="chip">Fiscalização</span><span class="chip">Sanção</span></p>'+
      '<p><b>Sempre existirão</b> apenas <b>legislação</b> e <b>fiscalização</b>: o <b>consentimento depende de lei</b> e a <b>sanção depende de infração</b> no caso concreto.</p>'+
      '<p><b>Delegação a entidade de direito privado da Adm. Indireta:</b> em regra só <b>consentimento e fiscalização</b>. <b>STF, RE 633.782/MG:</b> é constitucional delegar, <b>por meio de lei</b>, a pessoa jurídica de direito privado da Administração indireta de <b>capital social majoritariamente público</b> que preste <b>exclusivamente serviço público de atuação própria do Estado</b> e em <b>regime não concorrencial</b> — aí <b>também a sanção</b> pode ser delegada.</p>'+
      '<p>A <b>entidades privadas não integrantes</b> da Administração, em regra, <b>não pode</b> ser delegado.</p></div>'+
      '<div class="box tip"><span class="bl">Atributos e os dois desdobramentos</span>'+
      '<p><b>Atributos:</b> <b>discricionariedade</b>, <b>autoexecutoriedade</b> e <b>coercibilidade</b>. Exceções: alguns atos são <b>vinculados</b> (licenças) ou <b>não autoexecutórios</b> (atos preventivos, <b>cobrança de multa não paga</b>).</p>'+
      '<p><b>Exigibilidade:</b> coerção <b>indireta</b> (aplicação de multas). <b>Executoriedade:</b> coerção <b>direta</b> (demolição de obra irregular).</p>'+
      '<p><b>Multa de trânsito:</b> tem <b>exigibilidade</b>, <b>não</b> tem <b>executoriedade</b> — a Administração <b>vai a juízo</b> para cobrar. <b>Interdição</b> de estabelecimento irregular: é <b>autoexecutória</b>, controle judicial <b>a posteriori</b>, e a cautelar admite <b>contraditório diferido</b>.</p>'+
      '<p><b>Súmula 510/STJ:</b> a liberação de veículo retido <b>apenas por transporte irregular de passageiros NÃO está condicionada</b> ao pagamento de multas e despesas.</p></div>'+
      '<div class="box trap"><span class="bl">Abuso de poder — gênero e duas modalidades</span>'+
      '<p>Ocorre na forma <b>comissiva</b> ou <b>omissiva</b>.</p>'+
      '<p><b>Excesso de poder:</b> o agente é <b>incompetente</b>, ou é competente mas pratica o ato de forma <b>desproporcional</b> — vício na <b>COMPETÊNCIA</b>; o ato <b>pode ser convalidado</b>.</p>'+
      '<p><b>Desvio de poder (ou de finalidade):</b> o agente é <b>competente</b>, mas pratica o ato visando a <b>interesse diverso do previsto na norma</b> — vício na <b>FINALIDADE</b>; o ato <b>deve ser anulado</b>.</p></div>'+
      '<div class="box"><span class="bl">Deveres da Administração</span>'+
      '<ul><li><b>Agir:</b> o administrador <b>não pode deixar de exercer</b> suas prerrogativas.</li>'+
      '<li><b>Eficiência:</b> <b>celeridade</b>, <b>perfeição técnica</b> e <b>bom rendimento funcional</b>.</li>'+
      '<li><b>Probidade:</b> <b>honestidade e boa-fé</b>, visando ao <b>interesse público</b>.</li>'+
      '<li><b>Prestar contas:</b> decorre da <b>indisponibilidade do interesse público</b>, é <b>inerente a quem administra a coisa pública</b> e alcança <b>inclusive particulares que aplicam recursos públicos</b>.</li></ul></div>')
  ]
};

var EX = {
S1:{t:"mc", instr:"Como Carvalho Filho conceitua os poderes administrativos?",
  options:["Conjunto de prerrogativas de direito público que a ordem jurídica confere aos agentes administrativos para que o Estado alcance seus fins",
           "Conjunto das funções estruturais do Estado: legislativa, executiva e judiciária",
           "Conjunto de direitos subjetivos dos administrados perante a Administração",
           "Conjunto de deveres impostos ao particular que contrata com a Administração"],
  answer:0,
  why:"São poderes instrumentais, e não os poderes estruturais (Legislativo, Executivo e Judiciário)."},

S2:{t:"gap", instr:"Complete o limite do poder discricionário",
  before:"No poder discricionário, a margem de escolha é restrita aos limites da ",
  after:", devendo o ato observar a razoabilidade e a proporcionalidade.",
  options:["lei","conveniência do administrador","jurisprudência"], answer:0,
  why:"Discricionariedade não é arbitrariedade: a escolha se dá dentro da moldura legal."},

S3:{t:"multi", instr:"Marque os aspectos do ato discricionário sobre os quais INCIDE o controle judicial",
  options:["Competência","Finalidade","Forma",
           "Mérito administrativo","Conveniência da escolha","Oportunidade da escolha"],
  answers:[0,1,2],
  why:"O controle judicial incide apenas sobre os aspectos vinculados do ato."},

S4:{t:"mc", instr:"Autarquia deflagra de ofício processo administrativo contra servidor comissionado porque a legislação determina a abertura quando verificada irregularidade funcional na repartição. Qual o poder em atuação?",
  options:["Poder vinculado","Poder discricionário","Poder de polícia","Poder regulamentar"],
  answer:0,
  why:"É o exemplo do resumo: a abertura por determinação legal é atuação vinculada — mais um dever que uma prerrogativa."},

S5:{t:"sort", instr:"Hierárquico ou disciplinar? (a fronteira de Hely Lopes Meirelles)",
  buckets:["Poder Hierárquico","Poder Disciplinar"],
  items:[["Distribui e escalona as funções executivas",0],
         ["Estabelece a relação de subordinação dos agentes",0],
         ["Permite dar ordens, fiscalizar, delegar e avocar",0],
         ["Controla o desempenho das funções e a conduta interna dos servidores",1],
         ["Responsabiliza os servidores pelas faltas cometidas",1],
         ["Admite gradação e escolha da penalidade",1]],
  why:"São correlatos, mas não se confundem. Se falar em punição, é disciplinar."},

S6:{t:"multi", instr:"Marque as hipóteses em que NÃO há hierarquia",
  options:["Entre diferentes pessoas jurídicas","Entre Administração Direta e Indireta",
           "No exercício de funções típicas, como nos tribunais do Judiciário",
           "Entre os Poderes da República","Entre Administração e administrados",
           "Entre o chefe de seção e o servidor a ele subordinado no mesmo órgão"],
  answers:[0,1,2,3,4],
  why:"As cinco primeiras são a lista do resumo; a última é justamente o caso típico de subordinação."},

S7:{t:"mc", instr:"Sobre delegação e avocação de competências, o que diz o resumo?",
  options:["Ambas são atos discricionários; a delegação pode ocorrer fora da estrutura hierárquica, a avocação não",
           "Ambas são atos vinculados; nenhuma pode ocorrer fora da estrutura hierárquica",
           "Ambas são atos discricionários; a avocação pode ocorrer fora da estrutura hierárquica, a delegação não",
           "A delegação é vinculada e a avocação é discricionária"],
  answer:0,
  why:"Esta é a inversão preferida da banca: quem sai da hierarquia é a delegação."},

S8:{t:"wordbank", instr:"Monte a conclusão do resumo sobre a sanção ao servidor",
  target:["decorre","imediatamente","do","poder","disciplinar","e","mediatamente","do","poder","hierárquico"],
  extra:["regulamentar","de polícia","vinculado"],
  why:"A penalidade advém de autoridade superior sobre agente subordinado — daí o hierárquico aparecer só mediatamente."},

S9:{t:"match", instr:"Correlacione cada poder ao seu traço característico",
  pairs:[["Poder vinculado","Prática de atos vinculados — mais um dever que uma prerrogativa"],
         ["Poder discricionário","Juízo de conveniência e oportunidade (mérito administrativo)"],
         ["Poder hierárquico","Relação de coordenação e subordinação nas organizações administrativas"],
         ["Poder disciplinar","Sanção a quem está submetido à disciplina interna da Administração"],
         ["Poder regulamentar","Edição de decretos pelo Chefe do Executivo"],
         ["Poder de polícia","Condicionar e restringir o exercício de atividades privadas"]],
  why:"Poderes instrumentais — não confunda com os poderes estruturais (Legislativo, Executivo e Judiciário)."},

S10:{t:"sort", instr:"Decreto de execução ou decreto autônomo?",
  buckets:["Decreto de execução (art. 84, IV)","Decreto autônomo (art. 84, VI)"],
  items:[["Ato secundário: fundamento de validade é a lei",0],
         ["Finalidade de dar fiel execução às leis",0],
         ["Não pode ser delegado",0],
         ["Ato primário: fundamento de validade é a Constituição Federal",1],
         ["Organizar a Administração Pública ou extinguir cargos públicos vagos",1],
         ["Pode ser delegado em alguns casos",1]],
  why:"É o quadro comparativo do resumo, linha por linha."},

S11:{t:"mc", instr:"Decreto de execução que conflita com a lei que regulamenta: cabe ADI?",
  options:["Não cabe ADI; a ação direta é apenas para atos normativos autônomos que ofendem diretamente a Constituição",
           "Cabe ADI, pois todo decreto é ato normativo",
           "Cabe ADI apenas se o decreto for editado por Ministro de Estado",
           "Cabe ADI, e o Congresso Nacional fica impedido de sustar o ato"],
  answer:0,
  why:"O conflito é com a lei, não com a Constituição — daí a ADI não servir."},

S12:{t:"gap", instr:"Complete a natureza dos atos do poder regulamentar",
  before:"Os atos normativos oriundos do poder regulamentar são ",
  after:", ou seja, não podem inovar o ordenamento jurídico.",
  options:["secundários","primários","autônomos"], answer:0,
  why:"Por isso o Congresso Nacional pode sustar os que exorbitem do poder regulamentar."},

S13:{t:"match", instr:"Ligue cada dispositivo da CF ao seu conteúdo",
  pairs:[["Art. 48, XI","Cabe ao Congresso Nacional dispor sobre criação e extinção de Ministérios e órgãos"],
         ["Art. 61, §1º, II, e","Iniciativa privativa do Presidente da República dessa lei"],
         ["Art. 84, VI, a","Decreto autônomo: organização e funcionamento da administração federal, sem aumento de despesa nem criação ou extinção de órgãos"],
         ["Art. 84, VI, b","Decreto autônomo: extinção de funções ou cargos públicos, quando vagos"],
         ["Art. 88","A lei disporá sobre a criação e extinção de Ministérios e órgãos"]],
  why:"Criação e extinção de Ministérios e órgãos se dá por LEI, e não por decreto."},

S14:{t:"wordbank", instr:"Monte, na ordem, o ciclo de polícia",
  target:["legislação","consentimento","fiscalização","sanção"],
  extra:["convalidação","delegação","anuência"],
  why:"Sempre existirão apenas legislação e fiscalização: o consentimento depende de lei e a sanção, de infração."},

S15:{t:"sort", instr:"Licença ou autorização?",
  buckets:["Licença","Autorização"],
  items:[["Anuência para usufruir um direito",0],
         ["Ato administrativo vinculado",0],
         ["Ato administrativo definitivo",0],
         ["Anuência para exercer atividade de interesse do particular",1],
         ["Ato administrativo discricionário",1],
         ["Ato administrativo precário",1]],
  why:"Ambas são manifestações do poder de polícia preventivo, formalizadas por alvarás, carteiras, declarações e certificados."},

S16:{t:"multi", instr:"Marque os atributos do poder de polícia",
  options:["Discricionariedade","Autoexecutoriedade","Coercibilidade",
           "Onerosidade","Irrevogabilidade","Tipicidade penal"],
  answers:[0,1,2],
  why:"Com exceções: alguns atos são vinculados (licenças) ou não autoexecutórios (cobrança de multa não paga)."},

S17:{t:"sort", instr:"Polícia administrativa ou polícia judiciária?",
  buckets:["Polícia administrativa","Polícia judiciária"],
  items:[["Caráter preventivo",0],
         ["Exercida por diversos órgãos administrativos",0],
         ["Incide sobre bens, atividades e direitos",0],
         ["Caráter repressivo",1],
         ["Exercida por corporações especializadas, como Polícia Civil e Polícia Federal",1]],
  why:"A troca dos caracteres preventivo e repressivo é a pegadinha mais comum aqui."},

S18:{t:"mc", instr:"Por que a multa de trânsito não é exemplo de ato autoexecutório?",
  options:["Porque tem exigibilidade (coerção indireta), mas não executoriedade: para cobrar, a Administração precisa ir a juízo",
           "Porque não é manifestação do poder de polícia",
           "Porque depende de autorização judicial prévia para ser aplicada",
           "Porque a coercibilidade não é atributo do poder de polícia"],
  answer:0,
  why:"Compare com a demolição de obra irregular, que é coerção direta — executoriedade."},

S19:{t:"sort", instr:"Excesso de poder ou desvio de poder?",
  buckets:["Excesso de poder","Desvio de poder"],
  items:[["O agente é incompetente, ou é competente mas age de forma desproporcional",0],
         ["O vício está na competência do ato",0],
         ["O ato pode ser convalidado",0],
         ["O agente, embora competente, visa a interesse diverso do previsto na norma",1],
         ["O vício está na finalidade do ato",1],
         ["O ato deve ser anulado",1]],
  why:"O abuso de poder é gênero, e ocorre tanto na forma comissiva quanto omissiva."},

S20:{t:"match", instr:"Correlacione cada dever da Administração ao seu conteúdo",
  pairs:[["Dever de agir","O administrador não pode deixar de exercer suas prerrogativas"],
         ["Dever de eficiência","Celeridade, perfeição técnica e bom rendimento funcional"],
         ["Dever de probidade","Honestidade e boa-fé, visando ao interesse público"],
         ["Dever de prestar contas","Decorre da indisponibilidade do interesse público e alcança particulares que aplicam recursos públicos"]],
  why:"O dever de prestar contas é inerente àqueles que administram a coisa pública."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

var TEC = [
  ["Caderno CEBRASPE — Direito Administrativo 05","https://www.tecconcursos.com.br/s/Q1TUYJ","Q1TUYJ"],
  ["Caderno FCC — Direito Administrativo 05","https://www.tecconcursos.com.br/s/Q1w5HV","Q1w5HV"],
  ["Caderno FGV — Direito Administrativo 05","https://www.tecconcursos.com.br/s/Q1w5Ha","Q1w5Ha"],
  ["Caderno VUNESP — Direito Administrativo 05","https://www.tecconcursos.com.br/s/Q1w5Hf","Q1w5Hf"],
  ["Caderno AOCP — Direito Administrativo 05","https://www.tecconcursos.com.br/s/Q23Ekb","Q23Ekb"],
  ["Caderno IBFC — Direito Administrativo 05","https://www.tecconcursos.com.br/s/Q27T8i","Q27T8i"],
  ["Caderno FUNDATEC — Direito Administrativo 05","https://www.tecconcursos.com.br/s/Q27XQH","Q27XQH"]
];
var TECNOTA = "A banca ganha dinheiro em três fronteiras deste resumo. A primeira é hierárquico × disciplinar: o hierárquico DISTRIBUI e ESCALONA funções, o disciplinar CONTROLA o desempenho e a conduta — e a sanção ao servidor decorre imediatamente do disciplinar e mediatamente do hierárquico; no mesmo bloco entram as inversões de delegação e avocação (só a delegação sai da estrutura hierárquica) e as cinco hipóteses em que não há hierarquia. A segunda é o decreto: execução (art. 84, IV) é ato secundário, indelegável, sem ADI cabível contra ele; autônomo (art. 84, VI) é ato primário, delegável em alguns casos, serve para organizar a Administração ou extinguir cargos vagos — e nunca para criar ou extinguir Ministérios e órgãos, que dependem de lei (arts. 48, XI, 61, §1º, II, e, e 88). A terceira é o poder de polícia: licença é vinculada e definitiva, autorização é discricionária e precária; das quatro fases do ciclo só legislação e fiscalização sempre existem; e a multa de trânsito tem exigibilidade mas não executoriedade, ao contrário da interdição de estabelecimento, que é autoexecutória com controle judicial a posteriori.";

var UNITS = [
  {n:1, title:"Vinculado, discricionário, hierárquico e disciplinar", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Conceito, mérito administrativo e a fronteira de Hely", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · conceito e poder discricionário",  xp:25, data:["S1","S2","S3","T0","T1","T2","T3","T4","T5","T6","T7"]},
    {id:"K3", type:"drill",  title:"Praticar · poder vinculado e hierarquia",     xp:25, data:["S4","S5","S6","T8","T9","T10","T11","T12","T13","T14","T15"]},
    {id:"K4", type:"drill",  title:"Praticar · delegação, avocação e disciplina", xp:25, data:["S7","S8","S9","T16","T17","T18","T19","T20","T21","T22"]},
    {id:"K5", type:"flash",  title:"Flashcards · poderes e hierarquia",           xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]}
  ]},
  {n:2, title:"Poder regulamentar", cvar:"u2", lessons:[
    {id:"K6", type:"teoria", title:"Decreto de execução, decreto autônomo e os artigos da CF", xp:10, data:"V2"},
    {id:"K7", type:"drill",  title:"Praticar · decretos e controle",              xp:25, data:["S10","S11","T23","T24","T25","T26"]},
    {id:"K8", type:"drill",  title:"Praticar · atos secundários e sustação",      xp:25, data:["S12","T27","T28","T29","T30"]},
    {id:"K9", type:"drill",  title:"Praticar · dispositivos da CF",               xp:25, data:["S13","T31","T32","T33"]},
    {id:"K10",type:"flash",  title:"Flashcards · poder regulamentar",             xp:15, data:[18,19,20,21,22,23,24,25,26,27]}
  ]},
  {n:3, title:"Poder de polícia, abuso de poder e deveres", cvar:"u3", lessons:[
    {id:"K11",type:"teoria", title:"Ciclo de polícia, autoexecutoriedade e abuso de poder", xp:10, data:"V3"},
    {id:"K12",type:"drill",  title:"Praticar · ciclo, licença e atributos",       xp:25, data:["S14","S15","S16","T34","T35","T36","T37","T38"]},
    {id:"K13",type:"drill",  title:"Praticar · delegação e espécies de polícia",  xp:25, data:["S17","S18","T39","T40","T41","T42","T43"]},
    {id:"K14",type:"drill",  title:"Praticar · abuso de poder e deveres",         xp:25, data:["S19","S20","T44","T45","T46","T47","T48","T49"]},
    {id:"K15",type:"flash",  title:"Flashcards · polícia, abuso e deveres",       xp:15, data:[28,29,30,31,32,33,34,35,36,37,38,39]}
  ]},
  {n:4, title:"Fixação", cvar:"u4", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                     xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                        xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                       xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 05 de Direito Administrativo (Radegondes) ---------- */
var COM={
0:"<p>Certo — é o conceito que o resumo toma de <b>Carvalho Filho</b>: os poderes administrativos são <b>“o conjunto de prerrogativas (privilégios) de direito público que a ordem jurídica confere aos agentes administrativos para o fim de permitir que o Estado alcance seus fins”</b>.</p><p>Guarde as três peças: <b>prerrogativas de direito público</b> · conferidas aos <b>agentes administrativos</b> · para que o <b>Estado alcance seus fins</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Introdução — conceito de Carvalho Filho</i></p>",
1:"<p>Errado, e o resumo abre um quadro <b>ATENÇÃO!</b> só para isso: <b>“Poderes instrumentais ≠ Poderes estruturais (legislativo, executivo e judiciário)”</b>.</p><p>Os poderes administrativos são <b>instrumentais</b> — ferramentas de atuação da Administração. Os <b>estruturais</b> são os três Poderes da República. Confundir os dois é o erro que a banca planta.</p><p class='fb-fonte'>Resumo 05 · <i>Introdução — Atenção!</i></p>",
2:"<p>Certo pela letra do resumo: o poder vinculado <b>“é a prática de atos vinculados”</b> e <b>“é mais um dever que uma prerrogativa”</b>.</p><p>É o contraponto do discricionário: aqui não há espaço de escolha, a lei já disse o que fazer — por isso a ideia de <b>dever</b> prevalecer sobre a de <b>privilégio</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Vinculado</i></p>",
3:"<p>Errado no nome do poder. Esse é exatamente o <b>exemplo do resumo</b> para o <b>poder VINCULADO</b>: a autarquia deflagrou de ofício o processo <b>“alegando que a legislação determina a abertura de processo quando verificada irregularidade funcional praticada na repartição”</b>.</p><p>A conclusão do material é literal: <b>“a abertura de processo por determinação legal configura atuação administrativa oriunda do poder administrativo vinculado”</b>. Se a lei determina, não há conveniência nem oportunidade a exercer.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Vinculado — exemplo</i></p>",
4:"<p>Certo. Item 02 da lista do resumo sobre o poder discricionário: <b>“admite juízo de conveniência e oportunidade (mérito administrativo)”</b>.</p><p>Fixe o sinônimo: <b>conveniência e oportunidade = mérito administrativo</b>. É esse mérito que o Judiciário não controla.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Discricionário</i></p>",
5:"<p>Errado por extensão indevida. O item 03 do resumo é claro: <b>“a margem de escolha é restrita aos limites da lei”</b>.</p><p>A banca FGV cobrou esse ponto como definição: a discricionariedade <b>“é a liberdade do administrador de tomar determinadas decisões, desde que esteja nos limites da lei”</b>. E o item 04 acrescenta a observância da <b>razoabilidade</b> e da <b>proporcionalidade</b>. Discricionariedade não é arbitrariedade.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Discricionário</i></p>",
6:"<p>Errado, e a dispensa é exatamente o que o resumo não admite. O item 04 da lista é impositivo: o poder discricionário <b>“deve observar os princípios da razoabilidade e da proporcionalidade”</b>.</p><p>Esses dois princípios são o freio interno da escolha administrativa: o administrador escolhe dentro do mérito, mas não pode escolher de forma desmedida. Somados ao item 03 — <b>“a margem de escolha é restrita aos limites da lei”</b> —, eles são a moldura da discricionariedade.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Discricionário</i></p>",
7:"<p>Errado — está justamente invertido. O item 05 do resumo: <b>“controle judicial incide apenas sobre os aspectos vinculados do ato (competência, finalidade e forma)”</b>.</p><p>Ou seja, o juiz olha <b>competência, finalidade e forma</b>; o <b>mérito administrativo</b> (conveniência e oportunidade) fica fora. Decore os três aspectos vinculados: são eles que a banca lista para testar se você sabe o que sobra ao Judiciário.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Discricionário</i></p>",
8:"<p>Certo — é a <b>QUESTÃO-DEFINIÇÃO</b> que o resumo transcreve (CESPE – SERIS AL 2021), com gabarito <b>CERTO</b>.</p><p>O fundamento está no item 06 da lista: o poder discricionário <b>“abrange também a revogação de atos inoportunos e inconvenientes”</b>. Revoga-se ato <b>válido</b> por razões de mérito — não confunda com anulação, que pressupõe ilegalidade.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Discricionário — questão-definição</i></p>",
9:"<p>Certo — é a alternativa dada como correta na <b>QUESTÃO-DEFINIÇÃO</b> da FCC (DPE SC 2021) transcrita no resumo: há espaço para a discricionariedade <b>“quando a lei prevê determinada competência, mas não estabelece a conduta a ser adotada”</b>.</p><p>É o teste prático da discricionariedade: a lei atribui a competência e deixa em aberto o <b>como</b>. Se a lei já disser a conduta, o poder é vinculado.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Discricionário — questão-definição</i></p>",
10:"<p>Certo pela letra do item 01: o poder hierárquico <b>“é a relação de coordenação e subordinação que se estabelece nas organizações administrativas”</b>.</p><p>Repare nas duas palavras: <b>coordenação</b> (mesmo nível) e <b>subordinação</b> (níveis diferentes). A banca às vezes troca uma delas por “colaboração” ou “cooperação”.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Hierárquico</i></p>",
11:"<p>Certo — é a lista do item 02, sem sobra: o poder hierárquico <b>“permite ao superior hierárquico dar ordens, fiscalizar, controlar, aplicar sanções, delegar e avocar competências”</b>.</p><p>São seis verbos. Se a assertiva acrescentar algo fora dessa lista, desconfie.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Hierárquico</i></p>",
12:"<p>Errado por extensão indevida. O item 03 do resumo limita: o poder hierárquico <b>“só abrange sanções disciplinares a servidores, e não sanções a particulares”</b>.</p><p>Cuidado com a fronteira: o <b>poder disciplinar</b> alcança <b>servidores e particulares COM VÍNCULO CONTRATUAL</b>; o <b>hierárquico</b>, só servidores. E particular <b>sem</b> vínculo é caso de <b>poder de polícia</b>, não de hierarquia.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Hierárquico</i></p>",
13:"<p>Errado numa palavra. O item 04 é expresso: <b>“delegação e avocação são atos discricionários”</b>.</p><p>Discricionários porque a autoridade decide, por conveniência e oportunidade, se delega ou se avoca. Trocar “discricionários” por “vinculados” é a inversão clássica aqui.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Hierárquico</i></p>",
14:"<p>Errado — a assertiva inverteu os dois institutos. O item 05 do resumo: <b>“delegação pode ocorrer fora da estrutura hierárquica; já a avocação, não pode”</b>.</p><p>Guarde assim: <b>delegar</b> é passar competência adiante e <b>pode sair</b> da hierarquia; <b>avocar</b> é trazer para si a competência do <b>subordinado</b>, e por isso <b>exige</b> a relação hierárquica.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Hierárquico</i></p>",
15:"<p>Certo. São as duas primeiras hipóteses da lista do item 06 do resumo, que diz não haver hierarquia <b>“entre diferentes pessoas jurídicas”</b> e <b>“entre Adm. Direta e Indireta”</b>.</p><p>A lista completa tem cinco: pessoas jurídicas distintas · Direta e Indireta · <b>exercício de funções típicas</b> (ex.: tribunais do Judiciário) · <b>entre os Poderes da República</b> · <b>entre Administração e administrados</b>. Entre Direta e Indireta o que existe é <b>controle (supervisão)</b>, não subordinação.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Hierárquico — onde não há hierarquia</i></p>",
16:"<p>Errado. <b>“Entre Administração e administrados”</b> é a última hipótese da lista do item 06 em que o resumo diz <b>não haver hierarquia</b>.</p><p>Faz sentido: o administrado não é subordinado. A Administração atua sobre ele por <b>poder de polícia</b> — condicionando e restringindo atividades privadas —, e não por hierarquia.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Hierárquico — onde não há hierarquia</i></p>",
17:"<p>Certo — é a <b>OBSERVAÇÃO 02</b> do resumo, literal: <b>“decorrem do poder hierárquico os poderes disciplinar e regulamentar”</b>.</p><p>A observação 01 completa o raciocínio: o hierárquico <b>“tem a função de distribuir e escalonar as funções dos órgãos públicos, estabelecendo a relação de subordinação de seus agentes”</b> — é dessa organização que os outros dois brotam.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Hierárquico — Observações</i></p>",
18:"<p>Certo pela letra do item 01: o poder disciplinar <b>“é a prerrogativa para aplicar sanções àqueles que, submetidos à disciplina interna da Administração, cometem infrações (servidores e particulares com vínculo contratual)”</b>.</p><p>O parêntese é o que a banca cobra: além dos <b>servidores</b>, entram os <b>particulares com vínculo contratual</b>. Quem não tem vínculo algum não está submetido à disciplina interna.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Disciplinar</i></p>",
19:"<p>Errado — o resumo afirma o oposto no item 02: o poder disciplinar <b>“não se confunde com o poder punitivo do Estado exercido pelo Poder Judiciário para punir infrações de natureza civil e penal (ex: atos de improbidade)”</b>.</p><p>São esferas distintas: a Administração pune a <b>falta funcional</b>; o Judiciário, o <b>ilícito civil e penal</b>. O exemplo do material é o ato de <b>improbidade</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Disciplinar</i></p>",
20:"<p>Certo — é a <b>QUESTÃO-DEFINIÇÃO</b> da VUNESP 2019 transcrita no resumo, com gabarito <b>CERTO</b>.</p><p>O comentário do material explica: <b>“no poder disciplinar, o administrador – diferente do direito penal – não está limitado à prévia e rígida tipicidade, à estrita definição da conduta administrativa ilícita e de sua sanção. Situação essa que autoriza, portanto, uma margem de escolha (discricionariedade)”</b>.</p><p>Casa com o item 03 da lista: o poder disciplinar <b>“admite discricionariedade (gradação e escolha da penalidade)”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Disciplinar — questão-definição</i></p>",
21:"<p>Errado: a ordem está trocada. O resumo transcreve a assertiva do CESPE (TCE PA 2016) com gabarito CERTO na forma correta — a prerrogativa de impor sanções a servidores sem decisão judicial <b>“decorre imediatamente do poder disciplinar e mediatamente do poder hierárquico”</b>.</p><p>A razão está no quadro <b>ATENÇÃO!</b>: o disciplinar decorre do hierárquico <b>“pois a aplicação da penalidade deverá advir de uma autoridade superior sobre um agente subordinado seu”</b>. Quem pune é o disciplinar (imediato); a hierarquia é o pressuposto (mediato).</p><p class='fb-fonte'>Resumo 05 · <i>Poder Disciplinar — Atenção!</i></p>",
22:"<p>Certo — é a lição de <b>Hely Lopes Meirelles</b> transcrita no resumo: <b>“no uso do poder hierárquico a Administração Pública distribui e escalona as suas funções executivas. Já no uso do poder disciplinar ela controla o desempenho dessas funções e a conduta interna de seus servidores, responsabilizando-os pelas faltas cometidas”</b>.</p><p>O material resume em duas linhas, que vale decorar: <b>Poder Hierárquico ⇒ distribui e escalona as funções</b> · <b>Poder Disciplinar ⇒ controla o desempenho das funções e a conduta de seus servidores</b>. E o atalho da VUNESP 2018: <b>se falar em punição (sanção), é o Poder Disciplinar</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Disciplinar — Hely Lopes Meirelles</i></p>",
23:"<p>Certo pelo item 01: o poder regulamentar <b>“é o poder inerente ao Chefe do Executivo para editar decretos”</b>.</p><p>Guarde o titular — <b>Chefe do Executivo</b> —, porque é aí que se separa o <b>poder regulamentar</b> (privativo do Chefe, alcance externo) do <b>poder normativo</b> (qualquer autoridade, alcance em regra interno).</p><p class='fb-fonte'>Resumo 05 · <i>Poder Regulamentar</i></p>",
24:"<p>Errado no final. O item 02 do resumo lista três traços do <b>decreto de execução</b>: <b>“a finalidade é dar fiel execução às leis”</b> · <b>“não pode ser delegado”</b> · <b>“são atos de caráter geral e abstrato”</b>.</p><p>A finalidade estava certa; a delegabilidade, não. E é exatamente essa a linha do <b>quadro comparativo</b>: o decreto de <b>execução não pode ser delegado</b>, enquanto o <b>autônomo pode ser delegado em alguns casos</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Regulamentar — decreto de execução</i></p>",
25:"<p>Errado por troca de par de palavras. O terceiro traço do item 02 diz o contrário: os decretos de execução <b>“são atos de caráter GERAL e ABSTRATO”</b>.</p><p>Geral e abstrato porque não miram destinatário nem situação concreta: apenas detalham a lei para que ela seja fielmente executada. Os outros dois traços do mesmo item: a finalidade de <b>dar fiel execução às leis</b> e a <b>impossibilidade de delegação</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Regulamentar — decreto de execução</i></p>",
26:"<p>Errado nas duas afirmações. O item 03 do resumo: <b>“os atos normativos oriundos do poder regulamentar são secundários, ou seja, não podem inovar o ordenamento jurídico”</b>.</p><p>Primário é o <b>decreto autônomo</b>, cujo fundamento de validade é a <b>Constituição</b>. O decreto de execução é <b>secundário</b>, porque seu fundamento de validade é a <b>lei</b> — e por isso não cria direito novo.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Regulamentar</i></p>",
27:"<p>Certo pelo item 04: <b>“o Congresso Nacional pode sustar atos normativos do Executivo que exorbitem do poder regulamentar”</b>.</p><p>É o freio político. O freio judicial é outro, e mais restrito: contra decreto de execução em conflito com a lei <b>não cabe ADI</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Regulamentar</i></p>",
28:"<p>Errado. O item 05 do resumo, sobre controle judicial, é expresso: <b>“em caso de conflito com a lei que regulamenta, não cabe ADI (Ação Direta de Inconstitucionalidade) contra Decreto de Execução. A ADI é apenas para atos normativos autônomos que ofendem diretamente a Constituição”</b>.</p><p>A lógica: se o decreto de execução brigou com a <b>lei</b>, o vício é de <b>legalidade</b>, não de constitucionalidade direta. ADI serve para o <b>ato normativo autônomo</b>, que tira validade da própria Constituição.</p><p class='fb-fonte'>Resumo 05 · <i>Poder Regulamentar — controle judicial</i></p>",
29:"<p>Certo — é a primeira linha do <b>QUADRO COMPARATIVO</b> do resumo. <b>Decreto de execução (art. 84, IV, CF):</b> <b>“é ato secundário, pois seu fundamento de validade é a lei”</b>. <b>Decreto autônomo (art. 84, VI, CF):</b> <b>“é ato primário, pois seu fundamento de validade é a Constituição Federal”</b>.</p><p>O quadro tem três linhas, e vale levar as três: fundamento de validade · finalidade · possibilidade de delegação.</p><p class='fb-fonte'>Resumo 05 · <i>Quadro comparativo — decreto de execução × autônomo</i></p>",
30:"<p>Certo pela letra do <b>art. 84, VI</b>, transcrito no resumo: compete privativamente ao Presidente <b>“dispor, mediante decreto (decreto autônomo), sobre: a) organização e funcionamento da administração federal, quando não implicar aumento de despesa nem criação ou extinção de órgãos públicos; b) extinção de funções ou cargos públicos, quando vagos”</b>.</p><p>São as <b>duas finalidades</b> que o quadro comparativo do material atribui ao decreto autônomo: <b>organizar a Adm. Pública</b> ou <b>extinguir cargos públicos vagos</b>. Duas condições nunca podem cair: sem <b>aumento de despesa</b> e só cargos <b>VAGOS</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Dispositivos importantes da CF — art. 84, VI</i></p>",
31:"<p>Errado, e o resumo põe isso em dois avisos <b>ATENÇÃO</b> seguidos: <b>“a criação/extinção de Ministérios ou Órgãos se dá por meio de lei, e não de decreto”</b> e <b>“o Decreto autônomo não pode criar nem extinguir órgãos ou ministérios”</b>.</p><p>A base são três dispositivos transcritos: <b>art. 48, XI</b> (cabe ao Congresso Nacional dispor sobre criação e extinção de Ministérios e órgãos), <b>art. 61, §1º, II, e</b> (a iniciativa da lei é privativa do Presidente) e <b>art. 88</b> (<b>“a lei disporá sobre a criação e extinção de Ministérios e órgãos da administração pública”</b>).</p><p class='fb-fonte'>Resumo 05 · <i>Dispositivos importantes da CF — Atenção</i></p>",
32:"<p>Certo, e é a comparação inteira do resumo. O <b>poder regulamentar</b> <b>“é uma espécie do poder normativo, sendo privativo dos Chefes do Executivo a fim de elaborar decretos e regulamentos para a fiel execução das leis, que são também chamados de decretos executórios. Tem alcance externo”</b>.</p><p>Já o <b>poder normativo</b> <b>“é mais amplo e pode ser adotado por qualquer autoridade. Ele também é utilizado para complementar e facilitar a execução da lei, mas, em regra, com alcance interno aos órgãos que os expedem”</b> — os exemplos do material são <b>instruções normativas</b>, <b>regimentos dos tribunais</b>, <b>resoluções</b> e <b>deliberações</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Poder regulamentar × poder normativo</i></p>",
33:"<p>Certo pela letra do resumo: <b>“já os regulamentos de execução são de competência privativa do Chefe do Poder Executivo, indelegável, e não se restringem a assuntos de ordem técnica, podendo tratar de qualquer assunto administrativo”</b>.</p><p>O contraste é com o <b>regulamento delegado (ou autorizado)</b>, em que o <b>Legislativo, na própria lei</b>, autoriza o Executivo a disciplinar situações nela não reguladas — e nele a lei <b>“geralmente incumbe órgãos administrativos de perfil técnico”</b> de matérias de <b>índole técnica</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Regulamento delegado × regulamento de execução</i></p>",
34:"<p>Certo pelo item 01: o poder de polícia <b>“é a prerrogativa de condicionar e restringir o exercício de atividades privadas”</b>.</p><p>O item 02 dá a função e os exemplos: é <b>“uma ferramenta para frear ou reprimir abuso dos direitos individuais”</b>, aplicada quando o indivíduo <b>recebe multa de trânsito</b>, <b>tem sua atividade comercial interditada</b> ou <b>sua obra paralisada</b> — tudo isso <b>“para que o bem estar, a saúde, os direitos e bens coletivos não sejam prejudicados”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Poder de Polícia</i></p>",
35:"<p>Errado — a assertiva inverteu os dois atos. O item 03 do resumo, sobre o poder de polícia <b>preventivo</b>: a <b>licença</b> <b>“é a anuência para usufruir um direito”</b> e <b>“é um ato administrativo vinculado e definitivo”</b>; a <b>autorização</b> <b>“é a anuência para exercer atividade de interesse do particular”</b> e <b>“é um ato administrativo discricionário e precário”</b>.</p><p>Atalho: quem tem <b>direito</b> recebe <b>licença</b> (vinculada, definitiva); quem tem <b>interesse</b> recebe <b>autorização</b> (discricionária, precária).</p><p class='fb-fonte'>Resumo 05 · <i>Poder de Polícia — preventivo</i></p>",
36:"<p>Certo pelo item 03: o poder de polícia preventivo <b>“é a anuência prévia para a prática de atividades privadas (ex: licença e autorização)”</b>, e é <b>“formalizada por alvarás, carteiras, declarações, certificados”</b>.</p><p>Do outro lado está o <b>repressivo</b>, que é <b>“a aplicação de sanções administrativas a particulares”</b> (item 04).</p><p class='fb-fonte'>Resumo 05 · <i>Poder de Polícia — preventivo e repressivo</i></p>",
37:"<p>Certo pelo item 05, e com os parênteses que importam: <b>“podem ser cobradas taxas (espécie de tributo, e não preços públicos ou tarifas) em razão do exercício (efetivo) do poder de polícia”</b>.</p><p>Dois detalhes que a banca explora: a espécie tributária é <b>taxa</b> (nunca preço público ou tarifa) e o exercício precisa ser <b>efetivo</b> — mas o resumo ressalva que isso <b>“dispensa a fiscalização ‘porta a porta’, desde que haja competência e estrutura”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Poder de Polícia — taxas</i></p>",
38:"<p>Certo, e na ordem certa. O item 06 do resumo define o ciclo de polícia como <b>“legislação (ordem), consentimento, fiscalização e sanção”</b>.</p><p>A ordem é a sequência lógica: primeiro a norma, depois a anuência, depois o controle, por fim a punição. É o passo anterior à pegadinha do item 07, sobre quais fases sempre existem.</p><p class='fb-fonte'>Resumo 05 · <i>Poder de Polícia — ciclo de polícia</i></p>",
39:"<p>Errado — trocou justamente as duas fases. O item 07 do resumo: <b>“legislação e fiscalização são as únicas fases que sempre existirão num ciclo de polícia. O consentimento depende de lei; já a sanção depende de haver infração no caso concreto”</b>.</p><p>A razão de cada exclusão vale mais que a lista: sem lei exigindo anuência, não há <b>consentimento</b>; sem infração concreta, não há <b>sanção</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Poder de Polícia — fases que sempre existirão</i></p>",
40:"<p>Certo pelo item 08: na <b>delegação a entidades da Adm. Indireta de direito privado</b>, <b>“em regra, apenas as fases de consentimento e fiscalização”</b>.</p><p>Mas o próprio item traz a exceção em quadro <b>ATENÇÃO</b>: <b>“o STF, no RE 633.782, entendeu que a fase da sanção também poderá ser delegada, desde que obedeça alguns requisitos”</b>. E o item 09 fecha: a entidades <b>privadas não integrantes</b> da Administração, em regra, <b>não pode</b> ser delegado.</p><p class='fb-fonte'>Resumo 05 · <i>Poder de Polícia — delegação</i></p>",
41:"<p>Certo — é a transcrição literal do <b>RE 633.782/MG</b> na seção de jurisprudência relevante do resumo: é constitucional a delegação do poder de polícia, <b>“por meio de lei”</b>, a pessoas jurídicas de direito privado da Administração indireta de <b>“capital social majoritariamente público”</b> que prestem <b>“exclusivamente serviço público de atuação própria do Estado e em regime não concorrencial”</b>.</p><p>São quatro requisitos, e a <b>QUESTÃO-JURISPRUDÊNCIA</b> da FGV (SEFAZ ES 2022) mostra como se erra: a alternativa errada dizia capital público <b>“ainda que parcial”</b> e <b>“dispensada lei em sentido formal”</b>. Precisa de <b>lei</b> e de capital <b>majoritariamente</b> público.</p><p class='fb-fonte'>Resumo 05 · <i>Jurisprudência relevante — STF, RE 633.782/MG</i></p>",
42:"<p>Errado no “sem exceção”. Os três atributos do item 10 estão corretos — <b>“discricionariedade, autoexecutoriedade e coercibilidade”</b> —, mas o resumo abre <b>OBS</b> logo abaixo: <b>“alguns atos de polícia podem ser vinculados (ex: licenças) ou não autoexecutórios e coercitivos (ex: atos preventivos, cobrança de multa não paga)”</b>.</p><p>Os atributos são a <b>regra</b>, não um dogma. A <b>licença</b> é o exemplo pronto de ato de polícia <b>vinculado</b>; a <b>cobrança de multa não paga</b>, o de ato <b>sem autoexecutoriedade</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Poder de Polícia — atributos</i></p>",
43:"<p>Errado: a assertiva descreve a polícia <b>judiciária</b>. Pelo item 12 do resumo, a judiciária <b>“possui caráter repressivo”</b> e é <b>“exercida por corporações especializadas (ex: Polícia Civil e Polícia Federal)”</b>.</p><p>A <b>polícia administrativa</b> (item 11) é o oposto: <b>“possui caráter preventivo”</b>, <b>“é exercida por diversos órgãos administrativos”</b> e <b>“incide sobre bens, atividades e direitos”</b>. Preventivo × repressivo é a troca padrão da banca aqui.</p><p class='fb-fonte'>Resumo 05 · <i>Poder de Polícia — administrativa × judiciária</i></p>",
44:"<p>Certo — é a <b>OBSERVAÇÃO 02</b> do resumo: as multas de trânsito, <b>“como expressão do exercício do poder de polícia, são dotadas de exigibilidade, mas não são dotadas de executoriedade, já que a Administração não poderá compelir o particular a pagar o valor correspondente, devendo, para tanto, ir a juízo”</b>.</p><p>A base está na observação 01: a autoexecutoriedade desdobra-se em <b>exigibilidade</b> — coerção <b>indireta</b>, ex.: aplicação de multas — e <b>executoriedade</b> — coerção <b>direta</b>, ex.: demolição de obra irregular. O material conclui: <b>“a cobrança de multa é um exemplo típico de ato que não possui autoexecutoriedade”</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Poder de Polícia — Observações</i></p>",
45:"<p>Errado: a súmula diz exatamente o contrário. <b>Súmula 510 do STJ</b>, transcrita no resumo: <b>“a liberação de veículo retido apenas por transporte irregular de passageiros NÃO está condicionada ao pagamento de multas e despesas”</b>.</p><p>O resumo ainda traz a mesma ideia em questão do CESPE (TCE PA 2019), com gabarito <b>CERTO</b> e comentário remetendo à <b>Súmula 510</b>. Casa com a observação sobre a multa: exigibilidade não autoriza condicionar a devolução do bem.</p><p class='fb-fonte'>Resumo 05 · <i>Jurisprudência relevante — STJ, Súmula 510</i></p>",
46:"<p>Certo — é a primeira linha da seção: <b>“o abuso de poder pode ocorrer tanto na forma comissiva quanto na forma omissiva”</b>.</p><p>O resumo transcreve isso em duas questões do CESPE (STJ 2018 e TCE SC 2016), ambas <b>CERTAS</b>, e dá o exemplo da omissão: o <b>Servidor A</b>, chefe do órgão, presencia um servidor agredir outro fisicamente, tem o <b>dever de punir</b>, mas por ser amigo do agressor <b>“faz vista grossa”</b> — <b>abuso de poder omissivo</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Abuso de Poder</i></p>",
47:"<p>Errado: os vícios estão trocados. Pelo resumo, no <b>excesso de poder</b> <b>“o vício é na competência do ato”</b>; no <b>desvio de poder (ou de finalidade)</b> <b>“o vício é na finalidade do ato”</b>.</p><p>Os fatos geradores também diferem: no <b>excesso</b>, <b>“ou o agente é incompetente, ou é competente, mas pratica o ato de forma desproporcional”</b>; no <b>desvio</b>, <b>“o agente, embora competente, pratica o ato visando a interesse diverso do previsto na norma”</b>. A <b>QUESTÃO-PEGADINHA</b> do resumo (FGV – PC RJ 2022) vive disso: o delegado que escala o desafeto para os piores dias é <b>competente</b>, logo é <b>desvio</b>, não excesso.</p><p class='fb-fonte'>Resumo 05 · <i>Abuso de Poder — excesso × desvio</i></p>",
48:"<p>Certo — é o quadro <b>ATENÇÃO!</b> do resumo, nas duas linhas: <b>“excesso de poder ⇒ vício na competência, o ato pode ser convalidado”</b> e <b>“desvio de poder ⇒ vício na finalidade, o ato deve ser anulado”</b>.</p><p>Esse é o desdobramento prático da distinção: competência é vício <b>sanável</b>; finalidade, não. Por isso, na questão da FGV citada no material, o chefe institucional <b>“deve declarar a nulidade do ato”</b> por <b>desvio de poder</b>.</p><p class='fb-fonte'>Resumo 05 · <i>Abuso de Poder — Atenção!</i></p>",
49:"<p>Errado na segunda metade. A primeira estava certa, mas o resumo é expresso ao dizer que o <b>dever de prestar contas</b> <b>“alcança, INCLUSIVE, particulares que aplicam recursos públicos”</b> — as outras duas linhas da lista são <b>“decorre do princípio da indisponibilidade do interesse público”</b> e <b>“é inerente àqueles que administram a coisa pública”</b>.</p><p>Os outros três deveres da lista, para fechar o módulo: <b>agir</b> (<b>“o administrador não pode deixar de exercer suas prerrogativas”</b>), <b>eficiência</b> (<b>“celeridade, perfeição técnica e bom rendimento funcional”</b>) e <b>probidade</b> (<b>“honestidade e boa-fé, visando ao interesse público”</b>).</p><p class='fb-fonte'>Resumo 05 · <i>Deveres da Administração Pública</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"05", nome:"Poderes e deveres administrativos", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
