/* Direito Tributário — Módulo 02: Limitações constitucionais ao poder de tributar (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dtrib02 = (function(){
"use strict";

var CARDS = [
  ["O que são as limitações constitucionais ao poder de tributar?","Os <b>princípios constitucionais tributários</b> e as <b>imunidades</b> que <b>limitam o exercício da competência tributária</b> por União, Estados, DF e Municípios."],
  ["O que exige o princípio da LEGALIDADE?","Que <b>lei</b> seja editada para <b>instituir ou aumentar</b> tributo. Todos os tributos devem ser instituídos por lei."],
  ["Quais os 6 tributos excetuados da legalidade?","<b>II · IE · IPI · IOF · CIDE-Combustíveis · ICMS-Combustíveis</b>. A exceção alcança <b>só a alteração de ALÍQUOTAS</b> — <b>nunca a base de cálculo</b>."],
  ["O que veda o princípio da ISONOMIA?","<b>Tratamento desigual entre contribuintes em situação equivalente</b>, e também qualquer distinção em razão de <b>ocupação profissional ou função exercida</b>."],
  ["O que diz o princípio da CAPACIDADE CONTRIBUTIVA?","Que os <b>impostos</b> sejam <b>graduados segundo a capacidade econômica</b> do contribuinte — busca a <b>justiça (equidade)</b> na tributação."],
  ["A capacidade contributiva vale só para impostos?","A CF a relaciona <b>apenas aos impostos</b>, mas o <b>STF entende que é extensível a outras espécies tributárias</b>."],
  ["O que veda o princípio do NÃO CONFISCO?","Utilizar <b>tributo com efeito de confisco</b>. Para o <b>STF</b>, o efeito confiscatório se afere pela <b>totalidade de tributos</b> a que o contribuinte está submetido <b>em relação à mesma pessoa política</b>."],
  ["Em que se subdivide o princípio da NÃO SURPRESA?","<b>1)</b> anterioridade <b>anual</b> (de exercício); <b>2)</b> anterioridade <b>nonagesimal</b> (noventena)."],
  ["O que veda a ANTERIORIDADE ANUAL?","Cobrar tributos <b>no mesmo exercício financeiro</b> em que foi <b>publicada</b> a lei que os instituiu ou aumentou."],
  ["Quais as exceções à ANTERIORIDADE ANUAL?","<b>01</b> II, IE, IPI, IOF (extrafiscais) · <b>02</b> <b>IEG</b> · <b>03</b> empréstimos compulsórios de <b>guerra ou calamidade</b> · <b>04</b> <b>COFINS</b> (contribuições da seguridade) · <b>05</b> <b>ICMS e CIDE Combustível</b>, apenas em <b>redução e restabelecimento</b> de alíquota."],
  ["O que estabelece a ANTERIORIDADE NONAGESIMAL?","Que a cobrança só ocorra <b>90 dias após a publicação</b> da lei que institua ou majore o tributo."],
  ["Quais as exceções à NOVENTENA?","<b>01</b> <b>II, IE, IOF</b> — <b>o IPI NÃO está aqui</b> · <b>02</b> <b>IEG</b> · <b>03</b> empréstimos compulsórios de guerra ou calamidade · <b>04</b> <b>IR</b> · <b>05</b> <b>base de cálculo do IPTU e do IPVA</b> (só a BC, não as alíquotas)."],
  ["Onde está a pegadinha do IPI nas anterioridades?","O IPI é <b>exceção à anual</b>, mas <b>OBEDECE à noventena</b> — majorou hoje, cobra em 90 dias."],
  ["E o IR, ao contrário?","O IR é <b>exceção à noventena</b>, mas <b>OBEDECE à anual</b> — majorou em dezembro, cobra em 1º de janeiro."],
  ["E a COFINS?","É <b>exceção à anterioridade anual</b> (segue a regra do art. 195, § 6º), mas <b>NÃO é exceção à noventena</b>."],
  ["Empréstimo compulsório para investimento público urgente é exceção a quê?","<b>A NADA</b> — obedece <b>à anterioridade anual E à noventena</b>. Só os de <b>guerra e calamidade</b> são exceção."],
  ["O que veda a IRRETROATIVIDADE?","Cobrar tributos sobre <b>fatos geradores ocorridos antes do início da vigência</b> da lei que os instituiu ou aumentou — liga-se à <b>segurança jurídica</b>."],
  ["O que veda a LIBERDADE DE TRÁFEGO?","Estabelecer <b>limitações ao tráfego de pessoas ou bens</b> por meio de <b>tributos interestaduais ou intermunicipais</b> — <b>ressalvado o pedágio</b> por via conservada pelo Poder Público."],
  ["O que veda a UNIFORMIDADE GEOGRÁFICA?","Que a <b>UNIÃO</b> institua tributo <b>não uniforme</b> em todo o território ou que <b>distinga</b> um ente em detrimento dos demais. <b>Permitido</b>: incentivo fiscal para o <b>desenvolvimento socioeconômico</b> de regiões."],
  ["O que veda a UNIFORMIDADE DA TRIBUTAÇÃO DA RENDA?","Que a <b>União</b> tribute a renda das <b>obrigações da dívida pública</b> de Estados, DF e Municípios, e a <b>remuneração de seus agentes</b>, em <b>níveis superiores</b> aos que fixar para os seus."],
  ["O que é a vedação às ISENÇÕES HETERÔNOMAS?","Proíbe a <b>União de conceder isenção de tributo de outro ente</b>. Por lógica jurídica, também é vedado aos <b>Estados</b> isentar tributo municipal."],
  ["Governador concede, por MP estadual, isenção de IPTU. Vale?","<b>Não</b> — IPTU é imposto <b>municipal</b>. A isenção é <b>heterônoma</b> e vedada pela Constituição."],
  ["O que veda a NÃO DISCRIMINAÇÃO por procedência ou destino?","Que os entes criem <b>diferenças tributárias em razão da procedência ou do destino</b> de bens e serviços. Ex.: não cabe <b>IPVA</b> com alíquota maior para <b>veículo importado</b>."],
  ["O que impõe a TRANSPARÊNCIA TRIBUTÁRIA?","Que os <b>consumidores sejam esclarecidos</b> sobre a <b>carga tributária</b> dos impostos que incidem sobre mercadorias e serviços."],
  ["O que é a SELETIVIDADE?","Alíquotas em <b>razão INVERSA da essencialidade</b>: tributa-se <b>MAIS</b> o que é <b>MENOS essencial</b>. Ex.: mais o cigarro, menos a energia elétrica."],
  ["IPI e ICMS: seletividade obrigatória ou facultativa?","<b>IPI DEVE ser seletivo</b> (obrigatório) · <b>ICMS PODE ser seletivo</b> (facultativo)."],

  ["O que é IMUNIDADE tributária?","Situação em que a <b>CONSTITUIÇÃO proíbe</b> o ente de tributar determinado fato."],
  ["Imunidade × isenção","<b>Imunidade: a CONSTITUIÇÃO proíbe tributar.</b> <b>Isenção: a LEI dispensa</b> situação que a princípio seria tributada. Imunidade é constitucional; isenção é legal."],
  ["A imunidade dispensa as obrigações acessórias?","<b>NÃO</b> — a imunidade <b>não exime</b> o sujeito passivo das obrigações acessórias instituídas pela legislação."],
  ["Quais as espécies de imunidade do art. 150, VI?","<b>a)</b> recíproca · <b>b)</b> religiosa · <b>c)</b> partidos políticos, entidades sindicais de trabalhadores e instituições de educação e assistência social sem fins lucrativos · <b>d)</b> cultural · <b>e)</b> produção musical brasileira. E outras espalhadas pela CF."],
  ["O que diz a IMUNIDADE RECÍPROCA? (art. 150, VI, a)","É vedado a União, Estados, DF e Municípios instituir <b>IMPOSTOS</b> sobre <b>patrimônio, renda ou serviços uns dos outros</b>."],
  ["Qual a troca que a banca faz nas imunidades do art. 150, VI?","Escrever <b>“tributos”</b> onde a CF diz <b>“IMPOSTOS”</b>. Todas as cinco alíneas falam apenas de impostos."],
  ["A imunidade recíproca se estende a quem?","Às <b>autarquias e fundações instituídas e mantidas pelo Poder Público</b>, quanto ao patrimônio, renda e serviços <b>vinculados às finalidades essenciais ou delas decorrentes</b>."],
  ["A imunidade recíproca alcança o promitente comprador?","<b>NÃO</b> — não exonera o <b>promitente comprador</b> da obrigação de pagar imposto sobre o bem imóvel."],
  ["Cabe imunidade recíproca em taxas e contribuições?","<b>NÃO</b> — só pode ser invocada quanto a <b>IMPOSTOS</b>."],
  ["Cartórios têm imunidade recíproca?","<b>NÃO</b> — os <b>serviços notariais e de registro</b> são exercidos em <b>caráter PRIVADO</b>, por delegação do Poder Público."],
  ["Quando a imunidade recíproca NÃO se aplica?","<b>i)</b> exploração de <b>atividade econômica</b> regida pelo direito privado; <b>ii)</b> quando há <b>contraprestação ou pagamento de preços ou tarifas</b> pelo usuário; <b>iii)</b> tributos que não sejam impostos sobre <b>patrimônio, renda ou serviço</b>; <b>iv)</b> <b>cartórios</b>; <b>v)</b> <b>contribuinte de fato</b>."],
  ["STF, ARE 663.552 — energia elétrica e Município","O Município é <b>contribuinte de fato</b> do ICMS sobre energia elétrica, e <b>não tem imunidade</b>: ela só alcança o <b>contribuinte de DIREITO</b> — no caso, a prestadora do serviço."],
  ["O que alcança a IMUNIDADE RELIGIOSA? (art. 150, VI, b)","<b>Impostos</b> sobre <b>templos de qualquer culto</b>. Ex.: a renda de dízimo é imune ao <b>imposto de renda</b>."],
  ["A imunidade religiosa alcança taxa, COFINS e PIS?","<b>NÃO</b> — recai <b>apenas sobre impostos</b>."],
  ["Imóvel da igreja alugado a terceiro é imune?","<b>SIM</b>, desde que o <b>aluguel reverta em benefício da atividade religiosa</b>. A imunidade abrange o local de culto e esses imóveis."],
  ["Quem é imune pela alínea c do art. 150, VI?","<b>Partidos políticos</b>, inclusive suas <b>fundações</b>; <b>entidades sindicais dos TRABALHADORES</b>; e <b>instituições de educação e de assistência social SEM FINS LUCRATIVOS</b> — quanto a patrimônio, renda e serviços."],
  ["Qual o limite da imunidade da alínea c? (§ 4º)","Compreende <b>somente</b> o patrimônio, a renda e os serviços <b>relacionados com as finalidades essenciais</b> das entidades."],
  ["Pegadinha da alínea c: sindicato patronal é imune?","<b>Não</b> — a CF fala em entidades sindicais <b>DOS TRABALHADORES</b>. E as instituições de educação e assistência social só são imunes <b>sem fins lucrativos</b>."],
  ["O que alcança a IMUNIDADE CULTURAL? (alínea d)","<b>Impostos</b> sobre <b>livros, jornais, periódicos e o papel destinado à sua impressão</b>."],
  ["O que alcança a imunidade da PRODUÇÃO MUSICAL BRASILEIRA? (alínea e)","Impostos sobre <b>fonogramas e videofonogramas musicais produzidos no Brasil</b> com <b>obras musicais ou literomusicais de autores brasileiros</b> <b>e/ou</b> obras em geral <b>interpretadas por artistas brasileiros</b>, bem como os <b>suportes materiais ou arquivos digitais</b> que os contenham."],
  ["Qual a ressalva da imunidade musical?","<b>SALVO na etapa de replicação industrial de mídias ópticas de leitura a laser</b> — nessa fase, incide o <b>IPI</b>."],
  ["CD gravado no Brasil com óperas de Mozart por músicos brasileiros: imune?","<b>SIM</b> — basta que seja <b>interpretado por artistas brasileiros</b>; o autor não precisa ser brasileiro. Estados e DF não podem cobrar o <b>ICMS</b> da comercialização."],
  ["DVD de artistas brasileiras produzido no Brasil: incide o quê?","<b>Incide IPI</b> na fase de <b>multiplicação industrial dos suportes</b>, mas <b>não incide ICMS</b> na comercialização."],
  ["Reforma tributária: o que a EC 132/2023 acrescentou aos princípios?","O art. 145, § 3º passou a informar o Sistema Tributário Nacional pelos princípios da <b>simplicidade, transparência, justiça tributária, cooperação e defesa do meio ambiente</b>. O resumo de origem é anterior à emenda — confira a redação atual antes da prova."],
  ["Reforma tributária: o que muda em IPI, IBS e CBS?","O <b>IPI</b> será substituído pelo <b>Imposto Seletivo</b> e ICMS e ISS pelo <b>IBS</b>, com a <b>CBS</b> federal, na transição desenhada pela <b>EC 132/2023</b>. As <b>imunidades do art. 150, VI</b> permanecem, e a emenda ainda criou imunidades e regimes específicos próprios do IBS e da CBS."]
];

var QS = [
  ["As limitações constitucionais ao poder de tributar compreendem os princípios constitucionais tributários e as imunidades.","C","FGV","Ambos limitam o exercício da competência tributária pelos entes."],
  ["Todos os tributos devem ser instituídos por lei.","C","FCC","A exceção à legalidade alcança apenas a alteração de alíquotas de seis tributos."],
  ["São exceções ao princípio da legalidade, quanto à alteração de alíquotas, o II, o IE, o IPI, o IOF, a CIDE-Combustíveis e o ICMS-Combustíveis.","C","CEBRASPE","Seis tributos — e a exceção não alcança a base de cálculo."],
  ["A exceção ao princípio da legalidade alcança também a alteração da base de cálculo dos tributos extrafiscais.","E","FGV","Alcança <b>somente as alíquotas</b>."],
  ["A União, por decreto do Presidente da República, majorou a alíquota do IPI nos limites estabelecidos em lei. Houve violação ao princípio da legalidade.","E","FGV","O IPI é exceção à legalidade quanto a alíquotas — não houve violação."],
  ["O princípio da isonomia proíbe distinção de tratamento tributário em razão de ocupação profissional ou função exercida pelo contribuinte.","C","FCC","Veda tratamento desigual entre contribuintes em situação equivalente."],
  ["O princípio da capacidade contributiva determina que os impostos sejam graduados segundo a capacidade econômica do contribuinte.","C","CEBRASPE","Busca a equidade na tributação."],
  ["Segundo o STF, o princípio da capacidade contributiva aplica-se exclusivamente aos impostos.","E","FGV","Embora a CF o relacione aos impostos, o STF entende que é extensível a outras espécies tributárias."],
  ["Para o STF, a caracterização do efeito confiscatório deve considerar a totalidade dos tributos a que o contribuinte está submetido em relação à mesma pessoa política.","C","STF","Não se analisa o tributo isoladamente."],
  ["O princípio da não surpresa subdivide-se em anterioridade anual e anterioridade nonagesimal.","C","FCC","São as duas faces da proteção contra a tributação inesperada."],
  ["O princípio da anterioridade anual veda cobrar tributos no mesmo exercício financeiro em que publicada a lei que os instituiu ou aumentou.","C","CEBRASPE","Art. 150, III, b, da CF/88."],
  ["O Imposto Extraordinário de Guerra é exceção tanto à anterioridade anual quanto à noventena.","C","FGV","Assim como os empréstimos compulsórios de guerra ou calamidade."],
  ["O IPI é exceção ao princípio da anterioridade nonagesimal.","E","FGV","O IPI é exceção apenas à <b>anual</b>; obedece à noventena."],
  ["O imposto de renda é exceção ao princípio da anterioridade nonagesimal.","C","FCC","Mas obedece à anterioridade anual — majorado em dezembro, cobra-se em 1º de janeiro."],
  ["O II, o IE e o IOF são exceções tanto à anterioridade anual quanto à noventena.","C","CEBRASPE","São os extrafiscais puros; o IPI, embora extrafiscal, obedece à noventena."],
  ["A base de cálculo do IPTU e do IPVA é exceção ao princípio da anterioridade nonagesimal, o que não se aplica às suas alíquotas.","C","FGV","Só a base de cálculo é excetuada."],
  ["A COFINS é exceção ao princípio da noventena.","E","FCC","É exceção à anterioridade <b>anual</b>, mas obedece à noventena."],
  ["O empréstimo compulsório para realizar investimento público de caráter urgente é exceção aos princípios da anterioridade anual e nonagesimal.","E","FGV","Só os de guerra externa e calamidade pública são exceção; o de investimento urgente obedece aos dois."],
  ["O ICMS-Combustível e a CIDE-Combustível constituem exceção à anterioridade anual apenas nas hipóteses de redução e restabelecimento de alíquotas.","C","CEBRASPE","Majoração além do patamar anterior volta a se sujeitar ao princípio."],
  ["Decreto publicado em abril majorou a alíquota do IPI, com vigência trinta dias depois. Houve violação ao princípio da anterioridade nonagesimal.","C","FGV","O IPI se submete à noventena: seriam necessários 90 dias, e não 30."],
  ["O princípio da irretroatividade veda cobrar tributos em relação a fatos geradores ocorridos antes do início da vigência da lei que os instituiu ou aumentou.","C","FCC","Decorre diretamente da segurança jurídica."],
  ["O princípio da liberdade de tráfego impede a cobrança de pedágio pela utilização de vias conservadas pelo Poder Público.","E","CEBRASPE","O pedágio é expressamente <b>ressalvado</b> pela Constituição."],
  ["O princípio da uniformidade geográfica impede a concessão de incentivos fiscais destinados a promover o equilíbrio do desenvolvimento socioeconômico entre regiões do país.","E","FGV","Esses incentivos são expressamente permitidos."],
  ["É vedado à União tributar a renda das obrigações da dívida pública dos Estados em níveis superiores aos que fixar para suas obrigações.","C","FCC","É o princípio da uniformidade da tributação da renda; vale também para a remuneração dos agentes públicos."],
  ["A vedação às isenções heterônomas proíbe a União de conceder isenção de tributo instituído por outro ente federativo.","C","CEBRASPE","Por lógica jurídica, também é vedado aos Estados isentar tributo municipal."],
  ["Governador que, por medida provisória estadual, concede isenção de IPTU às áreas atingidas por calamidade pratica isenção heterônoma, vedada pela Constituição.","C","FGV","O IPTU é imposto municipal."],
  ["É permitido estabelecer alíquotas de IPVA diferenciadas entre veículos importados e nacionais.","E","FCC","Viola o princípio da não discriminação baseada na procedência ou destino."],
  ["O princípio da transparência tributária determina que os consumidores sejam esclarecidos acerca dos impostos que incidam sobre mercadorias e serviços.","C","CEBRASPE","Art. 150, § 5º, da CF/88."],
  ["Pelo princípio da seletividade, deve-se tributar mais a mercadoria quanto MAIOR for a sua essencialidade.","E","FGV","É o inverso: tributa-se mais o que é <b>menos</b> essencial."],
  ["O IPI deve ser seletivo e o ICMS pode ser seletivo.","C","FCC","Obrigatório para o IPI, facultativo para o ICMS."],
  ["A imunidade tributária ocorre quando a Constituição Federal proíbe o ente federativo de tributar determinado fato.","C","CEBRASPE","Isenção, por sua vez, decorre de lei."],
  ["A isenção é hipótese de não-incidência prevista na própria Constituição Federal.","E","FGV","Isso é a imunidade; a isenção decorre de lei específica."],
  ["A imunidade tributária exime o sujeito passivo do cumprimento das obrigações acessórias.","E","FCC","A imunidade não afasta as obrigações acessórias instituídas pela legislação."],
  ["A imunidade recíproca veda à União, aos Estados, ao Distrito Federal e aos Municípios instituir impostos sobre patrimônio, renda ou serviços uns dos outros.","C","CEBRASPE","Art. 150, VI, a — note que o texto fala em impostos, não em tributos."],
  ["A imunidade recíproca veda aos entes federativos instituir quaisquer tributos sobre patrimônio, renda ou serviços uns dos outros.","E","FGV","Alcança apenas <b>impostos</b>. É a troca de palavra que a banca mais explora."],
  ["A imunidade recíproca é extensiva às autarquias e às fundações instituídas e mantidas pelo Poder Público, quanto ao patrimônio, à renda e aos serviços vinculados às suas finalidades essenciais.","C","FCC","Art. 150, § 2º, da CF/88."],
  ["A imunidade recíproca exonera o promitente comprador da obrigação de pagar imposto relativamente ao bem imóvel.","E","CEBRASPE","O § 3º do art. 150 dispõe expressamente em sentido contrário."],
  ["O princípio da imunidade recíproca pode ser invocado na hipótese de taxas e contribuições.","E","FGV","Só na hipótese de impostos."],
  ["Os serviços notariais e de registro não se sujeitam à imunidade tributária recíproca.","C","STF","São exercidos em caráter privado, por delegação do Poder Público."],
  ["A imunidade recíproca não se aplica ao patrimônio, à renda e aos serviços relacionados com a exploração de atividades econômicas regidas pelo direito privado ou em que haja contraprestação pelo usuário.","C","CEBRASPE","Art. 150, § 3º, da CF/88."],
  ["Segundo o STF, o Município goza de imunidade recíproca quanto ao ICMS incidente sobre os serviços de energia elétrica que consome.","E","STF ARE 663.552","O Município é contribuinte de <b>fato</b>; a imunidade só alcança o contribuinte de <b>direito</b>."],
  ["A imunidade religiosa veda a instituição de impostos sobre templos de qualquer culto.","C","FCC","Art. 150, VI, b, da CF/88."],
  ["A renda auferida pelas igrejas com dízimo é imune ao imposto de renda.","C","FGV","Aplicação direta da imunidade religiosa."],
  ["A imunidade religiosa alcança a COFINS e a contribuição ao PIS devidas pela entidade.","E","CEBRASPE","A imunidade do art. 150, VI, recai apenas sobre impostos."],
  ["A imunidade religiosa abrange imóveis de propriedade da entidade religiosa locados a terceiros, desde que o aluguel reverta em benefício da atividade religiosa.","C","STF","Entendimento consolidado, que vale também para a alínea c."],
  ["São imunes a impostos o patrimônio, a renda e os serviços dos partidos políticos, inclusive suas fundações, das entidades sindicais dos trabalhadores e das instituições de educação e de assistência social sem fins lucrativos.","C","CEBRASPE","Art. 150, VI, c, da CF/88."],
  ["A imunidade da alínea c do art. 150, VI, alcança as entidades sindicais patronais.","E","FGV","A Constituição fala em entidades sindicais <b>dos trabalhadores</b>."],
  ["A imunidade dos partidos políticos e das instituições de educação compreende todo o seu patrimônio, ainda que não relacionado às finalidades essenciais.","E","FCC","O § 4º limita a imunidade ao patrimônio, à renda e aos serviços <b>relacionados com as finalidades essenciais</b>."],
  ["A imunidade cultural alcança livros, jornais, periódicos e o papel destinado a sua impressão.","C","CEBRASPE","Art. 150, VI, d, da CF/88."],
  ["A imunidade em favor da produção musical brasileira exige que as obras sejam de autores brasileiros, não bastando a interpretação por artistas brasileiros.","E","FGV","O texto usa “e/ou”: basta a interpretação por artistas brasileiros."],
  ["A imunidade musical alcança os suportes materiais ou arquivos digitais que contenham os fonogramas, salvo na etapa de replicação industrial de mídias ópticas de leitura a laser.","C","FCC","Art. 150, VI, e, da CF/88."],
  ["Estados e Distrito Federal não podem cobrar ICMS sobre a comercialização de CDs produzidos no Brasil contendo óperas de Mozart interpretadas por músicos brasileiros.","C","FGV","A interpretação por artistas brasileiros basta para atrair a imunidade."],
  ["O DVD produzido no Brasil por artistas brasileiras está sujeito ao IPI na fase de multiplicação industrial dos suportes materiais, mas não ao ICMS na comercialização.","C","FGV","É exatamente a ressalva da etapa de replicação industrial."],
  ["A imunidade tributária e a isenção têm a mesma natureza jurídica, distinguindo-se apenas quanto ao veículo normativo que as institui.","E","CEBRASPE","A imunidade é limitação constitucional de competência; a isenção é dispensa legal de tributo devido."]
];

var EX = {
S1:{t:"multi", instr:"Marque os tributos excetuados da LEGALIDADE quanto à alteração de alíquotas",
  options:["Imposto de Importação","Imposto de Exportação","IPI","IOF",
           "CIDE-Combustíveis","ICMS-Combustíveis","Imposto de Renda"],
  answers:[0,1,2,3,4,5],
  why:"São seis — e a exceção nunca alcança a base de cálculo."},

S2:{t:"match", instr:"Ligue cada princípio ao seu comando",
  pairs:[["Isonomia","Veda tratamento desigual a contribuintes em situação equivalente"],
         ["Capacidade contributiva","Impostos graduados segundo a capacidade econômica"],
         ["Não confisco","Veda o tributo com efeito confiscatório"]],
  why:"Capacidade contributiva: a CF fala em impostos, mas o STF estende a outras espécies."},

S3:{t:"sort", instr:"Exceção à ANTERIORIDADE ANUAL ou à NOVENTENA?",
  buckets:["Exceção só à ANUAL","Exceção só à NOVENTENA","Exceção às DUAS"],
  items:[["IPI",0],["COFINS",0],
         ["Imposto de Renda",1],["Base de cálculo do IPTU e do IPVA",1],
         ["II, IE e IOF",2],["IEG",2],["Empréstimo compulsório de guerra",2]],
  why:"IPI e IR são as duas pegadinhas: um cai só na anual, o outro só na noventena."},

S4:{t:"gap", instr:"Complete a exceção dos combustíveis",
  before:"O ICMS-Combustível e a CIDE-Combustível são exceção à anterioridade anual apenas nas hipóteses de ",
  after:" de alíquotas.",
  options:["redução e restabelecimento","instituição e majoração","isenção e remissão"], answer:0,
  why:"Restabelecer até o patamar anterior não é majorar."},

S5:{t:"mc", instr:"Empréstimo compulsório para investimento público de caráter urgente é exceção a:",
  options:["A nenhum dos dois princípios — obedece à anual e à noventena",
           "Apenas à anterioridade anual",
           "Apenas à noventena",
           "Aos dois princípios"],
  answer:0,
  why:"Só os empréstimos compulsórios de guerra externa e calamidade pública são exceção."},

S6:{t:"mc", instr:"Decreto de abril majorou a alíquota do IPI, com vigência 30 dias depois. Qual a conclusão correta?",
  options:["Não violou a legalidade nem a anterioridade anual, mas violou a noventena",
           "Violou a legalidade, por se tratar de decreto",
           "Violou a anterioridade anual, mas não a noventena",
           "Não violou princípio algum"],
  answer:0,
  why:"O IPI é exceção à legalidade (alíquotas) e à anual, mas obedece aos 90 dias."},

S7:{t:"multi", instr:"Marque o que é vedado pelas limitações do art. 150 e seguintes",
  options:["Cobrar tributo sobre fato gerador anterior à vigência da lei",
           "Limitar o tráfego de pessoas por tributo interestadual",
           "Instituir tributo federal não uniforme no território nacional",
           "Cobrar pedágio por via conservada pelo Poder Público"],
  answers:[0,1,2],
  why:"O pedágio é ressalva expressa do princípio da liberdade de tráfego."},

S8:{t:"wordbank", instr:"Monte o princípio da seletividade",
  target:["as","alíquotas","variam","na","razão","INVERSA","da","essencialidade","do","produto"],
  extra:["na razão direta","do valor agregado","da origem"],
  why:"Tributa-se mais o cigarro e menos a energia elétrica."},

S9:{t:"sort", instr:"Seletividade obrigatória ou facultativa?",
  buckets:["DEVE ser seletivo","PODE ser seletivo"],
  items:[["IPI",0],["ICMS",1]],
  why:"Duas palavras, uma questão inteira."},

S10:{t:"mc", instr:"Governador concede, por MP estadual, isenção de IPTU em área de calamidade. Qual o vício?",
  options:["Isenção heterônoma, vedada pela Constituição",
           "Violação da anterioridade nonagesimal",
           "Violação do princípio do não confisco",
           "Nenhum — a calamidade autoriza a medida"],
  answer:0,
  why:"IPTU é imposto municipal; nem a União pode isentar tributo alheio."},

S11:{t:"match", instr:"Imunidade ou isenção?",
  pairs:[["Imunidade","A Constituição proíbe tributar"],
         ["Isenção","A lei dispensa o tributo que seria devido"]],
  why:"E nenhuma das duas afasta as obrigações acessórias."},

S12:{t:"gap", instr:"Complete o alcance das imunidades do art. 150, VI",
  before:"É vedado à União, aos Estados, ao Distrito Federal e aos Municípios instituir ",
  after:" sobre patrimônio, renda ou serviços uns dos outros.",
  options:["impostos","tributos","taxas e contribuições"], answer:0,
  why:"Trocar “impostos” por “tributos” é a pegadinha mais frequente de todo o tema."},

S13:{t:"multi", instr:"Marque as hipóteses em que a imunidade RECÍPROCA NÃO se aplica",
  options:["Exploração de atividade econômica regida pelo direito privado",
           "Quando há contraprestação ou pagamento de tarifa pelo usuário",
           "Serviços notariais e de registro",
           "Contribuinte de fato",
           "Autarquias, quanto ao patrimônio vinculado às finalidades essenciais"],
  answers:[0,1,2,3],
  why:"Autarquias e fundações públicas SÃO alcançadas, nos limites das finalidades essenciais."},

S14:{t:"gap", instr:"Complete o entendimento do STF no ARE 663.552",
  before:"O Município não goza de imunidade recíproca quanto ao ICMS da energia elétrica que consome porque a imunidade não alcança o ",
  after:", mas apenas o contribuinte de direito.",
  options:["contribuinte de fato","responsável tributário","substituto tributário"], answer:0,
  why:"Quem recolhe o ICMS da energia é a prestadora — essa, sim, contribuinte de direito."},

S15:{t:"sort", instr:"A imunidade do art. 150, VI, alcança?",
  buckets:["Alcança","Não alcança"],
  items:[["IPTU do templo",0],["Imposto de renda sobre o dízimo",0],
         ["Imóvel da igreja alugado, com aluguel revertido à atividade religiosa",0],
         ["COFINS da entidade religiosa",1],["Taxa de coleta de lixo",1]],
  why:"O art. 150, VI, só afasta IMPOSTOS."},

S16:{t:"multi", instr:"Marque quem é imune pela alínea c do art. 150, VI",
  options:["Partidos políticos, inclusive suas fundações",
           "Entidades sindicais dos trabalhadores",
           "Instituições de educação sem fins lucrativos",
           "Entidades sindicais patronais"],
  answers:[0,1,2],
  why:"A Constituição contemplou apenas os sindicatos DOS TRABALHADORES."},

S17:{t:"gap", instr:"Complete o limite da imunidade da alínea c (§ 4º)",
  before:"A imunidade compreende somente o patrimônio, a renda e os serviços relacionados com as ",
  after:" das entidades nela mencionadas.",
  options:["finalidades essenciais","atividades lucrativas","operações próprias"], answer:0,
  why:"Sem vínculo com a finalidade essencial, não há imunidade."},

S18:{t:"order", instr:"Ordene as alíneas do art. 150, VI, na ordem da Constituição",
  items:["a) imunidade recíproca","b) templos de qualquer culto",
         "c) partidos, sindicatos de trabalhadores, educação e assistência social",
         "d) livros, jornais, periódicos e o papel","e) fonogramas e videofonogramas musicais brasileiros"],
  why:"Saber a ordem das alíneas ajuda a identificar a imunidade pelo enunciado."},

S19:{t:"mc", instr:"CD produzido no Brasil com óperas de Mozart interpretadas por músicos brasileiros:",
  options:["É imune — basta a interpretação por artistas brasileiros",
           "Não é imune — o autor não é brasileiro",
           "É imune apenas se o suporte for digital",
           "É imune apenas quanto ao IPI"],
  answer:0,
  why:"O texto constitucional usa “e/ou”: autor brasileiro OU intérprete brasileiro."},

S20:{t:"gap", instr:"Complete a ressalva da imunidade musical",
  before:"A imunidade alcança os suportes materiais ou arquivos digitais, salvo na etapa de ",
  after:" de mídias ópticas de leitura a laser.",
  options:["replicação industrial","comercialização varejista","distribuição digital"], answer:0,
  why:"Nessa etapa incide o IPI — mas o ICMS da comercialização continua afastado."},

S21:{t:"multi", instr:"Marque o que a EC 132/2023 trouxe para o Sistema Tributário Nacional",
  options:["Os princípios da simplicidade, transparência e justiça tributária",
           "A cooperação e a defesa do meio ambiente como princípios informadores",
           "A substituição de ICMS e ISS pelo IBS, com a CBS federal",
           "A revogação das imunidades do art. 150, VI"],
  answers:[0,1,2],
  why:"As imunidades do art. 150, VI, permanecem — a emenda ainda criou imunidades próprias do IBS e da CBS."},

S22:{t:"sort", instr:"Princípio ou imunidade?",
  buckets:["Princípio","Imunidade"],
  items:[["Legalidade",0],["Irretroatividade",0],["Seletividade",0],["Liberdade de tráfego",0],
         ["Templos de qualquer culto",1],["Livros, jornais e periódicos",1],["Recíproca",1]],
  why:"Princípios dizem COMO tributar; imunidades dizem O QUE não pode ser tributado."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Legalidade, isonomia, capacidade contributiva e não confisco",
      '<div class="box"><span class="bl">O mapa do tema</span>'+
      '<p>As <b>limitações constitucionais ao poder de tributar</b> são de dois tipos: <b>princípios</b> (como se tributa) e <b>imunidades</b> (o que não se pode tributar). As duas <b>limitam o exercício da competência tributária</b>.</p></div>'+
      '<div class="box"><span class="bl">Legalidade</span>'+
      '<p>Todo tributo só se <b>institui ou aumenta por LEI</b>.</p>'+
      '<p><b>Seis exceções, só quanto a ALÍQUOTAS:</b> <b>II · IE · IPI · IOF · CIDE-Combustíveis · ICMS-Combustíveis</b>.</p>'+
      '<p class="mn"><em>A exceção <b>nunca</b> alcança a base de cálculo. Decreto que majora alíquota de IPI dentro dos limites legais é válido.</em></p></div>'+
      '<div class="box"><span class="bl">Isonomia e capacidade contributiva</span>'+
      '<p><b>Isonomia:</b> veda <b>tratamento desigual entre contribuintes em situação equivalente</b>, e qualquer distinção por <b>ocupação profissional ou função</b>.</p>'+
      '<p><b>Capacidade contributiva:</b> os <b>impostos</b> serão <b>graduados segundo a capacidade econômica</b>. A CF fala em impostos, mas o <b>STF estende a outras espécies</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Não confisco</span>'+
      '<p>Veda o tributo <b>com efeito de confisco</b>. Para o <b>STF</b>, o efeito se afere pela <b>totalidade dos tributos</b> a que o contribuinte está submetido <b>em relação à mesma pessoa política</b> — não por tributo isolado.</p></div>'),
    sl("Não surpresa: anterioridade anual e noventena",
      '<div class="box"><span class="bl">As duas regras</span>'+
      '<p><b>Anual:</b> não se cobra no <b>mesmo exercício financeiro</b> da publicação da lei.<br>'+
      '<b>Nonagesimal (noventena):</b> só <b>90 dias</b> depois da publicação.</p>'+
      '<p class="mn"><em>Em regra, as duas se exigem <b>cumulativamente</b>.</em></p></div>'+
      '<div class="box"><span class="bl">Exceções à ANUAL</span>'+
      '<p><b>01</b> II, IE, IPI, IOF · <b>02</b> IEG · <b>03</b> empréstimos compulsórios de <b>guerra ou calamidade</b> · <b>04</b> <b>COFINS</b> · <b>05</b> ICMS e CIDE Combustível (<b>só redução e restabelecimento</b>).</p></div>'+
      '<div class="box"><span class="bl">Exceções à NOVENTENA</span>'+
      '<p><b>01</b> II, IE, IOF — <b>o IPI não está aqui</b> · <b>02</b> IEG · <b>03</b> empréstimos compulsórios de guerra ou calamidade · <b>04</b> <b>IR</b> · <b>05</b> <b>base de cálculo</b> do IPTU e do IPVA (<b>não as alíquotas</b>).</p></div>'+
      '<div class="box trap"><span class="bl">As três pegadinhas do tema</span>'+
      '<p><b>1) IPI</b> — exceção à anual, <b>obedece à noventena</b>. Decreto de abril com vigência em 30 dias <b>viola</b> a noventena.<br>'+
      '<b>2) IR</b> — exceção à noventena, <b>obedece à anual</b>.<br>'+
      '<b>3) Empréstimo compulsório de investimento público urgente</b> — <b>não é exceção a nada</b>.</p>'+
      '<p class="mn"><em>E a <b>COFINS</b>: exceção à anual, <b>não</b> à noventena.</em></p></div>')
  ],
  V2:[
    sl("Os demais princípios",
      '<div class="box"><span class="bl">Irretroatividade</span>'+
      '<p>Veda cobrar tributo sobre <b>fato gerador ocorrido antes do início da vigência</b> da lei. É <b>segurança jurídica</b> pura.</p></div>'+
      '<div class="box"><span class="bl">Liberdade de tráfego</span>'+
      '<p>Veda limitar o <b>tráfego de pessoas ou bens</b> por <b>tributos interestaduais ou intermunicipais</b> — <b>ressalvado o PEDÁGIO</b> por via conservada pelo Poder Público.</p></div>'+
      '<div class="box"><span class="bl">Uniformidade geográfica × uniformidade da renda</span>'+
      '<p><b>Geográfica:</b> a <b>União</b> não institui tributo <b>não uniforme</b> no território nacional. <b>Mas pode</b> conceder <b>incentivos fiscais</b> para o desenvolvimento socioeconômico de regiões.</p>'+
      '<p><b>Da renda:</b> a União não tributa a renda das <b>obrigações da dívida pública</b> dos demais entes, nem a <b>remuneração de seus agentes</b>, em <b>níveis superiores</b> aos seus.</p></div>'+
      '<div class="box trap"><span class="bl">Isenções heterônomas</span>'+
      '<p>A <b>União não isenta tributo de outro ente</b>. Por lógica jurídica, o <b>Estado tampouco isenta tributo municipal</b> — MP estadual que isenta IPTU é inconstitucional.</p></div>'+
      '<div class="box"><span class="bl">Não discriminação, transparência e seletividade</span>'+
      '<p><b>Não discriminação:</b> sem diferença tributária por <b>procedência ou destino</b> — nada de IPVA maior para importado.</p>'+
      '<p><b>Transparência:</b> o <b>consumidor</b> deve ser esclarecido sobre a <b>carga tributária</b> de mercadorias e serviços.</p>'+
      '<p><b>Seletividade:</b> alíquota na <b>razão INVERSA da essencialidade</b> — mais cigarro, menos energia elétrica. <b>IPI DEVE</b> ser seletivo; <b>ICMS PODE</b> ser.</p></div>')
  ],
  V3:[
    sl("Imunidade: conceito e imunidade recíproca",
      '<div class="box"><span class="bl">Imunidade × isenção</span>'+
      '<p><b>Imunidade:</b> a <b>CONSTITUIÇÃO proíbe tributar</b>.<br>'+
      '<b>Isenção:</b> a <b>LEI</b> dispensa situação que, a princípio, seria tributada.</p>'+
      '<p class="mn"><em>A imunidade <b>não exime das obrigações acessórias</b>.</em></p></div>'+
      '<div class="box trap"><span class="bl">O detalhe que decide a questão</span>'+
      '<p>Todas as alíneas do art. 150, VI, falam em <b>IMPOSTOS</b>. A banca troca por <b>“tributos”</b> e a assertiva fica errada. Leia essa palavra sempre.</p></div>'+
      '<div class="box"><span class="bl">Recíproca — art. 150, VI, a</span>'+
      '<p>Veda instituir <b>impostos sobre patrimônio, renda ou serviços</b> uns dos outros. <b>Estende-se</b> a <b>autarquias e fundações públicas</b>, quanto ao que é <b>vinculado às finalidades essenciais ou delas decorrentes</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Onde a recíproca NÃO chega</span>'+
      '<p><b>i)</b> exploração de <b>atividade econômica</b> regida pelo direito privado; <b>ii)</b> quando há <b>contraprestação de preço ou tarifa</b>; <b>iii)</b> tributos que <b>não sejam impostos</b>; <b>iv)</b> <b>cartórios</b> (serviços notariais e de registro, exercidos em caráter <b>privado</b> por delegação); <b>v)</b> <b>contribuinte de fato</b>; <b>vi)</b> o <b>promitente comprador</b> do imóvel.</p>'+
      '<p class="mn"><em><b>STF, ARE 663.552:</b> o Município é contribuinte de <b>fato</b> do ICMS da energia elétrica — sem imunidade. Ela só alcança o contribuinte de <b>direito</b>.</em></p></div>'),
    sl("As demais imunidades",
      '<div class="box"><span class="bl">Religiosa — alínea b</span>'+
      '<p><b>Impostos</b> sobre <b>templos de qualquer culto</b>. A renda de <b>dízimo</b> é imune ao <b>IR</b>. Não alcança <b>taxa, COFINS nem PIS</b>.</p>'+
      '<p>Abrange o <b>local de culto</b> e <b>imóveis locados a terceiros</b>, desde que o <b>aluguel reverta em benefício da atividade religiosa</b>.</p></div>'+
      '<div class="box"><span class="bl">Alínea c — partidos, sindicatos, educação e assistência</span>'+
      '<p><b>Partidos políticos</b>, inclusive suas <b>fundações</b>; <b>entidades sindicais DOS TRABALHADORES</b>; <b>instituições de educação e de assistência social SEM FINS LUCRATIVOS</b>.</p>'+
      '<p><b>Limite (§ 4º):</b> somente o patrimônio, a renda e os serviços <b>relacionados com as finalidades essenciais</b>.</p>'+
      '<p class="mn"><em>Sindicato <b>patronal</b> não é imune — a CF contemplou só o dos trabalhadores.</em></p></div>'+
      '<div class="box"><span class="bl">Cultural — alínea d</span>'+
      '<p><b>Livros, jornais, periódicos</b> e o <b>papel destinado à sua impressão</b>.</p></div>'+
      '<div class="box tip"><span class="bl">Musical — alínea e</span>'+
      '<p><b>Fonogramas e videofonogramas musicais produzidos no Brasil</b> com obras de <b>autores brasileiros</b> <b>E/OU</b> interpretadas por <b>artistas brasileiros</b>, mais os <b>suportes materiais ou arquivos digitais</b>.</p>'+
      '<p><b>SALVO</b> na etapa de <b>replicação industrial de mídias ópticas de leitura a laser</b> — aí incide o <b>IPI</b>.</p>'+
      '<p class="mn"><em>Ópera de Mozart gravada no Brasil por músicos brasileiros: <b>imune ao ICMS</b>. O “e/ou” resolve a questão.</em></p></div>'+
      '<div class="box trap"><span class="bl">Reforma tributária — EC 132/2023</span>'+
      '<p>O art. 145, § 3º, passou a informar o sistema pelos princípios da <b>simplicidade, transparência, justiça tributária, cooperação e defesa do meio ambiente</b>. O <b>IPI</b> cede lugar ao <b>Imposto Seletivo</b>; <b>ICMS e ISS</b>, ao <b>IBS</b>, com a <b>CBS</b> federal.</p>'+
      '<p>As <b>imunidades do art. 150, VI, continuam valendo</b>, e a emenda criou imunidades e regimes específicos próprios do IBS e da CBS. Como o resumo de origem é anterior à emenda, confira a redação atual antes da prova.</p></div>')
  ]
};

var TEC = [
  ["Caderno CEBRASPE — Direito Tributário 02","https://www.tecconcursos.com.br/s/Q1TKA3","Q1TKA3"],
  ["Caderno FCC — Direito Tributário 02","https://www.tecconcursos.com.br/s/Q1r1mR","Q1r1mR"],
  ["Caderno FGV — Direito Tributário 02","https://www.tecconcursos.com.br/s/Q1r1mK","Q1r1mK"],
  ["Caderno VUNESP — Direito Tributário 02","https://www.tecconcursos.com.br/s/Q2glUY","Q2glUY"]
];
var TECNOTA = "Priorize o caderno da FGV — banca do último certame da Receita Federal. Este é o módulo mais cobrado de todo o Direito Tributário: as duas tabelas de exceção (anterioridade anual e noventena) e a palavra “impostos” nas imunidades do art. 150, VI, decidem sozinhas várias questões. ATENÇÃO À DATA: o resumo de origem é anterior à EC 132/2023, que acrescentou princípios ao art. 145, § 3º e desenhou a transição para IBS, CBS e Imposto Seletivo. As imunidades do art. 150, VI, seguem íntegras, mas confira a redação atual da CF antes de decorar qualquer lista.";

var UNITS = [
  {n:1, title:"Legalidade, isonomia e não surpresa", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Legalidade, isonomia, capacidade e não confisco", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · legalidade e isonomia",      xp:25, data:["S1","S2","T0","T1","T2","T3","T4","T5","T6","T7","T8"]},
    {id:"K3", type:"drill",  title:"Praticar · anterioridade e noventena",  xp:25, data:["S3","S4","S5","S6","T9","T10","T11","T12","T13","T14","T15","T16","T17","T18"]},
    {id:"K4", type:"flash",  title:"Flashcards · princípios e não surpresa", xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}
  ]},
  {n:2, title:"Os demais princípios tributários", cvar:"u2", lessons:[
    {id:"K5", type:"teoria", title:"Irretroatividade, tráfego, uniformidade e seletividade", xp:10, data:"V2"},
    {id:"K6", type:"drill",  title:"Praticar · irretroatividade e tráfego", xp:25, data:["S7","T19","T20","T21","T22","T23"]},
    {id:"K7", type:"drill",  title:"Praticar · isenções heterônomas e seletividade", xp:25, data:["S8","S9","S10","T24","T25","T26","T27","T28","T29"]},
    {id:"K8", type:"flash",  title:"Flashcards · demais princípios",        xp:15, data:[16,17,18,19,20,21,22,23,24,25]}
  ]},
  {n:3, title:"Imunidade tributária e imunidade recíproca", cvar:"u3", lessons:[
    {id:"K9", type:"teoria", title:"Conceito, art. 150, VI e imunidade recíproca", xp:10, data:"V3"},
    {id:"K10",type:"drill",  title:"Praticar · imunidade × isenção",        xp:25, data:["S11","S12","S22","T30","T31","T32","T33","T34"]},
    {id:"K11",type:"drill",  title:"Praticar · imunidade recíproca",        xp:25, data:["S13","S14","T35","T36","T37","T38","T39","T40"]},
    {id:"K12",type:"flash",  title:"Flashcards · imunidade e recíproca",    xp:15, data:[26,27,28,29,30,31,32,33,34,35,36,37]}
  ]},
  {n:4, title:"Religiosa, cultural e musical", cvar:"u4", lessons:[
    {id:"K13",type:"drill",  title:"Praticar · religiosa e alínea c",       xp:25, data:["S15","S16","S17","T41","T42","T43","T44","T45","T46","T47"]},
    {id:"K14",type:"drill",  title:"Praticar · cultural, musical e reforma", xp:25, data:["S18","S19","S20","S21","T48","T49","T50","T51","T52","T53"]},
    {id:"K15",type:"flash",  title:"Flashcards · demais imunidades",        xp:15, data:[38,39,40,41,42,43,44,45,46,47,48,49,50]}
  ]},
  {n:5, title:"Fixação", cvar:"u5", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",               xp:60, data:null},
    {id:"K16", type:"missao", title:"Missão TEC Concursos",                 xp:15, data:null},
    {id:"K17", type:"prova",  title:"Simulado cronometrado",                xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 02 de Direito Tributário (Radegondes) ---------- */
