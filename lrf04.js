/* LRF — Módulo 04: Despesa pública e despesas com pessoal (arts. 15 a 24) */
window.MOD = window.MOD || {};
window.MOD.lrf04 = (function(){
"use strict";

var CARDS = [
  ["O que diz o art. 15 da LRF?","Serão consideradas <b>não autorizadas, irregulares e lesivas ao patrimônio público</b> a geração de despesa ou assunção de obrigação que <b>não atendam o disposto nos arts. 16 e 17</b>."],
  ["O que deve acompanhar a criação, expansão ou aperfeiçoamento de ação governamental que aumente a despesa (art. 16)?","<b>I</b> — <b>estimativa do impacto orçamentário-financeiro</b> no exercício em que deva entrar em vigor e nos <b>dois subsequentes</b>; <b>II</b> — <b>declaração do ordenador da despesa</b> de que o aumento tem <b>adequação orçamentária e financeira com a LOA</b> e <b>compatibilidade com o PPA e a LDO</b>."],
  ["O que é despesa <b>adequada</b> com a LOA (art. 16, § 1º, I)?","A despesa objeto de <b>dotação específica e suficiente</b>, ou abrangida por <b>crédito genérico</b>, de forma que, somadas todas as despesas da mesma espécie realizadas e a realizar, <b>não sejam ultrapassados os limites</b> estabelecidos para o exercício."],
  ["O que é despesa <b>compatível</b> com o PPA e a LDO (art. 16, § 1º, II)?","A despesa que se <b>conforme com as diretrizes, objetivos, prioridades e metas</b> previstos nesses instrumentos e <b>não infrinja qualquer de suas disposições</b>."],
  ["O que acompanha a estimativa de impacto (art. 16, § 2º)?","As <b>premissas e a metodologia de cálculo</b> utilizadas."],
  ["Qual a ressalva do art. 16, § 3º?","Ressalva-se a <b>despesa considerada irrelevante</b>, nos termos em que dispuser a <b>LDO</b>."],
  ["As exigências do art. 16 são condição prévia para quê (§ 4º)?","<b>I</b> — <b>empenho e licitação</b> de serviços, fornecimento de bens ou execução de obras; <b>II</b> — <b>desapropriação de imóveis urbanos</b> do art. 182, § 3º, da CF."],
  ["O que é despesa obrigatória de caráter continuado (art. 17)?","A <b>despesa corrente</b> derivada de <b>lei, medida provisória ou ato administrativo normativo</b> que fixem para o ente a <b>obrigação legal de sua execução por período superior a dois exercícios</b>."],
  ["Despesa de capital pode ser obrigatória de caráter continuado?","<b>Não.</b> O art. 17 fala expressamente em <b>despesa corrente</b>."],
  ["Com o que devem ser instruídos os atos que criam ou aumentam DOCC (art. 17, § 1º)?","Com a <b>estimativa de impacto do art. 16, I</b>, e devem <b>demonstrar a origem dos recursos para seu custeio</b>."],
  ["O que o art. 17, § 2º, exige além disso?","<b>Comprovação de que a despesa não afetará as metas de resultados fiscais</b> do Anexo de Metas Fiscais, devendo seus efeitos, nos períodos seguintes, ser <b>compensados pelo aumento permanente de receita ou pela redução permanente de despesa</b>."],
  ["O que é aumento permanente de receita (art. 17, § 3º)?","O proveniente da <b>elevação de alíquotas</b>, <b>ampliação da base de cálculo</b>, <b>majoração ou criação de tributo ou contribuição</b>."],
  ["Quando a DOCC pode ser executada (art. 17, § 5º)?","<b>Não será executada antes da implementação das medidas de compensação</b>, as quais <b>integrarão o instrumento que a criar ou aumentar</b>."],
  ["A quem não se aplica a exigência do art. 17, § 1º (§ 6º)?","Às despesas destinadas ao <b>serviço da dívida</b> e ao <b>reajustamento de remuneração de pessoal</b> do art. 37, X, da CF (revisão geral anual)."],
  ["O que o art. 17, § 7º, equipara a aumento de despesa?","A <b>prorrogação</b> de despesa criada por <b>prazo determinado</b>."],
  ["O que compõe a despesa total com pessoal (art. 18)?","O <b>somatório dos gastos do ente com ativos, inativos e pensionistas</b>, relativos a mandatos eletivos, cargos, funções ou empregos, civis, militares e de membros de Poder, com quaisquer <b>espécies remuneratórias</b>, inclusive <b>encargos sociais e contribuições recolhidas pelo ente às entidades de previdência</b>."],
  ["Como se contabilizam os contratos de terceirização de mão de obra (art. 18, § 1º)?","Os que se referem à <b>substituição de servidores e empregados públicos</b> são contabilizados como <b>“Outras Despesas de Pessoal”</b>."],
  ["Como se apura a despesa total com pessoal (art. 18, § 2º)?","Somando-se a realizada <b>no mês em referência com as dos onze imediatamente anteriores</b>, adotando-se o <b>regime de competência</b>, <b>independentemente de empenho</b>."],
  ["Quais os limites globais de despesa com pessoal (art. 19)?","<b>União: 50%</b> da RCL · <b>Estados: 60%</b> · <b>Municípios: 60%</b>."],
  ["Que despesas não se computam na verificação dos limites (art. 19, § 1º)?","Indenização por <b>demissão</b>; <b>incentivos à demissão voluntária</b>; convocação extraordinária do Congresso; <b>decisão judicial e competência de período anterior</b> ao da apuração; pessoal do <b>DF, Amapá e Roraima</b> custeado pela União; e <b>inativos custeados por contribuições dos segurados</b>, compensação previdenciária e receitas próprias do fundo."],
  ["Onde entram as despesas com pessoal decorrentes de sentenças judiciais (art. 19, § 2º)?","Serão <b>incluídas no limite do respectivo Poder ou órgão</b>, observado o inciso IV do § 1º."],
  ["Repartição do limite na esfera <b>federal</b> (art. 20, I)","<b>2,5%</b> Legislativo, incluído o TCU · <b>6%</b> Judiciário · <b>40,9%</b> Executivo · <b>0,6%</b> Ministério Público da União. Total: <b>50%</b>."],
  ["Repartição do limite na esfera <b>estadual</b> (art. 20, II)","<b>3%</b> Legislativo, incluído o TCE · <b>6%</b> Judiciário · <b>49%</b> Executivo · <b>2%</b> Ministério Público dos Estados. Total: <b>60%</b>."],
  ["Repartição do limite na esfera <b>municipal</b> (art. 20, III)","<b>6%</b> Legislativo, incluído o TCM quando houver · <b>54%</b> Executivo. Total: <b>60%</b>."],
  ["Qual o limite do Judiciário estadual — e por que ele importa aqui?","<b>6% da RCL</b> (art. 20, II, b). É o limite dentro do qual o <b>TJPR</b> precisa caber."],
  ["Como se repartem os limites dentro do Legislativo e do Judiciário (art. 20, § 1º)?","Entre seus <b>órgãos</b>, <b>proporcionalmente à média das despesas com pessoal</b>, em % da RCL, verificadas nos <b>três exercícios financeiros imediatamente anteriores</b> ao da publicação da LRF."],
  ["O que se entende por <b>órgão</b> (art. 20, § 2º)?","O <b>Ministério Público</b>; no <b>Legislativo</b>, as Casas e os Tribunais de Contas; no <b>Judiciário</b>, os tribunais do art. 92 da CF (federal) e o Tribunal de Justiça e outros (estadual)."],
  ["Qual a regra do art. 20, § 4º?","Nos Estados em que houver <b>Tribunal de Contas dos Municípios</b>, os percentuais do Legislativo e do Executivo estaduais serão, respectivamente, <b>acrescido e reduzido em 0,4%</b> — ou seja, 3,4% e 48,6%."],
  ["O que o art. 21, I, considera nulo de pleno direito?","O ato que <b>provoque aumento da despesa com pessoal</b> e não atenda às exigências dos <b>arts. 16 e 17</b>, ao art. 37, XIII, e ao art. 169, § 1º, da CF, ou ao <b>limite legal de comprometimento com inativos</b>."],
  ["Qual a regra dos 180 dias (art. 21, II)?","É <b>nulo de pleno direito</b> o ato de que resulte <b>aumento da despesa com pessoal</b> nos <b>180 dias anteriores ao final do mandato</b> do titular de Poder ou órgão."],
  ["O que diz o art. 21, III?","É nulo o ato de que resulte aumento da despesa com pessoal que <b>preveja parcelas a serem implementadas em períodos posteriores ao final do mandato</b>."],
  ["O que a LC nº 173/2020 acrescentou ao art. 21 (inciso IV)?","Tornou nula a <b>aprovação, edição ou sanção</b>, pelos chefes dos Poderes e do MP, de <b>plano de alteração, reajuste e reestruturação de carreiras</b>, ou a <b>nomeação de aprovados em concurso</b>, quando resultar em aumento de despesa nos 180 dias finais do mandato ou com parcelas posteriores a ele."],
  ["As restrições dos incisos II a IV valem na reeleição (art. 21, § 1º)?","<b>Sim</b> — aplicam-se <b>inclusive durante o período de recondução ou reeleição</b>, e somente aos <b>titulares ocupantes de cargo eletivo</b> dos Poderes do art. 20."],
  ["Com que periodicidade se verifica o cumprimento dos limites (art. 22)?","Ao final de <b>cada quadrimestre</b>."],
  ["O que é o <b>limite prudencial</b> (art. 22, parágrafo único)?","<b>95% do limite</b> do Poder ou órgão. Atingido, disparam cinco vedações."],
  ["Quais as vedações do limite prudencial?","<b>I</b> concessão de vantagem, aumento, reajuste ou adequação de remuneração; <b>II</b> criação de cargo, emprego ou função; <b>III</b> alteração de estrutura de carreira que implique aumento de despesa; <b>IV</b> provimento de cargo público, admissão ou contratação a qualquer título; <b>V</b> contratação de hora extra."],
  ["Quais as ressalvas às vedações do limite prudencial?","No <b>I</b>: derivados de <b>sentença judicial</b>, de <b>determinação legal ou contratual</b> e a <b>revisão geral anual</b> do art. 37, X. No <b>IV</b>: <b>reposição decorrente de aposentadoria ou falecimento</b> nas áreas de <b>educação, saúde e segurança</b>. No <b>V</b>: convocação extraordinária e situações previstas na LDO."],
  ["Ultrapassado o limite, em quanto tempo o excesso deve ser eliminado (art. 23)?","Nos <b>dois quadrimestres seguintes</b>, sendo <b>pelo menos um terço no primeiro</b>."],
  ["Quais providências constitucionais o art. 23 invoca?","As dos <b>§§ 3º e 4º do art. 169 da CF</b>: redução de pelo menos <b>20% das despesas com cargos em comissão e funções de confiança</b> e <b>exoneração dos servidores não estáveis</b>; persistindo, servidor <b>estável</b> poderá perder o cargo."],
  ["O que o STF decidiu sobre os §§ 1º e 2º do art. 23?","Declarou <b>inconstitucionais</b> (ADI 2.238) as previsões de <b>redução dos valores atribuídos aos cargos</b> e de <b>redução temporária da jornada com adequação dos vencimentos</b>, por violarem a <b>irredutibilidade de vencimentos</b>."],
  ["Quais as sanções institucionais se o excesso não for eliminado (art. 23, § 3º)?","Enquanto perdurar o excesso, o ente <b>não poderá</b>: <b>I</b> receber <b>transferências voluntárias</b>; <b>II</b> obter <b>garantia</b>, direta ou indireta, de outro ente; <b>III</b> contratar <b>operações de crédito</b>."],
  ["Quais as ressalvas às operações de crédito vedadas?","As destinadas ao <b>refinanciamento da dívida mobiliária</b> e as que visem à <b>redução das despesas com pessoal</b>."],
  ["Qual a regra do art. 23, § 4º?","As restrições do § 3º aplicam-se <b>imediatamente</b> se a despesa com pessoal exceder o limite no <b>primeiro quadrimestre do último ano do mandato</b>."],
  ["O que exige o art. 24 quanto à seguridade social?","Nenhum <b>benefício ou serviço relativo à seguridade social</b> poderá ser <b>criado, majorado ou estendido</b> sem a <b>indicação da fonte de custeio total</b> (art. 195, § 5º, da CF), atendidas ainda as exigências do art. 17."],
  ["Quais aumentos são dispensados da compensação do art. 17 (art. 24, § 1º)?","<b>I</b> concessão de benefício a quem <b>satisfaça as condições de habilitação</b>; <b>II</b> <b>expansão quantitativa</b> do atendimento e dos serviços; <b>III</b> <b>reajustamento</b> do valor do benefício para <b>preservar seu valor real</b>."],
  ["A quem se aplica o art. 24 (§ 2º)?","A benefício ou serviço de <b>saúde, previdência e assistência social</b>, inclusive os destinados aos <b>servidores públicos e militares</b>, ativos e inativos, e aos <b>pensionistas</b>."],
  ["Limite de alerta × limite prudencial × limite máximo","<b>90%</b> → alerta emitido pelo Tribunal de Contas (art. 59, § 1º, II). <b>95%</b> → limite prudencial, com as cinco vedações do art. 22. <b>100%</b> → limite máximo, com a recondução do art. 23."]
];

var QS = [
  ["Serão consideradas não autorizadas, irregulares e lesivas ao patrimônio público a geração de despesa ou assunção de obrigação que não atendam o disposto nos arts. 16 e 17 da LRF.","C","CESPE","Art. 15 — a cláusula geral de responsabilidade na geração de despesa."],
  ["A criação, expansão ou aperfeiçoamento de ação governamental que acarrete aumento da despesa será acompanhada de estimativa do impacto orçamentário-financeiro no exercício em que deva entrar em vigor e nos dois subsequentes.","C","FCC","Art. 16, I — três exercícios ao todo."],
  ["A estimativa de impacto orçamentário-financeiro alcança o exercício de entrada em vigor e os três subsequentes.","E","FGV","São os <b>dois</b> subsequentes."],
  ["A declaração de adequação orçamentária e financeira é firmada pelo ordenador da despesa.","C","CESPE","Art. 16, II."],
  ["Considera-se adequada com a lei orçamentária anual a despesa objeto de dotação específica e suficiente, ou abrangida por crédito genérico, desde que não ultrapassados os limites do exercício.","C","VUNESP","Art. 16, § 1º, I."],
  ["Considera-se compatível com o plano plurianual e a lei de diretrizes a despesa que se conforme com as diretrizes, objetivos, prioridades e metas previstos nesses instrumentos e não infrinja qualquer de suas disposições.","C","FCC","Art. 16, § 1º, II."],
  ["A estimativa de impacto orçamentário-financeiro será acompanhada das premissas e metodologia de cálculo utilizadas.","C","CESPE","Art. 16, § 2º."],
  ["A despesa considerada irrelevante, nos termos da lei de diretrizes orçamentárias, é ressalvada das exigências do art. 16.","C","FGV","Art. 16, § 3º — e quem define a irrelevância é a LDO."],
  ["As normas do art. 16 constituem condição prévia para o empenho e a licitação de serviços, fornecimento de bens ou execução de obras.","C","FCC","Art. 16, § 4º, I."],
  ["As exigências do art. 16 constituem condição prévia para a desapropriação de imóveis urbanos de que trata o art. 182, § 3º, da Constituição.","C","CESPE","Art. 16, § 4º, II."],
  ["Considera-se obrigatória de caráter continuado a despesa corrente derivada de lei, medida provisória ou ato administrativo normativo que fixem para o ente a obrigação legal de sua execução por período superior a dois exercícios.","C","VUNESP","Art. 17, caput — literalidade muito cobrada."],
  ["Despesas de capital podem ser classificadas como obrigatórias de caráter continuado, desde que decorram de lei.","E","FCC","O art. 17 exige que seja <b>despesa corrente</b>."],
  ["É obrigatória de caráter continuado a despesa corrente cuja execução tenha sido fixada por período superior a um exercício.","E","CESPE","O período deve ser <b>superior a dois exercícios</b>."],
  ["Os atos que criarem ou aumentarem despesa obrigatória de caráter continuado deverão demonstrar a origem dos recursos para seu custeio.","C","FGV","Art. 17, § 1º, ao lado da estimativa de impacto."],
  ["A criação de despesa obrigatória de caráter continuado exige comprovação de que não afetará as metas de resultados fiscais, com compensação por aumento permanente de receita ou redução permanente de despesa.","C","CESPE","Art. 17, § 2º."],
  ["Considera-se aumento permanente de receita o proveniente da elevação de alíquotas, ampliação da base de cálculo, majoração ou criação de tributo ou contribuição.","C","FCC","Art. 17, § 3º — conceito fechado."],
  ["Configura aumento permanente de receita, para fins de compensação, o ingresso extraordinário decorrente de alienação de bens.","E","FGV","O art. 17, § 3º, lista apenas medidas de natureza tributária permanente."],
  ["A despesa obrigatória de caráter continuado poderá ser executada durante a tramitação das medidas de compensação.","E","CESPE","Art. 17, § 5º: <b>não será executada antes</b> da implementação das medidas."],
  ["As exigências do art. 17, § 1º, não se aplicam às despesas destinadas ao serviço da dívida nem ao reajustamento de remuneração de pessoal de que trata o art. 37, X, da Constituição.","C","VUNESP","Art. 17, § 6º — a revisão geral anual está fora."],
  ["Considera-se aumento de despesa a prorrogação daquela criada por prazo determinado.","C","FCC","Art. 17, § 7º."],
  ["A despesa total com pessoal compreende os gastos com ativos, inativos e pensionistas, inclusive encargos sociais e contribuições recolhidas pelo ente às entidades de previdência.","C","CESPE","Art. 18, caput."],
  ["Os valores dos contratos de terceirização de mão de obra referentes à substituição de servidores e empregados públicos são contabilizados como Outras Despesas de Pessoal.","C","FGV","Art. 18, § 1º — entram no cômputo do limite."],
  ["Todos os contratos de terceirização de mão de obra são contabilizados como Outras Despesas de Pessoal.","E","FCC","Apenas os que se referem à <b>substituição de servidores e empregados públicos</b>."],
  ["A despesa total com pessoal será apurada somando-se a realizada no mês em referência com as dos onze imediatamente anteriores, adotando-se o regime de competência.","C","CESPE","Art. 18, § 2º — doze meses móveis, independentemente de empenho."],
  ["A apuração da despesa total com pessoal adota o regime de caixa e depende do empenho.","E","VUNESP","Adota o <b>regime de competência</b> e independe de empenho."],
  ["O limite de despesa total com pessoal da União é de 50% da receita corrente líquida.","C","FCC","Art. 19, I."],
  ["Os limites de despesa total com pessoal dos Estados e dos Municípios correspondem a 60% da receita corrente líquida.","C","CESPE","Art. 19, II e III."],
  ["Não serão computadas, na verificação dos limites, as despesas de indenização por demissão de servidores ou empregados e as relativas a incentivos à demissão voluntária.","C","FGV","Art. 19, § 1º, I e II."],
  ["São computadas no limite as despesas com inativos custeadas com recursos provenientes da arrecadação de contribuições dos segurados.","E","FCC","O art. 19, § 1º, VI, a, as exclui expressamente."],
  ["As despesas com pessoal decorrentes de sentenças judiciais serão incluídas no limite do respectivo Poder ou órgão.","C","CESPE","Art. 19, § 2º."],
  ["Na esfera federal, o limite de despesa com pessoal do Poder Judiciário é de 6% da receita corrente líquida.","C","VUNESP","Art. 20, I, b."],
  ["Na esfera federal, cabem 2,5% ao Poder Legislativo, incluído o Tribunal de Contas da União.","C","FCC","Art. 20, I, a."],
  ["Na esfera federal, o Ministério Público da União tem limite de 2% da receita corrente líquida.","E","CESPE","São <b>0,6%</b> (art. 20, I, d). Os 2% são do MP dos Estados."],
  ["Na esfera estadual, cabem 3% ao Legislativo, incluído o Tribunal de Contas do Estado, 6% ao Judiciário, 49% ao Executivo e 2% ao Ministério Público.","C","FGV","Art. 20, II — somam exatamente 60%."],
  ["Na esfera municipal, cabem 6% ao Legislativo, incluído o Tribunal de Contas do Município quando houver, e 54% ao Executivo.","C","FCC","Art. 20, III — somam 60%."],
  ["Nos Estados em que houver Tribunal de Contas dos Municípios, os percentuais do Legislativo e do Executivo estaduais serão, respectivamente, acrescidos e reduzidos em 0,4%.","C","CESPE","Art. 20, § 4º — passam a 3,4% e 48,6%."],
  ["Nos Poderes Legislativo e Judiciário, os limites serão repartidos entre os órgãos proporcionalmente à média das despesas com pessoal verificadas nos três exercícios imediatamente anteriores ao da publicação da LRF.","C","VUNESP","Art. 20, § 1º."],
  ["É nulo de pleno direito o ato que provoque aumento da despesa com pessoal e não atenda às exigências dos arts. 16 e 17 da LRF.","C","FCC","Art. 21, I, a."],
  ["É nulo de pleno direito o ato de que resulte aumento da despesa com pessoal expedido nos 180 dias anteriores ao final do mandato do titular de Poder ou órgão.","C","CESPE","Art. 21, II — a regra dos cento e oitenta dias."],
  ["A vedação de aumento de despesa com pessoal alcança os 120 dias anteriores ao final do mandato.","E","FGV","São <b>180 dias</b>."],
  ["É nulo o ato de que resulte aumento da despesa com pessoal que preveja parcelas a serem implementadas em períodos posteriores ao final do mandato.","C","FCC","Art. 21, III — impede o parcelamento que transfere o ônus ao sucessor."],
  ["As restrições relativas ao fim do mandato não se aplicam durante o período de reeleição.","E","CESPE","Art. 21, § 1º, I: aplicam-se <b>inclusive</b> durante recondução ou reeleição."],
  ["A verificação do cumprimento dos limites de despesa com pessoal será realizada ao final de cada quadrimestre.","C","VUNESP","Art. 22, caput."],
  ["A verificação do cumprimento dos limites de despesa com pessoal é semestral.","E","FCC","É <b>quadrimestral</b>."],
  ["Se a despesa total com pessoal exceder a 95% do limite, são vedados ao Poder ou órgão a criação de cargo, emprego ou função.","C","CESPE","Art. 22, parágrafo único, II — o chamado limite prudencial."],
  ["Atingido o limite prudencial, é vedada a concessão de vantagem, aumento, reajuste ou adequação de remuneração, ressalvados os derivados de sentença judicial ou de determinação legal ou contratual.","C","FGV","Art. 22, parágrafo único, I — ressalvada também a revisão geral anual."],
  ["Atingido o limite prudencial, o provimento de cargo público é vedado sem qualquer exceção.","E","FCC","Ressalva-se a <b>reposição decorrente de aposentadoria ou falecimento</b> nas áreas de <b>educação, saúde e segurança</b>."],
  ["Atingido o limite prudencial, é vedada a contratação de hora extra, salvo nas situações previstas na lei de diretrizes orçamentárias.","C","CESPE","Art. 22, parágrafo único, V."],
  ["O limite prudencial corresponde a 90% do limite de despesa total com pessoal.","E","VUNESP","O prudencial é <b>95%</b>. Os 90% correspondem ao <b>limite de alerta</b> do art. 59, § 1º, II."],
  ["Ultrapassado o limite de despesa total com pessoal, o percentual excedente terá de ser eliminado nos dois quadrimestres seguintes, sendo pelo menos um terço no primeiro.","C","FCC","Art. 23, caput."],
  ["Ultrapassado o limite, o excedente deve ser eliminado nos três quadrimestres seguintes, sendo metade no primeiro.","E","CESPE","São <b>dois quadrimestres</b>, com pelo menos <b>um terço</b> no primeiro."],
  ["Entre as providências para a recondução da despesa com pessoal estão a redução de pelo menos 20% das despesas com cargos em comissão e funções de confiança e a exoneração dos servidores não estáveis.","C","FGV","Art. 169, § 3º, da CF, invocado pelo art. 23 da LRF."],
  ["O Supremo Tribunal Federal declarou inconstitucional a previsão de redução temporária da jornada de trabalho com adequação dos vencimentos à nova carga horária.","C","CESPE","ADI 2.238 — violação da irredutibilidade de vencimentos."],
  ["Não alcançada a redução no prazo, e enquanto perdurar o excesso, o ente não poderá receber transferências voluntárias nem obter garantia, direta ou indireta, de outro ente.","C","FCC","Art. 23, § 3º, I e II."],
  ["Não alcançada a redução no prazo, o ente fica impedido de contratar qualquer operação de crédito, sem exceção.","E","VUNESP","Ressalvam-se as destinadas ao <b>refinanciamento da dívida mobiliária</b> e as que visem à <b>redução das despesas com pessoal</b>."],
  ["As restrições do art. 23, § 3º, aplicam-se imediatamente se a despesa total com pessoal exceder o limite no primeiro quadrimestre do último ano do mandato.","C","CESPE","Art. 23, § 4º."],
  ["Nenhum benefício ou serviço relativo à seguridade social poderá ser criado, majorado ou estendido sem a indicação da fonte de custeio total.","C","FGV","Art. 24 da LRF e art. 195, § 5º, da CF."],
  ["É dispensada da compensação do art. 17 o aumento de despesa decorrente da concessão de benefício a quem satisfaça as condições de habilitação previstas na legislação.","C","FCC","Art. 24, § 1º, I."],
  ["É dispensada da compensação a expansão quantitativa do atendimento e dos serviços prestados e o reajustamento de valor do benefício para preservar seu valor real.","C","CESPE","Art. 24, § 1º, II e III."],
  ["O art. 24 da LRF aplica-se a benefício ou serviço de saúde, previdência e assistência social, inclusive os destinados aos servidores públicos e militares, ativos e inativos, e aos pensionistas.","C","VUNESP","Art. 24, § 2º."]
];

var FEY = {
  O1:{ask:"Explique as exigências dos arts. 15, 16 e 17 da LRF para a geração de despesa.",
    hint:"Comece pela cláusula do art. 15. Depois os dois incisos do art. 16 com os conceitos de adequação e compatibilidade, e por fim a DOCC com sua compensação.",
    ref:"O art. 15 da Lei de Responsabilidade Fiscal estabelece que serão consideradas não autorizadas, irregulares e lesivas ao patrimônio público a geração de despesa ou assunção de obrigação que não atendam o disposto nos arts. 16 e 17. Segundo o art. 16, a criação, expansão ou aperfeiçoamento de ação governamental que acarrete aumento da despesa será acompanhada de estimativa do impacto orçamentário-financeiro no exercício em que deva entrar em vigor e nos dois subsequentes, e de declaração do ordenador da despesa de que o aumento tem adequação orçamentária e financeira com a lei orçamentária anual e compatibilidade com o plano plurianual e a lei de diretrizes orçamentárias. Considera-se adequada a despesa objeto de dotação específica e suficiente, ou abrangida por crédito genérico, desde que, somadas todas as despesas da mesma espécie, não sejam ultrapassados os limites do exercício; e compatível, a que se conforme com as diretrizes, objetivos, prioridades e metas desses instrumentos e não infrinja qualquer de suas disposições. Ressalva-se a despesa considerada irrelevante nos termos da lei de diretrizes, e as normas do artigo constituem condição prévia para o empenho e a licitação e para a desapropriação de imóveis urbanos do art. 182, § 3º, da Constituição. Já o art. 17 define como obrigatória de caráter continuado a despesa corrente derivada de lei, medida provisória ou ato administrativo normativo que fixem para o ente a obrigação legal de sua execução por período superior a dois exercícios, exigindo que os atos que a criem ou aumentem demonstrem a origem dos recursos e comprovem que não afetarão as metas de resultados fiscais, com compensação por aumento permanente de receita ou redução permanente de despesa; a despesa não será executada antes da implementação dessas medidas, ficando de fora da exigência o serviço da dívida e a revisão geral anual de remuneração."},
  O2:{ask:"Explique o conceito e a apuração da despesa total com pessoal e seus limites globais.",
    hint:"Art. 18 com a terceirização e os doze meses de competência; art. 19 com os três percentuais e as exclusões.",
    ref:"Entende-se como despesa total com pessoal, nos termos do art. 18 da Lei de Responsabilidade Fiscal, o somatório dos gastos do ente da Federação com os ativos, os inativos e os pensionistas, relativos a mandatos eletivos, cargos, funções ou empregos, civis, militares e de membros de Poder, com quaisquer espécies remuneratórias, tais como vencimentos e vantagens, fixas e variáveis, subsídios, proventos da aposentadoria, reformas e pensões, inclusive adicionais, gratificações, horas extras e vantagens pessoais de qualquer natureza, bem como encargos sociais e contribuições recolhidas pelo ente às entidades de previdência. Os valores dos contratos de terceirização de mão de obra que se referem à substituição de servidores e empregados públicos são contabilizados como Outras Despesas de Pessoal. A apuração faz-se somando a despesa realizada no mês em referência com as dos onze imediatamente anteriores, adotando-se o regime de competência, independentemente de empenho. Quanto aos limites, o art. 19 fixa, para os fins do art. 169 da Constituição, que a despesa total com pessoal não poderá exceder, em cada período de apuração, cinquenta por cento da receita corrente líquida na União e sessenta por cento nos Estados e nos Municípios, não se computando, entre outras, as despesas de indenização por demissão, os incentivos à demissão voluntária, as decorrentes de decisão judicial de competência de período anterior ao da apuração e as despesas com inativos custeadas por contribuições dos segurados, pela compensação previdenciária e por receitas próprias do fundo."},
  O3:{ask:"Explique a repartição dos limites de despesa com pessoal entre Poderes e órgãos.",
    hint:"Os três blocos do art. 20 com os percentuais exatos, o critério de repartição interna e a regra do TCM.",
    ref:"O art. 20 da Lei de Responsabilidade Fiscal reparte os limites globais do art. 19 entre os Poderes e órgãos. Na esfera federal, dentro dos cinquenta por cento, cabem dois vírgula cinco por cento ao Legislativo, incluído o Tribunal de Contas da União, seis por cento ao Judiciário, quarenta vírgula nove por cento ao Executivo e zero vírgula seis por cento ao Ministério Público da União. Na esfera estadual, dentro dos sessenta por cento, cabem três por cento ao Legislativo, incluído o Tribunal de Contas do Estado, seis por cento ao Judiciário, quarenta e nove por cento ao Executivo e dois por cento ao Ministério Público dos Estados. Na esfera municipal, também dentro dos sessenta por cento, cabem seis por cento ao Legislativo, incluído o Tribunal de Contas do Município quando houver, e cinquenta e quatro por cento ao Executivo. Nos Poderes Legislativo e Judiciário de cada esfera, os limites são repartidos entre seus órgãos de forma proporcional à média das despesas com pessoal, em percentual da receita corrente líquida, verificadas nos três exercícios financeiros imediatamente anteriores ao da publicação da lei complementar, entendendo-se por órgão o Ministério Público, as Casas legislativas e os Tribunais de Contas, e, no Judiciário, os tribunais do art. 92 da Constituição e, na esfera estadual, o Tribunal de Justiça e outros que houver. Por fim, nos Estados em que houver Tribunal de Contas dos Municípios, os percentuais do Legislativo e do Executivo estaduais serão, respectivamente, acrescido e reduzido em zero vírgula quatro por cento."},
  O4:{ask:"Explique o controle dos limites: nulidades do art. 21, limite prudencial e recondução do art. 23.",
    hint:"Os três degraus — alerta, prudencial e máximo —, as vedações com suas ressalvas, o prazo de recondução e as sanções institucionais.",
    ref:"O art. 21 da Lei de Responsabilidade Fiscal declara nulo de pleno direito o ato que provoque aumento da despesa com pessoal sem atender às exigências dos arts. 16 e 17 e aos comandos do art. 37, XIII, e do art. 169, § 1º, da Constituição, bem como o ato de que resulte aumento da despesa com pessoal nos cento e oitenta dias anteriores ao final do mandato do titular de Poder ou órgão, ou que preveja parcelas a serem implementadas em períodos posteriores ao final do mandato, restrições que se aplicam inclusive durante o período de recondução ou reeleição. A verificação do cumprimento dos limites é realizada ao final de cada quadrimestre. Se a despesa total com pessoal exceder noventa e cinco por cento do limite — o chamado limite prudencial —, ficam vedados ao Poder ou órgão que houver incorrido no excesso a concessão de vantagem, aumento, reajuste ou adequação de remuneração, salvo os derivados de sentença judicial ou de determinação legal ou contratual e ressalvada a revisão geral anual; a criação de cargo, emprego ou função; a alteração de estrutura de carreira que implique aumento de despesa; o provimento de cargo público, admissão ou contratação de pessoal a qualquer título, ressalvada a reposição decorrente de aposentadoria ou falecimento de servidores das áreas de educação, saúde e segurança; e a contratação de hora extra, salvo nas situações previstas na lei de diretrizes orçamentárias. Ultrapassado o limite, o percentual excedente terá de ser eliminado nos dois quadrimestres seguintes, sendo pelo menos um terço no primeiro, adotando-se as providências dos §§ 3º e 4º do art. 169 da Constituição. Não alcançada a redução no prazo, e enquanto perdurar o excesso, o ente não poderá receber transferências voluntárias, obter garantia de outro ente nem contratar operações de crédito, ressalvadas as destinadas ao refinanciamento da dívida mobiliária e as que visem à redução das despesas com pessoal, restrições que se aplicam imediatamente se o excesso ocorrer no primeiro quadrimestre do último ano do mandato."}
};

function sl(h,b){return {h:h,b:b};}

var TEORIA = {
  P1:[
    sl("Art. 15 — a cláusula geral",
      '<div class="box"><span class="bl">LC nº 101/2000, art. 15</span>'+
      '<p>“Serão consideradas <b>não autorizadas, irregulares e lesivas ao patrimônio público</b> a geração de despesa ou assunção de obrigação que não atendam o disposto nos <b>arts. 16 e 17</b>.”</p></div>'+
      '<div class="box tip"><span class="bl">O que isso significa na prática</span><p>Descumprir o art. 16 ou o art. 17 não gera mera irregularidade formal: a despesa é tratada como <b>lesiva ao patrimônio público</b>, com reflexos em improbidade e em responsabilização do ordenador.</p></div>'),
    sl("Art. 16 — geração de despesa",
      '<div class="box"><span class="bl">Os dois requisitos do caput</span>'+
      '<ul><li><b>I</b> — <b>estimativa do impacto orçamentário-financeiro</b> no exercício em que deva entrar em vigor e nos <b>dois subsequentes</b>;</li>'+
      '<li><b>II</b> — <b>declaração do ordenador da despesa</b> de que o aumento tem <b>adequação orçamentária e financeira com a LOA</b> e <b>compatibilidade com o PPA e a LDO</b>.</li></ul></div>'+
      '<div class="chips">'+
      '<div class="chip"><span class="cn">Adequada (§ 1º, I)</span><span class="cd"><b>Dotação específica e suficiente</b>, ou abrangida por <b>crédito genérico</b> sem ultrapassar os limites do exercício.</span></div>'+
      '<div class="chip"><span class="cn">Compatível (§ 1º, II)</span><span class="cd">Conforma-se com <b>diretrizes, objetivos, prioridades e metas</b> e <b>não infringe</b> qualquer disposição.</span></div></div>'+
      '<div class="box"><span class="bl">§§ 2º a 4º</span>'+
      '<ul><li>A estimativa vem com <b>premissas e metodologia de cálculo</b>;</li>'+
      '<li>Ressalva-se a <b>despesa irrelevante</b>, nos termos da <b>LDO</b>;</li>'+
      '<li>As normas do caput são <b>condição prévia</b> para <b>empenho e licitação</b> e para a <b>desapropriação de imóveis urbanos</b> (CF, art. 182, § 3º).</li></ul></div>'),
    sl("Art. 17 — despesa obrigatória de caráter continuado",
      '<div class="box"><span class="bl">O conceito</span>'+
      '<p><b>Despesa corrente</b> derivada de <b>lei, medida provisória ou ato administrativo normativo</b> que fixem para o ente a <b>obrigação legal de sua execução por período superior a dois exercícios</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Três palavras que a banca troca</span>'+
      '<ul><li><b>Corrente</b> — despesa de capital nunca é DOCC;</li>'+
      '<li><b>Superior a dois exercícios</b> — não é “dois”, não é “um”;</li>'+
      '<li><b>Lei, MP ou ato normativo</b> — contrato não basta.</li></ul></div>'+
      '<div class="box"><span class="bl">As exigências (§§ 1º e 2º)</span>'+
      '<ul><li>Estimativa de impacto do art. 16, I;</li>'+
      '<li><b>Demonstrar a origem dos recursos</b> para o custeio;</li>'+
      '<li><b>Comprovar que não afetará as metas</b> de resultados fiscais;</li>'+
      '<li><b>Compensar</b> os efeitos futuros por <b>aumento permanente de receita</b> ou <b>redução permanente de despesa</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">§ 3º — o que é aumento permanente de receita</span><p><b>Elevação de alíquotas</b>, <b>ampliação da base de cálculo</b>, <b>majoração ou criação de tributo ou contribuição</b>. Só isso.</p></div>'+
      '<div class="box trap"><span class="bl">§§ 5º a 7º</span>'+
      '<ul><li>A despesa <b>não será executada antes</b> da implementação das medidas de compensação;</li>'+
      '<li><b>Fora da exigência</b>: <b>serviço da dívida</b> e <b>revisão geral anual</b> de remuneração (CF, art. 37, X);</li>'+
      '<li><b>Prorrogar</b> despesa criada por prazo determinado <b>é aumento de despesa</b>.</li></ul></div>'),
    sl("Art. 24 — benefícios da seguridade social",
      '<div class="box"><span class="bl">Caput</span><p>Nenhum <b>benefício ou serviço relativo à seguridade social</b> poderá ser <b>criado, majorado ou estendido</b> sem a <b>indicação da fonte de custeio total</b> (CF, art. 195, § 5º), atendidas ainda as exigências do <b>art. 17</b>.</p></div>'+
      '<div class="box tip"><span class="bl">§ 1º — três dispensas da compensação</span>'+
      '<ul><li><b>I</b> — concessão de benefício a <b>quem satisfaça as condições de habilitação</b> previstas na legislação;</li>'+
      '<li><b>II</b> — <b>expansão quantitativa</b> do atendimento e dos serviços prestados;</li>'+
      '<li><b>III</b> — <b>reajustamento</b> do valor do benefício ou serviço para <b>preservar seu valor real</b>.</li></ul>'+
      '<p>A lógica: nesses casos não há <b>criação</b> de direito novo, apenas o cumprimento do que já existe.</p></div>'+
      '<div class="box"><span class="bl">§ 2º — alcance</span><p>Aplica-se a benefício ou serviço de <b>saúde, previdência e assistência social</b>, inclusive os destinados a <b>servidores públicos e militares</b>, ativos e inativos, e a <b>pensionistas</b>.</p></div>')
  ],
  P2:[
    sl("Art. 18 — o que é despesa total com pessoal",
      '<div class="box"><span class="bl">O somatório</span>'+
      '<p>Gastos do ente com <b>ativos, inativos e pensionistas</b>, relativos a <b>mandatos eletivos, cargos, funções ou empregos, civis, militares e de membros de Poder</b>, com <b>quaisquer espécies remuneratórias</b>: vencimentos e vantagens fixas e variáveis, subsídios, proventos, reformas e pensões, adicionais, gratificações, horas extras e vantagens pessoais de qualquer natureza, além de <b>encargos sociais e contribuições recolhidas pelo ente às entidades de previdência</b>.</p></div>'+
      '<div class="box trap"><span class="bl">§ 1º — terceirização</span><p>Os valores dos contratos de terceirização de mão de obra <b>que se referem à substituição de servidores e empregados públicos</b> são contabilizados como <b>“Outras Despesas de Pessoal”</b> — e, portanto, <b>entram no limite</b>.</p>'+
      '<p>Nem toda terceirização entra: só a que <b>substitui</b> servidor. Limpeza e vigilância, em regra, não.</p></div>'+
      '<div class="box tip"><span class="bl">§ 2º — como se apura</span>'+
      '<p>Soma-se a despesa <b>do mês em referência com as dos onze imediatamente anteriores</b>, pelo <b>regime de competência</b>, <b>independentemente de empenho</b>.</p>'+
      '<p>Mesma lógica de <b>doze meses móveis</b> da RCL — numerador e denominador andam juntos.</p></div>'),
    sl("Art. 19 — os limites globais",
      '<div class="fn3">'+
      '<div class="fn"><div class="fn-top"><span class="ltr">U</span><span class="nm">União</span></div><div class="fn-b"><p><b>50%</b> da RCL</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">E</span><span class="nm">Estados</span></div><div class="fn-b"><p><b>60%</b> da RCL</p></div></div>'+
      '<div class="fn"><div class="fn-top"><span class="ltr">M</span><span class="nm">Municípios</span></div><div class="fn-b"><p><b>60%</b> da RCL</p></div></div></div>'+
      '<div class="box"><span class="bl">§ 1º — o que não se computa</span>'+
      '<ul><li><b>I</b> indenização por <b>demissão</b> de servidores ou empregados;</li>'+
      '<li><b>II</b> <b>incentivos à demissão voluntária</b>;</li>'+
      '<li><b>III</b> convocação extraordinária do Congresso Nacional;</li>'+
      '<li><b>IV</b> decorrentes de <b>decisão judicial</b> e de <b>competência de período anterior</b> ao da apuração;</li>'+
      '<li><b>V</b> pessoal do <b>DF, Amapá e Roraima</b> custeado por recursos da União;</li>'+
      '<li><b>VI</b> <b>inativos</b> custeados por <b>contribuições dos segurados</b>, pela <b>compensação previdenciária</b> ou por <b>receitas próprias do fundo</b>, inclusive alienação de ativos e superávit financeiro.</li></ul></div>'+
      '<div class="box trap"><span class="bl">§ 2º — sentenças judiciais</span><p>Observado o inciso IV, as despesas com pessoal <b>decorrentes de sentenças judiciais</b> serão <b>incluídas no limite do respectivo Poder ou órgão</b>. Ou seja: exclui-se o que é de período anterior; o restante <b>entra</b>.</p></div>'),
    sl("Art. 20 — a repartição por Poder e órgão",
      '<div class="box"><span class="bl">I — Esfera federal (dentro dos 50%)</span>'+
      '<ul><li><b>2,5%</b> — Legislativo, <b>incluído o TCU</b>;</li>'+
      '<li><b>6%</b> — Judiciário;</li>'+
      '<li><b>40,9%</b> — Executivo;</li>'+
      '<li><b>0,6%</b> — Ministério Público da União.</li></ul></div>'+
      '<div class="box"><span class="bl">II — Esfera estadual (dentro dos 60%)</span>'+
      '<ul><li><b>3%</b> — Legislativo, <b>incluído o TCE</b>;</li>'+
      '<li><b>6%</b> — <b>Judiciário</b> ← é aqui que cabe o <b>TJPR</b>;</li>'+
      '<li><b>49%</b> — Executivo;</li>'+
      '<li><b>2%</b> — Ministério Público dos Estados.</li></ul></div>'+
      '<div class="box"><span class="bl">III — Esfera municipal (dentro dos 60%)</span>'+
      '<ul><li><b>6%</b> — Legislativo, incluído o <b>TCM quando houver</b>;</li>'+
      '<li><b>54%</b> — Executivo.</li></ul></div>'+
      '<div class="box tip"><span class="bl">§ 1º — repartição interna</span><p>No Legislativo e no Judiciário, os limites são repartidos <b>entre seus órgãos</b>, <b>proporcionalmente à média</b> das despesas com pessoal, em % da RCL, dos <b>três exercícios imediatamente anteriores</b> ao da publicação da LRF.</p></div>'+
      '<div class="box trap"><span class="bl">§ 4º — o ajuste do TCM estadual</span><p>Nos Estados em que houver <b>Tribunal de Contas dos Municípios</b>, o Legislativo sobe e o Executivo desce <b>0,4%</b>: <b>3,4%</b> e <b>48,6%</b>.</p></div>')
  ],
  P3:[
    sl("Art. 21 — atos nulos de pleno direito",
      '<div class="box"><span class="bl">I — descumprimento das exigências</span><p>Ato que provoque aumento da despesa com pessoal e não atenda aos <b>arts. 16 e 17</b> da LRF, ao <b>art. 37, XIII</b> (vedação de vinculação ou equiparação) e ao <b>art. 169, § 1º</b>, da CF, ou ao <b>limite de comprometimento com inativos</b>.</p></div>'+
      '<div class="box trap"><span class="bl">II — a regra dos 180 dias</span><p>É nulo o ato de que resulte aumento da despesa com pessoal expedido nos <b>180 dias anteriores ao final do mandato</b> do titular de Poder ou órgão do art. 20.</p></div>'+
      '<div class="box"><span class="bl">III — parcelas para depois do mandato</span><p>Também é nulo o ato que preveja <b>parcelas a serem implementadas em períodos posteriores ao final do mandato</b> — impede transferir o ônus ao sucessor.</p></div>'+
      '<div class="box"><span class="bl">IV — a inovação da LC nº 173/2020</span><p>É nula a <b>aprovação, edição ou sanção</b>, pelos chefes do Executivo, do Legislativo, do Judiciário e do MP, de <b>plano de alteração, reajuste e reestruturação de carreiras</b>, ou a <b>nomeação de aprovados em concurso</b>, quando resultar em aumento de despesa nos <b>180 dias finais</b> do mandato do titular do Executivo ou com <b>parcelas posteriores</b> a ele.</p></div>'+
      '<div class="box tip"><span class="bl">§ 1º — reeleição não salva</span><p>As restrições dos incisos II a IV aplicam-se <b>inclusive durante o período de recondução ou reeleição</b>, e somente aos <b>titulares ocupantes de cargo eletivo</b> dos Poderes do art. 20.</p></div>'),
    sl("Art. 22 — verificação e limite prudencial",
      '<div class="box"><span class="bl">Caput</span><p>A verificação do cumprimento dos limites será realizada ao final de <b>cada quadrimestre</b>.</p></div>'+
      '<div class="box trap"><span class="bl">Parágrafo único — 95% do limite</span>'+
      '<p>Excedidos <b>95% do limite</b>, são vedados ao <b>Poder ou órgão que houver incorrido no excesso</b>:</p>'+
      '<ul><li><b>I</b> concessão de <b>vantagem, aumento, reajuste ou adequação de remuneração</b> a qualquer título — <i>salvo</i> derivados de <b>sentença judicial</b> ou de <b>determinação legal ou contratual</b>, e ressalvada a <b>revisão geral anual</b> (CF, art. 37, X);</li>'+
      '<li><b>II</b> <b>criação de cargo, emprego ou função</b>;</li>'+
      '<li><b>III</b> <b>alteração de estrutura de carreira</b> que implique aumento de despesa;</li>'+
      '<li><b>IV</b> <b>provimento de cargo público, admissão ou contratação</b> a qualquer título — <i>salvo</i> <b>reposição por aposentadoria ou falecimento</b> nas áreas de <b>educação, saúde e segurança</b>;</li>'+
      '<li><b>V</b> <b>contratação de hora extra</b> — <i>salvo</i> convocação extraordinária e situações previstas na <b>LDO</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">As ressalvas são a metade da questão</span><p>A banca costuma afirmar a vedação <b>sem a ressalva</b> e pedir o julgamento. Decore as três exceções: <b>sentença/lei/contrato + revisão geral</b>, <b>reposição em educação, saúde e segurança</b>, <b>hora extra pela LDO</b>.</p></div>'),
    sl("Art. 23 — recondução ao limite",
      '<div class="box"><span class="bl">O prazo</span><p>Ultrapassado o limite do art. 20, o percentual excedente terá de ser eliminado nos <b>dois quadrimestres seguintes</b>, sendo <b>pelo menos um terço no primeiro</b>.</p></div>'+
      '<div class="box"><span class="bl">As providências (CF, art. 169, §§ 3º e 4º)</span>'+
      '<ul><li>Redução de <b>pelo menos 20%</b> das despesas com <b>cargos em comissão e funções de confiança</b>;</li>'+
      '<li><b>Exoneração dos servidores não estáveis</b>;</li>'+
      '<li>Persistindo, o <b>servidor estável</b> poderá perder o cargo, com indenização.</li></ul></div>'+
      '<div class="box trap"><span class="bl">O que o STF derrubou</span><p>Na <b>ADI 2.238</b>, o Supremo declarou <b>inconstitucionais</b> as previsões dos <b>§§ 1º e 2º</b> do art. 23 que permitiam alcançar a redução pela <b>diminuição dos valores atribuídos aos cargos</b> e pela <b>redução temporária da jornada com adequação dos vencimentos</b> — ambas violam a <b>irredutibilidade de vencimentos</b>.</p></div>'+
      '<div class="box"><span class="bl">§ 3º — sanções institucionais</span>'+
      '<p>Não alcançada a redução no prazo, e <b>enquanto perdurar o excesso</b>, o ente <b>não poderá</b>:</p>'+
      '<ul><li><b>I</b> receber <b>transferências voluntárias</b>;</li>'+
      '<li><b>II</b> obter <b>garantia</b>, direta ou indireta, de outro ente;</li>'+
      '<li><b>III</b> contratar <b>operações de crédito</b> — <i>ressalvadas</i> as destinadas ao <b>refinanciamento da dívida mobiliária</b> e as que visem à <b>redução das despesas com pessoal</b>.</li></ul></div>'+
      '<div class="box tip"><span class="bl">§ 4º — fim de mandato</span><p>As restrições do § 3º aplicam-se <b>imediatamente</b> se o limite for excedido no <b>primeiro quadrimestre do último ano do mandato</b>.</p></div>'),
    sl("Os três degraus do controle",
      '<div class="box"><span class="bl">Memorize a escada</span>'+
      '<ul><li><b>90%</b> — <b>limite de alerta</b>: o Tribunal de Contas <b>alerta</b> o Poder ou órgão (art. 59, § 1º, II);</li>'+
      '<li><b>95%</b> — <b>limite prudencial</b>: disparam as <b>cinco vedações</b> do art. 22, parágrafo único;</li>'+
      '<li><b>100%</b> — <b>limite máximo</b> do art. 20: recondução em <b>dois quadrimestres</b>, com <b>1/3 no primeiro</b>, e, se não cumprida, as <b>sanções institucionais</b> do art. 23, § 3º.</li></ul></div>'+
      '<div class="box trap"><span class="bl">A troca mais cobrada</span><p>Dizer que o <b>prudencial é 90%</b>. Não: <b>90% é alerta</b>, <b>95% é prudencial</b>.</p></div>')
  ]
};

var EX = {
L1:{t:"wordbank", instr:"Monte a consequência do art. 15",
  target:["não","autorizadas",",","irregulares","e","lesivas","ao","patrimônio","público"],
  extra:["anuláveis","ineficazes","suspensas"],
  why:"É o efeito de gerar despesa sem observar os arts. 16 e 17."},

L2:{t:"multi", instr:"Marque o que deve acompanhar a criação ou expansão de ação governamental que aumente a despesa",
  options:["Estimativa do impacto orçamentário-financeiro no exercício de entrada em vigor",
           "Estimativa para os dois exercícios subsequentes",
           "Declaração do ordenador de adequação com a LOA",
           "Declaração de compatibilidade com o PPA e a LDO",
           "Autorização prévia do Tribunal de Contas",
           "Parecer do Poder Legislativo"],
  answers:[0,1,2,3],
  why:"Art. 16, I e II — nada além disso."},

L3:{t:"gap", instr:"Complete a frase",
  before:"A estimativa do impacto orçamentário-financeiro abrange o exercício em que deva entrar em vigor e ",
  after:".",
  options:["os dois subsequentes","os três subsequentes","o subsequente"],
  answer:0,
  why:"Art. 16, I — três exercícios ao todo."},

L4:{t:"match", instr:"Correlacione o conceito à sua definição (art. 16, § 1º)",
  pairs:[["Adequada com a LOA","Dotação específica e suficiente, ou crédito genérico sem exceder limites"],
         ["Compatível com PPA e LDO","Conforma-se com diretrizes, objetivos, prioridades e metas"]]},

L5:{t:"multi", instr:"Marque para o que as normas do art. 16 são condição prévia",
  options:["Empenho de despesa","Licitação de serviços, bens ou obras",
           "Desapropriação de imóveis urbanos do art. 182, § 3º, da CF",
           "Abertura de crédito extraordinário","Contratação de operação de crédito"],
  answers:[0,1,2],
  why:"Art. 16, § 4º, I e II."},

L6:{t:"gap", instr:"Complete a frase",
  before:"Ressalva-se das exigências do art. 16 a despesa considerada ", after:".",
  options:["irrelevante, nos termos da LDO","de pequeno vulto, nos termos do Decreto 93.872/86",
           "urgente, a critério do ordenador"],
  answer:0,
  why:"Art. 16, § 3º — quem define a irrelevância é a LDO."},

L7:{t:"wordbank", instr:"Monte o conceito de despesa obrigatória de caráter continuado",
  target:["despesa","corrente","derivada","de","lei",",","medida","provisória","ou","ato","administrativo","normativo"],
  extra:["de","capital","contrato","convênio"],
  why:"Com obrigação legal de execução por período <b>superior a dois exercícios</b>."},

L8:{t:"mc", instr:"É obrigatória de caráter continuado a despesa corrente cuja execução seja obrigatória por período:",
  options:["Superior a dois exercícios","De até dois exercícios",
           "Superior a um exercício","Superior a quatro exercícios"],
  answer:0,
  why:"Art. 17, caput."},

L9:{t:"sort", instr:"A despesa pode ser obrigatória de caráter continuado?",
  buckets:["Pode ser DOCC","Não pode ser DOCC"],
  items:[["Despesa corrente criada por lei, obrigatória por três exercícios",0],
         ["Despesa corrente criada por medida provisória, por quatro exercícios",0],
         ["Investimento em obra, ainda que plurianual",1],
         ["Despesa corrente obrigatória por apenas dois exercícios",1]],
  why:"Exige <b>despesa corrente</b> e prazo <b>superior a dois exercícios</b>."},

L10:{t:"multi", instr:"Marque as exigências para criar ou aumentar DOCC (art. 17, §§ 1º e 2º)",
  options:["Estimativa de impacto do art. 16, I",
           "Demonstração da origem dos recursos para custeio",
           "Comprovação de que não afetará as metas de resultados fiscais",
           "Compensação por aumento permanente de receita ou redução permanente de despesa",
           "Autorização legislativa específica",
           "Parecer prévio do Tribunal de Contas"],
  answers:[0,1,2,3],
  why:"As duas últimas não constam do art. 17."},

L11:{t:"multi", instr:"Marque o que configura aumento permanente de receita (art. 17, § 3º)",
  options:["Elevação de alíquotas","Ampliação da base de cálculo",
           "Majoração de tributo ou contribuição","Criação de tributo ou contribuição",
           "Alienação de bens","Excesso de arrecadação do exercício"],
  answers:[0,1,2,3],
  why:"Só medidas tributárias de caráter permanente."},

L12:{t:"mc", instr:"A despesa obrigatória de caráter continuado poderá ser executada:",
  options:["Somente após a implementação das medidas de compensação",
           "Imediatamente, desde que prevista na LOA",
           "Durante a tramitação das medidas de compensação",
           "A partir do exercício seguinte ao da criação"],
  answer:0,
  why:"Art. 17, § 5º — e as medidas integram o instrumento que a criar."},

L13:{t:"multi", instr:"Marque o que fica FORA da exigência do art. 17, § 1º",
  options:["Despesas destinadas ao serviço da dívida",
           "Reajustamento de remuneração de pessoal do art. 37, X, da CF",
           "Criação de novo benefício assistencial",
           "Aumento de gratificação por decisão administrativa"],
  answers:[0,1],
  why:"Art. 17, § 6º — a revisão geral anual e o serviço da dívida estão dispensados."},

L14:{t:"gap", instr:"Complete a frase",
  before:"Considera-se aumento de despesa ", after:" daquela criada por prazo determinado.",
  options:["a prorrogação","o cancelamento","a redução"], answer:0,
  why:"Art. 17, § 7º — prorrogar equivale a criar de novo."},

L15:{t:"multi", instr:"Marque o que integra a despesa total com pessoal (art. 18)",
  options:["Gastos com ativos","Gastos com inativos","Gastos com pensionistas",
           "Encargos sociais","Contribuições recolhidas pelo ente às entidades de previdência",
           "Gratificações, horas extras e vantagens pessoais",
           "Aquisição de material de consumo","Despesas com energia elétrica"],
  answers:[0,1,2,3,4,5],
  why:"Qualquer espécie remuneratória entra; custeio administrativo não."},

L16:{t:"mc", instr:"Os contratos de terceirização de mão de obra contabilizados como Outras Despesas de Pessoal são:",
  options:["Os que se referem à substituição de servidores e empregados públicos",
           "Todos os contratos de terceirização","Apenas os de limpeza e vigilância",
           "Apenas os firmados com empresas estatais"],
  answer:0,
  why:"Art. 18, § 1º — o critério é a <b>substituição</b> de servidor."},

L17:{t:"gap", instr:"Complete a frase",
  before:"A despesa total com pessoal será apurada somando-se a realizada no mês em referência com as dos onze imediatamente anteriores, adotando-se o ",
  after:", independentemente de empenho.",
  options:["regime de competência","regime de caixa","regime misto"],
  answer:0,
  why:"Art. 18, § 2º — mesma janela de doze meses móveis da RCL."},

L18:{t:"match", instr:"Correlacione o ente ao seu limite global de despesa com pessoal",
  pairs:[["União","50% da RCL"],["Estados","60% da RCL"],["Municípios","60% da RCL"]]},

L19:{t:"multi", instr:"Marque as despesas NÃO computadas na verificação dos limites (art. 19, § 1º)",
  options:["Indenização por demissão de servidores ou empregados",
           "Incentivos à demissão voluntária",
           "Decorrentes de decisão judicial de competência de período anterior ao da apuração",
           "Com inativos custeadas por contribuições dos segurados",
           "Com pessoal ativo do Poder Executivo",
           "Com gratificações de servidores efetivos"],
  answers:[0,1,2,3],
  why:"As duas últimas são o núcleo do que se computa."},

L20:{t:"sort", instr:"Qual o limite de cada Poder ou órgão na esfera estadual?",
  buckets:["3%","6%","49%","2%"],
  items:[["Legislativo, incluído o TCE",0],["Judiciário",1],
         ["Executivo",2],["Ministério Público dos Estados",3]],
  why:"Somam exatamente 60% — art. 20, II."},

L21:{t:"sort", instr:"Qual o limite de cada Poder ou órgão na esfera federal?",
  buckets:["2,5%","6%","40,9%","0,6%"],
  items:[["Legislativo, incluído o TCU",0],["Judiciário",1],
         ["Executivo",2],["Ministério Público da União",3]],
  why:"Somam exatamente 50% — art. 20, I."},

L22:{t:"mc", instr:"Na esfera municipal, a repartição do limite de 60% é:",
  options:["6% ao Legislativo, incluído o TCM quando houver, e 54% ao Executivo",
           "3% ao Legislativo e 57% ao Executivo",
           "6% ao Legislativo, 6% ao Judiciário e 48% ao Executivo",
           "2,5% ao Legislativo e 57,5% ao Executivo"],
  answer:0,
  why:"Art. 20, III — não há Judiciário nem MP municipal."},

L23:{t:"gap", instr:"Complete a frase",
  before:"Nos Estados em que houver Tribunal de Contas dos Municípios, os percentuais do Legislativo e do Executivo estaduais serão, respectivamente, acrescido e reduzido em ",
  after:".",
  options:["0,4%","1%","0,6%"], answer:0,
  why:"Art. 20, § 4º — passam a 3,4% e 48,6%."},

L24:{t:"mc", instr:"A repartição dos limites entre os órgãos do Legislativo e do Judiciário observa:",
  options:["A média das despesas com pessoal dos três exercícios anteriores ao da publicação da LRF",
           "A divisão igualitária entre os órgãos",
           "O número de servidores de cada órgão",
           "A deliberação anual da LDO"],
  answer:0,
  why:"Art. 20, § 1º — em percentual da RCL."},

L25:{t:"multi", instr:"Marque os atos nulos de pleno direito segundo o art. 21",
  options:["Ato que aumente despesa com pessoal sem atender aos arts. 16 e 17",
           "Ato de que resulte aumento de despesa com pessoal nos 180 dias anteriores ao fim do mandato",
           "Ato que preveja parcelas a implementar após o fim do mandato",
           "Sanção de plano de reestruturação de carreiras nos 180 dias finais do mandato",
           "Ato que reduza despesa com pessoal",
           "Nomeação de aprovado em concurso no primeiro ano do mandato"],
  answers:[0,1,2,3],
  why:"Reduzir despesa nunca é nulo; e a nomeação só é vedada no período final."},

L26:{t:"gap", instr:"Complete a frase",
  before:"É nulo de pleno direito o ato de que resulte aumento da despesa com pessoal expedido nos ",
  after:" anteriores ao final do mandato do titular de Poder ou órgão.",
  options:["180 dias","120 dias","90 dias"], answer:0,
  why:"Art. 21, II — dois quadrimestres do fim do mandato, aproximadamente."},

L27:{t:"mc", instr:"As restrições de fim de mandato do art. 21 aplicam-se na reeleição?",
  options:["Sim, inclusive durante o período de recondução ou reeleição",
           "Não, pois o titular permanece no cargo",
           "Somente se houver mudança de partido",
           "Somente no âmbito do Poder Executivo"],
  answer:0,
  why:"Art. 21, § 1º, I."},

L28:{t:"gap", instr:"Complete a frase",
  before:"A verificação do cumprimento dos limites de despesa com pessoal será realizada ao final de ",
  after:".",
  options:["cada quadrimestre","cada semestre","cada bimestre"], answer:0,
  why:"Art. 22, caput."},

L29:{t:"mc", instr:"O limite prudencial corresponde a:",
  options:["95% do limite","90% do limite","100% do limite","85% do limite"],
  answer:0,
  why:"Os 90% são o <b>limite de alerta</b> do art. 59, § 1º, II."},

L30:{t:"multi", instr:"Marque as vedações do limite prudencial (art. 22, parágrafo único)",
  options:["Concessão de vantagem, aumento, reajuste ou adequação de remuneração",
           "Criação de cargo, emprego ou função",
           "Alteração de estrutura de carreira que implique aumento de despesa",
           "Provimento de cargo público, admissão ou contratação de pessoal",
           "Contratação de hora extra",
           "Pagamento de despesas já empenhadas",
           "Realização de licitação para obras"],
  answers:[0,1,2,3,4],
  why:"São exatamente cinco vedações."},

L31:{t:"sort", instr:"No limite prudencial, a hipótese é vedada ou ressalvada?",
  buckets:["Vedada","Ressalvada"],
  items:[["Criação de novo cargo efetivo",0],["Reestruturação de carreira com aumento de despesa",0],
         ["Reajuste concedido por ato administrativo comum",0],
         ["Aumento derivado de sentença judicial",1],
         ["Revisão geral anual do art. 37, X, da CF",1],
         ["Reposição por aposentadoria na área da saúde",1],
         ["Hora extra prevista na LDO",1]],
  why:"As ressalvas valem metade da questão — decore as três."},

L32:{t:"gap", instr:"Complete a frase",
  before:"Ultrapassado o limite, o percentual excedente terá de ser eliminado nos dois quadrimestres seguintes, sendo pelo menos ",
  after:" no primeiro.",
  options:["um terço","metade","dois terços"], answer:0,
  why:"Art. 23, caput."},

L33:{t:"multi", instr:"Marque as providências do art. 169, §§ 3º e 4º, da CF invocadas pelo art. 23",
  options:["Redução de pelo menos 20% das despesas com cargos em comissão e funções de confiança",
           "Exoneração dos servidores não estáveis",
           "Perda do cargo do servidor estável, se insuficientes as medidas anteriores",
           "Redução da remuneração dos servidores efetivos",
           "Redução temporária da jornada com corte de vencimentos"],
  answers:[0,1,2],
  why:"As duas últimas foram declaradas <b>inconstitucionais</b> na ADI 2.238."},

L34:{t:"mc", instr:"O STF, na ADI 2.238, declarou inconstitucional a previsão de:",
  options:["Redução temporária da jornada com adequação dos vencimentos à nova carga horária",
           "Exoneração de servidores não estáveis",
           "Redução de cargos em comissão",
           "Verificação quadrimestral dos limites"],
  answer:0,
  why:"Violação à irredutibilidade de vencimentos."},

L35:{t:"multi", instr:"Marque as sanções aplicáveis enquanto perdurar o excesso (art. 23, § 3º)",
  options:["Não receber transferências voluntárias",
           "Não obter garantia, direta ou indireta, de outro ente",
           "Não contratar operações de crédito",
           "Não realizar licitações",
           "Não executar o orçamento aprovado"],
  answers:[0,1,2],
  why:"As sanções são institucionais e alcançam o <b>ente</b>, não a execução ordinária."},

L36:{t:"multi", instr:"Marque as operações de crédito ressalvadas da vedação do art. 23, § 3º, III",
  options:["Destinadas ao refinanciamento da dívida mobiliária",
           "Que visem à redução das despesas com pessoal",
           "Destinadas a investimentos em infraestrutura",
           "Por antecipação de receita orçamentária"],
  answers:[0,1],
  why:"São as duas únicas ressalvas."},

L37:{t:"mc", instr:"As restrições do art. 23, § 3º, aplicam-se imediatamente quando o limite é excedido:",
  options:["No primeiro quadrimestre do último ano do mandato",
           "Em qualquer quadrimestre do último ano do mandato",
           "No último quadrimestre de qualquer ano",
           "Em dois quadrimestres consecutivos"],
  answer:0,
  why:"Art. 23, § 4º."},

L38:{t:"order", instr:"Ordene os três degraus do controle da despesa com pessoal",
  items:["90% — limite de alerta, comunicado pelo Tribunal de Contas",
         "95% — limite prudencial, com as cinco vedações do art. 22",
         "100% — limite máximo, com recondução em dois quadrimestres",
         "Excesso não eliminado — sanções institucionais do art. 23, § 3º"],
  why:"Alerta → prudencial → máximo → sanção."},

L39:{t:"gap", instr:"Complete a frase",
  before:"Nenhum benefício ou serviço relativo à seguridade social poderá ser criado, majorado ou estendido sem a ",
  after:".",
  options:["indicação da fonte de custeio total","autorização do Tribunal de Contas",
           "previsão no plano plurianual"],
  answer:0,
  why:"Art. 24 da LRF e art. 195, § 5º, da CF."},

L40:{t:"multi", instr:"Marque os aumentos dispensados da compensação do art. 17 (art. 24, § 1º)",
  options:["Concessão de benefício a quem satisfaça as condições de habilitação",
           "Expansão quantitativa do atendimento e dos serviços prestados",
           "Reajustamento de valor do benefício para preservar seu valor real",
           "Criação de novo benefício assistencial",
           "Ampliação do rol de beneficiários por nova lei"],
  answers:[0,1,2],
  why:"Nas três primeiras não há criação de direito novo — apenas cumprimento do que já existe."},

L41:{t:"mc", instr:"O art. 24 da LRF aplica-se a benefício ou serviço de:",
  options:["Saúde, previdência e assistência social, inclusive de servidores e militares",
           "Apenas previdência social","Apenas saúde e assistência social",
           "Apenas benefícios do regime geral"],
  answer:0,
  why:"Art. 24, § 2º — alcança ativos, inativos e pensionistas."},

L42:{t:"sort", instr:"A despesa entra no cômputo do limite de pessoal?",
  buckets:["Entra","Não entra"],
  items:[["Vencimentos de servidores ativos",0],["Proventos de aposentadoria pagos pelo Tesouro",0],
         ["Terceirização que substitui servidores",0],
         ["Sentença judicial de competência do período apurado",0],
         ["Indenização por demissão",1],["Incentivo à demissão voluntária",1],
         ["Inativos custeados por contribuição dos segurados",1]],
  why:"Arts. 18 e 19, § 1º."}
};

for(var i=0;i<QS.length;i++) EX["N"+i]={t:"ce", qi:i};

var KIT = {
  O1:{tema:"Geração de despesa e DOCC",
    bases:["LC nº 101/2000, arts. 15, 16 e 17",
           "LC nº 101/2000, art. 24 — benefícios da seguridade social",
           "CF/1988, art. 195, § 5º — fonte de custeio total",
           "CF/1988, art. 182, § 3º — desapropriação de imóveis urbanos",
           "Lei nº 14.133/2021, art. 150 — adequação orçamentária nas contratações"],
    ouro:["não autorizadas, irregulares e lesivas ao patrimônio público",
          "estimativa do impacto orçamentário-financeiro","nos dois subsequentes",
          "declaração do ordenador da despesa","adequação orçamentária e financeira",
          "compatibilidade com o plano plurianual e a lei de diretrizes",
          "dotação específica e suficiente","despesa considerada irrelevante",
          "despesa corrente derivada de lei, medida provisória ou ato administrativo normativo",
          "período superior a dois exercícios","aumento permanente de receita",
          "redução permanente de despesa","indicação da fonte de custeio total"],
    abertura:"Nos termos do art. 15 da Lei de Responsabilidade Fiscal, serão consideradas não autorizadas, irregulares e lesivas ao patrimônio público a geração de despesa ou assunção de obrigação que não atendam o disposto nos arts. 16 e 17, os quais exigem, respectivamente, a estimativa do impacto orçamentário-financeiro acompanhada de declaração de adequação e compatibilidade, e, para a despesa obrigatória de caráter continuado, a demonstração da origem dos recursos e a compensação de seus efeitos futuros.",
    evite:"Não descreva a despesa obrigatória de caráter continuado como <b>despesa de capital</b> nem como obrigatória por “dois exercícios”: é <b>corrente</b> e por prazo <b>superior a dois</b>."},
  O2:{tema:"Despesa total com pessoal e limites globais",
    bases:["LC nº 101/2000, art. 18, caput e §§ 1º e 2º",
           "LC nº 101/2000, art. 19, caput e §§ 1º e 2º",
           "CF/1988, art. 169, caput — limites por lei complementar",
           "Manual de Demonstrativos Fiscais — Relatório de Gestão Fiscal"],
    ouro:["somatório dos gastos do ente com ativos, inativos e pensionistas",
          "quaisquer espécies remuneratórias","encargos sociais e contribuições",
          "substituição de servidores e empregados públicos","Outras Despesas de Pessoal",
          "mês em referência e os onze imediatamente anteriores","regime de competência",
          "independentemente de empenho","cinquenta por cento","sessenta por cento",
          "incentivos à demissão voluntária","decisão judicial de período anterior"],
    abertura:"Entende-se como despesa total com pessoal, na dicção do art. 18 da Lei de Responsabilidade Fiscal, o somatório dos gastos do ente da Federação com os ativos, os inativos e os pensionistas, com quaisquer espécies remuneratórias, inclusive encargos sociais e contribuições recolhidas às entidades de previdência, apurada somando-se a despesa do mês em referência com as dos onze imediatamente anteriores, pelo regime de competência e independentemente de empenho.",
    evite:"Não afirme que <b>toda</b> terceirização entra no limite: apenas a que se refere à <b>substituição de servidores e empregados públicos</b>. E não use o regime de caixa."},
  O3:{tema:"Repartição dos limites por Poder e órgão",
    bases:["LC nº 101/2000, art. 20, caput, incisos I a III e §§ 1º, 2º e 4º",
           "CF/1988, art. 169, §§ 1º a 4º",
           "CF/1988, art. 92 — órgãos do Poder Judiciário",
           "CF/1988, art. 168 — entrega dos recursos em duodécimos"],
    ouro:["dois vírgula cinco por cento","seis por cento","quarenta vírgula nove por cento",
          "zero vírgula seis por cento","três por cento","quarenta e nove por cento",
          "dois por cento","cinquenta e quatro por cento","incluído o Tribunal de Contas",
          "proporcional à média das despesas com pessoal",
          "três exercícios financeiros imediatamente anteriores","acrescidos e reduzidos em 0,4%"],
    abertura:"O art. 20 da Lei de Responsabilidade Fiscal reparte os limites globais entre os Poderes e órgãos, cabendo, na esfera estadual, três por cento ao Legislativo — incluído o Tribunal de Contas do Estado —, seis por cento ao Judiciário, quarenta e nove por cento ao Executivo e dois por cento ao Ministério Público, percentuais que somam o limite global de sessenta por cento da receita corrente líquida.",
    evite:"Não confunda os percentuais do Ministério Público: <b>0,6%</b> na União e <b>2%</b> nos Estados. E lembre que não há Judiciário nem MP no âmbito municipal."},
  O4:{tema:"Controle, limite prudencial e recondução",
    bases:["LC nº 101/2000, arts. 21, 22 e 23",
           "LC nº 173/2020 — nova redação do art. 21",
           "STF, ADI 2.238 — inconstitucionalidade dos §§ 1º e 2º do art. 23",
           "CF/1988, art. 169, §§ 3º e 4º — providências de recondução",
           "LC nº 101/2000, art. 59, § 1º, II — limite de alerta"],
    ouro:["nulo de pleno direito","cento e oitenta dias anteriores ao final do mandato",
          "parcelas a serem implementadas em períodos posteriores","recondução ou reeleição",
          "ao final de cada quadrimestre","noventa e cinco por cento do limite",
          "ressalvada a revisão geral anual","reposição decorrente de aposentadoria ou falecimento",
          "educação, saúde e segurança","dois quadrimestres seguintes","um terço no primeiro",
          "transferências voluntárias","garantia, direta ou indireta","operações de crédito"],
    abertura:"A verificação do cumprimento dos limites de despesa com pessoal realiza-se ao final de cada quadrimestre e, excedidos noventa e cinco por cento do limite, incidem sobre o Poder ou órgão as vedações do parágrafo único do art. 22; ultrapassado o limite, o percentual excedente terá de ser eliminado nos dois quadrimestres seguintes, sendo pelo menos um terço no primeiro.",
    evite:"Não diga que o limite prudencial é de 90% — esse é o <b>limite de alerta</b> do art. 59, § 1º, II. E não invoque a redução de jornada com corte de vencimentos: caiu na <b>ADI 2.238</b>."}
};

var DISCURSIVA =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Questão dissertativa de <b>até 30 linhas</b>. <b>94 questões catalogadas</b> — o assunto mais denso da LRF. Percentuais errados custam caro no espelho.</p></div>'+
  '<div class="prompt"><span class="vlab">Questão dissertativa — máximo de 30 linhas</span>'+
  '<p>Sobre a despesa com pessoal na Lei Complementar nº 101/2000, disserte necessariamente sobre:</p>'+
  '<ol><li>o conceito de despesa total com pessoal, sua forma de apuração e as exclusões legais;</li>'+
  '<li>os limites globais e sua repartição entre Poderes e órgãos nas três esferas;</li>'+
  '<li>o controle do cumprimento dos limites, o limite prudencial e as medidas de recondução, com a posição do Supremo Tribunal Federal.</li></ol></div>'+
  '<h5>Resposta modelo</h5>'+
  '<p>Entende-se como <b>despesa total com pessoal</b>, nos termos do <b>art. 18</b> da Lei de Responsabilidade Fiscal, o somatório dos gastos do ente da Federação com os <b>ativos, os inativos e os pensionistas</b>, relativos a mandatos eletivos, cargos, funções ou empregos, civis, militares e de membros de Poder, com <b>quaisquer espécies remuneratórias</b> — vencimentos e vantagens fixas e variáveis, subsídios, proventos, reformas e pensões, adicionais, gratificações, horas extras e vantagens pessoais de qualquer natureza —, bem como os <b>encargos sociais e as contribuições recolhidas pelo ente às entidades de previdência</b>. Os valores dos contratos de <b>terceirização de mão de obra</b> que se refiram à <b>substituição de servidores e empregados públicos</b> são contabilizados como <b>“Outras Despesas de Pessoal”</b> e, portanto, integram o cômputo. A apuração faz-se somando a despesa realizada no <b>mês em referência com as dos onze imediatamente anteriores</b>, adotando-se o <b>regime de competência</b>, <b>independentemente de empenho</b>. Não se computam, por força do <b>art. 19, § 1º</b>, entre outras, as despesas de <b>indenização por demissão</b>, as relativas a <b>incentivos à demissão voluntária</b>, as decorrentes de <b>decisão judicial de competência de período anterior</b> ao da apuração e as despesas com <b>inativos custeadas por contribuições dos segurados</b>, pela compensação previdenciária ou por receitas próprias do fundo; já as despesas com pessoal decorrentes de sentenças judiciais, observado aquele inciso, são <b>incluídas no limite do respectivo Poder ou órgão</b>.</p>'+
  '<p>Quanto aos <b>limites</b>, o <b>art. 19</b> fixa, para os fins do art. 169 da Constituição, que a despesa total com pessoal não excederá <b>50% da receita corrente líquida na União</b> e <b>60% nos Estados e nos Municípios</b>. O <b>art. 20</b> reparte esses globais. Na <b>esfera federal</b>: <b>2,5%</b> ao Legislativo, incluído o TCU; <b>6%</b> ao Judiciário; <b>40,9%</b> ao Executivo; e <b>0,6%</b> ao Ministério Público da União. Na <b>esfera estadual</b>: <b>3%</b> ao Legislativo, incluído o TCE; <b>6%</b> ao Judiciário; <b>49%</b> ao Executivo; e <b>2%</b> ao Ministério Público dos Estados. Na <b>esfera municipal</b>: <b>6%</b> ao Legislativo, incluído o Tribunal de Contas do Município quando houver, e <b>54%</b> ao Executivo. Nos Poderes Legislativo e Judiciário, os limites são repartidos entre seus <b>órgãos</b> de forma <b>proporcional à média das despesas com pessoal</b>, em percentual da receita corrente líquida, dos <b>três exercícios imediatamente anteriores</b> ao da publicação da lei complementar. Nos Estados em que houver <b>Tribunal de Contas dos Municípios</b>, os percentuais do Legislativo e do Executivo estaduais são, respectivamente, <b>acrescido e reduzido em 0,4%</b>.</p>'+
  '<p>O <b>controle</b> opera em degraus. A verificação do cumprimento dos limites realiza-se ao final de <b>cada quadrimestre</b> (art. 22). Atingidos <b>90%</b> do limite, o Tribunal de Contas emite <b>alerta</b> (art. 59, § 1º, II). Excedidos <b>95%</b> — o <b>limite prudencial</b> —, ficam vedados ao Poder ou órgão que incorreu no excesso: a concessão de vantagem, aumento, reajuste ou adequação de remuneração, <i>salvo</i> os derivados de sentença judicial ou de determinação legal ou contratual e ressalvada a <b>revisão geral anual</b>; a criação de cargo, emprego ou função; a alteração de estrutura de carreira que implique aumento de despesa; o provimento de cargo, admissão ou contratação a qualquer título, <i>salvo</i> a <b>reposição decorrente de aposentadoria ou falecimento</b> nas áreas de <b>educação, saúde e segurança</b>; e a contratação de hora extra, <i>salvo</i> nas situações previstas na lei de diretrizes. Ultrapassado o <b>limite máximo</b>, o excedente deve ser eliminado nos <b>dois quadrimestres seguintes, sendo pelo menos um terço no primeiro</b> (art. 23), adotando-se as providências dos <b>§§ 3º e 4º do art. 169 da Constituição</b>: redução de ao menos <b>20%</b> das despesas com cargos em comissão e funções de confiança, exoneração dos <b>servidores não estáveis</b> e, persistindo a insuficiência, perda do cargo do <b>servidor estável</b>, com indenização. Registre-se que o <b>Supremo Tribunal Federal</b>, na <b>ADI 2.238</b>, declarou <b>inconstitucionais</b> as previsões dos §§ 1º e 2º do art. 23 que autorizavam alcançar a redução pela <b>diminuição dos valores atribuídos aos cargos</b> e pela <b>redução temporária da jornada com adequação dos vencimentos</b>, por afronta à <b>irredutibilidade de vencimentos</b>. Não alcançada a redução no prazo, e enquanto perdurar o excesso, o ente não poderá <b>receber transferências voluntárias</b>, <b>obter garantia</b> de outro ente nem <b>contratar operações de crédito</b>, ressalvadas as de <b>refinanciamento da dívida mobiliária</b> e as que visem à <b>redução das despesas com pessoal</b> — restrições que incidem <b>imediatamente</b> se o excesso ocorrer no <b>primeiro quadrimestre do último ano do mandato</b>.</p>'+
  '<div class="box trap"><span class="bl">Espelho — onde estão os pontos</span>'+
  '<ul><li><b>Item 1:</b> o somatório com ativos, inativos e pensionistas, a regra da terceirização, os doze meses em competência e ao menos três exclusões do § 1º.</li>'+
  '<li><b>Item 2:</b> 50/60/60 e os <b>doze percentuais</b> do art. 20. Errar o MP (0,6% × 2%) é o deslize mais comum.</li>'+
  '<li><b>Item 3:</b> a escada 90/95/100, as cinco vedações <b>com as ressalvas</b>, os dois quadrimestres com 1/3, e a ADI 2.238 nominalmente.</li>'+
  '<li><b>Fecho:</b> as três sanções institucionais e a antecipação do § 4º fecham o raciocínio.</li></ul></div>';

var CASO =
  '<div class="box trap"><span class="bl">Formato real — TJPR / FUNDATEC</span>'+
  '<p>Estudo de caso de <b>até 20 linhas</b>. Há percentual a calcular — apresente a conta.</p></div>'+
  '<div class="prompt"><span class="vlab">Estudo de caso — máximo de 20 linhas</span>'+
  '<p>Ao final do segundo quadrimestre, o Tribunal de Justiça de determinado Estado apurou <b>despesa total com pessoal de R$ 580 milhões</b>, sendo a <b>receita corrente líquida do Estado de R$ 10 bilhões</b>. No mesmo período, o Tribunal:</p>'+
  '<ol><li>pretende nomear 40 aprovados em concurso para cargos de analista judiciário;</li>'+
  '<li>editou ato concedendo gratificação nova a um grupo de servidores;</li>'+
  '<li>deixou de computar, na apuração, R$ 12 milhões pagos a título de incentivo à demissão voluntária;</li>'+
  '<li>computou R$ 8 milhões de contratos de terceirização de mão de obra que substituem servidores;</li>'+
  '<li>cogita reduzir temporariamente a jornada dos servidores, com corte proporcional dos vencimentos, para voltar ao limite.</li></ol>'+
  '<p><b>Pergunta-se:</b> apure o percentual, indique o degrau de controle em que o Tribunal se encontra e avalie cada conduta.</p></div>'+
  '<h5>Resolução comentada</h5>'+
  '<p><b>1. Apuração do percentual.</b> A despesa de R$ 580 milhões sobre RCL de R$ 10 bilhões corresponde a <b>5,8% da receita corrente líquida</b>. O limite do <b>Poder Judiciário estadual</b> é de <b>6%</b> (art. 20, II, b), e o <b>limite prudencial</b> é <b>95% de 6%</b>, isto é, <b>5,7%</b>. Como 5,8% supera 5,7% e ainda não alcança 6%, o Tribunal está <b>acima do limite prudencial e abaixo do limite máximo</b>: incidem as vedações do <b>art. 22, parágrafo único</b>, mas ainda não a recondução do art. 23.</p>'+
  '<p><b>2. Nomeação dos aprovados.</b> <b>Vedada.</b> O art. 22, parágrafo único, IV, proíbe o <b>provimento de cargo público, admissão ou contratação de pessoal a qualquer título</b>, ressalvada apenas a <b>reposição decorrente de aposentadoria ou falecimento</b> de servidores das áreas de <b>educação, saúde e segurança</b> — o que não é o caso de analista judiciário.</p>'+
  '<p><b>3. Gratificação nova.</b> <b>Vedada.</b> Trata-se de concessão de <b>vantagem</b> e de <b>aumento de remuneração</b>, alcançada pelo inciso I, cujas ressalvas são apenas os aumentos <b>derivados de sentença judicial ou de determinação legal ou contratual</b> e a <b>revisão geral anual</b> do art. 37, X, da Constituição.</p>'+
  '<p><b>4. Exclusão do incentivo à demissão voluntária.</b> <b>Correta.</b> O art. 19, § 1º, II, determina que essas despesas <b>não sejam computadas</b> na verificação dos limites.</p>'+
  '<p><b>5. Cômputo da terceirização substitutiva.</b> <b>Correto.</b> O art. 18, § 1º, manda contabilizar como <b>“Outras Despesas de Pessoal”</b> os contratos de terceirização que se refiram à <b>substituição de servidores e empregados públicos</b>.</p>'+
  '<p><b>6. Redução de jornada com corte de vencimentos.</b> <b>Inviável.</b> A previsão constava do art. 23, § 2º, mas foi <b>declarada inconstitucional pelo STF na ADI 2.238</b>, por violar a <b>irredutibilidade de vencimentos</b>. A recondução deve buscar as providências do art. 169, §§ 3º e 4º, da Constituição.</p>'+
  '<div class="box trap"><span class="bl">Como a banca arma a pegadinha aqui</span>'+
  '<ul><li>Comparar os 5,8% com o limite <b>global de 60%</b> do Estado, e não com os <b>6% do Judiciário</b>.</li>'+
  '<li>Calcular o prudencial como <b>95% da RCL</b> em vez de <b>95% do limite do órgão</b>.</li>'+
  '<li>Liberar a nomeação do <b>2</b> invocando a ressalva de reposição — que só vale para educação, saúde e segurança.</li>'+
  '<li>Aceitar a redução de jornada do <b>6</b> pela letra do § 2º, ignorando a ADI 2.238.</li></ul></div>';

var TEC = [["Caderno completo — Conhecimentos Específicos TJPR 2026","https://www.tecconcursos.com.br/questoes/cadernos/103216249","103216249"]];
var TECNOTA = "Use o seu caderno do TJPR e filtre por <b>Da Despesa Pública (arts. 15 a 24 da LRF)</b> — são <b>94 questões</b> catalogadas, das quais 87 só de <b>Despesas com Pessoal</b>. É o assunto mais denso da LRF.";

var UNITS = [
  {n:1, title:"Geração de despesa e DOCC", cvar:"u1", lessons:[
    {id:"K1", type:"teoria", title:"Arts. 15 a 17 e a seguridade social", xp:10, data:"P1"},
    {id:"K2", type:"drill",  title:"Praticar · a cláusula do art. 15",  xp:20, data:["L1","N0"]},
    {id:"K3", type:"drill",  title:"Praticar · art. 16",                xp:25, data:["L2","L3","L4","L5","L6","N1","N2","N3","N4","N5","N6","N7","N8","N9"]},
    {id:"K4", type:"drill",  title:"Praticar · conceito de DOCC",       xp:25, data:["L7","L8","L9","N10","N11","N12"]},
    {id:"K5", type:"drill",  title:"Praticar · compensação da DOCC",    xp:25, data:["L10","L11","L12","N13","N14","N15","N16","N17"]},
    {id:"K6", type:"drill",  title:"Praticar · dispensas e prorrogação", xp:20, data:["L13","L14","N18","N19"]},
    {id:"K7", type:"drill",  title:"Praticar · seguridade social",      xp:25, data:["L39","L40","L41","N57","N58","N59"]},
    {id:"K8", type:"flash",  title:"Flashcards · geração de despesa",   xp:15, data:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},
    {id:"K9", type:"feynman",title:"Explique os arts. 15 a 17",         xp:30, data:"O1"}
  ]},
  {n:2, title:"Despesa com pessoal e limites", cvar:"u2", lessons:[
    {id:"K11",type:"teoria", title:"Arts. 18, 19 e 20",                 xp:10, data:"P2"},
    {id:"K12",type:"drill",  title:"Praticar · o que é despesa com pessoal", xp:25, data:["L15","L16","L42","N20","N21","N22"]},
    {id:"K13",type:"drill",  title:"Praticar · apuração em competência", xp:25, data:["L17","N23","N24"]},
    {id:"K14",type:"drill",  title:"Praticar · limites globais",        xp:25, data:["L18","L19","N25","N26","N27","N28","N29"]},
    {id:"K15",type:"drill",  title:"Praticar · repartição federal",     xp:25, data:["L21","N30","N31","N32"]},
    {id:"K16",type:"drill",  title:"Praticar · repartição estadual e municipal", xp:25, data:["L20","L22","N33","N34"]},
    {id:"K17",type:"drill",  title:"Praticar · regras do art. 20",      xp:25, data:["L23","L24","N35","N36"]},
    {id:"K18",type:"flash",  title:"Flashcards · pessoal e limites",    xp:15, data:[15,16,17,18,19,20,21,22,23,24,25,26,27]},
    {id:"K19",type:"feynman",title:"Explique a despesa total com pessoal", xp:30, data:"O2"},
    {id:"K20",type:"feynman",title:"Explique a repartição dos limites", xp:30, data:"O3"}
  ]},
  {n:3, title:"Nulidades, prudencial e recondução", cvar:"u3", lessons:[
    {id:"K22",type:"teoria", title:"Arts. 21, 22 e 23",                 xp:10, data:"P3"},
    {id:"K23",type:"drill",  title:"Praticar · atos nulos do art. 21",  xp:25, data:["L25","L26","L27","N37","N38","N39","N40","N41"]},
    {id:"K24",type:"drill",  title:"Praticar · verificação quadrimestral", xp:20, data:["L28","N42","N43"]},
    {id:"K25",type:"drill",  title:"Praticar · limite prudencial",      xp:25, data:["L29","L30","L31","N44","N45","N46","N47","N48"]},
    {id:"K26",type:"drill",  title:"Praticar · recondução ao limite",   xp:25, data:["L32","L33","N49","N50","N51"]},
    {id:"K27",type:"drill",  title:"Praticar · a ADI 2.238",            xp:25, data:["L34","N52"]},
    {id:"K28",type:"drill",  title:"Praticar · sanções institucionais", xp:25, data:["L35","L36","L37","N53","N54","N55","N56"]},
    {id:"K29",type:"drill",  title:"Praticar · os três degraus",        xp:25, data:["L38"]},
    {id:"K30",type:"flash",  title:"Flashcards · controle dos limites", xp:15, data:[28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46]},
    {id:"K31",type:"feynman",title:"Explique o controle dos limites",   xp:30, data:"O4"}
  ]},
  {n:4, title:"Aplicação e prova", cvar:"u4", lessons:[
    {id:"K33",type:"leitura",title:"Discursiva resolvida",              xp:25, data:"disc"},
    {id:"K34",type:"leitura",title:"Estudo de caso resolvido",          xp:25, data:"caso"},
    {id:"Krev",type:"review",title:"Revisão geral das unidades",        xp:60, data:null},
    {id:"K35",type:"missao", title:"Missão TEC Concursos",              xp:15, data:null},
    {id:"K36",type:"prova",  title:"Simulado cronometrado",             xp:100, data:null}
  ]}
];

var COM = {
0:"<p>Certo. Literalidade do art. 15: a geração de despesa ou assunção de obrigação que não atenda aos arts. 16 e 17 é considerada <b>não autorizada, irregular e lesiva ao patrimônio público</b>.</p><p>O Resumo marca aqui uma <b>PEGADINHA</b>: a banca troca os três adjetivos por <b>nulas de pleno direito</b>, e o material dá essa versão como ERRADA. Nulidade de pleno direito é a sanção do art. 21, para atos de despesa com pessoal, não a do art. 15.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da geração da despesa — art. 15 (PEGADINHA)</i></p>",
1:"<p>Certo. É o art. 16, I: a criação, expansão ou aperfeiçoamento de ação governamental que acarrete aumento da despesa será acompanhado de <b>estimativa do impacto orçamentário-financeiro</b> no exercício em que deva entrar em vigor e <b>nos dois subsequentes</b>.</p><p>O esquema do Resumo resume assim: <b>exercício de vigência + 2 subsequentes</b>. O segundo requisito é a <b>declaração do ordenador da despesa</b> de adequação com a LOA e compatibilidade com o PPA e a LDO.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do aumento da despesa — art. 16</i></p>",
2:"<p>Errado no número de exercícios. A estimativa alcança o exercício de entrada em vigor e os <b>dois</b> subsequentes, não três.</p><p>No esquema do Resumo: <b>exercício em que deva entrar em vigor + 2 subsequentes</b>. A mesma janela aparece na renúncia de receita (art. 14: exercício em que deva iniciar sua vigência e nos dois seguintes) e na DOCC (art. 17). Na LRF, três é o número dos exercícios <b>anteriores</b> comparados no Anexo de Metas Fiscais, não o horizonte da estimativa de impacto.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do aumento da despesa — art. 16</i></p>",
3:"<p>Certo. Art. 16, II: a declaração de que o aumento tem <b>adequação orçamentária e financeira com a LOA</b> e <b>compatibilidade com o PPA e com a LDO</b> é do <b>ordenador da despesa</b>.</p><p>O esquema do Resumo separa os dois requisitos para aumento da despesa: (1) estimativa do impacto orçamentário-financeiro; (2) <b>declaração do ordenador da despesa</b>. Não é o chefe do Executivo nem o Tribunal de Contas que firma a declaração.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do aumento da despesa — art. 16</i></p>",
4:"<p>Certo. Art. 16, § 1º, I: é adequada com a LOA a despesa objeto de <b>dotação específica e suficiente</b>, ou <b>abrangida por crédito genérico</b>, de forma que, somadas as despesas da mesma espécie, realizadas e a realizar, não se ultrapassem os limites do exercício.</p><p>O exemplo do Resumo: orçamento da saúde de R$ 10 milhões, com dotação específica de R$ 3 milhões para medicamentos. Gasto de R$ 1,5 milhão realizado + R$ 1,5 milhão previsto = R$ 3 milhões, dentro do limite. Logo, despesa adequada à LOA.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do aumento da despesa — art. 16, § 1º</i></p>",
5:"<p>Certo. Literalidade do art. 16, § 1º, II: é compatível com o PPA e a LDO a despesa que se conforme com as <b>diretrizes, objetivos, prioridades e metas</b> previstos nesses instrumentos e não infrinja qualquer de suas disposições.</p><p>O quadro NÃO CONFUNDA do Resumo fixa a dupla: a despesa deve ser <b>adequada com a LOA</b> e <b>compatível com o PPA e a LDO</b>. Adequação é com a LOA; compatibilidade é com PPA e LDO. A banca gosta de inverter os verbos.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do aumento da despesa — NÃO CONFUNDA (adequada x compatível)</i></p>",
6:"<p>Certo. Art. 16, § 2º, trazido nas OBSERVAÇÕES do Resumo: a estimativa do impacto orçamentário-financeiro no exercício em que deva entrar em vigor e nos dois subsequentes será acompanhada das <b>premissas e metodologia de cálculo utilizadas</b>.</p><p>Mesma lógica das previsões de receita do art. 12, que também vêm acompanhadas da metodologia de cálculo e das premissas utilizadas. A LRF exige que o número venha com a conta que o sustenta.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do aumento da despesa — OBSERVAÇÕES</i></p>",
7:"<p>Certo. Art. 16, § 3º, nas OBSERVAÇÕES do Resumo: tornou-se dispensável a estimativa do impacto orçamentário e financeiro para as <b>despesas irrelevantes</b>, assim consideradas nos termos da LDO.</p><p>O material acrescenta, pelo TCU (acórdão 1.256/04), que as <b>despesas ordinárias (rotineiras)</b> da Administração, já previstas no orçamento, também não precisam de estimativa de impacto. O art. 16 mira a criação, expansão ou aperfeiçoamento de ação governamental.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do aumento da despesa — OBSERVAÇÕES</i></p>",
8:"<p>Certo. Art. 16, § 4º: os requisitos para aumento de despesa constituem <b>condição prévia</b> para o <b>empenho</b> e a <b>licitação</b> de serviços, fornecimento de bens ou execução de obras.</p><p>A lista do Resumo tem cinco itens: empenho; licitação de serviços; fornecimento de bens; execução de obras; e <b>desapropriação de imóveis urbanos</b> do art. 182 da CF. Ou seja, antes de empenhar ou licitar, a estimativa e a declaração do ordenador já devem existir.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do aumento da despesa — art. 16, § 4º</i></p>",
9:"<p>Certo. O art. 16, § 4º, inclui entre as hipóteses de condição prévia a <b>desapropriação de imóveis urbanos</b> a que se refere o art. 182, § 3º, da Constituição.</p><p>É o quinto item da lista do Resumo, depois de empenho, licitação de serviços, fornecimento de bens e execução de obras. Costuma cair como item isolado para testar se o aluno lembra que a desapropriação também exige estimativa e declaração do ordenador.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do aumento da despesa — art. 16, § 4º</i></p>",
10:"<p>Certo. Literalidade do art. 17: é DOCC a <b>despesa corrente</b> derivada de <b>lei, medida provisória ou ato administrativo normativo</b> que fixe para o ente a obrigação legal de sua execução por período <b>superior a dois exercícios</b>.</p><p>O exemplo do Resumo é o pagamento de <b>aposentadorias de servidores públicos</b>: se a lei obriga o ente a pagá-las por período superior a 2 anos, a despesa é de caráter continuado e deve ser mantida mesmo que as condições econômicas mudem.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da despesa obrigatória de caráter continuado (DOCC)</i></p>",
11:"<p>Errado. DOCC é sempre <b>despesa corrente</b>. Despesa de capital não entra no conceito do art. 17, ainda que decorra de lei.</p><p>O esquema do Resumo tem quatro peças: (1) <b>a despesa corrente</b>; (2) derivada de lei, MP ou ato administrativo normativo; (3) que fixe para o ente a obrigação legal de sua execução; (4) por período <b>superior a 2 exercícios</b>. Basta faltar uma delas para não ser DOCC.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da despesa obrigatória de caráter continuado (DOCC)</i></p>",
12:"<p>Errado no prazo. O art. 17 exige obrigação de execução por período <b>superior a dois exercícios</b>, não a um.</p><p>O esquema do Resumo: despesa corrente + derivada de lei, MP ou ato administrativo normativo + obrigação legal de execução + <b>período superior a 2 exercícios</b>. No exemplo do material, aposentadorias pagas por período superior a 2 anos configuram DOCC.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da despesa obrigatória de caráter continuado (DOCC)</i></p>",
13:"<p>Certo. Art. 17, § 1º: os atos que criarem ou aumentarem DOCC deverão ser instruídos com a estimativa do impacto orçamentário-financeiro e <b>demonstrar a origem dos recursos para seu custeio</b>.</p><p>No esquema do Resumo (art. 17, §§ 1º e 2º), os atos que criarem ou aumentarem a DOCC deverão: ser instruídos com a estimativa do impacto (exercício de vigência + 2 subsequentes); <b>demonstrar a origem dos recursos</b>; comprovar que não afetará as metas do AMF; e compensar seus efeitos financeiros.</p><p class='fb-fonte'>LRF — Radegondes · <i>DOCC — art. 17, §§ 1º e 2º</i></p>",
14:"<p>Certo. Art. 17, § 2º: o ato deve vir com <b>comprovação de que a DOCC não afetará as metas de resultados fiscais</b> previstas no Anexo de Metas Fiscais, devendo seus efeitos financeiros, nos períodos seguintes, ser compensados.</p><p>O esquema do Resumo mostra as duas vias de compensação: <b>aumento permanente de receita</b> ou <b>redução permanente de despesa</b>. Note o contraste com a renúncia de receita: lá o material avisa que redução de despesa <b>não</b> serve de compensação.</p><p class='fb-fonte'>LRF — Radegondes · <i>DOCC — art. 17, §§ 1º e 2º</i></p>",
15:"<p>Certo. Pelo art. 17, § 3º, considera-se aumento permanente de receita o proveniente da <b>elevação de alíquotas, ampliação da base de cálculo, majoração ou criação de tributo ou contribuição</b>.</p><p>O Resumo não transcreve esse parágrafo, mas traz a mesma lista no art. 14, II, como medida de compensação da renúncia de receita: aumento de receita proveniente da elevação de alíquotas, ampliação da base de cálculo, majoração ou criação de tributo ou contribuição. A fórmula é a mesma nos dois artigos.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 17, § 3º, não é transcrito; o esquema da DOCC só menciona o aumento permanente de receita como forma de compensação.</p>",
16:"<p>Errado. Ingresso extraordinário por alienação de bens não é aumento <b>permanente</b> de receita. O art. 17, § 3º, só reconhece como tal a elevação de alíquotas, a ampliação da base de cálculo e a majoração ou criação de tributo ou contribuição.</p><p>Faz sentido com o que o Resumo ensina no art. 44: a receita de capital derivada da <b>alienação de bens</b> não pode financiar despesa corrente, salvo se destinada por lei aos regimes de previdência. E DOCC é justamente despesa corrente.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 17, § 3º, não é transcrito; o material só cita o aumento permanente de receita no esquema da DOCC.</p>",
17:"<p>Errado. O art. 17, § 5º, determina que a despesa <b>não será executada antes da implementação</b> das medidas de compensação referidas no § 2º, as quais integrarão o instrumento que a criar ou aumentar.</p><p>Paralelo útil com o que o Resumo traz na renúncia de receita (art. 14, § 2º): quando o benefício depende de medidas de compensação, ele só entra em vigor <b>quando implementadas tais medidas</b>. Primeiro a compensação, depois o gasto.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 17, § 5º, não é transcrito no material.</p>",
18:"<p>Certo. O art. 17, § 6º, afasta a exigência do § 1º (estimativa e origem dos recursos) para as despesas destinadas ao <b>serviço da dívida</b> e ao <b>reajustamento de remuneração de pessoal</b> do art. 37, X, da CF (revisão geral anual).</p><p>O Resumo trata o serviço da dívida com o mesmo cuidado em outro ponto: as despesas com o pagamento do serviço da dívida <b>não são objeto de limitação de empenho</b> (art. 9º, § 2º). E a revisão geral anual do art. 37, X, também é ressalvada nas vedações do limite prudencial.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 17, § 6º, não é transcrito no material.</p>",
19:"<p>Certo. O art. 17, § 7º, equipara a aumento de despesa a <b>prorrogação daquela criada por prazo determinado</b>.</p><p>A lógica: se a despesa tinha prazo para acabar e o ente a estende, está criando gasto novo para os exercícios seguintes, e por isso deve cumprir as mesmas exigências de estimativa de impacto e compensação.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 17, § 7º, não é transcrito; o material cobre apenas o caput e os §§ 1º e 2º do art. 17.</p>",
20:"<p>Certo. É o conceito do art. 18: despesa total com pessoal é o somatório dos gastos do ente com os <b>ativos, inativos e pensionistas</b>, com quaisquer espécies remuneratórias, <b>bem como encargos sociais e contribuições recolhidas pelo ente às entidades de previdência</b>.</p><p>O esquema do Resumo cobre as quatro frentes: ativos, inativos e pensionistas; mandatos eletivos, cargos, funções ou empregos, civis, militares e de membros de Poder; quaisquer espécies remuneratórias; e encargos sociais e contribuições previdenciárias.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das despesas com pessoal — art. 18</i></p>",
21:"<p>Certo. Literalidade do art. 18, § 1º: os contratos de terceirização de mão de obra que se referem à <b>substituição de servidores e empregados públicos</b> serão contabilizados como Outras Despesas de Pessoal.</p><p>O comentário do Resumo dá a razão: a finalidade é fazer com que essas contratações <b>integrem o limite de despesas com pessoal</b>; caso contrário haveria uma <b>burla</b> ao dispositivo.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das despesas com pessoal — art. 18, § 1º</i></p>",
22:"<p>Errado por generalizar. Só os contratos de terceirização que se referem à <b>substituição de servidores e empregados públicos</b> vão para Outras Despesas de Pessoal.</p><p>O Resumo explica o porquê: a regra existe para evitar a <b>burla</b> ao limite com pessoal, ou seja, para impedir que o ente troque servidor por terceirizado e escape da conta. Terceirização que não substitui servidor fica fora dessa rubrica.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das despesas com pessoal — art. 18, § 1º</i></p>",
23:"<p>Certo. Art. 18, § 2º: a despesa total com pessoal é apurada somando-se a realizada no <b>mês em referência</b> com as dos <b>11 imediatamente anteriores</b>, adotando-se o <b>regime de competência</b>, independentemente de empenho.</p><p>O comentário do Resumo: a despesa entra no cálculo mesmo sem empenho, <b>desde que ocorra o fato gerador da obrigação</b>. É a mesma janela de 12 meses usada para a RCL (mês em referência + 11 anteriores).</p><p class='fb-fonte'>LRF — Radegondes · <i>Das despesas com pessoal — art. 18, § 2º</i></p>",
24:"<p>Errado duas vezes. A apuração adota o <b>regime de competência</b> (não o de caixa) e é feita <b>independentemente de empenho</b>.</p><p>O comentário do Resumo: mesmo que a despesa não tenha sido compromissada, ela deve ser considerada no cálculo, <b>desde que ocorra o fato gerador da obrigação</b>. A soma é do mês em referência com os 11 imediatamente anteriores.</p><p class='fb-fonte'>LRF — Radegondes · <i>Das despesas com pessoal — art. 18, § 2º</i></p>",
25:"<p>Certo. Art. 19, I: a despesa total com pessoal da <b>União</b> não pode exceder <b>50%</b> da receita corrente líquida.</p><p>O quadro do Resumo: <b>União 50% · Estados 60% · Municípios 60%</b>. Dentro dos 50% da União, a repartição do art. 20 é: Legislativo + TCU 2,5%; Judiciário 6%; Executivo 40,9%; MPU 0,6%.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da despesa total com pessoal — art. 19</i></p>",
26:"<p>Certo. Art. 19, II e III: <b>Estados 60%</b> e <b>Municípios 60%</b> da RCL.</p><p>O quadro do Resumo: União 50% · Estados 60% · Municípios 60%. É também o exemplo de abertura do material: os municípios devem limitar seus gastos com pessoal a no máximo <b>60% da RCL</b>, sob pena de sanções como a suspensão de transferências voluntárias.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da despesa total com pessoal — art. 19</i></p>",
27:"<p>Certo. Art. 19, § 1º, I e II: não são computadas as despesas de <b>indenização por demissão</b> de servidores ou empregados e as relativas a <b>incentivos à demissão voluntária</b>.</p><p>A lista do Resumo tem seis exclusões: (1) indenização por demissão; (2) incentivos à demissão voluntária; (3) convocação extraordinária do Congresso Nacional; (4) decisão judicial de competência de período anterior aos 12 meses; (5) pessoal do DF, Amapá e Roraima custeado pela União; (6) inativos e pensionistas na parcela custeada por contribuições dos segurados, compensação entre regimes e transferências para equilíbrio atuarial.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da despesa total com pessoal — art. 19, § 1º</i></p>",
28:"<p>Errado. É o contrário: as despesas com inativos e pensionistas, na parcela custeada por recursos da <b>arrecadação de contribuições dos segurados</b>, <b>não</b> são computadas no limite (art. 19, § 1º, VI).</p><p>Pelo Resumo, a exclusão alcança a parcela custeada por: contribuições dos segurados; <b>compensação financeira entre regimes</b> (RGPS e RPPS); e transferências destinadas a promover o equilíbrio atuarial. Vale ainda que pagas por intermédio de unidade gestora única.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da despesa total com pessoal — art. 19, § 1º</i></p>",
29:"<p>Certo. Art. 19, § 2º, na OBS. do Resumo: as despesas com pessoal decorrentes de <b>sentenças judiciais</b> serão incluídas no limite do respectivo Poder ou órgão.</p><p>Não confunda com a exclusão do § 1º, IV: saem do cálculo as despesas de decisão judicial <b>da competência de período anterior</b> ao mês em referência e aos 11 anteriores. As sentenças dos <b>últimos 12 meses</b> entram no limite.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da despesa total com pessoal — art. 19, §§ 1º e 2º</i></p>",
30:"<p>Certo. Art. 20, I, b: na esfera federal, <b>6%</b> para o Judiciário.</p><p>O quadro do Resumo: <b>Federal (50%)</b>: Legislativo + TCU 2,5%; Judiciário 6%; Executivo 40,9%; MPU 0,6%. <b>Estadual (60%)</b>: Legislativo + TCE 3%; Judiciário 6%; Executivo 49%; MPE 2%. O Judiciário tem 6% nas duas esferas.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da repartição dos limites globais — art. 20</i></p>",
31:"<p>Certo. Art. 20, I, a: <b>2,5% para o Legislativo, incluído o Tribunal de Contas da União</b>.</p><p>O quadro do Resumo coloca o Tribunal de Contas sempre dentro do Legislativo: <b>Legislativo + TCU 2,5%</b> (federal), <b>Legislativo + TCE 3%</b> (estadual), <b>Legislativo + TCM 6%</b> (municipal). Os demais da União: Judiciário 6%, Executivo 40,9%, MPU 0,6%.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da repartição dos limites globais — art. 20</i></p>",
32:"<p>Errado no percentual. O MPU tem <b>0,6%</b> da RCL. Os <b>2%</b> são do Ministério Público dos <b>Estados</b>.</p><p>O quadro do Resumo: <b>Federal</b>: Legislativo + TCU 2,5%; Judiciário 6%; Executivo 40,9%; <b>MPU 0,6%</b>. <b>Estadual</b>: Legislativo + TCE 3%; Judiciário 6%; Executivo 49%; <b>MPE 2%</b>. A banca troca os números do MP entre as esferas.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da repartição dos limites globais — art. 20</i></p>",
33:"<p>Certo. Art. 20, II: na esfera estadual, <b>Legislativo + TCE 3%</b>, <b>Judiciário 6%</b>, <b>Executivo 49%</b> e <b>MP 2%</b>, somando os 60%.</p><p>Pelo quadro do Resumo, confira sempre a soma: 3 + 6 + 49 + 2 = 60. Na União: 2,5 + 6 + 40,9 + 0,6 = 50. No Município: 6 + 54 = 60.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da repartição dos limites globais — art. 20</i></p>",
34:"<p>Certo. Art. 20, III: <b>6% para o Legislativo, incluído o Tribunal de Contas do Município, quando houver</b>, e <b>54% para o Executivo</b>.</p><p>O quadro do Resumo mostra que a esfera municipal só tem duas fatias (Legislativo + TCM 6% e Executivo 54%), somando 60%. Município não tem Judiciário nem Ministério Público próprios.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da repartição dos limites globais — art. 20</i></p>",
35:"<p>Certo. Art. 20, § 4º: nos Estados em que houver <b>Tribunal de Contas DOS MUNICÍPIOS</b>, o Legislativo estadual ganha 0,4% e o Executivo perde 0,4%.</p><p>A OBS. 01 do Resumo dá os números finais: <b>3,4% para o Legislativo</b> e <b>48,6% para o Executivo</b>. Ou seja, 3% + 0,4% e 49% − 0,4%, mantido o total de 60%.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da repartição dos limites globais — OBS. 01</i></p>",
36:"<p>Certo. O art. 20, § 1º, manda repartir os limites do Legislativo e do Judiciário entre seus órgãos de forma <b>proporcional à média das despesas com pessoal</b>, em percentual da RCL, verificadas nos <b>três exercícios financeiros imediatamente anteriores</b> ao da publicação da LRF.</p><p>O Resumo traz a repartição por Poder (Legislativo + TCU 2,5%, Judiciário 6% etc.), mas não a regra de divisão interna entre os órgãos de cada Poder.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 20, § 1º, não é transcrito; o material traz apenas os percentuais por Poder e o § 4º (TCM).</p>",
37:"<p>Certo. O art. 21, I, declara nulo de pleno direito o ato que provoque aumento da despesa com pessoal e não atenda às <b>exigências dos arts. 16 e 17</b> da LRF, entre outros requisitos.</p><p>Liga com o que o Resumo ensina no art. 15: despesa que não atenda aos arts. 16 e 17 é <b>não autorizada, irregular e lesiva</b>. Quando o assunto é <b>pessoal</b>, o art. 21 vai além e fala em <b>nulidade de pleno direito</b>. Por isso a PEGADINHA do art. 15.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o material transcreve só o inciso II do art. 21 (180 dias).</p>",
38:"<p>Certo. Literalidade do art. 21, II: é nulo de pleno direito o ato de que resulte aumento da despesa com pessoal nos <b>180 dias anteriores ao final do mandato</b> do titular de Poder ou órgão do art. 20.</p><p>O quadro NÃO CONFUNDA do Resumo separa os três prazos de fim de mandato: <b>art. 21, II</b> — 180 dias (pessoal); <b>art. 38, IV, b</b> — ARO proibida no <b>último ano</b> de mandato do chefe do Executivo; <b>art. 42</b> — <b>últimos 2 quadrimestres</b> (obrigação sem caixa).</p><p class='fb-fonte'>LRF — Radegondes · <i>Do controle da despesa total com pessoal — NÃO CONFUNDA</i></p>",
39:"<p>Errado no prazo. O art. 21, II, fala em <b>180 dias</b> anteriores ao final do mandato, não 120.</p><p>O Resumo avisa em ATENÇÃO que as bancas tentam confundir esse prazo com os dos arts. 38 e 42. O quadro: <b>180 dias</b> (aumento de despesa com pessoal, art. 21, II); <b>último ano</b> de mandato do chefe do Executivo (ARO, art. 38, IV, b); <b>últimos 2 quadrimestres</b> (obrigação de despesa sem caixa, art. 42).</p><p class='fb-fonte'>LRF — Radegondes · <i>Do controle da despesa total com pessoal — ATENÇÃO</i></p>",
40:"<p>Certo. O art. 21, IV (incluído pela LC 173/2020), declara nulo o ato de que resulte aumento da despesa com pessoal que preveja <b>parcelas a serem implementadas em períodos posteriores ao final do mandato</b> do titular de Poder ou órgão.</p><p>Complementa o inciso II, que o Resumo traz: além dos atos editados nos <b>180 dias</b> anteriores ao fim do mandato, também é nulo o ato que empurra parcelas do aumento para o sucessor.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o material transcreve apenas o inciso II do art. 21.</p>",
41:"<p>Errado. O art. 21, § 1º, I (LC 173/2020), manda aplicar as restrições dos incisos II, III e IV <b>inclusive durante o período de recondução ou reeleição</b> para o cargo de titular do Poder ou órgão.</p><p>Assim, o prazo de <b>180 dias</b> anteriores ao final do mandato, que o Resumo destaca no art. 21, II, vale mesmo que o titular seja reeleito.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 21, § 1º, não é transcrito; o material traz apenas o inciso II.</p>",
42:"<p>Certo. A OBS. 02 do Resumo traz o art. 22: a verificação do cumprimento dos limites de despesa com pessoal será realizada <b>ao final de cada quadrimestre</b>.</p><p>O quadrimestre é a régua de todo o controle de pessoal: o excesso deve ser eliminado nos <b>dois quadrimestres seguintes</b> (art. 23), e as sanções são imediatas se o limite for excedido no <b>primeiro quadrimestre</b> do último ano do mandato.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da repartição dos limites globais — OBS. 02</i></p>",
43:"<p>Errado. A verificação é <b>quadrimestral</b> (art. 22), não semestral.</p><p>Pela OBS. 02 do Resumo, a verificação dos limites de despesa com pessoal ocorre <b>ao final de cada quadrimestre</b>. A contagem dos prazos de recondução (art. 23) também é em quadrimestres.</p><p class='fb-fonte'>LRF — Radegondes · <i>Da repartição dos limites globais — OBS. 02</i></p>",
44:"<p>Certo. Art. 22, parágrafo único, II: excedidos <b>95% do limite</b> (limite prudencial), é vedado ao Poder ou órgão <b>criar cargo, emprego ou função</b>.</p><p>A lista do Resumo tem cinco vedações: (1) conceder vantagem, aumento, reajuste ou adequação de remuneração, com ressalvas; (2) <b>criar cargo, emprego ou função</b>; (3) alterar estrutura de carreira que implique aumento de despesa; (4) prover cargo, admitir ou contratar pessoal, salvo reposição nas áreas de ESS; (5) contratar hora extra, com ressalvas.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do limite prudencial</i></p>",
45:"<p>Certo. Art. 22, parágrafo único, I: é vedado conceder vantagem, aumento, reajuste ou adequação de remuneração a qualquer título, <b>salvo os derivados de sentença judicial ou de determinação legal ou contratual</b>.</p><p>O Resumo completa com a outra ressalva: fica também ressalvada a <b>Revisão Geral Anual</b> prevista no inciso X do art. 37 da CF. São, portanto, três saídas: sentença judicial, determinação legal ou contratual, e revisão geral anual.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do limite prudencial</i></p>",
46:"<p>Errado. Há exceção: é ressalvada a <b>reposição decorrente de aposentadoria ou falecimento</b> de servidores das áreas de <b>ESS</b> (Educação, Saúde e Segurança).</p><p>O quadro NÃO CONFUNDA do Resumo contrapõe as duas siglas: no limite prudencial (art. 22), a exceção para contratar é <b>ESS</b> — Educação, Saúde e <b>Segurança</b>; na suspensão de transferências voluntárias (art. 25, § 3º), a exceção é <b>ESA</b> — Educação, Saúde e <b>Assistência social</b>.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do limite prudencial — NÃO CONFUNDA (ESS x ESA)</i></p>",
47:"<p>Certo. Art. 22, parágrafo único, V: é vedado contratar hora extra, <b>salvo</b> no caso de <b>convocação extraordinária do Congresso Nacional</b> e nas <b>situações previstas na LDO</b>.</p><p>A assertiva cita só a ressalva da LDO, o que não a torna errada. Lembre que a convocação extraordinária do Congresso aparece duas vezes no Resumo: como ressalva à vedação de hora extra e como despesa <b>não computada</b> no limite de pessoal (art. 19, § 1º).</p><p class='fb-fonte'>LRF — Radegondes · <i>Do limite prudencial</i></p>",
48:"<p>Errado. O limite prudencial é de <b>95%</b> do limite. <b>90%</b> é o <b>limite de alerta</b>.</p><p>O quadro NÃO CONFUNDA do Resumo: limite de alerta, quando ultrapassar <b>90%</b>; limite prudencial, quando ultrapassar <b>95%</b>. E o ATENÇÃO do material: <b>no limite de alerta não há sanções, é só um alerta</b> do Tribunal de Contas. As vedações começam no prudencial.</p><p class='fb-fonte'>LRF — Radegondes · <i>Do limite de alerta x limite prudencial</i></p>",
49:"<p>Certo. Literalidade do art. 23: o percentual excedente terá de ser eliminado nos <b>dois quadrimestres seguintes</b>, sendo <b>pelo menos um terço no primeiro</b>.</p><p>O quadro NÃO CONFUNDA do Resumo: <b>despesa com pessoal (art. 23)</b> — 2 quadrimestres, pelo menos <b>1/3</b> no primeiro; <b>dívida consolidada (art. 31)</b> — 3 quadrimestres, pelo menos <b>1/4 (25%)</b> no primeiro.</p><p class='fb-fonte'>LRF — Radegondes · <i>Limite de 100% ultrapassado — art. 23</i></p>",
50:"<p>Errado nos dois números. Para a despesa com pessoal, o excedente deve ser eliminado nos <b>dois</b> quadrimestres seguintes, com pelo menos <b>um terço</b> no primeiro.</p><p>A assertiva misturou regras. Pelo quadro NÃO CONFUNDA do Resumo: pessoal (art. 23) = <b>2 quadrimestres e 1/3</b>; dívida consolidada (art. 31) = <b>3 quadrimestres e 1/4 (25%)</b>. Nenhuma das duas fala em metade.</p><p class='fb-fonte'>LRF — Radegondes · <i>Recondução — NÃO CONFUNDA (art. 23 x art. 31)</i></p>",
51:"<p>Certo. São as providências do art. 169, §§ 3º e 4º, da CF, citadas pelo art. 23.</p><p>O Resumo as lista em ordem: <b>1º)</b> redução em pelo menos <b>20%</b> das despesas com cargos em comissão e funções de confiança; <b>2º)</b> exoneração dos servidores <b>não estáveis</b>; <b>3º)</b> exoneração dos servidores <b>estáveis</b>, se as medidas anteriores não forem suficientes.</p><p class='fb-fonte'>LRF — Radegondes · <i>Limite de 100% ultrapassado — art. 23</i></p>",
52:"<p>Certo. O art. 23, § 2º, facultava a redução temporária da jornada de trabalho com adequação dos vencimentos à nova carga horária, e o STF declarou essa previsão inconstitucional (ADI 2.238), por ofensa à irredutibilidade de vencimentos.</p><p>O Resumo lista apenas as providências constitucionais do art. 169, §§ 3º e 4º: corte de pelo menos 20% em cargos em comissão e funções de confiança, exoneração de não estáveis e, se preciso, de estáveis. A redução de jornada não aparece entre elas.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 23, § 2º, e a decisão do STF não são tratados no material.</p>",
53:"<p>Certo. Art. 23, § 3º, I e II: não alcançada a redução e enquanto perdurar o excesso, o Poder ou órgão não poderá <b>receber transferências voluntárias</b> nem <b>obter garantia, direta ou indireta, de outro ente</b>.</p><p>A terceira sanção é <b>contratar operações de crédito</b>, ressalvadas as destinadas ao pagamento da dívida mobiliária e as que visem à redução das despesas com pessoal. O ATENÇÃO do Resumo lembra que a suspensão de transferências voluntárias poupa as ações de <b>ESA</b> (educação, saúde e assistência social).</p><p class='fb-fonte'>LRF — Radegondes · <i>Sanções — art. 23, § 3º</i></p>",
54:"<p>Errado no sem exceção. O art. 23, § 3º, III, ressalva as operações de crédito <b>destinadas ao pagamento da dívida mobiliária</b> e as que <b>visem à redução das despesas com pessoal</b>.</p><p>No Resumo, as três sanções são: não receber transferências voluntárias; não obter garantia de outro ente; e não contratar operações de crédito, <b>com essas duas ressalvas</b>. Quem nega qualquer exceção erra.</p><p class='fb-fonte'>LRF — Radegondes · <i>Sanções — art. 23, § 3º</i></p>",
55:"<p>Certo. Literalidade do art. 23, § 4º: as restrições do § 3º aplicam-se <b>imediatamente</b> se a despesa total com pessoal exceder o limite no <b>primeiro quadrimestre do último ano do mandato</b> dos titulares de Poder ou órgão do art. 20.</p><p>Não há o prazo de dois quadrimestres para recondução nesse caso: o gestor em fim de mandato já sofre na hora a suspensão de transferências voluntárias, de garantias e de operações de crédito.</p><p class='fb-fonte'>LRF — Radegondes · <i>Sanções — art. 23, § 4º</i></p>",
56:"<p>Certo. É o caput do art. 24 da LRF, que reproduz o art. 195, § 5º, da CF: nenhum benefício ou serviço da seguridade social pode ser criado, majorado ou estendido sem a <b>indicação da fonte de custeio total</b>, atendidas também as exigências do art. 17.</p><p>O Resumo cita a seguridade social só no art. 1º, § 1º: a responsabilidade na gestão fiscal exige obediência a limites e condições na <b>geração de despesas da seguridade social</b>.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 24 não é tratado no material.</p>",
57:"<p>Certo. O art. 24, § 1º, I, dispensa da compensação referida no art. 17 o aumento de despesa decorrente da <b>concessão de benefício a quem satisfaça as condições de habilitação</b> previstas na legislação pertinente.</p><p>A lógica: o benefício já existe em lei, e um novo segurado que cumpre os requisitos não cria despesa nova, só executa o que a lei já previa.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 24 não é tratado no material.</p>",
58:"<p>Certo. O art. 24, § 1º, II e III, também dispensa da compensação a <b>expansão quantitativa do atendimento</b> e dos serviços prestados, e o <b>reajustamento de valor do benefício</b> ou serviço para preservar o seu valor real.</p><p>Somadas ao inciso I (concessão a quem cumpre as condições de habilitação), são as três hipóteses de dispensa da compensação.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 24 não é tratado no material.</p>",
59:"<p>Certo. O art. 24, § 2º, estende a regra a benefício ou serviço de <b>saúde, previdência e assistência social</b>, inclusive os destinados aos <b>servidores públicos e militares, ativos e inativos, e aos pensionistas</b>.</p><p>Saúde, previdência e assistência social são justamente as três áreas que formam a seguridade social, tema do caput do art. 24.</p><p class='fb-fonte off'>Não consta do resumo de LRF — o art. 24 não é tratado no material.</p>",
};

var PROVA_POOL=[];
for(var k in EX){ if(EX[k].t!=="match") PROVA_POOL.push(k); }

return {n:"04", nome:"Despesa pública e despesas com pessoal", pronto:true,
        CARDS:CARDS, QS:QS, FEY:FEY, TEORIA:TEORIA, EX:EX, KIT:KIT, UNITS:UNITS, COM:COM,
        DISCURSIVA:DISCURSIVA, CASO:CASO, TEC:TEC, TECNOTA:TECNOTA, PROVA_POOL:PROVA_POOL};
})();
