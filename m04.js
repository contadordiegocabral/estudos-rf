/* AFO — Módulo 04: Instrumentos orçamentários (PPA, LDO e LOA) */
window.MOD = window.MOD || {};
window.MOD.m04 = (function(){
"use strict";

var CARDS = [
  ["Quais são os três instrumentos de planejamento e onde estão previstos?","<b>PPA, LDO e LOA</b> — <span class='lawref'>CF, art. 165, I a III</span>. São leis de <b>iniciativa do Poder Executivo</b>."],
  ["O que o PPA estabelece, segundo o art. 165, § 1º?","De forma <b>regionalizada</b>, as <b>diretrizes, objetivos e metas</b> (DOM) da administração pública federal para as <b>despesas de capital e outras delas decorrentes</b> e para as relativas aos <b>programas de duração continuada</b>."],
  ["O PPA é regionalizado ou nacional?","<b>Regionalizado.</b> Dizer “em âmbito nacional” é o erro mais cobrado do módulo."],
  ["O que são despesas decorrentes das despesas de capital?","Aquelas que derivam das despesas de capital. Ex.: a <b>manutenção</b> da rodovia que foi construída."],
  ["O que são programas de duração continuada?","Despesas com duração <b>superior a dois anos</b> — <span class='lawref'>LRF, art. 17</span>."],
  ["Que regiões o PPA pode usar?","Estados, municípios e macrorregiões (norte, nordeste, centro-oeste, sul e sudeste). É <b>permitida</b> a regionalização de metas que abranjam territórios <b>maiores</b> que as macrorregiões: região hidrográfica, bioma, territórios de identidade, área de relevante interesse mineral."],
  ["O PPA pode ter metas para públicos específicos?","<b>Sim</b> — gênero, etnia, crianças, pessoa com deficiência, indígenas."],
  ["De quem é a competência para enviar o PPA ao Legislativo?","<b>Privativa do Chefe do Executivo.</b>"],
  ["Qual o prazo de encaminhamento do PPA?","Até <b>4 meses antes do encerramento do 1º ano de mandato</b> — ou seja, <b>31 de agosto do 1º ano</b> de mandato do Chefe do Executivo."],
  ["Qual a vigência do PPA?","<b>4 anos</b>, iniciando no <b>2º ano de mandato</b> do Chefe do Executivo e terminando no <b>1º ano do mandato seguinte</b>."],
  ["O PPA é planejamento de que prazo?","<b>Médio prazo.</b> A LDO é de curto prazo e a LOA é o planejamento operacional."],
  ["Quais os dois níveis de organização da ação de governo no PPA?","<b>Estratégico</b> (diretrizes, estratégias e macrodesafios) e <b>tático</b> (programas, objetivos, metas e indicadores)."],
  ["O que é a dimensão tática do PPA?","Define os <b>caminhos exequíveis</b> para as transformações da realidade anunciadas nas diretrizes estratégicas, considerando as variáveis inerentes à política pública."],
  ["PPA e LDO são inovações de quê?","Ambos são <b>inovações da CF/1988</b>."],
  ["O que é a LDO?","O <b>elo</b> entre o planejamento estratégico (PPA) e o planejamento operacional (LOA)."],
  ["O que a LDO compreenderá, segundo o art. 165, § 2º?","As <b>metas e prioridades</b> da administração pública federal; as <b>diretrizes de política fiscal</b> e respectivas metas, em consonância com trajetória sustentável da dívida pública; <b>orientará a elaboração da LOA</b>; <b>disporá sobre alterações na legislação tributária</b>; e estabelecerá a <b>política de aplicação das agências financeiras oficiais de fomento</b>."],
  ["Qual emenda incluiu as diretrizes de política fiscal na LDO?","A <b>EC nº 109/2021</b>, exigindo consonância com trajetória sustentável da dívida pública."],
  ["Qual o prazo de encaminhamento e devolução da LDO?","Encaminhamento até <b>8 meses e meio antes do encerramento do exercício</b> = <b>15 de abril</b>. Devolução até o encerramento do <b>1º período</b> da sessão legislativa = <b>17 de julho</b>."],
  ["Sobre o que a LDO dispõe, segundo o art. 4º da LRF?","<b>Equilíbrio</b> entre receitas e despesas; critérios e formas de <b>limitação de empenho</b>; normas relativas ao <b>controle de custos</b>; normas relativas à <b>avaliação dos resultados</b> dos programas; e <b>condições e exigências para transferências</b> de recursos a entidades públicas e privadas."],
  ["Quais os dois anexos da LDO?","<b>Anexo de Metas Fiscais (AMF)</b> e <b>Anexo de Riscos Fiscais (ARF)</b> — LRF, art. 4º, §§ 1º e 3º."],
  ["A LDO é anual? Qual sua vigência?","É <b>anual</b>, porém possui <b>vigência superior a um ano</b>: aprovada em um exercício, orienta a LOA do exercício seguinte."],
  ["Metas × objetivos","<b>Objetivos</b> são as escolhas de políticas públicas para transformar determinada realidade. <b>Metas</b> são a <b>quantificação dos objetivos</b>."],
  ["Produtos × resultados","<b>Produtos</b> são as consequências das atividades realizadas em cada programa. <b>Resultados</b> são as mudanças na realidade social observadas no <b>curto prazo</b>."],
  ["O que é a LOA?","O <b>orçamento por excelência</b> — o orçamento propriamente dito. Representa o <b>planejamento operacional</b>: o poder público <b>prevê</b> a arrecadação de receitas e <b>fixa</b> a realização de despesas."],
  ["Qual o prazo de encaminhamento e devolução da LOA?","Encaminhamento até <b>4 meses antes do término do exercício</b> = <b>31 de agosto</b>. Devolução até o encerramento da sessão legislativa = <b>22 de dezembro</b>."],
  ["O que a LOA compreende, segundo o art. 165, § 5º?","<b>Orçamento fiscal</b>; <b>orçamento de investimento das empresas controladas pela União</b>; e <b>orçamento da seguridade social</b>."],
  ["Os três instrumentos possibilitam participação social?","<b>Sim</b> — PPA, LDO e LOA, por força do <span class='lawref'>art. 48, § 1º, da LRF</span>."],
  ["Qual o limite das emendas individuais impositivas?","<b>2% da RCL</b> — elevado de 1,2% pela <b>EC nº 126/2022</b> <span class='lawref'>(CF, art. 166, § 9º)</span>."],
  ["Qual o limite das emendas de bancada estaduais impositivas?","<b>1% da receita corrente líquida realizada no exercício anterior</b>, para emendas de iniciativa de bancada de parlamentares de estados e do DF."],
  ["O que fez a EC nº 100/2019?","Introduziu o <b>§ 10 do art. 165 da CF</b>: a administração tem o <b>dever de executar as programações orçamentárias</b>, para garantir a efetiva entrega de bens e serviços à sociedade. Ampliou para todo o orçamento o regime jurídico de execução."],
  ["Qual o prazo-chave de cada instrumento? (bizu)","<b>PPA</b> 31/ago do 1º ano de mandato · <b>LDO</b> 15/abr · <b>LOA</b> 31/ago. Devoluções: LDO 17/jul · LOA 22/dez."]
];

var QS = [
  ["O plano plurianual, a lei de diretrizes orçamentárias e a lei orçamentária anual são leis de iniciativa do Poder Executivo.","C","FCC","Literalidade do caput do art. 165 da Constituição Federal."],
  ["Vigente por um período de quatro anos, o plano plurianual deve estabelecer, em âmbito nacional, as diretrizes, os objetivos e as metas para as despesas de capital.","E","CESPE","Questão-pegadinha do resumo: o PPA estabelece de forma <b>regionalizada</b>, e não em âmbito nacional."],
  ["O PPA estabelecerá as diretrizes, objetivos e metas para as despesas de capital e outras delas decorrentes e para as relativas aos programas de duração continuada.","C","FGV","Literalidade do art. 165, § 1º."],
  ["Consideram-se programas de duração continuada aqueles com duração superior a dois anos.","C","FCC","Art. 17 da Lei de Responsabilidade Fiscal."],
  ["É vedada a regionalização de metas do PPA em territórios maiores que as macrorregiões.","E","CESPE","É <b>permitida</b>: região hidrográfica, bioma, territórios de identidade, área de relevante interesse mineral."],
  ["No plano plurianual é permitido o estabelecimento de metas direcionadas a públicos específicos, como gênero, etnia e pessoas com deficiência.","C","FGV","Consta expressamente entre as possibilidades do PPA."],
  ["O envio do projeto de lei do plano plurianual ao Poder Legislativo é competência privativa do Chefe do Poder Executivo.","C","VUNESP","Todos os três instrumentos são de iniciativa privativa do Executivo."],
  ["O projeto de lei do plano plurianual deve ser encaminhado ao Legislativo até 31 de agosto do primeiro ano de mandato do Chefe do Executivo.","C","CESPE","Quatro meses antes do encerramento do primeiro exercício financeiro do mandato."],
  ["A vigência do plano plurianual inicia-se no primeiro ano do mandato do Chefe do Executivo.","E","FCC","Inicia-se no <b>segundo</b> ano de mandato e termina no primeiro ano do mandato seguinte."],
  ["O plano plurianual é instrumento de planejamento de curto prazo.","E","FGV","É de <b>médio prazo</b>. A LDO é que é de curto prazo."],
  ["O plano plurianual organiza a ação de governo nos níveis estratégico e tático.","C","CESPE","Estratégico: diretrizes, estratégias e macrodesafios. Tático: programas, objetivos, metas e indicadores."],
  ["A dimensão tática do plano plurianual define os caminhos exequíveis para as transformações anunciadas nas diretrizes estratégicas.","C","FGV","Conceito literal do material."],
  ["O plano plurianual e a lei de diretrizes orçamentárias são inovações trazidas pela Constituição de 1988.","C","FCC","Ambos foram criados pela CF/1988."],
  ["A lei de diretrizes orçamentárias constitui o elo entre o planejamento estratégico e o planejamento operacional.","C","VUNESP","Liga o PPA (estratégico) à LOA (operacional)."],
  ["A LDO compreenderá as metas e prioridades da administração pública federal e orientará a elaboração da lei orçamentária anual.","C","CESPE","Art. 165, § 2º, da Constituição Federal."],
  ["A LDO disporá sobre alterações na legislação tributária.","C","FCC","Uma das cinco atribuições do art. 165, § 2º."],
  ["Compete à lei orçamentária anual estabelecer a política de aplicação das agências financeiras oficiais de fomento.","E","FGV","Essa atribuição é da <b>LDO</b>, e não da LOA."],
  ["A exigência de que a LDO estabeleça as diretrizes de política fiscal em consonância com trajetória sustentável da dívida pública foi introduzida pela EC nº 109/2021.","C","CESPE","Novidade constitucional cobrada nas provas recentes."],
  ["O projeto de LDO deve ser encaminhado ao Legislativo até 15 de abril.","C","FCC","Oito meses e meio antes do encerramento do exercício financeiro."],
  ["A LDO deve ser devolvida ao Executivo até o encerramento da sessão legislativa, em 22 de dezembro.","E","VUNESP","A LDO é devolvida até o encerramento do <b>primeiro período</b> da sessão legislativa, em <b>17 de julho</b>. O 22 de dezembro é da LOA."],
  ["Segundo a LRF, a LDO disporá sobre o equilíbrio entre receitas e despesas e sobre critérios e formas de limitação de empenho.","C","CESPE","Art. 4º da Lei de Responsabilidade Fiscal."],
  ["Os anexos de metas fiscais e de riscos fiscais integram a lei orçamentária anual.","E","FGV","Integram a <b>LDO</b>, por força dos §§ 1º e 3º do art. 4º da LRF."],
  ["A lei de diretrizes orçamentárias é anual, mas possui vigência superior a um ano.","C","FCC","Aprovada em um exercício, orienta a elaboração e a execução da LOA do exercício seguinte."],
  ["Metas correspondem às escolhas de políticas públicas para a transformação de determinada realidade.","E","CESPE","Essa é a definição de <b>objetivos</b>. Metas são a <b>quantificação</b> dos objetivos."],
  ["No âmbito do plano plurianual, os produtos compreendem as consequências das atividades realizadas em cada programa.","C","FGV","E os resultados são as mudanças na realidade social observadas no curto prazo."],
  ["A lei orçamentária anual representa o planejamento operacional e é o orçamento propriamente dito.","C","FCC","É o orçamento por excelência."],
  ["Por meio da lei orçamentária anual o poder público prevê a arrecadação de receitas e fixa a realização de despesas.","C","CESPE","Receita se <b>prevê</b>; despesa se <b>fixa</b>."],
  ["O projeto de lei orçamentária anual deve ser encaminhado ao Legislativo até 30 de setembro.","E","VUNESP","Até <b>31 de agosto</b> — quatro meses antes do término do exercício financeiro."],
  ["A lei orçamentária anual deve ser devolvida ao Poder Executivo até o encerramento da sessão legislativa.","C","FCC","Ou seja, até 22 de dezembro."],
  ["A lei orçamentária anual compreenderá o orçamento fiscal, o orçamento de investimento das empresas controladas pela União e o orçamento da seguridade social.","C","CESPE","Art. 165, § 5º, incisos I a III."],
  ["O orçamento de investimento abrange todas as empresas em que a União detenha qualquer participação acionária.","E","FGV","Alcança as empresas em que a União detenha a <b>maioria do capital social com direito a voto</b> — as controladas."],
  ["O plano plurianual, a LDO e a lei orçamentária anual são instrumentos que possibilitam a participação social.","C","FCC","Art. 48, § 1º, da Lei de Responsabilidade Fiscal."],
  ["A EC nº 126/2022 elevou de 1,2% para 2% da receita corrente líquida o limite das emendas individuais de execução obrigatória.","C","CESPE","CF, art. 166, § 9º."],
  ["A obrigatoriedade de execução também alcança as emendas de iniciativa de bancada de parlamentares de estados e do Distrito Federal, no montante de 1% da receita corrente líquida realizada no exercício anterior.","C","FGV","Ponto frequentemente esquecido: além das individuais, há o limite das emendas de bancada."],
  ["A EC nº 100/2019 introduziu o § 10 do art. 165 da Constituição, estabelecendo o dever de execução das programações orçamentárias.","C","CESPE","Ampliou para todo o orçamento público o regime jurídico de execução."],
  ["Em regra, a lei orçamentária anual tem caráter autorizativo, ressalvadas as emendas impositivas.","C","FCC","Regra geral, mitigada pelas EC 86/2015, 100/2019 e 126/2022."],
  ["O PPA tem vigência de quatro anos coincidente com o mandato do Chefe do Executivo.","E","CESPE","Não é coincidente: vigora do <b>2º ano</b> de um mandato ao <b>1º ano</b> do mandato seguinte."],
  ["A LDO contribui com parâmetros para o acompanhamento da gestão fiscal.","C","VUNESP","É uma das características da LDO listadas no material."]
];

var FEY = {
  p1:{ask:"Explique o que é o PPA: o que estabelece, para que despesas, com que vigência e prazo.",
    hint:"Diga “de forma regionalizada” antes de qualquer outra coisa — é o termo que vale ponto. Depois DOM, as três despesas, a vigência desencontrada do mandato e o prazo.",
    ref:"O plano plurianual é a lei que estabelece, de forma regionalizada, as diretrizes, os objetivos e as metas da administração pública federal para as despesas de capital e outras delas decorrentes e para as relativas aos programas de duração continuada, nos termos do art. 165, § 1º, da Constituição Federal. As despesas decorrentes das de capital são as que delas derivam, como a manutenção de uma rodovia construída; os programas de duração continuada são aqueles com duração superior a dois anos, conforme o art. 17 da LRF. É instrumento de planejamento de médio prazo, com vigência de quatro anos que se inicia no segundo ano de mandato do Chefe do Executivo e termina no primeiro ano do mandato seguinte, de modo que não coincide com o mandato. Seu envio ao Legislativo é competência privativa do Chefe do Executivo e deve ocorrer até quatro meses antes do encerramento do primeiro exercício financeiro do mandato, isto é, até 31 de agosto do primeiro ano. Organiza a ação de governo nos níveis estratégico — diretrizes, estratégias e macrodesafios — e tático — programas, objetivos, metas e indicadores."},
  p2:{ask:"Explique a LDO: sua função, o que ela compreende e os anexos que a LRF lhe acrescentou.",
    hint:"Comece pela metáfora do elo. Depois as cinco atribuições do art. 165 §2º e as cinco da LRF art. 4º. Não esqueça os dois anexos.",
    ref:"A lei de diretrizes orçamentárias é o elo entre o planejamento estratégico, consubstanciado no plano plurianual, e o planejamento operacional, materializado na lei orçamentária anual. Nos termos do art. 165, § 2º, da Constituição, a LDO compreenderá as metas e prioridades da administração pública federal, estabelecerá as diretrizes de política fiscal e respectivas metas em consonância com trajetória sustentável da dívida pública — exigência inserida pela EC nº 109/2021 —, orientará a elaboração da lei orçamentária anual, disporá sobre as alterações na legislação tributária e estabelecerá a política de aplicação das agências financeiras oficiais de fomento. O art. 4º da Lei de Responsabilidade Fiscal acrescentou que a LDO disporá sobre o equilíbrio entre receitas e despesas, sobre critérios e formas de limitação de empenho, sobre normas relativas ao controle de custos e à avaliação dos resultados dos programas e sobre condições e exigências para transferências de recursos a entidades públicas e privadas. Os §§ 1º e 3º do mesmo artigo integraram à LDO o Anexo de Metas Fiscais e o Anexo de Riscos Fiscais. Trata-se de instrumento de curto prazo que, embora anual, possui vigência superior a um ano."},
  p3:{ask:"Explique a LOA e os prazos de tramitação dos três instrumentos.",
    hint:"Na LOA, use os verbos exatos: prevê receita, fixa despesa. Depois monte a tabela de prazos de cabeça — encaminhamento e devolução.",
    ref:"A lei orçamentária anual é o orçamento por excelência, isto é, o orçamento propriamente dito, e representa o planejamento operacional: é o instrumento pelo qual o poder público prevê a arrecadação de receitas e fixa a realização de despesas para o exercício. Nos termos do art. 165, § 5º, da Constituição, compreende o orçamento fiscal, o orçamento de investimento das empresas em que a União detenha a maioria do capital social com direito a voto e o orçamento da seguridade social. Quanto aos prazos, o projeto de PPA deve ser encaminhado ao Legislativo até quatro meses antes do encerramento do primeiro exercício do mandato, em 31 de agosto do primeiro ano. O projeto de LDO deve ser encaminhado até oito meses e meio antes do encerramento do exercício, em 15 de abril, e devolvido ao Executivo até o encerramento do primeiro período da sessão legislativa, em 17 de julho. O projeto de LOA deve ser encaminhado até quatro meses antes do término do exercício, em 31 de agosto, e devolvido até o encerramento da sessão legislativa, em 22 de dezembro."},
  p4:{ask:"Explique o orçamento impositivo: a regra, as emendas e as três emendas constitucionais.",
    hint:"Aqui os números decidem a nota. Individuais, bancada, e as três ECs com o que cada uma fez.",
    ref:"Em regra, a lei orçamentária anual é lei de caráter autorizativo: o administrador público não está obrigado a realizar as despesas nela fixadas, ressalvadas as emendas impositivas. Esse quadro foi progressivamente alterado. A Emenda Constitucional nº 86/2015 tornou obrigatória a execução das programações decorrentes de emendas individuais de parlamentares até o limite de 1,2% da receita corrente líquida, e a obrigatoriedade também alcança as emendas de iniciativa de bancada de parlamentares de estados e do Distrito Federal, no montante correspondente a 1% da receita corrente líquida realizada no exercício anterior. A Emenda Constitucional nº 126/2022 elevou o limite das emendas individuais de 1,2% para 2%, nos termos do art. 166, § 9º, da Constituição. Por fim, a Emenda Constitucional nº 100/2019 introduziu o § 10 do art. 165, segundo o qual a administração tem o dever de executar as programações orçamentárias, adotando os meios e as medidas necessários para garantir a efetiva entrega de bens e serviços à sociedade, ampliando para todo o orçamento público o regime jurídico de execução. Daí sustentar parte da doutrina que a natureza jurídica do orçamento teria se convertido de autorizativa em impositiva."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  p1:[
    sl("Os três instrumentos",
      '<div class="box"><span class="bl">CF, art. 165</span><p>Leis de <b>iniciativa do Poder Executivo</b> estabelecerão: <b>I</b> o plano plurianual; <b>II</b> as diretrizes orçamentárias; <b>III</b> os orçamentos anuais.</p></div>'+
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">1</span><span class="nm">PPA</span></div><div class="fn-b"><p>Diretrizes, objetivos e metas para <b>4 anos</b>. Planejamento de <b>médio prazo</b>.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">2</span><span class="nm">LDO</span></div><div class="fn-b"><p>Metas e prioridades do ano seguinte; <b>orienta a elaboração da LOA</b>. Curto prazo.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">3</span><span class="nm">LOA</span></div><div class="fn-b"><p><b>Prevê</b> receitas e <b>fixa</b> despesas do ano. Planejamento <b>operacional</b>.</p></div></div></div>'+
      '<div class="box tip"><span class="bl">Em sentido amplo e estrito</span><p>Orçamento público em sentido <b>amplo</b> é a integração de PPA + LDO + LOA. Em sentido <b>estrito</b>, é a LOA.</p></div>')
  ],
  p2:[
    sl("PPA — o que a Constituição manda",
      '<div class="box"><span class="bl">CF, art. 165, § 1º</span><p>A lei que instituir o plano plurianual estabelecerá, <b>de forma regionalizada</b>, as <b>diretrizes, objetivos e metas</b> da administração pública federal para as <b>despesas de capital e outras delas decorrentes</b> e para as relativas aos <b>programas de duração continuada</b>.</p></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">D — Diretrizes</span><span class="cd">O rumo geral</span></div>'+
      '<div class="chip"><span class="cn">O — Objetivos</span><span class="cd">As escolhas de política pública</span></div>'+
      '<div class="chip"><span class="cn">M — Metas</span><span class="cd">A quantificação dos objetivos</span></div></div>'+
      '<div class="box trap"><span class="bl">O erro nº 1 do módulo</span><p>Dizer que o PPA estabelece em <b>âmbito nacional</b>. É <b>regionalizada</b>. Já caiu exatamente assim.</p></div>'),
    sl("As três despesas do PPA",
      '<ul><li><b>Despesas de capital</b> — as que contribuem para a aquisição de um bem. Ex.: construção de uma rodovia.</li>'+
      '<li><b>Outras despesas decorrentes das de capital</b> — as que derivam delas. Ex.: <b>manutenção</b> da rodovia construída.</li>'+
      '<li><b>Despesas relativas a programas de duração continuada</b> — as de duração <b>superior a dois anos</b> <span class="lawref">(LRF, art. 17)</span>.</li></ul>'+
      '<div class="box tip"><span class="bl">Regionalização — até onde vai</span>'+
      '<p>São exemplos de região: estados, municípios e macrorregiões (norte, nordeste, centro-oeste, sul e sudeste). É <b>permitida</b> a regionalização de metas que abranjam territórios <b>maiores</b> que as macrorregiões — região hidrográfica, bioma, territórios de identidade, área de relevante interesse mineral.</p></div>'+
      '<div class="box tip"><span class="bl">Públicos específicos</span><p>É <b>permitido</b> estabelecer metas direcionadas a públicos específicos: gênero, etnia, crianças, pessoa com deficiência, indígenas.</p></div>'),
    sl("PPA — prazo e vigência",
      '<div class="box"><span class="bl">Encaminhamento</span><p>Competência <b>privativa do Chefe do Executivo</b>. Até <b>4 meses antes do encerramento do 1º ano de mandato</b> — ou seja, <b>31 de agosto do 1º ano</b>.</p></div>'+
      '<div class="box"><span class="bl">Vigência</span><p><b>4 anos</b>, iniciando no <b>2º ano de mandato</b> e terminando no <b>1º ano do mandato seguinte</b>. <b>Não coincide</b> com o mandato.</p></div>'+
      '<div class="box tip"><span class="bl">Exemplo do resumo</span><p>Mandato de 01/01/2023 a 31/12/2026: o PPA vigora de <b>2024 a 2027</b> e deve ser encaminhado até <b>31/08/2023</b>.</p></div>'),
    sl("PPA — características",
      '<ul><li>Instrumento de planejamento de <b>médio prazo</b>.</li>'+
      '<li>Vigência de <b>4 anos</b>, iniciando no <b>2º ano</b> de mandato.</li>'+
      '<li>É <b>inovação da CF/1988</b> — assim como a LDO.</li>'+
      '<li>Possibilita a <b>participação social</b> <span class="lawref">(LRF, art. 48, § 1º)</span>.</li>'+
      '<li>Organiza a ação de governo nos níveis <b>estratégico</b> (diretrizes, estratégias e macrodesafios) e <b>tático</b> (programas, objetivos, metas e indicadores).</li></ul>'+
      '<div class="box"><span class="bl">Dimensão tática</span><p>Define os <b>caminhos exequíveis</b> para as transformações da realidade anunciadas nas diretrizes estratégicas, considerando as variáveis inerentes à política pública.</p></div>')
  ],
  p3:[
    sl("LDO — o elo",
      '<p>A LDO é o <span class="key">elo entre o planejamento estratégico (PPA) e o planejamento operacional (LOA)</span>.</p>'+
      '<div class="box"><span class="bl">CF, art. 165, § 2º — as cinco atribuições</span>'+
      '<ul><li>Compreenderá as <b>metas e prioridades</b> da administração pública federal;</li>'+
      '<li>Estabelecerá as <b>diretrizes de política fiscal</b> e respectivas metas, em consonância com <b>trajetória sustentável da dívida pública</b> <span class="lawref">(EC 109/2021)</span>;</li>'+
      '<li><b>Orientará a elaboração da LOA</b>;</li>'+
      '<li><b>Disporá sobre as alterações na legislação tributária</b>;</li>'+
      '<li>Estabelecerá a <b>política de aplicação das agências financeiras oficiais de fomento</b>.</li></ul></div>'),
    sl("LDO — o que a LRF acrescentou",
      '<div class="box"><span class="bl">LRF, art. 4º — a LDO disporá sobre</span>'+
      '<ul><li><b>Equilíbrio</b> entre receitas e despesas;</li>'+
      '<li>Critérios e formas de <b>limitação de empenho</b>;</li>'+
      '<li>Normas relativas ao <b>controle de custos</b>;</li>'+
      '<li>Normas relativas à <b>avaliação dos resultados</b> dos programas;</li>'+
      '<li><b>Condições e exigências para transferências</b> de recursos a entidades públicas e privadas.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Os dois anexos — LRF, art. 4º, §§ 1º e 3º</span>'+
      '<p><b>Anexo de Metas Fiscais (AMF)</b> e <b>Anexo de Riscos Fiscais (ARF)</b>. Integram a <b>LDO</b>, nunca a LOA.</p></div>'+
      '<div class="box"><span class="bl">Características da LDO</span>'+
      '<ul><li>Planejamento de <b>curto prazo</b>.</li>'+
      '<li>É <b>anual</b>, porém possui <b>vigência superior a um ano</b>.</li>'+
      '<li>É <b>inovação da CF/1988</b>.</li>'+
      '<li>Possibilita a <b>participação social</b>.</li>'+
      '<li>Contribui com <b>parâmetros para o acompanhamento da gestão fiscal</b>.</li></ul></div>'),
    sl("Quatro conceitos que a banca embaralha",
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Objetivos</span><span class="cd">As escolhas de políticas públicas para transformar determinada realidade.</span></div>'+
      '<div class="chip"><span class="cn">Metas</span><span class="cd">A <b>quantificação</b> dos objetivos.</span></div>'+
      '<div class="chip"><span class="cn">Produtos</span><span class="cd">As consequências das atividades realizadas em cada programa.</span></div>'+
      '<div class="chip"><span class="cn">Resultados</span><span class="cd">As mudanças na realidade social observadas no <b>curto prazo</b>.</span></div></div>'+
      '<div class="box tip"><span class="bl">Exemplo do resumo</span>'+
      '<p><b>Objetivo:</b> construir a rodovia XYZ para escoar a produção e interligar a região ABC. <b>Meta:</b> construir um terço da rodovia em até dois meses. <b>Produtos:</b> a rodovia, o escoamento da produção e a interligação.</p></div>')
  ],
  p4:[
    sl("LOA — o orçamento por excelência",
      '<p>A LOA é o <span class="key">orçamento propriamente dito</span> e representa o <b>planejamento operacional</b>: é o instrumento pelo qual o poder público <b>prevê</b> a arrecadação de receitas e <b>fixa</b> a realização de despesas.</p>'+
      '<div class="box"><span class="bl">CF, art. 165, § 5º — a LOA compreenderá</span>'+
      '<ul><li>O <b>orçamento fiscal</b>;</li>'+
      '<li>O <b>orçamento de investimento das empresas controladas pela União</b>;</li>'+
      '<li>O <b>orçamento da seguridade social</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">Guarde os verbos</span><p>Receita se <b>prevê</b>. Despesa se <b>fixa</b>. Trocar os dois é item errado.</p></div>'),
    sl("A tabela de prazos",
      '<div>'+
      '<div class="tl"><span class="tl-w">PPA</span><span class="tl-t">Encaminhamento até <b>31 de agosto do 1º ano de mandato</b> (4 meses antes do encerramento do 1º exercício).</span></div>'+
      '<div class="tl"><span class="tl-w">LDO</span><span class="tl-t">Encaminhamento até <b>15 de abril</b> (8 meses e meio antes do encerramento do exercício). Devolução até <b>17 de julho</b> — encerramento do <b>1º período</b> da sessão legislativa.</span></div>'+
      '<div class="tl"><span class="tl-w">LOA</span><span class="tl-t">Encaminhamento até <b>31 de agosto</b> (4 meses antes do término do exercício). Devolução até <b>22 de dezembro</b> — encerramento da sessão legislativa.</span></div></div>'+
      '<div class="box trap"><span class="bl">A troca que mais cai</span><p>Colocar a devolução da LDO em 22 de dezembro. A LDO volta em <b>17 de julho</b>; quem volta em dezembro é a <b>LOA</b>.</p></div>')
  ],
  p5:[
    sl("Orçamento impositivo",
      '<p>Princípio que define o <span class="key">dever de execução das programações orçamentárias</span>, superando o antigo debate sobre a natureza jurídica da lei orçamentária. Prevaleceu o <b>caráter vinculante</b>.</p>'+
      '<div>'+
      '<div class="tl"><span class="tl-w">Regra</span><span class="tl-t">A LOA é lei de caráter <b>autorizativo</b>: o administrador não é obrigado a realizar as despesas fixadas, <b>exceto</b> quanto às emendas impositivas.</span></div>'+
      '<div class="tl"><span class="tl-w">EC 86/2015</span><span class="tl-t">Tornou obrigatória a execução das <b>emendas individuais</b> até <b>1,2% da RCL</b>.</span></div>'+
      '<div class="tl"><span class="tl-w">Bancada</span><span class="tl-t">A obrigatoriedade também alcança as <b>emendas de bancada</b> de parlamentares de estados e do DF, em <b>1% da RCL realizada no exercício anterior</b>.</span></div>'+
      '<div class="tl"><span class="tl-w">EC 100/2019</span><span class="tl-t">Introduziu o <b>§ 10 do art. 165</b>: dever de executar as programações, para garantir a <b>efetiva entrega de bens e serviços à sociedade</b>.</span></div>'+
      '<div class="tl"><span class="tl-w">EC 126/2022</span><span class="tl-t">Elevou o limite das individuais de <b>1,2% para 2%</b> <span class="lawref">(CF, art. 166, § 9º)</span>.</span></div></div>'),
    sl("Natureza jurídica e controle",
      '<div class="box tip"><span class="bl">Conceitos que já caíram literalmente</span>'+
      '<ul><li>O orçamento é ato pelo qual o <b>Executivo prevê</b> e o <b>Legislativo autoriza</b> a execução das despesas.</li>'+
      '<li>Constitui-se em instrumento (lei) que <b>operacionaliza os programas setoriais e regionais</b>.</li>'+
      '<li>Em sentido estrito é a <b>LOA</b>; em sentido amplo, a integração de <b>PPA, LDO e LOA</b>.</li></ul></div>'+
      '<div class="box trap"><span class="bl">Guarde</span><p>O orçamento público <b>pode ser submetido a controle (abstrato ou concentrado) de constitucionalidade</b>.</p></div>')
  ]
};

var EX = {
g1:{t:"gap", instr:"Complete o art. 165, § 1º, da Constituição",
  before:"A lei que instituir o plano plurianual estabelecerá, de forma ",
  after:", as diretrizes, objetivos e metas da administração pública federal.",
  options:["regionalizada","nacional","setorial"], answer:0,
  why:"É o erro nº 1 do módulo. Dizer “em âmbito nacional” torna o item errado."},

g2:{t:"wordbank", instr:"Monte o que o PPA estabelece",
  target:["diretrizes,","objetivos","e","metas"],
  extra:["prioridades","limites","receitas"],
  why:"<b>DOM.</b> Metas e prioridades é o que compreende a <b>LDO</b>."},

g3:{t:"multi", instr:"Marque as despesas para as quais o PPA estabelece o DOM",
  options:["Despesas de capital",
           "Outras despesas decorrentes das despesas de capital",
           "Despesas relativas aos programas de duração continuada",
           "Todas as despesas correntes do exercício",
           "Despesas com pessoal e encargos sociais"],
  answers:[0,1,2],
  why:"São exatamente três, na literalidade do art. 165, § 1º."},

g4:{t:"gap", instr:"Complete a frase",
  before:"Programas de duração continuada são aqueles com duração superior a ", after:", segundo a LRF.",
  options:["dois anos","um ano","quatro anos"], answer:0,
  why:"Art. 17 da Lei de Responsabilidade Fiscal."},

g5:{t:"mc", instr:"A vigência do plano plurianual inicia-se:",
  options:["no 2º ano de mandato do Chefe do Executivo","no 1º ano de mandato",
           "no 3º ano de mandato","no ano seguinte ao término do mandato"], answer:0,
  why:"Vigora do 2º ano de um mandato ao 1º ano do mandato seguinte — <b>não coincide</b> com o mandato."},

g6:{t:"gap", instr:"Complete a frase",
  before:"O PPA deve ser encaminhado ao Legislativo até ", after:" do primeiro ano de mandato.",
  options:["31 de agosto","15 de abril","22 de dezembro"], answer:0,
  why:"Quatro meses antes do encerramento do primeiro exercício financeiro do mandato."},

g7:{t:"multi", instr:"Marque o que é verdadeiro sobre o PPA",
  options:["É instrumento de planejamento de médio prazo",
           "Tem vigência de quatro anos",
           "É inovação da CF/1988",
           "Possibilita a participação social",
           "Tem vigência coincidente com o mandato do Chefe do Executivo",
           "Estabelece o DOM em âmbito nacional"],
  answers:[0,1,2,3],
  why:"A vigência é desencontrada do mandato e a forma é regionalizada."},

g8:{t:"match", instr:"Correlacione o nível do PPA aos seus elementos",
  pairs:[["Estratégico","Diretrizes, estratégias e macrodesafios"],
         ["Tático","Programas, objetivos, metas e indicadores"]]},

g9:{t:"sort", instr:"O PPA pode ou não fazer isso?",
  buckets:["Pode","Não pode"],
  items:[["Regionalizar metas por bioma ou região hidrográfica",0],
         ["Estabelecer metas para gênero, etnia e pessoas com deficiência",0],
         ["Regionalizar por estados, municípios e macrorregiões",0],
         ["Estabelecer o DOM em âmbito nacional",1],
         ["Iniciar sua vigência no 1º ano do mandato",1]],
  why:"É permitida a regionalização em territórios <b>maiores</b> que as macrorregiões e a segmentação por públicos específicos."},

g10:{t:"gap", instr:"Complete a frase",
  before:"A LDO é o elo entre o planejamento ", after:" e o planejamento operacional.",
  options:["estratégico","tático","financeiro"], answer:0,
  why:"Estratégico é o PPA; operacional é a LOA."},

g11:{t:"multi", instr:"Marque o que a LDO compreenderá, segundo o art. 165, § 2º",
  options:["As metas e prioridades da administração pública federal",
           "As diretrizes de política fiscal e respectivas metas",
           "A orientação para a elaboração da lei orçamentária anual",
           "As alterações na legislação tributária",
           "A política de aplicação das agências financeiras oficiais de fomento",
           "A previsão de receitas e a fixação de despesas do exercício"],
  answers:[0,1,2,3,4],
  why:"A última é a função da <b>LOA</b>. As cinco primeiras são as atribuições constitucionais da LDO."},

g12:{t:"mc", instr:"A exigência de que a LDO estabeleça diretrizes de política fiscal em consonância com trajetória sustentável da dívida pública foi introduzida pela:",
  options:["EC nº 109/2021","EC nº 86/2015","EC nº 100/2019","EC nº 126/2022"], answer:0,
  why:"Novidade constitucional recente, cobrada em provas de 2023 em diante."},

g13:{t:"multi", instr:"Marque sobre o que a LDO dispõe, segundo o art. 4º da LRF",
  options:["Equilíbrio entre receitas e despesas",
           "Critérios e formas de limitação de empenho",
           "Normas relativas ao controle de custos",
           "Normas relativas à avaliação dos resultados dos programas",
           "Condições e exigências para transferências de recursos",
           "Classificação funcional da despesa"],
  answers:[0,1,2,3,4],
  why:"São cinco incisos. A classificação funcional não é matéria de LDO."},

g14:{t:"match", instr:"Correlacione o anexo ao instrumento que o contém",
  pairs:[["Anexo de Metas Fiscais","LDO"],["Anexo de Riscos Fiscais","LDO"],
         ["Orçamento de investimento","LOA"],["Diretrizes, objetivos e metas regionalizados","PPA"]]},

g15:{t:"mc", instr:"Sobre a vigência da LDO, é correto afirmar:",
  options:["É anual, porém possui vigência superior a um ano",
           "Tem vigência de quatro anos","Vigora apenas no exercício em que é aprovada",
           "Tem vigência coincidente com o PPA"], answer:0,
  why:"Aprovada em um exercício, orienta a elaboração e a execução da LOA do exercício seguinte."},

g16:{t:"match", instr:"Correlacione os quatro conceitos do PPA",
  pairs:[["Objetivos","Escolhas de políticas públicas para transformar a realidade"],
         ["Metas","A quantificação dos objetivos"],
         ["Produtos","Consequências das atividades realizadas em cada programa"],
         ["Resultados","Mudanças na realidade social no curto prazo"]]},

g17:{t:"wordbank", instr:"Monte a função da LOA",
  target:["prevê","a","arrecadação","de","receitas","e","fixa","as","despesas"],
  extra:["autoriza","executa","arrecada"],
  why:"Receita se <b>prevê</b>; despesa se <b>fixa</b>. Trocar os verbos torna o item errado."},

g18:{t:"multi", instr:"Marque o que a LOA compreende, segundo o art. 165, § 5º",
  options:["Orçamento fiscal",
           "Orçamento de investimento das empresas controladas pela União",
           "Orçamento da seguridade social",
           "Orçamento de todas as empresas com participação acionária da União",
           "Anexo de Metas Fiscais"],
  answers:[0,1,2],
  why:"O orçamento de investimento alcança as <b>controladas</b>; o AMF integra a LDO."},

g19:{t:"order", instr:"Ordene os prazos de encaminhamento ao longo do ano",
  items:["LDO — 15 de abril","PPA e LOA — 31 de agosto","LDO devolvida — 17 de julho antecede a LOA",
         "LOA devolvida — 22 de dezembro"],
  why:"A LDO abre o ciclo em abril e volta em julho; PPA e LOA são encaminhados em agosto e a LOA volta em dezembro."},

g20:{t:"sort", instr:"A qual instrumento pertence cada prazo?",
  buckets:["PPA","LDO","LOA"],
  items:[["Encaminhado até 31 de agosto do 1º ano de mandato",0],
         ["Encaminhado até 15 de abril",1],["Devolvido até 17 de julho",1],
         ["Encaminhado até 31 de agosto",2],["Devolvido até 22 de dezembro",2]],
  why:"A troca mais frequente é colocar a devolução da LDO em dezembro."},

g21:{t:"gap", instr:"Complete a frase",
  before:"A LDO deve ser devolvida ao Executivo até ", after:", encerramento do primeiro período da sessão legislativa.",
  options:["17 de julho","22 de dezembro","31 de agosto"], answer:0,
  why:"Quem volta em 22 de dezembro é a <b>LOA</b>."},

g22:{t:"match", instr:"Correlacione o instrumento ao seu horizonte de planejamento",
  pairs:[["PPA","Médio prazo — 4 anos"],["LDO","Curto prazo — orienta o ano seguinte"],
         ["LOA","Operacional — o exercício"]]},

g23:{t:"sort", instr:"Qual instrumento faz cada coisa?",
  buckets:["PPA","LDO","LOA"],
  items:[["Estabelece diretrizes, objetivos e metas regionalizados",0],
         ["Organiza a ação nos níveis estratégico e tático",0],
         ["Orienta a elaboração da lei orçamentária anual",1],
         ["Dispõe sobre alterações na legislação tributária",1],
         ["Contém o Anexo de Metas Fiscais",1],
         ["Prevê receitas e fixa despesas",2],
         ["Compreende os orçamentos fiscal, de investimento e da seguridade",2]],
  why:"Três instrumentos, três funções distintas. A LDO é a que liga os outros dois."},

g24:{t:"gap", instr:"Complete a frase",
  before:"A EC nº 126/2022 elevou o limite das emendas individuais impositivas de 1,2% para ",
  after:" da receita corrente líquida.", options:["2%","3%","1,5%"], answer:0,
  why:"CF, art. 166, § 9º."},

g25:{t:"gap", instr:"Complete a frase",
  before:"As emendas de bancada de parlamentares de estados e do DF são de execução obrigatória no montante de ",
  after:" da receita corrente líquida realizada no exercício anterior.",
  options:["1%","2%","1,2%"], answer:0,
  why:"Ponto frequentemente esquecido: além das individuais (2%), há o limite das emendas de bancada (1%)."},

g26:{t:"order", instr:"Ordene cronologicamente as emendas constitucionais",
  items:["EC 86/2015 — emendas individuais impositivas até 1,2% da RCL",
         "EC 100/2019 — § 10 do art. 165: dever de executar as programações",
         "EC 126/2022 — limite elevado para 2%"],
  why:"As três marcam a migração gradual do orçamento autorizativo para o impositivo."},

g27:{t:"multi", instr:"Marque o que é verdadeiro sobre o orçamento impositivo",
  options:["Em regra a LOA tem caráter autorizativo",
           "As emendas impositivas são exceção à regra",
           "A EC 100/2019 estabeleceu o dever de executar as programações orçamentárias",
           "O propósito é garantir a efetiva entrega de bens e serviços à sociedade",
           "A EC 86/2015 fixou o limite das emendas individuais em 2%",
           "O orçamento não pode ser submetido a controle de constitucionalidade"],
  answers:[0,1,2,3],
  why:"A EC 86/2015 fixou <b>1,2%</b>, e o orçamento <b>pode</b> ser submetido a controle abstrato."},

g28:{t:"mc", instr:"O plano plurianual é instrumento de planejamento de:",
  options:["médio prazo","curto prazo","longo prazo","prazo indeterminado"], answer:0,
  why:"PPA médio prazo · LDO curto prazo · LOA operacional."}
};

for(var i=0;i<QS.length;i++) EX["u"+i]={t:"ce", qi:i};

var KIT = {
  p1:{tema:"Plano plurianual",
    bases:["CF/1988, art. 165, I e § 1º — instituição e conteúdo do PPA",
           "CF/1988, art. 35, § 2º, I, do ADCT — prazo de encaminhamento",
           "LC nº 101/2000, art. 17 — despesa obrigatória de caráter continuado",
           "LC nº 101/2000, art. 48, § 1º — participação social"],
    ouro:["de forma regionalizada","diretrizes, objetivos e metas",
          "despesas de capital e outras delas decorrentes","programas de duração continuada",
          "planejamento de médio prazo","segundo ano de mandato","iniciativa privativa do Chefe do Executivo",
          "nível estratégico","nível tático"],
    abertura:"O plano plurianual, previsto no art. 165, I, da Constituição Federal, estabelece de forma regionalizada as diretrizes, os objetivos e as metas da administração pública para as despesas de capital e outras delas decorrentes e para as relativas aos programas de duração continuada.",
    evite:"Nunca escreva “em âmbito nacional”. A expressão constitucional é “de forma regionalizada”, e é ela que vale o ponto."},
  p2:{tema:"Lei de diretrizes orçamentárias",
    bases:["CF/1988, art. 165, II e § 2º — conteúdo da LDO",
           "LC nº 101/2000, art. 4º — o que a LDO disporá",
           "LC nº 101/2000, art. 4º, §§ 1º e 3º — AMF e ARF",
           "EC nº 109/2021 — diretrizes de política fiscal"],
    ouro:["elo entre planejamento estratégico e operacional","metas e prioridades",
          "diretrizes de política fiscal","trajetória sustentável da dívida pública",
          "orientará a elaboração da LOA","alterações na legislação tributária",
          "agências financeiras oficiais de fomento","limitação de empenho",
          "Anexo de Metas Fiscais","Anexo de Riscos Fiscais"],
    abertura:"A lei de diretrizes orçamentárias, prevista no art. 165, II, da Constituição Federal, constitui o elo entre o planejamento estratégico do plano plurianual e o planejamento operacional da lei orçamentária anual.",
    evite:"Não atribua os anexos de metas e riscos fiscais à LOA. Ambos integram a LDO, por força do art. 4º da LRF."},
  p3:{tema:"Lei orçamentária anual e prazos",
    bases:["CF/1988, art. 165, III e § 5º — conteúdo da LOA",
           "CF/1988, art. 35, § 2º, II e III, do ADCT — prazos de LDO e LOA",
           "CF/1988, art. 166 — apreciação pelo Congresso",
           "Lei nº 4.320/1964, art. 2º — conteúdo da proposta orçamentária"],
    ouro:["orçamento por excelência","planejamento operacional","prevê a arrecadação de receitas",
          "fixa a realização de despesas","orçamento fiscal","orçamento de investimento",
          "orçamento da seguridade social","encerramento da sessão legislativa"],
    abertura:"A lei orçamentária anual é o orçamento propriamente dito e representa o planejamento operacional: por meio dela o poder público prevê a arrecadação das receitas e fixa a realização das despesas do exercício.",
    evite:"Não troque os verbos. Receita se prevê, despesa se fixa — e a devolução da LDO é em julho, não em dezembro."},
  p4:{tema:"Orçamento impositivo",
    bases:["CF/1988, art. 165, § 10 — dever de execução (EC nº 100/2019)",
           "CF/1988, art. 166, § 9º — limite de 2% (EC nº 126/2022)",
           "EC nº 86/2015 — emendas individuais até 1,2% da RCL",
           "CF/1988, art. 166, §§ 11 a 20 — execução das emendas"],
    ouro:["caráter autorizativo","emendas impositivas","emendas individuais","emendas de bancada",
          "receita corrente líquida","dever de executar as programações orçamentárias",
          "efetiva entrega de bens e serviços à sociedade","caráter vinculante","natureza híbrida"],
    abertura:"Em regra, a lei orçamentária anual ostenta caráter autorizativo, de modo que a fixação da despesa não obriga o administrador à sua realização; esse quadro, contudo, foi progressivamente mitigado pelo regime das emendas impositivas.",
    evite:"Não troque os percentuais: 1,2% é a EC 86/2015, 2% é a EC 126/2022 e 1% é o limite das emendas de bancada."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. Este é o tema mais “decorável” do edital: datas e percentuais exatos valem mais que retórica.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre os instrumentos de planejamento orçamentário previstos no art. 165 da Constituição Federal, disserte necessariamente sobre:</p>'+
  '<ol><li>o conteúdo e a vigência do plano plurianual;</li>'+
  '<li>a função da lei de diretrizes orçamentárias e o conteúdo que a Lei de Responsabilidade Fiscal lhe acrescentou;</li>'+
  '<li>o conteúdo da lei orçamentária anual e os prazos de encaminhamento e devolução dos três instrumentos.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>O art. 165 da Constituição Federal atribui ao Poder Executivo a iniciativa das leis que estabelecem o plano plurianual, as diretrizes orçamentárias e os orçamentos anuais. O <b>plano plurianual</b>, nos termos do § 1º do referido artigo, estabelecerá, <b>de forma regionalizada</b>, as diretrizes, os objetivos e as metas da administração pública federal para as despesas de capital e outras delas decorrentes e para as relativas aos programas de duração continuada — estes últimos, segundo o art. 17 da Lei de Responsabilidade Fiscal, os de duração superior a dois anos. Trata-se de instrumento de planejamento de médio prazo, com vigência de quatro anos que se inicia no segundo ano de mandato do Chefe do Executivo e se encerra no primeiro ano do mandato seguinte, de modo que <b>não coincide com o mandato</b>. Organiza a ação governamental nos níveis estratégico, que reúne diretrizes, estratégias e macrodesafios, e tático, que reúne programas, objetivos, metas e indicadores.</p>'+
  '<p>A <b>lei de diretrizes orçamentárias</b> constitui o elo entre o planejamento estratégico do plano plurianual e o planejamento operacional da lei orçamentária anual. Conforme o art. 165, § 2º, da Constituição, compreenderá as metas e prioridades da administração pública federal, estabelecerá as diretrizes de política fiscal e respectivas metas em consonância com trajetória sustentável da dívida pública — exigência introduzida pela EC nº 109/2021 —, orientará a elaboração da lei orçamentária anual, disporá sobre as alterações na legislação tributária e estabelecerá a política de aplicação das agências financeiras oficiais de fomento. O art. 4º da Lei de Responsabilidade Fiscal ampliou esse conteúdo, determinando que a LDO disponha sobre o equilíbrio entre receitas e despesas, sobre critérios e formas de limitação de empenho, sobre normas relativas ao controle de custos e à avaliação dos resultados dos programas e sobre condições e exigências para transferências de recursos a entidades públicas e privadas; e os §§ 1º e 3º do mesmo artigo integraram à LDO o <b>Anexo de Metas Fiscais</b> e o <b>Anexo de Riscos Fiscais</b>.</p>'+
  '<p>A <b>lei orçamentária anual</b>, por sua vez, é o orçamento por excelência e representa o planejamento operacional: por meio dela o poder público prevê a arrecadação de receitas e fixa a realização de despesas. Nos termos do art. 165, § 5º, compreende o orçamento fiscal, o orçamento de investimento das empresas em que a União detenha a maioria do capital social com direito a voto e o orçamento da seguridade social.</p>'+
  '<p>Quanto aos <b>prazos</b>, o projeto de plano plurianual deve ser encaminhado ao Legislativo até quatro meses antes do encerramento do primeiro exercício financeiro do mandato, em 31 de agosto do primeiro ano. O projeto de lei de diretrizes orçamentárias deve ser encaminhado até oito meses e meio antes do encerramento do exercício, em 15 de abril, e devolvido ao Executivo até o encerramento do primeiro período da sessão legislativa, em 17 de julho. O projeto de lei orçamentária anual deve ser encaminhado até quatro meses antes do término do exercício, em 31 de agosto, e devolvido até o encerramento da sessão legislativa, em 22 de dezembro.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> a expressão <b>“de forma regionalizada”</b> e a vigência que <b>não coincide</b> com o mandato. Citar o art. 17 da LRF para duração continuada vale ponto extra.</li>'+
  '<li><b>Item 2:</b> as cinco atribuições constitucionais mais as cinco da LRF, e obrigatoriamente os <b>dois anexos</b>.</li>'+
  '<li><b>Item 3:</b> os verbos <b>prevê / fixa</b>, os três orçamentos do § 5º e as <b>cinco datas</b> sem erro.</li>'+
  '<li><b>Fecho:</b> com 30 linhas, este tema não sobra espaço para conclusão. Gaste as últimas linhas nas datas.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Aponte o erro de cada item em uma frase, com o dispositivo entre parênteses.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>O governador de determinado estado, eleito para o mandato de 2027 a 2030, adota as seguintes providências:</p>'+
  '<ol><li>encaminha à Assembleia, em março de 2027, o projeto de plano plurianual com vigência de 2027 a 2030, estabelecendo as diretrizes, objetivos e metas em âmbito estadual unificado, sem regionalização;</li>'+
  '<li>encaminha o projeto de LDO em 30 de junho de 2027;</li>'+
  '<li>inclui na LDO o anexo de metas fiscais, mas suprime o anexo de riscos fiscais, por entender que a LRF o teria tornado facultativo;</li>'+
  '<li>encaminha o projeto de LOA em 31 de agosto, contemplando apenas o orçamento fiscal;</li>'+
  '<li>declara que não executará emenda individual de parlamentar situada dentro do limite de 2% da receita corrente líquida, por ser a LOA lei autorizativa.</li></ol>'+
  '<p><b>Pergunta-se:</b> aponte as irregularidades, com fundamento constitucional e legal.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1. PPA.</b> Duas irregularidades. A vigência está errada: o PPA vigora do <b>segundo ano</b> de mandato ao <b>primeiro ano do mandato seguinte</b>, ou seja, de 2028 a 2031, e não de 2027 a 2030. E o conteúdo está errado: o art. 165, § 1º, exige que o DOM seja estabelecido <b>de forma regionalizada</b>, sendo vedada a formulação unificada.</p>'+
  '<p><b>2. LDO.</b> Irregular quanto ao prazo. O encaminhamento deve ocorrer até <b>oito meses e meio antes do encerramento do exercício</b>, isto é, até <b>15 de abril</b>. Em 30 de junho o prazo já se encontrava vencido.</p>'+
  '<p><b>3. Anexo de riscos fiscais.</b> Irregular. Os §§ 1º e 3º do art. 4º da Lei de Responsabilidade Fiscal integraram à LDO <b>tanto o Anexo de Metas Fiscais quanto o Anexo de Riscos Fiscais</b>; nenhum deles é facultativo.</p>'+
  '<p><b>4. LOA.</b> O prazo está correto — 31 de agosto, quatro meses antes do término do exercício. O conteúdo, porém, é incompleto: o art. 165, § 5º, determina que a LOA compreenda o <b>orçamento fiscal</b>, o <b>orçamento de investimento</b> das empresas em que o ente detenha a maioria do capital social com direito a voto e o <b>orçamento da seguridade social</b>.</p>'+
  '<p><b>5. Emenda individual.</b> Irregular. A regra do caráter autorizativo comporta a exceção das <b>emendas impositivas</b>: desde a EC nº 86/2015 a execução das emendas individuais é obrigatória, com limite elevado a <b>2% da receita corrente líquida</b> pela EC nº 126/2022 (CF, art. 166, § 9º). Estando a emenda dentro do limite, sua execução é dever, e não faculdade — raciocínio reforçado pelo § 10 do art. 165, introduzido pela EC nº 100/2019.</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>Aceitar a vigência do PPA como coincidente com o mandato. Ela é <b>desencontrada</b>.</li>'+
  '<li>Confundir o prazo da LDO (15 de abril) com o da LOA (31 de agosto).</li>'+
  '<li>Tratar o ARF como facultativo. Os dois anexos são obrigatórios.</li>'+
  '<li>Aceitar a recusa de execução invocando o caráter autorizativo. A emenda impositiva é a exceção.</li></ul></div>';

var TEC = [["CESPE","Q3bf55"],["FCC","Q3bf5H"],["FGV","Q3bf5T"],["VUNESP","Q3bf5h"]];

var UNITS = [
  {n:1, title:"Plano plurianual", cvar:"u1", lessons:[
    {id:"n1", type:"teoria", title:"Os três instrumentos",             xp:10, data:"p1"},
    {id:"n2", type:"drill",  title:"Praticar · visão geral",           xp:20, data:["g28","g22","u0","u9"]},
    {id:"n3", type:"teoria", title:"PPA — conteúdo e regionalização",  xp:10, data:"p2"},
    {id:"n4", type:"drill",  title:"Praticar · conteúdo do PPA",       xp:25, data:["g1","g2","g3","g4","u1","u2","u3"]},
    {id:"n5", type:"drill",  title:"Praticar · regionalização",        xp:20, data:["g9","u4","u5"]},
    {id:"n6", type:"drill",  title:"Praticar · prazo e vigência",      xp:25, data:["g5","g6","g7","g8","u6","u7","u8","u12","u36"]},
    {id:"n7", type:"flash",  title:"Flashcards · PPA",                 xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13]},
    {id:"n8", type:"feynman",title:"Explique o PPA",                   xp:30, data:"p1"}
  ]},
  {n:2, title:"Lei de diretrizes orçamentárias", cvar:"u2", lessons:[
    {id:"n10",type:"teoria", title:"LDO — o elo",                      xp:10, data:"p3"},
    {id:"n11",type:"drill",  title:"Praticar · conteúdo da LDO",       xp:25, data:["g10","g11","g12","u13","u14","u15","u16","u17"]},
    {id:"n12",type:"drill",  title:"Praticar · LDO na LRF",            xp:25, data:["g13","g14","g15","u20","u21","u22","u37"]},
    {id:"n13",type:"drill",  title:"Praticar · metas e objetivos",     xp:20, data:["g16","u23","u24"]},
    {id:"n14",type:"flash",  title:"Flashcards · LDO",                 xp:15, data:[14,15,16,17,18,19,20,21,22]},
    {id:"n15",type:"feynman",title:"Explique a LDO",                   xp:30, data:"p2"}
  ]},
  {n:3, title:"LOA e prazos", cvar:"u3", lessons:[
    {id:"n17",type:"teoria", title:"LOA — o orçamento por excelência", xp:10, data:"p4"},
    {id:"n18",type:"drill",  title:"Praticar · conteúdo da LOA",       xp:25, data:["g17","g18","u25","u26","u29","u30"]},
    {id:"n19",type:"drill",  title:"Praticar · prazos",                xp:25, data:["g19","g20","g21","u18","u19","u27","u28"]},
    {id:"n20",type:"drill",  title:"Praticar · quem faz o quê",        xp:25, data:["g23","u31"]},
    {id:"n21",type:"flash",  title:"Flashcards · LOA e prazos",        xp:15, data:[23,24,25,26,30]},
    {id:"n22",type:"feynman",title:"Explique a LOA e os prazos",       xp:30, data:"p3"}
  ]},
  {n:4, title:"Orçamento impositivo e prova", cvar:"u4", lessons:[
    {id:"n24",type:"teoria", title:"Orçamento impositivo",             xp:10, data:"p5"},
    {id:"n25",type:"drill",  title:"Praticar · emendas impositivas",   xp:25, data:["g24","g25","g26","g27","u32","u33","u34","u35","u10","u11"]},
    {id:"n26",type:"flash",  title:"Flashcards · impositivo",          xp:15, data:[27,28,29]},
    {id:"n27",type:"feynman",title:"Explique o orçamento impositivo",  xp:30, data:"p4"},
    {id:"n29",type:"leitura",title:"Discursiva resolvida",             xp:25, data:"disc"},
    {id:"n30",type:"leitura",title:"Estudo de caso resolvido",         xp:25, data:"caso"},
    {id:"nrev",type:"review",title:"Revisão geral das unidades",       xp:60, data:null},
    {id:"n31",type:"missao", title:"Missão TEC Concursos",             xp:15, data:null},
    {id:"n32",type:"prova",  title:"Simulado cronometrado",            xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo. É o art. 165 da CF transcrito no Resumo: <b>leis de iniciativa do Poder Executivo</b> estabelecerão I – o plano plurianual; II – as diretrizes orçamentárias; III – os orçamentos anuais.</p><p>Em sentido amplo, orçamento público é a junção de PPA, LDO e LOA; em sentido estrito, é a LOA.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Instrumentos de Planejamento — CF, art. 165</i></p>",
1:"<p>Errado — é a QUESTÃO-EXEMPLO do Resumo, marcada ERRADO. O PPA estabelece as diretrizes, os objetivos e as metas <b>de forma regionalizada</b>, e não em âmbito nacional.</p><p>A OBSERVAÇÃO 02 grifa: \"de forma regionalizada (não é de forma nacional)\". Mnemônico do material: o PPA traz o <b>DOM</b> (Diretrizes, Objetivos e Metas) regionalizado.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Plano Plurianual — QUESTÃO-EXEMPLO</i></p>",
2:"<p>Certo. É o § 1º do art. 165 da CF, esquematizado no Resumo: o PPA estabelecerá, de forma regionalizada, o <b>DOM</b> para <b>as despesas de capital</b>, <b>outras delas decorrentes</b> e <b>as relativas aos programas de duração continuada</b>.</p><p>Exemplo do material: construir uma rodovia é despesa de capital; a manutenção da rodovia construída é despesa decorrente.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Plano Plurianual — OBSERVAÇÕES 01 a 04</i></p>",
3:"<p>Certo. OBSERVAÇÃO 05 do Resumo: as despesas relativas aos programas de duração continuada são aquelas com <b>duração superior a 2 anos</b> (LRF, art. 17).</p><p>Elas compõem o trio do PPA, ao lado das despesas de capital e das delas decorrentes.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Plano Plurianual — OBSERVAÇÃO 05</i></p>",
4:"<p>Errado — é o contrário. OBSERVAÇÃO 07 do Resumo: <b>é permitida</b> a regionalização de metas que abranjam territórios maiores que as macrorregiões.</p><p>Exemplos do material: <b>região hidrográfica, bioma, territórios de identidade, área de relevante interesse mineral</b>. As regiões comuns são Estados, Municípios e macrorregiões.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Plano Plurianual — OBSERVAÇÕES 06 e 07</i></p>",
5:"<p>Certo. OBSERVAÇÃO 08 do Resumo: no PPA, <b>é permitido</b> o estabelecimento de metas direcionadas a públicos específicos.</p><p>Os exemplos do material: <b>gênero, etnia, crianças, pessoa com deficiência, índios</b>.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Plano Plurianual — OBSERVAÇÃO 08</i></p>",
6:"<p>Certo. OBSERVAÇÃO 09 do Resumo: o envio do PPA para o Legislativo é <b>competência privativa do Chefe do Executivo</b>.</p><p>Coerente com o art. 165 da CF: PPA, LDO e LOA são leis de iniciativa do Poder Executivo.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Plano Plurianual — OBSERVAÇÃO 09</i></p>",
7:"<p>Certo. OBSERVAÇÃO 10 do Resumo: o PPA deve ser encaminhado até 4 meses antes do encerramento do 1º ano de mandato, ou seja, <b>até 31 de agosto do 1º ano de mandato</b>.</p><p>EXEMPLO do material: mandato de 01/01/2023 a 31/12/2026 → PPA enviado até 31/08/2023, com vigência de 2024 a 2027.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Plano Plurianual — OBSERVAÇÃO 10</i></p>",
8:"<p>Errado no marco inicial. A vigência do PPA <b>se inicia no 2º ano de mandato</b> do Chefe do Executivo.</p><p>No EXEMPLO do Resumo: mandato de 2023 a 2026, PPA enviado até 31/08/2023 e vigente de <b>2024 a 2027</b>. No 1º ano, o Executivo ainda executa o PPA do antecessor.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Plano Plurianual — OBSERVAÇÃO 10</i></p>",
9:"<p>Errado. Nas características do PPA, o Resumo diz que ele é <b>instrumento de planejamento de médio prazo</b>, com vigência de 4 anos.</p><p>Curto prazo é a <b>LDO</b>. A OBSERVAÇÃO 11 reforça: o PPA traz as diretrizes, objetivos e metas de MÉDIO PRAZO, como as grandes obras dos 4 anos seguintes.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Características do PPA</i></p>",
10:"<p>Certo. Característica do PPA no Resumo: tem como foco a organização da ação de governo nos níveis <b>Estratégico</b> (Diretrizes, Estratégias e Macrodesafios) e <b>Tático</b> (Programas, Objetivos, Metas, Indicadores).</p><p>Guarde o que vai em cada nível — a banca costuma trocar os itens.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Características do PPA</i></p>",
11:"<p>Certo. Literal do ATENÇÃO do Resumo: a <b>dimensão tática</b> do PPA define os <b>caminhos exequíveis</b> para as transformações da realidade anunciadas nas <b>diretrizes estratégicas</b>.</p><p>O EXEMPLO do material: diante da diretriz de reduzir o desemprego num município, a dimensão tática mapeia áreas com potencial de emprego, fortalece setores e cria programas de capacitação.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Plano Plurianual — ATENÇÃO</i></p>",
12:"<p>Certo. O Resumo registra nas características do PPA: \"É inovação da CF/88 (assim como a LDO)\". E nas da LDO: \"É uma inovação da CF/88 (assim como o PPA)\".</p><p>A dupla aparece espelhada nos dois quadros de propósito.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Características do PPA e da LDO</i></p>",
13:"<p>Certo. Abertura da seção no Resumo: a LDO é o <b>elo</b> entre o planejamento estratégico (<b>PPA</b>) e o planejamento operacional (<b>LOA</b>).</p><p>Por isso ela orienta a elaboração da LOA e compreende as metas e prioridades da administração.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Lei de Diretrizes Orçamentárias (LDO)</i></p>",
14:"<p>Certo. É o § 2º do art. 165 da CF, no esquema do Resumo: a LDO <b>compreenderá as metas e prioridades</b> da administração pública federal e <b>orientará a elaboração da LOA</b>.</p><p>Completam o esquema: diretrizes de política fiscal e metas; alterações na legislação tributária; política das agências financeiras oficiais de fomento.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>LDO — CF, art. 165, § 2º</i></p>",
15:"<p>Certo. Está no esquema do § 2º do art. 165 no Resumo: a LDO <b>disporá sobre as alterações na legislação tributária</b>.</p><p>Guarde os cinco verbos do esquema: compreenderá (metas e prioridades), estabelecerá (política fiscal), orientará (a LOA), disporá (legislação tributária), estabelecerá (agências de fomento).</p><p class='fb-fonte'>AFO — Resumo 04 · <i>LDO — CF, art. 165, § 2º</i></p>",
16:"<p>Errado — trocou a lei. Estabelecer a <b>política de aplicação das agências financeiras oficiais de fomento</b> é conteúdo da <b>LDO</b>, conforme o § 2º do art. 165 no Resumo.</p><p>A LOA é o instrumento que <b>prevê</b> receitas e <b>fixa</b> despesas e compreende os orçamentos fiscal, de investimento e da seguridade social.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>LDO — CF, art. 165, § 2º</i></p>",
17:"<p>Certo. No esquema da LDO, o Resumo marca como <b>NOVIDADE – EC 109/2021</b> o item \"estabelecerá as diretrizes de política fiscal e respectivas metas\", e o texto completa: <b>em consonância com trajetória sustentável da dívida pública</b>.</p><p>É o item mais recente do § 2º, por isso é o que mais aparece em prova.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>LDO — CF, art. 165, § 2º</i></p>",
18:"<p>Certo. ATENÇÃO do Resumo: o prazo de encaminhamento da LDO é de <b>8 meses e meio</b> antes do encerramento do exercício, ou seja, <b>até 15 de abril</b>.</p><p>A devolução ao Executivo é até o encerramento do 1º período da sessão legislativa (<b>17 de julho</b>).</p><p class='fb-fonte'>AFO — Resumo 04 · <i>LDO — ATENÇÃO / Prazo de encaminhamento</i></p>",
19:"<p>Errado — trocou as datas de devolução. A LDO é devolvida até o encerramento do <b>1º período</b> da sessão legislativa, <b>17 de julho</b>.</p><p>O 22 de dezembro é o prazo de devolução da <b>LOA</b>. No quadro PRAZO DE ENCAMINHAMENTO: LDO 15/04 → 17/07; LOA 31/08 → 22/12.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Prazo de encaminhamento — LDO x LOA</i></p>",
20:"<p>Certo. OBSERVAÇÃO 01 da LDO no Resumo: o art. 4º da LRF estabelece que a LDO disporá sobre <b>equilíbrio entre receitas e despesas</b> e <b>critérios e formas de limitação de empenho</b>.</p><p>Também: controle de custos, avaliação dos resultados dos programas e condições para transferências a entidades públicas e privadas.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>LDO — OBSERVAÇÃO 01</i></p>",
21:"<p>Errado — trocou a lei. OBSERVAÇÃO 02 do Resumo: os §§ 1º e 3º do art. 4º da LRF incluíram na <b>LDO</b> dois anexos — <b>Anexo de Metas Fiscais (AMF)</b> e <b>Anexo de Riscos Fiscais (ARF)</b>.</p><p>Associe: art. 4º da LRF = LDO.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>LDO — OBSERVAÇÃO 02</i></p>",
22:"<p>Certo. Característica da LDO no Resumo: <b>é anual, porém possui vigência superior a 1 ano</b>.</p><p>Faz sentido pelo calendário do material: é enviada até 15 de abril e devolvida até 17 de julho, passando a orientar a LOA do ano seguinte. É instrumento de planejamento de curto prazo.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Características da LDO</i></p>",
23:"<p>Errado — trocou os conceitos. Escolhas de políticas públicas para transformar a realidade são os <b>objetivos</b> (OBSERVAÇÃO 04). <b>Metas</b> são a <b>quantificação dos objetivos</b> (OBSERVAÇÃO 03).</p><p>Exemplos do material: objetivo = construir a rodovia XYZ para escoar a produção e interligar a região \"ABC\"; meta = construir <b>um terço da rodovia XYZ em até 2 meses</b>.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>LDO — OBSERVAÇÕES 03 e 04</i></p>",
24:"<p>Certo. OBSERVAÇÃO 06 do Resumo: no âmbito do PPA, os <b>produtos</b> compreendem as consequências das atividades realizadas em cada programa, enquanto os <b>resultados</b> são as mudanças na realidade social observadas no curto prazo.</p><p>No exemplo da rodovia XYZ, são 3 produtos: a rodovia, o escoamento da produção e a interligação da região \"ABC\" com outros Estados.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>LDO — OBSERVAÇÕES 05 e 06</i></p>",
25:"<p>Certo. Abertura da seção no Resumo: a LOA é o <b>orçamento por excelência</b>, ou seja, o <b>orçamento propriamente dito</b>, e representa o <b>planejamento operacional</b>.</p><p>Encaixe: PPA = estratégico; LOA = operacional; LDO = o elo entre os dois.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Lei Orçamentária Anual (LOA)</i></p>",
26:"<p>Certo. Característica da LOA no Resumo: é o instrumento pelo qual o poder público <b>PREVÊ</b> a arrecadação de receitas e <b>FIXA</b> a realização de despesas.</p><p>Guarde os verbos em maiúsculas do material: receita se <b>prevê</b>, despesa se <b>fixa</b>.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Características da LOA</i></p>",
27:"<p>Errado na data. OBSERVAÇÃO 01 da LOA: o projeto é encaminhado <b>4 meses antes do término do exercício financeiro (31 de agosto)</b>.</p><p>Quadro do material: LDO até 15/04 (devolução 17/07); LOA até 31/08 (devolução 22/12). O 31 de agosto também é o prazo do PPA no 1º ano de mandato.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>LOA — OBSERVAÇÃO 01</i></p>",
28:"<p>Certo. OBSERVAÇÃO 01 da LOA no Resumo: devolvida ao Executivo <b>até o encerramento da sessão legislativa (22 de dezembro)</b>.</p><p>Não confunda com a LDO, devolvida até o encerramento do <b>1º período</b> da sessão legislativa (17 de julho).</p><p class='fb-fonte'>AFO — Resumo 04 · <i>LOA — OBSERVAÇÃO 01</i></p>",
29:"<p>Certo. OBSERVAÇÃO 02 do Resumo: o § 5º do art. 165 da CF dispõe que a LOA compreenderá o <b>Orçamento Fiscal</b>, o <b>Orçamento de Investimento das empresas controladas pela União</b> e o <b>Orçamento da Seguridade Social</b>.</p><p>São os três orçamentos autônomos que a totalidade consolida (Resumo 03).</p><p class='fb-fonte'>AFO — Resumo 04 · <i>LOA — OBSERVAÇÃO 02</i></p>",
30:"<p>Errado. Segundo a OBSERVAÇÃO 02 do Resumo, o orçamento de investimento é o <b>das empresas controladas pela União</b>, e não de toda empresa em que ela tenha qualquer participação acionária.</p><p>A palavra-chave é <b>controladas</b>.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>LOA — OBSERVAÇÃO 02</i></p>",
31:"<p>Certo. O Resumo registra a mesma característica nos três quadros: PPA, LDO e LOA são instrumentos que <b>possibilitam a participação social</b> (LRF, art. 48, § 1º).</p><p>É o ponto em comum entre as três leis.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Características do PPA, da LDO e da LOA</i></p>",
32:"<p>Certo. O Resumo registra: a EC 86/2015 tornou obrigatória a execução das emendas individuais até <b>1,2% da RCL</b>, e em 2022 a <b>EC 126</b> alterou esse limite de <b>1,2% para 2%</b> (CF, art. 166, § 9º).</p><p>Guarde a linha do tempo: EC 86/2015 → 1,2%; EC 126/2022 → 2%.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Orçamento Impositivo — OBS.</i></p>",
33:"<p>Certo. No EXPLICANDO MELHOR do Resumo: a obrigatoriedade de execução também se aplica às emendas de iniciativa de <b>bancada</b> de parlamentares de Estados e do DF, no montante correspondente a <b>1% da RCL realizada no exercício anterior</b>.</p><p>Não misture os percentuais: individuais 2% (antes 1,2%); bancada 1%.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Orçamento Impositivo — EXPLICANDO MELHOR</i></p>",
34:"<p>Certo. O Resumo diz que o dever de executar as programações da lei orçamentária foi inserido pela <b>EC 100/2019</b>, no <b>§ 10 do art. 165</b> da CF, ampliando para todo o orçamento o regime jurídico de execução.</p><p>O material registra a corrente doutrinária segundo a qual isso transformou a natureza do orçamento de <b>autorizativo</b> para <b>impositivo</b> — e que isso já caiu em prova.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Orçamento Impositivo</i></p>",
35:"<p>Certo. OBSERVAÇÃO 01 do Resumo: em regra, a LOA é uma lei de <b>caráter autorizativo</b> — o administrador não é obrigado a realizar as despesas fixadas —, <b>exceto quanto às emendas impositivas</b> dos parlamentares.</p><p>Com a EC 86/2015, parte do orçamento deixou de ser meramente autorizativo e tornou-se impositivo.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Instrumentos Orçamentários — OBSERVAÇÕES</i></p>",
36:"<p>Errado. O PPA tem vigência de 4 anos, mas <b>não coincide</b> com o mandato: sua vigência se inicia no <b>2º ano</b> de mandato do Chefe do Executivo.</p><p>EXEMPLO do Resumo: mandato de 2023 a 2026, PPA vigente de <b>2024 a 2027</b>.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Plano Plurianual — OBSERVAÇÃO 10</i></p>",
37:"<p>Certo. Última característica da LDO no Resumo: <b>contribui com parâmetros para o acompanhamento da gestão fiscal</b>.</p><p>Faz sentido com o art. 4º da LRF: a LDO traz o Anexo de Metas Fiscais e o Anexo de Riscos Fiscais.</p><p class='fb-fonte'>AFO — Resumo 04 · <i>Características da LDO</i></p>",
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"04", nome:"Instrumentos: PPA, LDO e LOA", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, PROVA_POOL:PROVA_POOL};
})();
