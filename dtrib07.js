/* Direito Tributário — Módulo 07: Responsabilidade tributária (modo direto) */
window.MOD = window.MOD || {};
window.MOD.dtrib07 = (function(){
"use strict";

var CARDS = [
  ["Para que serve a responsabilidade tributária?","Para o Fisco <b>otimizar fiscalização e arrecadação</b>: é mais eficiente controlar as empresas que retêm o IR de milhares de empregados do que fiscalizar cada pessoa física."],
  ["Responsabilidade originária × derivada","<b>Contribuinte → ORIGINÁRIA</b>, porque decorre do <b>próprio fato gerador</b>.<br><b>Responsável → DERIVADA</b>, porque decorre da <b>LEI</b>."],
  ["Como a DOUTRINA classifica a responsabilidade?","Por <b>SUBSTITUIÇÃO</b> (regressiva e progressiva) e por <b>TRANSFERÊNCIA</b> (por sucessão, por solidariedade e de terceiros)."],
  ["Como o CTN classifica a responsabilidade?","Em três modalidades: <b>dos SUCESSORES</b> (arts. 129 a 133) · <b>de TERCEIROS</b> (arts. 134 e 135) · <b>por INFRAÇÕES</b> (arts. 136 a 138). O CTN <b>não adota</b> a sistematização da doutrina."],
  ["O que é substituição tributária REGRESSIVA (para trás)?","Substituem-se as pessoas das <b>etapas ANTERIORES</b> da cadeia, gerando o <b>DIFERIMENTO</b> (postergação) do pagamento."],
  ["Exemplo da ST regressiva","Produtores rurais vendem leite à indústria de laticínios; a <b>lei estadual atribui à INDÚSTRIA</b> o ICMS da etapa produtor → indústria. Nessa operação a indústria é <b>responsável (substituto)</b>; na venda ao supermercado, é <b>contribuinte</b>."],
  ["O que é substituição tributária PROGRESSIVA (para frente)?","Substituem-se as pessoas das <b>etapas POSTERIORES</b> por quem está na <b>posição anterior</b>, gerando a <b>ANTECIPAÇÃO</b> do pagamento de tributo que só será devido depois."],
  ["Exemplo da ST progressiva","A <b>fábrica de veículos</b> recolhe de uma vez o ICMS da venda futura da concessionária ao consumidor, calculado sobre o <b>valor presumido</b> dessa venda."],
  ["Qual o fundamento constitucional da ST progressiva?","<b>Art. 150, § 7º, da CF</b>: a lei pode atribuir a sujeito passivo a condição de responsável por imposto ou contribuição <b>cujo fato gerador deva ocorrer POSTERIORMENTE</b>, <b>assegurada a imediata e preferencial RESTITUIÇÃO</b> caso não se realize o fato gerador presumido."],
  ["Como não confundir as duas substituições?","<b>Para TRÁS → o fato gerador já ocorreu → paga DEPOIS (diferimento).</b><br><b>Para FRENTE → o fato gerador ainda vai ocorrer → paga ANTES (antecipação).</b>"],
  ["O que exige o art. 128 do CTN?","Que a lei atribua <b>de modo expresso</b> a responsabilidade a <b>terceira pessoa VINCULADA ao fato gerador</b> — excluindo a responsabilidade do contribuinte ou atribuindo-a a ele em <b>caráter supletivo</b>."],
  ["De quantos modos o responsável entra na relação?","<b>Três:</b> <b>1)</b> o <b>contribuinte é excluído</b>; <b>2)</b> o <b>contribuinte é subsidiário</b> — cobra-se dele se o responsável não pagar; <b>3)</b> o <b>responsável é subsidiário</b> — é o caso do art. 134."],

  ["O que diz o art. 129?","O sucessor assume <b>todas as obrigações surgidas ATÉ a data do ato ou fato que demarcou a sucessão</b>, estejam os créditos <b>definitivamente constituídos, em curso de constituição ou constituídos depois</b>, desde que relativos a obrigações anteriores àquela data."],
  ["E quanto às obrigações surgidas APÓS a sucessão?","O sucessor deixa de ser responsável e passa a ser <b>CONTRIBUINTE</b>."],
  ["Quem responde na transmissão de bens IMÓVEIS? (art. 130)","O <b>ADQUIRENTE</b> — os créditos <b>sub-rogam-se</b> na sua pessoa."],
  ["Quais créditos se sub-rogam no adquirente do imóvel?","<b>i)</b> <b>IMPOSTOS</b> cujo fato gerador seja a <b>propriedade, o domínio útil ou a posse</b>; <b>ii)</b> <b>TAXAS</b> pela prestação de serviços; <b>iii)</b> <b>CONTRIBUIÇÕES DE MELHORIA</b>."],
  ["Qual a ressalva do art. 130?","<b>Salvo quando conste do título (escritura) a prova de sua QUITAÇÃO.</b>"],
  ["O que é sub-rogação?","O fenômeno jurídico de <b>substituição do sujeito</b> em determinada relação jurídica."],
  ["Imóvel comercial: o adquirente responde pelo ISSQN?","<b>NÃO.</b> Responde por <b>IPTU, taxas e contribuição de melhoria</b> — tributos de natureza <b>REAL</b>. O <b>ISSQN é imposto PESSOAL</b> e não acompanha o imóvel."],
  ["O que ocorre na ARREMATAÇÃO em hasta pública? (art. 130, p.ú.)","A sub-rogação ocorre <b>sobre o respectivo PREÇO</b> — os débitos tributários <b>NÃO são transferidos</b> ao arrematante."],
  ["Quem responde na transmissão de bens MÓVEIS? (art. 131, I)","O <b>adquirente ou remitente</b>, <b>pessoalmente</b>, pelos tributos relativos aos bens adquiridos ou remidos."],
  ["O que é remitente?","Quem realiza a <b>remição</b>: <b>quita a dívida e resgata os bens</b> penhorados ou objeto de leilão judicial."],
  ["Por que o art. 131, I, trata de bens móveis?","Porque os <b>imóveis já foram tratados no art. 130</b> — o legislador não disse “móveis”, mas é a interpretação da maioria da doutrina."],

  ["Quem responde na sucessão CAUSA MORTIS? (art. 131, II e III)","<b>II)</b> o <b>sucessor a qualquer título e o cônjuge meeiro</b>, pelos tributos devidos pelo de cujus <b>até a partilha ou adjudicação</b>, <b>limitada</b> a responsabilidade ao <b>quinhão, legado ou meação</b>; <b>III)</b> o <b>espólio</b>, pelos tributos devidos pelo de cujus <b>até a abertura da sucessão</b>."],
  ["Qual o limite da responsabilidade dos sucessores?","O <b>montante do quinhão, do legado ou da meação</b> — não respondem além do que receberam."],
  ["Defina de cujus, espólio e abertura da sucessão","<b>De cujus:</b> a pessoa falecida. <b>Espólio:</b> conjunto de bens, direitos, dívidas e responsabilidades do falecido. <b>Abertura da sucessão:</b> a <b>morte</b> — o momento que gera os efeitos sucessórios."],
  ["Defina quinhão, legado e meação","<b>Quinhão:</b> parcela do patrimônio deixado. <b>Legado:</b> patrimônio deixado por <b>testamento</b>. <b>Meação:</b> a <b>metade</b> do patrimônio do casal que pertence a cada cônjuge."],
  ["Qual a linha do tempo da sucessão causa mortis?","<b>Pessoa viva</b> → <b>ABERTURA DA SUCESSÃO (morte)</b> → <b>espólio</b> → <b>PARTILHA</b> → <b>sucessores</b>."],
  ["Quem é CONTRIBUINTE em cada trecho da linha do tempo?","<b>Antes da morte:</b> o <b>de cujus</b>. <b>Entre a morte e a partilha:</b> o <b>ESPÓLIO</b>. <b>Depois da partilha:</b> os <b>SUCESSORES</b>."],
  ["Quem é RESPONSÁVEL em cada trecho?","O <b>espólio</b> responde pelos fatos geradores <b>anteriores à abertura</b>; os <b>sucessores</b> respondem pelos tributos devidos pelo de cujus <b>até a partilha</b>."],
  ["Morre Eriberto; há IPVA com FG posterior ao óbito e IR de período anterior. Quem é contribuinte de cada um?","<b>IPVA</b> (FG após o óbito) → contribuinte é o <b>ESPÓLIO</b>. <b>IR</b> (período anterior à morte) → contribuinte é o <b>DE CUJUS</b>."],
  ["Qual o papel do inventariante?","Pelo <b>art. 134, IV</b>, pode ser responsabilizado pelos tributos devidos pelo <b>espólio</b>. Já caiu em prova."],

  ["Quem responde na FUSÃO, TRANSFORMAÇÃO ou INCORPORAÇÃO? (art. 132)","A <b>pessoa jurídica de direito privado que RESULTAR</b> da operação responde pelos tributos devidos <b>até a data do ato</b> pelas sociedades fusionadas, transformadas ou incorporadas."],
  ["O que diz a Súmula 554 do STJ?","Na sucessão empresarial, a responsabilidade da sucessora abrange <b>não só os tributos</b>, mas também as <b>multas MORATÓRIAS ou PUNITIVAS</b> referentes a fatos geradores ocorridos <b>até a data da sucessão</b>."],
  ["“A” deve CSLL, multa de ofício e juros; é incorporada por “B”, formando “AB”. Do que “AB” responde?","<b>De tudo</b>: CSLL, <b>multa</b> e <b>juros moratórios</b> — integralmente, por força do art. 132 e da Súmula 554 do STJ."],
  ["Qual a hipótese do art. 133?","Quem <b>adquire de outra, por qualquer título, FUNDO DE COMÉRCIO ou ESTABELECIMENTO</b> comercial, industrial ou profissional e <b>CONTINUA a respectiva exploração</b> — sob a mesma ou outra razão social — responde pelos tributos relativos ao fundo, devidos <b>até a data do ato</b>."],
  ["Quando o adquirente responde INTEGRALMENTE? (art. 133, I)","Quando o <b>ALIENANTE CESSAR</b> a exploração do comércio, indústria ou atividade."],
  ["Quando o adquirente responde SUBSIDIARIAMENTE? (art. 133, II)","Quando o alienante <b>prosseguir</b> na exploração <b>ou iniciar, DENTRO DE SEIS MESES</b> da alienação, <b>nova atividade</b> no mesmo ou em outro ramo."],
  ["Panificadora vende o fundo, para de atuar e volta 7 MESES depois. Como responde a adquirente?","<b>INTEGRALMENTE</b> — o retorno se deu <b>fora</b> dos seis meses, então vale o inciso I."],
  ["E se a panificadora voltar em 6 MESES?","<b>SUBSIDIARIAMENTE</b> — o retorno ocorreu <b>dentro</b> do prazo de seis meses, e incide o inciso II."],
  ["Quando NÃO se aplica o art. 133? (§ 1º)","Na <b>alienação judicial</b>: <b>I)</b> em processo de <b>FALÊNCIA</b>; <b>II)</b> de <b>filial ou unidade produtiva isolada</b> em processo de <b>recuperação judicial</b>."],
  ["Empresa em falência é alienada judicialmente e a compradora mantém nome e lojas. Ela responde?","<b>NÃO</b> — houve <b>alienação judicial em processo de falência</b> (art. 133, § 1º, I)."],
  ["Quando a exceção do § 1º NÃO vale? (§ 2º)","Quando o adquirente for: <b>I)</b> <b>sócio</b> da sociedade falida ou em recuperação, ou sociedade <b>controlada</b> pelo devedor; <b>II)</b> <b>parente em linha reta ou colateral até o 4º grau</b>, consanguíneo ou afim, do devedor ou de seus sócios; <b>III)</b> identificado como <b>agente do falido</b> com o objetivo de <b>fraudar a sucessão tributária</b>."],
  ["O que diz o art. 133, § 3º?","Na falência, o produto da alienação judicial fica <b>em conta de depósito à disposição do juízo por 1 (UM) ANO</b>, e só pode ser usado para pagar <b>créditos extraconcursais</b> ou <b>créditos que preferem ao tributário</b>."],

  ["Qual a hipótese do art. 134?","<b>Nos casos de IMPOSSIBILIDADE de exigência do cumprimento da obrigação principal pelo CONTRIBUINTE</b>, respondem <b>solidariamente</b> — nos atos em que intervierem ou pelas omissões de que forem responsáveis — as sete pessoas do artigo."],
  ["Quem são os sete do art. 134?","<b>I)</b> <b>pais</b>, pelos filhos menores; <b>II)</b> <b>tutores e curadores</b>, pelos tutelados e curatelados; <b>III)</b> <b>administradores de bens de terceiros</b>; <b>IV)</b> o <b>inventariante</b>, pelo espólio; <b>V)</b> o <b>síndico e o comissário</b>, pela massa falida ou concordatário; <b>VI)</b> <b>tabeliães, escrivães e serventuários</b>, pelos atos praticados por eles ou perante eles; <b>VII)</b> os <b>sócios</b>, na liquidação de sociedade de pessoas."],
  ["O art. 134 é solidariedade ou subsidiariedade?","O CTN diz “<b>solidariamente</b>”, mas doutrina e <b>STJ</b> entendem que é <b>SUBSIDIÁRIA</b> — há <b>benefício de ordem</b>, pois depende da impossibilidade de exigir do contribuinte. Leia o enunciado: literalidade do CTN ou entendimento doutrinário?"],
  ["Qual o limite do art. 134 quanto a penalidades?","Só se aplica, em matéria de penalidades, às de <b>CARÁTER MORATÓRIO</b> (parágrafo único)."],
  ["Registrador esquece de exigir a guia do ITBI e os contribuintes, tendo bens, não pagam. Ele responde?","Responde por sua omissão (art. 134, VI), <b>mas apenas nos casos de impossibilidade de exigência do contribuinte</b>. Tendo os contribuintes bens suficientes, não se chega a ele."],
  ["Qual a hipótese do art. 135?","<b>Responsabilidade PESSOAL</b> pelos créditos resultantes de atos praticados com <b>EXCESSO DE PODERES</b> ou <b>INFRAÇÃO DE LEI, CONTRATO SOCIAL OU ESTATUTOS</b>."],
  ["Quem responde pelo art. 135?","<b>I)</b> as pessoas do art. 134; <b>II)</b> <b>mandatários, prepostos e empregados</b>; <b>III)</b> <b>diretores, gerentes ou representantes</b> de pessoas jurídicas de direito privado."],
  ["Art. 134 × art. 135","<b>134 — atuação REGULAR</b>: responsabilidade subsidiária, só penalidades moratórias.<br><b>135 — atuação IRREGULAR</b>: responsabilidade <b>PESSOAL</b>, por excesso de poderes ou infração de lei, contrato ou estatuto."],
  ["O que diz a Súmula 430 do STJ?","O <b>inadimplemento da obrigação tributária pela sociedade NÃO gera, por si só, a responsabilidade solidária do sócio-gerente</b>."],
  ["Sociedade declara os tributos e não paga, sem fraude; o sócio-gerente é incluído na dívida ativa. Certo?","<b>NÃO.</b> É preciso imputar-lhe <b>excesso de poderes ou infração de lei, contrato social ou estatutos</b> — o mero inadimplemento não basta (Súmula 430 do STJ)."],

  ["O que diz o art. 136 do CTN?","Salvo disposição de lei em contrário, a responsabilidade por infrações da legislação tributária <b>INDEPENDE da intenção do agente</b> ou do responsável e <b>da efetividade, natureza e extensão dos efeitos do ato</b>. É responsabilidade <b>OBJETIVA</b>."],
  ["Qual o mnemônico do art. 136?","<b>IENE</b> (a moeda do Japão): <b>I</b>ntenção · <b>E</b>fetividade · <b>N</b>atureza · <b>E</b>xtensão dos efeitos. De tudo isso a responsabilidade independe."],
  ["Quando a responsabilidade por infração é PESSOAL do agente? (art. 137)","<b>I)</b> infrações conceituadas por lei como <b>crimes ou contravenções</b>, <b>salvo</b> quando praticadas no <b>exercício regular</b> de administração, mandato, função, cargo ou emprego, ou no <b>cumprimento de ordem expressa</b> emitida por quem de direito; <b>II)</b> infrações em cuja definição o <b>dolo específico</b> do agente seja <b>elementar</b>; <b>III)</b> infrações que decorram <b>direta e exclusivamente de DOLO ESPECÍFICO</b> contra os representados."],
  ["Quais as três situações do art. 137, III?","Dolo específico <b>das pessoas do art. 134 contra aquelas por quem respondem</b>; <b>dos mandatários, prepostos ou empregados contra seus mandantes, preponentes ou empregadores</b>; <b>dos diretores, gerentes ou representantes contra as pessoas jurídicas</b> de direito privado."],
  ["Gerente furta notas fiscais da empresa e é condenado por sonegação e furto. Quem paga a multa?","A responsabilidade é <b>PESSOAL do antigo gerente</b>, por infração conceituada em lei como <b>crime</b> (art. 137, I)."],
  ["O que é a DENÚNCIA ESPONTÂNEA? (art. 138)","A <b>responsabilidade é EXCLUÍDA</b> pela denúncia espontânea da infração, acompanhada, se for o caso, do <b>pagamento do tributo devido e dos JUROS DE MORA</b>, ou do <b>depósito da importância arbitrada</b> pela autoridade quando o montante dependa de apuração."],
  ["Quando a denúncia deixa de ser espontânea?","<b>Após o INÍCIO de qualquer procedimento administrativo ou medida de fiscalização</b> relacionados com a infração — na prática, com o <b>Termo de Início de Fiscalização</b>."],
  ["A denúncia espontânea afasta os juros de mora?","<b>NÃO.</b> Ela exclui a <b>responsabilidade (a multa)</b>, mas o <b>tributo e os JUROS DE MORA continuam devidos</b>."],
  ["O que diz a Súmula 360 do STJ?","O benefício da denúncia espontânea <b>NÃO se aplica aos tributos sujeitos a lançamento por HOMOLOGAÇÃO regularmente DECLARADOS, mas pagos a destempo</b>."],
  ["Empresa declara ICMS, não paga, sabe que virá fiscalização e faz denúncia espontânea. Vale?","<b>NÃO</b> — por dois motivos: o tributo foi <b>regularmente declarado</b> (Súmula 360 do STJ) e a denúncia veio <b>depois de anunciada a fiscalização</b>."],
  ["Reforma tributária: muda algo neste módulo?","A <b>EC 132/2023 não alterou os arts. 128 a 138</b> do CTN — a teoria da responsabilidade segue intacta. O IBS e a CBS terão regras próprias de sujeição passiva na sua lei complementar."]
];

var QS = [
  ["A responsabilidade do contribuinte é originária, pois decorre do próprio fato gerador, ao passo que a do responsável é derivada, pois decorre da lei.","C","FCC","Distinção doutrinária clássica."],
  ["O CTN divide as hipóteses de responsabilidade em responsabilidade dos sucessores, de terceiros e por infrações.","C","CEBRASPE","O CTN não adota a divisão doutrinária entre substituição e transferência."],
  ["Na substituição tributária regressiva ocorre o diferimento do pagamento do tributo.","C","FGV","Substituem-se as etapas anteriores da cadeia."],
  ["Na substituição tributária progressiva ocorre a postergação do pagamento do tributo.","E","FCC","Ocorre a <b>antecipação</b> — o fato gerador ainda vai acontecer."],
  ["A atribuição, por lei estadual, à indústria de laticínios da responsabilidade pelo ICMS da venda feita pelos produtores rurais configura substituição tributária para trás.","C","FGV","Nas vendas seguintes, a indústria volta a ser contribuinte."],
  ["Na venda de veículos novos, o recolhimento antecipado pela fábrica do ICMS devido na venda da concessionária ao consumidor final é substituição tributária progressiva.","C","CEBRASPE","Calculado sobre o valor presumido da operação futura."],
  ["A Constituição assegura a imediata e preferencial restituição da quantia paga na substituição progressiva, caso não se realize o fato gerador presumido.","C","CF art. 150 § 7º","É o fundamento constitucional da ST para frente."],
  ["A lei pode atribuir responsabilidade pelo crédito tributário a terceira pessoa, ainda que totalmente desvinculada do fato gerador da obrigação.","E","CTN art. 128","Exige-se que a terceira pessoa seja <b>vinculada ao fato gerador</b>."],
  ["A lei pode atribuir a responsabilidade ao terceiro excluindo a do contribuinte ou atribuindo-a a este em caráter supletivo.","C","CTN art. 128","São os modos de inserção do responsável na relação."],
  ["O sucessor responde pelas obrigações tributárias surgidas até a data do ato ou fato que demarcou a sucessão, ainda que os créditos venham a ser constituídos posteriormente.","C","CTN art. 129","Quanto aos fatos posteriores, o sucessor é contribuinte."],
  ["Sub-rogam-se na pessoa do adquirente do bem imóvel os créditos relativos a impostos sobre a propriedade, o domínio útil ou a posse, taxas de serviço e contribuições de melhoria.","C","CTN art. 130","Salvo quando conste do título a prova da quitação."],
  ["A sub-rogação dos créditos na pessoa do adquirente do imóvel ocorre ainda que conste do título a prova de sua quitação.","E","CEBRASPE","A prova de quitação no título é justamente a ressalva do art. 130."],
  ["O adquirente de imóvel comercial responde pelo IPTU, pelas taxas e pela contribuição de melhoria, mas não pelo ISSQN devido pelo alienante.","C","FGV","Os primeiros são tributos reais; o ISSQN é imposto pessoal."],
  ["No caso de arrematação em hasta pública, os débitos tributários do imóvel transferem-se ao arrematante.","E","CTN art. 130 p.ú.","A sub-rogação ocorre <b>sobre o preço</b> — o arrematante recebe o imóvel livre."],
  ["São pessoalmente responsáveis o adquirente ou remitente pelos tributos relativos aos bens adquiridos ou remidos.","C","CTN art. 131 I","A doutrina entende que o inciso trata de bens móveis."],
  ["Remitente é aquele que adquire o bem em leilão judicial sem quitar a dívida.","E","FCC","Remitente é quem <b>quita a dívida e resgata</b> o bem penhorado ou leiloado."],
  ["O espólio é pessoalmente responsável pelos tributos devidos pelo de cujus até a data da abertura da sucessão.","C","CTN art. 131 III","E é contribuinte pelos fatos geradores posteriores à abertura, até a partilha."],
  ["O sucessor a qualquer título e o cônjuge meeiro respondem pelos tributos devidos pelo de cujus até a data da partilha, sem qualquer limitação de valor.","E","CEBRASPE","A responsabilidade é <b>limitada ao quinhão, ao legado ou à meação</b>."],
  ["Morto o contribuinte, o IPVA cujo fato gerador ocorra após o óbito e antes da partilha tem como contribuinte o espólio.","C","FGV","E o IR do período anterior à morte tem como contribuinte o de cujus."],
  ["Após a partilha, os sucessores tornam-se contribuintes dos fatos geradores posteriores e permanecem pessoalmente responsáveis pelos tributos devidos pelo de cujus.","C","FCC","Respeitado o limite do quinhão recebido."],
  ["O inventariante pode ser responsabilizado pelos tributos devidos pelo espólio.","C","CTN art. 134 IV","Hipótese cobrada com frequência em prova."],
  ["A pessoa jurídica que resultar de fusão, transformação ou incorporação é responsável pelos tributos devidos até a data do ato pelas pessoas jurídicas fusionadas, transformadas ou incorporadas.","C","CTN art. 132","Regra central da sucessão empresarial."],
  ["Na sucessão empresarial, a responsabilidade da sucessora abrange apenas os tributos devidos pela sucedida, não alcançando as multas.","E","STJ Súmula 554","Abrange também as multas <b>moratórias e punitivas</b>."],
  ["Incorporada a empresa devedora de CSLL, multa de ofício e juros moratórios, a incorporadora responde integralmente por todos esses valores.","C","FGV","Art. 132 combinado com a Súmula 554 do STJ."],
  ["Responde pelos tributos relativos ao fundo de comércio adquirido quem o adquirir de outra e continuar a respectiva exploração, ainda que sob outra razão social.","C","CTN art. 133","O que importa é a continuidade da exploração."],
  ["O adquirente do fundo de comércio responde integralmente se o alienante cessar a exploração do comércio, indústria ou atividade.","C","CTN art. 133 I","Se o alienante prossegue ou retoma em seis meses, a responsabilidade é subsidiária."],
  ["O adquirente responde subsidiariamente se o alienante iniciar nova atividade dentro de seis meses contados da alienação.","C","CTN art. 133 II","Vale para o mesmo ou para outro ramo."],
  ["Alienante que cessa a atividade e retorna sete meses depois faz com que o adquirente responda subsidiariamente pelos tributos anteriores.","E","FGV","Fora dos seis meses aplica-se o inciso I: responsabilidade <b>integral</b>."],
  ["O art. 133 não se aplica na hipótese de alienação judicial em processo de falência.","C","CTN art. 133 § 1º I","Nem na de filial ou unidade produtiva isolada em recuperação judicial."],
  ["A empresa que adquire, em alienação judicial no processo de falência, estabelecimento de outra e mantém o mesmo nome e as mesmas lojas responde pelos tributos anteriores.","E","CEBRASPE","Não responde — é exatamente a hipótese do § 1º, I."],
  ["A exceção da alienação judicial não se aplica quando o adquirente for sócio da sociedade falida ou parente até o quarto grau do devedor ou de seus sócios.","C","CTN art. 133 § 2º","Também não se aplica ao agente do falido que busca fraudar a sucessão."],
  ["Na falência, o produto da alienação judicial permanece em conta de depósito à disposição do juízo pelo prazo de dois anos.","E","CTN art. 133 § 3º","O prazo é de <b>um ano</b>, e o valor só pode pagar créditos extraconcursais ou preferenciais ao tributário."],
  ["Nos casos de impossibilidade de exigência do cumprimento da obrigação principal pelo contribuinte, respondem os pais pelos tributos devidos por seus filhos menores.","C","CTN art. 134 I","Nos atos em que intervierem ou pelas omissões de que forem responsáveis."],
  ["Os tabeliães, escrivães e demais serventuários de ofício respondem pelos tributos devidos sobre os atos praticados por eles ou perante eles, em razão do seu ofício.","C","CTN art. 134 VI","Sempre condicionada à impossibilidade de exigir do contribuinte."],
  ["A responsabilidade do art. 134 do CTN independe da impossibilidade de exigência do cumprimento da obrigação pelo contribuinte.","E","FCC","A impossibilidade é o pressuposto expresso do caput."],
  ["Segundo a doutrina e o STJ, a responsabilidade do art. 134 do CTN é, a rigor, subsidiária, e não solidária.","C","STJ","Há benefício de ordem, incompatível com a solidariedade."],
  ["A responsabilidade prevista no art. 134 aplica-se a todas as penalidades tributárias.","E","CTN art. 134 p.ú.","Só às de <b>caráter moratório</b>."],
  ["Registrador que se omite em exigir a guia de ITBI responde pela dívida ainda que os contribuintes tenham bens suficientes para pagá-la.","E","FGV","Só responde nos casos de impossibilidade de exigência do contribuinte."],
  ["São pessoalmente responsáveis pelos créditos correspondentes a obrigações resultantes de atos praticados com excesso de poderes ou infração de lei, contrato social ou estatutos os diretores, gerentes ou representantes de pessoas jurídicas de direito privado.","C","CTN art. 135 III","A responsabilidade aqui é pessoal, não subsidiária."],
  ["O art. 135 do CTN alcança os mandatários, prepostos e empregados.","C","CTN art. 135 II","Além das pessoas do art. 134 e dos diretores e gerentes."],
  ["O inadimplemento da obrigação tributária pela sociedade gera, por si só, a responsabilidade solidária do sócio-gerente.","E","STJ Súmula 430","É preciso excesso de poderes ou infração de lei, contrato social ou estatutos."],
  ["Sociedade limitada que declara regularmente os tributos e deixa de pagá-los, sem fraude, autoriza a inclusão do sócio-gerente como responsável na inscrição em dívida ativa.","E","FGV","Aplicação direta da Súmula 430 do STJ."],
  ["Salvo disposição de lei em contrário, a responsabilidade por infrações da legislação tributária independe da intenção do agente e da efetividade, natureza e extensão dos efeitos do ato.","C","CTN art. 136","É a responsabilidade objetiva — mnemônico IENE."],
  ["A responsabilidade por infrações tributárias é, em regra, subjetiva, dependendo da comprovação de dolo ou culpa.","E","CEBRASPE","É <b>objetiva</b>, salvo disposição de lei em contrário."],
  ["A responsabilidade é pessoal do agente quanto às infrações conceituadas por lei como crimes ou contravenções, salvo quando praticadas no exercício regular de administração ou no cumprimento de ordem expressa emitida por quem de direito.","C","CTN art. 137 I","As duas ressalvas do inciso são cobradas com frequência."],
  ["A responsabilidade é pessoal do agente quanto às infrações em cuja definição o dolo específico seja elementar.","C","CTN art. 137 II","E também quanto às que decorram direta e exclusivamente de dolo específico contra os representados."],
  ["Empresa autuada por não exibir notas fiscais furtadas por seu antigo gerente, condenado criminalmente pelo furto e pela sonegação, responde pela multa tributária.","E","FGV","A responsabilidade é <b>pessoal do antigo gerente</b> (art. 137, I)."],
  ["A responsabilidade é excluída pela denúncia espontânea da infração, acompanhada, se for o caso, do pagamento do tributo devido e dos juros de mora.","C","CTN art. 138","Ou do depósito da importância arbitrada, quando o montante dependa de apuração."],
  ["A denúncia espontânea exclui a incidência dos juros de mora.","E","FCC","Exclui a <b>multa</b>; tributo e juros de mora continuam devidos."],
  ["Considera-se espontânea a denúncia apresentada logo após o início de procedimento de fiscalização relacionado com a infração, desde que antes do lançamento.","E","CTN art. 138 p.ú.","Iniciado o procedimento, a denúncia deixa de ser espontânea."],
  ["O benefício da denúncia espontânea não se aplica aos tributos sujeitos a lançamento por homologação regularmente declarados, mas pagos a destempo.","C","STJ Súmula 360","Caso clássico do ICMS declarado e não pago."],
  ["Empresa que declara regularmente o ICMS, não o paga e, ao saber de fiscalização iminente, faz denúncia espontânea, fica livre da multa moratória.","E","FGV","Falha por dois motivos: tributo declarado (Súmula 360) e denúncia após a ciência da fiscalização."],
  ["A responsabilidade tributária por sucessão alcança créditos definitivamente constituídos, em curso de constituição e os constituídos posteriormente, desde que relativos a obrigações surgidas até a data do ato.","C","CTN art. 129","O marco é a data do fato gerador, não a da constituição do crédito."],
  ["No art. 128 do CTN, o contribuinte pode figurar em caráter supletivo do cumprimento total ou parcial da obrigação.","C","CTN art. 128","É o modo em que o contribuinte fica subsidiário."]
];

var EX = {
S1:{t:"match", instr:"Ligue cada responsabilidade à sua origem",
  pairs:[["Contribuinte","Originária — decorre do próprio fato gerador"],
         ["Responsável","Derivada — decorre da lei"]],
  why:"O art. 128 exige que o responsável seja pessoa VINCULADA ao fato gerador."},

S2:{t:"sort", instr:"Como o CTN e como a doutrina classificam?",
  buckets:["Classificação do CTN","Classificação da doutrina"],
  items:[["Responsabilidade dos sucessores",0],["Responsabilidade de terceiros",0],
         ["Responsabilidade por infrações",0],
         ["Por substituição",1],["Por transferência",1]],
  why:"O CTN não sistematiza a matéria como a doutrina."},

S3:{t:"sort", instr:"Substituição para trás ou para frente?",
  buckets:["Regressiva (para trás)","Progressiva (para frente)"],
  items:[["Diferimento do pagamento",0],["Substitui etapas anteriores da cadeia",0],
         ["Indústria de laticínios recolhe o ICMS do produtor rural",0],
         ["Antecipação do pagamento",1],["Substitui etapas posteriores",1],
         ["Fábrica recolhe o ICMS da venda futura da concessionária",1]],
  why:"Para trás: o fato gerador já ocorreu, paga depois. Para frente: ainda vai ocorrer, paga antes."},

S4:{t:"gap", instr:"Complete o art. 150, § 7º, da CF",
  before:"A lei poderá atribuir a sujeito passivo a condição de responsável pelo pagamento de imposto cujo fato gerador deva ocorrer posteriormente, assegurada a imediata e preferencial ",
  after:" da quantia paga, caso não se realize o fato gerador presumido.",
  options:["restituição","compensação","remissão"], answer:0,
  why:"É a garantia constitucional da substituição progressiva."},

S5:{t:"multi", instr:"Marque os modos pelos quais o responsável entra na relação (art. 128 e 134)",
  options:["O contribuinte é excluído da relação jurídica",
           "O contribuinte fica em caráter supletivo (subsidiário)",
           "O responsável é subsidiário, como no art. 134",
           "O contribuinte é substituído pelo Fisco"],
  answers:[0,1,2],
  why:"Em todos eles, o responsável deve ser pessoa vinculada ao fato gerador."},

S6:{t:"multi", instr:"Marque os créditos que se sub-rogam no adquirente do IMÓVEL (art. 130)",
  options:["Impostos cujo fato gerador seja a propriedade, o domínio útil ou a posse",
           "Taxas pela prestação de serviços",
           "Contribuições de melhoria",
           "ISSQN devido pelo alienante"],
  answers:[0,1,2],
  why:"IPTU, taxas e CM são tributos reais; o ISSQN é pessoal e não acompanha o imóvel."},

S7:{t:"mc", instr:"Imóvel adquirido em arrematação em hasta pública. E os débitos tributários?",
  options:["Não se transferem — a sub-rogação ocorre sobre o preço",
           "Transferem-se integralmente ao arrematante",
           "Transferem-se pela metade",
           "Transferem-se salvo prova de quitação no título"],
  answer:0,
  why:"Parágrafo único do art. 130 — o arrematante recebe o imóvel livre."},

S8:{t:"gap", instr:"Complete a ressalva do art. 130",
  before:"Os créditos sub-rogam-se na pessoa dos respectivos adquirentes, salvo quando conste do título a prova de sua ",
  after:".",
  options:["quitação","origem","inscrição"], answer:0,
  why:"É a única forma de o adquirente escapar da sub-rogação."},

S9:{t:"order", instr:"Ordene a linha do tempo da sucessão causa mortis",
  items:["Pessoa viva — contribuinte é o de cujus",
         "Abertura da sucessão (morte)",
         "Espólio — contribuinte pelos fatos geradores posteriores à morte",
         "Partilha dos bens",
         "Sucessores — contribuintes pelos fatos geradores posteriores à partilha"],
  why:"Dois marcos: abertura da sucessão e partilha."},

S10:{t:"sort", instr:"Quem responde por cada período?",
  buckets:["Espólio","Sucessores e cônjuge meeiro"],
  items:[["Tributos devidos pelo de cujus até a abertura da sucessão",0],
         ["Tributos devidos pelo de cujus até a partilha ou adjudicação",1],
         ["Limitado ao quinhão, ao legado ou à meação",1]],
  why:"Art. 131, II e III."},

S11:{t:"mc", instr:"Morre Eriberto. Há IPVA com fato gerador posterior ao óbito. Quem é o CONTRIBUINTE?",
  options:["O espólio","O de cujus","Os herdeiros","O inventariante"],
  answer:0,
  why:"Já o IR de período anterior à morte tem como contribuinte o próprio de cujus."},

S12:{t:"match", instr:"Ligue cada termo à sua definição",
  pairs:[["Quinhão","Parcela do patrimônio deixado pelo de cujus"],
         ["Legado","Patrimônio deixado por testamento"],
         ["Meação","Metade do patrimônio do casal pertencente a cada cônjuge"]],
  why:"São os três limites da responsabilidade dos sucessores."},

S13:{t:"wordbank", instr:"Monte a regra do art. 132",
  target:["a","pessoa","jurídica","que","resultar","de","fusão","transformação","ou","incorporação","é","responsável","pelos","tributos","devidos","até","a","data","do","ato"],
  extra:["a partir da data do ato","somente pelas multas","salvo disposição contratual"],
  why:"E pela Súmula 554 do STJ a responsabilidade alcança também as multas."},

S14:{t:"mc", instr:"Segundo a Súmula 554 do STJ, a responsabilidade da sucessora empresarial abrange:",
  options:["Tributos e multas moratórias ou punitivas até a data da sucessão",
           "Apenas os tributos devidos pela sucedida",
           "Apenas as multas moratórias",
           "Apenas os créditos já inscritos em dívida ativa"],
  answer:0,
  why:"Por isso a incorporadora responde por CSLL, multa de ofício e juros."},

S15:{t:"sort", instr:"Aquisição de fundo de comércio: integral ou subsidiária?",
  buckets:["Responsabilidade INTEGRAL","Responsabilidade SUBSIDIÁRIA"],
  items:[["O alienante cessa a exploração da atividade",0],
         ["O alienante volta a atuar 7 meses depois",0],
         ["O alienante prossegue na exploração",1],
         ["O alienante inicia nova atividade em 6 meses",1]],
  why:"O divisor é o prazo de seis meses do art. 133, II."},

S16:{t:"mc", instr:"Panificadora aliena o fundo, para de atuar e retoma a atividade 7 meses depois. A adquirente responde:",
  options:["Integralmente","Subsidiariamente","Solidariamente","Não responde"],
  answer:0,
  why:"Fora dos seis meses, aplica-se o inciso I do art. 133."},

S17:{t:"multi", instr:"Marque as hipóteses em que o art. 133 NÃO se aplica (§ 1º)",
  options:["Alienação judicial em processo de falência",
           "Alienação judicial de filial ou unidade produtiva isolada em recuperação judicial",
           "Alienação extrajudicial entre empresas do mesmo grupo",
           "Alienação a parente até o quarto grau do devedor falido"],
  answers:[0,1],
  why:"A alienação a parente até o 4º grau é justamente exceção da exceção (§ 2º)."},

S18:{t:"multi", instr:"Marque os adquirentes que NÃO se beneficiam da exceção da alienação judicial (§ 2º)",
  options:["Sócio da sociedade falida ou em recuperação judicial",
           "Sociedade controlada pelo devedor falido",
           "Parente em linha reta ou colateral até o quarto grau do devedor ou de seus sócios",
           "Agente do falido que busca fraudar a sucessão tributária",
           "Concorrente sem qualquer vínculo com o falido"],
  answers:[0,1,2,3],
  why:"O terceiro estranho ao falido segue protegido pelo § 1º."},

S19:{t:"multi", instr:"Marque quem responde pelo art. 134",
  options:["Os pais, pelos tributos devidos por seus filhos menores",
           "O inventariante, pelos tributos devidos pelo espólio",
           "Os tabeliães e escrivães, pelos atos praticados por eles ou perante eles",
           "Os sócios, no caso de liquidação de sociedade de pessoas",
           "Os diretores, por atos praticados com excesso de poderes"],
  answers:[0,1,2,3],
  why:"Diretores com excesso de poderes respondem pelo art. 135, e pessoalmente."},

S20:{t:"sort", instr:"Art. 134 ou art. 135?",
  buckets:["Art. 134 — atuação REGULAR","Art. 135 — atuação IRREGULAR"],
  items:[["Depende da impossibilidade de exigir do contribuinte",0],
         ["Só alcança penalidades de caráter moratório",0],
         ["Responsabilidade PESSOAL do terceiro",1],
         ["Excesso de poderes ou infração de lei, contrato ou estatuto",1],
         ["Mandatários, prepostos e empregados",1]],
  why:"Regular é subsidiária e limitada; irregular é pessoal e integral."},

S21:{t:"mc", instr:"O art. 134 do CTN diz “respondem solidariamente”. Doutrina e STJ entendem que a responsabilidade é:",
  options:["Subsidiária — há benefício de ordem",
           "Solidária pura, sem benefício de ordem",
           "Pessoal e exclusiva do terceiro",
           "Objetiva e integral"],
  answer:0,
  why:"Leia o enunciado: a banca pode cobrar a literalidade do CTN ou o entendimento doutrinário."},

S22:{t:"mc", instr:"Sociedade declara os tributos, não paga, sem fraude. Pode o sócio-gerente ser incluído como responsável?",
  options:["Não — o mero inadimplemento não basta (Súmula 430 do STJ)",
           "Sim — o inadimplemento é infração de lei",
           "Sim, mas apenas subsidiariamente",
           "Sim, se a sociedade for limitada"],
  answer:0,
  why:"Exige-se excesso de poderes ou infração de lei, contrato social ou estatutos."},

S23:{t:"multi", instr:"A responsabilidade por infrações INDEPENDE de quê? (art. 136 — mnemônico IENE)",
  options:["Da Intenção do agente","Da Efetividade do ato",
           "Da Natureza do ato","Da Extensão dos efeitos do ato",
           "Da existência de lei em contrário"],
  answers:[0,1,2,3],
  why:"“Salvo disposição de lei em contrário” é justamente a ressalva do caput."},

S24:{t:"multi", instr:"Marque quando a responsabilidade por infração é PESSOAL do agente (art. 137)",
  options:["Infrações conceituadas por lei como crimes ou contravenções",
           "Infrações em cuja definição o dolo específico seja elementar",
           "Infrações que decorram direta e exclusivamente de dolo específico contra os representados",
           "Crimes praticados no cumprimento de ordem expressa de quem de direito"],
  answers:[0,1,2],
  why:"O cumprimento de ordem expressa e o exercício regular são as duas ressalvas do inciso I."},

S25:{t:"gap", instr:"Complete o art. 138 do CTN",
  before:"A responsabilidade é excluída pela denúncia espontânea da infração, acompanhada, se for o caso, do pagamento do tributo devido e ",
  after:", ou do depósito da importância arbitrada pela autoridade administrativa.",
  options:["dos juros de mora","da multa moratória","da correção monetária"], answer:0,
  why:"A denúncia afasta a multa, nunca os juros de mora."},

S26:{t:"mc", instr:"Empresa declara ICMS, não paga e, sabendo de fiscalização iminente, faz denúncia espontânea. Vale?",
  options:["Não — tributo declarado (Súmula 360) e denúncia após ciência da fiscalização",
           "Sim — a denúncia antecede o lançamento",
           "Sim, mas só quanto aos juros",
           "Sim, desde que pague em 30 dias"],
  answer:0,
  why:"Dois vícios de uma vez: o benefício não alcança tributo declarado e não pago, e a espontaneidade já se perdera."}
};

for(var i=0;i<QS.length;i++) EX["T"+i]={t:"ce", qi:i};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  V1:[
    sl("Substituição, transferência e o art. 128",
      '<div class="box"><span class="bl">Por que existe o responsável</span>'+
      '<p>É <b>eficiência de fiscalização</b>: controlar as empresas que retêm o IR de milhares de empregados rende mais que fiscalizar cada pessoa física.</p>'+
      '<p><b>Contribuinte → responsabilidade ORIGINÁRIA</b> (decorre do fato gerador).<br>'+
      '<b>Responsável → responsabilidade DERIVADA</b> (decorre da lei).</p></div>'+
      '<div class="box"><span class="bl">Duas classificações diferentes</span>'+
      '<p><b>DOUTRINA:</b> por <b>substituição</b> (regressiva e progressiva) e por <b>transferência</b> (sucessão, solidariedade, terceiros).</p>'+
      '<p><b>CTN:</b> responsabilidade <b>dos SUCESSORES</b> (129-133) · <b>de TERCEIROS</b> (134-135) · <b>por INFRAÇÕES</b> (136-138).</p>'+
      '<p class="mn"><em>O CTN <b>não</b> adota a sistematização doutrinária — as duas coexistem em prova.</em></p></div>'+
      '<div class="box trap"><span class="bl">As duas substituições</span>'+
      '<p><b>REGRESSIVA (para trás):</b> substituem-se as etapas <b>ANTERIORES</b> → <b>DIFERIMENTO</b> (paga depois). <em>Produtores de leite vendem à indústria; a lei estadual põe o ICMS dessa etapa na indústria. Na venda seguinte, a indústria volta a ser <b>contribuinte</b>.</em></p>'+
      '<p><b>PROGRESSIVA (para frente):</b> substituem-se as etapas <b>POSTERIORES</b> → <b>ANTECIPAÇÃO</b> (paga antes). <em>A fábrica recolhe de uma vez o ICMS da venda futura da concessionária, sobre valor presumido.</em></p>'+
      '<p><b>Fundamento da progressiva — art. 150, § 7º, da CF:</b> assegurada a <b>imediata e preferencial RESTITUIÇÃO</b> se o fato gerador presumido não se realizar.</p>'+
      '<p class="mn"><em>Regra de bolso: <b>para trás, o FG já ocorreu; para frente, ainda vai ocorrer</b>.</em></p></div>'+
      '<div class="box"><span class="bl">Art. 128 — a regra matriz</span>'+
      '<p>A lei pode atribuir <b>de modo expresso</b> a responsabilidade a <b>terceira pessoa VINCULADA ao fato gerador</b>, excluindo a do contribuinte ou atribuindo-a a ele <b>em caráter supletivo</b>.</p>'+
      '<p><b>Três arranjos possíveis:</b> contribuinte <b>excluído</b> · contribuinte <b>subsidiário</b> · <b>responsável subsidiário</b> (art. 134).</p></div>'),
    sl("Responsabilidade dos sucessores",
      '<div class="box"><span class="bl">Art. 129 — o marco temporal</span>'+
      '<p>O sucessor assume as obrigações surgidas <b>ATÉ a data do ato ou fato que demarcou a sucessão</b>, estejam os créditos <b>constituídos, em curso de constituição ou por constituir</b>.</p>'+
      '<p class="mn"><em>Quanto aos fatos <b>posteriores</b>, o sucessor deixa de ser responsável e vira <b>CONTRIBUINTE</b>.</em></p></div>'+
      '<div class="box"><span class="bl">Art. 130 — bens IMÓVEIS</span>'+
      '<p>Sub-rogam-se no <b>ADQUIRENTE</b>: <b>impostos</b> sobre propriedade, domínio útil ou posse · <b>taxas</b> de serviço · <b>contribuições de melhoria</b>.</p>'+
      '<p><b>SALVO quando conste do título a prova da QUITAÇÃO.</b></p>'+
      '<p><b>Imóvel comercial:</b> o adquirente responde por <b>IPTU, taxas e CM</b> (tributos <b>reais</b>), <b>não</b> pelo <b>ISSQN</b> (imposto <b>pessoal</b>).</p>'+
      '<p><b>Arrematação em hasta pública:</b> a sub-rogação é <b>sobre o PREÇO</b> — os débitos <b>não se transferem</b>.</p></div>'+
      '<div class="box"><span class="bl">Art. 131, I — bens MÓVEIS</span>'+
      '<p>São <b>pessoalmente responsáveis</b> o <b>adquirente ou remitente</b> pelos tributos dos bens adquiridos ou remidos.</p>'+
      '<p class="mn"><em><b>Remitente</b> é quem faz a <b>remição</b>: quita a dívida e resgata o bem penhorado ou leiloado.</em></p></div>'+
      '<div class="box trap"><span class="bl">Art. 131, II e III — causa mortis</span>'+
      '<p><b>ESPÓLIO:</b> tributos devidos pelo de cujus <b>até a ABERTURA da sucessão</b>.<br>'+
      '<b>SUCESSORES e CÔNJUGE MEEIRO:</b> tributos devidos pelo de cujus <b>até a PARTILHA ou adjudicação</b>, <b>limitada</b> a responsabilidade ao <b>quinhão, legado ou meação</b>.</p>'+
      '<p><b>A linha do tempo:</b></p>'+
      '<p><b>vivo</b> (contribuinte: de cujus) → <b>MORTE</b> → <b>espólio</b> (contribuinte dos FGs posteriores) → <b>PARTILHA</b> → <b>sucessores</b> (contribuintes dos FGs posteriores).</p>'+
      '<p><em>Morre Eriberto: o <b>IPVA</b> com FG após o óbito tem como contribuinte o <b>espólio</b>; o <b>IR</b> do período anterior, o <b>de cujus</b>.</em></p>'+
      '<p class="mn"><em>E o <b>inventariante</b> pode responder pelos tributos do espólio — art. 134, IV.</em></p></div>')
  ],
  V2:[
    sl("Sucessão empresarial",
      '<div class="box"><span class="bl">Art. 132 — operações societárias</span>'+
      '<p>A pessoa jurídica de direito privado que <b>RESULTAR</b> de <b>fusão, transformação ou incorporação</b> responde pelos tributos devidos <b>até a data do ato</b> pelas sociedades fusionadas, transformadas ou incorporadas.</p>'+
      '<p><b>STJ, Súmula 554:</b> a responsabilidade da sucessora abrange <b>não só os tributos</b>, mas também as <b>multas MORATÓRIAS ou PUNITIVAS</b> de fatos geradores até a sucessão.</p>'+
      '<p class="mn"><em>Incorporou empresa devedora de CSLL, multa de ofício e juros? <b>Responde por tudo.</b></em></p></div>'+
      '<div class="box"><span class="bl">Art. 133 — aquisição de fundo de comércio</span>'+
      '<p>Quem adquire <b>fundo de comércio ou estabelecimento</b> e <b>CONTINUA a exploração</b> — sob a mesma ou outra razão social — responde pelos tributos do fundo devidos <b>até a data do ato</b>:</p>'+
      '<p><b>I — INTEGRALMENTE</b>, se o alienante <b>CESSAR</b> a exploração.<br>'+
      '<b>II — SUBSIDIARIAMENTE</b>, se o alienante <b>prosseguir</b> ou <b>iniciar nova atividade DENTRO DE SEIS MESES</b>, no mesmo ou em outro ramo.</p>'+
      '<p class="mn"><em>Voltou em <b>6 meses</b> → subsidiária. Voltou em <b>7 meses</b> → integral. O prazo é o divisor.</em></p></div>'+
      '<div class="box tip"><span class="bl">§ 1º — quando o art. 133 NÃO se aplica</span>'+
      '<p>Na <b>alienação judicial</b>: <b>I)</b> em processo de <b>FALÊNCIA</b>; <b>II)</b> de <b>filial ou unidade produtiva isolada</b> em <b>recuperação judicial</b>.</p>'+
      '<p><em>Empresa falida alienada judicialmente, com a compradora mantendo nome e lojas: a compradora <b>não responde</b>.</em></p></div>'+
      '<div class="box trap"><span class="bl">§ 2º — a exceção da exceção</span>'+
      '<p>O § 1º <b>não</b> protege o adquirente que seja: <b>I)</b> <b>sócio</b> da falida ou em recuperação, ou <b>sociedade controlada</b> pelo devedor; <b>II)</b> <b>parente em linha reta ou colateral até o 4º GRAU</b>, consanguíneo ou afim, do devedor ou de seus sócios; <b>III)</b> <b>agente do falido</b> com o objetivo de <b>fraudar a sucessão tributária</b>.</p>'+
      '<p><b>§ 3º:</b> na falência, o produto da alienação fica em conta de depósito à disposição do juízo por <b>1 ANO</b>, só podendo pagar <b>créditos extraconcursais</b> ou <b>que preferem ao tributário</b>.</p></div>'),
    sl("Responsabilidade de terceiros",
      '<div class="box"><span class="bl">Art. 134 — atuação REGULAR</span>'+
      '<p><b>Nos casos de IMPOSSIBILIDADE de exigência do cumprimento da obrigação principal pelo CONTRIBUINTE</b>, respondem — nos atos em que intervierem ou pelas omissões de que forem responsáveis:</p>'+
      '<p><b>I)</b> pais, pelos filhos menores · <b>II)</b> tutores e curadores · <b>III)</b> administradores de bens de terceiros · <b>IV)</b> <b>inventariante</b>, pelo espólio · <b>V)</b> síndico e comissário, pela massa falida · <b>VI)</b> <b>tabeliães, escrivães e serventuários</b> · <b>VII)</b> sócios, na liquidação de sociedade de pessoas.</p></div>'+
      '<div class="box trap"><span class="bl">Dois detalhes do art. 134</span>'+
      '<p><b>1)</b> O CTN diz “<b>solidariamente</b>”, mas <b>doutrina e STJ</b> entendem que é <b>SUBSIDIÁRIA</b> — há <b>benefício de ordem</b>, incompatível com a solidariedade. <em>Leia o enunciado: a banca pode querer a literalidade ou a doutrina.</em></p>'+
      '<p><b>2)</b> Em matéria de penalidades, só alcança as de <b>CARÁTER MORATÓRIO</b> (parágrafo único).</p>'+
      '<p><em>Registrador que se omite em exigir a guia do ITBI responde — <b>mas só se não for possível exigir dos contribuintes</b>. Tendo eles bens suficientes, não se chega ao registrador.</em></p></div>'+
      '<div class="box"><span class="bl">Art. 135 — atuação IRREGULAR</span>'+
      '<p>São <b>PESSOALMENTE responsáveis</b> pelos créditos resultantes de atos praticados com <b>EXCESSO DE PODERES</b> ou <b>INFRAÇÃO DE LEI, CONTRATO SOCIAL OU ESTATUTOS</b>:</p>'+
      '<p><b>I)</b> as pessoas do art. 134 · <b>II)</b> <b>mandatários, prepostos e empregados</b> · <b>III)</b> <b>diretores, gerentes ou representantes</b> de pessoas jurídicas de direito privado.</p></div>'+
      '<div class="box tip"><span class="bl">Súmula 430 do STJ</span>'+
      '<p>“O <b>inadimplemento</b> da obrigação tributária pela sociedade <b>NÃO gera, por si só</b>, a responsabilidade solidária do <b>sócio-gerente</b>.”</p>'+
      '<p><em>Sociedade que declara e não paga, sem fraude: incluir o sócio-gerente na dívida ativa só pelo inadimplemento é <b>indevido</b>. Precisa de excesso de poderes ou infração de lei, contrato ou estatuto.</em></p></div>'),
    sl("Responsabilidade por infrações e denúncia espontânea",
      '<div class="box trap"><span class="bl">Art. 136 — responsabilidade OBJETIVA</span>'+
      '<p>Salvo disposição de lei em contrário, a responsabilidade por infrações <b>INDEPENDE</b> de:</p>'+
      '<p><b>I</b>ntenção do agente · <b>E</b>fetividade do ato · <b>N</b>atureza do ato · <b>E</b>xtensão dos efeitos → <b>mnemônico IENE</b>.</p>'+
      '<p class="mn"><em>Pouco importa dolo ou culpa: basta o ato.</em></p></div>'+
      '<div class="box"><span class="bl">Art. 137 — responsabilidade PESSOAL do agente</span>'+
      '<p><b>I —</b> infrações conceituadas por lei como <b>CRIMES ou CONTRAVENÇÕES</b>, <b>salvo</b> quando praticadas <b>no exercício regular</b> de administração, mandato, função, cargo ou emprego, ou <b>no cumprimento de ordem expressa</b> de quem de direito;</p>'+
      '<p><b>II —</b> infrações em cuja definição o <b>DOLO ESPECÍFICO</b> do agente seja <b>elementar</b>;</p>'+
      '<p><b>III —</b> infrações que decorram <b>direta e exclusivamente de DOLO ESPECÍFICO</b>: das pessoas do art. 134 <b>contra</b> aquelas por quem respondem; dos mandatários, prepostos e empregados <b>contra</b> mandantes, preponentes e empregadores; dos diretores e gerentes <b>contra</b> as pessoas jurídicas.</p>'+
      '<p><em>Gerente furta notas fiscais e é condenado por sonegação e furto: a multa é <b>pessoal dele</b>, não da empresa.</em></p></div>'+
      '<div class="box"><span class="bl">Art. 138 — denúncia espontânea</span>'+
      '<p>A responsabilidade é <b>EXCLUÍDA</b> pela denúncia espontânea, acompanhada, se for o caso, do <b>pagamento do tributo e dos JUROS DE MORA</b>, ou do <b>depósito da importância arbitrada</b> quando o montante dependa de apuração.</p>'+
      '<p><b>Parágrafo único:</b> <b>não é espontânea</b> a denúncia apresentada <b>após o início de qualquer procedimento administrativo ou medida de fiscalização</b> relacionados com a infração — na prática, o <b>Termo de Início de Fiscalização</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Os dois limites que a banca cobra</span>'+
      '<p><b>1)</b> A denúncia espontânea <b>NÃO afasta os JUROS DE MORA</b>. Ela exclui a <b>multa</b>; tributo e juros continuam devidos.</p>'+
      '<p><b>2) STJ, Súmula 360:</b> o benefício <b>não se aplica aos tributos sujeitos a lançamento por HOMOLOGAÇÃO regularmente DECLARADOS e pagos a destempo</b>.</p>'+
      '<p><em>Empresa que declara o ICMS, não paga e, sabendo da fiscalização iminente, “denuncia”: falha <b>duas vezes</b> — o tributo estava declarado e a espontaneidade já se perdera.</em></p></div>')
  ]
};

var TEC = [
  ["Caderno CEBRASPE — Direito Tributário 07","https://www.tecconcursos.com.br/s/Q2gKY2","Q2gKY2"],
  ["Caderno FCC — Direito Tributário 07","https://www.tecconcursos.com.br/s/Q2gKYN","Q2gKYN"],
  ["Caderno FGV — Direito Tributário 07","https://www.tecconcursos.com.br/s/Q2gKYW","Q2gKYW"],
  ["Caderno VUNESP — Direito Tributário 07","https://www.tecconcursos.com.br/s/Q2glWT","Q2glWT"]
];
var TECNOTA = "Priorize o caderno da FGV — banca do último certame da Receita Federal. Este é um dos módulos mais cobrados de todo o Direito Tributário, e o que mais anda junto com jurisprudência: decore as três súmulas do STJ que aparecem aqui — 554 (sucessão empresarial alcança multas), 430 (inadimplemento não responsabiliza o sócio-gerente) e 360 (denúncia espontânea não vale para tributo declarado e pago a destempo). Atenção também ao art. 134: o CTN diz “solidariamente”, mas doutrina e STJ dizem subsidiária — leia se o enunciado quer a literalidade ou o entendimento. A EC 132/2023 não alterou os arts. 128 a 138, então o conteúdo está atualizado.";

var UNITS = [
  {n:1, title:"Substituição tributária e a regra do art. 128", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Substituição, transferência e sucessores", xp:10, data:"V1"},
    {id:"K2", type:"drill",  title:"Praticar · classificações e origem",     xp:25, data:["S1","S2","T0","T1"]},
    {id:"K3", type:"drill",  title:"Praticar · regressiva × progressiva",    xp:25, data:["S3","S4","T2","T3","T4","T5","T6"]},
    {id:"K4", type:"drill",  title:"Praticar · art. 128 e seus arranjos",    xp:25, data:["S5","T7","T8"]},
    {id:"K5", type:"flash",  title:"Flashcards · substituição e art. 128",   xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11]}
  ]},
  {n:2, title:"Sucessão em bens e causa mortis", cvar:"u2", lessons:[
    {id:"K6", type:"drill",  title:"Praticar · bens imóveis e móveis",       xp:25, data:["S6","S7","S8","T9","T10","T11","T12","T13","T14","T15"]},
    {id:"K7", type:"drill",  title:"Praticar · sucessão causa mortis",       xp:25, data:["S9","S10","S11","S12","T16","T17","T18","T19","T20"]},
    {id:"K8", type:"flash",  title:"Flashcards · sucessão em bens e herança", xp:15, data:[12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}
  ]},
  {n:3, title:"Sucessão empresarial", cvar:"u3", lessons:[
    {id:"K9", type:"teoria", title:"Arts. 132 e 133, terceiros e infrações", xp:10, data:"V2"},
    {id:"K10",type:"drill",  title:"Praticar · fusão, incorporação e multas", xp:25, data:["S13","S14","T21","T22","T23"]},
    {id:"K11",type:"drill",  title:"Praticar · aquisição de fundo de comércio", xp:25, data:["S15","S16","T24","T25","T26","T27"]},
    {id:"K12",type:"drill",  title:"Praticar · alienação judicial",          xp:25, data:["S17","S18","T28","T29","T30","T31"]},
    {id:"K13",type:"flash",  title:"Flashcards · sucessão empresarial",      xp:15, data:[32,33,34,35,36,37,38,39,40,41,42,43]}
  ]},
  {n:4, title:"Responsabilidade de terceiros", cvar:"u4", lessons:[
    {id:"K14",type:"drill",  title:"Praticar · art. 134 e atuação regular",  xp:25, data:["S19","S21","T32","T33","T34","T35","T36","T37"]},
    {id:"K15",type:"drill",  title:"Praticar · art. 135 e atuação irregular", xp:25, data:["S20","S22","T38","T39","T40","T41"]},
    {id:"K16",type:"flash",  title:"Flashcards · responsabilidade de terceiros", xp:15, data:[44,45,46,47,48,49,50,51,52,53]}
  ]},
  {n:5, title:"Infrações e denúncia espontânea", cvar:"u5", lessons:[
    {id:"K17",type:"drill",  title:"Praticar · responsabilidade objetiva e pessoal", xp:25, data:["S23","S24","T42","T43","T44","T45","T46"]},
    {id:"K18",type:"drill",  title:"Praticar · denúncia espontânea",         xp:25, data:["S25","S26","T47","T48","T49","T50","T51","T52","T53"]},
    {id:"K19",type:"flash",  title:"Flashcards · infrações e denúncia",      xp:15, data:[54,55,56,57,58,59,60,61,62,63,64]}
  ]},
  {n:6, title:"Fixação", cvar:"u1", lessons:[
    {id:"Krev",type:"review",title:"Revisão geral do módulo",                xp:60, data:null},
    {id:"K20", type:"missao", title:"Missão TEC Concursos",                  xp:15, data:null},
    {id:"K21", type:"prova",  title:"Simulado cronometrado",                 xp:100, data:null}
  ]}
];

