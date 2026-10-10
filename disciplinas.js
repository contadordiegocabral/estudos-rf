/* Matérias, provas e prioridade de estudo
   Espinha dorsal: Receita Federal. Depois ISS Curitiba. Depois os demais.
   Os módulos NÃO são separados por edital — cada tema exibe em quais provas cai. */

/* ---------- catálogo de matérias ---------- */
window.MAT = {
  consult: {nome:"Consultoria",                                   curto:"Consultoria"},
  legtrib: {nome:"Legislação Tributária",                          curto:"Leg. Tributária", nucleo:true},
  dtrib:   {nome:"Direito Tributário",                             curto:"D. Tributário",   nucleo:true},
  contab:  {nome:"Contabilidade Geral e de Custos",                curto:"Contabilidade",   nucleo:true},
  cavan:   {nome:"Contabilidade Avançada",                        curto:"Cont. Avançada",  nucleo:true},
  audit:   {nome:"Auditoria",                                      curto:"Auditoria",       nucleo:true},
  legadu:  {nome:"Legislação Aduaneira",                           curto:"Leg. Aduaneira",  nucleo:true},
  info:    {nome:"Tecnologia da Informação",                       curto:"TI",              nucleo:true},
  dados:   {nome:"Fluência em Dados",                              curto:"Dados"},
  dconst:  {nome:"Direito Constitucional",                         curto:"D. Constitucional"},
  dadm:    {nome:"Direito Administrativo",                         curto:"D. Administrativo"},
  dprev:   {nome:"Direito Previdenciário",                         curto:"D. Previdenciário"},
  comint:  {nome:"Comércio Internacional",                         curto:"Comércio Int."},
  port:    {nome:"Língua Portuguesa",                              curto:"Português"},
  ingles:  {nome:"Língua Inglesa",                                 curto:"Inglês"},
  rlm:     {nome:"Raciocínio Lógico-Matemático",                   curto:"RLM"},
  estat:   {nome:"Estatística",                                    curto:"Estatística"},
  matem:   {nome:"Matemática e Matemática Financeira",             curto:"Matemática"},
  adm:     {nome:"Administração Geral e Pública",                  curto:"Administração"},
  econ:    {nome:"Economia e Finanças Públicas",                   curto:"Economia"},
  afo:     {nome:"AFO e Contabilidade Pública",                    curto:"AFO"},
  lrf:     {nome:"Lei de Responsabilidade Fiscal",                 curto:"LRF"},
  context: {nome:"Controle Externo e Tribunais de Contas",         curto:"Controle Externo"},
  dcivpen: {nome:"Direito Civil, Penal e Empresarial",             curto:"Civil e Penal"},
  dhum:    {nome:"Direitos Humanos",                               curto:"D. Humanos"},
  lai:     {nome:"Lei de Acesso à Informação",                     curto:"LAI"},
  lgpd:    {nome:"LGPD e Direito Digital",                         curto:"LGPD"},
  legpr:   {nome:"Legislação do Paraná e do TJ-PR",                curto:"Leg. Paraná"},
  cepr:    {nome:"Constituição do Estado do Paraná",               curto:"CE-PR"},
  legtjpr: {nome:"Legislação do TJPR",                             curto:"Leg. TJPR"},
  legcwb:  {nome:"Legislação Tributária de Curitiba",              curto:"Leg. Curitiba"},
  infob:   {nome:"Noções de Informática",                          curto:"Informática"},
  ctb:     {nome:"Legislação de Trânsito e IPVA",                  curto:"CTB e IPVA"},
  tge:     {nome:"Teoria Geral do Estado",                         curto:"TGE"}
};

/* ---------- trilhas construídas ---------- */
window.DISC = {
  cpub: {
    id:"cpub", nome:"Cont. Pública", cor:"u2", mat:"afo",
    nomeLongo:"Contabilidade Pública",
    mods:["cpub01","cpub02","cpub03","cpub04","cpub05","cpub06","cpub07",
          "cpub08","cpub09","cpub10","cpub11","cpub12","cpub13"],
    pesos:[
      {mod:"01", tema:"Conceitos iniciais e NBC TSP Estrutura Conceitual (parte 1)", q:null},
      {mod:"02", tema:"NBC TSP Estrutura Conceitual (parte 2)",                      q:null},
      {mod:"03", tema:"Regimes orçamentário e patrimonial",                          q:null},
      {mod:"04", tema:"Patrimônio público e elementos das demonstrações",            q:null},
      {mod:"05", tema:"Variações patrimoniais",                                      q:null},
      {mod:"06", tema:"Plano de Contas Aplicado ao Setor Público (PCASP)",           q:null},
      {mod:"07", tema:"NBC TSP 11 — apresentação das demonstrações contábeis",       q:null},
      {mod:"08", tema:"Balanço orçamentário",                                        q:null},
      {mod:"09", tema:"Balanço financeiro",                                          q:null},
      {mod:"10", tema:"Balanço patrimonial",                                         q:null},
      {mod:"11", tema:"Demonstração das variações patrimoniais (DVP)",               q:null},
      {mod:"12", tema:"Demonstração dos fluxos de caixa (DFC)",                      q:null},
      {mod:"13", tema:"Demonstração das mutações no patrimônio líquido (DMPL)",      q:null}
    ],
    pesoNota:"ordem do sumário do resumo Radegondes — do conceito até as demonstrações, um assunto puxando o seguinte"
  },
  afo: {
    id:"afo", nome:"AFO", cor:"u1", mat:"afo",
    nomeLongo:"Administração Financeira e Orçamentária",
    mods:["m01","m02","m03","m04","m05","m06","m07","m08","m09","m10","m11"],
    pesos:null
  },
  lrf: {
    id:"lrf", nome:"LRF", cor:"u2", mat:"lrf",
    nomeLongo:"Lei de Responsabilidade Fiscal",
    mods:["lrf01","lrf02","lrf03","lrf04","lrf05","lrf06"],
    pesos:[
      {mod:"01", tema:"Disposições preliminares (arts. 1º e 2º)", q:25},
      {mod:"02", tema:"Planejamento e orçamento (arts. 3º a 10)", q:38},
      {mod:"03", tema:"Receita, renúncia e transferências (arts. 11 a 14 e 25 a 28)", q:29},
      {mod:"04", tema:"Despesa pública e despesas com pessoal (arts. 15 a 24)", q:94},
      {mod:"05", tema:"Dívida e endividamento (arts. 29 a 42)", q:25},
      {mod:"06", tema:"Gestão patrimonial, transparência e controle (arts. 43 a 75)", q:37}
    ]
  },
  contab: {
    id:"contab", nome:"Contabilidade", cor:"u3", mat:"contab",
    nomeLongo:"Contabilidade Geral e de Custos",
    mods:["contab01","contab02","contab03","contab04","contab05","contab06",
          "contab07","contab08","contab09","contab10","contab11","contab12","contab13"],
    pesos:[
      {mod:"01", tema:"Conceito, objeto, finalidade e teoria das contas", q:null},
      {mod:"02", tema:"Escrituração e regimes contábeis",               q:null},
      {mod:"03", tema:"Ativo circulante",                                q:null},
      {mod:"04", tema:"Estoques (CPC 16)",                               q:null},
      {mod:"05", tema:"Ativo não circulante",                            q:null},
      {mod:"06", tema:"Depreciação, amortização e exaustão",             q:null},
      {mod:"07", tema:"Passivo exigível (CPC 08 e CPC 20)",              q:null},
      {mod:"08", tema:"Patrimônio líquido",                              q:null},
      {mod:"09", tema:"Balanço patrimonial",                             q:null},
      {mod:"10", tema:"DRE, DRA e CPC 26",                               q:null},
      {mod:"11", tema:"Demonstração do valor adicionado (CPC 09)",       q:null},
      {mod:"12", tema:"Demonstração dos fluxos de caixa (CPC 03)",       q:null},
      {mod:"13", tema:"DLPA e DMPL",                                     q:null}
    ],
    pesoNota:"ordem do sumário do resumo Radegondes — a base da matéria, na sequência em que ela se constrói"
  }
};
window.DISC.dtrib = {
  id:"dtrib", nome:"Dir. Tributário", cor:"u4", mat:"dtrib",
  nomeLongo:"Direito Tributário e Legislação Tributária",
  mods:["dtrib01","dtrib02","dtrib03","dtrib04","dtrib05","dtrib06","dtrib07",
        "dtrib08","dtrib09","dtrib10","dtrib11","dtrib12","dtrib13","dtrib14"],
  pesos:[
    {mod:"01", tema:"Conceito de tributo e natureza jurídica",                   q:null},
    {mod:"02", tema:"Limitações constitucionais ao poder de tributar",           q:null},
    {mod:"03", tema:"Competência tributária e espécies de tributos",              q:null},
    {mod:"04", tema:"Repartição das receitas tributárias",                       q:null},
    {mod:"05", tema:"Legislação tributária — vigência, aplicação e interpretação", q:null},
    {mod:"06", tema:"Obrigação tributária — fato gerador e sujeitos",             q:null},
    {mod:"07", tema:"Responsabilidade tributária",                               q:null},
    {mod:"08", tema:"Crédito tributário e lançamento",                            q:null},
    {mod:"09", tema:"Suspensão do crédito tributário",                           q:null},
    {mod:"10", tema:"Extinção do crédito tributário",                            q:null},
    {mod:"11", tema:"Exclusão do crédito tributário",                            q:null},
    {mod:"12", tema:"Garantias e privilégios do crédito tributário",             q:null},
    {mod:"13", tema:"Administração tributária — fiscalização",                    q:null},
    {mod:"14", tema:"Dívida ativa e certidões negativas",                        q:null}
  ],
  pesoNota:"ordem do sumário do resumo Radegondes — segue a espinha do próprio Código Tributário Nacional, do conceito de tributo até dívida ativa e certidões"
};

