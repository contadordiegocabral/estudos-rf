/* AFO 01 — conteúdo e banco de exercícios */
window.DATA = (function(){
"use strict";

var CARDS = [
  ["O que é Administração Financeira e Orçamentária (AFO)?","Conjunto de atividades e processos relacionados ao <b>planejamento, execução, controle e avaliação</b> dos recursos públicos, visando eficiência, eficácia e transparência."],
  ["O que é Direito Financeiro e qual é o seu objeto?","Ramo do <b>direito público</b> que regula a Atividade Financeira do Estado. Seu objeto é a <b>disciplina jurídica de toda a AFE</b>; abrange receitas, despesas, orçamento público e créditos públicos."],
  ["O que estatui a Lei nº 4.320/64?","<b>Normas gerais de direito financeiro.</b>"],
  ["O que estatui a LC nº 101/00 (LRF)?","<b>Normas de finanças públicas</b> voltadas para a responsabilidade na gestão fiscal."],
  ["O que abrange a Atividade Financeira do Estado?","Obtenção de recursos (receitas públicas); gestão da aplicação (orçamento público); dispêndio (despesas públicas); criação de crédito público (endividamento); e a satisfação de <b>3 necessidades públicas</b>."],
  ["Quais são as três necessidades públicas satisfeitas pela AFE?","Prestação de <b>serviços públicos</b>; exercício regular do <b>poder de polícia</b>; <b>intervenção no domínio econômico</b>."],
  ["Orçamento público em sentido estrito é o quê?","A <b>LOA</b> — Lei Orçamentária Anual."],
  ["Orçamento público em sentido amplo é o quê?","A integração do <b>PPA + LDO + LOA</b>."],
  ["Quais as cinco qualificações do orçamento como lei?","<b>Formal</b> (processo legislativo), <b>material</b> (pode hospedar normas gerais e abstratas), <b>temporária</b> (limitada no tempo), <b>ordinária</b> (maioria simples) e <b>especial</b> (matéria específica)."],
  ["Por que o orçamento é lei ordinária?","Porque é aprovado por <b>maioria simples</b>."],
  ["Por que o orçamento é lei especial?","Porque <b>trata de matéria específica</b>."],
  ["No orçamento público, quem prevê e quem autoriza?","O <b>Poder Executivo prevê</b> (as receitas) e o <b>Poder Legislativo autoriza</b> a execução das despesas."],
  ["O orçamento é autorizativo ou impositivo?","Em regra, <b>autorizativo</b>: o administrador não é obrigado a realizar as despesas fixadas — <b>exceto</b> quanto às emendas impositivas."],
  ["Qual emenda tornou obrigatória a execução das emendas individuais e em que limite?","<b>EC 86/2015</b>, até <b>1,2% da receita corrente líquida</b>."],
  ["Qual emenda elevou esse limite para 2%?","<b>EC 126/2022</b> — CF, art. 166, § 9º."],
  ["Qual emenda introduziu o § 10 do art. 165 da CF e qual a tese ligada a ela?","<b>EC 100/2019</b>. Corrente doutrinária sustenta que o dispositivo transformou a natureza jurídica do orçamento de <b>autorizativo para impositivo</b>."],
  ["O orçamento pode ser objeto de controle de constitucionalidade?","<b>Sim</b> — pode ser submetido a controle <b>abstrato ou concentrado</b> de constitucionalidade."],
  ["Qual o mnemônico das funções do orçamento?","<b>A·D·E</b> — <b>A</b>loca serviços não fornecidos pelo setor privado, <b>D</b>istribui renda para diminuir desigualdades, <b>E</b>stabiliza a economia."],
  ["Quais as quatro atuações da função alocativa?","1) Corrigir a alocação dos serviços não fornecidos pelo setor privado; 2) oferecer bens e serviços públicos que o mercado não ofereceria (ou ofereceria de forma ineficiente); 3) criar condições para que bens privados sejam ofertados apesar do alto risco/custo; 4) corrigir imperfeições nas falhas de mercado (oligopólios, monopólios)."],
  ["Cite três objetivos da função alocativa.","Corrigir efeitos negativos de <b>externalidades</b>; determinar tipos e quantidades de <b>bens públicos</b>; definir o valor de <b>contribuição de cada cidadão</b>; prover serviços escolhidos indiretamente pela sociedade via <b>sistema eleitoral</b>; <b>investir em infraestrutura</b>."],
  ["Quais os instrumentos da função distributiva?","<b>Tributação</b>, <b>transferências unilaterais</b>, <b>subsídios</b>, <b>incentivos fiscais</b> e <b>alocação de recursos nas camadas mais pobres</b> da população."],
  ["O que é demanda agregada?","A quantidade total de bens e serviços que <b>todos os setores da economia</b> — consumidores, empresas e governo — estão dispostos e capazes de comprar em determinado período de tempo, a determinado preço."]
];

var QS = [
  ["A Administração Financeira e Orçamentária compreende apenas a execução e o controle dos recursos públicos, não alcançando a fase de planejamento.","E","CESPE","AFO abrange <b>planejamento, execução, controle e avaliação</b>. Suprimir o planejamento desnatura o conceito."],
  ["O direito financeiro é ramo do direito público que tem por objeto a disciplina jurídica de toda a atividade financeira do Estado.","C","FCC","Literalidade do conceito: ramo do direito público, com objeto na disciplina jurídica de toda a AFE."],
  ["A Lei nº 4.320/64 estatui normas de finanças públicas voltadas para a responsabilidade na gestão fiscal, ao passo que a LC nº 101/00 estabelece normas gerais de direito financeiro.","E","FCC","Inversão clássica. A <b>Lei 4.320/64</b> traz normas gerais de direito financeiro; a <b>LRF</b> traz normas de finanças públicas para a responsabilidade na gestão fiscal."],
  ["A criação de crédito público por meio de endividamento integra a atividade financeira do Estado.","C","FGV","É uma das frentes da AFE, ao lado da obtenção de receitas, da gestão via orçamento e do dispêndio por despesas."],
  ["A atividade financeira do Estado destina-se, entre outros fins, à satisfação de três necessidades públicas: a prestação de serviços públicos, o exercício regular do poder de polícia e a intervenção no domínio econômico.","C","CESPE","São exatamente as três necessidades públicas apontadas no conceito de AFE."],
  ["Em sentido estrito, o orçamento público corresponde à integração do plano plurianual, da lei de diretrizes orçamentárias e da lei orçamentária anual.","E","FCC","Isso é o sentido <b>amplo</b>. Em sentido <b>estrito</b>, orçamento público é a <b>LOA</b>."],
  ["O orçamento público é lei formal e material, de natureza temporária, ordinária e especial.","C","FGV","As cinco qualificações: formal, material, temporária, ordinária e especial."],
  ["Por ser lei de natureza especial, o orçamento público exige, para sua aprovação, quórum de maioria absoluta.","E","VUNESP","O orçamento é lei <b>ordinária</b>, aprovada por <b>maioria simples</b>. Ser lei especial diz respeito à matéria, não ao quórum."],
  ["O orçamento público é o ato pelo qual o Poder Legislativo prevê e o Poder Executivo autoriza a execução das despesas.","E","CESPE","Inversão dos papéis: o <b>Executivo prevê</b> e o <b>Legislativo autoriza</b>."],
  ["Em regra, a lei orçamentária anual possui caráter autorizativo, de modo que o administrador público não está obrigado a realizar todas as despesas nela fixadas, ressalvadas as emendas impositivas.","C","CESPE","Regra geral do caráter autorizativo, com a ressalva correta das emendas impositivas."],
  ["A EC nº 86/2015 tornou obrigatória a execução das programações decorrentes de emendas individuais até o limite de 2% da receita corrente líquida.","E","FGV","A EC 86/2015 fixou <b>1,2%</b> da RCL. Os 2% vieram com a EC 126/2022."],
  ["A EC nº 126/2022 elevou de 1,2% para 2% o limite das emendas individuais de execução obrigatória.","C","FGV","Alteração do art. 166, § 9º, da Constituição Federal."],
  ["O orçamento público não pode ser submetido a controle concentrado de constitucionalidade.","E","CESPE","O orçamento <b>pode</b> ser submetido a controle abstrato ou concentrado de constitucionalidade."],
  ["Existe corrente doutrinária segundo a qual o § 10 do art. 165 da Constituição Federal, introduzido pela EC nº 100/2019, transformou a natureza jurídica do orçamento de autorizativo para impositivo.","C","CESPE","Tese doutrinária expressamente referida no material e já cobrada em provas."],
  ["As funções do orçamento agrupam-se em três categorias principais: alocativa, distributiva e estabilizadora.","C","FCC","Mnemônico A·D·E."],
  ["Compete à função alocativa corrigir imperfeições decorrentes de falhas de mercado, como monopólios e oligopólios.","C","FGV","É uma das quatro atuações típicas da função alocativa."],
  ["A correção dos efeitos negativos de externalidades constitui objetivo típico da função distributiva do orçamento.","E","CESPE","Corrigir externalidades negativas é objetivo da função <b>alocativa</b>."],
  ["O investimento em infraestrutura, por gerar benefícios sociais e externalidades positivas para toda a sociedade, relaciona-se à função alocativa.","C","FCC","Consta expressamente entre os objetivos da função alocativa."],
  ["A imunidade tributária reconhecida pelo STF à EBCT, para auxiliar no custeio da entrega de correspondência em locais pouco habitados e de difícil acesso, foi apontada como exemplo de função distributiva.","E","CESPE","É exemplo clássico de função <b>alocativa</b>: correções na alocação de serviços que o mercado privado não ofertaria adequadamente."],
  ["Ações vinculadas a programas educacionais em região de baixa escolaridade, financiadas por impostos progressivos cobrados nas regiões mais ricas do país, relacionam-se diretamente à função distributiva.","C","FGV","Exemplo textual: tributação progressiva das regiões mais ricas para financiar ações nas mais pobres."],
  ["Subsídios e incentivos fiscais figuram entre os instrumentos da função distributiva.","C","FCC","Instrumentos: tributação, transferências unilaterais, subsídios, incentivos fiscais e alocação de recursos nas camadas mais pobres."],
  ["Os programas de transferência de renda no Brasil, como o Bolsa Família, são baseados em critérios alocativos compulsórios dos assistidos.","E","CESPE","O material afirma o contrário: tais programas <b>não</b> são baseados em critérios alocativos compulsórios dos assistidos."],
  ["Os critérios de seleção dos beneficiários de programas de transferência de renda são de natureza incondicionada, não considerando indicadores de renda per capita ou composição familiar.","E","CESPE","Os critérios <b>não</b> são incondicionados: consideram renda per capita, composição familiar e condição de trabalho."],
  ["Em cenário de recessão econômica, a adoção de medidas expansionistas, como o aumento dos gastos públicos e a redução de impostos, configura exercício da função estabilizadora.","C","FGV","Medidas expansionistas estimulam a demanda agregada e impulsionam a atividade econômica."],
  ["Demanda agregada é a quantidade total de bens e serviços que apenas as famílias estão dispostas e são capazes de comprar em determinado período de tempo.","E","VUNESP","Demanda agregada envolve <b>todos os setores</b>: consumidores, empresas e <b>governo</b>."],
  ["A administração financeira e orçamentária visa à eficiência, à eficácia e à transparência na gestão das finanças públicas.","C","FUNDATEC","Os três vetores constam do próprio conceito de AFO."],
  ["O direito financeiro abrange receitas, despesas, orçamento público e créditos públicos.","C","FCC","É o alcance material do direito financeiro."],
  ["A intervenção no domínio econômico não figura entre as necessidades públicas satisfeitas pela atividade financeira do Estado.","E","FUNDATEC","Figura sim: serviços públicos, poder de polícia e <b>intervenção no domínio econômico</b>."],
  ["O orçamento público é lei de natureza temporária, por ser limitada no tempo.","C","FGV","Uma das cinco qualificações da lei orçamentária."],
  ["O orçamento público, por ser lei apenas formal, não pode hospedar normas gerais e abstratas.","E","CESPE","O orçamento é lei formal <b>e material</b> — justamente por poder hospedar normas gerais e abstratas."],
  ["Criar condições para que bens privados sejam oferecidos no mercado, quando o alto risco ou custo desestimula os produtores, é atuação da função alocativa.","C","FGV","É a terceira das quatro atuações típicas da função alocativa."],
  ["A função estabilizadora vale-se de instrumentos fiscais, monetários e cambiais.","C","FCC","Literalidade do conceito de função estabilizadora."],
  ["A alocação de recursos nas camadas mais pobres da população é instrumento da função alocativa.","E","CESPE","É instrumento da função <b>distributiva</b>."],
  ["Definir o valor da contribuição de cada cidadão para financiar os serviços públicos é objetivo da função alocativa.","C","CESPE","Consta expressamente entre os objetivos da função alocativa."],
  ["A participação em programas de transferência de renda exige contrapartida compulsória do beneficiário.","E","CESPE","A participação é <b>voluntária</b> e não exige qualquer contrapartida compulsória."],
  ["Prover os serviços públicos escolhidos pela sociedade de forma indireta, por meio da escolha dos governantes via sistema eleitoral, é objetivo da função alocativa.","C","FGV","Consta entre os objetivos da função alocativa."],
  ["A Lei Complementar nº 101/2000 é a norma que estabelece as normas gerais de direito financeiro aplicáveis à União, aos estados, ao Distrito Federal e aos municípios.","E","FUNDATEC","Normas gerais de direito financeiro estão na <b>Lei nº 4.320/1964</b>. A LRF traz normas de finanças públicas voltadas à responsabilidade na gestão fiscal."]
];

var FEY = {
  f1:{ask:"O que é a Atividade Financeira do Estado e o que ela abrange?",
    hint:"Explique sem usar a palavra “abrange”. Imagine alguém que nunca viu uma lei orçamentária.",
    ref:"É o conjunto de ações do governo para captar, gerir e aplicar os recursos necessários ao cumprimento de suas atribuições. Abrange cinco frentes: obtenção de recursos por meio de receitas públicas; gestão da aplicação por meio do orçamento público; dispêndio por meio das despesas públicas; criação de crédito público por meio de endividamento; e a satisfação de três necessidades públicas — serviços públicos, poder de polícia e intervenção no domínio econômico."},
  f2:{ask:"Por que se diz que o orçamento público é uma lei, e que tipo de lei ele é?",
    hint:"São cinco adjetivos. Se você lembrar de quatro, o quinto é exatamente a sua lacuna — anote qual foi.",
    ref:"Porque resulta de processo legislativo. É lei formal (fruto de processo legislativo), material (pode hospedar normas gerais e abstratas), temporária (limitada no tempo), ordinária (aprovada por maioria simples) e especial (trata de matéria específica). Em sentido estrito é a LOA; em sentido amplo, a integração de PPA, LDO e LOA."},
  f3:{ask:"O orçamento é autorizativo ou impositivo? Conte a história completa.",
    hint:"Aqui a explicação só fica boa com datas e percentuais. Diga em voz alta antes de escrever.",
    ref:"Em regra a LOA é autorizativa: o administrador não é obrigado a realizar as despesas fixadas — exceto quanto às emendas impositivas. A EC 86/2015 tornou obrigatória a execução das emendas individuais até 1,2% da receita corrente líquida. A EC 126/2022 elevou esse limite para 2% (CF, art. 166, § 9º). Há corrente doutrinária segundo a qual o § 10 do art. 165 da CF, introduzido pela EC 100/2019, transformou a natureza do orçamento de autorizativo para impositivo. O orçamento também pode ser submetido a controle abstrato ou concentrado de constitucionalidade."},
  f4:{ask:"Explique as três funções do orçamento e dê um exemplo próprio de cada uma — não use os exemplos do resumo.",
    hint:"Inventar exemplo novo é o teste mais duro de Feynman. Se você só repetir Correios e Bolsa Família, ainda está decorando.",
    ref:"Alocativa: o governo aloca recursos para setores de interesse público — corrige a alocação de serviços não fornecidos pelo setor privado, oferece bens e serviços que o mercado não ofereceria (ou ofereceria de forma ineficiente), cria condições para que bens privados sejam ofertados apesar do alto risco ou custo e corrige falhas de mercado como monopólios e oligopólios. Distributiva: redistribui renda e riqueza por meio de tributação, transferências unilaterais, subsídios, incentivos fiscais e alocação de recursos nas camadas mais pobres. Estabilizadora: mantém a estabilidade econômica com instrumentos fiscais, monetários e cambiais — em recessão adota medidas expansionistas (mais gasto, menos imposto) para estimular a demanda agregada; em inflação alta adota medidas restritivas."}
};

function sl(h,b){ return {h:h,b:b}; }

var TEORIA = {
  t1:[
    sl("O que é AFO",
      '<p>Administração Financeira e Orçamentária é o <span class="key">conjunto de atividades e processos relacionados ao planejamento, à execução, ao controle e à avaliação dos recursos públicos</span>, visando à eficiência, à eficácia e à transparência na gestão das finanças públicas.</p>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">1. Planejamento</span><span class="cd">Estimar receitas e definir prioridades.</span></div>'+
      '<div class="chip"><span class="cn">2. Execução</span><span class="cd">Realizar as despesas fixadas.</span></div>'+
      '<div class="chip"><span class="cn">3. Controle</span><span class="cd">Acompanhar o que está sendo gasto.</span></div>'+
      '<div class="chip"><span class="cn">4. Avaliação</span><span class="cd">Prestar contas e medir resultados.</span></div></div>'),
    sl("Como isso aparece na prática",
      '<div class="box tip"><span class="bl">Exemplo concreto</span><p>A elaboração e a execução do orçamento anual de um município. Estima-se a receita a arrecadar, fixam-se as despesas, definem-se prioridades de investimento e, durante o ano, acompanham-se e controlam-se as despesas por meio de relatórios e prestação de contas.</p></div>'+
      '<div class="box trap"><span class="bl">Pegadinha frequente</span><p>Bancas cortam uma das quatro fases — normalmente o <b>planejamento</b> ou a <b>avaliação</b> — e afirmam que AFO se resume à execução e ao controle. São quatro, sempre.</p></div>')
  ],
  t2:[
    sl("Direito Financeiro",
      '<p>Direito financeiro <span class="key">é ramo do direito público cujo objetivo é regular a Atividade Financeira do Estado</span>, estabelecendo normas para o funcionamento do sistema financeiro, tributos, despesas públicas e crédito.</p>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">1) Natureza</span><span class="cd">É um dos ramos do direito público.</span></div>'+
      '<div class="chip"><span class="cn">2) Objeto</span><span class="cd">A disciplina jurídica de toda a Atividade Financeira do Estado.</span></div>'+
      '<div class="chip"><span class="cn">3) Alcance</span><span class="cd">Receitas, despesas, orçamento público e créditos públicos.</span></div>'+
      '<div class="chip"><span class="cn">4) Foco administrativo</span><span class="cd">Nele, trata da AFO.</span></div></div>'),
    sl("As duas leis que a banca troca de lugar",
      '<div class="box"><span class="bl">Lei nº 4.320/64</span><p>Estatui <b>normas gerais de direito financeiro</b>.</p></div>'+
      '<div class="box"><span class="bl">LC nº 101/00 — LRF</span><p>Estatui <b>normas de finanças públicas</b> voltadas para a responsabilidade na gestão fiscal.</p></div>'+
      '<div class="box trap"><span class="bl">Como cai</span><p>O item inverte as duas. Guarde pelo apelido: <b>4.320 é a lei do orçamento</b>; <b>LRF é a lei do gasto responsável</b>.</p></div>')
  ],
  t3:[
    sl("Atividade Financeira do Estado",
      '<p>A AFE é o conjunto de ações realizadas pelo governo para <span class="key">captar, gerir e aplicar</span> os recursos financeiros necessários ao cumprimento de suas atribuições.</p>'+
      '<div class="tree"><div class="tree-root">A AFE abrange</div>'+
      '<div class="leaf"><b>Obtenção</b> de recursos por meio de <b>receitas públicas</b></div>'+
      '<div class="leaf"><b>Gestão</b> da aplicação dos recursos por meio do <b>orçamento público</b></div>'+
      '<div class="leaf"><b>Dispêndio</b> dos recursos por meio das <b>despesas públicas</b></div>'+
      '<div class="leaf"><b>Criação de crédito público</b> por meio de endividamento (empréstimos)</div></div>'),
    sl("As três necessidades públicas",
      '<p>A quinta frente da AFE é a satisfação de <span class="key">três necessidades públicas</span>:</p>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Serviços públicos</span><span class="cd">A prestação de serviços públicos.</span></div>'+
      '<div class="chip"><span class="cn">Poder de polícia</span><span class="cd">O exercício regular do poder de polícia.</span></div>'+
      '<div class="chip"><span class="cn">Domínio econômico</span><span class="cd">A intervenção no domínio econômico.</span></div></div>'+
      '<div class="box tip"><span class="bl">Exemplo concreto</span><p>A elaboração e a execução do orçamento público também é exemplo de AFE: o Estado define as fontes de recursos (impostos, taxas, contribuições), as áreas prioritárias de investimento e os programas e projetos a implementar.</p></div>')
  ],
  t4:[
    sl("Orçamento público: o conceito",
      '<p>Orçamento público é o instrumento utilizado pelo governo para <span class="key">estimar, planejar e controlar os recursos financeiros públicos</span> disponíveis em determinado período, geralmente um ano. É por meio da LOA que o governo estabelece as receitas que espera arrecadar e as despesas que pretende realizar.</p>'+
      '<div class="box"><span class="bl">Sentido estrito</span><p>Orçamento público <b>é a LOA</b>.</p></div>'+
      '<div class="box"><span class="bl">Sentido amplo</span><p>A integração do <b>PPA + LDO + LOA</b>.</p></div>'),
    sl("Conceitos que já caíram literalmente",
      '<ul><li>É ato pelo qual o <b>Poder Executivo prevê</b> e o <b>Poder Legislativo autoriza</b> a execução das despesas.</li>'+
      '<li>Constitui-se em instrumento (lei) que <b>operacionaliza os programas setoriais e regionais</b>.</li>'+
      '<li>Em sentido estrito, é conhecido como <b>Lei Orçamentária Anual (LOA)</b>.</li>'+
      '<li>Em sentido amplo, é a integração do <b>PPA, da LDO e da LOA</b>.</li></ul>'+
      '<div class="box trap"><span class="bl">O erro mais cobrado</span><p>Inverter os poderes. Quem <b>prevê</b> é o Executivo; quem <b>autoriza</b> é o Legislativo.</p></div>')
  ],
  t5:[
    sl("Orçamento é uma lei — de que tipo?",
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Formal</span><span class="cd">Fruto de um processo legislativo.</span></div>'+
      '<div class="chip"><span class="cn">Material</span><span class="cd">Pode hospedar normas gerais e abstratas.</span></div>'+
      '<div class="chip"><span class="cn">Temporária</span><span class="cd">Limitada no tempo.</span></div>'+
      '<div class="chip"><span class="cn">Ordinária</span><span class="cd">Aprovação por maioria simples.</span></div>'+
      '<div class="chip"><span class="cn">Especial</span><span class="cd">Trata de matéria específica.</span></div></div>'+
      '<div class="box trap"><span class="bl">Não confunda</span><p>Ser lei <b>especial</b> diz respeito à <b>matéria</b> tratada. O quórum continua sendo o de lei <b>ordinária</b>: maioria simples.</p></div>')
  ],
  t6:[
    sl("Autorizativo × impositivo",
      '<div><div class="tl"><span class="tl-w">Regra geral</span><span class="tl-t">A LOA é lei de caráter <b>autorizativo</b>: o administrador <b>não</b> é obrigado a realizar as despesas fixadas, exceto quanto às emendas impositivas.</span></div>'+
      '<div class="tl"><span class="tl-w">EC 86/2015</span><span class="tl-t">Tornou <b>obrigatória</b> a execução das emendas individuais até <b>1,2% da receita corrente líquida</b>.</span></div>'+
      '<div class="tl"><span class="tl-w">EC 100/2019</span><span class="tl-t">Introduziu o <b>§ 10 do art. 165 da CF</b>. Corrente doutrinária sustenta que o dispositivo transformou a natureza jurídica do orçamento em <b>impositiva</b>.</span></div>'+
      '<div class="tl"><span class="tl-w">EC 126/2022</span><span class="tl-t">Alterou o limite de <b>1,2% para 2%</b> <span class="lawref">(CF, art. 166, § 9º)</span>.</span></div></div>'),
    sl("Controle de constitucionalidade",
      '<div class="box tip"><span class="bl">Guarde isto</span><p>O orçamento público <b>pode ser submetido a controle (abstrato ou concentrado) de constitucionalidade</b>. Negar esse cabimento é o erro mais comum na matéria.</p></div>')
  ],
  t7:[
    sl("As três funções do orçamento",
      '<p>As funções do orçamento <span class="key">se referem às atividades desempenhadas pelo governo para garantir o funcionamento adequado da economia e atender às necessidades da sociedade</span>.</p>'+
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">A</span><span class="nm">Alocativa</span></div><div class="fn-b"><p><b>Aloca</b> serviços não fornecidos pelo setor privado.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">D</span><span class="nm">Distributiva</span></div><div class="fn-b"><p><b>Distribui</b> renda para diminuir desigualdades.</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">E</span><span class="nm">Estabilizadora</span></div><div class="fn-b"><p><b>Estabiliza</b> a economia.</p></div></div></div>'+
      '<div class="box tip"><span class="bl">Bizu</span><p>O Estado <b>aloca</b> a produção de bens e serviços, <b>distribui</b> os recursos e <b>estabiliza</b> a economia.</p></div>')
  ],
  t8:[
    sl("Função alocativa — as quatro atuações",
      '<p>Na função alocativa, <span class="key">o governo intervém na economia alocando recursos para setores considerados de interesse público</span>.</p>'+
      '<ul><li>Promover correções na alocação dos <b>serviços não fornecidos pelo setor privado</b>.</li>'+
      '<li>Oferecer bens e serviços <b>públicos</b> que não seriam oferecidos pelo mercado privado (ou seriam em condições ineficientes).</li>'+
      '<li>Criar condições para que <b>bens privados</b> sejam oferecidos no mercado, apesar do alto risco ou custo.</li>'+
      '<li>Corrigir imperfeições nas <b>falhas de mercado</b> (oligopólios, monopólios).</li></ul>'),
    sl("Função alocativa — os objetivos",
      '<ul><li>Corrigir os efeitos negativos de <b>externalidades</b>.</li>'+
      '<li>Determinar os <b>tipos e as quantidades</b> de bens públicos a prover.</li>'+
      '<li>Definir o <b>valor de contribuição</b> de cada cidadão para financiar os serviços públicos.</li>'+
      '<li>Prover os serviços escolhidos pela sociedade <b>indiretamente</b>, via sistema eleitoral.</li>'+
      '<li><b>Investir em infraestrutura</b>, por gerar externalidades positivas.</li></ul>'+
      '<div class="box tip"><span class="bl">Exemplo clássico</span><p>A imunidade tributária da EBCT reconhecida pelo STF: a empresa entrega correspondência em localidades distantes a preços módicos, serviço que o mercado privado não ofereceria adequadamente. Ao imunizar as atividades mais rentáveis para custear as operações em locais de difícil acesso, o Governo promove <b>correções na alocação dos serviços</b>.</p></div>')
  ],
  t9:[
    sl("Função distributiva",
      '<p>Na função distributiva, <span class="key">o governo realiza a redistribuição de renda e riqueza na sociedade</span>.</p>'+
      '<ul><li>Tributação</li><li>Transferências unilaterais</li><li>Subsídios</li><li>Incentivos fiscais</li><li>Alocação de recursos em camadas mais pobres da população</li></ul>'+
      '<div class="box tip"><span class="bl">Exemplo clássico</span><p>Ações vinculadas a programas educacionais em região de baixa escolaridade, financiadas por impostos <b>progressivos</b> cobrados nas regiões mais ricas do país.</p></div>'+
      '<div class="box trap"><span class="bl">Bolsa Família — o parágrafo recortado pela banca</span><p>Programas de transferência de renda <b>não</b> se baseiam em critérios alocativos compulsórios dos assistidos. Os critérios de seleção <b>não</b> são incondicionados: consideram renda per capita, composição familiar e condição de trabalho. A participação é <b>voluntária</b>, sem contrapartida compulsória.</p></div>'),
    sl("Função estabilizadora e demanda agregada",
      '<p>Na função estabilizadora, <span class="key">o governo busca manter a estabilidade da economia e evitar flutuações prejudiciais</span>, usando instrumentos fiscais, monetários e cambiais.</p>'+
      '<div class="box"><span class="bl">Recessão</span><p>Medidas <b>expansionistas</b>: aumento dos gastos públicos e redução de impostos, para estimular a demanda agregada.</p></div>'+
      '<div class="box"><span class="bl">Inflação alta</span><p>Medidas <b>restritivas</b>: aumento de impostos e redução dos gastos públicos, para diminuir a demanda agregada.</p></div>'+
      '<div class="box tip"><span class="bl">Definição que cai isolada</span><p><b>Demanda agregada</b> é a quantidade total de bens e serviços que <b>todos os setores da economia</b> — consumidores, empresas e governo — estão dispostos e capazes de comprar em determinado período de tempo, a determinado preço.</p></div>')
  ]
};

/* ==== BANCO DE EXERCÍCIOS ==== */
var EX = {

/* -------- Unidade 1 -------- */
a1:{t:"gap", instr:"Complete a frase",
  before:"A AFO compreende o planejamento, a execução, o ", after:" e a avaliação dos recursos públicos.",
  options:["controle","empenho","lançamento"], answer:0,
  why:"São quatro fases: planejamento, execução, <b>controle</b> e avaliação."},

a2:{t:"order", instr:"Coloque as fases da AFO na ordem correta",
  items:["Planejamento","Execução","Controle","Avaliação"],
  why:"Planeja, executa, controla e avalia — nessa ordem."},

a3:{t:"mc", instr:"O direito financeiro é ramo de qual direito?",
  options:["Direito público","Direito privado","Direito processual","Direito empresarial"], answer:0,
  why:"É <b>ramo do direito público</b> que tem por objeto a disciplina jurídica de toda a atividade financeira do Estado."},

a4:{t:"gap", instr:"Complete a frase",
  before:"A Lei nº 4.320/64 estatui normas gerais de ", after:".",
  options:["direito financeiro","finanças públicas","responsabilidade fiscal"], answer:0,
  why:"<b>Lei 4.320/64 = normas gerais de direito financeiro.</b> Quem traz normas de finanças públicas é a LRF."},

a5:{t:"gap", instr:"Complete a frase",
  before:"A LC nº 101/00 estatui normas de ", after:" voltadas à responsabilidade na gestão fiscal.",
  options:["finanças públicas","direito financeiro","direito tributário"], answer:0,
  why:"<b>LRF = normas de finanças públicas</b> voltadas para a responsabilidade na gestão fiscal."},

a6:{t:"match", instr:"Correlacione cada item ao seu conteúdo",
  pairs:[["Lei 4.320/64","Normas gerais de direito financeiro"],
         ["LC 101/00 (LRF)","Normas de finanças públicas"],
         ["Direito financeiro","Ramo do direito público"],
         ["AFO","Foco administrativo do direito financeiro"]]},

a7:{t:"multi", instr:"Marque tudo o que a Atividade Financeira do Estado abrange",
  options:["Obtenção de recursos por meio de receitas públicas",
           "Gestão da aplicação dos recursos pelo orçamento público",
           "Dispêndio dos recursos por meio das despesas públicas",
           "Criação de crédito público por meio de endividamento",
           "Julgamento de lides entre particulares",
           "Edição de normas penais"],
  answers:[0,1,2,3],
  why:"A AFE abrange obtenção, gestão, dispêndio e criação de crédito público — além da satisfação de três necessidades públicas."},

a8:{t:"mc", instr:"Qual destas NÃO é uma das três necessidades públicas satisfeitas pela AFE?",
  options:["A distribuição de lucros a acionistas","A prestação de serviços públicos",
           "O exercício regular do poder de polícia","A intervenção no domínio econômico"], answer:0,
  why:"As três são: serviços públicos, poder de polícia e intervenção no domínio econômico."},

a9:{t:"wordbank", instr:"Monte a frase",
  target:["O","Estado","capta,","gere","e","aplica","recursos","públicos"],
  extra:["fiscaliza","julga","privados"],
  why:"A AFE é o conjunto de ações para <b>captar, gerir e aplicar</b> os recursos financeiros públicos."},

a10:{t:"match", instr:"Correlacione a necessidade pública ao exemplo",
  pairs:[["Serviço público","Manutenção de uma unidade de saúde"],
         ["Poder de polícia","Fiscalização sanitária de um restaurante"],
         ["Intervenção no domínio econômico","Regulação de preços em setor estratégico"]]},

/* -------- Unidade 2 -------- */
b1:{t:"gap", instr:"Complete a frase",
  before:"Em sentido estrito, o orçamento público é a ", after:".",
  options:["LOA","LDO","PPA"], answer:0,
  why:"Sentido <b>estrito</b> = LOA. Sentido <b>amplo</b> = PPA + LDO + LOA."},

b2:{t:"gap", instr:"Complete a frase",
  before:"Em sentido amplo, o orçamento é a integração do PPA, da LDO e da ", after:".",
  options:["LOA","LRF","Lei 4.320/64"], answer:0,
  why:"Os três instrumentos de planejamento: PPA, LDO e LOA."},

b3:{t:"wordbank", instr:"Monte a frase",
  target:["O","Executivo","prevê","e","o","Legislativo","autoriza","as","despesas"],
  extra:["Judiciário","fiscaliza","veta"],
  why:"Quem <b>prevê</b> é o Executivo; quem <b>autoriza</b> a execução das despesas é o Legislativo."},

b4:{t:"match", instr:"Correlacione a qualificação do orçamento ao seu motivo",
  pairs:[["Formal","Fruto de um processo legislativo"],
         ["Material","Pode hospedar normas gerais e abstratas"],
         ["Temporária","Limitada no tempo"],
         ["Ordinária","Aprovada por maioria simples"],
         ["Especial","Trata de matéria específica"]]},

b5:{t:"mc", instr:"O orçamento é lei ordinária porque…",
  options:["é aprovado por maioria simples","trata de matéria específica",
           "é limitado no tempo","resulta de processo legislativo"], answer:0,
  why:"<b>Ordinária</b> = quórum de maioria simples. Não confunda com <b>especial</b>, que se refere à matéria."},

b6:{t:"mc", instr:"O orçamento é lei especial porque…",
  options:["trata de matéria específica","exige maioria absoluta",
           "tem prazo indeterminado","é de iniciativa do Legislativo"], answer:0,
  why:"<b>Especial</b> = trata de matéria específica."},

b7:{t:"order", instr:"Ordene cronologicamente as emendas constitucionais",
  items:["EC 86/2015","EC 100/2019","EC 126/2022"],
  why:"86/2015 tornou impositivas as emendas individuais (1,2%); 100/2019 introduziu o § 10 do art. 165; 126/2022 elevou o limite a 2%."},

b8:{t:"gap", instr:"Complete a frase",
  before:"A EC 86/2015 tornou obrigatória a execução das emendas individuais até ", after:" da receita corrente líquida.",
  options:["1,2%","2%","0,6%"], answer:0,
  why:"A EC 86/2015 fixou <b>1,2%</b>. Os 2% só vieram com a EC 126/2022."},

b9:{t:"gap", instr:"Complete a frase",
  before:"A EC 126/2022 elevou esse limite para ", after:" (CF, art. 166, § 9º).",
  options:["2%","1,2%","3%"], answer:0,
  why:"EC 126/2022 → de 1,2% para <b>2%</b>."},

b10:{t:"match", instr:"Correlacione a emenda ao que ela fez",
  pairs:[["EC 86/2015","Emendas individuais impositivas até 1,2% da RCL"],
         ["EC 100/2019","Introduziu o § 10 do art. 165 da CF"],
         ["EC 126/2022","Elevou o limite para 2% (art. 166, § 9º)"]]},

b11:{t:"multi", instr:"Marque tudo o que é verdadeiro sobre a LOA",
  options:["Em regra tem caráter autorizativo",
           "As emendas impositivas são exceção à regra",
           "Pode ser submetida a controle concentrado de constitucionalidade",
           "Obriga o administrador a executar toda despesa fixada",
           "Exige quórum de maioria absoluta"],
  answers:[0,1,2],
  why:"A LOA é autorizativa em regra, tem as emendas impositivas como exceção e admite controle abstrato/concentrado. Não obriga toda despesa e é lei ordinária."},

b12:{t:"mc", instr:"Sobre o controle de constitucionalidade do orçamento público:",
  options:["Pode ser submetido a controle abstrato ou concentrado",
           "Só cabe controle difuso","Não cabe controle de constitucionalidade",
           "Só cabe controle pelo Tribunal de Contas"], answer:0,
  why:"O orçamento <b>pode</b> ser submetido a controle abstrato (concentrado) de constitucionalidade."},

b13:{t:"sort", instr:"Classifique cada situação",
  buckets:["Autorizativo (regra)","Impositivo (exceção)"],
  items:[["Despesa fixada na proposta do próprio Executivo",0],
         ["Emenda individual de parlamentar dentro do limite de 2% da RCL",1],
         ["Programação não executada por frustração de receita",0],
         ["Execução obrigatória introduzida pela EC 86/2015",1]],
  why:"A regra é o caráter autorizativo; a obrigatoriedade alcança apenas as <b>emendas impositivas</b>."},

/* -------- Unidade 3 -------- */
c1:{t:"match", instr:"Correlacione a função à sua ação",
  pairs:[["Alocativa","Aloca serviços não fornecidos pelo setor privado"],
         ["Distributiva","Distribui renda para diminuir desigualdades"],
         ["Estabilizadora","Estabiliza a economia e evita flutuações"]]},

c2:{t:"sort", instr:"Classifique cada exemplo pela função do orçamento",
  buckets:["Alocativa","Distributiva","Estabilizadora"],
  items:[["Imunidade da EBCT para custear entrega em locais remotos",0],
         ["Transferência de renda a famílias de baixa renda",1],
         ["Aumento de gastos e corte de impostos em recessão",2],
         ["Saneamento em bairro onde nenhum privado opera",0],
         ["IPTU progressivo para financiar educação em área pobre",1],
         ["Elevação de impostos para conter a inflação",2],
         ["Correção de monopólios e oligopólios",0]],
  why:"Alocativa = onde o mercado não entra. Distributiva = tira de quem tem mais para dar a quem tem menos. Estabilizadora = segura a economia."},

c3:{t:"multi", instr:"Marque os instrumentos da função distributiva",
  options:["Tributação","Transferências unilaterais","Subsídios","Incentivos fiscais",
           "Exercício do poder de polícia","Correção de falhas de mercado"],
  answers:[0,1,2,3],
  why:"Instrumentos: tributação, transferências unilaterais, subsídios, incentivos fiscais e alocação de recursos nas camadas mais pobres."},

c4:{t:"multi", instr:"Marque as atuações da função alocativa",
  options:["Corrigir a alocação de serviços não fornecidos pelo setor privado",
           "Oferecer bens e serviços que o mercado não ofereceria",
           "Criar condições para bens privados de alto risco ou custo",
           "Corrigir falhas de mercado (monopólios, oligopólios)",
           "Redistribuir renda entre as classes sociais",
           "Controlar a taxa de inflação"],
  answers:[0,1,2,3],
  why:"As quatro atuações típicas da função alocativa. Redistribuir renda é distributiva; controlar inflação é estabilizadora."},

c5:{t:"gap", instr:"Complete a frase",
  before:"Em cenário de recessão, o governo adota medidas ", after:", aumentando gastos e reduzindo impostos.",
  options:["expansionistas","restritivas","neutras"], answer:0,
  why:"Recessão → medidas <b>expansionistas</b>, para estimular a demanda agregada."},

c6:{t:"gap", instr:"Complete a frase",
  before:"Para conter a inflação, o governo adota medidas ", after:", aumentando impostos e reduzindo gastos.",
  options:["restritivas","expansionistas","cambiais"], answer:0,
  why:"Inflação alta → medidas <b>restritivas</b>, para reduzir a demanda agregada."},

c7:{t:"gap", instr:"Complete a frase",
  before:"A demanda agregada envolve consumidores, empresas e ", after:".",
  options:["governo","exportadores","bancos"], answer:0,
  why:"Demanda agregada = <b>todos os setores</b> da economia: consumidores, empresas e <b>governo</b>."},

c8:{t:"wordbank", instr:"Monte a frase do bizu",
  target:["O","Estado","aloca,","distribui","e","estabiliza","a","economia"],
  extra:["arrecada","fiscaliza","privatiza"],
  why:"A·D·E — <b>A</b>loca, <b>D</b>istribui, <b>E</b>stabiliza."},

c9:{t:"mc", instr:"Investir em infraestrutura, por gerar externalidades positivas, é objetivo de qual função?",
  options:["Alocativa","Distributiva","Estabilizadora","Fiscalizatória"], answer:0,
  why:"Consta expressamente entre os objetivos da função <b>alocativa</b>."},

c10:{t:"mc", instr:"Sobre programas de transferência de renda como o Bolsa Família, é correto afirmar:",
  options:["A participação é voluntária e não exige contrapartida compulsória",
           "São baseados em critérios alocativos compulsórios dos assistidos",
           "Os critérios de seleção são de natureza incondicionada",
           "Não consideram a renda per capita das famílias"], answer:0,
  why:"A participação é <b>voluntária</b>; os critérios <b>não</b> são compulsórios nem incondicionados — consideram renda per capita, composição familiar e condição de trabalho."},

c11:{t:"multi", instr:"Marque os objetivos da função alocativa",
  options:["Corrigir efeitos negativos de externalidades",
           "Determinar tipos e quantidades de bens públicos",
           "Definir o valor de contribuição de cada cidadão",
           "Investir em infraestrutura",
           "Controlar a taxa de câmbio",
           "Transferir renda a famílias vulneráveis"],
  answers:[0,1,2,3],
  why:"Câmbio é instrumento da função estabilizadora; transferência de renda é distributiva."},

c12:{t:"order", instr:"Ordene a cadeia da função estabilizadora em recessão",
  items:["Queda da atividade econômica","Governo aumenta gastos e reduz impostos","Estímulo à demanda agregada","Recuperação do emprego"],
  why:"A função estabilizadora age sobre a <b>demanda agregada</b> para conter a flutuação econômica."}
};

/* questões certo/errado viram exercícios q0..q24 */
for(var i=0;i<QS.length;i++) EX["q"+i]={t:"ce", qi:i};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>A prova discursiva tem <b>3h30</b>, no mesmo dia da objetiva, em turno distinto, e é composta de <b>1 estudo de caso (máx. 20 linhas)</b> e <b>1 questão dissertativa (máx. 30 linhas)</b>. Só é corrigida a prova de quem passa na objetiva — os 100 primeiros da lista geral.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Considerando a natureza jurídica do orçamento público no ordenamento constitucional brasileiro, redija texto dissertativo abordando, necessariamente:</p>'+
  '<ol><li>o caráter autorizativo da Lei Orçamentária Anual e sua consequência prática para o administrador público;</li>'+
  '<li>as alterações promovidas pelas Emendas Constitucionais nº 86/2015, nº 100/2019 e nº 126/2022 sobre esse caráter;</li>'+
  '<li>a possibilidade de submissão do orçamento ao controle de constitucionalidade.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>O orçamento público, em sentido estrito, corresponde à Lei Orçamentária Anual, por meio da qual o Poder Executivo prevê as receitas que espera arrecadar e o Poder Legislativo autoriza a execução das despesas para determinado exercício. Trata-se de lei formal, por resultar de processo legislativo; material, por poder hospedar normas gerais e abstratas; temporária, por ser limitada no tempo; ordinária, por ser aprovada por maioria simples; e especial, por tratar de matéria específica.</p>'+
  '<p>Dessa natureza decorre a regra tradicional do <b>caráter autorizativo</b> da LOA. A fixação da despesa no orçamento constitui autorização de gasto, e não ordem de gasto: o administrador não está obrigado a realizar todas as despesas fixadas, dispondo de margem de conveniência e oportunidade, condicionada ao efetivo ingresso das receitas estimadas. A consequência prática é que a mera previsão orçamentária, por si só, não gera direito subjetivo à execução da despesa.</p>'+
  '<p>Esse quadro, contudo, foi progressivamente mitigado. A <b>EC nº 86/2015</b> tornou obrigatória a execução das programações decorrentes de emendas individuais apresentadas por parlamentares, até o limite de 1,2% da receita corrente líquida, de modo que parte do orçamento deixou de ser meramente autorizativa e passou a ser impositiva. A <b>EC nº 100/2019</b>, ao introduzir o § 10 do art. 165 da Constituição Federal, levou parcela da doutrina a sustentar que a natureza jurídica do orçamento teria sido transformada de autorizativa em impositiva. Por fim, a <b>EC nº 126/2022</b> elevou de 1,2% para 2% o limite das emendas individuais de execução obrigatória, nos termos do art. 166, § 9º, da Constituição Federal.</p>'+
  '<p>Quanto ao controle, embora o orçamento seja frequentemente descrito como lei de efeitos concretos, admite-se que o orçamento público <b>seja submetido a controle abstrato (concentrado) de constitucionalidade</b>, de modo que suas disposições podem ser impugnadas por essa via.</p>'+
  '<p>Conclui-se que o orçamento brasileiro é hoje de natureza <b>híbrida</b>: preserva o caráter autorizativo como regra geral, mas convive com um núcleo impositivo crescente e sujeita-se ao controle de constitucionalidade.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> nomear a LOA como sentido estrito; dizer “Executivo prevê / Legislativo autoriza”; afirmar que a fixação é autorização, não ordem de gasto.</li>'+
  '<li><b>Item 2:</b> os três números exatos — 1,2% (EC 86/2015), § 10 do art. 165 (EC 100/2019) e 2% (EC 126/2022, art. 166, § 9º).</li>'+
  '<li><b>Item 3:</b> afirmar de forma direta que <b>cabe</b> controle abstrato/concentrado.</li>'+
  '<li><b>Fecho:</b> a palavra <b>híbrido</b> costuma valer o ponto de conclusão.</li></ul></div>'+
  '<div class="box"><span class="bl">O que a FUNDATEC avalia, segundo o edital</span>'+
  '<ul><li>Conhecimento técnico sobre o tema e capacidade teórica e prática.</li>'+
  '<li>Redação técnica e conteúdo desenvolvido.</li>'+
  '<li>Padrão culto da língua portuguesa.</li>'+
  '<li>Adequação da resposta ao problema apresentado.</li>'+
  '<li>Mecanismos de coesão e argumentação.</li></ul></div>'+
  '<div class="box trap"><span class="bl">Zera a prova</span>'+
  '<ul><li>Fugir ao tema ou ao gênero propostos.</li>'+
  '<li>Colocar nome, rubrica, assinatura, sinal, iniciais ou qualquer marca identificadora.</li>'+
  '<li>Entregar a folha em branco.</li>'+
  '<li>Texto ilegível ou desconexo do problema.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>O estudo de caso tem <b>máximo de 20 linhas</b>. Isso muda a estratégia: não há espaço para introdução doutrinária. Vá direto à classificação de cada situação, com a fundamentação em uma frase por item.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>O município de Serra Azul encaminha à Câmara sua proposta de LOA contendo, entre outras, as seguintes programações:</p>'+
  '<ol><li>construção de estação de tratamento de esgoto em bairro periférico, onde nenhum prestador privado se dispôs a operar em razão do alto custo e do baixo retorno;</li>'+
  '<li>programa municipal de complementação de renda para famílias em vulnerabilidade, financiado pela elevação progressiva das alíquotas do IPTU nos bairros de maior valor venal;</li>'+
  '<li>ampliação temporária de obras públicas somada à redução da alíquota do ISS para serviços locais, decidida após forte alta do desemprego.</li></ol>'+
  '<p>Aprovada a LOA, o prefeito comunica que não executará integralmente a programação nº 1 por frustração de receita. Um vereador sustenta que, por constar da lei, a execução seria obrigatória.</p>'+
  '<p><b>Pergunta-se:</b> classifique cada programação segundo as funções do orçamento e avalie a tese do vereador.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>Programação 1 — função alocativa.</b> O município oferece um bem/serviço público que o mercado privado não ofereceria adequadamente em razão do alto custo e do risco. Enquadra-se em duas atuações típicas da função alocativa: promover correções na alocação dos serviços não fornecidos pelo setor privado e oferecer bens e serviços que não seriam ofertados pelo mercado. Some-se que o saneamento gera <b>externalidades positivas</b> e configura investimento em infraestrutura, também listado entre os objetivos alocativos. É a mesma lógica do caso dos Correios: o Estado entra onde o privado não entra.</p>'+
  '<p><b>Programação 2 — função distributiva.</b> Há transferência de renda a famílias vulneráveis financiada por tributação <b>progressiva</b> sobre a parcela de maior capacidade contributiva. A combinação “tributar quem tem mais para transferir a quem tem menos” é a assinatura da função distributiva, cujos instrumentos são tributação, transferências unilaterais, subsídios, incentivos fiscais e alocação de recursos nas camadas mais pobres.</p>'+
  '<p><b>Programação 3 — função estabilizadora.</b> Diante da alta do desemprego, o município adota <b>medidas expansionistas</b> — aumento de gastos e redução de tributo — para estimular a <b>demanda agregada</b>, isto é, a quantidade total de bens e serviços que consumidores, empresas e governo estão dispostos e capazes de comprar em determinado período e a determinado preço. O propósito não é redistribuir renda nem suprir ausência do mercado, mas conter a flutuação econômica.</p>'+
  '<p><b>Quanto à tese do vereador.</b> Não procede como posta. A LOA é, em regra, lei de caráter <b>autorizativo</b>: a fixação da despesa autoriza o gasto, mas não obriga o administrador a realizá-lo, sobretudo diante de frustração de receita. A obrigatoriedade é exceção e alcança as <b>emendas impositivas</b> — emendas individuais de parlamentares, obrigatórias desde a EC 86/2015 até 1,2% da RCL, limite elevado a 2% pela EC 126/2022 (CF, art. 166, § 9º). Como a programação nº 1 integra a proposta do Executivo e não decorre de emenda individual impositiva, não há dever absoluto de execução. Registre-se que há corrente sustentando que o § 10 do art. 165 da CF, introduzido pela EC 100/2019, converteu o orçamento em impositivo — tese que o vereador poderia invocar, mas que não corresponde à regra geral cobrada como correta nas provas.</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>Trocar a <b>1</b> por distributiva, porque o bairro é periférico. O critério é <b>ausência do mercado</b>, não pobreza do beneficiário.</li>'+
  '<li>Trocar a <b>2</b> por alocativa, porque envolve serviço público. O que define é a <b>redistribuição de renda</b>.</li>'+
  '<li>Trocar a <b>3</b> por distributiva, porque reduz imposto. A finalidade declarada é <b>conter flutuação econômica</b>.</li>'+
  '<li>Afirmar que toda despesa da LOA é de execução obrigatória. Só as <b>emendas impositivas</b> são.</li></ul></div>';

/* ==== KIT DA DISCURSIVA ==== */
var KIT = {
  f1:{
    tema:"Atividade financeira do Estado",
    bases:[
      "CF/1988, arts. 145 a 169 — Título VI, “Da Tributação e do Orçamento”",
      "Lei nº 4.320/1964, art. 1º — estatui normas gerais de direito financeiro",
      "LC nº 101/2000 (LRF), art. 1º, § 1º — responsabilidade na gestão fiscal"
    ],
    ouro:["captar, gerir e aplicar","receitas públicas","despesas públicas","crédito público",
          "prestação de serviços públicos","exercício regular do poder de polícia",
          "intervenção no domínio econômico","disciplina jurídica da atividade financeira do Estado"],
    abertura:"A atividade financeira do Estado consiste no conjunto de ações voltadas à obtenção, à gestão e à aplicação dos recursos necessários ao cumprimento de suas atribuições, sendo juridicamente disciplinada pelo direito financeiro, cujas normas gerais constam da Lei nº 4.320/1964.",
    evite:"Não reduza a AFE à arrecadação. O examinador procura as quatro frentes (obtenção, gestão, dispêndio e crédito público) e as três necessidades públicas."
  },
  f2:{
    tema:"Natureza jurídica da lei orçamentária",
    bases:[
      "CF/1988, art. 165, I a III — PPA, LDO e LOA",
      "CF/1988, art. 165, § 5º — conteúdo da lei orçamentária anual",
      "CF/1988, art. 47 — deliberação por maioria simples (lei ordinária)",
      "Lei nº 4.320/1964, art. 2º — conteúdo e forma da proposta orçamentária"
    ],
    ouro:["lei formal e material","temporária","ordinária","especial","processo legislativo",
          "normas gerais e abstratas","sentido estrito (LOA)","sentido amplo (PPA, LDO e LOA)",
          "o Executivo prevê e o Legislativo autoriza"],
    abertura:"O orçamento público, em sentido estrito, materializa-se na Lei Orçamentária Anual prevista no art. 165, III, da Constituição Federal, lei formal e material, de natureza temporária, ordinária e especial.",
    evite:"Não diga que o orçamento é “mera peça contábil” nem que exige maioria absoluta. São os dois erros que mais derrubam o item."
  },
  f3:{
    tema:"Orçamento autorizativo × impositivo",
    bases:[
      "CF/1988, art. 165, § 10 — incluído pela EC nº 100/2019",
      "CF/1988, art. 166, § 9º — limite das emendas individuais (2%, EC nº 126/2022)",
      "EC nº 86/2015 — execução obrigatória até 1,2% da receita corrente líquida",
      "CF/1988, art. 167 — vedações em matéria orçamentária"
    ],
    ouro:["caráter autorizativo","autorização de gasto, e não ordem de gasto",
          "não gera direito subjetivo à execução da despesa","emendas impositivas",
          "receita corrente líquida","1,2%","2%","natureza híbrida",
          "controle abstrato (concentrado) de constitucionalidade"],
    abertura:"A doutrina tradicional atribui à lei orçamentária anual caráter meramente autorizativo, de modo que a fixação da despesa constitui autorização de gasto, e não ordem de gasto.",
    evite:"Não afirme que o orçamento é lei de efeitos concretos insuscetível de controle concentrado. O entendimento cobrado é o oposto: cabe controle abstrato."
  },
  f4:{
    tema:"Funções do orçamento",
    bases:[
      "CF/1988, art. 3º, III — reduzir as desigualdades sociais e regionais",
      "CF/1988, art. 165 — orçamento como instrumento de planejamento",
      "CF/1988, arts. 170 e 174 — ordem econômica e o Estado como agente normativo e regulador",
      "Doutrina: sistematização clássica de Richard Musgrave"
    ],
    ouro:["função alocativa","falhas de mercado","monopólios e oligopólios","externalidades",
          "bens públicos","função distributiva","transferências unilaterais","progressividade",
          "subsídios e incentivos fiscais","função estabilizadora","demanda agregada",
          "medidas expansionistas","medidas restritivas"],
    abertura:"As funções fiscais do orçamento, na sistematização clássica de Musgrave, desdobram-se em alocativa, distributiva e estabilizadora, cada qual respondendo a uma falha distinta do funcionamento espontâneo do mercado.",
    evite:"Não classifique pelo beneficiário. O critério da alocativa é a ausência do mercado; o da distributiva é a transferência de renda; o da estabilizadora é a contenção da flutuação econômica."
  }
};

/* ==== DADOS DO CERTAME (Edital TJPR / FUNDATEC) ==== */
var EDITAL = {
  cargo:"Contador — Tribunal de Justiça do Paraná",
  banca:"FUNDATEC",
  objetiva:{
    tempo:"3h30",
    corte:"Aprovação exige, simultaneamente, no mínimo 50% de acertos nas questões de conhecimentos gerais e 50% nas de conhecimentos específicos (ampla concorrência). Para vagas reservadas, 40% e 40%."
  },
  discursiva:{
    tempo:"3h30",
    mesmodia:"Aplicada no mesmo dia da teórico-objetiva, em turno distinto.",
    pecas:[
      {nome:"Estudo de caso", linhas:20},
      {nome:"Questão dissertativa", linhas:30}
    ],
    criterios:[
      "conhecimento técnico sobre o tema",
      "capacidade teórica e prática",
      "redação técnica e conteúdo desenvolvido",
      "padrão culto da língua portuguesa",
      "adequação da resposta ao problema apresentado",
      "mecanismos de coesão e argumentação"
    ],
    zero:[
      "fugir ao tema ou ao gênero propostos",
      "apresentar nome, rubrica, assinatura, sinal, iniciais ou marcas que permitam identificação",
      "entregar a folha em branco",
      "apresentar texto ilegível ou desconexo do problema"
    ],
    corrigidas:"Só são corrigidas as provas de quem atinge o mínimo na teórico-objetiva — os 100 primeiros classificados na lista geral."
  }
};

/* ==== PESO DE CADA ASSUNTO (caderno TJPR 2026, TEC Concursos) ==== */
var PESOS = [
  {mod:"01", tema:"Conceitos iniciais e funções do orçamento", q:null, nota:"base conceitual — cobrada dentro de Orçamento Público"},
  {mod:"02", tema:"Espécies e modelos de orçamento", q:null, nota:"dentro de Orçamento Público (223)"},
  {mod:"03", tema:"Princípios orçamentários", q:90},
  {mod:"04", tema:"Instrumentos: PPA, LDO e LOA", q:133},
  {mod:"05", tema:"Ciclo orçamentário", q:18},
  {mod:"06", tema:"Créditos adicionais", q:null, nota:"dentro de Orçamento Público (223)"},
  {mod:"07", tema:"Receita pública", q:167},
  {mod:"08", tema:"Despesa pública e classificações", q:249},
  {mod:"09", tema:"Etapas da despesa: empenho, liquidação e pagamento", q:73},
  {mod:"10", tema:"Restos a pagar", q:49},
  {mod:"11", tema:"Suprimento de fundos", q:17}
];

/* ==== TRILHA ==== */
var UNITS = [
  {n:1, title:"Conceitos iniciais", cvar:"u1", lessons:[
    {id:"l1",  type:"teoria",  title:"O que é AFO",                    xp:10, data:"t1"},
    {id:"l2",  type:"drill",   title:"Praticar · AFO",                 xp:20, data:["a1","a2","q0"]},
    {id:"l3",  type:"teoria",  title:"Direito financeiro",             xp:10, data:"t2"},
    {id:"l4",  type:"drill",   title:"Praticar · direito financeiro",  xp:20, data:["a3","a4","a5","a6","q1","q2"]},
    {id:"l5",  type:"flash",   title:"Flashcards · conceitos",         xp:15, data:[0,1,2,3]},
    {id:"l6",  type:"teoria",  title:"Atividade financeira do Estado", xp:10, data:"t3"},
    {id:"l7",  type:"drill",   title:"Praticar · AFE",                 xp:20, data:["a9","a7","a8","a10","q3","q4","q25","q26","q27"]},
    {id:"l8",  type:"flash",   title:"Flashcards · AFE",               xp:15, data:[4,5]},
    {id:"l9",  type:"feynman", title:"Explique a AFE",                 xp:30, data:"f1"}
  ]},
  {n:2, title:"Orçamento público", cvar:"u2", lessons:[
    {id:"l11", type:"teoria",  title:"Conceito e sentidos",            xp:10, data:"t4"},
    {id:"l12", type:"drill",   title:"Praticar · sentidos e poderes",  xp:20, data:["b1","b2","b3","q5","q8"]},
    {id:"l13", type:"teoria",  title:"Que tipo de lei é o orçamento",  xp:10, data:"t5"},
    {id:"l14", type:"drill",   title:"Praticar · natureza da lei",     xp:20, data:["b4","b5","b6","q6","q7"]},
    {id:"l15", type:"flash",   title:"Flashcards · natureza da lei",   xp:15, data:[6,7,8,9,10,11]},
    {id:"l16", type:"teoria",  title:"Autorizativo × impositivo",      xp:10, data:"t6"},
    {id:"l17", type:"drill",   title:"Praticar · emendas",             xp:20, data:["b7","b8","b9","b10","q10","q11"]},
    {id:"l18", type:"drill",   title:"Praticar · regra e exceção",     xp:20, data:["b13","b11","b12","q9","q12","q13","q28","q29","q36"]},
    {id:"l19", type:"flash",   title:"Flashcards · emendas",           xp:15, data:[12,13,14,15,16]},
    {id:"l20", type:"feynman", title:"Explique a natureza da lei",     xp:30, data:"f2"},
    {id:"l21", type:"feynman", title:"Explique a linha do tempo",      xp:30, data:"f3"}
  ]},
  {n:3, title:"Funções do orçamento", cvar:"u3", lessons:[
    {id:"l23", type:"teoria",  title:"As três funções (A·D·E)",        xp:10, data:"t7"},
    {id:"l24", type:"drill",   title:"Praticar · A·D·E",               xp:20, data:["c8","c1","q14"]},
    {id:"l25", type:"teoria",  title:"Função alocativa",               xp:10, data:"t8"},
    {id:"l26", type:"drill",   title:"Praticar · alocativa",           xp:20, data:["c4","c11","c9","q15","q17","q18"]},
    {id:"l27", type:"teoria",  title:"Distributiva e estabilizadora",  xp:10, data:"t9"},
    {id:"l28", type:"drill",   title:"Praticar · distributiva",        xp:20, data:["c3","c10","q19","q20","q21","q22"]},
    {id:"l29", type:"drill",   title:"Praticar · estabilizadora",      xp:20, data:["c5","c6","c7","c12","q23","q24"]},
    {id:"l30", type:"drill",   title:"Classificar os exemplos",        xp:25, data:["c2","q16","q30","q31","q32","q33","q34","q35"]},
    {id:"l31", type:"flash",   title:"Flashcards · funções",           xp:15, data:[17,18,19,20,21]},
    {id:"l32", type:"feynman", title:"Explique as três funções",       xp:30, data:"f4"}
  ]},
  {n:4, title:"Aplicação e prova final", cvar:"u4", lessons:[
    {id:"l34", type:"leitura", title:"Discursiva resolvida",           xp:25, data:"disc"},
    {id:"l35", type:"leitura", title:"Estudo de caso resolvido",       xp:25, data:"caso"},
    {id:"lrev",type:"review",  title:"Revisão geral das unidades",     xp:60, data:null},
    {id:"l36", type:"missao",  title:"Missão TEC Concursos",           xp:15, data:null},
    {id:"l37", type:"prova",   title:"Simulado cronometrado",          xp:100, data:null}
  ]}
];

/* pool da prova final: tipos corrigíveis em silêncio (sem match) */
var PROVA_POOL = ["a1","a2","a3","a4","a5","a7","a8","a9","b1","b2","b3","b5","b6","b7","b8","b9","b11","b12","b13",
                  "c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12"];
for(var k=0;k<QS.length;k++) PROVA_POOL.push("q"+k);

var MODULOS = [
  {id:"m01", n:"01", nome:"Conceitos iniciais e funções do orçamento", pronto:true, units:UNITS}
];

return {CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, UNITS:UNITS, MODULOS:MODULOS,
        KIT:KIT, EDITAL:EDITAL, PESOS:PESOS,
        DISCURSIVA:DISCURSIVA, CASO:CASO, PROVA_POOL:PROVA_POOL};
})();