var COM={
0:"<p>Definição de abertura do resumo: as limitações constitucionais ao poder de tributar <b>consistem nos princípios constitucionais tributários e nas imunidades tributárias</b> que <b>limitam o exercício da competência tributária</b> pelos entes da federação.</p><p>O esquema dele divide o assunto em duas colunas: <b>PRINCÍPIOS</b> (13 listados) e <b>IMUNIDADES</b> (6 espécies).</p><p class='fb-fonte'>Resumo 02 · <i>Limitações Constitucionais ao Poder de Tributar</i></p>",
1:"<p>Do resumo: o princípio da legalidade prevê a necessidade de que <b>uma lei seja editada para instituir ou aumentar um tributo</b> — “ou seja, <b>todos os tributos devem ser instituídos por lei</b>”.</p><p>A exceção que vem logo abaixo é sobre <b>alteração de alíquotas</b>, não sobre a instituição. Por isso o item continua certo.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Legalidade</i></p>",
2:"<p>A exceção, como o resumo a escreve: existem <b>6 tributos</b> cuja <b>alteração de alíquotas (não base de cálculo)</b> está excetuada da legalidade — <b>II, IE, IPI, IOF, CIDE-Combustíveis e ICMS-Combustíveis</b>.</p><p>Conte sempre seis e guarde o parêntese: <b>alíquota sim, base de cálculo não</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Legalidade — exceção</i></p>",
3:"<p>O parêntese do resumo derruba o item: a exceção alcança a <b>alteração de alíquotas</b>, e ele escreve entre parênteses <b>“(não base de cálculo)”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Legalidade — exceção</i></p>",
4:"<p>É o <b>EXEMPLO</b> do próprio resumo, com as mesmas palavras: decreto do Presidente publicado em abril majorando a alíquota do IPI nos limites da lei — “<b>NÃO houve violação ao princípio da legalidade</b>”.</p><p>Porque o IPI é um dos seis cuja alíquota pode ser alterada por ato do Executivo.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Legalidade — exemplo</i></p>",
5:"<p>Do resumo: o princípio da isonomia <b>veda tratamento desigual entre contribuintes que se encontrem em situação equivalente</b>, e <b>proíbe também qualquer distinção em razão de ocupação profissional ou função exercida</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Isonomia</i></p>",
6:"<p>Do resumo: a capacidade contributiva dispõe que <b>os impostos sejam graduados segundo a capacidade econômica do contribuinte</b> — “ou seja, busca a <b>justiça (equidade)</b> na tributação”.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Capacidade Contributiva</i></p>",
7:"<p>Caixa <b>ATENÇÃO!</b> do resumo: <b>embora a CF relacione o princípio da capacidade contributiva apenas aos impostos, o STF entende que também pode ser extensível a outras espécies tributárias</b>.</p><p>A palavra que derruba o item é <b>“exclusivamente”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Capacidade Contributiva — Atenção!</i></p>",
8:"<p>Do resumo: é vedado utilizar tributo com efeito de confisco, e <b>para o STF a caracterização do efeito confiscatório deve ser obtida analisando a TOTALIDADE de tributos a que um contribuinte está submetido em relação à mesma pessoa política</b>.</p><p>Duas amarras: soma-se tudo, e só o que vem <b>do mesmo ente</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio do Não Confisco</i></p>",
9:"<p>Do resumo: o princípio da não surpresa <b>subdivide-se em (1) anterioridade anual e (2) anterioridade nonagesimal</b>.</p><p>É o guarda-chuva das duas — e as listas de exceções de cada uma são diferentes, que é onde a prova mora.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Não Surpresa</i></p>",
10:"<p>Redação do resumo: é vedado a qualquer dos entes federativos <b>cobrar tributos no mesmo exercício financeiro em que haja sido publicada a lei que os instituiu ou aumentou</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Anterioridade Anual</i></p>",
11:"<p>O <b>IEG</b> aparece nas <b>duas</b> listas de exceção do resumo — item 02 da anterioridade anual e item 02 da noventena. O mesmo vale para os <b>empréstimos compulsórios de guerra ou calamidade</b> (item 03 das duas).</p><p>Faz sentido: guerra e calamidade não esperam.</p><p class='fb-fonte'>Resumo 02 · <i>Exceções à Anterioridade</i></p>",
12:"<p>A lista da noventena no resumo vem com o aviso dentro do próprio item 01: <b>“II, IE, IOF (note que o IPI não está aqui)”</b>. E a observação 2 repete: <b>o IPI e a COFINS não são exceções ao princípio da noventena</b>.</p><p>Então o IPI é exceção só à <b>anual</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Exceções à Noventena</i></p>",
13:"<p>Item 04 da lista de exceções à noventena: o <b>IR</b>.</p><p>No quadro esquemático do resumo ele aparece só na coluna <b>NONAGESIMAL</b> — ou seja, obedece à anterioridade <b>anual</b>. Daí a consequência prática: lei de dezembro que majora o IR já vale em 1º de janeiro.</p><p class='fb-fonte'>Resumo 02 · <i>Exceções à Noventena</i></p>",
14:"<p>No quadro do resumo, <b>II, IE e IOF</b> aparecem nas <b>duas</b> colunas de exceção. O <b>IPI</b> aparece só na coluna da anual — está no grupo dos extrafiscais, mas obedece à noventena.</p><p class='fb-fonte'>Resumo 02 · <i>Exceções à Anterioridade</i></p>",
15:"<p>Item 05 das exceções à noventena: <b>base de cálculo do IPTU e do IPVA</b>, com o asterisco do resumo — <b>“constituem exceções apenas a BC; as alíquotas não”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Exceções à Noventena</i></p>",
16:"<p>A <b>COFINS</b> está na lista da <b>anterioridade anual</b> (item 04), não na da noventena. E a observação 2 do resumo é expressa: <b>o IPI e a COFINS não são exceções ao princípio da noventena</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Exceções — Observação 2</i></p>",
17:"<p>Observação 1 do resumo, literal: <b>empréstimos compulsórios para realizar investimento público de caráter urgente NÃO constituem exceção aos princípios da anterioridade anual e nonagesimal</b>.</p><p>Só os de <b>guerra ou calamidade</b> são exceção — nas duas listas.</p><p class='fb-fonte'>Resumo 02 · <i>Exceções — Observação 1</i></p>",
18:"<p>Item 05 das exceções à anual — <b>ICMS-Combustível e CIDE-Combustível</b> — com o asterisco do resumo: <b>“constituem exceções apenas em caso de redução e restabelecimento da alíquota”</b>.</p><p>Restabelecer é voltar ao patamar anterior; majorar acima dele já não é exceção.</p><p class='fb-fonte'>Resumo 02 · <i>Exceções à Anterioridade Anual</i></p>",
19:"<p>É o segundo <b>EXEMPLO</b> do resumo, com as três conclusões dele: <b>não houve violação à legalidade</b>; <b>o IPI não se submete à anterioridade anual</b>; e <b>o IPI se submete à anterioridade nonagesimal, logo houve violação</b>.</p><p>Trinta dias não bastam — são 90.</p><p class='fb-fonte'>Resumo 02 · <i>Exceções — exemplo</i></p>",
20:"<p>Do resumo: é vedado a todos os entes <b>cobrar tributos em relação a fatos geradores ocorridos antes do início da vigência da lei</b>. Ele liga o princípio diretamente à <b>segurança jurídica</b>, “pois o objetivo é proteger as relações constituídas de novos efeitos tributários”.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Irretroatividade</i></p>",
21:"<p>A redação do resumo já traz a ressalva: é vedado estabelecer limitações ao tráfego por meio de tributos interestaduais ou intermunicipais, <b>“ressalvada a cobrança de pedágio pela utilização de vias conservadas pelo Poder Público”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Liberdade de Tráfego</i></p>",
22:"<p>Frase final do tópico no resumo: <b>“contudo, é permitida a concessão de incentivos fiscais para promover o desenvolvimento socioeconômico de determinadas regiões do país”</b>.</p><p>O princípio veda tributo não uniforme; não veda o incentivo regional.</p><p class='fb-fonte'>Resumo 02 · <i>Uniformidade Geográfica</i></p>",
23:"<p>Do resumo: veda a União de <b>tributar a renda das obrigações da dívida pública dos Estados, do DF e dos Municípios, bem como a remuneração e os proventos dos respectivos agentes públicos, em níveis superiores aos que fixar para suas obrigações e para seus agentes</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Uniformidade da Tributação da Renda</i></p>",
24:"<p>Do resumo: proíbe a União de <b>conceder isenção sobre tributo instituído por outro ente</b>. E ele completa: “apesar de ter sido vedado apenas à União, <b>a lógica jurídica deve prevalecer</b>, isto é, também é vedado aos Estados instituir isenções de tributos municipais”.</p><p class='fb-fonte'>Resumo 02 · <i>Vedação às Isenções Heterônomas</i></p>",
25:"<p>É o <b>EXEMPLO</b> do resumo, idêntico: Governador do RJ que, por medida provisória estadual, concede isenção de <b>IPTU — imposto de competência do Município</b>. “Diante desse cenário, tal isenção é <b>heterônoma, sendo vedada pela Constituição</b>.”</p><p class='fb-fonte'>Resumo 02 · <i>Isenções Heterônomas — exemplo</i></p>",
26:"<p>É exatamente o exemplo que o resumo dá para o princípio: <b>“não se pode estabelecer alíquotas diferenciadas de IPVA entre veículos importados e nacionais”</b>.</p><p>O princípio proíbe diferenças tributárias <b>em razão da procedência ou destino</b> dos bens e serviços.</p><p class='fb-fonte'>Resumo 02 · <i>Não Discriminação pela Procedência ou Destino</i></p>",
27:"<p>Do resumo: estabelece que <b>os consumidores sejam esclarecidos quanto à carga tributária resultante da incidência de impostos que incidam sobre mercadorias e serviços</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Transparência Tributária</i></p>",
28:"<p>É o inverso. O resumo: as alíquotas devem ter <b>incidência progressiva na razão INVERSA da essencialidade</b> — “deve-se tributar <b>MAIS</b> quanto <b>MENOR</b> for a essencialidade”.</p><p>O exemplo dele: <b>tributar mais o cigarro e menos a energia elétrica</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Princípio da Seletividade</i></p>",
29:"<p>Quadro comparativo do resumo, duas linhas: <b>IPI — DEVE ser seletivo (obrigatório)</b> · <b>ICMS — PODE ser seletivo (facultativo)</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Seletividade — Quadro comparativo</i></p>",
30:"<p>Esquema do resumo, em duas caixas: <b>IMUNIDADE = a CONSTITUIÇÃO proíbe tributar</b> · <b>ISENÇÃO = a LEI proíbe tributar</b>.</p><p>É a distinção que resolve praticamente toda questão sobre o par.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Tributária</i></p>",
31:"<p>Trocou os dois. Pelo esquema do resumo, quem vem da <b>Constituição</b> é a <b>imunidade</b>; a <b>isenção</b> vem da <b>lei</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Tributária</i></p>",
32:"<p>Observação do resumo, direta: <b>“a imunidade NÃO exime o sujeito passivo das obrigações acessórias instituídas pela legislação”</b>.</p><p>Imune de imposto continua obrigado a declarar, escriturar e emitir documento.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Tributária</i></p>",
33:"<p>Conceito do resumo: é vedado aos entes <b>instituir impostos sobre patrimônio, renda ou serviços uns dos outros</b> (CF, art. 150, VI, “a”).</p><p>Ele já avisa entre parênteses o que a banca fará: <b>“(a banca vai trocar por tributos)”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Recíproca</i></p>",
34:"<p>É exatamente a troca que o resumo antecipa: onde a Constituição diz <b>impostos</b>, a banca escreve <b>tributos</b>.</p><p>A observação 2 confirma: <b>“o princípio da imunidade tributária recíproca não pode ser invocado na hipótese de taxas ou contribuições. Só pode ser invocado na hipótese de impostos”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Recíproca</i></p>",
35:"<p>Do resumo: a imunidade recíproca é <b>extensiva às autarquias e às fundações instituídas e mantidas pelo Poder Público</b>, no que se refere ao patrimônio, à renda e aos serviços <b>vinculados a suas finalidades essenciais ou às delas decorrentes</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Recíproca</i></p>",
36:"<p>Observação 1 do resumo: <b>“a imunidade recíproca NÃO exonera o promitente comprador da obrigação de pagar imposto relativamente ao bem imóvel”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Recíproca — Observações</i></p>",
37:"<p>Observação 2, literal: <b>“o princípio da imunidade tributária recíproca não pode ser invocado na hipótese de taxas ou contribuições. Só pode ser invocado na hipótese de impostos”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Recíproca — Observações</i></p>",
38:"<p>Observação 3: <b>“os serviços notariais e de registro, por serem exercidos em caráter PRIVADO, por delegação do Poder Público, não se sujeitam à imunidade tributária recíproca”</b>.</p><p>Cartório paga ISS.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Recíproca — Observações</i></p>",
39:"<p>Esquema do resumo: as imunidades recíprocas <b>não se aplicam</b> ao patrimônio, à renda e aos serviços <b>relacionados com exploração de atividades econômicas regidas pelas normas de direito privado</b>.</p><p>A caixa ATENÇÃO! acrescenta a outra hipótese: <b>quando há contraprestação de tarifa pelo usuário</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Recíproca</i></p>",
40:"<p>Jurisprudência que o resumo transcreve — <b>STF, ARE 663.552</b>: como o Município <b>não é contribuinte de direito</b> do ICMS relativo a serviços de energia elétrica, <b>não tem o benefício da imunidade recíproca</b>, pois ela <b>não alcança o contribuinte de fato</b>.</p><p>O comentário dele: quem recolhe são as prestadoras, e são elas as contribuintes de direito.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Recíproca — Jurisprudência</i></p>",
41:"<p>Do resumo: é vedado instituir <b>impostos</b> sobre <b>templos de qualquer culto</b> (CF, art. 150, VI, “b”) — com o mesmo aviso entre parênteses: <b>a banca vai trocar “impostos” por “tributos”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Religiosa</i></p>",
42:"<p>É o exemplo do resumo: <b>“a renda auferida pelas igrejas com dízimo é imune de imposto de renda”</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Religiosa</i></p>",
43:"<p>Observação 1 do resumo: a imunidade religiosa <b>não alcança a taxa, a COFINS nem a contribuição ao PIS</b>, <b>pois essa imunidade apenas recai sobre os impostos</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Religiosa — Observações</i></p>",
44:"<p>Observação 2: a imunidade religiosa <b>abrange o local de culto e também imóveis de propriedade da entidade religiosa locados a terceiros, desde que o aluguel reverta em benefício da atividade religiosa</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Religiosa — Observações</i></p>",
45:"<p>Do resumo, os três grupos da alínea “c”: <b>partidos políticos, inclusive suas fundações</b> · <b>entidades sindicais dos trabalhadores</b> · <b>instituições de educação e de assistência social, sem fins lucrativos</b>.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade dos Partidos, Sindicatos e Instituições</i></p>",
46:"<p>O resumo escreve <b>“entidades sindicais dos TRABALHADORES”</b>. Sindicato <b>patronal</b> não está na lista.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade dos Partidos, Sindicatos e Instituições</i></p>",
47:"<p>Caixa <b>ATENÇÃO!</b> do resumo: essa imunidade <b>compreende somente o patrimônio, a renda e os serviços RELACIONADOS COM AS FINALIDADES ESSENCIAIS</b>.</p><p>A palavra “somente” é dele — e é o que derruba o “todo o seu patrimônio”.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade da alínea “c” — Atenção!</i></p>",
48:"<p>Do resumo: é vedado instituir impostos sobre <b>livros, jornais, periódicos e o papel destinado a sua impressão</b> (CF, art. 150, VI, “d”).</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Cultural</i></p>",
49:"<p>O texto que o resumo transcreve usa <b>“e/ou”</b>: obras musicais ou literomusicais <b>de autores brasileiros E/OU obras em geral interpretadas por artistas brasileiros</b>.</p><p>Basta um dos dois. O esquema dele separa as duas hipóteses em caixas distintas.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade da Produção Musical Brasileira</i></p>",
50:"<p>Do resumo: a imunidade alcança <b>os suportes materiais ou arquivos digitais que os contenham</b>, <b>salvo na etapa de replicação industrial de mídias ópticas de leitura a laser</b> (CF, art. 150, VI, “e”).</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade da Produção Musical Brasileira</i></p>",
51:"<p><b>Exemplo 01</b> do resumo, idêntico: CDs ou DVDs produzidos no Brasil com <b>óperas de Mozart (nacionalidade austríaca) interpretadas por músicos brasileiros</b> — Estados e DF <b>não podem</b> cobrar o ICMS.</p><p>O autor é estrangeiro, mas a <b>interpretação</b> é brasileira, e o “e/ou” resolve.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Musical — exemplo 01</i></p>",
52:"<p><b>Exemplo 02</b> do resumo: o DVD produzido por três artistas brasileiras <b>está sujeito ao IPI na fase de multiplicação industrial dos suportes materiais</b>, <b>mas não</b> ao ICMS na comercialização.</p><p>É a ressalva da <b>etapa de replicação industrial</b> em funcionamento.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Musical — exemplo 02</i></p>",
53:"<p>Não têm a mesma natureza. Pelo esquema do resumo, a <b>imunidade</b> está na <b>Constituição</b> — ela <b>limita a competência</b>, de modo que o tributo nunca chega a poder existir. A <b>isenção</b> está na <b>lei</b> do próprio ente competente.</p><p>Não é só o veículo normativo que muda: muda o momento em que a tributação é barrada.</p><p class='fb-fonte'>Resumo 02 · <i>Imunidade Tributária</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"02", nome:"Limitações constitucionais ao poder de tributar", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