window.DISC.legadu = {
  id:"legadu", nome:"Leg. Aduaneira", cor:"u3", mat:"legadu",
  nomeLongo:"Legislação Aduaneira",
  mods:["legadu01","legadu02","legadu03","legadu04","legadu05","legadu06","legadu07","legadu08","legadu09"],
  pesos:[
    {mod:"01", tema:"Controles do comércio exterior, SISCOMEX, jurisdição aduaneira e controle de veículos", q:null},
    {mod:"02", tema:"Imposto de Importação — fato gerador, base de cálculo, sujeição passiva e regimes de tributação", q:null},
    {mod:"03", tema:"Imposto de Exportação, IPI, PIS/COFINS, ICMS, CIDE e AFRMM na importação", q:null},
    {mod:"04", tema:"Despacho aduaneiro de importação e exportação", q:null},
    {mod:"05", tema:"Regimes especiais I — trânsito, admissão temporária e drawback", q:null},
    {mod:"06", tema:"Regimes especiais II — entreposto, RECOF, loja franca, depósitos e áreas especiais", q:null},
    {mod:"07", tema:"Bagagem, abandono, extravio, infrações, perdimento e multas", q:null},
    {mod:"08", tema:"Intervenientes, sanções, contrabando, representação fiscal e destinação", q:null},
    {mod:"09", tema:"Valoração aduaneira, Mercosul e subfaturamento", q:null}
  ],
  pesoNota:"a receita na fronteira: controle do comércio exterior e Imposto de Importação. Material do curso de Legislação Aduaneira do Estratégia (2021), aulas 00 a 08 — confira a atualização do Regulamento Aduaneiro, que muda com frequência."
};

window.DISC.audgov = {
  id:"audgov", nome:"Aud. Governamental", cor:"u4", mat:"audit",
  nomeLongo:"Auditoria Governamental",
  mods:["audgov01","audgov02","audgov03","audgov04","audgov05","audgov06"],
  pesos:[
    {mod:"01", tema:"ISSAI 1, 10 e 100: fundamentos da auditoria governamental", q:null},
    {mod:"02", tema:"ISSAI 200, 300 e 400: auditoria financeira, operacional e de conformidade", q:null},
    {mod:"03", tema:"ISSAI 3000 e 4000: abordagens, evidência e técnicas de auditoria", q:null},
    {mod:"04", tema:"NBASP 10, 12 e 20 e instrumentos de fiscalização", q:null},
    {mod:"05", tema:"Manual de Auditoria Operacional do TCU", q:null},
    {mod:"06", tema:"Relato integrado, auditoria interna governamental, fraude e linhas de defesa", q:null}
  ],
  pesoNota:"o controle externo e interno do dinheiro público: normas ISSAI/NBASP, tipos de auditoria e o manual do TCU. Material de Auditoria Governamental do Radegondes — confira a versão vigente das normas."
};

window.DISC.audpriv = {
  id:"audpriv", nome:"Aud. Privada", cor:"u5", mat:"audit",
  nomeLongo:"Auditoria Privada",
  mods:["audpriv01","audpriv02","audpriv03","audpriv04","audpriv05","audpriv06","audpriv07","audpriv08"],
  pesos:[
    {mod:"01", tema:"Auditoria independente, objetivos gerais e ética (NBC TA 200, 210, 220)", q:null},
    {mod:"02", tema:"Planejamento da auditoria (NBC TA 300) e noções de 315, 320 e 330", q:null},
    {mod:"03", tema:"Riscos de auditoria, materialidade e respostas ao risco (NBC TA 315, 320, 330, 240, 450, 500)", q:null},
    {mod:"04", tema:"Evidência de auditoria (NBC TA 500)", q:null},
    {mod:"05", tema:"Testes e procedimentos de auditoria", q:null},
    {mod:"06", tema:"Amostragem em auditoria (NBC TA 530)", q:null},
    {mod:"07", tema:"Documentação de auditoria (NBC TA 230)", q:null},
    {mod:"08", tema:"Opinião e relatório do auditor (NBC TA 700, 705, 706, 570, 510)", q:null}
  ],
  pesoNota:"as NBC TA, do planejamento ao relatório do auditor independente. Material de Auditoria Privada do Radegondes — as NBC TA são revisadas com frequência; confira a versão vigente."
};

window.DISC.audfis = {
  id:"audfis", nome:"Aud. Fiscal", cor:"u2", mat:"audit",
  nomeLongo:"Auditoria Fiscal",
  mods:["audfis01","audfis02","audfis03"],
  pesos:[
    {mod:"01", tema:"Presunção de omissão de receitas, fraudes e técnicas de auditoria", q:null},
    {mod:"02", tema:"Documentos eletrônicos: SPED, NF-e, NFC-e, NFS-e, ECD, ECF e EFD", q:null},
    {mod:"03", tema:"Blocos da EFD, grupos da NF-e, comunicação com a SEFAZ e eventos", q:null}
  ],
  pesoNota:"a auditoria que a Receita faz: omissão de receitas e escrituração digital (SPED, NF-e, EFD). Material de Auditoria Fiscal do Radegondes — leiautes e regras da EFD mudam; confira a versão vigente."
};

window.DISC.cext = {
  id:"cext", nome:"Controle Externo", cor:"u1", mat:"context",
  nomeLongo:"Controle Externo e Tribunais de Contas",
  mods:["cext01","cext02","cext03","cext04","cext05","cext06","cext07","cext08"],
  pesos:[
    {mod:"01", tema:"Controles da Administração Pública: controle interno, externo, mérito e autotutela", q:null},
    {mod:"02", tema:"Espécies de controle: interno, externo, popular e administrativo (tutela e autotutela)", q:null},
    {mod:"03", tema:"Controle legislativo (parlamentar): direto/político, indireto/técnico (Tribunais de Contas) e CPI", q:null},
    {mod:"04", tema:"Controle judicial e meios de controle dos atos da Administração (MS, ação popular, ACP, recursos)", q:null},
    {mod:"05", tema:"Funções dos Tribunais de Contas: fiscalizadora, judicante, sancionadora, consultiva, corretiva e demais", q:null},
    {mod:"06", tema:"Natureza jurídica, vinculação e eficácia das decisões dos Tribunais de Contas", q:null},
    {mod:"07", tema:"CF: fiscalização dos Municípios (art. 31), fiscalização COFOP (art. 70) e art. 71, I a III", q:null},
    {mod:"08", tema:"CF: art. 71, IV a XI e §§, Comissão Mista (art. 72), composição do TCU e controle interno (art. 74)", q:null}
  ],
  pesoNota:"Resumos do Radegondes: o controle da Administração e a atuação dos Tribunais de Contas, da CF ao controle judicial. Confira sempre a legislação, as súmulas e os valores vigentes antes da prova."
};

window.DISC.adpub = {
  id:"adpub", nome:"Adm. Pública", cor:"u2", mat:"adm",
  nomeLongo:"Administração Pública",
  mods:["adpub01","adpub02","adpub03","adpub04","adpub05","adpub06","adpub07","adpub08","adpub09","adpub10"],
  pesos:[
    {mod:"01", tema:"Organização do Estado e da Administração Pública: princípios do art. 37, acumulação, improbidade e responsabilidade civil", q:null},
    {mod:"02", tema:"Modelos de administração pública (patrimonialista, burocrático, gerencial) e reformas de 1936, 1967 e 1995", q:null},
    {mod:"03", tema:"Governabilidade, governança, accountability, custo-efetividade, agenda de políticas e burocratas de rua", q:null},
    {mod:"04", tema:"Autarquias, agências reguladoras e executivas, terceiro setor, Organizações Sociais e OSCIP", q:null},
    {mod:"05", tema:"Governo eletrônico, accountability (vertical, horizontal e societal), transparência ativa e passiva, compliance e OCDE", q:null},
    {mod:"06", tema:"Gestão da qualidade no serviço público, dimensões da qualidade, paradigma pós-burocrático, gestão por resultados e atendimento ao público", q:null},
    {mod:"07", tema:"Novas tecnologias gerenciais, indicadores de desempenho, ROI, gestão do desempenho, ciclo PDCA e Balanced Scorecard", q:null},
    {mod:"08", tema:"Políticas públicas: conceito, política social, modelos de formulação, redes e etapas do ciclo", q:null},
    {mod:"09", tema:"Comunicação na gestão pública, parcerias público-privadas, assessoria e ética no serviço público", q:null},
    {mod:"10", tema:"Controles da administração pública: interno, externo, popular, administrativo, legislativo, judicial e meios de controle", q:null}
  ],
  pesoNota:"Resumos do Radegondes: modelos de gestão pública, governança, controle e políticas públicas. Confira sempre a legislação, as súmulas e os valores vigentes antes da prova."
};

window.DISC.adger = {
  id:"adger", nome:"Adm. Geral", cor:"u3", mat:"adm",
  nomeLongo:"Administração Geral",
  mods:["adger01","adger02","adger03","adger04","adger05","adger06","adger07","adger08","adger09","adger10","adger11","adger12"],
  pesos:[
    {mod:"01", tema:"Papéis do administrador, níveis hierárquicos, funções administrativas, 4 Es e organização formal/informal", q:null},
    {mod:"02", tema:"Teorias administrativas, paradigmas da Administração Pública, Administração Científica, Teoria Clássica de Fayol e Relações Humanas", q:null},
    {mod:"03", tema:"Teoria Neoclássica, APO e SMART, Burocracia, Estruturalismo, Maslow, Teorias X e Y, Comportamental e Contingência", q:null},
    {mod:"04", tema:"Processo de planejamento: funções administrativas, níveis, planos, planejamento formal e missão, visão e valores", q:null},
    {mod:"05", tema:"Planejamento estratégico: elementos, níveis hierárquicos, SMART, tipos de estratégia, BSC e matriz GE/McKinsey", q:null},
    {mod:"06", tema:"Diagnóstico do ambiente organizacional: matriz SWOT, análise de cenários, macroambiente e ambiente de tarefa", q:null},
    {mod:"07", tema:"Matriz GUT, 5 Forças de Porter, matrizes GE/McKinsey e BCG, estratégia emergente e cadeia de valor", q:null},
    {mod:"08", tema:"Cenários, macroambiente, indicadores de desempenho, avaliação 360 graus e os 4 Es (economicidade, eficiência, eficácia, efetividade)", q:null},
    {mod:"09", tema:"Balanced Scorecard (BSC): perspectivas, implementação, dificuldades, papéis críticos e indicadores ROE e valor unitário", q:null},
    {mod:"10", tema:"Planejamento: níveis, setor público, PES, ciclo de planejamento e políticas públicas", q:null},
    {mod:"11", tema:"Gestão por processos: PDCA, categorias de processos, BPM, CBOK, Lean e cadeia de valor", q:null},
    {mod:"12", tema:"Processo decisório: armadilhas psicológicas, racionalidade limitada, modelo racional, Delphi e escalada", q:null}
  ],
  pesoNota:"Resumos do Radegondes: teorias administrativas, planejamento estratégico, processos e decisão. Confira sempre a legislação, as súmulas e os valores vigentes antes da prova."
};