/* ---------- comentários das questões (Resumo 01 do Radegondes) ---------- */
var COM = {
0:"<p>Errado — o \"apenas\" estreita o conceito. Para o Resumo, AFO é o conjunto de atividades e processos relacionados ao <b>planejamento, execução, controle e avaliação</b> dos recursos públicos.</p><p>São quatro etapas, e o planejamento é a primeira delas. O exemplo do material mostra isso: no orçamento anual de um município, primeiro se estima a receita e se fixa a despesa, depois se definem prioridades e só então vêm o acompanhamento e o controle das despesas realizadas.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Conceitos Iniciais</i></p>",
1:"<p>Certo. É o quadro do Resumo sobre direito financeiro, itens 1 e 2: é <b>um dos ramos do direito público</b> e tem por objeto a <b>disciplina jurídica de toda a Atividade Financeira do Estado (AFE)</b>.</p><p>O quadro tem quatro itens — vale decorar na ordem: ramo do direito público; objeto = toda a AFE; abrange receitas, despesas, orçamento público e créditos públicos; e, no foco administrativo, trata da própria AFO.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Direito Financeiro</i></p>",
2:"<p>Errado — <b>inverteu as duas leis</b>. O Resumo é expresso: a <b>Lei nº 4.320/64 estatui normas gerais de direito financeiro</b> e a <b>LRF (LC 101/00) estatui normas de finanças públicas voltadas para a responsabilidade na gestão fiscal</b>.</p><p>Guarde pelo nome das leis: quem fala em <i>responsabilidade fiscal</i> é a Lei de Responsabilidade Fiscal. Sobrou para a 4.320/64 as normas gerais de direito financeiro. A banca gosta de trocar exatamente isto.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Direito Financeiro</i></p>",
3:"<p>Certo. Está no esquema do que a Atividade Financeira do Estado <b>abrange</b>: a <b>criação de crédito público por meio de endividamento (empréstimos)</b>.</p><p>O esquema do Resumo tem cinco blocos: obtenção de recursos pelas receitas públicas; gestão da aplicação pelo orçamento público; dispêndio pelas despesas públicas; criação de crédito público por endividamento; e a satisfação de três necessidades públicas.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Atividade Financeira do Estado</i></p>",
4:"<p>Certo — são exatamente as <b>três necessidades públicas</b> listadas no esquema da AFE.</p><p>Na ordem do material: a <b>prestação de serviços públicos</b>; o <b>exercício regular do poder de polícia</b>; e a <b>intervenção no domínio econômico</b>. Se a questão citar as três, é certo; se suprimir uma (em geral a intervenção no domínio econômico), é errado.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Atividade Financeira do Estado</i></p>",
5:"<p>Errado — trocou estrito por amplo. O Resumo é claro: em <b>sentido estrito</b>, orçamento público é a <b>LOA</b>. Em <b>sentido amplo</b> é que ele é a integração do <b>PPA, da LDO e da LOA</b>.</p><p>Bizu para não errar: <i>estrito</i> é o menor, então é uma lei só (LOA); <i>amplo</i> é o maior, então são as três leis juntas.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Orçamento Público — CONCEITOS QUE JÁ CAÍRAM EM PROVAS</i></p>",
6:"<p>Certo — é o quadro \"É UMA LEI\" do Resumo, com estas cinco naturezas.</p><p>Decore o quadro inteiro: <b>FORMAL</b> (fruto de um processo legislativo); <b>MATERIAL</b> (pode hospedar normas gerais e abstratas); <b>TEMPORÁRIA</b> (limitada no tempo); <b>ORDINÁRIA</b> (aprovação por maioria simples); e <b>ESPECIAL</b> (trata de matéria específica). Praticamente toda questão sobre a natureza da LOA sai daí.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Orçamento Público — É UMA LEI</i></p>",
7:"<p>Errado no quórum. O quadro do Resumo diz o oposto: o orçamento é lei <b>ORDINÁRIA</b>, de <b>aprovação por maioria simples</b>.</p><p>Cuidado com a armadilha da redação: ser lei <b>especial</b> significa apenas que ela <b>trata de matéria específica</b> — não muda o quórum nem a espécie normativa. Especial na matéria, ordinária na aprovação.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Orçamento Público — É UMA LEI</i></p>",
8:"<p>Errado — <b>inverteu os Poderes</b>. No conceito que o Resumo registra como já cobrado em provas, o orçamento é o ato pelo qual o <b>Poder Executivo prevê</b> e o <b>Poder Legislativo autoriza</b> a execução das despesas.</p><p>Faz sentido com o ciclo: quem elabora a proposta e conhece a arrecadação é o Executivo; quem dá a autorização para gastar é o Legislativo. A banca só troca a ordem dos dois Poderes.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Orçamento Público — CONCEITOS QUE JÁ CAÍRAM EM PROVAS</i></p>",
9:"<p>Certo. É a OBSERVAÇÃO 01 do Resumo: <b>em regra, a LOA é lei de caráter autorizativo</b>, ou seja, o administrador público <b>não é obrigado</b> a realizar as despesas fixadas no orçamento, <b>exceto quanto às emendas impositivas</b> dos parlamentares.</p><p>Guarde a estrutura: regra = autorizativo; exceção = emendas impositivas. Foi justamente por elas que parte do orçamento deixou de ser meramente autorizativo.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Orçamento Público — OBSERVAÇÃO 01</i></p>",
10:"<p>Errado no percentual. Pela OBSERVAÇÃO 02 do Resumo, a <b>EC 86/2015</b> tornou obrigatória a execução das despesas impostas pelas emendas individuais até o limite de <b>1,2% da Receita Corrente Líquida</b> — e não 2%.</p><p>Os 2% só apareceram depois: foi a <b>EC 126/2022</b> que alterou o limite de 1,2% para 2% (CF, art. 166, § 9º). Fixe o par: <b>86/2015 → 1,2%</b>; <b>126/2022 → 2%</b>. A troca dos dois números é o erro mais explorado neste tema.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Orçamento Público — OBSERVAÇÕES 02 e 03</i></p>",
11:"<p>Certo. É a OBSERVAÇÃO 03 do Resumo: em <b>2022, a Emenda Constitucional nº 126</b> alterou esse limite de <b>1,2% para 2%</b> (CF: art. 166, § 9º).</p><p>Encadeie com a observação anterior: a EC 86/2015 criou a execução obrigatória das emendas individuais em 1,2% da RCL, e a EC 126/2022 elevou o teto para 2%. Com isso, parte do orçamento deixou de ser meramente autorizativo e tornou-se impositivo.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Orçamento Público — OBSERVAÇÃO 03</i></p>",
12:"<p>Errado — é o inverso da OBSERVAÇÃO 05 do Resumo: o orçamento público <b>pode</b> ser submetido a controle <b>abstrato (ou concentrado)</b> de constitucionalidade.</p><p>Aqui a banca aposta na ideia antiga de que, sendo lei de efeitos concretos, a LOA não seria fiscalizável em abstrato. O material já corta essa dúvida: pode. Sempre que a assertiva negar o controle concentrado da lei orçamentária, marque errado.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Orçamento Público — OBSERVAÇÃO 05</i></p>",
13:"<p>Certo. É literalmente a OBSERVAÇÃO 04 do Resumo: existe <b>corrente doutrinária</b> no sentido de que o <b>§ 10 do art. 165 da CF, introduzido pela EC 100/19</b>, transformou a natureza jurídica do orçamento de <b>autorizativo para impositivo</b>.</p><p>O material acrescenta que isso <b>já foi objeto de provas</b>. Repare no cuidado da redação: a assertiva fala em \"existe corrente doutrinária\", e não que o orçamento passou a ser impositivo — por isso está certa.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Orçamento Público — OBSERVAÇÃO 04</i></p>",
14:"<p>Certo. É a definição do Resumo: as funções do orçamento podem ser agrupadas em <b>três categorias principais: alocativas, distributivas e estabilizadoras</b>.</p><p>Use o BIZU do material para nunca confundir: o Estado <b>aloca</b> a produção de bens e serviços, <b>distribui</b> os recursos e <b>estabiliza</b> a economia. Em uma linha: aloca o que o mercado não oferece, distribui renda para diminuir desigualdades, estabiliza a economia.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Funções do Orçamento — BIZU!</i></p>",
15:"<p>Certo. Está no quadro da <b>função alocativa</b>: ela serve para <b>criar condições para que bens privados sejam oferecidos no mercado (oligopólios, monopólios)</b> e para <b>corrigir imperfeições nas falhas de mercado</b>.</p><p>Palavras-chave que puxam para a alocativa: falha de mercado, monopólio, oligopólio, externalidade, bens públicos, infraestrutura. Nada disso é distribuição de renda — logo, não é distributiva.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Função Alocativa</i></p>",
16:"<p>Errado — trocou a função. <b>Corrigir os efeitos negativos de externalidades</b> é o <b>objetivo 1 da função alocativa</b>, não da distributiva.</p><p>O material define externalidade como o efeito indesejável que uma atividade econômica causa sobre terceiros (ex.: efeitos sociais, econômicos e ambientais indiretamente causados pela venda de um produto ou serviço). A distributiva cuida de outra coisa: <b>corrigir a distribuição de renda</b> por tributação, transferências unilaterais, subsídios e incentivos fiscais.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Função Alocativa — objetivos</i></p>",
17:"<p>Certo — é o <b>objetivo 5 da função alocativa</b> no Resumo: <b>investir em infraestrutura, por gerarem benefícios sociais e externalidades positivas para toda a sociedade</b>.</p><p>Note o contraste que a banca explora: <b>externalidade negativa</b> (corrigir) e <b>externalidade positiva</b> (investir em infraestrutura) estão as duas na alocativa. Externalidade, em qualquer sinal, é assunto de função alocativa.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Função Alocativa — objetivos</i></p>",
18:"<p>Errado — a imunidade da EBCT é o <b>EXEMPLO de função ALOCATIVA</b> do Resumo, não distributiva.</p><p>O raciocínio do material: o STF considera a EBCT imune a impostos porque ela oferta a entrega de correspondência em localidades distantes a preços módicos, serviço que o mercado privado não ofereceria adequadamente (a não ser por alto custo). Ao imunizar as atividades mais rentáveis da empresa para custear as operações em <b>locais pouco habitados e de difícil acesso</b>, o Governo promove <b>correções na alocação de serviços não fornecidos pelo setor privado</b> — alocativa pura.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Função Alocativa — EXEMPLO da EBCT</i></p>",
19:"<p>Certo — é o <b>EXEMPLO 02</b> da função distributiva, com este mesmo enunciado.</p><p>No material: para aumentar a taxa de escolaridade na região \"X\", o Governo contempla no orçamento ações vinculadas a programas educacionais na região, financiadas por <b>impostos de características progressivas cobrados nas regiões mais ricas</b> do país. Tirar de quem tem mais para aplicar em quem tem menos é o núcleo da <b>função distributiva</b>.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Função Distributiva — EXEMPLO 02</i></p>",
20:"<p>Certo. No quadro da <b>função distributiva</b>, o Resumo lista os meios pelos quais o Estado torna a sociedade menos desigual: <b>tributação, transferências unilaterais, subsídios, incentivos fiscais</b> e <b>alocação de recursos em camadas mais pobres da população</b>.</p><p>São cinco instrumentos — decore-os, porque a banca costuma pegar um deles (subsídios, incentivos fiscais ou a alocação nas camadas mais pobres) e atribuí-lo à função alocativa.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Função Distributiva</i></p>",
21:"<p>Errado — o Resumo afirma exatamente o contrário. No quadro do <b>PROGRAMA BOLSA FAMÍLIA</b>: os programas de transferência de renda no Brasil <b>não são baseados em critérios alocativos compulsórios</b> dos assistidos.</p><p>Eles se destinam a famílias em situação de vulnerabilidade social e visam garantir acesso a recursos financeiros para suprir necessidades básicas. Além disso, a participação é <b>voluntária</b> e não exige contrapartida compulsória. Note ainda a impropriedade de falar em critério \"alocativo\" em um programa que é típico da função <b>distributiva</b>.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Função Distributiva — PROGRAMA BOLSA FAMÍLIA</i></p>",
22:"<p>Errado. O Resumo diz que os critérios de seleção desses programas <b>não são de natureza incondicionada</b>, justamente porque levam em consideração condições como <b>indicadores de renda per capita</b>, <b>composição familiar</b> e <b>condição de trabalho</b>, entre outros fatores.</p><p>Fixe os três itens da lista do material. Se a assertiva disser que os critérios ignoram renda per capita ou composição familiar, está errada: são exatamente esses dados que identificam as famílias que mais necessitam de assistência.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Função Distributiva — PROGRAMA BOLSA FAMÍLIA</i></p>",
23:"<p>Certo — é o <b>EXEMPLO 01 da função estabilizadora</b>, com estas mesmas medidas.</p><p>No material: em situações de <b>recessão econômica</b>, o governo adota <b>medidas expansionistas</b>, como <b>aumento dos gastos públicos e redução de impostos</b>, para estimular a demanda agregada e impulsionar a atividade econômica. O EXEMPLO 02 é o espelho disso: em <b>alta inflação</b>, medidas <b>restritivas</b> — aumentar impostos e reduzir gastos — para diminuir a demanda agregada.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Função Estabilizadora — EXEMPLO 01</i></p>",
24:"<p>Errado por restringir os agentes. Para o Resumo, demanda agregada é a quantidade total de bens e serviços que <b>todos os setores da economia — consumidores, empresas e governo</b> — estão dispostos e são capazes de comprar em determinado período, a um determinado preço.</p><p>A palavra plantada é \"apenas as famílias\". O próprio nome entrega a resposta: <b>agregada</b> é a demanda total da economia como um todo, e o governo está dentro dela — é por isso que aumentar gasto público move a demanda agregada.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Função Estabilizadora — O QUE É DEMANDA AGREGADA?</i></p>",
25:"<p>Certo. É a parte final da definição de AFO no Resumo: o conjunto de atividades e processos de planejamento, execução, controle e avaliação dos recursos públicos, <b>visando à eficiência, eficácia e transparência na gestão das finanças públicas</b>.</p><p>São três finalidades, nesta ordem no material: <b>eficiência, eficácia e transparência</b>. O exemplo do orçamento municipal fecha a ideia — acompanhamento por relatórios e prestação de contas para garantir o equilíbrio das finanças e o cumprimento das metas.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Conceitos Iniciais</i></p>",
26:"<p>Certo — é o item 3 do quadro do Resumo: o direito financeiro <b>abrange receitas, despesas, orçamento público e créditos públicos</b>.</p><p>Repare no paralelo com o esquema da Atividade Financeira do Estado, que também trabalha receitas, orçamento, despesas e crédito público. Não é coincidência: o objeto do direito financeiro é a disciplina jurídica de toda a AFE.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Direito Financeiro</i></p>",
27:"<p>Errado. A <b>intervenção no domínio econômico</b> é justamente a <b>terceira</b> das necessidades públicas satisfeitas pela Atividade Financeira do Estado, no esquema do Resumo.</p><p>A lista completa é: prestação de serviços públicos; exercício regular do poder de polícia; e intervenção no domínio econômico. Esta terceira é a que a banca mais tenta excluir — memorize as três sempre juntas.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Atividade Financeira do Estado</i></p>",
28:"<p>Certo. Literal do quadro \"É UMA LEI\" do Resumo: o orçamento é lei <b>TEMPORÁRIA</b>, porque é <b>limitada no tempo</b>.</p><p>A razão está na própria definição de orçamento público do material: instrumento para estimar, planejar e controlar os recursos financeiros disponíveis em <b>determinado período, geralmente um ano</b>. Vigência delimitada, logo lei temporária.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Orçamento Público — É UMA LEI</i></p>",
29:"<p>Errado — o orçamento é lei <b>formal E material</b>. O quadro do Resumo registra as duas qualidades: <b>FORMAL</b> porque é fruto de um processo legislativo, e <b>MATERIAL</b> porque <b>pode hospedar normas gerais e abstratas</b>.</p><p>A assertiva trunca o quadro, ficando só com o lado formal para negar o material. Guarde a dupla junto: se cair \"lei apenas formal\", está errado; se cair \"lei formal e material\", está certo.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Orçamento Público — É UMA LEI</i></p>",
30:"<p>Certo. São os itens 3 e 4 do quadro da <b>função alocativa</b>: <b>criar condições para que bens privados sejam oferecidos no mercado</b> e <b>corrigir imperfeições nas falhas de mercado (devido ao alto risco, custo) pelos produtores</b>.</p><p>Compare com o item 2 do mesmo quadro: oferecer bens e serviços públicos que não seriam oferecidos pelo mercado privado (ou seriam em condições ineficientes). O eixo da alocativa é sempre o mesmo — o mercado falha, o Estado corrige.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Função Alocativa</i></p>",
31:"<p>Certo. É a definição do Resumo: na função estabilizadora, o governo utiliza instrumentos <b>fiscais, monetários e cambiais</b> para controlar a inflação, o desemprego e garantir a estabilidade macroeconômica.</p><p>Guarde o trio <b>fiscal, monetário e cambial</b> e a finalidade: evitar flutuações econômicas prejudiciais, minimizar impactos negativos e promover a recuperação econômica.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Função Estabilizadora</i></p>",
32:"<p>Errado — a <b>alocação de recursos em camadas mais pobres da população</b> está no quadro da <b>função DISTRIBUTIVA</b> do Resumo, ao lado de tributação, transferências unilaterais, subsídios e incentivos fiscais.</p><p>Aqui a banca joga com a palavra \"alocação\" para empurrar o candidato à função alocativa. Não caia: o critério não é o verbo, é a <b>finalidade</b>. Se a finalidade é tornar a sociedade menos desigual, é distributiva; se é suprir serviço que o mercado não oferece, é alocativa.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Função Distributiva</i></p>",
33:"<p>Certo — é o <b>objetivo 3 da função alocativa</b> no Resumo: <b>definir o valor de contribuição de cada cidadão para financiar os serviços públicos</b>.</p><p>Os quatro primeiros objetivos da alocativa andam juntos: corrigir efeitos negativos de externalidades; determinar tipos e quantidades de bens públicos a serem providos; definir o valor da contribuição de cada cidadão; e prover os serviços escolhidos pela sociedade via sistema eleitoral. Decidir <b>quanto cada um paga</b> pelo serviço é etapa da alocação, não redistribuição de renda.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Função Alocativa — objetivos</i></p>",
34:"<p>Errado. O quadro do <b>PROGRAMA BOLSA FAMÍLIA</b> encerra com a frase oposta: a participação nos programas é <b>voluntária</b> e <b>não exige qualquer tipo de contrapartida compulsória</b> dos beneficiários.</p><p>Duas ideias do material caem sempre juntas e sempre negadas pela banca: os programas <b>não</b> se baseiam em critérios alocativos compulsórios, e <b>não</b> exigem contrapartida compulsória. Qualquer assertiva com \"compulsório\" neste tema tende a estar errada.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Função Distributiva — PROGRAMA BOLSA FAMÍLIA</i></p>",
35:"<p>Certo — é o <b>objetivo 4 da função alocativa</b>: <b>prover os serviços públicos que foram escolhidos pela sociedade indiretamente por meio da escolha dos governantes via sistema eleitoral</b>.</p><p>A lógica do material: como não há como consultar cada cidadão sobre cada bem público, a escolha se dá de forma <b>indireta</b> — o eleitor escolhe governantes, e estes definem os tipos e quantidades de bens públicos a prover. É a alocativa decidindo <b>o que</b> será ofertado.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Função Alocativa — objetivos</i></p>",
36:"<p>Errado — a norma de <b>normas gerais de direito financeiro</b> é a <b>Lei nº 4.320/64</b>. A LC nº 101/2000 (LRF) estatui <b>normas de finanças públicas voltadas para a responsabilidade na gestão fiscal</b>.</p><p>É a mesma troca do começo do Resumo, invertida de outro jeito. Amarre pelo nome: <b>4.320/64 = normas gerais de direito financeiro</b>; <b>LC 101/00 = responsabilidade na gestão fiscal</b>. Quem confunde as duas erra questão de graça.</p><p class='fb-fonte'>AFO — Resumo 01 · <i>Direito Financeiro</i></p>",
};

/* registro do módulo 01 */
window.MOD = window.MOD || {};
window.MOD.m01 = {
  n:"01", nome:"Conceitos iniciais e funções do orçamento", pronto:true,
  CARDS:window.DATA.CARDS, QS:window.DATA.QS, FEY:window.DATA.FEY,
  TEORIA:window.DATA.TEORIA, EX:window.DATA.EX, KIT:window.DATA.KIT,
  UNITS:window.DATA.UNITS, DISCURSIVA:window.DATA.DISCURSIVA, CASO:window.DATA.CASO,
  COM:COM,
  TEC:[["CESPE","Q3begA"],["FCC","Q3begc"],["FGV","Q3begi"],["VUNESP","Q3begk"]],
  PROVA_POOL:window.DATA.PROVA_POOL
};
