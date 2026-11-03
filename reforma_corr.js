/* Correlações da LC 214/2025 com outras matérias, por trecho da lei.
   Ponto de partida de estudo: não substitui a leitura do artigo. Confira os dispositivos citados. */
window.RF_CORR = (function(){
var G = {
 inst:{ nome:"Instituição, incidência, imunidades e local da operação", a:{
  const:{t:"A competência nasce da Constituição: o IBS (compartilhado por Estados, DF e Municípios) e a CBS (União) foram criados pela EC 132/2023, e a LC 214 os institui e regulamenta. Pergunte o que a lei complementar pode fazer e o que depende da CF. As imunidades repetem o rol constitucional.", m:["dconst07","dconst11"]},
  trib:{t:"Incidência, fato gerador, não incidência e contribuinte são os elementos da obrigação tributária. Compare o fato gerador das operações onerosas com o conceito de fato gerador do CTN.", m:["dtrib06","dtrib02","dtrib03"]},
  adu:{t:"Importação e exportação são situações próprias de incidência e o local da operação pesa. Compare com o fato gerador do Imposto de Importação.", m:["legadu02"]},
  ci:{t:"As operações com o exterior seguem a lógica do destino (consumo): exportação desonerada e importação tributada. É o fundo do tema no comércio internacional.", m:["econ10","legadu09"]}}},
 base:{ nome:"Base de cálculo, arbitramento e alíquotas", a:{
  const:{t:"As alíquotas de referência são fixadas pelo Senado Federal e cada ente fixa a sua própria alíquota. É a autonomia federativa aplicada ao tributo.", m:["dconst07","dtrib04"]},
  trib:{t:"Base de cálculo e alíquota são o critério quantitativo. Compare o arbitramento com o arbitramento do lançamento do CTN (art. 148).", m:["dtrib08","dtrib05"]},
  adu:{t:"Compare com a base de cálculo do Imposto de Importação e com a valoração aduaneira.", m:["legadu02","legadu09"]}}},
 suj:{ nome:"Contribuintes, responsáveis e plataformas", a:{
  trib:{t:"Contribuinte, responsável e solidariedade são o tema da sujeição passiva (CTN, arts. 121 a 138). Compare o responsável pelo recolhimento com a responsabilidade tributária do CTN.", m:["dtrib06","dtrib07","dtrib10"]},
  adm:{t:"Quando a lei atribui deveres a terceiros (plataformas, intermediários), revise poderes e deveres administrativos e a legalidade estrita.", m:["dadm05","dadm02"]}}},
 split:{ nome:"Split payment, pagamento indevido e ressarcimento", a:{
  trib:{t:"O split é uma forma de recolhimento na liquidação financeira. Compare com as modalidades de extinção do crédito (CTN, art. 156) e com a restituição do indevido (CTN, art. 165).", m:["dtrib10","dtrib08"]},
  adm:{t:"O dever de colaboração de entes privados com a arrecadação liga-se a poderes e deveres administrativos.", m:["dadm05"]}}},
 nc:{ nome:"Não cumulatividade, créditos e uso e consumo pessoal", a:{
  const:{t:"A não cumulatividade é princípio constitucional do IBS e da CBS, regulamentado pela lei complementar (CF, art. 156-A). Compare com a do ICMS e a do IPI.", m:["dtrib15","dtrib16"]},
  trib:{t:"Créditos, estornos e limites ao crédito são o centro do IBS e da CBS, que substituem PIS, Cofins, ICMS e ISS.", m:["dtrib16","dtrib17"]},
  adu:{t:"O tributo pago na importação entra na cadeia de créditos. Compare com a tributação na importação (II, IPI, PIS/Cofins-Importação).", m:["legadu03"]}}},
 imp:{ nome:"IBS e CBS na importação e na exportação", a:{
  adu:{t:"IBS e CBS passam a incidir na importação, em lugar de PIS/Cofins-Importação e ICMS na importação, e convivem com o Imposto de Importação. Revise fato gerador, base de cálculo e despacho aduaneiro.", m:["legadu02","legadu03","legadu04"]},
  ci:{t:"Princípio do destino: a exportação sai desonerada, com manutenção de créditos, e a importação entra tributada em igualdade com o produto nacional. Relacione com balanço de pagamentos e câmbio.", m:["econ10","legadu09"]},
  const:{t:"A desoneração das exportações e a isonomia na importação decorrem do texto constitucional (CF, art. 156-A). Compare com as imunidades das exportações.", m:["dtrib02","dtrib15"]},
  trib:{t:"Compare com o Imposto de Exportação e com a imunidade de ICMS e de IPI nas exportações.", m:["dtrib15","dtrib16"]}}},
 reg:{ nome:"Regimes aduaneiros especiais, ZPE e bens de capital", a:{
  adu:{t:"Drawback, admissão temporária, entreposto, RECOF e ZPE são estudados na legislação aduaneira. A LC 214 trata de como o IBS e a CBS se comportam em cada um.", m:["legadu05","legadu06"]},
  ci:{t:"Os regimes especiais servem para estimular a exportação e a cadeia exportadora. A ZPE é instrumento de política de comércio exterior.", m:["legadu05","econ10"]},
  trib:{t:"Atenção à terminologia: suspensão do crédito tributário (CTN) não é o mesmo que suspensão do pagamento em regime aduaneiro. Isenção e suspensão aparecem como pegadinha.", m:["dtrib09","dtrib11"]},
  adm:{t:"A habilitação a regimes especiais é ato administrativo sujeito a requisitos. Revise atos e poderes administrativos.", m:["dadm03","dadm05"]}}},
 dif:{ nome:"Regimes diferenciados: cashback, cesta básica, reduções e anexos", a:{
  const:{t:"Reduções, cashback e cesta básica são exceções ao tratamento uniforme e se ligam a objetivos constitucionais, como a redução das desigualdades. Revise princípios e objetivos fundamentais.", m:["dconst01","dtrib02"]},
  trib:{t:"Alíquota reduzida, alíquota zero, isenção e imunidade são figuras diferentes. Compare com a exclusão do crédito (isenção e anistia) e com a imunidade.", m:["dtrib11","dtrib02"]}}},
 fin:{ nome:"Regimes específicos: serviços financeiros, imóveis, cooperativas e setores", a:{
  const:{t:"Os regimes específicos são exceções à regra geral, previstas na Constituição e delimitadas pela lei complementar.", m:["dtrib03"]},
  trib:{t:"Compare a base de cálculo de serviços financeiros e de imóveis com ISS, IOF e ITBI, que o IBS e a CBS passam a substituir ou a conviver.", m:["dtrib15","dtrib17"]},
  adm:{t:"Cooperativas e entidades sem fins lucrativos: distinga-as das entidades paraestatais e do Terceiro Setor.", m:["dadm07"]}}},
 cont:{ nome:"Consulta, contencioso, fiscalização, lançamento e penalidades", a:{
  adm:{t:"Processo administrativo tributário: contraditório, ampla defesa, prazos e recursos. Revise o processo administrativo federal e o controle da Administração.", m:["dadm16","dadm13","legcwb09"]},
  const:{t:"Contraditório e ampla defesa no processo administrativo (CF, art. 5º, LIV e LV) e o direito de petição.", m:["dconst04"]},
  trib:{t:"Lançamento de ofício, presunções, arbitramento, multas e denúncia espontânea correspondem ao lançamento e à fiscalização do CTN. Revise também o ciclo da dívida ativa.", m:["dtrib08","dtrib13","dtrib14"]},
  adu:{t:"Penalidades e fiscalização conversam com as infrações aduaneiras, o perdimento e a representação fiscal.", m:["legadu07","legadu08"]}}},
 trans:{ nome:"Transição, alíquotas de teste e compensação do ICMS", a:{
  const:{t:"A transição respeita segurança jurídica, anterioridade e irretroatividade. Revise as limitações ao poder de tributar e o pacto federativo.", m:["dtrib02","dconst07"]},
  trib:{t:"Compensação do ICMS e do ISS, saldo credor e alíquotas de teste de 2026. Revise o ICMS e a vigência da legislação tributária.", m:["dtrib16","dtrib05","dtrib04"]}}},
 is:{ nome:"Imposto Seletivo", a:{
  const:{t:"O Imposto Seletivo é instrumento de extrafiscalidade, previsto na Constituição para bens e serviços prejudiciais à saúde e ao meio ambiente. Compare com a seletividade do IPI.", m:["dtrib15","dtrib03"]},
  trib:{t:"Compare com o IPI e com os impostos extrafiscais. A competência é da União.", m:["dtrib15"]},
  adu:{t:"Revise como os tributos incidem na importação e o despacho aduaneiro.", m:["legadu03","legadu04"]},
  ci:{t:"Em regra o Imposto Seletivo não incide sobre exportações. Relacione com a lógica do destino.", m:["econ10"]}}},
 zfm:{ nome:"Zona Franca de Manaus e Áreas de Livre Comércio", a:{
  const:{t:"A Zona Franca tem tratamento constitucional próprio e serve à redução das desigualdades regionais. Revise objetivos fundamentais e a ordem econômica.", m:["dconst01","dconst18"]},
  adu:{t:"Entradas e saídas das áreas especiais seguem regime aduaneiro próprio. Revise áreas especiais e regimes.", m:["legadu06"]},
  ci:{t:"As áreas especiais funcionam como incentivo ao comércio exterior e ao desenvolvimento regional.", m:["legadu06","econ10"]},
  trib:{t:"Benefícios fiscais regionais e isenções: revise exclusão do crédito e competência.", m:["dtrib11"]}}},
 gov:{ nome:"Compras públicas, CGIBS e associação pública", a:{
  adm:{t:"O CGIBS e a associação pública especial têm natureza pública própria. Compare com autarquias e a organização da Administração direta e indireta. Revise também licitações.", m:["dadm06","dadm07","dadm14"]},
  const:{t:"O Comitê Gestor liga-se à organização federativa e à Administração Pública (CF, art. 37).", m:["dconst17","dconst07"]},
  trib:{t:"Compras governamentais: compare o tratamento do tributo nas aquisições públicas com a imunidade recíproca.", m:["dtrib02"]}}},
 alt:{ nome:"Alterações em outras leis, revogações e vigência", a:{
  trib:{t:"Alterações no CTN e em outras leis: revise legislação tributária, vigência e hierarquia.", m:["dtrib05"]},
  const:{t:"Lei complementar, hierarquia das normas e processo legislativo.", m:["dconst11"]}}},
 sn:{ nome:"Simples Nacional e MEI", a:{
  trib:{t:"Regime favorecido e opção pelo regime regular de IBS e CBS (regime híbrido). Revise o Simples Nacional.", m:["simples01","simples02"]},
  const:{t:"Tratamento favorecido às micro e pequenas empresas (CF, arts. 146, III, d, e 179).", m:["dconst18"]}}}
};
var D = {
 inst:["Os documentos fiscais eletrônicos geram dados estruturados. Revise formatos (XML, JSON, CSV), dados abertos e a base da TI aplicada à fiscalização.",["fdados02","ti17"]],
 base:["Base de cálculo e alíquota por item tendem a exigir cadastro e classificação de produtos corretos. Revise qualidade e governança de dados.",["fdados22","fdados02"]],
 suj:["Cadastros de contribuintes dependem de qualidade de dados, chaves únicas e pareamento de registros (record linkage).",["fdados10","ti02"]],
 split:["Conciliar pagamentos com documentos fiscais é um problema de integração de dados. Revise pipeline, ETL, lote e fluxo contínuo (batch x streaming).",["fdados04","ti20"]],
 nc:["A apuração de débitos e créditos é um cruzamento de documentos fiscais. Revise SQL, junções e consistência dos dados.",["ti05","fdados04"]],
 imp:["Os dados de importação e exportação alimentam análise de risco e cruzamentos. Revise mineração de dados e detecção de anomalias.",["fdados09","ti25"]],
 reg:["Controlar regimes com suspensão exige rastreabilidade (saldo, prazo e baixa). Revise modelagem e bancos de dados.",["ti01","ti05"]],
 dif:["Listas por produto e o cashback por pessoa física dependem de classificação de dados e da proteção de dados pessoais (LGPD).",["lgpd01","fdados22"]],
 fin:["Serviços financeiros movimentam grandes volumes de dados transacionais. Revise Big Data e pipeline de dados.",["fdados03","fdados04"]],
 cont:["Fiscalização por cruzamento de dados e presunções usa mineração, detecção de anomalias e análise de risco. Revise o sigilo fiscal e a LGPD.",["fdados09","ti25","lgpd02"]],
 trans:["Conviver com sistemas antigos e novos exige migração e integração de dados. Revise ETL e pipelines.",["fdados04","ti20"]],
 zfm:["Os dados de entradas e saídas das áreas especiais sustentam a conformidade. Revise documentos fiscais eletrônicos e SPED.",["ti17"]],
 gov:["Governança de dados, transparência e dados abertos, e o compartilhamento entre entes com sigilo fiscal (LGPD).",["fdados22","lgpd02","fdados02"]],
 sn:["Apuração e opção híbrida exigem integração de dados entre sistemas. Revise SPED e documentos eletrônicos.",["ti17"]]
};
Object.keys(D).forEach(function(k){ G[k].a.dados={t:D[k][0],m:D[k][1]}; });
var M={};
function put(g,a,b){ for(var i=a;i<=b;i++) M["rf"+i]=g; }
put("inst",63,64); put("base",65,65); put("suj",66,66); put("split",67,67); put("nc",68,68); put("imp",69,69); put("reg",70,70);
put("dif",71,75); put("fin",76,80); put("cont",81,82); put("trans",83,85); put("is",86,86); put("zfm",87,88);
put("gov",89,90); put("alt",91,91); put("sn",92,92); put("dif",93,94);
return {G:G,M:M,AREAS:[["const","Direito Constitucional"],["adm","Direito Administrativo"],["trib","Direito Tributário"],["adu","Legislação Aduaneira"],["ci","Comércio Internacional"],["dados","Dados e TI"]]};
})();