window.DISC.dconst = {
  id:"dconst", nome:"Dir. Constitucional", cor:"u4", mat:"dconst",
  nomeLongo:"Direito Constitucional",
  mods:["dconst01","dconst02","dconst03","dconst04","dconst05","dconst06","dconst07","dconst08","dconst09","dconst10","dconst11","dconst12","dconst13","dconst14","dconst15","dconst16"],
  pesos:[
    {mod:"01", tema:"Dos Princípios Fundamentais (arts. 1º a 4º da CF): fundamentos, separação de Poderes, objetivos e relações internacionais", q:null},
    {mod:"02", tema:"Eficácia e aplicabilidade das normas constitucionais: eficácia plena, contida e limitada", q:null},
    {mod:"03", tema:"Poder Constituinte: originário, derivado, limites ao poder de reforma e mutação constitucional", q:null},
    {mod:"04", tema:"Direitos e deveres individuais e coletivos, parte 1: art. 5º, incisos e parágrafos, hierarquia dos tratados e jurisprudência", q:null},
    {mod:"05", tema:"Remédios constitucionais: HC, MS, MI, HD, ação popular e jurisprudência", q:null},
    {mod:"06", tema:"Direitos sociais, nacionalidade, direitos políticos e partidos políticos (arts. 6º a 17)", q:null},
    {mod:"07", tema:"Organização político-administrativa: entes federados, bens da União e dos Estados e repartição de competências (arts. 18 a 28)", q:null},
    {mod:"08", tema:"Municípios, Distrito Federal, Territórios e intervenção federal e estadual (arts. 29 a 36)", q:null},
    {mod:"09", tema:"Poder Executivo: Presidente da República, atribuições, responsabilidade, Ministros e Conselhos (arts. 76 a 91)", q:null},
    {mod:"10", tema:"Poder Legislativo: Congresso, atribuições, imunidades, reuniões e CPI (arts. 44 a 58 da CF)", q:null},
    {mod:"11", tema:"Processo legislativo: emendas, iniciativa, veto, leis delegadas e medidas provisórias (arts. 59 a 69)", q:null},
    {mod:"12", tema:"Poder Judiciário (1): órgãos, magistratura, quinto, reserva de plenário, precatórios, STF e súmula vinculante", q:null},
    {mod:"13", tema:"Poder Judiciário (2): CNJ, STJ, Justiças Federal, do Trabalho, Eleitoral, Militar e dos Estados", q:null},
    {mod:"14", tema:"Funções Essenciais à Justiça: Ministério Público, CNMP, Advocacia Pública e Privada e Defensoria Pública (arts. 127 a 135)", q:null},
    {mod:"15", tema:"Defesa do Estado e das Instituições Democráticas: estado de defesa, estado de sítio, Forças Armadas e segurança pública (arts. 136 a 144)", q:null},
    {mod:"16", tema:"Controle de constitucionalidade: sistemas, difuso, ADI, ADC, ADO, ADPF e reserva de plenário", q:null}
  ],
  pesoNota:"Resumos do Radegondes: da CF/88: princípios, direitos fundamentais, organização do Estado e dos Poderes, controle de constitucionalidade. Confira sempre a legislação, as súmulas e os valores vigentes antes da prova."
};

window.DISC.licit = {
  id:"licit", nome:"Licitações", cor:"u5", mat:"dadm",
  nomeLongo:"Licitações e Contratos (Lei 14.133/21)",
  mods:["licit01","licit02","licit03","licit04","licit05","licit06"],
  pesos:[
    {mod:"01", tema:"Lei 14.133/21: âmbito, princípios, definições, regimes de execução e agente de contratação", q:null},
    {mod:"02", tema:"Lei 14.133/21: objetivos, requisitos, impedimentos, fases, modalidades e critérios de julgamento", q:null},
    {mod:"03", tema:"Lei 14.133/21: regimes de execução, prazos, desempate, contratação direta, alienações e registro de preços", q:null},
    {mod:"04", tema:"Registro de preços, contratos administrativos, cláusulas, garantias e prerrogativas (Lei 14.133)", q:null},
    {mod:"05", tema:"Lei 14.133/21: duração, execução e alteração dos contratos, acréscimos e supressões, equilíbrio", q:null},
    {mod:"06", tema:"Lei 14.133/21: apostila, extinção, pagamentos, nulidade, sanções, controle e disposições finais", q:null}
  ],
  pesoNota:"Resumos do Radegondes: a Lei 14.133/21, da licitação à extinção dos contratos. Confira sempre a legislação, as súmulas e os valores vigentes antes da prova."
};

window.DISC.dciv = {
  id:"dciv", nome:"Dir. Civil", cor:"u1", mat:"dcivpen",
  nomeLongo:"Direito Civil",
  mods:["dciv01","dciv02","dciv03","dciv04","dciv05","dciv06","dciv07","dciv08","dciv09","dciv10","dciv11","dciv12","dciv13"],
  pesos:[
    {mod:"01", tema:"LINDB: vigência, integração, eficácia no tempo e segurança jurídica na gestão pública", q:null},
    {mod:"02", tema:"Pessoas naturais: personalidade, capacidade, direitos da personalidade e ausência", q:null},
    {mod:"03", tema:"Pessoas jurídicas: classificação, existência legal, associações, fundações e desconsideração", q:null},
    {mod:"04", tema:"Domicílio: pessoas naturais e jurídicas, domicílio necessário e contratual", q:null},
    {mod:"05", tema:"Dos Bens: imóveis e móveis, fungíveis, principais e acessórios, benfeitorias e bens públicos", q:null},
    {mod:"06", tema:"Negócio Jurídico: validade, condição, termo e encargo, defeitos, invalidade e decadência", q:null},
    {mod:"07", tema:"Atos ilícitos, prescrição, decadência e prova (arts. 186 a 232 do Código Civil)", q:null},
    {mod:"08", tema:"Direito das Obrigações: coisa certa, solidariedade, cessão, pagamento, inadimplemento, cláusula penal e arras", q:null},
    {mod:"09", tema:"Contratos em geral: princípios, vícios redibitórios, evicção e exceção de contrato não cumprido", q:null},
    {mod:"10", tema:"Contratos em espécie: compra e venda, doação, empréstimo, serviço, depósito, mandato, seguro, fiança e transação", q:null},
    {mod:"11", tema:"Responsabilidade civil: ato ilícito, teorias subjetiva e objetiva, responsabilidade por terceiros e indenização", q:null},
    {mod:"12", tema:"Direito das Coisas: posse, propriedade, usucapião, acessão, usufruto e direitos reais de garantia", q:null},
    {mod:"13", tema:"Direito das Sucessões: saisine, vocação hereditária, herdeiros necessários, testamento e inventário", q:null}
  ],
  pesoNota:"Resumos do Radegondes: LINDB, pessoas, bens, negócio jurídico, obrigações, contratos, coisas e sucessões. Confira sempre a legislação, as súmulas e os valores vigentes antes da prova."
};

window.DISC.demp = {
  id:"demp", nome:"Dir. Empresarial", cor:"u2", mat:"dcivpen",
  nomeLongo:"Direito Empresarial",
  mods:["demp13","demp01","demp02","demp03","demp04","demp05","demp06","demp07","demp08","demp09","demp10","demp11","demp12"],
  pesos:[
    {mod:"13", tema:"Empresa e empresário: conceito, registro, empresário rural, capacidade e empresário casado", q:null},
    {mod:"01", tema:"Estabelecimento empresarial: conceito, trespasse, débitos, concorrência e contratos (CC arts. 1.142-1.149)", q:null},
    {mod:"02", tema:"Institutos complementares: registro, nome empresarial, prepostos e escrituração (CC arts. 1.150-1.195)", q:null},
    {mod:"03", tema:"Sociedades: disposições gerais e sociedades não personificadas (em comum e em conta de participação)", q:null},
    {mod:"04", tema:"Sociedades personificadas: simples, nome coletivo, comandita simples e cooperativa", q:null},
    {mod:"05", tema:"Sociedade limitada: responsabilidade, quotas, administração e deliberações", q:null},
    {mod:"06", tema:"Sociedade anônima: constituição, valores mobiliários e assembleia geral", q:null},
    {mod:"07", tema:"S.A.: conselho fiscal, administração, grupo, consórcio e comandita por ações", q:null},
    {mod:"08", tema:"Dissolução, liquidação e extinção das sociedades", q:null},
    {mod:"09", tema:"Operações societárias: transformação, incorporação, fusão e cisão (CC arts. 1.113 a 1.122; LSA art. 229)", q:null},
    {mod:"10", tema:"Falência (Lei 11.101/05): âmbito, efeitos, classificação de créditos e pedido", q:null},
    {mod:"11", tema:"Recuperação judicial e extrajudicial (Lei 11.101/05): requisitos, convolação e plano", q:null},
    {mod:"12", tema:"Títulos de crédito: princípios, endosso, aval, cheque, duplicata, nota promissória e protesto", q:null}
  ],
  pesoNota:"Resumos do Radegondes: empresário, sociedades, falência e recuperação, títulos de crédito. Confira sempre a legislação, as súmulas e os valores vigentes antes da prova."
};

window.DISC.dpen = {
  id:"dpen", nome:"Dir. Penal", cor:"u3", mat:"dcivpen",
  nomeLongo:"Direito Penal",
  mods:["dpen11","dpen01","dpen02","dpen03","dpen04","dpen05","dpen06","dpen07","dpen08","dpen09","dpen10"],
  pesos:[
    {mod:"11", tema:"Princípios do Direito Penal: legalidade, insignificância, intervenção mínima e outros", q:null},
    {mod:"01", tema:"Aplicação da lei penal (tempo, espaço, extraterritorialidade) e classificação dos crimes quanto ao resultado", q:null},
    {mod:"02", tema:"Nexo causal, omissão, tentativa, iter criminis, desistência, arrependimento e crime impossível (arts. 13 a 17)", q:null},
    {mod:"03", tema:"Fato típico, conduta, dolo e culpa, preterdolo, erro de tipo, erro de proibição e coação (arts. 18 a 22)", q:null},
    {mod:"04", tema:"Ilicitude e excludentes: estado de necessidade, legítima defesa, dever legal e exercício regular de direito (arts. 23 a 25)", q:null},
    {mod:"05", tema:"Culpabilidade, imputabilidade, excludentes e concurso de pessoas (arts. 26 a 31 do CP)", q:null},
    {mod:"06", tema:"Crimes praticados por funcionário público contra a Administração (arts. 312 a 327 do CP)", q:null},
    {mod:"07", tema:"Crimes praticados por particular contra a Administração (arts. 328 a 337-A do CP)", q:null},
    {mod:"08", tema:"Crimes em licitações e contratos e crimes contra a Administração da Justiça (arts. 337-E a 359 do CP)", q:null},
    {mod:"09", tema:"Crimes contra as finanças públicas (arts. 359-A a 359-H do Código Penal)", q:null},
    {mod:"10", tema:"Crimes contra a ordem tributária, a economia e as relações de consumo (Lei 8.137/90)", q:null}
  ],
  pesoNota:"Resumos do Radegondes: teoria do crime e crimes contra a Administração e a ordem tributária. Confira sempre a legislação, as súmulas e os valores vigentes antes da prova."
};

