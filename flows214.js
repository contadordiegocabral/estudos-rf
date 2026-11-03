/* Fluxos visuais da LC 214/2025: cada fluxo é ligado às unidades dos módulos (chave "módulo:índice da unidade").
   Montados a partir dos cartões e da teoria dos próprios módulos; confira a redação vigente da lei. */
(function(){
"use strict";
function lk(a){ if(!Array.isArray(a)) return a; var f=null,prev=null; a.forEach(function(n){ if(!n) return; if(!f) f=n; if(prev) prev.nx=n; prev=n; }); return f; }
function ini(t,d){ return {k:"ini",t:t,d:d}; }
function p(t,d){ return {k:"p",t:t,d:d}; }
function a(t,d){ return {k:"a",t:t,d:d}; }
function f(t,d){ return {k:"f",t:t,d:d}; }
function q(t,y,n,d){ return {k:"q",t:t,d:d,y:lk(y),n:lk(n)}; }
function o(t,list,d){ return {k:"o",t:t,d:d,o:list.map(function(x){ return {l:x[0],n:lk(x[1])}; })}; }
var F=window.RF_FLOWS=window.RF_FLOWS||{};
function reg(keys,titulo,chain){ var fl={t:titulo,n:lk(chain)}; keys.forEach(function(k){ F[k]=fl; }); }

/* ===== arts. 4 a 7: incide IBS/CBS? ===== */
reg(["rf63:1","rf63:2","rf63:3"],"Incide IBS e CBS? (arts. 4º a 7º)",[
 ini("Fornecimento de bem ou serviço"),
 q("É operação onerosa? (há contraprestação, art. 4º, § 2º)",
   [p("Incide IBS e CBS (art. 4º, caput)","Título da posse e finalidade de lucro são irrelevantes (§ 3º); vale mesmo sem habitualidade (§ 4º)"),
    q("Cai em uma não incidência do art. 6º?",
      [f("Não incide","Ex.: relação de emprego, transferência entre estabelecimentos do mesmo contribuinte (com documento fiscal eletrônico), participação societária, doações sem contraprestação")],
      [f("Tributado")]),
   ],
   [q("É fornecimento não oneroso tributado do art. 5º?",
      [f("Incide","Brindes e bonificações; bens que geraram crédito fornecidos a sócios, empregados e parentes; fornecimentos a parte relacionada abaixo do mercado")],
      [f("Não incide","Só tributa se a LC previr expressamente (art. 4º, § 1º)")])]),
]);
reg(["rf63:3"],"Incide IBS e CBS? (arts. 4º a 7º)",[]); delete F["rf63:3"];
F["rf63:3"]=F["rf63:1"];

/* ===== arts. 8 e 9: imunidades ===== */
reg(["rf64:0"],"Imunidades (arts. 8º e 9º)",[
 ini("O fornecimento é imune?"),
 o("Hipóteses de imunidade",[
  ["Exportação (art. 8º)",[f("Imune")]],
  ["União, Estados, DF e Municípios (art. 9º, I)",[f("Imune","Alcança autarquias, fundações públicas e a empresa pública de serviço postal, só em finalidades essenciais (§ 1º)")]],
  ["Templos e entidades religiosas (II)",[f("Imune","Inclui organizações assistenciais e beneficentes vinculadas e mantidas por entidade religiosa (§ 2º)")]],
  ["Partidos, sindicatos de trabalhadores, educação e assistência social sem fins lucrativos (III)",[f("Imune","Requisitos do art. 14 do CTN, cumulativamente (§ 3º)")]],
  ["Livros, jornais, periódicos e papel de impressão (IV)",[f("Imune")]],
  ["Fonogramas e videofonogramas musicais brasileiros (V)",[f("Imune","Exceto replicação industrial de mídias ópticas de leitura a laser")]],
  ["Radiodifusão sonora e de sons e imagens, livre e gratuita (VI)",[f("Imune")]],
  ["Ouro ativo financeiro ou instrumento cambial (VII)",[f("Imune")]]
 ]),
 a("Atenção","As aquisições das entidades dos incisos I a III não são imunes (§ 4º)")
]);

/* ===== art. 10: fato gerador ===== */
reg(["rf64:1"],"Momento do fato gerador (art. 10)",[
 ini("Quando nasce o IBS e a CBS?"),
 p("Regra: no momento do fornecimento","Mesmo que a execução seja continuada ou fracionada (caput)"),
 o("Casos especiais (§ 1º e seguintes)",[
  ["Transporte iniciado no País",[f("Início do transporte")]],
  ["Transporte de carga iniciado no exterior",[f("Término do transporte")]],
  ["Demais serviços",[f("Término do fornecimento")]],
  ["Bem encontrado sem documentação idônea",[f("Momento em que é encontrado")]],
  ["Bem apreendido ou abandonado, em licitação, ou leilão judicial",[f("Momento da aquisição")]],
  ["Administração pública (§ 2º, art. 473)",[f("No pagamento")]],
  ["Execução continuada (§ 3º)",[f("Primeira entre a exigibilidade da parcela e o pagamento")]]
 ]),
 a("Antecipação de pagamento (§ 4º)","Parcela paga é tratada como débito; alíquota da data da emissão do documento fiscal ou do pagamento, o que ocorrer primeiro")
]);

/* ===== art. 11: local da operação ===== */
reg(["rf64:2","rf64:3"],"Local da operação (art. 11)",[
 ini("Qual é o local da operação?"),
 o("Regra por tipo de operação",[
  ["Bem móvel material (I)",[f("Local da entrega ou disponibilização ao destinatário")]],
  ["Imóvel e serviços ligados a imóvel (II)",[f("Local do imóvel","Imóvel em mais de um Município: onde está a maior parte da área (§ 2º)")]],
  ["Serviço sobre ou fruído presencialmente por pessoa física (III)",[f("Local da prestação")]],
  ["Feiras, congressos, espetáculos (IV)",[f("Local do evento")]],
  ["Serviço sobre bem móvel material e serviços portuários (V)",[f("Local da prestação")]],
  ["Transporte (VI e VII)",[f("Passageiros: início do transporte","Carga: entrega constante do documento fiscal")]],
  ["Exploração de via (VIII)",[f("Cada Município, Estado ou DF, proporcional à extensão")]],
  ["Telefonia fixa e comunicação por cabos, fios e fibras (IX)",[f("Local de instalação do terminal")]],
  ["Água, gás canalizado e energia (§ 7º)",[f("Local do consumo","Sem efetivo consumo: estabelecimento principal do adquirente")]],
  ["Demais casos (X, residual)",[f("Domicílio do adquirente (onerosa) ou do destinatário (não onerosa)","Residentes no País")]]
 ]),
 a("Regras que alteram o resultado","Operação não presencial: destino final indicado pelo adquirente (§ 1º, I). Veículos: domicílio do destinatário. Licitação, leilão e bem irregular: onde está o bem")
]);

/* ===== arts. 12 e 13: base de cálculo ===== */
reg(["rf65:0","rf65:1"],"Base de cálculo (arts. 12 e 13)",[
 ini("Base de cálculo = valor da operação (art. 12, caput)"),
 p("Integram a base","Valor integral cobrado a qualquer título: juros, multas, descontos condicionais, transporte, tributos e preços públicos, seguros e taxas (§ 1º)"),
 p("Não integram","IBS e CBS da operação, IPI, descontos incondicionais e reembolsos de operações por conta e ordem de terceiros com documento fiscal em nome do terceiro (§ 2º)"),
 a("Transição: de 2026 a 2032","ICMS, ISS e as contribuições do art. 195, I, b e IV, e PIS/Pasep ficam fora da base (§ 2º, V)"),
 q("Há valor determinado, em dinheiro, entre partes não relacionadas?",
   [f("Vale o valor da operação")],
   [f("Valor de mercado (§ 4º)","Também quando falta valor ou a operação é entre partes relacionadas (art. 5º, IV)")]),
]);
F["rf65:1"]=F["rf65:0"];
(function(){
 var fl={t:"Arbitramento da base (art. 13)",n:lk([
  ini("Faltam elementos para apurar a base?"),
  q("Documentos não exibidos, ou valor notoriamente inferior ao de mercado, ou declarações omissas, conflitantes ou sem fé?",
    [p("Arbitra-se a base (art. 13, I e II)"),
     o("Ordem do parágrafo único",[
       ["1º",[f("Valor de mercado")]],
       ["Se indisponível",[f("Custo mais despesas ou lucro bruto, ou valor de órgão competente, preço sugerido ou divulgado por entidades")]]])],
    [f("Vale o valor declarado")])
 ])};
 F["rf65:1"]=fl;
})();

/* ===== arts. 14 a 20: alíquotas ===== */
reg(["rf65:2","rf65:3"],"Alíquotas (arts. 14 a 20)",[
 ini("Qual é a alíquota?"),
 p("Alíquota-padrão: fixada por lei específica de cada ente","União (CBS); Estados e Municípios (IBS); DF (as duas competências)"),
 q("O ente editou lei específica?",
   [p("Pode vincular a alíquota à de referência (em pontos percentuais) ou fixá-la sem vinculação (§ 2º)")],
   [p("Vale a alíquota de referência (§ 3º)")]),
 p("IBS da operação (art. 15)","Alíquota do Estado de destino mais a do Município de destino, ou a do DF. Destino é o local da operação (art. 11)"),
 p("Mesma alíquota para todas as operações do ente (art. 16)","Salvo previsões da LC. Reduções dos Títulos IV e V incidem sobre a alíquota de cada ente"),
 p("Alíquotas de referência: resolução do Senado (art. 18)","CBS de 2027 a 2035; IBS de 2029 a 2035; depois, as vigentes no ano anterior"),
 a("Alteração federal que mude a arrecadação (art. 19)","Compensação pelo Senado; só vigora com o ajuste das alíquotas de referência")
]);

/* ===== art. 21 e 26: contribuinte ===== */
reg(["rf66:0","rf66:4"],"Quem é contribuinte (arts. 21 e 26)",[
 ini("Quem paga IBS e CBS?"),
 o("Contribuintes (art. 21)",[
  ["Fornecedor que opera em atividade econômica (I)",[f("Contribuinte","Atividade econômica, habitualidade ou volume que a caracterize, ou profissionalmente")]],
  ["Adquirente em licitação ou leilão judicial de bem apreendido ou abandonado (II)",[f("Contribuinte")]],
  ["Importador (III)",[f("Contribuinte")]],
  ["Quem a LC previr expressamente (IV)",[f("Contribuinte")]]
 ]),
 p("Inscrição nos cadastros do IBS e da CBS é obrigatória (§ 1º)"),
 a("Não são contribuintes (art. 26)","Condomínio edilício, consórcio, sociedade em conta de participação, nanoempreendedor, fundos de investimento (com ressalvas), produtor rural, transportador autônomo de carga, autogestão de saúde, previdência fechada e fundos patrimoniais"),
 p("Podem optar pelo regime regular (art. 26, § 1º)","Entes sem personalidade (I a III), nanoempreendedor, produtor rural e transportador autônomo de carga")
]);
F["rf66:4"]=F["rf66:0"];

/* ===== arts. 22 e 23: plataformas ===== */
reg(["rf66:1","rf66:2"],"Plataformas digitais (arts. 22 e 23)",[
 ini("Operação intermediada por plataforma digital"),
 q("É plataforma? (intermediação não presencial ou eletrônica e controle de cobrança, pagamento, termos e condições ou entrega — § 1º)",
   [p("Responsável pelo IBS e pela CBS das operações por seu intermédio, mesmo no exterior (caput)"),
    o("Como responde",[
      ["Fornecedor residente no exterior (I)",[f("Solidária com o adquirente e em substituição ao fornecedor")]],
      ["Fornecedor residente no País (II, LC 227)",[f("Solidária se não presta as informações do § 5º, ou se o fornecedor contribuinte não emite documento fiscal eletrônico")]]
    ]),
    p("Deveres","Informar as operações ao Comitê Gestor e à RFB, identificando o fornecedor (§ 5º); informar o split quando inicia o pagamento (§ 6º)"),
    f("Sem responsabilidade por diferenças","Se informou os §§ 5º e 6º e o split era possível (§ 7º, LC 227)"),
    p("Inscrição no regime regular é obrigatória, mesmo para plataforma estrangeira (art. 23)")],
   [f("Não é plataforma","Só acesso à internet, só serviços de pagamento autorizados, só publicidade ou só comparação sem cobrança por vendas (§ 2º). Sem controle de elemento essencial, sem responsabilidade tributária (§ 11)")])
]);
F["rf66:2"]=F["rf66:1"];

/* ===== arts. 24 e 25: responsabilidade solidária ===== */
reg(["rf66:3"],"Responsabilidade solidária (arts. 24 e 25)",[
 ini("Quem responde solidariamente?"),
 o("Hipóteses do art. 24",[
  ["Quem adquire, importa, recebe, mantém em depósito bem ou toma serviço sem documento fiscal idôneo (I)",[f("Responsável solidário")]],
  ["Transportador: bem sem documento idôneo ou entregue em local diferente do documento (II)",[f("Responsável solidário")]],
  ["Leiloeiro, pelos tributos da operação em leilão (III)",[f("Responsável solidário")]],
  ["Desenvolvedor de software com funções para descumprir a lei (IV)",[f("Responsável solidário")]],
  ["Quem concorre para o descumprimento por ocultação ou abuso da personalidade jurídica (V)",[f("Responsável solidário")]],
  ["Entreposto aduaneiro, recinto alfandegado, depositário e despachante (VI)",[f("Responsável solidário","Bens exportados sem documento, não exportados, entregues a pessoa diversa ou sem autorização")]]
 ]),
 a("Limites","Ocultação limita-se ao valor ocultado; pertencer a grupo econômico não basta (§§ 2º e 3º)"),
 p("Alcance (art. 25)","Tributo, correção, multa de mora, multas punitivas e encargos")
]);

/* ===== arts. 27 a 30: extinção e pagamento ===== */
reg(["rf66:5"],"Extinção dos débitos e pagamento (arts. 27 a 29)",[
 ini("Como se extingue o débito?"),
 p("Modalidades (art. 27)","Compensação, pagamento, split payment, recolhimento pelo adquirente e pagamento por responsável"),
 p("Imputação","Compensação e pagamento: ordem cronológica do documento. Split e adquirente: vinculados à operação"),
 q("O saldo foi pago até o vencimento? (art. 29)",
   [f("Quitado","O excedente é devolvido em até 3 dias úteis")],
   [a("Com atraso","Multa de 0,33% por dia, limitada a 20%, mais Selic do mês seguinte ao vencimento até o mês anterior ao pagamento e 1% no mês do pagamento")])
]);

/* ===== arts. 31 a 35: split payment ===== */
reg(["rf67:0","rf67:1","rf67:2"],"Split payment (arts. 31 a 38)",[
 ini("Pagamento de operação com IBS e CBS"),
 p("Split payment (art. 31)","Segregação e recolhimento do IBS e da CBS pelos prestadores de serviços de pagamento e operadoras de sistemas de pagamento, na liquidação financeira"),
 o("Procedimentos",[
  ["Padrão (art. 32)",[p("Valor a segregar","Débitos destacados no documento fiscal menos as parcelas já extintas (art. 27)"),
                      p("Originador transmite as informações que vinculam as operações à transação")]],
  ["Simplificado (art. 33), opcional",[p("Percentual preestabelecido do valor das operações","Fixado pelo CGIBS (IBS) e pela RFB (CBS), nunca para só um dos tributos"),
                                     a("Não gera crédito ao adquirente","Extingue débitos só nos termos do § 3º")]]
 ]),
 p("Saldo não utilizado volta ao fornecedor","Em até 3 dias úteis"),
 a("Prestadores de pagamento","Só segregam e recolhem; não são responsáveis tributários"),
 q("O pagamento não permite a segregação e o adquirente é do regime regular?",
   [f("Adquirente pode recolher o IBS e a CBS da operação (art. 36)","Paga só débitos das respectivas operações; excedente volta em até 3 dias úteis")],
   [f("Segue o split pelo procedimento aplicável")])
]);
F["rf67:1"]=F["rf67:0"]; F["rf67:2"]=F["rf67:0"];

/* ===== arts. 39 e 40: ressarcimento ===== */
reg(["rf67:3"],"Ressarcimento de saldo credor (arts. 39 e 40)",[
 ini("Saldo a recuperar ao fim do período (art. 45)"),
 p("Contribuinte pede ressarcimento, integral ou parcial (art. 39)","O que não for pedido segue como crédito para compensação ou ressarcimento depois"),
 p("Quem aprecia","CGIBS (IBS) e RFB (CBS)"),
 o("Prazo para ressarcir (§ 3º)",[
  ["Contribuintes em programas de conformidade que atendam ao art. 40",[f("30 dias")]],
  ["Pedidos que atendam ao art. 40",[f("60 dias")]],
  ["Demais casos",[f("180 dias")]]
 ]),
 a("Silêncio e fiscalização","Sem resposta, ressarce-se nos 15 dias seguintes. Fiscalização suspende os prazos, com limite de 360 dias"),
 p("Atualização","Selic acumulada mensal mais 1% no mês do pagamento (§ 9º). Se descumprir o prazo: Selic diária desde o início do prazo (§ 11)")
]);

/* ===== arts. 41 a 46: apuração ===== */
reg(["rf67:4"],"Apuração do IBS e da CBS (arts. 41 a 46)",[
 ini("Contribuinte do regime regular"),
 p("Período mensal (art. 43)","Consolida as operações de todos os estabelecimentos; pagamento e ressarcimento centralizados em um só (art. 42)"),
 p("Saldo (art. 45)","Débitos do período menos créditos apropriados (inclusive presumidos) e saldo a recuperar anterior, com ajustes e menos valores extintos pelo art. 27, III a V"),
 q("O saldo é positivo?",
   [f("Saldo a recolher")],
   [f("Saldo a recuperar","Ressarcimento ou compensação")]),
]);
(function(){
 var base=F["rf67:4"];
 var last=base.n; while(last.nx) last=last.nx;
 /* encerra o fluxo com a apuração assistida em ramo próprio, sem alterar o q */
 F["rf67:4"]={t:base.t,n:base.n,extra:[ {k:"a",t:"A apuração confessa e constitui o crédito (§ 4º)",d:"Apuração assistida (art. 46): o silêncio presume o saldo correto e constitui o crédito, mas diferenças posteriores podem ser lançadas de ofício"} ]};
})();

/* ===== arts. 47 a 56: crédito ===== */
reg(["rf68:0","rf68:1","rf68:2"],"Direito ao crédito (arts. 47 a 56)",[
 ini("Contribuinte do regime regular adquire bem ou serviço"),
 p("O crédito nasce com a extinção do débito (art. 47)","Por qualquer modalidade do art. 27. Prova: documento fiscal eletrônico idôneo. IBS e CBS separados, sem compensação cruzada"),
 q("A operação anterior é imune, isenta, de alíquota zero, com diferimento ou suspensão? (art. 49)",
   [f("Não gera crédito ao adquirente","Crédito presumido não é impedido. Imunidade e isenção anulam créditos anteriores; alíquota zero os mantém (arts. 51 e 52)")],
   [q("É bem ou serviço de uso ou consumo pessoal? (art. 57)",
      [f("Crédito vedado (art. 57, § 5º)")],
      [p("Uso do crédito (art. 53)","1º saldo a recolher vencido e não inscrito em dívida ativa; 2º débitos do mesmo período; 3º débitos de períodos seguintes, ou ressarcimento"),
       a("Limites","Sem correção; prazo de 5 anos (art. 54); transferência vedada, salvo fusão, cisão ou incorporação (art. 55)")])])
]);
F["rf68:1"]=F["rf68:0"]; F["rf68:2"]=F["rf68:0"];

/* ===== art. 57: uso e consumo pessoal ===== */
reg(["rf68:3"],"Uso e consumo pessoal (art. 57)",[
 ini("Bem ou serviço adquirido pelo contribuinte"),
 q("É bem por natureza do inciso I, ou foi fornecido de graça ou abaixo do mercado a sócios, administradores, empregados ou parentes até o 3º grau (II)?",
   [p("Presume-se uso ou consumo pessoal","Joias e metais preciosos, obras de arte, bebidas alcoólicas, derivados do tabaco, armas e munições, bens recreativos, esportivos e estéticos"),
    q("Tem uso preponderante na atividade econômica? (§ 3º)",
      [f("Pode creditar","Joias, arte, bebidas e tabaco se comercializados ou usados na fabricação para venda; armas por empresas de segurança; recreativos, esportivos e estéticos usados só no estabelecimento pelos clientes")],
      [f("Sem crédito (§ 5º)")])],
   [f("Não é uso pessoal","Benefícios que não são uso pessoal: uniformes, EPI, alimentação não alcoólica, saúde e creche no estabelecimento, plano de saúde por acordo coletivo, benefício educacional, vale-transporte, refeição e alimentação")])
]);
/* ===== CTN (curados) ===== */
reg(["dtrib08:3"],"Modalidades de lançamento (arts. 147 a 150 do CTN)",[
 ini("Quem apura o valor do tributo?"),
 o("Modalidade",[
  ["Lançamento de ofício (art. 149)",[p("A autoridade lança por conta própria","Tributos como IPTU; ou quando o sujeito passivo não presta declaração, erra, omite, ou há fraude, dolo ou simulação"),f("Notificação ao sujeito passivo")]],
  ["Por declaração (art. 147)",[p("O sujeito passivo presta informações","A autoridade apura e lança com base na declaração"),f("Retificação pelo declarante antes da notificação (§ 1º)")]],
  ["Por homologação (art. 150)",[p("O sujeito passivo apura e paga antecipadamente","Sem prévio exame da autoridade"),q("A Fazenda homologa expressamente ou deixa passar 5 anos do fato gerador?",[f("Homologação: extingue o crédito","Tácita após 5 anos, salvo dolo, fraude ou simulação (§ 4º)")],[f("Lança de ofício a diferença","Antes do prazo")])]]
 ])
]);
reg(["dtrib09:4"],"Suspensão, extinção ou exclusão? (CTN)",[
 ini("O que acontece com o crédito tributário?"),
 o("Efeito",[
  ["Suspende a exigibilidade (art. 151)",[p("O crédito existe, mas não pode ser cobrado","Moratória; depósito do montante integral; reclamações e recursos administrativos; liminar e tutela; parcelamento"),a("Continua o dever das obrigações acessórias (art. 151, par. único)")]],
  ["Extingue (art. 156)",[f("O crédito deixa de existir","Pagamento, compensação, transação, remissão, prescrição, decadência, conversão de depósito em renda, consignação julgada procedente, decisão administrativa irreformável ou judicial passada em julgado, dação em pagamento de imóveis")]],
  ["Exclui (art. 175)",[f("Impede a constituição do crédito","Isenção e anistia; a obrigação acessória segue exigível (art. 175, par. único)")]]
 ])
]);
reg(["dtrib10:3","dtrib10:4","dtrib08:4"],"Decadência e prescrição (CTN)",[
 ini("Prazo de 5 anos para a Fazenda"),
 q("Já houve lançamento (crédito constituído)?",
  [p("Prescrição: cobrar judicialmente (art. 174)","5 anos da constituição definitiva do crédito"),
   q("Há causa de interrupção?",[f("O prazo recomeça","Despacho que ordena a citação, protesto, ato judicial que constitua em mora, ato inequívoco de reconhecimento do débito")],[f("Prescreve em 5 anos","Extingue o crédito (art. 156, V)")])],
  [p("Decadência: constituir o crédito (art. 173)","Regra geral: 5 anos do primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido feito"),
   q("É tributo por homologação, com pagamento antecipado?",[f("Conta-se do fato gerador (art. 150, § 4º)","Salvo dolo, fraude ou simulação")],[f("Regra do art. 173, I","Anulado lançamento por vício formal, 5 anos da decisão definitiva (II)")])])
]);
reg(["dtrib07:0","dtrib07:1","dtrib07:2","dtrib07:3"],"Quem responde pelo crédito? (arts. 121 a 137)",[
 ini("Não é o contribuinte quem paga"),
 o("Hipótese",[
  ["Substituição / responsabilidade da lei (art. 128)",[f("Terceiro vinculado ao fato gerador","A lei atribui a responsabilidade, excluindo ou não a do contribuinte")]],
  ["Sucessão (arts. 129 a 133)",[p("Bens, empresa ou fundo de comércio","Adquirente responde; se o alienante cessa a atividade, integralmente, senão subsidiariamente (art. 133)")]],
  ["Terceiros (arts. 134 e 135)",[q("Atuou com excesso de poderes ou infração à lei, contrato ou estatuto?",[f("Responsabilidade pessoal (art. 135)")],[f("Subsidiária, se impossível exigir do contribuinte (art. 134)")])]],
  ["Infrações (art. 136)",[f("Responsabilidade objetiva","Independe da intenção; denúncia espontânea exclui multa moratória (art. 138)")]]
 ])
]);
})();