/* ---------- comentários, extraídos do Resumo 07 de Direito Tributário (Radegondes) ---------- */
var COM={
0:"<p>Caixa <b>ATENÇÃO!</b> de abertura do resumo: <b>“a responsabilidade do CONTRIBUINTE pelo cumprimento da obrigação tributária é ORIGINÁRIA, pois decorre do próprio fato gerador. Já a responsabilidade do RESPONSÁVEL é DERIVADA, pois decorre da lei”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Responsabilidade Tributária — Atenção!</i></p>",
1:"<p>Do resumo: <b>“o CTN não sistematiza a matéria da forma adotada pela doutrina”</b>. Ele divide em <b>três</b> modalidades: <b>responsabilidade dos sucessores (arts. 129 a 133)</b> · <b>de terceiros (arts. 134 e 135)</b> · <b>por infrações (arts. 136 a 138)</b>.</p><p>A doutrina, essa sim, separa em <b>substituição</b> e <b>transferência</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Responsabilidade Tributária no CTN</i></p>",
2:"<p>Definição do resumo: a <b>regressiva (para trás)</b> é a substituição das pessoas que estão nas <b>etapas ANTERIORES</b> da cadeia, <b>“ocasionando o DIFERIMENTO (postergação) do pagamento dos tributos devidos”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Substituição Tributária Regressiva</i></p>",
3:"<p>Trocou. A <b>progressiva (para frente)</b> substitui as etapas <b>POSTERIORES</b>, <b>“ocasionando a ANTECIPAÇÃO do pagamento dos tributos que serão devidos”</b>.</p><p>No esquema do resumo: <b>ST para trás</b> = fato gerador → pagamento · <b>ST para frente</b> = pagamento → fato gerador.</p><p class='fb-fonte'>Resumo 07 · <i>Substituição Tributária Progressiva</i></p>",
4:"<p>É o <b>exemplo do leite</b> do resumo: produtores rurais do interior de SP (“A”) vendendo à indústria de laticínios de Pirassununga (“B”), com a lei estadual atribuindo a “B” a responsabilidade pelo ICMS.</p><p>A conclusão dele: <b>“em relação às operações entre A e B, B será RESPONSÁVEL (substituto tributário); em relação às operações entre B e C, B será CONTRIBUINTE”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>ST Regressiva — exemplo</i></p>",
5:"<p>É o <b>exemplo dos veículos</b> do resumo: <b>“a concessionária (etapa posterior) pode ser substituída pela fábrica (etapa anterior), ocorrendo antecipação do pagamento do ICMS”</b> — “todo o imposto é pago de uma só vez pela fábrica, sendo calculado sobre o valor pelo qual se PRESUME que o veículo será vendido ao consumidor final”.</p><p class='fb-fonte'>Resumo 07 · <i>ST Progressiva — exemplo</i></p>",
6:"<p><b>OBS</b> do resumo, com o <b>art. 150, §7º, da CF</b>: a lei pode atribuir a condição de responsável por imposto <b>“cujo fato gerador deva ocorrer posteriormente, assegurada a IMEDIATA E PREFERENCIAL RESTITUIÇÃO da quantia paga, caso não se realize o fato gerador presumido”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>ST Progressiva — previsão constitucional</i></p>",
7:"<p>O comentário do resumo ao <b>art. 128</b> é direto: <b>“a pessoa eleita pela lei como responsável pelo pagamento do tributo deve possuir uma VINCULAÇÃO com o fato gerador da respectiva obrigação”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Responsabilidade Tributária — art. 128</i></p>",
8:"<p><b>Art. 128</b>, na literalidade que o resumo transcreve: a lei pode atribuir a responsabilidade a terceira pessoa vinculada ao fato gerador, <b>“EXCLUINDO a responsabilidade do contribuinte ou ATRIBUINDO-A A ESTE EM CARÁTER SUPLETIVO do cumprimento total ou parcial da referida obrigação”</b>.</p><p>O resumo desdobra em <b>três</b> modos: contribuinte excluído · contribuinte subsidiário · responsável subsidiário (art. 134).</p><p class='fb-fonte'>Resumo 07 · <i>Responsabilidade Tributária — art. 128</i></p>",
9:"<p>Comentário do resumo ao <b>art. 129</b>: <b>“o sucessor assume todas as obrigações tributárias surgidas ATÉ A DATA do ato ou fato que demarcou a sucessão”</b>. E ele acrescenta: quanto às obrigações <b>posteriores</b>, o sucessor <b>se torna contribuinte</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Responsabilidade dos Sucessores — art. 129</i></p>",
10:"<p>Quadro do <b>art. 130</b>: sub-rogam-se na pessoa dos adquirentes de bens <b>IMÓVEIS</b> os créditos relativos a <b>impostos cujo fato gerador seja a propriedade, o domínio útil ou a posse</b>, <b>taxas pela prestação de serviços</b> e <b>contribuições de melhoria</b> — <b>“salvo quando conste do título (escritura) a prova de sua quitação”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão em Bens Imóveis — art. 130</i></p>",
11:"<p>A ressalva está no próprio quadro do resumo: <b>“salvo quando conste do título (escritura) a prova de sua quitação”</b>. Havendo a prova na escritura, não há sub-rogação.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão em Bens Imóveis — art. 130</i></p>",
12:"<p>Observação 2 do resumo: <b>“no caso de imóveis comerciais, o adquirente é o responsável pelo IPTU, pelas Taxas e pela CM, mas NÃO o é sobre o ISSQN, dadas a natureza de imposto REAL daqueles tributos e a natureza PESSOAL do ISSQN”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão em Bens Imóveis — Observação 2</i></p>",
13:"<p>Observação 3: <b>“no caso de arrematação em hasta pública, a sub-rogação ocorre sobre o respectivo PREÇO (parágrafo único do art. 130). Isso significa que os débitos tributários NÃO são transferidos”</b>.</p><p>O arrematante leva o imóvel limpo; o Fisco se satisfaz no preço.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão em Bens Imóveis — Observação 3</i></p>",
14:"<p><b>Art. 131, I</b>: são pessoalmente responsáveis <b>“o adquirente ou remitente, pelos tributos relativos aos bens adquiridos ou remidos”</b>.</p><p>Comentário do resumo: embora o legislador não diga, <b>“essa é a interpretação da maioria dos autores” — trata-se de bens MÓVEIS</b>, já que os imóveis foram tratados no art. 130.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão em Bens Móveis — art. 131, I</i></p>",
15:"<p>Definição do resumo: <b>“remitente é aquele que realiza a REMIÇÃO, isto é, aquele que realiza a QUITAÇÃO DA DÍVIDA e o resgate dos bens que foram penhorados ou objeto de leilão judicial”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>O que é remitente?</i></p>",
16:"<p><b>Art. 131, III</b>: <b>“o espólio, pelos tributos devidos pelo de cujus até a data da ABERTURA DA SUCESSÃO”</b>.</p><p>Observação 2 do resumo: após a abertura, <b>o espólio passa a ser CONTRIBUINTE</b> pelos fatos geradores seguintes (ex.: IPTU) <b>até que ocorra a partilha</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão Causa Mortis — art. 131</i></p>",
17:"<p><b>Art. 131, II</b>, com o limite que o enunciado suprimiu: o sucessor e o cônjuge meeiro respondem pelos tributos do de cujus até a partilha, <b>“LIMITADA ESTA RESPONSABILIDADE AO MONTANTE DO QUINHÃO, DO LEGADO OU DA MEAÇÃO”</b>.</p><p>Definições do resumo: <b>quinhão</b> = parcela do patrimônio · <b>legado</b> = patrimônio deixado por testamento · <b>meação</b> = metade do patrimônio do casal.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão Causa Mortis — art. 131</i></p>",
18:"<p>É o <b>EXEMPLO do Eriberto</b>, do resumo: <b>“1) o contribuinte do IPVA é o ESPÓLIO (fato gerador posterior ao óbito); 2) o contribuinte do IR é o DE CUJUS (IR referente ao período anterior à sua morte)”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão Causa Mortis — exemplo</i></p>",
19:"<p>Observação 3 do resumo: <b>“após a prolação da sentença de partilha, os sucessores passam a ser CONTRIBUINTES pelos fatos geradores ocorridos após a partilha. Contudo, eles são PESSOALMENTE RESPONSÁVEIS pelos tributos devidos pelo de cujus antes da data da partilha”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão Causa Mortis — Observação 3</i></p>",
20:"<p><b>OBS</b> do resumo, que ele marca como já cobrada: <b>“de acordo com o art. 134, IV, o inventariante pode ser responsabilizado pelos tributos devidos pelo espólio até a abertura da sucessão. ISSO JÁ CAIU EM PROVAS!”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão Causa Mortis — OBS</i></p>",
21:"<p><b>Art. 132</b>, transcrito no resumo: a pessoa jurídica de direito privado que resultar de <b>fusão, transformação ou incorporação</b> é responsável pelos tributos devidos <b>até a data do ato</b> pelas pessoas jurídicas fusionadas, transformadas ou incorporadas.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão Empresarial — art. 132</i></p>",
22:"<p>O resumo traz a <b>Súmula 554 do STJ</b> exatamente contra esse corte: <b>“na hipótese de sucessão empresarial, a responsabilidade da sucessora abrange não apenas os tributos devidos pela sucedida, mas também as MULTAS MORATÓRIAS OU PUNITIVAS referentes a fatos geradores ocorridos até a data da sucessão”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão Empresarial — Súmula 554</i></p>",
23:"<p>É o <b>EXEMPLO</b> do resumo: a PJ “A”, devedora de <b>CSLL, multa de ofício e juros</b> relativos a 2022, incorporada por “B” em 2023. Conclusão dele: <b>“a empresa AB é INTEGRALMENTE responsável tanto pelo pagamento da CSLL quanto pelo pagamento da multa e dos juros moratórios”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão Empresarial — exemplo</i></p>",
24:"<p><b>Art. 133, caput</b>: quem adquirir <b>“por qualquer título, fundo de comércio ou estabelecimento comercial, industrial ou profissional, e CONTINUAR a respectiva exploração, sob a mesma ou outra razão social ou sob firma ou nome individual”</b>, responde pelos tributos relativos ao fundo devidos até a data do ato.</p><p>O que importa é a <b>continuidade da exploração</b>, não o nome.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão Empresarial — art. 133</i></p>",
25:"<p><b>Art. 133, I</b>: <b>“INTEGRALMENTE, se o alienante CESSAR a exploração do comércio, indústria ou atividade”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão Empresarial — art. 133</i></p>",
26:"<p><b>Art. 133, II</b>: <b>“SUBSIDIARIAMENTE com o alienante, se este prosseguir na exploração ou iniciar DENTRO DE SEIS MESES a contar da data da alienação, nova atividade no mesmo ou em outro ramo”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão Empresarial — art. 133</i></p>",
27:"<p>São os <b>dois exemplos da Panificadora</b> do resumo, que existem só para marcar a fronteira dos seis meses:</p><ul><li><b>Sete meses</b> depois (exemplo 01) → a adquirente responde <b>INTEGRALMENTE</b>.</li><li><b>Seis meses</b> depois (exemplo 02) → responde <b>SUBSIDIARIAMENTE</b>.</li></ul><p class='fb-fonte'>Resumo 07 · <i>Sucessão Empresarial — exemplos</i></p>",
28:"<p><b>Art. 133, §1º</b>: o caput <b>não se aplica</b> na hipótese de alienação judicial <b>I – em processo de falência</b> e <b>II – de filial ou unidade produtiva isolada, em processo de recuperação judicial</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão Empresarial — art. 133, §1º</i></p>",
29:"<p>É o <b>EXEMPLO</b> do resumo: a PJ ABC em falência, alienada judicialmente à RAD, <b>“que manteve o mesmo nome e as mesmas lojas”</b>. Conclusão dele: <b>“a empresa RAD NÃO responderá, por ter havido alienação judicial em processo de falência”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão Empresarial — exemplo</i></p>",
30:"<p><b>Art. 133, §2º</b> — a exceção do §1º não vale quando o adquirente for: <b>sócio da sociedade falida ou em recuperação, ou sociedade controlada pelo devedor</b> · <b>parente, em linha reta ou colateral até o 4º grau</b>, do devedor ou de seus sócios · <b>agente do falido com o objetivo de fraudar a sucessão tributária</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão Empresarial — art. 133, §2º</i></p>",
31:"<p><b>Art. 133, §3º</b>: o produto da alienação permanece em conta de depósito à disposição do juízo <b>“pelo prazo de 1 (UM) ANO, contado da data de alienação, somente podendo ser utilizado para o pagamento de créditos extraconcursais ou de créditos que preferem ao tributário”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Sucessão Empresarial — art. 133, §3º</i></p>",
32:"<p><b>Art. 134, I</b>, com o pressuposto do caput: <b>“nos casos de IMPOSSIBILIDADE de exigência do cumprimento da obrigação principal pelo contribuinte”</b>, e <b>“nos atos em que intervierem ou pelas omissões de que forem responsáveis”</b> — os pais, pelos tributos devidos por seus filhos menores.</p><p class='fb-fonte'>Resumo 07 · <i>Terceiros com Atuação Regular — art. 134</i></p>",
33:"<p><b>Art. 134, VI</b>: os tabeliães, escrivães e demais serventuários de ofício, <b>“pelos tributos devidos sobre os atos praticados POR ELES, OU PERANTE ELES, em razão do seu ofício”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Terceiros com Atuação Regular — art. 134</i></p>",
34:"<p>O caput do art. 134 começa exatamente por isso: <b>“nos casos de impossibilidade de exigência do cumprimento da obrigação principal pelo contribuinte”</b>. É pressuposto, não detalhe.</p><p class='fb-fonte'>Resumo 07 · <i>Terceiros com Atuação Regular — art. 134</i></p>",
35:"<p>O resumo transcreve Ricardo Alexandre: <b>“se uma das características da solidariedade é justamente a inexistência do benefício de ordem, não se pode designar solidária uma responsabilidade que DEPENDE da impossibilidade da exigência ao contribuinte. A rigor, a responsabilidade das pessoas enumeradas no art. 134 é SUBSIDIÁRIA (ou supletiva)”</b>.</p><p>E ele avisa: veja no enunciado se a banca quer a <b>literalidade do CTN</b> (“solidariamente”) ou o <b>entendimento doutrinário</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Art. 134 — comentário</i></p>",
36:"<p>Caixa <b>ATENÇÃO!</b> do resumo: <b>“o parágrafo único do art. 134 dispõe que a atribuição de responsabilidade pelas penalidades tributárias se restringe às de CARÁTER MORATÓRIO”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Art. 134 — Atenção!</i></p>",
37:"<p>É o <b>EXEMPLO do registrador José</b>, do resumo. Nele os contribuintes <b>“tinham bens suficientes para o adimplemento da dívida”</b>, e a conclusão é: <b>“o registrador José responde pela dívida por sua omissão, MAS APENAS nos casos de impossibilidade de exigência aos contribuintes”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Art. 134 — exemplo</i></p>",
38:"<p><b>Art. 135, III</b>: são <b>PESSOALMENTE</b> responsáveis os <b>diretores, gerentes ou representantes de pessoas jurídicas de direito privado</b> pelos créditos resultantes de atos com <b>excesso de poderes ou infração de lei, contrato social ou estatutos</b>.</p><p>O comentário do resumo separa os dois artigos: <b>134</b> = exercício <b>regular</b> da representação · <b>135</b> = exercício <b>irregular</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Terceiros com Atuação Irregular — art. 135</i></p>",
39:"<p><b>Art. 135, II</b>: <b>os mandatários, prepostos e empregados</b> — ao lado do inciso I (as pessoas do art. 134) e do inciso III (diretores, gerentes e representantes).</p><p class='fb-fonte'>Resumo 07 · <i>Terceiros com Atuação Irregular — art. 135</i></p>",
40:"<p><b>Súmula 430 do STJ</b>, transcrita no resumo: <b>“o inadimplemento da obrigação tributária pela sociedade NÃO gera, por si só, a responsabilidade solidária do sócio-gerente”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Art. 135 — Súmula 430</i></p>",
41:"<p>É o <b>EXEMPLO</b> do resumo: a limitada que <b>declarou regularmente</b> e deixou de pagar, <b>“sem que houvesse qualquer fraude ou comportamento análogo”</b>. Conclusão: <b>“o sócio-gerente não responde por simples inadimplemento, devendo-lhe ser imputado excesso de poderes ou infração de lei, contrato social ou estatutos”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Art. 135 — exemplo</i></p>",
42:"<p>Esquema do <b>art. 136</b> com o mnemônico do resumo — <b>IENE</b>: a responsabilidade por infrações <b>INDEPENDE</b> da <b>I</b>ntenção do agente · da <b>E</b>fetividade do ato · da <b>N</b>atureza do ato · da <b>E</b>xtensão dos efeitos do ato. Tudo <b>salvo disposição de lei em contrário</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Responsabilidade por Infrações — art. 136</i></p>",
43:"<p>Comentário do resumo: <b>“em regra, a responsabilidade por infrações tributárias é OBJETIVA (independe da intenção do agente)... pouco importa a intenção do agente”</b> — e basta ocorrer o ato para que o agente responda.</p><p class='fb-fonte'>Resumo 07 · <i>Responsabilidade por Infrações — art. 136</i></p>",
44:"<p><b>Art. 137, I</b>, no quadro do resumo: a responsabilidade é pessoal do agente quanto às infrações <b>conceituadas por lei como crimes ou contravenções</b>, <b>salvo</b> quando praticadas <b>“no exercício regular de administração, mandato, função, cargo ou emprego”</b> ou <b>“no cumprimento de ordem expressa emitida por quem de direito”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Responsabilidade Pessoal — art. 137</i></p>",
45:"<p><b>Art. 137, II e III</b>: quanto às infrações <b>“em cuja definição o DOLO ESPECÍFICO do agente seja elementar”</b>; e quanto às que <b>“decorram direta e exclusivamente de dolo específico”</b> das pessoas do art. 134 contra aquelas por quem respondem, dos mandatários contra seus mandantes e dos diretores contra as pessoas jurídicas.</p><p class='fb-fonte'>Resumo 07 · <i>Responsabilidade Pessoal — art. 137</i></p>",
46:"<p>É o <b>EXEMPLO</b> do resumo, das notas fiscais furtadas pelo antigo gerente geral, condenado por <b>sonegação e furto</b>. Conclusão dele: <b>“no que tange ao pagamento da multa tributária, a responsabilidade é PESSOAL do antigo gerente, por ter cometido infração conceituada na lei como crime (art. 137, I)”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Responsabilidade Pessoal — exemplo</i></p>",
47:"<p><b>Art. 138</b>, transcrito: a responsabilidade é excluída pela denúncia espontânea, <b>“acompanhada, SE FOR O CASO, do pagamento do tributo devido e dos JUROS DE MORA, ou do depósito da importância arbitrada pela autoridade administrativa, quando o montante do tributo dependa de apuração”</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Denúncia Espontânea — art. 138</i></p>",
48:"<p>Caixa <b>ATENÇÃO</b> final do resumo: <b>“a denúncia espontânea NÃO exclui a incidência de juros de mora”</b>.</p><p>O próprio art. 138 exige o pagamento do tributo <b>e dos juros</b>. O que cai é a <b>multa</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Denúncia Espontânea — Atenção</i></p>",
49:"<p><b>Art. 138, parágrafo único</b>: <b>“NÃO se considera espontânea a denúncia apresentada APÓS O INÍCIO de qualquer procedimento administrativo ou medida de fiscalização, relacionados com a infração”</b>.</p><p>O resumo fixa o marco: a formalização do <b>Termo de Início de Fiscalização (TIF)</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Denúncia Espontânea — art. 138</i></p>",
50:"<p><b>Súmula 360 do STJ</b>, no resumo: <b>“o benefício da denúncia espontânea NÃO se aplica aos tributos sujeitos a lançamento por homologação (ex.: ICMS) regularmente declarados, mas pagos a destempo”</b>.</p><p>Declarou e não pagou: o Fisco já sabe: não há o que denunciar.</p><p class='fb-fonte'>Resumo 07 · <i>Denúncia Espontânea — Súmula 360</i></p>",
51:"<p>É o <b>EXEMPLO</b> do resumo: ICMS de R$ 10.000 <b>regularmente declarado</b> e não pago; ao <b>saber da fiscalização</b>, a empresa faz a denúncia. Conclusão dele: <b>“não cabe a denúncia espontânea, não sendo válido o ato praticado pelo contribuinte”</b>.</p><p>Duas razões somadas: a <b>Súmula 360</b> e o <b>parágrafo único</b> do art. 138.</p><p class='fb-fonte'>Resumo 07 · <i>Denúncia Espontânea — exemplo</i></p>",
52:"<p><b>Art. 129</b>, na literalidade: aplica-se <b>“aos créditos tributários definitivamente constituídos ou em curso de constituição à data dos atos nela referidos, e aos constituídos POSTERIORMENTE aos mesmos atos, desde que relativos a obrigações tributárias surgidas ATÉ a referida data”</b>.</p><p>O marco é o <b>surgimento da obrigação</b>, não a constituição do crédito.</p><p class='fb-fonte'>Resumo 07 · <i>Responsabilidade dos Sucessores — art. 129</i></p>",
53:"<p>É o <b>modo 2</b> do desdobramento que o resumo faz do art. 128: <b>“o contribuinte é subsidiário — o responsável é obrigado a cumprir a obrigação; caso não cumpra, exige-se do contribuinte”</b>.</p><p>Na letra da lei: responsabilidade atribuída ao contribuinte <b>em caráter supletivo</b>.</p><p class='fb-fonte'>Resumo 07 · <i>Responsabilidade Tributária — art. 128</i></p>"
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"07", nome:"Responsabilidade tributária", pronto:true,
        CARDS:CARDS, QS:QS, FEY:{}, TEORIA:TEORIA, EX:EX, KIT:{}, UNITS:UNITS, COM:COM,
        DISCURSIVA:"", CASO:"", TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