window.DISC.port = {
  id:"port", nome:"Português", cor:"u4", mat:"port",
  nomeLongo:"Língua Portuguesa",
  mods:["port01","port02","port03","port04","port05","port06","port07","port08"],
  pesos:[
    {mod:"01", tema:"Ortografia, acentuação, hífen e morfologia (classes de palavras)", q:null},
    {mod:"02", tema:"Semântica vocabular, sintaxe (AA x CN, orações reduzidas) e pontuação", q:null},
    {mod:"03", tema:"Regência verbal, crase, concordância e vozes verbais", q:null},
    {mod:"04", tema:"Falácias, coesão, coerência, estrutura comparativa e tipos de discurso", q:null},
    {mod:"05", tema:"Linguagem, figuras e vícios de linguagem, funções da linguagem e os vocábulos SE e QUE", q:null},
    {mod:"06", tema:"Tipologia e gênero textual, texto dissertativo, argumentação, descrição, narração e injunção", q:null},
    {mod:"07", tema:"Paralelismo sintático e semântico, reescrita de frases, clareza e correção", q:null},
    {mod:"08", tema:"Interpretação e compreensão textual, erros de interpretação e estratégias argumentativas", q:null}
  ],
  pesoNota:"Resumos do Radegondes: gramática, interpretação e redação oficial. Confira sempre a legislação, as súmulas e os valores vigentes antes da prova."
};

window.DISC.rlm = {
  id:"rlm", nome:"RLM", cor:"u5", mat:"rlm",
  nomeLongo:"Raciocínio Lógico",
  mods:["rlm01","rlm02","rlm03","rlm04","rlm05","rlm06","rlm07","rlm08","rlm09","rlm10"],
  pesos:[
    {mod:"01", tema:"Proposições, conectivos lógicos e tabelas-verdade", q:null},
    {mod:"02", tema:"Negação de proposições simples, categóricas e compostas", q:null},
    {mod:"03", tema:"Tautologia, contradição, equivalências, condições necessária e suficiente e precedência", q:null},
    {mod:"04", tema:"Argumento lógico: validade, premissas e como obter conclusões", q:null},
    {mod:"05", tema:"Associações lógicas: tabela, informações diretas e indiretas e hipóteses", q:null},
    {mod:"06", tema:"Verdades e mentiras: par contraditório, V e F e quem fala a verdade", q:null},
    {mod:"07", tema:"Datas e calendários: dias da semana, anos normais e bissextos e ciclos", q:null},
    {mod:"08", tema:"Princípio da casa dos pombos: distribuição uniforme e pior cenário (maior azar)", q:null},
    {mod:"09", tema:"Razão, proporção, regra de três, divisão proporcional, médias e misturas", q:null},
    {mod:"10", tema:"Conjuntos: pertinência, inclusão, operações, diagramas de Venn e problemas de contagem", q:null}
  ],
  pesoNota:"Resumos do Radegondes: lógica proposicional, argumentos e problemas de raciocínio. Confira sempre a legislação, as súmulas e os valores vigentes antes da prova."
};

window.DISC.ti = {
  id:"ti", nome:"TI", cor:"u1", mat:"info",
  nomeLongo:"Tecnologia da Informação",
  mods:["ti11","ti01","ti02","ti03","ti04","ti05","ti06","ti07","ti08","ti09","ti10","ti12","ti13","ti14","ti15","ti16","ti17"],
  pesos:[
    {mod:"11", tema:"Fundamentos de banco de dados: tipos de dados, dados abertos, qualidade (DAMA) e níveis de modelagem", q:null},
    {mod:"01", tema:"Modelagem de banco de dados: níveis, modelo entidade-relacionamento, atributos, chaves e cardinalidade", q:null},
    {mod:"02", tema:"Banco de dados relacional: modelo lógico, regras de Codd, chaves, dependência funcional e índices", q:null},
    {mod:"03", tema:"Normalização de bancos de dados: formas normais (1FN a 5FN, FNBC) e dependência funcional", q:null},
    {mod:"04", tema:"SGBD: modelo de dados, índices (árvore B), transações, ACID, concorrência, triggers e views", q:null},
    {mod:"05", tema:"Linguagem SQL: categorias (DQL, DDL, DML, DCL, DTL), constraints, cláusulas, JOIN, EXISTS e LIKE", q:null},
    {mod:"06", tema:"Business Intelligence, modelagem multidimensional, ETL, esquemas estrela e floco de neve, tabelas fato e operações OLAP", q:null},
    {mod:"07", tema:"Data Warehouse: características, ETL, Data Lake, índice bitmap e chaves surrogadas", q:null},
    {mod:"08", tema:"Mineração de dados: KDD, CRISP-DM, técnicas, machine learning, árvore de decisão e anomalias", q:null},
    {mod:"09", tema:"Big Data (5Vs), Hadoop/HDFS e Power BI", q:null},
    {mod:"10", tema:"Segurança da informação: princípios, criptografia, hash, assinatura e certificado digital", q:null},
    {mod:"12", tema:"Gerenciamento de projetos (PMBOK 6ª ed.): conceitos, estrutura, áreas, grupos de processos e ferramentas", q:null},
    {mod:"13", tema:"BPM e BPMN: gerenciamento de processos de negócio, BPM CBOK, ciclo BPM e notação BPMN 2.0", q:null},
    {mod:"14", tema:"Governança e qualidade: ITIL, COBIT, CMMI e MPS-BR", q:null},
    {mod:"15", tema:"Engenharia de software: processos, ciclo de vida, requisitos, UML, testes e métricas", q:null},
    {mod:"16", tema:"Programação: lógica, paradigmas, orientação a objetos, estruturas de dados e linguagens", q:null},
    {mod:"17", tema:"TI aplicada à fiscalização: documentos fiscais eletrônicos, SPED, certificação digital, sigilo e governo digital", q:null}
  ],
  pesoNota:"Resumos do Radegondes (módulos 01 a 11: bancos de dados, SQL, BI, big data e segurança) e mapas mentais de revisão (módulos 12 a 16: PMBOK, BPM/BPMN, ITIL/COBIT/CMMI/MPS-BR, engenharia de software e programação). Confira sempre a legislação, as súmulas e os valores vigentes antes da prova."
};

window.DISC.infob = {
  id:"infob", nome:"Informática", cor:"u1", mat:"infob",
  nomeLongo:"Noções de Informática (Windows, Linux, Word, Excel, redes, segurança e hardware)",
  mods:["infob01","infob02","infob03","infob04","infob05","infob06","infob07","infob08"],
  pesos:[
    {mod:"01", tema:"Redes e Internet: classificações, topologias, arquiteturas, protocolos e serviços", q:null},
    {mod:"02", tema:"Computação em nuvem, e-mail, listas, transferência, acesso remoto, redes sociais e formatos", q:null},
    {mod:"03", tema:"Segurança da informação: princípios, ameaças, malwares, criptografia, firewall e backup", q:null},
    {mod:"04", tema:"Word e PowerPoint: recursos, atalhos, formatação e apresentações", q:null},
    {mod:"05", tema:"Planilhas eletrônicas Excel: referências, fórmulas, funções, gráficos e formatação condicional", q:null},
    {mod:"06", tema:"Sistemas operacionais Windows e Linux: arquivos, atalhos, comandos, diretórios e permissões", q:null},
    {mod:"07", tema:"Hardware e software: componentes, memórias, armazenamento, periféricos, tipos de software e licenças", q:null},
    {mod:"08", tema:"Google Drive, e-mail (Outlook, Gmail, Zimbra), operadores de busca na web e navegadores com atalhos", q:null}
  ],
  pesoNota:"Montado a partir de mapas mentais de revisão, complementado com conteúdo-padrão da disciplina. Confira sempre a bibliografia do edital e o que for atualizável. Versões de Word e Excel mudam: o edital do ISS Curitiba cita Word e Excel 2016, Windows 10 e 11 e Ubuntu. O módulo 08 cobre Google Drive, e-mail (Outlook, Gmail, Zimbra), busca na web e navegadores."
};
window.DISC.estat = {
  id:"estat", nome:"Estatística", cor:"u5", mat:"estat",
  nomeLongo:"Estatística descritiva, probabilidade, inferência, testes e regressão",
  mods:["estat01","estat02","estat03","estat04","estat05","estat06"],
  pesos:[
    {mod:"01", tema:"Distribuições de frequências, apresentação de dados e médias", q:null},
    {mod:"02", tema:"Medidas separatrizes, moda e medidas de dispersão", q:null},
    {mod:"03", tema:"Análise combinatória, probabilidade e variáveis aleatórias discretas e contínuas", q:null},
    {mod:"04", tema:"Distribuições discretas e contínuas de probabilidade: binomial, Poisson, uniforme, normal e outras", q:null},
    {mod:"05", tema:"Amostragem, estimadores e intervalos de confiança", q:null},
    {mod:"06", tema:"Testes de hipóteses, análise de variância e regressão linear simples", q:null}
  ],
  pesoNota:"Montado a partir de mapas mentais de revisão, complementado com conteúdo-padrão da disciplina. Confira sempre a bibliografia do edital e o que for atualizável. As fórmulas foram reconstruídas e os exercícios numéricos conferidos por cálculo. Quando a prova fornecer tabela de quantis, use a dela."
};
window.DISC.matfin = {
  id:"matfin", nome:"Matemática Financeira", cor:"u5", mat:"matem",
  nomeLongo:"Matemática Financeira: porcentagem, juros, descontos, VPL/TIR, rendas e amortização",
  mods:["matfin01","matfin02","matfin03"],
  pesos:[
    {mod:"01", tema:"Porcentagem, juros simples e compostos, taxas equivalentes, convenção linear e exponencial", q:null},
    {mod:"02", tema:"Descontos, valor presente líquido, equivalência de capitais e taxa interna de retorno", q:null},
    {mod:"03", tema:"Rendas uniformes (anuidades) e planos de amortização: SAC, Price, SAM e sistema americano", q:null}
  ],
  pesoNota:"Montado a partir de mapas mentais de revisão, complementado com conteúdo-padrão da disciplina. Confira sempre a bibliografia do edital e o que for atualizável. Em prova, o enunciado define a convenção (ano comercial, capitalização, taxa nominal ou efetiva) e prevalece sobre qualquer atalho."
};
window.DISC.econ = {
  id:"econ", nome:"Economia", cor:"u3", mat:"econ",
  nomeLongo:"Microeconomia e Macroeconomia",
  mods:["econ01","econ02","econ03","econ04","econ05","econ06","econ07","econ08","econ09","econ10"],
  pesos:[
    {mod:"01", tema:"Princípios, CPP, demanda, oferta e equilíbrio de mercado", q:null},
    {mod:"02", tema:"Elasticidade e teoria do consumidor", q:null},
    {mod:"03", tema:"Teoria da produção, custos e lucros", q:null},
    {mod:"04", tema:"Concorrência perfeita e monopólio: equilíbrio, regulação e discriminação de preços", q:null},
    {mod:"05", tema:"Concorrência monopolística, oligopólio e contas nacionais (PIB, PNB, identidades)", q:null},
    {mod:"06", tema:"Modelo clássico, políticas econômicas na economia clássica e modelo keynesiano", q:null},
    {mod:"07", tema:"Modelo IS-LM, modelo OA-DA e curva de Phillips", q:null},
    {mod:"08", tema:"Crescimento econômico e ciclos econômicos: modelo de Solow, regra de ouro, produtividade, fases e indicadores", q:null},
    {mod:"09", tema:"Inflação, índices de preços, desemprego e mercado de trabalho: IPCA, INPC, IGP-M, IGP-DI, tipos de inflação, efeitos, taxa natural", q:null},
    {mod:"10", tema:"Setor externo: balanço de pagamentos, câmbio nominal e real, regimes cambiais, PPC e Marshall-Lerner", q:null}
  ],
  pesoNota:"Montado a partir de mapas mentais de revisão, complementado com conteúdo-padrão da disciplina. Confira sempre a bibliografia do edital e o que for atualizável. Cobre microeconomia, contas nacionais, modelos clássico e keynesiano, IS-LM, OA-DA e Phillips. Os módulos 08 a 10 (crescimento e ciclos, inflação e desemprego, setor externo) foram feitos a partir do programa do edital e de conteúdo-padrão, sem mapa mental. Não cobre moeda e sistema financeiro nem economia do setor público."
};

window.DISC.ingles = {
  id:"ingles", nome:"Inglês", cor:"u2", mat:"ingles",
  nomeLongo:"Língua Inglesa (interpretação de texto e gramática, Receita Federal)",
  mods:["ing01","ing02","ing03","ing04","ing05","ing06","ing07","ing08","ing09","ing10","ing11","ing12","ing13","ing14","ing15","ing16","ing17"],
  pesos:[
    {mod:"01", tema:"Técnicas de interpretação de texto em inglês: estratégias, cognatos, vocabulário fiscal e inferência", q:null},
    {mod:"02", tema:"Formação de frases, substantivos (plural, contáveis, genitivo) e artigos", q:null},
    {mod:"03", tema:"Pronomes: pessoais, reflexivos, possessivos, demonstrativos, interrogativos, relativos e indefinidos", q:null},
    {mod:"04", tema:"Preposições de tempo, lugar, movimento e dependentes, e interpretação de texto", q:null},
    {mod:"05", tema:"Adjetivos: ordem, graus (comparativo e superlativo), -ed/-ing, adjetivos compostos", q:null},
    {mod:"06", tema:"Advérbios: classes, posição, graus, prefixos e sufixos", q:null},
    {mod:"07", tema:"Conjunções e verbos frasais (phrasal verbs)", q:null},
    {mod:"08", tema:"Verbos auxiliares: do, be, have e seus usos (interrogativa, negativa, ênfase, tempos compostos)", q:null},
    {mod:"09", tema:"Verbos modais: can, could, may, might, must, should, would, ought to, have to e equivalentes", q:null},
    {mod:"10", tema:"Presente simples e passado simples: formas, auxiliares, there be e verbos irregulares", q:null},
    {mod:"11", tema:"Futuro (will, going to), quantificadores, determinantes e textos não verbais", q:null},
    {mod:"12", tema:"Tempos contínuos (presente, passado, futuro) e present perfect", q:null},
    {mod:"13", tema:"Past perfect, future perfect, perfeitos contínuos e voz ativa e passiva", q:null},
    {mod:"14", tema:"Imperativo, subjuntivo, condicionais, wishes e would rather", q:null},
    {mod:"15", tema:"Expressões idiomáticas, discurso direto e indireto e numerais", q:null},
    {mod:"16", tema:"Marcadores de discurso, question tags, wh-questions, infinitivo e gerúndio e período composto", q:null},
    {mod:"17", tema:"Vocabulário essencial e glossário de termos da Receita e da tributação em inglês", q:null}
  ],
  pesoNota:"Montado a partir de material de revisão de Inglês para a Receita Federal; textos, frases e questões de treino são originais. Onde o material trazia erro, o módulo corrige e avisa. Conteúdo de bancas anteriores pode diferir do estilo da FGV."
};
window.DISC.lgpd = {
  id:"lgpd", nome:"LGPD", cor:"u3", mat:"lgpd",
  nomeLongo:"Lei Geral de Proteção de Dados Pessoais (Lei 13.709/2018)",
  mods:["lgpd01","lgpd02"],
  pesos:[
    {mod:"01", tema:"LGPD: conceitos, âmbito, fundamentos, princípios, bases legais e direitos do titular", q:null},
    {mod:"02", tema:"LGPD: Poder Público, compartilhamento e sigilo fiscal, agentes, segurança, ANPD e sanções", q:null}
  ],
  pesoNota:"Montado a partir do conteúdo-padrão da Lei 13.709/2018 e do programa do edital, sem o texto da lei em mãos: confira a redação vigente dos artigos citados."
};

window.DISC.simples = {
  id:"simples", nome:"Simples Nacional", cor:"u2", mat:"legtrib",
  nomeLongo:"Simples Nacional",
  mods:["simples01","simples02"],
  pesos:[
    {mod:"01", tema:"Simples Nacional (LC 123/06), parte 1: gestão, ME e EPP, vedações e tributos abrangidos", q:null},
    {mod:"02", tema:"Simples Nacional (LC 123/06), parte 2: tributos por fora, inscrição, MEI e processo judicial", q:null}
  ],
  pesoNota:"Resumos do Radegondes: a LC 123/06: enquadramento, tributos e MEI. Confira sempre a legislação, as súmulas e os valores vigentes antes da prova."
};

window.DISC.legcwb = {
  id:"legcwb", nome:"Legislação Tributária de Curitiba", cor:"u4", mat:"legcwb",
  nomeLongo:"Código Tributário Municipal de Curitiba (LC 40/2001)",
  mods:["legcwb01","legcwb02","legcwb03","legcwb04","legcwb05","legcwb06","legcwb07","legcwb08","legcwb09"],
  pesos:[
    {mod:"01", tema:"ISS de Curitiba: incidência, fato imponível, alíquotas e lista de serviços", q:null},
    {mod:"02", tema:"ISS de Curitiba: sujeição passiva, local da incidência, responsáveis, retenção e MEI", q:null},
    {mod:"03", tema:"ISS de Curitiba: autônomos, sociedades profissionais, base imponível e Simples", q:null},
    {mod:"04", tema:"Lançamento do ISS: declaração, auto de infração, ciência e arbitramento", q:null},
    {mod:"05", tema:"Infrações, multas, denúncia espontânea, pagamento, parcelamento e atualização", q:null},
    {mod:"06", tema:"IPTU em Curitiba: incidência, base, alíquotas, imóvel não edificado e lançamento", q:null},
    {mod:"07", tema:"Taxas, contribuição de melhoria e cadastro fiscal (arts. 53 a 78)", q:null},
    {mod:"08", tema:"Exonerações: isenções de ISS, IPTU e taxas, incentivos e autônomos isentos", q:null},
    {mod:"09", tema:"Processo administrativo tributário, consulta e disposições gerais (arts. 92 a 119)", q:null}
  ],
  pesoNota:"Montado a partir da LC Municipal 40/2001, no texto consolidado até as alterações de 2017/2018. Não cobre ainda a Nota Curitibana (LC 73/2009), o DEC/PROCEC (LC 134/2022), a COSIP (LC 46/2002) nem o ITBI (LC 108/2017). Confira sempre a redação vigente."
};

window.DISC.consult = {
  id:"consult", nome:"Consultoria", cor:"u4", mat:"consult",
  nomeLongo:"Consultoria Tributária (Reforma Tributária, Simples e Perguntão PJ)",
  mods:["cons01","cons02","cons03","cons04","cons05","cons06","cons07","cons08","cons09","cons10","cons11","cons12","cons13","cons14","cons15","cons16","cons17","cons18","cons19","cons20","cons21","cons22","cons23","cons24","cons25","cons26","cons27","cons28","cons29","cons30","cons31","cons32","cons33","cons34","cons35","cons36","cons37","cons38","cons39","cons40","cons41","cons42","cons43","cons44","cons45","cons46","cons47","cons48","cons49","cons50","cons51","cons52","cons53","cons54","cons55","cons56","cons57","cons58","cons59","cons60","cons61","cons62"],
  pesos:[
    {mod:"01", tema:"Opção pelo regime regular de IBS e CBS no Simples Nacional (regime híbrido)", q:null},
    {mod:"02", tema:"Opção pelo Simples Nacional para 2027: prazos, indeferimento e regime regular", q:null},
    {mod:"03", tema:"LC 227/2026 e Simples Nacional: repasses do IBS, fiscalização, contencioso e opção", q:null},
    {mod:"04", tema:"EC 132/2023: IBS, CBS, Imposto Seletivo, Comitê Gestor e repartição de receitas", q:null},
    {mod:"05", tema:"EC 132/2023, art. 2º: ADCT, Zona Franca de Manaus e transição para IBS e CBS", q:null},
    {mod:"06", tema:"EC 132/2023, arts. 3º a 23: alterações da CF, regimes diferenciados e disposições finais", q:null},
    {mod:"07", tema:"LC 214/2025 e LC 227/2026 (1/4): incidência, local, split payment, importação e exportação", q:null},
    {mod:"08", tema:"LC 214/2025 e LC 227/2026 (2/4): serviços financeiros, imóveis, consulta e contencioso", q:null},
    {mod:"09", tema:"LC 214/2025 (parte 3): penalidades, alíquotas de referência, IS, ZFM, PNCT e split payment", q:null},
    {mod:"10", tema:"LC 214/2025 (parte 4): split, compras públicas, CGIBS, regimes opcionais e Simples", q:null},
    {mod:"11", tema:"CGIBS: natureza, competências, fiscalização, estrutura e Conselho Superior", q:null},
    {mod:"12", tema:"CGIBS: Corregedoria, Diretoria Executiva, controle externo, orçamento e transparência", q:null},
    {mod:"13", tema:"Processo administrativo tributário do IBS: prazos, nulidades, recursos e órgãos", q:null},
    {mod:"14", tema:"Distribuição da arrecadação do IBS: Receita-Base, ajustes, retenções e regimes", q:null},
    {mod:"15", tema:"LC 227/2026 — IBS: receita média de referência, distribuição complementar e destinação da receita", q:null},
    {mod:"16", tema:"LC 227/2026 — Transição do ICMS: saldo credor, homologação, compensação com o IBS e estoque de ST", q:null},
    {mod:"17", tema:"ITCMD — normas gerais (LC 227/2026, Livro II): incidência, base, alíquota e competência", q:null},
    {mod:"18", tema:"LC 227/2026 — CTN (ITBI e COSIP), processo federal (Dec. 70.235), outras alterações e vigência", q:null},
    {mod:"19", tema:"LC 224/2025: redução de incentivos e benefícios tributários federais", q:null},
    {mod:"20", tema:"PJ 2026, Cap. I: ECF, DCTFWeb, retificação e entidades imunes ou isentas", q:null},
    {mod:"21", tema:"PJ 2026: contagem de prazos e equiparação da pessoa física à pessoa jurídica", q:null},
    {mod:"22", tema:"PJ 2026, Caps. IV e V: extinção, reorganizações, sucessão tributária e Simples", q:null},
    {mod:"23", tema:"IRPJ - Lucro Real: apuração, despesas, imobilizado, operações especiais e adicional", q:null},
    {mod:"24", tema:"PJ 2026 — Escrituração: Lalur, e-Lacs, prejuízo fiscal, demonstrações e ECD", q:null},
    {mod:"25", tema:"PJ 2026 — Escrituração: Diário, Razão, Inventário, ICMS e regime de competência", q:null},
    {mod:"26", tema:"PJ 2026 — Lucro operacional: receita, custo, estoques, despesas dedutíveis e multas", q:null},
    {mod:"27", tema:"PJ 2026 — Lucro Operacional: depreciação, depreciação acelerada e amortização", q:null},
    {mod:"28", tema:"PJ 2026 — Lucro Operacional: exaustão, provisões, provisão para IR, subvenções e perdas de crédito", q:null},
    {mod:"29", tema:"PJ 2026 — Lucro operacional: perdas de créditos, pró-labore, propaganda, juros, variações e JCP", q:null},
    {mod:"30", tema:"Lucro operacional (5): JCP, valor justo, AVP, ágio, arrendamento e concessões", q:null},
    {mod:"31", tema:"PJ 2026: resultados não operacionais, compensação de prejuízos e investimentos regionais", q:null},
    {mod:"32", tema:"PJ 2026: atividade rural — conceito, apuração, incentivos, receitas e valor justo", q:null},
    {mod:"33", tema:"IRPJ no lucro presumido: opção, base, percentuais, lucros e mudança de regime", q:null},
    {mod:"34", tema:"Lucro arbitrado (PJ 2026): hipóteses, percentuais, alíquotas e distribuição de lucros", q:null},
    {mod:"35", tema:"IRPJ - pagamento: quotas, Darf, vencimento antecipado e estimativa mensal", q:null},
    {mod:"36", tema:"PJ 2026: CSLL — contribuintes, alíquotas, bases de cálculo, compensação e adicional", q:null},
    {mod:"37", tema:"PJ 2026: sociedades cooperativas — natureza, constituição, atos cooperativos, IRPJ e CSLL", q:null},
    {mod:"38", tema:"PJ 2026 — Acréscimos legais: multa de mora, multas de ofício e declarações em atraso", q:null},
    {mod:"39", tema:"PJ 2026 — Preços de transferência: vinculação, métodos, ajustes e câmbio (IN RFB 1.312/2012)", q:null},
    {mod:"40", tema:"Preços de transferência: CPL, PRL, commodities (PCI/Pecex) e exportação (IN RFB 1.312)", q:null},
    {mod:"41", tema:"Juros e mútuo, TBU (lucros no exterior), subcapitalização e paraísos fiscais", q:null},
    {mod:"42", tema:"PJ 2026 — IPI (incidência, créditos, suspensão) e disposições gerais do PIS/Pasep e Cofins", q:null},
    {mod:"43", tema:"PJ 2026 — PIS/Pasep e Cofins sobre a receita: contribuintes, isenções, base de cálculo e exclusões", q:null},
    {mod:"44", tema:"PJ 2026 — PIS/Cofins: regime cumulativo e não cumulativo, alíquotas, créditos e insumos", q:null},
    {mod:"45", tema:"PJ 2026 — PIS/Cofins: fim específico de exportação, créditos presumidos, substituição e tributação concentrada", q:null},
    {mod:"46", tema:"PIS/Cofins s/ receita: concentrada, cooperativas, ZFM, retenção e vencimento", q:null},
    {mod:"47", tema:"PIS/Cofins-Importação, PIS sobre a folha de salários e sobre receitas governamentais", q:null},
    {mod:"48", tema:"PJ 2026: Cide-Combustíveis e EFD-Contribuições (obrigação, prazo, retificação, multa)", q:null},
    {mod:"49", tema:"PJ 2026: novos métodos contábeis, adoção inicial (FCONT, subcontas), ágio e arrendamento", q:null},
    {mod:"50", tema:"PJ 2026: valor justo, concessões, depreciação, moeda funcional, hedge e pagamento em ações", q:null},
    {mod:"51", tema:"Casos práticos 1: como calcular IBS e CBS (base, alíquota, débito x crédito, transição)", q:null},
    {mod:"52", tema:"Casos práticos 2: notas fiscais de entrada e saída (compra, venda, devolução, remessas, transferência)", q:null},
    {mod:"53", tema:"Casos práticos 3: nota de débito, nota de crédito, notas complementares e adiantamentos", q:null},
    {mod:"54", tema:"Casos práticos 4: split payment (pagamento, retenção, crédito e conciliação)", q:null},
    {mod:"55", tema:"Casos práticos 5: créditos de IBS e CBS (o que gera, o que não gera e estorno)", q:null},
    {mod:"56", tema:"Casos práticos 6: estoque, perdas, roubo, furto, sinistro e doações", q:null},
    {mod:"57", tema:"Casos práticos 7: agronegócio (produtor rural, cooperativa, agroindústria, insumos, exportação)", q:null},
    {mod:"58", tema:"Casos práticos 8: indústria, comércio, importação e exportação", q:null},
    {mod:"59", tema:"Casos práticos 9: serviços (profissionais, saúde, educação, construção, imóveis, transporte, plataformas)", q:null},
    {mod:"60", tema:"Casos práticos 10: lucro real, presumido, Simples Nacional e MEI diante da reforma", q:null},
    {mod:"61", tema:"Casos práticos 11: casos integrados e FAQ do consultor (para treinar e gravar vídeo)", q:null},
    {mod:"62", tema:"Classificação tributária (CST e cClassTrib), documentos fiscais eletrônicos e CGIBS", q:null}
  ],
  pesoNota:"Material oficial: EC 132, LC 214, 224 e 227, manuais e roteiro do Simples Nacional e Perguntas e Respostas da Pessoa Jurídica 2026 (Receita Federal). Confira sempre a legislação e os manuais vigentes antes da prova."
};

window.DISC.fdados = {
  id:"fdados", nome:"Fluência em Dados", cor:"u2", mat:"dados",
  nomeLongo:"Fluência em Dados",
  mods:["fdados01","fdados02","fdados03","fdados04","fdados05","fdados06","fdados07","fdados08","fdados09","fdados10","fdados11","fdados12","fdados13","fdados14","fdados15","fdados16","fdados17","fdados18","fdados19","fdados20","fdados21"],
  pesos:[
    {mod:"01", tema:"Dados, Big Data, ciência de dados, governança e arquiteturas", q:null},
    {mod:"02", tema:"Dados, informação, conhecimento e inteligência; estruturação; dados abertos; XML, JSON, CSV e SQL", q:null},
    {mod:"03", tema:"Big Data: conceito, tipos de dados, 5 Vs, analytics (4 tipos) e fluxo de ingestão, processamento e disponibilização", q:null},
    {mod:"04", tema:"Pipeline de dados: orquestração, integração, batch x streaming, Data Lake x Data Warehouse e ETL x ELT", q:null},
    {mod:"05", tema:"Bancos NoSQL: modelos, teorema CAP, CP x AP, BASE e aspectos", q:null},
    {mod:"06", tema:"Ecossistema Apache Hadoop e Spark: componentes e comparação com MapReduce", q:null},
    {mod:"07", tema:"Arquiteturas de Big Data (Lambda, Kappa, IoT), governança e catálogo de dados", q:null},
    {mod:"08", tema:"Mineração de dados: conceito, objetivos, KDD, CRISP-DM e pré-processamento", q:null},
    {mod:"09", tema:"Tarefas de mineração de dados (classificação, regressão, agrupamento, associação, anomalias) e aplicações", q:null},
    {mod:"10", tema:"Mineração de textos e pareamento de dados (record linkage): determinístico x probabilístico, etapas e aplicações", q:null},
    {mod:"11", tema:"Aprendizagem de máquina: como funciona, tipos de aprendizagem, viés x variância, overfitting e underfitting", q:null},
    {mod:"12", tema:"Classificação: algoritmos (árvore, KNN, Naive Bayes, SVM, logística, redes neurais, ensembles) e métricas (matriz de confusão, ROC/AUC)", q:null},
    {mod:"13", tema:"Regressão e métricas, agrupamento, associação (Apriori), PCA, aprendizagem por reforço e etapas de construção do modelo", q:null},
    {mod:"14", tema:"PLN: evolução, níveis, abordagens, tarefas, word embeddings e Transformers", q:null},
    {mod:"15", tema:"Sistemas de recomendação: conteúdo, colaborativa, híbridos, dados e métricas", q:null},
    {mod:"16", tema:"IA: forte x fraca, simbólica x conexionista, generativa x discriminativa e Transformer", q:null},
    {mod:"17", tema:"Grandes modelos de linguagem (LLMs): fases, capacidades emergentes, RAG, RAG x fine-tuning e desafios", q:null},
    {mod:"18", tema:"Engenharia de prompts, técnicas de prompting, agentes de IA, modelos fundacionais e plataformas de IA como serviço", q:null},
    {mod:"19", tema:"Governança e ética em IA: viés, transparência e XAI, responsabilidade, privacidade, segurança e framework", q:null},
    {mod:"20", tema:"Ciência de dados na prática: ciclo de vida, papéis, atributos, transformação, análise, indicadores, Python e R", q:null},
    {mod:"21", tema:"Computação em nuvem e Big Data: NIST, modelos de serviço e implantação, plataformas, elasticidade, serverless e riscos", q:null}
  ],
  pesoNota:"Dados, Big Data, ciência de dados, governança e arquiteturas. Os módulos 02 a 19 vêm de material de revisão de Ciência de Dados (estruturação, Big Data, NoSQL, Hadoop, mineração, aprendizado de máquina, PLN, recomendação e IA); os módulos 20 e 21 (ciência de dados na prática, Python e R, nuvem) foram feitos a partir do programa do edital e de conteúdo-padrão. Ferramentas, versões e modelos de IA mudam: confira a versão atual."
};

window.DISC.cavan = {
  id:"cavan", nome:"Cont. Avançada", cor:"u1", mat:"cavan",
  nomeLongo:"Contabilidade Avançada",
  mods:["cavan01","cavan02","cavan03","cavan04","cavan05",
        "cavan06","cavan07","cavan08","cavan09","cavan10"],
  pesos:[
    {mod:"01", tema:"CPC 00 — Estrutura Conceitual para Relatório Financeiro",        q:null},
    {mod:"02", tema:"CPC 12 — Ajuste a Valor Presente",                               q:null},
    {mod:"03", tema:"CPC 46 — Mensuração do Valor Justo",                             q:null},
    {mod:"04", tema:"CPC 23 — Políticas contábeis, estimativa e retificação de erro", q:null},
    {mod:"05", tema:"CPC 25 — Provisões, passivos e ativos contingentes",             q:null},
    {mod:"06", tema:"CPC 01 — Redução ao valor recuperável (impairment)",             q:null},
    {mod:"07", tema:"CPC 15 — Combinação de negócios",                                q:null},
    {mod:"08", tema:"CPC 18 — Coligada, controlada e controle conjunto (MEP)",        q:null},
    {mod:"09", tema:"CPC 48 — Instrumentos financeiros",                              q:null},
    {mod:"10", tema:"CPC 36 — Demonstrações consolidadas",                            q:null}
  ],
  pesoNota:"ordem do sumário do resumo Radegondes — um CPC por módulo, do pronunciamento que dá as regras do jogo (CPC 00) até a consolidação"
};

window.DISC.dadm = {
  id:"dadm", nome:"Dir. Administrativo", cor:"u3", mat:"dadm",
  nomeLongo:"Direito Administrativo",
  mods:["dadm01","dadm02","dadm03","dadm04","dadm05","dadm06","dadm07",
        "dadm08","dadm09","dadm10","dadm11","dadm12","dadm13"],
  pesos:[
    {mod:"01", tema:"Origem do Estado, sistemas administrativos e fontes",    q:null},
    {mod:"02", tema:"Regime jurídico administrativo e princípios",            q:null},
    {mod:"03", tema:"Atos administrativos",                                   q:null},
    {mod:"04", tema:"Agentes públicos",                                       q:null},
    {mod:"05", tema:"Poderes e deveres administrativos",                      q:null},
    {mod:"06", tema:"Organização da Administração — direta e indireta",       q:null},
    {mod:"07", tema:"Entidades paraestatais e Terceiro Setor",                q:null},
    {mod:"08", tema:"Responsabilidade civil do Estado",                       q:null},
    {mod:"09", tema:"Serviços públicos, concessão e permissão",               q:null},
    {mod:"10", tema:"PPP, consórcios públicos e convênios",                   q:null},
    {mod:"11", tema:"Lei 8.429/92 — improbidade administrativa",              q:null},
    {mod:"12", tema:"Lei 12.527/11 — acesso à informação",                    q:null},
    {mod:"13", tema:"Controle da Administração Pública",                      q:null}
  ],
  pesoNota:"ordem do sumário do resumo Radegondes — do conceito de Administração até o controle que recai sobre ela"
};

/* ---------- o que aparece na trilha ----------
   Sem direcionamento por prova: a ordem abaixo é pedagógica, não de edital.
   Primeiro a contabilidade que sustenta tudo — a geral e, na sequência, a
   avançada, que é a mesma gramática nos pronunciamentos. Depois a contabilidade
   do Estado, o orçamento público e a lei que o disciplina. Em seguida o direito
   tributário, de onde sai a receita, a legislação aduaneira, que é a receita na
   fronteira, e a fluência em dados, que é a ferramenta de quem lê números.
   Nenhuma matéria fica guardada: a trilha intercala todas em partes iguais,
   para que nenhuma passe semanas parada.                                     */
window.DISC_GUARDADAS = [];
window.DISC_ORDER = ["contab","cavan","cpub","afo","lrf","dtrib","legcwb","dadm","legadu","audpriv","audgov","audfis","cext","adpub","adger","dconst","licit","dciv","demp","dpen","port","rlm","ingles","estat","matfin","econ","ti","infob","lgpd","simples","consult","fdados"];

/* ---------- as provas, em ordem de prioridade ----------
   fator  = peso da prova na sua prioridade de estudo
   q      = questões por matéria, quando o edital as discrimina
   fonte  = de onde veio o quadro                                        */
window.CONCURSOS = {
  afrfb: {
    id:"afrfb", nome:"RFB · Auditor", curto:"AFRFB", cor:"u3", prioridade:3, fator:0.15,
    nomeLongo:"Auditor-Fiscal da Receita Federal do Brasil",
    orgao:"Receita Federal", banca:"FGV (último certame)",
    data:null, dataNota:"novo edital previsto até jan/2027",
    vagas:"30 (previsão 2026)", salario:"R$ 29.921,71", total:140,
    confirmado:true, fonte:"Edital FGV 2023, 3ª retificação — quadro de provas oficial",
    etapas:"Objetiva e discursiva + Curso de Formação em São Paulo",
    materias:{ port:10, ingles:8, rlm:8, estat:6, econ:6, adm:16, audit:8, contab:8, dados:10,
               dadm:8, dconst:8, dprev:8, dtrib:10, legtrib:8, comint:8, legadu:10 }
  },
  atrfb: {
    id:"atrfb", nome:"RFB · Analista", curto:"ATRFB", cor:"u2", prioridade:1, fator:1.00, alvo:true,
    nomeLongo:"Analista-Tributário da Receita Federal do Brasil",
    orgao:"Receita Federal", banca:"FGV (último certame)",
    data:null, dataEstimada:"2027-03-01", dataNota:"estimada para fev/mar 2027 — edital ainda não saiu",
    vagas:"116 (previsão 2026)", salario:"R$ 16.935,99", total:140,
    confirmado:true, fonte:"Edital FGV 2023, 3ª retificação — quadro de provas oficial",
    etapas:"Objetiva e discursiva + Curso de Formação em São Paulo",
    materias:{ port:15, ingles:10, rlm:10, contab:10, adm:10, dados:15,
               dconst:14, dadm:12, dtrib:16, legtrib:14, legadu:14 }
  },
  isscwb: {
    id:"isscwb", nome:"ISS Curitiba", curto:"ISS CWB", cor:"u4", prioridade:1, fator:0.80, alvo:true,
    nomeLongo:"Auditor Fiscal de Tributos Municipais — Prefeitura de Curitiba",
    orgao:"Prefeitura de Curitiba", banca:"Fundação FAFIPA",
    data:"2026-12-06", dataNota:"prova objetiva em 06/12/2026 (Anexo III do edital retificado)",
    vagas:"8 + PcD 1 + PPI 1", salario:"R$ 14.117,18 + 30% de gratificação técnica", total:40,
    confirmado:true, pesosEstimados:true,
    fonte:"Edital Normativo nº 5/2026 (retificação nº 1) — Tabela 10.1.1, Anexo II (Auditor Fiscal) e Anexo III",
    etapas:"Objetiva (40 questões, 80 pontos) + títulos (20 pontos)",
    mapa:[
      {it:"1.1", tema:"Língua Portuguesa", discs:["port"], st:"ok", nota:"Interpretação, coesão, ortografia, classes de palavras, concordância, pontuação e semântica estão nos 8 módulos. Literatura brasileira (prosa, poesia, autores e obras) não tem módulo."},
      {it:"1.2", tema:"Noções de Informática", discs:["infob"], st:"ok", nota:"8 módulos: redes e internet, nuvem e e-mail, segurança, Word e PowerPoint, Excel, Windows e Linux, hardware e software, e Google Drive, Outlook/Gmail/Zimbra, busca na web e navegadores. Word e Excel do edital são 2016; confira os atalhos na sua versão. São 5 questões."},
      {it:"2.1", tema:"Legislação municipal (Lei Orgânica, Estatuto 1.656/58, Lei 7.671/91)", discs:[], st:"falta", nota:"Sem conteúdo. Preciso dos PDFs dessas três leis."},
      {it:"2.2", tema:"Raciocínio lógico, estatística e matemática financeira", discs:["rlm","estat","matfin"], st:"ok", nota:"Lógica em RLM; estatística descritiva, probabilidade, amostragem, inferência, testes e regressão em Estatística; porcentagem, juros, descontos, VPL/TIR e amortização (SAC, Price, SAM) em Matemática Financeira. Razão, proporção, regra de três e conjuntos nos módulos 09 e 10 de RLM."},
      {it:"2.3", tema:"TI aplicada à fiscalização, dados e LGPD", discs:["ti","fdados","lgpd"], st:"ok", nota:"TI 17 traz documentos fiscais eletrônicos, SPED, certificação digital, sigilo fiscal e governo digital; segurança no TI 10; LGPD em 2 módulos (LGPD 01 e 02); Fluência em Dados tem 21 módulos (Big Data, NoSQL, Hadoop, mineração, aprendizado de máquina, PLN, IA, Python e R, nuvem). A LGPD foi feita sem o texto da lei: confira a redação vigente."},
      {it:"2.4", tema:"Direito Constitucional", discs:["dconst","dtrib"], st:"ok", nota:"O Sistema Tributário Nacional está nos módulos 02 a 04 de Direito Tributário, e o orçamento em AFO e LRF. Não há módulo de ordem econômica e financeira."},
      {it:"2.5", tema:"Direito Administrativo", discs:["dadm","licit"], st:"parcial", nota:"Cobertos: regime jurídico, atos, agentes, poderes, responsabilidade, licitações, improbidade, LAI e controle. Faltam o Decreto 9.830/2019 e as normas municipais (Lei 16.466/2024 e Decreto 435/2026)."},
      {it:"2.6", tema:"Direito Tributário, teoria geral (CTN)", discs:["dtrib"], st:"ok", nota:"Os 14 módulos seguem o CTN. A norma geral antielisiva não aparece com esse nome."},
      {it:"2.7", tema:"ISSQN (CF, LC 116/2003, jurisprudência)", discs:["legcwb"], st:"parcial", nota:"O Código de Curitiba cobre incidência, local, responsáveis, retenção, autônomos, uniprofissionais e alíquotas. Falta o texto da LC 116/2003 e a jurisprudência do STF/STJ (Tema 296, ISS × ICMS, construção civil)."},
      {it:"2.8", tema:"Demais tributos municipais (IPTU, ITBI, taxas, contribuição de melhoria, COSIP)", discs:["legcwb"], st:"parcial", nota:"IPTU, taxas e contribuição de melhoria estão nos módulos 06 e 07. O ITBI saiu do código (LC 108/2017) e a COSIP é a LC 46/2002: preciso desses dois textos."},
      {it:"2.9", tema:"Legislação tributária de Curitiba", discs:["legcwb"], st:"parcial", nota:"O Código Tributário (LC 40/2001) está nos 9 módulos. Faltam a Nota Curitibana (LC 73/2009 e Decreto 1.712/2020), o DEC e o PROCEC (LC 134/2022), a restituição e compensação (Decreto 1.261/2009), a COSIP e o ITBI."},
      {it:"2.10", tema:"Processo administrativo tributário", discs:["legcwb","dtrib"], st:"ok", nota:"Impugnação, instrução, JJT, Junta de Recursos, instância especial e consulta no módulo 09. Dívida ativa em Direito Tributário; a Lei 6.830/80 aparece em Direito Administrativo."},
      {it:"2.11", tema:"Reforma tributária do consumo (EC 132, LC 214, CGIBS)", discs:["consult"], st:"ok", nota:"62 módulos de Consultoria. A Resolução CGIBS 6/2026 citada no edital precisa ser conferida no portal."},
      {it:"2.12", tema:"Contabilidade", discs:["contab","cavan"], st:"ok", nota:"Teoria das contas, escrituração, estoques, balanço, DRE, DFC, DVA, DMPL e os CPCs."},
      {it:"2.13", tema:"Direito Civil e Empresarial aplicados", discs:["dciv","demp"], st:"ok", nota:"Pessoas, bens, negócios jurídicos, obrigações, sociedades, títulos de crédito e recuperação."},
      {it:"2.14", tema:"Penal tributário e finanças públicas", discs:["dpen","lrf","afo"], st:"ok", nota:"Lei 8.137/90, crimes funcionais, LRF e orçamento público."},
      {it:"2.15", tema:"Economia", discs:["econ"], st:"ok", nota:"10 módulos: microeconomia, contas nacionais, modelo clássico e keynesiano, IS-LM, OA-DA e Curva de Phillips. Mais 3 módulos: crescimento (Solow) e ciclos, inflação, índices e desemprego, e setor externo (balanço de pagamentos, câmbio, PPC). Esses três vêm do programa do edital e de conteúdo-padrão, sem mapa. Falta moeda e sistema financeiro."}
    ],
    materias:{ port:5, infob:5, legtrib:4, legcwb:3, dtrib:5, consult:3, dconst:3, dadm:3, contab:3, dcivpen:2, lrf:1, econ:1, rlm:1, matem:1 },
    nota:"O edital fixa 5 questões de Português, 5 de Informática e 30 de Conhecimentos Específicos, mas NÃO divulga quantas questões cada matéria tem. Os pesos acima para as matérias específicas são uma estimativa de estudo (ISSQN e legislação de Curitiba no topo, depois Direito Tributário, Reforma Tributária, Constitucional, Administrativo e Contabilidade). Inscrições de 07/10 a 05/11/2026; taxa até 06/11."
  },
  tjpr: {
    id:"tjpr", nome:"TJPR · Contador", curto:"TJPR", cor:"u1", prioridade:1, fator:1.00, alvo:true,
    nomeLongo:"Contador do Tribunal de Justiça do Paraná",
    orgao:"TJPR", banca:"FUNDATEC",
    data:"2026-10-18", dataNota:"data provável da prova, Anexo II do edital",
    vagas:"2 + CR", salario:"R$ 23.264,47", total:70,
    confirmado:true,
    fonte:"Edital nº 96/2026, Anexo I (alterado pelo Edital nº 102/2026) — quadro oficial",
    etapas:"Objetiva (70 questões) e discursiva no mesmo dia + títulos",
    materias:{ contab:40, port:10, matem:10, legpr:10 },
    nota:"A prova mais próxima. 40 das 70 questões são Conhecimentos Específicos de Contabilidade, que no programa é Contabilidade Pública, Orçamento Público e Responsabilidade Fiscal. Outras 10 são Legislação, quase toda do Paraná. A discursiva é no mesmo dia: um estudo de caso e uma dissertativa, 50 pontos cada."
  },
  creapr: {
    id:"creapr", nome:"CREA-PR · Contador", curto:"CREA-PR", cor:"u1", prioridade:4, fator:0.05,
    nomeLongo:"Agente Profissional (Contador) — CREA-PR",
    orgao:"CREA-PR", banca:"Instituto UniFil",
    data:"2026-11-22", dataNota:"data provável (item 11.1 do edital)",
    vagas:"ver edital", salario:"R$ 7.234,12", total:60,
    confirmado:true, pesosEstimados:true, teste:true,
    fonte:"Edital CREA-PR (03/09/2026), itens 10.12 e 11.1",
    etapas:"Objetiva (60 questões) e discursiva no mesmo dia; mínimo de 40 pontos",
    materias:{ port:10, adm:10, contab:10 },
    nota:"Prova-teste. O programa detalhado e o quadro por matéria estão no Anexo V (SEI), que não veio no PDF — pesos iguais por estimativa."
  },
  crqpr: {
    id:"crqpr", nome:"CRQ-PR · Contador", curto:"CRQ-PR", cor:"u3", prioridade:4, fator:0.05,
    nomeLongo:"Contador (cód. 406) — CRQ 9ª Região (PR)",
    orgao:"CRQ-PR", banca:"Instituto Quadrix",
    data:"2026-11-29", dataNota:"prova objetiva e discursiva à tarde (Anexo I do edital)",
    vagas:"ver edital", salario:"ver edital", total:120,
    confirmado:true, pesosEstimados:true, teste:true,
    fonte:"Edital CRQ-PR 2026 — itens 10.1, 11.1 e 18.2.4.7 (Contador)",
    etapas:"Objetiva (120 itens Certo/Errado: 40 básicos, 30 complementares, 50 específicos) + discursiva",
    materias:{ port:10, contab:10, afo:10, lrf:10, audit:10 },
    nota:"Prova-teste. O edital lista Legislação (CF, Lei 4.320, LRF, 14.133, LC 123), Orçamento e Contabilidade Pública, Contabilidade Geral e Auditoria; os pesos por matéria são uma estimativa."
  },
  detranpr: {
    id:"detranpr", nome:"DETRAN-PR", curto:"DETRAN", cor:"u3", prioridade:5, fator:0.03,
    nomeLongo:"Contador do DETRAN-PR",
    orgao:"DETRAN-PR", banca:"a definir",
    data:null, dataNota:"sem edital; estimativa sua: entre dez/2026 e mar/2027",
    vagas:"a definir", salario:"até R$ 7.616,88", total:null,
    confirmado:false, estimado:true,
    fonte:"Edital de 2013 — só teve Despachante de Trânsito, nível médio",
    etapas:"a definir",
    materias:{ port:null, matem:null, dadm:null, ctb:null, tge:null,
               contab:null, afo:null, lrf:null, dconst:null },
    nota:"Atenção: o último edital do DETRAN-PR (2013) NÃO teve o cargo de Contador — só Despachante de Trânsito, de nível médio. As matérias contábeis aqui são expectativa para um cargo que ainda não existiu."
  }
};
/* ---------- provas ----------
   Nenhuma prova está ativa de propósito. O app não persegue mais um edital:
   ele existe para você dominar a matéria, e matéria dominada serve a qualquer
   banca. Os quadros dos editais continuam guardados aqui embaixo; para voltar
   a ver as provas no painel, basta pôr os ids nesta lista.                   */
window.CONC_ORDER = [];
window.CONC_GUARDADOS = ["isscwb","atrfb","tjpr","creapr","crqpr","detranpr","afrfb"];
window.ALVO_NOTA = "Nove matérias, uma trilha só, sem perseguir edital. A ordem é de aprendizado: Contabilidade Geral primeiro, porque é a gramática de tudo o que vem depois; Contabilidade Avançada em seguida, que é essa mesma gramática dentro dos pronunciamentos do CPC; Contabilidade Pública, que a aplica ao Estado; AFO e LRF, que são o orçamento e a lei que o disciplina; Direito Tributário, de onde sai a receita; Direito Administrativo, que é o regime a que o Estado se submete; Legislação Aduaneira, que é a receita na fronteira; e Fluência em Dados, que é a ferramenta de quem lê números. A trilha intercala as nove, de modo que nenhuma fica semanas parada e o que você viu na semana passada volta antes de sumir da memória.";

window.NUCLEO_NOTA = "";

if(window.DATA && window.DATA.PESOS) window.DISC.afo.pesos = window.DATA.PESOS;
